export const psychGeneticsPart1Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genetics-behavior-p1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Genetics and Behavior

**Part 1 of 7 — Nature, Nurture, and Their Interaction**

> 🔑 **Key Concept:** Behavior is never "all genes" or "all environment." Heredity (**nature**) and experience (**nurture**) **interact**: genes shape how a person responds to an environment, and the environment shapes whether and how genes are expressed.

### Where the debate came from

People have argued about the sources of human behavior for centuries. Some philosophers held that certain knowledge is built in at birth; John Locke described the newborn mind as a **blank slate** (*tabula rasa*) written on by experience. In the 1800s, Charles Darwin's theory of natural selection gave heredity a scientific mechanism, and Darwin's half-cousin **Francis Galton** popularized the phrase "nature and nurture."

Modern psychology treats the old "nature **versus** nurture" framing as the wrong question. The useful questions are:

| Old question | Better question |
|---|---|
| Is intelligence caused by genes or by schooling? | How do genetic differences and schooling **work together** to produce differences in test scores? |
| Is shyness inborn or learned? | How does an inborn temperament **change the experiences** a child has, and how do those experiences change the child? |
| Is depression biological or environmental? | Which combinations of genetic **vulnerability** and life stress make depression more likely? |

### The CED framing

AP Psychology Topic 1.1 asks you to **explain how heredity and environment interact to influence behavior and mental processes**. That includes:

- the **nature–nurture** issue as an interaction, not a contest
- the **evolutionary perspective** (natural selection applied to behavior) — Part 2
- **eugenics** as a historical misuse of claims about heredity — Part 2
- **family, twin, and adoption studies** as the methods psychologists use to separate the two influences — Parts 3 and 4
- **heritability**, the statistic those studies produce, and how it is misread — Part 5

> 🔑 **AP Connection:** Nature–nurture is one of the "big issues" that returns in every unit: intelligence (Unit 2), development and learning (Unit 3), personality (Unit 4), and psychological disorders (Unit 5). A strong answer almost always names **both** influences and explains **how they combine**.
      `
    },
    {
      id: 'genetics-behavior-p1-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Framing the Question** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes, "Musical talent is 100 percent learned, since anyone who practices enough can become a concert pianist." How would most modern psychologists respond to this claim?',
            options: [
              'They would agree, since practice hours are the only measured predictor of musical skill',
              'They would reject it and argue that musical skill is fixed by genes at birth',
              'They would say inborn differences and practice combine to shape musical skill',
              'They would say the question cannot be studied, since talent has no measurable form'
            ],
            correctAnswer: 2,
            explanation: 'The modern view treats nature and nurture as interacting: inborn differences affect how quickly a person learns from practice, and practice shapes how that potential develops. Saying skill is fixed by genes simply swaps one extreme for the other.'
          },
          {
            question: 'Which statement best captures what Locke meant by describing the newborn mind as a blank slate?',
            options: [
              'Knowledge and character are written by experience',
              'Inherited instincts set the limits of later learning',
              'Children inherit the learned habits of their parents',
              'The mind is organized by inborn rules of perception'
            ],
            correctAnswer: 0,
            explanation: 'Locke\'s tabula rasa is the classic nurture position: the mind begins empty and is filled in by experience. Inherited instincts and inborn perceptual rules are nature positions, and inheriting learned habits is an outdated idea about heredity, not Locke\'s claim.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p1-s3-genes',
      type: 'text' as const,
      content: `
## 🧬 The Vocabulary the AP Exam Uses

AP Psychology deliberately stays out of molecular biology. The CED says detailed genetics (the cell-level machinery of inheritance) is beyond the scope of the exam. What you need is the **psychological** vocabulary of heredity:

| Term | Meaning in AP Psychology | Example |
|---|---|---|
| **Nature** | Genetic or predisposed characteristics a person is born with | An inborn tendency to be easily startled |
| **Nurture** | External factors that act on a person, such as family interactions, education, culture, and nutrition | A calm, predictable home; a strong reading program at school |
| **Heredity** | The passing of genes from biological parents to children | A child inheriting a family tendency toward nearsightedness or anxiety |
| **Genetic predisposition** | An inherited tendency that makes a trait **more likely** without guaranteeing it | A family history that raises, but does not fix, the risk of depression |
| **Temperament** | A person's characteristic emotional reactivity and intensity, visible from early infancy | One newborn fusses at every noise; another sleeps through a thunderstorm |
| **Interaction** | Nature and nurture working together, each changing the effect of the other | A shy temperament matters more in a chaotic school than in a calm one |

