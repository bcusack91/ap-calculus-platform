export const mcatSocialPsychPart1Data = {
  topicSlug: 'mcat-social-psychology-mcat',
  sections: [
    {
      id: 'sp1-intro',
      type: 'text' as const,
      content: `# Social Psychology

**Part 1 of 5 — Attitudes & Cognitive Dissonance**

An **attitude** is a learned evaluation (favorable/unfavorable) of a person, object, or idea, with three components (the **ABC model**):

| Component | Meaning | Example |
|-----------|---------|---------|
| **A**ffective | Feelings | "Exercise makes me anxious" |
| **B**ehavioral | Actions/tendencies | "I avoid the gym" |
| **C**ognitive | Beliefs | "Exercise is exhausting" |

### When Do Attitudes Predict Behavior?

Attitudes best predict behavior when they are: **specific** to the behavior, **strong/stable**, **accessible** (easily recalled), and formed by **direct experience**, and when **situational pressures are weak**.

### Routes to Persuasion — Elaboration Likelihood Model (ELM)

| Route | Processing | Persuaded by | Durability |
|-------|------------|--------------|------------|
| **Central** | Careful, high effort | Quality of arguments | Lasting, resistant |
| **Peripheral** | Superficial, low effort | Cues (attractiveness, # of arguments, source) | Temporary |

Motivation + ability to think → central route. Distraction or low involvement → peripheral route.

### Cognitive Dissonance (Festinger)

$$\\text{Conflicting cognitions} \\to \\text{psychological discomfort} \\to \\text{drive to reduce it}$$

People resolve dissonance by: **changing the attitude**, **changing the behavior**, or **adding a justification** (rationalization).

**Counterintuitive finding:** SMALLER incentives produce MORE attitude change. With a small reward, there's no external justification for the behavior, so people change their internal attitude to reduce dissonance (Festinger & Carlsmith \\$1 vs. \\$20 study).`
    },
    {
      id: 'sp1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Attitudes & Dissonance

**Problem 1.** Ad 1 for a drug shows a famous doctor but gives no data, while background music distracts viewers. Ad 2 lists clinical trial results to an attentive audience.

- **(a)** Which route to persuasion does Ad 1 target?
- **(b)** Which route does Ad 2 target?
- **(c)** Which ad produces the more lasting attitudes, and why?

**(a) Ad 1.** The peripheral route. A celebrity cue plus distraction (low ability to process) means viewers respond to surface cues, not to arguments.

**(b) Ad 2.** The central route. Substantive evidence plus an attentive audience (motivation and ability) allows careful, high-effort processing of argument quality.

**(c) Durability.** Ad 2. Central-route attitudes are durable and resistant; the peripheral-route attitudes from Ad 1 are temporary and easily reversed. Distraction and low involvement push people to cues; motivation and ability enable central processing.

**Problem 2.** Children are told not to play with an attractive toy while the adult leaves. Group A is warned of a severe punishment; Group B gets only a mild warning. No child touches the toy. Weeks later, they rate how much they like it.

- **(a)** Which group has more external justification for not playing with the toy?
- **(b)** Which group feels more dissonance?
- **(c)** Which group comes to like the toy less?
- **(d)** Which dissonance-reduction strategy does that group use?

**(a) Justification.** Group A. "I'd have been punished" is ample external justification, so resisting the toy creates little dissonance.

**(b) Dissonance.** Group B. A mild warning cannot fully explain the restraint, so the clash between "I wanted the toy" and "I didn't play with it" stays uncomfortable.

**(c) Liking.** Group B. Group A has little dissonance and so little reason to change its view; Group B resolves its stronger dissonance by devaluing the toy (Aronson & Carlsmith's forbidden-toy study).

**(d) Strategy.** Changing the attitude: "I didn't really want it." The behavior is done and no external excuse is available, so the attitude moves. This is the same insufficient-justification result as the \\$1 vs. \\$20 study, with a threat in place of a reward.

**Problem 3.** A smoker who knows smoking causes cancer keeps smoking but says, "My grandfather smoked and lived to 90."

- **(a)** Which two cognitions are in conflict?
- **(b)** Has the smoker changed the behavior or the attitude?
- **(c)** Which dissonance-reduction strategy is the smoker using?

**(a) The conflict.** "Smoking is harmful" and "I smoke." Holding both creates dissonance.

**(b) Neither.** The smoker does not quit (no behavior change) and does not revise the belief that smoking is harmful (no attitude change).

**(c) Adding a justification.** The grandfather story is a new consonant cognition that makes the behavior feel acceptable: rationalization, the third classic route besides changing the attitude or the behavior.`
    },
    {
      id: 'sp1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Attitudes & Dissonance** 🎯`,
      exercise: {
        questions: [
          {
            question: `In Festinger & Carlsmith's study, participants paid only \\$1 to lie that a boring task was fun rated the task as MORE enjoyable than those paid \\$20. This is because:`,
            options: [`The $1 group shifted its attitude to reduce dissonance`, `The $1 group was paid enough to believe its own lie`, `The $20 group felt more dissonance about lying`, `The $20 group had too little justification to lie`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The \\$20 group had a strong external justification ("I lied for the money"), so little dissonance and no attitude change. The \\$1 group couldn't justify lying externally, creating dissonance they resolved by genuinely deciding the task was fun. Less external justification → MORE internal attitude change.`
          },
          {
            question: `A consumer carefully weighs the technical specifications of two laptops before buying. According to the elaboration likelihood model, this person is using the:`,
            options: [`Central route to persuasion`, `Peripheral route to persuasion`, `Foot-in-the-door technique`, `Mere exposure effect`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The central route involves high-effort, careful scrutiny of argument QUALITY (here, technical specs), and it produces durable, resistant attitudes. The peripheral route relies on surface cues like a celebrity endorsement or sheer number of arguments and yields temporary attitude change.`
          },
          {
            question: `Attitudes are MOST likely to predict behavior when the attitude is:`,
            options: [`Specific, strong, and from direct experience`, `Broad, general, and learned secondhand from others`, `Weak, recently formed, and held under social pressure`, `Purely cognitive, abstract, and lacking affect`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The attitude–behavior link is strongest when the attitude is specific to the behavior, strong and accessible, and acquired through direct experience, AND when external situational pressures are weak. Broad, weak, or secondhand attitudes and strong situational pressure all weaken the link, and a purely cognitive attitude is not one of the recognized conditions that make attitudes predictive.`
          }
        ]
      }
    },
    {
      id: 'sp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **The ABC model.** An attitude has affective (feelings), behavioral (actions) and cognitive (beliefs) components.
- **When attitudes predict behavior.** When they are specific, strong, accessible and from direct experience, and situations press weakly.
- **Two routes to persuasion.** The central route weighs argument quality and lasts; the peripheral route follows cues and fades.
- **Resolving dissonance.** Conflicting cognitions ease by changing attitude or behavior or adding a justification; less excuse, more attitude change.

**Common traps**

- **Bigger reward, bigger change.** Backwards: a large incentive justifies the act externally, so a SMALL one moves the attitude more.
- **Counting arguments as central.** The sheer number of arguments is a peripheral cue; the central route weighs their quality.
- **Assuming cue-driven change lasts.** Attitudes won by celebrity or attractiveness are temporary; central-route attitudes resist change.
- **Missing the third strategy.** Keeping the behavior and adding a justifying belief is rationalization, not attitude change.`
    }
  ]
};
