export const govBureaucracyPart3Data = {
  topicSlug: 'gov-bureaucracy',
  sections: [
    {
      id: 'govburea3-intro',
      type: 'text' as const,
      content: `
# 🏛️ The Federal Bureaucracy

**Part 3 of 7 — Patterns & Examples**

---

| Section |
|---|
| Major Cabinet departments + functions |
| Major independent agencies + commissions |
| Major government corporations |
| Sample regulatory programs in action |
| Modern reform debates |

> 🔑 Key idea: The federal bureaucracy includes 15 CABINET DEPARTMENTS organized around major policy domains, prominent INDEPENDENT EXECUTIVE AGENCIES (EPA, NASA, CIA, SSA), powerful INDEPENDENT REGULATORY COMMISSIONS (Fed, SEC, FCC, NLRB, FTC, NRC, CPSC), and GOVERNMENT CORPORATIONS (USPS, Amtrak, TVA, FDIC). Each has distinct creation history, statutory authority, structure, and operational patterns.
      `
    },
    {
      id: 'govburea3-content',
      type: 'text' as const,
      content: `
## Major Cabinet Departments + Functions

| Department | Created | Key functions |
|---|---|---|
| **STATE** | 1789 | Foreign relations, diplomacy, ~270 embassies/consulates |
| **TREASURY** | 1789 | Tax collection (IRS), debt management, monetary policy oversight, sanctions (OFAC) |
| **WAR/DEFENSE** | 1789/1947 | Military forces; National Security Act 1947 created DoD + Air Force + CIA + NSC |
| **JUSTICE** | 1870 | FBI, DEA, US Attorneys, federal prisons; AG = chief federal law enforcement officer |
| **INTERIOR** | 1849 | Public lands (BLM ~245M acres), national parks (NPS), Indian Affairs (BIA), USGS |
| **AGRICULTURE** | 1862 | Farm programs, food stamps (SNAP), forest service, rural development, food safety (FSIS) |
| **COMMERCE** | 1903 | Census Bureau, NOAA, Patent and Trademark Office, BIS export controls |
| **LABOR** | 1913 | OSHA, BLS statistics, MSHA mine safety, Wage and Hour Division |
| **HHS** | 1953/1980 | CDC, FDA, NIH, Medicare/Medicaid (CMS), surgeon general |
| **HUD** | 1965 | Housing programs, Section 8, FHA, fair housing |
| **TRANSPORTATION** | 1966 | FAA, FHWA, NHTSA, Coast Guard (peacetime — moved to DHS 2003) |
| **ENERGY** | 1977 | Nuclear weapons (NNSA), national labs, energy R&D |
| **EDUCATION** | 1979 | Federal student aid, civil rights enforcement (OCR), Title I/IDEA |
| **VETERANS AFFAIRS** | 1989 | VA medical centers, VA benefits, GI Bill |
| **HOMELAND SECURITY** | 2003 | TSA, ICE, USCIS, FEMA, Coast Guard, Secret Service; created post-9/11 |

## Major Independent Executive Agencies

| Agency | Created | Function |
|---|---|---|
| **CIA** | 1947 | Foreign intelligence; National Security Act 1947 |
| **NASA** | 1958 | Civilian space program; created in response to Sputnik 1957 |
| **EPA** | 1970 | Environmental protection; created by Nixon executive reorganization |
| **GSA** | 1949 | Federal property + procurement |
| **OPM** | 1979 | Federal personnel management; replaced Civil Service Commission |
| **SSA** | 1995 | Social Security administration; spun off from HHS as independent agency |

## Major Independent Regulatory Commissions

| Commission | Created | Members | Term | Function |
|---|---|---|---|---|
| **FEDERAL RESERVE** | 1913 | 7 governors | 14 years | Monetary policy; bank regulation |
| **FTC** | 1914 | 5 commissioners | 7 years | Antitrust + consumer protection |
| **FCC** | 1934 | 5 commissioners | 5 years | Communications regulation |
| **SEC** | 1934 | 5 commissioners | 5 years | Securities markets |
| **NLRB** | 1935 | 5 board members | 5 years | Labor relations |
| **NRC** | 1974 | 5 commissioners | 5 years | Nuclear safety |
| **CPSC** | 1972 | 5 commissioners | 7 years | Consumer product safety |
| **CFTC** | 1974 | 5 commissioners | 5 years | Commodity futures |
| **FERC** | 1977 | 5 commissioners | 5 years | Electric + gas pipelines |

**KEY FEATURES**:
- Multi-member; bipartisan limit (no more than bare majority from one party)
- Fixed staggered terms — insulates from president
- For-cause removal — *Humphrey's Executor v. US* (1935); modified for single-director agencies *Seila Law v. CFPB* (2020) + *Collins v. Yellen* (2021)

## Major Government Corporations

| Corporation | Created | Function |
|---|---|---|
| **TVA** | 1933 | Electricity in Tennessee Valley; New Deal program |
| **FDIC** | 1933 | Bank deposit insurance; New Deal response to Great Depression |
| **USPS** | 1971 (reorganized) | Mail service; Postal Reorganization Act |
| **AMTRAK** | 1971 | Intercity passenger rail |
| **FANNIE MAE** | 1968 (privatized) / **FREDDIE MAC** | Mortgage-backed securities; conservatorship since 2008 |

## Sample Regulatory Programs in Action

| Agency | Program | Description |
|---|---|---|
| **EPA** | NAAQS | Sets National Ambient Air Quality Standards for 6 'criteria pollutants' (ozone, particulates, CO, $SO_{2}$, $NO_{2}$, lead); states submit SIPs (state implementation plans) |
| **OSHA** | PELs | Permissible exposure limits for workplace chemicals; ~7-8M inspections/year delegated to state OSH agencies |
| **FDA** | Drug approval | NDAs (new drug applications) require ~10-12 years + ~\\$2B average to develop + approve; clinical trials Phase 1-2-3 |
| **SEC** | Disclosure | Public companies file 10-K (annual), 10-Q (quarterly), 8-K (material events), proxy statements |
| **FCC** | Spectrum auctions | Auctions wireless spectrum to telecom carriers; >\\$200B raised since 1994 |
| **NRC** | Reactor licensing | ~94 commercial nuclear reactors at ~54 plants; 40-year licenses + 20-year renewals |
| **FAA** | Aviation safety | Certifies aircraft + pilots + airlines; FAR Part 121 (commercial), Part 135 (charter), Part 91 (private) |

## Modern Reform Debates

| Debate | Description |
|---|---|
| **REGULATORY REFORM** | Trump 2017 EO 13771 'two for one' rule (rescind 2 rules for every 1 issued) — cited 22-1 ratio; rescinded by Biden Jan 2021 |
| **DOGE (Department of Government Efficiency)** | Trump Jan 2025 advisory body led by Elon Musk + Vivek Ramaswamy; controversial mass-firings + agency restructuring; legal challenges |
| **SCHEDULE F** | Trump Oct 2020 EO reclassifying career civil servants as at-will; rescinded Biden Jan 2021; restored Trump Jan 2025; affects tens of thousands of employees |
| **NONDELEGATION REVIVAL** | Conservative justices (Gorsuch, Thomas) signaling potential revival of nondelegation; *Gundy v. US* (2019) plurality + Gorsuch dissent |
| **ALJ REFORM** | Jarkesy v. SEC (2024) limited SEC ALJ use for civil money penalties under 7th Am jury-trial right |
| **SUNSET CLAUSES** | Some statutes include automatic expiration unless reauthorized (e.g., FISA Section 702 — surveillance authority renewed periodically) |
| **CONSOLIDATED RULEMAKING** | Recent presidents have increased use of executive orders + memoranda for policy direction; controversial use of OIRA review |

> 🔑 Key takeaway: 15 CABINET DEPARTMENTS (State 1789 → DHS 2003); INDEPENDENT EXECUTIVE AGENCIES (EPA 1970, NASA 1958, CIA 1947); INDEPENDENT REGULATORY COMMISSIONS (Fed 1913, SEC + FCC 1934, NLRB 1935, FTC 1914, NRC 1974, CPSC 1972) with multi-member structure + fixed terms + for-cause removal (Humphrey\'s Executor 1935, modified Seila Law 2020); GOVERNMENT CORPORATIONS (TVA + FDIC 1933, USPS + Amtrak 1971); REFORM DEBATES include Schedule F + DOGE + nondelegation revival + ALJ reform.
      `
    },
    {
      id: 'govburea3-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the EPA and its founding context?",
            options: [
              "ENVIRONMENTAL PROTECTION AGENCY (EPA) was established in 1970 by President NIXON via EXECUTIVE REORGANIZATION (Reorganization Plan No. 3) — consolidating environmental functions previously scattered across multiple departments; EPA is an INDEPENDENT EXECUTIVE AGENCY (single-administrator, NOT multi-member commission) reporting directly to the president; FOUNDING CONTEXT: response to growing environmental movement (Earth Day April 22 1970, Rachel Carson's *Silent Spring* 1962 catalyst); MAJOR STATUTES IMPLEMENTED: Clean Air Act (1970, amendments 1977 + 1990), Clean Water Act (1972), Safe Drinking Water Act (1974), Resource Conservation and Recovery Act 1976 (RCRA), Comprehensive Environmental Response, Compensation, and Liability Act 1980 (CERCLA/Superfund), Toxic Substances Control Act 1976 (TSCA); KEY PROGRAMS: NAAQS (National Ambient Air Quality Standards) for 6 criteria pollutants, state implementation plans (SIPs), pesticide registration, Superfund cleanups, greenhouse gas emissions; RECENT KEY CASES: Massachusetts v. EPA (2007) held EPA must regulate GHGs under Clean Air Act; West Virginia v. EPA (2022) struck Clean Power Plan via Major Questions Doctrine",
              "There is no Environmental Protection Agency of any kind during the entire period from 1970 onward in any region of the United States with no Nixon executive reorganization, no environmental movement context, no Earth Day 1970, no Silent Spring 1962, no Clean Air Act, no Clean Water Act, no NAAQS, no Massachusetts v. EPA, and no West Virginia v. EPA of any kind during the entire period in any region",
              "EPA was created by constitutional amendment in 1789 and not by Nixon executive reorganization in 1970 of any kind under any circumstance with no Nixon establishment, no environmental movement context, and no statutory authority basis of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "EPA is an independent regulatory commission with 5 commissioners and fixed terms protected by Humphrey's Executor of any kind under any circumstance with no single-administrator structure, no presidential reporting line, and no executive reorganization origin of any kind during the entire period from 1970 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'EPA established 1970 by NIXON via EXECUTIVE REORGANIZATION (Reorganization Plan No. 3) — consolidated scattered environmental functions. INDEPENDENT EXECUTIVE AGENCY (single-administrator, NOT multi-member). FOUNDING CONTEXT: environmental movement (Earth Day 1970; Rachel Carson Silent Spring 1962). MAJOR STATUTES: Clean Air Act (1970, amendments 1977 + 1990), Clean Water Act (1972), SDWA (1974), RCRA (1976), CERCLA/Superfund (1980), TSCA (1976). PROGRAMS: NAAQS for 6 criteria pollutants; SIPs; pesticide registration; Superfund; GHG. CASES: Mass v. EPA (2007); WV v. EPA (2022) Major Questions struck Clean Power Plan.'
          },
          {
            question: "Which best describes the FEDERAL RESERVE SYSTEM and its independence from the President?",
            options: [
              "FEDERAL RESERVE SYSTEM (created Federal Reserve Act 1913) is the U.S. central bank — an INDEPENDENT REGULATORY COMMISSION with several distinctive features ensuring INDEPENDENCE FROM THE PRESIDENT: (1) STRUCTURE — 7-member BOARD OF GOVERNORS (Washington DC) + 12 REGIONAL FED BANKS (with own boards) + Federal Open Market Committee (FOMC — 12 voting members for monetary policy: 7 Governors + NY Fed President + 4 rotating regional Fed Presidents); (2) GOVERNOR TERMS — 14 YEARS (longest of any agency); chair + vice chair = 4-year terms designated from sitting governors; (3) FOR-CAUSE REMOVAL — president can only remove governors for cause (Humphrey\'s Executor 1935); chair has been politically pressured but never fired (Powell-Trump tension 2018-2020 + 2025); (4) FUNDING — Fed funds itself through interest income, NOT congressional appropriations — provides budgetary independence; (5) MONETARY POLICY MANDATE — DUAL MANDATE: maximum employment + price stability (~2% inflation target since 2012); (6) BANK SUPERVISION — regulates large banks; lender of last resort during crises (2008 crisis Bernanke + COVID 2020 Powell)",
              "There is no Federal Reserve System of any kind during the entire period from 1913 onward in any region of the United States with no Federal Reserve Act 1913, no Board of Governors, no 12 regional Fed banks, no FOMC, no 14-year terms, no for-cause removal, no Humphrey\'s Executor protection, no self-funding, no dual mandate, no bank supervision, and no lender of last resort function of any kind during the entire period in any region",
              "The Federal Reserve is a Cabinet-level department headed by a single secretary serving at the president\'s pleasure of any kind under any circumstance with no Board of Governors, no 14-year terms, no for-cause removal, no self-funding, and no independence from the president of any kind during the entire period from 1913 onward in any region of the United States during the period",
              "The Federal Reserve was abolished by the Banking Act of 1933 and replaced with direct presidential monetary policy control of any kind under any circumstance with no continued central bank, no Board of Governors, no FOMC, and no monetary policy independence of any kind during the entire period from 1933 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'FEDERAL RESERVE SYSTEM (Federal Reserve Act 1913) = U.S. central bank; INDEPENDENT REGULATORY COMMISSION. (1) STRUCTURE — 7 BOARD OF GOVERNORS + 12 REGIONAL FED BANKS + FOMC (12 voting: 7 Governors + NY Fed President + 4 rotating regional Fed Presidents); (2) GOVERNOR TERMS — 14 YRS (longest); chair + vice chair 4-yr designations; (3) FOR-CAUSE REMOVAL (Humphrey\'s Executor 1935); Powell-Trump tension 2018-2020 + 2025; (4) FUNDING — interest income, NOT appropriations → budgetary independence; (5) DUAL MANDATE — max employment + price stability (~2% target since 2012); (6) BANK SUPERVISION + LENDER OF LAST RESORT (2008 Bernanke; COVID 2020 Powell).'
          }
        ]
      }
    },
    {
      id: 'govburea3-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz**`,
      exercise: {
        questions: [
          {
            prompt: "Year the FEDERAL RESERVE SYSTEM was created by the Federal Reserve Act.",
            answer: '1913',
            acceptableAnswers: ['1913'],
            hint: 'Wilson era; same year as 16th + 17th Amendments.'
          },
          {
            prompt: "Year the EPA was established by Nixon executive reorganization.",
            answer: '1970',
            acceptableAnswers: ['1970'],
            hint: 'Same year as first Earth Day (April 22).'
          },
          {
            prompt: "Year the DEPARTMENT OF HOMELAND SECURITY was created post-9/11.",
            answer: '2003',
            acceptableAnswers: ['2003'],
            hint: 'Bush 43 administration; consolidated 22 agencies.'
          }
        ]
      }
    },
    {
      id: 'govburea3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each agency to its founding year + president.**`,
      exercise: {
        dropdowns: [
          {
            label: "Created 1913 (Wilson) as the U.S. central bank: ___",
            options: ['Federal Reserve', 'EPA', 'NASA', 'DHS']
          },
          {
            label: "Created 1958 (Eisenhower) in response to Sputnik for civilian space program: ___",
            options: ['Federal Reserve', 'EPA', 'NASA', 'DHS']
          },
          {
            label: "Created 2003 (G.W. Bush) post-9/11 consolidating 22 agencies: ___",
            options: ['Federal Reserve', 'EPA', 'NASA', 'DHS']
          }
        ],
        correctAnswers: ['Federal Reserve', 'NASA', 'DHS'],
        hint1: 'Federal Reserve Act 1913 — Wilson era; same year as 16th + 17th Amendments.',
        hint2: 'NASA created 1958 (Eisenhower); Sputnik launched October 1957.',
        hint3: 'DHS created November 2002 (took effect Jan 2003); largest fed reorganization since DoD 1947; consolidated 22 agencies post-9/11.'
      }
    },
    {
      id: 'govburea3-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "AP comprehensive prompt: Compare INDEPENDENT EXECUTIVE AGENCIES with INDEPENDENT REGULATORY COMMISSIONS — what are the key structural differences and what consequences do they have for presidential control?",
            options: [
              "INDEPENDENT EXECUTIVE AGENCIES vs. INDEPENDENT REGULATORY COMMISSIONS — KEY DIFFERENCES: (1) STRUCTURE — INDEPENDENT EXECUTIVE AGENCIES (EPA, NASA, CIA, GSA, OPM, SSA) have a SINGLE ADMINISTRATOR who is presidentially appointed + Senate confirmed; INDEPENDENT REGULATORY COMMISSIONS (Fed, SEC, FCC, NLRB, FTC, NRC, CPSC) have a MULTI-MEMBER BOARD (typically 5-7 commissioners) with bipartisan composition; (2) TERMS — single administrator typically serves at PRESIDENT\'S PLEASURE (no fixed term); commissioners serve FIXED STAGGERED TERMS (5-14 years depending on agency); (3) REMOVAL — single administrators removable AT WILL by president (until Seila Law v. CFPB 2020 raised constitutional doubt about for-cause protection for single-director agencies); commissioners removable ONLY FOR CAUSE (Humphrey\'s Executor v. US 1935); (4) PRESIDENTIAL CONTROL CONSEQUENCES — independent executive agencies are SUBSTANTIALLY UNDER PRESIDENTIAL CONTROL (he chooses the head; can fire); independent regulatory commissions are RELATIVELY INDEPENDENT (multi-member + fixed terms + for-cause = insulation from political pressure); (5) RATIONALE — multi-member structure for technical/expert regulation requiring CONTINUITY across administrations + INSULATION from short-term politics",
              "There is no difference between independent executive agencies and independent regulatory commissions of any kind during the entire period from 1887 onward in any region of the United States with no structural difference, no terms difference, no removal difference, no presidential control difference, and no rationale difference of any kind during the entire period in any region",
              "Independent executive agencies have multi-member boards with fixed terms, while independent regulatory commissions have single administrators serving at the president's pleasure of any kind under any circumstance with no reverse structure, no Humphrey's Executor protection for commissions, and no presidential at-will removal of single administrators of any kind during the entire period from 1887 onward in any region of the United States during the period",
              "Both independent executive agencies and independent regulatory commissions are part of Cabinet departments headed by a single Cabinet secretary of any kind under any circumstance with no separate agency status, no independent structure, and no for-cause removal protection of any kind during the entire period from 1887 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'IEAs vs. IRCs: (1) STRUCTURE — IEAs (EPA, NASA, CIA, GSA, OPM, SSA) = SINGLE ADMINISTRATOR, presidentially appointed + Senate confirmed; IRCs (Fed, SEC, FCC, NLRB, FTC, NRC, CPSC) = MULTI-MEMBER BOARD (5-7) bipartisan; (2) TERMS — single = president\'s pleasure; commissioners = FIXED STAGGERED (5-14 yrs); (3) REMOVAL — single AT WILL (until Seila Law 2020 raised doubt for single-director agencies); commissioners FOR CAUSE only (Humphrey\'s Executor 1935); (4) PRESIDENTIAL CONTROL — IEAs substantially under presidential control; IRCs relatively independent (insulation from political pressure); (5) RATIONALE — multi-member for technical/expert regulation; CONTINUITY + INSULATION.'
          },
          {
            question: "Why is the post-9/11 creation of the DEPARTMENT OF HOMELAND SECURITY (2003) constitutionally + bureaucratically significant?",
            options: [
              "DEPARTMENT OF HOMELAND SECURITY (2003) is constitutionally + bureaucratically significant for several reasons: (1) LARGEST FEDERAL REORGANIZATION SINCE 1947 — National Security Act 1947 created DoD by merging War + Navy departments; DHS consolidated 22 agencies (~180,000 employees) into a single Cabinet department including TSA (newly created 2001), Coast Guard (from Transportation), Customs (from Treasury), Secret Service (from Treasury), INS (broken into ICE + USCIS + CBP — from Justice), FEMA (from independent agency status); (2) RESPONSE TO INTELLIGENCE COORDINATION FAILURES — 9/11 Commission identified failures of intelligence-sharing across pre-9/11 fragmented agencies; (3) PRESIDENTIAL POWER EXPANSION — DHS represents significant expansion of executive branch authority over domestic security, immigration, border control, cybersecurity; (4) CONGRESSIONAL OVERSIGHT CHALLENGES — DHS subject to ~90 congressional committees + subcommittees (Government Accountability Office criticism of fragmented oversight); (5) BUDGET — ~\\$60-70B/year, 5th largest department; (6) CONTROVERSIES — TSA airport security scrutiny, ICE deportation enforcement, FEMA disaster response (Hurricane Katrina 2005, Hurricane Maria 2017), border security (Trump-Biden border policies)",
              "There is no Department of Homeland Security of any kind during the entire period from 2003 onward in any region of the United States with no Cabinet-level reorganization, no consolidation of 22 agencies, no TSA, no Coast Guard, no Customs, no Secret Service, no INS, no ICE, no USCIS, no CBP, no FEMA, no 9/11 Commission, no presidential power expansion, no congressional oversight challenges, and no controversies of any kind during the entire period in any region",
              "DHS was created in 1947 by the National Security Act and not in 2003 of any kind under any circumstance with no post-9/11 origin, no 9/11 Commission context, and no consolidation of 22 agencies of any kind during the entire period from 1947 onward in any region of the United States during the period",
              "The largest federal reorganization in U.S. history was the creation of the Department of Education in 1979 of any kind under any circumstance with no DHS 2003 reorganization, no DoD 1947 reorganization, no consolidation of 22 agencies, and no post-9/11 reorganization context of any kind during the entire period from 1979 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'DHS (2003) significance: (1) LARGEST FEDERAL REORGANIZATION SINCE 1947 (National Security Act → DoD); consolidated 22 agencies (~180,000 employees) — TSA (newly created 2001), Coast Guard (from DOT), Customs (from Treasury), Secret Service (from Treasury), INS broken into ICE + USCIS + CBP (from DOJ), FEMA (from independent); (2) RESPONSE TO 9/11 COMMISSION intelligence-sharing failures; (3) PRESIDENTIAL POWER EXPANSION — domestic security + immigration + border + cybersecurity; (4) ~90 congressional committees oversight (GAO criticized fragmentation); (5) ~\\$60-70B/yr budget; (6) CONTROVERSIES — TSA, ICE, FEMA (Katrina 2005, Maria 2017), border policies.'
          }
        ]
      }
    }
  ]
}
