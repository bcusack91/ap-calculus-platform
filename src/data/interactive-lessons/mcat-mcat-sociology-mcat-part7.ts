export const mcatSociologyPart7Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so7-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 7 of 7 — Healthcare Systems & Bioethics**

### Healthcare Disparities

| Factor | Impact |
|--------|--------|
| **Race/ethnicity** | Minorities often receive less aggressive treatment and have worse outcomes, partly independent of insurance/SES |
| **SES** | Lower SES → later diagnosis, less preventive care, worse control of chronic disease |
| **Insurance status** | Uninsured/underinsured delay care → costlier, worse outcomes |
| **Geography** | Rural areas lack specialists, hospitals, and transportation |

- **Health disparities:** preventable differences in health burden between groups.
- **Health equity:** the goal — fair opportunity for everyone to be healthy (vs. mere equality of resources).

### The Three Paradigms on Health & Medicine

| Paradigm | Level | View of health/medicine |
|----------|-------|--------------------------|
| **Functionalism** | Macro | Illness is dysfunctional; the **sick role** (Parsons) and the medical profession restore people to productive functioning |
| **Conflict theory** | Macro | Healthcare reflects and reproduces inequality; **medicalization** expands professional power; access tracks class |
| **Symbolic interactionism** | Micro | Illness experience and the doctor–patient relationship are socially constructed through interaction and labels |

### The Sick Role (Parsons) — Functionalist

| Rights of the sick person | Obligations of the sick person |
|---------------------------|--------------------------------|
| Exempt from normal social/role obligations | Must *want* to get well (illness is undesirable) |
| Not held responsible for the condition | Must seek competent help and cooperate with treatment |

- Limitation: fits **acute** illness better than **chronic** illness or stigmatized conditions (where blame may persist).

### The Illness Experience (Interactionism)

- **Disease** (biological pathology) vs. **illness** (the lived, subjective experience) vs. **sickness** (the social role).
- **Medicalization:** defining a condition/behavior as a treatable medical problem (childbirth, aging, ADHD, AUD). Can reduce moral blame but expands medical authority (a conflict critique).

### Doctor–Patient Relationship Models

| Model | Description | Autonomy |
|-------|-------------|----------|
| **Paternalistic** | Physician decides; patient defers | Low |
| **Informative** | Physician supplies facts; patient decides alone | High (but isolating) |
| **Shared decision-making** | Collaborative deliberation → mutual agreement | High (preferred standard) |

### The Four Principles of Bioethics

| Principle | Definition | Typical conflict |
|-----------|-----------|------------------|
| **Autonomy** | Respect the patient's right to make informed decisions about their own body | vs. beneficence when a patient refuses recommended care |
| **Beneficence** | Act in the patient's best interest | vs. autonomy / vs. justice (resources) |
| **Non-maleficence** | "First, do no harm" | vs. beneficence (treatments with risk) |
| **Justice** | Fair distribution of benefits, risks, and resources | vs. beneficence to one patient when resources are scarce |

