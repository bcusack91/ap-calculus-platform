export const asvabGsPhysicsPart1Data = {
  topicSlug: 'asvab-gs-physics',
  sections: [
    {
      id: 'gsp1-intro',
      type: 'text' as const,
      content: `# ⚡ Physics: Motion, Energy and Waves

**Part 1 of 7 — Physics on the ASVAB: Units and Metric Prefixes**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Physics on the ASVAB: units and metric prefixes** |
| 2 | Motion, forces and Newton's laws |
| 3 | Work, energy, power and heat |
| 4 | Waves, sound and light |
| 5 | Electricity and magnetism basics |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### Where Physics Shows Up

General Science (GS) is the **first subtest** on the CAT-ASVAB. You get **15 scored questions in 12 minutes**, which works out to about **48 seconds per question**. The official description is "knowledge of physical and biological sciences," and physical science (force and motion, energy, fluids, atoms, chemistry) is one of its three big areas, next to life science and earth and space science.

The physics questions are not long calculations. They are mostly **"do you know this fact or idea?"** questions, plus some one- or two-step problems with friendly numbers. No calculator is allowed, so the numbers are chosen to work out by hand.

| Version of the test | GS questions | GS time |
|:---|:---:|:---:|
| CAT-ASVAB (MEPS, most MET sites) | 15 | 12 minutes |
| Paper enlistment test | 25 | 11 minutes |
| High-school CEP, paper | 25 | part of a test of about 3 hours |
| High-school CEP iCAT | 16 | part of a test of about 90 minutes |

> **Why GS matters:** GS does not count toward your AFQT, but it feeds job line scores. The Air Force E (Electronics) composite is GS + AR + MK + EI, and the Navy and Marine Corps EL composites use the same four subtests. Electronics, nuclear and many technical jobs care about this score.

### What You Will Learn in This Lesson

Physics on the ASVAB comes down to a short list of ideas: how things move, why they move (forces), how energy changes form, how waves carry sound and light, and how charges and magnets push and pull. This part starts with the toolkit every one of those questions uses: **units**.`
    },
    {
      id: 'gsp1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** 🎯 Answer from what you already know. Don\'t worry if you miss some: each idea is taught later in this lesson.',
      exercise: {
        questions: [
          {
            question: 'A car travels 120 miles in 2 hours. What is its average speed?',
            options: ['60 miles per hour', '240 miles per hour', '122 miles per hour', '30 miles per hour'],
            correctAnswer: 0,
            explanation: 'Average speed is distance divided by time: 120 ÷ 2 = 60 miles per hour. Multiplying gives 240, adding gives 122, and 30 comes from dividing by 4 instead of 2.'
          },
          {
            question: 'During a thunderstorm, you see the lightning before you hear the thunder. Why?',
            options: ['Light travels much faster than sound', 'Thunder is made a few seconds later', 'Sound slows down in falling rain', 'Your eyes react faster than your ears'],
            correctAnswer: 0,
            explanation: 'Lightning and thunder happen at the same moment. Light arrives almost instantly, but sound travels only about 343 meters per second in air, so the thunder arrives later.'
          },
          {
            question: 'How many millimeters are in 1 meter?',
            options: ['1,000', '100', '10', '10,000'],
            correctAnswer: 0,
            explanation: 'Milli- means one thousandth, so 1 millimeter is 1/1,000 of a meter and a meter holds 1,000 millimeters. A meter holds 100 centimeters, which is where 100 comes from.'
          }
        ]
      }
    },
    {
      id: 'gsp1-units',
      type: 'text' as const,
      content: `## The Units Physics Uses

Science uses the **metric system (SI)**. Every quantity has a unit, and the ASVAB often tests whether you can match a quantity to its unit.

### Base units

| Quantity | SI unit | Symbol |
|:---|:---|:---:|
| Length | meter | m |
| Mass | kilogram | kg |
| Time | second | s |
| Temperature | kelvin | K |
| Electric current | ampere | A |

### Units named after scientists

Many derived units are named after people. Learn the pairs:

| Quantity | Unit | Symbol | Memory hook |
|:---|:---|:---:|:---|
| Force | newton | N | Newton's laws are about force |
| Energy and work | joule | J | "Joules of work" |
| Power | watt | W | A 60-watt light bulb |
| Pressure | pascal | Pa | Pressure = force ÷ area |
| Frequency | hertz | Hz | Radio stations in kHz and MHz |
| Voltage | volt | V | A 9-volt battery |
| Resistance | ohm | Ω | The Greek letter omega |

> **Key Fact:** If a question asks "which unit measures energy?", the answer is the **joule**, not the watt. Watts measure **power**: how fast energy is used (1 watt = 1 joule per second).`
    },
    {
      id: 'gsp1-prefixes',
      type: 'text' as const,
      content: `## Metric Prefixes

A prefix in front of a unit multiplies it by a power of 10. These seven go in order, each step 10 times the next:

| Prefix | Symbol | Meaning | Example |
|:---|:---:|:---|:---|
| **K**ilo- | k | 1,000 | 1 km = 1,000 m |
| **H**ecto- | h | 100 | 1 hm = 100 m |
| **D**eka- | da | 10 | 1 dam = 10 m |
| **B**ase unit | — | 1 | meter, gram, liter |
| **D**eci- | d | 1/10 | 10 dm = 1 m |
| **C**enti- | c | 1/100 | 100 cm = 1 m |
| **M**illi- | m | 1/1,000 | 1,000 mm = 1 m |

**Mnemonic:** **K**ing **H**enry **D**ied **B**y **D**rinking **C**hocolate **M**ilk.

Three more prefixes appear in science and electronics:

| Prefix | Symbol | Meaning | Example |
|:---|:---:|:---|:---|
| Mega- | M | 1,000,000 | 1 MHz = 1,000,000 Hz |
| Micro- | μ | 1/1,000,000 | 1 μs = one millionth of a second |
| Nano- | n | 1/1,000,000,000 | visible light waves are about 400 to 700 nm long |

### Converting with the ladder

Moving **down** the ladder (toward milli-) the number gets **bigger**: move the decimal point right one place per step. Moving **up** (toward kilo-) the number gets **smaller**: move it left.

**Example 1.** Convert 3.5 kilometers to meters. Kilo- to base is 3 steps down, so move the decimal 3 places right: **3,500 m**.

**Example 2.** Convert 250 centimeters to meters. Centi- to base is 2 steps up, so move the decimal 2 places left: **2.5 m**.

**Example 3.** Convert 4,000 milligrams to grams. Milli- to base is 3 steps up: **4 g**.

> **Key Fact:** A big unit needs a small number and a small unit needs a big number. 2 km and 2,000 m are the same distance.`
    },
    {
      id: 'gsp1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match each quantity to its unit.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Force is measured in:',
            options: ['newtons', 'joules', 'watts', 'pascals'],
            correctAnswer: 0
          },
          {
            label: 'Power is measured in:',
            options: ['watts', 'newtons', 'joules', 'hertz'],
            correctAnswer: 0
          },
          {
            label: 'Frequency is measured in:',
            options: ['hertz', 'watts', 'ohms', 'newtons'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['newtons', 'watts', 'hertz'],
        hint1: 'Newton\'s laws describe forces.',
        hint2: 'A light bulb is rated by how fast it uses energy.',
        hint3: 'Radio stations are tuned in kilohertz and megahertz.',
        explanation: 'Force is in newtons (N), power is in watts (W), and frequency is in hertz (Hz, cycles per second). Joules measure energy and work, pascals measure pressure, and ohms measure resistance.'
      }
    },
    {
      id: 'gsp1-input',
      type: 'input-boxes' as const,
      content: `**Use the prefix ladder.** ✍️

**1)** How many meters are in 7 kilometers?

**2)** How many grams are in 600 centigrams?

**3)** How many milliliters are in 2.4 liters?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['7000', '6', '2400'],
        hint1: 'Kilo- means 1,000.',
        hint2: 'Centi- to the base unit is 2 steps up the ladder: move the decimal 2 places left.',
        hint3: 'Milli- means 1/1,000, so a liter holds 1,000 milliliters.',
        explanation: '(1) 7 × 1,000 = 7,000 m. (2) 600 cg ÷ 100 = 6 g. (3) 2.4 × 1,000 = 2,400 mL.'
      }
    },
    {
      id: 'gsp1-mc',
      type: 'multiple-choice' as const,
      content: '**Units and prefixes.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A radio station broadcasts at 98.5 MHz. What does the "M" stand for?',
            options: ['Mega-, one million', 'Milli-, one thousandth', 'Micro-, one millionth', 'Meter, the unit of length'],
            correctAnswer: 0,
            explanation: 'A capital M is mega-, a million: 98.5 MHz is 98,500,000 cycles per second. A lowercase m is milli-, and micro- uses the symbol μ.'
          },
          {
            question: 'Which list is in order from the SMALLEST length to the LARGEST?',
            options: ['millimeter, centimeter, meter, kilometer', 'centimeter, millimeter, meter, kilometer', 'kilometer, meter, centimeter, millimeter', 'millimeter, meter, centimeter, kilometer'],
            correctAnswer: 0,
            explanation: 'A millimeter is 1/1,000 m, a centimeter is 1/100 m, then the meter, then the kilometer (1,000 m). Reverse order lists them largest first.'
          }
        ]
      }
    },
    {
      id: 'gsp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- GS is the first CAT-ASVAB subtest: **15 questions, 12 minutes**, about **48 seconds each**
- Base units: meter, kilogram, second, kelvin, ampere
- Named units: **newton** = force, **joule** = energy and work, **watt** = power, **pascal** = pressure, **hertz** = frequency, **volt** = voltage, **ohm** = resistance
- **King Henry Died By Drinking Chocolate Milk**: kilo-, hecto-, deka-, base, deci-, centi-, milli-, each step a factor of 10
- Mega- = 1,000,000; micro- = 1/1,000,000; nano- = 1/1,000,000,000
- Going to a smaller unit makes the number bigger

> **Up Next:** Part 2 — speed, acceleration, mass and weight, and Newton's three laws.`
    }
  ]
};
