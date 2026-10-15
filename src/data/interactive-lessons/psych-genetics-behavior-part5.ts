export const psychGeneticsPart5Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genetics-behavior-p5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Genetics and Behavior

**Part 5 of 7 — Heritability and Its Misreadings**

> 🔑 **Key Concept:** **Heritability** is an estimate of how much of the **variation** (the differences) in a trait **among people in a particular population** can be attributed to **genetic differences** among them, in that population's range of environments. It describes a group, not a person.

### Where the number comes from

Heritability is a summary of the comparisons you practiced in Part 4:

| Pattern in twin and adoption data | Heritability estimate |
|---|---|
| Identical twins much more similar than fraternal twins; separated identical twins still alike | **Higher** |
| Identical and fraternal twins about equally similar; adoptive relatives alike | **Lower** |

Heritability is reported from **0 to 1** (or 0% to 100%).

- **Near 0:** in this population, people's differences on the trait are mostly not tied to genetic differences.
- **Near 1:** in this population, people's differences on the trait are mostly tied to genetic differences.

### Approximate estimates you may see

| Trait | Approximate heritability | Note |
|---|---|---|
| Height (well-nourished populations) | about 0.80 | Lower where nutrition varies widely |
| Intelligence test scores | about 0.50 | Rises from childhood into adulthood; varies by population |
| Big Five personality traits | about 0.40 to 0.50 | Unique experiences account for much of the rest |

These are rough figures drawn from many studies. The exact value depends on the age, place, and environments of the people studied, which is the first clue to how heritability is misread.

### Read the definition word by word

| Phrase in the definition | What it rules out |
|---|---|
| "**variation** among people" | It says nothing about how a trait develops inside one person |
| "in a **particular population**" | It cannot be carried over to other populations or eras |
| "in that population's **range of environments**" | It changes when environments change |
| "**attributed to** genetic differences" | It is a statistical estimate, not a list of genes or a mechanism |
      `
    },
    {
      id: 'genetics-behavior-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — What the Number Says** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A textbook reports that the heritability of intelligence test scores is about 0.50. Which statement is a correct interpretation?',
            options: [
              'Half of each person\'s intelligence comes from genes and the other half from the environment',
              'Any child will score within half of a parent\'s score by the time of adulthood',
              'Intelligence is half fixed at birth and half open to change through education',
              'About half of the score differences among people studied are tied to genetic differences'
            ],
            correctAnswer: 3,
            explanation: 'Heritability describes the share of differences among people in a population that is linked to genetic differences. It cannot be split inside one person, and it does not say how much of a trait is fixed.'
          },
          {
            question: 'Researchers estimate the heritability of a trait from twin data. Which result would lead to the highest estimate?',
            options: [
              'Identical twins are far more alike than fraternal twins are',
              'Identical and fraternal twins raised together are equally similar',
              'Adoptive siblings are as alike as biological siblings',
              'Fraternal twins are more alike than identical twins are'
            ],
            correctAnswer: 0,
            explanation: 'A large gap between identical-twin and fraternal-twin similarity means extra genetic similarity brings extra trait similarity, which raises the heritability estimate. Equal similarity across twin types points to environment.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p5-s3-misreadings',
      type: 'text' as const,
      content: `
## 🚫 Four Misreadings of Heritability

### Misreading 1: "Heritability applies to me."

A heritability of 0.50 for intelligence does **not** mean half of your intelligence came from your genes. Within one person, genes and experience are intertwined from conception on; there is no way to split a single person's trait into percentages, just as you cannot say how much of a rectangle's area comes from its length and how much from its width.

### Misreading 2: "Heritability is a fixed property of a trait."

Heritability depends on how much the **environment varies** in the population studied.

- If everyone receives nearly the **same** environment (excellent schools, nutrition, and health care for all), environmental differences shrink, so the differences that remain are more tied to genes. **Heritability goes up.**
- If environments vary **enormously** (some children are malnourished or never attend school), environment creates large differences. **Heritability goes down.**

**Real example:** In a 2003 study of twins, **Eric Turkheimer** and colleagues found that the heritability of children's IQ scores was close to zero in the poorest families and much higher in affluent families. In impoverished environments, differences in opportunity swamped genetic differences. (The pattern has appeared in several U.S. samples but less consistently in other countries.)

> 💡 **Counterintuitive consequence:** making society **fairer**, by giving everyone similar opportunities, would make the heritability of school achievement **higher**, not lower.

### Misreading 3: "High heritability means the trait cannot change."

Heritability is about **differences among people**, not about the **average level** of a trait.

- **Height** is highly heritable in well-nourished populations, yet average height rose substantially across the 20th century in many countries as nutrition and health improved.
- **Intelligence test scores** rose across generations during the 20th century in many countries (the **Flynn effect**), far too quickly for genetic change to explain.
- **PKU** (Part 1) is entirely inherited, yet a diet prevents its effects.

### Misreading 4: "Heritability within groups explains differences between groups."

Biologist **Richard Lewontin** offered a famous analogy:

| | Pot A | Pot B |
|---|---|---|
| Seeds | A random handful from one genetically varied sack | Another random handful from the same sack |
| Soil | Rich, fully nourished | Poor, lacking nutrients |
| Within the pot | Height differences reflect genetic differences, since all plants share the same soil | Same: heritability is high within this pot too |
| Between the pots | Pot A's plants are taller on average | The **entire** difference between pots is caused by the soil |

Heritability can be high **within** each group while the difference **between** groups is entirely environmental. So a high heritability for test scores within a population says nothing about the cause of average differences between groups that live in different conditions.

