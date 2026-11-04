export const mcatOchemSubElimPart2Data = {
  topicSlug: 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat',
  sections: [
    {
      id: 'sn2-intro',
      type: 'text' as const,
      content: `# SN1, SN2, E1 & E2 for the MCAT

**Part 2 of 4 — Mechanisms & Energy Diagrams**

### SN2: One Concerted Step

$Nu^- + R{-}LG \\to Nu{-}R + LG^-$

- Nucleophile attacks the carbon **directly opposite** the leaving group (backside attack)
- Bond making and bond breaking happen simultaneously through a single transition state
- The carbon **inverts** like an umbrella in the wind (Walden inversion)
- Energy diagram: **one hump** — a single transition state, no intermediate

### SN1: Ionize First, Then Capture

Step 1 (slow, rate-determining): $R{-}LG \\to R^+ + LG^-$

Step 2 (fast): $R^+ + Nu \\to R{-}Nu$

- Energy diagram: **two humps** with a carbocation valley between them
- The FIRST transition state is the highest — ionization is rate-determining
- The planar sp2 carbocation can be attacked from either face → mixture of configurations
- **Rearrangements possible**: hydride or methyl shifts convert a less stable cation into a more stable one

### E2: One Concerted Step, Anti-Periplanar

Base removes a beta-H **at the same time** as the leaving group departs and the pi bond forms.

- Requires the beta-H and the leaving group to be **anti-periplanar** (dihedral angle 180°)
- In cyclohexanes, this means BOTH the H and the LG must be **axial** (trans-diaxial)
- Energy diagram: one hump, like SN2, but the base pulls a proton instead of attacking carbon

### E1: Ionize First, Then Deprotonate

Step 1 (slow): same carbocation formation as SN1

Step 2 (fast): a weak base removes a beta-H, forming the alkene

- SN1 and E1 share the same rate-determining step, so they almost always occur **together** as competing product channels from the same carbocation

### Regiochemistry of Elimination

- **Zaitsev product**: more substituted alkene (more stable — favored by E1 and by E2 with small bases like ethoxide)
- **Hofmann product**: less substituted alkene — favored when the base is bulky (tert-butoxide) and cannot reach the more hindered beta-H
- Alkene stability: tetrasubstituted > trisubstituted > disubstituted > monosubstituted; trans (E) > cis (Z) for disubstituted

### Reading Energy Diagrams (MCAT favorite)

- Number of humps = number of steps; valleys between humps = intermediates
- Rate-determining step = the step whose transition state is **highest in energy overall**
- Hammond postulate: the transition state resembles the species **closest to it in energy** — for endothermic carbocation formation, the TS is "late" and carbocation-like, which is why cation stability controls SN1/E1 rates`
    },
    {
      id: 'sn2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Mechanisms & Energy Diagrams

**Problem 1.** tert-Butyl bromide is hydrolyzed in water to tert-butanol.

- **(a)** What are the steps of the mechanism?
- **(b)** Which step is rate-determining, and how does the energy diagram show it?
- **(c)** How many transition states does the diagram have?
- **(d)** What is the rate law?

**(a) Steps.** (i) Ionization to the tert-butyl cation + $Br^-$ (slow); (ii) water attacks the cation (fast); (iii) the protonated alcohol (an oxonium ion) loses a proton to give the neutral alcohol (fast).

**(b) Rate-determining step.** The ionization TS is the **highest** point on the diagram, so step 1 is rate-determining. Read the highest transition state overall, not the tallest individual hump measured from its own valley.

**(c) Transition states.** One per step, so three: the first two are the ones usually drawn, and the final proton transfer adds a third small hump.

**(d) Rate law.** With ionization as the slow step from (b): $\\text{rate} = k[(CH_3)_3CBr]$. Water's concentration doesn't appear, because water acts only after the slow step.

**Problem 2.** 3-Methyl-2-butanol is treated with concentrated HBr.

- **(a)** Which carbocation forms first?
- **(b)** What rearrangement follows, and why?
- **(c)** What are the major and minor substitution products?

**(a) First cation.** Protonation of OH → water leaves → a **secondary** cation at C2 of the 3-methylbutane skeleton.

**(b) Hydride shift.** Adjacent C3 bears an H and two methyls: a **1,2-hydride shift** from C3 to C2 gives the more stable **tertiary** cation at C3.

**(c) Products.** Bromide captures the tertiary cation: major product **2-bromo-2-methylbutane** (rearranged), along with some unrearranged 2-bromo-3-methylbutane. Any "unexpected" connectivity from an alcohol + strong acid signals a hydride or methyl shift.

**Problem 3.** 2-Bromopentane is treated separately with (i) sodium methoxide and (ii) potassium tert-butoxide.

- **(a)** Which beta-hydrogens are available, and which alkene does each give?
- **(b)** What is the major alkene with methoxide, and with which geometry?
- **(c)** What is the major alkene with tert-butoxide?
- **(d)** Which mechanism operates in both cases?

**(a) Beta-hydrogens.** Beta-hydrogens sit on C1 (→ 1-pentene, monosubstituted) and on C3 (→ 2-pentene, disubstituted).

**(b) Methoxide.** A small strong base → **Zaitsev** → 2-pentene major, mostly trans (E), the more stable geometry.

**(c) tert-Butoxide.** A bulky base → **Hofmann** → 1-pentene major.

**(d) Mechanism.** Both are E2 (strong bases, second-order conditions). For any elimination, check WHICH beta-carbon (Zaitsev vs Hofmann) and, for an internal alkene, WHICH geometry (trans favored).

**Problem 4.** In the stable chair of a cyclohexyl chloride, Cl (C1) and two alkyl groups, one on beta-carbon C2, are equatorial; a ring flip makes all three axial. The other beta-carbon, C6, is a $CH_2$. Strong base gives slow E2 and ONLY the less substituted alkene.

- **(a)** What geometry does E2 require in a chair?
- **(b)** In which chair can the Cl react, and why is the reaction slow?
- **(c)** Which beta-H is anti to the Cl in that chair, and why does only the non-Zaitsev alkene form?

**(a) Geometry.** E2 needs H and Cl anti-periplanar, which in a chair means both **axial** (trans-diaxial).

**(b) Reactive chair.** The Cl is axial only after the ring flip, in the higher-energy chair with all three groups axial, so only a small fraction of molecules is in the reactive conformation → slow overall rate.

**(c) One anti H.** In the flipped chair, C2's alkyl group is axial, so C2's only H is equatorial and not anti to the Cl. C6 has an axial H, so elimination goes only toward C6, giving the less substituted alkene: **stereoelectronics override thermodynamic preference**.

<!-- yield:low -->
- Named case: this is menthyl chloride, which gives only 2-menthene. Its diastereomer neomenthyl chloride has the Cl axial in its stable chair, eliminates much faster, and gives mostly the Zaitsev alkene, 3-menthene.
<!-- /yield -->`
    },
    {
      id: 'sn2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Mechanisms & Energy Diagrams** 🎯`,
      exercise: {
        questions: [
          {
            question: `An energy diagram for a substitution reaction shows two maxima separated by a shallow minimum. The species at the minimum is:`,
            options: [`The transition state`, `A carbocation intermediate`, `The final product`, `A resonance structure of the reactant`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `A valley between two transition-state humps is an intermediate — for SN1, the carbocation. Transition states are the maxima and can never be isolated; intermediates sit in energy minima and have finite lifetimes.`
          },
          {
            question: `The E2 elimination of a substituted cyclohexyl bromide occurs only from the conformation in which the bromine is:`,
            options: [`Equatorial, with an axial beta-H`, `Axial, with an axial beta-H`, `Axial, with an equatorial beta-H`, `Equatorial, with an equatorial beta-H`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `E2 requires anti-periplanar geometry. In a cyclohexane chair, only trans-diaxial H and LG (both axial, on adjacent carbons) achieve a 180° dihedral; any pairing that involves an equatorial position is gauche, not anti-periplanar. If the Br is locked equatorial, the molecule must flip (or cannot eliminate toward that carbon).`
          },
          {
            question: `3-Bromo-2,2-dimethylbutane reacts under SN1 conditions and gives mostly products derived from a tertiary carbocation. This is best explained by:`,
            options: [`A 1,2-methyl shift to a tertiary cation`, `A 1,2-hydride shift to a tertiary cation`, `Direct backside attack at the tertiary carbon`, `An E2 elimination followed by re-addition`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Ionization gives a secondary cation at C3. The neighboring C2 is quaternary (three methyls and C3, no H), so no hydride can shift; instead a methyl shifts with its bonding pair, generating a tertiary cation at C2. Backside attack is a one-step SN2 at the carbon bearing Br, which here is secondary, so it would give unrearranged product and cannot create a tertiary center. An E2 needs a strong base, which SN1 conditions lack. Rearranged products are a hallmark of carbocation (SN1/E1) mechanisms — SN2/E2 never rearrange.`
          },
          {
            question: `E2 reaction of 2-bromo-2-methylbutane with sodium ethoxide gives mainly 2-methyl-2-butene, while potassium tert-butoxide gives mainly 2-methyl-1-butene. The difference arises because:`,
            options: [`tert-Butoxide is a stronger nucleophile`, `Bulky tert-butoxide removes the less hindered beta-H`, `Ethoxide reacts by E1, giving the Zaitsev alkene`, `tert-Butoxide stabilizes the more substituted alkene`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Small strong bases give the Zaitsev (more substituted) alkene; bulky bases like tert-butoxide can only reach sterically accessible beta-hydrogens, giving the Hofmann (less substituted) alkene. Ethoxide is a strong base, so it reacts by E2, not E1. Nucleophilicity is beside the point in an elimination (and bulky tert-butoxide is the poorer nucleophile), and a base does not stabilize the alkene it forms: tert-butoxide gives the LESS substituted, less stable alkene.`
          },
          {
            question: `According to the Hammond postulate, the transition state for the endothermic ionization step of an SN1 reaction most closely resembles:`,
            options: [`The neutral starting halide`, `The carbocation intermediate`, `The final substitution product`, `The nucleophile`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `For an endothermic step the TS is late and resembles the higher-energy species — the carbocation. That is exactly why carbocation stability (3° > 2° > 1°) maps directly onto SN1 reaction rates.`
          },
          {
            question: `Which observation would rule OUT a concerted (SN2/E2) mechanism?`,
            options: [`Second-order kinetics`, `Inversion of configuration`, `A rearranged carbon skeleton in the product`, `Faster rate with a better leaving group`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Skeletal rearrangement requires a discrete carbocation that can undergo hydride/alkyl shifts — impossible in a one-step concerted mechanism. The other observations are consistent with (or expected for) concerted pathways.`
          }
        ]
      }
    },
    {
      id: 'sn2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Concerted vs. stepwise.** SN2 and E2 have one hump and no intermediate; SN1 and E1 pass through a carbocation valley.
- **SN1 and E1 share a step.** Both begin with the same slow ionization, so they compete from the same carbocation.
- **E2 needs anti-periplanar.** The beta-H and leaving group sit 180° apart; in a cyclohexane chair both must be axial.
- **Zaitsev vs. Hofmann.** Small bases and E1 give the more substituted alkene; bulky bases give the less substituted one.

**Common traps**

- **Tallest hump as the slow step.** The rate-determining step has the highest transition state overall, not the biggest single climb.
- **Rearranging in SN2 or E2.** Only a carbocation can shift a hydride or methyl, so a rearranged skeleton rules out concerted paths.
- **Zaitsev from every ring.** If only one beta-H can be trans-diaxial, the cyclohexane gives that alkene, Zaitsev or not.
- **A reactant-like ionization TS.** Endothermic ionization has a late, carbocation-like TS (Hammond), so cation stability sets the rate.

<!-- yield:low -->
- Low-yield extras: the menthyl chloride / neomenthyl chloride names behind the cyclohexane example.
<!-- /yield -->`
    }
  ]
};
