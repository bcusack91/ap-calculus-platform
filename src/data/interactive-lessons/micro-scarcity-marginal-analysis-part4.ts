export const microScarcityMarginalAnalysisPart4Data = {
  topicSlug: 'micro-scarcity-marginal-analysis',
  sections: [
    {
      id: 'microsca4-intro',
      type: 'text' as const,
      content: `
# 📊 Scarcity & Marginal Analysis

**Part 4 of 7 — Comparative Advantage & Terms of Trade**

---

| Section |
|---------|
| 📖 Absolute vs. Comparative Advantage |
| The Output Method |
| The Input Method |
| Specialization and Terms of Trade |
| Consuming Beyond the PPC |

> 🔑 **Key Concept:** A country (or person) has a **comparative advantage** in the good it can produce at the **lower opportunity cost**. When each side specializes in its comparative advantage and trades at terms that lie **between** the two opportunity costs, both sides can consume more than they could on their own.
`
    },
    {
      id: 'microsca4-advantage',
      type: 'text' as const,
      content: `
## 📖 Absolute vs. Comparative Advantage

| Concept | Definition | How to find it |
|---|---|---|
| **Absolute advantage** | Producing **more** of a good with the same resources, or the same amount with **fewer** resources | Compare raw outputs (or raw input times) |
| **Comparative advantage** | Producing a good at a **lower opportunity cost** | Compute opportunity costs, then compare |

Key facts:
- A country can have an absolute advantage in **both** goods.
- A country **cannot** have a comparative advantage in both goods. If its opportunity cost of good X is lower, its opportunity cost of good Y (the reciprocal) must be higher. (The only exception is when the two countries' opportunity costs are identical; then neither has a comparative advantage and there are no gains from trade.)
- **Specialization and trade follow comparative advantage**, not absolute advantage.

## The Output Method

**Output data** tell you how much of each good a country can make with all its resources (or per worker, per day).

| Country | Wheat | Cloth |
|---|---|---|
| Atlantis | 80 | 40 |
| Borealia | 30 | 30 |

Each number is the maximum if the country produces only that good. Assume constant opportunity cost, so each PPC is a straight line.

**Rule for output data: Other goes Over.** The opportunity cost of one unit of a good = (output of the *other* good) ÷ (output of *this* good).

| Country | Opportunity cost of 1 wheat | Opportunity cost of 1 cloth |
|---|---|---|
| Atlantis | 40 ÷ 80 = **0.5 cloth** | 80 ÷ 40 = 2 wheat |
| Borealia | 30 ÷ 30 = 1 cloth | 30 ÷ 30 = **1 wheat** |

**Conclusions**
- **Absolute advantage:** Atlantis in both goods (80 > 30 and 40 > 30).
- **Comparative advantage in wheat:** Atlantis (0.5 cloth is less than 1 cloth).
- **Comparative advantage in cloth:** Borealia (1 wheat is less than 2 wheat).
- Atlantis should specialize in wheat and Borealia in cloth, even though Atlantis is better at making both.
`
    },
    {
      id: 'microsca4-input-method',
      type: 'text' as const,
      content: `
## The Input Method

**Input data** tell you how many resources (hours, workers, acres) it takes to make **one unit** of each good. A *smaller* number is better.

| Country | Hours per bike | Hours per TV |
|---|---|---|
| Cedar | 4 | 8 |
| Dalton | 6 | 9 |

**Rule for input data: Own goes Over.** The opportunity cost of one unit of a good = (hours for *this* good) ÷ (hours for the *other* good).

| Country | Opportunity cost of 1 bike | Opportunity cost of 1 TV |
|---|---|---|
| Cedar | 4 ÷ 8 = **0.5 TV** | 8 ÷ 4 = 2 bikes |
| Dalton | 6 ÷ 9 ≈ 0.67 TV | 9 ÷ 6 = **1.5 bikes** |

**Conclusions**
- **Absolute advantage:** Cedar in both goods (it needs fewer hours for each).
- **Comparative advantage in bikes:** Cedar (0.5 TV is less than 0.67 TV).
- **Comparative advantage in TVs:** Dalton (1.5 bikes is less than 2 bikes).

### Cross-Check by Converting to Output

Give each country 72 hours. Cedar can make 72 ÷ 4 = 18 bikes or 72 ÷ 8 = 9 TVs. Dalton can make 72 ÷ 6 = 12 bikes or 72 ÷ 9 = 8 TVs. Using "Other goes Over": Cedar's cost of a bike is 9 ÷ 18 = 0.5 TV, and Dalton's is 8 ÷ 12 ≈ 0.67 TV. Same answers.

> ⚠️ **The most common AP error** is using the output rule on input data (or the reverse). Before computing anything, ask: "Is this table *how much gets made* or *how much it takes to make one*?"
`
    },
    {
      id: 'microsca4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Atlantis can produce 80 wheat or 40 cloth. What is Atlantis\'s opportunity cost of producing 1 unit of cloth?',
            options: [
              '2 wheat',
              '0.5 wheat',
              '1 wheat',
              '40 wheat'
            ],
            correctAnswer: 0,
            explanation: 'With output data, the other good goes over: 80 wheat ÷ 40 cloth = 2 wheat per cloth. The value 0.5 is the cost of a wheat in cloth, the reciprocal, and 40 is the cloth output, not a cost.'
          },
          {
            question: 'Atlantis can produce more of both wheat and cloth than Borealia. Which conclusion is correct?',
            options: [
              'Atlantis can still gain by trading with Borealia',
              'Atlantis has a comparative advantage in both goods',
              'Trade can benefit Borealia but cannot help Atlantis',
              'Atlantis gains nothing from trading with Borealia'
            ],
            correctAnswer: 0,
            explanation: 'Gains from trade depend on differences in opportunity cost, not on absolute advantage. Atlantis has the lower cost of wheat and Borealia the lower cost of cloth, so both gain from specializing and trading; no country can hold a comparative advantage in both goods.'
          },
          {
            question: 'In Cedar a bike takes 4 hours and a TV 8 hours; in Dalton a bike takes 6 hours and a TV 9 hours. Which country has the comparative advantage in TVs?',
            options: [
              'Dalton, whose cost per TV is 1.5 bikes',
              'Cedar, whose cost per TV is 2 bikes',
              'Cedar, which needs fewer hours per TV',
              'Dalton, which needs 9 hours per TV'
            ],
            correctAnswer: 0,
            explanation: 'With input data, the own good goes over: a TV costs 8 ÷ 4 = 2 bikes in Cedar and 9 ÷ 6 = 1.5 bikes in Dalton, so Dalton has the lower cost. Needing fewer hours is absolute advantage, and 9 hours is an input, not an opportunity cost measured in the other good.'
          }
        ]
      }
    },
    {
      id: 'microsca4-trade',
      type: 'text' as const,
      content: `
## Specialization and Terms of Trade

The **terms of trade** are the rate at which one good is exchanged for the other. For trade to benefit **both** countries, the terms must lie **strictly between** the two countries' opportunity costs.

### Finding the Range (Atlantis and Borealia)

Atlantis exports wheat. Its cost of 1 wheat is 0.5 cloth; Borealia's is 1 cloth.

| Terms (cloth received per wheat) | Atlantis (gives up 0.5 cloth to make 1 wheat) | Borealia (would give up 1 cloth to make 1 wheat) | Result |
|---|---|---|---|
| 0.4 cloth | Loses: gets less than its 0.5 cost | Gains | Atlantis refuses |
| 0.5 cloth | No gain | Gains | Atlantis is indifferent |
| **0.75 cloth** | **Gains 0.25 cloth per wheat** | **Saves 0.25 cloth per wheat** | **Both gain** |
| 1 cloth | Gains | No gain | Borealia is indifferent |
| 1.25 cloth | Gains | Loses: pays more than its 1-cloth cost | Borealia refuses |

So mutually beneficial terms are **more than 0.5 and less than 1 cloth per wheat**. Equivalently, for cloth: more than 1 and less than 2 wheat per cloth.

Terms are often written as ratios. "4 wheat for 3 cloth" means 3 ÷ 4 = 0.75 cloth per wheat, which is inside the range.

### Worked Example: Gains from Trade

**Before trade**, each country consumes only what it makes:
- Atlantis: 60 wheat + 10 cloth (on its PPC: 60 + 2 × 10 = 80)
- Borealia: 12 wheat + 18 cloth (on its PPC: 12 + 18 = 30)
- Combined: 72 wheat + 28 cloth

**After specializing**, Atlantis makes 80 wheat and Borealia makes 30 cloth. Combined output rises to **80 wheat + 30 cloth**: 8 more wheat and 2 more cloth from the same resources.

**Trade at 4 wheat for 3 cloth:** Atlantis ships 16 wheat to Borealia for 12 cloth.

| Country | Before trade | After trade | Change |
|---|---|---|---|
| Atlantis | 60 wheat + 10 cloth | 64 wheat + 12 cloth | +4 wheat, +2 cloth |
| Borealia | 12 wheat + 18 cloth | 16 wheat + 18 cloth | +4 wheat, same cloth |

### Consuming Beyond the PPC

On its own, Atlantis could make only 80 − 2 × 12 = 56 wheat alongside 12 cloth. After trade it consumes 64 wheat and 12 cloth, a point **outside its own PPC**. Borealia could make only 30 − 18 = 12 wheat alongside 18 cloth, yet it consumes 16. Trade lets both countries consume beyond their production possibilities, even though neither PPC has shifted.

> 🔑 **AP Connection:** Free-response questions usually ask you to (1) identify absolute advantage, (2) compute opportunity costs and name the comparative advantage, (3) state which good each side should specialize in, and (4) judge whether given terms of trade benefit both sides. For step 4, always compare the terms to **both** opportunity costs, and remember that terms equal to one side's cost give that side no gain.
`
    },
    {
      id: 'microsca4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Northia can produce 20 tablets or 10 phones. Southia can produce 15 tablets or 12 phones. Both have constant opportunity costs.

**1)** What is Northia's opportunity cost of **one tablet**, in phones?