### A bonus puzzle: low heritability does not mean "not genetic"

Nearly every human is born with ten fingers because of the genes all humans share. Among people who have fewer, the cause is usually an accident or a prenatal problem, not a genetic difference. So the heritability of finger number is **low**, even though building fingers is completely genetic. Heritability tracks **differences**, not development.
      `
    },
    {
      id: 'genetics-behavior-p5-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Predict the Change in Heritability** 🔎

Choose the outcome that completes each sentence.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A country gives every child the same high-quality schooling and nutrition. The heritability of reading scores in that country would most likely _____.',
            options: ['increase', 'decrease', 'stay exactly the same', 'fall to zero']
          },
          {
            label: 'A study shifts from a wealthy suburb to a region where some children attend school and others cannot. The heritability of test scores in the new sample would most likely _____.',
            options: ['increase', 'decrease', 'stay exactly the same', 'rise to one']
          },
          {
            label: 'Lewontin\'s seed analogy shows that a high heritability within each pot tells us _____ about why the two pots differ on average.',
            options: ['everything', 'nothing', 'the genetic share', 'the exact cause']
          }
        ],
        correctAnswers: ['increase', 'decrease', 'nothing'],
        hint1: 'If environments become more alike, which source of differences is left?',
        hint2: 'Large differences in opportunity create large environmental differences.',
        hint3: 'In the analogy, the soil, not the seeds, produced the gap between pots.',
        explanation: 'Equalizing environments shrinks environmental variation, so heritability rises; widening environmental differences lowers it. Heritability within groups says nothing about the causes of average differences between groups, which in the seed analogy are entirely environmental.'
      }
    },
    {
      id: 'genetics-behavior-p5-s5-misconceptions',
      type: 'text' as const,
      content: `
## 🧭 Topic-Wide Misconceptions Table

These are the errors that AP questions on heredity and environment are built to catch.

| Misconception | Reality |
|---|---|
| "Nature **or** nurture" — one has to win | They **interact**; each changes the effect of the other (Part 1) |
| Genetic means unchangeable | PKU, height, and rising test scores show environments change genetic outcomes |
| A trait is "X% genetic" for a person | Heritability describes **variation in a population**, never one individual |
| Heritability is a fixed number for a trait | It changes with the population and the range of environments |
| High heritability within groups explains gaps between groups | Lewontin's seeds: between-group gaps can be fully environmental |
| Family resemblance proves genetic influence | Families share homes as well as genes; you need twin or adoption designs |
| Identical twins prove everything | Even identical twins raised together differ; unique experiences matter |
| "It evolved, so it is natural and right" | Explaining an origin does not justify a behavior or make it fixed (Part 2) |

### The eugenics connection

The eugenics movement (Part 2) made the same mistakes this part warns against:

1. It treated **group** averages as proof of **individual** worth.
2. It assumed inherited traits were **fixed** regardless of environment.
3. It explained **between-group** differences with heredity while ignoring vast differences in schooling, language, and poverty.

> 🔑 **AP Connection:** Expect at least one question that offers a tempting misreading of heritability as an answer choice. The safe test: does the statement talk about **differences among people in a population**? If it talks about one person, a fixed trait, or a gap between groups, it is a misreading.
      `
    },
    {
      id: 'genetics-behavior-p5-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Catch the Misreading** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A politician argues: "Studies show that intelligence is highly heritable, so spending money on early-childhood education is a waste." Which response best identifies the flaw?',
            options: [
              'Heritability is too low for intelligence to be studied in any population',
              'Education can change a person\'s genes, so spending would raise intelligence',
              'High heritability does not mean a trait\'s level is unaffected by environment',
              'Intelligence is not heritable at all, so only education affects intelligence'
            ],
            correctAnswer: 2,
            explanation: 'Heritability describes differences among people in current environments; it does not show that improving environments cannot raise the trait, as rising test scores and heights across generations demonstrate.'
          },
          {
            question: 'Two populations differ in average test scores, and within each population the heritability of the scores is high. What can be concluded about the cause of the gap between the populations?',
            options: [
              'The gap must stem from genetic causes',
              'The gap must be largely caused by genes',
              'The gap must be partly caused by genes',
              'The cause is not shown by these data'
            ],
            correctAnswer: 3,
            explanation: 'High heritability within each group says nothing about why two groups differ; as in Lewontin\'s seed analogy, a between-group gap can be entirely environmental even when within-group heritability is high.'
          },
          {
            question: 'In a practice study, the heritability of a reading skill is 0.30 in one country and 0.70 in another. Which explanation best fits this difference?',
            options: [
              'Schooling varies more in the first country, so environment adds more variation',
              'Children in the second country inherited more reading genes from parents',
              'The first country\'s children learned to read before their genes took effect',
              'Reading skill is genetic in one country but environmental in the other one'
            ],
            correctAnswer: 0,
            explanation: 'Heritability falls when environments vary widely, because environmental differences then account for more of the differences between children. The estimate describes each population and its environments, not a fixed property of reading or of anyone\'s genes.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p5-s7-connection',
      type: 'text' as const,
      content: `
### 🎯 AP Connection: Writing About Heritability

When you use heritability in a response, keep three words in your sentence: **differences**, **population**, and **environment**.

> "A high heritability estimate means that, in the population studied and its range of environments, a large share of the **differences** among people in the trait is linked to genetic differences."

Never write that a trait is "70% genetic in a person," and never use heritability to explain gaps between groups.

**Next up — Part 6:** Put Parts 1 to 5 to work on AP-style AAQ and EBQ practice.
      `
    }
  ]
}
