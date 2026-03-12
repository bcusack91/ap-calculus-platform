import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling in ACT English content (Batch 2)...\n');

  // Sentence Structure and Formation
  await prisma.topic.update({
    where: { slug: 'sentence-structure-formation' },
    data: {
      textContent: `# Sentence Structure and Formation (ACT English)

## Complete Sentences

### What Makes a Complete Sentence?

A complete sentence must have:
1. **Subject** (who or what)
2. **Predicate** (verb and what it does)
3. **Complete thought** (makes sense on its own)

✓ **Complete:** "The dog barked loudly."  
❌ **Incomplete:** "The dog barking loudly." (no complete verb)  
❌ **Incomplete:** "Because the dog barked." (not a complete thought)

## Sentence Fragments

**A fragment** is missing a subject, verb, or complete thought

### Type 1: Missing Subject

❌ "Ran to the store quickly."  
✓ "She ran to the store quickly."

### Type 2: Missing Verb or Incomplete Verb

❌ "The students studying for the exam."  
✓ "The students are studying for the exam."  
✓ "The students studied for the exam."

**Note:** "-ing" words alone are NOT complete verbs!

### Type 3: Dependent Clause Fragment

❌ "Because I was tired."  
✓ "Because I was tired, I went to bed early."  
✓ "I went to bed early because I was tired."

**Common subordinators that create dependent clauses:**
- although, because, since, while, when, if, unless, until, after, before

## Run-On Sentences

**A run-on** improperly joins two independent clauses

### Type 1: Fused Sentence (Comma Splice)

❌ "I love reading, I visit the library often."  
✓ "I love reading**. I** visit the library often." (period)  
✓ "I love reading**; I** visit the library often." (semicolon)  
✓ "I love reading**, so I** visit the library often." (comma + conjunction)

### Type 2: No Punctuation

❌ "The test was hard I studied for hours."  
✓ "The test was hard. I studied for hours."  
✓ "The test was hard; I studied for hours."  
✓ "The test was hard, so I studied for hours."

## Ways to Join Sentences

### Method 1: Period

**Use when:** Sentences are complete and independent

✓ "The movie ended. Everyone applauded."

### Method 2: Semicolon

**Use when:** Sentences are closely related

✓ "I love summer; it's my favorite season."

**Can also use semicolon before conjunctive adverbs:**
✓ "She studied hard; therefore, she passed."  
✓ "The weather was bad; however, we went anyway."

**Common conjunctive adverbs:** however, therefore, moreover, furthermore, nevertheless, consequently

### Method 3: Comma + Coordinating Conjunction

**FANBOYS:** For, And, Nor, But, Or, Yet, So

✓ "I wanted to go, **but** I was too tired."  
✓ "She studied hard, **and** she passed the exam."

**MUST have both comma AND conjunction!**

❌ "I wanted to go but I was too tired." (missing comma)  
❌ "I wanted to go, I was too tired." (missing conjunction)

### Method 4: Subordination

**Make one clause dependent:**

✓ "**Because** I was tired, I went to bed."  
✓ "I went to bed **because** I was tired."

**Note:** Comma rules
- Comma AFTER dependent clause if it comes first
- NO comma if dependent clause comes second (usually)

## Sentence Types

### Simple Sentence

One independent clause

✓ "The cat slept."  
✓ "The large orange cat slept peacefully on the warm couch."

(Still simple even with lots of modifiers — only ONE subject-verb pair doing ONE action)

### Compound Sentence

Two or more independent clauses joined

✓ "The cat slept, and the dog barked."  
✓ "I wanted pizza; she wanted tacos."

### Complex Sentence

One independent clause + one or more dependent clauses

✓ "**When I arrived**, the party had started." (dependent + independent)  
✓ "The book **that I borrowed** was excellent." (independent with embedded dependent)

### Compound-Complex Sentence

Two or more independent clauses + one or more dependent clauses

✓ "**When I arrived**, the party had started, and everyone was dancing."

## Parallel Structure

**Items in a list or comparison must have the same grammatical form**

### Lists

❌ "I like swimming, to run, and biking."  
✓ "I like **swimming, running, and biking**." (all -ing)  
✓ "I like **to swim, to run, and to bike**." (all infinitives)

### Comparisons

❌ "The new policy is better than what we had before."  
✓ "The new policy is better than the old policy."

### Correlative Conjunctions

**Pairs:** either...or, neither...nor, not only...but also, both...and

**Rule:** Same structure after each part

❌ "She is not only intelligent but also **has creativity**."  
✓ "She is not only intelligent but also **creative**." (both adjectives)  
✓ "She not only **is intelligent** but also **has creativity**." (both verb phrases)

## Modifiers

### Misplaced Modifiers

**Problem:** Modifier is too far from what it modifies

❌ "I saw a dog running down the street **with a wagging tail**."  
(Sounds like the street has a wagging tail!)

✓ "I saw a dog **with a wagging tail** running down the street."

### Dangling Modifiers

**Problem:** What the modifier describes isn't in the sentence

❌ "**After studying all night**, the exam was easy."  
(The exam didn't study!)

✓ "**After studying all night**, **I found** the exam easy."  
✓ "**After I studied all night**, the exam was easy."

**Common opening modifiers that can dangle:**
- After/before + -ing: "After finishing..."
- While + -ing: "While walking..."
- To + verb: "To succeed..."

**Rule:** Subject of main clause must be what the modifier describes

## Wordiness and Redundancy

### Redundant Pairs

❌ "first and foremost" → ✓ "first"  
❌ "each and every" → ✓ "each" or "every"  
❌ "past history" → ✓ "history"  
❌ "end result" → ✓ "result"  
❌ "completely finish" → ✓ "finish"  
❌ "advance planning" → ✓ "planning"

### Wordy Phrases

| Wordy | Concise |
|-------|---------|
| due to the fact that | because |
| in spite of the fact that | although |
| at this point in time | now |
| in the event that | if |
| has the ability to | can |
| is able to | can |
| in order to | to |

### Passive Voice

**Active (preferred):** Subject does the action  
**Passive:** Action is done to subject

❌ "The ball was thrown by John." (passive, wordy)  
✓ "John threw the ball." (active, concise)

**Passive is okay when:**
- Actor is unknown: "The window was broken."
- Actor is unimportant: "The test was administered yesterday."

## ACT Question Strategies

### Fragment vs Complete

**Strategy:**
1. Find the verb — is it complete?
2. Find the subject
3. Check if it's a dependent clause standing alone

**Red flags for fragments:**
- Words ending in -ing with no helping verb
- "Because," "Although," "Since" at start with no main clause
- Missing subject or verb

### Run-On Detection

**Strategy:**
1. Find where one complete thought ends
2. Check if two complete thoughts are properly joined
3. Look for comma splices (just comma between two clauses)

**Fix options:**
- Period
- Semicolon
- Comma + FANBOYS
- Make one clause dependent

### Parallel Structure

**Strategy:**
1. Identify items in the list/comparison
2. Check they're all the same form (all -ing, all infinitives, all nouns, etc.)
3. Pay attention to "and" — what's before should match what's after

### Modifier Questions

**Strategy:**
1. Find the modifier (usually at start of sentence)
2. Find what it's supposed to modify
3. Make sure they're next to each other
4. Check that the subject of the sentence can logically do what the modifier describes

## Common ACT Mistakes

❌ **Thinking -ing is a complete verb**  
"The students working" is NOT complete

❌ **Using comma to join two sentences**  
"I went home, I was tired" is wrong — need semicolon or conjunction

❌ **Not matching parallel items**  
"swimming, to run, biking" — pick one form!

❌ **Putting modifier next to wrong word**  
"Running quickly, the finish line appeared" — finish line can't run!

❌ **Keeping redundant phrases**  
"past history" and "end result" are redundant

❌ **Choosing wordy over concise**  
ACT prefers shorter when meaning is the same

## Quick Tips for ACT

✓ **Every sentence needs subject + verb + complete thought**  
✓ **"-ing" words need helping verbs** (is running, was studying)  
✓ **Comma alone can't join sentences** — need conjunction too  
✓ **Semicolon = strong period** — joins related complete thoughts  
✓ **Items in list must match form** — all nouns, all verbs, etc.  
✓ **Modifiers describe what comes right after** — check logic  
✓ **Shorter is better** — eliminate wordiness  
✓ **Check FANBOYS** — for, and, nor, but, or, yet, so

## Decision Tree for Joining Sentences

**When you have two complete thoughts:**

1. Are they closely related?
   - NO → Use period
   - YES → Continue to #2

2. Do you want to show relationship?
   - NO → Use semicolon
   - YES → Continue to #3

3. What's the relationship?
   - Contrast → , but / , yet / ; however,
   - Addition → , and / ; furthermore,
   - Cause → , so / , for / ; therefore,
   - Alternative → , or
   - Result → , so / ; consequently,

## Practice Approach

1. **Read the whole sentence** — don't just look at underlined part
2. **Check for complete thought** — subject, verb, makes sense
3. **Look for two complete thoughts** — are they properly joined?
4. **Identify lists or comparisons** — check parallel structure
5. **Find modifiers** — what do they modify? Are they placed correctly?
6. **Eliminate wordiness** — choose concise option
7. **Read with your answer** — does it sound right?

**Remember:** The ACT loves testing fragments, run-ons, and parallel structure. Know how to identify and fix these, and you'll handle many English questions with confidence!
`
    }
  });

  console.log('✅ Filled Sentence Structure and Formation\n');

  // Punctuation Rules  
  await prisma.topic.update({
    where: { slug: 'act-punctuation-rules' },
    data: {
      textContent: `# Punctuation Rules (ACT English)

## Commas

### Use Commas: Introductory Elements

**After introductory words, phrases, or clauses:**

✓ "**However**, I disagree with that statement."  
✓ "**After the game**, we went out for pizza."  
✓ "**Running down the street**, I tripped and fell."  
✓ "**Because I was tired**, I went to bed early."

**Rule:** Comma after dependent clause at START of sentence  
**But:** No comma if dependent clause is at END

✓ "I went to bed early because I was tired." (no comma)

### Use Commas: Items in a Series

**Three or more items:**

✓ "I bought apples, oranges, and bananas."  
✓ "She is smart, kind, and funny."

**ACT uses Oxford comma** (comma before "and" in list)

### Use Commas: Compound Sentences

**Before coordinating conjunctions (FANBOYS) joining two complete thoughts:**

✓ "I wanted to go, **but** I was too tired."  
✓ "She studied hard, **and** she passed the exam."

**DON'T use comma if second part isn't a complete sentence:**

✓ "I wanted to go but was too tired." (no comma — "was too tired" isn't complete)  
❌ "I wanted to go, but was too tired." (unnecessary comma)

### Use Commas: Non-Essential Information

**Around information that can be removed:**

✓ "My brother, **who lives in California**, is visiting."  
(Can remove "who lives in California")

✓ "The Eiffel Tower, **a famous landmark**, attracts many tourists."

**DON'T use commas for essential information:**

✓ "The student who won the award is my friend." (no commas)  
(Which student? The one who won — essential to meaning)

### Use Commas: Appositives

**Around renaming phrases:**

✓ "My teacher, **Ms. Johnson**, is excellent."  
✓ "The capital of France, **Paris**, is beautiful."

### DON'T Use Commas: Between Subject and Verb

❌ "The tall man in the blue shirt, walked slowly."  
✓ "The tall man in the blue shirt walked slowly."

### DON'T Use Commas: Before "That"

✓ "I think that we should go." (no comma)  
❌ "I think, that we should go."

## Semicolons

### Use Semicolon: Join Related Independent Clauses

**When two complete thoughts are closely related:**

✓ "I love reading; it's my favorite hobby."  
✓ "She didn't study; she failed the test."

**Think of semicolon as strong period** — both sides must be complete sentences

❌ "I love reading; my favorite hobby." (second part incomplete)  
✓ "I love reading; it's my favorite hobby."

### Use Semicolon: Before Conjunctive Adverbs

**With words like however, therefore, moreover, furthermore, nevertheless:**

✓ "I wanted to go; **however**, I was too tired."  
✓ "She studied hard; **therefore**, she passed."

**Pattern:** Semicolon before, comma after

### Use Semicolon: Complex Lists

**When list items contain commas:**

✓ "I've visited Paris, France; London, England; and Rome, Italy."

## Colons

### Use Colon: Introduce a List

**After a complete sentence:**

✓ "You'll need three things: a pencil, paper, and an eraser."  
✓ "We visited several cities: Boston, New York, and Philadelphia."

**DON'T use after incomplete sentence:**

❌ "My favorite colors are: blue, green, and yellow."  
✓ "My favorite colors are blue, green, and yellow." (no colon)  
✓ "I like three colors: blue, green, and yellow." (complete before colon)

### Use Colon: Emphasis or Explanation

**To introduce an explanation or emphasis:**

✓ "She had one goal: to win the championship."  
✓ "The answer was clear: he had been lying."

### Use Colon: After Greeting in Business Letter

✓ "Dear Sir or Madam:"  
✓ "To Whom It May Concern:"

## Dashes

### Use Dash: Interruption or Sudden Change

✓ "I was walking home — it was a beautiful day — when I saw her."  
✓ "The test — which I forgot to study for — was incredibly difficult."

**Note:** Dashes create a stronger break than commas

### Use Dash: Emphasis

✓ "There's only one thing I want — to succeed."  
✓ "She achieved her goal — against all odds."

**Dash vs Colon:** Both can introduce, but dash is more informal/dramatic

## Apostrophes

### Use Apostrophe: Possession

**Singular nouns — add 's:**
✓ "the dog's toy"  
✓ "James's book" (even names ending in s)

**Plural nouns ending in s — add only apostrophe:**
✓ "the dogs' toys" (multiple dogs)  
✓ "the students' desks"

**Plural nouns NOT ending in s — add 's:**
✓ "the children's playground"  
✓ "the women's rights"

### Use Apostrophe: Contractions

✓ "it's" = it is  
✓ "they're" = they are  
✓ "you're" = you are  
✓ "who's" = who is  
✓ "don't" = do not

### DON'T Use Apostrophe: Possessive Pronouns

**These don't need apostrophes:**
- its, his, hers, ours, yours, theirs, whose

✓ "The dog wagged **its** tail." (NOT it's)  
✓ "The book is **hers**." (NOT her's)  
✓ "**Whose** book is this?" (NOT who's)

### Common Confusions

| Contraction (with apostrophe) | Possessive (no apostrophe) |
|-------------------------------|---------------------------|
| it's (it is) | its (belonging to it) |
| you're (you are) | your (belonging to you) |
| they're (they are) | their (belonging to them) |
| who's (who is) | whose (belonging to whom) |

## Quotation Marks

### Use Quotation Marks: Direct Speech

✓ She said, "I'll be there soon."  
✓ "I can't believe it," he exclaimed.

**Comma before quote if introducing:**
✓ He asked, "Where are you going?"

**Comma inside closing quotation mark:**
✓ "I'm going home," she replied.

### Use Quotation Marks: Titles of Short Works

**Use for:** articles, short stories, poems, songs, chapters

✓ I read "The Lottery" in English class. (short story)  
✓ My favorite song is "Imagine." (song)

**Use italics (or underline) for:** books, movies, albums, newspapers

✓ I read *The Great Gatsby*. (book)  
✓ We watched *The Matrix*. (movie)

### Punctuation with Quotation Marks

**Commas and periods — INSIDE quotation marks:**
✓ "Hello," she said.  
✓ She said, "Hello."

**Semicolons and colons — OUTSIDE quotation marks:**
✓ She said, "Hello"; then she left.

**Question marks and exclamation points — depends:**
✓ She asked, "Are you okay?" (question is quoted)  
✓ Did she say, "I'm fine"? (overall sentence is question)

## Question Marks and Exclamation Points

### Use Question Mark: Direct Questions

✓ "Where are you going?"  
✓ "How old are you?"

**DON'T use for indirect questions:**

✓ "She asked where I was going." (no question mark)  
❌ "She asked where I was going?"

### Use Exclamation Point: Strong Emotion

✓ "Watch out!"  
✓ "That's amazing!"

**ACT tip:** Use sparingly — ACT prefers periods for most sentences

## ACT Punctuation Strategies

### Strategy 1: Check Both Sides of Semicolon

**Both sides must be complete sentences:**

Test: "I love reading" → complete ✓  
Test: "it's my favorite hobby" → complete ✓  
Result: "I love reading; it's my favorite hobby." → correct ✓

### Strategy 2: FANBOYS Requires Comma

**If you see and, but, or, so, etc. joining two complete sentences:**

Check: Both sides complete? → Add comma before conjunction  
Check: Second side incomplete? → No comma

### Strategy 3: Essential vs Non-Essential

**Can you remove the phrase without changing core meaning?**
- YES → Use commas around it
- NO → Don't use commas

✓ "My brother who lives in Texas called yesterday." (essential — which brother?)  
✓ "My only brother, who lives in Texas, called yesterday." (non-essential — only one brother)

### Strategy 4: Its vs It's Test

**Replace with "it is":**
- Makes sense? → Use "it's"
- Doesn't make sense? → Use "its"

"The dog wagged [it is] tail." → Doesn't make sense → Use "its" ✓

## Common ACT Mistakes

❌ **Comma splice** — using only comma to join sentences  
"I went home, I was tired." → Use semicolon or add conjunction

❌ **Unnecessary comma before "that"**  
"I think, that we should go." → Remove comma

❌ **Comma between subject and verb**  
"The tall man in the blue shirt, walked slowly." → Remove comma

❌ **Colon after incomplete sentence**  
"My hobbies are: reading and writing." → Remove colon

❌ **Confusing its and it's**  
"The dog wagged it's tail." → Should be "its" (possessive)

❌ **Apostrophe in possessive pronoun**  
"The book is her's." → Should be "hers" (no apostrophe)

## Quick Reference Chart

| Punctuation | Use | Example |
|-------------|-----|---------|
| **,** | Lists, introductory, compound sentences | "I bought apples, oranges, and bananas." |
| **;** | Join related complete sentences | "I love reading; it's relaxing." |
| **:** | Introduce list/explanation (after complete sentence) | "I need three things: pen, paper, eraser." |
| **—** | Interruption, emphasis | "The test—surprisingly—was easy." |
| **'** | Possession, contractions | "the dog's toy," "it's raining" |
| **" "** | Direct quotes, short work titles | She said, "Hello." |

## Decision Tree: Joining Two Clauses

**Are both complete sentences?**

- NO → No punctuation needed (unless introductory)
- YES → Continue below

**How are they related?**

- Very closely → Semicolon
- Want to show specific relationship → Comma + FANBOYS (and, but, or, so, yet, for, nor)
- Want to introduce/explain → Colon (first introduces second)
- Separate ideas → Period

## Practice Tips

✓ **Read aloud** — your ear catches many errors  
✓ **Test semicolons** — both sides must be complete  
✓ **Check FANBOYS** — needs comma if both sides complete  
✓ **Replace "it's" with "it is"** — if doesn't make sense, use "its"  
✓ **Remove phrase** — if sentence still works, use commas around it  
✓ **Watch for "however"** — semicolon before, comma after  
✓ **Shortest correct answer often wins** — ACT dislikes unnecessary punctuation

**Remember:** The ACT tests the same punctuation rules repeatedly. Master commas, semicolons, apostrophes, and the its/it's distinction, and you'll handle most punctuation questions correctly!
`
    }
  });

  console.log('✅ Filled Punctuation Rules\n');
  console.log('🎉 ACT English Batch 2: 2 topics complete\n');
  console.log('Continuing with more English topics...\n');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
