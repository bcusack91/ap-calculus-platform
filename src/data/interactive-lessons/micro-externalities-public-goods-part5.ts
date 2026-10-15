export const microExternalitiesPublicGoodsPart5Data = {
  topicSlug: 'micro-externalities-public-goods',
  sections: [
    {
      id: 'microext5-intro',
      type: 'text' as const,
      content: `
# 💰 Externalities & Public Goods

**Part 5 of 7 — Public Goods, Common Resources and Club Goods in Depth**

---

| Section |
|---------|
| 📖 Two Questions That Classify Any Good |
| Why Markets Underprovide Public Goods |
| Common Resources: Overuse as an Externality |
| Club Goods, Congestion and Common Mix-Ups |

> 🔑 **Key Concept:** Whether a market handles a good well depends on two properties. **Excludability** decides whether sellers can make people pay. **Rivalry** decides whether one person's use leaves less for others. Private goods have both and markets handle them well. Public goods have neither, so markets **underprovide** them. Common resources are rival but not excludable, so they are **overused**.
      `
    },
    {
      id: 'microext5-classify',
      type: 'text' as const,
      content: `
## 📖 Two Questions That Classify Any Good

1. **Is it excludable?** Can the seller keep people who do not pay from using it, at a reasonable cost?
2. **Is it rival?** Does one person's use reduce the amount available to others?

| Good | Excludable? | Rival? | Type |
|---|---|---|---|
| A slice of pizza | Yes | Yes | **Private good** |
| National defense | No | No | **Public good** |
| A city fireworks display | No (anyone nearby can watch) | No | **Public good** |
| Mosquito spraying across a town | No | No | **Public good** |
| A published scientific discovery | No | No | **Public good** |
| Fish in international waters | No | Yes | **Common resource** |
| An unmetered underground aquifer shared by farms | No | Yes | **Common resource** |
| A streaming video subscription | Yes | No | **Club good** |
| An uncrowded toll road | Yes | No | **Club good** |
| A seat in a public school classroom | Yes | Yes | **Private good** (provided by government) |

### Notes on Tricky Cases
- **Excludability is about cost.** A city could in theory screen off every view of a fireworks show, but not at a reasonable cost, so the show is nonexcludable.
- **Who provides it does not matter.** A public school seat is rival (classrooms fill up) and excludable (enrollment rules), so it is a private good even though the government supplies it.
- **Nonrival does not mean unlimited.** A lighthouse's beam is nonrival because one more ship seeing it does not dim it for the others.
      `
    },
    {
      id: 'microext5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is both nonrival and nonexcludable?',
            options: [
              'A city\'s fireworks display',
              'A seat in a public school',
              'Fish in international waters',
              'A subscription music service'
            ],
            correctAnswer: 0,
            explanation: 'Anyone nearby can watch the fireworks, and one more viewer does not spoil the show for others. A school seat is rival and excludable, ocean fish are rival, and a subscription service can lock out people who do not pay.'
          },
          {
            question: 'A city runs a swimming pool that charges an entry fee, and on hot days it is packed. How should an economist classify a swim at this pool?',
            options: [
              'A private good',
              'A public good',
              'A common resource',
              'A club good'
            ],
            correctAnswer: 0,
            explanation: 'The fee makes it excludable, and on crowded days each extra swimmer leaves less room for others, so it is rival as well. Being run by the city does not make it a public good, and a club good would need to be nonrival.'
          }
        ]
      }
    },
    {
      id: 'microext5-freerider',
      type: 'text' as const,
      content: `
## Why Markets Underprovide Public Goods

### A Streetlight for Three Neighbors
A dark corner needs a streetlight that costs **\\$60** to install. Three neighbors would benefit:

| Neighbor | Value of the streetlight |
|---|---|
| Ana | \\$40 |
| Ben | \\$30 |
| Cal | \\$20 |
| **Total** | **\\$90** |

Because the light is **nonrival**, all three enjoy the same light at once, so its **social benefit is the sum** of their values: \\$90. That is more than the \\$60 cost, so building it is efficient.

But no one values it at \\$60 alone, so no one buys it alone. If they try to split the cost voluntarily, each one has a reason to claim the light is worth little to them, hoping the others will pay and they can enjoy it for free. That is the **free-rider problem**: because the light is **nonexcludable**, people who do not pay cannot be kept from benefiting, so payments fall short of the value the good creates.

### What Fixes It
- **Government provision funded by taxes.** A \\$20 tax on each neighbor builds the light, and each is better off: Ana by \\$20, Ben by \\$10, Cal by \\$0.
- **Bundling with something excludable.** Broadcast radio is nonrival and nonexcludable, so stations sell something they **can** charge for: advertising time.

> 🔑 **AP Connection:** For a public good, the marginal social benefit of a unit is the **sum of every user's marginal benefit**, because everyone consumes the same unit. Markets add up only what buyers will actually pay, so they produce less than the efficient amount, or nothing.
      `
    },
    {
      id: 'microext5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Good** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A town\'s tornado warning siren is a ___',
            options: ['public good', 'private good', 'club good', 'common resource']
          },
          {
            label: 'Trees in an open forest where anyone may cut firewood are a ___',
            options: ['common resource', 'public good', 'club good', 'private good']
          },
          {
            label: 'A members-only gym that is rarely crowded is a ___',
            options: ['club good', 'public good', 'private good', 'common resource']
          },
          {
            label: 'A bus ticket for a seat on a full city bus is a ___',
            options: ['private good', 'club good', 'public good', 'common resource']
          }
        ],
        correctAnswers: ['public good', 'common resource', 'club good', 'private good'],
        hint1: 'For each good, ask two questions: can non-payers be kept out, and does one person\'s use leave less for others?',
        hint2: 'Wood one person cuts is wood no one else can cut, but no one can be kept out of an open forest.',
        hint3: 'On a full bus, your seat is a seat someone else cannot have.',
        explanation: 'Everyone in town hears the siren and one more listener takes nothing away, so it is a public good. Open-forest trees are rival but nonexcludable, a common resource. An uncrowded members-only gym is excludable but nonrival, a club good. A seat on a full bus is excludable and rival, a private good, even if a city agency runs the bus.'
      }
    },
    {
      id: 'microext5-commons',
      type: 'text' as const,
      content: `
## Common Resources: Overuse as an Externality

A lake is open to any fishing boat. A boat costs **\\$500 a day** to run, and fish sell for **\\$100 a ton**. More boats catch more fish in total, but each new boat crowds the others:

| Boats | Total daily catch (tons) | Extra catch from the last boat | Catch per boat | Revenue per boat | Net value of the lake (total revenue − total boat cost) |
|---|---|---|---|---|---|
| 1 | 10 | 10 | 10 | \\$1,000 | \\$500 |
| 2 | 18 | 8 | 9 | \\$900 | \\$800 |
| 3 | 24 | 6 | 8 | \\$800 | **\\$900** |
| 4 | 28 | 4 | 7 | \\$700 | \\$800 |
| 5 | 30 | 2 | 6 | \\$600 | \\$500 |
| 6 | 30 | 0 | 5 | \\$500 | \\$0 |

### The Efficient Number: 3 Boats
Add a boat only while its **extra** catch is worth more than its \\$500 cost. The third boat adds 6 tons (\\$600); the fourth adds only 4 tons (\\$400). The lake's net value peaks at **\\$900** with 3 boats.

### What Open Access Produces: 6 Boats
A new owner deciding whether to enter compares **their own** catch, the average (\\$700 for a fourth boat), with \\$500. They enter, even though the fourth boat adds just \\$400 of fish to the total, because the other \\$300 of their catch is fish the other boats no longer get. Boats keep entering until revenue per boat falls to cost, at 6 boats, and the lake's net value falls to **\\$0**. This is the **tragedy of the commons**: each user imposes a cost on the others that no one pays for, which is a **negative externality**.

### Three Fixes

| Fix | How it works here |
|---|---|
| **Property rights** | One owner controls the lake and allows only the boats that add more than they cost: 3 |
| **Quotas or licenses** | Authorities cap the fleet at 3 boats or cap the catch at 24 tons |
| **User fees** | A fee of \\$250 a boat-day: a third boat still earns \\$800 − \\$750 = \\$50, but a fourth would earn \\$700 − \\$750, a loss, so entry stops at 3 |

Each fix makes users pay attention to the cost they impose on others, exactly as a Pigouvian tax does for pollution.
      `
    },
    {
      id: 'microext5-club',
      type: 'text' as const,
      content: `
## Club Goods, Congestion and Common Mix-Ups

### Club Goods
A streaming service is **excludable but nonrival**: one more subscriber costs almost nothing to serve. The firm charges a price to cover its large fixed costs, which means some people who value the service at more than its near-zero marginal cost do not subscribe. That is a small inefficiency, but the market still provides the good, because the seller can exclude non-payers.

### Congestion Changes Rivalry
- At **3 a.m.**, one more car on a free highway slows no one: the road is **nonrival**.
- At **5 p.m.**, each extra car slows every other driver: the road is **rival**. A free, crowded road behaves like a **common resource** and is overused.
- **Congestion pricing**, a toll that is higher at rush hour, works like the lake's user fee. It makes drivers weigh the delay they impose on others.

### Common Mix-Ups

| Claim | Correct version |
|---|---|
| "A public good is anything the government provides." | Public goods are defined by **nonrivalry and nonexcludability**, not by who supplies them. |
| "Common resources are underused because no one owns them." | They are **overused**: no one can be excluded, and each user ignores the cost imposed on others. |
| "The free-rider problem means people are dishonest." | It is a **rational** response to nonexcludability; paying does not change whether you get the good. |
| "Markets never supply nonrival goods." | Markets supply **club goods** because sellers can exclude; the trouble comes when a good is also **nonexcludable**. |
      `
    },
    {
      id: 'microext5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Four neighbors value a new streetlight at \\$25, \\$20, \\$15 and \\$10, and it costs \\$50 to install. If the neighbors rely on voluntary contributions, which outcome is most likely?',
            options: [
              'It is not built, although building it would be efficient',
              'It is built, and each neighbor pays an equal share of the cost',
              'It is built by the one neighbor who values it most highly',
              'It is not built, because building it would be inefficient'
            ],
            correctAnswer: 0,
            explanation: 'The light\'s total value is \\$70, more than its \\$50 cost, so building it is efficient. But no single neighbor values it at \\$50, and each hopes the others will pay, so voluntary payments fall short. That free-rider problem is why such goods are often provided through taxes.'
          },
          {
            question: 'In the open-access lake, a fourth boat would catch 7 tons but add only 4 tons to the lake\'s total. Why does it enter anyway?',
            options: [
              'It ignores how it lowers the other boats\' catch',
              'Its catch is worth less than the cost of running it',
              'The total catch rises by more than the boat costs to run',
              'The lake\'s owner charges too small a fee for each boat-day'
            ],
            correctAnswer: 0,
            explanation: 'The fourth boat\'s own catch is worth \\$700, more than its \\$500 cost, so it enters, but 3 of its 7 tons are fish the other boats no longer catch. That cost falls on others, which is the externality behind overuse. The lake has no owner, and the fourth boat adds only \\$400 to the total.'
          },
          {
            question: 'A highway is free to use. At 3 a.m. it is nearly empty, and at 5 p.m. traffic barely moves. Which statement is accurate?',
            options: [
              'At rush hour, each driver slows others, so the free road is overused',
              'At night, each driver slows others, so a toll then would raise efficiency',
              'At any hour it is a private good, because drivers could be excluded',
              'At any hour it is a public good, so a toll could never raise efficiency'
            ],
            correctAnswer: 0,
            explanation: 'A crowded road is rival: each extra car imposes delay on everyone else, and with no price the road is overused like a common resource, which is why rush-hour tolls can improve efficiency. An empty road at night is nonrival, so a toll then would only turn away drivers who cost no one anything.'
          }
        ]
      }
    }
  ]
}
