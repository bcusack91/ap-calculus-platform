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
| Rotating coil | $\\mathcal{E} = NBA\\omega\\sin(\\omega t)$ |
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
   - The **area** (sliding rod) → $\\mathcal{E} = BLv$.
   - The **orientation** (rotating coil) → $\\mathcal{E} = NBA\\omega\\sin(\\omega t)$.
3. **Need the current?** Divide by total resistance: $I = \\mathcal{E}/R$.
4. **Need a direction?** Apply Lenz's law (oppose the change).
5. **Need total charge?** Use $q = \\frac{|\\Delta\\Phi_B|}{R}$ — it depends only on the net flux change.

### Watch the Calculus

Most Physics C induction problems hand you a *time-dependent* quantity — $B(t)$, $\\Phi_B(t)$, or a geometry that gives $A(t)$ — and ask for the EMF. The move is almost always **differentiate**, then evaluate at the requested instant. If instead they ask for accumulated charge or the area under an EMF-vs-time graph, you **integrate**. Identifying "differentiate vs. integrate" is half the battle.`
    },
    {
      id: 'physicsc-em-induction-em-p6-worked',
      type: 'text' as const,
      content: `### Worked Example — The AC Generator

A flat coil of $N = 200$ turns and area $A = 0.015\\text{ m}^2$ rotates at angular speed $\\omega = 120\\text{ rad/s}$ in a uniform field $B = 0.25\\text{ T}$. Find (a) the EMF as a function of time and (b) its peak value.

**Step 1 — Flux through the rotating coil.** With the coil's normal making angle $\\theta = \\omega t$ with $\\vec{B}$, $\\Phi_B = BA\\cos(\\omega t)$ per turn.

**Step 2 — Differentiate (Faraday's law for N turns).**

$\\mathcal{E} = -N\\frac{d\\Phi_B}{dt} = -NBA\\frac{d}{dt}\\cos(\\omega t) = NBA\\omega\\sin(\\omega t).$

**Step 3 — Peak EMF.** The sine factor maxes at 1, so

$\\mathcal{E}_{\\max} = NBA\\omega = (200)(0.25)(0.015)(120) = 90\\text{ V}.$

So $\\mathcal{E}(t) = 90\\sin(120t)\\text{ V}$. This is exactly why power-grid generators output a **sinusoidal** AC voltage — the rotation turns a constant field into an oscillating flux, and the derivative of a cosine is a sine.`
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
            question: 'A generator works by:',
            options: ['Chemical reaction', 'Rotating a coil in a magnetic field', 'Static electricity', 'Thermoelectric effect'],
            correctAnswer: 1,
            explanation: 'A generator produces EMF by rotating a coil in a magnetic field (changing $\\theta$ in $\\Phi_B = BA\\cos\\theta$).'
          },
          {
            question: 'The peak EMF of a coil with $N$ turns, area $A$, rotating at angular speed $\\omega$ in field $B$ is:',
            options: ['$NBA$', '$NBA\\omega$', '$NBA\\omega^2$', '$NBA/\\omega$'],
            correctAnswer: 1,
            explanation: '$\\mathcal{E}(t) = NBA\\omega\\sin(\\omega t)$, so the peak value is $\\mathcal{E}_{\\max} = NBA\\omega$.'
          },
          {
            question: 'A rectangular loop is pulled at constant velocity fully out of a uniform field region (entering field-free space). During the exit, the induced EMF is:',
            options: ['Constant and nonzero', 'Zero', 'Increasing linearly', 'Oscillating'],
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
