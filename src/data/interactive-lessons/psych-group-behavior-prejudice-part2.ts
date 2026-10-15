export const psychGroupPart2Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group-behavior-prejudice-p2-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Group Behavior and Prejudice

**Part 2 of 7 — Group Influence at Work: Conditions and Applications**

> 🔑 **Key Concept:** Each group effect has a **switch condition**, a feature of the situation that turns it on. Knowing the condition lets you tell the effects apart in a scenario and predict how to change behavior.

You met the definitions of these effects in **Social Influence & Conformity, Part 4**. Here is a compact recap, organized by the condition that triggers each one.

| Effect | Switch condition | What changes |
|---|---|---|
| **Social facilitation** | Others are watching **your own** performance | Better on simple or well-practiced tasks; worse on hard or new ones |
| **Social loafing** | Effort is **pooled**, so no one's contribution can be identified | Each member puts in less effort |
| **Diffusion of responsibility** | Many people **share** a duty | Each person feels less personally responsible |
| **Deindividuation** | **Anonymity** plus group arousal | Self-awareness and self-restraint drop |
| **Group polarization** | Like-minded members **discuss** an issue | The group's average view becomes more extreme in its original direction |
| **Groupthink** | A **cohesive, insulated** group wants harmony | Doubts are suppressed and the decision process breaks down |

### The evidence behind the switches

**Being watched (social facilitation).** In 1898, **Norman Triplett** noticed that cyclists rode faster when racing against others than when riding alone against the clock. He then had children wind fishing reels, and many wound faster when another child was doing the same task beside them. This was one of the first social psychology experiments.

**Being unidentifiable (social loafing).** In the late 1800s, the French engineer **Max Ringelmann** found that people pulling on a rope exerted less force per person as the group got larger. Part of that loss could be poor coordination. In 1979, **Bibb Latané, Kipling Williams, and Stephen Harkins** separated the two explanations. Blindfolded participants wearing headphones were told to shout or clap as loudly as possible, sometimes alone and sometimes, they believed, with others. Even when they were actually alone but **believed** others were shouting too, they produced less noise. The drop came from reduced **motivation**, not just coordination.

**What reduces loafing.** A large review of loafing research by Karau and Williams (1993) found that loafing shrinks when individual contributions can be identified and evaluated, when the task is meaningful, when the group is small or cohesive, and when members expect others to perform poorly. It was also smaller, on average, in samples from collectivist cultures, which fits the group-first values you met in Part 1.

**Being anonymous (deindividuation).** In a Halloween field study by Ed Diener and colleagues (1976), trick-or-treaters were told to take only one piece of candy while the adult stepped away. Children took extra candy most often when they were **both anonymous** (not asked their names) **and in a group**, and least often when they were alone and had given their names.
      `
    },
    {
      id: 'group-behavior-prejudice-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Find the Switch Condition** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the 1979 shouting study, participants made less noise when they believed others were shouting, even though they were actually alone. What did this result rule out?',
            options: [
              'Poor coordination as the only cause of lost effort',
              'Audience arousal as a cause of better performance',
              'Anonymity as a cause of impulsive behavior',
              'Discussion as a cause of extreme opinions'
            ],
            correctAnswer: 0,
            explanation: 'Because no one else was actually shouting, there was nothing to coordinate with, so the effort loss had to come from reduced motivation. The other options describe facilitation, deindividuation, and polarization, which the study did not test.'
          },
          {
            question: 'A teacher wants to reduce social loafing on group projects. Which change would most directly target its cause?',
            options: [
              'Have every group present its final product in front of the class',
              'Grade each member on a part only that member writes',
              'Make the groups larger so the workload per person is lighter',
              'Let groups choose any topic that the whole group agrees on'
            ],
            correctAnswer: 1,
            explanation: 'Loafing happens when individual contributions are pooled and cannot be identified, so grading each member on an identifiable piece removes the condition that causes it. Larger groups usually make loafing worse, and a group presentation or free topic choice still leaves individual effort hidden.'
          },
          {
            question: 'Why would a psychologist predict less social loafing among team members raised in a collectivist culture?',
            options: [
              'Collectivist cultures remove the arousal an audience creates',
              'Collectivist cultures stress meeting obligations to the group',
              'Collectivist cultures rely on larger and more anonymous teams',
              'Collectivist cultures reward standing out from the group'
            ],
            correctAnswer: 1,
            explanation: 'Collectivist cultures emphasize interdependence and duty to the group, so slacking on a shared task conflicts with group-first norms. Standing out from the group is an individualist priority, and nothing about collectivism removes arousal or requires larger teams.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p2-s3-worked',
      type: 'text' as const,
      content: `
