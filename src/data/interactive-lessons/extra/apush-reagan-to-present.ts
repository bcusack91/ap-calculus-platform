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
 * (template-literal strings); literal dollar amounts in prose are escaped as \\$.
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
                'Free-market advocates, the religious right, and Cold War defense hawks',
                'Labor unions, civil rights activists, environmentalists, and antiwar college students',
                'Northern industrialists, big-city machines, and new immigrants',
                'Southern segregationists, New Deal farmers, and isolationists opposed to foreign aid',
              ],
              correctAnswer: 0,
              explanation: 'The modern conservative coalition fused three groups: those who wanted lower taxes and deregulation, those who wanted to defend traditional social/religious values (e.g., the Moral Majority), and those who wanted a harder line against the USSR.',
            },
            {
              question: 'The economic problem of the 1970s that most discredited older liberal policy and helped conservatives was:',
              options: [
                'Stagflation — simultaneous high inflation and high unemployment',
                'A stock-market bubble — share prices that soared, then crashed',
                'Deflation — steadily falling prices that discouraged new investment',
                'A budget surplus — federal revenue that outran spending and slowed growth',
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
            { label: 'Cutting tax rates so businesses invest, growing the whole economy:', options: ['Supply-side economics', 'Keynesian demand stimulus', 'Mercantilist trade policy', 'Monetarist money targeting'] },
            { label: 'The 1979 religious-conservative organization led by Jerry Falwell:', options: ['Moral Majority', 'New Deal coalition', 'Students for a Democratic Society', 'The Grange'] },
            { label: 'Working-class whites who left their party to vote for Reagan:', options: ['Reagan Democrats', 'Dixiecrats', 'Rockefeller Republicans', 'Silent majority'] },
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
                'Pressured the USSR with the threat of a costly new arms race, though the shield was never built',
                'Successfully shot down hundreds of Soviet test missiles before the program was cancelled',
                'Was a joint U.S.–Soviet space program that eased tensions at the end of the Cold War',
                'Ended the arms race by giving the U.S. a working missile shield over its major cities',
              ],
              correctAnswer: 0,
              explanation: 'SDI was never deployed, but the threat of an expensive new arms race put added strain on the already-struggling Soviet economy — part of the pressure that helped bring the USSR to the negotiating table.',
            },
            {
              question: 'The 1987 INF Treaty between Reagan and Gorbachev was notable because it:',
              options: [
                'Was the first treaty to eliminate an entire class of nuclear missiles',
                'Was the first treaty to ban all nuclear weapons tests in the atmosphere',
                'Was the first treaty to cap the number of long-range missiles on each side',
                'Reunified Germany and withdrew all Soviet troops from Eastern Europe at once',
              ],
              correctAnswer: 0,
              explanation: 'The Intermediate-Range Nuclear Forces (INF) Treaty was the first arms-control deal to abolish a whole category of nuclear weapons rather than merely cap them. The atmospheric test ban came in 1963 (Limited Test Ban Treaty) and the first caps on long-range missiles in 1972 (SALT I).',
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
          hint1: 'Glasnost comes from the Russian word for "voice": giving people a voice = openness.',
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
                'Signing the Americans with Disabilities Act over the strong objections of business groups',
                'Sending U.S. troops to drive Iraq\'s army out of Kuwait in the Persian Gulf War of 1991',
                'Nominating Clarence Thomas, a conservative federal judge, to the Supreme Court in 1991',
              ],
              correctAnswer: 0,
              explanation: 'Facing huge deficits, Bush agreed to raise taxes in 1990, breaking his signature 1988 campaign promise. Many conservatives never forgave him, weakening him heading into 1992.',
            },
            {
              question: 'The Americans with Disabilities Act (1990) is best categorized as:',
              options: [
                'A civil rights law prohibiting discrimination against people with disabilities',
                'A tax-cut measure giving credits to businesses that hired disabled veterans',
                'A health-care law extending Medicare coverage to all Americans with disabilities',
                'A spending bill funding new veterans\' hospitals after the Persian Gulf War',
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
          hint1: 'The Iraqi dictator who seized Kuwait was the same leader toppled in the 2003 Iraq War.',
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
          hint1: 'The invasion of Kuwait came in August 1990, less than a year after the Berlin Wall fell.',
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

In **1992**, Clinton defeated incumbent George H. W. Bush in a **three-way race** that also featured independent **H. Ross Perot**, who won an impressive **~19% of the popular vote** (the strongest third-party showing since 1912). Perot's focus on the deficit tapped frustration with both parties (analysts still debate whether he cost Bush the election).

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
                'Globalization — the growing integration of national economies across borders',
                'Protectionism — a return to high tariffs to shield American manufacturing jobs',
                'Isolationism — a retreat from international agreements after the Cold War ended',
                'Nationalization — government takeover of major industries such as steel and autos',
              ],
              correctAnswer: 0,
              explanation: 'NAFTA created a free-trade zone among the U.S., Canada, and Mexico. It exemplified 1990s globalization — though it also drew criticism for accelerating the loss of U.S. manufacturing jobs.',
            },
            {
              question: 'Clinton\'s post-1994 strategy of "triangulation" meant:',
              options: [
                'Positioning himself between the two parties to claim the political center',
                'Building a three-way trade alliance among the U.S., Canada, and Mexico',
                'Moving his party further left to energize its base after the 1994 losses',
                'Seeking a third term by persuading Congress to repeal the 22nd Amendment',
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
            { label: 'The body that "impeaches" (formally charges) a president:', options: ['The House of Representatives', 'The Senate', 'The Senate Judiciary Committee', 'The Electoral College'] },
            { label: 'The body that holds the trial and votes to convict or acquit:', options: ['The Senate', 'The House of Representatives', 'The Cabinet', 'The states'] },
            { label: 'The outcome for Clinton in 1999 — he was:', options: ['Acquitted and stayed in office', 'Convicted and removed from office', 'Forced to resign before a trial', 'Censured by the House instead'] },
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
                'Bush won the Electoral College while losing the popular vote after the Florida recount was halted',
                'No candidate won an Electoral College majority, so the House of Representatives chose the winner',
                'A third-party candidate carried several states and forced recounts in every state that he lost',
                'Al Gore won both the popular and electoral votes but conceded before Florida was fully counted',
              ],
              correctAnswer: 0,
              explanation: 'Gore won the popular vote, but the Supreme Court\'s decision in Bush v. Gore ended the Florida recount, giving Bush Florida\'s electors and a 271–266 Electoral College win — president despite losing the popular vote.',
            },
            {
              question: 'The 2000 Supreme Court case that effectively decided the presidency was:',
              options: [
                'Bush v. Gore',
                'Marbury v. Madison',
                'Baker v. Carr',
                'Roe v. Wade',
              ],
              correctAnswer: 0,
              explanation: 'Bush v. Gore (2000) halted Florida\'s recount, settling the disputed election in Bush\'s favor. Baker v. Carr (1962) dealt with legislative apportionment ("one person, one vote"), not a presidential election.',
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
            { label: 'The terrorist network responsible for the 9/11 attacks:', options: ['al-Qaeda', 'Hezbollah', 'The Taliban', 'Hamas'] },
            { label: 'The 2001 law that expanded surveillance and security powers:', options: ['The USA PATRIOT Act', 'The New Deal', 'The Marshall Plan', 'The Sherman Antitrust Act'] },
            { label: 'The disputed justification for the 2003 Iraq War, never found:', options: ['Weapons of mass destruction', 'An Iraqi attack on a U.S. Navy ship', 'An Iraqi invasion of Saudi Arabia', 'A planned Iraqi strike on Israel'] },
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

**Part 6 of 7 — The Great Recession, a Changing Nation & Climate Debates (2000s)**

---

> 🔑 **The Arc:** Moving into the 21st century, the nation experienced significant **technological, economic and demographic change**, a historic financial crisis, and growing debates over energy and the environment as conflicts in the Middle East continued.

> 📌 **Scope note:** The Period 9 key concepts end with the War on Terror, the 2008 financial crisis and debates over energy and climate; specific presidencies and events of the 2010s are not tested.`,
      },
      {
        id: 'r2p6-recession',
        type: 'text' as const,
        content: `## The Great Recession (2007–2009)

In **2008**, the U.S. plunged into the **Great Recession** — the worst economic downturn since the Great Depression. Triggers included a collapsing **housing/subprime-mortgage bubble** and a near-meltdown of the financial system (e.g., the failure of **Lehman Brothers** in September 2008).

The government responded with massive intervention:

- **TARP (Troubled Asset Relief Program, 2008)** — a roughly \\$700 billion program, signed by George W. Bush, to stabilize banks and other financial firms.
- **The Federal Reserve** cut interest rates to near zero and lent heavily to keep credit flowing.

> 💡 **Why it matters for Period 9:** The crisis renewed **calls to reform the U.S. financial system** after two decades of deregulation, and it sharpened the long argument over the government's role in the economy — the same argument that had powered the Reagan Revolution.`,
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
                'The bursting of a housing bubble built on risky subprime mortgages',
                'A trade war with China that sharply raised tariffs on imported goods',
                'A sudden spike in oil prices after Arab members of OPEC cut off exports',
                'A stock-market crash set off by the failure of internet start-up companies',
              ],
              correctAnswer: 0,
              explanation: 'The crisis grew out of a housing bubble built on risky subprime mortgages. When it burst, mortgage-backed securities collapsed, threatening major financial firms (e.g., Lehman Brothers) and freezing credit.',
            },
            {
              question: 'The 2008 financial crisis most directly renewed which policy debate that ran through Period 9?',
              options: [
                'Whether the nation should restore high tariffs to protect its domestic steel makers',
                'Whether federal deregulation had left banks and investment firms too lightly supervised',
                'Whether the federal government should end Social Security and Medicare outright',
                'Whether the United States should withdraw from NATO now that the Cold War had ended',
              ],
              correctAnswer: 1,
              explanation: 'After decades of deregulation that began under Reagan, the crisis prompted calls to reform and more closely supervise banks and financial markets. Tariff protection, ending entitlement programs and leaving NATO were not the debates the crisis set off.',
            },
          ],
        },
      },
      {
        id: 'r2p6-economy',
        type: 'text' as const,
        content: `## A Changing Economy and Population

From the 1980s into the 2000s, new technology and global trade reshaped American work, while migration reshaped where and who Americans were.

| Change | What happened | Why it matters |
|--------|---------------|----------------|
| **Digital revolution** | Personal computers, the internet and cell phones spread from the 1980s into the 2000s | Raised productivity and drew Americans into worldwide economic opportunities |
| **From factories to services** | Employment grew in service sectors and fell in manufacturing; union membership declined (about 20% of wage and salary workers in 1983, about 12% by 2008) | Weakened organized labor; older industrial regions (the "Rust Belt") lost jobs |
| **Stagnant wages** | Real wages stagnated for working- and middle-class Americans | Economic inequality grew |
| **Sun Belt shift** | Population moved to the South and West | Those regions gained political, economic and cultural influence, including more House seats and electoral votes |
| **New immigration** | Migration from Latin America and Asia increased (the Hispanic share of the population rose from about 6% in 1980 to about 12.5% in 2000) | Changed the nation's culture and its politics |

> ⚠️ **Debates, not consensus:** These changes fed intense political and cultural debates over **immigration policy, diversity, gender roles and family structures**, such as arguments over bilingual education, undocumented immigration and same-sex marriage.`,
      },
      {
        id: 'r2p6-dropdown-economy',
        type: 'dropdown-select' as const,
        content: `**A Changing Nation** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'The region of the South and West that gained population and political influence after 1980:', options: ['The Rust Belt', 'The Sun Belt', 'The Corn Belt', 'The Great Plains'] },
            { label: 'The sector where American employment grew while manufacturing jobs declined:', options: ['Heavy industry', 'Family farming', 'Service industries', 'Mining and logging'] },
            { label: 'The trend in real wages for working- and middle-class Americans:', options: ['They rose steadily', 'They doubled', 'They fell by half', 'They stagnated'] },
          ],
          correctAnswers: ['The Sun Belt', 'Service industries', 'They stagnated'],
          hint1: 'The warm-weather region whose name contrasts with the declining industrial "Rust Belt."',
          hint2: 'Jobs in health care, retail, finance and information grew as factory jobs disappeared.',
          hint3: 'Productivity rose, but the typical worker\'s inflation-adjusted pay barely moved.',
          explanation: 'Population and political weight shifted to the Sun Belt; employment grew in service industries as manufacturing declined; and real wages stagnated for working- and middle-class Americans, widening inequality.',
        },
      },
      {
        id: 'r2p6-present',
        type: 'text' as const,
        content: `## Energy, Climate & America's Role in the World

Conflicts in the Middle East — the Persian Gulf War and the wars in Afghanistan and Iraq — together with growing concern about **climate change** led to debates over U.S. **dependence on fossil fuels** and the impact of economic consumption on the environment:

- Supporters of expanded domestic drilling argued it would reduce reliance on imported Middle Eastern oil.
- Environmentalists pressed for conservation, fuel-efficiency standards and renewable energy, and for international agreements such as the **Kyoto Protocol (1997)**, which the United States signed but never ratified.
- Despite these economic and foreign-policy challenges, the United States remained the world's **leading superpower** in the early 21st century, with the largest economy and the strongest military.

Broad trends shaping the period:

- **Globalization's winners and losers** — Free trade lowered consumer prices but contributed to **deindustrialization** of older manufacturing regions.
- **Renewed debates** over immigration, energy, health care, and the size of government continue the long American argument between **liberty and equality, individualism and community**.

> 💡 **Synthesis for the essay:** Period 9 connects to deep themes that run through ALL of U.S. history — the proper size of government, who belongs in "We the People," America's role in the world, and the tension between economic freedom and economic fairness.`,
      },
      {
        id: 'r2p6-drill-present',
        type: 'input-boxes' as const,
        content: `**Reading the Numbers** 🧮

**1)** In what year did the financial crisis peak with the failure of Lehman Brothers?
**2)** About what percent of wage and salary workers belonged to unions in 1983? *(nearest whole number)*
**3)** About what percent belonged to unions by 2008? *(nearest whole number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2008', '20', '12'],
          hint1: 'Lehman Brothers collapsed in September of the year TARP was enacted.',
          hint2: 'In 1983 roughly one worker in five belonged to a union.',
          hint3: 'By 2008 the share had fallen to roughly one in eight.',
          explanation: 'Lehman Brothers failed in September 2008, the peak of the financial crisis. Union membership fell from about 20% of wage and salary workers in 1983 to about 12% in 2008, reflecting the shift from manufacturing to service jobs.',
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

You can now trace the arc of **Period 9 (c. 1980–present)**: the conservative resurgence under Reagan, the end of the Cold War, the post–Cold War 1990s, the War on Terror, the Great Recession, and the economic, demographic and environmental debates of the early 21st century. Let's connect the threads and test mastery.`,
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
| **2008** | Financial crisis / TARP | Renewed calls to reform the financial system |

> ⚠️ **Three precision traps to avoid:** (1) Reagan *raised* the national debt despite "small-government" rhetoric. (2) Clinton was **impeached but acquitted** — not removed. (3) In **2000**, Bush **lost** the national popular vote but won the Electoral College.`,
      },
      {
        id: 'r2p7-themes',
        type: 'text' as const,
        content: `## The Big Themes (for the DBQ/LEQ)

The College Board organizes APUSH around recurring themes. Period 9 speaks directly to several:

- **American and National Identity (NAT)** — Debates over who counts as a full American: immigration policy and debates over diversity, gender roles and family structures.
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
            { label: 'Supply-side "Reaganomics" and the INF Treaty:', options: ['Ronald Reagan', 'Bill Clinton', 'George H. W. Bush', 'George W. Bush'] },
            { label: 'NAFTA, welfare reform, and impeachment-then-acquittal:', options: ['Bill Clinton', 'George H. W. Bush', 'Ronald Reagan', 'George W. Bush'] },
            { label: 'The 9/11 response and the 2003 Iraq War:', options: ['George W. Bush', 'Bill Clinton', 'Ronald Reagan', 'George H. W. Bush'] },
            { label: 'The Persian Gulf War and the Americans with Disabilities Act:', options: ['George W. Bush', 'George H. W. Bush', 'Ronald Reagan', 'Bill Clinton'] },
          ],
          correctAnswers: ['Ronald Reagan', 'Bill Clinton', 'George W. Bush', 'George H. W. Bush'],
          hint1: 'Reaganomics and the 1987 INF Treaty belong to the president they\'re named after.',
          hint2: 'NAFTA (1994) and the 1998–99 impeachment were under the centrist "New Democrat."',
          hint3: '9/11 and the 2003 Iraq War were under "Bush 43"; the 1991 Gulf War and the 1990 ADA were under his father, "Bush 41."',
          explanation: 'Reagan: supply-side economics + INF Treaty. Clinton: NAFTA, welfare reform, impeachment/acquittal. George W. Bush: 9/11 response + Iraq War. George H. W. Bush: Persian Gulf War + Americans with Disabilities Act.',
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
                'Gorbachev\'s reforms and the structural failure of the Soviet command economy',
                'The U.S. victory over Iraq in the Persian Gulf War of 1991',
                'Reagan\'s defense buildup and the Strategic Defense Initiative\'s proposed missile shield',
                'The NAFTA trade agreement, which tied the economies of the Soviet bloc to Western markets',
              ],
              correctAnswer: 0,
              explanation: 'Strong essays argue multiple causation: U.S. arms-race pressure mattered, but so did the USSR\'s internal economic collapse and Gorbachev\'s own reforms (glasnost/perestroika) and his refusal to use force in Eastern Europe.',
            },
            {
              question: 'Both NAFTA (1994) and the deindustrialization of the "Rust Belt" reflect which broad late-20th-century development?',
              options: [
                'Globalization and the integration of the U.S. into a world economy',
                'The expansion of the New Deal welfare state into old factory regions',
                'A return to isolationism and high tariffs on imported manufactured goods',
                'The growth of the Cold War arms race and of defense-industry jobs',
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
                'It paired tax cuts and deregulation with a defense buildup, cutting inflation but nearly tripling the debt',
                'It balanced the federal budget every year by cutting both defense and domestic spending sharply',
                'It raised income-tax rates on the wealthy to fund a large expansion of federal social programs',
                'It nationalized failing steel and auto companies to protect industrial jobs in the Midwest',
              ],
              correctAnswer: 0,
              explanation: 'Reaganomics cut taxes, deregulated, and boosted defense spending. Inflation fell, but tax cuts plus military spending (without matching cuts) caused deficits to soar and the debt to nearly triple.',
            },
            {
              question: 'In the disputed 2000 presidential election, the eventual winner:',
              options: [
                'Won the Electoral College while losing the national popular vote',
                'Won both the popular and electoral votes by the widest margins in decades',
                'Was chosen by the House of Representatives after an Electoral College tie',
                'Was declared the winner by the Supreme Court after a tie in the popular vote',
              ],
              correctAnswer: 0,
              explanation: 'George W. Bush won the presidency through the Electoral College (271–266) despite receiving fewer popular votes than Al Gore — reviving debate over the Electoral College.',
            },
            {
              question: 'The September 11, 2001 attacks led most directly to which set of U.S. responses?',
              options: [
                'The war in Afghanistan, the USA PATRIOT Act, and a new Department of Homeland Security',
                'The Iran-Contra arms deals, the Strategic Defense Initiative, and the INF Treaty',
                'The Persian Gulf War, the liberation of Kuwait, and new trade sanctions on Iraq',
                'The closing of U.S. bases abroad, the end of NATO, and deep cuts to defense budgets',
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
