export const mcatPsychBehavPart3Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb3-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 3 of 7 — Motivation, Emotion & Stress**

### Theories of Motivation

| Theory | Key Idea | AAMC angle |
|--------|----------|------------|
| **Instinct** | Innate, fixed behavioral patterns | Limited explanatory power for complex behavior |
| **Drive reduction** | A physiological need creates a drive (tension) that behavior reduces to restore **homeostasis** | Explains primary drives (hunger, thirst); weak for novelty-seeking |
| **Arousal (optimal-arousal)** | Organisms seek an optimal level of arousal (**Yerkes–Dodson**) | Inverted-U; not just need reduction |
| **Incentive** | External rewards **pull** behavior (vs. drives that push) | Explains eating dessert when already full |
| **Maslow's hierarchy** | Physiological → Safety → Love/belonging → Esteem → Self-actualization | Lower needs generally precede higher |
| **Self-determination theory (SDT)** | Intrinsic motivation from **autonomy, competence, relatedness** | Distinguishes intrinsic vs. extrinsic |

### Yerkes–Dodson Law (Arousal vs. Performance)

- Performance is best at **moderate** arousal → inverted-U.
- **Simple/well-learned** tasks: optimal arousal is HIGHER.
- **Complex/novel** tasks: optimal arousal is LOWER (high arousal disrupts them).

### Intrinsic vs. Extrinsic Motivation & the Overjustification Effect

- **Intrinsic:** doing something for its inherent satisfaction. **Extrinsic:** for an external reward/avoiding punishment.
- **Overjustification effect:** giving an extrinsic reward for an already-intrinsically-enjoyed activity can REDUCE intrinsic motivation (the person re-attributes their behavior to the reward).

### Theories of Emotion (Know the Sequence)

| Theory | Sequence | One-line distinction |
|--------|----------|----------------------|
| **James–Lange** | Stimulus → **physiological/bodily response** → emotion | "I'm afraid BECAUSE I tremble"; bodily state comes first |
| **Cannon–Bard** | Stimulus → arousal **AND** emotion **simultaneously** | Thalamus relays both at once |
| **Schachter–Singer (two-factor)** | Stimulus → arousal → **cognitive label** → emotion | Same arousal + different label = different emotion |
| **Lazarus (cognitive-appraisal)** | Stimulus → **appraisal** → arousal + emotion | Appraisal can precede/define the emotion |

- The three **components of emotion**: physiological, behavioral (expression), and cognitive (subjective experience/appraisal).

### Neurobiology of Emotion

- **Amygdala**: rapid detection of threat/fear; "low road" (thalamus → amygdala) is fast and crude; "high road" (thalamus → cortex → amygdala) is slower and accurate.
- **Limbic system** (amygdala, hippocampus, hypothalamus) + **prefrontal cortex** (regulation, especially left/right valence).
- **Autonomic signature**: sympathetic "fight-or-flight" → ↑HR, ↑BP, pupil dilation, ↓digestion (epinephrine from adrenal medulla).

### Stress — Appraisal and Response

- **Primary appraisal** (is this a threat/challenge/harm?) → **secondary appraisal** (can I cope?). Stress arises when demands exceed perceived resources.
- **Stressors**: cataclysmic events, personal life changes, daily hassles.

### General Adaptation Syndrome (Selye) & the HPA Axis

1. **Alarm**: acute fight-or-flight (sympathetic + adrenal medulla → epinephrine).
2. **Resistance**: sustained coping via the **HPA axis** — hypothalamus (CRH) → pituitary (ACTH) → adrenal cortex (**cortisol**).
3. **Exhaustion**: prolonged cortisol depletes resources → immunosuppression, illness, burnout.

