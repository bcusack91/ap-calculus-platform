/**
 * Entrance Quiz — Constitutional Foundations
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'govconst-ent-1a',
    question: 'Which best describes the Enlightenment foundations of the U.S. Constitution?',
    options: [
      "The Constitution drew on multiple Enlightenment thinkers: John Locke (*Second Treatise of Government*, 1689) provided the doctrine of natural rights (life, liberty, property) and government by consent of the governed (basis of the Declaration of Independence and 5th/14th Amendment due process); Baron de Montesquieu (*The Spirit of the Laws*, 1748) provided the doctrine of separation of powers (Articles I/II/III) and checks and balances; Thomas Hobbes (*Leviathan*, 1651) provided the doctrine of sovereignty over the state of nature; and Jean-Jacques Rousseau (*The Social Contract*, 1762) provided the doctrine of popular sovereignty ('We the People') — each leaving distinct fingerprints on the constitutional text",
      "The Constitution had no Enlightenment foundations of any kind with no Locke, no Montesquieu, no Hobbes, and no Rousseau influence of any kind during the entire period from 1787 onward in any region of the United States during the period in any region of the country",
      "The Constitution drew exclusively on Locke with no Montesquieu, no Hobbes, and no Rousseau influence of any kind during the entire period from 1787 onward in any region of the United States during the period in any region of the country",
      "There were no Enlightenment thinkers of any kind that influenced the Constitution during the entire period from 1787 onward in any region of the United States with no Second Treatise, no Spirit of the Laws, no Leviathan, and no Social Contract of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Constitution\'s Enlightenment foundations: Locke (Second Treatise 1689) → natural rights + consent (Declaration + 5th/14th due process); Montesquieu (Spirit of the Laws 1748) → separation of powers + checks (Art I/II/III); Hobbes (Leviathan 1651) → sovereignty over state of nature; Rousseau (Social Contract 1762) → popular sovereignty ("We the People").',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'govconst-ent-1b',
    question: 'Which best describes the Federalist–Anti-Federalist debate (1787–88)?',
    options: [
      "The Federalists (Hamilton, Madison, Jay — *Federalist Papers* Oct 1787-Aug 1788) argued for a strong national government to address the failures of the Articles of Confederation (post-Revolutionary debt crisis, interstate commerce disputes, Shays\' Rebellion 1786-87) through enumerated and implied federal powers, separated powers, and indirect representation; the Anti-Federalists (Brutus, Cato, Patrick Henry, George Mason, Mercy Otis Warren) argued that the proposed Constitution would consolidate dangerous federal power, threaten state sovereignty, and lack explicit individual-rights protections; the debate was resolved by the Constitution\'s ratification (NH 9th state, June 21, 1788; effective March 4, 1789) WITH the Federalist concession of a Bill of Rights (drafted 1789, ratified Dec 15, 1791) — the Anti-Federalists\' price for ratification",
      "The Federalist–Anti-Federalist debate had no participants of any kind with no Hamilton, no Madison, no Jay, no Brutus, no Cato, no Patrick Henry, no George Mason, no Mercy Otis Warren, no Federalist Papers, and no Bill of Rights concession of any kind during the entire period in any region",
      "The Federalists and Anti-Federalists were entirely identical in their positions with no meaningful debate of any kind during the entire period from 1787 through 1791 in any region of the United States during the period in any region of the country",
      "There was no Federalist–Anti-Federalist debate of any kind during the entire period from 1787 through 1791 in any region of the United States with no Federalist Papers, no Brutus No. 1, no Bill of Rights, no ratification, and no constitutional debate of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Federalist-Anti-Federalist debate (1787-88): Federalists (Hamilton/Madison/Jay — Federalist Papers Oct 1787-Aug 1788) for strong national government addressing Articles failures (debt + commerce + Shays 1786-87); Anti-Federalists (Brutus/Cato/Henry/Mason/Warren) against consolidation + for state sovereignty + explicit rights. Resolved: Constitution ratified (NH 9th, June 21 1788; effective March 4 1789) WITH Bill of Rights concession (drafted 1789, ratified Dec 15 1791).',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'govconst-ent-2a',
    question: 'Which best describes the Article V amendment process?',
    options: [
      "Article V provides two methods for proposal and two for ratification: PROPOSAL by either (1) two-thirds vote of both houses of Congress (used for all 27 amendments) or (2) two-thirds of state legislatures (currently 34 of 50) calling a constitutional convention (never used at federal level); RATIFICATION by either (1) three-fourths of state legislatures (currently 38 of 50, used for all but one amendment) or (2) three-fourths of state ratifying conventions (used once: 21st Amendment 1933 repealing Prohibition); the process is one of the most difficult in any constitutional democracy and has produced only 27 amendments in 230+ years (only 1 since 1971 — the 27th, 1992, on congressional pay raises)",
      "Article V provides for amendment by simple majority of one house of Congress with no two-thirds proposal threshold and no three-fourths ratification threshold of any kind during the entire period from 1789 onward in any region of the United States during the period in any region of the country",
      "Article V provides for amendment by simple majority of one state legislature with no Congress involvement of any kind during the entire period from 1789 onward in any region of the United States during the period in any region of the country",
      "There is no Article V amendment process of any kind during the entire period from 1789 onward in any region of the United States with no proposal threshold, no ratification threshold, no 27 amendments, and no 21st Amendment of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Article V: PROPOSAL — (1) 2/3 of both houses Congress (used for all 27); (2) 2/3 state legislatures call convention (never used). RATIFICATION — (1) 3/4 state legislatures (38 of 50, used for all but one); (2) 3/4 state ratifying conventions (21st Amendment 1933 only). Only 27 amendments in 230+ years; only 1 since 1971 (27th, 1992).',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'govconst-ent-2b',
    question: 'Which best describes the constitutional process by which Congress can override a presidential veto?',
    options: [
      "After the President vetoes a bill (returning it with objections within 10 days, Sundays excluded; if Congress is in session and 10 days pass without signature the bill becomes law; if Congress adjourns within 10 days and the President takes no action the bill is killed by 'pocket veto'), Congress can override the veto by a TWO-THIRDS vote of EACH chamber present and voting; the override is rare in U.S. history (only ~7% of regular vetoes overridden); the President has no line-item veto for federal legislation (Congress passed the Line Item Veto Act 1996 but the Supreme Court struck it down in *Clinton v. City of New York*, 1998, on Presentment Clause grounds — Article I, § 7)",
      'Congress overrides a presidential veto by simple majority of one chamber with no two-thirds vote of any kind during the entire period from 1789 onward in any region of the United States during the period in any region of the country',
      'Congress cannot override a presidential veto under any circumstance with no two-thirds vote of any kind during the entire period from 1789 onward in any region of the United States during the period in any region of the country',
      "There is no presidential veto and no congressional override of any kind during the entire period from 1789 onward in any region of the United States with no Presentment Clause, no Line Item Veto Act, and no Clinton v. City of New York of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Veto override: 2/3 of EACH chamber present and voting (rare; ~7%). Veto = 10 days (Sundays excluded); pocket veto if Congress adjourns within 10 days. No line-item veto (Clinton v. City of NY 1998 struck Line Item Veto Act 1996 on Presentment Clause Art I § 7).',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'govconst-ent-3a',
    question: "Which best describes Madison's central argument in *Federalist No. 10* (Nov 22, 1787)?",
    options: [
      "Madison argued that the greatest danger to popular government is 'faction' — defined as 'a number of citizens, whether amounting to a majority or a minority of the whole, who are united and actuated by some common impulse of passion, or of interest, adverse to the rights of other citizens, or to the permanent and aggregate interests of the community' — and that the proposed large extended republic is the best institutional cure for the mischiefs of faction because (1) the size and diversity of the country makes it harder for any single faction to form a national majority, (2) representation through elected officials filters and refines popular passion, and (3) competition among multiple factions forces coalition-building rather than tyrannical majority rule",
      "Madison argued that the greatest danger to popular government is the absence of factions and that the United States should encourage faction formation with no extended-republic theory of any kind during the entire period from 1787 onward in any region of the United States during the period",
      "Madison argued that the United States should adopt a hereditary monarchy with no Congress, no presidency, and no Supreme Court of any kind during the entire period from 1787 onward in any region of the United States during the period in any region of the country",
      "There was no Federalist No. 10 and no Madison argument of any kind during the entire period from 1787 onward in any region of the United States with no faction definition, no extended-republic theory, and no representation argument of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Federalist No. 10 (Madison Nov 22 1787): faction = greatest danger ("united and actuated by some common impulse of passion, or of interest, adverse to the rights of other citizens"); large extended republic = cure (size/diversity prevents national majority faction + representation filters passion + multi-faction competition forces coalition).',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'govconst-ent-3b',
    question: 'Which best describes the Anti-Federalist case in *Brutus No. 1* (Oct 18, 1787)?',
    options: [
      "Brutus argued that a free republic cannot survive across a territory as large and diverse as the proposed United States because (1) genuine representation requires shared manners, sentiments, and interests among the people, which are impossible across vast territory; (2) the Necessary and Proper Clause combined with the Supremacy Clause will allow the federal government to absorb all state authority; (3) a standing army in peacetime is historically the instrument of tyranny; (4) the federal taxing power is unlimited and will leave no fiscal resource to the states; and (5) once consolidated power is transferred to the federal government it cannot be reclaimed — concerns that the Federalist response only partially addressed",
      "Brutus argued that the proposed Constitution did not give the federal government enough power and that an even more consolidated central government with no states of any kind was needed during the entire period in any region of the United States during the period",
      "Brutus argued that the United States should adopt a hereditary monarchy with no Congress and no states of any kind during the entire period in any region of the United States during the period in any region of the country",
      "There was no Brutus No. 1 of any kind during the entire period from 1787 onward in any region of the United States with no Anti-Federalist argument and no critique of the proposed Constitution of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Brutus No. 1 (Oct 18 1787): large republic fails — (1) representation requires shared manners/sentiments/interests; (2) Necessary and Proper + Supremacy → federal absorbs state authority; (3) standing army = tyranny; (4) federal taxing power unlimited; (5) consolidated power once transferred cannot be reclaimed.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'govconst-ent-4a',
    question: 'Which best describes the doctrine of selective incorporation?',
    options: [
      "Selective incorporation is the Supreme Court doctrine under which most provisions of the Bill of Rights — originally restrictions only on federal action per *Barron v. Baltimore* (1833) — have been applied to state governments through the Due Process Clause of the 14th Amendment (1868), one provision at a time over the course of the 20th and 21st centuries; major examples include *Gitlow v. New York* (1925, 1st Amendment free speech), *Mapp v. Ohio* (1961, 4th Amendment exclusionary rule), *Gideon v. Wainwright* (1963, 6th Amendment right to counsel), *Miranda v. Arizona* (1966, 5th Amendment self-incrimination warnings), *McDonald v. City of Chicago* (2010, 2nd Amendment), and *Timbs v. Indiana* (2019, 8th Amendment Excessive Fines Clause)",
      'Selective incorporation applies the entire Bill of Rights to states all at once under the Privileges and Immunities Clause with no Gitlow, no Mapp, no Gideon, no Miranda, no McDonald, and no Timbs of any kind during the entire period in any region of the United States during the period',
      'Selective incorporation prevents the application of any Bill of Rights provision to state governments under any circumstance with no Gitlow, no Mapp, no Gideon, and no McDonald of any kind during the entire period in any region of the United States during the period',
      "There is no doctrine of selective incorporation of any kind during the entire period from 1868 onward in any region of the United States with no 14th Amendment, no Due Process Clause, no Bill of Rights application to states, and no Gitlow/Mapp/Gideon/McDonald of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Selective incorporation: most Bill of Rights → states via 14th Amendment Due Process (one at a time, 20th-21stC). Examples: Gitlow 1925 (1st speech), Mapp 1961 (4th exclusionary rule), Gideon 1963 (6th counsel), Miranda 1966 (5th self-incrim warnings), McDonald 2010 (2nd), Timbs 2019 (8th excessive fines). Pre-incorporation: Barron v. Baltimore 1833.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'govconst-ent-4b',
    question: 'Which best describes the holding and significance of *McCulloch v. Maryland* (1819)?',
    options: [
      "Chief Justice John Marshall held that (1) Congress had constitutional authority to charter the Second Bank of the United States under the Necessary and Proper Clause (Article I, § 8, clause 18) — Congress may employ 'all means which are appropriate, which are plainly adapted' to its enumerated powers (taxing, borrowing, currency); and (2) Maryland could not tax the Bank under the Supremacy Clause (Article VI) — 'the power to tax is the power to destroy'; the case established the doctrine of implied federal powers and federal supremacy over conflicting state action involving federal authority, providing the constitutional foundation for the modern administrative state, the New Deal, the Civil Rights Act of 1964, and the Affordable Care Act",
      'Chief Justice John Marshall held that Congress had no authority to charter a national bank and that Maryland could freely tax federal instrumentalities with no implied federal powers and no federal supremacy of any kind during the entire period in any region of the United States during the period',
      "There was no McCulloch v. Maryland of any kind during the entire period from 1819 onward in any region of the United States with no Necessary and Proper Clause, no Supremacy Clause, no John Marshall, no Bank of the United States, and no implied federal powers of any kind during the entire period in any region",
      'Chief Justice John Marshall held that Maryland had no authority to operate any government and that the federal government had absolute power over states with no implied federal powers, no Supremacy Clause, and no Necessary and Proper Clause of any kind during the entire period in any region during the period'
    ],
    correctIndex: 0,
    explanation: 'McCulloch v. Maryland (1819, Marshall): (1) Congress implied power to charter Bank under Necessary and Proper Clause ("all means which are appropriate, which are plainly adapted"); (2) Maryland cannot tax federal instrumentalities under Supremacy Clause ("power to tax is power to destroy"). Foundation for implied federal powers + administrative state + New Deal + CRA 1964 + ACA.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'govconst-ent-5a',
    question: 'Which best describes the constitutional significance of the 14th Amendment (1868)?',
    options: [
      "The 14th Amendment is the most consequential amendment in American history: § 1 contains the Citizenship Clause (anyone born or naturalized in the U.S. is a citizen, overruling *Dred Scott v. Sandford* 1857), the Due Process Clause (the basis for selective incorporation of most Bill of Rights protections to states throughout the 20th century, and for substantive due process), and the Equal Protection Clause (the basis for *Brown v. Board* 1954, *Loving v. Virginia* 1967, *Obergefell v. Hodges* 2015); § 2 abolished the 3/5 Compromise; § 3 bars former Confederate officials from federal/state office (revived in 21st century re: Jan 6); § 5 gives Congress enforcement power (basis for the Civil Rights Act of 1875, the Civil Rights Act of 1964, and the Voting Rights Act of 1965)",
      "The 14th Amendment had no significance of any kind with no Citizenship Clause, no Due Process Clause, no Equal Protection Clause, no selective incorporation, and no civil-rights jurisprudence of any kind during the entire period from 1868 onward in any region of the United States during the period",
      "There was no 14th Amendment of any kind during the entire period from 1865 onward in any region of the United States with no Citizenship Clause, no Due Process Clause, no Equal Protection Clause, and no civil-rights jurisprudence of any kind during the entire period in any region",
      "The 14th Amendment applied only to former Confederate officials and not to the general population of any kind during the entire period from 1868 onward in any region of the United States with no Citizenship Clause, no Due Process Clause, and no Equal Protection Clause of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: '14th Amendment (1868) most consequential: § 1 = Citizenship (overruled Dred Scott 1857) + Due Process (selective incorporation + substantive due process) + Equal Protection (Brown 1954, Loving 1967, Obergefell 2015); § 2 abolished 3/5; § 3 bars Confederate officials (revived re: Jan 6); § 5 enforcement (CRA 1875, 1964; VRA 1965).',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'govconst-ent-5b',
    question: 'Which best describes the historical pattern of voting-rights expansion in U.S. constitutional history?',
    options: [
      "Voting-rights expansion in U.S. constitutional history followed a multi-amendment pattern: (1) 15th Amendment (1870) prohibited denial of voting rights 'on account of race, color, or previous condition of servitude' — Black male suffrage in theory but largely nullified in the Jim Crow South 1890-1965 by poll taxes, literacy tests, white primaries, grandfather clauses, and violence; (2) 17th Amendment (1913) provided for direct popular election of U.S. senators (replacing election by state legislatures); (3) 19th Amendment (1920) prohibited denial of voting rights 'on account of sex' — women\'s national suffrage; (4) 23rd Amendment (1961) granted DC presidential electors; (5) 24th Amendment (1964) abolished poll tax in federal elections; (6) 26th Amendment (1971) lowered voting age to 18; (7) Voting Rights Act of 1965 enforced 15th Amendment for the first time in the South — together representing the most sustained democratization in any modern constitutional democracy",
      "Voting rights have not expanded in U.S. constitutional history with no 15th Amendment, no 17th Amendment, no 19th Amendment, no 23rd Amendment, no 24th Amendment, no 26th Amendment, and no Voting Rights Act of any kind during the entire period from 1870 onward in any region of the United States during the period",
      "There was no voting-rights expansion of any kind during the entire period from 1870 through 1971 in any region of the United States with no 15th Amendment, no 17th Amendment, no 19th Amendment, no 24th Amendment, no 26th Amendment, and no Voting Rights Act of any kind during the entire period in any region",
      "Voting rights have only contracted over U.S. constitutional history with no expansion of any kind during the entire period from 1870 through 1971 in any region of the United States during the period in any region of the country"
    ],
    correctIndex: 0,
    explanation: 'Voting-rights expansion: 15th (1870 race) — nullified Jim Crow 1890-1965 (poll taxes/literacy/white primaries/grandfather/violence); 17th (1913 senators direct election); 19th (1920 sex); 23rd (1961 DC electors); 24th (1964 poll tax federal); 26th (1971 18 years); VRA (1965 enforces 15th in South) → most sustained democratization in any modern constitutional democracy.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'govconst-ent-6a',
    question: 'AP scenario: A presidential administration claims unilateral authority to negotiate a binding international agreement without Senate ratification. Which AP-required foundational document provides the strongest argument AGAINST this claim?',
    options: [
      "*Federalist No. 51* (Madison, Feb 6, 1788) — which argues that 'ambition must be made to counteract ambition' through the structural separation of powers and that bicameralism, federalism, and checks among the branches create a 'double security' for the rights of the people; the Senate\'s Article II treaty role (advice and consent with 2/3 vote) is precisely the kind of structural check that Federalist 51 defends as necessary to prevent any one branch from exercising unchecked authority over matters of national importance — and the modern executive-agreement workaround (now ~90% of international agreements vs. treaties) illustrates exactly the kind of structural erosion that Madison warned would occur",
      "There is no AP-required foundational document of any kind that addresses presidential authority over international agreements during the entire period from 1787 onward in any region of the United States during the period in any region of the country",
      "*Federalist No. 10* (Madison, Nov 22, 1787) — its extended-republic theory directly addresses presidential authority over international agreements with no relevance to separation of powers, bicameralism, or executive checks of any kind during the entire period in any region",
      "There are no AP-required foundational documents of any kind during the entire period from 1787 onward in any region of the United States with no Federalist No. 51, no Federalist No. 10, no Brutus No. 1, no Constitution, no Declaration of Independence, and no Articles of Confederation of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Federalist No. 51 strongest against unilateral executive treaty: "ambition must be made to counteract ambition" + bicameralism/federalism/checks = "double security" → Senate advice and consent (2/3) on treaties is exactly the structural check Madison defends. Modern executive-agreement workaround (~90% intl agreements vs treaties) = exactly the erosion Madison warned of.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'govconst-ent-6b',
    question: 'AP scenario: A federal statute requires state law-enforcement officers to perform background checks on prospective handgun purchasers. Which AP-required foundational document provides the strongest argument AGAINST this statute?',
    options: [
      "*Brutus No. 1* (Oct 18, 1787) — which argues that consolidated federal authority will inevitably absorb state sovereignty and that the Necessary and Proper Clause combined with the Supremacy Clause will leave no genuine state authority; *Brutus*\' concern about federal commandeering of state institutions is directly applicable, and the Supreme Court adopted similar reasoning in *Printz v. United States* (1997), striking down the relevant provisions of the Brady Handgun Violence Prevention Act of 1993 on anti-commandeering grounds (the federal government cannot conscript state officers to enforce federal regulatory programs, a doctrine grounded in the 10th Amendment\'s reserved-powers principle and the structure of dual sovereignty)",
      "There is no AP-required foundational document of any kind that addresses federal-state relationships during the entire period from 1787 onward in any region of the United States during the period in any region of the country",
      "*Federalist No. 10* (Madison, Nov 22, 1787) — its extended-republic theory directly addresses federal commandeering of state law-enforcement officers with no relevance to federalism, the 10th Amendment, or anti-commandeering doctrine of any kind during the entire period in any region",
      "There are no AP-required foundational documents of any kind during the entire period from 1787 onward in any region of the United States with no Federalist No. 10, no Federalist No. 51, no Brutus No. 1, no Constitution, no Declaration of Independence, and no Articles of Confederation of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Brutus No. 1 strongest against federal commandeering: warns federal authority will absorb state sovereignty + Necessary and Proper + Supremacy → no genuine state authority. Court adopted similar reasoning in Printz v. United States (1997) striking Brady Act commandeering on 10th Amendment + dual sovereignty grounds.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'govconst-ent-7a',
    question: 'AP argument essay: "Develop an argument that explains whether the constitutional design of the U.S. national government is more democratic or more anti-democratic in character." Which thesis is most defensible?',
    options: [
      "The U.S. constitutional design is fundamentally hybrid — democratic in foundational legitimacy but substantially counter-majoritarian in operation: democratically, the Preamble grounds authority in 'We the People' (Rousseau), the House is directly elected (Article I, § 2), the 17th Amendment (1913) made the Senate directly elected, the 19th Amendment (1920) and 26th Amendment (1971) expanded the franchise; counter-majoritarianly, the Senate over-represents low-population states, the Electoral College has elected the popular-vote loser five times (1824, 1876, 1888, 2000, 2016), the filibuster requires 60 votes for ordinary legislation, the Supreme Court is unelected with life tenure and can strike down popular legislation, and the Article V amendment process requires supermajorities so demanding that only 27 amendments have been ratified in 230+ years",
      'The U.S. constitutional design is purely democratic with no counter-majoritarian features of any kind with no Senate over-representation, no Electoral College, no filibuster, no Supreme Court, and no Article V supermajorities of any kind during the entire period from 1789 onward in any region of the United States during the period',
      'The U.S. constitutional design is purely anti-democratic with no democratic features of any kind with no Preamble, no House direct election, no 17th Amendment, no 19th Amendment, and no 26th Amendment of any kind during the entire period in any region of the United States during the period',
      "There is no U.S. constitutional design of any kind during the entire period from 1789 onward in any region of the United States with no Preamble, no House, no Senate, no Electoral College, no Supreme Court, no Article V, no 17th Amendment, no 19th Amendment, and no 26th Amendment of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Defensible thesis: hybrid — democratic foundationally (We the People + House direct + 17th + 19th + 26th) BUT counter-majoritarian operationally (Senate over-rep + Electoral College popular-vote losers 1824/1876/1888/2000/2016 + filibuster + unelected Court + Article V supermajorities → only 27 amendments).',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'govconst-ent-7b',
    question: 'Which best contrasts *Marbury v. Madison* (1803) and *McCulloch v. Maryland* (1819)?',
    options: [
      "*Marbury v. Madison* (1803, Marshall) established judicial review by holding § 13 of the Judiciary Act of 1789 unconstitutional for purporting to expand the Court\'s original jurisdiction beyond Article III — establishing the Court as final arbiter of constitutional meaning ('It is emphatically the province and duty of the judicial department to say what the law is'); *McCulloch v. Maryland* (1819, Marshall) used judicial review to UPHOLD broad federal authority — the Necessary and Proper Clause authorized Congress to charter the Second Bank of the United States as a constitutional means to its enumerated powers, and the Supremacy Clause prevented Maryland from taxing the federal instrumentality ('the power to tax is the power to destroy'); both were Marshall Court foundational decisions, but Marbury established the Court\'s power against Congress while McCulloch used that power to expand Congress\'s authority against the states",
      "Marbury and McCulloch had no relationship of any kind with no judicial review, no Necessary and Proper Clause, no Supremacy Clause, and no Marshall Court of any kind during the entire period in any region of the United States during the period in any region of the country",
      "There is no Marbury v. Madison and no McCulloch v. Maryland of any kind during the entire period from 1803 onward in any region of the United States with no judicial review, no implied powers, and no Marshall Court of any kind during the entire period in any region",
      "Marbury and McCulloch are entirely identical in holding and significance with no meaningful differences of any kind during the entire period from 1803 onward in any region of the United States during the period in any region of the country"
    ],
    correctIndex: 0,
    explanation: 'Marbury vs. McCulloch contrast: BOTH = Marshall Court foundational. Marbury (1803) established judicial review against Congress (§ 13 Judiciary Act 1789 unconstitutional). McCulloch (1819) USED judicial review to UPHOLD federal power vs. states (Necessary and Proper → Bank; Supremacy → no state tax — "power to tax is power to destroy").',
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
