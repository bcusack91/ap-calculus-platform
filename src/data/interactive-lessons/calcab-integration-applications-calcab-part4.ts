export const calcabIntAppsPart4Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia4-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 4 of 7 — Accumulation in Applied Contexts**

### The Accumulation Equation

$$\\boxed{A(t) = A(t_0) + \\int_{t_0}^{t} A'(s)\\,ds}$$

Amount now = amount at the start + net change. When something flows in and out:

$$A(t) = A(0) + \\int_0^t \\left[R_{\\text{in}}(s) - R_{\\text{out}}(s)\\right] ds$$

### Units of an Integral

The integral of a rate has units of (rate units) $\\times$ (time units):

| Rate | Time | $\\int$ rate $dt$ is in |
|:---:|:---:|:---:|
| gallons per hour | hours | gallons |
| people per minute | minutes | people |
| tons per day | days | tons |

### Interpreting an Integral in Context

Name **the quantity, the units, and the time interval**, not "the area":

> "$\\int_2^5 R(t)\\,dt = 40$ means that 40 gallons of water entered the tank from $t = 2$ to $t = 5$ hours."

### Increasing or Decreasing at $t = c$?

Check the sign of the **net rate** $A'(c) = R_{\\text{in}}(c) - R_{\\text{out}}(c)$. Positive means the amount is increasing at that instant.`
    },
    {
      id: 'ia4-worked',
      type: 'text' as const,
      content: `### Maximum or Minimum Amount: the Candidates Test

1. Find the times where the net rate $R_{\\text{in}} - R_{\\text{out}}$ changes sign.
2. Compute the amount at those times and at both endpoints.
3. The largest value is the absolute maximum; the smallest is the absolute minimum.

### Worked Example

For $0 \\le t \\le 6$ hours, water flows into a tank at $8$ gallons per hour and drains at $D(t) = 2t$ gallons per hour. The tank holds $20$ gallons at $t = 0$.

**(a) Is the amount of water increasing at $t = 3$?** $A'(3) = 8 - 2(3) = 2 > 0$, so yes.

**(b) When is the amount greatest?** $A'(t) = 8 - 2t$ is positive for $t < 4$ and negative for $t > 4$. Candidates:

| $t$ | $A(t) = 20 + \\int_0^t (8 - 2s)\\,ds = 20 + 8t - t^2$ |
|:---:|:---:|
| $0$ | $20$ |
| $4$ | $36$ |
| $6$ | $32$ |

The amount is greatest at $t = 4$ hours: 36 gallons. (The least is 20 gallons, at $t = 0$.)

**(c) Interpret $\\int_0^6 D(t)\\,dt = 36$.** 36 gallons of water drained out of the tank during the first 6 hours.

> **AP Tip:** A justification for a maximum amount names the candidates and compares them, or says the net rate changes from positive to negative at the only critical time on the interval.`
    },
    {
      id: 'ia4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Accumulation in Context** 🎯',
      exercise: {
        questions: [
          {
            question: 'Oil leaks from a tank at $r(t)$ gallons per hour, with $t$ in hours. What does $\\int_0^3 r(t)\\,dt = 12$ mean?',
            options: ['12 gallons leaked out during the first 3 hours', 'Oil was leaking at 12 gallons per hour at $t = 3$', 'The tank held 12 gallons of oil at $t = 3$', 'Oil leaked at an average of 12 gallons per hour'],
            correctAnswer: 0,
            explanation: 'The integral of a leak rate is the amount leaked from $t = 0$ to $t = 3$. It is not a rate at one instant, it is not the amount left in the tank, and the average leak rate would be $\\frac{12}{3} = 4$ gallons per hour.'
          },
          {
            question: 'People enter a park at $E(t)$ and leave at $L(t)$ people per hour. There are 300 people in the park at $t = 0$. Which expression gives the number of people in the park at $t = 4$?',
            options: ['$300 + \\int_0^4 [E(t) - L(t)]\\,dt$', '$\\int_0^4 [E(t) - L(t)]\\,dt$', '$300 + E(4) - L(4)$', '$300 + \\int_0^4 [L(t) - E(t)]\\,dt$'],
            correctAnswer: 0,
            explanation: 'Start with the 300 people and add the net change, in minus out. Leaving out 300 gives only the change, $E(4) - L(4)$ is a rate at one instant, and $L - E$ has the sign reversed.'
          },
          {
            question: 'A reservoir’s volume changes at $V\'(t) = 9 - t^2$ million gallons per day for $0 \\le t \\le 5$. At what time is the volume greatest?',
            options: ['$t = 3$', '$t = 0$', '$t = 5$', '$t = \\sqrt{3}$'],
            correctAnswer: 0,
            explanation: '$V\'(t) > 0$ for $t < 3$ and $V\'(t) < 0$ for $t > 3$, so $V$ rises and then falls: $t = 3$, the only critical time, gives the maximum. The volume at $t = 5$ is lower, because $\\int_3^5 (9 - t^2)\\,dt = -\\frac{44}{3} < 0$, and $t = \\sqrt{3}$ does not make $V\'$ zero.'
          }
        ]
      }
    },
    {
      id: 'ia4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Units and justifications.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$R(t)$ is in liters per minute and $t$ is in minutes. The units of $\\int_0^{10} R(t)\\,dt$ are:',
            options: ['liters', 'liters per minute', 'liters per minute per minute', 'minutes'],
            correctAnswers: ['liters'],
            hints: ['(liters per minute) times (minutes).'],
            explanation: 'Multiplying a rate in liters per minute by a time in minutes leaves liters.'
          },
          {
            label: 'Water enters at $8$ gal/hr and leaves at $2t$ gal/hr. At $t = 5$, the amount of water is:',
            options: ['Decreasing, since $8 - 2(5) < 0$', 'Increasing, since $8 > 0$', 'Decreasing, since $2t$ is increasing', 'Increasing, since water is still in the tank'],
            correctAnswers: ['Decreasing, since $8 - 2(5) < 0$'],
            hints: ['Look at the sign of in minus out at $t = 5$.'],
            explanation: 'The net rate at $t = 5$ is $8 - 10 = -2$ gallons per hour, so the amount is decreasing at that instant. Only the sign of the net rate decides it.'
          },
          {
            label: 'To find the absolute maximum amount on $[0, 6]$, compare the amount at:',
            options: ['$t = 0$, $t = 6$, and where the net rate changes sign', 'Only the times where the net rate equals zero', 'Only the endpoints $t = 0$ and $t = 6$', 'The time where the inflow rate is largest'],
            correctAnswers: ['$t = 0$, $t = 6$, and where the net rate changes sign'],
            hints: ['An absolute maximum on a closed interval can be at an endpoint or at a critical time.'],
            explanation: 'The Candidates Test checks the endpoints and every time where $A\'$ changes sign. The largest inflow rate is not where the amount is largest; the amount keeps growing as long as in exceeds out.'
          }
        ]
      }
    },
    {
      id: 'ia4-input',
      type: 'input-box' as const,
      content: '**Find an amount.** ✍️',
      exercise: {
        question: 'Using the worked example (20 gallons at $t = 0$, water in at 8 gallons per hour, out at $2t$ gallons per hour), how many gallons are in the tank at $t = 5$?',
        correctAnswer: '35',
        acceptableAnswers: ['35'],
        hints: [
          '$A(5) = 20 + \\int_0^5 (8 - 2t)\\,dt$.',
          '$\\int_0^5 (8 - 2t)\\,dt = 40 - 25$.'
        ],
        explanation: '$A(5) = 20 + (40 - 25) = 35$ gallons.'
      }
    },
    {
      id: 'ia4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Question | Method |
|:---:|:---:|
| Amount at time $t$ | Starting amount $+ \\int$ (in $-$ out) |
| Increasing at $t = c$? | Sign of in $-$ out at $c$ |
| Max or min amount | Candidates: endpoints and sign changes of the net rate |
| Meaning of $\\int_a^b R(t)\\,dt$ | Quantity, units, and the interval $a$ to $b$ |

> **Up Next:** Part 5 — Rate Problems & Net Change.`
    }
  ]
};
