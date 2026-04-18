export const govConstitutionalFoundationsPart1Data = {
  topicSlug: 'gov-constitutional-foundations',
  sections: [
    {id:'govconst1-intro',type:'text' as const,content:`
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
`},
    {id:'govconst1-influences',type:'text' as const,content:`
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
`},
    {id:'govconst1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'Which Enlightenment thinker\'s ideas most directly influenced the Constitution\'s separation of powers into three branches?',options:['John Locke, who argued for natural rights and consent of the governed','Montesquieu, who argued that governmental power should be divided among separate branches to prevent tyranny','Thomas Hobbes, who argued for a strong absolute sovereign to prevent chaos','Adam Smith, who argued for free-market economics and limited government regulation'],correctAnswer:1,explanation:'Montesquieu\'s The Spirit of the Laws (1748) argued that liberty is best protected when governmental power is divided among legislative, executive, and judicial branches that can check each other. The Framers directly applied this principle in Articles I, II, and III of the Constitution.'},
      {question:'Why did Shays\' Rebellion (1786–87) convince many American leaders that the Articles of Confederation needed to be replaced?',options:['The rebellion proved that individual states were too powerful and needed to be abolished entirely','The rebellion demonstrated that the national government under the Articles was too weak to maintain order, collect taxes, or raise an army to respond to domestic crises','The rebellion was led by foreign powers seeking to reclaim American territory after the Revolution','The rebellion succeeded in establishing a military dictatorship that the Articles could not prevent'],correctAnswer:1,explanation:'Shays\' Rebellion — an armed uprising by debt-ridden Massachusetts farmers — exposed the Articles\' fatal weakness: Congress had no power to tax, no standing army, and no executive to respond. The national government had to rely on state militias. This crisis directly motivated the calling of the Constitutional Convention in 1787.'}
    ]}},
    {id:'govconst1-compromises',type:'text' as const,content:`
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
`},
    {id:'govconst1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'What problem did the Great Compromise (Connecticut Compromise) resolve at the Constitutional Convention?',options:['The dispute between Northern and Southern states over whether enslaved people should be counted for taxation purposes','The conflict between large and small states over congressional representation — creating a bicameral legislature with population-based House and equal-representation Senate','The question of whether the president should be elected by Congress or by direct popular vote','The disagreement over whether the federal government should have the power to levy taxes on imports and exports'],correctAnswer:1,explanation:'The Great Compromise merged the Virginia Plan (representation by population) and New Jersey Plan (equal representation). The result was a bicameral Congress: the House of Representatives based on population (favoring large states) and the Senate with two senators per state (protecting small states).'},
      {question:'How did the Three-Fifths Compromise affect political power in the early United States?',options:['It gave Northern industrial states more representatives in Congress because they had larger free populations','It gave slaveholding Southern states disproportionate representation in the House by counting enslaved people (who could not vote) toward population totals','It had no practical effect because enslaved people were counted equally in all states regardless of the compromise','It reduced the South\'s political power by excluding all enslaved people from census counts'],correctAnswer:1,explanation:'By counting each enslaved person as 3/5 of a person for apportionment, the compromise inflated Southern states\' representation in the House (and the Electoral College, which is based on total congressional seats). This gave the South outsized political power despite enslaved people having no voting rights — a structural advantage that persisted until the 13th Amendment (1865).'}
    ]}}
  ]
};
