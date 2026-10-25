import type { AsvabPracticeItem } from '../types'

/** Paragraph Comprehension (PC): 10 scored items, 27 minutes on the CAT-ASVAB. Authored easy → hard. */

const PONY_EXPRESS =
  'In April 1860, the Pony Express began carrying mail between St. Joseph, Missouri, and Sacramento, California, a route of about 1,900 miles. Riders galloped from station to station, switching to a fresh horse every 10 to 15 miles, and a letter could cross the whole route in about ten days, far faster than by stagecoach. The service was famous, but it never made money. In October 1861, the transcontinental telegraph line was completed, and messages that had taken days could now be sent in minutes. Two days later, the Pony Express announced that it would close.'

const FITNESS_GADGETS =
  'Every few years a new fitness gadget promises to do the work for you. Belts that buzz your stomach muscles, shoes that claim to tone your legs while you walk, and pills that supposedly burn fat while you sleep have all sold by the millions. Few of them survive careful testing. In one widely reported case, a shoe company paid tens of millions of dollars to settle claims that its toning shoes did not work as advertised. Meanwhile, the dull advice that actually works (move more, eat sensibly, sleep enough) remains free and goes largely unsold.'

export const PC_ITEMS: AsvabPracticeItem[] = [
  {
    type: 'mcq',
    topic: 'asvab-pc-details',
    difficulty: 'easy',
    stimulus:
      'NOTICE: The motor pool will close at 1600 on Friday so the building can be inspected. It will reopen at 0700 on Monday. Any vehicle needed over the weekend must be signed out by 1400 on Friday. Drivers must return weekend vehicles with at least half a tank of fuel.',
    question: 'According to the notice, what is the latest time a driver can sign out a vehicle for the weekend?',
    options: ['1400 on Friday', '1600 on Friday', '0700 on Saturday', '0700 on Monday'],
    correctAnswer: 0,
    explanation: 'The notice states that weekend vehicles “must be signed out by 1400 on Friday.” The 1600 time is when the motor pool closes, which is a different detail.',
    optionExplanations: [
      'Correct. The notice says weekend vehicles must be signed out by 1400 on Friday.',
      '1600 on Friday is when the motor pool closes, two hours after the sign-out deadline.',
      'The notice never mentions Saturday; the motor pool is closed all weekend.',
      '0700 on Monday is when the motor pool reopens, after the weekend is over.',
    ],
  },
  {
    type: 'mcq',
    topic: 'asvab-pc-main-idea',
    difficulty: 'easy',
    stimulus:
      'In hot weather, the body cools itself by sweating, and every drop of sweat is water the body must replace. Waiting until you feel thirsty is a mistake, because thirst often shows up only after you have already lost a good deal of fluid. Soldiers training in the heat are told to drink small amounts of water regularly throughout the day, to watch for early warning signs such as headache and dizziness, and to rest in the shade when they can.',
    question: 'Which statement best expresses the main idea of this passage about training in hot weather?',
    options: [
      'In the heat, drink water regularly instead of waiting for thirst.',
      'Sweating is the main way the human body cools itself in hot weather.',
      'Headache is the most dangerous warning sign of heat illness.',
      'Soldiers should not do any training during hot weather.',
    ],
    correctAnswer: 0,
    explanation: 'Every sentence supports one point: replace the water lost to sweat by drinking regularly, because thirst comes too late. The other choices are a single supporting detail, a claim the passage does not make, or a claim it contradicts.',
    optionExplanations: [
      'Correct. The passage explains why thirst comes too late and tells soldiers to drink regularly; that is the point the details support.',
      'This is a supporting detail from the first sentence, not the main idea of the whole passage.',
      'The passage lists headache as an early warning sign; it never calls it the most dangerous one.',
      'The passage describes how soldiers should train in the heat, so it does not say they should stop training.',
    ],
  },
  {
    type: 'mcq',
    topic: 'asvab-pc-inference',
    difficulty: 'easy',
    stimulus:
      'Before the storm arrived, the harbor master ordered every boat in the marina to be secured. Crews doubled their mooring lines, cleared loose gear from the decks, and closed every hatch. Thanks to these measures, the fleet weathered the storm with only minor damage.',
    question: 'As used in the passage about the harbor storm, **weathered** most nearly means',
    options: ['avoided', 'survived', 'forecast', 'was worn away by'],
    correctAnswer: 1,
    explanation: 'The boats stayed in the marina while the storm hit and came through it “with only minor damage.” To weather a storm is to come through it safely, so survived fits.',
    optionExplanations: [
      'The boats did not avoid the storm; they stayed in the marina while it hit and came through it.',
      'Correct. To weather a storm is to get through it, and the fleet came through with only minor damage.',
      'Forecast means to predict weather; the passage is about what happened to the boats during the storm.',
      'Weathered can describe something worn by wind and rain, but that sense clashes with “only minor damage.”',
    ],
  },
  {
    type: 'mcq',
    topic: 'asvab-pc-details',
    difficulty: 'medium',
    stimulus:
      'To perform a radio check, first make sure the handset is firmly connected and the radio is set to the assigned frequency. Next, press the push-to-talk button, say the call sign of the station you are calling followed by your own call sign, and ask for a radio check. Then release the button and wait for the reply. If you hear no answer after about thirty seconds, check the antenna connection before you try again.',
    question: 'According to the passage, what should the operator do immediately after asking for a radio check?',
    options: [
      'Check the antenna connection',
      'Release the button and wait for a reply',
      'Set the radio to the assigned frequency',
      'Say the other station’s call sign',
    ],
    correctAnswer: 1,
    explanation: 'The steps run in order: connect and set the frequency, press the button, give both call signs and ask for the check, then release the button and wait. Checking the antenna comes only if no answer arrives in about thirty seconds.',
    optionExplanations: [
      'Checking the antenna happens only later, and only if there is no answer after about thirty seconds.',
      'Correct. The step right after asking for the check is to release the button and wait for the reply.',
      'Setting the frequency is part of the first step, before the operator presses the button.',
      'The operator says the call signs while asking for the check, not after it.',
    ],
  },
  {
    type: 'mcq',
    topic: 'asvab-pc-main-idea',
    difficulty: 'medium',
    stimulus:
      'Many people believe that lightning never strikes the same place twice. In fact, tall structures are struck again and again; a single skyscraper may be hit dozens of times in one year. Lightning tends to strike the tallest object in an area because it offers the easiest path to the ground. So if you are caught outdoors in a storm, do not assume a spot is safe just because it was struck before.',
    question: 'The author wrote this passage about lightning mainly to',
    options: [
      'correct a common mistaken belief about lightning',
      'explain how skyscrapers are built to resist lightning',
      'describe what lightning is made of',
      'persuade readers to stay indoors whenever it rains',
    ],
    correctAnswer: 0,
    explanation: 'The passage opens with a popular belief, says “In fact” and gives evidence against it, then draws a safety lesson from the correction. Its purpose is to correct the myth.',
    optionExplanations: [
      'Correct. The passage states the myth, disproves it with the skyscraper example, and draws a safety lesson.',
      'Skyscrapers appear only as evidence that lightning strikes the same place repeatedly; construction is never discussed.',
      'The passage never explains what lightning is made of.',
      'The safety advice is about not trusting a spot that was struck before, not about staying indoors whenever it rains.',
    ],
  },
  {
    type: 'mcq',
    topic: 'asvab-pc-details',
    difficulty: 'medium',
    stimulus: PONY_EXPRESS,
    question: 'According to the passage, which event came just before the Pony Express announced that it would close?',
    options: [
      'The service began to make a profit.',
      'The transcontinental telegraph line was completed.',
      'Stagecoaches began making the trip in ten days.',
      'The route was extended past Sacramento.',
    ],
    correctAnswer: 1,
    explanation: 'The passage says the telegraph line was completed in October 1861 and that “two days later” the Pony Express announced it would close.',
    optionExplanations: [
      'The passage says the service never made money, so it did not begin to make a profit.',
      'Correct. The telegraph line was completed, and two days later the Pony Express announced its closing.',
      'Ten days was the Pony Express time; the passage says it was far faster than the stagecoach.',
      'The passage gives Sacramento as the end of the route and never mentions extending it.',
    ],
  },
  {
    type: 'mcq',
    topic: 'asvab-pc-inference',
    difficulty: 'medium',
    stimulus: PONY_EXPRESS,
    question: 'The passage suggests that the Pony Express closed mainly because',
    options: [
      'its riders could no longer find fresh horses',
      'a faster way to send messages made it unneeded',
      'stagecoach companies bought the mail route',
      'very little mail was sent to California',
    ],
    correctAnswer: 1,
    explanation: 'The passage contrasts the ten-day letter with telegraph messages sent “in minutes” and notes the Pony Express closed two days after the telegraph was finished. The clear implication is that the telegraph made the service unnecessary.',
    optionExplanations: [
      'The passage says riders switched horses every 10 to 15 miles and never mentions a shortage of horses.',
      'Correct. Once the telegraph could send messages in minutes, a ten-day horseback service was no longer needed.',
      'Stagecoaches are mentioned only as the slower alternative; nothing is said about anyone buying the route.',
      'The passage gives no evidence that mail volume was low; it says the service was famous.',
    ],
  },
  {
    type: 'mcq',
    topic: 'asvab-pc-main-idea',
    difficulty: 'hard',
    stimulus:
      'On a summer afternoon, the center of a large city can be several degrees hotter than the farmland around it. Scientists call this an urban heat island. Dark pavement and rooftops absorb sunlight during the day and release the stored heat slowly at night, while narrow streets between tall buildings trap warm air. Cities also have fewer trees and less bare soil, so less water evaporates to cool the air. Some cities now paint roofs white, plant trees along streets, and use paving materials that reflect more sunlight. Early results suggest these steps can lower local temperatures noticeably, especially at night.',
    question: 'Of the titles below, which one best sums up the whole passage?',
    options: [
      'Why Cities Run Hot, and How They Can Cool Down',
      'Summer Heat Waves and the Health of City Workers',
      'How Trees and Soil Move Water into the Air',
      'Comparing Farm and City Weather Through the Year',
    ],
    correctAnswer: 0,
    explanation: 'The passage has two halves: the causes of the urban heat island (pavement, trapped air, few trees) and the fixes cities are trying (white roofs, trees, reflective paving). Only the first title covers both.',
    optionExplanations: [
      'Correct. It covers both halves of the passage: why cities are hotter and what cities are doing about it.',
      'Workers’ health is never discussed; the passage is about why cities are hotter and how to cool them.',
      'Evaporation is one cause mentioned in a single sentence, too narrow to be the title.',
      'Farmland appears only as a comparison in the first sentence, and the passage is about summer, not the whole year.',
    ],
  },
  {
    type: 'mcq',
    topic: 'asvab-pc-inference',
    difficulty: 'hard',
    stimulus: FITNESS_GADGETS,
    question: 'The author’s attitude toward fitness gadgets is best described as',
    options: ['enthusiastic', 'skeptical', 'neutral', 'fearful'],
    correctAnswer: 1,
    explanation: 'Words like “promises,” “claim” and “supposedly,” the remark that few gadgets survive careful testing, and the shoe settlement all show doubt. The author is skeptical.',
    optionExplanations: [
      'The author doubts the gadgets and praises the “dull advice” instead, so the tone is not enthusiastic.',
      'Correct. “Supposedly,” “claim,” and “few of them survive careful testing” show doubt about the gadgets.',
      'The author takes a clear side, contrasting gadgets that fail with advice that works, so the tone is not neutral.',
      'The author doubts that the gadgets work but never suggests they are frightening or dangerous.',
    ],
  },
  {
    type: 'mcq',
    topic: 'asvab-pc-details',
    difficulty: 'hard',
    stimulus: FITNESS_GADGETS,
    question: 'According to the passage about fitness gadgets, which statement is true?',
    options: [
      'Most fitness gadgets hold up well when they are carefully tested.',
      'One company settled claims that its toning shoes failed to work.',
      'Fat-burning sleep pills were shown to work in careful testing.',
      'Simple advice about exercise and sleep is now sold at high prices.',
    ],
    correctAnswer: 1,
    explanation: 'The passage says a shoe company “paid tens of millions of dollars to settle claims that its toning shoes did not work as advertised.” The correct choice restates that fact in other words.',
    optionExplanations: [
      'The passage says the opposite: “Few of them survive careful testing.”',
      'Correct. This restates the shoe company’s settlement over claims that its toning shoes did not work as advertised.',
      'The passage says the pills only “supposedly” burn fat; it never says testing showed they work.',
      'The passage says the simple advice “remains free and goes largely unsold.”',
    ],
  },
]
