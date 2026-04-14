export const satReadingEvidencePart3Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're3-intro',
      type: 'text' as const,
      content: `# Inference & Implied Meaning

**Part 3 of 7 — Reading Between the Lines**

Inference questions ask you to determine what the passage **implies** or **suggests** without directly stating. These require careful attention to tone, word choice, and logical connections.

### Inference vs. Speculation

- **Valid inference:** A conclusion logically supported by evidence in the passage
- **Speculation:** A guess that goes beyond what the passage supports

**Rule:** If you can point to specific words or sentences that support your inference, it's valid. If you're imagining scenarios the author didn't address, it's speculation.

### Common Inference Question Stems

- "It can be inferred from the passage that..."
- "The author most likely believes that..."
- "The passage suggests that..."
- "Based on the passage, it is reasonable to conclude that..."

### Example

> Dr. Chen spent fourteen years developing the vaccine, working through three failed clinical trials before the fourth showed promising results. When asked about her persistence, she simply said, "The problem was worth solving."

**We can infer:**
- ✅ Dr. Chen is dedicated to her research (evidence: 14 years, persisted through failures)
- ✅ She is motivated by the importance of the work, not just personal success (evidence: "The problem was worth solving")
- ❌ She was the only person working on this vaccine (not stated or implied)
- ❌ The vaccine is now widely available (we only know trial 4 was promising)`
    },
    {
      id: 're3-quiz',
      type: 'multiple-choice' as const,
      content: '**Inference Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage describes a musician who "abandoned a lucrative career in law to pursue composing, despite her family\'s vocal disapproval." What can most reasonably be inferred?',
            options: ['Music was more important to her than financial security or family approval', 'She was unsuccessful as a lawyer', 'Her family eventually supported her decision', 'She regretted leaving law'],
            correctAnswer: 0,
            explanation: 'She gave up something "lucrative" (financial security) and acted "despite" disapproval (family approval). This directly implies music mattered more than both. The other options require information not in the passage.'
          },
          {
            question: 'A historian writes: "While popular accounts credit Edison as the sole inventor of the lightbulb, the reality involves at least two dozen contemporaneous inventors working on similar designs." The author most likely believes:',
            options: ['Innovation is typically a collective rather than individual process', 'Edison should receive no credit for the lightbulb', 'Popular history is always inaccurate', 'The other inventors were more talented than Edison'],
            correctAnswer: 0,
            explanation: 'The contrast between "sole inventor" and "two dozen contemporaneous inventors" implies innovation is collective. The author doesn\'t say Edison deserves NO credit (just not sole credit), doesn\'t say popular history is ALWAYS wrong, and makes no comparison of talent.'
          },
          {
            question: 'Which approach is MOST reliable for inference questions?',
            options: ['Choose the answer that is supported by specific evidence in the passage', 'Choose the answer that seems most logical based on your outside knowledge', 'Choose the most detailed or specific answer', 'Choose the answer that the author would most likely agree with personally'],
            correctAnswer: 0,
            explanation: 'SAT inferences must be textually grounded. Outside knowledge, level of detail, and personal opinions are all unreliable criteria. Always ask: "What specific words in the passage support this?"'
          }
        ]
      }    },
    {
      id: 're3-text2',
      type: 'text' as const,
      content: `## Deep Dive: Inference vs. Speculation

### Worked Example 1: Testing Whether an Inference Is Valid

**Passage:** "After decades of decline, the bald eagle population in the continental United States rebounded from 417 nesting pairs in 1963 to over 71,400 in 2020, largely attributed to the ban on DDT pesticides and federal habitat protections."

| Proposed Inference | Valid? | Text Evidence |
|---|---|---|
| Environmental policy can successfully reverse species decline | ✅ Yes | DDT ban + habitat protections → population rebound |
| DDT was the sole cause of eagle decline | ❌ No | "Largely attributed" ≠ "sole cause" |
| All bird species have recovered similarly | ❌ No | Only discusses eagles |
| Conservation efforts require government intervention | ✅ Borderline | Federal protections helped, but passage doesn't say they're required |

### Worked Example 2: Tone-Based Inference

**Passage:** "The committee's proposal, though well-intentioned, overlooks the economic realities that small business owners face daily."

| Inference | Valid? | Clue |
|---|---|---|
| The author has concerns about the proposal | ✅ Yes | "Overlooks" = criticism |
| The author thinks the committee is dishonest | ❌ No | "Well-intentioned" acknowledges good faith |
| The author prioritizes economic concerns | ✅ Yes | "Economic realities" is the objection |
| The author opposes all committee proposals | ❌ No | Only about THIS proposal |

### Inference Strength Scale

| Language | Strength | SAT Likelihood |
|---|---|---|
| "The passage proves…" | Too strong | ❌ Almost always wrong |
| "The passage establishes…" | Strong | Sometimes correct |
| "The passage suggests…" | Moderate | ✅ Usually correct |
| "It can be inferred…" | Moderate | ✅ Standard inference Q |
| "The passage hints…" | Weak | Acceptable if supported |`
    },
    {
      id: 're3-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Inference Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage states: "The new medication reduced symptoms in 73% of participants, though 15% reported mild side effects including headache and fatigue." We can infer:',
            options: ['The medication is broadly effective but not without drawbacks', 'The medication should be approved immediately', 'The side effects are dangerous', 'All patients should take this medication'],
            correctAnswer: 0,
            explanation: '73% effectiveness = broadly effective. 15% with side effects = not without drawbacks. The passage doesn\'t say anything about approval, danger level, or universal recommendation.'
          },
          {
            question: 'An author writes about a CEO: "She transformed a struggling startup into a Fortune 500 company, though former employees describe a workplace culture of relentless pressure." The author\'s attitude is most likely:',
            options: ['Acknowledging both achievement and its human cost', 'Entirely admiring of the CEO', 'Entirely critical of the CEO', 'Indifferent to the CEO\'s success'],
            correctAnswer: 0,
            explanation: '"Transformed" + "Fortune 500" = acknowledging achievement. "Relentless pressure" = noting the cost. The author presents both sides, suggesting a balanced/nuanced view.'
          },
          {
            question: 'Which inference goes too far? Passage: "The study was conducted with 50 college students at a single university."',
            options: ['"The results may not generalize to all populations"', '"The researchers had limited resources"', '"College students are poor research subjects"', '"The study is one step in a larger body of research"'],
            correctAnswer: 2,
            explanation: 'The passage says 50 students at one university — we can infer limited generalizability. But calling college students "poor research subjects" goes beyond what the passage states and adds a judgment not supported by the text.'
          }
        ]
      }
    },
    {
      id: 're3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Inference Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'A valid inference is supported by [specific text evidence|outside knowledge|common sense|personal opinion]',
          '"The passage proves" is usually [too strong|perfectly fine|required|neutral]',
          'If a passage says "largely attributed to," you can infer [it was a major factor, not the only one|it was the only cause|it was unimportant|the author is uncertain]',
          'Speculation goes [beyond what the text supports|exactly as far as the text|not far enough|nowhere]'
        ],
        correctAnswers: ['specific text evidence', 'too strong', 'it was a major factor, not the only one', 'beyond what the text supports'],
        hint1: 'Always point to specific words as support.',
        hint2: '"Proves" is too absolute for most SAT passages.',
        hint3: '"Largely" = not entirely.',
        explanation: 'Inferences need text evidence. "Proves" is too strong. "Largely" means important but not sole. Speculation = going beyond the text.'
      }
    },
    {
      id: 're3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Concept | Key Rule |
|---|---|
| Valid inference | Must be supported by SPECIFIC text |
| Speculation | Goes beyond what text supports — always wrong |
| "Proves" / "definitely" | Too strong for SAT — usually wrong |
| "Suggests" / "implies" | ✅ Standard SAT inference language |
| Tone-based inference | Word choice reveals author's attitude |

*Next: Vocabulary in Context →*`    }
  ]
};