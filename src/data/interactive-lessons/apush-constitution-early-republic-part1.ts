export const apushConstitutionEarlyRepublicPart1Data = {
  topicSlug: 'apush-constitution-early-republic',
  sections: [
    {
      id: 'apushcon1-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 The Constitution & Early Republic

**Part 1 of 7 — From Articles of Confederation to the Constitution**

---

| Section |
|---------|
| 📖 Weaknesses of the Articles of Confederation |
| The Constitutional Convention (1787) |
| Key Compromises |
| 📌 Federalists vs. Anti-Federalists |
| The Bill of Rights |

> 🔑 **Key Concept:** The AP exam heavily tests the **debates** at the Constitutional Convention — especially the compromises over representation, slavery, and federal vs. state power.
      `
    },
    {
      id: 'apushcon1-articles',
      type: 'text' as const,
      content: `
## 📖 The Articles of Confederation (1781–1789)

America's first constitution, the **Articles of Confederation**, created a deliberately weak central government:

### Structure & Weaknesses

| Feature | Under the Articles | Problem It Caused |
|---------|-------------------|-------------------|
| **Legislature** | Unicameral Congress; each state = 1 vote | Large states underrepresented |
| **Executive** | No president or executive branch | No one to enforce laws |
| **Judiciary** | No national court system | No way to resolve interstate disputes |
| **Taxation** | Congress could NOT levy taxes | Government couldn't fund itself; relied on state contributions |
| **Amendments** | Required unanimous consent of 13 states | Virtually impossible to reform |
| **Trade** | No power to regulate interstate commerce | Trade wars between states |
| **Military** | No standing army; relied on state militias | Couldn't respond to threats effectively |

### Shays' Rebellion (1786–87)
- Massachusetts farmers, crushed by debt and taxes, rebelled under **Daniel Shays**
- A Massachusetts militia, paid for largely by Boston merchants, had to suppress it (the national government was too weak to act)
- **Significance:** Exposed the fatal weakness of the Articles and convinced leaders like Washington, Hamilton, and Madison that a stronger national government was essential
- Directly spurred the call for the **Constitutional Convention**
      `
    },
    {
      id: 'apushcon1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Shays\' Rebellion (1786–87) strengthened the movement for a new constitution chiefly because it',
            options: [
              'showed the national government was too weak to keep order',
              'proved that a state militia could not put down an armed uprising',
              'forced Massachusetts to cancel the debts of its western farmers',
              'persuaded the states to let Congress collect a tax on imports'
            ],
            correctAnswer: 0,
            explanation: 'Congress under the Articles had no money and no army to answer the uprising, and Massachusetts had to raise a militia paid for largely by Boston merchants. That failure convinced leaders such as Washington and Madison that a stronger national government was needed. A proposed federal import tax never won the unanimous approval of the states.'
          },
          {
            question: 'Which of the following was the most serious weakness of the national government under the Articles of Confederation?',
            options: [
              'The president could veto acts of Congress with no override',
              'Congress could not tax and had to request money from the states',
              'The national courts could strike down laws passed by the states',
              'Each state\'s votes in Congress were weighted by its population'
            ],
            correctAnswer: 1,
            explanation: 'Without a taxing power, Congress could not pay the war debt, fund an army or conduct a credible foreign policy. The Articles had no president and no national courts, and each state had one vote.'
          }
        ]
      }
    },
    {
      id: 'apushcon1-convention',
      type: 'text' as const,
      content: `
## The Constitutional Convention (May–September 1787)

Fifty-five delegates met in Philadelphia. Key figures: **James Madison** ("Father of the Constitution"), **Alexander Hamilton**, **Benjamin Franklin**, **George Washington** (presided).

### The Great Compromises

| Issue | Position A | Position B | Compromise |
|-------|-----------|-----------|------------|
| **Representation** | Virginia Plan — bicameral; representation by population (favored large states) | New Jersey Plan — unicameral; equal representation (favored small states) | **Great (Connecticut) Compromise** — bicameral: Senate (equal) + House (by population) |
| **Slavery & Representation** | Southern states wanted enslaved people counted for representation | Northern states objected to counting people who couldn't vote | **Three-Fifths Compromise** — each enslaved person counted as 3/5 of a person for representation and taxation |
| **Slave Trade** | Some delegates wanted immediate abolition | Southern states threatened to leave the convention | Congress could not ban the slave trade until **1808** |
| **Executive Power** | Some wanted Congress to elect the president | Others wanted direct popular election | **Electoral College** — electors chosen by states vote for president |

### Federalists vs. Anti-Federalists

| | Federalists | Anti-Federalists |
|---|---|---|
| **Key Figures** | Hamilton, Madison, Jay | Patrick Henry, George Mason, Richard Henry Lee |
| **Position** | Supported ratification of the Constitution | Opposed ratification without a Bill of Rights |
| **Key Arguments** | Strong central government needed; checks & balances prevent tyranny; *The Federalist Papers* (85 essays) | Constitution gave too much power to federal government; lacked protections for individual liberties |
| **Result** | Won ratification | Secured the promise of a **Bill of Rights** (first 10 amendments, ratified 1791) |
      `
    },
    {
      id: 'apushcon1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What compromise at the Constitutional Convention created a bicameral legislature with a Senate (equal representation) and House (proportional representation)?

2) What agreement counted each enslaved person as 3/5 of a person for purposes of representation and taxation?

3) Who is known as the "Father of the Constitution" for his central role at the Convention?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Great Compromise', 'Three-Fifths Compromise', 'James Madison'],
        hint1: 'Also called the Connecticut Compromise',
        hint2: 'A fraction — ___ - ___ Compromise',
        hint3: 'Later became the 4th President of the United States',
        explanation: 'The Great (Connecticut) Compromise resolved the large-state vs. small-state debate over representation. The Three-Fifths Compromise was a morally repugnant deal that increased Southern political power. James Madison arrived with the Virginia Plan and took detailed notes throughout the Convention.'
      }
    },
    {
      id: 'apushcon1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The collection of 85 essays arguing for ratification of the Constitution was called ___',
            options: ['The Federalist Papers', 'Common Sense', 'The Declaration of Independence', 'The Articles of Confederation']
          },
          {
            label: 'The group that opposed ratification without a Bill of Rights was the ___',
            options: ['Anti-Federalists', 'Federalists', 'Republicans', 'Whigs']
          },
          {
            label: 'The system in which electors (not the general public directly) choose the president is the ___',
            options: ['Electoral College', 'Popular Vote', 'Congressional Caucus', 'Primary System']
          }
        ],
        correctAnswers: ['The Federalist Papers', 'Anti-Federalists', 'Electoral College'],
        hint1: 'Written by Hamilton, Madison, and Jay under the pen name "Publius"',
        hint2: 'Led by Patrick Henry and George Mason',
        hint3: 'A compromise between direct election and congressional selection',
        explanation: 'The Federalist Papers (1787–88) were written by Hamilton, Madison, and Jay to persuade New York to ratify. Anti-Federalists like Patrick Henry feared federal tyranny and demanded a Bill of Rights. The Electoral College was a compromise between popular election and congressional selection of the president.'
      }
    },
    {
      id: 'apushcon1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Three-Fifths Compromise is best understood as evidence that the framers',
            options: [
              'accepted protections for slavery to keep the southern states in the Union',
              'agreed to keep slavery out of the territories west of the Appalachians',
              'planned for the gradual abolition of slavery after the year 1808',
              'gave enslaved people a partial form of citizenship and voting rights'
            ],
            correctAnswer: 0,
            explanation: 'Counting three-fifths of enslaved people increased southern seats in the House without giving enslaved people any rights. Delegates accepted it, along with the slave-trade and fugitive slave clauses, as the price of a union that included the South.'
          },
          {
            question: 'In Federalist No. 10, Madison answered the Anti-Federalist claim that a large republic would fall into tyranny by arguing that',
            options: [
              'the states would keep enough power to block abuses by the national government',
              'a bill of rights would protect minorities from oppression by the majority',
              'a nation of great size has so many factions that none of them can dominate',
              'direct votes by all citizens on national laws would check corrupt officials'
            ],
            correctAnswer: 2,
            explanation: 'Madison argued that a large republic contains so many competing interests that a single faction would find it hard to form a majority and oppress others. He did not rely on a bill of rights or direct democracy, which he distrusted.'
          }
        ]
      }
    }
  ]
}
