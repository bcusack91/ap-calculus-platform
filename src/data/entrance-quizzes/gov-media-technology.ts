/**
 * Entrance Quiz — Media and Technology (AP US Government and Politics) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1 — Core Concepts: framing; the watchdog role
  {
    id: 'gov-media-technology-ent-1a',
    question: "Two news outlets cover the same downtown gathering. One describes \"protesters demanding justice,\" and the other describes \"rioters damaging property.\" Which media effect does this difference illustrate?",
    options: ["Agenda-setting effects", "Framing effects", "Gatekeeping", "Horse-race coverage"],
    correctIndex: 1,
    explanation: "Framing is how a story is presented, which shapes how audiences interpret the same event. Agenda-setting concerns which issues people think are important, and gatekeeping concerns which stories get covered at all.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },
  {
    id: 'gov-media-technology-ent-1b',
    question: "Reporters uncover documents showing that a federal agency hid repeated safety failures. Their stories prompt congressional hearings, and two senior officials resign. Which function of the media does this episode best illustrate?",
    options: ["Entertainment that attracts large audiences", "Horse-race coverage of a political contest", "Transmission of cultural values to the young", "The watchdog role of exposing misconduct"],
    correctIndex: 3,
    explanation: "Investigative reporting that exposes wrongdoing and triggers accountability, as in Watergate, is the press acting as a watchdog. Horse-race coverage concerns who is ahead in an election.",
    partNumber: 1,
    partTitle: "Core Concepts",
  },

  // Part 2 — Key Processes: earned media; shifting ad spending
  {
    id: 'gov-media-technology-ent-2a',
    question: "During a presidential campaign, networks repeatedly air a candidate's rallies live and replay his posts online, giving him coverage worth billions of dollars for which his campaign pays nothing. What is this coverage called?",
    options: ["Earned media", "Paid advertising", "An issue ad", "A push poll"],
    correctIndex: 0,
    explanation: "Earned media is free news coverage a candidate attracts, as opposed to paid advertising the campaign buys. Issue ads and push polls are both purchased by campaigns or outside groups.",
    partNumber: 2,
    partTitle: "Key Processes",
  },
  {
    id: 'gov-media-technology-ent-2b',
    question: "Hypothetical data on the share of political advertising spending by medium:\n- Broadcast television: 70 percent in 2012, 48 percent in 2024\n- Digital and social media: 15 percent in 2012, 45 percent in 2024\nWhich conclusion do these data best support?",
    options: ["Campaigns spent less on advertising in 2024 than they did in 2012", "Broadcast television disappeared as an advertising medium by 2024", "Campaigns moved much of their advertising money toward online platforms", "Digital ads made up most political ad spending in both years shown"],
    correctIndex: 2,
    explanation: "Digital's share tripled while broadcast's share fell by about a third, showing a shift toward online and targeted advertising. The data give shares, not totals, so they say nothing about whether overall spending fell.",
    partNumber: 2,
    partTitle: "Key Processes",
  },

  // Part 3 — Patterns & Examples: selective exposure; trust in the media
  {
    id: 'gov-media-technology-ent-3a',
    question: "Hypothetical audience data: 80 percent of one cable network's regular viewers identify with Party A, while 75 percent of a rival network's regular viewers identify with Party B. Which concept best explains these audiences?",
    options: ["Gatekeeping", "Agenda-setting", "Prior restraint", "Selective exposure"],
    correctIndex: 3,
    explanation: "Selective exposure is the tendency to choose news sources that match one's existing views, which sorts partisan audiences toward different outlets. Gatekeeping is done by editors deciding what becomes news, not by audiences.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },
  {
    id: 'gov-media-technology-ent-3b',
    question: "Survey data on the share of Americans who trust the mass media a great deal or a fair amount:\n- 1976: 72 percent of all adults\n- 2024: 31 percent of all adults; 54 percent of Democrats; 12 percent of Republicans\nWhich conclusion do these data best support?",
    options: ["Trust rose over time and became similar across the parties", "Overall trust dropped and now differs widely by party", "Trust fell only among Democrats while Republicans held steady", "Trust stayed at about the same level from 1976 to 2024"],
    correctIndex: 1,
    explanation: "Overall trust dropped from 72 to 31 percent, and the 42-point gap between Democrats and Republicans shows a strong partisan divide. Such low and divided trust raises concern about the credibility of news sources.",
    partNumber: 3,
    partTitle: "Patterns & Examples",
  },

  // Part 4 — Connections & Interactions: media and the bureaucracy; priming
  {
    id: 'gov-media-technology-ent-4a',
    question: "A reporter uses a 1966 federal law to request an agency's internal safety inspection records and, after a long wait, receives most of them. Which tool did the reporter use, and what does it support?",
    options: ["The Freedom of Information Act, aiding oversight of agencies", "The Fairness Doctrine, requiring agencies to give balanced views", "The equal-time rule, guaranteeing reporters access to officials", "A prior restraint order, allowing agencies to block publication"],
    correctIndex: 0,
    explanation: "The Freedom of Information Act lets the public and press obtain government records, a key tool for holding the bureaucracy accountable. The Fairness Doctrine and equal-time rule applied to broadcasters, not to agency records.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },
  {
    id: 'gov-media-technology-ent-4b',
    question: "After months of heavy coverage of a president's handling of a foreign war, surveys show that voters' overall approval of the president depends much more on the war and much less on the economy than before. Which media effect does this illustrate?",
    options: ["Gatekeeping", "Hostile media perception", "Priming", "Earned media"],
    correctIndex: 2,
    explanation: "Priming occurs when coverage makes certain considerations more prominent in how people evaluate leaders. Hostile media perception is the tendency of partisans to see neutral coverage as biased against them.",
    partNumber: 4,
    partTitle: "Connections & Interactions",
  },

  // Part 5 — Change Over Time: muckraking; partisan media then and now
  {
    id: 'gov-media-technology-ent-5a',
    question: "In the early 1900s, magazine and book exposés of unsanitary meatpacking and of monopoly practices helped produce the Pure Food and Drug Act and antitrust action. What does this history best illustrate?",
    options: ["Government censorship of the press during a reform era", "Investigative journalism prompting major policy reform", "Broadcast media replacing print as the main news source", "Yellow journalism pushing the nation into a foreign war"],
    correctIndex: 1,
    explanation: "Progressive Era muckrakers such as Upton Sinclair and Ida Tarbell exposed abuses that spurred reforms, an early example of the watchdog press shaping policy. Radio and television came later.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },
  {
    id: 'gov-media-technology-ent-5b',
    question: "Newspapers in the 1790s were openly funded by and loyal to political parties. In the mid-twentieth century, a few broadcast networks aimed for balanced coverage. After 1987, when the rule requiring broadcasters to present balanced views was repealed, openly partisan talk radio and cable news grew. Which long-term pattern does this describe?",
    options: ["A steady move toward ever more balanced coverage", "A permanent end to the partisan press after 1800", "A shift from broadcast to print as the main source", "A swing from partisan press to balance and back again"],
    correctIndex: 3,
    explanation: "Media have moved from a partisan press, to an era of objective broadcast journalism, and back toward partisan outlets after the Fairness Doctrine was repealed and cable and the internet fragmented audiences.",
    partNumber: 5,
    partTitle: "Change Over Time",
  },

  // Part 6 — Problem-Solving Workshop: regulating new technology; required documents
  {
    id: 'gov-media-technology-ent-6a',
    question: "A state wants to address AI-generated fake videos of candidates while respecting the First Amendment. Which approach is most likely to survive a court challenge?",
    options: ["Banning every video that mocks or criticizes a candidate", "Requiring state approval before any political video is posted", "Requiring clear labels on political ads made with AI tools", "Letting candidates order platforms to delete any post they dislike"],
    correctIndex: 2,
    explanation: "A narrow disclosure requirement addresses deception without banning speech, while broad bans on criticism, prior approval of videos, and deletion on demand would sweep in protected political speech and satire. Prior approval is a form of prior restraint, which courts strongly disfavor.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },
  {
    id: 'gov-media-technology-ent-6b',
    question: "An essay argues that the framers counted on a large and diverse republic to keep like-minded factions from finding one another and combining, but that partisan media and social networks now let them coordinate across the whole country. Which required document is the essay engaging?",
    options: ["Federalist No. 10", "Federalist No. 78", "Brutus No. 1", "Federalist No. 70"],
    correctIndex: 0,
    explanation: "Federalist No. 10 argues that an extended republic makes it harder for a majority faction to form and act together, the logic the essay says modern media undercut. Federalist No. 78 concerns the judiciary.",
    partNumber: 6,
    partTitle: "Problem-Solving Workshop",
  },

  // Part 7 — AP Review: required press case; platform liability
  {
    id: 'gov-media-technology-ent-7a',
    question: "A federal judge orders a newspaper not to publish leaked documents about a classified military program, and the Supreme Court lifts the order because the government has not shown sufficient justification. Which required case does this ruling most closely resemble?",
    options: ["*Schenck v. United States*", "*Tinker v. Des Moines*", "*Citizens United v. FEC*", "*New York Times Co. v. United States*"],
    correctIndex: 3,
    explanation: "*New York Times Co. v. United States* refused to block publication of the Pentagon Papers, applying a heavy presumption against prior restraint. *Schenck* upheld punishment of speech after the fact during wartime.",
    partNumber: 7,
    partTitle: "AP Review",
  },
  {
    id: 'gov-media-technology-ent-7b',
    question: "A user posts a false claim on a large social media site that a family restaurant failed its health inspections, and the restaurant sues the site rather than the user. Under the 1996 federal provision known as Section 230, what is the most likely result?",
    options: ["The site is liable, since it published the claim to its users", "The site is shielded from liability for what its users post", "The site must pay the owner whatever the user cannot afford", "The site must remove all posts that mention local businesses"],
    correctIndex: 1,
    explanation: "Section 230 generally shields online platforms from liability for content posted by their users, so the user, not the site, would be the proper defendant. Supporters say this protects online speech; critics want it narrowed.",
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
