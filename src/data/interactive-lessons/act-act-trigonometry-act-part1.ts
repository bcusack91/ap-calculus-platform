export const actTrigPart1Data = {
  topicSlug: 'act-trigonometry-act',
  sections: [
    {
      id: 'act-t1-intro',
      type: 'text' as const,
      content: `
# 📐 Right Triangle Trigonometry

**Part 1 of 7 — SOH-CAH-TOA, Choosing the Reference Angle & Inverse Trig**

Right-triangle trig is the foundation of every other trig question on the ACT Math section (45 questions in 50 minutes, 4 answer choices each). If you can label a triangle correctly and pick the right ratio, you can answer most of these questions in under a minute.

## The Three Ratios

For an **acute angle θ** in a right triangle:

| Ratio | Definition | Memory aid |
|-------|-----------|------------|
| $\\sin\\theta$ | $\\dfrac{\\text{opposite}}{\\text{hypotenuse}}$ | **SOH** |
| $\\cos\\theta$ | $\\dfrac{\\text{adjacent}}{\\text{hypotenuse}}$ | **CAH** |
| $\\tan\\theta$ | $\\dfrac{\\text{opposite}}{\\text{adjacent}}$ | **TOA** |

## Step 1 Is Always: Choose the Reference Angle

"Opposite" and "adjacent" have no meaning until you know **which angle** you are standing at. The same side is opposite one acute angle and adjacent to the other.

1. **Mark the angle** the question is about (the given angle, or the angle you are asked to find).
2. **Hypotenuse:** the side across from the right angle. It is always the longest side, and it never changes.
3. **Opposite:** the leg that does **not touch** your angle.
4. **Adjacent:** the leg that **touches** your angle (and is not the hypotenuse).

**Example of the switch:** In right triangle ABC with the right angle at C, legs AC = 8 and BC = 15, and hypotenuse AB = 17:

| | From angle A | From angle B |
|---|---|---|
| Opposite leg | BC = 15 | AC = 8 |
| Adjacent leg | AC = 8 | BC = 15 |
| sine | 15/17 | 8/17 |
| cosine | 8/17 | 15/17 |
| tangent | 15/8 | 8/15 |

Notice that $\\sin A = \\cos B$ and $\\cos A = \\sin B$. The two acute angles are **complementary** (they add to 90°), so the sine of one always equals the cosine of the other, and their tangents are reciprocals. The ACT tests this directly: if $\\sin A = 0.28$, then $\\cos B = 0.28$ with no calculation.

## Step 2: Pick the Ratio That Uses the Two Sides in Play

Look at the side you **know** and the side you **want**. Exactly one ratio connects them.

| Known side + wanted side | Ratio |
|---|---|
| Hypotenuse and opposite | sine |
| Hypotenuse and adjacent | cosine |
| Opposite and adjacent (no hypotenuse) | tangent |

## Step 3: Multiply or Divide?

Write the ratio as an equation, then solve.

- **Unknown on top** → multiply. $\\sin 35^\\circ = \\dfrac{x}{20}$ gives $x = 20\\sin 35^\\circ$.
- **Unknown on the bottom** → divide. $\\cos 61^\\circ = \\dfrac{8}{h}$ gives $h = \\dfrac{8}{\\cos 61^\\circ}$.

Many ACT questions stop here and ask "Which expression gives the length…?" You do not need a calculator for those, only the correct setup. **Sanity check:** a leg must come out shorter than the hypotenuse. Dividing a leg by a sine or cosine (both less than 1 for acute angles) makes it longer, which is right only when you are finding the hypotenuse.

## Finding an Angle: Inverse Trig

When you know two sides and want the **angle**, use an inverse function:

$$\\theta = \\sin^{-1}\\left(\\frac{\\text{opp}}{\\text{hyp}}\\right), \\quad \\theta = \\cos^{-1}\\left(\\frac{\\text{adj}}{\\text{hyp}}\\right), \\quad \\theta = \\tan^{-1}\\left(\\frac{\\text{opp}}{\\text{adj}}\\right)$$

- $\\sin^{-1}$ means "the angle whose sine is…". It is **not** $\\frac{1}{\\sin}$ (that is cosecant, covered in Part 4).
- On a calculator, check you are in **degree mode** when the answers are in degrees.
- Example: $\\sin\\theta = 0.5$ means $\\theta = \\sin^{-1}(0.5) = 30^\\circ$.

## Exact Values from Special Right Triangles

| Triangle | Side ratio | Values |
|---|---|---|
| 45°-45°-90° | $x : x : x\\sqrt{2}$ | $\\sin 45^\\circ = \\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$, $\\tan 45^\\circ = 1$ |
| 30°-60°-90° | $x : x\\sqrt{3} : 2x$ (short leg opposite 30°) | $\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$, $\\tan 30^\\circ = \\frac{\\sqrt{3}}{3}$ |
| | | $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$, $\\cos 60^\\circ = \\frac{1}{2}$, $\\tan 60^\\circ = \\sqrt{3}$ |

## Building the Whole Triangle from One Ratio

If you are told $\\tan X = \\frac{3}{4}$, the legs are $3k$ and $4k$ for some $k$, so the hypotenuse is $5k$. You can then write any ratio from either angle. Know the common Pythagorean triples: **3-4-5, 5-12-13, 8-15-17, 7-24-25** (and their multiples).

## The Pythagorean Identity

Divide $a^2 + b^2 = c^2$ by $c^2$ and you get

$$\\sin^2\\theta + \\cos^2\\theta = 1$$

So if $\\cos\\theta = \\frac{5}{13}$ for an acute angle, then $\\sin^2\\theta = 1 - \\frac{25}{169} = \\frac{144}{169}$ and $\\sin\\theta = \\frac{12}{13}$. (Square first, then subtract; $1 - \\frac{5}{13}$ is a common wrong move.)

## Area with Trig

The two **legs** of a right triangle are a base and its height, so area $= \\frac{1}{2}(\\text{leg})(\\text{leg})$. If you know the hypotenuse and an angle, find both legs with sine and cosine first.
      `
    },
    {
      id: 'act-t1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Find both legs from the hypotenuse and an angle</b></summary>

**Question:** In right triangle PQR, the right angle is at R, hypotenuse PQ = 18, and angle P measures 28°. Find QR and PR.

**Solution:**
1. Stand at angle P. QR does not touch P, so it is **opposite**. PR touches P, so it is **adjacent**.
2. Opposite with hypotenuse → sine: $\\sin 28^\\circ = \\frac{QR}{18}$, so $QR = 18\\sin 28^\\circ \\approx 18(0.4695) \\approx 8.45$.
3. Adjacent with hypotenuse → cosine: $PR = 18\\cos 28^\\circ \\approx 18(0.8829) \\approx 15.89$.
4. Check: both legs are shorter than 18, and $8.45^2 + 15.89^2 \\approx 324 = 18^2$. ✓
</details>

<details>
<summary><b>Example 2: Find an angle with inverse trig</b></summary>

**Question:** A wheelchair ramp rises 3 feet over a horizontal distance of 10 feet. What angle does the ramp make with the ground?

**Solution:**
1. At the ground angle, the 3-foot rise is **opposite** and the 10-foot run is **adjacent**. No hypotenuse is involved → tangent.
2. $\\tan\\theta = \\frac{3}{10} = 0.3$, so $\\theta = \\tan^{-1}(0.3) \\approx 16.7^\\circ$.
3. If the question asks for an expression, the answer is simply $\\tan^{-1}\\left(\\frac{3}{10}\\right)$. ✓
</details>

<details>
<summary><b>Example 3: Build the triangle from one ratio, then switch angles</b></summary>

**Question:** In right triangle XYZ, the right angle is at Y and $\\tan X = \\frac{5}{12}$. Find $\\sin X$ and $\\cos Z$.

**Solution:**
1. Opposite X is YZ = 5k; adjacent to X is XY = 12k. Hypotenuse XZ = 13k (a 5-12-13 triple).
2. $\\sin X = \\frac{5}{13}$.
3. Now stand at Z: the adjacent leg is YZ = 5k, so $\\cos Z = \\frac{5}{13}$, the same as $\\sin X$, exactly as the complementary-angle rule predicts. ✓
</details>
      `
    },
    {
      id: 'act-t1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Label, Then Choose the Ratio** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In right triangle DEF, angle E is the right angle, DE = 9, EF = 12, and DF = 15. What is $\\cos D$?',
            options: ['$\\frac{4}{5}$', '$\\frac{3}{4}$', '$\\frac{3}{5}$', '$\\frac{4}{3}$'],
            correctAnswer: 2,
            explanation: 'DE touches angle D, so it is the adjacent leg, and DF is the hypotenuse: cos D = 9/15 = 3/5. The value 4/5 uses EF, the leg opposite D, so it is sin D. 3/4 and 4/3 compare the two legs, which makes them tangents (tan F and tan D), not cosines.'
          },
          {
            question: 'A right triangle has an acute angle of 52°. The leg adjacent to that angle is 14 units long. Which expression gives the length of the leg opposite the 52° angle?',
            options: ['14 tan 52°', '14 sin 52°', '14 ÷ tan 52°', '14 cos 52°'],
            correctAnswer: 0,
            explanation: 'Opposite and adjacent with no hypotenuse means tangent: tan 52° = x/14, so x = 14 tan 52°. Sine and cosine both require the hypotenuse, but the 14-unit side is a leg. Dividing by tan 52° would be correct only if the 14-unit side were the opposite leg and you wanted the adjacent one.'
          },
          {
            question: 'In a right triangle, the leg adjacent to a 61° angle is 8 inches long. Which expression gives the length of the hypotenuse, in inches?',
            options: ['8 cos 61°', '8 tan 61°', '8 sin 61°', '8 ÷ cos 61°'],
            correctAnswer: 3,
            explanation: 'Adjacent and hypotenuse means cosine: cos 61° = 8/h. The unknown is in the denominator, so h = 8 ÷ cos 61°. Multiplying, 8 cos 61°, gives a value shorter than the 8-inch leg, which is impossible for a hypotenuse. 8 tan 61° is the opposite leg, and 8 sin 61° treats the 8-inch leg as if it were the hypotenuse, which also makes the result shorter than 8.'
          },
          {
            question: 'In right triangle ABC, angle C is the right angle and $\\sin A = 0.28$. What is $\\cos B$?',
            options: ['0.72', '0.28', '0.96', '3.57'],
            correctAnswer: 1,
            explanation: 'The side opposite A is the same side that is adjacent to B, and both ratios use the hypotenuse, so cos B = sin A = 0.28. 0.72 is 1 − 0.28, which is not a trig relationship. 0.96 is cos A (from the Pythagorean identity, the square root of 1 − 0.0784), and 3.57 is the reciprocal of 0.28.'
          }
        ]
      }
    },
    {
      id: 'act-t1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Which Ratio Connects These Sides?** 🔍

For each situation, choose the trig ratio you would set up (from the angle you are given).
      `,
      exercise: {
        dropdowns: [
          {
            label: 'You know the hypotenuse and want the side opposite the angle.',
            options: ['sine', 'cosine', 'tangent']
          },
          {
            label: 'You know the adjacent leg and want the opposite leg.',
            options: ['sine', 'cosine', 'tangent']
          },
          {
            label: 'You know the adjacent leg and want the hypotenuse.',
            options: ['sine', 'cosine', 'tangent']
          }
        ],
        correctAnswers: ['sine', 'tangent', 'cosine'],
        hint1: 'SOH: sine pairs opposite with hypotenuse.',
        hint2: 'If the hypotenuse is not involved at all, only one ratio is left.',
        hint3: 'CAH: cosine pairs adjacent with hypotenuse.',
        explanation: 'Name the two sides in play, then match: opposite + hypotenuse is sine, opposite + adjacent is tangent, and adjacent + hypotenuse is cosine.'
      }
    },
    {
      id: 'act-t1-input1',
      type: 'input-boxes' as const,
      content: `
**Compute It** 🧮

1) In a 30°-60°-90° triangle, the hypotenuse is 16. How long is the leg opposite the 30° angle?

2) In a right triangle, $\\sin\\theta = 0.6$ and the hypotenuse is 25. How long is the leg opposite θ?

3) What acute angle, in degrees, has a tangent of 1?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '15', '45'],
        hint1: 'The short leg of a 30°-60°-90° triangle is half the hypotenuse.',
        hint2: 'Opposite = hypotenuse × sine.',
        hint3: 'Tangent is 1 when the opposite and adjacent legs are equal.',
        explanation: '1) 16 ÷ 2 = 8. 2) 25 × 0.6 = 15. 3) Equal legs make an isosceles right triangle, so θ = 45°.'
      }
    },
    {
      id: 'act-t1-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

ACT right-triangle questions usually come in one of three shapes. Try each before opening the answer.

| Shape | What the question gives | What you do |
|---|---|---|
| "Which expression gives…" | An angle and one side | Label, pick the ratio, multiply or divide — no calculator |
| "What is the measure of the angle…" | Two sides | Inverse trig with those two sides |
| "What is cos B / tan Z…" | One ratio | Build the triangle (use a triple), then switch angles if needed |

<details>
<summary><b>Try it: A guy wire is 30 feet long and makes a 64° angle with the ground. How high up the pole is it attached?</b></summary>

The wire is the hypotenuse; the height on the pole is opposite the 64° ground angle. Height $= 30\\sin 64^\\circ \\approx 27.0$ feet.
</details>

<details>
<summary><b>Try it: In right triangle ABC (right angle at C), cos A = 8/17. What is tan B?</b></summary>

Adjacent to A is 8k and the hypotenuse is 17k, so the leg opposite A is 15k (8-15-17). From B, opposite is 8k and adjacent is 15k, so $\\tan B = \\frac{8}{15}$.
</details>

**ACT Tip:** Draw and label the triangle even when one is printed. Writing "O", "A", "H" next to the sides takes five seconds and prevents the most common mistake on this topic: using the ratio from the wrong angle.
      `
    },
    {
      id: 'act-t1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A 20-foot wire runs from the top of a vertical pole to a point on level ground, making a 62° angle with the ground. Which expression gives the height of the pole, in feet?',
            options: ['20 cos 62°', '20 tan 62°', '20 sin 62°', '20 ÷ sin 62°'],
            correctAnswer: 2,
            explanation: 'The wire is the hypotenuse, and the pole is the leg opposite the 62° ground angle, so height = 20 sin 62°. 20 cos 62° is the ground distance from the pole to the wire, the adjacent leg. 20 tan 62° treats the wire as a leg, and 20 ÷ sin 62° produces a length greater than 20, longer than the wire itself.'
          },
          {
            question: 'A 15-foot ladder leans against a vertical wall with its foot 6 feet from the wall on level ground. Which expression gives the angle between the ladder and the ground?',
            options: ['$\\sin^{-1}(0.4)$', '$\\cos^{-1}(0.4)$', '$\\tan^{-1}(0.4)$', '$\\tan^{-1}(2.5)$'],
            correctAnswer: 1,
            explanation: 'At the foot of the ladder, the 6-foot ground distance is adjacent and the ladder is the hypotenuse: cos θ = 6/15 = 0.4, so θ = cos⁻¹(0.4). Using sine pairs the 6 feet with the hypotenuse as though it were opposite, which gives the angle at the top of the ladder. Both tangent choices compare 6 with 15 as if the ladder were a leg.'
          },
          {
            question: 'For an acute angle θ, $\\sin\\theta = \\frac{7}{25}$. What is $\\tan\\theta$?',
            options: ['$\\frac{25}{24}$', '$\\frac{24}{25}$', '$\\frac{18}{25}$', '$\\frac{7}{24}$'],
            correctAnswer: 3,
            explanation: 'Opposite = 7 and hypotenuse = 25, so the adjacent leg is √(625 − 49) = 24 (a 7-24-25 triple), and tan θ = 7/24. 25/24 is hypotenuse over adjacent, the secant. 24/25 is cos θ, and 18/25 comes from subtracting 7/25 from 1 without squaring.'
          },
          {
            question: 'In right triangle ABC, angle C is the right angle, AB = 15, and $\\cos A = \\frac{4}{5}$. What is the area of triangle ABC?',
            options: ['54', '108', '67.5', '135'],
            correctAnswer: 0,
            explanation: 'cos A = AC/AB, so AC = 15(4/5) = 12, and then BC = √(225 − 144) = 9. The legs are a base-height pair: area = (1/2)(12)(9) = 54. 108 forgets the 1/2. 67.5 is (1/2)(9)(15) and 135 is (9)(15); both pair the hypotenuse with a leg, and those two sides are not perpendicular, so they are not a base and height.'
          },
          {
            question: 'In a 30°-60°-90° triangle, the side opposite the 30° angle is 5. How long is the side opposite the 60° angle?',
            options: ['$10$', '$5\\sqrt{3}$', '$15$', '$5$'],
            correctAnswer: 1,
            explanation: 'The sides are in the ratio x : x√3 : 2x with x = 5 opposite 30°, so the side opposite 60° is 5√3. 10 is the hypotenuse (2x). 15 multiplies by 3 instead of by √3, and 5 treats the two legs as equal, which is true only in a 45°-45°-90° triangle.'
          }
        ]
      }
    },
    {
      id: 'act-t1-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Choose the reference angle first.** Opposite = the leg that does not touch the angle; adjacent = the leg that does; the hypotenuse is across from the right angle.
- **SOH-CAH-TOA:** pick the ratio that uses the side you know and the side you want.
- **Unknown on top → multiply; unknown on the bottom → divide.** A leg is always shorter than the hypotenuse.
- **Inverse trig finds angles:** $\\theta = \\tan^{-1}\\left(\\frac{\\text{opp}}{\\text{adj}}\\right)$, and so on. $\\sin^{-1}$ is not $\\frac{1}{\\sin}$.
- **Complementary angles:** in a right triangle, $\\sin A = \\cos B$.
- **One ratio gives the whole triangle:** use triples (3-4-5, 5-12-13, 8-15-17, 7-24-25) or $\\sin^2\\theta + \\cos^2\\theta = 1$.
- **Special triangles:** 45°-45°-90° is $x : x : x\\sqrt{2}$; 30°-60°-90° is $x : x\\sqrt{3} : 2x$.
      `
    }
  ]
}
