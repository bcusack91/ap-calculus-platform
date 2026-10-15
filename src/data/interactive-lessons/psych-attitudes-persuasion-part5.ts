export const psychAttitudesPart5Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attitudes-persuasion-p5-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Attitudes and Persuasion

**Part 5 of 7 — Persuasion in Depth: Routes, the Halo Effect, and Sequential Requests**

> 🔑 **Key Concept:** The CED says persuasion depends on two things: the **route** a message takes (the elaboration likelihood model's central or peripheral route, with the **halo effect** as an example of the peripheral route) and **how information is presented** (foot-in-the-door and door-in-the-face). This part explains what decides the route and how to apply both ideas to new situations.

Social Influence & Conformity, Part 5, introduced the two routes. Quick reminder: on the **central route**, people think carefully about the arguments; on the **peripheral route**, they respond to surface cues. "Elaboration" means the amount of careful thought a person gives to a message's arguments.

### What decides the route? Two gates

A person takes the central route only when **both** gates are open:

1. **Motivation:** Does the person *want* to think hard about this message?
2. **Ability:** *Can* the person think hard about it right now?

If either gate is closed, persuasion depends mainly on peripheral cues.

| Factor | Pushes toward the central route when... | Pushes toward the peripheral route when... |
|--------|------------------------------------------|---------------------------------------------|
| **Motivation: personal relevance** | The issue affects the listener directly, such as a rule change at her own school this year | The issue is distant or affects other people |
| **Motivation: need for cognition** | The person enjoys effortful thinking and puzzles | The person prefers to avoid effortful thinking |
| **Ability: distraction** | The setting is quiet and attention is full | There is noise, multitasking, or a fast-scrolling feed |
| **Ability: knowledge** | The listener knows enough to judge the arguments | The topic is technical or unfamiliar |
| **Ability: time** | There is time to read and reread | There are a few seconds, as in a short video ad |
| **Ability: clarity** | The message is clear | The message is full of jargon |

### Common peripheral cues

- How attractive, likable, or famous the source is
- Credentials or confidence taken on faith
- The **number** of arguments rather than their quality
- Mood created by music, humor, or images
- Signs of popularity ("best seller," "everyone's switching")

> 🔑 **AP Connection:** Route is decided by the *receiver's* motivation and ability, not by the message alone. The same ad can take one viewer down the central route and another down the peripheral route.
      `
    },
    {
      id: 'attitudes-persuasion-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Predict the route** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'According to the elaboration likelihood model, which listener is most likely to process a persuasive message through the central route?',
            options: [
              'A junior scrolling past a clip on grading in a distant state while texting',
              'A junior hearing a plan to change her own school\'s grading policy next term',
              'A junior hearing a grading plan for her school during a noisy fire drill',
              'A junior watching a famous athlete endorse grading changes at a far school'
            ],
            correctAnswer: 1,
            explanation: 'The central route needs both motivation and ability. A policy at her own school next term is personally relevant, and nothing prevents her from paying attention. The distant issue lowers motivation, the fire drill lowers ability, and the celebrity endorsement is a peripheral cue about a topic that does not affect her.'
          },
          {
            question: 'A researcher wants to test whether reducing a listener\'s ability to think about a message pushes processing toward the peripheral route. Which manipulation fits this goal best?',
            options: [
              'Tell half the listeners that the topic will affect their own school',
              'Have half the listeners hear the message from an attractive speaker',
              'Make half the listeners track flashing lights during the message',
              'Give half the listeners a cash payment for agreeing with the message'
            ],
            correctAnswer: 2,
            explanation: 'Tracking lights while listening is a distraction, which lowers the ability to process the arguments. Telling listeners the topic affects them changes motivation, not ability, and an attractive speaker or cash payment adds a cue or incentive rather than limiting thinking.'
          },
          {
            question: 'Two friends watch the same infomercial. Ethan, who loves puzzles and debates, notices that the product claims are vague. Leo, who prefers not to think hard about ads, is impressed by the enthusiastic host. Which factor best explains why they process the message differently?',
            options: [
              'A difference in enjoyment of deep thought',
              'A difference in the quality of the arguments',
              'A difference in how attractive the host is',
              'A difference in the personal relevance of TV'
            ],
            correctAnswer: 0,
            explanation: 'Both friends saw the same message and host, so argument quality and the host\'s appeal are constant. Ethan enjoys effortful thinking and Leo avoids it, which is a difference in their motivation to think about a message (researchers call this need for cognition), one of the motivation factors in the model.'
          }
        ]
      }
    },
    {
      id: 'attitudes-persuasion-p5-s3-strength',
      type: 'text' as const,
      content: `
### 📊 Argument strength matters only on the central route

If people are thinking carefully, strong arguments should persuade and weak arguments should fail, or even backfire as listeners counterargue. If people are not thinking carefully, strong and weak arguments should have similar effects, and cues should matter instead.

**A classic test: Petty, Cacioppo, and Goldman (1981).** College students heard a message recommending that seniors be required to pass a comprehensive exam to graduate. Three things were varied:
- **Personal relevance:** the policy would start next year at their own university (high) or in ten years (low).
- **Argument quality:** the message used strong or weak arguments.
- **Source expertise:** the message was attributed to a Princeton professor or to a high school class.

**Result:** When relevance was high, argument quality drove attitudes and source expertise mattered little. When relevance was low, source expertise drove attitudes and argument quality mattered little.

### How to read an ELM results table

| | Strong arguments | Weak arguments |
|--|------------------|----------------|
| **High relevance** (central route) | Large shift toward the message | Little shift, or a shift away |
| **Low relevance** (peripheral route) | Shift depends mostly on cues | About the same shift as strong arguments |

The tell is a **gap**. A big gap between strong and weak arguments in the high-relevance row, and almost no gap in the low-relevance row, means argument quality mattered only when people were motivated to think.

### Distraction can help weak arguments

Petty, Wells, and Brock (1976) varied how distracted listeners were. As distraction increased, a **strong** message persuaded *less* because listeners could not appreciate its arguments, while a **weak** message persuaded *more* because listeners could not generate counterarguments.

### Durability: why the route matters

| Attitude change through the... | How long it lasts | Resistance to counterarguments | Prediction of behavior |
|--------------------------------|-------------------|--------------------------------|------------------------|
| **Central route** | Longer | Higher | Stronger |
| **Peripheral route** | Shorter, often fading once the cue is gone | Lower | Weaker |

This connects back to Part 1: attitudes formed through careful thought are stronger attitudes, and strong attitudes predict behavior better.
      `
    },
    {
      id: 'attitudes-persuasion-p5-s4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**What will drive the attitude?** 🔍

Choose the feature that will most influence each person's attitude.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A pharmacist compares two published reports on a drug interaction before advising her own patients. Her attitude will depend mostly on _____.',
            options: ['the quality of the arguments', 'the attractiveness of the speaker', 'the number of claims listed', 'the mood set by the music']
          },
          {
            label: 'A tired commuter half-watches a cologne ad starring a famous model on a train screen. His attitude will depend mostly on _____.',
            options: ['the quality of the arguments', 'the attractiveness of the speaker', 'the number of claims listed', 'the mood set by the music']
          },
          {
            label: 'A shopper with no time to read skims a sales page that lists "25 reasons to buy" in tiny print. Her attitude will depend mostly on _____.',
            options: ['the quality of the arguments', 'the attractiveness of the speaker', 'the number of claims listed', 'the mood set by the music']
          }
        ],
        correctAnswers: ['the quality of the arguments', 'the attractiveness of the speaker', 'the number of claims listed'],
        hint1: 'The pharmacist is highly motivated and highly knowledgeable.',
        hint2: 'The commuter has little motivation or attention, and the most noticeable cue is the model.',
        hint3: 'The shopper cannot read the reasons, but she can see how many there are.',
        explanation: 'The pharmacist has motivation and ability, so argument quality matters. The commuter is on the peripheral route, so the attractive model is the cue. The shopper also lacks the ability to process, so the sheer number of reasons acts as a peripheral cue, regardless of their quality.'
      }
    },
    {
      id: 'attitudes-persuasion-p5-s5-halo',
      type: 'text' as const,
      content: `
### ✨ The halo effect: the CED's peripheral-route example

The **halo effect** is the tendency for one positive impression of a person, often an obvious trait like attractiveness or warmth, to spill over into judgments of that person's unrelated traits. When a message comes from someone with a "halo," people may accept it because they like or admire the source, not because they evaluated the arguments. That is why the CED lists the halo effect as an example of the peripheral route.

| Evidence | What happened |
|----------|---------------|
| **Edward Thorndike (1920)** | When military officers rated their soldiers on separate qualities such as intelligence, physique, leadership, and character, the ratings were so closely related that they seemed driven by one overall impression. Thorndike named this the "halo." |
| **Nisbett and Wilson (1977)** | Students watched a videotaped interview with a college instructor who spoke with a European accent and acted either warm or cold. Students who saw the warm version rated his appearance, mannerisms, and accent as appealing; those who saw the cold version rated the same features as irritating. Students denied that his warmth had influenced those ratings. |
| **Dion, Berscheid, and Walster (1972)** | Participants judged people in photos. Physically attractive people were assumed to have more positive personality traits and happier futures, a pattern summarized as "what is beautiful is good." |

### 🔁 How information is presented: sequential requests in new settings

Foot-in-the-door and door-in-the-face were defined in Social Influence & Conformity, Part 5. The skill here is recognizing the **sequence** in an unfamiliar setting and predicting what will make it work.

**Worked analysis: a robotics club fundraiser.** The club wants parents to donate \\$25.

- **Plan A:** Ask parents to follow the club's page and share one post. A week later, ask for \\$25.
 *Sequence:* small request, then a larger one. This is **foot-in-the-door**. Agreeing to the small step leads parents to see themselves as supporters, and consistency with that self-image makes the larger request easier to accept. A delay between requests is fine.
- **Plan B:** Ask parents to sponsor the club for \\$500. When they decline, immediately ask for \\$25.
 *Sequence:* a large request that is expected to be refused, then a smaller one. This is **door-in-the-face**. The retreat looks like a concession, and the smaller request seems modest by contrast. It works best when the same person makes both requests close together.

**Decision rule:** Find the request the persuader really wants. If it comes *second and is bigger*, it's foot-in-the-door. If it comes *second and is smaller*, it's door-in-the-face.

### ⚠️ Persuasion misconceptions

| Misconception | Correction |
|---------------|------------|
| The central route means the person agrees with the message. | It means careful thinking. Careful thinkers reject weak arguments. |
| Peripheral persuasion never works. | It does change attitudes, but the change tends to be weaker and less durable. |
| More arguments always persuade more. | On the peripheral route, the number of arguments can act as a cue; on the central route, weak arguments can backfire. |
| The halo effect is only about good looks. | Any salient positive trait, such as warmth, fame, or confidence, can create a halo. |
| Both sequential techniques start with a small request. | Door-in-the-face starts with a large request that is expected to be refused. |
      `
    },
    {
      id: 'attitudes-persuasion-p5-s6-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios — Persuasion** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'In a practice survey, voters who rated a mayoral candidate\'s photo as highly attractive also rated her as more honest and more competent than voters who rated the photo as less attractive. None of the voters had read anything about her record. This pattern best illustrates',
            options: [
              'central-route processing',
              'downward social comparison',
              'the halo effect',
              'the foot-in-the-door technique'
            ],
            correctAnswer: 2,
            explanation: 'One positive impression, her appearance, spilled over into judgments of unrelated traits like honesty and competence. That is the halo effect. Central-route processing would require evaluating information about her record, which none of the voters had read.'
          },
          {
            question: 'A student council member asks the principal to cancel classes for a full day of spirit events. The principal refuses. The student immediately asks instead for a 30-minute pep rally during homeroom, and the principal agrees. Which technique did the student use?',
            options: [
              'Door-in-the-face technique',
              'Foot-in-the-door technique',
              'Upward social comparison',
              'Effort justification'
            ],
            correctAnswer: 0,
            explanation: 'The student opened with a large request that was likely to be refused and then retreated to the smaller request she really wanted. That is door-in-the-face. Foot-in-the-door runs the opposite way, from a small request to a larger one.'
          },
          {
            question: 'In a practice ELM experiment, attitude scores rose sharply after strong arguments and dropped after weak arguments in the high-relevance condition. In the low-relevance condition, scores were nearly identical for strong and weak arguments. Which conclusion is best supported?',
            options: [
              'Argument quality shaped attitudes equally at both relevance levels.',
              'High relevance made participants rely more on peripheral cues.',
              'Weak arguments persuaded more people than strong arguments did.',
              'Only under high relevance did argument quality shape attitudes.'
            ],
            correctAnswer: 3,
            explanation: 'The gap between strong and weak arguments appears only under high relevance, which is the central-route pattern. Under low relevance, argument quality made almost no difference, so it did not matter equally at both levels, and high relevance increased attention to arguments rather than to cues.'
          }
        ]
      }
    }
  ]
}
