export const physics2ThinFilmPart1Data = {
  topicSlug: 'thin-film-interference',
  sections: [
    {
      id: 'thinfilminterference-p1-intro',
      type: 'text' as const,
      content: `# 🌈 Thin Film Interference

**Part 1 of 7 — Path Length Difference**

---

### How Thin Film Interference Works

When light hits a thin film, reflections occur at both the **top** and **bottom** surfaces. These two reflected waves interfere.

### Path Length Difference

The wave reflecting from the bottom surface travels an extra distance:

$$\\\\Delta = 2nt$$

where $n$ = index of refraction of the film and $t$ = thickness.

---

### Phase Shifts

A phase shift of $\\\\lambda/2$ (180°) occurs when light reflects from a surface of **higher** refractive index.

| Boundary | Phase Shift? |
|----------|-------------|
| Low $n$ → High $n$ | Yes (180°) |
| High $n$ → Low $n$ | No |

### Conditions for Constructive/Destructive

Depend on whether there are 0, 1, or 2 phase shifts at the surfaces.`
    },
    {
      id: 'thinfilminterference-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes path length difference?',
            options: ['A core AP Physics 2 concept', 'Not tested on the AP exam', 'Only relevant for Physics C', 'A concept from chemistry'],
            correctAnswer: 0,
            explanation: 'Path Length Difference is a fundamental concept tested on the AP Physics 2 exam.'
          }
        ]
      }
    }
  ]
};
