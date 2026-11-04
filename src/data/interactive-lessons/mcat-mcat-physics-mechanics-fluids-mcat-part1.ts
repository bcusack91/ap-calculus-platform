import type { LessonData } from './registry'

export const fluidsMcatPart1: LessonData = {
  topicSlug: 'mcat-physics-mechanics-fluids-mcat',
  sections: [
    {
      id: 'fl1-intro',
      type: 'text' as const,
      content: `# Fluids

**Part 1 of 4 — Density, Pressure & Pascal's Principle**

**Where this fits.** This lesson covers fluids at rest and in motion: density and pressure, buoyancy and surface tension, the ideal-flow equations (continuity and Bernoulli), and viscous flow through blood vessels. Its companion, the *Waves & Sound* lesson, covers periodic motion, waves, sound intensity and decibels, the Doppler effect and ultrasound. Here we start with fluids that are not moving at all.

A **fluid** is any substance that flows: liquids and gases. A fluid at rest cannot hold a sideways (shear) force, so it can only push perpendicular to any surface it touches. That one fact is the root of everything about pressure.

### Density and Specific Gravity

**Density** $\\rho$ (Greek "rho") is mass per unit volume:

$$\\rho = \\frac{m}{V}$$

The SI unit is $\\text{kg/m}^3$; labs and clinics often use $\\text{g/cm}^3$, which is the same as g/mL. Water is the anchor: $1\\;\\text{g/cm}^3 = 1000\\;\\text{kg/m}^3 = 1\\;\\text{kg/L}$. To convert a density from $\\text{g/cm}^3$ to $\\text{kg/m}^3$, multiply by 1000.

**Specific gravity** (SG) is a substance's density divided by the density of water:

$$SG = \\frac{\\rho_{\\text{substance}}}{\\rho_{\\text{water}}}$$

It is a ratio of two densities, so it has no units. $SG = 0.8$ means 80% as dense as water, or $800\\;\\text{kg/m}^3$. Numerically, SG equals the density written in $\\text{g/cm}^3$.

| Substance | Approximate SG |
|---|---|
| ice | 0.92 |
| water | 1.00 |
| seawater | 1.03 |
| blood | 1.05 |
| mercury | 13.6 |

Memorize water and mercury; the others are useful for estimates and are usually given in a passage.

Two more facts you will use constantly. Weight follows from density: $W = mg = \\rho V g$. And liquids barely compress, so the MCAT treats them as **incompressible** (constant density); gases are compressible, and their density rises with pressure.

### Pressure

**Pressure** is force per unit area, with the force taken perpendicular to the surface:

$$P = \\frac{F}{A}$$

The SI unit is the pascal: $1\\;\\text{Pa} = 1\\;\\text{N/m}^2$. Pressure is a **scalar**: at any point in a fluid at rest it pushes equally in all directions, and the force it produces on a surface always acts perpendicular to that surface. The same force on a smaller area gives a larger pressure, which is why a needle tip pierces skin.

**Pressure versus depth.** Picture a column of liquid with cross-sectional area $A$ and height $h$ resting on a point. Its weight is $\\rho (Ah) g$, spread over area $A$, so it adds $\\rho g h$ of pressure. Add whatever presses on the liquid's surface, $P_0$ (usually atmospheric pressure):

$$P = P_0 + \\rho g h$$

Here $h$ is the depth below the surface and $g \\approx 10\\;\\text{m/s}^2$.

- **Depth, not shape.** Only $\\rho$, $g$ and $h$ appear. A narrow tube and a wide lake have the same pressure at the same depth; the container's shape and the total volume of liquid do not matter.
- **Same level, same pressure.** In one connected fluid at rest, every point at the same depth has the same pressure.
- **Linear in depth.** Doubling the depth doubles $\\rho g h$, but not the total $P$, because $P_0$ does not double.
- **Rule of thumb.** In water, $\\rho g h = (1000)(10)(10) = 10^5\\;\\text{Pa}$ for every $10\\;\\text{m}$: about one extra atmosphere per 10 m of depth.

**Gauge vs. absolute pressure.** **Absolute pressure** is the total $P$. **Gauge pressure** is the amount above atmospheric pressure: $P_{\\text{gauge}} = P - P_{\\text{atm}}$, which for an open liquid is just $\\rho g h$. Tire gauges, blood-pressure cuffs and almost every medical reading report gauge pressure. A gauge pressure can be negative: the pressure in the thin fluid layer between the lungs and the chest wall is normally about $-4\\;\\text{mmHg}$, meaning 4 mmHg below atmospheric.

| Unit | Equivalent |
|---|---|
| 1 atm | $1.01 \\times 10^5\\;\\text{Pa} \\approx 10^5\\;\\text{Pa}$ |
| 1 atm | 760 mmHg = 760 torr |
| 1 mmHg | about 133 Pa |
| 1 atm | about 10 m of water |

A millimetre of mercury (mmHg) is literally the pressure under a 1 mm column of mercury: $\\rho g h = (13{,}600)(9.8)(0.001) \\approx 133\\;\\text{Pa}$.`
    },
    {
      id: 'fl1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Density & Pressure** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $50.0\\;\\text{cm}^3$ sample of olive oil has a mass of $46.0\\;\\text{g}$. What are its density in SI units and its specific gravity?`,
            options: [`$920\\;\\text{kg/m}^3$ and SG $= 0.92$`, `$0.92\\;\\text{kg/m}^3$ and SG $= 0.92$`, `$920\\;\\text{kg/m}^3$ and SG $= 920$`, `$0.92\\;\\text{kg/m}^3$ and SG $= 920$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$\\rho = 46.0/50.0 = 0.92\\;\\text{g/cm}^3$, and multiplying by 1000 gives $920\\;\\text{kg/m}^3$. SG compares this with water's $1000\\;\\text{kg/m}^3$, so SG $= 0.92$ with no units. Writing $0.92\\;\\text{kg/m}^3$ skips the ×1000 conversion, and SG $= 920$ forgets to divide by water's density; the option with both values wrong makes both mistakes at once.`,
          },
          {
            question: `At a depth of $10\\;\\text{m}$ in a freshwater lake, the absolute pressure is about $2\\;\\text{atm}$. What is the absolute pressure at a depth of $30\\;\\text{m}$ in the same lake?`,
            options: [`About $6\\;\\text{atm}$`, `About $3\\;\\text{atm}$`, `About $4\\;\\text{atm}$`, `About $2\\;\\text{atm}$`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Each 10 m of water adds about 1 atm of gauge pressure, so 30 m adds 3 atm on top of the 1 atm already pressing on the surface: 4 atm absolute. Tripling the 2 atm to 6 atm treats the total pressure as proportional to depth, when only the $\\rho g h$ part is. 3 atm is the gauge pressure alone, and 2 atm would mean pressure stops rising with depth, though every extra metre adds the weight of another metre of water.`
          },
          {
            question: `Three open containers are filled with water to the same depth of $30\\;\\text{cm}$: a tall narrow cylinder, a wide shallow basin, and a vase whose walls flare outward toward the top. How do the pressures at the centre of each container's floor compare?`,
            options: [`Greatest in the wide basin, which holds the most water`, `Equal in all three, because depth and density decide it`, `Greatest in the narrow cylinder, focusing the weight`, `Least in the flared vase, whose walls carry some water`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$P = P_0 + \\rho g h$ contains only depth, density and $g$, so all three floors feel the same pressure. In the cylinder and the basin, the floor carries exactly the water above it, spread over its own area, so the pressure is $\\rho g h$ either way: the basin's extra water sits on a proportionally larger floor, and the narrow cylinder has less water on a smaller floor, so nothing is "focused". In the flared vase the sloping walls hold up the water above them (the walls push UP, not down), but the floor still sits under a column of depth $h$, so its pressure is not reduced.`,
          },
          {
            question: `A patient's blood pressure is $120/80\\;\\text{mmHg}$ at sea level, where atmospheric pressure is $760\\;\\text{mmHg}$. What is the absolute pressure in the brachial artery at the peak of systole (the 120 reading)?`,
            options: [`$120\\;\\text{mmHg}$`, `$640\\;\\text{mmHg}$`, `$760\\;\\text{mmHg}$`, `$880\\;\\text{mmHg}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Blood pressure is a gauge reading, the amount above atmospheric, so the absolute pressure is $760 + 120 = 880\\;\\text{mmHg}$. 120 mmHg treats the gauge reading as absolute, 640 mmHg subtracts the gauge reading instead of adding it, and 760 mmHg is atmospheric pressure alone.`
          }
        ]
      }
    },
    {
      id: 'fl1-instruments',
      type: 'text' as const,
      content: `### Barometers, Manometers and Blood Pressure

**Barometer (measures atmospheric pressure).** Fill a long tube with mercury, close it, and turn it upside down in a dish of mercury. The column falls until the pressure at the bottom of the column, $\\rho_{\\text{Hg}} g h$, matches the atmosphere pushing on the dish; the space above the mercury is nearly a vacuum, so the reading is absolute. At sea level $h = 760\\;\\text{mm}$, the origin of "760 mmHg". A water barometer would need a column 13.6 times taller, about $10.3\\;\\text{m}$, which is why mercury is used. At high altitude the air above is thinner and the column is shorter.

**Open-tube manometer (measures gauge pressure).** A U-shaped tube of liquid has one arm connected to the gas or vessel and the other arm open to the air. The liquid is pushed DOWN on the higher-pressure side, and the height difference $\\Delta h$ between the two surfaces gives $P - P_{\\text{atm}} = \\rho g \\Delta h$. Because the open arm already carries atmospheric pressure, the reading is a gauge pressure.

**Blood pressure.** A reading of "120/80" means a peak (systolic) pressure of 120 mmHg and a minimum (diastolic) pressure of 80 mmHg, both measured ABOVE atmospheric. The cuff is kept at heart level because blood is a fluid and obeys $\\rho g h$ too:

- In a standing adult, arteries in the feet sit about $1.2\\;\\text{m}$ below the heart, so (taking blood's density as about $1000\\;\\text{kg/m}^3$) their pressure is higher by roughly $\\rho g h = (1000)(10)(1.2) = 1.2 \\times 10^4\\;\\text{Pa} \\approx 90\\;\\text{mmHg}$.
- Arteries in the head, above the heart, have LOWER pressure than at heart level, for the same reason.
- An IV bag works by hydrostatics: hung above the arm, the column of fluid in the line makes the pressure at the needle higher than the pressure in the vein, so fluid flows in.

How pressure falls along the circulation as blood moves (because of resistance, not gravity) is Part 4 of this lesson, and the physiology is in the *Cardiovascular System* lesson.

### Pascal's Principle

**Pascal's principle:** a pressure change applied to an enclosed, incompressible fluid is transmitted undiminished to every part of the fluid and to the walls of its container.

**The hydraulic lift.** Two pistons of areas $A_1$ (small) and $A_2$ (large) sit on the same enclosed fluid at the same height. Pressing the small piston raises the pressure everywhere by the same amount, so

$$\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\quad\\Rightarrow\\quad F_2 = F_1\\frac{A_2}{A_1}$$

- **Force is multiplied** by the area ratio $A_2/A_1$.
- **Distance is divided** by the same ratio. The fluid volume pushed out of the small cylinder equals the volume entering the large one: $A_1 d_1 = A_2 d_2$, where $d$ is the distance each piston moves.
- **Work is conserved**: $F_1 d_1 = F_2 d_2$. A hydraulic lift, like a lever, trades distance for force and never creates energy.
- If the area ratio is given as a ratio of DIAMETERS (or radii), square it: double the diameter means four times the area.

Pascal's principle and $\\rho g h$ work together. Pushing on a piston raises the pressure everywhere by the same amount; points deeper in the fluid still have an extra $\\rho g h$ on top. Hydraulic brakes, dentists' chairs and syringes all rely on the same idea.`
    },
    {
      id: 'fl1-worked',
      type: 'text' as const,
      content: `### Worked Example — Hydraulic Lift

**Problem.** A mechanic pushes down with $100\\;\\text{N}$ on a piston of area $0.01\\;\\text{m}^2$. The output piston has area $0.1\\;\\text{m}^2$.

- **(a)** What pressure does the mechanic create in the fluid?
- **(b)** What force does the fluid exert on the large piston?
- **(c)** How far must the mechanic's piston move to raise the load $0.05\\;\\text{m}$?
- **(d)** How much work goes in, and how much comes out?

**(a) Pressure created.** $P = \\dfrac{F_1}{A_1} = \\dfrac{100}{0.01} = 10^4\\;\\text{Pa}$

**(b) Force on the large piston.** The same $P = 10^4\\;\\text{Pa}$ from (a) acts there: $F_2 = PA_2 = (10^4)(0.1) = 1000\\;\\text{N}$. A tenfold area ratio gives a tenfold force.

**(c) Distance.** The fluid volume pushed out equals the volume pushed in, $A_1 d_1 = A_2 d_2$, so $d_1 = d_2 \\dfrac{A_2}{A_1} = (0.05)(10) = 0.5\\;\\text{m}$.

**(d) Work check.** With $F_2 = 1000\\;\\text{N}$ from (b) and $d_1 = 0.5\\;\\text{m}$ from (c): in, $(100)(0.5) = 50\\;\\text{J}$; out, $(1000)(0.05) = 50\\;\\text{J}$. Force ×10, distance ÷10, work unchanged.

### Worked Example — Hanging an IV Bag

**Problem.** A bag of saline ($\\rho \\approx 1000\\;\\text{kg/m}^3$) hangs so that the fluid surface in the bag is $1.0\\;\\text{m}$ above the needle in a patient's arm. Use $g = 10\\;\\text{m/s}^2$ and $1\\;\\text{mmHg} \\approx 133\\;\\text{Pa}$.

- **(a)** With the line clamped and the fluid at rest, what is the gauge pressure at the needle?
- **(b)** What is that pressure in mmHg?
- **(c)** Pressure in a peripheral vein is only about 10 mmHg (gauge). Which way does fluid flow when the clamp opens?
- **(d)** Does a wider or fuller bag at the same height change the pressure at the needle?
- **(e)** What happens if the bag is lowered to $0.5\\;\\text{m}$, or dropped below the arm?

**(a) Gauge pressure at the needle.** $\\rho g h = (1000)(10)(1.0) = 1.0 \\times 10^4\\;\\text{Pa}$.

**(b) Convert.** $\\dfrac{10^4}{133} \\approx 75\\;\\text{mmHg}$.

**(c) Compare.** The needle pressure, about 75 mmHg from (b), is far above the vein's 10 mmHg, so when the clamp opens, saline flows into the vein.

**(d) What matters and what doesn't.** No. Only the HEIGHT of the fluid surface above the needle counts, so a wider or fuller bag at the same height gives the same pressure.

**(e) Moving the bag.** Lower the bag to $0.5\\;\\text{m}$ and the pressure halves to about 38 mmHg, still above venous pressure, so saline still flows in, more slowly. Drop the bag below the arm and the pressure at the needle falls below venous pressure, so blood backs up into the line.`
    },
    {
      id: 'fl1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: Instruments, Hydraulics & the Body** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a hydraulic jack, the output piston's DIAMETER is 5 times the input piston's diameter. What is the largest load the output piston can hold up when a $200\\;\\text{N}$ force is applied to the input piston?`,
            options: [`$1000\\;\\text{N}$`, `$200\\;\\text{N}$`, `$5000\\;\\text{N}$`, `$40\\;\\text{N}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Area scales with diameter squared, so the area ratio is $5^2 = 25$ and $F_2 = (200)(25) = 5000\\;\\text{N}$. 1000 N uses the diameter ratio without squaring it. 200 N misreads Pascal's principle: the PRESSURE is transmitted undiminished, not the force. 40 N divides by the ratio instead of multiplying.`
          },
          {
            question: `A mercury barometer reads $0.76\\;\\text{m}$ at sea level. If the same barometer were filled with water instead of mercury (SG $= 13.6$), about how tall would the column be?`,
            options: [`$10.3\\;\\text{m}$`, `$0.76\\;\\text{m}$`, `$0.056\\;\\text{m}$`, `$13.6\\;\\text{m}$`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Both columns must balance the same atmospheric pressure, so $\\rho_{\\text{Hg}} h_{\\text{Hg}} = \\rho_{w} h_{w}$ and $h_w = (13.6)(0.76) \\approx 10.3\\;\\text{m}$. Keeping $0.76\\;\\text{m}$ ignores the density difference, $0.056\\;\\text{m}$ divides by 13.6 when the less dense liquid needs a TALLER column, and $13.6\\;\\text{m}$ treats the specific gravity itself as the height.`
          },
          {
            question: `In a standing adult, mean arterial pressure at heart level is $95\\;\\text{mmHg}$ (gauge). Estimate the mean arterial pressure in an ankle artery $1.2\\;\\text{m}$ below the heart. Treat blood's density as $1000\\;\\text{kg/m}^3$, use $g = 10\\;\\text{m/s}^2$ and $1\\;\\text{mmHg} \\approx 133\\;\\text{Pa}$, and ignore pressure lost to flow.`,
            options: [`$95\\;\\text{mmHg}$`, `$5\\;\\text{mmHg}$`, `$90\\;\\text{mmHg}$`, `$185\\;\\text{mmHg}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The column of blood adds $\\rho g h = (1000)(10)(1.2) = 1.2 \\times 10^4\\;\\text{Pa} \\approx 90\\;\\text{mmHg}$, so the ankle pressure is about $95 + 90 = 185\\;\\text{mmHg}$. 95 mmHg ignores hydrostatics; 5 mmHg subtracts the column, which would apply to a point ABOVE the heart; 90 mmHg is the hydrostatic increase alone, forgetting to add the 95 mmHg already present at heart level.`
          },
          {
            question: `A nurse presses with the same thumb force on the plungers of two syringes. The narrow syringe's plunger has half the DIAMETER of the wide syringe's plunger. How does the fluid pressure in the narrow syringe compare with that in the wide one?`,
            options: [`Twice as high in the narrow syringe`, `Four times as high in the narrow syringe`, `Sixteen times as high in the narrow syringe`, `The same in both, as forces are equal`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `$P = F/A$, and half the diameter means one-quarter of the area, so the same force produces four times the pressure in the narrow syringe. "Twice as high" forgets to square the diameter ratio, "sixteen times" uses the fourth power that belongs to Poiseuille's law for flow (Part 4 of this lesson), not to pressure on a piston, and equal forces give equal pressures only on equal areas.`,
          }
        ]
      }
    },
    {
      id: 'fl1-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Density and specific gravity.** $\\rho = m/V$; water is $1000\\;\\text{kg/m}^3$, and $SG = \\rho/\\rho_{\\text{water}}$ has no units (mercury 13.6).
- **Pressure grows with depth.** $P = P_0 + \\rho g h$ depends on depth, never container shape: about +1 atm per 10 m of water.
- **Gauge versus absolute.** Barometers read absolute pressure; manometers and blood pressure read gauge; absolute = gauge + 760 mmHg.
- **Pascal's principle.** $F_1/A_1 = F_2/A_2$: a hydraulic lift multiplies force, divides distance and conserves work.

**Common traps**

- **Gauge or absolute.** Check which one is asked: absolute pressure is the gauge reading PLUS atmospheric pressure.
- **Wider container, more pressure.** A wider or fuller container adds nothing at the same depth; only $\\rho$, $g$ and $h$ count.
- **Scaling the total pressure.** Doubling the depth doubles only the $\\rho g h$ part, not the total $P$, since $P_0$ stays fixed.
- **Pistons and diameters.** Pascal transmits PRESSURE, not force, and a diameter ratio must be squared to give the area ratio.`
    }
  ]
}
