export const psychThinkingPart3Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think3-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Thinking & Problem Solving

**Part 3 of 7 — Decision Making**

How do we make choices? Research on judgment and decision-making shows that human choices are systematically biased — we are NOT the rational calculators we think we are. The CED (2.2.A.5–2.2.A.6) names the influences to know: **mental set**, **priming**, **framing**, the **gambler's fallacy**, and the **sunk-cost fallacy**; skill 1.B adds **overconfidence**, **hindsight bias**, and **confirmation bias**.

### Key Definitions

| Term | Definition |
|------|-----------|
| **Framing effect** | The way a question or choice is PRESENTED (framed) affects the decision, even when the options are logically identical |
| **Priming** | Earlier exposure to a word, image, or idea activates related associations and nudges a later judgment or choice |
| **Gambler's fallacy** | Believing that a chance event is "due" because it has not happened recently, even though each event is independent |
| **Sunk cost fallacy** | Continuing to invest in something because of PAST investment (time, money, effort) rather than future value |
| **Overconfidence** | Overestimating the accuracy of one's own beliefs and predictions |
| **Belief perseverance** | Clinging to beliefs even after the evidence supporting them has been disproven |
| **Hindsight bias** | "I knew it all along" — after learning an outcome, believing you could have predicted it |

### The Framing Effect (Tversky & Kahneman, 1981)

**The Asian Disease Problem:**

| Frame | Option A | Option B |
|-------|----------|----------|
| **Gain frame** | "200 people will be SAVED" | "1/3 chance ALL 600 saved, 2/3 chance NO ONE saved" |
| **Loss frame** | "400 people will DIE" | "1/3 chance NO ONE dies, 2/3 chance ALL 600 die" |
| **Result** | Gain frame → people choose the CERTAIN option (Option A) | Loss frame → people choose the RISKY option (Option B) |

