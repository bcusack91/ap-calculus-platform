export const psychGroupPart1Data = {
  topicSlug: 'group-behavior-prejudice',
  sections: [
    {
      id: 'group-behavior-prejudice-p1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Group Behavior and Prejudice

**Part 1 of 7 — Groups, Culture, and Social Norms**

> 🔑 **Key Concept:** Much of what people think and do depends on the groups they belong to. Groups supply **norms** (expectations for behavior), **roles** (expected behavior for a position), and a sense of **us** versus **them**. This topic follows that idea from everyday group life to prejudice, conflict, and helping.

### Where this topic fits

| Part | Question it answers | CED topic |
|---|---|---|
| 1 | How do culture and norms shape the way people see themselves and others? | 4.3.A, 4.3.B |
| 2 | When does being in a group help or hurt performance? | 4.3.B |
| 3 | How do stereotypes lead to prejudice and discrimination? | 4.2.A |
| 4 | Which biases make people favor their own group, and how is this measured? | 4.2.A |
| 5 | Why do groups clash, and what brings them together? | 4.3.B |
| 6 | Why do people help, and why do bystanders sometimes fail to? | 4.3.C |
| 7 | How do the pieces fit together on the exam? | All |

Conformity, obedience, and persuasion are taught in **Social Influence & Conformity**, so this topic builds on them rather than repeating them.

### Social norms and roles

A **social norm** is a shared expectation about how members of a group or society should behave in a situation. Norms are usually unwritten, yet people notice right away when one is broken.

| Setting | A common norm | What happens when it is broken |
|---|---|---|
| Elevator | Face the door and avoid long eye contact | Other riders look away, shift, or laugh nervously |
| Classroom | Raise a hand before speaking in a lecture | The teacher redirects, and classmates stare |
| Group chat | Reply within a reasonable time | Friends ask whether something is wrong |
| Funeral | Speak quietly and dress soberly | Others treat the behavior as disrespectful |

A **role** is a set of norms attached to a particular position, such as "team captain," "new employee," or "older sibling." People in a role tend to act the way the role expects, which is one reason behavior can change when a person's role changes.

Norms differ across cultures and change over time. Shaking hands, bowing, and kissing a cheek can all be the polite greeting, depending on where you are. That variation is the key to the next idea: culture shapes the norms people treat as normal.
      `
    },
    {
      id: 'group-behavior-prejudice-p1-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Norms and Roles** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes a social norm?',
            options: [
              'A written law that authorities enforce with formal penalties',
              'A shared expectation for how group members should behave',
              'A personal belief formed only from direct experience with others',
              'A biological drive that every person shares regardless of culture'
            ],
            correctAnswer: 1,
            explanation: 'A social norm is a shared, usually unwritten expectation for behavior in a group or society. Laws are formal and enforced by authorities, personal beliefs need not be shared, and biological drives do not vary across cultures the way norms do.'
          },
          {
            question: 'After Marcus is promoted from cashier to shift manager, he starts arriving early, correcting coworkers, and eating lunch apart from them. Which concept best explains the change in his behavior?',
            options: [
              'He has adopted the expectations attached to a new role',
              'His personality traits have changed because of the raise',
              'He is showing the false consensus effect about his coworkers',
              'He is rebelling against the norms of his former workplace'
            ],
            correctAnswer: 0,
            explanation: 'A role is a set of norms tied to a position, and Marcus is acting the way a manager is expected to act. Nothing suggests a change in stable traits, a misjudgment of how many people agree with him, or rebellion against the workplace.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p1-s3-culture',
      type: 'text' as const,
      content: `
## 🌍 Individualism, Collectivism, and Multiculturalism

The CED names three cultural patterns that influence how people perceive and behave toward themselves and others.

| | **Individualism** | **Collectivism** | **Multiculturalism** |
|---|---|---|---|
| **Core priority** | Personal goals, independence, uniqueness | Group goals, interdependence, harmony | Valuing and keeping several cultural identities within one society |
| **How people describe themselves** | By personal traits ("I am ambitious") | By relationships and roles ("I am my family's eldest son") | Often by more than one cultural identity ("I am Korean American") |
| **What earns respect** | Standing out and personal achievement | Fitting in and meeting obligations to the group | Respect for many cultural traditions |
| **Typical response to conflict** | Speak up directly to defend your own view | Avoid open conflict to protect group harmony | Varies by context; people may switch norms |
| **Example of a norm** | A student is praised by name for winning a prize | A team shares credit and a student downplays a personal win | A school celebrates holidays from several traditions |

### Worked example: one event, two cultural lenses

A student finishes first in a regional science competition.

1. **Individualist lens:** the student is congratulated personally, posts the result online, and lists it as a personal accomplishment. Taking credit is normal and even expected.
2. **Collectivist lens:** the student thanks the teacher, family, and team first, and may feel uncomfortable being singled out. Taking too much personal credit could seem to disrupt harmony.
3. **What the comparison shows:** the behavior that counts as polite differs, because each culture's norms define what is appropriate. Neither pattern is more "correct"; each fits the values of its culture.

### Three cautions

- **These are tendencies, not boxes.** Every culture contains individualist and collectivist people, and a single person can act more individualist at work and more collectivist with family.
- **Cultures are not ranked.** Comparing cultures describes differences; it does not show that one way of living is better.
- **Multiculturalism is about many identities at once.** A bicultural person may move between two sets of norms depending on the setting, which is sometimes called code-switching.

> 🔑 **AP Connection:** When an exam scenario asks how culture shapes behavior, tie the behavior to a **specific value**. "She credits her team because collectivist cultures emphasize group harmony and interdependence" earns credit; "because of her culture" does not.
      `
    },
    {
      id: 'group-behavior-prejudice-p1-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Cultural Pattern** 🔎

Choose the cultural pattern each description best illustrates.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When asked to describe herself, Aiko writes "a daughter, a team member, and a student at Westfield High." Her answer reflects a _____ view of the self.',
            options: ['collectivist', 'individualist', 'multicultural', 'ethnocentric']
          },
          {
            label: 'A city council funds festivals and public signs in several languages so that each community can keep its own traditions. This policy reflects _____.',
            options: ['individualism', 'collectivism', 'multiculturalism', 'deindividuation']
          },
          {
            label: 'A manager tells employees that the best way to get promoted is to stand out from the team and make their own achievements visible. This advice reflects _____.',
            options: ['collectivism', 'individualism', 'multiculturalism', 'group polarization']
          }
        ],
        correctAnswers: ['collectivist', 'multiculturalism', 'individualism'],
        hint1: 'Collectivist cultures define the self through relationships and group roles.',
        hint2: 'Which pattern is about keeping several cultural identities alive in one society?',
        hint3: 'Standing out and personal achievement are individualist priorities.',
        explanation: 'Describing yourself through roles and relationships reflects collectivism. Supporting many cultural traditions within one society reflects multiculturalism. Advice to stand out and make personal achievements visible reflects individualism.'
      }
    },
    {
      id: 'group-behavior-prejudice-p1-s5-false-consensus',
      type: 'text' as const,
      content: `
## 🪞 The False Consensus Effect

The **false consensus effect** is the tendency to **overestimate how much other people share your opinions, beliefs, and behaviors**.

### The classic demonstration

In a well-known 1977 study by **Lee Ross and colleagues**, college students were asked whether they would walk around campus for 30 minutes wearing a large sandwich-board sign that read "Eat at Joe's." Some agreed and some refused. Then every student estimated how many other students would make the same choice.

- Students who **agreed** thought most other students would also agree.
- Students who **refused** thought most other students would also refuse.

Both groups could not be right. Each side projected its own choice onto everyone else.

### Why it happens

| Cause | How it produces false consensus |
|---|---|
| **Selective exposure** | People spend time with friends who are similar to them, so the people they see really do agree more often than the population does |
| **Projection** | People use their own reaction as the easiest guide to how others will react |
| **Self-esteem** | Believing that others agree makes your own views feel normal and correct |

### Worked example: reading a survey result

A student who never cheats on tests estimates that only 10% of classmates cheat. A student who sometimes cheats estimates that 60% of classmates cheat. An anonymous school survey later finds the real figure is 25%.

1. **Identify the pattern:** each student's estimate drifts toward their own behavior.
2. **Name the concept:** this is the false consensus effect, since each overestimates how common their own behavior is.
3. **Explain the consequence:** the student who cheats may feel the behavior is normal ("everyone does it"), which can make it easier to keep doing it.

### Do not confuse these

| Concept | What the person misjudges |
|---|---|
| **False consensus effect** | How many people **agree with me** |
| **Out-group homogeneity bias** (Part 4) | How **similar members of another group** are to each other |
| **Conformity** (Social Influence & Conformity) | Not a misjudgment; it is **changing behavior** to match a group |

> 🔑 **AP Connection:** False consensus is about **estimates of agreement**. If a scenario asks how a person judges what "most people" think, and the judgment matches the person's own view, think false consensus.
      `
    },
    {
      id: 'group-behavior-prejudice-p1-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Culture and Consensus** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Before an election, a voter who supports a candidate is shocked when the candidate loses badly. "Everyone I know voted for her," he says. Which concept best explains his surprise?',
            options: [
              'Group polarization made his views more extreme',
              'The false consensus effect inflated his estimate of agreement',
              'Out-group homogeneity made opposing voters seem alike',
              'Ethnocentrism led him to judge the other side unfairly'
            ],
            correctAnswer: 1,
            explanation: 'He overestimated how many people shared his choice, partly because the people around him were similar to him, which is the false consensus effect. Nothing in the scenario shows his views becoming more extreme or a judgment about how alike the other voters were.'
          },
          {
            question: 'A researcher compares self-descriptions written by students in two countries. Students in Country A mostly list personal traits, while students in Country B mostly list family and group roles. Which conclusion is best supported?',
            options: [
              'Students in Country B have weaker personalities',
              'Country A is likely more individualist in its norms',
              'Students in Country A care less about their families',
              'Country B has a multicultural policy toward minorities'
            ],
            correctAnswer: 1,
            explanation: 'Describing the self mainly by personal traits fits individualist norms, while describing it by roles fits collectivist norms. The data do not measure personality strength, how much students care about their families, or government policy.'
          },
          {
            question: 'Which research finding would best show that a behavior reflects a social norm rather than a universal human tendency?',
            options: [
              'The behavior appears at about the same age in every culture',
              'The behavior differs across cultures and changes over decades',
              'The behavior is more common in identical twins than in fraternal twins',
              'The behavior is linked to activity in one particular brain region'
            ],
            correctAnswer: 1,
            explanation: 'Norms are shared expectations that vary by culture and change over time, so variation across cultures and eras points to a norm. Appearance at the same age everywhere, twin similarity, and a specific brain region all point toward biological or universal explanations.'
          }
        ]
      }
    },
    {
      id: 'group-behavior-prejudice-p1-s7-connection',
      type: 'text' as const,
      content: `
### 🎯 AP Connection: Building Blocks for the Rest of the Topic

Everything later in this topic rests on three ideas from this part:

1. **Groups create norms and roles**, and people adjust to them.
2. **Culture shapes the self**, so individualist and collectivist settings produce different behavior in the same situation.
3. **People misjudge others** in predictable ways, such as overestimating agreement.

**Next up — Part 2:** Once people are in a group, the group changes how hard they work, how carefully they decide, and how much they hold back. Part 2 shows the conditions that switch each of these effects on.
      `
    }
  ]
}
