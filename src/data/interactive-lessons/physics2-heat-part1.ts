export const physics2HeatPart1Data = {
  topicSlug: 'heat-specific-heat',
  sections: [
    {
      id: 'ht1-intro',
      type: 'text' as const,
      content: `
# 🔥 Heat vs. Temperature

**Part 1 of 7 — They're NOT the Same Thing!**

People use "heat" and "temperature" interchangeably in everyday language — but in physics, they mean very different things. Confusing them is one of the most common mistakes on the AP exam.

### Temperature — A Property

**Temperature** is a measure of the **average translational kinetic energy** of the molecules in a substance.

- It describes the *state* of a system at a given moment
- It is a **scalar** quantity measured in kelvins (K), degrees Celsius (°C), or degrees Fahrenheit (°F)
- The SI unit for physics is the **kelvin (K)**

### Heat — A Process

**Heat** (symbol $Q$) is **energy transferred between systems due to a temperature difference**.

- Heat is NOT something a system "has" — it is energy *in transit*
- It only exists during the process of transfer
- Once energy is transferred, it becomes **internal energy** of the receiving system
- SI unit: **joules (J)**

> 🧠 **Key insight**: A hot cup of coffee doesn't "contain heat." It has high internal energy. When it sits on a table, energy flows *as heat* from the coffee to the cooler surroundings.
      `
    },
    {
      id: 'ht1-units',
      type: 'text' as const,
      content: `
## Units of Heat Energy

### Joule (J) — The SI Unit
The joule is the standard SI unit of energy:
$$1 \\text{ J} = 1 \\text{ kg} \\cdot \\text{m}^2/\\text{s}^2$$

Older units such as the calorie and the BTU still appear on food labels and furnaces, but AP Physics 2 works only in joules.

### Heating and Cooling
- **Heating** is the transfer of energy **into** a system by thermal processes.
- **Cooling** is the transfer of energy **out of** a system by thermal processes.

The thermal processes are **conduction**, **convection**, and **radiation** (Part 4 covers each one).

### Sign Convention for Heat

In physics, we define:
- $Q > 0$: energy flows **into** the system (system gains energy)
- $Q < 0$: energy flows **out of** the system (system loses energy)

This sign convention is consistent with the first law of thermodynamics as written on the AP Physics 2 equation sheet: $\\Delta U = Q + W$, where $W$ is the work done **on** the system. (Many chemistry and engineering texts use $\\Delta U = Q - W$ with $W$ done BY the gas. The physics is the same; the AP Physics 2 equation sheet uses $W$ done ON the gas.)
      `
    },
    {
      id: 'ht1-direction',
      type: 'text' as const,
      content: `
## The Direction of Heat Flow

Heat **always** flows spontaneously from a **higher-temperature** object to a **lower-temperature** object. This continues until both objects reach the same temperature — a state called **thermal equilibrium**.

### The Zeroth Law of Thermodynamics

> If object A is in thermal equilibrium with object C, and object B is also in thermal equilibrium with object C, then A and B are in thermal equilibrium with each other.

This is the principle behind thermometers! The thermometer (C) reaches equilibrium with the object being measured (A), and the reading tells us A's temperature.

### Important Distinctions

| | Temperature | Heat |
|---|---|---|
| What is it? | A state variable (property) | Energy in transit (process) |
| Depends on amount? | No (intensive) | Yes (extensive) |
| SI unit | Kelvin (K) | Joule (J) |
| Can be zero? | 0 K = absolute zero | $Q = 0$ means no energy transfer |
| Direction | N/A | High $T$ → Low $T$ |

### Common Misconception
"A temperature rise always means the system was heated." **FALSE!** Work can also change a system's internal energy. Rapidly compressing a gas in an insulated cylinder warms it even though no energy is transferred by heating, because the piston does work on the gas. Temperature tells you about the state of a system; heating and work are two different ways that state can change.
      `
    },
    {
      id: 'ht1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Heat vs. Temperature Concept Quiz** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement correctly distinguishes heat from temperature?',
            options: [
              'Heat is measured in kelvins; temperature is measured in joules',
              'Temperature is a property of a system; heat is energy transferred due to a temperature difference',
              'Heat and temperature are the same thing measured in different units',
              'Temperature depends on the amount of substance; heat does not'
            ],
            correctAnswer: 1,
            explanation: 'Temperature is a state variable (property) describing average molecular KE. Heat is energy *in transit* between systems at different temperatures. Temperature is in K; heat is in J.'
          },
          {
            question: 'A large swimming pool at 25°C and a cup of boiling water at 100°C. Which has more total thermal energy?',
            options: [
              'The cup of boiling water, because its temperature is higher',
              'The swimming pool, because it contains vastly more molecules',
              'They have the same thermal energy',
              'It depends on the specific heat of the container'
            ],
            correctAnswer: 1,
            explanation: 'Total thermal energy depends on both temperature and the amount of substance. The pool has enormously more molecules, so despite its lower temperature, it has far more total thermal energy.'
          },
          {
            question: 'If $Q = -500$ J for a system, this means:',
            options: [
              'The system absorbed 500 J from its surroundings',
              'The system released 500 J to its surroundings',
              'The system\'s temperature dropped by 500 degrees',
              'The system did 500 J of work on its surroundings'
            ],
            correctAnswer: 1,
            explanation: 'Negative $Q$ means energy flows out of the system by heating. The system lost (released) 500 J of thermal energy to its surroundings. $Q$ is an energy in joules, not a temperature change, and work is counted separately from heat.'
          }
        ]
      }
    },
    {
      id: 'ht1-energy-drill',
      type: 'input-boxes' as const,
      content: `
**Energy Bookkeeping Drill** 🔢

A hot metal block is placed in a cup of cool water inside a perfectly insulated box. By the time they reach thermal equilibrium, the block has transferred 1,200 J of energy to the water. Use the sign convention $Q > 0$ for energy into a system.

1) $Q$ for the block, in J

2) $Q$ for the water, in J

3) $Q$ for the block-plus-water system from the outside world, in J
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-1200', '1200', '0'],
        hint1: 'The block loses energy, so its $Q$ is negative.',
        hint2: 'The water gains exactly the energy the block loses.',
        hint3: 'The box is insulated, so nothing crosses the boundary of the combined system.',
        explanation: '1) The block is cooled: $Q = -1{,}200$ J. 2) The water is heated: $Q = +1{,}200$ J. 3) The transfer happens inside the combined system, and the insulated box lets nothing in or out, so $Q = 0$.'
      }
    },
    {
      id: 'ht1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Heat Fundamentals**
      `,
      exercise: {
        questions: [
          {
            question: 'You place a metal spoon in a hot cup of soup. After a minute, the spoon handle feels warm. Which best describes what happened?',
            options: [
              'Temperature flowed from the soup to the spoon',
              'Heat flowed from the soup to the spoon because the soup was at a higher temperature',
              'The spoon\'s temperature increased because it has low specific heat',
              'Cold flowed from the spoon into the soup'
            ],
            correctAnswer: 1,
            explanation: 'Energy transferred as heat from the higher-temperature soup to the lower-temperature spoon. "Cold" doesn\'t flow — heat flows from hot to cold. Temperature is a property, not something that flows.'
          },
          {
            question: 'Two blocks of different materials and masses sit in thermal contact inside an insulated box until nothing more changes. Which statement must be true?',
            options: [
              'They have the same temperature, and no net energy transfers between them',
              'They have the same internal energy, and no net energy transfers between them',
              'They have the same specific heat, and energy keeps flowing to the smaller block',
              'They have the same thermal energy per kilogram, whatever their materials'
            ],
            correctAnswer: 0,
            explanation: 'Thermal equilibrium means equal temperatures, so the net energy transfer by heating stops. Their internal energies and energy per kilogram can still differ, because those depend on mass and material.'
          }
        ]
      }
    }
  ]
}
