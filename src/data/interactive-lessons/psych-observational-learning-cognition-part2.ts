export const psychObservationalPart2Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser2-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Observational & Cognitive Learning

**Part 2 of 7 — Models, Similarity, and Vicarious Conditioning**

> 🔑 **Key Concept (CED 3.9.A.1):** Social learning theory proposes that learning can occur by observation and does not have to involve personal experience with a consequence (**vicarious conditioning**). Learning can occur by copying the behavior of **models**, and **the more similar a model is, the more likely the behavior is to be learned**.

Part 1 showed THAT people learn by watching. This part asks WHEN watching is most likely to change behavior. Two factors carry most of the weight: who the model is, and what happens to the model.

### Factor 1: How Similar the Model Is

| Observer | More similar model | Less similar model | Who is more likely to be imitated? |
|----------|-------------------|--------------------|------------------------------------|
| A 9-year-old learning to skateboard | A 10-year-old at the same skate park | A 35-year-old professional skater | The 10-year-old |
| A first-year nursing student | A second-year student from the same program | A hospital chief of medicine | The second-year student |
| A teen deciding whether to vape | A friend from the same grade | An adult celebrity in an ad | The friend |

Similarity can be age, gender, background, interests, or situation. A similar model makes the behavior look like something "people like me" do.

### Factor 2: What Happens to the Model

| Term | What the observer sees | Effect on the observer |
|------|------------------------|------------------------|
| **Vicarious reinforcement** | The model is rewarded for the behavior | Observer becomes MORE likely to perform it |
| **Vicarious punishment** | The model is punished for the behavior | Observer becomes LESS likely to perform it |

The observer never receives a consequence directly; the consequence to the MODEL does the work. That is what "vicarious" means.

### 🗣️ Real-World Example

A new player on a soccer team watches a teammate her own age stay late to practice free kicks, and the coach starts the teammate in the next game. The new player begins staying late too. She has received no reward herself: a similar model was reinforced, and she learned vicariously.

