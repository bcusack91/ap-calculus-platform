export const govJudiciaryPart1Data = {
  topicSlug: 'gov-judiciary',
  sections: [
    {
      id: 'govjudic1-intro',
      type: 'text' as const,
      content: `
# ⚖️ The Federal Judiciary

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| Article III foundations |
| Federal court structure |
| Judicial review (*Marbury v. Madison*) |
| Judicial philosophies |
| Federalist 78 — the "least dangerous branch" |

> 🔑 Key idea: The federal judiciary derives its authority from ARTICLE III, exercises the power of JUDICIAL REVIEW (established in *Marbury v. Madison* 1803), and operates as the LEAST DANGEROUS BRANCH (Hamilton, *Federalist 78*) — possessing 'neither force nor will' but only JUDGMENT.
      `
    },
    {
      id: 'govjudic1-content',
      type: 'text' as const,
      content: `
## Article III Foundations

| Provision | Text | Significance |
|---|---|---|
| **Art III § 1** | 'The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish' | Creates SCOTUS directly; lower federal courts created by Congress (Judiciary Act 1789 created district + circuit courts) |
| **Art III § 1** | 'The Judges...shall hold their Offices during good Behaviour' | LIFE TENURE for federal judges absent impeachment — protects judicial independence |
| **Art III § 1** | 'shall, at stated Times, receive for their Services, a Compensation, which shall not be diminished during their Continuance in Office' | SALARY PROTECTION — Congress cannot reduce judicial salaries |
| **Art III § 2 cl. 1** | 'The judicial Power shall extend to all Cases, in Law and Equity, arising under this Constitution, the Laws of the United States, and Treaties' | FEDERAL QUESTION JURISDICTION |
| **Art III § 2 cl. 2** | SCOTUS has ORIGINAL jurisdiction over cases involving ambassadors + states; APPELLATE jurisdiction in all other cases | Most SCOTUS cases reach the Court via APPEAL |
| **Art III § 3** | Defines TREASON narrowly | Only crime defined in Constitution |

## Federal Court Structure

| Level | Courts | Function |
|---|---|---|
| **District Courts** | 94 trial courts (~677 judges) | Original jurisdiction; trial-level fact-finding |
| **Courts of Appeals** | 13 circuits (12 regional + Federal Circuit) (~179 judges) | Appellate review of district decisions; 3-judge panels; en banc review for major cases |
| **Supreme Court** | 1 (9 justices) | Final appellate court; selects ~70-80 cases/year from ~7,000-8,000 petitions |

## Judicial Review — Marbury v. Madison (1803)

| Element | Detail |
|---|---|
| Background | Outgoing John Adams' 'midnight appointments' of Federalist judges; new Jefferson Sec. of State Madison refused to deliver commission to William Marbury |
| Question | Could SCOTUS order delivery of the commission via writ of mandamus under Judiciary Act 1789 § 13? |
| Holding | Marshall: Marbury entitled to commission BUT Judiciary Act 1789 § 13 was UNCONSTITUTIONAL because it expanded SCOTUS's original jurisdiction beyond Art III § 2 cl. 2 — therefore SCOTUS could not issue the writ |
| Significance | Established JUDICIAL REVIEW — the power of federal courts to declare acts of Congress (and executive) unconstitutional |
| Famous quote | 'It is emphatically the province and duty of the Judicial Department to say what the law is' |

## Judicial Philosophies

| Philosophy | Core principle | Modern proponents |
|---|---|---|
| **Judicial Activism** | Court should actively interpret Constitution to address contemporary needs; may strike statutes; may overturn precedent | Warren Court (1953-69) — civil rights expansion; modern progressive justices |
| **Judicial Restraint** | Court should defer to elected branches; uphold statutes unless clearly unconstitutional; respect precedent | Frankfurter, Bickel, modern moderate justices |
| **Originalism** | Constitution should be interpreted according to ORIGINAL PUBLIC MEANING at time of ratification | Scalia, Thomas, Alito, Gorsuch, Barrett |
| **Living Constitution** | Constitution should be interpreted to evolve with contemporary values + circumstances | Brennan, Marshall, modern progressive justices |
| **Textualism** | Statutes interpreted according to ordinary meaning of text; little reliance on legislative history | Scalia, Gorsuch, Kavanaugh |
| **Stare Decisis** | Respect for prior judicial decisions; precedent should generally not be overturned | All justices in varying degrees; *Casey* 1992 plurality articulated 4-factor test |

## Federalist 78 — The 'Least Dangerous Branch'

> Hamilton, *Federalist 78* (1788) — REQUIRED AP Gov foundational document — argued the judiciary is the 'LEAST DANGEROUS' branch because:

| Argument | Detail |
|---|---|
| 'Neither force nor will, but merely judgment' | Court has no army (force) or budget (will) — only judgment; depends on executive for enforcement |
| LIFE TENURE necessary for independence | Judges must be insulated from political pressure to faithfully apply Constitution |
| JUDICIAL REVIEW implicit in Constitution | When statute conflicts w/ Constitution, Constitution must prevail because it is the SUPREME LAW |
| Court protects MINORITY rights | Independent judiciary essential to prevent 'tyranny of the majority' |
      `
    },
    {
      id: 'govjudic1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Article III & Judicial Review** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the significance of *Marbury v. Madison* (1803)?",
            options: [
              "*Marbury v. Madison* (1803) established the doctrine of JUDICIAL REVIEW — the power of federal courts to declare acts of Congress (and executive) unconstitutional; Chief Justice JOHN MARSHALL ruled that William Marbury was ENTITLED to his judicial commission, BUT that Section 13 of the Judiciary Act of 1789 was UNCONSTITUTIONAL because it purported to expand the Supreme Court's ORIGINAL JURISDICTION beyond what Article III § 2 cl. 2 authorized; Marshall's famous quote: 'It is emphatically the province and duty of the Judicial Department to say what the law is'; SIGNIFICANCE: Marbury made the federal judiciary a CO-EQUAL branch capable of checking Congress + executive; without judicial review, the Constitution would be merely advisory; cited in virtually every major constitutional case since",
              "There is no Marbury v. Madison case of any kind during the entire period from 1803 onward in any region of the United States with no John Marshall, no judicial review doctrine, no William Marbury, no Judiciary Act 1789 Section 13, no Article III § 2 cl. 2, and no co-equal federal judiciary of any kind during the entire period in any region",
              "Marbury v. Madison held that the Supreme Court has no power to review acts of Congress for constitutionality of any kind under any circumstance with no judicial review doctrine, no John Marshall, no Section 13 ruling, and no co-equal federal judiciary of any kind during the entire period from 1803 onward in any region of the United States during the period",
              "Marbury v. Madison was decided by Chief Justice Roger Taney and held that all judicial commissions issued by outgoing presidents are invalid of any kind under any circumstance with no John Marshall, no Section 13 ruling, no Judiciary Act 1789, and no judicial review doctrine of any kind during the entire period from 1803 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Marbury v. Madison (1803) established JUDICIAL REVIEW. Marshall: Marbury entitled to commission BUT Judiciary Act 1789 § 13 UNCONSTITUTIONAL because it expanded SCOTUS\'s ORIGINAL jurisdiction beyond Art III § 2 cl. 2. Famous: "It is emphatically the province and duty of the Judicial Department to say what the law is." Made federal judiciary CO-EQUAL — without judicial review Constitution merely advisory.'
          },
          {
            question: "Which best describes Hamilton's argument in *Federalist 78*?",
            options: [
              "*Federalist 78* (Hamilton, 1788) — REQUIRED AP Gov foundational document — argued the judiciary is the 'LEAST DANGEROUS' branch because it has 'neither FORCE nor WILL, but merely JUDGMENT' — the executive controls force (military, law enforcement), the legislature controls will (purse, lawmaking), but the judiciary depends on the executive for enforcement and on the legislature for budgets; Hamilton argued (1) LIFE TENURE is necessary to insulate judges from political pressure; (2) JUDICIAL REVIEW is implicit because when a statute conflicts with the Constitution, the Constitution as SUPREME LAW must prevail; (3) an independent judiciary protects MINORITY RIGHTS against 'tyranny of the majority'; SIGNIFICANCE: Federalist 78 is the foundational defense of judicial independence + judicial review, anticipating *Marbury v. Madison* by 15 years",
              "There is no Federalist 78 of any kind during the entire period from 1788 onward in any region of the United States with no Alexander Hamilton, no least-dangerous-branch argument, no force-will-judgment distinction, no life tenure, no judicial review, no minority rights protection, and no tyranny of the majority of any kind during the entire period in any region",
              "Federalist 78 argues that the judiciary is the MOST DANGEROUS branch and should be subject to direct popular election of any kind under any circumstance with no Alexander Hamilton, no life tenure defense, no judicial review defense, and no minority rights protection of any kind during the entire period from 1788 onward in any region of the United States during the period",
              "Federalist 78 was written by James Madison and argues that the judiciary should be subordinate to Congress of any kind under any circumstance with no Alexander Hamilton, no least-dangerous-branch argument, no judicial independence, and no judicial review defense of any kind during the entire period from 1788 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Federalist 78 (Hamilton 1788) = REQUIRED AP Gov foundational document. Judiciary = "LEAST DANGEROUS" branch — "neither FORCE nor WILL, but merely JUDGMENT" (executive=force, legislature=will). Arguments: (1) LIFE TENURE for independence; (2) JUDICIAL REVIEW implicit — Constitution as SUPREME LAW prevails over conflicting statutes; (3) protects MINORITY RIGHTS against tyranny of majority. Anticipates Marbury by 15 years.'
          }
        ]
      }
    },
    {
      id: 'govjudic1-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — name the year**`,
      exercise: {
        questions: [
          {
            prompt: "Year *Marbury v. Madison* established judicial review.",
            answer: '1803',
            acceptableAnswers: ['1803'],
            hint: 'Two years after Adams left office; Marshall on the Court since 1801.'
          },
          {
            prompt: "Year *Federalist 78* was published as part of the ratification debate.",
            answer: '1788',
            acceptableAnswers: ['1788'],
            hint: 'Same year Constitution ratified by 9th state (NH).'
          },
          {
            prompt: "Year of the Judiciary Act that created the lower federal courts (and Section 13 struck down in *Marbury*).",
            answer: '1789',
            acceptableAnswers: ['1789'],
            hint: 'Same year Washington inaugurated; First Congress.'
          }
        ]
      }
    },
    {
      id: 'govjudic1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each judicial philosophy to its core principle.**`,
      exercise: {
        dropdowns: [
          {
            label: "Constitution should be interpreted according to ORIGINAL PUBLIC MEANING at time of ratification: ___",
            options: ['Originalism', 'Living Constitution', 'Judicial Activism', 'Stare Decisis']
          },
          {
            label: "Court should DEFER to elected branches; uphold statutes unless clearly unconstitutional: ___",
            options: ['Judicial Activism', 'Judicial Restraint', 'Living Constitution', 'Originalism']
          },
          {
            label: "Constitution should EVOLVE with contemporary values + circumstances: ___",
            options: ['Originalism', 'Textualism', 'Living Constitution', 'Stare Decisis']
          }
        ],
        correctAnswers: ['Originalism', 'Judicial Restraint', 'Living Constitution'],
        hint1: 'Originalism (Scalia, Thomas, Alito, Gorsuch, Barrett) = ORIGINAL PUBLIC MEANING at ratification.',
        hint2: 'Judicial Restraint (Frankfurter, Bickel) = DEFER to elected branches; presume statutes constitutional.',
        hint3: 'Living Constitution (Brennan, Marshall) = Constitution EVOLVES with contemporary values.'
      }
    },
    {
      id: 'govjudic1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Article III + Federal Court Structure**`,
      exercise: {
        questions: [
          {
            question: "Which best describes the federal court structure created by Article III + the Judiciary Act of 1789?",
            options: [
              "FEDERAL COURT STRUCTURE: (1) ARTICLE III directly creates 'one supreme Court' but leaves 'inferior Courts' to Congress's discretion; (2) JUDICIARY ACT 1789 created the lower federal courts: 13 DISTRICT COURTS (one per state) + 3 CIRCUIT COURTS (geographic regions); (3) MODERN STRUCTURE: 94 DISTRICT COURTS (~677 judges) handle trials and original jurisdiction; 13 COURTS OF APPEALS (12 regional + Federal Circuit, ~179 judges) review district decisions on legal errors via 3-judge panels (or full en banc review for major cases); ONE SUPREME COURT with 9 justices selects ~70-80 cases/year from ~7,000-8,000 petitions; (4) ARTICLE III JUDGES (district + appeals + SCOTUS) have LIFE TENURE during 'good Behaviour' and SALARY PROTECTION — distinguishing them from Article I judges (e.g., bankruptcy, tax court) who serve fixed terms",
              "There is no federal court structure of any kind during the entire period from 1789 onward in any region of the United States with no Article III, no Judiciary Act 1789, no district courts, no courts of appeals, no Supreme Court, no life tenure, and no Article III vs. Article I judges of any kind during the entire period in any region",
              "Article III creates all federal courts including district + circuit courts directly with no role for Congress in creating inferior courts of any kind under any circumstance with no Judiciary Act 1789, no congressional discretion, and no historical evolution of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "All federal judges have fixed 6-year terms and serve at the pleasure of the President of any kind under any circumstance with no Article III life tenure, no good behavior standard, no salary protection, and no judicial independence of any kind during the entire period from 1789 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'FEDERAL COURT STRUCTURE: (1) Art III creates "one supreme Court" + leaves inferior courts to Congress; (2) Judiciary Act 1789: 13 district courts + 3 circuit courts. (3) Modern: 94 DISTRICT COURTS (~677 judges) trial; 13 COURTS OF APPEALS (12 regional + Federal Circuit, ~179 judges) — 3-judge panels + en banc; SCOTUS 9 justices ~70-80 cases/yr from ~7,000-8,000 petitions. (4) Art III judges = LIFE TENURE during "good Behaviour" + SALARY PROTECTION (vs Art I judges — bankruptcy/tax court — fixed terms).'
          },
          {
            question: "How does *Marbury v. Madison* establish the foundational logic of judicial review under Federalist 78?",
            options: [
              "MARSHALL'S MARBURY LOGIC mirrors Federalist 78 four-step argument: (1) The Constitution is the SUPREME LAW (Art VI Supremacy Clause + Federalist 78 'fundamental law'); (2) Statutes inconsistent with the Constitution are VOID (Federalist 78 — 'no legislative act, therefore, contrary to the Constitution, can be valid'); (3) It is the PROVINCE of courts to DECIDE WHAT THE LAW IS in cases before them (Marshall: 'the very essence of judicial duty'); (4) Therefore courts must APPLY the Constitution over conflicting statutes — this IS judicial review; SIGNIFICANCE: Marshall did not invent judicial review out of nothing but built on Federalist 78's logic + colonial-era precedents (e.g., Massachusetts Supreme Judicial Court had reviewed legislative acts) + state-court practice; Marbury made judicial review FEDERAL DOCTRINE rather than just theory or state practice",
              "There is no Marshall Marbury logic of any kind during the entire period from 1803 onward in any region of the United States with no Federalist 78 connection, no Constitution as supreme law argument, no statutes-must-conform argument, no judicial duty argument, no colonial precedents, no state-court practice, and no federal judicial review doctrine of any kind during the entire period in any region",
              "Marshall in Marbury rejected Federalist 78's argument and held that judicial review is unconstitutional of any kind under any circumstance with no Constitution as supreme law, no statutes-must-conform argument, no judicial duty argument, and no federal judicial review doctrine of any kind during the entire period from 1803 onward in any region of the United States during the period",
              "There is no Federalist 78 of any kind during the entire period from 1788 onward in any region of the United States with no Alexander Hamilton, no constitutional supremacy argument, no judicial review defense, no foundational document status, and no anticipation of Marbury of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Marshall\'s Marbury logic mirrors Federalist 78 4-step: (1) Constitution = SUPREME LAW (Art VI + Federalist 78 "fundamental law"); (2) Statutes inconsistent w/ Constitution = VOID (Federalist 78 "no legislative act...contrary to the Constitution, can be valid"); (3) Courts must DECIDE WHAT THE LAW IS in cases ("very essence of judicial duty"); (4) Courts must APPLY Constitution over conflicting statutes = judicial review. Marshall built on Federalist 78 + colonial-era + state-court precedents → made judicial review FEDERAL DOCTRINE.'
          }
        ]
      }
    }
  ]
}
