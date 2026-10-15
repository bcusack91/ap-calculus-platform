export const psychAttitudesPart1Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attitudes-persuasion-p1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Attitudes and Persuasion

**Part 1 of 7 — What Attitudes Are and How They Form**

> 🔑 **Key Concept:** An **attitude** is a learned evaluation, favorable or unfavorable, of a person, object, group, or idea. Attitudes bundle feelings, beliefs, and readiness to act, and they are built by the same learning processes you studied in Unit 3.

### What an attitude includes

| Component | Question it answers | Example: a student's attitude toward a later school start time |
|-----------|--------------------|-----------------------------------------------------------------|
| **Affect** (feeling) | How do I feel about it? | "I'd be so relieved. Mornings are miserable." |
| **Behavior** (action tendency) | What am I inclined to do about it? | Signing the petition that supports the change |
| **Cognition** (belief) | What do I think is true about it? | "Teens get more sleep when school starts later." |

Some textbooks call this the ABC framing. The CED does not require the label, but it shows why an attitude can be changed through feelings, through thinking, or through behavior. Those are the three doors this whole topic keeps opening.

### Explicit and implicit attitudes

- An **explicit attitude** is one you know you hold and can report: "I like electric cars."
- An **implicit attitude** is one a person holds but may be unaware of or may not acknowledge. It shows up in fast, automatic reactions rather than in what the person says.

Implicit attitudes, the speeded tasks used to measure them, and their role in stereotypes and prejudice are taught in the **Group Behavior and Prejudice** topic. This topic focuses on how attitudes form, persist and change.

### Where this topic sits in the CED

| CED topic | What this lesson covers | Part |
|-----------|-------------------------|------|
| 4.1 Attribution | Explanatory style, locus of control | 2 |
| 4.1 Person perception | Mere exposure, self-fulfilling prophecy, social comparison, relative deprivation | 3 |
| 4.2 Attitude formation and change | Belief perseverance, confirmation bias, cognitive dissonance in depth | 4 |
| 4.3 Persuasion | What decides the persuasion route, the halo effect, sequential requests | 5 |
| Science practices | AAQ and EBQ practice on attitude research | 6 |
| All of the above | Synthesis review | 7 |

> 📌 The Social Influence & Conformity topic already defines the attribution biases, the two routes of the elaboration likelihood model, and the basic cognitive dissonance study. This lesson builds on those definitions instead of repeating them.
      `
    },
    {
      id: 'attitudes-persuasion-p1-s2-formation',
      type: 'text' as const,
      content: `
### 📚 How attitudes form: five learning routes

Nobody is born liking a sports team or distrusting a brand. Attitudes are learned, and Unit 3 gives you the mechanisms.

| Route | How it builds an attitude | Example |
|-------|---------------------------|---------|
| **Classical conditioning** | A neutral object is repeatedly paired with something that already produces a feeling, until the object alone produces that feeling | A sports drink keeps appearing in ads next to roaring crowds and game-winning shots, and the drink itself starts to feel exciting |
| **Operant conditioning** | Expressing or acting on an attitude is followed by reinforcement or punishment, so that attitude is voiced more or less often | A student who praises the debate club gets approving nods from friends and starts saying it more |
| **Observational learning** | People adopt attitudes they see modeled, especially by admired or similar models | A child copies an older sibling's excitement about trips to the library |
| **Direct experience** | Personal encounters produce evaluations, and these attitudes tend to be strong | After one great lab partner, a student decides group projects are worth it |
| **Repeated exposure** | Encountering a stimulus again and again tends to increase liking, even with no reward (the mere exposure effect, Part 3) | A song you shrugged at the first time grows on you after hearing it on the bus every morning |

### Worked example: tracing one attitude

**Situation:** Dev, a high school junior, is a devoted fan of his town's minor-league soccer club. Where did that attitude come from?

**Step 1 — Look for pairings (classical conditioning).** As a child, Dev went to games with his grandfather. The club's colors and chants were paired with warm family time, so the club itself now produces a good feeling.

**Step 2 — Look for models (observational learning).** He watched his grandfather cheer, wear the scarf, and talk about players with affection.

**Step 3 — Look for consequences (operant conditioning).** At school, friends reward Dev's loyalty with inside jokes and invitations to watch parties.

**Step 4 — Look for repetition (mere exposure).** The club's logo is on billboards, buses, and the local diner's walls.

