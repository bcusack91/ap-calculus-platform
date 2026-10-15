export const psychGeneticsPart3Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genetics-behavior-p3-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Genetics and Behavior

**Part 3 of 7 — Family, Twin, and Adoption Studies**

> 🔑 **Key Concept:** In ordinary families, relatives share **both** genes and environments, so similarity alone cannot tell you which one is responsible. Twin and adoption studies are designed to **pull the two apart** by comparing people who differ in genetic relatedness, shared environment, or both.

### The core problem: genes and environment travel together

Suppose musical ability runs in a family. The children share about half their genes with each parent, but they also grew up hearing their parents practice, had instruments in the house, and were praised for playing. Family resemblance is **confounded**: genetic and environmental explanations both predict the same result.

Researchers cannot ethically assign children to parents at random, so psychologists rely on **naturally occurring** situations where genetic and environmental similarity separate. All three designs below are **correlational**: they measure how similar relatives are, but nothing is manipulated.

### How many genes do relatives share?

| Relationship | Average proportion of genetic variants shared (by descent) |
|---|---|
| Identical twins | about 100% |
| Fraternal twins | about 50% on average |
| Ordinary siblings | about 50% on average |
| Parent and child | about 50% |
| Grandparent and grandchild; half siblings | about 25% |
| First cousins | about 12.5% |
| Adoptive parent and child; adoptive siblings | about 0% (not related by descent) |

These are the numbers that make family, twin, and adoption designs work. (All humans share the vast majority of their genes; these percentages describe the genetic differences that vary from person to person.)
      `
    },
    {
      id: 'genetics-behavior-p3-s2-designs',
      type: 'text' as const,
      content: `
## 🔬 Design 1: Family Studies

**Logic:** If a trait has a genetic component, relatives who share more genes should be more similar, and a person's risk of a disorder should rise with closer genetic relatedness to someone who has it.

**Example question:** Is the risk of schizophrenia higher for the child of an affected parent than for a cousin of an affected person? (Yes; risk rises with genetic closeness.)

**Limitation:** closer relatives usually also **live together** more. A parent and child share genes **and** a household. Family studies show that a trait runs in families, but they cannot say why.

## 👯 Design 2: Twin Studies

**Identical (monozygotic, MZ) twins** develop from a single fertilized egg that splits, so they share essentially all their genes. **Fraternal (dizygotic, DZ) twins** develop from two separate eggs fertilized by two sperm, so they are genetically no more alike than ordinary siblings, sharing about half their variants on average. They can be the same sex or different sexes.

**Logic:** Both kinds of twins are born at the same time, usually raised in the same home, by the same parents, at the same ages. So both share their environment to a similar degree. If identical twins are **more alike** than fraternal twins on a trait, the extra similarity is attributed to their extra genetic similarity.

| Comparison | What is held about constant | What differs | If MZ twins are much more similar, it suggests |
|---|---|---|---|
| MZ twins vs DZ twins raised together | Shared family environment, age, prenatal timing | Genetic similarity (about 100% vs about 50%) | Genetic influence on the trait |

**Limitations:**
- **Equal environments assumption:** identical twins may be **treated** more alike (dressed alike, mistaken for each other, placed in the same activities), so some of their extra similarity could be environmental.
- Many identical twins share a placenta, so their **prenatal environment** can be more similar too.
- Twins may not represent the general population (they are often born earlier and smaller).

### Twins reared apart

The strongest twin design studies identical twins who were **separated early in life** and raised in different homes. The best-known is the **Minnesota Study of Twins Reared Apart**, led by Thomas Bouchard beginning in 1979. Twins were reunited as adults and given extensive tests of personality, interests, abilities, and health.

- **What it found:** identical twins raised apart were strikingly similar on many measures, including personality traits, interests, and intelligence test scores; on many personality measures they were about as similar as identical twins raised together.
- **Why it matters:** if twins raised in **different** homes are as similar as twins raised in the **same** home, then the shared home environment is not what made them similar.
- **Famous anecdote:** the "Jim twins," separated at birth, reportedly shared first names, hobbies, and even the names of their wives and dogs. Anecdotes like this are memorable but weak evidence: with hundreds of things to compare, some coincidences are expected by chance.

**Limitations of reared-apart studies:**
- Very **small samples**, since separated identical twins are rare.
- **Selective placement:** adoption agencies often placed twins in homes similar to each other (similar income, religion, region), so "different" homes may not differ much.
- Some twins were separated months after birth or had **contact** before being studied.
- They still shared a **prenatal environment**.

