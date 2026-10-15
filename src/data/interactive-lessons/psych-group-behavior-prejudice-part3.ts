export const psychGroupPart3Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group-behavior-prejudice-p3-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Group Behavior and Prejudice

**Part 3 of 7 — Stereotypes, Prejudice, and Discrimination**

> 🔑 **Key Concept:** A **stereotype** is a belief, **prejudice** is an attitude, and **discrimination** is a behavior. They often travel together, but they are different things, and the exam expects you to keep them apart.

### Thinking, feeling, acting

| Term | Component | Definition | Example |
|---|---|---|---|
| **Stereotype** | Thinking (cognitive) | A **generalized concept about a group**, applied to its members | "Older workers can't learn new technology." |
| **Prejudice** | Feeling (affective) | An unjustified, usually **negative attitude** toward a group and its members | Feeling irritated and dismissive whenever an older coworker joins a tech project |
| **Discrimination** | Acting (behavioral) | Unjustified **negative behavior** toward a group or its members | Never assigning older coworkers to tech projects, whatever their skills |

### What the CED says about stereotypes

The CED makes three points about stereotypes, and each one can become an exam question.

1. **Stereotypes reduce cognitive load.** Sorting people into categories is a mental shortcut, much like the schemas and heuristics you studied in Unit 2. A shortcut saves effort when judging quickly, but it ignores the wide variation among individual members of any group.
2. **Stereotypes can be the cause and/or the result of biased perceptions and experiences.** A stereotype can steer what we notice (cause), and a few vivid or one-sided experiences can create a stereotype (result). The two directions feed each other in a loop.
3. **Stereotypes are frequently the basis of prejudiced attitudes and discriminatory behaviors.** A belief about a group makes negative feelings toward it seem justified, and those feelings can turn into unfair treatment.

### Can one occur without the others?

Yes, which is why the distinction matters.

| Combination | Example |
|---|---|
| **Prejudice without discrimination** | A landlord dislikes a group but rents to its members because fair-housing laws forbid refusing them |
| **Discrimination without conscious prejudice** | A hiring manager with no hostile feelings follows a rule to hire only applicants referred by current staff, which keeps out groups not already represented |
| **Stereotype without strong prejudice** | Someone believes a group is "good at math" but feels no hostility; this "positive" stereotype still judges individuals by group membership |
      `
    },
    {
      id: 'group-behavior-prejudice-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Belief, Attitude, or Behavior?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A store clerk follows customers of one ethnic group around the store more closely than other customers. Which concept does the clerk\'s action illustrate?',
            options: [
              'A stereotype',
              'Discrimination',
              'Prejudice',
              'An implicit attitude'
            ],
            correctAnswer: 1,
            explanation: 'Following certain customers more closely is unequal treatment, a behavior, so it is discrimination. A stereotype is a belief, prejudice is a feeling, and an implicit attitude is an evaluation that may or may not lead to behavior.'
          },
          {
            question: 'According to the CED, why do people rely on stereotypes even when they are inaccurate?',
            options: [
              'Stereotypes are learned only from direct personal experience',
              'Stereotypes reduce the mental effort needed to make quick judgments',
              'Stereotypes are formed only after careful review of group data',
              'Stereotypes cannot change once a person reaches adulthood'
            ],
            correctAnswer: 1,
            explanation: 'Stereotypes act as mental shortcuts that reduce cognitive load, which is why people use them even when they are wrong. They are often learned secondhand, rarely come from careful review of data, and can change.'
          },
          {
            question: 'Ana believes a certain group is lazy. She then notices every time a member of that group arrives late but overlooks the many who arrive on time. This pattern shows that a stereotype can:',
            options: [
              'be the cause of biased perception',
              'only result from personal experience',
              'reduce prejudice toward the group',
              'replace all of her other attitudes'
            ],
            correctAnswer: 0,
            explanation: 'Ana\'s existing belief steers what she notices, so the stereotype is causing a biased perception. Stereotypes can also result from experience, but here the belief comes first, and nothing suggests it reduces prejudice or replaces her other attitudes.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p3-s3-implicit',
      type: 'text' as const,
      content: `
## 🕵️ Implicit Attitudes

**Explicit attitudes** are evaluations people are aware of and can report: "I support equal pay." **Implicit attitudes** are evaluations people hold **but may be unaware of, or may not acknowledge**. A person can sincerely reject a stereotype on a survey and still show a faster, automatic association between a group and negative words.

### How researchers measure implicit attitudes

People will not report an attitude they cannot see in themselves, and some will not report one they are aware of because it is socially unacceptable. So researchers measure **behavior that is hard to control**, especially reaction time.

The best-known tool is the **Implicit Association Test (IAT)**, introduced by Anthony Greenwald and colleagues in 1998.

1. On a computer, the participant sorts words and faces into categories as fast as possible by pressing one of two keys.
2. In one block, a group (say, faces of young people) shares a key with pleasant words. In another block, the same group shares a key with unpleasant words.
3. If a person sorts much **faster** when the group is paired with pleasant words, the test infers a stronger **automatic association** between that group and "good."

### Strengths and limits

| Strength | Limit |
|---|---|
| Hard to fake, since responses happen in fractions of a second | A person's score can change noticeably from one testing session to the next |
| Detects associations people do not report on surveys | How well scores predict a single person's real-world behavior is debated |
| Useful for comparing **groups** of people in research | Not designed to diagnose an individual as "prejudiced" |

