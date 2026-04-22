export const govConstitutionalFoundationsPart5Data = {
  topicSlug: 'gov-constitutional-foundations',
  sections: [
    {
      id: 'govconst5-intro',
      type: 'text' as const,
      content: `
# 🏛️ Constitutional Foundations

**Part 5 of 7 — Change Over Time**

---

| Section |
|---|
| 27 amendments — eras and themes |
| Reconstruction Amendments (13–15): the "Second Founding" |
| Progressive amendments (16–19) |
| 20th-century amendments (20–27) |

> 🔑 Key idea: The U.S. Constitution has been amended only 27 times in 230+ years — but those amendments have transformed the constitutional order, especially the Reconstruction Amendments (13, 14, 15) which created national citizenship, equal protection, and a new federal authority over the states.
      `
    },
    {
      id: 'govconst5-content',
      type: 'text' as const,
      content: `
## Reconstruction Amendments — The "Second Founding"

| Amendment | Year | Provision | Long-Term Significance |
|---|---|---|---|
| **13th** | 1865 | Abolished slavery and involuntary servitude (except as punishment for crime) | Constitutional end of slavery; "punishment exception" became the basis for convict leasing and modern challenges to mass incarceration |
| **14th** | 1868 | § 1: Citizenship Clause (anyone born or naturalized in the U.S.); Privileges or Immunities Clause; Due Process Clause; Equal Protection Clause; § 2: representation based on whole population (overruling 3/5 Compromise); § 3: bars former Confederate officials from federal/state office (revived in 21st century re: Jan 6); § 4: Confederate debts unpayable; § 5: Congress shall have power to enforce | The most consequential amendment in American history; constitutional basis for selective incorporation, *Brown v. Board* (1954), *Loving v. Virginia* (1967), *Roe v. Wade* (1973, overruled *Dobbs* 2022), *Bush v. Gore* (2000), *Obergefell v. Hodges* (2015), and the modern civil-rights framework |
| **15th** | 1870 | Voting rights cannot be denied "on account of race, color, or previous condition of servitude" | Black male suffrage (in theory); largely nullified in the South 1890–1965 by poll taxes, literacy tests, white primaries, grandfather clauses, and outright violence; reinvigorated by the Voting Rights Act of 1965 |

## Progressive Amendments

| Amendment | Year | Provision | Significance |
|---|---|---|---|
| **16th** | 1913 | Authorizes federal income tax | Overruled *Pollock v. Farmers\' Loan & Trust Co.* (1895); foundation of modern federal revenue and the regulatory/welfare state |
| **17th** | 1913 | Direct popular election of U.S. senators | Replaced election by state legislatures (Article I, § 3); democratized the Senate; remains constitutionally controversial in some circles |
| **18th** | 1919 | Prohibition of "intoxicating liquors" | Effective Jan 1920; product of decades of temperance movement; produced bootlegging, organized crime, jury nullification; repealed by 21st Amendment (1933) |
| **19th** | 1920 | Voting rights cannot be denied "on account of sex" | Women\'s national suffrage after 70+ years of organizing (Seneca Falls 1848 → 1920); did NOT enfranchise Black women in the South (Jim Crow nullification) until 1965 |

## Mid-to-Late 20th Century Amendments

| Amendment | Year | Provision | Significance |
|---|---|---|---|
| **20th** | 1933 | Lame-duck amendment: presidential term begins Jan 20 (was March 4); congressional term begins Jan 3 | Reduced the lame-duck period that had created the 1933 banking crisis transition |
| **21st** | 1933 | Repealed 18th (Prohibition) | Only amendment ratified by state ratifying conventions rather than state legislatures (Article V Method 1, Convention Track) |
| **22nd** | 1951 | Two-term limit on the presidency | Enshrined the Washington precedent (broken by FDR\'s 4 terms 1933–45) |
| **23rd** | 1961 | Granted DC presidential electors (3) | DC residents could vote for President for the first time |
| **24th** | 1964 | Abolished poll tax in federal elections | One of several Civil Rights Era amendments; *Harper v. Virginia Board of Elections* (1966) extended the ban to state elections under Equal Protection |
| **25th** | 1967 | Presidential succession and disability procedures | Enabled vice-presidential vacancy to be filled (used 1973 Ford, 1974 Rockefeller); § 4 procedure for removing a disabled president has never been invoked |
| **26th** | 1971 | Lowered voting age to 18 in federal and state elections | Response to Vietnam-era "old enough to fight, old enough to vote" argument; ratified in record 100 days |
| **27th** | 1992 | Congressional pay raises take effect only after the next election | Originally proposed 1789 by Madison; ratified 203 years later |

## Constitutional Change Without Amendment

| Mechanism | Description | Example |
|---|---|---|
| **Judicial reinterpretation** | The Court substantially shifts constitutional meaning without textual change | *Plessy v. Ferguson* (1896, "separate but equal") → *Brown v. Board* (1954, separate is unequal); pre-*Dobbs* substantive due process → *Dobbs v. Jackson Women\'s Health* (2022) |
| **Constitutional convention** | Practices that develop into binding norms not in text | Cabinet (no constitutional basis); judicial review (not in text but established 1803); Washington two-term precedent (binding 1797–1940; constitutionalized as 22nd Amendment 1951) |
| **Statutory build-out** | Federal statutes that fill in constitutional architecture | Judiciary Act of 1789 (created lower federal courts and Supreme Court structure); Civil Rights Act of 1964 (expanded 14th Amendment authority); Voting Rights Act of 1965 (enforced 15th Amendment); Help America Vote Act 2002 (federalized election administration) |
| **Executive practice** | Sustained presidential action establishes constitutional norms | Executive agreements (~90% of international agreements vs. treaties); executive orders; signing statements; recess appointments (limited by *NLRB v. Noel Canning* 2014) |

> 🔑 Key takeaway: The Constitution evolves through three channels — formal amendment (rare and difficult), judicial reinterpretation (constant), and political-institutional practice (continuous). The Reconstruction Amendments are the most consequential formal change; selective incorporation is the most consequential interpretive change; the rise of the administrative state is the most consequential institutional change.
      `
    },
    {
      id: 'govconst5-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Reconstruction Amendments** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which best describes the constitutional significance of the 14th Amendment (1868)?',
            options: [
              "The 14th Amendment is the most consequential amendment in American history: § 1 contains the Citizenship Clause (anyone born or naturalized in the U.S. is a citizen, overruling *Dred Scott v. Sandford* 1857), the Privileges or Immunities Clause (largely gutted by *Slaughter-House Cases* 1873), the Due Process Clause (the basis for selective incorporation of most Bill of Rights protections to states throughout the 20th century, and for substantive due process), and the Equal Protection Clause (the basis for *Brown v. Board* 1954, *Loving v. Virginia* 1967, *Bush v. Gore* 2000, *Obergefell v. Hodges* 2015); § 2 abolished the 3/5 Compromise; § 3 bars former Confederate officials from federal/state office (revived in 21st century re: Jan 6, 2021); § 5 gives Congress enforcement power (basis for the Civil Rights Act of 1875, the Civil Rights Act of 1964, and the Voting Rights Act of 1965)",
              "The 14th Amendment had no significance of any kind with no Citizenship Clause, no Due Process Clause, no Equal Protection Clause, no selective incorporation, no Brown v. Board, and no civil-rights jurisprudence of any kind during the entire period from 1868 onward in any region of the United States during the period",
              "There was no 14th Amendment of any kind during the entire period from 1865 onward in any region of the United States with no Citizenship Clause, no Due Process Clause, no Equal Protection Clause, and no civil-rights jurisprudence of any kind during the entire period in any region",
              "The 14th Amendment applied only to former Confederate officials and not to the general population of any kind during the entire period from 1868 onward in any region of the United States with no Citizenship Clause, no Due Process Clause, no Equal Protection Clause, and no Brown v. Board of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: '14th Amendment (1868) most consequential: § 1 = Citizenship (overruled Dred Scott 1857) + Privileges/Immunities (gutted in Slaughter-House 1873) + Due Process (selective incorporation + substantive due process) + Equal Protection (Brown 1954, Loving 1967, Bush v. Gore 2000, Obergefell 2015); § 2 abolished 3/5; § 3 bars Confederate officials (revived re: Jan 6); § 5 enforcement (CRA 1875, 1964; VRA 1965).'
          },
          {
            question: 'Which best describes the historical pattern of women\'s voting rights from 1848 to 1965?',
            options: [
              "Women\'s suffrage in the U.S. unfolded over 117 years: the Seneca Falls Convention (July 1848, organized by Elizabeth Cady Stanton and Lucretia Mott) issued the Declaration of Sentiments demanding women\'s voting rights; territorial Wyoming first granted women's suffrage in 1869, followed by other Western states; the National American Woman Suffrage Association (1890, merged organizations led by Stanton, Susan B. Anthony, Carrie Chapman Catt) and the more militant National Woman\'s Party (1916, Alice Paul) led the final campaign; the 19th Amendment (ratified August 18, 1920) prohibited denial of voting rights 'on account of sex' — but in practice did NOT enfranchise Black women in the Jim Crow South (poll taxes, literacy tests, white primaries, intimidation), an injustice not fully corrected until the Voting Rights Act of 1965 (with the 24th Amendment in 1964 abolishing the poll tax in federal elections and *Harper v. Virginia* 1966 extending the ban to state elections)",
              "Women\'s suffrage was granted in 1789 with no Seneca Falls Convention, no Stanton, no Anthony, no Catt, no Alice Paul, no 19th Amendment, no Jim Crow nullification, and no Voting Rights Act of any kind during the entire period in any region of the United States during the period",
              "There was no women\'s suffrage of any kind during the entire period from 1789 through 1965 in any region of the United States with no Seneca Falls Convention, no 19th Amendment, no Voting Rights Act, no 24th Amendment, and no Harper v. Virginia of any kind during the entire period in any region",
              "Women\'s suffrage applied only to white women and not to Black women of any kind even after the Voting Rights Act of 1965 with no enforcement in the Jim Crow South of any kind during the entire period from 1965 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: 'Women\'s suffrage 1848-1965: Seneca Falls (July 1848, Stanton/Mott) → Wyoming territorial 1869 + Western states → NAWSA 1890 (Stanton/Anthony/Catt) + NWP 1916 (Alice Paul) → 19th Amendment (Aug 18 1920) — but Jim Crow nullified Black women → not corrected until 24th Amendment (1964) + Harper (1966) + VRA (1965).'
          }
        ]
      }
    },
    {
      id: 'govconst5-input',
      type: 'input-boxes' as const,
      content: `**Sprint quiz — name the amendment**`,
      exercise: {
        questions: [
          {
            prompt: 'The 1865 amendment that abolished slavery and involuntary servitude (except as punishment for crime).',
            answer: '13th Amendment',
            acceptableAnswers: ['13th Amendment', '13', 'Thirteenth Amendment', '13th'],
            hint: 'First of the three Reconstruction Amendments.'
          },
          {
            prompt: 'The 1913 amendment authorizing the federal income tax (overruling Pollock 1895).',
            answer: '16th Amendment',
            acceptableAnswers: ['16th Amendment', '16', 'Sixteenth Amendment', '16th'],
            hint: 'Foundation of modern federal revenue and the regulatory/welfare state.'
          },
          {
            prompt: 'The 1971 amendment that lowered the voting age to 18 in federal and state elections.',
            answer: '26th Amendment',
            acceptableAnswers: ['26th Amendment', '26', 'Twenty-Sixth Amendment', '26th'],
            hint: 'Vietnam-era response: "old enough to fight, old enough to vote." Ratified in record 100 days.'
          }
        ]
      }
    },
    {
      id: 'govconst5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each amendment cluster to its era.**`,
      exercise: {
        dropdowns: [
          {
            label: 'The 13th, 14th, and 15th Amendments — abolition, citizenship/equal protection, and Black male suffrage: ___',
            options: ['Founding (Bill of Rights)', 'Reconstruction Era', 'Progressive Era', 'Mid-20th Century']
          },
          {
            label: 'The 16th, 17th, 18th, and 19th Amendments — income tax, direct election of senators, Prohibition, women\'s suffrage: ___',
            options: ['Founding (Bill of Rights)', 'Reconstruction Era', 'Progressive Era', 'Mid-20th Century']
          },
          {
            label: 'The 22nd, 23rd, 24th, 25th, and 26th Amendments — presidential term limit, DC electors, poll-tax abolition, presidential succession, 18-year-old vote: ___',
            options: ['Founding (Bill of Rights)', 'Reconstruction Era', 'Progressive Era', 'Mid-20th Century']
          }
        ],
        correctAnswers: ['Reconstruction Era', 'Progressive Era', 'Mid-20th Century'],
        hint1: '13/14/15 are the post-Civil War "Second Founding" amendments.',
        hint2: '16-19 are the four amendments ratified between 1913 and 1920.',
        hint3: '22-26 are the cluster of mid-century procedural and voting-rights amendments (1951-71).',
        explanation: 'Amendment eras: Founding (1-10 Bill of Rights 1791); Early Republic (11-12 1795/1804); Reconstruction (13-15 1865-70); Progressive (16-19 1913-20); Mid-20thC (20-26 1933-71); Late 20thC (27 1992 — proposed 1789).'
      }
    },
    {
      id: 'govconst5-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Constitutional Change**`,
      exercise: {
        questions: [
          {
            question: 'Which best describes the relationship between the 14th Amendment (1868) and the modern doctrine of selective incorporation?',
            options: [
              "The 14th Amendment\'s Due Process Clause ('No State shall... deprive any person of life, liberty, or property, without due process of law') has been the textual hook through which the Supreme Court has applied most Bill of Rights provisions to state governments — a process called selective incorporation that began with *Gitlow v. New York* (1925, 1st Amendment free speech) and has continued through *McDonald v. City of Chicago* (2010, 2nd Amendment) and *Timbs v. Indiana* (2019, 8th Amendment Excessive Fines Clause); this dramatically transformed the constitutional balance between federal and state authority by extending federal rights protections to state government conduct that had been, before 1925, restricted only by state constitutions; a handful of Bill of Rights provisions still have not been incorporated against states (3rd Amendment quartering, 5th Amendment grand-jury indictment, 7th Amendment civil-jury right)",
              "The 14th Amendment has no relationship to selective incorporation of any kind with no Due Process Clause, no Gitlow, no McDonald, no Timbs, and no extension of Bill of Rights protections to states of any kind during the entire period in any region of the United States during the period in any region of the country",
              "There is no 14th Amendment and no selective incorporation of any kind during the entire period from 1868 onward in any region of the United States with no Due Process Clause, no Bill of Rights extension to states, no Gitlow, and no McDonald of any kind during the entire period in any region",
              "Selective incorporation applied the entire Bill of Rights to states all at once in 1868 with no Gitlow, no Mapp, no Gideon, no Miranda, no McDonald, and no Timbs of any kind during the entire period from 1868 onward in any region of the United States during the period"
            ],
            correctAnswer: 0,
            explanation: '14th Amendment (1868) Due Process Clause = textual hook for selective incorporation — applied Bill of Rights to states one provision at a time starting with Gitlow 1925 (1st speech), McDonald 2010 (2nd), Timbs 2019 (8th excessive fines). Dramatic transformation of federal-state balance. Unincorporated: 3rd, 5th grand jury, 7th civil jury.'
          },
          {
            question: 'Which AP "complexity" claim best illuminates the difficulty of formal constitutional amendment?',
            options: [
              "The Article V amendment process is one of the most difficult in any constitutional democracy: 2/3 of both houses of Congress must propose AND 3/4 of state legislatures (currently 38 of 50) must ratify (or 2/3 of state legislatures call a convention and 3/4 of state ratifying conventions ratify); only 27 amendments have been ratified in 230+ years, and only 1 (27th, 1992 — pay raises) since 1971; the difficulty has produced two consequences: (1) constitutional change has shifted dramatically from the amendment process to judicial reinterpretation (the New Deal-era Court's commerce-clause expansion; the Warren Court's selective-incorporation revolution; the Roberts Court's Citizens United, Shelby County, Dobbs decisions); and (2) thousands of proposed amendments have failed (Equal Rights Amendment passed Congress 1972 but failed ratification by 1982 deadline; Balanced Budget Amendment, Flag Burning Amendment, etc.) — making contemporary American constitutional change largely a judicial rather than democratic-amendment process",
              "The Article V amendment process is the easiest in any constitutional democracy with hundreds of amendments ratified each year of any kind during the entire period from 1789 onward in any region of the United States during the period in any region of the country",
              "Constitutional change has shifted entirely to formal amendment with no judicial reinterpretation of any kind during the entire period from 1789 onward in any region of the United States with no New Deal commerce-clause expansion, no selective incorporation, and no Citizens United/Shelby County/Dobbs of any kind during the entire period in any region",
              "There is no Article V amendment process of any kind during the entire period from 1789 onward in any region of the United States with no proposal threshold, no ratification threshold, no 27th Amendment, no Equal Rights Amendment, and no Balanced Budget Amendment of any kind during the entire period in any region"
            ],
            correctAnswer: 0,
            explanation: 'AP complexity: Article V extreme difficulty — 2/3 propose + 3/4 ratify; only 27 amendments in 230+ years; only 1 since 1971 → constitutional change shifts to (1) judicial reinterpretation (New Deal commerce-clause; Warren Court incorporation; Roberts Court — Citizens United, Shelby County, Dobbs); (2) thousands of failed proposals (ERA 1972-82; Balanced Budget; Flag Burning) → contemporary change is judicial not democratic-amendment.'
          }
        ]
      }
    }
  ]
}
