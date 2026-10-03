export const actTrigPart2Data = {
  topicSlug: 'act-trigonometry-act',
  sections: [
    {
      id: 'act-t2-intro',
      type: 'text' as const,
      content: `
# 🗼 Trig Ratios & Applications

**Part 2 of 7 — Elevation & Depression, Two-Triangle Problems, Law of Sines & Law of Cosines**

Part 1 gave you the ratios. This part is about **setting up** word problems, where the triangle is not drawn for you, and about the two laws that handle triangles with no right angle.

## Angles of Elevation and Depression

Both angles are measured from a **horizontal line**, never from a vertical one.

| Term | Measured from | Toward | Typical setting |
|---|---|---|---|
| Angle of **elevation** | Horizontal at the observer | **Up** to the object | Looking up from the ground at a tree, kite, or building top |
| Angle of **depression** | Horizontal at the observer | **Down** to the object | Looking down from a cliff, lighthouse, or plane |

### Why the angle of depression equals the angle of elevation

Picture a person on a cliff looking down at a boat. Draw the horizontal line through the person's eye and the horizontal ground line through the boat. Those two horizontal lines are **parallel**, and the line of sight crosses both of them as a **transversal**. The angle of depression (at the top) and the angle of elevation (at the boat) are **alternate interior angles**, so they are **equal**.

**Practical consequence:** move the angle of depression down to the bottom of the picture. At the ground end, the vertical height is **opposite** the angle and the horizontal distance is **adjacent**, which gives you a standard SOH-CAH-TOA setup.

### Setting up any word problem

1. **Sketch** the situation: a vertical line for the height, a horizontal line for the ground, a slanted line for the line of sight (or ladder, wire, ramp).
2. **Mark the right angle** where the vertical meets the horizontal.
3. **Place the angle** at the ground end (move a depression angle down if needed).
4. **Label** the known and unknown sides as opposite, adjacent, or hypotenuse from that angle.
5. **Choose the ratio** and decide whether to multiply or divide.

**Watch for eye height.** If a person whose eyes are 5 feet above the ground sights the top of a tree, the triangle starts at eye level. Add the 5 feet back at the end.

## Two-Triangle Problems

Some ACT problems use **two right triangles that share a side**.

- **Stacked objects** (a flagpole on a building, a statue on a pedestal): both tops are sighted from the same spot, so both triangles share the same horizontal distance $d$. The upper object's height is the **difference** $d\\tan(\\text{bigger angle}) - d\\tan(\\text{smaller angle})$. You cannot subtract the angles first: $d\\tan 8^\\circ$ is not the same as $d\\tan 48^\\circ - d\\tan 40^\\circ$.
- **Moving observer** (the angle of elevation changes after walking closer): write one equation for each position using the same unknown height, then solve the system. Sometimes the triangle formed by the two sight lines is isosceles, which is a shortcut.

## Triangles Without a Right Angle

SOH-CAH-TOA only works in right triangles. For any other triangle, use one of these two laws. The convention: side $a$ is opposite angle $A$, side $b$ is opposite angle $B$, side $c$ is opposite angle $C$.

**Law of Sines**

$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$

**Law of Cosines**

$$c^2 = a^2 + b^2 - 2ab\\cos C$$

The ACT usually **states these formulas in the question** when you need them. Your job is to know **which one applies** and to plug in the right sides and angles.

## Which Law Applies?

| What you know | Name | Use |
|---|---|---|
| Two angles and any side | AAS or ASA | **Law of Sines** (find the third angle with 180° first if needed) |
| Two sides and an angle opposite one of them | SSA | **Law of Sines** |
| Two sides and the angle **between** them | SAS | **Law of Cosines** to find the third side |
| All three sides, no angles | SSS | **Law of Cosines**, solved for an angle |
| A right angle plus one more piece | — | SOH-CAH-TOA or the Pythagorean theorem |

**Rule of thumb:** the Law of Sines needs a **matched pair**, an angle together with the side opposite it. If you have no matched pair, you need the Law of Cosines.

### Using the Law of Cosines well

- The angle in the formula is always the angle **opposite** the side on the left. To find angle $C$, put the side opposite $C$ by itself on the left.
- If $C = 90^\\circ$, then $\\cos C = 0$ and the formula becomes the Pythagorean theorem. The $-2ab\\cos C$ term is the correction for a non-right angle.
- **Obtuse check:** if $c^2 > a^2 + b^2$, then $\\cos C$ is negative and angle $C$ is obtuse. If $c^2 < a^2 + b^2$, angle $C$ is acute.
- The largest angle is always opposite the longest side.

### Bonus formula: area with two sides and the included angle

$$\\text{Area} = \\frac{1}{2}ab\\sin C$$

This is the familiar $\\frac{1}{2}bh$, because the height to side $a$ is $b\\sin C$.
      `
    },
    {
      id: 'act-t2-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Angle of depression</b></summary>

**Question:** From the top of a 120-foot cliff, the angle of depression to a boat is 18°. How far is the boat from the base of the cliff?

**Solution:**
1. Move the 18° angle down to the boat (alternate interior angles).
2. At the boat, the 120-foot cliff is **opposite** and the distance $d$ is **adjacent** → tangent.
3. $\\tan 18^\\circ = \\frac{120}{d}$, so $d = \\frac{120}{\\tan 18^\\circ} \\approx \\frac{120}{0.3249} \\approx 369$ feet. ✓
</details>

<details>
<summary><b>Example 2: Law of Sines (AAS)</b></summary>

**Question:** In triangle ABC, angle A = 50°, angle B = 65°, and side a = 10. Find side b.

**Solution:**
1. You have a matched pair (A with a) → Law of Sines.
2. $\\frac{10}{\\sin 50^\\circ} = \\frac{b}{\\sin 65^\\circ}$, so $b = \\frac{10\\sin 65^\\circ}{\\sin 50^\\circ} \\approx \\frac{10(0.9063)}{0.7660} \\approx 11.8$.
3. Check: the larger angle (65°) is opposite the longer side (11.8 > 10). ✓
</details>

<details>
<summary><b>Example 3: Law of Cosines (SAS and SSS)</b></summary>

**SAS:** Two sides are 6 and 10 with an included angle of 120°. Find the third side.

$$c^2 = 36 + 100 - 2(6)(10)\\cos 120^\\circ = 136 - 120\\left(-\\tfrac{1}{2}\\right) = 196, \\quad c = 14$$

Because the angle is obtuse, the cosine is negative and the third side comes out **longer** than it would in a right triangle.

**SSS:** A triangle has sides 3, 5, and 7. Find its largest angle (opposite 7).

$$49 = 9 + 25 - 2(3)(5)\\cos C \\implies 15 = -30\\cos C \\implies \\cos C = -\\tfrac{1}{2} \\implies C = 120^\\circ$$ ✓
</details>
      `
    },
    {
      id: 'act-t2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Set Up the Situation** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A kite string is 80 feet long and makes a 35° angle of elevation with the horizontal at the flyer\'s hand. Which expression gives the height of the kite above the flyer\'s hand, in feet?',
            options: ['80 cos 35°', '80 sin 35°', '80 tan 35°', '80 ÷ sin 35°'],
            correctAnswer: 1,
            explanation: 'The string is the hypotenuse and the height is opposite the 35° angle, so height = 80 sin 35°. 80 cos 35° is the horizontal distance to the point under the kite. 80 tan 35° treats the string as a leg, and 80 ÷ sin 35° is longer than the string, which no leg can be.'
          },
          {
            question: 'From the top of a 200-foot building, the angle of depression to a parked car is 32°. Which expression gives the length of the line of sight from the top of the building to the car, in feet?',
            options: ['200 tan 32°', '200 cos 32°', '200 ÷ sin 32°', '200 sin 32°'],
            correctAnswer: 2,
            explanation: 'At the car the angle of elevation is also 32°, the 200-foot height is opposite it, and the line of sight is the hypotenuse: sin 32° = 200/L, so L = 200 ÷ sin 32°. 200 tan 32° treats the building as the side adjacent to the angle at the car, but it is the opposite side. 200 sin 32° and 200 cos 32° both treat the building as the hypotenuse, giving lengths shorter than the building itself.'
          },
          {
            question: 'A person whose eyes are 5 feet above level ground stands 40 feet from a tree. The angle of elevation from the person\'s eyes to the top of the tree is 50°. Which expression gives the height of the tree, in feet?',
            options: ['40 tan 50°', '45 tan 50°', '5 + 40 sin 50°', '5 + 40 tan 50°'],
            correctAnswer: 3,
            explanation: 'From eye level, the 40-foot distance is adjacent and the part of the tree above eye level is opposite: 40 tan 50°. The triangle starts 5 feet up, so the full height is 5 + 40 tan 50°. Leaving off the 5 measures only the part above the eyes, 45 tan 50° adds the 5 to the wrong side, and using sine treats the 40-foot ground distance as a hypotenuse.'
          },
          {
            question: 'Why is the angle of depression from the top of a lighthouse to a boat equal to the angle of elevation from the boat to the top of the lighthouse?',
            options: [
              'The horizontals are parallel, so the two angles are alternate interior angles',
              'The two angles add to 90° because the lighthouse makes a right angle with the water',
              'Both angles are measured from the vertical lighthouse, so they share one side of the triangle',
              'The line of sight bisects the right angle at the base of the lighthouse into two equal angles'
            ],
            correctAnswer: 0,
            explanation: 'The horizontal through the top and the water line through the boat are parallel, and the line of sight is a transversal, so the two angles are alternate interior angles and must be equal. Angles that add to 90° are complementary, not equal. Both angles are measured from horizontals, not from the vertical. The sight line bisects the base angle only in the special case of 45°.'
          }
        ]
      }
    },
    {
      id: 'act-t2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Pick the Right Tool** 🔍

Choose the method you would use first for each triangle.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Two sides and the angle between them are known (no right angle); find the third side.',
            options: ['Law of Sines', 'Law of Cosines', 'SOH-CAH-TOA']
          },
          {
            label: 'Two angles and the side opposite one of them are known; find another side.',
            options: ['Law of Sines', 'Law of Cosines', 'SOH-CAH-TOA']
          },
          {
            label: 'All three sides are known (no right angle); find an angle.',
            options: ['Law of Sines', 'Law of Cosines', 'SOH-CAH-TOA']
          },
          {
            label: 'A right triangle with a known hypotenuse and one acute angle; find a leg.',
            options: ['Law of Sines', 'Law of Cosines', 'SOH-CAH-TOA']
          }
        ],
        correctAnswers: ['Law of Cosines', 'Law of Sines', 'Law of Cosines', 'SOH-CAH-TOA'],
        hint1: 'SAS has no angle matched with its opposite side.',
        hint2: 'An angle plus its opposite side is a matched pair.',
        hint3: 'With SSS you have no angles at all, so no matched pair.',
        explanation: 'Law of Sines needs a matched angle-side pair (AAS, ASA, SSA). Law of Cosines handles SAS and SSS. When a right angle is present, plain SOH-CAH-TOA is fastest.'
      }
    },
    {
      id: 'act-t2-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

<details>
<summary><b>Try it: From a point 50 feet from a building, the angles of elevation to the top of the building and to the top of a flagpole on its roof are 40° and 48°. How tall is the flagpole?</b></summary>

Both triangles share the 50-foot adjacent side. Top of flagpole: $50\\tan 48^\\circ$. Roof: $50\\tan 40^\\circ$. Flagpole $= 50\\tan 48^\\circ - 50\\tan 40^\\circ \\approx 55.5 - 42.0 \\approx 13.6$ feet. Subtracting the angles first ($50\\tan 8^\\circ \\approx 7.0$) gives a wrong answer, because the 8° gap is not part of a right triangle with the 50-foot leg.
</details>

<details>
<summary><b>Try it: The law of cosines states c² = a² + b² − 2ab cos C. A triangle has sides 8, 9, and 13. Is its largest angle acute, right, or obtuse?</b></summary>

Compare $13^2 = 169$ with $8^2 + 9^2 = 145$. Since $169 > 145$, $\\cos C < 0$, so the largest angle is **obtuse**.
</details>

**ACT Tip:** When the stem says "The law of sines states…" or "The law of cosines states…", the formula is a hint about which one to use. Your work is matching each side with its opposite angle.
      `
    },
    {
      id: 'act-t2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'In triangle ABC, angle A = 30°, angle C = 105°, and side a = 8. The law of sines states $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$. What is the length of side b?',
            options: ['$4\\sqrt{2}$', '$16$', '$8\\sqrt{2}$', '$8$'],
            correctAnswer: 2,
            explanation: 'First find B = 180° − 30° − 105° = 45°. Then b = 8 sin 45° ÷ sin 30° = 8(√2/2) ÷ (1/2) = 8√2. 4√2 flips the two sines. 16 is 8 ÷ sin 30° with the sin 45° left out, and 8 assumes the triangle is isosceles, which would need A = B.'
          },
          {
            question: 'Two sides of a triangle are 4 and 6, and the angle between them is 60°. The law of cosines states $c^2 = a^2 + b^2 - 2ab\\cos C$. What is the length of the third side?',
            options: ['$2\\sqrt{13}$', '$2\\sqrt{7}$', '$2\\sqrt{19}$', '$2\\sqrt{10}$'],
            correctAnswer: 1,
            explanation: 'c² = 16 + 36 − 2(4)(6)(1/2) = 52 − 24 = 28, so c = √28 = 2√7. 2√13 is √52, which drops the cosine term (valid only for a 90° angle). 2√19 is √76, from adding 24 instead of subtracting it, and 2√10 is √40, which subtracts only 12 because the factor of 2 was left out.'
          },
          {
            question: 'A triangle has sides of length 4, 6, and 9. Which statement about its largest angle is true?',
            options: [
              'Obtuse, because 81 is greater than 16 + 36',
              'Acute, because 9 is less than 4 + 6',
              'Right, because 9 is the longest side',
              'Acute, because 81 is less than 100'
            ],
            correctAnswer: 0,
            explanation: 'Compare the square of the longest side with the sum of the other two squares: 81 > 52, so cos C is negative and the angle is obtuse. 9 < 4 + 6 only shows that the triangle exists. Being the longest side does not make a right angle; that requires 81 = 52. Comparing 81 with 100 squares the sum (4 + 6)² instead of adding the squares 16 + 36.'
          },
          {
            question: 'From point A on level ground, the angle of elevation to the top of a tower is 30°. After walking 100 feet straight toward the tower to point B, the angle of elevation is 60°. What is the height of the tower, in feet?',
            options: ['$100\\sqrt{3}$', '$50$', '$100$', '$50\\sqrt{3}$'],
            correctAnswer: 3,
            explanation: 'In the triangle formed by A, B, and the top, the angle at B is 180° − 60° = 120°, so the angle at the top is 30°, making the triangle isosceles: the sight line from B is 100 feet. Then height = 100 sin 60° = 50√3. (Equivalently, h = x√3 and h = (x + 100)/√3 give x = 50.) 100√3 uses tan 60° with the 100-foot walk as the adjacent side. 50 is the distance from B to the base, and 100 is the sight line from B, not a vertical height.'
          }
        ]
      }
    },
    {
      id: 'act-t2-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Elevation and depression are measured from the horizontal.** The angle of depression from the top equals the angle of elevation from the bottom (alternate interior angles of parallel horizontals).
- **Move the angle to the ground end**, where the height is opposite and the horizontal distance is adjacent.
- **Add eye height** when the triangle starts above the ground.
- **Stacked objects:** subtract the two heights, $d\\tan(\\text{big}) - d\\tan(\\text{small})$, never the angles.
- **Law of Sines** $\\frac{a}{\\sin A} = \\frac{b}{\\sin B}$ needs a matched angle-side pair (AAS, ASA, SSA).
- **Law of Cosines** $c^2 = a^2 + b^2 - 2ab\\cos C$ handles SAS and SSS; $c^2 > a^2 + b^2$ means angle C is obtuse.
- The ACT usually gives you the law; you supply the setup.
      `
    }
  ]
}
