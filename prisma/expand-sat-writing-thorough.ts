import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Expanding SAT Writing topics with thorough content...\n')

  // ============================================================
  // TOPIC 1: Subject-Verb Agreement
  // ============================================================
  const sva = await prisma.topic.findUnique({
    where: { slug: 'sat-subject-verb-agreement' }
  })

  if (sva) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: sva.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Choose the correct verb:\n"The group of students (is/are) working on the project."',
          solution: `**Step 1:** Identify the true subject.

The sentence reads: "The group of students (is/are) working on the project."

**The subject is "group"** (singular), NOT "students."

"Of students" is a prepositional phrase that modifies "group" — it does NOT determine the verb.

**Step 2:** Match the verb to the singular subject:

"The group **is** working on the project." ✅

**Answer:** "is"

**Rule:** Ignore prepositional phrases between the subject and verb. The subject of the sentence determines the verb form.`
        },
        {
          topicId: sva.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Choose the correct verb:\n"Neither the teacher nor the students (was/were) prepared for the fire drill."',
          solution: `**Rule for "neither...nor" and "either...or":**

When a compound subject is joined by "neither...nor" or "either...or," the verb agrees with the **closer** subject.

- "Neither the teacher nor the **students**" → "students" is closer → plural → **were**

"Neither the teacher nor the students **were** prepared for the fire drill." ✅

**Compare:** "Neither the students nor the **teacher** was prepared." (Verb matches "teacher" — singular)

**Answer:** "were"

**Memory aid:** The verb "looks at" whichever subject is closer to it.`
        },
        {
          topicId: sva.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'Choose the correct verb:\n"The news about the budget cuts (has/have) worried many employees."',
          solution: `**Step 1:** Identify the subject.

"The news" is the subject. "About the budget cuts" is a prepositional phrase.

**Step 2:** Is "news" singular or plural?

**"News" is SINGULAR** even though it ends in -s.

Other tricky singular nouns: mathematics, physics, economics, politics, measles, the United States.

**Step 3:** Match the verb:

"The news **has** worried many employees." ✅

**Answer:** "has"

**SAT Trap:** Words ending in -s seem plural but aren't always. Check each word individually — "news," "mathematics," "economics" are all singular.`
        },
        {
          topicId: sva.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Choose the correct verb:\n"The number of applicants who (has/have) submitted forms online (has/have) increased dramatically."',
          solution: `**This sentence has TWO subject-verb pairs:**

**Pair 1:** "applicants who (has/have) submitted"
- Subject = "who" → refers to "applicants" (plural) → **have**

**Pair 2:** "The number... (has/have) increased"
- Subject = "The number" (singular) → **has**

**Important distinction:**
- "**The** number of..." = singular (a specific quantity) → "has"
- "**A** number of..." = plural (meaning "many") → "have"

**Complete sentence:**
"The number of applicants who **have** submitted forms online **has** increased dramatically." ✅

**Answer:** First blank: "have"; Second blank: "has"

**SAT Pattern:** Sentences with embedded clauses ("who have submitted") are designed to confuse you about which verb goes with which subject.`
        },
        {
          topicId: sva.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Choose the correct verb:\n"Amid the chaos of the crowded market, where vendors and customers (negotiate/negotiates) prices and exotic spices (fill/fills) the air with fragrance, (stand/stands) a centuries-old temple."',
          solution: `**This is an inverted sentence with multiple clauses:**

**Clause 1:** "where vendors and customers _____ prices"
- Subject = "vendors and customers" (plural) → **negotiate** ✅

**Clause 2:** "exotic spices _____ the air"
- Subject = "spices" (plural) → **fill** ✅

**Main clause (inverted):** "_____ a centuries-old temple"
- The sentence is inverted: "A centuries-old temple stands amid the chaos"
- Subject = "a temple" (singular) → **stands** ✅

**Complete sentence:**
"Amid the chaos of the crowded market, where vendors and customers **negotiate** prices and exotic spices **fill** the air with fragrance, **stands** a centuries-old temple."

**Answer:** negotiate, fill, stands

**SAT Insight:** Inverted sentences (verb before subject) are a common trap. Mentally rearrange the sentence to find the true subject: "A temple stands amid the chaos."`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: sva.id,
          front: 'What is the #1 rule for subject-verb agreement?',
          back: 'The verb must agree with the SUBJECT, not with words between the subject and verb. Ignore prepositional phrases: "The box **of chocolates** is" (not "are" — "box" is the subject).',
          hint: 'Ignore prepositional phrases'
        },
        {
          topicId: sva.id,
          front: 'How do "neither...nor" and "either...or" affect verb agreement?',
          back: 'The verb agrees with the **closer** (nearer) subject. "Neither the cats nor the **dog** is" / "Neither the dog nor the **cats** are."',
          hint: 'The verb looks at whichever subject is closer'
        },
        {
          topicId: sva.id,
          front: 'What is the difference between "the number of" and "a number of"?',
          back: '**"The number of"** = singular (refers to a specific quantity). **"A number of"** = plural (means "many/several"). "The number of students IS." "A number of students ARE."',
          hint: '"The" vs "A" changes everything'
        },
        {
          topicId: sva.id,
          front: 'Which common words look plural but are actually singular?',
          back: 'News, mathematics, physics, economics, politics, measles, the United States, each, everyone, everybody, nobody, either, neither. All take singular verbs.',
          hint: 'Words ending in -s that are not plural'
        },
        {
          topicId: sva.id,
          front: 'How do you handle inverted sentences for SVA?',
          back: 'In inverted sentences (verb before subject), mentally rearrange. "On the shelf **sit** three books" → "Three books sit on the shelf." The subject is "books" (plural).',
          hint: 'Flip the sentence to find the subject'
        },
        {
          topicId: sva.id,
          front: 'How do you handle "who" in subject-verb agreement?',
          back: '"Who" takes the number of the word it refers to. "The student who **is**..." (singular). "The students who **are**..." (plural). Look at the antecedent.',
          hint: 'Look at what "who" refers to'
        },
        {
          topicId: sva.id,
          front: 'What is a compound subject and how does it affect the verb?',
          back: 'Subjects joined by "and" are compound and take a PLURAL verb: "The cat and the dog **are** playing." Exception: when they refer to one thing: "Peanut butter and jelly **is** my favorite sandwich."',
          hint: '"And" usually makes it plural'
        }
      ]
    })

    console.log('✓ sat-subject-verb-agreement expanded')
  }

  // ============================================================
  // TOPIC 2: Grammar and Usage
  // ============================================================
  const grammarUsage = await prisma.topic.findUnique({
    where: { slug: 'sat-grammar-usage' }
  })

  if (grammarUsage) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: grammarUsage.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Identify and fix the error:\n"Each of the students must bring their own supplies to class."',
          solution: `**Error:** Pronoun-antecedent agreement

"Each" is SINGULAR, but "their" is PLURAL.

**Fix:** "Each of the students must bring **his or her** own supplies to class."

**Or restructure:** "All students must bring **their** own supplies to class." (Now the subject is plural to match "their.")

**Answer:** Change "their" to "his or her" or change "Each" to "All."

**Rule:** Singular indefinite pronouns (each, every, either, neither, anyone, everyone, nobody) must be matched with singular pronouns (he, she, it, his, her, its).`
        },
        {
          topicId: grammarUsage.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Choose the correct option:\n"The coach told the players that (they/he) needed to practice harder."',
          solution: `**Context matters for pronoun clarity:**

- "The coach told the players that **they** needed to practice harder." → "They" refers to the players.
- "The coach told the players that **he** needed to practice harder." → "He" refers to the coach.

**The correct answer depends on the intended meaning:**

If the coach wants the PLAYERS to practice harder → **they** ✅
If the coach is saying HE HIMSELF needs to practice harder → **he** ✅

**On the SAT:** Context from surrounding sentences will make the intended meaning clear. Read the full paragraph.

**SAT Rule:** A pronoun must clearly refer to ONE specific antecedent. If it's ambiguous (could refer to multiple nouns), the sentence needs to be rewritten.

**Answer:** Most likely "they" (the coach is telling the players to improve), but read context.`
        },
        {
          topicId: grammarUsage.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'Fix the error:\n"Running quickly through the park, the dog was spotted by Maria."',
          solution: `**Error:** Dangling/misplaced modifier

"Running quickly through the park" is a participial phrase that should modify the subject of the main clause. But "the dog" is the grammatical subject — it sounds like the dog was running.

**If MARIA was running:**
"Running quickly through the park, **Maria** spotted the dog." ✅
(Now "Maria" is the subject, and she's the one running.)

**If THE DOG was running:**
"Maria spotted the dog running quickly through the park." ✅
(Restructure so the modifier is next to what it describes.)

**Answer:** Rewrite so the modifier is next to the noun it describes.

**SAT Rule:** A modifying phrase at the beginning of a sentence MUST describe the subject that immediately follows the comma.`
        },
        {
          topicId: grammarUsage.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Identify and fix the error:\n"The scientist, along with her research assistants, are publishing the findings next month."',
          solution: `**Error:** Subject-verb agreement with an interrupting phrase

"Along with her research assistants" is a parenthetical phrase — it does NOT make the subject plural.

**The subject is "The scientist"** (singular), so the verb must be singular: **"is publishing"**

**Corrected:** "The scientist, along with her research assistants, **is** publishing the findings next month." ✅

**Rule:** Phrases set off by commas like:
- "along with..."
- "as well as..."
- "in addition to..."
- "together with..."

do NOT change the number of the subject. Only "and" creates a compound subject.

**Answer:** Change "are" to "is."

**Compare:** "The scientist **and** her assistants **are** publishing..." (Here "and" creates a plural compound subject.)`
        },
        {
          topicId: grammarUsage.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Fix all errors in this sentence:\n"After reviewing the data carefully, it was concluded by the committee that the proposal, which were submitted last week, needed revisions before they could be approved."',
          solution: `**Error 1:** Dangling modifier
"After reviewing the data carefully, **it** was concluded..." → Who reviewed the data? Not "it."
**Fix:** "After reviewing the data carefully, **the committee** concluded..."

**Error 2:** Passive voice (not technically an error, but the SAT prefers active)
"it was concluded by the committee" → "the committee concluded"

**Error 3:** Subject-verb agreement
"the proposal, which **were** submitted" → "proposal" is singular → "which **was** submitted"

**Error 4:** Pronoun reference
"before **they** could be approved" → "they" is ambiguous (could refer to proposal or revisions). Should be "before **it** could be approved" (referring to the proposal).

**Corrected sentence:**
"After reviewing the data carefully, the committee concluded that the proposal, which **was** submitted last week, needed revisions before **it** could be approved." ✅

**Answer:** Four corrections: dangling modifier, passive voice, SVA ("was"), pronoun reference ("it").`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: grammarUsage.id,
          front: 'What is a dangling modifier?',
          back: 'A phrase that modifies the wrong noun (or no noun at all). "Walking to school, the rain started." (The rain wasn\'t walking!) Fix: "Walking to school, **I** got caught in the rain."',
          hint: 'The modifying phrase must describe the subject'
        },
        {
          topicId: grammarUsage.id,
          front: 'What is pronoun-antecedent agreement?',
          back: 'A pronoun must match its antecedent in number and gender. Singular antecedent → singular pronoun. "Every student must bring **his or her** book" (not "their").',
          hint: 'Singular nouns need singular pronouns'
        },
        {
          topicId: grammarUsage.id,
          front: 'When should you use "who" vs. "whom"?',
          back: '**Who** = subject (doing the action). **Whom** = object (receiving the action). Trick: If you can replace it with "he" → who. If "him" → whom. "Who called?" (He called.) "To whom did you speak?" (You spoke to him.)',
          hint: 'He = who, Him = whom'
        },
        {
          topicId: grammarUsage.id,
          front: 'Do "along with," "as well as," and "together with" make a subject plural?',
          back: 'NO! Only "and" creates a compound plural subject. These phrases are parenthetical and do NOT change the verb. "The president, along with advisors, **is**..." (singular verb for singular subject).',
          hint: 'Only "and" creates a compound subject'
        },
        {
          topicId: grammarUsage.id,
          front: 'What are the most common grammar errors tested on the SAT?',
          back: '1. Subject-verb agreement, 2. Pronoun-antecedent agreement, 3. Pronoun ambiguity, 4. Dangling/misplaced modifiers, 5. Verb tense consistency, 6. Parallel structure, 7. Comma usage.',
          hint: 'Seven key error types'
        },
        {
          topicId: grammarUsage.id,
          front: 'What is parallel structure?',
          back: 'Items in a list or comparison must be in the same grammatical form. Wrong: "She likes running, swimming, and **to bike**." Right: "She likes running, swimming, and **biking**."',
          hint: 'Same form for items in a list'
        },
        {
          topicId: grammarUsage.id,
          front: 'When is "NO CHANGE" the correct answer on SAT Writing?',
          back: 'About 25% of the time. Don\'t assume there\'s always an error — sometimes the original is correct. But DO check carefully before choosing NO CHANGE.',
          hint: 'It is correct about one-quarter of the time'
        }
      ]
    })

    console.log('✓ sat-grammar-usage expanded')
  }

  // ============================================================
  // TOPIC 3: Grammar Conventions
  // ============================================================
  const grammarConv = await prisma.topic.findUnique({
    where: { slug: 'sat-grammar-conventions' }
  })

  if (grammarConv) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: grammarConv.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Choose the correct option:\n"The researchers hoped (that/which) their findings would influence policy."',
          solution: `**"That" is correct here.**

"That" introduces a noun clause functioning as the object of "hoped."

"The researchers hoped **that** their findings would influence policy." ✅

**Rule for "that" vs. "which":**
- **That** = restrictive (essential) clause — no commas
- **Which** = nonrestrictive (nonessential) clause — with commas

"The study **that** was published last year..." (specifies which study — essential)
"The study, **which** was published last year,..." (adds extra info — nonessential)

**Answer:** "that"

**SAT shortcut:** If there are no commas → "that." If there are commas → "which."`
        },
        {
          topicId: grammarConv.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Choose the correct possessive:\n"(Its/It\'s) (their/there/they\'re) responsibility to fix (whose/who\'s) mistake?"',
          solution: `**Break it down word by word:**

**(Its/It's):** "It is" fits, so **It's** ✅ (contraction of "it is")

**(their/there/they're):** "they are" fits, so **they're** ✅ (contraction of "they are")

**(whose/who's):** "who is" fits, so **who's** ✅ (contraction of "who is")

**Complete sentence:** "**It's** **they're** responsibility to fix **who's** mistake?"

Wait — let me re-read. If the sentence means "It is their responsibility to fix whose mistake?":

**It's** (it is) **their** (possessive, belonging to them) responsibility to fix **whose** (possessive, belonging to whom) mistake?

**Key rules:**
- **Its** = possessive / **It's** = it is
- **Their** = possessive / **They're** = they are / **There** = location
- **Whose** = possessive / **Who's** = who is

**Answer:** "It's their responsibility to fix whose mistake?"

**SAT Tip:** Expand the contraction. If "it is" works → "it's." If not → "its."`
        },
        {
          topicId: grammarConv.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'Fix the verb tense error:\n"The team finished the project last week and will submit it yesterday."',
          solution: `**Error:** Verb tense inconsistency

"Finished" → past tense (correct, matches "last week")
"Will submit" → future tense BUT "yesterday" is in the past

**Fix:** "The team finished the project last week and **submitted** it yesterday." ✅

**Another possible fix (if the action hasn't happened):**
"The team finished the project last week and **will submit** it **tomorrow**." ✅

**Rule:** Verb tenses must be logically consistent with time markers.

Past time markers: yesterday, last week, in 2020, previously
Present: now, currently, today, at this moment
Future: tomorrow, next week, soon, eventually

**Answer:** Change "will submit" to "submitted" (or change "yesterday" to "tomorrow").

**SAT Strategy:** When you see verb tense answer choices, look for time clue words in the sentence to determine the correct tense.`
        },
        {
          topicId: grammarConv.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Fix the sentence:\n"The artist, who many critics consider to be one of the greatest painters of the century, have recently opened a new exhibition."',
          solution: `**Error 1:** Subject-verb agreement
"The artist... **have** recently opened" → Subject is "artist" (singular) → should be "**has**"

**Error 2:** Pronoun case (subtle)
"who many critics consider" → "who" is the OBJECT of "consider" (critics consider ___) → should be "**whom**"

**Corrected:** "The artist, **whom** many critics consider to be one of the greatest painters of the century, **has** recently opened a new exhibition." ✅

**Why this is tricky:**
- The long clause between commas makes you lose track of the subject ("artist")
- "Who" vs. "whom" depends on function within the clause: "critics consider [whom]"

**Answer:** Change "who" to "whom" and "have" to "has."

**SAT Pattern:** Long sentences with intervening clauses are designed to make you forget the original subject.`
        },
        {
          topicId: grammarConv.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Choose the correct version:\n(A) "Having completed the experiment, the results surprised the researchers."\n(B) "Having completed the experiment, the researchers were surprised by the results."\n(C) "Having completed the experiment, it was surprising to the researchers."',
          solution: `**This tests dangling modifiers:**

"Having completed the experiment" must modify the noun that immediately follows it — whoever completed the experiment.

**(A)** "the results surprised" → Did the RESULTS complete the experiment? No! ❌ (Dangling modifier)

**(B)** "the researchers were surprised" → Did the RESEARCHERS complete the experiment? Yes! ✅ (Correctly attached)

**(C)** "it was surprising" → Did "IT" complete the experiment? No! ❌ (Dangling modifier)

**Answer:** **(B)**

**Rule:** A participial phrase at the beginning of a sentence MUST modify the subject that follows the comma.

**Pattern to memorize:**
"[Participial phrase], [DOER OF THE ACTION] + [rest of sentence]."

"Running down the street, **I** tripped." ✅
"Running down the street, **the sidewalk** tripped me." ❌ (Sidewalks don't run)`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: grammarConv.id,
          front: 'What is the difference between "that" and "which"?',
          back: '**That** = restrictive clause (essential info, no commas). **Which** = nonrestrictive clause (extra info, commas). "The book **that** I read..." vs. "The book, **which** I read last summer,..."',
          hint: 'Commas = which. No commas = that.'
        },
        {
          topicId: grammarConv.id,
          front: 'How do you tell "its" from "it\'s"?',
          back: '**Its** = possessive (the dog wagged its tail). **It\'s** = contraction of "it is" (it\'s raining). Trick: If you can substitute "it is," use the apostrophe.',
          hint: 'Expand the contraction to check'
        },
        {
          topicId: grammarConv.id,
          front: 'What are the most commonly confused words on the SAT?',
          back: 'its/it\'s, their/there/they\'re, whose/who\'s, affect/effect, than/then, less/fewer, who/whom, that/which, lay/lie.',
          hint: 'Possessives vs contractions, and similar-sounding pairs'
        },
        {
          topicId: grammarConv.id,
          front: 'What is verb tense consistency?',
          back: 'Verbs within a sentence or paragraph should maintain a consistent tense unless there is a logical reason to shift. "She walked to the store and **bought** groceries" (both past), not "walked...and buys."',
          hint: 'Keep the same tense unless time changes'
        },
        {
          topicId: grammarConv.id,
          front: 'When do you use "fewer" vs. "less"?',
          back: '**Fewer** = countable nouns (fewer students, fewer errors). **Less** = uncountable nouns (less water, less time). If you can count the items individually, use "fewer."',
          hint: 'Can you count individual items?'
        },
        {
          topicId: grammarConv.id,
          front: 'What is the difference between "affect" and "effect"?',
          back: '**Affect** = verb (to influence). **Effect** = noun (the result). "The rain **affected** the game." "The **effect** of the rain was..." Memory: Affect = Action (both start with A).',
          hint: 'Affect is the Action (verb), Effect is the End result (noun)'
        },
        {
          topicId: grammarConv.id,
          front: 'What is a restrictive vs. nonrestrictive clause?',
          back: '**Restrictive** (essential): Identifies which one. No commas. "Students **who study** pass." **Nonrestrictive** (nonessential): Adds extra info. Uses commas. "My brother, **who lives in NYC**, visited."',
          hint: 'Can you remove it without changing the meaning?'
        }
      ]
    })

    console.log('✓ sat-grammar-conventions expanded')
  }

  // ============================================================
  // TOPIC 4: Punctuation
  // ============================================================
  const punctuation = await prisma.topic.findUnique({
    where: { slug: 'sat-punctuation' }
  })

  if (punctuation) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: punctuation.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Which is correct?\n(A) "The experiment was successful, the results were conclusive."\n(B) "The experiment was successful; the results were conclusive."',
          solution: `**Answer: (B)**

(A) is a **comma splice** — two independent clauses joined by only a comma. This is ALWAYS wrong.

(B) uses a **semicolon** to correctly join two related independent clauses.

**Four ways to fix a comma splice:**
1. **Semicolon:** "...successful**;** the results..."
2. **Period:** "...successful**.** The results..."
3. **Comma + conjunction:** "...successful**, and** the results..."
4. **Subordination:** "Because the experiment was successful, the results..."

**Answer:** (B) — the semicolon correctly joins two independent clauses.

**SAT Rule:** A semicolon works like a period — it connects two COMPLETE sentences that are closely related.`
        },
        {
          topicId: punctuation.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Add the correct punctuation:\n"The three primary colors red blue and yellow can be mixed to create secondary colors."',
          solution: `**The sentence needs commas to set off a list and an appositive:**

"The three primary colors**—**red**,** blue**,** and yellow**—**can be mixed to create secondary colors."

**Or with commas:**
"The three primary colors**,** red**,** blue**,** and yellow**,** can be mixed to create secondary colors."

**Explanation:**
- "Red, blue, and yellow" is an appositive (renames "the three primary colors")
- The appositive should be set off with dashes or commas
- Within the list, use commas between items
- Use the Oxford comma before "and" (standard for SAT)

**Answer:** "The three primary colors—red, blue, and yellow—can be mixed to create secondary colors."

**SAT Note:** The SAT uses the Oxford comma (comma before "and" in a list).`
        },
        {
          topicId: punctuation.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'Which is correct?\n(A) "The CEO who founded the company in 2005 announced her resignation."\n(B) "The CEO, who founded the company in 2005, announced her resignation."',
          solution: `**It depends on context:**

**(A)** No commas = **restrictive clause** → "who founded the company in 2005" identifies WHICH CEO (there must be multiple CEOs). The information is essential.

**(B)** With commas = **nonrestrictive clause** → "who founded the company in 2005" adds extra information about the ONLY CEO. The information could be removed.

**On the SAT:** If there is only ONE CEO (typical), the commas are correct because the clause is extra information.

**Answer:** Most likely **(B)** — the company typically has one CEO, so the clause is nonessential information.

**Test:** Try removing the clause. If the sentence still makes complete sense and identifies the right person, use commas (nonrestrictive). If you need the clause to know WHO is being discussed, no commas (restrictive).`
        },
        {
          topicId: punctuation.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Choose the correct punctuation:\n(A) "The study found three things: lower costs, higher quality, and improved access."\n(B) "The study found three things, lower costs, higher quality, and improved access."\n(C) "The study found three things; lower costs, higher quality, and improved access."',
          solution: `**Answer: (A)** — Use a COLON to introduce a list.

**Why each option:**

**(A)** Colon after "three things:" ✅
- A colon introduces a list, explanation, or elaboration
- What comes before the colon must be a complete sentence ("The study found three things" ✓)
- What follows explains what those "three things" are

**(B)** Comma after "things," ❌
- Creates a confusing run-on
- The list items blur with the introductory phrase

**(C)** Semicolon after "things;" ❌
- A semicolon requires a complete sentence on BOTH sides
- "Lower costs, higher quality, and improved access" is not a complete sentence

**Colon rules for SAT:**
1. What comes BEFORE the colon must be a complete sentence
2. What comes AFTER can be a list, explanation, or another sentence
3. Never use a colon after "such as," "including," or "for example"`
        },
        {
          topicId: punctuation.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Fix all punctuation errors:\n"The author known for her vivid prose style, wrote three novels the last of which, won the Pulitzer Prize before she turned forty it was a remarkable achievement."',
          solution: `**Identify the issues:**

1. "The author known for her vivid prose style" — needs commas around the appositive
2. "wrote three novels the last of which" — needs a comma or punctuation break
3. "which, won" — unnecessary comma separating subject from verb
4. "before she turned forty it was" — run-on / comma splice needs fixing

**Corrected:**
"The author**,** known for her vivid prose style**,** wrote three novels**,** the last of which won the Pulitzer Prize before she turned forty**.** It was a remarkable achievement."

**Or with a semicolon:**
"...before she turned forty**;** it was a remarkable achievement."

**Or with a dash:**
"...before she turned forty**—**a remarkable achievement."

**Changes made:**
1. Added commas around "known for her vivid prose style" (nonrestrictive)
2. Added comma before "the last of which" (introduces a relative clause)
3. Removed comma between "which" and "won" (don't separate subject and verb)
4. Added period between "forty" and "It" (two independent clauses)

**Answer:** "The author, known for her vivid prose style, wrote three novels, the last of which won the Pulitzer Prize before she turned forty. It was a remarkable achievement."`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: punctuation.id,
          front: 'What is a comma splice and how do you fix it?',
          back: 'Two independent clauses joined by ONLY a comma. Fix with: (1) semicolon, (2) period, (3) comma + conjunction (and, but, or), or (4) subordination. "I ran, I fell" → "I ran; I fell."',
          hint: 'Four ways to fix it'
        },
        {
          topicId: punctuation.id,
          front: 'When do you use a semicolon?',
          back: 'Between two **independent clauses** that are closely related. Both sides must be complete sentences. "She studied hard**;** she passed the exam." Also between list items that contain internal commas.',
          hint: 'Like a period, but the ideas are connected'
        },
        {
          topicId: punctuation.id,
          front: 'When do you use a colon?',
          back: 'After a **complete sentence** to introduce a list, explanation, or elaboration. "She bought three things**:** eggs, milk, and bread." Never use a colon after "such as" or "including."',
          hint: 'Complete sentence before it, then the list or explanation'
        },
        {
          topicId: punctuation.id,
          front: 'What is the Oxford comma?',
          back: 'The comma before "and" in a list of three or more items: "red**,** blue**,** and yellow." The SAT uses the Oxford comma. Always include it.',
          hint: 'The comma before "and" in a list'
        },
        {
          topicId: punctuation.id,
          front: 'When do you use dashes (—) on the SAT?',
          back: 'To set off nonessential information, like commas but with more emphasis. Must come in PAIRS if in the middle of a sentence. "The team—exhausted but determined—finished the race."',
          hint: 'Like commas, but stronger; must come in pairs'
        },
        {
          topicId: punctuation.id,
          front: 'When should you NOT use a comma?',
          back: 'Never between: (1) subject and verb, (2) verb and its object, (3) before a subordinating conjunction at the end. "The dog, ran" ❌. "She said, that" ❌.',
          hint: 'Do not separate the core parts of a sentence'
        },
        {
          topicId: punctuation.id,
          front: 'How do you punctuate a nonrestrictive clause?',
          back: 'Use commas before and after: "My sister**,** who lives in Paris**,** is visiting." The clause adds extra info. Test: if you remove it, the sentence should still make sense.',
          hint: 'Commas on both sides of extra information'
        }
      ]
    })

    console.log('✓ sat-punctuation expanded')
  }

  // ============================================================
  // TOPIC 5: Punctuation — Commas and Semicolons
  // ============================================================
  const punctCS = await prisma.topic.findUnique({
    where: { slug: 'sat-punctuation-commas-semicolons' }
  })

  if (punctCS) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: punctCS.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Add commas where needed:\n"After the long tiring hike we ate sandwiches drank water and rested."',
          solution: `**Add commas for:**

1. After an introductory phrase: "After the long**,** tiring hike**,**"
2. Between coordinate adjectives: "long**,** tiring"
3. Between items in a list: "sandwiches**,** drank water**,** and rested"

**Corrected:** "After the long**,** tiring hike**,** we ate sandwiches**,** drank water**,** and rested."

**Rules applied:**
- Comma after introductory phrases (more than 3-4 words)
- Comma between adjectives that independently modify the noun (test: can you put "and" between them? "Long and tiring" → yes ✅)
- Commas in a list with Oxford comma

**Answer:** "After the long, tiring hike, we ate sandwiches, drank water, and rested."`
        },
        {
          topicId: punctCS.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Choose the correct option:\n(A) "The museum, which opened in 1985 has attracted millions of visitors."\n(B) "The museum, which opened in 1985, has attracted millions of visitors."\n(C) "The museum which opened in 1985, has attracted millions of visitors."',
          solution: `**Answer: (B)**

"Which opened in 1985" is a **nonrestrictive clause** (adds extra info). It must be set off by commas on BOTH sides.

**(A)** Missing the closing comma after "1985" ❌
**(B)** Commas on both sides of the clause ✅
**(C)** Missing the opening comma before "which" ❌

**Rule:** Nonrestrictive clauses are like parenthetical asides. They need punctuation on BOTH sides — either commas, dashes, or parentheses.

**Think of it like parentheses:**
"The museum (which opened in 1985) has attracted millions."

**SAT Trap:** If you see a comma on one side of a nonrestrictive clause but not the other, it's wrong. They MUST come in pairs.`
        },
        {
          topicId: punctCS.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'When should you use a semicolon instead of a comma?\n"The project was behind schedule (,/;) however (,/;) the team managed to finish on time."',
          solution: `**Use a semicolon before "however" and a comma after it:**

"The project was behind schedule**;** however**,** the team managed to finish on time." ✅

**Why:**
- "The project was behind schedule" = independent clause
- "the team managed to finish on time" = independent clause
- "However" is a **conjunctive adverb** (transitional word), NOT a conjunction

**Conjunctive adverbs need a semicolon before and comma after:**
; however,  ; therefore,  ; moreover,  ; furthermore,  ; nevertheless,  ; consequently,

**Compare with coordinating conjunctions (FANBOYS) which use comma only:**
, and  , but  , or  , nor  , for  , yet  , so

**Wrong:** "...schedule, however, the team..." ← comma splice!
**Wrong:** "...schedule; however; the team..." ← semicolon after "however" is wrong

**Answer:** Semicolon before "however," comma after it.`
        },
        {
          topicId: punctCS.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Add correct punctuation:\n"The conference featured speakers from three cities New York New York Chicago Illinois and Austin Texas."',
          solution: `**The list items contain internal commas (city, state), so use SEMICOLONS between items:**

"The conference featured speakers from three cities**:** New York**,** New York**;** Chicago**,** Illinois**;** and Austin**,** Texas."

**Punctuation used:**
1. **Colon** after "cities" — introduces the list (preceded by a complete sentence)
2. **Commas** between city and state
3. **Semicolons** between list items (because items contain internal commas)

**Why semicolons?**
Without them: "New York, New York, Chicago, Illinois, and Austin, Texas" — is that 6 items or 3? The semicolons clarify grouping.

**Answer:** "The conference featured speakers from three cities: New York, New York; Chicago, Illinois; and Austin, Texas."

**Rule:** Use semicolons to separate items in a list when the items themselves contain commas.`
        },
        {
          topicId: punctCS.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Determine whether each comma is correct, unnecessary, or missing:\n"The old, brick, factory, which had been abandoned for decades was finally demolished, to make way for a new park."',
          solution: `**Evaluate each comma:**

1. "old**,** brick" — ❌ UNNECESSARY. "Old" and "brick" are not coordinate adjectives. "Old brick factory" = "brick" is part of the noun. Test: "old AND brick factory"? No. Remove this comma.

2. "brick**,** factory" — ❌ UNNECESSARY. Never separate the last adjective from its noun with a comma.

3. "factory**,** which" — ✅ CORRECT. Opens a nonrestrictive clause.

4. MISSING comma after "decades" — ❌ MISSING. Closes the nonrestrictive clause. Add: "decades**,**"

5. "demolished**,** to" — ❌ UNNECESSARY. Don't separate a verb from its purpose/infinitive phrase.

**Corrected:**
"The old brick factory**,** which had been abandoned for decades**,** was finally demolished to make way for a new park." ✅

**Key rules applied:**
- Don't put commas between non-coordinate adjectives
- Never separate an adjective from its noun with a comma
- Nonrestrictive clauses need commas on BOTH sides
- Don't separate a verb from its complement`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: punctCS.id,
          front: 'What are coordinate adjectives and how do you punctuate them?',
          back: 'Adjectives that independently modify a noun. Separate with commas: "a tall, elegant building." Test: Can you put "and" between them AND switch their order? If yes → comma. "Tall and elegant" ✓ "Elegant, tall" ✓',
          hint: 'The "and" test and the swap test'
        },
        {
          topicId: punctCS.id,
          front: 'What are conjunctive adverbs and how do you punctuate them?',
          back: 'Words like however, therefore, moreover, nevertheless, consequently. Between clauses: **semicolon before, comma after**. "I studied; therefore, I passed."',
          hint: 'Semicolon ; word, comma'
        },
        {
          topicId: punctCS.id,
          front: 'When do you use semicolons in a list?',
          back: 'When list items contain internal commas: "We visited Paris, France; London, England; and Tokyo, Japan." The semicolons clarify where one item ends and the next begins.',
          hint: 'Items with commas inside them'
        },
        {
          topicId: punctCS.id,
          front: 'What is a comma rule for introductory phrases?',
          back: 'Use a comma after introductory phrases of ~3+ words: "After the long meeting**,** we went home." "In 2023**,** the company expanded." Short phrases may omit the comma: "Today I ran."',
          hint: 'Comma after the introductory element'
        },
        {
          topicId: punctCS.id,
          front: 'Can you put a comma between a subject and its verb?',
          back: 'NO! Never separate a subject from its verb with a single comma. "The dog**,** ran away" ❌. Exception: a PAIR of commas for a nonrestrictive clause: "The dog, a golden retriever, ran away." ✅',
          hint: 'Only with paired commas for an aside'
        },
        {
          topicId: punctCS.id,
          front: 'What are the FANBOYS conjunctions?',
          back: '**F**or, **A**nd, **N**or, **B**ut, **O**r, **Y**et, **S**o. Use a comma BEFORE a FANBOYS conjunction joining two independent clauses: "I studied**,** and I passed."',
          hint: 'Seven coordinating conjunctions'
        },
        {
          topicId: punctCS.id,
          front: 'How do you decide between a comma and a semicolon?',
          back: '**Comma:** with a FANBOYS conjunction, for lists, after introductions, around nonessential info. **Semicolon:** between independent clauses WITHOUT a conjunction, before conjunctive adverbs, in lists with internal commas.',
          hint: 'Comma with FANBOYS; semicolon without'
        }
      ]
    })

    console.log('✓ sat-punctuation-commas-semicolons expanded')
  }

  // ============================================================
  // TOPIC 6: Sentence Structure
  // ============================================================
  const sentStruct = await prisma.topic.findUnique({
    where: { slug: 'sat-sentence-structure' }
  })

  if (sentStruct) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: sentStruct.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Identify the error: "Running through the park on a sunny afternoon."',
          solution: `**Error:** This is a **sentence fragment** — it has no main subject and verb.

"Running through the park on a sunny afternoon" is a participial phrase. It describes an action but doesn't tell us WHO is doing it and doesn't have a complete predicate.

**Fix options:**
1. Add a subject and verb: "**She was** running through the park on a sunny afternoon." ✅
2. Attach to a complete sentence: "Running through the park on a sunny afternoon, **she felt free.**" ✅

**What makes a complete sentence:**
1. A subject (who/what)
2. A verb (action/state)
3. A complete thought

**Answer:** Fragment — needs a subject and a main verb to be complete.`
        },
        {
          topicId: sentStruct.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Combine these sentences effectively:\n"The experiment yielded surprising results. The scientists decided to repeat it. They wanted to confirm their findings."',
          solution: `**Option 1 — Subordination:**
"Because the experiment yielded surprising results, the scientists decided to repeat it to confirm their findings." ✅
(Uses "because" to show cause-effect; "to confirm" combines sentences 2 and 3)

**Option 2 — Relative clause:**
"The experiment, which yielded surprising results, prompted the scientists to repeat it to confirm their findings." ✅

**Option 3 — Participial phrase:**
"Surprised by the results, the scientists decided to repeat the experiment to confirm their findings." ✅

**Avoid:**
- "The experiment yielded surprising results, and the scientists decided to repeat it, and they wanted to confirm their findings." ❌ (Too many "ands" — choppy)

**SAT Principle:** The most concise, clear combination is usually the best answer. Avoid unnecessary words and repetition.

**Answer:** "Because the experiment yielded surprising results, the scientists decided to repeat it to confirm their findings."`
        },
        {
          topicId: sentStruct.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'Fix the run-on sentence:\n"The storm knocked out power to the entire neighborhood residents had to use candles and flashlights for three days."',
          solution: `**This is a run-on sentence** — two independent clauses with no punctuation or conjunction between them.

**Fix 1 — Period:**
"The storm knocked out power to the entire neighborhood. Residents had to use candles and flashlights for three days."

**Fix 2 — Semicolon:**
"The storm knocked out power to the entire neighborhood; residents had to use candles and flashlights for three days."

**Fix 3 — Comma + conjunction:**
"The storm knocked out power to the entire neighborhood, so residents had to use candles and flashlights for three days."

**Fix 4 — Subordination:**
"After the storm knocked out power to the entire neighborhood, residents had to use candles and flashlights for three days."

**Best for SAT:** Fix 4 (subordination) is often the best answer because it shows the relationship between the clauses (cause → effect).

**Answer:** Any of these fixes would work; subordination shows the clearest logical connection.`
        },
        {
          topicId: sentStruct.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Fix the parallel structure error:\n"The scholarship program aims to identify talented students, providing financial support, and to connect them with mentors."',
          solution: `**Error:** The list items are not in parallel form:
- "to identify talented students" (infinitive)
- "providing financial support" (gerund — NOT parallel!)
- "to connect them with mentors" (infinitive)

**Fix — Use consistent infinitives:**
"The scholarship program aims **to identify** talented students, **to provide** financial support, and **to connect** them with mentors." ✅

**Or — Use consistent gerunds:**
"The scholarship program aims at **identifying** talented students, **providing** financial support, and **connecting** them with mentors." ✅

**Or — Simplify with one "to":**
"The scholarship program aims to identify talented students, provide financial support, and connect them with mentors." ✅

**Rule:** Items in a list must be in the same grammatical form (all infinitives, all gerunds, all nouns, etc.).

**Answer:** "...to identify talented students, provide financial support, and connect them with mentors."`
        },
        {
          topicId: sentStruct.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Which revision most effectively combines these sentences?\n"Marie Curie was a pioneering scientist. She was born in Poland. She moved to France. She conducted groundbreaking research on radioactivity. She won two Nobel Prizes."\n(A) "Marie Curie was a pioneering scientist who was born in Poland and moved to France and conducted groundbreaking research on radioactivity and won two Nobel Prizes."\n(B) "Born in Poland, Marie Curie moved to France, where she conducted groundbreaking research on radioactivity, ultimately winning two Nobel Prizes."\n(C) "Marie Curie, a pioneering scientist, she was born in Poland, moved to France, conducted groundbreaking research, and won two Nobel Prizes."',
          solution: `**Evaluate each option:**

**(A)** Chains everything with "and" — repetitive and hard to follow. ❌

**(B)** Uses varied sentence structure:
- "Born in Poland" — participial phrase (concise)
- "moved to France" — main clause
- "where she conducted..." — relative clause (shows location)
- "ultimately winning" — participial phrase (shows culmination)
✅ **This is the best answer** — concise, clear, and well-structured.

**(C)** "a pioneering scientist, she was born" — this creates a grammar error. After the appositive "a pioneering scientist," the sentence shouldn't add "she." ❌

**Why (B) is best:**
1. Most concise — eliminates "she was" repetition
2. Shows logical flow — birth → move → research → results
3. Uses varied construction — participial phrase, main clause, relative clause
4. The word "ultimately" connects the achievement to the journey

**Answer:** **(B)** — it combines the information most effectively with varied syntax and logical progression.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: sentStruct.id,
          front: 'What are the three types of sentence errors tested on the SAT?',
          back: '1. **Fragments** (incomplete sentence — missing subject or verb), 2. **Run-ons** (two sentences smashed together with no punctuation), 3. **Comma splices** (two sentences joined by only a comma).',
          hint: 'Fragment, run-on, comma splice'
        },
        {
          topicId: sentStruct.id,
          front: 'What is parallel structure?',
          back: 'Items in a list, comparison, or paired construction must be in the same grammatical form. "She likes **to swim, to run, and to bike**" (all infinitives), not "to swim, running, and bikes."',
          hint: 'Same form for each item'
        },
        {
          topicId: sentStruct.id,
          front: 'What is subordination and why is it useful?',
          back: 'Making one clause dependent using words like "because," "although," "when," "while," "since." It shows the RELATIONSHIP between ideas: "**Because** it rained, the game was canceled" (cause → effect).',
          hint: 'Makes one idea depend on another to show relationships'
        },
        {
          topicId: sentStruct.id,
          front: 'How do you identify a sentence fragment?',
          back: 'A fragment is missing: (1) a subject, (2) a main verb, or (3) a complete thought. "Because she left." has a subject and verb but starts with "because" — making it incomplete. It needs an independent clause.',
          hint: 'Check: subject? verb? complete thought?'
        },
        {
          topicId: sentStruct.id,
          front: 'What is the SAT\'s preference for sentence combining?',
          back: 'The SAT prefers the **most concise** answer that maintains clarity and meaning. Eliminate redundancy, avoid unnecessary "and" chains, and use varied construction (participial phrases, relative clauses).',
          hint: 'Concise, clear, and varied'
        },
        {
          topicId: sentStruct.id,
          front: 'What is the difference between a phrase and a clause?',
          back: '**Phrase:** A group of words WITHOUT a subject-verb pair ("running quickly," "in the park"). **Clause:** Has a subject AND verb. Independent clauses can stand alone; dependent clauses cannot.',
          hint: 'Clauses have subject + verb; phrases do not'
        },
        {
          topicId: sentStruct.id,
          front: 'What are common subordinating conjunctions?',
          back: 'Because, although, while, when, since, if, unless, until, after, before, even though, as, so that, whereas. They make a clause DEPENDENT (can\'t stand alone).',
          hint: 'They start dependent clauses'
        }
      ]
    })

    console.log('✓ sat-sentence-structure expanded')
  }

  // ============================================================
  // TOPIC 7: Pronoun Agreement
  // ============================================================
  const pronounAgr = await prisma.topic.findUnique({
    where: { slug: 'sat-pronoun-agreement' }
  })

  if (pronounAgr) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: pronounAgr.id,
          order: 10,
          difficulty: 'EASY',
          question: 'Fix the pronoun error:\n"When a student finishes their exam, they should turn it in to the proctor."',
          solution: `**Traditional grammar rule (what SAT tests):**

"A student" is singular, so the pronoun should be singular.

**Fix:** "When a student finishes **his or her** exam, **he or she** should turn it in to the proctor."

**Better fix (restructure):** "When **students** finish **their** exams, **they** should turn **them** in to the proctor." ✅
(Making both subject and pronoun plural avoids the awkward "his or her")

**Note:** In everyday language, singular "they" is increasingly accepted, but the SAT traditionally tests singular pronoun agreement. Follow SAT conventions on the test.

**Answer:** Either use "his or her" or make the subject plural ("students...their").`
        },
        {
          topicId: pronounAgr.id,
          order: 11,
          difficulty: 'MEDIUM',
          question: 'Fix the ambiguous pronoun:\n"When Sarah talked to her mother, she was upset."',
          solution: `**Error:** Ambiguous pronoun — who was upset, Sarah or her mother?

"She" could refer to either "Sarah" or "her mother."

**Fix 1 — Specify the noun:**
"When Sarah talked to her mother, **Sarah** was upset." ✅
"When Sarah talked to her mother, **her mother** was upset." ✅

**Fix 2 — Restructure:**
"**Sarah was upset** when she talked to her mother." ✅
(Now "she" clearly refers to "Sarah" — the subject of the sentence)

**Rule:** Every pronoun must have ONE clear antecedent. If a pronoun could refer to more than one noun, rewrite the sentence.

**Answer:** Replace "she" with the specific noun, or restructure so the reference is clear.

**SAT Tip:** Ambiguous pronouns are one of the most frequently tested errors. If you see a pronoun with two possible antecedents, it's probably wrong.`
        },
        {
          topicId: pronounAgr.id,
          order: 12,
          difficulty: 'MEDIUM',
          question: 'Choose the correct pronoun:\n"Neither of the girls remembered to bring (her/their) textbook."',
          solution: `**"Neither" is SINGULAR.**

Even though it refers to "two girls," "neither" means "not one, not the other" — it considers them individually.

**Correct:** "Neither of the girls remembered to bring **her** textbook." ✅

**Rule:** These indefinite pronouns are ALWAYS singular:
each, either, neither, everyone, everybody, anyone, anybody, someone, somebody, no one, nobody, one

**On the SAT:** This is a common trick. "Neither of the boys" seems plural (there are multiple boys), but "neither" isolates each one individually.

**Answer:** "her" — because "neither" is singular.`
        },
        {
          topicId: pronounAgr.id,
          order: 13,
          difficulty: 'HARD',
          question: 'Fix all pronoun errors:\n"The committee announced their decision. They said that each member must submit their report by Friday, which confused everyone."',
          solution: `**Error 1:** "The committee announced **their** decision."
- "Committee" is a collective noun — typically singular in American English
- **Fix:** "The committee announced **its** decision."

**Error 2:** "each member must submit **their** report"
- "Each" is singular → should be "**his or her** report"
- **Fix:** "each member must submit **his or her** report"

**Error 3:** "which confused everyone"
- "Which" is ambiguous — what confused everyone? The decision? The deadline? The submission requirement?
- **Fix:** Be specific: "a decision **that** confused everyone" or "This announcement confused everyone."

**Corrected:** "The committee announced **its** decision. **The chair** said that each member must submit **his or her** report by Friday, **an announcement that** confused everyone."

**Answer:** Three corrections — "its" for committee, "his or her" for each, and clarify what "which" refers to.`
        },
        {
          topicId: pronounAgr.id,
          order: 14,
          difficulty: 'EXPERT',
          question: 'Identify and fix the pronoun shift:\n"If one wants to succeed in college, you must develop strong study habits and manage your time effectively."',
          solution: `**Error:** Pronoun shift from "one" to "you"

The sentence starts with "one" (third person) and shifts to "you" (second person). This is inconsistent.

**Fix 1 — Keep "one" throughout:**
"If **one** wants to succeed in college, **one** must develop strong study habits and manage **one's** time effectively."
(Grammatically correct but sounds formal/stiff)

**Fix 2 — Keep "you" throughout:**
"If **you** want to succeed in college, **you** must develop strong study habits and manage **your** time effectively." ✅
(More natural in American English)

**Fix 3 — Use "students":**
"If **students** want to succeed in college, **they** must develop strong study habits and manage **their** time effectively." ✅

**Rule:** Maintain consistent pronoun person throughout a sentence and paragraph:
- First person: I, we
- Second person: you
- Third person: he, she, they, one

Don't shift between them without reason.

**Answer:** Change to consistently use "you" or "one" — don't mix.`
        }
      ]
    })

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: pronounAgr.id,
          front: 'What is pronoun-antecedent agreement?',
          back: 'A pronoun must agree with its antecedent (the word it refers to) in number, gender, and person. Singular antecedent → singular pronoun. "The dog wagged **its** tail" (not "their").',
          hint: 'The pronoun must match its referent'
        },
        {
          topicId: pronounAgr.id,
          front: 'What is an ambiguous pronoun?',
          back: 'A pronoun that could refer to more than one antecedent. "Tom told Jim **he** was late." (Who is "he"?) Fix by replacing the pronoun with the specific noun.',
          hint: 'When "he," "she," or "it" could mean multiple things'
        },
        {
          topicId: pronounAgr.id,
          front: 'Which indefinite pronouns are singular?',
          back: 'Each, every, either, neither, anyone, anybody, everyone, everybody, someone, somebody, no one, nobody, one, another. ALL take singular pronouns: "Everyone brought **his or her** lunch."',
          hint: 'The "-one," "-body," "-thing" pronouns are all singular'
        },
        {
          topicId: pronounAgr.id,
          front: 'Is "committee" singular or plural?',
          back: 'In American English, collective nouns (committee, team, family, jury, audience, class) are usually **singular**: "The committee made **its** decision." British English sometimes uses plural.',
          hint: 'Singular in American English (what the SAT uses)'
        },
        {
          topicId: pronounAgr.id,
          front: 'What is a pronoun shift?',
          back: 'Inconsistently changing pronoun person within a sentence or paragraph. "If **one** tries hard, **you** will succeed." Fix: keep consistent — "If you try hard, you will succeed."',
          hint: 'Switching between one/you/they without reason'
        },
        {
          topicId: pronounAgr.id,
          front: 'When is "which" problematic?',
          back: '"Which" must have a clear, specific antecedent. Vague "which" referring to an entire idea is often wrong: "He passed the test, **which** surprised everyone." Better: "His passing the test surprised everyone."',
          hint: 'Vague "which" clauses are common SAT errors'
        },
        {
          topicId: pronounAgr.id,
          front: 'How do you avoid awkward "his or her" constructions?',
          back: 'Make the subject PLURAL so "they/their" is correct: Instead of "Each student should bring his or her book," write "**Students** should bring **their** books." This is the preferred SAT fix.',
          hint: 'Make the subject plural instead'
        }
      ]
    })

    console.log('✓ sat-pronoun-agreement expanded')
  }

  console.log('\n✅ SAT Writing expansion complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
