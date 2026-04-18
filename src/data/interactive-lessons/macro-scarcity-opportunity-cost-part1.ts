export const macroScarcityOpportunityCostPart1Data = {
  topicSlug: 'macro-scarcity-opportunity-cost',
  sections: [
    {id:'macroscar1-intro',type:'text' as const,content:`
# 📊 Scarcity & Opportunity Cost

**Part 1 of 7 — The Fundamental Economic Problem**

---

| Section |
|---------|
| 📖 Scarcity & Choice |
| Opportunity Cost |
| Production Possibilities Curve (PPC) |
| Efficiency, Growth & Trade |

> 🔑 **Key Concept:** Economics is the study of how societies allocate **scarce resources** to satisfy **unlimited wants**. Every choice has an **opportunity cost** — the value of the next best alternative you give up.
`},
    {id:'macroscar1-scarcity',type:'text' as const,content:`
## 📖 Scarcity & Choice

### The Fundamental Economic Problem
- **Scarcity:** Resources (land, labor, capital, entrepreneurship) are **limited**, but human wants are **unlimited**
- Because of scarcity, every society must answer three fundamental questions:
  1. **What** to produce?
  2. **How** to produce it?
  3. **For whom** to produce it?

### Factors of Production

| Factor | Definition | Payment |
|---|---|---|
| **Land** | Natural resources (water, minerals, timber) | Rent |
| **Labor** | Human effort (physical and intellectual) | Wages |
| **Capital** | Tools, machinery, factories, technology (NOT money) | Interest |
| **Entrepreneurship** | Risk-taking; combining other factors to create goods/services | Profit |

### Opportunity Cost
- **Definition:** The value of the **next best alternative** you give up when making a choice
- NOT just the monetary cost — includes time, enjoyment, and other benefits foregone
- **Example:** If you spend an hour studying economics instead of working at a job that pays $15/hour, the opportunity cost of studying is $15 (plus whatever else you could have done)
- **Key Rule:** Opportunity cost is always measured in terms of **one specific alternative**, not all alternatives combined

> 🔑 **AP Connection:** The AP exam ALWAYS tests opportunity cost in the context of the Production Possibilities Curve. Be ready to calculate opportunity cost from PPC data tables and graphs.
`},
    {id:'macroscar1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'A student has 3 hours free. She can study for an economics exam, work a shift that pays $45, or watch a movie she values at $20. She chooses to study. What is the opportunity cost of studying?',options:['$65 — the combined value of working ($45) and the movie ($20) she gave up','$45 — the value of working, which is the next best alternative she gave up','$20 — the value of the movie, which is the least valuable alternative she gave up','$0 — studying has no opportunity cost because it will improve her grade on the exam'],correctAnswer:1,explanation:'Opportunity cost is the value of the NEXT BEST alternative — not all alternatives combined. Since working ($45) is more valuable than the movie ($20), working is the next best alternative. Therefore, the opportunity cost of studying is $45. This is a common AP exam trap — students often incorrectly add all foregone alternatives together.'},
      {question:'Which of the following is considered "capital" as a factor of production in economics?',options:['Dollar bills and coins held in a bank vault or cash register','Factory machinery, computers, and tools used to produce goods and services','Stocks and bonds held in a retirement investment portfolio','A loan from a bank used to start a new restaurant business'],correctAnswer:1,explanation:'In economics, "capital" refers to physical capital — the tools, equipment, machinery, factories, and technology used in production. This is different from the everyday use of "capital" meaning money or financial assets. Money (financial capital) is NOT a factor of production — it\'s a medium of exchange used to acquire factors of production. This distinction is frequently tested on the AP exam.'}
    ]}},
    {id:'macroscar1-ppc',type:'text' as const,content:`
## 📖 Production Possibilities Curve (PPC)

The PPC (also called PPF — Production Possibilities Frontier) shows the **maximum combinations** of two goods a society can produce given its resources and technology.

### Key Features

| Feature | Meaning |
|---|---|
| **Points ON the curve** | Efficient — using all resources fully |
| **Points INSIDE the curve** | Inefficient — resources unused or misallocated (e.g., unemployment) |
| **Points OUTSIDE the curve** | Unattainable with current resources and technology |
| **Bowed-out shape** | Reflects **increasing opportunity cost** — resources are not perfectly interchangeable |
| **Straight line** | Constant opportunity cost — resources are perfectly interchangeable |

### Calculating Opportunity Cost from a PPC

| | Good A | Good B |
|---|---|---|
| **Point X** | 100 | 0 |
| **Point Y** | 80 | 30 |

- Moving from X to Y: Give up 20A to get 30B
- **Opportunity cost of 1B** = 20A ÷ 30B = **2/3 A**
- **Opportunity cost of 1A** = 30B ÷ 20A = **3/2 B** (always the reciprocal!)

### Shifting the PPC
| Shift | Cause |
|---|---|
| **Outward (growth)** | More resources, better technology, higher productivity |
| **Inward (decline)** | Resource depletion, natural disaster, war |
| **One good only** | Technology improvement in just that sector (asymmetric shift) |

> 🔑 **AP Connection:** The PPC is one of the **most tested graphs** on the AP exam. You MUST be able to: (1) calculate opportunity cost between two points, (2) identify efficient/inefficient/unattainable points, (3) explain why the curve shifts.
`},
    {id:'macroscar1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'On a production possibilities curve, a point located INSIDE the curve represents:',options:['The most efficient combination of goods that fully utilizes all available resources and technology','An output combination that is currently unattainable given the society\'s resources and technology','An inefficient output combination — the economy is not fully utilizing its available resources (e.g., there is unemployment or idle factories)','A point of economic growth where the economy has expanded beyond its previous production capacity'],correctAnswer:2,explanation:'Points inside the PPC represent inefficiency — the economy could produce more of both goods by better utilizing its resources. The most common real-world reason for operating inside the PPC is unemployment or underemployment, where labor and capital are sitting idle. Points ON the curve are efficient (all resources fully used); points OUTSIDE are unattainable without growth.'},
      {question:'If a country can produce either 200 bushels of wheat or 100 barrels of oil using all its resources, what is the opportunity cost of producing 1 barrel of oil?',options:['100 bushels of wheat — the total wheat production that must be entirely sacrificed','2 bushels of wheat — for each barrel of oil produced, 2 bushels of wheat must be given up','0.5 bushels of wheat — oil is more valuable, so its opportunity cost is lower','200 bushels of wheat — the opportunity cost equals the maximum possible wheat production'],correctAnswer:1,explanation:'Opportunity cost = what you give up ÷ what you get. Moving from all wheat to all oil: give up 200 wheat to get 100 oil. \nOC of 1 oil = 200 wheat ÷ 100 oil = **2 wheat per oil**. \nConversely, OC of 1 wheat = 100 oil ÷ 200 wheat = 0.5 oil per wheat (the reciprocal). Remember: opportunity costs between two goods are always reciprocals of each other.'}
    ]}}
  ]
};
