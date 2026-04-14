export const bioImmuneSystemResponsePart6Data = {
  topicSlug: 'immune-system-response',
  sections: [
    {
      id: 'imm6-intro',
      type: 'text' as const,
      content: `
# ⚠️ Immune System Disorders

The immune system is powerful but imperfect. When it malfunctions, the consequences range from mild allergies to life-threatening diseases. Disorders fall into three main categories: **overreaction** (autoimmunity, allergies), **underreaction** (immunodeficiency), and **misdirected responses** (transplant rejection).

### What You'll Learn
- Autoimmune diseases and loss of self-tolerance
- Immunodeficiency disorders (primary and acquired)
- Allergies, hypersensitivity, and anaphylaxis
- Transplant rejection and tissue matching
      `
    },
    {
      id: 'imm6-autoimmune',
      type: 'text' as const,
      content: `
## Autoimmune Diseases

Autoimmunity occurs when the immune system loses **self-tolerance** and attacks the body's own tissues.

### Mechanisms of Self-Tolerance Failure
- **Central tolerance failure** — self-reactive lymphocytes escape negative selection in the thymus/bone marrow
- **Molecular mimicry** — pathogen epitopes resemble self-antigens, causing cross-reactive immune responses
- **Sequestered antigen release** — tissue damage exposes antigens normally hidden from the immune system (e.g., eye lens proteins)

### Common Autoimmune Diseases

| Disease | Target | Immune Mechanism |
|---------|--------|-----------------|
| **Type 1 Diabetes** | Pancreatic β cells | T cells destroy insulin-producing cells |
| **Rheumatoid Arthritis** | Joint synovial membranes | Antibodies and T cells attack joint tissue |
| **Systemic Lupus Erythematosus (SLE)** | Multiple organs (skin, kidneys, joints) | Anti-nuclear antibodies attack the body's own DNA and proteins |
| **Multiple Sclerosis** | Myelin sheath of neurons | T cells destroy the insulating coating of nerve fibers |
| **Graves' Disease** | Thyroid gland | Antibodies mimic TSH, overstimulating the thyroid |
| **Hashimoto's Thyroiditis** | Thyroid gland | T cells and antibodies destroy thyroid tissue |

> 🔑 Autoimmune diseases are more common in women and often have a genetic predisposition linked to specific HLA (MHC) alleles.
      `
    },
    {
      id: 'imm6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In Type 1 diabetes, the immune system destroys:',
            options: [
              'Insulin receptors on target cells',
              'Pancreatic β cells that produce insulin',
              'Glucagon-producing α cells',
              'Liver cells that store glycogen'
            ],
            correctAnswer: 1,
            explanation: 'Type 1 diabetes is an autoimmune disease in which cytotoxic T cells specifically attack and destroy the insulin-producing beta (β) cells in the pancreatic islets of Langerhans.'
          },
          {
            question: 'Molecular mimicry can cause autoimmunity because:',
            options: [
              'Pathogens intentionally copy the body\'s MHC molecules',
              'Pathogen epitopes resemble self-antigens, causing cross-reactive immune attacks',
              'The thymus produces T cells that only attack self-tissues',
              'Antibiotics destroy normal flora, triggering immune confusion'
            ],
            correctAnswer: 1,
            explanation: 'Molecular mimicry occurs when a pathogen\'s antigens are structurally similar to the host\'s self-antigens. Immune cells activated against the pathogen may cross-react with self-tissues, triggering autoimmune damage.'
          }
        ]
      }
    },
    {
      id: 'imm6-immunodeficiency',
      type: 'text' as const,
      content: `
## Immunodeficiency Disorders

Immunodeficiency means the immune system is weakened or absent, leaving the body vulnerable to opportunistic infections.

| Type | Cause | Examples |
|------|-------|---------|
| **Primary (congenital)** | Genetic defects present from birth | SCID, DiGeorge syndrome |
| **Secondary (acquired)** | Caused by external factors | AIDS, chemotherapy-induced, malnutrition |

### Key Immunodeficiency Disorders

**SCID (Severe Combined Immunodeficiency)**
- Genetic defect → no functional B or T cells
- "Bubble boy" disease — patients cannot fight any infections
- Treated with bone marrow transplant or gene therapy

**AIDS (Acquired Immunodeficiency Syndrome)**
- Caused by **HIV (Human Immunodeficiency Virus)**
- HIV infects and destroys **CD4⁺ helper T cells**
- Progressive loss of CD4⁺ cells → collapse of adaptive immunity
- Normal CD4⁺ count: ~1000 cells/μL → AIDS diagnosis: <200 cells/μL
- Patients die from opportunistic infections (e.g., Pneumocystis pneumonia, Kaposi's sarcoma)

> 🔑 HIV is a retrovirus — it uses reverse transcriptase to integrate its RNA genome into the host's DNA, making it extremely difficult to eliminate.
      `
    },
    {
      id: 'imm6-allergies',
      type: 'text' as const,
      content: `
## Allergies & Hypersensitivity

An **allergy** is an exaggerated immune response to a normally harmless substance (allergen).

### Type I Hypersensitivity (Immediate)

| Step | What Happens |
|------|-------------|
| **1. Sensitization** | First exposure → B cells produce **IgE** antibodies specific to the allergen |
| **2. IgE binding** | IgE attaches to receptors on **mast cells** and **basophils** |
| **3. Re-exposure** | Allergen cross-links IgE on mast cells |
| **4. Degranulation** | Mast cells release **histamine**, prostaglandins, and leukotrienes |
| **5. Symptoms** | Vasodilation, mucus secretion, smooth muscle contraction, inflammation |

### Anaphylaxis
- Severe, systemic allergic reaction
- Massive histamine release → widespread vasodilation → **dangerous drop in blood pressure**
- Airway constriction → difficulty breathing
- Can be fatal within minutes without treatment
- **Epinephrine (EpiPen)** is the emergency treatment — constricts blood vessels, opens airways

### Transplant Rejection
- Donor MHC molecules differ from recipient's → immune system recognizes transplant as "non-self"
- **T cells** attack the transplanted tissue
- Minimized by **HLA matching** and **immunosuppressant drugs** (e.g., cyclosporine)
- Risk of rejection: hyperacute (minutes), acute (weeks-months), chronic (years)

> 🔑 Immunosuppressants prevent rejection but increase vulnerability to infections and cancer — it's a trade-off.
      `
    },
    {
      id: 'imm6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The antibody class responsible for allergic reactions is ___',
            options: ['IgG', 'IgM', 'IgA', 'IgE']
          },
          {
            label: 'HIV specifically targets and destroys ___ cells',
            options: ['CD8⁺ cytotoxic T', 'CD4⁺ helper T', 'B', 'NK']
          },
          {
            label: 'The emergency treatment for anaphylaxis is ___',
            options: ['antihistamine', 'epinephrine', 'aspirin', 'cyclosporine']
          },
          {
            label: 'In lupus (SLE), the immune system produces antibodies against the body\'s own ___',
            options: ['insulin', 'myelin', 'DNA and proteins', 'red blood cells']
          }
        ],
        correctAnswers: ['IgE', 'CD4⁺ helper T', 'epinephrine', 'DNA and proteins'],
        hint1: 'IgE binds to mast cells and triggers degranulation upon allergen re-exposure.',
        hint2: 'The loss of these "coordinator" cells explains why AIDS destroys adaptive immunity.',
        hint3: 'Epinephrine reverses the cardiovascular collapse and bronchoconstriction of anaphylaxis.',
        explanation: 'IgE mediates Type I hypersensitivity (allergies). HIV targets CD4⁺ helper T cells, which coordinate the entire adaptive immune response. Epinephrine (adrenaline) is the first-line treatment for anaphylaxis because it rapidly constricts blood vessels and relaxes airway smooth muscle. Lupus is characterized by anti-nuclear antibodies that attack the body\'s own DNA and nuclear proteins.'
      }
    }
  ]
}
