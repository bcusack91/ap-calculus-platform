/**
 * Script to apply visual improvements to all AP Chemistry interactive lesson text sections.
 * 
 * Transformations:
 * 1. Add emojis to ## headings that don't already have them
 * 2. Add --- horizontal rules before ### subsections
 * 3. Wrap key equations (standalone $$ blocks preceded by text like "The key equation" etc.) in blockquotes
 * 4. Wrap standalone important notes/conclusions in blockquotes
 */

const fs = require('fs');
const path = require('path');

const LESSONS_DIR = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

// Emoji mapping for common h2 heading keywords
const H2_EMOJI_MAP = [
  [/\bwhat is\b/i, '📖'],
  [/\bdefinition/i, '📖'],
  [/\bintroduction\b/i, '📖'],
  [/\bintro\b/i, '📖'],
  [/\boverview\b/i, '📖'],
  [/\breview\b/i, '🔄'],
  [/\bsummary\b/i, '📋'],
  [/\bmaster summary\b/i, '📋'],
  [/\bkey concept/i, '💡'],
  [/\bkey equation/i, '🔑'],
  [/\bthe key equation/i, '🔑'],
  [/\bcalculat/i, '🔢'],
  [/\bworked example/i, '🧪'],
  [/\bexample/i, '🧪'],
  [/\bpractice/i, '✏️'],
  [/\bproblem.solving/i, '🛠️'],
  [/\bworkshop/i, '🛠️'],
  [/\bstrateg/i, '🎯'],
  [/\bsynthesis/i, '🎯'],
  [/\bap review/i, '🎯'],
  [/\btrend/i, '📈'],
  [/\bperiodic/i, '📊'],
  [/\bflow/i, '🔀'],
  [/\bdirection/i, '🔀'],
  [/\bstructure/i, '🏗️'],
  [/\banatomy/i, '🏗️'],
  [/\bcomponent/i, '🏗️'],
  [/\bnotation/i, '📝'],
  [/\bwriting\b/i, '✍️'],
  [/\bbalancing\b/i, '⚖️'],
  [/\bconnect/i, '🔗'],
  [/\brelationship/i, '🔗'],
  [/\bcompar/i, '⚖️'],
  [/\bconvert/i, '🔄'],
  [/\btype/i, '📂'],
  [/\bclass/i, '📂'],
  [/\bcategor/i, '📂'],
  [/\brule/i, '📏'],
  [/\blaw/i, '📏'],
  [/\bprinciple/i, '📏'],
  [/\bspecial case/i, '⭐'],
  [/\bexception/i, '⚠️'],
  [/\bwhy\b/i, '🤔'],
  [/\bhow\b/i, '🔧'],
  [/\bproperty/i, '🔬'],
  [/\bproperties/i, '🔬'],
  [/\bfactor/i, '📊'],
  [/\beffect/i, '📊'],
  [/\bequilibrium/i, '⚖️'],
  [/\breaction/i, '⚗️'],
  [/\bacid/i, '🧪'],
  [/\bbase\b/i, '🧪'],
  [/\bsolution/i, '🧪'],
  [/\bbuffer/i, '🛡️'],
  [/\btitrat/i, '🧪'],
  [/\bthermo/i, '🌡️'],
  [/\benthalpy/i, '🌡️'],
  [/\bentropy/i, '🌡️'],
  [/\bfree energy/i, '⚡'],
  [/\bgibbs/i, '⚡'],
  [/\bspontan/i, '⚡'],
  [/\belectro/i, '🔋'],
  [/\bcell\b/i, '🔋'],
  [/\bnernst/i, '🔋'],
  [/\brate/i, '⏱️'],
  [/\bkinetic/i, '⏱️'],
  [/\bmechanism/i, '⚙️'],
  [/\bstep/i, '📋'],
  [/\bion/i, '⚛️'],
  [/\bbond/i, '🔗'],
  [/\borbital/i, '🌀'],
  [/\bhybrid/i, '🌀'],
  [/\bgeometry/i, '📐'],
  [/\bshape/i, '📐'],
  [/\bvsepr/i, '📐'],
  [/\blewis/i, '✏️'],
  [/\bintermolecular/i, '🤝'],
  [/\bgas\b/i, '💨'],
  [/\bpressure/i, '💨'],
  [/\bvolume/i, '💨'],
  [/\btemperature/i, '🌡️'],
  [/\bmole/i, '⚖️'],
  [/\bstoichiom/i, '⚖️'],
  [/\blimit/i, '⚖️'],
  [/\bsolubil/i, '💧'],
  [/\bdissolv/i, '💧'],
  [/\bredox/i, '⚡'],
  [/\boxid/i, '⚡'],
  [/\breduct/i, '⚡'],
  [/\bconfig/i, '🌀'],
  [/\belectron\b/i, '⚛️'],
  [/\bphotoelectron/i, '📊'],
  [/\bstate/i, '🧊'],
  [/\bphase/i, '🧊'],
  [/\bmixture/i, '🧪'],
  [/\bseparat/i, '🧪'],
  [/\bconjugate/i, '🔄'],
  [/\bpair/i, '🔄'],
  [/\bidentif/i, '🔍'],
  [/\bdetermin/i, '🔍'],
  [/\bfind/i, '🔍'],
  [/\bpredict/i, '🔮'],
  [/\bapplication/i, '🔧'],
  [/\breal.world/i, '🌍'],
  [/\bsuccessive/i, '📈'],
];

