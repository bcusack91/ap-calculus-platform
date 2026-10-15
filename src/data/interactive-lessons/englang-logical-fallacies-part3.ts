export const englangLogicalFallaciesPart3Data = {
  topicSlug: 'englang-logical-fallacies',
  sections: [
    {
      id: 'englangl3-intro',
      type: 'text' as const,
      content: `
# ⚠️ Logical Fallacies

**Part 3 of 7 — Reasoning Exposed in Real Texts: Lincoln's Fragment on Slavery and Plato's Euthyphro**

---

| Section |
|---------|
| 📖 Lincoln, "A Fragment on Slavery" (c. 1854) |
| How Lincoln Turns the Argument Around |
| 📖 Plato, *Euthyphro* (Jowett translation) |
| How Socrates Shows the Argument Going in a Circle |
| What These Models Teach Your Own Writing |

> 🔑 **Key Concept:** The most powerful critics of bad reasoning rarely stop to name a fallacy. They **show** what an argument commits its maker to. Lincoln takes an opponent's rule and applies it consistently until it turns on the opponent. Socrates asks a confident man to define his key term and lets the answers expose themselves. Both are models for skill 5.A: evaluating a line of reasoning by tracing where it actually leads.
`
    },
    {
      id: 'englangl3-lincoln',
      type: 'text' as const,
      content: `
## 📖 Lincoln, "A Fragment on Slavery" (c. 1854)

### The Situation

| Component | Details |
|---|---|
| **Writer** | Abraham Lincoln, an Illinois lawyer and former one-term congressman, returning to politics in 1854 as the Kansas-Nebraska Act reopened the question of slavery's expansion |
| **Form** | A short private note found among his papers and published after his death; it reads like a rehearsal of an argument he expected to make |
| **Imagined audience** | A defender of slavery, addressed directly as "you" |
| **Purpose** | To test each common justification for slavery by asking whether its defender would accept the same rule applied to himself |

The text below follows *Speeches & Letters of Abraham Lincoln, 1832–1865* (Everyman's Library, 1907), which dates the note July 1854 and uses the spelling "colour."

> If A can prove, however conclusively, that he may of right enslave B, why may not B snatch the same argument and prove equally that he may enslave A? You say A is white and B is black. It is colour, then; the lighter having the right to enslave the darker? Take care. By this rule you are to be slave to the first man you meet with a fairer skin than your own.
>
> You do not mean colour exactly? You mean the whites are intellectually the superiors of the blacks, and therefore have the right to enslave them? Take care again. By this rule you are to be slave to the first man you meet with an intellect superior to your own.
>
> But, say you, it is a question of interest, and if you make it your interest you have the right to enslave another. Very well. And if he can make it his interest he has the right to enslave you.
>
> — Abraham Lincoln, "A Fragment on Slavery"
`
    },
    {
      id: 'englangl3-lincoln-reading',
      type: 'text' as const,
      content: `
## How Lincoln Turns the Argument Around

### The Opening Question: Arguments Must Work Both Ways

Lincoln's first sentence states the principle the rest of the note applies: a sound argument cannot depend on **who** is using it. If A's reasoning proves A may enslave B, B may "snatch the same argument." The letters A and B strip away identity on purpose. They turn a question about race into a question about reasoning, where the reader must judge the rule itself.

### Three Proposed Rules, One Test

| Paragraph | The defender's rule | Lincoln's test | What the test exposes |
|---|---|---|---|
| 1 | Colour: "the lighter having the right to enslave the darker" | Apply it to "the first man you meet with a fairer skin than your own" | Skin color is a matter of degree, so the rule licenses enslaving the defender too |
| 2 | Intellect: the whites are "intellectually the superiors" | Apply it to "the first man you meet with an intellect superior to your own" | The rule depends on a ranking that would place many defenders below someone else |
| 3 | Interest: "if you make it your interest you have the right" | "if he can make it his interest he has the right to enslave you" | The rule reduces "right" to whatever a person wants, so it protects no one |

The method is simple to describe: **accept the opponent's premise for the sake of argument, apply it consistently, and arrive at a conclusion the opponent must reject.** (Logicians call this reducing an argument to absurdity.) A rule that justifies far more than its user intends is said to **prove too much**.

### Small Words Doing Large Work

- **"Take care."** The two-word warning, repeated as "Take care again," treats the defender as someone about to walk into his own trap. The tone is calm, almost courteous, which makes the trap more effective.
- **"You do not mean colour exactly?"** Lincoln voices the opponent's retreat as a question. Each paragraph shows the defender abandoning one rule for another, which itself suggests that the conclusion came first and the reasons were found afterward.
- **"Very well."** The third paragraph drops "Take care." Lincoln simply grants the premise and reverses it in one sentence. The shortest paragraph answers the barest justification: once "right" means only interest, nothing is left to argue about.

> 🔑 **AP Connection:** Lincoln never says "your argument is a fallacy." He shows that the defender's reasons, applied consistently, would endanger the defender himself. When you write about a passage that tests an opposing argument, describe the **method** (applying the rule consistently, following the premise to its consequence) and its **effect on the audience** (the opponent is refuted by his own principles).
`
    },
    {
      id: 'englangl3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding: Lincoln** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Lincoln\'s use of the letters "A" and "B" in the opening sentence primarily serves to',
            options: [
              'present the dispute as a test of reasoning that must hold for anyone',
              'hide Lincoln\'s own position from readers who might disagree with it',
              'suggest that the question is too abstract to settle in practical terms',
              'imitate the formal style of the legal documents Lincoln wrote as a lawyer'
            ],
            correctAnswer: 0,
            explanation: 'Replacing people with letters makes the argument symmetrical, so B can "snatch the same argument" that A uses. Lincoln\'s position is plain, he goes on to settle the question practically, and the note\'s direct "you" is not the style of a legal document.'
          },
          {
            question: 'The repeated sentence "By this rule you are to be slave to the first man you meet..." works chiefly by',
            options: [
              'appealing to the defender\'s fear of violence from those now enslaved',
              'showing that the defender\'s own rule would condemn the defender himself',
              'citing legal precedents that would extend slavery to new groups of people',
              'predicting a chain of events that will follow if the opponent\'s view wins'
            ],
            correctAnswer: 1,
            explanation: 'Each "By this rule" sentence applies the opponent\'s principle consistently, and the result is a conclusion he must reject. It is not a threat, a citation of precedent, or a prediction of escalating events; it is the logical consequence of the rule itself.'
          },
          {
            question: 'Compared with the first two paragraphs, the third paragraph is notable for',
            options: [
              'dropping the warning and refuting the rule in a single reversal',
              'adding statistics to support the claim about economic interest',
              'conceding that the argument from interest is partly persuasive',
              'turning from the defender to address a new and neutral audience'
            ],
            correctAnswer: 0,
            explanation: 'The third paragraph replaces "Take care" with "Very well" and answers the interest argument in one turned-around sentence. It contains no statistics, "Very well" grants the premise only to reverse it, and the "you" is still the defender.'
          }
        ]
      }
    },
    {
      id: 'englangl3-euthyphro',
      type: 'text' as const,
      content: `
## 📖 Plato, *Euthyphro* (Jowett translation)

### The Situation

| Component | Details |
|---|---|
| **Writer** | Plato, recording (and shaping) a conversation of his teacher Socrates in Athens, 399 BCE |
| **Speakers** | Socrates, on his way to answer an indictment for impiety; Euthyphro, a man who claims exact knowledge of religion |
| **Exigence** | Euthyphro is prosecuting his own father for the death of a laborer whom the father left bound in a ditch; his family calls the prosecution impious |
| **Method** | Socrates asks Euthyphro to define **piety**, the term his whole case depends on, and examines each answer |

Socrates first asks what piety is, and Euthyphro answers with his own case: "Piety is doing as I am doing." Socrates objects:

> SOCRATES: Remember that I did not ask you to give me two or three examples of piety, but to explain the general idea which makes all pious things to be pious.

Euthyphro then offers a definition: "Piety, then, is that which is dear to the gods." Socrates replies with mock deference:

> SOCRATES: Very good, Euthyphro; you have now given me the sort of answer which I wanted. But whether what you say is true or not I cannot as yet tell, although I make no doubt that you will prove the truth of your words.
>
> EUTHYPHRO: Of course.

After the definition is revised to "what all the gods love," Socrates asks the dialogue's most famous question:

> SOCRATES: The point which I should first wish to understand is whether the pious or holy is beloved by the gods because it is holy, or holy because it is beloved of the gods.

Euthyphro agrees that the holy is loved **because** it is holy. But "dear to the gods" simply means "loved by the gods." So "dear to the gods" cannot explain what holiness **is**; it only names something that happens to holy things. Euthyphro, frustrated, complains:

> EUTHYPHRO: For somehow or other our arguments, on whatever ground we rest them, seem to turn round and walk away from us.

Later, Euthyphro's newest answer (piety is what pleases the gods) brings him back to the definition he had already given up. Socrates points it out:

> SOCRATES: ... there is another and far greater artist than Daedalus who makes them go round in a circle, and he is yourself; for the argument, as you will perceive, comes round to the same point. Were we not saying that the holy or pious was not the same with that which is loved of the gods? Have you forgotten?
>
> EUTHYPHRO: I quite remember.
>
> ...
>
> SOCRATES: Then either we were wrong in our former assertion; or, if we were right then, we are wrong now.
>
> EUTHYPHRO: One of the two must be true.
>
> — Plato, *Euthyphro*, translated by Benjamin Jowett

(Daedalus was the legendary craftsman whose statues were said to move on their own; Socrates jokingly claims him as an ancestor.)
`
    },
    {
      id: 'englangl3-euthyphro-reading',
      type: 'text' as const,
      content: `
## How Socrates Shows the Argument Going in a Circle

| Move | What Socrates does | The reasoning problem it exposes |
|---|---|---|
| 1 | Rejects "doing as I am doing" | An **example is not a definition**. One case cannot supply the standard that judges all cases, the same problem as generalizing from too few cases. |
| 2 | Asks whether the holy is loved because it is holy, or holy because it is loved | The definition names an **effect** of holiness (the gods' love), not what makes a thing holy |
| 3 | Shows the final answer returning to "dear to the gods" | The reasoning ends where it began, so it has added **no support**: this is what "circular" means |
| 4 | States the dilemma: "either we were wrong... or... we are wrong now" | Euthyphro holds two claims that cannot both be true, so at least one must be given up |

### Why Socrates Never Says "Fallacy"

Socrates lets Euthyphro reach each problem through his own answers ("I quite remember," "One of the two must be true"). This is **cross-examination**: the respondent, not the questioner, supplies the admissions that undo the argument. It is far more persuasive than an accusation, because the person can hardly dispute what he has just agreed to.

### Irony as a Tool of Evaluation

"I make no doubt that you will prove the truth of your words" is ironic: Socrates does doubt it, and the dialogue proves him right. Euthyphro's "Of course" shows a confidence that the rest of the dialogue tests and finds unearned. The irony is not decoration. It sets up the gap between how certain Euthyphro is and how well he can support his certainty.

> 🔑 **AP Connection:** Euthyphro is prosecuting his own father on the strength of a term he cannot define. That is the lesson for your own argument essay: when your thesis rests on a contested word (*fair*, *freedom*, *success*), say what you mean by it. An undefined key term is where circular reasoning and shifting meanings hide.
`
    },
    {
      id: 'englangl3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Lincoln exposes each of the defender's rules by applying it _______, to the defender as well as to others.

2) Socrates objects that "doing as I am doing" is an _______, not a definition.

