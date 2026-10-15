export const govCongressPart4Data = {
  topicSlug: 'gov-congress',
  sections: [
    {
      id: 'govcong4-intro',
      type: 'text' as const,
      content: `
# 🏛️ Congress

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| Congress × President: lawmaking, war, oversight |
| Congress × Judiciary: confirmation, jurisdiction, statutory interpretation |
| Congress × Bureaucracy: oversight, appropriations, delegation |
| Congress × Federalism: preemption, conditional spending, anti-commandeering |
| Congress × Parties: polarization, leadership |

> 🔑 Key idea: Congress's relationship with each other branch and with state governments has been transformed by polarization — modern Congress acts more as a partisan body than as a deliberative legislative branch.
      `
    },
    {
      id: 'govcong4-content',
      type: 'text' as const,
      content: `
## Congress × President

| Function | Constitutional basis | Modern dynamic |
|---|---|---|
| Lawmaking | Art I § 7 (presentment + veto + override) | Reconciliation bypasses need for presidential cooperation when same party controls Congress |
| War powers | Art I § 8 (declare war + fund military) vs. Art II § 2 (Commander in Chief) | Congress hasn't formally declared war since 1942; AUMFs (1973 War Powers Resolution + 2001/2002 AUMFs) substitute |
| Treaties | Art II § 2 (President negotiates; Senate 2/3 ratifies) | Modern presidents use executive agreements (no Senate ratification) for many international commitments |
| Confirmations | Art II § 2 (Senate "advice and consent") | Filibuster eliminated for executive + judicial nominations (2013/2017 nuclear option) |
| Oversight | Implied from legislative function (McGrain v. Daugherty 1927) | Congressional investigations (Watergate 1973-74; Iran-Contra 1987; Trump impeachments 2019/2021; January 6 Committee 2021-22) |
| Impeachment | Art I §§ 2-3; Art II § 4 | 4 presidential impeachments (Andrew Johnson 1868; Clinton 1998; Trump 2019, 2021); 0 Senate convictions |

## Congress × Judiciary

| Function | Description |
|---|---|
| **Court structure** | Congress establishes lower federal courts (Art III § 1); SCOTUS size set by statute (currently 9 since 1869) |
| **Jurisdiction** | Congress can regulate Supreme Court appellate jurisdiction (Art III § 2 cl. 2) — used in Reconstruction (Ex parte McCardle 1869) |
| **Confirmations** | Senate confirms federal judges + SCOTUS justices (Art II § 2); filibuster eliminated 2013 (lower courts) + 2017 (SCOTUS — Gorsuch confirmation) |
| **Statutory override** | Congress can pass new statute to override Court's statutory (not constitutional) interpretation — e.g., Lilly Ledbetter Fair Pay Act 2009 overrode Ledbetter v. Goodyear 2007 |
| **Constitutional override** | Constitutional amendment overrides Court's constitutional decision — 11th (overruled Chisholm v. Georgia 1793), 14th § 1 (overruled Dred Scott 1857), 16th (overruled Pollock 1895), 26th (overruled Oregon v. Mitchell 1970) |
| **Impeachment** | House can impeach federal judges (Art II § 4); 8 federal judges removed in U.S. history; 0 SCOTUS justices removed |

## Congress × Bureaucracy

| Mechanism | Description |
|---|---|
| **Statutory authorization** | Congress creates federal agencies + defines their authority through enabling statutes |
| **Appropriations** | Congress funds agencies through annual appropriations bills (power of the purse) |
| **Confirmation** | Senate confirms major agency heads (cabinet secretaries, agency commissioners) |
| **Oversight hearings** | Congressional committees hold hearings + conduct investigations |
| **Government Accountability Office** | GAO (formerly General Accounting Office) audits + investigates federal agencies for Congress |
| **Congressional Review Act 1996** | Congress can pass joint resolution disapproving agency rule within 60 legislative days; signed by President or veto-overridden |
| **Inspectors General** | IGs (created Inspector General Act 1978) audit agencies; report to Congress + agency head |

## Congress × Federalism

| Mechanism | Description | Example |
|---|---|---|
| **Preemption** | Federal law supersedes conflicting state law (Supremacy Clause) | Federal immigration law preempts state immigration enforcement |
| **Conditional spending** | Congress conditions federal funding on state policy compliance | National minimum drinking age (highway funds, *South Dakota v. Dole* 1987) |
| **Cooperative federalism grants** | Categorical + block grants tied to state implementation | Medicaid; ESEA Title I; Highway Trust Fund |
| **Anti-commandeering** | Congress CANNOT compel states to enact or enforce federal regulatory programs | *New York v. United States* 1992; *Printz v. United States* 1997; *Murphy v. NCAA* 2018 |

## Congress × Parties

| Era | Polarization level | Significance |
|---|---|---|
| 1900-1940 | High → low | Progressive era polarization → New Deal coalition |
| 1940-1970 | Low | Bipartisan consensus on Cold War + civil rights (cross-cutting Southern Democrats) |
| 1970-1990 | Rising | Realignment + Reagan revolution |
| 1990-PRESENT | Very high | Newt Gingrich (Speaker 1995-99) introduced confrontational party tactics; modern parties internally homogeneous + ideologically distant |

> 🔑 Polarization → reduced cross-party cooperation → reliance on reconciliation + executive orders → institutional dysfunction (frequent shutdowns, debt-ceiling crises, impeachments).
      `
    },
    {
      id: 'govcong4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Inter-Branch Relations** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the modern dynamics of Congressional war powers?",
            options: [
              "Congress has not declared war since World War II, so military action now rests on force authorizations and the President's commander-in-chief power",
              "Congress must declare war before any deployment, as the War Powers Resolution requires for every use of troops abroad",
              "Congress has declared war several times since Vietnam, so the President rarely acts without a formal declaration",
              "Congress has given up its war power by constitutional amendment after Vietnam, transferring it to the President"
            ],
            correctAnswer: 0,
            explanation: 'Congressional war powers eroded: (1) NO formal declaration since WWII (Dec 1941); (2) Korea, Vietnam, Gulf, Afghanistan, Iraq, Libya, Syria, Ukraine = AUMFs or executive; (3) War Powers Resolution 1973 (48-hr notification, 60-90 day withdrawal) routinely flouted; (4) Post-9/11 AUMFs (2001 al-Qaeda + 2002 Iraq) still in force 20+ years, used far beyond original scope; (5) Congress unable to pass replacements despite bipartisan recognition.'
          },
          {
            question: "How does modern partisan polarization affect Congress's institutional functioning?",
            options: [
              "Polarization cuts cross-party deals, raises party-line voting and gridlock, and pushes action into reconciliation and executive orders",
              "Polarization increases cross-party deals, since members facing safe primaries, strong parties, and united donors are freer to compromise",
              "Polarization has made committee chairs more powerful, since members now defer to seniority, expertise, and regional coalitions over party leaders",
              "Polarization has little effect on Congress, since the Constitution requires bipartisan majorities for all bills, nominations, and treaties"
            ],
            correctAnswer: 0,
            explanation: 'Polarization (highest in measured history per DW-NOMINATE; ~1995+) altered Congress: (1) REDUCED cross-party cooperation; (2) RELIANCE on reconciliation + executive orders; (3) FREQUENT SHUTDOWNS (2013, 2018-19) + debt-ceiling crises (2011, 2023); (4) INSTITUTIONAL DYSFUNCTION (Boehner 2015, McCarthy 2023, weeks-long vacancy 2023); (5) IMPEACHMENT POLITICIZATION (4 total: Johnson 1868, Clinton 1998, Trump 2019, 2021; 3 in 30 years; 0 convictions); (6) NORMS EROSION (cloture, conference committees, CRs/omnibus).'
          }
        ]
      }
    },
    {
      id: 'govcong4-input',
      type: 'input-boxes' as const,
      content: `**Identification — institutions + practices**`,
      exercise: {
        questions: [
          {
            prompt: "The 1973 statute requiring the President to notify Congress within 48 hours of deploying troops and to withdraw within 60-90 days absent congressional authorization. Three words.",
            answer: 'War Powers Resolution',
            acceptableAnswers: ['War Powers Resolution', 'war powers resolution', 'War Powers Act'],
            hint: 'Watergate-era reform; passed over Nixon\'s veto; routinely flouted but never repealed.'
          },
          {
            prompt: "The congressional agency that audits and investigates federal agencies for Congress (formerly the General Accounting Office). Three letters.",
            answer: 'GAO',
            acceptableAnswers: ['GAO', 'Government Accountability Office', 'general accounting office'],
            hint: 'Renamed in 2004; headed by the Comptroller General of the United States.'
          },
          {
            prompt: "The 1996 statute allowing Congress to disapprove an agency rule by joint resolution within 60 legislative days. Three words.",
            answer: 'Congressional Review Act',
            acceptableAnswers: ['Congressional Review Act', 'congressional review act', 'CRA'],
            hint: 'Used multiple times by Republican Congresses to reverse Obama-era + Biden-era regulations.'
          }
        ]
      }
    },
    {
      id: 'govcong4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each interaction to its constitutional or statutory basis.**`,
      exercise: {
        dropdowns: [
          {
            label: "Senate role in confirming presidential nominations and ratifying treaties: ___",
            options: ['Article I § 7 (presentment)', 'Article II § 2 (advice and consent)', 'Article III § 1 (judicial vesting)', 'Tenth Amendment (reserved powers)']
          },
          {
            label: "Constitutional doctrine prohibiting Congress from compelling states to enact or enforce federal regulatory programs: ___",
            options: ['Preemption', 'Anti-commandeering', 'Conditional spending', 'Necessary and Proper Clause']
          },
          {
            label: "Constitutional source of Congress's oversight authority over the executive branch: ___",
            options: ['Article I § 1 (vesting clause)', 'Article I § 8 (enumerated powers)', 'Implied power (McGrain v. Daugherty)', 'Tenth Amendment (reserved powers)']
          }
        ],
        correctAnswers: ['Article II § 2 (advice and consent)', 'Anti-commandeering', 'Implied power (McGrain v. Daugherty)'],
        hint1: '"He shall nominate, and by and with the Advice and Consent of the Senate..."',
        hint2: 'New York v. United States (1992); Printz v. United States (1997); Murphy v. NCAA (2018).',
        hint3: 'Inherent in legislative authority; needed to inform legislation.'
      }
    },
    {
      id: 'govcong4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "How does the modern administrative state interact with Congress's Article I authority?",
            options: [
              "Congress delegates broad rulemaking power to agencies by statute, then relies on oversight, funding, and new laws to check how agencies use it",
              "Agencies make law under Article II without any delegation from Congress, so Congress has no tools to check them",
              "Congress must approve every agency regulation by majority vote in both chambers before it can take effect, so agencies cannot make binding rules on their own authority",
              "Agencies are part of Congress, so legislators hire, supervise, and fire agency staff directly through committees"
            ],
            correctAnswer: 0,
            explanation: 'Admin state vs. Art I: (1) DELEGATION — agencies regulate under broad statutory grants (Clean Air 1970, SEA 1934); non-delegation last enforced 1935 (Schechter, Panama Refining); (2) APPROPRIATIONS check; (3) OVERSIGHT — committees + GAO audits + IGs; (4) CRA 1996 — Congress overturns rules by joint resolution; (5) JUDICIAL CHECK — major-questions (West Virginia v. EPA 2022) + Chevron overruled (Loper Bright 2024). Ongoing constitutional renegotiation legislative-executive boundary.'
          },
          {
            question: "What is the relationship between Senate confirmation and judicial polarization?",
            options: [
              "Once-bipartisan confirmations have become party-line fights, and ending the filibuster for nominees let narrow majorities confirm judges",
              "Confirmations have become more bipartisan since the Bork hearings, as senators now defer to the President's judicial choices",
              "Judicial polarization comes from judges' own elections, so Senate confirmation plays no role in shaping the ideological makeup of the federal courts",
              "The Senate now confirms judges by a two-thirds vote, which forces Presidents to pick moderates acceptable to both parties"
            ],
            correctAnswer: 0,
            explanation: 'Senate confirmation drives judicial polarization: (1) HISTORICAL NORM bipartisan through ~1980 (Scalia 98-0 1986, Ginsburg 96-3 1993, Breyer 87-9 1994); (2) ESCALATION (Bork 42-58 1987, Thomas 52-48 1991, Alito 58-42 2006); (3) NUCLEAR OPTIONS (2013 Reid eliminated filibuster executive + lower courts; 2017 McConnell eliminated for SCOTUS → Gorsuch 54-45); (4) GARLAND BLOCKADE (2016 McConnell refused 11 months); (5) PARTY-LINE (Kavanaugh 50-48 2018, Barrett 52-48 2020, Jackson 53-47 2022). Presidential elections partly judicial-confirmation elections.'
          }
        ]
      }
    }
  ]
}
