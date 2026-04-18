const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src/data/interactive-lessons');

const files = [
{file:'gov-constitutional-foundations-part1.ts', content:`export const govConstitutionalFoundationsPart1Data = {
  topicSlug: 'gov-constitutional-foundations',
  sections: [
    {id:'govconst1-intro',type:'text' as const,content:\`
# 🏛️ Constitutional Foundations

**Part 1 of 7 — The Constitution & Founding Principles**

---

| Section |
|---------|
| 📖 Enlightenment Influences |
| The Articles of Confederation |
| Constitutional Convention & Key Compromises |
| Ratification Debate: Federalists vs. Anti-Federalists |

> 🔑 **Key Concept:** The AP exam heavily tests the **philosophical foundations** of the Constitution (Locke, Montesquieu, Rousseau) and the **compromises** that made ratification possible. You must know both the Federalist AND Anti-Federalist arguments.
\`},
    {id:'govconst1-influences',type:'text' as const,content:\`
## 📖 Enlightenment Foundations

The Constitution was built on ideas from Enlightenment thinkers:

| Thinker | Key Idea | Constitutional Application |
|---|---|---|
| **John Locke** | Natural rights (life, liberty, property); social contract; consent of the governed | Declaration of Independence; purpose of government is to protect rights |
| **Montesquieu** | Separation of powers into branches | Three branches: legislative, executive, judicial |
| **Rousseau** | Popular sovereignty — government authority from the people | "We the People"; republican government |

### Key Documents Before the Constitution
- **Magna Carta (1215)** — limited the power of the English king; established rule of law
- **English Bill of Rights (1689)** — parliamentary supremacy; protected individual rights
- **Articles of Confederation (1781)** — first U.S. government; deliberately weak central government

### Why the Articles Failed
| Problem | Detail |
|---|---|
| **No executive branch** | No president to enforce laws |
| **No national judiciary** | No courts to settle disputes between states |
| **No taxing power** | Congress could request money but not compel states to pay |
| **Unanimous consent for amendments** | Nearly impossible to change anything |
| **Shays' Rebellion (1786–87)** | Armed uprising in Massachusetts that Congress couldn't suppress — demonstrated need for stronger government |

> 🔑 **AP Connection:** Shays' Rebellion is a key turning point — it convinced leaders like Madison and Hamilton that the Articles were too weak and that a Constitutional Convention was necessary.
\`},
    {id:'govconst1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'Which Enlightenment thinker\\'s ideas most directly influenced the Constitution\\'s separation of powers into three branches?',options:['John Locke, who argued for natural rights and consent of the governed','Montesquieu, who argued that governmental power should be divided among separate branches to prevent tyranny','Thomas Hobbes, who argued for a strong absolute sovereign to prevent chaos','Adam Smith, who argued for free-market economics and limited government regulation'],correctAnswer:1,explanation:'Montesquieu\\'s The Spirit of the Laws (1748) argued that liberty is best protected when governmental power is divided among legislative, executive, and judicial branches that can check each other. The Framers directly applied this principle in Articles I, II, and III of the Constitution.'},
      {question:'Why did Shays\\' Rebellion (1786–87) convince many American leaders that the Articles of Confederation needed to be replaced?',options:['The rebellion proved that individual states were too powerful and needed to be abolished entirely','The rebellion demonstrated that the national government under the Articles was too weak to maintain order, collect taxes, or raise an army to respond to domestic crises','The rebellion was led by foreign powers seeking to reclaim American territory after the Revolution','The rebellion succeeded in establishing a military dictatorship that the Articles could not prevent'],correctAnswer:1,explanation:'Shays\\' Rebellion — an armed uprising by debt-ridden Massachusetts farmers — exposed the Articles\\' fatal weakness: Congress had no power to tax, no standing army, and no executive to respond. The national government had to rely on state militias. This crisis directly motivated the calling of the Constitutional Convention in 1787.'}
    ]}},
    {id:'govconst1-compromises',type:'text' as const,content:\`
## 📖 Constitutional Convention & Key Compromises

The 1787 Constitutional Convention in Philadelphia produced the Constitution through several critical compromises:

### The Great Compromise (Connecticut Compromise)
| Plan | Proposed By | Details |
|---|---|---|
| **Virginia Plan** | James Madison | Bicameral legislature; both chambers based on **population** (favored large states) |
| **New Jersey Plan** | William Paterson | Unicameral legislature; **equal representation** for each state (favored small states) |
| **Great Compromise** | Roger Sherman | Bicameral: **House** based on population + **Senate** with equal representation (2 per state) |

### Three-Fifths Compromise
- Question: Should enslaved people be counted for representation in the House?
- **Southern states** wanted to count them (more representatives) but not tax them
- **Northern states** objected to counting people who had no rights
- **Compromise:** Each enslaved person counted as **3/5 of a person** for representation AND taxation
- This gave slaveholding states disproportionate political power until the Civil War

### Electoral College
- Compromise between election by Congress vs. direct popular vote
- Each state gets electors equal to its total congressional representation (House + Senate)
- Designed to balance popular will with state-level representation and prevent "mob rule" (as the Framers saw it)

### Commerce & Slave Trade Compromise
- Congress could regulate interstate and foreign commerce but could NOT ban the slave trade for **20 years** (until 1808)
- No export taxes (protecting Southern agricultural exports)

> 🔑 **AP Connection:** The Three-Fifths Compromise and Electoral College are **heavily tested**. The AP exam asks how these compromises shaped American political development and whose interests they served.
\`},
    {id:'govconst1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'What problem did the Great Compromise (Connecticut Compromise) resolve at the Constitutional Convention?',options:['The dispute between Northern and Southern states over whether enslaved people should be counted for taxation purposes','The conflict between large and small states over congressional representation — creating a bicameral legislature with population-based House and equal-representation Senate','The question of whether the president should be elected by Congress or by direct popular vote','The disagreement over whether the federal government should have the power to levy taxes on imports and exports'],correctAnswer:1,explanation:'The Great Compromise merged the Virginia Plan (representation by population) and New Jersey Plan (equal representation). The result was a bicameral Congress: the House of Representatives based on population (favoring large states) and the Senate with two senators per state (protecting small states).'},
      {question:'How did the Three-Fifths Compromise affect political power in the early United States?',options:['It gave Northern industrial states more representatives in Congress because they had larger free populations','It gave slaveholding Southern states disproportionate representation in the House by counting enslaved people (who could not vote) toward population totals','It had no practical effect because enslaved people were counted equally in all states regardless of the compromise','It reduced the South\\'s political power by excluding all enslaved people from census counts'],correctAnswer:1,explanation:'By counting each enslaved person as 3/5 of a person for apportionment, the compromise inflated Southern states\\' representation in the House (and the Electoral College, which is based on total congressional seats). This gave the South outsized political power despite enslaved people having no voting rights — a structural advantage that persisted until the 13th Amendment (1865).'}
    ]}}
  ]
};\n`},
{file:'gov-federalism-part1.ts', content:`export const govFederalismPart1Data = {
  topicSlug: 'gov-federalism',
  sections: [
    {id:'govfeder1-intro',type:'text' as const,content:\`
# 🏛️ Federalism

**Part 1 of 7 — Division of Power Between National & State Governments**

---

| Section |
|---------|
| 📖 What Is Federalism? |
| Types of Powers |
| Evolution of Federalism |
| Key Supreme Court Cases |

> 🔑 **Key Concept:** Federalism is the **division of power** between national and state governments. The AP exam tests how this relationship has shifted over time — from dual federalism (separate spheres) to cooperative federalism (shared responsibilities).
\`},
    {id:'govfeder1-powers',type:'text' as const,content:\`
## 📖 Types of Powers

| Power Type | Definition | Examples |
|---|---|---|
| **Enumerated (delegated) powers** | Explicitly granted to the national government by the Constitution | Declare war, coin money, regulate interstate commerce, establish post offices (Article I, §8) |
| **Reserved powers** | Powers not delegated to the national government, reserved to the states (10th Amendment) | Establish schools, issue licenses, conduct elections, regulate intrastate commerce |
| **Concurrent powers** | Shared by both national and state governments | Tax, build roads, establish courts, borrow money |
| **Implied powers** | Not explicitly stated but derived from the Necessary and Proper Clause (Article I, §8, cl. 18) | Establish a national bank, create the draft, regulate nuclear power |

### Key Constitutional Provisions
- **Supremacy Clause (Article VI)** — federal law is the "supreme law of the land" when there's a conflict with state law
- **10th Amendment** — powers not delegated to the federal government are reserved to the states or the people
- **Commerce Clause (Article I, §8)** — Congress can regulate interstate commerce (the most expansive federal power)
- **Necessary and Proper Clause** — Congress can make laws "necessary and proper" to carry out its enumerated powers (elastic clause)

### Models of Federalism
| Model | Era | Description |
|---|---|---|
| **Dual federalism** | 1789–1930s | "Layer cake" — national and state governments operate in separate, distinct spheres |
| **Cooperative federalism** | 1930s–1960s | "Marble cake" — national and state governments share responsibilities (New Deal era) |
| **New federalism** | 1970s–present | Devolution — shifting power back to states through block grants and reduced federal mandates |

> 🔑 **AP Connection:** The AP exam loves the **layer cake vs. marble cake** metaphor. Be ready to explain how the New Deal (1930s) shifted the U.S. from dual to cooperative federalism through expanded federal programs.
\`},
    {id:'govfeder1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'Which constitutional provision has been most frequently used to expand federal power over the states?',options:['The Second Amendment\\'s protection of the right to bear arms','The Commerce Clause (Article I, §8), which grants Congress power to regulate interstate commerce','The Third Amendment\\'s prohibition on quartering soldiers in private homes','The Seventh Amendment\\'s guarantee of jury trials in civil cases exceeding $20'],correctAnswer:1,explanation:'The Commerce Clause has been interpreted extremely broadly — allowing Congress to regulate not just trade between states but virtually any economic activity that affects interstate commerce. This interpretation expanded dramatically after the New Deal era and is the constitutional basis for most federal regulatory power.'},
      {question:'How does "cooperative federalism" differ from "dual federalism"?',options:['In cooperative federalism, states have no power at all and the national government makes every decision','In dual federalism, national and state governments operate in separate spheres, while in cooperative federalism they share responsibilities and collaborate on policy implementation','Dual federalism gives all power to the states, while cooperative federalism gives all power to the president','There is no practical difference — both terms describe the identical relationship between state and federal power'],correctAnswer:1,explanation:'Dual federalism ("layer cake") treated national and state power as distinct, non-overlapping spheres. Cooperative federalism ("marble cake") emerged during the New Deal when the federal government began working with states on shared programs — federal funding with state implementation (e.g., Medicaid, highway construction, education grants).'}
    ]}},
    {id:'govfeder1-cases',type:'text' as const,content:\`
## 📖 Key Supreme Court Cases on Federalism

| Case | Year | Ruling | Significance |
|---|---|---|---|
| **McCulloch v. Maryland** | 1819 | Federal government has **implied powers** (Necessary and Proper Clause); states cannot tax federal institutions | Established broad interpretation of federal power; national bank was constitutional |
| **Gibbons v. Ogden** | 1824 | Federal government has broad power to regulate **interstate commerce** | Expanded Commerce Clause; federal power over navigation |
| **United States v. Lopez** | 1995 | Struck down the Gun-Free School Zones Act — Congress exceeded its Commerce Clause authority | First case in 60 years to limit Commerce Clause; signaled New Federalism |

### McCulloch v. Maryland — In Depth
- **Facts:** Maryland taxed the Second Bank of the United States; cashier James McCulloch refused to pay
- **Question 1:** Can Congress create a national bank? (Not explicitly in Constitution)
- **Chief Justice Marshall's ruling:** YES — the Necessary and Proper Clause gives Congress implied powers beyond those explicitly listed
- **Question 2:** Can a state tax a federal institution?
- **Marshall's ruling:** NO — "the power to tax involves the power to destroy"; Supremacy Clause prevents states from taxing federal government

> 🔑 **AP Connection:** McCulloch v. Maryland is the **most important federalism case** on the AP exam. You must know both holdings: (1) implied powers exist and (2) states cannot tax the federal government.
\`},
    {id:'govfeder1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'In McCulloch v. Maryland (1819), Chief Justice Marshall ruled that Congress could create a national bank even though this power is not explicitly listed in the Constitution. What constitutional basis did he use?',options:['The First Amendment\\'s protection of free speech and assembly','The Necessary and Proper Clause, which grants Congress implied powers to carry out its enumerated powers','The Equal Protection Clause of the 14th Amendment','The 10th Amendment\\'s reservation of powers to the states'],correctAnswer:1,explanation:'Marshall ruled that the Necessary and Proper Clause (Article I, §8, cl. 18) gives Congress the power to make laws "necessary and proper" to execute its enumerated powers. Since Congress has enumerated powers to tax, borrow, and regulate commerce, creating a bank was a "necessary and proper" means of exercising those powers.'},
      {question:'Why was United States v. Lopez (1995) considered a landmark case for federalism?',options:['It was the first case to establish that the federal government has implied powers under the Necessary and Proper Clause','It was the first case in over 60 years where the Supreme Court struck down a federal law as exceeding Congress\\'s Commerce Clause authority, signaling limits on federal power','It established that states have no power to regulate education within their borders','It gave the president unlimited power to override state laws through executive orders'],correctAnswer:1,explanation:'Lopez struck down the Gun-Free School Zones Act, ruling that carrying a gun near a school was not "economic activity" substantially affecting interstate commerce. This was the first time since the New Deal that the Court limited Commerce Clause power, marking a shift toward New Federalism and recognizing boundaries on federal authority.'}
    ]}}
  ]
};\n`},
{file:'gov-congress-part1.ts', content:`export const govCongressPart1Data = {
  topicSlug: 'gov-congress',
  sections: [
    {id:'govcongr1-intro',type:'text' as const,content:\`
# 🏛️ Congress

**Part 1 of 7 — Structure, Powers & the Legislative Process**

---

| Section |
|---------|
| 📖 Bicameral Structure |
| Powers of Congress |
| The Legislative Process |
| Congressional Leadership |

> 🔑 **Key Concept:** The AP exam tests the **structural differences** between the House and Senate, the **legislative process** (how a bill becomes a law), and the **informal powers** that affect how Congress actually operates (filibuster, committee system, logrolling).
\`},
    {id:'govcongr1-structure',type:'text' as const,content:\`
## 📖 Bicameral Structure: House vs. Senate

| Feature | House of Representatives | Senate |
|---|---|---|
| **Members** | 435 | 100 (2 per state) |
| **Term** | 2 years | 6 years (staggered: 1/3 elected every 2 years) |
| **Age requirement** | 25+ | 30+ |
| **Representation** | Based on state **population** | **Equal** — 2 per state regardless of size |
| **Exclusive powers** | Initiate revenue (tax) bills; impeach federal officials | Confirm presidential appointments; ratify treaties (2/3); try impeachments |
| **Leadership** | Speaker of the House (most powerful) | Vice President (President of the Senate); President Pro Tempore; Majority Leader |
| **Rules** | Strict rules; limited debate time (Rules Committee controls floor debate) | Fewer rules; unlimited debate (**filibuster**) unless 60 senators invoke cloture |
| **Character** | "The People's House" — more responsive to public opinion (short terms) | "The World's Greatest Deliberative Body" — more insulated, deliberate (long terms) |

### Why Bicameralism?
- **Great Compromise** — resolved conflict between large and small states
- **Checks within Congress** — both chambers must agree for legislation to pass
- **Different perspectives** — House reflects current popular opinion; Senate provides stability and minority protection

> 🔑 **AP Connection:** The filibuster is heavily tested. It requires **60 votes to end debate** (cloture), effectively meaning major legislation needs 60 Senate votes to pass — not just a simple majority of 51.
\`},
    {id:'govcongr1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'Which of the following is an exclusive power of the Senate that the House of Representatives does NOT share?',options:['Initiating revenue (tax) bills and controlling government spending','Confirming presidential appointments to the Cabinet and federal judiciary','Impeaching the president and other federal officials by majority vote','Setting the rules for floor debate through the Rules Committee'],correctAnswer:1,explanation:'The Senate has the exclusive power to confirm presidential appointments (Cabinet, ambassadors, federal judges including Supreme Court justices) by majority vote and to ratify treaties by a 2/3 vote. The House initiates revenue bills and has the sole power of impeachment, while the Senate conducts the trial.'},
      {question:'Why does the filibuster give the Senate minority party significant power?',options:['The filibuster allows any single senator to permanently block all legislation for an entire session','The filibuster requires 60 votes (cloture) to end debate, meaning 41 senators can block legislation even if a majority supports it','The filibuster gives the minority party the power to remove the majority leader from their position','The filibuster is identical to the House Rules Committee and has the same effect in both chambers'],correctAnswer:1,explanation:'Under Senate rules, debate on most legislation is unlimited. A filibuster extends debate indefinitely, and ending it requires a cloture vote of 60 senators. This means that even with a 59-41 majority, the minority party can block legislation — giving the minority far more power in the Senate than in the House, where the majority controls debate through the Rules Committee.'}
    ]}},
    {id:'govcongr1-process',type:'text' as const,content:\`
## 📖 The Legislative Process

### How a Bill Becomes a Law (Simplified)

1. **Bill introduced** — by a member of the House or Senate (only members can introduce bills)
2. **Committee referral** — assigned to a standing committee; most bills "die in committee" (never receive a hearing)
3. **Committee action** — hearings, markup (amendments), vote to send to full chamber
4. **Floor debate & vote** — House: Rules Committee sets debate rules; Senate: unlimited debate (filibuster possible)
5. **Conference committee** — if House and Senate pass different versions, a joint committee reconciles them
6. **Presidential action** — President signs (becomes law) or vetoes (returned to Congress; 2/3 vote in both chambers to override)

### Key Informal Practices
| Practice | Description |
|---|---|
| **Logrolling** | "I'll vote for your bill if you vote for mine" — trading votes |
| **Pork barrel** | Directing federal spending to a member's home district to win local support |
| **Earmarks** | Specific spending provisions inserted into bills for particular projects |
| **Rider** | Unrelated provision attached to an otherwise popular bill to ensure its passage |
| **Discharge petition** | Procedure to force a bill out of committee (requires 218 House signatures — rarely succeeds) |

> 🔑 **AP Connection:** The AP exam loves asking about where bills are most likely to **die** in the process. Answer: **in committee** — the vast majority of bills never make it to a floor vote.
\`},
    {id:'govcongr1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'At which stage of the legislative process do most bills effectively "die"?',options:['During presidential veto — most bills are vetoed and Congress rarely overrides','During floor debate — most bills are defeated by party-line votes on the House or Senate floor','In committee — most bills are never given a hearing or vote by the committee to which they are assigned','In conference committee — most bills fail because the House and Senate cannot agree on a compromise version'],correctAnswer:2,explanation:'Of the thousands of bills introduced each session, the vast majority die in committee — they are simply never scheduled for a hearing or vote. Committee chairs have enormous power as "gatekeepers" who decide which bills receive attention. Only a small fraction of introduced bills ever reach the floor for a vote.'},
      {question:'What is "logrolling" in the context of congressional politics?',options:['A formal procedure for amending the Constitution that requires approval from 3/4 of state legislatures','The practice of trading votes between legislators — "I\\'ll support your bill if you support mine"','A method of presidential veto that allows the president to reject specific provisions within a bill','The process by which the Supreme Court reviews and overturns unconstitutional legislation'],correctAnswer:1,explanation:'Logrolling is the informal practice of vote-trading between legislators. Member A agrees to vote for Member B\\'s bill in exchange for B\\'s support on A\\'s bill. This is how coalition-building works in Congress — especially for bills that might not have enough independent support to pass on their own merits.'}
    ]}}
  ]
};\n`},
{file:'gov-presidency-part1.ts', content:`export const govPresidencyPart1Data = {
  topicSlug: 'gov-presidency',
  sections: [
    {id:'govpresi1-intro',type:'text' as const,content:\`
# 🏛️ The Presidency

**Part 1 of 7 — Powers, Roles & Executive Authority**

---

| Section |
|---------|
| 📖 Formal vs. Informal Powers |
| Roles of the President |
| Executive Orders & Agreements |
| Checks on Presidential Power |

> 🔑 **Key Concept:** The AP exam distinguishes between the president's **formal powers** (enumerated in Article II) and **informal powers** (developed through practice and precedent). The expansion of presidential power is a central AP theme.
\`},
    {id:'govpresi1-powers',type:'text' as const,content:\`
## 📖 Formal vs. Informal Presidential Powers

### Formal (Constitutional) Powers — Article II

| Power | Details |
|---|---|
| **Commander in Chief** | Head of the military (but only Congress can declare war) |
| **Treaty power** | Negotiate treaties (requires 2/3 Senate ratification) |
| **Appointment power** | Appoint Cabinet, ambassadors, federal judges (requires Senate confirmation) |
| **Veto power** | Reject legislation (Congress can override with 2/3 in both chambers) |
| **Pardon power** | Grant pardons and reprieves for federal offenses (cannot pardon state crimes or impeachments) |
| **State of the Union** | Report to Congress on the state of the nation |

### Informal Powers (Developed Through Practice)

| Power | Details |
|---|---|
| **Executive orders** | Directives that have the force of law without congressional approval (e.g., Truman's desegregation of the military, 1948) |
| **Executive agreements** | International agreements that do NOT require Senate ratification (unlike treaties) |
| **Signing statements** | Written comments when signing a bill — can signal how the president intends to interpret or enforce the law |
| **Bully pulpit** | Using media access and public visibility to shape public opinion and pressure Congress |
| **Executive privilege** | Claiming confidentiality for presidential communications (limited by *United States v. Nixon*, 1974) |
| **Party leader** | Head of their political party; influences party platform and fundraising |

> 🔑 **AP Connection:** The AP exam frequently tests the difference between **executive orders** (domestic directives) and **executive agreements** (international agreements that bypass Senate ratification). Both expand presidential power beyond what Article II explicitly grants.
\`},
    {id:'govpresi1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'How do executive agreements differ from formal treaties?',options:['Executive agreements require approval from 2/3 of the Senate, while treaties only need a simple majority vote','Executive agreements are international agreements that do NOT require Senate ratification, while treaties require approval by 2/3 of the Senate','Executive agreements can only be used for domestic policy, while treaties are used for all international relations','There is no legal difference — executive agreements and treaties are identical in all respects'],correctAnswer:1,explanation:'Executive agreements allow the president to make binding international commitments without the 2/3 Senate vote required for treaties. This makes them faster and politically easier — presidents have used far more executive agreements than formal treaties. However, they can be reversed by subsequent presidents.'},
      {question:'Which of the following is an example of the president using the "bully pulpit"?',options:['The president vetoing a bill passed by Congress and returning it with objections','The president giving a nationally televised address to build public support for a policy, pressuring Congress to act','The president issuing a pardon for a federal crime committed by a political ally','The president appointing a new Supreme Court justice after a vacancy occurs on the bench'],correctAnswer:1,explanation:'The "bully pulpit" (coined by Theodore Roosevelt) refers to the president\\'s unique ability to command media attention and use it to shape public opinion. By going directly to the American people — through speeches, press conferences, or social media — the president can pressure Congress to support their agenda.'}
    ]}},
    {id:'govpresi1-checks',type:'text' as const,content:\`
## 📖 Checks on Presidential Power

The Constitution and political practice provide several checks on the president:

| Check | Branch | Details |
|---|---|---|
| **Override veto** | Congress | 2/3 vote in both chambers |
| **Power of the purse** | Congress | Only Congress can appropriate funds — president cannot spend without authorization |
| **Impeachment** | Congress | House impeaches (majority vote); Senate tries and convicts (2/3 vote) |
| **Senate confirmation** | Congress | Appointments require Senate approval (can block nominees) |
| **War Powers Resolution (1973)** | Congress | President must notify Congress within 48 hours of deploying troops; 60-day limit without congressional authorization |
| **Judicial review** | Judiciary | Courts can strike down executive orders and actions as unconstitutional |
| **United States v. Nixon (1974)** | Judiciary | Executive privilege is limited — the president cannot withhold evidence in criminal proceedings |

### Impeachment — Process
1. House Judiciary Committee investigates and drafts articles of impeachment
2. Full House votes on articles (simple majority to impeach)
3. Senate conducts trial presided by the Chief Justice
4. 2/3 Senate vote required to convict and remove from office
5. **Historical record:** Andrew Johnson (1868), Bill Clinton (1998), and Donald Trump (2019, 2021) were impeached by the House but not convicted by the Senate; Nixon resigned before impeachment vote

> 🔑 **AP Connection:** The War Powers Resolution and United States v. Nixon are **essential cases**. The former attempts to limit presidential military power; the latter established that executive privilege has limits.
\`},
    {id:'govpresi1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'What was the constitutional significance of United States v. Nixon (1974)?',options:['It established that the president has absolute executive privilege and communications can never be subpoenaed','It ruled that executive privilege exists but is not absolute — the president cannot withhold evidence needed in criminal proceedings','It gave Congress the power to appoint special prosecutors to investigate the president without judicial oversight','It eliminated the president\\'s pardon power for all crimes related to their time in office'],correctAnswer:1,explanation:'In United States v. Nixon, the Supreme Court unanimously ruled that while executive privilege is a legitimate presidential power, it is not absolute. President Nixon was required to turn over White House tape recordings subpoenaed for a criminal investigation (Watergate). This established that no person — including the president — is above the law.'},
      {question:'What is the primary purpose of the War Powers Resolution (1973)?',options:['To give the president unlimited authority to deploy military forces anywhere in the world without restriction','To limit the president\\'s ability to commit U.S. forces to military action without congressional authorization — requiring notification within 48 hours and a 60-day limit','To require the president to personally lead military forces in any armed conflict involving U.S. troops','To abolish the president\\'s role as Commander in Chief and transfer military authority entirely to Congress'],correctAnswer:1,explanation:'The War Powers Resolution was passed over Nixon\\'s veto in response to the Vietnam War, which escalated without a formal declaration of war. It requires the president to notify Congress within 48 hours of deploying troops and limits deployment to 60 days (extendable to 90) without congressional authorization. Its effectiveness is debated.'}
    ]}}
  ]
};\n`},
{file:'gov-judiciary-part1.ts', content:`export const govJudiciaryPart1Data = {
  topicSlug: 'gov-judiciary',
  sections: [
    {id:'govjudic1-intro',type:'text' as const,content:\`
# ⚖️ The Federal Judiciary

**Part 1 of 7 — The Supreme Court & Judicial Review**

---

| Section |
|---------|
| 📖 Structure of the Federal Courts |
| Judicial Review & Marbury v. Madison |
| How the Supreme Court Operates |
| Judicial Philosophies |

> 🔑 **Key Concept:** The AP exam heavily tests **Marbury v. Madison** (established judicial review), how cases reach the Supreme Court (writ of certiorari), and the difference between **judicial activism** and **judicial restraint**.
\`},
    {id:'govjudic1-structure',type:'text' as const,content:\`
## 📖 Federal Court Structure

### Three Levels

| Level | Courts | Details |
|---|---|---|
| **District Courts** | 94 | Trial courts; hear cases first (original jurisdiction); determine facts |
| **Courts of Appeals** | 13 circuits | Review district court decisions for legal errors; no jury, no witnesses; panels of 3 judges |
| **Supreme Court** | 1 (9 justices) | Final appellate court; selects ~70-80 cases per year from 7,000+ petitions |

### Key Concepts
- **Original jurisdiction** — court hears a case first (district courts; Supreme Court has limited original jurisdiction for cases involving states or ambassadors)
- **Appellate jurisdiction** — court reviews lower court decisions for legal errors
- **Writ of certiorari** — order by the Supreme Court to review a lower court case; granted by the **Rule of Four** (4 of 9 justices must agree to hear the case)
- **Judicial review** — the power of courts to declare laws or executive actions **unconstitutional** (not explicitly in the Constitution — established by Marbury v. Madison)

### Marbury v. Madison (1803) — The Most Important Case
- **Facts:** William Marbury was appointed as a justice of the peace by outgoing President John Adams, but incoming Secretary of State James Madison refused to deliver his commission
- **Question:** Does the Supreme Court have the power to order Madison to deliver the commission?
- **Chief Justice Marshall's ruling:** The Judiciary Act of 1789 gave the Supreme Court original jurisdiction in this matter, but that section of the Act violated the Constitution — therefore, the Court struck it down
- **Significance:** Established **judicial review** — the Supreme Court's power to declare laws unconstitutional

> 🔑 **AP Connection:** Marbury v. Madison is the **single most important Supreme Court case** on the AP exam. Marshall established judicial review by ruling AGAINST his own party's interest — showing the Court's independence.
\`},
    {id:'govjudic1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'What is "judicial review" and how was it established?',options:['The process by which the Senate reviews and confirms Supreme Court nominees, established by Article II of the Constitution','The power of the Supreme Court to declare laws or executive actions unconstitutional, established by the precedent set in Marbury v. Madison (1803)','The president\\'s power to review and reject Supreme Court decisions through an executive order','The process by which federal judges are impeached, established by the House Rules Committee'],correctAnswer:1,explanation:'Judicial review — the Supreme Court\\'s power to strike down laws that violate the Constitution — was not explicitly written into the Constitution. Chief Justice John Marshall established this power through Marbury v. Madison (1803), making the Court the final arbiter of constitutional interpretation and a co-equal branch of government.'},
      {question:'What is the "Rule of Four" in Supreme Court practice?',options:['The requirement that Supreme Court decisions must be decided by at least four dissenting opinions','At least four of the nine justices must agree to hear a case (grant certiorari) for it to be placed on the Court\\'s docket','Four amendments to the Constitution must be cited in any case before the Supreme Court can exercise jurisdiction','The president must nominate four candidates for any Supreme Court vacancy from which the Senate chooses one'],correctAnswer:1,explanation:'The Rule of Four is an informal practice: at least 4 of the 9 Supreme Court justices must vote to accept a case (grant a writ of certiorari) for it to be heard. The Court receives 7,000+ petitions annually but only accepts 70-80 cases — the Rule of Four determines which ones are heard.'}
    ]}},
    {id:'govjudic1-philosophies',type:'text' as const,content:\`
## 📖 Judicial Philosophies

| Philosophy | Description | Approach to Constitution |
|---|---|---|
| **Judicial activism** | Courts should actively use their power to promote justice, even if it means overriding legislative or executive decisions | "Living Constitution" — the Constitution should be interpreted in light of evolving societal values |
| **Judicial restraint** | Courts should defer to elected branches and avoid overturning laws unless clearly unconstitutional | "Originalism/Textualism" — the Constitution should be interpreted based on its original meaning or plain text |

### Key Distinctions
- **Judicial activism** is NOT the same as "liberal" — conservative courts can be activist by overturning precedent
- **Judicial restraint** is NOT the same as "conservative" — a restrained court might uphold laws it disagrees with because overturning them isn't the judiciary's role
- **Stare decisis** — "let the decision stand"; the principle that courts should follow precedent (related to restraint)

### How Justices Are Selected
1. **President nominates** — considers judicial philosophy, political ideology, demographics, Senate confirmation likelihood
2. **Senate Judiciary Committee** hearings — senators question the nominee
3. **Full Senate vote** — simple majority to confirm
4. **Life tenure** — federal judges serve "during good behavior" (effectively for life), insulating them from political pressure

> 🔑 **AP Connection:** The AP exam tests how the nomination process is **political** even though the judiciary is supposed to be independent. Presidents select justices who share their judicial philosophy; the Senate may block nominees from the opposing party.
\`},
    {id:'govjudic1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'A Supreme Court justice who believes the Constitution should be interpreted based on its original meaning at the time of ratification is best described as practicing:',options:['Judicial activism — actively expanding constitutional rights beyond the original text','Originalism/judicial restraint — interpreting the Constitution according to its original meaning and deferring to elected branches when possible','Stare decisis — following all previous Supreme Court decisions without exception regardless of their correctness','Strict constructionism — refusing to hear any cases not explicitly mentioned in Article III'],correctAnswer:1,explanation:'Originalism holds that the Constitution should be interpreted based on its original public meaning when ratified. This philosophy is associated with judicial restraint because it limits judges\\' ability to "read in" new rights not contemplated by the Framers. Justice Antonin Scalia was originalism\\'s most prominent advocate.'},
      {question:'Why does the Constitution grant federal judges life tenure (serving "during good behavior")?',options:['To ensure judges are always aligned with the current president\\'s policy preferences and political party','To insulate judges from political pressure so they can make decisions based on law and the Constitution rather than public opinion or electoral concerns','To guarantee that all judges serve for at least 30 years regardless of their competence or health','To prevent Congress from ever changing the size or structure of the federal court system'],correctAnswer:1,explanation:'Life tenure protects judicial independence. Because federal judges don\\'t need to worry about reelection or political retaliation, they can make unpopular decisions based on constitutional principles. This was the Framers\\' solution to the problem of political pressure on the judiciary — though it also means justices serve long after the president who appointed them leaves office.'}
    ]}}
  ]
};\n`},
{file:'gov-civil-liberties-part1.ts', content:`export const govCivilLibertiesPart1Data = {
  topicSlug: 'gov-civil-liberties',
  sections: [
    {id:'govcivil1-intro',type:'text' as const,content:\`
# 🗽 Civil Liberties

**Part 1 of 7 — The Bill of Rights & Individual Freedoms**

---

| Section |
|---------|
| 📖 Bill of Rights Overview |
| First Amendment Freedoms |
| Selective Incorporation |
| Key Supreme Court Cases |

> 🔑 **Key Concept:** Civil liberties are **protections from government action** (what the government CANNOT do to you). The AP exam distinguishes these from **civil rights** (protections against discrimination). The Bill of Rights originally applied only to the federal government — the 14th Amendment's Due Process Clause extended most protections to the states through **selective incorporation**.
\`},
    {id:'govcivil1-bor',type:'text' as const,content:\`
## 📖 The Bill of Rights

The first ten amendments were ratified in 1791 to address Anti-Federalist concerns about individual liberty:

| Amendment | Protection |
|---|---|
| **1st** | Freedom of religion (Establishment + Free Exercise), speech, press, assembly, petition |
| **2nd** | Right to bear arms |
| **4th** | Protection against unreasonable searches and seizures; requires probable cause for warrants |
| **5th** | Grand jury indictment; no double jeopardy; no self-incrimination; due process; eminent domain requires just compensation |
| **6th** | Right to speedy and public trial, impartial jury, attorney, confront witnesses |
| **8th** | No excessive bail; no cruel and unusual punishment |

### Selective Incorporation
- Originally, the Bill of Rights limited only the **federal government** (Barron v. Baltimore, 1833)
- The **14th Amendment (1868)** — "nor shall any State deprive any person of life, liberty, or property, without due process of law"
- Through a series of Supreme Court cases, most Bill of Rights protections have been **incorporated** (applied to state governments) via the 14th Amendment's Due Process Clause
- This process is called **selective incorporation** because it happened right-by-right, case-by-case

> 🔑 **AP Connection:** You must know that the Bill of Rights was NOT automatically applied to the states. Selective incorporation through the 14th Amendment is a **key AP concept** that appears nearly every year.
\`},
    {id:'govcivil1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'What is "selective incorporation" in constitutional law?',options:['The process by which the president selects which constitutional amendments to enforce during their term','The process by which the Supreme Court has applied most Bill of Rights protections to state governments through the 14th Amendment\\'s Due Process Clause, on a case-by-case basis','The Congress\\'s power to selectively apply federal laws to certain states but not others based on population','The practice of allowing states to choose which amendments they want to follow voluntarily'],correctAnswer:1,explanation:'Selective incorporation is the judicial doctrine through which the Supreme Court has gradually applied most Bill of Rights protections to state governments via the 14th Amendment\\'s Due Process Clause. This happened case-by-case (e.g., Gitlow v. New York incorporated free speech in 1925; McDonald v. Chicago incorporated the 2nd Amendment in 2010).'},
      {question:'How do civil liberties differ from civil rights?',options:['Civil liberties are protections FROM government action (limits on what government can do to individuals), while civil rights are protections AGAINST discrimination (ensuring equal treatment)','Civil liberties apply only to citizens, while civil rights apply to all people regardless of citizenship','Civil liberties are created by Congress, while civil rights are created by the Supreme Court','There is no meaningful distinction — both terms refer to the same constitutional protections'],correctAnswer:0,explanation:'Civil liberties are individual freedoms protected FROM government interference (1st Amendment speech, 4th Amendment search protections). Civil rights are guarantees of EQUAL TREATMENT regardless of race, gender, or other characteristics (14th Amendment Equal Protection Clause, Civil Rights Act). The distinction matters on the AP exam.'}
    ]}},
    {id:'govcivil1-first',type:'text' as const,content:\`
## 📖 First Amendment Freedoms

### Religion Clauses
| Clause | Meaning | Key Case |
|---|---|---|
| **Establishment Clause** | Government cannot establish, promote, or favor any religion | **Engel v. Vitale (1962)** — school-sponsored prayer is unconstitutional |
| **Free Exercise Clause** | Government cannot prohibit the free exercise of religion | **Wisconsin v. Yoder (1972)** — Amish families exempt from compulsory education past 8th grade |

### Freedom of Speech
The First Amendment protects most speech, but NOT all speech:

| Protected | NOT Protected |
|---|---|
| Political speech (highest protection) | True threats and incitement to imminent lawless action (*Brandenburg v. Ohio*) |
| Symbolic speech (flag burning — *Texas v. Johnson*, 1989) | Defamation (libel/slander) |
| Student speech (with limits — *Tinker v. Des Moines*) | Obscenity |
| Commercial speech (some protection) | Fighting words |

### Key Speech Cases
- **Schenck v. United States (1919)** — "clear and present danger" test; speech creating a danger can be restricted (later replaced by *Brandenburg* test)
- **Tinker v. Des Moines (1969)** — students wearing black armbands to protest Vietnam War = protected symbolic speech; students don't "shed their constitutional rights at the schoolhouse gate"
- **New York Times v. United States (1971)** — "Pentagon Papers" case; government cannot impose prior restraint on press except in extraordinary circumstances

> 🔑 **AP Connection:** Tinker v. Des Moines and Engel v. Vitale are **required cases** on the AP exam. You must know the facts, holdings, and reasoning of each.
\`},
    {id:'govcivil1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'In Tinker v. Des Moines (1969), the Supreme Court ruled that students wearing black armbands to protest the Vietnam War was:',options:['Unprotected speech because schools have absolute authority to regulate student expression during school hours','Protected symbolic speech — students do not "shed their constitutional rights at the schoolhouse gate" as long as the expression does not cause substantial disruption','Criminal conduct that could be punished under federal anti-war legislation passed by Congress','Not a First Amendment issue because the Constitution only protects verbal speech, not symbolic acts'],correctAnswer:1,explanation:'The Court ruled 7-2 that wearing armbands was protected symbolic speech under the First Amendment. Justice Fortas wrote that students retain constitutional rights in school, and schools can only restrict expression that causes "substantial disruption" to the educational process or violates the rights of others. The armbands caused no disruption.'},
      {question:'What did the Supreme Court rule in Engel v. Vitale (1962)?',options:['Public schools may require students to recite prayers as long as the prayers are non-denominational','School-sponsored prayer in public schools violates the Establishment Clause of the First Amendment, even if participation is voluntary','Students have a constitutional right to lead prayers in public schools without any government restriction','The Free Exercise Clause requires public schools to provide time for students of all religions to pray during school hours'],correctAnswer:1,explanation:'The Court ruled that even a voluntary, non-denominational prayer composed by state officials for use in public schools violated the Establishment Clause. Government-sponsored religious activity in public schools — even if students can opt out — constitutes government endorsement of religion. This case is the foundation for all school prayer rulings.'}
    ]}}
  ]
};\n`},
{file:'gov-civil-rights-part1.ts', content:`export const govCivilRightsPart1Data = {
  topicSlug: 'gov-civil-rights',
  sections: [
    {id:'govcivr1-intro',type:'text' as const,content:\`
# ✊ Civil Rights

**Part 1 of 7 — Equal Protection & the Struggle for Equality**

---

| Section |
|---------|
| 📖 14th Amendment & Equal Protection |
| Segregation & Brown v. Board |
| Civil Rights Movement & Legislation |
| Affirmative Action |

> 🔑 **Key Concept:** Civil rights are about **equal treatment** and protection against discrimination. The AP exam centers on the 14th Amendment's **Equal Protection Clause** and how it has been applied through landmark Supreme Court cases and civil rights legislation.
\`},
    {id:'govcivr1-14th',type:'text' as const,content:\`
## 📖 The 14th Amendment & Equal Protection

### Equal Protection Clause (1868)
"No State shall... deny to any person within its jurisdiction the **equal protection of the laws**."

### Levels of Scrutiny
Courts use different standards to evaluate laws that treat groups differently:

| Level | When Applied | Government Must Show | Example |
|---|---|---|---|
| **Strict scrutiny** | Race, national origin, religion | Law serves a *compelling* government interest AND is *narrowly tailored* | Racial segregation laws (almost always struck down) |
| **Intermediate scrutiny** | Gender, sex | Law serves an *important* government interest AND is *substantially related* | VMI admitting women (*United States v. Virginia*, 1996) |
| **Rational basis** | Economic regulation, age, disability | Law is *rationally related* to a *legitimate* government interest | Minimum age for driving (almost always upheld) |

### From Segregation to Equality

| Era | Key Development |
|---|---|
| **1865–1870** | 13th (abolished slavery), 14th (equal protection, due process), 15th (voting rights regardless of race) Amendments |
| **1896** | *Plessy v. Ferguson* — "separate but equal" doctrine; upheld racial segregation |
| **1954** | **Brown v. Board of Education** — overturned Plessy; segregation in public schools is inherently unconstitutional |
| **1964** | **Civil Rights Act** — banned discrimination in public accommodations, employment, federally funded programs |
| **1965** | **Voting Rights Act** — banned literacy tests and other obstacles to voting; federal oversight of elections in states with histories of discrimination |

> 🔑 **AP Connection:** Brown v. Board of Education is a **required case**. You must know that it overturned Plessy v. Ferguson's "separate but equal" doctrine and that Chief Justice Warren's unanimous opinion declared segregation inherently unconstitutional under the 14th Amendment.
\`},
    {id:'govcivr1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'What standard of judicial review does the Supreme Court apply when evaluating laws that classify people by race?',options:['Rational basis review — the lowest standard, requiring only a rational connection to a legitimate purpose','Intermediate scrutiny — requiring the law to serve an important government interest','Strict scrutiny — the highest standard, requiring the law to serve a compelling government interest and be narrowly tailored to achieve it','No standard — racial classifications are automatically unconstitutional without any judicial review'],correctAnswer:2,explanation:'Strict scrutiny is the highest level of judicial review and is applied to laws that classify people by race, national origin, or religion. Under this standard, the government must prove the law serves a compelling interest AND is narrowly tailored — an extremely high bar that racial classifications almost never pass.'},
      {question:'How did Brown v. Board of Education (1954) change constitutional law?',options:['It affirmed the "separate but equal" doctrine established in Plessy v. Ferguson as constitutional','It overturned Plessy v. Ferguson, ruling that racial segregation in public schools is inherently unconstitutional because separate facilities are inherently unequal','It banned all private schools from operating in the United States','It established the right to private school vouchers funded by state tax dollars'],correctAnswer:1,explanation:'Brown unanimously overturned the "separate but equal" doctrine of Plessy v. Ferguson (1896). Chief Justice Earl Warren wrote that segregation in public education generates "a feeling of inferiority" and that "separate educational facilities are inherently unequal." This became the legal foundation for desegregation across all public institutions.'}
    ]}},
    {id:'govcivr1-legislation',type:'text' as const,content:\`
## 📖 Civil Rights Legislation

### Civil Rights Act of 1964
| Title | Protection |
|---|---|
| **Title II** | Banned discrimination in **public accommodations** (hotels, restaurants, theaters) |
| **Title VI** | Banned discrimination in **federally funded programs** |
| **Title VII** | Banned employment discrimination based on race, color, religion, sex, or national origin; created the **EEOC** (Equal Employment Opportunity Commission) |

- Constitutional basis: **Commerce Clause** (upheld in *Heart of Atlanta Motel v. United States*, 1964)
- Significance: First comprehensive federal law banning racial discrimination in private businesses

### Voting Rights Act of 1965
- Banned **literacy tests** and other discriminatory voting practices
- **Preclearance provision (Section 5)** — states with histories of voter discrimination had to get federal approval before changing voting laws
- *Shelby County v. Holder (2013)* — Supreme Court struck down the formula used to determine which states needed preclearance, effectively weakening the Act

### 24th Amendment (1964)
- Abolished **poll taxes** in federal elections (later extended to all elections by *Harper v. Virginia*, 1966)

> 🔑 **AP Connection:** The Commerce Clause justification for the Civil Rights Act is heavily tested. Congress used its power to regulate interstate commerce to reach private businesses — since a motel or restaurant serving interstate travelers affects commerce.
\`},
    {id:'govcivr1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'On what constitutional basis did Congress justify the Civil Rights Act of 1964\\'s ban on discrimination in private businesses?',options:['The First Amendment\\'s protection of freedom of association and peaceful assembly','The Commerce Clause — discrimination in hotels, restaurants, and businesses serving interstate travelers substantially affects interstate commerce','The president\\'s executive authority under Article II to regulate private sector employment practices','The 14th Amendment directly, which prohibits private citizens from discriminating against each other'],correctAnswer:1,explanation:'The 14th Amendment only applies to STATE action (government discrimination), not private conduct. To reach private businesses, Congress relied on the Commerce Clause — arguing that racial discrimination in hotels and restaurants substantially affected interstate commerce. The Supreme Court upheld this reasoning in Heart of Atlanta Motel v. United States (1964).'},
      {question:'What was the impact of Shelby County v. Holder (2013) on the Voting Rights Act?',options:['It strengthened the Voting Rights Act by expanding federal oversight to all 50 states','It struck down the formula used to determine which states required federal preclearance for voting law changes, effectively weakening federal oversight of elections in states with histories of voter discrimination','It upheld every provision of the Voting Rights Act and rejected all challenges to its constitutionality','It banned all forms of voter identification requirements as unconstitutional under the 15th Amendment'],correctAnswer:1,explanation:'The Court ruled 5-4 that the preclearance formula (Section 4) was based on outdated data and therefore unconstitutional. Without a valid formula, Section 5\\'s preclearance requirement became unenforceable. Critics argued this opened the door to new voter suppression tactics in states previously covered by the Act.'}
    ]}}
  ]
};\n`}
];

for (const f of files) {
  fs.writeFileSync(path.join(dir, f.file), f.content);
  console.log('✅ Wrote ' + f.file);
}
console.log('\nDone: ' + files.length + ' files written');
