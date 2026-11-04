export const mcatMechKinPart4Data = {
  topicSlug: 'mcat-physics-mechanics-kinematics-mcat',
  sections: [
    {
      id: 'kin4-intro',
      type: 'text' as const,
      content: `# Kinematics: Describing Motion

**Part 4 of 4 — MCAT Integration: Experiments, Estimation & Passage Strategy**

On the real exam, kinematics rarely arrives as a bare "plug into the Big 5" problem. It shows up inside **experimental passages** — reaction-time studies, motion-sensor traces, gait analysis — where the physics is easy but buried in data.

### How Kinematics Appears in Passages

- **Reaction-time experiments:** a ruler or light is dropped and the subject responds. Distance fallen from rest obeys $d = 5t^2$ (with $g = 10\\;\\text{m/s}^2$), so the fall distance is a clock: $t = \\sqrt{d/5}$.
- **Motion-sensor / video-frame data:** you get a table of position or velocity vs. time. Slope and area, not equations, answer these fastest.
- **Relative velocity:** velocities along one line simply add or subtract. A swimmer at $v_{swim}$ relative to the water in a current $v_{current}$ moves at $v_{swim} \\pm v_{current}$ relative to the shore.
- **Air resistance (qualitative only):** drag grows with speed. A falling object approaches **terminal velocity**, where drag balances weight, so $a = 0$ while $v$ is at its maximum — the exam loves this "zero acceleration, nonzero velocity" inversion of the apex fact from Part 2 of this lesson (vertical throws).

### Estimation Beats Algebra

The MCAT gives no calculator, so it gives clean numbers. Train these reflexes:

- $\\sqrt{0.04} = 0.2$, $\\sqrt{0.09} = 0.3$ — reaction times are fractions of a second
- Free-fall distances from rest: $5, 20, 45, 80\\;\\text{m}$ at $1, 2, 3, 4\\;\\text{s}$
- Round-trip time for a throw at $v_0$: $T = 2v_0/g = v_0/5$

**Answer-choice triage:** before computing, scan the options. If they differ by powers of ten, dimensional analysis or a one-digit estimate settles it. If two options are $x$ and $x^2$ (like $6$ and $36$), the test is checking whether you took the square root.`
    },
    {
      id: 'kin4-worked',
      type: 'text' as const,
      content: `### Worked Example — A Reaction-Time Passage

*Researchers measure driver reaction time with a drop test: a vertical ruler is released without warning, and the subject pinches it as fast as possible. The distance the ruler falls before capture is recorded, and trials for one subject are averaged when well rested and when sleep deprived.*

**Problem 1.** In the drop test, the ruler falls an average of $0.20\\;\\text{m}$ before the well-rested subject catches it and $0.45\\;\\text{m}$ when the same subject is sleep deprived ($g = 10\\;\\text{m/s}^2$).

- **(a)** What is the subject's reaction time when well rested?
- **(b)** What is the reaction time when sleep deprived?
- **(c)** By how much, and by what percentage, did the reaction time grow, and how does that compare with the growth in fall distance?

**(a) Rested trial.** The ruler falls from rest, so $d = \\tfrac{1}{2}gt^2 = 5t^2$:

$0.20 = 5t^2 \\Rightarrow t^2 = 0.04 \\Rightarrow t = 0.2\\;\\text{s}$

**(b) Sleep-deprived trial.** $0.45 = 5t^2 \\Rightarrow t^2 = 0.09 \\Rightarrow t = 0.3\\;\\text{s}$

**(c) Time vs. distance.** From $0.2\\;\\text{s}$ in (a) to $0.3\\;\\text{s}$ in (b), the reaction time grew by $0.1\\;\\text{s}$, or $50\\%$, while the fall distance grew $2.25$-fold. Since $d \\propto t^2$, passages ask for the time ratio hoping you give the distance ratio.

**Problem 2.** The same subject drives at highway speed, $30\\;\\text{m/s}$, and needs the extra $0.1\\;\\text{s}$ of reaction time found in Problem 1 when sleep deprived.

- **(a)** How much farther does the car travel before braking even begins?
- **(b)** Why can't $d = 5t^2$ give the car's extra distance?

**(a) Extra distance.** Before the response the car moves at constant velocity: $\\Delta x = (30)(0.1) = 3\\;\\text{m}$. Passages typically close the loop with exactly this kind of constant-velocity distance question.

**(b) Two phases of motion.** During the reaction time the driver has not yet braked, so the car's speed is constant and $\\Delta x = vt$. Free fall, $d = 5t^2$, describes only the ruler. Keep the phases separate — the same discipline as splitting projectile motion into $x$ and $y$.`
    },
    {
      id: 'kin4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Kinematics Integration & Passage Strategy** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a drop test, a meter stick falls $0.80\\;\\text{m}$ before the subject catches it ($g = 10\\;\\text{m/s}^2$). The subject's reaction time is:`,
            options: [`$0.16\\;\\text{s}$`, `$0.40\\;\\text{s}$`, `$0.80\\;\\text{s}$`, `$0.28\\;\\text{s}$`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `$0.80 = 5t^2 \\Rightarrow t^2 = 0.16 \\Rightarrow t = 0.40$ s. Choosing $0.16$ forgets the square root; $0.80$ just recycles the distance; $0.28$ drops the $\\tfrac{1}{2}$ ($0.80 = 10t^2$, so $t^2 = 0.08$).`
          },
          {
            question: `A motion sensor records a velocity that decreases linearly from $8\\;\\text{m/s}$ to $0$ over $4\\;\\text{s}$. The distance traveled during this interval is:`,
            options: [`$32\\;\\text{m}$`, `$8\\;\\text{m}$`, `$4\\;\\text{m}$`, `$16\\;\\text{m}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Distance is the area under the $v$-$t$ graph — here a triangle: $\\tfrac{1}{2}(8)(4) = 16$ m. Multiplying $8 \\times 4 = 32$ treats the motion as constant velocity; $8$ m reads the starting speed as a distance, and $4$ m reads the elapsed time as one.`
          },
          {
            question: `A swimmer swims upstream at $1.5\\;\\text{m/s}$ relative to the water; the current flows at $2\\;\\text{m/s}$. Relative to the riverbank, the swimmer moves:`,
            options: [`$0.5\\;\\text{m/s}$ downstream`, `$3.5\\;\\text{m/s}$ upstream`, `$1.5\\;\\text{m/s}$ upstream`, `$2\\;\\text{m/s}$ downstream`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Along one line, signed velocities add: taking downstream as positive, $-1.5 + 2 = +0.5$ m/s, so the swimmer drifts $0.5$ m/s downstream — the current wins. Adding the magnitudes to get $3.5$ m/s upstream reverses the current's direction; $1.5$ m/s upstream ignores the current, and $2$ m/s downstream ignores the swimming.`
          },
          {
            question: `A skydiver has reached terminal velocity. Which statement is correct?`,
            options: [`Velocity is zero and acceleration is $g$ downward`, `Both velocity and acceleration are at their maximum`, `Velocity is maximal and acceleration is zero`, `Velocity is constant because gravity has stopped acting`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `At terminal velocity, drag has grown to balance weight, so the net force and acceleration are zero while speed sits at its maximum. Gravity never stops acting — it is exactly canceled by drag. Zero velocity with acceleration $g$ describes the top of a vertical throw, not a falling skydiver, and acceleration cannot be at a maximum once it has dropped to zero.`
          },
          {
            question: `A ball thrown straight up rises to $20\\;\\text{m}$ ($g = 10\\;\\text{m/s}^2$). Its launch speed was:`,
            options: [`$10\\;\\text{m/s}$`, `$20\\;\\text{m/s}$`, `$40\\;\\text{m/s}$`, `$200\\;\\text{m/s}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `From $H = v_0^2/2g$, $v_0 = \\sqrt{2gH} = \\sqrt{2(10)(20)} = \\sqrt{400} = 20$ m/s. The rise takes $2$ s, so $10$ m/s is the AVERAGE speed on the way up ($20/2$), not the launch speed; $40$ m/s multiplies $g$ by the $4$ s round trip instead of the $2$ s rise; $200$ m/s is $gH$, missing both the 2 and the square root.`
          }
        ]
      }
    },
    {
      id: 'kin4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Drop tests are free fall.** A ruler caught after falling $d$ gives the reaction time $t = \\sqrt{d/5}$ with $g = 10\\;\\text{m/s}^2$.
- **Relative velocity on a line.** Signed velocities simply add: $v_{swim} \\pm v_{current}$ relative to the shore.
- **Terminal velocity.** Drag balances weight, so the speed is at its maximum while the acceleration is zero.
- **Triage before computing.** Options a power of ten apart, or paired as $x$ and $x^2$, are settled by a quick estimate.

**Common traps**

- **Distance ratio as time ratio.** Since $d \\propto t^2$, a fall $2.25$ times as far takes only $1.5$ times as long.
- **Adding opposing velocities.** Swimming $1.5\\;\\text{m/s}$ upstream in a $2\\;\\text{m/s}$ current gives $0.5\\;\\text{m/s}$ downstream, not $3.5$.
- **Gravity stops at terminal velocity.** Gravity still acts; drag cancels it exactly, so the net force is zero.
- **Mixing motion phases.** Constant-velocity travel before the response and the ruler's free fall need separate equations.`
    }
  ]
};
