export const mcatAtomicStructurePart2Data = {
  topicSlug: 'mcat-general-chemistry-atomic-structure-mcat',
  sections: [
    {
      id: 'as2-intro',
      type: 'text' as const,
      content: `# Atomic Structure & Periodic Trends

**Part 2 of 5 — Periodic Trends: Atomic Radius, Ionization Energy & Electronegativity**

Periodic trends follow directly from **effective nuclear charge ($Z_{\\text{eff}}$)** — the net positive charge an outer electron "feels" after inner electrons partially shield it.

$$Z_{\\text{eff}} = Z - \\sigma$$

where $Z$ = atomic number, $\\sigma$ = shielding constant (approximately equal to the number of inner-shell electrons).

## Atomic Radius

**Trend:** ↑ down a group, ↓ across a period (left to right).

| Factor | Effect |
|--------|--------|
| More electron shells (down a group) | Increases radius |
| Higher $Z_{\\text{eff}}$ same shell (across period) | Pulls electrons closer, decreases radius |

**Cation vs. anion radius:**
- **Cations** are smaller than the neutral atom (fewer electrons, less electron-electron repulsion, and often a whole outer shell lost, so the rest are pulled closer).
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
**Least electronegative:** Cs/Fr

**Electronegativity difference** predicts bond type:
- $\\Delta EN < 0.5$: nonpolar covalent
- $0.5 \\leq \\Delta EN < 1.7$: polar covalent
- $\\Delta EN \\geq 1.7$: ionic character

## Electron Affinity (EA)

Energy change when a gaseous atom gains one electron: $\\text{X}(g) + e^- \\to \\text{X}^-(g)$

Generally becomes more negative (more exothermic) across a period and up a group.

**Exceptions:** 
- Group IIA (filled $s$ subshell) and Group VA (half-filled $p$ subshell) have EAs less negative than their neighbours' (near zero or positive for Group IIA and for nitrogen) — extra stability makes electron gain less favorable.
- Noble gases have positive EA (no tendency to gain electrons).
- **Chlorine, not fluorine,** has the most negative EA ($-349$ vs. $-328$ kJ/mol): fluorine's small $2p$ subshell is so crowded that an added electron meets extra repulsion. Fluorine is still the most electronegative.

## Families and Classes of Elements

| Family | Location | Valence configuration | Typical behavior |
|---|---|---|---|
| Alkali metals | Group IA (not H) | $ns^1$ | very reactive; form $+1$ ions; react with water |
| Alkaline earth metals | Group IIA | $ns^2$ | reactive; form $+2$ ions |
| Halogens | Group VIIA | $ns^2\\, np^5$ | very reactive nonmetals; form $-1$ ions; diatomic ($\\text{F}_2$, $\\text{Cl}_2$) |
| Noble gases | Group VIIIA | $ns^2\\, np^6$ (He: $1s^2$) | full valence shell; nearly inert |
| Transition metals | $d$ block | $(n-1)d$ filling | several oxidation states; often colored, paramagnetic ions |

- **Metals** (left and center) have low IE and electronegativity: they lose electrons to form cations, conduct heat and electricity, and are malleable and ductile.
- **Nonmetals** (upper right) have high IE and electronegativity: they gain or share electrons, and are poor conductors.
- **Metalloids** sit on the staircase between them (B, Si, Ge, As, Sb, Te) and have intermediate properties; silicon and germanium are semiconductors.
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
            yield: 'ULTRA_HIGH',
            explanation: `All three are in Period 3. Going left to right: Na (Z=11) < Mg (Z=12) < Al (Z=13) in nuclear charge, but atomic radius decreases. So Na has the **largest** radius and Al the **smallest**: Na > Mg > Al.`
          },
          {
            question: `The successive ionization energies (kJ/mol) for element X are: 786, 1,577, 3,232, 4,356, 16,010, 19,784 … In which group is X?`,
            options: [`Group IA`, `Group IIA`, `Group IIIA`, `Group IVA`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The large jump occurs between the **4th and 5th** ionization energies, meaning the 4th electron was the last valence electron. X has **4 valence electrons** → **Group IVA**.`
          },
          {
            question: `Which has the largest ionic radius? All species are isoelectronic (10 electrons each).`,
            options: [`$\\text{Na}^+$ ($Z=11$)`, `$\\text{Ne}$ ($Z=10$)`, `$\\text{F}^-$ ($Z=9$)`, `$\\text{O}^{2-}$ ($Z=8$)`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `All have 10 electrons. The smaller the nuclear charge $Z$, the weaker the pull on those same 10 electrons → **larger radius**. $\\text{O}^{2-}$ has the lowest $Z$ (8) and thus the largest radius.`
          },
          {
            question: `Why is the first ionization energy of sulfur (S) slightly **lower** than that of phosphorus (P), even though S has higher Z?`,
            options: [
              `S has one more electron shell than P`,
              `S loses a paired $3p$ electron`,
              `P's atomic radius is smaller than S's`,
              `S feels a lower $Z_{\\text{eff}}$ than P does`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `P has configuration $[\\text{Ne}]\\, 3s^2\\, 3p^3$ (each $3p$ orbital singly occupied). S has $[\\text{Ne}]\\, 3s^2\\, 3p^4$ — the fourth $3p$ electron must **pair** in an already-occupied orbital, creating extra electron-electron repulsion. This makes it easier (lower IE) to remove. Both atoms are in Period 3 with the same number of shells, S is actually the smaller atom, and its $Z_{\\text{eff}}$ is higher, not lower.`
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
| Atomic radius | Decreases | Increases | $Z_{\\text{eff}}$ vs. more shells |
| 1st Ionization Energy | Increases* | Decreases | Harder to remove $e^{-}$ from higher $Z_{\\text{eff}}$; farther $e^{-}$ easier to remove |
| Electronegativity | Increases | Decreases | Same logic as IE |
| Electron Affinity | More negative* | Less negative | Higher $Z_{\\text{eff}}$ attracts added $e^{-}$ more |
| Metallic character | Decreases | Increases | Inversely related to IE |

*With minor exceptions as discussed above.

## Worked Example: Predicting Properties

**Problem 1.** Without a table, compare the first ionization energies of $\\text{O}$ ($[\\text{He}]\\, 2s^2\\, 2p^4$) and $\\text{F}$ ($[\\text{He}]\\, 2s^2\\, 2p^5$).

- **(a)** Which atom's $2p$ electrons feel the higher $Z_{\\text{eff}}$, and why?
- **(b)** Does electron pairing change the comparison?
- **(c)** Which atom has the higher $\\text{IE}_1$?

**(a) Effective nuclear charge.** Both are in Period 2 with the same $1s^2$ core, but F has one more proton, so its $2p$ electrons feel a higher $Z_{\\text{eff}}$.

**(b) Pairing.** Both atoms already hold a pair in their $2p$ subshell ($2p^4$ has one pair, $2p^5$ two), so both lose a paired electron: pairing lowers both IEs and cannot reverse the trend. Pairing explains why O is below N (the Period 2 twin of P > S), not how O compares with F.

**(c) Higher IE.** With the higher $Z_{\\text{eff}}$ from (a) and no exception to offset it, **F has the higher $\\text{IE}_1$**. Check: $\\text{IE}_1(\\text{O}) = 1{,}314$ kJ/mol; $\\text{IE}_1(\\text{F}) = 1{,}681$ kJ/mol.

**Problem 2.** A Period 3 element has successive ionization energies of $578$, $1{,}817$, $2{,}745$ and $11{,}577$ kJ/mol.

- **(a)** Between which two ionization energies is the large jump?
- **(b)** How many valence electrons does the element have, and which element is it?
- **(c)** Where does the fourth electron come from?

**(a) Find the jump.** The rises are $+1{,}239$, then $+928$, then $+8{,}832$ kJ/mol: the jump lies between $\\text{IE}_3$ and $\\text{IE}_4$.

**(b) Valence count.** Three electrons come off before the jump from (a), so the element has 3 valence electrons: Group IIIA in Period 3, **aluminum** ($[\\text{Ne}]\\, 3s^2\\, 3p^1$).

**(c) The fourth electron.** After three removals $\\text{Al}^{3+}$ is $[\\text{Ne}]$, so the fourth electron comes from the filled $2p$ core subshell, much closer to the nucleus.
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
              `C and O ($\\Delta EN = 0.9$)`,
              `N and H ($\\Delta EN = 0.8$)`,
              `Na and F ($\\Delta EN = 3.1$)`,
              `S and O ($\\Delta EN = 0.9$)`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Ionic bonds typically require $\\Delta EN \\geq 1.7$. Na (EN = 0.93) and F (EN = 3.98) give $\\Delta EN = 3.05$ — far exceeding the threshold, making NaF solidly ionic. The other pairs have $\\Delta EN < 1.7$, forming polar covalent bonds.`
          },
          {
            question: `Which element has the highest electronegativity?`,
            options: [`Oxygen`, `Nitrogen`, `Chlorine`, `Fluorine`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `Fluorine has the highest electronegativity on the Pauling scale (3.98). It is in the upper-right corner of the periodic table (Period 2, Group VIIA) — small atomic radius and high effective nuclear charge.`
          },
          {
            question: `The electron affinity of nitrogen (Group VA) is **less negative** than that of carbon (Group IVA) despite N having higher Z. Why?`,
            options: [
              `N has a larger atomic radius than C`,
              `N's $2p$ subshell is half-filled`,
              `C has a higher $Z_{\\text{eff}}$ than N does`,
              `The $2p$ subshell is full in nitrogen`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Nitrogen's $2p^3$ configuration has each $p$ orbital singly occupied (half-filled subshell — extra exchange stabilization). Adding a 4th electron forces pairing and disrupts this stability, making electron gain less favorable (less negative EA) than expected. N is smaller than C and has the higher $Z_{\\text{eff}}$, and its $2p$ holds only 3 of a possible 6 electrons.`
          }
        ]
      }
    },
    {
      id: 'as2-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **$Z_{\\text{eff}}$ drives every trend.** Higher $Z_{\\text{eff}}$ means a smaller radius, a higher IE and a higher electronegativity.
- **Opposite corners.** Radius grows toward the bottom-left (Cs); IE and electronegativity grow toward the top-right (F for EN, He for IE).
- **Ion sizes.** Cations are smaller and anions larger than their atoms; in an isoelectronic series, more protons means smaller.
- **Successive IE jumps.** The big jump follows the last valence electron, so the count before it gives the group.

**Common traps**

- **Ignoring the IE dips.** $\\text{IE}_1$ is higher for Mg than Al and for P than S: a shielded $3p$ and a paired $3p$ electron.
- **Pairing in every comparison.** Pairing explains P over S and N over O, but not O vs. F, where F's higher $Z_{\\text{eff}}$ wins.
- **Anions as smaller.** Added electrons bring more repulsion and no new protons, so an anion is LARGER than its atom.
- **A smooth EA trend.** Groups IIA and VA break it: a filled $s$ or half-filled $p$ subshell resists one more electron.
`
    }
  ]
};
