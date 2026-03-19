/**
 * Entrance Quiz — Volumes of Revolution (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Disk Method (Revolution about x-axis)
  { id: 'vr-ent-1a', question: 'The disk method uses cross sections that are:', options: ['Rectangles', 'Circles', 'Triangles', 'Squares'], correctIndex: 1, explanation: 'Revolving a region creates circular cross sections.', partNumber: 1, partTitle: 'Disk Method (Revolution about x-axis)' },
  { id: 'vr-ent-1b', question: 'Volume by disks about the $x$-axis: $V =$', options: ['$\\int_a^b \\pi [f(x)]^2\\,dx$', '$\\int_a^b 2\\pi x f(x)\\,dx$', '$\\int_a^b f(x)\\,dx$', '$\\pi \\int_a^b f(x)\\,dx$'], correctIndex: 0, explanation: 'Each disk has area $\\pi r^2 = \\pi[f(x)]^2$; integrate along the axis.', partNumber: 1, partTitle: 'Disk Method (Revolution about x-axis)' },

  // Part 2: Disk Method (Revolution about y-axis)
  { id: 'vr-ent-2a', question: 'When revolving about the $y$-axis using disks, integrate with respect to:', options: ['$x$', '$y$', 'Either', 'Neither'], correctIndex: 1, explanation: 'Revolution about the $y$-axis: integrate $\\pi[g(y)]^2\\,dy$.', partNumber: 2, partTitle: 'Disk Method (Revolution about y-axis)' },
  { id: 'vr-ent-2b', question: 'Revolve $y = \\sqrt{x}$ ($0 \\leq x \\leq 4$) about the $y$-axis. Express $x$ as:', options: ['$x = y^2$', '$x = \\sqrt{y}$', '$x = y$', '$x = y/2$'], correctIndex: 0, explanation: '$y = \\sqrt{x} \\Rightarrow x = y^2$.', partNumber: 2, partTitle: 'Disk Method (Revolution about y-axis)' },

  // Part 3: Washer Method
  { id: 'vr-ent-3a', question: 'The washer method is used when the region has:', options: ['A single boundary curve', 'A hole (two boundary curves)', 'No curves', 'Only vertical lines'], correctIndex: 1, explanation: 'Washers have an outer radius and inner radius, creating a hole.', partNumber: 3, partTitle: 'Washer Method' },
  { id: 'vr-ent-3b', question: 'Washer volume: $V =$', options: ['$\\int_a^b \\pi [R(x)]^2\\,dx$', '$\\int_a^b \\pi([R(x)]^2 - [r(x)]^2)\\,dx$', '$\\int_a^b \\pi[R(x) - r(x)]^2\\,dx$', '$\\int_a^b 2\\pi R(x)\\,dx$'], correctIndex: 1, explanation: '$V = \\pi\\int[R^2 - r^2]\\,dx$. Do NOT square the difference.', partNumber: 3, partTitle: 'Washer Method' },

  // Part 4: Volumes with Known Cross Sections
  { id: 'vr-ent-4a', question: 'For volumes with known cross sections, if cross sections perpendicular to the $x$-axis are squares with side $s(x)$, then $V =$', options: ['$\\int_a^b s(x)\\,dx$', '$\\int_a^b [s(x)]^2\\,dx$', '$\\int_a^b \\pi[s(x)]^2\\,dx$', '$\\int_a^b \\frac{1}{2}[s(x)]^2\\,dx$'], correctIndex: 1, explanation: 'Area of square = $s^2$. Integrate the cross-sectional area.', partNumber: 4, partTitle: 'Volumes with Known Cross Sections' },
  { id: 'vr-ent-4b', question: 'If cross sections are equilateral triangles with side $s$, the area of each is:', options: ['$s^2$', '$\\frac{s^2\\sqrt{3}}{4}$', '$\\frac{1}{2}s^2$', '$\\pi s^2$'], correctIndex: 1, explanation: 'Area of equilateral triangle = $\\frac{s^2\\sqrt{3}}{4}$.', partNumber: 4, partTitle: 'Volumes with Known Cross Sections' },

  // Part 5: Setting Up Volume Integrals
  { id: 'vr-ent-5a', question: 'When revolving about $y = -1$ instead of the $x$-axis, the radius becomes:', options: ['$f(x)$', '$f(x) + 1$', '$f(x) - 1$', '$-f(x)$'], correctIndex: 1, explanation: 'Shift the radius: distance from $y = f(x)$ to $y = -1$ is $f(x) + 1$.', partNumber: 5, partTitle: 'Setting Up Volume Integrals' },
  { id: 'vr-ent-5b', question: 'For revolution about a vertical line $x = k$, use:', options: ['Disks in $x$', 'Disks in $y$ with radius involving $k$', 'Only washers', 'The shell method'], correctIndex: 1, explanation: 'The radius is the horizontal distance from the curve to $x = k$.', partNumber: 5, partTitle: 'Setting Up Volume Integrals' },

  // Part 6: Problem-Solving Workshop
  { id: 'vr-ent-6a', question: 'Revolve $y = x^2$ from $x=0$ to $x=2$ about the $x$-axis. $V =$', options: ['$\\frac{32\\pi}{5}$', '$\\frac{16\\pi}{5}$', '$4\\pi$', '$8\\pi$'], correctIndex: 0, explanation: '$V = \\pi\\int_0^2 x^4\\,dx = \\pi[\\frac{x^5}{5}]_0^2 = \\frac{32\\pi}{5}$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'vr-ent-6b', question: 'Cross sections perpendicular to $x$-axis are semicircles with diameter from $y=0$ to $y=x$. Area $=$', options: ['$\\frac{\\pi x^2}{8}$', '$\\frac{\\pi x^2}{4}$', '$\\pi x^2$', '$\\frac{x^2}{2}$'], correctIndex: 0, explanation: 'Diameter = $x$, radius = $x/2$. Area = $\\frac{1}{2}\\pi(x/2)^2 = \\frac{\\pi x^2}{8}$.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  // Part 7: Review & AP Exam Applications
  { id: 'vr-ent-7a', question: 'On the AP exam, you must set up but may not need to evaluate volume integrals. The key is:', options: ['Getting the exact answer', 'Correctly identifying the radius and limits', 'Memorizing formulas', 'Using technology'], correctIndex: 1, explanation: 'Setting up the integral correctly (radius, limits) is the critical skill.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  { id: 'vr-ent-7b', question: 'The volume of a sphere of radius $r$ using disks is $V =$', options: ['$\\frac{4}{3}\\pi r^3$', '$\\pi r^2$', '$4\\pi r^2$', '$2\\pi r^3$'], correctIndex: 0, explanation: 'Revolving $y = \\sqrt{r^2 - x^2}$ about the $x$-axis gives $\\frac{4}{3}\\pi r^3$.', partNumber: 7, partTitle: 'Review & AP Exam Applications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Disk Method (Revolution about x-axis)' },
    { partNumber: 2, partTitle: 'Disk Method (Revolution about y-axis)' },
    { partNumber: 3, partTitle: 'Washer Method' },
    { partNumber: 4, partTitle: 'Volumes with Known Cross Sections' },
    { partNumber: 5, partTitle: 'Setting Up Volume Integrals' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & AP Exam Applications' },
  ]
}
