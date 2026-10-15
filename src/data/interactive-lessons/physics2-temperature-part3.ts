export const physics2TemperaturePart3Data = {
  topicSlug: 'temperature-thermal-expansion',
  sections: [
    {
      id: 'te3-intro',
      type: 'text' as const,
      content: `
# 💨 Gas Pressure from Molecular Collisions

**Part 3 of 7 — Where Pressure Comes From**

A gas pushes on every wall of its container, yet no single molecule pushes steadily. Pressure is what you get when an enormous number of tiny, brief collisions are averaged together. AP Physics 2 asks you to explain pressure in exactly these terms: atoms, collisions, momentum, and force per area.
      `
    },
    {
      id: 'te3-collisions',
      type: 'text' as const,
      content: `
## Pressure Is Many Tiny Impulses

### One Collision

Picture one atom of mass $m$ moving straight toward a wall with speed $v$. It bounces off elastically, so it leaves with the same speed in the opposite direction. Its momentum changes from $+mv$ to $-mv$:

$$|\\Delta p| = mv - (-mv) = 2mv$$

By Newton's third law, the wall receives an impulse of the same size, directed outward. If the atom hits at an angle, only the velocity component **perpendicular** to the wall reverses, so only that component contributes to the push on the wall.

### Many Collisions

Each impulse lasts a tiny time, but trillions of atoms strike every square centimeter each nanosecond. The average force on a wall is the momentum delivered per second:

$$F_{\\text{avg}} = (\\text{collisions per second}) \\times (\\text{momentum change per collision})$$

Pressure is that perpendicular force spread over the area:

$$P = \\frac{F_\\perp}{A}$$

The SI unit is the pascal: $1 \\text{ Pa} = 1 \\text{ N/m}^2$. Atmospheric pressure is about $1.0 \\times 10^5$ Pa.

### Pressure Exists Inside the Gas, Too

Atoms collide with **each other**, not just with the walls. A small pressure sensor placed anywhere inside the gas is struck from all sides and reads the same pressure as the wall. Pressure is a property of the whole gas, not only of its boundary.

### Collisions Between Atoms

Two atoms that collide obey conservation of momentum, and for an ideal gas the collisions are elastic, so kinetic energy is conserved too. For example, when two identical atoms collide head-on, they simply exchange velocities. Faster atoms tend to give energy to slower atoms, which is why a gas settles into a stable spread of speeds.
      `
    },
    {
      id: 'te3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Collisions and Pressure Check** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'An atom of mass $m$ moving at speed $v$ strikes a wall head-on and rebounds elastically. The magnitude of its change in momentum is:',
            options: [
              '$mv$',
              '$2mv$',
              '$\\frac{1}{2}mv$',
              '$0$'
            ],
            correctAnswer: 1,
            explanation: 'The momentum goes from $+mv$ to $-mv$, a change of $2mv$. A change of $mv$ would describe an atom that stops at the wall, and zero would ignore that momentum is a vector whose direction reversed.'
          },
          {
            question: 'Why does a small sensor placed in the middle of a gas, far from any wall, still measure a pressure?',
            options: [
              'Atoms strike it from every side',
              'The walls transmit their pressure to the center through gravity',
              'Atoms are pulled toward the center by their mutual attraction',
              'The sensor reads zero until it is moved against a wall'
            ],
            correctAnswer: 0,
            explanation: 'Atoms move randomly everywhere in the gas, so they strike the sensor from all directions and produce a pressure there. Gravity and intermolecular attraction are negligible in the ideal gas model, and pressure is not limited to the boundary.'
          },
          {
            question: 'A gas in a rigid, sealed container is heated. Which change at the molecular level explains why the pressure rises?',
            options: [
              'Atoms hit the walls more often and harder',
              'Atoms grow larger and take up more of the volume',
              'Atoms attract the walls more strongly when hot',
              'Heating adds more atoms to the sealed container'
            ],
            correctAnswer: 0,
            explanation: 'Higher temperature means faster atoms. Faster atoms strike the walls more often and deliver a larger momentum change each time, so the average force per area grows. Atom size and number do not change in a sealed rigid container.'
          }
        ]
      }
    },
    {
      id: 'te3-worked-example',
      type: 'text' as const,
      content: `
## Worked Example: From Impulses to Pressure

Nitrogen molecules ($m = 4.7 \\times 10^{-26}$ kg) move at $500$ m/s perpendicular to a wall of area $1.0 \\text{ m}^2$. Suppose $2.0 \\times 10^{27}$ molecules strike the wall each second, each rebounding elastically.

**Step 1 — Momentum change per collision:**
$$|\\Delta p| = 2mv = 2(4.7 \\times 10^{-26})(500) = 4.7 \\times 10^{-23} \\text{ kg}\\cdot\\text{m/s}$$

**Step 2 — Average force (momentum delivered per second):**
$$F = (2.0 \\times 10^{27})(4.7 \\times 10^{-23}) = 9.4 \\times 10^{4} \\text{ N}$$

**Step 3 — Pressure:**
$$P = \\frac{F}{A} = \\frac{9.4 \\times 10^{4}}{1.0} = 9.4 \\times 10^{4} \\text{ Pa} \\approx 94 \\text{ kPa}$$

That is close to atmospheric pressure, which shows how a huge number of tiny impulses adds up to a large, steady push.

## What Raises the Pressure?

| Change | Effect on collisions | Effect on $P$ |
|---|---|---|
| Faster atoms (higher $T$) | More hits per second **and** more momentum per hit | Increases |
| More atoms in the same volume | More hits per second | Increases |
| Same atoms squeezed into less volume | More hits per second on each square meter | Increases |
| Heavier atoms at the same $T$ | Fewer hits per second, more momentum per hit | No change |

The last row surprises many students. At the same temperature, heavier atoms move more slowly, so they hit less often, but each hit carries more momentum. The two effects cancel, because both depend on the same average kinetic energy.
      `
    },
    {
      id: 'te3-impulse-drill',
      type: 'input-boxes' as const,
      content: `
**Collision-to-Pressure Drill** 📐

Argon atoms ($m = 6.6 \\times 10^{-26}$ kg) move at $400$ m/s perpendicular to a wall of area $0.50 \\text{ m}^2$ and rebound elastically. Each second, $1.5 \\times 10^{27}$ atoms strike the wall.

1) Momentum change per collision, in units of $10^{-23}$ kg·m/s (2 significant figures)

2) Average force on the wall, in units of $10^{4}$ N (2 significant figures)

3) Pressure on the wall, in kPa (2 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5.3', '7.9', '160'],
        hint1: '$|\\Delta p| = 2mv = 2(6.6 \\times 10^{-26})(400)$.',
        hint2: 'Force = (collisions per second) × (momentum change per collision) $= (1.5 \\times 10^{27})(5.28 \\times 10^{-23})$.',
        hint3: '$P = F/A$, then divide by 1,000 to convert Pa to kPa.',
        explanation: '1) $2(6.6 \\times 10^{-26})(400) = 5.28 \\times 10^{-23} \\approx 5.3 \\times 10^{-23}$ kg·m/s. 2) $F = (1.5 \\times 10^{27})(5.28 \\times 10^{-23}) = 7.92 \\times 10^4 \\approx 7.9 \\times 10^4$ N. 3) $P = 7.92 \\times 10^4 / 0.50 = 1.58 \\times 10^5$ Pa $\\approx 160$ kPa.'
      }
    },
    {
      id: 'te3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'The number of gas atoms in a sealed, rigid container is doubled while the temperature is held constant. The pressure:',
            options: [
              'Becomes twice as large',
              'Becomes half as large',
              'Becomes four times as large',
              'Stays the same'
            ],
            correctAnswer: 0,
            explanation: 'At the same temperature each collision delivers the same average momentum, but twice as many atoms means twice as many collisions per second, so the pressure doubles. It would quadruple only if the speed also doubled.'
          },
          {
            question: 'Two identical containers at the same temperature hold equal numbers of atoms: helium in one and argon (ten times the mass) in the other. Compared with the helium, the argon pressure is:',
            options: [
              'The same, since each particle has the same average kinetic energy',
              'Ten times larger, since each argon impact carries more momentum',
              'Smaller, since the heavier argon atoms move more slowly',
              'About three times larger, from the square root of the masses'
            ],
            correctAnswer: 0,
            explanation: 'Argon atoms move more slowly, so they hit the walls less often, but each hit carries more momentum. The two effects cancel exactly because pressure depends on the average kinetic energy, which is set by temperature alone.'
          }
        ]
      }
    }
  ]
}
