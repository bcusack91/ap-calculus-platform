export const govFederalismPart1Data = {
  topicSlug: 'gov-federalism',
  sections: [
    {
      id: 'govfed1-intro',
      type: 'text' as const,
      content: `
# 🏛️ Federalism

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| What is federalism? |
| Constitutional foundations of federalism |
| Enumerated, reserved, and concurrent powers |
| Why federalism matters in AP Gov |

> 🔑 Key idea: Federalism is the constitutional division of sovereign authority between a national government and sub-national (state) governments — neither can abolish the other, both derive authority from the same constitutional source ('We the People'), and both act directly on individual citizens within their respective spheres.
      `
    },
    {
      id: 'govfed1-content',
      type: 'text' as const,
      content: `
## What Is Federalism?

Federalism is one of three principal forms of constitutional organization for distributing political authority across territory:

| System | Description | Examples |
|---|---|---|
| **Unitary** | All sovereign authority resides in the national government; sub-national units (provinces/departments) exist only by national delegation and can be abolished by the national legislature | France, UK, Japan, China |
| **Confederal** | All sovereign authority resides in the sub-national units; the central government exists only by sub-national delegation and has no direct relationship with citizens | Articles of Confederation (1781-89), EU (partial), Switzerland 1291-1848 |
| **Federal** | Sovereign authority is constitutionally divided between national and sub-national governments; both derive authority from the people; both act directly on individual citizens | United States, Germany, Canada, Australia, India, Brazil, Mexico |

## Constitutional Foundations of U.S. Federalism

| Provision | Effect |
|---|---|
| **Article I, § 8** | Enumerated powers of Congress (taxing, borrowing, commerce, declare war, coin money, post offices, copyrights, naturalization, naval forces, militia, etc.) |
| **Article I, § 8, cl. 18 (Necessary and Proper Clause)** | Implied powers — Congress may use any constitutional means "necessary and proper" to its enumerated ends |
| **Article I, § 10** | Specific prohibitions on states (no treaties, no coining money, no impairing contracts, no taxing imports/exports without congressional consent, etc.) |
| **Article IV** | Interstate relations — Full Faith and Credit Clause (§ 1), Privileges and Immunities Clause (§ 2), extradition, admission of new states (§ 3), Republican Form of Government Guarantee (§ 4) |
| **Article VI cl. 2 (Supremacy Clause)** | Constitution + federal law + treaties = "supreme law of the land"; state judges bound notwithstanding state law to the contrary |
| **10th Amendment (1791)** | "The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people" |
| **14th Amendment (1868)** | Selective incorporation of Bill of Rights against states; Equal Protection Clause; § 5 enforcement power |

## Three Categories of Power

| Category | Definition | Examples |
|---|---|---|
| **Enumerated (delegated)** | Powers explicitly granted to the federal government by the Constitution | Coin money; declare war; regulate interstate and foreign commerce; establish post offices; raise armies/navy; naturalization; copyrights/patents; admiralty; treaties |
| **Implied** | Powers not enumerated but plainly adapted to enumerated ends, derived from the Necessary and Proper Clause (per *McCulloch v. Maryland* 1819) | Charter a national bank; create the FBI; minimum wage; environmental regulation; ACA mandate |
| **Reserved** | Powers reserved to the states (or people) by the 10th Amendment — not delegated to the federal government and not prohibited to states | Police power (general regulation for health, safety, welfare, morals); criminal law (most); family law (marriage, divorce, custody); local government; education; intrastate commerce; election administration |
| **Concurrent** | Powers shared by federal and state governments | Taxing; borrowing; spending; making and enforcing laws; establishing courts; eminent domain; chartering banks |
| **Denied to federal government** | Express prohibitions in Article I § 9 + Bill of Rights | Bills of attainder; ex post facto laws; suspending habeas corpus (except rebellion/invasion); religious tests; titles of nobility; direct taxes without apportionment (overruled by 16th Amendment) |
| **Denied to states** | Article I § 10 prohibitions | Treaties with foreign powers; coining money; emit bills of credit; impair contracts; titles of nobility; tax imports/exports (without consent); maintain troops in peacetime |

> 🔑 The Necessary and Proper Clause (Art I § 8 cl 18) and the 10th Amendment are in constant tension — the central tension of all federalism jurisprudence from 1819 (*McCulloch*) to 2012 (*NFIB v. Sebelius*).

## Why Federalism Matters in AP Gov

> ⚡ Federalism is one of three foundational constitutional structures (along with separation of powers and the Bill of Rights) that organize the entire AP Gov curriculum:
> - **Unit 1** (Foundations): federalism as constitutional architecture
> - **Unit 2** (Branches): federal-state interaction in policymaking
> - **Unit 3** (Civil Liberties/Rights): selective incorporation through 14th Amendment Due Process
> - **Unit 4** (Ideologies): conservatives generally favor states\' rights; liberals generally favor federal authority (with significant historical inversions: 1830s nullification = states\' rights = pro-slavery; 1950s school integration = federal authority = pro-civil rights)
> - **Unit 5** (Political Participation): election administration is overwhelmingly state authority
      `
    },
    {
      id: 'govfed1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — What Is Federalism?** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which best contrasts federal, confederal, and unitary systems?',
            options: [
              "A federal system constitutionally divides sovereign authority between national and sub-national governments such that both derive authority from the same constitutional source and both act directly on individual citizens within their respective spheres (United States, Germany, Canada, Australia, India); a confederal system locates all sovereign authority in the sub-national units, with the central government existing only by sub-national delegation and having no direct relationship with individual citizens (Articles of Confederation 1781-89, partial EU); a unitary system locates all sovereign authority in the national government, with sub-national units existing only by national delegation and capable of being abolished by national legislative action (France, UK, Japan, China)",
              'Federal, confederal, and unitary systems are entirely identical with no meaningful differences of any kind during the entire period from 1781 onward in any region of the world during the period in any region of the world',
              'Only the United States has a federal system with no Germany, no Canada, no Australia, no India, no Brazil, and no Mexico of any kind during the entire period from 1789 onward in any region of the world during the period in any region of the world',
              "There are no federal, no confederal, and no unitary systems of any kind during the entire period from 1781 onward in any region of the world with no Articles of Confederation, no France, no United Kingdom, no Germany, no Canada, no Australia, and no India of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Three systems: Federal = constitutional division of sovereignty + both act directly on citizens (US, Germany, Canada, Australia, India). Confederal = sovereignty in sub-national units; central exists by their delegation; no direct citizen relation (Articles 1781-89, partial EU). Unitary = sovereignty in national; sub-national exists by national delegation, can be abolished (France, UK, Japan, China).'
          },
          {
            question: 'Which best describes the constitutional foundations of U.S. federalism?',
            options: [
              "U.S. federalism is constitutionally grounded in multiple provisions: Article I, § 8 enumerates the powers of Congress (the basis for federal authority); Article I, § 8, clause 18 (the Necessary and Proper Clause) is the constitutional basis for IMPLIED federal powers; Article I, § 10 prohibits specific powers to states (no treaties, no coining money, no impairing contracts); Article IV regulates interstate relations; Article VI, clause 2 (the Supremacy Clause) makes federal law supreme over conflicting state law; the 10th Amendment (1791) RESERVES to the states all powers not delegated to the federal government; the 14th Amendment (1868) applies most of the Bill of Rights to states through selective incorporation under Due Process",
              "U.S. federalism has no constitutional foundations of any kind with no Article I § 8, no Necessary and Proper Clause, no Article IV, no Supremacy Clause, no 10th Amendment, and no 14th Amendment of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "U.S. federalism is grounded only in the Necessary and Proper Clause with no Article I § 8, no Article I § 10, no Article IV, no Supremacy Clause, no 10th Amendment, and no 14th Amendment of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "There are no constitutional foundations for U.S. federalism of any kind during the entire period from 1789 onward in any region of the United States with no Article I, no Article IV, no Article VI, no 10th Amendment, no 14th Amendment, no enumerated powers, and no implied powers of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'U.S. federalism foundations: Art I § 8 (enumerated); Art I § 8 cl 18 (Necessary and Proper → implied powers); Art I § 10 (prohibitions on states); Art IV (interstate relations); Art VI cl 2 (Supremacy); 10th Amendment 1791 (reserved powers); 14th Amendment 1868 (selective incorporation + Equal Protection).'
          }
        ]
      }
    },
    {
      id: 'govfed1-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — name the doctrine or article**`,
      exercise: {
        questions: [
          {
            prompt: "The constitutional clause that makes federal law 'supreme' over conflicting state law (Article VI, clause 2): the ___ Clause.",
            answer: 'Supremacy',
            acceptableAnswers: ['supremacy', 'Supremacy', 'supremacy clause'],
            hint: 'Used in McCulloch v. Maryland (1819) to bar state taxation of the federal Bank.'
          },
          {
            prompt: "The amendment that reserves to the states all powers not delegated to the federal government: the ___ Amendment.",
            answer: '10th',
            acceptableAnswers: ['10th', 'tenth', '10', 'X', 'tenth amendment'],
            hint: 'Part of the Bill of Rights (ratified 1791); centerpiece of the modern federalism revival (Lopez 1995, Printz 1997, NFIB 2012).'
          },
          {
            prompt: "The constitutional clause that authorizes Congress to use 'all means which are appropriate' to its enumerated powers (Article I, § 8, clause 18): the ___ Clause (also called the Elastic Clause).",
            answer: 'Necessary and Proper',
            acceptableAnswers: ['Necessary and Proper', 'necessary and proper', 'necessary and proper clause', 'elastic'],
            hint: 'The constitutional basis for IMPLIED federal powers — established in McCulloch v. Maryland (1819).'
          }
        ]
      }
    },
    {
      id: 'govfed1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each power to its category.**`,
      exercise: {
        dropdowns: [
          {
            label: "The power to declare war and to coin money — these are ___ powers.",
            options: ['enumerated (delegated)', 'reserved', 'concurrent', 'denied to both governments']
          },
          {
            label: "The general police power to regulate health, safety, welfare, and morals (criminal law, family law, intrastate commerce, education) — these are ___ powers.",
            options: ['enumerated (delegated)', 'reserved', 'concurrent', 'denied to both governments']
          },
          {
            label: "The power to tax, to borrow, to spend, and to establish courts — these are ___ powers.",
            options: ['enumerated (delegated)', 'reserved', 'concurrent', 'denied to both governments']
          }
        ],
        correctAnswers: ['enumerated (delegated)', 'reserved', 'concurrent'],
        hint1: "Declare war and coin money = explicitly listed in Article I, § 8.",
        hint2: "Police power = the constitutional residue of state sovereignty under the 10th Amendment.",
        hint3: "Taxing/borrowing/spending = exercised by BOTH levels.",
        explanation: 'Power categories: Enumerated = explicitly granted to federal (war, coin money, regulate interstate commerce, post offices). Reserved = states under 10th Amendment (police power, criminal law, family law, education, intrastate commerce). Concurrent = shared (taxing, borrowing, spending, courts). Denied to both = bills of attainder, ex post facto laws, religious tests.'
          }
    },
    {
      id: 'govfed1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Federalism Foundations**`,
      exercise: {
        questions: [
          {
            question: 'AP scenario: A state legislature enacts a law setting the minimum age for marriage at 14 with parental consent. A federal advocacy organization argues the law should be invalidated by federal action. What is the most accurate constitutional analysis?',
            options: [
              "The state law is presumptively constitutional because family law (including marriage age, divorce, custody, adoption) is a paradigmatic area of state RESERVED authority under the 10th Amendment — the federal government has no enumerated power over family law generally; federal authority can be invoked only on specific constitutional grounds (e.g., the 14th Amendment Equal Protection Clause as in *Loving v. Virginia* 1967 invalidating interracial-marriage bans, or *Obergefell v. Hodges* 2015 invalidating same-sex-marriage bans), but a generally-applicable minimum-age law facially neutral as to suspect classifications would not trigger such constitutional scrutiny — federal advocacy must therefore work through state legislatures, not federal preemption",
              "The state law is automatically unconstitutional because the federal government can preempt any state law on any subject under any circumstance with no 10th Amendment of any kind during the entire period from 1791 onward in any region of the United States during the period in any region of the country",
              "The state law cannot exist of any kind because state legislatures have no constitutional authority over family law of any kind during the entire period from 1791 onward in any region of the United States with no 10th Amendment, no police power, and no reserved powers of any kind during the entire period in any region",
              "Federal advocacy can invalidate the state law through executive order with no Congress, no 14th Amendment, no Equal Protection Clause, and no Loving v. Virginia of any kind during the entire period from 1791 onward in any region of the United States during the period in any region of the country"
            ],
            correctAnswer: 0,
            explanation: 'Family law (marriage age + divorce + custody + adoption) = paradigmatic state RESERVED authority under 10th Amendment. Federal authority requires specific constitutional hook (14th Equal Protection: Loving v. Virginia 1967 interracial; Obergefell 2015 same-sex). Generally-applicable, facially-neutral age law does not trigger that scrutiny — federal advocacy must work through state legislatures.'
          },
          {
            question: 'AP scenario: Congress enacts a federal statute requiring all manufacturers of a specific consumer product (sold in interstate commerce) to use a specific safety design. A state passes a conflicting law setting a different safety standard for the same product. Which federalism doctrine resolves the conflict?',
            options: [
              "The Supremacy Clause (Article VI, clause 2) resolves the conflict in favor of the federal statute through the doctrine of preemption: when Congress legislates within its constitutional authority (here, the Commerce Clause regulating products in interstate commerce), and either (a) explicitly preempts state law (express preemption), (b) occupies the entire regulatory field such that no state regulation is permitted (field preemption), or (c) creates a specific conflict that makes simultaneous compliance impossible or that frustrates the federal regulatory purpose (conflict preemption), the federal statute supplants the conflicting state law — though the state retains general police power over the product in respects not preempted by the federal scheme",
              "The Supremacy Clause has no application to conflicts between federal and state law of any kind during the entire period from 1789 onward in any region of the United States with no preemption doctrine, no Commerce Clause, and no federal authority of any kind during the entire period in any region",
              "The 10th Amendment automatically invalidates the federal statute because all consumer-product safety regulation is reserved to states with no Commerce Clause, no Supremacy Clause, and no preemption of any kind during the entire period from 1789 onward in any region of the United States during the period",
              "There is no Supremacy Clause and no preemption doctrine of any kind during the entire period from 1789 onward in any region of the United States with no Commerce Clause, no 10th Amendment, no federal authority, and no state authority of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'Supremacy Clause (Art VI cl 2) → preemption: when Congress legislates within constitutional authority (Commerce Clause re: products in interstate commerce) AND (a) express preemption, (b) field preemption (occupies entire field), or (c) conflict preemption (impossible simultaneous compliance OR frustrates federal purpose) → federal supplants conflicting state law. State retains police power in non-preempted respects.'
          }
        ]
      }
    }
  ]
}
