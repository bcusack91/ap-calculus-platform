#!/usr/bin/env python3
"""
Standardize significant figures across all AP Chemistry, AP Physics 1, and AP Physics 2
interactive lesson files.

Strategy:
1. Replace "N decimal place(s)" -> "3 significant figures" in exercise content text
   (except for pH-related exercises which correctly use decimal places)
2. For exercises with numeric non-integer answers and NO precision guidance,
   add "Round your answer to 3 significant figures." to the content
3. Expand correctAnswers arrays to accept trailing zero variants
"""

import re
import sys
from pathlib import Path

BASE_DIR = Path("/Users/brendancusack/Desktop/AP Calculus Website - Ad Revenue Based/src/data/interactive-lessons")

def is_target_file(filename):
    prefixes = [
        'chemistry-', 'physics1-', 'physics2-',
        'reflection-refraction-',
        'bernoulli-', 'buoyancy-', 'current-resistance-', 'density-pressure-',
        'electric-fields-', 'electrostatics-', 'em-induction-', 'fluid-dynamics-',
        'heat-', 'interference-', 'kirchhoff-', 'lenses-', 'magnetic-fields-',
        'modern-', 'phase-changes-', 'series-parallel-', 'temperature-', 'thermo-laws-',
    ]
    return any(filename.startswith(p) for p in prefixes) and filename.endswith('.ts')

def is_ph_context(text):
    lower = text.lower()
    ph_terms = ['ph ', 'ph?', 'poh', 'the ph', 'calculate ph', 'find the ph',
                'ph of', 'ph =', 'ph=', 'ph is', 'ph value', 'ph scale',
                '-log[h', 'pka', 'pkb']
    return any(t in lower for t in ph_terms)

def is_numeric(s):
    try:
        float(s.strip())
        return True
    except ValueError:
        return False

def is_integer(s):
    s = s.strip()
    if '.' in s or 'e' in s.lower():
        return False
    try:
        int(s)
        return True
    except ValueError:
        return False

def find_content_block(text, start_pos):
    """Find the content: `...` block starting from a position."""
    content_idx = text.find('content:', start_pos)
    if content_idx < 0 or content_idx > start_pos + 500:
        return None, None, None
    
    # Find the opening backtick
    bt_start = text.find('`', content_idx)
    if bt_start < 0:
        return None, None, None
    
    # Find the closing backtick (skip escaped ones)
    bt_end = text.find('`', bt_start + 1)
    if bt_end < 0:
        return None, None, None
    
    return bt_start, bt_end, text[bt_start + 1:bt_end]

