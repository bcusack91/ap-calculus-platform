export const psychLanguagePart7Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu7-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 7 of 7 — Synthesis & AP Review**

This final part integrates ALL language and intelligence concepts into a comprehensive review. Use this as your last stop before the AP exam.

### Master Integration Table

| Concept | Key Person | Core Idea | Common AP Trap |
|---------|-----------|-----------|----------------|
| Phoneme | — | Smallest unit of SOUND | Confusing with morpheme |
| Morpheme | — | Smallest unit of MEANING | Forgetting prefixes/suffixes count |
| LAD | Chomsky | Innate brain device for grammar | Saying language is 100% innate |
| Operant conditioning | Skinner | Language learned via reinforcement | Ignoring that it can't explain novel sentences |
| Critical period | Lenneberg | Grammar best learned before puberty | Saying NO learning occurs after puberty |
| Linguistic relativity | Whorf | Language influences thought (weak) / determines thought (strong) | Not specifying weak vs. strong version |
| General intelligence (g) | Spearman | One factor underlies all cognitive tasks | Ignoring that he acknowledged specific abilities too |
| Multiple intelligences | Gardner | 8 independent intelligences | Treating as settled science (it's debated) |
| Triarchic theory | Sternberg | Analytical + creative + practical | Forgetting that analytical = traditional IQ |
| Emotional intelligence | Salovey/Mayer; Goleman | Perceive, use, understand, manage emotions | Equating EI with "being nice" |
| Stanford-Binet / Wechsler | Binet → Terman; Wechsler | IQ testing (original vs. modern) | Not knowing Wechsler gives verbal + performance scores |
| Flynn effect | Flynn | IQ rising ~3 pts/decade | Attributing it to genetics |
| Stereotype threat | Steele & Aronson | Stereotype awareness impairs performance | Thinking it means low ability |
| Growth mindset | Dweck | Belief that intelligence can grow with effort | Confusing with self-esteem |

> **Final Review Goal:** If you can explain every row in this table with a real-world example, you are ready for any AP language/intelligence question.
      `
    },
    {
      id: 'langu7-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher studies a 3-year-old who says "foots" and "goed." The child speaks in complete sentences, knows 500+ words, and follows conversations. Which combination of concepts BEST explains the child\'s behavior?',
            options: [
              'Overregularization (applying grammar rules) + normal language development (500+ words by age 3)',
              'Language delay + phoneme confusion',
              'Skinner\'s reinforcement (parents taught "goed") + critical period failure',
              'Semantic confusion + poor pragmatic skills'
            ],
            correctAnswer: 0,
            explanation: 'The child shows overregularization ("foots" = applying plural rule to irregular noun; "goed" = applying past-tense rule to irregular verb) — a sign of NORMAL grammar rule learning, not delay. Speaking in sentences with 500+ words is age-appropriate. Skinner\'s view cannot explain "goed" because no adult models it.'
          },
          {
            question: 'Which statement correctly applies the concept of heritability to a real-world situation?',
            options: [
              'Since heritability of IQ is .75, 75% of Maria\'s intelligence is genetic',
              'Since heritability of IQ is .75, there is no point in educational interventions',
              'Since heritability of IQ is .75, 75% of the variation in IQ within this population is due to genetic differences',
              'Since heritability of IQ is .75, racial IQ differences are 75% genetic'
            ],
            correctAnswer: 2,
            explanation: 'Heritability describes what proportion of VARIATION within a POPULATION is due to genetics. It does NOT apply to individuals, nor does within-group heritability explain between-group differences. The Flynn effect proves that environmental changes can raise IQ scores despite high heritability.'
          }
        ]
      }
    },
    {
      id: 'langu7-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Cross-Unit Connections

Language and intelligence connect to nearly every unit in AP Psychology. These cross-unit connections are gold for FRQs:

| This Unit Concept | Connects to... | How |
|-------------------|---------------|-----|
| Chomsky's LAD | **Biological bases** | Brain areas (Broca's = production, Wernicke's = comprehension) |
| Skinner's language view | **Learning** | Operant conditioning — reinforcement shapes language |
| Critical period | **Developmental** | Same principle applies to attachment (Bowlby) |
| Overregularization | **Cognition** | Shows schema formation — applying rules too broadly |
| Spearman's g | **Research methods** | Factor analysis is a statistical technique |
| Stereotype threat | **Social psychology** | Prejudice, discrimination, self-fulfilling prophecy |
| Flynn effect | **Research methods** | Cohort effects, generational differences |
| Growth mindset | **Motivation** | Intrinsic motivation, attribution theory |
| IQ testing | **Research methods** | Reliability, validity, standardization, normal distribution |
| Linguistic relativity | **Sensation/Perception** | Language influences color PERCEPTION (not just naming) |

### Chomsky vs. Skinner: The Complete Comparison

| Dimension | Chomsky (Nativist) | Skinner (Behaviorist) |
|-----------|-------------------|----------------------|
| Core claim | Grammar is innate (LAD) | Language is entirely learned |
| Evidence FOR | Overgeneralization, universals, speed of acquisition | Vocabulary correlates with input, specific language learned |
| Evidence AGAINST | Children need social interaction (not just exposure) | Can't explain novel sentences or speed |
| View of child | Active processor with built-in rules | Passive recipient shaped by environment |
| Modern status | Partially supported — biology matters | Partially supported — environment matters |
| AP exam tip | Best explains grammar acquisition | Best explains vocabulary and specific language |

### Intelligence Theory Quick Comparison

| Question | Spearman | Gardner | Sternberg |
|----------|----------|---------|-----------|
| How many types? | 1 (g) | 8+ | 3 |
| Supports IQ tests? | Yes | No — too narrow | Partially (analytical only) |
| Values non-academic skills? | Less so | Yes — bodily, musical, etc. | Yes — practical, creative |
| Criticism | Oversimplifies | "Intelligences" may be talents | Hard to measure creative/practical |
      `
    },
    {
      id: 'langu7-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Final Recall Check** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Name the brain area for speech PRODUCTION (damage → can\'t speak fluently)', answer: 'Broca\'s area' },
          { label: 'Who popularized emotional intelligence in a 1995 book?', answer: 'Goleman' },
          { label: 'What statistical method did Spearman use to discover the g factor?', answer: 'factor analysis' }
        ]
      }
    },
    {
      id: 'langu7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Final Matching Challenge** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A person speaks fluently but the words make no sense', options: ['Broca\'s aphasia', 'Wernicke\'s aphasia', 'Overregularization', 'Critical period effect'] },
          { label: 'IQ test that gives separate verbal and performance scores', options: ['Stanford-Binet', 'Wechsler (WAIS/WISC)', 'Raven\'s Progressive Matrices', 'Binet-Simon'] },
          { label: 'Praising effort over intelligence improves student outcomes', options: ['Stereotype threat — Steele', 'Flynn effect — Flynn', 'Growth mindset — Dweck', 'Emotional intelligence — Goleman'] }
        ],
        correctAnswers: ['Wernicke\'s aphasia', 'Wechsler (WAIS/WISC)', 'Growth mindset — Dweck'],
        hint1: 'Wernicke\'s area handles comprehension — damage causes fluent but meaningless speech.',
        hint2: 'The Wechsler tests are unique in providing separate subscale scores.',
        hint3: 'Dweck showed that effort praise fosters a growth mindset.',
        explanation: 'Fluent but meaningless speech = Wernicke\'s aphasia (comprehension area damaged). Wechsler tests give verbal + performance scores. Effort praise → growth mindset (Dweck) → better outcomes.'
      }
    },
    {
      id: 'langu7-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 FRQ Template: Language & Intelligence

**Sample prompt:** "A school district is redesigning its gifted program. Using your knowledge of psychology, explain how EACH of the following applies..."

**Template for each term:**

> **[Term]:** [One-sentence definition]. In this scenario, [apply to the specific gifted program context]. For example, [concrete illustration]. This suggests that [implication for the program].

**Example FRQ answer segment:**

> **Stereotype threat:** Stereotype threat occurs when awareness of a negative stereotype about one's group impairs performance (Steele & Aronson, 1995). In this scenario, minority students taking the gifted program entrance test may underperform if they believe the test is measuring their intellectual ability, as the anxiety from stereotype awareness consumes working memory resources. For example, a student who would normally qualify might score below the cutoff when told the test measures "innate intelligence." This suggests the school should frame the test as a learning tool rather than a measure of fixed ability.

### High-Frequency AP Topics (Based on Past Exams)

1. **Phoneme vs. morpheme distinction** — appears almost every year
2. **Chomsky vs. Skinner** — classic debate question
3. **Reliability vs. validity** — tested in multiple units
4. **Stereotype threat** — modern research favorite
5. **Nature vs. nurture of intelligence** — twin studies + Flynn effect
6. **Broca's vs. Wernicke's** — links to biological bases unit
7. **Gardner vs. Spearman vs. Sternberg** — theory comparison
8. **Overregularization** — evidence for innate grammar
      `
    },
    {
      id: 'langu7-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Final Exam Simulation** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'An AP Psychology FRQ asks you to explain how Chomsky\'s theory, stereotype threat, and reliability apply to a new school testing program. Which response strategy would earn the MOST points?',
            options: [
              'Define all three terms in a single paragraph for efficiency',
              'For each term: define it, apply it to the specific scenario, and give a concrete example',
              'Simply list the definitions of each term',
              'Write a general essay about intelligence testing'
            ],
            correctAnswer: 1,
            explanation: 'AP FRQs are scored with rubrics that award points for: (1) correct DEFINITION, (2) APPLICATION to the specific scenario, and (3) a concrete EXAMPLE. Each term should be addressed separately with all three elements. Simply listing definitions earns only partial credit. General essays without specific application earn very few points.'
          },
          {
            question: 'Which of the following scenarios requires knowledge from BOTH the language AND intelligence units to fully answer?',
            options: [
              'Explaining why identical twins have similar IQ scores',
              'Describing the stages of language development in children',
              'Evaluating whether a bilingual child\'s lower vocabulary in each language indicates lower intelligence',
              'Explaining how Spearman developed the g factor using factor analysis'
            ],
            correctAnswer: 2,
            explanation: 'Evaluating a bilingual child\'s vocabulary requires language knowledge (total vocabulary across both languages, bilingual development norms, overregularization as normal) AND intelligence knowledge (what IQ tests measure, cultural bias, whether vocabulary in one language is a valid measure of intelligence). This is the type of cross-topic question AP Psychology loves.'
          }
        ]
      }
    }
  ]
}
