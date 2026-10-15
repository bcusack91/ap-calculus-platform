export const englangLogicalFallaciesPart4Data = {
  topicSlug: 'englang-logical-fallacies',
  sections: [
    {
      id: 'englangl4-intro',
      type: 'text' as const,
      content: `
# ⚠️ Logical Fallacies

**Part 4 of 7 — Evaluating a Line of Reasoning: Assumptions, Objections, and Mill's *The Subjection of Women* (1869)**

---

| Section |
|---------|
| The Five-Question Evaluation Routine |
| Finding the Unstated Assumption |
| Section I Stems for Reasoning |
| 📖 Close Reading: Mill on Custom, Nature, and Experience |

> 🔑 **Key Concept:** Section I reading questions test reasoning in a few predictable ways: what an argument **assumes**, what objection it is most **vulnerable** to, what would **strengthen** or **weaken** it, and how the writer **qualifies** a claim. Each of these is a question about the gap between support and claim (skills 5.A, 3.A–3.C). This part gives you a routine for finding that gap, then applies it to a writer who was himself an expert at finding gaps in his opponents' reasoning.
`
    },
    {
      id: 'englangl4-routine',
      type: 'text' as const,
      content: `
## The Five-Question Evaluation Routine

| Question | What you are looking for | Typical answer form |
|---|---|---|
| **1. Claim** | What does the writer want the reader to accept? | "The town should..."; "X is the main cause of Y" |
| **2. Support** | What reasons and evidence are offered? | Examples, data, authority, analogy, precedent |
| **3. Link** | Why would that support lead to that claim? | The **warrant**, often unstated |
| **4. Assumption** | What must be true for the link to hold? | "This assumes that..." |
| **5. Scope** | Is the claim larger than the support? Is it qualified? | "all" vs "many"; "proves" vs "suggests" |

Most weaknesses live at steps 3 and 4. The support may be true and the claim may be stated well, but the bridge between them rests on something the writer never says.

## Finding the Unstated Assumption

**Worked example (hypothetical):**

> The new bike lane on Elm Street is unnecessary. In a count taken on one January morning, only three cyclists used it.

| Step | Analysis |
|---|---|
| Claim | The lane is unnecessary |
| Support | Three cyclists on one January morning |
| Link | Low use shows low need |
| Assumption | One winter morning is **typical** of the lane's use across the year |
| Scope | "Unnecessary" is absolute; the evidence is one sample |

**The negation test.** To check an assumption, deny it and see whether the argument survives. "One winter morning is **not** typical of the lane's use." Now the count tells us almost nothing, and the argument collapses. An assumption that passes this test is one the argument **depends on**. A statement that does not pass it (for example, "cyclists dislike cold weather") may be true, but the argument does not need it.

## Section I Stems for Reasoning

| Stem | What it is really asking | How to answer |
|---|---|---|
| "The author's argument **assumes** that..." | Which unstated link must hold? | Find the gap between support and claim; apply the negation test |
| "The reasoning is most **vulnerable** to the objection that..." | Where is the bridge weakest? | Look for unrepresentative evidence, ignored alternatives, or a claim broader than its support |
| "Which would most **weaken** the argument?" | What would break the assumption? | Choose the fact that makes the assumption false |
| "The author **qualifies** the claim by..." | Where does the writer limit scope? | Look for "some," "in most cases," "does not of itself prove" |
| "The author **anticipates** an objection by..." | Where does the writer voice and answer an opponent? | Look for "Some will object," "It may be said" |

> 🔑 **AP Connection:** Wrong answers to "assumes" questions are often **true** or **relevant** statements that the argument simply does not need. Apply the negation test to every choice; the right answer is the one whose denial ruins the argument.
`
    },
    {
      id: 'englangl4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '"Our school should end its after-school tutoring program. Of the students who used it this year, most still earned below a B in math." The argument assumes that',
            options: [
              'tutored students would not have scored even lower without the help',
              'the program costs more each year than the school can afford to pay',
              'students who did not use the program earned higher grades in math',
              'tutors in the program were not trained teachers with math degrees'
            ],
            correctAnswer: 0,
            explanation: 'The argument needs the program to have made no difference, so it must assume these students would have done no worse without it. Deny that assumption and the low grades no longer show the program failed. Cost, comparison grades, and the tutors\' training are possible concerns, but the argument as stated does not depend on any of them.'
          },
          {
            question: 'The bike-lane argument in the worked example is most vulnerable to the objection that it',
            options: [
              'relies on a count that may not reflect how the lane is used in other seasons',
              'attacks the people who proposed the lane rather than the lane itself',
              'assumes that cyclists and drivers want the same things from a street',
              'uses the word "unnecessary" in two different senses within one claim'
            ],
            correctAnswer: 0,
            explanation: 'A single January morning is an unrepresentative sample, so the strongest objection targets the evidence\'s typicality. The argument does not attack anyone, compares nothing between cyclists and drivers, and uses "unnecessary" in one sense.'
          }
        ]
      }
    },
    {
      id: 'englangl4-mill',
      type: 'text' as const,
      content: `
## 📖 Close Reading: Mill on Custom, Nature, and Experience

### The Situation

| Component | Details |
|---|---|
| **Writer** | John Stuart Mill, philosopher and former member of Parliament, who in 1867 had proposed amending a reform bill so that women could vote |
| **Text** | *The Subjection of Women* (1869), chapter 1 |
| **Audience** | Victorian readers, most of whom regarded men's legal authority over women as natural and proved by long experience |
| **Purpose** | To show that the usual defenses of that authority (custom, nature, experience) do not support it |

The three paragraphs below appear in this order in chapter 1, with other material between them. The text follows the Project Gutenberg edition, including its British spellings.

> **[1]** The generality of a practice is in some cases a strong presumption that it is, or at all events once was, conducive to laudable ends. This is the case, when the practice was first adopted, or afterwards kept up, as a means to such ends, and was grounded on experience of the mode in which they could be most effectually attained.... But the state of the case is in every respect the reverse of this. In the first place, the opinion in favour of the present system, which entirely subordinates the weaker sex to the stronger, rests upon theory only; for there never has been trial made of any other: so that experience, in the sense in which it is vulgarly opposed to theory, cannot be pretended to have pronounced any verdict.
>
> **[2]** Some will object, that a comparison cannot fairly be made between the government of the male sex and the forms of unjust power which I have adduced in illustration of it, since these are arbitrary, and the effect of mere usurpation, while it on the contrary is natural. But was there ever any domination which did not appear natural to those who possessed it? There was a time when the division of mankind into two classes, a small one of masters and a numerous one of slaves, appeared, even to the most cultivated minds, to be a natural, and the only natural, condition of the human race.... So true is it that unnatural generally means only uncustomary, and that everything which is usual appears natural.
>
> **[3]** It will not do, for instance, to assert in general terms, that the experience of mankind has pronounced in favour of the existing system. Experience cannot possibly have decided between two courses, so long as there has only been experience of one.... On the other hand, experience does say, that every step in improvement has been so invariably accompanied by a step made in raising the social position of women, that historians and philosophers have been led to adopt their elevation or debasement as on the whole the surest test and most correct measure of the civilization of a people or an age.... This does not of itself prove that the assimilation must go on to complete equality; but it assuredly affords some presumption that such is the case.
>
> — John Stuart Mill, *The Subjection of Women*, chapter 1
`
    },
    {
      id: 'englangl4-mill-reading',
      type: 'text' as const,
      content: `
### Paragraph 1: When Custom Counts as Evidence

Mill does not call the appeal to custom a fallacy. He first states when it is **legitimate**: a widespread practice is "a strong presumption" in its favor **if** it was adopted or kept "as a means to such ends" and "grounded on experience." Then he shows the case fails that condition: "there never has been trial made of any other." This is the look-alike test from Part 2 done in prose. Mill grants the sound version of the move, then shows his opponents are making the unsound one.

### Paragraph 2: Answering the Appeal to Nature

The objection Mill voices is that men's authority differs from the other "forms of unjust power" he has described because it is "natural." His reply is a **rhetorical question backed by examples**: "was there ever any domination which did not appear natural to those who possessed it?" Slavery once seemed "the only natural" condition "even to the most cultivated minds." The conclusion follows: "unnatural generally means only uncustomary." Mill's point is that the feeling of naturalness is **not evidence**, because it accompanied every arrangement people now reject.

Applying the routine to Mill's own reasoning:

| Question | Paragraph 2 |
|---|---|
| Claim | Calling a domination "natural" does not show it is just |
| Support | Historical cases (slavery, among others) once called natural |
| Assumption | The feeling of naturalness arose the same way in the case of women as in the rejected cases |
| Possible objection | The cases may differ in a way that matters, which is exactly the objection Mill voices first and then answers |

### Paragraph 3: "Experience of One" and a Qualified Claim

"Experience cannot possibly have decided between two courses, so long as there has only been experience of one." This sentence exposes the hidden assumption in "experience has decided": that a system's **survival** shows it is **better** than an alternative never tried. Mill then makes his own evidence-based claim: improvement in civilization has been "accompanied by" improvement in women's position.

That is a **correlation**, and Mill knows it. His final sentence limits the claim precisely: "This does not of itself prove that the assimilation must go on to complete equality; but it assuredly affords some presumption." He claims a presumption, not a proof. A writer who catches his opponents overreaching cannot afford to overreach himself, and Mill's qualification protects his credibility (skill 3.C).

> 🔑 **AP Connection:** Mill shows three moves Section I questions reward: stating the **condition** under which a type of argument is legitimate, **anticipating** an objection ("Some will object"), and **qualifying** his own claim. When a question asks how a writer "strengthens credibility," look for exactly these moves.
`
    },
    {
      id: 'englangl4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match Each Passage Excerpt to Its Function** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The generality of a practice is in some cases a strong presumption that it is... conducive to laudable ends."',
            options: ['Concedes a condition', 'Voices an objection', 'Qualifies a claim', 'Exposes an assumption']
          },
          {
            label: '"Some will object, that a comparison cannot fairly be made..."',
            options: ['Voices an objection', 'Concedes a condition', 'Exposes an assumption', 'Qualifies a claim']
          },
          {
            label: '"Experience cannot possibly have decided between two courses, so long as there has only been experience of one."',
            options: ['Exposes an assumption', 'Qualifies a claim', 'Voices an objection', 'Concedes a condition']
          }
        ],
        correctAnswers: ['Concedes a condition', 'Voices an objection', 'Exposes an assumption'],
        hint1: 'Mill grants when an appeal to custom would be sound.',
        hint2: 'Mill puts an opponent\'s view into words before answering it.',
        hint3: 'The sentence reveals what "experience has decided" takes for granted.',
        explanation: 'Mill concedes when custom would count as evidence, voices the objection that men\'s authority is natural before answering it, and exposes the assumption that a system\'s survival proves it is better than an untried one.'
      }
    },
    {
      id: 'englangl4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice: Mill** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In paragraph 1, Mill\'s statement that the generality of a practice is "in some cases a strong presumption" in its favor serves primarily to',
            options: [
              'admit that his opponents\' strongest evidence is in the end decisive',
              'set a condition for valid appeals to custom that he shows is unmet',
              'shift the burden of proof from his opponents onto his own argument',
              'praise the founders of the present system for their careful foresight'
            ],
            correctAnswer: 1,
            explanation: 'Mill grants that custom counts when a practice was chosen and kept on the evidence of experience, then argues that men\'s authority over women was never chosen that way. The concession is not decisive for his opponents, does not take on a new burden, and Mill credits the system\'s founders with no foresight at all.'
          },
          {
            question: 'The sentence "Experience cannot possibly have decided between two courses, so long as there has only been experience of one" challenges the assumption that',
            options: [
              'a system\'s long survival proves it is better than untried alternatives',
              'experience is a less trustworthy guide than abstract theory',
              'women themselves have chosen to accept the existing system',
              'historians agree on how the progress of a nation is measured'
            ],
            correctAnswer: 0,
            explanation: 'Mill\'s opponents treat the existing system\'s long record as proof that it is best, but no alternative has been tried for comparison. Mill does not rank theory above experience, makes no claim here about women\'s consent, and cites historians later for a different point.'
          },
          {
            question: 'Mill\'s final sentence in paragraph 3 ("This does not of itself prove...") is best described as',
            options: [
              'a retreat from the argument the paragraph has just built',
              'a limit on what his correlation can be said to show',
              'a concession that his opponents\' theory is equally strong',
              'a doubt about the historians whose judgment he has cited'
            ],
            correctAnswer: 1,
            explanation: 'Mill\'s evidence is that women\'s status and civilization have advanced together, which is a correlation, so he claims "some presumption" rather than proof. He keeps his argument, does not grant his opponents equal strength, and does not question the historians.'
          }
        ]
      }
    }
  ]
};
