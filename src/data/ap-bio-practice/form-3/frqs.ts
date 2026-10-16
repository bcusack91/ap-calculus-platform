import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Biology practice exam, Form 3: Section II (May 2027 format, 90 minutes).
 *   FRQ 1 — Long: Interpreting and Evaluating Experimental Results             9 pts
 *   FRQ 2 — Long: Interpreting and Evaluating Experimental Results with Graphing 9 pts
 *   FRQ 3 — Short: Scientific Investigation                                     4 pts
 *   FRQ 4 — Short: Conceptual Analysis                                          4 pts
 *   FRQ 5 — Short: Analysis of a Model or Visual Representation                 4 pts
 *   FRQ 6 — Short: Analysis of Data                                             4 pts
 * One RubricPoint = one point.
 */

export const FRQS: SAQItem[] = [
  /* ---------- FRQ 1 — LONG: a salt-tolerance gene in bacteria (Units 2 and 6) ---------- */
  {
    type: 'saq',
    topic: 'unit-2-cell-structure',
    prompt:
      '**FRQ 1 — Long: Interpreting and Evaluating Experimental Results**\n\n' +
      'Gene *osmP* of a soil bacterium encodes a membrane transport protein that moves glycine betaine, a small organic molecule, from the surrounding medium into the cell. These bacteria cannot make glycine betaine themselves. Researchers grew three strains in a normal medium and in a high-salt medium (0.8 M NaCl); both media contained glycine betaine. The strains were the wild type, a mutant strain with *osmP* deleted, and the mutant strain given a plasmid carrying a working copy of *osmP*. Each strain was grown in five cultures per medium, and cell density was measured as optical density (OD) after 24 hours.\n\n' +
      '| Strain | Mean cell density, normal medium (OD) ± 2SE | Mean cell density, high-salt medium (OD) ± 2SE |\n' +
      '|---|---|---|\n' +
      '| Wild type | 1.20 ± 0.06 | 0.95 ± 0.05 |\n' +
      '| *osmP* deleted | 1.18 ± 0.07 | 0.21 ± 0.04 |\n' +
      '| *osmP* deleted + plasmid with *osmP* | 1.15 ± 0.06 | 0.90 ± 0.06 |',
    parts: [
      {
        letter: 'A',
        question: '(A) Describe the effect of the high-salt medium on the net movement of water between a bacterial cell and the medium.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Water leaves the cell by osmosis, because the high-salt medium has a lower water potential (higher solute concentration) than the cytoplasm',
            description: 'Must give the direction (out of the cell) AND a reason based on solute concentration or water potential. "Salt enters the cell and dries it out" does not earn the point.',
          },
        ],
      },
      {
        letter: 'B',
        question:
          '(B) (i) Identify the strain that serves as the control for the effect of deleting *osmP*. (ii) Explain why the researchers included the strain with the plasmid. (iii) State the null hypothesis for comparing the wild type and the *osmP*-deleted strain in the high-salt medium.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — (i) The wild-type strain',
            description: 'The wild type has a working osmP and differs from the mutant only in that gene. "The normal medium" is a control condition, not the control strain.',
          },
          {
            id: 'b2',
            label: '1 pt — (ii) Restoring osmP should restore growth, showing that the mutant\'s defect is caused by the loss of osmP and not by another change',
            description: 'Must connect the plasmid strain to confirming that osmP itself causes the phenotype (complementation). "To have a third group" does not earn the point.',
          },
          {
            id: 'b3',
            label: '1 pt — (iii) There is no difference in mean cell density between the wild type and the osmP-deleted strain in the high-salt medium',
            description: 'Must state "no difference" (or "deleting osmP has no effect on growth in high salt").',
          },
        ],
      },
      {
        letter: 'C',
        question:
          '(C) (i) Calculate the percent decrease in mean cell density of the *osmP*-deleted strain in the high-salt medium compared with the normal medium. (ii) Using the ±2SE values, determine whether the strain with the plasmid differs significantly from the wild type in the high-salt medium.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — (i) (1.18 − 0.21) / 1.18 × 100 ≈ 82% decrease',
            description: 'Accept 82% (81.9–82.2%). The difference 0.97 alone, or dividing by 0.21, does not earn the point.',
          },
          {
            id: 'c2',
            label: '1 pt — (ii) Not significantly different: the intervals 0.84–0.96 and 0.90–1.00 overlap',
            description: 'Must give the conclusion AND support it with overlapping ±2SE intervals.',
          },
        ],
      },
      {
        letter: 'D',
        question:
          '(D) (i) Explain how taking up glycine betaine helps a cell survive in the high-salt medium. (ii) The researchers grow the wild-type strain in a high-salt medium that contains no glycine betaine. Predict how its cell density will compare with that of the wild type in the original high-salt medium. (iii) Justify your prediction.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — (i) Glycine betaine raises the solute concentration inside the cell, lowering its water potential so water stays in (or re-enters) the cell',
            description: 'Must connect the accumulated solute to reduced water loss or to water potential/osmosis.',
          },
          {
            id: 'd2',
            label: '1 pt — (ii) Lower cell density (closer to that of the osmP-deleted strain)',
            description: 'Any prediction of reduced growth in high salt earns the point.',
          },
          {
            id: 'd3',
            label: '1 pt — (iii) Without glycine betaine in the medium, OsmP has nothing to import, so the cells cannot raise their internal solute level and lose water as the mutant does',
            description: 'Must connect the missing glycine betaine to the cells being unable to balance the water potential, because they cannot make it themselves.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) The high-salt medium has a lower water potential than the cytoplasm, so water moves out of the cell by osmosis and the cell loses volume and turgor.\n\n' +
      '(B) (i) The wild-type strain. (ii) If adding back osmP on a plasmid restores growth in high salt, the mutant\'s poor growth must be caused by losing osmP rather than by some other change made when the gene was deleted. (iii) There is no difference in mean cell density between the wild type and the osmP-deleted strain in high salt.\n\n' +
      '(C) (i) (1.18 − 0.21) / 1.18 × 100 ≈ 82% decrease. (ii) The plasmid strain (0.84–0.96) and the wild type (0.90–1.00) overlap, so they do not differ significantly.\n\n' +
      '(D) (i) Importing glycine betaine raises the concentration of solutes inside the cell, lowering the cell\'s water potential toward that of the salty medium, so the cell stops losing water. (ii) The wild type will reach a lower density, similar to the mutant. (iii) The bacteria cannot make glycine betaine, so with none in the medium, OsmP cannot raise the internal solute level, and the cells lose water just as the mutant does.',
  },

  /* ---------- FRQ 2 — LONG WITH GRAPHING: guppy spots after predator release (Unit 7) ---------- */
  {
    type: 'saq',
    topic: 'unit-7-natural-selection',
    prompt:
      '**FRQ 2 — Long: Interpreting and Evaluating Experimental Results with Graphing**\n\n' +
      'Male guppies have colored spots, and the number of spots is heritable. Female guppies prefer to mate with males that have more spots, but a predatory fish finds brightly spotted males more easily. Researchers moved 200 guppies from a stream pool where the predatory fish lives to an upstream pool that had no guppies and no predatory fish. They left a control population in the original pool. Every 6 months they counted the spots on 30 adult males from each population.\n\n' +
      '| Time (months) | Mean spots per male, moved population ± 2SE | Mean spots per male, control population ± 2SE |\n' +
      '|---|---|---|\n' +
      '| 0 | 9.0 ± 0.6 | 9.1 ± 0.6 |\n' +
      '| 6 | 9.8 ± 0.7 | 9.0 ± 0.5 |\n' +
      '| 12 | 11.0 ± 0.6 | 9.2 ± 0.6 |\n' +
      '| 18 | 12.1 ± 0.7 | 8.9 ± 0.6 |\n' +
      '| 24 | 12.9 ± 0.6 | 9.1 ± 0.5 |',
    parts: [
      {
        letter: 'A',
        question: '(A) Explain why the researchers kept a control population in the original pool.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — It shows what happens to spot number without the move, so any change in the moved population can be attributed to the new pool (no predator) rather than to time, season or sampling',
            description: 'Must state that the control allows comparison to rule out other causes of change.',
          },
        ],
      },
      {
        letter: 'B',
        question:
          '(B) Construct an appropriately labeled graph that represents the mean number of spots per male in both populations over time, including the ±2SE error bars.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — Axes labeled with variables and units: time (months) on the x-axis; mean spots per male on the y-axis',
            description: 'Both labels needed; the unit of time must be given.',
          },
          {
            id: 'b2',
            label: '1 pt — Appropriate, evenly spaced scales (0–24 months; y-axis covering about 8–14 spots)',
            description: 'Uniform intervals on both axes. A y-axis that starts above 0 is acceptable if clearly labeled.',
          },
          {
            id: 'b3',
            label: '1 pt — Both data sets plotted correctly and distinguished with a key or labels',
            description: 'All ten means within about half a gridline of their values, with the two populations clearly identified (legend, labels or different symbols).',
          },
          {
            id: 'b4',
            label: '1 pt — Error bars drawn correctly (mean ± 2SE) for every point',
            description: 'Example: the 12-month moved-population bar runs from 10.4 to 11.6.',
          },
        ],
      },
      {
        letter: 'C',
        question:
          '(C) (i) Using the data, determine whether the moved population differs significantly from the control population at 12 months. (ii) Calculate the average rate of change in mean spots per male in the moved population over the 24 months. Include units.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — (i) Yes: the intervals 10.4–11.6 and 8.6–9.8 do not overlap',
            description: 'Must give the conclusion AND cite the non-overlapping intervals or error bars.',
          },
          {
            id: 'c2',
            label: '1 pt — (ii) (12.9 − 9.0) / 24 ≈ 0.16 spots per month',
            description: 'Accept 0.16–0.17 spots per month (or spots per male per month); units required.',
          },
        ],
      },
      {
        letter: 'D',
        question:
          '(D) (i) Using the information in the prompt, explain why mean spot number increased in the moved population but not in the control. (ii) The predatory fish later reaches the upstream pool. Predict how mean spot number in that population will change over the following generations, and justify your prediction.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — (i) Without the predator, spotted males are no longer killed more often, and females prefer them, so they leave more offspring and the heritable trait increases',
            description: 'Minimum for the point: (1) the absence of predation removes the survival cost of spots, AND (2) female preference gives spotted males more offspring. Mentioning heritability or why the control did not change is good but not required.',
          },
          {
            id: 'd2',
            label: '1 pt — (ii) Mean spot number will decrease, because predators now kill more of the highly spotted males, so fewer of them reproduce',
            description: 'Prediction and justification both required; the justification must link predation to lower survival or reproduction of spotted males.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) The control shows how spot number changes when nothing about the environment changes, so a difference between the populations can be attributed to the move (the absence of the predator) rather than to time, season or sampling.\n\n' +
      '(B) A line graph with time (months, 0–24) on the x-axis and mean spots per male (8–14) on the y-axis, the moved population (9.0, 9.8, 11.0, 12.1, 12.9) and control (9.1, 9.0, 9.2, 8.9, 9.1) plotted as two labeled lines, and a vertical bar at each point from mean − 2SE to mean + 2SE.\n\n' +
      '(C) (i) At 12 months the moved population (10.4–11.6) and the control (8.6–9.8) do not overlap, so they differ significantly. (ii) (12.9 − 9.0) / 24 ≈ 0.16 spots per month.\n\n' +
      '(D) (i) In the upstream pool, spotted males are no longer eaten more often, and females prefer them, so males with more spots father more offspring; because spot number is heritable, the mean rises each generation. In the original pool, predators remove many spotted males, so the mean stays about the same. (ii) Spot number will fall, because the predator will again kill highly spotted males before they reproduce, so males with fewer spots will leave more offspring.',
  },

  /* ---------- FRQ 3 — SHORT: Scientific Investigation (Unit 3) ---------- */
  {
    type: 'saq',
    topic: 'unit-3-cellular-energetics',
    prompt:
      '**FRQ 3 — Short: Scientific Investigation**\n\n' +
      'Amylase, an enzyme in saliva, hydrolyzes starch into smaller sugars. A student mixed the same volume of amylase solution with the same amount of starch in buffers at pH 4, 5, 6, 7, 8 and 9, all at 37°C. Every 30 seconds the student placed a drop of each mixture on a tile with iodine solution, which turns blue-black when starch is present, and recorded the time at which the iodine no longer turned blue-black. Amylase from human saliva has its highest activity at about pH 7.',
    parts: [
      {
        letter: 'A',
        question: '(A) Describe how a pH far from an enzyme\'s optimum can reduce the enzyme\'s activity.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — It changes the charges on R groups, disrupting the bonds that hold the enzyme\'s shape, so the active site no longer fits the substrate',
            description: 'Must link pH to a change in the enzyme\'s structure (shape or active site). "The enzyme dies" does not earn the point.',
          },
        ],
      },
      {
        letter: 'B',
        question: '(B) Identify an appropriate negative control for this investigation.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — Starch in buffer with no amylase (or with boiled amylase), tested the same way',
            description: 'The control must lack active enzyme so that it shows starch is not broken down without amylase.',
          },
        ],
      },
      {
        letter: 'C',
        question: '(C) Predict how the time for starch to disappear at pH 4 will compare with the time at pH 7.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — It will take longer at pH 4 (or starch may never disappear)',
            description: 'Any prediction of a longer time, or no breakdown, at pH 4.',
          },
        ],
      },
      {
        letter: 'D',
        question: '(D) Justify your prediction.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — pH 4 is far from the optimum, so fewer amylase molecules have a working active site and starch is hydrolyzed more slowly',
            description: 'Must connect the distance from the optimum pH to reduced enzyme activity (fewer functional active sites or a slower rate).',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) H⁺ concentration affects the charges on acidic and basic R groups. At a pH far from the optimum, the ionic and hydrogen bonds that hold the enzyme\'s shape are disrupted, the active site changes shape, and substrate binds poorly.\n\n' +
      '(B) A tube of starch in buffer with no amylase (or boiled amylase), tested with iodine on the same schedule; it should stay blue-black.\n\n' +
      '(C) The starch will take much longer to disappear at pH 4 than at pH 7, or may not disappear during the test.\n\n' +
      '(D) pH 4 is far below amylase\'s optimum of about 7, so many amylase molecules have a distorted active site and the starch is hydrolyzed much more slowly.',
  },

  /* ---------- FRQ 4 — SHORT: Conceptual Analysis (Unit 4) ---------- */
  {
    type: 'saq',
    topic: 'unit-4-cell-communication-cell-cycle',
    prompt:
      '**FRQ 4 — Short: Conceptual Analysis**\n\n' +
      'Cortisol and glucagon are hormones that both raise blood glucose. Cortisol is a small nonpolar steroid. Glucagon is a polar peptide. Glucagon raises blood glucose within minutes, while the effect of cortisol takes several hours to appear.',
    parts: [
      {
        letter: 'A',
        question: '(A) Describe where the cortisol receptor is located in a target cell, and explain why it can be located there.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Inside the cell (cytoplasm or nucleus), because nonpolar cortisol can diffuse through the phospholipid bilayer',
            description: 'Location AND reason are both needed.',
          },
        ],
      },
      {
        letter: 'B',
        question: '(B) Explain why the effect of glucagon appears much faster than the effect of cortisol.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — Glucagon\'s pathway activates enzymes already present (e.g., by phosphorylation), while cortisol acts by changing gene transcription, so new proteins must be made first',
            description: 'Must contrast modifying existing proteins with making new mRNA/protein.',
          },
        ],
      },
      {
        letter: 'C',
        question: '(C) A mutation changes the glucagon receptor so that it cannot bind glucagon. Predict the effect of this mutation on blood glucose several hours after a meal.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Blood glucose will be lower than normal (it falls and is not raised back)',
            description: 'Any prediction of lower blood glucose between meals, because the glucagon signal cannot be received.',
          },
        ],
      },
      {
        letter: 'D',
        question: '(D) Liver cells respond to glucagon, but skin cells exposed to the same glucagon concentration do not. Explain this difference.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — Liver cells have glucagon receptors (and the matching transduction pathway); skin cells lack the receptor',
            description: 'Must identify the presence or absence of the specific receptor (or pathway) as the cause.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) The cortisol receptor is inside the cell, in the cytoplasm or nucleus. Cortisol is small and nonpolar, so it can diffuse through the hydrophobic interior of the plasma membrane to reach it.\n\n' +
      '(B) Glucagon binds a surface receptor and starts a phosphorylation cascade that activates enzymes the cell already has, so glucose is released within minutes. The cortisol–receptor complex acts as a transcription factor, so the cell must transcribe genes and make new proteins before glucose rises, which takes hours.\n\n' +
      '(C) Blood glucose will fall lower than normal between meals, because liver cells cannot detect glucagon and will not release glucose.\n\n' +
      '(D) Only cells with glucagon receptors respond. Liver cells have the receptor and the relay proteins it activates; skin cells lack the receptor, so glucagon cannot bind them.',
  },

  /* ---------- FRQ 5 — SHORT: Analysis of a Model (Unit 8) ---------- */
  {
    type: 'saq',
    topic: 'unit-8-ecology',
    prompt:
      '**FRQ 5 — Short: Analysis of a Model or Visual Representation**\n\n' +
      'The model below is a food web for a pond. Each arrow points from the organism that is eaten to the organism that eats it.\n\n' +
      'Algae → zooplankton\n\n' +
      'Algae → snails\n\n' +
      'Zooplankton → minnows\n\n' +
      'Snails → crayfish\n\n' +
      'Minnows → bass\n\n' +
      'Crayfish → bass\n\n' +
      'Minnows → herons',
    parts: [
      {
        letter: 'A',
        question: '(A) Identify the trophic level of the bass in this food web.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Tertiary consumer (fourth trophic level)',
            description: 'Bass eat minnows and crayfish, which are secondary consumers. "Secondary consumer" or "top predator" alone does not earn the point.',
          },
        ],
      },
      {
        letter: 'B',
        question: '(B) Using the model, predict the effect on the snail population if all the bass are removed from the pond. Justify your prediction.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — Snails decrease, because without bass the crayfish increase and eat more snails',
            description: 'Prediction and justification are both required; the justification must trace the effect through the crayfish.',
          },
        ],
      },
      {
        letter: 'C',
        question: '(C) Explain why the total biomass of herons the pond can support is much smaller than the total biomass of zooplankton.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Only about 10% of the energy at one trophic level reaches the next; most is used in respiration and lost as heat, so less energy is available at higher levels',
            description: 'Must connect energy loss between trophic levels to smaller biomass at higher levels.',
          },
        ],
      },
      {
        letter: 'D',
        question: '(D) Describe ONE limitation of this model for predicting how the pond community will change.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — Any valid limitation, e.g., it omits decomposers, it does not show population sizes or energy amounts, or it leaves out abiotic factors such as nutrients and temperature',
            description: 'The limitation must be something the model actually leaves out or cannot show.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) The bass are tertiary consumers, at the fourth trophic level: algae → zooplankton → minnows → bass, and algae → snails → crayfish → bass.\n\n' +
      '(B) The snail population will decrease. Without bass, the crayfish are no longer eaten, so their population grows, and more crayfish eat more snails.\n\n' +
      '(C) At each step only about 10% of the energy is passed on; the rest is used in cellular respiration and lost as heat. Herons feed two levels above zooplankton, so far less energy, and therefore far less biomass, is available to them.\n\n' +
      '(D) The model does not show population sizes or how much each species eats, so it cannot predict how large a change will be.',
  },

  /* ---------- FRQ 6 — SHORT: Analysis of Data (Unit 6) ---------- */
  {
    type: 'saq',
    topic: 'unit-6-gene-expression-regulation',
    prompt:
      '**FRQ 6 — Short: Analysis of Data**\n\n' +
      'Researchers measured the amounts of mRNA and of protein from gene E, which encodes an enzyme, in four tissues of adult mice. Values are relative to the amounts in liver (set to 100) and are means ± 2SE.\n\n' +
      '| Tissue | Gene E mRNA | Enzyme E protein |\n' +
      '|---|---|---|\n' +
      '| Liver | 100 ± 8 | 100 ± 9 |\n' +
      '| Kidney | 42 ± 6 | 40 ± 5 |\n' +
      '| Muscle | 5 ± 2 | 4 ± 2 |\n' +
      '| Brain | 48 ± 7 | 6 ± 2 |',
    parts: [
      {
        letter: 'A',
        question: '(A) Describe the relationship between the amount of gene E mRNA and the amount of enzyme E protein in liver, kidney and muscle.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Protein rises in proportion to mRNA: tissues with more mRNA have correspondingly more protein (about a 1:1 ratio)',
            description: 'Must describe a positive, roughly proportional relationship.',
          },
        ],
      },
      {
        letter: 'B',
        question: '(B) Calculate the ratio of enzyme E protein to gene E mRNA in brain tissue.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — 6 / 48 ≈ 0.13',
            description: 'Accept 0.12–0.13 (or 1:8). The inverted ratio, 8, does not earn the point unless expressed as 1:8.',
          },
        ],
      },
      {
        letter: 'C',
        question: '(C) Identify the tissue in which expression of gene E is most likely regulated after transcription. Support your answer with the data.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Brain: its mRNA level (48) is similar to kidney\'s (42), but its protein level (6) is far lower than kidney\'s (40)',
            description: 'Must name brain AND support it, either by comparing its mRNA and protein with kidney\'s or by contrasting its protein-to-mRNA ratio (about 0.13) with the ratio of about 1 in the other tissues.',
          },
        ],
      },
      {
        letter: 'D',
        question: '(D) Propose ONE mechanism that could explain the data for the tissue you identified in part (C).',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — Any valid post-transcriptional mechanism, e.g., a small regulatory RNA or protein that blocks translation of the mRNA, or rapid breakdown of the enzyme protein',
            description: 'The mechanism must act after transcription. Reduced transcription does not fit, because the mRNA level is high.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) In liver, kidney and muscle the protein level closely tracks the mRNA level (100/100, 42/40, 5/4), so more mRNA gives proportionally more protein.\n\n' +
      '(B) 6 / 48 ≈ 0.13.\n\n' +
      '(C) Brain. Its mRNA (48) is about the same as kidney\'s (42), yet its protein (6) is far below kidney\'s (40), so something after transcription limits how much enzyme is made or kept.\n\n' +
      '(D) A small regulatory RNA in brain cells could pair with gene E mRNA and block its translation, so little enzyme is made even though the mRNA is present.',
  },
]
