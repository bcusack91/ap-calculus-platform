export const oChemIRMSPart6Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop — IR and MS Together

**Part 6 of 7 — Solving Real Unknowns**

You now have two independent windows on a molecule: **mass spectrometry** (mass, formula, degrees of unsaturation, fragmentation) and **infrared** (functional groups). Neither alone is decisive, but combined they are formidable. This part is pure practice: a repeatable procedure followed by fully worked unknowns.

**The combined workflow.**
1. **From MS, get the molecular ion** $\\text{M}^{+\\bullet}$ and apply the **nitrogen rule** (odd mass $\\rightarrow$ odd N).
2. **Read isotope peaks**: M+2 at $\\sim 3:1$ means Cl, at $\\sim 1:1$ means Br; M+1 height $\\div\\, 1.1\\%$ estimates carbon count.
3. **Propose a formula and compute degrees of unsaturation**, $\\text{DoU} = (2c + 2 + n - h - x)/2$.
4. **From IR, identify functional groups**: scan above $3000$ (O–H, N–H, unsaturated C–H), the triple-bond window ($2100$–$2260$), and the carbonyl region ($\\sim 1700$).
5. **Reconcile**: the functional groups must consume the right number of degrees of unsaturation, and MS fragments must match plausible cleavages.

The art is in step 5 — making the two data sets tell *one consistent story*.
      `
    },
    {
      id: 'infra6-worked1',
      type: 'text' as const,
      content: `
### Worked Unknown 1 — An Oxygen Compound

**Data.** $\\text{M}^{+\\bullet} = 60$ (even). IR: a **very broad** band $2500$–$3300\\ \\text{cm}^{-1}$ and a **strong** band at $1715\\ \\text{cm}^{-1}$; C–H bands below $3000$. MS fragments at $m/z = 45$ and $m/z = 43$.

**Step 1 — Nitrogen rule.** Even mass $60$ $\\rightarrow$ zero (or even) nitrogens. Assume no N.

**Step 2 — Formula.** A small even mass with a carbonyl and a broad acidic O–H suggests a carboxylic acid. Try $\\text{C}_2\\text{H}_4\\text{O}_2$: mass $= 24 + 4 + 32 = 60$.

**Step 3 — Degrees of unsaturation.** $\\text{DoU} = (2\\cdot2 + 2 - 4)/2 = (6 - 4)/2 = 1$. Exactly one — accounted for by the C=O.

**Step 4 — IR.** The very broad $2500$–$3300$ band is the carboxylic-acid O–H; $1715$ is its C=O. Consistent with $-\\text{COOH}$.

**Step 5 — Fragments.** Loss of $\\text{OH}$ (17) from 60 gives $m/z = 43$ (acylium $\\text{CH}_3\\text{CO}^+$); loss of $\\text{CH}_3$ (15) gives $m/z = 45$ ($\\text{COOH}^+$). Both fit.

