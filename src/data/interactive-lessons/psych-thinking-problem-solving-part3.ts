export const psychThinkingPart3Data = {
  topicSlug: 'thinking-problem-solving',
  sections: [
    {
      id: 'think3-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Thinking & Problem Solving

**Part 3 of 7 — Decision Making**

How do we make choices? Research by Kahneman and Tversky revealed that human decision-making is systematically biased — we are NOT the rational calculators we think we are.

### Key Definitions

| Term | Definition |
|------|-----------|
| **Framing effect** | The way a question or choice is PRESENTED (framed) affects the decision, even when the options are logically identical |
| **Loss aversion** | Losses feel approximately TWICE as painful as equivalent gains feel pleasant — we hate losing more than we enjoy winning |
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
| **Result** | Gain frame → people choose the CERTAIN option (A) | Loss frame → people choose the RISKY option (B) |

> **The options are mathematically IDENTICAL** — but framing changes the decision. We are risk-averse with gains ("let's keep what we have") and risk-seeking with losses ("let's gamble to avoid losing"). This is a cornerstone finding of behavioral economics.
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
              'Loss aversion — Patient B fears the loss more than Patient A values the gain',
              'The framing effect — the way the information is presented changes the response, even though the content is identical',
              'Overconfidence — Patient A overestimates the surgery\'s success',
              'The sunk cost fallacy — Patient B considers past medical costs'
            ],
            correctAnswer: 1,
            explanation: 'This is a textbook framing effect: "90% survival" and "10% mortality" are mathematically IDENTICAL, but "mortality" (loss frame) triggers more negative feelings than "survival" (gain frame). The information is the same — only the PRESENTATION changes. This is why the framing effect matters in real life: doctors, politicians, and advertisers can influence decisions simply by choosing how to present identical information.'
          },
          {
            question: 'A person continues watching a terrible movie because they already paid \\$15 for the ticket, even though leaving and doing something enjoyable would make them happier. This BEST illustrates:',
            options: [
              'The framing effect — the ticket price frames the experience',
              'Loss aversion — the person wants to avoid losing the \\$15',
              'The sunk cost fallacy — the person continues because of past investment that can\'t be recovered',
              'Overconfidence — the person believes the movie will get better'
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
### 📚 Loss Aversion & Prospect Theory (Kahneman & Tversky, 1979)

**Prospect theory** is the foundation of behavioral economics. Its key insight: people evaluate outcomes relative to a REFERENCE POINT, and losses loom larger than gains.

| Principle | Explanation | Example |
|-----------|------------|---------|
| **Loss aversion** | Losing \\$100 feels WORSE than gaining \\$100 feels good (~2x worse) | People reject a coin flip where they could win \\$100 or lose \\$80, even though the expected value is positive |
| **Reference point** | Gains and losses are judged relative to a starting point, not absolute outcomes | A salary cut from \\$80K to \\$70K feels devastating; \\$70K for someone making \\$50K feels wonderful — same salary, different reference points |
| **Diminishing sensitivity** | The difference between \\$0 and \\$100 feels larger than between \\$1000 and \\$1100 | People drive across town to save \\$10 on a \\$20 item but not on a \\$500 item |
| **Risk aversion for gains** | People prefer a CERTAIN gain to a larger but risky gain | Prefer guaranteed \\$50 over 50% chance of \\$100 |
| **Risk seeking for losses** | People prefer a RISKY loss to a certain smaller loss | Prefer 50% chance of losing \\$100 over guaranteed loss of \\$50 |

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
          { label: 'Loss ___ means losses feel about twice as painful as equivalent gains feel good', answer: 'aversion' },
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
          { label: 'A company continues funding a failing project because they\'ve already spent \\$2 million on it', options: ['Sunk cost fallacy', 'Loss aversion', 'Framing effect', 'Belief perseverance'] },
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
| Loss aversion = the sunk cost fallacy | Loss aversion = losses hurt more than gains. Sunk cost = investing because of PAST costs. Related but different |
| Overconfidence only affects unintelligent people | Experts (doctors, lawyers, analysts) are ALSO overconfident — often MORE so |
| Belief perseverance = confirmation bias | Perseverance = keeping beliefs after disconfirmation. Confirmation bias = selectively seeking confirming evidence |
| Hindsight bias = actual foresight | Hindsight bias is an ILLUSION — you didn't actually predict it; you just believe you did after learning the outcome |

**Key Researchers:**
- **Kahneman & Tversky** → Prospect theory, framing effects, heuristics and biases
- **Daniel Kahneman** won the Nobel Prize in Economics (2002) — a psychologist winning an economics prize!

> **AP Tip:** The framing effect and loss aversion are HIGH-FREQUENCY topics. For framing, look for two options that are mathematically identical but presented differently. For loss aversion, look for someone overweighting a potential loss compared to an equivalent gain.
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
            question: 'A researcher finds that people will drive 20 minutes to save \\$10 on a \\$25 calculator but will NOT drive 20 minutes to save \\$10 on a \\$500 jacket. This irrational difference is BEST explained by:',
            options: [
              'The framing effect — the calculator saving is framed as larger',
              'Diminishing sensitivity — \\$10 feels like a bigger savings on a \\$25 item than on a \\$500 item, even though the actual savings is identical',
              'Loss aversion — people fear losing the money more for small purchases',
              'Overconfidence — people overestimate the value of the calculator savings'
            ],
            correctAnswer: 1,
            explanation: 'This is diminishing sensitivity from prospect theory. \\$10 is \\$10 regardless of the original price — 20 minutes of driving is the same tradeoff. But people evaluate gains relative to a reference point: \\$10 off \\$25 = 40% savings (feels big). \\$10 off \\$500 = 2% savings (feels tiny). The ABSOLUTE value (\\$10) is the same, but the RELATIVE value (percentage of original) differs. This violates rational economic theory but reflects how humans actually process value.'
          },
          {
            question: 'A team of executives predicted their new product would capture 30% of the market within one year. When it only achieved 8%, they attributed the failure to unexpected competition. Their initial prediction MOST demonstrates:',
            options: [
              'Hindsight bias — believing they should have predicted the competition',
              'The framing effect — the prediction was framed positively',
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
