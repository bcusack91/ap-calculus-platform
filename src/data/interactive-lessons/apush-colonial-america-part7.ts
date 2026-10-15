export const apushColonialAmericaPart7Data = {
  topicSlug: 'apush-colonial-america',
  sections: [
    {
      id: 'apushcol7-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Colonial America

**Part 7 of 7 — AP Review**

---

| Section |
|---|
| High-yield dates and one-line significance |
| Comparison framework: New England vs. Middle vs. Chesapeake vs. Lower South |
| CCOT framework for British North America 1607–1754 |
| Sprint terms most likely to appear on the AP exam |

> 🔑 Key idea: Use this part as your night-before-the-exam reference for Period 2 (1607–1754). Drill the dates, the four-region comparison, and the AP skills.
      `
    },
    {
      id: 'apushcol7-content',
      type: 'text' as const,
      content: `
## High-Yield Dates

| Year | Event | One-Line Significance |
|---|---|---|
| 1607 | Jamestown founded | First permanent English settlement; tobacco economy emerges by 1612 |
| 1619 | First Africans arrive in Virginia; House of Burgesses convenes | Beginning of African slavery + first representative assembly in English colonies |
| 1620 | Mayflower Compact; Plymouth founded | Pilgrim covenantal self-government |
| 1630 | Massachusetts Bay founded; Winthrop's "City upon a Hill" sermon | Puritan Great Migration; covenantal commonwealth |
| 1636 | Roger Williams founds Providence (Rhode Island) | Religious dissent + religious toleration |
| 1675–76 | King Philip's War (Metacom's War) | Devastating conflict between New England colonists and Wampanoag-Narragansett alliance |
| 1676 | Bacon's Rebellion in Virginia | Backcountry uprising; accelerates shift from indentured servitude to racial slavery |
| 1681 | Pennsylvania chartered to William Penn | Quaker proprietary colony promising religious toleration |
| 1688–89 | Glorious Revolution in England; Dominion of New England collapses | Reaffirms colonial assemblies + Protestant succession |
| 1692 | Salem Witch Trials | Crisis of Puritan authority and gender politics |
| 1730s–40s | First Great Awakening (Edwards, Whitefield) | Evangelical revival democratizing religious authority |
| 1754–63 | French and Indian War (Seven Years' War) | British victory but huge debt; sets up imperial crisis |

## Comparison Framework — Four Colonial Regions

| Question | New England | Middle | Chesapeake | Lower South |
|---|---|---|---|---|
| Economy | Mixed: shipping, fishing, small farms | Diverse: grain, commerce, crafts | Tobacco plantations | Rice + indigo plantations |
| Labor | Family + indentured | Mixed (Quakers, Germans, Scots-Irish) | Indentured → enslaved African (post-1676) | Enslaved African (often majority) |
| Demography | Family migration; healthy population growth | Most ethnically diverse | Imbalanced sex ratio early; high mortality | Black majority in South Carolina by the early 1700s |
| Religion | Puritan (Congregational), then Baptists, etc. | Quaker, Lutheran, Reformed | Anglican (established) | Anglican (established) |
| Politics | Town meetings; congregational governance | Assemblies; proprietor disputes | Tidewater elite dominates House of Burgesses | Planter oligarchy |

## CCOT Framework (1607–1754)

| Continuity | Change |
|---|---|
| British colonies remain politically subordinate to Crown | But practice of "salutary neglect" grows colonial assemblies' power |
| Atlantic trade intensifies | Mercantilism formalized in Navigation Acts (1651, 1660, 1663, 1673, 1696) |
| Enslaved labor expands across colonies | Shifts from minor part of mixed labor to dominant labor system in Chesapeake and Lower South |
| Indigenous nations remain politically and militarily significant | But cumulative population loss + land cessions reduce Indigenous power east of the Appalachians |
| Religious diversity continues | Great Awakening democratizes religious authority and splits denominations |

## Sprint Terms (Last-Minute Drill)

- **Headright system** — 50 acres of land per immigrant brought to Virginia
- **Indentured servitude** — Multi-year labor contract in exchange for passage; declining after 1676
- **Royal African Company (1672)** — English monopoly that expanded the Atlantic slave trade
- **Slave codes** — 1660s+ colonial laws codifying lifetime racial slavery
- **Salutary neglect** — British policy of loosely enforcing trade laws on colonies
- **Mercantilism** — Economic system in which colonies serve mother country's wealth
- **Navigation Acts (1651+)** — Required colonial trade to use English or colonial ships and sent enumerated goods such as tobacco only to England or its colonies
- **House of Burgesses (1619)** — First representative assembly in English colonies
- **Halfway Covenant (1662)** — Puritan compromise allowing partial church membership
- **Great Awakening (1730s–40s)** — Evangelical revival; Edwards, Whitefield
- **King Philip's War (1675–76)** — Devastating New England war with Wampanoag-Narragansett alliance
- **Glorious Revolution (1688)** — English overthrow of James II reaffirms Protestant + parliamentary rule

> 🔑 Key takeaway: If you only memorize ten dates from Period 2, make them: 1607 (Jamestown), 1619 (Africans + Burgesses), 1620 (Mayflower), 1630 (Mass Bay), 1675 (King Philip's War), 1676 (Bacon's Rebellion), 1681 (Pennsylvania), 1692 (Salem), 1730s (Great Awakening), 1754 (French & Indian War begins).
      `
    },
    {
      id: 'apushcol7-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — High-Yield Recall** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which year saw both the first arrival of Africans at Point Comfort, Virginia AND the first meeting of the House of Burgesses?',
            options: ['1607', '1619', '1620', '1676'
            ],
            correctAnswer: 1,
            explanation: '1619: both first Africans (at Point Comfort) and the House of Burgesses convened. (1607 Jamestown founded; 1620 Mayflower; 1676 Bacon\'s Rebellion.)'
          },
          {
            question: 'Which best identifies a major difference between the New England and Chesapeake colonies during the seventeenth century?',
            options: [
              'New England depended on tobacco exports, while the Chesapeake relied on fishing and shipbuilding',
              'New England grew through family migration, while the Chesapeake drew mostly young single men',
              'New England established the Church of England, while the Chesapeake welcomed many denominations',
              'New England built large plantations, while the Chesapeake grew through small farming villages'
            ],
            correctAnswer: 1,
            explanation: 'Puritans migrated as families into a healthy climate, while Chesapeake planters imported young, mostly male servants to grow tobacco. The other options reverse the regions\' economies, churches and settlement patterns.'
          }
        ]
      }
    },
    {
      id: 'apushcol7-input',
      type: 'input-boxes' as const,
      content: `**Final Term Sprint — high-yield recall**`,
      exercise: {
        questions: [
          {
            question: 'The 1676 Virginia uprising whose suppression accelerated the shift from indentured servitude to racial slavery.',
            answer: "Bacon's Rebellion",
            acceptableAnswers: ["Bacon's Rebellion", 'Bacons Rebellion', 'Bacon Rebellion'],
            hint: 'Led by Nathaniel Bacon against Governor Berkeley.'
          },
          {
            question: "The British policy of loosely enforcing trade laws on the colonies before the 1760s.",
            answer: 'salutary neglect',
            acceptableAnswers: ['salutary neglect', 'Salutary Neglect'],
            hint: 'Allowed colonial assemblies to develop their own political traditions.'
          },
          {
            question: 'The 1730s–40s evangelical revival movement led by figures such as Jonathan Edwards and George Whitefield.',
            answer: 'Great Awakening',
            acceptableAnswers: ['Great Awakening', 'First Great Awakening', 'the Great Awakening'],
            hint: 'Democratized religious authority across the colonies.'
          }
        ]
      }
    },
    {
      id: 'apushcol7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each AP-style prompt to the historical thinking skill it most directly tests.**`,
      exercise: {
        dropdowns: [
          {
            label: "A prompt asking how British colonial governance remained the same and how it changed between 1607 and 1754 tests: ___",
            options: ['continuity and change over time', 'comparison', 'sourcing', 'contextualization']
          },
          {
            label: "A prompt asking students to compare New England and Chesapeake colonial models tests: ___",
            options: ['continuity and change over time', 'comparison', 'sourcing', 'contextualization']
          },
          {
            label: "A prompt asking students to analyze the audience and purpose of Winthrop's 1630 'City upon a Hill' sermon tests: ___",
            options: ['continuity and change over time', 'comparison', 'sourcing', 'contextualization']
          }
        ],
        correctAnswers: ['continuity and change over time', 'comparison', 'sourcing'],
        hint1: '"Remained the same and changed" is the CCOT signal.',
        hint2: '"Compare … and …" names the comparison skill directly.',
        hint3: '"Audience and purpose" is the HIPP signal — that is sourcing.',
        explanation: 'AP graders use specific verbs to flag the skill: "remained the same and changed" = CCOT; "compare" = comparison; "audience/purpose/POV" = sourcing.'
      }
    },
    {
      id: 'apushcol7-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Final Drill**`,
      exercise: {
        questions: [
          {
            question: 'A historian writes: "The British colonies between 1607 and 1754 were both deeply divided by region and increasingly bound together by shared institutions." Which evidence best supports both parts of this claim?',
            options: [
              'Regions differed in labor and religion yet shared Atlantic trade, English law and elected assemblies',
              'Regions differed in whether they allowed elected assemblies yet shared one established church',
              'Regions differed in export crops yet sent delegates to a single parliament that met in Philadelphia',
              'Regions shared one plantation economy yet differed in their loyalty to the Protestant British Crown'
            ],
            correctAnswer: 0,
            explanation: 'Contrasting labor systems and churches show regional division, while trade, English common law, representative assemblies and the cross-colonial Great Awakening show shared ties. The colonies had no single church, every colony had an assembly, and no intercolonial parliament existed before the Revolution.'
          },
          {
            question: 'Which statement about Period 2 (1607–1754) would an AP reader most likely credit as a complex, well-supported claim?',
            options: [
              'The colonies became one uniform society that copied English institutions without change',
              'The colonies became separate nations with little contact with Britain before the 1750s',
              'The colonies became a Puritan commonwealth that spread from New England to every region',
              'The colonies became distinct regional societies loosely joined by trade, law and empire'
            ],
            correctAnswer: 3,
            explanation: 'The strongest claim holds regional difference and imperial connection together, which is what the evidence shows. The other statements each flatten the period into one false pattern: uniformity, isolation or Puritan dominance.'
          }
        ]
      }
    }
  ]
}
