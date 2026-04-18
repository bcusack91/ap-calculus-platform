export const govCongressPart1Data = {
  topicSlug: 'gov-congress',
  sections: [
    {id:'govcongr1-intro',type:'text' as const,content:`
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
`},
    {id:'govcongr1-structure',type:'text' as const,content:`
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
`},
    {id:'govcongr1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'Which of the following is an exclusive power of the Senate that the House of Representatives does NOT share?',options:['Initiating revenue (tax) bills and controlling government spending','Confirming presidential appointments to the Cabinet and federal judiciary','Impeaching the president and other federal officials by majority vote','Setting the rules for floor debate through the Rules Committee'],correctAnswer:1,explanation:'The Senate has the exclusive power to confirm presidential appointments (Cabinet, ambassadors, federal judges including Supreme Court justices) by majority vote and to ratify treaties by a 2/3 vote. The House initiates revenue bills and has the sole power of impeachment, while the Senate conducts the trial.'},
      {question:'Why does the filibuster give the Senate minority party significant power?',options:['The filibuster allows any single senator to permanently block all legislation for an entire session','The filibuster requires 60 votes (cloture) to end debate, meaning 41 senators can block legislation even if a majority supports it','The filibuster gives the minority party the power to remove the majority leader from their position','The filibuster is identical to the House Rules Committee and has the same effect in both chambers'],correctAnswer:1,explanation:'Under Senate rules, debate on most legislation is unlimited. A filibuster extends debate indefinitely, and ending it requires a cloture vote of 60 senators. This means that even with a 59-41 majority, the minority party can block legislation — giving the minority far more power in the Senate than in the House, where the majority controls debate through the Rules Committee.'}
    ]}},
    {id:'govcongr1-process',type:'text' as const,content:`
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
`},
    {id:'govcongr1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'At which stage of the legislative process do most bills effectively "die"?',options:['During presidential veto — most bills are vetoed and Congress rarely overrides','During floor debate — most bills are defeated by party-line votes on the House or Senate floor','In committee — most bills are never given a hearing or vote by the committee to which they are assigned','In conference committee — most bills fail because the House and Senate cannot agree on a compromise version'],correctAnswer:2,explanation:'Of the thousands of bills introduced each session, the vast majority die in committee — they are simply never scheduled for a hearing or vote. Committee chairs have enormous power as "gatekeepers" who decide which bills receive attention. Only a small fraction of introduced bills ever reach the floor for a vote.'},
      {question:'What is "logrolling" in the context of congressional politics?',options:['A formal procedure for amending the Constitution that requires approval from 3/4 of state legislatures','The practice of trading votes between legislators — "I\'ll support your bill if you support mine"','A method of presidential veto that allows the president to reject specific provisions within a bill','The process by which the Supreme Court reviews and overturns unconstitutional legislation'],correctAnswer:1,explanation:'Logrolling is the informal practice of vote-trading between legislators. Member A agrees to vote for Member B\'s bill in exchange for B\'s support on A\'s bill. This is how coalition-building works in Congress — especially for bills that might not have enough independent support to pass on their own merits.'}
    ]}}
  ]
};