## 🏠 Design 3: Adoption Studies

**Logic:** An adopted child receives **genes** from the biological parents and the **environment** from the adoptive parents. Comparing the child to each set of parents separates the two influences.

| If the adopted child resembles... | It suggests... |
|---|---|
| The **biological** parents (shared genes, no shared home) | Genetic influence |
| The **adoptive** parents (shared home, no shared genes) | Influence of the shared family environment |

**Example:** Researchers compare adoptees whose biological mothers had a psychological disorder with adoptees whose biological mothers did not. If the first group develops the disorder more often, even though they were raised by unaffected adoptive families, genetic risk is implicated.

**Limitations:**
- **Restricted range:** adoptive families are screened and tend to be stable and well-resourced, so adoptive environments vary less than environments in general. That makes environmental effects look smaller.
- **Selective placement** again: agencies may match adoptive homes to biological families.
- The **prenatal environment** (the biological mother's health, stress, substance use) is not genetic but travels with the biological parent.
- Age at adoption varies; some early environment comes from the birth family.
      `
    },
    {
      id: 'genetics-behavior-p3-s3-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Which Design Separates What?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers find that adopted children\'s extraversion scores correlate more strongly with their biological mothers\' scores than with their adoptive mothers\' scores. This result most directly suggests',
            options: [
              'a genetic influence on extraversion',
              'that the adoptive homes were too similar to matter',
              'a strong effect of the shared family environment',
              'that extraversion is learned through imitation'
            ],
            correctAnswer: 0,
            explanation: 'The adopted children share genes but not a home with their biological mothers, so resemblance to them points to genetic influence. Resemblance to the adoptive mothers would have pointed to the shared family environment instead.'
          },
          {
            question: 'Why do twin researchers compare identical twins with fraternal twins rather than simply with ordinary siblings?',
            options: [
              'Fraternal twins share more of their genes with each other than ordinary siblings do',
              'Twins of either type grow up at the same age, so environment is held more constant',
              'Ordinary siblings are related only by adoption, so genes play no part in their match',
              'Identical twins cannot be compared with siblings, since they share no environment'
            ],
            correctAnswer: 1,
            explanation: 'Fraternal twins are genetically like ordinary siblings but grow up at the same ages in the same family at the same time, so the main difference from identical twins is genetic similarity. Fraternal twins do not share more genes than ordinary siblings.'
          },
          {
            question: 'A newspaper reports that two identical twins raised apart both became firefighters, both married women named Linda, and both drive blue trucks. What is the best scientific response?',
            options: [
              'These matches prove that career choice is controlled by genes',
              'Striking matches can arise by chance and need group-level data',
              'These matches show that the twins must have met in childhood',
              'Twins raised apart cannot be studied since homes are unequal'
            ],
            correctAnswer: 1,
            explanation: 'When two people are compared on hundreds of features, some coincidences are expected by chance, so an anecdote cannot establish genetic influence. Researchers need correlations across many twin pairs.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p3-s4-cases',
      type: 'text' as const,
      content: `
## 🧩 Worked Cases: Name the Design, the Comparison, and the Confound

Practice the exact reasoning AP questions ask for. For each practice scenario, ask three questions: **What design is this? What comparison isolates genes or environment? What could still confound it?**

### Case A (practice scenario)

Researchers compare reading ability in 300 pairs of identical twins and 300 pairs of same-sex fraternal twins, all raised together. Identical twins are more similar.

- **Design:** twin study (twins raised together).
- **Comparison:** MZ vs DZ similarity; the environment is shared by both twin types, but genetic similarity differs.
- **Possible confound:** parents and teachers may treat identical twins more alike (for example, placing them in the same reading group), inflating their similarity.

### Case B (practice scenario)

Researchers find that the siblings, parents, and children of people with bipolar disorder are more likely to have bipolar disorder than members of the general population.

- **Design:** family study.
- **Comparison:** risk by degree of genetic relatedness.
- **Possible confound:** relatives share homes, stressors, and learned coping styles, so genes and environment are not separated.

### Case C (practice scenario)

Researchers track children adopted at birth. The IQ scores of the children correlate moderately with those of their biological parents and only weakly with those of their adoptive parents by adolescence.

- **Design:** adoption study.
- **Comparison:** resemblance to biological (genes only) vs adoptive (environment only) parents.
- **Possible confound:** restricted range of adoptive homes, selective placement, and the prenatal environment provided by the biological mother.

### Choosing the right design

| Research question | Best design | Why |
|---|---|---|
| Does a disorder run in families? | Family study | Shows whether risk rises with relatedness |
| How much do genetic differences contribute, compared with shared rearing? | Twin study (MZ vs DZ) | Holds family environment about constant while genetic similarity varies |
| Does the shared home matter once genes are removed from the picture? | Adoption study, or twins reared apart | Breaks the link between genes and rearing environment |
      `
    },
    {
      id: 'genetics-behavior-p3-s5-input',
      type: 'input-boxes' as const,
      content: `
**Recall the Terms** ✍️

Type one word (or the standard term) for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'Twins who develop from a single fertilized egg that splits are called _____ twins.',
            answer: 'monozygotic',
            acceptableAnswers: ['identical', 'MZ', 'mono-zygotic'],
            explanation: 'Monozygotic (identical) twins come from one zygote and share essentially all their genes.'
          },
          {
            question: 'Twins who develop from two separate eggs fertilized by two different sperm are called _____ twins.',
            answer: 'dizygotic',
            acceptableAnswers: ['fraternal', 'DZ', 'di-zygotic'],
            explanation: 'Dizygotic (fraternal) twins come from two zygotes and are genetically about as similar as ordinary siblings.'
          },
          {
            question: 'When adoption agencies place children in homes that resemble their birth families, the problem this creates for adoption research is called selective _____.',
            answer: 'placement',
            acceptableAnswers: ['placements', 'selective placement'],
            explanation: 'Selective placement makes adoptive and biological environments similar, so resemblance to biological parents could partly reflect environment.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p3-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Find the Confound** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'An adoption study finds almost no correlation between adopted children\'s anxiety and their adoptive parents\' anxiety. A critic notes that every adoptive family in the sample was middle-class and had passed an extensive screening. What is the critic\'s concern?',
            options: [
              'The adoptive homes varied too little to reveal environmental effects',
              'The adopted children shared too many genes with their adoptive parents',
              'Anxiety cannot be measured reliably in children who were adopted',
              'Screening made the biological parents more similar to the children'
            ],
            correctAnswer: 0,
            explanation: 'This is the restricted-range problem: if all homes are similar, differences between homes cannot produce differences between children, so environmental influence looks smaller than it is in the full population.'
          },
          {
            question: 'In a twin study, identical twins are more similar in political attitudes than fraternal twins are. Which alternative explanation would most weaken a genetic interpretation?',
            options: [
              'Fraternal twins share only about half of their genetic variants',
              'Identical twins are treated more alike by their families and friends',
              'Political attitudes change as people move from youth to adulthood',
              'Each identical pair is the same sex, unlike some fraternal pairs'
            ],
            correctAnswer: 1,
            explanation: 'If identical twins experience more similar environments than fraternal twins, the equal environments assumption fails and some of their extra similarity could be environmental. Fraternal twins sharing about half their variants is simply part of the design.'
          },
          {
            question: 'Why are identical twins separated in infancy and raised in different homes considered especially useful for research on heredity?',
            options: [
              'They share a home but not genes, so their similarity must be due to the environment',
              'They share neither genes nor a home, so their similarity shows pure chance at work',
              'They share genes and a home, so they offer a baseline for all other twin research',
              'They share genes but not the home, so their similarity is hard to credit to rearing'
            ],
            correctAnswer: 3,
            explanation: 'Identical twins reared apart have the same genes but different rearing environments, so their similarity cannot easily be explained by a shared home. Selective placement and the shared prenatal environment remain possible confounds.'
          }
        ]
      }
    },
    {
      id: 'genetics-behavior-p3-s7-connection',
      type: 'text' as const,
      content: `
### 🎯 AP Connection: Method Questions

The AP exam often describes a study and asks you to **identify the research method** and a **limitation**. For this topic:

- Twin, family, and adoption studies are **correlational** designs. They show association, not manipulation, so they do not prove cause on their own.
- Name the specific limitation that fits the design: **equal environments** (twin), **shared household** (family), **restricted range** or **selective placement** (adoption), **small samples** or **selective placement** (twins reared apart).

**Next up — Part 4:** Reading the numbers that these studies produce: correlations and concordance rates.
      `
    }
  ]
}
