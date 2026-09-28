export const satExpressionPart4Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei4-intro',
      type: 'text' as const,
      content: `# Rhetorical Synthesis I: Reading the Goal

**Part 4 of 7 — Rhetorical Synthesis: Reading the Goal**

Every Rhetorical Synthesis question ends the same way: "The student wants to ___. Which choice most effectively uses relevant information from the notes to accomplish this goal?" The blank is the only part that changes, and it decides the answer.

### Turn the Goal into a Checklist

Read the goal **before** the notes, and translate it into what the correct sentence must contain.

| The student wants to… | The correct sentence must… |
|---|---|
| **emphasize** X | put X at the center of the sentence |
| **present a finding / conclusion** of a study | state the result, not just what the researchers did |
| **describe the method / approach** | say how the study was done |
| **explain why / how** | give the reason or the mechanism |
| **introduce** X **to an audience unfamiliar with it** | say what X is (a category or a brief description) |
| **present** X **to an audience already familiar with it** | skip the basic definition and give specifics |
| **emphasize a similarity / difference** | name both things and the shared or differing feature |
| **make a generalization** | state a broad claim, beyond any single example |

### Why the Goal Beats the Notes

Wrong choices are built from real notes. A choice can be accurate, detailed, and well written and still fail, because it does a *different* job: it gives background when the goal asks for a finding, or a method when the goal asks for a result.

### The "Unfamiliar Audience" Signal

"An audience unfamiliar with X" is a precise instruction: the reader does not know what X is. A sentence that names X without identifying it fails, however impressive its facts. Look for an identifying phrase: "X, **a mathematician at NASA**, …" or "X, **a seed bank on an Arctic island**, …".`
    },
    {
      id: 'ei4-quiz',
      type: 'multiple-choice' as const,
      content: '**Goal-Reading Practice** 🎯',
      exercise: {
        questions: [
          {
            question: `A synthesis question says: "The student wants to introduce the Rosetta Stone to an audience unfamiliar with it." What must the correct choice include?`,
            options: ['A brief statement of what the Rosetta Stone is', 'The exact year the Rosetta Stone was discovered', 'The name of the scholar who first decoded it', 'A comparison with another ancient inscription'],
            correctAnswer: 0,
            explanation: `An unfamiliar audience does not know what the Rosetta Stone is, so the sentence must identify it. The discovery year, the scholar's name, or a comparison could appear in a good sentence, but none of them tells a new reader what the object is.`
          },
          {
            question: `While researching a topic, a student has taken the following notes: • The Voyager 1 space probe was launched by NASA in 1977. • In 2012, it became the first human-made object to enter interstellar space. • It carries a gold-plated record with sounds and images from Earth. • It is powered by a generator whose output drops a little each year. The student wants to emphasize an achievement of Voyager 1. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['In 2012, Voyager 1 became the first human-made object in interstellar space.', 'Voyager 1 carries a gold-plated record holding sounds and images from Earth.', 'Launched by NASA in 1977, Voyager 1 is powered by an onboard generator.', 'The power output of the generator on Voyager 1 drops a little every year.'],
            correctAnswer: 0,
            explanation: `An achievement is something the probe accomplished, and reaching interstellar space first is the only accomplishment in the notes. The record is something it carries, the launch and power source are background facts, and the falling power output is a limitation.`
          }
        ]
      }    },
    {
      id: 'ei4-text2',
      type: 'text' as const,
      content: `## Deep Dive: One Set of Notes, Four Goals

### Worked Example 1: The Goal Picks the Answer

**Notes:**
- Mary Anning (1799–1847) was a fossil collector in Lyme Regis, England.
- In 1823, she discovered the first complete plesiosaur skeleton.
- As a woman, she was barred from joining the Geological Society of London.
- Scientists often published descriptions of her finds without crediting her.

| Goal | Best sentence | What it has that others lack |
|---|---|---|
| Emphasize a discovery | "In 1823, Anning discovered the first complete plesiosaur skeleton." | The find itself |
| Introduce Anning to an unfamiliar audience | "Mary Anning, a 19th-century English fossil collector, found the first complete plesiosaur skeleton." | Who she was |
| Describe an obstacle she faced | "As a woman, Anning was barred from the Geological Society of London." | A barrier |
| Emphasize that her work went unrecognized | "Scientists often published her finds without crediting her." | Missing credit |

Each of the four sentences is accurate. Each one is right for exactly one goal.

### Worked Example 2: Finding vs. Method

A study goal comes in two flavors, and the SAT offers both as choices.

| Goal says… | Needs | Trap choice |
|---|---|---|
| "present the study's finding" | What the researchers **learned** | A sentence describing what they **did** |
| "describe the study's method" | What the researchers **did** | A sentence reporting the result |

### Worked Example 3: Audience Cues

| Audience | Good opening | Why |
|---|---|---|
| Unfamiliar with CRISPR | "CRISPR, a tool for editing genes, …" | Defines the term first |
| Already familiar with CRISPR | "A new CRISPR therapy for sickle cell disease…" | Skips the definition and gives news |

### The Goal Checklist Routine

1. Read the goal and note its verb (emphasize, introduce, explain, present, compare).
2. Write a two- or three-word checklist ("both birds + size," "what X is," "the result").
3. Check each choice against the list. Most choices fail on the first item.`
    },
    {
      id: 'ei4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Goal-Reading Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: `While researching a topic, a student has taken the following notes: • A lichen is made of a fungus and an alga living together. • The fungus provides structure and absorbs water and minerals. • The alga makes food through photosynthesis. • Lichens can grow on bare rock, where few other organisms survive. The student wants to explain how the partners in a lichen depend on each other. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['In a lichen, the fungus supplies water and minerals, and the alga supplies food.', 'Lichens, which can grow even on bare rock, are made of a fungus and an alga.', 'Lichens can survive on bare rock, where few other kinds of organisms can live.', 'Inside a lichen, the alga makes food through the process of photosynthesis.'],
            correctAnswer: 0,
            explanation: `Dependence on each other means each partner supplies something the other uses, so the sentence needs both roles. Only the water-and-minerals-and-food sentence gives both. The bare-rock sentences describe where lichens live and, at most, what they are made of, and the photosynthesis sentence gives the alga's role alone.`
          },
          {
            question: `While researching a topic, a student has taken the following notes: • Katherine Johnson (1918–2020) was a mathematician at NASA. • She calculated the flight path for Alan Shepard's 1961 spaceflight. • Before his 1962 orbital flight, John Glenn asked that she check the computer's calculations. • In 2015, she received the Presidential Medal of Freedom. The student wants to introduce Katherine Johnson to an audience unfamiliar with her. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['Katherine Johnson was a NASA mathematician who calculated a 1961 flight path.', 'Before his 1962 flight, John Glenn asked that Johnson check the computer\'s calculations.', 'Johnson did the calculations for the flight path of Alan Shepard\'s 1961 spaceflight.', 'In 2015, at age 97, Katherine Johnson received the Presidential Medal of Freedom.'],
            correctAnswer: 0,
            explanation: `A reader who has never heard of Johnson needs to learn who she was. Only the first sentence identifies her as a NASA mathematician. The Glenn sentence and the flight-path sentence assume the reader already knows who "Johnson" is, and the award sentence names an honor without saying what she did to earn it.`
          },
          {
            question: `While researching a topic, a student has taken the following notes: • Many plants, including coffee and citrus, make nectar with small amounts of caffeine. • In a 2013 study, Geraldine Wright's team trained honeybees to link a floral scent with a sugar reward. • Some bees received sugar laced with caffeine; others received plain sugar. • Bees given caffeine were three times as likely to remember the scent 24 hours later. The student wants to present the study's main finding. Which choice most effectively uses relevant information from the notes to accomplish this goal?`,
            options: ['Bees given caffeine were three times as likely to recall the scent a day later.', 'Wright\'s team trained honeybees to link a floral scent with a reward of sugar water.', 'In the study, some bees got sugar laced with caffeine, and others got plain sugar.', 'Coffee and citrus plants make nectar that contains small amounts of caffeine.'],
            correctAnswer: 0,
            explanation: `A finding is what the researchers learned: caffeine made bees three times as likely to remember the scent. The training sentence and the two-groups sentence describe the method, and the coffee-and-citrus sentence is background that came before the study.`
          }
        ]
      }
    },
    {
      id: 'ei4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Goal Checklist Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"Introduce X to an audience unfamiliar with it" requires [saying what X is|the most recent statistic|a comparison to Y|a direct quotation]',
          '"Present the study\'s finding" requires [the result|the method|the researchers\' names|the sample size]',
          '"Explain why" requires [a reason|a date|a location|a name]',
          'The first thing to read in a synthesis question is the [goal|first note|longest choice|last note]'
        ],
        correctAnswers: ['saying what X is', 'the result', 'a reason', 'goal'],
        hint1: 'An unfamiliar reader does not know what X is.',
        hint2: 'A finding is what the researchers learned.',
        hint3: '"Why" asks for a cause or reason.',
        explanation: 'An unfamiliar audience needs X identified. A finding is the result, not the method. "Explain why" needs a reason. Read the goal first, then check each choice against it.'
      }
    },
    {
      id: 'ei4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Goal wording | Checklist |
|---|---|
| Emphasize X | X at the center |
| Present a finding | The result, not the method |
| Explain why / how | A reason or mechanism |
| Introduce to an unfamiliar audience | Identify what X is |
| Familiar audience | Skip the definition; give specifics |
| Similarity / difference | Both things + the feature |
| Strategy | Goal first, checklist second, choices last |

*Next: Rhetorical Synthesis — Choosing the Right Notes →*`    }
  ]
};
