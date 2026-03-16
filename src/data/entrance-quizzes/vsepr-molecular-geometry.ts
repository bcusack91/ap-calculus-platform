/**
 * Entrance Quiz — VSEPR & Molecular Geometry
 * 14 questions (2 per part)
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'vs-ent-1a', question: 'VSEPR theory predicts molecular geometry based on:', options: ['Atomic masses', 'Electron pair repulsion around the central atom', 'Bond energies', 'Electronegativity differences'], correctIndex: 1, explanation: 'VSEPR (Valence Shell Electron Pair Repulsion) theory states that electron groups around a central atom arrange themselves to minimize repulsion.', partNumber: 1, partTitle: 'Introduction to VSEPR' },
  { id: 'vs-ent-1b', question: 'In VSEPR theory, a "region of electron density" can be:', options: ['Only a bonding pair', 'Only a lone pair', 'A bonding pair, lone pair, or multiple bond', 'Only a single bond'], correctIndex: 2, explanation: 'Each region of electron density can be a single bond, double bond, triple bond, or lone pair — they all count as one region for geometry prediction.', partNumber: 1, partTitle: 'Introduction to VSEPR' },

  { id: 'vs-ent-2a', question: 'A molecule with 4 electron groups and 0 lone pairs has what electron and molecular geometry?', options: ['Tetrahedral, tetrahedral', 'Trigonal pyramidal, tetrahedral', 'Tetrahedral, bent', 'Square planar, square planar'], correctIndex: 0, explanation: 'Four electron groups with no lone pairs gives tetrahedral electron geometry AND tetrahedral molecular geometry (e.g., $CH_4$).', partNumber: 2, partTitle: 'Electron & Molecular Geometry' },
  { id: 'vs-ent-2b', question: 'What is the molecular geometry of $BF_3$?', options: ['Bent', 'Trigonal pyramidal', 'Trigonal planar', 'T-shaped'], correctIndex: 2, explanation: '$BF_3$ has 3 bonding groups and 0 lone pairs around B, giving trigonal planar geometry with 120° bond angles.', partNumber: 2, partTitle: 'Electron & Molecular Geometry' },

  { id: 'vs-ent-3a', question: 'What is the molecular geometry of $NH_3$?', options: ['Trigonal planar', 'Trigonal pyramidal', 'Tetrahedral', 'Bent'], correctIndex: 1, explanation: '$NH_3$ has 3 bonding pairs and 1 lone pair (4 electron groups total, tetrahedral arrangement). The molecular geometry (atoms only) is trigonal pyramidal.', partNumber: 3, partTitle: 'Effect of Lone Pairs' },
  { id: 'vs-ent-3b', question: 'Lone pairs occupy more space than bonding pairs because:', options: ['They are heavier', 'They are closer to the nucleus and spread out more', 'They have more electrons', 'They are further from the nucleus'], correctIndex: 1, explanation: 'Lone pairs are held closer to the central atom (not shared with another nucleus) and occupy a larger angular volume, compressing bond angles.', partNumber: 3, partTitle: 'Effect of Lone Pairs' },

  { id: 'vs-ent-4a', question: 'The ideal bond angle in a tetrahedral molecule is:', options: ['90°', '109.5°', '120°', '180°'], correctIndex: 1, explanation: 'Tetrahedral geometry has bond angles of 109.5°, which maximizes the distance between four electron groups.', partNumber: 4, partTitle: 'Bond Angles' },
  { id: 'vs-ent-4b', question: 'The bond angle in $H_2O$ is approximately 104.5°, less than the tetrahedral angle of 109.5°, because:', options: ['Water has only 2 bonds', 'The 2 lone pairs compress the bond angle', 'Oxygen is smaller than carbon', 'Hydrogen atoms repel each other'], correctIndex: 1, explanation: 'Water has 2 bonding pairs and 2 lone pairs. The lone pairs exert extra repulsion, compressing the H–O–H bond angle from 109.5° to about 104.5°.', partNumber: 4, partTitle: 'Bond Angles' },

  { id: 'vs-ent-5a', question: '$CO_2$ is a nonpolar molecule despite having polar $C=O$ bonds because:', options: ['Carbon has no lone pairs', 'The two bond dipoles cancel due to linear geometry', 'Double bonds are nonpolar', 'Oxygen is not very electronegative'], correctIndex: 1, explanation: '$CO_2$ is linear (180°), so the two equal and opposite C=O dipoles cancel out, making the overall molecule nonpolar despite polar bonds.', partNumber: 5, partTitle: 'Molecular Polarity' },
  { id: 'vs-ent-5b', question: 'Which molecule is polar?', options: ['$CCl_4$', '$BF_3$', '$CHCl_3$', '$CO_2$'], correctIndex: 2, explanation: '$CHCl_3$ (chloroform) is polar because its tetrahedral geometry with different substituents (1 H + 3 Cl) creates a net dipole moment. The others have symmetric geometries where dipoles cancel.', partNumber: 5, partTitle: 'Molecular Polarity' },

  { id: 'vs-ent-6a', question: 'A molecule with the formula $XeF_4$ has what molecular geometry?', options: ['Tetrahedral', 'Square planar', 'See-saw', 'Octahedral'], correctIndex: 1, explanation: '$XeF_4$ has 6 electron groups (4 bonding + 2 lone pairs) with octahedral electron geometry. The lone pairs go in axial positions, giving square planar molecular geometry.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },
  { id: 'vs-ent-6b', question: 'What is the molecular geometry of $SF_4$?', options: ['Tetrahedral', 'Square planar', 'See-saw', 'Trigonal bipyramidal'], correctIndex: 2, explanation: '$SF_4$ has 5 electron groups (4 bonding + 1 lone pair). The lone pair occupies an equatorial position in the trigonal bipyramid, giving a see-saw (distorted tetrahedron) shape.', partNumber: 6, partTitle: 'Problem-Solving Workshop' },

  { id: 'vs-ent-7a', question: 'A molecule is nonpolar. Which geometry is NOT possible for it?', options: ['Linear', 'Trigonal planar', 'Trigonal pyramidal', 'Tetrahedral'], correctIndex: 2, explanation: 'Trigonal pyramidal molecules (like $NH_3$) always have a net dipole because the lone pair creates an asymmetric electron distribution. They cannot be nonpolar.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
  { id: 'vs-ent-7b', question: 'Predict the molecular geometry and polarity of $ICl_3$:', options: ['Trigonal planar, nonpolar', 'T-shaped, polar', 'Trigonal pyramidal, polar', 'Bent, polar'], correctIndex: 1, explanation: '$ICl_3$ has 5 electron groups (3 bonding + 2 lone pairs). In a trigonal bipyramidal arrangement, the 2 lone pairs go equatorial, yielding T-shaped geometry, which is polar.', partNumber: 7, partTitle: 'Synthesis & AP Review' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Introduction to VSEPR' },
    { partNumber: 2, partTitle: 'Electron & Molecular Geometry' },
    { partNumber: 3, partTitle: 'Effect of Lone Pairs' },
    { partNumber: 4, partTitle: 'Bond Angles' },
    { partNumber: 5, partTitle: 'Molecular Polarity' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Synthesis & AP Review' },
  ]
}
