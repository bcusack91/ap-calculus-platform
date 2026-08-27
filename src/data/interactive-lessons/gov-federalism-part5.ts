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
| 1995-2018 | Modern federalism revival | Lopez 1995, Printz 1997, Morrison 2000, NFIB v. Sebelius 2012, Shelby County 2013, Murphy v. NCAA 2018 |
| 1996 | TANF welfare reform | Major devolution: AFDC entitlement → TANF block grant |
| 2001-15 | NCLB / ESSA | Federal mandate-and-condition era in education |
| 2010 | Affordable Care Act | Major federal expansion via spending power AND Medicaid expansion |
| 2012 | NFIB v. Sebelius | ACA mandate as tax (federal authority) + Medicaid expansion coercive (state authority) |
| 2013 | Shelby County v. Holder | VRA § 4 preclearance formula struck (state authority) |
| 2018 | Murphy v. NCAA | Anti-commandeering applied to PASPA (state authority) |
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
              "The Articles of Confederation (1781-89) created a confederation where the national government had NO power to tax (relied on state requisitions, mostly unpaid), NO power to regulate commerce (states imposed tariffs on each other), NO independent executive, NO national judiciary, and required unanimous consent to amend; the structural weakness produced multiple crises: state interstate-trade wars, federal inability to repay Revolutionary War debt, federal inability to coordinate military response to Shays\' Rebellion (1786-87), and federal inability to negotiate effectively with foreign powers; the Annapolis Convention (1786) called by states to address commerce issues led to the Philadelphia Convention (May-September 1787) which produced the federal Constitution",
              "The Articles of Confederation worked perfectly with no taxation problems, no commerce problems, no executive problems, no judiciary problems, no Shays\' Rebellion, no Annapolis Convention, and no Philadelphia Convention of any kind during the entire period in any region of the United States during the period",
              "There were no Articles of Confederation of any kind during the entire period from 1781 through 1789 in any region of the United States with no national government, no state requisitions, no Shays\' Rebellion, no Annapolis Convention, and no Philadelphia Convention of any kind during the entire period in any region",
              "The Articles of Confederation were entirely identical to the federal Constitution with no meaningful differences of any kind during the entire period from 1781 through 1789 in any region of the United States during the period in any region of the country"
            ],
            correctAnswer: 0,
            explanation: 'Articles of Confederation (1781-89) crisis: NO power to tax (state requisitions unpaid), NO power to regulate commerce (state interstate tariffs), NO executive, NO judiciary, unanimous consent to amend. Multiple crises: trade wars + Revolutionary War debt + Shays\' Rebellion 1786-87 + foreign-policy ineffectiveness. Annapolis Convention 1786 → Philadelphia Convention May-Sept 1787 → federal Constitution.'
          },
          {
            question: "Which best describes the long-term federalism trajectory from 1789 to 2022?",
            options: [
              "From 1789 to the Civil War (1865), federalism was deeply contested, with major doctrinal contests over nullification (1798-99 Virginia/Kentucky Resolutions, 1828-33 South Carolina crisis) and the federal role in slavery (Dred Scott 1857), resolved by force in 1861-65; from 1865 to 1937, the 14th Amendment created federalism BOUNDED by federal civil-rights guarantees but Reconstruction\'s collapse left state authority dominant in race relations during Jim Crow; from 1937 to present, the Commerce Clause and Spending Clause expanded dramatically (cooperative federalism + Great Society), with a partial reversal in the modern federalism revival (1995-present: Lopez, Printz, NFIB v. Sebelius, Shelby County, Murphy v. NCAA) and the post-2022 Dobbs return of abortion to state authority — net trajectory: significant federal expansion 1865-1937, dramatic federal expansion 1937-1995, partial state-authority revival 1995-present",
              "Federalism has been static and unchanging from 1789 to 2022 with no nullification, no Civil War, no 14th Amendment, no New Deal, no Civil Rights Act, no Lopez, no NFIB v. Sebelius, no Shelby County, no Murphy v. NCAA, and no Dobbs of any kind during the entire period in any region of the United States during the period",
              "There have been no major federalism disputes of any kind during the entire period from 1789 through 2022 in any region of the United States with no nullification, no Civil War, no Reconstruction, no New Deal, no civil-rights revolution, and no modern federalism revival of any kind during the entire period in any region",
              "The long-term trajectory of federalism has been monotonic state-authority expansion with no federal expansion of any kind during the entire period from 1789 through 2022 in any region of the United States with no Civil War, no 14th Amendment, no New Deal, no Civil Rights Act, and no commerce-clause expansion of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Federalism trajectory 1789-2022: 1789-1865 contested (nullification 1798-99 + 1828-33; Dred Scott 1857 → Civil War 1861-65). 1865-1937: 14th Amendment bounds states by federal civil-rights guarantees BUT Reconstruction\'s collapse → Jim Crow state-authority dominance. 1937-present: Commerce + Spending dramatic expansion (cooperative + Great Society) + modern revival 1995-present (Lopez/Printz/NFIB/Shelby/Murphy) + Dobbs 2022 abortion to states. Net: federal expansion 1865-1937, dramatic 1937-95, partial state-authority revival 1995-present.'
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
            prompt: "Year of the South Carolina Nullification Crisis when Calhoun deployed states\'-rights doctrine against federal tariffs and Jackson\'s Force Bill ended the crisis: 1828–___.",
            answer: '1833',
            acceptableAnswers: ['1833', '33'],
            hint: 'Same year as the Compromise Tariff that politically resolved the crisis.'
          },
          {
            prompt: "Year of the Supreme Court\'s 'switch in time that saved nine' — END of dual federalism era; West Coast Hotel v. Parrish (state minimum wage upheld) + NLRB v. Jones & Laughlin Steel (federal labor regulation upheld under expanded commerce clause): ___.",
            answer: '1937',
            acceptableAnswers: ['1937'],
            hint: 'Same year as FDR\'s court-packing proposal that the "switch" defused.'
          },
          {
            prompt: "Year of NFIB v. Sebelius — ACA individual mandate upheld as TAX but Medicaid expansion struck as unconstitutionally COERCIVE: ___.",
            answer: '2012',
            acceptableAnswers: ['2012'],
            hint: 'Same year as Obama re-election; Roberts 5-4 opinion.'
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
              "The historian\'s thesis is well-supported because before 1937, federal Commerce Clause authority was construed narrowly under dual federalism (Hammer v. Dagenhart 1918 struck federal child-labor regulation; Schechter Poultry 1935 struck NIRA codes; Carter v. Carter Coal 1936 struck federal coal-industry regulation), and federal regulation of working conditions was unconstitutional under substantive due process (Lochner v. New York 1905); after 1937 (West Coast Hotel + NLRB v. Jones & Laughlin Steel + Court-packing threat), federal Commerce Clause and spending authority expanded dramatically and continuously through 1995 — enabling the New Deal, the Great Society, the Civil Rights Act 1964, the Voting Rights Act 1965, Medicare/Medicaid 1965, ESEA 1965, OSHA 1970, EPA 1970, ADA 1990, and the modern administrative state; the modern federalism revival (1995-present) has imposed only modest limits on a fundamentally expanded federal authority that traces directly to 1937",
              "The 1937 'switch in time' had no consequences of any kind for federalism with no Commerce Clause expansion, no New Deal, no Great Society, no Civil Rights Act, no Voting Rights Act, and no modern administrative state of any kind during the entire period in any region of the United States during the period",
              "There was no 1937 'switch in time' of any kind during the entire period from 1937 onward in any region of the United States with no West Coast Hotel, no NLRB v. Jones & Laughlin Steel, no Court-packing threat, no New Deal, no Great Society, no Civil Rights Act, and no Voting Rights Act of any kind during the entire period in any region",
              "The 1937 'switch in time' permanently and completely contracted federal authority with no Commerce Clause expansion of any kind during the entire period from 1937 onward in any region of the United States with no New Deal, no Great Society, no Civil Rights Act, no Voting Rights Act, and no modern administrative state of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Thesis supported: pre-1937 narrow Commerce Clause + Lochner substantive due process (Hammer v. Dagenhart 1918 struck federal child-labor; Schechter Poultry 1935 struck NIRA; Carter v. Carter Coal 1936; Lochner v. NY 1905). Post-1937 (West Coast Hotel + NLRB v. Jones & Laughlin Steel + court-packing threat) → dramatic continuous expansion through 1995 enabling New Deal + Great Society + CRA 1964 + VRA 1965 + Medicare/Medicaid 1965 + OSHA + EPA + ADA + modern administrative state. Modern revival = modest limits on fundamentally expanded federal authority traceable to 1937.'
          },
          {
            question: "AP scenario: A scholar argues that Dobbs v. Jackson Women\'s Health (2022) represents the most significant federalism event of the early 21st century. Which evaluation is best supported by evidence?",
            options: [
              "The thesis is plausible but contestable: Dobbs returned abortion regulation from the federal constitutional rule established by Roe (1973) and Casey (1992) to state legislative and constitutional authority, producing immediate state-level policy variation (~14 states with near-total bans by 2024; ~22 states with explicit protections; remaining states with intermediate restrictions or active litigation), and triggering massive interstate dynamics (interstate travel for abortion, interstate medication-abortion enforcement disputes, state-level constitutional amendment campaigns); BUT competing candidates for 'most significant federalism event' include Shelby County v. Holder (2013, struck VRA preclearance formula → state-by-state variation in election administration), the modern administrative state\'s continued growth (federal regulatory authority continues to expand), and the COVID-19 pandemic federalism stress-test (2020-22, exposed federalism\'s capacity and limits in pandemic response); Dobbs is plausibly the most contested, but 'most significant' is contested",
              "Dobbs had no federalism consequences of any kind with no state-level policy variation, no interstate travel, no medication-abortion disputes, and no constitutional amendment campaigns of any kind during the entire period from 2022 onward in any region of the United States during the period",
              "There was no Dobbs decision of any kind during the entire period from 2022 onward in any region of the United States with no Roe v. Wade, no Casey, no abortion regulation, no state-level policy variation, no Shelby County, no COVID-19 pandemic, and no federalism stress-test of any kind during the entire period in any region",
              "The Dobbs decision is the only significant federalism event of the 21st century with no Shelby County, no modern administrative-state expansion, and no COVID-19 federalism stress-test of any kind during the entire period in any region of the United States during the period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Dobbs (2022) thesis plausible but contestable: returned abortion from Roe/Casey federal rule to state legislative/constitutional authority → ~14 near-total bans + ~22 explicit protections + interstate travel + medication-abortion disputes + state constitutional campaigns. Competing candidates: Shelby County 2013 (VRA preclearance + state-by-state election administration); continued administrative-state growth; COVID-19 pandemic federalism stress-test 2020-22. Dobbs plausibly most contested but "most significant" contested.'
          }
        ]
      }
    }
  ]
}
