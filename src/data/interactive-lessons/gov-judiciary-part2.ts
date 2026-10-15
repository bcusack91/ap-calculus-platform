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
| Cert process — how cases reach SCOTUS |
| Oral argument + conference + opinion drafting |
| Types of opinions (majority, concurring, dissenting, plurality) |
| Stare decisis + overturning precedent |
| Judicial nominations + confirmations |

> 🔑 Key idea: Most SCOTUS decisions go through a multi-step process — CERT PETITION → CERT GRANT (RULE OF FOUR) → BRIEFING → ORAL ARGUMENT → CONFERENCE → OPINION ASSIGNMENT → DRAFTING → CIRCULATION → ANNOUNCEMENT — that takes a year or more from start to finish.
      `
    },
    {
      id: 'govjudic2-content',
      type: 'text' as const,
      content: `
## Cert Process

| Step | Detail |
|---|---|
| **Cert petition filed** | Losing party in lower court files PETITION FOR WRIT OF CERTIORARI; ~7,000-8,000 filed annually |
| **Cert pool review** | Most justices participate in 'cert pool' — clerks divide petitions and write memos summarizing each |
| **Discuss list** | Chief Justice circulates 'discuss list' of petitions worth considering; ~99% of petitions denied without further consideration |
| **Conference vote** | Justices vote on cert grant; RULE OF FOUR — only 4 of 9 votes needed to grant cert (minority protection) |
| **Cert granted** | ~70-80 cases per year (~1% of petitions); briefing schedule established |
| **Cert denied** | ~99% of petitions; lower court ruling stands; not a ruling on merits |

## Briefing + Oral Argument + Conference + Opinion

| Step | Detail |
|---|---|
| **Briefing** | Petitioner brief (50 pages) + respondent brief + reply brief + AMICUS CURIAE briefs (often dozens) |
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
| **Plurality** | When no opinion gets 5 votes, plurality (most votes) is precedent on narrowest grounds (*Marks v. United States* rule) |
| **Per curiam** | Unsigned opinion of the Court |
| **In chambers** | Single-justice opinion (e.g., emergency stay) |

## Stare Decisis + Overturning Precedent

| Element | Detail |
|---|---|
| **Stare decisis defined** | 'Stand by what is decided' — respect for prior judicial decisions; provides PREDICTABILITY + STABILITY |
| **Casey 4-factor test** (1992) | (1) Workability of rule; (2) reliance interests; (3) doctrinal development; (4) factual changes |
| **Major overrulings** | *Brown v. Board* (1954) overruled *Plessy v. Ferguson* (1896); *Lawrence v. Texas* (2003) overruled *Bowers v. Hardwick* (1986); *Dobbs v. Jackson Women's Health* (2022) overruled *Roe v. Wade* (1973) + *Casey* (1992); *Janus v. AFSCME* (2018) overruled *Abood* (1977) |
| **Recent debate** | Modern conservative majority has overturned multiple precedents (Dobbs, Janus, Citizens United partial, Bruen partial) — generating debate about stare decisis |

## Judicial Nominations + Confirmations

