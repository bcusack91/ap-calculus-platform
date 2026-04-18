export const govPartiesInterestGroupsPart1Data = {
  topicSlug: 'gov-parties-interest-groups',
  sections: [
    {id:'govparti1-intro',type:'text' as const,content:`
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
`},
    {id:'govparti1-parties',type:'text' as const,content:`
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
`},
    {id:'govparti1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'What is the primary structural reason the United States has a two-party system rather than a multi-party system?',options:['The Constitution explicitly requires that only two parties may exist and compete in elections','Winner-take-all (single-member district plurality) elections make it nearly impossible for third parties to win seats, as only the candidate with the most votes in each district wins','Americans culturally prefer only two political parties and would refuse to vote for a third-party candidate under any circumstances','Federal law prohibits more than two parties from appearing on election ballots in any state'],correctAnswer:1,explanation:'Duverger\'s Law explains this: in winner-take-all elections, voters tend toward two major parties because voting for a third party is seen as "wasting" a vote. A third party could win 20% of the vote nationwide but win zero seats. Proportional representation systems (used in many other democracies) allocate seats by vote share, enabling multi-party systems.'},
      {question:'How do interest groups differ from political parties?',options:['Interest groups run candidates for office, while political parties only lobby elected officials','Interest groups seek to influence public policy on specific issues without running candidates, while political parties seek to win elections and control government','There is no meaningful difference — interest groups and political parties serve identical functions in the political system','Interest groups are prohibited from participating in politics by the First Amendment, while parties are protected'],correctAnswer:1,explanation:'Interest groups (NRA, Sierra Club, AARP) focus on influencing policy — through lobbying, campaign contributions, and grassroots mobilization — but they don\'t nominate or run candidates for office. Political parties (Democrats, Republicans) exist primarily to recruit, nominate, and elect candidates who will control government and enact the party\'s platform.'}
    ]}},
    {id:'govparti1-finance',type:'text' as const,content:`
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
`},
    {id:'govparti1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'What was the constitutional basis for the Supreme Court\'s decision in Citizens United v. FEC (2010)?',options:['The Equal Protection Clause of the 14th Amendment, which requires all organizations to be treated equally under the law','The First Amendment\'s protection of free speech — the Court ruled that spending money on independent political expenditures is a form of protected expression, including for corporations and unions','The Commerce Clause, which gives Congress the power to regulate all economic activity including campaign finance','Article II executive power — the president has sole authority to regulate campaign finance through executive orders'],correctAnswer:1,explanation:'The Court ruled 5-4 that the First Amendment protects political speech regardless of the speaker\'s identity — including corporations and unions. Restrictions on independent expenditures (spending not coordinated with candidates) were therefore unconstitutional. This opened the door to super PACs, which can raise and spend unlimited amounts on political advertising.'},
      {question:'How do "super PACs" differ from traditional PACs?',options:['Super PACs can contribute unlimited amounts directly to candidates\' campaigns without any restrictions','Super PACs can raise and spend unlimited amounts on independent expenditures but cannot coordinate directly with candidates or their campaigns','Super PACs are government-funded organizations that distribute public financing equally among all candidates','Super PACs are limited to $5,000 per candidate per election, identical to traditional PAC contribution limits'],correctAnswer:1,explanation:'Created after Citizens United, super PACs can raise unlimited funds from individuals, corporations, and unions and spend unlimited amounts on political advertising — but they cannot contribute directly to candidates or coordinate with their campaigns. Traditional PACs have stricter limits ($5,000/candidate/election) but can contribute directly to candidates.'}
    ]}}
  ]
};
