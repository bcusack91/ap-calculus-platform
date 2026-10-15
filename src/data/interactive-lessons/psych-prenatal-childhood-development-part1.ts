export const psychPrenatalPart1Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prenatal-childhood-development-p1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Prenatal and Childhood Development

**Part 1 of 7 — Before Birth: Teratogens and Other Prenatal Influences**

Development does not start at birth. In the roughly 38 weeks between conception and delivery, the brain, sense organs and body systems are built, and what happens in that environment can shape behavior and mental processes for a lifetime.

> 🔑 **Key Concept:** The AP framework asks you to explain how **teratogens, maternal illness, genetic mutations, hormonal factors and environmental factors** influence the major physical and psychological milestones of prenatal development. You are *not* tested on the names of the prenatal stages; you are tested on influences and their effects.

### The Prenatal Environment

The developing child is connected to the mother through the **placenta**, which passes oxygen and nutrients in and carries wastes out. The placenta screens out some harmful agents, but many substances cross it easily, including alcohol, nicotine, many medications and some viruses. Whatever crosses the placenta reaches a nervous system that is growing at an extraordinary rate, producing hundreds of thousands of new neurons per minute at its peak.

### Five Families of Prenatal Influence

| Influence | What it is | Example | Possible effect |
|---|---|---|---|
| **Teratogens** | Agents from outside the body (chemicals, drugs, some infections) that can harm prenatal development | Alcohol | Fetal alcohol spectrum disorders: small head, facial differences, learning and attention problems |
| **Maternal illness** | Diseases the mother has or catches during pregnancy | Rubella (German measles); Zika virus | Rubella: deafness, heart defects, cataracts. Zika: microcephaly (an unusually small head and brain) |
| **Genetic mutations** | Changes in the genetic material the child carries | A genetic difference present from conception | Down syndrome: developmental delays and characteristic physical features |
| **Hormonal factors** | Hormone levels the developing child is exposed to | Unusually high prenatal androgen exposure | On average, shifts in later play preferences and other sex-typed behaviors |
| **Environmental factors** | Nutrition, stress, pollutants and health care | Low folic acid in the mother's diet | Higher risk of neural tube defects such as spina bifida |

Notice that "teratogen" is the broad label for harmful outside agents. Some viruses, such as rubella and Zika, can be described both as maternal illnesses and as teratogens, because the infection is the outside agent that does the damage.
      `
    },
    {
      id: 'prenatal-childhood-development-p1-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Prenatal Influences** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A pregnant woman takes a prescription acne medication that crosses the placenta and later causes heart and facial malformations in her baby. Which term best describes the medication's role?",
            options: [
              'A teratogen acting on prenatal development',
              'A genetic mutation inherited from a parent',
              'A newborn reflex that failed to appear',
              'A maternal illness caught in pregnancy'
            ],
            correctAnswer: 0,
            explanation: 'A teratogen is any outside agent, including a drug, that harms prenatal development after crossing the placenta. The baby did not inherit the problem in its genes, and the medication is not an illness the mother caught.'
          },
          {
            question: 'Which statement about the placenta is most accurate?',
            options: [
              'It blocks every drug and virus from reaching the developing child',
              'It passes nutrients in but lets many harmful substances cross too',
              'It produces the genetic mutations that cause Down syndrome',
              'It begins functioning only in the final weeks before delivery'
            ],
            correctAnswer: 1,
            explanation: 'The placenta exchanges oxygen, nutrients and wastes, but it is not a complete barrier: alcohol, nicotine, many medications and some viruses cross it. Down syndrome comes from a genetic difference present from conception, not from the placenta.'
          }
        ]
      }
    },
    {
      id: 'prenatal-childhood-development-p1-s3-principles',
      type: 'text' as const,
      content: `
## How Much Harm? Four Principles

The same exposure does not harm every pregnancy equally. Researchers use four principles to predict risk.