| Step | Detail |
|---|---|
| **Vacancy** | Vacancy occurs (death, retirement, resignation); president nominates |
| **Vetting** | White House counsel + ABA review nominee (Trump dropped ABA pre-nomination role) |
| **Senate Judiciary Committee** | Committee hearings (sometimes contentious — Bork 1987, Thomas 1991, Kavanaugh 2018); committee vote |
| **Filibuster history** | Until 2017, filibuster could block SCOTUS nominees (60 votes needed); McConnell invoked NUCLEAR OPTION 2.0 (April 2017) — eliminated filibuster for SCOTUS nominees (Gorsuch confirmed 54-45) |
| **Floor vote** | Simple majority confirms; tie broken by VP |
| **Modern partisan tilt** | Trump's 3 SCOTUS appointments (Gorsuch 2017, Kavanaugh 2018, Barrett 2020) cemented 6-3 conservative majority |
      `
    },
    {
      id: 'govjudic2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Cert Process & Opinions** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the 'Rule of Four' for granting certiorari?",
            options: [
              "Four of nine justices can grant certiorari, letting a minority place a case on the docket even though five votes decide it",
              "Four circuit courts must disagree before the Court may grant certiorari, so most legal splits are settled below",
              "Four of nine justices must join an opinion for it to set binding precedent for the lower federal courts",
              "Four justices may overrule a precedent if the Chief Justice agrees, since that makes a working majority"
            ],
            correctAnswer: 0,
            explanation: 'RULE OF FOUR: only 4 of 9 justices needed to GRANT cert (5 needed for MAJORITY on merits). (1) MINORITY PROTECTION — minority (4) can force Court to hear; (2) PRACTICAL — ~1% granted (~70-80 of ~7,000-8,000); (3) ORIGIN — informal rule after Judiciary Act 1925 (Judges\' Bill) gave SCOTUS broad cert discretion; (4) "Rule of four to grant, five to win" — cert grant doesn\'t guarantee victory.'
          },
          {
            question: "Which best describes the doctrine of stare decisis and recent SCOTUS practice?",
            options: [
              "Courts follow precedent for stability, yet the Roberts Court has overruled long-standing decisions such as Roe",
              "Courts must follow every precedent forever, so the Roberts Court has never overruled a prior constitutional decision",
              "Precedents bind only when set by unanimous votes, so the Roberts Court has overruled every split decision since 2020",
              "Stare decisis binds Congress to its past statutes, so the Roberts Court has struck down laws that conflict with older acts"
            ],
            correctAnswer: 0,
            explanation: 'STARE DECISIS = "stand by what is decided" → PREDICTABILITY + STABILITY. Casey (1992) 4-factor: (1) WORKABILITY; (2) RELIANCE INTERESTS; (3) DOCTRINAL DEVELOPMENT; (4) FACTUAL CHANGES. Modern conservative majority overrulings: Dobbs (2022) overruled Roe + Casey; Janus (2018) overruled Abood; Citizens United (2010) overruled parts of Austin + McConnell. Significant debate whether stare decisis remains meaningful constraint.'
          }
        ]
      }
    },
    {
      id: 'govjudic2-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — fill in the number**`,
      exercise: {
        questions: [
          {
            prompt: "Number of votes needed to GRANT certiorari (Rule of Four).",
            answer: '4',
            acceptableAnswers: ['4', 'four'],
            hint: 'Minority protection — only need majority to win on merits.'
          },
          {
            prompt: "Number of justices on the Supreme Court (since 1869).",
            answer: '9',
            acceptableAnswers: ['9', 'nine'],
            hint: 'Set by statute, not Constitution; Judiciary Act 1869.'
          },
          {
            prompt: "Year filibuster eliminated for SCOTUS nominees (nuclear option 2.0).",
            answer: '2017',
            acceptableAnswers: ['2017'],
            hint: 'Same year Gorsuch confirmed 54-45.'
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
            label: "When no opinion gets 5 votes; precedent established on NARROWEST GROUNDS (Marks rule): ___",
            options: ['Majority opinion', 'Concurring opinion', 'Per curiam opinion', 'Plurality opinion']
          }
        ],
        correctAnswers: ['Concurring opinion', 'Dissenting opinion', 'Plurality opinion'],
        hint1: 'Concurring = agrees with result, different reasoning.',
        hint2: 'Dissenting = disagrees with majority; e.g., Harlan in Plessy vindicated by Brown.',
        hint3: 'Plurality = no 5-vote majority; precedent on narrowest grounds per Marks v. United States.'
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
            question: "How did the Judiciary Act of 1925 (Judges' Bill) transform SCOTUS's role?",
            options: [
              "It gave the Court broad discretion through certiorari, letting it choose the few cases of national importance it hears",
              "It required the Court to hear every appeal from federal courts, expanding its docket to thousands of cases a year",
              "It fixed the Court at nine justices and barred Congress from changing the Court's size again",
              "It granted the Court original jurisdiction over all federal crimes, making it the main trial court for felony cases nationwide"
            ],
            correctAnswer: 0,
            explanation: 'JUDICIARY ACT 1925 ("Judges\' Bill," championed by CJ Taft) → BROAD DISCRETIONARY JURISDICTION via cert. (1) BEFORE 1925 — must hear most appeals → unmanageable; (2) AFTER 1925 — chooses via CERT (~1% granted); (3) MODERN — shifted from ERROR-CORRECTION court → LAW-DECLARATION court (major constitutional + statutory questions of national importance); (4) RULE OF FOUR developed informally; (5) IMPACT — ~70-80 cases/year (down from ~250+) focused on circuit splits + major constitutional + national importance.'
          }
        ]
      }
    }
  ]
}
