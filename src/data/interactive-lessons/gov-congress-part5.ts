export const govCongressPart5Data = {
  topicSlug: 'gov-congress',
  sections: [
    {
      id: 'govcong5-intro',
      type: 'text' as const,
      content: `
# 🏛️ Congress

**Part 5 of 7 — Change Over Time**

---

| Section |
|---|
| Founding-Jacksonian: Clay's Speakership; rise of party leadership |
| Civil War-Reconstruction: Radical Republicans; impeachment of Johnson |
| Progressive era: 17th Amendment; House revolt against Cannon |
| New Deal: committee government; Conservative Coalition |
| Modern Congress: Watergate reforms; Gingrich revolution; polarization |

> 🔑 Key idea: Congress's institutional structure has evolved dramatically — from informal committee government in the 19th century, through committee-chairman dominance in mid-20th, to today's polarized, leadership-driven, partisan body.
      `
    },
    {
      id: 'govcong5-content',
      type: 'text' as const,
      content: `
## Founding-Jacksonian (1789-1828)

| Period | Development |
|---|---|
| 1789-1810 | Weak central institutions; Speaker as procedural officer; party caucuses began nominating presidential candidates ("King Caucus") |
| 1810-1825 | Henry Clay's Speakership transformed the office — first powerful Speaker; led "War Hawks" pushing for War of 1812; established Speaker's role in shaping legislative agenda |
| 1816 | Standing committee system established (replacing ad-hoc select committees) |
| 1820 | Missouri Compromise — Henry Clay's "Great Compromise" balancing slave + free state admission |
| 1828 | "King Caucus" collapses → presidential nominations move to party conventions; Congress less central to presidential selection |

## Civil War-Reconstruction (1861-1877)

| Year | Development |
|---|---|
| 1861-65 | Republican Congress passes major legislation absent Southern Democrats: Homestead Act 1862, Pacific Railroad Acts 1862-64, Morrill Land-Grant 1862, National Banking Acts 1863-64 |
| 1865-67 | Radical Republicans assert congressional supremacy in Reconstruction (vs. Andrew Johnson's lenient approach) |
| 1867 | Tenure of Office Act (over Johnson's veto) — restricts presidential removal |
| 1868 | Andrew Johnson IMPEACHED (House 126-47); SENATE acquits 35-19 (1 vote short of 2/3) |
| 1873 | Congressional Government era begins (Wilson's 1885 dissertation) — Congress dominant; weak presidents (Grant, Hayes, Arthur, Cleveland, Harrison) |

## Progressive Era (1900-1920)

| Year | Development |
|---|---|
| 1900-1910 | "Czar Cannon" — Speaker Joseph Cannon (R-IL) accumulates extraordinary power: chairs Rules Committee + appoints all committees + controls floor recognition |
| 1910 | Cannon Revolt — Progressive Republicans + Democrats strip Speaker of Rules Committee chairmanship + committee appointment authority |
| 1913 | 17th Amendment — direct popular election of senators (replacing state legislatures); Progressive-era democracy reform |
| 1917 | Senate adopts cloture rule (Rule 22) — first limit on filibuster (2/3 vote required, later changed to 60 in 1975) |

## New Deal Era (1933-1945)

| Year | Development |
|---|---|
| 1933 | "Hundred Days" — Roosevelt + Democratic Congress pass 15 major bills in 100 days |
| 1933-37 | New Deal legislation: Glass-Steagall, NIRA, AAA, Wagner Act 1935, Social Security Act 1935 |
| 1938 | CONSERVATIVE COALITION emerges — Southern Democrats + Republicans block further New Deal expansion (lasts until 1960s) |
| 1946 | Legislative Reorganization Act — modernizes committee system; reduces number of standing committees |
| 1955-61 | Sam Rayburn Speaker / LBJ Senate Majority Leader — committee government era; powerful committee chairs (selected by seniority) dominate |

## Civil Rights + Great Society Era (1957-1968)

| Year | Development |
|---|---|
| 1957 | Civil Rights Act 1957 — first since Reconstruction; weakened by Senate filibuster |
| 1964 | Civil Rights Act 1964 — broke 75-day Senate filibuster (Strom Thurmond previously held record 24h 18m in 1957) |
| 1965 | Voting Rights Act + Medicare + Medicaid + ESEA + Immigration Act + Higher Education Act |
| 1968 | LBJ doesn't seek re-election; Vietnam War dissent fractures Democratic Party |

## Watergate + Reform Era (1973-1980)

| Year | Reform |
|---|---|
| 1973 | War Powers Resolution (over Nixon's veto) |
| 1974 | Budget and Impoundment Control Act (CED illustrative) creates Congressional Budget Office (CBO) + budget committees; limits presidential impoundment |
| 1974 | Nixon resigns following House Judiciary impeachment vote |
| 1975 | Senate cloture lowered from 2/3 (67) to 3/5 (60); House strips committee chairs of seniority-only selection |
| 1978 | Ethics in Government Act + FISA |

## Gingrich Revolution + Polarization Era (1995-PRESENT)

| Year | Development |
|---|---|
| 1994 | Republican Revolution — Republicans win House for first time since 1955; Newt Gingrich becomes Speaker (1995) |
| 1995 | Contract with America agenda; Gingrich centralizes power in Speaker's office |
| 1995-96 | Government shutdown (21 days December 1995-January 1996) over budget fight with Clinton |
| 1998 | House impeaches Clinton (Lewinsky / perjury); Senate acquits |
| 2010 | Tea Party wave — Republicans win House; deepening polarization |
| 2013 | 16-day government shutdown (October) over ACA defunding fight |
| 2018-19 | 35-day government shutdown (longest in history) over border wall funding |
| 2019, 2021 | House impeaches Trump twice; Senate acquits both times |
| 2021-22 | January 6 Select Committee investigates Capitol attack |
| 2023 | Speaker Kevin McCarthy ousted (October) — first Speaker removed by motion to vacate; weeks-long Speaker vacancy; Mike Johnson elected |

> 🔑 Modern Congress is more leadership-driven, more partisan, and more polarized than at any time since Reconstruction.
      `
    },
    {
      id: 'govcong5-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Congressional Evolution** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the significance of the 1910 Cannon Revolt?",
            options: [
              "Progressive Republicans and Democrats removed Speaker Cannon from the Rules Committee, shifting House power from the Speaker toward committees and seniority",
              "Speaker Cannon led a revolt against President Taft that gave the House power to appoint federal judges",
              "Senate Democrats forced the House to adopt the filibuster, weakening the Speaker's control over floor debate",
              "The House voted to abolish seniority, giving the Speaker sole power to name every committee chair"
            ],
            correctAnswer: 0,
            explanation: 'Cannon Revolt 1910: Speaker Joseph "Czar" Cannon (R-IL, 1903-11) had extraordinary power (Rules chair + committee appointments + floor recognition + agenda dominance) → most powerful office short of Presidency. March 1910 Progressive Republicans (George Norris) + Democrats STRIPPED Speaker of Rules chairmanship + committee-appointment authority. SIGNIFICANCE: ended one-person dominance; transferred power to committee chairs (seniority-based until 1975); Progressive Era anti-machine reform; Speaker never since as institutionally powerful (modern Gingrich/Pelosi rebuilt informal influence).'
          },
          {
            question: "Which best describes the institutional changes wrought by the 1974 Budget Act?",
            options: [
              "It created the budget committees and the Congressional Budget Office and limited presidential impoundment of funds",
              "It gave the President a line-item veto, abolished the appropriations committees, and moved all budget writing to the Treasury Department",
              "It required a balanced budget every year, banned deficit spending, and let the Supreme Court cancel appropriations that exceed revenue",
              "It expanded the President's power to impound funds, created the Office of Management and Budget, and ended the filibuster on spending"
            ],
            correctAnswer: 0,
            explanation: 'Congressional Budget and Impoundment Control Act 1974: addressed (1) Nixon impoundment; (2) lack of congressional budget capacity. Created: (1) Budget Committees House + Senate; (2) CBO independent analysis; (3) Budget Resolution binding overall targets; (4) limits on IMPOUNDMENT — presidents must ask Congress before refusing to spend appropriated funds. A CED illustrative example of congressional oversight and the power of the purse (EK 2.14.A.1-2).'
          }
        ]
      }
    },
    {
      id: 'govcong5-input',
      type: 'input-boxes' as const,
      content: `**Identification — historical changes**`,
      exercise: {
        questions: [
          {
            prompt: "The 1913 amendment establishing direct popular election of senators (replacing state legislatures). Two words.",
            answer: '17th Amendment',
            acceptableAnswers: ['17th Amendment', 'Seventeenth Amendment', 'seventeenth amendment', '17th amendment'],
            hint: 'Progressive Era democratic reform; replaced original Article I § 3.'
          },
          {
            prompt: "The 1974 statute (a CED illustrative example) that created the Congressional Budget Office and limited presidential impoundment of funds. Two words: the ___ Act.",
            answer: 'Budget Act',
            acceptableAnswers: ['Budget Act', 'budget act', 'Congressional Budget Act', 'Congressional Budget and Impoundment Control Act'],
            hint: 'Watergate-era reform; addressed Nixon impoundment + congressional budget capacity.'
          },
          {
            prompt: "Term for the exchange of political favors among legislators, such as trading votes to gain support for each other's bills. One word.",
            answer: 'logrolling',
            acceptableAnswers: ['logrolling', 'Logrolling', 'log-rolling', 'log rolling'],
            hint: 'EK 2.2.A.5 — "you vote for my bill, I\'ll vote for yours."'
          }
        ]
      }
    },
    {
      id: 'govcong5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each event to its decade.**`,
      exercise: {
        dropdowns: [
          {
            label: "Cannon Revolt strips Speaker of Rules Committee chairmanship: ___",
            options: ['1900s', '1910s', '1920s', '1930s']
          },
          {
            label: "Conservative Coalition emerges to block further New Deal expansion: ___",
            options: ['1920s', '1930s', '1940s', '1950s']
          },
          {
            label: "17th Amendment establishes direct popular election of senators: ___",
            options: ['1870', '1913', '1920', '1971']
          }
        ],
        correctAnswers: ['1910s', '1930s', '1913'],
        hint1: 'March 1910; led by Progressive Republican George Norris.',
        hint2: 'Same year FDR\'s court-packing plan failed; coalition lasted until 1960s.',
        hint3: 'Progressive Era — same year as the 16th Amendment (EK 5.1.A.1.iii).'
      }
    },
    {
      id: 'govcong5-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "Which best characterizes the institutional trajectory of Congress from 1955 to the present?",
            options: [
              "Powerful seniority-based committee chairs gave way to 1970s reforms and then to strong, centralized party leadership amid rising polarization",
              "Party leaders dominated in the 1950s, but reforms since 1995 have returned power to independent committee chairs chosen strictly by seniority in both chambers",
              "Congress has steadily gained power over the presidency since 1955 through new constitutional amendments",
              "Committee chairs have grown stronger in every decade since 1955, while party leaders have lost all formal power"
            ],
            correctAnswer: 0,
            explanation: 'Three phases: (1) COMMITTEE GOVERNMENT 1955-75 — powerful seniority-selected chairs (Mills, Long, Eastland) had near-veto in jurisdiction; deference to seniority + cross-party accommodation. (2) REFORM PERIOD 1975-94 — Watergate-era reforms (Budget Act 1974 + 1975 cloture + Democratic Caucus stripping seniority-only) decentralized; subcommittee government; weakened chairs. (3) PARTISAN LEADERSHIP 1995-present — Gingrich centralized in Speaker; modern Speakers control agenda; party-line voting; chairs serve at leadership pleasure. Congress functions as PARTISAN INSTITUTION not deliberative.'
          },
          {
            question: "Which best describes the significance of recent Speakership crises (Boehner 2015, McCarthy 2023)?",
            options: [
              "Boehner's resignation and McCarthy's ouster show how a small, hard-line faction can topple a Speaker in a narrowly divided House",
              "The two crises show the Senate's power to remove a House Speaker through impeachment and trial",
              "Boehner and McCarthy fell because Democrats held a House majority and used it to remove Republican Speakers who refused to cooperate on spending bills",
              "The crises show that Speakers now serve fixed terms set by the Constitution and must step down when the term ends"
            ],
            correctAnswer: 0,
            explanation: 'Speakership crises = modern dysfunction: (1) BOEHNER (R-OH, 2011-15) RESIGNED Oct 2015 under House Freedom Caucus pressure over cooperation with Dems on must-pass (debt-ceiling, funding); (2) RYAN (R-WI, 2015-19) similar pressure; (3) MCCARTHY (R-CA, Jan-Oct 2023) — 15 ballots to elect (most since 1859); OUSTED Oct 3 2023 by motion to vacate (Matt Gaetz R-FL) — FIRST ever; 22-day vacancy; failed candidates (Scalise, Jordan, Emmer); MIKE JOHNSON (R-LA) elected. Even majority parties cannot govern when small factions hold chamber hostage. Comparable to 1850s pre-Civil War battles.'
          }
        ]
      }
    }
  ]
}