- **Informed consent** = autonomy in practice: disclosure + understanding + voluntariness + capacity.
- A **competent, informed** adult's refusal of treatment is governed by **autonomy**, which generally overrides the physician's beneficence.`
    },
    {
      id: 'so7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Healthcare Systems & Bioethics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A competent, fully informed adult refuses a life-saving blood transfusion. The bioethical principle that most directly supports honoring this refusal is:`,
            options: [`Autonomy — the patient's right to make their own informed medical decisions`, `Beneficence`, `Justice`, `Non-maleficence`],
            correctAnswer: 0,
            explanation: `Autonomy is respect for a competent, informed patient's right to decide about their own body, and it generally overrides beneficence (option 2), the physician's drive to do medical good. Justice (option 3) concerns fair resource distribution across people, not one patient's self-determination. Non-maleficence (option 4) is "do no harm," which the physician might invoke to push treatment — the opposite of honoring the refusal.`
          },
          {
            question: `During a mass-casualty event, physicians allocate scarce ventilators to patients most likely to survive rather than first-come-first-served. The bioethical principle most directly guiding this triage is:`,
            options: [`Justice — fair distribution of scarce healthcare resources`, `Autonomy`, `Non-maleficence`, `Beneficence to a single patient`],
            correctAnswer: 0,
            explanation: `Allocating scarce resources across a population fairly is the domain of justice. Autonomy (option 2) concerns an individual's own decisions, not allocation among many. Non-maleficence (option 3) is avoiding harm to a given patient. Option 4 names the very tension triage overrides: maximizing good for the whole group can require not doing everything possible for each individual.`
          },
          {
            question: `A sociologist notes that defining normal childbirth and aging as conditions requiring physician management has expanded the authority and revenue of the medical profession. This observation is BEST framed as:`,
            options: [`Conflict theory's critique of medicalization`, `Parsons's sick role (functionalism)`, `Shared decision-making`, `Cultural relativism`],
            correctAnswer: 0,
            explanation: `Medicalization — reframing ordinary life processes as medical problems — is most pointedly critiqued by conflict theory, which highlights how it concentrates power and resources in the medical profession (social control over more of life). The sick role (option 2) is the functionalist account of how illness is managed to restore function — not a critique of professional power. Shared decision-making and cultural relativism are unrelated to this power analysis.`
          }
        ]
      }
    },
    {
      id: 'so7-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Healthcare Systems & Bioethics

<details>
<summary><b>Example 1: Resolve a clash of bioethical principles</b></summary>

**Question:** A competent patient with cancer declines chemotherapy that the oncologist is confident would extend her life. The oncologist feels obligated to help. Name the two principles in tension and which prevails.

**Solution:**
1. The physician's drive to extend life = **beneficence.** The patient's refusal of recommended care = an exercise of **autonomy.** ✓
2. For a **competent, informed** patient, **autonomy prevails** — beneficence cannot override an informed refusal. ✓

**MCAT skill:** "patient refuses recommended care" = autonomy vs. beneficence; with capacity + information, autonomy wins.
</details>

<details>
<summary><b>Example 2: Apply a paradigm to a health-disparity finding</b></summary>

**Question:** A study finds that, controlling for insurance and income, Black patients with the same symptoms receive less aggressive pain management than White patients. Which paradigm best frames this, and what concept applies?

**Solution:**
1. A systematic disparity that persists after adjusting for SES, reflecting how the healthcare system reproduces inequality → **conflict theory** (macro, power/inequality). ✓
2. The concept is a **health disparity** rooted in structural/implicit bias, not patient choice — distinct from the **SES gradient** because income was already controlled.

**Why it matters:** When a disparity remains *after controlling for SES*, the MCAT wants you to attribute it to structural/racial factors (conflict-theory framing), not individual behavior.
</details>

<details>
<summary><b>Example 3: Classify the doctor–patient model and the sick-role fit</b></summary>

**Question:** A physician lays out options, elicits the patient's values, and they jointly choose a plan. The patient also actively follows treatment to recover. Name the relationship model and evaluate the sick-role fit.

**Solution:**
1. Joint deliberation toward mutual agreement = **shared decision-making** (high autonomy, the preferred standard). ✓
2. The patient *wants to get well* and *cooperates with competent help* → fulfills the **obligations** of Parsons's **sick role**, legitimizing the **rights** (exemption from duties, not blamed). ✓

**Connection:** Shared decision-making (interactionist-friendly) and the sick role (functionalist) can describe the *same* encounter from micro and macro angles — a classic MCAT integration.
</details>`
    },
    {
      id: 'so7-summary',
      type: 'text' as const,
      content: `### Sociology — Complete! ✅

- Four bioethics principles: **Autonomy** (informed self-decision), **Beneficence** (do good), **Non-maleficence** (do no harm), **Justice** (fair distribution). Know which wins in conflicts — a competent patient's autonomy overrides beneficence; scarce-resource allocation invokes justice.
- Sick role (Parsons, functionalism): rights = exemption + no blame; obligations = want to get well + seek competent help.
- Conflict theory frames health disparities and medicalization (expanded professional power).
- Doctor–patient models: paternalistic → informative → shared decision-making (preferred).
- Sociology on the MCAT is always framed through healthcare: link social structure, inequality, culture, and group dynamics to health outcomes.`
    }
  ]
};
