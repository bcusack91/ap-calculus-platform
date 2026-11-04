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

**Problem 1.** Volunteers are vaccinated with a novel protein antigen on day 0, and specific IgM and IgG are measured weekly. Days 0-7 show no specific antibody. From days 10-21, IgM rises first and peaks near day 14; IgG rises later to a modest peak.

- **(a)** Why is there no specific antibody for the first week?
- **(b)** Why does IgM appear before IgG?
- **(c)** Do the later IgG molecules bind the same epitope as the early IgM?

**(a) The primary lag.** The volunteers' B-cell repertoires contained only rare clones matching this antigen. Clonal selection, T-dependent activation and expansion into plasma cells take days.

**(b) IgM first.** Naive B cells secrete IgM by default. Helper-T cytokines then drive class switching, joining the SAME variable regions to gamma constant regions, so antigen-specific IgG appears later.

**(c) Specificity.** Yes. Class switching swaps only the heavy-chain constant region and keeps the variable region, so the epitope is the same (somatic hypermutation only fine-tunes affinity).

**Problem 2.** The volunteers from Problem 1 get a booster on day 60. Within about 3-4 days their IgG climbs to roughly 10-fold the first peak and stays elevated for months; IgM rises only slightly.

- **(a)** Which cells respond to the booster, and how do they differ from the naive clones that met the first dose?
- **(b)** Why is the response so much faster and larger?
- **(c)** Why is it mostly IgG rather than IgM?

**(a) Memory B cells.** The primary response left memory B cells that are more numerous than the original naive clones, already class-switched, and carrying affinity-matured receptors.

**(b) Faster and larger.** It is a short expansion from a much larger starting pool: antibody appears within days, not weeks, and peaks about 10-fold higher.

**(c) High-affinity IgG.** The memory cells switched to IgG and were affinity-matured during the primary response, so the booster yields mostly high-affinity IgG: the fingerprint of a secondary response.

**Problem 3.** A different volunteer receives no vaccine. Instead he is given pre-formed IgG against the same antigen on day 0, and his specific titer is tested on day 120.

- **(a)** Is he protected right after the injection?
- **(b)** What will his specific titer be on day 120?
- **(c)** Has he formed memory cells against the antigen?

**(a) Immediate protection.** Yes. Passive antibody transfer protects at once, with no lag.

**(b) Day 120.** Near zero. The transferred antibody decays with the IgG half-life of weeks.

**(c) No memory.** No. His own B cells were never activated, so passive transfer generates NO memory cells.`
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
            yield: 'HIGH',
            explanation: `Effector functions — complement activation, Fc-receptor binding, placental transfer — are set by the heavy-chain constant region (Fc), which defines the isotype. Variable domains of both heavy and light chains determine antigen SPECIFICITY, not effector behavior. The epitope is part of the ANTIGEN, not the antibody, and disulfide bonds merely hold the chains together.`
          },
          {
            question: `A newborn has protective levels of antibody against measles despite never being infected or vaccinated. The most likely explanation is:`,
            options: [`Maternal IgG that crossed the placenta`, `Maternal IgM that crossed the placental barrier`, `The newborn's own secondary immune response`, `Vaccine-induced active immunity acquired in utero`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `IgG is the ONLY isotype that crosses the placenta, giving the infant temporary natural passive immunity. IgM is a large pentamer that cannot cross, ruling out maternal IgM. The newborn has had no antigen exposure, so neither a secondary response nor active immunity is possible — and passive protection will fade over months as maternal IgG degrades.`
          },
          {
            question: `A B-cell clone secreting IgM against a flu surface epitope class-switches to IgA. What does the new IgA bind, and where does it mainly act?`,
            options: [`A new epitope picked during the switch, at mucosal surfaces`, `The same flu epitope, mainly at mucosal surfaces`, `The same flu epitope, mainly on mast cells as an allergy trigger`, `A new epitope picked during the switch, mainly in the serum`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Class switching swaps only the heavy-chain constant region, so the variable region and its flu epitope are kept; the new IgA constant region is what sends the antibody to mucosal surfaces such as the airway, saliva and gut. Both "new epitope" options are wrong because specificity never changes in a switch (somatic hypermutation only fine-tunes affinity), and the serum is dominated by IgG, not IgA. Arming mast cells is the role of IgE, not IgA.`
          },
          {
            question: `Antibodies contribute to pathogen clearance by all of the following EXCEPT:`,
            options: [`Neutralizing viral attachment proteins`, `Opsonizing bacteria for phagocytes`, `Activating the classical complement pathway`, `Directly lysing bacteria with perforin`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Antibodies never kill directly — they neutralize, opsonize, agglutinate, and trigger complement, leaving destruction to phagocytes and the MAC. Perforin is the weapon of cytotoxic T cells and NK cells, not a property of immunoglobulins. The other three options are the classic antibody effector functions.`
          },
          {
            question: `Serum antibody from an immunized volunteer is tested weekly for how tightly it binds the antigen. Over several weeks of the response, average binding strength steadily rises. What best explains this?`,
            options: [`Class switching swaps in variable regions that bind more tightly`, `The antigen acts as a template that reshapes existing antibodies`, `IgM pentamers split into monomers that each bind more tightly`, `Mutated B-cell clones that bind more tightly outcompete the rest`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `This is affinity maturation: in germinal centers, activated B cells undergo somatic hypermutation of their variable-region genes, and clones whose receptors bind the antigen more tightly outcompete the rest, so average affinity climbs. Class switching changes the constant region and keeps the variable region, so it cannot raise affinity. Antigen never serves as a template for antibody shape, and IgM pentamers are not split into higher-affinity monomers; secreted IgM stays a pentamer.`
          }
        ]
      }
    },
    {
      id: 'imm3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Antibody architecture.** Two heavy and two light chains; variable Fab tips bind the epitope, the constant Fc stem sets the class.
- **Five isotypes.** IgM first (pentamer), IgG crosses the placenta, IgA guards mucosa, IgE arms mast cells, IgD marks naive B cells.
- **Switching vs. maturation.** Class switching swaps the constant region and keeps specificity; somatic hypermutation raises affinity.
- **Primary vs. secondary.** First exposure: long lag, IgM first, modest peak; re-exposure: days, far higher, high-affinity IgG.

**Common traps**

- **Antibodies that kill.** Antibodies neutralize, opsonize, agglutinate and trigger complement; perforin belongs to T and NK cells.
- **Switching changes the target.** Class switching keeps the variable region, so the same epitope is bound with new effector functions.
- **Maternal IgM in the newborn.** Only IgG crosses the placenta; the large IgM pentamer cannot.
- **Passive immunity remembers.** Transferred antibody protects at once but fades over weeks and leaves no memory cells.`
    }
  ]
};
