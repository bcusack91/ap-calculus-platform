export const govFederalismPart4Data = {
  topicSlug: 'gov-federalism',
  sections: [
    {
      id: 'govfed4-intro',
      type: 'text' as const,
      content: `
# 🏛️ Federalism

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| Federalism × Civil Rights & Civil Liberties |
| Federalism × Branches (Congress, President, Court) |
| Federalism × Political Ideology |
| Horizontal federalism (state-to-state) |

> 🔑 Key idea: Federalism does not exist in isolation — it interacts with every other constitutional structure. The same federalism principles that protect state sovereignty under the 10th Amendment have been deployed BY conservatives to limit federal civil rights enforcement (1830s nullification, 1950s "massive resistance") AND BY liberals to limit federal authority on criminal-immigration enforcement (modern "sanctuary city" movement) — federalism\'s ideological valence is contingent on which level of government holds power.
      `
    },
    {
      id: 'govfed4-content',
      type: 'text' as const,
      content: `
## Federalism × Civil Rights and Civil Liberties

| Era | Federalism direction | Civil rights/liberties effect |
|---|---|---|
| **1791-1868** | States dominant; Bill of Rights restricts only federal action (*Barron v. Baltimore* 1833) | States free to violate individual rights against state action; slavery; Black Codes |
| **1868-1925** | 14th Amendment ratified but largely unenforced; *Slaughter-House Cases* 1873 gutted Privileges or Immunities Clause; *Plessy v. Ferguson* 1896 ratified "separate but equal" | Reconstruction failure; Jim Crow consolidation; segregation |
| **1925-1968** | Selective incorporation begins (*Gitlow v. New York* 1925); *Brown v. Board* 1954; Civil Rights Act 1964 (commerce clause); Voting Rights Act 1965 (15th Amendment § 2) | Federal power deployed to overcome state resistance to civil rights — federal authority = pro-civil-rights |
| **1968-present** | Most Bill of Rights protections incorporated against states; civil rights statutes enforced; modern federalism revival (*Lopez* 1995, *Shelby County* 2013, *Murphy* 2018) | Selective incorporation now near-complete; modern federalism revival has had MIXED effects on civil rights — *Shelby County* 2013 weakened VRA preclearance, but anti-commandeering doctrine has protected sanctuary cities |

> 🔑 The 14th Amendment (1868) was a constitutional revolution that fundamentally reshaped federalism: states are now constrained by the Bill of Rights (selective incorporation), the Equal Protection Clause, and the Due Process Clause — federalism since 1868 has been federalism BOUNDED by individual-rights protections enforced by federal courts.

## Federalism × Branches

| Branch | Federalism role |
|---|---|
| **Congress** | (1) Defines federal authority through statutes (Civil Rights Act 1964 commerce clause; ACA 2010 spending clause); (2) provides federal funding to states (grants-in-aid totaling hundreds of billions annually); (3) preempts state law via federal statutes (Cigarette Labeling Act 1965; Airline Deregulation Act 1978); (4) imposes federal mandates on states (No Child Left Behind 2001; Real ID Act 2005); (5) enforces 14th Amendment via § 5 enforcement power (CRA 1964; VRA 1965; ADA 1990) |
| **President** | (1) Appoints federal judges who decide federalism cases; (2) executes federal grants programs; (3) issues executive orders directing federal agencies to act in cooperation with or in opposition to state policies (immigration enforcement, marijuana enforcement, sanctuary cities); (4) negotiates federal-state cooperation in disasters (FEMA, COVID response) |
| **Court** | (1) Interprets the constitutional limits of federal authority (Commerce Clause, Spending Clause, Necessary and Proper Clause, 10th Amendment, Supremacy Clause, anti-commandeering); (2) interprets selective incorporation (which Bill of Rights provisions apply to states); (3) interprets Equal Protection and Due Process limits on state action; (4) interprets dormant Commerce Clause limits on state authority over interstate commerce |
| **Federal bureaucracy** | (1) Administers federal grants and regulations affecting states (HHS administers Medicaid; DOT administers federal highway funds; EPA administers environmental regulations); (2) federal agencies vs. state agencies in dual sovereignty (FBI vs. state police; SEC vs. state securities regulators; FDA vs. state pharmacy boards) |

## Federalism × Political Ideology

| Position | Historical pattern |
|---|---|
| **Conservatives generally favor states\' rights** — but with major exceptions | (1) 1830s: Calhoun nullification (pro-slavery, pro-states\'-rights); (2) 1860s-1960s: Southern resistance to Reconstruction and civil rights = pro-states\'-rights; (3) 1980s-present: Reagan revolution and modern federalism revival = pro-states\'-rights; (4) BUT: conservatives favor federal authority on immigration enforcement, federal preemption of state liability law, federal preemption of state environmental regulation that conflicts with industry interests |
| **Liberals generally favor federal authority** — but with major exceptions | (1) 1860s: Republican Reconstruction = pro-federal; (2) 1930s: New Deal = pro-federal; (3) 1960s: Great Society + civil rights = pro-federal; (4) BUT: liberals favor states\' rights when states pursue progressive policies (CA emissions standards stricter than federal; sanctuary cities; state minimum wages above federal floor; recreational marijuana; abortion access post-Dobbs) |

> 🔑 The historical inversion: in the 1950s-60s, federalism principles (states\' rights) were associated with Southern resistance to civil rights; in the 21st century, federalism principles (sanctuary cities, state-level progressive policy) have been frequently invoked by liberals — federalism\'s ideological valence depends on which level of government holds power AND which direction policy is moving.

## Horizontal Federalism (State-to-State Relations)

Federalism includes not only national-state relations but also relations AMONG the states, governed by Article IV:

| Provision | Effect | Example |
|---|---|---|
| **Article IV § 1 — Full Faith and Credit Clause** | States must give "full faith and credit" to the public acts, records, and judicial proceedings of other states | A divorce decree, marriage certificate, court judgment, or driver\'s license issued in one state must be recognized by other states; basis for *Obergefell v. Hodges* 2015 same-sex marriage recognition (though Court ultimately decided on Equal Protection grounds) |
| **Article IV § 2, cl. 1 — Privileges and Immunities Clause** | "The Citizens of each State shall be entitled to all Privileges and Immunities of Citizens in the several States" — generally prohibits states from discriminating against out-of-state citizens | A state cannot impose hiring discrimination against out-of-state workers in commercial activities; state cannot deny non-residents access to state courts |
| **Article IV § 2, cl. 2 — Extradition Clause** | A person charged with a crime in one state who flees to another state must be returned upon request | Extradition is the constitutional norm, though states have some discretion |
| **Article I § 10 cl. 3 — Compact Clause** | "No State shall, without the Consent of Congress, . . . enter into any Agreement or Compact with another State" | Interstate compacts (Port Authority of NY & NJ; Colorado River Compact; multistate driver\'s license agreement) require congressional consent |
| **Dormant Commerce Clause** | Even when Congress has not legislated, the Commerce Clause implicitly prohibits states from imposing substantial burdens on interstate commerce or discriminating against out-of-state commerce | A state cannot impose a tariff on goods imported from other states; cannot impose discriminatory taxes on out-of-state businesses |
      `
    },
    {
      id: 'govfed4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Federalism Connections** 🎯`,
      exercise: {
        questions: [
          {
            question: "Which best describes the relationship between federalism and civil rights in U.S. history?",
            options: [
              "Before 1868 the Bill of Rights did not bind the states, but the 14th Amendment, incorporation, and civil rights laws of the 1960s let federal power override state discrimination",
              "States led the fight for civil rights from the start, while Congress, the President, and the Court resisted change until the 1990s",
              "The Bill of Rights bound the states from 1791 on, so the 14th Amendment only confirmed rules that states already followed",
              "Federal power over civil rights shrank after Brown v. Board, since the Court left desegregation and voting rules to the states"
            ],
            correctAnswer: 0,
            explanation: 'Federalism × civil rights shifts: 1791-1868: Bill of Rights only federal (Barron 1833) → states free to violate (slavery, Black Codes). 1868: 14th Amendment constitutional revolution — but largely unenforced (Slaughter-House 1873 → Plessy 1896 → Brown 1954). 1925-1965: selective incorporation begins (Gitlow) + CRA + VRA → federal power overcomes state resistance. Modern revival = MIXED (Shelby County 2013 weakened VRA preclearance; anti-commandeering protected sanctuary cities).'
          },
          {
            question: "Which best describes how horizontal federalism (state-to-state) is regulated by the Constitution?",
            options: [
              "Article IV requires full faith and credit for other states' records, equal privileges for out-of-state citizens, and extradition of fugitives",
              "Article I lets Congress settle all disputes between states, requires states to adopt identical laws, and bars states from making agreements with each other",
              "The Tenth Amendment lets each state ignore court judgments from other states, charge higher fees to all outsiders, and refuse to return fugitives",
              "The Supremacy Clause makes the law of the largest state binding on its neighbors, sets interstate tariffs, and assigns disputes to state courts"
            ],
            correctAnswer: 0,
            explanation: 'Article IV horizontal federalism: § 1 Full Faith and Credit (recognize other states\' public acts/records/judicial proceedings — divorce, marriage, judgments, licenses); § 2 cl 1 Privileges and Immunities (no discrim vs out-of-state citizens); § 2 cl 2 Extradition (return fugitives). Art I § 10 cl 3 Compact Clause (interstate compacts need Congress consent — Port Authority, Colorado River). Dormant Commerce Clause (implicit limit on state burdens). Together = single national market + state sovereignty in non-discriminatory respects.'
          }
        ]
      }
    },
    {
      id: 'govfed4-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — federalism interactions**`,
      exercise: {
        questions: [
          {
            prompt: "The Article IV clause requiring states to recognize the public acts, records, and judicial proceedings of other states (basis for cross-state recognition of marriages, divorces, court judgments): the ___ Clause.",
            answer: 'Full Faith and Credit',
            acceptableAnswers: ['Full Faith and Credit', 'full faith and credit', 'full faith and credit clause'],
            hint: 'Article IV, § 1 — single national legal market.'
          },
          {
            prompt: "The doctrine that even when Congress has NOT legislated, the Commerce Clause implicitly prohibits states from imposing substantial burdens on interstate commerce: the ___ Commerce Clause.",
            answer: 'dormant',
            acceptableAnswers: ['dormant', 'Dormant', 'negative'],
            hint: 'Also called the "negative" Commerce Clause — bars state tariffs on out-of-state goods, discriminatory state taxes on out-of-state businesses.'
          },
          {
            prompt: "The Article I clause requiring congressional consent for interstate compacts (e.g., Port Authority of NY-NJ, Colorado River Compact, multistate driver\'s license agreements): the ___ Clause.",
            answer: 'Compact',
            acceptableAnswers: ['Compact', 'compact', 'compact clause'],
            hint: 'Article I, § 10, clause 3 — prevents state combinations that would threaten federal authority.'
          }
        ]
      }
    },
    {
      id: 'govfed4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each constitutional provision to its federalism function.**`,
      exercise: {
        dropdowns: [
          {
            label: "Restricts federal action only (until selective incorporation begins 1925) and was originally the only constitutional protection of individual liberty: the ___.",
            options: ['Bill of Rights (1791)', '14th Amendment (1868)', '10th Amendment (1791)', 'Necessary and Proper Clause']
          },
          {
            label: "Subjects states to federal individual-rights guarantees through Due Process selective incorporation, Equal Protection, and § 5 congressional enforcement power: the ___.",
            options: ['Bill of Rights (1791)', '14th Amendment (1868)', '10th Amendment (1791)', 'Necessary and Proper Clause']
          },
          {
            label: "Reserves to states all powers not delegated to federal government and not prohibited to states; centerpiece of modern federalism revival (Lopez 1995, Printz 1997): the ___.",
            options: ['Bill of Rights (1791)', '14th Amendment (1868)', '10th Amendment (1791)', 'Necessary and Proper Clause']
          }
        ],
        correctAnswers: ['Bill of Rights (1791)', '14th Amendment (1868)', '10th Amendment (1791)'],
        hint1: 'First 10 amendments — Anti-Federalist concession; pre-incorporation only restricted federal action.',
        hint2: 'Reconstruction Amendment that revolutionized federalism by subjecting states to federal individual-rights guarantees.',
        hint3: 'Centerpiece of modern federalism revival — basis for anti-commandeering doctrine.',
        explanation: 'Federalism × constitutional provisions: Bill of Rights 1791 = restricts only federal action until 1925 incorporation begins. 14th Amendment 1868 = subjects states to federal individual-rights guarantees (Due Process selective incorporation + Equal Protection + § 5 enforcement). 10th Amendment 1791 = reserved powers + centerpiece of modern revival (Lopez, Printz, Murphy v. NCAA).'
      }
    },
    {
      id: 'govfed4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Federalism Interactions**`,
      exercise: {
        questions: [
          {
            question: "AP scenario: A state passes a law prohibiting out-of-state liquor wholesalers from selling directly to in-state retailers, while permitting in-state wholesalers to do so. An out-of-state wholesaler sues. What is the most likely outcome?",
            options: [
              "The law likely violates the dormant Commerce Clause, since it openly favors in-state wholesalers over out-of-state competitors",
              "The law is likely upheld, since the 21st Amendment gives states unlimited power over alcohol, including power to protect local wholesalers from outside competition",
              "The law likely violates the Privileges and Immunities Clause, since corporations are citizens entitled to equal treatment in every state",
              "The law is likely upheld, since only Congress, not private businesses, may challenge a state's trade rules in court"
            ],
            correctAnswer: 0,
            explanation: 'State law violates dormant Commerce Clause: facial discrimination vs out-of-state commerce = presumptively unconstitutional. State must show legitimate local purpose unachievable by non-discriminatory alternatives (rarely met for explicit economic protectionism). 21st Amendment (1933) grants states some alcohol authority BUT Granholm v. Heald (2005) held 21st Amendment does NOT permit facial discrimination against out-of-state alcohol commerce.'
          },
          {
            question: "AP scenario: After the Supreme Court overrules *Roe v. Wade* in *Dobbs v. Jackson Women\'s Health* (2022), state authority over abortion regulation expands dramatically. Some states adopt restrictive bans; others adopt protective statutes. A patient travels from a restrictive state to a permissive state for an abortion. The restrictive state seeks to prosecute. Which constitutional provisions are most directly implicated?",
            options: [
              "The constitutional right to travel and Article IV's Privileges and Immunities Clause, which limit a state's power to punish lawful out-of-state conduct",
              "The Tenth Amendment and the Supremacy Clause, which let a state punish its residents for any act wherever it occurs",
              "The Necessary and Proper Clause and the Establishment Clause, which give Congress sole constitutional authority over medical procedures performed across state lines",
              "The Full Faith and Credit Clause alone, which requires the permissive state to extradite any patient who traveled there for trial"
            ],
            correctAnswer: 0,
            explanation: 'Post-Dobbs interstate abortion travel implicates multiple constitutional provisions: (1) Art IV § 2 cl 1 Privileges and Immunities + right to travel (Saenz v. Roe 1999); (2) dormant Commerce Clause (interstate medical services); (3) Full Faith and Credit (recognition of lawful out-of-state procedures — contested as to criminal prosecution); (4) federalism generally tolerates state policy variation BUT right to travel + dormant Commerce Clause likely limit extraterritorial enforcement. Major contested post-Dobbs question.'
          }
        ]
      }
    }
  ]
}
