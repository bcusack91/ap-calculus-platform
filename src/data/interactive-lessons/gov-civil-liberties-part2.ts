export const govCivilLibertiesPart2Data = {
  topicSlug: 'gov-civil-liberties',
  sections: [
    {
      id: 'govcivil2-intro',
      type: 'text' as const,
      content: `
# 🗽 Civil Liberties

**Part 2 of 7 — Key Processes**

---

| Section |
|---|
| First Amendment religion clauses (Establishment + Free Exercise) |
| First Amendment speech doctrines (clear-and-present-danger → Brandenburg → modern tests) |
| 2nd Amendment + 4th Amendment doctrine |
| Right to privacy + due process evolution |

> 🔑 Key idea: First Amendment religion: ESTABLISHMENT (Engel 1962, Lemon 1971, Kennedy v. Bremerton 2022) + FREE EXERCISE (Yoder 1972, Smith 1990, Hobby Lobby 2014). Speech evolution: CLEAR-AND-PRESENT-DANGER (Schenck 1919) → BRANDENBURG IMMINENT LAWLESS ACTION (1969); SYMBOLIC SPEECH (Tinker 1969, Texas v. Johnson 1989); CONTENT NEUTRALITY (R.A.V. v. St. Paul 1992); UNPROTECTED SPEECH categories. 2nd Am: HELLER 2008 (individual right) → MCDONALD 2010 (incorporated) → BRUEN 2022 (history-and-tradition test). 4th Am: WARRANT REQUIREMENT + EXCLUSIONARY RULE (Mapp 1961) + EXCEPTIONS. PRIVACY: Griswold 1965 → Roe 1973 → Casey 1992 → Dobbs 2022 (overruled Roe).
      `
    },
    {
      id: 'govcivil2-content',
      type: 'text' as const,
      content: `
## First Amendment — Religion Clauses

| Clause | Text | Doctrine | Key cases |
|---|---|---|---|
| **Establishment** | 'Congress shall make no law respecting an establishment of religion' | Government cannot establish official religion or favor one religion over others (or religion over non-religion); recently shifted from LEMON TEST to HISTORICAL TRADITION TEST | Engel v. Vitale 1962 (school prayer struck), Lemon v. Kurtzman 1971 (3-prong test: secular purpose + primary effect neither advances nor inhibits religion + no excessive entanglement), Kennedy v. Bremerton 2022 (overruled Lemon; coach's post-game prayer protected) |
| **Free Exercise** | 'or prohibiting the free exercise thereof' | Government cannot prohibit religious practice; balance with neutral generally-applicable laws | Reynolds v. US 1879 (no polygamy exemption), Wisconsin v. Yoder 1972 (Amish exempt from compulsory school after 8th grade), Employment Division v. Smith 1990 (Scalia: neutral generally-applicable laws don\'t require religious exemption), Burwell v. Hobby Lobby 2014 (RFRA 1993 protects closely-held corporations from contraceptive mandate) |

## First Amendment — Speech Doctrines

| Era | Standard | Key case |
|---|---|---|
| **1919-1969** | CLEAR AND PRESENT DANGER | Schenck v. US 1919 (Holmes: 'falsely shouting fire in a theatre'); Whitney v. California 1927 |
| **1969-present** | IMMINENT LAWLESS ACTION (BRANDENBURG TEST) | Brandenburg v. Ohio 1969 — speech protected unless directed to inciting imminent lawless action AND likely to produce such action |
| **Symbolic speech** | Conduct intended to convey message + others would understand | Tinker v. Des Moines 1969 (black armbands), Texas v. Johnson 1989 (flag burning), Snyder v. Phelps 2011 (Westboro funeral protests) |
| **Content neutrality** | Content-based regulation gets STRICT SCRUTINY | R.A.V. v. St. Paul 1992 (cross-burning ordinance struck), Reed v. Town of Gilbert 2015 |
| **Prior restraint** | Strong presumption AGAINST prior restraint | Near v. Minnesota 1931, NYT v. US 1971 (Pentagon Papers) |
| **Commercial speech** | Less protection than political; CENTRAL HUDSON test | Central Hudson v. PSC 1980, Sorrell v. IMS Health 2011 |
| **Campaign finance** | Spending = speech (Buckley v. Valeo 1976) | Citizens United v. FEC 2010 (corporate independent expenditures), McCutcheon v. FEC 2014 (aggregate limits) |

UNPROTECTED categories: (1) INCITEMENT (Brandenburg); (2) FIGHTING WORDS (Chaplinsky v. New Hampshire 1942); (3) TRUE THREATS (Virginia v. Black 2003); (4) OBSCENITY (Miller v. California 1973 three-part test); (5) DEFAMATION of private individuals; for public figures NYT v. Sullivan 1964 actual malice standard; (6) CHILD PORNOGRAPHY (NY v. Ferber 1982).

## Second Amendment

| Year | Case | Holding |
|---|---|---|
| 2008 | DC v. Heller | INDIVIDUAL right to keep firearms in home for self-defense (5-4 Scalia majority); REJECTED collective militia-only interpretation |
| 2010 | McDonald v. Chicago | INCORPORATED 2nd Am to states via 14th Am Due Process Clause |
| 2022 | NY State Rifle v. Bruen | Established HISTORY-AND-TRADITION TEST — government must show regulation is consistent with HISTORICAL TRADITION of firearm regulation; struck NY's may-issue concealed carry permit law |
| 2024 | US v. Rahimi | Upheld federal law barring those subject to domestic violence restraining orders from possessing firearms; refined Bruen test |

## Fourth Amendment

| Doctrine | Standard | Key case |
|---|---|---|
| **Warrant requirement** | Generally required for searches; based on PROBABLE CAUSE; supported by oath; particularly describing place + things | Katz v. US 1967 (reasonable expectation of privacy) |
| **Exclusionary rule** | Evidence obtained in violation excluded from criminal trial | Weeks v. US 1914 (federal); Mapp v. Ohio 1961 (incorporated to states); US v. Leon 1984 (good-faith exception) |
| **Stop-and-frisk** | Brief stop based on REASONABLE SUSPICION (lower than probable cause) | Terry v. Ohio 1968 |
| **Automobile exception** | No warrant if probable cause + readily mobile | Carroll v. US 1925 |
| **Exigent circumstances** | No warrant if emergency (hot pursuit, evidence destruction, safety) | Kentucky v. King 2011 |
| **Cell phone privacy** | Warrant required for cell phone search incident to arrest | Riley v. California 2014 |
| **Cell-site location** | Warrant required for historical cell-site location info (CSLI) | Carpenter v. US 2018 |

## Right to Privacy

The Constitution does NOT explicitly mention 'privacy' but the Court has recognized PRIVACY RIGHTS through penumbras of multiple amendments + 14th Am substantive due process.

| Year | Case | Holding |
|---|---|---|
| 1965 | Griswold v. Connecticut | Right to PRIVACY in marital contraception use; 'penumbras' from 1st + 3rd + 4th + 5th + 9th Amendments |
| 1972 | Eisenstadt v. Baird | Extended Griswold to unmarried couples |
| 1973 | Roe v. Wade | Right to abortion based on right to privacy; trimester framework |
| 1992 | Planned Parenthood v. Casey | REPLACED trimester with UNDUE BURDEN STANDARD; reaffirmed central holding of Roe |
| 2003 | Lawrence v. Texas | Struck Texas anti-sodomy law; PRIVATE INTIMATE CONDUCT protected |
| 2015 | Obergefell v. Hodges | Same-sex marriage right under 14th Am Due Process + Equal Protection |
| 2022 | DOBBS v. JACKSON | OVERRULED Roe + Casey; 'right to abortion is not deeply rooted in this Nation\'s history and tradition'; returned abortion to state regulation |

> 🔑 Key takeaway: First Amendment SPEECH evolved from CLEAR-AND-PRESENT-DANGER (Schenck 1919) to BRANDENBURG IMMINENT LAWLESS ACTION (1969). RELIGION clauses recently moved from LEMON TEST to HISTORICAL TRADITION (Kennedy v. Bremerton 2022). 2ND AM: HELLER 2008 individual right + MCDONALD 2010 incorporated + BRUEN 2022 history-and-tradition. 4TH AM: WARRANT + EXCLUSIONARY RULE + exceptions. PRIVACY: Griswold 1965 → Roe 1973 → Casey 1992 → DOBBS 2022 OVERRULED Roe; abortion returned to states.
      `
    },
    {
      id: 'govcivil2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: "How did *Brandenburg v. Ohio* (1969) modify the *Schenck v. United States* (1919) clear-and-present-danger standard for speech?",
            options: [
              "It replaced clear and present danger with a stricter test protecting speech unless it incites imminent lawless action",
              "It replaced imminent lawless action with clear and present danger, letting states punish more antiwar speech",
              "It reaffirmed clear and present danger, upholding the conviction of a Klan leader for advocating violence",
              "It abolished all limits on speech, so even direct incitement to immediate violence is now protected"
            ],
            correctAnswer: 0,
            explanation: 'BRANDENBURG (1969) replaced SCHENCK (1919) clear-and-present-danger with more SPEECH-PROTECTIVE IMMINENT LAWLESS ACTION test. (1) SCHENCK 1919 (Holmes) — clear-and-present-danger; Espionage Act anti-draft leaflets; "falsely shouting fire"; (2) WHITNEY 1927 + DENNIS 1951 — broad version to convict communists; (3) BRANDENBURG 1969 — KKK leader, Ohio criminal syndicalism; unanimous REVERSED + adopted IMMINENT LAWLESS ACTION: speech protected unless (a) DIRECTED TO inciting imminent lawless action AND (b) LIKELY to produce; (4) Both INTENT to incite imminent (not future) AND LIKELIHOOD; mere advocacy of future violence protected; (5) Much more SPEECH-PROTECTIVE; protects most political/extremist; governs incitement.'
          },
          {
            question: "What does the *Bruen* (2022) HISTORY-AND-TRADITION TEST require for 2nd Amendment regulations?",
            options: [
              "Gun laws must fit the nation's historical tradition of firearm regulation, not just serve an important interest",
              "Gun laws must pass strict scrutiny rather than any tradition test, so states need a compelling interest and narrow means",
              "Gun laws need only a rational basis, so states may ignore history and require permit applicants to show proper cause",
              "Gun laws must be approved by Congress, since the Second Amendment reserves firearm regulation to the national government"
            ],
            correctAnswer: 0,
            explanation: 'BRUEN (2022) established HISTORY-AND-TRADITION TEST, REPLACING tiers-of-scrutiny. (1) PRIOR — after Heller 2008 + McDonald 2010, courts applied TWO-STEP: (a) historical; (b) means-end scrutiny; (2) BRUEN (Thomas) — REJECTED means-end scrutiny; only HISTORY-AND-TRADITION: regulation valid only if CONSISTENT WITH HISTORICAL TRADITION OF FIREARM REGULATION; identify historical analogues from FOUNDING ERA (1791) + possibly 1868 RECONSTRUCTION; (3) APPLICATION — struck NY MAY-ISSUE concealed carry "proper cause"; (4) RAHIMI 2024 — refined; analogues not "historical twin"/"dead ringer"; UPHELD federal DV restraining order firearm prohibition; (5) Strengthened 2nd Am; many regulations vulnerable.'
          }
        ]
      }
    },
    {
      id: 'govcivil2-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz**`,
      exercise: {
        questions: [
          {
            prompt: "Year *DOBBS v. JACKSON WOMEN'S HEALTH ORGANIZATION* OVERRULED Roe v. Wade.",
            answer: '2022',
            acceptableAnswers: ['2022'],
            hint: 'Same Term as Bruen; Alito majority.'
          },
          {
            prompt: "Year *MAPP v. OHIO* incorporated the 4th Am EXCLUSIONARY RULE to states.",
            answer: '1961',
            acceptableAnswers: ['1961'],
            hint: 'Warren Court; first major criminal procedure incorporation.'
          },
          {
            prompt: "Year *DC v. HELLER* established 2nd Am as INDIVIDUAL right (not collective militia-only).",
            answer: '2008',
            acceptableAnswers: ['2008'],
            hint: 'Two years before McDonald v. Chicago incorporated 2nd Am to states.'
          }
        ]
      }
    },
    {
      id: 'govcivil2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each landmark case to its constitutional doctrine.**`,
      exercise: {
        dropdowns: [
          {
            label: "Established BRANDENBURG IMMINENT LAWLESS ACTION test for 1st Am incitement (1969): ___",
            options: ['*Brandenburg v. Ohio*', '*Tinker v. Des Moines*', '*Engel v. Vitale*', '*Wisconsin v. Yoder*']
          },
          {
            label: "Symbolic speech via black armbands protesting Vietnam — student speech does not 'shed at schoolhouse gate' (1969): ___",
            options: ['*Brandenburg v. Ohio*', '*Tinker v. Des Moines*', '*Engel v. Vitale*', '*Wisconsin v. Yoder*']
          },
          {
            label: "Struck NY public school morning prayer under 1st Am Establishment Clause (1962): ___",
            options: ['*Brandenburg v. Ohio*', '*Tinker v. Des Moines*', '*Engel v. Vitale*', '*Wisconsin v. Yoder*']
          }
        ],
        correctAnswers: ['*Brandenburg v. Ohio*', '*Tinker v. Des Moines*', '*Engel v. Vitale*'],
        hint1: 'Brandenburg 1969 — KKK leader; Ohio criminal syndicalism statute; SCOTUS unanimously reversed + adopted imminent lawless action test (replaced Schenck clear-and-present-danger).',
        hint2: 'Tinker 1969 — Iowa students suspended for black armbands protesting Vietnam; Fortas: "students do not shed their constitutional rights at the schoolhouse gate"; symbolic speech protected.',
        hint3: 'Engel 1962 — NY Regents prayer; Black majority struck on 1st Am Establishment Clause grounds; major school prayer case.'
      }
    },
    {
      id: 'govcivil2-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice**`,
      exercise: {
        questions: [
          {
            question: "How did *Wisconsin v. Yoder* (1972), *Employment Division v. Smith* (1990), and *Burwell v. Hobby Lobby* (2014) shape Free Exercise doctrine?",
            options: [
              "Yoder applied strict scrutiny, Smith exempted neutral general laws from it, and Hobby Lobby used RFRA to restore it",
              "Yoder denied the Amish exemption, Smith created the Lemon test, and Hobby Lobby struck down RFRA",
              "Yoder used rational basis review, Smith required strict scrutiny for all laws, and Hobby Lobby limited religious claims by corporations",
              "Yoder incorporated free exercise, Smith ended school prayer, and Hobby Lobby banned religious employers' exemptions"
            ],
            correctAnswer: 0,
            explanation: 'FREE EXERCISE EVOLUTION: (1) YODER (1972) — Amish exempt from Wisconsin compulsory schooling through 16; UNANIMOUS; COMPELLING INTEREST + LEAST RESTRICTIVE MEANS (strict scrutiny); 300 years of Amish communities; (2) SMITH (1990, Scalia) — REJECTED strict scrutiny for NEUTRAL LAWS OF GENERAL APPLICABILITY; Native Am Church peyote unemployment; narrowed Yoder; (3) RFRA 1993 — Congress RESTORED strict scrutiny; compelling interest + least restrictive means before substantially burdening religion; (4) HOBBY LOBBY (2014) — closely-held corporation exempt from ACA contraceptive mandate under RFRA; (5) Subsequent — Trinity Lutheran 2017 + Espinoza 2020 + Carson 2022 (school funding); Kennedy v. Bremerton 2022 (prayer + overruled Lemon).'
          },
          {
            question: "How did *Griswold v. Connecticut* (1965) → *Roe v. Wade* (1973) → *Planned Parenthood v. Casey* (1992) → *Dobbs v. Jackson* (2022) evolve the right to privacy doctrine?",
            options: [
              "Griswold found a privacy right, Roe extended it to abortion, Casey kept it with an undue burden test, and Dobbs overruled both",
              "Griswold rejected a privacy right, Roe created one for contraception, Casey overruled Roe, and Dobbs restored it",
              "Griswold located privacy in the Commerce Clause, Roe limited it to marriage, Casey ended trimesters, and Dobbs extended it nationwide",
              "Griswold, Roe, Casey and Dobbs each expanded privacy step by step, with Dobbs adding protection for abortion"
            ],
            correctAnswer: 0,
            explanation: 'PRIVACY DOCTRINE: (1) GRISWOLD (1965, Douglas) — struck CT marital contraception ban; PENUMBRAS + EMANATIONS from 1st + 3rd + 4th + 5th + 9th Amendments; (2) ROE (1973, Blackmun) — extended to abortion; TRIMESTER FRAMEWORK; 14th Am SUBSTANTIVE DUE PROCESS; (3) CASEY (1992, joint opinion) — REPLACED trimester with UNDUE BURDEN; reaffirmed Roe under stare decisis; (4) DOBBS (2022, Alito 6-3 outcome / 5-4 overruling) — OVERRULED Roe + Casey; abortion NOT "deeply rooted in history and tradition" (Glucksberg test); returned to STATE; trigger laws + protections; (5) Thomas concurrence suggested reconsidering Griswold + Lawrence + Obergefell; major Roberts Court shift.'
          }
        ]
      }
    }
  ]
}
