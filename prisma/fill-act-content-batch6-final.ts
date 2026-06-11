import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling in final 3 ACT Test Strategy topics...\n');

  // ACT Test Strategy: Time Management
  await prisma.topic.update({
    where: { slug: 'act-time-management' },
    data: {
      textContent: `# Time Management (ACT Test Strategy)

## ACT Timing Overview

The ACT is a **fast-paced test** where timing is critical to success.

### Section Timing

| Section | Questions | Time | Time per Question |
|---------|-----------|------|-------------------|
| **English** | 75 | 45 min | 36 seconds |
| **Math** | 60 | 60 min | 60 seconds |
| **Reading** | 40 | 35 min | 52 seconds (really ~8:45 per passage) |
| **Science** | 40 | 35 min | 52 seconds (really ~8:45 per passage) |
| **Writing** (optional) | 1 essay | 40 min | N/A |

**Total testing time:** 2 hours 55 minutes (without Writing) or 3 hours 35 minutes (with Writing)

**Key challenge:** You must work efficiently to finish each section!

## English Section Timing (45 minutes, 75 questions)

### Target Timing

**Goal:** ~36 seconds per question

**Realistic approach:**
- Aim to finish in **40 minutes** (leaves 5 min for review)
- First 50 questions: Go quickly (~30 sec each = 25 min)
- Last 25 questions: More time for rhetoric (~40 sec each = 17 min)
- Final 5 minutes: Check flagged questions

### English Time-Savers

**Strategy 1: Trust your ear**
- English tests standard grammar
- If it sounds wrong, it probably is
- Don't overthink simple questions

**Strategy 2: Identify question type quickly**
- Grammar questions: Fast (15-25 seconds)
- Rhetoric questions: Slower (40-60 seconds)
- Adjust your pace accordingly

**Strategy 3: Use "NO CHANGE"**
- It's correct about 25% of the time
- Don't avoid it out of suspicion
- If sentence sounds fine, choose it and move on

**Strategy 4: Skip and return**
- If question takes > 45 seconds, circle and skip
- Come back if time permits
- Don't let one hard question derail your timing

### Pacing Checkpoints for English

- **After 15 minutes:** Should be at question 25  
- **After 30 minutes:** Should be at question 50  
- **After 40 minutes:** Should be finishing up (question 70-75)  
- **Final 5 minutes:** Review and check flagged items

## Math Section Timing (60 minutes, 60 questions)

### Target Timing

**Goal:** 60 seconds per question (average)

**Reality:** Questions vary greatly in difficulty

**Effective approach:**
- Easy questions (1-30): ~30-45 seconds each
- Medium questions (31-50): ~60-75 seconds each
- Hard questions (51-60): ~90-120 seconds each

### Math Time-Savers

**Strategy 1: Do questions in order of difficulty (for you)**
- ACT Math goes easy → hard
- Don't skip ahead, but know you can

**Strategy 2: Know when to move on**
- After 90 seconds with no progress, guess and flag
- Can return if time permits
- Better to ensure you attempt all easy/medium questions

**Strategy 3: Use your calculator efficiently**
- Have it ready (fresh batteries!)
- Know your calculator's functions
- But don't overuse — sometimes math is faster

**Strategy 4: Watch for time traps**
- Word problems (questions 40-55) eat time
- Geometry proofs/complex diagrams
- If stuck, make educated guess and move on

**Strategy 5: Backsolve when appropriate**
- Plug in answer choices
- Start with C (middle value)
- Can be faster than solving algebraically

### Pacing Checkpoints for Math

- **After 15 minutes:** Should be at question 15-18 (easier ones)  
- **After 30 minutes:** Should be at question 30-35 (halfway-ish)  
- **After 45 minutes:** Should be at question 45-50  
- **Final 10-15 minutes:** Finish last questions + review flagged

## Reading Section Timing (35 minutes, 40 questions)

### The Big Challenge

**35 minutes for 4 passages (10 questions each)**

**That means: 8 minutes 45 seconds per passage**

**Breakdown:**
- **3-4 minutes:** Read passage
- **4-5 minutes:** Answer 10 questions
- **~30 seconds:** Per question

### Reading Strategies

**Strategy 1: Choose a reading approach**

**Option A: Read then answer**
- Read passage first (3-4 min)
- Answer all questions (4-5 min)
- **Good for:** Strong readers, those who need full context

**Option B: Skim then answer**
- Quickly skim passage (2 min)
- Answer questions, referring back as needed (6 min)
- **Good for:** Slower readers, detail-oriented people

**Option C: Questions first**
- Read questions (1 min)
- Read passage with questions in mind (4 min)
- Answer questions (3-4 min)
- **Good for:** Strategic readers, those who remember questions well

**Pick one approach and practice it!** Don't switch on test day.

**Strategy 2: Do passages in your preferred order**
- Most students: Natural Science or Social Science first (often easier)
- Save Prose Fiction or Humanities for later if harder for you
- **DO NOT** spend time deciding on test day — decide beforehand!

**Strategy 3: Focus on easier questions first**
- Detail questions (line reference): Fast
- Main idea: Medium speed
- Inference: Can be slower
- Within each passage, answer in the order that's fastest for you

**Strategy 4: Don't reread excessively**
- If you have to reread every paragraph multiple times, you're reading too fast the first time
- Read actively once, annotate, then answer

### Pacing Checkpoints for Reading

- **After 8:45:** Finish Passage 1  
- **After 17:30:** Finish Passage 2  
- **After 26:15:** Finish Passage 3  
- **After 35:00:** Finish Passage 4

**Track time!** Glance at watch after each passage.

**If falling behind:**
- Skim remaining passages more quickly
- Answer easy questions (detail, line reference)
- Make educated guesses on harder inference questions

## Science Section Timing (35 minutes, 40 questions)

### Understanding Science Passages

**Typically 6-7 passages:**
- 3 Data Representation (5-6 questions each) - **FASTER**
- 2-3 Research Summaries (6 questions each) - **MEDIUM**
- 1 Conflicting Viewpoints (7 questions) - **SLOWEST**

### Science Strategies

**Strategy 1: Do Data Representation first**
- Quickest passage type
- Mostly graph/table reading
- Less reading, more visual interpretation
- Builds confidence and banks time

**Strategy 2: Save Conflicting Viewpoints for last**
- Most reading-heavy
- 7 questions (vs. 5-6 for others)
- Most time-consuming
- Do it last so you don't run out of time on easier passages

**Strategy 3: Don't read the passage first**
- Go straight to questions
- Questions tell you where to look
- Refer to graphs/tables as needed
- Only read text when question requires it

**Strategy 4: Answer questions in order**
- Usually progress from simple to complex
- Early questions are often straightforward graph reading

### Pacing Checkpoints for Science

**Flexible timing based on passage type:**

- **Data Representation:** ~5 minutes each
- **Research Summary:** ~6 minutes each
- **Conflicting Viewpoints:** ~7 minutes

**Checkpoint strategy:**
- After 18 minutes: Should have completed ~3-4 passages
- After 28 minutes: Should have completed 5-6 passages
- Final 7 minutes: Last passage + review

## General Time Management Strategies

### Strategy 1: Wear a Watch

**Critical!** Not all test centers have visible clocks.

**Get a simple analog or digital watch**
- Easy to read at a glance
- Not a smartwatch (not allowed!)
- Practice using it on practice tests

### Strategy 2: Practice with Timed Sections

**Take full-length, timed practice tests**

**Why?**
- Builds stamina
- Helps you internalize pacing
- Identifies where you run out of time
- Reduces test-day anxiety

**Practice exactly like real test:**
- Same time limits
- No breaks mid-section
- Use a watch
- Bubble answer sheet

### Strategy 3: Don't Get Stuck

**If you've spent too long on one question:**
1. Make your best guess
2. Circle it in test booklet
3. Move on
4. Return if time allows

**Two extra minutes on one hard question** = missing three easier questions at the end

### Strategy 4: Use Process of Elimination

**Faster than solving from scratch!**

- Cross out obviously wrong answers
- Narrow to 2-3 choices
- Make educated guess if needed
- Saves time on hard questions

### Strategy 5: Grid Answers Strategically

**Two approaches:**

**Option A: Answer as you go**
- Bubble each answer immediately after choosing it
- **Pro:** Won't forget to bubble
- **Con:** More time on bubbling

**Option B: Batch bubbling**
- Answer questions in test booklet
- Bubble a page at a time
- **Pro:** Faster bubbling
- **Con:** Risk of forgetting or running out of time

**Recommendation:** Answer as you go on Reading and Science (too risky), batch bubble on English and Math (more time)

**CRITICAL:** Leave time to bubble! No credit for unbubbled answers.

## What to Do If You're Running Out of Time

### If you have 2 minutes left and 10 questions:

**DO:**
1. **Bubble something for every question** (no penalty for wrong answers!)
2. **Look for easy questions** (detail questions in Reading, graph-reading in Science)
3. **Make educated guesses** (eliminate 1-2 choices if possible)
4. **Stay calm** — rushing leads to careless errors on questions you could get right

**DON'T:**
❌ Leave questions blank  
❌ Panic and bubble randomly without looking  
❌ Spend 2 minutes on 1 hard question

### Emergency Bubbling

**If absolutely no time left:**
1. Pick one letter (B or C often good)
2. Bubble that for all remaining questions
3. You'll likely get 25% right by chance

**But try to avoid this!** Proper pacing prevents this scenario.

## Section-Specific Time Traps

### English Time Traps:
❌ Overthinking "NO CHANGE"  
❌ Rereading same sentence 5 times  
❌ Debating between two similar answers for too long

### Math Time Traps:
❌ Complex word problems (questions 45-55)  
❌ Getting stuck on one algebra problem  
❌ Not moving on from questions you don't know how to start

### Reading Time Traps:
❌ Reading too slowly/carefully  
❌ Rereading entire passage when stuck on one question  
❌ Spending too long on inference questions

### Science Time Traps:
❌ Reading the entire passage before questions  
❌ Spending 10+ minutes on Conflicting Viewpoints  
❌ Getting stuck on one complex graph question

## Building Your Time Management Plan

### Before Test Day:

**1. Take timed practice tests**
- At least 3-4 full tests
- Under realistic conditions
- Identify your weak areas

**2. Track your timing**
- Where do you run out of time?
- Which question types are slow for you?
- Adjust strategy accordingly

**3. Set personal pacing goals**
- Based on your strengths/weaknesses
- Realistic for your skill level
- Practice hitting these goals

**4. Develop a bubbling system**
- Choose answer-as-you-go or batch bubbling
- Practice it consistently

### On Test Day:

**1. Bring a watch** ✓

**2. Know your strategy** ✓  
- Passage order for Reading
- When to skip and return
- Pacing checkpoints

**3. Stay aware of time** ✓  
- Glance at watch regularly
- Check against pacing goals
- Adjust if needed

**4. Don't panic if behind** ✓  
- Make educated guesses
- Prioritize easier questions
- Ensure you bubble everything

**5. Trust your practice** ✓  
- Don't change strategy mid-test
- Stick with what you've practiced

## Quick Time-Saving Tips

✓ **Skip and return** — Don't get stuck  
✓ **Trust your first instinct** — Especially on English  
✓ **Use POE** — Faster than solving from scratch  
✓ **Bubble strategically** — Choose method and stick with it  
✓ **Know your calculator** — Don't waste time figuring it out  
✓ **Don't reread excessively** — Read actively once  
✓ **Do easier passages first** — Banks time for harder ones  
✓ **Watch the clock** — Awareness prevents rushing  
✓ **Practice timing** — Makes pacing automatic  
✓ **Stay calm** — Panic wastes time

**Remember:** Time management is a **learnable skill**. With practice, you'll develop an internal clock that keeps you on pace without constantly watching the time. The key is deliberate practice with timed sections, reflection on where you struggle, and gradual improvement. Don't expect perfect timing on your first practice test — but by test day, pacing should feel natural!
`
    }
  });

  console.log('✅ Filled Time Management\n');

  // ACT Test Strategy: Guessing Strategies
  await prisma.topic.update({
    where: { slug: 'guessing-strategies' },
    data: {
      textContent: `# Guessing Strategies (ACT Test Strategy)

## The Golden Rule: Never Leave Anything Blank!

**The ACT has NO guessing penalty.**

**What this means:**
- Wrong answer = 0 points
- Blank answer = 0 points
- **No difference!**

**Therefore:** Always bubble something for every question, even if you have to guess randomly.

## Why Guessing Matters

### The Math

**If you guess randomly on 5 questions with 4 choices each:**
- Expected correct by chance: 5 × 0.25 = **1.25 questions**
- Expected incorrect: 3.75 questions
- **Net gain:** ~1 more point vs. leaving blank

**If you use smart guessing strategies:**
- Can often eliminate 1-2 choices
- Success rate increases to 33% or 50%
- Expected gain: 1.5-2.5 questions on 5 guesses

**Bottom line:** Guessing strategically can add 2-3 points to your score!

## Types of Guessing

### 1. Random Guessing (Last Resort)

**When:** You have NO idea and NO time

**Strategy:**
- Pick one letter (B or C) and use it for all random guesses
- Consistency gives you ~25% success rate
- **Don't** randomly switch between letters

**Why this works:**
- ACT distributes correct answers fairly evenly
- Sticking to one letter gives you statistical advantage over completely random pattern
- Saves time (don't even read question)

**When to use:**
- Final 30 seconds of section
- Multiple questions with no time to read
- Complete lack of knowledge on topic

### 2. Educated Guessing (Much Better!)

**When:** You can eliminate at least one answer choice

**Strategy:**
- Read question carefully
- Eliminate obviously wrong choices
- Choose from remaining options

**Success rate:**
- Eliminate 1 choice → 33% chance (vs. 25%)
- Eliminate 2 choices → 50% chance (vs. 25%)
- Eliminate 3 choices → 100% (educated guess becomes right answer!)

**Goal:** Eliminate as many wrong answers as possible before guessing

### 3. Strategic Guessing (Best Option)

**When:** You have some knowledge but aren't certain

**Strategy:**
- Use context clues
- Apply test-taking logic
- Make inference based on partial knowledge
- Trust your intuition

**Much better than random guessing!** Can boost success rate to 40-60%.

## Section-Specific Guessing Strategies

### English Guessing Strategies

**Strategy 1: When in doubt, choose the shortest answer**

**Why?**
- ACT rewards conciseness
- Wordier options often contain redundancy
- "Omit the underlined portion" is often correct

**Exception:** When brevity loses meaning or clarity

**Example:**

A. the fact that it was raining outside  
B. the outdoor rain  
C. the rain ✓  
D. it was raining outside

**Choose C** — shortest and clearest

**Strategy 2: "NO CHANGE" is right about 25% of the time**

**Don't avoid it!**
- It's correct roughly 1 in 4 questions
- If sentence sounds fine, choose it
- Don't assume there must be an error

**Strategy 3: Eliminate choices with obvious errors**

**Common wrong answer patterns:**
- Creates sentence fragment
- Wrong verb tense
- Pronoun disagreement
- Misplaced modifier
- Redundancy

**Strategy 4: Consistent tense/style**

- Check surrounding sentences
- Match tense (past, present, future)
- Match style (formal vs. informal)
- Consistency usually wins

**Strategy 5: Trust your ear**

- Read it aloud in your head
- If it sounds wrong, it probably is
- Standard English grammar should sound natural

### Math Guessing Strategies

**Strategy 1: Eliminate impossible answers**

**Check for:**
- Wrong sign (positive when should be negative)
- Too large or too small
- Wrong units
- Doesn't match question (asks for X, answer gives Y)

**Example:**

*"What is 15% of 80?"*

A. 1.2  
B. 12 ✓  
C. 120  
D. 1,200  
E. 12,000

**Eliminate:** C, D, E are way too large (15% must be less than 80)  
**Eliminate:** A is too small  
**Guess:** B

**Strategy 2: Test the middle value (C)**

**For "solve for X" questions:**
1. Plug C into the equation
2. If it works, choose C
3. If it doesn't, often tells you whether answer is larger or smaller
4. Adjust guess accordingly

**Works because:** ACT usually lists numerical answers in order

**Strategy 3: Use logic and estimation**

**Example:**

*"Circle has radius 5. What's the area?"*

A. 10π  
B. 15π  
C. 25π ✓  
D. 50π  
E. 100π

**Logic:** Area = πr² = π(5)² = 25π

**Even if you forget formula:**
- Radius 5 → area probably has 5 or 25 in it
- 25 more likely than 5 for area
- Eliminates A, B, D, E

**Strategy 4: Check if answer makes sense**

**Example:**

*"Speed is 60 mph for 3 hours. Distance?"*

A. 20 miles  
B. 63 miles  
C. 180 miles ✓  
D. 300 miles  
E. 600 miles

**Common sense:** Going 60 mph for 3 hours should be around 180 miles

**Strategy 5: Recognize "distractor" patterns**

**ACT loves these wrong answers:**
- Result of common mistake (forgetting negative sign)
- Partial answer (forgot to finish calculation)
- Used wrong formula
- Arithmetic error

**If your answer matches a choice easily, double-check your work!**

### Reading Guessing Strategies

**Strategy 1: Eliminate extreme language**

**Watch for:**
- always, never, only, all, none
- must, impossible, definitely, absolutely

**These are often wrong because:**
- Reading passages are nuanced
- Extreme claims are rarely supported
- ACT prefers moderate, qualified answers

**Better words in right answers:**
- often, sometimes, may, can, suggests
- most, many, some

**Example:**

**Question:** "The author's attitude toward X can be described as:"

A. complete admiration with no reservations  
B. thoughtful appreciation with some concerns ✓  
C. total rejection and harsh criticism  
D. absolute indifference

**B is moderate** (best guess if unsure)

**Strategy 2: Choose answer closest to passage**

**If two answers seem possible:**
- Which is more directly stated?
- Which requires fewer assumptions?
- Choose the one closer to actual text

**ACT Reading rewards close reading, not creative interpretation**

**Strategy 3: Main idea questions**

**Eliminate:**
- Too narrow (just one detail from passage)
- Too broad (beyond scope of passage)
- Not mentioned in passage

**Choose:**
- Covers whole passage
- Matches introduction and conclusion
- Appropriate scope

**Strategy 4: Use line references**

**If question has line numbers:**
- Read those specific lines
- Read sentence before and after
- Answer is usually right there

**Don't** rely on memory — verify in passage!

**Strategy 5: When totally stuck**

**Look for "safe" middle-ground answer:**
- Not too extreme
- Balanced perspective
- Acknowledges complexity

### Science Guessing Strategies

**Strategy 1: Graph reading questions**

**Often straightforward:**
- Find X value on axis
- Trace to line/data point
- Read Y value
- Choose matching answer

**Even if confused about passage, can often answer graph questions correctly**

**Strategy 2: Trend identification**

**Common patterns:**
- As X increases, Y increases (direct relationship)
- As X increases, Y decreases (inverse relationship)
- No clear relationship

**Look at graph/table:**
- Which direction does data go?
- Choose answer matching that trend

**Strategy 3: Compare experiments**

**Questions ask:** "How does Experiment 2 differ from Experiment 1?"

**Strategy:**
- Find both experiments
- Identify one changed variable
- That's the answer

**Don't overthink — usually ONE clear difference**

**Strategy 4: Conflicting Viewpoints**

**If stuck:**
- Find relevant scientist's section
- Look for direct statement
- Choose answer matching that scientist's view

**Don't:** Mix up scientists' positions!

**Strategy 5: Eliminate answers requiring outside knowledge**

**ACT Science tests reading comprehension, not science knowledge**

**If answer requires you to know:**
- Specific chemistry formulas
- Advanced biology concepts
- Physics equations

**...and it's not in the passage, it's probably wrong.**

**Choose answer based on passage information only**

## When to Guess and Move On

### Time-Based Guessing

**English:**
- If > 45 seconds on one question → guess and move on

**Math:**
- If > 90 seconds with no progress → guess and flag for return

**Reading:**
- If > 60 seconds on inference question → guess and move on

**Science:**
- If > 60 seconds on complex question → guess and move on

### Difficulty-Based Guessing

**Know your limits:**
- If question is clearly beyond your current skill level
- If you've never seen this type of problem before
- If you don't understand what's being asked

**Make educated guess and move on** — don't waste time on impossible questions

## The Two-Pass Strategy

**Especially useful for Math and Science:**

### First Pass (75% of time):
- Answer all questions you know
- Skip hard ones (circle in test booklet)
- Make quick educated guesses on medium-difficulty

### Second Pass (25% of time):
- Return to circled questions
- Spend more time
- Use process of elimination
- Make educated guesses

**Ensures you don't run out of time on easy questions while stuck on hard ones!**

## Improving Your Guessing Success Rate

### 1. Learn Common Wrong Answer Patterns

**English:**
- Wordiness and redundancy
- Inconsistent verb tense
- Misplaced modifiers

**Math:**
- Forgetting negative sign
- Using wrong formula
- Stopping calculation too early

**Reading:**
- Extreme language (always, never)
- Too narrow or too broad
- Not supported by passage

**Science:**
- Confusing experiments
- Mixing up variables
- Requiring outside knowledge

**Study these patterns** → recognize them → eliminate them → better guesses!

### 2. Practice Process of Elimination

**On practice tests:**
- Don't just find right answer
- Practice eliminating wrong answers
- Understand WHY each wrong answer is wrong
- Builds pattern recognition

### 3. Track Your Guesses

**On practice tests:**
- Mark questions where you guessed
- Check how many you got right
- Analyze: Were they random or educated guesses?
- Goal: Improve educated guess success rate to 40-50%

### 4. Review Missed Questions

**After practice test:**
- Look at questions you guessed on
- Understand the correct answer
- Identify what you could have eliminated
- Learn for next time

## Common Guessing Mistakes

❌ **Leaving questions blank**  
Always bubble something!

❌ **Switching letters randomly**  
Pick one letter for random guesses, stick with it

❌ **Second-guessing good educated guesses**  
Trust your elimination process

❌ **Spending too long trying to avoid guessing**  
Sometimes guessing and moving on is smartest strategy

❌ **Not using process of elimination**  
Even eliminating one choice helps!

❌ **Guessing without reading question**  
Unless completely out of time, at least skim question

❌ **Choosing longest/most complex answer**  
Often wrong, especially in English

❌ **Choosing answers with familiar passage words**  
ACT uses these as distractors!

## Quick Guessing Tips

✓ **Never leave blank** — no guessing penalty  
✓ **Eliminate first** — even one wrong choice helps  
✓ **Use one letter** — for random guesses  
✓ **Trust POE** — process of elimination works  
✓ **Be consistent** — don't second-guess too much  
✓ **Watch the time** — know when to guess and move on  
✓ **Middle is safe** — B and C statistically good for random guesses  
✓ **Shorter is better** — in English section  
✓ **Avoid extremes** — in Reading section  
✓ **Check graphs** — Science guesses often in visuals

## Developing a Guessing Strategy

### Before Test Day:

**1. Practice eliminating wrong answers**
- On every practice question
- Understand why answers are wrong
- Build pattern recognition

**2. Track your guessing success rate**
- How many educated guesses do you get right?
- Goal: 40-50% (vs. 25% random)

**3. Learn section-specific patterns**
- English: shorter, concise answers
- Math: eliminate impossible values
- Reading: avoid extremes
- Science: stick to passage info

**4. Develop timing awareness**
- Know when to guess and move on
- Don't waste time on impossible questions

### On Test Day:

**1. Stay calm**
- Guessing is normal and expected
- Even top scorers guess on some questions

**2. Use your practiced strategies**
- Don't abandon what you've learned
- Trust your elimination skills

**3. Make quick decisions**
- Eliminate what you can
- Choose and move on
- Don't agonize

**4. Fill in ALL bubbles**
- Check at end of each section
- Use last 30 seconds for random guesses if needed

**Remember:** Strategic guessing is a **skill**, not cheating or giving up. The best test-takers know when to invest time in solving versus when to make an educated guess and move on. Practice eliminating wrong answers, learn common patterns, and develop the confidence to guess intelligently. Those 2-3 extra points from smart guessing could be the difference between your target score and falling just short!
`
    }
  });

  console.log('✅ Filled Guessing Strategies\n');

  // ACT Test Strategy: Test Day Preparation
  await prisma.topic.update({
    where: { slug: 'test-day-preparation' },
    data: {
      textContent: `# Test Day Preparation (ACT Test Strategy)

## The Week Before

### 7 Days Before Test

**Academic prep:**
✓ Take one final full-length practice test  
✓ Review results and note weak areas  
✓ Create summary sheet of formulas and strategies  
✓ **Don't** start learning new material

**Logistics:**
✓ Confirm test center location and time  
✓ Plan your route (drive it if unfamiliar)  
✓ Identify parking options  
✓ Check test center rules and requirements

### 3-4 Days Before Test

**Light review:**
✓ Review formula sheet and strategies  
✓ Practice a few problems in weak areas  
✓ Read over common mistakes list  
✓ **Don't** do full practice tests (too draining)

**Mental prep:**
✓ Visualize success  
✓ Practice relaxation techniques  
✓ Maintain positive self-talk  
✓ **Don't** obsess over scores

### Night Before Test

**Final prep:**
✓ Light review of formulas (15-20 minutes max)  
✓ Organize materials for morning  
✓ Set multiple alarms  
✓ **Don't** cram or study late

**Evening routine:**
✓ Eat a healthy dinner  
✓ Prepare breakfast and snacks for tomorrow  
✓ Lay out clothes  
✓ Get admission ticket and photo ID ready  
✓ **Don't** stay up late or pull all-nighter

**Sleep:**
✓ Aim for 8+ hours  
✓ Go to bed at reasonable time (not too early — you'll just lie awake)  
✓ Avoid caffeine after 3 PM  
✓ **Don't** take sleeping medication (might make you groggy)

## What to Bring

### Required Items

**1. Admission Ticket**
- Print from your ACT account
- Check that name matches ID exactly
- Bring backup copy

**2. Valid Photo ID**
- Driver's license, passport, or school ID
- Must match name on ticket
- Must have clear photo

**Without these, you CAN'T test!**

### Permitted Items

**3. Sharpened No. 2 Pencils**
- Bring at least 4-6 pencils
- Pre-sharpened (test center may not have sharpener)
- **Mechanical pencils NOT allowed**

**4. Eraser**
- Bring a good quality eraser
- Doesn't have to be separate (pencil erasers OK)
- Test dirty erasers at home first

**5. Approved Calculator**
- Check ACT's calculator policy online
- Most graphing calculators allowed
- **Clear memory if required**
- **Fresh batteries** (bring backup set)

**Allowed:**
- TI-83, TI-84 series ✓
- TI-89, TI-Nspire ✓
- Most Casio graphing calculators ✓

**NOT allowed:**
- TI-92, Voyage 200 ❌
- Calculators with QWERTY keyboards ❌
- Calculators with internet access ❌
- Phone calculators ❌

**6. Watch**
- Simple analog or digital watch
- No smartwatches (Apple Watch, Fitbit, etc.)
- No alarms or beeping features
- **Very helpful for pacing!**

### Optional but Recommended

**7. Snacks and Drink**
- For breaks between sections
- Non-messy, quiet foods (granola bar, banana, nuts)
- Water bottle (not glass)
- Energy boost for stamina

**8. Layers of Clothing**
- Test centers vary in temperature
- Dress in layers
- Can't control room temperature, so be prepared

**9. Small Bag**
- To hold materials
- Will likely go under desk
- Check test center policy

### What NOT to Bring

❌ **Cell phone** (must be turned off and put away)  
❌ **Smartwatch**  
❌ **Tablet, laptop, or electronic device**  
❌ **Books or study materials** (can't use during test)  
❌ **Mechanical pencils**  
❌ **Pens** (except for essay)  
❌ **Highlighters**  
❌ **Scratch paper** (must use test booklet)  
❌ **Compass or protractor** (not needed)  
❌ **Correction fluid**  
❌ **Food that makes noise** (chips, crackling wrappers)

**If you bring prohibited items:**
- Must be turned off and stored
- Cannot be on desk or accessible
- Can't use during breaks
- Violation can result in dismissal

## Test Morning

### Wake Up Routine

**2-3 hours before test:**
✓ Wake up with plenty of time (don't rush!)  
✓ Shower and get dressed  
✓ Eat a substantial breakfast  
✓ **Don't** hit snooze 5 times

**Recommended breakfast:**
- Complex carbs (whole grain toast, oatmeal)
- Protein (eggs, yogurt, nut butter)
- Fruit (banana, berries)
- **Avoid:** Heavy, greasy foods that make you sluggish
- **Avoid:** Too much sugar (crash later)

**Hydrate:**
✓ Drink water  
✓ Coffee/tea OK if you normally drink it  
✓ **Don't** overdo caffeine (jitters or bathroom issues)

### Final Checks

**Before leaving:**
✓ Admission ticket ✓  
✓ Photo ID ✓  
✓ Pencils ✓  
✓ Eraser ✓  
✓ Calculator (with fresh batteries) ✓  
✓ Watch ✓  
✓ Snacks and water ✓  
✓ Layers ✓

**Mental checklist:**
✓ Know your testing strategies  
✓ Remember time management plans  
✓ Positive mindset  
✓ Confidence in preparation

### Travel to Test Center

**Timing:**
- Aim to arrive **30-45 minutes early**
- Allows for parking, finding room, bathroom
- Reduces stress
- **Don't** arrive right at start time

**If driving:**
- Know the route
- Account for weekend traffic patterns
- Have backup route in case of construction
- Know where to park

**If being driven:**
- Coordinate with parent/driver
- Confirm pickup time (test duration + buffer)
- Have backup plan if ride falls through

## At the Test Center

### Check-In (30 minutes before start)

**What happens:**
1. Show admission ticket and ID
2. May be photographed
3. Assigned to testing room
4. Find your seat

**Rules:**
- No talking once check-in begins
- Follow proctor instructions
- Cell phone must be off and stored
- No food or drink at desk

**If there's a problem:**
- Speak to test coordinator immediately
- Issues with ID, ticket, room assignment

### In the Testing Room

**Before test starts:**
✓ Get comfortable in your seat  
✓ Organize materials on desk (pencils, calculator, watch, eraser)  
✓ Put bag under desk  
✓ Go to bathroom if needed  
✓ Take deep breaths and stay calm

**Proctor will:**
- Read instructions (listen carefully!)
- Distribute test booklets and answer sheets
- Explain rules and timing
- Answer questions about procedures

**Bubbling demographic info:**
- Fill in carefully
- Check spelling
- Mark answers clearly
- **Don't** rush this part

### During Breaks

**Between sections, you'll have short breaks:**

**5-minute breaks:**
- Use bathroom
- Eat snack, drink water
- Stretch legs
- **Cannot** access phone or study materials
- **Must** stay in designated area

**Strategies:**
- Move around to stay alert
- Eat energy-boosting snack
- Drink water (not too much!)
- Don't discuss test answers (against rules)
- Stay positive

## During the Test

### Mindset Strategies

**Stay focused:**
- One question at a time
- Don't think about previous sections
- Don't worry about questions you've already answered

**If you get anxious:**
- Take three deep breaths
- Remind yourself you're prepared
- Focus on process, not outcome
- Use your practiced strategies

**If you make a mistake:**
- Don't dwell on it
- Move forward
- Can't change it now anyway
- Focus on getting the next question right

### Pacing Reminders

**Check your watch:**
- Glance periodically (don't obsess)
- Note checkpoint times
- Adjust pace if needed
- Stay aware but not stressed

**If running behind:**
- Don't panic
- Use guessing strategies
- Prioritize easier questions
- Make sure to bubble everything

**If ahead of pace:**
- Don't rush through remaining questions
- Use extra time to double-check
- Review flagged questions
- Check bubbling accuracy

### Physical Strategies

**Stay comfortable:**
- Adjust posture regularly
- Prevent hand cramping (relax grip on pencil)
- Blink to prevent eye strain
- Stay warm with layers or cool by removing them

**Energy management:**
- Eat snack during breaks
- Stay hydrated
- Keep blood sugar stable
- Maintain focus for 3+ hours

## After the Test

### Immediately After

**Do:**
✓ Celebrate! You finished!  
✓ Eat a good meal  
✓ Relax and decompress  
✓ Do something fun

**Don't:**
❌ Obsess over questions you might have missed  
❌ Compare answers with friends (too late to change anything!)  
❌ Calculate your score (wait for official results)  
❌ Beat yourself up over mistakes

### Score Release

**Timeline:**
- Multiple choice scores: 2-8 weeks
- Writing scores: 2-3 weeks after multiple choice

**When scores come out:**
- Review your score report
- Identify strengths and weaknesses
- Decide if you'll retake

**If you're happy with score:**
- Congratulations!
- Focus on rest of college applications

**If you're retaking:**
- Analyze what went wrong
- Adjust study plan
- Focus on weaknesses
- Register for next test date

## Special Situations

### If You're Sick

**Mild illness:**
- Go if you can
- Bring tissues, cough drops
- Take medication beforehand
- Inform proctor if needed

**Severe illness:**
- Consider postponing
- Contact ACT to change test date
- Better to test when healthy

### If You're Running Late

**Call test center if possible**
- Explain situation
- They may let you in

**If you miss start time:**
- Some centers allow late entry
- May not be admitted
- Will forfeit test fee

**Prevention:** Leave EARLY!

### If Calculator Dies

**Bring backup batteries!**

**If it dies anyway:**
- Use basic calculator if available
- Solve by hand
- Not ideal, but doable

### If You Feel Unprepared

**It's normal to feel nervous!**

**Strategies:**
- Take it anyway (get experience)
- Do your best
- Can always retake
- Practice test is still valuable

**Don't:**
- Skip test last-minute
- Forfeit fee
- Miss opportunity

## Test Day Checklist

### Night Before:
☐ Set multiple alarms  
☐ Lay out clothes  
☐ Organize testing materials  
☐ Prepare breakfast and snacks  
☐ Get 8+ hours sleep

### Morning Of:
☐ Eat substantial breakfast  
☐ Bring admission ticket  
☐ Bring photo ID  
☐ Bring 4-6 No. 2 pencils (pre-sharpened)  
☐ Bring eraser  
☐ Bring approved calculator with fresh batteries  
☐ Bring watch  
☐ Bring snacks and water  
☐ Dress in layers  
☐ Arrive 30-45 minutes early

### During Test:
☐ Stay calm and focused  
☐ Follow pacing plan  
☐ Use time management strategies  
☐ Guess on every question (never leave blank!)  
☐ Use breaks wisely

### After Test:
☐ Relax and celebrate  
☐ Don't obsess over answers  
☐ Wait for scores  
☐ Decide on next steps

## Final Reminders

**You've got this!**

✓ Trust your preparation  
✓ Use your practiced strategies  
✓ Stay calm and focused  
✓ Manage your time well  
✓ Guess strategically (never leave blank!)  
✓ Take care of yourself  
✓ Remember: it's just a test, and you can always retake it

**The ACT tests what you know AND how well you take tests.**

You've prepared for both. Now go show what you can do!

**Good luck!** 🍀
`
    }
  });

  console.log('✅ Filled Test Day Preparation\n');

  console.log('🎉🎉🎉 ALL ACT PREP CONTENT COMPLETE! 🎉🎉🎉\n');
  console.log('✅ ACT Prep course: 29/29 topics now have comprehensive content');
  console.log('📊 Summary:');
  console.log('   - Batch 4: 4 topics (Science + 1 Reading)');
  console.log('   - Batch 5: 3 topics (Reading)');
  console.log('   - Batch 6: 3 topics (Test Strategy)');
  console.log('   - Total this session: 10 topics completed');
  console.log('   - Combined with previous batches: 29/29 topics complete!\n');
  console.log('🎓 High-traffic courses completed so far:');
  console.log('   ✅ SAT Prep: 38/38 topics');
  console.log('   ✅ ACT Prep: 29/29 topics');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
