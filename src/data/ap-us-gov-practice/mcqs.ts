import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP US Government & Politics — 55 stimulus-based MCQs.
 * Distribution mirrors official CB exam weighting:
 *   Unit 1 — Foundations of American Democracy (15)
 *   Unit 2 — Interactions Among Branches (15)
 *   Unit 3 — Civil Liberties & Civil Rights (12)
 *   Unit 4 — American Political Ideologies & Beliefs (6)
 *   Unit 5 — Political Participation (7)
 */

export const MCQS: MCQItem[] = [
  /* ============================ UNIT 1 — FOUNDATIONS (15) ============================ */
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"The accumulation of all powers, legislative, executive, and judiciary, in the same hands, whether of one, a few, or many, and whether hereditary, self-appointed, or elective, may justly be pronounced the very definition of tyranny."\n— Federalist No. 47, James Madison (1788)',
    question: 'Madison\'s argument in the passage most directly supports which constitutional principle?',
    options: [
      'Federalism, by reserving powers to the states.',
      'Separation of powers, by dividing authority among distinct branches.',
      'Judicial review, established later in Marbury v. Madison.',
      'Popular sovereignty, by making elections frequent.',
    ],
    correctAnswer: 1,
    explanation:
      'Madison is warning against the concentration of legislative, executive, and judicial powers in the same hands — the textbook definition of separation of powers.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary."\n— Federalist No. 51, James Madison (1788)',
    question: 'Madison uses this passage primarily to justify which structural feature of the Constitution?',
    options: [
      'A bill of rights enumerating individual liberties.',
      'A system of checks and balances among the branches.',
      'Direct election of the president by popular vote.',
      'The reserved powers clause of the Tenth Amendment.',
    ],
    correctAnswer: 1,
    explanation:
      'Federalist 51 is the classic defense of checks and balances — because humans are not angels, government must be designed so "ambition counteracts ambition."',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"Extend the sphere, and you take in a greater variety of parties and interests; you make it less probable that a majority of the whole will have a common motive to invade the rights of other citizens."\n— Federalist No. 10, James Madison (1787)',
    question: 'Madison\'s argument in Federalist 10 directly addresses which problem in republican government?',
    options: [
      'The danger of foreign invasion under the Articles of Confederation.',
      'The threat that a majority faction will tyrannize a minority.',
      'The need for a powerful executive to enforce federal law.',
      'The risk that judges will exceed their constitutional authority.',
    ],
    correctAnswer: 1,
    explanation:
      'Federalist 10 argues that an "extended republic" is the cure for the "mischiefs of faction" — specifically, majority faction oppressing minority interests.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    question:
      'Which of the following best describes a key weakness of the Articles of Confederation that the Constitutional Convention sought to address?',
    options: [
      'The national government had no authority to declare war.',
      'The national government could not directly tax citizens or regulate interstate commerce.',
      'The national government dominated the states, leaving no reserved powers.',
      'The national government created a powerful executive who became unaccountable.',
    ],
    correctAnswer: 1,
    explanation:
      'Under the Articles, Congress could request but not levy taxes on individuals and could not regulate interstate or foreign commerce — central weaknesses that motivated the Convention.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      'Scenario: Delegates at the 1787 Constitutional Convention debate how to count enslaved persons for purposes of representation in the House and direct taxation. Northern delegates initially propose counting them only for taxation; Southern delegates propose counting them fully for representation.',
    question: 'The compromise that resolved this dispute was the:',
    options: [
      'Great (Connecticut) Compromise.',
      'Three-Fifths Compromise.',
      'Compromise of 1850.',
      'Electoral College Compromise.',
    ],
    correctAnswer: 1,
    explanation:
      'The Three-Fifths Compromise counted three-fifths of the enslaved population for both representation and direct taxation.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    question:
      'The Great (Connecticut) Compromise resolved which dispute at the Constitutional Convention?',
    options: [
      'How to count enslaved persons for representation.',
      'Whether to ratify the Constitution by state conventions or state legislatures.',
      'How to apportion representation in the legislature between large and small states.',
      'Whether to add a bill of rights before ratification.',
    ],
    correctAnswer: 2,
    explanation:
      'The Connecticut Compromise created a bicameral Congress: a House apportioned by population (favoring large states) and a Senate with equal representation (favoring small states).',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people."\n— Tenth Amendment',
    question: 'The Tenth Amendment most directly reflects which model of government?',
    options: [
      'Unitary government, in which power is centralized.',
      'Federalism, in which power is divided between national and state governments.',
      'Confederation, in which sovereign states retain ultimate authority.',
      'Parliamentary sovereignty, in which the legislature is supreme.',
    ],
    correctAnswer: 1,
    explanation:
      'The Tenth Amendment is the constitutional foundation of federalism — non-delegated, non-prohibited powers are reserved to the states or the people.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"The Government of the Union, though limited in its powers, is supreme within its sphere of action. ... The power to tax involves the power to destroy."\n— Chief Justice John Marshall, McCulloch v. Maryland (1819)',
    question: 'McCulloch v. Maryland is best known for establishing which two principles?',
    options: [
      'Judicial review and selective incorporation.',
      'Implied powers (Necessary and Proper Clause) and national supremacy.',
      'Dual federalism and the reserved powers doctrine.',
      'Popular sovereignty and separation of powers.',
    ],
    correctAnswer: 1,
    explanation:
      'McCulloch upheld Congress\'s implied power to charter a national bank under the Necessary and Proper Clause, and held that states cannot tax federal institutions because of the Supremacy Clause.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    question:
      'Which of the following best describes the difference between categorical grants and block grants?',
    options: [
      'Categorical grants are awarded by the executive branch; block grants are awarded by Congress.',
      'Categorical grants must be spent for specific purposes with strict conditions; block grants give states broader discretion within a general policy area.',
      'Categorical grants are loans repaid to the federal government; block grants are gifts.',
      'Categorical grants apply only to red states; block grants apply only to blue states.',
    ],
    correctAnswer: 1,
    explanation:
      'Categorical grants come with narrow strings (e.g., highway funds tied to a 21-year drinking age); block grants give states discretion within a broad area like community development.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"No State shall ... pass any ... Law impairing the Obligation of Contracts."\n— Article I, Section 10, U.S. Constitution',
    question: 'This clause is an example of which kind of constitutional provision?',
    options: [
      'A power expressly delegated to Congress.',
      'A power reserved to the states.',
      'A restriction placed on the states.',
      'A concurrent power shared by states and the federal government.',
    ],
    correctAnswer: 2,
    explanation:
      'Article I, Section 10 lists explicit prohibitions on the states (no treaties, no coining money, no impairing contracts), making it a restriction on state power.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"This Constitution, and the Laws of the United States which shall be made in Pursuance thereof ... shall be the supreme Law of the Land."\n— Article VI (the Supremacy Clause)',
    question: 'In a conflict between a valid federal statute and a state law, the Supremacy Clause requires that:',
    options: [
      'The state law prevails because of the Tenth Amendment.',
      'The federal law prevails and the state law is preempted.',
      'Both laws apply, and citizens may choose which to follow.',
      'The Supreme Court must hold a national referendum to resolve the conflict.',
    ],
    correctAnswer: 1,
    explanation:
      'Under the Supremacy Clause, valid federal laws preempt conflicting state laws — the foundation of doctrines like federal preemption.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    question:
      'Which of the following is an example of a concurrent power exercised by both the federal and state governments?',
    options: [
      'Coining money.',
      'Declaring war.',
      'Levying taxes.',
      'Regulating interstate commerce.',
    ],
    correctAnswer: 2,
    explanation:
      'Both the federal government and the states levy taxes (income, sales, excise) — a classic concurrent power. The other three are exclusively federal.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"Governments are instituted among Men, deriving their just powers from the consent of the governed."\n— Declaration of Independence (1776)',
    question: 'Which democratic principle is most directly expressed in this passage?',
    options: [
      'Limited government.',
      'Popular sovereignty.',
      'Judicial review.',
      'Separation of church and state.',
    ],
    correctAnswer: 1,
    explanation:
      'Government deriving its powers from the consent of the governed is the textbook definition of popular sovereignty.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      '"The Brutus essays argued that a large republic could not protect liberty because representatives would be too distant from constituents and a standing army would threaten freedom."\n— Paraphrased summary of Brutus No. 1 (1787)',
    question:
      'The argument summarized above is most consistent with which group during the ratification debate?',
    options: [
      'Federalists, who supported ratification of the Constitution.',
      'Anti-Federalists, who opposed ratification without a bill of rights.',
      'Whigs, who opposed Andrew Jackson in the 1830s.',
      'Progressives, who pushed for direct democracy in the early 1900s.',
    ],
    correctAnswer: 1,
    explanation:
      'Brutus 1 is one of the most-cited Anti-Federalist essays, warning that a strong, distant national government would erode liberty.',
  },
  {
    type: 'mcq',
    topic: 'unit-1-foundations',
    stimulus:
      'Scenario: A state passes a law requiring all marijuana dispensaries to be licensed by the state, even though federal law continues to classify marijuana as a Schedule I controlled substance.',
    question: 'This conflict best illustrates which feature of American federalism?',
    options: [
      'A clear violation of the Tenth Amendment.',
      'Tension between national supremacy and state policymaking authority.',
      'Cooperative federalism through categorical grants.',
      'The full faith and credit clause in operation.',
    ],
    correctAnswer: 1,
    explanation:
      'The marijuana example is the standard textbook illustration of tension between federal supremacy and states asserting their police powers in policy areas where federal enforcement is lax.',
  },

  /* ============================ UNIT 2 — BRANCHES (15) ============================ */
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      'Table (described): Average length of cloture motions filed per Congress, U.S. Senate.\n  91st Congress (1969–70): 5\n  101st Congress (1989–90): 24\n  111th Congress (2009–10): 137\n  117th Congress (2021–22): 336',
    question: 'The trend in the table most directly reflects which development in the modern Senate?',
    options: [
      'Increased use of the filibuster and rising partisanship.',
      'A decline in the use of conference committees.',
      'The growing power of the Senate Rules Committee.',
      'The repeal of the legislative veto.',
    ],
    correctAnswer: 0,
    explanation:
      'Cloture motions are filed to end filibusters. A sharp rise in cloture motions indicates more filibusters, a hallmark of intensified partisan polarization in the modern Senate.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    question: 'Which of the following is a constitutionally enumerated power of the House of Representatives alone?',
    options: [
      'Ratifying treaties.',
      'Confirming federal judges.',
      'Originating revenue bills.',
      'Trying impeachments.',
    ],
    correctAnswer: 2,
    explanation:
      'Article I, Section 7 reserves origination of revenue bills to the House. The Senate ratifies treaties, confirms judges, and tries impeachments.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      '"Whenever the Vice President and a majority of either the principal officers of the executive departments ... transmit to the President pro tempore of the Senate and the Speaker of the House their written declaration that the President is unable to discharge the powers and duties of his office, such powers and duties shall be discharged by the Vice President as Acting President."\n— Twenty-Fifth Amendment, Section 4',
    question: 'This section of the Twenty-Fifth Amendment most directly addresses:',
    options: [
      'Presidential succession after impeachment.',
      'Removal of an incapacitated president.',
      'Filling a vacancy in the vice presidency.',
      'Regulation of the line of succession after the vice president.',
    ],
    correctAnswer: 1,
    explanation:
      'Section 4 of the 25th Amendment provides for involuntary transfer of presidential powers when the president is incapacitated.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    question:
      'Which of the following best describes the constitutional "advice and consent" role of the Senate?',
    options: [
      'The Senate must approve every executive order issued by the president.',
      'The Senate confirms presidential nominations and ratifies treaties.',
      'The Senate can veto Supreme Court decisions by a two-thirds vote.',
      'The Senate certifies the results of presidential elections.',
    ],
    correctAnswer: 1,
    explanation:
      'Article II requires Senate advice and consent for nominations (majority vote) and treaty ratification (two-thirds vote).',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      'Scenario: A majority of the House and Senate pass a bill the president opposes. The president vetoes it. Congress then passes the bill again.',
    question: 'For Congress to enact this bill into law over the president\'s veto, it must:',
    options: [
      'Pass it again by simple majority in both chambers.',
      'Pass it again by two-thirds vote in both chambers.',
      'Refer it to a national referendum.',
      'Petition the Supreme Court to override the veto.',
    ],
    correctAnswer: 1,
    explanation:
      'A presidential veto can be overridden only by a two-thirds vote in both the House and the Senate.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    question: 'Discharge petitions in the House of Representatives are used primarily to:',
    options: [
      'Force a bill out of committee onto the House floor without committee approval.',
      'Censure a member who has violated House rules.',
      'End debate on the floor when a filibuster is threatened.',
      'Override a presidential pocket veto.',
    ],
    correctAnswer: 0,
    explanation:
      'A discharge petition signed by an absolute majority (218 members) bypasses a committee chair who refuses to release a bill.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      '"Marbury v. Madison (1803): It is emphatically the province and duty of the judicial department to say what the law is."\n— Chief Justice John Marshall',
    question: 'This passage establishes which power of the federal courts?',
    options: [
      'Judicial review of legislative and executive actions.',
      'Mandatory appellate jurisdiction over state courts.',
      'The exclusive power to interpret state constitutions.',
      'Authority to issue executive orders.',
    ],
    correctAnswer: 0,
    explanation:
      'Marbury established the doctrine of judicial review: the power of federal courts to declare laws and executive actions unconstitutional.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    question:
      'Which of the following best describes the difference between judicial restraint and judicial activism?',
    options: [
      'Restraint emphasizes deference to elected branches; activism is more willing to strike down laws or expand rights.',
      'Restraint applies only to liberal justices; activism applies only to conservative justices.',
      'Restraint occurs only at the trial level; activism occurs only at the appellate level.',
      'Restraint requires a unanimous court; activism requires only a plurality.',
    ],
    correctAnswer: 0,
    explanation:
      'Judicial restraint counsels deference to the political branches, while judicial activism is more willing to overturn laws or recognize new rights — though both can be practiced by judges of any ideology.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      'Bar chart (described): Percentage of presidential nominations to the U.S. Courts of Appeals confirmed within 200 days of nomination.\n  1989: 90%\n  1999: 65%\n  2009: 50%\n  2019: 38%',
    question: 'The trend shown in the chart most likely reflects which development?',
    options: [
      'A constitutional amendment requiring faster confirmations.',
      'Increasing partisanship and Senate use of holds and filibusters on judicial nominations.',
      'A decrease in the total number of nominees submitted by the president.',
      'A decline in the workload of the federal courts of appeals.',
    ],
    correctAnswer: 1,
    explanation:
      'Slower confirmations track rising partisanship and the Senate minority\'s greater willingness to use holds, filibusters, and slow walks on appellate nominations.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    question:
      'Which of the following best describes the principle of stare decisis?',
    options: [
      'Courts must decide cases in accordance with the original intent of the framers.',
      'Courts should follow precedent when deciding similar cases unless a strong reason exists to overturn it.',
      'Lower courts may freely ignore Supreme Court decisions in their region.',
      'Federal courts must defer to executive interpretations of statutes.',
    ],
    correctAnswer: 1,
    explanation:
      'Stare decisis ("let the decision stand") is the doctrine that courts should generally follow established precedent for predictability and stability.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      'Scenario: A new federal regulation issued by the Environmental Protection Agency limits methane emissions from oil and gas wells. Industry groups argue the regulation exceeds the agency\'s statutory authority.',
    question: 'The judicial doctrine that historically required courts to defer to a federal agency\'s reasonable interpretation of an ambiguous statute it administers is known as:',
    options: [
      'The political question doctrine.',
      'Chevron deference.',
      'The Lemon test.',
      'Strict scrutiny.',
    ],
    correctAnswer: 1,
    explanation:
      'Chevron v. NRDC (1984) established the long-standing doctrine of Chevron deference (since significantly limited or overturned by Loper Bright in 2024, but still part of the AP curriculum framework).',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    question:
      'Which of the following is the most accurate description of an "iron triangle" in American politics?',
    options: [
      'A formal alliance among the three branches of government.',
      'A stable policy alliance among a congressional committee, an executive agency, and an interest group.',
      'A military coalition among the U.S., Canada, and Mexico.',
      'A grouping of three Supreme Court justices who consistently vote together.',
    ],
    correctAnswer: 1,
    explanation:
      'An iron triangle describes a long-standing mutually beneficial relationship among a congressional subcommittee, a regulatory or spending agency, and an interest-group constituency.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      '"The President ... shall have Power to grant Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment."\n— Article II, Section 2',
    question: 'The constitutional pardon power of the president:',
    options: [
      'Can be overridden by a two-thirds vote of Congress.',
      'Applies only to federal crimes, not state crimes, and not to impeachment.',
      'Requires the consent of the Supreme Court.',
      'Applies to both federal and state criminal convictions.',
    ],
    correctAnswer: 1,
    explanation:
      'Presidential pardons reach only federal offenses (not state crimes) and explicitly exclude cases of impeachment.',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    question:
      'Which of the following is the most significant source of the modern president\'s ability to act unilaterally on policy?',
    options: [
      'The line-item veto.',
      'Executive orders and signing statements.',
      'The pocket veto.',
      'Senate ratification of treaties.',
    ],
    correctAnswer: 1,
    explanation:
      'Executive orders and signing statements are the primary tools of unilateral presidential policymaking. The line-item veto was struck down (Clinton v. New York, 1998).',
  },
  {
    type: 'mcq',
    topic: 'unit-2-branches',
    stimulus:
      'Scenario: A president nominates a candidate for the U.S. Court of Appeals. The home-state senator from the president\'s opposing party refuses to return a "blue slip" indicating support, blocking the nomination from advancing in the Judiciary Committee.',
    question: 'This scenario best illustrates which feature of the federal judicial confirmation process?',
    options: [
      'A constitutional check explicitly listed in Article III.',
      'A Senate norm/tradition that allows individual senators to influence judicial nominations.',
      'A formal veto power exercised by the chief justice.',
      'A holdover from the Articles of Confederation.',
    ],
    correctAnswer: 1,
    explanation:
      'The "blue slip" is an informal Senate Judiciary Committee tradition — not a constitutional rule — that historically allowed home-state senators to slow or block judicial nominees.',
  },

  /* ============================ UNIT 3 — CIVIL LIBERTIES & RIGHTS (12) ============================ */
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      '"Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances."\n— First Amendment',
    question: 'Which two clauses of the First Amendment together govern the relationship between government and religion?',
    options: [
      'The Free Speech Clause and the Free Press Clause.',
      'The Establishment Clause and the Free Exercise Clause.',
      'The Petition Clause and the Assembly Clause.',
      'The Due Process Clause and the Equal Protection Clause.',
    ],
    correctAnswer: 1,
    explanation:
      'The Establishment Clause prohibits government endorsement of religion; the Free Exercise Clause protects individual religious practice. Due Process and Equal Protection are in the 14th Amendment.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      '"If there is any fixed star in our constitutional constellation, it is that no official, high or petty, can prescribe what shall be orthodox in politics, nationalism, religion, or other matters of opinion."\n— West Virginia State Board of Education v. Barnette (1943)',
    question:
      'The reasoning in this passage was later applied in which required Supreme Court case to protect symbolic speech in public schools?',
    options: [
      'Brown v. Board of Education (1954).',
      'Tinker v. Des Moines Independent Community School District (1969).',
      'Engel v. Vitale (1962).',
      'Schenck v. United States (1919).',
    ],
    correctAnswer: 1,
    explanation:
      'Tinker held that students wearing black armbands to protest the Vietnam War were engaged in protected symbolic speech, citing the principle that students do not "shed their constitutional rights at the schoolhouse gate."',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    question:
      'In Schenck v. United States (1919), the Supreme Court established which test for limiting speech?',
    options: [
      'The "clear and present danger" test.',
      'The "Lemon test."',
      'The "Miller test."',
      'The "rational basis" test.',
    ],
    correctAnswer: 0,
    explanation:
      'Schenck created the clear-and-present-danger test (later modified by Brandenburg v. Ohio\'s "imminent lawless action" standard).',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      '"In a unanimous opinion, the Court held that segregation of children in public schools solely on the basis of race deprives minority children of equal educational opportunities, even though the physical facilities and other tangible factors may be equal."\n— Paraphrase of Brown v. Board of Education (1954)',
    question:
      'Brown v. Board of Education overturned which earlier Supreme Court precedent?',
    options: [
      'Plessy v. Ferguson (1896), which had upheld "separate but equal."',
      'Marbury v. Madison (1803), which had established judicial review.',
      'Dred Scott v. Sandford (1857), which had denied citizenship to Black Americans.',
      'Korematsu v. United States (1944), which had upheld Japanese internment.',
    ],
    correctAnswer: 0,
    explanation:
      'Brown directly overturned the "separate but equal" doctrine of Plessy v. Ferguson as it applied to public education.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    question:
      'Selective incorporation refers to the doctrine by which:',
    options: [
      'Congress may incorporate private corporations under federal law.',
      'The Supreme Court applies provisions of the Bill of Rights to the states through the Fourteenth Amendment\'s Due Process Clause on a case-by-case basis.',
      'States may opt in or out of constitutional amendments.',
      'Federal regulations are absorbed into state administrative codes.',
    ],
    correctAnswer: 1,
    explanation:
      'Selective incorporation is the gradual, case-by-case application of Bill of Rights protections to state governments via the 14th Amendment\'s Due Process Clause.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      '"You have the right to remain silent. Anything you say can and will be used against you in a court of law."\n— Familiar formulation following Miranda v. Arizona (1966)',
    question:
      'Miranda v. Arizona protects against which constitutional violation during custodial interrogation?',
    options: [
      'Cruel and unusual punishment under the Eighth Amendment.',
      'Self-incrimination protected by the Fifth Amendment.',
      'Unreasonable searches under the Fourth Amendment.',
      'Establishment of religion under the First Amendment.',
    ],
    correctAnswer: 1,
    explanation:
      'Miranda warnings protect the Fifth Amendment privilege against self-incrimination during custodial police interrogation (and Sixth Amendment right to counsel).',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      '"In all criminal prosecutions, the accused shall enjoy the right ... to have the Assistance of Counsel for his defence."\n— Sixth Amendment',
    question:
      'In Gideon v. Wainwright (1963), the Supreme Court extended this protection by ruling that:',
    options: [
      'States must provide counsel to indigent defendants in felony cases.',
      'States may charge defendants for their court-appointed attorneys.',
      'The right to counsel applies only in federal capital cases.',
      'Defendants in misdemeanor cases must waive counsel in writing.',
    ],
    correctAnswer: 0,
    explanation:
      'Gideon held that the Sixth Amendment right to counsel is a fundamental right incorporated against the states, requiring states to provide attorneys to indigent felony defendants.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      '"It cannot be presumed that any clause in the Constitution is intended to be without effect."\n— Chief Justice John Marshall',
    question:
      'In McDonald v. Chicago (2010), the Supreme Court applied this kind of reasoning to:',
    options: [
      'Incorporate the Second Amendment right to bear arms against state and local governments.',
      'Strike down racial segregation in public universities.',
      'Allow same-sex marriage nationwide.',
      'Grant federal courts the power of judicial review.',
    ],
    correctAnswer: 0,
    explanation:
      'McDonald v. Chicago (2010) incorporated the Second Amendment against the states via the Fourteenth Amendment.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    question:
      'Which of the following best summarizes the holding of Engel v. Vitale (1962)?',
    options: [
      'Public schools may sponsor voluntary, nondenominational prayer.',
      'School-sponsored prayer in public schools violates the Establishment Clause.',
      'Students may not wear religious symbols in public school.',
      'The Pledge of Allegiance, including "under God," is unconstitutional.',
    ],
    correctAnswer: 1,
    explanation:
      'Engel v. Vitale held that even nondenominational, voluntary state-composed prayer in public schools violates the Establishment Clause.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      '"This case involves a Pennsylvania statute that proscribed certain abortion procedures and imposed waiting-period and informed-consent requirements. ... Roe v. Wade is overruled."\n— Paraphrase of Dobbs v. Jackson Women\'s Health Organization (2022)',
    question:
      'After Dobbs (2022), the constitutional authority to regulate or prohibit abortion was returned primarily to:',
    options: [
      'The Supreme Court.',
      'The president, through executive order.',
      'Congress and the state legislatures.',
      'Federal regulatory agencies.',
    ],
    correctAnswer: 2,
    explanation:
      'Dobbs held there is no constitutional right to abortion, returning the issue to "the people and their elected representatives" — Congress and state legislatures.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    question:
      'In New York Times Co. v. United States (1971) — the Pentagon Papers case — the Supreme Court ruled that:',
    options: [
      'The government had met its heavy burden to justify prior restraint of the press.',
      'The government had not met the heavy burden required to justify prior restraint of the press.',
      'Newspapers may publish only stories cleared by the Department of Defense.',
      'Reporters have an absolute privilege to refuse to testify before grand juries.',
    ],
    correctAnswer: 1,
    explanation:
      'The Pentagon Papers case held that the government had not met the heavy burden required to justify prior restraint of the press under the First Amendment.',
  },
  {
    type: 'mcq',
    topic: 'unit-3-civil-liberties-rights',
    stimulus:
      'Scenario: A state law requires public school students to recite a prayer at the beginning of each day. A group of parents challenges the law in federal court.',
    question:
      'A federal court would most likely strike down this law on the basis of which constitutional clause?',
    options: [
      'The Free Exercise Clause of the First Amendment.',
      'The Establishment Clause of the First Amendment.',
      'The Equal Protection Clause of the Fourteenth Amendment.',
      'The Privileges and Immunities Clause of Article IV.',
    ],
    correctAnswer: 1,
    explanation:
      'Government-mandated prayer in public schools violates the Establishment Clause (Engel v. Vitale).',
  },

  /* ============================ UNIT 4 — IDEOLOGIES & BELIEFS (6) ============================ */
  {
    type: 'mcq',
    topic: 'unit-4-ideologies-beliefs',
    question:
      'Which of the following best describes political socialization?',
    options: [
      'The process by which people develop their political values, beliefs, and identities through family, school, peers, and media.',
      'The legal requirement that citizens vote in every federal election.',
      'The redistribution of income through progressive taxation.',
      'The formal training of party officials before nominating conventions.',
    ],
    correctAnswer: 0,
    explanation:
      'Political socialization is the lifelong process — beginning with family — by which individuals develop their political beliefs and identities.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-ideologies-beliefs',
    stimulus:
      'Bar chart (described): Among voters age 18–29, 60% identify with or lean toward the Democratic Party, 32% with or lean Republican, and 8% are independent. Among voters age 65+, 47% lean Republican, 45% lean Democratic, and 8% are independent.',
    question:
      'The pattern in the chart best illustrates which concept in public opinion?',
    options: [
      'The generational gap in party identification.',
      'The gender gap in voting behavior.',
      'The racial gap in candidate evaluations.',
      'The geographic gap in turnout rates.',
    ],
    correctAnswer: 0,
    explanation:
      'A consistent partisan difference between younger and older voters is the textbook generational gap in party identification.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-ideologies-beliefs',
    question:
      'Which of the following best distinguishes a scientific public-opinion poll from a non-scientific straw poll?',
    options: [
      'A scientific poll uses a random or representative sample, weighting, and reports a margin of error.',
      'A scientific poll always surveys the entire eligible population.',
      'A scientific poll is conducted only by the federal government.',
      'A scientific poll asks open-ended questions only.',
    ],
    correctAnswer: 0,
    explanation:
      'Scientific polls rely on random/representative sampling, weighting, and reported margin of error, whereas straw polls (e.g., online opt-in polls) suffer from selection bias.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-ideologies-beliefs',
    stimulus:
      '"Modern American liberalism generally favors a more active role for government in regulating the economy and providing social services, while modern American conservatism generally favors limited government in economic matters and traditional values in social policy."\n— Generalized political-science textbook description',
    question:
      'Which of the following policy positions is most consistent with modern American liberalism, as described above?',
    options: [
      'Cutting income tax rates and reducing federal regulation.',
      'Expanding federal funding for universal pre-K and child care.',
      'Restricting access to abortion at the state level.',
      'Privatizing the Social Security system.',
    ],
    correctAnswer: 1,
    explanation:
      'Expanding federal funding for universal early childhood programs reflects the liberal preference for an active federal role in providing social services.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-ideologies-beliefs',
    question:
      'Which of the following ideologies is most associated with libertarianism in the United States?',
    options: [
      'Strong support for both economic regulation and social regulation.',
      'Strong support for free markets and minimal government intervention in personal lives.',
      'Strong support for redistribution and traditional moral codes.',
      'Strong support for state ownership of industry.',
    ],
    correctAnswer: 1,
    explanation:
      'American libertarianism combines free-market economics with social tolerance and minimal government in private life.',
  },
  {
    type: 'mcq',
    topic: 'unit-4-ideologies-beliefs',
    stimulus:
      'A national poll reports: "55% of respondents support expanded background checks for gun purchases. The poll surveyed 1,250 adults nationwide; margin of error is ±3 percentage points."',
    question: 'Based on this information, which interpretation is most appropriate?',
    options: [
      'Exactly 55% of all American adults support expanded background checks.',
      'Between roughly 52% and 58% of American adults likely support expanded background checks, given sampling error.',
      'The poll cannot be trusted because it surveyed fewer than 10,000 people.',
      'Support is statistically tied with opposition because the question is controversial.',
    ],
    correctAnswer: 1,
    explanation:
      'A ±3-point margin of error means the true value likely falls within roughly 52–58% — well above 50% — so support is substantively higher than opposition.',
  },

  /* ============================ UNIT 5 — POLITICAL PARTICIPATION (7) ============================ */
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    stimulus:
      'Line graph (described): Voter turnout in U.S. presidential elections, 1996–2020.\n  1996: 51.7%\n  2000: 54.2%\n  2004: 60.1%\n  2008: 61.6%\n  2012: 58.6%\n  2016: 60.1%\n  2020: 66.8%',
    question: 'The trend shown in the graph most directly contradicts which common claim about U.S. elections?',
    options: [
      'That turnout has declined sharply over the past three decades.',
      'That turnout in midterms is lower than in presidential years.',
      'That voter ID laws have eliminated all turnout disparities.',
      'That presidential elections occur every four years.',
    ],
    correctAnswer: 0,
    explanation:
      'The data show that presidential-election turnout has generally trended upward since 1996 and reached a modern high in 2020, contradicting the claim that turnout is in steep decline.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    question:
      'Which of the following constitutional amendments expanded the right to vote by lowering the voting age to 18?',
    options: [
      'The Fifteenth Amendment.',
      'The Nineteenth Amendment.',
      'The Twenty-Fourth Amendment.',
      'The Twenty-Sixth Amendment.',
    ],
    correctAnswer: 3,
    explanation:
      'The 26th Amendment (1971) lowered the voting age to 18. The 15th, 19th, and 24th expanded suffrage on race, sex, and poll-tax grounds respectively.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    stimulus:
      '"The Court holds that the First Amendment prohibits the government from restricting independent political expenditures by corporations, associations, or labor unions."\n— Paraphrase of Citizens United v. Federal Election Commission (2010)',
    question: 'Citizens United v. FEC most directly contributed to the rise of:',
    options: [
      'Mandatory public financing of all federal campaigns.',
      'Super PACs, which can raise and spend unlimited sums on independent expenditures.',
      'A federal cap of $1,000 on individual campaign contributions.',
      'A constitutional amendment banning corporate political spending.',
    ],
    correctAnswer: 1,
    explanation:
      'Citizens United paved the way for Super PACs, which can raise and spend unlimited money on independent political expenditures so long as they do not coordinate with candidates.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    question:
      'Which of the following best describes the role of "linkage institutions" in American democracy?',
    options: [
      'They bind the executive and legislative branches together.',
      'They connect citizens to government and include parties, interest groups, the media, and elections.',
      'They are formal subdivisions of the federal bureaucracy.',
      'They are committees within the Senate that link to House counterparts.',
    ],
    correctAnswer: 1,
    explanation:
      'Linkage institutions — political parties, interest groups, elections, and the media — connect citizens\' preferences to government policymaking.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    stimulus:
      'Scenario: A nonprofit organization runs a national television campaign opposing a federal carbon tax. The organization does not coordinate with any candidate or political party.',
    question: 'The organization\'s activities are most accurately described as:',
    options: [
      'A direct campaign contribution subject to federal contribution limits.',
      'Issue advocacy, generally protected as independent political speech.',
      'A violation of the Federal Election Campaign Act.',
      'A formal endorsement of a political party.',
    ],
    correctAnswer: 1,
    explanation:
      'Independent issue advocacy that does not coordinate with a candidate is protected political speech and is not subject to candidate contribution limits.',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    question:
      'In the Electoral College, the candidate who wins the most popular votes nationwide does not always win the presidency because:',
    options: [
      'Electors are required by the Constitution to vote against the popular vote winner.',
      'Most states allocate all of their electoral votes to the winner of that state\'s popular vote, so a candidate can win the national popular vote yet lose enough decisive states.',
      'The Senate selects the president whenever the popular vote is close.',
      'Voters in U.S. territories cast electoral votes that override state votes.',
    ],
    correctAnswer: 1,
    explanation:
      'Forty-eight states use winner-take-all allocation, so concentrating votes in non-decisive states can produce a popular-vote winner who loses the Electoral College (e.g., 2000, 2016).',
  },
  {
    type: 'mcq',
    topic: 'unit-5-political-participation',
    stimulus:
      'A political-science study finds that voters who consume political news primarily through social media are more likely to encounter content that aligns with their existing beliefs than voters who consume news through traditional broadcast media.',
    question: 'This finding is most consistent with which concept?',
    options: [
      'The "filter bubble" or "echo chamber" effect of algorithmic news feeds.',
      'The agenda-setting power of network news anchors.',
      'The "rally around the flag" effect during foreign-policy crises.',
      'The decline of partisan dealignment.',
    ],
    correctAnswer: 0,
    explanation:
      'Algorithmically curated social-media feeds tend to amplify content reinforcing existing beliefs, producing the well-documented filter-bubble or echo-chamber effect.',
  },
]
