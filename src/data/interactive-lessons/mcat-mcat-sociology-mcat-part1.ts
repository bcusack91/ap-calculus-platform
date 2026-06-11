export const mcatSociologyPart1Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so1-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 1 of 7 — Social Structure & Institutions**

### Sociological Theories

| Theory | Focus | Key Thinker |
|--------|-------|-------------|
| **Functionalism** | Society as a system with interconnected parts | Durkheim |
| **Conflict Theory** | Power, inequality, class struggle | Marx |
| **Symbolic Interactionism** | Meaning created through social interactions | Mead, Goffman |
| **Social Constructionism** | Reality is socially constructed | Berger, Luckmann |

### Social Institutions

| Institution | Function |
|------------|----------|
| Family | Socialization, support |
| Education | Knowledge transmission, social placement |
| Religion | Meaning, social cohesion |
| Government | Order, resource allocation |
| Economy | Production and distribution of goods |
| Healthcare | Disease treatment, public health |

### Durkheim's Concept of Anomie

- **Anomie**: Normlessness — when social norms break down
- Occurs during rapid social change
- Associated with higher rates of deviance and suicide
- Connection: healthcare disparities during social upheaval

### Manifest vs. Latent Functions (Merton)

| Term | Definition | Example (education) |
|------|------------|----------------------|
| **Manifest function** | Intended, recognized consequence | Transmitting knowledge/skills |
| **Latent function** | Unintended, often unrecognized consequence | Social networks, "babysitting," dating pool |
| **Latent dysfunction** | Unintended HARMFUL consequence | Reproducing class inequality via tracking |

Merton's distinction is a favorite functionalist nuance — the MCAT asks you to label an unintended-but-stabilizing outcome as a latent function.

### Comparing the Theoretical Lenses on One Scenario

For any institution (say, healthcare), each theory makes a different prediction:

| Lens | Level | Core question about healthcare |
|------|-------|---------------------------------|
| Functionalism | Macro | What function does the sick role serve in keeping society stable? |
| Conflict theory | Macro | Who holds power, and how does the system reproduce inequality? |
| Symbolic interactionism | Micro | How do doctor–patient interactions construct the meaning of "illness"? |
| Social constructionism | Micro/macro | How is a condition (e.g., ADHD, obesity) defined as a "disease" at all? |

### The Sick Role (Parsons) — A Functionalist Bridge

Parsons framed illness as a temporary, socially sanctioned **deviant role** with rights and obligations:
- **Rights:** exemption from normal duties; not blamed for being sick.
- **Obligations:** must want to get well; must seek competent help and cooperate.

This is the canonical link between functionalism and the medical system the MCAT tests.

### Social Networks & Structure

- **Strong vs. weak ties:** Granovetter's "strength of weak ties" — acquaintances (weak ties) bridge separate clusters and are often more useful for new information (e.g., job/health-resource referrals) than close friends.
- **Social capital:** resources accessed through network membership; predicts health outcomes.`
    },
    {
      id: 'so1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Social Structure** 🎯`,
      exercise: {
        questions: [
          {
            question: `A sociologist argues that healthcare inequality exists because the wealthy benefit from maintaining the current system. This perspective is:`,
            options: [`Conflict theory — focusing on power dynamics and inequality between social classes`, `Functionalism`, `Symbolic interactionism`, `Social constructionism`],
            correctAnswer: 0,
            explanation: `Conflict theory (Marx) views society as a competition for resources. Healthcare inequality is maintained because it benefits the powerful — a classic conflict theory explanation. Functionalism would ask what purpose inequality serves for society as a whole.`
          },
          {
            question: `A researcher notes that public schools, beyond teaching academics, also keep children supervised during work hours and create friendship networks. These supervisory and networking outcomes are best described as:`,
            options: [`Latent functions`, `Manifest functions`, `Latent dysfunctions`, `Anomie`],
            correctAnswer: 0,
            explanation: `Merton's latent functions are beneficial consequences that are unintended and largely unrecognized by participants. Teaching academics is the manifest (intended) function; supervision and network-building are latent functions. If the unintended outcome were harmful (e.g., reinforcing class inequality), it would be a latent dysfunction.`
          },
          {
            question: `A study finds that people most often hear about new clinical-trial opportunities from acquaintances rather than close friends. This finding is best explained by:`,
            options: [`Granovetter's strength of weak ties`, `Durkheim's anomie`, `The sick role`, `Conflict theory`],
            correctAnswer: 0,
            explanation: `Weak ties (acquaintances) connect otherwise separate social clusters, so they channel NEW information that close friends — who tend to share the same dense network and thus the same information — do not. This is Granovetter's "strength of weak ties," a high-yield social-network concept.`
          }
        ]
      }
    },
    {
      id: 'so1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Social Structure & Theory

<details>
<summary><b>Example 1: Match a passage claim to the correct theoretical lens</b></summary>

**Question:** A passage states: "The label 'mentally ill' is not a fixed biological fact but emerges from negotiated meanings between patients, clinicians, and institutions." Which lens does this reflect, and how does it differ from conflict theory?

**Solution:**
1. The emphasis on **meaning created through interaction** and the idea that a category is "negotiated" → **symbolic interactionism / social constructionism** (micro-level focus on meaning). ✓
2. Conflict theory would instead ask *who benefits* from the label and how power and resources are distributed — a macro, power-focused account.

**MCAT skill:** Tie the keyword to the level of analysis: "meaning/interaction/labels" = interactionism; "power/class/inequality" = conflict; "function/stability/system" = functionalism.
</details>

<details>
<summary><b>Example 2: Distinguish manifest function, latent function, and latent dysfunction</b></summary>

**Question:** A government launches a vaccination campaign. (a) Disease rates fall. (b) Citizens come to trust public-health agencies more. (c) Anti-vaccine groups mobilize and spread distrust. Classify each outcome.

**Solution:**
- (a) Falling disease rates = the **manifest function** (intended, recognized). ✓
- (b) Increased institutional trust = a **latent function** (beneficial, unintended). ✓
- (c) Mobilized distrust = a **latent dysfunction** (harmful, unintended). ✓

**Why it matters:** Merton's framework lets you grade a single intervention's multiple consequences along two axes: intended/unintended and functional/dysfunctional.
</details>

<details>
<summary><b>Example 3: Apply the sick role to a clinical scenario</b></summary>

**Question:** A patient with a chronic illness refuses to follow any treatment and resists returning to work, citing his condition indefinitely. Under Parsons's sick role, why is this socially problematic?

**Solution:**
1. The sick role grants rights (exemption from duties, no blame) ONLY if the person fulfills obligations: wanting to get well and cooperating with competent care.
2. Refusing treatment violates these obligations → society may withdraw the sick role's legitimacy (viewing the person as malingering). ✓

**Connection:** This is why functionalists see illness as a *temporary, conditional* deviant role that must be managed to keep society functioning — a direct link to the medical system.
</details>`
    },
    {
      id: 'so1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Functionalism: society works as a system. Conflict theory: power struggle. Symbolic interactionism: meaning through interaction.
- Know the major social institutions and their functions
- Anomie (Durkheim) = breakdown of social norms
- The MCAT tests sociology through healthcare and inequality scenarios`
    }
  ]
};