| Principle | Meaning | Illustration |
|---|---|---|
| **Timing** | Each body system has a window when it is forming fastest and is most vulnerable | Thalidomide, a sedative given for morning sickness around 1960, caused severe limb malformations mainly when taken during a narrow window early in pregnancy |
| **Dose and duration** | More exposure, for longer, generally means more harm | Heavy, frequent drinking carries the highest risk of full fetal alcohol syndrome; no amount of alcohol has been shown to be safe |
| **Individual susceptibility** | The child's and mother's genes affect how a teratogen is processed | Two pregnancies with similar drinking can produce very different outcomes |
| **Combined risks** | Teratogens often travel together and compound each other | Smoking plus poor nutrition plus stress predicts more risk than any one alone |

### The Brain Is Vulnerable Throughout

Many organs (heart, limbs) have a short early window of maximum vulnerability. The nervous system keeps developing for the whole pregnancy and long after birth, so exposures late in pregnancy can still affect behavior and learning. That is why alcohol is a concern at every point in pregnancy.

### Worked Example: Reading a Risk Pattern

A practice dataset tracks 600 children whose mothers reported their smoking in pregnancy.

| Cigarettes per day during pregnancy | Percent born at low birth weight |
|---|---|
| None | 6% |
| 1–9 | 10% |
| 10 or more | 16% |

**Step 1 — Describe the trend.** Low birth weight rises as smoking rises: a dose-response pattern.

**Step 2 — Name the design.** Researchers cannot ethically assign mothers to smoke, so this is a **correlational** (non-experimental) study. Smoking was measured, not manipulated.

**Step 3 — Name a limitation.** A third variable could contribute. Mothers who smoked more might also have had less access to prenatal care or poorer nutrition.

**Step 4 — State a careful conclusion.** "Heavier smoking during pregnancy is associated with a higher rate of low birth weight." Animal experiments and the dose-response pattern strengthen a causal case, but this table alone does not prove causation.

> 🔑 **AP Connection:** Prenatal research is a favorite place for the AAQ to test research methods, because random assignment to a teratogen would violate ethical guidelines. Expect to identify the design as correlational and name a confounding variable.
      `
    },
    {
      id: 'prenatal-childhood-development-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
**Recall Practice — Prenatal Influences** ✍️

Type one term for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'Any outside agent, such as a drug, chemical or virus, that can harm prenatal development is called a ______.',
            answer: 'teratogen',
            acceptableAnswers: ['teratogens'],
            explanation: 'Teratogens include alcohol, nicotine, some medications, lead and some viruses.'
          },
          {
            question: 'Changes in the genetic material a child carries, such as the difference behind Down syndrome, are called genetic ______.',
            answer: 'mutations',
            acceptableAnswers: ['mutation'],
            explanation: 'The CED lists genetic mutations alongside teratogens, maternal illness, hormones and environmental factors as prenatal influences.'
          },
          {
            question: 'The organ that passes oxygen and nutrients to the developing child but lets many substances cross is the ______.',
            answer: 'placenta',
            explanation: 'The placenta is an exchange organ, not a complete barrier.'
          }
        ],
        hint1: 'The first term comes from Greek roots meaning "monster-forming".',
        hint2: 'The CED word for a change in genes is a genetic ___.',
        hint3: 'This organ connects mother and developing child through the umbilical cord.'
      }
    },
    {
      id: 'prenatal-childhood-development-p1-s5-nature-nurture',
      type: 'text' as const,
      content: `
## Genes and Environment Before Birth

Prenatal development is the clearest place to see that **nature and nurture interact** rather than compete.

### Case 1: Phenylketonuria (PKU)

PKU is caused by a mutation in a single gene. Children with PKU cannot break down phenylalanine, an amino acid found in many foods. Without treatment it builds up and causes intellectual disability. Newborns are screened with a heel-prick blood test, and a special low-phenylalanine diet started early largely prevents the damage.

**Lesson:** a genetic condition's outcome depends on the environment. The gene sets the risk, and the diet changes the result.

### Case 2: Prenatal Hormones

Girls with congenital adrenal hyperplasia are exposed to unusually high levels of androgens (male-typical hormones) before birth. As a group, they later show more interest in toys and play styles more typical of boys. This is evidence that **hormonal factors** before birth can influence later behavior. It is a group average with wide individual variation, not a rule for any one child.

