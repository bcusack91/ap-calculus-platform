/**
 * Entrance Quiz — Circles & Trigonometry (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  { id: 'sct-ent-1a', question: 'What are the center and radius of the circle $(x - 3)^2 + (y + 2)^2 = 25$?', options: ['Center $(3, -2)$, radius $25$', 'Center $(-3, 2)$, radius $5$', 'Center $(3, -2)$, radius $5$', 'Center $(3, 2)$, radius $5$'], correctIndex: 2, explanation: 'Standard form is $(x - h)^2 + (y - k)^2 = r^2$. Here $h = 3$, $k = -2$ (since $y + 2 = y - (-2)$), and $r = \\sqrt{25} = 5$.', partNumber: 1, partTitle: 'Circle Equations and Completing the Square' },
  { id: 'sct-ent-1b', question: 'What is the radius of the circle $x^2 + y^2 - 6x + 4y - 12 = 0$?', options: ['$2\\sqrt{3}$', '$5$', '$12$', '$25$'], correctIndex: 1, explanation: 'Complete the square: $(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$, so $(x - 3)^2 + (y + 2)^2 = 25$ and $r = 5$. ($2\\sqrt{3}$ uses only the constant 12; 25 is $r^2$.)', partNumber: 1, partTitle: 'Circle Equations and Completing the Square' },
  { id: 'sct-ent-2a', question: 'A circle has radius 9. What is the length of the arc intercepted by a central angle of $60^\\circ$?', options: ['$3\\pi$', '$6\\pi$', '$9\\pi$', '$18\\pi$'], correctIndex: 0, explanation: 'Arc length $= \\dfrac{60}{360} \\cdot 2\\pi(9) = \\dfrac{1}{6} \\cdot 18\\pi = 3\\pi$. ($18\\pi$ is the whole circumference.)', partNumber: 2, partTitle: 'Arc Length, Sectors, and Radians' },
  { id: 'sct-ent-2b', question: 'What is the radian measure of an angle of $150^\\circ$?', options: ['$\\dfrac{5\\pi}{6}$', '$\\dfrac{5\\pi}{3}$', '$\\dfrac{6\\pi}{5}$', '$\\dfrac{3\\pi}{4}$'], correctIndex: 0, explanation: 'Multiply by $\\dfrac{\\pi}{180}$: $150 \\cdot \\dfrac{\\pi}{180} = \\dfrac{5\\pi}{6}$.', partNumber: 2, partTitle: 'Arc Length, Sectors, and Radians' },
  { id: 'sct-ent-3a', question: 'In a right triangle with legs 6 and 8, what is the cosine of the angle opposite the side of length 8?', options: ['$\\dfrac{3}{5}$', '$\\dfrac{4}{5}$', '$\\dfrac{3}{4}$', '$\\dfrac{4}{3}$'], correctIndex: 0, explanation: 'The hypotenuse is $\\sqrt{36 + 64} = 10$. For the angle opposite 8, the adjacent leg is 6, so $\\cos = \\dfrac{6}{10} = \\dfrac{3}{5}$. ($\\dfrac{4}{5}$ is the sine of that angle.)', partNumber: 3, partTitle: 'SOH-CAH-TOA and Special Triangles' },
  { id: 'sct-ent-3b', question: 'A 20-foot ladder leans against a vertical wall and makes a $30^\\circ$ angle with the level ground. How high up the wall does the ladder reach?', options: ['$10$ feet', '$10\\sqrt{3}$ feet', '$20\\sqrt{3}$ feet', '$5$ feet'], correctIndex: 0, explanation: 'The height is opposite the $30^\\circ$ angle and the ladder is the hypotenuse: $\\sin 30^\\circ = \\dfrac{h}{20}$, so $h = 20 \\cdot \\dfrac{1}{2} = 10$ feet. ($10\\sqrt{3}$ is the distance along the ground.)', partNumber: 3, partTitle: 'SOH-CAH-TOA and Special Triangles' },
  { id: 'sct-ent-4a', question: 'On the unit circle, what are the coordinates of the point at an angle of $120^\\circ$ from the positive $x$-axis?', options: ['$\\left(\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$', '$\\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$', '$\\left(-\\frac{\\sqrt{3}}{2}, \\frac{1}{2}\\right)$', '$\\left(\\frac{\\sqrt{3}}{2}, -\\frac{1}{2}\\right)$'], correctIndex: 1, explanation: '$120^\\circ$ is in Quadrant II with reference angle $60^\\circ$, so the point is $(-\\cos 60^\\circ, \\sin 60^\\circ) = \\left(-\\frac{1}{2}, \\frac{\\sqrt{3}}{2}\\right)$.', partNumber: 4, partTitle: 'Unit Circle and Reference Angles' },
  { id: 'sct-ent-4b', question: 'What is the value of $\\sin 210^\\circ$?', options: ['$-\\dfrac{1}{2}$', '$\\dfrac{1}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$', '$\\dfrac{\\sqrt{3}}{2}$'], correctIndex: 0, explanation: '$210^\\circ$ is in Quadrant III, where sine is negative. The reference angle is $210^\\circ - 180^\\circ = 30^\\circ$, so $\\sin 210^\\circ = -\\sin 30^\\circ = -\\dfrac{1}{2}$.', partNumber: 4, partTitle: 'Unit Circle and Reference Angles' },
  { id: 'sct-ent-5a', question: 'Given that $\\sin 28^\\circ \\approx 0.47$, what is the approximate value of $\\cos 62^\\circ$?', options: ['$0.47$', '$0.53$', '$0.88$', '$0.62$'], correctIndex: 0, explanation: '$28^\\circ + 62^\\circ = 90^\\circ$, so the angles are complementary and $\\cos 62^\\circ = \\sin 28^\\circ \\approx 0.47$. ($0.88$ is $\\cos 28^\\circ$.)', partNumber: 5, partTitle: 'Complementary Angles and the Pythagorean Identity' },
  { id: 'sct-ent-5b', question: 'For acute angles, $\\sin x^\\circ = \\cos(3x - 10)^\\circ$. What is the value of $x$?', options: ['$5$', '$20$', '$25$', '$45$'], correctIndex: 2, explanation: '$\\sin A = \\cos B$ for acute angles means $A + B = 90$: $x + 3x - 10 = 90$, so $4x = 100$ and $x = 25$. (Setting $x = 3x - 10$ gives 5.)', partNumber: 5, partTitle: 'Complementary Angles and the Pythagorean Identity' },
  { id: 'sct-ent-6a', question: 'An inscribed angle in a circle intercepts an arc of $110^\\circ$. What is the measure of the inscribed angle?', options: ['$35^\\circ$', '$55^\\circ$', '$70^\\circ$', '$110^\\circ$'], correctIndex: 1, explanation: 'An inscribed angle is half its intercepted arc: $\\dfrac{110^\\circ}{2} = 55^\\circ$. ($110^\\circ$ is the central angle for that arc.)', partNumber: 6, partTitle: 'Inscribed Angles and Tangent Lines' },
  { id: 'sct-ent-6b', question: 'Line $PT$ is tangent to a circle with center $O$ at point $T$. If $OT = 5$ and $PT = 12$, what is $OP$?', options: ['$7$', '$13$', '$17$', '$\\sqrt{119}$'], correctIndex: 1, explanation: 'A radius is perpendicular to a tangent at the point of tangency, so triangle $OTP$ has a right angle at $T$: $OP = \\sqrt{5^2 + 12^2} = 13$.', partNumber: 6, partTitle: 'Inscribed Angles and Tangent Lines' },
  { id: 'sct-ent-7a', question: 'If $\\cos\\theta = \\dfrac{3}{5}$ for an acute angle $\\theta$, what is $\\tan\\theta$?', options: ['$\\dfrac{3}{4}$', '$\\dfrac{4}{3}$', '$\\dfrac{3}{5}$', '$\\dfrac{5}{4}$'], correctIndex: 1, explanation: 'Adjacent $= 3$, hypotenuse $= 5$, so opposite $= \\sqrt{25 - 9} = 4$ and $\\tan\\theta = \\dfrac{4}{3}$.', partNumber: 7, partTitle: 'Mixed Review & Exam Strategies' },
  { id: 'sct-ent-7b', question: 'In a 30-60-90 triangle, the side opposite the $30^\\circ$ angle has length 5. What is the length of the hypotenuse?', options: ['$5\\sqrt{2}$', '$5\\sqrt{3}$', '$10$', '$10\\sqrt{3}$'], correctIndex: 2, explanation: 'The sides are in the ratio $1 : \\sqrt{3} : 2$, so the hypotenuse is twice the short leg: $2 \\cdot 5 = 10$. ($5\\sqrt{3}$ is the longer leg.)', partNumber: 7, partTitle: 'Mixed Review & Exam Strategies' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Circle Equations and Completing the Square' },
    { partNumber: 2, partTitle: 'Arc Length, Sectors, and Radians' },
    { partNumber: 3, partTitle: 'SOH-CAH-TOA and Special Triangles' },
    { partNumber: 4, partTitle: 'Unit Circle and Reference Angles' },
    { partNumber: 5, partTitle: 'Complementary Angles and the Pythagorean Identity' },
    { partNumber: 6, partTitle: 'Inscribed Angles and Tangent Lines' },
    { partNumber: 7, partTitle: 'Mixed Review & Exam Strategies' },
  ]
}
