export const govCivilLibertiesPart3Data = {
  topicSlug: 'gov-civil-liberties',
  sections: [
    {
      id: 'govcivil3-intro',
      type: 'text' as const,
      content: `
# 🗽 Civil Liberties

**Part 3 of 7 — Patterns & Examples**

---

| Section |
|---|
| Required AP Gov SCOTUS cases on civil liberties (7 cases) + the privacy cases named in the CED |
| Speech doctrine examples — symbolic, prior restraint, time-place-manner, campaign finance |
| Religion clause examples — Establishment + Free Exercise patterns |
| Criminal procedure examples — 4th + 5th + 6th + 8th Amendments |

> 🔑 Key idea: Of the 14 AP Gov required SCOTUS cases, 7 deal with civil liberties: ENGEL v. VITALE (1962), WISCONSIN v. YODER (1972), TINKER v. DES MOINES (1969), NYT v. UNITED STATES (1971), SCHENCK v. UNITED STATES (1919), GIDEON v. WAINWRIGHT (1963), and MCDONALD v. CHICAGO (2010). GRISWOLD v. CONNECTICUT (1965), ROE v. WADE (1973) and DOBBS v. JACKSON (2022) are NOT required cases, but the CED names them in EK 3.9.A.2, so know their holdings. Master facts + holding + reasoning + significance for each required case.
      `
    },
    {
      id: 'govcivil3-content',
      type: 'text' as const,
      content: `
## Required AP Gov SCOTUS Cases — Civil Liberties (plus the CED's privacy cases)

| Case | Year | Constitutional issue | Holding |
|---|---|---|---|
| **Engel v. Vitale** | 1962 | 1st Am Establishment Clause | Black majority struck NY Regents prayer in public schools; government cannot compose official prayer for school recitation; major incorporation of Establishment Clause to states |
| **Wisconsin v. Yoder** | 1972 | 1st Am Free Exercise | Burger UNANIMOUS — Amish children exempt from compulsory school attendance after 8th grade (age 14-16); applied compelling interest + least restrictive means; Amish religious life + 300 years of community outweighed state's interest in 2 additional years |
| **Tinker v. Des Moines** | 1969 | 1st Am Symbolic Speech | Fortas majority — Iowa students suspended for wearing black armbands protesting Vietnam War; 'students do not shed their constitutional rights at the schoolhouse gate'; symbolic speech protected unless 'material and substantial disruption' |
| **NYT v. United States** | 1971 | 1st Am Prior Restraint | Per curiam (6-3) — government cannot prevent NYT + Washington Post from publishing Pentagon Papers (classified Vietnam War history); 'heavy presumption against prior restraint'; government failed to meet burden |
| **Schenck v. United States** | 1919 | 1st Am Speech | Holmes UNANIMOUS — upheld Espionage Act conviction of socialist Charles Schenck for distributing anti-draft leaflets during WWI; 'clear-and-present-danger' standard; 'falsely shouting fire in a theatre' analogy; later effectively overturned by Brandenburg v. Ohio 1969 imminent-lawless-action test |
| **Gideon v. Wainwright** | 1963 | 6th Am Right to Counsel | Black UNANIMOUS — Florida defendant Clarence Gideon convicted of breaking-and-entering without counsel; Court held 6th Am right to counsel applies to STATE FELONY trials via 14th Am Due Process; OVERRULED Betts v. Brady 1942; states must provide counsel for indigent felony defendants |
| **McDonald v. Chicago** | 2010 | 2nd Am Incorporation | Alito majority (5-4) — INCORPORATED 2nd Am right to keep and bear arms (established as individual right in DC v. Heller 2008) to STATES via 14th Am Due Process Clause; struck Chicago handgun ban |
| **Roe v. Wade** (named in EK 3.9.A.2 — NOT a required case) | 1973 | 14th Am Substantive Due Process / Privacy | Blackmun majority (7-2) — established right to abortion; trimester framework — overruled Dobbs 2022 |
| **Griswold v. Connecticut** (named in EK 3.9.A.2 — NOT a required case) | 1965 | 14th Am Substantive Due Process / Privacy | Douglas majority — struck Connecticut law banning marital contraception use; established right to PRIVACY based on 'PENUMBRAS + EMANATIONS' from 1st + 3rd + 4th + 5th + 9th Amendments |

## Speech Doctrine Examples

| Doctrine | Example case | Application |
|---|---|---|
| **SYMBOLIC SPEECH** | Tinker v. Des Moines 1969 (black armbands); Texas v. Johnson 1989 (flag burning); Snyder v. Phelps 2011 (Westboro funeral protests) | Conduct intended to convey message + reasonably understood; protected unless meets specific exception |
| **PRIOR RESTRAINT** | Near v. Minnesota 1931; NYT v. US 1971 (Pentagon Papers); rare exceptions: troop movements, obscenity, national security |
| **TIME-PLACE-MANNER** | Hill v. Colorado 2000 (abortion clinic buffer zones); McCullen v. Coakley 2014 (struck broader buffer) | Content-neutral, narrowly tailored, leave alternative channels |
| **CAMPAIGN FINANCE** | Buckley v. Valeo 1976 (spending = speech); Citizens United v. FEC 2010 (corporate independent expenditures); McCutcheon v. FEC 2014 (aggregate limits) | Spending = expressive activity; SCOTUS skeptical of broad campaign finance restrictions |
| **STUDENT SPEECH** | Tinker 1969 (substantial disruption); Bethel v. Fraser 1986 (lewd school assembly speech); Hazelwood v. Kuhlmeier 1988 (school newspaper); Mahanoy v. B.L. 2021 (off-campus social media) |
| **OBSCENITY** | Miller v. California 1973 — three-part test: (1) prurient interest by community standards; (2) patently offensive; (3) lacks serious literary/artistic/political/scientific value |
| **HATE SPEECH** | NOT a categorical exception; protected unless meets fighting words (Chaplinsky), true threats (Virginia v. Black 2003), or incitement (Brandenburg) |

## Religion Clause Examples

| Clause | Pattern | Examples |
|---|---|---|
| **ESTABLISHMENT — schools** | Government cannot endorse, promote, or compel religion in public schools | Engel v. Vitale 1962 (Regents prayer struck); Abington v. Schempp 1963 (Bible reading struck); Wallace v. Jaffree 1985 (moment of silence with religious purpose struck); Lee v. Weisman 1992 (graduation prayer struck); Santa Fe v. Doe 2000 (football game prayer struck) |
| **ESTABLISHMENT — funding** | Aid to religious institutions tested for neutrality | Everson v. Board 1947 (school bus reimbursement allowed); Zelman v. Simmons-Harris 2002 (school vouchers allowed); Trinity Lutheran v. Comer 2017 + Espinoza v. Montana 2020 + Carson v. Makin 2022 (cannot exclude religious schools from neutral funding programs) |
| **FREE EXERCISE — exemption** | Government cannot prohibit religious practice; balance with neutral generally-applicable laws | Reynolds v. US 1879 (no polygamy exemption); Wisconsin v. Yoder 1972 (Amish school exemption); Employment Division v. Smith 1990 (no peyote exemption from neutral law); Burwell v. Hobby Lobby 2014 (RFRA contraceptive exemption); 303 Creative v. Elenis 2023 (web designer not required to design same-sex wedding sites) |

## Criminal Procedure Examples (4th + 5th + 6th + 8th)

| Amendment | Doctrine | Key cases |
|---|---|---|
| **4th — searches** | Warrant + probable cause; exclusionary rule with exceptions | Mapp v. Ohio 1961 (incorporated exclusionary rule); Terry v. Ohio 1968 (stop-and-frisk); Katz v. US 1967 (reasonable expectation of privacy); Riley v. California 2014 (cell phone warrant); Carpenter v. US 2018 (CSLI warrant) |
| **5th — self-incrimination** | Miranda warnings before custodial interrogation | Miranda v. Arizona 1966 (Warren majority); Dickerson v. US 2000 (reaffirmed Miranda) |
| **5th — double jeopardy** | Cannot be tried twice for same offense | Benton v. Maryland 1969 (incorporated); separate sovereigns doctrine (Gamble v. US 2019) |
| **6th — counsel** | Right to counsel in criminal cases | Gideon v. Wainwright 1963 (felonies); Argersinger v. Hamlin 1972 (any imprisonment); Padilla v. Kentucky 2010 (immigration consequences) |
| **6th — jury** | Speedy + public + jury trial | Duncan v. Louisiana 1968 (incorporated); Apprendi v. NJ 2000 (jury must find facts increasing sentence); Ramos v. Louisiana 2020 (unanimous jury required for state criminal conviction) |
| **8th — death penalty** | Cruel and unusual punishment limits | Furman v. Georgia 1972 (struck arbitrary application); Gregg v. Georgia 1976 (allowed with bifurcated trials + guidelines); Atkins v. Virginia 2002 (no execution of intellectually disabled); Roper v. Simmons 2005 (no execution for crimes by minors); Glossip v. Gross 2015 (lethal injection protocols) |
| **8th — excessive fines** | Limits on fines | Timbs v. Indiana 2019 (incorporated excessive fines clause; civil asset forfeiture limited) |

> 🔑 Key takeaway: Master the 7 civil-liberties REQUIRED CASES — Engel v. Vitale 1962, Wisconsin v. Yoder 1972, Tinker v. Des Moines 1969, NYT v. US 1971, Schenck v. US 1919, Gideon v. Wainwright 1963, McDonald v. Chicago 2010 — plus the holdings of Griswold 1965, Roe 1973 and Dobbs 2022, which EK 3.9.A.2 names (not required cases). Speech doctrines: SYMBOLIC, PRIOR RESTRAINT, TIME-PLACE-MANNER, CAMPAIGN FINANCE, STUDENT, OBSCENITY. Religion: ESTABLISHMENT (schools + funding) + FREE EXERCISE (exemptions). Criminal procedure: 4TH (searches) + 5TH (self-incrimination + double jeopardy) + 6TH (counsel + jury) + 8TH (death penalty + excessive fines).
      `
    },
    {
      id: 'govcivil3-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: "In *Morse v. Frederick* (2007), the Court upheld a school's punishment of a student who displayed a banner promoting illegal drug use at a school-supervised event. How does this ruling relate to *Tinker v. Des Moines* (1969)?",
            options: [
              "It narrows Tinker, letting schools limit some student expression even when that expression causes no substantial disruption",
              "It overrules Tinker, so students have no free-speech rights at all while they are on school grounds",
              "It extends Tinker, so all student speech at school is now protected regardless of its content",
              "It applies Tinker unchanged, finding that the banner caused a riot that disrupted classes"
            ],
            correctAnswer: 0,
            explanation: 'TINKER (1969, a required case) protects student symbolic speech unless it causes a material and substantial disruption — students do not shed their rights at the schoolhouse gate. MORSE (2007, an illustrative case for Topic 3.3; the stem gives its holding) carved out a narrower rule: a school may restrict student speech it reasonably sees as promoting illegal drug use, even without disruption. That NARROWS Tinker\'s protection rather than overruling or extending it — an example of the Court balancing social order and individual freedom (EK 3.3.A.2).'
          },
          {
            question: "How does the AP Gov required case *NYT v. United States* (1971 — Pentagon Papers) establish the 'heavy presumption against prior restraint'?",
            options: [
              "The Court refused to block publication, since the government could not overcome the heavy presumption against prior restraint",
              "The Court approved an injunction against publication, since national security claims automatically justify any prior restraint",
              "The Court let the newspapers publish but then upheld their editors' criminal convictions for printing the classified documents",
              "The Court held the heavy presumption against prior restraint does not apply when a President certifies that a leak harms a war"
            ],
            correctAnswer: 0,
            explanation: 'NYT v. US (1971 — Pentagon Papers) — HEAVY PRESUMPTION AGAINST PRIOR RESTRAINT: (1) FACTS — Ellsberg leaked PENTAGON PAPERS (classified Vietnam War history 1945-68) to NYT + WaPo; Nixon sought INJUNCTION; (2) HOLDING — 6-3 PER CURIAM — government failed HEAVY BURDEN; newspapers continued; (3) DOCTRINE — HEAVY PRESUMPTION AGAINST PRIOR RESTRAINT; government must show DIRECT, IMMEDIATE, IRREPARABLE HARM (troop movements, covert operative IDs); (4) PRECEDENT — Near v. Minnesota 1931 struck "malicious, scandalous, defamatory" newspaper injunction law; (5) MODERN — courts reject injunctions (US v. Progressive 1979 H-bomb withdrew); Wikileaks generally not subject to prior restraint; deep commitment to free press as check on government secrecy.'
          }
        ]
      }
    },
    {
      id: 'govcivil3-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — name the year**`,
      exercise: {
        questions: [
          {
            prompt: "Year *ENGEL v. VITALE* struck NY Regents school prayer under 1st Am Establishment Clause.",
            answer: '1962',
            acceptableAnswers: ['1962'],
            hint: 'Warren Court; one year before Abington v. Schempp struck Bible reading.'
          },
          {
            prompt: "Year *GIDEON v. WAINWRIGHT* required states to provide counsel for indigent felony defendants under 6th Am.",
            answer: '1963',
            acceptableAnswers: ['1963'],
            hint: 'Warren Court; Black majority opinion; Florida defendant.'
          },
          {
            prompt: "Name the exception the Court has allowed to the Miranda rule, which lets an unwarned statement be used as evidence when officers face an immediate threat: the ___ exception.",
            answer: 'public safety',
            acceptableAnswers: ['public safety', 'public-safety', 'public safety exception'],
            hint: 'EK 3.8.A.2 — Miranda protections are not absolute; danger to the public can justify questioning first.'
          }
        ]
      }
    },
    {
      id: 'govcivil3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each AP Gov required SCOTUS case to its constitutional issue.**`,
      exercise: {
        dropdowns: [
          {
            label: "Amish exemption from compulsory school attendance after 8th grade — Free Exercise Clause: ___",
            options: ['*Wisconsin v. Yoder*', '*Schenck v. US*', '*McDonald v. Chicago*', '*Engel v. Vitale*']
          },
          {
            label: "Espionage Act conviction for anti-draft leaflets — clear-and-present-danger speech standard: ___",
            options: ['*Wisconsin v. Yoder*', '*Schenck v. US*', '*McDonald v. Chicago*', '*Engel v. Vitale*']
          },
          {
            label: "Incorporated 2nd Am right to bear arms to states via 14th Am Due Process Clause: ___",
            options: ['*Wisconsin v. Yoder*', '*Schenck v. US*', '*McDonald v. Chicago*', '*Engel v. Vitale*']
          }
        ],
        correctAnswers: ['*Wisconsin v. Yoder*', '*Schenck v. US*', '*McDonald v. Chicago*'],
        hint1: 'Yoder 1972 — Amish parents challenged Wisconsin compulsory schooling through age 16; SCOTUS unanimously exempt under Free Exercise.',
        hint2: 'Schenck 1919 — Holmes; Espionage Act anti-draft leaflets; "falsely shouting fire in a theatre"; clear-and-present-danger; later replaced by Brandenburg 1969.',
        hint3: 'McDonald 2010 — Alito; incorporated 2nd Am to states via 14th Am Due Process; struck Chicago handgun ban; followed DC v. Heller 2008 individual right.'
      }
    },
    {
      id: 'govcivil3-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "How did *Gideon v. Wainwright* (1963) change criminal procedure across the United States?",
            options: [
              "States must provide lawyers to defendants who cannot afford one in felony cases, leading to public defender systems",
              "Lawyers are required only in death penalty cases, as Betts v. Brady had held for state trials",
              "Federal courts must appoint lawyers for every state defendant, so states no longer run any public defender offices of their own",
              "Defendants may waive counsel only with a judge's approval, ending self-representation in state courts"
            ],
            correctAnswer: 0,
            explanation: 'GIDEON (1963) — STATES must provide COUNSEL for indigent felony defendants. (1) FACTS — Clarence Gideon FL B&E; could not afford lawyer; FL law provided only in capital; convicted; HANDWRITTEN PETITION from prison; (2) HOLDING — Black UNANIMOUS — 6th Am via 14th Am Due Process; OVERRULED Betts v. Brady 1942 (special circumstances); counsel FUNDAMENTAL TO FAIR TRIAL; (3) IMPACT — states created PUBLIC DEFENDER systems; ~5,000 FL prisoners + thousands nationwide; Gideon retried + acquitted; (4) EXTENSIONS — Argersinger 1972 (misdemeanors with imprisonment); Strickland 1984 (ineffective assistance test); Padilla 2010 (immigration consequences); (5) Warren Court CRIMINAL PROCEDURE REVOLUTION (with Mapp 1961 + Miranda 1966); ongoing concerns about underfunded systems.'
          },
          {
            question: "How did *Engel v. Vitale* (1962) interpret the Establishment Clause and what was its political and educational impact?",
            options: [
              "School-sponsored prayer violates the Establishment Clause even if voluntary and nondenominational, a ruling that sparked backlash",
              "Voluntary school prayer is permitted under the Free Exercise Clause, so New York's Regents' prayer was upheld",
              "Only prayers that establish one denomination are banned, so the ruling had little effect on schools",
              "School prayer violates the Free Exercise Clause because it forces students to pray, and Congress passed an amendment overturning it"
            ],
            correctAnswer: 0,
            explanation: 'ENGEL v. VITALE (1962) — GOVERNMENT-SPONSORED PRAYER in PUBLIC SCHOOLS violates 1st Am ESTABLISHMENT CLAUSE. (1) FACTS — NY Regents composed NONDENOMINATIONAL daily prayer; technically voluntary; Engel + parents sued; (2) HOLDING — Black 6-1 struck; ESTABLISHMENT CLAUSE prohibits COMPOSING official prayer regardless of denominational neutrality or voluntary nature; (3) REASONING — Establishment Clause prevents government from ENDORSING/PROMOTING RELIGION; even nondenominational crosses line; voluntary doesn\'t cure due to COERCION ON YOUNG STUDENTS; (4) Extremely controversial; constitutional amendments to overturn failed; Abington v. Schempp 1963 (Bible reading); (5) Affirmed in Lee v. Weisman 1992 (graduation) + Santa Fe v. Doe 2000 (football); Engel\'s core holding banning government-sponsored school prayer still stands.'
          }
        ]
      }
    }
  ]
}
