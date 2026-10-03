export const actTrigPart7Data = {
  topicSlug: 'act-trigonometry-act',
  sections: [
    {
      id: 'act-t7-intro',
      type: 'text' as const,
      content: `
# 🧭 Integrated ACT Trig Review

**Part 7 of 7 — Choosing the Right Tool, Avoiding the Classic Traps & a Mixed Problem Set**

Parts 1–6 each taught one tool. On the real test the questions arrive mixed, often with two tools in one problem, and the challenge is recognizing which tool a question needs. This part gives you a decision map, a list of the traps the answer choices are built from, and two mixed practice sets.

## Decision Map: What Is the Question Really Asking?

| If the question gives you… | And asks for… | Reach for |
|---|---|---|
| A right triangle, an angle, and a side | A side | SOH-CAH-TOA (Part 1) |
| A right triangle and two sides | An angle | Inverse trig (Part 1) |
| One ratio such as $\\tan X = \\frac{3}{4}$ | Another ratio, possibly from the other angle | Build the triangle with a triple (Part 1) |
| A height and an angle of elevation or depression | A distance | Move the angle to the ground end; tangent (Part 2) |
| A triangle with no right angle and a matched angle-side pair | A side or angle | Law of Sines (Part 2) |
| A triangle with SAS or SSS | A side or angle | Law of Cosines (Part 2) |
| An angle in radians, or one past 90° | A trig value | Unit circle: quadrant, reference angle, ASTC sign (Part 3) |
| A point $(x, y)$ on the terminal side | A trig value | $r = \\sqrt{x^2 + y^2}$, then $\\frac{y}{r}$, $\\frac{x}{r}$, $\\frac{y}{x}$ (Part 3) |
| An expression with sec, csc, cot, or squares | An equivalent expression | Convert to sin and cos; Pythagorean identity (Part 4) |
| $\\sin\\theta$ or $\\cos\\theta$ | $\\sin 2\\theta$ or $\\cos 2\\theta$ | Find the other ratio, then the double-angle formula (Part 4) |
| An equation $y = A\\sin(Bx + C) + D$ | Amplitude, period, max, shift | $\\lvert A\\rvert$, $\\frac{2\\pi}{\\lvert B\\rvert}$, $D \\pm \\lvert A\\rvert$, $-\\frac{C}{B}$ (Part 5) |
| A graph | Its equation | Midline, amplitude, start behavior, period (Part 5) |
| A story about a repeating quantity | A model or a value | Middle value, distance to the top, cycle time (Part 6) |

## The Classic Traps

Wrong answer choices on trig questions are usually built from a handful of predictable mistakes. If you know the list, you can spot the trap choice before you fall into it.

| Trap | Example of the wrong move | The fix |
|---|---|---|
| Ratio from the wrong angle | Using the side opposite B when the question asks about A | Mark the angle and label O, A, H first |
| Multiplying when you should divide | Hypotenuse $= 8\\cos 61^\\circ$ | Unknown on the bottom → divide; check that the hypotenuse is longest |
| Treating a leg as the hypotenuse | $90\\sin 25^\\circ$ for a horizontal distance | The hypotenuse is across from the right angle (the slanted side) |
| Subtracting before squaring | $1 - \\frac{5}{13}$ for $\\sin\\theta$ | Square first: $1 - \\frac{25}{169}$ |
| Wrong quadrant sign | $\\cos 210^\\circ = +\\frac{\\sqrt{3}}{2}$ | Decide the sign with ASTC before choosing |
| Reference angle to the y-axis | Reference angle of 300° is 30° | Always measure to the x-axis: 60° |
| Flipped conversion | $135^\\circ = \\frac{4\\pi}{3}$ | Degrees → radians multiplies by $\\frac{\\pi}{180}$ |
| $\\sin 2\\theta = 2\\sin\\theta$ | Getting 1.6 for a sine | Use $2\\sin\\theta\\cos\\theta$; a sine is at most 1 |
| Amplitude with a sign | Amplitude of $-5\\cos x$ is −5 | Amplitude is $\\lvert A\\rvert$ |
| Period multiplied by B | Period of $\\sin 3x$ is $6\\pi$ | Period $= \\frac{2\\pi}{\\lvert B\\rvert}$ |
| Phase shift not divided by B | Shift of $\\sin(2x - \\pi)$ is π | Factor out B: $\\sin(2(x - \\frac{\\pi}{2}))$ → shift $\\frac{\\pi}{2}$ |
| Diameter used as amplitude | $50\\sin(\\ldots)$ for a 50-foot wheel | Amplitude = radius |
| Max-to-min treated as a full period | Period = π when the max is at 0 and the min at π | Max to next min is half a period |

## Test-Day Habits

- **Pace:** 45 questions in 50 minutes is just over a minute each. Many trig questions ask for an **expression** ("Which expression gives…"), and those need a correct setup, not arithmetic.
- **Calculator mode:** if answers are in degrees, use degree mode. If a model's input is in radians (any equation with π inside the function), use radian mode or unit-circle values.
- **Reasonableness checks:** sine and cosine values lie between −1 and 1; a leg is shorter than the hypotenuse; the largest angle is opposite the longest side; the amplitude is positive.
- **Plug in to test identities:** substitute 30° or 60° into the expression and each choice.
- **Sketch:** a 10-second sketch of a triangle or a sine wave prevents most sign and angle mistakes.

## Putting Two Tools Together

Harder ACT questions chain two steps. Common pairings:

- **Point on terminal side → double angle:** find $r$, then sin and cos with signs, then $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$.
- **Phase shift → location of a maximum:** solve $Bx + C = \\frac{\\pi}{2}$, then the height is $A + D$.
- **Story → model → evaluation:** build $A$, $B$, $D$ from the description, then substitute a time and use a unit-circle value.
- **Law of Cosines → obtuse check:** the sign of $\\cos C$ tells you whether the angle is acute or obtuse.
      `
    },
    {
      id: 'act-t7-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Point on the terminal side, then a double angle</b></summary>

**Question:** The terminal side of θ passes through $(-8, 15)$. Find $\\sin 2\\theta$.

**Solution:**
1. $r = \\sqrt{64 + 225} = 17$.
2. $\\sin\\theta = \\frac{15}{17}$ and $\\cos\\theta = -\\frac{8}{17}$ (Quadrant II).
3. $\\sin 2\\theta = 2 \\cdot \\frac{15}{17} \\cdot \\left(-\\frac{8}{17}\\right) = -\\frac{240}{289}$. ✓
</details>

<details>
<summary><b>Example 2: Phase shift and the first maximum</b></summary>

**Question:** For $y = 5\\sin\\left(2x - \\frac{\\pi}{2}\\right) + 2$, find the first maximum with x > 0.

**Solution:**
1. Set the inside equal to $\\frac{\\pi}{2}$: $2x - \\frac{\\pi}{2} = \\frac{\\pi}{2} \\implies x = \\frac{\\pi}{2}$.
2. Height $= 5 + 2 = 7$. First maximum: $\\left(\\frac{\\pi}{2}, 7\\right)$.
3. Check with the shift: phase shift $= \\frac{\\pi/2}{2} = \\frac{\\pi}{4}$ right; the unshifted peak at $\\frac{\\pi}{4}$ moves to $\\frac{\\pi}{4} + \\frac{\\pi}{4} = \\frac{\\pi}{2}$. ✓
</details>

<details>
<summary><b>Example 3: Law of Cosines with an obtuse angle</b></summary>

**Question:** A triangle has sides 7, 8, and 13. Find the angle opposite the side of length 13.

**Solution:** $169 = 49 + 64 - 2(7)(8)\\cos C \\implies 56 = -112\\cos C \\implies \\cos C = -\\frac{1}{2} \\implies C = 120^\\circ$. The negative cosine confirms the angle is obtuse, as $169 > 113$ predicted. ✓
</details>
      `
    },
    {
      id: 'act-t7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Set 1: Triangles, the Unit Circle & Identities** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In right triangle ABC, angle C is the right angle and $\\tan A = \\frac{8}{15}$. What is $\\sin B$?',
            options: ['$\\frac{8}{17}$', '$\\frac{15}{8}$', '$\\frac{15}{17}$', '$\\frac{8}{15}$'],
            correctAnswer: 2,
            explanation: 'The leg opposite A is 8k and the leg adjacent to A is 15k, so the hypotenuse is 17k. From B, the opposite leg is the one adjacent to A, 15k, so sin B = 15/17. 8/17 is sin A, the right ratio from the wrong angle. 15/8 is tan B and 8/15 repeats tan A.'
          },
          {
            question: 'From the top of a 50-meter tower, a point on level ground is 120 meters from the base of the tower. Which expression gives the angle of depression from the top of the tower to the point?',
            options: ['$\\tan^{-1}\\left(\\frac{5}{12}\\right)$', '$\\sin^{-1}\\left(\\frac{5}{12}\\right)$', '$\\tan^{-1}\\left(\\frac{12}{5}\\right)$', '$\\cos^{-1}\\left(\\frac{5}{12}\\right)$'],
            correctAnswer: 0,
            explanation: 'The angle of depression equals the angle of elevation at the point. There, the 50-meter height is opposite and the 120-meter distance is adjacent, so the angle is tan⁻¹(50/120) = tan⁻¹(5/12). tan⁻¹(12/5) is the angle at the top measured from the vertical tower. The sine and cosine choices use the 120-meter leg as if it were the hypotenuse, which is actually 130 meters.'
          },
          {
            question: 'What is the value of $\\sin\\left(\\frac{5\\pi}{6}\\right)$?',
            options: ['$-\\frac{1}{2}$', '$\\frac{1}{2}$', '$-\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{3}}{2}$'],
            correctAnswer: 1,
            explanation: '5π/6 is 150°, in Quadrant II with a 30° reference angle, and sine is positive there, so sin(5π/6) = sin 30° = 1/2. −1/2 gives sine the wrong sign for Quadrant II. −√3/2 is cos(5π/6), and √3/2 is that cosine with its sign dropped.'
          },
          {
            question: 'A triangle has sides of length 7, 8, and 13. What is the measure of the angle opposite the side of length 13?',
            options: ['60°', '90°', '150°', '120°'],
            correctAnswer: 3,
            explanation: 'Law of Cosines: 169 = 49 + 64 − 112 cos C, so cos C = −56/112 = −1/2 and C = 120°. 60° comes from dropping the negative sign. 90° would require 169 = 113, and 150° would require cos C = −√3/2.'
          },
          {
            question: 'For all θ where both are defined, $\\dfrac{\\tan\\theta}{\\sec\\theta}$ is equivalent to which expression?',
            options: ['$\\sin\\theta$', '$\\cos\\theta$', '$\\sin^2\\theta$', '$\\cot\\theta$'],
            correctAnswer: 0,
            explanation: '(sin θ/cos θ) ÷ (1/cos θ) = (sin θ/cos θ) · cos θ = sin θ. cos θ would require the sines to cancel, but there is only one sine. sin²θ squares a factor that appears once, and cot θ is the reciprocal of tan θ, not tan θ divided by sec θ.'
          }
        ]
      }
    },
    {
      id: 'act-t7-input1',
      type: 'input-boxes' as const,
      content: `
**Quick Computations** 🧮

1) Convert $\\frac{2\\pi}{5}$ radians to degrees.

2) Two sides of a triangle are 3 and 5, and the angle between them is 120°. How long is the third side? (Use $c^2 = a^2 + b^2 - 2ab\\cos C$.)

3) What is the period of $y = \\sin\\left(\\frac{\\pi}{6}x\\right)$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['72', '7', '12'],
        hint1: 'Replace π with 180: 2(180)/5.',
        hint2: 'cos 120° = −1/2, so the last term becomes +15.',
        hint3: 'Period = 2π ÷ (π/6).',
        explanation: '1) 360/5 = 72°. 2) c² = 9 + 25 − 30(−1/2) = 49, so c = 7. 3) 2π ÷ (π/6) = 12.'
      }
    },
    {
      id: 'act-t7-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: Two-Step Problems

<details>
<summary><b>Try it: θ is in Quadrant IV and cos θ = 3/5. What is tan θ?</b></summary>

Reference triangle 3-4-5. In Quadrant IV, $\\sin\\theta = -\\frac{4}{5}$, so $\\tan\\theta = \\frac{-4/5}{3/5} = -\\frac{4}{3}$.
</details>

<details>
<summary><b>Try it: A Ferris wheel model is h(t) = 25 sin(πt/5) + 30, with h in feet and t in minutes. How high is the rider at t = 7.5?</b></summary>

The input is $\\frac{7.5\\pi}{5} = \\frac{3\\pi}{2}$, and $\\sin\\frac{3\\pi}{2} = -1$, so $h = -25 + 30 = 5$ feet: the bottom of the wheel, three-quarters of the way through a 10-minute revolution.
</details>

<details>
<summary><b>Try it: The graph of y = 2 sin(Bx), B > 0, completes its first cycle at x = 4π. What is B?</b></summary>

Period $= 4\\pi$, so $\\frac{2\\pi}{B} = 4\\pi$ and $B = \\frac{1}{2}$.
</details>

**ACT Tip:** When a problem seems to need a tool you have not used yet, look for a **first step** that turns it into a familiar one: a point becomes a triangle, a radian angle becomes a reference angle, a story becomes A, B, and D.
      `
    },
    {
      id: 'act-t7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Set 2: Graphs & Models** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Which change to the equation $y = \\sin(3x)$ would triple the period of its graph?',
            options: ['Replacing the 3 with a 9', 'Multiplying the right side by 3', 'Replacing the 3 with a 1', 'Adding 3 to the right side'],
            correctAnswer: 2,
            explanation: 'Period = 2π/|B|: B = 3 gives 2π/3, and B = 1 gives 2π, three times as long. Replacing 3 with 9 divides the period by 3. Multiplying by 3 triples the amplitude, and adding 3 raises the midline; neither changes the period.'
          },
          {
            question: 'Starting at x = 0, the graph of $y = 2\\sin(Bx)$, with B > 0, completes its first full cycle at $x = 4\\pi$. What is the value of B?',
            options: ['$2$', '$4\\pi$', '$8\\pi^2$', '$\\frac{1}{2}$'],
            correctAnswer: 3,
            explanation: 'The period is 4π, so 2π/B = 4π and B = 1/2. B = 2 inverts the relationship (4π/2π). 4π uses the period itself as B, and 8π² multiplies 2π by the period instead of dividing.'
          },
          {
            question: 'What is the amplitude of $y = \\frac{2}{3}\\cos(4x)$?',
            options: ['$\\frac{2}{3}$', '$4$', '$\\frac{3}{2}$', '$\\frac{\\pi}{2}$'],
            correctAnswer: 0,
            explanation: 'Amplitude = |A| = 2/3, so the graph rises only two-thirds of a unit above its midline. 4 is B, 3/2 inverts the coefficient, and π/2 is the period, 2π/4.'
          },
          {
            question: 'For $y = 4\\sin\\left(x - \\frac{\\pi}{4}\\right) + 1$, at what point does the first maximum with x > 0 occur?',
            options: ['$\\left(\\frac{\\pi}{4}, 5\\right)$', '$\\left(\\frac{3\\pi}{4}, 5\\right)$', '$\\left(\\frac{3\\pi}{4}, 4\\right)$', '$\\left(\\frac{\\pi}{2}, 5\\right)$'],
            correctAnswer: 1,
            explanation: 'Sine peaks when its input is π/2: x − π/4 = π/2 gives x = 3π/4, and the height is A + D = 5. π/4 shifts left instead of right (π/2 − π/4). A height of 4 drops the vertical shift. π/2 is the peak of the unshifted graph.'
          },
          {
            question: 'A rider\'s height on a Ferris wheel, in feet, is $h(t) = 25\\sin\\left(\\frac{\\pi}{5}t\\right) + 30$, where t is in minutes. What is the rider\'s height at t = 7.5?',
            options: ['55 feet', '30 feet', '5 feet', '25 feet'],
            correctAnswer: 2,
            explanation: 'The input is (π/5)(7.5) = 3π/2, where sine equals −1, so h = −25 + 30 = 5 feet. 55 feet uses sin = +1, which happens at t = 2.5. 30 feet is the center height (sin = 0), and 25 feet is the radius, not a height on the wheel.'
          }
        ]
      }
    },
    {
      id: 'act-t7-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Identify the tool first:** right triangle → SOH-CAH-TOA; no right angle → Law of Sines (matched pair) or Law of Cosines (SAS, SSS); big or radian angles → unit circle; sec/csc/cot or squares → identities; equations and stories → A, B, C, D.
- **Know the traps:** wrong reference angle, multiply vs divide, wrong quadrant sign, flipped radian conversion, $\\sin 2\\theta \\neq 2\\sin\\theta$, amplitude sign, period $= \\frac{2\\pi}{\\lvert B\\rvert}$ not $2\\pi B$, phase shift divided by B, diameter vs radius.
- **Check reasonableness:** $-1 \\le \\sin\\theta, \\cos\\theta \\le 1$; legs are shorter than the hypotenuse; amplitude is positive; units match.
- **Chain steps:** point → r → ratios → double angle; inside $= \\frac{\\pi}{2}$ → peak location; story → model → evaluate with unit-circle values.
- **Use expressions:** many ACT trig questions reward a correct setup over arithmetic. Set it up, then match.
      `
    }
  ]
}
