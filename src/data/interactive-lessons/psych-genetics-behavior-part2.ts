export const psychGeneticsPart2Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genetics-behavior-p2-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Genetics and Behavior

**Part 2 of 7 — The Evolutionary Perspective and the Misuse of Heredity**

> 🔑 **Key Concept:** The **evolutionary perspective** explains behaviors and mental processes as products of **natural selection**: tendencies that helped our ancestors survive and reproduce were passed on and became common in the species.

### Natural selection in four steps

Charles Darwin's *On the Origin of Species* (1859) described a process that needs only four ingredients:

| Step | What happens | Example (a bird population) |
|---|---|---|
| **1. Variation** | Individuals differ from one another | Some birds have slightly longer beaks |
| **2. Inheritance** | Some of those differences are passed from parents to offspring | Long-beaked parents tend to have long-beaked chicks |
| **3. Selection** | Some variants survive and reproduce more successfully in a given environment | In a drought, only deep seeds remain, and long beaks reach them |
| **4. Time** | Over generations, the successful variants become more common | After many generations, most birds have long beaks |

Two terms matter on the exam:

- **Adaptation:** a trait (physical or behavioral) that became common because it helped ancestors survive and reproduce in their environment.
- **Fitness:** reproductive success, meaning how many copies of one's genes are passed to future generations. In evolutionary terms, "fit" does **not** mean strong or healthy; it means leaving descendants.

### From bodies to behavior

Evolutionary psychologists apply the same logic to the mind. If a way of thinking, feeling, or acting was partly heritable and helped ancestors survive or reproduce, it would spread. The result is a set of **species-typical** tendencies that most humans share, even though individuals vary in how strongly they show them.

> 🔑 **AP Connection:** The evolutionary perspective is best at explaining **universals**, behaviors found across cultures, such as fear of heights, attachment between infants and caregivers, and a preference for sweet and fatty foods. It explains less about why **individuals** within a culture differ.
      `
    },
    {
      id: 'genetics-behavior-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Natural Selection** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In evolutionary terms, which person has the greatest fitness?',
            options: [
              'A marathon runner with no children who lives to age 100',
              'A bodybuilder who is the strongest member of a large community',
              'Someone of average health who raises five children',
              'A doctor who prevents disease in thousands of unrelated patients'
            ],
            correctAnswer: 2,
            explanation: 'Fitness means reproductive success, measured by genes passed to the next generation. Strength, long life, and helping strangers matter only if they increase the number of surviving offspring or relatives.'
          },
          {
            question: 'A behavioral tendency gives individuals a large survival advantage, but it has no genetic basis and is learned fresh by each generation. Can natural selection make this tendency more common over time?',
            options: [
              'Yes, since any behavior that helps survival is selected',
              'Yes, since learned habits are passed into the genes',
              'No, since selection acts on bodies but never on behavior',
              'No, since selection needs differences that are inherited'
            ],
            correctAnswer: 3,
            explanation: 'Natural selection works only on variation that can be inherited. A purely learned tendency can spread through teaching and culture, but not through natural selection, and the idea that learned habits enter the genes is an outdated theory.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p2-s3-examples',
      type: 'text' as const,
      content: `
## 🐍 Evolutionary Explanations of Behavior: Worked Examples

For each example, notice the three-part logic: **a recurring ancestral problem → a behavioral solution → why it would have increased survival or reproduction.**

### Example 1: Prepared fears

People develop fears of snakes, spiders, heights, and deep water far more easily than fears of cars, electrical outlets, or guns, even though the modern objects kill far more people today.

- **Ancestral problem:** snakes, spiders, and falls were real dangers for most of human history.
- **Solution:** a brain that learns to fear these specific things quickly.
- **Survival logic:** ancestors who learned these fears fast were more likely to survive long enough to reproduce.

This idea is called **biological preparedness**: organisms are predisposed to learn associations that helped their ancestors survive.

### Example 2: Taste aversion

In a classic experiment, **John Garcia and Robert Koelling** (1966) found that rats readily learned to avoid a taste that was followed by nausea but did not easily learn to avoid a light or sound followed by nausea. Rats did, however, learn to link a light or sound with a painful shock.

