export const govJudiciaryPart2Data = {
  topicSlug: 'gov-judiciary',
  sections: [
    {
      id: 'govjudic2-intro',
      type: 'text' as const,
      content: `
# ⚖️ The Federal Judiciary

**Part 2 of 7 — Key Processes**

---

| Section |
|---|
| How cases reach SCOTUS |
| Oral argument + conference + opinion drafting |
| Types of opinions (majority, concurring, dissenting, plurality) |
| Stare decisis + overturning precedent |
| Judicial nominations + confirmations |

> 🔑 Key idea: The Supreme Court hears a small number of appeals each year, decides them through MAJORITY opinions that set PRECEDENT (with CONCURRING and DISSENTING opinions alongside), relies on STARE DECISIS while sometimes overturning precedent as its membership changes, and is shaped over decades by PRESIDENTIAL APPOINTMENTS and SENATE CONFIRMATION.
      `
    },
    {
      id: 'govjudic2-content',
      type: 'text' as const,
      content: `
## How Cases Reach SCOTUS

Almost every Supreme Court case arrives on APPEAL from a federal court of appeals or a state supreme court. The losing party asks the Court to hear the case, and the justices choose only about 70-80 of the ~7,000-8,000 requests each year (the formal request is called a petition for a writ of certiorari). When the Court declines, the lower-court ruling stands. The mechanics of choosing cases are not tested; what matters for the exam is what the Court does with the cases it decides.

## Briefing + Oral Argument + Conference + Opinion

| Step | Detail |
|---|---|
| **Briefing** | Petitioner brief (50 pages) + respondent brief + reply brief + AMICUS CURIAE ('friend of the court') briefs from interest groups (EK 5.6.A.1) — often dozens |
| **Oral argument** | Typically 30 min/side; justices interrupt frequently; recorded + transcripts released same day |
| **Conference** | Friday after argument; only justices present; CJ speaks first then by seniority; tentative vote |
| **Opinion assignment** | If CJ in majority, CJ assigns; if not, most senior justice in majority assigns |
| **Drafting + circulation** | Drafts circulated; justices may join, write concurring/dissenting opinion, or change votes; can take months |
| **Announcement** | Decisions announced from bench; full opinions published |

## Types of Opinions

| Opinion type | Definition |
|---|---|
| **Majority** | Opinion of 5+ justices establishing binding precedent |
| **Concurring** | Justice agrees w/ result but writes separately to explain different reasoning |
| **Dissenting** | Justice disagrees w/ majority; not binding but may influence future cases (e.g., Harlan's *Plessy* dissent vindicated by *Brown*) |
| **Plurality** | When no single opinion gets 5 votes, the opinion with the most votes announces the judgment |
| **Per curiam** | Unsigned opinion of the Court |
| **In chambers** | Single-justice opinion (e.g., emergency stay) |

## Stare Decisis + Overturning Precedent

| Element | Detail |
|---|---|
| **Stare decisis defined** | 'Stand by what is decided' — respect for prior judicial decisions; provides PREDICTABILITY + STABILITY |
| **Major overrulings** | *Brown v. Board* (1954) overruled the 'separate but equal' doctrine of *Plessy v. Ferguson* (1896); *Dobbs v. Jackson Women's Health* (2022) overruled *Roe v. Wade* (1973) + *Casey* (1992) |
| **Why precedent changes** | EK 2.9.A.2: ideological changes in the Court's composition due to PRESIDENTIAL APPOINTMENTS have led the Court to establish new precedents or reject existing ones — e.g., the 6-3 majority formed by 2017-2020 appointments decided *Dobbs* |
| **The debate** | Overturning precedent fuels the activism vs restraint debate (EK 2.11.A.1): critics call it activism; supporters say a wrongly decided precedent should not stand |

## Judicial Nominations + Confirmations

| Step | Detail |
|---|---|
| **Vacancy** | Vacancy occurs (death, retirement, resignation); president nominates |
| **Vetting** | White House counsel + ABA review nominee (Trump dropped ABA pre-nomination role) |
| **Senate Judiciary Committee** | Committee hearings (sometimes contentious — Bork 1987, Thomas 1991, Kavanaugh 2018); committee vote |
| **Floor vote** | Simple majority confirms; tie broken by VP |
| **Modern partisan tilt** | Trump's 3 SCOTUS appointments (Gorsuch 2017, Kavanaugh 2018, Barrett 2020) cemented 6-3 conservative majority — the president's longest-lasting influence comes from life-tenured judicial appointments (EK 2.5.A.2) |
      `
    },
    {
      id: 'govjudic2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Precedent & Opinions** 🎯`,
      exercise: {
        questions: [
          {
            question: "Three new justices joined the Supreme Court between 2017 and 2020, and in 2022, in *Dobbs v. Jackson Women's Health Organization*, the Court overruled its 1973 precedent recognizing a constitutional right to abortion. Which concept does this sequence best illustrate?",
            options: [
              "Ideological changes in the Court's membership through presidential appointments can lead it to reject existing precedents",
              "Congress can pass legislation that modifies the impact of a prior Supreme Court decision",
              "Judicial restraint requires the Court to keep its earlier precedents in place in every case",
              "Life tenure keeps the Court's ideological balance the same from one decade to the next"
            ],
            correctAnswer: 0,
            explanation: 'EK 2.9.A.2: ideological changes in the composition of the Court due to presidential appointments have led it to establish new precedents or reject existing ones. Dobbs (2022) overruled a 1973 precedent after appointments created a 6-3 majority. Congress did not pass a law here; restraint favors keeping precedent but does not require it; and life tenure is exactly why each new appointment can shift the Court for decades (EK 2.5.A.2).'
          },
          {
            question: "Which best describes the doctrine of stare decisis and recent SCOTUS practice?",
            options: [
              "Courts follow precedent for stability, yet the Court has overruled long-standing decisions as in Dobbs",
              "Courts must follow every precedent forever, so the Roberts Court has never overruled a prior constitutional decision",
              "Precedents bind only when set by unanimous votes, so the Roberts Court has overruled every split decision since 2020",
              "Stare decisis binds Congress to its past statutes, so the Roberts Court has struck down laws that conflict with older acts"
            ],
            correctAnswer: 0,
            explanation: 'STARE DECISIS = "stand by what is decided" → PREDICTABILITY + STABILITY. Courts usually follow precedent (EK 2.9.A.1), but appointments that change the Court\'s ideology can lead it to reject precedent (EK 2.9.A.2): Dobbs (2022) overruled nearly 50 years of abortion precedent; Brown (1954) rejected Plessy\'s separate-but-equal doctrine. Significant debate whether stare decisis remains a meaningful constraint.'
          }
        ]
      }
    },
    {
      id: 'govjudic2-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz**`,
      exercise: {
        questions: [
          {
            prompt: "Latin term for the 'friend of the court' brief an interest group files to give justices more information about a case.",
            answer: 'amicus curiae',
            acceptableAnswers: ['amicus curiae', 'amicus', 'amicus brief', 'amicus curiae brief'],
            hint: 'EK 5.6.A.1.'
          },
          {
            prompt: "Number of justices on the Supreme Court (since 1869).",
            answer: '9',
            acceptableAnswers: ['9', 'nine'],
            hint: 'Set by statute, not Constitution; Judiciary Act 1869.'
          },
          {
            prompt: "Type of opinion written by a justice who disagrees with the Court's decision (one word).",
            answer: 'dissenting',
            acceptableAnswers: ['dissenting', 'dissent', 'dissenting opinion', 'a dissent'],
            hint: 'Not binding, but can shape future cases — Harlan in Plessy.'
          }
        ]
      }
    },
    {
      id: 'govjudic2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each opinion type to its definition.**`,
      exercise: {
        dropdowns: [
          {
            label: "Justice agrees with the result but writes separately to explain DIFFERENT REASONING: ___",
            options: ['Majority opinion', 'Concurring opinion', 'Dissenting opinion', 'Per curiam opinion']
          },
          {
            label: "Justice DISAGREES with majority; not binding but may influence future cases: ___",
            options: ['Majority opinion', 'Concurring opinion', 'Dissenting opinion', 'Plurality opinion']
          },
          {
            label: "Opinion joined by at least five justices that states the Court's holding and sets BINDING PRECEDENT: ___",
            options: ['Majority opinion', 'Concurring opinion', 'Dissenting opinion', 'Plurality opinion']
          }
        ],
        correctAnswers: ['Concurring opinion', 'Dissenting opinion', 'Majority opinion'],
        hint1: 'Concurring = agrees with result, different reasoning.',
        hint2: 'Dissenting = disagrees with majority; e.g., Harlan in Plessy vindicated by Brown.',
        hint3: 'Majority = the opinion of the Court; lower courts must follow it.'
      }
    },
    {
      id: 'govjudic2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Judicial Nominations & Process**`,
      exercise: {
        questions: [
          {
            question: "How has the modern judicial nomination process become more partisan and contentious?",
            options: [
              "From the Bork fight in 1987 to the 2017 end of the filibuster, confirmations have turned into party-line battles",
              "Since the 1980s, nominees have needed 67 Senate votes, so presidents now choose only consensus moderates",
              "Since the 1990s, the House has shared confirmation duties, so nominees face two hostile chambers",
              "The Senate stopped holding hearings after 1987, so nominees are confirmed quickly on voice votes without any debate at all"
            ],
            correctAnswer: 0,
            explanation: 'Modern judicial nominations INCREASINGLY PARTISAN: (1) BORK 1987 — rejected 42-58 ("to bork"); (2) THOMAS 1991 — Hill testimony, 52-48; (3) FILIBUSTER USE 2003-05 + Gang of 14; (4) NUCLEAR OPTION 1.0 — Reid 2013 (lower courts + executive); (5) GARLAND BLOCKADE 2016 — McConnell 11-month refusal; (6) NUCLEAR OPTION 2.0 — McConnell 2017 (SCOTUS) → Gorsuch 54-45; (7) KAVANAUGH 2018 — Ford testimony, 50-48 (narrowest since Stanley Matthews 1881); (8) BARRETT 2020 — 8 days before election (vs. Garland refused 8 months before).'
          },
          {
            question: "In 1954 the Supreme Court unanimously ordered an end to racial segregation in public schools, a ruling that was deeply unpopular in much of the country. Which feature of the federal judiciary most directly allowed the justices to issue it?",
            options: [
              "Life tenure, which frees justices from having to win reelection or reappointment",
              "Senate confirmation, which requires justices to follow the views of the Senate majority",
              "Original jurisdiction, which lets the Court decide any case before lower courts hear it",
              "Judicial restraint, which requires justices to defer to the decisions of elected officials"
            ],
            correctAnswer: 0,
            explanation: 'EK 2.10.A.1: LIFE TENURE allows the Court to function independent of the current political climate, so it can deliver controversial or unpopular decisions — which in turn fuels debate about the Court\'s power. Brown v. Board (1954) is a required case. Senate confirmation happens once and does not bind later votes; the Court hears Brown-type cases on appeal, not under original jurisdiction; and restraint would have pointed toward deferring to the segregation laws, not striking them.'
          }
        ]
      }
    }
  ]
}
