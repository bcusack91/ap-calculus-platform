/**
 * MCAT Full-Length Form 8 — Biological & Biochemical Foundations, file A
 * (passages 1–5, 22 questions) + 8 discrete items.
 *
 * Built to the AAMC-alignment blueprint (BLUEPRINT-F78): 400–600-word
 * passages, a mix of experiment (chart/table) and information passages, keys
 * that cannot be found by matching passage wording, options written in
 * parallel frames of similar length, and key positions balanced across the file.
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT.
 *
 * Unicode super/subscripts are used in running text (no KaTeX math needed).
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL8_BIO_BIOCHEM_A_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 1. BIOCHEMISTRY (exp, chart) — sickle hemoglobin: β6 Glu→Val, the T-state
  //    acceptor pocket, delay time before polymerization vs concentration
  //    with and without HbF, electrophoresis of AA/AS/SS lysates
  //    Skills: Q1 S4 · Q2 S1 · Q3 S2 · Q4 S2 · Q5 S3
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-bb-a-01',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'The Delay Before Sickle Hemoglobin Polymerizes',
    passageText:
      'Adult hemoglobin (HbA) is a tetramer of two α chains and two β chains (α₂β₂). In sickle hemoglobin (HbS), a single-nucleotide change in the β-globin gene replaces the glutamate at position 6 of each β chain with valine. Position 6 lies on the outer surface of the folded protein, and the substitution has little effect on the binding of oxygen by HbS in dilute solution. Its consequences appear at the high concentration of hemoglobin found inside a red cell, about 32 g/dL, and only after oxygen has been released.\n\nWhen hemoglobin gives up its oxygen, it shifts from the R conformation to the T conformation. In the T conformation only, a pocket lined by a phenylalanine and a leucine is exposed on the surface of each β chain; the pocket is present in HbA as well as in HbS. The valine at position 6 of one deoxygenated HbS tetramer fits into the pocket of a neighboring tetramer, and repetition of this contact assembles the molecules into long, stiff fibers that deform the cell. Reoxygenation dissolves the fibers.\n\nFibers do not appear at the instant oxygen is removed. A small cluster of molecules must form first, and the cluster is unstable until it reaches a critical size. Polymerization is therefore preceded by a delay time, during which no polymer can be detected. A red cell spends about 1 s in a capillary and reaches the lungs again within the following 10–20 s. A cell whose delay time exceeds the time it spends in the narrowest vessels passes through them before it stiffens.\n\nResearchers measured the delay time of purified HbS at 37 °C. Each solution was deoxygenated completely within a few milliseconds, and the light scattered by the sample, which increases as fibers form, was recorded. The measurements were then repeated with mixtures in which fetal hemoglobin (HbF, α₂γ₂) made up 20% of the hemoglobin and HbS the remainder (Figure 1). The γ chain has glutamate at position 6 and differs from the β chain at 39 of its 146 residues. In the mixture with a total hemoglobin concentration of 30 g/dL, the delay time was about 100 s.\n\nIn a second experiment, red cells from three adults with the β-globin genotypes AA, AS, and SS were lysed, and the hemoglobin in each lysate was examined by electrophoresis at pH 8.6, at which all of these hemoglobins carry a net negative charge. The samples were applied at the end of the gel nearer the negative electrode. After the run, one lane contained a single band 4.0 cm from the origin, another contained a single band 3.0 cm from the origin, and the third contained both bands.\n\nHbF makes up less than 1% of the hemoglobin of most adults. Hydroxyurea, a drug that increases the proportion of HbF in the red cells of many patients with sickle-cell disease, reduces the frequency of their painful episodes of vessel blockage.',
    chart: {
      title: 'Figure 1. Delay time before polymerization of completely deoxygenated hemoglobin at 37 °C, plotted as log₁₀ of the delay time in milliseconds',
      kind: 'line',
      xLabel: 'Total hemoglobin concentration',
      xUnit: 'g/dL',
      yLabel: 'log₁₀ (delay time in ms)',
      xValues: [24, 26, 28, 30, 32, 34],
      yValues: [5.0, 4.0, 3.0, 2.1, 1.3, 0.5],
      seriesLabel: '100% HbS',
      comparisonSeries: [{ label: '80% HbS + 20% HbF', yValues: [7.9, 6.9, 5.9, 5.0, 4.2, 3.4] }],
    },
    questions: [
      {
        question: 'According to Figure 1, raising the concentration of pure HbS from 24 g/dL to 28 g/dL shortened the delay time by a factor of approximately:',
        options: ['1.7', '2', '100', '1,000'],
        correctAnswer: 2,
        explanation:
          'The vertical axis is logarithmic: the plotted value falls from 5.0 at 24 g/dL to 3.0 at 28 g/dL, a difference of 2 log units, so the delay time fell from 10⁵ ms to 10³ ms, a factor of 10² = 100. A factor of 2 mistakes the difference between the two logarithms for the ratio of the delay times. A factor of 1.7 is the ratio of the two plotted logarithms (5.0/3.0), which has no physical meaning. A factor of 1,000 would require a difference of 3 log units, which is the change between 24 and about 30 g/dL.',
        skill: '1A reading a logarithmic plot (data interpretation)',
      },
      {
        question: 'In the electrophoresis experiment, the lysate from the adult with the SS genotype produced:',
        options: [
          'the single band at 4.0 cm, because HbS carries more negative charge than HbA.',
          'the single band at 3.0 cm, because HbS carries less negative charge than HbA.',
          'the single band at 3.0 cm, because HbS has a much greater molecular mass than HbA.',
          'the single band at 4.0 cm, because HbS has a much smaller molecular mass than HbA.',
        ],
        correctAnswer: 1,
        explanation:
          'At pH 8.6 the side chain of glutamate is ionized and carries a negative charge, whereas that of valine is uncharged, so each HbS tetramer has two fewer negative charges than HbA and moves more slowly toward the positive electrode; a person with only HbS therefore gives the single band nearer the origin. Replacing glutamate with valine removes negative charge rather than adding it, so HbS cannot be the faster band. The two proteins differ in mass by only about 60 Da out of roughly 64,500, far too little to separate them, and the separation described depends on charge.',
        skill: '1A amino acid charge and electrophoretic mobility',
      },
      {
        question: 'The delay time reported for the mixture at a total hemoglobin concentration of 30 g/dL, taken together with Figure 1, is most consistent with the conclusion that:',
        options: [
          'HbF stays out of the polymer, and the delay time is set by the concentration of HbS alone.',
          'HbF enters the polymer, and the delay time is set by the total concentration of hemoglobin.',
          'HbF stays out of the polymer, and the delay time is set by the total concentration of hemoglobin.',
          'HbF enters the polymer, and the delay time is set by the concentration of HbF alone.',
        ],
        correctAnswer: 0,
        explanation:
          'In the mixture at 30 g/dL, HbS makes up 80% of the hemoglobin, or 24 g/dL. A delay time of 100 s is 10⁵ ms, a plotted value of 5.0, which is the value Figure 1 gives for pure HbS at 24 g/dL; the mixture therefore behaves as though the HbF were not there, as expected if HbF takes no part in the polymer. If the total concentration set the delay time, whether or not HbF entered the polymer, the mixture would match pure HbS at 30 g/dL, a plotted value of 2.1, or about 0.1 s. The delay time cannot be set by HbF alone, because solutions that contain no HbF polymerize.',
        skill: '1A fetal hemoglobin and polymerization (reasoning from data)',
      },
      {
        question: 'A compound that binds HbS and increases its affinity for oxygen is being evaluated as a treatment for sickle-cell disease. At the partial pressure of oxygen found in a capillary, the compound would be expected to:',
        options: [
          'shorten the delay time, because a larger share of the HbS would be in the T conformation.',
          'shorten the delay time, because the valine at position 6 would be more exposed to solvent.',
          'lengthen the delay time, because the valine at position 6 would be buried inside the protein.',
          'lengthen the delay time, because a smaller share of the HbS would be in the T conformation.',
        ],
        correctAnswer: 3,
        explanation:
          'A higher oxygen affinity means that more hemoglobin stays oxygenated, and therefore in the R conformation, at any given partial pressure of oxygen. Only T-state molecules expose the pocket that receives the valine of a neighbor, so fewer molecules are able to join a polymer; this is equivalent to lowering the concentration of polymerizing hemoglobin, which lengthens the delay time steeply. A larger share of T-state molecules would follow from a lower, not a higher, oxygen affinity. The valine at position 6 lies on the surface in both conformations; it is the pocket, not the valine, that the change of conformation exposes or hides.',
        skill: '1A hemoglobin conformation and ligand affinity',
      },
      {
        question: 'Which additional control would best establish that the rise in scattered light reports the polymerization of HbS and not some other effect of the deoxygenation procedure on concentrated hemoglobin?',
        options: [
          'Applying the same procedure to HbA at the same concentrations and finding no rise in scattering',
          'Repeating each measurement on HbS three times and finding nearly the same delay time in each run',
          'Measuring the oxygen affinity of each HbS solution in dilute form before it was deoxygenated',
          'Recording the light scattered by each HbS solution for a longer period after the rise was complete',
        ],
        correctAnswer: 0,
        explanation:
          'HbA is the same protein at the same concentration, lacking only the valine that makes the fiber contact; if deoxygenated HbA shows no rise in scattering, the signal can be attributed to polymer and not to aggregation, heating, or another consequence of the procedure itself. Replicate runs show that the measurement is reproducible, but an artifact would be reproducible as well. The oxygen affinity of dilute HbS says nothing about what scatters light in the concentrated, deoxygenated sample. Recording for longer after the rise only extends the same signal without identifying its source.',
        skill: '1A research design: negative controls',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 2. PHYSIOLOGY (info) — the male reproductive axis: GnRH, LH and FSH;
  //    Leydig and Sertoli cells; inhibin; testosterone and DHT; exogenous
  //    androgens; the path of sperm; temperature and spermatogenesis
  //    Skills: Q1 S2 · Q2 S2 · Q3 S1 · Q4 S1
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-bb-a-02',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Hormonal Control of the Testis',
    passageText:
      'The testis has two tasks, the production of sperm and the secretion of testosterone, and it carries them out in separate compartments. Sperm are formed inside the seminiferous tubules. The wall of each tubule is built of Sertoli cells, tall cells that reach from the outer edge of the tubule to its lumen and enfold the developing germ cells. Tight junctions between neighboring Sertoli cells divide the tubule into an outer compartment, which holds the dividing stem cells, and an inner compartment, in which meiosis and the later steps of sperm formation take place. Leydig cells lie between the tubules, close to the blood vessels, and synthesize testosterone from cholesterol.\n\nBoth compartments are controlled by the anterior pituitary. Neurons of the hypothalamus release gonadotropin-releasing hormone (GnRH) in brief pulses, and GnRH causes the pituitary to secrete luteinizing hormone (LH) and follicle-stimulating hormone (FSH). LH acts on Leydig cells and is required for their secretion of testosterone. FSH acts on Sertoli cells. Sperm formation requires testosterone as well as FSH, and at a concentration far above that of the blood: because Leydig cells release testosterone beside the tubules, its concentration within the testis is 50 to 100 times its concentration in plasma. Germ cells have receptors for neither hormone; both act through the Sertoli cells.\n\nTwo products of the testis restrain the pituitary. Testosterone slows the pulses of GnRH and makes the pituitary less responsive to them, which lowers the secretion of LH and, to a smaller degree, of FSH. Sertoli cells secrete inhibin, a peptide that suppresses FSH but not LH, and they secrete more of it when sperm formation is proceeding normally.\n\nIn some tissues testosterone is a precursor and not the final signal. The prostate, the skin, and the tissues that form the external genitalia of a male fetus contain 5α-reductase, which converts testosterone to dihydrotestosterone (DHT). DHT binds the same receptor as testosterone, but more tightly, and the growth of these tissues depends on it. Skeletal muscle contains very little of the enzyme and responds to testosterone itself, as do Sertoli cells. Adipose tissue contains aromatase, which converts testosterone to estradiol.\n\nThe formation of a sperm from a stem cell takes about ten weeks. Sperm released into the lumen of the tubule cannot yet swim; they mature during roughly two further weeks in the epididymis, where they are also stored. At ejaculation they travel through the vas deferens and are joined by the secretions of the seminal vesicles and the prostate, which make up most of the volume of semen.\n\nSperm formation also depends on temperature. The testes lie in the scrotum, where they are kept 2–4 °C cooler than the abdomen. Testes that fail to descend before birth and remain in the abdomen form few or no sperm in adult life unless the condition is corrected early, although their Leydig cells secrete nearly normal amounts of testosterone.\n\nSynthetic androgens related to testosterone are sometimes taken in large doses to increase muscle mass. They are injected or swallowed, circulate in the plasma, and activate the androgen receptor in every tissue that contains it, including the hypothalamus and the pituitary.',
    questions: [
      {
        question: 'A man who has injected large doses of a synthetic androgen for a year is evaluated for infertility. Compared with the values before he began, which set of findings is expected for plasma LH, the concentration of testosterone within the testis, and the sperm count?',
        options: [
          'LH increased; testosterone within the testis increased; sperm count increased',
          'LH decreased; testosterone within the testis increased; sperm count decreased',
          'LH increased; testosterone within the testis decreased; sperm count decreased',
          'LH decreased; testosterone within the testis decreased; sperm count decreased',
        ],
        correctAnswer: 3,
        explanation:
          'The synthetic androgen acts on the hypothalamus and pituitary as testosterone does, so LH (and FSH) secretion is suppressed. Without LH the Leydig cells stop making testosterone, and the very high local concentration that sperm formation requires collapses; the injected androgen arrives only at its plasma concentration and cannot replace it, so the sperm count falls. LH cannot rise while the androgen receptor of the pituitary is being strongly activated, which excludes the two options that begin with an increase. Testosterone within the testis cannot rise when the Leydig cells have lost the LH on which their secretion depends.',
        skill: '3B negative feedback: exogenous androgens and the testis',
      },
      {
        question: 'Four drugs are being considered to slow the growth of the prostate in a man who wishes to remain fertile. Based on the passage, which drug is LEAST likely to reduce his production of sperm?',
        options: [
          'A drug that blocks the GnRH receptors of the pituitary',
          'A drug that inhibits the enzyme 5α-reductase',
          'A drug that blocks the androgen receptor in all tissues',
          'A drug that inhibits an enzyme of testosterone synthesis',
        ],
        correctAnswer: 1,
        explanation:
          'Growth of the prostate depends on DHT, but Sertoli cells respond to testosterone itself, so an inhibitor of 5α-reductase deprives the prostate of its signal while leaving both the testosterone inside the testis and the response of the Sertoli cells in place. Blocking GnRH receptors removes LH and FSH, and with them the testosterone and the FSH that sperm formation requires. Blocking the androgen receptor everywhere prevents Sertoli cells from responding to testosterone, however much is present. Inhibiting the synthesis of testosterone lowers its concentration within the testis directly.',
        skill: '3B testosterone vs dihydrotestosterone',
      },
      {
        question: 'After a vasectomy, in which each vas deferens is cut and tied, a man would be expected to have:',
        options: [
          'a low plasma testosterone level, because the hormone can no longer leave the testes.',
          'a high plasma LH level, because testosterone no longer reaches the pituitary gland.',
          'a nearly normal volume of semen, because most of the fluid is added beyond the cut.',
          'a much smaller volume of semen, because most of the fluid is formed in the testes.',
        ],
        correctAnswer: 2,
        explanation:
          'The seminal vesicles and the prostate empty into the reproductive tract downstream of the point at which the vas deferens is cut, and their secretions make up most of the semen, so its volume changes little even though it no longer contains sperm. Testosterone is a hormone and leaves the testis in the blood, not through the vas deferens, so its plasma level and its feedback on the pituitary are unchanged and LH does not rise. The fluid that accompanies sperm from the testis and epididymis is only a small part of the ejaculate.',
        skill: '3B male reproductive tract: path of sperm and sources of semen',
      },
      {
        question: 'The artery that supplies the testis is surrounded, along much of its length, by a network of veins carrying blood away from the testis, and arterial blood reaches the testis cooler than it left the abdomen. This cooling occurs because:',
        options: [
          'heat passes from the warmer arterial blood to the cooler venous blood that flows past it in the opposite direction.',
          'arterial blood mixes with venous blood through channels that join the two sets of vessels.',
          'arterial blood slows within the network, so that the blood cells produce less metabolic heat.',
          'venous blood takes up carbon dioxide from the arterial blood, which absorbs heat as it leaves.',
        ],
        correctAnswer: 0,
        explanation:
          'Venous blood returning from the scrotum is cooler than arterial blood arriving from the abdomen, and because the two streams run side by side in opposite directions, heat is conducted from artery to vein along the whole length of the network; this countercurrent exchange precools the arterial blood and returns the heat to the body. The two sets of vessels exchange heat across their walls and do not mix their contents. Slowing of the blood would not cool it, and the heat produced by blood cells is negligible. Carbon dioxide is not transferred from arterial to venous blood across vessel walls, and its movement would not carry away heat.',
        skill: '3B countercurrent heat exchange',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 3. GENETICS (exp, chart) — trinucleotide-repeat expansion in Huntington
  //    disease: repeat length vs age at onset, sizing alleles by PCR,
  //    paternal bias in expansion, anticipation, toxic gain of function
  //    Skills: Q1 S4 · Q2 S2 · Q3 S3 · Q4 S2 · Q5 S1
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-bb-a-03',
    section: 'bio-biochem',
    discipline: 'genetics',
    title: 'Repeat Length and Age at Onset in Huntington Disease',
    passageText:
      'Huntington disease (HD) is a progressive disorder of movement, mood, and cognition caused by the degeneration of neurons in the striatum. It is inherited as an autosomal dominant trait. The gene involved, HTT, lies on chromosome 4, and its first exon contains a run of consecutive CAG codons that is translated into a tract of glutamine residues near the amino terminus of the protein huntingtin. The number of CAG repeats differs among people. Alleles with 26 or fewer repeats are passed from parent to child without change in length and never cause disease. Alleles with 40 or more repeats cause HD in every carrier who lives long enough. Alleles with 27–35 repeats cause no disease in the people who carry them but, like all longer alleles, may change in length when they are transmitted; alleles with 36–39 repeats cause disease in some carriers and not in others.\n\nInvestigators recorded the age at which motor symptoms first appeared in 1,200 patients and determined the number of repeats in the expanded allele of each (Figure 1). Repeat length accounted for about 60% of the variation in age at onset among these patients.\n\nRepeat length was measured by PCR with primers that anneal to unique sequences on either side of the repeat tract. Each amplified product consists of 60 base pairs of flanking sequence, including the primers, plus the repeats, and the products were sized by electrophoresis. The investigators noted that the polymerase copies long, GC-rich repeat tracts inefficiently and that, when a reaction contains two templates of unequal length, the shorter one is amplified preferentially.\n\nTo learn how repeat length changes between generations, the investigators studied 300 parent–child pairs in which the child had inherited the parent’s expanded allele. In transmissions from mothers, the allele gained or lost a few repeats about equally often, and the mean change was close to zero. In transmissions from fathers, the allele lengthened in most cases, by a mean of 4 repeats, and in about 5% of cases it gained more than 10. Most patients whose symptoms began before age 20 had inherited the disease allele from their fathers. When single sperm from affected men were analyzed, the length of the expanded allele differed widely from one sperm to the next, although it was nearly uniform among the blood cells of the same men.\n\nOne family was examined in detail. The PCR products were 114 and 192 base pairs long for the father, whose symptoms began at age 46; 111 and 123 base pairs for the mother, who is healthy at age 70; and 111 and 228 base pairs for their daughter, who is 19 and has no symptoms.\n\nTwo further observations bear on how the expansion causes disease. People born with a deletion that removes one entire copy of HTT do not develop HD, whereas mice that lack both copies of the corresponding gene die as embryos. And the few known people who carry expanded alleles on both copies of chromosome 4 developed normally before birth and through childhood; their symptoms began at about the age predicted by the longer of their two alleles.',
    chart: {
      title: 'Figure 1. Mean age at onset of motor symptoms as a function of the number of CAG repeats in the expanded allele',
      kind: 'line',
      xLabel: 'Length of the expanded allele',
      xUnit: 'CAG repeats',
      yLabel: 'Mean age at onset',
      yUnit: 'years',
      xValues: [40, 44, 48, 52, 56, 60],
      yValues: [62, 45, 34, 28, 24, 21],
      seriesLabel: 'Patients with HD (n = 1,200)',
    },
    questions: [
      {
        question: 'Based on the PCR results for the family and on Figure 1, the mean age at onset among carriers of an allele as long as the daughter’s longer allele is closest to:',
        options: ['21 years', '24 years', '34 years', '45 years'],
        correctAnswer: 1,
        explanation:
          'The daughter’s longer product is 228 base pairs, of which 60 are flanking sequence; the remaining 168 base pairs correspond to 168/3 = 56 CAG repeats, and Figure 1 gives a mean age at onset of 24 years for 56 repeats. An age of 21 years corresponds to 60 repeats, more than her allele contains. An age of 34 years corresponds to 48 repeats, which would give a product of only 204 base pairs. An age of 45 years corresponds to 44 repeats, the length of her father’s expanded allele (192 base pairs), not of hers.',
        skill: '1C repeat length and age at onset (data interpretation)',
      },
      {
        question: 'Which parent transmitted the disease allele to the daughter, and how did the allele change in transmission?',
        options: [
          'The mother; her 123-base-pair allele gained 35 repeats.',
          'The mother; her 111-base-pair allele gained 39 repeats.',
          'The father; his 192-base-pair allele gained 12 repeats.',
          'The father; his 192-base-pair allele gained 36 repeats.',
        ],
        correctAnswer: 2,
        explanation:
          'The daughter’s 111-base-pair product matches an allele that only her mother carries, so her other allele came from her father. His 114-base-pair allele has 18 repeats and would have been passed on unchanged; the 228-base-pair allele therefore descends from his 192-base-pair allele, which grew by 36 base pairs, or 36/3 = 12 repeats (from 44 to 56). A gain of 36 repeats confuses base pairs with repeats. Both of the mother’s alleles have fewer than 27 repeats (17 and 21), which are transmitted without change, and one of them reached the daughter at its original length.',
        skill: '1C sizing repeat alleles by PCR and tracing transmission',
      },
      {
        question: 'A blood sample from a 12-year-old who has symptoms of HD, and whose father has the disease, yields a single PCR product of 117 base pairs. Before concluding that the child carries two normal alleles of the same length, the laboratory should first consider the possibility that:',
        options: [
          'the child inherited both copies of chromosome 4 from the unaffected mother.',
          'the primers annealed inside the repeat tract and not to the flanking sequence.',
          'the repeat tract in the blood cells of the child is shorter than that in neurons.',
          'a very long expanded allele is present but was not amplified.',
        ],
        correctAnswer: 3,
        explanation:
          'Onset in childhood after paternal transmission points to a very large expansion, and the passage notes that long, GC-rich tracts are copied inefficiently and are out-competed by a shorter template; such an allele can fail to give a visible product, leaving only the normal allele’s band and a false appearance of homozygosity. Two maternal copies of chromosome 4 would not explain the symptoms, since the mother has no disease allele. Primers that annealed within the repeats could bind at many positions and would give products of many sizes, not one sharp band. An inherited expansion is present in all cells, and the expanded allele was nearly uniform in length among blood cells, so blood would still reveal it.',
        skill: '1C research design: allele dropout in PCR',
      },
      {
        question: 'Taken together, the observations in the final paragraph are most consistent with the conclusion that huntingtin made from an expanded allele:',
        options: [
          'still carries out the normal function of the protein and has acquired a harmful new property.',
          'has lost the normal function of the protein, and one working copy of the gene is too few.',
          'has lost the normal function of the protein and also inactivates the product of the other allele.',
          'still carries out the normal function of the protein and is harmful only when made in excess.',
        ],
        correctAnswer: 0,
        explanation:
          'People with only one copy of HTT are healthy, so having half the normal amount of functional protein does not cause HD, which rules out simple loss of function with one copy being too few. Complete absence of the protein is lethal to the embryo, yet people with two expanded alleles develop normally; their expanded protein must therefore still do the job of huntingtin, which also rules out a mutant product that is inactive and disables the normal one. The disease must arise from something the expanded protein newly does. A carrier of one expanded and one normal allele makes no more huntingtin than anyone else and still develops HD, so an excess of the protein cannot be the cause; the expansion alters the protein, not its amount.',
        skill: '1C gain of function vs loss of function',
      },
      {
        question: 'In families with HD, symptoms often begin at a younger age in each successive generation, most strikingly when the disease is passed down through fathers. This pattern and its cause are best described as:',
        options: [
          'incomplete penetrance, caused by alleles that produce disease in only some carriers.',
          'genomic imprinting, caused by silencing of the copy of HTT inherited from the mother.',
          'anticipation, caused by lengthening of the repeat tract when it passes through the germ line.',
          'variable expressivity, caused by differences among patients in genes other than HTT.',
        ],
        correctAnswer: 2,
        explanation:
          'Anticipation is the tendency of a disorder to appear earlier, or more severely, in successive generations; in HD it follows from the growth of the repeat tract during transmission, which is larger and more frequent in the male germ line, together with the earlier onset that longer tracts produce. Incomplete penetrance describes carriers who never develop the disease and does not account for a steady shift in age from one generation to the next. Imprinting would silence one parental copy in every carrier, but both copies of HTT are expressed, and the sex of the parent matters here only through its effect on repeat length. Variable expressivity due to other genes would scatter ages at onset without a consistent direction across generations.',
        skill: '1C anticipation',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 4. MICROBIOLOGY (info) — biofilms and quorum sensing: autoinducers,
  //    density-dependent gene expression, tolerance vs heritable resistance,
  //    device-associated infection, drugs that block quorum sensing
  //    Skills: Q1 S2 · Q2 S1 · Q3 S3 · Q4 S2
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-bb-a-04',
    section: 'bio-biochem',
    discipline: 'microbiology',
    title: 'How Bacteria Sense Their Numbers and Build Biofilms',
    passageText:
      'Bacteria in laboratory cultures are usually studied as free-swimming, or planktonic, cells. In nature most bacteria live instead in biofilms: communities that are attached to a surface and embedded in a matrix secreted by the cells themselves. The matrix consists of polysaccharides, proteins, and DNA released from dead cells. A biofilm begins when planktonic cells adhere to a surface, and it thickens through cell division and the arrival of further cells. From time to time cells leave a mature biofilm, resume the planktonic state, and settle elsewhere.\n\nMany of the changes that accompany life in a biofilm depend on quorum sensing, a mechanism by which bacteria adjust the expression of their genes to the density of their population. Each cell produces a small signal molecule called an autoinducer. In many Gram-negative species the autoinducer is an acyl-homoserine lactone (AHL), which is made in the cytoplasm by a synthase and passes freely through the membranes of the cell in both directions. While cells are sparse, the AHL they release is diluted in the surroundings, and its concentration inside each cell stays low. As a population grows within a confined space, the concentration rises. Above a threshold, AHL binds a receptor protein in the cytoplasm, and the complex binds DNA and activates the transcription of a set of target genes. Gram-positive bacteria follow the same logic but use short peptides as autoinducers.\n\nQuorum sensing was discovered in a marine bacterium that emits light. Luciferase, the enzyme that generates the light, is produced only by dense populations, such as those the bacterium forms inside the light organ of a squid; the same cells are dark when they are dispersed in seawater. Pathogens use quorum sensing in a similar way. Pseudomonas aeruginosa delays the secretion of tissue-damaging proteases and toxins until its numbers are large, and the same system promotes the maturation of its biofilms.\n\nBiofilms cause persistent infections on implanted devices such as urinary and venous catheters, artificial joints, and heart valves. Bacteria in a biofilm can survive concentrations of antibiotics hundreds of times greater than those that kill the same strain in planktonic culture. Several features of the biofilm contribute. The matrix binds some antibiotics and slows their penetration. Cells near the surface consume oxygen and nutrients, so cells in the interior grow slowly or not at all, and most antibiotics act on processes that are carried out chiefly by growing cells. In addition, a small fraction of the cells in any population enter a dormant state without any change in their DNA. The matrix also shields the bacteria from phagocytes and antibodies. Antibiotics commonly relieve the symptoms of a device infection by killing the planktonic cells that the biofilm sheds, but the infection often returns when treatment ends, and the device must frequently be removed.\n\nBecause quorum sensing controls virulence but is not needed for growth, compounds that interfere with it are being studied as treatments. Some are analogs of AHL that occupy the receptor without activating it; others are enzymes that hydrolyze the lactone ring. In laboratory cultures, such agents reduce the secretion of toxins and the formation of biofilms at concentrations that have no effect on the rate at which the bacteria multiply.',
    questions: [
      {
        question: 'Two mutant strains of the luminescent bacterium are constructed: strain 1 lacks the AHL synthase, and strain 2 lacks the AHL receptor. Each strain is dark when grown alone to high density. When the two strains are grown together to high density, light would be emitted by:',
        options: ['both strains.', 'strain 1 only.', 'strain 2 only.', 'neither strain.'],
        correctAnswer: 1,
        explanation:
          'Strain 2 still has its synthase, so in a dense mixed culture it releases AHL, which diffuses into every cell present. Strain 1 has an intact receptor and target genes and lacks only its own source of signal; supplied with AHL by its neighbor, it activates the luciferase genes and emits light. Strain 2 cannot respond however much AHL accumulates, because it has no receptor to carry the signal to the DNA, so it stays dark, which excludes light from both strains or from strain 2 alone. The mixture is not dark, because between them the two strains supply every component that one responding cell needs.',
        skill: '2B quorum sensing: signal vs receptor mutants',
      },
      {
        question: 'The peptide autoinducers of Gram-positive bacteria, unlike AHLs, leave the cell only through a transport protein and are detected by a receptor at the cell surface. The most likely reason for the difference is that these peptides:',
        options: [
          'are broken down by proteases in the cytoplasm before they can bind a receptor there.',
          'are assembled outside the cell from amino acids that are present in the medium.',
          'are too large to pass through the peptidoglycan layer that surrounds the cell.',
          'are too polar to diffuse through the hydrocarbon interior of the cell membrane.',
        ],
        correctAnswer: 3,
        explanation:
          'A lipid bilayer is freely permeable only to small, largely nonpolar molecules. A peptide carries a charged amino group and carboxyl group and many hydrogen-bonding peptide bonds, so it cannot cross the hydrocarbon core unaided; it needs a transporter to get out, and it signals through a receptor that spans the membrane. Peptides are made on ribosomes in the cytoplasm, not assembled in the medium, and their synthesis there shows that they are not simply destroyed by cytoplasmic proteases. Peptidoglycan is a porous mesh through which short peptides pass readily, as they must in order to reach the cell membrane of a neighboring cell.',
        skill: '2B membrane permeability and signal molecules',
      },
      {
        question: 'Bacteria that survived a course of an antibiotic are recovered from the surface of a catheter. Which experiment would best determine whether they survived because of a heritable resistance to the drug or because of the protection that a biofilm provides?',
        options: [
          'Grow the recovered cells as a planktonic culture and compare the lowest drug concentration that kills them with that for the original strain.',
          'Measure the thickness of the matrix on the catheter and compare it with that of a biofilm of the original strain never exposed to the drug.',
          'Expose the intact catheter to a tenfold higher concentration of the drug and count the cells that are still alive on the following day.',
          'Measure the concentration of AHL within the biofilm and compare it with that in a dense planktonic culture of the original strain.',
        ],
        correctAnswer: 0,
        explanation:
          'A heritable change is passed to descendants and persists outside the biofilm, whereas the protection of a biofilm depends on matrix, slow growth, and dormancy and disappears when the cells grow freely. If the descendants of the survivors, grown planktonically, are killed by the same concentration as the original strain, survival was due to the biofilm; if they withstand higher concentrations, they carry resistance. Matrix thickness and AHL concentration describe the biofilm but do not reveal whether the cells have changed genetically. Survival of cells on the intact catheter at a higher dose is expected under either explanation, so it cannot separate them.',
        skill: '2B research design: tolerance vs heritable resistance',
      },
      {
        question: 'Resistance to a compound that blocks quorum sensing is predicted to spread through a bacterial population more slowly than resistance to a conventional antibiotic. The best basis for this prediction is that such a compound:',
        options: [
          'is destroyed by bacteria before any mutation conferring resistance can arise.',
          'enters cells too slowly to cause the mutations that give rise to resistance.',
          'does not kill or slow susceptible cells, so resistant cells gain little advantage.',
          'acts on a receptor encoded by a gene in which mutations cannot occur.',
        ],
        correctAnswer: 2,
        explanation:
          'Resistance spreads when resistant cells leave more descendants than susceptible ones. An antibiotic that kills or arrests susceptible cells gives a rare resistant mutant an enormous reproductive advantage; a compound that leaves the growth rate unchanged gives a mutant that ignores it almost none, so selection for resistance is weak. Drugs do not cause the mutations that confer resistance; mutations arise at random whether or not the drug is present, and selection then acts on them. Destruction of the compound by the bacteria would itself be a form of resistance, not a barrier to it. No gene is exempt from mutation.',
        skill: '2B selection for resistance',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 5. PHYSIOLOGY (exp, table) — gastric acid secretion: the parietal-cell
  //    H⁺/K⁺-ATPase; acetylcholine, gastrin and histamine; acid output in
  //    dogs after an H₂ blocker, a proton-pump inhibitor, or vagotomy;
  //    basolateral HCO₃⁻ exit (the alkaline tide)
  //    Skills: Q1 S4 · Q2 S2 · Q3 S3 · Q4 S1
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-bb-a-05',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Blocking the Stimulation of Gastric Acid Secretion at Three Sites',
    passageText:
      'The parietal cells of the stomach secrete hydrochloric acid at a concentration of about 0.15 M, which gives pure gastric juice a pH near 1. The H⁺ is generated inside the cell, where CO₂ and water are converted to H⁺ and HCO₃⁻. An H⁺/K⁺-ATPase in the apical membrane pumps H⁺ into the lumen in exchange for K⁺; the K⁺ returns to the lumen through channels, and Cl⁻ follows the H⁺ through channels of its own. The HCO₃⁻ leaves the cell across the basolateral membrane in exchange for Cl⁻ taken from the interstitial fluid. In a resting parietal cell most of the pumps are held in vesicles within the cytoplasm, and stimulation causes these vesicles to fuse with the apical membrane. Gastric juice also contains pepsinogen, the inactive precursor of the protease pepsin, which is secreted by neighboring chief cells.\n\nThree chemical signals stimulate the parietal cell. Acetylcholine, released from nerve endings that are driven by the vagus nerve, acts on muscarinic receptors. Gastrin, a hormone released into the blood by G cells of the antrum when peptides enter the stomach, acts on gastrin receptors. Histamine, released by enterochromaffin-like (ECL) cells that lie beside the parietal cells, acts on H₂ receptors. ECL cells release histamine in response to gastrin and to vagal activity, and the vagus nerve also stimulates the G cells. The signals reinforce one another: a parietal cell responds more strongly to any one of them when the others are also present.\n\nThe sight, smell, and taste of food increase acid secretion before any food arrives in the stomach. This response can be produced by sham feeding, in which food is chewed and swallowed but leaves the body through a surgical opening in the esophagus.\n\nInvestigators measured acid secretion in six dogs, each fitted with a cannula through which gastric juice could be collected. Acid output was calculated from the volume of juice collected in an hour and its H⁺ concentration, which was determined by titration. Every dog was studied on separate days under four conditions: no stimulus (basal); an intravenous infusion of histamine; an intravenous infusion of pentagastrin, a synthetic peptide that activates gastrin receptors; and sham feeding. Histamine and pentagastrin were given at the doses that produced the greatest output attainable with each agent. The four conditions were then repeated after the dogs had received an H₂-receptor antagonist and, several weeks later, after they had received a proton-pump inhibitor (PPI). A PPI is an inactive compound that is converted in strong acid to a form that bonds covalently to the H⁺/K⁺-ATPase on its luminal side. Finally, the branches of the vagus nerve that supply the stomach were cut, and after the dogs had recovered, the four conditions were repeated without any drug (Table 1).',
    figure:
      '**Table 1. Gastric acid output under four conditions (mmol H⁺ per hour; means of six dogs)**\n\n| Treatment | Basal | Histamine | Pentagastrin | Sham feeding |\n|---|---|---|---|---|\n| None | 1.0 | 30 | 28 | 20 |\n| H₂-receptor antagonist | 0.3 | 4 | 8 | 7 |\n| Proton-pump inhibitor | 0.1 | 1.0 | 1.0 | 0.8 |\n| Vagotomy | 0.4 | 27 | 15 | 0.5 |',
    questions: [
      {
        question: 'Which conclusion about the action of pentagastrin is best supported by Table 1?',
        options: [
          'It acts only on the parietal cell itself, because the H₂-receptor antagonist left most of the response intact.',
          'It depends largely on histamine, because the H₂-receptor antagonist removed most of the response.',
          'It acts only by way of the vagus nerve, because cutting the nerve removed nearly all of the response.',
          'It acts without the H⁺/K⁺-ATPase, because the proton-pump inhibitor left most of the response intact.',
        ],
        correctAnswer: 1,
        explanation:
          'The H₂-receptor antagonist cut the output during pentagastrin infusion from 28 to 8 mmol/h, a loss of about 70%, although the drug does not occupy gastrin receptors; most of the response must therefore pass through histamine released from ECL cells. The same numbers contradict the claim that the antagonist left the response largely intact. Vagotomy reduced the response only from 28 to 15 mmol/h, so about half of it survives without the nerve. The proton-pump inhibitor reduced the response from 28 to 1.0 mmol/h, which shows that the pump is required.',
        skill: '3B histamine as a mediator of gastrin (data interpretation)',
      },
      {
        question: 'Suppose that blood had also been sampled from a vein draining the stomach during each experiment. The HCO₃⁻ concentration of this blood would have exceeded that of arterial blood by the greatest amount in:',
        options: [
          'vagotomized dogs during sham feeding.',
          'PPI-treated dogs given histamine.',
          'untreated dogs given histamine.',
          'untreated dogs in the basal state.',
        ],
        correctAnswer: 2,
        explanation:
          'One HCO₃⁻ is formed for every H⁺ that the parietal cell secretes, and it leaves across the basolateral membrane into the blood, so the rise in venous HCO₃⁻ (the “alkaline tide”) follows the rate of acid secretion. Table 1 shows the highest output, 30 mmol/h, in untreated dogs given histamine. Vagotomized dogs barely responded to sham feeding (0.5 mmol/h), PPI-treated dogs given histamine secreted only 1.0 mmol/h because the pump was blocked, and untreated dogs in the basal state secreted 1.0 mmol/h; in each of these cases little HCO₃⁻ would be added to the blood.',
        skill: '3B parietal cell bicarbonate exit and the alkaline tide',
      },
      {
        question: 'Why would an ordinary meal have been a less suitable stimulus than sham feeding for testing the effect of vagotomy?',
        options: [
          'Food in the stomach suppresses acid secretion, so no response could have been measured.',
          'Food in the stomach is digested too slowly for a response to appear within an hour.',
          'Food in the stomach keeps the drugs from reaching the parietal cells through the blood.',
          'Food in the stomach releases gastrin by a route that needs no signal from the brain.',
        ],
        correctAnswer: 3,
        explanation:
          'Peptides from a meal act on G cells directly, so a meal would raise gastrin and acid output even after the vagus nerve had been cut; the investigators could not then tell how much of the response had depended on the nerve. Sham feeding supplies only the signals that originate in the brain, so its loss after vagotomy (20 to 0.5 mmol/h) can be read cleanly. Food in the stomach stimulates acid secretion and does not suppress it. The speed of digestion is beside the point, because secretion begins within minutes of eating. Drugs carried in the blood reach parietal cells from the basolateral side whether or not the lumen contains food.',
        skill: '3B research design: isolating the vagal stimulus',
      },
      {
        question: 'In the dogs treated with the proton-pump inhibitor, which process in the stomach would be most directly impaired?',
        options: [
          'The secretion of pepsinogen by chief cells',
          'The conversion of pepsinogen to pepsin',
          'The hydrolysis of starch by salivary amylase',
          'The emulsification of fat by bile salts',
        ],
        correctAnswer: 1,
        explanation:
          'Pepsinogen is converted to active pepsin when it meets the acid of the gastric lumen, and pepsin itself works best near pH 2; with acid output reduced to a small fraction of normal, activation of the zymogen and the digestion of protein in the stomach are impaired. The secretion of pepsinogen by chief cells does not depend on the proton pump of the parietal cell. Salivary amylase is inactivated by gastric acid, so a less acidic stomach would prolong its action on starch. Bile salts are delivered to the duodenum and act in the small intestine, not in the stomach.',
        skill: '3B gastric acid and activation of pepsinogen',
      },
    ],
  },
]

// Discrete skills: d01–d03, d06, d08 S1 · d04, d05, d07 S2
export const FL8_BIO_BIOCHEM_A_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl8-bb-a-d01',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'A newborn has not yet made antibodies of its own, yet its plasma contains antibodies against pathogens to which its mother is immune, and the milk it drinks supplies antibodies that act within the lumen of its intestine. The predominant antibody class in the newborn’s plasma and the predominant class in the milk are, respectively:',
    options: ['IgG and IgA.', 'IgM and IgA.', 'IgG and IgE.', 'IgA and IgM.'],
    correctAnswer: 0,
    explanation:
      'IgG is the only class of antibody carried across the placenta, by receptors that bind its constant region, so maternal IgG makes up nearly all of the antibody in a newborn’s plasma. IgA, secreted as a dimer and transported across epithelia, is the main antibody of milk and other secretions and protects mucosal surfaces. IgM is a large pentamer that does not cross the placenta; it is the first class made in a primary response. IgE is present in only trace amounts and is bound to mast cells, where it mediates allergic reactions.',
    skill: '3B immunoglobulin classes',
  },
  {
    id: 'fl8-bb-a-d02',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'A stab wound opens the right pleural space to the atmosphere without injuring the lung itself. Which change follows on the right side?',
    options: [
      'Intrapleural pressure falls further below atmospheric pressure, and the lung expands.',
      'Intrapleural pressure rises to atmospheric pressure, and the chest wall is drawn inward.',
      'Intrapleural pressure rises to atmospheric pressure, and the lung recoils inward.',
      'Intrapleural pressure falls further below atmospheric pressure, and the lung collapses.',
    ],
    correctAnswer: 2,
    explanation:
      'The lung tends to recoil inward and the chest wall to spring outward, and the opposing pulls keep the pressure in the sealed pleural space below atmospheric pressure; this difference holds the lung open against the chest wall. When the space is opened, air enters until intrapleural pressure equals atmospheric pressure, nothing then opposes the elastic recoil of the lung, and the lung collapses. Intrapleural pressure cannot fall further when the space communicates with the atmosphere, which excludes two options. The chest wall, freed from the inward pull of the lung, moves outward and not inward.',
    skill: '3B intrapleural pressure and pneumothorax',
  },
  {
    id: 'fl8-bb-a-d03',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'Nearly all of an oral dose of a certain drug is absorbed across the wall of the small intestine, yet only about 10% of the dose reaches the systemic circulation unchanged. When the same drug is dissolved under the tongue, nearly all of it does. The best explanation is that blood leaving the small intestine:',
    options: [
      'drains into the lymphatic vessels, which deliver the drug to the kidneys for excretion.',
      'returns directly to the right atrium, so that the drug is exhaled as it crosses the lungs.',
      'flows so slowly that the drug is broken down in plasma before it leaves the intestinal wall.',
      'travels in the portal vein to the liver, where the drug is metabolized before it can circulate.',
    ],
    correctAnswer: 3,
    explanation:
      'Venous blood from the stomach and intestines is collected by the hepatic portal vein and passes through the capillaries of the liver before it enters the inferior vena cava; hepatic enzymes can remove most of an absorbed drug on this first pass. Veins beneath the tongue drain into the systemic veins directly, so a drug absorbed there bypasses the liver. Blood does not drain into lymphatic vessels, and lymph is not delivered to the kidneys. Intestinal blood does not return directly to the heart, and the difference between the two routes would not be explained by exhalation. Intestinal blood flow is brisk, particularly after a meal, and plasma is not the main site of drug metabolism.',
    skill: '3B hepatic portal circulation and first-pass metabolism',
  },
  {
    id: 'fl8-bb-a-d04',
    section: 'bio-biochem',
    discipline: 'genetics',
    question: 'In a plant species that is able to self-fertilize, 1,000 seedlings are genotyped at a locus with two alleles before any selection has acted on them: 500 are AA, 200 are Aa, and 300 are aa. The number of heterozygotes expected at Hardy–Weinberg equilibrium, and the most likely reason that the observed number differs from it, are:',
    options: [
      '480; self-fertilization has reduced the proportion of heterozygotes.',
      '480; selection has favored the survival of heterozygous seedlings.',
      '240; self-fertilization has reduced the proportion of heterozygotes.',
      '240; selection has favored the survival of heterozygous seedlings.',
    ],
    correctAnswer: 0,
    explanation:
      'The frequency of allele A is (2 × 500 + 200)/2,000 = 0.6 and that of allele a is 0.4, so random mating would give 2pq = 2(0.6)(0.4) = 0.48, or 480 heterozygotes among 1,000 seedlings; only 200 were found. Self-fertilization, the most extreme form of inbreeding, violates the assumption of random mating: half of the offspring of every selfed heterozygote are homozygous, so heterozygotes decline each generation while allele frequencies stay the same. A value of 240 is pq without the factor of 2. Selection in favor of heterozygotes would produce more of them than expected, not fewer, and the seedlings were sampled before selection acted.',
    skill: '1C inbreeding and departure from Hardy–Weinberg proportions',
  },
  {
    id: 'fl8-bb-a-d05',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    question: 'A PCR is assembled with double-stranded template DNA, a heat-stable DNA polymerase, the four deoxynucleoside triphosphates, and the forward primer, but the reverse primer is left out by mistake. Over 30 cycles, the amount of newly synthesized DNA in this reaction will:',
    options: [
      'stay at zero, because the polymerase cannot begin a strand unless both primers are present.',
      'rise by a constant amount per cycle, because only the original template can be copied.',
      'double with every cycle, because each new strand becomes a template for the primer.',
      'double with every cycle, because the polymerase extends the 3′ ends of the template.',
    ],
    correctAnswer: 1,
    explanation:
      'The forward primer anneals to one strand of the original template and is extended in every cycle, but each strand made in this way has the same sequence as the other original strand and so offers no site to which the forward primer can anneal. Without the reverse primer the new strands are never copied, and product accumulates by one strand per original template per cycle, a linear increase; exponential growth requires two primers, so that the products of each cycle become templates in the next. The polymerase needs only one primer annealed to a template to begin synthesis, so some DNA is made. After denaturation the template strands have no annealed partner whose 3′ end could be extended.',
    skill: '1B PCR: role of the two primers',
  },
  {
    id: 'fl8-bb-a-d06',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'Lactate dehydrogenase (LDH) is a tetramer built from two kinds of subunit, H and M, and all of its forms catalyze the same reaction. Heart muscle contains mainly H₄, and skeletal muscle and liver contain mainly M₄. A patient’s plasma shows a sharp rise in LDH activity, nearly all of it due to the H₄ form. Considering only the tissues named, this finding is most consistent with the conclusion that:',
    options: [
      'the liver is synthesizing additional LDH in response to a high level of lactate.',
      'a mutation has converted the M subunits of the patient’s LDH into H subunits.',
      'cardiac muscle cells have been damaged and have released their contents.',
      'skeletal muscle has been exercised and has released lactate into the blood.',
    ],
    correctAnswer: 2,
    explanation:
      'LDH is an intracellular enzyme, so a rise in its plasma activity means that cells have lost the integrity of their membranes; because tissues differ in the isoenzymes they contain, the form that appears identifies the tissue, and H₄ points to the heart. LDH synthesized by the liver would be the M₄ form and would in any case remain inside healthy hepatocytes. A mutation acquired by the patient could not change the subunit composition of the enzyme throughout the body, and it would not raise total activity in plasma. Exercise releases lactate, the substrate, not the enzyme, and enzyme leaking from injured skeletal muscle would be M₄.',
    skill: '1A isoenzymes as markers of tissue damage',
  },
  {
    id: 'fl8-bb-a-d07',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'The hydrocarbon core of a lipid bilayer is about 30 Å thick, and an α-helix advances 1.5 Å along its axis for each residue. A segment of a protein that crosses the membrane once as an α-helix would therefore be expected to consist of about:',
    options: [
      '8 residues, most of them with nonpolar side chains.',
      '8 residues, most of them with charged side chains.',
      '20 residues, most of them with charged side chains.',
      '20 residues, most of them with nonpolar side chains.',
    ],
    correctAnswer: 3,
    explanation:
      'Spanning 30 Å at 1.5 Å per residue takes 30/1.5 = 20 residues. Their side chains project outward from the helix into the fatty acyl chains of the bilayer, so they are predominantly nonpolar (leucine, isoleucine, valine, phenylalanine and the like), while the polar groups of the backbone are satisfied by hydrogen bonds within the helix. About 8 is the number of turns of 3.6 residues that 30 residues would make, or the result of dividing 30 Å by 3.6, and is far too few residues to cross the core. Charged side chains are energetically very unfavorable in a hydrocarbon environment.',
    skill: '1A membrane-spanning α-helices',
  },
  {
    id: 'fl8-bb-a-d08',
    section: 'bio-biochem',
    discipline: 'cell biology',
    question: 'Glucose enters red blood cells by facilitated diffusion through the carrier GLUT1, whereas O₂ enters by simple diffusion through the lipid bilayer. Which property is shown by the uptake of glucose but not by the uptake of O₂?',
    options: [
      'Net movement only from higher to lower concentration',
      'A rate that levels off as the outside concentration rises',
      'A requirement for energy released by ATP hydrolysis',
      'Net movement that ceases when the two sides are equal',
    ],
    correctAnswer: 1,
    explanation:
      'Facilitated diffusion depends on a finite number of carrier proteins, each of which must bind and release its solute; once nearly all carriers are occupied, raising the concentration further cannot increase the rate, so uptake saturates. Simple diffusion involves no binding site, and its rate remains proportional to the concentration difference. Both processes are passive: each moves solute only down its concentration gradient, neither consumes ATP, and in both the net flux falls to zero when the concentrations on the two sides are equal.',
    skill: '2A facilitated vs simple diffusion: saturation',
  },
]
