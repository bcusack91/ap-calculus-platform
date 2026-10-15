export const bioFitnessPart4Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'bio-fitness-environment-p4-s1-intro',
      type: 'text' as const,
      content: `
## Fitness and Environment: Timing and Coordination in Animals

**Part 4 of 7 — Timing and Coordination in Animals**

Animals face the same timing problem as plants on two scales: **daily** (when to feed, sleep and hide) and **seasonal** (when to breed, molt, migrate or shut down). They solve it with internal clocks that are kept on schedule by environmental cues, plus behaviors that move them toward good conditions and away from bad ones.

### Vocabulary for timing

| Term | Meaning |
|---|---|
| **Circadian rhythm** | A physiological or behavioral cycle with a period of about 24 hours that continues even without external cues |
| **Endogenous** | Generated inside the organism (an internal clock) |
| **Entrainment** | Resetting of an internal clock to match an external cycle, most often the light-dark cycle |
| **Free-running period** | The length of one cycle when an organism is kept in constant conditions (for example, constant darkness) |
| **Photoperiod** | The length of daylight in a 24-hour day, used as a seasonal cue |
| **Taxis** | Movement directed toward or away from a stimulus |
| **Kinesis** | A change in the speed of movement or rate of turning in response to a stimulus, with no particular direction |

> **Scope note:** this part covers *timing* and simple orientation. Learned behavior, foraging, communication and mating behavior are treated in the animal behavior topic, and hormone-by-hormone detail is in the endocrine topic.
      `
    },
    {
      id: 'bio-fitness-environment-p4-s2-circadian',
      type: 'text' as const,
      content: `
### Circadian rhythms: an internal clock set by light

How do we know the clock is **internal** rather than a direct reaction to light? Put the animal in constant darkness. If the rhythm were just a response to lights going on and off, it would vanish. Instead it continues, but it drifts, because the internal period is close to, not exactly, 24 hours.

#### Worked example: a mouse in constant darkness
A nocturnal mouse is kept on 12 h light : 12 h dark, with lights off at 18:00. It starts running on its wheel at about 18:00 every day. On day 0 it is moved to **constant darkness**. (Hypothetical data.)

| Day in constant darkness | Clock time when running starts |
|---|---|
| 0 | 18:00 |
| 1 | 17:30 |
| 2 | 17:00 |
| 4 | 16:00 |
| 10 | 13:00 |

**Step 1:** Activity starts 30 minutes earlier each day, so the free-running period is $24 - 0.5 = 23.5$ hours.

**Step 2:** After $n$ days the shift is $n \\times 0.5$ h. After 10 days, $10 \\times 0.5 = 5$ h earlier, so 18:00 becomes 13:00.

**Step 3, interpret:** The rhythm persists without light, so it is **endogenous**. Its period is not exactly 24 h, so in nature it must be **entrained** by daily light to stay in step with the real day. When the mouse is returned to a light-dark cycle, its activity shifts back over several days.

### The same clock in humans
- The average human free-running period is slightly **longer** than 24 hours (about 24.2 h in controlled studies), so morning light each day resets the clock.
- In mammals, a master clock in the **suprachiasmatic nucleus (SCN)** of the hypothalamus receives light information from the eyes and coordinates clocks throughout the body; the pineal gland releases the hormone **melatonin** at night.
- **Jet lag** happens because the clock can shift only about an hour or so per day. After crossing many time zones, sleep, hunger and body temperature rhythms stay out of step with local time until daily light re-entrains the clock.
      `
    },
    {
      id: 'bio-fitness-environment-p4-s3-mcq-core',
      type: 'multiple-choice' as const,
      content: `
**Checkpoint: daily rhythms**
      `,
      exercise: {
        questions: [
          {
            question: 'A rodent kept in constant darkness starts running on its wheel about 15 minutes later each day. What does this observation show?',
            options: [
              'Its clock is internal and runs a little longer than 24 hours',
              'Its clock is now set by small daily changes in room temperature',
              'Its activity is a direct response to the light-dark cycle',
              'Its clock has stopped, so its activity begins at random times'
            ],
            correctAnswer: 0,
            explanation: 'The rhythm persists with no light cue, so it is endogenous, and a 15-minute daily delay means a free-running period of about 24.25 hours. A random or stopped clock would not produce a steady drift, and there is no light-dark cycle to respond to.'
          },
          {
            question: 'After a traveler flies six time zones east, her sleep and hunger cycles take several days to match local time. Which statement best explains the delay?',
            options: [
              'Daily light shifts her internal clock gradually',
              'Her body has no clock and waits for new meal times',
              'Her clock genes must mutate to match the new time zone',
              'Her clock shifts at once, but her hormones lag for days'
            ],
            correctAnswer: 0,
            explanation: 'The internal circadian clock is entrained by light, but it can shift only a limited amount each day, so re-entrainment takes several days. Clock genes do not mutate in response to travel; their expression is reset by light.'
          }
        ]
      }
    },
    {
      id: 'bio-fitness-environment-p4-s4-seasonal',
      type: 'text' as const,
      content: `
### Seasonal timing

Day length is the most reliable calendar available to an animal, just as it is for plants.

| Seasonal event | Typical cue | Example |
|---|---|---|
| **Breeding** | Lengthening days in spring, or shortening days in autumn | Many songbirds' gonads enlarge as days lengthen, so eggs hatch when insects are plentiful. Sheep and deer breed as days shorten in autumn, so young are born the following spring |
| **Molt** | Changing day length | Snowshoe hares and arctic foxes molt to white as days shorten |
| **Migration** | Day length, working with an internal annual rhythm | Caged migratory songbirds become restless and face their migratory direction at the right season even indoors |

### Shutting down: four kinds of dormancy

| State | When it occurs | What happens | Example |
|---|---|---|---|
| **Hibernation** | Winter, for weeks to months | Body temperature and metabolic rate drop far below normal, with periodic brief arousals | Ground squirrels, many bats |
| **Daily torpor** | A few hours, often overnight | A short, shallow drop in body temperature and metabolism | Hummingbirds on cold nights |
| **Estivation** | Hot, dry season | Metabolism slows to survive heat and drought | African lungfish sealed in a mucus cocoon in dried mud |
| **Diapause** | A set stage of development, often cued by photoperiod | Development pauses until conditions improve | Many insects overwinter as diapausing eggs or pupae |

All four save energy when food or water is scarce. Each is triggered by a cue (day length, temperature, drought, food shortage) that **predicts** hard conditions, so the animal prepares before the hard conditions arrive.
      `
    },
    {
      id: 'bio-fitness-environment-p4-s5-taxis-kinesis',
      type: 'text' as const,
      content: `
### Taxis versus kinesis

| | **Taxis** | **Kinesis** |
|---|---|---|
| Direction | Oriented toward (+) or away from (−) the stimulus | No orientation to the stimulus |
| What changes | Heading | Speed of movement or rate of turning |
| Examples | Moths flying toward a light (positive phototaxis); bacteria swimming up a sugar gradient (positive chemotaxis) | Pill bugs moving faster in dry air and slowing in moist air |

A kinesis can still produce **aggregation**. Pill bugs (terrestrial isopods) lose water quickly. In dry air they move rapidly; in moist air they slow down and turn less. Because they linger wherever it is damp, they end up clustered there, even though no individual "heads for" the moisture.

#### Worked example: a choice-chamber test
Thirty pill bugs are placed in a two-sided chamber with dry filter paper on one side and damp filter paper on the other. After 10 minutes, **7** are on the dry side and **23** are on the damp side. (Hypothetical data.)

**Null hypothesis:** pill bugs show no preference, so 15 are expected on each side.

$$\\chi^2 = \\sum \\frac{(O - E)^2}{E} = \\frac{(7 - 15)^2}{15} + \\frac{(23 - 15)^2}{15} = \\frac{64}{15} + \\frac{64}{15} \\approx 8.53$$

With 2 categories, degrees of freedom $= 2 - 1 = 1$. The critical value at $p = 0.05$ is 3.84. Because $8.53 > 3.84$, reject the null hypothesis: the distribution differs from random, consistent with a preference for moist conditions.

**Fitness link:** pill bugs breathe through gill-like structures that must stay moist, so behaviors that keep them in damp places reduce water loss and raise survival.
      `
    },
    {
      id: 'bio-fitness-environment-p4-s6-input',
      type: 'input-boxes' as const,
      content: `
**Practice: clocks and choices**

1) A mouse with a free-running period of 23.5 h is kept in constant darkness for 8 days. By how many hours has its activity onset shifted earlier?

2) In a choice chamber, 10 of 30 pill bugs are on the dry side and 20 are on the damp side. Calculate $\\chi^2$ to two decimal places.

3) Name the type of response in which an animal changes its speed or turning rate, but not its heading, in response to a stimulus.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '3.33', 'kinesis'],
        hint1: 'Each day the onset shifts by 24 − 23.5 hours; multiply by the number of days.',
        hint2: 'Expected is 15 on each side. Compute (10 − 15)²/15 + (20 − 15)²/15.',
        hint3: 'Directed movement is a taxis; the undirected change in activity has a different name.',
        explanation: 'The shift is 0.5 h × 8 days = 4 h. χ² = 25/15 + 25/15 ≈ 3.33, which is below 3.84, so this smaller difference is not significant at p = 0.05. A change in speed or turning without orientation is a kinesis.'
      }
    },
    {
      id: 'bio-fitness-environment-p4-s7-mismatch',
      type: 'text' as const,
      content: `
### When cues mislead: phenological mismatch

**Phenology** is the timing of seasonal life events. A cue works only as long as it predicts the conditions that matter. Climate change can break that link.

#### Case study: great tits in the Netherlands
In the Hoge Veluwe forest in the Netherlands, great tits (*Parus major*) feed their nestlings largely on winter moth caterpillars, which are abundant for only a short window each spring.

| Event | Main driver | Change as springs warmed (1970s to 1990s) |
|---|---|---|
| Caterpillar peak | Spring temperature, which controls oak budburst and caterpillar growth | Moved substantially earlier |
| Great tit egg laying | Cues including day length and early-spring temperature | Shifted much less |
| Result | | Chicks increasingly hatched after the food peak |

**Fitness consequences:** nestlings that hatch late get less food, so fewer survive to fledge. Females that laid earliest raised the most young, so **selection for earlier laying** grew stronger. If laying date is partly heritable, the population can evolve earlier breeding, but evolution may lag behind a fast-changing climate.

Similar mismatches are documented elsewhere: snowshoe hares that turn white on schedule (cued by photoperiod) stand out against the ground when snow arrives late, and suffer more predation.

### AP Connection
For a question about timing, build the chain: **cue** (photoperiod, temperature, light) → **mechanism** (internal clock, hormone change, behavior) → **response** (breeding, molt, dormancy, movement) → **effect on survival or reproduction**. If the question adds environmental change, ask whether the cue still predicts conditions correctly.
      `
    },
    {
      id: 'bio-fitness-environment-p4-s8-mcq-final',
      type: 'multiple-choice' as const,
      content: `
**Exit check: animal timing and movement**
      `,
      exercise: {
        questions: [
          {
            question: 'Which observation describes a taxis rather than a kinesis?',
            options: [
              'Bacteria swim up a sugar gradient toward its source',
              'Pill bugs move faster in dry air and slow in damp air',
              'Woodlice turn more often as humidity drops, heading nowhere',
              'Fly larvae crawl faster in brighter light, in random directions'
            ],
            correctAnswer: 0,
            explanation: 'Swimming up a gradient toward the source is oriented movement, which defines a taxis (positive chemotaxis). The other responses change speed or turning rate without orienting toward the stimulus, which defines a kinesis.'
          },
          {
            question: 'An African lungfish burrows into mud and greatly lowers its metabolism when its pond dries up in the hot season, then becomes active again when the rains return. This response is best classified as',
            options: [
              'estivation',
              'hibernation',
              'diapause',
              'daily torpor'
            ],
            correctAnswer: 0,
            explanation: 'Dormancy that carries an animal through a hot, dry season is estivation. Hibernation is winter dormancy, daily torpor lasts only hours, and diapause is a pause at a set stage of development.'
          },
          {
            question: 'In a Dutch forest, warmer springs moved the peak of winter moth caterpillars earlier, while great tits kept laying eggs at nearly the same date. What is the most likely effect on great tit fitness?',
            options: [
              'Fewer chicks fledge, as their peak food need now falls after the caterpillar peak',
              'More chicks fledge, as caterpillars are now present for a longer stretch',
              'Fledging is unchanged, as tits switch to other prey at no cost',
              'Adults learn to lay earlier each year, so the mismatch quickly vanishes'
            ],
            correctAnswer: 0,
            explanation: 'Nestlings that hatch after the caterpillar peak get less food and fewer survive, so mismatch lowers fitness and favors earlier-laying females. Alternative prey are less suitable, and learning by adults has not closed the gap.'
          }
        ]
      }
    }
  ]
};
