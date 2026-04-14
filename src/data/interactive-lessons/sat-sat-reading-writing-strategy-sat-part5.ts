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
    },
    {
      id: 'rw5-text2',
      type: 'text' as const,
      content: `## Deep Dive: Pronoun Problem Solving

### Worked Example 1: Finding the Antecedent

| Sentence | Pronoun | Antecedent? | Verdict |
|---|---|---|---|
| "The report was filed, and **it** was reviewed." | it | "report" — clear, singular | ✅ Correct |
| "Maya told Zara that **she** won the award." | she | Maya or Zara? | ❌ Ambiguous |
| "The company updated **its** website." | its | "company" — singular | ✅ Correct |
| "When drivers exceed the limit, **they** risk fines." | they | "drivers" — plural | ✅ Correct |
| "The jury gave **their** verdict." | their | "jury" — collective singular | ❌ Use "its" |

### Worked Example 2: Fixing Pronoun Errors

| Error Type | ❌ Original | ✅ Fixed |
|---|---|---|
| Ambiguous reference | "Carlos called Ben while **he** was driving." | "While **Carlos** was driving, he called Ben." |
| Number mismatch | "Every student must submit **their** essay by Friday." | Acceptable on modern SAT (singular they) |
| Person shift | "If **one** studies consistently, **you** will improve." | "If **you** study consistently, **you** will improve." |
| Vague "it" | "In the article, **it** claims the economy grew." | "The article claims the economy grew." |
| Vague "this" | "He failed the test. **This** was unfortunate." | "His failure was unfortunate." |

### Quick Decision Tree for Pronoun Questions

| Step | Question | Action |
|---|---|---|
| 1 | Does the pronoun have a clear antecedent? | If no, fix the ambiguity |
| 2 | Does the pronoun match in number? | Singular noun → singular pronoun |
| 3 | Is there a person shift? | Keep consistent: "you…you" or "one…one" |
| 4 | Is "it/this/that" vague? | Replace with a specific noun |`
    },
    {
      id: 'rw5-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Pronoun Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: '"The committee submitted their report, and the board reviewed it at its next meeting." What pronoun error exists?',
            options: ['"Their" should be "its" — committee is a collective singular noun', '"It" should be "the report" to avoid ambiguity', '"Its" should be "their" for consistency', 'No error — all pronouns are correct'],
            correctAnswer: 0,
            explanation: '"Committee" is a collective singular noun and should take "its." The corrected sentence: "The committee submitted its report, and the board reviewed it at its next meeting."'
          },
          {
            question: 'Which sentence contains a pronoun error? A) "Anyone who forgets their password can reset it." B) "If a student is struggling, they should visit the tutor." C) "When one exercises regularly, you feel more energetic." D) "Each of the dogs wagged its tail."',
            options: ['C — pronoun person shift from "one" to "you"', 'A — "their" doesn\'t agree with "anyone"', 'D — "its" should be "their"', 'B — "they" doesn\'t agree with "student"'],
            correctAnswer: 0,
            explanation: 'C has a person shift: "one" (third person) switches to "you" (second person). Fix: "When you exercise regularly, you feel more energetic." A and B use acceptable singular "they." D is correct.'
          },
          {
            question: 'SAT question: "The researchers published _____ findings in a peer-reviewed journal, noting that the data supported _____ hypothesis." Select the correct pair.',
            options: ['their … their', 'its … its', 'their … its', 'his or her … his or her'],
            correctAnswer: 0,
            explanation: '"Researchers" is plural → "their" for both blanks. The findings belong to the researchers, and the hypothesis is also theirs. "Its" would require a singular antecedent.'
          }
        ]
      }
    },
    {
      id: 'rw5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Pronoun Check** — Select the correct fix.',
      exercise: {
        dropdowns: [
          '"The committee submitted ___ report." → [its|their|his|it\'s]',
          '"If one studies hard, ___ will succeed." → [one|you|they|he]',
          '"Maya told Zara that she won." This pronoun is [ambiguous|correct|plural|possessive]',
          '"Every student brought ___ laptop." → [their|his|her|its]'
        ],
        correctAnswers: ['its', 'one', 'ambiguous', 'their'],
        hint1: 'Committee is collective singular.',
        hint2: 'Match "one" with "one" — no person shifts.',
        hint3: '"She" could refer to either Maya or Zara.',
        explanation: 'Committee takes "its" (singular collective). "One…one" avoids a person shift. "She" is ambiguous with two female antecedents. "Their" is accepted as singular they on the SAT.'
      }
    },
    {
      id: 'rw5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Concept | Key Rule |
|---|---|
| Agreement | Pronoun must match antecedent in number |
| Ambiguity | If 2+ nouns could be the antecedent, rewrite |
| Person shifts | "One…one" or "you…you" — don't mix |
| Singular they | Accepted on modern SAT |
| Vague pronouns | Replace "it/this/that" with specific nouns |
| Collective nouns | Committee/team/jury → singular "its" |

*Next: Rhetorical Synthesis →*`
    }
  ]
};