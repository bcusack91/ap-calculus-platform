import type { LessonData } from './registry'

export const fluidsMcatPart4: LessonData = {
  topicSlug: 'mcat-physics-mechanics-fluids-mcat',
  sections: [
    {
      id: 'fl4-intro',
      type: 'text' as const,
      content: `# Fluids

**Part 4 of 4 — Viscosity, Poiseuille & Blood Flow**

Part 3 of this lesson assumed a fluid with no internal friction. Real fluids, blood included, have friction, and that friction is why the heart has to keep pumping.

### Viscosity: When Fluids Are Real

**Viscosity** $\\eta$ (Greek "eta") is a fluid's internal friction: its resistance to layers of fluid sliding past one another. Its SI unit is the pascal-second (Pa·s). Honey is far more viscous than water.

- Blood is about 3 to 4 times as viscous as water. Its viscosity rises with **hematocrit**, the fraction of blood volume occupied by red cells: polycythemia (too many red cells) thickens blood, and anemia (too few) thins it.
- A liquid's viscosity falls as it warms: warm syrup pours easily.
- **Viscosity costs energy.** Friction between layers turns mechanical energy into heat, so pressure falls steadily along even a uniform, horizontal tube. Bernoulli's equation cannot predict that drop, because it assumes no energy is lost. A pressure difference is needed just to keep a viscous fluid moving at constant speed.
- **Velocity profile.** In smooth flow through a tube, the fluid touching the wall is at rest and the fluid at the centre moves fastest, giving a bullet-shaped (parabolic) profile. The "speed" in $Q = Av$ is the average across the tube.

**Laminar vs. turbulent flow**

| | Laminar | Turbulent |
|---|---|---|
| Pattern | smooth layers that do not mix | chaotic swirls (eddies) |
| Energy loss | lower; flow is proportional to the pressure difference | higher; much more pressure is needed for the same flow |
| Sound | silent | noisy |

- Turbulence becomes more likely with **higher speed**, **larger diameter**, **higher density** and **lower viscosity**. These four factors combine into one dimensionless number, the **Reynolds number** $Re = \\rho v D/\\eta$, where $D$ is the tube diameter: the larger $Re$, the more likely turbulence, and flow turns turbulent above a critical value.
- Blood flow is mostly laminar. Turbulence appears where blood moves fast: past a narrowed valve or vessel, in the aorta during heavy exercise, and in severe anemia (thin blood plus a high cardiac output). It is heard with a stethoscope as a **murmur** over the heart or a **bruit** (a whooshing sound) over an artery.
- A blood-pressure cuff uses this. When the cuff pressure lies between systolic and diastolic pressure, the squeezed artery snaps open briefly with each beat and the jet is turbulent, making tapping sounds. As the cuff deflates, the sounds begin when cuff pressure falls to systolic and disappear when it falls below diastolic, when flow becomes smooth again.
- Neither Bernoulli's equation nor Poiseuille's law holds for turbulent flow.

<!-- yield:low -->
- In a straight tube, flow usually turns turbulent above $Re \\approx 2000$. The cuff sounds are called Korotkoff sounds.
<!-- /yield -->

### Poiseuille's Law

For laminar flow of a viscous fluid through a long, rigid, cylindrical tube of radius $r$ and length $L$:

$$Q = \\frac{\\pi \\, \\Delta P \\, r^4}{8 \\eta L}$$

where $\\Delta P$ is the pressure difference between the tube's ends (the driving pressure). Written like Ohm's law, $Q = \\Delta P / R$, with the tube's **resistance**

$$R = \\frac{8\\eta L}{\\pi r^4}$$

| Change (all else fixed) | Resistance $R$ | Flow $Q$ at fixed $\\Delta P$ |
|---|---|---|
| radius doubled | ÷16 | ×16 |
| radius halved | ×16 | ÷16 |
| length doubled | ×2 | ÷2 |
| viscosity doubled | ×2 | ÷2 |
| $\\Delta P$ doubled | unchanged | ×2 |

- **The fourth power of the radius** is the tested fact. A radius cut of only about 16% halves the flow, because $0.84^4 \\approx 0.5$.
- If the flow must stay the same (the heart maintaining output), the driving pressure must rise in proportion to the resistance.
- Do not confuse Poiseuille with continuity. Continuity relates speed and area when $Q$ is FIXED; Poiseuille tells you what $Q$ will BE for a given pressure difference and tube.
- Assumptions: laminar, steady flow of a fluid with constant viscosity through a rigid tube. Vessels flex and blood is a suspension, but the $r^4$ conclusion holds well enough to be the MCAT's favourite.`
    },
    {
      id: 'fl4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Practice: Viscosity & Poiseuille's Law** 🎯`,
      exercise: {
        questions: [
          {
            question: `A clinician swaps a catheter for one of the same length with twice the internal radius, keeping the driving pressure the same. Assuming laminar flow, by what factor does the flow rate change?`,
            options: [`$2$`, `$4$`, `$16$`, `$8$`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Poiseuille: $Q \\propto r^4$, and $2^4 = 16$. A factor of 4 applies the $r^2$ of area (continuity thinking), 2 treats flow as proportional to radius, and 8 uses $r^3$. The fourth power is why a slightly wider catheter delivers fluid so much faster.`
          },
          {
            question: `A patient's polycythemia doubles the viscosity of their blood. For blood flow through a vessel of unchanged length and radius to stay the same, the pressure difference along the vessel must:`,
            options: [`Stay the same`, `Double`, `Rise 16-fold`, `Fall by half`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Resistance $R = 8\\eta L/(\\pi r^4)$ is proportional to viscosity, so doubling $\\eta$ doubles $R$, and $\\Delta P = QR$ must double to keep $Q$ constant. The 16-fold factor belongs to the radius, not the viscosity. "Stay the same" would let the flow halve, and "fall by half" has the effect of thicker blood backwards.`
          },
          {
            question: `Patients with severe anemia often have a soft heart murmur even though their valves are normal. Which pair of changes in the blood best explains the turbulence?`,
            options: [`Higher viscosity and sluggish flow`, `Higher viscosity and faster flow`, `Lower viscosity and sluggish flow`, `Lower viscosity and faster flow`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Anemia means a low hematocrit, so the blood is less viscous, and the heart raises cardiac output to make up for the reduced oxygen-carrying capacity, so blood moves faster. Low viscosity and high speed both push flow toward turbulence. Higher viscosity damps turbulence, and slower flow is less likely to become turbulent, so the other three pairings each contain a change that works against a murmur.`
          },
          {
            question: `Saline flows steadily through a long, horizontal IV tube of uniform diameter, and gauges show the pressure falling steadily along its length. What accounts for the drop?`,
            options: [`Viscous friction, described by Poiseuille's law`, `Rising flow speed, described by Bernoulli's equation`, `Falling flow rate, described by the continuity equation`, `Gravity, described by the hydrostatic term $\\rho g h$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `In a uniform tube the speed is the same everywhere, so Bernoulli predicts no pressure change at all; the steady loss is energy turned to heat by viscous friction, which Poiseuille's law describes. The flow rate cannot fall along a leak-free tube (continuity keeps it constant), and a horizontal tube has no height change for $\\rho g h$ to act on.`
          }
        ]
      }
    },
    {
      id: 'fl4-circulation',
      type: 'text' as const,
      content: `### The Circulation as a Fluids Problem

The MCAT rarely asks about pipes; it asks about blood vessels. The physiology is in Part 2 of the *Cardiovascular System* lesson; here is the physics behind it.

- **$Q = \\Delta P/R$ for the whole circuit.** For the systemic circulation, $Q$ is the cardiac output (CO, about 5 L/min at rest), $\\Delta P$ is the mean arterial pressure (MAP, the average pressure in the aorta, about 93 mmHg) minus the near-zero pressure in the right atrium, and $R$ is the total peripheral resistance (TPR) of all the systemic vessels. So $MAP \\approx CO \\times TPR$.
- **Series and parallel.** Blood passes through vessel types in SERIES (artery, arteriole, capillary, venule, vein): their resistances add, and the same flow $Q$ passes through each level. The organs branch off the aorta in PARALLEL: $1/R_{\\text{total}} = 1/R_1 + 1/R_2 + \\dots$, so the total is lower than any single organ's resistance. Opening more beds lowers TPR; closing or removing one raises it.
- **Total cross-sectional area sets speed.** Continuity applies to the SUMMED area at each level (worked in Part 3 of this lesson). Each capillary is microscopic, but there are billions of them, so the capillaries have by far the largest total area and the slowest blood (giving time for exchange). The aorta has the smallest total area and the fastest blood, and blood speeds up again as veins merge.
- **Where pressure falls.** The largest pressure drop is across the **arterioles** (from about 90 to about 35 mmHg). Each capillary is narrower than an arteriole, but so many capillaries sit in parallel that their combined resistance is lower.
- **Why radius control is so powerful.** Arteriole walls contain smooth muscle, and because $R \\propto 1/r^4$, a small change in radius makes a large change in resistance. Constricting one organ's arterioles also diverts flow to the other parallel beds.
- **Viscosity counts too.** A higher hematocrit raises $\\eta$, raising resistance and the heart's workload.
- **Gravity still applies.** Standing adds $\\rho g h$ to pressures below the heart, as in Part 1 of this lesson.
- **Air in the lungs.** Airflow obeys the same $Q = \\Delta P/R$ logic: the pressure difference between the alveoli and the atmosphere drives air through the airways, and airway radius dominates resistance through $r^4$. Narrowing of the airways in asthma therefore sharply cuts airflow. Passages supply the details; reason with $r^4$.

<!-- yield:low -->
- In the lungs, the medium-sized bronchi (not the tiniest airways) have the highest total resistance, for the same parallel-numbers reason. Blood's apparent viscosity also falls in very narrow vessels (the Fåhræus–Lindqvist effect).
<!-- /yield -->

### Grading a Stenosis: Which Law Applies?

A **stenosis** is an abnormal narrowing of a vessel or valve. Three laws answer three different questions about it.

| Question | Law | What the stenosis does |
|---|---|---|
| How fast is the blood? | continuity (flow fixed) | faster: $v \\propto 1/A$ |
| What is the pressure in the narrow part? | Bernoulli | lower: the kinetic term grows |
| How much flow gets through for a given driving pressure? | Poiseuille | less: $R \\propto 1/r^4$ |

- **Continuity** applies whenever the flow is known or assumed unchanged, as in a mild stenosis where the body maintains flow.
- **Bernoulli** fits a SHORT narrowing, where the speed changes quickly and friction in the brief segment is small. It explains the pressure dip in the jet. Downstream, the jet breaks into turbulence, which causes the bruit and wastes energy, so the pressure does not fully recover.
- **Poiseuille** fits a LONG narrowing, or any question about whether flow can be maintained at a fixed driving pressure. A severe or long stenosis raises resistance steeply, and flow falls.
- **The reverse case: an aneurysm** (an abnormal widening of an artery). Continuity says blood slows in the wider segment; Bernoulli says slower blood means higher pressure on the wall there; that pressure stretches the wall further, a vicious cycle that lets an aneurysm keep growing.
- They do not contradict each other. Continuity assumes $Q$ stays fixed; Poiseuille tells you what it costs (a larger $\\Delta P$) to keep $Q$ fixed, or how far $Q$ falls if $\\Delta P$ cannot rise.

Clinicians measure the jet speed with Doppler ultrasound; the wave physics behind that is in the *Waves & Sound* lesson.

### Passage Strategy: Pick the Regime First

| Regime | Clues in the passage | Tools |
|---|---|---|
| Static | nothing flowing; depth, floating, pistons, manometers | $P = P_0 + \\rho g h$, Pascal, Archimedes |
| Ideal flow | "ideal" or "non-viscous" fluid; short constrictions; speeds and pressures | $Q = Av$, continuity, Bernoulli, Torricelli |
| Viscous flow | long tubes or vessels; viscosity given; pressure falling along a uniform tube | Poiseuille, $Q = \\Delta P/R$, series and parallel |

Then ask three follow-up questions: a single tube or a branching network (use total area)? Is the flow fixed, or the driving pressure? Laminar, or turbulent (where neither equation applies)?`
    },
    {
      id: 'fl4-worked',
      type: 'text' as const,
      content: `### Worked Example — Grading a Stenosis

**Problem.** A carotid ultrasound shows peak blood speed rising from $60\\;\\text{cm/s}$ upstream to $240\\;\\text{cm/s}$ inside a short stenosis. Take blood's density as $1000\\;\\text{kg/m}^3$ and $1\\;\\text{mmHg} \\approx 133\\;\\text{Pa}$.

- **(a)** By how much has the vessel's radius (and diameter) been reduced?
- **(b)** How much lower is the pressure in the jet, in mmHg?
- **(c)** If the narrowing were long rather than short, how would each centimetre of it compare in resistance with a normal centimetre of the vessel?
- **(d)** What happens to the blood just beyond the stenosis, and how is it detected?

**(a) Continuity, run backwards.** At roughly constant flow, a 4-fold rise in speed means the area has fallen to one-quarter ($A \\propto 1/v$). Since $A \\propto r^2$, the radius is HALVED: a 50% reduction in diameter.

**(b) Bernoulli for the pressure dip.** In SI units the speeds are $0.6$ and $2.4\\;\\text{m/s}$:

$$\\Delta P = \\tfrac{1}{2}\\rho(v_2^2 - v_1^2) = \\tfrac{1}{2}(1000)(5.76 - 0.36) = 500 \\times 5.4 = 2700\\;\\text{Pa}$$

That is $2700/133 \\approx 20\\;\\text{mmHg}$ lower in the jet.

**(c) Poiseuille's warning.** With the radius halved, from (a), and $R \\propto 1/r^4$, each centimetre would have $2^4 = 16$ times the resistance of a normal centimetre of the vessel. "Half the diameter" sounds mild; to a viscous fluid it is severe.

**(d) Downstream.** The fast jet becomes turbulent beyond the stenosis, and the turbulence is heard as a bruit.`
    },
    {
      id: 'fl4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Practice: The Circulation & Passage Reasoning** 🎯`,
      exercise: {
        questions: [
          {
            question: `Each capillary is narrower than an arteriole, yet the largest drop in blood pressure in the systemic circulation occurs across the arterioles. Which statement best explains this?`,
            options: [`Capillaries are so numerous in parallel that their combined resistance is lower`, `Each capillary is wider than an arteriole, so it offers less resistance`, `More blood passes through the arterioles each second than the capillaries`, `Blood crosses the capillaries fastest, so friction has little time to act`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Billions of capillaries in parallel give a combined resistance lower than that of the arterioles, which therefore take the largest share of the pressure drop. Capillaries are narrower than arterioles, not wider. The same flow passes through every series level each second, so the arterioles cannot carry more. And capillary blood is the SLOWEST in the circulation, not the fastest.`
          },
          {
            question: `A passage models blood moving slowly through a long, narrow tube with viscous losses. It asks what happens to the flow rate if the tube's length is doubled while the driving pressure stays the same. Which approach and result are correct?`,
            options: [`Bernoulli's equation; the flow rate is unchanged`, `Poiseuille's law; the flow rate is halved`, `Bernoulli's equation; the flow rate is halved`, `Poiseuille's law; the flow rate is unchanged`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Slow flow in a long tube with viscous losses is the viscous regime, so Poiseuille applies: $Q = \\pi \\Delta P r^4/(8\\eta L)$ is proportional to $1/L$, and doubling the length halves the flow. Bernoulli ignores viscosity and contains no length term, so it cannot predict any change, let alone a halving. Saying Poiseuille predicts no change misses the $L$ in its denominator.`,
          },
          {
            question: `After a leg amputation, one parallel vascular bed no longer exists. If cardiac output is unchanged, how do total peripheral resistance (TPR) and mean arterial pressure (MAP) change?`,
            options: [`Both go down`, `TPR goes down, MAP goes up`, `TPR goes up, MAP goes down`, `Both go up`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Parallel resistances combine to a total LOWER than any one branch, so removing a branch raises the total: TPR rises. With $MAP \\approx CO \\times TPR$ and CO unchanged, MAP rises too. Saying TPR goes down treats the beds as if they were in series, where removing one would lower the total, and any pairing with opposite changes in TPR and MAP contradicts $MAP \\approx CO \\times TPR$ at fixed CO.`
          }
        ]
      }
    },
    {
      id: 'fl4-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- **Viscosity costs pressure.** Internal friction makes pressure fall along even a uniform tube, a drop Bernoulli cannot see.
- **Poiseuille's fourth power.** $Q = \\pi\\Delta P r^4/(8\\eta L)$ and $R = 8\\eta L/(\\pi r^4)$: double the radius, 16 times the flow.
- **Circulation as a circuit.** $MAP \\approx CO \\times TPR$; parallel beds keep TPR low, and the arterioles take the largest pressure drop.
- **Grading a stenosis.** Faster (continuity), lower jet pressure (Bernoulli), higher resistance (Poiseuille), then a turbulent bruit.

**Common traps**

- **Fast capillary blood.** Capillary blood is the SLOWEST in the circulation, because the capillaries' TOTAL area is the largest.
- **Squared versus fourth power.** Use $r^2$ for speed at fixed flow (continuity) and $r^4$ for flow at fixed pressure (Poiseuille).
- **Bernoulli in long vessels.** A long, viscous vessel loses pressure to friction, so Poiseuille applies there, not Bernoulli.
- **Parallel as series.** Parallel beds total less than any one bed, so removing a bed RAISES TPR rather than lowering it.

<!-- yield:low -->
**Low-yield extras**

- the critical Reynolds number (about 2000); the Korotkoff name; airway resistance peaking in the medium bronchi; the Fåhræus–Lindqvist effect.
<!-- /yield -->

**Next up:** the *Waves & Sound* lesson, which covers periodic motion, standing waves, decibels, the Doppler effect and ultrasound.`
    }
  ]
}
