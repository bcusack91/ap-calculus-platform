export const psychGroupPart6Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group-behavior-prejudice-p6-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Group Behavior and Prejudice

**Part 6 of 7 — Prosocial Behavior and the Bystander Effect**

> 🔑 **Key Concept:** **Prosocial behavior** is any action meant to benefit others. Some helping looks purely selfless (**altruism**), but some researchers argue that people often help because of **social debt**, obligations explained by two social norms. Whether anyone helps in an emergency depends heavily on the **situation**, especially on how many other people are present.

### Why people help

| Explanation | Core idea | Example |
|---|---|---|
| **Altruism** | Selfless concern for another's welfare, with no expectation of return | A stranger dives into a river to save a child and leaves before anyone learns his name |
| **Social debt** | Helping comes from obligations people incur in social life, so it balances an exchange | You help a coworker move because she covered your shift last month |
| **Social reciprocity norm** | We should return help to those who have helped us | A neighbor who received meals after surgery later brings meals to that family |
| **Social responsibility norm** | We should help those who depend on us or need help, even with no expected return | Adults stop to help a lost child find a parent |

Notice the difference between the two norms:

- **Reciprocity** looks **back** at what someone did for you. It is about returning a favor.
- **Social responsibility** looks at who **needs** help. It applies even to strangers who can never repay you.

### Antisocial behavior in groups

The same group processes that can encourage helping can also release harmful behavior. You have already met three: **deindividuation** lowers restraint in anonymous crowds (Part 2), **social traps** reward selfish choices that harm the group (Part 5), and **discrimination** turns prejudice into action (Part 3). Helping and harming are both shaped by the situation.
      `
    },
    {
      id: 'group-behavior-prejudice-p6-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Why Did They Help?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Jordan tutors a younger student for free every week because the student\'s family cannot afford tutoring and is counting on him. Which norm best explains Jordan\'s behavior?',
            options: [
              'The norm of social reciprocity',
              'The social responsibility norm',
              'The false consensus effect',
              'The just-world phenomenon'
            ],
            correctAnswer: 1,
            explanation: 'The social responsibility norm says we should help those who depend on us or need help, even without any return. Reciprocity would require that the family had helped Jordan first.'
          },
          {
            question: 'Which situation best fits the social reciprocity norm?',
            options: [
              'A shopper donates to a charity she has never heard of before',
              'A student shares notes with a classmate who shared his last week',
              'A driver stops to help a stranded motorist on an empty highway',
              'A volunteer reads to patients at a hospital every Saturday morning'
            ],
            correctAnswer: 1,
            explanation: 'Reciprocity means returning help to someone who helped you, and the student is repaying a classmate who shared notes with her. The other people help strangers or people who need help, which fits altruism or the social responsibility norm.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p6-s3-bystander',
      type: 'text' as const,
      content: `
## 👥 The Bystander Effect

The **bystander effect** is the finding that a person is **less likely to help** in an emergency when other people are present. The CED stresses that **situational and attentional variables** predict whether someone helps.

### The classic experiments

**The seizure study (Darley & Latané, 1968).** College students talked over an intercom, believing they were in a discussion with others in separate rooms. One "participant" (a recording) appeared to have a seizure. The more people a student believed could hear the emergency, the less likely that student was to seek help before the seizure ended:

| Number of people the student believed were listening | Percent who sought help before the seizure ended |
|---|---|
| Only the student and the victim | 85% |
| One other bystander | 62% |
| Four other bystanders | 31% |

**The smoke-filled room (Latané & Darley, 1968).** Students filling out a questionnaire saw smoke pour into the room through a vent. About 75% of students who were alone reported it. When the student sat with two confederates who calmly ignored the smoke, only about 10% reported it.

**The Good Samaritan study (Darley & Batson, 1973).** Seminary students walked to another building to give a talk, and on the way they passed a man slumped in a doorway. Students told they were **late** were far less likely to stop than students who had time to spare, even when their talk was about the parable of the Good Samaritan.

### Five decisions a bystander must make

Latané and Darley described helping as a chain of decisions. A "no" at any step means no help.

| Step | Decision | What can block it |
|---|---|---|
| 1 | **Notice** the event | Hurry, distraction, a phone screen (attentional variables) |
| 2 | **Interpret** it as an emergency | Ambiguity; others who stay calm make it seem like nothing is wrong |
| 3 | **Assume responsibility** | **Diffusion of responsibility**: "someone else will do it" |
| 4 | **Decide how** to help | Not knowing first aid or whom to call |
| 5 | **Act** | Fear of embarrassment, danger, or cost |

### A nuance worth knowing

Each **individual** is less likely to help as the crowd grows, yet a crowd contains more possible helpers. In an analysis of real public-space camera footage from three countries published in 2020, at least one bystander intervened in about nine of every ten conflicts. Both findings can be true at once: the chance that any **particular** person helps falls, while the chance that **someone** helps can stay high.

