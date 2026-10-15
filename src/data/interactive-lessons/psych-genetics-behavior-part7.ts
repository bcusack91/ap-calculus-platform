export const psychGeneticsPart7Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genetics-behavior-p7-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Genetics and Behavior

**Part 7 of 7 — Synthesis Review: Heredity, Environment, and Evidence**

> 🔑 **Key Concept:** Every idea in this topic answers one question: **how do heredity and environment work together to shape behavior, and how do we know?** Evolution explains why shared human tendencies exist; twin, family, and adoption studies estimate how much genetic differences contribute to individual differences; heritability summarizes those estimates; and interaction explains why no outcome is fixed.

### The topic on one page

| Idea | Where you learned it | The one sentence to remember | How it is usually tested |
|---|---|---|---|
| **Nature and nurture interact** | Part 1 | Genes create predispositions whose effects depend on experience, and experience depends partly on inborn traits | Scenario: explain an outcome using both influences |
| **Temperament and evoked responses** | Part 1 | Inborn reactivity shapes how others respond, which shapes development | Scenario: a child's traits change the parenting they get |
| **Evolutionary perspective** | Part 2 | Tendencies that aided ancestral survival and reproduction became species-typical | Explain a universal behavior through survival and reproduction |
| **Eugenics** | Part 2 | A discriminatory misuse of heredity claims that ignored the environment | Identify the flawed reasoning |
| **Family, twin, and adoption designs** | Part 3 | Each separates genes and shared environment in a different way, with its own confounds | Identify the design and a limitation |
| **Correlation and concordance** | Part 4 | Compare MZ with DZ, raised together with apart, biological with adoptive | Interpret a table or graph |
| **Heritability** | Part 5 | A population estimate of how much variation is linked to genetic differences, in that environment | Spot a misreading |
| **AAQ and EBQ skills** | Part 6 | Method, operational definition, statistic, ethics, generalizability, support; claim plus evidence plus concept | Free-response practice |

### How the ideas link

1. **Natural selection** shaped the shared human genetic toolkit, which is why fear of heights or infant attachment appears across cultures.
2. Within that shared toolkit, people still **differ genetically**, and those differences are partly linked to differences in behavior.
3. Because relatives share both genes and homes, researchers use **twin and adoption designs** to separate the two.
4. Their comparisons produce **heritability** estimates, which apply only to populations and environments.
5. And because genes and environments **interact**, high heritability never means a trait is fixed, and eugenic reasoning fails on its own terms.
      `
    },
    {
      id: 'genetics-behavior-p7-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Integrated Check — Connecting the Parts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pairing correctly matches a research question with the approach best suited to answer it?',
            options: [
              'Why do humans everywhere fear heights? Compare adoptive and biological relatives',
              'Does a disorder run in families? Use the evolutionary perspective alone',
              'Does growing up in the same home matter? Study identical twins raised apart',
              'Is a trait heritable for one child? Calculate that child\'s heritability'
            ],
            correctAnswer: 2,
            explanation: 'Identical twins raised apart share genes but not a home, so comparing them with twins raised together shows whether the shared home adds similarity. A universal fear calls for an evolutionary explanation, and heritability never applies to one child.'
          },
          {
            question: 'An evolutionary psychologist and a twin researcher both study fear of snakes. What is the main difference in the questions they ask?',
            options: [
              'One asks why the fear is common, the other why people vary in it',
              'One studies genes, while the other studies only learned fears',
              'One uses experiments, while the other uses case studies alone',
              'One studies animals, while the other studies only adult humans'
            ],
            correctAnswer: 0,
            explanation: 'The evolutionary perspective explains why a tendency is widespread in the species, while twin research asks how much genetic differences contribute to differences among individuals. Both involve heredity, so the difference is the question, not genes versus learning.'
          },
          {
            question: 'Which statement would be accepted by a psychologist who understands both heritability and the evolutionary perspective?',
            options: [
              'A trait that evolved must have high heritability in every population',
              'A highly heritable trait cannot be changed by any change in environment',
              'Traits with low heritability must be learned entirely from parents',
              'An evolved, species-wide trait can still show low heritability'
            ],
            correctAnswer: 3,
            explanation: 'A trait shaped by natural selection may vary little genetically among people, so the differences that remain come mostly from environment, giving low heritability. Finger number, which is built by shared genes yet has low heritability, is the classic example.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p7-s3-case',
      type: 'text' as const,
      content: `
