import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Reagan to the Present (AP U.S. History, Period 9, c. 1980–present).
 * Registry key / DB Topic.slug: 'apush-reagan-to-present'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot
 * and the sibling humanities lessons (apes-climate-change, englang-rhetorical-devices):
 * teach (text) → interactive check (multiple-choice / dropdown-select / input-boxes) →
 * worked DBQ/SAQ-style applications → Exit Quiz.
 * Concept-and-chronology topic, so checks favor multiple-choice + dropdown, with a few
 * quantitative input-boxes (years, election margins, economic figures, vote counts).
 * Every fact, date, and figure has been verified. LaTeX uses DOUBLED backslashes
 * (template-literal strings); literal dollar amounts in prose are escaped as \$.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'apush-reagan-to-present',
    sections: [
      {
        id: 'r2p1-intro',
        type: 'text' as const,
        content: `# 🦅 Reagan to the Present

**Part 1 of 7 — The Conservative Resurgence & the Reagan Revolution**

---

### Topics in This Part

| Section |
|---------|
| The Roots of the New Right |
| The Election of 1980 |
| Reaganomics: Supply-Side Economics |
| The Reagan Coalition |

> 🔑 **Key Concept (APUSH Period 9, c. 1980–present):** The dominant political story after 1980 is the **rise of modern conservatism** — a coalition of free-market economic conservatives, religious "values" voters, and Cold War hawks. The exam rewards students who can trace this realignment and weigh both its achievements and its costs.`,
      },
      {
        id: 'r2p1-new-right',
        type: 'text' as const,
        content: `## The Roots of the New Right

By the late 1970s, a **conservative coalition** was gathering strength in reaction to the social changes and economic troubles of the 1960s and '70s. Several streams flowed together:

| Stream | What they wanted | Drawn from |
|--------|------------------|-----------|
| **Economic conservatives** | Lower taxes, less regulation, smaller government | Business leaders, suburban professionals |
| **Religious / Social conservatives** | Opposition to abortion, defense of "family values," prayer in schools | The **Moral Majority** (founded 1979 by Rev. Jerry Falwell), Sunbelt evangelicals |
| **Cold War hawks** | A tougher, rearmed stance against the Soviet Union | Neoconservatives, defense-minded voters |

Two background forces set the stage:

- **Stagflation** — the painful combination of high *inflation* and high *unemployment* through the 1970s — discredited the older liberal economic playbook.
- A **population shift to the Sunbelt** (the South and Southwest) moved electoral weight toward more conservative, anti-tax regions.

> 💡 **Memory hook:** The New Right rested on a **"three-legged stool"** — economic, social/religious, and national-security conservatism. A candidate needed all three legs to win.`,
      },
      {
        id: 'r2p1-q-newright',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which best describes the "three-legged stool" of the New Right coalition that powered the conservative resurgence?',
              options: [
                'Economic free-marketers, religious/social conservatives, and Cold War defense hawks',
                'Labor unions, civil-rights activists, and environmentalists',
                'Northern industrialists, urban machines, and immigrants',
                'Progressives, populists, and socialists',
              ],
              correctAnswer: 0,
              explanation: 'The modern conservative coalition fused three groups: those who wanted lower taxes and deregulation, those who wanted to defend traditional social/religious values (e.g., the Moral Majority), and those who wanted a harder line against the USSR.',
            },
            {
              question: 'The economic problem of the 1970s that most discredited older liberal policy and helped conservatives was:',
              options: [
                'Stagflation — simultaneous high inflation and high unemployment',
                'A stock-market boom',
                'A balanced federal budget',
                'Deflation and falling prices',
              ],
              correctAnswer: 0,
              explanation: '"Stagflation" combined stagnant growth/high unemployment with high inflation. Traditional Keynesian tools struggled to fix both at once, opening the door to supply-side alternatives.',
            },
          ],
        },
      },
      {
        id: 'r2p1-1980',
        type: 'text' as const,
        content: `## The Election of 1980

In **1980**, Republican **Ronald Reagan** — former actor and two-term governor of California — challenged incumbent Democrat **Jimmy Carter**. Carter was weighed down by:

- A sluggish economy with double-digit inflation
- The ongoing **Iran Hostage Crisis** (52 Americans held in Tehran since November 1979)
- A general sense of national "malaise"

Reagan's optimistic message — "Are you better off than you were four years ago?" — and his promise to cut taxes and restore American strength produced a **landslide**. Reagan won **44 states** and **489 electoral votes** to Carter's **49**.

> 🔑 **Why it matters:** 1980 was a **realigning election**. It brought "**Reagan Democrats**" — working-class whites who had traditionally voted Democratic — into the Republican fold, and it signaled the end of the New Deal liberal era's dominance.`,
      },
      {
        id: 'r2p1-drill-1980',
        type: 'input-boxes' as const,
        content: `**The Numbers of 1980** 🧮

Recall the figures from Reagan's 1980 landslide over Carter.

**1)** In what year was Reagan first elected president?
**2)** How many electoral votes did Reagan win? *(he won 489)*
**3)** How many electoral votes did Carter receive? *(out of 538 total)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1980', '489', '49'],
          hint1: 'The election that ended Carter\'s single term took place in 1980.',
          hint2: 'Reagan carried 44 states; his electoral total was 489.',
          hint3: 'There are 538 electoral votes in total. If Reagan got 489, Carter got the small remainder: $538 - 489 = 49$.',
          explanation: 'In the 1980 landslide, Reagan won 489 electoral votes (44 states) to Carter\'s 49. The total is 538, and $489 + 49 = 538$. ✓',
        },
      },
      {
        id: 'r2p1-reaganomics',
        type: 'text' as const,
        content: `## Reaganomics: Supply-Side Economics

Reagan's economic program — nicknamed **"Reaganomics"** — was built on **supply-side** (or "trickle-down") theory. The idea: cut taxes, especially on high earners and businesses, so they will invest and produce more, expanding the overall economy and eventually raising government revenue.

The four pillars were:

1. **Tax cuts** — The **Economic Recovery Tax Act of 1981** slashed income-tax rates roughly 25% across the board.
2. **Deregulation** — Reducing federal rules on business, banking, and industry.
3. **Reduced domestic spending** — Cuts to social programs (the "social safety net").
4. **Tight money** — Support for the Federal Reserve (under Paul Volcker) raising interest rates to crush inflation.

**Results were mixed:**

| Achievement | Cost |
|-------------|------|
| Inflation fell from ~13% (1980) to ~4% (mid-1980s) | The federal **deficit and national debt ballooned** |
| Long economic expansion after the 1981–82 recession | The **gap between rich and poor widened** |

> ⚠️ **Common exam trap:** Despite all the talk of "smaller government," federal *spending rose* under Reagan (driven by a defense buildup), and the **national debt nearly tripled**. Tax cuts plus a military buildup, without matching spending cuts, produced huge deficits.`,
      },
      {
        id: 'r2p1-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Concept** 🔽

Reagan's domestic program had several signature features. Choose the term that fits each description.`,
        exercise: {
          dropdowns: [
            { label: 'Cutting tax rates so businesses invest, growing the whole economy:', options: ['Supply-side economics', 'Keynesian stimulus', 'Mercantilism', 'Greenback policy'] },
            { label: 'The 1979 religious-conservative organization led by Jerry Falwell:', options: ['Moral Majority', 'New Deal coalition', 'Students for a Democratic Society', 'The Grange'] },
            { label: 'Working-class whites who left their party to vote for Reagan:', options: ['Reagan Democrats', 'Dixiecrats', 'Mugwumps', 'Copperheads'] },
          ],
          correctAnswers: ['Supply-side economics', 'Moral Majority', 'Reagan Democrats'],
          hint1: 'The "trickle-down" theory at the core of Reaganomics is supply-*side* economics.',
          hint2: 'Falwell\'s 1979 group mobilized evangelical "values" voters; its name suggests a moral *majority*.',
          hint3: 'The crossover voters who realigned toward the GOP are named directly for the president they backed.',
          explanation: 'Supply-side economics drove Reaganomics; the Moral Majority (1979, Falwell) mobilized the religious right; and "Reagan Democrats" were the crossover working-class whites who realigned toward the Republican Party.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'apush-reagan-to-present',
    sections: [
      {
        id: 'r2p2-intro',
        type: 'text' as const,
        content: `# 🦅 Reagan to the Present

**Part 2 of 7 — The End of the Cold War**

---

> 🔑 **The Big Question:** How did a Cold War that had defined U.S. foreign policy for over 40 years come to a sudden, largely *peaceful* end between 1989 and 1991? Historians still debate how much credit belongs to Reagan's pressure versus Soviet internal collapse and reform — and a strong APUSH answer weighs **both**.`,
      },
      {
        id: 'r2p2-reagan-cw',
        type: 'text' as const,
        content: `## Reagan's Cold War Strategy

Reagan rejected the 1970s policy of **détente** (easing tensions) in favor of confrontation. Early on he called the Soviet Union an **"evil empire"** (1983) and launched the largest peacetime **military buildup** in U.S. history.

Key moves:

- **Strategic Defense Initiative (SDI / "Star Wars," 1983)** — a proposed (and never-built) space-based missile-defense shield. Even unrealized, it pressured the USSR to spend money it didn't have to keep up.
- **Reagan Doctrine** — backing anti-communist forces around the globe (e.g., the *mujahideen* in Afghanistan, the *Contras* in Nicaragua).
- **Massive defense budgets** — straining the weaker Soviet economy in an arms race it could not win.

Then the tone shifted. After **Mikhail Gorbachev** became Soviet leader in **1985**, Reagan met him in a series of summits and negotiated real arms reductions.

> 💡 **Key treaty:** The **INF Treaty (Intermediate-Range Nuclear Forces, 1987)** was the first agreement to *eliminate* an entire class of nuclear missiles — a genuine breakthrough.`,
      },
      {
        id: 'r2p2-q-cw',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Strategic Defense Initiative ("Star Wars") was significant primarily because it:',
              options: [
                'Pressured the USSR into a costly arms race it could not economically sustain, even though the shield was never built',
                'Successfully shot down hundreds of Soviet missiles in tests',
                'Was a joint U.S.–Soviet space program',
                'Ended the Vietnam War',
              ],
              correctAnswer: 0,
              explanation: 'SDI was never deployed, but the threat of an expensive new arms race put added strain on the already-struggling Soviet economy — part of the pressure that helped bring the USSR to the negotiating table.',
            },
            {
              question: 'The 1987 INF Treaty between Reagan and Gorbachev was notable because it:',
              options: [
                'Was the first treaty to eliminate an entire class of nuclear missiles',
                'Started the Cold War',
                'Created the United Nations',
                'Reunified Germany',
              ],
              correctAnswer: 0,
              explanation: 'The Intermediate-Range Nuclear Forces (INF) Treaty was the first arms-control deal to abolish a whole category of nuclear weapons rather than merely cap them.',
            },
          ],
        },
      },
      {
        id: 'r2p2-bridge',
        type: 'text' as const,
        content: `## From Confrontation to Cooperation

It is tempting to imagine the Cold War ended in a single dramatic moment, but the reality was a *process*. Reagan's hard line in his first term gave way to genuine diplomacy in his second, once a reform-minded partner emerged in Moscow.

The decisive turn came not from American missiles but from **changes inside the Soviet Union itself** — which is where our next section turns.`,
      },
      {
        id: 'r2p2-gorbachev',
        type: 'text' as const,
        content: `## Gorbachev and the Soviet Collapse

The deeper cause of the Cold War's end lay **inside the USSR**. Facing a stagnant economy, Soviet leader **Mikhail Gorbachev** introduced two landmark reforms:

| Reform | Meaning | Effect |
|--------|---------|--------|
| **Glasnost** | "Openness" — relaxing censorship, allowing criticism | Unleashed long-suppressed dissent |
| **Perestroika** | "Restructuring" — limited free-market reforms | Failed to fix the economy; raised expectations |

These reforms, plus Gorbachev's decision **not** to use force to prop up communist governments in Eastern Europe, let the Soviet bloc unravel:

- **1989** — A wave of mostly peaceful revolutions swept Eastern Europe. The **Berlin Wall fell on November 9, 1989**, the iconic image of communism's collapse.
- **1990** — **Germany was reunified**.
- **December 1991** — The **Soviet Union formally dissolved** into 15 independent republics. The Cold War was over.

> ⚠️ **Nuance the readers want:** Don't credit Reagan *alone*. The arms-race pressure mattered, but so did Soviet economic failure and Gorbachev's own reformist choices. The best essays argue **multiple causation**.`,
      },
      {
        id: 'r2p2-drill-dates',
        type: 'input-boxes' as const,
        content: `**Cold War Endgame Timeline** 🧮

Enter the year for each milestone in the Cold War's end.

**1)** Gorbachev becomes leader of the Soviet Union
**2)** The Berlin Wall falls
**3)** The Soviet Union formally dissolves`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1985', '1989', '1991'],
          hint1: 'Gorbachev rose to power in the mid-1980s, a few years into Reagan\'s presidency.',
          hint2: 'The Wall came down in November of the year the Eastern European revolutions swept through — 1989.',
          hint3: 'The USSR dissolved in December, two years after the Wall fell.',
          explanation: 'Gorbachev took power in 1985; the Berlin Wall fell on November 9, 1989; and the Soviet Union dissolved in December 1991. These three dates anchor the end-of-Cold-War narrative.',
        },
      },
      {
        id: 'r2p2-recap',
        type: 'text' as const,
        content: `## Two Words You Must Not Mix Up

The two Russian reform terms — **glasnost** and **perestroika** — appear constantly on the exam, and students routinely swap them. One concerns **speech and ideas**; the other concerns the **economy**. Lock in the difference before moving on.`,
      },
      {
        id: 'r2p2-dropdown-reform',
        type: 'dropdown-select' as const,
        content: `**Glasnost vs. Perestroika** 🔽

Sort Gorbachev's two reforms.`,
        exercise: {
          dropdowns: [
            { label: '"Openness" — easing censorship and allowing public criticism:', options: ['Glasnost', 'Perestroika', 'Détente', 'Containment'] },
            { label: '"Restructuring" — introducing limited free-market economic reforms:', options: ['Perestroika', 'Glasnost', 'Brinkmanship', 'Massive retaliation'] },
            { label: 'The Cold War strategy Reagan rejected when he took office:', options: ['Détente', 'Glasnost', 'Perestroika', 'The Reagan Doctrine'] },
          ],
          correctAnswers: ['Glasnost', 'Perestroika', 'Détente'],
          hint1: 'Glasnost = "glass," think transparency / openness.',
          hint2: 'Perestroika = re-structuring the economy.',
          hint3: 'Reagan replaced the 1970s easing-of-tensions policy with a more confrontational stance early on.',
          explanation: 'Glasnost = openness (free speech, less censorship); perestroika = economic restructuring. Reagan abandoned the 1970s policy of détente in favor of confrontation, only to negotiate seriously with Gorbachev later in the decade.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'apush-reagan-to-present',
    sections: [
      {
        id: 'r2p3-intro',
        type: 'text' as const,
        content: `# 🦅 Reagan to the Present

**Part 3 of 7 — The Bush Years & the "New World Order" (1989–1993)**

---

> 🔑 **The Setup:** Reagan's vice president, **George H. W. Bush**, won the **1988** election and inherited a world transformed. With the Cold War ending, Bush spoke of a **"new world order"** — and faced the first major post–Cold War test in the Persian Gulf.`,
      },
      {
        id: 'r2p3-bush',
        type: 'text' as const,
        content: `## George H. W. Bush at Home

Bush won 1988 partly on Reagan's coattails and a famous campaign pledge:

> **"Read my lips: no new taxes."**

But soaring deficits forced his hand. In **1990**, Bush agreed to a budget deal that **raised taxes** — breaking the pledge and alienating conservatives. Combined with an early-1990s **recession**, this badly damaged him at home.

Other domestic notes:

- **Americans with Disabilities Act (ADA, 1990)** — a landmark civil-rights law banning discrimination against people with disabilities. A major bipartisan achievement.
- Two Supreme Court appointments, including the contentious **Clarence Thomas** confirmation (1991), marked by **Anita Hill's** sexual-harassment testimony.

> ⚠️ **Exam trap:** Don't confuse the two Bushes. **George H. W. Bush** (the elder, "Bush 41") served 1989–1993 — Gulf War, ADA, "read my lips." His son **George W. Bush** ("Bush 43") served 2001–2009 — 9/11, Iraq War. Keep them straight.`,
      },
      {
        id: 'r2p3-q-bush',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which event most damaged George H. W. Bush with conservative voters before the 1992 election?',
              options: [
                'Breaking his "read my lips: no new taxes" pledge by agreeing to a 1990 tax increase',
                'Signing the Americans with Disabilities Act',
                'Winning the Gulf War',
                'Appointing Clarence Thomas to the Supreme Court',
              ],
              correctAnswer: 0,
              explanation: 'Facing huge deficits, Bush agreed to raise taxes in 1990, breaking his signature 1988 campaign promise. Many conservatives never forgave him, weakening him heading into 1992.',
            },
            {
              question: 'The Americans with Disabilities Act (1990) is best categorized as:',
              options: [
                'A landmark civil-rights law prohibiting discrimination against people with disabilities',
                'A tax-cut measure',
                'A foreign-policy treaty',
                'A military spending bill',
              ],
              correctAnswer: 0,
              explanation: 'The ADA extended civil-rights protections — in employment, public accommodations, and access — to Americans with disabilities. It was one of Bush\'s most enduring domestic achievements.',
            },
          ],
        },
      },
      {
        id: 'r2p3-gulf',
        type: 'text' as const,
        content: `## The Persian Gulf War (1990–1991)

In **August 1990**, Iraqi dictator **Saddam Hussein** invaded and annexed neighboring oil-rich **Kuwait**. Bush organized a broad **international coalition** under United Nations authorization to reverse the aggression.

- **Operation Desert Shield** — the defensive buildup of forces in Saudi Arabia (1990).
- **Operation Desert Storm** — the offensive (January–February **1991**) that drove Iraq out of Kuwait in roughly six weeks.

The war featured a devastating air campaign followed by a **100-hour ground war**. U.S. casualties were strikingly low. Bush chose **not** to march on Baghdad or remove Saddam — a decision later debated.

> 💡 **Why it mattered:** The Gulf War was widely seen as proof of a confident, post-Vietnam American military, and it briefly pushed Bush's approval ratings near 90%. Yet a sour economy meant those ratings didn't save him in 1992.`,
      },
      {
        id: 'r2p3-dropdown-gulf',
        type: 'dropdown-select' as const,
        content: `**Gulf War Sequence** 🔽

Place these Persian Gulf War facts.`,
        exercise: {
          dropdowns: [
            { label: 'The Iraqi dictator who invaded Kuwait in 1990:', options: ['Saddam Hussein', 'Mikhail Gorbachev', 'Manuel Noriega', 'Slobodan Milošević'] },
            { label: 'The defensive buildup of U.S. forces in Saudi Arabia:', options: ['Operation Desert Shield', 'Operation Desert Storm', 'Operation Overlord', 'Operation Rolling Thunder'] },
            { label: 'The 1991 offensive that expelled Iraq from Kuwait:', options: ['Operation Desert Storm', 'Operation Desert Shield', 'The Bay of Pigs', 'The Tet Offensive'] },
          ],
          correctAnswers: ['Saddam Hussein', 'Operation Desert Shield', 'Operation Desert Storm'],
          hint1: 'The Iraqi leader who seized Kuwait shares his first name with the later target of the 2003 Iraq War.',
          hint2: 'The defensive "shield" came first, before the offensive "storm."',
          hint3: 'The fast 1991 offensive shares the word "storm."',
          explanation: 'Saddam Hussein invaded Kuwait (Aug. 1990). Desert *Shield* was the defensive buildup; Desert *Storm* (Jan.–Feb. 1991) was the offensive that liberated Kuwait in about six weeks.',
        },
      },
      {
        id: 'r2p3-anchor',
        type: 'text' as const,
        content: `## Anchoring the Gulf War in Time

The Persian Gulf War unfolded fast — barely seven months from invasion to liberation. Anchor it relative to the events you already know: it came **right after** the Cold War's collapse (Berlin Wall 1989) and **before** the 1992 election that cost Bush his job. Fix the two key years in mind.`,
      },
      {
        id: 'r2p3-drill-gulf',
        type: 'input-boxes' as const,
        content: `**Gulf War Years** 🧮

**1)** In what year did Iraq invade Kuwait?
**2)** In what year was Operation Desert Storm launched, expelling Iraq?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1990', '1991'],
          hint1: 'The invasion of Kuwait came in August, two years after the Berlin Wall fell.',
          hint2: 'Desert Storm followed the invasion the next year, in January–February.',
          hint3: 'Think 1990 (the August invasion) and 1991 (the early-year liberation) — back-to-back years.',
          explanation: 'Iraq invaded Kuwait in August 1990; Operation Desert Storm liberated it in early 1991. The whole conflict spanned 1990–1991.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'apush-reagan-to-present',
    sections: [
      {
        id: 'r2p4-intro',
        type: 'text' as const,
        content: `# 🦅 Reagan to the Present

**Part 4 of 7 — The Clinton Era & 1990s Politics (1993–2001)**

---

> 🔑 **The Shift:** Democrat **Bill Clinton** won in **1992** as a centrist "**New Democrat**," but he governed alongside a resurgent conservative Congress after 1994. The decade became defined by **divided government**, a roaring economy, globalization, and bitter partisanship — culminating in impeachment.`,
      },
      {
        id: 'r2p4-clinton',
        type: 'text' as const,
        content: `## Clinton and the "New Democrats"

In **1992**, Clinton defeated incumbent George H. W. Bush in a **three-way race** that also featured independent **H. Ross Perot**, who won an impressive **~19% of the popular vote** (the strongest third-party showing since 1912). Perot's focus on the deficit pulled votes from Bush.

Clinton positioned himself as a **centrist "New Democrat,"** moving the party toward the middle. Major developments:

| Initiative | Outcome |
|-----------|---------|
| **Health-care reform (1993–94)**, led by Hillary Rodham Clinton | **Failed** in Congress |
| **NAFTA** (North American Free Trade Agreement, took effect 1994) | **Passed** — free trade with Canada & Mexico |
| **"Don't Ask, Don't Tell" (1993)** | Compromise policy on gays in the military |
| **Welfare reform (1996)** | Signed a major overhaul ("end welfare as we know it") |

> 💡 **Triangulation:** After Democrats lost Congress in 1994, Clinton adopted a strategy of "**triangulation**" — positioning himself between Republicans and his own party's left to claim the center. It helped him win re-election in **1996**.`,
      },
      {
        id: 'r2p4-q-clinton',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The 1994 North American Free Trade Agreement (NAFTA) reflected which broad trend of the 1990s?',
              options: [
                'Globalization — the growing integration of national economies through trade',
                'A return to high protective tariffs',
                'The collapse of international trade',
                'The nationalization of major industries',
              ],
              correctAnswer: 0,
              explanation: 'NAFTA created a free-trade zone among the U.S., Canada, and Mexico. It exemplified 1990s globalization — though it also drew criticism for accelerating the loss of U.S. manufacturing jobs.',
            },
            {
              question: 'Clinton\'s post-1994 strategy of "triangulation" meant:',
              options: [
                'Positioning himself between the two parties to claim the political center',
                'Forming a three-way military alliance',
                'Dividing the country into three economic zones',
                'Running for a third term',
              ],
              correctAnswer: 0,
              explanation: 'After Republicans took Congress in 1994, Clinton "triangulated" — staking out a centrist position between congressional Republicans and his own party\'s liberal wing. This helped him win re-election in 1996.',
            },
          ],
        },
      },
      {
        id: 'r2p4-gingrich',
        type: 'text' as const,
        content: `## The Republican Resurgence & Impeachment

The 1990s also saw a sharp conservative counterattack:

- **1994 midterms** — Led by **Newt Gingrich** and his **"Contract with America,"** Republicans won control of **both houses of Congress** for the first time in 40 years (the "Republican Revolution"). This produced years of **divided government** and budget showdowns, including **government shutdowns** in 1995–96.
- **Impeachment (1998–99)** — The House impeached Clinton on charges of **perjury and obstruction of justice** arising from the Monica Lewinsky scandal. The **Senate acquitted** him in **1999**, so he **remained in office**.

Meanwhile, the late-1990s **economy boomed**, fueled by the **"dot-com"** technology and internet sector. The federal budget even reached a **surplus** by the end of Clinton's term.

> ⚠️ **Precision matters:** Clinton was **impeached** (formally charged) by the House but **acquitted** by the Senate — so he was **not removed**. "Impeached" means charged, not convicted/removed. This is a classic distinction the exam loves to test.`,
      },
      {
        id: 'r2p4-drill-perot',
        type: 'input-boxes' as const,
        content: `**1990s Numbers** 🧮

**1)** In what year was Bill Clinton first elected president?
**2)** Approximately what percent of the 1992 popular vote did Ross Perot win? *(round to the nearest whole number; he got ~18.9%)*
**3)** In what year did the Republican "Revolution" win control of Congress?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1992', '19', '1994'],
          hint1: 'Clinton beat the elder Bush in the same year as the three-way race with Perot.',
          hint2: 'Perot won close to one-fifth of the vote; 18.9% rounds to 19.',
          hint3: 'The "Contract with America" midterm wave came two years into Clinton\'s first term.',
          explanation: 'Clinton was elected in 1992; Perot took ~19% (18.9%) of the popular vote, the best third-party showing since 1912; and Gingrich\'s Republicans captured Congress in the 1994 midterms.',
        },
      },
      {
        id: 'r2p4-impeach-note',
        type: 'text' as const,
        content: `## Impeachment: The Words Decide the Point

Half of the points students lose on the Clinton impeachment come from sloppy vocabulary. **Impeachment** is the *charge*, not the *removal*. The Constitution splits the process between the two chambers of Congress — and Clinton's case is the textbook illustration of how it actually plays out.`,
      },
      {
        id: 'r2p4-dropdown-impeach',
        type: 'dropdown-select' as const,
        content: `**Impeachment Vocabulary** 🔽

Get the constitutional terms exactly right.`,
        exercise: {
          dropdowns: [
            { label: 'The body that "impeaches" (formally charges) a president:', options: ['The House of Representatives', 'The Senate', 'The Supreme Court', 'The Electoral College'] },
            { label: 'The body that holds the trial and votes to convict or acquit:', options: ['The Senate', 'The House of Representatives', 'The Cabinet', 'The states'] },
            { label: 'The outcome for Clinton in 1999 — he was:', options: ['Acquitted and stayed in office', 'Convicted and removed', 'Forced to resign', 'Re-elected to a third term'] },
          ],
          correctAnswers: ['The House of Representatives', 'The Senate', 'Acquitted and stayed in office'],
          hint1: 'The lower chamber brings the charges (impeachment).',
          hint2: 'The upper chamber conducts the trial; a two-thirds vote is needed to convict.',
          hint3: 'The Senate fell short of the two-thirds needed, so Clinton finished his term.',
          explanation: 'The House impeaches (charges); the Senate tries and needs a two-thirds vote to convict. In 1999 the Senate acquitted Clinton, so he served out his second term.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'apush-reagan-to-present',
    sections: [
      {
        id: 'r2p5-intro',
        type: 'text' as const,
        content: `# 🦅 Reagan to the Present

**Part 5 of 7 — 9/11, the War on Terror & the George W. Bush Years (2001–2009)**

---

> 🔑 **The Pivot:** The contested **2000 election** put Republican **George W. Bush** in office. Then **September 11, 2001** transformed American politics and foreign policy, launching a global **"War on Terror"** that defined the decade.`,
      },
      {
        id: 'r2p5-2000',
        type: 'text' as const,
        content: `## The Disputed Election of 2000

The **2000** race between Republican **George W. Bush** and Democrat **Al Gore** (Clinton's vice president) was historically close. Everything came down to **Florida**, where the margin was a few hundred votes amid disputes over "**hanging chads**" and recounts.

The recount reached the Supreme Court, which in **Bush v. Gore (2000)** halted the Florida recount, effectively awarding the state — and the presidency — to Bush.

The result was extraordinary:

| Candidate | Popular vote | Electoral vote |
|-----------|-------------|----------------|
| **Al Gore** | **Won** the national popular vote | 266 |
| **George W. Bush** | Lost the popular vote | **271 — won the presidency** |

> ⚠️ **Key point:** Bush won the **electoral** vote (and thus the presidency) while **losing the popular vote** — one of only a handful of times in U.S. history this has happened. It reignited debate over the Electoral College.`,
      },
      {
        id: 'r2p5-q-2000',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The 2000 presidential election was extraordinary because:',
              options: [
                'George W. Bush won the presidency via the Electoral College despite losing the national popular vote, after Bush v. Gore halted the Florida recount',
                'No candidate received any electoral votes',
                'It was decided by a national coin flip',
                'Al Gore won both the popular and electoral vote',
              ],
              correctAnswer: 0,
              explanation: 'Gore won the popular vote, but the Supreme Court\'s decision in Bush v. Gore ended the Florida recount, giving Bush Florida\'s electors and a 271–266 Electoral College win — president despite losing the popular vote.',
            },
            {
              question: 'The 2000 Supreme Court case that effectively decided the presidency was:',
              options: [
                'Bush v. Gore',
                'Marbury v. Madison',
                'Brown v. Board of Education',
                'Roe v. Wade',
              ],
              correctAnswer: 0,
              explanation: 'Bush v. Gore (2000) halted Florida\'s recount, settling the disputed election in Bush\'s favor.',
            },
          ],
        },
      },
      {
        id: 'r2p5-911',
        type: 'text' as const,
        content: `## September 11 and the War on Terror

On **September 11, 2001**, the terrorist group **al-Qaeda**, led by **Osama bin Laden**, hijacked four airliners. Two destroyed the **World Trade Center** towers in New York; one struck the **Pentagon**; one crashed in Pennsylvania after passengers fought back. Nearly **3,000 people** were killed — the deadliest attack on U.S. soil.

The response reshaped American government and foreign policy:

| Response | What it did |
|----------|-------------|
| **War in Afghanistan (2001)** | Toppled the Taliban regime sheltering al-Qaeda |
| **USA PATRIOT Act (2001)** | Expanded government surveillance and law-enforcement powers |
| **Department of Homeland Security (2002)** | New cabinet department to coordinate domestic security |
| **Iraq War (2003)** | Invaded Iraq; Saddam Hussein removed |

The **Iraq War (2003)** was justified by claims that Saddam possessed **"weapons of mass destruction" (WMDs)** — weapons that were **never found**, fueling lasting controversy.

> 💡 **The civil-liberties tension:** Like earlier wars, the War on Terror sparked a **liberty-vs.-security** debate. The PATRIOT Act, Guantánamo Bay detentions, and surveillance programs raised questions about how far the government may go to protect national security.`,
      },
      {
        id: 'r2p5-dropdown-911',
        type: 'dropdown-select' as const,
        content: `**War on Terror Terms** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'The terrorist network responsible for the 9/11 attacks:', options: ['al-Qaeda', 'The Viet Cong', 'The Contras', 'The Taliban government'] },
            { label: 'The 2001 law that expanded surveillance and security powers:', options: ['The USA PATRIOT Act', 'The New Deal', 'The Marshall Plan', 'The Sherman Antitrust Act'] },
            { label: 'The disputed justification for the 2003 Iraq War, never found:', options: ['Weapons of mass destruction', 'A nuclear test in Cuba', 'A sunken U.S. warship', 'A communist coup in Italy'] },
          ],
          correctAnswers: ['al-Qaeda', 'The USA PATRIOT Act', 'Weapons of mass destruction'],
          hint1: 'Bin Laden led this network, sheltered by the Taliban in Afghanistan.',
          hint2: 'The 2001 surveillance law\'s name is an acronym suggesting loyalty to country.',
          hint3: 'The Iraq War was justified by the claim Saddam held these — they were never found.',
          explanation: 'al-Qaeda (led by Osama bin Laden) carried out 9/11; the USA PATRIOT Act expanded surveillance powers; and the 2003 Iraq War was justified by alleged weapons of mass destruction that were never located.',
        },
      },
      {
        id: 'r2p5-decade-note',
        type: 'text' as const,
        content: `## Pinning Down the 2000s

The post-9/11 decade hinges on three numbers: the year of the attacks, the year the Iraq War began, and the scale of the loss of life. These figures recur in stimulus prompts and timelines, so commit them to memory before the final check.`,
      },
      {
        id: 'r2p5-drill-911',
        type: 'input-boxes' as const,
        content: `**Dates of the Decade** 🧮

**1)** In what year did the September 11 attacks occur?
**2)** In what year did the U.S. invade Iraq (the Iraq War)?
**3)** Approximately how many people were killed on 9/11? *(round to the nearest thousand)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2001', '2003', '3000'],
          hint1: 'The attacks came in the first year of George W. Bush\'s presidency.',
          hint2: 'The Iraq War began two years after 9/11.',
          hint3: 'The death toll was just under 3,000 — round to 3000.',
          explanation: '9/11 occurred in 2001; the Iraq War began in 2003; nearly 3,000 people were killed on September 11, 2001.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'apush-reagan-to-present',
    sections: [
      {
        id: 'r2p6-intro',
        type: 'text' as const,
        content: `# 🦅 Reagan to the Present

**Part 6 of 7 — Obama, Recession & a Polarized 21st Century (2008–present)**

---

> 🔑 **The Arc:** A historic financial crisis, the election of the first Black president, deepening partisan **polarization**, a populist backlash, and rapid demographic and technological change define the most recent stretch of U.S. history.`,
      },
      {
        id: 'r2p6-recession',
        type: 'text' as const,
        content: `## The Great Recession & the Election of 2008

In **2008**, the U.S. plunged into the **Great Recession** — the worst economic downturn since the Great Depression. Triggers included a collapsing **housing/subprime-mortgage bubble** and a near-meltdown of the financial system (e.g., the failure of **Lehman Brothers**).

The government responded with massive intervention:

- **TARP (Troubled Asset Relief Program, 2008)** — a roughly \$700 billion bank "bailout" signed under George W. Bush.
- **The 2009 stimulus** (American Recovery and Reinvestment Act) — large federal spending to revive the economy under the new president.

Amid this crisis, Democrat **Barack Obama** defeated Republican **John McCain** in **2008**, becoming the **first African American president** of the United States — a milestone in the nation's long struggle over race.

> 💡 **Two-sided legacy:** The bailouts are credited with preventing a deeper collapse, but they also fueled **populist anger** on both ends — the conservative **Tea Party** movement (2009) and the progressive **Occupy Wall Street** protests (2011) both grew out of frustration with bailouts and inequality.`,
      },
      {
        id: 'r2p6-q-recession',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Great Recession that began in 2008 was primarily triggered by:',
              options: [
                'The collapse of a housing/subprime-mortgage bubble and a financial-system crisis',
                'A war with China',
                'A drought across the Great Plains',
                'A sudden spike in immigration',
              ],
              correctAnswer: 0,
              explanation: 'The crisis grew out of a housing bubble built on risky subprime mortgages. When it burst, mortgage-backed securities collapsed, threatening major financial firms (e.g., Lehman Brothers) and freezing credit.',
            },
            {
              question: 'Barack Obama\'s 2008 election was historically significant because he was the:',
              options: [
                'First African American elected president of the United States',
                'First president from California',
                'Youngest person ever elected president',
                'First president to lose the popular vote but win the electoral vote',
              ],
              correctAnswer: 0,
              explanation: 'Obama, a Democrat, defeated John McCain in 2008 to become the first African American president — a landmark moment in U.S. racial history.',
            },
          ],
        },
      },
      {
        id: 'r2p6-obama',
        type: 'text' as const,
        content: `## The Obama Presidency (2009–2017)

Obama's two terms brought major policy change amid intense partisanship:

| Policy / Event | Significance |
|----------------|-------------|
| **Affordable Care Act (ACA / "Obamacare," 2010)** | Largest health-care expansion since the 1960s; required most people to have insurance |
| **Killing of Osama bin Laden (2011)** | U.S. special-forces raid in Pakistan ended the long manhunt |
| **Obergefell v. Hodges (2015)** | Supreme Court legalized **same-sex marriage** nationwide |
| **Paris Climate Agreement (2015)** | International accord to limit greenhouse-gas emissions |

These years also saw deepening **political polarization** and gridlock, the rise of the conservative **Tea Party** in Congress, and growing movements for racial justice (e.g., **Black Lives Matter**, emerging mid-2010s).

> ⚠️ **Don't overstate "post-racial":** Obama's election did **not** end racial tension. The 2010s saw renewed debate over policing and race, reminding students that landmark milestones coexist with ongoing struggle.`,
      },
      {
        id: 'r2p6-dropdown-obama',
        type: 'dropdown-select' as const,
        content: `**Landmarks of the 2010s** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'The 2010 law expanding health-insurance coverage:', options: ['The Affordable Care Act', 'The Social Security Act', 'The PATRIOT Act', 'NAFTA'] },
            { label: 'The 2015 Supreme Court case legalizing same-sex marriage nationwide:', options: ['Obergefell v. Hodges', 'Bush v. Gore', 'Plessy v. Ferguson', 'Korematsu v. United States'] },
            { label: 'The 2008 bank "bailout" program enacted during the financial crisis:', options: ['TARP', 'The New Deal', 'The G.I. Bill', 'The Homestead Act'] },
          ],
          correctAnswers: ['The Affordable Care Act', 'Obergefell v. Hodges', 'TARP'],
          hint1: 'Nicknamed "Obamacare," passed in 2010.',
          hint2: 'The 2015 marriage case is named for plaintiff Jim Obergefell.',
          hint3: 'The Troubled Asset Relief Program is known by its acronym.',
          explanation: 'The Affordable Care Act (2010) expanded coverage; Obergefell v. Hodges (2015) legalized same-sex marriage nationwide; and TARP (2008) was the roughly \$700 billion financial-crisis bailout.',
        },
      },
      {
        id: 'r2p6-present',
        type: 'text' as const,
        content: `## The Populist Turn & a Changing Nation

The later 2010s brought a **populist** backlash against globalization and the political establishment. In **2016**, Republican **Donald Trump** won the presidency — again **winning the Electoral College while losing the popular vote** — on an "America First," anti-immigration, anti-free-trade platform. His presidency intensified debates over immigration, trade, and the role of government.

Broad trends shaping 21st-century America:

- **Demographic change** — Rising **Latino/Hispanic** and Asian American populations are reshaping the electorate; the U.S. is projected to become "majority-minority" around mid-century.
- **The digital / information revolution** — Smartphones, social media, and the internet transformed the economy, culture, and politics (including the spread of misinformation).
- **Globalization's winners and losers** — Free trade lowered consumer prices but contributed to **deindustrialization** of older manufacturing regions ("the Rust Belt").
- **Renewed debates** over immigration, climate, health care, and the size of government continue the long American argument between **liberty and equality, individualism and community**.

> 💡 **Synthesis for the essay:** Period 9 connects to deep themes that run through ALL of U.S. history — the proper size of government, who belongs in "We the People," America's role in the world, and the tension between economic freedom and economic fairness.`,
      },
      {
        id: 'r2p6-drill-present',
        type: 'input-boxes' as const,
        content: `**Recent Milestones** 🧮

**1)** In what year was Barack Obama first elected president?
**2)** In what year did U.S. forces kill Osama bin Laden?
**3)** In what year did the Supreme Court legalize same-sex marriage nationwide (Obergefell)?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2008', '2011', '2015'],
          hint1: 'Obama won during the financial crisis that began that same year.',
          hint2: 'The raid in Pakistan came in Obama\'s third year in office.',
          hint3: 'Obergefell came near the end of Obama\'s second term, the same year as the Paris Climate Agreement.',
          explanation: 'Obama was elected in 2008; bin Laden was killed in 2011; and Obergefell v. Hodges legalized same-sex marriage in 2015.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'apush-reagan-to-present',
    sections: [
      {
        id: 'r2p7-intro',
        type: 'text' as const,
        content: `# 🦅 Reagan to the Present

**Part 7 of 7 — Synthesis, Themes & Mastery Check**

---

You can now trace the arc of **Period 9 (c. 1980–present)**: the conservative resurgence under Reagan, the end of the Cold War, the post–Cold War 1990s, the War on Terror, the Great Recession and Obama era, and the populist, polarized present. Let's connect the threads and test mastery.`,
      },
      {
        id: 'r2p7-summary',
        type: 'text' as const,
        content: `## Quick-Reference Timeline

| Year(s) | Event | Why it matters |
|---------|-------|----------------|
| **1980** | Reagan elected | Conservative realignment begins |
| **1981** | Economic Recovery Tax Act | Supply-side "Reaganomics" |
| **1987** | INF Treaty | First treaty to eliminate a class of nukes |
| **1989** | Berlin Wall falls | Cold War winding down |
| **1990–91** | Persian Gulf War | Post–Cold War U.S. power |
| **1991** | USSR dissolves | Cold War ends |
| **1994** | NAFTA / GOP "Revolution" | Globalization + divided government |
| **2000** | Bush v. Gore | Electoral-vote winner loses popular vote |
| **2001** | 9/11 | War on Terror begins |
| **2003** | Iraq War | WMD controversy |
| **2008** | Great Recession / Obama elected | First Black president amid crisis |
| **2010** | Affordable Care Act | Major health-care expansion |
| **2015** | Obergefell v. Hodges | Same-sex marriage legalized |

> ⚠️ **Three precision traps to avoid:** (1) Reagan *raised* the national debt despite "small-government" rhetoric. (2) Clinton was **impeached but acquitted** — not removed. (3) In **2000 and 2016**, the winner **lost** the national popular vote but won the Electoral College.`,
      },
      {
        id: 'r2p7-themes',
        type: 'text' as const,
        content: `## The Big Themes (for the DBQ/LEQ)

The College Board organizes APUSH around recurring themes. Period 9 speaks directly to several:

- **American and National Identity (NAT)** — Debates over who counts as a full American: immigration policy, the marriage-equality movement, the first Black president.
- **Politics and Power (PCE)** — The conservative resurgence, polarization, divided government, and the expansion/contraction of federal power.
- **America in the World (WOR)** — From Cold War victory to the War on Terror to debates over globalization and "endless wars."
- **Work, Exchange, and Technology (WXT)** — Supply-side economics, globalization, deindustrialization, the dot-com boom, the Great Recession, and the digital revolution.

> 🔑 **The throughline:** Period 9 is one long argument over the **proper size and role of government** and **America's role in the world** — the very questions the nation has debated since its founding.`,
      },
      {
        id: 'r2p7-dropdown-synthesis',
        type: 'dropdown-select' as const,
        content: `**Match Era to Leader** 🔽

Connect each defining development to the president in office when it happened.`,
        exercise: {
          dropdowns: [
            { label: 'Supply-side "Reaganomics" and the INF Treaty:', options: ['Ronald Reagan', 'Bill Clinton', 'Barack Obama', 'George W. Bush'] },
            { label: 'NAFTA, welfare reform, and impeachment-then-acquittal:', options: ['Bill Clinton', 'George H. W. Bush', 'Ronald Reagan', 'Barack Obama'] },
            { label: 'The 9/11 response and the 2003 Iraq War:', options: ['George W. Bush', 'Bill Clinton', 'Barack Obama', 'Ronald Reagan'] },
            { label: 'The Affordable Care Act and the killing of bin Laden:', options: ['Barack Obama', 'George W. Bush', 'Donald Trump', 'Bill Clinton'] },
          ],
          correctAnswers: ['Ronald Reagan', 'Bill Clinton', 'George W. Bush', 'Barack Obama'],
          hint1: 'Reaganomics and the 1987 INF Treaty belong to the president they\'re named after.',
          hint2: 'NAFTA (1994) and the 1998–99 impeachment were under the centrist "New Democrat."',
          hint3: '9/11 and the 2003 Iraq War were under "Bush 43"; the ACA (2010) and the 2011 bin Laden raid were under his successor.',
          explanation: 'Reagan: supply-side economics + INF Treaty. Clinton: NAFTA, welfare reform, impeachment/acquittal. George W. Bush: 9/11 response + Iraq War. Obama: Affordable Care Act + killing of bin Laden.',
        },
      },
      {
        id: 'r2p7-mixed-lead',
        type: 'text' as const,
        content: `## Putting the Pieces Together

The toughest exam questions don't just ask *what* happened — they ask you to **connect events to themes** and weigh **multiple causes**. The two questions below model that synthesis, then the Exit Quiz checks your command of the period's biggest takeaways.`,
      },
      {
        id: 'r2p7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A historian argues the Cold War ended due to "multiple causation." Which evidence BEST supports weighing factors beyond Reagan\'s military pressure?',
              options: [
                'Gorbachev\'s glasnost and perestroika reforms and the structural failure of the Soviet economy',
                'The U.S. victory in the Persian Gulf War',
                'The passage of NAFTA',
                'The 2000 Bush v. Gore decision',
              ],
              correctAnswer: 0,
              explanation: 'Strong essays argue multiple causation: U.S. arms-race pressure mattered, but so did the USSR\'s internal economic collapse and Gorbachev\'s own reforms (glasnost/perestroika) and his refusal to use force in Eastern Europe.',
            },
            {
              question: 'Both NAFTA (1994) and the deindustrialization of the "Rust Belt" reflect which broad late-20th-century development?',
              options: [
                'Globalization and the integration of the U.S. into a world economy',
                'The expansion of the New Deal welfare state',
                'A return to isolationism',
                'The growth of the Cold War arms race',
              ],
              correctAnswer: 0,
              explanation: 'Free-trade agreements like NAFTA and the loss of manufacturing jobs in the industrial Midwest are two faces of the same coin: economic globalization, which lowered consumer prices while displacing many factory workers.',
            },
          ],
        },
      },
      {
        id: 'r2p7-exit-lead',
        type: 'text' as const,
        content: `## One Last Check

You've traced Period 9 from Reagan's 1980 realignment to the polarized, globalized present. Three final questions target the precision traps that separate top scores from the rest: the real fiscal record of Reaganomics, the popular-vote/Electoral-College split, and the direct consequences of 9/11.`,
      },
      {
        id: 'r2p7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which statement about Reaganomics is accurate?',
              options: [
                'It combined tax cuts and deregulation with a defense buildup, lowering inflation but nearly tripling the national debt',
                'It balanced the federal budget every year',
                'It raised income-tax rates to fund new social programs',
                'It nationalized major American industries',
              ],
              correctAnswer: 0,
              explanation: 'Reaganomics cut taxes, deregulated, and boosted defense spending. Inflation fell, but tax cuts plus military spending (without matching cuts) caused deficits to soar and the debt to nearly triple.',
            },
            {
              question: 'In BOTH the 2000 and 2016 presidential elections, the eventual winner:',
              options: [
                'Won the Electoral College while losing the national popular vote',
                'Won both the popular and electoral vote unanimously',
                'Was chosen by the House of Representatives',
                'Ran unopposed',
              ],
              correctAnswer: 0,
              explanation: 'George W. Bush (2000) and Donald Trump (2016) each won the presidency through the Electoral College despite receiving fewer popular votes than their opponents — reviving debate over the Electoral College.',
            },
            {
              question: 'The September 11, 2001 attacks led most directly to which set of U.S. responses?',
              options: [
                'The War in Afghanistan, the USA PATRIOT Act, and the creation of the Department of Homeland Security',
                'The New Deal and Social Security',
                'The Marshall Plan and NATO',
                'The Louisiana Purchase and Lewis & Clark expedition',
              ],
              correctAnswer: 0,
              explanation: 'In response to 9/11, the U.S. invaded Afghanistan (2001) to oust the Taliban/al-Qaeda, passed the PATRIOT Act to expand surveillance, and created the Department of Homeland Security (2002).',
            },
          ],
        },
      },
    ],
  },
]