> 🔑 **AP Connection:** The IAT measures **associations**, not hostile feelings or actions. If an answer choice claims the IAT "proves" a person will discriminate, it overstates what the method shows.
      `
    },
    {
      id: 'group-behavior-prejudice-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
**Recall Practice — Key Terms** ✍️

Type a single term for each description.
      `,
      exercise: {
        questions: [
          {
            question: 'An evaluation a person holds but may be unaware of or may not acknowledge is called an ______ attitude.',
            answer: 'implicit',
            acceptableAnswers: ['implicit attitude'],
            explanation: 'Implicit attitudes operate automatically and may be unknown to the person, unlike explicit attitudes that can be reported.'
          },
          {
            question: 'The behavioral component of bias, meaning unjustified negative action toward a group or its members, is called ______.',
            answer: 'discrimination',
            acceptableAnswers: ['discriminating'],
            explanation: 'Discrimination is the action; prejudice is the feeling and a stereotype is the belief.'
          },
          {
            question: 'The reaction-time test that measures automatic associations between groups and evaluations is usually abbreviated as the ______.',
            answer: 'IAT',
            acceptableAnswers: ['implicit association test', 'the IAT'],
            explanation: 'The Implicit Association Test (IAT) infers automatic associations from how quickly people sort paired categories.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p3-s5-evidence',
      type: 'text' as const,
      content: `
## 🔬 Measuring Discrimination: Two Classic Studies

### Study 1: The résumé field experiment

In a well-known field experiment published in 2004, economists **Marianne Bertrand and Sendhil Mullainathan** answered real job ads in Boston and Chicago with thousands of fictitious résumés. Each résumé was randomly given a name common among white Americans (such as Emily or Greg) or a name common among Black Americans (such as Lakisha or Jamal). Résumés with white-sounding names received about **50 percent more callbacks** for interviews than otherwise comparable résumés with Black-sounding names.

Read it like an AP study:

| Element | In this study |
|---|---|
| **Method** | Experiment (a field experiment, conducted in real hiring rather than a lab) |
| **Independent variable** | The racial association of the name on the résumé |
| **Dependent variable** | Whether the employer called back for an interview |
| **Why random assignment matters** | Names were assigned at random, so résumé quality could not explain the gap |
| **What it shows** | Discrimination in behavior, whether or not employers held conscious prejudice |

### Study 2: The self-fulfilling interview

In 1974, **Carl Word, Mark Zanna, and Joel Cooper** ran a two-part study at Princeton.

1. **Part one:** white participants interviewed white and Black job applicants (who were actually trained confederates). With Black applicants, interviewers sat farther away, made more speech errors, and ended the interview sooner.
2. **Part two:** trained interviewers then used either that "cool" style or a warmer style with white applicants. Applicants interviewed in the cool style **performed worse**, as judged by independent raters, and sat farther from the interviewer.

The study links prejudice to the **self-fulfilling prophecy** from Topic 4.1: an expectation changes how we treat someone, and that treatment produces the very behavior we expected.

> 🔑 **AP Connection:** For any study like these, practice naming the method, the operational definition of the dependent variable (for example, "a phone call or email inviting the applicant to interview"), and why random assignment allows a cause-and-effect conclusion.
      `
    },
    {
      id: 'group-behavior-prejudice-p3-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Interpreting Evidence on Bias** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In the résumé field experiment, why can researchers draw a cause-and-effect conclusion about callbacks?',
            options: [
              'Employers were interviewed afterward and admitted to holding biased beliefs',
              'Names were randomly assigned to résumés that were otherwise comparable',
              'The study used a very large sample drawn from employers in two cities',
              'The callback rates were reported for each industry and job type separately'
            ],
            correctAnswer: 1,
            explanation: 'Random assignment of names to comparable résumés means résumé quality could not differ systematically between conditions, so the name is the only explanation left. A large sample improves precision but does not establish cause by itself.'
          },
          {
            question: 'A participant reports on a survey that she has no preference between two groups, but her IAT results show a strong automatic preference for one group. What is the best interpretation?',
            options: [
              'She must have been lying when she filled out the survey',
              'Her explicit and implicit attitudes may differ from each other',
              'The IAT shows that she will discriminate against the other group',
              'Her score means she holds strong conscious hostility toward them'
            ],
            correctAnswer: 1,
            explanation: 'Explicit attitudes are what people can report, while implicit attitudes may be unknown to the person, so the two can differ without anyone lying. The IAT measures automatic associations, not conscious hostility or certain future behavior.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p3-s7-connection',
      type: 'text' as const,
      content: `
### 🎯 AP Connection: Keep the Three Apart

| If the scenario describes… | Name it… |
|---|---|
| A belief about what a group is like | **Stereotype** |
| A negative feeling toward a group | **Prejudice** |
| Unfair treatment of a group's members | **Discrimination** |
| An automatic evaluation the person may not recognize | **Implicit attitude** |

**Next up — Part 4:** Why do people favor their own group, see other groups as all alike, and blame victims for their misfortunes? Part 4 names the biases behind prejudice and practices reading the data that measure them.
      `
    }
  ]
}
