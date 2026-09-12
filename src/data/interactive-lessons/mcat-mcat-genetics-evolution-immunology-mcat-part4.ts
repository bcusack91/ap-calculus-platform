export const mcatImmunoPart4Data = {
  topicSlug: 'mcat-genetics-evolution-immunology-mcat',
  sections: [
    {
      id: 'imm4-intro',
      type: 'text' as const,
      content: `# Immunology — Deep Dive

**Part 4 of 4 — MCAT Integration: Immune Dysfunction & Lab Techniques**

### Hypersensitivity: Four Ways the System Overreacts

| Type | Mediator | Timing | Classic examples |
|------|----------|--------|------------------|
| I | IgE on mast cells/basophils | Immediate (minutes) | Allergic rhinitis, asthma, anaphylaxis |
| II | Antibody (IgG/IgM) vs. CELL-SURFACE antigens | Hours | Hemolytic disease of the newborn (Rh), transfusion reactions |
| III | Soluble antigen-antibody IMMUNE COMPLEXES depositing in tissues | Hours | Serum sickness, lupus nephritis |
| IV | T cells (no antibody) | DELAYED (2-3 days) | TB skin test, poison ivy contact dermatitis |

Type I logic: first exposure sensitizes (IgE loads onto mast cells); re-exposure cross-links the IgE → massive histamine release. Type IV is the only antibody-INDEPENDENT type — hence the delay, since T cells must be recruited.

### Autoimmunity: Tolerance Fails

Autoimmune disease = the failure of self-tolerance — self-reactive lymphocytes escape negative selection (or peripheral checkpoints) and attack host tissue. Name-level examples:

- **Type 1 diabetes**: T-cell destruction of pancreatic beta cells
- **Multiple sclerosis**: attack on CNS myelin
- **Systemic lupus erythematosus**: anti-nuclear antibodies; immune complexes (a type III mechanism) damage kidneys, joints, skin

### Immunodeficiency: The System Fails

- **HIV/AIDS**: HIV infects **CD4+ helper T cells** (using CD4 plus a chemokine co-receptor). Because helpers license BOTH B-cell antibody responses and cytotoxic responses, their loss collapses humoral AND cell-mediated immunity together. Falling CD4 counts track progression; opportunistic infections (Pneumocystis, Candida) and rare cancers appear when counts get low.
- **SCID** (severe combined immunodeficiency): inherited absence of functional B and T cells — "combined" — fatal without intervention (name level).

### Blood Typing: Applied Immunology

ABO antigens are carbohydrates on red cells; plasma contains antibodies (mostly IgM) against whichever antigens you LACK:

| Type | RBC antigens | Plasma antibodies | Can donate RBCs to |
|------|--------------|-------------------|--------------------|
| A | A | anti-B | A, AB |
| B | B | anti-A | B, AB |
| AB | A and B | none | AB (universal RECIPIENT) |
| O | none | anti-A and anti-B | everyone (universal DONOR) |

Transfusion logic: match the DONOR's cell antigens against the RECIPIENT's antibodies. Type O cells carry no ABO antigen to attack → universal donor; type AB plasma attacks nothing → universal recipient.

**Rh factor**: an Rh- mother carrying an Rh+ fetus can be sensitized at delivery; her anti-Rh **IgG** (which crosses the placenta, unlike IgM) attacks a SUBSEQUENT Rh+ fetus's red cells — hemolytic disease of the newborn, a type II hypersensitivity. Prevention: anti-Rh antibody (RhoGAM) given to the mother clears fetal cells before she is sensitized.

### Lab Techniques as Passage Tools

- **ELISA**: antibody-based detection in a plate. DIRECT concept: an enzyme-linked antibody binds the target antigen; substrate → color, intensity proportional to amount. INDIRECT concept: the plate presents antigen and the test asks whether the PATIENT'S serum contains antibodies against it (e.g., HIV screening); a labeled anti-human secondary antibody reports the binding.
- **Western blot**: proteins separated by size (gel electrophoresis), transferred to a membrane, then probed with specific antibody — identity plus approximate size.
- **Flow cytometry**: cells stream single-file past a laser; fluorescent antibodies against surface markers (e.g., anti-CD4) count cell subsets — this is how clinical CD4 counts are done.`
    },
    {
      id: 'imm4-worked',
      type: 'text' as const,
      content: `### Worked Example — An Rh Pregnancy with ELISA Data

**Passage-style problem.** A woman with blood type O, Rh-negative has her first child (type A, Rh-positive) with an uneventful delivery. During her second pregnancy (fetus again Rh-positive), an indirect ELISA is run on her serum against Rh(D) antigen coated on the plate, using an enzyme-linked anti-human-IgG secondary antibody. Her absorbance readings are 8-fold above the negative control and rise over the trimester. The second newborn is jaundiced and anemic.

**Question 1 — Why was the FIRST Rh+ baby unharmed?** Sensitization typically occurs at delivery, when fetal red cells enter maternal circulation. During that first pregnancy the mother had no anti-Rh antibodies yet; her primary response began only after exposure at birth — too late to affect that child.

**Question 2 — What does the ELISA result mean, mechanistically?** Plate-bound Rh antigen captured maternal anti-Rh antibodies; the anti-IgG secondary bound those and generated signal. So the mother now has class-switched anti-Rh IgG (memory from the first delivery). Rising titers indicate an ongoing secondary response — likely boosted by small fetomaternal bleeds.

**Question 3 — Why is the SECOND baby affected, and why does the antibody class matter?** Her anti-Rh antibodies are IgG — the only isotype transported across the placenta. They bind fetal Rh+ red cells, marking them for destruction (type II hypersensitivity): hemolysis → anemia; hemoglobin breakdown → bilirubin → jaundice. Had her response remained IgM-only, the pentamer could not cross and the fetus would be spared.

**Question 4 — Her anti-A antibodies (she is type O) are mostly IgM. Predict their effect on this type A fetus.** Minimal — IgM does not cross the placenta. This contrast (ABO IgM largely harmless in pregnancy vs. anti-Rh IgG dangerous) is exactly the kind of isotype logic MCAT passages reward.

**Question 5 — How does RhoGAM prevent all of this?** Anti-Rh antibody given around delivery binds and clears fetal Rh+ cells from maternal blood BEFORE her B cells are activated — passive immunity used to prevent a primary response, so no memory forms.`
    },
    {
      id: 'imm4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Immune Dysfunction & Lab Methods** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient develops an itchy rash 48 hours after brushing against poison ivy. This reaction is classified as which hypersensitivity type, and why?`,
            options: [`Type I, because IgE-coated mast cells degranulate immediately`, `Type II, because antibodies bind skin-cell surface antigens`, `Type IV, because it is T-cell mediated and therefore delayed`, `Type III, because immune complexes deposit in the skin`],
            correctAnswer: 2,
            explanation: `Contact dermatitis (like the TB skin test) is type IV: antigen-specific T cells must be recruited and activated in the tissue, which takes 2-3 days — the delay is the giveaway that NO pre-formed antibody is involved. Type I is immediate (minutes) via IgE and mast cells; types II and III are antibody-mediated and typically manifest within hours, not days.`
          },
          {
            question: `Why does HIV infection ultimately impair BOTH antibody production and cytotoxic T-cell responses?`,
            options: [`HIV infects B cells and CD8+ T cells simultaneously`, `The virus destroys the bone marrow where all lymphocytes mature`, `HIV blocks V(D)J recombination in developing lymphocytes`, `HIV depletes CD4+ helper T cells, which are required to license both arms of adaptive immunity`],
            correctAnswer: 3,
            explanation: `HIV targets CD4+ helper T cells; because helpers supply the cytokines and CD40L needed for full B-cell responses AND support CD8+ responses, their loss collapses humoral and cell-mediated immunity together. HIV does not primarily infect B cells or CD8+ cells (choice A), does not ablate marrow (choice B), and V(D)J recombination in new lymphocytes is unaffected (choice C).`
          },
          {
            question: `Type O red blood cells can be transfused into recipients of any ABO type because they:`,
            options: [`Lack A and B surface antigens for recipient antibodies to attack`, `Carry both A and B antigens, saturating recipient antibodies`, `Contain no plasma antibodies of any kind`, `Express extra Rh antigen that masks ABO differences`],
            correctAnswer: 0,
            explanation: `Transfusion reactions occur when the RECIPIENT'S antibodies bind antigens on DONOR cells; O cells display no ABO antigen, so anti-A and anti-B in any recipient find nothing to bind — universal donor. Choice B describes AB cells, which are the WORST universal donor. Choice C confuses cells with plasma (O plasma is actually rich in anti-A and anti-B), and Rh is a separate antigen system, not a mask.`
          },
          {
            question: `An indirect ELISA for HIV coats plates with viral antigen, adds patient serum, then adds an enzyme-linked anti-human antibody. A positive color change indicates that the patient's serum contains:`,
            options: [`Live HIV virions`, `Antibodies that bind the plated HIV antigens`, `CD4+ T cells reactive to HIV`, `The enzyme used for detection`],
            correctAnswer: 1,
            explanation: `The indirect format detects the patient's ANTIBODIES: they bridge the plated antigen and the labeled anti-human secondary antibody, so color means seroconversion has occurred. The assay contains no live virus readout (choice A) and no cells at all (choice C — cell subsets are counted by flow cytometry). The enzyme is added by the lab as part of the secondary reagent, not found in serum.`
          },
          {
            question: `RhoGAM (anti-Rh antibody) given to an Rh-negative mother at delivery prevents hemolytic disease in future pregnancies by:`,
            options: [`Inducing her to produce protective anti-Rh IgG of her own`, `Neutralizing anti-Rh antibodies she has already made`, `Clearing fetal Rh-positive cells before her immune system mounts a primary response, so no memory forms`, `Blocking IgM transport across the placenta`],
            correctAnswer: 2,
            explanation: `RhoGAM is passive immunization used preventively: the injected antibody opsonizes and clears fetal Rh+ red cells before maternal B cells are activated, so the mother is never sensitized and forms no anti-Rh memory. It PREVENTS active immunity rather than inducing it (choice A is backwards), it cannot help once sensitization exists (choice B), and IgM never crosses the placenta anyway (choice D).`
          }
        ]
      }
    },
    {
      id: 'imm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Hypersensitivity: I = IgE/mast cells, immediate (anaphylaxis); II = antibody vs. cell-surface antigen (Rh disease, transfusion reactions); III = immune-complex deposition (lupus nephritis, serum sickness); IV = T-cell mediated and DELAYED (TB test, poison ivy)
- Autoimmunity = failed self-tolerance (type 1 diabetes, MS, lupus); immunodeficiency = failed defense — HIV kills CD4+ helpers and collapses both adaptive arms; SCID = no functional B or T cells
- ABO: your plasma carries IgM against the antigens your cells lack; O = universal RBC donor (no antigens), AB = universal recipient (no antibodies)
- Rh disease: sensitized Rh- mother makes anti-Rh IgG, which crosses the placenta and hemolyzes the next Rh+ fetus's cells (type II); RhoGAM prevents sensitization with passive antibody
- Lab toolkit: ELISA = antibody-based detection (indirect format finds the PATIENT'S antibodies); Western blot = size-separated proteins probed by antibody; flow cytometry = fluorescent-antibody cell counting (clinical CD4 counts)`
    }
  ]
};
