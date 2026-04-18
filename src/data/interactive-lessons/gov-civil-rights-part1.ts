export const govCivilRightsPart1Data = {
  topicSlug: 'gov-civil-rights',
  sections: [
    {id:'govcivr1-intro',type:'text' as const,content:`
# ✊ Civil Rights

**Part 1 of 7 — Equal Protection & the Struggle for Equality**

---

| Section |
|---------|
| 📖 14th Amendment & Equal Protection |
| Segregation & Brown v. Board |
| Civil Rights Movement & Legislation |
| Affirmative Action |

> 🔑 **Key Concept:** Civil rights are about **equal treatment** and protection against discrimination. The AP exam centers on the 14th Amendment's **Equal Protection Clause** and how it has been applied through landmark Supreme Court cases and civil rights legislation.
`},
    {id:'govcivr1-14th',type:'text' as const,content:`
## 📖 The 14th Amendment & Equal Protection

### Equal Protection Clause (1868)
"No State shall... deny to any person within its jurisdiction the **equal protection of the laws**."

### Levels of Scrutiny
Courts use different standards to evaluate laws that treat groups differently:

| Level | When Applied | Government Must Show | Example |
|---|---|---|---|
| **Strict scrutiny** | Race, national origin, religion | Law serves a *compelling* government interest AND is *narrowly tailored* | Racial segregation laws (almost always struck down) |
| **Intermediate scrutiny** | Gender, sex | Law serves an *important* government interest AND is *substantially related* | VMI admitting women (*United States v. Virginia*, 1996) |
| **Rational basis** | Economic regulation, age, disability | Law is *rationally related* to a *legitimate* government interest | Minimum age for driving (almost always upheld) |

### From Segregation to Equality

| Era | Key Development |
|---|---|
| **1865–1870** | 13th (abolished slavery), 14th (equal protection, due process), 15th (voting rights regardless of race) Amendments |
| **1896** | *Plessy v. Ferguson* — "separate but equal" doctrine; upheld racial segregation |
| **1954** | **Brown v. Board of Education** — overturned Plessy; segregation in public schools is inherently unconstitutional |
| **1964** | **Civil Rights Act** — banned discrimination in public accommodations, employment, federally funded programs |
| **1965** | **Voting Rights Act** — banned literacy tests and other obstacles to voting; federal oversight of elections in states with histories of discrimination |

> 🔑 **AP Connection:** Brown v. Board of Education is a **required case**. You must know that it overturned Plessy v. Ferguson's "separate but equal" doctrine and that Chief Justice Warren's unanimous opinion declared segregation inherently unconstitutional under the 14th Amendment.
`},
    {id:'govcivr1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'What standard of judicial review does the Supreme Court apply when evaluating laws that classify people by race?',options:['Rational basis review — the lowest standard, requiring only a rational connection to a legitimate purpose','Intermediate scrutiny — requiring the law to serve an important government interest','Strict scrutiny — the highest standard, requiring the law to serve a compelling government interest and be narrowly tailored to achieve it','No standard — racial classifications are automatically unconstitutional without any judicial review'],correctAnswer:2,explanation:'Strict scrutiny is the highest level of judicial review and is applied to laws that classify people by race, national origin, or religion. Under this standard, the government must prove the law serves a compelling interest AND is narrowly tailored — an extremely high bar that racial classifications almost never pass.'},
      {question:'How did Brown v. Board of Education (1954) change constitutional law?',options:['It affirmed the "separate but equal" doctrine established in Plessy v. Ferguson as constitutional','It overturned Plessy v. Ferguson, ruling that racial segregation in public schools is inherently unconstitutional because separate facilities are inherently unequal','It banned all private schools from operating in the United States','It established the right to private school vouchers funded by state tax dollars'],correctAnswer:1,explanation:'Brown unanimously overturned the "separate but equal" doctrine of Plessy v. Ferguson (1896). Chief Justice Earl Warren wrote that segregation in public education generates "a feeling of inferiority" and that "separate educational facilities are inherently unequal." This became the legal foundation for desegregation across all public institutions.'}
    ]}},
    {id:'govcivr1-legislation',type:'text' as const,content:`
## 📖 Civil Rights Legislation

### Civil Rights Act of 1964
| Title | Protection |
|---|---|
| **Title II** | Banned discrimination in **public accommodations** (hotels, restaurants, theaters) |
| **Title VI** | Banned discrimination in **federally funded programs** |
| **Title VII** | Banned employment discrimination based on race, color, religion, sex, or national origin; created the **EEOC** (Equal Employment Opportunity Commission) |

- Constitutional basis: **Commerce Clause** (upheld in *Heart of Atlanta Motel v. United States*, 1964)
- Significance: First comprehensive federal law banning racial discrimination in private businesses

### Voting Rights Act of 1965
- Banned **literacy tests** and other discriminatory voting practices
- **Preclearance provision (Section 5)** — states with histories of voter discrimination had to get federal approval before changing voting laws
- *Shelby County v. Holder (2013)* — Supreme Court struck down the formula used to determine which states needed preclearance, effectively weakening the Act

### 24th Amendment (1964)
- Abolished **poll taxes** in federal elections (later extended to all elections by *Harper v. Virginia*, 1966)

> 🔑 **AP Connection:** The Commerce Clause justification for the Civil Rights Act is heavily tested. Congress used its power to regulate interstate commerce to reach private businesses — since a motel or restaurant serving interstate travelers affects commerce.
`},
    {id:'govcivr1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'On what constitutional basis did Congress justify the Civil Rights Act of 1964\'s ban on discrimination in private businesses?',options:['The First Amendment\'s protection of freedom of association and peaceful assembly','The Commerce Clause — discrimination in hotels, restaurants, and businesses serving interstate travelers substantially affects interstate commerce','The president\'s executive authority under Article II to regulate private sector employment practices','The 14th Amendment directly, which prohibits private citizens from discriminating against each other'],correctAnswer:1,explanation:'The 14th Amendment only applies to STATE action (government discrimination), not private conduct. To reach private businesses, Congress relied on the Commerce Clause — arguing that racial discrimination in hotels and restaurants substantially affected interstate commerce. The Supreme Court upheld this reasoning in Heart of Atlanta Motel v. United States (1964).'},
      {question:'What was the impact of Shelby County v. Holder (2013) on the Voting Rights Act?',options:['It strengthened the Voting Rights Act by expanding federal oversight to all 50 states','It struck down the formula used to determine which states required federal preclearance for voting law changes, effectively weakening federal oversight of elections in states with histories of voter discrimination','It upheld every provision of the Voting Rights Act and rejected all challenges to its constitutionality','It banned all forms of voter identification requirements as unconstitutional under the 15th Amendment'],correctAnswer:1,explanation:'The Court ruled 5-4 that the preclearance formula (Section 4) was based on outdated data and therefore unconstitutional. Without a valid formula, Section 5\'s preclearance requirement became unenforceable. Critics argued this opened the door to new voter suppression tactics in states previously covered by the Act.'}
    ]}}
  ]
};
