export const mcatSociologyPart4Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so4-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 4 of 7 — Deviance & Social Control**

### What Is Deviance?

- **Deviance:** any violation of social norms (not necessarily illegal — e.g., picking your nose in public).
- **Crime:** violation of a formally codified law (a subset of deviance).
- **Norms:** **folkways** (everyday customs; mild sanction), **mores** (moral norms; strong sanction), **taboos** (deeply forbidden), **laws** (codified, formally enforced).
- **Social control:** mechanisms that enforce norms — **informal** (smiles, ridicule, shunning) vs. **formal** (police, courts, fines).

### The Three Paradigms on Deviance

| Paradigm | Level | Account of deviance |
|----------|-------|---------------------|
| **Functionalism** | Macro | Deviance is normal and useful: it clarifies moral boundaries, promotes solidarity, and can drive change (Durkheim). Includes **strain theory** (Merton). |
| **Conflict theory** | Macro | Laws and labels reflect the interests of the powerful; the disadvantaged are disproportionately criminalized. |
| **Symbolic interactionism** | Micro | Deviance is learned and labeled through interaction: **differential association** (Sutherland) and **labeling theory** (Becker). |

### Major Theories of Deviance

| Theory | Thinker | Key idea |
|--------|---------|----------|
| **Strain theory** | Merton | Gap between cultural goals and legitimate means produces deviance |
| **Differential association** | Sutherland | Deviance is *learned* through interaction with deviant others |
| **Labeling theory** | Becker | Deviance is created by the social label, not inherent in the act |
| **Social control / bond theory** | Hirschi | Strong social bonds (attachment, commitment, involvement, belief) prevent deviance |
| **Broken windows** | Wilson & Kelling | Visible minor disorder signals that deviance is tolerated → more deviance |

### Merton's Strain Theory — Modes of Adaptation

| Adaptation | Cultural goals? | Legitimate means? | Example |
|-----------|-----------------|-------------------|---------|
| **Conformity** | Accept | Accept | Working hard for success |
| **Innovation** | Accept | Reject | Drug dealing to get rich |
| **Ritualism** | Reject | Accept | Going through the motions at a dead-end job |
| **Retreatism** | Reject | Reject | Dropping out / chronic substance use |
| **Rebellion** | Replace | Replace | Revolutionary movements |

### Labeling Theory & Stigma (Goffman)

- **Primary deviance:** the initial rule-breaking act, often with little effect on self-concept.
- **Secondary deviance:** deviance that results from internalizing a **label** — the label becomes a **master status**, reorganizing identity around being "a deviant."
- **Stigma:** an attribute that is deeply discrediting. May be **visible** (physical) or **concealable** (mental illness, HIV status). Goffman distinguished the **discredited** (stigma already known) from the **discreditable** (stigma concealable but not yet known).
- **Medicalization:** reframing deviance/behavior as a medical condition (alcoholism → alcohol use disorder; "hyperactive child" → ADHD). Can reduce blame (less moral stigma) but expands medical authority — a **conflict-theory** critique.

### MCAT Connection — Stigma in Healthcare