$$\\text{Hypothalamus (CRH)} \\to \\text{Anterior pituitary (ACTH)} \\to \\text{Adrenal cortex (cortisol)}$$`
    },
    {
      id: 'pb3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Motivation, Emotion & Stress** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a classic experiment, participants injected with epinephrine but told nothing about its effects were placed in a room with either a euphoric or an angry confederate; they reported emotions matching the confederate, whereas correctly-informed participants did not. These results most directly support:`,
            options: [`Schachter–Singer two-factor theory — undifferentiated arousal is labeled using situational cues to produce a specific emotion`, `James–Lange theory — each distinct emotion has a unique, pre-determined physiological signature`, `Cannon–Bard theory — emotion and arousal arise simultaneously and independently of cognition`, `Drive-reduction theory — the injection created a biological need that behavior reduced`],
            correctAnswer: 0,
            explanation: `This is the Schachter–Singer (Schachter & Singer, 1962) paradigm. Uninformed participants had unexplained arousal and used the social context (the confederate) as a COGNITIVE LABEL, producing different emotions from identical physiology — exactly two-factor theory. James–Lange (B) predicts a UNIQUE bodily pattern per emotion, which is contradicted because the SAME injection yielded different emotions. Cannon–Bard (C) denies a cognitive labeling step, but labeling is precisely what drove the result. Drive reduction (D) is a motivation theory, not relevant to emotional labeling.`
          },
          {
            question: `A child who loves drawing for fun is then paid a cash reward each time she draws. After the rewards stop, she draws far less than before they began. This decline is best explained by:`,
            options: [`The overjustification effect — the extrinsic reward undermined her pre-existing intrinsic motivation`, `The Yerkes–Dodson law — the reward raised arousal past the optimal point`, `Drive reduction — the reward satisfied a biological need, removing the drive`, `Negative reinforcement — removing the reward strengthened the behavior`],
            correctAnswer: 0,
            explanation: `When an activity is already intrinsically rewarding and an EXTRINSIC reward is added, people may re-attribute their behavior to the reward; removing it then leaves less motivation than at baseline — the overjustification effect. Yerkes–Dodson (B) concerns arousal-performance, not the source of motivation. Drive reduction (C) applies to biological needs, not a hobby. Negative reinforcement (D) would PREDICT more behavior, the opposite of what occurred, and is mis-defined here.`
          },
          {
            question: `A researcher measures salivary cortisol in participants facing a month-long high-stakes stressor. Cortisol is elevated and sustained, and the participants show reduced immune function. Which physiological pathway and General Adaptation Syndrome stage best describe this state?`,
            options: [`The HPA axis (hypothalamus→ACTH→adrenal cortex) during the resistance stage`, `The sympathetic–adrenal-medullary pathway (epinephrine) during the alarm stage`, `The parasympathetic pathway during the exhaustion stage`, `The HPA axis during the alarm stage, mediated entirely by epinephrine`],
            correctAnswer: 0,
            explanation: `SUSTAINED cortisol elevation is the signature of the **HPA axis** (hypothalamus→CRH→pituitary→ACTH→adrenal CORTEX→cortisol), and prolonged coping with ongoing immune suppression is the **resistance** stage of Selye's GAS. The alarm stage (B) is the acute, epinephrine-driven sympathetic–adrenal-medullary burst, which is brief, not month-long. The parasympathetic pathway (C) is "rest-and-digest," not the stress response. Option D wrongly attributes HPA output to epinephrine — the HPA's product is cortisol.`
          }
        ]
      }
    },
    {
      id: 'pb3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Motivation, Emotion & Stress

<details>
<summary><b>Example 1: Distinguish the emotion theories on one scenario</b></summary>

**Question:** A hiker sees a snake, her heart pounds, and she feels fear. State what each major theory claims about the ORDER of these events.

**Solution:**
1. **James–Lange:** snake → bodily response (pounding heart) → THEN fear. The emotion is the perception of the bodily state. ✓
2. **Cannon–Bard:** snake → pounding heart AND fear arise simultaneously and independently (thalamic relay). ✓
3. **Schachter–Singer:** snake → arousal → she labels the arousal as "fear" using context (a snake!) → fear. Same arousal labeled differently in another context could be excitement. ✓
4. **Lazarus:** snake → cognitive **appraisal** ("danger!") → arousal + fear; appraisal can come first.

**MCAT note:** The discriminating question is always: does the bodily response, the cognition, or both-at-once come first?
</details>

<details>
<summary><b>Example 2: Apply Yerkes–Dodson to task difficulty</b></summary>

**Question:** Two students take exams under high pressure (high arousal): one faces a simple multiplication drill, the other a novel proof-based problem set. Predict who performs better and why.

**Solution:**
1. Yerkes–Dodson: performance vs. arousal is an inverted-U, and the optimal arousal level DEPENDS on task complexity. ✓
2. **Simple/well-learned task** (multiplication): optimal arousal is HIGH, so high pressure helps or is neutral → that student does fine.
3. **Complex/novel task** (proofs): optimal arousal is LOW, so high pressure pushes past the peak → performance DROPS. ✓
4. Conclusion: the multiplication student is least harmed by the high arousal.

**Key idea:** "Moderate arousal is best" is shorthand — the true peak shifts with task difficulty.
</details>

<details>
<summary><b>Example 3: Map a stress response onto GAS and physiology</b></summary>

**Question:** A medical resident works grueling shifts for months, then develops frequent infections and exhaustion. Trace the General Adaptation Syndrome stages and the dominant hormone in each.

**Solution:**
1. **Alarm** (first shifts): acute sympathetic + adrenal-medulla activation → **epinephrine/norepinephrine** → ↑HR, ↑BP, mobilized glucose. ✓
2. **Resistance** (weeks of sustained demand): the **HPA axis** dominates → **cortisol** sustains glucose and suppresses inflammation while the body keeps coping. ✓
3. **Exhaustion** (months): chronic cortisol depletes resources and suppresses immunity → frequent infections, fatigue, burnout. ✓

**Connection:** Acute stress = epinephrine (fast); chronic stress = cortisol via the HPA axis (slow). Prolonged cortisol explains the immunosuppression and illness.
</details>`
    },
    {
      id: 'pb3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Emotion theories differ on ORDER: James–Lange (body first), Cannon–Bard (simultaneous), Schachter–Singer (arousal + cognitive label), Lazarus (appraisal first).
- Yerkes–Dodson: moderate arousal is best, but the optimum is HIGHER for simple and LOWER for complex tasks.
- Overjustification effect: extrinsic rewards can undermine intrinsic motivation.
- GAS: Alarm (epinephrine, sympathetic) → Resistance (cortisol, HPA axis) → Exhaustion (immunosuppression, illness).
- Amygdala drives rapid fear detection; cortisol is the chronic-stress hormone.`
    }
  ]
};
