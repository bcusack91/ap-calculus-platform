export const mcatTestDayPart7Data = {
  topicSlug: 'mcat-test-day-strategy-mcat',
  sections: [
    {
      id: 'td7-intro',
      type: 'text' as const,
      content: `# Test Day Strategy for the MCAT

**Part 7 of 7 — Final Week Strategy & Mindset**

### The Final Week

| Day | Activity |
|-----|---------|
| 7 days before | Last full-length practice exam |
| 6-5 days | Light review of weak areas, flashcards only |
| 4-3 days | Review high-yield topics casually |
| 2 days | Last day of any studying — keep it light |
| 1 day before | NO studying. Relax, eat well, sleep early |
| Test day | Arrive early, breathe, trust your preparation |

### High-Yield Last-Minute Review Topics

These commonly appear and are easy to forget under pressure:

- Amino acid structures and properties
- Enzyme kinetics ($K_m$, $V_{max}$, inhibitor types)
- Henderson-Hasselbalch equation
- Functional groups in organic chemistry
- Mendelian genetics ratios
- Key brain regions and functions
- Sociological theories (functionalism, conflict, symbolic interactionism)

### Test Day Mindset

**Believe in your preparation.** By test day, you've studied hundreds of hours. No amount of last-minute cramming will help more than confidence and rest.

- **Be adaptive**: If a passage is brutal, so it is for everyone. Move on.
- **No post-mortems**: After each section, it's DONE. Don't analyze.
- **Stay present**: Focus on the current question, not past or future ones.
- **You will see unfamiliar content**: This is normal. Use reasoning and elimination.

### After the Exam

- You cannot change your answers. Let go.
- Scores are released in approximately 4 weeks
- Regardless of how you feel, trust the process — most people feel worse than they scored`
    },
    {
      id: 'td7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Final Strategy** 🎯`,
      exercise: {
        questions: [
          {
            question: `The night before the MCAT, the BEST strategy is:`,
            options: [`No studying — relax, eat a good dinner, and go to bed early`, `Cram high-yield topics until midnight`, `Take a full practice exam`, `Review all your notes from the beginning`],
            correctAnswer: 0,
            explanation: `Sleep is the single most important thing the night before. Your brain consolidates memories during sleep. Cramming the night before creates anxiety and exhaustion — neither helps performance. Trust your months of preparation.`
          }
        ]
      }
    },
    {
      id: 'td7-summary',
      type: 'text' as const,
      content: `### Test Day Strategy — Complete! ✅

You've learned the structure, timing, study strategies, and test-day mindset for the MCAT. The exam tests not just knowledge but also stamina, strategy, and composure. Trust your preparation, stay adaptive, and remember: one hard passage doesn't define your score. You've got this!`
    }
  ]
};
