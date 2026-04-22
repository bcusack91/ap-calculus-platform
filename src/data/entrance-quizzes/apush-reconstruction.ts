/**
 * Entrance Quiz — Reconstruction (1865–1877) and Its Aftermath
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'apushrec-ent-1a',
    question: 'Which best describes the constitutional structure produced by Reconstruction (1865–1870)?',
    options: [
      'Three Reconstruction Amendments produced a constitutional revolution: the 13th (1865) abolished slavery (except as criminal punishment); the 14th (1868) established birthright citizenship, due process, and equal protection (with Section 5 empowering Congress to enforce); the 15th (1870) prohibited race-based denial of male suffrage; together they constitutionalized federal authority over the most fundamental rights and made the federal government, rather than the states, the ultimate guarantor of citizenship and equal protection',
      'There were no Reconstruction Amendments of any kind during the entire period from 1865 through 1870 in any region of the United States with no 13th, no 14th, no 15th, no birthright citizenship, and no federal civil-rights authority of any kind during the entire period in any region',
      'The Reconstruction Amendments shifted constitutional authority from the federal government to the states with no birthright citizenship and no federal civil-rights authority of any kind during the entire period from 1865 through 1870 in any region',
      'Only the 13th Amendment was ratified during Reconstruction with no 14th Amendment, no 15th Amendment, and no birthright citizenship, due process, equal protection, or federal voting protection of any kind during the entire period in any region'
    ],
    correctIndex: 0,
    explanation: '3 Reconstruction Amendments: 13th 1865 (abolished slavery) + 14th 1868 (birthright citizenship + DP + EP + Sec 5) + 15th 1870 (race not basis for denying male suffrage). Federal as guarantor.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushrec-ent-1b',
    question: 'Which best describes the contrast between Presidential Reconstruction (Andrew Johnson, 1865–67) and Congressional Reconstruction (1867–77)?',
    options: [
      "Presidential Reconstruction (Johnson) imposed minimal conditions for state readmission (ratify the 13th Amendment, repudiate secession), did not protect Black political rights, and tolerated the Black Codes; Congressional Reconstruction imposed military districts (1867 Reconstruction Acts), required ratification of the 14th Amendment and Black male suffrage, drafted the 15th Amendment, and used the Enforcement Acts (1870–71) and the KKK Act (1871) to prosecute white-supremacist violence",
      'Presidential and Congressional Reconstruction were entirely identical in conditions, civil-rights protection, and federal enforcement with no meaningful differences of any kind during the entire Reconstruction period from 1865 through 1877 in any region',
      'Presidential Reconstruction imposed military districts, the 14th Amendment, and Black male suffrage while Congressional Reconstruction tolerated Black Codes during the entire period from 1865 through 1877 in any region of the United States during the period',
      'Neither Presidential nor Congressional Reconstruction existed during the entire Reconstruction period from 1865 through 1877 in any region of the United States with no Johnson, no Republican Congress, no military districts, and no civil-rights protection of any kind during the period'
    ],
    correctIndex: 0,
    explanation: 'Presidential (Johnson 1865-67): minimal conditions + no Black rights + Black Codes tolerated. Congressional (1867-77): military districts + 14th + Black male suffrage + 15th + Enforcement Acts + KKK Act.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'apushrec-ent-2a',
    question: 'Which best describes the political process by which Congressional Reconstruction took over from Presidential Reconstruction (1865–67)?',
    options: [
      'Andrew Johnson\'s lenient Presidential Reconstruction (December 1865 onward) allowed former Confederate states to pass Black Codes and elect former Confederate officials to Congress; mass anti-Black violence in Memphis (May 1866) and New Orleans (July 1866) discredited Johnson\'s policy; Republicans won a supermajority in the November 1866 midterms; Johnson\'s March 1866 veto of the Civil Rights Act of 1866 was overridden; Republican Congress passed the Reconstruction Acts (March 1867) imposing military districts; Johnson was impeached in February 1868 (acquitted by one vote) for violating the Tenure of Office Act',
      'Congressional Reconstruction never took over from Presidential Reconstruction during the entire period from 1865 through 1867 in any region of the United States with no Black Codes, no Memphis or New Orleans massacres, no Republican supermajority, no Civil Rights Act override, no Reconstruction Acts, and no Johnson impeachment of any kind during the period',
      'Congressional Reconstruction took over peacefully without any Civil Rights Act override, Reconstruction Acts, or Johnson impeachment of any kind during the entire period from 1865 through 1867 in any region of the United States during the period',
      'Presidential Reconstruction took over from Congressional Reconstruction in 1865 with no Republican supermajority, no Civil Rights Act override, and no Reconstruction Acts of any kind during the entire period from 1865 through 1867 in any region of the United States'
    ],
    correctIndex: 0,
    explanation: 'Congressional takeover: Black Codes + Memphis (May 1866) + New Orleans (July 1866) massacres → discredit Johnson → GOP supermajority Nov 1866 + override CRA 1866 (March) + Reconstruction Acts March 1867 + Johnson impeached Feb 1868 (acquitted by 1 vote).',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushrec-ent-2b',
    question: 'Which best describes the process by which federal Reconstruction was dismantled (1872–1877)?',
    options: [
      'Federal Reconstruction was dismantled through a combination of Northern fatigue (Panic of 1873 and 5-year depression shifted attention from Reconstruction), Court retreat (Slaughterhouse 1873 narrowed the 14th Amendment\'s privileges-or-immunities clause), white-supremacist violence (KKK and successor groups suppressed Black voting), federal retreat (Freedmen\'s Bureau largely shut down 1872), and the political resolution of the disputed Hayes-Tilden 1876 election via the Compromise of 1877, which awarded the presidency to Republican Hayes in exchange for the withdrawal of remaining federal troops from the South',
      'Federal Reconstruction was never dismantled during the entire period from 1872 through 1877 in any region of the United States with no Northern fatigue, no Court retreat, no white-supremacist violence, no federal retreat, and no Compromise of 1877 of any kind during the period',
      'Federal Reconstruction was strengthened during the entire period from 1872 through 1877 with increased federal enforcement, expanded Freedmen\'s Bureau, and no Compromise of 1877 troop withdrawal of any kind during the entire period in any region of the United States',
      'There was no federal Reconstruction of any kind during the entire period from 1865 through 1877 in any region of the United States with no Reconstruction Acts, no Freedmen\'s Bureau, no Enforcement Acts, and no Compromise of 1877 of any kind in any region'
    ],
    correctIndex: 0,
    explanation: 'Reconstruction dismantled (1872-77): Northern fatigue (Panic 1873) + Court retreat (Slaughterhouse 1873) + KKK violence + Freedmen\'s Bureau shut 1872 + Hayes-Tilden 1876 → Compromise of 1877 (troop withdrawal).',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'apushrec-ent-3a',
    question: 'Which best describes Black political incorporation during Reconstruction (1867–77)?',
    options: [
      'Approximately 2,000 Black men held public office during Reconstruction, including 16 in the U.S. Congress (Hiram Revels and Blanche K. Bruce as senators from Mississippi); state legislatures, especially in South Carolina and Mississippi, had significant Black majorities or pluralities; Black officeholders helped pass progressive legislation (public schools, civil-rights protections, infrastructure); independent Black churches (especially the AME Church under Bishop Henry McNeal Turner) and Black colleges (Howard 1867, Fisk 1866, Morehouse 1867) provided durable institutional infrastructure',
      'There was no Black political incorporation of any kind during Reconstruction with no Black officeholders, no Black congressional members, no Black state legislators, no Black churches, and no Black colleges of any kind during the entire period in any region',
      'Black political incorporation during Reconstruction included approximately 200 million Black officeholders (more than the entire U.S. population) during the entire period from 1867 through 1877 in any region of the United States during the period in any region',
      'Black political incorporation was limited entirely to Northern states with no Southern Black officeholders, no Hiram Revels, no Blanche K. Bruce, and no Black state legislators of any kind during the entire Reconstruction period from 1867 through 1877 in any region'
    ],
    correctIndex: 0,
    explanation: 'Black political incorporation: ~2,000 Black officeholders + 16 in Congress (Revels, Bruce as MS senators) + SC/MS Black state legislative majorities + AME Church (Bishop Turner) + Howard 1867, Fisk 1866, Morehouse 1867.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushrec-ent-3b',
    question: 'Which best describes the Mississippi Plan (1890) and its successors?',
    options: [
      'Mississippi\'s 1890 constitutional convention pioneered a suite of techniques for systematically disfranchising Black voters without explicit racial language: literacy tests (administered subjectively to fail Black applicants), poll taxes (often cumulative), residency requirements, "good character" tests, and grandfather clauses (exempting voters whose ancestors had voted before Reconstruction); other Southern states copied the model (e.g., South Carolina 1895, Louisiana 1898 with grandfather clause, Alabama 1901); the result was near-total Black disfranchisement across the South by ~1908',
      'The Mississippi Plan and its successors had no impact on Black voting of any kind during the entire period from 1890 through 1908 in any region of the United States with no literacy tests, no poll taxes, no grandfather clauses, and no Black disfranchisement of any kind during the period',
      'The Mississippi Plan (1890) protected Black voting rights and increased Black voter turnout across the South with no literacy tests, no poll taxes, no grandfather clauses, and no Black disfranchisement of any kind during the entire period from 1890 through 1908 in any region',
      'There was no Mississippi Plan in 1890 and no Black disfranchisement of any kind during the entire period from 1890 through 1908 in any region of the United States with no literacy tests, no poll taxes, and no grandfather clauses of any kind during the entire period in any region'
    ],
    correctIndex: 0,
    explanation: 'Mississippi Plan 1890: literacy tests + poll taxes + residency + "good character" + grandfather clauses → racially neutral language but discriminatory enforcement. Copied by SC 1895, LA 1898, AL 1901. Near-total disfranchisement by ~1908.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'apushrec-ent-4a',
    question: 'Which best describes the connection between the Compromise of 1877 and the rise of the Solid South?',
    options: [
      'The Compromise of 1877 (resolving the disputed Hayes-Tilden election) withdrew remaining federal troops from the South, allowing "Redeemer" Democratic governments to consolidate power in every former Confederate state; over the next two decades they imposed literacy tests, poll taxes, grandfather clauses, white primaries, and segregation laws; this consolidation produced the "Solid South" — a region voting nearly unanimously Democratic from ~1880 to ~1964 — that would shape national politics until the Voting Rights Act (1965) and the Civil Rights Movement realigned Southern partisanship',
      'The Compromise of 1877 had no connection to the Solid South of any kind with no Redeemer consolidation, no literacy tests, no poll taxes, no grandfather clauses, no white primaries, and no segregation laws of any kind during the entire period in any region',
      'The Compromise of 1877 produced a Solid Republican South that voted unanimously Republican from 1880 to 1964 with no Redeemer consolidation and no Democratic dominance of any kind during the entire period from 1877 through 1964 in any region of the United States',
      'There was no Compromise of 1877 and no Solid South of any kind during the entire period from 1877 through 1964 in any region of the United States with no Redeemer consolidation, no literacy tests, no poll taxes, no grandfather clauses, and no white primaries of any kind during the period'
    ],
    correctIndex: 0,
    explanation: 'Compromise 1877 (troop withdrawal) → Redeemer consolidation → literacy/poll/grandfather/white primary/segregation → Solid South (~1880-~1964) → realigned by VRA 1965 + Civil Rights Movement.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushrec-ent-4b',
    question: 'Which best describes the connection between Reconstruction and the 20th-century Civil Rights Movement?',
    options: [
      "Reconstruction's constitutional framework — particularly the 14th Amendment's equal-protection clause — lay largely dormant under Plessy (1896) but provided the legal architecture eventually used by the NAACP (founded 1909), Charles Hamilton Houston, Thurgood Marshall, and the Legal Defense Fund to challenge segregation; Brown v. Board (1954) revived the Reconstruction-era reading of equal protection, and the Civil Rights Act of 1964 and Voting Rights Act of 1965 enforced it through federal statute — making the modern Civil Rights Movement, in important ways, a long-delayed Second Reconstruction",
      "Reconstruction had no connection to the 20th-century Civil Rights Movement of any kind with no 14th Amendment, no NAACP, no Brown v. Board, no Civil Rights Act of 1964, and no Voting Rights Act of 1965 of any kind during the entire period in any region",
      "The 20th-century Civil Rights Movement was entirely separate from Reconstruction with no constitutional architecture inherited, no NAACP, no Brown v. Board, and no Second Reconstruction analogy of any kind during the entire period in any region",
      "There was no 20th-century Civil Rights Movement of any kind during the entire 20th century in any region of the United States with no NAACP, no Brown v. Board, no Civil Rights Act, and no Voting Rights Act of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Reconstruction → 20th-c. CRM: 14th Amendment dormant under Plessy → NAACP (1909) + Houston/Marshall/LDF revive → Brown 1954 + CRA 1964 + VRA 1965 = "Second Reconstruction."',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'apushrec-ent-5a',
    question: 'Which best describes the change in American constitutional structure between the founding (1787) and the end of Reconstruction (1870)?',
    options: [
      "The original Constitution accommodated slavery (Three-Fifths Compromise, Fugitive Slave Clause, 20-year extension of slave trade) and left fundamental rights largely to state regulation; the Reconstruction Amendments (13th 1865, 14th 1868, 15th 1870) constitutionalized federal authority over the most fundamental rights and made the federal government, not the states, the ultimate guarantor of citizenship and equal protection — a 'second founding' that fundamentally restructured American federalism, even though enforcement of that framework was politically blocked from 1877 to the 1950s",
      "U.S. constitutional structure underwent no change between the founding and the end of Reconstruction with no Reconstruction Amendments, no Three-Fifths repeal, and no federal authority expansion of any kind during the entire period in any region",
      "U.S. constitutional structure became more state-centered between 1787 and 1870 with no Reconstruction Amendments and no federal authority expansion of any kind during the entire period in any region of the United States during the period",
      "There was no U.S. constitutional structure during the entire period from 1787 through 1870 in any region of the United States with no original Constitution, no Three-Fifths Compromise, and no Reconstruction Amendments of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: 'Constitutional change 1787 → 1870: from slavery accommodation (3/5 + Fugitive Slave Clause + slave trade extension) and state-centered rights → Reconstruction Amendments (13/14/15) = federal guarantor of citizenship + equal protection. "Second founding."',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushrec-ent-5b',
    question: 'Which best describes a major continuity in American politics from the antebellum period through the Reconstruction era regarding federal-state tension?',
    options: [
      'Continuous tension over the federal-state balance, with the issue\'s substantive content shifting from antebellum debates over slavery and tariffs (Nullification Crisis 1832–33; Compromise of 1850; Kansas-Nebraska 1854) to Reconstruction-era debates over federal civil-rights enforcement against state resistance (14th Amendment Section 5, Enforcement Acts 1870–71, KKK Act 1871, Slaughterhouse 1873, Civil Rights Cases 1883); the underlying constitutional question — what limits state authority can the federal government impose? — recurred across the period in different forms',
      'There was no federal-state tension of any kind in American politics from the antebellum period through Reconstruction with no Nullification Crisis, no Compromise of 1850, no 14th Amendment Section 5, and no Enforcement Acts of any kind during the entire period in any region',
      'Federal-state tension existed only in the antebellum period with no Reconstruction-era federal-state tension of any kind during the entire period from 1865 through 1877 in any region of the United States during the period',
      'There were no continuities of any kind in American politics between the antebellum and Reconstruction eras in any region of the United States with no shared federal-state tension of any kind during the entire period in any region'
    ],
    correctIndex: 0,
    explanation: 'Continuity: federal-state tension. Antebellum (Nullification 1832-33, Comp 1850, Kansas-Nebraska 1854) → Reconstruction (14th Sec 5, Enforcement Acts 1870-71, KKK Act, Slaughterhouse 1873, Civil Rights Cases 1883). Same constitutional question, shifting content.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'apushrec-ent-6a',
    question: "Which historical context is most essential for sourcing Andrew Johnson's veto of the Civil Rights Act of 1866 (March 1866)?",
    options: [
      "The veto was issued in March 1866 against the first federal civil-rights law, in the context of Johnson's lenient 'Presidential Reconstruction' (December 1865 onward); the Black Codes had been passed across the former Confederacy in late 1865; mass anti-Black violence in Memphis (May 1866) and New Orleans (July 1866) followed; Republican Congress overrode the veto and went on to draft the 14th Amendment specifically to constitutionalize the protections Johnson had tried to block",
      "The veto was issued in 1900 against the Civil Rights Act of 1964 with no relationship to Reconstruction, Presidential Reconstruction, Black Codes, or the 14th Amendment of any kind during the entire period in any region of the United States",
      "The veto was issued in 1820 against the Missouri Compromise with no relationship to Reconstruction, Presidential Reconstruction, Black Codes, or the 14th Amendment of any kind during the entire period in any region of the United States",
      "There was no Andrew Johnson veto of the Civil Rights Act of 1866 of any kind during the entire Reconstruction period from 1865 through 1877 in any region of the United States during the period in any region of the country"
    ],
    correctIndex: 0,
    explanation: 'Johnson 1866 CRA veto context: Presidential Reconstruction window (lenient) + Black Codes late 1865 + Memphis May 1866 + New Orleans July 1866 → veto overridden → 14th Amendment drafted to lock in protections.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushrec-ent-6b',
    question: "Which best identifies the point of view of Frederick Douglass\'s \"What the Black Man Wants\" (April 1865)?",
    options: [
      "Speech delivered to the Massachusetts Anti-Slavery Society in April 1865, just days after Lee's surrender at Appomattox; POV is the leading Black abolitionist of the era, anticipating both the post-emancipation struggle for citizenship and the eventual constitutional recognition in the 14th and 15th Amendments, and arguing that emancipation without political rights (especially male suffrage) leaves Black Americans defenseless against Southern white retaliation",
      "Speech delivered by a white Republican congressman with no Black abolitionist authorship, no Massachusetts Anti-Slavery Society audience, and no relationship to post-emancipation citizenship debates of any kind during the entire period in any region",
      "Speech delivered by Andrew Johnson defending Presidential Reconstruction with no Black abolitionist authorship, no demand for Black male suffrage, and no anticipation of the 14th and 15th Amendments of any kind during the entire period in any region",
      "Speech delivered by a Confederate veteran defending Black Codes with no Black abolitionist authorship, no demand for Black male suffrage, and no anticipation of the 14th and 15th Amendments of any kind during the entire period in any region"
    ],
    correctIndex: 0,
    explanation: '"What the Black Man Wants" April 1865 POV: leading Black abolitionist + post-Appomattox + anticipating 14th/15th + arguing emancipation without political rights leaves Black Americans defenseless.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'apushrec-ent-7a',
    question: 'In which year was the 14th Amendment ratified?',
    options: ['1863', '1865', '1868', '1870'],
    correctIndex: 2,
    explanation: '1868 (14th Amendment). 1863 = Emancipation Proclamation effective; 1865 = 13th Amendment + Civil War end; 1870 = 15th Amendment.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'apushrec-ent-7b',
    question: 'Which best demonstrates AP comparison skill across Reconstruction-era constitutional and political tools?',
    options: [
      "The 14th Amendment (1868) and the Civil Rights Act of 1875 both aimed to protect Black civil rights, but the 14th Amendment is constitutional and applies to state action, prohibiting state denials of due process and equal protection (with Section 5 empowering Congress to enforce); the Civil Rights Act of 1875 is statutory, applied to private actors (hotels, theaters, railroads), and addressed public accommodations specifically — but the Supreme Court struck down its public-accommodations provision in the Civil Rights Cases (1883), holding that the 14th Amendment reached only state action and not private discrimination",
      "The 14th Amendment and the Civil Rights Act of 1875 were entirely identical in nature, scope, application, and judicial fate with no meaningful differences of any kind during the entire period from 1868 through 1883 in any region of the United States",
      "The 14th Amendment and the Civil Rights Act of 1875 had no shared themes of any kind and cannot be compared in any meaningful way during the entire period from 1868 through 1883 in any region of the United States during the period",
      "Neither the 14th Amendment nor the Civil Rights Act of 1875 existed during the entire Reconstruction period from 1868 through 1883 in any region of the United States with no civil-rights protection of any kind during the period in any region of the country"
    ],
    correctIndex: 0,
    explanation: 'AP comparison: shared theme (protect Black civil rights) AND specific differences (14th constitutional + state action + DP/EP + Sec 5 enforcement; CRA 1875 statutory + private actors + public accommodations → struck down 1883 Civil Rights Cases for reaching beyond state action).',
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
