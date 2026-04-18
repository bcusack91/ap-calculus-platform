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
- State militia had to suppress it (federal government was too weak to act)
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
            question: 'Shays\' Rebellion (1786–87) was historically significant primarily because it:',
            options: [
              'Demonstrated that the Articles of Confederation created a national government too weak to maintain order',
              'Successfully overthrew the Massachusetts state government',
              'Led directly to the abolition of slavery in northern states',
              'Proved that state militias were more effective than a national army'
            ],
            correctAnswer: 0,
            explanation: 'Shays\' Rebellion shocked the political elite by exposing the national government\'s inability to respond to domestic unrest. The federal government under the Articles couldn\'t raise troops or funds. This crisis was a primary catalyst for calling the Constitutional Convention in Philadelphia in 1787.'
          },
          {
            question: 'Under the Articles of Confederation, which of the following was the MOST significant structural weakness?',
            options: [
              'Congress could not levy taxes, leaving the government unable to fund itself or pay war debts',
              'The president had too much executive power over the states',
              'The Supreme Court could override state laws without consent',
              'States were required to contribute equal numbers of soldiers to a standing army'
            ],
            correctAnswer: 0,
            explanation: 'The inability to tax was the Articles\' most crippling weakness. Without revenue, Congress couldn\'t pay Revolutionary War debts, fund a military, or conduct foreign policy effectively. There was no president and no Supreme Court under the Articles.'
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
| **Key Figures** | Hamilton, Madison, Jay | Patrick Henry, George Mason, Samuel Adams |
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
            question: 'The Three-Fifths Compromise is BEST understood as evidence that:',
            options: [
              'The Constitution\'s framers prioritized political union over moral consistency on the issue of slavery',
              'Northern delegates successfully limited slavery\'s expansion into new territories',
              'Southern delegates agreed to gradually abolish slavery in exchange for representation',
              'Enslaved people were granted partial citizenship and voting rights under the Constitution'
            ],
            correctAnswer: 0,
            explanation: 'The Three-Fifths Compromise was a political bargain that increased Southern representation in Congress without granting enslaved people any rights. It reveals the framers\' willingness to accommodate slavery to achieve ratification — a moral compromise that would haunt the nation until the Civil War.'
          },
          {
            question: 'Which of the following arguments from The Federalist Papers (No. 10) would Madison MOST likely use to defend the Constitution against Anti-Federalist concerns about tyranny?',
            options: [
              'A large republic with diverse interests makes it harder for any single faction to dominate, protecting minority rights',
              'The president should serve for life to ensure stable governance',
              'State governments should have no independent authority under the new system',
              'Direct democracy at the national level is the best safeguard against tyranny'
            ],
            correctAnswer: 0,
            explanation: 'In Federalist No. 10, Madison argued that a large republic (as opposed to a small one) would contain so many competing factions that no single group could gain enough power to tyrannize others. This was his most innovative argument against the Anti-Federalist claim that republics only work in small territories.'
          }
        ]
      }
    }
  ]
}
