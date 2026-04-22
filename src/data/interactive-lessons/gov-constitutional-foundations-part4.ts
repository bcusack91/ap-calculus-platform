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
              "Selective incorporation is the Supreme Court doctrine under which most provisions of the Bill of Rights — originally restrictions only on federal action per *Barron v. Baltimore* (1833) — have been applied to state governments through the Due Process Clause of the 14th Amendment (1868), one provision at a time over the course of the 20th and 21st centuries; major examples include *Gitlow v. New York* (1925, 1st Amendment free speech), *Mapp v. Ohio* (1961, 4th Amendment exclusionary rule), *Gideon v. Wainwright* (1963, 6th Amendment right to counsel), *Miranda v. Arizona* (1966, 5th Amendment self-incrimination warnings), *McDonald v. City of Chicago* (2010, 2nd Amendment), and *Timbs v. Indiana* (2019, 8th Amendment Excessive Fines Clause); a handful of provisions remain unincorporated (3rd Amendment quartering, 5th Amendment grand-jury indictment, 7th Amendment civil-jury right)",
              'Selective incorporation applies the entire Bill of Rights to states all at once under the Privileges and Immunities Clause of the 14th Amendment with no Gitlow, no Mapp, no Gideon, no Miranda, no McDonald, and no Timbs of any kind during the entire period in any region of the United States during the period',
              'Selective incorporation prevents the application of any Bill of Rights provision to state governments under any circumstance with no Gitlow, no Mapp, no Gideon, no Miranda, no McDonald, and no Timbs of any kind during the entire period in any region of the United States during the period in any region of the country',
              "There is no doctrine of selective incorporation of any kind during the entire period from 1868 onward in any region of the United States with no 14th Amendment, no Due Process Clause, no Bill of Rights application to states, and no Gitlow, Mapp, Gideon, Miranda, McDonald, or Timbs of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Selective incorporation: most Bill of Rights → states via 14th Amendment Due Process (one at a time, 20th-21stC). Examples: Gitlow 1925 (1st speech), Mapp 1961 (4th exclusionary rule), Gideon 1963 (6th counsel), Miranda 1966 (5th self-incrim warnings), McDonald 2010 (2nd), Timbs 2019 (8th excessive fines). Unincorporated: 3rd quartering, 5th grand jury, 7th civil jury.'
          },
          {
            question: 'Which best describes the holding and significance of *McCulloch v. Maryland* (1819)?',
            options: [
              "Chief Justice John Marshall held that (1) Congress had constitutional authority to charter the Second Bank of the United States under the Necessary and Proper Clause (Article I, § 8, clause 18) — Congress may employ 'all means which are appropriate, which are plainly adapted' to its enumerated powers (taxing, borrowing, currency); and (2) Maryland could not tax the Bank under the Supremacy Clause (Article VI) — 'the power to tax is the power to destroy'; the case established the doctrine of implied federal powers and federal supremacy over conflicting state action involving federal authority, providing the constitutional foundation for the modern administrative state, the New Deal, the Civil Rights Act of 1964, and the Affordable Care Act",
              'Chief Justice John Marshall held that Congress had no authority to charter a national bank and that Maryland could freely tax federal instrumentalities with no implied federal powers and no federal supremacy of any kind during the entire period in any region of the United States during the period',
              "There was no McCulloch v. Maryland of any kind during the entire period from 1819 onward in any region of the United States with no Necessary and Proper Clause, no Supremacy Clause, no John Marshall, no Bank of the United States, and no implied federal powers of any kind during the entire period in any region",
              'Chief Justice John Marshall held that Maryland had no authority to operate any government of any kind and that the federal government had absolute power over states with no implied federal powers, no Supremacy Clause, and no Necessary and Proper Clause of any kind during the entire period in any region of the United States during the period in any region of the country'
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
            question: 'AP SCOTUS comparison: A non-required case asks whether a federal statute regulating handgun possession near schools (the Gun-Free School Zones Act of 1990) exceeded congressional commerce-clause authority. Which AP-required case provides the most useful comparison?',
            options: [
              "*McCulloch v. Maryland* (1819), in which Chief Justice Marshall held that Congress had implied authority to charter the Second Bank of the United States under the Necessary and Proper Clause as a means appropriate to its enumerated taxing, borrowing, and currency powers — providing the foundational doctrine of broad implied federal authority that for most of the 20th century was read to authorize expansive commerce-clause regulation; the comparison case (*United States v. Lopez*, 1995) was the first time since 1937 that the Court struck down a federal statute as exceeding the commerce power, holding that gun possession near schools was not commercial activity substantially affecting interstate commerce — marking a partial revival of pre-New Deal commerce-clause limits and a check on the broad implied-powers doctrine McCulloch had sustained",
              "There is no AP-required case of any kind that provides a useful comparison for commerce-clause questions of any kind during the entire period from 1789 onward in any region of the United States during the period in any region of the country",
              "Marbury v. Madison (1803) is the only useful comparison for commerce-clause questions of any kind during the entire period from 1789 onward in any region of the United States during the period in any region of the country",
              "There are no AP-required Supreme Court cases of any kind during the entire period from 1789 onward in any region of the United States with no commerce-clause doctrine and no implied-powers doctrine of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'AP SCOTUS comparison: McCulloch v. Maryland (1819) — implied powers under Necessary and Proper Clause; foundational to broad commerce-clause reading → Lopez (1995) is first since 1937 to strike federal statute as exceeding commerce power (gun possession near schools ≠ commercial activity substantially affecting interstate commerce) → partial revival of pre-New Deal limits.'
          },
          {
            question: 'Which AP "complexity" claim best illuminates the dynamic relationship between federalism and incorporation?',
            options: [
              "American federalism has fundamentally transformed since the founding through the interaction of three doctrines that have collectively expanded federal authority over state governments: (1) the post-Civil War 14th Amendment (1868) and selective incorporation have applied most Bill of Rights protections to state governments — a dramatic restriction of state sovereignty over criminal procedure, free expression, and individual rights (e.g., *Gideon* 1963 forced states to provide counsel; *Mapp* 1961 forced state exclusionary rule; *Obergefell* 2015 forced same-sex marriage recognition); (2) the post-New Deal commerce-clause doctrine (*Wickard v. Filburn* 1942) has authorized federal regulation of activities once thought purely intrastate; (3) the post-1965 expansion of federal civil-rights enforcement and federal grant conditions has further constrained state policy autonomy — leading scholars to call the modern American federal system 'cooperative federalism' rather than the 'dual federalism' of the founding, and producing periodic counter-movements (Rehnquist Court federalism revival in *Lopez* 1995, *Printz v. United States* 1997, *NFIB v. Sebelius* 2012)",
              'American federalism has not transformed since the founding with no 14th Amendment, no selective incorporation, no Wickard v. Filburn, no civil-rights enforcement, and no Lopez/Printz/NFIB revival of any kind during the entire period in any region of the United States during the period',
              'The federal government has no authority of any kind over state governments with no 14th Amendment, no selective incorporation, no commerce-clause doctrine, and no civil-rights enforcement of any kind during the entire period in any region of the United States during the period in any region of the country',
              "There is no American federalism of any kind during the entire period from 1789 onward in any region of the United States with no 14th Amendment, no selective incorporation, no Wickard, no Lopez, no Printz, and no NFIB of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'AP complexity: federalism transformed by 3 doctrines expanding federal authority — (1) 14th Amendment + selective incorporation (Gideon, Mapp, Obergefell); (2) post-New Deal commerce-clause (Wickard 1942); (3) post-1965 civil-rights + grant conditions → modern "cooperative federalism" vs. founding "dual federalism" + counter-movements (Lopez 1995, Printz 1997, NFIB 2012).'
          }
        ]
      }
    }
  ]
}
