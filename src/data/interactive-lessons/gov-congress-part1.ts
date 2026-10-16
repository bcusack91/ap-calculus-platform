export const govCongressPart1Data = {
  topicSlug: 'gov-congress',
  sections: [
    {
      id: 'govcong1-intro',
      type: 'text' as const,
      content: `
# 🏛️ Congress

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| Bicameral structure: House vs. Senate |
| Article I powers: enumerated + implied + Necessary and Proper |
| Representation: trustee, delegate, politico models |
| Required foundational documents: Federalist 10, 51; Brutus 1 (plus Federalist 53, not required) |

> 🔑 Key idea: Congress is the FIRST branch of government in the Constitution (Article I) — the framers intended it to be the most powerful branch, with broad enumerated powers + the Necessary and Proper Clause + the power of the purse.
      `
    },
    {
      id: 'govcong1-content',
      type: 'text' as const,
      content: `
## Bicameral Structure: House vs. Senate

The framers designed the bicameral Congress as a Great Compromise (Connecticut Compromise) at the 1787 Constitutional Convention to reconcile large-state (Virginia Plan: representation by population) and small-state (New Jersey Plan: equal representation) demands.

| Feature | House of Representatives | Senate |
|---|---|---|
| Constitutional basis | Art I § 2 | Art I § 3 |
| Size | 435 members (capped 1929) | 100 (2 per state) |
| Term | 2 years | 6 years (1/3 elected every 2 years) |
| Constituency | District (~760,000 people) | Entire state |
| Minimum age | 25 | 30 |
| Citizenship | 7 years | 9 years |
| Originally elected by | Direct popular vote | State legislatures (until 17th Amendment 1913) |
| Speaker / presiding officer | Speaker of the House | Vice President (President of Senate) + President pro tempore |
| Distinctive powers | Originate revenue bills (Art I § 7); impeach federal officials (Art I § 2); elect President if no Electoral College majority | Confirm presidential nominations + treaties (Art II § 2); try impeachments (Art I § 3); elect VP if no Electoral College majority |
| Rules | Restrictive; Rules Committee controls floor; majoritarian | Permissive; unlimited debate (filibuster); supermajority for cloture (60 votes since 1975) |

## Article I Powers

| Category | Examples | Constitutional basis |
|---|---|---|
| **Enumerated** | Tax, borrow, regulate interstate + foreign commerce, coin money, establish post offices, declare war, raise armies, regulate naturalization | Art I § 8 cls. 1-17 |
| **Implied** | Bank of the United States, federal income tax (16th Amendment), federal minimum wage, federal civil rights statutes | Art I § 8 cl. 18 (Necessary and Proper) |
| **Power of the purse** | All federal spending requires congressional appropriation | Art I § 8 cl. 1 + Art I § 9 cl. 7 |
| **War powers** | Declare war (5x: 1812, 1846, 1898, 1917, 1941); fund military; regulate armed forces | Art I § 8 cls. 11-14 |
| **Oversight** | Investigate executive branch; subpoena witnesses; impeachment | Implied from legislative function (McGrain v. Daugherty 1927) |

## Models of Representation

| Model | Description | Used when |
|---|---|---|
| **Trustee** | Member exercises independent judgment based on what is best for the constituency or nation | Complex technical issues (e.g., monetary policy, foreign affairs) |
| **Delegate** | Member directly reflects the expressed preferences of constituents | Highly salient constituency issues (e.g., gun rights in rural districts) |
| **Politico** | Hybrid — trustee on low-salience issues, delegate on high-salience issues | Most members in practice |
| **Partisan** | Member follows party leadership and party platform | Polarized issues; modern era (~2010-present) |

## Foundational Documents

> ⚡ Federalist 10 (Madison): a large republic with many factions checks the tyranny of any single majority faction; representation 'refines and enlarges the public views'.

> ⚡ Federalist 51 (Madison): bicameralism is one of the structural checks that 'ambition must be made to counteract ambition'; the Senate's longer term + smaller size + state-based equal representation creates a counterweight to the more democratic House.

> ⚡ Federalist 53 (Madison — context only, NOT one of the 13 required documents): defends the 2-year House term as long enough for members to gain expertise but short enough to maintain accountability to constituents.

> ⚡ Brutus 1 (Anti-Federalist): warns that the Necessary and Proper Clause + Supremacy Clause + broad federal powers will allow Congress to swallow state authority and produce a consolidated government incompatible with republican liberty.

> 🔑 Key takeaway: The framers designed Congress as the most powerful branch (Article I) but with internal bicameral checks (House vs. Senate) and external checks (presidential veto, judicial review, federalism) to prevent legislative tyranny.
      `
    },
    {
      id: 'govcong1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Bicameral Design** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the constitutional design of bicameralism in Article I?",
            options: [
              "The Great Compromise created a House apportioned by population with two-year terms and a Senate with two members per state serving six-year terms",
              "The Virginia Plan created a House with equal state representation and a Senate apportioned by population, both serving four-year terms",
              "The New Jersey Plan created a single chamber, and the Senate was added later by the Seventeenth Amendment in 1913",
              "The Connecticut Compromise gave each state two House members and apportioned the Senate by free population"
            ],
            correctAnswer: 0,
            explanation: 'Bicameralism: Great Compromise reconciled Virginia Plan (population) + New Jersey Plan (equal). HOUSE: apportioned by population (435 since 1929), 2-yr terms, direct election from ~760K districts → democratic majoritarian. SENATE: equal (2/state = 100), 6-yr staggered, originally state legislatures (17th Amendment 1913 → direct) → deliberative counter-majoritarian. Senate unique powers: treaty ratification + confirmation + try impeachments.'
          },
          {
            question: "Which best describes the Necessary and Proper Clause (Art I § 8 cl. 18) and its role in expanding congressional authority?",
            options: [
              "It lets Congress pass laws needed to carry out its listed powers, a grant McCulloch v. Maryland read broadly as implied powers",
              "It limits Congress to the powers expressly listed in Article I, as the Court held in McCulloch v. Maryland when it struck down the national bank",
              "It lets the President issue any order needed to execute federal law, a power the Court later extended to Congress in Marbury v. Madison",
              "It reserves to the states all powers not necessary to the national government, as the Tenth Amendment was later written to confirm"
            ],
            correctAnswer: 0,
            explanation: 'Necessary and Proper Clause (Art I § 8 cl 18): "To make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers..." McCulloch v. Maryland (1819, Marshall): "Let the end be legitimate, let it be within the scope of the constitution, and all means which are appropriate...are constitutional." → IMPLIED POWERS doctrine. Foundation for: Bank of US, 16th Amendment income tax, federal minimum wage, federal civil rights statutes, modern federal regulatory authority.'
          }
        ]
      }
    },
    {
      id: 'govcong1-input',
      type: 'input-boxes' as const,
      content: `**Identification — name the constitutional provision**`,
      exercise: {
        questions: [
          {
            prompt: "The clause granting Congress power 'To make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers' (Article I § 8 cl. 18). Three words.",
            answer: 'Necessary and Proper Clause',
            acceptableAnswers: ['Necessary and Proper Clause', 'necessary and proper clause', 'Elastic Clause', 'elastic clause'],
            hint: 'Foundation of implied powers; also called the Elastic Clause; basis of McCulloch v. Maryland 1819.'
          },
          {
            prompt: "The 1787 Convention compromise that established bicameralism with population-based House + equal-state Senate. Two words.",
            answer: 'Great Compromise',
            acceptableAnswers: ['Great Compromise', 'great compromise', 'Connecticut Compromise', 'connecticut compromise'],
            hint: 'Also called the Connecticut Compromise; reconciled Virginia Plan + New Jersey Plan.'
          },
          {
            prompt: "The constitutional amendment establishing direct popular election of senators (replacing election by state legislatures). Two words.",
            answer: '17th Amendment',
            acceptableAnswers: ['17th Amendment', 'Seventeenth Amendment', 'seventeenth amendment', '17th amendment'],
            hint: 'Ratified 1913; Progressive-era reform; replaced Article I § 3.'
          }
        ]
      }
    },
    {
      id: 'govcong1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each chamber feature to its description.**`,
      exercise: {
        dropdowns: [
          {
            label: "House of Representatives constituency: ___",
            options: ['Congressional district (~760,000 people)', 'Entire state', 'Region of multiple states', 'Federal territory only']
          },
          {
            label: "Senate term length: ___",
            options: ['2 years', '4 years', '6 years', '8 years']
          },
          {
            label: "Body that confirms presidential nominations and ratifies treaties: ___",
            options: ['House of Representatives only', 'Senate only', 'Both chambers jointly', 'Supreme Court']
          }
        ],
        correctAnswers: ['Congressional district (~760,000 people)', '6 years', 'Senate only'],
        hint1: 'House districts equally populated under Wesberry v. Sanders (1964) "one person, one vote."',
        hint2: 'Senators elected for 6 years with 1/3 of the body up for election every 2 years.',
        hint3: 'Article II § 2 — "advice and consent" of the Senate.'
      }
    },
    {
      id: 'govcong1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "AP applied prompt: 'Explain how bicameralism reflects both the framers' anti-tyranny goals and their compromise between large and small states.' Best answer:",
            options: [
              "Two differently chosen chambers make it harder for one faction to control lawmaking, and pairing a population-based House with an equal Senate settled the state-size dispute",
              "A second chamber lets the President choose one house of Congress, and giving large states more senators settled the state-size dispute",
              "Two chambers were needed because the Articles of Confederation already required them, and small states agreed only after large states received control of the Senate as well as the House",
              "Bicameralism speeds lawmaking against tyranny, since either chamber may pass a bill alone when the other is in recess"
            ],
            correctAnswer: 0,
            explanation: 'Bicameralism = anti-tyranny + large/small state compromise. ANTI-TYRANNY: two separately constituted chambers reduce single-faction control (Federalist 51 "ambition counteract ambition"); different terms (2 vs 6), constituencies (district vs state), selection modes (popular vs legislative) → broad deliberative support. COMPROMISE: 1787 Convention Virginia Plan (population) vs. NJ Plan (equal); Connecticut Compromise gave House to population + Senate to equal — without which Constitution would not have ratified.'
          },
          {
            question: "Which best explains the practical significance of the differences between House and Senate rules?",
            options: [
              "House rules let a disciplined majority move bills quickly, while Senate rules such as the filibuster give individual senators and the minority far more leverage",
              "House rules let any member delay a bill indefinitely, while Senate rules let the majority leader pass bills by simple majority without debate",
              "House rules and Senate rules are set by the Constitution, so neither chamber can change how it debates or amends legislation without an amendment approved by the states",
              "Senate rules let the Speaker control all committee assignments, while House rules require sixty votes to end debate"
            ],
            correctAnswer: 0,
            explanation: 'House RESTRICTIVE: Rules Committee controls floor (time limits + amendment rules — closed prohibits, open permits); Speaker agenda control; majority party controls → MAJORITARIAN simple majority. Senate PERMISSIVE: filibuster (Thurmond 1957 24h 18m); unlimited debate absent cloture (60 votes since 1975); free amendments (riders); weaker Majority Leader → COUNTER-MAJORITARIAN effectively 60 votes giving minority power.'
          }
        ]
      }
    }
  ]
}
