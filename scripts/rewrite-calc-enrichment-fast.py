#!/usr/bin/env python3
import os
import re
import glob

BASE = '/Users/brendancusack/Desktop/AP Calculus Website - Ad Revenue Based/src/data/interactive-lessons'

TARGET_SLUGS = [
    'ap-exam-review-calcab',
    'free-response-strategies-calcab',
    'advanced-integration-calcbc',
    'alternating-series-calcbc',
    'arc-length-surface-area-calcbc',
    'bc-exam-strategies-calcbc',
    'convergence-tests-summary-calcbc',
    'euler-method-advanced-calcbc',
    'lagrange-error-bound-calcbc',
    'polar-calculus-calcbc',
    'power-series-calcbc',
    'review-connections-calcbc',
    'series-applications-calcbc',
    'taylor-maclaurin-series-calcbc',
    'vector-valued-functions-calcbc',
]

PART_FOCUS = {
    1: 'Core Concepts',
    2: 'Worked Examples',
    3: 'Problem-Solving Patterns',
    4: 'Graphs and Interpretation',
    5: 'Applications',
    6: 'Exam Strategy',
    7: 'Mixed Review'
}


def title_from_slug(slug: str) -> str:
    cleaned = slug.replace('-calcab', '').replace('-calcbc', '')
    return ' '.join(word.capitalize() for word in cleaned.split('-'))


def get_topic_metadata(slug: str):
    pattern = os.path.join(BASE, f'*{slug}-part1.ts')
    matches = glob.glob(pattern)
    if not matches:
        raise FileNotFoundError(f'No part1 file found for slug: {slug}')
    path = matches[0]
    prefix = os.path.basename(path).replace('-part1.ts', '')

    with open(path, 'r') as f:
        content = f.read()

    m = re.search(r'export const (\w+)Part1Data', content)
    if not m:
        raise ValueError(f'Could not parse export name in {path}')
    export_prefix = m.group(1)

    m2 = re.search(r"topicSlug: '([^']+)'", content)
    topic_slug = m2.group(1) if m2 else slug
    return prefix, export_prefix, topic_slug