> 🔑 **AP Connection:** To increase helping, break diffusion of responsibility. Point to one person ("You in the green jacket, call 911"), make the emergency unambiguous, and teach people what to do.
      `
    },
    {
      id: 'group-behavior-prejudice-p6-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Which Step Failed?** 🔍

Use the five-step bystander model to name the step that blocked helping.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A commuter scrolling on her phone walks past a man who has collapsed and never sees him. Helping failed at the step of _____.',
            options: ['noticing the event', 'assuming responsibility', 'deciding how to help', 'interpreting the event']
          },
          {
            label: 'Dozens of residents hear shouting from an apartment, and each assumes a neighbor has already called the police. Helping failed at the step of _____.',
            options: ['noticing the event', 'interpreting the event', 'assuming responsibility', 'deciding how to help']
          },
          {
            label: 'Diners see a man coughing at another table but conclude he is just clearing his throat, since no one else reacts. Helping failed at the step of _____.',
            options: ['assuming responsibility', 'interpreting the event', 'deciding how to help', 'noticing the event']
          }
        ],
        correctAnswers: ['noticing the event', 'assuming responsibility', 'interpreting the event'],
        hint1: 'Did the commuter ever see the emergency?',
        hint2: 'Each resident thought someone else would handle it.',
        hint3: 'The diners saw the man but decided nothing was wrong.',
        explanation: 'The distracted commuter never noticed the event. The residents noticed and understood the emergency, but diffusion of responsibility blocked them from taking it on. The diners noticed the coughing but, taking cues from calm onlookers, did not interpret it as an emergency.'
      }
    },
    {
      id: 'group-behavior-prejudice-p6-s5-aaq',
      type: 'text' as const,
      content: `
## 📝 AAQ Walk-Through: A Practice Helping Study

The **Article Analysis Question (AAQ)** gives you a summary of one study and asks six parts worth 7 points. Read this practice summary (written for practice, not a real publication), then study how each task is answered.

> **Practice study summary.**
> **Introduction:** Researchers tested the claim that people are less likely to help when more potential helpers are present.
> **Participants:** 120 undergraduate students, ages 18 to 22, at one university in the United States, recruited from introductory psychology courses for course credit.
> **Method:** Participants joined what they believed was a live online study group. They were randomly assigned to believe that 1, 3, or 6 other students were in the chat; in fact, the other students were simulated by a computer program. Partway through, a simulated student posted, "I can't open the assignment file. Can anyone help?" Helping was recorded as sending a reply that offered help within 60 seconds of the request.
> **Ethics:** All participants gave informed consent before the session. Because the study used deception, all participants were debriefed at the end and told the true purpose. Participants could withdraw at any time without losing credit.
> **Results:** 70% of participants in the 1-other condition helped within 60 seconds, compared with 48% in the 3-others condition and 30% in the 6-others condition. The differences were statistically significant (p < .05).

### The six tasks, answered

| Task | Model answer |
|---|---|
| **A. Identify the research method** | An **experiment**: participants were randomly assigned to group-size conditions that the researchers manipulated. |
| **B. State the operational definition** of a variable | Helping was operationally defined as **sending a reply offering help within 60 seconds** of the request. |
| **C. Describe what a statistic shows** | The percentage who helped **fell from 70% to 30%** as the number of other students rose from 1 to 6. |
| **D. Identify an ethical guideline and how it was applied** | **Debriefing:** at the end, participants were told the other students were simulated and learned the true purpose. |
| **E. Explain generalizability** using the study | Limited: all participants were **18- to 22-year-old students at one U.S. university**, so the results may not apply to older adults, other cultures, or face-to-face emergencies. |
| **F. Explain how the findings support or refute the claim** | **Supports** the claim: helping declined steadily as the number of potential helpers increased, consistent with diffusion of responsibility. |

> 🔑 **AP Connection:** Every answer above points to a **specific detail** from the summary. "The sample may not be representative" earns nothing on its own; naming who was in the sample and who was left out earns the point.
      `
    },
    {
      id: 'group-behavior-prejudice-p6-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**AAQ Practice — Using the Practice Helping Study** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In the practice helping study, what is the independent variable?',
            options: [
              'Whether participants sent a reply offering help',
              'The number of other students they believed were in the chat',
              'The age range of the students who took part',
              'Whether participants were debriefed after the session'
            ],
            correctAnswer: 1,
            explanation: 'The researchers manipulated how many other students participants believed were in the chat, so that is the independent variable. Sending a helpful reply is the dependent variable, and age and debriefing were not manipulated.'
          },
          {
            question: 'Which response would best earn the point for explaining the generalizability of the practice helping study?',
            options: [
              'The results generalize well because 120 people is a large enough sample for most populations',
              'Participants were all students at one U.S. university, so the results may not fit other adults',
              'The results do not generalize because the researchers deceived participants about the chat',
              'The results generalize because participants were randomly assigned to the three conditions'
            ],
            correctAnswer: 1,
            explanation: 'Generalizability depends on who was sampled, and naming the narrow sample of students at one U.S. university explains why the results may not extend to other people. Random assignment supports causal conclusions, not generalizability, and deception is an ethical issue.'
          },
          {
            question: 'A student writes, "This study refutes the claim, because 30% of people still helped with six others present." What is the main problem with this answer?',
            options: [
              'The claim is about a decline in helping, and helping did decline',
              'The student should have reported the p-value, not the percentages',
              'The student should have called the study correlational, not experimental',
              'An online study cannot test a claim about helping in person'
            ],
            correctAnswer: 0,
            explanation: 'The claim is that people are less likely to help when more potential helpers are present, and helping dropped from 70% to 30%, which supports the claim. Some people still helping does not contradict a claim about a decrease.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p6-s7-connection',
      type: 'text' as const,
      content: `
### 🎯 AP Connection: Helping Is Situational

| If a scenario shows… | Think… |
|---|---|
| Help returned to someone who helped first | **Social reciprocity norm** |
| Help given to someone dependent or in need, with no return expected | **Social responsibility norm** |
| Helping that seems to expect nothing at all | **Altruism** |
| Fewer people helping when more people are present | **Bystander effect** and **diffusion of responsibility** |
| Someone too rushed or distracted to notice | An **attentional** variable |

**Next up — Part 7:** Pull the whole topic together and practice the Evidence-Based Question (EBQ), where you build a claim and support it with evidence from separate sources.
      `
    }
  ]
}
