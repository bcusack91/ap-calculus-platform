export const govIdeologiesPart1Data = {
  topicSlug: 'gov-ideologies',
  sections: [
    {id:'govideol1-intro',type:'text' as const,content:`
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
`},
    {id:'govideol1-spectrum',type:'text' as const,content:`
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
`},
    {id:'govideol1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'A voter who supports both lower taxes and minimal business regulation AND full legalization of marijuana and same-sex marriage would best be described as:',options:['Liberal — because they support social freedoms that are typically associated with the Democratic Party platform','Conservative — because they support low taxes and deregulation that are typically associated with the Republican Party platform','Libertarian — because they favor minimal government intervention in BOTH economic and social matters','Populist — because they want the government to protect ordinary people from powerful corporate interests'],correctAnswer:2,explanation:'Libertarians hold a consistent philosophy of minimal government intervention across ALL domains. They combine conservative economic positions (low taxes, deregulation, free markets) with liberal social positions (personal freedom, drug legalization, marriage equality). This distinguishes them from both liberals (who want economic regulation) and conservatives (who often support social restrictions).'},
      {question:'Which of the following best explains the difference between liberal and conservative positions on healthcare policy?',options:['Liberals favor a completely unregulated healthcare system, while conservatives favor government-run healthcare for all citizens','Liberals generally favor a greater government role in providing or subsidizing healthcare (expanded insurance, public options), while conservatives favor market-based solutions with less government involvement','Liberals and conservatives hold identical positions on healthcare — both parties agree on the appropriate level of government involvement','Liberals want to eliminate all private hospitals, while conservatives want to eliminate all public hospitals'],correctAnswer:1,explanation:'The healthcare debate reflects core ideological differences: liberals see healthcare as a right that government should help provide (through programs like the ACA, Medicare expansion, or single-payer systems). Conservatives argue that market competition, consumer choice, and reduced regulation will produce better, more affordable healthcare without government inefficiency.'}
    ]}},
    {id:'govideol1-polarization',type:'text' as const,content:`
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
`},
    {id:'govideol1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'How does political polarization contribute to legislative gridlock in Congress?',options:['Polarization makes it easier to pass bipartisan legislation because each party has clearly defined positions','When parties are ideologically polarized, compromise becomes extremely difficult because members face pressure from their base not to work with the opposing party, making it harder to pass legislation','Polarization has no effect on the legislative process because Congress operates independently of party politics','Gridlock occurs only when one party controls both the House and the Senate simultaneously'],correctAnswer:1,explanation:'When parties are highly polarized — with virtually no ideological overlap — members who compromise risk being attacked as "traitors" by their own party base and face primary challenges from more extreme candidates. This dynamic makes bipartisan dealmaking politically dangerous, leading to gridlock: important legislation stalls because neither party will make concessions.'},
      {question:'What role do partisan media and "echo chambers" play in political polarization?',options:['Partisan media reduces polarization by exposing audiences to diverse viewpoints and encouraging compromise','Partisan media and echo chambers reinforce existing political beliefs by presenting one-sided information, making audiences more ideologically rigid and less willing to consider opposing views','Echo chambers have no measurable effect on political attitudes because most Americans get their news from neutral, unbiased sources','Partisan media only affects elected officials, not ordinary voters, because most citizens don\'t consume political news'],correctAnswer:1,explanation:'When people consume media that consistently confirms their existing beliefs (cable news channels, social media algorithms, partisan websites), their views become more extreme and rigid. They are less exposed to opposing arguments and more likely to view the other side as wrong or dangerous. This media-driven reinforcement is a significant driver of the growing ideological distance between Democratic and Republican voters.'}
    ]}}
  ]
};
