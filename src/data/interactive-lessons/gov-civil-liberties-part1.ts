export const govCivilLibertiesPart1Data = {
  topicSlug: 'gov-civil-liberties',
  sections: [
    {id:'govcivil1-intro',type:'text' as const,content:`
# 🗽 Civil Liberties

**Part 1 of 7 — The Bill of Rights & Individual Freedoms**

---

| Section |
|---------|
| 📖 Bill of Rights Overview |
| First Amendment Freedoms |
| Selective Incorporation |
| Key Supreme Court Cases |

> 🔑 **Key Concept:** Civil liberties are **protections from government action** (what the government CANNOT do to you). The AP exam distinguishes these from **civil rights** (protections against discrimination). The Bill of Rights originally applied only to the federal government — the 14th Amendment's Due Process Clause extended most protections to the states through **selective incorporation**.
`},
    {id:'govcivil1-bor',type:'text' as const,content:`
## 📖 The Bill of Rights

The first ten amendments were ratified in 1791 to address Anti-Federalist concerns about individual liberty:

| Amendment | Protection |
|---|---|
| **1st** | Freedom of religion (Establishment + Free Exercise), speech, press, assembly, petition |
| **2nd** | Right to bear arms |
| **4th** | Protection against unreasonable searches and seizures; requires probable cause for warrants |
| **5th** | Grand jury indictment; no double jeopardy; no self-incrimination; due process; eminent domain requires just compensation |
| **6th** | Right to speedy and public trial, impartial jury, attorney, confront witnesses |
| **8th** | No excessive bail; no cruel and unusual punishment |

### Selective Incorporation
- Originally, the Bill of Rights limited only the **federal government** (Barron v. Baltimore, 1833)
- The **14th Amendment (1868)** — "nor shall any State deprive any person of life, liberty, or property, without due process of law"
- Through a series of Supreme Court cases, most Bill of Rights protections have been **incorporated** (applied to state governments) via the 14th Amendment's Due Process Clause
- This process is called **selective incorporation** because it happened right-by-right, case-by-case

> 🔑 **AP Connection:** You must know that the Bill of Rights was NOT automatically applied to the states. Selective incorporation through the 14th Amendment is a **key AP concept** that appears nearly every year.
`},
    {id:'govcivil1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'What is "selective incorporation" in constitutional law?',options:['The process by which the president selects which constitutional amendments to enforce during their term','The process by which the Supreme Court has applied most Bill of Rights protections to state governments through the 14th Amendment\'s Due Process Clause, on a case-by-case basis','The Congress\'s power to selectively apply federal laws to certain states but not others based on population','The practice of allowing states to choose which amendments they want to follow voluntarily'],correctAnswer:1,explanation:'Selective incorporation is the judicial doctrine through which the Supreme Court has gradually applied most Bill of Rights protections to state governments via the 14th Amendment\'s Due Process Clause. This happened case-by-case (e.g., Gitlow v. New York incorporated free speech in 1925; McDonald v. Chicago incorporated the 2nd Amendment in 2010).'},
      {question:'How do civil liberties differ from civil rights?',options:['Civil liberties are protections FROM government action (limits on what government can do to individuals), while civil rights are protections AGAINST discrimination (ensuring equal treatment)','Civil liberties apply only to citizens, while civil rights apply to all people regardless of citizenship','Civil liberties are created by Congress, while civil rights are created by the Supreme Court','There is no meaningful distinction — both terms refer to the same constitutional protections'],correctAnswer:0,explanation:'Civil liberties are individual freedoms protected FROM government interference (1st Amendment speech, 4th Amendment search protections). Civil rights are guarantees of EQUAL TREATMENT regardless of race, gender, or other characteristics (14th Amendment Equal Protection Clause, Civil Rights Act). The distinction matters on the AP exam.'}
    ]}},
    {id:'govcivil1-first',type:'text' as const,content:`
## 📖 First Amendment Freedoms

### Religion Clauses
| Clause | Meaning | Key Case |
|---|---|---|
| **Establishment Clause** | Government cannot establish, promote, or favor any religion | **Engel v. Vitale (1962)** — school-sponsored prayer is unconstitutional |
| **Free Exercise Clause** | Government cannot prohibit the free exercise of religion | **Wisconsin v. Yoder (1972)** — Amish families exempt from compulsory education past 8th grade |

### Freedom of Speech
The First Amendment protects most speech, but NOT all speech:

| Protected | NOT Protected |
|---|---|
| Political speech (highest protection) | True threats and incitement to imminent lawless action (*Brandenburg v. Ohio*) |
| Symbolic speech (flag burning — *Texas v. Johnson*, 1989) | Defamation (libel/slander) |
| Student speech (with limits — *Tinker v. Des Moines*) | Obscenity |
| Commercial speech (some protection) | Fighting words |

### Key Speech Cases
- **Schenck v. United States (1919)** — "clear and present danger" test; speech creating a danger can be restricted (later replaced by *Brandenburg* test)
- **Tinker v. Des Moines (1969)** — students wearing black armbands to protest Vietnam War = protected symbolic speech; students don't "shed their constitutional rights at the schoolhouse gate"
- **New York Times v. United States (1971)** — "Pentagon Papers" case; government cannot impose prior restraint on press except in extraordinary circumstances

> 🔑 **AP Connection:** Tinker v. Des Moines and Engel v. Vitale are **required cases** on the AP exam. You must know the facts, holdings, and reasoning of each.
`},
    {id:'govcivil1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'In Tinker v. Des Moines (1969), the Supreme Court ruled that students wearing black armbands to protest the Vietnam War was:',options:['Unprotected speech because schools have absolute authority to regulate student expression during school hours','Protected symbolic speech — students do not "shed their constitutional rights at the schoolhouse gate" as long as the expression does not cause substantial disruption','Criminal conduct that could be punished under federal anti-war legislation passed by Congress','Not a First Amendment issue because the Constitution only protects verbal speech, not symbolic acts'],correctAnswer:1,explanation:'The Court ruled 7-2 that wearing armbands was protected symbolic speech under the First Amendment. Justice Fortas wrote that students retain constitutional rights in school, and schools can only restrict expression that causes "substantial disruption" to the educational process or violates the rights of others. The armbands caused no disruption.'},
      {question:'What did the Supreme Court rule in Engel v. Vitale (1962)?',options:['Public schools may require students to recite prayers as long as the prayers are non-denominational','School-sponsored prayer in public schools violates the Establishment Clause of the First Amendment, even if participation is voluntary','Students have a constitutional right to lead prayers in public schools without any government restriction','The Free Exercise Clause requires public schools to provide time for students of all religions to pray during school hours'],correctAnswer:1,explanation:'The Court ruled that even a voluntary, non-denominational prayer composed by state officials for use in public schools violated the Establishment Clause. Government-sponsored religious activity in public schools — even if students can opt out — constitutes government endorsement of religion. This case is the foundation for all school prayer rulings.'}
    ]}}
  ]
};
