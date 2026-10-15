import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP US Government & Politics — 55 stimulus-based MCQs.
 * Distribution follows the CED unit weights:
 *   Unit 1 — Foundations of American Democracy (11, 20%; CED 15–22%)
 *   Unit 2 — Interactions Among Branches (17, 31%; CED 25–36%)
 *   Unit 3 — Civil Liberties & Civil Rights (9, 16%; CED 13–18%)
 *   Unit 4 — American Political Ideologies & Beliefs (6, 11%; CED 10–15%)
 *   Unit 5 — Political Participation (12, 22%; CED 20–27%)
 * Items that depend on a case or document use only the CED's required
 * Supreme Court cases and foundational documents, including the four
 * documents added for 2026–27 (Federalist No. 39, the Gettysburg Address,
 * the Emancipation Proclamation, and Adam Smith's The Wealth of Nations).
 */

export const MCQS: MCQItem[] = [
  /* ============================ UNIT 1 — FOUNDATIONS (11) ============================ */
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary."\n— Federalist No. 51, James Madison (1788)',
    question: 'Madison uses this passage primarily to justify which structural feature of the Constitution?',
    options: [
      'A bill of rights listing liberties that no majority in Congress may take away.',
      'Checks and balances that let each branch resist encroachment by the others.',
      'Direct election of senators and the president to keep officials answerable to voters.',
      'A Tenth Amendment reservation of all undelegated powers to the state governments.',
    ],
    correctAnswer: 1,
    explanation:
      'Federalist 51 argues that because people are not angels, government must be built so that "ambition must be made to counteract ambition," giving each branch the means to check the others. A bill of rights is a written restraint on government, but Madison\'s point here is structural: internal controls that come from dividing the branches and pitting them against one another.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"Extend the sphere, and you take in a greater variety of parties and interests; you make it less probable that a majority of the whole will have a common motive to invade the rights of other citizens."\n— Federalist No. 10, James Madison (1787)',
    question: 'Madison\'s argument in Federalist 10 directly addresses which problem in republican government?',
    options: [
      'The weakness of a national army that depended on state militias under the Articles.',
      'The lack of an executive strong enough to enforce national laws against the states.',
      'The danger that a majority faction will use its strength to override minority rights.',
      'The risk that unelected federal judges will overturn the laws passed by majorities.',
    ],
    correctAnswer: 2,
    explanation:
      'Federalist 10 argues that an extended republic takes in so many factions that no single majority faction is likely to form and oppress others. The need for a stronger executive was a real concern of the period, but that is the subject of Federalist 70, not of this passage about the size of the republic.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    question:
      'Which of the following best describes a key weakness of the Articles of Confederation that the Constitutional Convention sought to address?',
    options: [
      'Congress could not levy taxes on individuals or regulate trade between the states.',
      'The national legislature could declare war but could not negotiate treaties.',
      'Congress was controlled by large states, since seats followed population.',
      'Congress was overshadowed by a single executive who could veto its acts at will.',
    ],
    correctAnswer: 0,
    explanation:
      'Under the Articles, Congress could only request money from the states and could not regulate interstate commerce, leaving the national government broke and unable to stop trade wars among the states. Large states did not dominate under the Articles; each state cast one vote regardless of population.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    question:
      'The Great (Connecticut) Compromise resolved which dispute at the Constitutional Convention?',
    options: [
      'How enslaved people would be counted when allocating House seats and direct taxes.',
      'Whether the new Constitution would be ratified by state conventions or legislatures.',
      'Whether a bill of rights had to be added before any state would agree to ratify.',
      'How seats in Congress would be divided between populous states and smaller states.',
    ],
    correctAnswer: 3,
    explanation:
      'The Connecticut Compromise created a bicameral Congress: a House apportioned by population, which favored large states, and a Senate with two seats per state, which protected small states. Counting enslaved people for representation was settled separately by the Three-Fifths Compromise.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"The proposed Constitution, therefore, is, in strictness, neither a national nor a federal Constitution, but a composition of both. In its foundation it is federal, not national; ... in the operation of these powers, it is national, not federal; in the extent of them, again, it is federal, not national; and, finally, in the authoritative mode of introducing amendments, it is neither wholly federal nor wholly national."\n— Federalist No. 39, James Madison (1788)',
    question: 'Answering critics who said the Constitution would create one consolidated government, Madison argues in this excerpt that the new system',
    options: [
      'would act only on the state governments, as the Articles did, and never directly on individual citizens.',
      'would make the national government supreme in every policy area, leaving the states only as administrative units.',
      'mixes features based on the states with features based on the people, so it is neither wholly one nor the other.',
      'would let any single state block a constitutional amendment, so each state keeps its full sovereignty intact.',
    ],
    correctAnswer: 2,
    explanation:
      'In Federalist 39, "federal" means resting on the states and "national" means resting on, and acting directly upon, the people; Madison shows the Constitution mixes the two, so power is shared rather than consolidated. Acting only through the state governments was the Articles model, and the excerpt rejects it by calling the operation of the new powers "national, not federal"; amendments need three-fourths of the states, not unanimity.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"The Government of the Union, though limited in its powers, is supreme within its sphere of action. ... The power to tax involves the power to destroy."\n— Chief Justice John Marshall, McCulloch v. Maryland (1819)',
    question: 'McCulloch v. Maryland is best known for establishing which two principles?',
    options: [
      'Implied powers under the Necessary and Proper Clause and national supremacy.',
      'Judicial review over acts of Congress and incorporation of the Bill of Rights.',
      'Dual federalism and a broad reading of the reserved powers of the states.',
      'Congressional authority over interstate commerce and equal state sovereignty.',
    ],
    correctAnswer: 0,
    explanation:
      'McCulloch upheld Congress\'s implied power to charter a national bank under the Necessary and Proper Clause and held that Maryland could not tax the bank because valid federal law is supreme. Judicial review came from Marbury v. Madison, and incorporation of the Bill of Rights came through Fourteenth Amendment cases much later.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      'Scenario: Congress passes a law making it a federal crime to text while driving on any road in the country, including local streets, arguing that distracted driving affects interstate commerce. A state challenges the law as beyond the power of Congress.',
    question: 'Which Supreme Court case provides the strongest precedent for the state\'s challenge?',
    options: [
      'McCulloch v. Maryland, which read the implied powers of Congress broadly.',
      'Marbury v. Madison, which first let courts strike down a federal statute.',
      'United States v. Lopez, which limited the reach of the Commerce Clause power.',
      'Baker v. Carr, which opened state districting disputes to federal courts.',
    ],
    correctAnswer: 2,
    explanation:
      'In United States v. Lopez (1995), the Court struck down a federal ban on guns near schools because carrying a gun is not economic activity that substantially affects interstate commerce, the same kind of limit the state would invoke here. McCulloch points the other way, since it expanded what Congress may do through its implied powers.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    question:
      'Which of the following best describes the difference between categorical grants and block grants?',
    options: [
      'Categorical grants go only to city governments, while block grants go to state legislatures for any use.',
      'Categorical grants let states spend freely in a broad area, while block grants fund one narrow project.',
      'Categorical grants fund narrow purposes with strict rules, while block grants allow wider state discretion.',
      'Categorical grants are unfunded federal mandates, while block grants send federal money to the states.',
    ],
    correctAnswer: 2,
    explanation:
      'Categorical grants carry specific spending rules, such as highway money tied to a 21-year-old drinking age, while block grants let states decide how to spend within a general area like community development. Reversing the two is a common slip, and neither is an unfunded mandate, since both send federal money to the states.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"Governments are instituted among Men, deriving their just powers from the consent of the governed."\n— Declaration of Independence (1776)',
    question: 'Which democratic principle is most directly expressed in this passage?',
    options: [
      'Limited government, in which written rules restrain what officials may do.',
      'Popular sovereignty, in which authority comes from the people being ruled.',
      'Federalism, in which power is shared between the nation and the states.',
      'Judicial review, in which courts can void laws that violate a constitution.',
    ],
    correctAnswer: 1,
    explanation:
      'Grounding government\'s "just powers" in the "consent of the governed" means that legitimate authority comes from the people, the definition of popular sovereignty. Limited government is also a founding principle, but this sentence speaks to where power comes from rather than to how it is restrained.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"... a free republic cannot succeed over a country of such immense extent, containing such a number of inhabitants ... as that of the whole United States."\n— Brutus No. 1 (1787)',
    question:
      'The argument in the passage most directly challenges which claim made by supporters of the Constitution?',
    options: [
      'That a bill of rights was unnecessary because the new government had only listed powers.',
      'That separate branches armed with checks would keep any one branch from dominating.',
      'That a single executive would bring energy and accountability to national affairs.',
      'That an extended republic would protect liberty by controlling the effects of faction.',
    ],
    correctAnswer: 3,
    explanation:
      'Brutus No. 1, the leading Anti-Federalist essay, argues that liberty cannot survive in a republic as large as the United States, a direct rebuttal of Madison\'s claim in Federalist 10 that an extended republic best controls faction. Anti-Federalists did demand a bill of rights, but this passage is about the size of the republic, not about written protections for individual liberties.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      'Scenario: A state passes a law requiring all marijuana dispensaries to be licensed by the state, even though federal law continues to classify marijuana as a Schedule I controlled substance.',
    question: 'Which constitutional provision determines whether the federal ban still applies to the state\'s licensed dispensaries?',
    options: [
      'The Tenth Amendment, which lets the state\'s licensing law override the federal ban.',
      'The Commerce Clause, which limits federal drug law to sales across state lines.',
      'The Supremacy Clause, which makes federal law prevail over conflicting state law.',
      'The Full Faith and Credit Clause, which binds states to honor federal statutes.',
    ],
    correctAnswer: 2,
    explanation:
      'Under the Supremacy Clause, a valid federal law prevails over a conflicting state law, so the federal ban still reaches licensed dispensaries even though the state permits them. The Tenth Amendment reserves only powers not delegated to the national government, so it cannot let a state law cancel a valid federal statute inside the state.',
  },

  /* ============================ UNIT 2 — BRANCHES (17) ============================ */
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      'Table (described): Number of cloture motions filed in the U.S. Senate, selected Congresses (approximate).\n  91st Congress (1969–70): 7\n  101st Congress (1989–90): 38\n  111th Congress (2009–10): 137\n  117th Congress (2021–22): 336',
    question: 'The trend in the table most directly reflects which development in the modern Senate?',
    options: [
      'Fewer conference committees as the chambers settle differences informally.',
      'A stronger Rules Committee that sets firm time limits on floor debate.',
      'More frequent filibusters as the parties have grown more polarized.',
      'More presidential vetoes as divided government has become common.',
    ],
    correctAnswer: 2,
    explanation:
      'A cloture motion is the tool for ending a filibuster, so a nearly fiftyfold increase signals that the minority party now threatens to filibuster most significant measures, a sign of growing polarization. Time limits on floor debate are set by the House Rules Committee; the Senate has no equivalent, which is why the filibuster exists at all.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    question: 'Which of the following is a constitutionally enumerated power of the House of Representatives alone?',
    options: [
      'Ratifying treaties negotiated by the president.',
      'Originating bills for raising revenue.',
      'Confirming nominees to the federal courts.',
      'Conducting trials of impeached officials.',
    ],
    correctAnswer: 1,
    explanation:
      'Article I, Section 7 requires that all bills for raising revenue originate in the House, the chamber designed to be closest to the people. The House impeaches, but trying impeached officials belongs to the Senate, which also confirms judges and ratifies treaties.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      'Scenario: A member of the House receives thousands of calls from constituents urging a vote against a trade agreement. After studying the agreement, the member concludes it will benefit the country and votes for it, explaining that she was elected to use her own judgment.',
    question: 'The member\'s vote is most consistent with which model of representation?',
    options: [
      'Delegate, voting as a majority of the district would want.',
      'Politico, balancing district opinion against party pressure.',
      'Partisan, following the position set by party leadership.',
      'Trustee, relying on personal judgment about the public good.',
    ],
    correctAnswer: 3,
    explanation:
      'A trustee votes according to personal judgment of what is best even when constituents disagree, exactly what this member did. A delegate would have followed the flood of constituent calls, and a politico shifts between the two roles depending on the issue.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    question:
      'Which of the following best describes the constitutional "advice and consent" role of the Senate?',
    options: [
      'The Senate confirms major presidential nominees and ratifies treaties.',
      'The Senate confirms the White House chief of staff and senior aides.',
      'The Senate may overturn Supreme Court decisions by a two-thirds vote.',
      'The Senate and the House jointly confirm the president\'s cabinet.',
    ],
    correctAnswer: 0,
    explanation:
      'Article II gives the Senate advice and consent over the president\'s major appointments, such as cabinet secretaries, ambassadors, and federal judges, confirmed by majority vote, and over treaties, ratified by two-thirds. White House staff, including the chief of staff, serve at the president\'s pleasure without Senate confirmation, and the House plays no part in confirming anyone.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    question: 'Discharge petitions in the House of Representatives are used primarily to:',
    options: [
      'Censure a member who has broken ethics rules or misused office funds.',
      'Cut off floor debate when the minority threatens a filibuster.',
      'Override a pocket veto issued after Congress has adjourned.',
      'Force a bill out of a committee whose chair refuses to schedule a vote.',
    ],
    correctAnswer: 3,
    explanation:
      'When a committee chair bottles up a bill, a discharge petition signed by 218 members, an absolute majority of the House, forces it to the floor. Cutting off debate to defeat a filibuster is a Senate procedure called cloture, and the House has no filibuster to end.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      '"It is emphatically the province and duty of the judicial department to say what the law is."\n— Chief Justice John Marshall, Marbury v. Madison (1803)',
    question: 'This passage asserts which power of the federal courts?',
    options: [
      'Original jurisdiction over every dispute involving a federal official.',
      'Appellate review of state court rulings on state constitutions.',
      'Judicial review of whether acts of Congress violate the Constitution.',
      'Advisory opinions on pending bills whenever Congress requests them.',
    ],
    correctAnswer: 2,
    explanation:
      'Marshall\'s claim that courts "say what the law is" grounds judicial review: when a statute conflicts with the Constitution, courts must follow the Constitution and refuse to enforce the statute. Marbury actually rejected an expansion of the Court\'s original jurisdiction, holding that Congress could not add to the list in Article III.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    question:
      'Which of the following best describes the difference between judicial restraint and judicial activism?',
    options: [
      'Restraint defers to elected branches, while activism is readier to strike down laws.',
      'Restraint tends to yield conservative rulings, while activism tends to yield liberal ones.',
      'Restraint follows the framers\' original intent, while activism reads a living Constitution.',
      'Restraint confines a ruling to the parties, while activism sets precedent for the nation.',
    ],
    correctAnswer: 0,
    explanation:
      'Judicial restraint counsels deference to Congress, the president, and the states, while judicial activism is more willing to overturn their actions or recognize new rights. Judges of any ideology can practice either, so tying restraint to conservative outcomes confuses method with result; likewise, originalism and a living Constitution are theories of interpretation, and either can be used to strike down a law.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      'Bar chart (described, illustrative data): Percentage of presidential nominations to the U.S. Courts of Appeals confirmed within 200 days of nomination.\n  1989: 90%\n  1999: 65%\n  2009: 50%\n  2019: 38%',
    question: 'The trend shown in the chart most likely reflects which development?',
    options: [
      'Rising partisanship and greater use of holds and delays on judicial nominees.',
      'More recess appointments that bypass the Senate confirmation process altogether.',
      'A steady decline in the number of nominees the president sends to the Senate.',
      'A shrinking caseload that has reduced the urgency of filling court vacancies.',
    ],
    correctAnswer: 0,
    explanation:
      'A falling share of quick confirmations fits the rise in partisan conflict over the courts, as senators use holds, procedural delays, and party-line votes to slow the other party\'s nominees. A drop in the number of nominations would not by itself lower the percentage of nominees confirmed quickly.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    question:
      'Which of the following best describes the principle of stare decisis?',
    options: [
      'Judges interpret the Constitution as its framers originally understood it.',
      'Courts decline to decide political questions left to the elected branches.',
      'Federal courts defer to an agency\'s reading of the statutes it enforces.',
      'Courts follow earlier rulings on similar questions to keep the law stable.',
    ],
    correctAnswer: 3,
    explanation:
      'Stare decisis ("let the decision stand") asks courts to follow precedent so the law stays stable and predictable, though the Court can overturn a precedent it judges badly wrong. Original understanding is a theory of constitutional interpretation, not the doctrine of following prior rulings.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      'Scenario: Congress passes a clean-air law directing the Environmental Protection Agency (EPA) to set emission limits "requisite to protect the public health." The EPA then issues a detailed regulation capping emissions from coal-fired power plants, and industry groups object to the cost.',
    question: 'The EPA\'s power to issue this regulation is best described as an example of:',
    options: [
      'Judicial review exercised by an independent executive-branch agency.',
      'Rule-making authority that Congress delegated to a federal agency.',
      'An enumerated power granted directly to the president in Article II.',
      'A concurrent power the EPA shares equally with state legislatures.',
    ],
    correctAnswer: 1,
    explanation:
      'Congress wrote a broad standard and left the details to the EPA, a classic delegation of discretionary and rule-making authority to the bureaucracy; the resulting rule carries the force of law. The president supervises the agency, but the power to make this rule comes from the statute, not from an enumerated Article II power.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    question:
      'Which of the following is the most accurate description of an "iron triangle" in American politics?',
    options: [
      'A formal alliance among the legislative, executive, and judicial branches.',
      'A coalition of the president, the Speaker, and the Senate majority leader.',
      'A committee, an agency, and an interest group bound by mutual benefit.',
      'A bloc of three justices who regularly vote together on the Supreme Court.',
    ],
    correctAnswer: 2,
    explanation:
      'An iron triangle is a durable, mutually beneficial relationship among a congressional committee, the bureaucratic agency it oversees, and the interest group affected by the agency\'s work. It is not a formal alliance of the three constitutional branches; the courts play no part in it.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      '"The President ... shall have Power to grant Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment."\n— Article II, Section 2',
    question: 'The constitutional pardon power of the president:',
    options: [
      'Covers federal offenses but not state crimes or cases of impeachment.',
      'Can be overridden when two-thirds of both houses of Congress object.',
      'Requires approval by the Supreme Court before a pardon takes effect.',
      'Reaches both federal and state convictions once a sentence begins.',
    ],
    correctAnswer: 0,
    explanation:
      'The pardon power reaches only "Offences against the United States," so it cannot touch state convictions, and the text expressly excludes impeachment. Congress has no power to override a pardon; the only checks are political ones such as public backlash.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    question:
      'Which of the following is the most significant source of the modern president\'s ability to act unilaterally on policy?',
    options: [
      'Signing statements, which let the president cancel parts of a law.',
      'The pocket veto, available whenever Congress is in session.',
      'Executive orders that direct how agencies carry out existing law.',
      'Treaties, which take effect as soon as the president signs them.',
    ],
    correctAnswer: 2,
    explanation:
      'Executive orders let presidents direct the bureaucracy without new legislation, making them the main tool of unilateral policymaking. Signing statements announce how the president reads or intends to enforce a new law, but they cannot cancel any part of it; to block a provision the president must veto the whole bill.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      'Scenario: In 2013 the Senate changed its rules so that debate on most presidential nominees could be ended by a simple majority vote instead of 60 votes. In 2017 it extended the same rule to Supreme Court nominees.',
    question: 'Which of the following is the most likely consequence of these rule changes?',
    options: [
      'The minority party can block nominees more easily by threatening a filibuster.',
      'A Senate majority of the president\'s party can confirm nominees on its own.',
      'The House now votes on judicial nominees after the Senate has confirmed them.',
      'Presidents must rely more on recess appointments to fill federal court seats.',
    ],
    correctAnswer: 1,
    explanation:
      'Once a simple majority can end debate, the minority loses the filibuster as a weapon against nominees, so a president whose party holds the Senate can win confirmation on near party-line votes, as with several recent Supreme Court justices. The change cuts the other way from easier blocking, since it removed the 60-vote threshold the minority had used to stall nominations.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      '"Energy in the executive is a leading character in the definition of good government. ... Decision, activity, secrecy, and dispatch will generally characterize the proceedings of one man in a much more eminent degree than the proceedings of any greater number."\n— Federalist No. 70, Alexander Hamilton (1788)',
    question: 'Hamilton\'s argument in the passage most directly supports which feature of the Constitution?',
    options: [
      'A Senate whose members serve six-year terms to resist popular passions.',
      'A single president rather than an executive council of several members.',
      'A Congress with power over the budget that funds executive agencies.',
      'A two-term limit to keep any one president from gaining too much power.',
    ],
    correctAnswer: 1,
    explanation:
      'Hamilton argues that "energy," meaning decisive and quick action, is best achieved when executive power rests in one person, which is why the Constitution creates a single president instead of a plural executive. A term limit would restrain the executive rather than energize it, and it was not added until the Twenty-Second Amendment in 1951.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      '"The judiciary ... has no influence over either the sword or the purse; no direction either of the strength or of the wealth of the society; and can take no active resolution whatever. It may truly be said to have neither FORCE nor WILL, but merely judgment."\n— Federalist No. 78, Alexander Hamilton (1788)',
    question: 'Hamilton uses this description to defend which feature of the federal courts?',
    options: [
      'Life tenure for judges who serve during good behavior.',
      'Senate confirmation of judges as a check on presidential choice.',
      'Election of judges so that rulings stay close to public opinion.',
      'Congress\'s power to create lower courts and set their jurisdiction.',
    ],
    correctAnswer: 0,
    explanation:
      'Because the judiciary is the "least dangerous" branch, Hamilton argues it needs protection from the others, and permanent tenure during good behavior gives judges the independence to rule against popular majorities. Electing judges would do the reverse, tying rulings to the public pressure Federalist 78 wants courts shielded from.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      'Baker v. Carr (1962): The Court ruled that a challenge to a state\'s malapportioned legislative districts was not a "political question" and could be heard by federal courts, opening the way to the "one person, one vote" principle.\nShaw v. Reno (1993): The Court ruled that voters may challenge a congressional district under the Equal Protection Clause when the district is so irregular in shape that it can be explained only as an effort to separate voters by race.',
    question: 'Which statement best describes a similarity between the two decisions?',
    options: [
      'Each held that partisan gerrymandering is a question courts cannot decide.',
      'Each struck down the winner-take-all allocation of electoral votes by the states.',
      'Each required states to create majority-minority districts after every census.',
      'Each let federal courts review how district lines are drawn under equal protection.',
    ],
    correctAnswer: 3,
    explanation:
      'Baker opened legislative apportionment to federal court review under the Fourteenth Amendment, and Shaw applied the Equal Protection Clause to a district drawn to separate voters by race. Rather than requiring majority-minority districts, Shaw made race-based districting constitutionally suspect.',
  },

  /* ============================ UNIT 3 — CIVIL LIBERTIES & RIGHTS (9) ============================ */
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      'Scenario: A state requires all children to attend school until age 16. Amish parents refuse to send their children past the eighth grade, arguing that high school would expose the children to values that conflict with their religious way of life.',
    question: 'Based on Wisconsin v. Yoder (1972), a court would most likely rule that:',
    options: [
      'The Establishment Clause bars the state from granting any religious exemption.',
      'The Free Exercise Clause shields the parents from the extra two years of school.',
      'The state\'s interest in education outweighs the parents\' religious claim.',
      'The parents\' claim fails since compulsory schooling laws are neutral.',
    ],
    correctAnswer: 1,
    explanation:
      'In Yoder the Court held that the Free Exercise Clause protected Amish families from compulsory schooling beyond eighth grade, since the state\'s interest in two more years of education did not outweigh the burden on their religious practice. Exempting a religious group from a general law is an accommodation, not an establishment of religion.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      'Excerpt 1: "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal."\n— Abraham Lincoln, Gettysburg Address (November 1863)\n\nExcerpt 2: "... all persons held as slaves within any State or designated part of a State, the people whereof shall then be in rebellion against the United States, shall be then, thenceforward, and forever free ..."\n— Abraham Lincoln, Emancipation Proclamation (January 1863)',
    question: 'Which statement most accurately compares the two excerpts?',
    options: [
      'Excerpt 1 had the force of law and ended slavery nationwide, while Excerpt 2 explained the constitutional basis for that step.',
      'Excerpt 1 echoes the Declaration\'s ideal of equality, while Excerpt 2 used war powers to free enslaved people in rebel areas.',
      'Excerpt 1 was a war measure issued under the commander-in-chief power, while Excerpt 2 was a speech honoring fallen soldiers.',
      'Excerpt 1 and Excerpt 2 each freed the enslaved people held in the border states that had remained loyal to the Union.',
    ],
    correctAnswer: 1,
    explanation:
      'The Gettysburg Address is a speech that recalls the Declaration\'s promise that "all men are created equal," while the Emancipation Proclamation was a war measure, issued under the president\'s commander-in-chief power, that freed enslaved people only in areas still in rebellion. Neither ended slavery nationwide or in the loyal border states; that required the Thirteenth Amendment (1865).',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      'Scenario: During a war, a man mails leaflets urging draftees to resist induction into the military. He is convicted under a federal law that bans obstructing military recruitment, and he argues that the conviction violates his freedom of speech.',
    question: 'Which Supreme Court precedent would the government most likely rely on to defend the conviction?',
    options: [
      'Tinker v. Des Moines, permitting limits on speech that substantially disrupts schools.',
      'Schenck v. United States, on speech that poses a clear and present danger.',
      'New York Times Co. v. United States, on publishing classified wartime documents.',
      'McDonald v. Chicago, on applying the Bill of Rights to state and local governments.',
    ],
    correctAnswer: 1,
    explanation:
      'Schenck upheld the conviction of a man who mailed anti-draft leaflets during World War I, holding that speech creating a "clear and present danger" of harms Congress may prevent is not protected. New York Times Co. v. United States also arose in wartime, but there the government lost, so it would hurt rather than help the prosecution.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      '"In a unanimous opinion, the Court held that segregation of children in public schools solely on the basis of race deprives minority children of equal educational opportunities, even though the physical facilities and other tangible factors may be equal."\n— Paraphrase of Brown v. Board of Education (1954)',
    question:
      'The Court\'s reasoning in Brown v. Board of Education rested most directly on which constitutional provision?',
    options: [
      'The Equal Protection Clause of the Fourteenth Amendment.',
      'The Due Process Clause of the Fifth Amendment.',
      'The Fifteenth Amendment\'s ban on racial discrimination in voting.',
      'The Commerce Clause power of Congress over interstate activity.',
    ],
    correctAnswer: 0,
    explanation:
      'Brown held that state-mandated school segregation denies Black children "the equal protection of the laws" guaranteed by the Fourteenth Amendment, rejecting the claim that separate facilities can be equal. The Commerce Clause later supported the Civil Rights Act of 1964, but Brown was a ruling on what the Constitution forbids states to do, not on a power of Congress.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      '"One has not only a legal but a moral responsibility to obey just laws. Conversely, one has a moral responsibility to disobey unjust laws. ... One who breaks an unjust law must do so openly, lovingly, and with a willingness to accept the penalty."\n— Martin Luther King Jr., "Letter from a Birmingham Jail" (1963)',
    question: 'King\'s argument in the passage most directly supports which approach to securing civil rights?',
    options: [
      'Litigation in federal court as the only proper way to win civil rights.',
      'Armed self-defense against officials who enforce segregation laws.',
      'Patient lobbying of Congress while obeying every law until it is repealed.',
      'Nonviolent civil disobedience that accepts arrest to expose unjust laws.',
    ],
    correctAnswer: 3,
    explanation:
      'King distinguishes just from unjust laws and argues that breaking an unjust law openly and accepting the penalty is a moral act, the core of nonviolent civil disobedience. He does not reject the courts or lobbying, but he insists that waiting quietly for change means justice delayed and therefore denied.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      '"In all criminal prosecutions, the accused shall enjoy the right ... to have the Assistance of Counsel for his defence."\n— Sixth Amendment',
    question:
      'In Gideon v. Wainwright (1963), the Supreme Court extended this protection by ruling that:',
    options: [
      'Police must warn suspects of their right to a lawyer before any questioning.',
      'The right to a free attorney applies only in federal capital prosecutions.',
      'A conviction without counsel stands unless the defendant shows the trial was unfair.',
      'States must provide lawyers to felony defendants who cannot afford them.',
    ],
    correctAnswer: 3,
    explanation:
      'Gideon held that the right to counsel is fundamental and binds the states through the Fourteenth Amendment, so a state must appoint a lawyer for a felony defendant too poor to hire one, replacing the older case-by-case test of whether a trial without counsel was unfair. Warnings before police questioning come from Miranda v. Arizona, a separate Fifth Amendment ruling about interrogation rather than about lawyers at trial.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      'Scenario: The city of Chicago banned nearly all handgun possession by residents. A resident challenged the ban, and in McDonald v. Chicago (2010) the Supreme Court ruled that the Second Amendment right to keep and bear arms applies to state and local governments.',
    question: 'The ruling in McDonald v. Chicago is an example of which constitutional doctrine?',
    options: [
      'Judicial deference toward gun laws passed by elected city and state governments.',
      'Selective incorporation through the Fourteenth Amendment\'s Due Process Clause.',
      'National supremacy over state laws that conflict with federal statutes.',
      'Reserved powers that the Tenth Amendment leaves to the states.',
    ],
    correctAnswer: 1,
    explanation:
      'McDonald applied the Second Amendment to the states by holding that the right to bear arms is fundamental and protected by the Fourteenth Amendment\'s Due Process Clause, the method of selective incorporation. National supremacy does not fit, since the Chicago ordinance conflicted with a constitutional right rather than with a federal statute.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      'Scenario: A state law requires public school students to recite a brief, nondenominational prayer at the start of each day; students may remain silent if they object. A group of parents challenges the law in federal court.',
    question: 'Based on Engel v. Vitale (1962), a federal court would most likely rule that the law:',
    options: [
      'Is valid since the prayer favors no religion and objectors can opt out.',
      'Violates the Establishment Clause despite the opt-out offered to objectors.',
      'Infringes the Free Exercise rights of students who do not wish to pray.',
      'Is valid since states, not Congress, control what public schools teach.',
    ],
    correctAnswer: 1,
    explanation:
      'Engel held that a state-composed prayer recited in public schools violates the Establishment Clause even when it is nondenominational and participation is voluntary, because the government itself is sponsoring a religious exercise. The Free Exercise Clause is the wrong fit, since no student is being stopped from practicing a faith.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    question:
      'In New York Times Co. v. United States (1971), the Pentagon Papers case, the Supreme Court ruled that:',
    options: [
      'Publishing classified documents is never protected when the nation is at war.',
      'Newspapers must clear national-security stories with the Defense Department.',
      'The government failed to justify a prior restraint that would block publication.',
      'Reporters have an absolute privilege to refuse to testify about their sources.',
    ],
    correctAnswer: 2,
    explanation:
      'The Court held that the government had not met the heavy burden required to justify prior restraint, so the newspapers could publish the Pentagon Papers. The ruling did not give the press an absolute shield, but it made clear that a general claim of national security does not let the government block publication in advance, even in wartime.',
  },

  /* ============================ UNIT 4 — IDEOLOGIES & BELIEFS (6) ============================ */
  {
    type: 'mcq',
    topic: 'unit-4-ideologies-beliefs',
    question:
      'Which of the following best describes political socialization?',
    options: [
      'Judging incumbents mainly by recent economic results at election time.',
      'How people acquire their views on government from family and schooling.',
      'A lasting change in party loyalty set off by a critical election.',
      'Drawing a random sample of citizens to measure public attitudes.',
    ],
    correctAnswer: 1,
    explanation:
      'Political socialization is the lifelong process through which people pick up political values and beliefs, with family usually the first and strongest influence and schools, peers, and media following. Judging incumbents by economic results describes retrospective voting, a behavior that socialization may shape but is not itself.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-ideologies-beliefs',
    stimulus:
      'Bar chart (described, illustrative data): Among voters age 18–29, 60% identify with or lean toward the Democratic Party, 32% with or lean Republican, and 8% are independent. Among voters age 65+, 47% lean Republican, 45% lean Democratic, and 8% are independent.',
    question:
      'The pattern in the chart best illustrates which concept in public opinion?',
    options: [
      'A gender gap in vote choice between men and women.',
      'A racial gap in how voters evaluate candidates.',
      'A regional gap in turnout between urban and rural areas.',
      'A generational gap in party identification.',
    ],
    correctAnswer: 3,
    explanation:
      'The chart compares age groups, and younger voters lean far more Democratic than voters 65 and older, a generational gap in party identification. A gender gap would require comparing men and women, and the chart contains no data broken down by sex.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-ideologies-beliefs',
    stimulus:
      'Scenario: During a recession, one member of Congress proposes a large increase in federal spending on roads and bridges to put money in consumers\' hands. Another proposes cutting tax rates on businesses and high earners to encourage investment and production.',
    question: 'The two proposals most closely reflect which pair of economic theories?',
    options: [
      'Keynesian theory for the first and monetarist theory for the second.',
      'Supply-side theory for the first and Keynesian theory for the second.',
      'Keynesian theory for the first and supply-side theory for the second.',
      'Keynesian theory for both, since each aims to raise consumer demand.',
    ],
    correctAnswer: 2,
    explanation:
      'Keynesian theory calls for government spending to boost demand during a downturn, while supply-side theory holds that lower taxes spur investment and production. Monetarism centers on the Federal Reserve\'s control of the money supply, so it does not describe either a tax cut or a public works program.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-ideologies-beliefs',
    stimulus:
      '"Modern American liberalism generally favors a more active role for government in regulating the economy and providing social services, while modern American conservatism generally favors limited government in economic matters and traditional values in social policy."\n— Generalized political-science textbook description',
    question:
      'Which of the following policy positions is most consistent with modern American liberalism, as described above?',
    options: [
      'Cutting income tax rates and reducing federal regulation of business.',
      'Giving states more control over social policy through block grants.',
      'Letting workers invest Social Security taxes in private accounts.',
      'Expanding federal funding for universal preschool and child care.',
    ],
    correctAnswer: 3,
    explanation:
      'Funding universal preschool expands government\'s role in providing social services, the hallmark of modern liberalism in the passage. Tax cuts, deregulation, and private Social Security accounts all reflect the conservative preference for limited government in economic matters.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-ideologies-beliefs',
    stimulus:
      '"It is not from the benevolence of the butcher, the brewer, or the baker, that we expect our dinner, but from their regard to their own interest."\n— Adam Smith, The Wealth of Nations (1776)',
    question: 'Which policy position is most consistent with the economic principle expressed in the passage?',
    options: [
      'Setting government limits on food prices so that every family can afford the same basic groceries each week',
      'Placing major food producers under public ownership so that the pursuit of profit does not decide what is produced',
      'Raising tariffs on imported goods so that domestic producers are shielded from competition with foreign sellers',
      'Letting prices set by competition among private sellers decide what goods are produced instead of the government',
    ],
    correctAnswer: 3,
    explanation:
      'Smith argues that people pursuing their own interest through voluntary exchange end up supplying what others need, the reasoning behind free enterprise and a limited government role in the economy. Protective tariffs may sound pro-business, but Smith criticized such mercantilist trade restrictions because they block the competition his argument relies on.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-ideologies-beliefs',
    stimulus:
      'A national poll reports: "55% of respondents support expanded background checks for gun purchases. The poll surveyed 1,250 randomly selected adults nationwide; margin of error is ±3 percentage points."',
    question: 'Based on this information, which interpretation is most appropriate?',
    options: [
      'About 3% of the respondents gave answers that the pollsters could not count.',
      'Support among all adults most likely falls between about 52% and 58%.',
      'The result describes only the 1,250 adults surveyed, not the public at large.',
      'The true level of support could fall below 50% once the margin is applied.',
    ],
    correctAnswer: 1,
    explanation:
      'A margin of error of ±3 points means the true level of support most likely lies between about 52% and 58%, so even the low end of the range is a majority and support cannot fall below 50% within it. The margin measures sampling error, not uncounted answers, and because the sample was random it can be used to estimate the views of all adults, not just those surveyed.',
  },

  /* ============================ UNIT 5 — POLITICAL PARTICIPATION (12) ============================ */
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    stimulus:
      'Line graph (described): Voter turnout in U.S. presidential elections, 1996–2020.\n  1996: 51.7%\n  2000: 54.2%\n  2004: 60.1%\n  2008: 61.6%\n  2012: 58.6%\n  2016: 60.1%\n  2020: 66.8%',
    question: 'The trend shown in the graph most directly contradicts which common claim about U.S. elections?',
    options: [
      'That midterm turnout runs well below presidential-year turnout.',
      'That young voters turn out at much lower rates than older voters.',
      'That turnout is higher in states with same-day registration.',
      'That presidential turnout has fallen steadily from the mid-1990s on.',
    ],
    correctAnswer: 3,
    explanation:
      'Turnout rose from about 52 percent in 1996 to nearly 67 percent in 2020, with only a dip in 2012, so the data contradict any claim of steady decline. Midterm turnout may well be lower, but a graph of presidential years alone cannot confirm or contradict that claim.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    question:
      'Which of the following constitutional amendments expanded the right to vote by lowering the voting age to 18?',
    options: [
      'Fifteenth Amendment',
      'Nineteenth Amendment',
      'Twenty-Sixth Amendment',
      'Twenty-Fourth Amendment',
    ],
    correctAnswer: 2,
    explanation:
      'The Twenty-Sixth Amendment (1971) lowered the voting age to 18, ratified amid arguments that citizens old enough to be drafted for the Vietnam War should be able to vote. The Twenty-Fourth Amendment also expanded suffrage, but it did so by banning poll taxes in federal elections.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    stimulus:
      '"The Court holds that the First Amendment prohibits the government from restricting independent political expenditures by corporations, associations, or labor unions."\n— Paraphrase of Citizens United v. Federal Election Commission (2010)',
    question: 'Citizens United v. FEC most directly contributed to the rise of:',
    options: [
      'Public financing that replaced private money in federal campaigns.',
      'Caps on what corporations may spend on ads that support candidates.',
      'Super PACs that raise unlimited sums for independent expenditures.',
      'Limits on how much individuals may give directly to a candidate.',
    ],
    correctAnswer: 2,
    explanation:
      'By holding that government cannot limit independent political spending by corporations and unions, Citizens United opened the way for Super PACs, which may raise and spend unlimited sums as long as they do not coordinate with candidates. Limits on direct contributions to candidates already existed and were left in place; the ruling removed limits rather than creating them.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    question:
      'Which of the following best describes the role of "linkage institutions" in American democracy?',
    options: [
      'Channels like parties and the media that connect citizens to government.',
      'Formal ties that bind the executive and the legislative branches together.',
      'Agencies within the federal bureaucracy that coordinate state programs.',
      'Federal courts that hear citizens\' complaints against the government.',
    ],
    correctAnswer: 0,
    explanation:
      'Linkage institutions, chiefly political parties, interest groups, elections, and the media, carry citizens\' preferences to policymakers and carry information back to the public. They are not part of the formal structure of government, so neither ties between branches nor bureaucratic agencies fit the term.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    stimulus:
      'Scenario: A nonprofit organization runs a national television campaign opposing a federal carbon tax. The organization does not coordinate with any candidate or political party.',
    question: 'The organization\'s activities are most accurately described as:',
    options: [
      'Independent issue advocacy protected as political speech.',
      'A direct contribution that counts against federal contribution limits.',
      'Electioneering that is barred in the 60 days before a federal election.',
      'A formal endorsement that makes the group an arm of a party.',
    ],
    correctAnswer: 0,
    explanation:
      'Advertising about a policy issue that is not coordinated with any candidate or party is independent issue advocacy, which courts treat as protected political speech. Contribution limits apply to money given to candidates or parties, and this group gave nothing to either.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    question:
      'In the Electoral College, the candidate who wins the most popular votes nationwide does not always win the presidency because:',
    options: [
      'Electors in most states are free to ignore their state\'s result and vote as they like.',
      'Most states award all their electors to whoever wins that state\'s vote.',
      'The House chooses the winner when no candidate wins a majority of the popular vote.',
      'Electors are divided among the states by turnout rather than by population.',
    ],
    correctAnswer: 1,
    explanation:
      'Because 48 states and the District of Columbia award all of their electors to the statewide winner, a candidate can run up large margins in some states while narrowly losing enough others to fall short of 270, as happened in 2000 and 2016. The House chooses the president only when no candidate wins a majority of electoral votes, not popular votes.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    stimulus:
      'A political-science study finds that voters who consume political news primarily through social media are more likely to encounter content that aligns with their existing beliefs than voters who consume news through traditional broadcast media.',
    question: 'This finding is most consistent with which concept?',
    options: [
      'The agenda-setting power of network news anchors.',
      'The echo-chamber effect of social-media news sources.',
      'The rally-around-the-flag effect in a foreign crisis.',
      'The horse-race coverage of polls during campaigns.',
    ],
    correctAnswer: 1,
    explanation:
      'Voters who rely on social media see more news that confirms what they already believe, the echo-chamber effect, in which people hear mostly from like-minded sources and seldom meet opposing views. Agenda setting describes how media choose which issues the public thinks about, not how personalized feeds narrow the viewpoints a person sees.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    stimulus:
      'Scenario: In a survey taken just before a presidential election, a voter explains, "I don\'t follow the candidates\' plans very closely. Over the last four years my wages went up and my town got a new factory, so I\'m voting to keep the current president in office."',
    question: 'The voter\'s reasoning best reflects which model of voting behavior?',
    options: [
      'Prospective voting, based on what the candidates promise to do next.',
      'Party-line voting, based on loyalty to one party across all offices.',
      'Single-issue voting, based on one policy the voter cares about most.',
      'Retrospective voting, based on the incumbent\'s record during the past term.',
    ],
    correctAnswer: 3,
    explanation:
      'The voter judges the current president by results over the past four years and says outright that future plans matter little, which is retrospective voting. Prospective voting would look ahead to the candidates\' proposals, the very information this voter admits to ignoring.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    stimulus:
      'Scenario: A national association lobbies successfully for a federal tax break that applies to every small-business owner in the country. Only about one in ten eligible owners pays the association\'s annual dues.',
    question: 'The gap between those who benefit and those who pay dues illustrates which problem facing interest groups?',
    options: [
      'The revolving-door problem, in which officials leave to become lobbyists.',
      'The free-rider problem, in which nonmembers gain without paying dues.',
      'Pluralist competition, in which rival groups check one another\'s influence.',
      'Agency capture, in which regulators come to serve the industries they oversee.',
    ],
    correctAnswer: 1,
    explanation:
      'Because the tax break goes to every small-business owner whether or not they join, most owners enjoy it without paying dues, the free-rider problem that makes broad groups hard to organize. The revolving door describes former officials becoming lobbyists and has nothing to do with who pays for a group\'s work.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    stimulus:
      'Table (described, approximate): Reelection rate of U.S. House incumbents who ran for another term, with annual average public approval of Congress.\n  2010: reelection 85%, approval 19%\n  2014: reelection 95%, approval 15%\n  2018: reelection 91%, approval 19%\n  2022: reelection 94%, approval 21%',
    question: 'Which conclusion is best supported by the data in the table?',
    options: [
      'Low approval of Congress led many House incumbents to retire rather than run.',
      'Incumbent reelection rates rose and fell in step with approval of Congress.',
      'House incumbents won reelection at high rates despite low approval of Congress.',
      'Incumbent reelection rates declined steadily over the period from 2010 to 2022.',
    ],
    correctAnswer: 2,
    explanation:
      'Even with approval of Congress around 15 to 21 percent, roughly 85 to 95 percent of House members who ran again won, showing the strength of incumbency advantages such as name recognition, casework, and fundraising. The table counts only incumbents who sought reelection, so it cannot show whether low approval pushed members to retire, and the year with the lowest approval had the highest reelection rate.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    stimulus:
      'Scenario: In a state legislative election, a third party wins about 15 percent of the vote in nearly every district across the state but does not win a single seat.',
    question: 'Which feature of the American electoral system best explains this outcome?',
    options: [
      'Ballot-access rules that keep minor parties off most general-election ballots.',
      'Federal campaign finance laws that cap spending by minor-party candidates.',
      'Closed primaries that let only registered party members choose nominees.',
      'Single-member districts where only the top vote-getter in each wins a seat.',
    ],
    correctAnswer: 3,
    explanation:
      'With one seat per district awarded to whoever gets the most votes, a party that finishes a distant third everywhere wins nothing, which is why winner-take-all, single-member districts sustain a two-party system. Ballot-access rules can hurt minor parties, but this party was on the ballot and still won no seats, so access was not the problem.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    stimulus:
      'Scenario: A state allows only voters who are registered members of a party to vote in that party\'s primary. An independent voter who wants to help choose the Democratic nominee for governor is turned away at the polls.',
    question: 'Which type of nomination contest does this state use?',
    options: [
      'An open primary, in which any voter may choose either ballot.',
      'A caucus, in which party members meet in person to pick nominees.',
      'A closed primary, limited to voters registered with that party.',
      'A blanket primary, in which every candidate runs on one ballot.',
    ],
    correctAnswer: 2,
    explanation:
      'Restricting a party\'s primary to its registered members is the definition of a closed primary, which is why the independent voter was turned away. In an open primary that voter could have requested the Democratic ballot without registering with the party.',
  },
]
