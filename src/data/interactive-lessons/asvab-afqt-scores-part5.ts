export const asvabAfqtScoresPart5Data = {
  topicSlug: 'asvab-afqt-scores',
  sections: [
    {
      id: 'afqt5-intro',
      type: 'text' as const,
      content: `# 🎖️ Your AFQT, Line Scores and Job Eligibility

**Part 5 of 7 — Line Scores and Job Eligibility**

### What a line score is

A **line score** (also called a composite or aptitude area) combines several subtest standard scores. Every military job lists the line scores it requires, so line scores decide **which jobs** you can choose. Each service has its own set and reports them its own way:

| Service | How line scores are reported |
|:---|:---|
| Army and Marine Corps | A scale with mean 100 and standard deviation 20 |
| Air Force (and Space Force) | Percentiles, 1 to 99 |
| Navy | Plain sums of standard scores, with no rescaling |

In every formula below, **VE** is the verbal composite (WK and PC) and **AS** is the Auto & Shop composite (AI and SI). These definitions come from the Defense Manpower Data Center's 2004 report on the current score scale and the official ASVAB site.`
    },
    {
      id: 'afqt5-army-marines',
      type: 'text' as const,
      content: `## Army: GT and nine more aptitude areas

The Army's best-known line score is **GT (General Technical) = AR + VE**. It is the only Army aptitude area that weights its subtests equally; the Army puts the sum on its 100-centered scale.

The Army's other nine aptitude areas (CL, CO, EL, FA, GM, MM, OF, SC, ST) are **weighted blends** of GS, AR, MK, MC, EI, AS and VE. Prep websites often print them as simple sums, but those sums are not the official definitions. What you can rely on is **which subtests matter most**:

| Army area | Subtests that carry the most weight |
|:---|:---|
| CL (Clerical) | AR, VE and MK |
| MM (Mechanical Maintenance) | AS most of all, then MC, AR and EI |
| GM (General Maintenance) | AS, AR and MK |
| ST (Skilled Technical) | VE, AR and MK |
| CO (Combat) | MK, then AS and MC |

## Marine Corps

| Composite | Formula |
|:---|:---|
| GT (General Technical) | AR + MC + VE |
| MM (Mechanical Maintenance) | AR + MC + EI + AS |
| EL (Electronics) | GS + AR + MK + EI |
| CL (Clerical) | MK + VE |

Notice that the **Marine GT includes Mechanical Comprehension**; the Army GT does not.`
    },
    {
      id: 'afqt5-af-navy',
      type: 'text' as const,
      content: `## Air Force and Space Force: MAGE

| Area | Formula |
|:---|:---|
| M (Mechanical) | AR + MC + AS + 2 × VE |
| A (Administrative) | MK + VE |
| G (General) | AR + VE |
| E (Electronics) | GS + AR + MK + EI |

The Space Force uses the Air Force system, and both report these as percentiles.

## Navy: plain sums

| Composite | Formula |
|:---|:---|
| GT | AR + VE |
| EL | GS + AR + MK + EI |
| BEE | GS + AR + 2 × MK |
| ENG | MK + AS |
| MEC | AR + MC + AS |
| MEC2 | AR + MC + **AO** |
| NUC | AR + MK + MC + VE |
| OPS | AR + MK + **AO** + VE |
| HM | GS + MK + VE |
| ADM | MK + VE |

Each Navy rating (job) sets its own sum and cutoff, often with an alternative combination, and cutoffs change. The Navy is the service that uses **Assembling Objects**, in MEC2, OPS and many rating standards. The Coast Guard has no published composite system; its ratings use sums such as VE + AR or MK + EI + GS.

### Worked example (Navy)

A Navy recruit has AR 54, MK 52, VE 49 and AO 58. A rating's standard (made up for this example) asks for VE + AR + MK + AO of at least 210.

$$49 + 54 + 52 + 58 = 213 \\ge 210 \\quad\\text{qualifies}$$

Because the Navy uses plain sums, you can check a Navy standard yourself once you know your standard scores.`
    },
    {
      id: 'afqt5-mc',
      type: 'multiple-choice' as const,
      content: '**Which subtests feed which line score?** 🎯',
      exercise: {
        questions: [
          {
            question: "The Army GT score is built from which scores?",
            options: ['AR and VE', 'AR, MC and VE', 'MK and VE', 'GS, AR, MK and EI'],
            correctAnswer: 0,
            explanation: 'Army GT = AR + VE, equally weighted. AR + MC + VE is the Marine Corps GT, MK + VE is a clerical/administrative composite, and GS + AR + MK + EI is an electronics composite.'
          },
          {
            question: "A future Marine wants a higher GT score. Which subtest counts toward the Marine GT but NOT toward the Army GT?",
            options: ['Mathematics Knowledge', 'Mechanical Comprehension', 'Electronics Information', 'Word Knowledge'],
            correctAnswer: 1,
            explanation: 'Marine GT = AR + MC + VE, while Army GT = AR + VE. Mechanical Comprehension is the difference. Word Knowledge counts toward both through VE, and neither GT uses Mathematics Knowledge or Electronics Information.'
          },
          {
            question: "For which service does a strong Assembling Objects score matter most?",
            options: ['The Army', 'The Air Force', 'The Navy', 'The Marine Corps'],
            correctAnswer: 2,
            explanation: 'AO appears in the Navy\'s MEC2 and OPS composites and in many Navy rating standards. It is not in the Army, Air Force or Marine Corps composites.'
          },
          {
            question: "Which statement about the Army's Mechanical Maintenance (MM) aptitude area is accurate?",
            options: ['It is exactly AS + MC + EI', 'It is a weighted blend that leans most on AS and MC', 'It uses only the four AFQT subtests', 'It is the same as the Army GT score'],
            correctAnswer: 1,
            explanation: 'Every Army aptitude area except GT is an official weighted blend. MM leans most heavily on AS, then MC, with AR and EI close behind. Simple sums printed on prep sites are not the official definition.'
          }
        ]
      }
    },
    {
      id: 'afqt5-input',
      type: 'input-boxes' as const,
      content: `**Check a Navy standard.** ✍️

A Navy applicant's standard scores: GS 47, AR 53, MK 50, MC 55, VE 52, AO 61.

**1)** Navy MEC2 = AR + MC + AO:

**2)** Navy OPS = AR + MK + AO + VE:

**3)** Navy BEE = GS + AR + 2 × MK:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['169', '216', '200'],
        hint1: '$53 + 55 + 61$.',
        hint2: '$53 + 50 + 61 + 52$.',
        hint3: 'Double MK: $47 + 53 + 2(50)$.',
        explanation: '(1) $53 + 55 + 61 = 169$. (2) $53 + 50 + 61 + 52 = 216$. (3) $47 + 53 + 100 = 200$. Navy composites are plain sums of standard scores, so a strong AO score lifts both MEC2 and OPS.'
      }
    },
    {
      id: 'afqt5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Air Force MAGE.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'The Air Force General (G) area uses:',
            options: ['AR + VE', 'MK + VE', 'GS + AR + MK + EI', 'AR + MC + AS + 2 × VE'],
            correctAnswer: 0
          },
          {
            label: 'The Air Force Electronics (E) area uses:',
            options: ['GS + AR + MK + EI', 'AR + VE', 'MK + AS', 'AR + MC + AS + 2 × VE'],
            correctAnswer: 0
          },
          {
            label: 'Air Force line scores are reported as:',
            options: ['percentiles from 1 to 99', 'sums with no rescaling', 'a scale with mean 100', 'percent correct'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['AR + VE', 'GS + AR + MK + EI', 'percentiles from 1 to 99'],
        hint1: 'G is the general area, like the Army GT.',
        hint2: 'E needs science, math and electronics.',
        hint3: 'The Navy is the service that uses plain sums.',
        explanation: 'MAGE: M = AR + MC + AS + 2 × VE, A = MK + VE, G = AR + VE, E = GS + AR + MK + EI. The Air Force and Space Force report them as percentiles.'
      }
    },
    {
      id: 'afqt5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- **Line scores** combine subtest standard scores and decide **job** eligibility.
- **Army GT = AR + VE**. The other Army areas are weighted blends: know which subtests matter most (MM: AS and MC; CL: AR, VE and MK).
- **Marine GT = AR + MC + VE**. **Air Force MAGE**: M = AR + MC + AS + 2VE, A = MK + VE, G = AR + VE, E = GS + AR + MK + EI.
- **Navy** composites are plain sums; **AO counts for the Navy** (MEC2, OPS). Cutoffs vary by rating and change.

> **Up Next:** Part 6 — retests, which score counts, PiCAT, and where to spend your study time.`
    }
  ]
};