### Case 3: Maternal Stress and Nutrition

Severe or chronic maternal stress raises stress hormones such as cortisol, some of which reach the developing child, and it is associated with preterm birth and lower birth weight. Folic acid taken before and early in pregnancy sharply reduces neural tube defects. Both are **environmental factors**, and both are partly controlled by social conditions such as poverty and access to health care.

### Misconceptions to Avoid

| Misconception | Reality |
|---|---|
| "The placenta protects the baby from drugs." | Many drugs, alcohol and nicotine cross the placenta. |
| "Only heavy drinking matters." | Risk rises with dose, and no safe level of alcohol in pregnancy has been established. |
| "Genetic conditions cannot be changed." | PKU shows that environment, here a diet, can prevent a genetic disorder's effects. |
| "A teratogen always causes the same defect." | Effects depend on timing, dose, susceptibility and other risks. |
      `
    },
    {
      id: 'prenatal-childhood-development-p1-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Influence** 🔎

Choose the category of prenatal influence each case best illustrates.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A child is born with PKU because both parents passed on a changed copy of one gene: _____',
            options: ['teratogen', 'genetic mutation', 'hormonal factor', 'maternal illness']
          },
          {
            label: 'A mother catches rubella early in pregnancy and the baby is born deaf: _____',
            options: ['genetic mutation', 'hormonal factor', 'maternal illness', 'environmental pollutant']
          },
          {
            label: 'A family lives near a factory, and the mother is exposed to high lead levels in the water: _____',
            options: ['environmental factor', 'genetic mutation', 'hormonal factor', 'maternal illness']
          }
        ],
        correctAnswers: ['genetic mutation', 'maternal illness', 'environmental factor'],
        hint1: 'PKU is inherited, not caught or absorbed.',
        hint2: 'Rubella is a disease the mother contracts.',
        hint3: 'Lead in the water comes from the surroundings, not from the child\'s genes or hormones.',
        explanation: 'PKU is a single-gene mutation, rubella is a maternal illness (and acts as a teratogen), and lead from contaminated water is an environmental factor that also acts as a teratogen.'
      }
    },
    {
      id: 'prenatal-childhood-development-p1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Interpreting Prenatal Research** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers find that children whose mothers drank more alcohol during pregnancy score lower on attention tests at age 7. Which conclusion is best supported?',
            options: [
              'Prenatal alcohol caused the attention problems in every exposed child',
              'Higher prenatal alcohol exposure is associated with weaker attention',
              'Attention problems at age 7 cause mothers to report more drinking',
              'Alcohol affects attention only when it is consumed late in pregnancy'
            ],
            correctAnswer: 1,
            explanation: 'Drinking was measured rather than assigned, so the data show an association, not proof of causation for every child. Reverse causation is implausible here, and nothing in the data limits the effect to late pregnancy.'
          },
          {
            question: 'Two women drink similar amounts during pregnancy. One child shows clear signs of fetal alcohol syndrome and the other shows none. Which principle best explains the difference?',
            options: [
              'Placental blocking',
              'Individual susceptibility',
              'Object permanence',
              'Reflex maturation'
            ],
            correctAnswer: 1,
            explanation: 'Genetic differences in how mother and child process alcohol make some pregnancies more susceptible than others. The placenta does not block alcohol, and the other options describe infant development after birth.'
          },
          {
            question: 'Why do researchers rely mainly on correlational and animal studies to test whether a substance is a human teratogen?',
            options: [
              'Assigning pregnant women to a harmful exposure is unethical',
              'Correlational studies prove causation more strongly than experiments',
              'Human pregnancies are too short for any experiment to be completed',
              'Animal studies always produce the same effects that humans show'
            ],
            correctAnswer: 0,
            explanation: 'Ethical guidelines forbid exposing participants to likely harm, so researchers cannot randomly assign pregnant women to a teratogen. Correlational studies cannot prove causation, and animal results do not always transfer to humans.'
          }
        ]
      }
    }
  ]
}
