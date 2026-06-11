import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
/**
 * Phase 2/3 content fill for AP US Government — Part 2
 * Covers the remaining 7 topics: civil liberties, civil rights, political ideology,
 * public opinion, parties/interest groups, voting/elections, media/technology.
 *
 * Usage:
 *   set -a && source .env.local && set +a && npx tsx prisma/add-us-government-content-part2.ts
 */

import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

type ProblemSeed = { order: number; difficulty: Difficulty; question: string; solution: string }
type CardSeed = { front: string; back: string; hint?: string; lessonPart?: number }
type TopicSeed = { textContent: string; problems: ProblemSeed[]; cards: CardSeed[] }

const TOPICS: Record<string, TopicSeed> = {
  // ──────────────────────────────────────────────────────────────────
  'gov-civil-liberties': {
    textContent: `## Civil Liberties

**Civil liberties** are the constitutional protections of individuals against government action — what the government CANNOT do to you. Most are found in the **Bill of Rights** (1791) and have been gradually applied to state governments through the doctrine of **selective incorporation** under the **14th Amendment\'s Due Process Clause**.

### Selective Incorporation

The Bill of Rights originally restrained ONLY the federal government (*Barron v. Baltimore*, 1833). The 14th Amendment (1868) said no STATE could deprive any person of "life, liberty, or property, without due process of law." Starting in the 20th century, the Supreme Court began **incorporating** specific protections into the Due Process Clause one right at a time, applying them to state and local governments. Today nearly all of the Bill of Rights has been incorporated.

### First Amendment — Religion

- **Establishment Clause:** government cannot establish an official religion or favor one religion over others. **Engel v. Vitale (1962)** struck down state-mandated prayer in public schools. The **Lemon Test** (now weakened) asked whether a law had a secular purpose, neither advanced nor inhibited religion, and avoided excessive entanglement.
- **Free Exercise Clause:** government cannot prohibit individuals from practicing their religion. **Wisconsin v. Yoder (1972)** allowed Amish parents to keep their children out of public school after 8th grade on religious grounds.

### First Amendment — Speech, Press, Assembly, Petition

- **Speech:** Highly protected, but not absolute. Unprotected categories include true threats, incitement to imminent lawless action (*Brandenburg v. Ohio*, 1969), obscenity, and defamation. **Tinker v. Des Moines (1969)** held that students do not "shed their constitutional rights to freedom of speech or expression at the schoolhouse gate" (black armbands protesting Vietnam War).
- **Symbolic speech:** flag burning is protected (*Texas v. Johnson*, 1989).
- **Press:** strong protection from prior restraint (*New York Times v. United States*, 1971 — Pentagon Papers).
- **Assembly and petition:** the right to gather peacefully and to petition government for redress.

### Second Amendment

The right to keep and bear arms. **District of Columbia v. Heller (2008)** held the 2nd Amendment protects an INDIVIDUAL right to possess firearms (not just a militia right) for traditionally lawful purposes such as home defense. **McDonald v. Chicago (2010)** incorporated the right against the states.

### Fourth Amendment — Searches and Seizures

Protection against "unreasonable searches and seizures." Generally requires a **warrant supported by probable cause**. The **exclusionary rule** (*Mapp v. Ohio*, 1961) bars improperly obtained evidence from being used in court. Many exceptions: consent, plain view, exigent circumstances, automobile exception, Terry stops.

### Fifth, Sixth, Eighth Amendments — Criminal Process

- **Self-incrimination** (5th): cannot be compelled to testify against yourself. **Miranda v. Arizona (1966)** required police to inform suspects in custody of their rights.
- **Right to counsel** (6th): **Gideon v. Wainwright (1963)** held that states must provide counsel to indigent defendants in felony cases.
- **Speedy and public trial by jury** (6th).
- **Cruel and unusual punishment** (8th).

### Right to Privacy

NOT explicitly in the Constitution but inferred from the "penumbras" of several amendments. **Griswold v. Connecticut (1965)** struck down a ban on contraceptives for married couples. **Roe v. Wade (1973)** extended privacy to abortion — overruled by **Dobbs v. Jackson Women\'s Health (2022)**, which held there is no constitutional right to abortion and returned the issue to the states.

### Why It Matters

Civil liberties define the practical limits of government power. Their evolution — through judicial doctrine and political contestation — is the story of how broadly the Constitution protects individual freedom in the modern era.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Identify the two religion clauses of the First Amendment and briefly describe what each protects.`,
        solution: `**Establishment Clause:** "Congress shall make no law respecting an establishment of religion." Prohibits the government from establishing an official religion or favoring one religion over another (or religion in general over non-religion). Strikes down state-sponsored prayer in public schools (*Engel v. Vitale*, 1962).

**Free Exercise Clause:** "or prohibiting the free exercise thereof." Protects individuals\' right to practice their religion without government interference. Allowed Amish parents to keep children out of school past 8th grade (*Wisconsin v. Yoder*, 1972).

**Tension:** The two clauses can pull in opposite directions. Accommodating religious practice (Free Exercise) can come close to government endorsement (Establishment), and policing Establishment too strictly can burden Free Exercise.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `What is **selective incorporation**, and which constitutional provision is its vehicle?`,
        solution: `**Selective incorporation** is the gradual process by which the Supreme Court has applied specific protections from the Bill of Rights to STATE and local governments, on a right-by-right basis.

**Vehicle:** The **Due Process Clause of the 14th Amendment** ("nor shall any State deprive any person of life, liberty, or property, without due process of law"). The Court has read the word "liberty" to incorporate fundamental rights from the Bill of Rights.

Originally (after *Barron v. Baltimore*, 1833), the Bill of Rights restrained only the FEDERAL government. Starting in the early 20th century — and especially after the Warren Court of the 1950s–60s — most rights have been incorporated. Today nearly all of the Bill of Rights applies to states. (Notable exceptions still not fully incorporated: 3rd Amendment quartering, 5th Amendment grand-jury indictment, 7th Amendment civil jury trial.)` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `In *Tinker v. Des Moines* (1969), the Supreme Court ruled that students wearing black armbands to protest the Vietnam War could not be punished by school authorities. (a) What constitutional right was at stake? (b) What standard did the Court establish for student speech in public schools?`,
        solution: `(a) **First Amendment freedom of speech** (specifically, **symbolic speech** — wearing armbands as a form of expression). The Court famously held that students do "not shed their constitutional rights to freedom of speech or expression at the schoolhouse gate."

(b) **Standard:** Public school officials may regulate or punish student speech ONLY if they can show it would **substantially disrupt** the school environment OR invade the rights of other students. Mere apprehension of disturbance, or fear of controversial views, is NOT enough. The school district in *Tinker* could not show that black armbands had caused or were likely to cause substantial disruption — the school had simply tried to ban a particular political message.

Subsequent cases narrowed *Tinker* in some contexts (lewd speech in *Bethel v. Fraser* (1986); school-sponsored speech in *Hazelwood v. Kuhlmeier* (1988); pro-drug messages in *Morse v. Frederick* (2007)), but the substantial-disruption standard remains the baseline for personal political expression by students.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain the holding of *Gideon v. Wainwright* (1963). Why is it considered a landmark in criminal procedure?`,
        solution: `**Holding:** The Sixth Amendment\'s right to counsel applies to STATE criminal prosecutions through the Fourteenth Amendment\'s Due Process Clause. States must provide an attorney at public expense to indigent defendants charged with serious (felony) crimes who cannot afford one.

**Significance:**
1. **Incorporation:** Gideon was a major incorporation case, applying a federal Bill of Rights protection to all 50 states. It overruled *Betts v. Brady* (1942), which had said the right to counsel applied only to "special circumstances."
2. **Practical effect:** Created the modern public-defender system. Today every state has some mechanism (public-defender offices or assigned counsel) to provide attorneys to indigent felony defendants.
3. **Equal justice:** Recognized that the right to a fair trial means little if defendants cannot meaningfully understand the proceedings or contest the prosecution. As Gideon\'s lawyer (Abe Fortas, later a Supreme Court justice) argued, "you cannot have a fair trial without counsel."
4. **Later expansion:** *Argersinger v. Hamlin* (1972) extended the right to counsel to misdemeanor cases that could result in jail time.

Limitations: the right covers only criminal cases, not civil. Public-defender systems are chronically underfunded, raising ongoing questions about meaningful access to counsel.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Compare *Roe v. Wade* (1973) and *Dobbs v. Jackson Women\'s Health* (2022). (a) On what constitutional foundation did *Roe* rest? (b) On what grounds did *Dobbs* overrule it? (c) What does *Dobbs* mean for federalism in this policy area?`,
        solution: `(a) **Roe\'s constitutional foundation:** A constitutional **right to privacy** inferred from the "penumbras" of several amendments (1st, 4th, 5th, 9th, 14th) and located most directly in the **Due Process Clause of the 14th Amendment**. Justice Blackmun\'s majority opinion held that the right to privacy is "broad enough to encompass a woman\'s decision whether or not to terminate her pregnancy," subject to a trimester framework that gave the state increasing authority as pregnancy progressed.

(b) **Dobbs\'s grounds for overruling:** Justice Alito\'s majority opinion held that:
1. **Text:** the Constitution makes no reference to abortion; the right is not enumerated.
2. **History:** abortion was not "deeply rooted in this Nation\'s history and tradition" — the standard for recognizing unenumerated rights under the Due Process Clause established in *Washington v. Glucksberg* (1997). At the time the 14th Amendment was ratified in 1868, most states criminalized abortion.
3. **Stare decisis:** *Roe* and *Casey* were "egregiously wrong" from the start, applied an unworkable framework, and could be overruled without disrupting reliance interests in the same way other precedents would.

The Court therefore held there is **no federal constitutional right to abortion** and returned the issue to "the people and their elected representatives."

(c) **Federalism implications:** *Dobbs* dramatically EXPANDED state authority in this area. Each state can now decide its own abortion policy through its legislature, courts, or ballot initiatives — creating a patchwork ranging from near-total bans (Texas, Mississippi, Louisiana) to expansive protections (California, New York, Massachusetts, ballot-initiative states like Ohio, Kansas, Michigan). This produces:
- **Cross-state travel for abortion services** — a new policy phenomenon raising legal questions (can states criminalize traveling for abortion? can they reach providers in other states?).
- **State constitutional law** as the new battleground (state supreme courts interpreting state constitutions).
- **Federal policy fights** continuing — over mifepristone (FDA approval), federal funding (Hyde Amendment), and proposed federal legislation that would either codify abortion rights or impose national restrictions.

*Dobbs* is a landmark example of how OVERRULING a federal constitutional right shifts the locus of policymaking back to states (a "devolution" effect).` },
    ],
    cards: [
      { front: 'Civil liberties — definition', back: 'Constitutional protections of individuals AGAINST government action. Found primarily in the Bill of Rights and applied to the states via the 14th Amendment.', lessonPart: 1 },
      { front: 'Selective incorporation', back: 'The case-by-case application of Bill of Rights protections to state governments through the 14th Amendment\'s Due Process Clause. Began in the early 20th century; nearly complete today.', lessonPart: 1 },
      { front: 'Engel v. Vitale (1962)', back: 'Struck down state-mandated prayer in public schools as a violation of the Establishment Clause. Even non-denominational, voluntary prayer cannot be sponsored by public schools.', lessonPart: 2 },
      { front: 'Wisconsin v. Yoder (1972)', back: 'Allowed Amish parents to remove their children from public school after 8th grade on Free Exercise grounds. Established a strong protection for religious practice from generally applicable laws.', lessonPart: 2 },
      { front: 'Tinker v. Des Moines (1969)', back: 'Students wearing black armbands to protest Vietnam War were protected by the First Amendment. School can restrict speech only if it would cause "substantial disruption."', lessonPart: 3 },
      { front: 'Brandenburg v. Ohio (1969)', back: 'Government may punish speech advocating violence only if it is directed at producing "imminent lawless action" and is likely to do so. Replaced the older "clear and present danger" test.', lessonPart: 3 },
      { front: 'New York Times v. United States (1971) — Pentagon Papers', back: 'Government bears a "heavy burden" to justify prior restraint of the press. Court refused to enjoin publication of the classified Pentagon Papers, reaffirming strong press-freedom protection.', lessonPart: 3 },
      { front: 'District of Columbia v. Heller (2008)', back: 'Held that the Second Amendment protects an INDIVIDUAL right to possess firearms (not just a militia right) for traditionally lawful purposes such as self-defense in the home.', lessonPart: 4 },
      { front: 'Gideon v. Wainwright (1963)', back: 'Sixth Amendment right to counsel applies to states through the 14th Amendment. States must provide counsel to indigent defendants in felony cases. Created the modern public-defender system.', lessonPart: 5 },
      { front: 'Dobbs v. Jackson Women\'s Health (2022)', back: 'Overruled *Roe v. Wade* (1973) and *Casey* (1992); held there is no federal constitutional right to abortion. Returned the issue to the states, producing a wide patchwork of policies.', lessonPart: 6 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'gov-civil-rights': {
    textContent: `## Civil Rights

**Civil rights** are protections AGAINST DISCRIMINATION by government and (in some areas) by private actors. Where civil liberties are about what government can\'t do to you, civil rights are about what government must do to ensure equal treatment of individuals based on race, sex, national origin, religion, disability, sexual orientation, and other characteristics.

### Constitutional Foundation

- **14th Amendment Equal Protection Clause** (1868): "nor shall any State ... deny to any person within its jurisdiction the equal protection of the laws." The constitutional anchor of civil rights.
- **15th Amendment** (1870): cannot deny the vote on account of race, color, or previous condition of servitude.
- **19th Amendment** (1920): cannot deny the vote on account of sex.
- **24th Amendment** (1964): banned poll taxes in federal elections.
- **26th Amendment** (1971): voting age set at 18.

### Three Levels of Equal-Protection Scrutiny

1. **Strict scrutiny** — applied to "suspect classifications" (race, national origin) and infringements on fundamental rights. Government must show the law is **narrowly tailored** to serve a **compelling state interest**. Almost always fatal to the law.
2. **Intermediate scrutiny** — applied to sex/gender. Government must show the law is **substantially related** to an **important state interest**.
3. **Rational basis** — applied to most other classifications (age, wealth, education). Government must show the law is **rationally related** to a **legitimate state interest**. Almost always upheld.

### From Plessy to Brown

- **Plessy v. Ferguson (1896):** upheld "separate but equal" — racially segregated facilities did not violate the 14th Amendment. Justified Jim Crow laws across the South.
- **Brown v. Board of Education (1954):** unanimously overruled Plessy in the context of public schools. Held that "separate educational facilities are inherently unequal" — segregation by race violates the Equal Protection Clause regardless of facility quality. Triggered massive resistance and the modern Civil Rights Movement.

### The Civil Rights Movement and Federal Legislation

- **Civil Rights Act of 1964:** banned discrimination in public accommodations, employment, and federally funded programs on the basis of race, color, religion, sex, or national origin (Title VII).
- **Voting Rights Act of 1965:** banned literacy tests; required federal preclearance for changes to election laws in jurisdictions with histories of discrimination (Section 5). The preclearance formula was struck down in *Shelby County v. Holder* (2013).
- **Fair Housing Act of 1968:** banned discrimination in the sale and rental of housing.
- **Americans with Disabilities Act (1990):** banned discrimination based on disability and required reasonable accommodations.

### Women\'s Rights

- **Title IX of the Education Amendments (1972):** banned sex discrimination in federally funded education programs (foundation of equal athletic opportunities).
- **Reed v. Reed (1971):** first time the Court struck down a state law for sex discrimination under Equal Protection.
- **Equal Rights Amendment** (proposed 1972): would have constitutionally guaranteed equal rights regardless of sex; failed to be ratified within the deadline.

### LGBTQ+ Rights

- **Lawrence v. Texas (2003):** struck down state sodomy laws under substantive due process.
- **Obergefell v. Hodges (2015):** constitutional right to same-sex marriage under both Equal Protection and Due Process Clauses.
- **Bostock v. Clayton County (2020):** Title VII\'s prohibition of "sex" discrimination protects employees from being fired for being gay or transgender.

### Affirmative Action

- **Regents of UC v. Bakke (1978):** strict racial quotas violate Equal Protection, but race may be considered as one factor among many in university admissions.
- **Grutter v. Bollinger (2003):** narrowly upheld race-conscious admissions to promote educational diversity.
- **Students for Fair Admissions v. Harvard (2023):** struck down race-conscious admissions at Harvard and UNC, effectively ending traditional affirmative action in higher education.

### Why It Matters

Civil rights have been won through a combination of constitutional litigation, mass political movements, and federal legislation — and each generation expands or contracts protections through ongoing political and legal struggle.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `What is the difference between **civil rights** and **civil liberties**? Give one example of each.`,
        solution: `**Civil liberties:** Constitutional limits on what government can do TO you. Protections of individual freedom from government action. Example: First Amendment freedom of speech (government can\'t punish you for criticizing it); Fourth Amendment protection against unreasonable searches.

**Civil rights:** Protections AGAINST DISCRIMINATION by government (and in some areas, private actors). Government must treat you equally and protect you from discriminatory treatment based on characteristics like race, sex, national origin, disability. Example: Equal Protection Clause; Civil Rights Act of 1964 banning racial discrimination in employment.

**Distinction:** Civil liberties are about what government CAN\'T DO; civil rights are about what government MUST DO (or must prevent) to ensure equal treatment. Both rest substantially on the 14th Amendment, though through different clauses (Due Process for liberties; Equal Protection for civil rights).` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Briefly describe the holdings of *Plessy v. Ferguson* (1896) and *Brown v. Board of Education* (1954). What was the constitutional basis for overruling Plessy?`,
        solution: `**Plessy v. Ferguson (1896):** Upheld a Louisiana law requiring "equal but separate" railway cars for Black and white passengers. The Court held that racial segregation did not violate the 14th Amendment\'s Equal Protection Clause, so long as facilities were nominally equal. This established the **"separate but equal"** doctrine that justified Jim Crow segregation across the South for nearly six decades.

**Brown v. Board of Education (1954):** Unanimously overruled Plessy in the context of public schools. Chief Justice Warren\'s opinion held that "separate educational facilities are INHERENTLY UNEQUAL" — even when physical facilities were comparable, segregation generated a sense of inferiority that damaged Black children\'s education and life prospects. Therefore racial segregation in public schools violates the Equal Protection Clause.

**Constitutional basis for overruling:** The 14th Amendment\'s **Equal Protection Clause**. Brown drew heavily on social science evidence (notably Kenneth and Mamie Clark\'s "doll studies") showing the psychological harm of segregation, marking a more empirically grounded approach to constitutional interpretation than Plessy\'s formalism.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain the three levels of scrutiny under the Equal Protection Clause: **strict**, **intermediate**, and **rational basis**. Give the type of classification each is applied to and the typical outcome.`,
        solution: `| Level | Triggered by | Government must show | Typical outcome |
|---|---|---|---|
| **Strict scrutiny** | Race, national origin, fundamental rights | Law is **narrowly tailored** to a **compelling state interest** | Law almost always struck down ("strict in theory, fatal in fact") |
| **Intermediate scrutiny** | Sex/gender, illegitimacy | Law is **substantially related** to an **important state interest** | Mixed — laws survive if genuinely connected to important goal |
| **Rational basis** | Age, wealth, occupation, most other classifications | Law is **rationally related** to a **legitimate state interest** | Almost always upheld |

**Why three levels?** The Court treats classifications differently based on the historical pattern of discrimination, immutability of the trait, and political powerlessness of the group. Race triggers the most demanding scrutiny because of the long history of racial subordination and the relevance of the 14th Amendment\'s purpose. Sex receives intermediate (rather than strict) scrutiny — a partial recognition that women are not similarly situated to men in all respects. Most other classifications are everyday legislative line-drawing and only the most arbitrary fail rational basis.

**Example application:** A law setting different drinking ages for men and women would receive intermediate scrutiny (sex classification) and likely fall — *Craig v. Boren* (1976). A law setting a minimum drinking age of 21 for everyone would receive rational basis and easily survive.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Identify three major pieces of federal civil-rights legislation passed in the 1960s and explain the principal area each addressed.`,
        solution: `1. **Civil Rights Act of 1964:** Banned discrimination in **public accommodations** (hotels, restaurants, theaters), in **employment** (Title VII — race, color, religion, sex, national origin), and in **federally funded programs** (Title VI). Passed despite a lengthy Senate filibuster after President Kennedy\'s assassination and President Johnson\'s persistent pressure. The constitutional basis for public-accommodations provisions was the Commerce Clause (upheld in *Heart of Atlanta Motel v. United States*, 1964).

2. **Voting Rights Act of 1965:** Banned **literacy tests** and other discriminatory voting practices; required **federal preclearance** for changes to election laws in jurisdictions with histories of voting discrimination (Section 5, with formula in Section 4(b)). Triggered by the violent suppression of voting-rights marchers in Selma, Alabama. Dramatically expanded Black voter registration in the South. The preclearance formula was struck down in *Shelby County v. Holder* (2013), substantially weakening the Act.

3. **Fair Housing Act of 1968:** Banned discrimination in the sale, rental, and financing of housing on the basis of race, color, religion, or national origin (later amended to include sex, disability, and family status). Passed in the wake of Martin Luther King Jr.\'s assassination. Addressed entrenched residential segregation through restrictive covenants, redlining, and discriminatory real estate practices.

These three laws — together with the constitutional victories of *Brown* and the broader civil rights movement — fundamentally restructured American legal protections against racial discrimination.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `In *Students for Fair Admissions v. Harvard* (2023), the Court struck down race-conscious admissions at Harvard and UNC, effectively ending affirmative action in higher education as practiced for decades. (a) Explain the Court\'s reasoning. (b) How does the case interact with the precedents *Bakke* (1978) and *Grutter* (2003)? (c) What does the decision mean for institutions that still want to promote racial diversity?`,
        solution: `(a) **Court\'s reasoning (Roberts, 6–3):** Race-conscious admissions programs at Harvard and UNC violated the **Equal Protection Clause** (and Title VI of the 1964 Civil Rights Act for Harvard, which is private). The Court applied **strict scrutiny** and held that the universities\' use of race failed several requirements:
1. **Compelling interest not measurable.** "Educational diversity" is too amorphous a goal to justify racial classification under strict scrutiny — there is no clear endpoint or measurable benefit.
2. **Race used as a stereotype.** Treating applicants as representatives of a racial group violates the principle of treating individuals as individuals.
3. **No logical endpoint.** *Grutter* had said race-conscious admissions should end within 25 years; the Court held this open-endedness is itself constitutionally problematic.
4. **Negative use of race.** Harvard\'s data showed Asian-American applicants were systematically rated lower on subjective "personal" scores, suggesting race was being used to disadvantage some applicants.

(b) **Interaction with precedent:**
- ***Bakke (1978)***: Struck down explicit racial QUOTAS but allowed race to be considered as one factor among many to promote educational diversity. *SFFA* did NOT formally overrule *Bakke*\'s prohibition on quotas, but eliminated the affirmative use of race that *Bakke* had blessed.
- ***Grutter (2003)***: Narrowly upheld the University of Michigan Law School\'s race-conscious admissions on diversity grounds. *SFFA* effectively overruled *Grutter*\'s holding without explicitly using the word "overrule" — Roberts\'s majority said *Grutter* and Harvard/UNC\'s programs simply couldn\'t survive strict scrutiny when applied rigorously.

(c) **What institutions can still do:**
- The Court left open that applicants may discuss how RACE has affected their lives in personal essays, and admissions officers may consider those essays — but cannot use race as a categorical plus-factor.
- Institutions may pursue diversity through **race-neutral** means: socioeconomic preferences, geographic preferences, first-generation status, percent plans (e.g., Texas\'s Top 10% Plan automatically admitting top high-school graduates), recruitment in underrepresented areas, and partnerships with diverse high schools.
- Several states (California, Michigan, Florida, Arizona, Washington, Nebraska, Oklahoma) had already banned race-conscious admissions through ballot initiatives; their experience offers a preview — racial diversity dropped sharply at flagship campuses, particularly in selective programs, despite race-neutral alternatives.
- Continuing legal contests are likely over **legacy preferences**, **early decision**, and other admissions practices that produce racial disparities even without explicit race-conscious treatment.

*SFFA* is among the most consequential Equal Protection decisions of the 21st century and has reshaped the landscape of American higher-education admissions.` },
    ],
    cards: [
      { front: 'Equal Protection Clause', back: '14th Amendment (1868): "nor shall any State ... deny to any person within its jurisdiction the equal protection of the laws." The constitutional foundation of modern civil rights doctrine.', lessonPart: 1 },
      { front: 'Three levels of equal-protection scrutiny', back: 'Strict (race, national origin, fundamental rights — narrowly tailored to compelling interest). Intermediate (sex — substantially related to important interest). Rational basis (most others — rationally related to legitimate interest).', lessonPart: 2 },
      { front: 'Plessy v. Ferguson (1896)', back: 'Upheld "separate but equal" — racial segregation does not violate Equal Protection if facilities are equal. Justified Jim Crow segregation in the South. Overruled by Brown.', lessonPart: 3 },
      { front: 'Brown v. Board of Education (1954)', back: 'Unanimously overruled Plessy in public schools. "Separate educational facilities are inherently unequal." Triggered the modern Civil Rights Movement and massive Southern resistance.', lessonPart: 3 },
      { front: 'Civil Rights Act of 1964', back: 'Banned discrimination in public accommodations, employment (Title VII — race, sex, religion, national origin), and federally funded programs. Most far-reaching civil-rights statute since Reconstruction.', lessonPart: 4 },
      { front: 'Voting Rights Act of 1965', back: 'Banned literacy tests; required federal preclearance for election-law changes in jurisdictions with discrimination histories (Section 5). Preclearance formula struck down in Shelby County v. Holder (2013).', lessonPart: 4 },
      { front: 'Title IX (1972)', back: 'Banned sex discrimination in federally funded education programs. Foundation of equal athletic opportunities for women in schools and universities.', lessonPart: 5 },
      { front: 'Reed v. Reed (1971)', back: 'First Supreme Court case to strike down a state law for sex discrimination under the Equal Protection Clause. Marked the beginning of modern gender-equality jurisprudence.', lessonPart: 5 },
      { front: 'Obergefell v. Hodges (2015)', back: 'Constitutional right to same-sex marriage under the Equal Protection and Due Process Clauses of the 14th Amendment. Required all states to recognize same-sex marriages.', lessonPart: 6 },
      { front: 'Students for Fair Admissions v. Harvard (2023)', back: 'Struck down race-conscious college admissions at Harvard and UNC. Effectively ended traditional affirmative action in higher education. Race may be discussed in essays but not used as a plus-factor.', lessonPart: 6 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'gov-political-ideology': {
    textContent: `## Political Ideology

**Political ideology** is a coherent set of beliefs about the role of government, the rights of individuals, and the goals of public policy. American politics is dominated by two broad ideological traditions — modern liberalism and modern conservatism — but each contains important internal divisions and is shaped by smaller traditions (libertarianism, populism, progressivism) that periodically reshape the major parties.

### Modern American Liberalism

Roots in the **Progressive Era** (1900–1920) and especially **FDR\'s New Deal** (1933–1945). Core commitments:
- **Active government** to address economic inequality and market failures.
- **Social welfare state** — Social Security, Medicare/Medicaid, unemployment insurance, food assistance.
- **Civil rights and individual liberties** — strong support for racial, gender, and LGBTQ+ equality.
- **Environmental protection** — regulation of pollution, action on climate change.
- **Progressive taxation** to fund public goods and reduce inequality.
- **Globalist foreign policy** — alliances, multilateral institutions, free trade with social protections.

Demographically: stronger in cities, college graduates, racial minorities, younger voters. Geographic: coasts and large metropolitan areas.

### Modern American Conservatism

Roots in the **postwar response to the New Deal**, the **Goldwater movement**, and the **Reagan Revolution** (1981–1989). Core commitments:
- **Limited government** — reduce federal spending, taxation, and regulation.
- **Free-market economics** — competition, deregulation, lower business taxes.
- **Traditional social values** — family, religion, social order; restrictions on abortion.
- **Strong national defense** and assertive foreign policy.
- **Federalism** — return power to states and localities.
- **Strict constructionist judicial philosophy** — originalism and textualism.

Demographically: stronger in rural areas, white working-class and white Evangelical Christians, older voters. Geographic: South, Plains, Mountain West.

### Internal Divisions Within Each Coalition

**Within the Democratic / liberal coalition:**
- **Progressives** (Bernie Sanders, AOC) — favor Medicare for All, Green New Deal, wealth taxes, more aggressive labor/antitrust policy.
- **Moderates / establishment liberals** (Biden, Pelosi, Schumer) — favor incremental reforms, public-private partnerships, market-based environmentalism.
- **Centrist Democrats** (Manchin, Sinema) — fiscally conservative, comfortable with bipartisan compromise.

**Within the Republican / conservative coalition:**
- **Traditional conservatives** (Paul Ryan, Mitt Romney) — small government, free trade, hawkish foreign policy.
- **Religious / social conservatives** — emphasize abortion, religious liberty, family values.
- **Populist / nationalist conservatives** (Trump, JD Vance) — protectionist trade, immigration restriction, skepticism of foreign intervention, anti-elite stance.
- **Libertarians** (Rand Paul) — minimal government in BOTH economic and social spheres.

### Ideology and Policy

Different ideologies reach different conclusions on the same issue:
- **Healthcare:** liberals favor expanded public insurance (single payer, Medicare expansion); conservatives favor private market solutions, health savings accounts, less federal regulation.
- **Taxes:** liberals favor higher top rates, wealth taxes, expanded EITC; conservatives favor flatter rates, lower corporate taxes, simpler code.
- **Education:** liberals favor more federal funding, student-loan relief; conservatives favor school choice, vouchers, parental rights.
- **Climate:** liberals support carbon regulation, renewables subsidies, international agreements; many conservatives skeptical of regulation, prefer market or technology solutions.

### Ideology and Voting Behavior

Ideology is a strong predictor of party identification and voting behavior. **Party-line voting** is at historic highs in Congress and in the electorate — most self-identified liberals vote Democratic; most self-identified conservatives vote Republican. This **partisan sorting** (the alignment of ideology and party) is a major driver of the deep polarization that characterizes contemporary American politics.

### Why It Matters

Ideologies are not just abstract philosophies — they shape how people read the news, evaluate candidates, and decide whether to support specific policies. Understanding the major ideological coalitions and their internal divisions is essential to making sense of any contemporary American policy debate.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Identify TWO core commitments of modern American liberalism and TWO core commitments of modern American conservatism.`,
        solution: `**Modern American liberalism (any two):**
1. Active federal government to address economic inequality and market failures.
2. Strong social safety net (Social Security, Medicare/Medicaid, unemployment insurance, food assistance).
3. Strong civil rights protections (race, gender, LGBTQ+).
4. Environmental regulation and climate action.
5. Progressive taxation.
6. Multilateral, alliance-based foreign policy.

**Modern American conservatism (any two):**
1. Limited federal government — lower spending, taxation, and regulation.
2. Free-market economic policy — deregulation, lower business taxes.
3. Traditional social values (often grounded in religion).
4. Strong national defense.
5. Federalism — power to states and localities.
6. Originalist or textualist judicial philosophy.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Define **partisan sorting**, and explain why it makes American politics more polarized.`,
        solution: `**Partisan sorting:** the alignment of ideology with party identification. In the past, both major parties contained substantial liberal AND conservative wings (liberal Republicans like Rockefeller and Hatfield; conservative "Dixiecrat" Democrats). Today, almost all liberals are Democrats and almost all conservatives are Republicans — ideology and party have **converged**.

**Why this increases polarization:**
1. **Less internal disagreement.** When each party is ideologically homogeneous, internal debate fades and party-line voting becomes the norm.
2. **Less common ground across parties.** Coalitions that previously needed each other (e.g., Northern liberal Republicans + liberal Democrats during the Civil Rights Era) no longer exist; bipartisan compromise becomes much harder.
3. **Negative partisanship.** Voters increasingly see the OPPOSING party not just as wrong but as a threat to the country, making compromise feel like betrayal.
4. **Geographic sorting** — liberals and conservatives also live in different places, deepening cultural distance and reducing personal contact across ideological lines.

The result: highly polarized parties, gridlocked legislation, and increasing reliance on executive unilateralism and judicial decisions.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare how a **modern liberal** and a **modern conservative** might respond to the question, "What should the federal government do about rising healthcare costs?" Explain the underlying ideological reasoning of each position.`,
        solution: `**Modern liberal response:**
- **Policy:** Expand public insurance — through a public option, Medicare expansion (lowering eligibility age), or single-payer ("Medicare for All"). Increase federal subsidies for ACA marketplace plans. Negotiate prescription drug prices through Medicare. Cap out-of-pocket costs.
- **Reasoning:** Healthcare is a basic human need; markets fail to provide it efficiently because of information asymmetries, monopoly power of insurers and hospitals, and the impossibility of comparison shopping during medical emergencies. Government has both the moral responsibility and the bargaining leverage to lower costs and ensure universal access. Pooling risk across the entire population is more efficient than fragmented private markets.

**Modern conservative response:**
- **Policy:** Reduce regulation to spur competition (allow insurance sales across state lines; lower barriers to entry for providers). Expand health savings accounts and high-deductible plans. Encourage price transparency. Block-grant Medicaid to states. Reduce federal mandates on insurers.
- **Reasoning:** Government intervention is the CAUSE of rising costs, not the cure — mandates, taxes, and regulations distort markets and reduce innovation. Consumers spending their own money make better choices than third-party payers (insurance or government). Market competition drives innovation and lower prices. Federalism allows states to experiment with different approaches.

**Underlying ideological divergence:**
The disagreement is fundamentally about (a) whether markets or government is more reliable in providing efficient and equitable healthcare, (b) the balance between collective responsibility and individual choice, and (c) the legitimate scope of federal authority in personal economic decisions.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain TWO important internal divisions within the modern Democratic coalition and TWO within the modern Republican coalition. For each pair, what policy issue most starkly reveals the divide?`,
        solution: `**Within the Democratic coalition:**
1. **Progressives vs moderates on economic policy.** Progressives (Sanders, AOC) push Medicare for All, Green New Deal, wealth taxes; moderates (Biden, Pelosi) push incremental ACA expansion, market-based climate policy, smaller tax increases. *Revealing issue:* HEALTHCARE — single-payer Medicare for All vs improving the ACA.
2. **Activist young left vs older Democratic establishment on identity politics and foreign policy.** Younger Democrats are more vocal on racial justice, Palestinian rights, and decolonization; older Democrats remain more aligned with traditional U.S. alliance commitments (Israel, NATO). *Revealing issue:* the U.S. role in the Israeli-Palestinian conflict.

**Within the Republican coalition:**
1. **Traditional conservatives vs populist nationalists.** Traditional conservatives (Romney, Paul Ryan) favor free trade, robust foreign policy, immigration with reform; populist nationalists (Trump, Vance) favor tariffs and protectionism, immigration restriction, skepticism of foreign engagement. *Revealing issue:* TRADE — tariffs on China and the EU vs free-trade orthodoxy.
2. **Social/religious conservatives vs libertarians.** Religious conservatives prioritize restrictions on abortion, opposition to same-sex marriage, support for religious liberty exemptions; libertarians (Rand Paul, the Reason crowd) want minimal government in both economic AND social spheres. *Revealing issue:* DRUG POLICY (libertarians favor legalization; religious conservatives oppose) and ABORTION (libertarians often pro-choice; religious conservatives oppose).

These intra-party divides shape primary contests, congressional bargaining, and the long-run direction of each party.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Some scholars argue that the modern Republican party is no longer best described as "conservative" but as "populist nationalist," while the modern Democratic party has shifted from traditional liberalism to a more progressive orientation. (a) What is the evidence for this claim? (b) What forces are driving these shifts? (c) What are the political consequences for governing and for the two-party system?`,
        solution: `(a) **Evidence:**
- **Republican populist-nationalist shift:** Trump\'s 2016 campaign rejected several pillars of traditional conservatism — embraced TARIFFS rather than free trade, criticized military interventionism, defended Social Security and Medicare from cuts, attacked corporate elites and "globalists." Subsequent conservative figures (JD Vance, Josh Hawley) have continued this realignment with industrial policy, antitrust enforcement against tech, and immigration restriction. The party\'s geographic and demographic base has shifted from upper-middle-class suburbanites toward white working-class voters.
- **Democratic progressive shift:** Bernie Sanders\'s 2016 and 2020 primary campaigns mainstreamed Medicare for All, wealth taxes, the Green New Deal, and free college; younger Democrats elected to the House (AOC, Tlaib, Bowman, Ocasio-Cortez\'s "Squad") have pushed the party further left. Public opinion among Democratic voters has shifted on race, immigration, climate, and economic policy.

(b) **Driving forces:**
- **Globalization and economic dislocation** — manufacturing decline and stagnant working-class wages produced a populist backlash in BOTH parties.
- **Educational realignment** — college-educated voters have shifted toward Democrats; non-college whites have shifted toward Republicans, changing each party\'s economic and cultural priorities.
- **Demographic change** — growing nonwhite electorate has shifted Democratic priorities; white identity politics has shifted Republican priorities.
- **Social media** — empowers ideological extremes, weakens party gatekeepers (Trump bypassed the GOP establishment in 2016; Sanders mobilized small donors against Democratic establishment).
- **End of Cold War consensus** — bipartisan foreign-policy framework dissolved, opening space for both progressive and nationalist rethinking.

(c) **Political consequences:**
- **More volatile coalitions.** Each party is internally divided, producing primary challenges and coalition instability.
- **Difficulty governing.** Internal divisions make passing legislation harder; razor-thin majorities can be paralyzed by a single dissenter (Manchin and Sinema for Democrats; the House Freedom Caucus for Republicans).
- **Realignment of electoral coalitions.** White working-class voters → Republican; college-educated suburbanites → Democratic; new tensions over Hispanic and Asian-American voters whose alignment is in flux.
- **Pressure on the two-party system.** Although structural barriers (Electoral College, single-member districts) prevent third parties from winning, ideological dissatisfaction shows up as primary insurgencies, populist movements, and increasing voter frustration.
- **More executive and judicial action, less legislation.** Polarized parties cannot legislate, so policy battles move to executive orders, regulations, and the courts — increasing the stakes of presidential and judicial elections.

The long-run direction of both parties remains uncertain — the post-Trump GOP and post-Biden Democratic Party will reveal how durable these shifts are.` },
    ],
    cards: [
      { front: 'Political ideology — definition', back: 'A coherent set of beliefs about the role of government, the rights of individuals, and the goals of public policy. Shapes how people interpret news, evaluate candidates, and choose policies.', lessonPart: 1 },
      { front: 'Modern American liberalism — three core commitments', back: 'Active federal government, strong social safety net, robust civil rights protections, environmental regulation, progressive taxation. Roots in Progressive Era and New Deal.', lessonPart: 2 },
      { front: 'Modern American conservatism — three core commitments', back: 'Limited government, free-market economics, traditional social values, strong defense, federalism, originalist judicial philosophy. Roots in Goldwater movement and Reagan Revolution.', lessonPart: 3 },
      { front: 'Libertarianism', back: 'Minimal government in BOTH economic AND social spheres. Free markets + civil liberties + non-interventionist foreign policy. Often within the Republican coalition but distinct from traditional conservatism.', lessonPart: 4 },
      { front: 'Populist nationalism (modern)', back: 'Skeptical of free trade, immigration, and foreign intervention; defends working-class economic interests; often anti-elite and anti-establishment. Trump-Vance Republican faction.', lessonPart: 4 },
      { front: 'Progressives (modern Democratic)', back: 'Push Medicare for All, Green New Deal, wealth taxes, aggressive antitrust, expanded labor rights. Bernie Sanders, AOC, "the Squad." Pushes the party further left of moderate Democrats.', lessonPart: 4 },
      { front: 'Partisan sorting', back: 'Convergence of ideology and party identification. Almost all liberals are Democrats; almost all conservatives are Republicans. Major driver of contemporary polarization.', lessonPart: 5 },
      { front: 'Negative partisanship', back: 'When voters are motivated more by hostility to the opposing party than by enthusiasm for their own. Has grown sharply since the 1990s; deepens polarization.', lessonPart: 5 },
      { front: 'Educational realignment', back: 'Recent shift in which college-educated voters lean increasingly Democratic and non-college voters (especially whites) lean increasingly Republican. Changes the economic and cultural priorities of both parties.', lessonPart: 6 },
      { front: 'Liberal vs conservative on healthcare', back: 'Liberals: expand public insurance (Medicare expansion, single payer); cap out-of-pocket costs. Conservatives: deregulate, expand HSAs and high-deductible plans, block-grant Medicaid. Underlying disagreement: markets vs government.', lessonPart: 7 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'gov-public-opinion': {
    textContent: `## Public Opinion and Political Socialization

**Public opinion** is the aggregated attitudes of the public on political issues, candidates, and institutions. It both INFLUENCES and IS INFLUENCED BY government — politicians track polls obsessively, and government policies shape what voters care about and how they evaluate the political world.

### How Public Opinion Is Measured

- **Random-sample surveys.** A truly random sample of ~1,000 adults can produce estimates of national opinion accurate to within ±3 percentage points (the **margin of error** at 95% confidence).
- **Probability vs convenience sampling.** Probability sampling (every adult has a known chance of selection) produces valid inferences; convenience sampling (online opt-in, social media polls) produces biased results.
- **Question wording matters.** Subtle changes to wording can shift responses by 10–20 points. ("Death tax" vs "estate tax"; "welfare" vs "assistance to the poor".)
- **Question order.** Earlier questions can prime later answers.
- **Mode effects.** Phone, online, in-person interviews can produce different responses on socially sensitive topics.

### Political Socialization

The lifelong process by which individuals develop political beliefs and identities. Major agents:
- **Family** — strongest predictor of party identification, especially when both parents share a partisan orientation.
- **Schools** — civics education, exposure to peers, school culture.
- **Peers** — particularly influential in adolescence and young adulthood.
- **Media** — newspapers, television, social media; today young Americans get most political information from social media.
- **Religious institutions** — congregations shape both moral and political views.
- **Generational events** — formative political experiences (Vietnam, Watergate, 9/11, COVID, January 6) durably shape generational political attitudes ("political generations").

### Sources of Variation

Public opinion varies systematically by:
- **Region** — coasts more liberal; South and Plains more conservative.
- **Race and ethnicity** — large differences on perceptions of racial discrimination, policing, immigration.
- **Religion** — white Evangelicals strongly Republican; nonreligious voters strongly Democratic; Black Protestants strongly Democratic; Catholics roughly evenly split.
- **Age** — younger voters more liberal on social issues; older voters more concerned about Social Security, Medicare.
- **Education** — college-educated voters increasingly Democratic in recent cycles.
- **Income** — historically Republican-leaning at top; pattern has weakened recently.
- **Gender** — persistent **gender gap** with women leaning more Democratic since 1980.
- **Urban vs rural** — sharp divide; large cities heavily Democratic, rural areas heavily Republican.

### Public Opinion and Policy

There is generally a CORRELATION between public opinion and government policy — but not a perfect match. Studies (Page & Shapiro, Gilens) show:
- On many issues, federal policy responds to changes in MEDIAN voter opinion.
- On some issues, policy tracks economic elite preferences more closely than the median voter (especially on regulation, taxation, trade).
- On hot-button cultural issues (abortion, guns, immigration), policy is sticky and often lags or leads opinion depending on institutional barriers.

### Polling Pitfalls

- **Sampling bias** — landline-only samples missed cellphone-only households (younger, more diverse).
- **Nonresponse bias** — response rates have collapsed (from ~80% in the 1970s to ~5% today), raising questions about who actually answers polls.
- **Social desirability bias** — respondents misreport behaviors or attitudes they think are socially undesirable (e.g., the "Bradley effect" or under-reporting of Trump support in 2016 and 2020).
- **Likely-voter screens** — projecting from registered voters to actual voters is hard; polls have under-counted Republican turnout in recent presidential cycles.

### Why It Matters

Public opinion shapes elections, lobbying campaigns, presidential approval, and the politics of legislation. Politicians who ignore opinion lose elections; politicians who follow it slavishly become unable to lead. Understanding HOW opinion is formed and measured is essential to evaluating any claim about what "the American people" think.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `What is a **margin of error** in public opinion polling? If a poll of 1,000 likely voters reports 52% support for Candidate A with a margin of error of ±3 points, what does that mean?`,
        solution: `**Margin of error** is the range within which the true population value is likely to fall, given the random sample drawn. It is typically reported at the 95% confidence level — meaning that if the same poll were repeated many times, 95% of the resulting confidence intervals would contain the true population value.

**Interpretation of the example:**
- Reported support for Candidate A: 52%.
- Margin of error: ±3 points.
- 95% confidence interval: **49% to 55%**.
- This means we can be 95% confident the true support for Candidate A in the broader population lies somewhere between 49% and 55%.

**Important consequence:** if Candidate B is at 49% in the same poll (with the same MoE), the race is **statistically tied** — the candidates\' confidence intervals overlap (49–55 vs 46–52), so we cannot say with confidence that A is genuinely ahead.

The MoE depends primarily on sample SIZE; larger samples produce smaller MoE (with diminishing returns). MoE does NOT include systematic biases like nonresponse, weighting errors, or question-wording effects — actual polling error in modern elections often EXCEEDS the reported MoE.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Identify FOUR agents of political socialization and briefly explain the role of each.`,
        solution: `1. **Family** — the strongest single predictor of party identification, especially when both parents share a partisan orientation. Children typically inherit their family\'s party label and are most likely to retain it through adulthood.
2. **Schools** — civics education, history curricula, and the school\'s political climate influence students\' attitudes toward government, citizenship, and political engagement.
3. **Peers** — friends and social groups have particularly strong influence in adolescence and young adulthood, especially on social and cultural issues.
4. **Media** — the news outlets, social media platforms, podcasts, and television people consume shape what political information they receive and how they interpret it.
5. **Religious institutions** — congregations shape moral and political views; many religious traditions have distinctive political orientations (e.g., white Evangelicals lean Republican; Black Protestants lean Democratic).
6. **Major political events** — formative experiences (Vietnam, 9/11, COVID, January 6) durably shape political attitudes within "political generations."` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain how question wording can affect poll results. Give an example of two questions on the same topic that would likely produce significantly different responses.`,
        solution: `Question wording matters because subtle differences in framing trigger different mental associations, evoke different reference groups, and activate different values. Even when respondents have stable underlying attitudes, the SPECIFIC LANGUAGE of a poll question can shift responses by 10–20 percentage points.

**Examples (any of the following):**

1. **"Estate tax" vs "death tax."** Polls asking about repealing the "death tax" find substantially more support than polls asking about repealing the "estate tax" — even though they refer to the same policy. The phrase "death tax" was deliberately popularized by tax-cut advocates because it provokes a stronger negative reaction.

2. **"Welfare" vs "assistance to the poor."** Polls asking whether the country spends "too much on welfare" find higher disapproval than polls asking about "assistance to the poor" — same programs, different framing.

3. **Asking about "tax cuts" vs "tax increases."** People consistently prefer cuts over increases even when the budgetary effect is identical.

4. **Asking whether the U.S. should "send troops" vs "use military force."** "Send troops" sounds more invasive; "use military force" sounds more abstract — affects approval of intervention.

5. **"Defund the police" vs "redirect police funding to mental health services."** Same underlying policy, very different polling response.

**Practical lesson:** When evaluating polls, look at the EXACT question wording, not just the headline number. Reputable pollsters publish their full questionnaires and order; partisan polls often hide them.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Describe THREE demographic factors that strongly predict political opinion in the contemporary United States. For each, explain the typical direction and how strong the effect tends to be.`,
        solution: `1. **Race and ethnicity** — One of the SINGLE STRONGEST predictors of vote choice. Black voters have voted ~85–90% Democratic in every presidential election since 1964. Hispanic voters lean Democratic but with substantial Republican support (especially Cuban-American and recently Hispanic working-class men). Asian-American voters lean Democratic. White voters have shifted toward Republicans since the 1960s, especially non-college whites.

2. **Religion (especially white Evangelical Christianity)** — White Evangelicals vote ~75–80% Republican in recent presidential elections, one of the most cohesive voting blocs in American politics. Religiously unaffiliated ("nones") are heavily Democratic (~65–70%). Black Protestants lean strongly Democratic. Catholics are roughly evenly split, with some movement toward Republicans recently.

3. **Education (especially among white voters)** — A growing divide. White voters with a college degree are increasingly Democratic; white voters without a college degree lean strongly Republican. Among non-white voters the education gap is much smaller. The "diploma divide" has reshaped both parties since 2016.

**Other strong predictors:** GENDER (gender gap of 8–12 points, women more Democratic since 1980), URBAN/RURAL (sharp; cities heavily Democratic, rural areas heavily Republican), AGE (younger more liberal on social issues; older more concerned with retirement security).` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Modern political polls have systematically under-estimated Republican vote share in the 2016 and 2020 presidential elections. Identify THREE possible methodological reasons for this and ONE consequence for democratic politics.`,
        solution: `**Three methodological reasons:**

1. **Differential nonresponse / "shy Trump voter."** Trump supporters — especially in the white working class — may be less likely to participate in polls because of distrust of media and pollsters. If the people who DON\'T respond are systematically different from those who do (more Republican), surveys under-count Republican support. Pollster diagnostics show response rates have collapsed from 36% (1997) to under 5% (today), making nonresponse bias far more dangerous than statistical sampling error alone.

2. **Likely-voter modeling errors.** Pollsters convert "registered voter" or "adult" samples to "likely voter" samples by predicting WHO will actually turn out. Their models historically under-counted turnout among non-college whites (in 2016 and 2020) and may over-count engaged liberal voters who eagerly take surveys. Different turnout assumptions produce different headline results from the same raw data.

3. **Education weighting.** Earlier polls did not weight by education — a problem when education became a strong predictor of vote choice in 2016 (college-educated whites moved Democratic; non-college moved Republican). Polls that over-sampled college-educated respondents (who are easier to reach) without re-weighting under-counted Trump\'s base. Many pollsters added education weighting after 2016 — but errors recurred in 2020 in different states.

(Other plausible reasons: state-level vs national polling; cellphone vs landline coverage; over-reliance on online opt-in panels.)

**Consequence for democratic politics:** Systematically biased polls **distort campaign strategy, donor behavior, and media coverage** — campaigns invest in the wrong states; news outlets prepare narratives based on misleading expectations; voters develop expectations (e.g., that Clinton would win in 2016) that, when proven wrong, can fuel **distrust in democratic institutions** and conspiracy theories about election outcomes. Polling failures also hurt the public\'s ability to hold elected officials accountable to perceived voter preferences, since "the polls" — increasingly cited as evidence of public will — may not reflect that will. Pollsters are working hard to fix these issues; whether modern polling is reliable enough for high-stakes inferences remains open.` },
    ],
    cards: [
      { front: 'Public opinion — definition', back: 'The aggregated attitudes of the public on political issues, candidates, and institutions. Both shapes and is shaped by government action.', lessonPart: 1 },
      { front: 'Random sample (probability sample)', back: 'Sample drawn so that every member of the population has a known, non-zero chance of being selected. Required for valid statistical inference about the population.', lessonPart: 2 },
      { front: 'Margin of error', back: 'The range within which the true population value is likely to fall, typically at the 95% confidence level. Depends mainly on sample size; does NOT include systematic (non-sampling) biases.', lessonPart: 2 },
      { front: 'Why does question wording matter?', back: 'Subtle wording differences can trigger different associations, reference groups, and values. Can shift responses 10–20 points (e.g., "death tax" vs "estate tax"; "welfare" vs "assistance to the poor").', lessonPart: 2 },
      { front: 'Political socialization — definition', back: 'The lifelong process by which individuals develop political beliefs and identities. Major agents: family, schools, peers, media, religious institutions, generational events.', lessonPart: 3 },
      { front: 'Strongest predictor of party identification', back: 'Family — particularly when both parents share a partisan orientation. Children typically inherit their family\'s party label and largely retain it.', lessonPart: 3 },
      { front: 'Gender gap in voting', back: 'Persistent difference in vote choice between men and women, with women leaning more Democratic. Roughly 8–12 percentage points in recent presidential elections; emerged in 1980.', lessonPart: 4 },
      { front: 'Diploma divide / educational realignment', back: 'Among white voters, college-educated have shifted Democratic and non-college have shifted Republican since 2016. Did NOT exist before; now one of the strongest predictors of vote choice.', lessonPart: 4 },
      { front: 'Sources of polling error besides MoE', back: 'Nonresponse bias (low response rates), social desirability bias (lying about views), likely-voter modeling, mode effects (phone vs online), question wording. Often exceed reported MoE.', lessonPart: 5 },
      { front: 'Why does opinion not always translate into policy?', back: 'Institutional barriers (filibuster, separation of powers); intensity asymmetries (motivated minorities can outweigh apathetic majorities); wealth/lobbying influence; partisan gridlock. Median-voter influence is real but uneven.', lessonPart: 6 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'gov-parties-interest-groups': {
    textContent: `## Political Parties and Interest Groups

Political parties and interest groups are the two main intermediary institutions linking citizens to government. They mobilize voters, recruit candidates, develop policy positions, and advocate in the political process.

### Functions of Political Parties

1. **Recruit and nominate candidates** for office at every level.
2. **Mobilize voters** through registration drives, get-out-the-vote efforts, and persuasion.
3. **Articulate and aggregate interests** — bundle the demands of diverse constituencies into a coherent platform.
4. **Organize government** — once in power, parties organize Congress, staff the executive branch, and shape policy.
5. **Provide an electoral identity** — most voters use party as a heuristic for evaluating candidates and issues.

### The Two-Party System

The U.S. has had a stable TWO-PARTY system for nearly 200 years. The current Republican-Democratic alignment dates from the 1850s. The structural causes:
- **Single-member, plurality-winner districts** — only one winner per district, so third parties rarely win seats. **Duverger\'s Law:** plurality systems tend toward two parties.
- **Electoral College** — winner-take-all in 48 states forces voters to coordinate around two viable candidates.
- **Ballot access** — states make it difficult for third parties to get on the ballot.
- **Campaign finance** — major parties have decisive advantages in fundraising.
- **Cultural inertia** — voters are reluctant to "waste" their vote on a third party.

### Party Realignments

Periodic dramatic shifts in the parties\' coalitions:
- **1860s** — Republican party emerges and becomes dominant; Civil War realignment.
- **1896** — Republicans dominate; populist William Jennings Bryan loses.
- **1932** — New Deal realignment; Democrats build a coalition of working-class whites, Northern liberals, and (uncertainly) Southern conservatives.
- **1968 / Nixon\'s "Southern Strategy"** — Republicans capture the South over civil rights backlash.
- **2016** — Trump\'s populist-nationalist shift accelerates a realignment based on education and urban-rural divide.

### Interest Groups: Functions and Types

**Interest groups** are organizations that try to influence government policy on behalf of their members\' shared interests. Types:
- **Economic** — business associations (Chamber of Commerce, NAM), labor unions (AFL-CIO, SEIU), professional groups (AMA, ABA).
- **Public interest** — advocate broad public causes (Sierra Club, ACLU, Common Cause).
- **Single issue** — focus on one issue (NRA, NARAL, AARP).
- **Civil rights / identity** — NAACP, NOW, Human Rights Campaign.
- **Foreign policy / ideological** — AIPAC, Heritage Foundation, Brookings Institution.

### How Interest Groups Influence Policy

- **Lobbying** — direct contact with lawmakers and staff to shape legislation.
- **Campaign contributions** — through PACs, Super PACs, and 501(c)(4) "dark money" organizations.
- **Litigation** — bringing strategic cases to court (NAACP\'s legal campaign culminating in *Brown*; libertarian groups challenging regulations).
- **Mobilizing members** — encouraging them to call, write, vote.
- **Information** — providing technical research and policy analysis to overworked legislative staff.

### Citizens United and Campaign Finance

**Citizens United v. FEC (2010)** held that corporations and unions have a First Amendment right to make INDEPENDENT political expenditures (not coordinated with candidates). This dramatically expanded the role of money in elections through:
- **Super PACs** — can raise and spend unlimited amounts on independent expenditures (cannot coordinate with candidates).
- **501(c)(4) "dark money"** organizations — can engage in political spending without disclosing donors.
- **Direct contributions to candidates** are still capped (currently ~\\$3,300 per individual per candidate per election).

### Pluralism vs Elite Theory

- **Pluralism** — many groups compete; no group dominates; government is responsive to the balance of organized interests.
- **Elite theory** — wealthy individuals and corporate interests dominate policy outcomes; ordinary citizens have little influence (Gilens & Page, 2014).

The empirical truth lies somewhere between, varying by issue: salient consumer issues respond more to mass opinion, while technical regulatory issues track elite interests more closely.

### Why It Matters

Parties and interest groups together do most of the practical work of representation between elections — candidate recruitment, agenda setting, mobilization, and policy shaping. Their internal politics, biases, and resource imbalances shape what government does and does not do.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Identify THREE functions of political parties in the United States.`,
        solution: `1. **Recruit and nominate candidates** for elected office at every level — local, state, and federal. Parties identify and support potential candidates and run primary elections to choose nominees.

2. **Mobilize voters** through registration drives, voter outreach, advertising, and get-out-the-vote operations. Parties have ground game infrastructure that few individual candidates could replicate alone.

3. **Articulate and aggregate interests** — parties bundle the demands of diverse constituencies (labor, business, religious groups, regional interests) into a coherent platform. This reduces the number of choices voters face from dozens of single-issue groups to a manageable two-party choice.

(Other valid: organize Congress and the bureaucracy when in power; provide voters with an electoral identity; serve as a check on the opposing party in government.)` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `What is **Duverger\'s Law**, and how does it explain the persistence of the U.S. two-party system?`,
        solution: `**Duverger\'s Law** states that **single-member, plurality-winner electoral systems** (where only one candidate wins per district by getting the most votes) tend to produce TWO-PARTY systems over time. In contrast, proportional representation systems tend to produce multi-party systems.

**Mechanism:** When only one winner exists per district, voters who support a third party recognize that voting for them is likely to "waste" their vote — or worse, divide their preferred coalition and elect their LEAST-preferred candidate. Strategic voters therefore consolidate around the two most viable parties, even if neither perfectly matches their preferences. Politicians similarly join one of the two major parties to be electorally viable.

**Application to the U.S.:**
- Single-member House districts.
- Senate (essentially single-member at the state level).
- Electoral College winner-take-all (in 48 states).
- Plurality presidential primaries.
- Restrictive ballot access for third parties.

**Result:** The Republican-Democratic duopoly has persisted since the 1850s. Third parties (Bull Moose, Reform, Green, Libertarian) have at most influenced major-party platforms or spoiled a single election (Perot 1992, Nader 2000) but have never won the presidency or significant House caucuses.

Duverger\'s Law also predicts that REPLACING our system with proportional representation (in any form) would likely produce more parties.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Describe TWO ways interest groups influence government policy that do NOT involve direct campaign contributions. Give an example of each.`,
        solution: `1. **Lobbying.** Direct contact with legislators and their staff to advocate positions, supply technical information, and draft proposed amendments. Lobbyists provide overworked staff with research, model legislation, and political intelligence about constituents and other groups\' positions. *Example:* The American Medical Association (AMA) lobbies on Medicare reimbursement rates and physician scope-of-practice rules; pharmaceutical companies lobby the FDA on drug-approval timelines.

2. **Strategic litigation.** Bringing or supporting court cases designed to advance the group\'s policy goals. The interest group identifies a sympathetic plaintiff, recruits skilled lawyers, and pursues litigation that produces favorable precedent. *Example:* The NAACP\'s Legal Defense Fund spent decades building a case against school segregation that culminated in *Brown v. Board of Education* (1954). The American Civil Liberties Union (ACLU) has litigated First Amendment cases for over a century. The Pacific Legal Foundation challenges environmental regulations on property-rights grounds.

(Other valid examples: grassroots mobilization — encouraging members to call/write Congress; producing technical research that shapes the policy debate; organizing protests and public demonstrations; running issue-advertising campaigns; coalition-building with other groups.)` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain the holding of *Citizens United v. FEC* (2010) and its principal consequence for campaign finance.`,
        solution: `**Holding:** The Supreme Court (5–4, Kennedy) held that **corporations and unions have a First Amendment right to make INDEPENDENT political expenditures** — money spent advocating for or against a candidate WITHOUT coordinating with the candidate\'s campaign. The Court reasoned that political speech is at the core of the First Amendment, and the identity of the speaker (individual, corporation, union, or association) cannot justify suppressing it. Congress retained the power to require disclosure of expenditures and to ban DIRECT contributions to candidates (which remain capped).

**Principal consequence — the rise of Super PACs and dark money:**
1. **Super PACs** can raise and spend UNLIMITED amounts of money on independent expenditures (ads, mailers, organizing) so long as they do not coordinate with candidates. They have become the dominant vehicle for large political spending.
2. **501(c)(4) "social welfare" organizations** can engage in political spending without disclosing their donors — "dark money" — as long as politics is not their primary purpose.
3. **Spending has exploded.** Total outside spending in federal elections rose from ~\\$140 million in 2008 to over \\$2 billion in 2020.
4. **Donor concentration.** A small number of mega-donors (the Koch network, George Soros, Sheldon Adelson, Tom Steyer) account for a disproportionate share of independent expenditures, raising concerns about disproportionate influence by the wealthy.

**Critics** argue Citizens United has corrupted democracy by amplifying wealthy voices and undermining political equality. **Defenders** argue that independent expenditures are speech, that disclosure remains a check on corruption, and that critics overstate the responsiveness of voters to spending. Subsequent cases (*McCutcheon v. FEC*, 2014) have further loosened campaign-finance limits.

Reform proposals include constitutional amendments to overrule Citizens United, mandatory disclosure of dark-money donors (DISCLOSE Act), and public financing of elections — but face political and constitutional obstacles.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Compare **pluralism** and **elite theory** as accounts of how interest groups affect American policy. Identify ONE policy area where each theory better fits the evidence and explain why.`,
        solution: `**Pluralism** holds that government policy reflects the COMPETING demands of many organized groups, none of which dominates. As different issues mobilize different coalitions, no single elite controls the policy process; the result is a rough representation of broader social interests through interest-group competition.

**Elite theory** holds that policy is dominated by a small number of WEALTHY INDIVIDUALS AND CORPORATE INTERESTS, with ordinary citizens and the public interest having little independent influence. Empirical work by Martin Gilens and Benjamin Page (2014) found that average citizens\' preferences had near-zero influence on policy outcomes once economic-elite preferences were controlled for, supporting an elite (oligarchic) view.

**Pluralism fits better — civil rights and same-sex marriage:**
The expansion of civil rights for racial minorities (1950s–60s) and the recognition of same-sex marriage (Obergefell, 2015) involved organized advocacy by the NAACP, ACLU, Lambda Legal, and Human Rights Campaign confronting opposition from Southern segregationists, social conservatives, and religious organizations. These outcomes responded to grassroots organizing, mass mobilization, and broad shifts in public opinion — not to the preferences of economic elites (many of whom were initially indifferent or opposed).

**Elite theory fits better — financial deregulation and tax policy:**
The deregulation of finance (Gramm-Leach-Bliley, 1999; commodity-derivatives deregulation, 2000) and major tax cuts favoring high-income earners (Bush 2001/2003, Trump 2017) tracked closely with the preferences of business leaders, financial executives, and wealthy donors — and were unpopular or inert in mass opinion. Even after the 2008 financial crisis, financial-industry preferences shaped Dodd-Frank\'s implementation. Lobbying spending by financial firms dwarfed counter-mobilization by consumer or labor groups.

**Synthesis:** The empirical truth lies between the extremes and varies by issue.
- **Salient cultural issues** (civil rights, marriage, abortion) often follow mass opinion or organized social movements — pluralism better describes them.
- **Technical regulatory issues** (banking, antitrust, drug pricing, tax policy) often track elite preferences more closely — elite theory better describes them.
- **Issue salience matters:** when broad public attention is high, mass opinion has more influence; when attention is low, organized economic interests dominate.

This explains why public-interest reformers often try to RAISE the salience of technical issues (e.g., Elizabeth Warren\'s consumer-finance advocacy) — to shift the politics from elite-dominated to more pluralistic.` },
    ],
    cards: [
      { front: 'Five core functions of political parties', back: 'Recruit/nominate candidates; mobilize voters; articulate and aggregate interests; organize government; provide voters with electoral identity (heuristic for evaluating candidates).', lessonPart: 1 },
      { front: 'Duverger\'s Law', back: 'Single-member, plurality-winner electoral systems tend to produce two-party systems. Strategic voters consolidate around the two most viable parties to avoid wasting votes. Explains the U.S. two-party duopoly.', lessonPart: 2 },
      { front: 'Critical / realigning election', back: 'A presidential election that produces lasting changes in the parties\' coalitions and dominant ideology. Examples: 1860 (Civil War), 1896, 1932 (New Deal), 1968 (Southern Strategy).', lessonPart: 3 },
      { front: 'Five types of interest groups', back: 'Economic (business, labor, professional); public interest; single-issue; civil rights / identity; foreign policy / ideological. Each pursues different goals and uses different tactics.', lessonPart: 4 },
      { front: 'Lobbying', back: 'Direct contact between interest-group representatives and lawmakers/staff to influence legislation. Includes providing information, drafting amendments, and political intelligence. Regulated by the Lobbying Disclosure Act (1995).', lessonPart: 5 },
      { front: 'Political Action Committee (PAC)', back: 'Group that raises money to support candidates. Can contribute up to \\$5,000 directly to a candidate per election. Connected PACs are sponsored by corporations, unions, or trade associations.', lessonPart: 5 },
      { front: 'Super PAC', back: 'A political-action committee that can raise and spend UNLIMITED amounts on independent expenditures (no coordination with candidates). Created by *Citizens United* (2010) and *SpeechNow.org v. FEC* (2010).', lessonPart: 6 },
      { front: 'Citizens United v. FEC (2010) — holding', back: 'Corporations and unions have a First Amendment right to make independent political expenditures. Gave rise to Super PACs and dramatically expanded outside spending in elections.', lessonPart: 6 },
      { front: 'Pluralism vs elite theory', back: 'Pluralism: many groups compete; policy reflects balance of organized interests. Elite theory: wealthy individuals and corporations dominate; ordinary citizens have little influence (Gilens & Page, 2014). Truth varies by issue.', lessonPart: 7 },
      { front: 'Iron triangle', back: 'Stable alliance among (1) congressional subcommittee, (2) federal agency, and (3) interest group in the same policy area. Each side benefits from the relationship; insulated from outside oversight.', lessonPart: 7 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'gov-voting-elections': {
    textContent: `## Voting and Elections

Elections are the central mechanism through which Americans choose their leaders and influence policy. The United States holds elections at every level — federal, state, local — making it one of the most election-saturated democracies in the world. Yet **turnout** is comparatively low, and the rules governing elections vary widely across states.

### Who Can Vote

The Constitution originally left voting eligibility to states, which generally restricted it to white, male, property-owning Christians. Federal expansion has come through constitutional amendments and statutes:
- **15th Amendment (1870):** cannot deny the vote on account of race.
- **17th Amendment (1913):** direct election of senators.
- **19th Amendment (1920):** cannot deny the vote on account of sex.
- **24th Amendment (1964):** banned poll taxes in federal elections.
- **Voting Rights Act of 1965:** banned literacy tests; required federal preclearance for election-law changes in jurisdictions with discrimination histories.
- **26th Amendment (1971):** voting age set at 18.

Today, all U.S. citizens 18 and older have the constitutional right to vote, with limited exceptions for some states\' laws on people with felony convictions.

### Voter Turnout

- **Presidential elections:** roughly 60% of eligible voters turn out (66% in 2020, the highest in over a century).
- **Midterm elections:** about 40%.
- **State and local elections:** often less than 25%.
- **U.S. turnout LAGS most other established democracies** that have parliamentary systems with proportional representation, automatic registration, and weekend or holiday voting.

### Predictors of Voter Turnout

- **Education** — strongest predictor; college graduates vote at much higher rates than non-graduates.
- **Age** — older voters turn out more reliably; young voters chronically under-vote.
- **Income** — higher-income voters turn out more.
- **Race** — turnout gaps have narrowed but persist; white turnout exceeds Black turnout exceeds Hispanic and Asian turnout in most cycles.
- **Civic engagement** — union members, churchgoers, and members of organizations vote more.
- **Salience** — close races and high-stakes issues drive turnout.

### Election Types

- **Primary elections** — voters within a party choose the party\'s nominee. **Closed** primaries (only registered party members can vote), **open** (any voter can choose either party\'s primary), or **semi-closed** variants. Primaries amplify the influence of partisan, ideologically extreme voters.
- **Caucuses** — meetings of party members to choose nominees. Mostly replaced by primaries; Iowa famously kept caucuses for decades.
- **General elections** — voters across parties choose between major-party nominees and (sometimes) minor-party candidates.
- **Special elections** — to fill mid-term vacancies.
- **Ballot initiatives and referendums** — direct democracy at the state and local level.

### The Electoral College

Article II created the Electoral College as the constitutional mechanism for electing the president:
- Each state has electors equal to its **House delegation + 2 senators** (plus 3 for D.C. via the 23rd Amendment).
- A candidate needs **270 of 538** electoral votes to win.
- Most states (48 + D.C.) use winner-take-all allocation. Maine and Nebraska use the **congressional district method**.
- If no candidate gets 270, the House decides (each state delegation gets one vote).
- The Electoral College CAN produce a winner who lost the national popular vote (1824, 1876, 1888, 2000, 2016).

### Voting Rules and Recent Battles

States control most voting rules, leading to wide variation:
- **Voter ID laws** — supporters argue they prevent fraud; critics argue they suppress turnout among low-income, minority, and elderly voters who are less likely to have IDs.
- **Mail and early voting** — expanded dramatically in 2020 due to COVID; partially rolled back since.
- **Felon disenfranchisement** — varies sharply by state (Maine and Vermont allow voting from prison; Florida required a constitutional amendment in 2018 to restore felon voting rights).
- **Same-day registration / automatic registration** — adopted by some states to expand turnout; rejected by others.

### Shelby County v. Holder (2013) and Voting Rights

Struck down the **preclearance formula** of Section 4(b) of the Voting Rights Act, effectively gutting Section 5 (which had required Justice Department preclearance for election-law changes in covered jurisdictions). After Shelby, several states with histories of discrimination passed strict voter ID laws, purged voter rolls, and closed polling places — practices civil-rights groups argue have suppressed minority votes.

### Why It Matters

Elections — and the rules governing them — determine who holds power. Small changes in turnout, registration, district lines, and voter eligibility can swing close elections and decisively shape policy outcomes for millions.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Identify THREE constitutional amendments that expanded voting rights and explain what each did.`,
        solution: `1. **15th Amendment (1870):** Prohibits denying the vote on account of "race, color, or previous condition of servitude." Was widely circumvented in the South for nearly a century through poll taxes, literacy tests, white primaries, and intimidation; finally enforced effectively only after the Voting Rights Act of 1965.

2. **19th Amendment (1920):** Prohibits denying the vote on account of sex — gave women the constitutional right to vote nationwide. Culmination of nearly a century of suffrage activism (Seneca Falls, 1848 → 19th Amendment, 1920).

3. **24th Amendment (1964):** Banned poll taxes in federal elections. Followed by *Harper v. Virginia Board of Elections* (1966), which extended the ban to state elections.

4. **26th Amendment (1971):** Set the voting age at 18, in response to demands during the Vietnam War that those drafted to fight should also be eligible to vote.

(Also valid: 17th Amendment (1913) on direct election of senators; 23rd Amendment (1961) gave D.C. residents electoral votes.)` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `What is the **Electoral College**, and how many electoral votes does a candidate need to win the presidency?`,
        solution: `The **Electoral College** is the constitutional mechanism for electing the President of the United States, established by Article II of the Constitution. Each state is allocated **electors equal to its House delegation plus two senators** (so a state like California has 54 electors — 52 House seats + 2 senators; Wyoming has 3 — 1 House seat + 2 senators). The 23rd Amendment (1961) gives Washington, D.C. 3 electors.

Total electors: **538** (435 House + 100 Senate + 3 D.C.).

A candidate needs a **MAJORITY = 270** electoral votes to win the presidency.

Most states (48 + D.C.) use **winner-take-all** allocation: the candidate winning the state\'s popular vote gets all of the state\'s electors. Maine and Nebraska use the **congressional district method** (one elector per congressional district plus two for the statewide winner), making it possible to split a state\'s electors.

If no candidate reaches 270, the **House of Representatives** chooses the president, with each state delegation casting ONE vote — a procedure used twice (1800 and 1824) and a contingency that is occasionally raised but unlikely under modern conditions.

Because of the winner-take-all rule and population distribution, the Electoral College CAN produce a winner who lost the national popular vote — happened in 1824, 1876, 1888, 2000 (Bush), and 2016 (Trump).` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain why **voter turnout** in the United States is lower than in most other established democracies. Give THREE structural or cultural reasons.`,
        solution: `1. **Elections are held on Tuesdays and are not federal holidays.** Most other democracies vote on weekends or declare a national holiday. American workers must take time off, find childcare, and travel to polling places — barriers that disproportionately affect low-income workers without flexible schedules.

2. **Voters are responsible for registering, often well in advance.** Most other established democracies have AUTOMATIC voter registration (the government registers all eligible adults). U.S. registration deadlines (sometimes 30 days before an election) and inconsistent online procedures depress turnout, particularly among young, low-income, and mobile voters.

3. **Frequent and complex elections.** Americans face elections every year for many offices and ballot questions; the resulting cognitive burden and "voter fatigue" depresses turnout, especially for non-presidential races.

4. **Single-member, winner-take-all districts** mean many voters in non-competitive districts feel their vote does not count. Proportional representation systems give every vote weight in the legislature, increasing turnout.

5. **Lower party mobilization in safe districts.** Political parties focus mobilization in swing states/districts, leaving voters in safe areas less contacted.

6. **Voter ID laws and polling-place closures** in some states impose extra costs on voting (especially for minority and low-income voters).

7. **Cultural disengagement.** Lower civic education, less union membership, and more political cynicism reduce participation.

(Other valid factors: felon disenfranchisement, mail-voting restrictions, gerrymandered districts.)` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare **closed** and **open** primary elections. What are the advantages and disadvantages of each system?`,
        solution: `**Closed primary:** Only voters who are REGISTERED MEMBERS of a party can vote in that party\'s primary. Independents and members of other parties are excluded.

**Open primary:** ANY registered voter may choose which party\'s primary to vote in (typically can vote in only one party\'s primary in a given election). No party affiliation required.

**(Semi-closed and other variants exist — independents allowed in but not members of opposing parties.)**

**Advantages of closed primaries:**
- **Party control.** Parties can ensure only committed members choose their nominees, preventing outsiders from picking weak candidates or "raiding" to nominate someone unelectable.
- **Coherent party brand.** Nominees tend to reflect party priorities more accurately.
- **Stronger party loyalty.** Closed primaries can encourage voters to formally affiliate with a party.

**Disadvantages of closed primaries:**
- **Excludes independents.** Roughly 40% of American voters identify as independents and cannot participate in nominating contests, reducing democratic input.
- **Empowers more ideologically extreme primary voters.** Closed-primary voters tend to be more partisan and ideological than the general electorate, pulling nominees away from the median voter.
- **Can produce nominees who are too extreme to win general elections.**

**Advantages of open primaries:**
- **Includes more voters,** especially independents.
- **May produce more moderate nominees** who appeal to a broader cross-section of the electorate.
- **More democratic** in a small-d sense — fewer barriers to participation.

**Disadvantages of open primaries:**
- **Strategic voting / "raiding."** Voters from one party can cross over to vote in the other party\'s primary, potentially nominating a weak candidate (e.g., "Operation Chaos" calls in 2008 from Limbaugh to Republican voters to vote in Democratic primaries).
- **Weakens party identity and discipline.**
- **Can produce nominees who do not represent the party\'s core members.**

**Real-world note:** California and Washington use a **non-partisan top-two primary** — all candidates from all parties run on a single ballot, and the top two finishers (regardless of party) advance to the general election. Designed to produce more moderate nominees; produces same-party general elections in safe districts.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `*Shelby County v. Holder* (2013) struck down the preclearance formula of the Voting Rights Act. (a) Explain what preclearance was and which provision of the VRA established it. (b) Why did the Court strike it down? (c) What has been the practical effect on voting laws in the United States since 2013?`,
        solution: `(a) **Preclearance** required that certain state and local jurisdictions — those with documented histories of voting discrimination — submit any change in voting laws or procedures (new voter ID laws, polling-place changes, redistricting maps) to the **U.S. Department of Justice or the U.S. District Court for D.C.** for advance approval BEFORE the change could take effect. Established in **Section 5** of the Voting Rights Act of 1965, with the COVERAGE FORMULA (which jurisdictions were subject to preclearance) in **Section 4(b)**. Approximately nine states (mostly Southern) and parts of others were covered.

(b) **Why the Court struck it down (Roberts, 5–4):** The majority held that the Section 4(b) coverage formula was UNCONSTITUTIONAL because it relied on data from the 1960s and 1970s — racial discrimination patterns from decades earlier — without sufficient updating. Roberts argued that "things have changed in the South" and that Congress could not impose preclearance based on outdated assumptions about which jurisdictions still discriminated. The Court did not strike down Section 5 itself but, because Section 5 has no operative coverage formula, it became effectively dormant. **Congress has not passed an updated formula** despite proposed legislation (John Lewis Voting Rights Advancement Act).

The dissent (Ginsburg) argued the majority had ignored extensive evidence Congress had compiled in 2006 of CONTINUING discrimination in covered jurisdictions and that "throwing out preclearance when it has worked and is continuing to work to stop discriminatory changes is like throwing away your umbrella in a rainstorm because you are not getting wet."

(c) **Practical effects since 2013:**

1. **Strict voter ID laws** in covered states (Texas, North Carolina, Georgia, Alabama) — some struck down by federal courts, others survived. North Carolina\'s 2013 law was struck down by the Fourth Circuit as targeting Black voters "with almost surgical precision."

2. **Polling-place closures.** Hundreds of polling places have closed in covered jurisdictions, often disproportionately in minority neighborhoods. The Leadership Conference on Civil Rights documented over 1,600 polling places closed between 2012 and 2018 in formerly covered states.

3. **Voter roll purges.** Several covered states implemented aggressive purging of inactive voters (Ohio\'s "supplemental process" upheld in *Husted v. APRI*, 2018; Georgia\'s "exact match" laws).

4. **Congressional redistricting** in covered states proceeded without preclearance review; courts have struck down some maps as racial gerrymanders.

5. **Increased burden on individual litigants.** Section 2 of the VRA still allows lawsuits AFTER the fact, but plaintiffs must prove discriminatory intent or effect — far slower and more expensive than preclearance.

The political fight over voting rights has shifted to state legislatures, state courts, and Congress. Federal legislation (Freedom to Vote Act, John Lewis Act) has been blocked by Senate filibuster. Roberts\'s prediction that "things have changed in the South" has been contested by post-2013 voting-rights litigation showing many of the same discriminatory patterns the VRA was designed to address.` },
    ],
    cards: [
      { front: 'Voter eligibility today', back: 'All U.S. citizens 18 and older have the constitutional right to vote, with limited state restrictions on people with felony convictions. Established through the 15th, 19th, 24th, and 26th Amendments + the Voting Rights Act.', lessonPart: 1 },
      { front: 'Voting Rights Act of 1965', back: 'Banned literacy tests; required federal preclearance for election-law changes in jurisdictions with discrimination histories (Section 5). Dramatically increased Black voter registration. Preclearance formula struck down in Shelby County (2013).', lessonPart: 1 },
      { front: 'Typical U.S. voter turnout', back: 'Presidential elections: ~60% (66% in 2020). Midterm elections: ~40%. Local elections: often <25%. Lower than most other established democracies.', lessonPart: 2 },
      { front: 'Strongest single predictor of voter turnout', back: 'EDUCATION. College graduates vote at much higher rates than non-graduates across all races, ages, and income groups. Age and income are also strong predictors.', lessonPart: 2 },
      { front: 'Closed vs open primary', back: 'Closed: only registered party members can vote in that party\'s primary. Open: any voter can choose which party\'s primary to vote in. Closed empowers more ideological voters; open includes independents.', lessonPart: 3 },
      { front: 'Electoral College — total and threshold', back: '538 electors total (435 House + 100 Senate + 3 D.C. via 23rd Amendment). 270 needed to win the presidency. Each state has electors equal to its House + Senate delegation.', lessonPart: 4 },
      { front: 'Winner-take-all in the Electoral College', back: '48 states + D.C. give all their electors to the candidate winning the state\'s popular vote. Maine and Nebraska use the congressional district method, allowing electors to split. Drives Electoral-College/popular-vote divergence.', lessonPart: 4 },
      { front: 'Elections won without the popular vote', back: '1824, 1876, 1888, 2000 (Bush), 2016 (Trump). Result of the winner-take-all Electoral College and population distribution. Has fueled calls for reform (National Popular Vote Interstate Compact).', lessonPart: 4 },
      { front: 'Shelby County v. Holder (2013)', back: 'Struck down the preclearance coverage formula in Section 4(b) of the Voting Rights Act, effectively dormant Section 5. Court reasoned formula relied on outdated 1960s-70s data. Congress has not passed an updated formula.', lessonPart: 5 },
      { front: 'Voter ID laws', back: 'State laws requiring voters to show identification at the polls. Strict ID laws expanded after Shelby County. Supporters argue they prevent fraud; critics argue they suppress turnout among low-income, minority, and elderly voters.', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'gov-media-technology': {
    textContent: `## Media, Technology, and American Politics

The media is sometimes called the "fourth branch" of government — without formal constitutional power, but with enormous practical influence on what citizens know, how they evaluate candidates, and how government operates. The rise of cable, the internet, and social media has dramatically reshaped American political communication in ways that affect virtually every aspect of democratic politics.

### Functions of the Media in Democratic Politics

1. **Reporter** — provide news about government, candidates, and policy.
2. **Watchdog** — investigate and expose corruption, abuse of power, and incompetence.
3. **Agenda setter** — by deciding what to cover and how prominently, the media shapes what the public considers important.
4. **Gatekeeper** — selects which stories, voices, and perspectives reach the audience.
5. **Forum / public square** — provides space for political debate, candidate communication, and citizen response.

### Constitutional Foundation

The First Amendment\'s **Free Press Clause** protects journalists from government censorship. Doctrine includes:
- **No prior restraint** absent extraordinary justification (*New York Times v. United States*, 1971 — Pentagon Papers).
- **Strong protection for criticism of public officials** (*New York Times v. Sullivan*, 1964 — established the "actual malice" standard for defamation suits by public officials).
- **Limited regulation of broadcast** (*Red Lion v. FCC*, 1969 — fairness doctrine permissible because of scarcity of broadcast spectrum; doctrine repealed by FCC in 1987).

### From Mass Media to Fragmented Media

- **Pre-1980s:** Three broadcast networks (ABC, CBS, NBC) and a handful of major newspapers reached most Americans with similar content. Common informational base across the political spectrum.
- **1980s–1990s:** Rise of CABLE NEWS (CNN founded 1980, Fox News 1996, MSNBC 1996). 24-hour news cycle and ideologically distinctive programming.
- **2000s:** RISE OF THE INTERNET. Online news sites, blogs, and aggregators challenge traditional gatekeepers.
- **2010s onward:** SOCIAL MEDIA dominant — Facebook, Twitter/X, YouTube, TikTok. Algorithms personalize content; news increasingly arrives through social feeds rather than direct visits to news sites.

### Effects of Media Fragmentation

- **Echo chambers and filter bubbles.** Algorithms show users content matching their existing views, reducing exposure to opposing perspectives.
- **Partisan media.** Fox News (conservative) and MSNBC (liberal) frame the same events very differently. Heavy consumers of partisan news hold more polarized views than light consumers.
- **Erosion of shared facts.** Different audiences inhabit different informational worlds, making bipartisan compromise harder when basic factual premises are disputed.
- **Decline of local news.** Newspaper revenue collapsed; over 2,500 U.S. newspapers have closed since 2005, creating "news deserts." Local accountability journalism has shrunk dramatically.
- **Misinformation and disinformation.** False or misleading content spreads rapidly through social media; fact-checking lags. Foreign actors (Russia, China) and domestic operators have exploited this.

### How Citizens Use Media Today

- **Younger Americans** get most political news from social media (TikTok, Instagram, YouTube). They are LESS likely to read newspapers or watch traditional broadcast news.
- **Older Americans** still rely heavily on television (cable and broadcast).
- **Cross-partisan exposure** has decreased; partisans increasingly inhabit separate informational ecosystems.
- **Trust in media has collapsed.** Gallup polls show trust in mass media has fallen from ~70% in the 1970s to ~30% today, with sharp partisan divides.

### Campaigns and Media

- **TV ads** still dominate spending but are losing effectiveness as audiences fragment.
- **Digital ads** allow microtargeting — different ads to different demographic and behavioral segments, hard for journalists to monitor.
- **Earned media** (free coverage from news stories) is more valuable than paid ads; Trump\'s 2016 campaign was a master class in generating coverage without spending.
- **Social media direct communication** lets candidates bypass traditional gatekeepers; tweets and posts become news themselves.

### Government and Tech Platforms

A new policy frontier:
- **Section 230 of the Communications Decency Act (1996)** shields online platforms from liability for user-generated content. Both parties have proposed reforms — Republicans worried about "censorship," Democrats worried about misinformation.
- **Antitrust action.** DOJ and FTC suits against Google, Meta, Amazon, and Apple raise questions about market dominance and democratic implications.
- **Content moderation** debates intensified during COVID and around the 2020 and 2024 elections.
- **AI and deepfakes** raise new threats to information integrity.

### Why It Matters

The media environment shapes WHAT issues are politically salient, HOW candidates are perceived, WHETHER citizens have accurate information, and HOW political participation occurs. Understanding the media is essential to understanding the practical operation of American democracy in the 21st century.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Identify FOUR functions the media serves in a democratic society.`,
        solution: `1. **Reporter:** Provides news about government actions, elections, candidates, and policy debates so citizens can be informed.

2. **Watchdog:** Investigates and exposes corruption, abuse of power, fraud, and incompetence in government and other powerful institutions. Examples: Watergate reporting by the Washington Post; Pulitzer-winning investigations of police misconduct, financial scandals, and government failures.

3. **Agenda setter:** By deciding what to cover and how prominently, the media shapes what the public and policymakers consider important. Issues that get sustained media attention rise on the political agenda; issues that get little coverage often languish.

4. **Gatekeeper:** Selects which stories, voices, and perspectives reach the audience out of the universe of potentially newsworthy information. This power has shifted with the rise of social media but remains significant for major news organizations.

5. **Public forum:** Provides space for political debate, candidate communication, and citizen response (op-eds, letters, comments, social media interaction).

(Any four of these are valid.)` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `What is the **"fourth branch"** of government and why is it called that?`,
        solution: `The "fourth branch" is the PRESS / MEDIA — newspapers, television, radio, and digital news organizations.

It is called the "fourth branch" because, although the media has NO formal constitutional power, it exerts enormous practical influence on government:
- Investigates and exposes wrongdoing (watchdog function).
- Shapes the political agenda by deciding what to cover.
- Influences public opinion by framing issues and candidates.
- Holds officials accountable through scrutiny and reporting.

The First Amendment\'s Free Press Clause protects this informal "branch" from government interference, recognizing the media\'s essential role in democratic accountability. The phrase is sometimes attributed to Edmund Burke (referring to the Press Gallery at Parliament) or to Thomas Carlyle.

The term implicitly compares the media\'s political importance to the three constitutional branches (legislative, executive, judicial), even though it is not part of the government — and indeed must remain independent of government to perform its function effectively.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain how the rise of cable news (1980s–1990s) and social media (2010s) has fragmented American political communication. What are TWO consequences of this fragmentation for democratic politics?`,
        solution: `**Pre-fragmentation (mid-20th century):** Three broadcast networks (ABC, CBS, NBC) and a handful of major newspapers reached most Americans with similar content. Despite editorial differences, the vast majority of Americans consumed roughly the same news, framed in roughly similar ways, providing a **common informational base** across the political spectrum. Network news anchors (Walter Cronkite) had near-universal reach and trust.

**Cable news era (1980s–1990s):** CNN (1980), Fox News (1996), and MSNBC (1996) introduced 24-hour news cycles. Fox and MSNBC developed distinctive ideological orientations (conservative and liberal respectively), giving partisan audiences news framed to match their priors. Audience segmentation began.

**Social media era (2010s onward):** Facebook, Twitter/X, YouTube, TikTok. Algorithmic personalization shows users content based on their past engagement, creating individualized information feeds. News reaches most younger Americans through social media rather than direct visits to news sites.

**Two consequences:**

1. **Echo chambers and polarization.** Different audiences inhabit different informational worlds. Heavy Fox News viewers and heavy MSNBC viewers receive different facts, framing, and emphasis on the same events. Algorithms reinforce existing views by showing more of the same. This deepens partisan polarization and makes bipartisan compromise harder when the two sides do not share basic factual premises (e.g., on COVID, climate change, election integrity, Ukraine).

2. **Erosion of shared reality and trust in media.** When the major news outlets disagree about basic facts and partisan voters trust only co-partisan sources, citizens lose confidence in journalism generally. Gallup polls show trust in mass media has collapsed from ~70% in the 1970s to ~30% today, with sharp partisan divides. This makes it harder for journalism to fulfill its watchdog and informational functions.

(Other consequences: rise of misinformation and conspiracy theories; decline of local news creating "news deserts"; growing influence of partisan podcasts and influencers; decreased newspaper revenue and reporting capacity.)` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain the holding and significance of *New York Times v. Sullivan* (1964). Why is this case considered a cornerstone of modern press freedom?`,
        solution: `**Holding:** A public official cannot recover damages for a defamatory statement about his official conduct UNLESS he proves the statement was made with **"actual malice"** — that is, with **knowledge of its falsity** OR with **reckless disregard** for whether it was true or false. Mere negligence by the publisher is not enough.

**Background:** The case arose from a paid advertisement in the New York Times by civil rights supporters criticizing the conduct of police officials in Montgomery, Alabama during civil rights demonstrations. The ad contained minor factual errors. L.B. Sullivan, the Montgomery police commissioner, sued for defamation under Alabama state law and won \\$500,000 in damages — a massive sum at the time. The case was part of a broader Southern strategy to use libel law to bankrupt civil-rights coverage and intimidate the national press.

**Significance:**

1. **Strong protection for criticism of public officials.** Without the actual-malice standard, public officials could chill press scrutiny by suing over any factual error. The Court reasoned that vigorous criticism of government — even when sometimes inaccurate — is essential to democratic accountability.

2. **First Amendment protection of state law.** The Court applied First Amendment standards to STATE defamation law, dramatically expanding federal constitutional protection for the press.

3. **"Breathing space" for free debate.** The Court famously held that the First Amendment requires "breathing space" for vigorous debate on public issues, and that occasional errors are an inevitable cost of free inquiry that must be tolerated to preserve robust political discourse.

4. **Broader civil-rights implications.** The decision protected the New York Times — and by extension all national media — from financially crippling defamation suits aimed at suppressing civil-rights coverage.

5. **Modern challenges.** Several Supreme Court justices (Thomas, Gorsuch) have signaled willingness to revisit Sullivan, arguing the actual-malice standard goes beyond what the First Amendment requires. So far the precedent stands, but the issue remains live.

Without Sullivan, modern aggressive coverage of presidents, governors, and other public officials would be far riskier — and the press could be intimidated by the threat of crippling damages awards from a single lawsuit.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Analyze how social media has reshaped political CAMPAIGNS. Address (a) microtargeting, (b) earned media and direct candidate communication, and (c) the spread of misinformation. For each, identify both an opportunity and a risk for democratic politics.`,
        solution: `(a) **Microtargeting** uses voter data — demographics, behaviors, interests — to deliver different ads to different audiences. A campaign can show one message to suburban moms, a different message to rural retirees, and a third message to college students.
- **Opportunity:** More efficient communication. Campaigns can speak to specific concerns of small audiences without spending on mass advertising. Smaller campaigns can compete by carefully targeting persuadable voters.
- **Risk:** **Reduced accountability.** Different audiences receive contradictory messages from the same candidate; journalists and the broader public cannot easily monitor what is being said. Microtargeting can also exploit psychological vulnerabilities and spread tailored disinformation invisibly. The 2016 Cambridge Analytica scandal illustrated the privacy risks.

(b) **Earned media and direct candidate communication.** Traditional campaigns paid for ads through television and newspapers; today candidates can communicate directly to followers through Twitter/X, Facebook, TikTok, Instagram, YouTube, and podcasts. A single tweet can become national news; a viral video can reach millions for free.
- **Opportunity:** Lower cost of entry for new voices. Outsiders, insurgents, and lesser-known candidates can build national audiences without traditional party gatekeepers (e.g., Bernie Sanders 2016, Donald Trump 2016, AOC 2018). This can democratize political competition and give voice to previously marginalized perspectives.
- **Risk:** **Bypassing institutional checks.** Traditional media filtered candidate statements through editorial judgment, fact-checking, and follow-up questions. Direct communication eliminates these checks; falsehoods, inflammatory rhetoric, and incitement spread without intermediation. The line between "candidate statement" and "news" blurs.

(c) **Misinformation and disinformation.** False or misleading content spreads rapidly through social media — often faster than fact-checks can catch up. Foreign actors (Russia in 2016 and 2024 — Internet Research Agency) and domestic operators have exploited platform algorithms to amplify divisive content.
- **Opportunity:** Rapid information sharing can also expose corruption, mobilize protest, and democratize voice (Arab Spring, BLM, MeToo movements). Fact-checkers, journalists, and platforms have developed tools to combat misinformation in some cases.
- **Risk:** **Erosion of shared factual basis** for democratic deliberation. When citizens cannot agree on basic facts (election outcomes, public-health information, foreign-policy events), democracy is harder to sustain. Conspiracy theories like QAnon and election-fraud claims weaken trust in democratic institutions. AI and deepfakes (synthetically generated video, audio, images of candidates saying things they never said) intensify this threat going into 2026 and beyond.

**Synthesis:** Social media has democratized political communication while simultaneously enabling forms of manipulation and polarization that the constitutional designers could not have anticipated. The First Amendment\'s strong protection of speech makes regulation of platform content constitutionally complex. Reform proposals — algorithmic transparency, mandatory disclosure of political ad funding, AI-watermarking requirements, antitrust action against dominant platforms, modification of Section 230 — all face political and constitutional obstacles. The technology is moving faster than American democratic institutions are adapting.` },
    ],
    cards: [
      { front: 'Five core functions of the media in a democracy', back: 'Reporter (provides news), watchdog (investigates wrongdoing), agenda setter (shapes what is important), gatekeeper (selects what reaches audience), public forum (space for debate).', lessonPart: 1 },
      { front: 'New York Times v. Sullivan (1964)', back: 'Public officials must prove "actual malice" (knowing falsity or reckless disregard) to recover for defamation. Cornerstone of strong press freedom — protects criticism of officials even when sometimes inaccurate.', lessonPart: 2 },
      { front: 'New York Times v. United States (1971) — Pentagon Papers', back: 'Government bears a "heavy burden" to justify prior restraint of the press. Court refused to enjoin publication of the classified Pentagon Papers. Reaffirmed strong constitutional protection against pre-publication censorship.', lessonPart: 2 },
      { front: 'Pre-cable mass media era', back: 'Three broadcast networks (ABC, CBS, NBC) and a handful of major newspapers reached most Americans with similar content. Provided a common informational base across the political spectrum.', lessonPart: 3 },
      { front: 'Rise of cable news', back: 'CNN (1980), Fox News (1996), MSNBC (1996) introduced 24-hour news cycles and ideologically distinctive programming. Began the segmentation of American news audiences.', lessonPart: 3 },
      { front: 'Echo chamber / filter bubble', back: 'When social-media algorithms show users content matching their existing views, reducing exposure to opposing perspectives. Reinforces partisan attitudes and deepens polarization.', lessonPart: 4 },
      { front: 'Decline of local news', back: 'Over 2,500 U.S. newspapers have closed since 2005, creating "news deserts." Local accountability journalism has shrunk dramatically; consequences include less coverage of city councils, school boards, and corruption.', lessonPart: 4 },
      { front: 'Microtargeting in campaigns', back: 'Using voter data to deliver different ads to different audiences. More efficient communication BUT reduces accountability — journalists and broader public cannot monitor contradictory messages. Cambridge Analytica scandal (2016) raised privacy concerns.', lessonPart: 5 },
      { front: 'Section 230 of the Communications Decency Act (1996)', back: 'Shields online platforms from liability for user-generated content. Both parties have proposed reforms — Republicans worried about "censorship," Democrats worried about misinformation. Reform faces First Amendment and policy obstacles.', lessonPart: 6 },
      { front: 'Trust in media — collapse', back: 'Gallup polls show trust in mass media has fallen from ~70% in the 1970s to ~30% today, with sharp partisan divides. Consequence of fragmentation, polarization, and perceived bias. Weakens watchdog function.', lessonPart: 6 },
    ],
  },
}

async function main() {
  console.log('=== AP US Government content fill — Part 2 ===\n')
  let topicsHandled = 0
  let totalProblems = 0
  let totalCards = 0
  let textUpdates = 0

  for (const [slug, payload] of Object.entries(TOPICS)) {
    const topic = await prisma.topic.findUnique({ where: { slug } })
    if (!topic) {
      console.log(`✗ Topic not found: ${slug} — skipping`)
      continue
    }
    console.log(`• ${slug}`)

    const currentLen = (topic.textContent ?? '').length
    if (currentLen < 1500) {
      await prisma.topic.update({
        where: { id: topic.id },
        data: { textContent: payload.textContent },
      })
      textUpdates++
      console.log(`    text: ${currentLen} → ${payload.textContent.length} chars`)
    } else {
      console.log(`    text: ${currentLen} chars (kept; already adequate)`)
    }

    const existingProblems = await prisma.exampleProblem.findMany({
      where: { topicId: topic.id },
      select: { order: true },
    })
    const usedOrders = new Set(existingProblems.map(p => p.order))
    let nextOrder = (existingProblems.length > 0 ? Math.max(...existingProblems.map(p => p.order)) : 0) + 1
    const problemRows = payload.problems.map(p => {
      const order = usedOrders.has(p.order) ? nextOrder++ : p.order
      usedOrders.add(order)
      return {
        topicId: topic.id,
        order,
        difficulty: p.difficulty,
        question: p.question,
        solution: p.solution,
      }
    })
    if (problemRows.length > 0) {
      const result = await prisma.exampleProblem.createMany({ data: problemRows })
      totalProblems += result.count
      console.log(`    + ${result.count} problems`)
    }

    const existingFronts = new Set(
      (await prisma.flashcard.findMany({ where: { topicId: topic.id }, select: { front: true } }))
        .map(c => c.front)
    )
    const newCards = payload.cards
      .filter(c => !existingFronts.has(c.front))
      .map(c => ({
        topicId: topic.id,
        front: c.front,
        back: c.back,
        hint: c.hint ?? null,
        lessonPart: c.lessonPart ?? null,
      }))
    if (newCards.length > 0) {
      const result = await prisma.flashcard.createMany({ data: newCards })
      totalCards += result.count
      console.log(`    + ${result.count} flashcards`)
    }

    topicsHandled++
  }

  console.log(`\n=== Done. ${topicsHandled} topics. Text updates: ${textUpdates}. Problems: ${totalProblems}. Flashcards: ${totalCards}. ===`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
