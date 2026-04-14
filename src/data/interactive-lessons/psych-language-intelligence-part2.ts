export const psychLanguagePart2Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu2-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 2 of 7 — Language Theories**

How do children learn language so effortlessly? This question sparked one of psychology's greatest debates — between behaviorist B.F. Skinner and linguist Noam Chomsky. Understanding their opposing views (and the modern synthesis) is critical for AP Psychology.

| Theory | Key Theorist | Core Claim | Key Evidence |
|--------|-------------|------------|--------------|
| **Behaviorist** | Skinner | Language is learned through reinforcement & imitation | Parents reinforce correct speech |
| **Nativist** | Chomsky | Humans are biologically wired for language (LAD) | Universal grammar, language universals |
| **Interactionist** | Vygotsky, Bruner | Biology + social interaction both necessary | Children need human interaction, not just exposure |
| **Critical Period** | Lenneberg | Language must be learned before puberty | Feral children (Genie), deaf children |

### 🗣️ Real-World Example

Noam Chomsky pointed out that children produce sentences they have NEVER heard before — like "I goed to the store." No adult says "goed," so the child couldn't have learned it through imitation. Instead, the child must have an innate understanding of grammar rules (add "-ed" for past tense) — evidence for the Language Acquisition Device (LAD).

> **Why This Matters for the AP Exam:** The Chomsky vs. Skinner debate is a top-10 AP Psychology concept. Know BOTH sides and the evidence for each. The exam loves asking which theory explains overgeneralization errors (answer: Chomsky/nativist).
      `
    },
    {
      id: 'langu2-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A child who has never heard the word "breaked" says "I breaked the toy." Which theory best explains this?',
            options: [
              'Skinner\'s behaviorist theory — the child was reinforced for saying it',
              'Chomsky\'s nativist theory — the child applied an innate grammar rule',
              'Interactionist theory — the child learned it through social interaction',
              'Critical period hypothesis — the child is within the language window'
            ],
            correctAnswer: 1,
            explanation: 'The child created "breaked" by applying the past-tense rule (-ed) to an irregular verb. Since no adult models this error, the child must have an innate understanding of grammar rules — supporting Chomsky\'s LAD. Skinner\'s theory cannot explain novel constructions never heard or reinforced.'
          },
          {
            question: 'Which evidence would MOST strongly support the critical period hypothesis for language?',
            options: [
              'Bilingual children learn faster than monolingual children',
              'Adults can learn vocabulary but struggle with native-like grammar after puberty',
              'Children in all cultures babble at the same age',
              'Parents who read to children have children with larger vocabularies'
            ],
            correctAnswer: 1,
            explanation: 'The critical period hypothesis states that language (especially grammar) must be acquired before puberty. Adults who learn a second language after puberty can learn vocabulary but rarely achieve native-like grammar or accent — strong evidence for a biological window that closes.'
          }
        ]
      }
    },
    {
      id: 'langu2-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Deep Dive: The Great Language Debate

**Chomsky's Language Acquisition Device (LAD)**
- A hypothetical brain mechanism that contains **universal grammar** — the deep structural rules shared by all human languages
- Evidence: (1) All languages share subject-verb-object structure, (2) children learn grammar at similar ages worldwide, (3) children produce novel sentences never heard, (4) overgeneralization errors
- Limitation: Does not explain WHY social interaction is necessary (children exposed only to TV do NOT learn language)

**Skinner's Operant Conditioning View**
- Language is learned through reinforcement (parents praise correct speech), shaping (successive approximations), and imitation
- Evidence: (1) Parents DO correct and expand children's speech, (2) vocabulary size correlates with parental input, (3) children learn their specific native language
- Limitation: Cannot explain overgeneralization, the speed of acquisition, or why children produce sentences never heard before

### Whorf's Linguistic Relativity Hypothesis

| Version | Claim | Example | Status |
|---------|-------|---------|--------|
| **Strong** (linguistic determinism) | Language DETERMINES thought — you cannot think without words | Hopi language has no past tense, so Hopi cannot think about the past | Largely rejected |
| **Weak** (linguistic relativity) | Language INFLUENCES thought — it shapes perception | Russians with separate words for light/dark blue discriminate blues faster | Supported by research |

**Key AP distinction:** The strong version says language determines thought (rejected). The weak version says language influences thought (supported). The exam tests this distinction frequently.

### The Case of Genie (Critical Period Evidence)
Genie was isolated until age 13 with no language exposure. Despite years of therapy, she never acquired normal grammar — though she learned vocabulary. This tragic case supports the critical period hypothesis: grammar acquisition requires early exposure, while vocabulary can be learned at any age.
      `
    },
    {
      id: 'langu2-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'What is Chomsky\'s hypothetical brain mechanism for learning grammar called?', answer: 'language acquisition device' },
          { label: 'Whose theory says language is learned through reinforcement and imitation?', answer: 'Skinner' },
          { label: 'What hypothesis states that language must be learned before puberty?', answer: 'critical period hypothesis' }
        ]
      }
    },
    {
      id: 'langu2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Theory to Its Evidence** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'Children say "goed" though no adult models it', options: ['Skinner — reinforcement', 'Chomsky — LAD', 'Interactionist', 'Critical period'] },
          { label: 'Genie never acquired grammar after age 13', options: ['Skinner — reinforcement', 'Chomsky — LAD', 'Whorf — linguistic relativity', 'Critical period'] },
          { label: 'Vocabulary size correlates with parental input', options: ['Skinner — reinforcement', 'Chomsky — LAD', 'Critical period', 'Whorf — linguistic relativity'] }
        ],
        correctAnswers: ['Chomsky — LAD', 'Critical period', 'Skinner — reinforcement'],
        hint1: 'Overgeneralization errors support the innate grammar theory.',
        hint2: 'Genie\'s case shows a window for language acquisition closes.',
        hint3: 'Parental input affecting vocabulary supports learning-based theory.',
        explanation: 'Overgeneralization ("goed") supports Chomsky — the child applies an innate rule. Genie\'s inability to learn grammar after 13 supports the critical period. Vocabulary correlating with parental input supports Skinner\'s environmental learning view.'
      }
    },
    {
      id: 'langu2-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Exam Strategy: Language Theory Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| Saying Chomsky said language is 100% innate | He said the CAPACITY is innate, but exposure is needed | LAD provides the grammar blueprint; environment triggers it |
| Thinking Skinner's view is completely wrong | It explains vocabulary and specific language learning | It just can't explain grammar acquisition or novel sentences |
| Confusing strong and weak Whorf | Strong = determines; Weak = influences | Strong is rejected; weak has research support |
| Assuming critical period means NO learning after puberty | Adults CAN learn vocabulary and basic grammar | They just can't achieve native-like fluency/grammar |

**Memory Trick:** **C**homsky = **C**omputer hardware (built-in capacity). **S**kinner = **S**oftware (programmed by environment).

> **AP Tip:** When the exam asks about language and the brain, remember: **Broca's area** = speech PRODUCTION (damage → can understand but can't speak fluently). **Wernicke's area** = speech COMPREHENSION (damage → speaks fluently but words make no sense).
      `
    },
    {
      id: 'langu2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers find that speakers of a language with 12 color terms can distinguish colors faster than speakers of a language with only 4 color terms. This finding best supports:',
            options: [
              'Chomsky\'s universal grammar',
              'Skinner\'s reinforcement theory of language',
              'The strong version of the Whorfian hypothesis',
              'The weak version of the Whorfian hypothesis'
            ],
            correctAnswer: 3,
            explanation: 'This supports the WEAK version of linguistic relativity — language INFLUENCES (but does not determine) thought. The speakers with fewer color terms can still SEE the colors; they just discriminate them more slowly. If it were the strong version, they wouldn\'t be able to perceive the difference at all.'
          },
          {
            question: 'A 7-year-old immigrant child achieves native-like fluency in English within 2 years, while her 35-year-old father remains accented despite living in the same environment. This best demonstrates:',
            options: [
              'Skinner\'s theory — the child received more reinforcement at school',
              'The critical period hypothesis — the child is within the language window',
              'Chomsky\'s LAD — only children have universal grammar',
              'Whorf\'s hypothesis — the father thinks in his native language'
            ],
            correctAnswer: 1,
            explanation: 'The critical period hypothesis predicts that language (especially grammar and pronunciation) is more easily acquired before puberty. The 7-year-old is still within the window; the father has passed it. Note: the father CAN learn English, but native-like pronunciation and grammar are much harder to achieve after puberty.'
          }
        ]
      }
    }
  ]
}
