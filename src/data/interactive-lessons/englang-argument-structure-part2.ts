export const englangArgumentStructurePart2Data = {
  topicSlug: 'englang-argument-structure',
  sections: [
    {
      id: 'englanga2-intro',
      type: 'text' as const,
      content: `
# 🏗️ Argument Structure

**Part 2 of 7 — Classical Arrangement in a Real Speech: Lincoln at Cooper Union, 1860**

---

| Section |
|---------|
| 📖 The Situation: New York, February 27, 1860 |
| Mapping the Six Classical Parts |
| The Confirmation: Building the Case from the Record |
| The Refutation: Answering an Absent Audience |
| Why the Order Matters |

> 🔑 **Key Concept:** Part 1 gave you the six classical parts as a table. In a real text they are not boxes to tick. They are **functions**: winning a hearing, setting out the facts, stating the claim, proving it, answering objections, and moving the audience to act. Skill 5.A asks you to describe a line of reasoning, and skill 5.B asks how the arrangement of a text reflects that reasoning. Naming the parts is useful only when you explain **why each one comes where it does**.
`
    },
    {
      id: 'englanga2-situation',
      type: 'text' as const,
      content: `
## 📖 The Situation: New York, February 27, 1860

| Component | Details |
|---|---|
| **Writer** | Abraham Lincoln, a former one-term congressman from Illinois, known nationally for his 1858 Senate debates with Stephen A. Douglas |
| **Occasion** | An address at the Cooper Institute (Cooper Union) in New York City, eight months before the 1860 presidential election |
| **Exigence** | In a speech at Columbus, Ohio, the previous autumn, Senator Douglas had claimed that the framers of the Constitution supported his position that the federal government should not control slavery in the federal territories |
| **Audience** | Eastern Republicans, many of whom had never heard Lincoln and doubted that a Western politician could lead the party; readers of the newspapers that printed the speech; and, indirectly, Southern voters |
| **Purpose** | To show that the Republican position on the territories was the framers' position, so that Republicans, not their opponents, were the true conservatives |

Lincoln did not open with his thesis. He opened with his **opponent's** sentence and adopted it as his text.

> "Our fathers, when they framed the Government under which we live, understood this question just as well, and even better, than we do now."
>
> I fully indorse this, and I adopt it as a text for this discourse. I so adopt it because it furnishes a precise and an agreed starting point for a discussion between Republicans and that wing of the Democracy headed by Senator Douglas.
>
> — Abraham Lincoln, Address at Cooper Institute, February 27, 1860 ("indorse" is the period spelling)

Accepting Douglas's premise is a bold structural choice. If Lincoln can prove what the framers actually did, Douglas's own words will carry Lincoln's conclusion.
`
    },
    {
      id: 'englanga2-map',
      type: 'text' as const,
      content: `
## Mapping the Six Classical Parts

| Classical part | Where it appears at Cooper Union | What it does |
|---|---|---|
| **Exordium** (introduction) | "The facts with which I shall deal this evening are mainly old and familiar; nor is there anything new in the general use I shall make of them." | Lowers expectations and presents the speaker as modest and careful, which builds ethos with a skeptical audience |
| **Narratio** (statement of facts) | Defines every term in Douglas's sentence: the frame of government is the Constitution; "our fathers" are the "thirty-nine" signers; the question is whether federal authority may control slavery in the territories | Fixes the terms so that no one can shift them later |
| **Propositio** (claim) | The framers understood that nothing in the Constitution forbade federal control of slavery in the territories | States the point the evidence will prove |
| **Confirmatio** (proof) | A year-by-year record of how the signers voted, from 1784 to 1820 | Supplies the evidence |
| **Refutatio** (answering objections) | "And now, if they would listen - as I suppose they will not - I would address a few words to the Southern people." | Answers the charges made against Republicans |
| **Peroratio** (conclusion) | "A few words now to Republicans," ending in a call to "DARE TO DO OUR DUTY AS WE UNDERSTAND IT" | Turns proof into resolve |

Notice that the **audience changes** as the parts change. The proof is addressed to everyone, the refutation to Southerners who are not in the room, and the conclusion to Republicans. Each shift in addressee marks a shift in function, which is exactly the kind of signal a Section I question asks you to notice.

### The Exordium as Ethos

"Mainly old and familiar" sounds like an apology, but it is a promise: Lincoln will not invent anything. For an audience that expected a frontier stump speaker, a speaker who offers only verifiable facts and "the mode of presenting the facts" sounds like a lawyer they can trust.
`
    },
    {
      id: 'englanga2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Lincoln adopts Senator Douglas\'s sentence about "our fathers" as the text of his speech primarily in order to',
            options: [
              'start from a premise his opponents cannot reject',
              'flatter Douglas before attacking his character',
              'show that he and Douglas agree on the territories',
              'avoid stating any claim of his own about slavery'
            ],
            correctAnswer: 0,
            explanation: 'Douglas\'s own words furnish "a precise and an agreed starting point," so if Lincoln proves what the framers did, his opponents must accept the conclusion. Lincoln does not flatter or attack Douglas, he disagrees with him on the territories, and he does state a claim.'
          },
          {
            question: 'In the classical scheme, Lincoln\'s definitions of "the frame of government," "our fathers," and "the question" belong to the',
            options: [
              'peroration, because they stir the audience to act',
              'refutation, because they answer Southern charges',
              'narration, because they set out the agreed facts',
              'confirmation, because they count the votes cast'
            ],
            correctAnswer: 2,
            explanation: 'Fixing the terms and the facts before the proof is the work of the narratio. The definitions come before any votes are counted, they answer no charges, and they make no appeal to action.'
          }
        ]
      }
    },
    {
      id: 'englanga2-confirmation',
      type: 'text' as const,
      content: `
## The Confirmation: Building the Case from the Record

Lincoln moves chronologically through the signers' votes: the Northwest Territory question in 1784 and 1787, the first Congress's enforcement act in 1789 (signed by President Washington), the Mississippi Territory in 1798, the Louisiana country in 1804, and the Missouri question in 1819–20. Then he totals the record.

> Here, then, we have twenty-three out of our thirty-nine fathers "who framed the government under which we live," who have, upon their official responsibility and their corporal oaths, acted upon the very question which the text affirms they "understood just as well, and even better than we do now;" and twenty-one of them - a clear majority of the whole "thirty-nine" - so acting upon it as to make them guilty of gross political impropriety and willful perjury, if, in their understanding, any proper division between local and federal authority, or anything in the Constitution they had made themselves, and sworn to support, forbade the Federal Government to control as to slavery in the federal territories. Thus the twenty-one acted; and, as actions speak louder than words, so actions, under such responsibility, speak still louder.

### How the Proof Is Built

| Move | Effect |
|---|---|
| **Chronological order** | The record reads as a consistent practice over more than three decades, not a single vote |
| **Repeating Douglas's phrase** inside quotation marks | Every time the framers act, the audience hears Douglas's own standard |
| **A conditional ("if, in their understanding...")** | Forces a choice: either the framers believed federal control was constitutional, or they committed "willful perjury" |
| **The proverb "actions speak louder than words"** | Gives the audience a familiar warrant for treating votes as evidence of belief |

### Honest Limits

Lincoln reports that two of the twenty-three voted the other way and that sixteen "have left no record." His summary claims only that twenty-one "certainly understood" and that "all the rest probably had the same understanding." The confirmation is stronger because it separates what is certain from what is probable. Overclaiming would have handed his critics an easy reply.

> 🔑 **AP Connection:** When a Section I question asks about the "function" of a long paragraph of evidence, look at how it **ends**. Lincoln closes the record with a summary and a proverb; the summary is the claim the evidence proves.
`
    },
    {
      id: 'englanga2-refutation',
      type: 'text' as const,
      content: `
## The Refutation: Answering an Absent Audience

The refutation opens with a striking aside: "if they would listen - as I suppose they will not." Lincoln knows the Southern people are not in the hall. He addresses them anyway, because his real audience is the Northern listener who has heard the Southern charges repeated and wants answers.

Each charge gets the same treatment.

> You say we are sectional. We deny it. That makes an issue; and the burden of proof is upon you. You produce your proof; and what is it? Why, that our party has no existence in your section - gets no votes in your section. The fact is substantially true; but does it prove the issue?

| Step | Example from the sectionalism charge |
|---|---|
| 1. State the charge in the opponent's words | "You say we are sectional." |
| 2. Deny it and assign the burden of proof | "We deny it... the burden of proof is upon you." |
| 3. Test the opponent's evidence | Getting no votes in the South does not prove the principle is sectional |
| 4. Turn the charge | The real question is whether the principle "would wrong your section" |

He repeats the pattern for the charge that Republicans are revolutionary.

> But you say you are conservative - eminently conservative - while we are revolutionary, destructive, or something of the sort. What is conservatism? Is it not adherence to the old and tried, against the new and untried? We stick to, contend for, the identical old policy on the point in controversy which was adopted by "our fathers who framed the Government under which we live;" while you with one accord reject, and scout, and spit upon that old policy, and insist upon substituting something new.

Here the refutation depends on the confirmation. Only because Lincoln has already proved what "the old policy" was can he define conservatism and turn the label against its owners.

The section ends with an analogy for the threat to break up the Union if a Republican wins.

> A highwayman holds a pistol to my ear, and mutters through his teeth, "Stand and deliver, or I shall kill you, and then you will be a murderer!"
`
    },
    {
      id: 'englanga2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The classical part of an argument that answers the opponents' charges is the _______.

2) The classical part that opens a speech and wins the audience's goodwill is the _______.

