export const govCivilRightsPart1Data = {
  topicSlug: 'gov-civil-rights',
  sections: [
    {
      id: 'govcivr1-intro',
      type: 'text' as const,
      content: `
# ✊ Civil Rights

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| Civil rights vs. civil liberties distinction |
| 14th Amendment Equal Protection foundations |
| What civil rights protect — characteristics, sources, and the movements they motivate |
| State action doctrine |

> 🔑 Key idea: CIVIL RIGHTS are EQUAL TREATMENT claims against discrimination, grounded in 14TH AMENDMENT EQUAL PROTECTION CLAUSE (1868) + civil rights statutes; CIVIL LIBERTIES are protections against government action under Bill of Rights + 14th Am Due Process. Civil rights protect individuals from discrimination based on characteristics such as RACE, NATIONAL ORIGIN, RELIGION and SEX (EK 3.10.A.1). 14th Am only applies to STATE ACTION (not private), but Civil Rights Act 1964 + other federal statutes reach private discrimination via Commerce Clause.
      `
    },
    {
      id: 'govcivr1-content',
      type: 'text' as const,
      content: `
## Civil Rights vs. Civil Liberties

| Feature | Civil Rights | Civil Liberties |
|---|---|---|
| **Source** | 14th Am Equal Protection (1868) + 13th + 15th + 19th + 24th + 26th Amendments + civil rights statutes (CRA 1964, VRA 1965, ADA 1990, etc.) | Bill of Rights (1791) + 14th Am Due Process |
| **Type of claim** | Equal treatment / non-discrimination | Freedom from government action |
| **Direction** | What government MUST DO (or not do unequally) | What government MUST NOT DO |
| **Examples** | Brown v. Board 1954 (school desegregation); CRA 1964; Title IX 1972; Obergefell 2015 (marriage equality); Bostock 2020 (LGBTQ+ employment); Loving v. Virginia 1967 (interracial marriage) | Engel v. Vitale 1962 (school prayer); Tinker 1969 (student speech); Gideon 1963 (right to counsel); Roe 1973 (abortion, overruled Dobbs 2022); Heller 2008 (2nd Am) |
| **Overlap** | Many cases involve both — e.g., Loving v. Virginia 1967 (Equal Protection + Due Process); Obergefell 2015 (both); Lawrence v. Texas 2003 (Due Process not Equal Protection but related) |  |

## 14th Amendment Equal Protection Foundations

| Provision | Text + Key Cases |
|---|---|
| **14th AM Section 1 (1868)** | "No State shall ... deny to any person within its jurisdiction the equal protection of the laws"; ratified during Reconstruction; foundation of modern civil rights law |
| **PLESSY v. FERGUSON (1896)** | Upheld "SEPARATE BUT EQUAL" Louisiana railroad segregation; gave constitutional cover to Jim Crow for ~58 years; Harlan dissent: "Constitution is color-blind" |
| **BROWN v. BOARD OF EDUCATION (1954)** | OVERRULED Plessy in education; Warren unanimous; "separate educational facilities are inherently unequal"; relied on social science (Kenneth Clark doll studies) showing psychological harm |
| **BROWN II (1955)** | Implementation order — desegregate "with all deliberate speed"; vague timeline allowed massive resistance + "Southern Manifesto" 1956 (101 Congressional signatories) |
| **COOPER v. AARON (1958)** | Reaffirmed Brown; held state officials bound by Supreme Court constitutional interpretations (Little Rock crisis; Eisenhower sent 101st Airborne) |
| **LOVING v. VIRGINIA (1967)** | Struck Virginia anti-miscegenation law banning interracial marriage; Equal Protection + Due Process; unanimous Warren |
| **REGENTS v. BAKKE (1978)** | Struck UC Davis quota system but allowed race as ONE FACTOR in admissions (Powell controlling); foundation for affirmative action doctrine |
| **GRUTTER v. BOLLINGER (2003)** | Upheld Michigan Law School holistic race-conscious admissions (race as one factor to achieve diversity) |
| **STUDENTS FOR FAIR ADMISSIONS v. HARVARD/UNC (2023)** | OVERRULED Grutter for race-conscious admissions; Roberts majority held use of race in admissions violates Equal Protection (Harvard) + Title VI |
| **OBERGEFELL v. HODGES (2015)** | Same-sex marriage right under 14th Am Due Process + Equal Protection; Kennedy 5-4 |
| **BOSTOCK v. CLAYTON COUNTY (2020)** | Title VII of Civil Rights Act 1964 protects LGBTQ+ employment discrimination (Gorsuch majority); statutory not constitutional |

## What Civil Rights Protect

| Element | What it means |
|---|---|
| **Protected characteristics** | Civil rights protect individuals from discrimination based on characteristics such as RACE, NATIONAL ORIGIN, RELIGION and SEX (EK 3.10.A.1) |
| **Constitutional sources** | The DUE PROCESS and EQUAL PROTECTION clauses — the 14th Amendment binds the states; the 5th Amendment's Due Process Clause binds the national government |
| **Statutory sources** | Acts of Congress — Civil Rights Act 1964, Voting Rights Act 1965, Title IX of the Education Amendments 1972 (EK 3.11.A.1) |
| **Social movements** | The equal protection clause has supported and motivated the civil rights movement ("Letter from a Birmingham Jail"), the women's rights movement (National Organization for Women), advocacy for LGBTQ rights, and the pro-life and pro-choice movements (EK 3.10.A.2) |
| **Government responses** | Court rulings (Brown v. Board 1954) and policies (CRA 1964, VRA 1965, Title IX 1972) answer social movements (EK 3.11.A.1) |

## State Action Doctrine

| Concept | Application |
|---|---|
| **State action requirement** | 14th Am ("No STATE shall ...") only restricts STATE GOVERNMENT actions, not private conduct; Civil Rights Cases 1883 confirmed this for 14th Am |
| **Federal civil rights statutes** | Reach PRIVATE DISCRIMINATION via COMMERCE CLAUSE (CRA 1964 Title II public accommodations upheld in Heart of Atlanta Motel + Katzenbach v. McClung 1964) and 13th AMENDMENT (which directly applies to private conduct, Jones v. Mayer 1968) |

> 🔑 Key takeaway: CIVIL RIGHTS = equal treatment claims grounded in 14th Am Equal Protection (1868) + civil rights statutes; CIVIL LIBERTIES = freedom from government action under Bill of Rights + 14th Am Due Process. Civil rights protect against discrimination based on race, national origin, religion and sex, through the due process and equal protection clauses plus acts of Congress (CRA 1964, VRA 1965, Title IX 1972). 14th Am applies only to STATE ACTION; civil rights STATUTES reach private discrimination via Commerce Clause + 13th Am.
      `
    },
    {
      id: 'govcivr1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: "What's the difference between CIVIL RIGHTS and CIVIL LIBERTIES, and how does the 14th Amendment serve as the constitutional foundation for both?",
            options: [
              "Civil rights protect against unequal treatment under the Equal Protection Clause, and civil liberties protect freedoms the Due Process Clause incorporates from the Bill of Rights.",
              "Civil rights protect speech and religion under the Due Process Clause, and civil liberties protect equal treatment under the 14th Amendment's Equal Protection Clause.",
              "Civil rights and civil liberties both come from the 1791 Bill of Rights, and the 14th Amendment only ended slavery without adding new constitutional protections.",
              "Civil liberties restrain only private employers under the Commerce Clause, and the 14th Amendment protects civil rights only in federal elections and jury trials.",
            ],
            correctAnswer: 0,
            explanation: 'CIVIL RIGHTS vs CIVIL LIBERTIES: (1) CIVIL RIGHTS — EQUAL TREATMENT/NON-DISCRIMINATION claims; 14TH AM EQUAL PROTECTION (1868) + 13th + 15th + 19th + 24th + 26th + statutes (CRA 1964, VRA 1965, ADA 1990, Title IX 1972); Brown 1954, Loving 1967, Obergefell 2015, Bostock 2020; (2) CIVIL LIBERTIES — protections AGAINST government action; BILL OF RIGHTS (1791) + 14TH AM DUE PROCESS; Engel 1962, Tinker 1969, Gideon 1963, Heller 2008, Dobbs 2022; (3) 14TH AM BOTH: (a) DP CLAUSE → SELECTIVE INCORPORATION (Gitlow 1925 → Timbs 2019) — liberties; (b) DP → SUBSTANTIVE DUE PROCESS (Griswold 1965, Roe 1973, Lawrence 2003, Obergefell 2015) — liberties; (c) EP CLAUSE → non-discrimination (Brown 1954, Loving 1967, US v. Virginia 1996, SFFA 2023) — rights; (4) Many cases involve both — Loving 1967, Obergefell 2015.'
          },
          {
            question: "According to the AP Government framework, where do guarantees against discrimination based on race, national origin, religion and sex come from?",
            options: [
              "The 14th Amendment's equal protection and due process clauses and acts of Congress such as the Voting Rights Act of 1965.",
              "The First Amendment's speech and religion clauses, which require every private employer and business to treat all customers and workers alike.",
              "The Tenth Amendment's reserved powers alone, since only state legislatures may pass laws that ban discrimination by race, sex or religion.",
              "The Supremacy Clause alone, since federal courts have struck down every state law that classifies people by any personal characteristic.",
            ],
            correctAnswer: 0,
            explanation: 'EK 3.10.A.1: civil rights protect individuals from discrimination based on characteristics such as race, national origin, religion and sex; these rights are guaranteed to all persons under the DUE PROCESS and EQUAL PROTECTION clauses of the Constitution, as well as ACTS OF CONGRESS (e.g., Civil Rights Act 1964, Voting Rights Act 1965, Title IX 1972). The First Amendment protects liberties such as speech and religion rather than equal treatment, the 10th Amendment does not leave civil rights to the states alone, and the Supremacy Clause only gives federal law precedence over conflicting state law.'
          }
        ]
      }
    },
    {
      id: 'govcivr1-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz**`,
      exercise: {
        questions: [
          {
            prompt: "Year 14TH AMENDMENT was ratified, providing the Equal Protection Clause foundation for modern civil rights law.",
            answer: '1868',
            acceptableAnswers: ['1868'],
            hint: 'Reconstruction Amendment; followed 13th Am 1865; preceded 15th Am 1870.'
          },
          {
            prompt: "Year *BROWN v. BOARD OF EDUCATION* OVERRULED *Plessy v. Ferguson* and held school segregation unconstitutional.",
            answer: '1954',
            acceptableAnswers: ['1954'],
            hint: 'Warren unanimous; Topeka, Kansas; Thurgood Marshall argued.'
          },
          {
            prompt: "Year Title IX of the Education Amendments barred sex discrimination in federally funded education programs.",
            answer: '1972',
            acceptableAnswers: ['1972'],
            hint: 'Nixon signed it; it transformed women\'s athletics (EK 3.11.A.1.iii).'
          }
        ]
      }
    },
    {
      id: 'govcivr1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each constitutional provision to the civil right it protects.**`,
      exercise: {
        dropdowns: [
          {
            label: "Permanently abolished slavery after the Emancipation Proclamation freed enslaved people in the rebelling states: ___",
            options: ['13th Amendment', '14th Amendment', '15th Amendment', '19th Amendment']
          },
          {
            label: "No state may deny any person within its jurisdiction the equal protection of the laws: ___",
            options: ['13th Amendment', '14th Amendment', '15th Amendment', '19th Amendment']
          },
          {
            label: "The right to vote may not be denied on account of sex: ___",
            options: ['13th Amendment', '14th Amendment', '15th Amendment', '19th Amendment']
          }
        ],
        correctAnswers: ['13th Amendment', '14th Amendment', '19th Amendment'],
        hint1: '13th Amendment (1865) — permanently abolished slavery, a shift toward civil rights for the formerly enslaved (EK 3.12.A.1.i).',
        hint2: '14th Amendment (1868) — Equal Protection Clause; the basis of Brown v. Board (1954).',
        hint3: '19th Amendment (1920) — women\'s suffrage; the 15th Amendment (1870) covered race, not sex.'
      }
    },
    {
      id: 'govcivr1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "How does the STATE ACTION DOCTRINE limit the 14th Amendment, and how do federal CIVIL RIGHTS STATUTES reach PRIVATE DISCRIMINATION via the COMMERCE CLAUSE and 13th Amendment?",
            options: [
              "The 14th Amendment restricts only state actors, so Congress relied on the Commerce Clause in the Civil Rights Act of 1964 to bar private discrimination in public accommodations.",
              "The 14th Amendment reaches private discrimination directly, so Congress needed no commerce power and the Civil Rights Act of 1875 still governs hotels and restaurants across the country today.",
              "The state action doctrine bars Congress from regulating any private conduct, so the Civil Rights Act of 1964 binds only state and local government agencies.",
              "The 10th Amendment makes states police private discrimination, so Congress used the Spending Clause rather than the Commerce Clause only to fund state commissions.",
            ],
            correctAnswer: 0,
            explanation: 'STATE ACTION DOCTRINE + civil rights statutes: (1) STATE ACTION — 14th Am only STATE GOVERNMENT, not private; CIVIL RIGHTS CASES 1883 confirmed (struck CRA 1875 public accommodations); (2) Result: 14th Am alone insufficient for private discrimination; (3) COMMERCE CLAUSE WORKAROUND — CRA 1964 Title II (hotels, restaurants, theaters); HEART OF ATLANTA MOTEL 1964 + KATZENBACH v. MCCLUNG 1964 (Ollie\'s Barbecue); small local businesses covered; (4) 13TH AM WORKAROUND — directly prohibits slavery + "badges and incidents"; reaches PRIVATE; JONES v. ALFRED H. MAYER 1968 (CRA 1866 — private racial discrimination in housing under 13th Am); (5) PUBLIC FUNCTION — Marsh v. Alabama 1946 (company town), Smith v. Allwright 1944 (white primary); (6) ENTANGLEMENT — Shelley v. Kraemer 1948 (court enforcement of restrictive covenants = state action), Burton 1961; (7) Modern civil rights = (a) 14th Am state action + (b) Commerce statutes private + (c) 13th Am racial private + (d) public function/entanglement borderline.'
          },
          {
            question: "In *Grutter v. Bollinger* (2003), the Court upheld a law school's use of race as one factor in admissions to achieve a diverse student body; in *Students for Fair Admissions v. Harvard* (2023), it held that Harvard's and UNC's race-conscious admissions violated equal protection. What does this sequence illustrate?",
            options: [
              "An ongoing Court debate over whether affirmative action policies are consistent with the 14th Amendment's guarantees.",
              "A constitutional amendment, proposed by Congress and ratified by the states, that settled the affirmative action question for good.",
              "The Court's steady requirement, ever since Bakke, that public universities use fixed racial quotas in admissions.",
              "A shift from deciding affirmative action under the 14th Amendment to deciding it under the commerce clause and the 10th Amendment instead.",
            ],
            correctAnswer: 0,
            explanation: 'EK 3.13.A.1: affirmative action refers to policies intended to address workplace and educational disparities related to race, ethnic origin, gender, disability and age, and Supreme Court debate has focused on whether such policies are protected by the EQUAL PROTECTION CLAUSE of the 14th Amendment. Grutter (an illustrative case) and SFFA (holdings given in the stem) show that debate shifting as the Court\'s membership changed (EK 2.9.A.2). No amendment settled the issue, Bakke rejected fixed quotas rather than requiring them, and both cases were decided under the 14th Amendment (and Title VI), not the commerce clause.'
          }
        ]
      }
    }
  ]
}
