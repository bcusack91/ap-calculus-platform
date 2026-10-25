export const asvabGsPhysicsPart7Data = {
  topicSlug: 'asvab-gs-physics',
  sections: [
    {
      id: 'gsp7-intro',
      type: 'text' as const,
      content: `# ⚡ Physics: Motion, Energy and Waves

**Part 7 of 7 — Mixed Mastery Set**

### How This Set Works

These questions mix every part of the lesson, in the style and difficulty range of the GS subtest: mostly quick recall, a few one- or two-step calculations, and a couple of harder "which idea applies?" questions. Give yourself about **48 seconds per question**, the CAT pace.

| Part | Ideas to have ready |
|:---:|:---|
| 1 | SI units, named units, metric prefixes |
| 2 | Speed, acceleration, gravity, mass vs weight, Newton's laws, friction, momentum |
| 3 | Work, KE and PE, conservation of energy, power, temperature scales, heat transfer |
| 4 | Wave parts, $v = f\\lambda$, sound, the EM spectrum, reflection and refraction |
| 5 | Charges, conductors, current/voltage/resistance units, magnets, motors and generators |

> **Tip:** After each question, read the explanation even when you are right. Explanations show the fastest route.`
    },
    {
      id: 'gsp7-set1',
      type: 'multiple-choice' as const,
      content: '**Set 1 — Motion and units.** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many meters are in 0.75 kilometer?',
            options: ['750 m', '75 m', '7.5 m', '7,500 m'],
            correctAnswer: 0,
            explanation: 'Kilo- means 1,000: 0.75 × 1,000 = 750 m. Moving the decimal only one or two places gives 7.5 or 75.'
          },
          {
            question: 'A 3 kg drone accelerates at 4 m/s². What net force acts on it?',
            options: ['12 N', '7 N', '0.75 N', '1.3 N'],
            correctAnswer: 0,
            explanation: 'F = ma = 3 × 4 = 12 N. Adding gives 7, and dividing either way gives 0.75 or about 1.3.'
          },
          {
            question: 'Which object has the greatest momentum?',
            options: ['A 1,000 kg car moving at 20 m/s', 'A 60 kg runner moving at 8 m/s', 'A 5,000 kg truck parked at a curb', 'A 0.15 kg baseball moving at 40 m/s'],
            correctAnswer: 0,
            explanation: 'Momentum = mass × velocity. The car has 1,000 × 20 = 20,000 kg·m/s. The runner has 480, the baseball 6, and the parked truck has zero because it is not moving.'
          }
        ]
      }
    },
    {
      id: 'gsp7-set2',
      type: 'multiple-choice' as const,
      content: '**Set 2 — Energy and heat.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Two identical forklifts each lift the same pallet to the same height. Forklift A takes 10 seconds and forklift B takes 20 seconds. Which statement is true?',
            options: ['They do equal work, but A uses more power', 'A does more work and uses more power', 'B does more work, since it runs longer', 'They do equal work and use equal power'],
            correctAnswer: 0,
            explanation: 'Work = force × distance, which is the same for both. Power = work ÷ time, so A, finishing in half the time, uses twice the power.'
          },
          {
            question: 'On a sunny afternoon, the sand on a beach is much hotter than the ocean water. What property of water explains this?',
            options: ['Its high specific heat', 'Its low density', 'Its ability to conduct electricity', 'Its high boiling point'],
            correctAnswer: 0,
            explanation: 'Water has a very high specific heat: it takes a lot of energy to raise its temperature, so it warms far more slowly than sand in the same sunshine.'
          },
          {
            question: 'Inside a pot of soup on a stove, hot soup rises from the bottom and cooler soup sinks. This circulation is:',
            options: ['convection', 'conduction', 'radiation', 'insulation'],
            correctAnswer: 0,
            explanation: 'A heated fluid rising and cooler fluid sinking is a convection current. Conduction is heat passing by direct contact through a material; radiation travels as electromagnetic waves.'
          },
          {
            question: 'A ball is thrown straight up. Ignoring air resistance, what happens to its energy as it rises?',
            options: ['Kinetic energy changes into potential energy', 'Potential energy changes into kinetic energy', 'Both kinetic and potential energy increase', 'The total energy steadily decreases'],
            correctAnswer: 0,
            explanation: 'As the ball rises it slows (less kinetic energy) and gains height (more potential energy). The total stays the same: energy is conserved.'
          }
        ]
      }
    },
    {
      id: 'gsp7-set3',
      type: 'multiple-choice' as const,
      content: '**Set 3 — Waves, electricity and magnetism.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A train blows its horn as it approaches and then passes you. How does the pitch you hear change?',
            options: ['High while approaching, lower after it passes', 'Low while approaching, higher after it passes', 'The pitch stays the same, only the loudness changes', 'The pitch rises the whole time'],
            correctAnswer: 0,
            explanation: 'This is the Doppler effect. Waves bunch up in front of a moving source (higher frequency, higher pitch) and spread out behind it (lower pitch).'
          },
          {
            question: 'Which list puts electromagnetic waves in order of INCREASING energy?',
            options: ['Radio, infrared, ultraviolet, X-ray', 'X-ray, ultraviolet, infrared, radio', 'Infrared, radio, X-ray, ultraviolet', 'Ultraviolet, radio, infrared, X-ray'],
            correctAnswer: 0,
            explanation: 'Energy rises with frequency along the spectrum: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. Radio, infrared, ultraviolet, X-ray follows that order; the reverse list is decreasing.'
          },
          {
            question: 'Which change would make an electromagnet STRONGER?',
            options: ['Adding more turns of wire to the coil', 'Reducing the current in the coil', 'Swapping the iron core for a wooden one', 'Using fewer turns of wire'],
            correctAnswer: 0,
            explanation: 'More turns, more current, or an iron core all strengthen an electromagnet. Less current, fewer turns, or a non-magnetic core all weaken it.'
          }
        ]
      }
    },
    {
      id: 'gsp7-input',
      type: 'input-boxes' as const,
      content: `**Finish strong.** ✍️

**1)** A radio wave has a frequency of 100,000,000 Hz and travels at 300,000,000 m/s. What is its wavelength, in meters?

**2)** A 4 kg cart moves at 5 m/s. What is its kinetic energy, in joules?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['3', '50'],
        hint1: 'λ = v ÷ f. Cancel the zeros: 300,000,000 ÷ 100,000,000.',
        hint2: 'KE = ½ × m × v². Square the speed first.',
        explanation: '(1) λ = 300,000,000 ÷ 100,000,000 = 3 m. (2) KE = ½ × 4 × 5² = ½ × 4 × 25 = 50 J. Forgetting to square the speed gives 10 J.'
      }
    },
    {
      id: 'gsp7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 7

- Most GS physics questions test one idea: name it, then answer
- Formulas worth knowing cold: $s = \\frac{d}{t}$, $F = ma$, weight $= mg$, $p = mv$, $W = Fd$, $KE = \\frac{1}{2}mv^2$, $PE = mgh$, $P = \\frac{W}{t}$, $v = f\\lambda$, $F = \\frac{9}{5}C + 32$
- Units worth knowing cold: newton, joule, watt, hertz, volt, ampere, ohm
- Lists worth knowing cold: King Henry's prefixes, the EM spectrum, ROY G BIV, iron/nickel/cobalt

> **Next step:** Take the exit quiz. Then review the flashcards for this topic, especially the ULTRA-HIGH ones, before your next practice test.`
    }
  ]
};
