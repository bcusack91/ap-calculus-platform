export const oChemNMRPart7Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s7-intro',
      type: 'text' as const,
      content: `
## Synthesis and Review

**Part 7 of 7 — Synthesis & Review**

NMR is the most powerful structural tool in the organic chemist's kit because a single pair of experiments ($^1\\text{H}$ and $^{13}\\text{C}$) reports on almost every atom in a molecule at once. This closing part consolidates the whole suite into one coherent picture: the four kinds of information a $^1\\text{H}$ spectrum delivers, how each maps onto structure, and the decision flow that ties shift, integration, splitting, and the carbon spectrum into a single answer.

The unifying idea from Parts 1–6: **every observable is a question about local structure.** Where a signal sits asks "what is this proton attached to?" How big it is asks "how many are there?" How it splits asks "who are its neighbors?" Learn to hear those three questions and a spectrum becomes a sentence.
      `
    },
    {
      id: 'nmr-s7-four',
      type: 'text' as const,
      content: `
### The Four Pieces of Information in a $^1\\text{H}$ Spectrum

| Observable | Question it answers | Governing rule |
|------|------|------|
| **Number of signals** | How many distinct proton environments? | Symmetry / chemical equivalence (Part 1) |
| **Chemical shift $\\delta$** | What is each proton near? (electronic environment) | Electronegativity, hybridization, anisotropy (Part 2) |
| **Integration** | How many protons in each environment? | Area $\\propto$ number of H; read as a ratio (Part 3) |
| **Splitting / multiplicity** | How many protons on the neighboring atoms? | $n+1$ rule; $J$ pairs partners (Part 3) |

Each observable is independent, and they constrain one another. A signal that is *downfield* (large $\\delta$), integrates for *1H*, and is a *singlet* might be an aldehyde or an exchangeable O–H; add that it sits at $9.7$ (not broad, not vanishing on $\\text{D}_2\\text{O}$) and it is an aldehyde. No single observable identifies a fragment — their *combination* does.

> **Mantra:** *shift = identity, integration = count, splitting = neighbors.* If you can state those three for every signal, you have read the spectrum.
      `
    },
    {
      id: 'nmr-s7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Mapping Observables to Structure
      `,
      exercise: {
        questions: [
          {
            question: 'Which piece of $^1\\text{H}$ NMR information most directly tells you how many protons sit on the carbon(s) adjacent to the one you are observing?',
            options: [
              'Chemical shift',
              'Integration',
              'Splitting (multiplicity), via the $n+1$ rule',
              'The number of signals'
            ],
            correctAnswer: 2,
            explanation: 'Multiplicity is the neighbor count: an $(n+1)$-line pattern means $n$ equivalent protons on adjacent atoms. Chemical shift reports the electronic environment (identity), integration reports how many protons are in *this* signal, and the number of signals reports how many distinct environments exist — none of those is the neighbor count.'
          },
          {
            question: 'A signal is downfield, integrates for 1H, and is a sharp singlet that does NOT disappear on a $\\text{D}_2\\text{O}$ shake. Which combination of clues is doing the work to identify it as an aldehyde rather than an O–H?',
            options: [
              'Only the chemical shift matters; integration and the $\\text{D}_2\\text{O}$ test are irrelevant',
              'The downfield shift (~$9.7$) plus the sharp, non-exchangeable singlet together point to an aldehyde C–H, since an O–H would typically be broad and vanish on $\\text{D}_2\\text{O}$',
              'The integration alone proves it is an aldehyde',
              'A singlet can never be an aldehyde, so it must be O–H'
            ],
            correctAnswer: 1,
            explanation: 'No single observable settles it — the combination does: a ~$9.7\\ \\text{ppm}$ position is in the aldehyde range, and a *sharp* singlet that survives the $\\text{D}_2\\text{O}$ shake excludes an exchangeable O–H (which is usually broad and disappears). Shift alone (option 1) or integration alone (option 3) is insufficient, and aldehydes commonly are singlets or small triplets (option 4 is false).'
          }
        ]
      }
    },
    {
      id: 'nmr-s7-shift-review',
      type: 'text' as const,
      content: `
### Consolidated Shift Map — $^1\\text{H}$ and $^{13}\\text{C}$ Side by Side

Chemical shift indicates electronic environment, and keeping the two scales side by side prevents the most common confusion (mapping carbon values onto the proton axis). Approximate landmarks to know cold:

| Environment | $^1\\text{H}\\ \\delta$ ($\\text{ppm}$) | $^{13}\\text{C}\\ \\delta$ ($\\text{ppm}$) |
|------|------|------|
| TMS reference | $0$ | $0$ |
| Alkyl (C/H only) | $0.8\\text{–}1.5$ | $5\\text{–}45$ |
| $\\alpha$ to C=O / allylic | $2.0\\text{–}2.5$ | $20\\text{–}45$ |
| $\\text{H-C-O}$ / $\\text{C-O}$ | $3.3\\text{–}4.5$ | $50\\text{–}90$ |
| Vinyl / aromatic | $4.5\\text{–}8.0$ | $100\\text{–}150$ |
| Aldehyde / ketone $\\text{C=O}$ | $9\\text{–}10$ (H); — | $190\\text{–}220$ (C) |
| Acid / ester $\\text{C=O}$ | $10\\text{–}12$ (acid O–H) | $160\\text{–}185$ (C) |

The two scales rhyme — both move downfield as protons/carbons become more deshielded — but they cover very different ranges. A *carbonyl carbon* lives near $200\\ \\text{ppm}$; no *proton* ever does. Use $^{13}\\text{C}$ to find carbonyls and quaternary carbons (invisible in $^1\\text{H}$), and use DEPT to label each carbon as $\\text{CH}_3$, $\\text{CH}_2$, $\\text{CH}$, or quaternary.

> **The persistent trap:** "a peak at $200$ must be a far-downfield proton." There is no such proton — the $^1\\text{H}$ window ends near $12$. A value of $200\\ \\text{ppm}$ is a *carbon* shift, almost always a carbonyl. Always check which spectrum you are reading.
      `
    },
    {
      id: 'nmr-s7-splitting-review',
      type: 'text' as const,
      content: `
### Splitting Reveals Connectivity — The Fingerprints

Splitting pattern reveals connectivity: the multiplets in concert with their integrals fingerprint whole substructures. Re-memorize the canonical pairs, because recognizing them on sight is most of practical spectral interpretation:

| Pattern (integration + multiplicity) | Fragment |
|------|------|
| 3H triplet + 2H quartet (shared $J \\approx 7\\ \\text{Hz}$) | ethyl, $\\text{-CH}_2\\text{CH}_3$ |
| 6H doublet + 1H septet | isopropyl, $(\\text{CH}_3)_2\\text{CH-}$ |
| 9H singlet (~$1\\ \\text{ppm}$) | *tert*-butyl, $(\\text{CH}_3)_3\\text{C-}$ |
| 3H singlet (~$2\\ \\text{ppm}$) | $\\text{CH}_3$ on C=O or ring (no H neighbors) |
| 2H + 2H aromatic (symmetric) | *para*-disubstituted benzene |
| 2H + 3H aromatic | monosubstituted benzene |
| $J \\approx 16\\ \\text{Hz}$ between two vinyl H | *trans* (E) alkene |
| $J \\approx 8\\ \\text{Hz}$ between two vinyl H | *cis* (Z) alkene |

Two rules keep these honest: (1) the $n+1$ count is over *neighbors*, never the protons in the signal; and (2) mutually coupled signals share the *same* $J$, which is how you pair a multiplet with its partner and so chain fragments together. A singlet, by contrast, announces *no* coupling neighbors — its group is bounded by carbonyls, oxygens, or quaternary carbons.

> **Capstone trap roundup:** (a) counting a signal's own protons for $n+1$ instead of its neighbors; (b) confusing a quartet's $J$ (Hz, field-independent) with a chemical-shift gap (ppm-fixed, Hz-scaling); (c) trying to integrate or apply $n+1$ to a routine decoupled $^{13}\\text{C}$ spectrum; (d) expecting an alcohol O–H to couple to its $\\text{CH}_2$ (rapid exchange usually erases that coupling). Avoid these four and most interpretation errors vanish.
      `
    },
    {
      id: 'nmr-s7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Fingerprints and Connectivity
      `,
      exercise: {
        questions: [
          {
            question: 'A spectrum shows a 6H doublet at $\\delta\\ 1.2$ and a 1H septet at $\\delta\\ 3.9$, both with $J \\approx 7\\ \\text{Hz}$. What does this pair establish, and how?',
            options: [
              'An ethyl group, because a quartet and a triplet are present',
              'A tert-butyl group, because there are 6 + 1 = 7 protons',
              'Two unrelated signals, since their $J$ values happen to match by coincidence',
              'An isopropyl group $(\\text{CH}_3)_2\\text{CH-}$: the 6H doublet (two equivalent methyls each seeing one $\\text{CH}$) and the 1H septet (a methine with six equivalent neighbors) share one $J$'
            ],
            correctAnswer: 3,
            explanation: 'A 6H doublet plus a 1H septet sharing a common $J$ is the isopropyl fingerprint: each methyl couples to the single methine (doublet, 6H total), and the methine couples to all six methyl protons (septet). The matching $J$ confirms they are coupled partners, not a coincidence. There is no quartet/triplet (so not ethyl), and tert-butyl is a 9H singlet with no septet.'
          },
          {
            question: 'Why does an alcohol O–H usually NOT split the adjacent $\\text{CH}_2$ in a routine $^1\\text{H}$ spectrum?',
            options: [
              'Because rapid chemical exchange of the O–H proton between molecules averages its coupling to zero',
              'Because oxygen has no nuclear spin and therefore cannot couple at all',
              'Because the O–H is always exactly equivalent to the $\\text{CH}_2$ protons',
              'Because the $n+1$ rule does not apply to any heteroatom-bearing carbon'
            ],
            correctAnswer: 0,
            explanation: 'The O–H proton hops rapidly between molecules (fast exchange), so on the NMR timescale its spin state is averaged and it neither splits nor is split by its neighbors — leaving the $\\text{CH}_2$ unsplit by the O–H. It is the *proton* that exchanges (oxygen’s spin is beside the point), the O–H is not equivalent to the $\\text{CH}_2$, and the $n+1$ rule does apply generally — exchange is the specific reason here.'
          },
          {
            question: 'Two protons across a C=C double bond couple with $J \\approx 16\\ \\text{Hz}$. Combined with the rest of a spectrum, what connectivity/stereochemistry does this most strongly indicate?',
            options: [
              'A cis (Z) alkene, since cis couplings are the largest',
              'A freely rotating single bond',
              'A trans (E) alkene, because trans vinyl couplings ($12\\text{–}18\\ \\text{Hz}$) exceed cis ($6\\text{–}12\\ \\text{Hz}$)',
              'An aromatic ortho relationship'
            ],
            correctAnswer: 2,
            explanation: 'Across a double bond, trans (E) protons couple more strongly ($12\\text{–}18\\ \\text{Hz}$) than cis (Z) ones ($6\\text{–}12\\ \\text{Hz}$), so $J \\approx 16\\ \\text{Hz}$ indicates a trans alkene — a stereochemical conclusion read straight from a coupling constant. The "cis is largest" choice reverses the cis/trans magnitudes; free-rotation and aromatic ortho couplings fall in different (smaller) ranges.'
          }
        ]
      }
    },
    {
      id: 'nmr-s7-workflow',
      type: 'text' as const,
      content: `
### The Master Workflow — Systematic Structure Determination

Pulling Parts 5–6 into one checklist you can run on any unknown:

1. **Molecular formula $\\rightarrow$ DoU.** $\\text{DoU} = (2c + 2 + n - h - x)/2$. A DoU of 4 flags an aromatic ring; a DoU of 1 with an O flags one ring or one C=O.
2. **IR $\\rightarrow$ functional groups.** $\\sim 1715\\ \\text{cm}^{-1}$ = C=O (lowered by conjugation); broad $3200\\text{–}3550$ = O–H; $\\sim 2250$ = nitrile/alkyne; $1600/1500$ = aromatic.
3. **$^1\\text{H}$ NMR $\\rightarrow$ fragments.** For each signal: shift (identity), integration (count), multiplicity (neighbors). Recognize the fingerprints; sum the protons against the formula.
4. **$^{13}\\text{C}$ / DEPT $\\rightarrow$ carbon skeleton.** Count environments, locate carbonyls ($160\\text{–}220$) and sp² carbons ($100\\text{–}150$); use DEPT to classify $\\text{CH}_3$/$\\text{CH}_2$/$\\text{CH}$/quaternary.
5. **Assemble and verify.** Connect fragments consistently with *every* datum (including symmetry), then read the proposed structure back against each spectrum.

**Capstone illustration ($\\text{C}_8\\text{H}_{10}$, DoU = 4):** IR shows aromatic bands only (no C=O, no O–H). $^1\\text{H}$ NMR: a 4H aromatic singlet-like region near $7.1$ and a 6H singlet at $2.3$. The 6H singlet = two equivalent ring-attached methyls with no H neighbors; the symmetric 4H aromatic pattern = a *para*-disubstituted ring. Assemble $\\rightarrow$ **para-xylene** (1,4-dimethylbenzene). The $^{13}\\text{C}$ count of just **3** signals confirms the high symmetry. Every observable — DoU, IR, the two $^1\\text{H}$ signals, and the carbon count — agrees.

> **The closing principle:** NMR rarely hands you a structure from one number; it hands you *constraints*, and the answer is the unique structure that satisfies all of them simultaneously. Discipline (coarse-to-fine: DoU $\\rightarrow$ IR $\\rightarrow$ NMR) and pattern recognition (the fingerprints) are what make that convergence fast and reliable.
      `
    },
    {
      id: 'nmr-s7-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Course Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'For the capstone unknown $\\text{C}_8\\text{H}_{10}$ (DoU = 4) with a 6H singlet at $\\delta\\ 2.3$, a symmetric 4H aromatic region, and only 3 $^{13}\\text{C}$ signals, what is the structure and what nails it down?',
            options: [
              'Ethylbenzene, because the 6H must be an ethyl group',
              'para-Xylene (1,4-dimethylbenzene): two equivalent methyls (6H singlet, no neighbors), a symmetric para ring (4H), and the high symmetry reduces the carbons to 3 signals',
              'Styrene, because DoU = 4 requires a vinyl group',
              'ortho-Xylene, because all xylenes give identical spectra'
            ],
            correctAnswer: 1,
            explanation: 'A 6H *singlet* means two equivalent methyls with no coupling neighbors (ruling out ethylbenzene, whose ethyl would be a 3H triplet + 2H quartet), the symmetric 4H aromatic pattern indicates para-disubstitution, and the para symmetry collapses the carbons to just 3 environments — uniquely para-xylene. Styrene would show vinyl signals; the xylene isomers give *different* spectra (ortho/meta have lower symmetry and more $^{13}\\text{C}$ signals).'
          },
          {
            question: 'Which statement best captures the overarching logic of NMR-based structure determination as developed across this course?',
            options: [
              'A single chemical shift value is normally sufficient to identify any compound',
              'NMR provides a set of independent constraints (shift, integration, splitting, plus DoU/IR/$^{13}\\text{C}$), and the structure is the unique candidate that satisfies all of them at once',
              '$^{13}\\text{C}$ NMR alone, via integration, gives the complete structure',
              'Splitting patterns are decorative and can be ignored once the shifts are known'
            ],
            correctAnswer: 1,
            explanation: 'Structure elucidation works by accumulating independent constraints — degrees of unsaturation, IR functional groups, and the four pieces of $^1\\text{H}$ information plus $^{13}\\text{C}$/DEPT — and converging on the one structure consistent with every observation. A lone shift is rarely decisive (option 1), routine $^{13}\\text{C}$ integration is unreliable (option 3), and splitting is essential connectivity data, never decorative (option 4).'
          }
        ]
      }
    }
  ]
}
