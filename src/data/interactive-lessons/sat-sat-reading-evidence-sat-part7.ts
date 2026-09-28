export const satReadingEvidencePart7Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're7-intro',
      type: 'text' as const,
      content: `# Reading Comprehension Review

**Part 7 of 7 — Comprehensive Review & Test Strategy**

### Quick-Reference Decision Tree

When you see a Reading question:

1. **"Main idea" or "primary purpose"** → Summarize passage in one sentence, match to answer
2. **"Best evidence" or "which quote"** → Find the DIRECT support, not just related topic  
3. **"Infer" or "suggests"** → Must be supported by specific text, not outside knowledge
4. **"Word in context"** → Cover the word, predict a synonym, match to choices
5. **"Purpose of paragraph/sentence"** → Ask WHY the author included it (counter? example? transition?)
6. **"Data/graphic"** → Integrate text claims with visual evidence; watch for overstatement

### Time Management for Reading

- **Budget:** ~1.2 minutes per question (R&W module: 27 questions, 32 minutes)
- **Don't read the whole passage first** on the Digital SAT—each question comes with its own short passage
- **Read the question stem first** to know what to look for
- If a question is taking more than 2 minutes, flag it and move on

### Most Common Mistakes

| Mistake | Fix |
|---|---|
| Choosing an answer that "sounds smart" but isn't supported | Always point to specific text evidence |
| Overthinking inference questions | The correct inference is usually straightforward |
| Picking the most common word definition | Context determines meaning, not familiarity |
| Not reading all four choices | The best answer might be D—compare all options |
| Bringing in outside knowledge | Only what's in the passage counts |`
    },
    {
      id: 're7-quiz',
      type: 'multiple-choice' as const,
      content: '**Comprehensive Review Quiz** 🎯',
      exercise: {
        questions: [
          {
            question: 'The market for electric vehicles is growing, but a shortage of public charging stations may ______ the pace at which drivers switch from gasoline cars. \nWhich choice completes the text with the most logical and precise word?',
            options: ['slow', 'boost', 'track', 'spur'],
            correctAnswer: 0,
            explanation: 'A shortage of charging stations is an obstacle, so it would slow the pace of the switch. "Boost" and "spur" say the obstacle speeds the switch up, the opposite of what the "but" sets up, and "track" (to follow or record) gives the shortage no effect on the pace at all.'
          },
          {
            question: 'What is the MOST efficient reading strategy for Digital SAT R&W?',
            options: ['Read the question first, then read the passage with it in mind', 'Skim the passage quickly, then answer the question from memory', 'Read the first and last sentences of each short passage only', 'Read the four answer choices before the question or passage'],
            correctAnswer: 0,
            explanation: 'On the Digital SAT, each question has its own passage. Reading the question first tells you what to focus on, making your passage reading targeted and efficient.'
          },
          {
            question: 'A passage discusses the benefits of urban green spaces. A graph shows park acreage per capita declining in 15 of 20 cities studied. This data:',
            options: ['Adds a complication, since access is shrinking despite the benefits', 'Disproves the passage, since fewer parks means fewer benefits', 'Confirms the passage, since it shows that cities value parks', 'Has no bearing on the passage, since it measures acreage, not benefits'],
            correctAnswer: 0,
            explanation: 'The data doesn\'t disprove that green spaces are beneficial; it shows they\'re declining. This complicates the picture: the benefits are real, but access is shrinking. Declining acreage does not show that cities value parks, and park acreage per person bears directly on how many people can enjoy those benefits.'
          }
        ]
      }    },
    {
      id: 're7-text2',
      type: 'text' as const,
      content: `## Deep Dive: Reading Comprehension Master Review

### Worked Example 1: Multi-Skill Question

**Passage:** "The prevailing theory held that dinosaurs were cold-blooded reptiles, sluggish and dependent on external heat. However, recent bone structure analyses suggest many species maintained high metabolic rates consistent with warm-bloodedness."

| Question Type | Question | Answer |
|---|---|---|
| Main idea | What does the passage suggest? | New evidence challenges the cold-blooded dinosaur theory |
| Vocabulary | "Prevailing" most nearly means… | Widely accepted/dominant |
| Inference | The author implies that… | The traditional view may be incorrect |
| Purpose | "However" in sentence 2 serves to… | Introduce evidence that challenges the previous claim |
| Evidence | Which supports the new theory? | "Bone analyses suggest high metabolic rates" |

### Worked Example 2: Quick Classification

| Question Stem | Type | Strategy |
|---|---|---|
| "The main idea of the passage is…" | Main Idea | One-sentence summary → match |
| "Which quote best supports…" | Evidence | Direct support for the specific claim |
| "It can be inferred that…" | Inference | Text evidence only — no speculation |
| "As used in the text, what does the word X most nearly mean?" | Vocabulary | Cover → predict → substitute |
| "The author includes the anecdote to…" | Purpose | Ask WHY, not WHAT |
| "The graph suggests that…" | Data | Check scale, units, then integrate |

### The SAT Reading Scoring Zones

| Score Range | What You Need |
|---|---|
| 350-450 | Get main idea and basic vocab right |
| 450-550 | + Evidence matching and basic inference |
| 550-650 | + Purpose, tone analysis, data integration |
| 650-750 | + Nuanced inferences, qualified answers |
| 750-800 | + Recognize subtle traps, manage time perfectly |`
    },
    {
      id: 're7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Reading Comprehension Final Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage presents two scientists\' opposing views on dark matter. The passage\'s primary purpose is most likely to:',
            options: ['Lay out two competing positions on dark matter', 'Show that one scientist\'s view of dark matter is wrong', 'Prove that dark matter exists despite the doubts', 'Entertain readers with an unsolved scientific mystery'],
            correctAnswer: 0,
            explanation: 'When a passage presents opposing views without declaring a winner, its purpose is to present/frame the debate. If the author took a side, the answer would be "argue." And "prove" is too absolute.'
          },
          {
            question: '"The committee\'s MEASURED response to the crisis reassured the public." "Measured" most nearly means:',
            options: ['restrained', 'quantified', 'averaged', 'estimated'],
            correctAnswer: 0,
            explanation: 'A "measured response" that "reassured" the public = calm, restrained, carefully considered. The number-related meanings (quantified, averaged, estimated) are the traps.'
          },
          {
            question: 'Which approach handles ALL reading question types most effectively?',
            options: ['Read the question and the text, then predict before checking choices', 'Read the text three times before looking at the question', 'Go straight to the choices and cross out the odd-sounding ones', 'Read the first and last sentences, then match to the choices'],
            correctAnswer: 0,
            explanation: 'This four-step approach (question → passage → predict → eliminate) works for main idea, evidence, inference, vocabulary, purpose, and data questions alike.'
          }
        ]
      }
    },
    {
      id: 're7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Reading Evidence Final Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          'For vocab questions, the common definition is [a frequent trap|always the answer|never the answer|irrelevant]',
          '"It can be inferred" means you need [text evidence|outside knowledge|personal opinion|common sense]',
          'When a passage presents both sides, the main idea should be [balanced|one-sided|vague|extreme]',
          'Best overall strategy: [question first → passage → predict → eliminate|passage three times, then question|choices first, then passage|first and last sentences only]'
        ],
        correctAnswers: ['a frequent trap', 'text evidence', 'balanced', 'question first → passage → predict → eliminate'],
        hint1: 'The SAT often tests a secondary meaning, so let the context decide.',
        hint2: 'Inferences must be grounded in the text.',
        hint3: 'Match the scope of the passage.',
        explanation: 'Common definitions are frequent traps. Inferences need text evidence. Balanced passages need balanced main ideas. Question-first reading is the most efficient approach.'
      }
    },
    {
      id: 're7-summary',
      type: 'text' as const,
      content: `## Full Topic Summary: Reading Evidence

| Part | Topic | Core Strategy |
|---|---|---|
| 1 | Main Idea | One-sentence summary → match |
| 2 | Command of Evidence | DIRECT support for the SPECIFIC claim |
| 3 | Inference | Must be text-supported, not speculation |
| 4 | Vocabulary in Context | Cover → predict → substitute (not common def) |
| 5 | Purpose & Rhetoric | Ask WHY the author included it |
| 6 | Data Interpretation | Check scale/units → integrate with text |
| 7 | Review | Question first → passage → predict → eliminate |

### The 5 Golden Rules of SAT Reading
1. **Question first** — know what you're looking for
2. **Predict before checking choices** — avoid traps
3. **Text evidence only** — no outside knowledge
4. **"Proves" / "always" = usually wrong** — SAT hedges
5. **Same topic ≠ same claim** — evidence must be DIRECT

🎉 *Reading Evidence complete!*`    }
  ]
};