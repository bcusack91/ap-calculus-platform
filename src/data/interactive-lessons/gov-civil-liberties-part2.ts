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

> 🔑 Key idea: First Amendment religion: ESTABLISHMENT (Engel 1962) + FREE EXERCISE (Yoder 1972, Smith 1990, Hobby Lobby 2014). Speech evolution: CLEAR-AND-PRESENT-DANGER (Schenck 1919) → BRANDENBURG IMMINENT LAWLESS ACTION (1969); SYMBOLIC SPEECH (Tinker 1969, Texas v. Johnson 1989); UNPROTECTED SPEECH categories. 2nd Am: HELLER 2008 (individual right) → MCDONALD 2010 (incorporated to the states). 4th Am: WARRANT REQUIREMENT + EXCLUSIONARY RULE (Mapp 1961) + EXCEPTIONS. PRIVACY: Griswold 1965 → Roe 1973 → Casey 1992 → Dobbs 2022 (overruled Roe).
      `
    },
    {
      id: 'govcivil2-content',
      type: 'text' as const,
      content: `
## First Amendment — Religion Clauses

| Clause | Text | Doctrine | Key cases |
|---|---|---|---|
| **Establishment** | 'Congress shall make no law respecting an establishment of religion' | Government cannot establish official religion or favor one religion over others (or religion over non-religion) | Engel v. Vitale 1962 (school prayer struck — government may not compose or sponsor an official school prayer, even a voluntary, nondenominational one) |
| **Free Exercise** | 'or prohibiting the free exercise thereof' | Government cannot prohibit religious practice; balance with neutral generally-applicable laws | Reynolds v. US 1879 (no polygamy exemption), Wisconsin v. Yoder 1972 (Amish exempt from compulsory school after 8th grade), Employment Division v. Smith 1990 (Scalia: neutral generally-applicable laws don\'t require religious exemption), Burwell v. Hobby Lobby 2014 (RFRA 1993 protects closely-held corporations from contraceptive mandate) |

## First Amendment — Speech Doctrines

| Era | Standard | Key case |
|---|---|---|
| **1919-1969** | CLEAR AND PRESENT DANGER | Schenck v. US 1919 (Holmes: 'falsely shouting fire in a theatre'); Whitney v. California 1927 |
| **1969-present** | IMMINENT LAWLESS ACTION (BRANDENBURG TEST) | Brandenburg v. Ohio 1969 — speech protected unless directed to inciting imminent lawless action AND likely to produce such action |
| **Symbolic speech** | Conduct intended to convey message + others would understand | Tinker v. Des Moines 1969 (black armbands), Texas v. Johnson 1989 (flag burning), Snyder v. Phelps 2011 (Westboro funeral protests) |
| **Prior restraint** | Strong presumption AGAINST prior restraint | Near v. Minnesota 1931, NYT v. US 1971 (Pentagon Papers) |
| **Campaign finance** | Spending = speech (Buckley v. Valeo 1976) | Citizens United v. FEC 2010 (corporate independent expenditures), McCutcheon v. FEC 2014 (aggregate limits) |

UNPROTECTED categories: (1) INCITEMENT (Brandenburg); (2) FIGHTING WORDS (Chaplinsky v. New Hampshire 1942); (3) TRUE THREATS (Virginia v. Black 2003); (4) OBSCENITY (Miller v. California 1973 three-part test); (5) DEFAMATION of private individuals; for public figures NYT v. Sullivan 1964 actual malice standard; (6) CHILD PORNOGRAPHY (NY v. Ferber 1982).

## Second Amendment

| Year | Case | Holding |
|---|---|---|
| 2008 | DC v. Heller | INDIVIDUAL right to keep firearms in home for self-defense (5-4 Scalia majority); REJECTED collective militia-only interpretation |
| 2010 | McDonald v. Chicago | INCORPORATED 2nd Am to states via 14th Am Due Process Clause |

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

> 🔑 Key takeaway: First Amendment SPEECH evolved from CLEAR-AND-PRESENT-DANGER (Schenck 1919) to BRANDENBURG IMMINENT LAWLESS ACTION (1969). RELIGION clauses balance ESTABLISHMENT (Engel 1962) against FREE EXERCISE (Yoder 1972). 2ND AM: HELLER 2008 individual right + MCDONALD 2010 incorporated; the gun debate weighs public safety against individual rights (EK 3.6.A.2). 4TH AM: WARRANT + EXCLUSIONARY RULE + exceptions. PRIVACY: Griswold 1965 → Roe 1973 → Casey 1992 → DOBBS 2022 OVERRULED Roe; abortion returned to states.
      `
    },
    {
      id: 'govcivil2-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: "In *Brandenburg v. Ohio* (1969), the Court held that the government may not punish advocacy of force unless it is directed to inciting imminent lawless action and is likely to produce such action. How does this holding refine the clear-and-present-danger standard of *Schenck v. United States* (1919)?",
            options: [
              "It narrows Schenck's limit, so speech may be punished only when it aims to cause immediate illegal acts and probably will cause them",
              "It loosens Schenck's limit, so states may now punish any speech that criticizes a war or the draft",
              "It reaffirms Schenck unchanged, so speech with any tendency to cause harm in wartime may be punished",
              "It abolishes all limits on speech, so even direct incitement to immediate violence is now protected"
            ],
            correctAnswer: 0,
            explanation: 'EK 3.3.A.2.iv: restrictions on speech that creates a CLEAR AND PRESENT DANGER (Schenck 1919, a required case — anti-draft leaflets in wartime) have been REFINED by later rulings. Brandenburg narrowed the restriction: abstract advocacy of violence is protected, and only speech aimed at producing imminent lawless action that is likely to produce it may be punished. The refinement does not loosen Schenck to allow punishing war criticism, does not leave a broad "bad tendency" rule in place, and does not remove all limits (incitement is still punishable).'
          },
          {
            question: "What did the Supreme Court decide in *McDonald v. Chicago* (2010)?",
            options: [
              "The Second Amendment right to keep and bear arms applies to state and local governments",
              "The Second Amendment protects only state militias, so cities may ban handguns for private citizens",
              "Congress may ban guns near schools under the Commerce Clause, overriding any state law on firearms",
              "The Second Amendment binds only the national government, so Chicago's handgun ban was upheld in full"
            ],
            correctAnswer: 0,
            explanation: 'McDONALD v. CHICAGO (2010) is a required case (Topics 3.5 and 3.7): the Court held that the Second Amendment right to keep and bear arms is incorporated against state and local governments through the Due Process Clause of the 14th Amendment, and it struck down Chicago\'s handgun ban. It is an example of SELECTIVE INCORPORATION limiting state regulation of a civil liberty. The Commerce Clause gun case is US v. Lopez (1995), which struck down — not upheld — a federal ban on guns near schools.'
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
            prompt: "Year *DOBBS v. JACKSON WOMEN'S HEALTH ORGANIZATION* held that the Constitution does not confer a right to abortion.",
            answer: '2022',
            acceptableAnswers: ['2022'],
            hint: 'Alito majority; returned abortion regulation to legislatures (EK 3.9.A.2).'
          },
          {
            prompt: "Name of the rule that bars evidence illegally seized in violation of the 4th Amendment from being used against a suspect in a criminal trial.",
            answer: 'exclusionary rule',
            acceptableAnswers: ['exclusionary rule', 'exclusionary', 'the exclusionary rule'],
            hint: 'It EXCLUDES the tainted evidence from trial (EK 3.8.A.4).'
          },
          {
            prompt: "Number of the amendment whose ban on cruel and unusual punishment is the basis for Court rulings on the death penalty.",
            answer: '8',
            acceptableAnswers: ['8', '8th', 'eighth', 'eight'],
            hint: 'Also bans excessive bail and excessive fines (EK 3.6.A.1).'
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
            label: "Upheld a conviction for distributing anti-draft leaflets during World War I — clear-and-present-danger test (1919): ___",
            options: ['*Schenck v. United States*', '*Tinker v. Des Moines*', '*Engel v. Vitale*', '*Wisconsin v. Yoder*']
          },
          {
            label: "Symbolic speech via black armbands protesting Vietnam — student speech does not 'shed at schoolhouse gate' (1969): ___",
            options: ['*Schenck v. United States*', '*Tinker v. Des Moines*', '*Engel v. Vitale*', '*Wisconsin v. Yoder*']
          },
          {
            label: "Struck NY public school morning prayer under 1st Am Establishment Clause (1962): ___",
            options: ['*Schenck v. United States*', '*Tinker v. Des Moines*', '*Engel v. Vitale*', '*Wisconsin v. Yoder*']
          }
        ],
        correctAnswers: ['*Schenck v. United States*', '*Tinker v. Des Moines*', '*Engel v. Vitale*'],
        hint1: 'Schenck 1919 — Holmes; Espionage Act conviction for anti-draft leaflets; "falsely shouting fire in a theatre"; clear-and-present-danger, later refined by Brandenburg 1969.',
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
            question: "In *Wisconsin v. Yoder* (1972), the Court ruled that Amish parents could not be required to keep their children in school past eighth grade. Which First Amendment tension does the case illustrate?",
            options: [
              "Free exercise of religion outweighed the state's interest in compulsory education",
              "Establishment clause limits outweighed the parents' interest in practicing their faith",
              "Freedom of the press outweighed the state's power to regulate what schools may teach about religion",
              "The state's police power outweighed the Amish families' religious practice"
            ],
            correctAnswer: 0,
            explanation: 'EK 3.2.A.1: the free exercise and establishment clauses reflect an ongoing tension between government power to make law and an individual\'s right to religious freedom. In YODER (1972, a required case) the Court held that Wisconsin\'s compulsory-attendance law, as applied to Amish children past eighth grade, burdened the parents\' FREE EXERCISE of religion more than the state\'s interest in two more years of schooling could justify — so the religious claim won, not the state. The establishment clause and freedom of the press were not the issue.'
          },
          {
            question: "How did *Griswold v. Connecticut* (1965), the Court's 1973 abortion ruling and *Dobbs v. Jackson Women's Health Organization* (2022) shape the right to privacy?",
            options: [
              "Griswold found a privacy right, the 1973 ruling extended it to abortion, and Dobbs overruled that ruling",
              "Griswold rejected a privacy right, the 1973 ruling created one for contraception, and Dobbs restored it",
              "Griswold located privacy in the Commerce Clause, the 1973 ruling limited it to marriage, and Dobbs extended it nationwide",
              "All three rulings expanded privacy step by step, with Dobbs adding protection for abortion"
            ],
            correctAnswer: 0,
            explanation: 'EK 3.9.A.2 traces this sequence (none of these cases is on the list of 14 required cases, but the holdings are tested): GRISWOLD (1965) interpreted the due process clause to protect a right of PRIVACY from government infringement (a ban on contraceptives); in 1973 the Court used substantive due process to extend that privacy right to ABORTION; DOBBS (2022) OVERRULED that 1973 decision, holding that the Constitution does not confer a right to abortion and leaving its regulation to LEGISLATURES. Which actions the privacy right protects continues to be debated.'
          }
        ]
      }
    }
  ]
}
