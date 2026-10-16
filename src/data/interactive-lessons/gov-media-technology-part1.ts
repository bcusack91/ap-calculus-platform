export const govMediaTechnologyPart1Data = {
  topicSlug: 'gov-media-technology',
  sections: [
    {
      id: 'govmedia1-intro',
      type: 'text' as const,
      content: `
# 📱 Media, Technology & Politics

**Part 1 of 7 — Core Concepts**

---

| Section |
|---|
| Functions of mass media (Lasswell 1948 surveillance + correlation + transmission + entertainment + Wright 1959 mobilization) |
| Types of media (print + broadcast + cable + digital + social media + podcasts) |
| Media as 4th estate (Burke 1787 + Carlyle 1841) + watchdog function |
| Media bias frameworks (gatekeeping White 1950 + framing Entman 1993 + agenda-setting McCombs + Shaw 1972 + priming Iyengar + Kinder 1987) |
| 1st Amendment press freedoms (NYT v. Sullivan 1964 actual malice + Pentagon Papers 1971 + Branzburg v. Hayes 1972) |
| Section 230 of CDA 1996 + platform immunity + ongoing reform debates |

> 🔑 Key idea: MEDIA + TECHNOLOGY are CRITICAL FORCES in modern American politics — Harold LASSWELL 1948 identified 4 FUNCTIONS of mass communication (SURVEILLANCE of environment + CORRELATION of response + TRANSMISSION of culture + ENTERTAINMENT) with WRIGHT 1959 adding MOBILIZATION; TYPES include traditional PRINT (newspapers + magazines), BROADCAST (network TV + radio), CABLE (Fox News 1996 + MSNBC 1996 + CNN 1980), DIGITAL (websites + apps), SOCIAL MEDIA (Facebook 2004 + Twitter/X 2006 + YouTube 2005 + Instagram 2010 + TikTok 2016), and PODCASTS (Joe Rogan 2009 + Theo Von + Lex Fridman); media serves as 4TH ESTATE (Edmund Burke 1787 + Thomas Carlyle 1841 — press as crucial check on government) + WATCHDOG function (investigative journalism exposing corruption Watergate 1972-74 + Pentagon Papers 1971 + Spotlight Boston Globe 2002); MEDIA BIAS frameworks (GATEKEEPING — David Manning White 1950 — editors decide what becomes news; FRAMING — Robert Entman 1993 — how stories presented; AGENDA-SETTING — Maxwell McCombs + Donald Shaw 1972 Chapel Hill study — media tells people what to THINK ABOUT; PRIMING — Iyengar + Kinder 1987 News That Matters — media activates certain considerations); 1ST AMENDMENT press protections (NYT v. Sullivan 1964 actual malice for public officials + Pentagon Papers 1971 NYT v. US prior restraint extremely difficult + Branzburg v. Hayes 1972 no reporter privilege constitutionally + Hazelwood v. Kuhlmeier 1988 student press limited); SECTION 230 of COMMUNICATIONS DECENCY ACT 1996 — platform immunity for user content, a brief example of debates over regulating online platforms.
      `
    },
    {
      id: 'govmedia1-content',
      type: 'text' as const,
      content: `
## Functions of Mass Media

Harold **LASSWELL** (1948) identified **3 functions**, with **WRIGHT** (1959) adding a 4th and 5th:

| Function | Description |
|---|---|
| **SURVEILLANCE** | News about world; "watchman of horizon" |
| **CORRELATION** | Interpretation + commentary linking events |
| **TRANSMISSION** | Cultural socialization across generations |
| **ENTERTAINMENT** | (Wright 1959) escapism + leisure |
| **MOBILIZATION** | Promoting collective action (campaigns + movements) |

## Types of Media

| Type | Examples + Reach |
|---|---|
| **PRINT** | Newspapers (NYT + WaPo + WSJ + USA Today) + magazines (Time + Newsweek + Atlantic + New Yorker + National Review) — DECLINING by roughly half since 2010 (~21M weekday circulation 2022, Pew) |
| **BROADCAST TV** | ABC + CBS + NBC + PBS — DECLINING evening news ~20M (down from ~50M 1970s) |
| **CABLE TV** | Fox News (1996) + MSNBC (1996) + CNN (1980) — Fox ~2.4M primetime + MSNBC ~1.2M + CNN ~700K (2024) |
| **TALK RADIO** | ~1,500 stations; Rush Limbaugh (d. 2021) + Sean Hannity + Mark Levin + Glenn Beck — overwhelmingly conservative |
| **DIGITAL NEWS** | Politico (2007) + Axios (2017) + The Hill + Bloomberg + Reuters + AP + Substack newsletters |
| **SOCIAL MEDIA** | Facebook (2004; ~3B users) + Twitter/X (2006; Musk acquired Oct 2022 \\$44B) + YouTube (2005; ~2.5B users) + Instagram (2010) + TikTok (2016; ~1.5B users; ByteDance) |
| **PODCASTS** | Joe Rogan Experience (2009; #1 podcast; Trump 3-hour Oct 2024 ~40M+ views) + Theo Von + Lex Fridman + Pod Save America + The Daily |

## Media as 4th Estate + Watchdog

Term **4TH ESTATE** attributed to **Edmund Burke** (1787) referring to PRESS as 4th branch beyond clergy + nobility + commons; **Thomas Carlyle** (1841) popularized:

> "Burke said there were Three Estates in Parliament; but, in the Reporters' Gallery yonder, there sat a Fourth Estate more important far than they all."

**WATCHDOG function** — press as crucial check on government:
- **WATERGATE** (1972-1974) — Bob Woodward + Carl Bernstein Washington Post + "Deep Throat" Mark Felt FBI + brought down Nixon
- **PENTAGON PAPERS** (1971) — Daniel Ellsberg leaked + NYT + WaPo published + SCOTUS upheld
- **SPOTLIGHT** (2002) — Boston Globe Catholic Church abuse exposé + 2015 Oscar-winning film
- **NSA REVELATIONS** (2013) — Edward Snowden + Glenn Greenwald + Laura Poitras + Barton Gellman + Pulitzer 2014
- **PANAMA PAPERS** (2016) — ICIJ international investigation tax havens
- **JANUARY 6 INVESTIGATION** (2021-2022) — extensive press coverage Trump White House communications + January 6 Committee hearings

## Media Bias Frameworks

| Framework | Theorist + Key Insight |
|---|---|
| **GATEKEEPING** | David Manning White (1950) — editors decide what becomes news; case study Mr. Gates wire editor accepting/rejecting stories |
| **AGENDA-SETTING** | Maxwell McCombs + Donald Shaw (1972) Chapel Hill study — media tells people what to THINK ABOUT (issue salience), not necessarily WHAT to think |
| **FRAMING** | Robert Entman (1993) — how stories presented; "to frame is to select some aspects of perceived reality and make them more salient" |
| **PRIMING** | Iyengar + Kinder (1987) News That Matters — media coverage activates certain considerations when evaluating leaders/issues |
| **HORSE RACE COVERAGE** | Patterson 1993 Out of Order — campaign coverage focuses on polls + strategy not policy; ~70% of campaign coverage |
| **HOSTILE MEDIA EFFECT** | Vallone + Ross + Lepper 1985 — partisans on both sides perceive same coverage as biased against their side |

## 1st Amendment Press Freedoms

| Case | Year | Holding |
|---|---|---|
| **NEAR v. MINNESOTA** | 1931 | Prior restraint unconstitutional except in extreme cases (military secrets + obscenity + incitement) |
| **NYT v. SULLIVAN** | 1964 | "ACTUAL MALICE" standard for public officials (knowledge of falsity or reckless disregard for truth); revolutionized libel law; landmark 1st Amendment victory |
| **NYT v. US (PENTAGON PAPERS)** | 1971 | Heavy presumption against prior restraint; government failed to meet burden; upheld publication |
| **BRANZBURG v. HAYES** | 1972 | NO constitutional reporter privilege to refuse grand jury testimony; states can create privilege by statute (most have) |
| **HAZELWOOD v. KUHLMEIER** | 1988 | School-sponsored student press has limited 1st Amendment protection; school can censor school-sponsored speech for legitimate pedagogical purposes |
| **CITIZENS UNITED v. FEC** | 2010 | Corporate (including media corporation) 1st Amendment speech rights for independent political expenditures |

## Regulating Online Platforms: Section 230 (brief example)

**Section 230** of the Communications Decency Act (1996) generally shields online platforms from liability for content their users post and lets them moderate content without losing that protection. Debates over changing it illustrate a CED theme: emerging technologies raise new questions about media regulation, credibility and free expression (EK 5.13.A.3). Know the idea, not the bill or case names.

> 🔑 Key takeaway: MEDIA + TECHNOLOGY are CRITICAL FORCES in modern American politics — LASSWELL 1948 identified 4 FUNCTIONS (SURVEILLANCE + CORRELATION + TRANSMISSION + ENTERTAINMENT) with WRIGHT 1959 adding MOBILIZATION; TYPES include traditional PRINT (newspaper circulation down roughly half since 2010), BROADCAST (network news ~20M down from ~50M 1970s), CABLE (Fox 1996 + MSNBC 1996 + CNN 1980; Fox ~2.4M primetime 2024), TALK RADIO (~1,500 stations overwhelmingly conservative), DIGITAL NEWS (Politico + Axios + Substack), SOCIAL MEDIA (Facebook 2004 ~3B + X 2006 + YouTube 2005 ~2.5B + Instagram 2010 + TikTok 2016 ~1.5B; Musk acquired Twitter/X Oct 2022 \\$44B), PODCASTS (Joe Rogan #1; Trump 3-hour Oct 2024 ~40M+ views); media as 4TH ESTATE (Burke 1787 + Carlyle 1841) + WATCHDOG (Watergate 1972-74 + Pentagon Papers 1971 + Spotlight 2002 + NSA 2013 + Panama Papers 2016 + January 6 investigation 2021-22); MEDIA BIAS frameworks (GATEKEEPING White 1950 + AGENDA-SETTING McCombs + Shaw 1972 Chapel Hill + FRAMING Entman 1993 + PRIMING Iyengar + Kinder 1987 News That Matters + HORSE RACE Patterson 1993 + HOSTILE MEDIA Vallone + Ross + Lepper 1985); 1ST AMENDMENT press protections (Near 1931 prior restraint + NYT v. Sullivan 1964 actual malice + Pentagon Papers 1971 + Branzburg v. Hayes 1972 no reporter privilege + Hazelwood 1988 student press); SECTION 230 of CDA 1996 — a brief example of debates over regulating online platforms.
      `
    },
    {
      id: 'govmedia1-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: "A week of nonstop coverage of a border crisis leads many voters to tell pollsters that immigration is the nation's most important problem, though their views on immigration policy do not change. This illustrates:",
            options: [
              "Agenda setting, shaping the issues people think about",
              "Horse-race coverage, turning the campaign into a popularity contest",
              "Prior restraint, blocking stories before they are published",
              "Political socialization, forming lifelong values in childhood",
            ],
            correctAnswer: 0,
            explanation: 'EK 5.12.A.1: AGENDA SETTING occurs when the media influence which issues citizens consider important — the media tell people what to think ABOUT rather than what to think, so salience rises while opinions stay the same. Horse-race coverage (EK 5.12.A.2) focuses on who is ahead in polls; prior restraint is government blocking publication (EK 3.4.A.1); political socialization is the lifelong development of political values (EK 4.2.A.1).'
          }
        ]
      }
    },
    {
      id: 'govmedia1-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz**`,
      exercise: {
        questions: [
          {
            prompt: "Reporting that digs out hidden government wrongdoing, as the Washington Post did with Watergate (EK 5.12.A.1): ___ journalism.",
            answer: 'investigative',
            acceptableAnswers: ['investigative', 'Investigative', 'investigative journalism', 'investigative reporting'],
            hint: 'It is one way the media act as a watchdog on government.'
          },
          {
            prompt: "Written defamation, which the First Amendment does not protect (EK 3.3.A.2.iii).",
            answer: 'libel',
            acceptableAnswers: ['libel', 'Libel'],
            hint: 'Spoken defamation is slander; public officials must show actual malice to win such suits.'
          },
          {
            prompt: "Government action blocking publication in advance, against which New York Times Co. v. United States (1971) set a heavy presumption: prior ___.",
            answer: 'restraint',
            acceptableAnswers: ['restraint', 'Restraint', 'prior restraint'],
            hint: 'EK 3.4.A.1 — even national-security claims did not justify stopping the Pentagon Papers.'
          }
        ]
      }
    },
    {
      id: 'govmedia1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each MEDIA THEORY to its INSIGHT.**`,
      exercise: {
        dropdowns: [
          {
            label: "GATEKEEPING (David Manning White 1950) — _______:",
            options: ['Editors decide what becomes news; case study Mr. Gates wire editor accepting/rejecting stories; foundational study of editorial selection process', 'Media tells people WHAT to THINK ABOUT (issue salience), not necessarily WHAT to think; Chapel Hill 1968 study of undecided voters; foundational for modern media effects research', 'How stories presented; "to frame is to select some aspects of perceived reality and make them more salient"; affects how audiences interpret events', 'Media coverage activates certain considerations when evaluating leaders/issues; News That Matters 1987; connects agenda-setting to opinion formation', 'Campaign coverage focuses on polls + strategy not policy; Out of Order 1993; ~70% of campaign coverage focuses on horse race rather than substantive issues', 'Partisans on both sides perceive same coverage as biased against their side; 1985 Beirut massacre study; Israelis + Palestinians both saw NBC coverage as biased']
          },
          {
            label: "AGENDA-SETTING (McCombs + Shaw 1972) — _______:",
            options: ['Editors decide what becomes news; case study Mr. Gates wire editor accepting/rejecting stories; foundational study of editorial selection process', 'Media tells people WHAT to THINK ABOUT (issue salience), not necessarily WHAT to think; Chapel Hill 1968 study of undecided voters; foundational for modern media effects research', 'How stories presented; "to frame is to select some aspects of perceived reality and make them more salient"; affects how audiences interpret events', 'Media coverage activates certain considerations when evaluating leaders/issues; News That Matters 1987; connects agenda-setting to opinion formation', 'Campaign coverage focuses on polls + strategy not policy; Out of Order 1993; ~70% of campaign coverage focuses on horse race rather than substantive issues', 'Partisans on both sides perceive same coverage as biased against their side; 1985 Beirut massacre study; Israelis + Palestinians both saw NBC coverage as biased']
          },
          {
            label: "FRAMING (Entman 1993) — _______:",
            options: ['Editors decide what becomes news; case study Mr. Gates wire editor accepting/rejecting stories; foundational study of editorial selection process', 'Media tells people WHAT to THINK ABOUT (issue salience), not necessarily WHAT to think; Chapel Hill 1968 study of undecided voters; foundational for modern media effects research', 'How stories presented; "to frame is to select some aspects of perceived reality and make them more salient"; affects how audiences interpret events', 'Media coverage activates certain considerations when evaluating leaders/issues; News That Matters 1987; connects agenda-setting to opinion formation', 'Campaign coverage focuses on polls + strategy not policy; Out of Order 1993; ~70% of campaign coverage focuses on horse race rather than substantive issues', 'Partisans on both sides perceive same coverage as biased against their side; 1985 Beirut massacre study; Israelis + Palestinians both saw NBC coverage as biased']
          }
        ],
        correctAnswers: ['Editors decide what becomes news; case study Mr. Gates wire editor accepting/rejecting stories; foundational study of editorial selection process', 'Media tells people WHAT to THINK ABOUT (issue salience), not necessarily WHAT to think; Chapel Hill 1968 study of undecided voters; foundational for modern media effects research', 'How stories presented; "to frame is to select some aspects of perceived reality and make them more salient"; affects how audiences interpret events'],
        hint1: 'GATEKEEPING (David Manning White 1950) — landmark study of EDITORIAL SELECTION PROCESS; case study of "Mr. Gates" wire editor at small Midwestern newspaper accepting or rejecting wire service stories; found editors play CRUCIAL ROLE in determining what becomes news through selection process; FOUNDATIONAL study of media as gatekeepers controlling information flow to public; mechanism — limited time + space + resources force selection; editors apply professional norms + personal preferences + perceived audience interests; modern applications — Facebook News Feed algorithm + YouTube recommendation + Twitter/X For You feed + Google News + cable news lineup decisions; SOCIAL MEDIA TRANSFORMED gatekeeping (algorithms + crowdsourced + influencer amplification replaced traditional editors).',
        hint2: 'AGENDA-SETTING (Maxwell McCombs + Donald Shaw 1972 Chapel Hill study) — landmark research; HELD media tells people WHAT to THINK ABOUT (issue salience), NOT necessarily WHAT to think; methodology — surveyed undecided voters in 1968 presidential campaign + content-analyzed news coverage + found strong correlation between issues media emphasized + issues voters considered important; 100+ subsequent studies confirmed; FOUNDATION for modern media effects research; distinguishes from older hypodermic needle/direct effects theories; modern applications — climate change + immigration + crime + economic news + scandals; social media amplifies via trending + algorithms + viral content; cable news creates parallel partisan agendas.',
        hint3: 'FRAMING (Robert Entman 1993) — landmark theoretical contribution; defined: "to frame is to SELECT some aspects of a perceived reality and make them more SALIENT in a communicating text, in such a way as to promote a particular problem definition, causal interpretation, moral evaluation, and/or treatment recommendation"; affects how AUDIENCES INTERPRET events; differs from agenda-setting (which is about salience of issues) — framing is about HOW issues are PRESENTED; example — same protest framed as "rioters" vs "demonstrators"; same policy framed as "tax cut" vs "tax giveaway to rich"; same migration framed as "border crisis" vs "humanitarian crisis"; HUGE political implications.'
      }
    },
    {
      id: 'govmedia1-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "An AP FRQ asks how *New York Times Co. v. United States* (1971) supports the media's role as a watchdog on government. Which response is strongest?",
            options: [
              "The Court refused to stop publication of the Pentagon Papers, so the heavy presumption against prior restraint lets the press expose government secrets even when national security is claimed.",
              "The Court let the government block the Pentagon Papers, showing that national security claims always override the press's role as a watchdog on government officials.",
              "The Court held newspapers liable for any error about public officials, making reporters cautious about criticizing the government.",
              "The Court ruled that broadcasters must present balanced views, which turned the press into a neutral recorder rather than a watchdog.",
            ],
            correctAnswer: 0,
            explanation: 'NYT v. US (1971) is a required case: the Nixon administration sought to stop the New York Times and Washington Post from publishing the classified Pentagon Papers, and the Court refused because the government had not overcome the HEAVY PRESUMPTION AGAINST PRIOR RESTRAINT, even in a national-security case (EK 3.4.A.1). That protection is what lets investigative journalism expose government wrongdoing (EK 5.12.A.1). The Court did not side with the government, did not impose liability for any error (public officials must show actual malice in libel suits), and the case had nothing to do with broadcast balance rules.'
          }
        ]
      }
    }
  ]
}