function getEmojiForHeading(text) {
  // Check if already has emoji (starts with emoji after ##)
  const stripped = text.trim();
  // Common emoji ranges
  if (/^[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}\u{FE0F}\u{200D}]/u.test(stripped)) {
    return null; // already has emoji
  }
  
  for (const [pattern, emoji] of H2_EMOJI_MAP) {
    if (pattern.test(stripped)) {
      return emoji;
    }
  }
  return '📌'; // default fallback
}

function addHorizontalRules(content) {
  // Add --- before ### headings that don't already have one
  // Look for ### not preceded by --- (with optional whitespace)
  const lines = content.split('\n');
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    if (trimmed.startsWith('### ') && !trimmed.startsWith('#### ')) {
      // Check if previous non-empty line is already ---
      let prevNonEmpty = '';
      for (let j = i - 1; j >= 0; j--) {
        if (lines[j].trim()) {
          prevNonEmpty = lines[j].trim();
          break;
        }
      }
      
      if (prevNonEmpty !== '---' && prevNonEmpty !== '' && i > 0) {
        // Don't add if this is the first heading in the section
        const hasContentBefore = lines.slice(0, i).some(l => l.trim() && !l.trim().startsWith('#'));
        if (hasContentBefore) {
          result.push('');
          result.push('---');
          result.push('');
        }
      }
    }
    
    result.push(line);
  }
  
  return result.join('\n');
}

function addEmojisToH2(content) {
  return content.replace(/^(## )(.+)$/gm, (match, prefix, heading) => {
    const emoji = getEmojiForHeading(heading);
    if (emoji === null) return match; // already has emoji
    return `${prefix}${emoji} ${heading}`;
  });
}

function wrapKeyEquationsInBlockquotes(content) {
  const lines = content.split('\n');
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    const nextLine = i + 1 < lines.length ? lines[i + 1]?.trim() : '';
    const prevLine = i > 0 ? lines[i - 1]?.trim() : '';
    
    // Don't wrap if already in a blockquote
    if (trimmed.startsWith('>')) {
      result.push(line);
      continue;
    }
    
    // Detect standalone key equation patterns: a line that's just a $$ equation
    // preceded by a line mentioning "key equation", "master equation", "formula", "relationship", "defined as"
    if (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length > 4) {
      const isKeyEquation = /\b(key equation|master equation|formula is|defined as|relationship is|important equation|fundamental equation|central equation)\b/i.test(prevLine);
      if (isKeyEquation && !prevLine.startsWith('>')) {
        // Wrap previous line and this equation in blockquote
        result.pop(); // remove the previous line we already pushed
        result.push(`> **${lines[i-1].trim()}**`);
        result.push(`>`);
        result.push(`> ${trimmed}`);
        continue;
      }
    }
    
    result.push(line);
  }
  
  return result.join('\n');
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  
  // Find all text section content strings
  // Pattern: type: 'text' as const, followed by content: `...`
  const sectionRegex = /(type:\s*'text'\s*as\s*const,\s*\n\s*content:\s*`)([^`]+)(`)/g;
  
  const newContent = content.replace(sectionRegex, (match, prefix, sectionContent, suffix) => {
    let updated = sectionContent;
    
    // Skip intro sections (h1 headers) - these are already styled
    if (updated.trim().startsWith('# ') || updated.trim().startsWith('#\n')) {
      // Still add emojis to any h2 in intro sections
      const withEmojis = addEmojisToH2(updated);
      if (withEmojis !== updated) {
        modified = true;
        return prefix + withEmojis + suffix;
      }
      return match;
    }
    
    // 1. Add emojis to h2 headings
    updated = addEmojisToH2(updated);
    
    // 2. Add horizontal rules before h3 subsections
    updated = addHorizontalRules(updated);
    
    // 3. Wrap key equations in blockquotes
    updated = wrapKeyEquationsInBlockquotes(updated);
    
    if (updated !== sectionContent) {
      modified = true;
    }
    
    return prefix + updated + suffix;
  });
  
  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    return true;
  }
  return false;
}

// Main
const files = fs.readdirSync(LESSONS_DIR)
  .filter(f => f.startsWith('chemistry-') && f.endsWith('.ts'))
  .map(f => path.join(LESSONS_DIR, f));

console.log(`Found ${files.length} AP Chemistry lesson files`);

let modifiedCount = 0;
let errorCount = 0;

for (const file of files) {
  try {
    const wasModified = processFile(file);
    if (wasModified) {
      modifiedCount++;
      console.log(`  ✓ Modified: ${path.basename(file)}`);
    }
  } catch (err) {
    errorCount++;
    console.error(`  ✗ Error processing ${path.basename(file)}: ${err.message}`);
  }
}

console.log(`\nDone! Modified ${modifiedCount}/${files.length} files. Errors: ${errorCount}`);
