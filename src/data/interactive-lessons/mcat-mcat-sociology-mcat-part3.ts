export const mcatSociologyPart3Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so3-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 3 of 7 — Social Interaction & Groups**

### Types of Social Groups

| Type | Description | Example |
|------|-------------|---------|
| Primary group | Close, personal, long-term | Family, close friends |
| Secondary group | Formal, task-oriented | Work colleagues, classmates |
| In-group | Group you belong to | "Us" |
| Out-group | Group you don't belong to | "Them" |
| Reference group | Group you compare yourself to | Aspirational peers |

### Group Dynamics

| Concept | Description |
|---------|-------------|
| **Groupthink** | Group conformity overrides critical thinking |
| **Social facilitation** | Performance improves on simple tasks with audience |
| **Social loafing** | Individuals exert less effort in groups |
| **Deindividuation** | Loss of self-awareness in groups → impulsive behavior |
| **Bystander effect** | Less likely to help when others are present |

### Social Roles

- **Role**: Expected behaviors for a social position
- **Role conflict**: Two roles with incompatible demands (doctor + parent)
- **Role strain**: Tension within a SINGLE role (nurse: caregiving vs. efficiency)
- **Dramaturgical theory** (Goffman): Life as performance — front stage (public) vs. back stage (private)

### Social Influence: A Hierarchy of Pressure

| Phenomenon | Source of pressure | Classic study | Key variable |
|------------|--------------------|---------------|--------------|
| **Conformity** | Implicit group norm | Asch (line judgments) | Many conform to an obviously wrong answer; drops sharply with one ally |
| **Obedience** | Explicit authority | Milgram (shock study) | Most obeyed to the maximum shock; falls when the authority is remote or the victim is close |
| **Compliance** | Direct request | Foot-in-the-door, door-in-the-face | Reciprocity & consistency |
| **Internalization** | Genuine belief change | — | Most durable form |

<!-- yield:low -->
- The classic figures: Asch's participants conformed on about a third of the critical trials (about 75% conformed at least once); in Milgram's baseline study, 65% continued to the maximum 450-volt shock.
<!-- /yield -->

- **Normative** conformity = to be liked/accepted; **informational** conformity = to be correct (look to others when uncertain).
- Milgram's obedience FELL when the authority was remote, the victim was closer, or peers rebelled — situational, not just dispositional.

### Social Facilitation vs. Loafing (Resolve the Apparent Contradiction)

$$\\text{Audience/co-actors} \\to \\text{arousal} \\to \\begin{cases} \\uparrow \\text{ performance on SIMPLE/well-learned tasks} \\\\ \\downarrow \\text{ performance on COMPLEX/novel tasks} \\end{cases}$$

- **Social facilitation** applies when others are present (audience or co-actors) and individual performance is **identifiable**; evaluation strengthens it.
- **Social loafing** appears when individual effort is **pooled and anonymous** in a group product → people slack. Make contributions identifiable and loafing disappears.

### Emergent Interaction Concepts

