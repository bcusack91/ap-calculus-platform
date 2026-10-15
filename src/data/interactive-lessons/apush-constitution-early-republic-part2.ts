export const apushConstitutionEarlyRepublicPart2Data = {
  topicSlug: 'apush-constitution-early-republic',
  sections: [
    {
      id: 'apushcon2-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 The Constitution & Early Republic

**Part 2 of 7 — Launching the Federal Government: The Hamilton Program and the First Parties**

---

| Section |
|---------|
| 📖 Building the Government, 1789 |
| Hamilton's Financial Program, Step by Step |
| 📌 The Bank Debate and the Whiskey Rebellion |
| How the First Party System Formed |

> 🔑 **Key Concept:** The Constitution was a framework, not a finished government. Between 1789 and 1796 Washington's administration had to build institutions, pay the Revolutionary War debt and enforce federal law. Disagreements over **how much power the new government should use**, and on whose behalf, split the founders into the first political parties. (CED Topic 3.10; Key Concept 3.2.II)
      `
    },
    {
      id: 'apushcon2-content',
      type: 'text' as const,
      content: `
## 📖 Building the Government, 1789

George Washington took the oath of office in New York City on **April 30, 1789**. Almost nothing existed yet: no departments, no federal courts below the Supreme Court, no revenue. Congress and the president filled in the blanks, and many of their choices became lasting precedents.

| Step | What Happened | Why It Mattered |
|---|---|---|
| **Executive departments (1789)** | Congress created State, Treasury and War; Washington chose **Thomas Jefferson** (State), **Alexander Hamilton** (Treasury), **Henry Knox** (War) and **Edmund Randolph** (Attorney General) | Washington consulted these department heads as a group, which created the **cabinet**, an institution the Constitution never names |
| **Tariff of 1789** | A duty of about 5% on most imports | The first federal revenue; it showed the new government could do what Congress under the Articles could not |
| **Judiciary Act of 1789** | Set the Supreme Court at six justices and created 13 district courts and 3 circuit courts | Section 25 let the Supreme Court hear appeals from state courts on federal questions, a basis for federal judicial supremacy |
| **Bill of Rights (proposed 1789, ratified 1791)** | James Madison guided amendments through the House; Congress sent 12 to the states and 10 were ratified by December 1791 | Kept the Federalists' promise from the ratification fight and weakened Anti-Federalist opposition to the new government |

> 💡 **Note the irony:** Madison, a leading Federalist in 1787–88, drafted the Bill of Rights in 1789 and by 1791 was organizing the opposition to Hamilton. The coalition that wrote and ratified the Constitution did not survive its first term in office.

## Hamilton's Financial Program, Step by Step

As Secretary of the Treasury, Hamilton sent Congress a series of reports. Read them as one plan: each step solved a problem and created a political constituency for the national government.

| Report / Measure | Problem It Addressed | Hamilton's Solution | Who Objected, and Why |
|---|---|---|---|
| **Report on Public Credit (January 1790): funding** | The national debt (about \\$54 million) traded at a fraction of face value; the U.S. had no credit | Pay the debt **at full face value** ("at par") with new interest-bearing bonds | Many original holders, often soldiers and farmers, had sold their certificates cheaply to speculators. Madison proposed paying the original holders too; Congress rejected the idea |
| **Assumption of state debts (1790)** | States still owed about \\$25 million from the war | The federal government takes over (assumes) state debts | States that had already paid off much of their debt, such as **Virginia**, objected to paying again through federal taxes |
| **Compromise of 1790** | Assumption stalled in Congress | Jefferson, Madison and Hamilton agreed: southern votes for assumption, and the permanent capital would be on the **Potomac River** (Residence Act, July 1790) | A sectional bargain, the first of many over the location and purpose of federal power |
| **Bank of the United States (chartered February 1791)** | No national place to hold federal funds, make loans or issue a stable paper currency | A 20-year charter for a bank with \\$10 million in capital, one-fifth owned by the government | Jefferson and Madison said the Constitution gave Congress no power to charter a corporation |
| **Excise tax on whiskey (March 1791)** | Funding the assumed debt required more revenue than the tariff produced | A federal tax on distilled spirits | Western farmers, who turned grain into whiskey to ship it cheaply, saw it as an unfair tax on their livelihood |
| **Report on Manufactures (December 1791)** | A farming nation dependent on British manufactured goods | Protective tariffs and government bounties to build American industry | Mostly **not adopted** by Congress; agrarian opponents saw it as favoring merchants and investors |

### Worked Example: Why Funding at Par Made Enemies

1. A Continental soldier in 1783 is paid with a government certificate worth \\$100 at face value.
2. Needing cash in the hard 1780s, he sells it to a speculator for about \\$15–\\$25.
3. In 1790 Hamilton's plan redeems it at **\\$100** in new federal bonds. The speculator, often a merchant in a northern seaport, collects the gain.
4. **Hamilton's reasoning:** honoring every certificate at face value proves the government keeps its promises and ties wealthy creditors to the government's survival.
5. **The critics' reasoning:** the plan rewarded speculators, many of them friends of the administration, at the expense of the veterans who had earned the certificates.

> 🔑 **AP Connection:** For causation questions, link Hamilton's goals (public credit, a strong union, commercial growth) to the opposition they produced (agrarian, southern, and strict-constructionist). The opposition was about values as well as money: Jeffersonians feared a government run for creditors would become a corrupt imitation of Britain.
      `
    },
    {
      id: 'apushcon2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Hamilton insisted that the federal government pay its Revolutionary War debts at full face value mainly in order to',
            options: [
              'establish the credit of the United States and tie wealthy creditors to its success',
              'reward the soldiers who had originally received the certificates as pay',
              'reduce the size of the debt that the federal government would carry',
              'end the practice of paying for government spending with import duties'
            ],
            correctAnswer: 0,
            explanation: 'Hamilton wanted the United States to be trusted by lenders at home and abroad, and he expected bondholders to support a government that paid them. Many certificates had already been sold to speculators, so funding at par did not mainly help the original soldier-holders.'
          },
          {
            question: 'The Compromise of 1790 resolved the dispute over assumption of state debts by',
            options: [
              'requiring every state to repay its own debt before admission to the Union',
              'trading southern votes for the debt plan for a capital on the Potomac River',
              'splitting the debt equally among the states according to their population',
              'chartering a national bank that would buy the state debts at a discount'
            ],
            correctAnswer: 1,
            explanation: 'Jefferson, Madison and Hamilton agreed that enough southern members would accept assumption if the permanent capital were placed on the Potomac, which the Residence Act of 1790 did. The other options describe arrangements Congress never adopted.'
          }
        ]
      }
    },
    {
      id: 'apushcon2-bank',
      type: 'text' as const,
      content: `
## 📌 The Bank Debate and the Whiskey Rebellion

### The Constitutional Argument (February 1791)

When Congress passed the bank bill, Washington asked his cabinet whether it was constitutional. The two written opinions became the founding statements of two ways of reading the Constitution.

| | **Jefferson (strict construction)** | **Hamilton (loose or broad construction)** |
|---|---|---|
| **Key clause** | Tenth Amendment: powers not delegated are reserved to the states or the people | Necessary and Proper Clause (Article I, Section 8) |
| **Meaning of "necessary"** | Truly indispensable; without it the enumerated power could not be carried out | Useful or "conducive to" carrying out an enumerated power |
| **Enumerated powers cited** | None authorizes a corporation | Taxing, borrowing and regulating commerce, which a bank helps carry out |
| **Fear** | A government that can stretch its powers will have no limits | A government that cannot choose its means will fail at its tasks |
| **Outcome** | Washington signed the bill on **February 25, 1791** | Hamilton's view prevailed and was later upheld in *McCulloch v. Maryland* (1819) |

Part 3 reads both opinions closely.

### The Whiskey Rebellion (1794)

- Farmers in **western Pennsylvania** resisted the 1791 excise: they tarred and feathered collectors, and in July 1794 hundreds of armed men attacked the home of federal tax inspector John Neville.
- Washington called up about **13,000 militiamen** from four states and rode with them part of the way. The rebellion collapsed without a battle. Two men were convicted of treason; Washington **pardoned** both.

| Compare | Shays' Rebellion (1786–87) | Whiskey Rebellion (1794) |
|---|---|---|
| Grievance | Debt, state taxes and farm foreclosures in Massachusetts | A federal excise on whiskey in western Pennsylvania |
| Response | The national government could not act; Massachusetts used a privately funded militia | The federal government raised a large militia army under the president's authority |
| Significance | Exposed the weakness of the Articles | Showed the new federal government could enforce its laws |

> 💡 **Both sides drew lessons.** Federalists saw proof that firm national authority preserved order. Republicans saw an army marched against farmers to collect a tax that served creditors.
      `
    },
    {
      id: 'apushcon2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Which clause of Article I, Section 8 did Hamilton rely on to argue that a national bank was constitutional? (Answer with the clause name.)

2) In what year did the federal government suppress the Whiskey Rebellion?

3) Which river was chosen for the permanent national capital in the Compromise of 1790?

Use the exact historical term or year.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Necessary and Proper Clause', '1794', 'Potomac'],
        hint1: 'It is also called the "elastic clause": Congress may make laws "necessary and proper" for carrying out its powers.',
        hint2: 'The excise passed in 1791; the armed resistance peaked three years later.',
        hint3: 'The river that separates Maryland from Virginia.',
        explanation: 'Hamilton read "necessary and proper" broadly to justify the Bank. Washington led the militia against the Whiskey rebels in 1794. The Residence Act of 1790 placed the capital on the Potomac as part of the bargain over assumption.'
      }
    },
    {
      id: 'apushcon2-parties',
      type: 'text' as const,
      content: `
## How the First Party System Formed

The framers expected no parties; Madison's *Federalist No. 10* treated factions as a danger to control. Yet by 1796 two organized parties competed for office. The causes built on one another.

### Causation Chain

| Stage | Development | Effect on Politics |
|---|---|---|
| 1. Economic policy (1790–91) | Funding, assumption, the Bank and the excise | Divided commercial and creditor interests from agrarian and debtor interests, and North from South |
| 2. Constitutional theory (1791) | Loose versus strict construction over the Bank | Turned a policy fight into a dispute about the meaning of the Constitution |
| 3. Newspapers (1789–91) | John Fenno's *Gazette of the United States* (1789) backed the administration; Philip Freneau's *National Gazette* (1791), encouraged by Jefferson and Madison, attacked Hamilton | Gave each side a national voice and a shared vocabulary |
| 4. Foreign policy (1793–95) | Revolutionary France at war with Britain; the Jay Treaty (Part 4) | Federalists leaned toward Britain, Republicans toward France; voters took sides |
| 5. Local organization (1793–94) | Dozens of **Democratic-Republican Societies** formed; Washington blamed "self-created societies" for the Whiskey Rebellion | Federalists saw the societies as dangerous; Republicans saw them as citizens watching their government |

### The Two Parties by 1796

| | **Federalists** | **Democratic-Republicans** |
|---|---|---|
| Leaders | Hamilton, John Adams | Jefferson, Madison |
| Strongholds | New England; seaport merchants and creditors | The South and West; farmers; many urban artisans |
| Vision | A commercial nation with strong national credit and order | An agrarian republic of independent landowners |
| Feared | Disorder, mob rule, and the radicalism of the French Revolution | Concentrated power, corruption, and imitation of British monarchy |

> 🔑 **AP Connection:** A strong LEQ or SAQ explains party formation with **more than one cause**: economic interests, constitutional interpretation, and foreign policy. Avoid saying the parties formed only because Hamilton and Jefferson disliked each other; personal rivalry mattered less than the interests each man represented.
      `
    },
    {
      id: 'apushcon2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

> "The public debt has been made larger than it needed to be, and the system for funding it has spread a spirit of gambling in the public paper. Members of the legislature who hold that paper vote for the measures that enrich them, and this corrupt squadron now decides the voice of the legislature."
>
> — Adapted from Thomas Jefferson, letter to President George Washington, May 23, 1792
      `,
      exercise: {
        questions: [
          {
            question: 'The criticism in the excerpt was most directly a response to which of the following?',
            options: [
              "The Federalist push to suppress political criticism through the Sedition Act",
              "Hamilton's program to fund the national debt and create a national bank",
              "Washington's proclamation keeping the nation neutral in the European war",
              "The Anti-Federalist demand for a bill of rights before ratification"
            ],
            correctAnswer: 1,
            explanation: 'The complaint about members of Congress holding "public paper" and voting to raise its value targets funding, assumption and the Bank in 1790–91. The Sedition Act came later, in 1798, and neutrality was a foreign-policy issue.'
          },
          {
            question: 'Critics such as the author of the excerpt organized in the 1790s in ways that most directly contributed to',
            options: [
              'the rapid ratification of the Bill of Rights by the states',
              'the end of property qualifications for voting in most states',
              'the emergence of the Democratic-Republican Party',
              'the calling of a second constitutional convention'
            ],
            correctAnswer: 2,
            explanation: 'Opposition to Hamilton, voiced in newspapers and in Congress and later joined by the Democratic-Republican Societies, became the Democratic-Republican Party. Property qualifications fell mostly in the 1810s–1830s, and no second convention met.'
          }
        ]
      }
    }
  ]
}
