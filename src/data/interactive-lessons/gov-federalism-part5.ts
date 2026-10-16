export const govFederalismPart5Data = {
  topicSlug: 'gov-federalism',
  sections: [
    {
      id: 'govfed5-intro',
      type: 'text' as const,
      content: `
# 🏛️ Federalism

**Part 5 of 7 — Change Over Time**

---

| Section |
|---|
| Pre-1789: From colonies to the Articles |
| 1789-1865: Founding to Civil War |
| 1865-1937: Reconstruction to New Deal |
| 1937-present: Modern federalism |

> 🔑 Key idea: U.S. federalism has not been static — it has been the central contested constitutional question of every major era of American history. Each major federalism crisis (Articles failure 1781-87; nullification 1828-33; Civil War 1861-65; Reconstruction 1865-77; Lochner-era resistance 1890-1937; civil-rights era 1954-65; modern revival 1995-present) has reshaped the federal-state balance.
      `
    },
    {
      id: 'govfed5-content',
      type: 'text' as const,
      content: `
## Pre-1789: From Colonies to the Articles

| Period | Federalism arrangement | Outcome |
|---|---|---|
| **1607-1763** | British colonial federalism: Crown sovereignty + colonial assemblies + benign neglect under Walpole | Colonial autonomy in practice; legal subordination in theory |
| **1763-1776** | Post-French and Indian War: British attempts at tighter colonial control (Stamp Act, Townshend Acts) | Colonial resistance; "no taxation without representation"; American Revolution |
| **1776-1781** | Provisional confederation under Continental Congress | Effective wartime cooperation under crisis |
| **1781-1789** | Articles of Confederation | National government had NO power to tax (relied on state requisitions, mostly unpaid), NO power to regulate commerce (states imposed tariffs on each other), NO independent executive, NO national judiciary, required unanimous consent to amend; Shays\' Rebellion 1786-87 demonstrated structural weakness; Annapolis Convention 1786 → Philadelphia Convention 1787 → Constitution drafted |

## 1789-1865: Founding to Civil War — Defining Federalism

| Year | Event | Federalism direction |
|---|---|---|
| 1789 | Constitution effective | Federal republic established |
| 1791 | Bill of Rights ratified (10th Amendment) | Reserved-powers principle codified |
| 1798-99 | Virginia and Kentucky Resolutions (Madison + Jefferson, opposing Alien and Sedition Acts) | First major states\'-rights doctrine; "interposition" / "nullification" theory |
| 1803 | *Marbury v. Madison* | Judicial review of federal law established |
| 1819 | *McCulloch v. Maryland* (Marshall) | Implied federal powers + supremacy over states |
| 1824 | *Gibbons v. Ogden* (Marshall) | Broad Commerce Clause federal authority |
| 1828-33 | South Carolina Nullification Crisis (Calhoun) | States\'-rights doctrine deployed against federal tariffs; Jackson\'s Force Bill ended crisis |
| 1832 | *Worcester v. Georgia* | Federal authority over Indian affairs supreme over Georgia (ignored by Jackson — "Marshall has made his decision, now let him enforce it") |
| 1857 | *Dred Scott v. Sandford* | Federal cannot bar slavery in territories; Black persons not citizens |
| 1861-65 | American Civil War | Federalism crisis resolved by force; permanent end of nullification/secession theories; federal supremacy established militarily |

## 1865-1937: Reconstruction to New Deal — Federalism Bounded by Civil Rights

| Year | Event | Federalism direction |
|---|---|---|
| 1865 | 13th Amendment (abolition) | Federal authority extended to abolish state-permitted slavery |
| 1868 | 14th Amendment (citizenship + due process + equal protection) | CONSTITUTIONAL REVOLUTION — states subjected to federal individual-rights guarantees |
| 1870 | 15th Amendment (race-based suffrage) | Federal authority extended to voting rights |
| 1873 | *Slaughter-House Cases* | Privileges or Immunities Clause gutted; 14th Amendment\'s scope narrowed |
| 1877 | Compromise of 1877 (end of Reconstruction) | Federal abandonment of Southern Black civil rights; federalism = states\' authority over race relations restored |
| 1890s-1965 | Jim Crow Era | State authority used to disenfranchise Black voters and segregate; federalism = states\' rights = pro-segregation |
| 1896 | *Plessy v. Ferguson* | "Separate but equal" — federal acquiescence to state segregation |
| 1905 | *Lochner v. New York* | Federal/state regulation of working hours unconstitutional under substantive due process |
| 1918 | *Hammer v. Dagenhart* | Federal child-labor regulation exceeds commerce power |
| 1933-37 | New Deal | Federal economic regulation expanded; Court initially resisted (*Schechter Poultry* 1935; *Carter v. Carter Coal* 1936) |
| 1937 | "Switch in time that saved nine" — *West Coast Hotel v. Parrish* + *NLRB v. Jones & Laughlin Steel* + Court-packing threat | END OF DUAL FEDERALISM ERA |

## 1937-present: Modern Federalism — Cooperative + Devolution + Revival

| Year | Event | Federalism direction |
|---|---|---|
| 1937-69 | Cooperative federalism / "marble cake" era | Federal \\$ + federal regulations + state implementation; Wickard v. Filburn 1942 (max Commerce Clause); Heart of Atlanta Motel 1964 (CRA valid under commerce); Civil Rights Act 1964; Voting Rights Act 1965 |
| 1969-77 | Nixon "New Federalism" | General Revenue Sharing 1972; first major block grants |
| 1981-89 | Reagan New Federalism | 77 categorical → 9 block grants (OBRA 1981); cuts to federal aid |
| 1995-2012 | Modern federalism revival | Lopez 1995 (required), Morrison 2000 (CED illustrative), NFIB v. Sebelius 2012 |
| 1996 | TANF welfare reform | Major devolution: AFDC entitlement → TANF block grant |
| 2001-15 | NCLB / ESSA | Federal mandate-and-condition era in education |
| 2010 | Affordable Care Act | Major federal expansion via spending power AND Medicaid expansion |
| 2012 | NFIB v. Sebelius | ACA mandate as tax (federal authority) + Medicaid expansion coercive (state authority) |
| 2020-22 | COVID-19 pandemic | State variation in pandemic response; federal CARES + ARPA $; federalism stress-tested |
| 2022 | Dobbs v. Jackson Women\'s Health | Abortion regulation returned to states; major devolution of contested constitutional question |
      `
    },
    {
      id: 'govfed5-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Federalism Across Time** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the federalism crisis of 1781-1789 under the Articles of Confederation?",
            options: [
              "The confederation Congress could not tax, regulate commerce, or enforce its laws, so it could not pay war debts or respond to Shays' Rebellion",
              "Congress under the Confederation taxed citizens so heavily, through tariffs, excises, and levies, that farmers rose up in Shays' Rebellion",
              "The national courts struck down so many state laws that the states demanded a convention to restore their sovereignty",
              "The President vetoed most acts of Congress, which left the national government unable to act on trade or debt"
            ],
            correctAnswer: 0,
            explanation: 'Articles of Confederation (1781-89) crisis: NO power to tax (state requisitions unpaid), NO power to regulate commerce (state interstate tariffs), NO executive, NO judiciary, unanimous consent to amend. Multiple crises: trade wars + Revolutionary War debt + Shays\' Rebellion 1786-87 + foreign-policy ineffectiveness. Annapolis Convention 1786 → Philadelphia Convention May-Sept 1787 → federal Constitution.'
          },
          {
            question: "Which best describes the long-term federalism trajectory from 1789 to 2022?",
            options: [
              "Contested before the Civil War, then reshaped by the 14th Amendment, then expanded after 1937, with partial limits since Lopez in 1995",
              "Steadily decentralized since 1789, with states gaining power after the Civil War, after the New Deal, and during the civil rights era of the 1960s",
              "Fixed by the Constitution in 1789 and essentially unchanged since then, because the Court has never altered the balance between nation and states",
              "Centralized at the founding, then decentralized by the 14th Amendment, then fixed in place by the Supreme Court's 1937 rulings, with no shifts since"
            ],
            correctAnswer: 0,
            explanation: 'Federalism trajectory 1789-2022: 1789-1865 contested (nullification 1798-99 + 1828-33; Dred Scott 1857 → Civil War 1861-65). 1865-1937: 14th Amendment bounds states by federal civil-rights guarantees BUT Reconstruction\'s collapse → Jim Crow state-authority dominance. 1937-present: Commerce + Spending dramatic expansion (cooperative + Great Society) + modern revival 1995-present (Lopez/Morrison/NFIB) + Dobbs 2022 abortion to states. Net: federal expansion 1865-1937, dramatic 1937-95, partial state-authority revival 1995-present.'
          }
        ]
      }
    },
    {
      id: 'govfed5-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — federalism milestones**`,
      exercise: {
        questions: [
          {
            prompt: "Year Shays\' Rebellion began in western Massachusetts, exposing the Articles of Confederation\'s lack of centralized military power: ___.",
            answer: '1786',
            acceptableAnswers: ['1786'],
            hint: 'EK 1.4.A.1.i — the year before the Philadelphia Convention.'
          },
          {
            prompt: "Year of the Supreme Court\'s 'switch in time that saved nine' — END of dual federalism era; West Coast Hotel v. Parrish (state minimum wage upheld) + NLRB v. Jones & Laughlin Steel (federal labor regulation upheld under expanded commerce clause): ___.",
            answer: '1937',
            acceptableAnswers: ['1937'],
            hint: 'Same year as FDR\'s court-packing proposal that the "switch" defused.'
          },
          {
            prompt: "Year Colorado and Washington legalized recreational marijuana in defiance of federal law (a CED illustrative example of federalism tension): ___.",
            answer: '2012',
            acceptableAnswers: ['2012'],
            hint: 'Same year as Obama re-election.'
          }
        ]
      }
    },
    {
      id: 'govfed5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each major federalism era to its dominant pattern.**`,
      exercise: {
        dropdowns: [
          {
            label: "1781-1789: confederation with no taxing/commerce/executive/judicial federal authority; structural failure → Constitutional Convention. ___",
            options: ['Articles of Confederation', 'Dual federalism', 'Cooperative federalism', 'New federalism / devolution']
          },
          {
            label: "1789-1937: federal and state governments in distinct, mostly non-overlapping spheres; 10th Amendment as substantive federal-power limit. ___",
            options: ['Articles of Confederation', 'Dual federalism', 'Cooperative federalism', 'New federalism / devolution']
          },
          {
            label: "1937-1969: federal money + federal regulations + state implementation; expanded Commerce Clause; Great Society. ___",
            options: ['Articles of Confederation', 'Dual federalism', 'Cooperative federalism', 'New federalism / devolution']
          }
        ],
        correctAnswers: ['Articles of Confederation', 'Dual federalism', 'Cooperative federalism'],
        hint1: 'Pre-1789 confederation that failed.',
        hint2: '"Layer cake" 1789-1937; Hammer v. Dagenhart 1918, Schechter Poultry 1935.',
        hint3: '"Marble cake" 1937-1969; Wickard 1942, CRA 1964, VRA 1965, Medicare/Medicaid 1965.',
        explanation: 'Federalism eras: Articles 1781-89 (confederal failure → Constitution). Dual 1789-1937 ("layer cake" + 10th Amendment substantive limit). Cooperative 1937-1969 ("marble cake" + Wickard 1942 + Great Society). New federalism 1969-present (devolution: Nixon GRS 1972, Reagan block grants 1981, TANF 1996, modern revival 1995+).'
      }
    },
    {
      id: 'govfed5-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Federalism Across Time**`,
      exercise: {
        questions: [
          {
            question: "AP scenario: A historian argues that the 1937 'switch in time' was the most consequential federalism event of the 20th century. Which evaluation is best supported by evidence?",
            options: [
              "Well supported, since before 1937 the Court read the commerce power narrowly, and afterward it upheld broad federal economic regulation",
              "Poorly supported, since the Court had already upheld federal child labor laws and New Deal industrial codes well before 1937",
              "Strongly supported, since in 1937 the Court abolished the states' police powers and transferred authority over crime, schools, and marriage to Congress",
              "Poorly supported, since the 1937 decisions dealt only with state taxation and did not change the commerce power"
            ],
            correctAnswer: 0,
            explanation: 'Thesis supported: pre-1937 narrow Commerce Clause + Lochner substantive due process (Hammer v. Dagenhart 1918 struck federal child-labor; Schechter Poultry 1935 struck NIRA; Carter v. Carter Coal 1936; Lochner v. NY 1905). Post-1937 (West Coast Hotel + NLRB v. Jones & Laughlin Steel + court-packing threat) → dramatic continuous expansion through 1995 enabling New Deal + Great Society + CRA 1964 + VRA 1965 + Medicare/Medicaid 1965 + OSHA + EPA + ADA + modern administrative state. Modern revival = modest limits on fundamentally expanded federal authority traceable to 1937.'
          },
          {
            question: "AP scenario: A scholar argues that Dobbs v. Jackson Women\'s Health (2022) represents the most significant federalism event of the early 21st century. Which evaluation is best supported by evidence?",
            options: [
              "Plausible but contestable, since Dobbs returned abortion policy to the states, yet NFIB v. Sebelius and the COVID-19 response also reshaped federalism",
              "Strongly supported, since Dobbs made abortion a federal statutory matter and ended state authority over health regulation",
              "Unsupported, since Dobbs upheld a national constitutional right to abortion and left the rule unchanged for every state in the nation",
              "Strongly supported, since Dobbs was the only Supreme Court ruling affecting state power between 2000 and 2022, and it applied the commerce power to medical care"
            ],
            correctAnswer: 0,
            explanation: 'The thesis is plausible but contestable. Dobbs held that the Constitution does not confer a right to abortion and left regulation to legislatures (EK 3.9.A.2), so state policies quickly diverged, from near-total bans to new legal protections. But other events also reshaped federal-state relations, such as the fight over making the ACA\'s Medicaid expansion optional for states and the pandemic response of 2020–22, in which governors and federal officials clashed over who set the rules. Dobbs did not create a federal statute, did not uphold a national right, and was not the only ruling on state power.'
          }
        ]
      }
    }
  ]
}
