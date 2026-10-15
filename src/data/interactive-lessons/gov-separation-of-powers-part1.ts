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
              "Because people are not angels, government should be structured so that ambition counteracts ambition, giving each branch the means and motive to resist the others",
              "Because the people are virtuous, government needs few internal checks, and frequent elections alone will keep officials from abusing power",
              "A large republic will contain so many factions that no majority can form, which makes checks between the branches unnecessary",
              "The judiciary should be the weakest branch since it has neither force nor will, only judgment"
            ],
            correctAnswer: 0,
            explanation: 'Federalist 51 (Madison): human nature self-interested ("If men were angels..."), concentrated power → tyranny, structure must make "ambition counteract ambition" — each branch given constitutional means (vesting + enumerated) AND personal motives (institutional self-interest) to resist encroachment. PARTIAL separation with overlapping powers (veto, advice and consent, judicial review, impeachment) creates inter-branch checking; supplemented by federalism = "double security" for people\'s rights.'
          },
          {
            question: "Which best describes the relationship between Montesquieu's theory and the U.S. Constitution?",
            options: [
              "The framers drew on Montesquieu's claim that liberty is lost when lawmaking and enforcing power rest in the same hands",
              "The framers rejected Montesquieu's separation of powers in favor of the British model, in which Parliament holds legislative and executive power",
              "Montesquieu's theory inspired the Articles of Confederation, but the framers abandoned it in 1787 because it had produced a weak national government",
              "The framers took from Montesquieu the idea of popular sovereignty, which he grounded in the general will of a small and homogeneous republic"
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
              "Parchment barriers alone could not stop the legislature from absorbing the other branches, so each branch needed a share in the others' powers to defend itself",
              "Pure separation would have required a parliamentary system, which the framers rejected because it fuses the executive and the legislature",
              "The framers wanted the branches to cooperate rather than compete, so they gave each branch a share of the others' powers to encourage compromise and shared governing",
              "Pure separation was impossible because the Articles of Confederation required that any new design keep the executive inside Congress"
            ],
            correctAnswer: 0,
            explanation: 'Federalist 48 (Madison): pure separation "on parchment" would NOT prevent tyranny — each branch defenseless against encroachment. Legislative draws all power into its "impetuous vortex" (direct democratic legitimacy + power of purse). Partial separation + overlapping checks (veto, judicial review, advice and consent, impeachment) creates institutional self-interest defending prerogatives → "ambition counteracts ambition" (Federalist 51) → real limits.'
          },
          {
            question: "How does federalism complement the separation of powers in the framers' anti-tyranny design?",
            options: [
              "Power is divided between nation and states and then among separate branches, creating a double security for the rights of the people",
              "States appoint the members of all three national branches, so federalism makes a separate system of checks among those branches unnecessary at the national level",
              "Federalism gives each state a veto over national laws, replacing the need for checks between branches",
              "Federalism places all three branches and their powers under state supervision, creating a single security for the rights of the states"
            ],
            correctAnswer: 0,
            explanation: 'Federalist 51 (Madison): "double security" = HORIZONTAL separation (3 federal branches checking each other) + VERTICAL separation (federal/state checking through federalism). Mutually reinforcing — tyranny requires capture of multiple branches AND multiple levels = dramatically more difficult than unitary capture. Combined with Bill of Rights (1791) + 14th Amendment selective incorporation (1868) → multi-layered structural defense of liberty.'
          }
        ]
      }
    }
  ]
}
