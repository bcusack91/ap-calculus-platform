export const psychGroupPart5Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group-behavior-prejudice-p5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Group Behavior and Prejudice

**Part 5 of 7 — Conflict and Cooperation: Social Traps and Superordinate Goals**

> 🔑 **Key Concept:** A **social trap** is a situation in which individuals act in their own self-interest instead of uniting, and the result harms the group, including the individuals themselves. A **superordinate goal** is a shared goal that no group can reach alone; it unites rival groups and reduces negative feelings and stereotyping between them.

### Social traps

In a social trap, each person's choice makes sense for that person, but when everyone makes the same choice, everyone ends up worse off.

**The prisoner's dilemma.** Two suspects are questioned in separate rooms. Each can stay silent (cooperate with the partner) or confess (defect).

| | **B stays silent** | **B confesses** |
|---|---|---|
| **A stays silent** | Each serves 1 year | A serves 10 years; B goes free |
| **A confesses** | A goes free; B serves 10 years | Each serves 5 years |

Work through A's reasoning. If B stays silent, A does better by confessing (free instead of 1 year). If B confesses, A still does better by confessing (5 years instead of 10). So confessing looks best for each person, yet when both confess they each serve 5 years, far worse than the 1 year each would serve if both stayed silent.

**The tragedy of the commons.** When many people share a resource that no one owns, such as a fishing ground or a town's water supply, each person gains by taking a little more, while the cost of overuse is spread across everyone. If everyone takes more, the resource collapses.

| Everyday social trap | Self-interested choice | Group result |
|---|---|---|
| Overfishing a shared lake | Each boat keeps catching more fish | The fish population crashes |
| Rush-hour driving | Each person drives alone for convenience | Everyone sits in traffic |
| Water shortage | Each household keeps watering its lawn | Wells run dry for the whole town |
| Group project with a shared grade | Each member waits for someone else to start | The project is rushed and weak |

### Escaping social traps

| Strategy | Why it works |
|---|---|
| **Communication** | People who can talk can agree to cooperate and see that others will too |
| **Rules and regulation** | Limits (such as fishing quotas) change the payoff of selfish choices |
| **Small groups** | Each person feels more responsible and is more identifiable |
| **Appeals to shared values and norms** | Cooperation becomes the expected, respected choice |
      `
    },
    {
      id: 'group-behavior-prejudice-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Spotting Social Traps** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'During a drought, every farmer in a valley pumps as much groundwater as possible, reasoning that "if I don\'t, my neighbor will." Within two years the wells run dry for everyone. This best illustrates:',
            options: [
              'a superordinate goal',
              'a social trap',
              'in-group bias',
              'groupthink'
            ],
            correctAnswer: 1,
            explanation: 'Each farmer acts in self-interest instead of cooperating, and the combined result harms the whole group, which defines a social trap. A superordinate goal would unite the farmers, and nothing shows a cohesive group suppressing doubts or favoring its own members.'
          },
          {
            question: 'In the prisoner\'s dilemma, why do both suspects usually end up worse off than if they had cooperated?',
            options: [
              'Each suspect expects the other to be punished more harshly than himself',
              'Confessing seems best for each one, no matter what the other suspect does',
              'Each suspect overestimates how much the other agrees with his plan',
              'The suspects discuss the choice together and reach an extreme decision'
            ],
            correctAnswer: 1,
            explanation: 'Confessing gives each suspect a better outcome whether the partner stays silent or confesses, so both confess, and mutual confession is worse for both than mutual silence. The suspects are questioned separately, so they cannot discuss or polarize.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p5-s3-robbers-cave',
      type: 'text' as const,
      content: `
## 🏕️ Case Study: The Robbers Cave Experiment

In 1954, **Muzafer Sherif** and colleagues studied 22 boys, about 11 years old, at a summer camp in Robbers Cave State Park, Oklahoma. The boys were split into two groups that at first did not know the other existed.

### Stage 1 — Building in-groups

Each group spent about a week hiking, swimming, and cooking together. Each developed its own norms, leaders, and a name: the **Eagles** and the **Rattlers**.

### Stage 2 — Competition creates conflict

The researchers introduced a tournament (baseball, tug-of-war, and other contests) with prizes only for the winning group. Hostility grew quickly: name-calling, raids on the other group's cabin, and the burning of the other group's flag. Each group described its own members in positive terms and the other group in negative terms, a clear case of **in-group bias** and negative stereotyping.

### Stage 3 — What reduced the conflict

| What the researchers tried | Result |
|---|---|
| **Simple contact:** shared meals, movies, fireworks | Did **not** help; meals turned into food fights |
| **Superordinate goals:** fixing the camp's water supply, pooling money to rent a movie, pulling a stalled supply truck together | Hostility **declined** and friendships began to cross group lines |

Each superordinate goal was something **both groups wanted and neither could achieve alone**. By the end, the boys chose to ride home on the same bus.

### Evaluating the study

| Strength | Limitation |
|---|---|
| Showed that ordinary, well-adjusted boys developed hostility when groups competed for scarce prizes | **Generalizability:** the participants were all white, middle-class boys of similar background |
| Tested several ways of reducing conflict and compared them | **Ethics:** the boys did not know they were in a study and were exposed to real hostility |
| Conducted in a natural setting, which increases realism | Later archival research suggests staff influenced events more than the published report described |

