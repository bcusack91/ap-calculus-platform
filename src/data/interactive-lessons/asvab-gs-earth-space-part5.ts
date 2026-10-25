const gseEclipseFigure = {
  svg: '<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-accent-2"><circle cx="48" cy="100" r="38" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"><line x1="92" y1="100" x2="176" y2="100"/></g><g class="fig-muted"><polygon points="190,92 190,108 265,100" fill="currentColor" fill-opacity="0.7"/></g><circle cx="190" cy="100" r="8" fill="currentColor"/><g class="fig-accent"><circle cx="291" cy="100" r="26" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="48" y="158">Sun</text><text x="190" y="80">Moon</text><text x="291" y="146">Earth</text></g><text x="228" y="124" font-size="11" fill="currentColor" text-anchor="middle">shadow</text></svg>',
  alt: 'The Sun is at the left, the Moon is in the middle, and Earth is at the right, all in one straight line (not to scale). A dark cone-shaped shadow stretches from the Moon to a small spot on the side of Earth facing the Sun.',
  caption: 'Figure 1. The Sun, Moon and Earth lined up (not to scale).',
  size: 'md' as const,
}

const gseSeasonsFigure = {
  svg: '<svg viewBox="0 0 350 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-accent-2"><circle cx="50" cy="110" r="36" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1.5"><line x1="96" y1="80" x2="205" y2="80"/><line x1="96" y1="110" x2="205" y2="110"/><line x1="96" y1="140" x2="205" y2="140"/><polyline points="198,75 205,80 198,85" fill="none"/><polyline points="198,105 205,110 198,115" fill="none"/><polyline points="198,135 205,140 198,145" fill="none"/></g><g class="fig-accent"><circle cx="270" cy="110" r="48" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"><line x1="226" y1="129" x2="314" y2="91"/></g><line x1="244" y1="50" x2="296" y2="170" stroke="currentColor" stroke-width="2"/><g font-size="13" fill="currentColor" text-anchor="middle"><text x="238" y="44">N</text><text x="302" y="186">S</text><text x="50" y="166">Sun</text><text x="324" y="80" font-size="11">equator</text><text x="150" y="70" font-size="11">sunlight</text></g></svg>',
  alt: 'The Sun is at the left with arrows of sunlight pointing right toward Earth. Earth is at the right with its axis tilted about 23.5 degrees: the top of the axis, labeled N for the North Pole, leans toward the Sun, and the bottom, labeled S for the South Pole, leans away. A dashed line across Earth marks the equator.',
  caption: 'Figure 2. Earth\'s tilted axis at one point in its orbit (not to scale).',
  size: 'md' as const,
}

