/**
 * Entrance Quiz — Civil Liberties (AP US Government and Politics) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: liberties vs. rights, Bill of Rights, incorporation, Ninth Amendment
  {
    id: 'gov-civil-liberties-ent-1a',
    question: "In Case 1, a city fines a local newspaper for printing an editorial that criticizes the mayor. In Case 2, a city fire department refuses to hire any women as firefighters. Which pairing correctly classifies the two claims?",
    options: ["Case 1 is a civil rights claim; Case 2 is a civil liberties claim", "Both are civil liberties claims against the government", "Case 1 is a civil liberties claim; Case 2 is a civil rights claim", "Both are civil rights claims about unequal treatment"],
    correctIndex: 2,
    explanation: "Punishing a newspaper for its message restricts a freedom the Bill of Rights protects from government interference, a civil liberties claim. Excluding a group from jobs is unequal treatment, a civil rights claim under equal protection.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'gov-civil-liberties-ent-1b',
    question: "A citizen argues that a right not listed anywhere in the Constitution can still be protected, and that the absence of the right from the text does not mean the people gave it up. Which amendment most directly supports this argument?",
    options: ["The Ninth Amendment", "The Tenth Amendment", "The First Amendment", "The Fourth Amendment"],
    correctIndex: 0,
    explanation: "The Ninth Amendment states that listing certain rights shall not be read to deny or disparage others retained by the people, one basis for unenumerated rights. The Tenth Amendment reserves powers, not rights, to the states or the people.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes: speech doctrine, Fourth Amendment, religion clauses
  {
    id: 'gov-civil-liberties-ent-2a',
    question: "Police enter a home without a warrant and with no emergency, find illegal drugs, and arrest the owner. At trial, the defense asks the judge to keep the drugs out of evidence. Which doctrine is the defense relying on?",
    options: ["The Miranda rule", "The exclusionary rule", "The ban on double jeopardy", "The rule against prior restraint"],
    correctIndex: 1,
    explanation: "The exclusionary rule bars evidence obtained through an unconstitutional search from being used at trial, and it applies to the states. Miranda concerns warnings before custodial questioning, not physical evidence from a search.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'gov-civil-liberties-ent-2b',
    question: "At a public rally, a speaker declares that the government should someday be overthrown by force. He names no target or time, urges no immediate action, and the crowd leaves peacefully. Under the Court's current test for speech that advocates illegal action, can he be punished?",
    options: ["Yes, because any speech that advocates violence is unprotected", "Yes, because the words create a clear and present danger in peacetime", "No, because all political speech is protected even when it incites a riot", "No, because abstract advocacy is not aimed at sparking imminent lawlessness"],
    correctIndex: 3,
    explanation: "Since 1969, the Court has protected advocacy of force unless it is directed to inciting imminent lawless action and is likely to produce it, which narrowed the older clear-and-present-danger standard from *Schenck*. Speech that actually incites an immediate riot can still be punished.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples: required cases and speech categories
  {
    id: 'gov-civil-liberties-ent-3a',
    question: "A state requires every public school student to attend a two-week overnight program away from home. A family's religion forbids children from spending nights away from their parents, and the Court rules that the state must exempt their children. Which required case does this ruling most closely resemble?",
    options: ["*Wisconsin v. Yoder*", "*Engel v. Vitale*", "*Tinker v. Des Moines*", "*Schenck v. United States*"],
    correctIndex: 0,
    explanation: "*Wisconsin v. Yoder* held that the free exercise rights of Amish families outweighed the state's interest in requiring school attendance past eighth grade, the same kind of religious exemption from an education rule. *Engel* concerned the establishment clause and state-sponsored prayer.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'gov-civil-liberties-ent-3b',
    question: "A city allows protest marches downtown but requires a permit, limits marches to daylight hours, and caps amplified sound, applying the same rules to every group regardless of its message. How would courts most likely view these rules?",
    options: ["As a prior restraint that courts presume to be unconstitutional", "As viewpoint discrimination that favors certain groups over others", "As content-neutral regulation of when and where speech occurs", "As a violation of the protesters' symbolic speech rights"],
    correctIndex: 2,
    explanation: "Content-neutral limits on when, where, and how loudly people may speak are generally allowed if they leave other ways to communicate. Rules that apply equally to every message are not viewpoint discrimination.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Connections & Interactions: Congress, the President, and civil liberties
  {
    id: 'gov-civil-liberties-ent-4a',
    question: "After the Supreme Court ruled that a neutral, generally applicable law need not exempt religious practices, Congress passed a law requiring the federal government to meet a much higher standard before substantially burdening anyone's religious exercise. What does this sequence illustrate?",
    options: ["Congress may overrule any constitutional ruling by a simple majority", "The Court must approve statutes that respond to its decisions", "Religious liberty is protected only by the federal courts", "Lawmakers can protect liberties by statute beyond the Court's floor"],
    correctIndex: 3,
    explanation: "The Religious Freedom Restoration Act of 1993 is an example of Congress using legislation to give more protection than the Court's reading of the Constitution required. Congress cannot overrule a constitutional ruling by statute, but it can add statutory protections on top of it.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },
  {
    id: 'gov-civil-liberties-ent-4b',
    question: "During World War II, an executive order led to the forced removal of about 120,000 Japanese Americans from the West Coast. The Supreme Court upheld the policy at the time, and in 1988 Congress formally apologized and paid reparations. What does this history best illustrate?",
    options: ["Courts consistently protect minority liberties during wartime", "Claimed security needs can override liberties, with redress coming later", "Executive orders cannot affect the liberties of American citizens", "Congress lacks any power to respond to past violations of liberty"],
    correctIndex: 1,
    explanation: "In a national crisis, the President and the Court allowed a sweeping restriction of liberty in the name of security, and the political branches later acknowledged it as a wrong. The episode is a standard example of the tension between civil liberties and national security.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },

  // Part 5 — Change Over Time: the pre-1868 limit, the incorporation revolution
  {
    id: 'gov-civil-liberties-ent-5a',
    question: "In 1833, a wharf owner claimed that the city of Baltimore had ruined his property without paying him, in violation of the Fifth Amendment's takings clause. The Supreme Court rejected his claim. Why?",
    options: ["The Bill of Rights bound only the national government", "The Fifth Amendment protects only criminal defendants", "Takings claims must be brought in a state legislature", "The Fourteenth Amendment had excluded property rights"],
    correctIndex: 0,
    explanation: "In that 1833 case, the Court held that the Bill of Rights restrained only the federal government. The Fourteenth Amendment did not exist until 1868, and only afterward did the Court begin applying Bill of Rights protections to the states.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },
  {
    id: 'gov-civil-liberties-ent-5b',
    question: "Between 1961 and 1966, the Supreme Court required states to exclude illegally seized evidence, to provide lawyers to poor felony defendants, and to warn suspects of their rights before questioning. Which pattern does this cluster of rulings reflect?",
    options: ["A return of criminal procedure to the states under the Tenth Amendment", "A series of constitutional amendments expanding the rights of the accused", "A nationalizing of the accused's rights through incorporation", "A shift of criminal cases from state courts to Congress for review"],
    correctIndex: 2,
    explanation: "The Warren Court used the Fourteenth Amendment's Due Process Clause to apply criminal-procedure protections to the states, creating national standards for police and courts. These were judicial rulings, not amendments.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },

  // Part 6 — Problem-Solving Workshop: the five-step framework; required documents
  {
    id: 'gov-civil-liberties-ent-6a',
    question: "A student at a private university with no government ties is disciplined for a speech she gave on campus, and she files a First Amendment lawsuit. Applying the framework step that identifies the government action being challenged, what is the main weakness of her case?",
    options: ["Universities are exempt from all speech protections", "Her speech fell into the category of fighting words", "She waited too long to bring her claim to the court", "No public official or agency restricted her speech"],
    correctIndex: 3,
    explanation: "The First Amendment limits government, not private institutions, so a claim against a private university fails at the government-action step unless the school is acting for the state. Public universities, by contrast, are bound by the First Amendment.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'gov-civil-liberties-ent-6b',
    question: "An essay argues that citizens may openly and peacefully break an unjust law and willingly accept the penalty, in order to awaken the conscience of the community. Which required document best supports this argument?",
    options: ["Federalist No. 78", "Letter from a Birmingham Jail", "Brutus No. 1", "Federalist No. 10"],
    correctIndex: 1,
    explanation: "In the Letter from a Birmingham Jail, Martin Luther King Jr. defends nonviolent civil disobedience against unjust laws, carried out openly and with willingness to accept the penalty. The Federalist papers and Brutus No. 1 address the design of government, not civil disobedience.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },

  // Part 7 — AP Review: SCOTUS comparison with required civil-liberties cases
  {
    id: 'gov-civil-liberties-ent-7a',
    question: "A public high school bans students from wearing T-shirts that criticize a local factory's pollution, even though the shirts have caused no disruption of classes. Which required case gives the students the strongest support?",
    options: ["*Tinker v. Des Moines*", "*Schenck v. United States*", "*New York Times Co. v. United States*", "*Engel v. Vitale*"],
    correctIndex: 0,
    explanation: "*Tinker* held that students keep their free speech rights at school and that silent, symbolic political expression is protected unless it causes substantial disruption. *Schenck* upheld a speech restriction, and *New York Times Co.* concerned prior restraint of the press.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'gov-civil-liberties-ent-7b',
    question: "In a case that is not on the required list, the Court held that a defendant who faces possible jail time for a misdemeanor must be offered a lawyer if he cannot afford one. Which required case did that ruling build on?",
    options: ["*McDonald v. Chicago*", "*Wisconsin v. Yoder*", "*Gideon v. Wainwright*", "*Citizens United v. FEC*"],
    correctIndex: 2,
    explanation: "*Gideon v. Wainwright* applied the Sixth Amendment right to counsel to state felony trials, and the later ruling extended the same principle to misdemeanors that can lead to jail. *McDonald* incorporated the Second Amendment.",
    partNumber: 7,
    partTitle: "AP Review",
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: "Core Concepts" },
    { partNumber: 2, partTitle: "Key Processes" },
    { partNumber: 3, partTitle: "Patterns & Examples" },
    { partNumber: 4, partTitle: "Connections & Interactions" },
    { partNumber: 5, partTitle: "Change Over Time" },
    { partNumber: 6, partTitle: "Problem-Solving Workshop" },
    { partNumber: 7, partTitle: "AP Review" },
  ]
}