**Step 5 — Predict.** Dev's attitude was formed through direct experience, is personally important, and is expressed often. Those features make it a **strong attitude**, so it should predict his behavior well (buying tickets, defending the club online).

> 🔑 **AP Connection:** When a free-response question asks how an attitude formed, name the learning process and point to the specific detail that shows it: the pairing, the reinforcement, or the model. "He learned it" earns nothing; "the club was repeatedly paired with time with his grandfather, an example of classical conditioning" does.
      `
    },
    {
      id: 'attitudes-persuasion-p1-s3-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Where did the attitude come from?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Each time a streaming service shows its logo, a few seconds of a song most viewers already love plays with it. After months of this, many viewers feel a small lift in mood when they see the logo by itself. Which learning process best explains the new attitude?',
            options: [
              'Operant conditioning, with the logo as a reinforcer for watching',
              'Observational learning, with viewers copying how other fans react',
              'Classical conditioning, with the logo as a conditioned stimulus',
              'Cognitive dissonance, with viewers justifying their monthly fees'
            ],
            correctAnswer: 2,
            explanation: 'The logo was neutral until it was repeatedly paired with a song that already produced a good feeling, so it now produces that feeling on its own. That is a conditioned stimulus in classical conditioning. Nothing in the scenario reinforces a behavior, shows a model, or involves an inconsistency between actions and attitudes.'
          },
          {
            question: 'When Priya says at dinner that recycling is pointless, her parents frown and change the subject. When she mentions that she started sorting her trash at school, they praise her warmly. Over the next year, Priya voices support for recycling more and more often. Which process best accounts for this change?',
            options: [
              'Mere exposure to recycling messages at home',
              'Operant conditioning of her spoken opinions',
              'Classical conditioning of trash to praise',
              'A self-fulfilling prophecy by her parents'
            ],
            correctAnswer: 1,
            explanation: 'Priya\'s statements are followed by consequences: disapproval for one view and praise for the other. Reinforcement makes the praised view more frequent, which is operant conditioning. Mere exposure involves repetition without consequences, and the praise follows her statements rather than being paired with an object.'
          },
          {
            question: 'A seventh grader starts saying he "can\'t stand" a certain fast-food chain after watching his favorite online creator mock it in several videos. He has never eaten there. Which source of attitude formation is most clearly at work?',
            options: [
              'Direct experience with the restaurant chain',
              'Repeated exposure that increased his liking',
              'Reinforcement from the restaurant\'s owners',
              'Observational learning from an admired model'
            ],
            correctAnswer: 3,
            explanation: 'He adopted the attitude by watching someone he admires express it, which is observational learning. He has no direct experience with the chain, and repeated exposure would be expected to increase liking, not produce dislike.'
          }
        ]
      }
    },
    {
      id: 'attitudes-persuasion-p1-s4-predict',
      type: 'text' as const,
      content: `
### 🔍 When do attitudes predict behavior?

You might expect people to act on their attitudes all the time. They often don't. A student can believe that cheating is wrong and still copy homework when the whole group chat is sharing answers. Research points to a few conditions that make the attitude-behavior link stronger.

| The link is STRONGER when... | Why | Example |
|------------------------------|-----|---------|
| **The attitude is strong**: formed through direct experience, personally important, and expressed often | Strong attitudes come to mind quickly and are ready to guide choices | A student who has volunteered at an animal shelter for years reliably signs pet-adoption petitions |
| **The attitude is specific to the behavior** | A general attitude predicts general patterns; a specific attitude predicts the specific act | "I care about my health" predicts little about tomorrow's breakfast; "I like eating oatmeal before practice" predicts a lot |
| **Outside pressures are weak** | Norms and situational pressure can override private attitudes (connects to conformity) | A student who dislikes vaping may still try it at a party where everyone is doing it |
| **The person is reminded of the attitude** | Thinking about or stating an attitude makes it more accessible right before acting | Saying "I think the ban is unfair" out loud just before deciding whether to sign a petition against it |

### Behavior shapes attitudes too

The arrow also points the other way. When people act first, their attitudes often shift to match the action:

- After agreeing to a small request, people see themselves as supporters and agree to larger ones (foot-in-the-door, Part 5).
- After acting against their attitudes with little outside justification, people feel **cognitive dissonance** and often adjust the attitude (Part 4).
- After repeatedly playing a role, such as team captain, people often come to hold the attitudes that go with it.

