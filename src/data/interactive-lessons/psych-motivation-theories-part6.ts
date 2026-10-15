export const psychMotivationPart6Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motivation-theories-p6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Motivation Theories

**Part 6 of 7 — Eating and Belongingness**

You eat lunch at noon even on days you had a late breakfast, and you keep reaching for chips at a party long after you stopped feeling hungry. Eating is one of the clearest places to see body and mind working together, and the need to belong is one of the strongest motives humans have.

### 📚 Eating: A Complex Motivated Behavior

The CED describes eating as **a complex motivated behavior that demonstrates how physical and mental processes interact.** Two kinds of influences work together:

| Influence | What it includes | Theory it connects to |
|------|-----------|-----------|
| **Internal (physical) signals** | Hormones that signal hunger and fullness, regulated by the brain | Drive-reduction theory and homeostasis (Part 1) |
| **External factors** | The presence of food, the time of day, social gatherings around meals | Incentive theory (Part 4) and learning |

### Hunger and Satiety Hormones

The CED names two hormones for eating: **ghrelin** and **leptin**, **regulated by the hypothalamus via the pituitary gland.**

| Hormone | Where it comes from | Main effect | When levels rise |
|------|-----------|-----------|-----------|
| **Ghrelin** | Released mainly by the stomach | Increases **hunger**; signals "time to eat" | When the stomach is empty and before usual mealtimes; levels fall after eating |
| **Leptin** | Released by fat cells | Promotes **satiety** (the feeling of fullness) and reduces appetite over time; signals that the body's energy stores are sufficient | When the body's fat stores increase |

A memory trick: **gh**relin makes you **g**rowl with hunger; **le**ptin helps you **le**ave the table.

### The Hypothalamus and the Pituitary

The **hypothalamus**, a limbic system structure, monitors the body's internal state and regulates hunger, thirst and body temperature. It works with the **pituitary gland**, which it controls, to keep these systems in balance. In drive-reduction terms, these signals create and then reduce the **hunger drive**, keeping energy in **homeostasis**.

### Other Hormones You Know

Only five hormones are in the AP Psychology course. Two others connect to this topic:

| Hormone | Connection to motivation |
|------|-----------|
| **Adrenaline** | Raises arousal during challenges (the Yerkes-Dodson law in Part 2) |
| **Oxytocin** | Associated with social bonding and trust, which links to belongingness below |

*(The fifth, **melatonin**, regulates sleep.)*
      `
    },
    {
      id: 'motivation-theories-p6-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Kai has not eaten since breakfast, and it is now late afternoon. His stomach is empty and he feels intensely hungry. Which hormonal change most likely contributes to this feeling?',
            options: [
              'A rise in leptin',
              'A rise in ghrelin',
              'A drop in ghrelin',
              'A rise in melatonin'
            ],
            correctAnswer: 1,
            explanation: 'Ghrelin is released mainly by an empty stomach and increases hunger, so a rise in ghrelin fits Kai\'s situation. Leptin promotes fullness, a drop in ghrelin would reduce hunger and melatonin regulates sleep.'
          },
          {
            question: 'In a laboratory study, mice that cannot produce leptin eat far more than typical mice and become very heavy. Which explanation fits the role of leptin best?',
            options: [
              'Without leptin, the brain gets no signal that energy stores are already sufficient',
              'Without leptin, the stomach releases no hormone that signals it is time to eat',
              'Without leptin, the body produces too little adrenaline to burn the extra energy',
              'Without leptin, the brain can no longer tell that it is the usual time for meals'
            ],
            correctAnswer: 0,
            explanation: 'Leptin, released by fat cells, signals that the body has enough stored energy and helps reduce appetite. Without that signal, the brain behaves as if stores are low, so the mice keep eating. The stomach hunger signal is ghrelin, not leptin, and adrenaline and mealtime cues are not leptin\'s role.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p6-s3-external',
      type: 'text' as const,
      content: `
### 📚 External Factors in Eating

