export const govJudiciaryPart4Data = {
  topicSlug: 'gov-judiciary',
  sections: [
    {
      id: 'govjudic4-intro',
      type: 'text' as const,
      content: `
# ⚖️ The Federal Judiciary

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| Judiciary × Congress |
| Judiciary × President |
| Judiciary × bureaucracy |
| Judiciary × federalism |
| Judiciary × public + media |

> 🔑 Key idea: The judiciary INTERACTS with all other branches and levels of government — Congress can alter its jurisdiction + size + budget; the president nominates + can defy rulings; the executive bureaucracy implements (or ignores) decisions; the states are bound by Supremacy Clause; and the public + media constrain the Court through perceived legitimacy.
      `
    },
    {
      id: 'govjudic4-content',
      type: 'text' as const,
      content: `
## Judiciary × Congress

| Tool | Direction | Detail |
|---|---|---|
| **Court size** | Congress → SCOTUS | Constitution silent on # justices; Congress sets via statute (currently 9 since 1869); FDR's 1937 court-packing failed but threat may have prompted 'switch in time' |
| **Lower-court creation** | Congress → SCOTUS | Constitution leaves 'inferior Courts' to Congress (Art III § 1); Judiciary Act 1789 + 1801 + 1869 + 1925 + 1980 + 2002 created modern structure |
| **Jurisdiction stripping** | Congress → SCOTUS | Art III § 2 cl. 2 'with such Exceptions...as the Congress shall make'; *Ex parte McCardle* 1869 upheld Congress stripping SCOTUS jurisdiction over particular case |
| **Budget** | Congress → SCOTUS | Congress controls federal court budgets (though salaries protected — Art III § 1) |
| **Confirmation** | Senate → SCOTUS | Senate 'advice and consent' (Art II § 2 cl. 2) — simple majority confirms; appointments can shift the Court's ideological balance (EK 2.11.B.1.iii) |
| **Impeachment** | Congress → judges | House majority impeaches; Senate 2/3 convicts; only 1 SCOTUS justice ever impeached (Samuel Chase 1804, acquitted); 8 lower-court judges removed |
| **Statutory override** | Congress → SCOTUS | Congress can override SCOTUS interpretation of statute by amending statute (e.g., Lilly Ledbetter Fair Pay Act 2009 overrode *Ledbetter v. Goodyear* 2007) |
| **Constitutional amendment** | Congress + states → SCOTUS | Can override SCOTUS constitutional interpretation (11th Am overrode *Chisholm v. Georgia* 1793; 16th overrode *Pollock v. Farmers' Loan* 1895; 26th overrode *Oregon v. Mitchell* 1970) |

## Judiciary × President

| Tool | Direction | Detail |
|---|---|---|
| **Nomination** | President → SCOTUS | Article II § 2 cl. 2; president nominates, Senate confirms |
| **Long-term impact** | President → SCOTUS | SCOTUS justices serve average ~16 years; presidents shape constitutional law for decades after leaving office |
| **Solicitor General** | President → SCOTUS | 'Tenth Justice' represents US in SCOTUS; SG positions reflect administration views |
| **DOJ litigation** | President → SCOTUS | DOJ brings federal cases; can decline to defend statutes (e.g., Obama declined to defend DOMA 2011) |
| **Pardon power** | President → courts | Art II § 2 cl. 1 absolute pardon power except impeachment; can negate criminal judgments |
| **Enforcement** | President → SCOTUS | Executive enforces SCOTUS rulings; Andrew Jackson allegedly said of *Worcester v. Georgia* (1832) 'John Marshall has made his decision; now let him enforce it' (apocryphal but illustrative); Eisenhower deployed 101st Airborne to enforce *Brown* in Little Rock 1957 |
| **Judicial review** | SCOTUS → President | *US v. Nixon* 1974 (CED illustrative example) limited executive privilege and forced release of the Watergate tapes; *Youngstown* 1952 limited executive seizure of steel mills |

## Judiciary × Bureaucracy

| Mechanism | Detail |
|---|---|
| **Lawsuits against agencies** | Individuals, businesses, states, and interest groups sue claiming an agency rule goes beyond its statute or violates the Constitution; courts can set the rule aside (EK 2.15.A.1) |
| **Implementing rulings** | Agencies carry out court decisions — federal officials enforced school desegregation after *Brown* — and slow implementation limits the Court's power (EK 2.11.B.1.iv) |
| **Multiple access points** | Groups that lose in Congress or at an agency can go to court; groups that lose in court can lobby Congress to change the statute (EK 2.15.B.1, 2.11.B.1.i) |

## Judiciary × Federalism

| Doctrine | Function |
|---|---|
| **Supremacy Clause** | Art VI cl. 2 — federal law preempts conflicting state law; *Cooper v. Aaron* 1958 confirmed states bound by SCOTUS interpretations |
| **Incorporation Doctrine** | 14th Amendment Due Process Clause incorporates Bill of Rights against states; nearly fully complete via *Gitlow* 1925 (1A speech), *Mapp* 1961 (4A), *Gideon* 1963 (6A counsel), *McDonald* 2010 (2A) |
| **Implied powers** | *McCulloch v. Maryland* 1819 (REQUIRED) — Necessary and Proper Clause supports broad federal power; states cannot tax federal institutions (EK 1.8.A.3) |
| **Limits on the commerce power** | *United States v. Lopez* 1995 (REQUIRED) — Congress exceeded the Commerce Clause; the Court can shift the federal-state balance toward the states (EK 1.8.A.2) |
| **State court systems** | Each state has own court system; state high courts are final on state law; SCOTUS reviews state cases only on federal questions |

## Judiciary × Public + Media

| Mechanism | Effect |
|---|---|
| **Court legitimacy** | Court depends on perceived LEGITIMACY for compliance with rulings; controversial decisions (Bush v. Gore, Citizens United, Dobbs) have eroded public trust per polling |
| **Polling data** | Gallup: Court approval at ~58% in 2000s, dropped to ~40-45% post-2020 — historic lows |
| **Cameras in courtroom** | SCOTUS still bans cameras (only audio of oral arguments — released same-day since COVID) |
| **Cert media coverage** | Major rulings receive saturation media coverage; reporters specialize (Linda Greenhouse, Adam Liptak, Joan Biskupic) |
| **Public opinion + Court** | Court generally tracks public opinion within 5-10 years (Robert Dahl thesis); but recent decisions (e.g., Dobbs) have moved counter-public opinion in some areas |
      `
    },
    {
      id: 'govjudic4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Judiciary × Other Branches** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the relationship between SCOTUS and Congress regarding court size?",
            options: [
              "The Constitution leaves the Court's size to Congress, and Congress has set it by statute at nine justices since 1869",
              "Article III fixes the Court at nine justices, so changing its size would need an amendment Congress cannot pass alone",
              "The President sets the Court's size by executive order, and FDR raised it to fifteen justices in 1937",
              "The Court sets its own size by majority vote, and it has kept nine justices since the founding in 1789"
            ],
            correctAnswer: 0,
            explanation: 'Constitution SILENT on # SCOTUS justices — Art III says "one supreme Court" without size. Congress sets via statute; changed multiple times: 6 (Judiciary Act 1789) → 7 (1807) → 9 (1837) → 10 (1863) → 7 (1866 to deny Andrew Johnson appointments) → 9 (Judiciary Act 1869, ever since). FDR COURT-PACKING 1937 — proposed to add up to 6 (one per justice over 70); Senate Judiciary rejected as "a measure which should be so emphatically rejected..."; despite plan\'s FAILURE, Owen Roberts SWITCHED ("switch in time that saved nine"). Modern progressive expansion proposals post-2020 — no traction.'
          },
          {
            question: "How does the executive branch interact with judicial decisions through enforcement and litigation?",
            options: [
              "The executive enforces court rulings and litigates through the Justice Department, as when Eisenhower sent troops to Little Rock",
              "The executive reviews court rulings before they take effect, as when Jackson vetoed Worcester v. Georgia in 1832",
              "The executive may overrule court rulings it litigated and lost, as when Truman reversed the Youngstown decision in 1952",
              "The executive has no role after a ruling, as when Eisenhower refused to enforce Brown in Little Rock in 1957"
            ],
            correctAnswer: 0,
            explanation: 'EXECUTIVE × JUDICIAL: (1) ENFORCEMENT — executive must enforce SCOTUS rulings; Jackson Worcester quote (apocryphal) + Eisenhower 101st Airborne to Little Rock 1957 to enforce Brown vs. Faubus; modern enforcement of immigration + sanctuary cities; (2) SOLICITOR GENERAL ("TENTH JUSTICE") represents US in SCOTUS; ~70-80% cert grant rate; (3) DOJ LITIGATION — declines to defend statutes (Obama-DOMA 2011, Trump-ACA 2018); (4) AMICUS BRIEFS routinely filed; (5) PARDON POWER (Art II § 2 cl 1) absolute except impeachment — Ford pardoned Nixon 1974, Trump pardoned ~1,500 J6 defendants 2025.'
          }
        ]
      }
    },
    {
      id: 'govjudic4-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — fill in the blank**`,
      exercise: {
        questions: [
          {
            prompt: "Year of FDR's failed court-packing plan that may have prompted the 'switch in time'.",
            answer: '1937',
            acceptableAnswers: ['1937'],
            hint: 'After his 1936 landslide reelection.'
          },
          {
            prompt: "Number of Supreme Court justices set by the Judiciary Act of 1869 (and held ever since).",
            answer: '9',
            acceptableAnswers: ['9', 'nine'],
            hint: 'Currently the same number.'
          },
          {
            prompt: "Year Eisenhower deployed the 101st Airborne to Little Rock to enforce *Brown v. Board*.",
            answer: '1957',
            acceptableAnswers: ['1957'],
            hint: '3 years after Brown decision; Sputnik year.'
          }
        ]
      }
    },
    {
      id: 'govjudic4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each tool/doctrine to its function in judiciary-other branch interactions.**`,
      exercise: {
        dropdowns: [
          {
            label: "Allows Congress to override SCOTUS interpretation of a statute by amending the statute (e.g., Lilly Ledbetter Fair Pay Act 2009): ___",
            options: ['Statutory override', 'Constitutional amendment', 'Jurisdiction stripping', 'Court-packing']
          },
          {
            label: "Allows Congress + states to override SCOTUS constitutional interpretations (e.g., 11th, 16th, 26th Amendments): ___",
            options: ['Statutory override', 'Constitutional amendment', 'Jurisdiction stripping', 'Senate filibuster']
          },
          {
            label: "Empowers SCOTUS to review acts of Congress and executive (Marbury 1803): ___",
            options: ['Statutory override', 'Constitutional amendment', 'Judicial review', 'Solicitor General']
          }
        ],
        correctAnswers: ['Statutory override', 'Constitutional amendment', 'Judicial review'],
        hint1: 'Statutory override = e.g., Ledbetter Fair Pay Act 2009 overrode SCOTUS Ledbetter 2007.',
        hint2: 'Constitutional amendment = 11th overrode Chisholm 1793; 16th overrode Pollock 1895; 26th overrode Oregon v. Mitchell 1970.',
        hint3: 'Judicial review = Marbury 1803 — SCOTUS may declare acts of Congress + executive unconstitutional.'
      }
    },
    {
      id: 'govjudic4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Long-term Presidential Impact + Checks on the Court**`,
      exercise: {
        questions: [
          {
            question: "How does presidential SCOTUS appointment power create long-term influence beyond a presidency?",
            options: [
              "Life tenure lets justices serve for decades, so a President's few appointments can shape the law long after leaving office",
              "Justices serve ten-year terms, so each President usually replaces most of the Court",
              "Justices must retire when the appointing President leaves, so influence ends with that administration",
              "The Senate chooses which vacancies a President may fill, so appointments rarely reflect presidential ideology over the long term"
            ],
            correctAnswer: 0,
            explanation: 'Presidential SCOTUS appointment power → LONG-TERM IDEOLOGICAL INFLUENCE far beyond presidency. (1) AVERAGE TENURE ~16-25 years (Scalia 30, Stevens 35, Thomas 33+, Ginsburg 27); (2) NUMERICAL VARIANCE by chance — Carter 0, Trump term 1 = 3 (Gorsuch 2017 + Kavanaugh 2018 + Barrett 2020), Washington 11, FDR 9; (3) CEMENTED 6-3 conservative majority → Dobbs 2022 and SFFA 2023 were DECIDED AFTER TRUMP LEFT OFFICE (EK 2.5.A.2, 2.9.A.2); (4) GENERATIONAL IMPACT — Reagan-era (Scalia 1986, Kennedy 1988, Thomas 1991) shaped law into 2010s; (5) STRATEGIC YOUTH — Barrett 48, Kavanaugh 53, Gorsuch 49 → decades of influence.'
          },
          {
            question: "Angered by Supreme Court rulings on prayer in public schools, members of Congress introduce a bill that would bar the Supreme Court from hearing any appeal involving school prayer. Which check on the judiciary does this bill represent?",
            options: [
              "Removing the Court's jurisdiction over a category of cases",
              "Amending a federal statute to override the Court's reading of that statute",
              "Ratifying a constitutional amendment that reverses the Court's earlier rulings",
              "Impeaching and then removing the justices who joined the majority opinions"
            ],
            correctAnswer: 0,
            explanation: 'EK 2.11.B.1.v: Congress can limit the Court by enacting legislation that removes the Court\'s jurisdiction to hear a type of case on appeal (Article III lets Congress make "Exceptions" to the Court\'s appellate jurisdiction). The school-prayer rulings (Engel v. Vitale is a required case) were constitutional interpretations, so amending a statute would not reverse them; an amendment and impeachment are different checks that the bill does not use.'
          }
        ]
      }
    }
  ]
}
