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

### Calorie (cal)
Originally defined as the energy needed to raise 1 gram of water by 1°C:
$$1 \\text{ cal} = 4.186 \\text{ J}$$

### Kilocalorie (kcal) / Food Calorie (Cal)
The "Calorie" on food labels (capital C) is actually a kilocalorie:
$$1 \\text{ kcal} = 1 \\text{ Cal} = 1{,}000 \\text{ cal} = 4{,}186 \\text{ J}$$

### British Thermal Unit (BTU)
Used in heating/cooling systems in the US:
$$1 \\text{ BTU} = 1{,}055 \\text{ J}$$

### Sign Convention for Heat

In physics, we define:
- $Q > 0$: energy flows **into** the system (system gains energy)
- $Q < 0$: energy flows **out of** the system (system loses energy)

This sign convention is consistent with the first law of thermodynamics: $\\Delta U = Q - W$.
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
"Adding heat always raises temperature." **FALSE!** During a phase change (like melting ice at 0°C), you add heat but the temperature stays constant. The energy goes into breaking molecular bonds instead.
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
            explanation: 'Total thermal energy depends on both temperature AND the amount of substance. The pool has enormously more molecules, so despite its lower temperature, it has far more total thermal energy.'
          },
          {
            question: 'If $Q = -500$ J for a system, this means:',
            options: [
              'The system absorbed 500 J of energy',
              'The system released 500 J of energy to its surroundings',
              'The system\'s temperature dropped by 500°C',
              'The system did 500 J of work'
            ],
            correctAnswer: 1,
            explanation: 'Negative $Q$ means energy flows OUT of the system. The system lost (released) 500 J of thermal energy to its surroundings.'
          }
        ]
      }
    },
    {
      id: 'ht1-unit-drill',
      type: 'input-boxes' as const,
      content: `
**Unit Conversion Drill** 🔢

Convert between heat energy units. Round to the nearest whole number.

1) 500 calories = ___ joules (use 1 cal = 4.186 J)

2) 8{,}372 J = ___ kilocalories

3) 3 food Calories (kcal) = ___ joules
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2093', '2', '12558'],
        hint1: 'Multiply: $500 \\times 4.186$.',
        hint2: 'Divide by 4{,}186: $8{,}372 / 4{,}186$.',
        hint3: '3 kcal = 3{,}000 cal. Then multiply by 4.186.',
        explanation: '1) $500 \\times 4.186 = 2{,}093$ J. 2) $8{,}372 / 4{,}186 = 2$ kcal. 3) $3 \\times 4{,}186 = 12{,}558$ J.'
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
            question: 'Ice is melting at exactly 0°C. As heat is added to the ice, what happens?',
            options: [
              'The temperature of the ice increases above 0°C',
              'The temperature stays at 0°C while the ice changes phase',
              'The temperature decreases because melting absorbs energy',
              'Nothing — you cannot add heat to something at 0°C'
            ],
            correctAnswer: 1,
            explanation: 'During a phase change, added heat goes into breaking intermolecular bonds rather than increasing kinetic energy. The temperature remains constant at 0°C until all the ice has melted.'
          }
        ]
      }
    }
  ]
}
