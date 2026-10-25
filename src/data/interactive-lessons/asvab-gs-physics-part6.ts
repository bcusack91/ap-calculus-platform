export const asvabGsPhysicsPart6Data = {
  topicSlug: 'asvab-gs-physics',
  sections: [
    {
      id: 'gsp6-intro',
      type: 'text' as const,
      content: `# ⚡ Physics: Motion, Energy and Waves

**Part 6 of 7 — Test Strategy and Common Traps**

### Your Clock on GS

| Fact | What it means for you |
|:---|:---|
| 15 scored questions in 12 minutes | About **48 seconds** per question |
| GS is the **first** subtest of the CAT-ASVAB | Walk in warmed up: review your flashcards that morning |
| The test is adaptive | A right answer usually brings a harder question next, so a hard question is often a **good** sign |
| You cannot go back to a question once you answer it | Check your choice **before** you click |
| Some questions may be unscored tryout items | You can't tell which ones, so treat every question as scored |

Most physics questions are **recall** questions you can answer in 15 to 20 seconds if you know the fact. That banks time for the ones that need a quick calculation.

### Time budget for a physics question

1. **Read the last line first.** What is being asked for: a unit, a direction, a number?
2. **Name the idea.** "This is Newton's third law" or "this is $v = f\\lambda$." Most GS physics needs only one formula.
3. **Estimate before you compute.** Friendly numbers are the rule (no calculator is allowed). If your answer is ugly, recheck.
4. **Eliminate.** Cross out choices with the wrong unit or the wrong direction first.

### Running short on time

On the CAT, unfinished questions at the time limit are scored as if you had guessed at random, and the official guidance warns that a string of wrong answers near the end of a subtest is penalized heavily. Since GS is mostly recall, you rarely run short; if you do, keep reading and answering each question for real rather than clicking randomly.`
    },
    {
      id: 'gsp6-traps',
      type: 'text' as const,
      content: `## The Physics Traps the Test Loves

| Trap | The truth |
|:---|:---|
| "Heavier objects fall faster" | Without air resistance, **everything falls at the same rate** (about 9.8 m/s²) |
| "Mass changes on the Moon" | **Mass stays the same**; only weight changes |
| Amplitude = crest to trough | Amplitude = **rest line to crest**, half of crest-to-trough |
| "Sound is fastest in air" | Sound is **fastest in solids**, slowest in gases, and cannot cross a vacuum |
| Watt = unit of energy | Watt = **power**; the joule is energy |
| Mixing up motor and generator | **Motor**: electricity → motion. **Generator**: motion → electricity |
| Heat = temperature | Temperature measures particle motion; heat is energy that **flows** hot → cold |
| Converting °C to °F by adding 32 first | **Multiply by 9/5 first, then add 32** |
| Using the whole echo time | An echo goes **out and back**: halve the time to get the one-way distance |
| "Constant speed means no acceleration" | Turning at constant speed **is** acceleration, because direction changes |
| Copper or aluminum is magnetic | Only **iron, nickel and cobalt** (and steel) are strongly magnetic |
| Holding something heavy is "work" | No movement in the direction of the force = **no work** |

> **Key Fact:** When two choices are exact opposites (attract vs repel, higher vs lower, motor vs generator), the question is testing a rule. Say the rule to yourself before you pick.`
    },
    {
      id: 'gsp6-mc-traps',
      type: 'multiple-choice' as const,
      content: '**Spot the trap.** 🪤 Each of these is built around one of the traps above.',
      exercise: {
        questions: [
          {
            question: 'A 1 kg wrench and a 5 kg hammer are dropped from a tower on the airless Moon. How do their accelerations compare?',
            options: ['They are equal', 'The hammer\'s is five times larger', 'The wrench\'s is five times larger', 'Both are zero, since the Moon has no air'],
            correctAnswer: 0,
            explanation: 'With no air resistance, all objects fall with the same acceleration (on the Moon, about one-sixth of Earth\'s). Air is not needed for gravity.'
          },
          {
            question: 'The crests of an ocean wave are 3 m above the troughs. What is the wave\'s amplitude?',
            options: ['1.5 m', '3 m', '6 m', '0.75 m'],
            correctAnswer: 0,
            explanation: 'The rest line sits halfway between crest and trough, so the amplitude is half of 3 m: 1.5 m. Calling the full 3 m the amplitude is the trap.'
          },
          {
            question: 'Convert 40 °C to Fahrenheit.',
            options: ['104 °F', '72 °F', '130 °F', '40 °F'],
            correctAnswer: 0,
            explanation: '(9/5)(40) + 32 = 72 + 32 = 104 °F. Stopping at 72 forgets to add 32; adding 32 first and then multiplying gives about 130.'
          },
          {
            question: 'A car rounds a curve at a steady 40 miles per hour. Which statement is true?',
            options: ['It is accelerating, since its direction is changing', 'It is not accelerating, since its speed is constant', 'It is accelerating, since its speed is increasing', 'Its velocity stays the same through the curve'],
            correctAnswer: 0,
            explanation: 'Velocity includes direction. Going around a curve changes the direction, so the velocity changes and the car is accelerating, even though the speed holds at 40 mph.'
          }
        ]
      }
    },
    {
      id: 'gsp6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Fix the misconception.** 🔽 Choose the word that makes each statement TRUE.',
      exercise: {
        dropdowns: [
          {
            label: 'A light bulb rated at 100 W tells you its:',
            options: ['power', 'energy', 'force', 'current'],
            correctAnswer: 0
          },
          {
            label: 'Sound travels slowest through:',
            options: ['air', 'water', 'steel', 'ice'],
            correctAnswer: 0
          },
          {
            label: 'A device that turns motion into electricity is a:',
            options: ['generator', 'motor', 'magnet', 'resistor'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['power', 'air', 'generator'],
        hint1: 'Watts measure how fast energy is used.',
        hint2: 'Sound is slowest where particles are farthest apart.',
        hint3: 'A motor goes the other way.',
        explanation: 'Watts measure power, the rate of using energy. Sound is slowest in gases such as air. Motion to electricity is a generator; a motor turns electricity into motion.'
      }
    },
    {
      id: 'gsp6-input',
      type: 'input-boxes' as const,
      content: `**Quick numbers, no calculator.** ✍️ Aim for under a minute total.

**1)** A diver's sonar ping returns after 6 seconds. Sound travels 1,500 m/s in the water. How far away is the object, in meters?

**2)** Convert 15 °C to Fahrenheit.`,
      exercise: {
        boxes: 2,
        correctAnswers: ['4500', '59'],
        hint1: 'Halve the echo time first.',
        hint2: 'Nine-fifths of 15 is 27.',
        explanation: '(1) One way takes 3 s, so 1,500 × 3 = 4,500 m. Using all 6 s gives 9,000 m, twice the real distance. (2) (9/5)(15) + 32 = 27 + 32 = 59 °F.'
      }
    },
    {
      id: 'gsp6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- GS: 15 questions in 12 minutes, about 48 seconds each, and it comes first on the CAT
- No going back: confirm your answer before you click; treat every question as scored
- Read the last line, name the idea, estimate, eliminate wrong units and wrong directions
- Know the traps: equal fall rates, mass vs weight, amplitude is half of crest-to-trough, sound fastest in solids, watt = power, multiply by 9/5 before adding 32, halve echo times, turning is acceleration

> **Up Next:** Part 7 — a mixed mastery set at ASVAB difficulty.`
    }
  ]
};
