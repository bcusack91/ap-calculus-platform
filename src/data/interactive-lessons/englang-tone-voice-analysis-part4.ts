export const englangToneVoiceAnalysisPart4Data = {
  topicSlug: 'englang-tone-voice-analysis',
  sections: [
    {
      id: 'englangt4-intro',
      type: 'text' as const,
      content: `
# 🎙️ Tone and Voice Analysis

**Part 4 of 7 — Tracking Tone Shifts: Douglass's Letter to His Former Enslaver, 1848**

---

| Section |
|---------|
| How Shifts Are Signaled |
| Mapping a Tone Arc |
| 📖 Close Reading: Douglass to Thomas Auld |
| Why the Arc Serves the Purpose |

> 🔑 **Key Concept:** Many Section I questions ask where and how a passage's tone changes, and many strong Question 2 essays are organized around a shift. Spotting a shift is the easy part. The skill that earns credit is explaining **what signals** the shift and **why the writer needs it** at that point in the argument.
`
    },
    {
      id: 'englangt4-signals',
      type: 'text' as const,
      content: `
## How Shifts Are Signaled

| Signal | What changes | Example pattern |
|---|---|---|
| **Turn words** | Direction of the thought | "but," "yet," "still," "and yet," "nevertheless" |
| **Sentence length** | Pace and pressure | Long, controlled periods give way to short bursts |
| **Punctuation** | Intensity | Statements become questions or exclamations; dashes break in |
| **Interjections** | Emotional control | "Oh!" "Alas!" signal feeling breaking through |
| **Addressee** | Who is being spoken to | From "the public" to "you, sir," or from an opponent to God |
| **Time frame** | Past narration vs present feeling | "Ten years ago..." becomes "At this moment..." |
| **Register** | Formality | Polite, legal diction gives way to plain or charged words |

## Mapping a Tone Arc

1. **Divide** the passage into movements wherever one of the signals above appears.
2. **Label** each movement with a precise tone word (use a modifier if needed: "coolly ironic," "barely controlled").
3. **Quote** the words that justify each label.
4. **Name the pivot**: the exact words where the tone turns.
5. **Explain the function**: what the shift lets the writer do for this audience that a single tone could not.

> 🔑 **AP Connection:** A shift is evidence, not a conclusion. "The tone shifts from calm to angry" earns little. "The cool irony of the opening lets Douglass appear in full command of himself, so that when his composure breaks at the thought of his children, the break reads as the involuntary truth of slavery's cruelty" explains a function.
`
    },
    {
      id: 'englangt4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A speech moves from long, balanced sentences describing a town\'s history to a string of short questions: "Who closed the mill? Who sold the land? Who paid?" The change most likely signals a shift toward',
            options: [
              'calm nostalgia for the town\'s early history',
              'accusatory urgency about who is responsible',
              'technical detachment from the town\'s decline',
              'humorous exaggeration of a minor dispute'
            ],
            correctAnswer: 1,
            explanation: 'The sudden short questions, each beginning "Who," press for responsibility and quicken the pace, which signals accusation. Nostalgia belongs to the earlier long sentences, and nothing is detached or comic.'
          },
          {
            question: 'Which step most improves a student\'s claim that "the tone shifts in paragraph 3"?',
            options: [
              'Listing every device that appears in paragraph 3',
              'Explaining why the shift helps the writer\'s purpose',
              'Replacing "shifts" with a more formal synonym',
              'Summarizing the content of paragraphs 1 through 3'
            ],
            correctAnswer: 1,
            explanation: 'A shift becomes analysis only when the essay explains what it accomplishes for the writer\'s purpose and audience. Lists of devices, synonyms, and summary add no reasoning.'
          }
        ]
      }
    },
    {
      id: 'englangt4-passage',
      type: 'text' as const,
      content: `
## 📖 Close Reading: Douglass to Thomas Auld

### The Situation

| Component | Details |
|---|---|
| **Writer** | Frederick Douglass, who escaped slavery in Maryland on September 3, 1838, and by 1848 was a famous abolitionist lecturer and editor in Rochester, New York |
| **Addressee** | Thomas Auld, the Maryland slaveholder who had legally owned him |
| **Real audience** | Northern readers of the antislavery press, where the letter was printed as an open letter |
| **Occasion** | The tenth anniversary of his escape, September 3, 1848 |
| **Purpose** | To expose slavery through one slaveholder's conduct and to assert Douglass's equality |

The text follows the reprint in *My Bondage and My Freedom* (1855). The excerpts appear in the order of the letter.

**Movement 1 (opening)**

> SIR—The long and intimate, though by no means friendly, relation which unhappily subsisted between you and myself, leads me to hope that you will easily account for the great liberty which I now take in addressing you in this open and public manner. The same fact may remove any disagreeable surprise which you may experience on again finding your name coupled with mine, in any other way than in an advertisement, accurately describing my person, and offering a large sum for my arrest.

**Movement 2 (his first years of freedom)**

> You remember when I used to make seven, or eight, or even nine dollars a week in Baltimore, you would take every cent of it from me every Saturday night, saying that I belonged to you, and my earnings also. I never liked this conduct on your part—to say the best, I thought it a little mean. I would not have served you so. But let that pass.

**Movement 3 (his family)**

> Dear fellows! they are all in comfortable beds, and are sound asleep, perfectly secure under my own roof. There are no slaveholders here to rend my heart by snatching them from my arms, or blast a mother's dearest hopes by tearing them from her bosom. ... Oh! sir, a slaveholder never appears to me so completely an agent of hell, as when I think of and look upon my dear children. It is then that my feelings rise above my control.

**Movement 4 (closing)**

> In doing this, I entertain no malice toward you personally. There is no roof under which you would be more safe than mine, and there is nothing in my house which you might need for your comfort, which I would not readily grant. Indeed, I should esteem it a privilege to set you an example as to how mankind ought to treat each other.
>
> I am your fellow-man, but not your slave.
>
> — Frederick Douglass, letter to Thomas Auld, 1848
`
    },
    {
      id: 'englangt4-map',
      type: 'text' as const,
      content: `
### The Tone Map

| Movement | Tone | Evidence | Signal of the shift |
|---|---|---|---|
| 1. Opening | Coolly ironic, formally polite | "long and intimate, though by no means friendly"; "an advertisement, accurately describing my person" | Elaborate, courteous syntax used to deliver an insult |
| 2. Wages | Mockingly understated | "to say the best, I thought it a little mean"; "But let that pass." | Plain, short sentences; deliberate shrinking of a great wrong |
| 3. Children | Tender, then anguished | "Dear fellows!"; "Oh! sir"; "my feelings rise above my control" | Exclamations, interjection, direct address, the writer naming his own loss of control |
| 4. Closing | Magnanimous, dignified, defiant | "no malice"; "no roof under which you would be more safe"; "fellow-man, but not your slave" | Return to calm, balanced sentences |

### The Pivots

- **Understatement as irony (Movement 2).** Taking every cent a man earns is theft. Calling it "a little mean" shrinks the crime so drastically that the reader supplies the outrage Douglass withholds. "But let that pass" pretends to drop the subject while making sure no one forgets it.
- **The break (Movement 3).** The letter turns on "Dear fellows!" A scene of peace (children asleep "under my own roof") calls up its opposite: the slaveholder who would snatch them away. Douglass then names the shift himself: "It is then that my feelings rise above my control." The loss of composure is presented as involuntary, which makes it read as honest.
- **The recovery (Movement 4).** The final sentence is balanced and brief: "I am your fellow-man, but not your slave." After the storm, control returns, and the antithesis states the whole argument in a single sentence.

## Why the Arc Serves the Purpose

| Without the arc | With the arc |
|---|---|
| Pure anger could be dismissed as the bitterness of a "runaway" | The cool opening proves Douglass's self-command and intelligence |
| Pure irony could seem like a clever game | The anguished middle shows what is really at stake |
| Ending in rage would leave Auld the moral high ground of calm | Ending in magnanimity puts Douglass above his former owner |

For Northern readers who doubted that a formerly enslaved man could be Auld's moral and intellectual equal, the arc itself is an argument. Douglass shows he can master tone, lose it for a reason anyone would understand, and recover it with dignity.
`
    },
    {
      id: 'englangt4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Label the Movement** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"I never liked this conduct on your part—to say the best, I thought it a little mean." Tone: ___',
            options: ['ironic understatement', 'sincere mild complaint', 'nostalgic affection', 'open fury']
          },
          {
            label: '"Oh! sir, a slaveholder never appears to me so completely an agent of hell..." Signal of the shift: ___',
            options: ['an interjection and direct address', 'a turn word such as "however"', 'a move into technical register', 'a lengthening of the sentences']
          },
          {
            label: '"I am your fellow-man, but not your slave." Tone: ___',
            options: ['dignified and defiant', 'bitter and vengeful', 'pleading and humble', 'playful and teasing']
          }
        ],
        correctAnswers: ['ironic understatement', 'an interjection and direct address', 'dignified and defiant'],
        hint1: 'Is stolen wages really "a little mean"? What does the gap between word and deed do?',
        hint2: 'Look at the first two words.',
        hint3: 'He claims equality and refuses subordination, calmly.',
        explanation: 'Calling theft "a little mean" is ironic understatement. "Oh! sir" combines an interjection with direct address. The closing antithesis is calm, dignified, and defiant.'
      }
    },
    {
      id: 'englangt4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the opening sentences, the phrase "in any other way than in an advertisement, accurately describing my person, and offering a large sum for my arrest" functions primarily to',
            options: [
              'thank Auld for having described Douglass accurately in public',
              'remind readers with cool irony that Auld once hunted him as property',
              'explain that Douglass is responding to a recent newspaper notice',
              'apologize for the surprise Douglass expects his letter to cause'
            ],
            correctAnswer: 1,
            explanation: 'The polite phrasing ("accurately describing my person") wraps a reminder that Auld advertised for Douglass\'s capture, an irony that exposes the relationship. Douglass is not grateful or apologetic, and no recent notice prompted the letter.'
          },
          {
            question: 'Douglass\'s statement "It is then that my feelings rise above my control" contributes to the letter\'s rhetorical effect chiefly by',
            options: [
              'admitting that his earlier irony was insincere and should be withdrawn',
              'presenting his anguish as involuntary and therefore as honest',
              'warning Auld that Douglass may seek revenge for past wrongs',
              'signaling that the letter will now turn to his career in Rochester'
            ],
            correctAnswer: 1,
            explanation: 'By naming the moment his composure fails, Douglass shows that the anguish is not a performance, which makes it more credible. He does not retract his irony, threaten revenge, or turn to his career.'
          },
          {
            question: 'Which statement best describes the overall movement of tone in the letter?',
            options: [
              'From anger to forgiveness, as Douglass gradually comes to excuse Auld',
              'From controlled irony through anguish to dignified calm',
              'From pleading humility to triumph, as Douglass recalls his escape',
              'From playful humor to despair, ending without any resolution'
            ],
            correctAnswer: 1,
            explanation: 'The letter opens in cool irony, breaks into anguish over his children, and closes in calm magnanimity. Douglass offers hospitality but never excuses Auld, he does not plead, and the final line resolves the letter firmly.'
          }
        ]
      }
    }
  ]
};
