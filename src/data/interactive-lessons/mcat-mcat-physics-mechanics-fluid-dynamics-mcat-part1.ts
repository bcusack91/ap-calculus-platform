import type { LessonData } from './registry'

export const fluidsInMotionMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-mechanics-fluid-dynamics-mcat',
  sections: [
    {
      id: 'fl3-intro',
      type: 'text' as const,
      content: `# Fluids Part 3: Continuity & Bernoulli

**Part 1 of 1 — Fluid Dynamics: Continuity & Bernoulli**

**Where this fits.** This is the third of four fluids lessons. *Fluids Part 1: Density & Pressure* and *Fluids Part 2: Buoyancy & Surface Tension* covered fluids at rest. This lesson sets the fluid moving, with continuity and Bernoulli for ideal flow; *Fluids Part 4: Viscosity & Blood Flow* then adds friction for real fluids such as blood.

Throughout this lesson we assume an **ideal fluid**, with three properties (*Fluids Part 4* drops "non-viscous" to handle real blood flow):

- **incompressible**: its density stays constant;
- **non-viscous**: no internal friction between layers of fluid;
- **laminar** (and steady): it flows in smooth layers that do not mix, with the pattern unchanging in time.

### Flow Rate

The **volume flow rate** $Q$ is the volume of fluid passing a cross-section per unit time:

$$Q = Av$$

where $A$ is the cross-sectional area and $v$ is the fluid's average speed. Why $Av$: in a time $t$, a slug of fluid of length $vt$ passes the cross-section, which is a volume $A(vt)$; divide by $t$.

- Units: $\\text{m}^3/\\text{s}$ in SI; mL/min or L/min in medicine (resting cardiac output is about 5 L/min, which is $5000\\;\\text{cm}^3$ per 60 s, about $83\\;\\text{cm}^3/\\text{s}$).
- Conversions: $1\\;\\text{mL} = 1\\;\\text{cm}^3$; $1\\;\\text{L} = 1000\\;\\text{cm}^3 = 10^{-3}\\;\\text{m}^3$. Convert per minute to per second before mixing with speeds in m/s or cm/s.
- **Mass flow rate** is $\\rho Q$, in kg/s.
- Flow RATE is not SPEED. $Q$ is volume per time; $v$ is distance per time. A wide, slow river carries far more water per second than a narrow, fast stream.

### Continuity: Mass In = Mass Out

Fluid cannot pile up inside a rigid, leak-free pipe, so the mass entering each second equals the mass leaving. For an incompressible fluid the density is the same everywhere, so the volume flow rate is the same everywhere too:

$$A_1 v_1 = A_2 v_2$$

- **Narrower means faster:** $v \\propto 1/A$.
- **Circular pipes:** $A = \\pi r^2$, so $v \\propto 1/r^2$. Halve the radius (or the diameter) and the area falls to one-quarter, so the speed rises fourfold.
- **Branching:** when a pipe splits, the branch flows add up to the parent flow: $A_0 v_0 = A_1 v_1 + A_2 v_2 + \\dots$ The speed in identical branches is set by their TOTAL area. If the branches together have more area than the parent, the fluid slows down, even though each branch is narrower.
- Continuity links geometry to speed only. It says nothing about pressure; that is Bernoulli's job.
- Gases are compressible, so for them the conserved quantity is $\\rho A v$. On the MCAT, liquids and blood are treated as incompressible.

Partly covering the end of a garden hose with a thumb shrinks the exit area, and the water leaves much faster: continuity in action.`
    },
    {
      id: 'fl3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Flow Rate & Continuity** 🎯`,
      exercise: {
        questions: [
          {
            question: `Blood flows steadily through an artery that narrows to half its original radius. By continuity, how does the blood's speed in the narrowed segment compare with its speed upstream?`,
            options: [`Half as large`, `Unchanged`, `Twice as large`, `Four times as large`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `Area goes as $r^2$, so half the radius means one-quarter of the area, and $A_1v_1 = A_2v_2$ forces the speed to quadruple. "Twice as large" forgets to square the radius, "half as large" has the inverse relationship backwards, and "unchanged" would mean fluid piles up or vanishes in the narrowing.`
          },
          {
            question: `An infusion pump pushes saline at $120\\;\\text{mL}$ per minute through tubing whose inner cross-sectional area is $0.10\\;\\text{cm}^2$. What is the average speed of the saline in the tubing?`,
            options: [`$20\\;\\text{cm/s}$`, `$1200\\;\\text{cm/s}$`, `$2\\;\\text{cm/s}$`, `$200\\;\\text{cm/s}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$Q = 120\\;\\text{mL/min} = 2\\;\\text{cm}^3/\\text{s}$, and $v = Q/A = 2/0.10 = 20\\;\\text{cm/s}$. 1200 cm/s skips the minutes-to-seconds conversion, 2 cm/s reports the flow rate without dividing by the area, and 200 cm/s divides by 0.01 instead of 0.10.`
          },
          {
            question: `An artery carrying blood at $36\\;\\text{cm/s}$ divides into three identical branches, each with the same cross-sectional area as the parent artery. What is the blood's speed in each branch?`,
            options: [`$36\\;\\text{cm/s}$`, `$108\\;\\text{cm/s}$`, `$12\\;\\text{cm/s}$`, `$4\\;\\text{cm/s}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The total area of the branches is three times the parent's, so the same flow moves at one-third the speed: $36/3 = 12\\;\\text{cm/s}$. 36 cm/s looks at one branch's area and forgets that the flow is shared, 108 cm/s multiplies instead of dividing, and 4 cm/s divides by $3^2$ as if area went as the square of the number of branches.`
          },
          {
            question: `Doppler ultrasound shows blood speeding up from $30\\;\\text{cm/s}$ to $270\\;\\text{cm/s}$ as it passes through a stenosis (an abnormal narrowing of the artery). Assuming the flow rate is unchanged, the radius of the narrowed lumen is about:`,
            options: [`Three times the normal radius`, `One-ninth of the normal radius`, `One-third of the normal radius`, `One-eighty-first of the normal radius`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `A 9-fold rise in speed at constant flow means the area is one-ninth of normal, and since area goes as $r^2$, the radius is $\\sqrt{1/9} = 1/3$ of normal. One-ninth confuses area with radius, one-eighty-first squares the speed ratio instead of taking its square root, and three times the radius would SLOW the blood.`
          }
        ]
      }
    },
    {
      id: 'fl3-capillaries',
      type: 'text' as const,
      content: `### Worked Example — Why Capillary Blood Crawls

**Problem.** The aorta (cross-section about $3\\;\\text{cm}^2$) carries blood at about $30\\;\\text{cm/s}$. The capillary bed's TOTAL cross-section is about $3000\\;\\text{cm}^2$.

- **(a)** What flow rate does the heart send into the aorta, and is it a sensible cardiac output?
- **(b)** How fast does blood move through the capillaries?
- **(c)** Each capillary is far narrower than the aorta. Why is the blood slower there, not faster?

**(a) Flow rate, set by the heart.** $Q = Av = (3)(30) = 90\\;\\text{cm}^3/\\text{s}$. Sanity check: $90 \\times 60 = 5400\\;\\text{cm}^3/\\text{min} \\approx 5.4\\;\\text{L/min}$, a normal cardiac output.

**(b) Continuity across the whole bed.** With $Q = 90\\;\\text{cm}^3/\\text{s}$ from (a), $v_{\\text{cap}} = \\dfrac{Q}{A_{\\text{total}}} = \\dfrac{90}{3000} = 0.03\\;\\text{cm/s}$. That is 1000 times slower than in the aorta, in exactly the place where slow flow helps exchange.

**(c) Interpret.** Any single capillary IS far narrower than the aorta, but continuity applies to the summed area of all the parallel paths. "Narrow vessel, so fast blood" is single-tube thinking applied to a branching network.`
    },
    {
      id: 'fl3-bernoulli',
      type: 'text' as const,
      content: `### Bernoulli: Energy Conservation for Ideal Fluids

Along a streamline (the path followed by one parcel of fluid) in an ideal fluid,

$$P + \\tfrac{1}{2}\\rho v^2 + \\rho g h = \\text{constant}$$

Every term is an **energy per unit volume** ($\\text{J/m}^3$, which is the same unit as Pa):

| Term | Meaning |
|---|---|
| $P$ | pressure energy: the work the fluid can do by pushing |
| $\\tfrac{1}{2}\\rho v^2$ | kinetic energy per unit volume |
| $\\rho g h$ | gravitational potential energy per unit volume |

Here $h$ is HEIGHT above a chosen reference level, so pressure falls as the fluid rises. (In *Fluids Part 1: Density & Pressure* $h$ was depth.) Bernoulli is simply conservation of energy, which is why it needs the ideal-fluid assumptions: with viscosity, energy leaks away as heat.

- **Fluid at rest:** $v = 0$, so $P + \\rho g h$ is constant: going down a depth $d$ raises the pressure by $\\rho g d$, the hydrostatic result from *Fluids Part 1*.
- **Horizontal flow:** the $\\rho g h$ terms cancel, leaving $P + \\tfrac{1}{2}\\rho v^2 = \\text{constant}$. **Where the fluid moves faster, its pressure is lower.**
- **Why it feels backwards.** Fast fluid hits hard when something STOPS it, but the pressure it exerts on the walls alongside it is lower. In fact, the fluid speeds up into a narrowing BECAUSE the pressure behind it is higher: the pressure difference is what accelerates it.
- **The standard chain:** area down, so speed up (continuity), so pressure down (Bernoulli).
- **Narrowing and climbing.** Rising also lowers the pressure, so in a pipe that both narrows and climbs the two drops add: $P_1 - P_2 = \\tfrac{1}{2}\\rho(v_2^2 - v_1^2) + \\rho g(h_2 - h_1)$.
- **In blood vessels** the chain runs both ways: through a short narrowing of an artery the blood moves faster and presses less on the wall; in a widened segment it moves slower and presses harder.
- **Method.** Label points 1 and 2 and list $P$, $v$ and $h$ at each. Continuity gives the unknown speed first; Bernoulli then gives the pressure. Check with the fluid at rest: the speed terms vanish and only $\\rho g(h_2 - h_1)$ is left.

### Torricelli's Theorem

Liquid leaks from a small hole a depth $h$ below the open surface of a wide tank. Take point 1 at the surface and point 2 in the jet just outside the hole. Both are open to the air, so both are at atmospheric pressure, and because the tank is far wider than the hole the surface barely moves ($v_1 \\approx 0$). Bernoulli then reduces to $\\rho g h = \\tfrac{1}{2}\\rho v^2$, so

$$v = \\sqrt{2gh}$$

the speed of an object dropped from height $h$: each parcel cashes in the potential energy of its fall.

- **The density cancels.** Water, oil and mercury all leave at the same speed from the same depth; only $g$ and the depth below the surface matter.
- **Square root of the depth.** Twice the depth gives $\\sqrt{2}$ times the speed, not twice; doubling the speed takes four times the depth.
- **A draining tank slows down.** As $h$ shrinks, the exit speed falls, and so does the flow rate $Q = A_{\\text{hole}} v$.
- **The jet is a projectile.** Leaving horizontally from a hole a height $H$ above the ground, it falls for $t = \\sqrt{2H/g}$ and lands a distance $R = vt = 2\\sqrt{hH}$ from the tank.

### Venturi and Pitot Tubes

**Venturi effect and the Venturi meter.** Pressure drops in a constriction, and it recovers when the pipe widens again. A **Venturi meter** is a horizontal pipe with a narrow throat; open vertical tubes above the wide section and the throat show the pressure difference as a difference in liquid heights ($\\Delta P = \\rho g \\Delta h$, from *Fluids Part 1*), with the liquid standing lower over the throat. From $\\Delta P$ and the two areas, the flow speed follows: continuity gives $v_2 = v_1(A_1/A_2)$ and Bernoulli gives $\\Delta P = \\tfrac{1}{2}\\rho(v_2^2 - v_1^2)$, two equations for the two speeds. Because $\\Delta P$ goes as $v^2$, doubling the flow makes the height difference four times as large.

The same effect lets an atomizer or aspirator pull liquid up a tube: a fast air stream across the tube's top lowers the pressure there, and atmospheric pressure on the liquid below pushes it up the tube and into the stream.

**Pitot tube.** A **pitot tube** points straight into a flow. Fluid entering its open tip is brought to rest there, so the pressure at the tip (the **stagnation pressure**) is $P + \\tfrac{1}{2}\\rho v^2$, where $P$ is the ordinary (static) pressure of the moving fluid, read by a port on the side. Measuring both gives $\\Delta P = \\tfrac{1}{2}\\rho v^2$, so $v = \\sqrt{2\\Delta P/\\rho}$. Use the density of the fluid that is moving (air is about $1.2\\;\\text{kg/m}^3$).

**Lift.** A wing is shaped and tilted so that air flows faster over its top than beneath it. Faster flow on top means lower pressure on top, $\\Delta P = \\tfrac{1}{2}\\rho(v_{\\text{top}}^2 - v_{\\text{bottom}}^2)$, and the pressure difference times the wing's area is an upward force, $F = \\Delta P \\cdot A$. Air at $1.2\\;\\text{kg/m}^3$ moving at $50\\;\\text{m/s}$ over a wing and $40\\;\\text{m/s}$ under it gives $\\Delta P = (0.6)(2500 - 1600) = 540\\;\\text{Pa}$, or $5400\\;\\text{N}$ on a $10\\;\\text{m}^2$ wing.

<!-- yield:low -->
- Aircraft airspeed indicators are pitot-static probes, and hospital "Venturi masks" use the Venturi effect to draw in room air and deliver a fixed oxygen concentration.
<!-- /yield -->`
    },
    {
      id: 'fl3-worked',
      type: 'text' as const,
      content: `### Worked Example — A Venturi Meter (Continuity, Then Bernoulli)

**Problem.** Water ($\\rho = 1000\\;\\text{kg/m}^3$) flows at $1\\;\\text{m/s}$ through a horizontal pipe of cross-section $10\\;\\text{cm}^2$ that narrows to $2\\;\\text{cm}^2$. Use $g = 10\\;\\text{m/s}^2$.

- **(a)** How fast does the water move in the narrow section?
- **(b)** How much lower is the pressure in the narrow section?
- **(c)** By how much do the water levels in the meter's two open tubes differ?
- **(d)** What is the volume flow rate through the pipe?

**(a) Continuity for the new speed.** $v_2 = v_1\\dfrac{A_1}{A_2} = (1)\\dfrac{10}{2} = 5\\;\\text{m/s}$

**(b) Bernoulli for the pressure change.** The pipe is horizontal, so the $\\rho g h$ terms cancel. With $v_2 = 5\\;\\text{m/s}$ from (a):

$$P_1 - P_2 = \\tfrac{1}{2}\\rho(v_2^2 - v_1^2) = \\tfrac{1}{2}(1000)(25 - 1) = 12{,}000\\;\\text{Pa}$$

The narrow, fast section is LOWER in pressure by $12\\;\\text{kPa}$. Squaring the difference instead, $(5 - 1)^2 = 16$, would give a wrong $8\\;\\text{kPa}$.

**(c) Read it on the meter.** With $\\Delta P = 12{,}000\\;\\text{Pa}$ from (b), $\\Delta h = \\dfrac{\\Delta P}{\\rho g} = \\dfrac{12{,}000}{(1000)(10)} = 1.2\\;\\text{m}$, lower over the throat.

**(d) Flow rate.** $Q = A_1 v_1 = (10 \\times 10^{-4}\\;\\text{m}^2)(1\\;\\text{m/s}) = 1.0 \\times 10^{-3}\\;\\text{m}^3/\\text{s}$, or 1 L/s, the same in both sections. Order matters: continuity first (geometry to speed), Bernoulli second (speed to pressure).

### Worked Example — Torricelli's Tank

**Problem.** A wide open drum of water has a small hole of area $1.0\\;\\text{cm}^2$, $5\\;\\text{m}$ below the water surface and $1.25\\;\\text{m}$ above the ground. Use $g = 10\\;\\text{m/s}^2$.

- **(a)** How fast does the water leave the hole?
- **(b)** How much water flows out each second?
- **(c)** As the tank drains, how fast does the water leave when the depth above the hole is $1.25\\;\\text{m}$?
- **(d)** While the tank is still full, how far from the hole does the horizontal jet land?

**(a) Exit speed.** $v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = \\sqrt{100} = 10\\;\\text{m/s}$, the same speed a stone reaches after falling 5 m.

**(b) Flow out.** With $v = 10\\;\\text{m/s}$ from (a), $Q = Av = (1.0 \\times 10^{-4}\\;\\text{m}^2)(10\\;\\text{m/s}) = 1.0 \\times 10^{-3}\\;\\text{m}^3/\\text{s}$, about 1 L/s.

**(c) As the tank drains.** $v = \\sqrt{2(10)(1.25)} = \\sqrt{25} = 5\\;\\text{m/s}$: a quarter of the depth gives half of (a)'s speed. The exit speed and the flow both fall as the depth above the hole shrinks.

**(d) Range.** The jet leaves horizontally at $10\\;\\text{m/s}$, from (a), and falls $1.25\\;\\text{m}$ to the ground: $t = \\sqrt{2H/g} = \\sqrt{2(1.25)/10} = 0.5\\;\\text{s}$, so $R = vt = (10)(0.5) = 5\\;\\text{m}$. Check: $2\\sqrt{hH} = 2\\sqrt{(5)(1.25)} = 5\\;\\text{m}$.`
    },
    {
      id: 'fl3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Bernoulli, Venturi & Torricelli** 🎯`,
      exercise: {
        questions: [
          {
            question: `An ideal fluid flows steadily through a horizontal pipe with three sections: A (area $6\\;\\text{cm}^2$), B (area $2\\;\\text{cm}^2$) and C (area $3\\;\\text{cm}^2$). Which ranks the pressures from highest to lowest?`,
            options: [`$P_B > P_C > P_A$`, `$P_A > P_C > P_B$`, `$P_A = P_B = P_C$`, `$P_C > P_A > P_B$`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `By continuity, speed is inversely proportional to area: if the speed in A is $v$, then C carries $2v$ and B carries $3v$. By Bernoulli at constant height, the fastest section has the lowest pressure, so $P_A > P_C > P_B$. Reversing the order treats fast fluid as high-pressure, equal pressures would need equal speeds, and putting C above A ignores that A is the widest and slowest section.`
          },
          {
            question: `Water ($\\rho = 1000\\;\\text{kg/m}^3$) flows at $2\\;\\text{m/s}$ through a horizontal pipe of area $8\\;\\text{cm}^2$ and then through a throat of area $2\\;\\text{cm}^2$. By how much is the pressure in the throat lower than in the wide section?`,
            options: [`$30\\;\\text{kPa}$`, `$32\\;\\text{kPa}$`, `$60\\;\\text{kPa}$`, `$18\\;\\text{kPa}$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Continuity gives $v_2 = 2 \\times (8/2) = 8\\;\\text{m/s}$. Then $\\Delta P = \\tfrac{1}{2}(1000)(8^2 - 2^2) = 500 \\times 60 = 30{,}000\\;\\text{Pa}$. 32 kPa uses only $\\tfrac{1}{2}\\rho v_2^2$ and forgets the upstream speed, 60 kPa drops the $\\tfrac{1}{2}$, and 18 kPa squares the difference in speeds, $(8 - 2)^2 = 36$, instead of taking the difference of the squares.`
          },
          {
            question: `Water ($\\rho = 1000\\;\\text{kg/m}^3$) flows at $1\\;\\text{m/s}$ through a pipe of area $6\\;\\text{cm}^2$, then rises into a narrower section of area $2\\;\\text{cm}^2$ located $2\\;\\text{m}$ higher. By how much is the pressure in the upper section lower than in the lower section? ($g = 10\\;\\text{m/s}^2$)`,
            options: [`$20\\;\\text{kPa}$`, `$4\\;\\text{kPa}$`, `$24\\;\\text{kPa}$`, `$16\\;\\text{kPa}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Continuity gives $v_2 = 1 \\times (6/2) = 3\\;\\text{m/s}$. Bernoulli: $P_1 - P_2 = \\tfrac{1}{2}\\rho(v_2^2 - v_1^2) + \\rho g(h_2 - h_1) = 500(9 - 1) + (1000)(10)(2) = 4000 + 20{,}000 = 24{,}000\\;\\text{Pa}$. Speeding up and climbing both lower the pressure, so the two terms add. 20 kPa counts only the climb, 4 kPa only the speed change, and 16 kPa subtracts the kinetic term as if speeding up raised the pressure.`
          },
          {
            question: `A large open water tank on a hospital roof springs a small leak $1.8\\;\\text{m}$ below the water surface. About how fast does the water leave the hole? ($g = 10\\;\\text{m/s}^2$)`,
            options: [`About $36\\;\\text{m/s}$`, `About $4\\;\\text{m/s}$`, `About $2\\;\\text{m/s}$`, `About $6\\;\\text{m/s}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Torricelli: $v = \\sqrt{2gh} = \\sqrt{2(10)(1.8)} = \\sqrt{36} = 6\\;\\text{m/s}$. 36 m/s forgets the square root; about 4 m/s drops the factor of 2 ($\\sqrt{18} \\approx 4.2$); about 2 m/s leaves out $g$ ($\\sqrt{3.6} \\approx 1.9$).`
          },
          {
            question: `A pitot tube faces into a steady air stream. The pressure at its open tip, where the air is brought to rest, is $250\\;\\text{Pa}$ higher than the static pressure of the moving air. If air's density is $1.25\\;\\text{kg/m}^3$, what is the air speed?`,
            options: [`$400\\;\\text{m/s}$`, `$20\\;\\text{m/s}$`, `$14\\;\\text{m/s}$`, `$28\\;\\text{m/s}$`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `The tip pressure exceeds the static pressure by the kinetic term: $\\tfrac{1}{2}\\rho v^2 = 250$, so $v^2 = 2(250)/1.25 = 400$ and $v = 20\\;\\text{m/s}$. 400 m/s stops at $v^2$, 14 m/s omits the factor of 2 ($\\sqrt{200}$), and 28 m/s uses the factor of 2 twice ($\\sqrt{800}$).`
          },
          {
            question: `Three identical wide, open tanks are filled to the same depth: one with water, one with oil (SG $0.8$) and one with mercury (SG $13.6$). Each has a small hole the same distance below its surface. Treating all three as ideal fluids, how do the speeds of the three jets compare?`,
            options: [`Fastest for mercury, which has the most pressure at the hole`, `Fastest for oil, which is the lightest and easiest to move`, `Equal for all three, because the density cancels out of the result`, `Slowest for oil, which has the least weight pushing it out`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Bernoulli between the surface and the jet gives $\\rho g h = \\tfrac{1}{2}\\rho v^2$, and the density divides out: $v = \\sqrt{2gh}$ for any liquid. Mercury does have a larger pressure at the hole, but it also has proportionally more mass to accelerate, so the two effects cancel exactly. The same cancellation is why objects of every mass fall at the same rate.`
          }
        ]
      }
    },
    {
      id: 'fl3-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Flow rate is not speed.** $Q = Av$ is volume per time; $1\\;\\text{mL} = 1\\;\\text{cm}^3$, and convert minutes to seconds.
- **Continuity.** $A_1v_1 = A_2v_2$: half the radius means four times the speed, and branches share the flow by TOTAL area.
- **Bernoulli.** $P + \\tfrac{1}{2}\\rho v^2 + \\rho g h$ is constant, so at one height faster fluid has lower pressure (Venturi, lift).
- **Torricelli and pitot.** A tank leaks at $v = \\sqrt{2gh}$; a pitot tube reads stagnation minus static pressure $= \\tfrac{1}{2}\\rho v^2$.

**Common traps**

- **Fast means high pressure.** Backwards: at the same height, faster fluid has LOWER pressure on the walls beside it.
- **Unsquared radius.** Speed goes as $1/r^2$, so half the radius gives four times the speed, not twice.
- **Squaring the difference.** Bernoulli uses $v_2^2 - v_1^2$, never $(v_2 - v_1)^2$.
- **Missing square root.** In $v = \\sqrt{2gh}$, twice the depth gives $\\sqrt{2}$ times the speed, not twice.

<!-- yield:low -->
**Low-yield extras**

- aircraft pitot-static airspeed indicators; Venturi oxygen masks
<!-- /yield -->

**Next up:** the *Fluids Part 4: Viscosity & Blood Flow* lesson — viscosity and turbulence, Poiseuille's law, blood flow as a circuit, and how to grade a stenosis.`
    }
  ]
}
