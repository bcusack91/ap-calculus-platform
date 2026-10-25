export const asvabGsEarthSpacePart6Data = {
  topicSlug: 'asvab-gs-earth-space',
  sections: [
    {
      id: 'gse6-timing',
      type: 'text' as const,
      content: `# 🌍 Earth and Space Science

**Part 6 of 7 — Test Strategy and Common Traps**

### Your Clock on GS

| Test version | GS questions | Minutes | Average per question |
|:---|:---:|:---:|:---:|
| CAT-ASVAB | 15 | 12 | about 48 seconds |
| Paper ASVAB | 25 | 11 | about 26 seconds |

Remaining time and remaining questions show in the lower-right corner of the CAT screen. Most people finish each subtest early: the official materials describe the time limits as generous.

### How to spend those 48 seconds

1. **Read the whole question.** Words like "NOT," "most likely" and "mainly" change the answer.
2. **Answer in your head first**, then look for your answer among the choices.
3. **If you don't know it, eliminate.** Cross out choices from the wrong field (a weather word in a rock question) and choices that state a famous myth.
4. **Commit and move on.** On the CAT you cannot go back to a question once you answer it, and you must answer to move on, so don't second-guess.

> **Key Fact:** If time is running out on the CAT, keep reading and genuinely answering. The official guidance warns that the test applies a relatively large penalty when several wrong answers are given toward the end of a subtest, so a rapid string of random guesses hurts. Unfinished questions are scored as if you had guessed at random. (On the paper test, there is no penalty for guessing: answer everything.)`
    },
    {
      id: 'gse6-traps',
      type: 'text' as const,
      content: `## The Traps Earth and Space Questions Set

Each wrong answer below is popular because it *sounds* right.

| Trap answer | The truth |
|:---|:---|
| Seasons come from Earth's distance to the Sun | Seasons come from the **23.5° tilt**. Earth is closest to the Sun in January |
| Moon phases are caused by Earth's shadow | Phases come from how much of the **sunlit half** we see. Earth's shadow only matters in a **lunar eclipse** |
| A light-year is a length of time | A light-year is a **distance** |
| Meteorology is the study of meteors | Meteorology is the study of **weather** |
| Mercury is the hottest planet because it is closest | **Venus** is hottest, thanks to its thick carbon dioxide atmosphere |
| Oxygen is the most common gas in the air | **Nitrogen** is, at about 78% |
| The ozone layer causes global warming | Ozone **blocks UV**; **greenhouse gases** trap heat |
| The inner core is liquid because it is so hot | The **outer** core is liquid; the inner core is **solid** because of pressure |
| Weathering and erosion are the same thing | Weathering **breaks** rock in place; erosion **moves** it |
| Magma and lava are the same thing | **Magma** is underground; **lava** has reached the surface |
| A meteor is a rock that landed | A meteor is the **streak of light**; the rock on the ground is a **meteorite** |
| High pressure brings storms | **Low** pressure brings clouds and storms; high pressure brings fair weather |

### Spotting the field from a single word

| If the choices mention... | The question is about... |
|:---|:---|
| igneous, crystal, fossil, Mohs | Rocks and minerals |
| plate, fault, ridge, seismic | Earth's interior and plate tectonics |
| front, humidity, pressure, ozone | Weather and the atmosphere |
| orbit, phase, eclipse, light-year | Astronomy |`
    },
    {
      id: 'gse6-mc',
      type: 'multiple-choice' as const,
      content: '**Dodge the trap.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Earth is closest to the Sun in early January, yet January is winter in the United States. Why?',
            options: ['The Northern Hemisphere is tilted away from the Sun then', 'The Sun gives off less energy in the winter months', 'The Moon blocks part of the sunlight in January', 'Earth spins more slowly during the winter months'],
            correctAnswer: 0,
            explanation: 'In January the Northern Hemisphere leans away from the Sun, so its sunlight is less direct and its days are short. The Sun\'s output, the Moon and Earth\'s spin do not change with the seasons. Distance is a trap: it is not what causes seasons.'
          },
          {
            question: 'Meteorology is the study of:',
            options: ['Weather and the atmosphere', 'Meteors, comets and asteroids', 'Rocks, minerals and fossils', 'Earth\'s oceans and tides'],
            correctAnswer: 0,
            explanation: 'Meteorology is the science of weather and the atmosphere; a meteorologist forecasts the weather. Meteors and comets belong to astronomy, rocks and fossils to geology, and the oceans to oceanography.'
          },
          {
            question: 'A friend says the Moon looks like a crescent tonight because Earth\'s shadow is covering most of it. What is the correct explanation?',
            options: ['We are seeing only a sliver of the Moon\'s sunlit half', 'A cloud of dust is blocking part of the Moon\'s surface', 'The Sun is lighting only a small part of the Moon now', 'The Moon has rotated so its far side is facing Earth'],
            correctAnswer: 0,
            explanation: 'The Sun always lights half of the Moon. As the Moon orbits, we see different amounts of that lit half, and at a crescent we see only a sliver. Earth\'s shadow darkens the Moon only during a lunar eclipse, dust does not cause phases, and the same side of the Moon always faces Earth.'
          },
          {
            question: 'Which of these is an example of erosion rather than weathering?',
            options: ['A glacier drags broken rock down a valley', 'Ice wedging splits a rock along a crack', 'Acid rain slowly dissolves a limestone statue', 'Lichens slowly break down a rock surface'],
            correctAnswer: 0,
            explanation: 'Erosion moves material from one place to another, and the glacier is carrying rock away. Ice wedging, acid rain and lichens all break rock down where it sits, which is weathering.'
          }
        ]
      }
    },
    {
      id: 'gse6-input',
      type: 'input-boxes' as const,
      content: `**Pace check.** ✍️ On the CAT, GS gives you about 48 seconds per question.

**1)** At that pace, how many minutes do 5 questions take?

**2)** At that pace, how many minutes do all 15 questions take?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['4', '12'],
        hint1: 'Multiply the number of questions by 48 seconds.',
        hint2: 'Divide the seconds by 60 to get minutes.',
        hint3: '$5 \\times 48 = 240$ seconds.',
        explanation: '(1) $5 \\times 48 = 240$ seconds, and $240 \\div 60 = 4$ minutes. (2) $15 \\times 48 = 720$ seconds, which is $12$ minutes, the whole GS time limit. If you are well past 4 minutes after 5 questions, speed up by eliminating faster.'
      }
    },
    {
      id: 'gse6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- CAT GS: **15 questions, 12 minutes, about 48 seconds each**; you can't go back, so commit
- Answer in your head first, then find it among the choices; eliminate by field and by myth
- Near the time limit, keep **genuinely** answering: a burst of wrong guesses at the end is penalized
- The big myths: seasons from distance, phases from Earth's shadow, light-year as time, meteorology as meteors, Mercury hottest, oxygen most common, ozone as warming, liquid inner core

> **Up Next:** Part 7 — a mixed mastery set at ASVAB difficulty.`
    }
  ]
};
