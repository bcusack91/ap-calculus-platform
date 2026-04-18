export const govVotingElectionsPart1Data = {
  topicSlug: 'gov-voting-elections',
  sections: [
    {id:'govvotin1-intro',type:'text' as const,content:`
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
`},
    {id:'govvotin1-suffrage',type:'text' as const,content:`
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
`},
    {id:'govvotin1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'Which demographic factor is the STRONGEST predictor of voter turnout in the United States?',options:['Geographic region — voters in Southern states consistently turn out at higher rates than other regions','Education level — individuals with higher levels of education vote at significantly higher rates than those with less education','Gender — women consistently vote at rates more than double those of men across all elections','Religious affiliation — members of organized religions vote at dramatically higher rates than non-religious citizens'],correctAnswer:1,explanation:'Research consistently shows education is the strongest predictor of voter turnout. College-educated citizens vote at rates 20-30 percentage points higher than those without a high school diploma. Education increases political knowledge, civic engagement, and the skills needed to navigate the voting process.'},
      {question:'The 26th Amendment (1971) lowered the voting age from 21 to 18. What was the primary argument for this change?',options:['Research showed that 18-year-olds were more politically informed than older voters and would improve election outcomes','Congress wanted to increase voter turnout by adding younger voters who would be more likely to participate','If 18-year-olds were old enough to be drafted and fight in the Vietnam War, they should be old enough to vote for the leaders sending them to war','The Supreme Court ruled that the 14th Amendment\'s Equal Protection Clause required equal voting ages in all states'],correctAnswer:2,explanation:'The "old enough to fight, old enough to vote" argument drove the 26th Amendment. During the Vietnam War, hundreds of thousands of 18-20 year olds were drafted and sent to war but could not vote for or against the leaders making those decisions. The amendment was ratified in just 107 days — the fastest ratification in U.S. history.'}
    ]}},
    {id:'govvotin1-electoral',type:'text' as const,content:`
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
`},
    {id:'govvotin1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'What happens if no presidential candidate wins a majority (270) of electoral votes?',options:['The candidate with the most electoral votes automatically becomes president regardless of the margin','The election is decided by the House of Representatives, where each state delegation casts one vote for president (12th Amendment)','The Supreme Court steps in to determine the winner based on which candidate won the national popular vote','A runoff election is held between the top two candidates within 30 days of the original election'],correctAnswer:1,explanation:'Under the 12th Amendment, if no candidate wins 270 electoral votes, the House of Representatives chooses the president — but each state delegation gets only ONE vote (not each individual representative). This happened in 1824, when the House chose John Quincy Adams over Andrew Jackson, who had won the most electoral and popular votes.'},
      {question:'Why does the Electoral College\'s "winner-take-all" system create "battleground" or "swing" states?',options:['Because all states have exactly the same number of electoral votes, making every state equally competitive','Because winner-take-all means candidates focus resources on competitive states where the outcome is uncertain, ignoring states that reliably vote for one party','Because the Constitution requires candidates to campaign in every state equally, making some states more difficult to win','Because swing states receive more federal funding than other states, giving their voters more influence'],correctAnswer:1,explanation:'Under winner-take-all rules, winning California by 1 vote or 5 million votes yields the same 54 electoral votes. Candidates therefore focus on states where the outcome is uncertain (Ohio, Pennsylvania, Arizona, etc.) because flipping a swing state changes the electoral math. "Safe" states (deeply blue or red) receive little campaign attention because the outcome is predetermined.'}
    ]}}
  ]
};
