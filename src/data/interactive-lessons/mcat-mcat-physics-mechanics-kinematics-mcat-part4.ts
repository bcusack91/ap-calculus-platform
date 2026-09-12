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
- **Air resistance (qualitative only):** drag grows with speed. A falling object approaches **terminal velocity**, where drag balances weight, so $a = 0$ while $v$ is at its maximum — the exam loves this "zero acceleration, nonzero velocity" inversion of the apex fact from Part 2.

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

*Researchers measure driver reaction time with a drop test: a vertical ruler is released without warning, and the subject pinches it as fast as possible. The distance the ruler falls before capture is recorded. Trials for one subject (well rested vs. sleep deprived) average $0.20\\;\\text{m}$ and $0.45\\;\\text{m}$ respectively. Use* $g = 10\\;\\text{m/s}^2$.

**Step 1 — Convert distance to time (rested).** The ruler falls from rest:

$d = \\tfrac{1}{2}gt^2 = 5t^2 \\Rightarrow 0.20 = 5t^2 \\Rightarrow t^2 = 0.04 \\Rightarrow t = 0.2\\;\\text{s}$

**Step 2 — Sleep-deprived trial.**

$0.45 = 5t^2 \\Rightarrow t^2 = 0.09 \\Rightarrow t = 0.3\\;\\text{s}$

Sleep deprivation added $0.1\\;\\text{s}$ — a $50\\%$ increase in reaction time, even though the fall distance more than doubled. **Distance is not proportional to time** ($d \\propto t^2$): a classic passage trap is to ask about the ratio of times, hoping you answer with the ratio of distances.

**Step 3 — Translate to the road.** At highway speed, $30\\;\\text{m/s}$, the extra $0.1\\;\\text{s}$ of reaction time adds

$\\Delta x = (30)(0.1) = 3\\;\\text{m}$

of travel before braking even begins — the passage will typically close the loop with exactly this kind of constant-velocity distance question.

**Passage strategy recap:** identify which phase of motion each question targets (constant velocity before the response vs. free fall of the ruler), pull only the numbers that phase needs, and keep the phases separate — the same discipline as splitting projectile motion into $x$ and $y$.`
    },
    {
      id: 'kin4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Kinematics Integration & Passage Strategy** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a drop test, a meter stick falls $0.45\\;\\text{m}$ before the subject catches it ($g = 10\\;\\text{m/s}^2$). The subject's reaction time is:`,
            options: [`$0.09\\;\\text{s}$`, `$0.3\\;\\text{s}$`, `$0.45\\;\\text{s}$`, `$0.9\\;\\text{s}$`],
            correctAnswer: 1,
            explanation: `$0.45 = 5t^2 \\Rightarrow t^2 = 0.09 \\Rightarrow t = 0.3$ s. Choosing $0.09$ forgets the square root; $0.45$ just recycles the distance.`
          },
          {
            question: `A motion sensor records a velocity that decreases linearly from $8\\;\\text{m/s}$ to $0$ over $4\\;\\text{s}$. The distance traveled during this interval is:`,
            options: [`$32\\;\\text{m}$`, `$8\\;\\text{m}$`, `$4\\;\\text{m}$`, `$16\\;\\text{m}$`],
            correctAnswer: 3,
            explanation: `Distance is the area under the $v$-$t$ graph — here a triangle: $\\tfrac{1}{2}(8)(4) = 16$ m. Multiplying $8 \\times 4 = 32$ treats the motion as constant velocity.`
          },
          {
            question: `A swimmer swims upstream at $1.5\\;\\text{m/s}$ relative to the water; the current flows at $2\\;\\text{m/s}$. Relative to the riverbank, the swimmer moves:`,
            options: [`$0.5\\;\\text{m/s}$ downstream`, `$3.5\\;\\text{m/s}$ upstream`, `$1.5\\;\\text{m/s}$ upstream`, `$0.5\\;\\text{m/s}$ upstream`],
            correctAnswer: 0,
            explanation: `Along one line, velocities add: $1.5$ upstream $- 2$ downstream $= 0.5$ m/s downstream — the current wins. Adding to get $3.5$ m/s upstream reverses the current's direction.`
          },
          {
            question: `A skydiver has reached terminal velocity. Which statement is correct?`,
            options: [`Velocity is zero and acceleration is $g$`, `Both velocity and acceleration are at their maximum`, `Velocity is at its maximum and acceleration is zero`, `Velocity is constant because gravity has stopped acting`],
            correctAnswer: 2,
            explanation: `At terminal velocity, drag has grown to balance weight, so the net force and acceleration are zero while speed sits at its maximum. Gravity never stops acting — it is exactly canceled by drag.`
          },
          {
            question: `A ball is thrown straight up at $25\\;\\text{m/s}$ and caught at the same height ($g = 10\\;\\text{m/s}^2$). Estimate the total flight time:`,
            options: [`$2.5\\;\\text{s}$`, `$5\\;\\text{s}$`, `$10\\;\\text{s}$`, `$50\\;\\text{s}$`],
            correctAnswer: 1,
            explanation: `$T = 2v_0/g = 2(25)/10 = 5$ s. Answering $2.5$ s counts only the way up — the round trip doubles it by symmetry.`
          }
        ]
      }
    },
    {
      id: 'kin4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Reaction-time drop tests are free fall in disguise: $t = \\sqrt{d/5}$ with $g = 10\\;\\text{m/s}^2$
- On data tables and graphs, reach for slope and area before reaching for equations
- Relative velocity along a line is simple addition and subtraction of signed velocities
- Terminal velocity: maximum speed with zero acceleration — drag balances weight
- Triage answer choices first: powers of ten, missing square roots, and $x$ vs. $x^2$ pairs give answers away
- Keep motion phases separate (constant-velocity travel vs. free fall), just like $x$ and $y$ in projectiles`
    }
  ]
};
