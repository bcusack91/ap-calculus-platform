// Question bank for Reflection & Refraction Competitive Mode
// 40-50 questions covering all concepts from Parts 1-7

export interface CompetitiveQuestion {
  id: string
  type: 'multiple-choice' | 'calculated'
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: 'sign-convention' | 'reflection' | 'index' | 'snell' | 'tir' | 'dispersion' | 'applications'
  generateQuestion?: () => {
    question: string
    options: string[]
    correctAnswer: number
    explanation: string
  }
}

// Helper function to generate random values
const random = (min: number, max: number, decimals: number = 0): number => {
  const value = Math.random() * (max - min) + min
  return Number(value.toFixed(decimals))
}

// Helper to generate common wrong answers for angles
const generateAngleDistractors = (correct: number): number[] => {
  const distractors = [
    correct * 0.7, // Used wrong formula
    correct * 1.3, // Reciprocal error
    90 - correct, // Complementary angle error
    correct / 2, // Forgot to take inverse
  ]
  return distractors.map(d => Number(d.toFixed(1)))
}

// Helper to generate common wrong answers for index calculations
const generateIndexDistractors = (correct: number): number[] => {
  return [
    1 / correct, // Reciprocal
    correct * 1.5, // Wrong speed value
    correct - 0.33, // Subtraction instead of division
  ].map(d => Number(d.toFixed(2)))
}

