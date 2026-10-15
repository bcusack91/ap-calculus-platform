export const psychDisordersPart3Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psychological-disorders-overview-p3-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Psychological Disorders Overview

**Part 3 of 7 — Perspectives on Disorders and the Eclectic Approach**

> 🔑 **Key Concept:** Each major psychological perspective points to a different kind of cause for psychological disorders. Most psychologists use an **eclectic approach**, drawing on more than one perspective when they diagnose and treat clients.

### Seven lenses on the same problem

The DSM (Part 2) describes *what* a disorder looks like. The perspectives explain *why* it develops. The AP CED gives a specific framing for each one; learn these framings closely, because exam questions are built on them.

| Perspective | The CED says causes of disorders focus on… | Key ideas and names to connect |
|---|---|---|
| **Behavioral** | **maladaptive learned associations** between or among responses to stimuli | Classical conditioning (a fear linked to a place), operant conditioning (avoidance that is reinforced because it brings relief) |
| **Psychodynamic** | **unconscious thoughts and experiences**, often developed during **childhood** | Freud; unresolved conflicts and early relationships that operate outside awareness |
| **Humanistic** | a **lack of social support** and being **unable to fulfill one's potential** | Rogers (conditions of worth, need for unconditional positive regard); self-actualization, meaning growth toward one's full potential |
| **Cognitive** | **maladaptive thoughts, beliefs, attitudes, or emotions** | Beck, Ellis; distorted interpretations such as "one mistake means I am a total failure" |
| **Evolutionary** | behaviors and mental processes that **reduce the likelihood of survival** | Natural selection; a response that once helped survival can misfire in a way that harms it |
| **Sociocultural** | **maladaptive social and cultural relationships and dynamics** | Poverty, discrimination, family conflict, isolation, cultural pressures |
| **Biological** | **physiological or genetic issues** | Neurotransmitters, brain structure and activity, hormones, heredity |

### How to tell them apart

The fastest way to identify a perspective in a question is to ask **where the explanation locates the cause**:

- In **what was learned** from experiences with stimuli and consequences? → behavioral
- In the **unconscious** and **childhood**? → psychodynamic
- In **unmet needs** for support, acceptance, and growth? → humanistic
- In **how the person thinks** and interprets events? → cognitive
- In what does or does not help the organism **survive**? → evolutionary
- In **relationships, communities, and culture**? → sociocultural
- In the **brain, body, and genes**? → biological

### Two traps

- **Cognitive versus behavioral.** Both can involve learning, but the cognitive perspective is about the *content of thoughts and beliefs* ("I am worthless"), while the behavioral perspective is about *associations and consequences* (the dog bit me, so dogs now trigger fear).
- **Humanistic versus sociocultural.** Both mention other people. The humanistic perspective focuses on the individual's **unmet need** for support and growth; the sociocultural perspective focuses on **broader social and cultural dynamics** such as poverty, discrimination, or family systems.
      `
    },
    {
      id: 'psychological-disorders-overview-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Which Perspective?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A psychologist explains a client\'s intense fear of elevators by pointing out that he was once trapped in one for hours, and that every time he avoids elevators now, his anxiety drops. Which perspective does this explanation reflect?',
            options: [
              'Cognitive',
              'Psychodynamic',
              'Behavioral',
              'Evolutionary'
            ],
            correctAnswer: 2,
            explanation: 'The explanation rests on a learned association (elevator paired with a frightening experience) and on avoidance being reinforced by relief, which is the behavioral perspective. A cognitive explanation would focus on his beliefs about elevators instead.'
          },
          {
            question: 'Which explanation of a client\'s persistent hopelessness best reflects the cognitive perspective?',
            options: [
              'She interprets every setback as proof that she will always fail',
              'She grew up without warmth and acceptance from her parents',
              'She has inherited a strong family tendency toward low mood',
              'She lives in a community with few jobs and high crime rates'
            ],
            correctAnswer: 0,
            explanation: 'The cognitive perspective locates the cause in maladaptive thoughts and beliefs, such as reading every setback as proof of permanent failure. A lack of acceptance fits humanistic or psychodynamic views, inheritance is biological, and community conditions are sociocultural.'
          },
          {
            question: 'According to the AP CED, the humanistic perspective proposes that the causes of disorders focus on what?',
            options: [
              'Unconscious conflicts that began in early childhood',
              'Learned links between stimuli and responses',
              'Cultural dynamics such as poverty and discrimination',
              'Weak social support and blocked personal growth'
            ],
            correctAnswer: 3,
            explanation: 'The CED states that the humanistic perspective focuses on a lack of social support and being unable to fulfill one\'s potential. Unconscious childhood conflicts are psychodynamic, learned links are behavioral, and poverty and discrimination are sociocultural dynamics.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p3-s3-case',
      type: 'text' as const,
      content: `
