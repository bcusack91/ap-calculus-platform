export const govMediaTechnologyPart1Data = {
  topicSlug: 'gov-media-technology',
  sections: [
    {id:'govmedia1-intro',type:'text' as const,content:`
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
`},
    {id:'govmedia1-functions',type:'text' as const,content:`
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
`},
    {id:'govmedia1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'A television news network dedicates extensive coverage to immigration policy for several weeks, and national polls subsequently show immigration rising as voters\' top concern. This is an example of:',options:['Framing — the network is shaping how voters interpret immigration policy by presenting it favorably or negatively','Agenda setting — the network is influencing what issues the public considers important by choosing to cover immigration extensively','Gatekeeping — the network is preventing other media outlets from covering immigration stories','Scorekeeper function — the network is reporting on who is winning the immigration policy debate'],correctAnswer:1,explanation:'Agenda setting is the media\'s power to influence WHAT issues the public thinks about. By devoting extensive coverage to immigration, the network elevates it in public consciousness — making voters consider it a priority. Note: agenda setting influences what people think ABOUT, not necessarily what they think. Framing would involve HOW immigration is presented (e.g., as a crisis vs. as a humanitarian issue).'},
      {question:'How does "horse-race coverage" affect democratic elections?',options:['It improves democracy by providing voters with detailed policy comparisons between candidates','It focuses on poll numbers, strategy, and momentum rather than substantive policy positions, leaving voters better informed about who is winning than about what candidates would do in office','It has no effect on voter behavior because citizens independently research every candidate\'s policy positions','It ensures equal media coverage for all candidates regardless of their poll standing or party affiliation'],correctAnswer:1,explanation:'Horse-race coverage — reporting on elections like sporting events with emphasis on polls, strategy, gaffes, and "momentum" — dominates political media. Research shows voters exposed primarily to horse-race coverage have less policy knowledge but strong opinions about which candidate is "winning." Critics argue this undermines informed democratic participation.'}
    ]}},
    {id:'govmedia1-social',type:'text' as const,content:`
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
`},
    {id:'govmedia1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'What is "disintermediation" in the context of modern political communication?',options:['The process by which the Federal Communications Commission regulates political advertising on television and radio','The ability of political candidates to bypass traditional media gatekeepers and communicate directly with voters through social media platforms','The requirement that all political advertisements must be fact-checked by an independent intermediary before broadcast','The practice of foreign governments interfering in domestic elections through traditional print media outlets'],correctAnswer:1,explanation:'Disintermediation means removing the intermediary (middleman). In politics, this means candidates no longer need to go through newspaper editors, TV producers, or journalists to reach voters. Through social media, they can communicate directly — bypassing the gatekeeping function of traditional media. This gives candidates more control over their message but also reduces the filtering of inaccurate or misleading claims.'},
      {question:'How has micro-targeting changed modern political campaigns?',options:['It has eliminated the need for any form of political advertising because voters now research candidates independently','Campaigns use data analytics to identify specific voter groups and deliver tailored messages to them, increasing the efficiency and personalization of voter outreach','Micro-targeting refers to campaigns focusing exclusively on small rural communities while ignoring urban voters','It has made campaigns more expensive and less effective because personalized messages are harder to produce than mass advertisements'],correctAnswer:1,explanation:'Micro-targeting uses vast databases of voter information — demographics, consumer behavior, social media activity, voting history — to identify specific voter segments and craft personalized messages. A campaign might send different Facebook ads about healthcare to suburban mothers, student debt to young voters, and tax policy to small business owners — all in the same district. This represents a fundamental shift from broadcast-era mass messaging to individualized digital persuasion.'}
    ]}}
  ]
};
