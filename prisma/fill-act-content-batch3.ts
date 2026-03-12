import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📝 Filling in ACT content (Batch 3 - English continued + Science + Reading)...\n');

  // Usage and Style (ACT English)
  await prisma.topic.update({
    where: { slug: 'usage-and-style' },
    data: {
      textContent: `# Usage and Style (ACT English)

## Word Choice and Diction

### Precision

**Choose the most exact word for the context:**

❌ "The scientist did an experiment."  
✓ "The scientist **conducted** an experiment."

❌ "The storm was really bad."  
✓ "The storm was **severe**."

**Avoid vague words:** thing, stuff, nice, good, bad, really, very

### Formal vs Informal

**ACT prefers formal academic writing:**

❌ "The study was kinda interesting." (too informal)  
✓ "The study was **somewhat** interesting."

❌ "Lots of people showed up." (informal)  
✓ "**Many** people attended."

**Avoid:**
- Contractions in formal writing (unless in quotes)
- Slang: "cool," "awesome," "totally"
- Colloquialisms: "a lot," "kind of," "sort of"

### Commonly Confused Words

**Affect vs Effect:**
- **Affect** (verb): to influence  
  ✓ "The weather **affected** our plans."
- **Effect** (noun): result  
  ✓ "The **effect** was significant."
- **Effect** (verb - rare): to bring about  
  ✓ "The new law will **effect** change."

**Accept vs Except:**
- **Accept**: receive, agree to  
  ✓ "I **accept** your apology."
- **Except**: excluding  
  ✓ "Everyone went **except** Tom."

**Than vs Then:**
- **Than**: comparison  
  ✓ "She is taller **than** I am."
- **Then**: time, sequence  
  ✓ "We ate dinner; **then** we watched a movie."

**Fewer vs Less:**
- **Fewer**: countable items  
  ✓ "**Fewer** students attended."
- **Less**: uncountable quantities  
  ✓ "**Less** water is needed."

**Among vs Between:**
- **Between**: two items  
  ✓ "Choose **between** chocolate and vanilla."
- **Among**: three or more  
  ✓ "The prize was divided **among** the five winners."

### Redundancy

**Eliminate unnecessary repetition:**

❌ "She returned **back** to her home."  
✓ "She **returned** to her home."

❌ "The reason is **because**..."  
✓ "The reason is **that**..."

❌ "In my opinion, I think..."  
✓ "I think..." OR "In my opinion,..."

❌ "At 8 a.m. **in the morning**"  
✓ "At 8 a.m."

## Tone and Style

### Consistency

**Maintain consistent:**

**Point of view:**
❌ "When **you** study hard, **one** can succeed."  
✓ "When **you** study hard, **you** can succeed."

**Verb tense:**
❌ "She walked to the store and **buys** milk." (shifts from past to present)  
✓ "She walked to the store and **bought** milk."

**Formality level:**
❌ "The experiment yielded significant results; **it was totally awesome**."  
✓ "The experiment yielded significant results; **it was quite impressive**."

### Sentence Variety

**Good writing mixes sentence structures:**

**Avoid repetitive patterns:**
❌ "The dog ran. The cat jumped. The bird flew." (all same structure)  
✓ "The dog ran swiftly. Meanwhile, the cat jumped over the fence, and the bird flew away."

**Vary sentence length:**
- Short sentences: emphasis, clarity
- Long sentences: complex ideas, flow
- Mix both for engaging writing

## Conciseness

### Eliminate Wordiness

**Say more with fewer words:**

| Wordy | Concise |
|-------|---------|
| at this point in time | now |
| in the event that | if |
| due to the fact that | because |
| in spite of the fact that | although |
| has the ability to | can |
| in order to | to |
| for the purpose of | for, to |
| is able to | can |
| make an assumption | assume |
| come to a conclusion | conclude |

**Example:**
❌ "In the event that it rains, we will cancel the game due to the fact that the field will be wet."  
✓ "If it rains, we will cancel the game because the field will be wet."

### Remove Unnecessary Modifiers

❌ "The book was **completely** finished."  
✓ "The book was finished."

❌ "She **totally** agreed with the decision."  
✓ "She agreed with the decision."

**Exception:** Keep modifiers that add meaning
✓ "The exam was **extremely** difficult." (adds useful emphasis)

## Idioms and Prepositions

### Common ACT Idioms

**With "different":**
✓ "different **from**" (preferred in formal writing)  
❌ "different than"

**With "ability":**
✓ "ability **to**" (not "ability of")  
✓ "He has the ability **to** succeed."

**With "try":**
✓ "try **to**" (not "try and")  
✓ "I will try **to** help."

**With "type" or "kind":**
✓ "type **of**" / "kind **of**"  
✓ "What type **of** car is that?"

**With "regard":**
✓ "in regard **to**" or "with regard **to**"  
✓ "regarding" (simpler)  
❌ "in regards to"

### Prepositional Pairs

**Memorize these common pairs:**

- agree **with** (person), agree **to** (plan), agree **on** (topic)
- angry **with** (person), angry **about** (situation)
- different **from**
- independent **of**
- native **to**
- prevent **from**
- prohibit **from**
- responsible **for**
- similar **to**
- superior **to**

## Transitions and Logical Flow

### Common Transitions

**Addition:**
- furthermore, moreover, additionally, also, in addition

**Contrast:**
- however, nevertheless, nonetheless, on the other hand, conversely

**Cause/Effect:**
- therefore, consequently, thus, as a result, accordingly

**Example:**
- for example, for instance, specifically, namely

**Time:**
- meanwhile, subsequently, previously, finally

**Emphasis:**
- indeed, in fact, certainly

### Choosing Right Transition

**Match relationship between ideas:**

❌ "I studied all night. **However**, I felt prepared."  
(However shows contrast, but these ideas agree)  
✓ "I studied all night. **Therefore**, I felt prepared."

✓ "I studied all night. **However**, I still felt unprepared."  
(Now however makes sense — contrast between studying and feeling unprepared)

## Active vs Passive Voice

### Active Voice (Preferred)

**Subject does the action:**
✓ "The researcher **conducted** the experiment."

### Passive Voice

**Action is done to subject:**
"The experiment **was conducted** by the researcher."

**When passive is acceptable:**
- Actor unknown: "The window was broken."
- Actor unimportant: "The tests were administered."
- Emphasis on action/receiver: "The law was passed in 1965."

**Usually choose active for:**
- Clarity
- Conciseness
- Directness

## ACT Question Types

### Type 1: Word Choice

**Given context, choose most precise word:**

**Strategy:**
- Eliminate vague words
- Choose word that fits formal tone
- Consider connotation (positive/negative feeling)

### Type 2: Delete or Keep

**"Should the writer delete this phrase?"**

**Keep if:**
- Adds important information
- Clarifies meaning
- Provides necessary example

**Delete if:**
- Redundant
- Obvious/unnecessary
- Off-topic

### Type 3: Transition Words

**Which transition fits best?**

**Strategy:**
1. Identify relationship between sentences
2. Eliminate transitions that show wrong relationship
3. Choose most precise option

### Type 4: Conciseness

**Multiple options say same thing — choose shortest:**

**Strategy:**
- If meaning is identical, pick shortest
- Don't sacrifice clarity for brevity
- Watch for changes in meaning

## Common ACT Mistakes

❌ **Using informal language** in formal passage  
"kinda," "a lot," "really good" → too casual

❌ **Choosing wordy over concise**  
"due to the fact that" when "because" works

❌ **Keeping redundant information**  
"return back," "8 a.m. in the morning"

❌ **Wrong preposition with idiom**  
"ability of" instead of "ability to"

❌ **Inconsistent tone**  
Mixing formal and informal language

❌ **Wrong transition word**  
"However" when ideas don't contrast

## Quick Tips for ACT

✓ **Shorter is better** — if meaning is same, choose concise  
✓ **Formal beats informal** — avoid slang and contractions  
✓ **Active beats passive** — unless passive has good reason  
✓ **Specific beats vague** — "conducted" better than "did"  
✓ **Delete redundancy** — "return back" → "return"  
✓ **Match transition to relationship** — contrast = however, agreement = furthermore  
✓ **Consistent tone/tense/POV** throughout passage

## Practice Approach

1. **Read for context** — understand passage tone and purpose
2. **Identify what's being tested** — word choice? transition? conciseness?
3. **Eliminate clearly wrong** — informal, redundant, wrong transition
4. **Choose most effective** — precise, concise, appropriate tone
5. **Reread with your choice** — does it flow naturally?

**Remember:** ACT English rewards clear, concise, formal writing. When in doubt, choose the option that's most direct and precise!
`
    }
  });

  console.log('✅ Filled Usage and Style\n');

  // Rhetorical Skills (duplicate)
  await prisma.topic.update({
    where: { slug: 'rhetorical-skills' },
    data: {
      textContent: `# Rhetorical Skills (ACT English)

## Strategy and Organization

### Passage Organization

**ACT tests whether you understand:**
- Best introduction/conclusion
- Logical sentence order
- Paragraph placement
- Transitions between ideas

### Type 1: Opening Sentences

**Effective opening should:**
- Introduce topic
- Engage reader
- Set tone for passage
- Connect to what follows

**Strategy:**
- Read entire paragraph first
- Eliminate openings that are too narrow/specific
- Eliminate openings that don't relate to rest of paragraph
- Choose one that establishes main idea

### Type 2: Closing Sentences

**Effective closing should:**
- Wrap up paragraph's main point
- Connect to passage theme
- Provide sense of completion
- NOT introduce new information

**Strategy:**
- Eliminate conclusions that bring up new topics
- Choose one that reinforces paragraph's main idea
- Prefer option that ties to broader passage theme

### Type 3: Sentence Placement

**"Sentence X should be placed..."**

**Strategy:**
1. Read the sentence carefully
2. Look for connecting words (this, that, these, such)
3. Find what those words refer to
4. Place sentence AFTER its reference
5. Check chronology and logic

**Example:**
[1] Marie Curie was a pioneering scientist. [2] She discovered radium and polonium. [3] **This achievement** earned her two Nobel Prizes. [4] She was born in Poland in 1867.

Sentence 4 should come BEFORE sentence 1 (birth before achievements)  
Sentence 3 must follow sentence 2 ("this achievement" refers to discoveries)

### Type 4: Paragraph Order

**"Paragraph X should be placed..."**

**Strategy:**
- Identify topic of each paragraph
- Look for chronological clues
- Find connections between paragraphs
- Arrange from general to specific, or in logical sequence

## Style and Tone

### Matching Tone

**Passages have consistent tone:**
- Formal/academic
- Informal/conversational
- Nostalgic
- Serious
- Humorous

**Your job:** Choose options that match existing tone

❌ "The study yielded impressive data; **it was totally sick**!" (tone clash)  
✓ "The study yielded impressive data; **the results were remarkable**."

### Audience Awareness

**Consider who the passage is written for:**
- General public: clear, accessible language
- Experts: technical terms acceptable
- Students: educational, informative
- Readers of specific publication: match publication's style

**Strategy:**
- Identify intended audience from context
- Choose language appropriate for that audience

## Development and Support

### Type 1: Adding Information

**"Should the writer add this sentence?"**

**Add if it:**
- Supports paragraph's main idea
- Provides relevant example
- Clarifies confusing point
- Adds important detail

**DON'T add if it:**
- Introduces unrelated topic
- Repeats information already stated
- Contradicts passage
- Is too general/vague

**ACT trick:** Even if sentence is interesting or true, DON'T add if irrelevant

### Type 2: Deleting Information

**"Should the writer delete this phrase?"**

**Delete if it:**
- Is redundant
- Is obvious from context
- Interrupts flow
- Is off-topic

**Keep if it:**
- Adds important detail
- Clarifies meaning
- Provides necessary transition
- Develops the idea

### Type 3: Most Specific Detail

**Choose option with most specific, relevant detail:**

❌ "The building was big." (vague)  
✓ "The building stood fifteen stories tall." (specific)

❌ "Many people attended." (vague)  
✓ "Over 500 people attended." (specific)

**Strategy:** Choose concrete over abstract, specific over general

## Purpose and Effect

### Type 1: Writer's Goal

**"The writer wants to emphasize X. Which choice best accomplishes this?"**

**Strategy:**
1. Identify what needs to be emphasized
2. Eliminate options that don't address it
3. Choose option that most directly/strongly emphasizes the point

### Type 2: Effect on Reader

**"Which choice would most effectively..."**
- ...engage the reader?
- ...establish the setting?
- ...create a transition?
- ...conclude the paragraph?

**Strategy:**
- Understand the desired effect
- Choose option that best achieves that effect
- Consider context and tone

## Relevance and Focus

### Staying On Topic

**Every sentence should:**
- Relate to paragraph's main idea
- Support passage's thesis
- Fit logically with surrounding sentences

**Red flags for irrelevant sentences:**
- Introduces completely different topic
- Provides interesting but unrelated fact
- Belongs in different paragraph

**Example:**
Paragraph about Marie Curie's scientific achievements:  
❌ "Warsaw, her birthplace, is the capital of Poland." (relevant to her, but not to paragraph's focus on achievements)

### Main Idea Questions

**"Which best states the main idea of this paragraph?"**

**Strategy:**
- Too broad: Could apply to any paragraph on the topic
- Too narrow: Only covers one detail
- Just right: Covers main point without being too general

## Transitions

### Choosing Transitions

**Match transition to logical relationship:**

**Addition/Continuation:**
- furthermore, moreover, in addition, also, additionally

**Contrast:**
- however, nevertheless, on the other hand, conversely, in contrast

**Cause/Effect:**
- therefore, thus, consequently, as a result, accordingly

**Example:**
- for example, for instance, specifically

**Emphasis:**
- indeed, in fact, certainly

**Time:**
- meanwhile, subsequently, then, finally

**Strategy:**
1. Read sentence before transition
2. Read sentence after transition
3. Identify relationship
4. Choose transition that matches

## ACT Question Strategies

### Strategy: Read the Whole Paragraph

**Don't just look at underlined part:**
- Need context to judge relevance
- Need to see how ideas connect
- Need to understand tone and purpose

### Strategy: Elimination

**For rhetorical questions:**
1. Eliminate clearly wrong (wrong tone, off-topic, etc.)
2. Narrow to 2-3 options
3. Choose most effective/relevant

### Strategy: Check the Question Stem

**Many rhetorical questions include a goal:**
- "emphasize the challenge"
- "provide a specific example"
- "create a smooth transition"

**Match your answer to that goal!**

## Common ACT Mistakes

❌ **Choosing interesting but irrelevant information**  
Just because it's true doesn't mean it belongs

❌ **Not reading entire paragraph**  
Context is essential for rhetorical questions

❌ **Ignoring tone**  
Informal addition to formal passage = wrong

❌ **Adding redundant information**  
If it's already been said, don't say it again

❌ **Wrong transition word**  
"However" when ideas actually agree

❌ **Losing focus**  
Every sentence must relate to paragraph's main idea

## Quick Tips for ACT

✓ **Read whole paragraph** before answering rhetorical questions  
✓ **Stay on topic** — relevance beats interestingness  
✓ **Match tone** — formal with formal, informal with informal  
✓ **Specific beats vague** — concrete details are better  
✓ **Transitions show relationships** — match word to logic  
✓ **Opening ≠ closing** — openings introduce, closings wrap up  
✓ **Check the goal** — if question gives one, make sure your answer achieves it

## Decision Process for Add/Delete

**When asked "Should the writer add/delete this?"**

1. **What is the paragraph about?** (main idea)
2. **Does this sentence relate to that main idea?**
   - NO → Delete/Don't add
   - YES → Continue to #3
3. **Does it add new, useful information?**
   - NO (redundant) → Delete/Don't add
   - YES → Add/Keep
4. **Check the reason choices:**
   - Choose reason that matches your decision

**Remember:** ACT answer choices often include reasons. Make sure the reason matches your answer!

## Practice Approach

1. **Read entire passage or paragraph** — understand context
2. **Identify question type** — organization? development? tone?
3. **Determine what's needed** — what is the goal or effect?
4. **Eliminate wrong answers** — wrong tone, off-topic, etc.
5. **Choose most effective** — achieves goal, maintains focus
6. **Check the reason** — for yes/no questions, reason must match

**Remember:** Rhetorical Skills test your understanding of effective writing. Focus on relevance, tone, organization, and logical development!
`
    }
  });

  console.log('✅ Filled Rhetorical Skills (duplicate)\n');
  console.log('Continuing with ACT Science and Reading topics...\n');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
