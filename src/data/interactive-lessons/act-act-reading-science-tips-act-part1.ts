export const actReadSciTipsPart1Data = {
  topicSlug: 'act-reading-science-tips-act',
  sections: [
    {
      id: 'act-rsci-p1-intro',
      type: 'text' as const,
      content: `
# 🔬 ACT Reading + Science Tips

**Part 1 of 7 — ACT Reading Overview: Natural-Science Passages**

The Enhanced ACT Reading test gives you **36 questions in 40 minutes** (about 67 seconds per question), and every question has **four answer choices**. The questions come in **four passage sets**, usually nine questions each, drawn from four families: **literary narrative, social science, humanities, and natural science**. One set may be a pair of shorter passages on a shared topic.

This lesson focuses on the **natural-science** set, because it is the one that feels most like a textbook. It might explain how a natural process works, tell the story of a discovery, describe a study and its results, or weigh two explanations for a puzzling observation. **You do not need outside science knowledge.** Every answer is in the passage; the challenge is reading dense prose accurately.

| What the passage does | What questions ask | What to track |
|---|---|---|
| Explains a process | Sequence, cause and effect | Steps in order; what leads to what |
| Describes a study | Purpose, method, result | The question asked, what was changed, what was measured |
| Introduces technical terms | Meaning in context | Definitions tucked into the sentence |
| Reports a finding | Author's attitude, limits of a claim | Hedges such as *suggests*, *may*, *preliminary* |
| Compares explanations | Which view the evidence favors | Who claims what, and the author's lean |

## Map the Passage by Paragraph Role

Science passages are built from a small set of paragraph jobs. As you read, label each paragraph in two or three words:

1. **Phenomenon**: the thing being explained (a bird that survives freezing nights).
2. **Question or puzzle**: what scientists did not understand.
3. **Method**: what researchers did, measured, or compared.
4. **Result**: what they found, often with numbers.
5. **Interpretation**: what the result means, usually hedged.
6. **Open questions**: what is still unknown, or a caveat.

A map like "P1 puzzle, P2 method, P3 result, P4 caveat" answers most main-idea and function questions without rereading.

## Technical Terms: Read the Definition the Passage Gives You

The ACT never expects you to know jargon. When a term appears, the passage defines it nearby. Look for these signals:

- **Appositives**: "*torpor*, a deep, temporary drop in body temperature and activity, ..."
- **Naming phrases**: "*known as*," "*called*," "*referred to as*," "*that is*"
- **Examples**: "*keystone species*, such as sea otters, ..."
- **Contrast**: "Unlike *annual* plants, which die after one season, *perennials* ..."

If a sentence is thick with terms, give each one a short label (the "X-protein," the "deep roots") and keep reading. Only stop to decode a term when a question asks about it.

## Cause and Effect: Follow the Chain

Many natural-science questions ask *why* something happens or *what results* from it. Underline or note the links: **because, so, as a result, therefore, leads to, triggers, allows, prevents, depends on**. Science prose often builds a chain (A causes B, which causes C). A common wrong answer **skips a link** or **reverses the direction**, saying C causes A.

## Hedges and Limits: Claims Mean Exactly What They Say

Scientists write carefully, and ACT answers reward matching their caution.

| Wording in the passage | What it lets you conclude |
|---|---|
| *suggests, may, appears to, is consistent with* | Possible or likely, not proven |
| *preliminary, initial, early findings* | Further confirmation is needed |
| *under laboratory conditions*, *in greenhouse trials* | The result may not hold in the wild |
| *is associated with, correlates with* | The two go together; cause is not shown |
| *only in, exclusively, never observed outside* | A real limit you can reason from |
| *demonstrated, confirmed, established* | Strong; the author treats it as settled |

## Author's Attitude Toward a Finding

Questions ask how the author regards a study, a theory, or a scientist. Look at word choice: *striking, elegant, compelling* signal approval; *intriguing but limited, premature, unproven* signal caution; *flawed, overstated* signal criticism. Science authors are rarely extreme, so **"cautiously optimistic," "interested but skeptical," and "measured approval"** are common correct answers, while "dismissive" or "unreservedly enthusiastic" usually overstate the tone.
      `
    },
    {
      id: 'act-rsci-p1-worked',
      type: 'text' as const,
      content: `
## Worked Examples

Read this short natural-science passage, then open each example.

> On cold nights, many hummingbirds face a serious problem. Their tiny bodies lose heat quickly, and staying warm requires burning energy at a rate their stored fat cannot support until morning. Many species solve this with *torpor*, a temporary state in which body temperature and heart rate fall far below their daytime levels. A bird in deep torpor can let its body temperature drop by more than 20 °C, which sharply reduces the energy it spends overnight. The cost is vulnerability: a torpid bird responds slowly and needs time to warm up again at dawn. Researchers studying birds in mountain habitats have reported that individuals entering torpor more often tended to carry less fat in the evening, which suggests the state may be used most when energy reserves are low.

<details>
<summary><b>Example 1: A term defined in context</b></summary>

**Question:** As it is used in the passage, *torpor* most nearly means:

- a permanent slowing of growth in young birds
- a temporary drop in body temperature and activity
- a period of rapid feeding before nightfall
- a long seasonal migration to warmer areas

**Solution:**
1. Find the definition the passage supplies: torpor is "a temporary state in which body temperature and heart rate fall far below their daytime levels."
2. Match the key words: *temporary* and *lower body temperature*.
3. The answer is **a temporary drop in body temperature and activity**. "Permanent" contradicts "temporary," and feeding and migration are never mentioned.
</details>

<details>
<summary><b>Example 2: Cause and effect, plus a hedge</b></summary>

**Question:** According to the passage, the researchers' observation about fat reserves suggests that hummingbirds:

- enter torpor every night regardless of their condition
- gain fat as a direct result of entering torpor
- may rely on torpor most when stored energy is low
- avoid torpor because it leaves them vulnerable

**Solution:**
1. The observation: birds that entered torpor more often "tended to carry less fat in the evening."
2. The passage's own interpretation is hedged: the pattern "suggests the state may be used most when energy reserves are low."
3. The answer is **may rely on torpor most when stored energy is low**. "Every night regardless" ignores the link to fat. "Gain fat as a result" reverses the direction: low fat comes first, torpor follows. The vulnerability is a cost the passage mentions, but it does not say birds avoid torpor.
</details>
      `
    },
    {
      id: 'act-rsci-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Practice Passage A: How Ants Plant Forests** 🎯

> Walk through an eastern North American forest in spring and you may see wildflowers whose seeds carry a small, pale, fatty attachment. This structure, called an *elaiosome*, contains no part of the embryo; it exists, as far as botanists can tell, to attract ants. A foraging ant grips the elaiosome, hauls the entire seed back to its nest, and feeds the fatty portion to its larvae. The seed itself, hard and inedible to the ants, is then discarded, often in an underground waste chamber rich in nutrients from the colony's refuse.
>
> This arrangement, known as *myrmecochory*, appears to benefit the plant in several ways. Seeds moved to a nest escape the rodents that eat seeds left on the surface, and seeds buried even a few centimeters deep are better protected from ground fires. Because the waste chambers are rich in nutrients, seedlings there may also begin life in better soil than seedlings that sprout where the seed simply fell. The distances involved are short, usually only a few meters, so ants are not long-distance carriers; their contribution is less about how far seeds travel than about where they land.
      `,
      exercise: {
        questions: [
          {
            question: `As it is used in the passage, an *elaiosome* is best described as:`,
            options: [
              `the embryo inside a wildflower seed`,
              `a chamber in which ants store waste`,
              `a fatty structure on a seed`,
              `a type of ant that feeds on seeds`
            ],
            correctAnswer: 2,
            explanation: `The passage introduces the term right after describing "a small, pale, fatty attachment" and says it "contains no part of the embryo," so it is a fatty structure on the seed. The waste chamber is where the seed ends up, not the elaiosome itself, and the elaiosome belongs to the plant, not to an ant.`
          },
          {
            question: `According to the passage, which sequence of events is correct?`,
            options: [
              `Larvae eat the seed coat, then ants bury the remaining elaiosome`,
              `An ant carries the seed home, larvae eat the elaiosome, the seed is discarded`,
              `Rodents carry the seed to the nest, then ants remove its elaiosome`,
              `The seed sprouts on the surface, then ants move the seedling below`
            ],
            correctAnswer: 1,
            explanation: `The passage gives the order directly: the ant hauls the seed to the nest, feeds the fatty elaiosome to its larvae, then discards the hard seed. Larvae eat the elaiosome, not the seed coat, which is inedible to the ants. Rodents are the seed eaters the plant escapes, not carriers, and ants move seeds, not seedlings.`
          },
          {
            question: `The passage most strongly suggests that seeds left on the forest surface are more likely than seeds carried to a nest to:`,
            options: [
              `be eaten by rodents or damaged by fire`,
              `travel a long way from the parent plant`,
              `grow in soil richer in nutrients`,
              `lose their elaiosome to passing ants`
            ],
            correctAnswer: 0,
            explanation: `The second paragraph says nest seeds "escape the rodents that eat seeds left on the surface" and buried seeds are "better protected from ground fires," so surface seeds face both dangers. The passage says ants move seeds only a few meters, and it links richer soil to the nest, not the surface. Losing the elaiosome happens to carried seeds, not stranded ones.`
          },
          {
            question: `The final sentence of the passage mainly serves to:`,
            options: [
              `argue that ants are the most important seed carriers in the forest`,
              `suggest that myrmecochory harms plants more than it helps them`,
              `explain why rodents avoid seeds that ants have already carried`,
              `clarify that the benefit lies in where seeds land, not distance`
            ],
            correctAnswer: 3,
            explanation: `The sentence notes the short distances and concludes that the ants' "contribution is less about how far seeds travel than about where they land," which is a clarification of the benefit. It downplays ants as long-distance carriers, so it does not rank them first. The whole paragraph lists benefits, not harms, and rodent behavior is not discussed in that sentence.`
          }
        ]
      }
    },
    {
      id: 'act-rsci-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**What Does the Wording Allow?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A passage calls a result "preliminary." The safest inference is that the result …',
            options: ['has been disproven', 'still needs further confirmation', 'is accepted by all scientists', 'was never actually measured']
          },
          {
            label: 'A finding held "under laboratory conditions." It follows that the finding …',
            options: ['may not hold outside the lab', 'is false in natural settings', 'applies in every environment', 'came from a flawed experiment']
          },
          {
            label: 'Sleep length "is associated with" test scores. The passage supports the claim that the two …',
            options: ['cause one another', 'tend to occur together', 'are completely unrelated', 'were changed on purpose']
          },
          {
            label: 'A fish species is observed "only in cold, fast-moving streams." A supported inference is that …',
            options: ['warming streams would likely threaten it', 'it migrates to the sea every winter', 'it is the rarest fish in the region', 'it feeds mainly on insects at night']
          }
        ],
        correctAnswers: ['still needs further confirmation', 'may not hold outside the lab', 'tend to occur together', 'warming streams would likely threaten it'],
        hint1: '"Preliminary" marks an early, provisional result.',
        hint2: 'A stated condition sets the boundary of the claim.',
        hint3: 'An association is not the same as a cause, and a stated limit ("only in cold water") is something you can reason from.',
        explanation: '"Preliminary" means more confirmation is needed, not that the result is wrong. A lab result may not generalize beyond the lab, but nothing says it is false. "Associated with" supports only that the variables go together. A species found only in cold water is likely threatened if the water warms; migration, rarity, and diet are facts the passage never gives.'
      }
    },
    {
      id: 'act-rsci-p1-actpractice',
      type: 'text' as const,
      content: `
## ACT-Style Practice: Map Before You Answer

Spend about 90 seconds on this passage. Write a two-word label for each paragraph, then check your map.

> **(1)** For decades, gardeners noticed that young plants growing beside certain deep-rooted trees seemed to survive dry summers better than plants growing in open ground. **(2)** One proposed explanation is *hydraulic lift*: at night, when the leaves stop releasing water, deep roots draw moisture from wet soil far below and leak some of it into the dry upper soil. **(3)** In a greenhouse trial, researchers placed shallow-rooted seedlings beside oak saplings whose deep roots reached a moist lower layer. Soil moisture near the surface rose overnight and fell during the day, and seedlings beside the oaks wilted less than seedlings growing alone. **(4)** The authors called their results preliminary. Greenhouse soil is far more uniform than a forest floor, and it remains unclear how much lifted water neighboring plants actually absorb in the wild.

<details>
<summary><b>Check your map</b></summary>

| Paragraph | Role | Why |
|---|---|---|
| 1 | Phenomenon | An observation that needs explaining |
| 2 | Proposed explanation | Defines hydraulic lift as one possible cause |
| 3 | Method + result | Greenhouse trial and what it found |
| 4 | Caveat / open question | "Preliminary," greenhouse limits, unanswered question |

A question asking for the author's attitude toward the hypothesis points you to Paragraph 4: the finding is **promising but unconfirmed**. A question about why moisture rose overnight points you to Paragraph 2: the leaves stop releasing water at night, so roots can redistribute it.
</details>
      `
    },
    {
      id: 'act-rsci-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions on the Hydraulic-Lift Passage** 📋
      `,
      exercise: {
        questions: [
          {
            question: `Based on the passage, the author's attitude toward the hydraulic-lift explanation is best described as:`,
            options: [
              `dismissive, because the trial was far too small`,
              `interested but aware it is still unconfirmed`,
              `fully convinced that it explains all cases`,
              `indifferent to whether it is ever tested`
            ],
            correctAnswer: 1,
            explanation: `The author presents the trial's results in detail but reports that they were "preliminary" and names open questions, which is interest balanced by caution. Nothing calls the trial too small or rejects the idea, so "dismissive" overstates the doubt. Words like "remains unclear" rule out full conviction, and the careful discussion of evidence is not indifference.`
          },
          {
            question: `According to the passage, surface soil moisture beside the oaks rose overnight because:`,
            options: [
              `rain fell on the greenhouse during the night`,
              `seedlings released stored water into the soil`,
              `deep roots moved water upward once leaves stopped losing it`,
              `cooler night air condensed directly onto the soil`
            ],
            correctAnswer: 2,
            explanation: `Paragraph 2 explains the mechanism: at night, when leaves stop releasing water, deep roots draw moisture from below and leak it into the upper soil. A greenhouse trial is not rained on, and the passage never mentions condensation. The seedlings are the ones benefiting from the moisture, not its source.`
          },
          {
            question: `The statement that "greenhouse soil is far more uniform than a forest floor" is included mainly to:`,
            options: [
              `explain why the seedlings beside the oaks wilted`,
              `show that the trial had been designed incorrectly`,
              `prove that hydraulic lift cannot occur in forests`,
              `note why the results may not hold in the wild`
            ],
            correctAnswer: 3,
            explanation: `The sentence sits in the caveat paragraph and points out a difference between the test setting and real forests, so it limits how far the results can be applied. It does not say the design was wrong, only that the setting differs. The seedlings beside the oaks wilted less, not more, and a limitation is not proof that the effect never happens outdoors.`
          },
          {
            question: `Which of the following, if found in a later study, would most directly answer the open question raised at the end of the passage?`,
            options: [
              `Measurements of how much lifted water forest seedlings absorb`,
              `A count of how many oak species grow in North American forests`,
              `Evidence that oak saplings grow faster in greenhouses`,
              `A survey of how often gardeners water their plants`
            ],
            correctAnswer: 0,
            explanation: `The passage says it "remains unclear how much lifted water neighboring plants actually absorb in the wild," so measuring that uptake in a forest addresses the question directly. Counting oak species, comparing oak growth in greenhouses, and surveying gardeners do not measure whether neighbors use the lifted water.`
          }
        ]
      }
    },
    {
      id: 'act-rsci-p1-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

- **Reading format:** 36 questions in 40 minutes, four passage sets of about nine questions, four choices each. Natural science is one of the four families.
- **No outside science needed.** Every answer is supported by the passage itself.
- **Map paragraphs by role:** phenomenon, puzzle, method, result, interpretation, caveat.
- **Terms are defined in context.** Use appositives, "called," "known as," examples, and contrasts.
- **Follow cause-and-effect chains** and watch for answers that skip a link or reverse the direction.
- **Match the passage's caution.** *Suggests, preliminary, under laboratory conditions,* and *associated with* all limit what you can conclude.
- **Author's attitude is usually measured.** "Interested but cautious" beats "dismissive" or "fully convinced" unless the text is extreme.
      `
    }
  ]
};
