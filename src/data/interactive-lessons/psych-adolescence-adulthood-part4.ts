export const psychAdolescencePart4Data = {
  topicSlug: 'adolescence-adulthood',
  sections: [
    {
      id: 'adol4-s1-intro',
      type: 'text' as const,
      content: `
## Adulthood & Aging

**Part 4 of 7 — Physical and Cognitive Change in Adulthood**

> 🔑 **Key Concept:** Adulthood spans most of the lifespan. Physical abilities level off and then decline at varying rates, crystallized intelligence stays relatively stable while fluid intelligence tends to wane, and dementia is a disorder, not a normal part of aging.

Development doesn't stop at adulthood. The AP exam expects you to explain how physical and cognitive changes in adulthood affect behavior, and to separate normal aging from disease.

### Core Definitions

| Term | Definition |
|------|-----------|
| **Menopause** | The end of menstruation and of reproductive ability in women, typically around age 50 |
| **Reaction time** | The time needed to respond to a stimulus; it slows gradually across adulthood |
| **Sensory acuity** | The sharpness of a sense, such as seeing fine detail or hearing high-pitched sounds; both visual and auditory acuity decline with age |
| **Crystallized intelligence** | Accumulated knowledge, vocabulary, and skills; remains relatively stable through adulthood |
| **Fluid intelligence** | The ability to reason quickly and solve new problems; tends to decline as people age |
| **Dementia** | A cognitive disorder in which memory and thinking decline enough to interfere with daily life; Alzheimer's disease is the most common cause |

### Real-World Example

A 75-year-old retired teacher can still recite Shakespeare passages she learned decades ago (crystallized intelligence preserved), but finds it harder to learn a new phone app quickly (fluid intelligence declining). She now needs reading glasses and asks people to repeat themselves in noisy restaurants (declining sensory acuity). This pattern, preserved knowledge with slower processing and duller senses, is normal aging, NOT dementia.
      `
    },
    {
      id: 'adol4-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 65-year-old crossword champion continues to excel at puzzles requiring vocabulary and general knowledge, but struggles with timed tasks requiring rapid problem-solving of novel patterns. This illustrates:',
            options: [
              'Crystallized and fluid intelligence both decline at the same rate with age',
              'Crystallized intelligence is largely preserved while fluid intelligence tends to decline',
              'Fluid intelligence rises with age while crystallized intelligence declines',
              'The slower puzzle speed is most likely an early sign of developing dementia'
            ],
            correctAnswer: 1,
            explanation: 'Crystallized intelligence (accumulated knowledge, vocabulary, expertise) tends to remain stable through adulthood, while fluid intelligence (speed and reasoning with novel problems) tends to decline. The crossword champion\'s pattern is normal aging.'
          },
          {
            question: 'Which change is part of the typical physical decline of adulthood described by developmental psychologists?',
            options: [
              'A sudden loss of all reproductive ability in both sexes at age 40',
              'Faster reaction times as experience with daily tasks accumulates',
              'Gradual slowing of reaction time and duller hearing and vision',
              'Improved flexibility once people stop playing competitive sports'
            ],
            correctAnswer: 2,
            explanation: 'Adulthood brings a leveling off and then a varying decline in reproductive ability, mobility, flexibility, reaction time, and visual and auditory acuity. Menopause ends reproduction for women around age 50, and the decline is gradual rather than sudden for men.'
          }
        ]
      }
    },
    {
      id: 'adol4-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Physical Change Across Adulthood

| Ability | Typical course | How it shows up in behavior |
|---------|---------------|-----------------------------|
| **Reproductive ability** | Women: menopause around 50 ends fertility. Men: a gradual decline in fertility with no single endpoint | Family planning decisions shift with age |
| **Mobility and flexibility** | Strength, joint flexibility, and endurance peak in early adulthood, then decline gradually | Older adults may give up high-impact sports for walking or swimming |
| **Reaction time** | Slows gradually from early adulthood | Older drivers leave more following distance and avoid night driving |
| **Visual acuity** | Focusing on near objects gets harder (most people need reading glasses by their mid-40s to 50s) | Larger print, brighter light |
| **Auditory acuity** | High-pitched sounds fade first | Trouble following conversation in noisy places; risk of social withdrawal |

**Wide individual variation:** Exercise, diet, and health habits slow many of these declines. A fit 70-year-old may outperform a sedentary 45-year-old.

### Normal Aging vs. Dementia

| Normal aging | Dementia |
|-------------|----------|
| Occasionally forgetting a name, then remembering it later | Forgetting recent events and repeating the same question many times |
| Slower to learn new technology | Losing the ability to follow familiar routines, such as a recipe used for years |
| Vocabulary and knowledge intact | Language and judgment decline over time |
| Daily life continues independently | Decline interferes with daily functioning and worsens over time |

### How Researchers Study Aging: Cross-Sectional vs. Longitudinal

| Design | How it works | Weakness when studying aging |
|--------|-------------|------------------------------|
| **Cross-sectional** | Compares different age groups at one time (25-, 45-, 65-, and 85-year-olds tested this year) | **Cohort effects**: age groups grew up with different schooling, health care, and technology, so differences may reflect generation rather than age |
| **Longitudinal** | Follows the same people and retests them for years | **Attrition**: people who drop out tend to be less healthy, so the remaining sample can make aging look kinder than it is |

**Classic result:** Early cross-sectional studies suggested that intelligence declined steadily from young adulthood. Longitudinal studies that followed the same adults found that many abilities, especially crystallized ones, held steady into the 60s. Part of the "decline" in the cross-sectional data was a cohort effect: the older groups had received less schooling.
      `
    },
    {
      id: 'adol4-s4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Type one word for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'The type of intelligence based on accumulated knowledge and vocabulary, which stays relatively stable with age, is _____ intelligence.',
            answer: 'crystallized',
            acceptableAnswers: ['crystallised', 'crystal'],
            explanation: 'Crystallized intelligence reflects what a person has learned, and it remains relatively stable through adulthood.'
          },
          {
            question: 'The end of menstruation and reproductive ability in women, typically around age 50, is called _____.',
            answer: 'menopause',
            acceptableAnswers: ['the menopause'],
            explanation: 'Menopause is the reproductive milestone named in the CED for adult physical development.'
          },
          {
            question: 'In a cross-sectional study of aging, differences caused by the era each age group grew up in rather than by age itself are called _____ effects.',
            answer: 'cohort',
            acceptableAnswers: ['cohorts', 'generational', 'generation'],
            explanation: 'Cohort effects arise because people born in different years had different schooling, health care, and experiences.'
          }
        ]
      }
    },
    {
      id: 'adol4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A retired professor scores well on vocabulary tests but slowly on timed puzzles. This illustrates preserved _____ intelligence',
            options: ['fluid', 'crystallized', 'emotional', 'general']
          },
          {
            label: 'A 58-year-old can no longer hear birdsong but hears low voices clearly. This reflects declining _____',
            options: ['reaction time', 'auditory acuity', 'flexibility', 'fluid intelligence']
          },
          {
            label: 'A woman who gets lost driving the route to her home of 30 years is showing signs of _____',
            options: ['normal aging', 'menopause', 'dementia', 'a cohort effect']
          }
        ],
        correctAnswers: ['crystallized', 'auditory acuity', 'dementia'],
        hint1: 'Knowledge and vocabulary hold up with age.',
        hint2: 'High-pitched sounds are the first to fade.',
        hint3: 'Losing a long-familiar routine goes beyond normal forgetting.',
        explanation: 'Preserved vocabulary is crystallized intelligence. Losing high-pitched sounds first is declining auditory acuity. Getting lost on a route used for decades interferes with daily life and suggests dementia rather than normal aging.'
      }
    },
    {
      id: 'adol4-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

| Misconception | Correction |
|--------------|-----------|
| "All intelligence declines with age." | Only fluid intelligence tends to wane; crystallized intelligence remains relatively stable. |
| "Memory loss is just part of getting old." | Mild slowing is normal. Memory loss that disrupts daily life signals dementia, a disorder. |
| "Physical decline is sudden and the same for everyone." | Decline is gradual and varies widely with health, exercise, and genetics. |
| "A cross-sectional study shows how people change with age." | It shows **age differences** at one time; only a longitudinal study tracks change in the same people. |

> 🔑 **AP Connection:** Aging research is a natural AAQ topic. If a study compares age groups at one time, call it **cross-sectional** and name a cohort effect as a limit. If it retests the same people for years, call it **longitudinal** and name attrition as a limit. Neither design is an experiment, because age cannot be randomly assigned.
      `
    },
    {
      id: 'adol4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In 2026, researchers test the problem-solving speed of 30-, 50-, and 70-year-olds and find the 70-year-olds slowest. A critic says the gap may partly reflect differences in schooling between generations. The critic is pointing to:',
            options: [
              'Attrition in a longitudinal design',
              'A cohort effect in a cross-sectional design',
              'Demand characteristics in an experiment',
              'Regression toward the mean across groups'
            ],
            correctAnswer: 1,
            explanation: 'Comparing different age groups at one time is cross-sectional, and differences caused by the era each group grew up in are cohort effects. Attrition is the matching weakness of longitudinal studies, which follow the same people.'
          },
          {
            question: 'An employer says, "Workers over 60 should not be hired because they can\'t learn anything new." Which research-based response best challenges this claim?',
            options: [
              'Older workers learn new tasks more slowly but keep their knowledge and expertise',
              'Older workers learn new tasks faster because fluid intelligence peaks late',
              'Older workers cannot learn new tasks, but they rarely need to at work',
              'Older workers learn at the same speed as 25-year-olds in every type of task'
            ],
            correctAnswer: 0,
            explanation: 'Fluid intelligence and processing speed tend to decline, so new tasks may take longer, but crystallized knowledge and expertise remain relatively stable. Older adults can learn; they may simply need more time on novel tasks.'
          }
        ]
      }
    }
  ]
}
