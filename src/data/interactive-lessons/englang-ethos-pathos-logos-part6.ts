export const englangEthosPathosLogosPart6Data = {
  topicSlug: 'englang-ethos-pathos-logos',
  sections: [
    {
      id: 'englange6-intro',
      type: 'text' as const,
      content: `
# ⚖️ Ethos, Pathos, and Logos

**Part 6 of 7 — Exam Practice: John Brown's Speech to the Court, 1859**

---

| Section |
|---------|
| How the Exam Tests the Appeals |
| 📖 The Passage: Brown, November 2, 1859 |
| Section I Practice Set |
| Question 2: Analysis Without Label-Spotting |

> 🔑 **Key Concept:** Section I rarely asks "Which appeal is this?" Instead it asks what a choice **does**: concedes, establishes credibility, exposes a double standard, appeals to shared values. Question 2 rewards the same thing. The appeals help you think; your essay should explain the choices.

## How the Exam Tests the Appeals

| What the stem says | The appeal underneath |
|---|---|
| "primarily serves to establish the speaker's credibility" / "fairness" | Ethos |
| "appeals to the audience's sense of" / "evokes sympathy for" | Pathos |
| "the hypothetical situation serves to" / "the argument assumes" | Logos |
| "the reference to [a shared text or value] serves to" | Often all three: shared ground, authority, a premise |
`
    },
    {
      id: 'englange6-passage',
      type: 'text' as const,
      content: `
## 📖 The Passage: Brown, November 2, 1859

### The Situation

In October 1859 the abolitionist John Brown led an armed raid on the federal armory at Harpers Ferry, Virginia, intending to arm enslaved people and spark a war against slavery. The raid failed within two days, and several people on both sides were killed, including two of Brown's sons. Virginia tried Brown for treason against the Commonwealth, murder, and conspiring with enslaved people to rebel, and a jury convicted him. On November 2, before the judge pronounced the death sentence, Brown was asked if he had anything to say. Newspapers across the country printed his reply. He was hanged on December 2, 1859.

Brown's denials in the passage are hard to square with the raid itself and with killings he had led in Kansas in 1856. Rhetorical analysis examines how he builds his case; it does not require accepting every claim.

Text as printed in W. E. B. Du Bois, *John Brown* (1909).

> I have another objection; and that is, it is unjust that I should suffer such a penalty. Had I interfered in the manner which I admit, and which I admit has been fairly proved (for I admire the truthfulness and candor of the greater portion of the witnesses who have testified in this case),—had I so interfered in behalf of the rich, the powerful, the intelligent, the so-called great, or in behalf of any of their friends,—either father, mother, brother, sister, wife, or children, or any of that class,—and suffered and sacrificed what I have in this interference, it would have been all right; and every man in this court would have deemed it an act worthy of reward rather than punishment.
>
> This court acknowledges, as I suppose, the validity of the law of God. I see a book kissed here which I suppose to be the Bible, or at least the New Testament. That teaches me that all things whatsoever I would that men should do to me, I should do even so to them. It teaches me, further, to 'remember them that are in bonds, as bound with them.' I endeavored to act up to that instruction. I say, I am yet too young to understand that God is any respecter of persons. I believe that to have interfered as I have done—as I have always freely admitted I have done—in behalf of His despised poor, was not wrong, but right. Now, if it is deemed necessary that I should forfeit my life for the furtherance of the ends of justice, and mingle my blood further with the blood of my children and with the blood of millions in this slave country whose rights are disregarded by wicked, cruel, and unjust enactments,—I submit; so let it be done! Let me say one word further.
>
> I feel entirely satisfied with the treatment I have received on my trial. Considering all the circumstances, it has been more generous than I expected. But I feel no consciousness of guilt.
>
> — John Brown, speech to the court, Charlestown, Virginia, November 2, 1859
`
    },
    {
      id: 'englange6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Section I Practice Set** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The parenthetical praise of "the truthfulness and candor of the greater portion of the witnesses" serves primarily to',
            options: [
              'concede the facts and dispute only the penalty',
              'suggest that some witnesses lied in order to secure his conviction',
              'flatter the jury in the hope of a lighter sentence',
              'introduce the witnesses whose testimony he will now refute'
            ],
            correctAnswer: 0,
            explanation: 'By granting that the facts were "fairly proved," Brown appears fair and moves the argument to whether the penalty is just. He does not accuse witnesses of lying, the verdict is already in, and he refutes no testimony.'
          },
          {
            question: 'The hypothetical beginning "had I so interfered in behalf of the rich, the powerful" functions mainly to',
            options: [
              'expose a double standard in how the court judges',
              'admit that his actions would have been wrong if done for anyone else',
              'describe a plan he had abandoned before the raid began',
              'warn the court that wealthy allies will avenge his death'
            ],
            correctAnswer: 0,
            explanation: 'Brown argues that identical conduct on behalf of the powerful would earn "reward rather than punishment," so the court judges by whom he helped, not what he did. He makes no admission, describes no abandoned plan, and issues no threat.'
          },
          {
            question: 'In the sentence "I see a book kissed here which I suppose to be the Bible," Brown primarily',
            options: [
              'questions whether the court\'s Bible is an authentic edition',
              'turns the court\'s own oath ritual into the premise of his argument',
              'shifts from a legal argument to a personal memory of his childhood',
              'concedes that religious teaching has no place in a court of law'
            ],
            correctAnswer: 1,
            explanation: 'Witnesses swore oaths on the Bible, so Brown uses the court\'s own ceremony to establish that it accepts the "law of God" he will invoke. The phrase "I suppose" adds a touch of irony rather than real doubt, and he neither turns to childhood nor concedes anything.'
          },
          {
            question: 'Brown, then fifty-nine, says "I am yet too young to understand that God is any respecter of persons." The statement is best described as',
            options: [
              'ironic humility implying that God favors no one',
              'a sincere confession that he lacks the education to interpret scripture',
              'a plea for mercy based on his youth and inexperience',
              'a concession that the court understands religion better than he does'
            ],
            correctAnswer: 0,
            explanation: 'A man near sixty cannot mean he is literally too young; the irony insists that no amount of age could teach him that God plays favorites. He is not sincerely confessing ignorance, pleading youth, or deferring to the court.'
          },
          {
            question: 'The clause "mingle my blood further with the blood of my children and with the blood of millions in this slave country" contributes to the speech chiefly by',
            options: [
              'joining his death to his sons\' deaths and to the suffering of the enslaved',
              'providing statistical evidence about the number of enslaved people in America',
              'threatening that his followers will shed blood in revenge for his execution',
              'shifting responsibility for the raid from himself to his children'
            ],
            correctAnswer: 0,
            explanation: 'The repeated "blood" links Brown\'s execution to the sons who died with him and to millions in bondage, casting him as one more victim of an unjust system. "Millions" is not data, nothing is threatened, and he accepts rather than shifts responsibility.'
          }
        ]
      }
    },
    {
      id: 'englange6-q2',
      type: 'text' as const,
      content: `
## Question 2: Analysis Without Label-Spotting

**Prompt (in the style of Question 2):** On November 2, 1859, the abolitionist John Brown addressed the court that had convicted him. Write an essay that analyzes the rhetorical choices Brown makes to argue that his punishment is unjust.

**Thesis (Row A):** "Speaking to a court that had already convicted him, Brown concedes the facts and praises his treatment, then turns the court's own standards, the equality of its laws and the authority of the Bible it swears on, against its verdict, so that his sentence appears to condemn the court rather than himself."

### Version 1: Typical of a Row B score of 2

> John Brown uses ethos, pathos, and logos in his speech. He uses ethos when he says the witnesses were truthful. He uses logos when he talks about the rich and the powerful. He uses pathos when he talks about the blood of his children. He uses all three appeals to persuade the court that he is not guilty. This makes his speech very effective.

| Problem | Why it limits the score |
|---|---|
| Organized by appeal, not by an argument about choices | No line of reasoning about Brown's strategy |
| Each appeal is named and then dropped | Identification without commentary |
| "persuade the court that he is not guilty" | Misreads the purpose: Brown admits the acts and attacks the justice of the penalty |
| "very effective" | Unsupported evaluation |

### Version 2: Typical of a Row B score of 4

> Brown begins by giving up the factual case so that he can win the moral one. **[claim about a choice and its purpose]** He grants that his "interference" has been "fairly proved" and even praises "the truthfulness and candor" of the witnesses, **[specific evidence]** a concession that makes him sound fair while shifting the question from what he did to whether it deserves death. **[commentary: what the concession accomplishes]** He then imagines the same acts performed "in behalf of the rich, the powerful, the intelligent, the so-called great," and claims that "every man in this court" would call them "worthy of reward." **[evidence]** The hypothetical forces his listeners to admit that their judgment depends on whom he helped, not on his conduct, so their verdict appears to rest on a double standard. **[commentary: how the reasoning works on this audience]** Brown seals the argument with the court's own authority: the Bible "kissed here" teaches the Golden Rule and to "remember them that are in bonds." **[evidence]** Because the court swears by that book, it cannot reject his premise without rejecting its own oath, and the man about to be sentenced becomes the one passing judgment. **[commentary linking the choice to the thesis]**

| Feature | Rubric connection |
|---|---|
| Each claim names a **choice** and its **function** | A line of reasoning about the writer's strategy (Row B) |
| Appeals are never named, yet ethos (fairness), logos (hypothetical), and shared authority are all analyzed | Explanation instead of identification |
| Commentary follows every quotation | "Consistently explains how the evidence supports a line of reasoning" |
| Accurately states the purpose (injustice of the penalty) | Responds to the prompt's task |

> 🔑 **AP Connection:** Scores belong to whole essays; the annotations show which paragraph-level habits the Row B descriptors reward. Row C could come from explaining a **tension**: Brown praises the court's fairness while arguing its verdict is unjust, and that apparent contradiction is what lets his moral charge sound credible.
`
    },
    {
      id: 'englange6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Writing Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which revision of "He uses pathos when he talks about the blood of his children" best turns identification into analysis?',
            options: [
              'Brown uses a great deal of pathos when he talks about the blood of his children and the blood of millions in bondage.',
              'By mingling his blood with his sons\' and that of millions in bondage, Brown casts his execution as another wrong of slavery.',
              'The blood of Brown\'s children is an example of pathos, which is an appeal to the emotions of the audience in a speech.',
              'Brown talks about blood, which is a very emotional topic for most people in the court and for readers of newspapers.'
            ],
            correctAnswer: 1,
            explanation: 'The revision explains what the choice does to the audience\'s view of the execution. The other sentences restate the label, define it, or describe the topic without explaining a function.'
          },
          {
            question: 'Version 1 says Brown wants "to persuade the court that he is not guilty." Why does this weaken the paragraph?',
            options: [
              'Brown admits the acts and argues that the penalty is unjust',
              'Brown never addresses the court directly in the passage',
              'The prompt asks only about his use of biblical quotations',
              'Guilt and innocence are matters of logos, not of ethos'
            ],
            correctAnswer: 0,
            explanation: 'Misstating the purpose undermines the line of reasoning: Brown concedes his "interference" and attacks the justice of the sentence. He does address the court, the prompt is broader than scripture, and the last option is a confused labeling claim.'
          }
        ]
      }
    }
  ]
};
