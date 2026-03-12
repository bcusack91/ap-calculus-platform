export const satRWStrategyPart5Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw5-intro',
      type: 'text' as const,
      content: `# Pronoun Clarity & Agreement

**Part 5 of 7 — Pronoun Reference and Number**

Pronoun questions test two things: (1) Does the pronoun clearly refer to a specific noun? (2) Does it agree in number?

### Pronoun-Antecedent Agreement

The pronoun must match its antecedent (the noun it replaces) in number.

| Antecedent | Correct Pronoun |
|---|---|
| "A student" (singular) | he/she/they (singular they is accepted on SAT) |
| "Students" (plural) | they/their/them |
| "The team" (collective singular) | it/its |
| "Everyone" (singular indefinite) | their (modern) / he or she |

### Ambiguous Reference

❌ "When **the managers** met with **the clients**, **they** were disappointed."  
(Who was disappointed — managers or clients?)

✅ "When the managers met with the clients, **the clients** were disappointed."

### SAT's Favorite Pronoun Traps

**1. "It" without clear reference:**  
❌ "The company released its earnings report, and **it** showed growth." ("It" = company or report?)

**2. Singular "they" with clear antecedent — now standard on SAT:**  
✅ "Each student should bring **their** textbook." (Accepted on modern SAT)

**3. Pronoun shifts:**  
❌ "When **one** tries hard, **you** can succeed."  
✅ "When **one** tries hard, **one** can succeed." (or "When **you** try hard, **you** can succeed.")

### Strategy

For every pronoun, ask: "Can I point to EXACTLY one noun this refers to?" If not, the sentence has an error.`
    },
    {
      id: 'rw5-quiz',
      type: 'multiple-choice' as const,
      content: '**Pronoun Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '"Neither the coach nor the players have expressed _____ opinion on the new rule." Which pronoun is correct?',
            options: ['their—agrees with "players" (nearer plural subject)', 'his—agrees with "coach" (first subject)', 'its—collective noun', 'his or her—formal agreement'],
            correctAnswer: 0,
            explanation: 'Like subject-verb agreement with "neither...nor," the pronoun agrees with the nearer subject. "Players" is nearer and plural, so "their" is correct.'
          },
          {
            question: 'Which revision fixes the ambiguous pronoun? "The biologist showed the student her research."',
            options: ['The biologist showed the student the biologist\'s research.', 'The biologist showed her research to the student.', 'She showed the student her research.', 'The biologist showed them her research.'],
            correctAnswer: 1,
            explanation: 'Rearranging to "showed her research to the student" makes clear that "her" refers to the biologist (the subject). The original was ambiguous because "her" could refer to either person.'
          }
        ]
      }
    }
  ]
};