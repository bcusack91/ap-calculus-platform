export const govPresidencyPart1Data = {
  topicSlug: 'gov-presidency',
  sections: [
    {id:'govpresi1-intro',type:'text' as const,content:`
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
`},
    {id:'govpresi1-powers',type:'text' as const,content:`
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
`},
    {id:'govpresi1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'How do executive agreements differ from formal treaties?',options:['Executive agreements require approval from 2/3 of the Senate, while treaties only need a simple majority vote','Executive agreements are international agreements that do NOT require Senate ratification, while treaties require approval by 2/3 of the Senate','Executive agreements can only be used for domestic policy, while treaties are used for all international relations','There is no legal difference — executive agreements and treaties are identical in all respects'],correctAnswer:1,explanation:'Executive agreements allow the president to make binding international commitments without the 2/3 Senate vote required for treaties. This makes them faster and politically easier — presidents have used far more executive agreements than formal treaties. However, they can be reversed by subsequent presidents.'},
      {question:'Which of the following is an example of the president using the "bully pulpit"?',options:['The president vetoing a bill passed by Congress and returning it with objections','The president giving a nationally televised address to build public support for a policy, pressuring Congress to act','The president issuing a pardon for a federal crime committed by a political ally','The president appointing a new Supreme Court justice after a vacancy occurs on the bench'],correctAnswer:1,explanation:'The "bully pulpit" (coined by Theodore Roosevelt) refers to the president\'s unique ability to command media attention and use it to shape public opinion. By going directly to the American people — through speeches, press conferences, or social media — the president can pressure Congress to support their agenda.'}
    ]}},
    {id:'govpresi1-checks',type:'text' as const,content:`
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
`},
    {id:'govpresi1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'What was the constitutional significance of United States v. Nixon (1974)?',options:['It established that the president has absolute executive privilege and communications can never be subpoenaed','It ruled that executive privilege exists but is not absolute — the president cannot withhold evidence needed in criminal proceedings','It gave Congress the power to appoint special prosecutors to investigate the president without judicial oversight','It eliminated the president\'s pardon power for all crimes related to their time in office'],correctAnswer:1,explanation:'In United States v. Nixon, the Supreme Court unanimously ruled that while executive privilege is a legitimate presidential power, it is not absolute. President Nixon was required to turn over White House tape recordings subpoenaed for a criminal investigation (Watergate). This established that no person — including the president — is above the law.'},
      {question:'What is the primary purpose of the War Powers Resolution (1973)?',options:['To give the president unlimited authority to deploy military forces anywhere in the world without restriction','To limit the president\'s ability to commit U.S. forces to military action without congressional authorization — requiring notification within 48 hours and a 60-day limit','To require the president to personally lead military forces in any armed conflict involving U.S. troops','To abolish the president\'s role as Commander in Chief and transfer military authority entirely to Congress'],correctAnswer:1,explanation:'The War Powers Resolution was passed over Nixon\'s veto in response to the Vietnam War, which escalated without a formal declaration of war. It requires the president to notify Congress within 48 hours of deploying troops and limits deployment to 60 days (extendable to 90) without congressional authorization. Its effectiveness is debated.'}
    ]}}
  ]
};
