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
| II | Antibody (IgG/IgM) vs. CELL-SURFACE antigens | Minutes to days | Hemolytic disease of the newborn (Rh), transfusion reactions |
| III | Soluble antigen-antibody IMMUNE COMPLEXES depositing in tissues | Hours (local) to 1-2 weeks (serum sickness) | Serum sickness, lupus nephritis |
| IV | T cells (no antibody) | DELAYED (2-3 days) | TB skin test, poison ivy contact dermatitis |

Type I logic: first exposure sensitizes (IgE loads onto mast cells); re-exposure cross-links the IgE → massive histamine release. Type IV is the only antibody-INDEPENDENT type — hence the delay, since T cells must be recruited. Serum sickness's 1-2-week lag is different: it is the time needed to MAKE antibody against a first-time foreign protein.

### Autoimmunity: Tolerance Fails

Autoimmune disease = the failure of self-tolerance — self-reactive lymphocytes escape negative selection (or peripheral checkpoints) and attack host tissue. Name-level examples:

- **Type 1 diabetes**: T-cell destruction of pancreatic beta cells
- **Multiple sclerosis**: attack on CNS myelin
- **Systemic lupus erythematosus**: anti-nuclear antibodies; immune complexes (a type III mechanism) damage kidneys, joints, skin

### Immunodeficiency: The System Fails

- **HIV/AIDS**: HIV infects **CD4+ helper T cells** (using CD4 plus a chemokine co-receptor). Because helpers license BOTH B-cell antibody responses and cytotoxic responses, their loss collapses humoral AND cell-mediated immunity together. Falling CD4 counts track progression; opportunistic infections and rare cancers appear when counts get low.

<!-- yield:low -->
- The classic AIDS-defining opportunists are **Pneumocystis** pneumonia and **Candida** (oral or esophageal thrush).
<!-- /yield -->

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

- **ELISA**: antibody-based detection in a plate. DIRECT: an enzyme-linked antibody binds the target antigen; substrate → color in proportion to the amount. INDIRECT: antigen coats the plate and the question is whether the PATIENT'S serum holds antibodies against it (e.g., HIV screening); a labeled anti-human secondary antibody reports the binding.
- **Western blot**: proteins separated by size (gel electrophoresis), transferred to a membrane, then probed with specific antibody — identity plus approximate size.
- **Flow cytometry**: cells stream single-file past a laser; fluorescent antibodies against surface markers (e.g., anti-CD4) count cell subsets — how clinical CD4 counts are done.`
    },
    {
      id: 'imm4-worked',
      type: 'text' as const,
      content: `### Worked Example — An Rh Pregnancy with ELISA Data

**Problem 1.** A woman with blood type O, Rh-negative has her first child (type A, Rh-positive) after an uneventful delivery. Her second fetus is also Rh-positive, and that newborn is jaundiced and anemic.

- **(a)** Why was the FIRST Rh+ baby unharmed?
- **(b)** Which class of maternal anti-Rh antibody reaches the second fetus, and why can it?
- **(c)** What does that antibody do to the fetal red cells, and which hypersensitivity type is this?
- **(d)** Why is the newborn anemic and jaundiced?

**(a) The first child.** Sensitization typically occurs at delivery, when fetal red cells enter her circulation; she had no anti-Rh antibody before then, so her primary response came too late to harm that child. (Her anti-A can clear type A fetal cells first, which partly protects against Rh sensitization, though not fully, as here.)

**(b) The antibody class.** Her anti-Rh antibodies are IgG, the only isotype transported across the placenta. Had her response remained IgM-only, the pentamer could not cross and the fetus would be spared.

**(c) The mechanism.** The IgG binds fetal Rh+ red cells and marks them for destruction: antibody against a cell-surface antigen, a type II hypersensitivity.

**(d) The signs.** Hemolysis causes the anemia; hemoglobin breakdown yields bilirubin, which causes the jaundice.

**Problem 2.** During her second pregnancy, an indirect ELISA is run on her serum: Rh(D) antigen coats the plate, and the secondary is an enzyme-linked anti-human-IgG antibody. Her absorbance is 8-fold above the negative control and rises over the trimester.

- **(a)** What did the plate capture from her serum, and what produced the signal?
- **(b)** What does a signal from an anti-IgG secondary reveal about her immune history?
- **(c)** What do the rising readings over the trimester indicate?

**(a) The capture.** Plate-bound Rh antigen captured her anti-Rh antibodies; the enzyme-linked anti-IgG secondary bound those and generated the color signal.

**(b) Class-switched memory.** The secondary detects IgG, so she now has class-switched anti-Rh IgG: memory from the first delivery.

**(c) Rising titers.** An ongoing secondary response, likely boosted by small fetomaternal bleeds.

**Problem 3.** The same type O mother also carries anti-A antibodies, mostly IgM, and her second fetus is type A.

- **(a)** Predict the effect of her mostly-IgM anti-A on this type A fetus.
- **(b)** Could any of her anti-A still reach the fetus? Explain.

**(a) Mostly harmless.** Minimal: IgM is a pentamer and does not cross the placenta.

