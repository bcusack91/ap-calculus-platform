export const psychThinkingPart4Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Thinking & Problem Solving

**Part 4 of 7 — Judgment & Heuristics**

Heuristics are mental shortcuts we use for quick judgments. Tversky and Kahneman identified specific heuristics that lead to predictable, systematic errors. These are among the MOST tested topics on the AP exam.

### Key Definitions

| Term | Definition |
|------|-----------|
| **Availability heuristic** | Judging the FREQUENCY or LIKELIHOOD of an event by how easily examples come to mind |
| **Representativeness heuristic** | Judging the PROBABILITY that something belongs to a category by how well it matches the prototype of that category |
| **Anchoring bias** | Relying too heavily on the FIRST piece of information (the "anchor") when making judgments |
| **Confirmation bias** | Tendency to SEARCH FOR, INTERPRET, and REMEMBER information that confirms existing beliefs |
| **Base rate neglect** | Ignoring statistical base rates (how common something actually is) in favor of individual case information |

### Availability Heuristic (Tversky & Kahneman, 1973)

We judge how common or likely something is by how EASILY we can think of examples. If examples come to mind easily, we assume it's common.

| Judgment | Availability Leads To... | Reality |
|----------|------------------------|---------|
| "Shark attacks are common" | YES — vivid, memorable media coverage makes examples easy to recall | Far more people die from falling coconuts, vending machines, or cows |
| "Flying is dangerous" | YES — plane crashes are dramatic and extensively covered | Driving is statistically MUCH more dangerous per mile |
| "Crime is increasing" | YES — local news emphasizes violent crime | Crime has been declining for decades in most countries |

> **Key insight:** The availability heuristic is biased by VIVIDNESS, RECENCY, and EMOTIONAL IMPACT — not by actual frequency. If something is dramatic (shark attack) or recent (yesterday's news), it seems more common than it actually is.

### Representativeness Heuristic

We judge probability by how well something MATCHES our mental prototype.

**The Linda Problem (Tversky & Kahneman, 1983):**
> "Linda is 31, single, outspoken, and very bright. She majored in philosophy and was concerned with discrimination and social justice."

Which is more probable?
- A) Linda is a bank teller
- B) Linda is a bank teller AND is active in the feminist movement