export const reflectionRefractionQuestions: CompetitiveQuestion[] = [
  // ========== SIGN CONVENTION QUESTIONS (5) ==========
  {
    id: 'sign-1',
    type: 'multiple-choice',
    category: 'sign-convention',
    difficulty: 'easy',
    question: 'Using Cartesian sign convention with light traveling right, a ray hits 5 cm to the LEFT of the optical axis. What is the y-coordinate?',
    options: ['+5 cm', '-5 cm', '+5 m', '-5 m'],
    correctAnswer: 1,
    explanation: 'Left of the optical axis is negative. The vertical position is y = -5 cm.'
  },
  {
    id: 'sign-2',
    type: 'multiple-choice',
    category: 'sign-convention',
    difficulty: 'medium',
    question: 'Light traveling rightward hits a mirror at x = 10 cm and reflects to cross the axis at x = 20 cm. What is x₂ in Cartesian convention?',
    options: ['-20 cm', '-10 cm', '+10 cm', '+20 cm'],
    correctAnswer: 3,
    explanation: 'After reflection, light is still traveling right (positive direction), and the crossing point is 20 cm to the right, so x₂ = +20 cm.'
  },
  {
    id: 'sign-3',
    type: 'multiple-choice',
    category: 'sign-convention',
    difficulty: 'easy',
    question: 'In Cartesian sign convention, which direction is positive for vertical positions?',
    options: ['Downward', 'Upward', 'Leftward', 'Depends on light direction'],
    correctAnswer: 1,
    explanation: 'Upward is always positive for vertical (y) positions in Cartesian convention.'
  },
  {
    id: 'sign-4',
    type: 'multiple-choice',
    category: 'sign-convention',
    difficulty: 'medium',
    question: 'A ray hits 3 cm above the axis. After reflection, where does it cross? The incident angle equals the reflected angle, and the ray initially travels at 30° below horizontal.',
    options: ['3 cm below axis', '3 cm above axis', '6 cm below axis', 'At the axis'],
    correctAnswer: 0,
    explanation: 'By the law of reflection, if it hits 3 cm above at 30° down, it will cross 3 cm below the axis on the other side (symmetric path).'
  },
  {
    id: 'sign-5',
    type: 'multiple-choice',
    category: 'sign-convention',
    difficulty: 'easy',
    question: 'What defines the positive direction in Cartesian sign convention?',
    options: ['Always to the right', 'The direction light is traveling', 'Always upward', 'Opposite to light direction'],
    correctAnswer: 1,
    explanation: 'The positive direction is defined by the direction light is traveling in Cartesian convention.'
  },

  // ========== LAW OF REFLECTION (5) ==========
  {
    id: 'reflect-1',
    type: 'multiple-choice',
    category: 'reflection',
    difficulty: 'easy',
    question: 'A light ray hits a plane mirror at 35° from the normal. What is the angle of reflection?',
    options: ['35°', '55°', '70°', '90°'],
    correctAnswer: 0,
    explanation: 'Law of reflection: θᵢ = θᵣ. The angle of reflection equals the angle of incidence, both measured from the normal.'
  },
  {
    id: 'reflect-2',
    type: 'multiple-choice',
    category: 'reflection',
    difficulty: 'medium',
    question: 'A ray hits a mirror at 25° from the surface (not the normal). What is the angle of reflection from the normal?',
    options: ['25°', '65°', '115°', '90°'],
    correctAnswer: 1,
    explanation: 'Angle from surface = 25° means angle from normal = 90° - 25° = 65°. By law of reflection, reflected angle = 65° from normal.'
  },
  {
    id: 'reflect-3',
    type: 'multiple-choice',
    category: 'reflection',
    difficulty: 'easy',
    question: 'Does the law of reflection (θᵢ = θᵣ) depend on wavelength or color of light?',
    options: ['Yes, blue reflects differently', 'Yes, red reflects at larger angles', 'No, all colors reflect identically', 'Only for rough surfaces'],
    correctAnswer: 2,
    explanation: 'The law of reflection applies equally to all wavelengths/colors. Reflection does not cause dispersion.'
  },
  {
    id: 'reflect-4',
    type: 'multiple-choice',
    category: 'reflection',
    difficulty: 'medium',
    question: 'Why do rough surfaces appear matte instead of mirror-like?',
    options: ['They absorb more light', 'The law of reflection doesn\'t apply', 'Microscopic irregularities scatter light in many directions', 'They reflect only certain wavelengths'],
    correctAnswer: 2,
    explanation: 'Rough surfaces have microscopic bumps. Each point obeys θᵢ = θᵣ, but the normals point in different directions, causing diffuse reflection.'
  },
  {
    id: 'reflect-5',
    type: 'multiple-choice',
    category: 'reflection',
    difficulty: 'hard',
    question: 'Two plane mirrors are placed at 90° to each other. A ray hits the first mirror at 40° from normal. After reflecting from both mirrors, what angle does it make with its original direction?',
    options: ['40°', '90°', '140°', '180°'],
    correctAnswer: 3,
    explanation: 'A ray reflecting from two perpendicular mirrors always reverses direction (180°), regardless of incident angle. This is how retroreflectors work!'
  },

  // ========== INDEX OF REFRACTION (7) ==========
  {
    id: 'index-1',
    type: 'calculated',
    category: 'index',
    difficulty: 'easy',
    question: 'placeholder',
    options: [],
    correctAnswer: 0,
    explanation: 'placeholder',
    generateQuestion: () => {
      const speed = random(1.8, 2.5, 2) // Speed in material (×10⁸ m/s)
      const n = Number((3.0 / speed).toFixed(2))
      const wrong1 = Number((speed / 3.0).toFixed(2))
      const wrong2 = Number((n + 0.33).toFixed(2))
      const wrong3 = Number((3.0 - speed).toFixed(2))
      
      const options = [n, wrong1, wrong2, wrong3]
        .sort(() => Math.random() - 0.5)
        .map(v => `n = ${v}`)
      
      return {
        question: `Light travels at ${speed} × 10⁸ m/s in a material. What is its index of refraction?`,
        options,
        correctAnswer: options.indexOf(`n = ${n}`),
        explanation: `n = c/v = (3.0 × 10⁸)/(${speed} × 10⁸) = ${n}`
      }
    }
  },
  {
    id: 'index-2',
    type: 'multiple-choice',
    category: 'index',
    difficulty: 'easy',
    question: 'Which material has the highest index of refraction?',
    options: ['Air (n=1.0)', 'Water (n=1.33)', 'Glass (n=1.5)', 'Diamond (n=2.42)'],
    correctAnswer: 3,
    explanation: 'Diamond has n=2.42, the highest among common materials. Higher n means light travels slower in that material.'
  },
  {
    id: 'index-3',
    type: 'multiple-choice',
    category: 'index',
    difficulty: 'medium',
    question: 'Light slows down by 25% when entering a material. What is the material\'s index of refraction?',
    options: ['n = 0.75', 'n = 1.25', 'n = 1.33', 'n = 4.0'],
    correctAnswer: 2,
    explanation: 'If speed reduces by 25%, new speed = 0.75c. Therefore n = c/(0.75c) = 1/0.75 = 1.33.'
  },
  {
    id: 'index-4',
    type: 'multiple-choice',
    category: 'index',
    difficulty: 'easy',
    question: 'Why can\'t a material have an index of refraction less than 1?',
    options: ['It would violate energy conservation', 'Light would travel faster than c', 'It would cause negative refraction', 'All materials have n > 1 by definition'],
    correctAnswer: 1,
    explanation: 'n = c/v, so n < 1 would require v > c (light traveling faster than speed of light in vacuum), which is impossible.'
  },
  {
    id: 'index-5',
    type: 'multiple-choice',
    category: 'index',
    difficulty: 'medium',
    question: 'A material has n = 1.5. What fraction of the speed of light does light travel in this material?',
    options: ['1.5c', '0.67c', '0.50c', '2.25c'],
    correctAnswer: 1,
    explanation: 'v = c/n = c/1.5 = 0.67c. Light travels at 67% of its vacuum speed in this material.'
  },
  {
    id: 'index-6',
    type: 'calculated',
    category: 'index',
    difficulty: 'medium',
    question: 'placeholder',
    options: [],
    correctAnswer: 0,
    explanation: 'placeholder',
    generateQuestion: () => {
      const n = random(1.3, 2.0, 2)
      const speed = Number((3.0 / n).toFixed(2))
      const wrong1 = Number((n * 3.0).toFixed(2))
      const wrong2 = Number((3.0 - n).toFixed(2))
      const wrong3 = Number((3.0 / (n + 0.5)).toFixed(2))
      
      const options = [speed, wrong1, wrong2, wrong3]
        .sort(() => Math.random() - 0.5)
        .map(v => `${v} × 10⁸ m/s`)
      
      return {
        question: `A material has index of refraction n = ${n}. At what speed does light travel in this material?`,
        options,
        correctAnswer: options.indexOf(`${speed} × 10⁸ m/s`),
        explanation: `v = c/n = (3.0 × 10⁸)/${n} = ${speed} × 10⁸ m/s`
      }
    }
  },
  {
    id: 'index-7',
    type: 'multiple-choice',
    category: 'index',
    difficulty: 'easy',
    question: 'What does a "denser" optical medium mean?',
    options: ['Higher mass density', 'Higher index of refraction', 'Lower temperature', 'More atoms per volume'],
    correctAnswer: 1,
    explanation: 'Optically denser means higher index of refraction (n). This is not the same as physical mass density!'
  },

  // ========== SNELL\'S LAW (10) ==========
  {
    id: 'snell-1',
    type: 'calculated',
    category: 'snell',
    difficulty: 'medium',
    question: 'placeholder',
    options: [],
    correctAnswer: 0,
    explanation: 'placeholder',
    generateQuestion: () => {
      const n1 = 1.0 // Air
      const n2 = random(1.3, 1.6, 2) // Glass/water
      const theta1 = random(20, 50, 0)
      const sinTheta2 = (n1 * Math.sin(theta1 * Math.PI / 180)) / n2
      const theta2 = Number((Math.asin(sinTheta2) * 180 / Math.PI).toFixed(1))
      
      // Common mistakes
      const wrong1 = Number((theta1 * n1 / n2).toFixed(1)) // Linear instead of sine
      const wrong2 = Number((Math.asin(n2 / n1 * Math.sin(theta1 * Math.PI / 180)) * 180 / Math.PI).toFixed(1)) // Inverted n
      const wrong3 = Number((90 - theta2).toFixed(1)) // Measured from surface
      
      const options = [theta2, wrong1, wrong2, wrong3]
        .sort(() => Math.random() - 0.5)
        .map(v => `${v}°`)
      
      const material = n2 === 1.33 ? 'water' : n2 === 1.5 ? 'glass' : 'a material'
      
      return {
        question: `Light in air (n=1.0) hits ${material} (n=${n2}) at ${theta1}° from normal. What is the refraction angle?`,
        options,
        correctAnswer: options.indexOf(`${theta2}°`),
        explanation: `Using Snell's Law: (1.0)sin(${theta1}°) = (${n2})sin(θ₂). Solving: sin(θ₂) = ${sinTheta2.toFixed(3)}, so θ₂ = ${theta2}°. Light bends toward normal when entering denser medium.`
      }
    }
  },
  {
    id: 'snell-2',
    type: 'calculated',
    category: 'snell',
    difficulty: 'medium',
    question: 'placeholder',
    options: [],
    correctAnswer: 0,
    explanation: 'placeholder',
    generateQuestion: () => {
      const n1 = random(1.4, 1.6, 2) // Glass
      const n2 = 1.0 // Air
      const theta1 = random(15, 40, 0)
      const sinTheta2 = (n1 * Math.sin(theta1 * Math.PI / 180)) / n2
      const theta2 = Number((Math.asin(sinTheta2) * 180 / Math.PI).toFixed(1))
      
      const wrong1 = Number((theta1 * n1 / n2).toFixed(1))
      const wrong2 = Number((theta1 / (n1 / n2)).toFixed(1))
      const wrong3 = Number((90 - theta2).toFixed(1))
      
      const options = [theta2, wrong1, wrong2, wrong3]
        .sort(() => Math.random() - 0.5)
        .map(v => `${v}°`)
      
      return {
        question: `Light in glass (n=${n1}) exits to air (n=1.0) at ${theta1}° from normal. What is the refraction angle in air?`,
        options,
        correctAnswer: options.indexOf(`${theta2}°`),
        explanation: `Using Snell's Law: (${n1})sin(${theta1}°) = (1.0)sin(θ₂). Solving: θ₂ = ${theta2}°. Light bends AWAY from normal when entering less dense medium.`
      }
    }
  },
  {
    id: 'snell-3',
    type: 'multiple-choice',
    category: 'snell',
    difficulty: 'easy',
    question: 'When light enters a denser medium (higher n), it bends:',
    options: ['Toward the normal', 'Away from the normal', 'Not at all', 'Parallel to the surface'],
    correctAnswer: 0,
    explanation: 'Light bends TOWARD the normal when entering a denser (higher n) medium.'
  },
  {
    id: 'snell-4',
    type: 'multiple-choice',
    category: 'snell',
    difficulty: 'easy',
    question: 'When light enters a less dense medium (lower n), it bends:',
    options: ['Toward the normal', 'Away from the normal', 'Not at all', 'At 90°'],
    correctAnswer: 1,
    explanation: 'Light bends AWAY from the normal when entering a less dense (lower n) medium.'
  },
  {
    id: 'snell-5',
    type: 'multiple-choice',
    category: 'snell',
    difficulty: 'medium',
    question: 'Light travels from air (n=1.0) into water (n=1.33) at 0° (perpendicular to surface). What happens?',
    options: ['Bends toward normal', 'Bends away from normal', 'No bending (continues straight)', 'Total internal reflection'],
    correctAnswer: 2,
    explanation: 'At 0° incidence (perpendicular), light is already ON the normal, so there is no bending. It continues straight but slows down.'
  },
  {
    id: 'snell-6',
    type: 'calculated',
    category: 'snell',
    difficulty: 'hard',
    question: 'placeholder',
    options: [],
    correctAnswer: 0,
    explanation: 'placeholder',
    generateQuestion: () => {
      const n1 = random(1.3, 1.5, 2)
      const n2 = random(1.5, 1.7, 2)
      const theta1 = random(25, 45, 0)
      const sinTheta2 = (n1 * Math.sin(theta1 * Math.PI / 180)) / n2
      const theta2 = Number((Math.asin(sinTheta2) * 180 / Math.PI).toFixed(1))
      
      const wrong1 = Number((theta1 * n1 / n2).toFixed(1))
      const wrong2 = Number((theta1 * n2 / n1).toFixed(1))
      const wrong3 = Number((theta1).toFixed(1))
      
      const options = [theta2, wrong1, wrong2, wrong3]
        .sort(() => Math.random() - 0.5)
        .map(v => `${v}°`)
      
      return {
        question: `Light goes from medium A (n=${n1}) to medium B (n=${n2}) at ${theta1}° from normal. Find the refraction angle.`,
        options,
        correctAnswer: options.indexOf(`${theta2}°`),
        explanation: `Snell's Law: (${n1})sin(${theta1}°) = (${n2})sin(θ₂). Result: θ₂ = ${theta2}°. Higher n₂ means light bends toward normal.`
      }
    }
  },
  {
    id: 'snell-7',
    type: 'multiple-choice',
    category: 'snell',
    difficulty: 'medium',
    question: 'What happens if you try to solve Snell\'s Law and get sin(θ₂) > 1?',
    options: ['θ₂ = 90°', 'No refraction occurs', 'Total internal reflection occurs', 'You made an algebra mistake'],
    correctAnswer: 2,
    explanation: 'sin(θ₂) > 1 has no real solution, meaning the light cannot refract into the second medium. Total internal reflection occurs instead.'
  },
  {
    id: 'snell-8',
    type: 'calculated',
    category: 'snell',
    difficulty: 'hard',
    question: 'placeholder',
    options: [],
    correctAnswer: 0,
    explanation: 'placeholder',
    generateQuestion: () => {
      const n2 = random(1.4, 1.6, 2)
      const theta1 = random(30, 50, 0)
      const theta2 = random(20, 35, 0)
      const n1 = Number((n2 * Math.sin(theta2 * Math.PI / 180) / Math.sin(theta1 * Math.PI / 180)).toFixed(2))
      
      const wrong1 = Number((n2 * theta1 / theta2).toFixed(2))
      const wrong2 = Number((n2 * theta2 / theta1).toFixed(2))
      const wrong3 = Number((n2 + 0.33).toFixed(2))
      
      const options = [n1, wrong1, wrong2, wrong3]
        .sort(() => Math.random() - 0.5)
        .map(v => `n = ${v}`)
      
      return {
        question: `Light enters medium 2 (n=${n2}) from medium 1 at ${theta1}°. If it refracts to ${theta2}°, what is n₁?`,
        options,
        correctAnswer: options.indexOf(`n = ${n1}`),
        explanation: `From n₁sin(${theta1}°) = ${n2}sin(${theta2}°), we get n₁ = ${n2}×sin(${theta2}°)/sin(${theta1}°) = ${n1}.`
      }
    }
  },
  {
    id: 'snell-9',
    type: 'multiple-choice',
    category: 'snell',
    difficulty: 'medium',
    question: 'A laser pointer in water (n=1.33) shines up at the surface. At what minimum angle from vertical will the light escape to air?',
    options: ['0° (always escapes)', '42°', '48.8°', '90°'],
    correctAnswer: 2,
    explanation: 'This is asking for angles LESS than the critical angle. θc = sin⁻¹(1.0/1.33) = 48.8°. At angles > 48.8° from vertical (normal), TIR occurs.'
  },
  {
    id: 'snell-10',
    type: 'multiple-choice',
    category: 'snell',
    difficulty: 'easy',
    question: 'Which equation correctly represents Snell\'s Law?',
    options: ['n₁/n₂ = sin(θ₂)/sin(θ₁)', 'n₁sin(θ₁) = n₂sin(θ₂)', 'n₁θ₁ = n₂θ₂', 'n₁ + θ₁ = n₂ + θ₂'],
    correctAnswer: 1,
    explanation: 'Snell\'s Law: n₁sin(θ₁) = n₂sin(θ₂). Note it involves SINE of angles, not angles directly!'
  },

  // ========== TOTAL INTERNAL REFLECTION & CRITICAL ANGLE (10) ==========
  {
    id: 'tir-1',
    type: 'calculated',
    category: 'tir',
    difficulty: 'medium',
    question: 'placeholder',
    options: [],
    correctAnswer: 0,
    explanation: 'placeholder',
    generateQuestion: () => {
      const n1 = random(1.4, 2.0, 2)
      const n2 = 1.0
      const thetaC = Number((Math.asin(n2 / n1) * 180 / Math.PI).toFixed(1))
      
      const wrong1 = Number((Math.asin(n1 / n2) * 180 / Math.PI).toFixed(1)) // Inverted
      const wrong2 = Number((90 - thetaC).toFixed(1)) // Complementary
      const wrong3 = Number((thetaC / 2).toFixed(1)) // Forgot asin
      
      const options = [thetaC, wrong1, wrong2, wrong3]
        .filter(v => !isNaN(v) && v <= 90)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
        .map(v => `${v}°`)
      
      const material = n1 === 1.5 ? 'glass' : n1 === 2.42 ? 'diamond' : 'a material'
      
      return {
        question: `What is the critical angle for light going from ${material} (n=${n1}) to air (n=1.0)?`,
        options,
        correctAnswer: options.indexOf(`${thetaC}°`),
        explanation: `θc = sin⁻¹(n₂/n₁) = sin⁻¹(1.0/${n1}) = ${thetaC}°. At angles greater than this, total internal reflection occurs.`
      }
    }
  },
  {
    id: 'tir-2',
    type: 'calculated',
    category: 'tir',
    difficulty: 'hard',
    question: 'placeholder',
    options: [],
    correctAnswer: 0,
    explanation: 'placeholder',
    generateQuestion: () => {
      const n1 = random(1.4, 1.7, 2)
      const theta = random(35, 55, 0)
      const thetaC = Number((Math.asin(1.0 / n1) * 180 / Math.PI).toFixed(1))
      const occurs = theta > thetaC
      
      return {
        question: `Light in a material (n=${n1}) hits the material-air boundary at ${theta}° from normal. Does total internal reflection occur?`,
        options: [
          `Yes, because ${theta}° > ${thetaC}° (critical angle)`,
          `No, because ${theta}° < ${thetaC}° (critical angle)`,
          `Yes, because ${theta}° < ${thetaC}° (critical angle)`,
          `No, because ${theta}° > ${thetaC}° (critical angle)`
        ],
        correctAnswer: occurs ? 0 : 1,
        explanation: `Critical angle θc = sin⁻¹(1.0/${n1}) = ${thetaC}°. Since ${theta}° ${occurs ? '>' : '<'} ${thetaC}°, TIR ${occurs ? 'DOES' : 'does NOT'} occur.`
      }
    }
  },
  {
    id: 'tir-3',
    type: 'multiple-choice',
    category: 'tir',
    difficulty: 'easy',
    question: 'Total internal reflection can only occur when light travels from:',
    options: ['Low n to high n', 'High n to low n', 'Any two different materials', 'Air to water only'],
    correctAnswer: 1,
    explanation: 'TIR only occurs when going from high n to low n (e.g., glass to air). The critical angle formula requires n₁ > n₂.'
  },
  {
    id: 'tir-4',
    type: 'multiple-choice',
    category: 'tir',
    difficulty: 'medium',
    question: 'At the critical angle, the refracted ray travels:',
    options: ['Back into the first medium', 'Along the boundary (90° from normal)', 'Straight through', 'At 45° to the normal'],
    correctAnswer: 1,
    explanation: 'At θc, the refracted ray grazes along the boundary surface (θ₂ = 90°). Beyond θc, total internal reflection occurs.'
  },
  {
    id: 'tir-5',
    type: 'multiple-choice',
    category: 'tir',
    difficulty: 'easy',
    question: 'What percentage of light reflects back during total internal reflection?',
    options: ['50%', '95%', '99%', '100%'],
    correctAnswer: 3,
    explanation: '100% of the light reflects back during TIR! This is why fiber optics work so well - no light is lost to refraction.'
  },
  {
    id: 'tir-6',
    type: 'multiple-choice',
    category: 'tir',
    difficulty: 'medium',
    question: 'Why is the critical angle for diamond (n=2.42) so small (24.4°)?',
    options: ['Diamonds are very dense', 'n is very high, making n₂/n₁ small', 'Diamonds absorb light', 'Diamond has low n'],
    correctAnswer: 1,
    explanation: 'θc = sin⁻¹(n₂/n₁) = sin⁻¹(1.0/2.42) = 24.4°. High n₁ makes the ratio small, giving a small critical angle. This is why diamonds sparkle!'
  },
  {
    id: 'tir-7',
    type: 'multiple-choice',
    category: 'tir',
    difficulty: 'hard',
    question: 'Light in water (n=1.33) going to glass (n=1.5). Can total internal reflection occur?',
    options: ['Yes, at any angle', 'Yes, at angles > critical angle', 'No, because n_glass > n_water', 'Only at exactly 90°'],
    correctAnswer: 2,
    explanation: 'No! TIR requires going from high n to low n. Since glass (1.5) > water (1.33), the light is entering a DENSER medium, so TIR cannot occur.'
  },
  {
    id: 'tir-8',
    type: 'calculated',
    category: 'tir',
    difficulty: 'hard',
    question: 'placeholder',
    options: [],
    correctAnswer: 0,
    explanation: 'placeholder',
    generateQuestion: () => {
      const n1 = random(1.5, 1.8, 2)
      const n2 = random(1.2, 1.4, 2)
      
      if (n2 >= n1) {
        return {
          question: `Can TIR occur when light goes from material A (n=${n1}) to material B (n=${n2})?`,
          options: ['Yes', 'No', 'Only at 45°', 'Only perpendicular'],
          correctAnswer: 1,
          explanation: `No! TIR requires n₁ > n₂. Since ${n1} < ${n2}, light is entering a denser medium, so TIR cannot occur.`
        }
      }
      
      const thetaC = Number((Math.asin(n2 / n1) * 180 / Math.PI).toFixed(1))
      
      return {
        question: `Light goes from n=${n1} to n=${n2}. What is the critical angle?`,
        options: [`${thetaC}°`, `${(90-thetaC).toFixed(1)}°`, `${(thetaC/2).toFixed(1)}°`, 'No critical angle exists'],
        correctAnswer: 0,
        explanation: `θc = sin⁻¹(${n2}/${n1}) = ${thetaC}°. TIR occurs because n₁ > n₂.`
      }
    }
  },
  {
    id: 'tir-9',
    type: 'multiple-choice',
    category: 'tir',
    difficulty: 'medium',
    question: 'Fiber optic cables use TIR to transmit light. Why is this better than using mirrors?',
    options: ['Mirrors are expensive', 'TIR gives 100% reflection with no losses', 'Mirrors reflect wrong colors', 'TIR is faster'],
    correctAnswer: 1,
    explanation: 'TIR reflects 100% of light, while mirrors typically reflect ~95% (some light is absorbed). This allows fiber optics to transmit signals over long distances!'
  },
  {
    id: 'tir-10',
    type: 'multiple-choice',
    category: 'tir',
    difficulty: 'easy',
    question: 'What happens to light at angles LESS than the critical angle?',
    options: ['Total internal reflection', 'Normal refraction occurs', 'Light is absorbed', 'Light splits in two'],
    correctAnswer: 1,
    explanation: 'Below the critical angle, normal refraction occurs according to Snell\'s Law. TIR only happens when θ > θc.'
  },

  // ========== DISPERSION (5) ==========
  {
    id: 'dispersion-1',
    type: 'multiple-choice',
    category: 'dispersion',
    difficulty: 'easy',
    question: 'Why does white light separate into colors when passing through a prism?',
    options: ['Different colors travel at different speeds', 'Different colors have different indices of refraction', 'The prism absorbs some colors', 'Different colors reflect differently'],
    correctAnswer: 1,
    explanation: 'Dispersion occurs because n depends on wavelength. Blue light has higher n than red, so it bends more, separating the colors.'
  },
  {
    id: 'dispersion-2',
    type: 'multiple-choice',
    category: 'dispersion',
    difficulty: 'medium',
    question: 'Which color of visible light bends the MOST when entering glass from air?',
    options: ['Red', 'Yellow', 'Green', 'Violet'],
    correctAnswer: 3,
    explanation: 'Violet has the shortest wavelength (~400nm) and highest index of refraction, so it bends the most toward the normal.'
  },
  {
    id: 'dispersion-3',
    type: 'multiple-choice',
    category: 'dispersion',
    difficulty: 'medium',
    question: 'In a prism, red light exits at a different angle than violet. Which one bends LESS (larger angle from normal)?',
    options: ['Red', 'Violet', 'They bend the same', 'Depends on prism material'],
    correctAnswer: 0,
    explanation: 'Red has lower n (≈1.513) than violet (≈1.532), so it bends less and exits at a larger angle from the normal.'
  },
  {
    id: 'dispersion-4',
    type: 'multiple-choice',
    category: 'dispersion',
    difficulty: 'hard',
    question: 'Why doesn\'t dispersion occur during reflection, only refraction?',
    options: ['Reflection happens too fast', 'The law of reflection (θᵢ=θᵣ) doesn\'t depend on wavelength', 'Mirrors absorb some colors', 'Dispersion does occur in reflection'],
    correctAnswer: 1,
    explanation: 'The law of reflection θᵢ = θᵣ applies equally to all wavelengths. Only refraction (Snell\'s Law with wavelength-dependent n) causes dispersion.'
  },
  {
    id: 'dispersion-5',
    type: 'multiple-choice',
    category: 'dispersion',
    difficulty: 'medium',
    question: 'For most transparent materials, how does index of refraction vary with wavelength?',
    options: ['n increases with wavelength', 'n decreases with wavelength', 'n is constant for all wavelengths', 'n randomly varies'],
    correctAnswer: 1,
    explanation: 'For most materials, n DECREASES as wavelength increases. Blue (short λ) has high n, red (long λ) has low n.'
  },

  // ========== APPLICATIONS & RAINBOWS (8) ==========
  {
    id: 'app-1',
    type: 'multiple-choice',
    category: 'applications',
    difficulty: 'medium',
    question: 'In a primary rainbow, which color appears on the outer edge of the arc?',
    options: ['Violet', 'Blue', 'Yellow', 'Red'],
    correctAnswer: 3,
    explanation: 'Red appears on the outside at 42°, violet on the inside at 39.5°. Red refracts less, so it exits at a larger angle.'
  },
  {
    id: 'app-2',
    type: 'multiple-choice',
    category: 'applications',
    difficulty: 'medium',
    question: 'A secondary rainbow has colors in reverse order. How many internal reflections occur in the raindrop?',
    options: ['Zero', 'One', 'Two', 'Three'],
    correctAnswer: 2,
    explanation: 'Secondary rainbows form from TWO internal reflections in the raindrop, which reverses the color order (violet outside, red inside).'
  },
  {
    id: 'app-3',
    type: 'multiple-choice',
    category: 'applications',
    difficulty: 'easy',
    question: 'To see a rainbow, where must the sun be relative to you?',
    options: ['In front of you', 'Behind you', 'Directly overhead', 'Doesn\'t matter'],
    correctAnswer: 1,
    explanation: 'The sun must be behind you! Light enters raindrops in front of you, reflects internally, and returns to your eyes.'
  },
  {
    id: 'app-4',
    type: 'multiple-choice',
    category: 'applications',
    difficulty: 'medium',
    question: 'Why do you see a rainbow as an arc shape?',
    options: ['Raindrops are circular', 'All drops at 42° from sun-you line form a cone', 'Light travels in curves', 'The atmosphere bends light'],
    correctAnswer: 1,
    explanation: 'All raindrops at the same angle (42° for red) from the sun-you axis form a cone in 3D space. You see this cone as an arc!'
  },
  {
    id: 'app-5',
    type: 'multiple-choice',
    category: 'applications',
    difficulty: 'hard',
    question: 'Why can you sometimes see a rainbow from an airplane but never walk to the end of it?',
    options: ['Rainbows are optical illusions', 'Different drops create the rainbow for each observer position', 'Rainbows move away from you', 'Atmospheric pressure changes'],
    correctAnswer: 1,
    explanation: 'The rainbow you see is specific to YOUR viewing angle! Different raindrops create the rainbow effect for different observers. It\'s a personal viewing phenomenon!'
  },
  {
    id: 'app-6',
    type: 'multiple-choice',
    category: 'applications',
    difficulty: 'medium',
    question: 'A rainbow forms in a raindrop through which three processes in order?',
    options: ['Refraction → Reflection → Refraction', 'Reflection → Refraction → Reflection', 'Refraction → Refraction → Reflection', 'Dispersion → TIR → Absorption'],
    correctAnswer: 0,
    explanation: 'Refraction entering (disperses), reflection at back (TIR), refraction exiting (disperses more). This creates the spectrum!'
  },
  {
    id: 'app-7',
    type: 'multiple-choice',
    category: 'applications',
    difficulty: 'easy',
    question: 'What causes a mirage on a hot road?',
    options: ['Water reflection', 'Air layers with different temperatures have different n', 'Light absorption by asphalt', 'Your eyes playing tricks'],
    correctAnswer: 1,
    explanation: 'Hot air near the road has slightly lower n than cooler air above. Light gradually bends and eventually undergoes TIR, making you see the sky reflected on the road!'
  },
  {
    id: 'app-8',
    type: 'multiple-choice',
    category: 'applications',
    difficulty: 'hard',
    question: 'Why does a straw look bent when placed in a glass of water?',
    options: ['The water physically bends it', 'Refraction at water-air interface changes apparent position', 'The glass acts as a lens', 'Reflection from the glass surface'],
    correctAnswer: 1,
    explanation: 'Light from the submerged part refracts when exiting water to air, bending away from normal. This makes the straw appear to shift position - it looks bent but isn\'t!'
  },
]

// Function to get a random question
export const getRandomQuestion = (): CompetitiveQuestion => {
  const question = reflectionRefractionQuestions[Math.floor(Math.random() * reflectionRefractionQuestions.length)]
  
  // If it's a calculated question, generate it
  if (question.generateQuestion) {
    const generated = question.generateQuestion()
    return {
      ...question,
      question: generated.question,
      options: generated.options,
      correctAnswer: generated.correctAnswer,
      explanation: generated.explanation
    }
  }
  
  return question
}

// Function to get a set of unique questions
export const getQuestionSet = (count: number): CompetitiveQuestion[] => {
  const questions: CompetitiveQuestion[] = []
  const usedIds = new Set<string>()
  
  while (questions.length < count && usedIds.size < reflectionRefractionQuestions.length) {
    const question = getRandomQuestion()
    if (!usedIds.has(question.id)) {
      questions.push(question)
      usedIds.add(question.id)
    }
  }
  
  return questions
}
