const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src/data/interactive-lessons');

const files = [
{file:'gov-bureaucracy-part1.ts', content:`export const govBureaucracyPart1Data = {
  topicSlug: 'gov-bureaucracy',
  sections: [
    {id:'govburea1-intro',type:'text' as const,content:\`
# 🏢 The Federal Bureaucracy

**Part 1 of 7 — Structure, Functions & Accountability**

---

| Section |
|---------|
| 📖 What Is the Bureaucracy? |
| Organization & Types of Agencies |
| Iron Triangles & Issue Networks |
| Bureaucratic Accountability |

> 🔑 **Key Concept:** The federal bureaucracy is the **unelected** administrative arm of government that implements policy. The AP exam focuses on how the bureaucracy is organized, how it exercises power through **rule-making**, and how Congress, the president, and the courts try to control it.
\`},
    {id:'govburea1-structure',type:'text' as const,content:\`
## 📖 What Is the Federal Bureaucracy?

The bureaucracy consists of all federal agencies, departments, and government corporations that implement and enforce laws passed by Congress. It employs roughly **2.1 million** civilian workers.

### Types of Bureaucratic Organizations

| Type | Description | Examples |
|---|---|---|
| **Cabinet departments** | 15 major departments headed by secretaries appointed by the president | State, Defense, Treasury, Justice, Education |
| **Independent agencies** | Agencies outside Cabinet departments, with specific missions | NASA, CIA, EPA |
| **Independent regulatory commissions** | Regulate specific economic sectors; commissioners serve fixed, staggered terms for independence | FCC, SEC, FTC, FEC |
| **Government corporations** | Government-owned but operate like businesses; provide services | U.S. Postal Service, Amtrak, FDIC |

### Bureaucratic Power: Rule-Making
- Congress passes broad legislation → bureaucratic agencies write **regulations** (specific rules) to implement the law
- Regulations have the **force of law** — they are legally binding
- Example: Congress passes the Clean Air Act → the **EPA** writes specific regulations on emissions standards, pollution limits, and enforcement procedures
- This is sometimes called **delegated authority** or **quasi-legislative power**

> 🔑 **AP Connection:** The AP exam tests why Congress delegates so much power to the bureaucracy: Congress lacks the technical expertise and time to write highly specific regulations on complex topics (environmental science, financial markets, telecommunications).
\`},
    {id:'govburea1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'Why are independent regulatory commissions (like the FCC and SEC) structured with fixed, staggered terms for commissioners?',options:['To ensure that all commissioners are from the same political party as the current president','To insulate the commissions from political pressure by preventing any single president from replacing all commissioners at once','To guarantee that commissioners serve for life, similar to federal judges under Article III','To allow Congress to directly appoint and remove commissioners without presidential involvement'],correctAnswer:1,explanation:'Fixed, staggered terms mean that commissioners\\' terms overlap presidential administrations. A new president cannot immediately replace all commissioners — providing continuity and insulating regulatory decisions from short-term political pressure. This distinguishes independent regulatory commissions from Cabinet departments, whose heads serve at the president\\'s pleasure.'},
      {question:'What is "rule-making" and why is it a significant power of the federal bureaucracy?',options:['Rule-making is the process by which Congress writes legislation — bureaucratic agencies have no role in this process','Rule-making is the process by which bureaucratic agencies write specific regulations to implement broad congressional legislation — these regulations have the force of law','Rule-making refers to the Supreme Court\\'s power to establish procedural rules for federal courts','Rule-making is the president\\'s power to issue executive orders that override existing congressional legislation'],correctAnswer:1,explanation:'When Congress passes a law like the Clean Air Act, the text is broad. The EPA then writes detailed regulations (specific emissions limits, testing procedures, penalties) through rule-making. These regulations are legally binding — violating them carries the same consequences as violating the statute itself. This gives unelected bureaucrats significant policy-making power.'}
    ]}},
    {id:'govburea1-iron',type:'text' as const,content:\`
## 📖 Iron Triangles & Issue Networks

### Iron Triangles (Subgovernments)
A mutually beneficial relationship among three entities:

| Actor | Role | What They Get |
|---|---|---|
| **Congressional committee** | Writes legislation and controls funding | Campaign contributions; expertise/information |
| **Bureaucratic agency** | Implements policy | Budget increases; political support |
| **Interest group** | Lobbies and provides information | Favorable regulations; policy influence |

**Example:** Agriculture policy
- House Agriculture Committee ↔ USDA ↔ American Farm Bureau Federation
- Each benefits the other: the committee funds the USDA, the USDA implements farm policies favored by the Farm Bureau, and the Farm Bureau supports committee members' reelection

### Issue Networks
- **More fluid and open** than iron triangles
- Include media, think tanks, academics, multiple interest groups, and multiple congressional committees
- Less stable relationships — participants change as issues evolve
- Example: Healthcare policy involves insurance companies, hospitals, doctors' groups, AARP, pharmaceutical companies, HHS, multiple congressional committees, policy think tanks, and media

> 🔑 **AP Connection:** The AP exam distinguishes iron triangles (stable, narrow, closed) from issue networks (fluid, broad, open). Be ready to give specific examples of each.
\`},
    {id:'govburea1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'Which of the following best describes an "iron triangle" in American politics?',options:['A formal constitutional structure that divides power among the three branches of government equally','A mutually beneficial relationship among a congressional committee, a bureaucratic agency, and an interest group that work together to shape policy in a specific area','A diplomatic alliance between three nations that coordinates foreign policy and military strategy','The three levels of the federal court system: district courts, courts of appeals, and the Supreme Court'],correctAnswer:1,explanation:'Iron triangles are informal, stable alliances among (1) a congressional committee that controls funding, (2) a bureaucratic agency that implements policy, and (3) an interest group that lobbies and provides campaign support. Each actor benefits from the relationship, making these alliances resistant to change and often criticized for prioritizing narrow interests over the public good.'},
      {question:'How do "issue networks" differ from "iron triangles"?',options:['Issue networks are legally established by Congress, while iron triangles are informal and unconstitutional','Issue networks are more fluid and open, involving many diverse participants (media, think tanks, multiple interest groups), while iron triangles are stable, narrow, three-way relationships','Issue networks only exist at the state level, while iron triangles only operate within the federal government','Issue networks are always more effective at shaping policy than iron triangles because they include more participants'],correctAnswer:1,explanation:'Issue networks are broader and more fluid than iron triangles. They include many actors — multiple interest groups, congressional committees, bureaucratic agencies, media organizations, think tanks, and academics — whose participation may change over time. Complex issues like healthcare or climate policy involve issue networks rather than simple three-way iron triangles.'}
    ]}}
  ]
};\n`},
{file:'gov-separation-of-powers-part1.ts', content:`export const govSeparationOfPowersPart1Data = {
  topicSlug: 'gov-separation-of-powers',
  sections: [
    {id:'govsepar1-intro',type:'text' as const,content:\`
# ⚖️ Separation of Powers & Checks and Balances

**Part 1 of 7 — Preventing Tyranny Through Divided Power**

---

| Section |
|---------|
| 📖 Separation of Powers |
| The System of Checks and Balances |
| Key Examples & Tensions |
| Federalist No. 51 |

> 🔑 **Key Concept:** The Framers divided government power among three branches (separation of powers) and gave each branch tools to limit the others (checks and balances). **Federalist No. 51** (Madison) is a **required foundational document** that explains why this structure prevents tyranny.
\`},
    {id:'govsepar1-structure',type:'text' as const,content:\`
## 📖 Separation of Powers

Each branch of government has distinct responsibilities:

| Branch | Article | Primary Function | Key Powers |
|---|---|---|---|
| **Legislative (Congress)** | Article I | Make laws | Tax, spend, declare war, regulate commerce, confirm appointments |
| **Executive (President)** | Article II | Enforce laws | Veto, appoint, command military, make treaties, pardon |
| **Judicial (Courts)** | Article III | Interpret laws | Judicial review, life tenure, interpret Constitution |

### Checks and Balances — The Full Matrix

| Checking Branch | Checked Branch | How |
|---|---|---|
| Congress → President | Executive | Override veto (2/3); impeach/remove; Senate confirms appointments/treaties; power of the purse |
| Congress → Courts | Judicial | Confirm judges; impeach judges; amend Constitution to override rulings; create/abolish lower courts |
| President → Congress | Legislative | Veto legislation; call special sessions; set legislative agenda (bully pulpit) |
| President → Courts | Judicial | Appoint judges; pardon power |
| Courts → Congress | Legislative | Judicial review — declare laws unconstitutional |
| Courts → President | Executive | Judicial review — declare executive actions unconstitutional; *United States v. Nixon* |

> 🔑 **AP Connection:** The AP exam often presents scenarios and asks you to identify which check is being used. Memorize the full matrix and be ready to apply it to real-world examples.
\`},
    {id:'govsepar1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'The Senate\\'s power to confirm or reject presidential appointments to the federal judiciary is an example of:',options:['The executive branch checking the legislative branch through the veto power','The legislative branch checking the executive branch through the advice and consent power (checks and balances)','The judicial branch checking the legislative branch through judicial review','The executive branch checking the judicial branch through the appointment power'],correctAnswer:1,explanation:'The Senate\\'s confirmation power (Article II, §2) is a check by the legislative branch on the executive branch. While the president nominates judges and executive officials, the Senate must confirm them — giving Congress a tool to block nominees who are unqualified or whose ideology the Senate opposes.'},
      {question:'Which of the following is an example of the judicial branch checking the legislative branch?',options:['The president vetoing a bill passed by Congress because they disagree with the policy','The Supreme Court declaring a federal law unconstitutional through judicial review','Congress overriding a presidential veto with a 2/3 vote in both chambers','The Senate refusing to ratify a treaty negotiated by the president'],correctAnswer:1,explanation:'Judicial review — the Supreme Court\\'s power to declare laws unconstitutional (established in Marbury v. Madison, 1803) — is the judiciary\\'s primary check on both Congress and the president. When the Court strikes down a law, Congress can only respond by amending the Constitution or passing a revised law that addresses the constitutional concerns.'}
    ]}},
    {id:'govsepar1-fed51',type:'text' as const,content:\`
## 📖 Federalist No. 51 — James Madison

### Required Foundational Document

Federalist No. 51 is one of the **most important documents** on the AP exam. Madison explains WHY separation of powers and checks and balances are necessary:

### Key Arguments

**1. "If men were angels, no government would be necessary."**
- Human nature is self-interested — leaders will accumulate power if unchecked
- Government must be designed to control BOTH the governed AND the governors

**2. "Ambition must be made to counteract ambition."**
- Each branch must have the constitutional means AND personal motives to resist encroachment by the other branches
- Officials will protect their own branch's power out of self-interest — this creates a self-enforcing system

**3. Double Security for Liberty**
- **Vertical**: Federalism (division between national and state government)
- **Horizontal**: Separation of powers (division among three branches)
- Together, these provide a "double security" against tyranny

**4. Protection of Minority Rights**
- In a republic, the majority can oppress the minority
- A large republic with many factions prevents any single faction from dominating (connects to **Federalist No. 10**)

> 🔑 **AP Connection:** You MUST be able to quote and explain "If men were angels" and "Ambition must be made to counteract ambition." These appear on the AP exam regularly, often in the Argumentative Essay (FRQ #4).
\`},
    {id:'govsepar1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'In Federalist No. 51, Madison argues that "ambition must be made to counteract ambition." What does this mean in practice?',options:['Citizens should be ambitious in pursuing wealth so the economy grows and government becomes unnecessary','Each branch of government should have both the constitutional tools and personal incentive to resist power grabs by other branches, creating a self-enforcing check system','Ambitious political candidates should be prevented from running for office to avoid concentration of power','The president should be the most ambitious officeholder and use that ambition to dominate Congress and the courts'],correctAnswer:1,explanation:'Madison\\'s insight was that structural protections alone are insufficient — the people running each branch must have personal motivation to defend their branch\\'s power. By giving each branch distinct powers and making officials\\' political survival tied to defending those powers, the system harnesses human self-interest to prevent tyranny.'},
      {question:'What is the "double security" for liberty that Madison describes in Federalist No. 51?',options:['The two houses of Congress (House and Senate) that must both agree before any law can be passed','The combination of federalism (dividing power between national and state governments) AND separation of powers (dividing power among three branches), which together protect against tyranny','The Bill of Rights and the 14th Amendment, which together guarantee all individual freedoms against government interference','The president\\'s veto power and the Supreme Court\\'s judicial review power, which together prevent Congress from passing any law'],correctAnswer:1,explanation:'Madison\\'s "double security" refers to two layers of protection: (1) vertical — federalism divides power between national and state governments, so neither can become tyrannical; (2) horizontal — separation of powers divides the national government into three branches that check each other. Both layers must be breached for tyranny to occur.'}
    ]}}
  ]
};\n`},
{file:'gov-parties-interest-groups-part1.ts', content:`export const govPartiesInterestGroupsPart1Data = {
  topicSlug: 'gov-parties-interest-groups',
  sections: [
    {id:'govparti1-intro',type:'text' as const,content:\`
# 🗳️ Political Parties & Interest Groups

**Part 1 of 7 — Linking Citizens to Government**

---

| Section |
|---------|
| 📖 Functions of Political Parties |
| Two-Party System |
| Interest Groups vs. Parties |
| Campaign Finance |

> 🔑 **Key Concept:** The AP exam distinguishes between **political parties** (seek to WIN elections and control government) and **interest groups** (seek to INFLUENCE policy without running candidates). Both are "linkage institutions" connecting citizens to government.
\`},
    {id:'govparti1-parties',type:'text' as const,content:\`
## 📖 Political Parties

### Functions of Parties
| Function | Description |
|---|---|
| **Recruit candidates** | Identify and support people to run for office |
| **Nominate candidates** | Select party nominees through primaries/caucuses |
| **Mobilize voters** | Get-out-the-vote drives; voter registration |
| **Educate the public** | Communicate party positions on issues |
| **Organize government** | Majority/minority party structure in Congress; committee assignments |

### Why a Two-Party System?
| Factor | Explanation |
|---|---|
| **Winner-take-all elections (plurality/SMPD)** | Candidate with the most votes wins the single seat — disadvantages third parties who can't win enough votes in any district |
| **Electoral College** | Must win a majority of electoral votes (270); nearly impossible for third parties |
| **Duverger's Law** | Single-member district plurality systems tend to produce two-party systems |
| **Historical tradition** | Federalists vs. Anti-Federalists established the pattern in the 1790s |
| **Ballot access laws** | Third parties face high barriers to getting on ballots in all 50 states |

### Third Parties' Role
Despite rarely winning, third parties serve important functions:
- **Raise new issues** that major parties eventually adopt (Populists → Progressive reforms; Ross Perot → deficit reduction)
- **"Spoiler" effect** — can draw enough votes to change outcomes (Ralph Nader in 2000; Theodore Roosevelt in 1912)

> 🔑 **AP Connection:** You must explain WHY the U.S. has a two-party system using **structural** reasons (winner-take-all elections, Electoral College) — not cultural preferences. This is a Duverger's Law question.
\`},
    {id:'govparti1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'What is the primary structural reason the United States has a two-party system rather than a multi-party system?',options:['The Constitution explicitly requires that only two parties may exist and compete in elections','Winner-take-all (single-member district plurality) elections make it nearly impossible for third parties to win seats, as only the candidate with the most votes in each district wins','Americans culturally prefer only two political parties and would refuse to vote for a third-party candidate under any circumstances','Federal law prohibits more than two parties from appearing on election ballots in any state'],correctAnswer:1,explanation:'Duverger\\'s Law explains this: in winner-take-all elections, voters tend toward two major parties because voting for a third party is seen as "wasting" a vote. A third party could win 20% of the vote nationwide but win zero seats. Proportional representation systems (used in many other democracies) allocate seats by vote share, enabling multi-party systems.'},
      {question:'How do interest groups differ from political parties?',options:['Interest groups run candidates for office, while political parties only lobby elected officials','Interest groups seek to influence public policy on specific issues without running candidates, while political parties seek to win elections and control government','There is no meaningful difference — interest groups and political parties serve identical functions in the political system','Interest groups are prohibited from participating in politics by the First Amendment, while parties are protected'],correctAnswer:1,explanation:'Interest groups (NRA, Sierra Club, AARP) focus on influencing policy — through lobbying, campaign contributions, and grassroots mobilization — but they don\\'t nominate or run candidates for office. Political parties (Democrats, Republicans) exist primarily to recruit, nominate, and elect candidates who will control government and enact the party\\'s platform.'}
    ]}},
    {id:'govparti1-finance',type:'text' as const,content:\`
## 📖 Campaign Finance

### Key Legislation & Court Decisions

| Law/Case | Year | Impact |
|---|---|---|
| **Federal Election Campaign Act (FECA)** | 1971 | Created disclosure requirements; established contribution limits |
| **Buckley v. Valeo** | 1976 | Spending money = speech (1st Amendment); limits on expenditures unconstitutional, but contribution limits OK |
| **Bipartisan Campaign Reform Act (McCain-Feingold)** | 2002 | Banned "soft money" (unlimited donations to parties); restricted issue ads near elections |
| **Citizens United v. FEC** | 2010 | Corporations and unions can spend unlimited amounts on independent expenditures; created "super PACs" |

### Types of Political Money
| Type | Rules |
|---|---|
| **Hard money** | Direct contributions to candidates; limited and disclosed (individuals: $3,300/candidate/election as of 2024) |
| **Soft money** | Unlimited donations to parties for "party-building" — banned by McCain-Feingold |
| **PAC (Political Action Committee)** | Organization that raises money from members to contribute to candidates; limited to $5,000/candidate/election |
| **Super PAC** | Can raise and spend UNLIMITED amounts; cannot coordinate directly with candidates (post-Citizens United) |
| **Dark money (501(c)(4))** | Nonprofit organizations that can spend on politics without disclosing donors |

> 🔑 **AP Connection:** Citizens United v. FEC is **essential**. The Court ruled that the First Amendment protects corporate and union independent expenditures as free speech. This led to super PACs and a massive increase in campaign spending.
\`},
    {id:'govparti1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'What was the constitutional basis for the Supreme Court\\'s decision in Citizens United v. FEC (2010)?',options:['The Equal Protection Clause of the 14th Amendment, which requires all organizations to be treated equally under the law','The First Amendment\\'s protection of free speech — the Court ruled that spending money on independent political expenditures is a form of protected expression, including for corporations and unions','The Commerce Clause, which gives Congress the power to regulate all economic activity including campaign finance','Article II executive power — the president has sole authority to regulate campaign finance through executive orders'],correctAnswer:1,explanation:'The Court ruled 5-4 that the First Amendment protects political speech regardless of the speaker\\'s identity — including corporations and unions. Restrictions on independent expenditures (spending not coordinated with candidates) were therefore unconstitutional. This opened the door to super PACs, which can raise and spend unlimited amounts on political advertising.'},
      {question:'How do "super PACs" differ from traditional PACs?',options:['Super PACs can contribute unlimited amounts directly to candidates\\' campaigns without any restrictions','Super PACs can raise and spend unlimited amounts on independent expenditures but cannot coordinate directly with candidates or their campaigns','Super PACs are government-funded organizations that distribute public financing equally among all candidates','Super PACs are limited to $5,000 per candidate per election, identical to traditional PAC contribution limits'],correctAnswer:1,explanation:'Created after Citizens United, super PACs can raise unlimited funds from individuals, corporations, and unions and spend unlimited amounts on political advertising — but they cannot contribute directly to candidates or coordinate with their campaigns. Traditional PACs have stricter limits ($5,000/candidate/election) but can contribute directly to candidates.'}
    ]}}
  ]
};\n`},
{file:'gov-voting-elections-part1.ts', content:`export const govVotingElectionsPart1Data = {
  topicSlug: 'gov-voting-elections',
  sections: [
    {id:'govvotin1-intro',type:'text' as const,content:\`
# 🗳️ Voting & Elections

**Part 1 of 7 — How Americans Participate in Democracy**

---

| Section |
|---------|
| 📖 Expansion of Suffrage |
| Voter Turnout & Demographics |
| Types of Elections |
| The Electoral College |

> 🔑 **Key Concept:** The AP exam focuses on **why Americans vote (or don't)**, how the **Electoral College** works, and how **constitutional amendments** progressively expanded voting rights to more groups.
\`},
    {id:'govvotin1-suffrage',type:'text' as const,content:\`
## 📖 Expansion of Suffrage

Voting rights expanded through amendments and legislation over two centuries:

| Year | Change | Mechanism |
|---|---|---|
| **1870** | Cannot deny vote based on **race** | 15th Amendment |
| **1920** | Cannot deny vote based on **sex** | 19th Amendment |
| **1961** | Washington D.C. residents can vote for president | 23rd Amendment |
| **1964** | Cannot require **poll taxes** in federal elections | 24th Amendment |
| **1965** | Banned **literacy tests** and other discriminatory practices | Voting Rights Act |
| **1971** | Voting age lowered to **18** | 26th Amendment (prompted by Vietnam War — "old enough to fight, old enough to vote") |

### Voter Turnout Factors
| Factor | Effect on Turnout |
|---|---|
| **Education** | Higher education → higher turnout (strongest predictor) |
| **Income** | Higher income → higher turnout |
| **Age** | Older voters → higher turnout (18–24 age group lowest) |
| **Race** | Historically lower minority turnout (barriers); gap has narrowed |
| **Registration laws** | Motor Voter Act (1993) made registration easier; same-day registration increases turnout |
| **Election type** | Presidential elections > midterms > local (presidential ~60%; midterms ~40%) |

### Why Don't Americans Vote?
- **Registration burden** — unlike many democracies, U.S. voters must register themselves
- **Election Day on Tuesday** — many working people can't easily get to polls
- **Two-party system** — some voters feel unrepresented
- **Rational ignorance/apathy** — belief that one vote doesn't matter
- **Voter fatigue** — frequent elections at all levels

> 🔑 **AP Connection:** The AP exam tests the **socioeconomic model of voting** — education and income are the strongest predictors of turnout. Be ready to interpret data tables showing turnout by demographic group.
\`},
    {id:'govvotin1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'Which demographic factor is the STRONGEST predictor of voter turnout in the United States?',options:['Geographic region — voters in Southern states consistently turn out at higher rates than other regions','Education level — individuals with higher levels of education vote at significantly higher rates than those with less education','Gender — women consistently vote at rates more than double those of men across all elections','Religious affiliation — members of organized religions vote at dramatically higher rates than non-religious citizens'],correctAnswer:1,explanation:'Research consistently shows education is the strongest predictor of voter turnout. College-educated citizens vote at rates 20-30 percentage points higher than those without a high school diploma. Education increases political knowledge, civic engagement, and the skills needed to navigate the voting process.'},
      {question:'The 26th Amendment (1971) lowered the voting age from 21 to 18. What was the primary argument for this change?',options:['Research showed that 18-year-olds were more politically informed than older voters and would improve election outcomes','Congress wanted to increase voter turnout by adding younger voters who would be more likely to participate','If 18-year-olds were old enough to be drafted and fight in the Vietnam War, they should be old enough to vote for the leaders sending them to war','The Supreme Court ruled that the 14th Amendment\\'s Equal Protection Clause required equal voting ages in all states'],correctAnswer:2,explanation:'The "old enough to fight, old enough to vote" argument drove the 26th Amendment. During the Vietnam War, hundreds of thousands of 18-20 year olds were drafted and sent to war but could not vote for or against the leaders making those decisions. The amendment was ratified in just 107 days — the fastest ratification in U.S. history.'}
    ]}},
    {id:'govvotin1-electoral',type:'text' as const,content:\`
## 📖 The Electoral College

### How It Works

| Step | Detail |
|---|---|
| **Total electors** | 538 (435 House + 100 Senate + 3 D.C.) |
| **To win** | Majority = **270 electoral votes** |
| **Allocation** | Each state gets electors equal to its total congressional delegation (House + Senate) |
| **Winner-take-all** | 48 states + D.C. award ALL electoral votes to the state's popular vote winner (exceptions: Maine and Nebraska use congressional district method) |
| **No majority?** | House of Representatives chooses the president (each state delegation gets 1 vote) — 12th Amendment |

### Arguments For & Against

| For | Against |
|---|---|
| Preserves federalism — states matter as units | Candidate can win without the popular vote (2000, 2016) |
| Protects small states — minimum of 3 electors | "Battleground state" focus — candidates ignore "safe" states |
| Encourages coalition-building across regions | Winner-take-all means millions of votes are effectively "wasted" |
| Provides decisive outcomes (usually) | Disproportionate representation — small states overrepresented per capita |

### Electoral College Math (Key Insight)
- California: ~39 million people, 54 electoral votes → ~722,000 people per elector
- Wyoming: ~580,000 people, 3 electoral votes → ~193,000 people per elector
- Result: A Wyoming voter has roughly **3.7x the electoral influence** of a California voter

> 🔑 **AP Connection:** The AP exam frequently asks about the Electoral College's **winner-take-all** feature and how it creates "battleground" or "swing" states. You may also be asked to evaluate arguments for and against reform.
\`},
    {id:'govvotin1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'What happens if no presidential candidate wins a majority (270) of electoral votes?',options:['The candidate with the most electoral votes automatically becomes president regardless of the margin','The election is decided by the House of Representatives, where each state delegation casts one vote for president (12th Amendment)','The Supreme Court steps in to determine the winner based on which candidate won the national popular vote','A runoff election is held between the top two candidates within 30 days of the original election'],correctAnswer:1,explanation:'Under the 12th Amendment, if no candidate wins 270 electoral votes, the House of Representatives chooses the president — but each state delegation gets only ONE vote (not each individual representative). This happened in 1824, when the House chose John Quincy Adams over Andrew Jackson, who had won the most electoral and popular votes.'},
      {question:'Why does the Electoral College\\'s "winner-take-all" system create "battleground" or "swing" states?',options:['Because all states have exactly the same number of electoral votes, making every state equally competitive','Because winner-take-all means candidates focus resources on competitive states where the outcome is uncertain, ignoring states that reliably vote for one party','Because the Constitution requires candidates to campaign in every state equally, making some states more difficult to win','Because swing states receive more federal funding than other states, giving their voters more influence'],correctAnswer:1,explanation:'Under winner-take-all rules, winning California by 1 vote or 5 million votes yields the same 54 electoral votes. Candidates therefore focus on states where the outcome is uncertain (Ohio, Pennsylvania, Arizona, etc.) because flipping a swing state changes the electoral math. "Safe" states (deeply blue or red) receive little campaign attention because the outcome is predetermined.'}
    ]}}
  ]
};\n`},
{file:'gov-public-opinion-part1.ts', content:`export const govPublicOpinionPart1Data = {
  topicSlug: 'gov-public-opinion',
  sections: [
    {id:'govpubli1-intro',type:'text' as const,content:\`
# 📊 Public Opinion & Political Socialization

**Part 1 of 7 — How Americans Form Political Beliefs**

---

| Section |
|---------|
| 📖 What Is Public Opinion? |
| Political Socialization |
| Measuring Public Opinion: Polling |
| Ideology: Liberal vs. Conservative |

> 🔑 **Key Concept:** The AP exam focuses on how public opinion is **formed** (political socialization), how it is **measured** (scientific polling), and common **pitfalls** in polling (sampling bias, question wording).
\`},
    {id:'govpubli1-socialization',type:'text' as const,content:\`
## 📖 Political Socialization

Political socialization is the process by which individuals develop their political beliefs, values, and attitudes.

### Agents of Socialization (ranked by influence)

| Agent | Influence |
|---|---|
| **Family** | Strongest influence; children tend to adopt parents' party identification and basic political orientation |
| **Education** | Schools teach civic values; higher education correlates with more liberal social views |
| **Peer groups** | Friends and social networks reinforce or challenge political views |
| **Media** | Shapes agenda (what issues people think about); framing effects (how issues are presented) |
| **Religion** | Influences views on social issues (abortion, same-sex marriage); evangelical Protestants → more conservative; Black Protestants → more liberal on economic issues |
| **Race/ethnicity** | Shared group experiences shape views on civil rights, criminal justice, immigration |
| **Major events** | 9/11, Great Recession, COVID-19 — can shift attitudes for an entire generation ("generational effects") |

### Key Concepts

- **Gender gap** — women tend to be more supportive of Democratic candidates and social welfare programs than men (emerged clearly in the 1980s)
- **Generational effects** — shared experiences during formative years shape a generation's politics (e.g., millennials are more liberal on social issues than Baby Boomers)
- **Life-cycle effects** — people may become more conservative as they age (acquire property, higher income)

> 🔑 **AP Connection:** The AP exam will ask you to identify agents of socialization and predict how specific experiences might shape political views. **Family** is always the strongest factor.
\`},
    {id:'govpubli1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'Which agent of political socialization has the strongest influence on most individuals\\' initial party identification?',options:['Mass media — television news and social media platforms shape all political beliefs from birth','Family — children tend to adopt their parents\\' party identification and fundamental political values','College professors — higher education fundamentally changes every student\\'s political orientation','Peer groups — friends are always more influential than parents in determining political views'],correctAnswer:1,explanation:'Research consistently shows that family is the strongest agent of political socialization for initial party identification. Children are exposed to their parents\\' political discussions, values, and voting behavior from an early age. While other agents (education, peers, media) become more influential over time, the family\\'s initial imprint is the most powerful and lasting.'},
      {question:'What is the "gender gap" in American politics?',options:['The constitutional prohibition on gender-based discrimination in voting established by the 19th Amendment','The tendency for women to support Democratic candidates and social welfare programs at higher rates than men, a pattern that emerged clearly in the 1980s','The requirement that political parties nominate equal numbers of male and female candidates for elected office','The difference in voter registration rates between men and women, with men registering at significantly higher rates'],correctAnswer:1,explanation:'The gender gap refers to the persistent difference between men\\'s and women\\'s political preferences. Since the 1980s, women have been more likely to support Democratic candidates and favor government programs for healthcare, education, and social welfare. Men have been more likely to support Republican candidates and favor lower taxes and stronger defense spending.'}
    ]}},
    {id:'govpubli1-polling',type:'text' as const,content:\`
## 📖 Measuring Public Opinion: Polling

### Scientific Polling Requirements

| Element | Description |
|---|---|
| **Random sampling** | Every member of the population must have an **equal chance** of being selected |
| **Sample size** | Typically 1,000–1,500 respondents for national polls (larger samples = smaller margin of error) |
| **Margin of error** | The range within which the true value likely falls (±3% is standard for national polls) |
| **Question wording** | Must be neutral — leading or loaded questions produce biased results |

### Common Polling Errors

| Error | Description | Example |
|---|---|---|
| **Sampling bias** | Sample doesn't represent the population | 1936 Literary Digest poll — sampled from phone books and car registrations (wealthy people only) → predicted Landon over FDR |
| **Selection bias** | People who respond differ from those who don't | Online-only polls miss people without internet access |
| **Social desirability bias** | Respondents give "acceptable" answers rather than true opinions | Understating support for controversial candidates or positions |
| **Push polls** | Disguised campaign tactic — leading questions designed to change opinions, not measure them | "Would you support Candidate X if you knew they had been investigated for corruption?" |

### Types of Polls
- **Benchmark poll** — initial poll early in a campaign to assess starting position
- **Tracking poll** — daily or rolling polls to measure changes over time during a campaign
- **Exit poll** — surveys of voters as they leave polling places on Election Day
- **Straw poll** — informal, unscientific poll (no random sampling)

> 🔑 **AP Connection:** The AP exam will give you poll data and ask you to evaluate its reliability. Always check: Was the sample random? What is the margin of error? How were questions worded? Could sampling bias explain the results?
\`},
    {id:'govpubli1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'A national poll of 1,200 adults reports that 52% support a policy with a margin of error of ±3%. What does this mean?',options:['Exactly 52% of all Americans support the policy with no uncertainty whatsoever','The true level of support in the population likely falls between 49% and 55% — the margin of error represents the range of statistical uncertainty','The poll is unreliable because 3% of respondents refused to answer the question honestly','The poll results will change by exactly 3% if the poll is conducted again with different respondents'],correctAnswer:1,explanation:'The margin of error indicates the range of statistical uncertainty. With ±3%, the true population value likely falls between 49% and 55% (52% ± 3%). This means if the poll were repeated many times with different random samples, 95% of the results would fall within this range. The margin of error is determined primarily by sample size — larger samples produce smaller margins of error.'},
      {question:'The 1936 Literary Digest poll predicted Alf Landon would defeat Franklin Roosevelt, but FDR won in a landslide. What was the poll\\'s primary methodological error?',options:['The poll used too large a sample size, which made the results unreliable due to data processing errors','The poll suffered from sampling bias — it drew respondents from telephone directories and automobile registrations, which overrepresented wealthy Americans who favored Landon during the Great Depression','The poll questions were intentionally worded to favor Roosevelt, but voters changed their minds at the last minute','The poll was conducted too far in advance of the election and public opinion shifted dramatically in the final weeks'],correctAnswer:1,explanation:'The Literary Digest poll surveyed 2.4 million people — a massive sample — but the sample was drawn from phone books and car registration lists. During the Great Depression, these sources overrepresented wealthy Americans (who opposed FDR\\'s New Deal policies). The lesson: sample size doesn\\'t matter if the sample isn\\'t representative. George Gallup correctly predicted FDR\\'s win with a much smaller but properly randomized sample.'}
    ]}}
  ]
};\n`},
{file:'gov-ideologies-part1.ts', content:`export const govIdeologiesPart1Data = {
  topicSlug: 'gov-ideologies',
  sections: [
    {id:'govideol1-intro',type:'text' as const,content:\`
# 🧭 Political Ideologies

**Part 1 of 7 — Liberal, Conservative & Beyond**

---

| Section |
|---------|
| 📖 The Political Spectrum |
| Core Ideological Differences |
| Policy Applications |
| Polarization & Gridlock |

> 🔑 **Key Concept:** The AP exam expects you to apply **liberal** and **conservative** ideologies to specific **policy positions**. You must also understand how **polarization** affects governance.
\`},
    {id:'govideol1-spectrum',type:'text' as const,content:\`
## 📖 The Political Spectrum

| Position | Economic Policy | Social Policy | Role of Government |
|---|---|---|---|
| **Liberal** | Favor government regulation of business; support progressive taxation and social welfare programs | Support individual freedoms on social issues (abortion rights, LGBTQ+ rights); favor gun control | Government should actively address inequality and protect civil rights |
| **Conservative** | Favor free-market capitalism; lower taxes; less government regulation of business | Support traditional social values; oppose abortion; support gun rights (2nd Amendment) | Government should be limited; individuals and markets should solve problems |
| **Libertarian** | Minimal government intervention in the economy; extremely low taxes | Maximal individual freedom on social issues; oppose government regulation of personal behavior | Government should be minimal in ALL areas — both economic AND social |
| **Populist** | Support government economic intervention for working people | Support traditional values; skeptical of elites and immigration | Government should protect ordinary people from powerful interests |

### Key Policy Positions

| Issue | Liberal Position | Conservative Position |
|---|---|---|
| **Healthcare** | Government-provided or subsidized (single-payer, ACA expansion) | Market-based; reduce government involvement; repeal ACA mandates |
| **Taxation** | Progressive taxation; higher taxes on wealthy to fund social programs | Lower tax rates; flat or reduced taxes to stimulate economic growth |
| **Environment** | Strong EPA regulation; climate change action; renewable energy investment | Market solutions; reduce regulation that hurts business; skepticism of costly climate mandates |
| **Immigration** | Path to citizenship for undocumented immigrants; protect DACA | Strict enforcement; border security; reduce illegal and legal immigration |
| **Criminal justice** | Focus on rehabilitation; reform policing; reduce mass incarceration | Tough on crime; support law enforcement; mandatory sentencing |

> 🔑 **AP Connection:** Don't assume "liberal = Democrat" and "conservative = Republican" are perfect matches. The AP exam tests nuance — many Americans hold **mixed** views (fiscally conservative but socially liberal, or vice versa).
\`},
    {id:'govideol1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'A voter who supports both lower taxes and minimal business regulation AND full legalization of marijuana and same-sex marriage would best be described as:',options:['Liberal — because they support social freedoms that are typically associated with the Democratic Party platform','Conservative — because they support low taxes and deregulation that are typically associated with the Republican Party platform','Libertarian — because they favor minimal government intervention in BOTH economic and social matters','Populist — because they want the government to protect ordinary people from powerful corporate interests'],correctAnswer:2,explanation:'Libertarians hold a consistent philosophy of minimal government intervention across ALL domains. They combine conservative economic positions (low taxes, deregulation, free markets) with liberal social positions (personal freedom, drug legalization, marriage equality). This distinguishes them from both liberals (who want economic regulation) and conservatives (who often support social restrictions).'},
      {question:'Which of the following best explains the difference between liberal and conservative positions on healthcare policy?',options:['Liberals favor a completely unregulated healthcare system, while conservatives favor government-run healthcare for all citizens','Liberals generally favor a greater government role in providing or subsidizing healthcare (expanded insurance, public options), while conservatives favor market-based solutions with less government involvement','Liberals and conservatives hold identical positions on healthcare — both parties agree on the appropriate level of government involvement','Liberals want to eliminate all private hospitals, while conservatives want to eliminate all public hospitals'],correctAnswer:1,explanation:'The healthcare debate reflects core ideological differences: liberals see healthcare as a right that government should help provide (through programs like the ACA, Medicare expansion, or single-payer systems). Conservatives argue that market competition, consumer choice, and reduced regulation will produce better, more affordable healthcare without government inefficiency.'}
    ]}},
    {id:'govideol1-polarization',type:'text' as const,content:\`
## 📖 Polarization & Its Effects

### What Is Polarization?
The growing ideological distance between the Democratic and Republican parties — and their supporters — on major policy issues.

### Evidence of Polarization
| Indicator | Detail |
|---|---|
| **Congressional voting** | Virtually no overlap between parties' voting records (moderates have nearly disappeared) |
| **Party-line votes** | Increasing percentage of votes where nearly all Democrats oppose nearly all Republicans |
| **Media fragmentation** | Partisan media (cable news, social media) reinforces existing views ("echo chambers") |
| **Geographic sorting** | Americans increasingly live among like-minded people ("the Big Sort") |
| **Partisan animosity** | Increasing percentage of partisans who view the other party as a "threat to the nation" |

### Effects on Governance
| Effect | Description |
|---|---|
| **Gridlock** | Inability to pass legislation when parties cannot compromise |
| **Government shutdowns** | Failure to agree on funding legislation (happened in 2013, 2018–19) |
| **Judicial confirmation battles** | Supreme Court nominations become highly partisan (Garland, Kavanaugh, Barrett) |
| **Decline of bipartisanship** | Major legislation increasingly passes on party-line votes (ACA in 2010; Tax Cuts and Jobs Act in 2017) |
| **Primary elections** | Ideologically extreme candidates win primaries because primary voters are more partisan than general election voters |

> 🔑 **AP Connection:** The AP exam often asks you to analyze data on polarization (Congressional voting scores, public opinion data) and explain how polarization affects the legislative process — particularly **gridlock** and the difficulty of passing compromise legislation.
\`},
    {id:'govideol1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'How does political polarization contribute to legislative gridlock in Congress?',options:['Polarization makes it easier to pass bipartisan legislation because each party has clearly defined positions','When parties are ideologically polarized, compromise becomes extremely difficult because members face pressure from their base not to work with the opposing party, making it harder to pass legislation','Polarization has no effect on the legislative process because Congress operates independently of party politics','Gridlock occurs only when one party controls both the House and the Senate simultaneously'],correctAnswer:1,explanation:'When parties are highly polarized — with virtually no ideological overlap — members who compromise risk being attacked as "traitors" by their own party base and face primary challenges from more extreme candidates. This dynamic makes bipartisan dealmaking politically dangerous, leading to gridlock: important legislation stalls because neither party will make concessions.'},
      {question:'What role do partisan media and "echo chambers" play in political polarization?',options:['Partisan media reduces polarization by exposing audiences to diverse viewpoints and encouraging compromise','Partisan media and echo chambers reinforce existing political beliefs by presenting one-sided information, making audiences more ideologically rigid and less willing to consider opposing views','Echo chambers have no measurable effect on political attitudes because most Americans get their news from neutral, unbiased sources','Partisan media only affects elected officials, not ordinary voters, because most citizens don\\'t consume political news'],correctAnswer:1,explanation:'When people consume media that consistently confirms their existing beliefs (cable news channels, social media algorithms, partisan websites), their views become more extreme and rigid. They are less exposed to opposing arguments and more likely to view the other side as wrong or dangerous. This media-driven reinforcement is a significant driver of the growing ideological distance between Democratic and Republican voters.'}
    ]}}
  ]
};\n`},
{file:'gov-media-technology-part1.ts', content:`export const govMediaTechnologyPart1Data = {
  topicSlug: 'gov-media-technology',
  sections: [
    {id:'govmedia1-intro',type:'text' as const,content:\`
# 📱 Media, Technology & Politics

**Part 1 of 7 — The Role of Media in American Democracy**

---

| Section |
|---------|
| 📖 Functions of the Media |
| Types of Media & Their Impact |
| Media Bias & Framing |
| Social Media & Modern Campaigns |

> 🔑 **Key Concept:** The AP exam tests how media acts as a **linkage institution** — connecting citizens to government — and how media influences politics through **agenda setting**, **framing**, and **gatekeeping**.
\`},
    {id:'govmedia1-functions',type:'text' as const,content:\`
## 📖 Functions of the Media in Democracy

| Function | Description | Example |
|---|---|---|
| **Watchdog** | Investigates and exposes government wrongdoing | Watergate investigation (Washington Post); Pentagon Papers (New York Times) |
| **Agenda setting** | Influences WHAT issues the public thinks about (not what they think, but what they think ABOUT) | Extensive coverage of immigration makes it a top voter concern |
| **Gatekeeping** | Editors/producers decide WHICH stories get covered and which are ignored | Cable news choosing to cover a presidential tweet vs. a policy proposal |
| **Scorekeeper** | Reports on political races like horse races — who's ahead, poll numbers, strategy | "According to the latest poll, Candidate A leads by 3 points..." |
| **Framing** | Influences HOW issues are presented and interpreted | Describing proposed legislation as a "tax hike on working families" vs. "investment in public services" |

### Key Concept: Horse-Race Coverage
- Media covers elections like sporting events: polls, strategy, gaffes, momentum
- **Problem:** focuses on WHO is winning rather than WHAT candidates' policies are
- **Effect:** voters are better informed about poll numbers than policy positions
- This type of coverage dominates cable news and online media

> 🔑 **AP Connection:** Agenda setting vs. framing is a common AP distinction. **Agenda setting** = what issues are covered. **Framing** = how those issues are presented. Both are tested frequently.
\`},
    {id:'govmedia1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'A television news network dedicates extensive coverage to immigration policy for several weeks, and national polls subsequently show immigration rising as voters\\' top concern. This is an example of:',options:['Framing — the network is shaping how voters interpret immigration policy by presenting it favorably or negatively','Agenda setting — the network is influencing what issues the public considers important by choosing to cover immigration extensively','Gatekeeping — the network is preventing other media outlets from covering immigration stories','Scorekeeper function — the network is reporting on who is winning the immigration policy debate'],correctAnswer:1,explanation:'Agenda setting is the media\\'s power to influence WHAT issues the public thinks about. By devoting extensive coverage to immigration, the network elevates it in public consciousness — making voters consider it a priority. Note: agenda setting influences what people think ABOUT, not necessarily what they think. Framing would involve HOW immigration is presented (e.g., as a crisis vs. as a humanitarian issue).'},
      {question:'How does "horse-race coverage" affect democratic elections?',options:['It improves democracy by providing voters with detailed policy comparisons between candidates','It focuses on poll numbers, strategy, and momentum rather than substantive policy positions, leaving voters better informed about who is winning than about what candidates would do in office','It has no effect on voter behavior because citizens independently research every candidate\\'s policy positions','It ensures equal media coverage for all candidates regardless of their poll standing or party affiliation'],correctAnswer:1,explanation:'Horse-race coverage — reporting on elections like sporting events with emphasis on polls, strategy, gaffes, and "momentum" — dominates political media. Research shows voters exposed primarily to horse-race coverage have less policy knowledge but strong opinions about which candidate is "winning." Critics argue this undermines informed democratic participation.'}
    ]}},
    {id:'govmedia1-social',type:'text' as const,content:\`
## 📖 Social Media & Modern Campaigns

### How Social Media Has Changed Politics

| Change | Impact |
|---|---|
| **Disintermediation** | Candidates bypass traditional media gatekeepers — communicate directly with voters via Twitter/X, Instagram, TikTok |
| **Micro-targeting** | Campaigns use data analytics to identify and target specific voter groups with tailored messages |
| **Viral content** | Moments, gaffes, and messages spread instantly and uncontrollably |
| **Low cost** | Social media campaigning is far cheaper than TV advertising — levels the playing field for lesser-known candidates |
| **Echo chambers** | Algorithms show users content that confirms existing beliefs — reinforces polarization |
| **Misinformation** | False or misleading information spreads rapidly; difficult to correct once viral |

### Evolution of Campaign Communication
| Era | Primary Medium | Characteristic |
|---|---|---|
| 1930s–1950s | Radio | FDR's fireside chats; direct address to citizens |
| 1960s | Television | Kennedy-Nixon debate (1960) — visual appearance mattered; TV ads became dominant |
| 2000s | Internet/websites | Howard Dean's 2004 campaign pioneered online fundraising |
| 2008+ | Social media | Obama's 2008 campaign; Trump's Twitter strategy; comprehensive data analytics |

> 🔑 **AP Connection:** The AP exam asks about how technology changes the relationship between candidates and voters. Key concept: **disintermediation** — candidates no longer need newspapers or TV networks to reach voters, which reduces the media's gatekeeping power but also increases the spread of misinformation.
\`},
    {id:'govmedia1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'What is "disintermediation" in the context of modern political communication?',options:['The process by which the Federal Communications Commission regulates political advertising on television and radio','The ability of political candidates to bypass traditional media gatekeepers and communicate directly with voters through social media platforms','The requirement that all political advertisements must be fact-checked by an independent intermediary before broadcast','The practice of foreign governments interfering in domestic elections through traditional print media outlets'],correctAnswer:1,explanation:'Disintermediation means removing the intermediary (middleman). In politics, this means candidates no longer need to go through newspaper editors, TV producers, or journalists to reach voters. Through social media, they can communicate directly — bypassing the gatekeeping function of traditional media. This gives candidates more control over their message but also reduces the filtering of inaccurate or misleading claims.'},
      {question:'How has micro-targeting changed modern political campaigns?',options:['It has eliminated the need for any form of political advertising because voters now research candidates independently','Campaigns use data analytics to identify specific voter groups and deliver tailored messages to them, increasing the efficiency and personalization of voter outreach','Micro-targeting refers to campaigns focusing exclusively on small rural communities while ignoring urban voters','It has made campaigns more expensive and less effective because personalized messages are harder to produce than mass advertisements'],correctAnswer:1,explanation:'Micro-targeting uses vast databases of voter information — demographics, consumer behavior, social media activity, voting history — to identify specific voter segments and craft personalized messages. A campaign might send different Facebook ads about healthcare to suburban mothers, student debt to young voters, and tax policy to small business owners — all in the same district. This represents a fundamental shift from broadcast-era mass messaging to individualized digital persuasion.'}
    ]}}
  ]
};\n`}
];

for (const f of files) {
  fs.writeFileSync(path.join(dir, f.file), f.content);
  console.log('✅ Wrote ' + f.file);
}
console.log('\nDone: ' + files.length + ' files written');
