export const govCongressPart3Data = {
  topicSlug: 'gov-congress',
  sections: [
    {
      id: 'govcong3-intro',
      type: 'text' as const,
      content: `
# 🏛️ Congress

**Part 3 of 7 — Patterns & Examples**

---

| Section |
|---|
| Major legislation by era: New Deal, Great Society, Reagan, Obama, Trump, Biden |
| Landmark Congressional powers cases |
| Apportionment + redistricting + gerrymandering |
| Incumbency advantage |

> 🔑 Key idea: Congressional output reflects the political coalitions of each era — major legislation usually requires unified government + presidential leadership + broad coalitions able to get past the Senate filibuster.
      `
    },
    {
      id: 'govcong3-content',
      type: 'text' as const,
      content: `
## Major Legislation by Era

| Era | Key statutes | Political conditions |
|---|---|---|
| **New Deal (1933-38)** | Emergency Banking Act, AAA, NIRA, Glass-Steagall, NLRA (Wagner Act 1935), Social Security Act 1935, Fair Labor Standards Act 1938 | Democratic supermajority + FDR; "Hundred Days" |
| **Great Society (1964-66)** | Civil Rights Act 1964, Voting Rights Act 1965, Medicare + Medicaid 1965, Elementary + Secondary Education Act 1965, Immigration and Nationality Act 1965, Higher Education Act 1965 | Democratic supermajority + LBJ; post-JFK assassination momentum |
| **Reagan revolution (1981-86)** | Economic Recovery Tax Act 1981 (largest tax cut), Tax Reform Act 1986, defense buildup, Social Security reform 1983 | Republican Senate + Democratic House (divided); bipartisan compromise |
| **Newt Gingrich era (1995-99)** | Welfare Reform 1996 (PRWORA), Telecommunications Act 1996, Balanced Budget Act 1997, Defense of Marriage Act 1996 | Republican Congress + Clinton; Contract with America |
| **Bush 43 era (2001-08)** | Bush tax cuts 2001/2003, No Child Left Behind 2001, USA PATRIOT Act 2001, Medicare Modernization Act 2003 (Part D), Iraq AUMF 2002 | Mixed — Republican unified 2003-06 |
| **Obama era (2009-10)** | American Recovery and Reinvestment Act 2009, Affordable Care Act 2010 (passed the Senate with exactly 60 votes), Dodd-Frank 2010 | Democratic supermajority Jan 2009-Feb 2010 (briefly 60 senators) |
| **Trump era (2017-19)** | Tax Cuts and Jobs Act 2017 (party-line), USMCA 2020, First Step Act 2018, CARES Act 2020 (bipartisan COVID) | Republican Congress 2017-19 + Trump |
| **Biden era (2021-22)** | American Rescue Plan 2021 (party-line), Infrastructure Investment and Jobs Act 2021 (bipartisan), CHIPS and Science Act 2022, Inflation Reduction Act 2022 (party-line) | Democratic narrow majority (50-50 Senate + Harris VP tie-breaker) |

## Landmark Congressional Powers Cases

*McCulloch*, *Lopez*, and *Shaw* are required cases; the others are context, and the exam supplies the facts if it uses them.

| Case | Year | Holding | Significance |
|---|---|---|---|
| *McCulloch v. Maryland* (REQUIRED) | 1819 | Necessary and Proper Clause supports broad implied powers (Bank of US) | Foundation of expansive Article I authority |
| *Gibbons v. Ogden* | 1824 | Commerce Clause includes navigation; broad federal authority over interstate commerce | Foundation of modern commerce-clause federalism |
| *NLRB v. Jones & Laughlin Steel* | 1937 | Commerce Clause authorizes regulation of labor relations affecting interstate commerce | Ended Lochner-era; foundation of modern labor law |
| *United States v. Lopez* (REQUIRED) | 1995 | Gun-Free School Zones Act exceeded Commerce Clause; first such case in 60 years | Beginning of modern federalism revival |
| *NFIB v. Sebelius* | 2012 | ACA individual mandate exceeded Commerce Clause but valid as tax; Medicaid expansion coercive | Major modern test of federal regulatory + spending power |
| *Wesberry v. Sanders* | 1964 | "One person, one vote" applies to congressional districts | Equal-population House districts |
| *Shaw v. Reno* (REQUIRED) | 1993 | Race-based congressional redistricting violates Equal Protection if race is predominant factor | Limits racial gerrymandering |

## Apportionment + Redistricting + Gerrymandering

| Concept | Definition | Significance |
|---|---|---|
| **Apportionment** | Distributing 435 House seats among the 50 states based on decennial Census | Article I § 2; reapportioned every 10 years |
| **Redistricting** | State legislatures (or commissions) draw congressional district lines after apportionment | State authority; politically charged |
| **Gerrymandering** | Drawing district lines for political advantage; named for Elbridge Gerry's 1812 salamander-shaped Massachusetts district | Two main types: partisan + racial |
| **Cracking** | Splitting an opposing party's voters across multiple districts to dilute their influence | Common partisan gerrymandering tactic |
| **Packing** | Concentrating an opposing party's voters into a few districts to waste their votes | Common partisan gerrymandering tactic |
| **Majority-minority districts** | Districts drawn so a racial minority is the majority of voters; can be required (VRA § 2) or struck (Shaw v. Reno) | Tension between VRA + Equal Protection |

## Key Cases on Districting

EK 2.3.A.2: gerrymandering and unequal representation have been partially addressed by Supreme Court cases that opened the door to equal protection challenges. *Baker* and *Shaw* are required; *Wesberry* and *Rucho* are context.

| Case | Year | Holding |
|---|---|---|
| *Baker v. Carr* (REQUIRED) | 1962 | Apportionment is justiciable (one person, one vote) |
| *Wesberry v. Sanders* | 1964 | Congressional districts must be roughly equal in population |
| *Shaw v. Reno* (REQUIRED) | 1993 | District lines drawn mainly by race face equal protection challenge |
| *Rucho v. Common Cause* | 2019 | Partisan gerrymandering claims are non-justiciable political questions in federal court (state courts may decide) |

## Incumbency Advantage

| Factor | Effect | Magnitude |
|---|---|---|
| Name recognition | Voters more familiar with incumbent | Substantial |
| Casework | Helping constituents with federal agencies | High constituent loyalty |
| Pork-barrel projects | Steering federal funding to district | Builds local support |
| Franking privilege | Free postage for official mail | Builds visibility |
| Fundraising | Incumbents attract more PAC + interest-group money | ~10:1 advantage |
| Gerrymandering | Districts often drawn to favor incumbents | Reduces competitive elections |

> 🔑 Modern incumbency reelection rates: House ~95%; Senate ~85%. Despite low Congressional approval (~20%), most incumbents are reelected.
      `
    },
    {
      id: 'govcong3-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Major Legislation Patterns** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the political conditions enabling the Great Society legislation of 1964-66?",
            options: [
              "Huge Democratic majorities after the 1964 landslide, momentum from Kennedy's assassination, and Johnson's legislative skill let major programs pass quickly",
              "Divided government after 1964 forced Republicans and Democrats to compromise on Medicare, civil rights, and education programs",
              "A Republican Congress elected in 1964 passed the Great Society legislation to block more radical proposals from President Johnson",
              "The Supreme Court ordered Congress to create Medicare and Medicaid after ruling that health care is a constitutional right"
            ],
            correctAnswer: 0,
            explanation: 'Great Society 1964-66: (1) MASSIVE Democratic majorities (1964 election: 295 House + 68 Senate); (2) JFK assassination Nov 1963 momentum; (3) LBJ legislative mastery (Senate Majority Leader experience — "the treatment"); (4) Civil rights movement pressure (March on Washington 1963, Birmingham 1963, Selma 1965); (5) postwar economic growth. Result: Civil Rights Act 1964, VRA 1965, Medicare + Medicaid 1965, ESEA 1965, Immigration Act 1965, Higher Education Act 1965 — most significant since New Deal.'
          },
          {
            question: "Which best describes the constitutional significance of United States v. Lopez (1995)?",
            options: [
              "It was the first ruling since 1937 to strike down a federal law as exceeding the commerce power, signaling limits on federal authority",
              "It was the first ruling to incorporate the Second Amendment against the states, striking down a state ban on carrying guns near schools",
              "It upheld the Gun-Free School Zones Act, which confirmed that the commerce power covers any activity with an indirect link to interstate trade",
              "It held that Congress may regulate guns only through its taxing power, striking down the federal ban on firearms possession near schools"
            ],
            correctAnswer: 0,
            explanation: 'US v. Lopez (1995, Rehnquist 5-4): struck Gun-Free School Zones Act 1990 as exceeding Commerce Clause. Gun possession near schools NOT economic activity; refused chain (guns → poor education → productivity → commerce). FIRST Commerce Clause case since 1937 "switch in time" to strike federal statute → modern federalism revival. Followed by Morrison 2000 (VAWA partly struck) + NFIB 2012 (ACA mandate exceeded Commerce, valid as tax). Signaled modification of post-1937 unlimited federal commerce.'
          }
        ]
      }
    },
    {
      id: 'govcong3-input',
      type: 'input-boxes' as const,
      content: `**Identification — practices and concepts**`,
      exercise: {
        questions: [
          {
            prompt: "The practice of drawing congressional district lines for political advantage. One word.",
            answer: 'gerrymandering',
            acceptableAnswers: ['gerrymandering', 'Gerrymandering'],
            hint: 'Named for Elbridge Gerry\'s 1812 salamander-shaped Massachusetts district.'
          },
          {
            prompt: "The gerrymandering technique of splitting an opposing party's voters across multiple districts to dilute their influence. One word.",
            answer: 'cracking',
            acceptableAnswers: ['cracking', 'Cracking'],
            hint: 'Opposite of "packing" (which concentrates opposing voters into few districts).'
          },
          {
            prompt: "The 1962 required case holding that federal courts may hear challenges to unequally populated legislative districts, opening the door to \"one person, one vote.\"",
            answer: 'Baker v. Carr',
            acceptableAnswers: ['Baker v. Carr', 'Baker v Carr', 'Baker', 'baker v carr', 'Baker vs Carr'],
            hint: 'Tennessee had not redrawn its legislative districts since 1901.'
          }
        ]
      }
    },
    {
      id: 'govcong3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each landmark case to its holding.**`,
      exercise: {
        dropdowns: [
          {
            label: "Necessary and Proper Clause supports broad implied powers (Bank of the United States): ___",
            options: ['McCulloch v. Maryland (1819)', 'Gibbons v. Ogden (1824)', 'United States v. Lopez (1995)', 'NFIB v. Sebelius (2012)']
          },
          {
            label: "Gun-Free School Zones Act exceeded Commerce Clause; first Commerce Clause case since 1937: ___",
            options: ['McCulloch v. Maryland (1819)', 'NLRB v. Jones & Laughlin Steel (1937)', 'United States v. Lopez (1995)', 'NFIB v. Sebelius (2012)']
          },
          {
            label: "District lines drawn mainly on the basis of race can violate the Equal Protection Clause: ___",
            options: ['McCulloch v. Maryland (1819)', 'NLRB v. Jones & Laughlin Steel (1937)', 'United States v. Lopez (1995)', 'Shaw v. Reno (1993)']
          }
        ],
        correctAnswers: ['McCulloch v. Maryland (1819)', 'United States v. Lopez (1995)', 'Shaw v. Reno (1993)'],
        hint1: 'Marshall: "Let the end be legitimate...all means which are appropriate...are constitutional."',
        hint2: 'Rehnquist 5-4: gun possession near schools is not economic activity.',
        hint3: 'North Carolina\'s oddly shaped majority-minority district (required case).'
      }
    },
    {
      id: 'govcong3-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "How does the modern incumbency advantage interact with gerrymandering to shape congressional elections?",
            options: [
              "Incumbents' name recognition and fundraising edge combine with safe districts drawn by gerrymandering to make most House seats uncompetitive",
              "Gerrymandering mainly helps challengers, since redrawn districts remove incumbents' supporters and erase their fundraising advantages",
              "Incumbency advantages and gerrymandering cancel each other out, so most House races are decided by a few points and seats change hands frequently every two years",
              "Gerrymandering shapes only Senate races, while House incumbents usually lose their seats after one or two terms"
            ],
            correctAnswer: 0,
            explanation: 'Incumbency + gerrymandering reinforce: INCUMBENCY = name recognition + casework + pork + franking + ~10:1 fundraising. GERRYMANDERING uses cracking (split opposing) + packing (concentrate); modern computerized → precise gerrymanders → safe districts (primary = de facto election). Result: House ~95%, Senate ~85% reelection; only ~30-50/435 competitive. Insulates Congress from majority opinion (~20% approval) + contributes to polarization (primaries reward extreme partisans).'
          },
          {
            question: "In 2019 the Supreme Court ruled that federal courts cannot decide claims that a district map is an unfair PARTISAN gerrymander. Which response by reformers is most consistent with that ruling?",
            options: [
              "Reformers turn to state courts and to ballot measures that create independent redistricting commissions",
              "Reformers ask federal courts to redraw every state's map under the Equal Protection Clause instead",
              "Reformers stop challenging racial gerrymanders too, since the ruling also overruled Shaw v. Reno",
              "Reformers ask the President to issue an executive order assigning district lines to the Census Bureau"
            ],
            correctAnswer: 0,
            explanation: 'The 2019 ruling (Rucho v. Common Cause, supplied here) closed federal courts to partisan-gerrymandering claims, so reformers moved to other access points: state courts applying state constitutions and ballot initiatives creating independent commissions. EK 2.3.A.2: racial gerrymandering challenges under Shaw v. Reno (a required case) remain available. Presidents have no power to draw congressional districts.'
          }
        ]
      }
    }
  ]
}
