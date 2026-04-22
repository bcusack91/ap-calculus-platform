export const govSeparationOfPowersPart1Data = {
  topicSlug: 'gov-separation-of-powers',
  sections: [
    {
      id: 'govsep1-intro',
      type: 'text' as const,
      content: `
# ⚖️ Separation of Powers & Checks and Balances

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| Theoretical foundations: Montesquieu, Locke, Madison |
| Three branches: legislative, executive, judicial |
| Vesting clauses & enumerated powers |
| Anti-tyranny logic |

> 🔑 Key idea: The separation of powers divides government authority among three branches (legislative, executive, judicial); checks and balances permits each branch to limit the others. Together they prevent any single branch from becoming tyrannical.
      `
    },
    {
      id: 'govsep1-content',
      type: 'text' as const,
      content: `
## Theoretical Foundations

| Thinker | Work | Contribution |
|---|---|---|
| **John Locke** | *Second Treatise of Government* (1689) | Distinguished legislative from executive power; "federative" power for foreign affairs |
| **Baron de Montesquieu** | *The Spirit of the Laws* (1748) | Three-branch theory (legislative, executive, judicial); "When the legislative and executive powers are united in the same person... there can be no liberty" |
| **James Madison** | *Federalist No. 47, 48, 51* (1788) | Synthesized Montesquieu for U.S. context; "Ambition must be made to counteract ambition"; partial separation with overlapping checks |

## Three Branches & Vesting Clauses

| Branch | Vesting clause | Core enumerated powers |
|---|---|---|
| **Legislative** (Article I) | "All legislative Powers herein granted shall be vested in a Congress" | Tax/spend; commerce; declare war; raise armies; borrow; coin money; impeach; advice and consent (Senate); originate revenue (House) |
| **Executive** (Article II) | "The executive Power shall be vested in a President" | Commander-in-chief; treaties (Senate consent); appointments (Senate consent); pardons; State of the Union; veto; "take care that the Laws be faithfully executed" |
| **Judicial** (Article III) | "The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish" | Cases arising under Constitution + federal law + treaties; controversies between states; cases affecting ambassadors |

> 🔑 Key takeaway: The vesting clauses establish the formal structural separation. Each branch has DISTINCT institutional character (Congress = deliberative legislature; President = unitary executive; Court = independent judiciary).

## Anti-Tyranny Logic — Federalist 51

| Madison's argument | Mechanism |
|---|---|
| Human nature is self-interested ("If men were angels, no government would be necessary") | Government must be designed for fallible humans |
| Concentrated power tends toward tyranny | Divide power across branches AND across federal/state (federalism) |
| Each branch must have "the necessary constitutional means and personal motives to resist encroachments" | Vesting clauses + checks + institutional self-interest |
| "Ambition must be made to counteract ambition" | Each branch's officeholders motivated to defend their institutional prerogatives |
| Partial separation, not pure separation | Overlapping powers create incentives for inter-branch checking |

## Partial Separation, Not Pure Separation

| Branch | Action | Other-branch role |
|---|---|---|
| Legislative passes bill | Executive signs/vetoes; Judicial reviews constitutionality |
| Executive negotiates treaty | Senate consents (2/3); Court reviews if treaty conflicts with Constitution |
| Executive nominates judges | Senate consents (majority); judges then independent |
| Judicial decides case | Congress can overturn statutory interpretation by passing new law; can override constitutional decision only by amendment |

> 🔑 Key idea: U.S. system is NOT a "pure" separation (where each branch acts only within its sphere); it is a system of SHARED POWERS where each branch's exercise of authority is checked by the others.
      `
    },
    {
      id: 'govsep1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Foundations** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes Madison's argument in Federalist 51?",
            options: [
              "Madison argues that because human nature is self-interested ('If men were angels, no government would be necessary'), and because concentrated power tends toward tyranny, government must be structured so that 'ambition must be made to counteract ambition' — each branch is given the necessary constitutional means (vesting clauses, distinct enumerated powers) AND the personal motives (institutional self-interest of officeholders) to resist encroachments by the other branches; the system is therefore one of PARTIAL separation with overlapping powers (vetoes, advice and consent, judicial review, impeachment) that create inter-branch checking incentives, supplemented by federalism's vertical division of authority — together producing 'a double security' for the rights of the people",
              "Madison argues that human nature is purely benevolent with no self-interest of any kind under any circumstance and government requires no structural design with no separation of powers, no checks and balances, no federalism, and no Bill of Rights of any kind during the entire period from 1788 onward in any region of the United States during the period in any region of the country",
              "Madison advocates for a pure separation of powers where each branch operates only within its own exclusive sphere with no veto, no advice and consent, no judicial review, no impeachment, and no inter-branch interaction of any kind during the entire period from 1788 onward in any region of the United States during the period in any region of the country",
              "There is no Federalist 51 of any kind during the entire period from 1788 onward in any region of the United States with no Madison, no Hamilton, no Jay, no Federalist Papers, no separation of powers, no checks and balances, no federalism, and no anti-tyranny argument of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Federalist 51 (Madison): human nature self-interested ("If men were angels..."), concentrated power → tyranny, structure must make "ambition counteract ambition" — each branch given constitutional means (vesting + enumerated) AND personal motives (institutional self-interest) to resist encroachment. PARTIAL separation with overlapping powers (veto, advice and consent, judicial review, impeachment) creates inter-branch checking; supplemented by federalism = "double security" for people\'s rights.'
          },
          {
            question: "Which best describes the relationship between Montesquieu's theory and the U.S. Constitution?",
            options: [
              "Montesquieu's *Spirit of the Laws* (1748) developed the modern three-branch theory based on observation of the British constitution, arguing that liberty requires the legislative, executive, and judicial functions to be exercised by different institutional actors ('When the legislative and executive powers are united in the same person... there can be no liberty'); Madison and the framers explicitly drew on Montesquieu (cited frequently in *The Federalist*) but ADAPTED his theory by adopting partial rather than pure separation — the U.S. Constitution shares powers across branches (vetoes, advice and consent, judicial review, impeachment) to create inter-branch checking incentives that Madison argued were necessary because pure separation would leave each branch defenseless against encroachment by the others",
              "Montesquieu had no influence on the U.S. Constitution of any kind during the entire period from 1748 onward in any region of the world with no Spirit of the Laws, no three-branch theory, no Federalist Papers, and no Madison citation of any kind during the entire period in any region of the United States during the period",
              "The U.S. Constitution adopted Montesquieu's pure separation of powers theory without modification of any kind under any circumstance with no veto, no advice and consent, no judicial review, no impeachment, and no inter-branch checks of any kind during the entire period from 1788 onward in any region of the United States during the period",
              "Montesquieu advocated for unitary government with no separation of powers of any kind under any circumstance and the U.S. framers rejected his theory entirely with no three-branch structure of any kind during the entire period from 1788 onward in any region of the United States during the period in any region of the country"
            ],
            correctAnswer: 0,
            explanation: 'Montesquieu (Spirit of the Laws 1748): three-branch theory from British observation; "when legislative and executive united... no liberty." Madison + framers explicitly drew on Montesquieu (cited frequently in Federalist) but ADAPTED — adopted PARTIAL (not pure) separation: shares powers (veto, advice and consent, judicial review, impeachment) to create inter-branch checking. Madison: pure separation would leave branches defenseless against encroachment.'
          }
        ]
      }
    },
    {
      id: 'govsep1-input',
      type: 'input-boxes' as const,
      content: `**Quick recall — name the constitutional provision**`,
      exercise: {
        questions: [
          {
            prompt: "The article and section number of the Constitution that vests 'All legislative Powers herein granted' in Congress.",
            answer: 'Article I',
            acceptableAnswers: ['Article I', 'Article 1', 'Art I', 'Art 1', 'article 1', 'article i'],
            hint: 'The very first article of the Constitution.'
          },
          {
            prompt: "The Federalist Paper in which Madison wrote 'Ambition must be made to counteract ambition' and 'If men were angels, no government would be necessary.'",
            answer: 'Federalist 51',
            acceptableAnswers: ['Federalist 51', 'Federalist No. 51', 'Federalist No 51', 'Federalist Paper 51', 'No. 51', 'no 51', 'federalist 51'],
            hint: 'The most-cited Federalist Paper on separation of powers; published February 6, 1788.'
          },
          {
            prompt: "The author whose 1748 work *The Spirit of the Laws* developed the three-branch theory adopted by the framers.",
            answer: 'Montesquieu',
            acceptableAnswers: ['Montesquieu', 'montesquieu', 'Baron de Montesquieu', 'Charles de Montesquieu'],
            hint: 'French Enlightenment political philosopher.'
          }
        ]
      }
    },
    {
      id: 'govsep1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each branch to its vesting clause article.**`,
      exercise: {
        dropdowns: [
          {
            label: "The branch whose powers are vested by Article I of the Constitution: ___",
            options: ['Legislative (Congress)', 'Executive (President)', 'Judicial (Supreme Court + lower federal courts)', 'Administrative (federal agencies)']
          },
          {
            label: "The branch whose powers are vested by Article II of the Constitution: ___",
            options: ['Legislative (Congress)', 'Executive (President)', 'Judicial (Supreme Court + lower federal courts)', 'Administrative (federal agencies)']
          },
          {
            label: "The branch whose powers are vested by Article III of the Constitution: ___",
            options: ['Legislative (Congress)', 'Executive (President)', 'Judicial (Supreme Court + lower federal courts)', 'Administrative (federal agencies)']
          }
        ],
        correctAnswers: ['Legislative (Congress)', 'Executive (President)', 'Judicial (Supreme Court + lower federal courts)'],
        hint1: 'The first article — Congress.',
        hint2: 'The second article — President.',
        hint3: 'The third article — Supreme Court and lower federal courts.',
        explanation: 'Vesting clauses: Article I = Legislative (Congress); Article II = Executive (President); Article III = Judicial (Supreme Court + lower federal courts). The administrative state (federal agencies) is not a separate constitutional branch — agencies operate within the executive branch (and sometimes as "independent" agencies with greater insulation from presidential control).'
      }
    },
    {
      id: 'govsep1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Anti-Tyranny Logic**`,
      exercise: {
        questions: [
          {
            question: "Why did the framers adopt PARTIAL separation of powers (with checks and balances) rather than PURE separation?",
            options: [
              "Madison argued in *Federalist 48* that pure separation 'on parchment' would not actually prevent tyranny because each branch would be left defenseless against encroachment by the others; the legislative branch in particular tends to draw all power into its 'impetuous vortex' (Madison's phrase) because it has direct democratic legitimacy and the power of the purse; partial separation with overlapping checks (executive veto over legislation, judicial review of legislation, Senate confirmation of executive appointments, impeachment of executive and judicial officers, advice and consent on treaties) creates institutional self-interest in each branch defending its prerogatives — 'ambition counteracts ambition' (Federalist 51), producing real (not just paper) limits on each branch",
              "There is no distinction between pure and partial separation of powers of any kind during the entire period from 1788 onward in any region of the United States with no Federalist 48, no Federalist 51, no veto, no judicial review, no impeachment, no advice and consent, and no checks and balances of any kind during the entire period in any region",
              "The framers adopted pure separation of powers without modification of any kind under any circumstance with no veto, no advice and consent, no judicial review, no impeachment, and no inter-branch checks of any kind during the entire period from 1788 onward in any region of the United States during the period",
              "Madison argued that the legislative branch should have UNLIMITED authority of any kind under any circumstance with no executive check, no judicial check, and no impeachment of any kind during the entire period from 1788 onward in any region of the United States during the period in any region of the country"
            ],
            correctAnswer: 0,
            explanation: 'Federalist 48 (Madison): pure separation "on parchment" would NOT prevent tyranny — each branch defenseless against encroachment. Legislative draws all power into its "impetuous vortex" (direct democratic legitimacy + power of purse). Partial separation + overlapping checks (veto, judicial review, advice and consent, impeachment) creates institutional self-interest defending prerogatives → "ambition counteracts ambition" (Federalist 51) → real limits.'
          },
          {
            question: "How does federalism complement the separation of powers in the framers' anti-tyranny design?",
            options: [
              "Madison argued in *Federalist 51* that the U.S. Constitution provides 'a double security' for the rights of the people: HORIZONTAL separation (legislative/executive/judicial branches at the federal level checking each other) PLUS VERTICAL separation (federal/state governments checking each other through federalism); the two structures reinforce each other — concentrated tyranny would require capture of multiple branches AND multiple levels simultaneously, making it dramatically more difficult than capture of a single unitary government; together with the Bill of Rights (1791) and selective incorporation through the 14th Amendment (1868), this produces a multi-layered structural defense of individual liberty against governmental concentration of power",
              "Federalism has no relationship to the separation of powers of any kind during the entire period from 1789 onward in any region of the United States with no Federalist 51, no double security, no horizontal separation, no vertical separation, no Bill of Rights, and no 14th Amendment of any kind during the entire period in any region",
              "Federalism contradicts the separation of powers and weakens individual liberty of any kind under any circumstance with no double security, no horizontal separation, no vertical separation, and no anti-tyranny logic of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "There is no federalism of any kind during the entire period from 1789 onward in any region of the United States with no horizontal separation, no vertical separation, no Federalist 51, no Bill of Rights, no 14th Amendment, and no anti-tyranny structure of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Federalist 51 (Madison): "double security" = HORIZONTAL separation (3 federal branches checking each other) + VERTICAL separation (federal/state checking through federalism). Mutually reinforcing — tyranny requires capture of multiple branches AND multiple levels = dramatically more difficult than unitary capture. Combined with Bill of Rights (1791) + 14th Amendment selective incorporation (1868) → multi-layered structural defense of liberty.'
          }
        ]
      }
    }
  ]
}
