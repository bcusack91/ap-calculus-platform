export const govJudiciaryPart3Data = {
  topicSlug: 'gov-judiciary',
  sections: [
    {
      id: 'govjudic3-intro',
      type: 'text' as const,
      content: `
# ⚖️ The Federal Judiciary

**Part 3 of 7 — Patterns & Examples**

---

| Section |
|---|
| Major Court eras (Marshall, Taney, Lochner, Hughes, Warren, Burger, Rehnquist, Roberts) |
| Landmark cases beyond *Marbury* |
| Modern Roberts Court 2005-present |
| Patterns of judicial activism + restraint by era |
| Demographic + ideological evolution |

> 🔑 Key idea: SCOTUS's role and ideology have shifted dramatically across eras — from Marshall's nation-building federalism (1801-35) to Taney's pro-slavery jurisprudence (1836-64) to the Lochner-era property protection (1897-1937) to the Warren Court rights revolution (1953-69) to the Roberts Court's modern conservative majority (2005-present).
      `
    },
    {
      id: 'govjudic3-content',
      type: 'text' as const,
      content: `
## Major Court Eras

| Era | CJ | Years | Key character |
|---|---|---|---|
| **Marshall Court** | John Marshall | 1801-35 | Nation-building federalism; established judicial review (*Marbury* 1803), national supremacy (*McCulloch* 1819), broad commerce power (*Gibbons* 1824) |
| **Taney Court** | Roger Taney | 1836-64 | Pro-states' rights; expanded slavery (*Dred Scott* 1857 — held African Americans were not citizens, voided Missouri Compromise; one of worst SCOTUS decisions ever) |
| **Reconstruction/Gilded Age** | Multiple | 1864-97 | Mixed; gradually narrowed Reconstruction protections (*Slaughter-House* 1873, *Civil Rights Cases* 1883, *Plessy v. Ferguson* 1896 — separate but equal) |
| **Lochner Era** | Multiple | 1897-1937 | Property rights + economic substantive due process; struck progressive labor regulations (*Lochner v. New York* 1905 — struck NY 60-hour bakery law); culminated in resistance to New Deal until 1937 'switch in time' |
| **Hughes Court / New Deal** | Charles Evans Hughes | 1930-41 | 'Switch in time that saved nine' (1937) — abandoned Lochner; *NLRB v. Jones & Laughlin* 1937 + *West Coast Hotel v. Parrish* 1937 upheld federal regulation; *Wickard v. Filburn* 1942 broad commerce power |
| **Warren Court** | Earl Warren | 1953-69 | RIGHTS REVOLUTION — civil rights (*Brown* 1954, *Loving* 1967), criminal procedure (*Mapp* 1961, *Gideon* 1963, *Miranda* 1966), reapportionment (*Baker* 1962, *Reynolds* 1964), free speech (*Tinker* 1969), school prayer (*Engel* 1962); the most ACTIVIST liberal Court in history |
| **Burger Court** | Warren Burger | 1969-86 | Mixed; expanded individual rights (*Roe v. Wade* 1973) but began pulling back on Warren-era criminal procedure; school busing decisions; *US v. Nixon* 1974 |
| **Rehnquist Court** | William Rehnquist | 1986-2005 | Conservative shift; FEDERALISM REVIVAL (*US v. Lopez* 1995, *US v. Morrison* 2000); state sovereign immunity (*Seminole Tribe* 1996); *Bush v. Gore* 2000 |
| **Roberts Court** | John Roberts | 2005-present | Conservative consolidation; *Citizens United* 2010, *DC v. Heller* 2008, *Shelby County* 2013, *Obergefell* 2015 (Kennedy); since Trump appointees: *Bruen* 2022, *Dobbs* 2022, *Students for Fair Admissions* 2023, *Trump v. US* 2024 |

## Landmark Cases Beyond Marbury

| Case | Year | Holding | Significance |
|---|---|---|---|
| *McCulloch v. Maryland* | 1819 | Necessary + proper clause supports Bank of US; states cannot tax federal entities | NATIONAL SUPREMACY; broad implied powers |
| *Gibbons v. Ogden* | 1824 | Federal commerce power preempts state monopolies | Broad commerce power |
| *Dred Scott v. Sandford* | 1857 | African Americans not citizens; Missouri Compromise unconstitutional | Worst SCOTUS decision ever; precipitated Civil War |
| *Plessy v. Ferguson* | 1896 | 'Separate but equal' constitutional | Established Jim Crow until *Brown* |
| *Lochner v. New York* | 1905 | NY 60-hour bakery law unconstitutional under economic substantive due process | Defined the Lochner Era; abandoned 1937 |
| *Schenck v. United States* | 1919 | 'Clear and present danger' test for speech restrictions | Holmes's famous 'fire in crowded theater' analogy |
| *Brown v. Board* | 1954 | Segregated schools unconstitutional | Overruled *Plessy*; ignited civil rights movement |
| *Mapp v. Ohio* | 1961 | Exclusionary rule applies to states | Expanded 4th Amendment protections |
| *Engel v. Vitale* | 1962 | Public-school prayer unconstitutional | Establishment Clause expansion |
| *Baker v. Carr* | 1962 | Reapportionment is justiciable | One person, one vote era |
| *Gideon v. Wainwright* | 1963 | Right to counsel for indigent defendants | 6th Amendment incorporation |
| *Miranda v. Arizona* | 1966 | Miranda warnings required | 5th Amendment protections |
| *Loving v. Virginia* | 1967 | Anti-miscegenation laws unconstitutional | Racial classifications strict scrutiny |
| *Tinker v. Des Moines* | 1969 | Student speech protected | 'Schoolhouse gate' standard |
| *Roe v. Wade* | 1973 | Abortion right constitutional | Overruled by *Dobbs* 2022 |
| *Planned Parenthood v. Casey* | 1992 | 'Undue burden' abortion standard | Overruled by *Dobbs* 2022 |
| *DC v. Heller* | 2008 | Individual right to bear arms | Modern 2A jurisprudence |
| *Citizens United v. FEC* | 2010 | Corporate independent political expenditures protected | Massive campaign-finance impact |
| *Shelby County v. Holder* | 2013 | VRA preclearance formula unconstitutional | Voting rights setback |
| *Obergefell v. Hodges* | 2015 | Same-sex marriage right | 14th Amendment due process + equal protection |
| *Dobbs v. Jackson Women's Health* | 2022 | Overruled *Roe* + *Casey* | Abortion returned to states |
| *NYSRPA v. Bruen* | 2022 | History + tradition test for 2A | Strict 2A jurisprudence |
| *Students for Fair Admissions v. Harvard* | 2023 | Race-based affirmative action in college admissions unconstitutional | Major equal protection ruling |
| *Trump v. United States* | 2024 | Presidential immunity for official acts | Major separation-of-powers ruling |

## Roberts Court Since 2017 (Trump Appointees Era)

| Year | Major decision | Vote |
|---|---|---|
| 2018 | *Janus v. AFSCME* — public-sector union dues | 5-4 (overruled *Abood* 1977) |
| 2018 | *Trump v. Hawaii* — travel ban upheld | 5-4 |
| 2018 | *Wayfair v. South Dakota* — internet sales tax | 5-4 |
| 2020 | *Bostock v. Clayton County* — LGBTQ Title VII protection | 6-3 (Gorsuch w/ liberals) |
| 2020 | *Seila Law v. CFPB* — limit on independent agencies | 5-4 |
| 2022 | *Dobbs v. Jackson Women's Health* — overruled *Roe* | 5-4 (6-3 result) |
| 2022 | *NYSRPA v. Bruen* — 2A history + tradition | 6-3 |
| 2022 | *West Virginia v. EPA* — major questions doctrine | 6-3 |
| 2023 | *Students for Fair Admissions* — race-based admissions | 6-3 |
| 2024 | *Loper Bright v. Raimondo* — overruled *Chevron* deference | 6-3 |
| 2024 | *Trump v. United States* — presidential immunity | 6-3 |
      `
    },
    {
      id: 'govjudic3-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Court Eras** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the Warren Court (1953-69)?",
            options: [
              "It expanded civil rights and the rights of the accused in cases like Brown, Gideon and Miranda, launching a rights revolution",
              "It narrowed civil liberties in cases like Plessy, Korematsu and Dennis, deferring broadly to government power",
              "It struck down New Deal economic laws to protect liberty of contract, dismantling the federal regulatory state",
              "It returned abortion and gun rules to the states, adopting history and tradition as its method"
            ],
            correctAnswer: 0,
            explanation: 'WARREN COURT (1953-69, CJ Earl Warren) = most ACTIVIST LIBERAL court in U.S. history. RIGHTS REVOLUTION: (1) CIVIL RIGHTS — Brown 1954 overruled Plessy, Loving 1967; (2) CRIMINAL PROCEDURE — Mapp 1961 exclusionary, Gideon 1963 counsel, Miranda 1966 warnings, Terry 1968 stop-and-frisk; (3) REAPPORTIONMENT — Baker 1962, Reynolds 1964 one-person-one-vote; (4) FREE SPEECH — NYT v. Sullivan 1964, Tinker 1969; (5) SCHOOL PRAYER — Engel 1962, Abington 1963. Fundamentally transformed American constitutional law toward individual rights protection.'
          },
          {
            question: "Which best describes the modern Roberts Court since the Trump appointees solidified the 6-3 conservative majority?",
            options: [
              "Its conservative majority overruled Roe in Dobbs and narrowed agency power in West Virginia v. EPA",
              "Its six conservatives expanded federal agency power by reaffirming Chevron deference and upholding broad mandates",
              "Its liberal majority expanded abortion rights in Dobbs and strengthened state gun regulations in NYSRPA v. Bruen",
              "Its moderate majority avoided major rulings, declining to hear any abortion, gun or agency power cases at all"
            ],
            correctAnswer: 0,
            explanation: 'MODERN ROBERTS COURT (2020-present, post-Barrett) — major conservative decisions reflecting 6-3 majority: (1) Dobbs (2022) overruled Roe + Casey → abortion to states; (2) Bruen (2022) "history and tradition" 2A → struck NY conceal-carry; (3) West Virginia v. EPA (2022) MAJOR QUESTIONS DOCTRINE limiting agency authority; (4) Students for Fair Admissions (2023) race-based admissions unconstitutional; (5) Loper Bright (2024) overruled Chevron 1984 → reduced administrative-state authority; (6) Trump v. US (2024) presidential immunity. PATTERN: major overrulings (Roe 1973, Casey 1992, Chevron 1984, Abood 1977) → stare decisis debate.'
          }
        ]
      }
    },
    {
      id: 'govjudic3-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — name the year**`,
      exercise: {
        questions: [
          {
            prompt: "Year *Brown v. Board of Education* declared school segregation unconstitutional, overruling *Plessy*.",
            answer: '1954',
            acceptableAnswers: ['1954'],
            hint: 'Same year Vietnam War began (Dien Bien Phu); Eisenhower 2nd year.'
          },
          {
            prompt: "Year of the 'switch in time that saved nine' as Hughes Court abandoned Lochner-era jurisprudence.",
            answer: '1937',
            acceptableAnswers: ['1937'],
            hint: 'Same year FDR\'s court-packing plan failed but Court still shifted.'
          },
          {
            prompt: "Year *Dobbs v. Jackson Women's Health Organization* overruled *Roe v. Wade* and *Casey*.",
            answer: '2022',
            acceptableAnswers: ['2022'],
            hint: 'Same year as Russia\'s invasion of Ukraine; Biden 2nd year.'
          }
        ]
      }
    },
    {
      id: 'govjudic3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each Chief Justice to their characteristic Court era.**`,
      exercise: {
        dropdowns: [
          {
            label: "Established judicial review and national supremacy (1801-35): ___",
            options: ['John Marshall', 'Roger Taney', 'Earl Warren', 'John Roberts']
          },
          {
            label: "Presided over the Rights Revolution (1953-69): ___",
            options: ['John Marshall', 'Roger Taney', 'Earl Warren', 'William Rehnquist']
          },
          {
            label: "Presides over the modern conservative majority (2005-present): ___",
            options: ['Warren Burger', 'William Rehnquist', 'John Roberts', 'Earl Warren']
          }
        ],
        correctAnswers: ['John Marshall', 'Earl Warren', 'John Roberts'],
        hint1: 'Marshall (1801-35) = Marbury, McCulloch, Gibbons; nation-building federalism.',
        hint2: 'Warren (1953-69) = Brown, Mapp, Gideon, Miranda, Baker, Reynolds, Engel.',
        hint3: 'Roberts (2005-present) = Citizens United, Heller, Shelby County, Obergefell, Dobbs, Bruen, Loper Bright, Trump v US.'
      }
    },
    {
      id: 'govjudic3-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — The Lochner Era + Switch in Time**`,
      exercise: {
        questions: [
          {
            question: "Which best describes the Lochner Era and the 1937 'switch in time'?",
            options: [
              "The Court struck down economic regulations as violating liberty of contract until 1937, when it began upholding them",
              "The Court upheld every New Deal law from the start, so the 1937 switch referred to FDR dropping his plan",
              "The Court struck down civil rights laws under the 14th Amendment until 1937, when Brown v. Board reversed that course",
              "The Court used the Commerce Clause to expand federal power until 1937, when it began striking down labor laws"
            ],
            correctAnswer: 0,
            explanation: 'LOCHNER ERA (1897-1937) = economic substantive due process under 14th Am to STRIKE progressive labor regulations as violations of LIBERTY OF CONTRACT. (1) Lochner 1905 struck NY 60-hour bakery as "unreasonable" interference; (2) Adkins 1923 struck minimum wage for women; (3) Schechter 1935 + Carter Coal 1936 struck major New Deal. SWITCH IN TIME 1937: facing FDR court-packing threat → Justice OWEN ROBERTS shifted → West Coast Hotel v. Parrish 1937 upheld minimum wage; NLRB v. Jones & Laughlin 1937 upheld federal labor regulation; Darby 1941 + Wickard v. Filburn 1942 cemented broad federal regulatory power. → enabled modern administrative + regulatory state.'
          },
          {
            question: "How does the Marshall Court (1801-35) compare to the Taney Court (1836-64) in shaping federal judicial power and constitutional jurisprudence?",
            options: [
              "Marshall strengthened national and judicial power, whereas Taney favored states' rights and issued Dred Scott",
              "Marshall favored states' rights and limited judicial review, whereas Taney built national supremacy through McCulloch",
              "Marshall and Taney both expanded federal power, and Taney's Dred Scott ruling ended slavery in the territories",
              "Marshall avoided constitutional cases entirely, whereas Taney first used judicial review in Marbury v. Madison"
            ],
            correctAnswer: 0,
            explanation: 'Marshall vs Taney = OPPOSITE constitutional visions. MARSHALL (1801-35) — JUDICIAL REVIEW (Marbury 1803), NATIONAL SUPREMACY (McCulloch 1819 broad implied powers + BUS), broad COMMERCE (Gibbons 1824 federal preempts state monopolies). Nationalist FEDERALIST → strong central gov\'t + co-equal federal judiciary. TANEY (1836-64) — pro-STATES\' RIGHTS; expanded slavery (Prigg 1842 fugitive slave clause; Dred Scott 1857 — Black Americans not citizens, voided Missouri Compromise; HASTENED CIVIL WAR by foreclosing political compromise). Dred Scott = WORST SCOTUS DECISION EVER; 13th + 14th Amendments effectively repudiated it.'
          }
        ]
      }
    }
  ]
}
