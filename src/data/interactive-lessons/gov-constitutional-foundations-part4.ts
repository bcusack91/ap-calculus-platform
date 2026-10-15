export const govConstitutionalFoundationsPart4Data = {
  topicSlug: 'gov-constitutional-foundations',
  sections: [
    {
      id: 'govconst4-intro',
      type: 'text' as const,
      content: `
# 🏛️ Constitutional Foundations

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| Federalism: layered sovereignty |
| Bill of Rights ↔ 14th Amendment ↔ incorporation |
| Implied powers (McCulloch) |
| Judicial review (Marbury) and its limits |

> 🔑 Key idea: The Constitution operates not as a set of isolated rules but as a network of interacting doctrines — federalism, incorporation, implied powers, and judicial review continuously redistribute authority among branches and levels of government.
      `
    },
    {
      id: 'govconst4-content',
      type: 'text' as const,
      content: `
## Federalism: Layered Sovereignty

| Power Type | Definition | Examples |
|---|---|---|
| **Enumerated (delegated) federal** | Article I, § 8 explicitly granted | Tax, borrow, regulate interstate commerce, coin money, declare war, raise armies, post offices, copyrights/patents, federal courts |
| **Implied federal** | Necessary and Proper Clause (Art. I, § 8, cl. 18) | Bank of the United States (*McCulloch v. Maryland*, 1819); federal minimum wage; federal civil-rights statutes (Civil Rights Act 1964 commerce-clause basis) |
| **Inherent federal** | Sovereignty doctrines | Recognize foreign nations; acquire territory; control immigration |
| **Reserved state** (10th Amendment) | "Powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people" | Police power (health, safety, morals, welfare); education; family law; intrastate commerce; most criminal law; election administration |
| **Concurrent** | Held by both | Tax; build roads; charter banks; establish courts |
| **Prohibited (state)** | Article I, § 10 | Coin money; enter treaties; impair contracts; tax imports/exports without congressional consent |
| **Prohibited (federal)** | Bill of Rights + Art. I, § 9 | Suspend habeas corpus (except in cases of rebellion or invasion); pass bills of attainder or ex post facto laws; grant titles of nobility; tax exports |

## Bill of Rights ↔ 14th Amendment ↔ Incorporation Doctrine

| Stage | Doctrine | Cases |
|---|---|---|
| Pre-14th | Bill of Rights restricts only federal action | *Barron v. Baltimore* (1833) — 5th Amendment Takings Clause does not apply to states |
| 14th Amendment ratified (1868) | "No State shall... deprive any person of life, liberty, or property, without due process of law" | New constitutional basis for applying federal protections to states |
| Selective incorporation begins | Court applies Bill of Rights provisions to states one at a time through 14th Amendment Due Process Clause | *Gitlow v. New York* (1925) — 1st Amendment free speech; *Mapp v. Ohio* (1961) — 4th Amendment exclusionary rule; *Gideon v. Wainwright* (1963) — 6th Amendment right to counsel; *Miranda v. Arizona* (1966) — 5th Amendment self-incrimination warnings; *McDonald v. City of Chicago* (2010) — 2nd Amendment; *Timbs v. Indiana* (2019) — 8th Amendment Excessive Fines Clause |
| Not yet fully incorporated | A handful of Bill of Rights provisions still don\'t apply to states | 3rd Amendment quartering; 5th Amendment grand-jury indictment; 7th Amendment civil-jury right |

## Implied Powers — *McCulloch v. Maryland* (1819)

| Question Presented | Court\'s Holding |
|---|---|
| Did Congress have constitutional authority to charter the Second Bank of the United States, even though the Constitution does not enumerate a power to create a bank? | YES — under the Necessary and Proper Clause, Congress may employ "all means which are appropriate, which are plainly adapted" to its enumerated powers (taxing, borrowing, currency); the bank is a constitutional means to those constitutional ends |
| Could Maryland tax the Bank? | NO — under the Supremacy Clause (Art. VI), states cannot tax federal instrumentalities; "the power to tax is the power to destroy" (Marshall) |

**Long-term consequences:**
- Established the doctrine of implied federal powers — the constitutional foundation for the modern administrative state
- Established federal supremacy over conflicting state action involving federal authority
- Provided the doctrinal basis for the New Deal, the Civil Rights Act of 1964, the Affordable Care Act\'s individual mandate (under taxing power per *NFIB v. Sebelius*, 2012), and most modern federal regulatory activity

## Judicial Review and Its Limits — *Marbury v. Madison* (1803)

| Element | Detail |
|---|---|
| Background | After Federalist defeat in 1800 election, lame-duck President John Adams appointed William Marbury and other "midnight judges"; new Secretary of State James Madison refused to deliver the commissions; Marbury sued for a writ of mandamus directly in the Supreme Court under § 13 of the Judiciary Act of 1789 |
| Holding | Marbury had a legal right to his commission, AND mandamus would be the proper remedy, BUT § 13 of the Judiciary Act of 1789 unconstitutionally expanded the Court\'s original jurisdiction beyond what Article III permits, so the Court could not grant the writ |
| Doctrine | "It is emphatically the province and duty of the judicial department to say what the law is. Those who apply the rule to particular cases, must of necessity expound and interpret that rule." |
| Why politically brilliant | Marshall avoided a confrontation with Jefferson (who would have ignored a mandamus order) while establishing the larger judicial-review power against Congress |

**Limits of judicial review:**
- Article III "case or controversy" requirement — courts decide only actual disputes, not abstract questions
- Standing doctrine — plaintiffs must show concrete particularized injury caused by the defendant and redressable by the court
- Political question doctrine — some questions are constitutionally committed to the political branches (e.g., impeachment trials per *Nixon v. United States*, 1993; foreign affairs)
- Mootness — courts will not decide cases where the controversy has dissolved
- Ripeness — courts will not decide cases brought before injury has occurred
- Constitutional amendment — the people can override the Court (e.g., 11th, 14th § 1, 16th, 26th Amendments)

> 🔑 Key takeaway: Constitutional law is a network of interacting doctrines — federalism allocates power between levels, incorporation extends federal protections to states via the 14th Amendment, implied powers expand federal authority beyond explicit text, and judicial review enforces constitutional limits while remaining limited by justiciability doctrines and the amendment process.
      `
    },
    {
      id: 'govconst4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Federalism and Incorporation** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which best describes the doctrine of selective incorporation?',
            options: [
              "The Court has applied most Bill of Rights protections to the states one at a time through the 14th Amendment's Due Process Clause, as in Gideon v. Wainwright",
              'The 14th Amendment applied every Bill of Rights protection to the states at once in 1868, as the Court confirmed in Barron v. Baltimore',
              'Congress decides which rights bind the states by passing incorporation statutes under the Necessary and Proper Clause',
              "States choose which federal rights to adopt in their own constitutions, as the Tenth Amendment reserves those choices to them"
            ],
            correctAnswer: 0,
            explanation: 'Selective incorporation: most Bill of Rights → states via 14th Amendment Due Process (one at a time, 20th-21stC). Examples: Gitlow 1925 (1st speech), Mapp 1961 (4th exclusionary rule), Gideon 1963 (6th counsel), Miranda 1966 (5th self-incrim warnings), McDonald 2010 (2nd), Timbs 2019 (8th excessive fines). Unincorporated: 3rd quartering, 5th grand jury, 7th civil jury.'
          },
          {
            question: 'Which best describes the holding and significance of *McCulloch v. Maryland* (1819)?',
            options: [
              "Congress could charter a national bank under the Necessary and Proper Clause, and Maryland could not tax it under the Supremacy Clause",
              'Congress lacked power to charter a national bank because banking is not an enumerated power, so the Second Bank was declared unconstitutional',
              "Maryland could tax the national bank under the Tenth Amendment, since the power to tax is reserved to the states and shared concurrently",
              'The Court established judicial review over state laws and held that Congress may regulate any activity that affects interstate commerce'
            ],
            correctAnswer: 0,
            explanation: 'McCulloch v. Maryland (1819, Marshall): (1) Congress had implied power to charter Bank under Necessary and Proper Clause ("all means which are appropriate, which are plainly adapted"); (2) Maryland cannot tax federal instrumentalities under Supremacy Clause ("power to tax is power to destroy"). Foundation for implied federal powers + administrative state + New Deal + CRA 1964 + ACA.'
          }
        ]
      }
    },
    {
      id: 'govconst4-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — name the constitutional doctrine**`,
      exercise: {
        questions: [
          {
            prompt: 'The Article I, § 8, clause 18 grant of authority for Congress to make laws "necessary and proper" to its enumerated powers — the constitutional basis for implied federal powers.',
            answer: 'Necessary and Proper Clause',
            acceptableAnswers: ['Necessary and Proper Clause', 'Elastic Clause', 'Necessary and Proper'],
            hint: 'Sometimes called the Elastic Clause; central to McCulloch v. Maryland (1819).'
          },
          {
            prompt: 'The Article VI clause that makes federal law "the supreme Law of the Land" overriding conflicting state law.',
            answer: 'Supremacy Clause',
            acceptableAnswers: ['Supremacy Clause'],
            hint: 'Article VI, clause 2; central to McCulloch (1819) and federal preemption doctrine.'
          },
          {
            prompt: 'The 14th Amendment clause through which most Bill of Rights provisions have been applied to state governments via selective incorporation.',
            answer: 'Due Process Clause',
            acceptableAnswers: ['Due Process Clause', '14th Amendment Due Process Clause', 'Fourteenth Amendment Due Process Clause'],
            hint: '"No State shall deprive any person of life, liberty, or property, without due process of law."'
          }
        ]
      }
    },
    {
      id: 'govconst4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each power to the correct federalism category.**`,
      exercise: {
        dropdowns: [
          {
            label: 'The power to coin money, declare war, regulate interstate commerce, and operate post offices: ___',
            options: ['Enumerated federal', 'Reserved state', 'Concurrent', 'Prohibited to states']
          },
          {
            label: 'The police power (health, safety, morals, welfare), education, family law, and most criminal law: ___',
            options: ['Enumerated federal', 'Reserved state', 'Concurrent', 'Prohibited to states']
          },
          {
            label: 'The power to tax, build roads, charter banks, and establish courts: ___',
            options: ['Enumerated federal', 'Reserved state', 'Concurrent', 'Prohibited to states']
          }
        ],
        correctAnswers: ['Enumerated federal', 'Reserved state', 'Concurrent'],
        hint1: 'Coin money + declare war + interstate commerce + post offices are explicit Article I § 8 grants.',
        hint2: 'Police power + education + family + criminal law fall under the 10th Amendment\'s reserved-powers clause.',
        hint3: 'Tax + build roads + charter banks + establish courts are exercised by both levels.',
        explanation: 'Federalism categories: enumerated federal (Art. I § 8), implied federal (Necessary and Proper), inherent federal (sovereignty), reserved state (10th Amendment), concurrent (both), prohibited state (Art. I § 10), prohibited federal (Art. I § 9 + Bill of Rights).'
      }
    },
    {
      id: 'govconst4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — SCOTUS Comparison**`,
      exercise: {
        questions: [
          {
            question: 'AP SCOTUS comparison: In United States v. Lopez (1995), the Court held that the Gun-Free School Zones Act of 1990 exceeded congressional commerce-clause authority. Which other AP-required case provides the most useful comparison?',
            options: [
              "McCulloch v. Maryland, which read implied powers broadly under the Necessary and Proper Clause in a way the later ruling narrowed for commerce",
              "McDonald v. Chicago, which incorporated the Second Amendment through the Due Process Clause and so settled whether Congress may ban guns near schools",
              "Tinker v. Des Moines, which held that public schools are federal enclaves where Congress may regulate student conduct under its commerce power",
              "Marbury v. Madison, which held that Congress may not regulate local activities that states have traditionally controlled"
            ],
            correctAnswer: 0,
            explanation: 'AP SCOTUS comparison: McCulloch v. Maryland (1819) — implied powers under Necessary and Proper Clause; foundational to broad commerce-clause reading → Lopez (1995) is first since 1937 to strike federal statute as exceeding commerce power (gun possession near schools ≠ commercial activity substantially affecting interstate commerce) → partial revival of pre-New Deal limits.'
          },
          {
            question: 'Which AP "complexity" claim best illuminates the dynamic relationship between federalism and incorporation?',
            options: [
              "Incorporation and a broad reading of the commerce power have shifted authority toward the national government, though rulings like United States v. Lopez show the shift has limits",
              'Incorporation has strengthened the states, since the Bill of Rights now limits only the federal government and leaves state policy untouched',
              'Federalism has stayed fixed since 1789, because the Tenth Amendment prevents the Court from changing the balance of state and national power',
              "Incorporation applies only to criminal procedure, so state power over speech, religion, and guns remains as it was at the founding"
            ],
            correctAnswer: 0,
            explanation: 'AP complexity: federalism transformed by 3 doctrines expanding federal authority — (1) 14th Amendment + selective incorporation (Gideon, Mapp, Obergefell); (2) post-New Deal commerce-clause (Wickard 1942); (3) post-1965 civil-rights + grant conditions → modern "cooperative federalism" vs. founding "dual federalism" + counter-movements (Lopez 1995, Printz 1997, NFIB 2012).'
          }
        ]
      }
    }
  ]
}
