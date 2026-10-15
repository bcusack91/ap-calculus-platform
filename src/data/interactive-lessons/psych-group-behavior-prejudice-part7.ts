export const psychGroupPart7Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group-behavior-prejudice-p7-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Group Behavior and Prejudice

**Part 7 of 7 — Synthesis and EBQ Practice**

> 🔑 **Key Concept:** The whole topic tells one story. Groups give people norms and identities (Part 1). Groups change effort, restraint, and decisions (Part 2). Group labels feed stereotypes and prejudice (Parts 3 and 4). Competition turns bias into conflict, and shared goals reduce it (Part 5). The same situational forces decide whether people help (Part 6).

### Concept map

| Idea | Core point | Key evidence | Links to |
|---|---|---|---|
| **Social norms and roles** | Shared expectations guide behavior | Norms differ across cultures and eras | Conformity (Social Influence & Conformity) |
| **Individualism / collectivism / multiculturalism** | Culture shapes the self and what counts as appropriate | Trait-based vs role-based self-descriptions | Social loafing is smaller in collectivist samples |
| **False consensus effect** | We overestimate how many people agree with us | Sandwich-board study (Ross and colleagues, 1977) | Contrast with out-group homogeneity |
| **Group effects** | Each has a switch condition | Triplett; shouting study; Halloween study | I/O psychology, bystander effect |
| **Stereotype → prejudice → discrimination** | Belief, attitude, behavior | Résumé field experiment; self-fulfilling interview | Self-fulfilling prophecy (Topic 4.1) |
| **Implicit attitudes** | Evaluations people may not recognize | Implicit Association Test | Explicit attitudes can differ |
| **In-group bias, out-group homogeneity, ethnocentrism, just-world** | Biases that drive negative evaluations | Minimal group studies; Lerner's victim studies | Data analysis: means, correlation |
| **Social traps** | Self-interest harms the group | Prisoner's dilemma; tragedy of the commons | Diffusion of responsibility |
| **Superordinate goals** | Shared goals unite rival groups | Robbers Cave; jigsaw classroom | Reducing in-group bias |
| **Prosocial behavior** | Altruism vs social debt; reciprocity and social responsibility norms | Seizure, smoke, and Good Samaritan studies | Five-step bystander model |

### The pattern behind the whole topic

Almost every finding in this topic shows the **power of the situation**. The same person loafs or works hard, helps or walks past, cooperates or competes, depending on identifiability, group size, competition, and shared goals. That is why the exam rewards answers that name **the feature of the situation** that produced the behavior.
      `
    },
    {
      id: 'group-behavior-prejudice-p7-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Integrated Check — Connecting the Parts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Diffusion of responsibility helps explain which two findings from this topic?',
            options: [
              'Group polarization and the false consensus effect',
              'Social loafing and the bystander effect',
              'Ethnocentrism and out-group homogeneity bias',
              'Social facilitation and the just-world phenomenon'
            ],
            correctAnswer: 1,
            explanation: 'When responsibility is shared, each person feels less accountable, so members exert less effort on pooled tasks and bystanders wait for someone else to help. The other pairs involve opinions, perceptions of groups, arousal, or beliefs about fairness.'
          },
          {
            question: 'The minimal group studies and the Robbers Cave experiment together suggest which conclusion?',
            options: [
              'Labels can start bias, and competing for scarce prizes deepens it',
              'Bias appears only after groups have a long history of real conflict',
              'Simple contact between rival groups is enough to remove their bias',
              'Bias between groups appears only among adults, not among children'
            ],
            correctAnswer: 0,
            explanation: 'Tajfel showed that a trivial label is enough to produce in-group favoritism, and Sherif showed that competition for prizes turned that favoritism into hostility. Robbers Cave also showed that simple contact failed, and both studies involved children.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p7-s3-ebq',
      type: 'text' as const,
      content: `
## 📝 EBQ Practice: Does Cooperation Reduce Prejudice?