### Why "a gene for shyness" is misleading

There is no single gene for intelligence, extraversion, or depression. Complex psychological traits are shaped by **many genes**, each nudging the probability of the trait a small amount, and their effects depend on experience. That is why psychologists describe genetic influence on behavior in terms of **predispositions** and **probabilities**, not destinies.

| Claim | Problem | Better wording |
|---|---|---|
| "She has the anxiety gene." | Anxiety is shaped by many genes plus experience | "She may have inherited a predisposition toward anxiety." |
| "He was born smart." | Intelligence develops through schooling, language, and nutrition too | "He may have inherited some advantages that his environment helped develop." |
| "It runs in the family, so it is genetic." | Families share homes as well as genes | "It runs in the family, which could reflect genes, environment, or both." |

### Worked case: PKU

**Phenylketonuria (PKU)** is an inherited condition in which the body cannot properly break down phenylalanine, a building block of protein found in many foods. Untreated, the buildup damages the developing brain and causes intellectual disability.

- **Nature:** the condition is inherited.
- **Nurture:** newborns are screened, and a diet low in phenylalanine prevents most of the harm.
- **Interaction:** the inherited condition produces intellectual disability **only** with a typical diet. Change the environment and the outcome changes.

> 🔑 **Key Idea:** Even a condition that is entirely inherited has an outcome that depends on the environment. "Genetic" does **not** mean "unchangeable."

