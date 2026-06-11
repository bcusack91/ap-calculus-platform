import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
/**
 * Phase 2/3 content fill for AP US Government topics.
 *
 * For each of the 14 gov topics this seed:
 *   - Replaces the very thin Topic.textContent with a substantive overview
 *     (only when current length < 1500 chars).
 *   - Adds 5 ExampleProblems (idempotent: bumps order on collisions).
 *   - Adds 10 Flashcards (idempotent: skips inserts whose `front` already exists).
 *
 * Usage:
 *   set -a && source .env.local && set +a && npx tsx prisma/add-us-government-content.ts
 */

import { PrismaClient, Difficulty } from '@prisma/client'

const prisma = new PrismaClient()

type ProblemSeed = { order: number; difficulty: Difficulty; question: string; solution: string }
type CardSeed = { front: string; back: string; hint?: string; lessonPart?: number }
type TopicSeed = { textContent: string; problems: ProblemSeed[]; cards: CardSeed[] }

const TOPICS: Record<string, TopicSeed> = {
  // ──────────────────────────────────────────────────────────────────
  'gov-constitutional-foundations': {
    textContent: `## Constitutional Foundations

The American constitutional order rests on a small number of contested ideas about who should rule, how power should be limited, and what role government should play in protecting natural rights. Understanding the Constitution requires understanding the political theory the Founders drew from and the specific compromises they struck in 1787.

### Enlightenment Roots

- **John Locke** — natural rights to life, liberty, and property; government legitimate only by the **consent of the governed**; the right of revolution when government violates the social contract. The Declaration of Independence is essentially Locke restated.
- **Montesquieu** — separation of powers among legislative, executive, and judicial branches to prevent tyranny.
- **Rousseau** — the "general will" and direct popular sovereignty.
- **Hobbes** — without strong government life is "nasty, brutish, and short" — used to justify a stronger central authority.

### From Articles of Confederation to Constitution

The Articles of Confederation (1781) created a weak national government with no power to tax, regulate trade, or enforce laws. **Shays' Rebellion** (1786) — a farmers' uprising in Massachusetts that the central government could not suppress — convinced many Founders the Articles had to go.

### Compromises at the Philadelphia Convention

- **Great (Connecticut) Compromise:** bicameral Congress — House by population (favoring large states), Senate two per state (favoring small states).
- **Three-Fifths Compromise:** counted enslaved persons as three-fifths for both representation and direct taxation. A moral failure that fueled future conflict.
- **Slave Trade Compromise:** banned Congress from prohibiting the importation of enslaved people for 20 years.
- **Electoral College:** indirect election of the president, balancing popular and state-based legitimacy.

### Federalists vs Anti-Federalists

- **Federalists** (Madison, Hamilton, Jay — *Federalist Papers*) wanted the new strong national government and argued in **Federalist 10** that a large republic would CONTROL the "violence of faction" by encompassing many competing interests, and in **Federalist 51** that separation of powers and federalism would create internal "checks and balances" so that "ambition counters ambition."
- **Anti-Federalists** (e.g., **Brutus 1**) feared a distant central government would crush state authority and individual rights, demanded a Bill of Rights as the price of ratification.

### The Resulting Document

The Constitution embodies six core principles: popular sovereignty, limited government, separation of powers, checks and balances, federalism, and republicanism (representative democracy). Article V allows amendment but requires supermajorities in both Congress (2/3) and the states (3/4) — making fundamental change possible but difficult.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `John Locke argued that legitimate government rests on the "consent of the governed." Identify TWO specific places in the U.S. founding documents where this Lockean idea is reflected.`,
        solution: `1. **Declaration of Independence** — directly states that governments derive "their just powers from the consent of the governed" and that the people have the right to alter or abolish a government that destroys their natural rights.

2. **Constitution Preamble** — opens with "We the People of the United States, in Order to form a more perfect Union ... do ordain and establish this Constitution," locating the founding authority in the people themselves rather than in the states or in a monarch.

(Other accepted answers: Article I requires elected representatives in the House; Article V allows the people, through ratifying conventions or state legislatures, to amend the Constitution.)` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Identify the two compromises at the Constitutional Convention that addressed (a) the conflict between large and small states over representation, and (b) the conflict over how to count enslaved persons for representation. State the rule each compromise produced.`,
        solution: `(a) **Great (Connecticut) Compromise** — created a bicameral Congress: representation in the **House** is based on a state\'s population (large-state preference), while every state gets **2 senators** in the Senate (small-state preference).

(b) **Three-Fifths Compromise** — for purposes of both apportioning representatives in the House and assessing direct taxes, each enslaved person was counted as **three-fifths of a person**.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `In *Federalist 10*, Madison argues that a LARGE republic is better at controlling factions than a small one. Summarize his argument in your own words and identify the underlying political principle.`,
        solution: `Madison defines a "faction" as a group united by some interest adverse to the rights of others or to the public good. He argues factions cannot be eliminated without destroying liberty, so government must instead **control their effects**.

A LARGE republic does this better than a small one because:
1. It encompasses a greater diversity of interests, so no single faction is likely to be a majority capable of seizing the whole government.
2. Even if a faction is large, it must extend across a vast territory and many local interests, making coordination difficult.
3. Representatives elected from large districts are more likely to be statesmen filtering popular passion than mere delegates of local factions.

The underlying principle is **pluralism** — protection from majority tyranny through dispersion of competing interests across an extended republic.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare and contrast the Federalist and Anti-Federalist positions on the proposed Constitution. Address (a) the size and power of the central government, (b) the protection of individual rights, and (c) the resulting political compromise that secured ratification.`,
        solution: `(a) **Central government:** Federalists wanted a STRONG national government to fix the chaos of the Articles (Hamilton, Madison, Jay). Anti-Federalists feared centralized power and wanted to keep most authority in the states (Brutus, Henry).

(b) **Individual rights:** Federalists argued the structure of the Constitution itself (separation of powers, federalism, enumerated powers) was sufficient and that listing rights would be both unnecessary and dangerous (rights not listed might be assumed to be unprotected). Anti-Federalists insisted that without an explicit Bill of Rights, the new government would inevitably trample individual liberty.

(c) **Compromise:** Federalists agreed to push for a Bill of Rights as soon as the new Constitution was ratified. The first 10 amendments were proposed by the First Congress in 1789 and ratified by 1791. This concession was decisive in winning ratification in key states like Virginia and New York.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Article V of the Constitution requires supermajorities (2/3 of both houses of Congress to propose, 3/4 of state legislatures to ratify) to amend the Constitution. (a) What political principle motivates these high thresholds? (b) Identify ONE specific consequence — favorable or unfavorable — of this difficulty for modern American politics. (c) How does this compare to the Articles of Confederation\'s amendment process?`,
        solution: `(a) The high thresholds reflect the principle of a **limited, stable government** and protect against transient majorities. The Founders believed fundamental rules of governance should change only with broad and sustained consensus across geography and time, preventing either tyranny of the majority or factional capture.

(b) **Consequences (any one acceptable):**
- *Favorable:* Stability — fundamental rights and structures are insulated from short-term political swings; investors and citizens can rely on predictable basic rules.
- *Unfavorable:* The Constitution is hard to update for modern problems (campaign finance, voting rights, electoral college reform). Reforms that have majority support nationwide can be blocked by a minority of small states.

(c) The Articles required UNANIMOUS consent of all 13 states for amendment — even more demanding. This made the Articles essentially unamendable and was a major reason the Constitutional Convention abandoned reforming them in favor of a brand-new document. Article V is strict but not impossibly so.` },
    ],
    cards: [
      { front: 'Locke\'s natural rights', back: 'Life, liberty, and property — universal rights individuals possess prior to government. Governments exist to protect them; consent of the governed is the source of legitimate authority.', lessonPart: 1 },
      { front: 'Montesquieu\'s key contribution to U.S. constitutionalism', back: 'Separation of powers among legislative, executive, and judicial branches as a structural check against tyranny.', lessonPart: 1 },
      { front: 'Why the Articles of Confederation failed', back: 'No power to tax, no power to regulate interstate commerce, no executive, no national court system. Could not respond to crises like Shays\' Rebellion, motivating the 1787 Convention.', lessonPart: 2 },
      { front: 'Great (Connecticut) Compromise', back: 'Bicameral Congress: House by population, Senate two per state. Resolved the large-state vs small-state dispute over representation.', lessonPart: 3 },
      { front: 'Three-Fifths Compromise', back: 'Counted each enslaved person as three-fifths of a person for both House representation and direct taxation. Increased Southern political power and entrenched slavery in the constitutional structure.', lessonPart: 3 },
      { front: 'Federalist 10 — main argument', back: 'A large republic CONTROLS factions better than a small one because it includes a greater diversity of competing interests. Pluralism prevents any one faction from becoming a tyrannical majority.', lessonPart: 4 },
      { front: 'Federalist 51 — main argument', back: '"Ambition must be made to counteract ambition." Separation of powers and federalism create a "double security" — branches and levels of government check each other to prevent tyranny.', lessonPart: 4 },
      { front: 'Brutus 1 — main argument', back: 'A free republic cannot work over so vast a territory. A distant central government will inevitably consume state authority and individual liberty. Anti-Federalist case for keeping power local.', lessonPart: 4 },
      { front: 'Six core constitutional principles', back: 'Popular sovereignty, limited government, separation of powers, checks and balances, federalism, republicanism (representative democracy).', lessonPart: 5 },
      { front: 'Article V — how to amend the Constitution', back: 'Proposed by 2/3 of both houses of Congress (or convention called by 2/3 of states). Ratified by 3/4 of state legislatures (or state conventions). Has produced 27 amendments since 1789.', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'gov-federalism': {
    textContent: `## Federalism

**Federalism** is the constitutional division of authority between a national government and state (and local) governments. It is one of the structural innovations that made the American republic possible — a way to combine national strength with regional self-rule.

### Constitutional Sources

- **Article I, Section 8** — enumerated (delegated) powers of Congress: tax, coin money, raise armies, regulate interstate commerce, declare war, etc.
- **Necessary and Proper (Elastic) Clause** — Congress may make laws "necessary and proper" to carry out its enumerated powers. Source of **implied powers**.
- **Supremacy Clause** (Article VI) — federal law and treaties are the "supreme Law of the Land"; state laws yielding when they conflict.
- **Tenth Amendment** — powers not delegated to the federal government nor prohibited to the states are **reserved to the states or the people**.
- **Fourteenth Amendment** — no state shall deny any person life, liberty, or property without due process or deny equal protection. Drove the **incorporation** of the Bill of Rights against the states.

### Types of Powers

- **Delegated/enumerated:** federal only (e.g., declare war).
- **Reserved:** states only (e.g., police, education, marriage rules).
- **Concurrent:** shared by both (e.g., taxing, building roads, courts).

### Models of Federalism Over Time

- **Dual federalism (1789–1933):** "layer cake." Sharply separate spheres for federal and state action. Dominant view through the early Republic and Reconstruction; shrunk by the New Deal and a broad reading of the Commerce Clause.
- **Cooperative federalism (1933–1960s):** "marble cake." Federal and state governments work jointly on shared problems through grants, regulation, and shared programs. Driven by the Great Depression and World War II.
- **New federalism / devolution (1980s–present):** efforts (Reagan, Republican congresses) to return authority to the states through block grants and unfunded-mandate reform. Continues today in arguments over health policy, education, and immigration.

### Tools of Federal Influence

- **Categorical grants:** federal money tied to a specific narrow purpose with strings attached (e.g., highway funds with speed-limit conditions). Powerful federal lever.
- **Block grants:** federal money for a broad area (e.g., welfare under TANF) with more state discretion.
- **Mandates:** federal laws requiring states to act, sometimes WITHOUT funding ("unfunded mandates" — controversial).

### Landmark Cases

- **McCulloch v. Maryland (1819)** — Congress had implied power to charter a national bank under the Necessary and Proper Clause; states could not tax federal institutions ("the power to tax is the power to destroy"). Established federal supremacy and broad implied powers.
- **United States v. Lopez (1995)** — Struck down the Gun-Free School Zones Act; gun possession in a school zone was not "commerce." First major restriction on Commerce Clause expansion in 60 years; modest revival of dual-federalism reasoning.

### Why Federalism Matters

Federalism allows policy experimentation ("laboratories of democracy"), accommodates diversity across regions, and provides multiple access points for citizens to influence government. It also creates inconsistency, regulatory races to the bottom, and persistent jurisdictional fights — visible today in marijuana, abortion, gun, and immigration policy.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Classify each of the following powers as DELEGATED (federal), RESERVED (state), or CONCURRENT: (a) declare war, (b) regulate marriage, (c) levy taxes, (d) coin money, (e) establish public schools.`,
        solution: `(a) **Declare war** — DELEGATED (Article I, Section 8 — Congress only).

(b) **Regulate marriage** — RESERVED (states; under the Tenth Amendment, family law has historically been a state matter).

(c) **Levy taxes** — CONCURRENT (both federal and state governments tax).

(d) **Coin money** — DELEGATED (Article I, Section 8 — federal only; states are explicitly forbidden from coining money in Article I, Section 10).

(e) **Establish public schools** — RESERVED (states run public education, though federal funding and civil-rights laws condition that authority).` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Briefly describe the difference between a **categorical grant** and a **block grant**. Give one example of when Congress would prefer each.`,
        solution: `**Categorical grant:** federal money for a NARROW, specific purpose with detailed strings attached (e.g., funds for highway construction conditional on a state setting drinking age at 21). Congress prefers this when it wants tight control over how money is spent or to push uniform national standards.

**Block grant:** federal money for a BROAD policy area with relatively few conditions (e.g., TANF welfare block grants). Congress prefers this when it wants to give states flexibility to design programs, often reflecting a "devolution" or "new federalism" preference.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain how the holding in *McCulloch v. Maryland* (1819) shaped the balance of power between the federal and state governments. Address (a) the Necessary and Proper Clause and (b) the Supremacy Clause.`,
        solution: `(a) The Court held that creating a national bank was **"necessary and proper"** to executing Congress\'s enumerated powers (taxing, borrowing, regulating commerce), even though "establish a bank" appears nowhere in Article I. Marshall famously wrote, "Let the end be legitimate ... and all means which are appropriate ... and not prohibited ... are constitutional." This established the doctrine of **implied powers** and gave the federal government broad latitude to act beyond its enumerated list.

(b) The Court further held that Maryland could NOT tax the bank because the **Supremacy Clause** makes federal institutions and laws supreme. "The power to tax involves the power to destroy" — if states could tax federal entities, they could effectively nullify federal action.

**Net effect:** Together, these holdings expanded federal power and constrained state power, setting the long-term constitutional foundation for an active national government.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `In *United States v. Lopez* (1995), the Supreme Court struck down the Gun-Free School Zones Act. Explain (a) the constitutional provision the federal government relied on and (b) why the Court rejected that argument. (c) What broader doctrinal point did the case establish?`,
        solution: `(a) Congress justified the Act under the **Commerce Clause** (Article I, Section 8) — the power to regulate interstate commerce — arguing that gun violence in schools harms the educational system and ultimately the national economy.

(b) The Court held that mere **possession** of a gun in a school zone is NOT economic activity and has only attenuated connections to interstate commerce. Allowing this rationale would let Congress regulate virtually anything (since almost any local activity could be argued to affect the national economy), erasing the constitutional limit on federal power.

(c) **Doctrinal point:** *Lopez* was the first case in roughly 60 years to strike down a federal statute as exceeding Congress\'s commerce power. It reaffirmed that the Commerce Clause has **outer limits** and signaled a partial revival of dual-federalism reasoning, restraining (not reversing) the post-New Deal expansion of federal authority.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Federalism creates ongoing conflicts when state policy diverges sharply from federal policy. Describe TWO contemporary examples (e.g., marijuana, immigration, sanctuary cities, environmental regulation, voting rules) where this tension is visible. For ONE of them, identify the constitutional clause(s) most relevant and explain how the Supremacy Clause shapes the dispute.`,
        solution: `**Examples (any two of these):**
- **Marijuana:** Many states have legalized recreational or medical marijuana, but federal law (Controlled Substances Act) classifies it as a Schedule I drug. Federal prosecutors retain authority to enforce, even in legal-state jurisdictions.
- **Immigration:** "Sanctuary" cities and states limit cooperation with federal immigration enforcement (ICE detainers); federal government argues this undermines uniform immigration policy.
- **Voting rules:** States set election procedures (registration, IDs, mail voting); federal law (Voting Rights Act, Help America Vote Act) imposes minimum standards; tension over federal preclearance after *Shelby County v. Holder* (2013).
- **Environmental regulation:** California sets stricter vehicle-emission standards; federal government has at times tried to revoke this waiver under the Clean Air Act.

**Sample analysis (marijuana):**
- Relevant clauses: **Commerce Clause** (federal power to regulate drug markets that affect interstate commerce) + **Supremacy Clause** (federal law overrides conflicting state law).
- Under the Supremacy Clause, federal drug law is the "supreme Law of the Land," so state legalization does NOT immunize users from federal prosecution. In practice, the federal government has chosen NOT to fully enforce against state-legal marijuana — a political accommodation, not a constitutional one. If a future administration reversed course, conflict between state and federal authority would intensify and likely be resolved in favor of federal law.` },
    ],
    cards: [
      { front: 'Definition of federalism', back: 'A system in which constitutional authority is divided between a national government and regional (state) governments, with each having some sphere of independent action.', lessonPart: 1 },
      { front: 'Necessary and Proper (Elastic) Clause', back: 'Article I, Section 8 — Congress may make all laws "necessary and proper" to execute its enumerated powers. Source of implied powers (e.g., national bank in *McCulloch*).', lessonPart: 1 },
      { front: 'Supremacy Clause', back: 'Article VI — the Constitution, federal laws made under it, and treaties are "the supreme Law of the Land." State laws yield when they conflict with valid federal law.', lessonPart: 1 },
      { front: 'Tenth Amendment', back: 'Powers not delegated to the federal government, nor prohibited to the states, are reserved to the states or to the people. Foundation of state "reserved powers."', lessonPart: 2 },
      { front: 'Delegated vs reserved vs concurrent powers', back: 'Delegated (enumerated/implied): federal only. Reserved: state only (police, marriage, education). Concurrent: both (taxing, courts, roads).', lessonPart: 2 },
      { front: 'Dual federalism vs cooperative federalism', back: 'Dual ("layer cake"): sharp separation of federal and state spheres (1789–1933). Cooperative ("marble cake"): joint federal-state action through grants and shared programs (1933 onward).', lessonPart: 3 },
      { front: 'Categorical grant vs block grant', back: 'Categorical: narrow purpose, many strings attached, more federal control. Block: broad area, few conditions, more state flexibility.', lessonPart: 4 },
      { front: 'McCulloch v. Maryland (1819) — holding', back: 'Congress has implied powers under the Necessary and Proper Clause (could create a national bank). States cannot tax federal institutions (Supremacy Clause). Established broad federal authority.', lessonPart: 5 },
      { front: 'United States v. Lopez (1995) — holding', back: 'Struck down the Gun-Free School Zones Act; gun possession in a school zone is not economic activity and not within the Commerce Clause. First major Commerce-Clause limit in 60 years.', lessonPart: 5 },
      { front: 'Why is federalism called "laboratories of democracy"?', back: 'States can experiment with different policies (Justice Brandeis\'s phrase). Successful state policies (e.g., Massachusetts health care → ACA) can spread; failed ones stay local.', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'gov-separation-of-powers': {
    textContent: `## Separation of Powers and Checks & Balances

The Constitution divides federal power among three coequal branches and gives each branch tools to check the others. The goal — articulated by Madison in **Federalist 51** — was to prevent any single faction or branch from accumulating tyrannical power: "Ambition must be made to counteract ambition."

### The Three Branches and Their Core Powers

- **Legislative (Article I — Congress):** make law, control the federal purse (taxing and spending), declare war, raise and fund the military, regulate commerce, advise & consent on appointments and treaties, impeach and remove federal officials.
- **Executive (Article II — President):** enforce the law, command the armed forces, conduct foreign policy, negotiate treaties, appoint federal officers and judges, veto legislation, issue pardons.
- **Judicial (Article III — Supreme Court and lower courts):** interpret laws and the Constitution, decide cases and controversies, exercise **judicial review** (established in *Marbury v. Madison*, 1803).

### Key Checks Between Branches

| Branch checked | Tool used | By which branch |
|---|---|---|
| Congress passes a law | Veto | President |
| Veto | Override (2/3 of both houses) | Congress |
| President nominates judges/officials | Confirmation | Senate |
| President negotiates treaties | Ratification (2/3 of Senate) | Senate |
| Federal officials | Impeach (House) and remove (2/3 Senate) | Congress |
| Statutes and executive actions | Judicial review | Courts |
| Court decisions | Constitutional amendment, jurisdiction-stripping, court size | Congress |
| Judges | Nomination | President |

### Federalist 51 Architecture

Madison\'s argument has two layers:
1. **Internal separation** — within the federal government, three branches check each other.
2. **Federalism** — vertical separation between national and state authority.

Together these provide a "double security" against tyranny. Madison did not assume virtuous leaders — he designed a system where self-interested ambition in each branch would naturally resist encroachment by others.

### Tensions in Practice

- **War powers:** Congress declares war; the President commands. The War Powers Resolution (1973) tried to constrain unilateral presidential war-making. Disputes have been recurring (Vietnam, Iraq, Libya, Syria).
- **Executive orders:** Presidents increasingly use unilateral action when Congress is gridlocked. Courts may strike down orders that exceed statutory or constitutional authority (e.g., *Youngstown Sheet & Tube v. Sawyer*, 1952).
- **Judicial appointments:** Senate confirmation has become deeply partisan; the lifetime tenure of federal judges makes appointments long-lasting checks across administrations.
- **Impeachment:** Constitutionally available but politically extraordinary — only three presidents impeached by the House (Andrew Johnson, Bill Clinton, Donald Trump twice); none removed by the Senate.

### Why It Matters

Separation of powers is the structural reason the federal government often moves slowly. That is by design — a feature, not a bug — but it can produce gridlock, encourage executive unilateralism, and shift policy battles into the courts.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Match each constitutional power to the branch that holds it: (a) declare war, (b) command the military, (c) interpret the Constitution, (d) confirm federal judges, (e) issue pardons.`,
        solution: `(a) **Declare war** — Legislative (Congress, Article I, Section 8).

(b) **Command the military** — Executive (President as Commander-in-Chief, Article II, Section 2).

(c) **Interpret the Constitution** — Judicial (Supreme Court, established by *Marbury v. Madison* under Article III).

(d) **Confirm federal judges** — Legislative (Senate, by majority vote — Article II, Section 2).

(e) **Issue pardons** — Executive (President, for federal offenses, Article II, Section 2).

Note (a) and (b) together illustrate the deliberate split of war powers between Congress (declare) and President (command).` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `What vote is required for Congress to override a presidential veto? Where is this rule located in the Constitution?`,
        solution: `Congress can override a presidential veto with a **two-thirds (2/3) vote in BOTH the House and the Senate**. The rule is in **Article I, Section 7** (the "Presentment Clause"), which describes how a bill becomes a law and what happens if the President vetoes it. Overrides are rare in practice because mustering 2/3 supermajorities in both chambers requires substantial bipartisan support.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain Madison\'s argument in *Federalist 51* that "ambition must be made to counteract ambition." Why did Madison NOT rely on the personal virtue of officeholders to prevent tyranny?`,
        solution: `Madison argued that, given human nature, you cannot rely on virtuous leaders to refrain from accumulating power. Instead, government must be DESIGNED so that the **self-interest** of officeholders works AGAINST tyranny rather than for it. Each branch must be given both the constitutional means AND a personal incentive to resist encroachment by the others — "ambition must be made to counteract ambition."

This is achieved by giving each branch:
1. **Constitutional independence** (separate sources of authority — popular election for House, indirect for Senate originally, electors for President, lifetime tenure for judges).
2. **Constitutional weapons** to defend itself (veto, override, confirmation, impeachment, judicial review).

Madison famously wrote, "If men were angels, no government would be necessary." Because they are not, government must be structured so that ambition checks ambition. Combined with federalism, this gives the people a "double security" against tyranny — internal separation among federal branches AND vertical separation between federal and state governments.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Describe THREE checks Congress holds over the executive branch and ONE check the judicial branch holds over Congress.`,
        solution: `**Congressional checks on the executive (any three):**
1. **Override veto** with 2/3 of both houses.
2. **Impeach and remove** the President or other federal officers (House impeaches by majority; Senate removes by 2/3).
3. **Confirm or reject** presidential nominees (Senate, simple majority for most offices, including federal judges and Cabinet secretaries).
4. **Ratify or reject treaties** (Senate, 2/3).
5. **Power of the purse** — refuse to fund executive priorities; condition funding on policy compliance.
6. **Investigation/oversight** — congressional hearings can compel testimony and documents.
7. **Declare war** — formal authorization for prolonged military conflict.

**Judicial check on Congress:**
- **Judicial review** — courts may strike down statutes that violate the Constitution. Established in *Marbury v. Madison* (1803). The Court has used this power to invalidate many federal laws over time, ranging from Reconstruction-era civil rights acts to the Gun-Free School Zones Act in *Lopez*.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Modern presidents increasingly act unilaterally through executive orders, signing statements, and executive agreements when Congress is gridlocked. (a) What constitutional concern does this trend raise? (b) Identify TWO checks that limit this kind of executive unilateralism. (c) Why might Congress find it difficult to use those checks effectively?`,
        solution: `(a) **Concern:** Unilateral executive action shifts lawmaking out of the constitutionally designated legislature and into a single elected official. This risks undermining separation of powers — the President, by design, was not supposed to "make law" but to "take care that the laws be faithfully executed" (Article II, Section 3). Sustained executive unilateralism can drift toward the very concentrated power Madison warned against in *Federalist 51*.

(b) **Two checks:**
1. **Judicial review** — courts can strike down executive orders that exceed statutory or constitutional authority. *Youngstown Sheet & Tube v. Sawyer* (1952) struck down Truman\'s seizure of steel mills as beyond presidential power without congressional authorization. Justice Jackson\'s tripartite framework (categories of presidential power) is still the standard analytical tool.
2. **Congressional repeal or refusal to fund** — Congress can pass legislation overriding an executive order (subject to veto and override) or simply refuse to appropriate funds for the order\'s implementation.

(c) **Why these checks are hard to use:**
- Litigation is slow and uncertain; even successful challenges may take years.
- Repealing an executive order requires passing legislation through both houses AND surviving a veto, requiring 2/3 majorities — usually impossible when partisan control is unified or evenly split.
- Defunding requires assembling political coalitions; the executive can often shift money administratively or argue obligations require continued spending.
- Public attention is fragmented; voters often don\'t reward Congress for technical institutional fights.

The result: presidential unilateralism tends to grow over time as Congress\'s capacity to police it lags behind.` },
    ],
    cards: [
      { front: 'Three branches of the federal government', back: 'Legislative (Article I — Congress), Executive (Article II — President), Judicial (Article III — Supreme Court and inferior courts established by Congress).', lessonPart: 1 },
      { front: 'Federalist 51 — central idea', back: '"Ambition must be made to counteract ambition." Each branch is given constitutional means AND personal incentive to resist encroachment by the others. Combined with federalism, this is the "double security" against tyranny.', lessonPart: 2 },
      { front: 'Veto and override', back: 'President can veto a bill (Article I, Section 7). Congress can override with a 2/3 vote in BOTH chambers. Overrides are rare because 2/3 supermajorities are hard to assemble.', lessonPart: 3 },
      { front: 'Senate role in presidential appointments', back: 'Senate confirms federal judges, Cabinet secretaries, ambassadors, and other officers by simple majority. Treaties require 2/3 Senate ratification.', lessonPart: 3 },
      { front: 'Impeachment process', back: 'House impeaches by simple majority (the "indictment"). Senate tries the case; conviction and removal require 2/3. Three presidents impeached by House; none removed by Senate.', lessonPart: 3 },
      { front: 'Judicial review', back: 'The power of the courts to strike down laws and executive actions that violate the Constitution. Established in *Marbury v. Madison* (1803) by Chief Justice John Marshall.', lessonPart: 4 },
      { front: 'War powers split', back: 'Congress DECLARES war and funds the military (Article I). President COMMANDS the military as Commander-in-Chief (Article II). War Powers Resolution (1973) attempts to constrain unilateral presidential war-making.', lessonPart: 5 },
      { front: 'Youngstown Sheet & Tube v. Sawyer (1952)', back: 'Struck down Truman\'s seizure of steel mills during the Korean War. Established that the President\'s power is at its lowest when acting against the express or implied will of Congress (Jackson\'s tripartite framework).', lessonPart: 5 },
      { front: 'Why was separation of powers designed to slow government down?', back: 'To prevent rapid, factional capture of policy. The Founders preferred deliberate, supermajoritarian action over efficient majoritarian action. Gridlock is a feature of the design, not a bug.', lessonPart: 2 },
      { front: 'Limits on executive orders', back: 'Courts can strike them down (judicial review); Congress can pass overriding legislation (subject to veto) or refuse to fund them. Subsequent presidents can rescind them by their own order.', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'gov-congress': {
    textContent: `## Congress

Congress is the **first branch** — Article I is the longest in the Constitution, and the powers of Congress are the most extensively enumerated. Yet Congress today is also the most institutionally fragmented and publicly unpopular of the three branches. Understanding Congress means understanding both its constitutional design AND the day-to-day politics of how 535 members try (or fail) to make law.

### Structure: Bicameralism

| Feature | House (435) | Senate (100) |
|---|---|---|
| Term | 2 years | 6 years (1/3 every cycle) |
| Constituency | District | Whole state |
| Min. age | 25 | 30 |
| Citizenship | 7 yrs | 9 yrs |
| Distinctive powers | Originate revenue bills; impeach | Try impeachments; confirm appointments; ratify treaties (2/3) |
| Style | More majoritarian, party-driven, hierarchical | More individualistic; filibuster magnifies minority power |

The two chambers were designed to represent different things — the House representing the people directly, the Senate the states (until the **17th Amendment** in 1913 made senators directly elected by voters).

### Powers of Congress (Article I, Section 8)

Enumerated: tax, borrow, regulate interstate and foreign commerce, coin money, declare war, raise and support armies, establish post offices, naturalization, etc. Plus the **Necessary and Proper Clause** for implied powers.

### Leadership and Committees

- **House:** Speaker (presiding officer, sets agenda, controls Rules Committee), Majority/Minority Leaders, Whips.
- **Senate:** President (Vice President of the U.S., votes only to break ties), President pro tempore (ceremonial), Majority/Minority Leaders.
- **Committees** are where most legislative work happens — mark up bills, hold hearings, oversight. Standing committees have jurisdiction over substantive areas (Ways and Means for taxes; Armed Services for defense, etc.).

### How a Bill Becomes Law

1. Introduced in either chamber (revenue must originate in House).
2. Referred to committee → subcommittee → markup → committee vote.
3. House: Rules Committee sets debate rules. Senate: unanimous consent or motion to proceed; vulnerable to **filibuster**.
4. Floor debate and vote.
5. Conference committee reconciles House and Senate versions.
6. Both chambers pass identical version.
7. President signs OR vetoes (Congress can override 2/3).

### The Filibuster and Cloture

Senate tradition allows extended debate to block a bill. **Cloture** (Rule XXII) requires 60 votes to end debate. The filibuster effectively makes 60 the working majority needed to pass most ordinary legislation. Exception: budget reconciliation requires only 51, and confirmations have been exempted (judicial nominees in 2013/2017).

### Models of Representation

- **Trustee:** member uses own judgment regardless of constituent preferences.
- **Delegate:** member votes the constituency\'s expressed preferences.
- **Politico:** mixes the two depending on issue salience and constituent attention.

### Gerrymandering and Redistricting

Every 10 years after the Census, House district lines are redrawn. State legislatures (or commissions in some states) control the process and can engage in **partisan gerrymandering** (drawing lines to favor a party) or **racial gerrymandering** (mostly illegal under the Voting Rights Act and *Shaw v. Reno*, 1993). The Supreme Court ruled partisan gerrymandering claims **non-justiciable** in *Rucho v. Common Cause* (2019), leaving the issue to state courts and political processes.

### Why Congress Underperforms Its Constitutional Role

Polarization, gerrymandered safe districts, growing executive unilateralism, the filibuster supermajority requirement, and short legislative work weeks all combine to make passing major legislation increasingly rare. Yet Congress remains the most direct constitutional channel for popular input into national policy.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `List THREE structural differences between the House and Senate, and explain ONE consequence each difference has for how legislation is made.`,
        solution: `1. **Term length** — House 2 years, Senate 6 years. Consequence: House members face constant reelection pressure and respond more quickly to public opinion; senators can take longer-horizon, less popular positions.

2. **Constituency** — House represents a district (~770,000 people), Senate represents an entire state. Consequence: Senators must build broader, often more ideologically diverse coalitions; House members can specialize in narrower local interests.

3. **Debate rules** — House debate is tightly limited by the Rules Committee; Senate allows filibuster (effectively requires 60 votes to end debate). Consequence: legislation passes the House on simple majorities (often along party lines) but must clear a 60-vote threshold in the Senate, giving the minority party real veto power and producing more cross-party negotiation.

(Other valid differences: minimum age, distinctive powers like the House originating revenue bills or the Senate confirming nominees and ratifying treaties.)` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Define the **filibuster** and **cloture**. What number of votes is required to invoke cloture under Senate Rule XXII?`,
        solution: `**Filibuster:** a Senate procedural tactic in which one or more senators extend debate on a bill (or nomination) indefinitely to delay or block a vote. Originally required actual continuous speaking, today usually just requires the threat.

**Cloture:** the procedure to END debate and force a vote. Established by Senate Rule XXII in 1917 and amended over time.

**Vote required:** **60 senators** (three-fifths of the chamber) — this is what makes 60 the practical working majority needed to pass most ordinary legislation in the Senate. (Exceptions: budget reconciliation requires only 51, and confirmations were exempted from filibuster — judicial nominees by Democrats in 2013, Supreme Court nominees by Republicans in 2017.)` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare the **trustee**, **delegate**, and **politico** models of representation. Which model would best describe a senator who votes against a popular tax cut because she believes it will explode the deficit? Briefly justify.`,
        solution: `- **Trustee model:** legislator uses her own informed judgment, even when it diverges from constituent preferences.
- **Delegate model:** legislator votes whatever her constituents prefer at the moment.
- **Politico model:** legislator mixes the two — typically delegates on high-salience issues constituents care about and acts as trustee on technical or low-salience matters.

A senator who votes AGAINST a popular tax cut because of long-term fiscal consequences is acting as a **TRUSTEE**. She is substituting her own judgment about the public good (or future generations\' interests) for the immediate, expressed preferences of her constituents. Edmund Burke\'s 1774 speech to the electors of Bristol is the classic statement of this view.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain how a bill that passes both chambers but in DIFFERENT versions becomes a single law. What committee handles this and what role does it play?`,
        solution: `When the House and Senate pass DIFFERENT versions of the same bill, leaders typically create a **conference committee** — a temporary joint committee with members from both chambers, usually drawn from the original substantive committees that handled the bill.

**Role of the conference committee:**
1. Negotiate a single compromise text reconciling the House and Senate versions.
2. Produce a **conference report** — the unified bill plus an explanation of differences resolved.
3. Send the conference report back to BOTH chambers for an up-or-down vote (no further amendment allowed).

If both chambers pass the conference report, the unified bill goes to the President for signature or veto. If either chamber rejects the conference report, the bill dies or goes back for another round of negotiation.

**Note:** in recent years, formal conference committees have become rarer; leaders often negotiate compromises informally and use the **amendment trade** procedure ("ping-pong") to move identical text between chambers.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `In *Rucho v. Common Cause* (2019), the Supreme Court held that partisan gerrymandering claims are non-justiciable in federal court. Explain (a) what partisan gerrymandering is, (b) what the Court\'s reasoning was, and (c) what avenues remain for challenging partisan gerrymanders.`,
        solution: `(a) **Partisan gerrymandering:** drawing legislative district lines to maximize the political advantage of the party in control of redistricting — typically by *packing* the opposing party into a few overwhelmingly safe districts and *cracking* its remaining voters across many districts in which it can\'t win. Result: the party drawing the map can win a disproportionate share of seats relative to its statewide vote share.

(b) **Court\'s reasoning (Chief Justice Roberts):** Federal courts have no "judicially manageable standard" for deciding when partisan considerations cross from "ordinary" into "unconstitutional excess." How much partisanship is too much? The Constitution\'s text gives federal courts no answer, and asking judges to second-guess fundamentally political line-drawing decisions is not the kind of question federal courts are equipped to resolve. Therefore the issue is a **non-justiciable political question** — the Court will not intervene.

(c) **Remaining avenues:**
1. **State courts** under state constitutions (which often have more explicit fairness or free-elections clauses). E.g., Pennsylvania and North Carolina state supreme courts have struck down partisan gerrymanders under state law.
2. **Independent redistricting commissions** established by state law or ballot initiative (as in California, Arizona, Michigan).
3. **Federal legislation** — Congress could enact uniform redistricting standards (e.g., proposed Freedom to Vote Act). But this faces filibuster and political obstacles.
4. **Racial gerrymandering claims** (distinct from partisan) remain justiciable in federal court under the **Voting Rights Act** and *Shaw v. Reno* (1993), so the line between "partisan" and "racial" remains contested.

**Net effect of Rucho:** moves the gerrymandering fight from federal courts into state courts and political processes, with very different outcomes across states.` },
    ],
    cards: [
      { front: 'House vs Senate — terms', back: 'House: 2 years (entire chamber elected every cycle). Senate: 6 years, with one-third elected every two years (staggered terms).', lessonPart: 1 },
      { front: 'Distinctive powers of the House', back: 'Originate all revenue (tax) bills. Impeach federal officials by simple majority. Choose the President if no Electoral College majority (12th Amendment).', lessonPart: 1 },
      { front: 'Distinctive powers of the Senate', back: 'Confirm presidential nominees (judges, Cabinet, ambassadors). Try impeachments (2/3 to convict and remove). Ratify treaties (2/3).', lessonPart: 1 },
      { front: 'Speaker of the House', back: 'Presiding officer of the House and head of the majority party. Controls floor agenda, committee assignments (with party leadership), and the Rules Committee. Second in line of presidential succession after the VP.', lessonPart: 2 },
      { front: 'Necessary and Proper Clause (Congress)', back: 'Article I, Section 8, Clause 18 — Congress may make all laws "necessary and proper" to execute its enumerated powers. Source of broad implied congressional powers (national bank in *McCulloch*).', lessonPart: 2 },
      { front: 'Filibuster and cloture', back: 'Filibuster: extended debate to block a bill in the Senate. Cloture (Rule XXII): vote to end debate, requiring 60 senators. Effectively makes 60 the working majority for most legislation.', lessonPart: 3 },
      { front: 'Budget reconciliation', back: 'Special Senate procedure for budget-related bills that limits debate and CANNOT be filibustered — passes with simple majority (51). Used for major fiscal laws (Tax Cuts and Jobs Act, Affordable Care Act, Inflation Reduction Act).', lessonPart: 3 },
      { front: 'Trustee vs delegate model of representation', back: 'Trustee: legislator uses own judgment. Delegate: legislator votes what constituents want. Politico: mixes both depending on issue salience.', lessonPart: 4 },
      { front: 'Gerrymandering — packing and cracking', back: 'Packing: concentrate opposing voters in a few overwhelmingly safe districts. Cracking: split opposing voters across many districts where they can\'t win. Effect: party drawing lines wins disproportionate seats.', lessonPart: 5 },
      { front: 'Rucho v. Common Cause (2019)', back: 'Held that partisan gerrymandering claims are non-justiciable political questions in federal court — no judicially manageable standard. Left the issue to state courts, commissions, and Congress.', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'gov-presidency': {
    textContent: `## The Presidency

The presidency is the single most powerful office in the world\'s most powerful state — and yet, on paper, the constitutional powers of the office are remarkably limited. The growth of presidential power over two centuries is the story of how a relatively modest Article II office became a dominant force in American government.

### Constitutional Powers (Article II)

- **Commander-in-Chief** of the armed forces.
- **Chief diplomat** — negotiate treaties (subject to 2/3 Senate ratification) and recognize foreign governments.
- **Chief executive** — "take Care that the Laws be faithfully executed"; head of the federal bureaucracy.
- **Appointment power** — federal judges, Cabinet secretaries, ambassadors, agency heads (with Senate confirmation).
- **Pardon power** — grant reprieves and pardons for federal offenses (cannot pardon impeachment).
- **Veto power** — over legislation; subject to 2/3 override.
- **State of the Union** — recommend measures to Congress.

### Informal Powers — The Modern Presidency

- **Executive orders** — directives to the executive branch with the force of law (within statutory and constitutional limits). Used to implement law and increasingly to drive policy when Congress is gridlocked.
- **Executive agreements** — international agreements that don\'t require Senate ratification (e.g., the Iran nuclear deal as initially structured). More easily reversed by future presidents.
- **Signing statements** — written objections or interpretations attached to a signed bill, often signaling how the executive intends to enforce (or not enforce) certain provisions.
- **Bully pulpit** — using the prestige and visibility of the office to set the public agenda and pressure Congress.
- **Going public** — bypassing Congress to take a case directly to voters via television, social media, and rallies.

### Roles of the President

Chief of state, chief executive, chief diplomat, commander-in-chief, chief legislator (proposes legislation; can veto), party leader, and chief citizen.

### Limits on Presidential Power

- Congressional checks: override, confirmation, impeachment, the power of the purse.
- Judicial review: courts strike down unlawful executive actions (*Youngstown Sheet & Tube v. Sawyer*, 1952).
- Federalism: states implement many federal programs and resist federal mandates.
- Bureaucratic resistance: agencies have their own statutory authorities, civil-service protections, and institutional cultures.
- Public opinion and elections: low approval erodes congressional cooperation; midterms often punish the president\'s party.

### Federalist 70

Hamilton\'s defense of a SINGLE energetic executive: a unitary president provides "energy in the executive" — decision, dispatch, secrecy in foreign affairs, and accountability that a plural executive (like an executive council) cannot. The president is responsible to the people because there is one person to praise or blame.

### Presidential Succession and the 25th Amendment

Order: VP → Speaker of the House → Senate President pro tempore → Cabinet (State, Treasury, Defense, ...). The **25th Amendment** (1967) clarified the rules for filling a vacant vice presidency and for transferring power when the president is incapacitated. Used during medical procedures (anesthesia for colonoscopies, etc.).

### Why It Matters

Presidential power has grown dramatically — through war, crisis, congressional gridlock, and the modern media — yet remains constrained by the constitutional structure the Founders designed. The tension between strong leadership and limited government is the core dynamic of the modern American executive.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `List four FORMAL (constitutional) powers of the President from Article II.`,
        solution: `Any four of the following formal Article II powers:
1. **Commander-in-Chief** of the armed forces (Article II, Section 2).
2. **Negotiate treaties** with foreign governments (subject to 2/3 Senate ratification).
3. **Appoint** federal judges, ambassadors, and other officers (with Senate consent).
4. **Veto** legislation passed by Congress (Article I, Section 7).
5. **Grant pardons and reprieves** for federal offenses.
6. **Take Care Clause** — execute the laws faithfully (Article II, Section 3).
7. **Recommend legislation** to Congress (State of the Union).
8. **Receive ambassadors** (recognize foreign governments).` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `Describe the difference between an **executive order** and an **executive agreement**.`,
        solution: `**Executive order:** a directive issued by the President to the executive branch with the force of law, used to implement statutes or to direct how federal agencies operate. Limited by statutes and the Constitution; subject to judicial review and to repeal by Congress (with sufficient votes) or by the next President.

**Executive agreement:** an international agreement made between the President and another head of state that does NOT require Senate ratification (unlike a treaty). Typically used for pacts that the President can implement under existing law. Easier to negotiate but also easier for a future President to reverse without going through Congress (e.g., the U.S. exit from the JCPOA Iran deal).

**Common feature:** both are unilateral presidential tools that bypass legislative supermajorities and tend to expand when Congress is gridlocked.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Hamilton in *Federalist 70* defends a SINGLE executive rather than an executive council. Summarize his argument and identify TWO advantages of unity in the executive that he emphasizes.`,
        solution: `Hamilton argues that "energy in the executive" is essential to good government — without it, the laws cannot be enforced, the country cannot be defended, and rights cannot be protected. The question is then HOW to design an executive that has this energy. Hamilton concludes a SINGLE executive provides energy that a plural executive (council) cannot.

**Two advantages he emphasizes (any two):**
1. **Decision and dispatch** — one person can act quickly and decisively, especially in emergencies. A council deliberates, divides, and delays.
2. **Accountability** — with one person responsible, the people know whom to blame or praise. With a plural executive, members can shift responsibility onto each other, evading accountability.
3. **Secrecy** — particularly in foreign affairs, a single executive can preserve confidentiality essential to negotiation and military action; a council cannot.
4. **Unity of plan and consistency of action** — one executive can pursue a coherent strategy; a divided council produces wavering, contradictory action.

Hamilton answers the worry that a single executive will turn tyrannical by pointing to the OTHER constitutional checks (Senate confirmation, impeachment, judicial review, the power of the purse) — energy and accountability are achieved without sacrificing republican safety.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Identify THREE checks Congress holds on presidential power and explain why these checks are often difficult to use effectively in modern politics.`,
        solution: `**Three checks:**
1. **Override of veto** (2/3 of both houses).
2. **Senate confirmation** of nominees (judges, Cabinet, agency heads).
3. **Impeachment** by the House (majority) and removal by the Senate (2/3).

(Other valid: power of the purse, declare war, ratify treaties (2/3 Senate), oversight via investigations.)

**Why hard to use:**
- **Supermajority requirements:** 2/3 thresholds (override, conviction, treaty ratification) are nearly impossible to reach in a polarized Senate where party loyalty dominates.
- **Confirmation delays/holds:** the Senate can slow but not always stop nominations; presidents can use *recess appointments* and *acting* officials to bypass.
- **Impeachment:** politically extraordinary — has never resulted in conviction of a sitting president. The political cost to a senator of voting to convict her own party\'s president is severe.
- **Power of the purse:** requires assembling majorities and surviving veto; presidents can shift money administratively or argue spending is required by existing law.
- **Polarization** means presidents rarely face cross-party opposition strong enough to wield checks decisively.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `In *Youngstown Sheet & Tube v. Sawyer* (1952), the Supreme Court struck down President Truman\'s seizure of steel mills during the Korean War. (a) Explain Truman\'s claimed authority and the Court\'s holding. (b) Describe Justice Jackson\'s tripartite framework for evaluating presidential power. (c) Apply the framework to a hypothetical: a president orders federal agencies to ignore an environmental statute Congress recently passed.`,
        solution: `(a) **Truman\'s claim and Court\'s holding:** Truman ordered the seizure of major steel mills to prevent a strike that, he argued, would cripple steel production needed for the war effort. He claimed inherent executive authority as Commander-in-Chief and head of the executive branch. The Court rejected this. It found Congress had specifically considered and REFUSED to authorize such seizures (in the Taft-Hartley Act). With no statutory or constitutional authority, the President had no power to seize private property — that would be lawmaking, not law enforcement.

(b) **Justice Jackson\'s tripartite framework (concurrence — now the standard analytical tool):**
1. **Express or implied authorization from Congress:** presidential power is at its **MAXIMUM** ("plenary"). Combined with the President\'s own constitutional authority.
2. **Congressional silence (the "zone of twilight"):** president acts on his own authority. Result depends on the specifics; Congress and President share concurrent authority.
3. **Acting against express or implied will of Congress:** presidential power is at its **LOWEST EBB**. President can prevail only if Congress has no constitutional authority over the subject AND the President has independent constitutional authority.

(c) **Applying to the hypothetical (President orders agencies to ignore a recent environmental statute):**
- Congress has just affirmatively legislated. The President is acting AGAINST the express will of Congress ⇒ Category 3 — power at its lowest ebb.
- The "Take Care Clause" (Article II, Section 3) commands the President to faithfully execute the laws — not to nullify them.
- Environmental regulation is squarely within Congress\'s Commerce Clause authority, so Congress has constitutional power.
- Therefore the President\'s order would almost certainly be **struck down by the courts**. The President\'s only constitutional alternatives would be to veto the original statute (already too late) or seek congressional repeal — not unilaterally refuse to enforce.` },
    ],
    cards: [
      { front: 'Commander-in-Chief power', back: 'The President commands the armed forces (Article II, Section 2). Limited by Congress\'s power to declare war, fund the military, and pass the War Powers Resolution.', lessonPart: 1 },
      { front: 'Treaty vs executive agreement', back: 'Treaty: requires 2/3 Senate ratification; binds future presidents. Executive agreement: presidential alone (within statutory authority); easily reversible by future presidents.', lessonPart: 1 },
      { front: 'Take Care Clause', back: 'Article II, Section 3 — the President shall "take Care that the Laws be faithfully executed." Forms the duty to enforce statutes Congress has passed.', lessonPart: 1 },
      { front: 'Pardon power — scope and limits', back: 'President can pardon FEDERAL offenses (not state). Cannot pardon impeachment. Pardon is unreviewable but politically charged. Includes commutations, reprieves, and amnesties.', lessonPart: 2 },
      { front: 'Bully pulpit', back: 'Theodore Roosevelt\'s phrase. The use of the prestige of the presidential office to influence public opinion and indirectly press Congress to act. A core informal power.', lessonPart: 3 },
      { front: 'Federalist 70 — main argument', back: 'A single, energetic executive is essential for good government. Unity provides decision, dispatch, secrecy, and accountability that a plural executive (council) cannot. Republican safety is preserved by other checks.', lessonPart: 4 },
      { front: 'Presidential roles (any 5)', back: 'Chief of state; chief executive; commander-in-chief; chief diplomat; chief legislator; party leader; chief citizen.', lessonPart: 4 },
      { front: 'Youngstown — significance', back: 'Established that the President cannot act AGAINST the express will of Congress; presidential power is at its "lowest ebb" in such cases (Jackson\'s framework).', lessonPart: 5 },
      { front: '25th Amendment', back: '(1967) Establishes presidential succession and procedures for filling a vacant vice presidency, and for transferring power when the president is incapacitated. Sections 3 and 4 cover voluntary and involuntary transfers.', lessonPart: 5 },
      { front: 'Order of presidential succession (top 4)', back: 'Vice President → Speaker of the House → Senate President pro tempore → Secretary of State (followed by Treasury, Defense, then other Cabinet by date of department creation).', lessonPart: 5 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'gov-judiciary': {
    textContent: `## The Judiciary

The federal judiciary, established by Article III, is the smallest and least democratic of the three branches — judges are appointed (not elected), serve for life "during good Behavior," and cannot enforce their own rulings. Yet through the doctrine of **judicial review** the Supreme Court has become a co-equal shaper of constitutional meaning and national policy.

### Structure of the Federal Judiciary

- **U.S. District Courts** — 94 trial courts; original jurisdiction in most federal cases.
- **U.S. Courts of Appeals** — 13 circuits; review district-court decisions on questions of law (no new evidence). Most appeals end here.
- **U.S. Supreme Court** — 9 justices; final appellate authority. Almost always discretionary review.

### How the Supreme Court Selects Cases

The Court receives ~7,000 petitions for **writ of certiorari** each year and grants ~80. Four justices must vote to grant cert (the **Rule of Four**). Cases reach the Court usually because of a **circuit split** (lower courts disagree), an important federal question, or an issue of national importance.

### Judicial Review

The power of courts to declare statutes and executive actions unconstitutional. Established in **Marbury v. Madison (1803)** by Chief Justice John Marshall, who reasoned: "It is emphatically the province and duty of the judicial department to say what the law is." Without judicial review, the Constitution would be unenforceable against the political branches.

### Modes of Constitutional Interpretation

- **Originalism / Textualism** — meaning fixed at the time of ratification; text and original public meaning control. Associated with Scalia, Thomas, Gorsuch, Barrett.
- **Living Constitution / Pragmatism** — meaning evolves with society; judges weigh consequences and contemporary values. Associated with Brennan, Marshall, Sotomayor.
- **Stare decisis** — respect for precedent. Strong but not absolute (Court has overturned itself ~230 times — *Brown* overruled *Plessy*, *Dobbs* overruled *Roe*).

### Judicial Activism vs Judicial Restraint

- **Activism:** willing to strike down statutes or overturn precedent; sees the Court as a guardian of constitutional values against majoritarian excess.
- **Restraint:** defers to the elected branches and to precedent; sees activism as anti-democratic.

These labels apply to BOTH liberal and conservative jurisprudence depending on the era; "activist" is not a synonym for "liberal."

### Selecting Federal Judges

- **President nominates;** **Senate confirms** by simple majority (filibuster removed for all judicial nominees by 2017).
- Once confirmed, judges serve for life "during good Behavior" — removable only by impeachment.
- Lifetime tenure was designed to insulate judges from political pressure (Federalist 78 — Hamilton). Critics argue it now produces strategic retirements and outsized influence over generations.

### Checks on the Judiciary

- **Congress:** can change the size of the Supreme Court (Article III), strip jurisdiction in narrow areas, propose constitutional amendments to override decisions, fail to fund judicial actions.
- **President:** appoints judges; can refuse (informally) to enforce decisions (Andrew Jackson, allegedly: "John Marshall has made his decision; now let him enforce it").
- **States and lower courts:** narrow interpretations, slow implementation.
- **Public opinion** indirectly: extreme decisions risk legitimacy; the Court reads the political environment.

### Why It Matters

The Supreme Court has resolved many of the most consequential disputes in American history: federalism (*McCulloch*), slavery (*Dred Scott*), segregation (*Brown*), abortion (*Roe* and *Dobbs*), gun rights (*Heller*), gay marriage (*Obergefell*), election outcomes (*Bush v. Gore*). The Court\'s role in policymaking — for better or worse — is a central feature of modern American government.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `What is **judicial review** and which Supreme Court case established it?`,
        solution: `**Judicial review** is the power of the courts to declare statutes and executive actions unconstitutional and therefore unenforceable. It makes the courts the final interpreter of the Constitution\'s meaning and the enforcer of constitutional limits against the political branches.

It was established in **Marbury v. Madison (1803)** by Chief Justice **John Marshall**, who held that Section 13 of the Judiciary Act of 1789 unconstitutionally expanded the Supreme Court\'s original jurisdiction beyond what Article III allows. Although Marbury lost his commission, the Court asserted the much larger power of declaring acts of Congress unconstitutional — "It is emphatically the province and duty of the judicial department to say what the law is."` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `What is the **Rule of Four** in the Supreme Court? Approximately what fraction of cert petitions does the Court actually hear?`,
        solution: `**Rule of Four:** the Supreme Court grants a writ of certiorari (agrees to hear a case) when AT LEAST FOUR of the nine justices vote to grant it. This sub-majority rule allows minority blocs to push cases onto the docket they think important.

**Fraction heard:** the Court receives roughly **7,000 cert petitions per year** and grants approximately **80**, so it hears slightly **more than 1%** of petitions. Most cases that reach the Supreme Court therefore END at the U.S. Court of Appeals, which is the practical court of last resort for the vast majority of federal litigation.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Compare the **originalist** and **living Constitution** approaches to constitutional interpretation. Identify ONE strength and ONE weakness of each.`,
        solution: `**Originalism (Scalia, Thomas, Gorsuch, Barrett):** the Constitution\'s meaning is fixed at the time of ratification; judges should apply the original public meaning of the text rather than evolving with social values.
- **Strength:** Constrains judges from imposing their personal preferences; provides predictability and democratic legitimacy (the Constitution means what was ratified, not what nine justices say it should mean today).
- **Weakness:** Strict originalism can produce results widely seen as unjust by modern standards (e.g., it would have left segregation untouched if applied rigidly to the 14th Amendment); historical meaning is often contested or unknowable.

**Living Constitution (Brennan, Marshall, Sotomayor):** constitutional meaning evolves with society; broad textual provisions ("equal protection," "cruel and unusual punishment") were meant to be applied to changing circumstances.
- **Strength:** Allows the Constitution to address modern problems (privacy, technology, civil rights) the Founders could not foresee; aligns constitutional law with evolving moral standards.
- **Weakness:** Critics argue it gives unelected judges essentially legislative power, with little to discipline their personal preferences; raises concerns about democratic legitimacy.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain Hamilton\'s argument in *Federalist 78* that the judiciary will be the "least dangerous branch." Do modern critics of judicial power agree? Briefly justify.`,
        solution: `**Hamilton\'s argument (Federalist 78):** The judiciary is the LEAST dangerous branch because it has neither "FORCE nor WILL but merely judgment" — it cannot raise armies (executive) or appropriate money (legislative). It can decide cases but must rely on the executive to enforce its rulings. To insulate this weak branch from political pressure, judges should serve lifetime appointments "during good Behavior," allowing them to apply the law without fear of reprisal from the political branches.

**Modern critics largely DISAGREE.** They argue:
1. **Judicial review,** combined with lifetime tenure, gives the Supreme Court enormous power to set policy (abortion, gun rights, voting rights, presidential elections).
2. **Lack of accountability:** unelected judges decide questions that significantly affect the lives of millions; mistakes or biases persist for decades.
3. **Strategic retirements** allow justices to pick the political moment of departure, magnifying partisan influence over composition.
4. **Decisions like *Bush v. Gore* (2000), *Citizens United* (2010), and *Dobbs* (2022) show the Court resolving deeply contested political questions in ways that affect election outcomes and statutes.

Defenders reply that the Court still cannot tax, spend, or enforce, and that it depends on public legitimacy and the political branches\' cooperation. The empirical case is mixed: the Court is strongest when its decisions align with broad public consensus; it can be defied or reshaped by the political branches when it strays too far.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `Identify FOUR ways the political branches and the public can constrain the Supreme Court when it issues unpopular decisions. For each, give one historical or contemporary example.`,
        solution: `1. **Constitutional amendment.** Congress can propose (2/3 vote) and states can ratify (3/4) amendments that override Court decisions. *Examples:* the **11th Amendment** (1795) overrode *Chisholm v. Georgia*; the **14th Amendment** (1868) overrode *Dred Scott* (1857); the **16th Amendment** (1913) overrode *Pollock v. Farmers\' Loan & Trust* (income-tax case); the **26th Amendment** (1971) lowered the voting age to 18 after *Oregon v. Mitchell*.

2. **Congressional jurisdiction-stripping.** Article III, Section 2 says Congress can make "Exceptions" to the Court\'s appellate jurisdiction. *Example:* in *Ex Parte McCardle* (1869) Congress stripped the Court\'s jurisdiction over a habeas case mid-decision; the Court accepted the loss of jurisdiction. Modern proposals would strip jurisdiction over particular topics (abortion, school prayer, immigration), though most have not passed.

3. **Court-packing or restructuring.** Article III sets no fixed number of justices; Congress has changed the size of the Court six times. *Example:* FDR\'s 1937 court-packing plan (failed but pressured the Court to "switch in time" and uphold New Deal programs); modern proposals to expand the Court to 13.

4. **Executive non-enforcement or slow implementation.** *Example:* President Andrew Jackson on *Worcester v. Georgia* (1832), allegedly: "John Marshall has made his decision; now let him enforce it." Massive resistance to *Brown v. Board* (1954) by Southern states and slow federal enforcement until *Brown II* and the 1964 Civil Rights Act.

5. **Public opinion and Court legitimacy.** The Court reads the political environment; sustained public opposition can shift its trajectory (*West Coast Hotel* of 1937; the slow narrowing of *Roe* before its eventual overruling in *Dobbs*). Repeated controversial decisions can damage perceived legitimacy and provoke calls for reform.` },
    ],
    cards: [
      { front: 'Three levels of the federal judiciary', back: 'U.S. District Courts (trial courts, 94 of them) → U.S. Courts of Appeals (13 circuits, review questions of law) → U.S. Supreme Court (9 justices, final appeal).', lessonPart: 1 },
      { front: 'Marbury v. Madison (1803)', back: 'Established judicial review — the power of courts to strike down statutes and executive actions that violate the Constitution. Decided by Chief Justice John Marshall.', lessonPart: 2 },
      { front: 'Writ of certiorari', back: 'Order from the Supreme Court agreeing to review a lower-court decision. Discretionary; granted under the Rule of Four (4 justices vote yes). Court grants ~80 of ~7,000 petitions per year.', lessonPart: 3 },
      { front: 'Originalism vs Living Constitution', back: 'Originalism: meaning fixed at time of ratification (Scalia, Thomas, Gorsuch). Living Constitution: meaning evolves with society and contemporary values (Brennan, Marshall, Sotomayor).', lessonPart: 4 },
      { front: 'Stare decisis', back: 'Latin: "to stand by things decided." The doctrine that courts should respect precedent. Strong but not absolute — *Brown* overruled *Plessy*; *Dobbs* overruled *Roe*.', lessonPart: 4 },
      { front: 'Judicial activism vs judicial restraint', back: 'Activism: willing to strike statutes or overturn precedent. Restraint: defers to elected branches and precedent. NEITHER label is inherently liberal or conservative.', lessonPart: 4 },
      { front: 'How federal judges are selected and removed', back: 'Nominated by the President; confirmed by Senate (simple majority since filibuster removal in 2013/2017). Serve "during good Behavior" — lifetime tenure, removable only by impeachment.', lessonPart: 5 },
      { front: 'Federalist 78 — main argument', back: 'The judiciary is the "least dangerous branch" — neither force nor will, only judgment. Lifetime tenure insulates judges from political pressure so they can defend the Constitution against majoritarian excess.', lessonPart: 5 },
      { front: 'Two ways Congress can constrain the Court', back: '(1) Constitutional amendment (2/3 of both houses + 3/4 of states) overriding a decision. (2) Jurisdiction-stripping under Article III, Section 2 ("Exceptions" clause). Also: change Court size, refuse to fund.', lessonPart: 6 },
      { front: 'Brown v. Board of Education (1954)', back: 'Unanimously overruled *Plessy v. Ferguson* (1896); held that racially segregated public schools are inherently unequal under the Equal Protection Clause. Triggered massive resistance and the modern Civil Rights Movement.', lessonPart: 6 },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  'gov-bureaucracy': {
    textContent: `## The Federal Bureaucracy

The federal bureaucracy is the vast network of agencies that actually IMPLEMENT the laws Congress passes and the policies the President sets. About **2.1 million** federal civilian employees work in 15 Cabinet departments, ~60 independent agencies, and dozens of government corporations. They write the regulations that translate broad statutes into operating rules, deliver services from Social Security checks to weather forecasts, and enforce everything from food safety to securities law.

### Structure of the Bureaucracy

- **Cabinet departments (15):** Headed by a secretary appointed by the President with Senate confirmation. State, Treasury, Defense, Justice, Interior, Agriculture, Commerce, Labor, HHS, HUD, Transportation, Energy, Education, Veterans Affairs, Homeland Security.
- **Independent regulatory commissions:** Insulated from direct presidential control to make technical rules with limited political interference. Examples: Federal Reserve, FCC, SEC, FTC, NLRB. Commissioners serve fixed, staggered terms and can be removed only "for cause."
- **Independent executive agencies:** Stand outside cabinet departments but under presidential direction (NASA, EPA, CIA, GSA, OPM).
- **Government corporations:** Operate like private businesses (USPS, Amtrak, FDIC).

### How Bureaucrats Are Hired

- **Spoils system (1828–1883):** patronage — winning party rewards supporters with government jobs.
- **Pendleton Civil Service Act (1883):** introduced merit-based hiring after President Garfield was assassinated by a disappointed office-seeker. Gradually expanded; today most federal employees are hired through the **competitive civil service**, protected from political dismissal.
- A small number of top positions remain political appointments (Cabinet secretaries, deputies, ambassadors, agency heads) — "political appointees" change with administrations.

### Regulatory Rulemaking

Congress writes statutes in broad terms ("clean air," "fair competition") and delegates the technical detail to agencies. Under the **Administrative Procedure Act (1946)**, the typical rulemaking process is:

1. Congress passes statute delegating authority.
2. Agency drafts proposed rule.
3. **Notice-and-comment** in the Federal Register — public, industry, and stakeholders submit comments.
4. Agency reviews comments and issues a final rule.
5. Final rule has the force of law unless successfully challenged in court.

Courts evaluate agency action under the **Chevron doctrine** (deference to reasonable agency interpretation of ambiguous statutes) — though *Loper Bright Enterprises v. Raimondo* (2024) significantly narrowed Chevron deference, returning more interpretive authority to courts.

### Iron Triangles and Issue Networks

- **Iron triangle:** durable, mutually beneficial alliance among (1) a congressional committee, (2) a federal agency, and (3) interest groups in the same policy area. Each side helps the others — Congress funds and protects the agency, the agency delivers benefits to constituents and groups, and groups support the committee politically. Example: the agriculture iron triangle (Agriculture Committees + USDA + farm groups).
- **Issue networks:** broader, more fluid alliances of think tanks, journalists, academics, NGOs, agencies, and committees that form around an issue (climate, healthcare). More open and contested than iron triangles.

### Checks on the Bureaucracy

- **Congressional oversight** — hearings, investigations, GAO audits, power of the purse. Reauthorizations and budget cuts.
- **Presidential control** — executive orders, agency leadership appointments, OMB review of regulations.
- **Judicial review** — courts can strike down agency actions that exceed statutory authority or violate the Constitution.
- **Whistleblowers** — protected under the Whistleblower Protection Act (1989); famous examples include Daniel Ellsberg (Pentagon Papers), Edward Snowden (NSA surveillance).

### Why It Matters

Most of the rules that govern daily life — workplace safety, drug approvals, environmental standards, financial regulation, food safety — are not written by Congress but by bureaucratic agencies operating under congressional delegation. Understanding bureaucratic politics is therefore essential to understanding how policy is actually made.`,
    problems: [
      { order: 1, difficulty: 'EASY' as Difficulty,
        question: `Explain the difference between a **political appointee** and a **civil service** employee in the federal bureaucracy.`,
        solution: `**Political appointee:** A senior official chosen by the President (with Senate confirmation for top positions like Cabinet secretaries, deputy secretaries, and agency heads). They serve at the President\'s pleasure and typically leave when the administration changes. There are roughly 4,000 political appointees across the federal government.

**Civil service employee:** A federal worker hired through a merit-based, competitive examination process under the **Pendleton Civil Service Act of 1883** and its descendants. They are protected from political dismissal — they can only be fired for cause (poor performance, misconduct). They constitute the vast majority of the federal workforce (~2 million people).

**Net effect:** The political appointees provide political direction and policy priorities; the civil service provides continuity, expertise, and institutional memory across administrations.` },
      { order: 2, difficulty: 'EASY' as Difficulty,
        question: `What is the **Pendleton Civil Service Act of 1883** and what political event motivated it?`,
        solution: `The **Pendleton Act (1883)** ended the spoils (patronage) system for federal hiring in favor of a **merit-based civil service**. It established competitive examinations for most federal positions and created the Civil Service Commission (predecessor of today\'s Office of Personnel Management) to oversee the system. Initially it covered only about 10% of federal jobs but expanded steadily over time to cover the vast majority of positions.

**Motivating event:** The 1881 **assassination of President James Garfield** by Charles Guiteau, a disappointed office-seeker who believed he was owed a federal job in return for his political support. The shooting and Garfield\'s lingering death generated widespread public outrage at the corruption and dysfunction of the patronage system, providing the political momentum to pass the Pendleton Act two years later.` },
      { order: 3, difficulty: 'MEDIUM' as Difficulty,
        question: `Describe the steps an agency takes to issue a federal regulation under the Administrative Procedure Act of 1946. Why does this process typically take years?`,
        solution: `**Steps under the APA:**
1. **Statutory authority:** Congress passes a statute granting the agency authority to regulate in some area (e.g., the Clean Air Act gives EPA authority to set air-quality standards).
2. **Proposed rule:** Agency drafts a proposed regulation, often after extensive internal study, scientific review, and consultation with stakeholders.
3. **Notice-and-comment:** Agency publishes the proposed rule in the **Federal Register**, opening a comment period (typically 30–90 days, sometimes longer). Public, industry, NGOs, state governments, and other agencies submit comments.
4. **Review and revision:** Agency reviews and analyzes all comments (sometimes thousands or millions on major rules); revises the proposal in response to legitimate concerns.
5. **OMB review:** For major rules, the Office of Information and Regulatory Affairs (OIRA, within OMB) reviews for cost-benefit analysis and consistency with administration priorities.
6. **Final rule:** Agency issues a final rule with response to comments. Effective on a stated date.
7. **Litigation:** Affected parties may sue in federal court, challenging the rule\'s statutory or constitutional basis.

**Why it takes years:**
- Scientific and economic analysis of complex problems is genuinely slow.
- Statutorily required comment periods, OMB review, and inter-agency consultation each add months.
- Affected industries often submit thousands of pages of detailed comments that the agency must read and respond to.
- Litigation can stay implementation for years.
- Major rules attract White House attention and become politically negotiated, slowing them further.

The APA was designed to ensure transparency and accountability in regulation — at the cost of speed.` },
      { order: 4, difficulty: 'MEDIUM' as Difficulty,
        question: `Explain the concept of an **iron triangle**. Identify the three sides and describe how each participant benefits.`,
        solution: `An **iron triangle** is a durable, mutually beneficial alliance among three sets of actors that share an interest in a particular policy area:

1. **Congressional subcommittee** with jurisdiction over the policy area (e.g., House Agriculture Subcommittee on Commodity Markets).
2. **Federal bureaucratic agency** that administers programs in that area (e.g., USDA Agricultural Marketing Service).
3. **Interest groups** representing the affected constituencies (e.g., farm bureaus, commodity trade associations).

**How each side benefits:**
- **Congressional members** receive campaign contributions, electoral support, and constituent services from interest groups; receive policy expertise and helpful testimony from the agency.
- **Agency officials** receive favorable budget treatment and statutory authority from the committee; receive political support and field information from groups.
- **Interest groups** receive friendly statutes from the committee and favorable program implementation from the agency.

Each side has powerful incentives to maintain the relationship; outsiders find it hard to break in. Iron triangles are characteristically stable, narrow, and insulated from broader public oversight.

**Note:** Modern policymaking is more often described as **issue networks** — broader, more fluid alliances of think tanks, NGOs, journalists, agencies, and committees that form around an issue. Iron triangles still exist (especially in defense, agriculture, and veterans\' affairs) but compete with these more open networks.` },
      { order: 5, difficulty: 'HARD' as Difficulty,
        question: `In *Loper Bright Enterprises v. Raimondo* (2024), the Supreme Court significantly narrowed **Chevron deference**. Explain (a) what Chevron deference was, (b) what *Loper Bright* changed, and (c) what the practical implications are for the federal bureaucracy and Congress.`,
        solution: `(a) **Chevron deference (Chevron U.S.A. v. NRDC, 1984):** When a federal statute is **AMBIGUOUS**, courts defer to a federal agency\'s **reasonable interpretation** of its own statutory authority. The two-step framework: (1) Is the statute ambiguous? If clear, court applies its plain meaning. (2) If ambiguous, the agency\'s interpretation controls so long as it is reasonable, even if the court would have read the statute differently. Chevron empowered agencies to fill statutory gaps with technical expertise.

(b) **What Loper Bright changed:** The Court (Roberts, 6–3) overruled Chevron. Going forward, federal courts must independently determine the best reading of an ambiguous statute, not defer to the agency. Agencies\' views may still be PERSUASIVE based on expertise or thoroughness (older Skidmore-style "respect"), but they no longer command judicial deference. The Court reasoned that the Administrative Procedure Act requires courts — not agencies — to "decide all relevant questions of law."

(c) **Practical implications:**
- **More litigation, more uncertainty.** Industries opposed to a rule are more likely to sue and more likely to win, because they no longer face a deference presumption.
- **Slower and narrower rulemaking.** Agencies will draft rules more cautiously, anticipating closer judicial scrutiny; ambitious regulatory programs (climate, financial reform) face higher legal risk.
- **Stronger pressure on Congress to write more specific statutes.** When agencies cannot fill gaps, ambiguities default to whatever a court decides — Congress can no longer rely on agencies to operationalize broad delegations.
- **Shifts power from the executive branch to the judiciary.** Federal judges (lifetime appointed) gain more authority over technical regulatory questions previously resolved by subject-matter experts.
- **Differential effects across administrations.** Aggressive deregulatory or regulatory moves by either party become harder to sustain — a structural check on bureaucratic policymaking but also on Congress\'s ability to delegate.` },
    ],
    cards: [
      { front: 'Cabinet departments — number and how heads are chosen', back: '15 cabinet departments. Each headed by a secretary appointed by the President and confirmed by the Senate. Examples: State, Treasury, Defense, Justice, HHS, Homeland Security.', lessonPart: 1 },
      { front: 'Independent regulatory commission', back: 'Multi-member commission insulated from direct presidential control. Members serve fixed, staggered terms and can be removed only "for cause." Examples: Federal Reserve, FCC, SEC, FTC, NLRB.', lessonPart: 1 },
      { front: 'Government corporation', back: 'Federal entity that operates more like a private business and charges for services. Examples: USPS (mail), Amtrak (passenger rail), FDIC (deposit insurance), TVA (electricity).', lessonPart: 1 },
      { front: 'Pendleton Civil Service Act (1883)', back: 'Replaced patronage (spoils) hiring with merit-based hiring through competitive exams. Triggered by President Garfield\'s assassination by a disappointed office-seeker. Foundation of today\'s federal civil service.', lessonPart: 2 },
      { front: 'Spoils system', back: 'Pre-1883 practice of awarding federal jobs to political supporters of the winning party (associated with President Andrew Jackson). Replaced by merit hiring under the Pendleton Act.', lessonPart: 2 },
      { front: 'Notice-and-comment rulemaking', back: 'APA-required procedure: agency publishes proposed rule in the Federal Register, accepts public comments (typically 30–90 days), reviews and responds, issues final rule. Provides transparency at the cost of speed.', lessonPart: 3 },
      { front: 'Iron triangle', back: 'Durable alliance among (1) congressional subcommittee, (2) federal agency, and (3) interest group in the same policy area. Each side helps the others; insulated from outside influence. Classic example: agriculture policy.', lessonPart: 4 },
      { front: 'Issue network', back: 'Broader, more fluid alliance of agencies, committees, interest groups, think tanks, journalists, and academics around an issue (e.g., climate). More open and contested than iron triangles.', lessonPart: 4 },
      { front: 'Chevron deference and its 2024 overruling', back: 'Chevron (1984): courts defer to agency\'s reasonable interpretation of ambiguous statutes. Loper Bright Enterprises v. Raimondo (2024) overruled Chevron — courts now independently interpret statutes, weakening agency authority.', lessonPart: 5 },
      { front: 'Three checks Congress holds on bureaucratic agencies', back: '(1) Power of the purse — appropriations cuts/conditions. (2) Oversight hearings and investigations. (3) Authorization/reauthorization of agency programs. Plus: GAO audits, statutory amendments.', lessonPart: 6 },
    ],
  },
}

async function main() {
  console.log('=== AP US Government content fill ===\n')
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
