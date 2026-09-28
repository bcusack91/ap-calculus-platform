export const lessonData = {
  topicSlug: 'sat-geometry-trigonometry-advanced',
  sections: [
    {
      id: 'geot-adv-p2-traps',
      type: 'text' as const,
      content: `# Geometry & Trigonometry: Traps & Speed

**Part 2 of 3 — Distractor Autopsy**

Hard-tier geometry rarely punishes a bad theorem. It punishes a **correct calculation that stopped one step early** or **answered a neighbouring quantity**. Here is the full catalogue of what the wrong options actually are.

### Distractor Species 1: The Intermediate Leg

You are asked for a *perimeter*, an *area*, or a *difference*, and one option is the leg you found on the way. In a $\\tan A = \\frac{7}{24}$ problem with hypotenuse $75$, the legs are $21$ and $72$ — and $72$ will be sitting right there in the option list. Before you bubble, reread the last six words of the question.

### Distractor Species 2: The Un-Scaled Triple

Given $\\sin A = \\frac{8}{17}$, your instinct correctly says $8\\text{-}15\\text{-}17$. But the triangle in the question has hypotenuse $34$, not $17$. The scale factor is $34 \\div 17 = 2$, so the legs are $16$ and $30$, **not** $8$ and $15$. The area of the *unscaled* triangle is always planted as an option.

Memorize the triples so the recognition is free: $3\\text{-}4\\text{-}5$, $5\\text{-}12\\text{-}13$, $7\\text{-}24\\text{-}25$, $8\\text{-}15\\text{-}17$, $9\\text{-}40\\text{-}41$, $20\\text{-}21\\text{-}29$.

### Distractor Species 3: Equal Instead of Complementary

When a stem says $\\sin(\\text{something}) = \\cos(\\text{something else})$, the relationship is **complementary**: the two angle expressions sum to $90^{\\circ}$. The trap answer comes from setting the expressions *equal* to each other, and a second trap comes from summing them to $180^{\\circ}$. Both produce clean integers, which is exactly why they are believable.

### Distractor Species 4: Vertical Distance Masquerading as Perpendicular Distance

"How far is the tower from the road?" means the **perpendicular** distance. Measuring straight up or straight across to the line gives a larger number that is always an option. Build the right angle instead: the path's slope is the **negative reciprocal** of the line's slope, so write that path through the point, solve the two-line system to find where it meets the line, and finish with the distance formula. Using the plain reciprocal (dropping the sign change) is the planted slip, and it lands on the wrong point of the line.

### Distractor Species 5: Linear Ratio Where Area Ratio Belongs

Lengths scale by $k$; areas scale by $k^{2}$. An item that gives you a *difference* of areas is testing exactly this: if $k = 3$, then $\\text{big} - \\text{small} = 9A - A = 8A$, and the trap divides by $2$ instead.

---

## Speed Techniques

**Ratio → triangle.** Given $\\sin\\theta = \\frac{2}{5}$ or $\\tan\\theta = \\frac{2}{5}$, immediately draw the triangle with those two sides and fill the third by Pythagoras. Every other ratio is then free — no calculator needed.

**The two-observation formula.** Two elevation angles from points $d$ apart, same side:
$$h = \\frac{d}{\\frac{1}{\\tan\\theta_{\\text{far}}} - \\frac{1}{\\tan\\theta_{\\text{near}}}}$$
Each $\\frac{1}{\\tan\\theta}$ is the horizontal distance per unit of height, so subtract the **reciprocals** of the tangents, never the tangents themselves. That single sign-of-approach error is the most common wrong answer in the bank.

**Area in the coordinate plane: box it, then subtract.** If the figure has a horizontal or vertical side, use that side as the base and read the height straight off the coordinates. If it has none, draw the smallest rectangle whose sides pass through the vertices, then subtract the right triangles cut off in the corners. Each corner triangle's legs are just differences of coordinates, so no distance formula is needed. The planted errors are forgetting to halve the corner triangles and reporting the rectangle itself.

**Midpoint runs backwards.** If $M$ is the midpoint of $\\overline{AB}$ and you know $A$, then $B = 2M - A$. Doing $M - A$ instead is a planted option.`
    },
    {
      id: 'geot-adv-p2-q1',
      type: 'quiz' as const,
      question: `For an acute angle measure $t$ in degrees, $\\sin(2t + 6^{\\circ}) = \\cos(3t + 4^{\\circ})$, and both angle expressions are between $0^{\\circ}$ and $90^{\\circ}$. What is the value of $t$?`,
      options: ['$2$', '$16$', '$34$', '$52$'],
      correctAnswer: 1,
      explanation: `Sine and cosine are equal when their angles are COMPLEMENTARY, so $(2t + 6) + (3t + 4) = 90$, giving $5t + 10 = 90$ and $t = 16$. The distractors are the three other things a student does with two angle expressions: $2$ comes from setting them EQUAL ($2t + 6 = 3t + 4$), $34$ comes from summing them to $180^{\\circ}$, and $52$ is the measure of the second angle $3t + 4$ at the correct $t = 16$ — the right work reported as the wrong quantity.`
    },
    {
      id: 'geot-adv-p2-q2',
      type: 'quiz' as const,
      question: `In right triangle $ABC$, the right angle is at $C$, $\\sin A = \\dfrac{8}{17}$, and the hypotenuse $AB$ has length $68$. What is the area of triangle $ABC$?`,
      options: ['$60$', '$92$', '$960$', '$1920$'],
      correctAnswer: 2,
      explanation: `$\\sin A = \\frac{8}{17}$ signals the $8\\text{-}15\\text{-}17$ triple, but the hypotenuse here is $68$, so the scale factor is $68 \\div 17 = 4$ and the legs are $32$ and $60$. Area $= \\frac{1}{2}(32)(60) = 960$. The traps: $60$ is the longer leg alone — an intermediate, and also the area of the un-scaled $8\\text{-}15\\text{-}17$ triangle, so it feels doubly right; $92$ is the sum of the legs; $1920$ is the product of the legs with the $\\frac{1}{2}$ forgotten.`
    },
    {
      id: 'geot-adv-p2-q3',
      type: 'quiz' as const,
      question: `On a map where $1$ unit represents $1$ km, a straight pipeline follows the line $3x + 4y = 12$, and a pumping station stands at $(8, 9)$. A service road will be built from the station to meet the pipeline at a right angle. To the nearest tenth of a kilometer, how long is the service road?`,
      options: ['$7.7$', '$9.6$', '$10.0$', '$12.0$'],
      correctAnswer: 1,
      explanation: `"Meets at a right angle" means the road is perpendicular to the pipeline. The pipeline $3x + 4y = 12$ has slope $-\\frac{3}{4}$, so the road has slope $\\frac{4}{3}$: $y - 9 = \\frac{4}{3}(x - 8)$. Substituting into $3x + 4y = 12$ gives $3x + 36 + \\frac{16}{3}(x - 8) = 12$, so $25x = 56$, $x = 2.24$, and $y = 9 + \\frac{4}{3}(-5.76) = 1.32$. The road runs from $(8, 9)$ to $(2.24, 1.32)$: $\\sqrt{5.76^{2} + 7.68^{2}} = \\sqrt{92.16} = 9.6$ km. The traps: $12.0$ is the VERTICAL distance (at $x = 8$ the line is at $y = -3$, and $9 - (-3) = 12$); $10.0$ uses slope $\\frac{3}{4}$, the reciprocal without the sign change, which meets the pipeline at $(0, 3)$, and $\\sqrt{8^{2} + 6^{2}} = 10$; $7.7$ is only the vertical leg $9 - 1.32 = 7.68$, stopping before the distance formula. The perpendicular distance is always the shortest, which is a useful sanity check.`
    }
  ]
}
