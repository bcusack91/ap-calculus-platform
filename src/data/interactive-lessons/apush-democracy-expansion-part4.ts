export const apushDemocracyExpansionPart4Data = {
  topicSlug: 'apush-democracy-expansion',
  sections: [
    {
      id: 'apushdem4-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 Democracy & Expansion

**Part 4 of 7 — The Market Revolution and the Second Party System: Data and Causation**

---

| Section |
|---------|
| 📖 Moving People and Goods |
| Mills, Wages and Immigrants in the North |
| 📌 Cotton and Slavery in the South |
| Mass Politics: Reading the Turnout Data |

> 🔑 **Key Concept:** Between about 1815 and 1848 a **market revolution** linked farms, factories and cities through canals, steamboats and railroads. It changed how Americans worked, tied the North and West together, deepened the South's dependence on cotton and slavery, and helped produce a new era of mass party politics. This part practices reading **data** and explaining **causation**. (CED Topics 4.5–4.7, 4.13; Key Concepts 4.1.I, 4.2.I–III)
      `
    },
    {
      id: 'apushdem4-transport',
      type: 'text' as const,
      content: `
## 📖 Moving People and Goods

Before 1815, it often cost more to haul goods 30 miles inland by wagon than to ship them across the Atlantic. New transportation changed that.

| Innovation | Key Facts | Main Effect |
|---|---|---|
| **National Road** | Begun in 1811 at Cumberland, Maryland; reached Wheeling on the Ohio River in 1818 | A federally funded route over the Appalachians for settlers and livestock |
| **Steamboats** | Robert Fulton's *Clermont* (1807) on the Hudson; steamboats on the Mississippi from 1811 | Upstream travel became practical; New Orleans boomed as the outlet for western crops |
| **Erie Canal** | Built by New York State, 1817–1825; 363 miles from Albany to Buffalo | Linked the Great Lakes to New York City; set off a canal-building boom |
| **Railroads** | Baltimore & Ohio began service in 1830; about 3,000 miles of track by 1840 | Faster year-round transport that did not depend on rivers |
| **Telegraph** | Samuel Morse's line from Washington to Baltimore, 1844 | Near-instant communication for business and news |

### Worked Data Reading: The Erie Canal

| Measure (Buffalo to New York City) | Before the Canal | After the Canal |
|---|---|---|
| Freight cost per ton | about \\$100 | about \\$10 |
| Travel time | about 20 days | about 8 days |

1. **Change:** Shipping costs fell by about **90%** ((100 − 10) ÷ 100 = 0.9).
2. **Effect on farmers:** Grain from Ohio and western New York could now reach eastern and European markets at a profit, so farmers shifted from growing for their own families to growing **cash crops for sale**.
3. **Effect on regions:** Trade between the Northwest and the Northeast grew, binding the two regions economically. This **east-west link** later mattered politically when the Northwest sided with the Northeast in the 1850s.
4. **Effect on cities:** New York City became the nation's leading port, and towns such as Rochester and Buffalo grew along the route.

> 💡 **Causation tip:** Infrastructure is a **cause** whose effects run in several directions: economic (cash-crop farming), demographic (migration west, growth of cities) and political (regional alliances).
      `
    },
    {
      id: 'apushdem4-north',
      type: 'text' as const,
      content: `
## Mills, Wages and Immigrants in the North

### From Household to Factory
- Samuel Slater, a British immigrant, built a water-powered spinning mill in Pawtucket, Rhode Island, in the 1790s using machine designs he had memorized.
- The **Boston Associates** built integrated mills in Waltham (1814) and then **Lowell**, Massachusetts (1820s), where raw cotton became finished cloth under one roof.
- **The Lowell system** hired young, unmarried New England farm women who lived in supervised boardinghouses. When owners cut wages, the women organized "turn-outs" (strikes) in 1834 and 1836, and in 1845 formed the Lowell Female Labor Reform Association to push for a ten-hour day.
- By the 1840s, Irish immigrants increasingly replaced the farm women in the mills at lower wages.

### What Changed for Workers

| Before | After |
|---|---|
| Artisans and apprentices who owned their tools and set their own pace | Wage workers paid by the hour or piece, working on a factory schedule |
| Work done at home, often by the whole family | Work separated from home, which encouraged the middle-class ideal of separate "spheres" for men and women |
| Masters and journeymen living and working together | A growing gap between owners and employees; early unions (legal in Massachusetts after *Commonwealth v. Hunt*, 1842) |

### Immigration
| Decade | Approximate Immigrants |
|---|---|
| 1820s | about 130,000 |
| 1830s | about 540,000 |
| 1840s | about 1.4 million |

The surge of the 1840s came mostly from **Ireland**, driven by the potato famine that began in 1845, and from the **German states**. Irish Catholic immigrants crowded into northeastern cities and often voted Democratic; their arrival fueled **nativism** and anti-Catholic violence, such as the burning of a convent near Boston in 1834.

### Western Agriculture
John Deere's steel plow (1837) broke tough prairie soil, and Cyrus McCormick's mechanical reaper (patented 1834) let one farmer harvest far more grain. Both tied western farms to eastern markets and credit.
      `
    },
    {
      id: 'apushdem4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following was a direct economic effect of the Erie Canal after 1825?',
            options: [
              'Western farmers began growing more of their crops for sale in distant markets.',
              'Southern planters shifted from cotton to wheat for the European trade.',
              'New Orleans replaced New York City as the busiest port in the nation.',
              'Congress took over the building of most canals and turnpikes in the North.'
            ],
            correctAnswer: 0,
            explanation: 'Cheap shipping made it profitable for farmers in the Great Lakes region to sell grain in eastern and European markets. New York City, not New Orleans, gained the most, and New York State, not Congress, built the canal.'
          },
          {
            question: 'The experience of the Lowell mill workers in the 1830s and 1840s best illustrates',
            options: [
              'the spread of slave labor into northern manufacturing',
              'the rise of wage labor and early organized protest by the workers',
              'the decline of factory work as farms became more mechanized',
              'the federal government\'s regulation of hours for mill workers'
            ],
            correctAnswer: 1,
            explanation: 'The young women at Lowell earned wages under factory discipline and organized strikes and a ten-hour campaign when conditions worsened. No federal law regulated mill hours in this period.'
          }
        ]
      }
    },
    {
      id: 'apushdem4-south',
      type: 'text' as const,
      content: `
## 📌 Cotton and Slavery in the South

The market revolution did not make the South more like the North. It made the South more dependent on **cotton** and **slavery**, because British and New England mills bought all the cotton the South could grow.

| Year | Cotton Production (bales, approximate) | Enslaved Population (approximate) |
|---|---|---|
| 1820 | 335,000 | 1.5 million |
| 1830 | 730,000 | 2.0 million |
| 1840 | 1.35 million | 2.5 million |

**Reading the table:**
1. Cotton output roughly **quadrupled** from 1820 to 1840, while the enslaved population grew by about 60 percent. Each enslaved worker was producing far more cotton on new, fertile land in the Deep South.
2. After the international slave trade was banned in 1808, the growth came from natural increase and a huge **domestic slave trade**. Hundreds of thousands of people were sold or forced from the Upper South (Virginia, Maryland) to the cotton lands of Alabama, Mississippi and Louisiana, often separating families.
3. By the 1830s cotton was the nation's leading export, which tied northern banks, shippers and mills to slave-grown cotton.

### Southern Society
- Most white southern families owned **no** enslaved people; many were yeoman farmers who grew food and some cotton. A small planter elite owned most enslaved people and dominated politics.
- Free Black southerners faced tightening laws, especially after **Nat Turner's** rebellion in Virginia (1831).
- Southern leaders increasingly defended slavery as a "positive good" rather than a "necessary evil," a shift you will study in the reform and sectional-crisis topics.

> 🔑 **AP Connection:** For a comparison prompt, avoid "the North was modern and the South was backward." The South was deeply part of the market economy; its prosperity simply rested on enslaved labor and an export crop rather than on factories and wage labor.
      `
    },
    {
      id: 'apushdem4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What canal, completed in 1825, linked the Great Lakes to the Hudson River and New York City?

2) What Massachusetts mill town hired young New England farm women who later organized strikes in 1834 and 1836?

3) What 1842 Massachusetts court case held that labor unions were not illegal conspiracies? (Answer in the form "X v. Y".)

Use the exact historical name.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Erie Canal', 'Lowell', 'Commonwealth v. Hunt'],
        hint1: 'It ran 363 miles from Albany to Buffalo.',
        hint2: 'Named after the Boston merchant Francis Cabot Lowell.',
        hint3: 'In Massachusetts cases the state is called "Commonwealth"; the defendant was named Hunt.',
        explanation: 'The Erie Canal cut freight costs by about 90%. The Lowell mills used the boardinghouse system for women workers, who struck when wages were cut. Commonwealth v. Hunt (1842) recognized the legality of unions in Massachusetts.'
      }
    },
    {
      id: 'apushdem4-politics',
      type: 'text' as const,
      content: `
## Mass Politics: Reading the Turnout Data

### How Democracy Expanded for White Men
- Most states dropped **property requirements** for white male voters between about 1810 and 1840; new western states entered with few or no restrictions. A few lagged: Rhode Island kept its requirement until the Dorr Rebellion (1841–42) forced change.
- More offices became **elected** rather than appointed, and by 1832 every state but South Carolina chose presidential electors by **popular vote**.
- Parties replaced the congressional caucus with **national nominating conventions** (first held by the Anti-Masonic Party in 1831).

### How It Contracted for Others
| Group | Change |
|---|---|
| Free Black men | New Jersey (1807), New York (1821, a \\$250 property requirement for Black voters only) and Pennsylvania (1838) restricted or ended their voting |
| Women | New Jersey ended the limited voting by property-owning women in 1807 |
| Native Americans | Not citizens; removal pushed the southeastern nations west of the Mississippi |

### Data: Presidential Election Turnout (eligible voters)

| Election | Turnout | Context |
|---|---|---|
| 1824 | about 27% | Four candidates, all Democratic-Republicans; the House chose John Quincy Adams |
| 1828 | about 58% | Jackson's supporters organized a national campaign |
| 1836 | about 58% | Van Buren (Democrat) against several Whig candidates |
| 1840 | about 80% | The "Log Cabin" campaign of Whig William Henry Harrison |

**Worked analysis:**
1. **Change:** Turnout roughly **tripled** from 1824 to 1840.
2. **Causes:** wider suffrage, popular choice of electors, and above all **competitive parties** that organized rallies, newspapers and conventions to get voters out.
3. **Evidence that parties mattered:** the biggest jump came in 1840, when the Whigs copied Democratic campaign methods and both parties competed in nearly every state.

### The Second Party System (about 1834–1854)

| | **Democrats** (Jackson, Van Buren) | **Whigs** (Clay, Webster) |
|---|---|---|
| View of federal power | Limited; suspicious of banks, corporations and special privilege | Active; government should promote economic growth |
| Economic program | Opposed the national bank and federally funded internal improvements; favored lower tariffs | Clay's American System: national bank, protective tariff, internal improvements |
| Typical supporters | Southern and western farmers, urban workers, Irish Catholic immigrants | Merchants and manufacturers, commercial farmers, evangelical Protestants, many southern planters |
| Key moments | Bank veto (1832), removal of federal deposits to state "pet banks" (1833), Specie Circular (1836) | Formed in 1833–34 against "King Andrew"; won the presidency in 1840 |

The **Panic of 1837**, which followed the Specie Circular, a tightening of British credit and falling cotton prices, brought a long depression. It helped the Whigs win in 1840 and led Van Buren to create an **Independent Treasury** (1840) to hold federal funds outside private banks.
      `
    },
    {
      id: 'apushdem4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

| Presidential Election | Turnout of Eligible Voters (approximate) |
|---|---|
| 1824 | 27% |
| 1828 | 58% |
| 1836 | 58% |
| 1840 | 80% |
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following most directly contributed to the change shown in the table?',
            options: [
              'The adoption of a constitutional amendment granting all men the vote',
              'The rise of competitive parties that mobilized voters through campaigns',
              'The decision of Congress to choose presidents through national caucuses',
              'The expansion of voting rights to women in most of the western states'
            ],
            correctAnswer: 1,
            explanation: 'Democrats and then Whigs built mass organizations, newspapers and rallies that brought voters to the polls, along with state-level removal of property requirements. No amendment changed suffrage, the caucus system was abandoned, and women could not vote.'
          },
          {
            question: 'A historian arguing that the trend in the table overstates how democratic the era was would most likely point to',
            options: [
              'the high turnout in the election of 1840',
              'the spread of national nominating conventions',
              'new limits on voting by free Black men',
              'the popular election of presidential electors'
            ],
            correctAnswer: 2,
            explanation: 'While turnout among white men soared, states such as New York and Pennsylvania restricted or ended voting by free Black men, and women and Native Americans remained excluded. The other options are evidence of democratic expansion.'
          }
        ]
      }
    }
  ]
}
