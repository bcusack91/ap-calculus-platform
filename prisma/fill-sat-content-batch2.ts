import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling in remaining SAT Prep content (Batch 2)...\n');

  // Time Management for SAT
  await prisma.topic.update({
    where: { slug: 'sat-time-management' },
    data: {
      textContent: `# Time Management for SAT

## SAT Time Breakdown

### Reading Section (65 minutes)
- **5 passages** with 10-11 questions each
- **52 total questions**
- **Average:** ~13 minutes per passage + questions

### Writing Section (35 minutes)
- **4 passages** with 11 questions each
- **44 total questions**
- **Average:** ~8.75 minutes per passage

### Math No-Calculator (25 minutes)
- **20 questions** (15 multiple choice + 5 grid-in)
- **Average:** 1.25 minutes per question

### Math Calculator (55 minutes)
- **38 questions** (30 multiple choice + 8 grid-in)
- **Average:** 1.45 minutes per question

## The 3-Pass Strategy

### Pass 1: The Easy Ones (40% of time)

**Goal:** Answer all questions you can do quickly and confidently

**Criteria for "easy":**
- You immediately know how to solve it
- Takes less than 30 seconds to read and understand
- You're 90%+ confident in your answer

**Mark answers and MOVE ON** — don't second-guess

### Pass 2: The Medium Ones (40% of time)

**Goal:** Tackle questions that require more thought

**Criteria for "medium":**
- You understand what's being asked
- You know the approach but need time to work through it
- Requires calculation or careful reading

**Work efficiently** — if stuck after 1-2 minutes, make educated guess and move to Pass 3

### Pass 3: The Hard Ones (15% of time)

**Goal:** Attempt remaining questions using educated guessing

**Strategy:**
- Use process of elimination
- Make strategic guesses (no penalty for wrong answers!)
- Don't leave ANY blanks

**Reserve 5% of time for review**

## Section-Specific Time Management

### Reading: The Passage Dilemma

**Two approaches — pick what works for YOU:**

**Approach A: Read Then Answer**
- 5 minutes: Read passage carefully
- 8 minutes: Answer all 10-11 questions
- **Best for:** Strong readers who retain details

**Approach B: Skim Then Hunt**
- 2 minutes: Skim passage for main idea
- 11 minutes: Read questions, then find answers in passage
- **Best for:** Those who struggle with long passages

### Writing: Speed is Key

**Target: 8 minutes per passage**
- 2-3 minutes: Read passage
- 5-6 minutes: Answer questions (30-45 seconds each)

**Pro tip:** Grammar questions are FAST — use this to bank time for reading comprehension questions

### Math No-Calculator: Every Second Counts

**Target pace:**

| Questions | Time per Q | Total Time |
|-----------|------------|------------|
| 1-10 (easier) | 1 min | 10 min |
| 11-15 (harder MC) | 1.5 min | 7.5 min |
| 16-20 (grid-in) | 1.5 min | 7.5 min |

**Time saved:** None! This section is tight. Skip hard ones and come back.

### Math Calculator: You Have More Time

**Target pace:**

| Questions | Time per Q | Total Time |
|-----------|------------|------------|
| 1-20 | 1 min | 20 min |
| 21-30 | 1.5 min | 15 min |
| 31-38 | 2 min | 16 min |
| Review | — | 4 min |

**Strategy:** Bank time on easy questions for harder ones at the end

## When to Skip and Come Back

### Skip if:
- You've spent 2× the target time and aren't close to an answer
- You have no idea where to start
- The question makes you anxious (come back with fresh eyes)
- You're in Pass 1 and it's not immediately obvious

### DON'T Skip if:
- You're almost done (finish it!)
- It's the last 5 minutes (guess and move on)
- You've already skipped 5+ questions (try process of elimination)

## Bubble Sheet Strategy

### Option 1: Answer as You Go
**Pros:** Don't forget to bubble; less risk  
**Cons:** Slows you down slightly with constant switching

**Best for:** Those prone to forgetting or making bubbling errors

### Option 2: Bubble by Page
**Pros:** Faster; stay in "question mode"  
**Cons:** Risk of forgetting; could bubble wrong row

**Best for:** Confident test-takers with good focus

**CRITICAL:** If using Option 2, bubble after EVERY passage/page, not at the very end!

## Pacing Checkpoints

Use these to stay on track:

### Reading
- **After 13 min:** Should finish passage 1
- **After 26 min:** Should finish passage 2  
- **After 52 min:** Should finish passage 4
- **Final 13 min:** Passage 5 + review

### Writing
- **After 9 min:** Finish passage 1
- **After 18 min:** Finish passage 2
- **After 27 min:** Finish passage 3
- **Final 8 min:** Passage 4 + quick review

### Math No-Calculator
- **After 10 min:** Finish question 10
- **After 17 min:** Finish question 15
- **Final 8 min:** Questions 16-20

### Math Calculator
- **After 20 min:** Finish question 20
- **After 35 min:** Finish question 30
- **Final 20 min:** Questions 31-38 + review

## What If You're Behind?

### If 5 minutes behind:
- Skip longer/harder questions
- Speed up reading (skim, don't study)
- Accept 90% accuracy instead of 100%

### If 10+ minutes behind:
- Make educated guesses on 3-5 questions
- Focus on your strongest question types
- Ensure you at least attempt every question

## What If You're Ahead?

### DON'T:
❌ Second-guess easy questions (trust your first instinct)  
❌ Overthink (especially on reading — you're probably right)  
❌ Rush through remaining questions (maintain accuracy)

### DO:
✓ Double-check grid-ins (bubbling errors are costly)  
✓ Verify you answered what's asked (not $x$ when they want $2x$)  
✓ Attempt skipped questions with fresh perspective  
✓ Check for careless errors in math

## Practice Test Time Management

**During practice, train like it's the real thing:**

1. **Time yourself strictly** — set timer per section
2. **Mark pacing checkpoints** — note time when you hit them
3. **Track time-per-question** — identify where you're slow
4. **Practice skipping** — get comfortable moving on
5. **Simulate test day** — take full practice test in one sitting

## Common Time Management Mistakes

❌ **Perfectionism** — spending 5 minutes on a 1-point question  
❌ **Reading too carefully** — every word doesn't matter  
❌ **Not skipping** — getting stuck instead of moving on  
❌ **No strategy** — just going in order without pacing plan  
❌ **Panic bubbling** — rushing to fill in at the end  
❌ **Ignoring checkpoints** — not realizing you're behind until too late

## Mental Time Management

**Energy management = Time management**

### Front-load effort:
- First 2 passages: Full focus
- Middle passages: Steady pace  
- Last passage: Second wind (almost done!)

### Take micro-breaks:
- Between passages: 10-second breath
- After hard question: Blink, refocus
- If frustrated: Skip and come back

### Maintain confidence:
- Don't dwell on hard questions
- Trust your preparation  
- Remember: You don't need perfection

## Test Day Time Checklist

**Before each section:**
☐ Note start time on test booklet  
☐ Calculate checkpoint times  
☐ Take a deep breath  
☐ Start with confidence

**During section:**
☐ Check time at each checkpoint  
☐ Skip strategically if behind  
☐ Mark skipped questions clearly  
☐ Bubble carefully (if doing per-page)

**5 minutes remaining:**
☐ Bubble any remaining answers  
☐ Make educated guesses on blanks  
☐ Quick review if time permits

**Final 30 seconds:**
☐ Ensure every question has an answer  
☐ One last check of grid-ins

## The Golden Rules

1. **There is no penalty for guessing** — answer EVERY question
2. **Don't spend 5 minutes to gain 1 point** — skip and come back
3. **Check pacing every 15 minutes** — stay on track
4. **Your first instinct is usually right** — don't over-revise
5. **Confidence is speed** — trust your preparation

**Remember:** The SAT tests how quickly AND accurately you work. Practice both!
`
    }
  });

  // Reading Strategies
  await prisma.topic.update({
    where: { slug: 'reading-strategies' },
    data: {
      textContent: `# Reading Strategies for SAT

## The SAT Reading Section

- **65 minutes, 52 questions**
- **5 passages:** 1 Literature, 2 History/Social Science, 2 Science
- **10-11 questions per passage**
- **Paired passages:** One set (usually History or Science)

## Active Reading Techniques

### Before You Read: Preview

**Spend 30 seconds on:**
1. **Read the blurb** (italicized intro text)
2. **Note the source/date** (historical context matters)
3. **Glance at questions** (know what to look for)

**This preview tells you:**
- Topic and main focus
- Author's likely purpose
- Question types to expect

### As You Read: Annotate

**Mark these as you go:**

**Main ideas:** Underline topic sentences (usually first/last of paragraphs)

**Tone/attitude words:** Circle words showing author's opinion
- "unfortunately," "remarkable," "merely," "crucial"

**Transitions:** Box transition words that signal structure
- "however," "furthermore," "in contrast," "for example"

**Key details:** Star specific data, dates, names, examples

**Confusing parts:** Question mark in margin (come back if needed)

### After Each Paragraph: Pause

**Ask yourself:** "What was the main point of that paragraph?"

**Mental summary:** One sentence max  
**Example:** "Paragraph 2 = scientists discovered the cause"

**This helps with:**
- Big picture questions
- Purpose/function questions  
- Staying focused

## The Two Reading Approaches

### Approach A: Full Read First (Traditional)

**Process:**
1. Read passage carefully (5 min)
2. Answer questions (8 min)

**Best for:**
✓ Strong readers who retain details  
✓ Literature passages (narrative flow matters)  
✓ Those who get distracted hunting for answers

**Keys to success:**
- Read actively with annotations
- Don't zone out  
- Trust your comprehension

### Approach B: Questions First (Strategic)

**Process:**
1. Read question stems (NOT answer choices) (1 min)
2. Skim passage for structure (2 min)
3. Answer line-reference questions first (3 min)
4. Answer general questions (5 min)

**Best for:**
✓ Those who struggle with long passages  
✓ Science passages (fact-heavy)  
✓ When short on time

**Keys to success:**
- Don't get lost in details on skim  
- Mark where line-reference answers are found  
- Piece together main idea from questions

**TRY BOTH in practice to see which works for YOU!**

## Question Type Strategies

### Big Picture Questions

**Question types:**
- "The main purpose of the passage is..."
- "The passage primarily serves to..."
- "Which best describes the overall structure..."

**Strategy:**
- Save for LAST (after reading whole passage)
- Eliminate answers that are too narrow (minor detail)
- Eliminate answers that are too broad (goes beyond scope)
- Your paragraph summaries help here

### Detail Questions

**Question types:**
- "According to the passage..."
- "The author states that..."
- "In lines 23-27, the author mentions..."

**Strategy:**
- Go back to the passage!
- Read 2-3 sentences before and after the line reference
- Answer is stated directly (not inferred)
- Avoid trap answers that use passage words but distort meaning

### Inference Questions

**Question types:**
- "It can reasonably be inferred..."
- "The passage suggests..."
- "The author implies..."

**Strategy:**
- Must be supported by passage (not outside knowledge)
- Usually one step beyond what's directly stated
- Avoid extreme inferences (going too far)
- "Most likely" means 90% sure, not 100%

### Vocabulary in Context

**Question types:**
- "As used in line 42, 'brilliant' most nearly means..."

**Strategy:**
- Read the sentence (and maybe one before/after)
- Substitute each answer choice
- DON'T use dictionary definition — use context!

**Example:**  
"The scientist's approach was **brilliant**, solving what others thought impossible."
- Not "shiny/bright" ✗  
- Yes "exceptionally clever" ✓

### Function/Purpose Questions

**Question types:**
- "The author mentions X in order to..."
- "The example in lines 30-35 serves primarily to..."

**Strategy:**
- Ask: WHY did the author include this?
- Connect to the paragraph's main idea
- Common purposes: support claim, provide example, introduce objection, transition topics

### Evidence Questions (Paired)

**Question types:**
- "Which choice provides the best evidence for the answer to the previous question?"

**Strategy:**

**Method 1: If you're confident in previous answer**
- Find lines that directly support it
- Must explicitly state/imply your answer

**Method 2: If you're unsure about previous answer**
- Check each evidence choice
- See what answer to #X it supports
- Work backwards to verify

### Dual Passage Questions

**Question types:**
- "Both passages..."
- "Unlike Passage 1, Passage 2..."
- "How would the author of Passage 2 respond to lines 15-18 of Passage 1?"

**Strategy:**
- Read Passage 1 completely first
- Answer Passage 1-only questions
- Read Passage 2
- Answer Passage 2-only questions  
- THEN answer comparison questions
- Make chart: What does each author think?

## Passage-Specific Strategies

### Literature/Fiction

**What to track:**
- Characters and relationships
- Setting and mood
- Conflict or tension
- Character development/change
- Narrative perspective (1st person? 3rd?)

**Common questions:**
- Character motivation/feelings
- Tone and mood shifts
- Narrative technique  
- Meaning of descriptions

### History/Social Science

**What to track:**
- Author's argument/claim
- Evidence supporting claim
- Historical context (from blurb)
- Counterarguments addressed

**Common questions:**
- Author's purpose
- Main argument
- How evidence supports claim
- Author's attitude toward topic

### Science

**What to track:**
- Hypothesis/research question
- Experimental methods
- Results/findings
- Conclusions drawn
- Any limitations mentioned

**Common questions:**
- Purpose of experiment
- What results show
- How data supports conclusion
- Comparing two theories

**Pro tip:** Don't worry if you don't understand all science terminology — answers are in the passage!

## Eliminating Wrong Answers

**Wrong answer types:**

### Too Extreme
- Uses words like "always," "never," "only," "all"
- Passages rarely make absolute claims

### Too Narrow
- Focuses on minor detail when question asks about main idea
- Mentions one paragraph when question is about whole passage

### Too Broad  
- Goes beyond passage scope
- Makes claims not supported by text

### Opposite
- Contradicts what passage says
- Common trap on tone questions (positive vs negative)

### Distortion
- Uses words from passage but twists meaning  
- Combines unrelated concepts
- Most tempting wrong answers!

### Not Supported
- Sounds reasonable but isn't stated or implied
- Requires outside knowledge
- Remember: Answer is ALWAYS in the passage

## Common Reading Mistakes

❌ **Using outside knowledge** — only use what's in passage  
❌ **Not going back to passage** — verify before answering  
❌ **Choosing answers with passage words** — look for meaning match, not word match  
❌ **Over-inferring** — answer is usually more straightforward than you think  
❌ **Ignoring line references** — they're there to help you!  
❌ **Rushing the passage** — spending 2 minutes reading, then getting questions wrong

## Difficult Passage Strategies

**If passage is really hard:**

1. **Don't panic** — everyone finds one passage hard
2. **Do line-reference questions first** — you can answer these even if you don't fully understand passage
3. **Save main idea for last** — piece it together from questions
4. **Eliminate obviously wrong answers**  
5. **Make educated guesses** — no penalty!
6. **Move on** — don't let one passage tank your whole score

## Time-Saving Tips

✓ **Read questions first** (just stems, not choices) — know what to look for  
✓ **Do passages in order that works for YOU** — start with easiest passage type  
✓ **Skip and come back** — if a question is taking too long  
✓ **Trust your paragraph summaries** — don't reread entire passage for main idea  
✓ **Don't overthink** — first instinct often correct, especially on tone

## Practice Tips

**To improve reading score:**

1. **Read actively** — practice annotating  
2. **Time yourself** — get used to 13-minute pace  
3. **Review wrong answers** — understand why you missed it  
4. **Read diverse material** — history, science, literature  
5. **Build stamina** — practice full 65-minute sections  
6. **Track patterns** — which question types do you miss?

## The Reading Mindset

**Remember:**
- **Everything you need is in the passage** — no tricks  
- **The answer is provable** — you can point to evidence  
- **Don't fight the passage** — understand author's perspective  
- **You're looking for "best" answer** — not perfect answer  
- **Trust the process** — stick to your strategy

**Final tip:** The SAT Reading isn't testing whether you're "smart." It's testing whether you can carefully read, understand, and analyze a passage. With practice and strategy, anyone can improve!
`
    }
  });

  // Pronoun Usage (different from Pronoun Agreement)
  await prisma.topic.update({
    where: { slug: 'pronoun-usage' },
    data: {
      textContent: `# Pronoun Usage (SAT Writing)

## What is Pronoun Usage?

The SAT tests whether you can:
1. **Match pronouns to their antecedents** (what they refer to)
2. **Use the correct pronoun case** (subject vs object)
3. **Avoid ambiguous or unclear pronoun references**
4. **Use consistent point of view**

## Pronoun-Antecedent Agreement

### Rule: Pronouns must agree in NUMBER

**Singular antecedents = singular pronouns:**

❌ Each student must bring **their** book.  
✓ Each student must bring **his or her** book.  
✓ Students must bring **their** books. (Make both plural)

**Tricky singular words:**
- Each, every, either, neither → SINGULAR
- Everyone, someone, anyone, no one → SINGULAR  
- Each of the students → SINGULAR (focus on "each")

**Example:**

❌ Everyone should do **their** best.  
✓ Everyone should do **his or her** best.  
✓ All students should do **their** best.

### Rule: Pronouns must agree in GENDER

If antecedent is clearly one gender, match it:

✓ "Sarah said **she** would attend."  
❌ "Sarah said **they** would attend." (unless Sarah uses they/them pronouns, which SAT doesn't test)

**For gender-neutral antecedents:**
- Use "his or her" (formal)
- Rewrite to make plural (easier)
- Rewrite to avoid pronoun

## Pronoun Case

### Subject Pronouns (who does the action)

**I, you, he, she, it, we, they, who**

Use when pronoun is:
- The subject: "**She** went to the store."
- After linking verbs (is/was): "It was **she** who called." (formal)

### Object Pronouns (receives the action)

**me, you, him, her, it, us, them, whom**

Use when pronoun is:
- Direct object: "The teacher chose **her**."
- Indirect object: "Give **me** the book."
- Object of preposition: "between you and **me**"

### Possessive Pronouns (shows ownership)

**my, your, his, her, its, our, their** (before noun)  
**mine, yours, his, hers, its, ours, theirs** (standing alone)

✓ "That is **her** book." (before noun)  
✓ "That book is **hers**." (standing alone)

**Common mistake:**

❌ "The team won **it's** championship." (it's = it is)  
✓ "The team won **its** championship." (possessive)

## Compound Subject/Object Errors

**Trick: Remove the other person**

❌ "John and **me** went to the store."  
→ Remove John: "**Me** went to the store." ✗  
✓ "John and **I** went to the store."

❌ "The gift was for Sarah and **I**."  
→ Remove Sarah: "for **I**" ✗  
✓ "The gift was for Sarah and **me**."

**Rule:** Use same pronoun you'd use if person were alone

## Who vs Whom

**Simple trick:**

**Who** = he/she/they (subject)  
**Whom** = him/her/them (object)

**Test by answering the question:**

"**Who/Whom** did you call?"
- Answer: "I called **him**." (object)
- Therefore: "**Whom** did you call?" ✓

"**Who/Whom** called you?"
- Answer: "**He** called me." (subject)
- Therefore: "**Who** called you?" ✓

**Preposition clue:** After prepositions (to, for, with), use **whom**

✓ "To **whom** should I address this?"  
✓ "The person **to whom** I spoke..."

## Ambiguous Pronouns

### Rule: Must be clear what the pronoun refers to

❌ "When Sarah met Emily, **she** was excited."  
(Who was excited? Sarah or Emily? UNCLEAR)

✓ "When Sarah met Emily, **Sarah** was excited."  
✓ "Sarah was excited when she met Emily."

❌ "Remove the old files from the cabinets and shred **them**."  
(Shred the files or the cabinets? UNCLEAR)

✓ "Remove the old files from the cabinets and shred **the files**."

### Vague "this," "that," "which," "it"

❌ "The experiment failed repeatedly, **which** was discouraging."  
(What was discouraging? The failure? The experiment? Unclear)

✓ "The experiment failed repeatedly, **a result that** was discouraging."  
✓ "The repeated failure was discouraging."

## Pronoun Consistency

### Rule: Don't shift perspective unnecessarily

❌ "When **you** study hard, **one** can achieve great results."  
(Shifts from "you" to "one")

✓ "When **you** study hard, **you** can achieve great results."  
✓ "When **one** studies hard, **one** can achieve great results."

### Common shifts to avoid:

**You ↔ One:**  
❌ "If **you** want success, **one** must work hard."  
✓ "If **you** want success, **you** must work hard."

**We ↔ You:**  
❌ "**We** should exercise daily because **you** need to stay healthy."  
✓ "**We** should exercise daily because **we** need to stay healthy."

**They ↔ You:**  
❌ "When **they** face challenges, **you** must persevere."  
✓ "When **you** face challenges, **you** must persevere."

## Reflexive Pronouns

**myself, yourself, himself, herself, itself, ourselves, themselves**

### Correct uses:

**1. Intensive (emphasis):**  
✓ "I **myself** completed the project."

**2. Reflexive (action to self):**  
✓ "She taught **herself** to code."

### Incorrect use:

❌ "The award went to John and **myself**."  
✓ "The award went to John and **me**."

❌ "**Myself** and Sarah organized the event."  
✓ "Sarah and **I** organized the event."

**Rule:** Use reflexive pronouns only when subject and object are the same person

## SAT Question Strategies

### Type 1: Find the Antecedent

**Example:** "Each of the students brought **their/his or her** calculator."

**Strategy:**
1. Find what the pronoun refers to: "Each" (singular)
2. Choose singular pronoun: "his or her"

### Type 2: Check Pronoun Case

**Example:** "Between you and **I/me**, this is difficult."

**Strategy:**
1. Identify function: object of preposition "between"
2. Use object pronoun: "me"

### Type 3: Eliminate Ambiguity

**Example:** "When the coach talked to the player, **he/the coach** was upset."

**Strategy:**
1. Check if "he" could refer to multiple people: YES (coach or player)
2. Must replace with specific noun to clarify

### Type 4: Fix Consistency

**Example:** "When **one/you** travels abroad, **you** learn about other cultures."

**Strategy:**
1. Identify shift: "one" → "you"
2. Make consistent: "When **you** travel abroad, **you** learn..."

## Common SAT Pronoun Errors

❌ **Singular/Plural mismatch**  
"Everyone brought their book" → "Everyone brought his or her book"

❌ **Wrong case**  
"Him and I went" → "He and I went"  
"Between you and I" → "Between you and me"

❌ **Ambiguous reference**  
"Sarah told Maria that she won" → "Sarah told Maria that Sarah won"

❌ **Its vs It's**  
"Its going to rain" → "It's going to rain"  
"The dog wagged it's tail" → "The dog wagged its tail"

❌ **Who vs Whom confusion**  
"Whom is coming?" → "Who is coming?"  
"The person who I met" → "The person whom I met"

❌ **Unnecessary reflexive**  
"Contact John or myself" → "Contact John or me"

## Quick Reference Chart

| If pronoun is... | Use... | Example |
|------------------|--------|---------|
| Subject | I, he, she, we, they, who | **She** called. |
| Object | me, him, her, us, them, whom | Call **her**. |
| After "than" or "as" (subject) | I, he, she | Taller than **I** [am]. |
| After "than" or "as" (object) | me, him, her | Likes her more than [likes] **me**. |
| Possessive (before noun) | my, his, her, our, their, its | **Her** book |
| Possessive (alone) | mine, his, hers, ours, theirs, its | The book is **hers**. |
| Reflexive | myself, himself, herself, etc. | She taught **herself**. |

## Practice Tips

**When you see a pronoun question:**

1. **Find the antecedent** — what does it refer to?
2. **Check agreement** — singular/plural match?
3. **Check case** — subject, object, or possessive?
4. **Check clarity** — is it obvious what it refers to?
5. **Check consistency** — does perspective shift?

**Remember:** If a pronoun is underlined, check ALL these potential errors!
`
    }
  });

  console.log('✅ Added content for 3 more SAT topics (total: 11)\n');
  console.log('Continuing with remaining topics...\n');

  // Enhance some medium-content topics to make them comprehensive
  
  // Functions (expand from 786 chars)
  await prisma.topic.update({
    where: { slug: 'sat-functions' },
    data: {
      textContent: `# Functions (SAT Math)

## What is a Function?

A **function** is a relationship where each input has exactly ONE output.

**Think of it like a machine:**
- You put in a number (input $x$)
- The function processes it  
- You get a result (output $y$ or $f(x)$)

### Function Notation

**$f(x) = 2x + 3$** means:
- Function name: $f$
- Input variable: $x$  
- Rule: Multiply input by 2, then add 3

**Example evaluations:**
- $f(5) = 2(5) + 3 = 13$
- $f(0) = 2(0) + 3 = 3$
- $f(-2) = 2(-2) + 3 = -1$

## Domain and Range

### Domain (inputs)

**All possible $x$-values** that can be used in a function

**Common restrictions:**
- Cannot divide by zero
- Cannot take square root of negative (in real numbers)
- Explicit restrictions stated in problem

**Example 1:** $f(x) = \\frac{1}{x-3}$

Domain: All real numbers EXCEPT $x = 3$ (would make denominator zero)

**Example 2:** $f(x) = \\sqrt{x + 5}$

Domain: $x + 5 \\geq 0$, so $x \\geq -5$

### Range (outputs)

**All possible $y$-values** the function can produce

**Example:** $f(x) = x^2$
- Domain: All real numbers
- Range: $y \\geq 0$ (squares are never negative)

**Example:** $f(x) = -x^2 + 4$
- Domain: All real numbers
- Range: $y \\leq 4$ (parabola opens down, vertex at $y = 4$)

## Evaluating Functions

### Direct Substitution

**Given:** $f(x) = x^2 - 3x + 2$, find $f(4)$

**Solution:** 
$$f(4) = (4)^2 - 3(4) + 2 = 16 - 12 + 2 = 6$$

### Substituting Expressions

**Given:** $f(x) = x^2 - 3x + 2$, find $f(a + 1)$

**Solution:**
$$f(a+1) = (a+1)^2 - 3(a+1) + 2$$
$$= a^2 + 2a + 1 - 3a - 3 + 2$$
$$= a^2 - a$$

**Key:** Replace EVERY $x$ with $(a+1)$

## Composite Functions

**Notation:** $(f \\circ g)(x) = f(g(x))$

"$f$ composed with $g$" means: do $g$ first, then do $f$ to the result

### Example

**Given:** $f(x) = 2x + 1$ and $g(x) = x^2$

**Find** $f(g(3))$:

**Step 1:** Find $g(3)$  
$$g(3) = 3^2 = 9$$

**Step 2:** Find $f(9)$  
$$f(9) = 2(9) + 1 = 19$$

**Therefore:** $f(g(3)) = 19$

### Order Matters!

**Find** $g(f(3))$:

**Step 1:** Find $f(3)$  
$$f(3) = 2(3) + 1 = 7$$

**Step 2:** Find $g(7)$  
$$g(7) = 7^2 = 49$$

**Therefore:** $g(f(3)) = 49 \\neq f(g(3))$

**Important:** $f(g(x)) \\neq g(f(x))$ in general!

## Interpreting Function Graphs

### Reading Values from Graphs

**To find $f(3)$:**
1. Find $x = 3$ on horizontal axis
2. Go up/down to the curve
3. Read the $y$-value

**To find when $f(x) = 5$:**
1. Find $y = 5$ on vertical axis
2. Go left/right to the curve
3. Read all $x$-values where curve crosses $y = 5$

### Key Features

**x-intercepts (zeros):** Where graph crosses x-axis  
→ $f(x) = 0$

**y-intercept:** Where graph crosses y-axis  
→ $f(0)$

**Maximum:** Highest point (vertex of downward parabola)

**Minimum:** Lowest point (vertex of upward parabola)

**Increasing:** Graph goes up as you move right  
**Decreasing:** Graph goes down as you move right

## Function Transformations

### Vertical Shifts

**$f(x) + k$:** Shift UP by $k$ units  
**$f(x) - k$:** Shift DOWN by $k$ units

**Example:** If $f(x) = x^2$, then:
- $f(x) + 3 = x^2 + 3$ shifts parabola up 3 units

### Horizontal Shifts

**$f(x - h)$:** Shift RIGHT by $h$ units (opposite of what you'd think!)  
**$f(x + h)$:** Shift LEFT by $h$ units

**Example:** If $f(x) = x^2$, then:
- $f(x - 2) = (x-2)^2$ shifts parabola right 2 units

### Reflections

**$-f(x)$:** Reflect over x-axis (flip upside down)  
**$f(-x)$:** Reflect over y-axis (flip left-right)

### Stretches

**$a \\cdot f(x)$ where $a > 1$:** Vertical stretch (taller)  
**$a \\cdot f(x)$ where $0 < a < 1$:** Vertical compression (shorter)

## Word Problems with Functions

### Example: Cost Function

**A gym charges a $50 membership fee plus $30 per month.**

**Function:** $C(m) = 50 + 30m$
- $C$ = total cost
- $m$ = number of months

**Questions:**
- $C(6) = 50 + 30(6) = 230$ → Cost for 6 months
- If $C(m) = 200$, solve: $50 + 30m = 200$ → $m = 5$ months

### Example: Distance Function

**A car travels at 60 mph for $t$ hours.**

**Function:** $d(t) = 60t$

**Questions:**
- $d(3) = 60(3) = 180$ → Distance after 3 hours
- If $d(t) = 240$, solve: $60t = 240$ → $t = 4$ hours

## SAT Question Types

### Type 1: Evaluate $f(a)$

**Strategy:** Substitute $a$ for every $x$ and simplify

### Type 2: Solve $f(x) = k$

**Strategy:** Set function equal to $k$ and solve for $x$

**Example:** If $f(x) = 2x - 7$ and $f(x) = 11$:
$$2x - 7 = 11$$
$$2x = 18$$
$$x = 9$$

### Type 3: Find $f(g(x))$ or $g(f(x))$

**Strategy:** Work from inside out

### Type 4: Interpret Graphs

**Strategy:**
- Trace with your finger
- Check $x$-value → $y$-value
- Verify answer makes sense

### Type 5: Domain/Range from Graph or Equation

**Strategy:**
- Domain: Look at $x$-values covered
- Range: Look at $y$-values achieved
- Check for restrictions (division by zero, square roots)

## Common Mistakes

❌ **Confusing $f(x+2)$ with $f(x) + 2$**  
- $f(x+2)$ shifts graph LEFT 2  
- $f(x) + 2$ shifts graph UP 2

❌ **Wrong order in composition**  
- $f(g(x))$ means do $g$ FIRST  
- Not the same as $g(f(x))$!

❌ **Not using parentheses**  
- $f(3+1) = f(4)$, not $f(3) + 1$

❌ **Forgetting domain restrictions**  
- $\\frac{1}{x}$ has no value at $x = 0$

❌ **Misreading graphs**  
- Check which axis is which  
- Verify scale (not always by 1's)

## Quick Tips for SAT

✓ **Function notation is just substitution** — replace $x$ with whatever is in parentheses  
✓ **Graphs tell you everything** — use them to find values quickly  
✓ **Order matters in composition** — inside function first, outside function second  
✓ **Domain = possible inputs** → check what $x$ CAN'T be  
✓ **Range = possible outputs** → check what $y$ values are achieved  
✓ **Transformations stack** — multiple shifts/stretches apply in sequence

## Practice Approach

1. **Identify function type** (linear, quadratic, etc.)
2. **Check what's being asked** (evaluate, solve, compose, transform)
3. **Use appropriate strategy**  
4. **Double-check your substitution** (most common error)
5. **Verify answer makes sense** (domain/range, reasonableness)
`
    }
  });

  console.log('✅ Completed batch 2 - filled in 4 SAT topics\n');
  console.log('📊 Total SAT topics with comprehensive content: 15+\n');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
