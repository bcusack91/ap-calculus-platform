import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Expanding SAT Reading topics with thorough content...\n')

  // ============================================================
  // TOPIC 1: Reading Comprehension
  // ============================================================
  const readComp = await prisma.topic.findUnique({
    where: { slug: 'sat-reading-comprehension' }
  })

  if (readComp) {
    await prisma.topic.update({
      where: { id: readComp.id },
      data: {
        textContent: `# Reading Comprehension on the SAT

## Overview of SAT Reading

The SAT Reading section tests your ability to understand, analyze, and interpret passages. You will encounter:

- **5 passages** (or 4 passages + 1 paired passage set)
- **52 questions** total
- **65 minutes** to complete
- Passages from: Literature, History/Social Studies, and Science

---

## Passage Types

### 1. U.S. and World Literature
- Excerpts from novels or short stories
- Focus on character development, tone, mood, and narrative technique
- Pay attention to how characters relate to each other

### 2. History / Social Studies
- Founding documents (Constitution, Declaration of Independence)
- Great Global Conversation (speeches, essays on freedom, justice)
- One passage is always a paired passage set

### 3. Science
- Two passages on scientific topics
- Focus on experiments, data, hypotheses, and conclusions
- May include graphs, tables, or charts

---

## Active Reading Strategies

### Before Reading
1. **Glance at the questions first** — note what they ask (line references, vocabulary, main idea)
2. **Read the blurb** — the italicized introduction gives context

### While Reading
1. **Summarize each paragraph** in 5-7 words in the margin
2. **Circle key transitions** ("however," "moreover," "in contrast")
3. **Underline claims and evidence** — the passage's argument matters
4. **Note the author's tone** — is it critical, supportive, neutral, or ironic?

### After Reading
1. **Formulate the main idea** in one sentence before looking at questions
2. **Answer main idea questions first** (they're usually at the beginning)
3. **Go back to the passage** for detail-based questions

---

## Question Types

### 1. Main Idea / Central Theme
"What is the primary purpose of the passage?"
- Look at the first and last paragraphs
- Consider how the passage develops as a whole

### 2. Detail / Explicit Information
"According to the passage, which of the following is true?"
- The answer is stated directly in the passage
- Go back and find the exact line

### 3. Inference
"Based on the passage, it can be reasonably inferred that..."
- The answer is NOT directly stated but is strongly implied
- Must be supported by textual evidence

### 4. Vocabulary in Context
"As used in line X, 'word' most nearly means..."
- Substitute each answer choice into the sentence
- Choose the one that preserves the meaning

### 5. Function / Purpose
"The author includes the example in paragraph 3 in order to..."
- Ask: Why did the author put this here? What does it accomplish?

### 6. Evidence-Based Reasoning (Paired Questions)
- Question 1: Makes a claim about the passage
- Question 2: Asks which lines best support your answer to Question 1
- Strategy: Find the evidence first, then answer the claim

---

## Reading Traps to Avoid

1. **Right answer, wrong question** — the fact may be true but not answer the specific question
2. **Too extreme** — SAT prefers moderate language ("suggests" over "proves")
3. **Too narrow or too broad** — the main idea should cover the whole passage, not just one detail
4. **Outside knowledge** — answer based on the passage only, not what you already know
5. **Distortions** — the passage says something similar but changes a key word

---

## Time Management

- **Spend about 13 minutes per passage** (including questions)
- **Don't read too slowly** — you need to read for the big picture
- **Skip and return** — if a question is taking too long, mark it and come back
- **Do your strongest passage type first** to build confidence
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: readComp.id,
          order: 10,
          difficulty: 'EASY',
          question: 'A passage states: "The scientist\'s discovery, though initially met with skepticism, gradually gained acceptance as further experiments confirmed the results." What is the primary purpose of this sentence?',
          solution: `**Analyze what the sentence does:**

The sentence describes a process — a discovery went from skepticism to acceptance as evidence accumulated.

**Primary purpose:** To show how the scientific community's response to the discovery evolved over time.

**Why other answers might be wrong:**
- It does NOT criticize the scientific community
- It does NOT describe the details of the experiments
- It does NOT argue that skepticism is harmful

**Strategy:** For "purpose" questions, ask yourself: "Why did the author include this information?"

**Answer:** To describe how the reception of the discovery changed as supporting evidence emerged.`
        },
        {
          topicId: readComp.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'In a passage, the author describes a city in great detail, noting its "gleaming towers" and "pristine avenues" in the first paragraph, then mentions "crumbling foundations" and "hidden alleyways" in the third paragraph. What technique is the author using?',
          solution: `**This is a contrast/juxtaposition:**

The author first presents the city positively ("gleaming," "pristine") and then reveals its hidden problems ("crumbling," "hidden").

**Technique:** The author is creating a **contrast** between appearance and reality (or surface vs. depth).

**Purpose of this technique:**
- To suggest the city is not as perfect as it first appears
- To develop a more nuanced, complex portrayal
- To challenge the reader's initial impression

**Answer:** The author uses contrast/juxtaposition to reveal that the city's outward appearance conceals underlying problems.

**SAT Tip:** When the tone or imagery shifts within a passage, the question is almost always about why the author made that shift.`
        },
        {
          topicId: readComp.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'A history passage discusses how Thomas Jefferson advocated for individual liberty while also owning enslaved people. A question asks: "Which choice best describes the overall structure of the passage?" What should you look for?',
          solution: `**For structure questions, look at what each paragraph DOES:**

- Does it present an argument then refute it?
- Does it give a chronological narrative?
- Does it contrast two ideas?
- Does it present a thesis and supporting evidence?

**In this case:** The passage about Jefferson presents a **contradiction** (advocating liberty while owning slaves). The structure likely:

1. Introduces Jefferson's ideals
2. Presents the conflicting reality
3. Analyzes or contextualizes the contradiction

**Answer format:** "The passage presents an apparent contradiction and then explores its implications."

**SAT Tip:** Common passage structures:
- Problem → Solution
- Claim → Evidence → Counterclaim
- Chronological narrative
- Compare and contrast
- Cause and effect`
        },
        {
          topicId: readComp.id,
          order: 13,
          difficulty: 'HARD',
          question: 'A science passage discusses two competing theories about dinosaur extinction. Theory A attributes it to an asteroid impact; Theory B to volcanic activity. The author concludes that "recent geological evidence suggests both mechanisms may have contributed." How does the conclusion function within the passage?',
          solution: `**Analyze the conclusion's role in the argument:**

The passage sets up a dichotomy (Theory A vs. Theory B), then the conclusion offers a **synthesis** — both theories may be partially correct.

**The conclusion functions to:**
- Resolve the apparent conflict between the two theories
- Suggest a more nuanced view than either theory alone provides
- Use new evidence to bridge competing perspectives

**Why each wrong answer might be tempting:**
- "Dismiss Theory B" — No, the conclusion includes both theories
- "Prove Theory A is correct" — No, it validates both
- "Introduce a completely new theory" — No, it combines existing ones

**Answer:** The conclusion synthesizes the two competing theories by suggesting both contributed, providing a more comprehensive explanation supported by recent evidence.

**SAT Strategy:** Conclusions often do one of these: summarize, synthesize, qualify, or provide an implication.`
        },
        {
          topicId: readComp.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'In a paired passage set, Passage 1 argues that social media improves democratic engagement, while Passage 2 argues it creates echo chambers. A question asks: "How would the author of Passage 2 most likely respond to the claim in lines 12-15 of Passage 1?" How should you approach this?',
          solution: `**Strategy for paired passage relationship questions:**

**Step 1:** Read lines 12-15 of Passage 1 carefully. Identify the specific claim being made (e.g., "social media allows citizens to engage directly with elected officials").

**Step 2:** Understand Passage 2's main argument and perspective. The author argues social media creates echo chambers where people only hear views they already agree with.

**Step 3:** Think about how the Passage 2 author would view the specific claim:
- Would they agree, disagree, or partially agree?
- What evidence from Passage 2 supports this response?

**Step 4:** The Passage 2 author would likely argue that while direct engagement exists, it occurs within ideological bubbles, limiting the quality of democratic discourse.

**Answer:** The Passage 2 author would likely acknowledge the possibility of engagement but argue that such engagement is diminished by the tendency of social media platforms to reinforce existing beliefs.

**Key SAT Principle:** For "how would Author X respond" questions:
1. Find the specific claim
2. Understand Author X's overall position
3. Apply Author X's logic to the specific claim
4. Choose the answer that reflects Author X's perspective, not yours`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: readComp.id,
          front: 'What are the three types of SAT Reading passages?',
          back: '1. **U.S. and World Literature** (fiction), 2. **History/Social Studies** (founding documents, great global conversation), 3. **Science** (experiments, data). You always get 5 passages total (or 4 + 1 paired set).',
          hint: 'Literature, History, Science'
        },
        {
          topicId: readComp.id,
          front: 'What is the most important active reading strategy?',
          back: 'Summarize each paragraph in 5-7 words in the margin. This forces you to identify key ideas and keeps you engaged. Also: underline claims, circle transitions, and note the author\'s tone.',
          hint: 'Write brief summaries as you go'
        },
        {
          topicId: readComp.id,
          front: 'How do you handle vocabulary-in-context questions?',
          back: 'Substitute each answer choice into the original sentence. The correct answer preserves the meaning of the sentence. Often the "obvious" definition is wrong — the SAT tests secondary meanings.',
          hint: 'Plug each choice into the sentence'
        },
        {
          topicId: readComp.id,
          front: 'What is the key difference between a "detail" question and an "inference" question?',
          back: '**Detail:** The answer is directly stated in the passage. **Inference:** The answer is NOT directly stated but is strongly implied. Both must be supported by the text.',
          hint: 'One is explicit, the other requires reading between the lines'
        },
        {
          topicId: readComp.id,
          front: 'What is the best approach for paired evidence questions?',
          back: 'Read Question 2 first (which asks for evidence). Find the evidence in the passage, then use that evidence to answer Question 1 (the claim). This is more efficient than answering them in order.',
          hint: 'Do the evidence question first'
        },
        {
          topicId: readComp.id,
          front: 'How long should you spend per passage on the SAT Reading section?',
          back: 'About **13 minutes** per passage (65 minutes ÷ 5 passages). This includes reading the passage and answering all questions. Skip difficult questions and return to them.',
          hint: '65 minutes divided by 5 passages'
        },
        {
          topicId: readComp.id,
          front: 'What are common wrong answer traps on SAT Reading?',
          back: '1. **Too extreme** (proves vs. suggests), 2. **Too narrow/broad**, 3. **Right fact, wrong question**, 4. **Distortion** (changes key words), 5. **Outside knowledge** (not in the passage).',
          hint: 'Extreme language, scope issues, distortions'
        }
      ]
    })

    console.log('✓ sat-reading-comprehension expanded')
  }

  // ============================================================
  // TOPIC 2: Finding Textual Evidence
  // ============================================================
  const textEvidence = await prisma.topic.findUnique({
    where: { slug: 'sat-finding-textual-evidence' }
  })

  if (textEvidence) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: textEvidence.id,
          order: 10,
          difficulty: 'EASY',
          question: 'A passage states in line 15: "The researcher was initially doubtful about the findings." If asked "Which choice provides the best evidence for the researcher\'s initial reaction?", what should you look for?',
          solution: `**For textual evidence questions, you need the MOST DIRECT line(s).**

Line 15 explicitly says "initially doubtful" — this directly describes the researcher's initial reaction.

**The correct evidence is:** The line that most clearly and directly supports the answer to the question. Here, line 15 itself would be the evidence.

**Common mistakes:**
- Choosing a line that is related but doesn't directly support the claim
- Choosing a line about the researcher that discusses something else (like methodology)

**Strategy:** The best evidence is the most specific and direct — if it was removed, the claim would have no support.

**Answer:** Line 15, because it explicitly states the researcher's initial doubt.`
        },
        {
          topicId: textEvidence.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Question 1: "The author suggests that early industrialization had mixed effects on workers." Question 2: "Which choice provides the best evidence for the answer to Question 1?" How do you approach this paired question set?',
          solution: `**The Paired Question Strategy:**

**Step 1:** Read Question 2's answer choices first. Each gives specific line references.

**Step 2:** Go to each set of lines and read them. Ask: "Does this line talk about mixed effects of industrialization on workers?"

**Step 3:** The correct evidence line will BOTH:
- Support the claim in Question 1
- Be the most direct and specific evidence

**Step 4:** If a line says "While factories provided employment, the conditions were often hazardous," that shows MIXED effects (positive: employment; negative: hazardous conditions).

**Step 5:** Now answer Question 1 using the evidence you found.

**Rule of thumb:** If the evidence doesn't clearly support the claim, neither answer is correct — try a different pairing.

**Answer:** Find the line that explicitly shows BOTH positive and negative effects, confirming the "mixed" nature described in Question 1.`
        },
        {
          topicId: textEvidence.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'You\'re asked to find evidence that an author is "skeptical of technology\'s benefits." Which of these lines would be the BEST evidence?\n(A) "Technology has transformed every aspect of modern life."\n(B) "Proponents claim that devices save us time."\n(C) "However, studies show that screen time reduces attention spans."\n(D) "Many consumers eagerly purchase the latest gadgets."',
          solution: `**Evaluate each option:**

**(A)** "Technology has transformed every aspect of modern life."
→ Neutral statement. Describes impact but doesn't show skepticism. ❌

**(B)** "Proponents claim that devices save us time."
→ Attributes the benefit to "proponents" (others), which slightly distances the author, but doesn't directly express skepticism. ❌

**(C)** "However, studies show that screen time reduces attention spans."
→ Uses "However" (a contrasting transition) to present NEGATIVE evidence about technology. This shows the author countering claims of technology's benefits. ✓ ✅

**(D)** "Many consumers eagerly purchase the latest gadgets."
→ Describes consumer behavior, not the author's opinion. ❌

**Answer:** **(C)** — The word "However" signals a counterargument, and the content directly challenges technology's benefits with evidence.

**SAT Key:** Look for contrasting language and negative evidence to support "skeptical" claims.`
        },
        {
          topicId: textEvidence.id,
          order: 13,
          difficulty: 'HARD',
          question: 'A question asks: "Based on the passage, the narrator views her childhood home with..." The answer choices are: nostalgia, resentment, indifference, amusement. The evidence question asks for supporting lines. How do you work through this?',
          solution: `**Step 1:** Identify the key question — the narrator's ATTITUDE toward her childhood home.

**Step 2:** Scan the evidence options (answer choices for the second question). Read each set of lines.

**Step 3:** Match tone words to evidence:

- **Nostalgia:** Look for warm memories, longing, "I remember when..." language
- **Resentment:** Look for anger, bitterness, negative memories
- **Indifference:** Look for lack of emotion, dismissive tone
- **Amusement:** Look for humor, lightness, finding things funny

**Step 4:** If the evidence lines say something like "Walking through the garden, she traced the familiar grooves of the oak tree, wishing she could return to those sunlit afternoons," this shows **nostalgia** (warm memories + longing).

**Step 5:** Select the emotion that matches the evidence, and the lines that support it.

**Critical insight:** The EVIDENCE determines the answer. Don't pick the emotion first — let the lines tell you.

**Answer:** Find the lines that most clearly convey an emotion, then match to the correct attitude.`
        },
        {
          topicId: textEvidence.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'In a science passage, a question claims: "The data suggests that the new treatment is more effective than the control." Four evidence options cite different parts of the passage. How do you evaluate scientific evidence options?',
          solution: `**Scientific evidence evaluation checklist:**

**Look for evidence that includes:**
1. ✅ Specific data, numbers, or percentages
2. ✅ Direct comparisons between treatment and control
3. ✅ Statistical significance or clear outcomes
4. ✅ Results from the actual experiment discussed

**Reject evidence that:**
1. ❌ Describes methodology but not results
2. ❌ Mentions the treatment but doesn't compare it to the control
3. ❌ Discusses background information or context
4. ❌ Presents results from a different experiment

**Example evaluation:**
- Line "Patients in the treatment group showed a 40% improvement compared to 12% in the control group" → **STRONG evidence** ✅
- Line "The treatment was administered in three doses over six weeks" → Methodology, not results ❌
- Line "Previous studies had suggested similar compounds might be effective" → Background, not this study ❌

**Answer:** Choose the lines that provide the most direct DATA comparison between the treatment and control groups. Numbers and percentages are your best friends.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: textEvidence.id,
          front: 'What is a "paired evidence" question on the SAT?',
          back: 'Two consecutive questions where Q1 asks about a claim/interpretation and Q2 asks "Which choice provides the best evidence for Q1?" The correct answers MUST work together — each supports the other.',
          hint: 'Two questions that are linked together'
        },
        {
          topicId: textEvidence.id,
          front: 'Should you answer Question 1 or Question 2 first in a paired set?',
          back: 'Start with **Question 2** (the evidence question). Read all the evidence options in the passage. Find which line best supports a clear claim, then answer Question 1 based on that evidence.',
          hint: 'Start with the evidence, then make the claim'
        },
        {
          topicId: textEvidence.id,
          front: 'What makes textual evidence "strong" vs. "weak"?',
          back: '**Strong:** Directly states or clearly implies the claim, is specific, and comes from the relevant part of the passage. **Weak:** Is only tangentially related, is vague, or discusses a different aspect of the topic.',
          hint: 'Direct and specific vs. vague and tangential'
        },
        {
          topicId: textEvidence.id,
          front: 'What should you do if none of the evidence choices seem to match your answer?',
          back: 'Reconsider your answer to Question 1! The evidence MUST support the claim. If you can\'t find evidence, your interpretation may be wrong. Try pairing different combinations.',
          hint: 'Your claim might be wrong if no evidence supports it'
        },
        {
          topicId: textEvidence.id,
          front: 'How do you handle evidence questions in science passages?',
          back: 'Prioritize lines with **specific data, numbers, or results** over lines discussing methodology, background, or general context. Direct comparisons and statistics are the strongest evidence.',
          hint: 'Data and numbers are strongest'
        },
        {
          topicId: textEvidence.id,
          front: 'What transition words signal evidence that SUPPORTS a claim?',
          back: '"Furthermore," "Moreover," "In addition," "Indeed," "For example," "Specifically." These words introduce supporting details or examples.',
          hint: 'Words that add to or confirm a point'
        },
        {
          topicId: textEvidence.id,
          front: 'What transition words signal evidence that CONTRADICTS a claim?',
          back: '"However," "Nevertheless," "In contrast," "On the other hand," "Although," "Despite." These words introduce counterarguments or opposing evidence.',
          hint: 'Words that signal a contrast or opposition'
        }
      ]
    })

    console.log('✓ sat-finding-textual-evidence expanded')
  }

  // ============================================================
  // TOPIC 3: Command of Evidence
  // ============================================================
  const cmdEvidence = await prisma.topic.findUnique({
    where: { slug: 'sat-command-evidence' }
  })

  if (cmdEvidence) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: cmdEvidence.id,
          order: 10,
          difficulty: 'EASY',
          question: 'An author writes: "Jazz music, born in the African American communities of New Orleans, has become one of America\'s greatest cultural exports." What is the author\'s claim, and what type of evidence would strengthen it?',
          solution: `**Claim:** Jazz has become one of America's greatest cultural exports.

**Evidence that would strengthen this:**
- Statistics on jazz's popularity in other countries
- Examples of famous jazz musicians performing internationally
- Data on jazz festival attendance worldwide
- Expert quotes about jazz's global influence

**Evidence that would NOT help:**
- History of jazz in New Orleans (interesting but doesn't prove "cultural export")
- The author's personal love of jazz (opinion, not evidence)
- A list of jazz subgenres (describes jazz but doesn't address its export status)

**Answer:** Quantitative data (e.g., "Jazz festivals now operate in over 40 countries") or comparative data (e.g., "Jazz is the most streamed American music genre internationally") would best strengthen the claim.`
        },
        {
          topicId: cmdEvidence.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'A passage includes a graph showing declining bee populations alongside increased pesticide use. How does this graph serve as evidence within the passage?',
          solution: `**The graph provides VISUAL EVIDENCE of a correlation:**

The parallel trends (bees declining while pesticide use increases) suggest a relationship between the two variables.

**How to describe this in SAT terms:**
- The graph **supports** the passage's argument that pesticides harm bee populations
- It provides **quantitative evidence** (specific data points over time)
- It shows a **correlation** (not necessarily causation)

**Important distinction for the SAT:**
- The graph shows correlation, NOT causation
- Other factors could contribute to bee decline
- The graph SUPPORTS the argument but doesn't PROVE it

**Answer:** The graph provides quantitative evidence of a correlation between increased pesticide use and declining bee populations, supporting the passage's claim about the environmental impact of pesticides.

**SAT Tip:** When passages include graphs/charts, questions often ask how the data relates to the author's argument.`
        },
        {
          topicId: cmdEvidence.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'An author argues that reading fiction improves empathy. Which of the following would be the most effective evidence?\n(A) A personal anecdote about feeling moved by a novel\n(B) A study showing fiction readers score higher on empathy tests\n(C) A quote from a famous author about writing\n(D) Sales figures for fiction books',
          solution: `**Evaluate each option:**

**(A)** Personal anecdote → Subjective, only one person, not generalizable ❌

**(B)** A study showing fiction readers score higher on empathy tests → **Best evidence** ✅
- Empirical data from research
- Directly measures empathy
- Compares fiction readers to non-readers
- Most objective and generalizable

**(C)** Quote from a famous author → Expert opinion but about writing, not empathy ❌

**(D)** Sales figures → Shows fiction is popular, but says nothing about empathy ❌

**Answer:** **(B)** — A controlled study with measurable results provides the strongest evidence for a cause-and-effect claim.

**Hierarchy of evidence (strongest to weakest):**
1. Controlled studies / empirical data
2. Expert testimony from relevant field
3. Historical examples / case studies
4. Anecdotes / personal experiences`
        },
        {
          topicId: cmdEvidence.id,
          order: 13,
          difficulty: 'HARD',
          question: 'A passage presents data in a table showing test scores for students with different amounts of sleep. How would you use this data to answer: "Do the data support the author\'s claim that sleep improves academic performance?"',
          solution: `**Step 1:** Identify the author's claim:
"Sleep improves academic performance."

**Step 2:** Look at the table data:
If the table shows that students with MORE sleep have HIGHER test scores, the data SUPPORTS the claim.

**Step 3:** Check for nuance:
- Is the relationship consistent across all groups?
- Are there any exceptions?
- Is the difference significant?

**Step 4:** Formulate your answer:

**If data supports:** "Yes, the data show a positive correlation between hours of sleep and test scores. Students sleeping 8+ hours averaged 15 points higher than those sleeping fewer than 6 hours."

**If data partially supports:** "The data partially support the claim. While students with 7-8 hours of sleep performed best, those with more than 9 hours showed slightly lower scores, suggesting an optimal range."

**If data contradicts:** "The data do not support the claim. Test scores showed no consistent pattern relative to sleep duration."

**SAT Tip:** Always look at ALL the data points, not just the ones that seem to confirm the claim. The SAT may include data that partially or fully contradicts the argument.`
        },
        {
          topicId: cmdEvidence.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Two passages disagree about urban development. Passage 1 cites economic growth data. Passage 2 cites environmental impact studies. How do you evaluate competing evidence across paired passages?',
          solution: `**Framework for evaluating competing evidence:**

**Step 1: Identify each passage's central claim:**
- Passage 1: Urban development is beneficial (evidence: economic growth)
- Passage 2: Urban development is harmful (evidence: environmental damage)

**Step 2: Evaluate the QUALITY of evidence:**
- Is it from reputable sources?
- Is it current?
- Does it directly address the claim?
- Is it quantitative or qualitative?

**Step 3: Recognize they may BOTH be valid:**
On the SAT, paired passages often present legitimate but different perspectives. They may measure different things (economic vs. environmental outcomes).

**Step 4: Note what each passage ignores:**
- Passage 1 may not address environmental concerns
- Passage 2 may not address economic benefits
- Their disagreement may stem from different VALUES, not different facts

**Step 5: Answer relationship questions:**
- "How would Author 2 respond to Author 1's evidence?" → Author 2 would likely argue that economic data ignores environmental costs
- "On what point do the authors agree?" → Both acknowledge urban development has significant impacts

**Key SAT insight:** The question often isn't "who is right?" but "how do these perspectives relate to each other?"

**Answer:** Evaluate each body of evidence on its own terms, then consider how the two perspectives complement or conflict with each other.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: cmdEvidence.id,
          front: 'What does "Command of Evidence" mean on the SAT?',
          back: 'Your ability to: (1) identify claims and evidence in passages, (2) evaluate the strength of evidence, (3) use data from graphs/tables to support arguments, (4) cite textual evidence for interpretations.',
          hint: 'Using evidence to support claims'
        },
        {
          topicId: cmdEvidence.id,
          front: 'What is the hierarchy of evidence strength?',
          back: '1. **Empirical studies** (strongest), 2. **Expert testimony** from relevant field, 3. **Historical examples/case studies**, 4. **Anecdotes/personal stories** (weakest). The SAT prefers answers with stronger evidence.',
          hint: 'Controlled studies at the top, anecdotes at the bottom'
        },
        {
          topicId: cmdEvidence.id,
          front: 'How should you read graphs and tables in SAT passages?',
          back: 'Read the title, axis labels, and units FIRST. Then check if the data supports or contradicts the passage\'s claims. Look for trends, outliers, and the specific values the questions reference.',
          hint: 'Title, labels, units, then the data itself'
        },
        {
          topicId: cmdEvidence.id,
          front: 'What is the difference between correlation and causation?',
          back: '**Correlation:** Two things change together. **Causation:** One thing directly causes the other. The SAT often tests whether you can distinguish these — data showing correlation does NOT prove causation.',
          hint: 'Just because two things are related does not mean one causes the other'
        },
        {
          topicId: cmdEvidence.id,
          front: 'What makes evidence "relevant" to a claim?',
          back: 'Evidence is relevant if it DIRECTLY addresses the specific claim. Evidence about a related topic that doesn\'t address the exact claim is NOT relevant, even if it\'s interesting or true.',
          hint: 'Must directly address the claim being made'
        },
        {
          topicId: cmdEvidence.id,
          front: 'How do you determine if a graph supports or undermines an argument?',
          back: 'Check if the DATA TREND matches the author\'s claim. If the author says "X increases Y" but the graph shows Y staying flat or decreasing as X increases, the graph UNDERMINES the argument.',
          hint: 'Compare the trend direction to the claim'
        },
        {
          topicId: cmdEvidence.id,
          front: 'What should you do when two passages present different evidence?',
          back: 'Identify each passage\'s specific claim, note what evidence supports each, look for what each passage ignores, and determine whether they truly contradict or simply address different aspects of the issue.',
          hint: 'They may address different aspects rather than truly contradicting'
        }
      ]
    })

    console.log('✓ sat-command-evidence expanded')
  }

  // ============================================================
  // TOPIC 4: Central Ideas and Details
  // ============================================================
  const centralIdeas = await prisma.topic.findUnique({
    where: { slug: 'sat-central-ideas-details' }
  })

  if (centralIdeas) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: centralIdeas.id,
          order: 10,
          difficulty: 'EASY',
          question: 'A passage begins with an anecdote about a farmer losing crops to drought, then discusses climate change impacts on agriculture globally. What is the central idea?',
          solution: `**Finding the central idea:**

The anecdote (farmer losing crops) is a specific example used to introduce a broader topic.

The passage then zooms out to discuss climate change impacts on agriculture GLOBALLY.

**Central idea:** Climate change is significantly affecting agriculture worldwide.

**Why the anecdote is NOT the central idea:**
- The farmer's story is a supporting detail (specific example)
- It serves to illustrate and introduce the broader argument
- The passage expands beyond this one case

**Strategy:** Ask yourself: "If I had to summarize this passage in ONE sentence, what would it be?"

**Common trap:** Choosing an answer that is too specific (about the one farmer) or too broad (about climate change in general, not specifically agriculture).

**Answer:** The central idea is that climate change poses a significant threat to global agriculture.`
        },
        {
          topicId: centralIdeas.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'How do you distinguish a central idea from a supporting detail?',
          solution: `**The Two-Question Test:**

1. **Can the passage exist without this point?**
   - Yes → It's a supporting detail
   - No → It's likely the central idea

2. **Does this point support something bigger?**
   - Yes → It's a supporting detail
   - No (other points support IT) → It's the central idea

**Examples from a passage about the benefits of exercise:**
- "Exercise releases endorphins" → Supporting detail (explains HOW)
- "Regular exercise significantly improves mental health" → Central idea (the main claim)
- "A 2019 study found..." → Supporting detail (evidence)
- "30 minutes of daily walking..." → Supporting detail (specific recommendation)

**Hierarchy:**
Central Idea → Major Supporting Points → Details/Evidence/Examples

**SAT Tip:** The central idea is usually stated or implied in the first or last paragraph. Supporting details appear in body paragraphs.`
        },
        {
          topicId: centralIdeas.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'A question asks: "Which choice best states the central idea of the passage?" Answer choices are:\n(A) Scientists should receive more funding.\n(B) The scientific method has evolved significantly over the past century.\n(C) Modern technology has improved laboratory techniques.\n(D) Peer review is essential to good science.\nThe passage discusses the history of the scientific method. Which is correct?',
          solution: `**Evaluate each choice against the passage topic (history of the scientific method):**

**(A)** "Scientists should receive more funding" → This is an opinion/recommendation, not a historical discussion. Doesn't match. ❌

**(B)** "The scientific method has evolved significantly over the past century" → This directly addresses the HISTORY and DEVELOPMENT of the scientific method. Matches the passage topic! ✅

**(C)** "Modern technology has improved laboratory techniques" → Too narrow — focuses only on technology/labs, not the broader scientific method. ❌

**(D)** "Peer review is essential to good science" → Too narrow — peer review is just one aspect of the scientific method. ❌

**Answer:** **(B)** — It captures the full scope of the passage (evolution of the scientific method) without being too narrow or off-topic.

**SAT Tip for central idea questions:**
- Eliminate answers that are too narrow (one detail)
- Eliminate answers that are too broad (beyond the passage's scope)
- Eliminate answers that introduce ideas not in the passage
- The correct answer encompasses the WHOLE passage`
        },
        {
          topicId: centralIdeas.id,
          order: 13,
          difficulty: 'HARD',
          question: 'A passage discusses how ancient civilizations developed writing systems. Paragraph 1 covers Sumerian cuneiform, Paragraph 2 covers Egyptian hieroglyphics, Paragraph 3 covers Chinese oracle bones, and Paragraph 4 argues they developed independently. What is the central idea vs. the supporting details?',
          solution: `**Central Idea (Paragraph 4):** Multiple ancient civilizations developed writing systems independently of each other.

**Supporting Details:**
- Sumerian cuneiform (Paragraph 1) → Example 1
- Egyptian hieroglyphics (Paragraph 2) → Example 2
- Chinese oracle bones (Paragraph 3) → Example 3

**Why the central idea is in Paragraph 4:**
- Paragraphs 1-3 provide evidence (three specific examples)
- Paragraph 4 makes the argument these examples support
- The examples serve the larger claim about independent development

**Structure analysis:**
This passage uses an **inductive structure** — specific examples first, then the general conclusion they support.

(The opposite would be deductive: claim first, then evidence.)

**Answer:** The central idea is that writing systems arose independently across civilizations. The descriptions of cuneiform, hieroglyphics, and oracle bones are supporting details that illustrate this conclusion.`
        },
        {
          topicId: centralIdeas.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'A complex passage discusses economic inequality, mentioning the Gini coefficient, historical tax policies, wage stagnation, and social mobility data. The passage has a nuanced argument. How do you identify the central idea when a passage is complex?',
          solution: `**Strategy for complex passages:**

**Step 1: Read the first and last paragraphs carefully.**
These almost always contain the thesis (first) and conclusion (last).

**Step 2: Identify the throughline.**
What theme connects ALL the paragraphs?
- Gini coefficient → measures inequality
- Tax policies → contribute to inequality
- Wage stagnation → a cause/effect of inequality
- Social mobility → a consequence of inequality

**Throughline:** Economic inequality — its measurement, causes, and effects.

**Step 3: Determine the author's POSITION.**
Is the author:
- Describing a problem? (informational)
- Arguing for a solution? (persuasive)
- Analyzing causes? (analytical)
- Comparing perspectives? (evaluative)

**Step 4: Craft the central idea as a single sentence.**
"Growing economic inequality, driven by tax policies and wage stagnation, has significantly reduced social mobility in America."

**Step 5: Match to the best answer choice.**
Eliminate choices that:
- Address only ONE aspect (just taxes, just wages)
- Miss the author's position (neutral when the author takes a stance)
- Are too general ("Economics is complicated")

**Answer:** For complex passages, synthesize the themes from multiple paragraphs into one overarching claim that the author is making.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: centralIdeas.id,
          front: 'How do you find the central idea of an SAT passage?',
          back: 'Read the first and last paragraphs carefully. Ask: "What is the ONE main point the author is making?" It should encompass the whole passage — not too narrow (one detail) or too broad (beyond the passage).',
          hint: 'First and last paragraphs, one sentence summary'
        },
        {
          topicId: centralIdeas.id,
          front: 'What is the difference between a central idea and a theme?',
          back: '**Central idea:** The specific main point of the passage (e.g., "Climate change threatens agriculture"). **Theme:** A broader, universal concept (e.g., "humanity vs. nature"). The SAT asks about central ideas more than themes.',
          hint: 'Central idea is specific; theme is universal'
        },
        {
          topicId: centralIdeas.id,
          front: 'How do supporting details relate to the central idea?',
          back: 'Supporting details are facts, examples, data, quotes, or anecdotes that SUPPORT the central idea. They answer the question: "How does the author prove or illustrate the main point?"',
          hint: 'They prove or illustrate the main point'
        },
        {
          topicId: centralIdeas.id,
          front: 'What is an inductive vs. deductive passage structure?',
          back: '**Inductive:** Examples first → conclusion at the end. **Deductive:** Thesis/claim first → supporting evidence follows. Both structures appear on the SAT.',
          hint: 'Inductive builds up; deductive starts with the claim'
        },
        {
          topicId: centralIdeas.id,
          front: 'What are common wrong answer traps for central idea questions?',
          back: '1. **Too narrow** — focuses on one paragraph or detail. 2. **Too broad** — goes beyond the passage. 3. **Misrepresents the author\'s tone** (neutral vs. critical). 4. **Includes ideas NOT in the passage**.',
          hint: 'Scope problems (too narrow or too broad)'
        },
        {
          topicId: centralIdeas.id,
          front: 'How should you handle main idea questions for each paragraph?',
          back: 'After reading each paragraph, mentally summarize it in ~5 words. When asked about a specific paragraph\'s role, your note will help you quickly identify its purpose within the larger argument.',
          hint: 'Summarize each paragraph as you read'
        },
        {
          topicId: centralIdeas.id,
          front: 'What is the "function" of a supporting detail?',
          back: 'A supporting detail can: **illustrate** a point (example), **prove** a claim (data/evidence), **explain** a concept (definition), or **engage** the reader (anecdote). The SAT asks about function often.',
          hint: 'Illustrate, prove, explain, or engage'
        }
      ]
    })

    console.log('✓ sat-central-ideas-details expanded')
  }

  // ============================================================
  // TOPIC 5: Vocabulary in Context
  // ============================================================
  const vocabContext = await prisma.topic.findUnique({
    where: { slug: 'sat-vocabulary-context' }
  })

  if (vocabContext) {
    await prisma.topic.update({
      where: { id: vocabContext.id },
      data: {
        textContent: `# Vocabulary in Context on the SAT

## What These Questions Test

Vocabulary in Context questions ask: **"As used in line X, [word] most nearly means..."**

The SAT does NOT test obscure vocabulary. Instead, it tests common words used in **uncommon ways** (secondary meanings).

---

## The Strategy: Plug and Play

### Step 1: Read the sentence WITHOUT the word
Understand what the sentence is trying to say.

### Step 2: Predict a replacement
Before looking at the answers, think of a word that would fit.

### Step 3: Plug in each answer choice
Replace the original word with each answer choice. Which one:
- Preserves the meaning of the sentence?
- Fits the tone and context?

---

## Common Words with Multiple Meanings

| Word | Common Meaning | SAT Meaning |
|---|---|---|
| appreciate | to be grateful for | to increase in value |
| check | to verify | to restrain or stop |
| champion | a winner | to advocate for (verb) |
| currency | money | relevance or prevalence |
| discriminating | prejudiced | showing refined taste |
| elevated | raised physically | sophisticated or formal |
| engage | to participate | to attract and hold |
| flag | a banner | to weaken or decline |
| grave | a burial site | serious or solemn |
| harbor | a port | to hold or shelter (a feeling) |
| industry | a business sector | diligence, hard work |
| novel | a book | new and unusual (adj) |
| pedestrian | a walker | ordinary, unimaginative |
| reserved | held for someone | restrained, shy |
| intimate | close, personal | to suggest or hint |
| arrest | to detain | to stop or catch (attention) |

---

## The "Obvious" Answer Trap

The SAT almost NEVER tests the most common definition of a word. If "arrest" appears in context and one of the choices is "to take into custody" (the most common meaning), it's probably wrong.

**Example:** "The painting's use of color arrested the viewer's attention."

Here, "arrested" means "caught and held" — not "took into custody."

---

## Context Clues

### 1. Definition Clues
The sentence or surrounding sentences define the word.
"The policy was draconian — so extreme and harsh that citizens protested."

### 2. Example Clues
Examples in the text reveal the word's meaning.
"The garden contained exotic plants, such as orchids from Madagascar and ferns from Borneo."

### 3. Contrast Clues
The context provides an opposite.
"Unlike his gregarious brother, Tom was taciturn and rarely spoke."

### 4. Tone Clues
The overall positive/negative tone of the passage helps.
If the passage is positive about a person, a word describing them is likely positive.

---

## Practice Approach

1. Read widely — newspapers, essays, scientific articles
2. When you encounter a familiar word used unfamiliarly, note it
3. Practice substituting synonyms into real SAT passages
4. Build familiarity with secondary meanings of common words

---

## Common SAT Mistakes

1. **Choosing the most common definition** instead of the contextual one
2. **Not reading enough context** — read the full sentence AND surrounding sentences
3. **Picking a word that sounds right** but changes the sentence's meaning
4. **Ignoring tone** — a word that fits grammatically but has the wrong connotation
`
      }
    })

    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: vocabContext.id,
          order: 10,
          difficulty: 'EASY',
          question: '"The committee will address the issue at the next meeting." As used here, "address" most nearly means:\n(A) a location\n(B) to deal with\n(C) a speech\n(D) to label',
          solution: `**Step 1: Read the sentence and predict:**
"The committee will _____ the issue" → They will deal with / handle / tackle the issue.

**Step 2: Test each choice:**
(A) "a location" → "The committee will a location the issue" → Makes no sense ❌
(B) "to deal with" → "The committee will deal with the issue" → Makes sense ✅
(C) "a speech" → "The committee will a speech the issue" → Makes no sense ❌
(D) "to label" → "The committee will label the issue" → Grammatically okay but doesn't match the meaning ❌

**Answer:** **(B) to deal with**

**Note:** "Address" has four common meanings: a location (noun), a speech (noun), to deal with (verb), and to speak to (verb). Context determines which one.`
        },
        {
          topicId: vocabContext.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: '"The author\'s pedestrian writing style disappointed critics who expected more creative prose." As used here, "pedestrian" most nearly means:\n(A) a person walking\n(B) ordinary and unimaginative\n(C) fast-paced\n(D) careful and precise',
          solution: `**Step 1: Read the sentence and predict:**
The writing style "disappointed critics who expected more creative prose." So it must be the OPPOSITE of creative.

Prediction: boring, plain, ordinary, dull

**Step 2: Test each choice:**
(A) "a person walking" → Doesn't describe a writing style ❌
(B) "ordinary and unimaginative" → Matches! Opposite of "creative" ✅
(C) "fast-paced" → Nothing in the sentence suggests speed ❌
(D) "careful and precise" → Positive traits, but critics were disappointed ❌

**Answer:** **(B) ordinary and unimaginative**

**This is a classic SAT vocab question!** "Pedestrian" commonly means a walker, but its secondary meaning (ordinary, commonplace) is what the SAT tests. The clue is the contrast with "more creative prose."`
        },
        {
          topicId: vocabContext.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: '"Despite her reserved demeanor at public events, she was actually quite forthcoming in private conversations." As used here, "reserved" most nearly means:\n(A) held in advance\n(B) restrained and quiet\n(C) saved for later\n(D) exclusive',
          solution: `**Step 1: Read the sentence and predict:**
"Despite her _____ demeanor at public events, she was actually quite forthcoming in private."

The word "despite" signals a CONTRAST. "Forthcoming" means open and willing to share. So "reserved" must mean the opposite — "quiet" or "restrained."

**Step 2: Test each choice:**
(A) "held in advance" → "held in advance demeanor" → doesn't make sense ❌
(B) "restrained and quiet" → Contrasts with "forthcoming" → perfect match ✅
(C) "saved for later" → "saved for later demeanor" → doesn't make sense ❌
(D) "exclusive" → Could describe an event but doesn't contrast with "forthcoming" ❌

**Answer:** **(B) restrained and quiet**

**Key clue:** The word "despite" signals a contrast. Whatever "reserved" means here must be opposite to "forthcoming."`
        },
        {
          topicId: vocabContext.id,
          order: 13,
          difficulty: 'HARD',
          question: '"The report flagged several concerns about the project\'s timeline, noting that recent delays had begun to compromise the original schedule." As used here, "flagged" most nearly means:\n(A) decorated with flags\n(B) identified and highlighted\n(C) weakened\n(D) waved',
          solution: `**Step 1: Read the sentence and predict:**
"The report _____ several concerns" and then goes on to describe those concerns.

Prediction: The report identified / raised / pointed out concerns.

**Step 2: Test each choice:**
(A) "decorated with flags" → "The report decorated with flags several concerns" → nonsense ❌
(B) "identified and highlighted" → "The report identified and highlighted several concerns" → makes perfect sense ✅
(C) "weakened" → "The report weakened several concerns" → grammatically possible but doesn't match context (the concerns aren't being reduced) ❌
(D) "waved" → "The report waved several concerns" → nonsense ❌

**Answer:** **(B) identified and highlighted**

**Tricky part:** "Flagged" can mean both "weakened/declined" (C) AND "identified/called attention to" (B). The context determines which meaning: the report is IDENTIFYING concerns, not weakening them.

**Note:** Both (B) and (C) are legitimate secondary meanings of "flag." This is why context is crucial!`
        },
        {
          topicId: vocabContext.id,
          order: 14,
          difficulty: 'EXPERT',
          question: '"The diplomat\'s measured response to the crisis demonstrated her ability to remain composed under pressure." As used here, "measured" most nearly means:\n(A) quantified\n(B) deliberate and carefully considered\n(C) evaluated\n(D) moderate in size',
          solution: `**Step 1: Read the full context:**
The diplomat gave a "measured response" that showed her ability to "remain composed under pressure."

"Composed under pressure" = calm, thoughtful, controlled.

So "measured" must relate to being careful and controlled.

Prediction: careful, deliberate, calculated, thoughtful.

**Step 2: Test each choice:**
(A) "quantified" → "The diplomat's quantified response" → You quantify data, not responses ❌
(B) "deliberate and carefully considered" → "The diplomat's deliberate and carefully considered response" → Matches the idea of composure under pressure ✅
(C) "evaluated" → "The diplomat's evaluated response" → Doesn't fit grammatically or semantically ❌
(D) "moderate in size" → "The diplomat's moderate-in-size response" → Doesn't fit the context ❌

**Answer:** **(B) deliberate and carefully considered**

**This is a higher-level question because:**
- "Measured" has at least 4 meanings
- The answer requires understanding the tone (diplomatic, composed) not just the grammar
- The context clue ("remain composed under pressure") is in the SECOND part of the sentence`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: vocabContext.id,
          front: 'What is the "Plug and Play" strategy for vocab-in-context?',
          back: '1. Read the sentence without the word, 2. Predict what word would fit, 3. Plug each answer choice into the sentence, 4. Choose the one that preserves the meaning AND fits the tone.',
          hint: 'Predict, then substitute'
        },
        {
          topicId: vocabContext.id,
          front: 'Why is the "obvious" definition usually wrong on the SAT?',
          back: 'The SAT tests **secondary meanings** of common words. If "novel" appears and one choice is "a book," it\'s probably wrong — the SAT meaning is likely "new and unusual" (adjective).',
          hint: 'The test wants the less common meaning'
        },
        {
          topicId: vocabContext.id,
          front: 'What are the four types of context clues?',
          back: '1. **Definition clues** (the text defines the word), 2. **Example clues** (examples reveal meaning), 3. **Contrast clues** (opposite meaning given), 4. **Tone clues** (positive/negative context).',
          hint: 'Definition, example, contrast, tone'
        },
        {
          topicId: vocabContext.id,
          front: 'What does "pedestrian" mean as an SAT vocabulary word?',
          back: 'Ordinary, unimaginative, dull. NOT "a person walking." Example: "The architect\'s pedestrian design failed to impress the panel."',
          hint: 'Not about walking!'
        },
        {
          topicId: vocabContext.id,
          front: 'What does "champion" mean as a VERB?',
          back: 'To advocate for, to support or defend a cause. NOT "a winner." Example: "She championed equal rights throughout her career" means she fought for equal rights.',
          hint: 'Not a winner — it is an action'
        },
        {
          topicId: vocabContext.id,
          front: 'How do contrast clues help determine word meaning?',
          back: 'Words like "despite," "however," "unlike," "whereas," and "but" signal that the unknown word means the OPPOSITE of what follows. Example: "Unlike his boisterous sister, he was quite reticent" → reticent ≈ quiet.',
          hint: 'Transition words signal opposites'
        },
        {
          topicId: vocabContext.id,
          front: 'What does "arrest" mean in the phrase "the painting arrested his attention"?',
          back: 'To stop, catch, or hold. NOT "to take into custody." The painting captured or seized his attention, stopping him in his tracks.',
          hint: 'Think: caught and held'
        }
      ]
    })

    console.log('✓ sat-vocabulary-context expanded')
  }

  console.log('\n✅ SAT Reading expansion complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