> You may see a four-step list of modeling processes in other textbooks; the current AP exam does not test it by name. Focus on vicarious conditioning and model similarity.
      `
    },
    {
      id: 'obser2-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two anti-littering videos show a person being fined for littering. Middle schoolers who watch a version starring a student their own age litter less afterward than those who watch a version starring a retired adult. This difference is BEST explained by:',
            options: [
              'Model similarity, since a model like the observer makes imitation more likely',
              'Vicarious reinforcement, since the student in the video was rewarded for littering',
              'Latent learning, since the students learned about fines but showed it only later',
              'Classical conditioning, since the fine became paired with the sight of litter'
            ],
            correctAnswer: 0,
            explanation: 'Both videos show the same consequence, so the difference comes from who the model is: a model similar to the observer makes learning from that model more likely (CED 3.9.A.1). The model was punished, not reinforced, and nothing in the scenario involves hidden learning or a stimulus pairing.'
          },
          {
            question: 'A boy sees his older cousin get grounded for sneaking out at night. The boy, who has never been punished for it himself, decides not to sneak out. This is an example of:',
            options: [
              'Positive punishment, since the boy received an unpleasant consequence',
              'Vicarious punishment, since a consequence to the model reduced the behavior',
              'Negative reinforcement, since the boy avoided an unpleasant outcome',
              'Extinction, since the sneaking-out behavior stopped being reinforced'
            ],
            correctAnswer: 1,
            explanation: 'The punishment happened to the cousin, not the boy, and it still lowered the boy\'s likelihood of sneaking out, which is vicarious punishment. Positive punishment and negative reinforcement require a consequence to the learner himself, and extinction requires a behavior that was previously reinforced.'
          }
        ]
      }
    },
    {
      id: 'obser2-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Deep Dive: Modeling in Everyday Life

Observational learning works in both directions: models can teach helpful behavior and harmful behavior.

| Setting | Behavior modeled | Likely effect on observers |
|---------|------------------|----------------------------|
| A coach who calmly congratulates the other team after a loss | Good sportsmanship | Players copy the calm handshake, especially players who look up to the coach |
| An older sibling who reads every night | Reading habit | A younger sibling picks up books more often |
| A video game character rewarded with points for fighting | Aggression rewarded on screen | Possible increase in aggressive thoughts; real-world consequences usually discourage real aggression |
| A classmate praised for asking questions in class | Speaking up | Quieter students who see themselves in that classmate start asking questions |

### How Psychologists Study Modeling

| Design | What it can show | Example |
|--------|------------------|---------|
| **Experiment** | Cause and effect, because participants are randomly assigned and the model's behavior is manipulated | Children randomly assigned to watch an aggressive or a calm adult model, then observed at play |
| **Correlational study** | A relationship only, because no variable is manipulated | Survey linking hours of violent video games to self-reported aggression |
| **Naturalistic observation** | Behavior in real settings without interference | Recording how often toddlers copy older children on a playground |

> **AP Connection:** In a correlational study of media and aggression, a **third variable** (such as a hostile home environment) could drive both game choice and aggression, and **directionality** is unclear (aggressive kids may choose violent games). Only an experiment with random assignment can show that watching a model CAUSES a change.
      `
    },
    {
      id: 'obser2-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        questions: [
          {
            question: 'Learning from the consequences another person receives, without experiencing them yourself, is called ___ conditioning.',
            answer: 'vicarious',
            acceptableAnswers: ['vicarious conditioning'],
            explanation: 'Vicarious conditioning is learning from consequences delivered to a model rather than to the observer (CED 3.9.A.1).'
          },
          {
            question: 'According to the CED, the more ___ a model is to the observer, the more likely the behavior is to be learned.',
            answer: 'similar',
            acceptableAnswers: ['alike', 'like'],
            explanation: 'Model similarity increases the likelihood that an observed behavior is learned and imitated.'
          },
          {
            question: 'The person whose behavior is observed and copied in social learning theory is called the ___.',
            answer: 'model',
            acceptableAnswers: ['models', 'role model'],
            explanation: 'Observers learn by copying the behavior of models.'
          }
        ]
      }
    },
    {
      id: 'obser2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Process** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A new employee starts arriving early after seeing a coworker praised by the manager for punctuality', options: ['Vicarious reinforcement', 'Vicarious punishment', 'Positive reinforcement', 'Latent learning'] },
          { label: 'A child stops climbing the bookshelf after watching her brother fall and get scolded for it', options: ['Vicarious reinforcement', 'Vicarious punishment', 'Negative reinforcement', 'Instinctive drift'] },
          { label: 'A teen copies the study routine of a classmate in her grade rather than one recommended by a famous author', options: ['Model similarity', 'Vicarious punishment', 'Insight learning', 'Classical conditioning'] }
        ],
        correctAnswers: ['Vicarious reinforcement', 'Vicarious punishment', 'Model similarity'],
        hint1: 'The coworker, not the new employee, was rewarded.',
        hint2: 'The brother, not the child, received the consequence.',
        hint3: 'The classmate is more like the teen than the famous author is.',
        explanation: 'Praise for the coworker raised the new employee\'s punctuality (vicarious reinforcement). The brother\'s scolding lowered the child\'s climbing (vicarious punishment). Choosing the same-grade classmate as a model reflects model similarity.'
      }
    },
    {
      id: 'obser2-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Exam Strategy: Modeling Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| "Vicarious punishment is a kind of positive punishment" | Positive punishment is delivered to the LEARNER | Vicarious consequences are delivered to the MODEL |
| "Observational learning needs a reward to happen" | Learning can occur with no consequence to anyone | Consequences to the model affect whether the behavior is PERFORMED |
| "Any model is equally effective" | The CED states that similarity matters | The more similar the model, the more likely the behavior is learned |
| "A correlation between violent games and aggression proves games cause aggression" | Correlation cannot show causation | Third variables and directionality must be ruled out by an experiment |

**Quick Decision Guide:**
- Consequence happened to someone ELSE and changed the observer's behavior → **vicarious** reinforcement or punishment
- Observer copies the model most like themselves → **model similarity**
- Consequence happened to the LEARNER directly → **operant** conditioning, not vicarious

> **AP Tip:** On the multiple-choice section, the word "watched" or "saw" plus a consequence to someone else signals vicarious conditioning. Check who received the consequence before choosing an operant term.
      `
    },
    {
      id: 'obser2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A practice study randomly assigns 60 first-graders to watch a short video in which a first-grader shares crayons and is thanked, or a video in which the same child keeps the crayons. Afterward, researchers count how many crayons each child shares with a classmate. What is the independent variable?',
            options: [
              'The number of crayons each child shares with a classmate afterward',
              'The version of the video the children are shown, sharing or keeping',
              'The age and grade level of the children who take part in the study',
              'How long the video lasts for each of the children in the study'
            ],
            correctAnswer: 1,
            explanation: 'The researchers manipulate which video each child sees, so the video version is the independent variable. The number of crayons shared is the measured dependent variable, the children\'s age is a characteristic of the sample, and the video\'s length was the same for everyone.'
          },
          {
            question: 'A survey of 500 teens finds that those who report watching more online videos of risky stunts also report doing more risky stunts themselves. Which conclusion is BEST supported?',
            options: [
              'Watching stunt videos causes teens to perform more risky stunts',
              'Teens who do risky stunts are the cause of more stunt videos being posted',
              'A positive relationship links stunt-video watching and stunt performing in this sample',
              'There is no link, because survey data cannot show any relationship between variables'
            ],
            correctAnswer: 2,
            explanation: 'A survey like this is correlational, so it supports only a positive relationship between watching and doing stunts. It cannot show that watching causes stunts (a third variable such as sensation seeking could drive both, and the direction is unclear), and surveys can reveal relationships.'
          }
        ]
      }
    }
  ]
}