**2)** What is Southia's opportunity cost of **one phone**, in tablets?

**3)** Which country should specialize in phones? (Enter the country name.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.5', '1.25', 'Southia'],
        hint1: 'Output data: other goes over. Divide Northia\'s phones by its tablets.',
        hint2: 'Divide Southia\'s tablets by its phones: 15 ÷ 12.',
        hint3: 'Compare each country\'s cost of a phone. Northia\'s is 20 ÷ 10 = 2 tablets.',
        explanation: '1) 10 ÷ 20 = 0.5 phone per tablet. 2) 15 ÷ 12 = 1.25 tablets per phone. 3) A phone costs Southia 1.25 tablets but Northia 2 tablets, so Southia has the comparative advantage in phones, and Northia (0.5 phone per tablet versus Southia\'s 0.8) specializes in tablets.'
      }
    },
    {
      id: 'microsca4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Atlantis\'s opportunity cost of 1 wheat is 0.5 cloth, and Borealia\'s is 1 cloth. Which terms of trade would benefit both countries?',
            options: [
              '1 wheat for 1.25 cloth',
              '1 wheat for 0.75 cloth',
              '1 wheat for 0.4 cloth',
              '1 wheat for 0.5 cloth'
            ],
            correctAnswer: 1,
            explanation: 'Mutually beneficial terms lie strictly between the two opportunity costs, 0.5 and 1 cloth per wheat, and 0.75 cloth is the only option in that range. At 0.5 cloth Atlantis gains nothing, at 0.4 it loses, and at 1.25 Borealia would pay more than its own cost.'
          },
          {
            question: 'Using the same costs, suppose the terms of trade are exactly 1 wheat for 1 cloth. Which outcome follows?',
            options: [
              'Borealia gains nothing from buying wheat',
              'Atlantis gains nothing from selling wheat',
              'Both countries gain equally from the trade',
              'Neither country is willing to trade at all'
            ],
            correctAnswer: 0,
            explanation: 'At 1 cloth per wheat, Borealia pays exactly what it would sacrifice to make wheat itself, so it gains nothing. Atlantis receives 1 cloth for a wheat that costs it only 0.5 cloth, so Atlantis does gain.'
          },
          {
            question: 'After specializing and trading, Atlantis consumes 64 wheat and 12 cloth. Compared with Atlantis\'s own PPC, this combination lies',
            options: [
              'outside the curve',
              'on the curve',
              'inside the curve',
              'at the wheat intercept'
            ],
            correctAnswer: 0,
            explanation: 'Alone, Atlantis could make only 80 − 2 × 12 = 56 wheat alongside 12 cloth, so 64 wheat and 12 cloth lies outside its PPC. Trade lets a country consume beyond its production possibilities without any shift in the curve.'
          }
        ]
      }
    }
  ]
}
