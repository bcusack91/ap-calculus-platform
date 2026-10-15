export const englangSynthesisPart5Data = {
  topicSlug: 'englang-synthesis',
  sections: [
    {
      id: 'englangs5-intro',
      type: 'text' as const,
      content: `
# 🧷 Synthesis Writing

**Part 5 of 7 — Integrating Sources: Attribution, Signal Verbs, and Common Misuses**

---

| Section |
|---------|
| Attribution and Citation |
| Signal Verbs That Tell the Truth |
| Quote, Paraphrase, or Summarize? |
| Five Misuses of Sources |
| Using a Source as a Counterargument |

> 🔑 **Key Concept:** Integration is where reading becomes writing. Each time you bring in a source, you make three choices: **how to name it, how to characterize its stance, and how much of its language to borrow.** Each choice can strengthen your line of reasoning or quietly misrepresent the source. Skills 4.A (developing paragraphs with evidence), 4.C (qualifying with counterarguments), and 6.A (commentary) all meet here.
`
    },
    {
      id: 'englangs5-attribution',
      type: 'text' as const,
      content: `
## Attribution and Citation

The synthesis prompt tells you to indicate clearly which sources you use, through direct quotation, paraphrase, or summary, and lets you cite them as Source A, Source B, and so on, or by the short description given in parentheses.

| Form | Example | Use it when |
|---|---|---|
| **Letter citation** | Park-building has long displaced poor tenants (Source C). | Every borrowed idea, quoted or not |
| **Description citation** | ...displaced poor tenants (Addams). | Equally acceptable; follow the prompt's parentheses |
| **Attribution phrase + citation** | As settlement worker Jane Addams recalls, tenants evicted for a Chicago playground "have never ceased to mourn their former estates" (Source C). | The source's identity adds weight or context |
| **Comparative attribution** | Where Olmsted imagines a park people "may easily go" to (Source A), Riis's downtown class suggests otherwise (Source B). | Two sources interact in one sentence |

### Rules of Thumb

- **Cite paraphrase and summary too.** A citation marks borrowed ideas, not just borrowed words.
- **Name the author at least once.** "Olmsted" means more to a reader than "Source A," and his role as a park designer is often part of your point.
- **Use the identity when it matters.** "Budget officials" and "a reformer who worked in the neighborhood" tell the reader why the source knows what it claims.

## Signal Verbs That Tell the Truth

A signal verb is a claim about the source's stance. "Riis says" is neutral but flat. "Riis insists" adds force. "Riis admits" would be wrong, because he concedes nothing in that passage.

| Stance | Verbs | Accurate example |
|---|---|---|
| **Neutral reporting** | reports, notes, records, describes, observes | Riis **records** a school survey of forty-eight boys. |
| **Arguing** | argues, contends, maintains, insists | Olmsted **contends** that a park should put the city "far away." |
| **Conceding** | admits, acknowledges, grants, concedes | Addams **acknowledges** the cost borne by evicted tenants. |
| **Warning** | warns, cautions, fears | Thoreau **warns** that open land may be "partitioned off" for a few. |
| **Disagreeing** | dismisses, disputes, rejects, questions | Olmsted **dismisses** tax-wary opponents as ignorant. |
| **Recommending** | recommends, urges, proposes | The budget office **urges** repairs before new construction (Source F). |

A wrong verb misrepresents a source as surely as a misquotation. "Thoreau argues against city parks" is false: he never discusses them.
`
    },
    {
      id: 'englangs5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence characterizes Addams\'s "On the other hand, the dispossessed tenants..." most accurately?',
            options: [
              'Addams boasts that the tenants found better housing nearby.',
              'Addams admits that the playground cost the tenants their homes.',
              'Addams predicts the tenants will return to the block one day.',
              'Addams argues that every reform must evict people to succeed.'
            ],
            correctAnswer: 1,
            explanation: 'Addams turns from the playground she sought to the tenants who lost their homes, a concession of cost, so "admits" fits. She never says they found better housing or will return, and she does not generalize about every reform.'
          },
          {
            question: 'Which sentence represents Practice Source F most accurately?',
            options: [
              'The budget office rejects any new park in the Mill District.',
              'The budget office argues that parks waste public money.',
              'The budget office reports that local rents have already risen.',
              'The budget office urges repairs first and tenant safeguards.'
            ],
            correctAnswer: 3,
            explanation: 'The memo recommends funding repairs to existing parks first and pairing any new park with protections for tenants. It does not reject the park outright, does not call parks wasteful, and reports tenants\' fears rather than measured rent increases.'
          }
        ]
      }
    },
    {
      id: 'englangs5-qps',
      type: 'text' as const,
      content: `
## Quote, Paraphrase, or Summarize?

| Method | What it is | Choose it when | Example from the set |
|---|---|---|---|
| **Quote** | The source's exact words, in quotation marks | The wording itself is vivid, distinctive, or what you analyze | Riis's children "banished and barred out" from green space |
| **Paraphrase** | One specific idea in your own words, about the same length | The idea matters but the wording does not | Addams wanted the city to open more small parks and gyms for young people (Source C). |
| **Summarize** | The source's main point, much shorter | You need the source's overall position | The budget office favors repairs before expansion (Source F). |

### Embed, Don't Drop

| Version | Verdict |
|---|---|
| Parks matter. "We want a ground to which people may easily go after their day's work is done" (Source A). | **Dropped:** the quotation floats with no frame |
| Olmsted wanted parks that people "may easily go" to "after their day's work is done" (Source A), a standard that tenement families far from Central Park could not meet. | **Embedded:** the quoted words sit inside your claim and lead straight into commentary |

Quote short. A phrase of three to ten words usually carries the meaning and leaves room for your own reasoning. Data and statistics are almost always better paraphrased with the exact figures than quoted whole.
`
    },
    {
      id: 'englangs5-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A signal verb such as "acknowledges" or "grants" shows that a source _______ a point.

2) Restating one specific idea from a source in your own words, at about the same length, is a _______.