- Mental-health stigma → delayed treatment seeking.
- HIV stigma → reduced testing and disclosure.
- Substance-use stigma → barriers to treatment and to honest history-taking.`
    },
    {
      id: 'so4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Deviance & Social Control** 🎯`,
      exercise: {
        questions: [
          {
            question: `A teenager from a low-income neighborhood turns to drug dealing to achieve financial success. According to Merton's strain theory, this adaptation is:`,
            options: [`Innovation — accepting the cultural goal (wealth) but using illegitimate means`, `Conformity`, `Retreatism`, `Ritualism`],
            correctAnswer: 0,
            explanation: `Innovation: the person accepts society's goal (wealth/success) but rejects/lacks conventional means (education, career) and substitutes illegitimate ones (crime). Retreatism (option 3) would reject BOTH the goal and the means (e.g., withdrawal). Ritualism (option 4) is the opposite of this case — abandoning the goal while rigidly following the means. The key discriminator is: does the person still chase the cultural goal? Here, yes.`
          },
          {
            question: `A boy caught shoplifting once is repeatedly called a "delinquent" by teachers and police; he begins associating only with other labeled youths and commits further crimes, now seeing himself as "a criminal." This progression from the label to a reorganized identity is BEST described as:`,
            options: [`Secondary deviance under labeling theory — the label becomes a master status`, `Primary deviance`, `Strain-theory innovation`, `Differential reinforcement`],
            correctAnswer: 0,
            explanation: `The first shoplifting act is primary deviance; the later deviance driven by internalizing the "delinquent" label — which becomes a master status reorganizing his self-concept — is secondary deviance (Becker/Lemert). The trap is "primary deviance" (option 2), which is only the initial act before any labeling effect. Strain-theory innovation describes motive, not the labeling cascade, and differential reinforcement is a learning-theory term.`
          },
          {
            question: `A sociologist argues that defining "addiction" as a brain disease rather than a moral failing shifts authority over deviant behavior from courts and churches to physicians. This observation is the core of:`,
            options: [`Medicalization, often critiqued through a conflict-theory lens about who controls definitions of deviance`, `Differential association`, `Functionalist boundary maintenance`, `Cultural relativism`],
            correctAnswer: 0,
            explanation: `Medicalization is the process of reframing a behavior/condition as a medical issue under medical authority. The conflict-theory angle highlights that this transfers social control to the medical profession — who defines and treats deviance. Differential association (option 2) is about learning deviance, not redefining it. Functionalist boundary maintenance is Durkheim's idea that punishing deviance affirms norms — a different mechanism. Cultural relativism is unrelated.`
          }
        ]
      }
    },
    {
      id: 'so4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Deviance & Social Control

<details>
<summary><b>Example 1: Apply a paradigm to a deviance scenario</b></summary>

**Question:** A passage observes that powdered-cocaine and crack-cocaine offenses carried vastly different legal penalties despite being the same drug, with harsher penalties falling on poorer, minority users. Which paradigm best frames this, and how?

**Solution:**
1. The focus is on how **laws and punishments reflect and reinforce the interests of the powerful**, disproportionately criminalizing the disadvantaged → **conflict theory** (macro, power). ✓
2. Contrast: a **functionalist** would emphasize that punishing drug use affirms shared norms (boundary maintenance); a **symbolic interactionist** would focus on how the "crack offender" label is applied and internalized.

**MCAT skill:** Differential punishment by class/race that benefits the powerful → conflict theory. Punishment that strengthens solidarity/norms → functionalism.
</details>

<details>
<summary><b>Example 2: Classify the strain-theory adaptation</b></summary>

**Question:** A mid-level bureaucrat no longer believes the company's success goals matter, but he meticulously follows every rule and procedure anyway. Which Mertonian adaptation is this?

**Solution:**
1. Does he accept the cultural GOAL? No — he's given up on "success."
2. Does he accept the legitimate MEANS? Yes — he rigidly follows procedures.
3. Reject goals + accept means = **ritualism.** ✓

**Why it matters:** Ritualism is the most-missed cell because it looks like conformity on the surface (following rules) — but the defining feature is the *abandoned goal*. Always check both axes.
</details>

<details>
<summary><b>Example 3: Distinguish learning vs. labeling explanations</b></summary>

**Question:** Two explanations for a youth's deviance: (a) he learned techniques and attitudes favorable to law-breaking from a delinquent peer group; (b) once police labeled him a "troublemaker," he was pushed into a deviant identity. Name each theory and its core mechanism.

**Solution:**
- (a) Deviance acquired through interaction with deviant others → **differential association** (Sutherland); mechanism = *learning.* ✓
- (b) Deviance produced by society's reaction/label → **labeling theory** (Becker); mechanism = *secondary deviance / master status.* ✓

**Connection:** Both are symbolic-interactionist (micro), but one locates the cause *before* the act (learning) and the other *after* it (societal reaction). MCAT passages reward catching that distinction.
</details>`
    },
    {
      id: 'so4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Deviance = norm violation; crime = law violation. Social control is informal (ridicule) or formal (police).
- Merton's strain: check BOTH axes — goals (accept/reject) and means (accept/reject). Ritualism = the sneaky one.
- Labeling theory: primary deviance (the act) → secondary deviance (the label becomes a master status).
- Differential association = deviance is learned; labeling = deviance is a societal reaction.
- Stigma and medicalization shape healthcare access (mental health, HIV, addiction).`
    }
  ]
};
