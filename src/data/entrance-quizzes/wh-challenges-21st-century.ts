/**
 * Entrance Quiz - Challenges of the 21st Century (AP World History, Unit 9)
 * 14 questions - 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'whc-ent-1a',
    question: 'Which best describes the September 11, 2001 attacks?',
    options: [
      'Nineteen al-Qaeda hijackers seized four commercial airliners and used them to attack the World Trade Center and the Pentagon, killing approximately 3,000 people and triggering the U.S. War on Terror',
      'A nuclear strike by an unknown state actor against a major U.S. city that triggered an immediate U.S. retaliatory nuclear strike against multiple Middle Eastern capitals during the early 21st century period',
      'A series of cyberattacks against U.S. financial institutions that crashed Wall Street trading systems for several weeks during the autumn of 2001 with no physical attacks of any kind in any U.S. city',
      'A coordinated assassination of multiple sitting U.S. cabinet officials in Washington that triggered an immediate transfer of presidential power under the 25th Amendment during the autumn of 2001'
    ],
    correctIndex: 0,
    explanation: '9/11: 19 al-Qaeda hijackers, 4 airliners, ~3,000 killed at WTC + Pentagon. Triggered U.S. War on Terror.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'whc-ent-1b',
    question: 'Which best describes a key difference between Cold War security threats and dominant 21st-century security threats?',
    options: [
      "Cold War threats centered on bipolar nuclear deterrence between two superpowers, while 21st-century threats include stateless actors (terrorism), planetary processes (climate change, pandemics), and great-power rivalry in a multi-polar order",
      "There is no meaningful difference between Cold War threats and 21st-century threats and the security agenda has remained identical from 1945 through the present day in any major region of the world",
      "Cold War threats centered on stateless terrorism and planetary processes, while 21st-century threats are bipolar nuclear deterrence between two equal superpowers across the entire post-2001 period in any major region",
      "Cold War threats and 21st-century threats both involve only conventional warfare between equal European powers with no role for nuclear weapons, terrorism, climate, pandemics, or great-power rivalry of any kind"
    ],
    correctIndex: 0,
    explanation: 'Cold War = bipolar nuclear deterrence; 21st century = stateless terrorism + planetary processes + multi-polar great-power rivalry.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'whc-ent-2a',
    question: "Which best describes the basic mechanism of climate change driven by greenhouse-gas emissions?",
    options: [
      "CO2 and other greenhouse gases trap outgoing infrared radiation in the lower atmosphere, raising average temperatures; concentrations have risen from about 280 ppm pre-industrial to over 420 ppm today, driving warming, sea-level rise, and more extreme weather",
      "CO2 and other greenhouse gases reflect incoming sunlight back to space, cooling the lower atmosphere; concentrations have fallen sharply since pre-industrial times due to industrial processes that remove carbon from the atmosphere",
      "CO2 and other greenhouse gases have no measurable effect on atmospheric temperatures and recent warming trends are unconnected to any human industrial activity in the period from 1850 to today in any region of the world",
      "CO2 and other greenhouse gases warm only the upper stratosphere with no effect on surface temperatures or weather patterns at any scale anywhere in the world during the period from the Industrial Revolution to today"
    ],
    correctIndex: 0,
    explanation: 'Greenhouse mechanism: CO2 traps outgoing infrared. Pre-industrial 280 ppm → today 420+ ppm.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'whc-ent-2b',
    question: 'Which best describes the role of mRNA vaccines during the COVID-19 pandemic?',
    options: [
      "Pfizer-BioNTech and Moderna mRNA vaccines were developed and authorized within roughly a year of the genetic sequence being published, marking a breakthrough in vaccine technology, but global rollout was sharply unequal between wealthy and developing economies",
      "mRNA vaccines were developed over more than a decade after the COVID-19 outbreak began and were not deployed in any country during the pandemic at any point during the period from 2020 through 2023 in any region",
      "mRNA vaccines were available equally and immediately to every country in the world at no cost during the entire COVID-19 pandemic with no inequality in access of any kind between wealthy and developing economies",
      "mRNA vaccines played no measurable role during the COVID-19 pandemic and global vaccination relied entirely on traditional inactivated-virus vaccines developed using mid-20th-century methods in every region of the world"
    ],
    correctIndex: 0,
    explanation: 'mRNA vaccines (Pfizer/Moderna) authorized within ~1 year — major breakthrough; but vaccine inequity between rich and poor countries was severe.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'whc-ent-3a',
    question: 'Which best describes the Arab Spring of 2010–2012?',
    options: [
      "A regional wave of protests beginning in Tunisia in late 2010 that toppled rulers in Tunisia, Egypt, Libya, and Yemen but produced civil war in Syria and a return to authoritarianism in Egypt by 2013",
      "A regional wave of protests in Latin America that toppled governments in Brazil, Argentina, and Venezuela during the early 2010s with no protests of any kind in the Middle East or North Africa during the period",
      "A 19th-century European nationalist movement that produced the unification of Italy and Germany during the period from 1848 through 1871 with no connection to the 21st-century Middle East in any region",
      "A diplomatic agreement signed in 2010 between the U.S. and Iran resolving all Middle Eastern conflicts permanently with no protests, civil wars, or regime changes occurring in the region during the period"
    ],
    correctIndex: 0,
    explanation: 'Arab Spring: 2010–12 protests, regime changes in Tunisia/Egypt/Libya/Yemen, Syrian civil war, Egyptian re-authoritarianization.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'whc-ent-3b',
    question: 'Which best describes the 2016 Brexit referendum?',
    options: [
      'A nationwide UK referendum in which 52% voted to leave the European Union; the UK formally left the EU in January 2020, ending more than four decades of British EU membership',
      'A nationwide UK referendum in which 52% voted to remain in the European Union; the UK strengthened its EU integration through expanded participation in the eurozone and Schengen area during the period',
      'A nationwide French referendum on European integration in which 52% voted to leave the EU but France remained in the EU due to subsequent legal challenges to the referendum result during the period',
      'A diplomatic agreement signed in 2016 between the UK and the EU that established the United Kingdom as the leading EU member state with veto power over all EU decisions through the end of the decade'
    ],
    correctIndex: 0,
    explanation: 'Brexit: June 2016 referendum, 52% Leave; UK formally left EU January 2020.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'whc-ent-4a',
    question: 'Which best describes the post-2010 U.S.-China rivalry?',
    options: [
      "A multi-dimensional competition spanning trade tariffs, technology export controls (esp. semiconductors), military presence in the South China Sea, and competing development models, increasingly seen by both governments as the central great-power relationship of the 21st century",
      "A purely economic relationship in which the United States and China cooperate fully on all trade, technology, military, and development issues with no competition of any kind in any policy domain during the period",
      "A strictly military relationship in which the United States and China engage only in conventional warfare with no economic, technological, or development competition of any kind in any region of the world",
      "A relationship of total isolation in which the United States and China have no diplomatic, economic, technological, or military contact of any kind during the entire post-2010 period in any region of the world"
    ],
    correctIndex: 0,
    explanation: 'U.S.-China rivalry: trade tariffs + tech (semiconductors) + South China Sea + competing development models. Multi-dimensional and central.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'whc-ent-4b',
    question: 'Which best describes the 2019–2020 Hong Kong protests and their outcome?',
    options: [
      "Mass protests sparked by an extradition bill grew into a broader pro-democracy movement; Beijing imposed a National Security Law in 2020 that effectively ended the territory's distinct political system",
      "Mass protests sparked by an extradition bill produced a permanent expansion of Hong Kong's democratic institutions and full independence from Beijing recognized by the United Nations during the early 2020s in the region",
      "Mass protests sparked by an extradition bill never occurred in Hong Kong at any point during the period from 2019 through 2021 and Beijing made no changes to the territory's political system during the period",
      "Mass protests sparked by an extradition bill produced full British re-annexation of Hong Kong recognized by all major international powers during the early 2020s with no Chinese government response of any kind"
    ],
    correctIndex: 0,
    explanation: '2019 extradition-bill protests → 2020 National Security Law from Beijing → effective end of Hong Kong\'s distinct political system.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'whc-ent-5a',
    question: 'Which event most directly marks the boundary between Phase 1 (2001–08) and Phase 2 (2008–20) of the 21st century?',
    options: [
      "The 2008 Global Financial Crisis, triggered by the collapse of U.S. subprime mortgage-backed securities, which discredited pre-crisis economic governance and opened a decade of populist political mobilization across Western democracies",
      "The September 11 attacks, which triggered the U.S. invasions of Afghanistan and Iraq and shaped the post-9/11 unipolar moment of the early 21st century during the period from 2001 through 2008 in the West",
      "The 2015 Paris Agreement on climate change, which committed signatories to limit warming to well below 2°C through nationally determined contributions across the major emitter economies of the world today",
      "The 2022 Russian invasion of Ukraine, which triggered the largest European war since 1945 and led to NATO enlargement to include Finland in 2023 and Sweden in 2024 across the broader European security order"
    ],
    correctIndex: 0,
    explanation: 'The 2008 GFC is the canonical Phase 1 → Phase 2 break.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'whc-ent-5b',
    question: 'Which describes a major continuity across all three phases of the 21st century in the framework presented?',
    options: [
      "The U.S. dollar's role as the dominant global reserve currency, which persisted through the 2008 GFC, the 2020 COVID-19 pandemic, and the 2022 sanctions on Russia, despite repeated predictions of imminent dollar decline",
      "The U.S. dollar's role as the dominant global reserve currency was eliminated during Phase 1 of the 21st century and replaced by the Chinese yuan as the global reserve currency throughout the entire post-2001 period",
      "The U.S. unipolar moment as the geopolitical structure of the international order persisted unchanged through all three phases of the 21st century with no rise of China or recovery of Russia of any kind in the period",
      "The 1990s 'End of History' thesis remained the dominant framework for understanding international politics throughout all three phases of the 21st century with no challenges of any kind in any policy domain"
    ],
    correctIndex: 0,
    explanation: 'Dollar dominance is the canonical 21st-century continuity. Geopolitical structure changed; the dollar persisted.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'whc-ent-6a',
    question: "Which historical context is most essential for sourcing Bush's January 2002 'Axis of Evil' State of the Union?",
    options: [
      "The speech was delivered less than five months after 9/11, after the U.S. had toppled the Taliban in Afghanistan but before the U.S. invasion of Iraq in 2003, as the Bush administration prepared to expand the War on Terror to include state targets",
      "The speech was delivered before 9/11 and reflected the foreign-policy consensus of the Clinton administration with no connection to the September 11 attacks or the U.S. response in Afghanistan during the period",
      "The speech was delivered after the 2003 U.S. invasion of Iraq and reflected post-invasion doctrine rather than any pre-invasion preparation by the Bush administration during the immediate post-9/11 period in the West",
      "The speech was delivered in 2008 at the end of the Bush administration and had no connection to the immediate post-9/11 period or to the run-up to the 2003 U.S. invasion of Iraq during the second term in office"
    ],
    correctIndex: 0,
    explanation: 'Axis of Evil = January 2002, post-9/11, post-Afghanistan, pre-Iraq.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'whc-ent-6b',
    question: 'Greta Thunberg\'s 2019 "How dare you?" speech at the UN Climate Action Summit is best read as which type of source?',
    options: [
      "A youth-activist speech to assembled heads of state intended to mobilize urgency for climate action; her POV as a 16-year-old representing a generation that will face the bulk of climate impacts is essential to the document's meaning",
      "A neutral scientific assessment of climate physics intended to inform policymakers with no rhetorical purpose, no specific intended audience, and no identifiable point of view about climate-policy urgency in any region of the world",
      "A diplomatic protest delivered by a head of state intended to formalize a country's withdrawal from the Paris Agreement with no connection to youth activism or generational politics in any region of the world during the period",
      "A corporate marketing speech delivered by a Fortune 500 CEO intended to promote a particular consumer product with no connection to climate policy or activism in any region of the world during the period"
    ],
    correctIndex: 0,
    explanation: 'Thunberg = youth activist, 16-year-old representing a generation, addressing heads of state to mobilize urgency. POV is central.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'whc-ent-7a',
    question: 'Which year saw both Russia\'s full-scale invasion of Ukraine and the public release of OpenAI\'s ChatGPT?',
    options: ['2018', '2020', '2022', '2024'],
    correctIndex: 2,
    explanation: '2022: Russia invaded Ukraine in February; ChatGPT was released in November.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'whc-ent-7b',
    question: 'Which response best executes the AP CCOT skill for 21st-century geopolitical structure?',
    options: [
      "The U.S. dollar's reserve-currency role persisted across all three phases of the 21st century, while the geopolitical structure changed sharply: from a U.S. unipolar moment in Phase 1 to a multi-polar order with U.S.-China as the primary axis by Phase 3",
      "Nothing remained the same and nothing changed in the 21st-century geopolitical structure during the period from 2001 through the present day in any major region of the world during any of the three phases identified",
      "Everything remained the same in the 21st-century geopolitical structure during the period from 2001 through the present day with no rise of China, no recovery of Russia, and no shift away from U.S. unipolarity",
      "Everything changed in the 21st-century geopolitical structure during the period from 2001 through the present day with no continuities of any kind in dollar dominance, international institutions, or U.S. military reach"
    ],
    correctIndex: 0,
    explanation: 'AP CCOT requires explicitly naming both a continuity AND a change. Dollar = continuity; unipolar → multi-polar = change.',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