## 🔍 Worked Example: One Case, Seven Explanations

**The case (hypothetical).** Jordan, 22, moved across the country for a job eight months ago. Since then, he has felt persistently sad and hopeless, has stopped calling friends, and sleeps until noon on weekends. He was laid off two months ago. His mother and an uncle have both been treated for similar long periods of low mood. Jordan says, "Nothing I do ever works out. I'm just not good enough."

Notice that the case contains clues for every perspective. Here is how each one would explain Jordan's pattern.

| Perspective | Explanation of Jordan's pattern | Evidence in the case it relies on |
|---|---|---|
| **Biological** | A genetic predisposition and differences in brain chemistry make prolonged low mood more likely | Mother and uncle had similar patterns |
| **Cognitive** | His belief that "nothing ever works out" and "I'm not good enough" turns ordinary setbacks into proof of failure, which deepens the sadness | His own statement |
| **Behavioral** | After the move, the activities that used to bring reinforcement (friends, work success) disappeared; staying in bed is reinforced because it avoids discomfort | Stopped calling friends; sleeps late |
| **Psychodynamic** | The layoff may have stirred unconscious feelings about early experiences of loss or rejection | Would require exploring his childhood history |
| **Humanistic** | Far from his support network and blocked from a meaningful career, he cannot move toward his potential and feels unaccepted | The move and the layoff |
| **Sociocultural** | Isolation in a new city, job loss, and economic pressure are social conditions that strain mental health | New city, layoff |
| **Evolutionary** | Withdrawal and low energy after loss may once have helped conserve resources, but prolonged withdrawal now reduces his chances of thriving and surviving | Withdrawal and low energy |

### Step back: what the comparison shows

1. **No single perspective uses all the evidence.** The biological account ignores his beliefs; the cognitive account ignores his family history; the sociocultural account ignores both.
2. **The explanations are not mutually exclusive.** A genetic predisposition, a pessimistic thinking style, and social isolation can all be true at once.
3. **Different perspectives suggest different questions to ask.** A biologically minded clinician asks about family history; a cognitive one asks what Jordan tells himself after a setback; a sociocultural one asks about his community and finances.

> 🔑 **AP Connection:** On the exam, a perspective question usually gives one explanation and asks you to name the perspective. Look for the **cause** the explanation emphasizes, not the symptoms. The symptoms (sadness, withdrawal) are the same in every row of the table above.
      `
    },
    {
      id: 'psychological-disorders-overview-p3-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Explanation to the Perspective** 🔎

Each sentence gives one explanation of the same pattern of intense, persistent worry. Choose the perspective it reflects.
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The worry stems from conflicts with a harsh parent that were pushed out of awareness in childhood." This reflects the _____ perspective.',
            options: ['psychodynamic', 'humanistic', 'cognitive', 'sociocultural']
          },
          {
            label: '"The worry reflects an imbalance in neurotransmitter activity and an inherited tendency toward anxiety." This reflects the _____ perspective.',
            options: ['behavioral', 'biological', 'evolutionary', 'cognitive']
          },
          {
            label: '"The worry grew as the person faced discrimination at work and pressure from an extended family to succeed." This reflects the _____ perspective.',
            options: ['humanistic', 'psychodynamic', 'sociocultural', 'behavioral']
          }
        ],
        correctAnswers: ['psychodynamic', 'biological', 'sociocultural'],
        hint1: 'Find the word that tells you where the cause is located: awareness, brain and genes, or society.',
        hint2: 'Conflicts "pushed out of awareness" are unconscious; neurotransmitters and inheritance are physiological and genetic.',
        hint3: 'Discrimination and family pressure are social and cultural dynamics, not a person\'s individual need for growth.',
        explanation: 'Unconscious childhood conflicts are psychodynamic. Neurotransmitter activity and inherited tendencies are biological. Discrimination and cultural family pressures are maladaptive social and cultural dynamics, the sociocultural perspective.'
      }
    },
    {
      id: 'psychological-disorders-overview-p3-s5-eclectic',
      type: 'text' as const,
      content: `
## 🧩 The Eclectic Approach

The CED states that **most psychologists employ an eclectic approach**, meaning they use **more than one psychological perspective** when diagnosing and treating clients.