The CED states that **external factors like the presence of food, time of day, or social gatherings around meals also influence the behavior of eating.** These factors explain eating that has little to do with an energy need.

| External factor | How it affects eating | Example |
|------|-----------|-----------|
| **Presence of food** | Seeing or smelling food, and having it within reach, prompts eating; larger portions tend to lead people to eat more | Eating more popcorn from a large tub than a small bag at the same movie |
| **Time of day** | Through learning, regular mealtimes become cues for eating, and people often feel hungry at their usual times | Feeling hungry at noon because that is when lunch usually happens |
| **Social gatherings** | People tend to eat more, and for longer, when eating with others; meals are woven into family and cultural traditions | Eating a second helping at a holiday dinner because everyone is still at the table |

Learning also shapes **what** people want to eat. Food preferences differ widely across cultures and families, which is more evidence that eating is not driven by biology alone.

### Worked Example: One Meal, Two Kinds of Influence

*Scenario: At a family holiday dinner, Ines eats a full plate and feels satisfied. Twenty minutes later, her uncle brings out her favorite pie, everyone starts a second round and she eats a large slice.*

1. **Internal signals:** During the first plate, rising fullness signals and falling hunger signals reduced her hunger drive. By the end of the plate, she had no physical need for more food.
2. **External factors:** The **presence** of a favorite food and the **social gathering** around the table pulled her to keep eating.
3. **Theory link:** Drive-reduction theory explains the first plate; incentive theory and external eating cues explain the pie.
4. **Big idea:** Eating is a clear case of physical and mental processes **interacting**. Neither alone explains everything she ate.

### 📚 Belongingness: The Need to Belong

The CED learning objective asks you to explain how eating **and belongingness** motivate behavior. Psychologists Roy Baumeister and Mark Leary argued that humans have a fundamental **need to belong**: a motive to form and keep close, lasting, positive relationships.

| Evidence or pattern | What it shows |
|------|-----------|
| **People form groups easily** | Even strangers placed on arbitrary teams quickly feel loyalty to their group |
| **Exclusion hurts** | In "Cyberball" experiments, participants who are left out of a simple online ball-tossing game by other "players" (actually a computer program) report lower mood and a weaker sense of belonging, even after a few minutes |
| **People resist losing relationships** | People often maintain ties even when it is costly or inconvenient |
| **Loneliness is linked to health** | Chronic social isolation is associated with poorer physical and mental health |

The need to belong helps explain behavior covered elsewhere in the course: **conformity** to fit in with a group, working hard for a team, and the distress of social rejection. **Oxytocin** is associated with social bonding, one biological piece of belonging.

> **AP Connection:** Cyberball studies use **deception**: participants believe they are playing with real people. Ethical guidelines allow deception only when it is necessary and the risk is minimal, and they require a full **debriefing** afterward that explains the deception and helps participants leave in a good state.
      `
    },
    {
      id: 'motivation-theories-p6-s4-aaq-data',
      type: 'input-boxes' as const,
      content: `
**AAQ Practice Study** 📋

*Practice study (not a real citation).* Researchers hypothesized that eating with others increases how much people eat. They recruited 80 undergraduates at one large university. Participants were told the study was about "rating the taste of new menu items." Each participant was **randomly assigned** to eat a buffet lunch either **alone** or **at a table with three other participants**. Researchers weighed each plate before and after the meal and converted the food eaten into **calories consumed**.

| Condition | Mean calories consumed | Standard deviation |
|------|------|------|
| Alone | 620 | 150 |
| With three others | 780 | 160 |

All participants gave informed consent, could stop at any time and were told the true purpose of the study after the meal.
      `,
      exercise: {
        questions: [
          {
            question: 'By how many calories did the mean for the "with three others" group exceed the mean for the "alone" group?',
            answer: '160',
            acceptableAnswers: ['160', '160 calories'],
            explanation: '780 - 620 = 160 calories. On average, participants who ate with others consumed 160 more calories.'
          },
          {
            question: 'Telling participants the study was about "rating the taste of new menu items" is an example of ___, which ethical guidelines allow only with a debriefing afterward.',
            answer: 'deception',
            acceptableAnswers: ['deception', 'deceiving participants'],
            explanation: 'The cover story hid the true purpose, which is deception. The researchers addressed it by debriefing participants after the meal.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p6-s5-aaq',
      type: 'multiple-choice' as const,
      content: `
