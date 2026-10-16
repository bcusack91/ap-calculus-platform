export const govConstitutionalFoundationsPart1Data = {
  topicSlug: 'gov-constitutional-foundations',
  sections: [
    {
      id: 'govconst1-intro',
      type: 'text' as const,
      content: `
# 🏛️ Constitutional Foundations

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| Enlightenment foundations (Locke, Montesquieu, Hobbes) |
| Foundational documents (Declaration, Articles, Constitution) |
| Five of the 13 required foundational documents |
| Federalists vs. Anti-Federalists |

> 🔑 Key idea: The U.S. Constitution (drafted summer 1787, ratified June 1788, effective March 4, 1789) was the product of a sustained Enlightenment debate over the proper sources of legitimate political authority and the proper structure of government to secure liberty without producing tyranny — a debate that continues to shape American constitutional argument today.
      `
    },
    {
      id: 'govconst1-content',
      type: 'text' as const,
      content: `
## Enlightenment Foundations

| Thinker | Key Idea | Constitutional Application |
|---|---|---|
| **John Locke** (*Second Treatise of Government*, 1689) | Natural rights (life, liberty, property); government rests on the consent of the governed; the right to alter or abolish a government that violates the social contract | Declaration of Independence ("Life, Liberty, and the pursuit of Happiness"); 9th Amendment (unenumerated rights); 5th and 14th Amendments (due process protection of life, liberty, and property) |
| **Baron de Montesquieu** (*The Spirit of the Laws*, 1748) | Separation of powers among legislative, executive, and judicial branches; checks and balances among them | Articles I (Congress), II (President), III (Courts); checks and balances throughout (veto, override, judicial review, advice and consent, impeachment) |
| **Thomas Hobbes** (*Leviathan*, 1651) | Without government there is a "state of nature" — a war of all against all in which life is "solitary, poor, nasty, brutish, and short"; people consent to a sovereign to provide order | Preamble ("insure domestic Tranquility, provide for the common defence") — government as the necessary alternative to anarchy |
| **Jean-Jacques Rousseau** (*The Social Contract*, 1762) | Popular sovereignty: legitimate political authority comes from the "general will" of the people | Preamble ("We the People"); Article I, § 2 (House directly elected); 17th Amendment (direct election of senators) |

## Foundational Documents

| Document | Date | Significance |
|---|---|---|
| **Declaration of Independence** | July 4, 1776 (Jefferson primary author) | Asserted natural-rights philosophy and the right of revolution; severed colonial ties to Great Britain; basis of subsequent American claims about the moral foundations of constitutional government |
| **Articles of Confederation** | Drafted 1777, ratified 1781 | First U.S. national constitution; created a "league of friendship" among sovereign states with a weak unicameral Congress (no executive, no national judiciary, no power to tax, no power to regulate commerce, no power to enforce laws); replaced by Constitution after Shays\' Rebellion (1786–87) demonstrated its weakness |
| **U.S. Constitution** | Drafted Philadelphia Convention May–Sept 1787; ratified June 21, 1788 (NH 9th state); effective March 4, 1789 | Created a federal republic with separated powers, checks and balances, enumerated and implied federal powers, and a stronger national government — designed to remedy the failures of the Articles |
| **Bill of Rights** | Drafted 1789, ratified Dec 15, 1791 | First 10 amendments; protections against federal government action (originally); negotiated by Anti-Federalists in exchange for ratification |
| **Federalist Papers** | Oct 1787 – Aug 1788 | 85 essays by Hamilton, Madison, and Jay (under "Publius") urging New York ratification; canonical interpretive source for the Constitution's original meaning |

## Five of the 13 Required AP Foundational Documents

| Document | Author/Date | Core Argument |
|---|---|---|
| **Declaration of Independence** | Jefferson, July 4, 1776 | Natural rights + consent of the governed + right of revolution against tyranny |
| **Articles of Confederation** | Drafted 1777, ratified 1781 | Confederation of sovereign states with a weak central government |
| **U.S. Constitution** | Drafted 1787, effective 1789 | Federal republic with separated powers, checks and balances, and enumerated federal authority |
| **Federalist No. 10** | Madison, Nov 22, 1787 | A large republic is the best protection against the "mischiefs of faction" because it dilutes factional influence and forces coalition-building |
| **Federalist No. 51** | Madison, Feb 6, 1788 | Separation of powers and checks and balances ("ambition must be made to counteract ambition") protect liberty: "If men were angels, no government would be necessary" |

## Federalists vs. Anti-Federalists

| Issue | Federalists | Anti-Federalists |
|---|---|---|
| Strength of central government | Strong national government needed (commerce, defense, debt) | Strong central government threatens liberty; states should retain primary authority |
| Representation | Indirect representation through elected officials filters popular passion | Direct representation by people who share constituents\' lives is essential |
| Bill of Rights | Unnecessary (federal government has only enumerated powers) and dangerous (might imply unenumerated powers are unprotected) | Essential — without explicit protection, federal government will trample individual rights |
| Key writers | Hamilton (NY), Madison (VA), Jay (NY) — *Federalist Papers* (1787-88) | "Brutus" (likely Robert Yates, NY), "Cato" (likely George Clinton, NY), Patrick Henry (VA), George Mason (VA), Mercy Otis Warren (MA) |
| AP-required document | *Federalist No. 10* and *No. 51* | *Brutus No. 1* (Oct 18, 1787) |
| Outcome | Constitution ratified June 1788 (with promise of Bill of Rights) | Won concession of Bill of Rights (ratified Dec 1791); many Anti-Federalist concerns absorbed into 9th and 10th Amendments |

> 🔑 Key takeaway: The Constitution is a compromise document — between large states and small states, between slave and free states, between Federalists and Anti-Federalists, and between competing Enlightenment theories of government. Reading it well requires holding all of these tensions in mind.
      `
    },
    {
      id: 'govconst1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Foundational Documents** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which best describes the central argument of *Federalist No. 10* (Madison, November 22, 1787)?',
            options: [
              "Factions are inevitable, so a large republic should control their effects by multiplying competing interests and filtering passions through elected representatives",
              'Factions can be eliminated by giving citizens the same opinions, so the new government should promote one shared civic creed across the states',
              "A small, homogeneous republic best protects liberty, so most power should remain with states whose citizens share common interests",
              "Separating powers among three branches lets ambition counteract ambition, so no single branch can dominate the others"
            ],
            correctAnswer: 0,
            explanation: 'Federalist No. 10 (Madison, Nov 22 1787) central argument: faction = greatest danger → large extended republic is the cure (size/diversity prevents national majority faction + representation filters passion + multi-faction competition forces coalition).'
          },
          {
            question: 'Which best describes the relationship between the Articles of Confederation (1781) and the U.S. Constitution (1789)?',
            options: [
              "The Articles' weak Congress could not tax or regulate commerce, and the Constitution replaced them with a stronger national government",
              'The Constitution was drafted as a set of amendments to the Articles, adding a president and federal courts but keeping the one-state, one-vote Congress',
              "The Articles created a strong central government that overrode the states, and the Constitution restored state sovereignty through the Tenth Amendment",
              "The Articles and the Constitution both gave Congress the power to tax, but only the Constitution allowed Congress to raise a standing army in peacetime"
            ],
            correctAnswer: 0,
            explanation: 'Articles (1781) → Constitution (1789): Articles = league of friendship + weak Congress (no tax/commerce/enforce/army/exec/judiciary); inadequate (post-Rev debt + interstate disputes + Shays 1786-87) → Philadelphia Convention May-Sept 1787 (called to revise; drafted new) → Constitution = federal republic + enumerated/implied powers + separated powers → ratified June 21 1788 (NH 9th); effective March 4 1789.'
          }
        ]
      }
    },
    {
      id: 'govconst1-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — name the foundational concept**`,
      exercise: {
        questions: [
          {
            prompt: 'The Enlightenment thinker whose Two Treatises of Government (1689) provided the natural-rights philosophy underlying the Declaration of Independence.',
            answer: 'John Locke',
            acceptableAnswers: ['John Locke', 'Locke'],
            hint: '"Life, liberty, and property" — Jefferson adapted to "Life, Liberty, and the pursuit of Happiness."'
          },
          {
            prompt: 'The 1786-87 Massachusetts uprising of indebted farmers that demonstrated the inadequacy of the Articles of Confederation and helped trigger the Philadelphia Convention.',
            answer: "Shays' Rebellion",
            acceptableAnswers: ["Shays' Rebellion", 'Shays Rebellion', "Shays's Rebellion", 'Shay\'s Rebellion'],
            hint: 'Led by Continental Army veteran Daniel Shays.'
          },
          {
            prompt: 'The Anti-Federalist essay (Oct 18, 1787) arguing that a large extended republic is incompatible with self-government — the AP-required Anti-Federalist document.',
            answer: 'Brutus No. 1',
            acceptableAnswers: ['Brutus No. 1', 'Brutus 1', 'Brutus No 1', 'Brutus Number 1'],
            hint: 'The author was likely New York judge Robert Yates.'
          }
        ]
      }
    },
    {
      id: 'govconst1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each Enlightenment thinker to the constitutional element they most influenced.**`,
      exercise: {
        dropdowns: [
          {
            label: 'The thinker whose Spirit of the Laws (1748) provided the doctrine of separation of powers among legislative, executive, and judicial branches: ___',
            options: ['Locke', 'Montesquieu', 'Hobbes', 'Rousseau']
          },
          {
            label: 'The thinker whose Second Treatise of Government (1689) provided natural-rights philosophy and the right of revolution: ___',
            options: ['Locke', 'Montesquieu', 'Hobbes', 'Rousseau']
          },
          {
            label: 'The thinker who described an anarchic "state of nature" without government, where life is "solitary, poor, nasty, brutish, and short": ___',
            options: ['Locke', 'Montesquieu', 'Hobbes', 'Rousseau']
          }
        ],
        correctAnswers: ['Montesquieu', 'Locke', 'Hobbes'],
        hint1: 'Articles I/II/III separation of powers traces to Montesquieu.',
        hint2: 'Declaration\'s natural rights traces to Locke.',
        hint3: 'Leviathan (1651) — the CED\'s illustrative example of the state of nature (Topic 1.1).',
        explanation: 'Locke = natural rights + consent of governed; Montesquieu = separation of powers; Hobbes = sovereign authority over state of nature; Rousseau = popular sovereignty + general will.'
      }
    },
    {
      id: 'govconst1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Argumentative Essay Setup**`,
      exercise: {
        questions: [
          {
            question: 'An AP argumentative essay asks: "Develop an argument that explains whether the Federalists or the Anti-Federalists were more correct about the dangers facing the new republic." Which response demonstrates the strongest use of foundational documents?',
            options: [
              "Brutus No. 1 warned that the Necessary and Proper and Supremacy Clauses would let national power swallow the states, a fear borne out by federal growth since the New Deal",
              'Federalist No. 10 proves the Anti-Federalists right, since Madison admitted that a large republic would let one national faction dominate the states',
              'The Anti-Federalists were more correct because the federal government today is much larger and spends far more money than it did in 1787',
              'Brutus No. 1 shows the Federalists were more correct, since Brutus argued that only a large and diverse republic could control factions and protect the rights of minorities in every state'
            ],
            correctAnswer: 0,
            explanation: 'Strong AP argumentative essay: takes a position (Anti-Federalists more prescient) + uses required foundational documents (Brutus No. 1 + Federalist No. 10) + provides specific evidence (Bill of Rights ratification + commerce-clause expansion + Great Society + factional polarization) + acknowledges counterargument (Federalists correct on union/defense/stability).'
          },
          {
            question: 'Which AP "complexity" claim best illuminates the Constitution as a compromise document?',
            options: [
              "The Constitution resolved disputes over representation and slavery through bargains that strengthened the union while also embedding slavery and overrepresenting small states",
              "The Constitution reflected a single shared vision among the delegates, which is why the Convention adopted the Virginia Plan without major changes",
              "The Constitution's Great Compromise gave large states control of both chambers, while small states received the presidency in exchange for ratifying",
              "The framers compromised only on slavery, leaving every question about representation and the scope of federal power to be settled later by the First Congress in the Bill of Rights"
                ],
            correctAnswer: 0,
            explanation: 'AP complexity: Constitution = product of multiple compromises — Connecticut (large vs. small states → bicameral) + Three-Fifths (slavery in representation/taxation) + slave-trade (1808 sunset) + Federalist/Anti-Federalist (Bill of Rights) + Electoral College → triumph of engineering AND document marked by slavery, sectional rivalry, elite skepticism.'
          }
        ]
      }
    }
  ]
}
