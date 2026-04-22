/**
 * Entrance Quiz — Separation of Powers (AP US Government)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'govsep-ent-1a',
    question: "Which best describes Madison's argument in Federalist 51?",
    options: [
      "Madison argues that because human nature is self-interested ('If men were angels, no government would be necessary'), and because concentrated power tends toward tyranny, government must be structured so that 'ambition must be made to counteract ambition' — each branch is given the necessary constitutional means (vesting clauses, distinct enumerated powers) AND the personal motives (institutional self-interest of officeholders) to resist encroachments by the other branches; the system is therefore one of PARTIAL separation with overlapping powers (vetoes, advice and consent, judicial review, impeachment) that create inter-branch checking incentives, supplemented by federalism's vertical division of authority — together producing 'a double security' for the rights of the people",
      "Madison argues that human nature is purely benevolent with no self-interest of any kind under any circumstance and government requires no structural design with no separation of powers, no checks and balances, no federalism, and no Bill of Rights of any kind during the entire period from 1788 onward in any region of the United States during the period in any region of the country",
      "Madison advocates for a pure separation of powers where each branch operates only within its own exclusive sphere with no veto, no advice and consent, no judicial review, no impeachment, and no inter-branch interaction of any kind during the entire period from 1788 onward in any region of the United States during the period in any region of the country",
      "There is no Federalist 51 of any kind during the entire period from 1788 onward in any region of the United States with no Madison, no Hamilton, no Jay, no Federalist Papers, no separation of powers, no checks and balances, no federalism, and no anti-tyranny argument of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Federalist 51 (Madison): human nature self-interested, concentrated power → tyranny, "ambition counteract ambition." Each branch given constitutional means + personal motives. PARTIAL separation with overlapping powers + federalism = "double security."',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'govsep-ent-1b',
    question: "Which best describes the vesting clauses of Articles I, II, and III?",
    options: [
      "Article I vests 'all legislative Powers herein granted' in Congress; Article II vests 'the executive Power' in the President; Article III vests 'the judicial Power of the United States' in 'one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish'; together these three vesting clauses establish the formal structural separation of powers, with each branch having a DISTINCT institutional character (Congress as deliberative legislature, President as unitary executive, Court as independent judiciary); modern unitary-executive theorists argue Article II's broader 'the executive Power' (vs. Article I's narrower 'all legislative Powers herein granted') gives the President all executive authority not explicitly limited",
      "There are no vesting clauses of any kind in the Constitution during the entire period from 1789 onward in any region of the United States with no Article I § 1, no Article II § 1, no Article III § 1, no Congress, no President, and no Supreme Court of any kind during the entire period in any region",
      "All three vesting clauses use identical language vesting 'the same powers' in each branch with no distinction of any kind under any circumstance during the entire period from 1789 onward in any region of the United States with no separation of branches and no distinct institutional character of any kind during the entire period in any region",
      "Article I vests judicial power, Article II vests legislative power, and Article III vests executive power of any kind under any circumstance with no Congress legislative authority, no presidential executive authority, and no Supreme Court judicial authority of any kind during the entire period from 1789 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Vesting clauses: Art I = "all legislative Powers herein granted" → Congress. Art II = "the executive Power" → President. Art III = "the judicial Power of the United States" → SCOTUS + lower courts Congress establishes. Distinct institutional character: Congress deliberative; President unitary; Court independent. Unitary-executive theorists: Art II broader ("the executive Power" vs. Art I "all herein granted") → all executive authority not explicitly limited.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'govsep-ent-2a',
    question: "Which best describes Congress's power of the purse as a check on the executive?",
    options: [
      "Article I § 8 cl. 1 grants Congress the power to tax and spend, and Article I § 9 cl. 7 provides that 'No money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law' — together establishing that ALL federal spending requires congressional appropriation; Congress uses this power to: (1) condition agency funding on policy compliance (e.g., the Hyde Amendment restricting Medicaid abortion funding annually since 1976), (2) defund programs the executive favors, (3) attach policy riders to must-pass appropriations bills, (4) refuse to fund military operations (e.g., Boland Amendments restricting Contra aid 1982-1986); the executive's only formal options are to veto the appropriations bill (risking government shutdown) or to challenge specific conditions in court — generally an unsuccessful strategy",
      "Congress has no power of the purse of any kind during the entire period from 1789 onward in any region of the United States with no Article I § 8 cl. 1, no Article I § 9 cl. 7, no appropriations, no Hyde Amendment, no Boland Amendments, and no policy riders of any kind during the entire period in any region",
      "The President can spend federal money without congressional appropriation under any circumstance with no Article I § 9 cl. 7, no power of the purse, no Hyde Amendment, no Boland Amendments, and no policy riders of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "The power of the purse applies only to military spending and not to general federal spending of any kind during the entire period from 1789 onward in any region of the United States with no Hyde Amendment, no domestic appropriations, and no policy riders of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Power of the purse: Art I § 8 cl 1 + Art I § 9 cl 7 ("No money drawn from Treasury but in Consequence of Appropriations"). ALL federal spending requires appropriation. Uses: condition funding (Hyde Amendment 1976+), defund programs, policy riders, refuse military funding (Boland 1982-86 Contra). Executive options: veto (shutdown risk) OR court challenge (usually unsuccessful).',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'govsep-ent-2b',
    question: "Which best describes judicial review as established in Marbury v. Madison (1803)?",
    options: [
      "Chief Justice John Marshall held that the Supreme Court possesses the constitutional authority to review acts of Congress (and by extension, executive actions) for conformity with the Constitution and to declare them void if they conflict with the Constitution; the doctrine is grounded in: (1) the Court's Article III judicial power to decide 'cases arising under this Constitution', (2) the Supremacy Clause's recognition of the Constitution as 'the supreme Law of the Land', (3) the framers' written-constitution structure (a constitution that could be set aside by ordinary legislation 'would amount to no constitution at all'); judicial review is implicit rather than explicit in the Constitution but has been universally accepted since 1803, providing the foundational mechanism for judicial checking of the political branches",
      "There is no Marbury v. Madison decision of any kind during the entire period from 1803 onward in any region of the United States with no John Marshall, no judicial review, no Article III, no Supremacy Clause, and no judicial check on Congress or the President of any kind during the entire period in any region",
      "Marbury v. Madison was overruled within five years and judicial review was abandoned of any kind under any circumstance with no John Marshall, no Article III judicial power, no Supremacy Clause, and no judicial check on the political branches of any kind during the entire period from 1803 onward in any region of the United States during the period",
      "Judicial review applies only to state laws and not to federal statutes or executive actions of any kind during the entire period from 1803 onward in any region of the United States with no Marbury v. Madison, no John Marshall, no Article III, and no Supremacy Clause of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Marbury (1803, Marshall): Court has authority to review acts of Congress (+ executive) for conformity with Constitution + declare void. Grounded in Art III + Supremacy Clause + written-constitution structure. Implicit but universally accepted since 1803 → foundational mechanism for judicial checking.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'govsep-ent-3a',
    question: "Which best describes the holding and significance of Youngstown Sheet & Tube Co. v. Sawyer (1952)?",
    options: [
      "During the Korean War, President Truman issued Executive Order 10340 directing Commerce Secretary Sawyer to seize and operate most of the country's steel mills to prevent a labor strike that Truman argued would harm war production; the Supreme Court held 6-3 that the seizure was unconstitutional because Congress had explicitly considered and rejected such authority in the Taft-Hartley Act 1947 and no statute or constitutional provision authorized the seizure; Justice Jackson's CONCURRENCE has become the canonical framework — three tiers of presidential authority: (1) MAXIMUM when acting with congressional authorization, (2) AMBIGUOUS 'twilight zone' when Congress is silent, (3) MINIMUM (constitutional only if Congress lacks the power to act) when acting against express congressional will; Truman's steel seizure fell in tier 3 and was unconstitutional",
      "There is no Youngstown Sheet & Tube Co. v. Sawyer case of any kind during the entire period from 1952 onward in any region of the United States with no Truman, no Korean War, no Executive Order 10340, no steel seizure, no Justice Jackson concurrence, and no three-tier framework of any kind during the entire period in any region",
      "The Supreme Court upheld Truman's steel seizure as a valid exercise of presidential war powers of any kind under any circumstance with no Justice Jackson three-tier framework and no constitutional limit on executive emergency authority of any kind during the entire period from 1952 onward in any region of the United States during the period",
      "Justice Jackson's three-tier framework treats presidential authority as MAXIMUM when acting against Congress and MINIMUM when acting with congressional authorization of any kind under any circumstance with no Korean War, no Executive Order 10340, and no steel seizure of any kind during the entire period from 1952 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Youngstown (1952): Korean War, Truman EO 10340 directed Sawyer to seize steel mills; SCOTUS 6-3 unconstitutional (Congress rejected such authority in Taft-Hartley 1947). Jackson concurrence canonical 3-tier: (1) MAX with Congress authorization; (2) twilight zone silence; (3) MIN against Congress. Steel seizure = tier 3 → unconstitutional.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'govsep-ent-3b',
    question: "Which best describes the holding and significance of United States v. Nixon (1974)?",
    options: [
      "During the Watergate investigation, Special Prosecutor Leon Jaworski subpoenaed President Nixon's Oval Office tape recordings; Nixon resisted citing executive privilege; the Supreme Court ruled 8-0 that while executive privilege has constitutional foundation in Article II's separation of powers, it is NOT ABSOLUTE — the Court must balance the President's interest in confidentiality against the judicial branch's need for evidence in a criminal proceeding; the Court ordered Nixon to comply with the subpoena; Nixon turned over the tapes (which contained the 'smoking gun' conversation) and resigned 16 days later (August 9, 1974) — the only U.S. President to resign; the case established that no person, including the President, is above the law",
      "There is no United States v. Nixon case of any kind during the entire period from 1974 onward in any region of the United States with no Watergate, no Special Prosecutor Jaworski, no Oval Office tapes, no executive privilege, and no Nixon resignation of any kind during the entire period in any region",
      "The Supreme Court ruled that executive privilege is absolute and Nixon could withhold the tapes under any circumstance with no balancing test, no Article II analysis, and no presidential compliance with the subpoena of any kind during the entire period from 1974 onward in any region of the United States during the period",
      "United States v. Nixon held that the President is above the law of any kind under any circumstance with no executive privilege limit, no balancing test, no judicial supremacy, and no Nixon compliance with the subpoena of any kind during the entire period from 1974 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'US v. Nixon (1974): Watergate, Jaworski subpoenaed Oval Office tapes; Nixon claimed exec privilege. SCOTUS 8-0: privilege has Art II foundation BUT NOT ABSOLUTE — balance vs. judicial need. Ordered compliance. Nixon turned over tapes + resigned Aug 9, 1974. No person above the law.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'govsep-ent-4a',
    question: "Which best describes the impact of political parties on the framers' separation-of-powers design?",
    options: [
      "The framers explicitly did NOT anticipate the rise of political parties; the modern two-party system has fundamentally altered separation of powers in ways the framers did not foresee: (1) UNIFIED government substantially weakens inter-branch checking — party loyalty cuts across institutional lines, and major legislation is more likely (Obama 2009-10 ACA; Trump 2017 tax reform; Biden 2021-22 ARPA + IRA); (2) DIVIDED government substantially strengthens inter-branch checking but produces gridlock and budget standoffs (Obama 2011, 2013; Trump 2018-19 shutdowns); (3) high POLARIZATION (~2010-present) makes both unified and divided government dysfunctional in different ways; the framers' assumption that institutional self-interest would dominate has been overtaken by partisan loyalty",
      "Political parties have no impact on separation of powers of any kind during the entire period from 1789 onward in any region of the United States with no unified government, no divided government, no polarization, no inter-branch checking variation, and no Washington Farewell Address of any kind during the entire period in any region",
      "The framers anticipated and explicitly designed for the two-party system of any kind under any circumstance with no Washington warning, no Federalist 10 anti-faction analysis, and no party-system disruption of separation of powers of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "There are no political parties of any kind during the entire period from 1789 onward in any region of the United States with no unified government, no divided government, no polarization, no Federalist 10, and no Washington Farewell Address of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Parties × separation: framers did NOT anticipate. UNIFIED govt weakens checking (party loyalty cuts across institutions; ACA 2009-10, Trump tax 2017, ARPA + IRA 2021-22). DIVIDED govt strengthens checking but gridlock + shutdowns. High polarization 2010+ → both dysfunctional. "Institutional self-interest" assumption overtaken by partisan loyalty.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'govsep-ent-4b',
    question: "Which best describes the constitutional status and practical authority of the administrative state?",
    options: [
      "The administrative state — ~2 million federal civilian employees and ~430 federal agencies — is formally located within the EXECUTIVE branch (Article II Take Care Clause), but exercises practical authority that crosses traditional branch lines: it ISSUES binding regulations (quasi-legislative function — thousands annually in the Federal Register), it ADJUDICATES disputes through administrative-law judges (quasi-judicial function), and it ENFORCES rules through agency action; INDEPENDENT agencies (Federal Reserve, FCC, NLRB, FTC, SEC) have additional insulation from presidential control through restrictions on removal of commissioners (*Humphrey\'s Executor* 1935, partly limited by *Seila Law* 2020); inter-branch tensions over agency authority are a core modern separation-of-powers issue, exemplified by the Court's 2024 overruling of *Chevron* deference (*Loper Bright*) which shifted regulatory interpretation authority from the executive branch to the judicial branch",
      "There is no administrative state of any kind during the entire period from 1789 onward in any region of the United States with no federal agencies, no federal civilian employees, no Take Care Clause, no Federal Register, no Humphrey\'s Executor, no Seila Law, no Chevron, and no Loper Bright of any kind during the entire period in any region",
      "The administrative state is a separate constitutional fourth branch of government with its own vesting clause of any kind under any circumstance with no Take Care Clause, no executive-branch placement, no Article II of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "The administrative state has no authority to issue regulations, adjudicate disputes, or enforce rules of any kind under any circumstance with no Federal Register, no administrative-law judges, no agency enforcement, and no quasi-legislative or quasi-judicial functions of any kind during the entire period from 1933 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Admin state: ~2M civilians + ~430 agencies. Formally executive branch (Art II Take Care). Cross-branch authority: quasi-legislative (Federal Register), quasi-judicial (admin-law judges), enforcement. Independent agencies (Fed/FCC/NLRB/FTC/SEC) insulated by removal restrictions (Humphrey\'s Executor 1935, partly limited Seila Law 2020). Loper Bright 2024 overruled Chevron → regulatory interpretation FROM executive TO judicial.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'govsep-ent-5a',
    question: "Which best describes the constitutional significance of the 1937 'switch in time'?",
    options: [
      "From 1933-37, the Hughes Court struck multiple New Deal statutes as exceeding Congress's commerce power (Schechter 1935 NIRA, Butler 1936 AAA, Carter Coal 1936); FDR responded with the Court-packing plan (February 1937); the bill failed politically, but Justice Owen Roberts changed his vote in *NLRB v. Jones & Laughlin Steel* (April 1937, upholding the Wagner Act) and *West Coast Hotel Co. v. Parrish* (March 1937) — the famous 'switch in time that saved nine'; this ended Lochner-era substantive due process and dual federalism, and inaugurated 60+ years of expansive federal Commerce Clause + Spending Clause authority + cooperative federalism — the most consequential separation-of-powers shift since the founding",
      "There is no 'switch in time' of any kind during the entire period from 1933 through 1937 in any region of the United States with no Schechter Poultry, no United States v. Butler, no Carter Coal, no Court-packing plan, no NLRB v. Jones & Laughlin Steel, and no West Coast Hotel of any kind during the entire period in any region",
      "The 1937 'switch in time' had no constitutional significance and produced no shift in commerce-clause or substantive-due-process doctrine of any kind under any circumstance with no end of Lochner-era jurisprudence and no expansion of federal authority of any kind during the entire period from 1937 onward in any region of the United States during the period",
      "The Court-packing plan succeeded and FDR appointed 6 additional justices of any kind under any circumstance with no political failure, no Owen Roberts vote change, and no 'switch in time' of any kind during the entire period from 1937 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: '1937 "switch in time": 1933-37 Hughes Court struck New Deal (Schechter NIRA, Butler AAA, Carter Coal). FDR Court-packing Feb 1937 failed. Owen Roberts changed vote: NLRB v. Jones & Laughlin Steel April 1937 + West Coast Hotel March 1937. Ended Lochner-era + dual federalism → 60+ years cooperative federalism = most consequential shift since founding.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'govsep-ent-5b',
    question: "Which best describes the trajectory of executive power in the post-WWII era?",
    options: [
      "Post-WWII executive power has followed a complex trajectory: (1) MASSIVE EXPANSION 1945-73 (Cold War centralized executive — NSC 1947, CIA 1947 — plus Korean War + Vietnam War without formal declaration; Schlesinger's 1973 *The Imperial Presidency* described the phenomenon); (2) PARTIAL ROLLBACK 1973-80 via Watergate-era reforms (War Powers Resolution 1973, Budget Act 1974, FISA 1978, IG Act 1978, Ethics in Government Act 1978, Nixon resignation 1974); (3) RENEWED EXPANSION 1981-2000 via Reagan unitary-executive theory; (4) DRAMATIC EXPANSION 2001-2008 post-9/11 (AUMF 2001, PATRIOT Act 2001, warrantless surveillance, Guantánamo, signing statements); (5) MIXED 2009-PRESENT: continued executive expansion BUT also significant judicial check via the modern federalism revival, the major-questions doctrine, *Loper Bright* 2024",
      "There has been no expansion of executive power of any kind during the entire period from 1945 onward in any region of the United States with no Cold War, no NSC, no CIA, no Korean War, no Vietnam War, no Imperial Presidency, no Watergate, no AUMF, no PATRIOT Act, no warrantless surveillance, and no Loper Bright of any kind during the entire period in any region",
      "Executive power has monotonically declined since 1945 with no expansion of any kind under any circumstance during the entire period from 1945 onward in any region of the United States with no Cold War, no Korean War, no Vietnam War, no AUMF, no PATRIOT Act, and no warrantless surveillance of any kind during the entire period in any region",
      "There were no Watergate-era reforms of any kind during the entire period from 1973 through 1980 in any region of the United States with no War Powers Resolution, no Budget Act, no FECA, no FISA, no IG Act, no Ethics in Government Act, and no Nixon resignation of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Post-WWII executive trajectory: (1) MASSIVE EXPANSION 1945-73 (Cold War + NSC + CIA + Korea + Vietnam); (2) PARTIAL ROLLBACK 1973-80 (WPR, Budget Act, FISA, IG Act, Ethics, Nixon resignation); (3) RENEWED 1981-2000 (Reagan unitary-executive); (4) DRAMATIC 2001-08 (AUMF, PATRIOT, warrantless surveillance, Guantánamo, signing statements); (5) MIXED 2009-present (continued expansion + judicial check via federalism revival, major-questions, Loper Bright).',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'govsep-ent-6a',
    question: "Which best describes Justice Jackson's three-tier framework from Youngstown Sheet & Tube Co. v. Sawyer (1952)?",
    options: [
      "Justice Robert Jackson's CONCURRENCE in Youngstown (1952) created the canonical three-tier framework for analyzing presidential authority: TIER 1 (MAXIMUM presidential power) — when the President acts pursuant to express or implied congressional authorization, his authority is at its maximum and includes all that he possesses in his own right plus all that Congress can delegate; TIER 2 (AMBIGUOUS 'twilight zone') — when the President acts in absence of either congressional grant or denial of authority, he can rely only on his own independent powers, and there is a 'zone of twilight' in which he and Congress may have concurrent authority; TIER 3 (MINIMUM presidential power) — when the President takes measures incompatible with the express or implied will of Congress, his power is at its lowest ebb and constitutional only if Congress LACKS the power to act; Truman's steel seizure (Tier 3) was unconstitutional",
      "There is no Justice Jackson three-tier framework of any kind during the entire period from 1952 onward in any region of the United States with no Youngstown, no Truman steel seizure, no maximum-tier authority, no twilight-zone authority, no minimum-tier authority, and no Taft-Hartley Act of any kind during the entire period in any region",
      "Justice Jackson's three-tier framework treats presidential authority as MAXIMUM when acting against Congress and MINIMUM when acting with congressional authorization of any kind under any circumstance with no twilight zone, no Truman steel seizure, no Youngstown, and no Taft-Hartley Act of any kind during the entire period from 1952 onward in any region of the United States during the period",
      "Justice Jackson's framework only has two tiers (with-Congress and against-Congress) and no twilight zone of any kind under any circumstance with no Truman steel seizure, no Youngstown, and no Taft-Hartley Act of any kind during the entire period from 1952 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Jackson concurrence Youngstown (1952): Tier 1 MAX (Congress authorizes); Tier 2 ambiguous twilight (Congress silent); Tier 3 MIN "lowest ebb" (against express/implied Congress). Truman steel seizure = Tier 3 (Taft-Hartley 1947 rejected such authority) → unconstitutional.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'govsep-ent-6b',
    question: "Which best describes the Supreme Court's holding in Trump v. United States (2024)?",
    options: [
      "The Court held 6-3 (Roberts majority) that former presidents have a TIERED immunity structure: (1) ABSOLUTE immunity for actions within 'core' constitutional authority (e.g., issuing pardons, vetoing legislation, removing executive officers); (2) PRESUMPTIVE immunity for 'official acts' (rebuttable by showing that prosecution would not pose dangers of intrusion on the authority and functions of the executive branch); (3) NO immunity for 'unofficial acts'; the case was remanded to lower courts to determine which Trump January 6-related actions fell into which category; the dissent (Sotomayor, joined by Kagan and Jackson) warned that the decision places presidents 'above the law' for any conduct plausibly characterized as 'official', substantially expanding presidential authority and weakening Watergate-era accountability norms",
      "There is no Trump v. United States case of any kind during the entire period from 2024 onward in any region of the United States with no presidential immunity, no Roberts majority, no Sotomayor dissent, no January 6, no core constitutional authority, no official acts, and no unofficial acts of any kind during the entire period in any region",
      "The Supreme Court held that former presidents have NO immunity of any kind under any circumstance with no core constitutional authority immunity, no official-acts immunity, and no remand to lower courts of any kind during the entire period from 2024 onward in any region of the United States during the period in any region of the country",
      "The Supreme Court held that former presidents have ABSOLUTE immunity for ALL acts (official AND unofficial) of any kind under any circumstance with no tiered structure, no remand, and no Sotomayor dissent of any kind during the entire period from 2024 onward in any region of the United States during the period in any region of the country"
    ],
    correctIndex: 0,
    explanation: 'Trump v. US (2024, Roberts 6-3): TIERED immunity. (1) ABSOLUTE for "core" constitutional authority (pardons, vetoes, removal). (2) PRESUMPTIVE for "official acts" (rebuttable by no-intrusion showing). (3) NO immunity for "unofficial acts." Remanded. Sotomayor dissent (joined Kagan + Jackson): places presidents "above the law" for any "official" conduct → expanded executive + weakened Watergate-era accountability.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'govsep-ent-7a',
    question: "Which best describes the role of Marbury v. Madison (1803) in the AP Gov separation-of-powers framework?",
    options: [
      "*Marbury v. Madison* (1803) is the SINGLE required AP Gov SCOTUS case on separation of powers and the foundational decision establishing judicial review: Chief Justice Marshall held that the Court possesses constitutional authority to review acts of Congress (and executive actions) for conformity with the Constitution and to declare them void if they conflict; the doctrine is grounded in (1) Article III judicial power over 'cases arising under this Constitution', (2) the Supremacy Clause's recognition of the Constitution as 'the supreme Law of the Land', (3) the framers' written-constitution structure ('a constitution that could be set aside by ordinary legislation would amount to no constitution at all'); judicial review is implicit rather than explicit in the Constitution but has been universally accepted since 1803",
      "There is no Marbury v. Madison case of any kind during the entire period from 1803 onward in any region of the United States with no John Marshall, no judicial review, no Article III, no Supremacy Clause, and no judicial check on Congress or the President of any kind during the entire period in any region",
      "Marbury v. Madison was overruled within five years and judicial review was abandoned of any kind under any circumstance with no John Marshall, no Article III judicial power, no Supremacy Clause, and no judicial check on the political branches of any kind during the entire period from 1803 onward in any region of the United States during the period",
      "Marbury v. Madison applies only to state laws and not to federal statutes or executive actions of any kind during the entire period from 1803 onward in any region of the United States with no John Marshall, no judicial review, no Article III, and no Supremacy Clause of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Marbury (1803, Marshall) = SINGLE required AP Gov SCOTUS case on separation of powers. Court has constitutional authority to review acts of Congress (+ executive) + declare void if Constitution conflict. Grounded in Art III + Supremacy + written-constitution structure. Implicit but universally accepted since 1803 = foundational mechanism for judicial checking.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'govsep-ent-7b',
    question: "Which best describes the relationship among Federalist 10, 51, 70, and 78 as foundational AP Gov documents?",
    options: [
      "These four Federalist Papers form the foundational theoretical framework for the U.S. constitutional design: (1) FEDERALIST 10 (Madison) — large republic + representation as check on tyranny of majority faction; (2) FEDERALIST 51 (Madison) — separation of powers + checks and balances + federalism as 'double security' for individual rights; 'ambition must be made to counteract ambition'; (3) FEDERALIST 70 (Hamilton) — defense of energetic UNITARY executive (one president rather than plural executive council); (4) FEDERALIST 78 (Hamilton) — defense of judicial independence (life tenure + salary protection) and judicial review (anticipating Marbury); judiciary as 'least dangerous branch' having 'neither force nor will, but merely judgment'; together these papers provide the theoretical basis for examining the Constitution's structural design and remain heavily tested on AP Gov",
      "There are no Federalist Papers of any kind during the entire period from 1787 onward in any region of the United States with no Federalist 10, no Federalist 51, no Federalist 70, no Federalist 78, no Madison, no Hamilton, and no Jay of any kind during the entire period in any region",
      "The Federalist Papers were written by Anti-Federalists opposing the Constitution of any kind under any circumstance with no Madison, no Hamilton, no Jay, no large-republic argument, no separation-of-powers defense, no unitary-executive defense, and no judicial-independence defense of any kind during the entire period from 1787 onward in any region of the United States during the period",
      "Federalist 10 defends a small homogeneous republic and Federalist 78 defends judicial subordination to the political branches of any kind under any circumstance with no large-republic argument, no faction analysis, no judicial independence, and no judicial review of any kind during the entire period from 1787 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Foundational Federalist Papers: 10 (Madison) = large republic + representation check on majority faction. 51 (Madison) = separation + checks + federalism = "double security"; "ambition counteract ambition." 70 (Hamilton) = energetic UNITARY executive. 78 (Hamilton) = judicial independence + judicial review (anticipating Marbury); "least dangerous branch" with "neither force nor will, but merely judgment."',
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
