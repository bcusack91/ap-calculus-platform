export const psychTreatmentPart4Data = {
  topicSlug: 'treatment-therapy',
  sections: [
    {
      id: 'treatment-therapy-p4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Treatment and Therapy

**Part 4 of 7 — Cognitive and Cognitive-Behavioral Therapies**

> 🔑 **Key Concept:** Cognitive therapies start from one idea: **it is not only what happens to us, but how we interpret it, that shapes how we feel and act.** Change the maladaptive thought, and the emotion and behavior can change too. Cognitive-behavioral therapies add the behavioral toolkit from Part 3, so clients change both what they think and what they do.

### The thought in the middle

| Event | Interpretation (thought) | Emotion and behavior |
|---|---|---|
| A friend does not reply to a text | "She's busy; she'll answer later." | Calm; keeps studying |
| A friend does not reply to a text | "She's angry with me. I always ruin friendships." | Anxious and sad; stops reaching out |

Same event, different thoughts, different outcomes. Cognitive therapists target the thought.

### Three approaches compared

| | Cognitive therapy | Behavior therapy (Part 3) | Cognitive-behavioral therapy (CBT) |
|---|---|---|---|
| **Target** | Maladaptive thoughts and beliefs | Maladaptive behaviors | Both thoughts and behaviors |
| **Typical tools** | Cognitive restructuring, examining evidence, fear hierarchies | Exposure, token economies, aversion therapy, biofeedback | Restructuring plus exposure, homework, and skills practice |
| **Key names** | Aaron Beck (cognitive therapy) | Joseph Wolpe (systematic desensitization) | Albert Ellis (REBT), Marsha Linehan (DBT) |
| **Therapist style** | Active, structured, collaborative | Active, structured | Active, structured, homework between sessions |
      `
    },
    {
      id: 'treatment-therapy-p4-s2-beck',
      type: 'text' as const,
      content: `
## Beck's Cognitive Therapy

Aaron Beck developed cognitive therapy while working with people who had depression. He noticed that their thinking followed a consistent negative pattern, which he called the **cognitive triad**: negative thoughts about **oneself**, **the world**, and **the future** (CED 5.5.D.2).

| Part of the triad | Sample thought from a client with depression |
|---|---|
| **Self** | "I'm worthless. I can't do anything right." |
| **World** | "People are cold. No one would help me if I asked." |
| **Future** | "Nothing is ever going to change. Next year will be just as bad." |

### Cognitive distortions

Beck's approach treats these thoughts as products of habitual errors in reasoning. Recognizing the error is the first step in changing it.

| Distortion | What it does | Example |
|---|---|---|
| **All-or-nothing thinking** | Sees things in two extremes | "If I don't get an A, I'm a total failure." |
| **Overgeneralization** | Treats one event as a never-ending pattern | "I got rejected once, so I'll always be rejected." |
| **Catastrophizing** | Expects the worst possible outcome | "If I stumble in my speech, my whole career is over." |
| **Personalization** | Blames oneself for events outside one's control | "The team lost because I was in the stands." |
| **Mind reading** | Assumes one knows what others think | "Everyone thinks I'm boring." |

### Cognitive restructuring

**Cognitive restructuring** is the process of identifying a maladaptive thought, testing it against evidence, and replacing it with a more balanced one. The therapist often uses **Socratic questioning**: asking questions that lead the client to examine the thought rather than simply telling the client it is wrong.

### Fear hierarchies in cognitive work

The CED notes that cognitive therapies may employ **fear hierarchies** as well as cognitive restructuring. Clients rank feared situations, then work up the list while testing the catastrophic **predictions** attached to each step ("If I speak up in class, everyone will laugh"). Each step becomes an experiment: did the predicted disaster happen? The focus is on revising the thought, which is what separates this use from purely behavioral systematic desensitization.

### Worked Example: A thought record

**Case.** Mei, 19, has depressive symptoms. She received a B minus on a chemistry exam and stayed in bed the rest of the day.

| Column | Mei's entry |
|---|---|
| **1. Situation** | Got a B minus on my chemistry exam. |
| **2. Automatic thought** | "I'm stupid. I'll never get into nursing school." |
| **3. Emotion (0 to 100)** | Sad 85, hopeless 80 |
| **4. Distortion** | All-or-nothing thinking (self); catastrophizing (future) |
| **5. Evidence for** | I missed two questions on stoichiometry. |
| **6. Evidence against** | I have a B average overall; one exam is a small part of my grade; nursing programs look at many courses. |
| **7. Balanced thought** | "This exam was weaker than I wanted, and I know which topic to review. One grade doesn't decide my future." |
| **8. Emotion after** | Sad 40, hopeless 20 |

**Reasoning.** The situation did not change; the interpretation did. Notice the triad in Mei's automatic thought: a negative view of **self** ("I'm stupid") and of the **future** ("I'll never get in"). Restructuring targets both.

> 🔑 **AP Connection:** When a stem shows a therapist asking "What is the evidence for that thought?", challenging a client's interpretation, or pointing out a distortion, choose **cognitive therapy** or **cognitive restructuring**. When it mentions negative thoughts about self, world, and future, name **Beck's cognitive triad**.
      `
    },
    {
      id: 'treatment-therapy-p4-s3-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Cognitive Therapy** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A client with major depressive disorder says, 'Nothing is ever going to change. Next year will be just as bad as this one.' This statement reflects which part of Beck's cognitive triad?",
            options: [
              "Negative thoughts about the self",
              "Negative thoughts about the world",
              "Negative thoughts about one's past",
              "Negative thoughts about the future"
            ],
            correctAnswer: 3,
            explanation: "Predicting that things will stay bad next year is a negative view of the future. The past is not one of the three parts of Beck's triad, which covers the self, the world, and the future."
          },
          {
            question: "A therapist asks a client, 'What evidence supports the idea that everyone at the party found you boring? What evidence goes against it?' The therapist is using",
            options: [
              "free association",
              "cognitive restructuring",
              "systematic desensitization",
              "unconditional positive regard"
            ],
            correctAnswer: 1,
            explanation: "Testing a thought against evidence so it can be replaced with a more balanced one is cognitive restructuring. Free association lets thoughts flow without examination, and unconditional positive regard accepts the client without challenging anything."
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p4-s4-rebt',
      type: 'text' as const,
      content: `
## Rational-Emotive Behavior Therapy (REBT)

Albert Ellis developed **rational-emotive behavior therapy**, one of the cognitive-behavioral therapies named in the CED (5.5.D.4). Ellis argued that emotional problems come mainly from **irrational beliefs**: rigid, absolute demands such as "I **must** be perfect" or "Others **must** treat me fairly," and the conclusion that it is **awful** and **unbearable** when they do not.

### The ABC (DE) model

| Letter | Stands for | Example |
|---|---|---|
| **A** | **Activating event** | Jamal is not chosen for the varsity team. |
| **B** | **Belief** about the event | "I must succeed at everything I try. If I don't, I'm a loser." |
| **C** | **Consequence**, emotional and behavioral | Depressed mood; quits practicing basketball entirely |
| **D** | **Disputing** the irrational belief | "Where is the evidence that I must succeed at everything? Does one cut make me a loser?" |
| **E** | **Effective new belief** | "I'd prefer to make the team, and I'm disappointed. I can keep improving and try again next year." |

The key insight: **A does not cause C directly. B does.** Two players cut from the same team can feel very differently depending on their beliefs.

### How REBT differs from Beck's cognitive therapy

| | Beck's cognitive therapy | Ellis's REBT |
|---|---|---|
| **Style** | Collaborative; guides the client to test thoughts through Socratic questions | Directive and often confrontational; the therapist actively disputes irrational beliefs |
| **Target** | Automatic thoughts and distortions, such as the triad | Absolute "musts" and "awfulizing" beliefs |
| **Behavioral part** | Behavioral experiments and homework | Homework assignments that test beliefs in real life, such as deliberately risking a small rejection |

Both share the core cognitive assumption: change the belief, and the feeling changes.

> 🔑 **AP Connection:** Clue words for REBT include **irrational beliefs**, **"must" or "should" statements**, **disputing**, and a **directive or confrontational** therapist. For Beck, the clue words are **cognitive triad**, **distortions**, and **testing thoughts against evidence**.
      `
    },
    {
      id: 'treatment-therapy-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Sort the Thoughts and Steps** 🧩

Complete each sentence.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"People out there are cold, and no one helps anyone in need" is a negative thought about _____ in Beck\'s cognitive triad.',
            options: ['the self', 'the future', 'the world', 'the past']
          },
          {
            label: '"I am a burden to everyone around me" is a negative thought about _____ in Beck\'s cognitive triad.',
            options: ['the world', 'the self', 'the past', 'the future']
          },
          {
            label: 'In Ellis\'s ABC model, the belief "I must never make a mistake" is labeled _____.',
            options: ['A', 'B', 'C', 'D']
          }
        ],
        correctAnswers: ['the world', 'the self', 'B'],
        hint1: 'A thought about how other people and life in general treat you is about the world.',
        hint2: 'A thought about your own worth or ability is about the self.',
        hint3: 'A is the event, C is the consequence; the belief sits between them.',
        explanation: 'Seeing others as unhelpful is a negative view of the world, and seeing oneself as a burden is a negative view of the self. In Ellis\'s model the belief is B, which comes between the activating event (A) and the consequence (C).'
      }
    },
    {
      id: 'treatment-therapy-p4-s6-cbt-dbt',
      type: 'text' as const,
      content: `
## Cognitive-Behavioral Therapy and DBT

**Cognitive-behavioral therapies** combine techniques from the cognitive and behavioral perspectives to treat mental and behavioral disorders (CED 5.5.D.4). The CED names two: **rational-emotive behavior therapy** (above) and **dialectical behavior therapy**.

### What CBT looks like

A typical CBT plan is structured, time-limited, and active:

| Component | Cognitive or behavioral? | Example for a person with panic disorder |
|---|---|---|
| Education about the problem | Cognitive | Learning that a racing heart is uncomfortable but not dangerous |
| Cognitive restructuring | Cognitive | Challenging the thought "This feeling means I'm having a heart attack" |
| Exposure | Behavioral | Deliberately raising heart rate by jogging in place, then staying with the sensation |
| Homework | Both | Recording panic episodes and the thoughts that came with them |

### Dialectical behavior therapy (DBT)

**Dialectical behavior therapy**, developed by Marsha Linehan, was designed for people with chronic suicidal behavior and is widely used for **borderline personality disorder**, where intense, unstable emotions and self-harm are common. A **dialectic** holds two ideas that seem opposed: DBT balances **acceptance** ("You are doing the best you can right now") with **change** ("You need to learn new skills to build the life you want").

| DBT skill area | What clients learn | Example |
|---|---|---|
| **Mindfulness** | Observe thoughts and feelings in the present without judging them | Noticing "I'm feeling rage" instead of acting on it |
| **Distress tolerance** | Get through a crisis without making it worse | Using intense cold water or paced breathing instead of self-harm |
| **Emotion regulation** | Understand and change emotional reactions | Identifying triggers and reducing vulnerability, such as by getting enough sleep |
| **Interpersonal effectiveness** | Ask for what one needs and set limits while keeping relationships | Practicing a clear, respectful request to a roommate |

DBT typically combines individual therapy with group skills training, so it also illustrates the group format from Part 1.

### Worked Example: Which approach fits?

| Client | Main problem | Best-fitting approach | Why |
|---|---|---|---|
| Ravi, 30 | Believes he **must** be perfect at work and is crushed by any criticism | **REBT** | Rigid "must" belief to dispute |
| Lena, 24 | Frequent self-harm during overwhelming emotional storms; unstable relationships | **DBT** | Needs distress tolerance and emotion regulation skills, delivered with acceptance |
| Theo, 17 | Avoids speaking in class because he expects everyone to laugh | **CBT** with a fear hierarchy | Combine testing the prediction with gradual exposure |

> 🔑 **AP Connection:** "Combines cognitive and behavioral techniques" is the definition of CBT. If a stem pairs **acceptance with change** or lists **mindfulness and distress tolerance**, the answer is **DBT**. If it highlights **irrational beliefs** and **disputing**, the answer is **REBT**.
      `
    },
    {
      id: 'treatment-therapy-p4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Cognitive-Behavioral Therapies** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Ravi tells his therapist, 'I must be perfect at work, and it is unbearable when my boss criticizes me.' A therapist using rational-emotive behavior therapy would most likely",
            options: [
              "explore childhood memories that gave rise to this view",
              "reflect his frustration back without judging the view",
              "dispute that demand as an irrational belief",
              "reward him with tokens for each day he avoids worry"
            ],
            correctAnswer: 2,
            explanation: "REBT targets rigid 'must' beliefs and actively disputes them as irrational. Exploring childhood memories is psychodynamic, nonjudgmental reflection is person-centered, and tokens belong to a token economy."
          },
          {
            question: "Lena, who lives with borderline personality disorder, attends weekly skills groups on mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness, plus individual sessions. Which therapy is she receiving?",
            options: [
              "Rational-emotive behavior therapy",
              "Dialectical behavior therapy",
              "Person-centered therapy",
              "Psychodynamic therapy"
            ],
            correctAnswer: 1,
            explanation: "Those four skill areas, balancing acceptance with change, define dialectical behavior therapy. Rational-emotive behavior therapy focuses on disputing irrational beliefs rather than on these skill modules."
          },
          {
            question: "Which treatment plan for a teenager with social anxiety disorder best illustrates cognitive-behavioral therapy?",
            options: [
              "Discussing his dreams about crowds to uncover what they mean",
              "Testing his fear of being laughed at, then practicing small talk",
              "Reflecting his feelings while he sets each session's direction",
              "Taking a daily medication that raises serotonin in the synapse"
            ],
            correctAnswer: 1,
            explanation: "Testing a feared prediction is cognitive, and practicing small talk is behavioral, so the plan combines both perspectives. Dream discussion is psychodynamic, reflection is person-centered, and medication is biomedical."
          }
        ]
      }
    },
    {
      id: 'treatment-therapy-p4-s8-wrap',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Term | Key idea |
|---|---|
| **Cognitive restructuring** | Identify a maladaptive thought, test it against evidence, replace it with a balanced one |
| **Cognitive triad** | Beck: negative thoughts about oneself, the world, and the future |
| **Fear hierarchy** | Ranked feared situations, worked through while testing catastrophic predictions |
| **REBT** | Ellis: dispute irrational "must" beliefs (ABC model) |
| **CBT** | Combines cognitive and behavioral techniques |
| **DBT** | Linehan: balances acceptance and change; mindfulness, distress tolerance, emotion regulation, interpersonal effectiveness |

> 🔑 **AP Connection:** You now have all four psychotherapy perspectives. Part 5 turns to the biological perspective, which treats the brain directly with medication and procedures.
      `
    }
  ]
}