### Why eclectic?

| Reason | Explanation |
|---|---|
| **Disorders have multiple causes** | Research rarely finds one cause; genes, thinking patterns, learning history, and social conditions usually combine |
| **Clients differ** | Two people with the same diagnosis can have very different histories, so the most useful lens differs from person to person |
| **Each perspective has blind spots** | The biological lens can miss beliefs and relationships; the cognitive lens can miss genetics; combining them covers more |
| **More options for help** | Treatment plans can draw on several approaches at once (see Treatment and Therapy for the specific methods) |

### Eclectic does not mean "anything goes"

An eclectic psychologist does not pick explanations at random. She chooses the perspectives that **fit the evidence** about a specific client and that are supported by research. In Jordan's case, a clinician might weigh his family history (biological), his self-critical beliefs (cognitive), and his isolation after the move (sociocultural), because the case contains evidence for all three.

### Worked Example: Is this approach eclectic?

**Clinician A** says every disorder comes from a chemical imbalance, so she asks only about family history and sleep.
→ **Not eclectic.** She relies on one perspective (biological) for every client.

**Clinician B** asks about family history, how the client interprets setbacks, and what support the client has at home and work, then builds an explanation from all three.
→ **Eclectic.** She combines biological, cognitive, and sociocultural or humanistic lenses.

**Clinician C** explains one client mainly through learning history and another mainly through unconscious conflict, but within each client uses only one lens.
→ **Partly.** Over many clients she uses several perspectives, but the eclectic approach usually means combining perspectives to understand **the same client**.

> 🔑 **AP Connection:** The eclectic approach (5.3.B.1) leads directly into the **biopsychosocial model** in Part 4, which formally organizes causes into biological, psychological, and sociocultural factors.
      `
    },
    {
      id: 'psychological-disorders-overview-p3-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Perspectives in Practice** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher argues that a tendency to freeze and withdraw under threat once helped humans avoid predators, but that in some people today the same response becomes so extreme that it harms their ability to work, form relationships, and thrive. Which perspective is the researcher using?',
            options: [
              'Psychodynamic',
              'Evolutionary',
              'Biological',
              'Humanistic'
            ],
            correctAnswer: 1,
            explanation: 'The argument concerns a response shaped by survival pressures that now reduces the person\'s chances of thriving, which matches the evolutionary perspective. A biological account would focus on genes or brain chemistry rather than on survival value.'
          },
          {
            question: 'A therapist asks a new client about her family history, how she interprets stressful events, and how her neighborhood and job affect her. Which term best describes this therapist\'s approach?',
            options: [
              'Behavioral',
              'Psychodynamic',
              'Biomedical',
              'Eclectic'
            ],
            correctAnswer: 3,
            explanation: 'Gathering biological, cognitive, and sociocultural information about the same client and combining them is the eclectic approach. Each of the other labels names a single lens that would leave out most of what this therapist asks.'
          },
          {
            question: 'A student claims that the cognitive and behavioral perspectives explain disorders in the same way, since both involve learning. Which response best corrects the student?',
            options: [
              'The cognitive view looks at the unconscious, and the behavioral view looks at genes',
              'The cognitive view looks at culture, and the behavioral view looks at unmet needs',
              'The cognitive view looks at beliefs, and the behavioral view looks at conditioning',
              'The cognitive view looks at survival, and the behavioral view looks at brain chemistry'
            ],
            correctAnswer: 2,
            explanation: 'The cognitive perspective focuses on maladaptive thoughts and beliefs, while the behavioral perspective focuses on maladaptive learned associations between responses and stimuli. The other pairings assign each perspective a cause that belongs to a different one.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p3-s7-next',
      type: 'text' as const,
      content: `
### 🎯 Putting It Together

| Perspective | One-line CED framing |
|---|---|
| Behavioral | Maladaptive learned associations |
| Psychodynamic | Unconscious thoughts and experiences, often from childhood |
| Humanistic | Lack of social support; unable to fulfill potential |
| Cognitive | Maladaptive thoughts, beliefs, attitudes, or emotions |
| Evolutionary | Behaviors and mental processes that reduce the likelihood of survival |
| Sociocultural | Maladaptive social and cultural relationships and dynamics |
| Biological | Physiological or genetic issues |

Most psychologists combine these in an **eclectic approach**.

**Next up — Part 4:** Two models that formally combine causes, the **biopsychosocial model** and the **diathesis-stress model**, and how to read data that tests them.
      `
    }
  ]
}
