export const actTrigPart3Data = {
  topicSlug: 'act-trigonometry-act',
  sections: [
    {
      id: 'act-t3-intro',
      type: 'text' as const,
      content: `
# ⭕ The Unit Circle

**Part 3 of 7 — Radians, Unit-Circle Values, Quadrant Signs (ASTC) & Reference Angles**

Right triangles only handle angles between 0° and 90°. The unit circle extends sine, cosine, and tangent to **every** angle, including obtuse angles, angles past 180°, and negative angles.

## Radians ↔ Degrees

A **radian** measures an angle by the arc it cuts off on a circle: on a circle of radius 1, an angle of 1 radian cuts off an arc of length 1. A full circle is $2\\pi$ radians, so

$$180^\\circ = \\pi \\text{ radians}$$

| Convert | Multiply by | Example |
|---|---|---|
| Degrees → radians | $\\dfrac{\\pi}{180}$ | $135^\\circ \\cdot \\frac{\\pi}{180} = \\frac{3\\pi}{4}$ |
| Radians → degrees | $\\dfrac{180}{\\pi}$ | $\\frac{7\\pi}{6} \\cdot \\frac{180}{\\pi} = 210^\\circ$ |

**Shortcut for radians with π:** replace π with 180° and simplify. $\\frac{5\\pi}{3} \\to \\frac{5(180^\\circ)}{3} = 300^\\circ$.

A radian measure **without** π is still a real angle: 1 radian ≈ 57.3°, so 2 radians ≈ 114.6°.

| Degrees | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° |
|---|---|---|---|---|---|---|---|---|
| Radians | $\\frac{\\pi}{6}$ | $\\frac{\\pi}{4}$ | $\\frac{\\pi}{3}$ | $\\frac{\\pi}{2}$ | $\\frac{2\\pi}{3}$ | $\\frac{3\\pi}{4}$ | $\\frac{5\\pi}{6}$ | $\\pi$ |

| Degrees | 210° | 225° | 240° | 270° | 300° | 315° | 330° | 360° |
|---|---|---|---|---|---|---|---|---|
| Radians | $\\frac{7\\pi}{6}$ | $\\frac{5\\pi}{4}$ | $\\frac{4\\pi}{3}$ | $\\frac{3\\pi}{2}$ | $\\frac{5\\pi}{3}$ | $\\frac{7\\pi}{4}$ | $\\frac{11\\pi}{6}$ | $2\\pi$ |

**Arc length:** on a circle of radius $r$, a central angle of $\\theta$ **radians** cuts off an arc of length $s = r\\theta$.

## Angles in Standard Position

An angle is in **standard position** when its vertex is at the origin and its initial side lies on the positive x-axis. Positive angles rotate **counterclockwise**; negative angles rotate clockwise. Angles that share a terminal side, such as 30°, 390°, and −330°, are **coterminal** (they differ by multiples of 360° or $2\\pi$) and have the same trig values.

## The Big Idea: (cos θ, sin θ)

The **unit circle** has radius 1 and center at the origin. Where the terminal side of θ meets the circle, the point is

$$(x, y) = (\\cos\\theta, \\sin\\theta), \\qquad \\tan\\theta = \\frac{y}{x}$$

**x is cosine, y is sine.** That is the whole definition. Since every point on the unit circle has coordinates between −1 and 1, sine and cosine are always between −1 and 1. Tangent has no such limit.

| Angle | Point $(\\cos\\theta, \\sin\\theta)$ | $\\tan\\theta$ |
|---|---|---|
| 0° | $(1, 0)$ | 0 |
| 30° | $\\left(\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$ | $\\frac{\\sqrt{3}}{3}$ |
| 45° | $\\left(\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$ | 1 |
| 60° | $\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$ | $\\sqrt{3}$ |
| 90° | $(0, 1)$ | undefined |
| 180° | $(-1, 0)$ | 0 |
| 270° | $(0, -1)$ | undefined |

## Quadrant Signs: ASTC

The signs of x and y in each quadrant decide the signs of the trig values.

| Quadrant | Angles | x (cos) | y (sin) | Positive functions |
|---|---|---|---|---|
| I | 0° to 90° | + | + | **A**ll |
| II | 90° to 180° | − | + | **S**ine (and cosecant) |
| III | 180° to 270° | − | − | **T**angent (and cotangent) |
| IV | 270° to 360° | + | − | **C**osine (and secant) |

Memory aid: **"All Students Take Calculus,"** starting in Quadrant I and moving counterclockwise. Tangent is positive in Quadrant III because it is a negative divided by a negative.

## Reference Angles

The **reference angle** is the acute angle between the terminal side and the **x-axis** (never the y-axis).

| Terminal side in | Reference angle (degrees) | Reference angle (radians) |
|---|---|---|
| Quadrant II | $180^\\circ - \\theta$ | $\\pi - \\theta$ |
| Quadrant III | $\\theta - 180^\\circ$ | $\\theta - \\pi$ |
| Quadrant IV | $360^\\circ - \\theta$ | $2\\pi - \\theta$ |

## The Three-Step Method for Any Angle

1. **Quadrant:** find where the terminal side lands.
2. **Reference angle:** find the acute angle to the x-axis, and take its trig value.
3. **Sign:** attach + or − using ASTC.

Example: $\\sin 240^\\circ$. Quadrant III; reference angle 60°; sine is negative in Quadrant III. So $\\sin 240^\\circ = -\\sin 60^\\circ = -\\frac{\\sqrt{3}}{2}$.

This is also why angles that are mirror images share values up to sign: $\\sin 150^\\circ = \\sin 30^\\circ = \\frac{1}{2}$, because the 150° point is the 30° point reflected across the y-axis (same y, opposite x).

## Points Not on the Unit Circle

If the terminal side passes through any point $(x, y)$, let $r = \\sqrt{x^2 + y^2}$ (the distance from the origin). Then

$$\\sin\\theta = \\frac{y}{r}, \\quad \\cos\\theta = \\frac{x}{r}, \\quad \\tan\\theta = \\frac{y}{x}$$

The signs take care of themselves because x and y carry their own signs; $r$ is always positive.
      `
    },
    {
      id: 'act-t3-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Convert in both directions</b></summary>

- $240^\\circ \\cdot \\frac{\\pi}{180} = \\frac{240\\pi}{180} = \\frac{4\\pi}{3}$
- $\\frac{5\\pi}{6} \\cdot \\frac{180}{\\pi} = 150^\\circ$
- $2 \\text{ radians} \\cdot \\frac{180}{\\pi} \\approx 114.6^\\circ$ (no π, so the answer is not a "nice" angle) ✓
</details>

<details>
<summary><b>Example 2: Evaluate with quadrant + reference angle + sign</b></summary>

- $\\sin 315^\\circ$: Quadrant IV, reference 45°, sine negative → $-\\frac{\\sqrt{2}}{2}$.
- $\\cos\\frac{2\\pi}{3}$: that is 120°, Quadrant II, reference 60°, cosine negative → $-\\frac{1}{2}$.
- $\\tan 210^\\circ$: Quadrant III, reference 30°, tangent positive → $\\frac{\\sqrt{3}}{3}$. ✓
</details>

<details>
<summary><b>Example 3: One value plus a quadrant gives the rest</b></summary>

**Question:** $\\sin\\theta = -\\frac{5}{13}$ and θ is in Quadrant III. Find $\\cos\\theta$ and $\\tan\\theta$.

**Solution:**
1. Reference triangle: opposite 5, hypotenuse 13, so the other leg is 12.
2. In Quadrant III, x is negative: $\\cos\\theta = -\\frac{12}{13}$.
3. Tangent is positive in Quadrant III: $\\tan\\theta = \\frac{-5/13}{-12/13} = \\frac{5}{12}$. ✓
</details>

<details>
<summary><b>Example 4: A point off the unit circle</b></summary>

**Question:** The terminal side of θ passes through $(-6, 8)$. Find sin θ, cos θ, and tan θ.

**Solution:** $r = \\sqrt{36 + 64} = 10$. So $\\sin\\theta = \\frac{8}{10} = \\frac{4}{5}$, $\\cos\\theta = -\\frac{6}{10} = -\\frac{3}{5}$, $\\tan\\theta = \\frac{8}{-6} = -\\frac{4}{3}$. The point is in Quadrant II, and only sine is positive, as ASTC predicts. ✓
</details>
      `
    },
    {
      id: 'act-t3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Radians, Signs & Reference Angles** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is $\\frac{7\\pi}{4}$ radians expressed in degrees?',
            options: ['225°', '330°', '315°', '300°'],
            correctAnswer: 2,
            explanation: 'Replace π with 180°: 7(180°)/4 = 315°. 225° is 5π/4, 330° is 11π/6, and 300° is 5π/3; each comes from using the wrong numerator or denominator.'
          },
          {
            question: 'What is 210° expressed in radians?',
            options: ['$\\frac{7\\pi}{6}$', '$\\frac{6\\pi}{7}$', '$\\frac{5\\pi}{6}$', '$\\frac{7\\pi}{4}$'],
            correctAnswer: 0,
            explanation: 'Multiply by π/180: 210π/180 = 7π/6. 6π/7 flips the fraction after simplifying. 5π/6 is 150°, the Quadrant II angle with the same reference angle, and 7π/4 is 315°.'
          },
          {
            question: 'What is the value of $\\cos 240^\\circ$?',
            options: ['$-\\frac{\\sqrt{2}}{2}$', '$-\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$-\\frac{1}{2}$'],
            correctAnswer: 3,
            explanation: '240° is in Quadrant III with a reference angle of 60°, and cosine (the x-coordinate) is negative there, so cos 240° = −cos 60° = −1/2. −√2/2 uses a 45° reference angle, which belongs to 225°. −√3/2 is sin 240°, the y-coordinate, and √3/2 has both the wrong function and the wrong sign.'
          },
          {
            question: 'For an angle θ, $\\sin\\theta < 0$ and $\\tan\\theta > 0$. In which quadrant does the terminal side of θ lie?',
            options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
            correctAnswer: 2,
            explanation: 'Negative sine means y < 0, so Quadrant III or IV. Positive tangent means x and y have the same sign, which in the lower half happens only in Quadrant III. In Quadrant I every value is positive, in Quadrant II sine is positive, and in Quadrant IV tangent is negative.'
          },
          {
            question: 'What is the reference angle for $\\frac{5\\pi}{3}$?',
            options: ['$\\frac{2\\pi}{3}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{6}$', '$\\frac{5\\pi}{6}$'],
            correctAnswer: 1,
            explanation: '5π/3 is 300°, in Quadrant IV, so the reference angle is 2π − 5π/3 = π/3. 2π/3 is π − π/3, the Quadrant II formula applied in the wrong quadrant. π/6 measures to the y-axis instead of the x-axis, and 5π/6 is not acute, so it cannot be a reference angle.'
          }
        ]
      }
    },
    {
      id: 'act-t3-input1',
      type: 'input-boxes' as const,
      content: `
**Convert & Find** 🧮

1) Convert $\\frac{5\\pi}{12}$ radians to degrees.

2) Convert $\\frac{3\\pi}{2}$ radians to degrees.

3) What is the reference angle, in degrees, for 160°?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['75', '270', '20'],
        hint1: 'Replace π with 180 and simplify: 5(180)/12.',
        hint2: '3(180)/2.',
        hint3: '160° is in Quadrant II, so use 180° − θ.',
        explanation: '1) 900/12 = 75°. 2) 540/2 = 270°. 3) 180° − 160° = 20°.'
      }
    },
    {
      id: 'act-t3-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

<details>
<summary><b>Try it: θ is in Quadrant IV and cos θ = 8/17. What is sin θ?</b></summary>

The reference triangle is 8-15-17. In Quadrant IV, y is negative, so $\\sin\\theta = -\\frac{15}{17}$.
</details>

<details>
<summary><b>Try it: Which is greater, sin 100° or sin 170°?</b></summary>

Both are in Quadrant II, where sine is positive. Their reference angles are 80° and 10°, and $\\sin 80^\\circ > \\sin 10^\\circ$, so **sin 100°** is greater. Reference angles turn a strange-looking comparison into a familiar one.
</details>

<details>
<summary><b>Try it: A circle has radius 6. What arc length does a central angle of 2π/3 cut off?</b></summary>

$s = r\\theta = 6 \\cdot \\frac{2\\pi}{3} = 4\\pi$. (The angle must be in radians for this formula.)
</details>

**ACT Tip:** If an answer choice has the right size but the wrong sign, the question is testing ASTC. Decide the sign from the quadrant **before** you look at the choices.
      `
    },
    {
      id: 'act-t3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Angle θ is in Quadrant II and $\\sin\\theta = \\frac{3}{5}$. What is $\\cos\\theta$?',
            options: ['$\\frac{4}{5}$', '$-\\frac{3}{4}$', '$-\\frac{4}{5}$', '$\\frac{4}{3}$'],
            correctAnswer: 2,
            explanation: 'The reference triangle is 3-4-5, so the cosine has size 4/5, and x is negative in Quadrant II, so cos θ = −4/5. Positive 4/5 is correct only in Quadrant I. −3/4 is tan θ, and 4/3 is the reciprocal of the tangent with the sign dropped.'
          },
          {
            question: 'The terminal side of angle θ in standard position passes through the point (5, −12). What is $\\sin\\theta$?',
            options: ['$-\\frac{12}{13}$', '$-\\frac{12}{5}$', '$\\frac{5}{13}$', '$\\frac{12}{13}$'],
            correctAnswer: 0,
            explanation: 'r = √(25 + 144) = 13, and sin θ = y/r = −12/13. −12/5 is y/x, the tangent. 5/13 is x/r, the cosine, and 12/13 drops the sign of y, which is negative in Quadrant IV.'
          },
          {
            question: 'Which of the following has the same value as $\\cos 20^\\circ$?',
            options: ['cos 160°', 'cos 200°', 'sin 340°', 'cos 340°'],
            correctAnswer: 3,
            explanation: '340° is in Quadrant IV with a reference angle of 20°, and cosine is positive there, so cos 340° = cos 20°. cos 160° and cos 200° also have reference angle 20°, but they are in Quadrants II and III, where cosine is negative. sin 340° is −sin 20°, a different function and a negative value.'
          },
          {
            question: 'What is the value of $\\tan\\left(\\frac{3\\pi}{4}\\right)$?',
            options: ['$-\\frac{\\sqrt{2}}{2}$', '$-1$', '$-\\sqrt{3}$', '$\\frac{\\sqrt{2}}{2}$'],
            correctAnswer: 1,
            explanation: '3π/4 is 135°, in Quadrant II with a 45° reference angle. The point is (−√2/2, √2/2), so tan = y/x = −1. −√3 has the right sign but uses a 60° reference angle, which is tan(2π/3). The two √2/2 choices are the cosine and sine of 3π/4, not its tangent.'
          }
        ]
      }
    },
    {
      id: 'act-t3-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **180° = π radians.** Degrees → radians: multiply by $\\frac{\\pi}{180}$. Radians → degrees: multiply by $\\frac{180}{\\pi}$ (or replace π with 180°).
- **On the unit circle, a point is (cos θ, sin θ)** and $\\tan\\theta = \\frac{y}{x}$.
- **ASTC:** All positive in QI, Sine in QII, Tangent in QIII, Cosine in QIV.
- **Reference angle** = acute angle to the x-axis: $180^\\circ - \\theta$, $\\theta - 180^\\circ$, or $360^\\circ - \\theta$.
- **Any angle:** quadrant → reference-angle value → sign.
- **Off the unit circle:** $r = \\sqrt{x^2 + y^2}$, then $\\sin\\theta = \\frac{y}{r}$, $\\cos\\theta = \\frac{x}{r}$.
- **Arc length** $s = r\\theta$ with θ in radians.
      `
    }
  ]
}
