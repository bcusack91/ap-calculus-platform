export const englitPoetry2Part3Data = {
  topicSlug: 'englit-poetry-2',
  sections: [
    {
      id: 'englitpo3-intro',
      type: 'text' as const,
      content: `
# 🌙 Poetry Analysis II

**Part 3 of 7 — Syntax and the Speaker's Mind**

---

| Section |
|---------|
| 📖 Two Grids: Sentences and Lines |
| The Syntax Toolkit |
| Milton: A Sentence That Cannot Finish |
| Donne: Arguing With Death |
| Writing About Syntax |

> 🔑 **Key Concept:** Skill **4.C** asks you to identify the details, diction **or syntax** that reveal a speaker's perspective, and skill **5.B** asks you to explain the function of specific words and phrases. Syntax is the order and structure of words in phrases, clauses and sentences. How a speaker builds a sentence shows how that speaker thinks: hesitating, arguing, interrupting, or insisting.
`
    },
    {
      id: 'englitpo3-toolkit',
      type: 'text' as const,
      content: `
## 📖 Two Grids: Sentences and Lines

A poem has two grids laid over each other. **Lines** are units of verse. **Sentences** are units of grammar. Poetry Analysis I showed what happens at the line break. This part asks what the *sentence* is doing.

| Question to ask | Why it matters |
|---|---|
| Where does each sentence begin and end? | A sentence that spans eight lines feels different from eight one-line sentences |
| Where is the main clause? | Delaying it creates suspense or shows a mind circling before it can say the thing |
| Who is addressed? | Talking *to* someone or something is different from talking *about* it |
| Which sentences are questions, commands, or statements? | Each shows a different stance: doubt, authority, certainty |

## The Syntax Toolkit

| Term | Definition | Common function (context decides) |
|---|---|---|
| **Inversion** | Normal word order is rearranged ("Thousands at His bidding speed" puts the phrase before the verb) | Throws weight onto the word moved to the front |
| **Periodic sentence** | The main clause is held back until the end | Suspense; a mind working up to a conclusion |
| **Cumulative (loose) sentence** | The main clause comes first, then details are added | Ease, accumulation, a sense of afterthought |
| **Apostrophe** | Direct address to someone absent or something not human ("Death, be not proud") | Confronts, pleads or challenges; makes an idea a listener |
| **Rhetorical question** | A question asked for effect, not for an answer | Challenges a listener or exposes the speaker's doubt |
| **Parenthesis / interruption** | A sentence breaks off or is cut into by another thought | Shows hesitation, correction or a second voice |
| **Imperative** | A command | Authority, urgency, defiance |

Notice that apostrophe here means a figure of speech, not the punctuation mark.
`
    },
    {
      id: 'englitpo3-milton',
      type: 'text' as const,
      content: `
## Milton: A Sentence That Cannot Finish

John Milton was completely blind by about 1652. In this sonnet the speaker worries that blindness keeps him from using his "talent," an allusion to Jesus's parable of the talents (Matthew 25), in which a servant who buries the money his master gave him is punished.

> When I consider how my light is spent
> Ere half my days, in this dark world and wide,
> And that one talent which is death to hide
> Lodged with me useless, though my soul more bent
> To serve therewith my Maker, and present
> My true account, lest He returning chide,—
> Doth God exact day-labour, light denied?
> I fondly ask:—But Patience, to prevent
> That murmur, soon replies; God doth not need
> Either man's work, or His own gifts: who best
> Bear His mild yoke, they serve Him best: His state
> Is kingly; thousands at His bidding speed
> And post o'er land and ocean without rest:—
> They also serve who only stand and wait.
>
> — John Milton, "When I consider how my light is spent," written c. 1655, published 1673 (text from Palgrave's *Golden Treasury*, 1861)

### A Worked Reading of the Syntax

**Step 1: Find the main clause.** The poem opens with "When I consider ...," a subordinate clause. More clauses pile on: "how my light is spent," "that one talent ... Lodged with me useless," "though my soul more bent / To serve." The main clause, "I fondly ask," does not arrive until **line 8**. This is a periodic sentence stretched across seven and a half lines.

**Step 2: Ask what the delay shows.** The speaker cannot get to the point. Worry upon worry, qualification upon qualification, the sentence mirrors an anxious mind going over its fears. The question at its center, "Doth God exact day-labour, light denied?", is a bitter one: does God demand a full day's work from a man who has been denied light? "Fondly" means foolishly. The speaker judges his own question even as he asks it.

**Step 3: Find the interruption.** "But Patience, to prevent / That murmur, soon replies." Patience cuts in halfway through line 8, before the octave is over. A Petrarchan sonnet usually turns at line 9; this one turns early. "Prevent" means to forestall or get ahead of. Patience literally stops the complaint before it can grow.

**Step 4: Compare the two voices.** Patience's syntax is different: short, balanced clauses divided by colons and semicolons ("God doth not need / Either man's work, or His own gifts"). The anxious single sentence gives way to calm statements. The final line is all monosyllables and one plain clause: "They also serve who only stand and wait."

| Syntax choice | Where | What it reveals |
|---|---|---|
| Periodic sentence, main clause delayed | Lines 1-8 | An anxious mind circling its fear |
| Bitter rhetorical question | Line 7 | Resentment the speaker half-disowns ("fondly") |
| Interruption by a second voice | Line 8 | Faith arriving before the complaint is complete |
| Short balanced clauses; plain final line | Lines 9-14 | Calm acceptance replacing struggle |
`
    },
    {
      id: 'englitpo3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `Delaying the main clause "I fondly ask" until line 8 primarily serves to`,
            options: [
              `enact the speaker's anxious accumulation of worries`,
              `hide the identity of the person the speaker addresses`,
              `make the poem fit the rhyme scheme of a ballad`,
              `suggest that the speaker has already found peace`
            ],
            correctAnswer: 0,
            explanation: `Clause after clause of worry builds before the speaker can reach his question, so the syntax mirrors a troubled mind. The speaker addresses no hidden person, the poem is a sonnet, and peace comes only after Patience replies.`
          },
          {
            question: `In context, the word "fondly" (line 8) indicates that the speaker`,
            options: [
              `asks his question with affection for God`,
              `recognizes his own question as foolish`,
              `remembers his years of sight with pleasure`,
              `wishes to flatter Patience into agreeing`
            ],
            correctAnswer: 1,
            explanation: `"Fondly" carries its older sense of "foolishly," so the speaker criticizes his complaint even while voicing it. The affectionate modern sense does not fit a bitter question, and nothing here concerns memories or flattery.`
          },
          {
            question: `The shift from the first eight lines to Patience's reply is marked chiefly by a change from`,
            options: [
              `rhymed lines to unrhymed blank verse`,
              `a single straining sentence to short, settled clauses`,
              `questions about nature to questions about society`,
              `the speaker's voice to the voice of the parable's master`
            ],
            correctAnswer: 1,
            explanation: `The octave's one long, interrupted sentence gives way to brief statements separated by colons and semicolons, and then to a plain, one-clause final line. The rhyme continues, nature and society are not the subject, and the reply belongs to Patience.`
          }
        ]
      }
    },
    {
      id: 'englitpo3-donne',
      type: 'text' as const,
      content: `
## Donne: Arguing With Death

John Donne's Holy Sonnet is one long **apostrophe**. The speaker addresses Death directly and argues it down. (Original spelling, from H. J. C. Grierson's 1912 edition.)

> Death be not proud, though some have called thee
> Mighty and dreadfull, for, thou art not soe,
> For, those, whom thou think'st, thou dost overthrow,
> Die not, poore death, nor yet canst thou kill mee.
> From rest and sleepe, which but thy pictures bee,
> Much pleasure, then from thee, much more must flow,
> And soonest our best men with thee doe goe,
> Rest of their bones, and soules deliverie.
> Thou art slave to Fate, Chance, kings, and desperate men,
> And dost with poyson, warre, and sicknesse dwell,
> And poppie, or charmes can make us sleepe as well,
> And better then thy stroake; why swell'st thou then?
> One short sleepe past, wee wake eternally,
> And death shall be no more; death, thou shalt die.
>
> — John Donne, Holy Sonnet X ("Death be not proud"), published 1633

### A Worked Reading of the Syntax

| Line(s) | Syntax | What it shows about the speaker |
|---|---|---|
| 1 | **Imperative + apostrophe**: "Death be not proud" | He opens by giving orders to Death, reversing the usual power |
| 2-4 | **Logical connectives**: "for," "For," "nor yet" | He argues like a lawyer, building a case |
| 4 | Address with an epithet: "poore death" | Pity and condescension; Death is diminished to a figure deserving sympathy |
| 5-6 | **Inversion**: "From rest and sleepe ... Much pleasure ... must flow" | The comparison (sleep is pleasant, so death must be more so) is pushed forward as evidence |
| 9 | Death is "slave to Fate, Chance, kings, and desperate men" | Death is demoted to a servant of others |
| 12 | **Rhetorical question**: "why swell'st thou then?" | A taunt; he mocks Death's swollen pride |
| 14 | Third person, then apostrophe again: "death shall be no more; death, thou shalt die" | He speaks *about* Death's end, then turns to announce it *to* Death's face |

The sonnet ends in **paradox**: death itself will die. The syntax of the last line makes the paradox a verdict. The two clauses move from a general statement to a direct sentence passed on the defendant.
`
    },
    {
      id: 'englitpo3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Syntax** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: `"Death be not proud," spoken to Death itself, combines an imperative with ___`,
            options: ['apostrophe', 'inversion', 'a periodic sentence', 'an allusion']
          },
          {
            label: `Milton's opening sentence, whose main clause waits until line 8, is a ___`,
            options: ['periodic sentence', 'cumulative sentence', 'rhetorical question', 'fragment']
          },
          {
            label: `"why swell'st thou then?", which expects no answer, is a ___`,
            options: ['rhetorical question', 'periodic sentence', 'command', 'parenthesis']
          }
        ],
        correctAnswers: ['apostrophe', 'periodic sentence', 'rhetorical question'],
        hint1: 'Speaking directly to something that cannot answer.',
        hint2: 'The main clause is held back to the end.',
        hint3: 'A question asked as a taunt rather than for information.',
        explanation: 'Donne commands and addresses Death (apostrophe), Milton delays his main clause (periodic sentence), and Donne\'s taunt needs no reply (rhetorical question).'
      }
    },
    {
      id: 'englitpo3-writing',
      type: 'text' as const,
      content: `
## Writing About Syntax

Syntax is one of the hardest features to write about well, because students tend to describe it ("a long sentence") without saying what it does.

| Weak | Strong |
|---|---|
| "Milton uses a long sentence in the octave." | "Milton suspends the main clause until line 8, so the octave becomes a single anxious breath that only Patience's interruption can release." |
| "Donne asks a rhetorical question." | "Donne's taunt, 'why swell'st thou then?', turns argument into mockery: having proved Death weak, the speaker can now laugh at its pride." |
| "The poem has a lot of punctuation." | "The colons in Patience's reply break the speaker's run-on worry into calm, measured statements." |

### Common Misconceptions

- **"Inversion is only there to make the rhyme work."** Sometimes it helps the rhyme, but always ask which word it pushes into a stressed position.
- **"Long sentence means confused speaker."** A long sentence can show anxiety (Milton), control (Browning's Duke) or rapture. Read the content.
- **"A question in a poem shows uncertainty."** Donne's question is a weapon, not a doubt.
- **"Apostrophe is the comma-like mark."** In literary analysis it is direct address to an absent person or a thing.

> 🔑 **AP Connection:** Section I questions often ask about "the syntax of lines ..." or "the shift in line ...". Locate the main clause and the moment the sentence pattern changes; those usually mark the turn in the speaker's thinking.
`
    },
    {
      id: 'englitpo3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: `The speaker's attitude toward Death in Donne's sonnet is best described as`,
            options: [
              `fearful but resigned`,
              `defiant and mocking`,
              `curious and uncertain`,
              `grieving and nostalgic`
            ],
            correctAnswer: 1,
            explanation: `Commands, a lawyer's argument and the taunt "why swell'st thou then?" show a speaker who scorns Death's claim to power. He is not afraid, his argument is confident, and he mourns no one.`
          },
          {
            question: `Calling Death a "slave to Fate, Chance, kings, and desperate men" (line 9) primarily serves to`,
            options: [
              `show that Death acts with the authority of kings`,
              `reduce Death to a servant of other forces`,
              `warn readers to avoid danger and violence`,
              `praise the courage of those who face death`
            ],
            correctAnswer: 1,
            explanation: `A slave obeys others, so the list strips Death of independent power. The kings command Death rather than lend it authority, and the line is neither a safety warning nor praise of courage.`
          },
          {
            question: `The final clause "death, thou shalt die" is best described as`,
            options: [
              `a paradox delivered as a verdict to Death itself`,
              `an admission that Death will triumph after all`,
              `a plea to God to end the speaker's suffering soon`,
              `a statement of doubt about life after the grave`
            ],
            correctAnswer: 0,
            explanation: `The speaker turns back to address Death and pronounces its end, a paradox that follows from waking "eternally." The line concedes nothing to Death, prays for nothing, and expresses certainty rather than doubt.`
          }
        ]
      }
    }
  ]
}
