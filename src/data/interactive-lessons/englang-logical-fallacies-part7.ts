export const englangLogicalFallaciesPart7Data = {
  topicSlug: 'englang-logical-fallacies',
  sections: [
    {
      id: 'englangl7-intro',
      type: 'text' as const,
      content: `
# ⚠️ Logical Fallacies

**Part 7 of 7 — Synthesis Review: From Spotting Fallacies to Evaluating Reasoning**

---

| Section |
|---------|
| The Whole Topic on One Page |
| What Each Model Text Teaches |
| Mixed Practice 1 |
| Key Vocabulary |
| Exam-Day Traps and a Stem Bank |
| Mixed Practice 2 |

> 🔑 **Key Concept:** Across this topic you have moved from **naming** fallacies (Part 1) to **explaining** how support fails to reach a claim (Part 2), watching writers expose bad reasoning (Parts 3 and 6), evaluating a line of reasoning step by step (Part 4), and using the vocabulary with care (Part 5). This review ties those skills together for both sections of the exam.
`
    },
    {
      id: 'englangl7-overview',
      type: 'text' as const,
      content: `
## The Whole Topic on One Page

### The Chooser: What Kind of Failure Is It?

| If you notice... | The failure | Write something like... |
|---|---|---|
| The support is about the **person**, the **crowd**, or the **past** | Relevance | "The writer turns from the evidence to [X], which does not bear on whether the claim is true." |
| A broad claim rests on a few or hand-picked cases | Sufficiency | "The claim covers [group], but the evidence covers only [cases]." |
| "After" or "alongside" is treated as "because" | Causal link | "The writer assumes [A] caused [B] without ruling out [C]." |
| Only two options, or a chain of ever-worse results | Structure | "The argument ignores [option] / does not support the step from [B] to [C]." |
| The premise already contains the conclusion, or a key word shifts meaning | Presumption | "The argument assumes what it sets out to prove by [loaded word / shift in meaning]." |
| An analogy | Possible false analogy | "The two cases differ in [feature], which is the feature the conclusion depends on." |

### The Five-Question Routine (Part 4)

**Claim → Support → Link → Assumption → Scope.** Most weaknesses sit at the link and the assumption. Use the **negation test**: deny a possible assumption; if the argument collapses, the argument depends on it.

### The Three Cautions (Part 5)

| Caution | In one line |
|---|---|
| Do not over-label | A suspicious move is a fallacy only if it fails the look-alike test |
| Avoid the fallacy fallacy | A flawed argument means "not shown," not "shown false" |
| Separate effective from sound | Persuading an audience and justifying a claim are different achievements |

## What Each Model Text Teaches

| Text | Method | Lesson for your own writing |
|---|---|---|
| Lincoln, "A Fragment on Slavery" (c. 1854) | Applies the opponent's rule consistently until it turns on him | Test your own principles by asking whom else they would cover |
| Plato, *Euthyphro* | Asks for a definition, then shows the answers going in a circle | Define contested key terms; make each paragraph add support |
| Mill, *The Subjection of Women* (1869) | States when an appeal to custom is legitimate, then shows it is not met; qualifies his own claim | Concede the sound version of an opposing move; claim no more than your evidence shows |
| Schopenhauer, "The Art of Controversy" | Lists debating tricks, ironically, as if recommending them | Recognize the tricks, including refuting a weak proof and calling the matter settled |
| Franklin, "On the Slave Trade" (1790) | Moves familiar arguments into a foreign speaker's mouth so readers judge them from outside | Expose an argument by letting readers see it without their own stake |
`
    },
    {
      id: 'englangl7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A writer argues that a new highway will ease local traffic because a neighboring city\'s traffic fell the year after it opened a highway. Which evaluation is most precise?',
            options: [
              'It infers a cause from one before-and-after case without ruling out other changes.',
              'It attacks the people who oppose the new highway instead of answering their reasons.',
              'It assumes the very conclusion it is trying to prove within its only premise.',
              'It relies on the testimony of an expert speaking outside the field of expertise.'
            ],
            correctAnswer: 0,
            explanation: 'The argument moves from "traffic fell after the highway opened" to "the highway caused the drop" in a single case, so the precise weakness is the unexamined causal link. It attacks no one, its premise does not contain its conclusion, and it cites no expert.'
          },
          {
            question: 'Lincoln\'s fragment and Franklin\'s satire both expose flawed reasoning by',
            options: [
              'shifting who uses an argument so its reasoning can be judged from outside',
              'citing statistics that show the opponents\' factual claims to be mistaken',
              'attacking the motives of opponents rather than the reasons they give',
              'conceding the opponents\' main point and then qualifying it carefully'
            ],
            correctAnswer: 0,
            explanation: 'Lincoln lets "B snatch the same argument," and Franklin puts American arguments into an Algerian official\'s mouth; both make readers judge the reasoning without their usual stake in it. Neither relies on statistics, attacks motives, or concedes the opponents\' point.'
          },
          {
            question: 'Mill\'s treatment of custom and Schopenhauer\'s remark on "the universality of an opinion" differ chiefly in that',
            options: [
              'Mill rejects every appeal to custom, while Schopenhauer accepts some',
              'Mill names conditions under which custom counts, while Schopenhauer allows none',
              'Mill relies on personal attacks, while Schopenhauer relies on historical cases',
              'Mill writes with irony, while Schopenhauer means each of his tricks literally'
            ],
            correctAnswer: 1,
            explanation: 'Mill grants that a widespread practice can be "a strong presumption" when it rests on experience, while Schopenhauer says universal opinion is "not even a probability." The first option reverses the two writers, Mill makes no personal attacks, and Schopenhauer is the one writing with irony.'
          }
        ]
      }
    },
    {
      id: 'englangl7-vocab',
      type: 'text' as const,
      content: `
## Key Vocabulary

| Term | Meaning |
|---|---|
| **Line of reasoning** | The arrangement of claims and evidence that leads to a thesis (skill 5.A) |
| **Warrant** | The often unstated link explaining why the support leads to the claim |
| **Unstated assumption** | Something that must be true for the argument to work but is never said |
| **Negation test** | Deny a possible assumption; if the argument collapses, the argument depends on it |
| **Relevance failure** | Support that does not bear on the claim (ad hominem, tu quoque, popularity, red herring) |
| **Sufficiency failure** | Relevant support that is too thin or unrepresentative (hasty generalization, biased sample) |
| **Post hoc** | Treating "after" as "because" |
| **Correlation as cause** | Treating "together" as "because," ignoring a possible third factor |
| **Begging the question** | A premise that already assumes the conclusion |
| **Equivocation** | A key word that shifts meaning partway through an argument |
| **False analogy** | A comparison that fails in the feature the conclusion depends on |
| **Reductio ad absurdum** | Following an opponent's premise to a conclusion the opponent must reject |
| **Proves too much** | Said of a rule that would justify far more than its user intends |
| **Fallacy fallacy** | Concluding a claim is false because an argument for it is flawed |
| **Sound** | Said of reasoning whose support genuinely justifies its claim |
| **Qualification** | Limiting a claim's scope or certainty to match the evidence (skill 3.C, 4.C) |
`
    },
    {
      id: 'englangl7-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The often unstated link that explains why a piece of support leads to a claim is the _______.

2) A rule that would justify far more than its user intends is said to prove too _______.

