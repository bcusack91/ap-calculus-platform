/**
 * Entrance Quiz — Advanced Integration Techniques (AP Calculus BC)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Completing the Square for Integration
  { id: 'adi-ent-1a', question: 'To integrate $\\frac{1}{x^2+4x+8}$, first:', options: ['Factor the denominator', 'Complete the square', 'Use partial fractions', 'Use IBP'], correctIndex: 1, explanation: 'Complete the square: $x^2+4x+8 = (x+2)^2+4$, then use arctan.', partNumber: 1, partTitle: 'Completing the Square for Integration' },
  { id: 'adi-ent-1b', question: '$x^2+6x+13 = (x+3)^2 + ?$', options: ['$4$', '$9$', '$13$', '$22$'], correctIndex: 0, explanation: '$(x+3)^2 = x^2+6x+9$. Remainder: $13-9=4$.', partNumber: 1, partTitle: 'Completing the Square for Integration' },
  // Part 2: Trigonometric Substitution Awareness
  { id: 'adi-ent-2a', question: 'Trig substitution is useful for integrands containing:', options: ['$\\sqrt{a^2-x^2}$', '$e^x$', '$\\ln x$', '$x^n$'], correctIndex: 0, explanation: 'Forms like $\\sqrt{a^2-x^2}$, $\\sqrt{a^2+x^2}$, $\\sqrt{x^2-a^2}$ suggest trig sub.', partNumber: 2, partTitle: 'Trigonometric Substitution Awareness' },
  { id: 'adi-ent-2b', question: 'For $\\sqrt{4-x^2}$, substitute $x =$', options: ['$2\\sin\\theta$', '$2\\tan\\theta$', '$2\\sec\\theta$', '$\\sqrt{2}\\sin\\theta$'], correctIndex: 0, explanation: '$\\sqrt{a^2-x^2}$: let $x = a\\sin\\theta = 2\\sin\\theta$.', partNumber: 2, partTitle: 'Trigonometric Substitution Awareness' },
  // Part 3: Integration Strategies Overview
  { id: 'adi-ent-3a', question: 'Before choosing a technique, always check for:', options: ['The hardest method', 'A simple substitution or simplification', 'Integration by parts', 'Partial fractions'], correctIndex: 1, explanation: 'Start simple: can basic algebra, u-sub, or a known form work?', partNumber: 3, partTitle: 'Integration Strategies Overview' },
  { id: 'adi-ent-3b', question: 'Which technique works for $\\int xe^{x^2}\\,dx$?', options: ['Integration by parts', 'u-substitution with $u = x^2$', 'Partial fractions', 'Trig substitution'], correctIndex: 1, explanation: '$u = x^2$, $du = 2x\\,dx$. Simple substitution.', partNumber: 3, partTitle: 'Integration Strategies Overview' },
  // Part 4: Choosing the Right Technique
  { id: 'adi-ent-4a', question: 'For $\\int \\frac{P(x)}{Q(x)}\\,dx$ with factorable $Q$:', options: ['u-substitution', 'Integration by parts', 'Partial fractions', 'Trig substitution'], correctIndex: 2, explanation: 'Rational functions with factorable denominators → partial fractions.', partNumber: 4, partTitle: 'Choosing the Right Technique' },
  { id: 'adi-ent-4b', question: 'For $\\int x^3 \\ln x\\,dx$:', options: ['u-substitution', 'Integration by parts', 'Partial fractions', 'Complete the square'], correctIndex: 1, explanation: 'Product of polynomial and log → IBP with $u = \\ln x$.', partNumber: 4, partTitle: 'Choosing the Right Technique' },
  // Part 5: Combining Techniques
  { id: 'adi-ent-5a', question: '$\\int \\frac{x}{(x-1)(x+2)}\\,dx$ combines:', options: ['Partial fractions then log integrals', 'IBP then substitution', 'Trig sub then IBP', 'Completing the square'], correctIndex: 0, explanation: 'Decompose into partial fractions, then integrate each as $\\ln$.', partNumber: 5, partTitle: 'Combining Techniques' },
  { id: 'adi-ent-5b', question: '$\\int \\frac{e^x}{e^{2x}+1}\\,dx$ with $u = e^x$:', options: ['$\\arctan(e^x) + C$', '$\\ln(e^{2x}+1) + C$', '$\\frac{e^x}{2} + C$', '$e^x \\arctan x + C$'], correctIndex: 0, explanation: '$du = e^x\\,dx$. $\\int \\frac{du}{u^2+1} = \\arctan u + C$.', partNumber: 5, partTitle: 'Combining Techniques' },
  // Part 6: Problem-Solving Workshop
  { id: 'adi-ent-6a', question: '$\\int \\frac{1}{\\sqrt{9-x^2}}\\,dx =$', options: ['$\\arcsin(\\frac{x}{3}) + C$', '$\\arctan(\\frac{x}{3}) + C$', '$\\ln|9-x^2| + C$', '$\\frac{x}{\\sqrt{9-x^2}} + C$'], correctIndex: 0, explanation: 'Standard form: $\\int \\frac{dx}{\\sqrt{a^2-x^2}} = \\arcsin(\\frac{x}{a}) + C$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'adi-ent-6b', question: '$\\int \\frac{1}{x^2+9}\\,dx =$', options: ['$\\frac{1}{3}\\arctan(\\frac{x}{3}) + C$', '$\\arctan(\\frac{x}{9}) + C$', '$\\ln(x^2+9) + C$', '$\\frac{x}{x^2+9} + C$'], correctIndex: 0, explanation: '$\\int \\frac{dx}{x^2+a^2} = \\frac{1}{a}\\arctan(\\frac{x}{a}) + C$ with $a = 3$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  // Part 7: Review & AP Exam Applications
  { id: 'adi-ent-7a', question: 'The BC exam expects you to recognize which integration technique to use based on:', options: ['The length of the problem', 'The form of the integrand', 'The number of variables', 'The answer choices'], correctIndex: 1, explanation: 'Pattern recognition of integrand form is the key skill.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'adi-ent-7b', question: 'If no technique seems to work, consider:', options: ['Giving up', 'Algebraic manipulation or rewriting the integrand', 'Guessing', 'Skipping to the next problem'], correctIndex: 1, explanation: 'Simplify, factor, expand, or rewrite before trying advanced techniques.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Completing the Square for Integration' },
    { partNumber: 2, partTitle: 'Trigonometric Substitution Awareness' },
    { partNumber: 3, partTitle: 'Integration Strategies Overview' },
    { partNumber: 4, partTitle: 'Choosing the Right Technique' },
    { partNumber: 5, partTitle: 'Combining Techniques' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
