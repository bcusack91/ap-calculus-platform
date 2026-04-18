export const govSeparationOfPowersPart1Data = {
  topicSlug: 'gov-separation-of-powers',
  sections: [
    {id:'govsepar1-intro',type:'text' as const,content:`
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
`},
    {id:'govsepar1-structure',type:'text' as const,content:`
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
`},
    {id:'govsepar1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'The Senate\'s power to confirm or reject presidential appointments to the federal judiciary is an example of:',options:['The executive branch checking the legislative branch through the veto power','The legislative branch checking the executive branch through the advice and consent power (checks and balances)','The judicial branch checking the legislative branch through judicial review','The executive branch checking the judicial branch through the appointment power'],correctAnswer:1,explanation:'The Senate\'s confirmation power (Article II, §2) is a check by the legislative branch on the executive branch. While the president nominates judges and executive officials, the Senate must confirm them — giving Congress a tool to block nominees who are unqualified or whose ideology the Senate opposes.'},
      {question:'Which of the following is an example of the judicial branch checking the legislative branch?',options:['The president vetoing a bill passed by Congress because they disagree with the policy','The Supreme Court declaring a federal law unconstitutional through judicial review','Congress overriding a presidential veto with a 2/3 vote in both chambers','The Senate refusing to ratify a treaty negotiated by the president'],correctAnswer:1,explanation:'Judicial review — the Supreme Court\'s power to declare laws unconstitutional (established in Marbury v. Madison, 1803) — is the judiciary\'s primary check on both Congress and the president. When the Court strikes down a law, Congress can only respond by amending the Constitution or passing a revised law that addresses the constitutional concerns.'}
    ]}},
    {id:'govsepar1-fed51',type:'text' as const,content:`
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
`},
    {id:'govsepar1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'In Federalist No. 51, Madison argues that "ambition must be made to counteract ambition." What does this mean in practice?',options:['Citizens should be ambitious in pursuing wealth so the economy grows and government becomes unnecessary','Each branch of government should have both the constitutional tools and personal incentive to resist power grabs by other branches, creating a self-enforcing check system','Ambitious political candidates should be prevented from running for office to avoid concentration of power','The president should be the most ambitious officeholder and use that ambition to dominate Congress and the courts'],correctAnswer:1,explanation:'Madison\'s insight was that structural protections alone are insufficient — the people running each branch must have personal motivation to defend their branch\'s power. By giving each branch distinct powers and making officials\' political survival tied to defending those powers, the system harnesses human self-interest to prevent tyranny.'},
      {question:'What is the "double security" for liberty that Madison describes in Federalist No. 51?',options:['The two houses of Congress (House and Senate) that must both agree before any law can be passed','The combination of federalism (dividing power between national and state governments) AND separation of powers (dividing power among three branches), which together protect against tyranny','The Bill of Rights and the 14th Amendment, which together guarantee all individual freedoms against government interference','The president\'s veto power and the Supreme Court\'s judicial review power, which together prevent Congress from passing any law'],correctAnswer:1,explanation:'Madison\'s "double security" refers to two layers of protection: (1) vertical — federalism divides power between national and state governments, so neither can become tyrannical; (2) horizontal — separation of powers divides the national government into three branches that check each other. Both layers must be breached for tyranny to occur.'}
    ]}}
  ]
};
