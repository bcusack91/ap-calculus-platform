export const govBureaucracyPart1Data = {
  topicSlug: 'gov-bureaucracy',
  sections: [
    {id:'govburea1-intro',type:'text' as const,content:`
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
`},
    {id:'govburea1-structure',type:'text' as const,content:`
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
`},
    {id:'govburea1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'Why are independent regulatory commissions (like the FCC and SEC) structured with fixed, staggered terms for commissioners?',options:['To ensure that all commissioners are from the same political party as the current president','To insulate the commissions from political pressure by preventing any single president from replacing all commissioners at once','To guarantee that commissioners serve for life, similar to federal judges under Article III','To allow Congress to directly appoint and remove commissioners without presidential involvement'],correctAnswer:1,explanation:'Fixed, staggered terms mean that commissioners\' terms overlap presidential administrations. A new president cannot immediately replace all commissioners — providing continuity and insulating regulatory decisions from short-term political pressure. This distinguishes independent regulatory commissions from Cabinet departments, whose heads serve at the president\'s pleasure.'},
      {question:'What is "rule-making" and why is it a significant power of the federal bureaucracy?',options:['Rule-making is the process by which Congress writes legislation — bureaucratic agencies have no role in this process','Rule-making is the process by which bureaucratic agencies write specific regulations to implement broad congressional legislation — these regulations have the force of law','Rule-making refers to the Supreme Court\'s power to establish procedural rules for federal courts','Rule-making is the president\'s power to issue executive orders that override existing congressional legislation'],correctAnswer:1,explanation:'When Congress passes a law like the Clean Air Act, the text is broad. The EPA then writes detailed regulations (specific emissions limits, testing procedures, penalties) through rule-making. These regulations are legally binding — violating them carries the same consequences as violating the statute itself. This gives unelected bureaucrats significant policy-making power.'}
    ]}},
    {id:'govburea1-iron',type:'text' as const,content:`
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
`},
    {id:'govburea1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'Which of the following best describes an "iron triangle" in American politics?',options:['A formal constitutional structure that divides power among the three branches of government equally','A mutually beneficial relationship among a congressional committee, a bureaucratic agency, and an interest group that work together to shape policy in a specific area','A diplomatic alliance between three nations that coordinates foreign policy and military strategy','The three levels of the federal court system: district courts, courts of appeals, and the Supreme Court'],correctAnswer:1,explanation:'Iron triangles are informal, stable alliances among (1) a congressional committee that controls funding, (2) a bureaucratic agency that implements policy, and (3) an interest group that lobbies and provides campaign support. Each actor benefits from the relationship, making these alliances resistant to change and often criticized for prioritizing narrow interests over the public good.'},
      {question:'How do "issue networks" differ from "iron triangles"?',options:['Issue networks are legally established by Congress, while iron triangles are informal and unconstitutional','Issue networks are more fluid and open, involving many diverse participants (media, think tanks, multiple interest groups), while iron triangles are stable, narrow, three-way relationships','Issue networks only exist at the state level, while iron triangles only operate within the federal government','Issue networks are always more effective at shaping policy than iron triangles because they include more participants'],correctAnswer:1,explanation:'Issue networks are broader and more fluid than iron triangles. They include many actors — multiple interest groups, congressional committees, bureaucratic agencies, media organizations, think tanks, and academics — whose participation may change over time. Complex issues like healthcare or climate policy involve issue networks rather than simple three-way iron triangles.'}
    ]}}
  ]
};
