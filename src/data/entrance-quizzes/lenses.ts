/**
 * Entrance Quiz — Lenses (AP Physics 2)
 *
 * 14 questions, 2 per lesson part (7 parts). Getting both items for a part
 * right marks that part as already mastered. Single thin lenses only, with the
 * AP "real is positive" sign convention.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Types of Lenses'
const P2 = 'Thin Lens Equation'
const P3 = 'Converging Lens Ray Diagrams'
const P4 = 'Diverging Lens Problems'
const P5 = 'Working Backward with Lenses'
const P6 = 'Finding a Focal Length (Lab)'
const P7 = 'Synthesis & AP Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Types of Lenses
  {
    id: 'lns-ent-1a',
    question: 'A ray traveling parallel to the principal axis passes through a diverging lens. Where does it go after the lens?',
    options: [
      'It bends inward and crosses the focal point on the far side',
      'It continues straight on without bending',
      'It spreads outward as if it came from the focal point on the object\'s side',
      'It bends back toward the object along its original path',
    ],
    correctIndex: 2,
    explanation: 'A diverging lens spreads parallel rays apart; traced backward, each refracted ray lines up with the focal point on the incoming side. Crossing the far focal point is the behavior of a converging lens, and only the central ray passes undeviated.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'lns-ent-1b',
    question: 'Which arrangement forms an image that can be projected onto a screen?',
    options: [
      'Converging lens, object just inside $F$',
      'Converging lens, object exactly at $F$',
      'Diverging lens, object at any distance',
      'Converging lens, object beyond $F$',
    ],
    correctIndex: 3,
    explanation: 'Only real images, where rays actually meet, appear on a screen. A converging lens makes a real image when the object is beyond $F$; inside $F$ the image is virtual, at $F$ the rays leave parallel, and a diverging lens always makes a virtual image.',
    partNumber: 1,
    partTitle: P1,
  },

  // Part 2: Thin Lens Equation
  {
    id: 'lns-ent-2a',
    question: 'A 4.0 cm tall object is 25 cm from a converging lens with $f = 20$ cm. What is the image height (negative if inverted)?',
    options: ['$h_i = -16$ cm', '$h_i = +16$ cm', '$h_i = -1.0$ cm', '$h_i = -1.8$ cm'],
    correctIndex: 0,
    explanation: '$\\frac{1}{s_i} = \\frac{1}{20} - \\frac{1}{25} = \\frac{1}{100}$, so $s_i = 100$ cm and $m = -\\frac{100}{25} = -4$, giving $h_i = -16$ cm (real, inverted). Using $s_o/s_i$ for the magnification gives $-1.0$ cm.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'lns-ent-2b',
    question: 'An object is 12 cm from a diverging lens with a focal length of magnitude 6.0 cm. What are the image distance and the magnification?',
    options: [
      '$s_i = +12$ cm, $m = -1.0$',
      '$s_i = -4.0$ cm, $m = +0.33$',
      '$s_i = -4.0$ cm, $m = -0.33$',
      '$s_i = -12$ cm, $m = +1.0$',
    ],
    correctIndex: 1,
    explanation: 'With $f = -6.0$ cm, $\\frac{1}{s_i} = -\\frac{1}{6.0} - \\frac{1}{12} = -\\frac{3}{12}$, so $s_i = -4.0$ cm and $m = -\\frac{s_i}{s_o} = +0.33$: virtual, upright, reduced. Entering $f$ as positive gives $+12$ cm.',
    partNumber: 2,
    partTitle: P2,
  },

  // Part 3: Converging Lens Ray Diagrams
  {
    id: 'lns-ent-3a',
    question: 'An object 30 cm in front of a converging lens forms a sharp image 30 cm behind it. What are the focal length and the image?',
    options: [
      '30 cm; equal in size and inverted',
      '15 cm; same size and inverted',
      '15 cm; twice the size and inverted',
      '60 cm; the same size but upright',
    ],
    correctIndex: 1,
    explanation: 'Equal object and image distances mean the object sits at $2F$: $\\frac{1}{f} = \\frac{1}{30} + \\frac{1}{30}$, so $f = 15$ cm. At $2F$ the image is real, inverted and the same size ($m = -1$).',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'lns-ent-3b',
    question: 'A flashlight uses a converging lens to send out a parallel beam. Where must the bulb be placed?',
    options: [
      'At $2F$, so the rays leave the lens parallel',
      'Inside $F$, so the rays converge to a point',
      'At the focal point, so the rays leave parallel',
      'Beyond $2F$, so the rays focus at $F$',
    ],
    correctIndex: 2,
    explanation: 'Rays from a point at $F$ refract parallel to the axis, so the image is at infinity. At $2F$ the rays converge to an image at $2F$ on the far side, and from inside $F$ they still diverge.',
    partNumber: 3,
    partTitle: P3,
  },

  // Part 4: Diverging Lens Problems
  {
    id: 'lns-ent-4a',
    question: 'An object 30 cm from a diverging lens forms an image 10 cm from the lens. What is the focal length?',
    options: ['$f = +7.5$ cm', '$f = -15$ cm', '$f = -7.5$ cm', '$f = +15$ cm'],
    correctIndex: 1,
    explanation: 'A diverging lens makes a virtual image, so $s_i = -10$ cm: $\\frac{1}{f} = \\frac{1}{30} - \\frac{1}{10} = -\\frac{2}{30}$, giving $f = -15$ cm. Treating the image as real gives $+7.5$ cm.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'lns-ent-4b',
    question: 'An object starts very far from a diverging lens and is brought steadily closer to it. How does the image change?',
    options: [
      'It moves away from the lens and becomes larger than the object',
      'It stays at the focal point and keeps the same size',
      'It turns real once the object passes the focal point',
      'It moves toward the lens and grows, staying smaller than the object',
    ],
    correctIndex: 3,
    explanation: 'For a distant object the image sits near $F$ and is tiny; as the object approaches, the virtual image moves in toward the lens and grows, but $|m| < 1$ always. A diverging lens never forms a real image of a real object.',
    partNumber: 4,
    partTitle: P4,
  },

  // Part 5: Working Backward with Lenses
  {
    id: 'lns-ent-5a',
    question: 'A converging lens with $f = 12$ cm must form a real image three times the height of the object. How far from the lens should the object be?',
    options: ['8.0 cm', '36 cm', '16 cm', '4.0 cm'],
    correctIndex: 2,
    explanation: 'Real and three times as tall means $s_i = 3s_o$: $\\frac{1}{12} = \\frac{1}{s_o} + \\frac{1}{3s_o} = \\frac{4}{3s_o}$, so $s_o = 16$ cm (and $s_i = 48$ cm). The virtual case, $s_i = -3s_o$, gives 8.0 cm.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'lns-ent-5b',
    question: 'Which arrangement produces an upright image twice the height of the object?',
    options: [
      'A converging lens with the object at $3f/2$',
      'A converging lens with the object at exactly $2f$',
      'A diverging lens with the object at $|f|/2$ from it',
      'A converging lens with the object at $f/2$',
    ],
    correctIndex: 3,
    explanation: 'An upright enlarged image is virtual, which needs a converging lens with the object inside $f$: at $s_o = f/2$, $\\frac{1}{s_i} = \\frac{1}{f} - \\frac{2}{f}$ gives $s_i = -f$ and $m = +2$. At $3f/2$ the image is enlarged but inverted, and a diverging lens always reduces.',
    partNumber: 5,
    partTitle: P5,
  },

  // Part 6: Finding a Focal Length (Lab)
  {
    id: 'lns-ent-6a',
    question: 'A student graphs $1/s_i$ (vertical) against $1/s_o$ (horizontal) for a converging lens. The best-fit line crosses the horizontal axis at $0.040 \\text{ cm}^{-1}$. What is the focal length?',
    options: ['25 cm', '0.040 cm', '4.0 cm', '−25 cm'],
    correctIndex: 0,
    explanation: 'The line is $\\frac{1}{s_i} = -\\frac{1}{s_o} + \\frac{1}{f}$, so it reaches $\\frac{1}{s_i} = 0$ where $\\frac{1}{s_o} = \\frac{1}{f}$. Then $f = \\frac{1}{0.040} = 25$ cm; reading the intercept itself as $f$ gives 0.040 cm.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'lns-ent-6b',
    question: 'With one converging lens, an object 20 cm away gives a sharp screen image at 60 cm, and an object 30 cm away gives one at 30 cm. A graph of $1/s_i$ versus $1/s_o$ through these points has what slope, and what focal length does it give?',
    options: [
      'Slope $-1$; $f = 15$ cm',
      'Slope $+1$; $f = 15$ cm',
      'Slope $-1$; $f = 0.067$ cm',
      'Slope $-1$; $f = 45$ cm',
    ],
    correctIndex: 0,
    explanation: 'Between the points, $1/s_i$ rises by $0.017 \\text{ cm}^{-1}$ while $1/s_o$ falls by the same amount, a slope of $-1$. The intercept is $\\frac{1}{20} + \\frac{1}{60} = 0.067 \\text{ cm}^{-1} = 1/f$, so $f = 15$ cm; 0.067 is $1/f$, not $f$.',
    partNumber: 6,
    partTitle: P6,
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'lns-ent-7a',
    question: 'A 2.0 cm tall object is 18 cm from a converging lens with $f = 12$ cm. Where must a screen go to show a sharp image, and what is the image like?',
    options: [
      '36 cm behind the lens; 4.0 cm tall and upright',
      '7.2 cm behind; 0.80 cm tall and inverted',
      'No screen works, since the image is virtual',
      '36 cm behind the lens; 4.0 cm tall and inverted',
    ],
    correctIndex: 3,
    explanation: '$\\frac{1}{s_i} = \\frac{1}{12} - \\frac{1}{18} = \\frac{1}{36}$, so $s_i = +36$ cm (real, on the far side) and $m = -2$: a 4.0 cm inverted image. Adding the reciprocals gives 7.2 cm, and a real image from a single lens is never upright.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'lns-ent-7b',
    question: 'Looking through a lens at an object 6.0 cm away, a student sees an upright image 2.5 times the object\'s height. What is the focal length of the lens?',
    options: [
      '$f = +4.3$ cm, a converging lens',
      '$f = +10$ cm, a converging lens',
      '$f = -10$ cm, a diverging lens',
      '$f = -4.3$ cm, a diverging lens',
    ],
    correctIndex: 1,
    explanation: 'Upright means virtual: $m = +2.5$, so $s_i = -15$ cm and $\\frac{1}{f} = \\frac{1}{6.0} - \\frac{1}{15} = \\frac{3}{30}$, giving $f = +10$ cm. Treating the image as real gives 4.3 cm, and a diverging lens cannot enlarge.',
    partNumber: 7,
    partTitle: P7,
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
  ]
}
