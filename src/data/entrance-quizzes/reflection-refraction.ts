/**
 * Entrance Quiz — Reflection & Refraction (AP Physics 2)
 *
 * 16 questions, 2 per lesson part (8 parts). Getting both items for a part
 * right marks that part as already mastered. Mirror and lens items use the
 * AP "real is positive" sign convention.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Introduction'
const P2 = 'Learning Journey'
const P3 = 'Sign Convention'
const P4 = 'Law of Reflection'
const P5 = 'Index of Refraction'
const P6 = "Snell's Law"
const P7 = 'Total Internal Reflection'
const P8 = 'Refraction Through Several Surfaces'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Introduction
  {
    id: 'rr-ent-1a',
    question: 'A laser beam in air strikes a flat glass surface at an angle. What happens to the light?',
    options: [
      'All of it enters the glass and keeps its direction',
      'All of it reflects, because the glass surface is smooth',
      'Part reflects, and the rest enters the glass without bending',
      'Some reflects, and the rest bends into the glass',
    ],
    correctIndex: 3,
    explanation: 'At a boundary between transparent materials, some light reflects and the rest refracts, bending as it enters the new material. A smooth surface reflects clearly, but it does not reflect all of the light.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'rr-ent-1b',
    question: 'In a vacuum, how does red light compare with violet light?',
    options: [
      'A longer wavelength and the same speed',
      'A shorter wavelength and the same speed',
      'A longer wavelength and a greater speed',
      'The same wavelength and a lower frequency',
    ],
    correctIndex: 0,
    explanation: 'Every color travels at $c$ in a vacuum; colors differ in wavelength, with red the longest and violet the shortest. A longer wavelength at the same speed means a lower frequency.',
    partNumber: 1,
    partTitle: P1,
  },

  // Part 2: Learning Journey
  {
    id: 'rr-ent-2a',
    question: 'A light ray strikes a flat surface, making an angle of 30° with the surface itself. What angle of incidence belongs in the law of reflection and Snell\'s law?',
    options: ['30°', '90°', '60°', '150°'],
    correctIndex: 2,
    explanation: 'Optics angles are measured from the normal, the line perpendicular to the surface. A ray 30° from the surface is $90° - 30° = 60°$ from the normal.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'rr-ent-2b',
    question: 'A ray makes a 25° angle with the surface of a flat mirror. What is the angle between the incident ray and the reflected ray?',
    options: ['50°', '130°', '65°', '25°'],
    correctIndex: 1,
    explanation: 'The angle of incidence is measured from the normal: $90° - 25° = 65°$. The reflected ray is also 65° from the normal on the other side, so the rays are $2 \\times 65° = 130°$ apart. Using 25° as the incidence angle gives 50°.',
    partNumber: 2,
    partTitle: P2,
  },

  // Part 3: Sign Convention
  {
    id: 'rr-ent-3a',
    question: 'An object is 10 cm from a converging lens with a focal length of 15 cm. Using $\\frac{1}{s_i} + \\frac{1}{s_o} = \\frac{1}{f}$, what is the image?',
    options: [
      '$s_i = +30$ cm; real and upside down',
      '$s_i = -30$ cm; virtual and upright',
      '$s_i = +6.0$ cm; real and upside down',
      '$s_i = -6.0$ cm; virtual and enlarged',
    ],
    correctIndex: 1,
    explanation: '$\\frac{1}{s_i} = \\frac{1}{15} - \\frac{1}{10} = -\\frac{1}{30}$, so $s_i = -30$ cm. A negative image distance means a virtual image, on the same side as the object, and upright. Adding the reciprocals gives 6.0 cm.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'rr-ent-3b',
    question: 'An object is 24 cm in front of a convex mirror whose focal length has magnitude 12 cm. Using the AP sign convention, what is the image distance?',
    options: [
      '$+8.0$ cm, a real image',
      '$+24$ cm, a real image',
      '$-24$ cm, a virtual image',
      '$-8.0$ cm, a virtual image',
    ],
    correctIndex: 3,
    explanation: 'A convex mirror diverges light, so $f = -12$ cm: $\\frac{1}{s_i} = -\\frac{1}{12} - \\frac{1}{24} = -\\frac{3}{24}$, giving $s_i = -8.0$ cm, a virtual image behind the mirror. Entering $f$ as positive gives $+24$ cm.',
    partNumber: 3,
    partTitle: P3,
  },

  // Part 4: Law of Reflection
  {
    id: 'rr-ent-4a',
    question: 'Two flat mirrors meet at a right angle. A ray strikes the first mirror with an angle of incidence of 35° and then hits the second mirror. What is its angle of incidence at the second mirror?',
    options: ['55°', '35°', '90°', '70°'],
    correctIndex: 0,
    explanation: 'The ray leaves the first mirror 35° from its normal, which is 55° from that mirror\'s surface. The second mirror is perpendicular to the first, so its normal is parallel to the first surface, and the angle of incidence there is 55°.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'rr-ent-4b',
    question: 'You can read a page from many directions, but you see a clear reflection of your face only in a mirror. Why?',
    options: [
      'The page breaks the law of reflection, while the mirror obeys it',
      'The page absorbs all of the light that the mirror reflects',
      'Each tiny patch of the page obeys the law but faces a different way',
      'The page gives off its own light, while the mirror only reflects',
    ],
    correctIndex: 2,
    explanation: 'Every point on a rough surface still obeys $\\theta_i = \\theta_r$, but the normals point in many directions, so parallel rays scatter (diffuse reflection). A smooth mirror keeps parallel rays parallel (specular reflection), forming an image.',
    partNumber: 4,
    partTitle: P4,
  },

  // Part 5: Index of Refraction
  {
    id: 'rr-ent-5a',
    question: 'Light with a wavelength of 600 nm and a frequency of $5.0 \\times 10^{14}$ Hz in air enters glass with $n = 1.50$. What are its wavelength and frequency in the glass?',
    options: [
      '900 nm; $5.0 \\times 10^{14}$ Hz',
      '400 nm; $3.3 \\times 10^{14}$ Hz',
      '400 nm; $5.0 \\times 10^{14}$ Hz',
      '600 nm; $3.3 \\times 10^{14}$ Hz',
    ],
    correctIndex: 2,
    explanation: 'The frequency is set by the source and does not change at a boundary. The speed drops by a factor of $n$, so the wavelength does too: $600/1.50 = 400$ nm.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'rr-ent-5b',
    question: 'How much longer does light take to travel 2.0 m through water ($n = 1.33$) than 2.0 m through a vacuum?',
    options: [
      '$6.7 \\times 10^{-9}$ s',
      '$8.9 \\times 10^{-9}$ s',
      '$1.7 \\times 10^{-9}$ s',
      '$2.2 \\times 10^{-9}$ s',
    ],
    correctIndex: 3,
    explanation: 'In vacuum $t = 2.0/(3.0 \\times 10^8) = 6.7 \\times 10^{-9}$ s; in water $v = c/1.33$, so $t = 8.9 \\times 10^{-9}$ s. The difference is $2.2 \\times 10^{-9}$ s; the two larger values are the individual travel times.',
    partNumber: 5,
    partTitle: P5,
  },

  // Part 6: Snell's Law
  {
    id: 'rr-ent-6a',
    question: 'Light passes from water ($n = 1.33$) into glass ($n = 1.50$), striking the boundary 40.0° from the normal. What is the angle of refraction?',
    options: ['34.8°', '46.5°', '25.4°', '40.0°'],
    correctIndex: 0,
    explanation: '$\\sin\\theta_2 = \\frac{(1.33)\\sin 40.0°}{1.50} = 0.570$, so $\\theta_2 = 34.8°$, bent toward the normal. Swapping the indices gives 46.5°, and treating the first medium as air gives 25.4°.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'rr-ent-6b',
    question: 'A ray passes from material A into material B and bends away from the normal. Which statement is correct?',
    options: [
      'B has the greater index, and light slows down in it',
      'B has the smaller index, and light slows down in it',
      'B has the larger index, and light moves faster in it',
      'B has the smaller index, and light speeds up in it',
    ],
    correctIndex: 3,
    explanation: 'Bending away from the normal means $\\theta_B > \\theta_A$, so Snell\'s law requires $n_B < n_A$. A smaller index means a higher speed, $v = c/n$.',
    partNumber: 6,
    partTitle: P6,
  },

  // Part 7: Total Internal Reflection
  {
    id: 'rr-ent-7a',
    question: 'What is the critical angle for light traveling in glass ($n = 1.50$) toward a boundary with water ($n = 1.33$)?',
    options: ['41.8°', '62.5°', '48.8°', '27.5°'],
    correctIndex: 1,
    explanation: '$\\sin\\theta_c = \\frac{n_2}{n_1} = \\frac{1.33}{1.50} = 0.887$, so $\\theta_c = 62.5°$. The values 41.8° and 48.8° are the glass–air and water–air critical angles, and 27.5° is the complement.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'rr-ent-7b',
    question: 'An optical fiber has a core with $n = 1.60$ and cladding with $n = 1.50$. Light in the core strikes the core–cladding boundary at 65° from the normal. What happens?',
    options: [
      'It reflects totally, since the core has the larger index of refraction',
      'It partly escapes, since 65° is below the critical angle of about 70°',
      'It reflects totally, since any angle above 42° traps light in glass',
      'It passes straight into the cladding without bending at all',
    ],
    correctIndex: 1,
    explanation: 'The critical angle is $\\sin^{-1}(1.50/1.60) \\approx 69.6°$. A larger core index is necessary but not sufficient: at 65°, below the critical angle, part of the light refracts into the cladding. The 42° figure applies only to a glass–air boundary.',
    partNumber: 7,
    partTitle: P7,
  },

  // Part 8: Refraction Through Several Surfaces
  {
    id: 'rr-ent-8a',
    question: 'Light in air strikes the top of a flat glass slab ($n = 1.60$) at 50.0° from the normal. The slab rests on water ($n = 1.33$), and its faces are parallel. At what angle from the normal does the light travel in the water?',
    options: ['28.6°', '50.0°', '35.2°', '21.1°'],
    correctIndex: 2,
    explanation: 'Across parallel boundaries $n\\sin\\theta$ stays the same: $(1.00)\\sin 50.0° = (1.33)\\sin\\theta$, so $\\sin\\theta = 0.576$ and $\\theta = 35.2°$. The glass does not affect the final angle; 28.6° is the angle inside the glass.',
    partNumber: 8,
    partTitle: P8,
  },
  {
    id: 'rr-ent-8b',
    question: 'A student plots $\\sin\\theta$ in air (vertical axis) against $\\sin\\theta$ in a liquid (horizontal axis) and gets a straight line through the origin with slope 1.25. What are the speed of light in the liquid and its critical angle with air?',
    options: [
      '$2.4 \\times 10^{8}$ m/s; 53°',
      '$3.8 \\times 10^{8}$ m/s; 53°',
      '$2.4 \\times 10^{8}$ m/s; 37°',
      '$3.8 \\times 10^{8}$ m/s; none',
    ],
    correctIndex: 0,
    explanation: 'Snell\'s law gives $\\sin\\theta_{\\text{air}} = n\\sin\\theta_{\\text{liquid}}$, so $n = 1.25$, $v = c/n = 2.4 \\times 10^{8}$ m/s and $\\theta_c = \\sin^{-1}(1/1.25) = 53°$. Multiplying $c$ by the slope gives a speed faster than light.',
    partNumber: 8,
    partTitle: P8,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
    { partNumber: 8, partTitle: P8 },
  ]
}