The **Evidence-Based Question (EBQ)** gives you three short source summaries and asks three parts worth 7 points: **(A)** propose a defensible claim, then **(B)** and **(C)** each support it with specific evidence and explain how that evidence supports the claim using a psychological concept. Part C must use a **different source** and a **different concept** from Part B.

> **Prompt:** Using the sources, develop and justify an argument about whether cooperation between groups reduces prejudice.

The three summaries below are practice sources written for this lesson, not real publications.

> **Source 1 (practice field experiment).** Twenty fifth-grade classrooms were randomly assigned to either cooperative "jigsaw" lessons, in which each student taught one part of the material to a mixed group, or standard lessons for eight weeks. Students listed their friends at the start and end. Friendships across ethnic groups increased by an average of 2.1 nominations per student in jigsaw classrooms and 0.4 in standard classrooms.

> **Source 2 (practice correlational survey).** Six hundred adult employees reported how often they worked on mixed-background teams with shared goals and completed a prejudice scale. More frequent cooperative teamwork was associated with lower prejudice scores (r = −0.35).

> **Source 3 (practice laboratory experiment).** University students were placed in pairs with a member of a different campus group and randomly assigned to either compete for a cash prize or cooperate to earn a shared prize. Afterward, students in the competitive condition rated members of the other group less favorably than before, while students in the cooperative condition rated them more favorably.

### Worked example: building the response

**Part A — Claim.** Write a claim that takes a position the sources can support.
- ✅ "Cooperation toward a shared goal reduces prejudice between groups."
- ❌ "Prejudice is a complex issue." (This takes no position, so it cannot be defended.)

**Part B — Evidence and reasoning (Source 1).**
- *Evidence:* In Source 1, cross-group friendships rose by 2.1 nominations per student in jigsaw classrooms compared with 0.4 in standard classrooms.
- *Reasoning:* Jigsaw lessons make each student depend on classmates from other groups, which creates a **superordinate goal**. Working toward a goal no student can reach alone redraws the line of "us," reducing in-group bias and prejudice.

**Part C — Evidence and reasoning (a different source, Source 3).**
- *Evidence:* In Source 3, students assigned to cooperate rated the other group more favorably, while students assigned to compete rated them less favorably.
- *Reasoning:* This uses a different concept from Part B, **in-group bias**. It matches the Robbers Cave pattern: competition for scarce rewards intensifies in-group bias, while cooperation reduces it. Because conditions were randomly assigned, the difference can be attributed to cooperation itself.

### Why not lead with Source 2?

Source 2 can support the claim, but it is **correlational**. People who are already less prejudiced might choose mixed teams more often, so cooperation may not be the cause. If you use it, describe it as an association.
      `
    },
    {
      id: 'group-behavior-prejudice-p7-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Build the EBQ Response** 🔎

Choose the best option to complete each statement about the practice sources.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Parts B and C must each use evidence from _____.',
            options: ['the same source', 'a different source', 'the prompt only', 'outside research']
          },
          {
            label: 'The strongest psychological concept for explaining Source 1 is _____.',
            options: ['social facilitation', 'superordinate goals', 'the just-world phenomenon', 'false consensus']
          },
          {
            label: 'Source 2 cannot show that teamwork causes lower prejudice, since it is _____.',
            options: ['an experiment', 'a case study', 'a correlational study', 'a naturalistic observation']
          }
        ],
        correctAnswers: ['a different source', 'superordinate goals', 'a correlational study'],
        hint1: 'The EBQ asks you to draw on more than one source.',
        hint2: 'The jigsaw method gives a mixed group a goal no member can reach alone.',
        hint3: 'Source 2 measured two variables without manipulating either.',
        explanation: 'Each EBQ evidence part must cite a different source. Source 1 is best explained by superordinate goals, since jigsaw lessons make students depend on each other. Source 2 is correlational, so it shows an association but not cause and effect.'
      }
    },
    {
      id: 'group-behavior-prejudice-p7-s5-review',
      type: 'text' as const,
      content: `
