/**
 * MCAT Full-Length Form 3 — Chemical & Physical Foundations, file A
 * (passages 1–5, 22 questions, plus 8 discrete items).
 *
 * Built to the 2026-09 AAMC-representativeness brief: 400–600-word passages,
 * a mix of experiment and information passages, keys that require using the
 * passage rather than matching its wording, and position/length-balanced
 * options. Explanations reference options by CONTENT, never by letter.
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL3_CHEM_PHYS_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. PHYSICS (experiment, chart) — Pressure–volume loops, stroke work, Laplace
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-cp-a-01',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Stroke Work and Wall Stress in the Left Ventricle',
    passageText:
      'Each time the left ventricle contracts, it does mechanical work on the blood that it ejects into the aorta. For a fluid-filled chamber whose volume changes, the work done is $W = \\int P\\,dV$. If ventricular pressure is plotted against ventricular volume over one heartbeat, the trace forms a closed loop, and the area enclosed by the loop equals the net work done on the blood during that beat, called the stroke work.\n\nThe loop has four segments. Filling begins at the smallest volume of the cycle, and the ventricle expands at low pressure until the mitral valve closes at the end-diastolic volume (EDV). Pressure then climbs steeply with no change in volume until it exceeds aortic pressure and the aortic valve opens. During ejection, volume falls while pressure remains high. When the aortic valve closes, pressure drops, again at constant volume, back to the filling pressure. The difference between the EDV and the end-systolic volume (ESV) is the stroke volume. Because ejection occurs at a pressure far above the filling pressure, the loop is roughly rectangular, and stroke work is approximately the stroke volume multiplied by the difference between the mean ejection pressure and the mean filling pressure. In the units used clinically, 1 mmHg·mL equals $1.33 \\times 10^{-4}$ J.\n\nThe force the muscle must develop to produce a given pressure depends on the geometry of the chamber. For a thin-walled sphere of radius $r$ and wall thickness $h$, the law of Laplace gives the stress in the wall as $\\sigma = Pr/2h$. Myocardial oxygen consumption rises with wall stress as well as with the external work performed. In chronic pressure overload, as in long-standing hypertension, the wall thickens; in chronic volume overload, as with a leaking valve, the chamber enlarges.\n\nInvestigators examined stroke work in anesthetized adult pigs, whose hearts are similar in size to human hearts. A catheter in the left ventricle recorded pressure and volume on every beat, and the heart was paced at a constant rate. In each run, an inflatable cuff around the inferior vena cava was tightened for about 10 s, reducing venous return; over successive beats this produced a family of loops with progressively smaller EDVs, and the area of each loop was measured. Runs were performed under baseline conditions and again during a steady intravenous infusion of dobutamine, a $\\beta_1$-adrenergic agonist. Mean arterial pressure was similar in the two conditions. Stroke work is plotted against EDV at five representative volumes in Figure 1.\n\nAccording to the Frank–Starling mechanism, a ventricle that is filled to a larger volume before it contracts ejects a larger volume, because stretch brings the contractile filaments of each fiber closer to their optimal overlap. The investigators reasoned that the relation between stroke work and EDV reflects both how much the ventricle is filled and how forcefully it contracts at any given filling, and that the two influences could be distinguished by examining how the relationship changes from one condition to the other.',
    chart: {
      title: 'Figure 1. Stroke work versus end-diastolic volume during brief vena cava occlusion',
      kind: 'line',
      xLabel: 'End-diastolic volume',
      xUnit: 'mL',
      yLabel: 'Stroke work',
      yUnit: 'J',
      xValues: [70, 90, 110, 130, 150],
      yValues: [0.4, 0.6, 0.8, 1.0, 1.2],
      seriesLabel: 'Baseline',
      comparisonSeries: [{ label: 'Dobutamine infusion', yValues: [0.6, 0.9, 1.2, 1.5, 1.8] }],
    },
    questions: [
      {
        question: 'During the baseline run, the beat with an EDV of 130 mL had a mean ejection pressure 100 mmHg higher than its mean filling pressure. The ESV of that beat was closest to:',
        options: ['17 mL', '55 mL', '75 mL', '113 mL'],
        correctAnswer: 1,
        explanation:
          'Figure 1 gives a baseline stroke work of 1.00 J at 130 mL, which is $1.00/(1.33 \\times 10^{-4}) \\approx 7500$ mmHg·mL; dividing by the 100 mmHg pressure difference gives a stroke volume of 75 mL, so ESV = 130 − 75 = 55 mL. The 75 mL value is the stroke volume itself, not the volume left in the ventricle. The 113 mL value is the stroke volume computed from the dobutamine curve (1.50 J), and 17 mL is the ESV that would follow from that same misreading.',
        skill: '4A work as area under a P–V curve (data interpretation)',
      },
      {
        question: 'Which description of the effect of dobutamine is supported by Figure 1?',
        options: [
          'It shifted the relationship toward larger EDVs without changing its slope',
          'It added the same amount of stroke work at each EDV that was tested',
          'It increased stroke work only at the two largest EDVs that were tested',
          'It made the relationship steeper without moving its extrapolated volume intercept',
        ],
        correctAnswer: 3,
        explanation:
          'At baseline stroke work rises 0.20 J per 20 mL (0.010 J/mL), and with dobutamine it rises 0.30 J per 20 mL (0.015 J/mL); extending each line to zero stroke work gives about 30 mL in both cases, so the drug steepened the relation without moving its intercept, the signature of greater contractility at every filling volume. A shift toward larger EDVs would displace the line sideways with an unchanged slope. The added work is not constant, growing from 0.20 J at 70 mL to 0.60 J at 150 mL. Stroke work is higher with dobutamine at all five volumes, not only the largest two.',
        skill: '4A stroke work (data interpretation)',
      },
      {
        question: 'Ventricular pressure rises most rapidly in the interval just before the aortic valve opens. During this interval, the work done by the ventricle on the blood is:',
        options: [
          'zero, because the volume of the ventricle does not change',
          'at its maximum, because the pressure is rising at its fastest rate',
          'negative, because the pressure of the blood is increasing',
          'equal to the rise in pressure multiplied by the stroke volume',
        ],
        correctAnswer: 0,
        explanation:
          'Pressure–volume work is $\\int P\\,dV$; in the isovolumetric contraction phase both valves are closed and the volume is constant, so no work is done on the blood no matter how fast pressure rises. A rapid rise in pressure does not by itself constitute work, which requires a change in volume. The sign of the work depends on whether volume decreases or increases, not on whether pressure is rising, and here there is no volume change at all. The product of pressure rise and stroke volume confuses this phase with ejection, when the blood actually leaves the chamber.',
        skill: '4A pressure–volume work',
      },
      {
        question: 'Over several years, a patient’s left ventricle dilates so that its radius increases by 50% while its wall thins from 1.2 cm to 0.9 cm. If peak systolic pressure is unchanged, peak wall stress becomes how many times its original value?',
        options: ['1.1', '1.5', '2.0', '3.0'],
        correctAnswer: 2,
        explanation:
          'By the law of Laplace, $\\sigma = Pr/2h$, so at constant pressure stress is proportional to $r/h$: the factor is $1.5 \\times (1.2/0.9) = 1.5 \\times 1.33 = 2.0$. The value 1.5 accounts for the larger radius but ignores the thinner wall. The value 1.1 multiplies by the thickness ratio (0.75) instead of dividing by it. The value 3.0 treats stress as proportional to the square of the radius.',
        skill: '4B law of Laplace',
      },
      {
        question: 'What was the main advantage of producing the range of EDVs by briefly tightening the vena cava cuff, rather than by comparing pigs whose hearts had different resting volumes?',
        options: [
          'It raised arterial pressure in step with filling, so afterload stayed constant',
          'It varied the filling of one heart whose contractile state stayed the same',
          'It raised the EDV above its resting value, so the whole curve could be sampled',
          'It briefly interrupted coronary flow, so oxygen supply could not limit the heart',
        ],
        correctAnswer: 1,
        explanation:
          'A few seconds of reduced venous return changes only how much one heart fills, so differences in stroke work among its loops reflect preload while contractility, heart size and other animal-to-animal differences are held fixed. Reducing venous return lowers, rather than raises, arterial pressure, so it does not hold afterload in step with filling. The cuff reduces filling, so every loop in a run has an EDV at or below the resting value. The cuff is on the vena cava, not the coronary circulation, so it does not interrupt coronary flow.',
        skill: '4A Frank–Starling mechanism (research design)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. GENERAL CHEMISTRY (information) — Intermolecular forces, log P, permeability
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-cp-a-02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Intermolecular Forces and the Absorption of Oral Drugs',
    passageText:
      'Most drugs taken by mouth reach the bloodstream by passive diffusion across the epithelial cells that line the small intestine. To do so, a molecule must first dissolve in the aqueous fluid of the gut, then leave water and enter the hydrocarbon interior of the plasma membrane, cross it, and return to an aqueous phase on the far side. The two requirements pull in opposite directions. Dissolution in water is favored by polar groups that can donate or accept hydrogen bonds and by ionizable groups that carry a charge. Entry into the membrane interior is favored by the absence of such groups, because every hydrogen bond a molecule forms with water must be broken before the molecule can move into a region that offers no partners to replace it.\n\nChemists summarize this balance with the partition coefficient $P$, the ratio of the equilibrium concentration of a compound in 1-octanol to its concentration in water after the two immiscible liquids have been shaken together. The value is usually reported as $\\log P$. Octanol has a hydroxyl group at one end of an eight-carbon chain, and water-saturated octanol is a reasonable stand-in for the membrane interface. A compound with $\\log P = 2$ is 100 times more concentrated in octanol than in water at equilibrium, and a negative value indicates a preference for water. Most oral drugs have values between about 0 and 5. Compounds far above this range are so poorly soluble in water that little dissolves in the gut, and compounds far below it rarely enter membranes.\n\nA partition coefficient refers to the neutral form of a compound. For an ionizable drug, the fraction present in the neutral form depends on pH, and the charged form is essentially excluded from octanol and from the membrane interior, because the ion–dipole interactions that stabilize it in water would have to be sacrificed. The ratio of total concentrations observed at a particular pH is the distribution coefficient, $D$, which is smaller than $P$ for any compound that is partly ionized at that pH.\n\nHydrogen-bond donors are more costly than acceptors. An N–H or O–H group interacts strongly with the oxygen atoms of water, and a molecule with many such groups crosses membranes slowly even when its overall $\\log P$ is favorable. Medicinal chemists therefore try to keep the number of donors small, sometimes by designing molecules in which a donor is tied up in an internal hydrogen bond with a nearby acceptor.\n\nBefore a drug can dissolve at all, however, its solid form must come apart. In a crystal, molecules are held in place by hydrogen bonds, dipole–dipole attractions and dispersion forces, the same kinds of interactions that later hold them in solution, and dissolution requires that the lattice be disrupted. Many drug compounds can crystallize in more than one arrangement; these polymorphs have identical molecular structures but different packing. The melting point of a solid is a practical indicator of how strongly its molecules are held in the lattice, and a manufacturer who changes polymorphs may change how quickly and how completely a tablet dissolves.',
    questions: [
      {
        question: 'A chemist wants to measure $\\log P$, as defined in the passage, for an amine drug whose conjugate acid has a $\\text{p}K_a$ of 9.0. The aqueous phase used in the measurement should be buffered at:',
        options: [
          'pH 3.0, where nearly all of the drug is protonated',
          'pH 7.4, where the drug is under plasma conditions',
          'pH 9.0, where the two forms are present equally',
          'pH 11.0, where nearly all of the drug is unprotonated',
        ],
        correctAnswer: 3,
        explanation:
          '$\\log P$ describes the partitioning of the neutral form, so the measurement must be made where essentially all of the amine is unprotonated; two units above the $\\text{p}K_a$ the neutral base is about 99% of the total, and the measured ratio approaches $P$. At pH 3.0 the drug is almost entirely the charged conjugate acid, which stays in water and gives a ratio far below $P$. At pH 7.4 the drug is still mostly protonated, so the result is a physiologically useful $D$ rather than $P$. At pH 9.0 only half the drug is neutral, so the measured ratio is roughly half of $P$.',
        skill: '5A partition and ionization (research design)',
      },
      {
        question: 'A drug molecule consisting only of carbon and hydrogen atoms moves from water into octanol. The attractive forces between this molecule and the hydrocarbon chains of octanol are mainly:',
        options: ['hydrogen bonds', 'ion–dipole interactions', 'London dispersion forces', 'dipole–dipole interactions'],
        correctAnswer: 2,
        explanation:
          'A hydrocarbon has no significant permanent dipole and no charge, and the hydrocarbon chain of octanol is likewise nonpolar, so the attraction between them arises from temporary, fluctuating dipoles, that is, London dispersion forces. Hydrogen bonds require an H bonded to N, O or F, which the drug lacks. Ion–dipole interactions require an ion, and neither partner is charged. Dipole–dipole interactions require permanent dipoles, which C–H bonds are too weakly polar to provide.',
        skill: '5B intermolecular forces',
      },
      {
        question: 'A drug crystallizes in two polymorphs: Form I melts at 185 °C, and Form II melts at 150 °C. Compared with Form I, Form II is most likely to:',
        options: [
          'dissolve to a greater extent in water, because its lattice holds its molecules less strongly',
          'dissolve to a lesser extent in water, because its lattice packs its molecules less efficiently',
          'partition more strongly into octanol once dissolved, because its molecules are less polar',
          'dissolve to the same extent in water, because the molecules of both forms are identical',
        ],
        correctAnswer: 0,
        explanation:
          'The lower melting point of Form II indicates weaker forces holding its molecules in the lattice, so less energy is needed to pull them into solution and its solubility is higher. Less efficient packing weakens a lattice and therefore raises solubility rather than lowering it. Once dissolved, molecules from either polymorph are identical, so their partitioning into octanol is the same. Although the molecules are identical, solubility is an equilibrium between solution and a particular solid, and different solids give different solubilities.',
        skill: '5B intermolecular forces and phase changes',
      },
      {
        question: 'A candidate drug is neutral at intestinal pH and has $\\log P = 2$, but it crosses membranes slowly. Its structure includes a benzene ring, a secondary amide and a methyl ester. Which single change would most likely increase its rate of passive diffusion across the intestinal epithelium?',
        options: [
          'Adding a hydroxyl group onto the benzene ring',
          'Replacing the amide N–H with an N–CH₃ group',
          'Hydrolyzing the methyl ester to a carboxylic acid',
          'Converting the methyl ester into a primary amide',
        ],
        correctAnswer: 1,
        explanation:
          'Methylating the amide nitrogen removes a hydrogen-bond donor without adding a charge, which lowers the cost of leaving water and speeds entry into the membrane. A phenolic hydroxyl adds a new donor and lowers $\\log P$. A carboxylic acid is largely ionized at intestinal pH, and the charged form is excluded from the membrane interior. A primary amide adds two N–H donors in place of an ester that had none.',
        skill: '5B hydrogen bonding and membrane permeability',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. BIOCHEMISTRY (experiment, tables) — Edman degradation, digests, MS, charge
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-cp-a-03',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Sequencing an Antimicrobial Peptide from Frog Skin',
    passageText:
      'Amphibian skin secretions contain short peptides that kill bacteria, and several are being studied as leads for new antibiotics. Their net positive charge is thought to direct them to bacterial membranes, which are rich in anionic lipids, rather than to the largely neutral outer surface of animal cell membranes. Researchers purified one such peptide, designated peptide P, by reversed-phase chromatography and determined its structure by combining chemical and enzymatic methods.\n\nFirst, a sample was heated in 6 M HCl at 110 °C for 24 h to hydrolyze its peptide bonds, and the free amino acids were separated and quantified. Composition alone reveals which residues are present but nothing about their order. Peptide P contained one residue each of Arg, Glu, Gly, Leu, Lys, Phe, Ser and Tyr.\n\nSecond, the intact peptide was subjected to Edman degradation. In each cycle, phenyl isothiocyanate reacts under mildly basic conditions with the free α-amino group at the N-terminus. Treatment with anhydrous acid then releases the N-terminal residue as a derivative that is identified by chromatography, leaving a peptide one residue shorter whose new N-terminal amino group is available for the next cycle. Because a small fraction of the chains fails to react in each cycle, the signal gradually becomes contaminated by residues from earlier positions, and the method is practical for only a few dozen cycles. Four cycles on peptide P released, in order, Ser, Lys, Phe and Glu.\n\nThird, separate samples were digested with trypsin, which hydrolyzes peptide bonds on the carboxyl side of Lys and Arg residues, and with chymotrypsin, which hydrolyzes bonds on the carboxyl side of the aromatic residues Phe, Tyr and Trp. The fragments from each digest were separated, the composition of each was determined, and each was analyzed by electrospray mass spectrometry. The spectrometer reports the mass-to-charge ratio of the singly protonated ion, [M + H]⁺, whose mass is 1 Da greater than that of the neutral peptide. The mass of a neutral peptide equals the sum of the masses of its residues plus 18 Da, for the water that completes the free amino group at one end of the chain and the free carboxyl group at the other. Table 1 lists the major fragments from each digest; both digests also contained minor products, formed in small amounts, that are not listed.\n\nFinally, the researchers estimated the charge that peptide P carries under physiological conditions, using the typical $\\text{p}K_a$ values of peptide ionizable groups listed in Table 2.',
    figure:
      '**Table 1. Major fragments from enzymatic digestion of peptide P**\n\n| Digest | Fragment | Composition | [M + H]⁺ (m/z) |\n|---|---|---|---|\n| Trypsin | T1 | Arg, Glu, Phe | 451 |\n| Trypsin | T2 | Gly, Leu, Tyr | 352 |\n| Trypsin | T3 | Lys, Ser | 234 |\n| Chymotrypsin | C1 | Leu | 132 |\n| Chymotrypsin | C2 | Lys, Phe, Ser | 381 |\n| Chymotrypsin | C3 | Arg, Glu, Gly, Tyr | 524 |\n\n**Table 2. Typical pKa values of ionizable groups in peptides**\n\n| Group | pKa |\n|---|---|\n| C-terminal α-carboxyl | 3.1 |\n| Glu side chain | 4.1 |\n| N-terminal α-amino | 8.0 |\n| Tyr side chain | 10.1 |\n| Lys side chain | 10.5 |\n| Arg side chain | 12.5 |',
    questions: [
      {
        question: 'What is the amino acid sequence of peptide P, written from the N-terminus to the C-terminus?',
        options: [
          'Ser-Lys-Phe-Glu-Arg-Gly-Tyr-Leu',
          'Ser-Lys-Phe-Glu-Arg-Gly-Leu-Tyr',
          'Ser-Lys-Phe-Glu-Arg-Tyr-Gly-Leu',
          'Ser-Lys-Phe-Glu-Arg-Leu-Tyr-Gly',
        ],
        correctAnswer: 0,
        explanation:
          'Edman degradation fixes Ser-Lys-Phe-Glu, and tryptic fragment T1 (Arg, Glu, Phe) must be Phe-Glu-Arg, placing Arg fifth; the remaining Gly, Leu and Tyr form T2, which does not end in Lys or Arg and so is the C-terminal fragment. Chymotryptic fragment C3 (Arg, Glu, Gly, Tyr) must end in Tyr, giving Glu-Arg-Gly-Tyr, and C1 is free Leu, so the chain ends Gly-Tyr-Leu. Ending in Gly-Leu-Tyr is consistent with trypsin but would give a five-residue chymotryptic fragment and no free Leu. Ending in Tyr-Gly-Leu would give chymotryptic fragments Glu-Arg-Tyr and Gly-Leu, and ending in Leu-Tyr-Gly would give Glu-Arg-Leu-Tyr and free Gly, neither of which appears in Table 1.',
        skill: '5D peptide sequencing',
      },
      {
        question: 'At pH 7.4, the net charge of peptide P is closest to:',
        options: ['0', '+1', '+2', '+3'],
        correctAnswer: 1,
        explanation:
          'At pH 7.4 the Lys and Arg side chains are fully protonated (+2), the N-terminal amino group ($\\text{p}K_a$ 8.0) is about 80% protonated (about +0.8), the Glu side chain and C-terminal carboxyl are fully deprotonated (−2), and the Tyr side chain is neutral, for a net charge near +0.8, or about +1. A charge of +3 counts only the three basic groups and ignores the two carboxylates. A charge of +2 omits one of the two carboxylates. A charge of 0 treats the N-terminal amino group as uncharged, although pH 7.4 is below its $\\text{p}K_a$.',
        skill: '5D amino acid charge and pKa',
      },
      {
        question: 'The chymotrypsin digest contained a minor product whose [M + H]⁺ ion appeared at m/z 886. This product most likely arose because chymotrypsin:',
        options: [
          'cleaved the bond after Phe but did not cleave the bond after Tyr',
          'cleaved neither the bond after Phe nor the bond after Tyr',
          'cleaved an additional bond, after Arg, as well as both usual bonds',
          'cleaved the bond after Tyr but did not cleave the bond after Phe',
        ],
        correctAnswer: 3,
        explanation:
          'A fragment spanning C2 and C3 has a neutral mass of 380 + 523 − 18 = 885 Da, because joining two fragments removes one water, so its [M + H]⁺ is 886; this is Ser-Lys-Phe-Glu-Arg-Gly-Tyr, produced when the bond after Tyr is cut but the bond after Phe is not. Missing only the cut after Tyr would give Glu-Arg-Gly-Tyr-Leu, at 523 + 131 − 18 + 1 = 637. Missing both cuts leaves the intact peptide, at 999. An extra cleavage would produce fragments smaller than those in Table 1, not a larger one.',
        skill: '5D peptide mass spectrometry (data interpretation)',
      },
      {
        question: 'Trypsin binds the side chain of the residue on the N-terminal side of the bond it cleaves in a deep pocket of the enzyme. Which residue at the base of this pocket best accounts for the specificity of trypsin described in the passage?',
        options: ['Lysine', 'Leucine', 'Aspartate', 'Glutamine'],
        correctAnswer: 2,
        explanation:
          'Trypsin cleaves after Lys and Arg, whose side chains are positively charged at physiological pH, so a negatively charged aspartate at the base of the pocket forms a favorable ionic interaction with them. A lysine would carry a positive charge and repel the substrate side chains. A leucine would create a nonpolar pocket suited to hydrophobic side chains, the kind of pocket found in enzymes that prefer bulky nonpolar residues. A glutamine is polar but uncharged and cannot supply the electrostatic complementarity that selects for Lys and Arg.',
        skill: '5D amino acid side-chain properties',
      },
      {
        question: 'A second peptide from the same secretion has the same amino acid composition as peptide P, but its first Edman cycle released no amino acid derivative, and its [M + H]⁺ ion appeared at m/z 1041. Given the mass changes produced by common modifications (acetylation, +42 Da; C-terminal amidation, −1 Da; head-to-tail cyclization, −18 Da; phosphorylation, +80 Da), the second peptide most likely:',
        options: [
          'carries a phosphate on the hydroxyl group of its Tyr side chain',
          'is cyclized so that it has neither a free N- nor a free C-terminus',
          'carries an acetyl group on the amino group of its N-terminal residue',
          'carries an amide in place of the carboxyl group at its C-terminus',
        ],
        correctAnswer: 2,
        explanation:
          'Peptide P itself has [M + H]⁺ = 451 + 352 + 234 − 2(19) = 999, so the second peptide is 42 Da heavier, matching acetylation, and an acetylated N-terminus lacks the free α-amino group that phenyl isothiocyanate must react with, which explains the empty first cycle. Phosphorylation of Tyr would give m/z 1079 and would leave the N-terminus free. Head-to-tail cyclization would also block Edman degradation but would lower the ion to m/z 981. C-terminal amidation would give m/z 998 and would not affect the N-terminus.',
        skill: '5D peptide analysis (Edman degradation and mass)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. ORGANIC CHEMISTRY (experiment, table) — Selective oxidation and reduction
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-cp-a-04',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Selective Reductions and Oxidations of a Keto Ester',
    passageText:
      'Many steps in the synthesis of drugs and natural products interconvert alcohols, aldehydes, ketones, carboxylic acids and esters. In organic chemistry, a carbon atom is said to be oxidized when it gains bonds to more electronegative atoms such as oxygen or loses bonds to hydrogen, and to be reduced when the reverse occurs. Because a single molecule often contains several such groups, the choice of reagent determines which of them reacts.\n\nThe hydride reagents sodium borohydride (NaBH₄) and lithium aluminum hydride (LiAlH₄) both deliver a hydride ion to an electrophilic carbonyl carbon, and the resulting alkoxide is then protonated to give an alcohol. The Al–H bond is more polarized than the B–H bond, so LiAlH₄ is by far the stronger hydride donor; it reacts violently with water and alcohols, must be used in dry ether, and is followed by a separate acidic workup. NaBH₄ is mild enough to be used in ethanol or even in water.\n\nChromium(VI) reagents are classic oxidants for alcohols. Pyridinium chlorochromate (PCC) is used in anhydrous dichloromethane. The Jones reagent is chromium trioxide dissolved in aqueous sulfuric acid and is added to a solution of the alcohol in acetone. With either reagent, the oxygen of the alcohol first bonds to chromium, and a base then removes the hydrogen from the carbon bearing that oxygen, forming a C=O bond as chromium is reduced. Tertiary alcohols, which have no such hydrogen, are not oxidized.\n\nWhen one group in a molecule must be changed while a more reactive group is left untouched, chemists can temporarily convert the more reactive group into a protected form, carry out the desired reaction, and then restore the original group. A ketone, for example, can be heated with ethylene glycol (HOCH₂CH₂OH) and a trace of acid while the water formed is removed, which converts the ketone into a cyclic acetal.\n\nA research group needed 4-oxocyclohexane-1-carbaldehyde, a building block that contains both a ketone and an aldehyde, and planned to make it from the inexpensive keto ester ethyl 4-oxocyclohexane-1-carboxylate (compound K, C₉H₁₄O₃). The group first explored the reactivity of K and of its products (Table 1). Each product was purified and characterized by its molecular formula, obtained by high-resolution mass spectrometry, and by the positions of its principal infrared absorptions. In these spectra, a broad band near 3400 cm⁻¹ indicates an O–H stretch; the C=O stretches of ketones, aldehydes, esters and carboxylic acids appear between about 1700 and 1740 cm⁻¹; and a weak band near 2720 cm⁻¹ is characteristic of the C–H stretch of an aldehyde.',
    figure:
      '**Table 1. Reactions of keto ester K and its products**\n\n| Exp. | Start | Reagents (in order) | Product | Formula | IR bands (cm⁻¹) | Yield |\n|---|---|---|---|---|---|---|\n| 1 | K | NaBH₄, ethanol, 0 °C | L | C₉H₁₆O₃ | 3420 (broad), 1732 | 92% |\n| 2 | K | LiAlH₄ (excess), dry ether; then H₃O⁺ | M | C₇H₁₄O₂ | 3350 (broad) | 88% |\n| 3 | K | (i) HOCH₂CH₂OH, TsOH, heat; (ii) LiAlH₄, dry ether; (iii) H₃O⁺, H₂O, heat | N | C₇H₁₂O₂ | 3410 (broad), 1712 | 71% |\n| 4 | N | PCC, CH₂Cl₂ | Q | C₇H₁₀O₂ | 2720 (weak), 1726, 1712 | 83% |\n| 5 | N | CrO₃, H₂SO₄, H₂O, acetone | R | C₇H₁₀O₃ | 2500–3300 (very broad), 1710 | 86% |\n\nTsOH = p-toluenesulfonic acid, a strong acid catalyst.',
    questions: [
      {
        question: 'Based on Table 1, compound L contains which two functional groups?',
        options: [
          'A secondary alcohol and an ester',
          'A primary alcohol and a ketone',
          'A secondary alcohol and an aldehyde',
          'A primary alcohol and a secondary alcohol',
        ],
        correctAnswer: 0,
        explanation:
          'L has the formula of K plus two hydrogens and retains an ester C=O band at 1732 cm⁻¹ while gaining an O–H band, which fits reduction of the ketone alone to a secondary alcohol; NaBH₄ reduces ketones readily but not esters. A primary alcohol with a ketone describes N, which requires loss of the ethyl group (C₇), whereas L keeps all nine carbons. An aldehyde would also require cleaving off the ethoxy group, and L shows no aldehyde C–H band near 2720 cm⁻¹. Two alcohols describe M, the product of the much stronger reducing agent, which shows no C=O band at all.',
        skill: '5D reduction of carbonyl compounds (NaBH₄ vs LiAlH₄)',
      },
      {
        question: 'In the conversion of N to R, the oxidation state of the carbon atom that bears the hydroxyl group in N changes from:',
        options: ['−2 to +2', '−1 to +1', '+1 to +3', '−1 to +3'],
        correctAnswer: 3,
        explanation:
          'In the CH₂OH group of N the carbon has two C–H bonds (−2), one C–O bond (+1) and one C–C bond (0), for −1; in the COOH group of R it has a C=O double bond (+2), a C–O single bond (+1) and a C–C bond (0), for +3. A change from −1 to +1 describes oxidation only as far as the aldehyde, which is what PCC produces in Experiment 4. A starting value of +1 assigns the alcohol carbon the oxidation state of an aldehyde carbon. The pair −2 and +2 miscounts the bond to oxygen at both stages.',
        skill: '5D oxidation states of carbon',
      },
      {
        question: 'The group introduced in step (i) of Experiment 3 allows N to be formed because it is:',
        options: [
          'more electrophilic than the ester, so it takes up the hydride first and spares the ester',
          'stable to aqueous acid, yet cleaved by hydride donors at the time the ester is reduced',
          'stable to strongly basic hydride reagents, yet cleaved by aqueous acid after the reduction',
          'reduced to a primary alcohol by LiAlH₄ and then reoxidized to the ketone during workup',
        ],
        correctAnswer: 2,
        explanation:
          'A cyclic acetal has no C=O and no acidic hydrogen, so it is untouched by LiAlH₄ while the ester is reduced, and heating with aqueous acid then hydrolyzes it back to the ketone. The acetal is less electrophilic than a carbonyl, not more, and its purpose is to avoid reacting with hydride, not to consume it. Acetals are cleaved by aqueous acid and are stable to hydride donors, the reverse of the stated behavior. Acidic workup does not oxidize an alcohol to a ketone, so a reduced ketone could not be restored that way.',
        skill: '5D protecting groups (acetals)',
      },
      {
        question: 'The products of Experiments 4 and 5 differ because, under the conditions of Experiment 5:',
        options: [
          'the chromium reagent oxidizes the ketone first, and the ring then opens to form an acid',
          'the aldehyde that forms first adds water to give a hydrate, which is oxidized in turn',
          'the primary alcohol is converted to the acid in one step without forming an aldehyde',
          'the aqueous sulfuric acid, not the chromium(VI), converts the aldehyde into an acid',
        ],
        correctAnswer: 1,
        explanation:
          'In aqueous Jones reagent the aldehyde is in equilibrium with its hydrate, a gem-diol whose carbon still bears a hydrogen and an OH, so it can bond to chromium and be oxidized again to the carboxylic acid; anhydrous PCC gives no hydrate and stops at the aldehyde. R retains the ring and the ketone (C₇ formula, ketone C=O near 1710 cm⁻¹), so the ring was not opened. Chromium(VI) oxidation of a primary alcohol proceeds through the aldehyde, as the mechanism in the passage requires. Sulfuric acid is not an oxidant under these conditions and cannot convert an aldehyde into a carboxylic acid on its own.',
        skill: '5D oxidation of alcohols (PCC vs Jones)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. PHYSICS (information) — Snell’s law, total internal reflection, dispersion
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-cp-a-05',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Guiding Light Through a Flexible Endoscope',
    passageText:
      'A flexible endoscope lets a physician view the lining of the digestive tract or the airways through an instrument only a few millimeters wide. Its imaging and illumination channels are built from optical fibers, fine strands of glass that carry light along curved paths by repeated reflection.\n\nWhen light reaches the boundary between two transparent media, part of it is generally reflected and part is transmitted. The transmitted ray changes direction according to Snell’s law, $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$, where each angle is measured from the normal to the surface and $n$ is the index of refraction, the ratio of the speed of light in vacuum to its speed in the medium. When light passes from a medium of higher index into one of lower index, the refracted ray bends away from the normal. At one particular angle of incidence, the critical angle $\\theta_c$, the refracted ray would travel along the boundary itself; at any larger angle of incidence, no light is transmitted and the entire beam is reflected. This total internal reflection loses essentially no energy, which is why a fiber can carry light over meters with little attenuation.\n\nA typical fiber has a cylindrical core of glass surrounded by a thin cladding of glass with a lower index. For the fibers considered here, the core has $n = 1.50$ and the cladding has $n = 1.30$. Light enters the polished end of a fiber from air, is refracted toward the fiber axis, and then strikes the core–cladding boundary. Rays that meet the boundary at angles of incidence greater than the critical angle are trapped in the core and zigzag along it; rays that meet it at smaller angles leak into the cladding and are lost within a short distance. The cladding also keeps the reflecting surface clean and prevents light from crossing between neighboring fibers where they touch.\n\nAn imaging bundle contains tens of thousands of such fibers, each only about 10 µm across. For an image to be transmitted, the fibers must occupy the same relative positions at both ends of the bundle, so that each fiber carries one picture element from the tissue to the eyepiece or camera. Illumination bundles need no such ordering, because they merely deliver light from an external lamp to the tip of the instrument.\n\nThe index of refraction of glass is not the same for all colors. Across the visible range, the index is slightly larger for shorter wavelengths, a property called dispersion. Dispersion is responsible for the spectrum produced by a prism, and in a fiber it means that different colors do not follow exactly the same paths. A related effect occurs even for light of a single color: a ray that zigzags steeply travels a longer path than one that runs nearly parallel to the axis, so a brief flash of light that enters the fiber over a range of angles emerges from the far end spread out in time. This spreading is negligible over the length of an endoscope, but it limits how rapidly pulses can be sent through the long fibers used in communications.',
    questions: [
      {
        question: 'In one of the fibers described, a ray traveling in the core strikes the core–cladding boundary at an angle of incidence of 50°. The ray will:',
        options: [
          'be totally reflected back into the core, with no energy lost',
          'travel along the boundary between the core and the cladding',
          'be refracted into the cladding at an angle smaller than 50°',
          'be partly reflected and partly refracted into the cladding',
        ],
        correctAnswer: 3,
        explanation:
          'The critical angle satisfies $\\sin\\theta_c = 1.30/1.50 \\approx 0.87$, so $\\theta_c \\approx 60°$; a ray at 50° is below it, so part of the light is reflected and part is transmitted into the cladding. Total reflection would require an angle of incidence greater than 60°. Travel along the boundary occurs only at exactly the critical angle. A ray passing into a medium of lower index bends away from the normal, so it is refracted at an angle larger than 50° (about 62°), not smaller.',
        skill: '4D total internal reflection',
      },
      {
        question: 'White light from the lamp travels through an illumination fiber. Compared with red light in the core, violet light in the core has:',
        options: [
          'a lower speed and a higher frequency',
          'a higher speed and a higher frequency',
          'a lower speed and a lower frequency',
          'the same speed and a higher frequency',
        ],
        correctAnswer: 0,
        explanation:
          'Violet light has a shorter wavelength and higher frequency than red light, and because the index of glass is larger for shorter wavelengths, violet light travels more slowly in the core ($v = c/n$). A higher speed would require a smaller index for violet light, the opposite of normal dispersion. Frequency is set by the source and does not fall when light enters glass, so violet light keeps its higher frequency. Equal speeds would mean that glass shows no dispersion.',
        skill: '4D dispersion and wave properties of light',
      },
      {
        question: 'What is the largest angle, measured from the fiber axis, at which light in air can enter the end of one of the fibers described and still be trapped in the core? (Use sin 30° = 0.50, sin 42° ≈ 0.67, sin 49° ≈ 0.75 and sin 60° ≈ 0.87.)',
        options: ['30°', '42°', '49°', '60°'],
        correctAnswer: 2,
        explanation:
          'Trapping requires an angle of incidence at the core–cladding wall of at least the critical angle, 60°, so inside the core the ray may make at most 90° − 60° = 30° with the axis; at the end face, Snell’s law gives $\\sin\\theta_{air} = 1.50 \\sin 30° = 0.75$, so the ray may enter at up to about 49°. The value 30° is the limiting angle inside the glass, before refraction at the end face is taken into account. The value 42° is the critical angle for a glass–air boundary, which does not apply to the core–cladding wall. The value 60° is the critical angle at the wall, measured from the normal rather than from the axis.',
        skill: '4D Snell’s law and critical angle',
      },
      {
        question: 'When an endoscope fiber is bent into a tight curve, some light escapes from the core at the bend. This loss occurs mainly because:',
        options: [
          'the frequency of the light changes as it follows the curved path',
          'rays meet the outer wall at angles smaller than the critical angle',
          'rays meet the outer wall at angles larger than the critical angle',
          'the cladding’s index exceeds the core’s index along the curve',
        ],
        correctAnswer: 1,
        explanation:
          'Where the fiber curves, the outer wall turns into the path of rays that were traveling nearly parallel to the old axis, so they strike it more nearly head-on; their angle of incidence falls below the critical angle and part of the light is transmitted into the cladding. Frequency does not change during propagation or reflection. Angles larger than the critical angle produce total internal reflection, which would keep the light in the core. Bending does not reverse the ordering of the two indices, which are properties of the two glasses.',
        skill: '4D total internal reflection (application)',
      },
    ],
  },
]

export const FL3_CHEM_PHYS_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl3-cp-a-d01',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'A solution is prepared by diluting HCl in pure water to a concentration of $1.0 \\times 10^{-8}$ M at 25 °C. The pH of this solution is:',
    options: [
      'slightly below 7, because water’s autoionization adds H₃O⁺',
      'exactly 7, because the acid is too dilute to change the pH of water',
      'about 8, because the acid alone sets [H₃O⁺] at $1.0 \\times 10^{-8}$ M',
      'slightly above 7, because the chloride ions make the solution basic',
    ],
    correctAnswer: 0,
    explanation:
      'The acid adds only $1.0 \\times 10^{-8}$ M H₃O⁺ to the roughly $1.0 \\times 10^{-7}$ M that water supplies by autoionization, so the total is slightly above $10^{-7}$ M and the pH is slightly below 7 (about 6.98). A pH of exactly 7 ignores the small but real contribution of the fully dissociated acid. A pH of 8 would make an acidic solution basic, because it ignores water’s own H₃O⁺. Chloride is the conjugate base of a strong acid and has negligible basicity, so it cannot raise the pH.',
    skill: '5A autoionization of water and pH',
  },
  {
    id: 'fl3-cp-a-d02',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'A photon of ultraviolet light with a wavelength of 300 nm is compared with a photon of red light with a wavelength of 600 nm, both traveling in a vacuum. The ultraviolet photon has:',
    options: [
      'one-half the energy and the same speed',
      'twice the energy and twice the speed',
      'four times the energy and the same speed',
      'twice the energy and the same speed',
    ],
    correctAnswer: 3,
    explanation:
      'Photon energy is $E = hc/\\lambda$, so halving the wavelength doubles the energy, while all electromagnetic radiation travels at $c$ in a vacuum. Half the energy inverts the relationship between energy and wavelength. Twice the speed wrongly attributes the higher frequency to faster travel rather than to a shorter wavelength. Four times the energy treats energy as inversely proportional to the square of the wavelength.',
    skill: '4E photon energy',
  },
  {
    id: 'fl3-cp-a-d03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'The standard enthalpies of combustion of glucose, C₆H₁₂O₆(s), and ethanol, C₂H₅OH(l), are −2808 kJ/mol and −1367 kJ/mol, respectively. What is ΔH° for the fermentation C₆H₁₂O₆(s) → 2 C₂H₅OH(l) + 2 CO₂(g)?',
    options: ['−5542 kJ', '−1441 kJ', '−74 kJ', '+74 kJ'],
    correctAnswer: 2,
    explanation:
      'By Hess’s law, fermentation equals the combustion of glucose followed by the reverse of the combustion of two moles of ethanol (CO₂ is already fully oxidized): ΔH° = −2808 − 2(−1367) = −2808 + 2734 = −74 kJ. The −5542 kJ value adds the two combustion enthalpies instead of reversing the ethanol step. The −1441 kJ value reverses the combustion of only one mole of ethanol. The +74 kJ value has the correct magnitude but the wrong sign, as if glucose combustion were reversed instead.',
    skill: '5E Hess’s law',
  },
  {
    id: 'fl3-cp-a-d04',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'To compare two helmet liners, an engineer drops the same instrumented headform from the same height onto each liner and records the average force during impact. Liner B gives a lower average force than liner A. Because the headform and drop height are identical, the impact speed is the same in both trials. To conclude that liner B works by lengthening the collision time, the engineer must also show that which quantity is the same in both trials?',
    options: [
      'The maximum compression of each liner during impact',
      'The headform’s rebound speed from the liner',
      'The thickness of the liner material in each trial',
      'The headform’s average acceleration during impact',
    ],
    correctAnswer: 1,
    explanation:
      'By the impulse–momentum theorem, the average force is $\\Delta p/\\Delta t$, and $\\Delta p = m(v_{down} + v_{up})$ depends on the rebound speed; if the headform bounced less from liner B, its momentum change would be smaller and the lower force could arise without any change in collision time. The liners may compress by different amounts; a softer liner that compresses farther simply stops the headform over a longer distance and time, which is the mechanism being tested rather than a confound. Liner thickness is a property of the designs being compared, not a quantity in the impulse calculation. Average acceleration is proportional to the average force being measured, so it cannot be the same when the forces differ.',
    skill: '4A impulse and momentum (research design)',
  },
  {
    id: 'fl3-cp-a-d05',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'Ball 1 is dropped from rest, and at the same instant ball 2 is thrown horizontally at 8 m/s from the same height. If air resistance is negligible, which quantity is the same for the two balls just before they land?',
    options: [
      'The magnitude of the velocity',
      'The horizontal displacement',
      'The angle of the velocity below horizontal',
      'The vertical component of the velocity',
    ],
    correctAnswer: 3,
    explanation:
      'Horizontal and vertical motions are independent: both balls start with zero vertical velocity and accelerate downward at $g$ for the same fall time, so they reach the ground with the same vertical velocity. Ball 2 also keeps its 8 m/s horizontal velocity, so its speed is greater. Ball 1 lands directly below its release point, whereas ball 2 lands 8 m/s × t away. Ball 1 strikes vertically, while ball 2 strikes at an angle less than 90° below horizontal.',
    skill: '4A projectile motion',
  },
  {
    id: 'fl3-cp-a-d06',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'In 2-bromopent-2-ene, CH₃C(Br)=CHCH₂CH₃, one alkene carbon bears Br and CH₃ and the other bears H and CH₂CH₃. In the isomer in which Br and CH₂CH₃ lie on the same side of the double bond, the correct stereochemical designation is:',
    options: [
      'Z, because each carbon’s higher-priority group is on the same side',
      'E, because the two alkyl groups are on opposite sides of the double bond',
      'Z, because the two alkyl groups are on the same side of the double bond',
      'E, because the bromine and the hydrogen are on opposite sides of the bond',
    ],
    correctAnswer: 0,
    explanation:
      'By the Cahn–Ingold–Prelog rules, Br outranks CH₃ on one carbon (higher atomic number) and CH₂CH₃ outranks H on the other, and these two higher-priority groups are on the same side, so the isomer is Z. The E-by-alkyl-groups reasoning applies the cis/trans convention for the carbon chain, which here gives the opposite answer from the priority rules. The two alkyl groups are actually on opposite sides in this isomer, so the claim that they share a side is false. Bromine and hydrogen are on different carbons but are not the pair of higher-priority groups, since H is the lower-priority group on its carbon.',
    skill: '5D E/Z designation',
  },
  {
    id: 'fl3-cp-a-d07',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'Hydrolysis of ATP to ADP and phosphate has ΔG°′ ≈ −30.5 kJ/mol, whereas hydrolysis of AMP to adenosine and phosphate has ΔG°′ ≈ −14 kJ/mol. The difference arises mainly because the bond cleaved in ATP is:',
    options: [
      'a phosphoester, whose products are stabilized by the freed ribose hydroxyl',
      'a glycosidic bond, whose cleavage releases the adenine base from the ribose',
      'a phosphoanhydride, whose products have less charge repulsion and more resonance',
      'a high-energy bond, which releases energy as the bond itself is being broken',
    ],
    correctAnswer: 2,
    explanation:
      'The terminal bond of ATP is a phosphoanhydride; hydrolysis separates closely spaced negative charges and yields ADP and phosphate, which are better stabilized by resonance and solvation than the reactant, so the reaction is much more exergonic than cleavage of AMP’s phosphoester. The phosphoester is the bond cleaved in AMP, the less favorable reaction. Neither hydrolysis breaks the glycosidic bond, which links adenine to ribose. Breaking any bond requires energy; the free energy released comes from the greater stability of the products, not from the bond itself.',
    skill: '5D phosphoanhydride and phosphoester bonds',
  },
  {
    id: 'fl3-cp-a-d08',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'Which statement correctly contrasts the hydrogen bonding that stabilizes an α-helix with that which stabilizes a β-sheet?',
    options: [
      'Helix hydrogen bonds link side chains, but sheet hydrogen bonds link backbone groups',
      'Helix hydrogen bonds link adjacent residues, but sheet bonds link residues four apart',
      'Helix hydrogen bonds lie perpendicular to the axis, but sheet bonds run along a strand',
      'Helix hydrogen bonds run along the axis in one segment, but sheet bonds join adjacent strands',
    ],
    correctAnswer: 3,
    explanation:
      'In an α-helix, the backbone C=O of residue $i$ hydrogen-bonds to the backbone N–H of residue $i + 4$ within the same segment, so the bonds lie roughly parallel to the helix axis; in a β-sheet, backbone C=O and N–H groups on neighboring strands bond to each other, across the direction of the strands. Both structures are stabilized by backbone, not side-chain, hydrogen bonds. The residues four apart belong to the helix, not the sheet. The orientations are reversed in the statement that helix bonds are perpendicular to the axis and sheet bonds run along a strand.',
    skill: '5B hydrogen bonding in secondary structure',
  },
]
