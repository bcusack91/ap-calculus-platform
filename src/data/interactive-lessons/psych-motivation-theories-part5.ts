export const psychMotivationPart5Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motivation-theories-p5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Motivation Theories

**Part 5 of 7 — Lewin's Motivational Conflicts**

You have been accepted to two great colleges. Or you must choose between cleaning the garage and weeding the yard. Or you really want to ask someone to prom but dread hearing "no." Each situation feels different, and Kurt Lewin's theory explains why.

### The Theory

The CED states that **Lewin's motivational conflicts theory proposes that choices create conflicts one must resolve as the basis of motivation.** Psychologist Kurt Lewin described behavior as the result of forces pulling a person toward some goals and pushing them away from others.

Two building blocks:

| Term | Meaning |
|------|-----------|
| **Approach** | A pull **toward** a goal that has attractive features |
| **Avoidance** | A push **away from** a goal that has unattractive features |

A **conflict** arises when these tendencies compete. The CED names three types.

### 📚 The Three Conflict Types

| Conflict type | Structure | Example | What it typically feels like |
|------|-----------|-----------|-----------|
| **Approach-approach** | **Two attractive** options; you can choose only one | Two colleges you love both offer you a spot | Pleasant overall; often resolved fairly quickly, though high stakes can still make it stressful |
| **Avoidance-avoidance** | **Two unattractive** options; you must choose one | Study all weekend for a dull exam, or fail it | Unpleasant; people often delay, waver between options or try to escape both |
| **Approach-avoidance** | **One** goal that has **both** attractive and unattractive features | Asking someone to prom: a possible "yes," but also possible rejection | Ambivalence; people move toward the goal, then hesitate or back off as the downsides come into focus |

### The Counting Rule

To classify any conflict, ask two questions:

1. **How many goals or options are there?**
2. **Is each one attractive, unattractive or both?**

| Number of goals | Features | Conflict |
|------|-----------|-----------|
| Two | Both attractive | Approach-approach |
| Two | Both unattractive | Avoidance-avoidance |
| One | Attractive **and** unattractive | Approach-avoidance |

Real decisions are often messier: you may weigh two options that each have pros and cons. AP questions are written so that one of the three CED types clearly fits; look for the features the scenario **emphasizes**.
      `
    },
    {
      id: 'motivation-theories-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Rosa has a sore tooth. She hates going to the dentist, but she also hates the constant ache and knows it will get worse. Which conflict does she face?',
            options: [
              'Approach-approach',
              'Avoidance-avoidance',
              'Approach-avoidance',
              'Drive-reduction'
            ],
            correctAnswer: 1,
            explanation: 'Rosa must choose between two unpleasant options, a dentist visit and continuing pain, which is an avoidance-avoidance conflict. Neither option attracts her, and drive reduction is a different theory, not a type of Lewin conflict.'
          },
          {
            question: 'Eli has always wanted a dog, but he knows a puppy will mean early walks, chewed shoes and vet bills. He keeps visiting the shelter and then leaving without adopting. Which conflict and behavior pattern does this best illustrate?',
            options: [
              'An approach-avoidance conflict, which tends to produce wavering about one goal',
              'An approach-approach conflict, which ends as soon as one of two options is chosen',
              'An avoidance-avoidance conflict, which tends to produce attempts to escape both',
              'An approach-approach conflict, which tends to produce wavering about two options'
            ],
            correctAnswer: 0,
            explanation: 'Adopting a dog is one goal with both attractive and unattractive features, so Eli faces an approach-avoidance conflict, and his repeated visits and retreats are the wavering it typically causes. Approach-approach involves two attractive goals, and avoidance-avoidance involves two unattractive ones.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p5-s3-worked',
      type: 'text' as const,
      content: `
### 🔬 Worked Cases: Applying the Counting Rule

**Case 1.** *Nadia is offered two summer jobs: a paid internship at a design firm and a camp counselor job with her best friends. She is excited about both but can take only one.*

