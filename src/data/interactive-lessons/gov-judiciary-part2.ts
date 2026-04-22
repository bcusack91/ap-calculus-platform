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
              "RULE OF FOUR is the SCOTUS internal procedural rule that only 4 of 9 justices need to vote to GRANT a writ of certiorari (cert) for a case to be heard, even though 5 votes are needed for a MAJORITY DECISION on the merits; SIGNIFICANCE: (1) MINORITY PROTECTION — Rule of Four allows a minority of justices (4) to force the Court to consider a case the majority might prefer to avoid; (2) PRACTICAL IMPACT — only ~1% of cert petitions granted (~70-80 cases/year of ~7,000-8,000 petitions); (3) HISTORICAL ORIGIN — informal rule developed after the Judiciary Act of 1925 (Judges' Bill) gave SCOTUS broad cert discretion; (4) STRATEGIC USE — sometimes called 'rule of four to grant, five to win' — even with cert granted, petitioner may not have 5 votes for victory on merits",
              "There is no Rule of Four of any kind during the entire period from 1925 onward in any region of the United States with no minority protection, no cert petition system, no Judiciary Act 1925, no Judges' Bill, no rule of four to grant five to win, and no SCOTUS cert discretion of any kind during the entire period in any region",
              "The Rule of Four requires 4 justices to vote to GRANT cert and 4 justices to vote in favor on the merits of any kind under any circumstance with no requirement for 5 votes for majority decision, no minority protection function, and no Judiciary Act 1925 origin of any kind during the entire period from 1925 onward in any region of the United States during the period",
              "The Rule of Four requires unanimous consent of all 9 justices to grant cert of any kind under any circumstance with no minority protection, no 4-vote threshold, and no Judiciary Act 1925 origin of any kind during the entire period from 1925 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'RULE OF FOUR: only 4 of 9 justices needed to GRANT cert (5 needed for MAJORITY on merits). (1) MINORITY PROTECTION — minority (4) can force Court to hear; (2) PRACTICAL — ~1% granted (~70-80 of ~7,000-8,000); (3) ORIGIN — informal rule after Judiciary Act 1925 (Judges\' Bill) gave SCOTUS broad cert discretion; (4) "Rule of four to grant, five to win" — cert grant doesn\'t guarantee victory.'
          },
          {
            question: "Which best describes the doctrine of stare decisis and recent SCOTUS practice?",
            options: [
              "STARE DECISIS ('stand by what is decided') is the doctrine that courts should generally RESPECT PRIOR JUDICIAL DECISIONS, providing PREDICTABILITY + STABILITY in the law; *Planned Parenthood v. Casey* (1992) articulated a 4-FACTOR TEST for overruling: (1) WORKABILITY of the rule; (2) RELIANCE INTERESTS that have built up; (3) DOCTRINAL DEVELOPMENT — has the rule been undermined by other doctrine; (4) FACTUAL CHANGES — have circumstances changed; HOWEVER, the modern conservative majority has overruled multiple precedents — *Dobbs v. Jackson Women's Health* (2022) overruled *Roe v. Wade* (1973) + *Casey* (1992); *Janus v. AFSCME* (2018) overruled *Abood* (1977) on public-sector union dues; *Citizens United* (2010) overruled parts of *Austin* + *McConnell*; this has generated significant debate about whether stare decisis remains a meaningful constraint",
              "There is no stare decisis doctrine of any kind during the entire period from the founding onward in any region of the United States with no Casey 4-factor test, no workability factor, no reliance interests, no doctrinal development, no factual changes, no Dobbs, no Janus, no Citizens United, and no debate about stare decisis of any kind during the entire period in any region",
              "Stare decisis is an absolute doctrine and the Supreme Court has never overruled a prior decision of any kind under any circumstance with no Brown v. Board overruling Plessy, no Lawrence v. Texas overruling Bowers, no Dobbs overruling Roe + Casey, and no Janus overruling Abood of any kind during the entire period from the founding onward in any region of the United States during the period",
              "The Supreme Court has overruled ALL of its prior decisions and stare decisis is irrelevant to modern SCOTUS practice of any kind under any circumstance with no Casey 4-factor test, no respect for precedent, and no predictability or stability function of any kind during the entire period from the founding onward in any region of the United States during the period"
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
              "Modern judicial nominations have become INCREASINGLY PARTISAN and CONTENTIOUS through several developments: (1) BORK NOMINATION 1987 — Robert Bork rejected 42-58 after intense ideological campaign ('to bork' became a verb meaning to defeat through coordinated opposition); (2) THOMAS HEARINGS 1991 — Anita Hill testimony, narrow 52-48 confirmation; (3) FILIBUSTER USE — Democrats filibustered Bush 43 lower-court nominees (2003-05), 'Gang of 14' compromise (2005); (4) NUCLEAR OPTION 1.0 — Reid eliminated filibuster for lower-court + executive nominations 2013; (5) GARLAND BLOCKADE 2016 — McConnell refused to hold hearings on Obama nominee Merrick Garland for 11 months; (6) NUCLEAR OPTION 2.0 — McConnell eliminated filibuster for SCOTUS nominees 2017 (Gorsuch confirmed 54-45); (7) KAVANAUGH HEARINGS 2018 — Christine Blasey Ford testimony, 50-48 confirmation (narrowest margin since Stanley Matthews 1881); (8) BARRETT 2020 — McConnell pushed through 8 days before election despite refusing to consider Garland 8 months before 2016 election",
              "There is no modern partisan judicial nomination process of any kind during the entire period from 1987 onward in any region of the United States with no Bork rejection, no Thomas hearings, no filibuster use, no nuclear option, no Garland blockade, no Kavanaugh hearings, and no Barrett rush of any kind during the entire period in any region",
              "Modern judicial nominations are entirely bipartisan and noncontroversial of any kind under any circumstance with no Bork rejection, no Thomas hearings, no filibuster, no nuclear option, no Garland blockade, no Kavanaugh hearings, and no Barrett rush of any kind during the entire period from 1987 onward in any region of the United States during the period",
              "There is no Garland blockade and no Barrett rush of any kind during the entire period from 2016 onward in any region of the United States with no McConnell role, no 11-month delay, no 8-day rush, and no double standard accusation of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Modern judicial nominations INCREASINGLY PARTISAN: (1) BORK 1987 — rejected 42-58 ("to bork"); (2) THOMAS 1991 — Hill testimony, 52-48; (3) FILIBUSTER USE 2003-05 + Gang of 14; (4) NUCLEAR OPTION 1.0 — Reid 2013 (lower courts + executive); (5) GARLAND BLOCKADE 2016 — McConnell 11-month refusal; (6) NUCLEAR OPTION 2.0 — McConnell 2017 (SCOTUS) → Gorsuch 54-45; (7) KAVANAUGH 2018 — Ford testimony, 50-48 (narrowest since Stanley Matthews 1881); (8) BARRETT 2020 — 8 days before election (vs. Garland refused 8 months before).'
          },
          {
            question: "How did the Judiciary Act of 1925 (Judges' Bill) transform SCOTUS's role?",
            options: [
              "JUDICIARY ACT OF 1925 ('Judges' Bill,' championed by Chief Justice WILLIAM HOWARD TAFT) gave SCOTUS BROAD DISCRETIONARY JURISDICTION through the WRIT OF CERTIORARI process: (1) BEFORE 1925 — SCOTUS had to hear most appeals; growing caseload made docket unmanageable; (2) AFTER 1925 — SCOTUS chooses which cases to hear via CERT, granting only ~1% of petitions; (3) MODERN ROLE — SCOTUS shifted from ERROR-CORRECTION court (correcting individual lower-court errors) to LAW-DECLARATION court (resolving major constitutional + statutory questions of national importance); (4) RULE OF FOUR developed informally to govern cert grants; (5) IMPACT — SCOTUS now decides ~70-80 cases/year (down from ~250+ in early 20th century), focusing on circuit splits, major constitutional questions, and cases of broad national importance",
              "There is no Judiciary Act of 1925 of any kind during the entire period from 1925 onward in any region of the United States with no Judges' Bill, no William Howard Taft, no SCOTUS discretionary jurisdiction, no cert process, no shift from error-correction to law-declaration, no Rule of Four, and no modern docket reduction of any kind during the entire period in any region",
              "The Judiciary Act of 1925 ELIMINATED SCOTUS discretionary jurisdiction and required SCOTUS to hear all appeals of any kind under any circumstance with no shift from mandatory to discretionary jurisdiction, no cert process, no Rule of Four, and no modern docket reduction of any kind during the entire period from 1925 onward in any region of the United States during the period",
              "Chief Justice William Howard Taft opposed the Judiciary Act of 1925 of any kind under any circumstance with no role in championing the Judges' Bill, no role in expanding cert discretion, and no role in shaping modern SCOTUS jurisdiction of any kind during the entire period from 1925 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'JUDICIARY ACT 1925 ("Judges\' Bill," championed by CJ Taft) → BROAD DISCRETIONARY JURISDICTION via cert. (1) BEFORE 1925 — must hear most appeals → unmanageable; (2) AFTER 1925 — chooses via CERT (~1% granted); (3) MODERN — shifted from ERROR-CORRECTION court → LAW-DECLARATION court (major constitutional + statutory questions of national importance); (4) RULE OF FOUR developed informally; (5) IMPACT — ~70-80 cases/year (down from ~250+) focused on circuit splits + major constitutional + national importance.'
          }
        ]
      }
    }
  ]
}
