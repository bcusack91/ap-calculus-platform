export const govJudiciaryPart1Data = {
  topicSlug: 'gov-judiciary',
  sections: [
    {id:'govjudic1-intro',type:'text' as const,content:`
# ⚖️ The Federal Judiciary

**Part 1 of 7 — The Supreme Court & Judicial Review**

---

| Section |
|---------|
| 📖 Structure of the Federal Courts |
| Judicial Review & Marbury v. Madison |
| How the Supreme Court Operates |
| Judicial Philosophies |

> 🔑 **Key Concept:** The AP exam heavily tests **Marbury v. Madison** (established judicial review), how cases reach the Supreme Court (writ of certiorari), and the difference between **judicial activism** and **judicial restraint**.
`},
    {id:'govjudic1-structure',type:'text' as const,content:`
## 📖 Federal Court Structure

### Three Levels

| Level | Courts | Details |
|---|---|---|
| **District Courts** | 94 | Trial courts; hear cases first (original jurisdiction); determine facts |
| **Courts of Appeals** | 13 circuits | Review district court decisions for legal errors; no jury, no witnesses; panels of 3 judges |
| **Supreme Court** | 1 (9 justices) | Final appellate court; selects ~70-80 cases per year from 7,000+ petitions |

### Key Concepts
- **Original jurisdiction** — court hears a case first (district courts; Supreme Court has limited original jurisdiction for cases involving states or ambassadors)
- **Appellate jurisdiction** — court reviews lower court decisions for legal errors
- **Writ of certiorari** — order by the Supreme Court to review a lower court case; granted by the **Rule of Four** (4 of 9 justices must agree to hear the case)
- **Judicial review** — the power of courts to declare laws or executive actions **unconstitutional** (not explicitly in the Constitution — established by Marbury v. Madison)

### Marbury v. Madison (1803) — The Most Important Case
- **Facts:** William Marbury was appointed as a justice of the peace by outgoing President John Adams, but incoming Secretary of State James Madison refused to deliver his commission
- **Question:** Does the Supreme Court have the power to order Madison to deliver the commission?
- **Chief Justice Marshall's ruling:** The Judiciary Act of 1789 gave the Supreme Court original jurisdiction in this matter, but that section of the Act violated the Constitution — therefore, the Court struck it down
- **Significance:** Established **judicial review** — the Supreme Court's power to declare laws unconstitutional

> 🔑 **AP Connection:** Marbury v. Madison is the **single most important Supreme Court case** on the AP exam. Marshall established judicial review by ruling AGAINST his own party's interest — showing the Court's independence.
`},
    {id:'govjudic1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'What is "judicial review" and how was it established?',options:['The process by which the Senate reviews and confirms Supreme Court nominees, established by Article II of the Constitution','The power of the Supreme Court to declare laws or executive actions unconstitutional, established by the precedent set in Marbury v. Madison (1803)','The president\'s power to review and reject Supreme Court decisions through an executive order','The process by which federal judges are impeached, established by the House Rules Committee'],correctAnswer:1,explanation:'Judicial review — the Supreme Court\'s power to strike down laws that violate the Constitution — was not explicitly written into the Constitution. Chief Justice John Marshall established this power through Marbury v. Madison (1803), making the Court the final arbiter of constitutional interpretation and a co-equal branch of government.'},
      {question:'What is the "Rule of Four" in Supreme Court practice?',options:['The requirement that Supreme Court decisions must be decided by at least four dissenting opinions','At least four of the nine justices must agree to hear a case (grant certiorari) for it to be placed on the Court\'s docket','Four amendments to the Constitution must be cited in any case before the Supreme Court can exercise jurisdiction','The president must nominate four candidates for any Supreme Court vacancy from which the Senate chooses one'],correctAnswer:1,explanation:'The Rule of Four is an informal practice: at least 4 of the 9 Supreme Court justices must vote to accept a case (grant a writ of certiorari) for it to be heard. The Court receives 7,000+ petitions annually but only accepts 70-80 cases — the Rule of Four determines which ones are heard.'}
    ]}},
    {id:'govjudic1-philosophies',type:'text' as const,content:`
## 📖 Judicial Philosophies

| Philosophy | Description | Approach to Constitution |
|---|---|---|
| **Judicial activism** | Courts should actively use their power to promote justice, even if it means overriding legislative or executive decisions | "Living Constitution" — the Constitution should be interpreted in light of evolving societal values |
| **Judicial restraint** | Courts should defer to elected branches and avoid overturning laws unless clearly unconstitutional | "Originalism/Textualism" — the Constitution should be interpreted based on its original meaning or plain text |

### Key Distinctions
- **Judicial activism** is NOT the same as "liberal" — conservative courts can be activist by overturning precedent
- **Judicial restraint** is NOT the same as "conservative" — a restrained court might uphold laws it disagrees with because overturning them isn't the judiciary's role
- **Stare decisis** — "let the decision stand"; the principle that courts should follow precedent (related to restraint)

### How Justices Are Selected
1. **President nominates** — considers judicial philosophy, political ideology, demographics, Senate confirmation likelihood
2. **Senate Judiciary Committee** hearings — senators question the nominee
3. **Full Senate vote** — simple majority to confirm
4. **Life tenure** — federal judges serve "during good behavior" (effectively for life), insulating them from political pressure

> 🔑 **AP Connection:** The AP exam tests how the nomination process is **political** even though the judiciary is supposed to be independent. Presidents select justices who share their judicial philosophy; the Senate may block nominees from the opposing party.
`},
    {id:'govjudic1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'A Supreme Court justice who believes the Constitution should be interpreted based on its original meaning at the time of ratification is best described as practicing:',options:['Judicial activism — actively expanding constitutional rights beyond the original text','Originalism/judicial restraint — interpreting the Constitution according to its original meaning and deferring to elected branches when possible','Stare decisis — following all previous Supreme Court decisions without exception regardless of their correctness','Strict constructionism — refusing to hear any cases not explicitly mentioned in Article III'],correctAnswer:1,explanation:'Originalism holds that the Constitution should be interpreted based on its original public meaning when ratified. This philosophy is associated with judicial restraint because it limits judges\' ability to "read in" new rights not contemplated by the Framers. Justice Antonin Scalia was originalism\'s most prominent advocate.'},
      {question:'Why does the Constitution grant federal judges life tenure (serving "during good behavior")?',options:['To ensure judges are always aligned with the current president\'s policy preferences and political party','To insulate judges from political pressure so they can make decisions based on law and the Constitution rather than public opinion or electoral concerns','To guarantee that all judges serve for at least 30 years regardless of their competence or health','To prevent Congress from ever changing the size or structure of the federal court system'],correctAnswer:1,explanation:'Life tenure protects judicial independence. Because federal judges don\'t need to worry about reelection or political retaliation, they can make unpopular decisions based on constitutional principles. This was the Framers\' solution to the problem of political pressure on the judiciary — though it also means justices serve long after the president who appointed them leaves office.'}
    ]}}
  ]
};