- **Evolutionary logic:** for an animal that forages for food, sickness is most often caused by something it **ate**, so a brain that links taste with illness, even hours later, protects against poison.
- This finding challenged the early behaviorist assumption that any stimulus could be linked with any response equally well. You will meet taste aversion again in Unit 3 (classical conditioning).

### Example 3: Infant–caregiver attachment

Human infants cannot survive alone for years. Infants who stayed close to caregivers and signaled distress (crying, clinging) when separated were more likely to survive. Attachment behaviors are found across cultures, which fits an evolved tendency.

### Example 4: Mate preferences

Cross-cultural surveys led by David Buss found some preferences that differ on average between men and women across many cultures. Evolutionary psychologists explain these as responses to different reproductive pressures faced by ancestral men and women. Critics point out that the differences are averages, that they shrink in societies with more gender equality, and that cultural explanations can predict similar patterns.

### Example 5: The mismatch problem

Ancestors who craved sweet and fatty foods got scarce calories. Today the same craving, in an environment full of cheap sugar and fat, contributes to obesity. An evolved tendency can be **adaptive in the ancestral environment and harmful in a modern one**.

| Behavior | Ancestral problem it may solve | Notes for evaluation |
|---|---|---|
| Fear of snakes and heights | Avoiding deadly animals and falls | Learned quickly; fits preparedness |
| Taste aversion | Avoiding poisonous food | Strong lab evidence in animals |
| Attachment | Infant survival | Found across cultures |
| Craving sweets and fat | Getting scarce calories | Now a mismatch with modern food |
      `
    },
    {
      id: 'genetics-behavior-p2-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Complete the Evolutionary Reasoning** 🔎

Choose the term that completes each sentence.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A camper who gets food poisoning after eating chili avoids chili for years, even though the illness began hours later. This fast, specific learning illustrates _____.',
            options: ['biological preparedness', 'sensory adaptation', 'operant shaping', 'habituation']
          },
          {
            label: 'A trait that spread because it helped ancestors survive and reproduce in their environment is called an _____.',
            options: ['instinctive drift', 'adaptation', 'acquired habit', 'evolved norm']
          },
          {
            label: 'Craving calorie-dense food was useful when food was scarce but contributes to obesity today. This illustrates an evolutionary _____.',
            options: ['fitness gain', 'mismatch', 'selection pressure', 'genetic drift']
          }
        ],
        correctAnswers: ['biological preparedness', 'adaptation', 'mismatch'],
        hint1: 'The learning happens quickly and is specific to taste and illness.',
        hint2: 'This is the general word for a trait shaped by natural selection.',
        hint3: 'The tendency was helpful in the ancestral world but no longer fits the modern one.',
        explanation: 'Taste aversion is the standard example of biological preparedness. A trait shaped by natural selection is an adaptation. A trait that helped in the ancestral environment but harms people in a modern one is an evolutionary mismatch.'
      }
    },
    {
      id: 'genetics-behavior-p2-s5-evaluate',
      type: 'text' as const,
      content: `
## ⚖️ Evaluating Evolutionary Explanations

Evolutionary explanations are powerful, but AP questions often ask you to evaluate them.

| Strength | Limitation |
|---|---|
| Explains **why** universal behaviors exist, not just how | Easy to invent a story **after the fact** for almost any behavior (hindsight explanations, sometimes called "just-so stories") |
| Generates testable predictions, such as preparedness in taste aversion | Ancestral environments cannot be observed directly, so some claims are hard to test |
| Connects psychology to biology | Can underplay culture, learning, and individual choice |
| Explains mismatches like modern food cravings | Can be misused to justify inequality ("it is natural, so it is right") |

### Two errors to avoid

1. **"Natural means good."** Explaining why a tendency evolved does not show that it is morally acceptable or that it should not be changed.
2. **"Evolved means fixed."** Evolved tendencies are predispositions that interact with learning. People who are prepared to fear snakes do not all fear snakes; experience still matters.

## ⚠️ Eugenics: A Historical Misuse of Heredity

**Eugenics** was a movement that claimed society could be "improved" by encouraging reproduction among people judged to have desirable inherited traits and preventing reproduction among those judged undesirable. Francis Galton coined the term in 1883.