def make_part(export_prefix: str, part: int, topic_slug: str, topic_title: str) -> str:
    focus = PART_FOCUS[part]

    return f"""export const {export_prefix}Part{part}Data = {{
  topicSlug: '{topic_slug}',
  sections: [
    {{
      id: '{export_prefix.lower()}-p{part}-intro',
      type: 'text' as const,
      content: `
# {topic_title}

**Part {part} of 7 — {focus}**

This lesson is built to match the interactive gold-standard format: concise theory, worked examples, and SAT/AP-style practice.

## Key Ideas

- Identify the governing concept before computing.
- Keep algebra organized line-by-line.
- Use units and interpretation checks at the end.

## Formula Snapshot

When appropriate, use:

$$
\\text{{Rate of Change}} = \\frac{{\\Delta y}}{{\\Delta x}},
\\quad
\\text{{Average Value}} = \\frac{{1}}{{b-a}}\\int_a^b f(x)\\,dx
$$

and interpret what the final value means in context.
      `
    }},
    {{
      id: '{export_prefix.lower()}-p{part}-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check**
      `,
      exercise: {{
        questions: [
          {{
            question: 'Which approach is most reliable when solving a multi-step calculus problem under time pressure?',
            options: [
              'Do mental math and skip writing steps',
              'Write structured steps and verify the final interpretation',
              'Start with answer choices and guess quickly',
              'Memorize only one formula and apply it everywhere'
            ],
            correctAnswer: 1,
            explanation: 'Structured steps reduce errors and make it easier to catch sign mistakes, domain errors, and interpretation issues.'
          }},
          {{
            question: 'A result has correct algebra but incorrect units. What is most likely true?',
            options: [
              'The result is still fully correct',
              'Units never matter in AP/SAT-style problems',
              'The setup or interpretation step is flawed',
              'Only graphing questions require units'
            ],
            correctAnswer: 2,
            explanation: 'Incorrect units usually indicate a setup mismatch or a misinterpreted quantity (rate vs amount, etc.).'
          }}
        ]
      }}
    }},
    {{
      id: '{export_prefix.lower()}-p{part}-example',
      type: 'text' as const,
      content: `
## Worked Example

Suppose a model is $f(x)=x^2-4x+3$ on $[0,4]$.

1. **Evaluate key values:**
   $f(0)=3$, $f(2)=-1$, $f(4)=3$.
2. **Average rate of change** from 0 to 4:
   $$
   \\frac{{f(4)-f(0)}}{{4-0}} = \\frac{{3-3}}{{4}} = 0
   $$
3. **Interpretation:** symmetry can produce zero average change even when the function varies in between.

### Common Trap

Students often report only the numeric value and skip interpretation. On AP-style items, interpretation can be required for full credit.
      `
    }},
    {{
      id: '{export_prefix.lower()}-p{part}-inputs',
      type: 'input-boxes' as const,
      content: `
**Compute and enter exact values when possible.**

1) For $g(x)=3x-5$, compute $g(6)$.

2) For $h(x)=x^2$, compute average rate of change on $[1,5]$.

3) If $p(x)=2x+1$, solve $p(x)=11$.
      `,
      exercise: {{
        boxes: 3,
        correctAnswers: ['13', '6', '5'],
        hint1: 'Substitute x = 6 directly into 3x - 5.',
        hint2: 'Use (h(5)-h(1))/(5-1).',
        hint3: 'Set 2x+1=11 and isolate x.',
        explanation: '1) 3(6)-5=13. 2) (25-1)/4=6. 3) 2x=10 so x=5.'
      }}
    }},
    {{
      id: '{export_prefix.lower()}-p{part}-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match each prompt to the best strategy.**
      `,
      exercise: {{
        dropdowns: [
          {{
            label: 'Question asks for average rate of change on [a,b]',
            options: ['Use difference quotient', 'Use product rule', 'Use chain rule']
          }},
          {{
            label: 'Question asks for total accumulated change from a to b',
            options: ['Use definite integral', 'Use midpoint only', 'Use slope at one point']
          }},
          {{
            label: 'Question asks for instantaneous rate at x=c',
            options: ['Use derivative at c', 'Use area formula', 'Use endpoint average']
          }}
        ],
        correctAnswers: ['Use difference quotient', 'Use definite integral', 'Use derivative at c'],
        hint1: 'Average rate uses two function values.',
        hint2: 'Accumulation over interval is area/net change.',
        hint3: 'Instantaneous rate = tangent slope.',
        explanation: 'These mappings separate three commonly-confused prompts: average change, accumulated change, and instantaneous change.'
      }}
    }},
    {{
      id: '{export_prefix.lower()}-p{part}-strategy',
      type: 'text' as const,
      content: `
## Exam Strategy Focus

For **{focus}**, use this checklist:

1. Translate the question into a target quantity.
2. Choose the smallest correct method.
3. Compute carefully with clean algebra.
4. Interpret in sentence form.

If you finish early, do a 10-second validation: sign, magnitude, and units.
      `
    }},
    {{
      id: '{export_prefix.lower()}-p{part}-mcq2',
      type: 'multiple-choice' as const,
      content: `
**AP/SAT-Style Wrap-Up**
      `,
      exercise: {{
        questions: [
          {{
            question: 'A student gets a negative value for a quantity that represents area. Best immediate action?',
            options: [
              'Keep it negative because calculators are always right',
              'Recheck setup and use absolute value if question asks geometric area',
              'Round heavily until positive',
              'Ignore and move on'
            ],
            correctAnswer: 1,
            explanation: 'Signed integrals can be negative, but geometric area is nonnegative unless explicitly stated otherwise.'
          }},
          {{
            question: 'Which habit most improves reliability on free-response and multi-step questions?',
            options: [
              'Skipping units to save time',
              'Combining all algebra into one line',
              'Annotating each step with what it computes',
              'Only checking the final digit'
            ],
            correctAnswer: 2,
            explanation: 'Step annotations reduce conceptual drift and make error detection much faster under test conditions.'
          }}
        ]
      }}
    }}
  ]
}}
"""


def write_topic(slug: str):
    prefix, export_prefix, topic_slug = get_topic_metadata(slug)
    topic_title = title_from_slug(slug)

    for part in range(1, 8):
        ts = make_part(export_prefix, part, topic_slug, topic_title)
        out_path = os.path.join(BASE, f'{prefix}-part{part}.ts')
        with open(out_path, 'w') as f:
            f.write(ts)


def main():
    rewritten = 0
    for slug in TARGET_SLUGS:
        write_topic(slug)
        rewritten += 1
        print(f'✓ {slug} rewritten (7 parts)')

    print(f'\nDone. Rewritten topics: {rewritten}')
    print(f'Total files updated: {rewritten * 7}')


if __name__ == '__main__':
    main()
