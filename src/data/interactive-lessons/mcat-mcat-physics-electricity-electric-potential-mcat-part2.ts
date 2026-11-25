import type { LessonData } from './registry'

export const electricPotentialMcatPart2: LessonData = {
  topicSlug: 'mcat-physics-electricity-electric-potential-mcat',
  sections: [
    {
      id: 'esp2-intro',
      type: 'text' as const,
      content: `# Electrostatics Part 3: Electric Potential & Energy

**Part 2 of 2 — Equipotentials & Energy Conservation**

The first half defined potential energy $U$ (joules) and potential $V$ (volts), joined by $\\Delta U = q\\,\\Delta V$. This half draws potential as a map, links it to the field, and then uses it the way the MCAT does: to follow the energy of moving charges and ions.

### Equipotentials and E = ΔV/d

An **equipotential** is a surface (a line on a flat diagram) on which every point has the same potential. Think of the contour lines on a hiking map, with $V$ playing the part of height.

- **No work along one.** Moving a charge between two points on the same equipotential has $\\Delta V = 0$, so $W = q\\,\\Delta V = 0$, whatever route it takes.
- **Perpendicular to field lines.** Equipotentials always cross field lines at right angles. If the field had any part along the surface, moving along it would take work, and then it would not be an equipotential.
- **$E$ points downhill.** The field points from HIGH potential toward LOW potential, the steepest way down the map.

**The link between field and potential**

$$|E| = \\left|\\frac{\\Delta V}{\\Delta r}\\right|$$

The field strength is the change in potential per meter, measured along the field. Closely spaced equipotentials mean a strong field, like a steep slope; widely spaced ones mean a weak field. Where $V$ is constant, $E = 0$.

- **Units agree.** $1\\;\\text{V/m} = 1\\;\\dfrac{\\text{J}}{\\text{C}\\cdot\\text{m}} = 1\\;\\dfrac{\\text{N}\\cdot\\text{m}}{\\text{C}\\cdot\\text{m}} = 1\\;\\text{N/C}$.
- **A large $V$ is not a large $E$.** The field depends on how fast the potential changes with position, not on its value.

**Parallel plates: the uniform field**

Between two parallel plates with potential difference $\\Delta V$ and separation $d$, the field is the same everywhere:

$$E = \\frac{\\Delta V}{d}$$

- The equipotentials are evenly spaced planes parallel to the plates.
- $V$ changes steadily across the gap. Halfway across, $V$ is halfway between the two plate values; a point a distance $x$ from the lower-potential plate sits $Ex$ above that plate's potential.
- The field points from the higher-potential plate to the lower one.

Quick example: $6.0\\;\\text{V}$ across plates $2.0\\;\\text{mm}$ apart gives $E = \\dfrac{6.0}{2.0 \\times 10^{-3}} = 3.0 \\times 10^{3}\\;\\text{V/m}$. Convert mm to m first. A point $0.50\\;\\text{mm}$ from the $0\\;\\text{V}$ plate is at $(3.0 \\times 10^{3})(0.50 \\times 10^{-3}) = 1.5\\;\\text{V}$.

**Other shapes**

- **Point charge.** The equipotentials are spheres centered on the charge. Drawn at equal steps of $V$, they spread farther apart with distance, because the field weakens.
- **Conductor.** A conductor in equilibrium has $E = 0$ inside (*Electrostatics Part 2*), so its whole body and surface are ONE equipotential, and field lines meet its surface at right angles.
- **On the body.** An ECG reads potential differences of about a millivolt between points on the skin; each lead is a $\\Delta V$ between two electrodes.

Charged plates also store charge and energy. That is capacitance, taught in *Circuits Part 3: EMF & Capacitance*.`
    },
    {
      id: 'esp2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Equipotentials & the Field** 🎯`,
      exercise: {
        questions: [
          {
            question: `Points A and B lie on the same equipotential. A charge is carried from A to B along a path that wanders off the equipotential and back. The total work done by the electric field on the charge is:`,
            options: [`Positive, as the path left the surface`, `Zero only if the charge is positive`, `Zero`, `Set by the length of the path`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The field's work is $W = -q\\,\\Delta V$, and $\\Delta V = V_B - V_A = 0$ when both points share one potential. The electric force is conservative, so the route and its length do not matter: whatever work is done leaving the surface is undone coming back. The sign of the charge cannot matter either, since $q$ multiplies zero.`
          },
          {
            question: `Between two horizontal plates the equipotentials are horizontal lines: $30\\;\\text{V}$ near the top, $20\\;\\text{V}$ in the middle and $10\\;\\text{V}$ near the bottom. An electron is released from rest on the $20\\;\\text{V}$ line. It is pushed:`,
            options: [`Up toward $30\\;\\text{V}$, opposite to the field`, `Down toward $10\\;\\text{V}$, along the field`, `Up toward $30\\;\\text{V}$, along the field`, `Sideways, along the $20\\;\\text{V}$ line`],
            correctAnswer: 0,
            yield: 'ULTRA_HIGH',
            explanation: `The field points from high potential to low, so here it points down, at right angles to the lines. A negative charge feels a force opposite to the field and moves toward HIGHER potential: up, toward $30\\;\\text{V}$, where its energy $U = qV$ is lowest. Down, along the field, is where a positive charge would go; the field does not point up toward the higher potential; and there is no force along an equipotential.`
          },
          {
            question: `A gel for electrophoresis is $15\\;\\text{cm}$ long and has $120\\;\\text{V}$ applied across its length. Treating the field in the gel as uniform, its magnitude is:`,
            options: [`$8.0\\;\\text{V/m}$`, `$18\\;\\text{V/m}$`, `$80\\;\\text{V/m}$`, `$8.0 \\times 10^{2}\\;\\text{V/m}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `$E = \\Delta V/d = 120/0.15 = 8.0 \\times 10^{2}\\;\\text{V/m}$. $8.0\\;\\text{V/m}$ leaves the length in centimeters, $18$ multiplies the voltage by the length instead of dividing, and $80\\;\\text{V/m}$ slips a power of ten in the conversion.`
          },
          {
            question: `An equipotential map is drawn with a line every $5\\;\\text{V}$. Measured along the field, neighboring lines are $1.0\\;\\text{cm}$ apart in region X and $4.0\\;\\text{cm}$ apart in region Y. How do the field strengths compare?`,
            options: [`$E_X = E_Y/4$`, `$E_X = 4E_Y$`, `$E_X = 16E_Y$`, `$E_X = E_Y$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$|E| = |\\Delta V|/\\Delta r$ with the same $5\\;\\text{V}$ step in both regions: $5/0.010 = 500\\;\\text{V/m}$ in X and $5/0.040 = 125\\;\\text{V/m}$ in Y, so the field is 4 times stronger where the lines are 4 times closer. $E_Y/4$ reads close lines as a weak field, $16E_Y$ squares the ratio as if this were an inverse-square law, and equal fields would need equal spacing.`
          }
        ]
      }
    },
    {
      id: 'esp2-energy',
      type: 'text' as const,
      content: `### Energy Conservation for Charges

When only electric forces do work, energy is conserved, the same bookkeeping as a ball rolling on a hill:

$$KE_i + U_i = KE_f + U_f \\qquad \\text{so} \\qquad \\Delta KE = -\\Delta U = -q\\,\\Delta V$$

**From rest through a potential difference**, a charge gains

$$KE = |q|\\,|\\Delta V|$$

whatever the path, the shape of the field or the width of the gap. A wider gap at the same voltage has a weaker field acting over a longer distance, and the energy comes out the same.

**Which way do charges speed up?**

- A **positive** charge speeds up moving toward **lower** $V$.
- A **negative** charge speeds up moving toward **higher** $V$.
- Both are losing potential energy $U = qV$ and gaining the same amount of kinetic energy.
- Sent the other way, a charge slows down. If it runs out of kinetic energy, it stops and turns back.

**The same energy is not the same speed.** Since $KE = \\frac{1}{2}mv^2$,

$$v = \\sqrt{\\frac{2|q|\\,|\\Delta V|}{m}}$$

- A proton and an electron crossing the same $\\Delta V$ gain the SAME kinetic energy, but the electron is about 1836 times lighter, so it ends up about $\\sqrt{1836} \\approx 43$ times faster.
- Speed grows as $\\sqrt{\\Delta V}$: four times the voltage gives twice the speed.

**Pairs of charges** trade $U$ and $KE$ too, with $U = kq_1q_2/r$. A charge fired at a FIXED like charge slows down; at its **closest approach** it stops for an instant, and all of its starting kinetic energy has become potential energy: $KE_{\\text{start}} = kq_1q_2/r_{\\text{min}}$.

**Energy beats kinematics.** If a question gives voltages or positions and asks for a speed or an energy, use energy conservation and skip forces, fields and accelerations.

### The Electron-Volt

Joules are far too big for single particles, so use the **electron-volt**: the energy a charge $e$ gains or loses crossing $1\\;\\text{V}$.

$$1\\;\\text{eV} = 1.6 \\times 10^{-19}\\;\\text{J}$$

- In eV, $\\Delta U = q\\,\\Delta V$ needs no calculator: the charge in units of $e$ times the volts. A proton crossing $100\\;\\text{V}$ gains $100\\;\\text{eV}$; an alpha particle ($+2e$) gains $200\\;\\text{eV}$.
- The eV is a unit of ENERGY, not of potential. Volts belong to the place; electron-volts to the particle.
- Convert to joules (multiply by $1.6 \\times 10^{-19}$) before using $v = \\sqrt{2\\,KE/m}$.

### Ions Crossing a Membrane

A cell membrane is a thin insulator with conducting salt solution on both sides, so it behaves like a pair of charged plates. A resting neuron sits at about $-70\\;\\text{mV}$: the inside is $70\\;\\text{mV}$ lower than the outside, which is taken as $0\\;\\text{V}$. The outer face carries positive charge, the inner face negative.

**The field inside the membrane.** With a bilayer about $7.0\\;\\text{nm}$ thick:

$$E = \\frac{\\Delta V}{d} = \\frac{0.070\\;\\text{V}}{7.0 \\times 10^{-9}\\;\\text{m}} = 1.0 \\times 10^{7}\\;\\text{V/m}$$

pointing inward, from the positive outer face to the negative inner face. A small voltage across a tiny gap makes a huge field. With $d$ fixed, the field follows the voltage: it shrinks as the cell depolarizes toward $0\\;\\text{mV}$ and grows if the cell hyperpolarizes.

**The energy for one ion to cross.** Use $\\Delta U = q\\,\\Delta V$ with $\\Delta V = V_{\\text{final}} - V_{\\text{initial}}$ and both signs kept.

| Ion and trip | $q$ | $\\Delta V$ | $\\Delta U$ |
|---|---|---|---|
| $\\text{Na}^+$ entering | $+e$ | $-0.070\\;\\text{V}$ | $-0.070\\;\\text{eV} = -1.1 \\times 10^{-20}\\;\\text{J}$ |
| $\\text{Cl}^-$ entering | $-e$ | $-0.070\\;\\text{V}$ | $+0.070\\;\\text{eV} = +1.1 \\times 10^{-20}\\;\\text{J}$ |
| $\\text{K}^+$ leaving | $+e$ | $+0.070\\;\\text{V}$ | $+0.070\\;\\text{eV} = +1.1 \\times 10^{-20}\\;\\text{J}$ |
| $\\text{Ca}^{2+}$ entering | $+2e$ | $-0.070\\;\\text{V}$ | $-0.14\\;\\text{eV} = -2.2 \\times 10^{-20}\\;\\text{J}$ |

- A negative $\\Delta U$ means the field pushes the ion that way. A positive $\\Delta U$ means the field opposes the trip, so the energy must come from elsewhere: the ion's concentration gradient, or a pump spending ATP.
- Scale to remember: per ion, hundredths of an eV, around $10^{-20}\\;\\text{J}$.

<!-- yield:low -->
- For comparison, hydrolyzing one ATP releases roughly $5 \\times 10^{-20}\\;\\text{J}$ under standard conditions (more in a cell), the same order of magnitude, which is why one ATP can move only a few ions.
<!-- /yield -->`
    },
    {
      id: 'esp2-worked',
      type: 'text' as const,
      content: `### Worked Example — A Proton and an Electron Through 500 V

**Problem.** Two parallel plates $1.0\\;\\text{cm}$ apart have $500\\;\\text{V}$ across them. A proton ($m_p = 1.67 \\times 10^{-27}\\;\\text{kg}$) is released from rest at the positive plate. Use $e = 1.6 \\times 10^{-19}\\;\\text{C}$.

- **(a)** What is the proton's kinetic energy at the negative plate, in eV and in joules?
- **(b)** How fast is it moving there?
- **(c)** An electron ($m_e = 9.1 \\times 10^{-31}\\;\\text{kg}$) is released from rest at the negative plate instead. What are its kinetic energy and speed at the positive plate?
- **(d)** The plates are moved to $2.0\\;\\text{cm}$ apart with the same $500\\;\\text{V}$. What changes?

**(a) Energy from the voltage.** $KE = e\\,\\Delta V = 500\\;\\text{eV} = (500)(1.6 \\times 10^{-19}) = 8.0 \\times 10^{-17}\\;\\text{J}$.

**(b) Speed.** $v = \\sqrt{\\dfrac{2\\,KE}{m}} = \\sqrt{\\dfrac{2(8.0 \\times 10^{-17})}{1.67 \\times 10^{-27}}} = \\sqrt{9.6 \\times 10^{10}} \\approx 3.1 \\times 10^{5}\\;\\text{m/s}$.

**(c) The electron.** It moves toward HIGHER potential and gains the same $500\\;\\text{eV} = 8.0 \\times 10^{-17}\\;\\text{J}$. But $v = \\sqrt{\\dfrac{2(8.0 \\times 10^{-17})}{9.1 \\times 10^{-31}}} = \\sqrt{1.76 \\times 10^{14}} \\approx 1.3 \\times 10^{7}\\;\\text{m/s}$, about 43 times faster than the proton.

**(d) A wider gap.** Nothing in (a) to (c) changes. The field halves, from $5.0 \\times 10^{4}\\;\\text{V/m}$ to $2.5 \\times 10^{4}\\;\\text{V/m}$, but it acts over twice the distance; $KE = e\\,\\Delta V$ depends only on the $500\\;\\text{V}$.

### Worked Example — Closest Approach

**Problem.** A proton with $360\\;\\text{eV}$ of kinetic energy is fired from far away straight at a nucleus of charge $+5e$, which stays fixed. Use $k = 9.0 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$ and $e = 1.6 \\times 10^{-19}\\;\\text{C}$.

- **(a)** What is the proton's kinetic energy in joules?
- **(b)** How close does it get to the nucleus?
- **(c)** What is its kinetic energy when it is twice that far away?
- **(d)** What is its kinetic energy once it is far away again?

**(a) Convert.** $KE = (360)(1.6 \\times 10^{-19}) = 5.76 \\times 10^{-17}\\;\\text{J}$.

**(b) All kinetic becomes potential.** At closest approach the proton stops, so $k\\dfrac{(5e)(e)}{r_{\\text{min}}} = KE$. Then $r_{\\text{min}} = \\dfrac{(9.0 \\times 10^9)(8.0 \\times 10^{-19})(1.6 \\times 10^{-19})}{5.76 \\times 10^{-17}} = \\dfrac{1.15 \\times 10^{-27}}{5.76 \\times 10^{-17}} = 2.0 \\times 10^{-11}\\;\\text{m}$.

**(c) Twice as far.** $U \\propto 1/r$, so at $4.0 \\times 10^{-11}\\;\\text{m}$ the potential energy is half of $360\\;\\text{eV}$: $U = 180\\;\\text{eV}$ and $KE = 360 - 180 = 180\\;\\text{eV}$, on the way in or on the way out.

**(d) Back out.** Far away $U = 0$ again, so the proton has its full $360\\;\\text{eV}$ back, now moving away. The total energy never changed.`
    },
    {
      id: 'esp2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Energy, Electron-Volts & Membranes** 🎯`,
      exercise: {
        questions: [
          {
            question: `A proton is accelerated from rest through $1000\\;\\text{V}$. An alpha particle (charge $+2e$, about four times the proton's mass) is accelerated from rest through $500\\;\\text{V}$. How do their final kinetic energies compare?`,
            options: [`The proton has twice the kinetic energy`, `The alpha has twice the kinetic energy`, `They are equal`, `The alpha has four times the kinetic energy`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$KE = |q||\\Delta V|$: the proton gains $(e)(1000\\;\\text{V}) = 1000\\;\\text{eV}$ and the alpha gains $(2e)(500\\;\\text{V}) = 1000\\;\\text{eV}$. The energies are equal, though the speeds are not, since the alpha is heavier. Either "twice" answer counts only the voltage or only the charge, and "four times" brings in the mass, which affects speed, not energy.`
          },
          {
            question: `A mass spectrometer accelerates an ion from rest through a potential difference. If the potential difference is raised from $1000\\;\\text{V}$ to $4000\\;\\text{V}$, the ion's final speed is multiplied by:`,
            options: [`$2$`, `$4$`, `$16$`, `$\\sqrt{2}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Four times the voltage gives four times the kinetic energy, and $KE = \\frac{1}{2}mv^2$ means $v \\propto \\sqrt{\\Delta V}$, so the speed doubles. A factor of 4 treats speed as proportional to voltage, 16 squares instead of taking the root, and $\\sqrt{2}$ would go with a doubled voltage.`
          },
          {
            question: `A neuron's membrane is $8.0\\;\\text{nm}$ thick. At rest the inside is at $-80\\;\\text{mV}$ relative to the outside; at the peak of an action potential the inside reaches $+40\\;\\text{mV}$. Treating the membrane as a pair of parallel plates, the electric field inside it at the peak is:`,
            options: [`$5.0 \\times 10^{6}\\;\\text{V/m}$, pointing inward`, `$1.5 \\times 10^{7}\\;\\text{V/m}$, pointing outward`, `$1.0 \\times 10^{7}\\;\\text{V/m}$, pointing inward`, `$5.0 \\times 10^{6}\\;\\text{V/m}$, pointing outward`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `At the peak, $E = \\Delta V/d = (0.040)/(8.0 \\times 10^{-9}) = 5.0 \\times 10^{6}\\;\\text{V/m}$. The inside is now at the higher potential, and the field points from high to low potential: outward. An inward field belongs to the resting state, where the value is $1.0 \\times 10^{7}\\;\\text{V/m}$, and $1.5 \\times 10^{7}$ uses the $120\\;\\text{mV}$ swing instead of the $40\\;\\text{mV}$ across the membrane at that moment.`
          },
          {
            question: `A $\\text{K}^+$ ion leaves a resting neuron, moving from the inside (at $-70\\;\\text{mV}$) to the outside (at $0\\;\\text{mV}$). What is the change in its electric potential energy? ($e = 1.6 \\times 10^{-19}\\;\\text{C}$)`,
            options: [`$-0.070\\;\\text{eV}$, about $-1.1 \\times 10^{-20}\\;\\text{J}$`, `$+0.070\\;\\text{eV}$, about $+1.1 \\times 10^{-20}\\;\\text{J}$`, `$+70\\;\\text{eV}$, about $+1.1 \\times 10^{-17}\\;\\text{J}$`, `$+0.14\\;\\text{eV}$, about $+2.2 \\times 10^{-20}\\;\\text{J}$`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$\\Delta V = V_{\\text{final}} - V_{\\text{initial}} = 0 - (-0.070) = +0.070\\;\\text{V}$, so $\\Delta U = q\\,\\Delta V = (+e)(+0.070\\;\\text{V}) = +0.070\\;\\text{eV} \\approx 1.1 \\times 10^{-20}\\;\\text{J}$. A positive ion moving toward higher potential gains potential energy; the field opposes the trip, and the ion's concentration gradient drives it. The negative value is for a positive ion ENTERING, $+70\\;\\text{eV}$ leaves the potential in millivolts, and $+0.14\\;\\text{eV}$ is for a charge of $2e$.`
          }
        ]
      }
    },
    {
      id: 'esp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Equipotentials.** Same $V$ everywhere on one; moving a charge along it takes no work; they cross field lines at right angles.
- **Field from potential.** $E$ points from high $V$ to low $V$ with $|E| = |\\Delta V/\\Delta r|$: close lines, strong field. $1\\;\\text{V/m} = 1\\;\\text{N/C}$.
- **Parallel plates.** $E = \\Delta V/d$, uniform, with evenly spaced equipotential planes; a conductor is one equipotential.
- **Energy conservation.** $\\Delta KE = -q\\,\\Delta V$; from rest $KE = |q||\\Delta V|$, whatever the path or the gap.
- **Direction.** Positive charges speed up toward lower $V$, negative charges toward higher $V$; both lose $U$.
- **Speed.** $v = \\sqrt{2|q||\\Delta V|/m}$: equal energies, but the lighter particle is faster, and $v \\propto \\sqrt{\\Delta V}$.
- **Electron-volt.** $1\\;\\text{eV} = 1.6 \\times 10^{-19}\\;\\text{J}$, the energy of a charge $e$ crossing $1\\;\\text{V}$.
- **Membrane.** $-70\\;\\text{mV}$ across about $7\\;\\text{nm}$ gives $E \\approx 10^{7}\\;\\text{V/m}$, pointing inward; one ion crossing changes $U$ by about $0.07\\;\\text{eV} \\approx 10^{-20}\\;\\text{J}$.

**Common traps**

- **Equipotentials drawn along field lines.** They are always perpendicular to them.
- **$E$ pointing from low to high $V$.** The field points downhill in potential.
- **Large $V$ means large $E$.** The field is how fast $V$ changes, not how big it is.
- **Units in $E = \\Delta V/d$.** Convert mm, cm and nm to meters, and mV to volts.
- **A wider gap gives more energy.** At the same voltage the energy gained is the same.
- **Equal energies mean equal speeds.** Speed also depends on mass; doubling the voltage does not double the speed.
- **Negative charges going to low $V$.** They speed up toward HIGHER potential.
- **eV in the speed formula.** Convert to joules first, and keep the 2 and the square root.
- **Forgetting the ion's charge.** $\\text{Ca}^{2+}$ carries $2e$, and $\\text{Cl}^-$ flips the sign of $\\Delta U$.

<!-- yield:low -->
- Low-yield extras: the energy from one ATP (roughly $5 \\times 10^{-20}\\;\\text{J}$) compared with the energy for one ion to cross.
<!-- /yield -->

**Next up.** Potential difference is the "voltage" that drives current through wires and resistors: continue with *Circuits Part 1: Current & Resistance*.`
    }
  ]
};
