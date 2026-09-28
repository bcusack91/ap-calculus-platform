export const lessonData = {
  topicSlug: 'sat-circles-advanced',
  sections: [
    {
      id: 'circ-adv-p2-traps',
      type: 'text' as const,
      content: `# Circles: Traps & Speed

**Part 2 of 3 — Distractor Autopsy**

### Distractor Species 1: $r^{2}$ Wearing $r$'s Clothes

Completing the square leaves you holding $r^{2}$. Every question then wants something built from $r$ — a circumference, a distance, a chord. The option computed from $r^{2}$ is present in almost every item in this bank. **Write "$r =$" on your scratch paper, not "$r^{2} =$."**

### Distractor Species 2: Distance to the Center vs. Distance to the Circle

"How far is $P$ from the circle?" is not "how far is $P$ from the center." For an external point:

$$\\text{shortest distance to the circle} = PC - r$$

and the distance to the far side is $PC + r$. Both $PC$ and $PC + r$ are always offered.

### Distractor Species 3: The Sign Slip Reading the Center

$(x + 3)^{2}$ means the center's $x$-coordinate is $-3$, not $3$. A center misread this way still produces a perfectly clean answer, which is why it survives all the way to the bubble.

### Distractor Species 4: Same Side vs. Opposite Sides

For two parallel chords, compute each chord's distance from the center. If the chords are on the **same side**, subtract those distances; on **opposite sides**, add them. The unwanted one is always an option, and the question states which case you are in — usually in a single clause you are moving too fast to read.

### Distractor Species 5: Degrees Where Radians Belong

$\\frac{5\\pi}{6}$ is an angle in radians ($150^{\\circ}$). Dropping it into a degree formula, or dropping $135^{\\circ}$ into $\\frac{1}{2}r^{2}\\theta$, both produce wrong answers that look reasonable. Convert everything to one system before touching a formula.

### Distractor Species 6: Stopping at the Wrong Layer

Sprinkler, gravel, and tile items run **area $\\rightarrow$ volume $\\rightarrow$ cost**. Each layer is an option. The question's final noun tells you where to stop: square meters, cubic meters, liters, or dollars.

---

## Speed Techniques

**Complete the square in one pass.** For $x^{2} + y^{2} + Dx + Ey + F = 0$, the center is $\\left(-\\frac{D}{2}, -\\frac{E}{2}\\right)$ and $r^{2} = \\frac{D^{2}}{4} + \\frac{E^{2}}{4} - F$. Reading the center straight off the coefficients saves twenty seconds and removes the sign slip entirely.

**Chord on a horizontal line, instantly.** For center $(h, k)$ and radius $r$, the line $y = c$ cuts a chord of length $2\\sqrt{r^{2} - (c - k)^{2}}$. Tangency is exactly the case where that radicand is zero.

**Tangency, fastest route first.** For a horizontal or vertical line, compare the center's coordinate with $r$: $y = c$ is tangent when $|c - k| = r$. For a slanted line, substitute and set the discriminant to $0$. When the contact point is given, use the fact that the radius is perpendicular to the tangent.

**Sector shortcut.** In radians, the sector area is $\\frac{1}{2}r^{2}\\theta$ and the arc is $r\\theta$ — so $\\text{area} = \\frac{1}{2} \\cdot r \\cdot \\text{arc}$. If a question gives you the sector area and asks for the arc, that relationship gets there in one step.`
    },
    {
      id: 'circ-adv-p2-q1',
      type: 'quiz' as const,
      question: `A circle has radius $10$ cm. Sector $A$ has a central angle of $50$ degrees, and sector $B$ has a central angle of $\\dfrac{\\pi}{5}$ radians. To the nearest hundredth of a square centimeter, how much greater is the area of sector $A$ than the area of sector $B$?`,
      options: ['$12.22$', '$31.42$', '$43.63$', '$75.05$'],
      correctAnswer: 0,
      explanation: `Sector $A$ is in degrees: $\\frac{50}{360}\\pi(10)^{2} \\approx 43.63$ square cm. Sector $B$ is in radians: $\\frac{1}{2}(10)^{2}\\left(\\frac{\\pi}{5}\\right) = 10\\pi \\approx 31.42$ square cm. (Equivalently $\\frac{\\pi}{5}$ radians is $36^{\\circ}$, and $\\frac{36}{360}\\pi(100) = 10\\pi$ — same number, which confirms the conversion.) The difference is $43.63 - 31.42 = 12.22$. The traps: $43.63$ and $31.42$ are the two individual sector areas, each a complete-looking answer to a question that asked for a comparison; $75.05$ adds the sectors instead of subtracting.`
    },
    {
      id: 'circ-adv-p2-q2',
      type: 'quiz' as const,
      question: `In the $xy$-plane, a circle is given by $x^{2} + y^{2} + 6x - 8y - 11 = 0$, and $P$ is the point $(4, 9)$. What is the shortest distance from $P$ to the circle itself, to the nearest hundredth?`,
      options: ['$2.60$', '$5.10$', '$8.60$', '$14.60$'],
      correctAnswer: 0,
      explanation: `Completing the square: $(x + 3)^{2} + (y - 4)^{2} = 11 + 9 + 16 = 36$, so the center is $(-3, 4)$ and $r = 6$. Then $PC = \\sqrt{(4 + 3)^{2} + (9 - 4)^{2}} = \\sqrt{74} \\approx 8.60$, and the shortest distance to the circle is $8.60 - 6 = 2.60$. The traps: $8.60$ is the distance to the CENTER, stopping before the circle; $14.60$ is $PC + r$, the distance to the far side; $5.10$ reads the center as $(3, 4)$ — the sign slip on $(x + 3)^{2}$ — giving $\\sqrt{26}$.`
    },
    {
      id: 'circ-adv-p2-q3',
      type: 'quiz' as const,
      question: `In the $xy$-plane, the line $y = x + k$ is tangent to the circle $x^{2} + y^{2} - 2x - 4y - 3 = 0$. What is the positive value of $k$?`,
      options: ['$1$', '$3$', '$5$', '$6$'],
      correctAnswer: 2,
      explanation: `Complete the square: $(x - 1)^{2} + (y - 2)^{2} = 3 + 1 + 4 = 8$, so the center is $(1, 2)$ and $r^{2} = 8$. Substitute $y = x + k$: $(x - 1)^{2} + (x + k - 2)^{2} = 8$, which collects to $2x^{2} + (2k - 6)x + (k - 2)^{2} - 7 = 0$. Tangent means exactly one intersection, so the discriminant is $0$: $(2k - 6)^{2} - 8\\left[(k - 2)^{2} - 7\\right] = 0$ simplifies to $-4k^{2} + 8k + 60 = 0$, or $k^{2} - 2k - 15 = (k - 5)(k + 3) = 0$. The positive value is $k = 5$. (Check: with $k = 5$ the quadratic is $2x^{2} + 4x + 2 = 0$, a double root at $x = -1$, so the line touches the circle only at $(-1, 4)$.) The traps: $3$ reads the center as $(-1, -2)$, the sign slip in completing the square, which leads to $k^{2} + 2k - 15 = 0$; $6$ drops the leading $2$ when the two $x^{2}$ terms combine; $1$ is the $k$ that sends the line through the center, which cuts the circle twice instead of touching it once.`
    }
  ]
}
