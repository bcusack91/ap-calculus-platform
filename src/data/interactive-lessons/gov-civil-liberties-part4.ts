export const govCivilLibertiesPart4Data = {
  topicSlug: 'gov-civil-liberties',
  sections: [
    {
      id: 'govcivil4-intro',
      type: 'text' as const,
      content: `
# 🗽 Civil Liberties

**Part 4 of 7 — Connections & Interactions**

---

| Section |
|---|
| Civil liberties × Congress (statutes + RFRA + Patriot Act + FISA) |
| Civil liberties × President (executive orders + national security + emergencies) |
| Civil liberties × Federalism (state expansions + state restrictions + Dobbs trigger laws) |
| Civil liberties × Interest groups + media + technology (ACLU, NRA, social media) |

> 🔑 Key idea: Civil liberties involve INTERACTIONS across all branches + levels: × CONGRESS (legislative responses — RFRA 1993, Patriot Act 2001, FISA reauthorizations); × PRESIDENT (Korematsu 1944 internment, post-9/11 surveillance, Trump v. Hawaii 2018 travel ban); × FEDERALISM (states can EXPAND beyond federal floor — e.g., state constitutional protections for abortion post-Dobbs 2022; or RESTRICT — Bruen-incompatible state firearm laws challenged); × INTEREST GROUPS + MEDIA (ACLU litigation, NRA, social media platforms — 1st Am only restricts STATE not PRIVATE actors).
      `
    },
    {
      id: 'govcivil4-content',
      type: 'text' as const,
      content: `
## Civil Liberties × Congress

| Tool | Application |
|---|---|
| **Statutory protection beyond Constitution** | RELIGIOUS FREEDOM RESTORATION ACT (RFRA 1993) — restored compelling interest test for religious exemptions after Employment Division v. Smith 1990 narrowed Free Exercise; signed by Clinton; applied to federal government (City of Boerne v. Flores 1997 limited to federal); 21 states have STATE RFRAs |
| **National security surveillance** | USA PATRIOT ACT (2001) expanded surveillance authorities — roving wiretaps, business records (§ 215), National Security Letters; FISA AMENDMENTS ACT 2008 + FISA REAUTHORIZATIONS — § 702 (warrantless surveillance of foreigners; incidental collection of US persons' communications); FREEDOM ACT 2015 reformed NSA bulk collection after Snowden 2013 disclosures |
| **Civil rights enforcement (also affects liberties)** | Civil Rights Act 1964; Voting Rights Act 1965; ADA 1990; Hate Crimes Prevention Act 2009 |
| **Marriage + family** | Defense of Marriage Act 1996 (DOMA) defined marriage as man-woman; partially struck US v. Windsor 2013; rest displaced by Obergefell 2015; RESPECT FOR MARRIAGE ACT 2022 codified protection for same-sex + interracial marriage |
| **Privacy** | Privacy Act 1974 (federal records); HIPAA 1996 (medical privacy); ECPA 1986 + Stored Communications Act (electronic communications); CCPA + state privacy laws |
| **Constitutional override attempts** | Failed flag-burning constitutional amendments (1989-2006 multiple attempts after Texas v. Johnson 1989); failed school prayer amendments after Engel 1962 |

## Civil Liberties × President

| Action | Example |
|---|---|
| **Executive Orders** | EO 9066 (FDR 1942) authorized JAPANESE INTERNMENT — upheld in Korematsu v. US 1944 (later condemned in Trump v. Hawaii 2018); EO 13769 + 13780 (Trump 2017) TRAVEL BAN affecting majority-Muslim countries — modified version upheld in Trump v. Hawaii 2018 |
| **War powers** | LINCOLN suspended habeas corpus during Civil War (struck Ex parte Milligan 1866 for civilian areas); GUANTANAMO Bay detention post-9/11 — Hamdi v. Rumsfeld 2004 (US citizen detainees have due process), Boumediene v. Bush 2008 (habeas corpus extends to Guantanamo) |
| **National security surveillance** | NSA bulk collection programs revealed by Snowden 2013; PRISM + STELLAR WIND |
| **Pardon power** | Article II § 2 unlimited federal pardon (no state); used to address civil liberty controversies (e.g., Vietnam draft evader pardons by Carter 1977; Nixon's Ford 1974) |
| **Emergency powers** | National Emergencies Act 1976 framework; Trump 2019 border wall declaration; COVID-19 emergencies (federal + state) raised many civil liberty issues — vaccine mandates (NFIB v. OSHA 2022 struck), business closures, religious gatherings (Tandon v. Newsom 2021 protected) |
| **Office of Legal Counsel (OLC)** | DOJ component issuing executive branch legal interpretations affecting civil liberties — torture memos (2002, withdrawn), surveillance memos |

## Civil Liberties × Federalism

| Pattern | Example |
|---|---|
| **STATES CAN EXPAND beyond federal floor** | State constitutions can provide GREATER protection than federal Constitution (e.g., California right to privacy; Massachusetts marriage equality 2003 before Obergefell 2015); states can recognize unenumerated rights (e.g., state constitutional protections for abortion post-Dobbs 2022 in Michigan, Ohio, California) |
| **STATES CANNOT FALL BELOW federal floor** | After incorporation, states cannot violate Bill of Rights protections (e.g., must provide counsel post-Gideon 1963; cannot ban handguns post-McDonald 2010) |
| **POST-DOBBS ABORTION REGULATION** | Dobbs v. Jackson 2022 returned abortion to STATES; ~14 states enacted near-total bans via TRIGGER LAWS; ~18 states + DC expanded protections; voters in Kansas, Michigan, Ohio, Vermont, California, Kentucky, Montana, Ohio, Arizona, Maryland, New York, Nevada, Florida, South Dakota, Nebraska enshrined or rejected abortion-related amendments 2022-2024 |
| **POST-BRUEN GUN REGULATION** | Bruen 2022 history-and-tradition test invalidated NY may-issue concealed carry; states with similar laws (CA, NJ, MD, MA, HI) had to revise; ongoing litigation re: assault weapon bans + magazine limits |
| **STATE RFRAs** | 21 states + Indiana, Mississippi controversies (2015) — religious liberty laws beyond federal RFRA; some used to protect refusal to serve same-sex weddings |
| **MARIJUANA LAWS** | State-federal conflict — federal Controlled Substances Act prohibits while ~38 states have legalized medical + ~24 states recreational; raises commerce + supremacy + civil liberty issues |
| **DEATH PENALTY** | States vary widely — abolished in 23 states + moratoria; federal death penalty rare |

## Civil Liberties × Interest Groups + Media + Technology

| Actor | Role |
|---|---|
| **AMERICAN CIVIL LIBERTIES UNION (ACLU)** | Founded 1920; major civil liberties litigator; ~1.5M members; defends speech (often unpopular speech), religious liberty, criminal procedure, privacy; involved in many landmark cases including Scopes Monkey Trial 1925 + Tinker 1969 + Citizens United 2010 (filed amicus) + many Patriot Act + Snowden surveillance challenges |
| **NATIONAL RIFLE ASSOCIATION (NRA)** | Founded 1871; major 2nd Amendment advocacy; central to Heller 2008 + McDonald 2010 + Bruen 2022 cases; significant lobbying + electoral spending; declining membership + financial troubles in recent years |
| **NATIONAL ASSOCIATION OF EVANGELICALS + ALLIANCE DEFENDING FREEDOM** | Religious liberty advocacy; involved in Hobby Lobby 2014 + Trinity Lutheran 2017 + 303 Creative 2023 |
| **PLANNED PARENTHOOD + NARAL** | Reproductive rights advocacy; central to Roe 1973 + Casey 1992 + post-Dobbs ballot initiatives |
| **MEDIA + 1ST AM** | Press freedom protected against prior restraint (NYT v. US 1971); Branzburg v. Hayes 1972 — no constitutional reporters' privilege from grand jury subpoenas; ~50 state shield laws |
| **SOCIAL MEDIA + 1ST AM** | First Amendment only restricts STATE actors, not PRIVATE platforms (Manhattan Community Access v. Halleck 2019); Section 230 of Communications Decency Act 1996 immunizes platforms from user content; ongoing debates about platform moderation, government 'jawboning' (Murthy v. Missouri 2024 limited standing) |
| **NetChoice cases (2024)** | NETCHOICE v. PAXTON + NETCHOICE v. MOODY — challenged Texas + Florida laws restricting content moderation; SCOTUS sent back for further analysis but signaled platforms have 1st Am editorial rights |

> 🔑 Key takeaway: Civil liberties involve INTERACTIONS — × CONGRESS (RFRA 1993, Patriot Act 2001, FISA, Respect for Marriage Act 2022); × PRESIDENT (Korematsu 1944, Guantanamo, Trump v. Hawaii 2018, COVID emergencies); × FEDERALISM (states can EXPAND beyond federal floor — state abortion protections post-Dobbs 2022; cannot fall below); × INTEREST GROUPS (ACLU, NRA, ADF, Planned Parenthood); × MEDIA + TECHNOLOGY (1st Am only restricts STATE not PRIVATE; Section 230 platform immunity).
      `
    },
    {
      id: 'govcivil4-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: "How does the doctrine that the FIRST AMENDMENT only restricts STATE actors (not PRIVATE entities) shape modern social media debates?",
            options: [
              "The First Amendment limits only government, so private platforms may moderate posts, though government pressure raises questions",
              "The First Amendment binds large platforms as public forums, so they must carry every lawful post, however offensive",
              "The First Amendment lets the government order platforms to remove false posts, since private companies have no speech rights",
              "The First Amendment applies to platforms only when they earn ad revenue, so free services may moderate however they like"
            ],
            correctAnswer: 0,
            explanation: '1ST AM STATE-ACTION DOCTRINE in social media: (1) DOCTRINE — "Congress shall make no law" + structurally only GOVERNMENT, not PRIVATE; (2) MANHATTAN COMMUNITY ACCESS v. HALLECK (2019) — private public-access cable operator NOT state actor; (3) SECTION 230 (CDA 1996) — STATUTORY IMMUNITY for (a) user content + (b) good-faith moderation; protected platform model + explosive growth; (4) GOVERNMENT "JAWBONING" — MURTHY v. MISSOURI (2024) limited standing in case challenging Biden COVID misinformation outreach; (5) NETCHOICE 2024 (PAXTON + MOODY) — challenged TX + FL content moderation laws; SCOTUS sent back; signaled PLATFORMS HAVE 1ST AM EDITORIAL RIGHTS; (6) Wide latitude to moderate; users seek government intervention → compelled speech concerns.'
          },
          {
            question: "How does federalism interact with civil liberties protection AFTER *Dobbs v. Jackson* (2022) returned abortion to state regulation?",
            options: [
              "Abortion rights now vary by state, with bans in some and new protections in others via laws and ballot measures",
              "Abortion rights are now set by Congress alone, which passed a national standard that overrides all state protections after Dobbs",
              "Abortion rights are now fixed nationwide by Dobbs, which required every state to adopt the same trimester framework",
              "Abortion rights are now decided by federal courts case by case under strict scrutiny, which states cannot alter by law"
            ],
            correctAnswer: 0,
            explanation: 'POST-DOBBS FEDERALISM: (1) DOBBS — Alito overruled Roe 1973 + Casey 1992; returned to DEMOCRATIC POLITICAL PROCESSES; (2) STATE BANS — ~14 states near-total via TRIGGER LAWS (TX, MO, AR, MS, AL, KY, TN, LA, ID, OK, ND, SD, WV, WI initially); pre-Roe revivals (AZ later struck); exceptions vary; (3) STATE EXPANSIONS — ~18 states + DC (CA, NY, IL, MA, NJ); (4) BALLOT INITIATIVES — KANSAS Aug 2022 rejected restriction 59-41; MI/CA/VT Nov 2022 added protection; KY Nov 2022 rejected restriction; OH Aug + Nov 2023 added protection; MD/NY/NV/CO/AZ/MO Nov 2024 added; FL Nov 2024 failed 60% supermajority; SD/NE Nov 2024 rejected; (5) STATE COURTS applied STATE CONSTITUTIONAL protections (KS 2019, FL pre-DeSantis 2023, OK 2023); (6) Biden EOs; FDA v. AHM 2024 (standing); ongoing fed v. state v. ballot.'
          }
        ]
      }
    },
    {
      id: 'govcivil4-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz**`,
      exercise: {
        questions: [
          {
            prompt: "Year RELIGIOUS FREEDOM RESTORATION ACT (RFRA) restored compelling interest test for religious exemptions.",
            answer: '1993',
            acceptableAnswers: ['1993'],
            hint: 'Clinton signed; Congress responded to Employment Division v. Smith 1990.'
          },
          {
            prompt: "Year USA PATRIOT ACT expanded post-9/11 surveillance authorities.",
            answer: '2001',
            acceptableAnswers: ['2001'],
            hint: 'Signed Oct 26 2001; only 6 weeks after 9/11 attacks.'
          },
          {
            prompt: "Year *KOREMATSU v. UNITED STATES* upheld Japanese internment via FDR's Executive Order 9066.",
            answer: '1944',
            acceptableAnswers: ['1944'],
            hint: 'WWII; effectively repudiated by Trump v. Hawaii 2018.'
          }
        ]
      }
    },
    {
      id: 'govcivil4-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each civil-liberties × institution interaction to its example.**`,
      exercise: {
        dropdowns: [
          {
            label: "Congressional statutory protection beyond Constitution after Employment Division v. Smith 1990: ___",
            options: ['RFRA 1993', 'EO 9066 (1942)', 'Section 230 (1996)', 'State trigger laws post-Dobbs']
          },
          {
            label: "Presidential executive order during WWII authorizing Japanese internment: ___",
            options: ['RFRA 1993', 'EO 9066 (1942)', 'Section 230 (1996)', 'State trigger laws post-Dobbs']
          },
          {
            label: "Post-Dobbs federalism — ~14 states enacted near-total abortion restrictions effective immediately: ___",
            options: ['RFRA 1993', 'EO 9066 (1942)', 'Section 230 (1996)', 'State trigger laws post-Dobbs']
          }
        ],
        correctAnswers: ['RFRA 1993', 'EO 9066 (1942)', 'State trigger laws post-Dobbs'],
        hint1: 'RFRA 1993 — Clinton signed; restored compelling-interest + least-restrictive-means test for religious exemptions; congressional response to Employment Division v. Smith 1990.',
        hint2: 'EO 9066 1942 — FDR authorized Japanese internment; ~120,000 forcibly relocated; upheld Korematsu 1944; effectively repudiated Trump v. Hawaii 2018.',
        hint3: 'Trigger laws — pre-existing state laws designed to take effect immediately upon overruling of Roe; ~14 states implemented near-total bans within days/weeks of Dobbs June 2022.'
      }
    },
    {
      id: 'govcivil4-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "How did the SNOWDEN DISCLOSURES (2013) affect the relationship between civil liberties and national security surveillance?",
            options: [
              "Revelations of bulk phone data collection led Congress to pass the 2015 USA Freedom Act, ending NSA storage of those records",
              "Revelations of bulk collection led Congress to expand the program, making NSA phone data storage permanent in 2015",
              "Revelations of drone strikes led the Supreme Court to strike down the Patriot Act in 2015, ending all NSA foreign surveillance",
              "Revelations of bulk collection had no policy effect, since courts ruled the disclosures inadmissible"
            ],
            correctAnswer: 0,
            explanation: 'SNOWDEN 2013: (1) NSA contractor leaked to Guardian + WaPo: (a) BULK COLLECTION of US phone metadata under § 215 Patriot Act; (b) PRISM internet under § 702 FISA Amendments Act 2008; (c) STELLAR WIND; (d) intl surveillance of allies; (2) ACLU + EFF challenges; Klayman v. Obama 2013 (likely unconstitutional); ACLU v. Clapper 2015 (2nd Cir — § 215 didn\'t authorize bulk); (3) USA FREEDOM ACT 2015 — ended bulk metadata; telecoms retain data; NSA needs court orders for specific queries; FISC reform; (4) FISA § 702 reauths 2017 + 2024 — INCIDENTAL COLLECTION of US persons; backdoor searches; (5) Strengthened ENCRYPTION (Apple-FBI 2016); ODNI transparency reports; warrant canaries; (6) Snowden Russia asylum; Espionage Act indicted; (7) Fundamental shift in public debate.'
          },
          {
            question: "How did *Trump v. Hawaii* (2018) interact with civil liberties + presidential power + judicial review?",
            options: [
              "The Court upheld the travel ban under rational basis review, deferring to presidential power over immigration and national security",
              "The Court struck down the travel ban as religious discrimination, reaffirming Korematsu's strict scrutiny rule",
              "The Court declined to review the travel ban, calling immigration a nonjusticiable political question reserved to Congress and the President",
              "The Court upheld the travel ban under strict scrutiny, finding it narrowly tailored to stop terrorism within executive power"
            ],
            correctAnswer: 0,
            explanation: 'TRUMP v. HAWAII (2018) UPHELD third travel ban (Proclamation 9645): (1) FACTS — Trump multiple EOs restricting entry from Muslim-majority (Iran, Libya, Somalia, Syria, Yemen — earlier versions struck/modified); v3 added Venezuela + N. Korea + nuance; (2) HOLDING — Roberts 5-4 UPHELD; DEFERENTIAL RATIONAL BASIS for immigration + national security; INA § 1182(f) broad presidential authority; rejected Establishment Clause challenge despite Trump anti-Muslim statements; (3) KOREMATSU REPUDIATION — Roberts: "Korematsu was gravely wrong the day it was decided"; rare formal repudiation; (4) DISSENT — Sotomayor + Ginsburg + Breyer + Kagan analogized to Korematsu; majority ignored animus; (5) Confirmed broad presidential authority over immigration + national security; (6) Biden Jan 20 2021 revoked; (7) Tension between civil liberties (1st Am Establishment + Equal Protection + due process) and presidential national security authority.'
          }
        ]
      }
    }
  ]
}