**Answer: acetic acid, $\\text{CH}_3\\text{COOH}$.** Every piece of data converges: even mass (no N), one degree of unsaturation spent on C=O, the diagnostic broad acid O–H, and fragments at 45 ($\\text{COOH}^+$) and 43 (acylium).
      `
    },
    {
      id: 'infra6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Reconciling the Data
      `,
      exercise: {
        questions: [
          {
            question: 'An unknown has $\\text{M}^{+\\bullet} = 58$, one degree of unsaturation, a strong IR band at $1715\\ \\text{cm}^{-1}$, NO broad O–H, and a strong fragment at $m/z = 43$. What is the most likely compound?',
            options: [
              'Acetic acid ($\\text{CH}_3\\text{COOH}$)',
              'Propan-1-ol ($\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{OH}$)',
              'Acetone ($\\text{CH}_3\\text{COCH}_3$)',
              'Propyne ($\\text{CH}_3\\text{C}\\equiv\\text{CH}$)'
            ],
            correctAnswer: 2,
            explanation: 'Mass 58 with one degree of unsaturation and a carbonyl ($1715$) but NO broad O–H rules out a carboxylic acid and an alcohol. The $m/z = 43$ acylium ($\\text{CH}_3\\text{CO}^+$) plus formula $\\text{C}_3\\text{H}_6\\text{O}$ (mass 58, DoU 1) points to acetone. Propyne lacks a carbonyl; propanol would show a broad O–H and no strong $1715$ band.'
          },
          {
            question: 'A molecule shows ZERO degrees of unsaturation by formula, yet a chemist claims the IR shows a strong carbonyl. What is the correct conclusion?',
            options: [
              'There is an inconsistency — a C=O requires at least one degree of unsaturation, so the formula or the assignment is wrong',
              'The molecule has a hidden triple bond',
              'Carbonyls do not count toward unsaturation',
              'The molecule must contain chlorine'
            ],
            correctAnswer: 0,
            explanation: 'A C=O is one degree of unsaturation. If the formula gives zero degrees, it is impossible to also have a carbonyl, so something is misassigned (perhaps the formula is wrong, or the IR band is not actually a carbonyl). Reconciling DoU with functional groups is exactly the consistency check of step 5.'
          },
          {
            question: 'During step 5 of the workflow, you find the functional groups identified by IR account for only 1 degree of unsaturation, but the formula gives 4. What does the leftover 3 most likely represent?',
            options: [
              'An error; degrees of unsaturation cannot exceed those from functional groups',
              'Three chlorine atoms',
              'Three nitrogen atoms',
              'A ring system or additional $\\pi$ bonds not associated with the IR-visible group, such as an aromatic ring'
            ],
            correctAnswer: 3,
            explanation: 'Degrees of unsaturation count all rings plus $\\pi$ bonds. If a carbonyl accounts for 1 and the formula demands 4, the remaining 3 strongly suggest additional unsaturation — classically an aromatic ring (which alone is 4, but here combined bookkeeping points to ring/$\\pi$ content). Extra atoms like Cl or N do not create unsaturation by themselves.'
          }
        ]
      }
    },
    {
      id: 'infra6-worked2',
      type: 'text' as const,
      content: `
### Worked Unknown 2 — A Halogen and a Ring

**Data.** Molecular-ion cluster at $m/z = 112$ and $m/z = 114$ in a $\\sim 3:1$ ratio. IR: C–H bands BOTH above and below $3000\\ \\text{cm}^{-1}$; no carbonyl, no broad O–H. Strong fragment at $m/z = 77$.

**Step 1 — Isotopes.** The $3:1$ doublet at M / M+2 is the unmistakable signature of **one chlorine**.

**Step 2 — Nitrogen rule.** The lower cluster mass $112$ is even $\\rightarrow$ zero nitrogens.

**Step 3 — Formula.** Subtract one Cl (35) from 112: $112 - 35 = 77$ for the rest. A $\\text{C}_6\\text{H}_5$ group is $72 + 5 = 77$. So the formula is $\\text{C}_6\\text{H}_5\\text{Cl}$ (chlorobenzene), mass $= 77 + 35 = 112$.

**Step 4 — DoU.** $\\text{DoU} = (2\\cdot6 + 2 - 5 - 1)/2 = (14 - 6)/2 = 4$. Four degrees = an aromatic ring.

**Step 5 — IR and fragments.** C–H above $3000$ confirms aromatic ($sp^2$) C–H, consistent with a benzene ring; absence of carbonyl/O–H fits a simple aryl halide. The fragment at $m/z = 77$ is the **phenyl cation** $\\text{C}_6\\text{H}_5^+$, formed by loss of the chlorine (35) from 112.

**Answer: chlorobenzene, $\\text{C}_6\\text{H}_5\\text{Cl}$.** The $3:1$ isotope cluster (Cl), four degrees of unsaturation (aromatic ring), aromatic C–H above $3000$, and the $m/z = 77$ phenyl cation all tell the same story.
      `
    },
    {
      id: 'infra6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Putting Clues Together
      `,
      exercise: {
        questions: [
          {
            question: 'A molecular-ion cluster shows M and M+2 in a $\\sim 1:1$ ratio at $m/z = 156$ and $158$, with a fragment at $m/z = 77$. The IR shows aromatic C–H above $3000$ and no carbonyl. The compound is most likely:',
            options: [
              'chlorobenzene',
              'phenol',
              'benzaldehyde',
              'bromobenzene ($\\text{C}_6\\text{H}_5\\text{Br}$)'
            ],
            correctAnswer: 3,
            explanation: 'A $1:1$ M / M+2 doublet indicates bromine, not chlorine ($3:1$). Losing Br (79) from 156 gives the $m/z = 77$ phenyl cation, and aromatic C–H above $3000$ with no carbonyl fits an aryl bromide: bromobenzene ($\\text{C}_6\\text{H}_5\\text{Br}$, $77 + 79 = 156$). Phenol and benzaldehyde would show O–H or C=O bands.'
          },
          {
            question: 'An unknown gives $\\text{M}^{+\\bullet} = 93$ (odd), a $1:1$ M+2 doublet, and IR with no carbonyl. What two facts are established immediately?',
            options: [
              'It contains an even number of nitrogens and one chlorine',
              'It is a carboxylic acid containing bromine',
              'It contains an odd number of nitrogens (one) and one bromine',
              'It contains no heteroatoms at all'
            ],
            correctAnswer: 2,
            explanation: 'Odd molecular mass (93) invokes the nitrogen rule: an odd number of nitrogens, simplest being one. The $1:1$ M+2 doublet indicates bromine. Together these point toward something like bromomethane-amine-type or, classically, a brominated N-containing fragment. A $3:1$ ratio would be chlorine, and the absence of a carbonyl rules out a carboxylic acid.'
          }
        ]
      }
    },
    {
      id: 'infra6-worked3',
      type: 'text' as const,
      content: `
### Worked Unknown 3 — Nitrogen in Disguise

**Data.** $\\text{M}^{+\\bullet} = 59$ (odd). IR: medium bands near $3300$–$3400\\ \\text{cm}^{-1}$ (possibly two), no carbonyl, no triple-bond band. MS fragment at $m/z = 30$.

**Step 1 — Nitrogen rule.** Odd mass $59$ $\\rightarrow$ odd number of nitrogens; take one N.

**Step 2 — Formula.** Subtract N (14): $59 - 14 = 45$ for $\\text{C}_x\\text{H}_y$. A formula $\\text{C}_3\\text{H}_9\\text{N}$ has mass $36 + 9 + 14 = 59$.

**Step 3 — DoU.** $\\text{DoU} = (2\\cdot3 + 2 + 1 - 9)/2 = (8 + 1 - 9)/2 = 0$. Zero degrees — a saturated amine, no rings or $\\pi$ bonds.

**Step 4 — IR.** Medium bands at $3300$–$3400$ (one or two, depending on primary vs secondary) are **N–H stretches**. No carbonyl and no O–H broad band is consistent with a simple amine.

**Step 5 — Fragment.** $m/z = 30$ is the iminium/aminomethyl cation $\\text{CH}_2=\\text{NH}_2^+$, a classic amine fragment (note its even mass, the nitrogen-containing daughter of an odd-mass parent).

**Answer: a propylamine, e.g. $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{NH}_2$** (or an isomer such as trimethylamine, distinguished by the N–H count). The odd molecular ion (nitrogen rule), zero degrees of unsaturation, N–H stretches, and the $m/z = 30$ nitrogen fragment all agree.
      `
    },
    {
      id: 'infra6-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 6 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Full unknown: $\\text{M}^{+\\bullet} = 122$ (even). IR shows a very broad $2500$–$3300\\ \\text{cm}^{-1}$ band, a strong $1690\\ \\text{cm}^{-1}$ band, and aromatic C–H above $3000$. Fragments at $m/z = 105$ and $m/z = 77$. Best structure?',
            options: [
              'Benzaldehyde ($\\text{C}_6\\text{H}_5\\text{CHO}$)',
              'Toluene ($\\text{C}_6\\text{H}_5\\text{CH}_3$)',
              'Aniline ($\\text{C}_6\\text{H}_5\\text{NH}_2$)',
              'Benzoic acid ($\\text{C}_6\\text{H}_5\\text{COOH}$)'
            ],
            correctAnswer: 3,
            explanation: 'Even mass 122 ($\\text{C}_7\\text{H}_6\\text{O}_2$, DoU = 5) with a very broad acid O–H plus a conjugated carbonyl at $1690$ (lowered by aromatic conjugation) signals a carboxylic acid on a ring. Loss of OH (17) gives the acylium at $m/z = 105$ ($\\text{C}_6\\text{H}_5\\text{CO}^+$); further loss of CO (28) gives the phenyl cation at $m/z = 77$. This is benzoic acid. Benzaldehyde lacks the broad O–H; toluene and aniline lack the carbonyl.'
          },
          {
            question: 'Which single observation would let you instantly distinguish 1-bromobutane from 1-chlorobutane by mass spectrometry alone?',
            options: [
              'The base peak position',
              'The M / M+2 isotope ratio — $\\sim 1:1$ for the bromide vs $\\sim 3:1$ for the chloride',
              'The molecular ion is identical for both',
              'The nitrogen rule'
            ],
            correctAnswer: 1,
            explanation: 'Bromine gives a near $1:1$ M / M+2 doublet while chlorine gives $\\sim 3:1$; that isotope-cluster shape distinguishes them at a glance regardless of the rest of the spectrum. Their molecular ions differ in mass too, but the diagnostic, instantly recognizable feature is the isotope ratio. The nitrogen rule is irrelevant (no nitrogen present).'
          }
        ]
      }
    }
  ]
}
