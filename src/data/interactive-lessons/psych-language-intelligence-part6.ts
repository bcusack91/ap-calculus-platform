export const psychLanguagePart6Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 6 of 7 — Problem-Solving Workshop**

This workshop applies everything from Parts 1–5 to AP-style scenarios. The exam tests your ability to APPLY concepts, not just define them. Use this framework when tackling language and intelligence questions:

### 🔧 Problem-Solving Framework

| Step | Action | Key Question |
|------|--------|-------------|
| 1 | **Identify the domain** | Is this a language question, an intelligence question, or both? |
| 2 | **Determine the specific concept** | Which theory, test, or controversy is being tested? |
| 3 | **Apply the concept** | How does the concept explain the scenario? |
| 4 | **Check for traps** | Am I confusing similar concepts (e.g., phoneme/morpheme, reliability/validity)? |
| 5 | **Consider alternatives** | Would a different theory explain this differently? |
| 6 | **Support with evidence** | What study or finding supports my answer? |

### Quick-Reference: Most Tested Concepts

| Concept | Most Common Trap | Correct Answer |
|---------|-----------------|----------------|
| Phoneme vs. morpheme | Mixing up sound vs. meaning | Phoneme = sound, morpheme = meaning |
| Chomsky vs. Skinner | Saying one is "right" and one is "wrong" | Both explain different aspects of language |
| Reliability vs. validity | Assuming reliable = valid | Reliable ≠ valid (but valid must be reliable) |
| Heritability | Applying group statistic to individuals | Heritability describes populations, not individuals |
| Stereotype threat | Thinking it means low ability | It affects high-ability people in stereotyped groups |
      `
    },
    {
      id: 'langu6-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Scenario Analysis** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A bilingual child speaks Spanish at home and English at school. She sometimes says "I want the dress red" (Spanish word order) instead of "I want the red dress" (English word order). Which concept best explains this error?',
            options: [
              'Phoneme confusion — she mixes up Spanish and English sounds',
              'Syntactic interference — the grammar rules of one language affect the other',
              'Semantic confusion — she doesn\'t know what "red" means',
              'Critical period — she is too old to learn English grammar'
            ],
            correctAnswer: 1,
            explanation: 'This is syntactic (grammar) interference — Spanish places adjectives AFTER nouns ("el vestido rojo" = "the dress red"), and she applied that rule to English. This is a normal part of bilingual development, not a sign of confusion or delay. Phonemes are about sounds, not word order.'
          },
          {
            question: 'A researcher gives the same IQ test to two groups: Group A takes it in a quiet room, Group B takes it in a noisy cafeteria. Group A scores 10 points higher on average. The researcher concludes Group A is more intelligent. What is the primary flaw?',
            options: [
              'The test lacks reliability — it gives different scores',
              'The test lacks validity — it\'s not measuring intelligence',
              'The test lacks standardization — conditions were not uniform',
              'The Flynn effect — Group A is from a later generation'
            ],
            correctAnswer: 2,
            explanation: 'Standardization requires that tests be administered under IDENTICAL conditions. Different testing environments (quiet vs. noisy) violate standardization, making the comparison invalid. The difference likely reflects testing conditions, not intelligence differences. This is a standardization problem, not a reliability or validity problem.'
          }
        ]
      }
    },
    {
      id: 'langu6-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Complex Scenario Analysis

**Scenario 1: The Gifted Program Debate**

A school district uses a single IQ test to select students for its gifted program. Critics argue the program disproportionately selects students from wealthy families.

Apply your knowledge:
- **Cultural bias**: Test items may use vocabulary more familiar to affluent students
- **Stereotype threat**: Students from underrepresented groups may underperform due to anxiety
- **Environmental factors**: Wealthy families provide enriched environments → higher IQ scores
- **Validity concern**: Does the test predict giftedness, or just socioeconomic status?
- **Gardner's critique**: The test measures only linguistic/logical-mathematical intelligence, missing spatial, musical, interpersonal, etc.

**Scenario 2: The Language Delay Myth**

Parents worry that their bilingual 2-year-old speaks fewer words in each language than monolingual peers.

Apply your knowledge:
- **Total vocabulary**: Bilingual children's COMBINED vocabulary across both languages equals or exceeds monolingual peers
- **Language milestones**: Bilingualism does NOT delay language development
- **Chomsky's view**: The LAD handles multiple languages — children acquiring two languages still hit milestones on time
- **Code-switching**: Mixing languages within sentences is a sign of linguistic competence, not confusion

### Decision Matrix: Which Theory Applies?

| If the question involves... | Think about... |
|---------------------------|----------------|
| A child producing novel sentences | Chomsky's LAD — innate grammar rules |
| Vocabulary correlating with parental input | Skinner — environmental reinforcement |
| A person who can't learn grammar after puberty | Critical period hypothesis |
| Words influencing perception or thought | Whorf's linguistic relativity (weak version) |
| One test score predicting many abilities | Spearman's g factor |
| Different skills being independent | Gardner's multiple intelligences |
| Test scores rising across generations | Flynn effect |
| Minority students underperforming when reminded of stereotypes | Stereotype threat |
      `
    },
    {
      id: 'langu6-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'A test given under non-uniform conditions violates which criterion?', answer: 'standardization' },
          { label: 'What theory explains why a child says "I breaked it" despite never hearing it?', answer: 'nativist' },
          { label: 'The Steele & Aronson study demonstrated what phenomenon?', answer: 'stereotype threat' }
        ]
      }
    },
    {
      id: 'langu6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Scenario to the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A child says "mouses" instead of "mice"', options: ['Phoneme error', 'Overregularization', 'Semantic error', 'Pragmatic error'] },
          { label: 'A "math test" that only includes algebra problems', options: ['Low reliability', 'Low predictive validity', 'Low content validity', 'Low standardization'] },
          { label: 'A mechanic with average IQ who can fix any car', options: ['High g factor', 'Sternberg — practical intelligence', 'Gardner — linguistic', 'Emotional intelligence'] }
        ],
        correctAnswers: ['Overregularization', 'Low content validity', 'Sternberg — practical intelligence'],
        hint1: 'Applying the regular plural rule (-s) to an irregular noun = overregularization.',
        hint2: 'Content validity = does the test cover the full range of the subject?',
        hint3: 'Real-world problem-solving skills = Sternberg\'s practical intelligence.',
        explanation: '"Mouses" = overregularization (applying grammatical rules too broadly). A math test with only algebra = low content validity (doesn\'t cover all of math). A skilled mechanic with average IQ = practical intelligence (Sternberg).'
      }
    },
    {
      id: 'langu6-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Exam Problem-Solving Checklist

Use this checklist before submitting any language/intelligence answer:

**For Language Questions:**
- [ ] Did I distinguish phoneme (sound) from morpheme (meaning)?
- [ ] Did I identify whether it's a Chomsky, Skinner, or interactionist question?
- [ ] Did I check for overregularization vs. imitation?
- [ ] Did I specify strong vs. weak Whorf if linguistic relativity is involved?
- [ ] Did I mention Broca's or Wernicke's if the question involves brain areas?

**For Intelligence Questions:**
- [ ] Did I distinguish Spearman (1 g) from Gardner (8 types) from Sternberg (3 types)?
- [ ] Did I separate reliability from validity?
- [ ] Did I note that heritability applies to populations, not individuals?
- [ ] Did I distinguish stereotype threat from cultural bias?
- [ ] Did I mention both nature AND nurture if asked about causes?

**For Free-Response:**
- [ ] Did I define the concept before applying it?
- [ ] Did I use a SPECIFIC example from the scenario?
- [ ] Did I name the researcher (Chomsky, Steele, Dweck, etc.)?
- [ ] Did I avoid absolute statements ("always," "never")?
      `
    },
    {
      id: 'langu6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Dr. Martinez designs an intelligence test that uses only abstract patterns and shapes (no words, no cultural knowledge). She is trying to create a test that is:',
            options: [
              'More reliable than traditional IQ tests',
              'Culture-fair — reducing cultural bias in test content',
              'Based on Sternberg\'s triarchic theory',
              'A measure of emotional intelligence'
            ],
            correctAnswer: 1,
            explanation: 'Culture-fair tests use non-verbal, abstract items to minimize the advantage that familiarity with a particular culture\'s language and knowledge provides. Raven\'s Progressive Matrices is a real example of this approach. However, even "culture-fair" tests are debated — test-taking skills, comfort with timed tests, and abstract reasoning training still vary by culture.'
          },
          {
            question: 'A study finds that adopted children\'s IQs are more similar to their biological parents\' IQs than to their adoptive parents\' IQs by age 18. However, adopted children raised in enriched homes score higher than their biological parents. Which PAIR of conclusions is best supported?',
            options: [
              'Intelligence is 100% genetic; adoption has no effect',
              'Intelligence is 100% environmental; biology plays no role',
              'Genes influence IQ variation (biological parent correlation) AND environment affects IQ level (enrichment raises scores)',
              'The study is flawed because the results contradict each other'
            ],
            correctAnswer: 2,
            explanation: 'Both findings are valid and complementary: (1) the biological parent correlation shows genetic influence on WHO scores higher within a group, and (2) the enrichment effect shows environmental influence on the OVERALL LEVEL of scores. Genes set a range; environment determines where you fall within it. This is the interaction model the AP exam expects.'
          }
        ]
      }
    }
  ]
}
