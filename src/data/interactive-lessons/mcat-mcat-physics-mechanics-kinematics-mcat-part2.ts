export const mcatMechKinPart2Data = {
  topicSlug: 'mcat-physics-mechanics-kinematics-mcat',
  sections: [
    {
      id: 'kin2-intro',
      type: 'text' as const,
      content: `# Kinematics: Describing Motion

**Part 2 of 4 — The Kinematic Equation Toolkit**

When acceleration is **constant**, five equations connect the variables $v_0$, $v$, $a$, $t$, and $\\Delta x$. Each equation is missing exactly one variable — pick the one missing the quantity you neither know nor want.

### The Big 5

| Equation | Missing variable |
|---|---|
| $v = v_0 + at$ | $\\Delta x$ |
| $\\Delta x = v_0 t + \\tfrac{1}{2}at^2$ | $v$ |
| $v^2 = v_0^2 + 2a\\Delta x$ | $t$ |
| $\\Delta x = \\tfrac{1}{2}(v_0 + v)t$ | $a$ |
| $\\Delta x = vt - \\tfrac{1}{2}at^2$ | $v_0$ |

**MCAT strategy:** the no-time equation $v^2 = v_0^2 + 2a\\Delta x$ is the single most used — MCAT problems love giving distances and hiding time.

### Free Fall (use $g = 10\\;\\text{m/s}^2$)

Free fall is just constant acceleration with $a = g = 10\\;\\text{m/s}^2$ downward.

**Sign convention:** pick one positive direction per problem and keep it. For an object dropped from rest, taking down as positive makes $a = +g$; for a throw upward, taking up as positive makes $a = -g$, so $v = v_0 - gt$.

- Dropped from rest (down positive): $v = gt$ and $\\Delta y = \\tfrac{1}{2}g t^2 = 5t^2$
- Speed grows by $10\\;\\text{m/s}$ every second: after $1, 2, 3\\;\\text{s}$ the speed is $10, 20, 30\\;\\text{m/s}$
- Distances fallen from rest: $5, 20, 45\\;\\text{m}$ after $1, 2, 3\\;\\text{s}$

### Symmetry of Vertical Throws

For a ball thrown straight up and caught at the same height:

- Time up $=$ time down: $t_{up} = \\frac{v_0}{g}$
- Max height: $H = \\frac{v_0^2}{2g}$
- It returns with the **same speed** it left with, pointing down
- At the top: $v = 0$ but $a = g$ (never zero)`
    },
    {
      id: 'kin2-worked',
      type: 'text' as const,
      content: `### Worked Example — A Vertical Throw

**Problem.** A ball is thrown straight up at $30\\;\\text{m/s}$ and caught at the same height. Use $g = 10\\;\\text{m/s}^2$.

- **(a)** How long does the ball take to reach the top?
- **(b)** What maximum height does it reach?
- **(c)** What is the total flight time, and how fast is the ball moving when it comes back down?

**(a) Time to the top.** Taking up as positive, $a = -g$: at the peak $v = 0$, so $v = v_0 - gt$ gives $0 = 30 - 10t \\Rightarrow t_{up} = 3\\;\\text{s}$.

**(b) Maximum height.** Use the no-time equation with $v = 0$ at the top:

$0 = (30)^2 - 2(10)H \\Rightarrow H = \\frac{900}{20} = 45\\;\\text{m}$

**(c) Flight time and return speed.** With $t_{up} = 3\\;\\text{s}$ from (a), symmetry gives $T = 2t_{up} = 6\\;\\text{s}$, and the ball returns moving $30\\;\\text{m/s}$ downward, its launch speed.

### Worked Example — Constant Acceleration from Rest

**Problem.** A sprinter accelerates from rest at $2\\;\\text{m/s}^2$ for $6\\;\\text{s}$.

- **(a)** How fast is the sprinter moving at the end of the $6\\;\\text{s}$?
- **(b)** How far does the sprinter travel?
- **(c)** Does the average-velocity equation give the same distance?

**(a) Final speed.** $v = v_0 + at = 0 + (2)(6) = 12\\;\\text{m/s}$

**(b) Distance.** $\\Delta x = v_0 t + \\tfrac{1}{2}at^2 = 0 + \\tfrac{1}{2}(2)(6)^2 = (1)(36) = 36\\;\\text{m}$

**(c) Check with the average velocity.** With $v = 12\\;\\text{m/s}$ from (a): $\\Delta x = \\tfrac{1}{2}(0 + 12)(6) = 36\\;\\text{m}$ ✓. Averaging initial and final velocity is often the fastest MCAT route when acceleration is constant.`
    },
    {
      id: 'kin2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Kinematic Equations** 🎯`,
      exercise: {
        questions: [
          {
            question: `A car accelerates uniformly from rest to $24\\;\\text{m/s}$ in $8\\;\\text{s}$. Its acceleration is:`,
            options: [`$192\\;\\text{m/s}^2$`, `$3\\;\\text{m/s}^2$`, `$0.33\\;\\text{m/s}^2$`, `$16\\;\\text{m/s}^2$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$a = \\Delta v / \\Delta t = 24/8 = 3\\;\\text{m/s}^2$. Multiplying ($24 \\times 8 = 192$) or inverting the ratio ($8/24$) are the standard traps, and 16 subtracts the time from the speed ($24 - 8$).`
          },
          {
            question: `An object with $v_0 = 5\\;\\text{m/s}$ accelerates at $2\\;\\text{m/s}^2$ for $4\\;\\text{s}$. The displacement is:`,
            options: [`20 m`, `52 m`, `16 m`, `36 m`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$\\Delta x = v_0 t + \\tfrac{1}{2}at^2 = (5)(4) + \\tfrac{1}{2}(2)(16) = 20 + 16 = 36$ m. Forgetting the $\\tfrac{1}{2}$ gives $20 + 32 = 52$; dropping the acceleration term gives 20, and dropping the $v_0 t$ term leaves only 16.`
          },
          {
            question: `A stone is dropped from a bridge $80\\;\\text{m}$ above the water ($g = 10\\;\\text{m/s}^2$). The fall takes:`,
            options: [`4 s`, `8 s`, `16 s`, `2 s`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$80 = \\tfrac{1}{2}(10)t^2 = 5t^2 \\Rightarrow t^2 = 16 \\Rightarrow t = 4$ s. Forgetting the square root gives 16 s; dividing the height by $g$ ($80/10$) gives 8 s, which is not a valid kinematic step; 2 s puts the 2 on the wrong side, using $t^2 = h/(2g) = 4$.`
          },
          {
            question: `An object with $v_0 = 10\\;\\text{m/s}$ accelerates at $3\\;\\text{m/s}^2$ over $50\\;\\text{m}$. Its final speed is:`,
            options: [`400 m/s`, `25 m/s`, `20 m/s`, `15 m/s`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$v^2 = v_0^2 + 2a\\Delta x = 100 + 2(3)(50) = 100 + 300 = 400$, so $v = \\sqrt{400} = 20$ m/s. Answering 400 forgets the square root. Treating the speed as constant gives $t = 50/10 = 5$ s, and then $v_0 + at = 10 + 15 = 25$ m/s, or $15$ m/s if $v_0$ is dropped too.`
          },
          {
            question: `A ball is thrown straight up at $40\\;\\text{m/s}$ ($g = 10\\;\\text{m/s}^2$). It returns to the thrower's hand after:`,
            options: [`4 s`, `8 s`, `20 s`, `80 s`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Time up $= v_0/g = 40/10 = 4$ s; by symmetry the total flight is $2(4) = 8$ s. Answering 4 s gives only the upward half; 20 s divides the speed by 2 instead of by $g$, and 80 s doubles the speed without dividing by $g$ at all.`
          }
        ]
      }
    },
    {
      id: 'kin2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Pick by the missing variable.** Use the Big 5 equation that lacks the quantity you neither know nor need.
- **The no-time equation.** $v^2 = v_0^2 + 2a\\Delta x$ is the workhorse when a problem gives distance and hides time.
- **Free fall from rest.** With $g = 10\\;\\text{m/s}^2$, speeds are $10, 20, 30\\;\\text{m/s}$ and drops $5, 20, 45\\;\\text{m}$ after $1, 2, 3\\;\\text{s}$.
- **Vertical-throw symmetry.** $t_{up} = v_0/g$ and $H = v_0^2/2g$, and the ball returns at its launch speed.

**Common traps**

- **Constant acceleration only.** The Big 5 hold only when acceleration is constant; otherwise read slopes and areas.
- **Dropping the ½.** In the sprinter example, losing the ½ turns $36\\;\\text{m}$ into $72\\;\\text{m}$.
- **Skipping the square root.** $v^2 = 400$ means $v = 20\\;\\text{m/s}$, and $t^2 = 16$ means $t = 4\\;\\text{s}$.
- **Half the flight.** $v_0/g$ is only the time up; a throw caught at launch height stays aloft for $2v_0/g$.`
    }
  ]
};
