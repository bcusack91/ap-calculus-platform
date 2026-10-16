import type { SAQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Biology practice exam, Form 2: Section II (May 2027 format, 90 minutes).
 *   FRQ 1 — Long: Interpreting and Evaluating Experimental Results             9 pts
 *   FRQ 2 — Long: Interpreting and Evaluating Experimental Results with Graphing 9 pts
 *   FRQ 3 — Short: Scientific Investigation                                     4 pts
 *   FRQ 4 — Short: Conceptual Analysis                                          4 pts
 *   FRQ 5 — Short: Analysis of a Model or Visual Representation                 4 pts
 *   FRQ 6 — Short: Analysis of Data                                             4 pts
 * One RubricPoint = one point.
 */

export const FRQS: SAQItem[] = [
  /* ---------- FRQ 1 — LONG: zinc tolerance in a grass (Units 7 and 8) ---------- */
  {
    type: 'saq',
    topic: 'unit-7-natural-selection',
    prompt:
      '**FRQ 1 — Long: Interpreting and Evaluating Experimental Results**\n\n' +
      'Soil around some old zinc mines contains enough zinc to kill most plants, yet a few grass species grow there. Researchers collected seeds from one grass species growing on mine soil and from plants of the same species growing in a pasture 2 km away on normal soil. They grew 20 seedlings from each seed source in a nutrient solution with a normal zinc concentration and 20 in a solution with a high zinc concentration. All seedlings were kept under the same light and temperature, and root growth was measured after 14 days.\n\n' +
      '| Seed source | Zinc in solution | Mean root growth (mm) ± 2SE |\n' +
      '|---|---|---|\n' +
      '| Pasture | Normal | 45 ± 3 |\n' +
      '| Pasture | High | 6 ± 2 |\n' +
      '| Mine | Normal | 36 ± 3 |\n' +
      '| Mine | High | 34 ± 4 |',
    parts: [
      {
        letter: 'A',
        question:
          '(A) Describe how natural selection could have produced the difference in zinc tolerance between the mine population and the pasture population.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Heritable variation in zinc tolerance + tolerant plants survived and reproduced more on mine soil, so tolerance increased over generations',
            description:
              'Must include BOTH that the population had heritable variation in tolerance and that tolerant individuals left more offspring on zinc-rich soil, so tolerance alleles became more common. Does NOT earn the point: "the plants adapted to the zinc" or "zinc caused mutations for tolerance" (individuals do not change in response to need).',
          },
        ],
      },
      {
        letter: 'B',
        question:
          '(B) (i) Identify the independent variables in this experiment. (ii) Identify the control treatment for testing the effect of high zinc on root growth. (iii) State the null hypothesis for comparing the root growth of mine and pasture seedlings in the high-zinc solution.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — (i) Seed source (mine or pasture) AND zinc concentration of the solution',
            description: 'Both variables are needed. Root growth is the dependent variable and does not earn the point.',
          },
          {
            id: 'b2',
            label: '1 pt — (ii) Seedlings grown in the normal-zinc solution',
            description: 'Accept "the normal-zinc treatment" for either seed source or both. Light, temperature or the number of seedlings are controlled variables, not the control treatment.',
          },
          {
            id: 'b3',
            label: '1 pt — (iii) There is no difference in mean root growth between mine and pasture seedlings grown in high zinc',
            description: 'Must state no difference (or no effect of seed source) for the high-zinc comparison. A prediction such as "mine plants will grow more" is not a null hypothesis.',
          },
        ],
      },
      {
        letter: 'C',
        question:
          '(C) (i) Calculate the percent decrease in mean root growth of pasture seedlings in the high-zinc solution compared with the normal-zinc solution. (ii) Using the ±2SE values, determine whether the root growth of mine seedlings differs significantly between the two zinc solutions.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — (i) (45 − 6) / 45 × 100 ≈ 87% decrease',
            description: 'Accept 86–87%. Work or setup should show the change divided by the normal-zinc value. Dividing by 6 (650%) does not earn the point.',
          },
          {
            id: 'c2',
            label: '1 pt — (ii) Not significantly different: the intervals 33–39 mm and 30–38 mm overlap',
            description: 'Must give the conclusion AND support it with the overlap of the ±2SE intervals (or the ranges).',
          },
        ],
      },
      {
        letter: 'D',
        question:
          '(D) Zinc-tolerant plants are rare in the pasture. (i) Identify evidence in the data that zinc tolerance has a cost in soil with normal zinc levels. (ii) Wind regularly carries pollen from pasture plants onto the mine site. Predict the effect of this pollen on the proportion of zinc-tolerant seedlings among the seeds produced on the mine site. (iii) Justify your prediction.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — (i) In normal zinc, mine seedlings grew less (36 mm) than pasture seedlings (45 mm)',
            description: 'Must compare the two seed sources in the NORMAL-zinc solution and state that the mine (tolerant) seedlings grew less. Noting that the ±2SE intervals (33–39 and 42–48 mm) do not overlap is ideal but not required. Comparisons in high zinc do not show a cost.',
          },
          {
            id: 'd2',
            label: '1 pt — (ii) The proportion of zinc-tolerant seedlings will be lower than if only mine pollen fertilized the flowers',
            description: 'Accept "fewer tolerant seeds/seedlings" or "lower frequency of tolerance alleles in the seeds".',
          },
          {
            id: 'd3',
            label: '1 pt — (iii) Pasture pollen carries non-tolerance alleles into the mine population (gene flow), so more offspring lack tolerance',
            description: 'Must connect the pollen to the transfer of alleles for low tolerance. "Gene flow" alone, with no allele reasoning, does not earn the point.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) The ancestral grass population varied in zinc tolerance, and the variation was heritable. On mine soil, tolerant plants survived and reproduced while intolerant plants died, so over many generations the alleles for tolerance increased in frequency in the mine population. In the pasture there was no such selection.\n\n' +
      '(B) (i) Seed source and zinc concentration. (ii) Seedlings grown in the normal-zinc solution. (iii) There is no difference in mean root growth between mine and pasture seedlings grown in high zinc.\n\n' +
      '(C) (i) (45 − 6) / 45 × 100 ≈ 87% decrease. (ii) The mine intervals (33–39 mm and 30–38 mm) overlap, so root growth of mine seedlings does not differ significantly between the solutions.\n\n' +
      '(D) (i) In normal zinc, mine seedlings grew 36 ± 3 mm and pasture seedlings 45 ± 3 mm; the intervals do not overlap, so tolerant plants grow less when zinc is not a problem. (ii) Fewer of the seeds made on the mine site will be zinc tolerant. (iii) Pasture pollen brings alleles for low tolerance into the mine population; many of the resulting seeds carry them, so the proportion of tolerant seedlings drops, and selection on mine soil removes these seedlings each generation.',
  },

  /* ---------- FRQ 2 — LONG WITH GRAPHING: photosynthesis by wavelength (Unit 3) ---------- */
  {
    type: 'saq',
    topic: 'unit-3-cellular-energetics',
    prompt:
      '**FRQ 2 — Long: Interpreting and Evaluating Experimental Results with Graphing**\n\n' +
      'Researchers placed equal masses of an aquatic plant in sealed tubes of water containing the same amount of dissolved $CO_{2}$. Each tube was lit with light of a single wavelength, all at the same intensity, for 30 minutes at 25°C. The rate of photosynthesis was measured as the rate of $O_{2}$ release. Five tubes were used at each wavelength.\n\n' +
      '| Wavelength (nm) | Color | Mean $O_{2}$ release (µL/min) ± 2SE |\n' +
      '|---|---|---|\n' +
      '| 425 | Violet-blue | 8.2 ± 0.6 |\n' +
      '| 475 | Blue | 6.5 ± 0.5 |\n' +
      '| 525 | Green | 1.4 ± 0.4 |\n' +
      '| 575 | Yellow | 2.0 ± 0.4 |\n' +
      '| 625 | Orange | 4.4 ± 0.5 |\n' +
      '| 675 | Red | 7.6 ± 0.6 |',
    parts: [
      {
        letter: 'A',
        question: '(A) Describe the role of chlorophyll in the light-dependent reactions of photosynthesis.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Chlorophyll absorbs light energy that drives the light reactions (excites electrons passed to an electron transport chain, producing ATP and NADPH)',
            description: 'Must link absorbed light energy to the light reactions: excited electrons, the electron transport chain, or the production of ATP/NADPH. "Chlorophyll makes the plant green" or "chlorophyll makes sugar" does not earn the point.',
          },
        ],
      },
      {
        letter: 'B',
        question:
          '(B) Construct an appropriately labeled graph that represents the mean rate of $O_{2}$ release at each wavelength, including the ±2SE error bars.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — Axes labeled with variables and units: wavelength (nm) on the x-axis; $O_{2}$ release (µL/min) on the y-axis',
            description: 'Both axes must be labeled and both units given. The independent variable (wavelength) belongs on the x-axis.',
          },
          {
            id: 'b2',
            label: '1 pt — Appropriate, evenly spaced scales that cover the data (about 400–700 nm; 0 to at least 9 µL/min)',
            description: 'Tick intervals must be uniform on each axis. Treating the six wavelengths as unevenly spaced categories on a numeric axis does not earn the point; a bar graph with wavelength categories in order is acceptable.',
          },
          {
            id: 'b3',
            label: '1 pt — All six means plotted correctly',
            description: 'Each mean within about half a gridline of its value (e.g., 1.4 at 525 nm, 8.2 at 425 nm). Points may be connected by line segments.',
          },
          {
            id: 'b4',
            label: '1 pt — Error bars drawn correctly for all six means (±2SE)',
            description: 'Each bar extends from mean − 2SE to mean + 2SE (e.g., 7.0 to 8.2 at 675 nm). Bars of the wrong length or on only some points do not earn the point.',
          },
        ],
      },
      {
        letter: 'C',
        question:
          '(C) (i) Using the data, determine whether the rate of $O_{2}$ release at 425 nm differs significantly from the rate at 675 nm. (ii) Explain why the rate of $O_{2}$ release was lowest at 525 nm.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — (i) Not significantly different: the intervals 7.6–8.8 and 7.0–8.2 µL/min overlap',
            description: 'Must state the conclusion AND cite the overlap of the error bars or intervals.',
          },
          {
            id: 'c2',
            label: '1 pt — (ii) Chlorophyll absorbs little green light (it is reflected or transmitted), so fewer electrons are excited and less water is split to release $O_{2}$',
            description: 'Must connect poor absorption of green light to less energy driving the light reactions (electron flow, water splitting or ATP/NADPH production). "Plants do not like green light" does not earn the point.',
          },
        ],
      },
      {
        letter: 'D',
        question:
          '(D) The researchers repeat the 675 nm treatment, but add a compound that stops the Calvin cycle (the light-independent reactions) after 10 minutes. (i) Predict the effect of the compound on the rate of $O_{2}$ release over the next 20 minutes. (ii) Justify your prediction.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — (i) The rate of $O_{2}$ release decreases (toward zero)',
            description: 'Any prediction of a decrease or a stop earns the point. "No change, because $O_{2}$ comes from the light reactions" does not.',
          },
          {
            id: 'd2',
            label: '1 pt — (ii) Without the Calvin cycle, NADPH and ATP are not used, so NADP⁺ (and ADP) run out; electrons from water have no acceptor, and water splitting slows',
            description: 'Must explain the dependence of the light reactions on NADP⁺ (or ADP) regenerated by the Calvin cycle.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) Chlorophyll in the photosystems absorbs light energy, which excites electrons. The excited electrons move along an electron transport chain, which pumps $H^{+}$ for ATP synthesis and reduces NADP⁺ to NADPH; water is split to replace the electrons, releasing $O_{2}$.\n\n' +
      '(B) A graph with wavelength (nm) from 400 to 700 on the x-axis and $O_{2}$ release (µL/min) from 0 to 10 on the y-axis, the six means plotted (8.2, 6.5, 1.4, 2.0, 4.4, 7.6) and connected, and a vertical bar on each point spanning mean ± 2SE (e.g., 1.0 to 1.8 at 525 nm).\n\n' +
      '(C) (i) At 425 nm the interval is 7.6–8.8 and at 675 nm 7.0–8.2. They overlap, so the rates do not differ significantly. (ii) Chlorophyll absorbs blue and red light well but reflects or transmits most green light. Less absorbed energy means fewer excited electrons, so less water is split and less $O_{2}$ is released.\n\n' +
      '(D) (i) $O_{2}$ release will fall toward zero. (ii) The Calvin cycle uses ATP and NADPH and returns ADP and NADP⁺ to the light reactions. Once it stops, NADP⁺ runs out, electrons have nowhere to go, the electron transport chain backs up, and water is no longer split, so $O_{2}$ release stops.',
  },

  /* ---------- FRQ 3 — SHORT: Scientific Investigation (Unit 2) ---------- */
  {
    type: 'saq',
    topic: 'unit-2-cell-structure',
    prompt:
      '**FRQ 3 — Short: Scientific Investigation**\n\n' +
      'Beet root cells store a large, water-soluble red pigment inside their central vacuoles. When the membranes around the vacuole and the cell are damaged, the pigment leaks out and colors the surrounding water. A student cut equal-sized cubes of beet root, rinsed them, and placed one cube in a water bath at each of 0, 20, 40, 60 and 80°C for 10 minutes. Each cube was then moved to a tube of room-temperature water for 20 minutes, and the water was placed in a colorimeter that measures how much light the red pigment absorbs.',
    parts: [
      {
        letter: 'A',
        question: '(A) Describe the property of cell membranes that normally keeps the pigment inside the vacuole.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — The hydrophobic interior of the phospholipid bilayer blocks large polar (water-soluble) molecules from crossing',
            description: 'Must refer to the nonpolar/hydrophobic core (or selective permeability based on polarity and size). "The membrane is a wall" does not earn the point.',
          },
        ],
      },
      {
        letter: 'B',
        question: '(B) Identify the dependent variable in this investigation.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — The absorbance (color intensity) of the water, a measure of the amount of pigment that leaked',
            description: 'Temperature is the independent variable and does not earn the point.',
          },
        ],
      },
      {
        letter: 'C',
        question: '(C) Predict how the absorbance of the water from the 80°C cube will compare with that from the 20°C cube.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Absorbance will be higher for the 80°C cube',
            description: 'Any statement that more pigment/greater absorbance/darker red results at 80°C.',
          },
        ],
      },
      {
        letter: 'D',
        question: '(D) Justify your prediction.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — High temperature disrupts the bilayer (more fluid, gaps form) and denatures membrane proteins, so the membranes become leaky',
            description: 'Must connect heat to damage of membrane structure (lipids or proteins). "Heat makes the pigment move faster" alone does not earn the point.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) The core of the phospholipid bilayer is made of hydrophobic fatty acid tails, so large polar molecules such as the pigment cannot pass through it.\n\n' +
      '(B) The absorbance of the water, which measures how much pigment leaked out of the cube.\n\n' +
      '(C) The water from the 80°C cube will have a much higher absorbance than the water from the 20°C cube.\n\n' +
      '(D) At 80°C the phospholipids move so much that the bilayer loses its organization, and membrane proteins denature, leaving gaps; the pigment leaks out of the vacuole and the cell into the water.',
  },

  /* ---------- FRQ 4 — SHORT: Conceptual Analysis (Unit 5) ---------- */
  {
    type: 'saq',
    topic: 'unit-5-heredity',
    prompt:
      '**FRQ 4 — Short: Conceptual Analysis**\n\n' +
      'In a species of moth, gene A affects wing color and gene B affects the shape of the antennae. A moth that is heterozygous for both genes (AaBb) inherited A and B from its mother and a and b from its father. The moth produces gametes by meiosis.',
    parts: [
      {
        letter: 'A',
        question: '(A) Describe the event in meiosis that separates allele A from allele a into different gametes.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Homologous chromosomes separate (move to opposite poles) in anaphase of meiosis I',
            description: 'Must name the separation of homologous chromosomes in anaphase I. Also accept: if a crossover occurs between gene A and the centromere, A and a end up on sister chromatids of one chromosome and separate in anaphase II. "Chromosomes split" or "cell divides" without naming homologs or sister chromatids does not earn the point.',
          },
        ],
      },
      {
        letter: 'B',
        question: '(B) The genes are on different chromosomes. Predict the fraction of the moth\'s gametes that carry both a and B.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — 1/4 (25%)',
            description: 'Independent assortment gives four gamete types (AB, Ab, aB, ab) in equal proportions.',
          },
        ],
      },
      {
        letter: 'C',
        question:
          '(C) Suppose instead that genes A and B are very close together on the same chromosome. Explain how the proportions of the moth\'s gamete types would differ from the proportions in part (B).',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Most gametes would be AB or ab (the parental combinations); Ab and aB would be rare',
            description: 'Must identify that the parental combinations (AB and ab, as inherited) predominate because the alleles on each chromosome are inherited together. Saying only "they would be linked" does not earn the point.',
          },
        ],
      },
      {
        letter: 'D',
        question: '(D) Explain how the moth in part (C) could still produce some gametes carrying a and B.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — Crossing over between nonsister chromatids of the homologs at a point between genes A and B in prophase I',
            description: 'Must describe an exchange of segments between homologous chromosomes that falls between the two genes. Independent assortment or mutation does not earn the point.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) In meiosis I, the homologous chromosome carrying A and the one carrying a pair up and then separate in anaphase I, so each gamete receives only one of them.\n\n' +
      '(B) 1/4. With independent assortment, AB, Ab, aB and ab gametes are equally likely.\n\n' +
      '(C) The moth would make mostly AB and ab gametes, the combinations it inherited, because alleles close together on one chromosome are usually inherited together. Ab and aB gametes would be much less than 1/4 each.\n\n' +
      '(D) During prophase I, nonsister chromatids of the two homologs can cross over. If an exchange happens between the A and B loci, one chromatid ends up carrying a with B, producing an aB gamete.',
  },

  /* ---------- FRQ 5 — SHORT: Analysis of a Model (Unit 6) ---------- */
  {
    type: 'saq',
    topic: 'unit-6-gene-expression-regulation',
    prompt:
      '**FRQ 5 — Short: Analysis of a Model or Visual Representation**\n\n' +
      'The model below shows the steps by which a retrovirus infects a human cell.\n\n' +
      'Step 1: The virus\'s RNA genome and its enzyme reverse transcriptase enter the host cell.\n\n' +
      'Step 2: Reverse transcriptase uses the viral RNA as a template to make a complementary DNA strand, then a second DNA strand, forming double-stranded viral DNA.\n\n' +
      'Step 3: The viral DNA enters the nucleus and is inserted into a host chromosome.\n\n' +
      'Step 4: Host RNA polymerase transcribes the inserted viral genes into RNA.\n\n' +
      'Step 5: Host ribosomes translate some of the viral RNA into viral proteins; other copies of the RNA are packaged with the proteins into new virus particles that leave the cell.',
    parts: [
      {
        letter: 'A',
        question: '(A) Describe how the flow of genetic information in Step 2 differs from the flow of information in transcription in an uninfected cell.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Step 2 copies RNA into DNA, the reverse of transcription, which copies DNA into RNA',
            description: 'Both directions must be stated or clearly implied.',
          },
        ],
      },
      {
        letter: 'B',
        question:
          '(B) A drug blocks reverse transcriptase. Explain why this drug would not stop an uninfected human cell from making its own mRNA.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — The cell makes mRNA with RNA polymerase from a DNA template; it does not use reverse transcriptase',
            description: 'Must identify that host transcription relies on a different enzyme (RNA polymerase) or does not need reverse transcriptase.',
          },
        ],
      },
      {
        letter: 'C',
        question: '(C) Using the model, predict whether an infected cell that divides will pass the viral genes to its daughter cells. Justify your prediction.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Yes: after Step 3 the viral DNA is part of a host chromosome, so it is replicated and passed on with that chromosome',
            description: 'Prediction and justification are both needed for the point; the justification must refer to the viral DNA being inserted into (integrated in) a host chromosome.',
          },
        ],
      },
      {
        letter: 'D',
        question:
          '(D) Explain why giving the reverse-transcriptase-blocking drug to a person whose cells were infected long ago would not by itself stop those cells from producing new virus particles.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — Those cells already carry integrated viral DNA, so Steps 4–5 (transcription and translation by host enzymes) continue without reverse transcriptase',
            description: 'Must connect the already-inserted viral DNA to continued transcription/translation that does not need Step 2.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) In Step 2, information flows from RNA to DNA. In normal transcription it flows from DNA to RNA.\n\n' +
      '(B) Human cells transcribe their genes using RNA polymerase reading a DNA template. They have no need for reverse transcriptase, so blocking it does not affect their mRNA production.\n\n' +
      '(C) Yes. In Step 3 the viral DNA becomes part of a host chromosome, so it is copied during S phase and each daughter cell receives a copy.\n\n' +
      '(D) In cells infected long ago, the viral DNA is already in a chromosome. Host RNA polymerase and ribosomes carry out Steps 4 and 5, which do not use reverse transcriptase, so those cells keep making virus particles.',
  },

  /* ---------- FRQ 6 — SHORT: Analysis of Data (Unit 8) ---------- */
  {
    type: 'saq',
    topic: 'unit-8-ecology',
    prompt:
      '**FRQ 6 — Short: Analysis of Data**\n\n' +
      'Coffee plants produce many more fruits when their flowers are visited by insect pollinators. Researchers measured the percentage of flowers that developed into fruits (fruit set) on coffee plants at different distances from a patch of forest where many wild bees nest.\n\n' +
      '| Distance from forest (m) | Fruit set (% of flowers) ± 2SE |\n' +
      '|---|---|\n' +
      '| 50 | 62 ± 4 |\n' +
      '| 250 | 55 ± 5 |\n' +
      '| 500 | 41 ± 5 |\n' +
      '| 1,000 | 30 ± 4 |\n' +
      '| 1,500 | 29 ± 4 |',
    parts: [
      {
        letter: 'A',
        question: '(A) Describe the relationship between distance from the forest and fruit set.',
        rubric: [
          {
            id: 'a1',
            label: '1 pt — Fruit set decreases as distance increases up to about 1,000 m, then levels off',
            description: 'A description of the decrease with distance earns the point; noting the leveling between 1,000 and 1,500 m is good but not required. "Distance affects fruit set" alone does not earn the point.',
          },
        ],
      },
      {
        letter: 'B',
        question: '(B) Calculate the percent decrease in fruit set between 50 m and 1,000 m.',
        rubric: [
          {
            id: 'b1',
            label: '1 pt — (62 − 30) / 62 × 100 ≈ 52%',
            description: 'Accept 51–52%. The difference of 32 percentage points alone does not earn the point.',
          },
        ],
      },
      {
        letter: 'C',
        question: '(C) Determine whether fruit set at 1,000 m differs significantly from fruit set at 1,500 m. Support your answer with the data.',
        rubric: [
          {
            id: 'c1',
            label: '1 pt — Not significantly different: the intervals 26–34% and 25–33% overlap',
            description: 'The conclusion must be supported by the overlap of the ±2SE intervals.',
          },
        ],
      },
      {
        letter: 'D',
        question:
          '(D) The forest patch is cleared to plant more coffee. Predict the effect on fruit set of the coffee plants growing 250 m from the former forest edge, and justify your prediction.',
        rubric: [
          {
            id: 'd1',
            label: '1 pt — Fruit set at 250 m will fall (toward about 30%), because the bees lose their nesting habitat and fewer flowers are pollinated',
            description: 'Prediction and justification are both needed; the justification must connect the loss of the forest to fewer bee pollinators.',
          },
        ],
      },
    ],
    sampleResponse:
      '(A) Fruit set falls from 62% at 50 m to 30% at 1,000 m and then stays about the same at 1,500 m.\n\n' +
      '(B) (62 − 30) / 62 × 100 ≈ 52% decrease.\n\n' +
      '(C) The intervals at 1,000 m (26–34%) and 1,500 m (25–33%) overlap, so fruit set does not differ significantly between those distances.\n\n' +
      '(D) Fruit set at 250 m will drop to roughly the level of the far plots (about 30%), because the wild bees nest in the forest; without it, fewer bees are present to pollinate the coffee flowers.',
  },
]
