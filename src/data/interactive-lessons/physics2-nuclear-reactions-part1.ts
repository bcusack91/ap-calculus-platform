export const physics2NuclearPart1Data = {
  topicSlug: 'nuclear-reactions',
  sections: [
    {
      id: 'nuclearreactions-p1-intro',
      type: 'text' as const,
      content: `# ☢️ Nuclear Physics

**Part 1 of 7 — Nuclear Structure & Binding Energy**

---

### Nuclear Notation

$$^A_Z X$$

| Symbol | Meaning |
|--------|---------|
| $A$ | Mass number (protons + neutrons) |
| $Z$ | Atomic number (protons) |
| $N = A - Z$ | Number of neutrons |

### Binding Energy

The energy required to completely separate all nucleons:

$$E_b = (\\\\Delta m)c^2$$

$$\\\\Delta m = [Zm_p + Nm_n] - m_{\\\\text{nucleus}}$$

### Binding Energy per Nucleon

The **binding energy per nucleon** ($E_b/A$) peaks near iron-56:
- Elements lighter than Fe-56: **fusion** releases energy
- Elements heavier than Fe-56: **fission** releases energy

> 🔑 This curve explains why both fusion (in stars) and fission (in reactors) release energy.`
    },
    {
      id: 'nuclearreactions-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes nuclear structure & binding energy?',
            options: ['A core AP Physics 2 concept', 'Not tested on the AP exam', 'Only relevant for Physics C', 'A concept from chemistry'],
            correctAnswer: 0,
            explanation: 'Nuclear Structure & Binding Energy is a fundamental concept tested on the AP Physics 2 exam.'
          }
        ]
      }
    }
  ]
};