- Goals: **two**. Features: **both attractive**.
- Conflict: **approach-approach.** Once she picks, the conflict ends. She may briefly second-guess the choice, but she gains something good either way.

**Case 2.** *Tyler must either give a speech in front of the whole school or take a zero on the assignment. He dreads both.*

- Goals: **two**. Features: **both unattractive**.
- Conflict: **avoidance-avoidance.** Expect procrastination and attempts to "leave the field," such as asking to be excused or hoping the assembly is canceled.

**Case 3.** *Grace wants to try out for the varsity soccer team. Making the team would be thrilling, but tryouts are grueling and she is afraid of being cut in front of her friends.*

- Goals: **one** (trying out). Features: **attractive and unattractive**.
- Conflict: **approach-avoidance.** From a distance, the goal looks appealing; as tryouts approach, her fears often loom larger and she may consider backing out.

**Case 4 (a trap).** *Marco must choose between two used cars. One is cheap but unreliable. The other is reliable but expensive.*

- Goals: **two**, and **each** has pros and cons. This is more complex than any single CED type, which is why AP items avoid it or emphasize one dominant pattern. If a question stressed only that he dislikes both prices, avoidance-avoidance would fit best; if it stressed that each car is exciting, approach-approach would fit best.

### Why Approach-Avoidance Produces Wavering

When a goal has both good and bad features, both tendencies get stronger as you get closer to it. Classic research on approach-avoidance found that the push away from the bad features tends to grow faster than the pull toward the good ones as the moment of decision nears. That is why people sign up, then nearly cancel; walk up to the shelter, then walk out; draft the text, then delete it.

> **AP Connection:** Motivational conflicts are a common source of stress. The Emotion and Stress topic covers how people cope; here, your job is to classify the conflict and predict the behavior it tends to produce.
      `
    },
    {
      id: 'motivation-theories-p5-s4-classify',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Conflict** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A senior must pick one elective, and both the art studio course and the creative writing course sound amazing to him', options: ['Approach-approach', 'Avoidance-avoidance', 'Approach-avoidance', 'Not a motivational conflict'] },
          { label: 'A student wants to post her song online for the first time but fears classmates will mock it', options: ['Approach-approach', 'Avoidance-avoidance', 'Approach-avoidance', 'Not a motivational conflict'] },
          { label: 'A patient must either take a medication with unpleasant side effects or put up with painful migraines', options: ['Approach-approach', 'Avoidance-avoidance', 'Approach-avoidance', 'Not a motivational conflict'] }
        ],
        correctAnswers: ['Approach-approach', 'Approach-avoidance', 'Avoidance-avoidance'],
        hint1: 'Two electives, both attractive, only one allowed.',
        hint2: 'Posting the song is one goal with both an upside and a downside.',
        hint3: 'Side effects and migraines are two unpleasant options.',
        explanation: 'Two appealing electives create an approach-approach conflict. Posting the song is a single goal with attractive and unattractive features, an approach-avoidance conflict. Choosing between side effects and migraines means picking the lesser of two unpleasant options, an avoidance-avoidance conflict.'
      }
    },
    {
      id: 'motivation-theories-p5-s5-compare',
      type: 'text' as const,
      content: `
### 📚 Putting the Theories Side by Side

You now know every motivation theory in CED Topic 4.6.A. Each answers a different question, so the skill the exam rewards is **choosing the theory that fits the scenario**.

