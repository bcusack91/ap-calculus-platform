import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('Expanding ACT Prep...\n')
  const course = await prisma.course.findUnique({ where: { slug: 'act-prep' } })
  if (course === null) { console.log('Course not found'); return }

  const cats = await prisma.category.findMany({ where: { courseId: course.id } })
  const actMath = cats.find(c => c.slug === 'act-math')
  const actEnglish = cats.find(c => c.slug === 'act-english')
  const actScience = cats.find(c => c.slug === 'act-science')

  let count = 0

  if (actMath) {
    const mathTopics = [
      { title: 'ACT Algebra and Functions', slug: 'act-algebra-functions', order: 1,
        description: 'Master algebra and function concepts tested on the ACT Math section.',
        textContent: '# ACT: Algebra and Functions\n\n## Linear Equations\n\n### Slope-Intercept Form\n$$y = mx + b$$\n\n### Point-Slope Form\n$$y - y_1 = m(x - x_1)$$\n\n### Systems of Equations\nUse substitution or elimination.\n\n## Quadratics\n\n$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\n### Factoring\n$$x^2 + 5x + 6 = (x+2)(x+3)$$\n\n### Vertex\n$$\\left(-\\frac{b}{2a}, f\\left(-\\frac{b}{2a}\\right)\\right)$$\n\n## Functions\n\n### Domain and Range\n- Domain: all valid inputs\n- Range: all possible outputs\n\n### Composition\n$$(f \\circ g)(x) = f(g(x))$$\n\n## Exponents\n\n$$a^m \\cdot a^n = a^{m+n}$$\n$$\\frac{a^m}{a^n} = a^{m-n}$$\n$$(a^m)^n = a^{mn}$$\n\n> **ACT Tip**: The ACT Math section has 60 questions in 60 minutes. Speed matters.'
      },
      { title: 'ACT Geometry and Trigonometry', slug: 'act-geometry-trigonometry', order: 2,
        description: 'Review geometry and trigonometry for the ACT Math section.',
        textContent: '# ACT: Geometry and Trigonometry\n\n## Coordinate Geometry\n\n### Distance Formula\n$$d = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$\n\n### Midpoint\n$$M = \\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$$\n\n## Plane Geometry\n\n### Triangles\n- Angle sum: $180$\n- Area: $A = \\frac{1}{2}bh$\n- Pythagorean theorem: $a^2 + b^2 = c^2$\n\n### Circles\n- Area: $A = \\pi r^2$\n- Circumference: $C = 2\\pi r$\n\n### Polygons\n- Interior angles sum: $(n-2) \\cdot 180$\n\n## Trigonometry\n\n### SOH CAH TOA\n$$\\sin \\theta = \\frac{\\text{opp}}{\\text{hyp}}$$\n$$\\cos \\theta = \\frac{\\text{adj}}{\\text{hyp}}$$\n$$\\tan \\theta = \\frac{\\text{opp}}{\\text{adj}}$$\n\n### Law of Sines\n$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}$$\n\n### Law of Cosines\n$$c^2 = a^2 + b^2 - 2ab\\cos C$$\n\n### Special Right Triangles\n- 30-60-90: $x : x\\sqrt{3} : 2x$\n- 45-45-90: $x : x : x\\sqrt{2}$\n\n> **ACT Tip**: Geometry formulas are NOT provided. Memorize them.'
      },
      { title: 'ACT Statistics and Probability', slug: 'act-statistics-probability', order: 3,
        description: 'Review statistics and probability for the ACT.',
        textContent: '# ACT: Statistics and Probability\n\n## Mean, Median, Mode\n\n### Mean (Average)\n$$\\bar{x} = \\frac{\\text{sum of values}}{\\text{number of values}}$$\n\n### Median\nMiddle value in ordered data.\n\n### Mode\nMost frequent value.\n\n## Probability\n\n$$P(E) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$$\n\n### Independent Events\n$$P(A \\text{ and } B) = P(A) \\times P(B)$$\n\n### Complement\n$$P(\\text{not } A) = 1 - P(A)$$\n\n## Counting Principles\n\n### Permutations (order matters)\n$$P(n,r) = \\frac{n!}{(n-r)!}$$\n\n### Combinations (order does not matter)\n$$C(n,r) = \\frac{n!}{r!(n-r)!}$$\n\n> **ACT Tip**: Statistics problems are usually straightforward. Read carefully and look at the data provided.'
      }
    ]
    for (const t of mathTopics) {
      await prisma.topic.create({ data: { title: t.title, slug: t.slug, description: t.description, textContent: t.textContent, order: t.order, categoryId: actMath.id } })
      console.log('  + ' + t.slug); count++
    }
  }

  if (actEnglish) {
    await prisma.topic.create({ data: {
      title: 'ACT Rhetorical Skills', slug: 'act-rhetorical-skills', order: 1,
      description: 'Master strategy, organization, and style questions on the ACT English section.',
      textContent: '# ACT: Rhetorical Skills\n\n## ACT English Format\n\n75 questions, 45 minutes. Five passages with underlined portions.\n\nTwo main categories:\n1. Usage/Mechanics (grammar, punctuation, sentence structure)\n2. Rhetorical Skills (strategy, organization, style)\n\n## Strategy Questions\n\n### Adding/Deleting Sentences\n- Does the sentence support the main idea?\n- Does it provide relevant detail?\n- Would removing it improve focus?\n\n## Organization Questions\n\n### Sentence Placement\n- Look for logical flow and transitions\n- Pronouns should have clear antecedents\n\n### Paragraph Order\n- Introduction, body, conclusion\n- Chronological or logical progression\n\n## Style Questions\n\n### Tone\nMatch the passage overall tone.\n\n### Word Choice\n- Avoid redundancy\n- Avoid wordiness: Choose the most concise option\n- Match formality level\n\n### Transitions\n- Addition: Furthermore, moreover\n- Contrast: However, nevertheless\n- Cause/Effect: Therefore, consequently\n- Example: For instance, specifically\n\n> **ACT Tip**: When in doubt, the shortest grammatically correct answer is often right.',
      categoryId: actEnglish.id
    }})
    console.log('  + act-rhetorical-skills'); count++
  }

  if (actScience) {
    await prisma.topic.create({ data: {
      title: 'ACT Research Summaries and Conflicting Viewpoints', slug: 'act-research-summaries', order: 1,
      description: 'Interpret experiments and evaluate conflicting scientific viewpoints.',
      textContent: '# ACT: Research Summaries and Conflicting Viewpoints\n\n## ACT Science Format\n\n40 questions, 35 minutes. Seven passages:\n- 3 Data Representation (graphs/tables)\n- 3 Research Summaries (experiments)\n- 1 Conflicting Viewpoints (opposing theories)\n\n## Research Summaries\n\n### What to Look For\n1. Purpose: What question is the experiment answering?\n2. Variables: Independent (changed), dependent (measured), controlled (constant)\n3. Procedure: What steps were followed?\n4. Results: What patterns appear in the data?\n\n### Common Question Types\n- If the experiment were repeated with a change, what would happen?\n- What is the relationship between X and Y?\n- Which variable was controlled?\n\n## Conflicting Viewpoints\n\n### Strategy\n1. Read the introduction (shared facts)\n2. Read each viewpoint and note its KEY CLAIM\n3. Identify where they AGREE and DISAGREE\n4. Answer questions about each viewpoint separately first\n\n## Data Interpretation Tips\n\n### Reading Graphs\n- Always check axis labels and units\n- Look for trends: increasing, decreasing, constant\n\n### Reading Tables\n- Find the pattern as one variable changes\n- Compare rows/columns systematically\n\n> **ACT Tip**: The ACT Science section tests reading and interpretation more than science knowledge.',
      categoryId: actScience.id
    }})
    console.log('  + act-research-summaries'); count++
  }

  // New categories
  const readingCat = await prisma.category.create({ data: { name: 'ACT Reading', slug: 'act-reading', order: 3, courseId: course.id } })
  await prisma.topic.create({ data: {
    title: 'ACT Reading Strategies', slug: 'act-reading-strategies', order: 0,
    description: 'Master passage types and strategies for the ACT Reading section.',
    textContent: '# ACT: Reading Strategies\n\n## ACT Reading Format\n\n40 questions, 35 minutes. Four passages:\n1. Literary Narrative / Prose Fiction\n2. Social Science\n3. Humanities\n4. Natural Science\n\n## General Strategy\n\n### Time Management\nAbout 8-9 minutes per passage. Do your strongest passage type first.\n\n### Active Reading\n- Underline main ideas and key details\n- Note the author tone and purpose\n- Mark transitions that signal key points\n\n## Question Types\n\n### Main Idea\nLook at the first and last paragraphs.\n\n### Detail / Specific Information\nThe answer is explicitly stated in the text. Go back and find it.\n\n### Inference\nMust be supported by evidence in the text.\n\n### Vocabulary in Context\nRe-read the sentence with each answer choice. The most common meaning is often NOT the answer.\n\n### Author Tone / Attitude\nLook for descriptive words and overall word choice.\n\n## Passage-Specific Tips\n\n### Prose Fiction\nFocus on characters, relationships, emotions.\n\n### Social Science / Natural Science\nFocus on the main argument, evidence, and conclusions.\n\n### Humanities\nFocus on the author perspective.\n\n> **ACT Tip**: Always answer based on what the passage SAYS, not what you already know.',
    categoryId: readingCat.id
  }})
  console.log('  + act-reading-strategies'); count++

  const writingCat = await prisma.category.create({ data: { name: 'ACT Writing (Optional Essay)', slug: 'act-writing', order: 4, courseId: course.id } })
  await prisma.topic.create({ data: {
    title: 'ACT Essay Writing Strategy', slug: 'act-essay-writing-strategy', order: 0,
    description: 'Plan and write an effective ACT optional essay.',
    textContent: '# ACT: Essay Writing Strategy\n\n## ACT Writing Format\n\n- 40 minutes, one prompt\n- Given an issue and three perspectives\n- Scored on: Ideas and Analysis, Development and Support, Organization, Language Use\n\n## Essay Structure\n\n### Introduction (1 paragraph)\n- Hook or context statement\n- Briefly acknowledge the three perspectives\n- State YOUR thesis clearly\n\n### Body Paragraphs (2-3 paragraphs)\nEach paragraph should:\n1. State a clear topic sentence\n2. Analyze one or more perspectives\n3. Provide specific examples and reasoning\n4. Explain how your analysis supports your thesis\n\n### Conclusion (1 paragraph)\n- Restate your position\n- Summarize key points\n- End with a broader insight\n\n## High-Scoring Tips\n\n1. Address all three perspectives\n2. Use specific examples from history, current events, or personal experience\n3. Analyze, do not just describe\n4. Write clearly\n5. Plan for 5 minutes before writing\n\n> **ACT Tip**: The essay is optional but some colleges require it. Check your target schools requirements.',
    categoryId: writingCat.id
  }})
  console.log('  + act-essay-writing-strategy'); count++

  const strategyCat = await prisma.category.create({ data: { name: 'ACT Test Strategy', slug: 'act-test-strategy', order: 5, courseId: course.id } })
  await prisma.topic.create({ data: {
    title: 'ACT Timing and Test-Taking Strategies', slug: 'act-timing-test-strategies', order: 0,
    description: 'Master pacing, guessing strategies, and overall ACT test-taking approaches.',
    textContent: '# ACT: Timing and Test-Taking Strategies\n\n## ACT Overview\n\n| Section | Questions | Time | Per Question |\n|---------|-----------|------|-------------|\n| English | 75 | 45 min | 36 sec |\n| Math | 60 | 60 min | 60 sec |\n| Reading | 40 | 35 min | 53 sec |\n| Science | 40 | 35 min | 53 sec |\n| Writing | 1 essay | 40 min | - |\n\n## General Strategies\n\n### 1. Answer Every Question\nThere is NO penalty for guessing on the ACT.\n\n### 2. Process of Elimination\nCross out wrong answers to improve your odds.\n\n### 3. Skip and Return\nMark difficult questions and come back.\n\n### 4. Use Your Calculator Wisely (Math)\nAllowed for the ENTIRE math section.\n\n## Section-Specific Pacing\n\n### English (75 in 45 min)\nMove quickly. Most questions test grammar rules you can check fast.\n\n### Math (60 in 60 min)\nQuestions go from easy to hard. Do NOT get stuck on hard questions.\n\n### Reading (40 in 35 min)\nDo your strongest passage type first.\n\n### Science (40 in 35 min)\nMost questions can be answered from the data alone. Save Conflicting Viewpoints for last.\n\n## Score Goals\n\n| Composite Target | Strategy |\n|-----------------|----------|\n| 20-24 | Answer all, focus on easy/medium |\n| 25-29 | Get all easy/medium right, attempt most hard |\n| 30+ | Must get most hard questions right |\n\n> **ACT Tip**: The ACT rewards speed and accuracy. Practice under timed conditions.',
    categoryId: strategyCat.id
  }})
  console.log('  + act-timing-test-strategies'); count++

  console.log('\nACT Prep expanded with ' + count + ' new topics.')
}

main().catch(console.error).finally(() => prisma.$disconnect())