## 🧩 Integrated Case: Putting Every Part to Work

*Practice case, invented for this lesson.*

**Jordan** was adopted at birth. His biological mother had major depressive disorder; his adoptive parents have no history of depression and provide a stable, warm home. Jordan was a highly reactive infant who cried hard at changes in routine. His adoptive parents responded with patience and predictable routines. In his first year of college, far from home, Jordan faced the death of a close friend and a heavy course load, and he began showing signs of depression.

| Lens | Applied to Jordan |
|---|---|
| **Nature** (Part 1) | Jordan may have inherited a **genetic predisposition** toward depression from his biological mother, and a reactive temperament |
| **Nurture** (Part 1) | His adoptive home gave him predictable routines and support, which likely buffered his reactivity in childhood |
| **Interaction** (Part 1; Unit 5) | The predisposition did not produce depression in a supportive environment; combined with heavy stress, it became more likely to show (diathesis–stress) |
| **Adoption-study logic** (Part 3) | Jordan's case mirrors adoption-study reasoning: resemblance to his biological mother points to genes, since he did not grow up with her; but one person is not a study |
| **Heritability** (Part 5) | Depression is moderately heritable in populations, but that figure cannot tell us **Jordan's** personal genetic share |
| **Evaluating evidence** (Parts 3 and 4) | Prenatal environment is a confound: his biological mother's stress during pregnancy is not genetic but would travel with her |

### Connections across the course

| Unit | Where heredity and environment come back |
|---|---|
| **Unit 2: Cognition** | Intelligence: twin and adoption data, the Flynn effect, and why group gaps cannot be explained by heritability |
| **Unit 3: Development and Learning** | Temperament and attachment; biological preparedness in classical conditioning (taste aversion) |
| **Unit 4: Social Psychology and Personality** | Twin studies of the Big Five traits; evolutionary explanations of attraction and helping |
| **Unit 5: Mental and Physical Health** | The diathesis–stress model; twin and adoption evidence for schizophrenia, depression, and other disorders |

> 🔑 **AP Connection:** Synthesis questions often mix units: a question about schizophrenia may really test twin-study logic, and a question about intelligence may really test heritability. Ask yourself which idea from this topic the question is quietly testing.
      `
    },
    {
      id: 'genetics-behavior-p7-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Idea at Work** 🔎

Choose the idea from this topic that each scenario best illustrates.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A senator in the 1920s cites low test scores of new immigrants to argue for limiting immigration from certain countries. This argument reflects _____.',
            options: ['eugenics', 'biological preparedness', 'twin-study logic', 'temperament']
          },
          {
            label: 'Researchers compare children\'s anxiety with that of the birth mothers they never lived with and the adoptive mothers who raised them. This design is an _____.',
            options: ['experiment', 'adoption study', 'evolutionary analysis', 'family study']
          },
          {
            label: 'Infants in every culture studied cry when separated from caregivers, a behavior that kept helpless infants close to protection. This explanation reflects the _____.',
            options: ['heritability estimate', 'eugenic view', 'evolutionary perspective', 'adoption design']
          }
        ],
        correctAnswers: ['eugenics', 'adoption study', 'evolutionary perspective'],
        hint1: 'Using test scores to label whole groups as inherently inferior is a historical misuse of heredity.',
        hint2: 'Birth mother versus adoptive mother separates genes from rearing.',
        hint3: 'A survival benefit for ancestors is the hallmark of this perspective.',
        explanation: 'Treating group test scores as proof of inherited inferiority is eugenic reasoning; comparing birth and adoptive mothers is an adoption study; explaining a universal infant behavior by its survival value is the evolutionary perspective.'
      }
    },
    {
      id: 'genetics-behavior-p7-s5-recap',
      type: 'text' as const,
      content: `
