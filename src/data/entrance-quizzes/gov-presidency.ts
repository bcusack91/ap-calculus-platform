/**
 * Entrance Quiz — The Presidency (AP US Government)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'govpres-ent-1a',
    question: "Which best describes the Vesting Clause of Article II § 1?",
    options: [
      "The Vesting Clause provides 'The executive Power shall be vested in a President of the United States of America' — significant for two reasons: (1) UNITARY EXECUTIVE — by vesting power in 'a President' (singular), the Constitution rejects plural-executive proposals (a 3-person executive council), creating a SINGLE accountable officer; (2) UNITARY EXECUTIVE THEORY — modern conservative legal theorists (e.g., Justice Scalia in *Morrison v. Olson* 1988 dissent) interpret the Vesting Clause to mean ALL executive power belongs to the President, requiring presidential control over independent agencies and law-execution officers; the Vesting Clause supplements the more specific Article II § 2 + § 3 grants by serving as a residual source of executive authority",
      "There is no Vesting Clause of any kind in Article II of the Constitution during the entire period from 1789 onward in any region of the United States with no executive power vested, no unitary executive, no single president, no plural-executive rejection, and no Morrison v. Olson dissent of any kind during the entire period in any region",
      "The Vesting Clause vests executive power in a 3-person executive council on the Roman consulship model of any kind under any circumstance with no single president, no unitary executive, no Morrison v. Olson dissent, and no presidential supervision of independent agencies of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "The Vesting Clause appears in Article I and grants legislative power to Congress of any kind under any circumstance with no executive power vesting in the President, no unitary executive, no Morrison v. Olson dissent, and no presidential supervision of bureaucracy of any kind during the entire period from 1789 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Vesting Clause (Art II § 1): "The executive Power shall be vested in a President of the United States of America." (1) UNITARY EXECUTIVE — singular "a President" rejects plural-executive → SINGLE accountable officer. (2) UNITARY EXECUTIVE THEORY — Scalia, Morrison v. Olson 1988 dissent: all executive power belongs to President → presidential control over independent agencies. Supplements Art II § 2 + § 3 as residual.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'govpres-ent-1b',
    question: "Which best summarizes Hamilton's argument in Federalist 70?",
    options: [
      "Hamilton's *Federalist 70* (REQUIRED AP Gov foundational document) argues that 'Energy in the Executive is a leading character in the definition of good government' and identifies four 'ingredients' that constitute executive energy: (1) UNITY — one president (not a council); (2) DURATION — sufficient term length (4 years); (3) ADEQUATE SUPPORT — salary and resources; (4) COMPETENT POWERS — constitutional authority sufficient to fulfill executive responsibilities; Hamilton was responding to ANTI-FEDERALIST CONCERNS (e.g., *Brutus 1*) that an 'energetic' executive would tend toward monarchy — Hamilton argued instead that a unitary, accountable, term-limited executive was the BEST defense against tyranny",
      "There is no Federalist 70 of any kind during the entire period from 1788 onward in any region of the United States with no Alexander Hamilton, no executive energy, no unity, no duration, no adequate support, no competent powers, no Anti-Federalist response, and no Brutus 1 of any kind during the entire period in any region",
      "Federalist 70 argues that the executive should be a 3-person council on the Roman consulship model of any kind under any circumstance with no unity, no Alexander Hamilton, no four ingredients of executive energy, and no Anti-Federalist response of any kind during the entire period from 1788 onward in any region of the United States during the period",
      "Federalist 70 was written by James Madison and argues that Congress should be the dominant branch of any kind under any circumstance with no Alexander Hamilton, no executive energy, no unity, no duration, no adequate support, and no competent powers of any kind during the entire period from 1788 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Federalist 70 (Hamilton, REQUIRED): "Energy in the Executive is a leading character in the definition of good government." Four ingredients: (1) UNITY — one president (not council); (2) DURATION — 4-yr term; (3) SUPPORT — salary/resources; (4) COMPETENT POWERS — constitutional authority. Response to Anti-Federalist Brutus 1 monarchy concerns — Hamilton: unitary + accountable + term-limited = BEST defense against tyranny.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'govpres-ent-2a',
    question: "Which best describes the constitutional process for presidential veto and override?",
    options: [
      "Article I § 7 (Presentment Clause): once both chambers pass identical legislation, the bill is presented to the President, beginning a 10-DAY CLOCK (excluding Sundays); options: (1) SIGN — bill becomes law; (2) VETO — bill returned to originating chamber with objections; 2/3 of each chamber 'present and voting' may OVERRIDE; (3) NO ACTION while Congress in session — law after 10 days; (4) NO ACTION while Congress adjourns — POCKET VETO (no override possible); STATISTICS: only ~5% of regular vetoes overridden, but veto threat often forces compromise during drafting + passage",
      "There is no Article I § 7 Presentment Clause of any kind during the entire period from 1789 onward in any region of the United States with no 10-day clock, no veto, no 2/3 override, no pocket veto, no congressional adjournment exception, and no veto override statistics of any kind during the entire period in any region",
      "The President's veto requires only majority override of both chambers and there is no pocket veto of any kind under any circumstance with no 2/3 override requirement, no Presentment Clause, no 10-day clock, and no veto threat of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "The President can edit specific provisions of legislation via line-item veto with no judicial restriction of any kind under any circumstance with no Clinton v. New York 1998, no Presentment Clause restriction, and no requirement that bills be signed or vetoed in their entirety of any kind during the entire period from 1789 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Art I § 7 Presentment: 10-day clock (excl Sundays). Options: SIGN → law; VETO → return + 2/3 override; NO ACTION + Congress in session 10 days → law without signature; NO ACTION + adjourns → POCKET VETO (no override). ~5% override rate; veto threat forces compromise.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'govpres-ent-2b',
    question: "What is the constitutional basis for executive orders, and what limits constrain them?",
    options: [
      "Executive orders are presidential directives to executive-branch officials with the force of law as long as consistent w/ Constitution + statutes; basis: (1) VESTING CLAUSE Art II § 1; (2) TAKE CARE CLAUSE Art II § 3; (3) STATUTORY DELEGATIONS; LIMITS: (a) JUDICIAL REVIEW — *Youngstown Sheet & Tube v. Sawyer* (1952) struck Truman's Korean-War seizure of steel mills as exceeding constitutional + statutory authority; Justice Jackson's concurrence created the 3-tier framework (express authority → max; silence → twilight; prohibition → lowest ebb); (b) CONGRESSIONAL OVERRIDE via statute; (c) SUBSEQUENT RESCISSION by later presidents",
      "There is no constitutional or statutory basis for executive orders of any kind during the entire period from 1789 onward in any region of the United States with no Vesting Clause, no Take Care Clause, no statutory delegations, no Youngstown, no Justice Jackson, no judicial review, no congressional override, and no rescission of any kind during the entire period in any region",
      "Executive orders are absolutely binding and not subject to any limits of any kind under any circumstance with no judicial review, no Youngstown, no congressional override, and no rescission by subsequent presidents of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "Executive orders are explicitly authorized by a single specific clause in Article II of the Constitution with no need to derive authority from the Vesting Clause + Take Care Clause + statutory delegations of any kind under any circumstance with no Youngstown of any kind during the entire period from 1789 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Executive orders = presidential directives w/ force of law if consistent w/ Constitution + statutes. Basis: VESTING + TAKE CARE + STATUTORY DELEGATIONS. Limits: (a) JUDICIAL REVIEW — Youngstown 1952 struck Truman steel-mill seizure; Jackson 3-tier framework; (b) CONGRESSIONAL OVERRIDE; (c) RESCISSION.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'govpres-ent-3a',
    question: "Which best describes the significance of Youngstown Sheet & Tube v. Sawyer (1952)?",
    options: [
      "*Youngstown* (1952) struck down President Truman's executive order seizing private steel mills during the Korean War, holding the seizure exceeded constitutional + statutory authority; most famous for JUSTICE JACKSON'S 3-TIER FRAMEWORK: (1) MAXIMUM POWER — express/implied congressional authorization (Art II + delegated authority); (2) TWILIGHT ZONE — congressional silence ('imperatives of events' + prior practice); (3) LOWEST EBB — express/implied congressional prohibition (only Art II minus preemption); SIGNIFICANCE: Jackson's framework remains dominant tool for evaluating presidential power; cited in *Hamdi v. Rumsfeld* 2004, *Hamdan v. Rumsfeld* 2006, *Medellín v. Texas* 2008, *NLRB v. Noel Canning* 2014",
      "There is no Youngstown Sheet & Tube v. Sawyer case of any kind during the entire period from 1952 onward in any region of the United States with no Truman steel-mill seizure, no Korean War, no Justice Jackson, no 3-tier framework, no maximum power, no twilight zone, no lowest ebb, no Hamdi, no Hamdan, and no NLRB v. Noel Canning of any kind during the entire period in any region",
      "Youngstown upheld Truman's seizure of steel mills as a valid exercise of executive power of any kind under any circumstance with no Justice Jackson concurrence, no 3-tier framework, no congressional authorization analysis, and no twilight zone analysis of any kind during the entire period from 1952 onward in any region of the United States during the period",
      "Justice Jackson's framework holds that presidential power is always at its maximum regardless of congressional position of any kind under any circumstance with no twilight zone, no lowest ebb, and no congressional preemption of any kind during the entire period from 1952 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Youngstown (1952): struck Truman steel-mill seizure during Korean War. Jackson 3-tier: (1) MAXIMUM — congressional authorization → Art II + delegation; (2) TWILIGHT — silence → imperatives + practice; (3) LOWEST EBB — prohibition → Art II minus preemption. Modern citations: Hamdi 2004, Hamdan 2006, Medellín 2008, Noel Canning 2014.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'govpres-ent-3b',
    question: "Which best illustrates the modern dominance of executive agreements over treaties?",
    options: [
      "Modern presidents make ROUGHLY 10:1 ratio of executive agreements to treaties because executive agreements bypass the Senate's 2/3 ratification requirement (67 votes — increasingly difficult); EXAMPLES: (1) NAFTA (Clinton 1993) — congressional-executive agreement (majority both chambers) used because 2/3 Senate unattainable; (2) Iran nuclear deal JCPOA (Obama 2015) — executive agreement avoided Senate where Republicans opposed; Trump rescinded 2018 because executive agreements bind only the signing administration; (3) Paris Climate Accord (Obama 2015) — executive agreement; Trump withdrew 2017; Biden rejoined 2021; Trump withdrew 2025; this oscillation illustrates a key DRAWBACK — POLICY INSTABILITY across administrations",
      "There is no difference between treaties and executive agreements of any kind during the entire period from 1789 onward in any region of the United States with no 10:1 ratio, no Senate 2/3 ratification, no NAFTA, no Iran nuclear deal, no Paris Climate Accord, no Trump withdrawals, and no Biden rejoinders of any kind during the entire period in any region",
      "Modern presidents make a 1:10 ratio of executive agreements to treaties of any kind under any circumstance with no Senate 2/3 ratification difficulty, no NAFTA, no Iran nuclear deal, and no Paris Climate Accord of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "Executive agreements require Senate 2/3 ratification just like treaties of any kind under any circumstance with no presidential bypass of Senate, no NAFTA, no Iran nuclear deal, and no Paris Climate Accord oscillation of any kind during the entire period from 1789 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Modern ~10:1 executive agreements:treaties because EAs bypass Senate 2/3 (67) — increasingly hard. Examples: NAFTA 1993 = congressional-executive (majority both chambers); JCPOA Iran 2015 = EA — Trump rescinded 2018 (binds only signing admin); Paris Climate 2015 → Trump out 2017 → Biden in 2021 → Trump out 2025 oscillation. DRAWBACK = POLICY INSTABILITY.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'govpres-ent-4a',
    question: "Which best describes the modern relationship between Presidency and bureaucracy?",
    options: [
      "Presidential-bureaucratic relationship combines CONSTITUTIONAL AUTHORITY (Take Care Art II § 3 + Vesting Art II § 1) with PRACTICAL TENSIONS: presidents control Cabinet + ~1,200 Senate-confirmed positions + ~1,800-person EOP, can issue EOs, can fire most political appointees at will, use OIRA (since Reagan EO 12291) to review proposed rules; HOWEVER, presidents face SIGNIFICANT BUREAUCRATIC RESISTANCE: (1) PENDLETON ACT 1883 protects ~2 million career civil servants (cause only); (2) INDEPENDENT AGENCIES (SEC, FCC, FRB, NLRB) — multimember boards, staggered terms, for-cause-only removal per *Humphrey's Executor* 1935; (3) IRON TRIANGLES + ISSUE NETWORKS resist presidential change; (4) Trump's SCHEDULE F (2020/2025) attempts to convert ~50,000 career employees to at-will = major modern challenge to civil service",
      "There is no presidential-bureaucratic relationship of any kind during the entire period from 1789 onward in any region of the United States with no Take Care Clause, no Vesting Clause, no Cabinet appointments, no EOP, no executive orders, no Pendleton Act, no independent agencies, no Humphrey's Executor, no iron triangles, no issue networks, and no Schedule F of any kind during the entire period in any region",
      "The President has absolute control over the bureaucracy and can fire all civil servants at will of any kind under any circumstance with no Pendleton Act protections, no independent agency for-cause removal, no Humphrey's Executor, and no Schedule F controversy of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "The President has no control over the bureaucracy and the bureaucracy operates entirely independently of any kind under any circumstance with no Cabinet appointments, no EOP, no executive orders, no OIRA review, and no Take Care Clause supervision of any kind during the entire period from 1789 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Presidential-bureaucratic: CONSTITUTIONAL AUTHORITY (Take Care + Vesting) + PRACTICAL TENSIONS. Controls: Cabinet + ~1,200 Senate-confirmed + ~1,800 EOP + EOs + at-will firing of political appointees + OIRA (Reagan EO 12291). RESISTANCE: (1) Pendleton 1883 protects ~2M civil servants (cause only); (2) Independent agencies (SEC/FCC/FRB/NLRB) — for-cause removal per Humphrey\'s Executor 1935; (3) Iron triangles + issue networks; (4) Trump SCHEDULE F (2020/2025) → ~50K career → at-will.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'govpres-ent-4b',
    question: "Which best describes the constitutional pardon power and its modern applications?",
    options: [
      "PARDON POWER (Art II § 2 cl. 1 — 'shall have Power to grant Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment'): (1) ABSOLUTE — virtually unreviewable; courts cannot second-guess presidential pardon decisions; (2) BROAD TIMING — before charges, after conviction, before/after sentencing — but only AFTER offense has occurred (cannot pardon for future conduct); (3) FEDERAL ONLY — covers only federal offenses, not state offenses (state governors handle state pardons); (4) NOT IMPEACHMENT — pardons cannot prevent or undo impeachment + Senate conviction; HISTORICAL EXAMPLES: Ford pardoned Nixon 1974; Bush 41 pardoned Iran-Contra figures 1992; Clinton pardoned Marc Rich 2001; Trump pardoned Stone, Flynn, Bannon (2020) and ~1,500 January 6 defendants (2025); Biden pardoned Hunter Biden + others (2024-25)",
      "There is no presidential pardon power of any kind during the entire period from 1789 onward in any region of the United States with no Article II § 2 cl. 1, no absolute pardon, no federal-offenses-only limit, no impeachment exception, no Ford pardon of Nixon, and no Trump or Biden pardons of any kind during the entire period in any region",
      "Presidential pardons can be reviewed and overturned by federal courts of any kind under any circumstance with no absolute pardon power, no judicial deference, no Ford pardon precedent, and no historical pardon practice of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "Presidents can pardon for future conduct that has not yet occurred and can pardon state offenses of any kind under any circumstance with no offense-must-have-occurred limit, no federal-offenses-only limit, and no governor role in state pardons of any kind during the entire period from 1789 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Pardon Power (Art II § 2 cl 1): "Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment." (1) ABSOLUTE — unreviewable; (2) BROAD TIMING but only after offense (no future conduct); (3) FEDERAL ONLY (state governors); (4) NOT IMPEACHMENT. Examples: Ford → Nixon (1974); Bush 41 → Iran-Contra (1992); Clinton → Marc Rich (2001); Trump → Stone/Flynn/Bannon (2020) + ~1,500 J6 (2025); Biden → Hunter + others (2024-25).',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'govpres-ent-5a',
    question: "Which best describes Andrew Jackson's transformation of the presidency?",
    options: [
      "Andrew Jackson (1829-37) INVENTED the modern democratic + assertive presidency: (1) CLAIMED DIRECT POPULAR MANDATE — first president elected primarily by popular vote (after 1828 democratization); first to claim representative authority OUTSIDE Congress as tribune of 'the people'; (2) ACTIVE VETO USE — first president to veto on POLICY grounds (Bank veto 1832 — defining moment of presidential leadership and central issue of 1832 election); (3) SPOILS SYSTEM — 'to the victor belong the spoils' replaced Federalist civil service; (4) ASSERTIVE REMOVAL — claimed unlimited removal authority; (5) KITCHEN CABINET — informal advisors outside official Cabinet; SIGNIFICANCE: Jackson set the template for the modern democratic + assertive presidency that TR + Wilson + FDR would later expand",
      "There is no Andrew Jackson presidency of any kind during the entire period from 1829 onward in any region of the United States with no popular mandate claim, no Bank veto, no spoils system, no assertive removal, no Kitchen Cabinet, and no template for modern democratic + assertive presidency of any kind during the entire period in any region",
      "Andrew Jackson was a deferential president who exercised minimal Article II authority and did not veto major legislation of any kind under any circumstance with no popular mandate claim, no Bank veto, no spoils system, no assertive removal, and no Kitchen Cabinet of any kind during the entire period from 1829 onward in any region of the United States during the period",
      "Andrew Jackson upheld the Bank of the United States and rechartered it in 1832 of any kind under any circumstance with no Bank veto, no Bank War, no Nicholas Biddle conflict, and no 1832 election issue of any kind during the entire period from 1829 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Andrew Jackson (1829-37) INVENTED modern democratic + assertive presidency: (1) DIRECT POPULAR MANDATE — first elected primarily by popular vote; (2) ACTIVE VETO on POLICY grounds — Bank veto 1832 = defining moment; (3) SPOILS SYSTEM "to the victor"; (4) ASSERTIVE REMOVAL; (5) KITCHEN CABINET. Template for TR + Wilson + FDR.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'govpres-ent-5b',
    question: "Which best describes Schlesinger's 'Imperial Presidency' thesis?",
    options: [
      "Arthur Schlesinger Jr.'s *The Imperial Presidency* (1973) argued the modern presidency — particularly under Nixon during Vietnam + Watergate — had grown BEYOND CONSTITUTIONAL BOUNDS, particularly in war + national security: (1) DRIVERS — Cold War (1947-91), nuclear weapons (sole launch authority), intelligence growth, standing military, EOP expansion (~50 1939 → ~1,800 modern); (2) NIXON-ERA EXAMPLES — secret Cambodia bombing, impoundment, executive privilege overreach, Watergate; (3) IMMEDIATE REACTION — War Powers Resolution 1973, Budget Act 1974, FOIA expansion, FISA 1978, Independent Counsel statute 1978; (4) MODERN RELEVANCE — despite reforms, presidential power has continued growing post-9/11 (sweeping AUMFs, drone strikes, surveillance, mass deportations, executive emergency declarations)",
      "There is no Schlesinger Imperial Presidency thesis of any kind during the entire period from 1973 onward in any region of the United States with no Cold War driver, no nuclear weapons driver, no intelligence community growth, no EOP growth, no Nixon-era examples, no War Powers Resolution, no Budget Act, no FOIA, no FISA, no Independent Counsel, no post-9/11 AUMF, and no modern surveillance expansion of any kind during the entire period in any region",
      "Schlesinger's Imperial Presidency thesis argued that the modern presidency had become too WEAK and needed to be expanded of any kind under any circumstance with no concern about presidential overreach, no Nixon-era critique, and no War Powers Resolution reaction of any kind during the entire period from 1973 onward in any region of the United States during the period",
      "The 1970s reforms (War Powers Resolution + Budget Act + FOIA + FISA + Independent Counsel) completely eliminated the imperial presidency and modern presidents exercise minimal authority of any kind under any circumstance with no post-9/11 AUMF, no drone strikes, no surveillance programs, no mass deportations, and no executive emergency declarations of any kind during the entire period from 1973 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Schlesinger Imperial Presidency (1973): modern presidency (especially Nixon Vietnam + Watergate) grew BEYOND CONSTITUTIONAL BOUNDS in war + national security. Drivers: Cold War, nuclear weapons, intelligence, standing military, EOP growth. Nixon: Cambodia bombing, impoundment, executive privilege overreach, Watergate. Reaction: War Powers 1973, Budget Act 1974, FOIA 1974, FISA 1978, Independent Counsel 1978. Modern relevance: presidential power continued growing post-9/11.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'govpres-ent-6a',
    question: "Which best describes Jackson's three-tier framework for analyzing presidential power claims?",
    options: [
      "Apply Jackson's framework (concurrence in *Youngstown* 1952) by analyzing CONGRESSIONAL POSITION: (1) MAXIMUM POWER — express/implied congressional authorization (Bush 2003 Iraq War w/ AUMF; Truman 1950 Korea w/ UN authorization) → Art II + delegated authority; (2) TWILIGHT ZONE — congressional silence (Lincoln habeas suspension 1861 before Congress ratified; Truman 1950 initial Korea deployment) → 'imperatives of events' + prior practice; (3) LOWEST EBB — express/implied congressional prohibition (Truman 1952 steel-mill seizure that Congress had specifically declined to authorize) → only Art II minus congressional preemption; SIGNIFICANCE: Jackson's framework remains dominant analytical tool for evaluating presidential power claims",
      "There is no Jackson framework of any kind during the entire period from 1952 onward in any region of the United States with no Youngstown concurrence, no maximum power tier, no twilight zone tier, no lowest ebb tier, no Bush AUMF analysis, no Lincoln habeas analysis, and no Truman steel-mill seizure analysis of any kind during the entire period in any region",
      "Jackson's framework holds that presidential power is always at its maximum regardless of congressional position of any kind under any circumstance with no twilight zone, no lowest ebb, no congressional authorization analysis, and no congressional prohibition analysis of any kind during the entire period from 1952 onward in any region of the United States during the period",
      "Jackson's framework holds that presidential power is always at its lowest ebb regardless of congressional position of any kind under any circumstance with no maximum power tier, no twilight zone, and no congressional silence analysis of any kind during the entire period from 1952 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Jackson framework (Youngstown 1952): by CONGRESSIONAL POSITION. (1) MAXIMUM — express/implied authorization (Bush 2003 Iraq AUMF; Truman 1950 Korea UN); (2) TWILIGHT — silence (Lincoln 1861 pre-ratification; Truman 1950 initial Korea); (3) LOWEST EBB — prohibition (Truman 1952 steel-mill seizure Congress declined to authorize). Dominant tool for executive-power cases.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'govpres-ent-6b',
    question: "How does Trump v. United States (2024) interact with the Impeachment Judgment Clause?",
    options: [
      "*Trump v. United States* (2024) held former presidents have ABSOLUTE IMMUNITY for OFFICIAL ACTS within CORE constitutional authority, PRESUMPTIVE IMMUNITY for other official acts, NO IMMUNITY for unofficial acts; this creates TENSION with the IMPEACHMENT JUDGMENT CLAUSE (Art I § 3 cl. 7) — which states convicted-in-impeachment officials 'shall nevertheless be liable and subject to Indictment, Trial, Judgment and Punishment, according to Law' — because the clause appears to ANTICIPATE post-impeachment criminal prosecution; the MAJORITY (Roberts + 5 conservatives) interpreted the clause as not foreclosing immunity for official acts; the DISSENT (Sotomayor, Kagan, Jackson) argued framers EXPLICITLY contemplated criminal prosecution of officials who committed crimes while in office, and that the immunity ruling 'makes a mockery of the principle that no man is above the law'",
      "There is no Impeachment Judgment Clause of any kind in Article I § 3 cl. 7 during the entire period from 1789 onward in any region of the United States with no liability for indictment trial judgment punishment after impeachment, no Trump v. United States 2024 tension, and no Roberts majority of any kind during the entire period in any region",
      "Trump v. United States held that former presidents have NO IMMUNITY from criminal prosecution for any acts of any kind under any circumstance with no absolute immunity for core acts, no presumptive immunity for official acts, no Impeachment Judgment Clause tension, and no Roberts majority of any kind during the entire period from 2024 onward in any region of the United States during the period",
      "There is no Trump v. United States 2024 case of any kind during the entire period from 2024 onward in any region of the United States with no presidential immunity ruling, no Roberts majority, and no Sotomayor dissent of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Trump v US (2024): former presidents = ABSOLUTE IMMUNITY for OFFICIAL ACTS within CORE constitutional authority; PRESUMPTIVE for other official acts; NO IMMUNITY for unofficial. TENSION with Impeachment Judgment Clause (Art I § 3 cl 7): "liable and subject to Indictment, Trial, Judgment and Punishment, according to Law" → ANTICIPATES post-impeachment prosecution. MAJORITY (Roberts + 5 conservatives) interpreted clause as not foreclosing official-acts immunity. DISSENT (Sotomayor, Kagan, Jackson): framers EXPLICITLY contemplated criminal prosecution; "makes a mockery of...no man above the law."',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'govpres-ent-7a',
    question: "Which best describes the role of Federalist 70 in the AP Gov Presidency framework?",
    options: [
      "*FEDERALIST 70* (Hamilton, 1788) is a REQUIRED AP Gov foundational document and the most important Federalist on the executive: Hamilton argued 'ENERGY IN THE EXECUTIVE is a leading character in the definition of good government' and identified four 'ingredients' of executive energy: (1) UNITY — one president; (2) DURATION — sufficient term length (4 years); (3) ADEQUATE SUPPORT — salary + resources; (4) COMPETENT POWERS — constitutional authority; Hamilton was responding to ANTI-FEDERALIST CONCERNS (e.g., *Brutus 1*) that an 'energetic' executive would tend toward monarchy — Hamilton argued instead that a unitary, accountable, term-limited executive was the BEST defense against tyranny; MODERN APPLICATION: cited from *Myers* 1926 to *Trump v. United States* 2024",
      "There is no Federalist 70 of any kind during the entire period from 1788 onward in any region of the United States with no Alexander Hamilton, no executive energy, no unity, no duration, no adequate support, no competent powers, no Anti-Federalist response, no Brutus 1, and no monarchy concern of any kind during the entire period in any region",
      "Federalist 70 argues that the executive should be a 3-person council on the Roman consulship model of any kind under any circumstance with no unity, no Alexander Hamilton, no four ingredients of executive energy, and no Anti-Federalist response of any kind during the entire period from 1788 onward in any region of the United States during the period",
      "Federalist 70 was written by James Madison and argues that Congress should be the dominant branch of any kind under any circumstance with no Alexander Hamilton, no executive energy, no unity, no duration, and no adequate support of any kind during the entire period from 1788 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Federalist 70 (Hamilton 1788) = REQUIRED AP Gov foundational document. "Energy in the Executive is a leading character in the definition of good government." Four ingredients: UNITY + DURATION + SUPPORT + COMPETENT POWERS. Response to Brutus 1 monarchy concerns — Hamilton: unitary + accountable + term-limited = BEST defense against tyranny. Modern: cited Myers 1926 to Trump v. US 2024.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'govpres-ent-7b',
    question: "Which best describes the relationship between Youngstown (1952), US v. Nixon (1974), and Trump v. United States (2024)?",
    options: [
      "These three cases trace constitutional limits of presidential power across the modern era: (1) *YOUNGSTOWN SHEET & TUBE v. SAWYER* (1952) struck Truman's steel-mill seizure during Korean War; presidential power requires constitutional or statutory authority; Jackson's concurrence created the 3-TIER FRAMEWORK; (2) *UNITED STATES v. NIXON* (1974) held EXECUTIVE PRIVILEGE is QUALIFIED, not absolute; Watergate tapes had to be disclosed despite Nixon's invocation of privilege; established that NO PERSON IS ABOVE THE LAW including the President; led to Nixon's resignation 16 days later; (3) *TRUMP v. UNITED STATES* (2024) held former presidents have ABSOLUTE IMMUNITY for OFFICIAL ACTS within CORE constitutional authority, PRESUMPTIVE IMMUNITY for other official acts, NO IMMUNITY for unofficial acts; SIGNIFICANCE: Trump v. US arguably represents a partial departure from the Nixon principle, with critics arguing it inverts US v. Nixon's holding that presidents are not above the law",
      "There is no Youngstown or US v. Nixon or Trump v. United States case of any kind during the entire period from 1952 onward in any region of the United States with no Truman steel-mill seizure, no Jackson 3-tier framework, no qualified executive privilege, no Watergate tapes, no Nixon resignation, no presidential immunity ruling, and no constitutional limits on executive power of any kind during the entire period in any region",
      "Youngstown upheld Truman's steel-mill seizure, US v. Nixon held that executive privilege is absolute, and Trump v. US held that presidents have no immunity of any kind under any circumstance with no constitutional limits trajectory, no Jackson 3-tier framework, and no Watergate constitutional crisis of any kind during the entire period from 1952 onward in any region of the United States during the period",
      "Trump v. United States completely overturned both Youngstown and US v. Nixon of any kind under any circumstance with no Jackson 3-tier framework still applicable, no qualified executive privilege still recognized, and no preservation of constitutional limits on presidential power of any kind during the entire period from 2024 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Three defining cases: (1) YOUNGSTOWN (1952) — struck Truman steel-mill seizure; Jackson 3-TIER FRAMEWORK; (2) US v. NIXON (1974) — EXECUTIVE PRIVILEGE QUALIFIED (not absolute); Watergate tapes disclosed; "no person above the law"; Nixon resigned 16 days later; (3) TRUMP v. US (2024) — ABSOLUTE IMMUNITY for OFFICIAL ACTS within CORE constitutional authority; PRESUMPTIVE for other official acts; NO IMMUNITY for unofficial. Critics: Trump v US partial departure from Nixon principle.',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