## 🧩 Worked Example: Diagnosing a Group Scenario

Exam scenarios often contain more than one group effect. Use the switch conditions as a checklist.

> **Scenario.** A student council of five close friends meets privately to plan a fundraiser. Everyone starts out mildly in favor of an expensive concert. After an hour of discussion, they are strongly in favor. One member privately thinks ticket sales will be too low but says nothing, and the president dismisses a teacher's warning as "negativity." At the event, the five members are supposed to sell tickets together from one shared table, and each sells far fewer than they did when they sold individually last year. On concert night, a crowd of masked students in the dark gym knocks over a display.

**Step 1 — The shift from "mildly in favor" to "strongly in favor."** The members already leaned one way and then discussed the issue together. Switch condition: like-minded discussion. **Group polarization.**

**Step 2 — The silent doubter and the dismissed warning.** The group is cohesive and insulated, and harmony is valued over realistic appraisal: self-censorship and the rejection of outside warnings are classic signs. **Groupthink.**

**Step 3 — The shared ticket table.** Sales are pooled, so no one's effort can be identified. **Social loafing**, driven by diffusion of responsibility.

**Step 4 — The masked crowd.** Anonymity (masks and darkness) plus group arousal reduce self-restraint. **Deindividuation.**

### Two pairs that students mix up

| Pair | How to tell them apart |
|---|---|
| **Group polarization vs. groupthink** | Polarization is about the **direction and strength of opinions** after discussion. Groupthink is about a **faulty decision process**: suppressed doubts, ignored warnings, an illusion of agreement. A group can polarize without groupthink if members argue openly. |
| **Social facilitation vs. social loafing** | Ask whether **individual performance is visible**. Visible and evaluated → facilitation (help on easy tasks, harm on hard ones). Hidden in a pooled total → loafing. |

> 🔑 **AP Connection:** In a free-response answer, name the concept **and** point to the feature of the scenario that triggers it: "The members show social loafing because sales were pooled at one table, so no individual's effort could be identified."
      `
    },
    {
      id: 'group-behavior-prejudice-p2-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Group Effect** 🔍

Choose the effect that best matches each new scenario.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A skilled typist enters data faster than usual while her supervisor stands behind her. This illustrates _____.',
            options: ['social loafing', 'social facilitation', 'deindividuation', 'groupthink']
          },
          {
            label: 'Jurors who each began with a slight lean toward a large damage award recommend an even larger award after deliberating. This illustrates _____.',
            options: ['groupthink', 'social loafing', 'group polarization', 'social facilitation']
          },
          {
            label: 'Commenters using anonymous accounts post insults they would never say face-to-face. This illustrates _____.',
            options: ['deindividuation', 'group polarization', 'social facilitation', 'social loafing']
          }
        ],
        correctAnswers: ['social facilitation', 'group polarization', 'deindividuation'],
        hint1: 'Her individual performance is visible, and typing is a well-practiced task for her.',
        hint2: 'The jurors already leaned one way before they discussed the case.',
        hint3: 'The key feature is anonymity, which lowers self-restraint.',
        explanation: 'A practiced task done while being watched improves through social facilitation. Discussion among people who already lean one way pushes the group further, which is group polarization. Anonymity that loosens self-restraint is deindividuation.'
      }
    },
    {
      id: 'group-behavior-prejudice-p2-s5-io',
      type: 'text' as const,
      content: `
## 🏢 Industrial-Organizational (I/O) Psychology

