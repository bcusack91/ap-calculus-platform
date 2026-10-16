export const govJudiciaryPart5Data = {
  topicSlug: 'gov-judiciary',
  sections: [
    {
      id: 'govjudic5-intro',
      type: 'text' as const,
      content: `
# ⚖️ The Federal Judiciary

**Part 5 of 7 — Change Over Time**

---

| Section |
|---|
| Founding through Marshall Court (1789-1835) |
| Taney through Reconstruction (1836-1897) |
| Lochner Era through New Deal (1897-1937) |
| Warren Court through Burger Court (1953-1986) |
| Rehnquist + Roberts Courts (1986-present) |

> 🔑 Key idea: SCOTUS has continually evolved its approach across major eras — from establishing federal judicial power (Marshall Court) → legitimizing slavery (Taney Court) → protecting property rights (Lochner Era) → expanding individual rights (Warren Court) → conservative consolidation (Rehnquist + Roberts Courts).
      `
    },
    {
      id: 'govjudic5-content',
      type: 'text' as const,
      content: `
## Founding Through Marshall Court (1789-1835)

| Period | Key developments |
|---|---|
| **Founding (1789-1801)** | Judiciary Act 1789 created lower federal courts + 6-justice SCOTUS; first decade of relative obscurity; *Chisholm v. Georgia* (1793) — citizens can sue states (overruled by 11th Amendment 1795) |
| **Marshall Court 1801-35** | John Marshall (Federalist appointee of John Adams in 1801) transformed SCOTUS into co-equal branch through landmark decisions: *Marbury* 1803 (judicial review), *Fletcher v. Peck* 1810 (contract clause), *McCulloch v. Maryland* 1819 (national supremacy + implied powers), *Gibbons v. Ogden* 1824 (broad commerce power), *Worcester v. Georgia* 1832 (federal authority over Indian tribes — Jackson allegedly defied) |
| **Marshall's significance** | Built the foundation of federal judicial power + nationalist constitutional interpretation that defines modern American constitutional law |

## Taney Through Reconstruction (1836-1897)

| Period | Key developments |
|---|---|
| **Taney Court 1836-64** | Roger Taney (Jackson appointee) reversed Marshall's nationalism toward states' rights; *Dred Scott v. Sandford* (1857) — held African Americans not citizens, voided Missouri Compromise — disastrous decision contributing to Civil War |
| **Reconstruction 1864-77** | Civil War Amendments (13th 1865, 14th 1868, 15th 1870) effectively repudiated Dred Scott; SCOTUS initially supported Reconstruction (*Texas v. White* 1869); but began narrowing protections (*Slaughter-House Cases* 1873) |
| **Gilded Age 1877-97** | Court systematically narrowed Reconstruction protections: *Civil Rights Cases* (1883) struck Civil Rights Act of 1875 as exceeding 14th Am state-action limit; *Plessy v. Ferguson* (1896) established 'separate but equal'; *Wabash v. Illinois* (1886) limited state regulation of interstate commerce |

## Lochner Era Through New Deal (1897-1937)

| Period | Key developments |
|---|---|
| **Lochner Era 1897-1937** | Court used economic substantive due process to strike progressive labor + economic regulations: *Allgeyer v. Louisiana* (1897), *Lochner v. New York* (1905), *Adair v. US* (1908), *Coppage v. Kansas* (1915), *Adkins v. Children's Hospital* (1923) |
| **New Deal resistance 1933-37** | Hughes Court initially struck New Deal: *Schechter Poultry v. US* (1935) struck NIRA, *US v. Butler* (1936) struck AAA, *Carter v. Carter Coal* (1936) struck Bituminous Coal Act |
| **FDR court-packing 1937** | FDR proposed adding up to 6 justices; Senate Judiciary Committee rejected as 'a measure which should be so emphatically rejected'; despite plan's failure, threat may have prompted Justice Owen Roberts to switch ('switch in time that saved nine') |
| **Switch in time 1937** | *West Coast Hotel v. Parrish* (1937) upheld minimum wage (overruled *Adkins*); *NLRB v. Jones & Laughlin* (1937) upheld federal labor regulation |
| **New Deal consolidation** | *US v. Darby* (1941) overruled *Hammer v. Dagenhart* (1918); *Wickard v. Filburn* (1942) cemented broad federal commerce power → enabled modern administrative + regulatory state |

## Warren Court Through Burger Court (1953-1986)

| Period | Key developments |
|---|---|
| **Warren Court 1953-69** | Earl Warren led RIGHTS REVOLUTION across multiple domains: civil rights (*Brown* 1954, *Loving* 1967), criminal procedure (*Mapp* 1961, *Gideon* 1963, *Miranda* 1966, *Terry* 1968), reapportionment (*Baker* 1962, *Reynolds* 1964 — one-person-one-vote), free speech (*NYT v. Sullivan* 1964, *Tinker* 1969, *Brandenburg* 1969), school prayer (*Engel* 1962, *Schempp* 1963), incorporation (most Bill of Rights protections incorporated against states) |
| **Warren's significance** | Most ACTIVIST LIBERAL court in U.S. history; fundamentally transformed American constitutional law toward individual rights protection |
| **Burger Court 1969-86** | Mixed; Nixon-appointed CJ but generally upheld Warren-era precedents while pulling back: *Roe v. Wade* (1973) — abortion right; *US v. Nixon* (1974) — limited executive privilege; *Buckley v. Valeo* (1976) — campaign finance; *Regents of UC v. Bakke* (1978) — affirmative action quotas struck but race as factor permitted; *Chadha* (1983) — legislative veto unconstitutional |

## Rehnquist + Roberts Courts (1986-Present)

| Period | Key developments |
|---|---|
| **Rehnquist Court 1986-2005** | William Rehnquist (Reagan appointee CJ) led conservative shift; FEDERALISM REVIVAL (*US v. Lopez* 1995 first commerce-clause limit since 1937; *US v. Morrison* 2000 struck VAWA civil remedy — a CED illustrative example); *Bush v. Gore* (2000) |
| **Roberts Court 2005-present** | John Roberts (Bush 43 appointee CJ) — conservative consolidation across multiple areas: |
| **Pre-Trump Roberts Court 2005-17** | *DC v. Heller* (2008) individual right to bear arms; *Citizens United* (2010) corporate political expenditures; *McDonald v. Chicago* (2010) incorporated the Second Amendment; *NFIB v. Sebelius* (2012) ACA upheld as tax; *Obergefell v. Hodges* (2015) same-sex marriage (Kennedy w/ liberals) |
| **Post-Trump Roberts Court 2018-present** | Trump's 3 appointments (Gorsuch 2017, Kavanaugh 2018, Barrett 2020) cemented 6-3 conservative majority; major decisions: *Dobbs* (2022) overruled *Roe*; *SFFA v. Harvard* (2023) ended race-conscious college admissions — appointments reshaping precedent (EK 2.9.A.2) |
      `
    },
    {
      id: 'govjudic5-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Court Eras Across Time** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes how the Marshall Court (1801-35) transformed federal judicial power?",
            options: [
              "Through Marbury, McCulloch and Gibbons, it made the Court a co-equal branch and strengthened national power over the states",
              "Through Dred Scott, Plessy and Lochner, it limited federal power and deferred to the states on economic regulation",
              "It avoided conflict with Jefferson by declining to review any federal law, keeping the Court a minor body",
              "It mainly decided admiralty and land disputes, leaving constitutional questions to Congress and the President"
            ],
            correctAnswer: 0,
            explanation: 'MARSHALL COURT (1801-35) under JOHN MARSHALL transformed SCOTUS from weak institution → CO-EQUAL branch via NATIONALIST DECISIONS: (1) MARBURY v. MADISON 1803 → JUDICIAL REVIEW; (2) FLETCHER v. PECK 1810 → Contract Clause to strike state law for first time; (3) McCULLOCH v. MARYLAND 1819 → NATIONAL SUPREMACY + BROAD IMPLIED POWERS via "necessary + proper" (upheld Bank of US; struck Maryland tax); (4) GIBBONS v. OGDEN 1824 → broad federal commerce power preempting state monopolies; (5) WORCESTER v. GEORGIA 1832 → states cannot regulate Indian territory (Jackson allegedly defied). Marshall\'s nationalist FEDERALIST jurisprudence = foundation of modern American constitutional law.'
          },
          {
            question: "How did the Hughes Court's 'switch in time that saved nine' (1937) transform constitutional law?",
            options: [
              "The Court began upholding New Deal and labor laws, ending the Lochner era and enabling the modern administrative state",
              "The Court began striking down New Deal laws, which led FDR to abandon court packing and accept the Court's limits on regulation",
              "The Court expanded liberty of contract, so states lost the power to set minimum wages for women and children for decades",
              "The Court added six new justices under FDR's plan, which gave the New Deal a permanent majority on the bench for decades"
            ],
            correctAnswer: 0,
            explanation: 'SWITCH IN TIME 1937 = ENDED LOCHNER ERA + ENABLED MODERN ADMINISTRATIVE STATE. (1) BACKGROUND — Hughes Court striking New Deal (Schechter 1935 NIRA, Carter Coal 1936 BCA); FDR Feb 1937 court-packing plan to add up to 6 justices; (2) OWEN ROBERTS SHIFTED — West Coast Hotel v. Parrish March 1937 upheld minimum wage overruling Adkins 1923; NLRB v. Jones & Laughlin April 1937 upheld federal labor regulation; (3) CONSOLIDATION — Darby 1941 overruled Hammer v. Dagenhart 1918; Wickard v. Filburn 1942 cemented broad federal commerce. (4) Abandoned ECONOMIC SUBSTANTIVE DUE PROCESS + LIBERTY OF CONTRACT (1897+) → enabled federal regulation of labor + agriculture + banking + securities + modern administrative + regulatory state.'
          }
        ]
      }
    },
    {
      id: 'govjudic5-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — name the year**`,
      exercise: {
        questions: [
          {
            prompt: "Year *McCulloch v. Maryland* established national supremacy and broad implied powers under 'necessary and proper'.",
            answer: '1819',
            acceptableAnswers: ['1819'],
            hint: 'Marshall Court at peak; same year as Adams-Onís Treaty.'
          },
          {
            prompt: "Year *Plessy v. Ferguson* established 'separate but equal' segregation doctrine.",
            answer: '1896',
            acceptableAnswers: ['1896'],
            hint: 'Same year as McKinley elected; Justice Harlan dissented.'
          },
          {
            prompt: "Year *United States v. Lopez* ruled that Congress exceeded its commerce power for the first time in nearly 60 years.",
            answer: '1995',
            acceptableAnswers: ['1995'],
            hint: 'Rehnquist Court; Gun-Free School Zones Act.'
          }
        ]
      }
    },
    {
      id: 'govjudic5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each Court era to its defining characteristic.**`,
      exercise: {
        dropdowns: [
          {
            label: "Established judicial review (Marbury) and national supremacy (McCulloch) (1801-35): ___",
            options: ['Marshall Court', 'Taney Court', 'Lochner Era', 'Warren Court']
          },
          {
            label: "Expanded civil rights and the rights of the accused in Brown, Gideon, and Tinker (1953-69): ___",
            options: ['Marshall Court', 'Taney Court', 'Lochner Era', 'Warren Court']
          },
          {
            label: "Conservative consolidation including Citizens United, McDonald, and Dobbs (2005-present): ___",
            options: ['Burger Court', 'Rehnquist Court', 'Roberts Court', 'Warren Court']
          }
        ],
        correctAnswers: ['Marshall Court', 'Warren Court', 'Roberts Court'],
        hint1: 'Marshall Court (1801-35) = Marbury 1803 + McCulloch 1819; nation-building federalism.',
        hint2: 'Warren Court (1953-69) = rights revolution; Brown, Engel, Baker, Gideon, Tinker are all required cases.',
        hint3: 'Roberts Court (2005-present) = conservative consolidation; cemented 6-3 majority after Trump appointees.'
      }
    },
    {
      id: 'govjudic5-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Stare Decisis + Modern Overrulings**`,
      exercise: {
        questions: [
          {
            question: "How did the Roberts Court's overruling of its 1973 abortion precedent in Dobbs (2022) compare with the Warren Court's rejection of Plessy's 'separate but equal' doctrine in Brown (1954)?",
            options: [
              "Both overturned long-standing precedent, but Brown expanded a constitutional right while Dobbs held one did not exist",
              "Both were decided unanimously, showing that overruling a precedent rarely divides the justices along ideological lines",
              "Only Brown overturned precedent, since Dobbs merely clarified the abortion standard already in place",
              "Both expanded federal power by requiring every state to adopt one uniform national policy"
            ],
            correctAnswer: 0,
            explanation: 'Both decisions rejected long-standing precedent (Plessy stood 58 years, the abortion precedent 49 years) — the EK 2.9.A.2 pattern of a changed Court establishing new or rejecting existing precedents. DIFFERENCE: Brown (required case) extended equal protection to strike down school segregation, while Dobbs held that the Constitution does not confer a right to abortion and returned the issue to legislatures (EK 3.9.A.2). Brown was 9-0, but Dobbs split the Court along ideological lines; neither imposed one uniform national policy in the way described.'
          },
          {
            question: "Which best explains the historical development of the incorporation doctrine through the 14th Amendment?",
            options: [
              "The Court applied Bill of Rights protections to the states one by one through the 14th Amendment's Due Process Clause",
              "The 14th Amendment applied the entire Bill of Rights to the states at once in 1868, so no later cases were needed",
              "The Court applied the Bill of Rights to the states through the 10th Amendment, beginning with Barron v. Baltimore in 1833",
              "The Court applied only the First Amendment to the states, leaving criminal procedure rights to state constitutions"
            ],
            correctAnswer: 0,
            explanation: 'INCORPORATION DOCTRINE = applies Bill of Rights provisions against states via 14th Am Due Process. SELECTIVE INCORPORATION developed gradually: Gitlow 1925 (1A speech first), Near 1931 (press), Powell 1932 (counsel capital), DeJonge 1937 (assembly), Cantwell 1940 (free exercise), Everson 1947 (Establishment), Mapp 1961 (4A exclusionary), Gideon 1963 (6A counsel non-capital), Malloy 1964 (5A self-incrimination), Pointer 1965 (6A confrontation), Klopfer 1967 (6A speedy trial), Duncan 1968 (6A jury), Benton 1969 (5A double jeopardy), McDonald 2010 (2A bear arms), Timbs 2019 (8A excessive fines). Unincorporated: 3A (quartering), 5A grand jury, 7A civil jury.'
          }
        ]
      }
    }
  ]
}