3) Limiting a claim's scope to match the evidence is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['warrant', 'much', 'qualification'],
        hint1: 'A term from Toulmin\'s model of argument; it starts with "w."',
        hint2: 'The opposite of "too little."',
        hint3: 'The noun form of "qualify."',
        explanation: 'The warrant bridges support and claim, a principle that covers cases its user would reject proves too much, and qualification matches a claim\'s scope to its evidence.'
      }
    },
    {
      id: 'englangl7-traps',
      type: 'text' as const,
      content: `
## Exam-Day Traps and a Stem Bank

### Traps

| Trap | Fix |
|---|---|
| Choosing the answer with the fanciest fallacy name | Choose the answer that describes **this** passage's reasoning most precisely |
| Treating a true but unneeded statement as the assumption | Apply the negation test to every choice |
| Calling a concession the writer's own view | Concessions ("Some will object...") are usually set up to be answered |
| Reading irony literally | Ask whether the writer could mean the opposite (Schopenhauer, Franklin) |
| Labeling in an essay without explaining | Name the support, the claim, and the gap between them |

### Stem Bank

- "The author's argument assumes that..."
- "The reasoning in the passage is most vulnerable to the objection that..."
- "Which of the following, if true, would most weaken the author's claim?"
- "The author anticipates a possible objection by..."
- "The author qualifies the claim in the second paragraph by..."
- "Which revision of the underlined sentence best avoids an overgeneralization?"
- "The writer wants to strengthen the logic of the paragraph. Which sentence, if added, would best do so?"
`
    },
    {
      id: 'englangl7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which thesis for an argument essay about school start times best avoids a false dilemma?',
            options: [
              'Either schools start later or students will keep failing their morning classes for good.',
              'Schools should start later, and anyone who disagrees has forgotten being a teenager.',
              'Starting school later would help many students, though districts must also weigh busing costs.',
              'Schools should start later because a later start is simply better for the students who attend.'
            ],
            correctAnswer: 2,
            explanation: 'This thesis takes a position while acknowledging a real competing consideration, so it does not reduce the issue to two options. The others present an either-or, attack opponents, or assume their own conclusion.'
          },
          {
            question: 'A student writes that Lincoln\'s repeated "Take care" is "a scare tactic, so his argument is fallacious." What is the strongest objection to this reading?',
            options: [
              'The warning follows from the rule itself.',
              'Lincoln avoids emotional language in the note.',
              'Scare tactics work, so they cannot be fallacies.',
              'The note was private, so its logic does not matter.'
            ],
            correctAnswer: 0,
            explanation: '"Take care" warns the defender of a consequence that his own rule produces, so it is part of the logic rather than a fear substituted for it. The note does use feeling, effectiveness does not make a move sound, and a private note can still be evaluated.'
          },
          {
            question: 'A student\'s argument paragraph gives two strong examples but explains neither. Which revision would most improve its Row B score?',
            options: [
              'Adding a third example in place of a sentence of explanation',
              'Adding sentences that explain how each example supports the claim',
              'Adding the names of fallacies that opponents of the claim commit',
              'Adding a famous quotation to open the paragraph before the claim'
            ],
            correctAnswer: 1,
            explanation: 'Row B at its top level requires commentary that consistently explains how the evidence supports the line of reasoning. More examples, fallacy labels, or an opening quotation add material without adding that explanation.'
          }
        ]
      }
    }
  ]
};
