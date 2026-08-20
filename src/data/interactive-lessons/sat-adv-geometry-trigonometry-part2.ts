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

You are asked for a *perimeter*, an *area*, or a *difference*, and one option is the leg you found on the way. In a $\\tan A = \\frac{7}{24}$ problem with hypotenuse $50$, the legs are $14$ and $48$ — and $48$ will be sitting right there in the option list. Before you bubble, reread the last six words of the question.

### Distractor Species 2: The Un-Scaled Triple

Given $\\sin A = \\frac{8}{17}$, your instinct correctly says "8-15-17." But the triangle in the question has hypotenuse $68$, not $17$. The scale factor is $68 \\div 17 = 4$, so the legs are $32$ and $60$, **not** $8$ and $15$. The area of the *unscaled* triangle is always planted as an option.

Memorize the triples so the recognition is free: $3\\text{-}4\\text{-}5$, $5\\text{-}12\\text{-}13$, $7\\text{-}24\\text{-}25$, $8\\text{-}15\\text{-}17$, $9\\text{-}40\\text{-}41$, $20\\text{-}21\\text{-}29$.

### Distractor Species 3: Equal Instead of Complementary

When a stem says $\\sin(\\text{something}) = \\cos(\\text{something else})$, the relationship is **complementary**: the two angle expressions sum to $90^{\\circ}$. The trap answer comes from setting the expressions *equal* to each other, and a second trap comes from summing them to $180^{\\circ}$. Both produce clean integers, which is exactly why they are believable.

### Distractor Species 4: Vertical Distance Masquerading as Perpendicular Distance

"How far is the tower from the road?" means the **perpendicular** distance. Measuring straight up or straight across to the line gives a larger number that is always an option. Use
$$d = \\frac{|Ax_{0} + By_{0} - C|}{\\sqrt{A^{2} + B^{2}}}$$
for a line written $Ax + By = C$.

### Distractor Species 5: Linear Ratio Where Area Ratio Belongs

Lengths scale by $k$; areas scale by $k^{2}$. An item that gives you a *difference* of areas is testing exactly this: if $k = 2.5$, then $\\text{big} - \\text{small} = 6.25A - A = 5.25A$, and the trap divides by $1.5$ instead.

---

## Speed Techniques

**Ratio → triangle.** Given $\\sin\\theta = \\frac{2}{5}$ or $\\tan\\theta = \\frac{2}{5}$, immediately draw the triangle with those two sides and fill the third by Pythagoras. Every other ratio is then free — no calculator, no inverse trig.

**The two-observation formula.** Two elevation angles from points $d$ apart, same side:
$$h = \\frac{d}{\\cot\\theta_{\\text{far}} - \\cot\\theta_{\\text{near}}} = \\frac{d}{\\frac{1}{\\tan\\theta_{\\text{far}}} - \\frac{1}{\\tan\\theta_{\\text{near}}}}$$
Subtract the **cotangents**, never the tangents. That single sign-of-approach error is the most common wrong answer in the bank.

**Shoelace for any polygon.** List the vertices in order, repeat the first at the bottom, cross-multiply down-right minus down-left, halve the absolute value. It beats decomposition every time and never miscounts a region.

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
      options: ['$6.9$', '$9.6$', '$12.0$', '$16.0$'],
      correctAnswer: 1,
      explanation: `"Meets at a right angle" means perpendicular distance: $d = \\frac{|3(8) + 4(9) - 12|}{\\sqrt{3^{2} + 4^{2}}} = \\frac{48}{5} = 9.6$ km. The traps are the two easier distances and one formula slip: $12.0$ is the VERTICAL distance (at $x = 8$ the line is at $y = -3$, and $9 - (-3) = 12$); $16.0$ is the HORIZONTAL distance (at $y = 9$ the line is at $x = -8$); $6.9$ divides by $3 + 4 = 7$ instead of $\\sqrt{3^{2} + 4^{2}} = 5$. Perpendicular distance is always the smallest of the three, which is a useful sanity check.`
    }
  ]
}
