export const actTrigPart6Data = {
  topicSlug: 'act-trigonometry-act',
  sections: [
    {
      id: 'act-t6-intro',
      type: 'text' as const,
      content: `
# 🎡 Modeling with Sinusoids

**Part 6 of 7 — Ferris Wheels, Tides, Temperatures & Other Periodic Situations**

Anything that repeats on a regular cycle (a rider on a Ferris wheel, the water level at a dock, the average temperature through a year, hours of daylight, a weight bouncing on a spring) can be modeled with a sine or cosine function. ACT modeling questions ask you to **interpret** a given model or **build** one from a description. Both use the graph features from Part 5, now with units.

## What Each Parameter Means in Context

For $y = A\\sin(Bt) + D$ or $y = A\\cos(Bt) + D$:

| Parameter | Meaning in context | Ferris wheel | Tides |
|---|---|---|---|
| $\\lvert A\\rvert$ (amplitude) | Half the distance from the lowest to the highest value | The wheel's **radius** | Half of (high tide − low tide) |
| $D$ (midline) | The average or center value | Height of the wheel's **center** | Mean water level |
| Period $= \\frac{2\\pi}{B}$ | Time for one full cycle | Time for **one revolution** | Time from one high tide to the next |
| $D + \\lvert A\\rvert$ | Largest value | Top of the wheel | High-tide depth |
| $D - \\lvert A\\rvert$ | Smallest value | Bottom of the wheel | Low-tide depth |

**Units:** amplitude, midline, maximum, and minimum are in the **output** units (feet, meters, degrees). The period is in the **input** units (minutes, hours, months). A choice that reports a period in feet is wrong on its face.

### Translating a description into numbers

- **Diameter** given? Amplitude = **half** the diameter. A 50-foot wheel has amplitude 25, not 50.
- **Lowest point** given instead of the center? Center = lowest point + radius. A 60-foot wheel whose bottom is 4 feet off the ground has its center at 4 + 30 = 34 feet.
- **High and low** values given? $A = \\frac{\\text{high} - \\text{low}}{2}$, $D = \\frac{\\text{high} + \\text{low}}{2}$.
- **Time from a high to the next low?** That is **half** a period.
- Then compute $B = \\frac{2\\pi}{\\text{period}}$. A 4-minute revolution gives $B = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$; a 12-hour tide cycle gives $B = \\frac{\\pi}{6}$.

## Choosing Sine or Cosine from the Starting Point

Where the object is at $t = 0$ decides the form, with $A > 0$:

| At t = 0 the value is… | Use | Why |
|---|---|---|
| At its **maximum** | $A\\cos(Bt) + D$ | Cosine starts at its max |
| At its **minimum** | $-A\\cos(Bt) + D$ | Flipped cosine starts at its min |
| On the midline, **rising** | $A\\sin(Bt) + D$ | Sine starts on the midline going up |
| On the midline, **falling** | $-A\\sin(Bt) + D$ | Flipped sine starts on the midline going down |

**Ferris wheel boarding:** riders board at the **bottom**, so a model with t = 0 at boarding is

$$h(t) = -r\\cos\\left(\\frac{2\\pi}{T}t\\right) + c$$

where $r$ is the radius, $T$ is the time per revolution, and $c$ is the height of the center.

## Interpreting a Given Model

Most ACT questions about a printed model ask one of these:

| Question | How to answer |
|---|---|
| Maximum or minimum value | $D \\pm \\lvert A\\rvert$ |
| Average value | $D$ |
| Time for one cycle | $\\frac{2\\pi}{B}$ |
| Value at a specific time | Substitute t; the input often becomes a unit-circle angle such as $\\frac{\\pi}{2}$ or $\\frac{2\\pi}{3}$ |
| First time the maximum occurs | Set the inside equal to $\\frac{\\pi}{2}$ (sine) or 0, $2\\pi$ (cosine), adjusting for a negative A |

**Evaluating:** for $d(t) = 3\\cos\\left(\\frac{\\pi}{6}t\\right) + 8$ at $t = 4$, the inside is $\\frac{4\\pi}{6} = \\frac{2\\pi}{3}$, and $\\cos\\frac{2\\pi}{3} = -\\frac{1}{2}$ (Quadrant II), so $d(4) = 3\\left(-\\frac{1}{2}\\right) + 8 = 6.5$. This is where Part 3's unit circle pays off.

**Quarter-cycle landmarks:** in one period, a sinusoid moves through max, midline, min, midline, max in equal quarter-period steps. On a Ferris wheel with an 8-minute revolution, a rider who boards at the bottom is level with the center after 2 minutes, at the top after 4 minutes, level with the center again after 6, and back at the bottom after 8.

## Models with a Horizontal Shift

Sometimes the cycle does not start at t = 0. A model like

$$T(m) = 20\\sin\\left(\\frac{\\pi}{6}(m - 4)\\right) + 55$$

for monthly temperature has a 12-month period and a shift of 4 months: the temperature crosses its average of 55 going up at m = 4, peaks a quarter-period (3 months) later at m = 7 with 75, crosses the average going down at m = 10, and bottoms out at 35 at m = 13, which is m = 1 of the next year.
      `
    },
    {
      id: 'act-t6-worked',
      type: 'text' as const,
      content: `
## Worked Examples

<details>
<summary><b>Example 1: Build a Ferris wheel model from a description</b></summary>

**Question:** A Ferris wheel is 60 feet in diameter, its lowest point is 4 feet above the ground, and it makes one revolution every 8 minutes. A rider boards at the lowest point at t = 0. Write h(t), the rider's height in feet after t minutes, and find the height at t = 2 and t = 4.

**Solution:**
1. Radius $r = 30$; center $c = 4 + 30 = 34$; $B = \\frac{2\\pi}{8} = \\frac{\\pi}{4}$.
2. Starting at the minimum → negative cosine: $h(t) = -30\\cos\\left(\\frac{\\pi}{4}t\\right) + 34$.
3. $h(2) = -30\\cos\\frac{\\pi}{2} + 34 = 0 + 34 = 34$ feet (a quarter turn: level with the center).
4. $h(4) = -30\\cos\\pi + 34 = 30 + 34 = 64$ feet (the top). ✓
</details>

<details>
<summary><b>Example 2: Build a tide model</b></summary>

**Question:** At a dock, high tide of 11 feet occurs at midnight and the next low tide, 3 feet, occurs at 6 a.m. Write the depth d(t), t hours after midnight, and find the depth at 2 a.m.

**Solution:**
1. $A = \\frac{11 - 3}{2} = 4$, $D = \\frac{11 + 3}{2} = 7$.
2. High to low is half a cycle: period $= 12$ hours, so $B = \\frac{2\\pi}{12} = \\frac{\\pi}{6}$.
3. Maximum at t = 0 → cosine: $d(t) = 4\\cos\\left(\\frac{\\pi}{6}t\\right) + 7$.
4. $d(2) = 4\\cos\\frac{\\pi}{3} + 7 = 4\\left(\\frac{1}{2}\\right) + 7 = 9$ feet. The next high tide is at noon. ✓
</details>

<details>
<summary><b>Example 3: Interpret a shifted model</b></summary>

**Question:** A city's average monthly temperature, in °F, is modeled by $T(m) = 20\\sin\\left(\\frac{\\pi}{6}(m - 4)\\right) + 55$, where m = 1 is January. In which month is it hottest, and what is that temperature?

**Solution:** Sine peaks when its input is $\\frac{\\pi}{2}$: $\\frac{\\pi}{6}(m - 4) = \\frac{\\pi}{2} \\implies m - 4 = 3 \\implies m = 7$ (July). The maximum is $55 + 20 = 75$°F. ✓
</details>
      `
    },
    {
      id: 'act-t6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check: Interpret the Model** 🎯

Questions 1 and 2 use $h(t) = 18\\sin\\left(\\frac{\\pi}{15}t\\right) + 22$, the height in feet of a point on a waterwheel t seconds after it is first observed.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the greatest height, in feet, that the point reaches?',
            options: ['22', '18', '40', '30'],
            correctAnswer: 2,
            explanation: 'Maximum = D + |A| = 22 + 18 = 40 feet. 22 is the height of the wheel\'s center (the midline), 18 is the radius (the amplitude), and 30 is the period of the motion in seconds, which is not a height.'
          },
          {
            question: 'How many seconds does the wheel take to complete one full rotation?',
            options: ['30', '15', '60', '22'],
            correctAnswer: 0,
            explanation: 'One rotation is one period: 2π ÷ (π/15) = 30 seconds. 15 only reads the denominator of B, 60 doubles the period, and 22 is the midline height in feet.'
          },
          {
            question: 'At a harbor, the water is 9 feet deep at high tide and 1 foot deep at low tide. In a sinusoidal model of the depth, what are the amplitude and the midline?',
            options: ['Amplitude 8, midline y = 5', 'Amplitude 4, midline y = 4', 'Amplitude 4, midline y = 5', 'Amplitude 5, midline y = 4'],
            correctAnswer: 2,
            explanation: 'Amplitude = (9 − 1)/2 = 4 and midline = (9 + 1)/2 = 5. An amplitude of 8 uses the full high-to-low distance, a midline of 4 confuses the midline with the amplitude, and the last choice swaps the two values.'
          },
          {
            question: 'The tides at a beach have a period of 12.6 hours. If high tide occurs at 3:00 a.m., how many hours later does the next low tide occur?',
            options: ['12.6', '3.15', '25.2', '6.3'],
            correctAnswer: 3,
            explanation: 'High tide to the next low tide is half a period: 12.6 ÷ 2 = 6.3 hours. 12.6 hours is the time to the next high tide, 3.15 hours is a quarter period (high tide to mean water level), and 25.2 hours is two full periods.'
          }
        ]
      }
    },
    {
      id: 'act-t6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Match the Starting Point to the Model** 🔍

Assume A > 0 and B > 0. Choose the form that matches each situation at t = 0.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The tide is at its highest point when t = 0.',
            options: ['A sin(Bt) + D', '−A sin(Bt) + D', 'A cos(Bt) + D', '−A cos(Bt) + D']
          },
          {
            label: 'A Ferris wheel rider boards at the bottom when t = 0.',
            options: ['A sin(Bt) + D', '−A sin(Bt) + D', 'A cos(Bt) + D', '−A cos(Bt) + D']
          },
          {
            label: 'A rider is level with the center and rising when t = 0.',
            options: ['A sin(Bt) + D', '−A sin(Bt) + D', 'A cos(Bt) + D', '−A cos(Bt) + D']
          },
          {
            label: 'The water is at its average level and falling when t = 0.',
            options: ['A sin(Bt) + D', '−A sin(Bt) + D', 'A cos(Bt) + D', '−A cos(Bt) + D']
          }
        ],
        correctAnswers: ['A cos(Bt) + D', '−A cos(Bt) + D', 'A sin(Bt) + D', '−A sin(Bt) + D'],
        hint1: 'Which parent function starts at its maximum?',
        hint2: 'Flip the function that starts at a maximum.',
        hint3: 'Which parent function starts on the midline going up?',
        explanation: 'Cosine starts at a max, so a max at t = 0 is A cos and a min is −A cos. Sine starts on the midline rising, so rising is A sin and falling is −A sin.'
      }
    },
    {
      id: 'act-t6-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice

<details>
<summary><b>Try it: A Ferris wheel has a diameter of 50 feet, its center is 30 feet above the ground, and it turns once every 4 minutes. A rider is level with the center and rising at t = 0. Write the model.</b></summary>

Amplitude 25 (the radius), midline 30, $B = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$, midline rising → sine: $h(t) = 25\\sin\\left(\\frac{\\pi}{2}t\\right) + 30$.
</details>

<details>
<summary><b>Try it: Water depth at a dock is d(t) = 4 cos(πt/6) + 10 meters, t hours after midnight. What is the minimum depth, and when does it first occur?</b></summary>

Minimum $= 10 - 4 = 6$ meters. Cosine is at its minimum when its input is π: $\\frac{\\pi}{6}t = \\pi \\implies t = 6$, so 6 a.m.
</details>

**ACT Tip:** Before computing anything, write down three numbers from the story: the **middle** value, the **distance from the middle to the top**, and the **time for one cycle**. Those are D, A, and the period, and they answer most modeling questions.
      `
    },
    {
      id: 'act-t6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A Ferris wheel has a diameter of 40 feet and its center is 25 feet above the ground. It completes one revolution every 6 minutes. A rider boards at the lowest point at t = 0. Which function gives the rider\'s height h, in feet, after t minutes?',
            options: [
              '$h(t) = 20\\cos\\left(\\frac{\\pi}{3}t\\right) + 25$',
              '$h(t) = -20\\cos(12\\pi t) + 25$',
              '$h(t) = -20\\cos\\left(\\frac{\\pi}{3}t\\right) + 5$',
              '$h(t) = -20\\cos\\left(\\frac{\\pi}{3}t\\right) + 25$'
            ],
            correctAnswer: 3,
            explanation: 'Radius 20, center 25, and B = 2π/6 = π/3. Starting at the bottom requires a negative cosine, which gives h(0) = −20 + 25 = 5 feet. The positive cosine starts the rider at the top (45 feet). 12π multiplies 2π by the period instead of dividing. The + 5 version uses the boarding height as the midline, but the midline is the center of the wheel, so that model would send the rider 15 feet below ground.'
          },
          {
            question: 'The depth of water at a pier, in feet, is $d(t) = 4\\cos\\left(\\frac{\\pi}{6}t\\right) + 11$, where t is hours after midnight. What is the depth at 4:00 a.m.?',
            options: ['13 feet', '9 feet', '11 feet', '15 feet'],
            correctAnswer: 1,
            explanation: 'The input is 4π/6 = 2π/3, and cos(2π/3) = −1/2 because 2π/3 is in Quadrant II. So d(4) = 4(−1/2) + 11 = 9 feet. 13 feet uses +1/2 and ignores the quadrant sign. 11 feet is the average depth, and 15 feet is the maximum, which occurs at midnight.'
          },
          {
            question: 'The average monthly temperature in a town, in °F, is modeled by $T(m) = 20\\sin\\left(\\frac{\\pi}{6}(m - 4)\\right) + 55$, where m = 1 is January. In which month does the temperature return to its average value while decreasing?',
            options: ['Month 4', 'Month 10', 'Month 7', 'Month 1'],
            correctAnswer: 1,
            explanation: 'Sine crosses its midline going down when its input is π: (π/6)(m − 4) = π gives m − 4 = 6, so m = 10. Month 4 is where the temperature crosses its average going up (input 0), month 7 is the maximum (input π/2), and month 1 is the minimum (input 3π/2, at m = 13, which is January of the next year).'
          },
          {
            question: 'A rider\'s height, in feet, is $h(t) = -30\\cos\\left(\\frac{\\pi}{4}t\\right) + 34$, where t is minutes after boarding. How many minutes after boarding does the rider first reach the top of the wheel?',
            options: ['2', '4', '8', '6'],
            correctAnswer: 1,
            explanation: 'The top is where −30 cos(πt/4) is largest, which happens when cos(πt/4) = −1, that is, πt/4 = π, so t = 4: half of the 8-minute revolution. At t = 2 and t = 6 the rider is level with the center, and at t = 8 the rider is back at the bottom.'
          }
        ]
      }
    },
    {
      id: 'act-t6-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Amplitude** = half of (max − min) = the radius of a wheel; **midline** = average = the center height; **period** = time for one cycle.
- **Diameter → halve it.** Lowest point given → center = lowest point + radius.
- **High to next low is half a period.** Then $B = \\frac{2\\pi}{\\text{period}}$.
- **Starting point decides the form:** max → $A\\cos$, min → $-A\\cos$, midline rising → $A\\sin$, midline falling → $-A\\sin$.
- **Boarding a Ferris wheel at the bottom:** $h(t) = -r\\cos\\left(\\frac{2\\pi}{T}t\\right) + c$.
- **Evaluate** by substituting t and using unit-circle values with the correct quadrant sign.
- **Units check:** heights and depths are outputs; periods are times.
      `
    }
  ]
}
