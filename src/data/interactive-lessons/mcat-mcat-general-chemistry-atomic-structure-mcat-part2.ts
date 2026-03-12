export const mcatAtomicStructurePart2Data = {
  topicSlug: 'mcat-general-chemistry-atomic-structure-mcat',
  sections: [
    {
      id: 'as2-intro',
      type: 'text' as const,
      content: `# Atomic Structure & Periodic Trends

**Part 2 of 5 — Periodic Trends: Atomic Radius, Ionization Energy & Electronegativity**

Periodic trends follow directly from **effective nuclear charge ($Z_{eff}$)** — the net positive charge an outer electron "feels" after inner electrons partially shield it.

$$Z_{eff} = Z - \\sigma$$

where $Z$ = atomic number, $\\sigma$ = shielding constant (approximately equal to the number of inner-shell electrons).

## Atomic Radius

**Trend:** ↑ down a group, ↓ across a period (left to right).

| Factor | Effect |
|--------|--------|
| More electron shells (down a group) | Increases radius |
| Higher $Z_{eff}$ same shell (across period) | Pulls electrons closer, decreases radius |

**Cation vs. anion radius:**
- **Cations** are smaller than the neutral atom (fewer electrons, same or similar $Z_{eff}$, electrons pulled closer).
- **Anions** are larger than the neutral atom (more electrons → more electron-electron repulsion, expanded cloud).

**Isoelectronic series** (all 10 electrons): $\\text{N}^{3-} > \\text{O}^{2-} > \\text{F}^- > \\text{Ne} > \\text{Na}^+ > \\text{Mg}^{2+} > \\text{Al}^{3+}$  
As $Z$ increases across the series, same electron count is pulled harder → smaller radius.

## Ionization Energy (IE)

Energy required to remove one electron from a gaseous atom: $\\text{X}(g) \\to \\text{X}^+(g) + e^-$

**Trend:** ↓ down a group, ↑ across a period — opposite of atomic radius.

**Successive ionization energies:** Each successive IE is larger (removing from a more positive ion). A **large jump** between $\\text{IE}_n$ and $\\text{IE}_{n+1}$ means you crossed into a core shell.

**Example — Sodium ($Z=11$, config $[\\text{Ne}]\\, 3s^1$):**
- $\\text{IE}_1 \\approx 496$ kJ/mol (remove $3s^1$, easy)
- $\\text{IE}_2 \\approx 4{,}562$ kJ/mol (must break into the filled Ne core → huge jump)

This is how the MCAT can ask you to identify an element's group from a table of successive IEs.

**Exceptions to the across-period IE trend:**
- **Group IIA → Group IIIA:** $\\text{IE}$ drops slightly (e.g., $\\text{Mg} > \\text{Al}$) because Al removes a $3p$ electron, which is shielded by the $3s$ pair.
- **Group VA → Group VIA:** $\\text{IE}$ drops slightly (e.g., $\\text{P} > \\text{S}$) because S has a paired $3p$ electron with extra repulsion, making it easier to remove.

## Electronegativity

Tendency to attract bonding electrons. Measured by the Pauling scale.

**Trend:** Increases across a period, decreases down a group.  
**Most electronegative:** F (3.98)  
**Least electronegative (among metals):** Cs/Fr

**Electronegativity difference** predicts bond type:
- $\\Delta EN < 0.5$: nonpolar covalent
- $0.5 \\leq \\Delta EN < 1.7$: polar covalent
- $\\Delta EN \\geq 1.7$: ionic character

## Electron Affinity (EA)

Energy change when a gaseous atom gains one electron: $\\text{X}(g) + e^- \\to \\text{X}^-(g)$

Generally becomes more negative (more exothermic) across a period and up a group.

**Exceptions:** 
- Group IIA (filled $s$ subshell) and Group VA (half-filled $p$ subshell) have near-zero or positive EA — extra stability makes electron gain unfavorable.
- Noble gases have positive EA (no tendency to gain electrons).
`
    },
    {
      id: 'as2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Periodic Trends — Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which correctly orders atomic radius from **largest to smallest**? (Na, Mg, Al)`,
            options: [
              `Na > Mg > Al`,
              `Al > Mg > Na`,
              `Mg > Na > Al`,
              `Na > Al > Mg`
            ],
            correctAnswer: 0,
            explanation: `All three are in Period 3. Going left to right: Na (Z=11) < Mg (Z=12) < Al (Z=13) in nuclear charge, but atomic radius decreases. So Na has the **largest** radius and Al the **smallest**: Na > Mg > Al.`
          },
          {
            question: `The successive ionization energies (kJ/mol) for element X are: 786, 1{,}577, 3{,}232, 4{,}356, 16{,}010, 19{,}784 … In which group is X?`,
            options: [`Group IA`, `Group IIA`, `Group IIIA`, `Group IVA`],
            correctAnswer: 3,
            explanation: `The large jump occurs between the **4th and 5th** ionization energies, meaning the 4th electron was the last valence electron. X has **4 valence electrons** → **Group IVA**.`
          },
          {
            question: `Which has the largest ionic radius? All species are isoelectronic (10 electrons each).`,
            options: [`$\\text{Na}^+$ ($Z=11$)`, `$\\text{Ne}$ ($Z=10$)`, `$\\text{F}^-$ ($Z=9$)`, `$\\text{O}^{2-}$ ($Z=8$)`],
            correctAnswer: 3,
            explanation: `All have 10 electrons. The smaller the nuclear charge $Z$, the weaker the pull on those same 10 electrons → **larger radius**. $\\text{O}^{2-}$ has the lowest $Z$ (8) and thus the largest radius.`
          },
          {
            question: `Why is the first ionization energy of sulfur (S) slightly **lower** than that of phosphorus (P), even though S has higher Z?`,
            options: [
              `S has more electron shells than P`,
              `S has a paired $3p$ electron that experiences extra repulsion, making it easier to remove`,
              `P is a smaller atom than S`,
              `S has a lower $Z_{eff}$ than P`
            ],
            correctAnswer: 1,
            explanation: `P has configuration $[\\text{Ne}]\\, 3s^2\\, 3p^3$ (each $3p$ orbital singly occupied). S has $[\\text{Ne}]\\, 3s^2\\, 3p^4$ — the fourth $3p$ electron must **pair** in an already-occupied orbital, creating extra electron-electron repulsion. This makes it easier (lower IE) to remove.`
          }
        ]
      }
    },
    {
      id: 'as2-trends-table',
      type: 'text' as const,
      content: `## Trend Summary Table

| Property | Across Period (→) | Down Group (↓) | Reason |
|----------|------------------|----------------|--------|
| Atomic radius | Decreases | Increases | $Z_{eff}$ vs. more shells |
| 1st Ionization Energy | Increases* | Decreases | Harder to remove e⁻ from higher $Z_{eff}$; farther e⁻ easier to remove |
| Electronegativity | Increases | Decreases | Same logic as IE |
| Electron Affinity | More negative* | Less negative | Higher $Z_{eff}$ attracts added e⁻ more |
| Metallic character | Decreases | Increases | Inversely related to IE |

*With minor exceptions as discussed above.

## Worked Example: Predicting Properties

**Question:** Without looking at a table, which has a higher first ionization energy — $\\text{O}$ or $\\text{F}$?

**Reasoning:** Both are in Period 2. F is one position to the right of O, so it has a higher $Z_{eff}$. However, O ($3p^4$ analogy: $2p^4$, paired electron) vs F ($2p^5$) — F has no extra pairing repulsion disadvantage in removing one $2p$ electron. F has higher $Z_{eff}$ AND no extra repulsion penalty → **F has higher IE than O**. ✓ (confirmed: $\\text{IE}_1(\\text{O}) = 1{,}314$ kJ/mol; $\\text{IE}_1(\\text{F}) = 1{,}681$ kJ/mol)
`
    },
    {
      id: 'as2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Electronegativity & Special Cases** 🎯`,
      exercise: {
        questions: [
          {
            question: `An ionic bond is most likely to form between which pair?`,
            options: [
              `C and O ($\\Delta EN = 1.0$)`,
              `N and H ($\\Delta EN = 0.9$)`,
              `Na and F ($\\Delta EN = 3.1$)`,
              `S and O ($\\Delta EN = 1.0$)`
            ],
            correctAnswer: 2,
            explanation: `Ionic bonds typically require $\\Delta EN \\geq 1.7$. Na (EN = 0.93) and F (EN = 3.98) give $\\Delta EN = 3.05$ — far exceeding the threshold, making NaF solidly ionic. The other pairs have $\\Delta EN < 1.7$, forming polar covalent bonds.`
          },
          {
            question: `Which element has the highest electronegativity?`,
            options: [`Oxygen`, `Nitrogen`, `Chlorine`, `Fluorine`],
            correctAnswer: 3,
            explanation: `Fluorine has the highest electronegativity on the Pauling scale (3.98). It is in the upper-right corner of the periodic table (Period 2, Group VIIA) — small atomic radius and high effective nuclear charge.`
          },
          {
            question: `The electron affinity of nitrogen (Group VA) is **less negative** than that of carbon (Group IVA) despite N having higher Z. Why?`,
            options: [
              `N is a larger atom than C`,
              `N has a half-filled $2p$ subshell, which is extra stable and resists gaining an electron`,
              `C has lower electronegativity than N`,
              `The $2p$ subshell is full in nitrogen`
            ],
            correctAnswer: 1,
            explanation: `Nitrogen's $2p^3$ configuration has each $p$ orbital singly occupied (half-filled subshell — extra exchange stabilization). Adding a 4th electron forces pairing and disrupts this stability, making electron gain less favorable (less negative EA) than expected.`
          }
        ]
      }
    },
    {
      id: 'as2-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **$Z_{eff}$** is the engine behind all periodic trends. Higher $Z_{eff}$ → smaller radius, higher IE, higher EN.
- **Atomic radius:** largest at bottom-left (Cs), smallest at top-right (He/F among main-group).
- **IE exceptions:** Group IIA > Group IIIA; Group VA > Group VIA — memorize the explanations.
- **Isoelectronic series:** size decreases as $Z$ increases (same electrons, more protons).
- **Cations are smaller, anions are larger** than their neutral atoms.
- **EA exceptions:** Group IIA and Group VA have near-zero/positive EA due to subshell stability.
- On the MCAT, successive IE data is a reliable way to identify an element's group.
`
    }
  ]
};