**AAQ-Style Questions** 🔬

Answer these questions about the practice study above.
      `,
      exercise: {
        questions: [
          {
            question: 'Which research method did the researchers use?',
            options: [
              'A correlational study',
              'An experiment',
              'A naturalistic observation',
              'A case study'
            ],
            correctAnswer: 1,
            explanation: 'The researchers manipulated whether participants ate alone or with others and randomly assigned participants to those conditions, which makes it an experiment. A correlational study or naturalistic observation would measure eating without assigning conditions, and a case study examines one person in depth.'
          },
          {
            question: 'How was the dependent variable operationally defined?',
            options: [
              'As how hungry participants said they felt before the lunch began',
              'As whether each participant ate alone or with three other participants',
              'As calories consumed, based on weighing each plate before and after',
              'As the taste ratings participants gave to each of the new menu items'
            ],
            correctAnswer: 2,
            explanation: 'The study measured eating as calories consumed, calculated from plate weights before and after the meal. Eating alone vs. with others is the independent variable, and hunger ratings and taste ratings were not the outcome the hypothesis concerned.'
          },
          {
            question: 'Which statement best describes a limit on the generalizability of the findings?',
            options: [
              'Only undergraduates at a single university eating lunch were studied',
              'Participants were randomly assigned to one of the two conditions',
              'The researchers measured calories rather than asking about hunger',
              'The two groups had similar standard deviations in calories eaten'
            ],
            correctAnswer: 0,
            explanation: 'The sample was limited to undergraduates at one university at a single meal, so the effect may differ for other ages, cultures or meals. Random assignment strengthens the causal conclusion, an objective calorie measure is a strength and similar standard deviations do not limit generalization.'
          },
          {
            question: 'Do the results support or refute the hypothesis, and why?',
            options: [
              'They refute it, since the alone group showed less variability in calories eaten',
              'The data support it, since the group condition ate more calories on average',
              'The hypothesis is refuted, since the mean difference was smaller than either standard deviation',
              'Supported, since every participant in a group ate more than every solo eater'
            ],
            correctAnswer: 1,
            explanation: 'The hypothesis predicted more eating with others, and the group condition consumed 160 more calories on average, which supports it. Variability does not test the hypothesis, the difference can be meaningful even when smaller than the standard deviations, and means do not show that every group participant outate every solo participant.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p6-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Eating and Belongingness

**Quick decision guide**

- Empty stomach, hunger before meals → **ghrelin**
- Fullness, enough stored energy, reduced appetite → **leptin**
- The brain region that regulates hunger and works through the pituitary → **hypothalamus**
- Eating because food is there, because it is noon or because everyone else is eating → **external factors**
- Seeking acceptance, distress at being left out, joining groups → **need to belong**

**How to write the AAQ parts for a study like the one above**

| AAQ part | What a full-credit answer does | Example from the practice study |
|------|-----------|-----------|
| Research method | Names it and gives the reason | Experiment: eating condition was manipulated and participants were randomly assigned |
| Operational definition | Gives the measurable procedure | Calories consumed, from plate weights before and after the meal |
| Statistic | Says what the number shows in context | The group condition ate 160 more calories on average |
| Ethics | Names the guideline and how it was applied | Debriefing: participants were told the true purpose after the meal |
| Generalizability | Uses the sample or setting as evidence | Only undergraduates at one university, at one lunch |
| Support or refute | States the direction and cites the result | Supports: the mean was higher with others |

> **AP Connection:** Do not write that a study "proves" a hypothesis. Write that the results **support** it and cite the specific difference.
      `
    }
  ]
}
