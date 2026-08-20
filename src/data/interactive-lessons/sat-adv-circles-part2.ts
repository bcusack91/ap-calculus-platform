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

$$\\text{shortest distance to the circle} = \\overline{PC} - r$$

and the distance to the far side is $\\overline{PC} + r$. Both $\\overline{PC}$ and $\\overline{PC} + r$ are always offered.

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

**Tangency without a discriminant.** Set the perpendicular distance from the center to the line equal to $r$ and solve the absolute-value equation. One line replaces a page of substitution.

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
      explanation: `Completing the square: $(x + 3)^{2} + (y - 4)^{2} = 11 + 9 + 16 = 36$, so the center is $(-3, 4)$ and $r = 6$. Then $\\overline{PC} = \\sqrt{(4 + 3)^{2} + (9 - 4)^{2}} = \\sqrt{74} \\approx 8.60$, and the shortest distance to the circle is $8.60 - 6 = 2.60$. The traps: $8.60$ is the distance to the CENTER, stopping before the circle; $14.60$ is $\\overline{PC} + r$, the distance to the far side; $5.10$ reads the center as $(3, 4)$ — the sign slip on $(x + 3)^{2}$ — giving $\\sqrt{26}$.`
    },
    {
      id: 'circ-adv-p2-q3',
      type: 'quiz' as const,
      question: `In the $xy$-plane, the line $y = 2x + k$ is tangent to the circle $x^{2} + y^{2} - 4x + 2y - 20 = 0$. What is the positive value of $k$, to the nearest hundredth?`,
      options: ['$5$', '$6.18$', '$11.18$', '$16.18$'],
      correctAnswer: 1,
      explanation: `The circle is $(x - 2)^{2} + (y + 1)^{2} = 25$: center $(2, -1)$, $r = 5$. Writing the line as $2x - y + k = 0$, tangency means the distance from the center equals the radius: $\\frac{|2(2) - (-1) + k|}{\\sqrt{5}} = 5$, so $|5 + k| = 5\\sqrt{5} \\approx 11.18$ and $k = 5\\sqrt{5} - 5 \\approx 6.18$. The traps: $11.18$ is $5\\sqrt{5}$, stopping before subtracting the $5$; $16.18$ is the magnitude of the OTHER solution ($k = -5\\sqrt{5} - 5$), the tangent line on the far side; $5$ is simply the radius.`
    }
  ]
}
