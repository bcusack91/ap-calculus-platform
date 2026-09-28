/**
 * Entrance Quiz — Geometry & Angles (SAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  { id: 'sga-ent-1a', question: 'An exterior angle of a triangle measures $130^\\circ$. One of the two remote interior angles measures $55^\\circ$. What is the measure of the other remote interior angle?', options: ['$50^\\circ$', '$65^\\circ$', '$75^\\circ$', '$125^\\circ$'], correctIndex: 2, explanation: 'An exterior angle equals the sum of the two remote interior angles: $130 = 55 + x$, so $x = 75^\\circ$. ($50^\\circ$ is the interior angle adjacent to the exterior angle.)', partNumber: 1, partTitle: 'Angle Relationships' },
  { id: 'sga-ent-1b', question: 'Two parallel lines are cut by a transversal. A pair of alternate interior angles measure $(3x + 10)^\\circ$ and $(5x - 20)^\\circ$. What is the value of $x$?', options: ['10', '15', '20', '25'], correctIndex: 1, explanation: 'Alternate interior angles are congruent: $3x + 10 = 5x - 20$, so $30 = 2x$ and $x = 15$. (Setting the sum to $180$ treats them as same-side interior angles and gives 23.75.)', partNumber: 1, partTitle: 'Angle Relationships' },
  { id: 'sga-ent-2a', question: 'An isosceles right triangle has legs of length 6. What is the length of its hypotenuse?', options: ['$6\\sqrt{2}$', '$6\\sqrt{3}$', '$12$', '$3\\sqrt{2}$'], correctIndex: 0, explanation: 'A 45-45-90 triangle has sides in the ratio $1 : 1 : \\sqrt{2}$, so the hypotenuse is $6\\sqrt{2}$. ($6\\sqrt{3}$ uses the 30-60-90 ratio.)', partNumber: 2, partTitle: 'Special Triangles, Similarity, Congruence' },
  { id: 'sga-ent-2b', question: 'Two sides of a triangle have lengths 5 and 9. Which of the following could be the length of the third side?', options: ['3', '4', '13', '14'], correctIndex: 2, explanation: 'By the triangle inequality, the third side must be greater than $9 - 5 = 4$ and less than $9 + 5 = 14$. Only 13 lies strictly between. (4 and 14 would make a flat, degenerate triangle.)', partNumber: 2, partTitle: 'Special Triangles, Similarity, Congruence' },
  { id: 'sga-ent-3a', question: 'What is the sum of the interior angle measures of a pentagon?', options: ['$360^\\circ$', '$450^\\circ$', '$540^\\circ$', '$720^\\circ$'], correctIndex: 2, explanation: 'The interior angles of an $n$-gon sum to $(n - 2) \\cdot 180^\\circ$. For $n = 5$: $3 \\cdot 180^\\circ = 540^\\circ$. ($360^\\circ$ is the sum of the exterior angles.)', partNumber: 3, partTitle: 'Polygons and Their Properties' },
  { id: 'sga-ent-3b', question: 'What is the area of a trapezoid with parallel bases of lengths 6 and 10 and a height of 4?', options: ['32', '40', '48', '64'], correctIndex: 0, explanation: 'Area $= \\dfrac{1}{2}(b_1 + b_2)h = \\dfrac{1}{2}(6 + 10)(4) = 32$. (64 forgets the $\\frac{1}{2}$.)', partNumber: 3, partTitle: 'Polygons and Their Properties' },
  { id: 'sga-ent-4a', question: 'A circle has radius 6. What is the area of a sector with a central angle of $60^\\circ$?', options: ['$2\\pi$', '$6\\pi$', '$12\\pi$', '$36\\pi$'], correctIndex: 1, explanation: 'The sector is $\\dfrac{60}{360} = \\dfrac{1}{6}$ of the circle: $\\dfrac{1}{6} \\cdot \\pi(6)^2 = 6\\pi$. ($2\\pi$ is the arc length, and $36\\pi$ is the whole circle.)', partNumber: 4, partTitle: 'Circle Geometry' },
  { id: 'sga-ent-4b', question: 'Points $A$, $B$, and $C$ lie on a circle with center $O$. Central angle $AOC$ measures $100^\\circ$, and inscribed angle $ABC$ intercepts the same arc $AC$. What is the measure of angle $ABC$?', options: ['$40^\\circ$', '$50^\\circ$', '$80^\\circ$', '$100^\\circ$'], correctIndex: 1, explanation: 'An inscribed angle is half the central angle that intercepts the same arc: $\\dfrac{100^\\circ}{2} = 50^\\circ$. ($40^\\circ$ is a base angle of isosceles triangle $AOC$.)', partNumber: 4, partTitle: 'Circle Geometry' },
  { id: 'sga-ent-5a', question: 'A right circular cylinder has radius 3 and height 5. What is its volume?', options: ['$15\\pi$', '$30\\pi$', '$45\\pi$', '$90\\pi$'], correctIndex: 2, explanation: '$V = \\pi r^2 h = \\pi(3^2)(5) = 45\\pi$. ($30\\pi$ is the lateral surface area $2\\pi rh$.)', partNumber: 5, partTitle: '3D Figures' },
  { id: 'sga-ent-5b', question: 'The edge length of a cube is tripled. By what factor is the volume of the cube multiplied?', options: ['3', '6', '9', '27'], correctIndex: 3, explanation: 'Volume scales by the cube of the length factor: $3^3 = 27$. (9 is the factor for surface area, which scales by $3^2$.)', partNumber: 5, partTitle: '3D Figures' },
  { id: 'sga-ent-6a', question: 'What is the distance between the points $(1, 2)$ and $(7, 10)$ in the $xy$-plane?', options: ['8', '10', '14', '100'], correctIndex: 1, explanation: '$d = \\sqrt{(7 - 1)^2 + (10 - 2)^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. (14 adds the legs, and 100 forgets the square root.)', partNumber: 6, partTitle: 'Distance, Midpoint, and Equations of Lines/Circles' },
  { id: 'sga-ent-6b', question: 'What is the midpoint of the segment with endpoints $(-2, 5)$ and $(6, -1)$?', options: ['$(2, 2)$', '$(4, 4)$', '$(4, -3)$', '$(-4, 3)$'], correctIndex: 0, explanation: 'Average the coordinates: $\\left(\\dfrac{-2 + 6}{2}, \\dfrac{5 + (-1)}{2}\\right) = (2, 2)$. ($(4, 4)$ adds without dividing by 2; $(4, -3)$ halves the differences.)', partNumber: 6, partTitle: 'Distance, Midpoint, and Equations of Lines/Circles' },
  { id: 'sga-ent-7a', question: 'A square has a diagonal of length $8\\sqrt{2}$. What is the area of the square?', options: ['32', '64', '128', '256'], correctIndex: 1, explanation: 'A square\'s diagonal is $s\\sqrt{2}$, so $s = 8$ and the area is $8^2 = 64$. (128 squares the diagonal.)', partNumber: 7, partTitle: 'Comprehensive Review' },
  { id: 'sga-ent-7b', question: 'A right triangle has a hypotenuse of length 17 and one leg of length 15. What is the area of the triangle?', options: ['60', '120', '127.5', '255'], correctIndex: 0, explanation: 'The other leg is $\\sqrt{17^2 - 15^2} = \\sqrt{64} = 8$. Area $= \\dfrac{1}{2}(15)(8) = 60$. (120 forgets the $\\frac{1}{2}$; 127.5 uses the hypotenuse as a base.)', partNumber: 7, partTitle: 'Comprehensive Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Angle Relationships' },
    { partNumber: 2, partTitle: 'Special Triangles, Similarity, Congruence' },
    { partNumber: 3, partTitle: 'Polygons and Their Properties' },
    { partNumber: 4, partTitle: 'Circle Geometry' },
    { partNumber: 5, partTitle: '3D Figures' },
    { partNumber: 6, partTitle: 'Distance, Midpoint, and Equations of Lines/Circles' },
    { partNumber: 7, partTitle: 'Comprehensive Review' },
  ]
}
