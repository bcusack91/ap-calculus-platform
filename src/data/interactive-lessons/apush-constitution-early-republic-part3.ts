export const apushConstitutionEarlyRepublicPart3Data = {
  topicSlug: 'apush-constitution-early-republic',
  sections: [
    {
      id: 'apushcon3-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 The Constitution & Early Republic

**Part 3 of 7 — Two Visions in Their Own Words: Hamilton and Jefferson**

---

| Section |
|---------|
| 📖 How to Read a Founding-Era Argument |
| The Bank Opinions of 1791 |
| 📌 Factory or Farm: Two Economic Visions |
| Comparing the Visions |

> 🔑 **Key Concept:** Hamilton and Jefferson disagreed about the Constitution, the economy and the kind of citizens a republic needed. Reading their own words lets you **source** each document (HIPP) and **compare** the two visions with evidence, which is exactly what the DBQ and SAQs reward. (CED Topics 3.10–3.11; Key Concept 3.2.II)
      `
    },
    {
      id: 'apushcon3-method',
      type: 'text' as const,
      content: `
## 📖 How to Read a Founding-Era Argument

Eighteenth-century political writing uses long sentences, capital letters in odd places and older spellings (*labour*, *dependance*). Do not let the style slow you down. Use three passes:

| Pass | Question | What to Write in the Margin |
|---|---|---|
| **1. Claim** | What is the author arguing? | One sentence in modern English |
| **2. Reason** | What value or fear drives the claim? | Liberty, virtue, credit, order, independence, corruption |
| **3. HIPP** | Who wrote it, when, for whom, and why? | The situation that made the argument necessary |

### Vocabulary You Will Meet

| Term | Meaning in the 1790s |
|---|---|
| **Husbandman / cultivator** | A farmer who works his own land |
| **Virtue** | Willingness to put the public good ahead of private interest; republics were thought to depend on it |
| **Corruption** | Dependence on others (an employer, a patron, the government) that makes a citizen's vote or judgment for sale |
| **Enumerated powers** | Powers listed in the Constitution, mostly in Article I, Section 8 |
| **Reserved powers** | Powers kept by the states or the people under the Tenth Amendment |
| **Manufactures** | Goods made by hand or machine in workshops and mills |
      `
    },
    {
      id: 'apushcon3-bank',
      type: 'text' as const,
      content: `
## The Bank Opinions of 1791

In February 1791 Washington asked his cabinet whether the bank bill was constitutional. Read each excerpt with the three passes.

> **Source A. Thomas Jefferson, *Opinion on the Constitutionality of a National Bank*, February 15, 1791**
>
> "I consider the foundation of the Constitution as laid on this ground: That 'all powers not delegated to the United States, by the Constitution, nor prohibited by it to the States, are reserved to the States or to the people.' To take a single step beyond the boundaries thus specially drawn around the powers of Congress, is to take possession of a boundless field of power, no longer susceptible of any definition."
>
> "...the Constitution allows only the means which are 'necessary,' not those which are merely 'convenient' for effecting the enumerated powers."

**Pass 1 (claim):** Congress may do only what the Constitution lists, and a bank is not truly necessary to any listed power.
**Pass 2 (reason):** Fear of unlimited power. If "necessary" can mean "convenient," there is no limit at all.
**Pass 3 (HIPP):**
- **Historical situation:** Hamilton's funding and assumption plans had already passed; the Bank was the next step, and Virginians were alarmed.
- **Intended audience:** One reader, President Washington, who had to decide whether to sign or veto.
- **Purpose:** To persuade Washington to veto the bill on constitutional grounds.
- **Point of view:** A Virginia planter and Secretary of State who distrusted banks, paper money and northern financial interests.

> **Source B. Alexander Hamilton, *Opinion on the Constitutionality of a National Bank*, February 23, 1791**
>
> "It is certain that neither the grammatical nor popular sense of the term requires that construction. According to both, necessary often means no more than needful, requisite, incidental, useful, or conducive to."

**Pass 1 (claim):** "Necessary" in the Necessary and Proper Clause means useful or helpful, not indispensable.
**Pass 2 (reason):** A government charged with taxing, borrowing and regulating commerce must be free to choose reasonable means.
**Pass 3 (HIPP):**
- **Historical situation:** Written after Washington showed Hamilton the objections of Jefferson and Attorney General Edmund Randolph.
- **Intended audience:** Washington again; Hamilton is answering Jefferson point by point.
- **Purpose:** To save the Bank, the centerpiece of his financial program.
- **Point of view:** A New York lawyer and Treasury Secretary who believed national credit and energetic government secured independence.

### Why This Exchange Matters
- Washington signed the bill (February 25, 1791), siding with Hamilton.
- The two readings of "necessary" became the **strict versus loose construction** divide. Chief Justice Marshall adopted Hamilton's reasoning in *McCulloch v. Maryland* (1819).
- Neither opinion was published at the time. Their arguments reached the public through the party newspapers and debates in Congress.
      `
    },
    {
      id: 'apushcon3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Source Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Jefferson quotes the language of the Tenth Amendment in Source A in order to argue that',
            options: [
              'Congress should share its taxing power with the state legislatures',
              'only the states could charter a bank that served the whole nation',
              'Congress holds only the powers the Constitution actually grants it',
              'the Bill of Rights had not yet been ratified when the bank bill passed'
            ],
            correctAnswer: 2,
            explanation: 'Jefferson treats the reserved-powers principle as the foundation of the Constitution: anything not delegated to Congress belongs to the states or the people. He does not argue that a state bank should serve the nation or that taxing power should be shared.'
          },
          {
            question: 'Which of the following best explains the difference between Source A and Source B?',
            options: [
              'They disagree about how broadly to read "necessary" in the Constitution.',
              'They disagree about whether the national debt should be paid at full face value.',
              'They disagree about whether the president may veto a bill passed by Congress.',
              'They disagree about whether the states should keep their own militia forces.'
            ],
            correctAnswer: 0,
            explanation: 'Jefferson reads "necessary" as indispensable, while Hamilton reads it as "useful, or conducive to," so the dispute turns on one word in the Necessary and Proper Clause. Both men accepted the veto power, and funding was a separate argument.'
          }
        ]
      }
    },
    {
      id: 'apushcon3-economy',
      type: 'text' as const,
      content: `
## 📌 Factory or Farm: Two Economic Visions

> **Source C. Thomas Jefferson, *Notes on the State of Virginia*, Query XIX (written 1781–82; first printed 1785)**
>
> "Those who labour in the earth are the chosen people of God, if ever he had a chosen people, whose breasts he has made his peculiar deposit for substantial and genuine virtue... Dependance begets subservience and venality, suffocates the germ of virtue, and prepares fit tools for the designs of ambition... While we have land to labour then, let us never wish to see our citizens occupied at a work-bench, or twirling a distaff... let our work-shops remain in Europe."

**Claim:** America should stay a nation of farmers and buy its manufactured goods from Europe.
**Reason:** Republics survive only if citizens are independent. A farmer who owns land answers to no one; a wage worker depends on an employer, and dependence breeds "venality" (corruption).
**HIPP:**
- **Situation:** Written in answer to questions from a French diplomat, François Barbé-Marbois, during the Revolutionary War.
- **Audience:** At first a few educated Europeans and friends; Jefferson printed only a small number of copies in Paris.
- **Purpose:** To describe Virginia and defend its society, and to argue for an agrarian future.
- **Point of view:** A slaveholding Virginia planter. His ideal of the independent farmer left out the enslaved people who worked his own land, a contradiction worth naming in an essay.

> **Source D. Alexander Hamilton, *Report on the Subject of Manufactures*, December 5, 1791**
>
> "The expediency of encouraging manufactures in the United States, which was not long since deemed very questionable, appears at this time to be pretty generally admitted."
>
> "Not only the wealth; but the independence and security of a Country, appear to be materially connected with the prosperity of manufactures."
>
> "The extreme embarrassments of the United States during the late War, from an incapacity of supplying themselves, are still matter of keen recollection..."

**Claim:** The government should actively encourage manufacturing.
**Reason:** National independence and military security. During the Revolution, the army lacked uniforms, guns and powder because the country could not make its own.
**HIPP:**
- **Situation:** Requested by the House in 1790; delivered as the last of Hamilton's major reports, after funding and the Bank had passed.
- **Audience:** Congress, and through it merchants and investors.
- **Purpose:** To win tariffs and bounties for American industry. Congress adopted few of its proposals at the time.
- **Point of view:** A Treasury Secretary who had served as Washington's aide during the war's supply crises.

### The Word They Shared: Independence

Both men said they wanted an **independent** America, but they meant different things:

| | **Jefferson** | **Hamilton** |
|---|---|---|
| Independence of whom? | The individual citizen, free from any employer or creditor | The nation, free from reliance on foreign goods and credit |
| Main danger | Dependence and corruption at home | Weakness and dependence abroad |
| Role of government | Small; protect liberty and leave the economy to farmers | Active; build credit, banks and industry |
| Ideal citizen | The landowning farmer | The productive worker, merchant or investor |
      `
    },
    {
      id: 'apushcon3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Sourcing Match** 🔍

Choose the HIPP element each statement describes.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Jefferson wrote Notes on the State of Virginia as a slaveholding planter who idealized independent farmers. This statement describes the ___',
            options: ['point of view', 'intended audience', 'purpose', 'historical situation']
          },
          {
            label: 'Hamilton wrote his Bank opinion after Washington showed him the objections of Jefferson and Randolph. This statement describes the ___',
            options: ['point of view', 'intended audience', 'purpose', 'historical situation']
          },
          {
            label: 'The Report on Manufactures was written to win tariffs and bounties for American industry. This statement describes the ___',
            options: ['point of view', 'intended audience', 'purpose', 'historical situation']
          }
        ],
        correctAnswers: ['point of view', 'historical situation', 'purpose'],
        hint1: 'Who the author was and what he valued shapes how he sees the issue.',
        hint2: 'Ask what was happening just before the document was written.',
        hint3: 'Ask what the author wanted the document to achieve.',
        explanation: 'An author\'s background and values are point of view; the events that prompted a document are its historical situation; the result the author hoped for is its purpose.'
      }
    },
    {
      id: 'apushcon3-compare',
      type: 'text' as const,
      content: `
## Comparing the Visions

### Worked Example: A Comparison Paragraph

**Prompt:** Explain ONE similarity and ONE difference between Jefferson's and Hamilton's economic visions in the 1790s.

> **Similarity:** Both Jefferson and Hamilton framed their plans as ways to protect American independence after the Revolution. Jefferson wanted citizens who owned land and so depended on no one, while Hamilton wanted a nation that could supply its own army and economy, as the shortages of "the late War" had shown.
>
> **Difference:** Jefferson wanted the United States to remain agrarian and to "let our work-shops remain in Europe," because he believed wage labor bred dependence and corruption. Hamilton wanted the federal government to promote manufacturing with tariffs and bounties, because he believed industry would make the nation wealthy and secure.

**Why it works:** each sentence names a specific feature of each vision, uses short quotations as evidence, and explains *why* each man held his view.

### Change Over Time: The Visions After 1800

| Period | What Happened to the Visions |
|---|---|
| 1801–1809 | Jefferson as president cut taxes and the army, but bought Louisiana, a land base for his farmer republic |
| 1807–1815 | The Embargo and the War of 1812 cut off British goods; American textile mills grew; Republicans began to accept Hamiltonian measures |
| 1816 | A Republican Congress chartered the **Second Bank of the United States** and passed a protective tariff |
| 1820s–1840s | Henry Clay's **American System** (Bank, tariff, internal improvements) carried Hamilton's program forward |

> 🔑 **AP Connection:** This is a classic **complexity** move: the Republicans who attacked Hamilton in the 1790s adopted much of his program after the War of 1812 showed the costs of a weak economy.
      `
    },
    {
      id: 'apushcon3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

> "...the proportion which the aggregate of the other classes of citizens bears in any state to that of its husbandmen, is the proportion of its unsound to its healthy parts, and is a good-enough barometer whereby to measure its degree of corruption."
>
> — Thomas Jefferson, *Notes on the State of Virginia*, Query XIX, 1785
      `,
      exercise: {
        questions: [
          {
            question: 'The ideas expressed in the excerpt most directly reflect which of the following?',
            options: [
              'Federalist hopes that commerce and manufacturing would unite the states',
              'Republican belief that independent landowners sustain a virtuous republic',
              'Anti-Federalist fears that a distant national government would ignore farmers',
              'Loyalist warnings that independence would ruin American trade with Britain'
            ],
            correctAnswer: 1,
            explanation: 'Jefferson measures a state\'s health by the share of its people who farm, the core of the agrarian republican ideal. Federalists like Hamilton saw commerce and manufacturing as sources of strength, not corruption.'
          },
          {
            question: 'Which of the following developments in the early 1800s most directly challenged the vision in the excerpt?',
            options: [
              'The purchase of the Louisiana Territory from France in 1803',
              'The growth of New England textile mills during the trade embargo and the war',
              'The adoption of the Twelfth Amendment to separate presidential and vice-presidential votes',
              'The decision in Marbury v. Madison establishing judicial review'
            ],
            correctAnswer: 1,
            explanation: 'Cut off from British goods by the Embargo and the War of 1812, Americans built textile mills that employed wage workers, the "other classes" Jefferson distrusted. The Louisiana Purchase supported his agrarian vision by adding farmland.'
          }
        ]
      }
    }
  ]
}