3) When Lincoln says the charge of sectionalism must be proved by those who make it, he assigns them the burden of _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['refutation', 'exordium', 'proof'],
        hint1: 'Latin refutatio; it comes after the proof at Cooper Union.',
        hint2: 'Latin for "beginning"; Lincoln\'s "old and familiar" facts.',
        hint3: 'The phrase is "the burden of ___ is upon you."',
        explanation: 'The refutatio answers objections, the exordium wins a hearing, and Lincoln says "the burden of proof is upon you."'
      }
    },
    {
      id: 'englanga2-order',
      type: 'text' as const,
      content: `
## Why the Order Matters

Suppose Lincoln had opened by answering the Southern charges. Without the voting record, his definition of conservatism would be an assertion against an assertion. The order **proof first, refutation second** lets the refutation borrow the authority of the evidence.

### Classical Order as a Line of Reasoning

| Order at Cooper Union | Reasoning it reflects |
|---|---|
| Accept the opponent's premise | Common ground first |
| Define the terms | No shifting of ground later |
| Prove the framers' practice | Evidence before conclusions |
| Qualify ("I do not mean to say we are bound to follow implicitly in whatever our fathers did") | Precedent has weight but is not a cage, which shows judgment |
| Answer the charges using that proof | Refutation built on confirmation |
| Turn to Republicans and call for resolve | Proof becomes action |

The qualification deserves attention. Lincoln says that departing from the fathers requires "evidence so conclusive, and argument so clear, that even their great authority, fairly considered and weighed, cannot stand." That sentence protects him against the charge that he worships the past while keeping the past on his side.

### The Peroration

> Neither let us be slandered from our duty by false accusations against us, nor frightened from it by menaces of destruction to the Government nor of dungeons to ourselves. LET US HAVE FAITH THAT RIGHT MAKES MIGHT, AND IN THAT FAITH, LET US, TO THE END, DARE TO DO OUR DUTY AS WE UNDERSTAND IT.

The capitals appear in standard printed editions. After a long chain of evidence, the conclusion stops proving and starts commanding. The balanced "Neither... nor" sentence and the short, final imperative turn the audience from listeners into actors.

> 🔑 **AP Connection:** In a rhetorical analysis essay you do not have to use the Latin names. A sentence such as "Only after he has proved what the framers did does Lincoln turn to answer the South, so that his definition of conservatism rests on evidence rather than assertion" explains arrangement and earns Row B credit. A sentence that only says "Lincoln uses the classical structure" does not.
`
    },
    {
      id: 'englanga2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Lincoln places his reply to the Southern charges after the record of the framers\' votes most likely because',
            options: [
              'Southern listeners were expected to arrive late to the hall',
              'the replies redefine conservatism using the record just proved',
              'classical rules forbid answering objections in the introduction',
              'the record of votes was less familiar than the Southern charges'
            ],
            correctAnswer: 1,
            explanation: 'His answer to the charge of being revolutionary depends on the voting record: Republicans hold "the identical old policy" of the fathers. The arrangement lets the refutation borrow the evidence\'s authority; it has nothing to do with arrival times or fixed rules.'
          },
          {
            question: 'Lincoln\'s statement that two signers voted the other way and sixteen left no record chiefly serves to',
            options: [
              'concede that the framers held no shared view',
              'build credibility by separating proof from probability',
              'suggest that the Missouri votes should be discounted',
              'shift the burden of proof onto his own Republican party'
            ],
            correctAnswer: 1,
            explanation: 'By reporting the exceptions and claiming only what the record shows, Lincoln makes his "clear majority" more believable. He does not abandon the claim of a shared view, discount any vote, or take on a burden he assigns elsewhere.'
          },
          {
            question: 'The highwayman analogy primarily suggests that the threat to break up the Union if a Republican is elected',
            options: [
              'is coercion that wrongly blames its victim',
              'is a bluff that Southern leaders will not carry out',
              'is a lawful response to a disputed court decision',
              'is an understandable reaction to Northern violence'
            ],
            correctAnswer: 0,
            explanation: 'The robber threatens violence and then says the victim will be "a murderer," just as the threatened breakup of the Union would be blamed on those who voted. The analogy is about blame, not about whether the threat is real, lawful, or understandable.'
          }
        ]
      }
    }
  ]
};
