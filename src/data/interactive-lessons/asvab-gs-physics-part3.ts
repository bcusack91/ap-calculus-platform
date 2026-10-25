export const asvabGsPhysicsPart3Data = {
  topicSlug: 'asvab-gs-physics',
  sections: [
    {
      id: 'gsp3-intro',
      type: 'text' as const,
      content: `# ⚡ Physics: Motion, Energy and Waves

**Part 3 of 7 — Work, Energy, Power and Heat**

### Work

In physics, **work** is done only when a force moves something **in the direction of the force**:

$$W = F \\times d$$

Force in newtons times distance in meters gives work in **joules (J)**.

**Example 1.** You push a crate with 50 N of force for 4 m. Work = 50 × 4 = **200 J**.

**Example 2.** You hold a heavy box perfectly still for a minute. Your arms get tired, but the box does not move, so the work done **on the box** is **zero**.

### Two kinds of mechanical energy

| | **Kinetic energy (KE)** | **Potential energy (PE)** |
|:---|:---|:---|
| What it is | Energy of **motion** | **Stored** energy of position |
| Formula | $KE = \\frac{1}{2}mv^2$ | $PE = mgh$ (gravitational) |
| Grows with | mass and speed (speed counts **squared**) | mass and height |
| Example | A moving truck | A rock at the edge of a cliff; a stretched spring |

**Example 3.** A 2 kg ball moving at 3 m/s has $KE = \\frac{1}{2} \\times 2 \\times 3^2 = 9$ J.

**Example 4.** A 5 kg box on a shelf 2 m high has $PE = 5 \\times 10 \\times 2 = 100$ J (using $g \\approx 10$ m/s² to keep the numbers friendly).

> **Key Fact:** Double the speed and the kinetic energy becomes **four times** as large, because speed is squared. That is why a car at 60 mph needs about four times the braking distance it needs at 30 mph.`
    },
    {
      id: 'gsp3-conservation',
      type: 'text' as const,
      content: `## Conservation of Energy and Power

**Energy cannot be created or destroyed, only changed from one form to another.** The total stays the same.

| Device or event | Energy change |
|:---|:---|
| Falling object | potential → kinetic |
| Battery-powered flashlight | chemical → electrical → light (and heat) |
| Car engine | chemical (fuel) → heat → mechanical (motion) |
| Solar panel | light → electrical |
| Generator | mechanical → electrical |
| Electric motor | electrical → mechanical |
| Plant (photosynthesis) | light → chemical |

A swinging pendulum trades energy back and forth: **most PE and least KE at the highest point**, **most KE (fastest) at the lowest point**. Friction slowly turns some of the energy into heat, so a real pendulum gradually stops.

### Power

**Power** is how fast work is done or energy is used:

$$P = \\frac{W}{t}$$

Joules per second are **watts (W)**. One **horsepower** is about **746 watts**.

**Example 5.** A motor lifts a load, doing 600 J of work in 3 seconds. Power = 600 ÷ 3 = **200 W**.

> **Key Fact:** Two people climb the same stairs. They do the same work if they weigh the same, but the one who climbs **faster** uses **more power**.`
    },
    {
      id: 'gsp3-mc-energy',
      type: 'multiple-choice' as const,
      content: '**Work, energy and power.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A roller-coaster car starts from rest at the top of the first hill. At which point is its kinetic energy greatest?',
            options: ['At the bottom of the first drop', 'At the top of the first hill', 'Halfway up the second hill', 'It is equal at every point on the track'],
            correctAnswer: 0,
            explanation: 'Going down, potential energy turns into kinetic energy, so the car is fastest at the lowest point. At the top it is at rest, so its kinetic energy is zero there.'
          },
          {
            question: 'In which situation is NO work done on the object?',
            options: ['A guard holds a rifle still for a minute', 'A mover pushes a heavy sofa across a room', 'A crane lifts a steel beam upward', 'A tow truck pulls a car up a ramp'],
            correctAnswer: 0,
            explanation: 'Work needs a force AND movement in the direction of the force. A rifle held still does not move, so no work is done on it, even though the guard\'s muscles tire.'
          },
          {
            question: 'A car\'s speed doubles. What happens to its kinetic energy?',
            options: ['It quadruples', 'It doubles', 'It stays the same', 'It is cut in half'],
            correctAnswer: 0,
            explanation: 'KE = ½mv². Speed is squared, so doubling v multiplies KE by 2² = 4: the kinetic energy becomes four times as large.'
          }
        ]
      }
    },
    {
      id: 'gsp3-input',
      type: 'input-boxes' as const,
      content: `**Calculate.** ✍️

**1)** A worker pushes a cart with a force of 25 N for 8 m. How much work is done, in joules?

**2)** A 3 kg rock rests on a ledge 4 m high. Using $g = 10$ m/s², what is its potential energy, in joules?

**3)** A pump does 1,200 J of work in 4 seconds. What is its power, in watts?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['200', '120', '300'],
        hint1: 'W = F × d.',
        hint2: 'PE = mgh.',
        hint3: 'P = W ÷ t.',
        explanation: '(1) 25 × 8 = 200 J. (2) 3 × 10 × 4 = 120 J. (3) 1,200 ÷ 4 = 300 W.'
      }
    },
    {
      id: 'gsp3-heat',
      type: 'text' as const,
      content: `## Heat and Temperature

**Temperature** measures how fast the particles in a substance move on average. **Heat** is energy that **flows from a hotter object to a colder one**, never the other way on its own. A bathtub of warm water holds more heat energy than a cup of boiling water, even though the cup is at a higher temperature.

### Temperature scales

| Landmark | Fahrenheit | Celsius | Kelvin |
|:---|:---:|:---:|:---:|
| Water boils (sea level) | 212 °F | 100 °C | 373 K |
| Body temperature | about 98.6 °F | 37 °C | 310 K |
| Water freezes | 32 °F | 0 °C | 273 K |
| Fahrenheit and Celsius agree | −40 °F | −40 °C | 233 K |
| Absolute zero | about −460 °F | −273 °C | 0 K |

**Conversions:**

- $F = \\frac{9}{5}C + 32$
- $C = \\frac{5}{9}(F - 32)$
- $K = C + 273$

**Example 6.** Convert 25 °C to Fahrenheit: $\\frac{9}{5} \\times 25 + 32 = 45 + 32 = 77$ °F.

**Example 7.** Convert 50 °F to Celsius: $\\frac{5}{9} \\times (50 - 32) = \\frac{5}{9} \\times 18 = 10$ °C.

> **Key Fact:** A change of 1 °C is a bigger step than a change of 1 °F (it equals 1.8 °F). A change of 1 °C equals a change of 1 K.

### Three ways heat moves

| Method | How it works | Example |
|:---|:---|:---|
| **Conduction** | Direct **contact**; particles pass energy to neighbors | A metal spoon in hot soup gets hot at the handle |
| **Convection** | A heated **fluid** (liquid or gas) rises and circulates | Warm air rises from a heater; boiling water rolls |
| **Radiation** | **Electromagnetic waves**; needs no matter at all | Sunlight warms your face across empty space |

Memory hook: **C**onduction = **C**ontact, con**V**ection = mo**V**ing fluid, **R**adiation = **R**ays.

### Conductors, insulators and other heat facts

- **Conductors** pass heat easily: metals such as copper, aluminum and silver.
- **Insulators** slow heat flow: wood, plastic, rubber, foam, still air (why a puffy jacket keeps you warm).
- **Thermal expansion:** most materials **expand when heated** and contract when cooled. Bridges have expansion joints; a tight metal jar lid loosens under hot water.
- **Specific heat** is how much energy it takes to warm a substance. **Water's specific heat is very high**, so water heats and cools slowly. That is why coastal towns have milder weather than inland towns and why water is used as engine coolant.`
    },
    {
      id: 'gsp3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Name the heat transfer.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'The handle of an iron skillet on a stove gets hot:',
            options: ['conduction', 'convection', 'radiation', 'insulation'],
            correctAnswer: 0
          },
          {
            label: 'Hot air from a floor vent rises and warms the whole room:',
            options: ['convection', 'conduction', 'radiation', 'expansion'],
            correctAnswer: 0
          },
          {
            label: 'You feel warmth from a campfire several feet away, with nothing touching you:',
            options: ['radiation', 'conduction', 'convection', 'reflection'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['conduction', 'convection', 'radiation'],
        hint1: 'The handle touches the hot pan directly.',
        hint2: 'A moving fluid carries the heat.',
        hint3: 'The energy travels as waves.',
        explanation: 'Heat travels through the skillet metal by direct contact (conduction). Warm air rising and circulating is convection. The fire\'s warmth reaches you by infrared radiation, which needs no contact.'
      }
    },
    {
      id: 'gsp3-temp-input',
      type: 'input-boxes' as const,
      content: `**Convert temperatures.** ✍️

**1)** Convert 20 °C to Fahrenheit.

**2)** Convert 122 °F to Celsius.

**3)** Convert 27 °C to kelvins.`,
      exercise: {
        boxes: 3,
        correctAnswers: ['68', '50', '300'],
        hint1: 'F = (9/5)C + 32: nine-fifths of 20 is 36.',
        hint2: 'Subtract 32 first: 122 − 32 = 90, then take five-ninths.',
        hint3: 'K = C + 273.',
        explanation: '(1) (9/5)(20) + 32 = 36 + 32 = 68 °F. (2) (5/9)(122 − 32) = (5/9)(90) = 50 °C. (3) 27 + 273 = 300 K.'
      }
    },
    {
      id: 'gsp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Work $W = Fd$ in joules; no movement means no work
- $KE = \\frac{1}{2}mv^2$ (motion), $PE = mgh$ (height); doubling speed quadruples KE
- Energy is conserved: it only changes form
- Power $P = \\frac{W}{t}$ in watts; 1 horsepower ≈ 746 W
- Heat flows hot → cold; water freezes at 0 °C = 32 °F and boils at 100 °C = 212 °F; −40 is the same on both scales
- $F = \\frac{9}{5}C + 32$, $K = C + 273$
- Conduction = contact, convection = moving fluid, radiation = waves
- Metals conduct, foam and still air insulate, water has a high specific heat

> **Up Next:** Part 4 — waves, sound and light.`
    }
  ]
};