*Going further (not tested on the AP exam):* biologists have found that experiences such as severe stress can influence how active certain genes are, which is one more way the environment and heredity interact.
      `
    },
    {
      id: 'genetics-behavior-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
**Vocabulary in Action** ✍️

Type the single term that fits each description.
      `,
      exercise: {
        questions: [
          {
            question: 'A school\'s reading program, a family\'s dinner-table conversations, and a child\'s diet are all examples of _____, the external side of the nature–nurture issue.',
            answer: 'nurture',
            acceptableAnswers: ['environment', 'environmental factors', 'the environment'],
            explanation: 'Nurture refers to external factors such as family interactions and education, in contrast to nature, the genetic or predisposed side.'
          },
          {
            question: 'A woman whose parents and grandparents had depression has an inherited tendency that raises her risk but does not guarantee she will become depressed. This tendency is a genetic _____.',
            answer: 'predisposition',
            acceptableAnswers: ['predispositions', 'vulnerability', 'diathesis'],
            explanation: 'A genetic predisposition makes a trait or disorder more likely without making it certain; the environment still shapes the outcome.'
          },
          {
            question: 'From the first weeks of life, one baby reacts intensely to every change while another stays calm. Psychologists call this inborn style of emotional reactivity _____.',
            answer: 'temperament',
            acceptableAnswers: ['temperaments', 'infant temperament'],
            explanation: 'Temperament is a person\'s characteristic emotional reactivity and intensity, present from early infancy and partly inherited.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p1-s5-interaction',
      type: 'text' as const,
      content: `
## 🔄 How Interaction Actually Works

"Interaction" can sound vague. Here are the concrete ways heredity and environment combine.

### 1. The environment changes how genes play out

The same genetic predisposition can lead to different outcomes in different environments. A child with an inherited tendency toward anxiety may develop an anxiety disorder after repeated trauma but remain well-adjusted in a stable, supportive home. This idea returns in Unit 5 as the **diathesis–stress model**: a vulnerability (diathesis) plus stress makes a disorder more likely than either alone.

### 2. Genes change the environment a person experiences

Inherited traits shape the experiences people have. This happens in three common ways:

| Pathway | What happens | Example |
|---|---|---|
| **Parents supply both** | Parents pass on genes **and** create the home | Parents who love reading pass on related abilities and also fill the house with books |
| **Traits evoke reactions** | A child's inborn traits draw different responses from others | A smiley, easygoing infant gets more playful attention than an irritable one |
| **People seek settings** | As children grow, they choose environments that fit their dispositions | A thrill-seeking teen joins the climbing club and keeps building that trait |

Because of these pathways, genes and environments are **correlated**, which makes it hard to tell their effects apart in ordinary families. That problem is exactly why psychologists use twin and adoption designs (Part 3).

### 3. Temperament: a worked example

**Temperament** is a person's characteristic emotional reactivity and intensity, visible from early infancy.

**Case:** Two infants, Ava and Ben, are born the same week.

1. **Nature:** Ava is highly reactive. She startles easily and cries hard when routines change. Ben is calm and adapts quickly.
2. **Evoked responses:** Ava's parents, worn out, begin avoiding new places. Ben's parents take him everywhere.
3. **Nurture builds on nature:** Ava gets fewer chances to learn that new situations are safe; Ben gets many.
4. **Outcome at age 6:** Ava is shy with strangers; Ben is outgoing.

The difference at age 6 is not "genes" or "parenting." The inborn temperament **changed the parenting**, and the parenting **amplified** the temperament. If Ava's parents had gently and repeatedly exposed her to new settings, her shyness would likely be milder.

### 4. The biopsychosocial view

Psychologists often organize these influences into three levels:

| Level | Examples of influences |
|---|---|
| **Biological** | Genetic predispositions, brain structure, hormones |
| **Psychological** | Learned beliefs, coping skills, emotional responses |
| **Social-cultural** | Family, peers, culture, economic conditions |

Genetics sits at the biological level, but its effects run through the other two.
      `
    },
    {
      id: 'genetics-behavior-p1-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Spot the Interaction** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A toddler with an inborn cheerful temperament smiles at strangers, and strangers smile and talk to her more than they do to other toddlers. Over time she becomes even more socially confident. This pattern best illustrates that',
            options: [
              'environment alone explains her confidence, since strangers chose her',
              'her inherited traits evoked responses that then strengthened those same traits',
              'her confidence is a fixed inborn trait that would appear in any setting',
              'social traits are learned only through imitation of the adults around a child'
            ],
            correctAnswer: 1,
            explanation: 'Her temperament drew warm responses from others, and those experiences built further confidence, so heredity and environment fed each other. Treating her confidence as fixed or as purely environmental ignores the loop between the two.'
          },
          {
            question: 'Newborn screening identifies an infant with PKU, and the family follows a low-phenylalanine diet. The child develops typical intelligence. What does this case show about genetic conditions?',
            options: [
              'A genetic cause makes a poor outcome certain',
              'Diet removed the child\'s inherited condition',
              'An environment can alter a genetic outcome',
              'The child must have been misdiagnosed'
            ],
            correctAnswer: 2,
            explanation: 'The inherited condition stayed the same, but changing the environment changed the outcome. That is the core lesson of PKU: a genetic cause does not make an outcome unchangeable.'
          },
          {
            question: 'Two adults share a strong family history of depression. One develops major depression after a year of job loss and divorce; the other, whose life is stable, does not. Which idea best explains the difference?',
            options: [
              'An inherited vulnerability led to a disorder only under heavy stress',
              'The adult who stayed well must have inherited no risk for depression at all',
              'Depression in families is fully explained by children imitating their parents',
              'Stressful events cause depression at the same rate in every person they reach'
            ],
            correctAnswer: 0,
            explanation: 'The diathesis–stress idea says a predisposition and stress combine; either alone is less likely to produce a disorder. Assuming the healthy adult inherited no risk, or that stress affects everyone equally, ignores the interaction.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p1-s7-connection',
      type: 'text' as const,
      content: `
### 🎯 AP Connection: Writing About Nature and Nurture

When an AP question asks you to explain a behavior using heredity and environment, use this three-step move:

1. **Name the genetic contribution** as a predisposition, not a destiny ("an inherited tendency toward high emotional reactivity").
2. **Name the environmental contribution** specifically ("repeated exposure to unpredictable stress at home").
3. **Explain how they combine** ("the predisposition made the child more affected by stress, so the outcome depended on both").

Avoid writing that a trait is "X percent genetic" for a single person. You will see why in Part 5.

**Next up — Part 2:** Why would natural selection shape behavior at all? The evolutionary perspective, and the dark history of eugenics.
      `
    }
  ]
}
