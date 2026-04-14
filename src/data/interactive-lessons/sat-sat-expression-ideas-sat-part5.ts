export const satExpressionPart5Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei5-intro',
      type: 'text' as const,
      content: `# Style, Tone, and Audience

**Part 5 of 7 — Matching Register and Purpose**

The SAT tests whether you can adjust language to fit the passage's style, audience, and purpose.

### Register Levels

| Register | Audience | Example |
|---|---|---|
| **Formal/Academic** | Scholars, specialists | "The data substantiate the hypothesis" |
| **Professional** | General educated audience | "The study supports the theory" |
| **Informal** | Friends, casual setting | "The study totally backs it up" |

### The SAT almost always uses **professional** register. But occasionally you'll see:
- **Science passages:** More formal, technical vocabulary
- **Literary narratives:** More descriptive, figurative
- **Social science:** Analytical, balanced

### Consistency Rule

Within a single passage, tone must stay consistent. If a passage is formal throughout, inserting a casual phrase is wrong.

❌ "The researchers meticulously documented each specimen and they basically found a lot of new stuff."  
✅ "The researchers meticulously documented each specimen and identified several previously unknown species."

### Audience-Appropriate Detail

When the question asks about what information to include:
- **Expert audience:** Can skip basic definitions
- **General audience:** Needs brief explanations of technical terms
- **The SAT reader:** Assumed to be a general educated reader`
    },
    {
      id: 'ei5-quiz',
      type: 'multiple-choice' as const,
      content: '**Style & Tone Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'In a formal scientific passage, which phrase best replaces "Scientists figured out that the gene was messed up"?',
            options: ['Researchers determined that the gene contained a deleterious mutation', 'Scientists found that the gene was broken', 'The gene was found to be messed up by researchers', 'Science people discovered a gene problem'],
            correctAnswer: 0,
            explanation: '"Researchers determined" is formal and precise. "Deleterious mutation" is proper scientific terminology. The other options use informal language ("broken," "messed up," "science people") inappropriate for an academic passage.'
          },
          {
            question: 'A passage about art history consistently uses formal language. Which sentence best fits? "Monet\'s late works _____."',
            options: ['demonstrate an increasingly abstract approach to color and light', 'are really amazing and beautiful paintings', 'show he was getting into different stuff toward the end', 'basically changed how everyone thought about art'],
            correctAnswer: 0,
            explanation: '"Demonstrate" and "increasingly abstract approach" match formal art criticism tone. The other options are too casual for the passage\'s established register.'
          }
        ]
      }    },
    {
      id: 'ei5-text2',
      type: 'text' as const,
      content: `## Deep Dive: Detecting Tone Mismatches

### Worked Example 1: Register Identification

| Passage Excerpt | Register | Clue Words |
|---|---|---|
| "The longitudinal study yielded statistically significant results." | Formal/Academic | "longitudinal," "yielded," "statistically significant" |
| "The study showed the approach works well in practice." | Professional | Straightforward, no jargon |
| "Turns out, the thing actually works!" | Informal | "Turns out," "actually," exclamation mark |

### Worked Example 2: Spotting the Tone Mismatch

**Passage tone: Formal academic**

| Choice | Tone Match? | Problem |
|---|---|---|
| "The data corroborate earlier findings." | ✅ Formal | — |
| "The data kind of support earlier findings." | ❌ Informal | "Kind of" is casual hedging |
| "The data unequivocally prove earlier findings." | ❌ Too strong | "Unequivocally prove" is overstatement for science |
| "The data, which are really cool, support findings." | ❌ Informal | "Really cool" has no place in academic writing |

### Style Consistency Rules

| Rule | Right | Wrong |
|---|---|---|
| No slang in formal writing | "The results indicate…" | "The results are fire" |
| No jargon for general audience | "The gene was inactive" | "The gene was transcriptionally silenced" (if audience is general) |
| No unnecessary qualifiers | "The impact was significant" | "The impact was, like, pretty significant" |
| Consistent formality level | All sentences match register | One casual sentence in a formal passage |

### SAT Tone-Matching Strategy

1. **Read 2-3 sentences** of the passage to establish the tone
2. **Identify the register** (formal, professional, or informal)
3. **Eliminate choices** that don't match
4. **Among matching choices**, pick the most precise one`
    },
    {
      id: 'ei5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Style & Tone Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'A professional-register passage about climate change includes this blank: "Rising sea levels _____ coastal communities worldwide." Which fits?',
            options: ['threaten', 'are messing with', 'imperatively endanger', 'impact negatively upon'],
            correctAnswer: 0,
            explanation: '"Threaten" is professional register — clear, direct, appropriate. "Messing with" is informal. "Imperatively endanger" is unnecessarily complex. "Impact negatively upon" is wordy and awkward.'
          },
          {
            question: 'Which passage type on the SAT is MOST likely to use technical vocabulary?',
            options: ['Science passages', 'Literary narratives', 'Social science passages', 'Historical essays'],
            correctAnswer: 0,
            explanation: 'Science passages use discipline-specific terminology (e.g., "mitosis," "photosynthesis"). Literary narratives use figurative language, social science uses analytical terms, and history uses period-specific terms — but science is most technical.'
          },
          {
            question: 'A formal passage contains: "The architect designed the building." A proposed revision: "The architect totally nailed the building design." Should you accept the revision?',
            options: ['No — "totally nailed" is informal and breaks the passage\'s formal tone', 'Yes — it\'s more vivid and engaging', 'Yes — it shows enthusiasm for the subject', 'No — it\'s too short'],
            correctAnswer: 0,
            explanation: '"Totally nailed" is slang/informal. Even though it\'s vivid, it clashes with the formal register established in the passage. Tone consistency overrides vividness.'
          }
        ]
      }
    },
    {
      id: 'ei5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Tone & Register Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'SAT passages typically use [professional|informal|slang|texting] register',
          '"Kind of" and "sort of" are [too informal|perfectly formal|academic|scientific]',
          'In a science passage: "The reaction _____ a precipitate." [produced|made|gave us|spit out]',
          'Tone consistency means [every sentence matches the register|varying tone is fine|informal is always best|longer is better]'
        ],
        correctAnswers: ['professional', 'too informal', 'produced', 'every sentence matches the register'],
        hint1: 'Most SAT passages are written for a general educated audience.',
        hint2: '"Kind of" hedges informally.',
        hint3: '"Produced" is the precise scientific term.',
        explanation: 'SAT = professional register. "Kind of" is too casual. "Produced" is precise scientific language. Tone must stay consistent throughout a passage.'
      }
    },
    {
      id: 'ei5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Concept | Key Rule |
|---|---|
| SAT register | Almost always professional |
| Consistency | Every sentence must match the passage's tone |
| Science passages | More formal, technical vocabulary |
| Common trap | Right meaning but wrong register |
| Strategy | Identify tone → eliminate mismatches → choose most precise |

*Next: Cohesion & Paragraph Unity →*`    }
  ]
};