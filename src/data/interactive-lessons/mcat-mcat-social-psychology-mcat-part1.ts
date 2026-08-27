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
      id: 'sp1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Attitudes & Dissonance** 🎯`,
      exercise: {
        questions: [
          {
            question: `In Festinger & Carlsmith's study, participants paid only \\$1 to lie that a boring task was fun rated the task as MORE enjoyable than those paid \\$20. This is because:`,
            options: [`The $1 group had insufficient external justification, so they changed their attitude to reduce dissonance`, `The $1 group was paid enough to believe the lie`, `The $20 group experienced more dissonance`, `Money always increases attitude change`],
            correctAnswer: 0,
            explanation: `The \\$20 group had a strong external justification ("I lied for the money"), so little dissonance and no attitude change. The \\$1 group couldn't justify lying externally, creating dissonance they resolved by genuinely deciding the task was fun. Less external justification → MORE internal attitude change.`
          },
          {
            question: `A consumer carefully weighs the technical specifications of two laptops before buying. According to the elaboration likelihood model, this person is using the:`,
            options: [`Central route to persuasion`, `Peripheral route to persuasion`, `Foot-in-the-door technique`, `Mere exposure effect`],
            correctAnswer: 0,
            explanation: `The central route involves high-effort, careful scrutiny of argument QUALITY (here, technical specs), and it produces durable, resistant attitudes. The peripheral route relies on surface cues like a celebrity endorsement or sheer number of arguments and yields temporary attitude change.`
          },
          {
            question: `Attitudes are MOST likely to predict behavior when the attitude is:`,
            options: [`Specific, strong, and formed through direct experience`, `Vague and recently learned secondhand`, `Held under strong situational pressure`, `Purely cognitive with no affective component`],
            correctAnswer: 0,
            explanation: `The attitude–behavior link is strongest when the attitude is specific to the behavior, strong and accessible, and acquired through direct experience, AND when external situational pressures are weak. Vague attitudes or strong situational constraints weaken the link.`
          }
        ]
      }
    },
    {
      id: 'sp1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Attitudes & Dissonance

<details>
<summary><b>Example 1: Predict the direction of attitude change from incentive size</b></summary>

**Question:** Two groups argue a position they privately disagree with. Group A is paid $50; Group B is paid $2. Which group shifts its private attitude MORE toward the argued position, and why?

**Solution:**
1. Counterattitudinal behavior creates dissonance.
2. Group A has ample external justification ("I did it for $50") → little dissonance → little attitude change.
3. Group B lacks sufficient justification → strong dissonance → resolves it by shifting their PRIVATE attitude toward the position. ✓

**MCAT key:** Insufficient justification → greater internal attitude change. This is the signature dissonance result.
</details>

<details>
<summary><b>Example 2: Diagnose the persuasion route from the manipulation</b></summary>

**Question:** An ad for a drug shows a famous doctor but gives no data; viewers are distracted by background music. A second ad lists clinical trial results to an attentive audience. Which route does each target, and which produces more lasting attitudes?

**Solution:**
1. Ad 1: celebrity cue + distraction (low ability to process) → **peripheral route** → temporary, easily reversed attitudes. ✓
2. Ad 2: substantive evidence + attentive audience → **central route** → durable, resistant attitudes. ✓

**Why it matters:** Distraction and low involvement push people to peripheral cues; motivation and ability enable central processing.
</details>

<details>
<summary><b>Example 3: Identify the dissonance-reduction strategy</b></summary>

**Question:** A smoker who knows smoking causes cancer keeps smoking but says, "My grandfather smoked and lived to 90." Which dissonance-reduction strategy is this?

**Solution:**
1. The conflicting cognitions are "smoking is harmful" and "I smoke."
2. The smoker neither quits (behavior change) nor accepts the risk (attitude change).
3. Instead they ADD a consonant cognition to justify the behavior → **rationalization / adding justification.** ✓

**Connection:** Adding a justifying belief is the third classic route (besides changing attitude or behavior) to relieve dissonance.
</details>`
    },
    {
      id: 'sp1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Attitudes = affective + behavioral + cognitive (ABC); best predict behavior when specific, strong, direct-experience, weak situation.
- ELM: central route = argument quality, durable; peripheral route = surface cues, temporary.
- Cognitive dissonance: conflicting cognitions → discomfort → change attitude, change behavior, or add justification.
- Insufficient external justification (small incentive) → GREATER internal attitude change (Festinger & Carlsmith).`
    }
  ]
};