> 🔑 **AP Connection:** If an exam item asks why someone acted against a stated attitude, check the four conditions in the table. The answer is usually a weak or general attitude, or a strong situational pressure, not "the person was lying about the attitude."
      `
    },
    {
      id: 'attitudes-persuasion-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Will the attitude predict the behavior?** 🔍

For each person, choose what the attitude is most likely to do.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lena has volunteered at a food bank every month for three years and says hunger relief matters deeply to her. When her school runs a canned-food drive, her attitude is most likely to _____.',
            options: ['predict the behavior well', 'lose out to social pressure', 'be too general to guide the act', 'be held only implicitly']
          },
          {
            label: 'Omar says he "supports the environment." Whether he bikes to school instead of getting a ride on Tuesday is hard to forecast from that attitude, because it is likely to _____.',
            options: ['predict the behavior well', 'lose out to social pressure', 'be too general to guide the act', 'be held only implicitly']
          },
          {
            label: 'Jada privately thinks a team prank is cruel, but every teammate is cheering it on during practice. In that moment her attitude is most likely to _____.',
            options: ['predict the behavior well', 'lose out to social pressure', 'be too general to guide the act', 'be held only implicitly']
          }
        ],
        correctAnswers: ['predict the behavior well', 'be too general to guide the act', 'lose out to social pressure'],
        hint1: 'Lena\'s attitude came from years of direct experience and is personally important.',
        hint2: 'Omar\'s attitude is about "the environment" in general, while the behavior is one specific act on one day.',
        hint3: 'Jada is surrounded by people who all approve of the prank.',
        explanation: 'Lena holds a strong attitude formed through direct experience, so it should predict her behavior. Omar\'s attitude is general, so it predicts general patterns better than one specific act. Jada faces strong situational pressure, which can override even a sincere private attitude.'
      }
    },
    {
      id: 'attitudes-persuasion-p1-s6-misconceptions',
      type: 'text' as const,
      content: `
### ⚠️ Common misconceptions about attitudes

| Misconception | Correction |
|---------------|------------|
| An attitude is just an opinion you state. | Attitudes include feelings and action tendencies, and implicit attitudes may never be stated at all. |
| Attitudes always come first, and behavior follows. | Behavior also shapes attitudes, as cognitive dissonance and foot-in-the-door show. |
| Seeing something more always makes people like it more. | Mere exposure works best for neutral or mildly positive stimuli, and too much repetition can wear liking out (Part 3). |
| A general attitude predicts any specific act. | Attitudes predict best when they match the behavior's level of specificity. |
| Attitudes are only learned through direct experience. | Conditioning, observation, and repetition can all build attitudes toward things a person has never encountered. |

### Studying attitudes scientifically

Because attitudes are internal, researchers must **operationally define** them. Common choices:

- A rating scale ("How favorable are you toward the new policy, from 1 to 9?")
- A behavior that reflects the attitude (signing a petition, donating money)
- Reaction times in a speeded task (for implicit attitudes; see Group Behavior and Prejudice)

Most real-world attitude data are **correlational**: researchers measure an attitude and a behavior and see whether they move together. A correlation shows that the two are related, not which one causes the other.
      `
    },
    {
      id: 'attitudes-persuasion-p1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Attitude Research** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher surveys 200 students about how much they like the school cafeteria and then records how many times each student buys lunch there over a month. She finds a moderate positive correlation. Which conclusion is best supported by her data?',
            options: [
              'Students who like the cafeteria more tend to buy lunch there more often.',
              'Liking the cafeteria causes students to buy lunch there more often.',
              'Buying lunch more often causes students to like the cafeteria more.',
              'Liking the cafeteria and buying lunch there are unrelated.'
            ],
            correctAnswer: 0,
            explanation: 'A positive correlation means higher liking goes with more purchases, so the safe conclusion describes that relationship. The two causal statements go beyond correlational data, since either direction is possible and a third variable could explain both. A moderate positive correlation is not the absence of a relationship.'
          },
          {
            question: 'For years, a 10-year-old has watched her older brother read science fiction novels and get praised by their parents for it. She has now read just one such book, yet she says she loves the genre. Which process best explains how her attitude formed?',
            options: [
              'Cognitive dissonance reduction',
              'Observational learning',
              'Belief perseverance effect',
              'Upward social comparison'
            ],
            correctAnswer: 1,
            explanation: 'She watched a model being reinforced for an activity and adopted a favorable attitude toward it with almost no direct experience, which is observational learning. No inconsistency between her actions and beliefs, discredited belief, or self-evaluation against someone better off is described.'
          }
        ]
      }
    }
  ]
}
