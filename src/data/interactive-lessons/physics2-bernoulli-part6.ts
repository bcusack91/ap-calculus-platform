export const physics2BernoulliPart6Data = {
  topicSlug: 'bernoullis-equation',
  sections: [
    {
      id: 'be6-intro',
      type: 'text' as const,
      content: `
# 🔧 Measurement Devices & Real-World Systems

**Part 6 of 7 — Bernoulli in Practice**

Bernoulli's equation powers many practical devices for measuring speed, flow, and pressure. Let's see how engineers apply the physics.
      `
    },
    {
      id: 'be6-pitot-tube',
      type: 'text' as const,
      content: `
## Pitot Tube (Airspeed Indicator)

Every airplane has a **Pitot tube** — a forward-facing tube that measures airspeed.

### How It Works

- **Forward opening:** Air is brought to rest (stagnation) → measures total pressure $P_0 = P + \\frac{1}{2}\\rho v^2$
- **Side ports:** Measure static pressure $P$ (unaffected by airflow)
- **Difference:** $P_0 - P = \\frac{1}{2}\\rho v^2$

$$v = \\sqrt{\\frac{2(P_0 - P)}{\\rho}}$$

### Why Pitot Tubes Are Critical

Pitot tubes are essential for flight safety. If they become blocked (ice, insects), the airspeed reading fails — this has caused aviation accidents. Modern planes have heated Pitot tubes and redundant systems.
      `
    },
    {
      id: 'be6-venturi-meter',
      type: 'text' as const,
      content: `
## Venturi Meter (Flow Measurement)

A **Venturi meter** measures flow rate using the pressure drop in a constriction.

### Combining Continuity + Bernoulli

At the wide section (1) and narrow section (2):

**Continuity:** $v_2 = (A_1/A_2)v_1$

**Bernoulli:** $P_1 - P_2 = \\frac{1}{2}\\rho(v_2^2 - v_1^2)$

Substituting:

$$P_1 - P_2 = \\frac{1}{2}\\rho v_1^2 \\left[\\left(\\frac{A_1}{A_2}\\right)^2 - 1\\right]$$

$$v_1 = \\sqrt{\\frac{2(P_1 - P_2)}{\\rho\\left[(A_1/A_2)^2 - 1\\right]}}$$

Then: $Q = A_1 v_1$

### Advantages
- No moving parts
- Very reliable
- Works for any incompressible fluid
      `
    },
    {
      id: 'be6-devices-quiz',
      type: 'multiple-choice' as const,
      content: `
**Measurement Devices Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A Pitot tube reading shows stagnation pressure of 103 kPa and static pressure of 101 kPa. With $\\rho_{\\text{air}} = 1.2$ kg/m³, the airspeed is:',
            options: [
              '18 m/s',
              '41 m/s',
              '58 m/s',
              '82 m/s'
            ],
            correctAnswer: 2,
            explanation: '$v = \\sqrt{2(103000 - 101000)/1.2} = \\sqrt{2(2000)/1.2} = \\sqrt{3333} = 57.7 ≈ 58$ m/s (about 208 km/h).'
          },
          {
            question: 'In a Venturi meter, the pressure is measured using:',
            options: [
              'A thermometer',
              'Manometer tubes at the wide and narrow sections',
              'A scale',
              'Sound waves'
            ],
            correctAnswer: 1,
            explanation: 'Manometer tubes (often a U-tube with liquid) are connected to ports at the wide and narrow sections. The height difference in the manometer liquid indicates the pressure difference.'
          }
        ]
      }
    },
    {
      id: 'be6-real-world',
      type: 'text' as const,
      content: `
## Real-World Bernoulli Systems

### Water Supply in Buildings

Water pressure at the street main is typically $\\sim 400$ kPa. As water rises through the building:
- Pressure decreases by $\\rho g h$ per meter of height
- Flow through narrow pipes increases speed → further pressure drop

At floor $n$ (height $h$):
$$P_n = P_{\\text{main}} - \\rho g h - \\frac{1}{2}\\rho(v_n^2 - v_{\\text{main}}^2)$$

Tall buildings need pumps to maintain adequate pressure on upper floors!

### Medical Applications

**IV Drip:** The IV bag is raised above the patient. Bernoulli explains the flow:
- Point 1: Fluid surface in bag (height $h$, $v \\approx 0$, $P = P_{\\text{atm}}$)  
- Point 2: Needle tip in vein ($h = 0$, pressure = venous pressure)

$$P_{\\text{atm}} + \\rho g h = P_{\\text{vein}} + \\frac{1}{2}\\rho v^2$$

The bag must be high enough that $\\rho g h$ overcomes the venous pressure.

### Fire Hydrants

Fire trucks connect to hydrants ($P \\sim 300$ kPa). The nozzle converts pressure energy to kinetic energy:

$$v = \\sqrt{\\frac{2P}{\\rho}} = \\sqrt{\\frac{2(300{,}000)}{1000}} = 24.5 \\text{ m/s}$$
      `
    },
    {
      id: 'be6-building-drill',
      type: 'input-boxes' as const,
      content: `
**Building Water Pressure** ($\\rho = 1000$ kg/m³, $g = 10$ m/s²)

Street main pressure: 400,000 Pa. The pipe (constant area) goes up to the 10th floor, 30 m above street level. (Same pipe area, so $v$ stays constant.)

1) Pressure loss due to height (in Pa)
2) Pressure at the 10th floor (in Pa)
3) Maximum building height where water pressure reaches 0 gauge (in m)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['300000', '100000', '40'],
        hint1: '$\\Delta P = \\rho g h = (1000)(10)(30)$.',
        hint2: '$P_{10} = P_{\\text{main}} - \\rho g h$.',
        hint3: '$P = 0$ when $\\rho g h_{\\text{max}} = P_{\\text{main}}$.',
        explanation: '$\\Delta P = 300{,}000$ Pa. $P_{10} = 400000 - 300000 = 100{,}000$ Pa (just atmospheric!). $h_{\\text{max}} = 400000/(1000 \\times 10) = 40$ m. Above 40 m, you\'d need a pump.'
      }
    },
    {
      id: 'be6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'An IV bag is at height $h$ above the patient. If the bag is raised higher:',
            options: [
              'Flow rate increases (more pressure head)',
              'Flow rate decreases',
              'Flow rate stays the same',
              'The fluid flows backward'
            ],
            correctAnswer: 0,
            explanation: 'Higher $h$ → more gravitational potential energy → greater pressure driving the flow → faster drip rate. Nurses adjust the IV bag height to control the flow rate.'
          },
          {
            question: 'A Pitot tube is used in both airplanes and weather stations. If the same Pitot tube reads the same pressure difference at altitude (where $\\rho_{\\text{air}}$ is lower), the true airspeed is:',
            options: [
              'The same as at sea level',
              'Higher than indicated (lower density → need more speed for same dynamic pressure)',
              'Lower than indicated',
              'Zero'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1}{2}\\rho v^2 = \\Delta P$. Same $\\Delta P$ with lower $\\rho$ means $v$ must be higher. At altitude, the "true airspeed" is faster than the "indicated airspeed." Pilots must correct for this!'
          }
        ]
      }
    }
  ]
}
