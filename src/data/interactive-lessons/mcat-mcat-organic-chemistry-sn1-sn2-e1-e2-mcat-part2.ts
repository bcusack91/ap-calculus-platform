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
      id: 'sn2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Mechanisms & Energy Diagrams** 🎯`,
      exercise: {
        questions: [
          {
            question: `An energy diagram for a substitution reaction shows two maxima separated by a shallow minimum. The species at the minimum is:`,
            options: [`The transition state`, `A carbocation intermediate`, `The final product`, `A resonance structure of the reactant`],
            correctAnswer: 1,
            explanation: `A valley between two transition-state humps is an intermediate — for SN1, the carbocation. Transition states are the maxima and can never be isolated; intermediates sit in energy minima and have finite lifetimes.`
          },
          {
            question: `The E2 elimination of a substituted cyclohexyl bromide occurs only from the conformation in which the bromine is:`,
            options: [`Equatorial`, `Axial, with an axial beta-H on an adjacent carbon`, `In the plane of the ring`, `Equatorial, with an equatorial beta-H`],
            correctAnswer: 1,
            explanation: `E2 requires anti-periplanar geometry. In a cyclohexane chair, only trans-diaxial H and LG achieve a 180° dihedral. If the Br is locked equatorial, the molecule must flip (or cannot eliminate toward that carbon).`
          },
          {
            question: `2-Bromo-3-methylbutane reacts under SN1 conditions and gives mostly products derived from a tertiary carbocation. This is best explained by:`,
            options: [`A 1,2-hydride shift converting the initial secondary cation to a tertiary cation`, `Direct backside attack at the tertiary carbon`, `An E2 elimination followed by re-addition`, `Deprotonation of the secondary cation by bromide`],
            correctAnswer: 0,
            explanation: `SN1 forms a secondary carbocation first; a hydride on the adjacent carbon shifts with its bonding pair, generating the more stable tertiary cation. Rearranged products are a hallmark of carbocation (SN1/E1) mechanisms — SN2/E2 never rearrange.`
          },
          {
            question: `E2 reaction of 2-bromo-2-methylbutane with sodium ethoxide gives mainly 2-methyl-2-butene, while potassium tert-butoxide gives mainly 2-methyl-1-butene. The difference arises because:`,
            options: [`tert-Butoxide is a stronger nucleophile`, `The bulky tert-butoxide removes the more accessible, less hindered beta-H (Hofmann)`, `Ethoxide promotes an SN1 pathway`, `tert-Butoxide stabilizes the more substituted alkene`],
            correctAnswer: 1,
            explanation: `Small strong bases give the Zaitsev (more substituted) alkene; bulky bases like tert-butoxide can only reach sterically accessible beta-hydrogens, giving the Hofmann (less substituted) alkene.`
          },
          {
            question: `According to the Hammond postulate, the transition state for the endothermic ionization step of an SN1 reaction most closely resembles:`,
            options: [`The neutral starting halide`, `The carbocation intermediate`, `The final substitution product`, `The nucleophile`],
            correctAnswer: 1,
            explanation: `For an endothermic step the TS is late and resembles the higher-energy species — the carbocation. That is exactly why carbocation stability (3° > 2° > 1°) maps directly onto SN1 reaction rates.`
          },
          {
            question: `Which observation would rule OUT a concerted (SN2/E2) mechanism?`,
            options: [`Second-order kinetics`, `Inversion of configuration`, `A rearranged carbon skeleton in the product`, `Faster reaction with a better leaving group`],
            correctAnswer: 2,
            explanation: `Skeletal rearrangement requires a discrete carbocation that can undergo hydride/alkyl shifts — impossible in a one-step concerted mechanism. The other observations are consistent with (or expected for) concerted pathways.`
          }
        ]
      }
    },
    {
      id: 'sn2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- SN2/E2: one hump, concerted, no intermediate, no rearrangement. SN1/E1: two humps, carbocation valley, rearrangements possible
- SN1/E1 share the same slow ionization step → they compete from the same cation
- E2 demands anti-periplanar H and LG (trans-diaxial in cyclohexanes)
- Zaitsev (more substituted alkene) with small bases and E1; Hofmann with bulky bases
- Hammond postulate: endothermic ionization has a carbocation-like TS → cation stability sets the rate`
    },
    {
      id: 'sn2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Mechanisms & Energy Diagrams

<details>
<summary><b>Example 1: Sketch and interpret an SN1 energy diagram</b></summary>

**Question:** For the hydrolysis of tert-butyl bromide in water, identify the rate-determining step and the number of transition states.

**Solution:**
1. Mechanism: (i) ionization to the tert-butyl cation + $Br^-$ (slow); (ii) water attacks the cation (fast); (iii) deprotonation of the protonated alcohol (an oxonium ion) to give the neutral alcohol (fast)
2. The diagram shows the ionization TS as the **highest** point → step 1 is rate-determining
3. Transition states: one per step (the first two are the ones usually drawn; a third small hump for the final proton transfer)
4. Rate law: $rate = k[(CH_3)_3CBr]$ — water's concentration doesn't appear

**MCAT Strategy:** "Which step is rate-determining?" → find the highest transition state, not the tallest individual hump measured from its own valley.
</details>

<details>
<summary><b>Example 2: Predict the rearranged SN1 product</b></summary>

**Question:** 3-Methyl-2-butanol is treated with concentrated HBr. Predict the major substitution product.

**Solution:**
1. Protonation of OH → water leaves → **secondary** cation at C2 of the 3-methylbutane skeleton
2. Adjacent C3 bears an H and two methyls: a **1,2-hydride shift** from C3 to C2 gives a **tertiary** cation at C3
3. Bromide captures the tertiary cation
4. Major product: **2-bromo-2-methylbutane** (rearranged), along with some unrearranged 2-bromo-3-methylbutane

**MCAT Strategy:** Any time an alcohol + strong acid gives an "unexpected" connectivity, suspect a hydride or methyl shift to a more stable cation.
</details>

<details>
<summary><b>Example 3: Anti-periplanar control in a cyclohexane</b></summary>

**Question:** Menthyl chloride (with Cl locked such that it is axial only in the higher-energy chair, and in that chair only one beta-H is trans-diaxial) undergoes E2 slowly and gives ONLY the non-Zaitsev alkene. Why?

**Solution:**
1. E2 needs H and Cl anti-periplanar → both axial in a chair
2. The reactive conformation is the minor (higher-energy) chair → slow overall rate
3. In that chair, only one beta-carbon has an axial H available → only one alkene can form, even if it is less substituted
4. Geometry beats Zaitsev: **stereoelectronics override thermodynamic preference**

**MCAT Strategy:** In rigid or ring systems, first find which beta-H can be anti-periplanar. The "wrong" (non-Zaitsev) product from a cyclohexane is nearly always an anti-periplanar constraint question.
</details>

<details>
<summary><b>Example 4: Zaitsev vs Hofmann decision</b></summary>

**Question:** 2-Bromopentane is treated with (a) sodium methoxide, (b) potassium tert-butoxide. Predict the major alkene in each case.

**Solution:**
1. Beta-hydrogens are available on C1 (→ 1-pentene, monosubstituted) and C3 (→ 2-pentene, disubstituted)
2. (a) Methoxide: small strong base → **Zaitsev** → 2-pentene major (mostly trans/E, the more stable geometry)
3. (b) tert-Butoxide: bulky base → **Hofmann** → 1-pentene major
4. Both are E2 (strong bases, second-order conditions)

**MCAT Strategy:** Two-part check for elimination products: WHICH beta-carbon (Zaitsev vs Hofmann) and, for internal alkenes, WHICH geometry (trans favored).
</details>`
    }
  ]
};
