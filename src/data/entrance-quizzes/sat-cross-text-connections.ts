/**
 * Entrance Quiz — SAT Cross-Text Connections
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'ctc-ent-1a',
    question: `Text 1\nTardigrades, microscopic animals about half a millimeter long, are famous for surviving extreme conditions. Biologist Hanna Lind argues that their toughness comes chiefly from a single trick: when their surroundings dry out, they lose nearly all their body water and enter a dormant state called a tun, in which their metabolism almost stops.\n\nText 2\nMolecular biologist Ravi Okafor agrees that the tun state matters, but his team has found that tardigrades also produce unusual proteins that wrap around their DNA and shield it from damage. Tardigrades lacking these proteins, the team reports, survive radiation far less often, even when they are in the tun state.\n\nBased on the texts, how would Okafor most likely respond to Lind's argument?`,
    options: [
      `By claiming that the tun state plays no role in tardigrades' survival of extreme conditions`,
      `By suggesting that the tun state is not the only source of tardigrades' toughness`,
      `By arguing that tardigrades survive radiation more easily than they survive drying out`,
      `By agreeing that tardigrades owe their toughness almost entirely to the tun state`,
    ],
    correctIndex: 1,
    explanation: `Lind credits tardigrades' toughness "chiefly" to the tun state; Okafor "agrees that the tun state matters" but adds protective proteins that tardigrades need even in the tun state, so he would say the tun is not the only source. The "no role" choice is too strong, since Okafor accepts the tun state. The "almost entirely" choice repeats Lind's view rather than Okafor's, and neither text compares surviving radiation with surviving dryness.`,
    partNumber: 1,
    partTitle: 'Meet the Paired Texts',
  },
  {
    id: 'ctc-ent-1b',
    question: `Text 1\nFor much of the twentieth century, many scholars believed that the Amazon rainforest's poor soils could never have supported large human populations. Archaeologist Marisol Duarte disagrees. Her surveys along the river's tributaries have found extensive patches of dark, fertile soil enriched with charcoal and pottery shards, which she argues were deliberately created by large farming communities over centuries.\n\nText 2\nSoil scientist Owen Brandt accepts that the dark soils were made by people, not by natural processes. He doubts, though, that they prove the existence of large communities. Small groups living in one place for many generations, he notes, could have produced the same deposits slowly through everyday cooking and waste disposal.\n\nBased on the texts, both Duarte and Brandt would most likely agree with which statement?`,
    options: [
      `The dark soils show that large farming communities once lived along the Amazon.`,
      `The dark soils along the Amazon were too poor to have fed many people living there.`,
      `The dark soils formed through natural processes and were later used by small groups.`,
      `The dark soils were made by people rather than formed by natural processes.`,
    ],
    correctIndex: 3,
    explanation: `Duarte says the soils were "deliberately created" by people, and Brandt "accepts that the dark soils were made by people, not by natural processes," so both would sign the human-activity statement. The large-communities statement is Duarte's claim alone; Brandt doubts it. Brandt rejects natural formation, and Duarte calls the dark soils fertile, so neither author would say they were too poor to feed many people.`,
    partNumber: 1,
    partTitle: 'Meet the Paired Texts',
  },
  {
    id: 'ctc-ent-2a',
    question: `Text 1\nIn a study by psychologist Dana Whitfield, students who slept for eight hours after memorizing a list of word pairs recalled more of the pairs the next day than students who stayed awake. Whitfield concludes that high schools should start later in the morning so that teenagers can get more sleep and learn more.\n\nText 2\nWhitfield's finding fits a large body of research linking sleep to memory, and I do not doubt it. But a later start time does not guarantee more sleep: in some districts that have tried it, many teenagers simply went to bed later. Before changing schedules, districts should first measure whether students actually sleep longer.\n\nBased on the texts, how would the author of Text 2 most likely respond to Whitfield's conclusion?`,
    options: [
      `By accepting her finding but questioning whether later start times would mean more sleep`,
      `By questioning whether her finding reflects how many word pairs the students actually recalled`,
      `By agreeing that later start times will lead teenagers to sleep longer and remember more`,
      `By rejecting the idea that sleeping after studying affects how well students remember`,
    ],
    correctIndex: 0,
    explanation: `The author of Text 2 accepts Whitfield's data ("I do not doubt it") but targets her recommendation, noting that later start times do not guarantee more sleep. Text 2 never questions how recall was measured, and it explicitly accepts the link between sleep and memory. The full-agreement choice ignores the author's doubt about whether students will actually sleep longer.`,
    partNumber: 2,
    partTitle: "Mapping Each Author's Position",
  },
  {
    id: 'ctc-ent-2b',
    question: `Text 1\nResearchers who study traces of pigment on ancient Greek marble statues have shown that many were once brightly painted. Art historian Lena Marsh argues that this discovery should change how classical sculpture is displayed: museums, she says, should place a full-color reconstruction beside every ancient statue in their collections.\n\nText 2\nPigment analysis has convincingly shown that some statues were painted, and I welcome reconstructions of those works. But traces of paint survive on only a fraction of ancient sculptures, and for many statues we have no evidence of their original colors. Displaying invented color schemes beside those statues would mislead visitors more than it would inform them.\n\nBased on the texts, how would the author of Text 2 most likely respond to Marsh's recommendation?`,
    options: [
      `By doubting that pigment analysis can reveal whether ancient statues were painted`,
      `By arguing that museums should display reconstructions instead of the original statues`,
      `By supporting it for some statues but objecting to applying it to every statue`,
      `By endorsing it fully, since evidence of color survives on nearly every ancient statue`,
    ],
    correctIndex: 2,
    explanation: `The hinge is the scope of Marsh's recommendation: Text 2 welcomes reconstructions where paint traces survive but objects to "every" statue, since for many there is no color evidence. Text 2 calls the pigment analysis convincing, so it does not doubt the data. It never proposes replacing originals, and it says paint survives on "only a fraction" of statues, not most.`,
    partNumber: 2,
    partTitle: "Mapping Each Author's Position",
  },
  {
    id: 'ctc-ent-3a',
    question: `Text 1\nMicrobiologist Akiko Sato's team has identified a soil bacterium that slowly digests a common type of plastic. Sato argues that such microbes could one day be grown in large tanks to recycle plastic waste, reducing the amount that ends up in landfills and oceans.\n\nText 2\nChemical engineer Paul Mendes notes that the bacteria Sato studied need weeks to digest a thin film of plastic, and only at warm, carefully controlled temperatures. Engineering them to process thick bottles and mixed waste quickly enough to matter, he argues, will take years of work, and success is not guaranteed.\n\nBased on the texts, how would Mendes most likely respond to Sato's argument?`,
    options: [
      `By insisting that the bacteria cannot digest plastic under any conditions`,
      `By cautioning that practical use of the bacteria faces serious obstacles`,
      `By pointing out that the bacteria harm ocean life more than plastic waste does`,
      `By agreeing that the bacteria are already ready for use in large recycling tanks`,
    ],
    correctIndex: 1,
    explanation: `Mendes accepts that the bacteria digest plastic but stresses how slowly and under what narrow conditions, concluding that a practical method "will take years of work." He does not deny that digestion happens (he describes it), and his point that success is not guaranteed rules out saying the bacteria are already ready. Neither text says the bacteria harm ocean life.`,
    partNumber: 3,
    partTitle: 'How Would Text 2 Respond to Text 1?',
  },
  {
    id: 'ctc-ent-3b',
    question: `Text 1\nHistorian Clara Webb argues that English longbowmen won the Battle of Agincourt in 1415. The muddy field, she grants, slowed the advancing French soldiers, but armies had crossed muddy ground in many earlier battles without disaster. What was unusual at Agincourt, Webb contends, was the thousands of archers whose arrows struck the French as they struggled forward.\n\nText 2\nHistorian Simon Hale argues that the decisive factor at Agincourt was the ground itself. Heavy rain had turned the freshly plowed field into deep mud, and the narrow field squeezed the French army so tightly that soldiers could barely move or lift their weapons. In such conditions, Hale argues, the French would have lost even against far fewer archers.\n\nBased on the texts, how would Webb most likely respond to Hale's argument?`,
    options: [
      `By agreeing that the archers mattered less to the outcome than the condition of the field`,
      `By denying that the rain and mud had any effect on the French advance during the battle`,
      `By claiming that the French army was much smaller than Hale suggests`,
      `By maintaining that the mud could not on its own have decided the battle`,
    ],
    correctIndex: 3,
    explanation: `This is the reverse direction: Webb already addresses Hale's point in Text 1, granting that mud slowed the French but noting that armies "had crossed muddy ground in many earlier battles without disaster," so mud cannot be the whole story. She grants the mud's effect, so the "any effect" denial is too strong, and agreeing that the archers mattered less reverses her view. Neither text discusses the French army's size.`,
    partNumber: 3,
    partTitle: 'How Would Text 2 Respond to Text 1?',
  },
  {
    id: 'ctc-ent-4a',
    question: `Text 1\nArchaeologist Ruth Kemble argues that Stonehenge was built mainly as a calendar. The monument's main axis lines up with the sunrise at the summer solstice and the sunset at the winter solstice, and Kemble believes its builders used it to track the seasons for planting and herding.\n\nText 2\nArchaeologist Tomas Reyes accepts that Stonehenge's alignment with the solstices was intentional. But he points to the many cremation burials found at the site and argues that it was chiefly a place for honoring the dead, with the solstice alignment marking the timing of ceremonies rather than serving as a farming calendar.\n\nBased on the texts, both Kemble and Reyes would most likely agree with which statement?`,
    options: [
      `The monument was deliberately oriented toward the sun's position at the solstices.`,
      `The monument's main purpose was helping farmers and herders track the seasons.`,
      `The monument served chiefly as a site for ceremonies honoring the dead.`,
      `The alignment of the monument's axis with the solstices is most likely a coincidence.`,
    ],
    correctIndex: 0,
    explanation: `Kemble's calendar theory assumes the solstice alignment was planned, and Reyes "accepts that Stonehenge's alignment with the solstices was intentional," so both sign the deliberate-alignment statement. The farming-calendar statement is Kemble's alone and the honoring-the-dead statement is Reyes's alone. Both authors reject the coincidence statement.`,
    partNumber: 4,
    partTitle: 'Agreement Questions',
  },
  {
    id: 'ctc-ent-4b',
    question: `Text 1\nPsychologist Imani Brooks found that students who took lecture notes by hand answered conceptual questions about the lecture more accurately than students who typed their notes. Brooks suggests that because handwriting is slower, it pushes students to summarize ideas in their own words instead of copying the lecturer's sentences.\n\nText 2\nEducation researcher Peter Lund agrees that copying a lecture word for word, as many typists do, leads to shallow learning. But he found that typists who were trained to summarize rather than transcribe did as well as students who wrote by hand. The tool, Lund concludes, matters less than how students use it.\n\nBased on the texts, both Brooks and Lund would most likely agree with which statement?`,
    options: [
      `Students should generally take lecture notes by hand so that they summarize instead of copying.`,
      `Copying a lecturer's exact words tends to produce weaker understanding than summarizing.`,
      `Typing notes produces better understanding of lectures than writing them by hand.`,
      `The speed of handwriting has no effect on whether students summarize or copy the lecturer's words.`,
    ],
    correctIndex: 1,
    explanation: `Brooks credits handwriting with preventing students from "copying the lecturer's sentences," and Lund says word-for-word copying "leads to shallow learning," so both prefer summarizing to copying. The hand-over-laptop advice is Brooks's position that Lund resists ("the tool matters less"). Neither author says typing is better, and Brooks says handwriting's slowness does shape whether students summarize.`,
    partNumber: 4,
    partTitle: 'Agreement Questions',
  },
  {
    id: 'ctc-ent-5a',
    question: `Text 1\nGalaxies spin so fast that the gravity of their visible stars and gas could not hold them together. Most astronomers explain this by proposing dark matter, an invisible substance that adds gravity without giving off light. Physicist Nora Eklund supports this view, noting that dark matter also accounts for patterns in light left over from the early universe.\n\nText 2\nPhysicist Andres Molina points out that scientists have searched for dark matter particles for decades without detecting any. He favors an alternative: that gravity itself behaves differently at the vast scale of a galaxy than it does in our solar system, so that no invisible substance is needed.\n\nWhich choice best describes a difference in how Eklund and Molina view the fast rotation of galaxies?`,
    options: [
      `Eklund considers it evidence that gravity behaves differently at great distances, while Molina considers it evidence of dark matter.`,
      `Eklund believes it has been measured directly by particle detectors, while Molina believes it cannot be measured at all.`,
      `Eklund attributes it to an unseen form of matter, while Molina attributes it to gravity behaving differently.`,
      `Eklund thinks it is caused by visible stars and gas, while Molina thinks it is caused by light from the early universe.`,
    ],
    correctIndex: 2,
    explanation: `Eklund backs the dark matter explanation, an "invisible substance," while Molina proposes that gravity "behaves differently" at galactic scales. The choice crediting Eklund with a gravity explanation swaps the two physicists. Text 2 says dark matter particles have not been detected, not that the rotation was measured by detectors, and Text 1 says visible stars and gas cannot account for the rotation.`,
    partNumber: 5,
    partTitle: 'Difference and Disagreement Questions',
  },
  {
    id: 'ctc-ent-5b',
    question: `Text 1\nTranslator Ines Albescu argues that a translation of a poem should follow the original's words as closely as possible, even when the result sounds awkward in the new language. Readers, she says, deserve to know exactly what the poet wrote, and smoothing out strange phrasing hides the poet's own choices.\n\nText 2\nTranslator Marcus Bell believes that a poem's translation should recreate the effect the original has on its readers. If a literal rendering would sound clumsy where the original sounds graceful, he argues, the translator must find new words that sound graceful, even if they depart from the original's exact meaning.\n\nWhich choice best describes a difference in how Albescu and Bell view awkward phrasing in a translated poem?`,
    options: [
      `Albescu accepts it as the price of fidelity to the poet, while Bell sees it as a failure to recreate the original's effect.`,
      `Albescu sees it as a sign of careless translation, while Bell sees it as a faithful recreation of the original.`,
      `Albescu thinks it should be explained in footnotes for readers, while Bell thinks it should be left without any comment at all.`,
      `Albescu considers it unavoidable in every translation, while Bell considers it the poem's intended effect.`,
    ],
    correctIndex: 0,
    explanation: `Albescu tolerates awkwardness "even when the result sounds awkward" because readers deserve the poet's exact words, while Bell says a clumsy rendering must be replaced with graceful words. The careless-versus-faithful choice reverses the two translators. Neither text mentions notes, Albescu never calls awkwardness unavoidable, and Bell treats it as a failure rather than an intended effect.`,
    partNumber: 5,
    partTitle: 'Difference and Disagreement Questions',
  },
  {
    id: 'ctc-ent-6a',
    question: `Text 1\nRed markings on the walls of several caves in Spain have been dated to about 64,000 years ago, before modern humans are thought to have reached Europe. Archaeologist Lucia Prado argues that the markings must therefore have been made by Neanderthals and that Neanderthals created symbolic art.\n\nText 2\nGeochemist Felix Grant questions the dating. The method measures the age of mineral crusts that formed over the paint, and Grant argues that water seeping through the rock can distort those measurements, making the crusts seem older than they are. If the markings are younger, modern humans could have made them.\n\nBased on the texts, how would Grant most likely respond to Prado's argument?`,
    options: [
      `By proving that modern humans, not Neanderthals, made the red markings`,
      `By arguing that modern humans may have reached Europe earlier than Prado assumes`,
      `By accepting the markings' age while questioning which group made them`,
      `By suggesting that her conclusion rests on an age estimate that may be unreliable`,
    ],
    correctIndex: 3,
    explanation: `Prado's conclusion depends on the 64,000-year date, and Grant argues the dating method can make crusts "seem older than they are," so he challenges the age estimate. He says modern humans "could have" made the markings, which is far weaker than proving it. He questions the age rather than accepting it, and he never disputes when modern humans reached Europe.`,
    partNumber: 6,
    partTitle: 'Cross-Text Traps',
  },
  {
    id: 'ctc-ent-6b',
    question: `Text 1\nAdding iron to some ocean waters causes tiny algae to bloom, and the algae absorb carbon dioxide as they grow. Oceanographer Mei Tan argues that fertilizing large areas of ocean with iron could therefore remove significant amounts of carbon dioxide from the atmosphere.\n\nText 2\nMarine ecologist Jonas Ferreira notes that in field trials, much of the carbon the algae absorbed returned to the air within months as the algae were eaten or decomposed near the surface. Only carbon carried to the deep ocean stays out of the atmosphere for long, and in most trials little of it sank that far.\n\nBased on the texts, how would Ferreira most likely respond to Tan's argument?`,
    options: [
      `By denying that adding iron to ocean water causes algae to bloom`,
      `By arguing that algae blooms often harm ocean life more than carbon dioxide does`,
      `By noting that the carbon the algae take up often does not stay out of the atmosphere for long`,
      `By agreeing that iron fertilization reliably keeps carbon out of the atmosphere`,
    ],
    correctIndex: 2,
    explanation: `Ferreira accepts that the algae absorb carbon but reports that much of it "returned to the air within months," which undercuts Tan's claim that fertilization would remove significant carbon. He never denies that iron causes blooms; his account assumes they occur. Text 2 says little carbon reached the deep ocean, the opposite of reliable storage, and neither text compares harm to ocean life with carbon dioxide.`,
    partNumber: 6,
    partTitle: 'Cross-Text Traps',
  },
  {
    id: 'ctc-ent-7a',
    question: `Text 1\nWhen rental electric scooters arrived in the city of Larkport, transportation planner Amira Haddad found that about a third of scooter trips replaced trips that would otherwise have been made by car, cutting downtown traffic. Haddad recommends expanding the scooter program to every neighborhood in the city.\n\nText 2\nLarkport's emergency-room physicians report a sharp rise in head and wrist injuries since the scooters arrived. Physician Daniel Ortiz does not oppose the scooters, but he argues that the program should expand only after the city builds protected lanes and requires riders under eighteen to wear helmets.\n\nBased on the texts, how would Ortiz most likely respond to Haddad's recommendation?`,
    options: [
      `By supporting expansion on the condition that safety measures are put in place first`,
      `By rejecting it on the grounds that scooters have not reduced car traffic downtown`,
      `By arguing that scooters should be banned rather than expanded to the city's neighborhoods`,
      `By endorsing it without reservation because the scooters have reduced traffic`,
    ],
    correctIndex: 0,
    explanation: `Ortiz "does not oppose the scooters" but wants expansion "only after" protected lanes and helmet rules, a conditional yes. A ban is the opposite of his stated position, and endorsing without reservation ignores his conditions. Text 2 never disputes Haddad's finding about car trips, so rejecting the plan on that ground responds to something Ortiz does not address.`,
    partNumber: 7,
    partTitle: 'Mixed Practice and Test Strategy',
  },
  {
    id: 'ctc-ent-7b',
    question: `Text 1\nMany critics read the abandoned lighthouse in Edith Marlow's novel The Long Watch as a symbol of the narrator's isolation. Critic Hal Brenner disagrees, arguing that because the narrator repeatedly climbs the lighthouse to look for her brother's ship, the tower stands for her stubborn hope that he will return.\n\nText 2\nCritic Yara Selim notes that the narrator's visits to the lighthouse grow less frequent as the novel goes on and stop entirely after a letter arrives confirming her brother's death. For Selim, the lighthouse represents hope at first, but its meaning shifts: by the novel's end, the empty tower marks the loss the narrator must accept.\n\nBased on the texts, how would Selim most likely respond to Brenner's interpretation?`,
    options: [
      `By rejecting the idea that the lighthouse ever represents the narrator's hope`,
      `By arguing that the lighthouse stands for the narrator's isolation throughout the novel`,
      `By claiming that the narrator never climbs the lighthouse to search for the ship`,
      `By granting that the lighthouse stands for hope early on but arguing that its significance changes`,
    ],
    correctIndex: 3,
    explanation: `Selim agrees the lighthouse "represents hope at first," which matches Brenner, but argues its meaning "shifts" to loss, so she qualifies rather than rejects his reading. Rejecting any link to hope is too strong. The isolation reading belongs to the "many critics" in Text 1, not to Selim, and Selim describes the narrator's visits, so she does not claim they never happen.`,
    partNumber: 7,
    partTitle: 'Mixed Practice and Test Strategy',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Meet the Paired Texts' },
    { partNumber: 2, partTitle: "Mapping Each Author's Position" },
    { partNumber: 3, partTitle: 'How Would Text 2 Respond to Text 1?' },
    { partNumber: 4, partTitle: 'Agreement Questions' },
    { partNumber: 5, partTitle: 'Difference and Disagreement Questions' },
    { partNumber: 6, partTitle: 'Cross-Text Traps' },
    { partNumber: 7, partTitle: 'Mixed Practice and Test Strategy' },
  ]
}
