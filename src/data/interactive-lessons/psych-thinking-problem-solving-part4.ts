export const psychThinkingPart4Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Thinking & Problem Solving

**Part 4 of 7 — Judgment & Heuristics**

Heuristics are mental shortcuts we use for quick judgments. The CED (2.2.A.4) names two that lead to predictable errors: the **representativeness heuristic** (judging by prior expectations or stereotypes) and the **availability heuristic** (judging by the first or most vivid example that comes to mind).

### Key Definitions

| Term | Definition |
|------|-----------|
| **Availability heuristic** | Judging the FREQUENCY or LIKELIHOOD of an event by how easily examples come to mind |
| **Representativeness heuristic** | Judging the PROBABILITY that something belongs to a category by how well it matches the prototype of that category |
| **Confirmation bias** | Tendency to SEARCH FOR, INTERPRET, and REMEMBER information that confirms existing beliefs |
| **Base rate neglect** | Ignoring statistical base rates (how common something actually is) in favor of individual case information |

### Availability Heuristic (Tversky & Kahneman, 1973)

We judge how common or likely something is by how EASILY we can think of examples. If examples come to mind easily, we assume it's common.

| Judgment | Availability Leads To... | Reality |
|----------|------------------------|---------|
| "Shark attacks are common" | YES — vivid, memorable media coverage makes examples easy to recall | Sharks kill only a handful of people worldwide in a typical year, while car crashes kill about 40,000 people a year in the United States alone |
| "Flying is dangerous" | YES — plane crashes are dramatic and extensively covered | Driving is statistically MUCH more dangerous per mile |
| "Crime is increasing" | YES — local news emphasizes violent crime | U.S. violent crime has fallen substantially since the early 1990s, yet in most years a majority of Americans tell pollsters crime is rising |

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
              'The representativeness heuristic — her neighborhood matches her prototype of a high-crime area',
              'The availability heuristic — vivid news coverage makes break-ins seem common',
              'Mental set — she keeps solving problems with the same approach that worked before',
              'Confirmation bias — she seeks out only news stories that confirm her fear of crime'
            ],
            correctAnswer: 1,
            explanation: 'Vivid, emotionally charged news stories about home invasions are easy to RECALL, making the homeowner overestimate the likelihood of this event in her own life. This is the availability heuristic: if examples come to mind easily (because of media coverage, recency, or emotional impact), we judge the event as MORE COMMON. The actual base rate of crime in her neighborhood (low) is being overridden by the ease of recalling dramatic examples.'
          },
          {
            question: 'A shy, organized person who loves reading and crossword puzzles is MOST likely to be guessed as a librarian rather than a salesperson, even though there are far more salespeople than librarians. This error occurs because of:',
            options: [
              'The availability heuristic — librarians are easier to bring to mind than salespeople',
              'The representativeness heuristic — the description fits the librarian prototype',
              'Functional fixedness — people can see only one occupation that fits this person',
              'The framing effect — the order of the description frames the person as a librarian'
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
### 📚 When Representativeness Becomes Stereotyping

The CED ties the representativeness heuristic directly to **stereotypes**: we judge a person by how well they match our mental prototype of a group, and that shortcut can override actual evidence about the individual.

| Situation | Heuristic at work | Hidden cost |
|-----------|-------------------|-------------|
| A hiring manager assumes a soft-spoken applicant "isn't a leader" | Representativeness — the applicant does not match the manager's leader prototype | Qualified people are screened out on appearance, not record |
| A teacher expects a student from a particular neighborhood to struggle | Representativeness — the student is matched to a group stereotype | Low expectations can become a self-fulfilling prophecy |
| A shopper assumes the most expensive brand is the best one | Representativeness — "pricey" fits the prototype of "high quality" | Price is treated as evidence of quality without checking |

### Availability: Vivid, Recent, First

The availability heuristic leans on whatever is easiest to retrieve. Three things make an example easy to retrieve:

| Feature | Example | Resulting misjudgment |
|---------|---------|----------------------|
| **Vividness** | A dramatic plane crash on every channel | Flying feels riskier than driving |
| **Recency** | A friend's car was stolen last week | Car theft feels like it is spiking |
| **First to mind** | Words that START with K come to mind before words with K in third place | People think K-first words are more common |

### Confirmation Bias

| Aspect | Detail |
|--------|--------|
| **Selective search** | We look for CONFIRMING evidence and ignore disconfirming evidence |
| **Selective interpretation** | Ambiguous evidence is interpreted as supporting existing beliefs |
| **Selective memory** | We remember evidence that supports our beliefs better than evidence that challenges them |
| **Wason's 2-4-6 task** | People test ONLY confirming examples ("8-10-12?") instead of disconfirming ones ("3-2-1?") |

### Heuristic Comparison Table

| | Availability | Representativeness |
|--|------------|-------------------|
| **Question it answers** | "How COMMON is this?" | "What CATEGORY does this belong to?" |
| **Based on** | Ease of recall | Match to prototype or stereotype |
| **Error it causes** | Overestimating dramatic or recent events | Ignoring how common each category really is |
| **Classic example** | Fear of flying after plane crash news | "Linda problem" |

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
          { label: 'A person estimates that more words start with "K" than have "K" as the third letter (the reverse is true)', options: ['Availability heuristic', 'Representativeness heuristic', 'Mental set', 'Confirmation bias'] },
          { label: 'A diner assumes a restaurant with candles and white tablecloths must serve better food than a plain diner, without reading any reviews', options: ['Representativeness heuristic', 'Availability heuristic', 'Confirmation bias', 'Sunk cost fallacy'] },
          { label: 'A person who believes vaccines are harmful only reads anti-vaccine websites and dismisses medical research', options: ['Confirmation bias', 'Availability heuristic', 'Framing effect', 'Representativeness heuristic'] }
        ],
        correctAnswers: ['Availability heuristic', 'Representativeness heuristic', 'Confirmation bias'],
        hint1: 'It\'s easier to THINK OF words that START with K than words with K as the THIRD letter — ease of recall biases judgment.',
        hint2: 'The decor matches a prototype of a "fine" restaurant, and the match is treated as evidence.',
        hint3: 'Selectively seeking information that confirms existing beliefs while ignoring disconfirming evidence.',
        explanation: 'Letter K = availability heuristic (easier to generate words starting with K, so we think there are more). Candlelit restaurant = representativeness (the setting fits a prototype of quality, so quality is assumed). Anti-vax websites = confirmation bias (selectively seeking confirming information).'
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
              'Availability heuristic + mental set — accountants come to mind easily and a familiar approach is reused',
              'Representativeness heuristic + base rate neglect — the profile fits an accountant and the base rate is ignored',
              'Framing effect + sunk cost fallacy — the word "numbers" frames the choice and past guesses lock it in',
              'Confirmation bias + hindsight bias — people seek clues that fit accounting and later feel they knew it'
            ],
            correctAnswer: 1,
            explanation: 'Two errors work together: (1) Representativeness heuristic — the description matches the "accountant" prototype (quiet, meticulous, numbers), so people judge "accounting" as more likely. (2) Base rate neglect — psychology programs are MUCH larger, so any random student is more likely to be a psych major. But the vivid description overrides this statistical fact. This is the same mechanism as the Linda problem — prototype matching overrides probability.'
          },
          {
            question: 'After a week of news coverage about a rare tropical illness that infected two travelers, a town council votes to spend most of its health budget on screening for that illness rather than on flu shots, which prevent far more local hospitalizations. The council\'s judgment is MOST influenced by:',
            options: [
              'The availability heuristic — the recent, vivid reports make this illness seem common',
              'The representativeness heuristic — the illness fits the members\' prototype of a typical disease',
              'The sunk cost fallacy — the council has already spent money studying tropical illnesses',
              'The gambler\'s fallacy — the council believes the town is due for an outbreak after a quiet year'
            ],
            correctAnswer: 0,
            explanation: 'Heavy, recent coverage makes the rare illness easy to bring to mind, so its likelihood is overestimated relative to the flu, which is the availability heuristic. Nothing in the scenario involves matching the illness to a prototype, past spending, or a belief that an event is due.'
          }
        ]
      }
    }
  ]
}
