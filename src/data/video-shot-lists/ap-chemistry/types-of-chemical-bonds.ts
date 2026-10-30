import type { ShotList } from '../types'

/**
 * Pilot shot list: AP Chemistry — Types of Chemical Bonds.
 *
 * Source: the 7-part lesson (src/data/interactive-lessons/chemistry-types-of-chemical-bonds-part1..7.ts)
 * and the topic's 16 exit-quiz items in src/data/exit-quizzes/ap-chemistry.ts.
 * Scope: AP Chemistry CED (effective Fall 2024, unchanged for the May 2027 exam),
 * Unit 2 topics on bond types, ionic solids, and metals and alloys.
 * Left out on purpose (in the lesson but not tested by the exit quiz or central to the CED):
 * metallic luster, thermal conduction by phonons, and the dipole-moment formula.
 */
export const shotList: ShotList = {
  courseSlug: 'ap-chemistry',
  topicSlug: 'types-of-chemical-bonds',
  title: 'Types of Chemical Bonds',
  overview:
    'Seven short clips that build the three bonding models (ionic, covalent, metallic), connect them with electronegativity, and then use them to explain the properties of solids the way the AP exam asks. Each clip ends with checkpoint questions; the topic exit quiz follows the last clip. The deck slides for this topic can be screen-shared while recording.',
  clips: [
    // ── 1 ────────────────────────────────────────────────────────────────
    {
      title: 'Ionic Bonds: Electron Transfer',
      minutes: 4,
      goal: 'Predict when two elements form an ionic bond, give the ion charges, and write the formula of the ionic compound.',
      keyPoints: [
        'An ionic bond forms when a metal transfers one or more valence electrons to a nonmetal: the metal becomes a cation and the nonmetal becomes an anion.',
        'Metals have low ionization energies and nonmetals have high electron affinities, and both ions end up with a noble-gas configuration (Na⁺ like Ne, Cl⁻ like Ar).',
        'The group predicts the charge (Group 1 → +1, Group 2 → +2, Group 16 → −2, Group 17 → −1), and the charges in the formula must add to zero: MgO, CaF₂.',
        'The ions are held by Coulombic (electrostatic) attraction in a repeating 3D lattice. There are no NaCl molecules; NaCl is a formula unit, the simplest ratio of ions.',
        'Quick prediction: metal + nonmetal → ionic (NaCl, KBr, CaO); nonmetal + nonmetal → covalent (CO₂, H₂O, CH₄).',
      ],
      showOnScreen: [
        'Na → Na⁺ + e⁻ and Cl + e⁻ → Cl⁻, with the configurations [Ne]3s¹ → [Ne] and [Ne]3s²3p⁵ → [Ar]',
        'A periodic table with Groups 1, 2, 16 and 17 labelled with their usual ion charges',
        'A 2D sketch of the NaCl lattice (alternating + and − ions) with one formula unit circled',
        'A two-column sort of formulas: ionic (NaCl, KBr, CaO) vs covalent (CO₂, H₂O, CH₄)',
      ],
      workedExample:
        'Calcium (Group 2) and fluorine (Group 17): Ca loses 2 electrons → Ca²⁺; each F gains 1 → F⁻; (+2) + 2(−1) = 0, so the formula is CaF₂ with a 1 : 2 ion ratio.',
      pitfalls: [
        'Reversing the direction of transfer: the metal loses electrons, the nonmetal gains them.',
        'Calling NaCl a molecule; ionic compounds are extended lattices described by formula units.',
      ],
      lessonParts: [1, 5],
      mcatTags: ['mcat-general-chemistry-mcat', 'mcat-general-chemistry-atomic-structure-mcat'],
      checkpoint: [
        {
          question: 'Which description fits the bonding in potassium bromide, KBr?',
          options: [
            'Potassium and bromine share one electron pair equally',
            'Potassium transfers an electron to bromine, forming K⁺ and Br⁻',
            'Bromine transfers an electron to potassium, forming Br⁺ and K⁻',
            'Delocalized electrons flow freely between the K and Br atoms',
          ],
          correctAnswer: 1,
          explanation:
            'Potassium is a metal with a low ionization energy and bromine is a nonmetal with a high electron affinity, so potassium gives up its valence electron to bromine, and the K⁺ and Br⁻ ions attract each other. Equal sharing describes two identical nonmetal atoms, the reversed transfer has the electron moving toward the metal, and freely flowing electrons describe a metal.',
        },
        {
          question: 'Calcium is in Group 2 and chlorine is in Group 17. What is the formula of the ionic compound they form?',
          options: ['CaCl', 'CaCl₂', 'Ca₂Cl', 'Ca₂Cl₃'],
          correctAnswer: 1,
          explanation:
            'Calcium loses two electrons to become Ca²⁺ and each chlorine gains one to become Cl⁻. Two Cl⁻ ions are needed to cancel one Ca²⁺: (+2) + 2(−1) = 0, so the formula is CaCl₂. A 1 : 1 formula would leave a net +1 charge, and the formulas with two calcium ions do not balance either.',
        },
        {
          question: 'Why is it incorrect to call NaCl a molecule?',
          options: [
            'Sodium and chlorine share electrons, so NaCl is a network solid',
            'A molecule must contain at least three atoms joined by bonds',
            'Sodium and chlorine are both metals, so they form an alloy',
            'Its ions form an extended lattice, and the formula gives only the ion ratio',
          ],
          correctAnswer: 3,
          explanation:
            'Solid NaCl is a repeating 3D lattice of Na⁺ and Cl⁻ ions with no separate NaCl units, so the formula is a formula unit: one Na⁺ for every Cl⁻. The sodium–chlorine attraction is ionic, not shared electrons; chlorine is a nonmetal, not a metal; and a molecule can have just two atoms, as H₂ does.',
        },
      ],
    },

    // ── 2 ────────────────────────────────────────────────────────────────
    {
      title: 'Lattice Energy and Coulomb\'s Law',
      minutes: 5,
      goal: 'Rank ionic compounds by lattice energy and melting point using ion charge first and ion size second.',
      keyPoints: [
        'Lattice energy is the energy released when gaseous ions come together to form one mole of an ionic solid; the same amount is needed to pull the solid apart into gaseous ions. A larger lattice energy means stronger attraction.',
        'Coulomb\'s law: lattice energy ∝ (q₊ × q₋) / (r₊ + r₋). Larger ion charges and smaller ions give a larger lattice energy.',
        'Compare charge first: going from +1/−1 to +2/−2 multiplies the charge product by 4. Only when the charges match, compare size; ions get larger down a group.',
        'Reference values: NaCl 787 kJ/mol, CsCl 657 kJ/mol (larger ions), MgO about 3850 kJ/mol (double charges and small ions).',
        'Stronger Coulombic attraction means a higher melting point (MgO 2852 °C vs NaCl 801 °C). Ionic solids are hard but brittle: shifting a layer lines up like charges, which repel, and the crystal cracks.',
      ],
      showOnScreen: [
        'Coulomb\'s law written large, with arrows: charges up → energy up; radii up → energy down',
        'The table NaCl 787 / CsCl 657 / MgO ≈ 3850 kJ/mol with the ion charges beside each',
        'A worked ranking on the board (see worked example)',
        'A two-layer lattice sketch before and after a shift, showing + next to + and − next to −',
      ],
      workedExample:
        'Rank KBr, NaCl and MgO from lowest to highest lattice energy. MgO has +2/−2 ions, so it is highest. KBr and NaCl are both +1/−1; K⁺ and Br⁻ are larger than Na⁺ and Cl⁻, so KBr is lowest: KBr < NaCl < MgO. Then rank NaF, NaCl, KCl and KBr: all +1/−1, so size decides and NaF (smallest ions) is highest, KBr lowest.',
      pitfalls: [
        'Judging by size before charge: a +2/−2 compound beats any +1/−1 compound in these comparisons.',
        'Using molar mass to explain melting points; MgO (40.3 g/mol) is lighter than NaCl (58.4 g/mol) yet melts far higher.',
      ],
      lessonParts: [1, 6, 7],
      mcatTags: ['mcat-general-chemistry-mcat'],
      checkpoint: [
        {
          question: 'Which compound has the largest lattice energy?',
          options: ['BaO', 'LiF', 'MgO', 'KCl'],
          correctAnswer: 2,
          explanation:
            'MgO and BaO both contain +2 and −2 ions, so both beat the +1/−1 compounds LiF and KCl. Between them, Mg²⁺ is smaller than Ba²⁺ (barium is lower in Group 2), so the ions in MgO are closer together and its lattice energy is largest. LiF has very small ions but only single charges.',
        },
        {
          question: 'According to Coulomb\'s law, which change increases the lattice energy of an ionic compound?',
          options: [
            'Higher ion charges',
            'Ions with larger radii',
            'Spacing the ions farther apart',
            'Swapping in a heavier anion with the same charge',
          ],
          correctAnswer: 0,
          explanation:
            'Lattice energy is proportional to the product of the ion charges divided by the distance between the ions, so raising the charges increases it. Larger radii and wider spacing both increase the distance and weaken the attraction, and mass does not appear in Coulomb\'s law at all.',
        },
        {
          question: 'MgO melts at 2852 °C and NaCl melts at 801 °C. Which explanation is best?',
          options: [
            'Mg²⁺ and O²⁻ have higher charges and smaller radii, so they attract more strongly',
            'MgO has the larger molar mass, so its ions need more energy to move',
            'MgO is held by covalent bonds, which are stronger than ionic bonds',
            'NaCl separates into molecules on melting, while MgO stays a lattice',
          ],
          correctAnswer: 0,
          explanation:
            'Both are ionic solids. Mg²⁺ and O²⁻ carry double charges and are smaller than Na⁺ and Cl⁻, so by Coulomb\'s law their attraction is much stronger and more energy is needed to melt the solid. MgO is actually lighter than NaCl, it is not covalent, and neither compound contains molecules.',
        },
      ],
    },

    // ── 3 ────────────────────────────────────────────────────────────────
    {
      title: 'Covalent Bonds: Bond Order, Length and Energy',
      minutes: 5,
      goal: 'Relate the number of shared electron pairs in a covalent bond to its length and its bond energy.',
      keyPoints: [
        'A covalent bond forms when two nonmetals share one or more pairs of valence electrons; the shared pair is attracted to both nuclei. Nonmetals have high ionization energies, so transferring electrons is too costly.',
        'Single, double and triple bonds share 1, 2 and 3 pairs. Typical number of bonds = 8 − valence electrons: C forms 4, N 3, O 2, halogens and H 1. O₂ has a double bond and N₂ a triple bond.',
        'Bond energy is the energy needed to break one mole of a bond in the gas phase. Breaking a bond always absorbs energy; forming the same bond releases the same amount.',
        'Bond length is the distance between the two nuclei at the point of minimum potential energy.',
        'More shared pairs put more electron density between the nuclei, so the bond is shorter and stronger: C—C 347 kJ/mol, 154 pm; C=C 614 kJ/mol, 134 pm; C≡C 839 kJ/mol, 120 pm. N≡N (945 kJ/mol) is why N₂ is unreactive.',
      ],
      showOnScreen: [
        'H· + ·H → H—H, with the shared pair drawn between the two nuclei',
        'The table of atoms and typical bond counts: C 4, N 3, O 2, F/Cl 1, H 1',
        'The C—C / C=C / C≡C data table (energy and length), with arrows showing length falling as energy rises',
        'A bond-breaking arrow labelled "energy in" and a bond-forming arrow labelled "energy out"',
      ],
      workedExample:
        'Use the carbon–carbon data: as the bond order goes 1 → 2 → 3, the length falls 154 → 134 → 120 pm and the energy rises 347 → 614 → 839 kJ/mol. Then O₂: each O has 6 valence electrons and needs 2 more, so the atoms share 2 pairs (O=O); N₂: each N needs 3, so N≡N.',
      pitfalls: [
        'Saying that breaking bonds releases energy; breaking is endothermic, forming is exothermic.',
        'Thinking a longer bond is stronger; for bonds between the same two atoms, shorter means stronger.',
      ],
      lessonParts: [2],
      mcatTags: ['mcat-general-chemistry-mcat', 'mcat-general-chemistry-thermodynamics-mcat'],
      checkpoint: [
        {
          question: 'Compared with a C=C double bond, a C≡C triple bond is:',
          options: [
            'Longer and stronger',
            'Shorter and stronger',
            'Shorter but weaker',
            'The same length but stronger',
          ],
          correctAnswer: 1,
          explanation:
            'A triple bond has three shared pairs instead of two, so more electron density sits between the nuclei, pulling them closer (120 pm vs 134 pm) and holding them more strongly (839 vs 614 kJ/mol). Bond length changes with bond order even between the same two carbon atoms, so the triple bond is neither the same length nor longer, and the extra shared pair makes it stronger, not weaker.',
        },
        {
          question: 'Breaking one mole of H—H bonds requires 436 kJ. What happens when one mole of H—H bonds forms from separate H atoms?',
          options: [
            '436 kJ of energy is absorbed',
            '872 kJ is released, since two atoms join',
            '436 kJ of energy is released',
            'No energy change occurs, since electrons only move',
          ],
          correctAnswer: 2,
          explanation:
            'Forming a bond is the reverse of breaking it, so the same 436 kJ is released: bond formation is exothermic. Absorbing 436 kJ describes breaking the bond, doubling the value counts the two atoms instead of the one bond, and bond formation always involves an energy change.',
        },
        {
          question: 'Using the rule "bonds formed = 8 − valence electrons," how many bonds does oxygen typically form, and what bond holds O₂ together?',
          options: [
            'Two bonds; O₂ has a single bond',
            'One bond; O₂ has a single bond',
            'Three bonds; O₂ has a triple bond',
            'Two bonds; O₂ has a double bond',
          ],
          correctAnswer: 3,
          explanation:
            'Oxygen has 6 valence electrons, so it typically forms 8 − 6 = 2 bonds. In O₂ the two atoms share two pairs, which is a double bond. A single bond would leave each oxygen short of an octet, and three bonds is the pattern for nitrogen (N≡N).',
        },
      ],
    },

    // ── 4 ────────────────────────────────────────────────────────────────
    {
      title: 'Electronegativity and Bond Polarity',
      minutes: 5,
      goal: 'Use electronegativity differences to decide which bond is more polar and which atom carries the partial negative charge.',
      keyPoints: [
        'Electronegativity (χ) is an atom\'s pull on shared electrons. It increases left to right across a period and up a group; fluorine is highest. Pauling values: F 4.0, O 3.5, N 3.0, Cl 3.0, C 2.5, H 2.1, Na 0.9.',
        'Δχ = |χA − χB|. Identical atoms (Δχ = 0, as in Cl₂) share equally: nonpolar covalent. Different nonmetals share unequally: polar covalent. A metal and a nonmetal with a large Δχ: ionic.',
        'The more electronegative atom pulls the shared pair closer and carries δ⁻; the other atom carries δ⁺ (in H—Cl, δ⁺ on H and δ⁻ on Cl). The larger the Δχ, the more polar the bond.',
        'Bonding is a continuum. The common cutoffs (about 0.5 and 1.7) are guidelines, not hard lines: two nonmetals still form a covalent bond even with a large Δχ (H—F, Δχ = 1.9, is polar covalent).',
      ],
      showOnScreen: [
        'A periodic table with the electronegativity arrows (up and to the right) and the Pauling values listed above',
        'The continuum bar: nonpolar covalent ↔ polar covalent ↔ ionic, with H—H, H—Cl and NaCl placed on it',
        'H—Cl drawn with δ⁺ over H, δ⁻ over Cl, and a dipole arrow pointing toward Cl',
        'The worked ranking table (see worked example)',
      ],
      workedExample:
        'Rank by polarity and label δ⁻: C—Cl (|3.0 − 2.5| = 0.5, δ⁻ on Cl), N—H (|3.0 − 2.1| = 0.9, δ⁻ on N), O—H (|3.5 − 2.1| = 1.4, δ⁻ on O). Most polar: O—H. Contrast Na—Cl (|3.0 − 0.9| = 2.1), a metal with a nonmetal: ionic.',
      pitfalls: [
        'Putting δ⁻ on the less electronegative atom; the δ⁻ end is always the atom that pulls harder.',
        'Treating 1.7 as a sharp boundary; classify two nonmetals as covalent and think of polarity as a spectrum.',
      ],
      lessonParts: [4, 6],
      mcatTags: ['mcat-general-chemistry-mcat', 'mcat-general-chemistry-atomic-structure-mcat'],
      checkpoint: [
        {
          question: 'In an H—Cl bond, where does the shared electron pair spend more of its time?',
          options: [
            'Closer to Cl, giving Cl a partial negative charge',
            'Closer to H, giving H a partial negative charge',
            'Exactly midway, since both atoms are nonmetals',
            'Entirely on Cl, which forms separate H⁺ and Cl⁻ ions',
          ],
          correctAnswer: 0,
          explanation:
            'Chlorine (3.0) is more electronegative than hydrogen (2.1), so it pulls the shared pair closer and carries δ⁻ while hydrogen carries δ⁺. Equal sharing happens only between atoms of equal electronegativity, putting δ⁻ on hydrogen reverses the dipole, and H—Cl is a polar covalent bond between two nonmetals, not an ionic one.',
        },
        {
          question: 'Using χ values H = 2.1, C = 2.5, N = 3.0, O = 3.5 and F = 4.0, which bond is the most polar?',
          options: ['C—H', 'N—H', 'C—O', 'H—F'],
          correctAnswer: 3,
          explanation:
            'The differences are C—H 0.4, N—H 0.9, C—O 1.0 and H—F 1.9. The largest difference means the most unequal sharing, so H—F is the most polar, with δ⁻ on fluorine.',
        },
        {
          question: 'The H—F bond has Δχ = 1.9, above the 1.7 value often quoted for ionic bonds. How is the H—F bond best classified?',
          options: [
            'Ionic, since a Δχ above 1.7 means the electron transfers',
            'Nonpolar covalent, since hydrogen and fluorine are both nonmetals',
            'Polar covalent, since the cutoff is a guideline and both are nonmetals',
            'Metallic, since hydrogen sits in Group 1 with the alkali metals',
          ],
          correctAnswer: 2,
          explanation:
            'Hydrogen and fluorine are both nonmetals, so they share electrons, and the large Δχ makes that sharing very unequal: a strongly polar covalent bond. The 1.7 value marks a region on a continuum, not a switch to electron transfer. A Δχ of 1.9 is far from equal sharing, and hydrogen is a nonmetal despite its place in Group 1.',
        },
      ],
    },

    // ── 5 ────────────────────────────────────────────────────────────────
    {
      title: 'Metallic Bonding and Alloys',
      minutes: 5,
      goal: 'Explain conductivity, malleability and alloy hardness with the electron-sea model, and tell substitutional from interstitial alloys.',
      keyPoints: [
        'In a metal, cations sit in a lattice and their valence electrons are delocalized through the whole solid, an "electron sea." The metallic bond is the attraction between the cations and that sea, and it is non-directional.',
        'The mobile electrons carry charge, so metals conduct electricity as solids and as liquids.',
        'Metals are malleable and ductile: when layers of cations slide, the electron sea adjusts and keeps holding them, so the metal bends instead of shattering (unlike a brittle ionic solid).',
        'Metallic bonding is stronger with more valence electrons and smaller cations: Na (1 valence electron, melts 98 °C) < Mg (2, 650 °C) < Al (3, 660 °C).',
        'Alloys: in a substitutional alloy, atoms of similar size replace host atoms (brass: Zn in Cu); in an interstitial alloy, much smaller atoms fill the gaps (steel: C in Fe). The mixed atom sizes disrupt layer sliding, so alloys are harder than the pure metal, and they still conduct.',
      ],
      showOnScreen: [
        'A grid of + cations in a cloud of e⁻ (the electron sea)',
        'Two rows of cations sliding past each other with the sea still around them, next to an ionic lattice cracking after the same shift',
        'The Na / Mg / Al table: valence electrons and melting points',
        'Side-by-side lattices: substitutional (similar-size Zn replacing Cu) and interstitial (small C in the gaps between Fe)',
      ],
      workedExample:
        'Compare Na, Mg and Al across Period 3: valence electrons rise 1 → 2 → 3 and the cations shrink, so metallic bonding strengthens and the melting point climbs from 98 °C to 650 °C to 660 °C.',
      pitfalls: [
        'Saying metals conduct because they contain ions; it is the delocalized electrons that move.',
        'Mixing up the alloy types: substitutional = similar size, swapped in; interstitial = much smaller, in the gaps.',
      ],
      lessonParts: [3],
      mcatTags: [],
      checkpoint: [
        {
          question: 'What holds the atoms of a solid metal together?',
          options: [
            'Cations attracted to delocalized electrons',
            'Electron pairs shared between neighboring atoms',
            'Electrons transferred from some metal atoms to others',
            'Attractions between partial charges on metal molecules',
          ],
          correctAnswer: 0,
          explanation:
            'In the electron-sea model, metal cations sit in a lattice surrounded by valence electrons that move through the whole solid, and the attraction between the cations and those electrons is the metallic bond. Shared pairs between two specific atoms describe a covalent bond, transfer describes an ionic bond, and metals are not made of molecules with partial charges.',
        },
        {
          question: 'Which metal would you expect to have the strongest metallic bonding?',
          options: [
            'Na (1 valence electron)',
            'K (1 valence electron)',
            'Mg (2 valence electrons)',
            'Al (3 valence electrons)',
          ],
          correctAnswer: 3,
          explanation:
            'Metallic bonding gets stronger with more delocalized electrons per atom and with smaller cations. Aluminum gives 3 electrons to the sea and has the smallest cation of these, so its bonding is strongest. Magnesium is next, and sodium and potassium, with 1 electron each and larger cations, are weakest.',
        },
        {
          question: 'In steel, small carbon atoms sit in the gaps between iron atoms. What type of alloy is steel, and why is it harder than pure iron?',
          options: [
            'Substitutional; each carbon atom replaces one iron atom',
            'Interstitial; the carbon atoms add electrons to the sea',
            'Interstitial; the carbon atoms disrupt layer sliding',
            'Substitutional; carbon forms ionic bonds that lock the layers',
          ],
          correctAnswer: 2,
          explanation:
            'Atoms much smaller than the host that fill the gaps make an interstitial alloy. The carbon atoms break up the regular rows of iron, so the layers cannot slide past each other as easily, which makes steel harder. Replacing host atoms describes a substitutional alloy such as brass, and the hardness comes from the disrupted layers, not from extra electrons or ionic bonds.',
        },
      ],
    },

    // ── 6 ────────────────────────────────────────────────────────────────
    {
      title: 'Identify the Solid From Its Properties',
      minutes: 5,
      goal: 'Classify an unknown solid as ionic, molecular, metallic or covalent network from its melting point, hardness and conductivity.',
      keyPoints: [
        'Four kinds of solid: ionic (cations and anions in a lattice), molecular (separate molecules), metallic (cations in an electron sea), and covalent network (atoms covalently bonded throughout, with no separate molecules).',
        'Conductivity sorts them: metals conduct as solids and as liquids; ionic compounds conduct only when melted or dissolved, because only then can the ions move; molecular and covalent network solids generally do not conduct.',
        'Melting points: ionic and covalent network solids are high, metals vary but are often high, and molecular solids are low (CH₄ melts at −182 °C; CO₂ sublimes at −78 °C).',
        'Covalent network solids (diamond 3550 °C, SiO₂ 1710 °C) are very hard and have very high melting points because melting breaks covalent bonds. Graphite is the exception that conducts: electrons are delocalized along its layers.',
        'Mechanical clue: ionic solids are hard but brittle; metals are malleable and ductile.',
      ],
      showOnScreen: [
        'The comparison table: particles, melting point, hardness, conductivity as solid, conductivity as liquid or solution, for all four solid types',
        'A flowchart: conducts as a solid? → metal; conducts only when melted or dissolved? → ionic; no conduction and low melting point? → molecular; no conduction and very high melting point? → covalent network',
        'Diamond (each C bonded to 4 others) beside graphite (flat layers with delocalized electrons)',
      ],
      workedExample:
        'Classify four unknowns with the flowchart: A melts at 801 °C, is brittle, conducts only when melted (ionic, NaCl); B melts at 1085 °C, is ductile, conducts as a solid (metallic, Cu); C sublimes at −78 °C and never conducts (molecular, CO₂); D melts at 1710 °C, is very hard, never conducts (covalent network, SiO₂).',
      pitfalls: [
        'Saying ionic solids conduct; they conduct only once melted or dissolved.',
        'Assuming every covalent substance melts low; covalent network solids have some of the highest melting points known.',
      ],
      lessonParts: [5, 6, 7],
      mcatTags: ['mcat-general-chemistry-mcat', 'mcat-general-chemistry-thermodynamics-mcat'],
      checkpoint: [
        {
          question: 'A solid melts above 3000 °C, is extremely hard, and does not conduct electricity as a solid or as a liquid. Which type of solid is it?',
          options: ['An ionic solid', 'A metallic solid', 'A molecular solid', 'A covalent network solid'],
          correctAnswer: 3,
          explanation:
            'A very high melting point with great hardness means strong bonds run through the whole structure, and conducting in neither state rules out metals (conduct as solids) and ionic compounds (conduct when melted). Molecular solids melt at low temperatures, so this is a covalent network solid, like diamond.',
        },
        {
          question: 'Which observation would distinguish a metal from an ionic solid?',
          options: [
            'Only the metal conducts as a solid',
            'Only the ionic solid conducts once it is melted',
            'Only the metal has a melting point above 500 °C',
            'Only the ionic solid can be hammered into thin sheets',
          ],
          correctAnswer: 0,
          explanation:
            'A metal\'s delocalized electrons let it conduct while solid, but an ionic solid\'s ions are locked in place until it melts or dissolves. Both conduct when melted, both can melt above 500 °C, and it is the metal, not the brittle ionic solid, that can be hammered into sheets.',
        },
        {
          question: 'Graphite conducts electricity but diamond does not, although both are pure carbon. What explains the difference?',
          options: [
            'Graphite has ions that move between its layers, while diamond\'s ions are fixed',
            'Graphite is a metal, while diamond is a covalent network solid',
            'Graphite has electrons delocalized along its layers, while diamond\'s are all held in C—C bonds',
            'Diamond\'s very high melting point stops its electrons from moving',
          ],
          correctAnswer: 2,
          explanation:
            'Graphite is a covalent network of flat layers in which some electrons are delocalized along each layer, and those mobile electrons carry current. In diamond every valence electron is held in a localized C—C bond, so nothing is free to move. Neither form of carbon contains ions or is a metal, and melting point does not decide conductivity.',
        },
      ],
    },

    // ── 7 ────────────────────────────────────────────────────────────────
    {
      title: 'Bonds vs. Forces Between Molecules',
      minutes: 4,
      goal: 'Explain melting-point differences by naming what is actually overcome, and spot compounds that contain both ionic and covalent bonds.',
      keyPoints: [
        'Melting a molecular substance separates whole molecules: it overcomes the weak intermolecular forces between them and leaves the covalent bonds inside each molecule intact (HCl, CH₄, PCl₃).',
        'Melting an ionic solid overcomes the Coulombic attractions throughout the lattice, and melting a covalent network solid breaks covalent bonds. That is why NaCl and diamond melt high and molecular substances melt low.',
        '"Ionic bonds are always stronger than covalent bonds" is a misconception: the N≡N bond (945 kJ/mol) is stronger than the lattice energy of CsCl (657 kJ/mol), and covalently bonded diamond (3550 °C) melts far above NaCl (801 °C).',
        'Polyatomic ions contain covalent bonds inside the ion and are held to the other ions by ionic attraction, so compounds such as NH₄Cl, Na₂SO₄ and KNO₃ have both kinds of bond.',
        'On the AP exam, name the particles and the attraction: "Mg²⁺ and O²⁻ attract more strongly than Na⁺ and Cl⁻ because of their larger charges and smaller radii," not "ionic bonds are strong."',
      ],
      showOnScreen: [
        'Two sketches of melting: solid HCl molecules moving apart with each H—Cl bond intact, and an ionic lattice coming apart into ions',
        'NH₄⁺Cl⁻ drawn with the covalent N—H bonds inside the ammonium ion and an ionic attraction to Cl⁻',
        'A "Say this, not that" box with two or three AP-style explanation sentences',
      ],
      workedExample:
        'PCl₃ melts at −94 °C and BaO at 1923 °C. PCl₃ is molecular: melting overcomes weak forces between PCl₃ molecules and breaks no P—Cl bonds. BaO is ionic: melting overcomes the strong Coulombic attraction between Ba²⁺ and O²⁻ throughout the lattice.',
      pitfalls: [
        'Saying covalent bonds break when a molecular substance melts or boils.',
        'Labelling a compound that contains a polyatomic ion as purely ionic or purely covalent.',
      ],
      lessonParts: [5, 7],
      mcatTags: ['mcat-general-chemistry-mcat'],
      checkpoint: [
        {
          question: 'PCl₃ melts at −94 °C. What is overcome when solid PCl₃ melts?',
          options: [
            'Weak attractions between PCl₃ molecules',
            'The covalent P—Cl bonds inside each molecule',
            'Coulombic attractions between P³⁺ and Cl⁻ ions',
            'The sea of delocalized electrons around P atoms',
          ],
          correctAnswer: 0,
          explanation:
            'PCl₃ is a molecular substance, so melting only moves whole molecules apart by overcoming the weak forces between them; the P—Cl bonds stay intact, which is why so little energy is needed. Phosphorus and chlorine are both nonmetals, so there are no P³⁺ ions, and there is no electron sea in a molecular solid.',
        },
        {
          question: 'Which compound contains both ionic and covalent bonds?',
          options: ['KBr', 'K₂SO₄', 'SO₃', 'MgCl₂'],
          correctAnswer: 1,
          explanation:
            'K₂SO₄ is made of K⁺ ions and sulfate ions, SO₄²⁻, held together by ionic attraction, while the S and O atoms inside each sulfate ion are joined by covalent bonds. KBr and MgCl₂ contain only monatomic ions (ionic only), and SO₃ is a molecule of two nonmetals (covalent only).',
        },
        {
          question: 'Which observation best refutes the claim "ionic bonds are always stronger than covalent bonds"?',
          options: [
            'NaCl dissolves in water, so its lattice must be fairly weak',
            'CH₄ melts at −182 °C, so its C—H bonds must be weak',
            'Metals bend when struck instead of shattering like salts',
            'Diamond, held only by covalent bonds, melts far above NaCl',
          ],
          correctAnswer: 3,
          explanation:
            'Melting diamond (3550 °C) breaks covalent bonds, and it takes far more energy than separating the ions of NaCl (801 °C), so some covalent bonding is stronger than some ionic bonding. Methane\'s low melting point reflects weak forces between molecules, not weak C—H bonds; dissolving involves the water–ion attractions; and malleability is about metallic bonding.',
        },
      ],
    },
  ],
}
