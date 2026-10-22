export const calcabIntAppsPart6Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia6-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 6 of 7 — Practice Workshop**

### Which Integral Does the Question Want?

| The question says | Use |
|:---:|:---:|
| "average value of $f$" | $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$ |
| "average rate of change of $f$" | $\\frac{f(b)-f(a)}{b-a}$ |
| "position at $t = b$" | $x(a) + \\int_a^b v(t)\\,dt$ |
| "displacement" | $\\int_a^b v(t)\\,dt$ |
| "total distance" | $\\int_a^b \\lvert v(t)\\rvert\\,dt$ |
| "amount at time $t$" | $A(0) + \\int_0^t (\\text{in} - \\text{out})\\,ds$ |
| "maximum / minimum amount" | Candidates: endpoints and sign changes of the net rate |
| "explain the meaning of $\\int_a^b R(t)\\,dt$" | Quantity, units, and interval |

> **Key Fact:** Decide what the integral measures before you compute it. Most lost points in these problems come from answering a different question than the one asked.`
    },
    {
      id: 'ia6-worked',
      type: 'text' as const,
      content: `### AP-Style Worked Problem

For $0 \\le t \\le 8$ hours, rain flows into a storage tank at $R(t) = 10 + 3t$ cubic feet per hour, and a pump removes water at a constant $16$ cubic feet per hour. The tank holds $30$ cubic feet at $t = 0$.

**(a) How much rain enters the tank from $t = 0$ to $t = 4$?**

$$\\int_0^4 (10 + 3t)\\,dt = \\left[10t + \\frac{3t^2}{2}\\right]_0^4 = 40 + 24 = 64 \\text{ cubic feet}$$

**(b) Is the amount of water increasing or decreasing at $t = 1$? Explain.**

$R(1) - 16 = 13 - 16 = -3 < 0$, so the amount is decreasing at $t = 1$.

**(c) Find the minimum amount of water in the tank on $[0, 8]$. Justify.**

The net rate $R(t) - 16 = 3t - 6$ changes from negative to positive at $t = 2$. Candidates, with $A(t) = 30 + \\int_0^t (3s - 6)\\,ds$:

| $t$ | $A(t)$ |
|:---:|:---:|
| $0$ | $30$ |
| $2$ | $30 + (6 - 12) = 24$ |
| $8$ | $30 + (96 - 48) = 78$ |

The minimum is 24 cubic feet, at $t = 2$ hours.

**(d) Find the average rate at which rain enters the tank over $[0, 8]$.**

$$\\frac{1}{8}\\int_0^8 (10 + 3t)\\,dt = \\frac{1}{8}(80 + 96) = 22 \\text{ cubic feet per hour}$$

