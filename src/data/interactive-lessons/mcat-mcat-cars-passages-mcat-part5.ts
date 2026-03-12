export const mcatCarsPsgPart5Data = {
  topicSlug: 'mcat-cars-passages-mcat',
  sections: [
    {
      id: 'cp5-intro',
      type: 'text' as const,
      content: `# CARS Passage Types

**Part 5 of 7 — Ethics & Morality Passages**

### Common Ethics Topics on CARS

- Medical ethics (autonomy, beneficence, justice)
- Environmental ethics
- Technology and privacy
- Social justice and equality
- Cultural relativism vs. universal morals

### Key Ethical Frameworks

| Framework | Core Idea | Key Thinker(s) |
|-----------|-----------|----------------|
| **Utilitarianism** | Greatest good for greatest number | Mill, Bentham |
| **Deontology** | Duty-based; some actions are inherently right/wrong | Kant |
| **Virtue Ethics** | Character matters; be a good person | Aristotle |
| **Rights-Based** | Individual rights are paramount | Locke |
| **Social Contract** | Society is based on implicit agreements | Hobbes, Rousseau |

### Strategy for Ethics Passages

- Identify WHICH ethical framework the author uses (or critiques)
- Note when the author appeals to consequences vs. principles vs. character
- Ethics passages often have a "but" — the author concedes one side before arguing the other
- **Do NOT import your own ethical views** — answer based on the passage only!`
    },
    {
      id: 'cp5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Ethics Passages** 🎯`,
      exercise: {
        questions: [
          {
            question: `An author argues that a policy should be evaluated solely on whether it maximizes overall well-being. This aligns with:`,
            options: [`Utilitarianism`, `Deontology`, `Virtue ethics`, `Social contract theory`],
            correctAnswer: 0,
            explanation: `Utilitarianism judges actions by their consequences — specifically whether they maximize total well-being/happiness. Key phrase: "greatest good for the greatest number."`
          }
        ]
      }
    },
    {
      id: 'cp5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Know the basic ethical frameworks — they provide context for understanding arguments
- Don't inject your own moral views — answer from the author's perspective
- Ethics passages often present a dilemma with competing values
- Watch for consequences-based (utilitarian) vs. principle-based (deontological) reasoning`
    }
  ]
};
