export const satWordProblemsPart6Data = {
  topicSlug: 'sat-word-problems-sat',
  sections: [
    {
      id: 'wp6-intro',
      type: 'text' as const,
      content: `# Geometry in Word Problems

**Part 6 of 7 — Area, Perimeter, and Volume in Context**

### Area and Perimeter
**"A garden's length is 3 feet more than twice its width. Its perimeter is 48 feet."**
- Width = $w$, Length = $2w + 3$
- $2(w) + 2(2w + 3) = 48$
- $2w + 4w + 6 = 48 → 6w = 42 → w = 7$
- Width = 7 ft, Length = 17 ft

### Volume Problems
**Cylinder:** $V = \pi r^2 h$
**Box:** $V = lwh$

"A cylindrical tank with radius 4 feet is being filled at 2 cubic feet per minute. How long to fill it to a height of 10 feet?"
- Volume = $\pi(4)^2(10) = 160\pi \approx 502.7$ cubic feet
- Time = $502.7 / 2 ≈ 251$ minutes

### Similar Figures
If two figures are similar with scale factor $k$:
- Lengths scale by $k$
- Areas scale by $k^2$
- Volumes scale by $k^3$

**Example:** A model building is 1/50 scale. If the model's area is 2 ft², the real building's area = $2 \times 50^2 = 5,000$ ft²

### The Pythagorean Theorem in Context
Ladder problems, diagonal walks, line-of-sight distances — always draw a right triangle.`
    },
    {
      id: 'wp6-q1',
      type: 'quiz' as const,
      question: 'A photo is enlarged so each dimension is tripled. How does the area change?',
      options: [
        'It triples',
        'It increases by a factor of 6',
        'It increases by a factor of 9',
        'It increases by a factor of 27'
      ],
      correctAnswer: 2,
      explanation: 'When dimensions are multiplied by k, area is multiplied by k². Since k = 3, area increases by 3² = 9. If the original was 4 × 6 = 24, the enlarged is 12 × 18 = 216 = 24 × 9.'
    }
  ]
};