**Industrial-organizational (I/O) psychologists** study how people perform in the workplace. According to the CED, they study:

- **best practices in managing work**, such as how to hire, train, evaluate, and motivate employees;
- **relationships among people who work together** or for a common company or program, such as team dynamics and leadership;
- **how people feel about work**, including job satisfaction and **burnout**.

### Burnout

**Burnout** is a state of exhaustion that results from long-term workplace stress that has not been successfully managed. The World Health Organization's ICD-11 describes burn-out as an **occupational phenomenon**, not a medical condition, with three dimensions:

| Dimension | What it looks like |
|---|---|
| **Exhaustion** | Feeling drained of energy before the workday even begins |
| **Mental distance or cynicism** | Feeling negative or detached about the job and the people it serves |
| **Reduced professional efficacy** | Feeling less effective and accomplished at work |

Burnout is tied to the **job**, so I/O psychologists look for workplace causes: heavy workload, little control over one's work, poor recognition, unfair treatment, and conflict between personal values and the job.

### Applying group research at work

| Workplace problem | Group effect behind it | Change an I/O psychologist might recommend |
|---|---|---|
| A large team's output drops as more members join | Social loafing | Smaller teams with visible individual goals and feedback |
| A leadership team approves a flawed product without debate | Groupthink | Assign a devil's advocate, invite outside reviewers, have the leader speak last |
| New hires freeze when giving a first presentation to executives | Social facilitation on an unfamiliar task | Practice the presentation until it becomes well learned |
| No one reports a safety hazard that "everyone" has seen | Diffusion of responsibility | Assign a named person responsible for each check |
| Nurses on an understaffed ward feel drained and detached | Burnout | Adjust workload and staffing, and increase control and recognition |

> 🔑 **AP Connection:** I/O psychology is where group research becomes policy. If a question asks how an organization could reduce a problem, identify the **condition causing it** and change that condition.
      `
    },
    {
      id: 'group-behavior-prejudice-p2-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Groups in the Workplace** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A software company finds that teams of 12 produce less code per person than teams of 4, even after accounting for meeting time. Which recommendation would an I/O psychologist most likely make?',
            options: [
              'Hold more meetings so that large teams discuss their goals in depth',
              'Use smaller teams and track each member\'s individual contributions',
              'Add more members so the extra workload is shared by more people',
              'Have managers watch teams closely only when tasks are new and difficult'
            ],
            correctAnswer: 1,
            explanation: 'Less output per person in bigger teams suggests social loafing, which shrinks when groups are smaller and individual contributions are visible. Adding members would worsen the problem, and close observation on new, difficult tasks tends to impair performance through social facilitation.'
          },
          {
            question: 'An employee who once loved teaching now feels exhausted every morning, has become cynical about her students, and believes she is no longer effective. How would an I/O psychologist describe her experience?',
            options: [
              'As burnout caused by unmanaged long-term job stress',
              'As social loafing caused by working in a large department',
              'As deindividuation caused by teaching in an anonymous school',
              'As group polarization caused by talking with other teachers'
            ],
            correctAnswer: 0,
            explanation: 'Exhaustion, cynicism, and reduced sense of effectiveness are the three dimensions of burnout, which results from chronic workplace stress. Loafing, deindividuation, and polarization describe group effects on effort, restraint, and opinion, not this pattern of feelings about work.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p2-s7-connection',
      type: 'text' as const,
      content: `
### 🎯 AP Connection: From Definitions to Conditions

Knowing definitions earns recognition points; knowing **conditions** earns application points. For any group effect, be ready to say:

1. **What triggers it** (being watched, pooled effort, anonymity, like-minded discussion, a cohesive insulated group).
2. **What evidence shows it** (Triplett, the shouting study, the Halloween study).
3. **How to change it** (make contributions identifiable, invite dissent, reduce anonymity).

**Next up — Part 3:** Groups also shape how people judge **other** groups. Part 3 separates stereotypes, prejudice, and discrimination, and shows how researchers measure attitudes people may not admit, or even know, they hold.
      `
    }
  ]
}
