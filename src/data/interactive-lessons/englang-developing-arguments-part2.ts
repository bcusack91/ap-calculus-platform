export const englangDevelopingArgumentsPart2Data = {
  topicSlug: 'englang-developing-arguments',
  sections: [
    {
      id: 'englangd2-intro',
      type: 'text' as const,
      content: `
# 🧠 Developing Arguments

**Part 2 of 7 — From Prompt to Developed Position: Invention and Definition**

---

| Section |
|---------|
| 📖 Reading a Q3 Prompt Before You Answer It |
| Invention: Questions That Generate an Argument |
| Testing Evidence Before You Commit to It |
| Developing Through Definition: Douglass on "Self-Made Men" |

> 🔑 **Key Concept:** The argument essay (Question 3) is the only essay on the exam that hands you **no sources**. Every example, every distinction, and every line of reasoning has to come from what you already know. Classical rhetoric called this stage **invention**: finding what can be said before deciding how to say it. This part teaches a repeatable invention routine and one of the most useful ways to develop a position, **definition**, using a lecture that Frederick Douglass delivered for more than thirty years.

## 📖 Reading a Q3 Prompt Before You Answer It

A Question 3 prompt usually quotes or summarizes a claim, often from a well-known writer, and then asks you to "write an essay that argues your position" on it, frequently "on the extent to which" the claim is valid or on the value of something it names. Here is a practice prompt in that format.

*Practice prompt written for this lesson, modeled on the format of AP argument prompts.*

> In a lecture he delivered many times between 1859 and 1893, the abolitionist and orator Frederick Douglass admitted that "properly speaking, there are in the world no such men as self-made men." Yet he went on to praise self-made people for most of the lecture.
>
> Write an essay that argues your position on the extent to which individuals deserve credit for their own success.

Before you brainstorm a single example, take the prompt apart.

| Step | Question to ask | For this prompt |
|---|---|---|
| **1. Find the claim** | What position is the prompt's source taking? | Nobody is entirely self-made, yet "self-made" still names something real |
| **2. Find the key term** | Which word could be read more than one way? | "Credit," and behind it "self-made": credit for effort, for talent, for choices, for everything? |
| **3. Find the scale** | Does the task ask yes/no, or how far? | "To what extent": a position of degree is expected, so the thesis should say **how much** credit and **for what** |
| **4. Find the stakes** | Why would anyone argue about this? | How we assign credit decides who we praise, who we blame, and what help we think people need |

Step 2 matters most. Many essays that stall at a Row B score of 2 or 3 never decide what their key term means, so their examples drift between different senses of it. An essay that defines "credit" early can **test** every example against that definition.
`
    },
    {
      id: 'englangd2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A Q3 prompt asks students to argue "the extent to which" a claim is valid. What does that wording most directly invite?',
            options: [
              'A thesis that names a degree and the conditions behind it',
              'A thesis that agrees with the claim and lists three reasons',
              'An essay that summarizes the claim before judging its author',
              'An essay that surveys both sides and leaves the verdict open'
            ],
            correctAnswer: 0,
            explanation: '"To what extent" asks how far a claim holds, so the strongest theses state a degree and say when or why it holds. Simple agreement is allowed but ignores the invitation, summary is not argument, and a survey with no verdict cannot earn Row A.'
          },
          {
            question: 'Why does the lesson treat finding the key term as the most important step in reading the prompt?',
            options: [
              'Readers award Row A only to theses that repeat it word for word.',
              'Its meaning decides which examples count as evidence at all.',
              'It tells the writer which historical period the essay must cover.',
              'It shows which side of the debate the prompt\'s author would take.'
            ],
            correctAnswer: 1,
            explanation: 'If "credit" is left undefined, an example about talent and an example about effort seem to support the same point when they do not. Row A does not require repeating the prompt, the key term does not set a period, and the source\'s side is found in the claim, not the term.'
          }
        ]
      }
    },
    {
      id: 'englangd2-invent',
      type: 'text' as const,
      content: `
## Invention: Questions That Generate an Argument

Douglass faced the same problem every time he gave his lecture: a large, familiar subject and no obvious way in. He solved it by turning the subject into **questions**, and he announced them to his audience.

> My first is, "Who are self-made men?" My second is, "What is the true theory of their success?" My third is, "The advantages which self-made men derive from the manners and institutions of their surroundings," and my fourth is, "The grounds of the criticism to which they are, as a class, especially exposed."
>
> — Frederick Douglass, "Self-Made Men," as delivered at the Carlisle Indian Industrial School, Carlisle, Pennsylvania, April 1893 (Frederick Douglass Papers, Library of Congress)

Each question opens a different kind of development. Together they make a ready-made invention routine you can run in the first five minutes of the essay.

| Question | Kind of development it produces | Applied to the practice prompt |
|---|---|---|
| **What is it?** | Definition and distinction | What would count as "deserving credit"? Credit for effort only, or for outcomes too? |
| **What causes it?** | Cause and effect | What actually produces success: effort, talent, luck, help from others? In what proportions? |
| **What surrounds it?** | Context and conditions | Which institutions or people make individual effort pay off, or block it? |
| **Who objects, and why?** | Complication | Who says success is mostly luck or privilege? What is true in that view? |
| **So what?** | Implication | If we over-credit or under-credit individuals, what follows for how we treat people? |

Douglass's third and fourth questions are the ones students skip. "What surrounds it?" keeps an argument from treating a person as if they lived in a vacuum, and "Who objects?" builds the counterargument into the plan instead of bolting it on at the end.

## Testing Evidence Before You Commit to It

The routine produces a pile of possible evidence. Most writers grab the first three examples that seem to agree with them. Stronger writers ask a sharper question of each one: **does this example test my claim, or does it only illustrate it?** An illustration shows the claim in action. A test is an example where the claim could have failed, which is why it persuades.

| Candidate evidence | Relevant to "credit"? | Specific and accurate? | Tests or only illustrates? | Verdict |
|---|---|---|---|---|
| Douglass learned to read as an enslaved child; in his 1845 *Narrative* he says Sophia Auld began teaching him "the A, B, C" before her husband forbade it, and that he then "converted into teachers" the white boys he met in the street | Yes: the most famous self-made American had teachers | Yes, from his own account | **Tests**: the strongest case for self-making still involves help | Keep |
| In *The Great Gatsby* (1925), the narrator says Gatsby "sprang from his Platonic conception of himself," yet the yachtsman Dan Cody gives him his first job and clothes, and Meyer Wolfshiem later boasts, "I made him." | Yes | Yes, from the novel | **Tests**: the novel itself questions the self-made story | Keep |
| A cousin who worked nights to pay for community college | Yes | Specific if told with real details | **Illustrates** effort; useful if the essay explains what the college provided | Keep as support |
| "Studies show most success is just luck." | Yes | **No**: no study is named, and an invented statistic damages credibility | Neither | Cut |
| "Many billionaires started with nothing." | Partly | **No**: too general to explain | Illustrates at best | Cut |

Two lines of reasoning now appear in the evidence itself. First, **effort is indispensable**: no teacher could make Douglass read without his persistence. Second, **effort is never alone**: the boys in the street, Cody and Wolfshiem, the community college all supplied something. A thesis that holds both lines is already more developed than one that picks a side:

> Individuals deserve credit for the effort only they can supply, but the myth of the self-made person hides the teachers, patrons, and institutions that turn effort into success, and an honest account of success has to name them.

*Thesis written for this lesson.*
`
    },
    {
      id: 'englangd2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Test the Evidence** 🔍

For each candidate example a student brainstormed for the practice prompt, choose the most accurate verdict.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"A famous athlete once said that hard work beats talent." The student cannot remember who said it.',
            options: ['Keep: it tests the claim', 'Keep: it illustrates the claim', 'Cut: it is too vague to explain', 'Cut: it is off the prompt']
          },
          {
            label: 'A detailed account of a neighbor who rebuilt a failing bakery, including the bank loan that kept it open for its first year.',
            options: ['Keep: it tests the claim', 'Keep: it illustrates the claim', 'Cut: it is too vague to explain', 'Cut: it is off the prompt']
          },
          {
            label: 'A paragraph on why talent shows up early in childhood, with no mention of effort, luck, or credit.',
            options: ['Keep: it tests the claim', 'Keep: it illustrates the claim', 'Cut: it is too vague to explain', 'Cut: it is off the prompt']
          }
        ],
        correctAnswers: ['Cut: it is too vague to explain', 'Keep: it tests the claim', 'Cut: it is off the prompt'],
        hint1: 'Could you explain this example in specific terms without inventing details?',
        hint2: 'Does the loan create a moment where the self-made story could fail?',
        hint3: 'Which key term of the prompt does the paragraph actually address?',
        explanation: 'An unattributed slogan cannot be developed with specific details. The bakery example tests the claim because the loan shows effort and outside help working together. A paragraph on when talent appears never touches the prompt\'s question about credit.'
      }
    },
    {
      id: 'englangd2-define',
      type: 'text' as const,
      content: `
## Developing Through Definition: Douglass on "Self-Made Men"

### The Situation

| Component | Details |
|---|---|
| **Speaker** | Frederick Douglass, who had escaped slavery in 1838 and become one of the most famous orators in the United States |
| **Text** | "Self-Made Men," a lecture he first delivered in 1859 and revised for more than three decades |
| **This version** | Delivered in April 1893 to the students of the Carlisle Indian Industrial School in Pennsylvania, a federal boarding school for Native American students, and printed by the school's press that year |
| **Problem he faced** | His key term was popular, but he did not believe it was literally true |

### Move 1: Admit the Problem With the Term

> That there is, in more respects than one, something like a solecism in this title, I freely admit. Properly speaking, there are in the world no such men as self-made men. That term implies an individual independence of the past and present which can never exist.

A **solecism** is a mistake in grammar or logic. Douglass opens by conceding that his own title is a kind of error. This is a risk, and it pays off: no listener can now accuse him of naïve individualism, because he has said it first. He then develops the concession with an image:

> I believe in individuality, but individuals are, to the mass, like waves to the ocean.

> We differ as the waves, but are one as the sea.

### Move 2: Keep the Term, for a Stated Purpose

> Nevertheless, the title of my lecture is eminently descriptive of a class and is, moreover, a fit and convenient one for my purpose, in illustrating the idea which I have in view.

The word "Nevertheless" turns the concession into a **stipulation**: the term is imperfect, but it names a real class of people, so he will use it in a defined sense.

### Move 3: Define by What the Class Lacks

> They are the men who owe little or nothing to birth, relationship, friendly surroundings; to wealth inherited or to early approved means of education

This is a **negative definition**: it marks the class by the advantages its members did **not** have. Notice the qualifier "little or nothing." Douglass has already said nobody owes nothing to others, so he defines self-made people by **degree**, which is exactly what a "to what extent" prompt asks for.

### Move 4: Fix the Definition in an Image

> In fact they are the men who are not brought up but who are obliged to come up

> If they have travelled far, they have made the road on which they travelled. If they have ascended high, they have built their own ladder.

The paired verbs ("brought up" against "come up") compress the definition into a phrase the audience can remember. Then the definition widens to include the audience in front of him:

> Such men as these, whether found in one position or another, whether in the college or in the factory; whether professors or plowmen; whether Caucasian or Indian; whether Anglo-Saxon or Anglo-African, are self-made men

Speaking at a school for Native American students, Douglass places them explicitly inside the class he is praising. A definition can do audience work as well as logical work.

### Using Definition in Your Own Essay

| Definition move | Sentence frame | Where it goes |
|---|---|---|
| **Concede the term's limit** | "Strictly speaking, no one is ___; but the word still names something real: ___." | Introduction or first body paragraph |
| **Stipulate a sense** | "By ___ I mean ___, not ___." | Right after the thesis |
| **Define negatively** | "___ is marked less by what it has than by what it lacks: ___." | Body paragraph that sets the standard |
| **Define by degree** | "The question is not whether ___, but how much." | Thesis or turn to counterargument |

> 🔑 **AP Connection:** Definition is development, not decoration. A definition earns its place only if the essay **uses** it: every later example should be measured against it. Opening with a dictionary entry ("Webster's defines success as...") is not this move, because it defines a word without deciding anything about the argument.
`
    },
    {
      id: 'englangd2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Douglass\'s admission that his title contains "something like a solecism" chiefly serves to',
            options: [
              'apologize to listeners so that they will forgive an unusual topic',
              'concede the term\'s flaw so that he can use it in a defined sense',
              'argue that individual effort plays no real part in anyone\'s success',
              'suggest that the lecture\'s real subject is grammar and logic'
            ],
            correctAnswer: 1,
            explanation: 'He grants that nobody is literally self-made, then keeps the term because it is "descriptive of a class," which lets him define it on his own terms. He is not apologizing for the topic, he goes on to make work the main explanation of success, and grammar is not his subject.'
          },
          {
            question: 'In the definition "the men who owe little or nothing to birth, relationship, friendly surroundings," the phrase "little or nothing" is important because it',
            options: [
              'allows Douglass to include people who had some help',
              'shows that Douglass doubts self-made people exist anywhere',
              'lists the main advantages that most successful people enjoy',
              'separates people who were born rich from those born poor'
            ],
            correctAnswer: 0,
            explanation: 'Having just said no one is wholly independent, Douglass defines the class by degree, so a person who received some help can still belong. The phrase does not deny the class exists, the list of advantages comes after it, and it is not a line between rich and poor births.'
          },
          {
            question: 'A student writing on the practice prompt wants to develop the essay through definition. Which sentence best does so?',
            options: [
              'Success is defined by the dictionary as achieving a goal one sets.',
              'Everyone defines success in their own way, so no answer is wrong.',
              'By credit I mean credit for effort, not for every outcome.',
              'Self-made people are admirable, and we should honor them.'
            ],
            correctAnswer: 2,
            explanation: 'This sentence stipulates a sense of the key term that the essay can test examples against, which is what developing through definition means. The dictionary entry decides nothing, the relativist claim abandons the argument, and the last sentence praises without defining.'
          }
        ]
      }
    }
  ]
};
