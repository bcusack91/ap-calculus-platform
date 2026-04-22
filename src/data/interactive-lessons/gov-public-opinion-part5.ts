export const govPublicOpinionPart5Data = {
  topicSlug: 'gov-public-opinion',
  sections: [
    {
      id: 'govpubli5-intro',
      type: 'text' as const,
      content: `
# 📊 Public Opinion & Political Socialization

**Part 5 of 7 — Change Over Time**

---

| Section |
|---|
| Polling history (Literary Digest 1936 failure → Gallup scientific era → telephone → cellphone → online era) |
| Civil rights opinion evolution (Black equality 1940s-2020s; school desegregation; interracial marriage) |
| Gay rights opinion revolution (DOMA 1996 majority opposed gay marriage → Obergefell 2015 majority supportive → trans rights contested) |
| Abortion opinion (stable ~60% pro-Roe 1973-2022 → Dobbs reaction 2022) |
| Trust in government decline (75% in 1958 → ~20% post-Watergate sustained low) |

> 🔑 Key idea: Public opinion CHANGES OVER TIME — sometimes dramatically (gay marriage transformed in ~20 years from majority opposed to majority supportive), sometimes minimally (abortion stable ~60% pro-Roe for 50 years until Dobbs 2022 + post-Dobbs mobilization), sometimes one-direction (declining trust in government from 75% in 1958 to ~20% after Watergate sustained low). POLLING METHODOLOGY EVOLVED to track these changes — Literary Digest 1936 failure → Gallup scientific era → telephone (RDD) → cellphone-inclusive → online probability panels (Pew ATP, NORC AmeriSpeak) + opt-in panels with weighting. CIVIL RIGHTS OPINION transformed dramatically (1942 only 32% supported school integration → 1995 90%; 1958 only 4% approved interracial marriage → 2021 94%); GAY RIGHTS revolution faster (1996 27% supported same-sex marriage → 2024 71%); ABORTION stable until Dobbs reaction; TRUST IN GOVERNMENT plummeted post-Watergate + Vietnam + Iran-Contra + Iraq + financial crisis + COVID + Trump-era + sustained at historic lows.
      `
    },
    {
      id: 'govpubli5-content',
      type: 'text' as const,
      content: `
## History of Polling

### 1824: First "Straw Poll"

- Harrisburg Pennsylvanian newspaper conducted informal "straw poll" for 1824 election
- Showed Andrew Jackson leading over John Quincy Adams
- Foreshadowed scientific polling but unsystematic + biased

### 1916-1932: Literary Digest Era

- LITERARY DIGEST magazine conducted MAIL-IN polls of millions of readers
- Correctly predicted 5 consecutive elections (1916, 1920, 1924, 1928, 1932)
- Massive sample size compensated for non-random sampling when class less correlated with vote
- Sent postcards to magazine subscribers + automobile owners + telephone listings

### 1936: Literary Digest Failure + Gallup Triumph

- 1936 Literary Digest sent 10M postcards (received 2.4M responses); predicted ALF LANDON landslide
- FDR won 46-2 states (60.8%)
- GEORGE GALLUP using ~1,500 random sample correctly predicted FDR
- LITERARY DIGEST FOLDED soon after
- Gallup + Roper + Crossley pioneered SCIENTIFIC POLLING era
- Demonstrated SAMPLE QUALITY > SAMPLE SIZE

### 1948: Truman-Dewey Failure

- Polls used QUOTA SAMPLING (filled demographic quotas non-randomly)
- STOPPED POLLING WEEKS BEFORE ELECTION + missed late deciders
- Chicago Tribune "DEWEY DEFEATS TRUMAN" headline (Truman won 49.6-45.1)
- Polling industry adopted RANDOM SAMPLING + continued polling through Election Day

### 1950s-1970s: Telephone Era Begins

- ROPER, GALLUP, HARRIS dominated commercial polling
- ACADEMIC SURVEYS — University of Michigan SURVEY RESEARCH CENTER + AMERICAN NATIONAL ELECTION STUDIES (ANES) since 1948
- Field surveys + telephone surveys
- High response rates (60-80%)

### 1980s-2000s: RDD + Network Polls

- RANDOM DIGIT DIAL (RDD) phone polling dominant
- NETWORK NEWS polls — CBS/NYT, ABC/WaPo, NBC/WSJ partnerships
- 2000 election + Florida exit poll fiasco — networks called Florida for Gore early, then retracted, then called for Bush; Bush v Gore SCOTUS (Bush won by 537 votes)

### 2000s-2010s: Cellphone Challenge

- Cellphone-only households grew (especially young + minority + lower income)
- TCPA + FCC regulations restricted automated calling to cellphones
- Pollsters added DUAL-FRAME (landline + cellphone) sampling at higher cost
- Response rates declined dramatically (10-15% by 2010s)

### 2010s-Present: Online Era

- Pew RESEARCH AMERICAN TRENDS PANEL (2014) — high-quality probability-based online panel
- NORC AmeriSpeak (Univ of Chicago) + Ipsos KnowledgePanel — also probability-based online
- ONLINE OPT-IN PANELS (YouGov, Morning Consult, Civiqs, Lucid) — convenience samples + post-stratification weighting
- COMBINED with calibration to Census + voter file data

### 2016 + 2020 Polling Failures

- Polls UNDERESTIMATED Trump support
- 2016: National polls showed Clinton +3 (she won popular vote +2.1 — within MOE); state polls in Rust Belt failed dramatically (Michigan, Pennsylvania, Wisconsin all called for Clinton; Trump won all by ~1 pt)
- 2020: National polls showed Biden +8 (he won by +4.5 — outside MOE); state polls again underestimated Trump in Florida + Iowa + Ohio
- CAUSES — non-response bias among Trump voters; education weighting issues; "shy Trump voter" effect; polling methodology challenges
- POLLING INDUSTRY REFORMS — better cellphone + online inclusion; explicit weighting by education + recall vote + voter file calibration

### 2024: Polling Improved

- 2024 polls more accurate
- Trump won popular vote +1.5%; most aggregators showed close race within MOE
- Some pollsters predicted Trump victory (Trafalgar, Insider Advantage)
- Polymarket + Kalshi prediction markets consistently showed Trump favored

## Civil Rights Opinion Evolution

### School Integration (Brown v. Board 1954 + after)

| Year | % Support School Integration |
|---|---|
| 1942 | 32% |
| 1956 | 49% |
| 1964 | 62% |
| 1970 | 71% |
| 1980 | 80% |
| 1995 | 90%+ |
| 2020 | 95%+ |

### Interracial Marriage (Loving v. Virginia 1967)

| Year | % Approve Interracial Marriage (Black-White) |
|---|---|
| 1958 | 4% |
| 1968 | 20% |
| 1978 | 36% |
| 1991 | 48% |
| 2003 | 64% |
| 2013 | 87% |
| 2021 | 94% |

### Black Equality

- 1944 Gunnar Myrdal's AN AMERICAN DILEMMA documented gap between American Creed (equality) + American practice (segregation/discrimination)
- 1947 Truman ordered military integration despite weak public support
- 1954 Brown v. Board began legal transformation
- 1964 Civil Rights Act + 1965 VRA legislative breakthroughs
- 1970s+ INCREASED majority support for desegregation + equal rights
- BUT continued partisan + regional + age divisions on AFFIRMATIVE ACTION + REPARATIONS + POLICE REFORM + race-related issues
- George Floyd murder + BLM protests 2020 produced TEMPORARY surge in Dem support for racial reform; Rep opposition + 2021-24 backlash

## Gay Rights Opinion Revolution

| Year | % Support Same-Sex Marriage |
|---|---|
| 1988 | 12% |
| 1996 | 27% (DOMA passed bipartisan) |
| 2003 | 32% (Lawrence v. Texas struck sodomy laws) |
| 2008 | 39% (CA Prop 8 banned same-sex marriage) |
| 2011 | 46% (FIRST MAJORITY in Gallup) |
| 2015 | 60% (Obergefell v. Hodges) |
| 2024 | 71% |

ONE OF FASTEST OPINION SHIFTS IN AMERICAN HISTORY — driven by:
- INCREASED VISIBILITY of LGBTQ Americans (coming out + Will & Grace + Modern Family + Ellen)
- INTERPERSONAL CONTACT (knowing gay family/friends/colleagues)
- GENERATIONAL REPLACEMENT (older opponents dying; younger supporters rising)
- COURT RULINGS PRECEDING + FOLLOWING opinion shift (Massachusetts Goodridge 2003; Lawrence 2003; Windsor 2013; Obergefell 2015)
- Obama "EVOLVED" position 2012 (after Biden); subsequent Dem unanimity
- Even Republican leaders (Cheney) expressed personal support for gay family members
- POST-OBERGEFELL: gay marriage now consensus issue
- TRANS RIGHTS more contested (especially trans athletes in women's sports + youth gender-affirming care)

## Abortion Opinion

| Year | % Roe Should Stand |
|---|---|
| 1989 | 58% |
| 2000 | 64% |
| 2010 | 64% |
| 2022 (pre-Dobbs) | 60-65% (consistent for decades) |
| 2022 (post-Dobbs Aug) | 62% |
| 2024 | 65% support legal in all/most cases |

REMARKABLY STABLE for 50 years until Dobbs 2022 reaction:
- Roe v. Wade 1973 + Doe v. Bolton 1973 established constitutional right; immediate political mobilization
- 1980s+ Republican Party adopted pro-life position; Democratic Party pro-choice
- Public opinion ~60% pro-Roe but more nuanced on specific restrictions
- DOBBS v. JACKSON WOMEN'S HEALTH 2022 reversed Roe; mobilized pro-choice
- 2022 KS (red state) referendum 59% rejected abortion ban
- 2022 KY referendum rejected abortion ban
- 2023 OH referendum 57% protected abortion rights
- 2024: AZ + MO + MD + NV + NY + CO + MT + FL + NE + SD voted on abortion measures (most pro-choice prevailed)
- TRUMP 2024 endorsed STATE-BY-STATE approach + avoided national ban call

## Gun Control Opinion

| Issue | Public Support | Result |
|---|---|---|
| Universal background checks | 80%+ for decades | FAILED legislatively (Senate 60-vote requirement) |
| Assault weapons ban | 60% | Expired 2004; failed reinstate |
| Red flag laws | 70%+ | Adopted in some states |
| Bipartisan Safer Communities Act 2022 | Modest | Passed post-Uvalde shooting (modest reforms) |

INTENSITY MISMATCH — opponents (NRA + gun rights advocates) much more INTENSE than diffuse majority supporters.

## Climate Change Opinion

| Year | % Climate Change Real + Human-Caused |
|---|---|
| 1989 | ~50% |
| 2010 | ~50% (lower among Reps) |
| 2024 | ~70% Americans + ~95% scientists |

PARTISAN GAP MASSIVE: 78% Dems urgent action vs 23% Reps urgent action (largest partisan gap of any issue).

## Trust in Government

| Year | % Trust Federal Government Always/Most of Time |
|---|---|
| 1958 | 73% |
| 1964 | 77% (peak) |
| 1972 | 53% |
| 1976 | 33% (Watergate) |
| 1980 | 27% (Carter) |
| 1986 | 44% (Reagan recovery) |
| 1994 | 21% (Clinton/GOP Revolution) |
| 2001 | 60% (post-9/11 spike) |
| 2008 | 17% (Iraq + financial crisis) |
| 2014 | 24% (Obama) |
| 2024 | 16-22% (sustained low) |

DRAMATIC DECLINE since 1960s — driven by:
- VIETNAM WAR credibility gap
- WATERGATE 1972-74
- ECONOMIC STAGFLATION 1970s
- IRAN HOSTAGE CRISIS 1979-81
- IRAN-CONTRA 1986-87
- BUSH I broken "no new taxes" 1990
- CLINTON IMPEACHMENT 1998-99
- IRAQ WAR + WMD lies 2003+
- FINANCIAL CRISIS 2008-09 + bank bailouts
- COVID + ECONOMIC + GOVERNMENT DYSFUNCTION 2020+
- TRUMP-ERA polarization + January 6 + election denial
- CONGRESSIONAL APPROVAL routinely below 20%

CIVIC ENGAGEMENT (Putnam BOWLING ALONE 2000) declined alongside trust — fewer civic associations + church + bowling leagues + local newspapers + community ties; SOCIAL CAPITAL eroded.

## Other Major Opinion Trends

| Issue | Direction | Magnitude |
|---|---|---|
| Marijuana legalization | Up | 1969 12% → 2024 70%+ |
| Capital punishment | Down then up then down | 80% 1990s → 55% 2024 |
| Confidence in police | Down (esp post-Floyd 2020) | 64% 1990s → 45% 2023 |
| Confidence in Supreme Court | Down (post-Dobbs) | 50%+ historically → 40% 2024 |
| Confidence in Congress | Sustained low | <20% routinely |
| Confidence in scientists | Bipartisan high → polarized post-COVID | Reps now skeptical |
| Confidence in higher education | Bipartisan high → Reps now negative | 60% Reps negative view 2024 |
| Confidence in corporations | Sustained low | <30% |

> 🔑 Key takeaway: Public opinion CHANGES OVER TIME — sometimes dramatically (gay marriage 12%→71% in 35 years; interracial marriage 4%→94% in 60 years), sometimes stably (abortion ~60% pro-Roe stable 50 years until Dobbs reaction), sometimes one-direction (trust in government 75% 1958 → 16-22% sustained low). POLLING HISTORY: 1824 first straw poll → Literary Digest 1916-32 success → 1936 failure + Gallup scientific era → 1948 Truman-Dewey + quota sampling abandoned → 1950s-70s telephone + ANES → 1980s-2000s RDD network polls + 2000 FL exit poll fiasco → 2000s-2010s cellphone challenge → 2010s+ online era (Pew ATP + NORC AmeriSpeak) → 2016 + 2020 underestimating Trump → reforms → 2024 improved accuracy. CIVIL RIGHTS opinion transformed (32%→90%+ school integration; 4%→94% interracial marriage); GAY RIGHTS revolutionary fast (visibility + contact + generational replacement + court rulings + Obama "evolved" 2012); ABORTION stable then post-Dobbs mobilization; GUN CONTROL persistent intensity mismatch (80%+ background checks failed); CLIMATE CHANGE largest partisan gap (78 vs 23); TRUST IN GOVERNMENT declined dramatically (Vietnam + Watergate + stagflation + Iran + Iran-Contra + Iraq + financial crisis + COVID + Trump-era); BOWLING ALONE (Putnam 2000) social capital decline alongside trust.
      `
    },
    {
      id: 'govpubli5-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: "What explains the DRAMATIC TRANSFORMATION of PUBLIC OPINION on SAME-SEX MARRIAGE — from 12% support in 1988 to 71% in 2024 — making it ONE OF THE FASTEST OPINION SHIFTS IN AMERICAN HISTORY?",
            options: [
              "DRAMATIC TRANSFORMATION OF SAME-SEX MARRIAGE OPINION (12% in 1988 → 71% in 2024) reflects MULTIPLE REINFORCING FACTORS in one of the fastest opinion shifts in American history. KEY DRIVERS: (1) INCREASED VISIBILITY OF LGBTQ AMERICANS — coming out movement; cultural representation in TV (WILL & GRACE 1998-2006, MODERN FAMILY 2009-2020, ELLEN 1997, GLEE, QUEER EYE, GAME OF THRONES); celebrities coming out (Ellen DeGeneres 1997 — banned by ABC affiliates initially, became cultural moment); MILK 2008 film about Harvey Milk; LGBTQ Americans coming out to family + friends + workplace transformed personal connections; (2) INTERPERSONAL CONTACT — Allport's CONTACT HYPOTHESIS (1954) — direct personal contact under conditions of equality reduces prejudice; as more LGBTQ Americans came out, more straight Americans personally knew gay family members + friends + colleagues + neighbors; reduced abstraction + replaced with personal relationships; even Republican families (Dick Cheney + daughter Mary 2004; Rob Portman + son 2013) shifted personal positions; (3) GENERATIONAL REPLACEMENT — older opponents dying; younger supporters becoming larger share of electorate; Silent Generation strongly opposed; Boomers split; Gen X mostly supportive; Millennials + Gen Z overwhelming supportive; demographic transition account for ~50% of total shift over time; (4) COURT RULINGS PRECEDING + FOLLOWING OPINION SHIFT — interaction with judiciary: MASSACHUSETTS GOODRIDGE v. DEPT OF PUBLIC HEALTH (2003) — first state to recognize gay marriage; LAWRENCE v. TEXAS (2003) — struck down anti-sodomy laws; UNITED STATES v. WINDSOR (2013) — struck DOMA's federal definition; OBERGEFELL v. HODGES (2015) — constitutional right to same-sex marriage nationwide; courts often LED public opinion on marriage rights but PUBLIC OPINION caught up + supported decisions; (5) ELITE LEADERSHIP — Obama 'EVOLVED' on gay marriage 2012 (after VP Biden's announcement on Meet the Press May 2012); Hillary Clinton evolved similarly; subsequent Democratic Party near-unanimity; even Republican leaders shifted personal positions (though party platform remained anti-gay-marriage); leadership cued public; (6) COUNTERMOBILIZATION FAILED — initial countermobilization (Defense of Marriage Act DOMA 1996 bipartisan; CA Proposition 8 2008 narrowly passed banning same-sex marriage; 30+ state constitutional amendments banning gay marriage 2004-2012) ultimately collapsed; same-sex marriage became consensus issue post-Obergefell; (7) ECONOMIC + INSTITUTIONAL ALLIES — corporations + Hollywood + universities + tech industry + sports leagues + religious progressives all supported gay marriage rights; Apple + Google + Microsoft + Disney + Coca-Cola filed amicus briefs; Pride Month commercialization; (8) MILITARY POLICY EVOLUTION — Don't Ask Don't Tell 1993 (Clinton compromise barring openly gay service); repealed 2010 (Obama with Defense Sec Gates support); transgender service banned by Trump 2017 + reinstated by Biden 2021 + banned again Trump II 2025; (9) FRAMING SHIFT — gay rights activists successfully reframed issue from 'GAY RIGHTS' to 'EQUAL MARRIAGE' to 'MARRIAGE EQUALITY' — emphasizing equal love + family + traditional values applying to gay couples; appealing to bedrock American values rather than counter-cultural rebellion; (10) RELIGIOUS LIBERTY COUNTERMOBILIZATION — religious liberty exemptions for businesses + religious organizations created continuing tension; Hobby Lobby 2014 + Masterpiece Cakeshop 2018 + 303 Creative 2023; some religious traditional opposition continues; (11) REMAINING CONTESTED FRONTIERS — TRANS RIGHTS now most contested LGBTQ issue: trans athletes in women's sports (legal battles + IX disputes); youth gender-affirming care (state bans + medical organization positions); bathroom + locker room policies; military trans service; backlash on these issues paralleling earlier gay marriage shift but slower; some gay rights leaders concerned trans backlash could erode broader LGBTQ acceptance.",
              "There is no transformation of same-sex marriage opinion of any kind during the entire period in any region of the United States with no shift from 12% in 1988 to 71% in 2024, no Will & Grace + Modern Family + Ellen visibility, no interpersonal contact (Allport contact hypothesis 1954), no generational replacement, no court rulings (Massachusetts Goodridge 2003 + Lawrence 2003 + Windsor 2013 + Obergefell 2015), no Obama evolved 2012 after Biden Meet the Press, no DOMA 1996 + Prop 8 2008 + 30 state amendments countermobilization that ultimately failed, no military DADT 1993 → repeal 2010, no marriage equality framing, no remaining trans rights contested frontier, and no opinion transformation of any kind during the entire period in any region",
              "Same-sex marriage opinion has been STABLE at the SAME LEVEL throughout history with no transformation from 12% support to 71% of any kind under any circumstance with no Will & Grace cultural visibility, no contact hypothesis effect from coming out, no generational replacement, no court rulings interacting with opinion shift, no Obama evolved 2012, no DOMA + Prop 8 countermobilization failure, no Obergefell consensus, and no proper opinion transformation of any kind during the entire period in any region of the United States during the period",
              "Court rulings ALWAYS lead public opinion which then follows passively (rather than complex interaction between courts + culture + generational replacement + elites + framing) of any kind under any circumstance with no Massachusetts Goodridge 2003 + Lawrence 2003 + Windsor 2013 + Obergefell 2015 interacting with opinion shifts, no Obama evolved 2012 + Biden Meet the Press, no contact hypothesis from coming out, no generational replacement, no marriage equality framing, no proper opinion transformation analysis of any kind during the entire period in any region of the United States during the period",
            ],
            correctAnswer: 0,
            explanation: 'SAME-SEX MARRIAGE OPINION TRANSFORMATION (12% 1988 → 71% 2024) — fastest opinion shifts in American history. DRIVERS: (1) VISIBILITY — Will & Grace (1998-2006), Modern Family (2009-2020), Ellen (1997 banned by affiliates → cultural moment), Glee, Queer Eye, Game of Thrones; celebrity coming out (Ellen 1997); Milk 2008. (2) INTERPERSONAL CONTACT — Allport CONTACT HYPOTHESIS (1954); coming out → straight Americans knew gay family/friends/colleagues; replaced abstraction with personal relationships; even Republican families (Cheney + daughter Mary 2004; Portman + son 2013). (3) GENERATIONAL REPLACEMENT — Silent strongly opposed; Boomers split; Gen X mostly supportive; Millennials + Gen Z overwhelming; ~50% of total shift. (4) COURT RULINGS — Massachusetts Goodridge (2003 first state); Lawrence v. Texas (2003 sodomy); Windsor (2013 DOMA); Obergefell (2015 nationwide); courts often LED but public opinion caught up. (5) ELITE LEADERSHIP — Obama "EVOLVED" 2012 (after Biden Meet the Press May 2012); Clinton evolved; Dem near-unanimity; even Rep leaders personal shifts. (6) COUNTERMOBILIZATION FAILED — DOMA 1996 bipartisan; CA Prop 8 2008; 30+ state amendments 2004-2012; collapsed post-Obergefell. (7) ECONOMIC ALLIES — Apple + Google + Microsoft + Disney + Coca-Cola amicus briefs; Pride Month commercialization. (8) MILITARY — DADT 1993 → repealed 2010; trans Trump 2017 → Biden 2021 → Trump II 2025. (9) FRAMING SHIFT — "marriage equality" emphasized equal love + family + traditional values applying. (10) RELIGIOUS LIBERTY COUNTERMOB — Hobby Lobby 2014 + Masterpiece Cakeshop 2018 + 303 Creative 2023. (11) TRANS RIGHTS now most contested — athletes in women\'s sports + youth gender-affirming care + bathrooms + military service; backlash paralleling earlier gay marriage shift but slower.'
          }
        ]
      }
    },
    {
      id: 'govpubli5-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz**`,
      exercise: {
        questions: [
          {
            prompt: "2000 Robert Putnam book documenting decline in CIVIC ENGAGEMENT + SOCIAL CAPITAL alongside trust decline (fewer associations + church + bowling leagues + community ties).",
            answer: 'Bowling Alone',
            acceptableAnswers: ['Bowling Alone', 'bowling alone', 'Bowling Alone: The Collapse and Revival of American Community'],
            hint: 'Robert D. Putnam Harvard political scientist; full title BOWLING ALONE: THE COLLAPSE AND REVIVAL OF AMERICAN COMMUNITY (2000); used dramatic image of declining bowling LEAGUES (more bowling than ever but fewer leagues) as metaphor for declining civic engagement; documented decline in PTA + Elks + Rotary + church attendance + voting + local newspaper subscriptions + family meals + bridge clubs; argued TV + suburbanization + women workforce + generational change drove decline.'
          },
          {
            prompt: "2015 Supreme Court case (5-4 Kennedy) establishing CONSTITUTIONAL RIGHT TO SAME-SEX MARRIAGE nationwide.",
            answer: 'Obergefell v. Hodges',
            acceptableAnswers: ['Obergefell v. Hodges', 'Obergefell', 'Obergefell vs Hodges', 'Obergefell vs. Hodges'],
            hint: 'Decided June 26 2015 (12th anniversary of Lawrence v. Texas); Justice Anthony Kennedy majority opinion + 4 conservative dissents; struck down state same-sex marriage bans nationwide; established 14th Amendment Due Process + Equal Protection Clause requires marriage equality; followed Goodridge 2003 (Massachusetts), Lawrence 2003 (sodomy), Windsor 2013 (DOMA federal definition).'
          },
          {
            prompt: "1996 federal law (signed by Bill Clinton + bipartisan majorities) defining MARRIAGE federally as ONE MAN + ONE WOMAN + permitting states to refuse recognition of other states' same-sex marriages.",
            answer: 'Defense of Marriage Act',
            acceptableAnswers: ['Defense of Marriage Act', 'DOMA', 'Defense of Marriage Act (DOMA)'],
            hint: 'DOMA passed Congress with bipartisan supermajorities (House 342-67; Senate 85-14); signed by Clinton September 1996; reflected anti-gay-marriage majority public opinion at time; Section 3 (federal definition) struck by Windsor 2013; entire act effectively superseded by Obergefell 2015; Respect for Marriage Act 2022 formally repealed DOMA + codified federal recognition of same-sex marriage.'
          }
        ]
      }
    },
    {
      id: 'govpubli5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each TRUST IN GOVERNMENT MILESTONE to its YEAR + LEVEL.**`,
      exercise: {
        dropdowns: [
          {
            label: "PEAK TRUST IN FEDERAL GOVERNMENT (post-WWII consensus + civil rights legislation + before Vietnam credibility gap): ___",
            options: ['1964 — 77% (peak)', '1976 — 33% (Watergate aftermath)', '2001 — 60% (post-9/11 spike)', '2008 — 17% (Iraq + financial crisis)', '2024 — 16-22% (sustained low)']
          },
          {
            label: "DRAMATIC POST-WATERGATE COLLAPSE (Nixon resignation 1974 + Vietnam War end 1975 + economic stagflation): ___",
            options: ['1964 — 77% (peak)', '1976 — 33% (Watergate aftermath)', '2001 — 60% (post-9/11 spike)', '2008 — 17% (Iraq + financial crisis)', '2024 — 16-22% (sustained low)']
          },
          {
            label: "POST-9/11 RALLY-AROUND-THE-FLAG SPIKE (briefly recovered to 1960s levels before quickly declining): ___",
            options: ['1964 — 77% (peak)', '1976 — 33% (Watergate aftermath)', '2001 — 60% (post-9/11 spike)', '2008 — 17% (Iraq + financial crisis)', '2024 — 16-22% (sustained low)']
          }
        ],
        correctAnswers: ['1964 — 77% (peak)', '1976 — 33% (Watergate aftermath)', '2001 — 60% (post-9/11 spike)'],
        hint1: '1964 PEAK — 77% trusted federal government always or most of the time; reflected post-WWII consensus + Eisenhower-Kennedy era + Civil Rights Act 1964 + Great Society programs; high faith in institutions; before Vietnam credibility gap (CIA Pentagon Papers 1971; LBJ Tonkin Resolution exaggeration revealed); subsequent decline almost continuous (with rare upticks).',
        hint2: '1976 WATERGATE AFTERMATH — 33% trusted federal government; collapsed from 77% in 1964 to 33% within 12 years; Nixon Watergate scandal 1972-74 + resignation August 1974; Vietnam War end 1975 (Saigon falls); economic stagflation 1973-75 oil shock + 1979 Iran shock; 1976 Carter elected on outsider/honest message; never recovered to mid-60s levels.',
        hint3: '2001 POST-9/11 SPIKE — 60% briefly recovered after September 11 2001 attacks (rally-around-the-flag effect); Bush approval reached 90%+; major bipartisan legislation (PATRIOT Act, Iraq Authorization, NCLB); but quickly declined as Iraq War + WMD lies + Hurricane Katrina + financial crisis tanked trust again; 2008 trust at 17% during financial crisis; never returned to post-9/11 levels; sustained 16-22% range since 2008.'
      }
    },
    {
      id: 'govpubli5-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "Why have POLLS UNDERESTIMATED TRUMP SUPPORT in 2016 + 2020, and what METHODOLOGICAL REFORMS did the polling industry adopt by 2024?",
            options: [
              "POLLS UNDERESTIMATED TRUMP IN 2016 + 2020 due to MULTIPLE METHODOLOGICAL CHALLENGES, and the polling industry adopted SUBSTANTIAL REFORMS by 2024. (1) 2016 POLLING — National polls showed Clinton +3 (she actually won popular vote +2.1 — within MOE); STATE POLLS in Rust Belt failed dramatically (Michigan, Pennsylvania, Wisconsin all called for Clinton; Trump won all by ~1 pt); 538 famously gave Trump 28.6% chance of winning (most aggregators 1-15%); Trump won 304-227 EC. (2) 2020 POLLING — National polls showed Biden +8 (he actually won by +4.5 — outside MOE); state polls again underestimated Trump in Florida + Iowa + Ohio + Texas + North Carolina; Biden won 306-232 EC narrowly. (3) CAUSES OF UNDERESTIMATION — (a) NON-RESPONSE BIAS — Trump voters less likely to participate in polls (distrust of media + 'establishment' associated with pollsters); (b) EDUCATION WEIGHTING — pollsters historically didn't weight by education; non-college Whites became central to Trump coalition + were UNDERREPRESENTED in samples; (c) 'SHY TRUMP VOTER' / SOCIAL DESIRABILITY — some Trump voters reluctant to admit support to pollsters (controversial — empirical research mixed on magnitude of effect); (d) COVID-ERA effects 2020 — Trump voters less likely to be home + answering pollsters during stay-at-home orders; (e) STATE POLLING POOR QUALITY — academic + media organizations cut state polling investment; reliance on lower-quality online opt-in polls; (f) HOUSE EFFECTS — different pollsters use different methods (turnout models, weighting, etc.) + their systematic biases became visible; (g) LIKELY VOTER MODELS imperfect — pollsters' predictions of who would actually vote off in unprecedented Trump-era turnout patterns. (4) POLLING INDUSTRY REFORMS BY 2024 — (a) BETTER CELLPHONE + MOBILE INCLUSION — dual-frame sampling improved; some pollsters moved to ABS (address-based sampling) + online; (b) WEIGHTING BY EDUCATION — most pollsters now weight White non-college specifically (recognized as central Trump constituency); (c) RECALL VOTE WEIGHTING — pollsters now weight respondents by their reported 2020 vote (controversial but increasingly common); (d) VOTER FILE CALIBRATION — pollsters increasingly use voter file data (NGP VAN, i360, Catalist) to validate samples + voter intentions; (e) MULTI-MODE SAMPLING — combining phone + online + text + ABS to reduce single-mode biases; (f) GREATER METHODOLOGICAL TRANSPARENCY — Pew, NYT/Siena, ABC/WaPo published methodological reviews + polling adjustments; (g) PROBABILISTIC MODELS — improved poll aggregators (Silver Bulletin, NYT Upshot, Economist, FiveThirtyEight before closure) account for systematic underestimation patterns. (5) 2024 POLLING IMPROVED — most aggregators showed close race within MOE; some pollsters predicted Trump victory (TRAFALGAR, INSIDER ADVANTAGE — generally more Trump-friendly throughout cycle); POLYMARKET + KALSHI prediction markets consistently showed Trump favored (75%+ election day); Trump won popular vote +1.5% + 312-226 EC; aggregator forecasts more accurate than 2016 + 2020 (though still close to 50/50 reflecting genuine uncertainty); (6) REMAINING CHALLENGES — (a) DECLINING RESPONSE RATES (still 1-2% for phone polls, online opt-in problematic); (b) GROWING DIFFICULTY OF DEMOGRAPHIC REPRESENTATION (especially Hispanic + Asian + young + rural + non-college); (c) PARTISAN HOSTILITY toward pollsters complicating future polling; (d) AI-ENABLED POLLING tools emerging (uncertain validity); (e) POLLSTER CONSOLIDATION as costs rise + reliable methodology becomes more expensive; (f) CONTINUING risks of underestimation for any candidate triggering 'shy voter' phenomenon; (g) PREDICTION MARKETS now serious competitors to traditional polls (though subject to manipulation by large bettors).",
              "There is no Trump polling underestimation of any kind during the entire period in any region of the United States with no 2016 Clinton +3 national polls vs +2.1 actual + Rust Belt called for Clinton, no 2020 Biden +8 national polls vs +4.5 actual, no causes (non-response bias + education weighting + shy Trump voter + COVID-era + state polling cuts + house effects + likely voter models), no 2024 polling reforms (cellphone/mobile inclusion + education weighting + recall vote + voter file calibration + multi-mode + transparency + probabilistic models), no Trafalgar + Insider Advantage Trump-friendly pollsters, no Polymarket + Kalshi prediction markets, no remaining challenges (response rates + demographic representation + partisan hostility + AI + consolidation), and no polling underestimation of any kind during the entire period in any region",
              "Polls OVERESTIMATED Trump in 2016 + 2020 (rather than underestimated him) of any kind under any circumstance with no national polls Clinton +3 + Trump 304 EC win, no national polls Biden +8 vs +4.5 actual, no Rust Belt state polls calling for Clinton, no education weighting reforms, no recall vote weighting reforms, no voter file calibration, no Trafalgar + Insider Advantage Trump-friendly pollsters, and no proper polling underestimation of any kind during the entire period in any region of the United States during the period",
              "POLLING INDUSTRY IGNORED 2016 + 2020 underestimations + adopted NO REFORMS by 2024 (rather than substantial methodological reforms) of any kind under any circumstance with no cellphone/mobile inclusion improvement, no White non-college education weighting, no recall vote weighting, no voter file calibration (NGP VAN + i360 + Catalist), no multi-mode sampling, no methodological transparency from Pew + NYT/Siena + ABC/WaPo, no probabilistic models, and no proper polling reforms of any kind during the entire period in any region of the United States during the period",
            ],
            correctAnswer: 0,
            explanation: 'POLLS UNDERESTIMATED TRUMP 2016 + 2020 + REFORMS BY 2024: (1) 2016 — National polls Clinton +3 (actual +2.1 within MOE); Rust Belt state polls all called for Clinton (MI/PA/WI Trump won by ~1 pt); 538 gave Trump 28.6% (most 1-15%); Trump 304-227. (2) 2020 — National polls Biden +8 (actual +4.5 outside MOE); state polls underestimated Trump in FL + IA + OH + TX + NC; Biden 306-232. (3) CAUSES — (a) NON-RESPONSE BIAS — Trump voters less likely to participate (distrust media/establishment); (b) EDUCATION WEIGHTING — historically didn\'t weight by education; non-college Whites underrepresented; (c) "SHY TRUMP VOTER" — social desirability (controversial); (d) COVID 2020 — Trump voters less home; (e) STATE POLLING CUTS + reliance on lower-quality online opt-in; (f) HOUSE EFFECTS visible; (g) LIKELY VOTER MODELS imperfect for unprecedented turnout. (4) REFORMS BY 2024 — (a) cellphone/mobile inclusion improved; ABS + online; (b) WEIGHTING BY EDUCATION — most pollsters now weight White non-college; (c) RECALL VOTE WEIGHTING — by reported 2020 vote (controversial); (d) VOTER FILE CALIBRATION — NGP VAN + i360 + Catalist; (e) MULTI-MODE — phone + online + text + ABS; (f) METHODOLOGICAL TRANSPARENCY — Pew + NYT/Siena + ABC/WaPo; (g) PROBABILISTIC MODELS — Silver Bulletin + NYT Upshot + Economist + 538 (before closure). (5) 2024 IMPROVED — close race within MOE; TRAFALGAR + INSIDER ADVANTAGE Trump-friendly more accurate; POLYMARKET + KALSHI showed Trump favored 75%+ election day; Trump +1.5% popular + 312-226 EC. (6) REMAINING CHALLENGES — declining response rates; demographic representation (Hispanic + Asian + young + rural + non-college); partisan hostility toward pollsters; AI-enabled polling tools; pollster consolidation; "shy voter" phenomenon risk; prediction markets serious competitors (manipulation risk).'
          }
        ]
      }
    }
  ]
}