## 🔁 Rapid Review: Distinctions the Exam Tests

| Pair | Key difference |
|---|---|
| Stereotype vs. prejudice | A belief about a group vs. a negative feeling toward it |
| Prejudice vs. discrimination | An attitude vs. a behavior |
| Explicit vs. implicit attitude | Reported and aware vs. automatic and possibly unrecognized |
| In-group bias vs. out-group homogeneity bias | Favoring "us" vs. seeing "them" as all alike |
| Ethnocentrism vs. just-world phenomenon | Judging other cultures by one's own standards vs. believing people get what they deserve |
| False consensus vs. out-group homogeneity | Overestimating agreement with oneself vs. underestimating variety in another group |
| Social facilitation vs. social loafing | Individual performance watched vs. effort pooled and hidden |
| Group polarization vs. groupthink | More extreme opinions vs. a faulty, harmony-driven decision process |
| Social trap vs. superordinate goal | Self-interest harms the group vs. a shared goal unites rival groups |
| Reciprocity norm vs. social responsibility norm | Repaying help received vs. helping those who need it |
| Altruism vs. social debt | Selfless helping vs. helping to meet social obligations |
      `
    },
    {
      id: 'group-behavior-prejudice-p7-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Apply the Whole Topic** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A company notices that employees from two merged firms avoid each other and describe the other firm\'s staff as "all the same." Which action would best address both problems?',
            options: [
              'Hold a training session that explains the definition of stereotypes',
              'Form mixed teams that can earn a bonus only by completing a joint project',
              'Let each former firm keep its own office so conflict is avoided',
              'Hold a contest in which the two former firms compete for a bonus'
            ],
            correctAnswer: 1,
            explanation: 'A joint project with a shared reward is a superordinate goal, which reduces negative feelings and stereotyping, and close cooperation exposes employees to the variety within the other group. Separation keeps the groups apart, competition deepens bias, and a definition alone does not change contact or goals.'
          },
          {
            question: 'Which finding would be the strongest evidence that the bystander effect is driven by diffusion of responsibility rather than by failing to notice the emergency?',
            options: [
              'Large groups helped less even when every bystander clearly saw the emergency',
              'Bystanders who were in a hurry helped less often than bystanders with time to spare',
              'Bystanders helped less often when the emergency took place in a noisy, crowded area',
              'Bystanders who were looking at their phones were less likely to see the victim fall'
            ],
            correctAnswer: 0,
            explanation: 'If everyone clearly noticed the emergency and larger groups still helped less, the drop cannot be explained by noticing and points to shared responsibility. Hurry, noise, and phones all reduce helping by blocking attention, the first step of the model.'
          },
          {
            question: 'A student argues: "People only help others to pay back favors, so true altruism does not exist." Which concept from the CED does this argument draw on?',
            options: [
              'Social debt',
              'Groupthink',
              'Ethnocentrism',
              'Social facilitation'
            ],
            correctAnswer: 0,
            explanation: 'The CED notes that some researchers suggest people act prosocially because of social debt, obligations explained by the reciprocity and social responsibility norms. The other concepts concern decisions, cultural judgment, and performance in front of others.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p7-s7-connection',
      type: 'text' as const,
      content: `
### 🎯 AP Connection: Final Checklist

Before the exam, make sure you can:

- define and tell apart every pair in the rapid-review table;
- name the **switch condition** for each group effect and a way to change it;
- explain why **superordinate goals** succeed where simple contact fails;
- walk the **five-step bystander model** and name the step that failed;
- calculate a mean, median, mode, and range, and explain why a correlation cannot show cause;
- answer the six **AAQ** tasks using details from a study summary (Part 6);
- build an **EBQ** response: a defensible claim, then evidence from two different sources, each explained with a different psychological concept.

**Where to go next:** Social Influence & Conformity covers conformity, obedience, and persuasion, the other half of Topic 4.3.
      `
    }
  ]
}