3) A line of reasoning that "comes round to the same point" it started from is called _______ reasoning.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['consistently', 'example', 'circular'],
        hint1: 'The opposite of applying a rule only when it suits you: the same way every time.',
        hint2: 'Socrates says he did not ask for "two or three" of these.',
        hint3: 'Socrates says the argument goes "round in a ___."',
        explanation: 'Lincoln applies each rule consistently until it condemns its own defender, Socrates rejects an example offered as a definition, and an argument that returns to its starting point is circular because it adds no support.'
      }
    },
    {
      id: 'englangl3-models',
      type: 'text' as const,
      content: `
## What These Models Teach Your Own Writing

| Technique | Model | What it exposes | How to use it in an essay |
|---|---|---|---|
| **Apply the rule consistently** | Lincoln's "By this rule..." | A principle that proves too much | In a Q3 rebuttal: "If we accept that X justifies Y, then X would also justify Z, which no one accepts." |
| **Ask for the standard, not an example** | Socrates on "doing as I am doing" | A claim resting on one case | Before generalizing from an example, state the principle the example illustrates |
| **Check that the definition explains** | "Holy because it is beloved" | A definition that only restates or names an effect | Define your key term by what it **is**, then show your evidence meets that definition |
| **Look for return trips** | "comes round to the same point" | Circular reasoning | Ask of each body paragraph: does this add support, or restate the thesis in new words? |

> 🔑 **AP Connection:** On the rhetorical analysis essay, these are strong **commentary** moves. Instead of "Lincoln uses logos," write: "By applying the defender's own rule to the defender himself, Lincoln makes the argument for slavery refute itself, so the reader rejects it on its own terms." That sentence names the method, the effect, and the reason the effect follows.
`
    },
    {
      id: 'englangl3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice: Plato and Both Texts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'When Socrates says "I did not ask you to give me two or three examples of piety," he is objecting that Euthyphro has',
            options: [
              'used his own case as a standard that all other cases must follow',
              'answered with stories about the gods that Socrates rejects as false',
              'refused to reply until Socrates has stated his own definition first',
              'given a definition so broad that it includes impious acts as well'
            ],
            correctAnswer: 0,
            explanation: 'Euthyphro offered his prosecution as the answer, but one case cannot supply the "general idea" that makes all pious things pious. The objection here is not about the myths, Euthyphro does answer, and his example is too narrow rather than too broad.'
          },
          {
            question: 'Socrates\'s remark "I make no doubt that you will prove the truth of your words" is best read as',
            options: [
              'sincere praise that Socrates later regrets',
              'irony that prepares for the definition\'s failure',
              'a concession that ends the cross-examination',
              'a threat to report Euthyphro to the court'
            ],
            correctAnswer: 1,
            explanation: 'Socrates goes on to show that the definition cannot be proved, so the confident praise is ironic, and it highlights the gap between Euthyphro\'s certainty and his support. Nothing in the dialogue shows regret, the examination continues rather than ending, and Socrates makes no threat.'
          },
          {
            question: 'Lincoln\'s note and Plato\'s dialogue are most alike in that each',
            options: [
              'lets an opponent\'s own premises reveal the weakness of the opponent\'s position',
              'attacks the character of an opponent in order to discredit his conclusions',
              'relies on statistics and expert testimony rather than on argument alone',
              'ends with the opponent agreeing to adopt the author\'s position in full'
            ],
            correctAnswer: 0,
            explanation: 'Lincoln follows the defender\'s rules to their consequences, and Socrates draws admissions from Euthyphro that undo his definitions. Neither attacks character, neither uses statistics, and Euthyphro leaves without being persuaded.'
          }
        ]
      }
    }
  ]
};