### What happened

- In the early 1900s, many U.S. states passed **forced sterilization** laws aimed at people labeled "feebleminded," people with mental illness, people in poverty, and others. The U.S. Supreme Court upheld one such law in **Buck v. Bell (1927)**, and tens of thousands of Americans were sterilized without meaningful consent.
- Early intelligence tests were misused in the eugenics era to label immigrants and minority groups as inherently less intelligent, and eugenic arguments influenced restrictive U.S. immigration laws of the 1920s.
- **Nazi Germany** drew on eugenic ideas to justify forced sterilization and, ultimately, the murder of disabled people and the Holocaust.

### Why eugenics was bad science, not just bad ethics

| Eugenic assumption | What psychology now shows |
|---|---|
| Complex traits like intelligence or "character" are passed on like single genes | These traits are shaped by many genes plus the environment |
| Group differences in test scores prove inherited inferiority | Tests given in a language or culture people do not share measure opportunity, not innate ability |
| Poverty and crime are inherited | Social conditions strongly shape both |
| Heredity is destiny | Genes create predispositions that interact with environments |

> 🔑 **AP Connection:** The CED names eugenics as a historical misuse of claims about heredity. Expect questions that ask why eugenic reasoning was flawed, usually because it **ignored environmental influences** and treated predispositions as fixed destinies. Part 5 shows how misreading **heritability** repeats the same error.
      `
    },
    {
      id: 'genetics-behavior-p2-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Evolution and Its Misuses** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Across dozens of cultures, toddlers show wariness of strangers at about the same age. How would an evolutionary psychologist most likely explain this pattern?',
            options: [
              'Parents in every culture teach children to fear strangers',
              'Caution near unknown adults kept wandering children safe',
              'Toddlers learn it after one bad experience with a stranger',
              'It reflects a single gene that some toddlers inherit'
            ],
            correctAnswer: 1,
            explanation: 'An evolutionary explanation points to survival: wariness of strangers would have protected young children who were starting to wander. Its appearance at a similar age across cultures fits a species-typical tendency better than a taught or single-gene account.'
          },
          {
            question: 'A writer argues that since aggression evolved to help ancestors compete, schools should not try to reduce aggressive behavior. What is the main flaw in this argument?',
            options: [
              'Aggression could not have evolved, since it often harms the aggressor',
              'Evolutionary theory predicts that aggression should vanish in schools',
              'Showing that a tendency evolved does not mean it is good or unchangeable',
              'Aggression in children is entirely learned from violent media at home'
            ],
            correctAnswer: 2,
            explanation: 'Explaining the origin of a tendency does not justify it or make it fixed; evolved predispositions still interact with learning. The other options make factual claims that are false or far too absolute.'
          },
          {
            question: 'In the 1920s, a eugenicist pointed to low test scores among recently arrived immigrants as proof of inherited inferiority. Which criticism best identifies the scientific error?',
            options: [
              'Scoring by hand created random errors, so the scores were unreliable',
              'The tests measured language and cultural familiarity as much as ability',
              'Intelligence cannot be measured, so no test score has any real meaning',
              'The immigrants scored low because intelligence is entirely genetic in adults'
            ],
            correctAnswer: 1,
            explanation: 'Tests given in an unfamiliar language and culture reflect opportunity and familiarity, so low scores cannot show inherited inferiority. The eugenicist ignored environmental explanations, the central error of the movement.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p2-s7-connection',
      type: 'text' as const,
      content: `
### 🎯 AP Connection: Using the Evolutionary Perspective in a Response

When you apply the evolutionary perspective, make all three links explicit:

1. **Identify the behavior** ("people learn to fear snakes after a single frightening encounter").
2. **Name the ancestral advantage** ("ancestors who learned this fear quickly avoided venomous bites").
3. **Connect to reproduction** ("so they were more likely to survive and pass on the predisposition").

A response that says only "it evolved" or "it is natural" does not explain anything.

**Next up — Part 3:** If both genes and environment matter, how can researchers tell their effects apart? Family, twin, and adoption studies.
      `
    }
  ]
}