> **The options are mathematically IDENTICAL** — but framing changes the decision. When outcomes are worded as lives saved, most people pick the sure thing; when the same outcomes are worded as deaths, most people take the gamble. Only the wording changed.
      `
    },
    {
      id: 'think3-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A doctor tells Patient A: "This surgery has a 90% survival rate." She tells Patient B: "This surgery has a 10% mortality rate." Both patients receive identical information, but Patient B is more hesitant. This BEST illustrates:',
            options: [
              'Priming — an earlier word Patient B heard activated fearful thoughts before the visit',
              'The framing effect — the same facts worded differently change the response',
              'Overconfidence — Patient A overestimates the surgery\'s chance of success',
              'The sunk cost fallacy — Patient B is weighing the money already spent on medical care'
            ],
            correctAnswer: 1,
            explanation: 'This is a textbook framing effect: "90% survival" and "10% mortality" are mathematically IDENTICAL, but "mortality" (loss frame) triggers more negative feelings than "survival" (gain frame). The information is the same — only the PRESENTATION changes. This is why the framing effect matters in real life: doctors, politicians, and advertisers can influence decisions simply by choosing how to present identical information.'
          },
          {
            question: 'A person continues watching a terrible movie because they already paid \\$15 for the ticket, even though leaving and doing something enjoyable would make them happier. This BEST illustrates:',
            options: [
              'The framing effect — the ticket price frames how enjoyable the movie seems to be',
              'The gambler\'s fallacy — the person thinks a good scene is due after so many bad ones',
              'The sunk cost fallacy — an unrecoverable past cost is driving the choice',
              'Overconfidence — the person is overly sure the movie will improve before it ends'
            ],
            correctAnswer: 2,
            explanation: 'Classic sunk cost fallacy: the \\$15 is already spent (sunk) — it\'s gone whether you stay or leave. The rational choice is to leave and do something enjoyable, since staying doesn\'t recover the money. But people feel they must "get their money\'s worth," which leads to continuing an activity that provides no further benefit. The key test: "Would I start this activity NOW if I hadn\'t already invested?" If no, you\'re falling for the sunk cost fallacy.'
          }
        ]
      }
    },
    {
      id: 'think3-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Two More Decision Traps: Priming and the Gambler's Fallacy

**Priming** works below awareness: an earlier stimulus activates related ideas in memory, and those active ideas tilt the next judgment.

| Prime | Later judgment it nudges |
|-------|--------------------------|
| A store plays French music near the wine shelf | Shoppers pick French wine more often, and few mention the music when asked |
| Participants first unscramble words about rudeness | They interrupt an experimenter sooner than participants primed with polite words |
| A survey asks about recent hospital visits first | Later ratings of personal health come out lower |

**The gambler's fallacy** treats independent random events as if they kept score.

| Situation | Fallacious thought | Why it is wrong |
|-----------|-------------------|-----------------|
| A coin lands heads 5 times in a row | "Tails is due" | The coin has no memory; the next flip is still 50/50 |
| A roulette wheel shows red 8 times | "Bet on black now" | Each spin is independent of the last |
| A family has three daughters | "The next baby is surely a boy" | Each birth's odds are unchanged by earlier births |

> **Do not confuse it with the sunk-cost fallacy.** The gambler's fallacy is a wrong belief about PROBABILITY (the future outcome is "due"). The sunk-cost fallacy is a wrong use of PAST INVESTMENT ("I've already put in too much to quit").

### Overconfidence Bias

| Finding | Example |
|---------|---------|
| People set confidence intervals too narrow | When asked for 90% confidence ranges, people are correct only ~50% of the time |
| Planning fallacy | Students estimate 34 days to finish thesis, actually take 56 days on average |
| Persists despite feedback | Even after being shown they're miscalibrated, people remain overconfident |
| Experts are also affected | Doctors, lawyers, and financial analysts show overconfidence in their predictions |

### Belief Perseverance vs. Confirmation Bias

| | Belief Perseverance | Confirmation Bias |
|--|--------------------|--------------------|
| **What it is** | Maintaining beliefs AFTER disconfirming evidence | SEEKING only confirming evidence |
| **When it occurs** | After seeing evidence against your belief | While gathering new information |
| **Example** | Continuing to believe a myth after reading a debunking article | Only reading news sources that agree with you |
| **Key phrase** | "I still think..." (after being shown wrong) | "Let me find evidence that..." (selective search) |

> **AP Connection:** Both biases show that human reasoning is NOT purely logical. We are biased toward maintaining our existing beliefs — both by ignoring disconfirming evidence (perseverance) and by selectively seeking confirming evidence (confirmation bias).
      `
    },
    {
      id: 'think3-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'The ___ effect occurs when identical information presented differently leads to different decisions', answer: 'framing' },
          { label: 'Earlier exposure to a word or image that activates related ideas and shifts a later judgment is called ___', answer: 'priming' },
          { label: 'The sunk ___ fallacy is continuing to invest because of past costs that cannot be recovered', answer: 'cost' }
        ]
      }
    },
    {
      id: 'think3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Decision-Making Bias** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'After a stock market crash, an investor says "I knew the market was going to drop — all the signs were there"', options: ['Hindsight bias', 'Overconfidence', 'Framing effect', 'Sunk cost fallacy'] },
          { label: 'A company continues funding a failing project because they\'ve already spent \\$2 million on it', options: ['Sunk cost fallacy', 'Gambler\'s fallacy', 'Framing effect', 'Belief perseverance'] },
          { label: 'A voter is shown clear evidence that their preferred candidate lied, but continues to support them', options: ['Belief perseverance', 'Confirmation bias', 'Hindsight bias', 'Overconfidence'] }
        ],
        correctAnswers: ['Hindsight bias', 'Sunk cost fallacy', 'Belief perseverance'],
        hint1: '"I knew it all along" — after learning the outcome, believing you predicted it.',
        hint2: 'Past investment drives continued investment, even though the money is already gone.',
        hint3: 'Maintaining a belief AFTER being shown disconfirming evidence.',
        explanation: 'Investor = hindsight bias (retroactively believing you predicted the crash). Company = sunk cost fallacy (past \\$2M investment, which is gone, driving continued funding). Voter = belief perseverance (clinging to belief despite clear disconfirming evidence).'
      }
    },
    {
      id: 'think3-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Strategy: Decision-Making Questions

**Common Misconceptions:**

| Misconception | Correction |
|--------------|-----------|
| Framing effect = lying or manipulation | The information is IDENTICAL — only the presentation changes. No deception involved |
| The gambler's fallacy = the sunk cost fallacy | Gambler's fallacy = believing an independent chance outcome is "due." Sunk cost = continuing because of PAST costs. Different errors |
| Priming requires conscious awareness | Primes often work without the person noticing them, which is why people deny being influenced |
| Overconfidence only affects unintelligent people | Experts (doctors, lawyers, analysts) are ALSO overconfident — often MORE so |
| Belief perseverance = confirmation bias | Perseverance = keeping beliefs after disconfirmation. Confirmation bias = selectively seeking confirming evidence |
| Hindsight bias = actual foresight | Hindsight bias is an ILLUSION — you didn't actually predict it; you just believe you did after learning the outcome |

> **AP Tip:** For framing, look for two descriptions that are logically identical but worded differently. For priming, look for an EARLIER, often incidental, stimulus that shifts a LATER choice. For the gambler's fallacy, look for someone treating independent chance events as if they balance out.
      `
    },
    {
      id: 'think3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A basketball fan watches a player miss six free throws in a row. The fan tells a friend, "She is a 75% shooter, so she is due to make the next few." Assuming each shot is independent, the fan\'s reasoning BEST illustrates:',
            options: [
              'The gambler\'s fallacy — treating the missed shots as making a success more likely next',
              'The sunk cost fallacy — valuing the player because of the time already spent watching',
              'The framing effect — describing her as a 75% shooter changes how her misses are judged',
              'Hindsight bias — believing after the misses that the streak was predictable all along'
            ],
            correctAnswer: 0,
            explanation: 'The fan believes past misses make a make "due," which is the gambler\'s fallacy: if shots are independent, her chance on the next shot is about the same as always. The sunk cost fallacy concerns past investment, framing concerns wording of identical information, and hindsight bias concerns feeling an outcome was predictable after learning it.'
          },
          {
            question: 'A team of executives predicted their new product would capture 30% of the market within one year. When it only achieved 8%, they attributed the failure to unexpected competition. Their initial prediction MOST demonstrates:',
            options: [
              'Hindsight bias — believing they should have predicted the competition',
              'Priming — upbeat sales meetings activated optimistic thoughts',
              'Overconfidence — overestimating the accuracy of their prediction',
              'Belief perseverance — continuing to believe in the product despite poor sales'
            ],
            correctAnswer: 2,
            explanation: 'The executives\' prediction of 30% (vs. actual 8%) is a classic example of overconfidence bias — they dramatically overestimated their ability to predict market performance. Experts are particularly susceptible to overconfidence because their expertise gives them a false sense of certainty. The attribution to "unexpected competition" may also reflect the self-serving bias (blaming external factors for failure), but the PRIMARY issue is the overconfident initial prediction.'
          }
        ]
      }
    }
  ]
}
