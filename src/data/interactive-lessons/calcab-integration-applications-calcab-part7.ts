export const calcabIntAppsPart7Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia7-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 7 of 7 — Final Assessment**

### Formula Reference (no formula sheet is provided on the exam)

| Application | Formula |
|:---:|:---:|
| Average value | $\\frac{1}{b-a}\\int_a^b f(x)\\,dx$ |
| Position | $x(b) = x(a) + \\int_a^b v(t)\\,dt$ |
| Velocity | $v(b) = v(a) + \\int_a^b a(t)\\,dt$ |
| Displacement | $\\int_a^b v(t)\\,dt$ |
| Total distance | $\\int_a^b \\lvert v(t)\\rvert\\,dt$ |
| Amount from a rate | $A(b) = A(a) + \\int_a^b A'(t)\\,dt$ |

### Top AP Mistakes

| Mistake | Correction |
|:---:|:---:|
| Using $\\frac{f(b)-f(a)}{b-a}$ for "average value" | Average value needs $\\frac{1}{b-a}\\int_a^b f$ |
| Forgetting to divide by $b - a$ | An average value has the units of $f$ |
| Giving displacement when asked for distance | Distance integrates $\\lvert v\\rvert$ |
| Leaving out the starting amount or position | Amount $=$ start $+$ net change |
| Checking only critical times for a max/min | Include the endpoints (Candidates Test) |
| Interpreting an integral as "the area" | Name the quantity, units, and interval |`
    },
    {
      id: 'ia7-quiz1',
      type: 'multiple-choice' as const,
      content: '**Quiz — Average Value and Motion** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is the average value of $f(x) = x^3$ on $[0, 2]$?',
            options: ['$2$', '$4$', '$1$', '$8$'],
            correctAnswer: 0,
            explanation: '$\\frac{1}{2}\\int_0^2 x^3\\,dx = \\frac{1}{2}\\cdot\\frac{16}{4} = 2$. The integral alone (and the average rate of change, $\\frac{8 - 0}{2}$) is $4$, $1$ is the midpoint value $f(1)$, and $8$ is $f(2)$.'
          },
          {
            question: 'A particle has velocity $v(t) = 3 - t$ meters per second. What total distance does it travel on $[0, 6]$?',
            options: ['$9$ m', '$0$ m', '$4.5$ m', '$18$ m'],
            correctAnswer: 0,
            explanation: '$v = 0$ at $t = 3$. $\\int_0^3 (3 - t)\\,dt = 4.5$ and $\\int_3^6 (3 - t)\\,dt = -4.5$, so the distance is $9$ m. The displacement is $0$, $4.5$ is one leg, and $18$ multiplies the starting speed, 3 m/s, by the 6 seconds as if the speed never changed.'
          },
          {
            question: 'A particle has acceleration $a(t) = 12t$ and $v(1) = 2$. What is $v(2)$?',
            options: ['$20$', '$18$', '$24$', '$26$'],
            correctAnswer: 0,
            explanation: '$v(2) = v(1) + \\int_1^2 12t\\,dt = 2 + 6(4 - 1) = 20$. $18$ is the change alone, $24$ is $a(2)$, and $26$ adds $a(2)$ to $v(1)$.'
          }
        ]
      }
    },
    {
      id: 'ia7-quiz2',
      type: 'multiple-choice' as const,
      content: '**Quiz — Accumulation in Context** 🎯',
      exercise: {
        questions: [
          {
            question: 'Cars pass a checkpoint at rate $r(t)$ cars per hour, with $t$ in hours. What does $\\int_0^3 r(t)\\,dt = 42$ mean?',
            options: ['42 cars passed in the first 3 hours', 'The rate at $t = 3$ was 42 cars per hour', 'Cars passed at an average of 42 per hour', '42 cars were waiting at the checkpoint at $t = 3$'],
            correctAnswer: 0,
            explanation: 'The integral of a rate is the total amount: 42 cars passed from $t=0$ to $t=3$. It is not the rate at one instant, and the average rate would be $42/3 = 14$ cars per hour.'
          },
          {
            question: 'Sand is added to a pile at $S(t)$ tons per hour and removed at a constant 5 tons per hour. If $S(2) = 7$, then at $t = 2$ the amount of sand is:',
            options: ['Increasing at 2 tons per hour', 'Decreasing at 2 tons per hour', 'Increasing at 7 tons per hour', 'Equal to 2 tons'],
            correctAnswer: 0,
            explanation: 'The net rate is $S(2) - 5 = 7 - 5 = 2$ tons per hour, which is positive, so the pile is growing at 2 tons per hour. 7 tons per hour ignores the removal, and the net rate does not tell you the amount itself.'
          },
          {
            question: 'A store has 20 shoppers at $t = 0$. Shoppers enter at $E(t)$ and leave at $L(t)$ people per hour, with $\\int_0^2 E(t)\\,dt = 90$ and $\\int_0^2 L(t)\\,dt = 65$. How many shoppers are in the store at $t = 2$?',
            options: ['$45$', '$25$', '$110$', '$175$'],
            correctAnswer: 0,
            explanation: '$20 + 90 - 65 = 45$. $25$ leaves out the 20 shoppers at the start, $110$ ignores the people who left, and $175$ adds them instead of subtracting.'
          }
        ]
      }
    },
    {
      id: 'ia7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Final check.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: 'The average value of $g$ on $[1, 5]$ is $7$. Then $\\int_1^5 g(x)\\,dx$ is:',
            options: ['$28$', '$7$', '$\\frac{7}{4}$', '$35$'],
            correctAnswers: ['$28$'],
            hints: ['Multiply the average value by the length of the interval.'],
            explanation: '$\\int_1^5 g(x)\\,dx = (5 - 1)\\cdot 7 = 28$. $35$ multiplies by the right endpoint instead of the length.'
          },
          {
            label: 'A particle is at $x = 3$ at $t = 0$. Its velocity graph has signed area $-5$ on $[0, 4]$. Then $x(4)$ is:',
            options: ['$-2$', '$8$', '$-5$', '$5$'],
            correctAnswers: ['$-2$'],
            hints: ['Signed area under the velocity graph is displacement.'],
            explanation: '$x(4) = 3 + (-5) = -2$.'
          },
          {
            label: '"Is the amount of water increasing at $t = 4$?" The justification uses:',
            options: ['The sign of $R_{\\text{in}}(4) - R_{\\text{out}}(4)$', 'The value of $\\int_0^4 [R_{\\text{in}} - R_{\\text{out}}]\\,dt$', 'Whether $R_{\\text{in}}$ is increasing at $t = 4$', 'The amount of water in the tank at $t = 4$'],
            correctAnswers: ['The sign of $R_{\\text{in}}(4) - R_{\\text{out}}(4)$'],
            hints: ['The derivative of the amount is in minus out.'],
            explanation: 'The amount $A$ has $A\'(4) = R_{\\text{in}}(4) - R_{\\text{out}}(4)$; its sign decides increasing or decreasing at that instant. The integral gives the net change so far, not the current direction.'
          }
        ]
      }
    },
    {
      id: 'ia7-input',
      type: 'input-box' as const,
      content: '**Final Challenge** ✍️',
      exercise: {
        question: 'The temperature of a liquid changes at $T\'(t) = 6 - 2t$ degrees Celsius per minute, and $T(0) = 20$. What is the average temperature of the liquid over the first 3 minutes?',
        correctAnswer: '26',
        acceptableAnswers: ['26'],
        hints: [
          'First find $T(t) = 20 + \\int_0^t (6 - 2s)\\,ds = 20 + 6t - t^2$.',
          'Average value: $\\frac{1}{3}\\int_0^3 (20 + 6t - t^2)\\,dt$.',
          '$\\int_0^3 (20 + 6t - t^2)\\,dt = 60 + 27 - 9 = 78$.'
        ],
        explanation: '$T(t) = 20 + 6t - t^2$, so the average temperature is $\\frac{1}{3}\\left[20t + 3t^2 - \\frac{t^3}{3}\\right]_0^3 = \\frac{78}{3} = 26$ degrees Celsius.'
      }
    },
    {
      id: 'ia7-summary',
      type: 'text' as const,
      content: `### Integration Applications — Complete!

| Part | Topic |
|:---:|:---:|
| 1 | Average value of a function |
| 2 | Position, velocity, and displacement |
| 3 | Total distance and speed |
| 4 | Accumulation in applied contexts |
| 5 | Rate problems and net change |
| 6 | Practice workshop |
| 7 | Final assessment |

> **Next in Unit 8:** Area Between Curves, then Volumes of Revolution.`
    }
  ]
};
