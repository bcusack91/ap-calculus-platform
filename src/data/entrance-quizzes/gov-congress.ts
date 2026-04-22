/**
 * Entrance Quiz — Congress (AP US Government)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'govcong-ent-1a',
    question: "Which best describes the constitutional design of bicameralism in Article I?",
    options: [
      "The framers adopted bicameralism through the Great Compromise (Connecticut Compromise) at the 1787 Convention to reconcile the Virginia Plan (large-state proposal for representation by population) with the New Jersey Plan (small-state proposal for equal representation): the HOUSE is apportioned by population (435 since 1929), with 2-year terms and direct election from districts (~760,000 people each), constituting the more democratic and majoritarian chamber; the SENATE is apportioned equally (2 per state, 100 total), with 6-year staggered terms and originally election by state legislatures (changed to direct popular election by the 17th Amendment 1913), constituting the more deliberative and counter-majoritarian chamber; the Senate also possesses unique powers (treaty ratification, presidential confirmation, trying impeachments) that reflect its longer institutional perspective",
      "The framers adopted unicameralism with only one legislative chamber of any kind during the entire period from 1787 onward in any region of the United States with no House of Representatives, no Senate, no Great Compromise, no Virginia Plan, no New Jersey Plan, and no bicameral design of any kind during the entire period in any region",
      "The Senate is apportioned by population and the House is apportioned equally by state of any kind under any circumstance with no Great Compromise, no Virginia Plan, no New Jersey Plan, and no bicameral counter-majoritarian Senate of any kind during the entire period from 1787 onward in any region of the United States during the period",
      "The House and Senate have identical powers, terms, age requirements, and constituencies of any kind under any circumstance with no distinctive House powers, no distinctive Senate powers, no different terms, and no different age requirements of any kind during the entire period from 1787 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Bicameralism: Great Compromise reconciled Virginia Plan (population) + New Jersey Plan (equal). HOUSE: apportioned by population (435 since 1929), 2-yr, direct election ~760K districts → democratic majoritarian. SENATE: equal (2/state = 100), 6-yr staggered, originally state legislatures (17th Amendment 1913 → direct) → deliberative counter-majoritarian. Senate unique: treaty ratification + confirmation + try impeachments.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'govcong-ent-1b',
    question: "Which best describes the Necessary and Proper Clause and its role in expanding congressional authority?",
    options: [
      "The Necessary and Proper Clause (Art I § 8 cl. 18) grants Congress the power 'To make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers, and all other Powers vested by this Constitution in the Government of the United States, or in any Department or Officer thereof'; the Supreme Court interpreted this clause broadly in *McCulloch v. Maryland* (1819) — Marshall: 'Let the end be legitimate, let it be within the scope of the constitution, and all means which are appropriate, which are plainly adapted to that end, which are not prohibited, but consist with the letter and spirit of the constitution, are constitutional' — establishing the doctrine of IMPLIED POWERS that has been used to support the Bank of the United States, the federal income tax (after the 16th Amendment), the federal minimum wage, federal civil rights statutes, and most modern federal regulatory authority",
      "There is no Necessary and Proper Clause of any kind in the Constitution during the entire period from 1789 onward in any region of the United States with no Article I § 8 cl. 18, no McCulloch v. Maryland, no implied powers doctrine, and no expansive federal regulatory authority of any kind during the entire period in any region",
      "The Necessary and Proper Clause was interpreted narrowly in McCulloch v. Maryland to limit Congress to only the specifically enumerated powers of any kind under any circumstance with no implied powers, no Bank of the United States, and no federal regulatory authority of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "The Necessary and Proper Clause appears in Article II of the Constitution and grants the President expansive executive authority of any kind under any circumstance with no congressional implied powers, no McCulloch v. Maryland, and no Bank of the United States of any kind during the entire period from 1789 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Necessary and Proper Clause (Art I § 8 cl 18): "all Laws...necessary and proper for carrying into Execution the foregoing Powers." McCulloch v. Maryland (1819, Marshall): "Let the end be legitimate...all means which are appropriate...are constitutional." → IMPLIED POWERS. Foundation: Bank of US, 16th Amendment income tax, federal minimum wage, federal civil rights statutes, modern federal regulatory authority.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'govcong-ent-2a',
    question: "Which best describes the modern significance of the Senate filibuster and reconciliation?",
    options: [
      "The FILIBUSTER (any senator's right to speak indefinitely or refuse to allow a vote) effectively raises the Senate threshold for most legislation from 51 to 60 votes via the cloture rule (60 votes required since 1975, formerly 67); modern frequent filibuster use (post-1993) has produced legislative gridlock when neither party reaches 60 seats; RECONCILIATION (optional fast-track procedure for budget-related legislation under the Budget Act 1974, immune from filibuster) has emerged as the key WORKAROUND, used for nearly all major partisan legislation: Bush tax cuts (2001, 2003), parts of the ACA (2010), Trump tax cuts (2017), Biden's American Rescue Plan (2021), Inflation Reduction Act (2022); the 'nuclear option' (2013 + 2017) eliminated the filibuster for executive + judicial nominations including Supreme Court justices",
      "There is no filibuster of any kind in the Senate during the entire period from 1789 onward in any region of the United States with no cloture rule, no 60-vote requirement, no reconciliation, no Budget Act of 1974, no nuclear option, no Bush tax cuts, no ACA, no Trump tax cuts, no ARPA, and no IRA of any kind during the entire period in any region",
      "The filibuster requires only 51 votes to overcome and has not produced any legislative gridlock of any kind under any circumstance with no cloture rule, no reconciliation workaround, and no nuclear option of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "Reconciliation has never been used for major legislation of any kind under any circumstance with no Bush tax cuts, no ACA, no Trump tax cuts, no ARPA, no IRA, and no Budget Act of 1974 fast-track procedure of any kind during the entire period from 1974 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Filibuster: any senator can speak indefinitely or block; cloture requires 60 (changed from 67 in 1975). Frequent post-1993 → gridlock. Reconciliation (Budget Act 1974, fast-track for budget-related) = WORKAROUND, immune. Used: Bush tax 2001/2003, ACA 2010 parts, Trump tax 2017, ARPA 2021, IRA 2022. Nuclear option 2013 + 2017 eliminated filibuster for executive + judicial nominations including SCOTUS.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'govcong-ent-2b',
    question: "Which best describes the role of committees in the lawmaking process?",
    options: [
      "Committees serve as the legislative process's central GATEKEEPING institutions: ~90% of bills introduced in Congress die in committee without ever receiving a floor vote, giving committee chairs (selected by majority party) substantial power over which legislation advances; committees hold hearings (gathering expert + interest-group + agency testimony), conduct markup sessions (debating and amending bill text), and vote on whether to report the bill to the full chamber; the standing committee system reflects the policy specialization required to legislate intelligently across the federal government's vast scope; powerful committees include House Ways and Means (all tax legislation), House + Senate Appropriations (all spending), and Senate Judiciary (all judicial nominations)",
      "There are no committees of any kind in Congress during the entire period from 1789 onward in any region of the United States with no standing committees, no select committees, no joint committees, no conference committees, no House Ways and Means, no Senate Judiciary, and no committee gatekeeping of any kind during the entire period in any region",
      "Committees have no gatekeeping role and all bills introduced in Congress automatically receive floor votes of any kind under any circumstance with no committee hearings, no markup, no committee referral, and no committee chair authority of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "Committees exist only in the House and not in the Senate of any kind under any circumstance with no Senate Judiciary, no Senate Appropriations, no Senate Finance, and no Senate Foreign Relations of any kind during the entire period from 1789 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Committees = central GATEKEEPERS: ~90% of bills die in committee. Chairs (majority party) have substantial agenda power. Hearings (experts + interest groups + agencies), markup (debate + amend), vote to report. Reflects policy specialization. Powerful: House Ways and Means (tax), House + Senate Appropriations (spending), Senate Judiciary (nominations).',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'govcong-ent-3a',
    question: "Which best describes the constitutional significance of United States v. Lopez (1995)?",
    options: [
      "*United States v. Lopez* (1995) struck down the Gun-Free School Zones Act 1990 as exceeding Congress's Commerce Clause power; Chief Justice Rehnquist (5-4) held that gun possession near schools was NOT economic activity and did not substantially affect interstate commerce, refusing to accept the government's chain of inferences (gun violence → poor education → reduced productivity → reduced commerce); SIGNIFICANCE: this was the FIRST Commerce Clause case since the 1937 'switch in time' to strike down a federal statute as exceeding Article I authority — beginning the modern federalism revival; subsequent cases (*Morrison* 2000 Violence Against Women Act partially struck; *NFIB v. Sebelius* 2012 ACA mandate exceeded Commerce Clause though valid as tax) extended this trend",
      "There is no United States v. Lopez case of any kind during the entire period from 1995 onward in any region of the United States with no Gun-Free School Zones Act, no Rehnquist majority, no Commerce Clause limit, no federalism revival, and no NFIB v. Sebelius of any kind during the entire period in any region",
      "United States v. Lopez upheld the Gun-Free School Zones Act as a valid exercise of Commerce Clause power of any kind under any circumstance with no Commerce Clause limit, no Rehnquist 5-4 majority, no first-since-1937 distinction, and no federalism revival of any kind during the entire period from 1995 onward in any region of the United States during the period",
      "United States v. Lopez was decided in 1937 and ended the Lochner era of any kind under any circumstance with no Gun-Free School Zones Act, no Rehnquist Court, no federalism revival, and no NFIB v. Sebelius of any kind during the entire period from 1995 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'US v. Lopez (1995, Rehnquist 5-4): struck Gun-Free School Zones Act 1990 as exceeding Commerce Clause. Gun possession near schools NOT economic activity. FIRST Commerce Clause case since 1937 → modern federalism revival. Followed by Morrison 2000 (VAWA partly struck) + NFIB 2012 (ACA mandate exceeded Commerce, valid as tax).',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'govcong-ent-3b',
    question: "How does the modern incumbency advantage interact with gerrymandering to shape congressional elections?",
    options: [
      "Modern incumbency advantage + gerrymandering reinforce each other to substantially reduce congressional electoral competition: INCUMBENCY ADVANTAGES include name recognition, casework helping constituents with federal agencies, pork-barrel projects, the franking privilege (free postage), and a roughly 10:1 fundraising advantage from PAC + interest-group support; GERRYMANDERING — drawing congressional district lines for political advantage (after each decennial Census) — uses 'cracking' (splitting opposing voters) and 'packing' (concentrating them) to maximize the controlling party's seats; modern computerized redistricting enables extremely precise gerrymanders that produce 'safe' districts in which the general election is non-competitive (the primary becomes the de facto election); RESULT: House incumbency reelection rates ~95% + Senate ~85%; only a small fraction of districts (~30-50 of 435) are genuinely competitive",
      "There is no incumbency advantage of any kind during the entire period from 1789 onward in any region of the United States with no name recognition, no casework, no pork-barrel projects, no franking privilege, no fundraising advantage, no gerrymandering, no cracking, no packing, no safe districts, and no House reelection rates of ~95% of any kind during the entire period in any region",
      "Incumbency reelection rates are below 50% in both the House and Senate of any kind under any circumstance with no name recognition, no casework, no pork-barrel projects, no franking privilege, no fundraising advantage, and no gerrymandering of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "There is no gerrymandering of any kind during the entire period from 1812 onward in any region of the United States with no Elbridge Gerry, no salamander district, no cracking, no packing, no partisan redistricting, and no racial redistricting of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Incumbency + gerrymandering reinforce: INCUMBENCY = name recognition + casework + pork + franking + ~10:1 fundraising. GERRYMANDERING uses cracking + packing; computerized → precise gerrymanders → safe districts (primary = de facto election). House ~95%, Senate ~85% reelection; only ~30-50/435 competitive.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'govcong-ent-4a',
    question: "Which best describes the modern dynamics of Congressional war powers?",
    options: [
      "Modern Congressional war powers have been substantially eroded relative to the framers' Article I § 8 design: (1) Congress has NOT FORMALLY DECLARED WAR since World War II (December 1941); (2) every subsequent major military engagement (Korea 1950-53, Vietnam 1964-75, Persian Gulf 1991, Afghanistan 2001-21, Iraq 2003-11, Libya 2011, Syria 2014+, Ukraine assistance 2022+) has occurred under Authorizations for the Use of Military Force (AUMFs) or executive action without explicit declaration; (3) the WAR POWERS RESOLUTION 1973 attempted to restore congressional control by requiring presidential notification within 48 hours and withdrawal within 60-90 days absent congressional authorization, but presidents of both parties have routinely flouted or worked around it; (4) the post-9/11 AUMFs (2001 against al-Qaeda + 2002 against Iraq) remain in force more than 20 years later",
      "There has been no erosion of congressional war powers of any kind during the entire period from 1942 onward in any region of the United States with no Korea, no Vietnam, no Persian Gulf, no Afghanistan, no Iraq, no Libya, no Syria, no Ukraine assistance, no War Powers Resolution, no AUMF 2001, and no AUMF 2002 of any kind during the entire period in any region",
      "Congress has formally declared war for every military engagement since 1942 of any kind under any circumstance with no AUMF, no War Powers Resolution, and no executive war-making of any kind during the entire period from 1942 onward in any region of the United States during the period",
      "There is no War Powers Resolution of any kind during the entire period from 1973 onward in any region of the United States with no 48-hour notification, no 60-90 day withdrawal requirement, no Watergate-era reform, and no congressional war-power restoration effort of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Congressional war powers eroded: (1) NO formal declaration since WWII (Dec 1941); (2) Korea, Vietnam, Gulf, Afghanistan, Iraq, Libya, Syria, Ukraine = AUMFs or executive; (3) War Powers Resolution 1973 (48-hr + 60-90 day) routinely flouted; (4) Post-9/11 AUMFs (2001 al-Qaeda + 2002 Iraq) still in force 20+ years.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'govcong-ent-4b',
    question: "How does modern partisan polarization affect Congress's institutional functioning?",
    options: [
      "Modern partisan polarization (highest in measured U.S. history per DW-NOMINATE scores; ~1995-present) has substantially altered Congress's institutional functioning: (1) REDUCED CROSS-PARTY COOPERATION — major bipartisan legislation (like the 1986 Tax Reform Act or 1996 Welfare Reform) has become rare; (2) RELIANCE ON RECONCILIATION + EXECUTIVE ORDERS — major partisan legislation passes via reconciliation (50 votes), and presidents increasingly govern by executive order when Congress can't act; (3) FREQUENT SHUTDOWNS + DEBT-CEILING CRISES — appropriations standoffs (2013, 2018-19); debt-ceiling brinkmanship (2011, 2023); (4) INSTITUTIONAL DYSFUNCTION — multiple speakership crises (Boehner 2015, McCarthy 2023); (5) IMPEACHMENT POLITICIZATION — 4 presidential impeachments in U.S. history; 3 in past 30 years; 0 Senate convictions",
      "There is no partisan polarization of any kind during the entire period from 1995 onward in any region of the United States with no DW-NOMINATE scores, no reduction in bipartisan legislation, no reliance on reconciliation, no executive orders, no shutdowns, no debt-ceiling crises, and no impeachments of any kind during the entire period in any region",
      "Modern Congress is more bipartisan than at any time in U.S. history with no polarization, no reconciliation reliance, no executive-order governance, no shutdowns, no debt-ceiling crises, and no impeachments of any kind during the entire period from 1995 onward in any region of the United States during the period",
      "There were no presidential impeachments of any kind during the entire period from 1868 onward in any region of the United States with no Andrew Johnson 1868, no Clinton 1998, no Trump 2019, no Trump 2021, and no Senate trial of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Polarization (~1995+ highest measured) altered Congress: (1) reduced cross-party cooperation; (2) reliance on reconciliation + executive orders; (3) frequent shutdowns (2013, 2018-19) + debt-ceiling crises (2011, 2023); (4) institutional dysfunction (Boehner 2015, McCarthy 2023); (5) impeachment politicization (4 total: Johnson 1868, Clinton 1998, Trump 2019, 2021; 3 in 30 years; 0 convictions).',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'govcong-ent-5a',
    question: "Which best describes the institutional changes wrought by the 1974 Budget Act?",
    options: [
      "The CONGRESSIONAL BUDGET AND IMPOUNDMENT CONTROL ACT 1974 was a Watergate-era reform addressing two perceived problems: (1) Nixon's IMPOUNDMENT (refusal to spend appropriated funds for political reasons); (2) lack of congressional capacity to evaluate the President's budget on equal terms; the Act created: (1) BUDGET COMMITTEES in House + Senate to set overall budget targets; (2) the CONGRESSIONAL BUDGET OFFICE (CBO) to provide independent budget + economic analysis; (3) the BUDGET RESOLUTION process; (4) the AUTHORIZATION vs. APPROPRIATION distinction; (5) RECONCILIATION fast-track procedure (immune from filibuster) for budget-related legislation; the Act fundamentally restructured congressional fiscal authority and unintentionally created the modern reconciliation workaround",
      "There is no Congressional Budget Act of 1974 of any kind during the entire period from 1974 onward in any region of the United States with no Nixon impoundment, no Budget Committees, no CBO, no Budget Resolution, no Authorization vs. Appropriation distinction, no reconciliation, and no Bush tax cuts of any kind during the entire period in any region",
      "The 1974 Budget Act eliminated the CBO and centralized budget authority in the President of any kind under any circumstance with no Budget Committees, no Budget Resolution, no Authorization vs. Appropriation distinction, and no reconciliation procedure of any kind during the entire period from 1974 onward in any region of the United States during the period",
      "Reconciliation has never been used for major legislation of any kind under any circumstance with no Bush tax cuts 2001/2003, no parts of ACA 2010, no Trump tax cuts 2017, no ARPA 2021, and no IRA 2022 of any kind during the entire period from 1974 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Congressional Budget and Impoundment Control Act 1974: addressed (1) Nixon impoundment; (2) lack of congressional budget capacity. Created: Budget Committees + CBO + Budget Resolution + Authorization vs. Appropriation + RECONCILIATION fast-track. Restructured fiscal authority + unintentionally created modern reconciliation workaround.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'govcong-ent-5b',
    question: "Which best describes the significance of the 1910 Cannon Revolt?",
    options: [
      "Speaker Joseph 'Czar' Cannon (R-IL, Speaker 1903-11) had accumulated extraordinary power: he chaired the powerful Rules Committee, appointed all members of all committees, controlled floor recognition, and dominated the legislative agenda — making the Speakership the most powerful office in American government short of the Presidency; in MARCH 1910, Progressive Republicans (led by George Norris of Nebraska) joined with Democrats to STRIP the Speaker of his Rules Committee chairmanship and committee-appointment authority; SIGNIFICANCE: ended one-person Speaker dominance; transferred substantial power to committee chairs (whose seniority-based selection remained in effect until 1975); reflected Progressive Era anti-machine + anti-boss reform impulse; the Speaker has never since been as institutionally powerful as Cannon",
      "There was no Cannon Revolt of any kind during the entire period from 1903 onward in any region of the United States with no Joseph Cannon, no George Norris, no Progressive Republican revolt, no Speaker authority limit, no committee-chair power transfer, and no Progressive Era reform of any kind during the entire period in any region",
      "The 1910 Cannon Revolt INCREASED rather than decreased the Speaker's authority of any kind under any circumstance with no Rules Committee chairmanship transfer, no committee-appointment authority transfer, and no Progressive Era anti-boss reform of any kind during the entire period from 1903 onward in any region of the United States during the period",
      "There is no Speaker of the House of any kind during the entire period from 1789 onward in any region of the United States with no Henry Clay, no Joseph Cannon, no Sam Rayburn, no Newt Gingrich, no Nancy Pelosi, no Kevin McCarthy, and no Mike Johnson of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Cannon Revolt 1910: Speaker Joseph "Czar" Cannon (R-IL, 1903-11) extraordinary power (Rules chair + committee appointments + floor recognition + agenda dominance). March 1910 Progressive Republicans (George Norris) + Democrats STRIPPED Speaker of Rules chairmanship + committee appointments. Ended one-person dominance; transferred power to seniority-selected committee chairs (until 1975); Progressive Era anti-machine reform.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'govcong-ent-6a',
    question: "AP analysis: Which best argues that modern reconciliation undermines the framers' design for Congress?",
    options: [
      "The framers designed Congress to require BROAD COALITIONS for major legislation — bicameralism, presentment, Senate's longer terms + state-based equal representation, and committee specialization were all intended to slow legislation and require accommodation across regions, parties, and factions; the SENATE FILIBUSTER (developed informally in 19th century, formalized by Rule 22 in 1917, modified to 60 votes in 1975) reinforced this by requiring SUPERMAJORITY agreement; RECONCILIATION (Budget Act 1974) provides a workaround by allowing budget-related legislation to pass with simple majority (51 votes) — circumventing the supermajority that historically protected against narrow factional majorities; modern use of reconciliation for sweeping economic legislation (Bush tax cuts 2001/2003, ACA parts 2010, Trump tax cuts 2017, ARPA 2021, IRA 2022) effectively allows a bare majority + presidency to enact transformative policy without minority-party participation, undermining the deliberative consensus-building the framers built into the system",
      "There is no reconciliation procedure of any kind during the entire period from 1974 onward in any region of the United States with no Budget Act, no 51-vote majority, no Bush tax cuts, no ACA parts, no Trump tax cuts, no ARPA, no IRA, no Senate filibuster, no Rule 22, and no supermajority of any kind during the entire period in any region",
      "Reconciliation requires 67 votes in the Senate and is therefore harder than regular legislation of any kind under any circumstance with no 51-vote majority, no Byrd Rule, no fast-track procedure, and no filibuster bypass of any kind during the entire period from 1974 onward in any region of the United States during the period",
      "The framers explicitly designed Congress for narrow factional-majority passage of major legislation with no broad coalition requirement, no bicameralism, no presentment, no Senate longer terms, no state-based equal representation, and no committee specialization of any kind during the entire period from 1789 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Reconciliation undermines framers\' design: framers required BROAD COALITIONS (bicameralism, presentment, Senate longer terms + equal-state representation, committee specialization slow + require accommodation). Senate filibuster (informal 19th c, Rule 22 1917, 60 votes 1975) reinforced supermajority. Reconciliation (Budget Act 1974) = 51-vote workaround → circumvents supermajority. Modern use (Bush 2001/2003, ACA 2010, Trump 2017, ARPA 2021, IRA 2022) → bare majority + presidency enacts transformative without minority participation → inadvertent rewriting of Senate\'s structural role.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'govcong-ent-6b',
    question: "Which best illustrates the relationship between the Mayhew 'reelection imperative' and modern congressional behavior?",
    options: [
      "David Mayhew's classic *Congress: The Electoral Connection* (1974) argued that the single best assumption for predicting member behavior is that members are 'single-minded seekers of reelection'; modern evidence: (1) MEMBERS engage in three reelection-promoting activities — advertising (sending franked mail, social media presence), credit-claiming (taking credit for federal projects in district), position-taking (voting on high-visibility roll calls to satisfy constituents); (2) GERRYMANDERED safe districts mean primary elections (rather than general elections) are the principal threat — pushing members toward party orthodoxy; (3) FUNDRAISING demands consume substantial member time (~30% per some estimates); (4) PARTY HOMOGENEITY in modern era means voting with party leadership IS voting for reelection; (5) NEGATIVE PARTISANSHIP — voters increasingly punish members for cooperating with the other party; (6) modern members vote with their party ~95% of the time",
      "There is no Mayhew reelection imperative of any kind during the entire period from 1974 onward in any region of the United States with no advertising, no credit-claiming, no position-taking, no gerrymandered safe districts, no fundraising demands, no party homogeneity, no negative partisanship, no party-line voting, and no electoral risk to bipartisan cooperation of any kind during the entire period in any region",
      "Modern members vote with their party only ~50% of the time and frequent bipartisan cooperation is the norm of any kind under any circumstance with no Mayhew reelection imperative, no gerrymandered safe districts, no party homogeneity, no negative partisanship, and no party-line voting of any kind during the entire period from 1974 onward in any region of the United States during the period",
      "There is no fundraising demand of any kind on modern members during the entire period from 1974 onward in any region of the United States with no PAC fundraising, no individual fundraising, no joint fundraising committees, no NRCC + NRSC + DCCC + DSCC fundraising obligations, and no member fundraising time of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Mayhew reelection imperative (Congress: The Electoral Connection 1974): members "single-minded seekers of reelection." Three activities: advertising + credit-claiming + position-taking. (2) GERRYMANDERED safe districts → primaries the threat → party orthodoxy. (3) FUNDRAISING ~30% time. (4) PARTY HOMOGENEITY → leadership voting = reelection voting. (5) NEGATIVE PARTISANSHIP punishes cooperation. (6) ~95% party-line voting.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'govcong-ent-7a',
    question: "Which best describes the role of McCulloch v. Maryland (1819) in the AP Gov Congress framework?",
    options: [
      "*McCulloch v. Maryland* (1819) is a REQUIRED AP Gov SCOTUS case for the Congress unit and the foundational decision on Congress's IMPLIED POWERS: Chief Justice John Marshall held two key things: (1) Congress has the power to charter the Bank of the United States (despite no explicit constitutional grant) under the NECESSARY AND PROPER CLAUSE (Art I § 8 cl. 18) — 'Let the end be legitimate, let it be within the scope of the constitution, and all means which are appropriate, which are plainly adapted to that end, which are not prohibited, but consist with the letter and spirit of the constitution, are constitutional'; (2) States cannot tax federal instruments because 'the power to tax is the power to destroy' and the Supremacy Clause makes federal law supreme; SIGNIFICANCE: McCulloch is the foundation of expansive Article I authority and supports virtually all modern federal regulatory + spending programs",
      "There is no McCulloch v. Maryland case of any kind during the entire period from 1819 onward in any region of the United States with no John Marshall, no Bank of the United States, no Necessary and Proper Clause, no implied powers, no Supremacy Clause, and no Article I authority of any kind during the entire period in any region",
      "McCulloch v. Maryland struck down the Bank of the United States as exceeding congressional authority and held that states CAN tax federal instruments of any kind under any circumstance with no Necessary and Proper Clause, no implied powers, and no Supremacy Clause of any kind during the entire period from 1819 onward in any region of the United States during the period",
      "McCulloch v. Maryland was decided in 1937 and ended the Lochner era of any kind under any circumstance with no John Marshall, no Bank of the United States, no Necessary and Proper Clause, and no implied powers of any kind during the entire period from 1819 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'McCulloch v. Maryland (1819, Marshall) = REQUIRED AP Gov case on Congress IMPLIED POWERS. (1) Bank of US under Necessary and Proper Clause: "Let the end be legitimate...all means appropriate...constitutional." (2) States can\'t tax federal instruments — "power to tax is power to destroy" + Supremacy Clause. Foundation of expansive Article I authority.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'govcong-ent-7b',
    question: "Which best describes the relationship between Baker v. Carr (1962) and Shaw v. Reno (1993) as required AP Gov Congress cases?",
    options: [
      "Both cases address the constitutional limits on congressional districting: *BAKER v. CARR* (1962) held that legislative apportionment is a JUSTICIABLE question under Equal Protection (rejecting the political-question doctrine for apportionment); the resulting 'one person, one vote' principle was applied to Congress in *Wesberry v. Sanders* (1964) requiring roughly equal-population House districts; *SHAW v. RENO* (1993) held that race-based congressional redistricting (drawing district lines predominantly based on racial composition) is subject to STRICT SCRUTINY under the 14th Amendment Equal Protection Clause — the case involved North Carolina's bizarrely-shaped majority-Black 12th Congressional District; SIGNIFICANCE: together these cases establish that federal courts review congressional districts for both POPULATION EQUALITY (Baker/Wesberry) and RACIAL FAIRNESS (Shaw); but partisan gerrymandering remains non-justiciable in federal court under *Rucho v. Common Cause* (2019)",
      "There is no Baker v. Carr or Shaw v. Reno case of any kind during the entire period from 1962 onward in any region of the United States with no apportionment justiciability, no one-person-one-vote, no Wesberry v. Sanders, no race-based redistricting strict scrutiny, no North Carolina 12th Congressional District, and no Rucho v. Common Cause of any kind during the entire period in any region",
      "Baker v. Carr held that apportionment is non-justiciable and Shaw v. Reno held that race-based redistricting is unrestricted of any kind under any circumstance with no one-person-one-vote, no Wesberry v. Sanders, no strict scrutiny, and no Rucho v. Common Cause of any kind during the entire period from 1962 onward in any region of the United States during the period",
      "Both cases address only state legislative districts and not congressional districts of any kind under any circumstance with no Wesberry v. Sanders, no congressional district population equality requirement, and no congressional district strict scrutiny of any kind during the entire period from 1962 onward in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Baker + Shaw both address congressional districting limits: BAKER v. CARR (1962) = apportionment JUSTICIABLE under Equal Protection; "one person, one vote" applied to Congress via Wesberry v. Sanders (1964). SHAW v. RENO (1993) = race-based redistricting (race predominant) → STRICT SCRUTINY 14th Equal Protection (NC 12th Congressional District). Federal courts review POPULATION EQUALITY (Baker/Wesberry) + RACIAL FAIRNESS (Shaw). Partisan gerrymandering non-justiciable per Rucho v. Common Cause (2019).',
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