### Contact is not enough by itself

The failure of simple contact at Robbers Cave matches a broader idea often called the **contact hypothesis**, proposed by Gordon Allport in 1954: contact between groups reduces prejudice mainly when the groups have **equal status**, **common goals**, **cooperation** rather than competition, and **support from authorities**. (The CED does not name the contact hypothesis; it frames this idea through superordinate goals.)

**An application: the jigsaw classroom.** In 1971, after schools in Austin, Texas, were desegregated, **Elliot Aronson** designed lessons in which each student in a mixed group learned one piece of the material and had to teach it to the others. Every student needed every other student to succeed, which turned classmates into a team working toward a superordinate goal.
      `
    },
    {
      id: 'group-behavior-prejudice-p5-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Complete the Reasoning** 🔎

Choose the term that best completes each sentence.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'At Robbers Cave, hostility first grew when the Eagles and Rattlers _____.',
            options: ['competed for prizes', 'ate meals together', 'shared a water supply', 'rode the same bus']
          },
          {
            label: 'Rival neighborhoods stop feuding after a storm when they must work together to clear the only road out of town. Clearing the road served as a _____.',
            options: ['social trap', 'superordinate goal', 'social norm', 'social role']
          },
          {
            label: 'In a jigsaw classroom, prejudice drops mainly because students _____.',
            options: ['compete for grades', 'depend on each other', 'study the same text', 'avoid group work']
          }
        ],
        correctAnswers: ['competed for prizes', 'superordinate goal', 'depend on each other'],
        hint1: 'Hostility appeared in the stage with a tournament.',
        hint2: 'Neither neighborhood could clear the road alone, and both needed it cleared.',
        hint3: 'Each student holds one piece of the lesson that the others need.',
        explanation: 'Competition for scarce prizes produced hostility at Robbers Cave. A shared need that neither group can meet alone is a superordinate goal. The jigsaw classroom works because each student depends on the others, which builds cooperation.'
      }
    },
    {
      id: 'group-behavior-prejudice-p5-s5-misconceptions',
      type: 'text' as const,
      content: `
## ⚠️ Common Misconceptions in This Topic

| Misconception | What the evidence shows |
|---|---|
| "Prejudice requires a long history of conflict." | Minimal group studies show in-group bias with meaningless labels (Part 4). |
| "Putting groups in the same room ends prejudice." | Simple contact failed at Robbers Cave; cooperation toward shared goals worked. |
| "Stereotype, prejudice, and discrimination mean the same thing." | They are a belief, an attitude, and a behavior, and each can occur without the others (Part 3). |
| "Positive stereotypes are harmless." | Any stereotype judges individuals by group membership rather than by who they are. |
| "People who discriminate always know they are biased." | Implicit attitudes can operate without awareness (Part 3). |
| "Social loafing means lazy people." | Loafing depends on the situation; the same person works harder when contributions are identifiable (Part 2). |
| "Social traps happen only to selfish people." | Each choice is reasonable for the individual; the trap is built into the situation. |
| "Superordinate goals are any goal a group shares." | The goal must be shared by **rival** groups and require them to work **together**. |
      `
    },
    {
      id: 'group-behavior-prejudice-p5-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Reducing Intergroup Conflict** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Two rival high schools have a history of vandalism before games. Based on the Robbers Cave findings, which plan would most likely reduce the hostility?',
            options: [
              'Hold a joint assembly where students from both schools sit together',
              'Have students from both schools raise money together for a shared stadium',
              'Add more games between the schools so students get used to each other',
              'Give a trophy to whichever school shows better sportsmanship this season'
            ],
            correctAnswer: 1,
            explanation: 'A joint fundraiser for a stadium both schools need is a superordinate goal that requires cooperation. Simple contact at an assembly did not work at Robbers Cave, and more games or a sportsmanship trophy keep the schools competing for prizes.'
          },
          {
            question: 'Which criticism of the Robbers Cave study most directly concerns its generalizability?',
            options: [
              'Participants were not told they were taking part in a study',
              'Every boy was white and middle class from a similar home',
              'The researchers compared simple contact with superordinate goals',
              'The study took place at a camp instead of inside a laboratory'
            ],
            correctAnswer: 1,
            explanation: 'Generalizability depends on whether the sample represents the population a claim is about, and a narrow sample of similar boys limits who the findings apply to. Not informing the boys is an ethical concern, and comparing conditions or using a natural setting are strengths.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p5-s7-connection',
      type: 'text' as const,
      content: `
### 🎯 AP Connection: Explaining a Solution

When a question asks how to reduce conflict between groups, a strong answer has three parts:

1. **Name the concept** (superordinate goal).
2. **Describe the goal in the scenario** and show that **both** groups need it and **neither** can reach it alone.
3. **Explain the mechanism:** working together shifts the boundary of "us," which reduces negative feelings and stereotyping.

**Next up — Part 6:** Groups do not only compete; people also help each other, sometimes at a cost to themselves. Part 6 asks why people help and why a crowd of bystanders can make help less likely.
      `
    }
  ]
}
