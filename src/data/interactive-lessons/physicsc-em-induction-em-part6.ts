export const physCEMInductionPart6Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ EM Induction Workshop

**Part 6 of 7 — Practice Strategies**

---

### Problem Types

| Type | Key Approach |
|------|-------------|
| Changing $B$ field in loop | $\\mathcal{E} = -d\\Phi_B/dt$ |
| Moving rod | $\\mathcal{E} = BLv$ |
| Loop entering or leaving a field | $\\mathcal{E} = BLv$ while partly inside; $F = BIL$ on the side in the field |
| RL circuit | $\\tau = L/R$, exponential growth/decay |
| LC circuit | $\\omega = 1/\\sqrt{LC}$, energy oscillation |
| Lenz’s law direction | Oppose the change in flux |`
    },
    {
      id: 'physicsc-em-induction-em-p6-strategy',
      type: 'text' as const,
      content: `### A Decision Tree for Induction Problems

1. **Is anything changing the flux?** If $B$, $A$, and $\\theta$ are all constant, $\\mathcal{E} = 0$ — stop.
2. **What is changing?**
   - The **field** $B(t)$ → $\\mathcal{E} = -N A\\frac{dB}{dt}$ (differentiate the given $B(t)$).
   - The **area** (sliding rod, or a loop entering or leaving a field) → $\\mathcal{E} = BLv$.
3. **Need the current?** Divide by total resistance: $I = \\mathcal{E}/R$.
4. **Need a direction?** Apply Lenz's law (oppose the change).
5. **Need total charge?** Use $q = \\frac{|\\Delta\\Phi_B|}{R}$ — it depends only on the net flux change.

### Watch the Calculus

Most Physics C induction problems hand you a *time-dependent* quantity — $B(t)$, $\\Phi_B(t)$, or a geometry that gives $A(t)$ — and ask for the EMF. The move is almost always **differentiate**, then evaluate at the requested instant. If instead they ask for accumulated charge or the area under an EMF-vs-time graph, you **integrate**. Identifying "differentiate vs. integrate" is half the battle.`
    },
    {
      id: 'physicsc-em-induction-em-p6-worked',
      type: 'text' as const,
      content: `### Worked Example — Pulling a Loop Out of a Field
A square loop of side $L = 0.20\\text{ m}$ and resistance $R = 0.50\\,\\Omega$ is pulled at constant speed $v = 2.0\\text{ m/s}$ out of a region of uniform field $B = 0.60\\text{ T}$ perpendicular to its plane. Find (a) the EMF and current while it is leaving, (b) the external force needed, and (c) the energy dissipated during the exit.

**Step 1 — EMF.** While the loop leaves, the area inside the field shrinks at the rate $Lv$, so
$|\\mathcal{E}| = BLv = (0.60)(0.20)(2.0) = 0.24\\text{ V}, \\qquad I = \\frac{\\mathcal{E}}{R} = \\frac{0.24}{0.50} = 0.48\\text{ A}.$
By Lenz's law the current flows so that its field **reinforces** the decreasing flux.

**Step 2 — Force.** Magnetic forces act only on the parts of the loop inside the field. The forces on the two sides perpendicular to the exiting edge cancel; the side still in the field feels
$F = BIL = (0.60)(0.48)(0.20) = 0.058\\text{ N},$
directed **opposite** the velocity. To keep $v$ constant, the external force must equal $0.058\\text{ N}$ forward.

**Step 3 — Energy.** Exiting takes $t = L/v = 0.10\\text{ s}$. The power is $Fv = (0.058)(2.0) = 0.115\\text{ W}$, which equals $I^2R = (0.48)^2(0.50) = 0.115\\text{ W}$. Energy dissipated: $(0.115)(0.10) \\approx 0.012\\text{ J}$.

**Takeaway.** Induced current + existing field = a magnetic force that opposes the motion. Newton's second law and energy conservation then work exactly as in mechanics.`
    },
    {
      id: 'physicsc-em-induction-em-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'While a conducting loop is being pulled out of a uniform field region, the net magnetic force on the loop points:',
            options: ['Opposite to its velocity', 'Along its velocity', 'Across its path', 'Nowhere at all'],
            correctAnswer: 0,
            explanation: 'The induced current interacts with the field only on the part of the loop still inside it, and by Lenz’s law that force opposes the motion that changes the flux.'
          },
          {
            question: 'In the worked example (side $0.20$ m, $R = 0.50\\,\\Omega$, $B = 0.60$ T, $v = 2.0$ m/s), the external force needed to keep the loop moving at constant speed is:',
            options: ['$0.058$ N', '$0.029$ N', '$0.115$ N', '$0.48$ N'],
            correctAnswer: 0,
            explanation: '$I = BLv/R = 0.48$ A, so $F = BIL = (0.60)(0.48)(0.20) \\approx 0.058$ N. The value $0.115$ is the power in watts, and $0.48$ is the current in amperes.'
          },
          {
            question: 'A rectangular loop is pulled at constant velocity fully out of a uniform field region (entering field-free space). During the exit, the induced EMF is:',
            options: ['Steady and nonzero', 'Zero', 'Increasing linearly', 'Oscillating'],
            correctAnswer: 0,
            explanation: 'While one side is in the field and the area inside it shrinks at a constant rate, $d\\Phi_B/dt = BLv$ is constant, giving a constant EMF until the loop fully exits.'
          },
          {
            question: 'A circular loop of radius $r$ surrounds a region where $\\frac{dB}{dt}$ is uniform. Doubling the loop radius (field region still larger than the loop) changes the induced EMF by a factor of:',
            options: ['$2$', '$4$', '$1/2$', 'No change'],
            correctAnswer: 1,
            explanation: '$|\\mathcal{E}| = A\\frac{dB}{dt} = \\pi r^2\\frac{dB}{dt}$. Doubling $r$ quadruples the area and hence the EMF.'
          },
          {
            question: 'To DECREASE the time constant of an RL circuit (faster response), you could:',
            options: ['Increase L', 'Decrease R', 'Increase R', 'Increase both L and R equally'],
            correctAnswer: 2,
            explanation: '$\\tau = L/R$. Increasing $R$ decreases $\\tau$, making the current settle faster.'
          }
        ]
      }
    }
  ]
};
