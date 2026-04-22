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
              "The WARREN COURT (1953-69, CJ Earl Warren) was the most ACTIVIST LIBERAL court in U.S. history, presiding over a sweeping RIGHTS REVOLUTION across multiple domains: (1) CIVIL RIGHTS — *Brown v. Board* (1954) overruled *Plessy*, *Loving v. Virginia* (1967) struck anti-miscegenation laws; (2) CRIMINAL PROCEDURE — *Mapp v. Ohio* (1961) exclusionary rule, *Gideon v. Wainwright* (1963) right to counsel, *Miranda v. Arizona* (1966) warnings, *Terry v. Ohio* (1968) stop-and-frisk; (3) REAPPORTIONMENT — *Baker v. Carr* (1962), *Reynolds v. Sims* (1964) one-person-one-vote; (4) FREE SPEECH — *NYT v. Sullivan* (1964), *Tinker v. Des Moines* (1969); (5) SCHOOL PRAYER — *Engel v. Vitale* (1962), *Abington v. Schempp* (1963); SIGNIFICANCE: Warren Court fundamentally transformed American constitutional law toward individual rights protection",
              "There is no Warren Court of any kind during the entire period from 1953 onward in any region of the United States with no Earl Warren, no rights revolution, no Brown v. Board, no Loving, no Mapp, no Gideon, no Miranda, no Baker v. Carr, no Reynolds v. Sims, no NYT v. Sullivan, no Tinker, no Engel, and no school prayer cases of any kind during the entire period in any region",
              "The Warren Court was the most CONSERVATIVE court in U.S. history and pulled back on individual rights protections of any kind under any circumstance with no rights revolution, no Brown v. Board, no Mapp, no Gideon, no Miranda, no Baker v. Carr, no Reynolds v. Sims, and no Engel v. Vitale of any kind during the entire period from 1953 onward in any region of the United States during the period",
              "Earl Warren was a Confederate general who never served on the Supreme Court of any kind under any circumstance with no Warren Court, no Chief Justice tenure, no rights revolution, no Brown v. Board, no Mapp, no Gideon, no Miranda, no Baker v. Carr, no Reynolds v. Sims, and no Engel v. Vitale of any kind during the entire period from 1953 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'WARREN COURT (1953-69, CJ Earl Warren) = most ACTIVIST LIBERAL court in U.S. history. RIGHTS REVOLUTION: (1) CIVIL RIGHTS — Brown 1954 overruled Plessy, Loving 1967; (2) CRIMINAL PROCEDURE — Mapp 1961 exclusionary, Gideon 1963 counsel, Miranda 1966 warnings, Terry 1968 stop-and-frisk; (3) REAPPORTIONMENT — Baker 1962, Reynolds 1964 one-person-one-vote; (4) FREE SPEECH — NYT v. Sullivan 1964, Tinker 1969; (5) SCHOOL PRAYER — Engel 1962, Abington 1963. Fundamentally transformed American constitutional law toward individual rights protection.'
          },
          {
            question: "Which best describes the modern Roberts Court since the Trump appointees solidified the 6-3 conservative majority?",
            options: [
              "The MODERN ROBERTS COURT (2020-present, after Barrett confirmation) has produced a series of major conservative decisions reflecting the 6-3 majority: (1) *Dobbs v. Jackson Women's Health* (2022) — overruled *Roe* + *Casey*, returning abortion to states; (2) *NYSRPA v. Bruen* (2022) — 'history and tradition' test for 2A, striking NY conceal-carry restrictions; (3) *West Virginia v. EPA* (2022) — articulated MAJOR QUESTIONS DOCTRINE limiting agency authority; (4) *Students for Fair Admissions v. Harvard* (2023) — race-based affirmative action in college admissions unconstitutional; (5) *Loper Bright v. Raimondo* (2024) — overruled *Chevron* deference (1984), reducing administrative-state authority; (6) *Trump v. United States* (2024) — presidential immunity for official acts; PATTERN: significant overrulings of long-standing precedent (Roe 1973, Casey 1992, Chevron 1984, Abood 1977) generating debate about stare decisis",
              "There is no modern Roberts Court of any kind during the entire period from 2020 onward in any region of the United States with no John Roberts, no Trump appointees, no 6-3 conservative majority, no Dobbs, no Bruen, no West Virginia v. EPA, no Students for Fair Admissions, no Loper Bright, no Trump v. United States, and no overrulings of long-standing precedent of any kind during the entire period in any region",
              "The modern Roberts Court has been a moderate liberal court that has expanded rights protections of any kind under any circumstance with no Dobbs, no Bruen, no West Virginia v. EPA, no Students for Fair Admissions, no Loper Bright, no Trump v. United States, and no major conservative decisions of any kind during the entire period from 2020 onward in any region of the United States during the period",
              "There is no Trump v. United States 2024 case of any kind during the entire period from 2024 onward in any region of the United States with no presidential immunity ruling, no 6-3 vote, no Roberts majority, and no separation-of-powers significance of any kind during the entire period in any region"
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
              "The LOCHNER ERA (1897-1937) was a period when SCOTUS used ECONOMIC SUBSTANTIVE DUE PROCESS under the 14th Amendment to STRIKE DOWN progressive labor + economic regulations as violations of LIBERTY OF CONTRACT: (1) *Lochner v. New York* (1905) struck NY 60-hour bakery law as 'unreasonable' interference with bakers' liberty of contract; (2) *Adkins v. Children's Hospital* (1923) struck minimum wage for women; (3) *Schechter Poultry v. US* (1935) + *Carter v. Carter Coal* (1936) struck major New Deal programs; SWITCH IN TIME 1937: facing FDR's court-packing plan threat, Justice OWEN ROBERTS shifted his vote — *West Coast Hotel v. Parrish* (1937) upheld minimum wage, *NLRB v. Jones & Laughlin* (1937) upheld federal labor regulation; *US v. Darby* (1941) + *Wickard v. Filburn* (1942) cemented broad federal regulatory power; SIGNIFICANCE: the post-1937 jurisprudence allowed the modern administrative + regulatory state",
              "There is no Lochner Era of any kind during the entire period from 1897 onward in any region of the United States with no economic substantive due process, no liberty of contract, no Lochner v. New York 1905, no Adkins, no Schechter Poultry, no Carter Coal, no court-packing plan threat, no Owen Roberts switch, no West Coast Hotel v. Parrish, no NLRB v. Jones & Laughlin, no Darby, no Wickard v. Filburn, and no modern administrative state of any kind during the entire period in any region",
              "The Lochner Era was a period of SCOTUS UPHOLDING all progressive labor + economic regulations of any kind under any circumstance with no economic substantive due process, no liberty of contract, no Lochner v. New York striking the bakery law, and no Adkins or Schechter Poultry decisions of any kind during the entire period from 1897 onward in any region of the United States during the period",
              "The 'switch in time' of 1937 was a strategic decision by Owen Roberts to STRENGTHEN Lochner-era jurisprudence and OPPOSE the New Deal of any kind under any circumstance with no shift in voting pattern, no court-packing threat connection, and no abandonment of Lochner of any kind during the entire period from 1937 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'LOCHNER ERA (1897-1937) = economic substantive due process under 14th Am to STRIKE progressive labor regulations as violations of LIBERTY OF CONTRACT. (1) Lochner 1905 struck NY 60-hour bakery as "unreasonable" interference; (2) Adkins 1923 struck minimum wage for women; (3) Schechter 1935 + Carter Coal 1936 struck major New Deal. SWITCH IN TIME 1937: facing FDR court-packing threat → Justice OWEN ROBERTS shifted → West Coast Hotel v. Parrish 1937 upheld minimum wage; NLRB v. Jones & Laughlin 1937 upheld federal labor regulation; Darby 1941 + Wickard v. Filburn 1942 cemented broad federal regulatory power. → enabled modern administrative + regulatory state.'
          },
          {
            question: "How does the Marshall Court (1801-35) compare to the Taney Court (1836-64) in shaping federal judicial power and constitutional jurisprudence?",
            options: [
              "Marshall vs. Taney represent OPPOSITE constitutional visions: MARSHALL COURT (1801-35) — established JUDICIAL REVIEW (*Marbury* 1803), NATIONAL SUPREMACY (*McCulloch v. Maryland* 1819 — broad implied powers + Bank of US), broad COMMERCE POWER (*Gibbons v. Ogden* 1824 — federal commerce preempts state monopolies); Marshall's nationalist FEDERALIST jurisprudence built strong central government and elevated federal judiciary as co-equal branch; TANEY COURT (1836-64) — pro-STATES' RIGHTS jurisprudence; expanded slavery (*Prigg v. Pennsylvania* 1842 fugitive slave clause + *Dred Scott v. Sandford* 1857 — held African Americans were not citizens, voided Missouri Compromise as exceeding congressional authority, and arguably HASTENED THE CIVIL WAR by foreclosing political compromise); SIGNIFICANCE: Dred Scott is widely considered the WORST SCOTUS DECISION EVER and prompted reform proposals including court-packing (Lincoln considered it but didn't act); 13th + 14th Amendments effectively repudiated Dred Scott",
              "There is no comparison between Marshall and Taney Courts of any kind during the entire period from 1801 onward in any region of the United States with no judicial review, no McCulloch, no Gibbons, no Prigg, no Dred Scott, no states' rights vs. national supremacy contrast, no Civil War connection, no 13th or 14th Amendment repudiation, and no Lincoln court-packing consideration of any kind during the entire period in any region",
              "Marshall and Taney Courts had identical constitutional visions of any kind under any circumstance with no contrast between national supremacy and states' rights, no Marbury vs. Dred Scott contrast, no McCulloch vs. Prigg contrast, and no Civil War connection of any kind during the entire period from 1801 onward in any region of the United States during the period",
              "The Taney Court had a NATIONAL SUPREMACY jurisprudence and the Marshall Court had a STATES' RIGHTS jurisprudence of any kind under any circumstance with no Marbury establishing judicial review, no McCulloch establishing national supremacy, no Dred Scott pro-slavery ruling, and no historical reversal of any kind during the entire period from 1801 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Marshall vs Taney = OPPOSITE constitutional visions. MARSHALL (1801-35) — JUDICIAL REVIEW (Marbury 1803), NATIONAL SUPREMACY (McCulloch 1819 broad implied powers + BUS), broad COMMERCE (Gibbons 1824 federal preempts state monopolies). Nationalist FEDERALIST → strong central gov\'t + co-equal federal judiciary. TANEY (1836-64) — pro-STATES\' RIGHTS; expanded slavery (Prigg 1842 fugitive slave clause; Dred Scott 1857 — Black Americans not citizens, voided Missouri Compromise; HASTENED CIVIL WAR by foreclosing political compromise). Dred Scott = WORST SCOTUS DECISION EVER; 13th + 14th Amendments effectively repudiated it.'
          }
        ]
      }
    }
  ]
}