## ✅ Final Self-Check Before Moving On

You should be able to do each of these without notes:

| Can you... | Quick test |
|---|---|
| Explain an outcome using **both** nature and nurture and how they combine? | Why might two siblings with the same family history of anxiety turn out differently? |
| Use the **evolutionary perspective** with all three links (behavior, ancestral advantage, reproduction)? | Why do people learn to fear spiders faster than electrical outlets? |
| Say why **eugenics** was flawed science, not only unethical? | What did eugenicists ignore when they interpreted immigrants' test scores? |
| Identify **family, twin, and adoption designs** and a limitation of each? | Why might identical twins be more alike for environmental reasons? |
| Read a **correlation or concordance** table without overclaiming? | What does an identical-twin concordance of 45% tell you about the environment? |
| Define **heritability** with the words differences, population, and environment? | Why would heritability rise if every child got the same schooling? |
| Answer the six **AAQ** tasks and write an **EBQ** claim with two sources and two concepts? | Is a twin study an experiment? |

### Seven sentences that carry the topic

1. Nature and nurture interact; neither acts alone.
2. Genes create predispositions, not destinies.
3. Natural selection explains why species-typical tendencies exist.
4. Eugenics misused heredity claims to justify discrimination and ignored the environment.
5. Twin and adoption studies separate genes from shared environment, each with confounds.
6. Heritability describes variation in a population, in its environments, and never one person.
7. A highly heritable trait can still change when environments change.
      `
    },
    {
      id: 'genetics-behavior-p7-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Final Applied Set** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In a practice study, the identical-twin correlation for extraversion is .50 and the fraternal-twin correlation is .20; adoptive siblings correlate .02. Which conclusion is best supported?',
            options: [
              'Shared rearing explains most twin similarity in extraversion',
              'Genes contribute to differences in extraversion, and the shared home adds little',
              'Extraversion is fixed at birth and cannot be changed by any later experience',
              'Half of each twin\'s extraversion comes from genes and half from parenting'
            ],
            correctAnswer: 1,
            explanation: 'The identical-fraternal gap points to genetic influence, and near-zero similarity between adoptive siblings shows that sharing a home adds little. Neither result implies the trait is fixed or can be split into halves inside a person.'
          },
          {
            question: 'Which response to a classmate\'s claim that "IQ is highly heritable, so IQ gaps between countries must be genetic" is most accurate?',
            options: [
              'Within-group heritability says nothing about why groups vary',
              'IQ has zero heritability, so all gaps must come from schooling',
              'The claim is right if both countries have similar heritability',
              'Heritability shows each person\'s genetic share, not a group\'s share'
            ],
            correctAnswer: 0,
            explanation: 'As in Lewontin\'s seed analogy, a trait can be highly heritable within each group while the gap between groups is entirely environmental. Heritability also never describes a single person\'s genetic share.'
          },
          {
            question: 'A child with a reactive temperament is raised by calm, patient parents and becomes a confident teenager. Her identical twin, raised in a chaotic home, becomes highly anxious. What does this pair best illustrate?',
            options: [
              'Identical genes guarantee identical personalities',
              'Temperament is learned entirely from early parenting',
              'Shared genes can lead to different outcomes in different settings',
              'The twins cannot be identical, given their different personalities'
            ],
            correctAnswer: 2,
            explanation: 'The twins share their genes, yet different environments led to different outcomes, which is the interaction of nature and nurture. Identical twins do not have identical personalities, and their shared reactive start shows that temperament is not purely learned.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p7-s7-wrapup',
      type: 'text' as const,
      content: `
### 🎯 Topic Wrap-Up

You have now built the full chain for AP Topic 1.1: **evolution** explains shared tendencies, **genetic differences** contribute to individual differences, **twin, family, and adoption studies** measure that contribution, **heritability** summarizes it for a population, and **interaction** explains why environments still change outcomes. Carry the seven sentences above into Units 2, 4, and 5, where intelligence, personality, and psychological disorders all return to the same nature–nurture reasoning.
      `
    }
  ]
}
