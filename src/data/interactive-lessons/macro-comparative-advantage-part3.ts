export const macroComparativeAdvantagePart3Data = {
  topicSlug: 'macro-comparative-advantage',
  sections: [
    {
      id: 'macrocom3-intro',
      type: 'text' as const,
      content: `
# 🌍 Comparative Advantage & Trade

**Part 3 of 7 — Specialization & Gains from Trade, by the Numbers**

---

| Section |
|---------|
| 📖 Before Trade: Self-Sufficiency |
| After Specialization: More Total Output |
| After Trade: Consuming Beyond the PPC |
| Where the Gains Come From |

> 🔑 **Key Concept:** When each country specializes in the good it produces at the **lower opportunity cost** and trades for the other, total output rises and **both** countries can consume a combination that lies **outside** their own production possibilities curves.
`
    },
    {
      id: 'macrocom3-worked',
      type: 'text' as const,
      content: `
## 📖 Before Trade: Self-Sufficiency

Two countries each use all of their resources for a month. Each has a straight-line (constant-cost) PPC.

| | Maximum shirts | Maximum hats | OC of 1 shirt | OC of 1 hat |
|---|---|---|---|---|
| **Ardon** | 40 | 20 | 20 ÷ 40 = 0.5 hats | 40 ÷ 20 = 2 shirts |
| **Belmar** | 30 | 30 | 30 ÷ 30 = 1 hat | 30 ÷ 30 = 1 shirt |

- Ardon has the comparative advantage in **shirts** (0.5 hats < 1 hat).
- Belmar has the comparative advantage in **hats** (1 shirt < 2 shirts).

Without trade (**autarky**), each country must produce everything it consumes. Suppose each splits its resources in half:

| | Shirts | Hats |
|---|---|---|
| Ardon | 20 | 10 |
| Belmar | 15 | 15 |
| **World total** | **35** | **25** |

## After Specialization: More Total Output

Now each country produces only its comparative-advantage good:

| | Shirts | Hats |
|---|---|---|
| Ardon (all shirts) | 40 | 0 |
| Belmar (all hats) | 0 | 30 |
| **World total** | **40** | **30** |

World output rises by **5 shirts and 5 hats**, with no new resources and no new technology. The gain comes entirely from moving production to the lower-cost producer.

## After Trade: Consuming Beyond the PPC

The countries agree on terms of trade of **1 hat = 1.5 shirts**, which lies between the two opportunity costs of a hat (1 shirt for Belmar, 2 shirts for Ardon). Ardon ships 15 shirts to Belmar and receives 15 ÷ 1.5 = 10 hats.

| | Produces | Exports | Imports | **Consumes** | Consumed before trade | Gain |
|---|---|---|---|---|---|---|
| **Ardon** | 40 shirts | 15 shirts | 10 hats | **25 shirts, 10 hats** | 20 shirts, 10 hats | +5 shirts |
| **Belmar** | 30 hats | 10 hats | 15 shirts | **15 shirts, 20 hats** | 15 shirts, 15 hats | +5 hats |

Check that each country is now consuming outside its own PPC:
- If Ardon produced 10 hats itself, it would give up 20 shirts and could make only 20 shirts. It now consumes 25.
- If Belmar produced 15 shirts itself, it could make only 15 hats. It now consumes 20.

> 🔑 **AP Connection:** A country's PPC limits what it can **produce**. Trade lets it **consume** beyond that limit. On a graph, the post-trade consumption point lies outside the country's own PPC.
`
    },
    {
      id: 'macrocom3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Before trade, Ardon produces 20 shirts and 10 hats and Belmar produces 15 shirts and 15 hats. If each specializes completely in its comparative advantage, total world output becomes',
            options: [
              "35 shirts and 25 hats",
              "40 shirts and 20 hats",
              "40 shirts and 30 hats",
              "30 shirts and 40 hats"
            ],
            correctAnswer: 2,
            explanation: 'Ardon devotes all its resources to shirts (40) and Belmar to hats (30). The 35 shirts and 25 hats figure is the pre-trade total, so specialization adds 5 of each good.'
          },
          {
            question: 'Why does world output rise when Ardon and Belmar specialize?',
            options: [
              "Each country now uses more resources than it did before trade.",
              "Each country makes the good where it has an absolute advantage.",
              "Each country raises the prices of the goods that it exports.",
              "Each good is made by the producer with the lower opportunity cost."
            ],
            correctAnswer: 3,
            explanation: 'Specialization moves production of each good to the country that gives up the least to make it, so the same resources yield more total output. Resources are unchanged, and absolute advantage does not determine the gains.'
          }
        ]
      }
    },
    {
      id: 'macrocom3-sources',
      type: 'text' as const,
      content: `
## 📖 Where the Gains Come From

Think of every unit of output as costing the world some amount of the other good.

| Good | Cost if Ardon makes it | Cost if Belmar makes it | Cheaper producer |
|---|---|---|---|
| 1 shirt | 0.5 hats | 1 hat | Ardon |
| 1 hat | 2 shirts | 1 shirt | Belmar |

When Ardon stops making 10 hats, it frees resources for 20 shirts. When Belmar stops making 15 shirts, it frees resources for 15 hats. Moving production to the lower-cost producer is what creates the extra 5 shirts and 5 hats.

### Specialization does not have to be complete

If one country is much larger, or if opportunity costs rise as a country specializes (a bowed-out PPC), countries may specialize only partly. The rule is the same: each country shifts resources **toward** its comparative-advantage good, and world output of at least one good can rise without output of the other falling.

### What the gains do not depend on

| Gains from trade do NOT require... | Why |
|---|---|
| Each country having an absolute advantage in something | Ardon could be more productive at both goods and gains would still exist, as long as opportunity costs differ |
| Equal sharing of the gains | Where the terms of trade fall inside the range decides how the gains are split |
| Bigger or richer trading partners | Only the difference in opportunity costs matters |

> 🔑 **AP Connection:** If two countries have **identical** opportunity costs, neither has a comparative advantage and specialization adds nothing to total output. Differences in opportunity cost are the source of every gain from trade.
`
    },
    {
      id: 'macrocom3-input',
      type: 'input-boxes' as const,
      content: `
**A Different Trade** ✍️

Ardon specializes in shirts (40) and Belmar in hats (30). The terms of trade stay at **1 hat = 1.5 shirts**, but this time Ardon exports **18 shirts**. Enter numbers only.

1) How many hats does Ardon receive?

2) How many shirts does Ardon consume after trade?

3) How many hats does Belmar consume after trade?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12', '22', '18'],
        hint1: 'Divide the shirts exported by 1.5 shirts per hat.',
        hint2: 'Subtract the exported shirts from Ardon\'s 40.',
        hint3: 'Belmar made 30 hats and sent some of them to Ardon.',
        explanation: 'Ardon receives 18 ÷ 1.5 = 12 hats and keeps 40 − 18 = 22 shirts. Belmar keeps 30 − 12 = 18 hats and receives 18 shirts. Both countries end up with more of both goods than their pre-trade bundles (Ardon 20 shirts and 10 hats; Belmar 15 of each).'
      }
    },
    {
      id: 'macrocom3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After trading 15 shirts for 10 hats, Ardon consumes 25 shirts and 10 hats. Relative to Ardon\'s own PPC, this combination lies',
            options: [
              "outside the PPC, which trade makes possible",
              "on the PPC, since Ardon is fully employed",
              "inside the PPC, since Ardon gave up shirts",
              "past the PPC, so it cannot be consumed"
            ],
            correctAnswer: 0,
            explanation: 'With 10 hats, Ardon could produce at most 20 shirts on its own, so 25 shirts and 10 hats lies outside its PPC. Ardon cannot produce that bundle, but trade lets it consume it.'
          },
          {
            question: 'Which statement about specialization and trade is accurate?',
            options: [
              "Only the country with absolute advantage in both goods gains from trade.",
              "A less productive country can still gain from trading.",
              "Trade raises world output only if each country has an absolute advantage.",
              "Gains require each country to keep producing some of both goods."
            ],
            correctAnswer: 1,
            explanation: 'Gains from trade come from differences in opportunity cost, which exist even when one country is more productive at everything. In the Ardon and Belmar example, complete specialization raised world output of both goods.'
          },
          {
            question: 'If Ardon and Belmar had identical opportunity costs for shirts and hats, specialization and trade would',
            options: [
              "raise output of both goods by a little",
              "benefit only the larger of the two countries",
              "add nothing to their combined output",
              "lower the combined output of both goods"
            ],
            correctAnswer: 2,
            explanation: 'With identical opportunity costs, moving production between the countries frees exactly as much of one good as it costs of the other, so total output does not change. Differences in opportunity cost are the source of the gains.'
          }
        ]
      }
    }
  ]
}