| Theory | Core claim | Signal words in a scenario | Best at explaining |
|------|-----------|-----------|-----------|
| **Instincts** | Innate, fixed patterns in many non-human animals; humans do not seem to show them | Every member of a species; unlearned; triggered by a specific cue | Nest building, web spinning, species-typical displays |
| **Drive-reduction theory** | Behavior reduces drives from physical needs and restores homeostasis | Hungry, thirsty, cold; "until the need was met" | Eating, drinking, temperature regulation |
| **Arousal theory** | People seek an optimal level of arousal (Yerkes-Dodson law) | Bored and restless; overwhelmed; performance under pressure | Curiosity, avoiding monotony, performance at different arousal levels |
| **Sensation-seeking theory** | People differ in their need for varied, novel experiences | Thrills, novelty, restlessness with routine, compared across people | Extreme sports, adventurous travel, individual differences in risk |
| **Self-determination theory** | Motivation can be intrinsic or extrinsic; supporting autonomy, competence and relatedness builds intrinsic motivation | Enjoys it for its own sake; feels pressured or controlled | Long-term engagement, why some settings kill interest |
| **Incentive theory** | Outside rewards pull behavior | Bonus, grade, prize, fine, tempting food | Behavior with no physical need behind it |
| **Lewin's motivational conflicts** | Choices create conflicts that must be resolved | Two good options, two bad options, one option with pros and cons | Decision difficulty, wavering, procrastination |

### 🎯 Misconceptions Across the Topic

| Misconception | Correction |
|------|-----------|
| "Humans have instincts like animals do" | The CED says humans do not seem to demonstrate instinctual behavior or mental processes |
| "A need and a drive are the same thing" | A need is the biological deprivation; a drive is the tension it produces |
| "More arousal always means better performance" | Performance peaks at a moderate level, and the peak is lower for complex tasks |
| "Sensation seekers are just reckless" | High sensation seekers also choose healthy outlets such as travel, creative work and demanding careers |
| "Any reward kills intrinsic motivation" | The overjustification effect mainly occurs with expected, tangible rewards for tasks already enjoyed |
| "Approach-avoidance means choosing between a good and a bad option" | Approach-avoidance is **one** goal with both good and bad features |
| "Avoidance-avoidance is the same as having no choice" | The person must choose, but both options are unpleasant |
      `
    },
    {
      id: 'motivation-theories-p5-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'Which scenario is the clearest example of an approach-avoidance conflict?',
            options: [
              'Choosing between a beach trip and a ski trip, both of which sound like fun',
              'Choosing between mowing the lawn and cleaning the basement this weekend',
              'Wanting to run for class president while dreading the public speeches it requires',
              'Choosing between a strict summer school class and repeating the course next year'
            ],
            correctAnswer: 2,
            explanation: 'Running for class president is a single goal with an attractive feature (the office) and an unattractive one (the speeches), which defines approach-avoidance. The trips are two attractive options, while the chores and the two summer school choices are pairs of unattractive options.'
          },
          {
            question: 'A researcher surveys 200 students and finds that those who report more avoidance-avoidance conflicts in the past month also report more procrastination. Which conclusion is most appropriate?',
            options: [
              'Avoidance-avoidance conflicts cause students to procrastinate',
              'Students higher on one measure tend to be higher on the other',
              'Procrastinating is what creates avoidance-avoidance conflicts',
              'The two variables are unrelated because the study was a survey'
            ],
            correctAnswer: 1,
            explanation: 'A survey shows a correlation: the two variables tend to rise together. Without manipulating conflicts and randomly assigning students, the study cannot show that conflicts cause procrastination or the reverse, and a survey can still reveal a real relationship.'
          },
          {
            question: 'A teenager stays up late playing a video game she loves, even though she is not bored and has no physical need driving the behavior, and her parents offer no reward for it. Which concept best explains why she keeps playing?',
            options: [
              'Incentive theory',
              'Intrinsic motivation',
              'Drive-reduction theory',
              'Lewin\'s conflict theory'
            ],
            correctAnswer: 1,
            explanation: 'She plays because the activity itself is enjoyable, which is intrinsic motivation as described by self-determination theory. No outside reward is offered, no physical need is being reduced, and the scenario describes no conflict between choices.'
          }
        ]
      }
    }
  ]
}
