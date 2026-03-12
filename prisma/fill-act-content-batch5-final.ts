import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling in final 6 ACT topics (Reading + Test Strategy)...\n');

  // ACT Reading: Craft and Structure
  await prisma.topic.update({
    where: { slug: 'craft-and-structure' },
    data: {
      textContent: `# Craft and Structure (ACT Reading)

## Understanding Craft and Structure

"Craft and Structure" questions focus on **how** a text is written, not just **what** it says:

- **Word choice and tone**
- **Text structure and organization**
- **Point of view and perspective**
- **Rhetorical devices and techniques**
- **Purpose of specific sections**

These questions test your ability to analyze the author's choices and how they shape meaning.

## Text Structure

### Common Text Structures

**1. Chronological/Sequential**
- Events in time order
- Signal words: first, then, next, finally, before, after

**2. Cause and Effect**
- Shows relationships between events
- Signal words: because, since, as a result, therefore, consequently

**3. Compare and Contrast**
- Examines similarities and differences
- Signal words: similarly, however, unlike, whereas, both, but

**4. Problem and Solution**
- Identifies issue and proposes fix
- Signal words: problem, solution, answer, resolve

**5. Description**
- Provides details about topic
- Uses sensory details and specific characteristics

### Structure Questions

**"The overall structure of the passage can best be described as:"**

**How to answer:**
1. Look at how passage is organized
2. Identify pattern (chronological, cause-effect, etc.)
3. Check beginning and end
4. Match to answer choice

**Example:**

*Passage discusses Einstein's early life, education, development of relativity theory, and later impact*

**Structure:** Chronological biography

**"The third paragraph (lines 32-45) primarily serves to:"**

**How to answer:**
1. Read that paragraph
2. Ask: What's its purpose in passage?
3. Common purposes:
   - Provide evidence for previous claim
   - Introduce new concept
   - Contrast with earlier information
   - Give specific example
   - Transition to new topic

## Point of View

### Types of Point of View

**First Person:** Uses "I," "me," "we"
- Personal perspective
- Limited to narrator's knowledge
- More subjective

**Third Person:** Uses "he," "she," "they"
- Outside narrator
- Can be limited or omniscient
- Can be more objective

**Second Person:** Uses "you"
- Rare in ACT passages
- Direct address to reader

### Point of View Questions

**"The passage is written from the point of view of:"**

**How to answer:**
- Look for pronouns
- Determine narrator's relationship to events
- Check if narrator is character or outside observer

**"The narrator's perspective can best be described as:"**

**Common options:**
- Objective observer
- Enthusiastic supporter
- Skeptical critic
- Nostalgic participant
- Detached analyst

**How to answer:**
- Look for evaluative language
- Note adjectives and adverbs
- Check for bias or opinion
- Consider overall tone

## Tone and Style

### Identifying Tone

**Tone** = Author's attitude toward subject

**Common tones:**
- **Objective:** Factual, neutral, unbiased
- **Enthusiastic:** Excited, positive, supportive
- **Critical:** Disapproving, negative, questioning
- **Admiring:** Respectful, appreciative
- **Nostalgic:** Longing for past, sentimental
- **Humorous:** Funny, lighthearted
- **Serious:** Grave, important, formal

**Tone indicators:**
- Word choice (connotations)
- Descriptive adjectives
- Comparisons and metaphors
- What author emphasizes

**"The author's tone in discussing X can best be described as:"**

**How to answer:**
1. Find where X is discussed
2. Read surrounding sentences
3. Note word choice (positive/negative/neutral)
4. Check for qualifying words (however, remarkably, unfortunately)
5. Match to answer choice

**Example:**

*"The scientist's groundbreaking research transformed our understanding of genetics."*

**Tone:** Admiring (note: "groundbreaking," "transformed")

*"The study's flawed methodology raises serious questions about the conclusions."*

**Tone:** Critical (note: "flawed," "serious questions")

### Analyzing Word Choice

**"The author's use of the word 'X' serves to:"**

**How to answer:**
1. Find the word in context
2. Ask: Why this word instead of a neutral alternative?
3. Consider connotation (associated feelings)
4. Determine effect on reader

**Example:**

*"The politician's scheme was exposed by investigative journalists."*

**Why "scheme" instead of "plan"?**
- "Scheme" has negative connotation (sneaky, dishonest)
- Shows author's critical tone
- Influences reader to view politician negatively

## Rhetorical Devices

### Common Devices in ACT Passages

**Analogy:** Comparison to explain unfamiliar concept
- *"DNA is like a blueprint for building a house"*
- **Purpose:** Make complex idea understandable

**Anecdote:** Brief personal story or example
- Opening with specific example before general discussion
- **Purpose:** Engage reader, illustrate point

**Rhetorical Question:** Question not expecting answer
- *"Who among us hasn't wondered about the stars?"*
- **Purpose:** Engage reader, emphasize point

**Repetition:** Repeating words or phrases
- **Purpose:** Emphasize importance, create rhythm

**Contrast/Juxtaposition:** Placing opposites together
- **Purpose:** Highlight differences, create emphasis

### Device Questions

**"The author uses the analogy in lines 15-17 primarily to:"**

**How to answer:**
1. Find the analogy
2. Identify what's being compared
3. Ask: What does this comparison help reader understand?
4. Choose answer reflecting that purpose

**Common purposes:**
- Clarify complex concept
- Make abstract idea concrete
- Help reader visualize
- Create emotional connection

## Text Features

### Analyzing Specific Sections

**"The description in lines 23-27 primarily serves to:"**

**How to answer:**
1. Read those specific lines
2. Read paragraph before and after for context
3. Ask: How does this section function in passage?

**Common functions:**
- Support previous claim with evidence
- Provide specific example
- Introduce counterargument
- Shift to new topic
- Establish setting or context
- Develop character

### Transitions

**"The sentence 'However, recent studies suggest otherwise' (line 34) serves to:"**

**Answer:** Introduce contrasting information or shift in argument

**Transition types:**
- **Addition:** furthermore, moreover, additionally
- **Contrast:** however, nevertheless, on the other hand
- **Cause/Effect:** therefore, thus, as a result
- **Example:** for instance, for example, such as
- **Sequence:** first, next, finally

## Author's Purpose

### Determining Purpose

**"The author's main purpose in the passage is to:"**

**Common purposes:**
- Inform/explain
- Persuade/argue
- Entertain
- Describe
- Narrate

**How to determine:**
- Check thesis or main idea
- Look at evidence presented
- Note tone (objective vs. opinionated)
- Consider structure

**"The author mentions X in order to:"**

**Common purposes for specific mentions:**
- Provide evidence
- Give example
- Introduce topic
- Create contrast
- Support claim
- Transition between ideas

## Style and Language

### Analyzing Writing Style

**Formal vs. Informal:**
- **Formal:** Academic, professional, sophisticated vocabulary
- **Informal:** Conversational, casual, simple language

**Technical vs. Accessible:**
- **Technical:** Specialized vocabulary, complex concepts
- **Accessible:** Clear explanations, everyday language

**"The author's writing style can best be described as:"**

**How to answer:**
- Note vocabulary level
- Check sentence complexity
- Look for personal pronouns
- Consider tone
- Assess formality

### Imagery and Description

**Imagery** = Language appealing to senses (sight, sound, touch, taste, smell)

**"The author's description of X emphasizes:"**

**How to answer:**
1. Read the description
2. Note which details author includes
3. Ask: What stands out? What's emphasized?
4. Choose answer matching those emphasized elements

**Example:**

*"The forest was dark and silent, with twisted trees looming overhead like skeletal hands."*

**Emphasizes:** Eerie, threatening atmosphere (not peaceful nature)

## Common Question Formats

### Format 1: Function Questions

**"The [first/second/third] paragraph primarily serves to:"**

**Strategies:**
- Read that paragraph
- Check how it relates to overall passage
- Identify its specific role

### Format 2: Purpose Questions

**"The author mentions X in order to:"**

**Strategies:**
- Find where X is mentioned
- Read context before and after
- Determine why author included it

### Format 3: Effect Questions

**"The author's use of X has the effect of:"**

**Strategies:**
- Identify the device or technique
- Consider how it affects reader
- Choose answer matching that effect

### Format 4: Perspective Questions

**"The narrator's attitude toward X is best described as:"**

**Strategies:**
- Find where narrator discusses X
- Note word choice and tone
- Match to answer choice

## Common Mistakes

❌ **Confusing what is said with how it's said**  
Structure questions are about HOW text is organized, not just content

❌ **Ignoring context**  
Always read before and after the specific lines referenced

❌ **Choosing based on one word**  
Tone should be consistent across passage, not based on single word

❌ **Overthinking purpose**  
Usually straightforward — provide example, support claim, etc.

❌ **Using outside interpretation**  
Base answers on passage evidence, not your own literary analysis

## Quick Tips

✓ **Read the line references** — always check specific lines mentioned  
✓ **Look for patterns** — repeated words/ideas show emphasis  
✓ **Note transitions** — signal shifts in structure  
✓ **Consider audience** — formal = academic; informal = general  
✓ **Check surrounding context** — never read lines in isolation  
✓ **Match tone to words** — look for specific evidence of tone  
✓ **Identify structure early** — helps answer multiple questions  
✓ **Think about author choices** — why this word/example/order?

## Practice Approach

**For Craft and Structure questions:**

1. **Understand what's being asked**
   - Function? Purpose? Tone? Structure?

2. **Locate relevant section**
   - Use line numbers
   - Read a bit before and after

3. **Analyze the "how"**
   - How is it written?
   - What choices did author make?
   - What's the effect?

4. **Find passage evidence**
   - Specific words showing tone
   - Organization showing structure
   - Context showing purpose

5. **Eliminate wrong answers**
   - Too extreme
   - Not supported by passage
   - Confuses what vs. how

**Remember:** Craft and Structure questions ask you to think like a literary analyst. Don't just focus on WHAT the passage says — focus on HOW it's written, WHY the author made specific choices, and WHAT EFFECT those choices have on meaning and reader understanding!
`
    }
  });

  console.log('✅ Filled Craft and Structure\n');

  // ACT Reading: Integration of Knowledge
  await prisma.topic.update({
    where: { slug: 'integration-of-knowledge' },
    data: {
      textContent: `# Integration of Knowledge (ACT Reading)

## What is Integration of Knowledge?

**Integration** = Combining information from multiple sources or parts of a text

These questions test your ability to:
- Connect ideas across a passage
- Synthesize information from different sections
- Compare and contrast viewpoints
- Draw conclusions from combined evidence

## Types of Integration Questions

### 1. Synthesizing Information

**Synthesis** = Putting together information from different parts

**Question format:**
"Based on the passage, both X and Y:"

**How to answer:**
1. Find where X is discussed
2. Find where Y is discussed
3. Identify what they have in common
4. Choose answer supported by both sections

**Example:**

*Paragraph 2 discusses benefits of solar energy (renewable, clean)*  
*Paragraph 4 discusses benefits of wind energy (renewable, clean)*

**Question:** "The passage indicates that both solar and wind energy are:"

**Answer:** "renewable and produce no pollution"

### 2. Connecting Concepts

**Questions ask you to link related ideas**

**Question format:**
"The information in lines 20-25 supports the point made in lines 45-48 by:"

**How to answer:**
1. Read both sections
2. Identify the connection (example, evidence, illustration, contrast)
3. Choose answer describing that relationship

**Relationship types:**
- **Evidence:** Second section proves first
- **Example:** Second section illustrates first
- **Contrast:** Second section opposes first
- **Elaboration:** Second section expands on first

### 3. Making Inferences Across Text

**Unlike simple detail questions, these require connecting multiple pieces**

**Question format:**
"Based on information in the passage, it can reasonably be inferred that:"

**How to answer:**
1. Check that answer is supported by passage evidence
2. May require combining info from 2+ places
3. Still close to text — not wild speculation!

**Example:**

*Passage states:*
- "Species A is found only in high-altitude environments"
- "Global warming is reducing high-altitude habitat"

**Reasonable inference:** "Species A is threatened by global warming"

### 4. Comparative Passages

**Some ACT Reading sections have two short passages on same topic**

**Questions ask you to compare/contrast:**
- Main ideas
- Authors' perspectives
- Evidence used
- Conclusions reached

**Question format:**
"Unlike the author of Passage A, the author of Passage B:"

**How to answer:**
1. Identify what Passage A says/does
2. Identify what Passage B says/does
3. Find the difference
4. Choose answer reflecting that difference

## Analyzing Arguments

### Identifying Claims

**Claim** = Statement author wants you to believe

**Usually:**
- In introduction (thesis)
- In conclusion (main point)
- In topic sentences

**Question format:**
"The author's main argument is that:"

**How to answer:**
1. Find the central claim
2. Eliminate supporting details
3. Choose broadest answer that encompasses passage

### Evaluating Evidence

**Evidence** = Facts, examples, data used to support claims

**Question format:**
"Which of the following does the author use to support the claim that X?"

**How to answer:**
1. Find where claim X is made
2. Look at surrounding sentences for support
3. Identify type of evidence (statistics, examples, expert opinion, etc.)

**Types of evidence:**
- **Statistics/Data:** Numbers, percentages
- **Examples:** Specific instances
- **Expert testimony:** Quotes from authorities
- **Logical reasoning:** Cause-effect, if-then
- **Historical precedent:** Past events
- **Anecdotes:** Personal stories

### Recognizing Counterarguments

**Counterargument** = Opposing view that author addresses

**Signal phrases:**
- "Some argue that..."
- "Critics claim..."
- "However, opponents believe..."
- "On the other hand..."

**Question format:**
"The author mentions the opposing view in order to:"

**Common purposes:**
- Acknowledge and then refute it
- Show complexity of issue
- Strengthen own argument by addressing criticism
- Present balanced perspective

## Drawing Conclusions

### Inference vs. Stated Fact

**Stated fact:** Directly written in passage  
**Inference:** Logical conclusion based on passage evidence

**Valid inference:**
✓ Small logical step from text  
✓ Supported by passage evidence  
✓ Reasonable and likely

**Invalid inference:**
❌ Requires huge logical leap  
❌ Not supported by evidence  
❌ Based on outside knowledge

**Question format:**
"It can be reasonably inferred that:"  
"The passage suggests that:"

**How to answer:**
1. Find relevant passage section
2. Ask: What logically follows from this information?
3. Eliminate unsupported choices
4. Choose best-supported inference

### Applying Passage Ideas

**Application questions** ask you to extend passage concepts to new situations

**Question format:**
"Based on the passage, which of the following situations would be most similar to X?"

**How to answer:**
1. Understand X thoroughly
2. Identify key characteristics
3. Check each answer choice for those characteristics
4. Choose best match

**Example:**

*Passage describes mutualism: relationship where both species benefit*

**Question:** "Which is most similar to mutualism?"

**Answer:** "Bees pollinating flowers while gathering nectar" (both benefit)

## Comparing and Contrasting

### Finding Similarities

**Question format:**
"Both the first and second paragraphs discuss:"  
"The author uses both X and Y as examples of:"

**How to answer:**
1. Read both sections
2. Identify shared elements
3. Choose answer present in BOTH

### Finding Differences

**Question format:**
"Unlike X, Y is characterized by:"  
"The author's tone in discussing X differs from the tone in discussing Y in that:"

**How to answer:**
1. Identify characteristic of X
2. Identify characteristic of Y
3. Find the contrast
4. Choose answer showing difference

## Analyzing Multiple Perspectives

### Identifying Different Viewpoints

**Some passages present multiple perspectives:**
- Historical debates
- Scientific theories
- Different interpretations
- Contrasting experiences

**Question format:**
"According to Scientist 1, the cause of X is:"  
"Unlike Scientist 1, Scientist 2 believes that:"

**How to answer:**
1. Locate each perspective
2. Note key differences
3. Keep perspectives separate (don't mix them up!)

### Comparing Perspectives

**Question format:**
"Scientists 1 and 2 would likely agree that:"  
"The main point of disagreement between X and Y concerns:"

**How to answer:**
- For agreement: Find common ground
- For disagreement: Identify key conflict

## Understanding Implications

### Predicting Outcomes

**Question format:**
"Based on the passage, if X occurred, what would likely happen?"

**How to answer:**
1. Find passage discussion of X or related concepts
2. Identify established patterns/relationships
3. Apply that pattern to new scenario
4. Choose logical outcome

**Example:**

*Passage explains: More exercise → increased muscle mass → higher metabolism*

**Question:** "Based on the passage, a person who exercises more would likely:"

**Answer:** "have a higher metabolism"

### Understanding Significance

**Question format:**
"The author's discussion of X is significant because it:"

**How to answer:**
1. Find where X is discussed
2. Ask: Why did author include this?
3. Consider how it relates to main idea
4. Choose answer showing its importance

## Common Integration Patterns

### Pattern 1: Part-to-Whole

**Connect specific detail to broader concept**

*"The example of X (lines 23-28) primarily serves to illustrate:"*

### Pattern 2: Cause-to-Effect

**Link cause mentioned early to effect described later**

*"The outcome described in paragraph 4 resulted from the action mentioned in:"*

### Pattern 3: Question-to-Answer

**Connect problem posed early with solution given later**

*"The solution proposed in the final paragraph addresses the problem raised in:"*

### Pattern 4: Claim-to-Evidence

**Link assertion to supporting facts**

*"Which of the following provides support for the claim in line 12?"*

## Strategies for Success

### Strategy 1: Map the Passage

**As you read, note:**
- Main idea of each paragraph
- Key transitions
- Where important concepts appear
- Relationships between sections

**Mental map helps you:**
- Quickly find information
- See connections
- Answer synthesis questions

### Strategy 2: Look for Connections

**Watch for:**
- Repeated words/concepts
- Cause-effect relationships
- Comparisons and contrasts
- Examples and evidence

**These signal important connections!**

### Strategy 3: Use Process of Elimination

**For integration questions:**
1. Check if answer is supported (eliminate if not)
2. Check if answer connects relevant parts (eliminate if it brings in wrong section)
3. Check if connection makes sense (eliminate if illogical)
4. Choose best remaining answer

### Strategy 4: Verify with Text

**Don't rely on memory!**

**For every integration question:**
- Go back to relevant sections
- Verify each part of answer
- Make sure connection is actually in passage

## Common Mistakes

❌ **Answering from only one section**  
Integration questions require combining information

❌ **Making unsupported inferences**  
Must have clear passage evidence

❌ **Confusing correlation with causation**  
X and Y happening together ≠ X causes Y

❌ **Choosing answer with familiar passage words**  
ACT loves to trick with answers that sound familiar but don't actually integrate correctly

❌ **Not checking both/all parts**  
If question asks about "both X and Y," answer must apply to BOTH

## Quick Tips

✓ **Create passage map** — note main idea of each section  
✓ **Look for transitions** — signal important connections  
✓ **Verify all parts** — integration answers must connect multiple pieces  
✓ **Watch for "both" and "all"** — every element must fit  
✓ **Check each perspective** — don't mix up different viewpoints  
✓ **Find common ground** — what do sections share?  
✓ **Identify differences** — how do sections contrast?  
✓ **Use line references** — they point you to what to connect

## Practice Approach

**For Integration questions:**

1. **Identify what needs integrating**
   - Two paragraphs?
   - Multiple examples?
   - Different perspectives?

2. **Locate all relevant sections**
   - Use line numbers
   - Check passage map

3. **Read each section**
   - What does each say?
   - How are they related?

4. **Identify the connection**
   - Similar? Different?
   - Cause-effect?
   - Example-concept?

5. **Choose answer that reflects integration**
   - Must combine information
   - Must be supported by ALL relevant parts

**Remember:** Integration questions test higher-level reading skills. You're not just finding facts — you're connecting ideas, synthesizing information, and seeing the big picture. Take time to understand relationships between different parts of the passage!
`
    }
  });

  console.log('✅ Filled Integration of Knowledge\n');

  // ACT Reading: Vocabulary in Context
  await prisma.topic.update({
    where: { slug: 'vocabulary-in-context' },
    data: {
      textContent: `# Vocabulary in Context (ACT Reading)

## Understanding Vocabulary in Context

**Vocabulary in context** questions test your ability to determine word meaning based on how it's used in the passage.

**Key point:** These questions test READING COMPREHENSION, not vocabulary knowledge!

**You don't need to know the word beforehand** — context clues will help you figure it out.

## Question Format

**Standard format:**
"As it is used in line X, the word '[word]' most nearly means:"

**The word could be:**
- Common word with multiple meanings
- Somewhat challenging vocabulary
- Word used figuratively or non-literally
- Technical term explained in passage

## How to Answer

### Step-by-Step Strategy

**1. Go to the line number**
- Don't try to remember from your reading
- Find the exact sentence

**2. Read the full sentence**
- Don't look at just the word
- Context is key!

**3. Read the sentence before and after**
- Additional context helps
- Sometimes definition is in nearby sentence

**4. Try to predict the meaning**
- Before looking at answer choices
- Based on context, what makes sense?

**5. Test each answer choice**
- Substitute it for the word
- Does sentence still make sense?
- Does it fit the context?

**6. Eliminate wrong answers**
- Cross out any that don't fit context
- Choose best match

**7. Verify**
- Re-read sentence with your answer
- Does it work?

## Types of Context Clues

### 1. Definition Clues

**The passage directly defines the word**

**Signal words:**
- is, means, refers to, is called
- in other words
- that is
- i.e., e.g.

**Example:**

*"The experiment required a catalyst, a substance that speeds up a chemical reaction."*

**"Catalyst" means:** "substance that speeds up a chemical reaction" (directly defined!)

### 2. Synonym Clues

**A similar word appears nearby**

**Example:**

*"The ancient artifact was remarkably pristine, showing almost no signs of deterioration or decay."*

**"Pristine" likely means:** in perfect/new condition (related to "no deterioration or decay")

### 3. Antonym Clues

**An opposite word provides contrast**

**Signal words:**
- but, however, although, unlike
- instead, rather than, on the other hand

**Example:**

*"Unlike her usually taciturn brother, Sarah was extremely talkative at the party."*

**"Taciturn" must mean:** quiet, not talkative (opposite of "talkative")

### 4. Example Clues

**Examples illustrate the word's meaning**

**Signal words:**
- such as, for example, including
- like, for instance

**Example:**

*"The forest contained various deciduous trees, such as oaks, maples, and birches."*

**"Deciduous" describes:** oaks, maples, and birches (trees that lose leaves)

### 5. Inference Clues

**Use logic and passage context to determine meaning**

**Example:**

*"The detective scrutinized the crime scene, examining every tiny detail with intense focus."*

**"Scrutinized" means:** examined very carefully (inferred from "examining every tiny detail with intense focus")

## Common Vocabulary Challenges

### Challenge 1: Multiple Meanings

**Many common words have different meanings in different contexts**

**Example: "Run"**
- Run a race (move quickly)
- Run a business (operate)
- Run in your stocking (tear)
- Run of bad luck (sequence)

**ACT strategy:**
- Ignore what you think the word means
- Focus on context in THIS passage
- Choose meaning that fits THIS usage

**Sample question:**

*"The scientist decided to run the experiment again to verify results."*

**As used here, "run" means:**
A. Move quickly  
B. Operate/conduct ✓  
C. Escape  
D. Flow

**Answer: B** (conduct the experiment)

### Challenge 2: Figurative Language

**Words used non-literally**

**Example:**

*"The company's expansion plans hit a wall when funding fell through."*

**"Hit a wall" doesn't mean physically striking a barrier**

**It means:** encountered an obstacle or problem

### Challenge 3: Technical Terms

**Specialized vocabulary from science, history, etc.**

**Good news:** Passage usually provides context or definition!

**Example:**

*"Photosynthesis is the process by which plants convert sunlight into chemical energy."*

**Even if you didn't know "photosynthesis," passage defines it!**

## Testing Approach

### Testing Answer Choices

**For each choice, ask:**

**1. Does it fit grammatically?**
- Can it substitute for the word?
- Does sentence still make sense?

**2. Does it fit contextually?**
- Does it match the passage meaning?
- Does it work with surrounding ideas?

**3. Is it too specific or too general?**
- Should match the level of specificity in passage

**Example:**

*"The researcher's theory was corroborated by multiple independent studies."*

**Question:** "Corroborated most nearly means:"

A. Invented  
B. Contradicted  
C. Confirmed ✓  
D. Questioned

**Test them:**
- "invented by studies" — doesn't make sense grammatically
- "contradicted by studies" — opposite of what sentence suggests
- "confirmed by studies" — fits perfectly! ✓
- "questioned by studies" — opposite meaning

### Eliminating Wrong Answers

**Eliminate answers that:**

❌ Have opposite meaning  
❌ Don't fit grammatically  
❌ Are too extreme  
❌ Bring in outside context not in passage  
❌ Are common meanings that don't fit THIS context

## Common Patterns

### Pattern 1: Academic Vocabulary

**SAT/ACT favorites:**
- ambiguous, arbitrary, substantiate
- redundant, refute, paradox
- comprehensive, scrutinize, meticulous

**Strategy:** Look for context clues in passage — these will be explained or illustrated!

### Pattern 2: Words with Positive/Negative Connotations

**Sometimes you can tell if word is positive or negative from context**

**Example:**

*"The critic's scathing review destroyed the restaurant's reputation."*

**"Scathing" must be negative** (it "destroyed" reputation)

**Even without knowing exact meaning, you can eliminate positive choices!**

### Pattern 3: Scientific/Technical Terms

**These almost always have context clues**

**Example:**

*"The mineral's luster, or shiny appearance, made it valuable for jewelry."*

**"Luster" means:** shiny appearance (directly stated!)

## Words to Watch

### High-Frequency ACT Words

**These appear often in vocabulary questions:**

**Tier 1 - Common Academic:**
- analyze, interpret, evaluate
- significant, relevant, appropriate
- establish, demonstrate, illustrate

**Tier 2 - More Challenging:**
- ambiguous (unclear, having multiple meanings)
- arbitrary (random, without reason)
- comprehensive (complete, thorough)
- paradox (contradiction, seeming impossibility)
- substantiate (support with evidence, prove)

**Tier 3 - Advanced:**
- meticulous (very careful and precise)
- mundane (ordinary, boring)
- prolific (producing a lot)
- pragmatic (practical)
- ubiquitous (found everywhere)

**Remember:** Don't just memorize these! Practice finding meaning from context.

## Special Cases

### Case 1: Archaic/Old-Fashioned Language

**In literary passages, you might see outdated words**

**Strategy:**
- Context is especially important
- Modern equivalent usually clear from usage
- May need to infer from tone and situation

### Case 2: Discipline-Specific Vocabulary

**Science passages:** photosynthesis, mitosis, precipitation  
**History passages:** industrialization, suffrage, confederation  
**Literary passages:** protagonist, metaphor, narrative

**Good news:** These are usually defined or explained in passage!

### Case 3: Word Forms

**Question might ask about different form of word**

**Example:**
- Passage uses "hesitant"
- Question asks about "hesitantly"

**Strategy:** Same meaning, just different part of speech (adjective vs. adverb)

## Common Mistakes

❌ **Not reading the sentence**  
Always check context — don't just choose familiar definition

❌ **Using first definition you know**  
Word might be used differently in passage

❌ **Ignoring context clues**  
Passage provides help — use it!

❌ **Overthinking**  
Usually the meaning is fairly clear from context

❌ **Not substituting answer back**  
Always test: does my answer make sense in the sentence?

❌ **Choosing answer with words from passage**  
ACT loves to use passage words in wrong answers as distractors

## Quick Tips

✓ **Always go back to the line** — don't trust memory  
✓ **Read before and after** — context extends beyond one sentence  
✓ **Predict before looking at choices** — helps avoid wrong answers  
✓ **Substitute each choice** — test if it makes sense  
✓ **Consider tone** — positive, negative, or neutral?  
✓ **Look for definition clues** — passage often defines challenging words  
✓ **Eliminate opposites first** — easiest to rule out  
✓ **Trust context over knowledge** — passage meaning trumps dictionary

## Practice Approach

**For vocabulary questions:**

1. **Locate the word (5 seconds)**
   - Go to exact line number
   - Find the word in sentence

2. **Read for context (15 seconds)**
   - Read full sentence
   - Read sentence before
   - Read sentence after
   - Look for context clues

3. **Predict meaning (5 seconds)**
   - Based on context, what would make sense?
   - Don't look at choices yet

4. **Test answer choices (10 seconds)**
   - Substitute each into sentence
   - Eliminate those that don't fit
   - Choose best match

5. **Verify (5 seconds)**
   - Re-read with your answer
   - Does it make sense?

**Total time per question: ~40 seconds**

## Context Clues Practice

**When you see a vocabulary question, ask:**

1. **Is there a definition nearby?**
   → Look for "is," "means," "refers to"

2. **Is there a synonym?**
   → Look for similar words in context

3. **Is there an antonym?**
   → Look for contrasts with "but," "however," "unlike"

4. **Are there examples?**
   → Look for "such as," "for example," "like"

5. **Can I infer from situation?**
   → Use logic and context to determine meaning

**One of these will almost always work!**

## Final Reminders

✅ **Context is king** — passage tells you the meaning  
✅ **Forget what you know** — focus on how word is used HERE  
✅ **Multiple meanings are normal** — choose one that fits context  
✅ **Look around the word** — clues are in surrounding sentences  
✅ **Test your answer** — substitute it in and check if it works

**Remember:** Vocabulary in context questions are really reading comprehension questions in disguise. They test whether you can use context to understand unfamiliar or multi-meaning words. Strong readers use context clues automatically — practice this skill and vocabulary questions become some of the fastest, easiest points on the ACT Reading section!
`
    }
  });

  console.log('✅ Filled Vocabulary in Context\n');

  console.log('🎉 ACT Prep Reading Complete - All 4 reading topics filled!\n');
  console.log('📝 Now completing final 3 Test Strategy topics...\n');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
