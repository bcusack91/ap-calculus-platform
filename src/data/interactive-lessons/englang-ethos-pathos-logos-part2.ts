export const englangEthosPathosLogosPart2Data = {
  topicSlug: 'englang-ethos-pathos-logos',
  sections: [
    {
      id: 'englange2-intro',
      type: 'text' as const,
      content: `
# ⚖️ Ethos, Pathos, and Logos

**Part 2 of 7 — Ethos in Depth: Ida B. Wells's Preface to *Southern Horrors*, 1892**

---

| Section |
|---------|
| Three Sources of Credibility |
| How Writers Build Ethos in the Text |
| 📖 Close Reading: Wells, 1892 |
| Ethos Under Pressure |

> 🔑 **Key Concept:** Part 1 defined ethos as credibility. This part asks a harder question: **how is credibility made?** Ethos is not a label you attach to a sentence with a credential in it. It is the audience's judgment of the writer's good sense, character, and goodwill, and writers shape that judgment through specific choices, especially when the audience starts out distrustful.
`
    },
    {
      id: 'englange2-sources',
      type: 'text' as const,
      content: `
## Three Sources of Credibility

In his *Rhetoric*, Aristotle says audiences trust a speaker who shows three qualities.

| Quality | Greek term | What the audience asks | Choices that build it |
|---|---|---|---|
| **Good sense** | *phronesis* | Does this person know what they are talking about and judge wisely? | Accurate detail, sound reasoning, awareness of complications |
| **Good character** | *arete* | Is this person honest and principled? | Candor, admitting limits or errors, refusing easy exaggeration |
| **Goodwill** | *eunoia* | Does this person have the audience's interests at heart? | Shared values, respect for the audience, concern for the common good |

### Established and Constructed Ethos

| Type | Source | Example |
|---|---|---|
| **Established (situated) ethos** | Reputation the writer brings to the text | A famous scientist writing about her own field |
| **Constructed (invented) ethos** | Credibility built by choices within the text | An unknown writer who sounds careful, fair, and well-informed |
| **Borrowed ethos** | Credibility transferred from someone the audience already trusts | An endorsement, a respected source quoted, a famous ally's letter |

## How Writers Build Ethos in the Text

| Move | How it builds trust | Typical signal |
|---|---|---|
| **Stating purpose and motive** | Shows the writer is not seeking personal gain | "My only aim is..." |
| **Reluctance or duty** | A writer who speaks because they must seems sincere | "I take no pleasure in..." |
| **First-hand knowledge** | Grounds claims in experience | "I saw," "I was there" |
| **Restraint and accuracy** | Claims that are not inflated seem honest | precise numbers, careful qualifiers |
| **Concession** | Fairness toward opposing views | "It is true that..." |
| **Shared values** | Places writer and audience on the same side | "we," appeals to common principles |

> 🔑 **AP Connection:** On Question 2, avoid "The author uses ethos to seem credible." That sentence is circular: ethos **means** credibility. Instead explain which quality the choice builds and why this audience needed it: "By insisting that she writes 'with no pleasure,' Wells answers the suspicion that she is a sensationalist."
`
    },
    {
      id: 'englange2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A city council candidate begins her speech by admitting that a project she supported two years ago went over budget, then explains what she learned. This choice most directly builds which quality?',
            options: [
              'Good character, through candor about a past mistake',
              'Goodwill, through flattering the audience\'s judgment',
              'Good sense, through technical knowledge of budgets',
              'Borrowed ethos, through the support of a famous ally'
            ],
            correctAnswer: 0,
            explanation: 'Admitting an error shows honesty, the core of good character. She does not flatter the audience, display technical expertise, or cite an endorsement.'
          },
          {
            question: 'Why is "The author uses ethos to build credibility" a weak sentence of analysis?',
            options: [
              'It is circular, because ethos already means credibility',
              'It is inaccurate, because ethos refers to emotion rather than to credibility',
              'It is too specific, because it names a single appeal instead of all three',
              'It is too informal, because it uses the word "uses" instead of "employs"'
            ],
            correctAnswer: 0,
            explanation: 'The sentence restates the definition of ethos and never identifies a choice or explains how it works on an audience. Ethos does mean credibility, naming one appeal is not a flaw, and formality is not the issue.'
          }
        ]
      }
    },
    {
      id: 'englange2-passage',
      type: 'text' as const,
      content: `
## 📖 Close Reading: Wells, Preface to *Southern Horrors* (1892)

### The Situation

| Component | Details |
|---|---|
| **Writer** | Ida B. Wells, a Black journalist and co-owner of the Memphis newspaper *Free Speech* |
| **Exigence** | In May 1892, after Wells published an editorial challenging the usual justification for lynching, a mob destroyed the *Free Speech* office and she was warned not to return to Memphis. She continued her reporting in New York. |
| **Audience** | Readers across the country, including white Americans inclined to disbelieve a young Black woman writing about lynching |
| **Publication** | A pamphlet expanding her June 25, 1892 article in the *New York Age*, published with funds raised by Black women in New York and Brooklyn |
| **Purpose** | To present evidence about the real causes of lynching and to move the nation to "demand that justice be done" |

> The greater part of what is contained in these pages was published in the *New York Age* June 25, 1892, in explanation of the editorial which the Memphis whites considered sufficiently infamous to justify the destruction of my paper, the *Free Speech*.
>
> ...
>
> This statement is not a shield for the despoiler of virtue ... It is a contribution to truth, an array of facts, the perusal of which it is hoped will stimulate this great American Republic to demand that justice be done though the heavens fall.
>
> It is with no pleasure I have dipped my hands in the corruption here exposed. Somebody must show that the Afro-American race is more sinned against than sinning, and it seems to have fallen upon me to do so.
>
> ...
>
> If this work can contribute in any way toward proving this, and at the same time arouse the conscience of the American people to a demand for justice to every citizen, and punishment by law for the lawless, I shall feel I have done my race a service. Other considerations are of minor importance.
>
> — Ida B. Wells, Preface, *Southern Horrors: Lynch Law in All Its Phases*, New York City, October 26, 1892
`
    },
    {
      id: 'englange2-reading',
      type: 'text' as const,
      content: `
### Move 1: Facts About Herself, Stated Plainly

The opening sentence reports that a mob destroyed her paper, but it does so in the flat language of a record: "considered sufficiently infamous to justify the destruction of my paper." The understatement keeps her from sounding like a victim seeking sympathy. It also lets readers judge for themselves which act was truly infamous: an editorial, or the destruction of a newspaper.

### Move 2: Anticipating the Objection

"This statement is not a shield for the despoiler of virtue." Wells knew that defenders of lynching claimed it punished crimes against women, and that anyone who criticized lynching could be accused of excusing those crimes. She answers the accusation before it is made. This builds **good character** (she does not excuse real crime) and **good sense** (she knows exactly how her opponents argue).

### Move 3: Framing the Work as Evidence

"A contribution to truth, an array of facts." She presents herself as a reporter, not an agitator. For a skeptical audience, a writer who promises facts rather than feelings seems more trustworthy. Here a logos-like claim does ethos work.

### Move 4: Reluctance and Duty

"It is with no pleasure I have dipped my hands in the corruption here exposed." The image of dirtied hands says that the work is distasteful to her, so she cannot be dismissed as a sensationalist who enjoys scandal. "It seems to have fallen upon me" casts her as someone who accepted an unwanted duty.

### Move 5: Disinterested Purpose

The preface ends by naming goals that serve the whole nation: "justice to every citizen, and punishment by law for the lawless." Then: "Other considerations are of minor importance." She claims no personal reward, which builds **goodwill**. The phrase "punishment by law" also shows that she is not against punishing crime, only against punishment without law.

### The Pamphlet's Borrowed Ethos

The pamphlet surrounded the preface with outside support: a dedication to the women of New York and Brooklyn who paid for its printing, and a letter of praise from Frederick Douglass. A reader inclined to doubt Wells now had to doubt Douglass too.

| Ethos source | Evidence | Quality built |
|---|---|---|
| Restraint | "considered sufficiently infamous to justify the destruction of my paper" | Good character |
| Anticipating objections | "not a shield for the despoiler of virtue" | Good sense, good character |
| Evidence frame | "an array of facts" | Good sense |
| Reluctance | "with no pleasure I have dipped my hands" | Good character |
| Common good | "justice to every citizen" | Goodwill |
| Endorsement | Douglass's letter, the women's sponsorship | Borrowed ethos |
`
    },
    {
      id: 'englange2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Choice to the Quality** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"It is with no pleasure I have dipped my hands in the corruption here exposed" mainly builds ___',
            options: ['good character through reluctance', 'good sense through expertise', 'goodwill through flattery', 'borrowed ethos through endorsement']
          },
          {
            label: 'Printing Frederick Douglass\'s letter of praise at the front of the pamphlet creates ___',
            options: ['borrowed ethos', 'constructed ethos', 'logos through data', 'pathos through fear']
          },
          {
            label: '"Punishment by law for the lawless" shows that Wells ___',
            options: ['supports lawful punishment of crime', 'opposes all punishment for crime', 'doubts that any crimes occurred', 'expects readers to break the law']
          }
        ],
        correctAnswers: ['good character through reluctance', 'borrowed ethos', 'supports lawful punishment of crime'],
        hint1: 'She takes no pleasure in the work, so she cannot be a scandalmonger.',
        hint2: 'Credibility transferred from someone the audience already trusts.',
        hint3: 'She objects to punishment without law, not to punishment.',
        explanation: 'Reluctance builds good character, an endorsement from Douglass is borrowed ethos, and "punishment by law" shows Wells supports lawful justice rather than opposing punishment.'
      }
    },
    {
      id: 'englange2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the first sentence of the preface, Wells describes the destruction of her newspaper in flat, factual language most likely in order to',
            options: [
              'suggest that the destruction of the paper did not much concern her',
              'avoid seeming self-pitying and let the facts condemn the mob',
              'show that she agrees the editorial was "sufficiently infamous"',
              'introduce the history of the Free Speech for readers in Memphis'
            ],
            correctAnswer: 1,
            explanation: 'Plain reporting keeps the preface from sounding self-pitying, and the bare facts expose the mob\'s act. Wells does care, she is quoting her opponents\' judgment rather than accepting it, and her audience is national.'
          },
          {
            question: 'The sentence "This statement is not a shield for the despoiler of virtue" functions primarily to',
            options: [
              'concede that lynching is an appropriate response to some crimes',
              'answer in advance the charge that criticizing lynching excuses crime',
              'shift the preface\'s focus from lynching to the reform of Memphis courts',
              'admit that the pamphlet contains claims that she cannot verify'
            ],
            correctAnswer: 1,
            explanation: 'Wells anticipates the accusation that her critics would make and rejects it, which shows fairness and awareness of the debate. She never concedes that lynching is justified, does not change focus, and makes no admission about unverified claims.'
          },
          {
            question: 'Which choice most clearly builds goodwill, in Aristotle\'s sense, with a national audience?',
            options: [
              'Naming the date of her article in the New York Age',
              'Calling her work "a contribution to truth, an array of facts"',
              'Seeking "justice to every citizen" and not a reward for herself',
              'Describing her paper\'s destruction in a single sentence'
            ],
            correctAnswer: 2,
            explanation: 'Goodwill is concern for the audience\'s interests, and justice "to every citizen" serves everyone while she disclaims other considerations. The date and the factual framing build good sense, and the restrained sentence builds character.'
          }
        ]
      }
    }
  ]
};
