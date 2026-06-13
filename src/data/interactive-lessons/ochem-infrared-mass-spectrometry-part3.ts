export const oChemIRMSPart3Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra3-intro',
      type: 'text' as const,
      content: `
## Key IR Absorptions — The Diagnostic Bands

**Part 3 of 7 — A Working Table of Functional Groups**

This part is the practical heart of IR. A handful of bands in the diagnostic region ($4000$–$1500\\ \\text{cm}^{-1}$) account for the vast majority of functional-group identifications. Memorize their positions, but more importantly learn to read their *shape* and *intensity*, because two bands at the same wavenumber can mean different things depending on whether they are broad or sharp, strong or weak.

| Bond / group | Wavenumber ($\\text{cm}^{-1}$) | Appearance | Diagnostic of |
|--------------|------------------------------|------------|---------------|
| **O–H** (alcohol) | $3200$–$3550$ | strong, **broad** | alcohols, phenols |
| **O–H** (carboxylic acid) | $2500$–$3300$ | **very broad** | $\\text{COOH}$ |
| **N–H** (amine/amide) | $3300$–$3500$ | medium, sometimes split | amines, amides |
| **C–H** ($sp^3$) | $2850$–$2960$ | strong | alkyl C–H |
| **C–H** ($sp^2$) | $3010$–$3100$ | medium | alkene/aromatic C–H |
| **C–H** ($sp$, $\\equiv$C–H) | $\\sim 3300$ | sharp | terminal alkyne |
| **C$\\equiv$N** (nitrile) | $\\sim 2250$ | sharp, medium | nitriles |
| **C$\\equiv$C** (alkyne) | $\\sim 2100$–$2260$ | weak | internal/terminal alkyne |
| **C=O** (carbonyl) | $1650$–$1780$ | **strong, sharp** | aldehydes, ketones, acids, esters, amides |
| **C=C** (alkene) | $\\sim 1620$–$1680$ | medium | alkenes, aromatics |
      `
    },
    {
      id: 'infra3-shapes',
      type: 'text' as const,
      content: `
### Reading Shape and Position, Not Just Wavenumber

**The O–H story.** A free O–H (no hydrogen bonding, as in a dilute gas-phase sample) is a sharp spike near $3600\\ \\text{cm}^{-1}$. In a normal liquid sample the molecules hydrogen-bond to one another, and because each O–H now experiences a slightly different environment the band smears into a wide, rounded hump from about $3200$ to $3550\\ \\text{cm}^{-1}$. The carboxylic acid O–H is the most dramatic case: extensive hydrogen-bonded dimers produce an enormous band sprawling from $2500$ all the way to $3300\\ \\text{cm}^{-1}$, often swamping the C–H stretches. **Breadth itself is the clue.**

**The C–H dividing line at $3000\\ \\text{cm}^{-1}$.** This is one of the most useful tricks in IR. Carbon hybridization controls C–H stretch position:
- $sp^3$ C–H (more s-poor, longer/weaker bond) appears *just below* $3000\\ \\text{cm}^{-1}$.
- $sp^2$ and $sp$ C–H (more s-rich, shorter/stiffer bond) appear *just above* $3000\\ \\text{cm}^{-1}$.

So a band peeking above $3000\\ \\text{cm}^{-1}$ flags unsaturation (alkene or aromatic C–H), while bands purely below it indicate a saturated, alkyl-only skeleton.

**The carbonyl is the loudest band in the spectrum.** Because the C=O bond has a large dipole and a large change in dipole upon stretching, its absorption near $1700\\ \\text{cm}^{-1}$ is usually the strongest, sharpest peak present. Its *exact* position then subdivides the carbonyl family (covered next).
      `
    },
    {
      id: 'infra3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Shape Tells the Story
      `,
      exercise: {
        questions: [
          {
            question: 'An IR spectrum shows a broad, rounded absorption centered near $3300\\ \\text{cm}^{-1}$. Which functional group is most likely present?',
            options: [
              'A nitrile ($\\text{C}\\equiv\\text{N}$)',
              'A C=O of a ketone',
              'An $sp^3$ C–H',
              'An O–H of an alcohol (broadened by hydrogen bonding)'
            ],
            correctAnswer: 3,
            explanation: 'Breadth near $3200$–$3550\\ \\text{cm}^{-1}$ is the signature of a hydrogen-bonded O–H. Nitriles ($\\sim 2250$) and ketone C=O ($\\sim 1700$) are sharp and sit far lower; $sp^3$ C–H is near $2900\\ \\text{cm}^{-1}$. Shape plus position together make the call.'
          },
          {
            question: 'A compound shows C–H absorption bands BOTH just below and just above $3000\\ \\text{cm}^{-1}$. What does the band above $3000\\ \\text{cm}^{-1}$ specifically indicate?',
            options: [
              'Only $sp^3$ (saturated) carbons are present',
              'The presence of $sp^2$ or $sp$ C–H, i.e. unsaturation such as an alkene or aromatic ring',
              'A carbonyl group',
              'A carboxylic acid'
            ],
            correctAnswer: 1,
            explanation: 'The $3000\\ \\text{cm}^{-1}$ line divides hybridizations: $sp^3$ C–H falls below it, $sp^2$/$sp$ C–H rise above it because the stiffer, s-richer bonds vibrate faster. A band above $3000$ therefore reveals alkene or aromatic C–H. Bands purely below $3000$ would indicate a saturated skeleton.'
          },
          {
            question: 'Why is the carbonyl (C=O) stretch usually the strongest band in an IR spectrum?',
            options: [
              'The C=O bond has a large dipole and undergoes a large dipole change on stretching',
              'Carbonyls are the heaviest groups',
              'Carbonyls absorb in the fingerprint region',
              'C=O bonds are always hydrogen bonded'
            ],
            correctAnswer: 0,
            explanation: 'IR intensity scales with the change in dipole moment during the vibration. The polar C=O bond has a large dipole that changes substantially as it stretches, producing an intense absorption near $1700\\ \\text{cm}^{-1}$ — typically the tallest, sharpest peak in the spectrum.'
          }
        ]
      }
    },
    {
      id: 'infra3-worked',
      type: 'text' as const,
      content: `
### Worked Example — Deduce the Functional Group from IR Alone

*An unknown liquid gives these prominent IR bands:*
- a **very broad** band from $2500$ to $3300\\ \\text{cm}^{-1}$,
- a **strong, sharp** band at $1710\\ \\text{cm}^{-1}$,
- bands just below $3000\\ \\text{cm}^{-1}$.

*Which functional group is present?*

**Step 1 — Interpret the high-wavenumber region.** A band that is *very broad* and stretches from $2500$ up to $3300\\ \\text{cm}^{-1}$ is far too wide to be an ordinary alcohol O–H or an amine N–H. This breadth, overlapping the C–H region, is the hallmark of a **carboxylic acid O–H** (hydrogen-bonded dimer).

**Step 2 — Interpret the $1710\\ \\text{cm}^{-1}$ band.** A strong, sharp absorption here is a **carbonyl, C=O**.

**Step 3 — Combine.** A broad acidic O–H *and* a carbonyl, occurring together, point unambiguously to a **carboxylic acid** ($-\\text{COOH}$): the O–H and the C=O are the two halves of the same group. The $sp^3$ C–H bands below $3000\\ \\text{cm}^{-1}$ tell us the rest of the molecule is an alkyl chain.

**Conclusion:** the compound is a carboxylic acid such as propanoic acid, $\\text{CH}_3\\text{CH}_2\\text{COOH}$. The lesson: a lone C=O could be many things, but **C=O plus a very broad O–H = carboxylic acid**. Had the broad O–H been absent, we would instead suspect an aldehyde or ketone.
      `
    },
    {
      id: 'infra3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Triple Bonds and the Triple-Bond Region
      `,
      exercise: {
        questions: [
          {
            question: 'Both nitriles and alkynes absorb in the $2100$–$2260\\ \\text{cm}^{-1}$ window. Which additional clue best distinguishes a TERMINAL alkyne from a nitrile?',
            options: [
              'A sharp $\\equiv$C–H stretch near $3300\\ \\text{cm}^{-1}$, present for a terminal alkyne but not a nitrile',
              'A broad O–H band',
              'A strong C=O band',
              'The nitrile absorbs in the fingerprint region only'
            ],
            correctAnswer: 0,
            explanation: 'A terminal alkyne carries a hydrogen on the $sp$ carbon, giving a sharp $\\equiv$C–H stretch at $\\sim 3300\\ \\text{cm}^{-1}$ in addition to the $\\text{C}\\equiv\\text{C}$ band near $2100$–$2150$. A nitrile has no such C–H and shows only its $\\text{C}\\equiv\\text{N}$ band near $2250\\ \\text{cm}^{-1}$. The $\\equiv$C–H band is the tiebreaker.'
          },
          {
            question: 'A symmetric internal alkyne (e.g. but-2-yne, $\\text{CH}_3\\text{C}\\equiv\\text{CCH}_3$) shows an unexpectedly WEAK or absent $\\text{C}\\equiv\\text{C}$ band. Why?',
            options: [
              'Triple bonds never absorb in IR',
              'The bond is too stiff to vibrate',
              'The symmetric stretch produces little or no change in dipole moment, weakening the absorption',
              'It absorbs only in the fingerprint region'
            ],
            correctAnswer: 2,
            explanation: 'IR intensity depends on the dipole change during the vibration. In a symmetric internal alkyne the stretch is nearly symmetric, so the dipole barely changes and the band is weak or vanishes. The same selection rule makes symmetric diatomics IR-inactive; here the symmetry is approximate, so the band is merely faint.'
          },
          {
            question: 'An IR spectrum shows a sharp medium band at exactly $2250\\ \\text{cm}^{-1}$ and no band near $3300\\ \\text{cm}^{-1}$. The most likely group is:',
            options: [
              'a terminal alkyne',
              'an alcohol',
              'a ketone',
              'a nitrile ($\\text{C}\\equiv\\text{N}$)'
            ],
            correctAnswer: 3,
            explanation: 'A nitrile absorbs near $2250\\ \\text{cm}^{-1}$ (slightly higher than a plain $\\text{C}\\equiv\\text{C}$, because C–N is more polar). The absence of a $\\sim 3300\\ \\text{cm}^{-1}$ $\\equiv$C–H rules out a terminal alkyne. Alcohols ($\\sim 3300$ broad) and ketones ($\\sim 1700$) absorb elsewhere.'
          }
        ]
      }
    },
    {
      id: 'infra3-fingerprint',
      type: 'text' as const,
      content: `
### Lower-Region Clues Worth Knowing

Although the fingerprint region is mostly used for compound matching, a few of its bands are reliable enough to be diagnostic:

- **C–O stretch** of alcohols, ethers, and esters: a strong band around $1050$–$1300\\ \\text{cm}^{-1}$. In an ester you often see *two* C–O stretches.
- **N–H bend** of amines: a band near $1600\\ \\text{cm}^{-1}$ that can be mistaken for C=C.
- **Aromatic overtone/combination bands** and out-of-plane C–H bends ($690$–$900\\ \\text{cm}^{-1}$) that hint at the substitution pattern of a benzene ring.

A productive habit is to interpret the diagnostic region first to build a hypothesis, then check whether the fingerprint region is *consistent* with it (for instance, confirming a strong C–O stretch when you suspect an ester), rather than trying to assign the fingerprint region cold.

> **Summary heuristic.** Scan an IR spectrum top-down: (1) Is there anything above $3000$? (O–H, N–H, $sp^2$/$sp$ C–H.) (2) Is there a triple-bond band near $2100$–$2260$? (3) Is there a strong band near $1700$? (carbonyl). (4) Then use position/shape to refine. Three questions resolve most unknowns.
      `
    },
    {
      id: 'infra3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 3 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'An unknown shows a strong band at $1715\\ \\text{cm}^{-1}$ and a sharp medium band at $3300\\ \\text{cm}^{-1}$ with NO broad absorption. Bands appear above and below $3000\\ \\text{cm}^{-1}$. Which combination of features is present?',
            options: [
              'A carboxylic acid only',
              'A carbonyl plus a terminal alkyne, on a partly unsaturated skeleton',
              'An alcohol only',
              'A nitrile only'
            ],
            correctAnswer: 1,
            explanation: 'The $1715\\ \\text{cm}^{-1}$ band is a carbonyl; the sharp (not broad) $3300\\ \\text{cm}^{-1}$ band is a terminal-alkyne $\\equiv$C–H, not an O–H (which would be broad). C–H bands above $3000$ confirm unsaturated C–H. A carboxylic acid is excluded because its O–H would be very broad, which is explicitly absent.'
          },
          {
            question: 'Using the spring-model trend, why does an $sp^2$ C–H stretch (alkene/aromatic) appear at a HIGHER wavenumber than an $sp^3$ C–H stretch?',
            options: [
              'The $sp^2$ carbon is heavier',
              'The $sp^2$ C–H bond has more s-character, making it shorter and stiffer (larger force constant)',
              'The $sp^2$ C–H bond is a double bond',
              'Hydrogen is heavier in alkenes'
            ],
            correctAnswer: 1,
            explanation: 'Greater s-character in an $sp^2$ orbital shortens and stiffens the C–H bond, raising its force constant $k$. Since $\\tilde{\\nu} \\propto \\sqrt{k}$, the band shifts above $3000\\ \\text{cm}^{-1}$. The hydrogen mass is unchanged, so the effect is purely a stiffness (hybridization) effect, not a mass effect.'
          }
        ]
      }
    }
  ]
}