**(b) The small IgG fraction.** Yes, a little. Type O mothers make a little IgG anti-A, which can cross, so mild ABO disease can occur. This contrast (ABO IgM largely harmless in pregnancy vs. anti-Rh IgG dangerous) is exactly the kind of isotype logic MCAT passages reward.`
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
            yield: 'MEDIUM',
            explanation: `Contact dermatitis (like the TB skin test) is type IV: antigen-specific T cells must be recruited and activated in the tissue, which takes 2-3 days — the delay is the giveaway that NO pre-formed antibody is involved. Type I is immediate (minutes) via IgE and mast cells; types II and III are antibody-mediated, and poison ivy dermatitis involves neither antibodies against skin-cell surface antigens nor immune-complex deposition.`
          },
          {
            question: `Why does HIV infection ultimately impair BOTH antibody production and cytotoxic T-cell responses?`,
            options: [`HIV infects B cells and CD8+ T cells simultaneously`, `The virus destroys the bone marrow where all lymphocytes mature`, `HIV blocks V(D)J recombination in developing lymphocytes`, `HIV depletes CD4+ helper T cells needed by both arms`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `HIV targets CD4+ helper T cells; because helpers supply the cytokines and contact signals needed for full B-cell responses AND support CD8+ responses, their loss collapses humoral and cell-mediated immunity together. HIV does not primarily infect B cells or CD8+ cells, does not ablate marrow, and V(D)J recombination in new lymphocytes is unaffected.`
          },
          {
            question: `Type O red blood cells can be transfused into recipients of any ABO type because they:`,
            options: [`Lack both A and B surface antigens`, `Carry both A and B antigens, saturating recipient antibodies`, `Contain no plasma antibodies of any kind`, `Express extra Rh antigen that masks ABO differences`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Transfusion reactions occur when the RECIPIENT'S antibodies bind antigens on DONOR cells; O cells display no ABO antigen, so anti-A and anti-B in any recipient find nothing to bind — universal donor. Carrying both A and B antigens describes AB cells, which are the WORST universal donor. "No plasma antibodies" confuses cells with plasma (O plasma is actually rich in anti-A and anti-B), and Rh is a separate antigen system, not a mask.`
          },
          {
            question: `An indirect ELISA for HIV coats plates with viral antigen, adds patient serum, then adds an enzyme-linked anti-human antibody. A positive color change indicates that the patient's serum contains:`,
            options: [`Live HIV virions captured by the plate`, `Antibodies that bind the plated antigens`, `CD4+ T cells reactive to HIV antigens`, `The enzyme that produces the color`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `The indirect format detects the patient's ANTIBODIES: they bridge the plated antigen and the labeled anti-human secondary antibody, so color means seroconversion has occurred. The assay contains no live virus readout and no cells at all (so not CD4+ T cells — cell subsets are counted by flow cytometry). The enzyme is added by the lab as part of the secondary reagent, not found in serum.`
          },
          {
            question: `RhoGAM (anti-Rh antibody) given to an Rh-negative mother at delivery prevents hemolytic disease in future pregnancies by:`,
            options: [`Inducing her to produce protective anti-Rh IgG of her own`, `Neutralizing anti-Rh antibodies she has already made`, `Clearing fetal Rh+ cells before she can be sensitized`, `Blocking IgM transport across the placenta`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `RhoGAM is passive immunization used preventively: the injected antibody opsonizes and clears fetal Rh+ red cells before maternal B cells are activated, so the mother is never sensitized and forms no anti-Rh memory. It PREVENTS active immunity rather than inducing it (so inducing her own anti-Rh IgG is backwards), it cannot help once sensitization exists, and IgM never crosses the placenta anyway.`
          }
        ]
      }
    },
    {
      id: 'imm4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Four hypersensitivities.** I: IgE, immediate; II: antibody to cell-surface antigen; III: immune complexes; IV: T cells, delayed.
- **Tolerance vs. defense.** Autoimmunity is failed self-tolerance; HIV kills CD4+ helpers and collapses both adaptive arms.
- **ABO transfusion logic.** Plasma holds antibody to the antigens your cells lack: O is the universal donor, AB the universal recipient.
- **Rh disease and RhoGAM.** A sensitized Rh- mother's anti-Rh IgG crosses the placenta; RhoGAM prevents the sensitization.

**Common traps**

- **Every delay means type IV.** Type IV's 2–3 days is T-cell recruitment; serum sickness's 1–2 weeks is time to make antibody (type III).
- **Type O plasma is empty.** O cells lack ABO antigens, but O plasma is rich in anti-A and anti-B.
- **First Rh+ baby at risk.** Sensitization usually happens at the first delivery, so it is the NEXT Rh+ fetus that is attacked.
- **Indirect ELISA finds virus.** The indirect format detects the patient's ANTIBODIES to plated antigen; flow cytometry counts cells.

<!-- yield:low -->
**Low-yield extras**

- Pneumocystis pneumonia and Candida thrush are the classic AIDS opportunists.
<!-- /yield -->`
    }
  ]
};
