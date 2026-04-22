/**
 * Entrance Quiz — Federalism (AP US Government)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'govfed-ent-1a',
    question: 'Which best contrasts federal, confederal, and unitary systems?',
    options: [
      "A federal system constitutionally divides sovereign authority between national and sub-national governments such that both derive authority from the same constitutional source and both act directly on individual citizens within their respective spheres (United States, Germany, Canada, Australia, India); a confederal system locates all sovereign authority in the sub-national units, with the central government existing only by sub-national delegation and having no direct relationship with individual citizens (Articles of Confederation 1781-89, partial EU); a unitary system locates all sovereign authority in the national government, with sub-national units existing only by national delegation and capable of being abolished by national legislative action (France, UK, Japan, China)",
      'Federal, confederal, and unitary systems are entirely identical with no meaningful differences of any kind during the entire period from 1781 onward in any region of the world during the period in any region of the world',
      'Only the United States has a federal system with no Germany, no Canada, no Australia, no India, no Brazil, and no Mexico of any kind during the entire period from 1789 onward in any region of the world during the period in any region of the world',
      "There are no federal, no confederal, and no unitary systems of any kind during the entire period from 1781 onward in any region of the world with no Articles of Confederation, no France, no United Kingdom, no Germany, no Canada, no Australia, and no India of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Three systems: Federal = constitutional division of sovereignty + both act directly on citizens (US, Germany, Canada, Australia, India). Confederal = sovereignty in sub-national units; central exists by their delegation; no direct citizen relation (Articles 1781-89, partial EU). Unitary = sovereignty in national; sub-national exists by national delegation, can be abolished (France, UK, Japan, China).',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'govfed-ent-1b',
    question: 'Which best describes the constitutional foundations of U.S. federalism?',
    options: [
      "U.S. federalism is constitutionally grounded in multiple provisions: Article I, § 8 enumerates the powers of Congress; Article I, § 8, clause 18 (Necessary and Proper Clause) is the basis for IMPLIED federal powers; Article I, § 10 prohibits specific powers to states; Article IV regulates interstate relations; Article VI, clause 2 (Supremacy Clause) makes federal law supreme over conflicting state law; the 10th Amendment (1791) RESERVES to states all powers not delegated to the federal government; the 14th Amendment (1868) applies most of the Bill of Rights to states through selective incorporation under Due Process",
      "U.S. federalism has no constitutional foundations of any kind with no Article I § 8, no Necessary and Proper Clause, no Article IV, no Supremacy Clause, no 10th Amendment, and no 14th Amendment of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "U.S. federalism is grounded only in the Necessary and Proper Clause with no Article I § 8, no Article I § 10, no Article IV, no Supremacy Clause, no 10th Amendment, and no 14th Amendment of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "There are no constitutional foundations for U.S. federalism of any kind during the entire period from 1789 onward in any region of the United States with no Article I, no Article IV, no Article VI, no 10th Amendment, no 14th Amendment, no enumerated powers, and no implied powers of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'U.S. federalism foundations: Art I § 8 (enumerated); Art I § 8 cl 18 (Necessary and Proper → implied powers); Art I § 10 (prohibitions on states); Art IV (interstate relations); Art VI cl 2 (Supremacy); 10th Amendment 1791 (reserved powers); 14th Amendment 1868 (selective incorporation + Equal Protection).',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'govfed-ent-2a',
    question: 'Which best contrasts categorical grants and block grants?',
    options: [
      "Categorical grants distribute federal funds for a SPECIFIC, narrowly-defined purpose with extensive federal regulations on how the money may be spent (high federal control, low state autonomy) — examples include Title I education funding for low-income schools, Head Start, specific Medicaid components, and highway construction with federal specifications; block grants distribute federal funds for a BROAD purpose with significant state discretion over specific allocation (medium federal control, medium-high state autonomy) — examples include Community Development Block Grants (CDBG), Temporary Assistance for Needy Families (TANF, since the 1996 welfare reform), and Workforce Investment Act funds; the trend over the past several decades has shifted partially from categorical to block grants as part of devolution",
      "Categorical grants and block grants are entirely identical with no meaningful differences of any kind during the entire period from 1960 onward in any region of the United States during the period in any region of the country",
      "There are no categorical grants and no block grants of any kind during the entire period from 1960 onward in any region of the United States with no Title I, no Head Start, no Medicaid, no CDBG, no TANF, and no Workforce Investment Act of any kind during the entire period in any region",
      "Categorical grants give the states more autonomy than block grants because they have no specific purpose restrictions of any kind during the entire period from 1960 onward in any region of the United States with no Title I, no Head Start, and no Medicaid restrictions of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Categorical vs block grants: CATEGORICAL = specific purpose + extensive federal regulations (high federal control / low state autonomy) — Title I, Head Start, Medicaid components, federal highway construction. BLOCK = broad purpose + state discretion (medium control / medium-high autonomy) — CDBG, TANF (since 1996), WIA. Trend: partial shift to block as devolution.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'govfed-ent-2b',
    question: "Which best describes the anti-commandeering doctrine?",
    options: [
      "The Supreme Court has held that the federal government may NOT directly conscript state legislatures or state executive officers to enforce federal regulatory programs: *New York v. United States* (1992) struck down the Low-Level Radioactive Waste Policy Amendments Act\'s 'take title' provision (commandeered state legislative process); *Printz v. United States* (1997) struck down the Brady Handgun Violence Prevention Act\'s requirement that state law enforcement perform background checks (commandeered state executive officers); *Murphy v. NCAA* (2018) struck down the Professional and Amateur Sports Protection Act of 1992 prohibiting states from authorizing sports gambling (commandeered state legislatures); the doctrine is grounded in the 10th Amendment and the structural principle of dual sovereignty",
      "The federal government may directly conscript state legislatures and state executive officers to enforce federal programs under any circumstance with no New York v. United States, no Printz v. United States, and no Murphy v. NCAA of any kind during the entire period in any region of the United States during the period",
      "There is no anti-commandeering doctrine of any kind during the entire period from 1992 onward in any region of the United States with no New York v. United States, no Printz v. United States, no Murphy v. NCAA, no 10th Amendment, and no dual sovereignty of any kind during the entire period in any region",
      "The anti-commandeering doctrine prohibits all federal regulation of any kind under any circumstance with no commerce-clause authority, no Necessary and Proper Clause, and no Supremacy Clause of any kind during the entire period in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Anti-commandeering: federal government may NOT conscript state legislatures or executives to enforce federal programs. New York v. United States (1992, take-title radioactive waste). Printz v. United States (1997, Brady Act background checks). Murphy v. NCAA (2018, sports-gambling ban). Grounded in 10th Amendment + dual sovereignty.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'govfed-ent-3a',
    question: "Which best contrasts dual federalism and cooperative federalism?",
    options: [
      "Dual federalism (1789-1937, 'layer cake') treats federal and state governments as operating in distinct, mostly non-overlapping spheres — federal sphere = foreign policy, war, interstate commerce (narrowly construed), tariffs; state sphere = police power, criminal law, family law, education, intrastate commerce; doctrine is strict separation with the 10th Amendment as substantive limit on federal authority (e.g., *Hammer v. Dagenhart* 1918 struck federal child-labor regulation, *Schechter Poultry* 1935 struck NIRA codes); cooperative federalism (1937-1969, Morton Grodzins\' 'marble cake') treats federal and state authority as INTERMINGLED — federal money plus federal regulations plus state implementation — driven by the Great Depression, the New Deal, the Great Society, and an expanded Commerce Clause (*Wickard v. Filburn* 1942 — wheat for personal consumption affects interstate commerce)",
      "Dual federalism and cooperative federalism are entirely identical with no meaningful differences of any kind during the entire period from 1789 onward in any region of the United States during the period in any region of the country",
      "There are no eras of federalism of any kind during the entire period from 1789 onward in any region of the United States with no dual federalism, no cooperative federalism, no new federalism, no Wickard v. Filburn, and no Hammer v. Dagenhart of any kind during the entire period in any region",
      "Dual federalism applies to the period 1937-1969 and cooperative federalism applies to the period 1789-1937 with no relationship to layer cake, marble cake, Hammer v. Dagenhart, or Wickard v. Filburn of any kind during the entire period in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Dual vs cooperative federalism: DUAL (1789-1937, "layer cake") = distinct non-overlapping spheres + 10th Amendment substantive limit (Hammer v. Dagenhart 1918 struck child-labor, Schechter Poultry 1935 struck NIRA). COOPERATIVE (1937-1969, Grodzins\' "marble cake") = intermingled federal $ + federal regulations + state implementation; driven by Depression/New Deal/Great Society + expanded Commerce Clause (Wickard v. Filburn 1942).',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'govfed-ent-3b',
    question: "Which best describes the modern federalism revival (1995-present)?",
    options: [
      "The Rehnquist and Roberts Courts have imposed renewed judicial limits on federal power, reversing the post-1937 trend of monotonic Commerce Clause and Spending Clause expansion: *United States v. Lopez* (1995, first Commerce Clause limit since 1937); *Printz v. United States* (1997, Brady Act state background-check requirement violated anti-commandeering); *United States v. Morrison* (2000, Violence Against Women Act civil-suit provision exceeded commerce power); *NFIB v. Sebelius* (2012, ACA Medicaid-expansion mandatory threat to entire Medicaid funding was unconstitutionally coercive); *Shelby County v. Holder* (2013, Voting Rights Act § 4 preclearance formula unconstitutional); *Murphy v. NCAA* (2018, Professional and Amateur Sports Protection Act commandeered state legislatures)",
      "There has been no modern federalism revival of any kind during the entire period from 1995 onward in any region of the United States with no Lopez, no Printz, no Morrison, no NFIB v. Sebelius, no Shelby County, and no Murphy v. NCAA of any kind during the entire period in any region",
      "The Rehnquist and Roberts Courts have monotonically expanded federal power with no Commerce Clause limits, no anti-commandeering doctrine, no Spending Clause limits, and no VRA limits of any kind during the entire period from 1995 onward in any region of the United States during the period",
      "The modern federalism revival is purely symbolic with no substantive limits of any kind during the entire period from 1995 onward in any region of the United States with no Lopez, no Printz, no Morrison, no NFIB v. Sebelius, no Shelby County, and no Murphy v. NCAA of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Modern federalism revival (1995-present): Rehnquist + Roberts Courts. Lopez 1995 (1st Commerce Clause limit since 1937). Printz 1997 (Brady Act anti-commandeering). Morrison 2000 (VAWA civil suit exceeds commerce). NFIB 2012 (ACA Medicaid coercion). Shelby County 2013 (VRA § 4 preclearance unconstitutional). Murphy v. NCAA 2018 (PASPA commandeered legislatures).',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'govfed-ent-4a',
    question: "Which best describes the relationship between federalism and civil rights in U.S. history?",
    options: [
      "From 1791 to 1868, the Bill of Rights restricted only federal action (*Barron v. Baltimore* 1833) and states were free to violate individual rights — including slavery and post-Civil War Black Codes; the 14th Amendment (1868) was a constitutional revolution subjecting states to federal individual-rights guarantees, though largely unenforced from *Slaughter-House Cases* 1873 to *Plessy* 1896 to *Brown* 1954; from 1925 (selective incorporation begins with *Gitlow*) through 1965 (CRA + VRA), federal power was deployed to overcome state resistance to civil rights — federalism BOUNDED by individual-rights protections enforced by federal courts; the modern federalism revival has had MIXED effects (*Shelby County* 2013 weakened VRA preclearance; anti-commandeering protected sanctuary cities)",
      "The relationship between federalism and civil rights has been static and unchanging with no Bill of Rights restriction, no 14th Amendment, no Brown v. Board, no Civil Rights Act, no Voting Rights Act, and no Shelby County of any kind during the entire period in any region of the United States during the period",
      "The 14th Amendment had no relationship to federalism of any kind during the entire period from 1868 onward in any region of the United States with no selective incorporation, no Brown v. Board, no Civil Rights Act, and no Voting Rights Act of any kind during the entire period in any region",
      "There is no relationship between federalism and civil rights of any kind during the entire period from 1791 onward in any region of the United States with no Bill of Rights, no 14th Amendment, no Brown v. Board, no Civil Rights Act, and no Voting Rights Act of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Federalism × civil rights shifts: 1791-1868: Bill of Rights only federal (Barron 1833) → states free to violate (slavery, Black Codes). 1868: 14th Amendment constitutional revolution but largely unenforced (Slaughter-House 1873 → Plessy 1896 → Brown 1954). 1925-1965: selective incorporation begins (Gitlow) + CRA + VRA → federal power overcomes state resistance. Modern revival = MIXED (Shelby County 2013 weakened VRA preclearance; anti-commandeering protected sanctuary cities).',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'govfed-ent-4b',
    question: "Which best describes how horizontal federalism (state-to-state) is regulated by the Constitution?",
    options: [
      "Article IV regulates state-to-state relations through multiple provisions: § 1 (Full Faith and Credit) requires states to recognize the public acts, records, and judicial proceedings of other states; § 2 cl. 1 (Privileges and Immunities) generally prohibits state discrimination against out-of-state citizens; § 2 cl. 2 (Extradition) requires return of fugitives from justice; Article I § 10 cl. 3 (Compact Clause) requires congressional consent for interstate compacts; the dormant Commerce Clause implicitly prohibits state burdens on interstate commerce — together creating a single national economic and legal market while preserving state sovereignty in non-discriminatory respects",
      "There are no Article IV provisions of any kind that regulate state-to-state relations during the entire period from 1789 onward in any region of the United States with no Full Faith and Credit, no Privileges and Immunities, no Extradition, no Compact Clause, and no dormant Commerce Clause of any kind during the entire period in any region",
      "States may freely discriminate against out-of-state citizens under any circumstance with no Privileges and Immunities Clause, no Full Faith and Credit Clause, and no dormant Commerce Clause of any kind during the entire period from 1789 onward in any region of the United States during the period",
      "There is no horizontal federalism of any kind during the entire period from 1789 onward in any region of the United States with no Article IV, no Full Faith and Credit, no Privileges and Immunities, no Extradition, no Compact Clause, and no dormant Commerce Clause of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Article IV horizontal federalism: § 1 Full Faith and Credit (recognize other states\' public acts/records/judicial proceedings); § 2 cl 1 Privileges and Immunities (no discrim vs out-of-state citizens); § 2 cl 2 Extradition. Art I § 10 cl 3 Compact Clause (interstate compacts need Congress consent). Dormant Commerce Clause (implicit limit on state burdens) → single national market + state sovereignty in non-discriminatory respects.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'govfed-ent-5a',
    question: "Which best describes the federalism crisis of 1781-1789 under the Articles of Confederation?",
    options: [
      "The Articles of Confederation (1781-89) created a confederation where the national government had NO power to tax (relied on state requisitions, mostly unpaid), NO power to regulate commerce (states imposed tariffs on each other), NO independent executive, NO national judiciary, and required unanimous consent to amend; the structural weakness produced multiple crises: state interstate-trade wars, federal inability to repay Revolutionary War debt, federal inability to coordinate military response to Shays\' Rebellion (1786-87), and federal inability to negotiate effectively with foreign powers; the Annapolis Convention (1786) led to the Philadelphia Convention (May-September 1787) which produced the federal Constitution",
      "The Articles of Confederation worked perfectly with no taxation problems, no commerce problems, no executive problems, no judiciary problems, no Shays\' Rebellion, no Annapolis Convention, and no Philadelphia Convention of any kind during the entire period in any region of the United States during the period",
      "There were no Articles of Confederation of any kind during the entire period from 1781 through 1789 in any region of the United States with no national government, no state requisitions, no Shays\' Rebellion, no Annapolis Convention, and no Philadelphia Convention of any kind during the entire period in any region",
      "The Articles of Confederation were entirely identical to the federal Constitution with no meaningful differences of any kind during the entire period from 1781 through 1789 in any region of the United States during the period in any region of the country"
    ],
    correctIndex: 0,
    explanation: 'Articles of Confederation (1781-89) crisis: NO power to tax (state requisitions unpaid), NO power to regulate commerce (state interstate tariffs), NO executive, NO judiciary, unanimous consent to amend. Multiple crises: trade wars + Revolutionary War debt + Shays\' Rebellion 1786-87 + foreign-policy ineffectiveness. Annapolis Convention 1786 → Philadelphia Convention May-Sept 1787 → federal Constitution.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'govfed-ent-5b',
    question: "Which best describes the long-term federalism trajectory from 1789 to 2022?",
    options: [
      "From 1789 to the Civil War, federalism was deeply contested over nullification (1798-99 and 1828-33) and slavery (Dred Scott 1857), resolved by force in 1861-65; from 1865 to 1937, the 14th Amendment created federalism BOUNDED by federal civil-rights guarantees but Reconstruction\'s collapse left state authority dominant during Jim Crow; from 1937 to present, the Commerce Clause and Spending Clause expanded dramatically (cooperative federalism + Great Society), with a partial reversal in the modern federalism revival (1995-present: Lopez, Printz, NFIB v. Sebelius, Shelby County, Murphy v. NCAA) and the post-2022 Dobbs return of abortion to state authority — net trajectory: significant federal expansion 1865-1937, dramatic federal expansion 1937-1995, partial state-authority revival 1995-present",
      "Federalism has been static and unchanging from 1789 to 2022 with no nullification, no Civil War, no 14th Amendment, no New Deal, no Civil Rights Act, no Lopez, no NFIB v. Sebelius, no Shelby County, no Murphy v. NCAA, and no Dobbs of any kind during the entire period in any region of the United States during the period",
      "There have been no major federalism disputes of any kind during the entire period from 1789 through 2022 in any region of the United States with no nullification, no Civil War, no Reconstruction, no New Deal, no civil-rights revolution, and no modern federalism revival of any kind during the entire period in any region",
      "The long-term trajectory of federalism has been monotonic state-authority expansion with no federal expansion of any kind during the entire period from 1789 through 2022 in any region of the United States with no Civil War, no 14th Amendment, no New Deal, no Civil Rights Act, and no commerce-clause expansion of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Federalism trajectory 1789-2022: 1789-1865 contested (nullification 1798-99 + 1828-33; Dred Scott 1857 → Civil War 1861-65). 1865-1937: 14th Amendment bounds states by federal civil-rights guarantees BUT Reconstruction\'s collapse → Jim Crow state-authority dominance. 1937-present: Commerce + Spending dramatic expansion + modern revival 1995-present (Lopez/Printz/NFIB/Shelby/Murphy) + Dobbs 2022.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'govfed-ent-6a',
    question: "AP scenario: A federal statute requires state DMVs to share driver-license data with the federal government and to verify federal immigration status before issuing licenses. State officials refuse, citing the 10th Amendment. Which Supreme Court precedent most directly controls?",
    options: [
      "*Printz v. United States* (1997) most directly controls: the Court struck down the Brady Handgun Violence Prevention Act\'s requirement that state and local law enforcement perform background checks on prospective handgun purchasers, holding that the federal government may not commandeer state executive officers to administer federal regulatory programs; the Court reasoned that the federal government may neither issue directives requiring the States to address particular problems, nor command the States\' officers to administer or enforce a federal regulatory program — the Real ID-style scenario is a paradigm case of forbidden executive commandeering, though the federal government remains free to (a) condition federal funds on state participation (*South Dakota v. Dole* 1987) or (b) regulate the private conduct directly through federal officers",
      "There is no Supreme Court precedent of any kind that addresses federal commandeering of state DMVs during the entire period from 1789 onward in any region of the United States with no Printz, no New York v. United States, no Murphy v. NCAA, and no 10th Amendment of any kind during the entire period in any region",
      "*McCulloch v. Maryland* (1819) most directly controls because the federal government has unlimited authority over states with no Printz, no New York v. United States, no Murphy v. NCAA, no anti-commandeering doctrine, and no 10th Amendment of any kind during the entire period in any region of the United States during the period",
      "*Marbury v. Madison* (1803) most directly controls because judicial review is the entire basis for resolving federalism disputes with no Printz, no New York v. United States, and no anti-commandeering doctrine of any kind during the entire period in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Printz v. United States (1997) controls: struck Brady Act state background-check requirement → federal government may NOT commandeer state executives. DMV/immigration scenario = paradigm forbidden executive commandeering. Federal alternatives: (a) condition federal funds (Dole 1987) OR (b) regulate private conduct directly through federal officers.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'govfed-ent-6b',
    question: "AP scenario: Congress enacts a statute making it a federal crime to possess any firearm within 1,000 feet of a public school, citing the Commerce Clause. Which Supreme Court precedent most directly controls?",
    options: [
      "*United States v. Lopez* (1995) directly controls because it struck down the Gun-Free School Zones Act of 1990 — virtually IDENTICAL statutory subject matter — as exceeding Congress\'s Commerce Clause authority; the Court (Rehnquist 5-4) held that gun possession in a school zone was not 'commerce' (not economic activity), did not 'substantially affect' interstate commerce in any direct way, and was within the traditional state police-power domain over crime; Lopez was the FIRST Commerce Clause limit on Congress since 1937 and signaled the Rehnquist Court\'s federalism revival; Congress could constitutionally regulate gun possession in school zones via the Spending Clause (conditioning federal education funds on state laws) or by tying the prohibition to firearms that have moved in interstate commerce",
      "There is no Supreme Court precedent of any kind that addresses federal regulation of guns in school zones during the entire period from 1789 onward in any region of the United States with no Lopez, no Commerce Clause, and no Gun-Free School Zones Act of any kind during the entire period in any region",
      "*McCulloch v. Maryland* (1819) directly controls because the federal government has unlimited Commerce Clause authority of any kind under any circumstance with no Lopez, no Morrison, no NFIB v. Sebelius, and no Commerce Clause limits of any kind during the entire period in any region of the United States during the period",
      "*Wickard v. Filburn* (1942) directly controls because every activity has substantial effect on interstate commerce of any kind under any circumstance with no Lopez, no Morrison, no Commerce Clause limits, and no federalism revival of any kind during the entire period in any region of the United States during the period"
    ],
    correctIndex: 0,
    explanation: 'Lopez (1995) directly controls: Gun-Free School Zones Act of 1990 = virtually identical statute. Rehnquist 5-4: gun possession in school zone NOT "commerce" (not economic), no substantial effect on interstate commerce, within state police-power domain. First Commerce Clause limit since 1937. Constitutional alternatives: Spending Clause OR tie to firearms moved in interstate commerce.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'govfed-ent-7a',
    question: "Which best contrasts the AP Gov required federalism cases *McCulloch v. Maryland* (1819) and *United States v. Lopez* (1995)?",
    options: [
      "*McCulloch v. Maryland* (1819, Marshall) is the foundational pro-federal-authority federalism decision: it held that the Necessary and Proper Clause authorized Congress to charter the Second Bank of the United States as a constitutional means to its enumerated powers ('all means which are appropriate, which are plainly adapted'), and that the Supremacy Clause prevented Maryland from taxing the federal instrumentality ('the power to tax is the power to destroy'); *United States v. Lopez* (1995, Rehnquist 5-4) is the modern federalism revival\'s anchor decision: it struck down the Gun-Free School Zones Act of 1990 as exceeding Congress\'s Commerce Clause authority — the FIRST Commerce Clause limit on Congress since 1937; together McCulloch and Lopez frame the long arc of federal authority — expansion (1819-1995) and partial limit (1995-present)",
      "McCulloch and Lopez had no relationship of any kind with no Necessary and Proper Clause, no Supremacy Clause, no Commerce Clause, and no federalism revival of any kind during the entire period in any region of the United States during the period in any region of the country",
      "There is no McCulloch v. Maryland and no United States v. Lopez of any kind during the entire period from 1819 through 1995 in any region of the United States with no Necessary and Proper Clause, no Supremacy Clause, no Commerce Clause, and no Gun-Free School Zones Act of any kind during the entire period in any region",
      "McCulloch and Lopez are entirely identical in holding and significance with no meaningful differences of any kind during the entire period from 1819 through 1995 in any region of the United States during the period in any region of the country"
    ],
    correctIndex: 0,
    explanation: 'McCulloch (1819, Marshall) = foundational pro-federal: Necessary and Proper authorized Bank ("all means appropriate, plainly adapted") + Supremacy prevented MD tax ("power to tax is power to destroy"). Lopez (1995, Rehnquist 5-4) = modern revival anchor: struck Gun-Free School Zones Act 1990 — FIRST Commerce Clause limit since 1937. Together frame federal authority arc.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'govfed-ent-7b',
    question: "Which best describes the importance of the 14th Amendment (1868) for modern federalism?",
    options: [
      "The 14th Amendment is the most consequential federalism provision since the original Constitution: § 1 contains the Citizenship Clause (overruling *Dred Scott* 1857), the Due Process Clause (the basis for selective incorporation of most Bill of Rights protections to states throughout the 20th century, fundamentally restructuring state-federal relations), and the Equal Protection Clause (the basis for *Brown v. Board* 1954, *Loving v. Virginia* 1967, *Obergefell v. Hodges* 2015, and *Dobbs v. Jackson Women\'s Health* 2022); § 5 grants Congress enforcement power (basis for Civil Rights Act 1875, Civil Rights Act 1964, Voting Rights Act 1965, Americans with Disabilities Act 1990); together the 14th Amendment subjected state governments to federal individual-rights guarantees that the framers never imposed",
      "The 14th Amendment had no significance for federalism of any kind during the entire period from 1868 onward in any region of the United States with no Citizenship Clause, no Due Process Clause, no Equal Protection Clause, no selective incorporation, and no Civil Rights Act of any kind during the entire period in any region",
      "There was no 14th Amendment of any kind during the entire period from 1865 onward in any region of the United States with no Citizenship Clause, no Due Process Clause, no Equal Protection Clause, no selective incorporation, no Brown v. Board, no Civil Rights Act, no Voting Rights Act, and no Americans with Disabilities Act of any kind during the entire period in any region",
      "The 14th Amendment applied only to former Confederate officials and not to general state governments of any kind during the entire period from 1868 onward in any region of the United States with no Citizenship Clause, no Due Process Clause, no Equal Protection Clause, and no selective incorporation of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: '14th Amendment (1868) most consequential federalism provision since original Constitution: § 1 = Citizenship (overruled Dred Scott 1857) + Due Process (selective incorporation throughout 20thC) + Equal Protection (Brown 1954, Loving 1967, Obergefell 2015, Dobbs 2022). § 5 enforcement (CRA 1875, CRA 1964, VRA 1965, ADA 1990). Subjected states to federal individual-rights guarantees framers never imposed.',
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
