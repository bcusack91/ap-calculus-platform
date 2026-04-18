export const govFederalismPart1Data = {
  topicSlug: 'gov-federalism',
  sections: [
    {id:'govfeder1-intro',type:'text' as const,content:`
# 🏛️ Federalism

**Part 1 of 7 — Division of Power Between National & State Governments**

---

| Section |
|---------|
| 📖 What Is Federalism? |
| Types of Powers |
| Evolution of Federalism |
| Key Supreme Court Cases |

> 🔑 **Key Concept:** Federalism is the **division of power** between national and state governments. The AP exam tests how this relationship has shifted over time — from dual federalism (separate spheres) to cooperative federalism (shared responsibilities).
`},
    {id:'govfeder1-powers',type:'text' as const,content:`
## 📖 Types of Powers

| Power Type | Definition | Examples |
|---|---|---|
| **Enumerated (delegated) powers** | Explicitly granted to the national government by the Constitution | Declare war, coin money, regulate interstate commerce, establish post offices (Article I, §8) |
| **Reserved powers** | Powers not delegated to the national government, reserved to the states (10th Amendment) | Establish schools, issue licenses, conduct elections, regulate intrastate commerce |
| **Concurrent powers** | Shared by both national and state governments | Tax, build roads, establish courts, borrow money |
| **Implied powers** | Not explicitly stated but derived from the Necessary and Proper Clause (Article I, §8, cl. 18) | Establish a national bank, create the draft, regulate nuclear power |

### Key Constitutional Provisions
- **Supremacy Clause (Article VI)** — federal law is the "supreme law of the land" when there's a conflict with state law
- **10th Amendment** — powers not delegated to the federal government are reserved to the states or the people
- **Commerce Clause (Article I, §8)** — Congress can regulate interstate commerce (the most expansive federal power)
- **Necessary and Proper Clause** — Congress can make laws "necessary and proper" to carry out its enumerated powers (elastic clause)

### Models of Federalism
| Model | Era | Description |
|---|---|---|
| **Dual federalism** | 1789–1930s | "Layer cake" — national and state governments operate in separate, distinct spheres |
| **Cooperative federalism** | 1930s–1960s | "Marble cake" — national and state governments share responsibilities (New Deal era) |
| **New federalism** | 1970s–present | Devolution — shifting power back to states through block grants and reduced federal mandates |

> 🔑 **AP Connection:** The AP exam loves the **layer cake vs. marble cake** metaphor. Be ready to explain how the New Deal (1930s) shifted the U.S. from dual to cooperative federalism through expanded federal programs.
`},
    {id:'govfeder1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'Which constitutional provision has been most frequently used to expand federal power over the states?',options:['The Second Amendment\'s protection of the right to bear arms','The Commerce Clause (Article I, §8), which grants Congress power to regulate interstate commerce','The Third Amendment\'s prohibition on quartering soldiers in private homes','The Seventh Amendment\'s guarantee of jury trials in civil cases exceeding $20'],correctAnswer:1,explanation:'The Commerce Clause has been interpreted extremely broadly — allowing Congress to regulate not just trade between states but virtually any economic activity that affects interstate commerce. This interpretation expanded dramatically after the New Deal era and is the constitutional basis for most federal regulatory power.'},
      {question:'How does "cooperative federalism" differ from "dual federalism"?',options:['In cooperative federalism, states have no power at all and the national government makes every decision','In dual federalism, national and state governments operate in separate spheres, while in cooperative federalism they share responsibilities and collaborate on policy implementation','Dual federalism gives all power to the states, while cooperative federalism gives all power to the president','There is no practical difference — both terms describe the identical relationship between state and federal power'],correctAnswer:1,explanation:'Dual federalism ("layer cake") treated national and state power as distinct, non-overlapping spheres. Cooperative federalism ("marble cake") emerged during the New Deal when the federal government began working with states on shared programs — federal funding with state implementation (e.g., Medicaid, highway construction, education grants).'}
    ]}},
    {id:'govfeder1-cases',type:'text' as const,content:`
## 📖 Key Supreme Court Cases on Federalism

| Case | Year | Ruling | Significance |
|---|---|---|---|
| **McCulloch v. Maryland** | 1819 | Federal government has **implied powers** (Necessary and Proper Clause); states cannot tax federal institutions | Established broad interpretation of federal power; national bank was constitutional |
| **Gibbons v. Ogden** | 1824 | Federal government has broad power to regulate **interstate commerce** | Expanded Commerce Clause; federal power over navigation |
| **United States v. Lopez** | 1995 | Struck down the Gun-Free School Zones Act — Congress exceeded its Commerce Clause authority | First case in 60 years to limit Commerce Clause; signaled New Federalism |

### McCulloch v. Maryland — In Depth
- **Facts:** Maryland taxed the Second Bank of the United States; cashier James McCulloch refused to pay
- **Question 1:** Can Congress create a national bank? (Not explicitly in Constitution)
- **Chief Justice Marshall's ruling:** YES — the Necessary and Proper Clause gives Congress implied powers beyond those explicitly listed
- **Question 2:** Can a state tax a federal institution?
- **Marshall's ruling:** NO — "the power to tax involves the power to destroy"; Supremacy Clause prevents states from taxing federal government

> 🔑 **AP Connection:** McCulloch v. Maryland is the **most important federalism case** on the AP exam. You must know both holdings: (1) implied powers exist and (2) states cannot tax the federal government.
`},
    {id:'govfeder1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'In McCulloch v. Maryland (1819), Chief Justice Marshall ruled that Congress could create a national bank even though this power is not explicitly listed in the Constitution. What constitutional basis did he use?',options:['The First Amendment\'s protection of free speech and assembly','The Necessary and Proper Clause, which grants Congress implied powers to carry out its enumerated powers','The Equal Protection Clause of the 14th Amendment','The 10th Amendment\'s reservation of powers to the states'],correctAnswer:1,explanation:'Marshall ruled that the Necessary and Proper Clause (Article I, §8, cl. 18) gives Congress the power to make laws "necessary and proper" to execute its enumerated powers. Since Congress has enumerated powers to tax, borrow, and regulate commerce, creating a bank was a "necessary and proper" means of exercising those powers.'},
      {question:'Why was United States v. Lopez (1995) considered a landmark case for federalism?',options:['It was the first case to establish that the federal government has implied powers under the Necessary and Proper Clause','It was the first case in over 60 years where the Supreme Court struck down a federal law as exceeding Congress\'s Commerce Clause authority, signaling limits on federal power','It established that states have no power to regulate education within their borders','It gave the president unlimited power to override state laws through executive orders'],correctAnswer:1,explanation:'Lopez struck down the Gun-Free School Zones Act, ruling that carrying a gun near a school was not "economic activity" substantially affecting interstate commerce. This was the first time since the New Deal that the Court limited Commerce Clause power, marking a shift toward New Federalism and recognizing boundaries on federal authority.'}
    ]}}
  ]
};