- **Self-fulfilling prophecy:** a false belief that causes its own fulfillment (e.g., teacher expectancy → Pygmalion effect).
- **Looking-glass self (Cooley):** we form self-concept from how we imagine others see us.
- **Social exchange theory:** interactions are governed by cost–benefit calculations and reciprocity.`
    },
    {
      id: 'so3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Groups & Interaction** 🎯`,
      exercise: {
        questions: [
          {
            question: `A medical team makes a poor treatment decision because no one wants to disagree with the attending physician. This is:`,
            options: [`Groupthink — the drive for consensus suppresses dissenting views`, `Social loafing — members exert less effort within a group`, `Deindividuation — anonymity in a group weakens self-restraint`, `Bystander effect — others' presence diffuses the duty to help`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Groupthink occurs when the desire for conformity/harmony overrides realistic appraisal. In medical settings, this is particularly dangerous — it can be combated by explicitly encouraging dissent and assigning a "devil's advocate" role.`
          },
          {
            question: `In Milgram's obedience studies, the proportion of participants delivering the maximum shock DROPPED most when:`,
            options: [`The experimenter gave orders by phone`, `Participants were paid twice the usual fee`, `The learner protested from a separate room`, `Participants were told the study was about memory`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Obedience is highly situational. When the authority figure was physically remote (e.g., issuing commands by telephone), obedience fell sharply. Increasing the VICTIM's proximity also reduced obedience, whereas a learner protesting from a separate room was the standard baseline setup. The memory-study cover story was used in every variation, and payment was never varied as a condition, so neither explains a drop. This is the central lesson: situation, not just personality, drives obedience.`
          },
          {
            question: `An experienced pianist plays a well-rehearsed piece better in front of an audience but a beginner plays a difficult new piece worse. This pattern is explained by:`,
            options: [`Social facilitation`, `Social loafing`, `Stereotype threat`, `Diffusion of responsibility`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Social facilitation: the presence of others raises arousal, which enhances performance on simple/well-learned tasks (the expert's rehearsed piece) but impairs it on complex/novel tasks (the beginner's hard new piece). It is strongest when individual performance is identifiable — contrast with social loafing, which occurs when effort is pooled and anonymous. Stereotype threat requires a salient negative stereotype about one's group, and diffusion of responsibility concerns shared obligation to act (e.g., helping in an emergency), not skill-dependent performance.`
          }
        ]
      }
    },
    {
      id: 'so3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Social Interaction & Groups

<details>
<summary><b>Example 1: Conformity vs. obedience vs. compliance</b></summary>

**Question:** Three scenarios: (a) A student gives an obviously wrong answer because the rest of the discussion group said it first. (b) A nurse administers a questionable dose because the physician ordered it. (c) A shopper agrees to a large donation after first being asked for a small one. Classify each.

**Solution:**
- (a) Matching an implicit GROUP norm with no direct command → **conformity** (Asch-type). ✓
- (b) Following an explicit command from an AUTHORITY → **obedience** (Milgram-type). ✓
- (c) Yielding to a direct REQUEST, escalated via foot-in-the-door → **compliance.** ✓

**MCAT key:** Ask "what is the source of pressure?" — peers' norm (conformity), an authority's order (obedience), or a direct request (compliance).
</details>

<details>
<summary><b>Example 2: Predict and undo social loafing</b></summary>

**Question:** A group project yields lower per-person output than the same students working alone. Design a change that should eliminate the effect, and name the mechanism.

**Solution:**
1. The effect is **social loafing**: when individual contributions are pooled and not identifiable, motivation drops.
2. **Intervention:** make each member's contribution individually identifiable and evaluated (assign distinct, graded components).
3. Once effort is identifiable, the situation shifts toward **social facilitation/evaluation apprehension**, and loafing disappears. ✓

**Why it works:** Loafing depends on *diffusion of responsibility*; removing anonymity removes the diffusion.
</details>

<details>
<summary><b>Example 3: Identify a self-fulfilling prophecy in data</b></summary>

**Question:** Teachers are randomly told certain (actually average) students are "intellectual bloomers." Months later, those students score higher on tests. Interpret the causal chain.

**Solution:**
1. The label is FALSE at baseline (students were randomly chosen, truly average).
2. Teachers' expectation altered their behavior — more attention, warmth, and challenging material.
3. That changed treatment improved the students' actual performance → the false belief became true: a **self-fulfilling prophecy** (Pygmalion/Rosenthal effect). ✓

**Connection:** Distinguish from a simple correlation — the key is that the *expectation itself* causally produced the outcome.
</details>`
    },
    {
      id: 'so3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Primary groups = close/emotional. Secondary groups = formal/task-oriented.
- Groupthink: conformity suppresses critical thinking (dangerous in medicine!)
- Role conflict = between roles. Role strain = within one role.
- Goffman: front stage (public performance) vs. backstage (private self)
- Conformity (group norm, Asch) vs. obedience (authority, Milgram) vs. compliance (direct request) — both conformity and obedience are highly situational.

<!-- yield:low -->
- Low-yield extras: the exact Asch and Milgram percentages (about a third of critical trials; 65% to the maximum shock)
<!-- /yield -->`
    }
  ]
};
