export const englangClaimsEvidencePart5Data = {
  topicSlug: 'englang-claims-evidence',
  sections: [
    {
      id: 'englangc5-intro',
      type: 'text' as const,
      content: `
# 📋 Claims and Evidence

**Part 5 of 7 — Evaluating Evidence: Purpose, Sufficiency and Credibility**

---

| Section |
|---------|
| 📖 What Evidence Does: Six Purposes |
| Is It Enough? Matching Evidence to the Claim |
| Credible Sources and Common Misconceptions |

> 🔑 **Key Concept:** Evidence is never strong or weak on its own. It is strong **for a particular claim**: when it serves a clear purpose, when its quantity and quality fit the size of the claim, and when it comes from a source readers can trust. The College Board's phrase is that evidence is **sufficient** when its quantity and quality provide apt support for the line of reasoning.
`
    },
    {
      id: 'englangc5-purposes',
      type: 'text' as const,
      content: `
## 📖 What Evidence Does: Six Purposes

The CED says writers use evidence strategically to **illustrate, clarify, exemplify, associate, amplify, or qualify** a point. These verbs are useful in two places: in your answers to "the writer refers to X in order to..." questions, and in your own commentary.

| Purpose | What the evidence does | Example from this lesson |
|---|---|---|
| **Illustrate** | Makes an abstract claim concrete and visible | Thoreau's night in jail shows the state confining a body but not a conscience |
| **Clarify** | Makes the claim's meaning more precise | Wollstonecraft's "gilt cage" pins down how an education in beauty limits the mind |
| **Exemplify** | Offers one case as a representative instance of a category | The Greensboro sit-in as an instance of open, nonviolent lawbreaking |
| **Associate** | Links the claim to an idea or value the audience already holds | Wollstonecraft ties women's education to "the progress of knowledge and virtue," which her readers already prize |
| **Amplify** | Enlarges or intensifies the claim | Woolf: women have been poor "not for two hundred years merely, but from the beginning of time" |
| **Qualify** | Limits the claim | Lincoln's "personal wish that all men every where could be free" limits how his official purpose should be read |

### Illustrate vs. Exemplify

These two are easy to confuse. **Exemplify** treats the evidence as one member of a larger group ("sit-ins are one example of open civil disobedience"). **Illustrate** uses the evidence to make an idea vivid ("picture the students in their church clothes, waiting to be served"). The same anecdote can do either, depending on how the writer frames it.

> 🔑 **AP Connection:** On reading questions, the right answer usually names the purpose **in relation to the claim** ("illustrates the writer's point that..."), while wrong answers often describe the evidence accurately but assign it the wrong job, such as "refutes" when it supports or "qualifies" when it amplifies.
`
    },
    {
      id: 'englangc5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Woolf writes that women have been poor "not for two hundred years merely, but from the beginning of time." This phrase chiefly serves to',
            options: [
              'qualify the claim by limiting it to recent history',
              'amplify the claim by stretching it across all history',
              'clarify the claim by defining what counts as poverty',
              'refute critics who say women once had wealth'
            ],
            correctAnswer: 1,
            explanation: 'The phrase rejects "two hundred years" as too small and extends the claim to "the beginning of time," which enlarges it. It does the opposite of limiting, it offers no definition, and it does not answer any named critic.'
          },
          {
            question: 'A writer arguing that public libraries strengthen democracy notes that the main Carnegie Library of Pittsburgh bears the words "Free to the People" above its entrance. This detail most likely serves to',
            options: [
              'qualify the claim by admitting that libraries depended on wealthy donors',
              'associate libraries with the ideal of open access for every citizen',
              'exemplify the typical size and cost of a library built in the late 1800s',
              'refute the view that libraries were founded mainly to serve the wealthy'
            ],
            correctAnswer: 1,
            explanation: 'The inscription links libraries to open access for everyone, a value the democratic claim depends on. The detail says nothing about donors\' influence, the size or cost of buildings, or any opposing view about whom libraries served.'
          },
          {
            question: 'Which description best distinguishes evidence that exemplifies from evidence that illustrates?',
            options: [
              'Exemplifying presents a case as one instance of a larger category',
              'Exemplifying relies on numbers, while illustrating relies on stories',
              'Exemplifying comes from experts, while illustrating comes from the writer',
              'Exemplifying limits a claim, while illustrating extends it to new cases'
            ],
            correctAnswer: 0,
            explanation: 'To exemplify is to offer a case as a representative member of a group, whereas to illustrate is to make an idea vivid. Neither purpose depends on whether the evidence is numerical, who supplies it, or whether it limits or extends the claim.'
          }
        ]
      }
    },
    {
      id: 'englangc5-sufficiency',
      type: 'text' as const,
      content: `
## Is It Enough? Matching Evidence to the Claim

### Scope Match

The most common sufficiency problem is a **mismatch in scope**: the claim covers more ground than the evidence does.

| Claim | Evidence | Problem | Fix |
|---|---|---|---|
| "Teenagers today read less than any generation before them." | One survey of a single high school | Claim covers a nation and a century; evidence covers one building | Narrow the claim or add national data across decades |
| "Remote work increases productivity." | A study of software engineers at one company | Claim covers all jobs; evidence covers one field | Limit the claim to similar work |
| "Nonviolent protest always succeeds." | The Greensboro sit-ins | "Always" needs every case; one success cannot rule out failures | Replace "always" with a defensible degree |

The fix is not always more evidence. Often it is a **qualified claim** (Part 4) that fits the evidence you have.

### Case Study: Twain's "Corn-pone Opinions" (written 1901)

Mark Twain's essay, published after his death, begins with a maxim he says he heard as a boy from an enslaved man named Jerry, who preached to him from a woodpile: "You tell me whar a man gits his corn pone, en I'll tell you what his 'pinions is." The maxim claims that people's opinions follow their livelihood.

Twain's own claim is broader:

> "Men think they think upon great political questions, and they do; but they think with their party, not independently; they read its literature, but not that of the other side; they arrive at convictions, but they are drawn from a partial view of the matter in hand and are of no particular value."

| Evaluate | Twain's essay |
|---|---|
| **Kind of evidence** | A remembered saying, examples of fashions such as the hoopskirt that spread and vanish without anyone reasoning about them (summarized), and observation of party loyalty |
| **Scope of claim** | "Men," with no limiting modifier: a claim about people in general |
| **Sufficiency** | The examples illustrate the pattern vividly, but they cannot show that it holds for most people or most questions |
| **What a reader could object** | That some people do change their views when evidence changes, which the essay's examples do not address |
| **Why it still persuades** | Readers test the claim against their own experience; the essay's wit asks them to recognize themselves |

> ⚠️ Saying "the evidence is insufficient" is not a complete evaluation. Name **what** the claim covers, **what** the evidence covers, and the gap between them.
`
    },
    {
      id: 'englangc5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Diagnose the Problem** 🔍

Each claim is paired with evidence. Choose the main problem with the evidence.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Claim: "Most American teenagers oppose a later school start time." Evidence: a poll of 40 members of one school\'s debate team. Problem: ___',
            options: ['the sample is too narrow', 'the source is outdated', 'it supports a different claim', 'it is a hypothetical case']
          },
          {
            label: 'Claim: "Smartphone use now harms teenagers\' sleep." Evidence: a 1995 study of teenagers who watched late-night television. Problem: ___',
            options: ['the sample is too narrow', 'the source is outdated', 'it supports a different claim', 'it is a hypothetical case']
          },
          {
            label: 'Claim: "School uniforms reduce bullying." Evidence: uniforms cost families less than buying new clothes each year. Problem: ___',
            options: ['the sample is too narrow', 'the source is outdated', 'it supports a different claim', 'it is a hypothetical case']
          }
        ],
        correctAnswers: ['the sample is too narrow', 'the source is outdated', 'it supports a different claim'],
        hint1: 'Does one team speak for "most American teenagers"?',
        hint2: 'Was there a smartphone in 1995?',
        hint3: 'Is cost the same issue as bullying?',
        explanation: 'Forty debaters at one school cannot represent most teenagers in the country. A study from before smartphones existed cannot show what smartphones do now. Lower cost may be true, but it supports a claim about affordability, not bullying, so it is irrelevant to this claim.'
      }
    },
    {
      id: 'englangc5-credibility',
      type: 'text' as const,
      content: `
## Credible Sources and Common Misconceptions

### Questions to Ask of Any Source

These questions matter most on the synthesis essay, where every source comes with a short description: author, title, date and publication.

| Question | Why it matters | Example |
|---|---|---|
| **Who** wrote it, and with what expertise? | Authority to make this particular claim | A sleep researcher on adolescent sleep, not on school budgets |
| **When** was it written? | Whether conditions have changed | A 2004 article on online learning predates smartphones |
| **What** is the claim based on? | Data, observation, opinion or advocacy | A survey vs. a columnist's impressions |
| **Why** was it written? | Possible interest in the outcome | A report from a company that sells the product it praises |

An interested source is not useless. A company report can still supply accurate data, and an advocacy group can still state a position fairly. Your commentary should **name the limitation** and explain how much weight the source can bear: "Although Source D comes from an industry group, its enrollment figures match the government data in Source A."

### Misconceptions That Cost Points

| Misconception | Correction |
|---|---|
| "More quotations make a stronger paragraph." | Each quotation needs commentary; three quotations with no explanation earn less than one quotation explained well. |
| "Statistics always beat examples." | Numbers show how widespread something is; examples show how it works. Strong arguments often need both. |
| "Summarizing the evidence is commentary." | Commentary explains **how** the evidence proves the claim; a summary only repeats what the evidence says. |
| "Personal experience does not count as evidence." | It counts, especially on the argument essay, when it is specific and the writer explains what it shows. It is weaker when asked to prove a broad pattern alone. |
| "A source I disagree with is useless." | Engaging an opposing source, and explaining its limits, can strengthen a line of reasoning. |
`
    },
    {
      id: 'englangc5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes: "(1) Community gardens improve neighborhood health. (2) My aunt joined one last spring. (3) She says she enjoys being outdoors." The student wants to replace sentence 3 with evidence that better supports sentence 1. Which choice best accomplishes this goal?',
            options: [
              'Community gardens have become more popular in many cities over the past ten years.',
              'Gardeners in a city survey ate more vegetables than residents who did not garden.',
              'My aunt says that her garden is the most beautiful one on her entire street now.',
              'Some people dislike community gardens because the plots can look messy in winter.'
            ],
            correctAnswer: 1,
            explanation: 'Survey results comparing gardeners\' diets with their neighbors\' bear directly on health and reach beyond one person. Rising popularity does not show health effects, the aunt\'s comment about beauty is still about one person and not about health, and the sentence about messy plots raises an objection the student has not answered.'
          },
          {
            question: 'In a synthesis essay on electric cars, a student cites a report on battery costs published by a battery manufacturer. Which commentary handles the source most effectively?',
            options: [
              'Because the report comes from a manufacturer, it is biased and should not be trusted.',
              'The report is from a company that understands batteries, so its numbers must be correct.',
              'The maker has a stake in low cost figures, yet its numbers agree with the federal data.',
              'The report shows that batteries are getting cheaper, which is good news for buyers today.'
            ],
            correctAnswer: 2,
            explanation: 'The effective commentary names the source\'s interest and then checks its figures against an independent source, so the reader knows how much weight the data can bear. Rejecting the report outright and trusting it outright both skip that evaluation, and the last choice summarizes the report without judging it.'
          }
        ]
      }
    }
  ]
};