export const asvabGsEarthSpacePart5Data = {
  topicSlug: 'asvab-gs-earth-space',
  sections: [
    {
      id: 'gse5-planets',
      type: 'text' as const,
      content: `# 🌍 Earth and Space Science

**Part 5 of 7 — The Solar System, Stars and Seasons**

### The Eight Planets

**Mnemonic:** "**M**y **V**ery **E**ducated **M**other **J**ust **S**erved **U**s **N**achos."

| # | Planet | Type | Remember it for |
|:---:|:---|:---|:---|
| 1 | **Mercury** | Rocky | Closest to the Sun, smallest planet, shortest year (88 days) |
| 2 | **Venus** | Rocky | **Hottest** planet: thick carbon dioxide atmosphere traps heat |
| 3 | **Earth** | Rocky | Liquid water on the surface; one moon |
| 4 | **Mars** | Rocky | "Red Planet" (iron oxide, or rust, in its soil) |
| | *Asteroid belt* | | Rocky leftovers between Mars and Jupiter |
| 5 | **Jupiter** | Gas giant | **Largest** planet; Great Red Spot storm |
| 6 | **Saturn** | Gas giant | Biggest, brightest **rings** |
| 7 | **Uranus** | Ice giant | Spins tipped on its side |
| 8 | **Neptune** | Ice giant | Farthest from the Sun; strongest winds |

- The four **inner planets** are small, rocky and dense. The four **outer planets** are huge, made mostly of gas and ice, and all have rings and many moons.
- **Pluto** was reclassified as a **dwarf planet** in 2006.
- A **comet** is a ball of ice and dust; near the Sun it grows a tail that points **away from the Sun**.
- A **meteoroid** is a space rock; a **meteor** is the streak of light when it burns in our air; a **meteorite** is a piece that reaches the ground.`
    },
    {
      id: 'gse5-stars',
      type: 'text' as const,
      content: `## The Sun and Other Stars

- The Sun is a **star** of average size and temperature (a yellow star). It shines by **nuclear fusion**: hydrogen nuclei fuse into **helium**, releasing energy.
- Sunlight takes about **8 minutes** to reach Earth.
- A star's **color** shows its surface temperature: **blue** stars are hottest, then white, yellow, orange, and **red** stars are coolest.

### The life of a star

| Star | Life story |
|:---|:---|
| Sun-like star | Nebula (cloud of gas and dust) → main-sequence star → **red giant** → **white dwarf** |
| Very massive star | Nebula → main-sequence star → red supergiant → **supernova** explosion → **neutron star** or **black hole** |

### Distances in space

A **light-year** is the **distance** light travels in one year, about 9.5 trillion kilometers (about 6 trillion miles). Despite the word "year," it measures **distance, not time**. The nearest star after the Sun is about 4.2 light-years away. Our Sun is one of billions of stars in the **Milky Way**, a spiral galaxy.`
    },
    {
      id: 'gse5-earth-moon',
      type: 'text' as const,
      content: `## Earth, the Moon and the Seasons

### Rotation and revolution

| Motion | Meaning | Takes | Causes |
|:---|:---|:---|:---|
| **Rotation** | Spinning on its axis | About **24 hours** | Day and night; the Sun "rises" in the east |
| **Revolution** | Orbiting the Sun | About **365¼ days** | The year (the extra ¼ day is why we add a leap day every 4 years) |

Earth turns 360° in $24$ hours, which is $360 \\div 24 = 15$ degrees of longitude per hour. That is why the world uses **24 time zones**, each about 15° wide.

### Seasons come from the tilt

Earth's axis is tilted about **23.5°**. When your hemisphere leans **toward** the Sun, sunlight hits it more **directly** and days are **longer**: summer. When it leans away: winter.

| Date (about) | Event in the Northern Hemisphere |
|:---|:---|
| June 21 | Summer solstice: longest day |
| December 21 | Winter solstice: shortest day |
| March 20 and September 22 | Equinoxes: day and night about equal everywhere |

> **Key Fact:** Seasons are **not** caused by Earth's distance from the Sun. Earth is actually closest to the Sun in early **January**, during the Northern Hemisphere's winter. The hemispheres have opposite seasons.

### The Moon

- The Moon orbits Earth about once a month and always shows us the **same side**.
- **Phases** happen because we see different amounts of the Moon's **sunlit half** as it orbits, **not** because of Earth's shadow. Order: new → waxing crescent → first quarter → waxing gibbous → **full** → waning gibbous → third quarter → waning crescent → new (about 29.5 days).

### Eclipses

| Eclipse | Line-up | Shadow | Moon phase |
|:---|:---|:---|:---|
| **Solar** | Sun – **Moon** – Earth | Moon's shadow falls on Earth | **New** moon |
| **Lunar** | Sun – **Earth** – Moon | Earth's shadow falls on the Moon | **Full** moon |

The name tells you what gets **blocked**: in a solar eclipse the Sun is blocked; in a lunar eclipse the Moon is darkened.

### Tides

Tides are caused mainly by the **Moon's gravity** pulling on the oceans (the Sun adds a smaller pull). Most coasts get **two high tides and two low tides** about every day.

| Tide | When | Range |
|:---|:---|:---|
| **Spring tide** | New and full moon (Sun, Moon and Earth in a line) | **Largest**: highest highs, lowest lows |
| **Neap tide** | First and third quarter (Sun and Moon at right angles) | **Smallest** |

"Spring" here has nothing to do with the season; think of the water "springing up."`
    },
    {
      id: 'gse5-eclipse',
      type: 'multiple-choice' as const,
      figure: gseEclipseFigure,
      content: '**Read the line-up.** 🎯 Use the figure above.',
      exercise: {
        questions: [
          {
            question: 'The figure shows the Moon\'s shadow falling on part of Earth. What do people standing inside that shadow see?',
            options: ['A solar eclipse', 'A lunar eclipse', 'A full moon', 'A spring equinox'],
            correctAnswer: 0,
            explanation: 'With the Moon between the Sun and Earth, the Moon blocks the Sun for people in its shadow: a solar eclipse. A lunar eclipse needs Earth in the middle, and neither a full moon nor an equinox involves this line-up.'
          },
          {
            question: 'For this line-up to happen, what phase must the Moon be in?',
            options: ['New moon', 'Full moon', 'First quarter', 'Waxing gibbous'],
            correctAnswer: 0,
            explanation: 'The Moon sits between the Sun and Earth, so its sunlit side faces away from us and its dark side faces Earth: that is the new moon. A full moon is on the far side of Earth from the Sun, the line-up for a lunar eclipse.'
          }
        ]
      }
    },
    {
      id: 'gse5-seasons',
      type: 'multiple-choice' as const,
      figure: gseSeasonsFigure,
      content: '**Read the tilt.** 🎯 Use the figure above.',
      exercise: {
        questions: [
          {
            question: 'In the position shown, what season is it in the Northern Hemisphere?',
            options: ['Summer', 'Winter', 'Spring', 'Fall'],
            correctAnswer: 0,
            explanation: 'The North Pole leans toward the Sun, so the Northern Hemisphere gets direct sunlight and long days: summer. At the same moment the Southern Hemisphere, tilted away, has winter.'
          },
          {
            question: 'Why is the Northern Hemisphere warmer than the Southern Hemisphere in this position?',
            options: ['Its sunlight is more direct and its days are longer', 'It is millions of miles closer to the Sun than the south', 'Earth is at the point in its orbit nearest the Sun', 'The Sun gives off more energy during those months'],
            correctAnswer: 0,
            explanation: 'The tilt aims the Northern Hemisphere\'s surface more squarely at the Sun and keeps it in daylight longer. Distance is not the reason: the two hemispheres are essentially the same distance from the Sun, Earth is nearest the Sun in January, and the Sun\'s output barely changes.'
          }
        ]
      }
    },
    {
      id: 'gse5-mc',
      type: 'multiple-choice' as const,
      content: '**Space facts.** 🎯',
      exercise: {
        questions: [
          {
            question: 'A star is described as 50 light-years away. What does "light-year" measure?',
            options: ['Distance', 'Time', 'Brightness', 'Age'],
            correctAnswer: 0,
            explanation: 'A light-year is the distance light travels in one year, about 9.5 trillion km. It is a unit of distance, even though it contains the word "year." It does not measure time, brightness or a star\'s age.'
          },
          {
            question: 'Which planet is the largest in our solar system?',
            options: ['Jupiter', 'Saturn', 'Neptune', 'Earth'],
            correctAnswer: 0,
            explanation: 'Jupiter, the fifth planet, is the largest: more than 1,000 Earths could fit inside it. Saturn is second largest, Neptune is much smaller, and Earth is the largest of the rocky inner planets only.'
          },
          {
            question: 'When are the differences between high and low tide the greatest?',
            options: ['At new moon and full moon', 'At first and third quarter', 'Only during a solar eclipse', 'Only in the spring season'],
            correctAnswer: 0,
            explanation: 'At new and full moon the Sun, Moon and Earth line up, so their pulls add together and make spring tides with the largest range. Quarter moons give the smallest range (neap tides). Spring tides happen twice a month all year, not only in spring or during eclipses.'
          }
        ]
      }
    },
    {
      id: 'gse5-input',
      type: 'input-boxes' as const,
      content: `**Time zones.** ✍️ Earth turns 360° in $24$ hours.

**1)** How many degrees of longitude does Earth turn through in one hour?

**2)** Two cities are 45° of longitude apart. About how many hours apart are their clocks (solar time)?`,
      exercise: {
        boxes: 2,
        correctAnswers: ['15', '3'],
        hint1: 'Divide $360$ by $24$.',
        hint2: 'Divide the longitude difference by the degrees per hour.',
        hint3: '$45 \\div 15$.',
        explanation: '(1) $360 \\div 24 = 15$ degrees per hour. (2) $45 \\div 15 = 3$ hours. Real time-zone borders bend around countries and states, but each zone is about 15° wide.'
      }
    },
    {
      id: 'gse5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Planets in order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune ("My Very Educated Mother Just Served Us Nachos")
- Mercury closest and smallest; **Venus hottest**; Mars red; **Jupiter largest**; Saturn's rings; Neptune farthest
- The Sun is an average star powered by **fusion** of hydrogen into helium; blue stars are hottest, red coolest
- Sun-like stars end as **white dwarfs**; massive stars explode as **supernovas**
- A **light-year** is a **distance**
- **Rotation** (24 h) = day and night; **revolution** (365¼ days) = year; 15° per hour = time zones
- **Seasons** come from the **23.5° tilt**, not distance
- **Solar eclipse** = Moon in the middle (new moon); **lunar eclipse** = Earth in the middle (full moon)
- Tides come mainly from the **Moon**; spring tides (new/full) are biggest, neap tides (quarters) smallest

> **Up Next:** Part 6 — test strategy and the traps GS questions set.`
    }
  ]
};
