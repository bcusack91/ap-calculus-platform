export const mcatCarsReasonPart5Data = {
  topicSlug: 'mcat-cars-reasoning-mcat',
  sections: [
    {
      id: 'cr5-intro',
      type: 'text' as const,
      content: `# CARS Logical Reasoning

**Part 5 of 7 — Analogies & Parallel Reasoning**

### Analogy Questions

"Which situation is most analogous to the one described in the passage?"

### How Analogies Work

An analogy maps the **relationship structure** from one domain to another.

**Passage**: A government restricted media during a crisis, which the author criticizes as undermining democracy.

**Good analogy**: A company silencing employee feedback during a reorganization, criticized as undermining participation.

**Why it works**: Both involve authority figures suppressing information during disruption with negative consequences for participation/democracy.

### How to Evaluate Analogies

1. **Identify the abstract structure** of the passage's argument
2. Strip away surface details (topic, characters, setting)
3. Match the **relationship pattern**, not the surface features
4. The best analogy preserves the logical structure

### Common Traps

- **Surface similarity only**: Same topic but different logical relationship
- **Partial match**: Matches some elements but not the critical one
- **Reversed relationship**: Same elements but in opposite roles`
    },
    {
      id: 'cr5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Analogies** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage describes how an invasive species outcompeted native plants because it grew faster and used more resources. Which is the best analogy?',
            options: ['A large retailer driving small businesses out by offering lower prices through greater buying power', 'A student studying harder and earning better grades', 'A drought killing all plants equally', 'Two athletes competing fairly in a race'],
            correctAnswer: 0,
            explanation: 'The key structure: an entity with a resource advantage displaces a weaker entity. The large retailer (invasive species) outcompetes small businesses (native plants) through resource advantage (buying power/growth rate).'
          }
        ]
      }
    },
    {
      id: 'cr5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Analogies match STRUCTURE, not surface features
- Strip away specifics → identify the abstract relationship
- Watch for traps: surface-only matches and reversed relationships
- Good analogies preserve the logical relationship between key elements`
    }
  ]
};
