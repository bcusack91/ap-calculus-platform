#!/usr/bin/env node
/**
 * fix-all-placeholders.js
 * 
 * Master script that fixes all 252 placeholder interactive lesson files.
 * Delegates to per-topic rewrite modules in scripts/content-patches/.
 * 
 * Usage: node scripts/fix-all-placeholders.js
 */
const fs = require('fs');
const path = require('path');

const LESSONS_DIR = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');
const PATCHES_DIR = path.join(__dirname, 'content-patches');

/**
 * Apply a content patch to a placeholder file.
 * Replaces the input-boxes, MCQ, dropdown, intro, worked-example, and practice sections.
 */
function applyPatch(filePath, patch) {
  let src = fs.readFileSync(filePath, 'utf8');
  const original = src;

  // ---- Replace input-boxes section ----
  if (patch.input) {
    const { boxes, correctAnswers, content, hint1, hint2, hint3, explanation } = patch.input;
    // Match the input-boxes content + exercise block
    const inputRe = /(type: 'input-boxes' as const,\s*content: `)[^`]*(`,\s*exercise: \{)\s*boxes:\s*\d+,\s*correctAnswers:\s*\[[^\]]*\],[^}]*\}/s;
    const replacement = `$1${content}\n    $2\n        boxes: ${boxes},\n        correctAnswers: ${JSON.stringify(correctAnswers)},\n        hint1: ${JSON.stringify(hint1)},\n        hint2: ${JSON.stringify(hint2)},\n        hint3: ${JSON.stringify(hint3)},\n        explanation: ${JSON.stringify(explanation)}\n      }`;
    src = src.replace(inputRe, replacement);
  }

  // ---- Replace intro text section ----
  if (patch.introContent) {
    src = src.replace(
      /(id: '[^']*-intro',\s*type: 'text' as const,\s*content: `)[^`]*(`)/s,
      `$1${patch.introContent}\n    $2`
    );
  }

  // ---- Replace worked example section ----
  if (patch.workedContent) {
    src = src.replace(
      /(id: '[^']*-worked',\s*type: 'text' as const,\s*content: `)[^`]*(`)/s,
      `$1${patch.workedContent}\n    $2`
    );
  }

  // ---- Replace practice table section ----
  if (patch.practiceContent) {
    src = src.replace(
      /(id: '[^']*-practice',\s*type: 'text' as const,\s*content: `)[^`]*(`)/s,
      `$1${patch.practiceContent}\n    $2`
    );
  }

  // ---- Replace MCQ1 ----
  if (patch.mcq1) {
    const qs = JSON.stringify(patch.mcq1.questions, null, 10);
    src = src.replace(
      /(id: '[^']*-mcq1',\s*type: 'multiple-choice' as const,\s*content: `)[^`]*(`,\s*exercise: \{\s*questions:\s*)\[[\s\S]*?\](\s*\})/s,
      `$1\n**Concept Check** 🎯\n    $2${qs}$3`
    );
  }

  // ---- Replace MCQ2 ----
  if (patch.mcq2) {
    const qs = JSON.stringify(patch.mcq2.questions, null, 10);
    src = src.replace(
      /(id: '[^']*-mcq2',\s*type: 'multiple-choice' as const,\s*content: `)[^`]*(`,\s*exercise: \{\s*questions:\s*)\[[\s\S]*?\](\s*\})/s,
      `$1\n**Challenge Question** 📋\n    $2${qs}$3`
    );
  }

  // ---- Replace dropdown ----
  if (patch.dropdown) {
    const dd = patch.dropdown;
    const ddBlock = `dropdowns: ${JSON.stringify(dd.dropdowns)},\n        correctAnswers: ${JSON.stringify(dd.correctAnswers)},\n        hint1: ${JSON.stringify(dd.hint1)},\n        hint2: ${JSON.stringify(dd.hint2)},\n        explanation: ${JSON.stringify(dd.explanation)}`;
    src = src.replace(
      /(id: '[^']*-dropdown',\s*type: 'dropdown-select' as const,\s*content: `)[^`]*(`,\s*exercise: \{)\s*dropdowns:\s*\[[\s\S]*?\],\s*correctAnswers:\s*\[[^\]]*\],[^}]*\}/s,
      `$1\n**Concept Check** 🔍\n    $2\n        ${ddBlock}\n      }`
    );
  }

  // Verify replacement worked
  if (src.includes('correctAnswers: ["correct"]')) {
    return { success: false, reason: 'input-boxes replacement failed' };
  }
  if (src === original) {
    return { success: false, reason: 'no changes made' };
  }

  fs.writeFileSync(filePath, src);
  return { success: true };
}

// Main
function main() {
  // Find placeholder files
  const files = fs.readdirSync(LESSONS_DIR).filter(f => f.endsWith('.ts'));
  const placeholders = [];
  for (const f of files) {
    const content = fs.readFileSync(path.join(LESSONS_DIR, f), 'utf8');
    if (content.includes('correctAnswers: ["correct"]')) {
      const m = content.match(/Part (\d+) of 7/);
      const partNum = m ? parseInt(m[1]) : null;
      const topic = f.replace(/-part\d+\.ts$/, '');
      placeholders.push({ file: f, topic, partNum, fullPath: path.join(LESSONS_DIR, f) });
    }
  }
  console.log(`Found ${placeholders.length} placeholder files`);

  // Load content patches
  const patchFiles = fs.readdirSync(PATCHES_DIR).filter(f => f.endsWith('.js'));
  const allPatches = {};
  for (const pf of patchFiles) {
    const patches = require(path.join(PATCHES_DIR, pf));
    Object.assign(allPatches, patches);
  }
  console.log(`Loaded patches for ${Object.keys(allPatches).length} topics`);

  let fixed = 0, skipped = 0;
  const missingTopics = new Set();

  for (const p of placeholders) {
    const topicPatches = allPatches[p.topic];
    if (!topicPatches || !topicPatches[p.partNum - 1]) {
      missingTopics.add(p.topic);
      skipped++;
      continue;
    }
    const patch = topicPatches[p.partNum - 1];
    const result = applyPatch(p.fullPath, patch);
    if (result.success) {
      fixed++;
    } else {
      console.warn(`  WARN: ${p.file} — ${result.reason}`);
      skipped++;
    }
  }

  console.log(`\nDone: ${fixed} fixed, ${skipped} skipped`);
  if (missingTopics.size > 0) {
    console.log('Missing patch topics:', [...missingTopics].sort().join(', '));
  }
}

main();
