export const mcatImmunoPart3Data = {
  topicSlug: 'mcat-genetics-evolution-immunology-mcat',
  sections: [
    {
      id: 'imm3-intro',
      type: 'text' as const,
      content: `# Immunology — Deep Dive

**Part 3 of 4 — Antibodies, Memory & Vaccination**

### Antibody Architecture

An antibody (immunoglobulin) is a Y-shaped protein of **two identical heavy chains + two identical light chains**, held together by **disulfide bonds**:

- **Fab region** (the two arms): contains the VARIABLE domains of heavy and light chains; the tips bind the **epitope** — the specific molecular patch of the antigen. Two arms → two identical binding sites per monomer.
- **Fc region** (the stem): CONSTANT domains of the heavy chain only. It determines the antibody's class (isotype) and its effector behavior — which cells' Fc receptors it engages, whether it activates complement, whether it crosses the placenta.

Variable region = WHAT is bound; constant region = WHAT HAPPENS next.

### The Five Isotypes

| Isotype | Structure | Signature roles |
|---------|-----------|-----------------|
| IgM | Pentamer (secreted) | FIRST antibody of a primary response; great agglutinator and complement activator |
| IgG | Monomer | Most abundant in serum; opsonization, neutralization; ONLY class that crosses the placenta |
| IgA | Dimer (secretory) | Mucosal surfaces — saliva, tears, gut, breast milk |
| IgE | Monomer | Binds mast cells/basophils; allergy and anti-parasite responses |
| IgD | Monomer | Membrane-bound B-cell receptor on naive B cells (with monomeric IgM) |

### What Antibodies Actually Do

Antibodies **never kill pathogens directly** — they tag and disable:

1. **Neutralization**: coat toxins or viral attachment proteins so they cannot bind host cells
2. **Opsonization**: the Fc stem flags the microbe for phagocytes bearing Fc receptors
3. **Agglutination**: multivalent antibodies (especially pentameric IgM, 10 binding sites) clump pathogens into easily cleared lattices
4. **Complement activation**: antigen-bound IgM or IgG triggers the classical pathway → opsonization, MAC, inflammation

### Improving the Response: Class Switching & Affinity Maturation

- **Class switching (isotype switching)**: a B cell swaps the heavy-chain CONSTANT region (IgM → IgG, IgA, or IgE) under helper-T cytokine direction. The VARIABLE region — and thus antigen specificity — is kept. Same target, new effector toolkit.
- **Affinity maturation**: in germinal centers, activated B cells undergo **somatic hypermutation** of their variable-region genes; clones whose mutated receptors bind antigen more tightly outcompete the rest. The average antibody affinity climbs over the course of a response.

### Primary vs. Secondary Response

- **Primary** (first exposure): lag of about 1-2 weeks while rare clones expand; modest peak; **IgM first**, then some IgG
- **Secondary** (re-exposure): memory cells respond within days; antibody titer is far higher, predominantly high-affinity **IgG**, and persists longer

This curve is the entire logic of vaccination: pay the slow primary response against a harmless preparation so the real pathogen meets a secondary response.

### Active vs. Passive, Natural vs. Artificial

| | Active (you make it; memory) | Passive (given antibodies; no memory) |
|---|------------------------------|----------------------------------------|
| Natural | Recovering from infection | Maternal IgG across placenta; IgA in breast milk |
| Artificial | **Vaccination** | Antivenom; monoclonal antibody therapy |

Passive immunity is immediate but temporary — transferred antibodies degrade over weeks and no memory cells are formed.

**Herd immunity**: when enough of a population is immune, transmission chains break, indirectly protecting the unvaccinated (infants, the immunocompromised). The required coverage rises with how contagious the pathogen is.`
    },
    {
      id: 'imm3-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading Titer Curves After Vaccination

**Passage-style problem.** Researchers vaccinate volunteers with a novel protein antigen on day 0 and give a booster on day 60. Serum antibody titers specific to the antigen are measured weekly, distinguishing IgM from IgG. Results:

- Days 0-7: no detectable specific antibody
- Days 10-21: IgM rises first, peaks near day 14, then declines; IgG rises later to a modest peak
- Days 60-67 (after the booster): IgG climbs within ~3-4 days to a level roughly 10-fold higher than the first peak and stays elevated for months; IgM rises only slightly

**Question 1 — Why the 10-day silence after the first dose?** The volunteers' B-cell repertoires contained only rare clones matching this antigen. Clonal selection, T-dependent activation, and expansion into plasma cells take days — the primary-response lag.

**Question 2 — Why is IgM first, then IgG?** Naive B cells secrete IgM by default. As helper-T cytokines drive class switching, the SAME variable regions are joined to gamma constant regions, so IgG specific for the antigen appears later. The specificity never changes — only the Fc effector stem.

**Question 3 — Explain the booster response's speed, magnitude, and class.** Memory B cells generated during the primary response are more numerous than the original naive clones, already class-switched, and carry affinity-matured receptors. Hence the response is faster (days, not weeks), larger (about 10-fold), and predominantly high-affinity IgG — the fingerprint of a secondary response.

**Question 4 — A volunteer instead receives pre-formed antibody against the antigen on day 0 and is tested on day 120. Predict the titer.** Near zero. Passive antibody transfer provides immediate protection but decays with the IgG half-life (weeks) and generates NO memory cells, because the recipient's own B cells were never activated.`
    },
    {
      id: 'imm3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Antibodies & Immunological Memory** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which part of an antibody determines whether it can activate complement and which phagocyte receptors it engages?`,
            options: [`The variable domains of the light chains`, `The epitope it recognizes on the antigen`, `The Fc (constant) region of the heavy chains`, `The disulfide bonds between chains`],
            correctAnswer: 2,
            explanation: `Effector functions — complement activation, Fc-receptor binding, placental transfer — are set by the heavy-chain constant region (Fc), which defines the isotype. Variable domains (choice A) determine antigen SPECIFICITY, not effector behavior. The epitope is part of the ANTIGEN, not the antibody, and disulfide bonds merely hold the chains together.`
          },
          {
            question: `A newborn has protective levels of antibody against measles despite never being infected or vaccinated. The most likely explanation is:`,
            options: [`Maternal IgG that crossed the placenta`, `Maternal IgM that crossed the placenta`, `The newborn's own secondary immune response`, `Vaccine-induced active immunity acquired in utero`],
            correctAnswer: 0,
            explanation: `IgG is the ONLY isotype that crosses the placenta, giving the infant temporary natural passive immunity. IgM is a large pentamer that cannot cross (choice B). The newborn has had no antigen exposure, so neither a secondary response nor active immunity is possible — and passive protection will fade over months as maternal IgG degrades.`
          },
          {
            question: `During class switching, a B cell that switches from IgM to IgG production:`,
            options: [`Changes its antigen specificity to bind new epitopes`, `Retains the same variable region and specificity`, `Replaces its light chains with additional heavy chains`, `Loses the ability to secrete antibody entirely`],
            correctAnswer: 1,
            explanation: `Class switching swaps only the heavy-chain CONSTANT region; the variable region — and therefore specificity — is retained, so the same epitope is now attacked with IgG effector functions. Specificity changes (choice A) would defeat the purpose; that is altered only in AFFINITY by somatic hypermutation, which fine-tunes rather than retargets. Light chains are never replaced by heavy chains, and switched cells secrete robustly.`
          },
          {
            question: `Antibodies contribute to pathogen clearance by all of the following EXCEPT:`,
            options: [`Neutralizing viral attachment proteins`, `Opsonizing bacteria for phagocytes`, `Activating the classical complement pathway`, `Directly lysing bacteria with perforin`],
            correctAnswer: 3,
            explanation: `Antibodies never kill directly — they neutralize, opsonize, agglutinate, and trigger complement, leaving destruction to phagocytes and the MAC. Perforin is the weapon of cytotoxic T cells and NK cells, not a property of immunoglobulins. The other three options are the classic antibody effector functions.`
          },
          {
            question: `Compared with the primary response to an antigen, the secondary response is characterized by:`,
            options: [`A longer lag phase but higher peak titer`, `Predominantly IgM production at higher levels`, `Identical kinetics but different specificity`, `A shorter lag and higher titer of mostly IgG`],
            correctAnswer: 3,
            explanation: `Memory cells are abundant, pre-switched, and affinity-matured, so re-exposure yields antibody within days, at much higher titer, dominated by high-affinity IgG. The lag SHORTENS, not lengthens (choice A). IgM dominance is the primary-response signature, and specificity is preserved — the same epitopes are recognized, just better and faster.`
          }
        ]
      }
    },
    {
      id: 'imm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Antibody = 2 heavy + 2 light chains joined by disulfide bonds; Fab variable tips bind the epitope, the Fc constant stem sets class and effector function
- Isotypes: IgM first responder (pentamer), IgG serum workhorse (crosses placenta), IgA mucosal dimer, IgE mast cells/allergy/parasites, IgD naive B-cell receptor
- Antibodies tag, never kill: neutralization, opsonization, agglutination, classical complement activation
- Class switching swaps the constant region (keeps specificity); affinity maturation via somatic hypermutation raises binding strength in germinal centers
- Primary response: long lag, IgM-first, modest; secondary: fast, huge, high-affinity IgG — the basis of vaccination
- Active immunity (infection, vaccination) builds memory; passive (maternal IgG/IgA, antivenom) is immediate but temporary with no memory; herd immunity protects the unvaccinated by breaking transmission`
    }
  ]
};