> **AP Tip:** On the real exam this kind of problem is usually calculator-active, with rates you cannot integrate by hand. The setups are exactly the same; only the arithmetic moves to the calculator.`
    },
    {
      id: 'ia6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mixed Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'A particle has velocity $v(t) = 6 - 2t$ feet per second. What is its average velocity on $[0, 5]$?',
            options: ['$1$ ft/s', '$5$ ft/s', '$-2$ ft/s', '$\\frac{13}{5}$ ft/s'],
            correctAnswer: 0,
            explanation: 'Average velocity $= \\frac{1}{5}\\int_0^5 (6 - 2t)\\,dt = \\frac{30 - 25}{5} = 1$ ft/s. $5$ forgets to divide, $-2$ is the average acceleration $\\frac{v(5) - v(0)}{5}$, and $\\frac{13}{5}$ divides the total distance (9 + 4 = 13 feet) instead of the displacement.'
          },
          {
            question: 'Bacteria grow at $B\'(t) = 40e^{0.5t}$ bacteria per hour, and $B(0) = 100$. How many bacteria are there at $t = 2$?',
            options: ['$80e + 20$', '$80(e - 1)$', '$40e + 60$', '$100 + 40e$'],
            correctAnswer: 0,
            explanation: '$B(2) = 100 + \\int_0^2 40e^{0.5t}\\,dt = 100 + 80(e - 1) = 80e + 20$. $80(e - 1)$ is only the growth, $40e + 60$ drops the factor $\\frac{1}{0.5} = 2$ from the antiderivative, and $100 + 40e$ adds the rate $B\'(2) = 40e$ instead of integrating it.'
          },
          {
            question: '$T(t)$ is a temperature in °F, with $t$ in hours, and $\\int_0^{24} T(t)\\,dt = 1560$. Which quantity equals $65$?',
            options: ['The average temperature over the 24 hours', 'The temperature at $t = 12$ hours', 'The change in temperature over 24 hours', 'The average rate of change of the temperature'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{24}\\int_0^{24} T(t)\\,dt = \\frac{1560}{24} = 65$ °F, the average value of $T$. It is not the value at the midpoint, and changes in temperature come from $T(24) - T(0)$, which the integral of $T$ does not give.'
          }
        ]
      }
    },
    {
      id: 'ia6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Choose the right setup.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: '$v(t) < 0$ on $(0, 2)$ and $v(t) > 0$ on $(2, 6)$. The total distance on $[0, 6]$ is:',
            options: ['$-\\int_0^2 v\\,dt + \\int_2^6 v\\,dt$', '$\\int_0^6 v\\,dt$', '$\\int_0^2 v\\,dt + \\int_2^6 v\\,dt$', '$\\left\\lvert\\int_0^6 v\\,dt\\right\\rvert$'],
            correctAnswers: ['$-\\int_0^2 v\\,dt + \\int_2^6 v\\,dt$'],
            hints: ['On $(0, 2)$ the integral is negative; distance needs it positive.'],
            explanation: 'On $(0, 2)$, $\\lvert v\\rvert = -v$, so that piece is $-\\int_0^2 v\\,dt$. The other choices give the displacement or its size.'
          },
          {
            label: 'An amount satisfies $A\'(t) = R(t) - D(t)$. $A$ has a relative maximum at a time when:',
            options: ['$R - D$ changes from positive to negative', '$R - D$ changes from negative to positive', '$R(t)$ reaches its own maximum value', '$D(t)$ equals zero'],
            correctAnswers: ['$R - D$ changes from positive to negative'],
            hints: ['$A$ increases while $A\' > 0$ and decreases while $A\' < 0$.'],
            explanation: 'When $A\' = R - D$ goes from positive to negative, $A$ stops rising and starts falling: a relative maximum. The opposite sign change gives a relative minimum.'
          },
          {
            label: '$R(t)$ is in cars per minute. "$\\frac{1}{4}\\int_0^4 R(t)\\,dt = 9$" means:',
            options: ['Over $[0, 4]$ the average rate was 9 cars per minute', 'Exactly 9 cars passed in the first 4 minutes', 'The rate was 9 cars per minute at $t = 4$', 'The rate grew by 9 cars per minute over $[0, 4]$'],
            correctAnswers: ['Over $[0, 4]$ the average rate was 9 cars per minute'],
            hints: ['Dividing an integral by the interval length gives an average value.'],
            explanation: 'This is the average value of $R$ on $[0, 4]$: 9 cars per minute. The number of cars that passed is $\\int_0^4 R(t)\\,dt = 36$.'
          }
        ]
      }
    },
    {
      id: 'ia6-input',
      type: 'input-box' as const,
      content: '**Minimum amount.** ✍️',
      exercise: {
        question: 'Water enters a tank at $R(t) = 4t$ gallons per minute and leaves at a constant 12 gallons per minute. At $t = 0$ the tank holds 50 gallons. What is the minimum amount of water in the tank for $0 \\le t \\le 6$?',
        correctAnswer: '32',
        acceptableAnswers: ['32'],
        hints: [
          'The net rate $4t - 12$ changes sign at $t = 3$.',
          '$A(3) = 50 + \\int_0^3 (4t - 12)\\,dt$.',
          'Compare $A(0)$, $A(3)$ and $A(6)$.'
        ],
        explanation: '$A(t) = 50 + 2t^2 - 12t$. Candidates: $A(0) = 50$, $A(3) = 50 + 18 - 36 = 32$, $A(6) = 50 + 72 - 72 = 50$. The minimum is 32 gallons, at $t = 3$.'
      }
    },
    {
      id: 'ia6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Problem type | Key setup |
|:---:|:---:|
| Average value | $\\frac{1}{b-a}\\int_a^b f$ |
| Position | $x(a) + \\int_a^b v$ |
| Total distance | $\\int_a^b \\lvert v\\rvert$ |
| Amount | Start $+ \\int$ (in $-$ out) |
| Max/min amount | Candidates Test |

> **Up Next:** Part 7 — Final Assessment.`
    }
  ]
};
