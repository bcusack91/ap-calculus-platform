export const psychLanguagePart3Data = {
  topicSlug: 'language-intelligence',
  sections: [
    {
      id: 'langu3-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Language & Intelligence

**Part 3 of 7 — Intelligence Theories**

What IS intelligence? Psychologists have debated this for over a century. Is it one general ability, or a collection of separate talents? The AP exam frequently tests your ability to compare and contrast these competing models.

| Theory | Theorist | Core Idea | Number of Intelligences |
|--------|----------|-----------|------------------------|
| **General intelligence (g)** | Spearman (1904) | One underlying factor predicts all cognitive abilities | 1 |
| **Primary mental abilities** | Thurstone (1938) | 7 independent mental abilities, not one g | 7 |
| **Multiple intelligences** | Gardner (1983) | 8+ independent intelligences, including bodily & musical | 8 (originally) |
| **Triarchic theory** | Sternberg (1985) | Three types: analytical, creative, practical | 3 |
| **Emotional intelligence** | Salovey & Mayer; Goleman | Ability to perceive, understand, manage, and use emotions | Component of broader intelligence |

### 🗣️ Real-World Example

A student who scores high on the SAT (analytical intelligence per Sternberg) may struggle to fix a broken car (practical intelligence) or compose a song (creative intelligence). Gardner would say this student has high logical-mathematical intelligence but perhaps lower musical or bodily-kinesthetic intelligence. Spearman would argue the high SAT score reflects a general "g" factor that should predict success across all domains.

> **Why This Matters for the AP Exam:** Theory comparison questions are extremely common. You must know Spearman (one g) vs. Gardner (many independent) vs. Sternberg (three types). The exam often presents a scenario and asks which theory best explains it.
      `
    },
    {
      id: 'langu3-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A school principal argues that a student who excels in dance but struggles in math is still "intelligent." Which theory BEST supports this claim?',
            options: [
              'Spearman\'s g — high g should predict success in all areas',
              'Gardner\'s multiple intelligences — bodily-kinesthetic is its own form of intelligence',
              'Sternberg\'s triarchic theory — dance reflects analytical intelligence',
              'Thurstone\'s primary mental abilities — dance is a primary mental ability'
            ],
            correctAnswer: 1,
            explanation: 'Gardner proposed bodily-kinesthetic intelligence as one of 8 independent forms of intelligence. Under his theory, excelling in dance IS a form of intelligence, equal in legitimacy to logical-mathematical intelligence. Spearman\'s g would predict that low math ability should correlate with low ability in all domains.'
          },
          {
            question: 'Which theorist would MOST likely agree that a single IQ score can meaningfully represent a person\'s overall intelligence?',
            options: [
              'Gardner — intelligence is too multifaceted for one score',
              'Sternberg — three separate scores are needed',
              'Spearman — g underlies all cognitive tasks',
              'Goleman — emotional intelligence is separate from IQ'
            ],
            correctAnswer: 2,
            explanation: 'Spearman proposed that a single general factor (g) underlies all cognitive abilities. People who score high on one type of cognitive test tend to score high on others — supporting a single IQ score. Gardner and Sternberg both argue that a single score misses other forms of intelligence.'
          }
        ]
      }
    },
    {
      id: 'langu3-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Deep Dive: Comparing Intelligence Theories

**Spearman's g (General Intelligence)**
- Used **factor analysis**: people who score high on one cognitive test tend to score high on others
- Evidence: IQ scores DO correlate across verbal, math, and spatial tasks (positive manifold)
- Criticism: A single number may oversimplify complex human abilities

**Gardner's 8 Multiple Intelligences**

| Intelligence | Description | Example Career |
|-------------|-------------|----------------|
| Linguistic | Words and language | Writer, lawyer |
| Logical-mathematical | Numbers and reasoning | Scientist, programmer |
| Spatial | Visual-spatial reasoning | Architect, pilot |
| Musical | Rhythm and melody | Composer, musician |
| Bodily-kinesthetic | Body movement and control | Athlete, surgeon |
| Interpersonal | Understanding others | Therapist, teacher |
| Intrapersonal | Understanding self | Philosopher, counselor |
| Naturalist | Classifying nature | Biologist, farmer |

**Criticism of Gardner:** These may be talents or aptitudes rather than "intelligences." Most psychologists agree there IS a g factor — Gardner's categories may not be truly independent.

**Sternberg's Triarchic Theory**

| Type | Description | Example |
|------|-------------|---------|
| **Analytical** | Academic problem-solving, traditional "book smarts" | Scoring high on tests |
| **Creative** | Generating novel solutions, adapting to new situations | Inventing a new product |
| **Practical** | "Street smarts," applying knowledge to everyday life | Negotiating a raise |

**Emotional Intelligence (EI)**
Salovey & Mayer (1990) proposed it; Goleman (1995) popularized it. EI includes: perceiving emotions, using emotions to facilitate thought, understanding emotions, and managing emotions. Debate: Is EI a real intelligence or just a personality trait?
      `
    },
    {
      id: 'langu3-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Who proposed that one general factor (g) underlies all cognitive abilities?', answer: 'Spearman' },
          { label: 'How many intelligences did Gardner originally propose?', answer: '8' },
          { label: 'Name Sternberg\'s three types of intelligence (A, C, P)', answer: 'analytical, creative, practical' }
        ]
      }
    },
    {
      id: 'langu3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Scenario to the Theory** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A mechanic with no education can diagnose any engine problem', options: ['Spearman\'s g', 'Gardner — bodily-kinesthetic', 'Sternberg — practical intelligence', 'Emotional intelligence'] },
          { label: 'People who score high on verbal tests also score high on math tests', options: ['Spearman\'s g', 'Gardner — multiple intelligences', 'Sternberg — creative intelligence', 'Emotional intelligence'] },
          { label: 'A therapist is exceptional at reading clients\' emotions', options: ['Spearman\'s g', 'Gardner — interpersonal', 'Sternberg — analytical', 'Thurstone — primary abilities'] }
        ],
        correctAnswers: ['Sternberg — practical intelligence', 'Spearman\'s g', 'Gardner — interpersonal'],
        hint1: 'Practical intelligence is "street smarts" — knowledge applied to real-world problems.',
        hint2: 'Positive correlations across different cognitive tests support a single underlying factor.',
        hint3: 'Reading others\' emotions reflects understanding of other people — interpersonal intelligence.',
        explanation: 'The mechanic shows practical intelligence (Sternberg). Cross-test correlations support Spearman\'s g. Reading clients\' emotions reflects Gardner\'s interpersonal intelligence. Each theory explains different aspects of intelligence well.'
      }
    },
    {
      id: 'langu3-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Exam Strategy: Intelligence Theory Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| Gardner's intelligences = proven science | Many psychologists question whether they are "intelligences" vs. talents | Gardner's theory is influential but controversial |
| Sternberg's theory has nothing to do with IQ tests | His "analytical" type IS what traditional IQ tests measure | He argues IQ tests only capture 1/3 of intelligence |
| EI is the same as "being nice" | EI involves perceiving, using, understanding, AND managing emotions | High EI people can also manipulate others |
| Spearman denied different abilities exist | He acknowledged specific abilities (s factors) | He just argued g underlies them all |

**Memory Trick:** **S**pearman = **S**ingle factor. **G**ardner = **G**roup of 8. **S**ternberg = **S**treet smarts + School smarts + Something new (3 types).

> **AP Tip:** If a free-response question says "Explain how TWO theories of intelligence would view a student who excels in art but fails math," you need to clearly state each theory's position and how it applies — don't just define the theories.
      `
    },
    {
      id: 'langu3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher finds that scores on verbal, mathematical, and spatial reasoning tests are all positively correlated. She uses factor analysis and finds one underlying factor explains most of the variance. This finding best supports:',
            options: [
              'Gardner\'s theory — the tests measure different intelligences',
              'Sternberg\'s theory — the three test types match his three intelligences',
              'Spearman\'s theory — one general intelligence factor underlies performance',
              'Goleman\'s theory — emotional intelligence drives all cognitive performance'
            ],
            correctAnswer: 2,
            explanation: 'Factor analysis revealing one underlying factor is EXACTLY Spearman\'s method and finding. He used this statistical technique and found that a general factor (g) explained the positive correlations between different cognitive tests. Gardner would predict the tests should NOT correlate if intelligences are independent.'
          },
          {
            question: 'A CEO has average IQ scores but is exceptionally skilled at motivating employees, resolving conflicts, and reading body language. Which combination of theories best explains her success?',
            options: [
              'Spearman\'s g and Thurstone\'s primary abilities',
              'Gardner\'s interpersonal intelligence and Goleman\'s emotional intelligence',
              'Sternberg\'s analytical intelligence and Spearman\'s g',
              'Gardner\'s linguistic intelligence and Sternberg\'s creative intelligence'
            ],
            correctAnswer: 1,
            explanation: 'The CEO\'s skills — motivating employees (interpersonal), resolving conflicts (managing emotions), reading body language (perceiving emotions) — align perfectly with Gardner\'s interpersonal intelligence and Goleman\'s emotional intelligence. Her average IQ shows that traditional g does not capture these abilities.'
          }
        ]
      }
    }
  ]
}
