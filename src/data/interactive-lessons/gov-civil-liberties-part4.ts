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
              "FIRST AMENDMENT STATE-ACTION DOCTRINE shapes modern social media debates: (1) DOCTRINE — First Amendment by its terms ('Congress shall make no law') and structurally applies only to GOVERNMENT actors, not PRIVATE entities; private companies can moderate user content without First Amendment violation; (2) MANHATTAN COMMUNITY ACCESS CORP v. HALLECK (2019) — held private operator of public access cable channels was NOT state actor and could moderate content; reaffirmed narrow state-action doctrine; (3) SECTION 230 of Communications Decency Act 1996 — provides additional STATUTORY IMMUNITY to platforms for (a) user-generated content and (b) good-faith content moderation; protected platform business model and explosive growth; (4) GOVERNMENT 'JAWBONING' — government officials pressuring platforms raises state-action questions; MURTHY v. MISSOURI (2024) limited standing in case challenging Biden administration COVID-19 misinformation outreach to platforms; (5) NETCHOICE CASES (2024) — NETCHOICE v. PAXTON + NETCHOICE v. MOODY — challenged Texas + Florida laws restricting platform content moderation; SCOTUS sent back for further analysis but signaled PLATFORMS HAVE 1ST AM EDITORIAL RIGHTS — laws compelling platforms to host certain content raise 1st Am concerns; (6) IMPLICATIONS — private platforms have wide latitude to moderate; users frustrated with moderation often seek government intervention (which raises 1st Am concerns about compelled speech); ongoing constitutional + statutory + political debates",
              "There is no First Amendment state-action doctrine of any kind during the entire period in any region of the United States with no government-only application, no Manhattan Community Access v. Halleck 2019, no Section 230 platform immunity, no government jawboning concerns, no Murthy v. Missouri 2024 standing limitation, no NetChoice 2024 cases, and no platform editorial rights of any kind during the entire period in any region",
              "The First Amendment applies EQUALLY to private companies and government actors of any kind under any circumstance with no state-action requirement, no Manhattan Community Access v. Halleck 2019 narrowing, no private platform moderation latitude, no Section 230 statutory immunity, and no government-only application of First Amendment of any kind during the entire period in any region of the United States during the period",
              "Section 230 of Communications Decency Act 1996 was REPEALED in 2024 and platforms no longer have statutory immunity for user content of any kind under any circumstance with no Section 230 immunity, no good-faith moderation protection, no platform business model protection, and no continued statutory immunity of any kind during the entire period from 1996 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: '1ST AM STATE-ACTION DOCTRINE in social media: (1) DOCTRINE — "Congress shall make no law" + structurally only GOVERNMENT, not PRIVATE; (2) MANHATTAN COMMUNITY ACCESS v. HALLECK (2019) — private public-access cable operator NOT state actor; (3) SECTION 230 (CDA 1996) — STATUTORY IMMUNITY for (a) user content + (b) good-faith moderation; protected platform model + explosive growth; (4) GOVERNMENT "JAWBONING" — MURTHY v. MISSOURI (2024) limited standing in case challenging Biden COVID misinformation outreach; (5) NETCHOICE 2024 (PAXTON + MOODY) — challenged TX + FL content moderation laws; SCOTUS sent back; signaled PLATFORMS HAVE 1ST AM EDITORIAL RIGHTS; (6) Wide latitude to moderate; users seek government intervention → compelled speech concerns.'
          },
          {
            question: "How does federalism interact with civil liberties protection AFTER *Dobbs v. Jackson* (2022) returned abortion to state regulation?",
            options: [
              "POST-DOBBS FEDERALISM + ABORTION: (1) DOBBS HOLDING — Alito majority overruled Roe 1973 + Casey 1992; held Constitution does not protect right to abortion; returned issue to DEMOCRATIC POLITICAL PROCESSES at federal + state level; (2) STATE BANS — ~14 states enacted near-total bans via TRIGGER LAWS that took effect immediately upon Dobbs (TX, MO, AR, MS, AL, KY, TN, LA, ID, OK, ND, SD, WV, WI initially); some states with pre-Roe bans revived (e.g., AZ later struck by state court); exceptions vary (life of mother, rape/incest, fetal abnormality, gestational age); (3) STATE EXPANSIONS — ~18 states + DC expanded protections via legislation (CA, NY, IL, MA, NJ, etc.); (4) BALLOT INITIATIVES — voters directly enshrined or rejected abortion-related amendments 2022-2024: KANSAS Aug 2022 (rejected restriction 59-41); MICHIGAN, CALIFORNIA, VERMONT Nov 2022 (added protection); KENTUCKY Nov 2022 (rejected restriction); OHIO Aug + Nov 2023 (added protection); MARYLAND, NEW YORK, NEVADA, COLORADO, ARIZONA, MISSOURI Nov 2024 (added protection); FLORIDA Nov 2024 (failed 60% supermajority); SOUTH DAKOTA, NEBRASKA Nov 2024 (rejected); (5) STATE COURTS — applied STATE CONSTITUTIONAL protections (Kansas 2019, Florida pre-DeSantis 2023, Oklahoma 2023) to strike state abortion bans; (6) FEDERAL POLICY — Biden administration EOs supporting abortion access; FDA mifepristone access challenged in FDA v. Alliance for Hippocratic Medicine 2024 (standing); ongoing federal v. state v. ballot litigation",
              "There is no post-Dobbs federalism interaction of any kind during the entire period from 2022 onward in any region of the United States with no state trigger laws, no ~14 state bans, no ~18 state expansions, no Kansas Aug 2022 ballot rejection, no Michigan/California/Vermont Nov 2022 protections, no Ohio 2023 protection, no Florida Nov 2024 60% failure, no state constitutional protections, and no federal policy responses of any kind during the entire period in any region",
              "Dobbs v. Jackson (2022) PROHIBITED states from regulating abortion and centralized abortion regulation in the FEDERAL government of any kind under any circumstance with no return to states, no trigger laws, no state expansions, no ballot initiatives, no state constitutional protections, and no federalism interaction of any kind during the entire period from 2022 onward in any region of the United States during the period",
              "All ballot initiatives on abortion 2022-2024 PASSED RESTRICTIONS and FAILED PROTECTIONS of any kind under any circumstance with no Kansas Aug 2022 rejection of restriction, no Michigan/California/Vermont Nov 2022 protections, no Ohio Nov 2023 protection, no Florida Nov 2024 60% failure to pass protection, and no state-level expansion via direct democracy of any kind during the entire period from 2022 onward in any region of the United States during the period"
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
              "SNOWDEN DISCLOSURES 2013 — comprehensive impact on civil liberties + national security: (1) DISCLOSURES — Edward Snowden, NSA contractor, leaked classified documents to Guardian + Washington Post revealing massive surveillance programs including (a) BULK COLLECTION of US phone metadata under § 215 of Patriot Act; (b) PRISM program collecting internet communications under § 702 of FISA Amendments Act 2008; (c) STELLAR WIND program; (d) international surveillance of allied leaders; (2) LEGAL CHALLENGES — ACLU + EFF filed lawsuits challenging programs; Klayman v. Obama (2013) found bulk collection likely unconstitutional; ACLU v. Clapper (2015 2nd Cir) found § 215 did NOT authorize bulk collection; (3) CONGRESSIONAL RESPONSE — USA FREEDOM ACT 2015 — ended NSA bulk metadata collection; required telecommunications companies to retain data + NSA to obtain court orders for specific queries; reformed FISA Court (FISC) procedures; (4) ONGOING DEBATES — FISA § 702 reauthorizations 2017 + 2024 — controversies about INCIDENTAL COLLECTION of US persons' communications when targeting foreign nationals; backdoor searches; (5) ADDITIONAL IMPACT — strengthened ENCRYPTION (Apple-FBI 2016 dispute); transparency reforms (Office of Director of National Intelligence transparency reports); industry adoption of warrant canaries + transparency reports; (6) SNOWDEN STATUS — granted asylum in Russia; remains under indictment for Espionage Act violations; pardons advocated by some; (7) CIVIL LIBERTIES IMPACT — fundamental shift in PUBLIC DEBATE about surveillance; influenced subsequent technology policy + privacy legislation",
              "There are no Snowden disclosures of any kind during the entire period from 2013 onward in any region of the United States with no NSA contractor leak, no bulk phone metadata collection revelation, no PRISM program, no Stellar Wind, no Klayman v. Obama 2013, no ACLU v. Clapper 2015, no USA Freedom Act 2015, no FISA 702 reauthorizations, no Apple-FBI 2016 dispute, and no Snowden Russia asylum of any kind during the entire period in any region",
              "Snowden disclosures 2013 RESULTED IN EXPANDED surveillance authorities and ELIMINATED civil liberties protections of any kind under any circumstance with no USA Freedom Act 2015 reform, no end of NSA bulk collection, no court order requirement, no FISC reform, no encryption strengthening, and no civil liberties debate impact of any kind during the entire period from 2013 onward in any region of the United States during the period",
              "Edward Snowden was an NSA EMPLOYEE (not a contractor) and his disclosures were declassified by the Obama administration (not leaked) of any kind under any circumstance with no contractor status, no leak to journalists, no Guardian or Washington Post publication, no Espionage Act indictment, no Russia asylum, and no civil liberties impact of any kind during the entire period from 2013 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'SNOWDEN 2013: (1) NSA contractor leaked to Guardian + WaPo: (a) BULK COLLECTION of US phone metadata under § 215 Patriot Act; (b) PRISM internet under § 702 FISA Amendments Act 2008; (c) STELLAR WIND; (d) intl surveillance of allies; (2) ACLU + EFF challenges; Klayman v. Obama 2013 (likely unconstitutional); ACLU v. Clapper 2015 (2nd Cir — § 215 didn\'t authorize bulk); (3) USA FREEDOM ACT 2015 — ended bulk metadata; telecoms retain data; NSA needs court orders for specific queries; FISC reform; (4) FISA § 702 reauths 2017 + 2024 — INCIDENTAL COLLECTION of US persons; backdoor searches; (5) Strengthened ENCRYPTION (Apple-FBI 2016); ODNI transparency reports; warrant canaries; (6) Snowden Russia asylum; Espionage Act indicted; (7) Fundamental shift in public debate.'
          },
          {
            question: "How did *Trump v. Hawaii* (2018) interact with civil liberties + presidential power + judicial review?",
            options: [
              "TRUMP v. HAWAII (2018) UPHELD third version of Trump's TRAVEL BAN (Proclamation 9645) restricting entry from majority-Muslim countries: (1) FACTS — Trump issued multiple executive orders restricting entry from primarily Muslim-majority countries (Iran, Libya, Somalia, Syria, Yemen — earlier versions struck or modified); third version added Venezuela + North Korea + nuanced restrictions; (2) HOLDING — Roberts majority (5-4) UPHELD ban; applied DEFERENTIAL RATIONAL BASIS REVIEW to immigration restrictions invoking national security; held statute (Immigration and Nationality Act § 1182(f)) granted broad presidential authority to suspend entry; rejected Establishment Clause challenge despite Trump's anti-Muslim campaign statements; (3) KOREMATSU REPUDIATION — Roberts opinion explicitly REPUDIATED Korematsu v. US (1944) which had upheld Japanese internment — 'Korematsu was gravely wrong the day it was decided'; rare formal repudiation; (4) DISSENT — Sotomayor + Ginsburg + Breyer + Kagan dissented; analogized to Korematsu; argued majority ignored president's anti-Muslim statements + animus toward Islamic faith; (5) PRESIDENTIAL POWER — confirmed broad presidential authority over immigration + national security; demonstrated pattern of judicial deference to executive in immigration; (6) BIDEN RESPONSE — Day 1 (Jan 20 2021) revoked Trump travel ban via proclamation; (7) BROADER IMPLICATIONS — illustrates tension between civil liberties (1st Am Establishment Clause + Equal Protection + due process) and presidential national security authority; Court historically defers in immigration + national security contexts even when liberty interests at stake",
              "There is no Trump v. Hawaii 2018 of any kind during the entire period from 2018 onward in any region of the United States with no travel ban, no Trump Proclamation 9645, no Roberts 5-4 majority, no rational basis review, no Korematsu repudiation, no Sotomayor Korematsu analogy dissent, no broad presidential immigration authority, no Biden Jan 20 2021 revocation, and no civil liberties tension of any kind during the entire period in any region",
              "Trump v. Hawaii (2018) STRUCK the travel ban as violating the Establishment Clause and EXPANDED civil liberties protections of any kind under any circumstance with no Roberts 5-4 upholding, no rational basis review, no rejection of Establishment Clause challenge, no broad presidential immigration authority, and no Korematsu repudiation of any kind during the entire period from 2018 onward in any region of the United States during the period",
              "Trump v. Hawaii (2018) AFFIRMED Korematsu v. US (1944) and ENDORSED Japanese internment of any kind under any circumstance with no Roberts opinion repudiation, no 'gravely wrong the day it was decided' language, no rare formal repudiation, no Sotomayor Korematsu analogy dissent, and no condemnation of internment of any kind during the entire period from 2018 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'TRUMP v. HAWAII (2018) UPHELD third travel ban (Proclamation 9645): (1) FACTS — Trump multiple EOs restricting entry from Muslim-majority (Iran, Libya, Somalia, Syria, Yemen — earlier versions struck/modified); v3 added Venezuela + N. Korea + nuance; (2) HOLDING — Roberts 5-4 UPHELD; DEFERENTIAL RATIONAL BASIS for immigration + national security; INA § 1182(f) broad presidential authority; rejected Establishment Clause challenge despite Trump anti-Muslim statements; (3) KOREMATSU REPUDIATION — Roberts: "Korematsu was gravely wrong the day it was decided"; rare formal repudiation; (4) DISSENT — Sotomayor + Ginsburg + Breyer + Kagan analogized to Korematsu; majority ignored animus; (5) Confirmed broad presidential authority over immigration + national security; (6) Biden Jan 20 2021 revoked; (7) Tension between civil liberties (1st Am Establishment + Equal Protection + due process) and presidential national security authority.'
          }
        ]
      }
    }
  ]
}