3) Selecting only the parts of a source that help your claim while leaving out parts that undercut it is called _______. (one word, hyphenated)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['concedes', 'paraphrase', 'cherry-picking'],
        hint1: 'The verb for granting a point to the other side.',
        hint2: 'Not a summary, which is shorter; not a quotation.',
        hint3: 'Picking only the ripest fruit from the tree.',
        explanation: 'Conceding verbs show a source granting a point, a paraphrase restates one idea at similar length, and cherry-picking selects only the convenient parts of a source.'
      }
    },
    {
      id: 'englangs5-misuses',
      type: 'text' as const,
      content: `
## Five Misuses of Sources

| Misuse | What it looks like | The fix |
|---|---|---|
| **Source parade** | One paragraph per source in letter order: "Source A says... Source B says..." | Organize by your claims; put two or more sources in each paragraph |
| **Letting the source speak for you** | A quotation ends the paragraph, or replaces the claim: "As Riis says, 'please take note.'" | Lead with your claim; follow every source with commentary that explains how it supports that claim |
| **Misrepresenting a source** | "Thoreau opposed city parks." "Olmsted thought only an inferior class lived outside towns." | Check whose view it is and what it addresses before you characterize it |
| **Cherry-picking** | Citing Addams only for the playground while claiming park-building harms no one | Use the inconvenient part of the source, and turn it into a concession or qualification |
| **Drive-by citation** | "Parks help (Sources A, B, C)." Three letters, no specific evidence | Name what each source contributes; Row B rewards **specific** evidence |

### Why Cherry-Picking Backfires

Readers of a synthesis essay have the same sources you do. If you cite Olmsted's praise of crowds but your essay depends on parks being reachable, a reader who knows his phrase "may easily go" and Riis's three boys out of forty-eight sees what you left out. Using the inconvenient evidence yourself, and explaining why your claim survives it, is both more honest and more persuasive.

## Using a Source as a Counterargument

The strongest synthesis essays bring in a source that disagrees and respond to it. The pattern has three moves:

1. **Concede fairly.** State the opposing source's point in its strongest, accurate form.
2. **Respond.** Refute it, qualify your claim to absorb it, or reframe the issue.
3. **Return.** Show how your claim stands after the exchange.

> **Model (concede, qualify, return):** Admittedly, new parks are expensive: a four-acre park in the Mill District would cost \\$14 million to build and \\$600,000 a year to keep up (Source F). Yet that price buys a neighborhood what wealthier ones already have, since barely half of Mill District residents live within a ten-minute walk of a park, compared with 94 percent in Northgate (Source E). The budget office's stronger point is not the cost but the tenants' fear of being pushed out, a fear Addams's evicted neighbors confirm from a century ago (Source C). A city that builds where need is greatest must therefore build protections for current residents into the plan itself.

| Move | Where it happens |
|---|---|
| Concede | "Admittedly, new parks are expensive..." (Source F stated accurately, with figures) |
| Respond | "Yet that price buys..." (Source E reframes cost as a question of fairness) |
| Qualify | "The budget office's stronger point..." (the writer adopts part of the opposing source) |
| Return | "A city that builds where need is greatest must therefore..." (the refined claim) |

> 🔑 **AP Connection:** A counterargument drawn from the sources does double duty. It adds a source toward Row B's minimum of three, and engaging real tensions among sources is one of the ways essays earn the sophistication point in Row C.
`
    },
    {
      id: 'englangs5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes: "Olmsted states, \'We want a ground to which people may easily go after their day\'s work is done\' (Source A). This shows parks are good." What is the main weakness?',
            options: [
              'The quotation should be paraphrased because it is too brief.',
              'The follow-up is too thin to connect the evidence to a claim.',
              'The citation should name the year rather than the source letter.',
              'The source is too old to count toward the required three.'
            ],
            correctAnswer: 1,
            explanation: 'Commentary like "This shows parks are good" restates nothing specific and links the quotation to no line of reasoning. The quotation is a reasonable length, letter citations are allowed, and any provided source counts regardless of date.'
          },
          {
            question: 'A student cites Addams only for the new playground and leaves out the evicted tenants, while arguing that building parks harms no one. This is best described as',
            options: [
              'over-quoting a source where a brief paraphrase would serve',
              'relying on a memoir where the prompt calls for statistics',
              'citing a source by its author instead of by its letter',
              'omitting the part of a source that undercuts the claim'
            ],
            correctAnswer: 3,
            explanation: 'Leaving out the tenants, the part of Addams\'s account that cuts against the claim, is cherry-picking. Nothing in the scenario involves over-quoting, the prompt accepts any kind of source evidence, and author citations are acceptable.'
          },
          {
            question: 'Which sentence best uses Practice Source F as a counterargument and then responds to it?',
            options: [
              'Source F says the park costs \\$14 million, and Source E, a table, says only 52 percent of residents live near a park.',
              'The budget office is wrong about the cost (Source F), since a park is worth whatever a city must pay for it.',
              'Admittedly, the park would cost \\$14 million (Source F), but that buys the access wealthier areas already have (Source E).',
              'Although Source F worries about the cost, cost should never matter when people in a neighborhood are suffering.'
            ],
            correctAnswer: 2,
            explanation: 'This version states the budget office\'s point accurately and then answers it with evidence from another source. The other sentences set the sources side by side without a response, dismiss the cost without evidence, or wave it away with an absolute.'
          }
        ]
      }
    }
  ]
};