def process_file(filepath, dry_run=False):
    stats = {'file': filepath.name, 'dp_to_sf': 0, 'instructions_added': 0, 'answers_expanded': 0}
    
    content = filepath.read_text(encoding='utf-8')
    original = content
    
    if "'input-boxes'" not in content and "'input-box'" not in content:
        return stats
    
    # STEP 1: Replace decimal place instructions with sig fig instructions
    # Pattern to find: "(to N decimal place(s))" or "to N decimal place(s)"
    # But only within content blocks of input-box sections
    
    # Find all input-box section positions
    section_pattern = re.compile(r"type:\s*'input-box(?:es)?'\s*as\s*const")
    
    for m in section_pattern.finditer(content):
        # Find the section's content block
        sec_start = content.rfind('{', max(0, m.start() - 500), m.start())
        if sec_start < 0:
            sec_start = max(0, m.start() - 500)
        
        bt_start, bt_end, block_text = find_content_block(content, sec_start)
        if block_text is None:
            continue
        
        # Skip pH-related content
        if is_ph_context(block_text):
            continue
        
        # Replace DP instructions with SF — only replace "N decimal place(s)" text,
        # preserving surrounding parentheses and context
        dp_re = re.compile(r'(\d+)\s+decimal\s+places?', re.IGNORECASE)
        
        matches_found = dp_re.findall(block_text)
        if matches_found:
            new_block = dp_re.sub('3 significant figures', block_text)
            if new_block != block_text:
                stats['dp_to_sf'] += len(matches_found)
                content = content[:bt_start + 1] + new_block + content[bt_end:]
    
    # STEP 2: Add sig fig instructions where missing
    # Re-find sections after step 1 modifications
    for m in section_pattern.finditer(content):
        sec_start = content.rfind('{', max(0, m.start() - 500), m.start())
        if sec_start < 0:
            sec_start = max(0, m.start() - 500)
        
        bt_start, bt_end, block_text = find_content_block(content, sec_start)
        if block_text is None:
            continue
        
        # Already has precision guidance?
        if re.search(r'decimal\s+place|significant\s+figure|sig\s+fig|nearest\s+(tenth|hundredth|thousandth|whole|integer)', block_text, re.IGNORECASE):
            continue
        
        # Skip pH
        if is_ph_context(block_text):
            continue
        
        # Find answers for this section
        exercise_start = content.find('exercise:', bt_end)
        if exercise_start < 0 or exercise_start > bt_end + 300:
            continue
        
        # Get a chunk of the exercise block
        exercise_chunk = content[exercise_start:exercise_start + 2000]
        
        # Extract answers - Format A
        answers = []
        ca_match = re.search(r"correctAnswers:\s*\[([^\]]+)\]", exercise_chunk)
        if ca_match:
            answers = re.findall(r"'([^']*)'", ca_match.group(1))
        
        # Format B (inputs array)
        if not answers:
            answers = re.findall(r"correctAnswer:\s*'([^']*)'", exercise_chunk[:1500])
        
        if not answers:
            continue
        
        # Check if any answers are numeric non-integer
        has_decimal = any(is_numeric(a) and not is_integer(a) for a in answers)
        if not has_decimal:
            continue
        
        # Add sig fig instruction at end of content block
        insert_text = "\n\n*Round all answers to 3 significant figures.*"
        old_str = content[bt_start:bt_end + 1]
        # Insert before closing backtick, preserving whitespace
        new_str = old_str[:-1].rstrip() + insert_text + "\n      `"
        content = content[:bt_start] + new_str + content[bt_end + 1:]
        stats['instructions_added'] += 1
    
    # STEP 3: Expand correctAnswers arrays with trailing zero variants
    def expand_answers(match):
        full = match.group(0)
        answers_str = match.group(1)
        existing = re.findall(r"'([^']*)'", answers_str)
        
        expanded = list(existing)
        added_count = 0
        for ans in existing:
            if is_numeric(ans) and not is_integer(ans):
                try:
                    val = float(ans)
                    if '.' in ans:
                        dec_len = len(ans.split('.')[1])
                        # +1 trailing zero
                        v1 = f"{val:.{dec_len + 1}f}"
                        if v1 not in expanded:
                            expanded.append(v1)
                            added_count += 1
                        # -1 trailing zero if lossless
                        if dec_len > 1:
                            v2 = f"{val:.{dec_len - 1}f}"
                            if abs(float(v2) - val) < 1e-10 and v2 not in expanded:
                                expanded.append(v2)
                                added_count += 1
                except ValueError:
                    pass
        
        if added_count:
            stats['answers_expanded'] += added_count
            return "correctAnswers: [" + ", ".join(f"'{a}'" for a in expanded) + "]"
        return full
    
    content = re.sub(r"correctAnswers:\s*\[([^\]]+)\]", expand_answers, content)
    
    if content != original:
        if not dry_run:
            filepath.write_text(content, encoding='utf-8')
    
    return stats

def main():
    dry_run = '--dry-run' in sys.argv
    verbose = '-v' in sys.argv or '--verbose' in sys.argv
    
    if dry_run:
        print("=== DRY RUN ===\n")
    
    target_files = sorted(f for f in BASE_DIR.glob('*.ts') if is_target_file(f.name))
    print(f"Found {len(target_files)} chemistry/physics lesson files\n")
    
    totals = {'dp_to_sf': 0, 'instructions_added': 0, 'answers_expanded': 0, 'files_modified': 0}
    
    for fp in target_files:
        stats = process_file(fp, dry_run)
        total = stats['dp_to_sf'] + stats['instructions_added'] + stats['answers_expanded']
        if total > 0:
            totals['files_modified'] += 1
            totals['dp_to_sf'] += stats['dp_to_sf']
            totals['instructions_added'] += stats['instructions_added']
            totals['answers_expanded'] += stats['answers_expanded']
            if verbose:
                parts = []
                if stats['dp_to_sf']: parts.append(f"{stats['dp_to_sf']} DP->SF")
                if stats['instructions_added']: parts.append(f"{stats['instructions_added']} instr added")
                if stats['answers_expanded']: parts.append(f"{stats['answers_expanded']} answer variants")
                print(f"  {stats['file']}: {', '.join(parts)}")
    
    print(f"\n{'='*60}")
    print(f"Files scanned:          {len(target_files)}")
    print(f"Files modified:         {totals['files_modified']}")
    print(f"DP -> SF conversions:   {totals['dp_to_sf']}")
    print(f"SF instructions added:  {totals['instructions_added']}")
    print(f"Answer variants added:  {totals['answers_expanded']}")
    if dry_run:
        print("\nDRY RUN - no files modified")
    else:
        print("\nAll changes applied!")

if __name__ == '__main__':
    main()