**~85% of people choose B** — but this VIOLATES basic probability! B is always LESS probable than A because it requires BOTH conditions to be true (conjunction fallacy). People choose B because Linda's description MATCHES their prototype of a feminist but NOT a bank teller.
      `
    },
    {
      id: 'think4-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After watching several news reports about home invasions, a homeowner installs an expensive security system — even though her neighborhood has one of the lowest crime rates in the city. Her fear is MOST influenced by:',
            options: [
              'The representativeness heuristic — her neighborhood matches the prototype of a crime area',
              'The availability heuristic — vivid news coverage makes home invasions seem more common than they actually are',
              'Anchoring bias — the first crime report set an anchor for crime frequency',
              'Confirmation bias — she only watches crime-related news'
            ],
            correctAnswer: 1,
            explanation: 'Vivid, emotionally charged news stories about home invasions are easy to RECALL, making the homeowner overestimate the likelihood of this event in her own life. This is the availability heuristic: if examples come to mind easily (because of media coverage, recency, or emotional impact), we judge the event as MORE COMMON. The actual base rate of crime in her neighborhood (low) is being overridden by the ease of recalling dramatic examples.'
          },
          {
            question: 'A shy, organized person who loves reading and crossword puzzles is MOST likely to be guessed as a librarian rather than a salesperson, even though there are far more salespeople than librarians. This error occurs because of:',
            options: [
              'The availability heuristic — librarians are easier to recall than salespeople',
              'The representativeness heuristic — the description matches the librarian prototype, and base rates are ignored',
              'Functional fixedness — people can only see one occupation for this person',
              'The framing effect — the description is framed to suggest librarian'
            ],
            correctAnswer: 1,
            explanation: 'This is the representativeness heuristic with base rate neglect. The person\'s description MATCHES the prototype of "librarian" (shy, organized, loves reading), so people judge them as a librarian. But this ignores the BASE RATE: there are far more salespeople than librarians, so statistically, a shy organized person is still more likely to be a salesperson simply because there are so many more of them. The representativeness heuristic overrides statistical reasoning.'
          }
        ]
      }
    },
    {
      id: 'think4-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Anchoring Bias (Tversky & Kahneman, 1974)

The first piece of information you encounter (the "anchor") disproportionately influences subsequent judgments — even when the anchor is ARBITRARY.

**Classic Study:**
Participants spun a RIGGED wheel that landed on either 10 or 65. They were then asked: "What percentage of African countries are in the United Nations?"

| Anchor | Average Estimate |
|--------|-----------------|
| Wheel landed on 10 | ~25% |
| Wheel landed on 65 | ~45% |

The wheel was completely RANDOM and IRRELEVANT — yet it still influenced answers by nearly 20 percentage points!

**Real-World Anchoring:**

| Context | Anchor Effect |
|---------|--------------|
| **Salary negotiation** | The first number mentioned becomes the anchor — whoever states a number first has an advantage |
| **Real estate** | Listing price anchors the buyer's perception of value, even if inflated |
| **Retail pricing** | "Was $100, now $40" — the $100 anchor makes $40 seem like a bargain |
| **Sentencing** | Prosecutors' recommended sentences anchor judges' decisions |

### Confirmation Bias

| Aspect | Detail |
|--------|--------|
| **Selective search** | We look for CONFIRMING evidence and ignore disconfirming evidence |
| **Selective interpretation** | Ambiguous evidence is interpreted as supporting existing beliefs |
| **Selective memory** | We remember evidence that supports our beliefs better than evidence that challenges them |
| **Wason's 2-4-6 task** | People test ONLY confirming examples ("8-10-12?") instead of disconfirming ones ("3-2-1?") |

### Heuristic Comparison Table

| | Availability | Representativeness | Anchoring |
|--|------------|-------------------|-----------|
| **Question it answers** | "How COMMON is this?" | "What CATEGORY does this belong to?" | "What NUMBER should I estimate?" |
| **Based on** | Ease of recall | Match to prototype | First piece of information |
| **Error it causes** | Overestimating dramatic events | Ignoring base rates | Estimates biased toward anchor |
| **Classic example** | Fear of flying after plane crash news | "Linda problem" (conjunction fallacy) | Wheel of fortune → UN question |
| **Key researcher** | Tversky & Kahneman | Tversky & Kahneman | Tversky & Kahneman |

> **AP Connection:** The availability heuristic and representativeness heuristic are the TWO most-tested heuristics on the AP exam. The key: availability = "how easily can I THINK OF examples?" Representativeness = "how well does this MATCH my prototype?"
      `
    },
    {
      id: 'think4-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'The ___ heuristic judges frequency by how easily examples come to mind', answer: 'availability' },
          { label: 'The ___ heuristic judges probability by similarity to a prototype', answer: 'representativeness' },
          { label: 'Confirmation ___ is the tendency to search for information that supports existing beliefs', answer: 'bias' }
        ]
      }
    },
    {
      id: 'think4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Heuristic or Bias** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A person estimates that more words start with "K" than have "K" as the third letter (the reverse is true)', options: ['Availability heuristic', 'Representativeness heuristic', 'Anchoring bias', 'Confirmation bias'] },
          { label: 'A car buyer sees a $50,000 sticker price and thinks $38,000 is a great deal, even though the car is worth $30,000', options: ['Anchoring bias', 'Availability heuristic', 'Representativeness heuristic', 'Sunk cost fallacy'] },
          { label: 'A person who believes vaccines are harmful only reads anti-vaccine websites and dismisses medical research', options: ['Confirmation bias', 'Availability heuristic', 'Anchoring bias', 'Representativeness heuristic'] }
        ],
        correctAnswers: ['Availability heuristic', 'Anchoring bias', 'Confirmation bias'],
        hint1: 'It\'s easier to THINK OF words that START with K than words with K as the THIRD letter — ease of recall biases judgment.',
        hint2: 'The $50,000 sticker price is the FIRST number (anchor) — everything is judged relative to it.',
        hint3: 'Selectively seeking information that confirms existing beliefs while ignoring disconfirming evidence.',
        explanation: 'Letter K = availability heuristic (easier to generate words starting with K, so we think there are more). $50K sticker = anchoring (first price biases all subsequent judgments). Anti-vax websites = confirmation bias (selectively seeking confirming information).'
      }
    },
    {
      id: 'think4-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Heuristic Questions

**The #1 Confusion: Availability vs. Representativeness**

| Ask This Question | If Yes → |
|-------------------|----------|
| Is the person judging HOW COMMON something is based on examples that come to mind? | **Availability** |
| Is the person judging WHAT CATEGORY something belongs to based on how well it matches a stereotype/prototype? | **Representativeness** |

**Keyword Clues:**

| Keyword | Heuristic/Bias |
|---------|---------------|
| "Easy to recall," "comes to mind," "vivid," "recent news" | Availability |
| "Looks like," "matches," "typical," "stereotype," "base rate" | Representativeness |
| "First number," "initial offer," "starting price" | Anchoring |
| "Only looks for confirming," "ignores contradictory" | Confirmation bias |

> **AP Tip:** If a question describes someone who fears flying after seeing a plane crash on the news = AVAILABILITY (vivid example is easy to recall). If a question describes someone who assumes a quiet person must be a librarian = REPRESENTATIVENESS (matches the prototype). These are the two most commonly confused heuristics on the AP exam.
      `
    },
    {
      id: 'think4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A student is described as quiet, meticulous, and passionate about numbers. When asked whether this student is more likely studying accounting or psychology, most people guess accounting — even though psychology programs are far larger. Which TWO cognitive errors contribute to this incorrect judgment?',
            options: [
              'Availability heuristic + anchoring bias',
              'Representativeness heuristic + base rate neglect — the description matches the "accountant" prototype, and the larger size of psychology programs (base rate) is ignored',
              'Framing effect + sunk cost fallacy',
              'Confirmation bias + hindsight bias'
            ],
            correctAnswer: 1,
            explanation: 'Two errors work together: (1) Representativeness heuristic — the description matches the "accountant" prototype (quiet, meticulous, numbers), so people judge "accounting" as more likely. (2) Base rate neglect — psychology programs are MUCH larger, so any random student is more likely to be a psych major. But the vivid description overrides this statistical fact. This is the same mechanism as the Linda problem — prototype matching overrides probability.'
          },
          {
            question: 'A jury must decide if a defendant is guilty. The prosecution mentions that 80% of similar cases resulted in conviction (anchoring). Then the defense presents DNA evidence exonerating the defendant, but multiple jurors still lean toward guilty. The jurors\' judgment is MOST influenced by:',
            options: [
              'The availability heuristic — they recall convictions more easily than acquittals',
              'Anchoring bias — the 80% conviction rate anchors their probability estimate, making them discount even strong evidence',
              'The representativeness heuristic — the defendant matches their "criminal" prototype',
              'Loss aversion — they fear losing the case more than wrongly convicting'
            ],
            correctAnswer: 1,
            explanation: 'The 80% conviction rate serves as an ANCHOR — even when strong new evidence (DNA) should shift the probability dramatically, the anchor keeps the estimate higher than it should be. This is a dangerous real-world example of anchoring: once jurors hear a strong initial number, subsequent evidence is underweighted. The DNA evidence should logically be decisive, but the anchor biases interpretations. This is why some argue that conviction statistics should not be presented to juries.'
          }
        ]
      }
    }
  ]
}
