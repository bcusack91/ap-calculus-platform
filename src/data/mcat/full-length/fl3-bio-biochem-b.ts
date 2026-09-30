/**
 * MCAT full-length FORM 3 — Bio/Biochem section, file B (passages 6–10 +
 * discretes 1–7). Authored 2026-09-30 against the AAMC-representative
 * blueprint (scratchpad/mcat-fl/BLUEPRINT.md + BLUEPRINT-F34.md): 400–600-word
 * passages, mixed experiment/information formats, skill mix ≈ 35/45/10/10,
 * keys that cannot be found by matching passage wording, position- and
 * length-balanced options.
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT.
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL3_BIO_BIOCHEM_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. METABOLISM — Pentose phosphate pathway, G6PD deficiency (experiment, chart)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-bb-b-06',
    section: 'bio-biochem',
    discipline: 'metabolism',
    title: 'Oxidant Drugs and Red Cells Deficient in G6PD',
    passageText:
      'Every cell must defend itself against reactive oxygen species, but the mature red blood cell carries an unusual burden. It is packed with hemoglobin, and a small fraction of the oxygen bound to hemoglobin’s iron is released each day as superoxide, which is rapidly converted to hydrogen peroxide ($\\text{H}_2\\text{O}_2$). If $\\text{H}_2\\text{O}_2$ is not removed, it oxidizes hemoglobin and membrane proteins; oxidized hemoglobin precipitates inside the cell, and the damaged cell is removed from the circulation by macrophages of the spleen. Mature red cells have no nucleus, no mitochondria, and no ribosomes, so throughout their lifespan of about 120 days they depend entirely on proteins made during their development in the bone marrow.\n\nThe principal defense against $\\text{H}_2\\text{O}_2$ in red cells is glutathione (GSH), a tripeptide whose cysteine thiol serves as an electron donor. Glutathione peroxidase uses two molecules of GSH to reduce $\\text{H}_2\\text{O}_2$ to water, forming oxidized glutathione (GSSG), in which two glutathione molecules are joined by a disulfide bond. Glutathione reductase then regenerates GSH using electrons from NADPH. In red cells the only significant source of NADPH is the oxidative phase of the pentose phosphate pathway. Its first and rate-limiting enzyme, glucose-6-phosphate dehydrogenase (G6PD), oxidizes glucose 6-phosphate and reduces $\\text{NADP}^+$ to NADPH; a later oxidative decarboxylation, catalyzed by 6-phosphogluconate dehydrogenase, yields a second NADPH and ribulose 5-phosphate. The reactions of the nonoxidative phase then interconvert five-carbon sugars with fructose 6-phosphate and glyceraldehyde 3-phosphate, which can reenter glycolysis.\n\nThe G6PD gene lies on the X chromosome, and G6PD deficiency is among the most common enzyme defects in humans. Most affected individuals have no symptoms until they encounter an oxidant stress, such as certain drugs, an acute infection, or a meal of fava beans. In one widespread variant, the enzyme has nearly normal kinetic properties but is unstable: when purified and held at 37°C, it loses activity several times faster than the normal enzyme does.\n\nIn Experiment 1, investigators studied twelve healthy men, six hemizygous for the unstable variant and six with normal G6PD. Each man took the same daily dose of an oxidant antimalarial drug for 24 days, and blood hemoglobin concentration was measured every 4 days (Figure 1). On day 12, blood from each man was centrifuged through a density gradient. Because red cells become denser as they age, the least dense fraction was enriched in young cells and the densest fraction in old cells. In the deficient men, G6PD activity in the least dense fraction was about five times that in the densest fraction; in the men with normal G6PD, the corresponding ratio was less than two.\n\nIn Experiment 2, the investigators evaluated a screening test that avoids giving any drug to the subject. Red cells from each man were incubated for 2 hours at 37°C in buffered saline containing 10 mM glucose and acetylphenylhydrazine, a compound that generates $\\text{H}_2\\text{O}_2$ inside red cells. Cells from men with normal G6PD retained more than 80% of their initial GSH, whereas cells from deficient men retained less than 30%.',
    chart: {
      title: 'Figure 1. Mean blood hemoglobin in men taking an oxidant antimalarial drug daily from day 0 through day 24',
      kind: 'line',
      xLabel: 'Days of drug treatment',
      xUnit: 'd',
      yLabel: 'Hemoglobin',
      yUnit: 'g/dL',
      xValues: [0, 4, 8, 12, 16, 20, 24],
      yValues: [15.1, 15.0, 14.9, 15.0, 15.1, 15.0, 15.0],
      seriesLabel: 'Normal G6PD (n = 6)',
      comparisonSeries: [{ label: 'G6PD variant (n = 6)', yValues: [15.0, 13.6, 11.8, 11.2, 11.9, 12.6, 13.0] }],
    },
    questions: [
      {
        question:
          'Based on Figure 1, at the lowest point of their hemoglobin concentration the deficient men had lost approximately what percentage of their initial hemoglobin?',
        options: ['4%', '25%', '34%', '75%'],
        correctAnswer: 1,
        explanation:
          'The deficient men began at 15.0 g/dL and reached a minimum of 11.2 g/dL on day 12, a loss of 3.8 g/dL; 3.8/15.0 ≈ 0.25, or 25%. The 34% value divides the loss by the nadir (11.2) instead of the starting value. The 75% value is the fraction of hemoglobin that remained, not the fraction lost. The 4% value treats the 3.8 g/dL decrease as if it were a percentage.',
        skill: '1D data interpretation: hemolysis',
      },
      {
        question:
          'The deficient men’s hemoglobin concentration rose after day 12 even though they continued to take the drug. Which of the following best explains this recovery?',
        options: [
          'The drug induced transcription of the G6PD gene in circulating red cells, raising their NADPH output',
          'Glutathione peroxidase levels rose in the surviving red cells, offsetting their reduced supply of NADPH',
          'The bone marrow began producing red cells that carried the normal G6PD enzyme instead of the variant',
          'The circulating red cells were younger on average and kept enough G6PD activity to regenerate GSH',
        ],
        correctAnswer: 3,
        explanation:
          'Hemolysis removed the oldest, most enzyme-depleted cells, and the marrow replaced them with young cells; the density-gradient result shows that young variant cells have about five times the G6PD activity of old ones, enough to keep glutathione reduced at this drug dose. Mature red cells have no nucleus, so the drug cannot induce transcription in them. They also have no ribosomes, so they cannot raise their content of glutathione peroxidase or any other enzyme. The men are hemizygous for the variant, so every new red cell they make carries the variant enzyme, not the normal one.',
        skill: '1D pentose phosphate pathway & oxidative stress',
      },
      {
        question:
          'When red cells from the men with normal G6PD were exposed to acetylphenylhydrazine, flux through the oxidative phase of the pentose phosphate pathway increased more than tenfold within minutes. Which of the following best explains this rapid increase?',
        options: [
          'Consumption of NADPH raised the $\\text{NADP}^+$/NADPH ratio, giving G6PD more substrate and less inhibition',
          'Hydrogen peroxide activated G6PD directly by oxidizing a cysteine residue in the enzyme’s active site',
          'Oxidant stress caused stored G6PD mRNA to be translated, raising the amount of enzyme in each cell',
          'Ribulose 5-phosphate accumulated and allosterically activated G6PD in a feed-forward manner',
        ],
        correctAnswer: 0,
        explanation:
          'As glutathione reductase uses NADPH to regenerate GSH, NADPH falls and $\\text{NADP}^+$ rises. $\\text{NADP}^+$ is the substrate of G6PD, and NADPH is its product and inhibitor, so the shift in the ratio immediately increases flux through the rate-limiting step. Peroxide damages rather than activates proteins, and no such activating oxidation is described. Red cells lack ribosomes, so no new enzyme can be translated. Ribulose 5-phosphate is a downstream product; a product activating the first enzyme of its own pathway is not the regulatory pattern of this pathway.',
        skill: '1D regulation of the pentose phosphate pathway',
      },
      {
        question:
          'In Experiment 2, glucose was included in the incubation medium. If glucose had been omitted, the most likely result would be that:',
        options: [
          'cells from deficient men would keep their GSH, because acetylphenylhydrazine needs glucose to form peroxide',
          'the gap between groups would widen, because deficient cells depend more on outside glucose than normal cells',
          'cells from normal men would also lose most of their GSH, so the test could no longer tell the groups apart',
          'cells from both groups would keep their GSH, because glycolysis would stop consuming NADPH in the cells',
        ],
        correctAnswer: 2,
        explanation:
          'Red cells store no glycogen, so glucose from the medium is the source of the glucose 6-phosphate that G6PD oxidizes. Without it, even cells with normal G6PD could not regenerate NADPH, their GSH would be depleted by the peroxide, and the test would lose its ability to discriminate. The passage gives acetylphenylhydrazine as a peroxide generator with no stated requirement for glucose. Both groups need external glucose to supply the pathway, so the difference would shrink, not widen. Glycolysis produces NADH; it does not consume NADPH, so stopping it would not spare GSH.',
        skill: '1D research design: experimental controls',
      },
      {
        question:
          'A woman heterozygous for the unstable variant takes the same drug regimen as the men in Experiment 1. Compared with the deficient men, she would most likely show:',
        options: [
          'no hemolysis, because the normal allele on her other X chromosome is expressed in every red cell',
          'hemolysis of only part of her red cells, because each red-cell precursor expresses a single G6PD allele',
          'hemolysis as severe as that of the deficient men, because the variant enzyme inactivates the normal one',
          'hemolysis of all her red cells but to a milder degree, because each cell has half the normal G6PD',
        ],
        correctAnswer: 1,
        explanation:
          'Because the G6PD gene is X-linked, random X inactivation in each red-cell precursor leaves it expressing either the normal or the variant allele. The woman is therefore a mosaic: her variant-expressing cells behave like those of the deficient men and are destroyed, while her normal cells survive, giving hemolysis of intermediate overall severity. The normal allele is silenced in roughly half of her precursor cells, so it cannot protect every cell. Nothing indicates that the variant enzyme inactivates the normal one. Cells with half the normal activity in every cell would occur only without X inactivation.',
        skill: '1C X inactivation and X-linked traits',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. MOLECULAR BIOLOGY — Alternative splicing and siRNA knockdown (experiment, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-bb-b-07',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    title: 'Isoform-Specific Knockdown of an Alternatively Spliced Receptor',
    passageText:
      'Most human protein-coding genes are interrupted by introns, which are removed from the primary transcript before the mRNA leaves the nucleus. The spliceosome, assembled from small nuclear ribonucleoproteins (snRNPs) and many additional proteins, recognizes short consensus sequences at each exon–intron boundary: a 5′ splice site that begins the intron with GU, a branch-point adenosine within the intron, and a 3′ splice site that ends the intron with AG. The strength of these signals varies, and regulatory proteins bound near an exon can promote or suppress its recognition, so a single gene can give rise to several mature mRNAs. This alternative splicing allows one gene to encode proteins that differ in their domains, their locations in the cell, or their activities.\n\nThe gene *RCX* encodes the receptor for an anti-inflammatory cytokine and contains eight exons. Exon 5 encodes the receptor’s single transmembrane segment. When exon 5 is included, the mRNA encodes a membrane-bound receptor (isoform M). When exon 5 is skipped, exon 4 is joined directly to exon 6 without disrupting the reading frame, and the resulting protein is secreted from the cell (isoform S). Isoform S binds the cytokine in the extracellular fluid and is thought to act as a decoy that limits signaling through isoform M.\n\nTo study the two isoforms separately, investigators used RNA interference. Small interfering RNAs (siRNAs) are double-stranded RNAs about 21 nucleotides long. After an siRNA enters a cell, one of its strands, the guide strand, is loaded into the RNA-induced silencing complex (RISC), which binds cytoplasmic mRNAs that contain a fully complementary sequence and cleaves them, leading to their degradation.\n\nCultured cells that express both isoforms were treated with a lipid transfection reagent alone (mock) or with the reagent plus one of four siRNAs: a scrambled siRNA with the same nucleotide composition as siRNA 1 but no match to any human transcript; siRNA 1, complementary to a sequence in exon 5; siRNA 2, complementary to a sequence in exon 2; and siRNA 3, complementary to a sequence in intron 4. After 48 hours, RNA was extracted, and each isoform’s mRNA was quantified by reverse-transcription quantitative PCR (qPCR) with primer pairs specific to that isoform. Values were normalized to the mRNA of a housekeeping gene and expressed relative to mock-treated cells. The investigators also measured isoform M protein on the cell surface by antibody staining and isoform S protein in the culture medium by immunoassay. Results are shown in Table 1.\n\nIn a separate study, sequencing of *RCX* in members of a family with recurrent inflammatory episodes revealed a single-nucleotide substitution that changes the final two nucleotides of intron 4 from AG to AC. No other variant in the gene was found in affected family members.',
    figure:
      '**Table 1. RCX isoform levels 48 h after transfection (relative to mock = 1.00)**\n\n| Treatment | Isoform M mRNA | Isoform S mRNA | Surface isoform M protein | Secreted isoform S protein |\n|---|---|---|---|---|\n| Mock | 1.00 | 1.00 | 1.00 | 1.00 |\n| Scrambled siRNA | 0.97 | 1.02 | 0.98 | 1.01 |\n| siRNA 1 (exon 5) | 0.14 | 1.05 | 0.22 | 0.98 |\n| siRNA 2 (exon 2) | 0.18 | 0.16 | 0.25 | 0.21 |\n| siRNA 3 (intron 4) | 0.95 | 0.99 | 0.97 | 1.03 |',
    questions: [
      {
        question: 'What is the primary purpose of the scrambled siRNA treatment in this experiment?',
        options: [
          'It shows the level of each RCX isoform in cells that were never exposed to a transfection reagent',
          'It supplies the reference transcript to which every qPCR measurement was normalized in the analysis',
          'It confirms that the transfected siRNAs reached the nucleus, where the RCX transcripts are spliced',
          'It tests whether a double-stranded RNA of similar makeup alters RCX expression without matching it',
        ],
        correctAnswer: 3,
        explanation:
          'The scrambled siRNA has the same composition as siRNA 1 and enters cells the same way, but it matches no transcript; its near-1.00 values show that introducing an siRNA does not by itself lower RCX expression, so the effects of siRNAs 1 and 2 reflect sequence-specific targeting. Cells treated with reagent alone are the mock group, and no group went entirely without reagent. Normalization used a housekeeping-gene mRNA, not the scrambled siRNA. A scrambled siRNA produces no knockdown, so it cannot report where siRNAs act in the cell.',
        skill: '1B research design: controls in RNAi',
      },
      {
        question: 'Which of the following best explains the result obtained with siRNA 3?',
        options: [
          'Intron 4 is excised and degraded in the nucleus, so its sequence is absent from the mRNAs that RISC encounters',
          'Intron 4 is retained in both isoforms, where bound snRNPs shield the mature mRNA from cleavage by RISC',
          'The guide strand of siRNA 3 cannot pair with intron sequences, because introns contain thymine in place of uracil',
          'The siRNA 3 target is shared by both isoforms, so any loss of one isoform is offset by a gain in the other',
        ],
        correctAnswer: 0,
        explanation:
          'RISC acts on cytoplasmic mRNAs, and introns are removed from the pre-mRNA in the nucleus and rapidly degraded; the mature M and S mRNAs therefore contain no intron 4 sequence for siRNA 3 to target, and neither isoform changes. Neither mature isoform retains intron 4, since both are spliced products. Intronic RNA, like all RNA, contains uracil rather than thymine. An offsetting shift between isoforms would lower one and raise the other, but Table 1 shows both unchanged.',
        skill: '1B RNA processing and RNA interference',
      },
      {
        question:
          'Investigators want an siRNA that lowers isoform S mRNA without affecting isoform M mRNA. Its guide strand should be complementary to:',
        options: [
          'a sequence located entirely within exon 6',
          'a sequence located entirely within intron 5',
          'a sequence spanning the junction of exons 4 and 6',
          'a sequence spanning the junction of exons 5 and 6',
        ],
        correctAnswer: 2,
        explanation:
          'Isoform S is formed by joining exon 4 directly to exon 6, so the sequence that spans this junction exists only in S mRNA; an siRNA complementary to it would cleave S but not M. Exon 6 is present in both isoforms, so targeting it would lower both, as siRNA 2 did for exon 2. Intron 5 is removed from every transcript and, like intron 4, is not available to RISC. The exon 5–exon 6 junction exists only in isoform M, so targeting it would lower M rather than S.',
        skill: '1B alternative splicing: experimental design',
      },
      {
        question:
          'The family variant in intron 4 would most likely have which effect on RCX expression in affected individuals?',
        options: [
          'Neither isoform would change, because the variant lies in an intron and is absent from mature mRNA',
          'Isoform S would rise relative to isoform M, because the spliceosome would more often skip exon 5',
          'Both isoforms would fall, because intron 4 could no longer be removed from any RCX transcript',
          'Isoform M would rise relative to isoform S, because exon 5 would be joined to exon 4 more efficiently',
        ],
        correctAnswer: 1,
        explanation:
          'The final AG of intron 4 is the 3′ splice site that marks the start of exon 5. Destroying it prevents the spliceosome from joining exon 4 to exon 5, so exon 5 is skipped more often and the exon 4–exon 6 product (isoform S) dominates. Although the variant is absent from mature mRNA, it is present in the pre-mRNA, where splice-site recognition occurs. Isoform S does not use this splice site, because it joins exon 4 to exon 6 with the 3′ splice site of intron 5. Loss of a splice signal weakens, not strengthens, inclusion of exon 5.',
        skill: '1B splice-site mutations',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. IMMUNOLOGY — Innate immunity in the first hours of infection (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-bb-b-08',
    section: 'bio-biochem',
    discipline: 'immunology',
    title: 'The First Hours of a Bacterial Wound Infection',
    passageText:
      'When bacteria breach the skin through a wound, they meet defenses that are in place before the infection begins. Unlike lymphocytes, the cells of the innate immune system do not rearrange their receptor genes. They instead express germline-encoded pattern-recognition receptors, such as the Toll-like receptors, that bind molecular structures shared by broad classes of microbes, including the lipopolysaccharide of gram-negative outer membranes, bacterial flagellin, and viral double-stranded RNA. Because the same receptors are present on every macrophage, the innate response begins within minutes, but it is no faster or stronger on a second encounter with the same microbe.\n\nResident tissue macrophages and mast cells respond first. Macrophages stimulated through their pattern-recognition receptors release the cytokines tumor necrosis factor-α (TNF-α), interleukin-1 (IL-1), and interleukin-6 (IL-6), along with chemokines such as IL-8; mast cells release histamine. These mediators dilate local arterioles and increase the permeability of postcapillary venules, producing the redness, heat, swelling, and pain of acute inflammation. Cytokines also induce the endothelium of nearby venules to display selectins, which bind carbohydrate ligands on passing neutrophils and slow them into a rolling motion along the vessel wall. Chemokines on the endothelial surface then activate neutrophil integrins, which bind endothelial adhesion molecules tightly. The neutrophil stops, flattens, and squeezes between endothelial cells into the tissue, where it migrates up the chemokine gradient toward the bacteria.\n\nPlasma proteins that leak into the inflamed tissue include complement, a set of proteins, several of them proteases, that circulate in inactive form. Complement can be activated by antibody bound to a microbe (the classical pathway), by lectins that bind microbial carbohydrates (the lectin pathway), or by spontaneous hydrolysis of C3 on surfaces that lack the regulatory proteins displayed by host cells (the alternative pathway). All three routes generate a C3 convertase that cleaves C3 into C3a and C3b. C3b attaches covalently to the microbial surface, where it is recognized by complement receptors on phagocytes, and it also joins the convertase to form a C5 convertase. Cleavage of C5 releases C5a, a strong attractant for neutrophils, and C5b, which initiates assembly of C6, C7, C8, and multiple C9 molecules into the membrane attack complex, a pore that can kill bacteria with an exposed outer membrane.\n\nCytokines also act at a distance. IL-6 stimulates hepatocytes to secrete acute-phase proteins, some of which coat bacteria and activate complement. IL-1, IL-6, and TNF-α act on the hypothalamus, where they induce cyclooxygenase-2 and the synthesis of prostaglandin E2, which raises the thermoregulatory set point and produces fever.\n\nInnate cells also shape the adaptive response. Dendritic cells that take up microbial antigen in the tissue migrate through lymphatic vessels to the draining lymph node, where they display microbial peptides to naïve T cells. Natural killer (NK) cells, innate lymphocytes found in blood and tissues, monitor host cells rather than microbes. They carry activating receptors that detect stress-induced molecules on infected or transformed cells, and inhibitory receptors that bind MHC class I, which nearly every nucleated cell displays.',
    questions: [
      {
        question:
          'An individual cannot make functional C9 because of an inherited mutation. Compared with a healthy person, this individual would most likely show:',
        options: [
          'intact opsonization of bacteria by C3b but impaired lysis of bacteria by complement pores',
          'intact lysis of bacteria by complement pores but impaired opsonization of bacteria by C3b',
          'impaired opsonization of bacteria by C3b and impaired lysis of bacteria by complement pores',
          'impaired opsonization of bacteria by C3b and impaired recruitment of neutrophils by C5a',
        ],
        correctAnswer: 0,
        explanation:
          'C9 is one of the last components added to the membrane attack complex, downstream of C3 cleavage and of C5 cleavage. Without it, pores cannot form, but C3b deposition (opsonization), C3a and C5a release, and neutrophil recruitment all proceed normally. Lysis cannot be intact, because C9 is part of the pore itself. C3b opsonization occurs upstream of C9 and does not depend on it, which eliminates both options that list impaired opsonization. C5a is released when C5 is cleaved, before C9 acts.',
        skill: '3B complement cascade',
      },
      {
        question:
          'Aspirin, an inhibitor of cyclooxygenase, lowers body temperature in a patient with a febrile bacterial infection but has little effect on the body temperature of a healthy person. Which explanation is most consistent with the passage?',
        options: [
          'Aspirin blocks the release of IL-1 and TNF-α from macrophages, which occurs only during an infection',
          'Aspirin increases heat loss through sweating, a response that operates only when core temperature is high',
          'Aspirin blocks the prostaglandin signal that raises the set point but does not alter the baseline set point',
          'Aspirin inhibits the growth of the bacteria whose products stimulate macrophages to secrete cytokines',
        ],
        correctAnswer: 2,
        explanation:
          'Fever results when cytokines induce cyclooxygenase-2 in the hypothalamus and prostaglandin E2 raises the set point. Inhibiting cyclooxygenase removes this signal and returns the set point toward normal, but in a healthy person no prostaglandin-driven elevation is present, so temperature is unchanged. Aspirin acts on cyclooxygenase, downstream of cytokine release, so it does not block IL-1 or TNF-α secretion. It does not act as a direct stimulus for sweating; sweating during defervescence is the normal response to a lowered set point. Aspirin has no antibacterial action.',
        skill: '3B cytokines and fever',
      },
      {
        question:
          'A child inherits a mutation that eliminates the neutrophil integrin responsible for firm adhesion to the endothelium. During a bacterial skin infection, which finding would be most expected?',
        options: [
          'A low neutrophil count in the blood with a normal accumulation of neutrophils in the infected tissue',
          'A normal accumulation of neutrophils in the tissue but failure of neutrophils to engulf opsonized bacteria',
          'An absence of local redness and swelling, because tissue mast cells cannot release histamine',
          'A high neutrophil count in the blood but few neutrophils in the infected tissue despite the infection',
        ],
        correctAnswer: 3,
        explanation:
          'Without the integrin, neutrophils can roll on selectins but cannot stop and leave the venule. They therefore accumulate in the blood, producing a high count, while few reach the infected tissue. Neutrophils cannot accumulate normally in the tissue, since emigration requires firm adhesion. Phagocytosis of C3b-coated bacteria depends on complement receptors, and the question gives no reason to expect it to fail. Mast cells and histamine release do not depend on the neutrophil integrin, so vasodilation and swelling still occur.',
        skill: '3B inflammation and leukocyte recruitment',
      },
      {
        question:
          'A herpesvirus produces a protein that traps newly made MHC class I molecules in the endoplasmic reticulum of the cells it infects. This strategy would most likely:',
        options: [
          'protect infected cells from both cytotoxic T cells and NK cells, because both require MHC class I to kill',
          'protect infected cells from cytotoxic T cells but make them more vulnerable to killing by NK cells',
          'protect infected cells from NK cells but make them more vulnerable to killing by cytotoxic CD8 T cells',
          'leave infected cells equally vulnerable to both, because MHC class I is needed only for helper T cells',
        ],
        correctAnswer: 1,
        explanation:
          'Cytotoxic (CD8) T cells recognize viral peptides presented on MHC class I, so removing MHC class I from the surface hides infected cells from them. NK cells, however, are restrained by inhibitory receptors that bind MHC class I; when MHC class I is missing and stress ligands are present, inhibition is lost and the NK cell kills. NK cells do not require MHC class I to kill, so the cells are not protected from both. Loss of MHC class I releases NK cells rather than restraining them. Helper (CD4) T cells recognize MHC class II, not class I.',
        skill: '3B innate–adaptive interplay: NK and CD8 cells',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. PHYSIOLOGY — Menstrual-cycle hormones and oral contraception (experiment, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-bb-b-09',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Ovarian Feedback in a Natural Cycle and During Oral Contraception',
    passageText:
      'The menstrual cycle is governed by a feedback loop linking the hypothalamus, the anterior pituitary, and the ovaries. Gonadotropin-releasing hormone (GnRH), secreted in pulses by hypothalamic neurons into the hypophyseal portal circulation, stimulates the anterior pituitary to release follicle-stimulating hormone (FSH) and luteinizing hormone (LH). FSH promotes the growth of ovarian follicles, whose granulosa cells convert androgens supplied by neighboring theca cells into estradiol. Granulosa cells also secrete inhibin, a peptide hormone that selectively suppresses the release of FSH.\n\nFor most of the cycle, ovarian steroids inhibit gonadotropin release. The exception occurs late in the follicular phase: once a dominant follicle has held plasma estradiol above a threshold for about two days, the action of estradiol on the hypothalamus and pituitary reverses, and a brief, large release of LH follows. This LH surge triggers the final maturation of the oocyte and, about a day and a half later, rupture of the follicle. The ruptured follicle becomes the corpus luteum, which secretes progesterone and estradiol for about 12 to 14 days. Unless an embryo implants and supplies a signal that maintains it, the corpus luteum then regresses, ovarian steroid levels fall, and the endometrium is shed as menstruation.\n\nTo characterize these changes and the effects of a combined oral contraceptive, investigators studied 20 healthy women aged 22 to 34 years who had regular 28-day cycles and were using no hormonal medication. Blood was drawn on selected days of one natural cycle, with day 1 defined as the first day of menstruation. To reduce the blurring caused by small differences in cycle timing, each woman’s samples were aligned to her own LH peak, which was assigned to day 14. The women then began a combined pill containing ethinyl estradiol, a synthetic estrogen, and a synthetic progestin, taken daily for 21 days followed by 7 hormone-free days. Blood was drawn on corresponding days of the third pill cycle. Estradiol was measured by an immunoassay that does not detect ethinyl estradiol, and progesterone by an assay that does not detect the synthetic progestin. Ovarian follicles were monitored by transvaginal ultrasound. Mean hormone values are shown in Table 1.\n\nDuring the natural cycle, ultrasound showed a single dominant follicle in each woman that grew to about 20 mm in diameter and then collapsed between days 14 and 16. During the third pill cycle, no follicle grew larger than 10 mm, and no follicle collapse was observed in any participant. None of the women reported side effects that led them to stop taking the pill during the study.',
    figure:
      '**Table 1. Mean serum hormone concentrations (n = 20)**\n\n| Cycle | Day | FSH (IU/L) | LH (IU/L) | Estradiol (pg/mL) | Progesterone (ng/mL) |\n|---|---|---|---|---|---|\n| Natural | 3 | 7 | 5 | 40 | 0.4 |\n| Natural | 8 | 6 | 6 | 90 | 0.4 |\n| Natural | 12 | 6 | 12 | 260 | 0.8 |\n| Natural | 14 | 14 | 55 | 180 | 1.5 |\n| Natural | 21 | 3 | 5 | 140 | 13.0 |\n| Natural | 27 | 6 | 4 | 60 | 1.5 |\n| Pill (third cycle) | 8 | 3 | 3 | 25 | 0.3 |\n| Pill (third cycle) | 14 | 3 | 3 | 30 | 0.3 |\n| Pill (third cycle) | 21 | 2 | 3 | 25 | 0.3 |',
    questions: [
      {
        question:
          'Which data from Table 1 provide the strongest support for the claim that estradiol can stimulate LH release?',
        options: [
          'The low LH and moderate estradiol levels measured on day 3 of the natural cycle',
          'The low LH and low estradiol levels measured on day 14 of the pill cycle',
          'The high estradiol on day 12 followed by peak LH on day 14 of the natural cycle',
          'The fall in LH from day 14 to day 21 while estradiol stayed elevated in the natural cycle',
        ],
        correctAnswer: 2,
        explanation:
          'Estradiol reached its highest value (260 pg/mL) on day 12, and LH rose to its peak (55 IU/L) two days later, the temporal sequence expected if sustained high estradiol triggers the surge. Low LH with moderate estradiol on day 3 is consistent with negative, not positive, feedback. Low LH with low endogenous estradiol during pill use reflects suppression by the synthetic hormones and does not show estradiol stimulating LH. A fall in LH while estradiol remains elevated points toward inhibition rather than stimulation.',
        skill: '3B data interpretation: positive feedback',
      },
      {
        question: 'The rise in FSH between day 21 and day 27 of the natural cycle is best explained by:',
        options: [
          'the return of positive feedback as estradiol fell below the level reached on day 12',
          'regression of the corpus luteum, which lowered steroid and inhibin feedback on FSH release',
          'stimulation of the pituitary by a signal from an embryo that had implanted in the uterus',
          'a surge of GnRH secretion set off by the high progesterone concentration of day 21',
        ],
        correctAnswer: 1,
        explanation:
          'Between days 21 and 27, progesterone fell from 13.0 to 1.5 ng/mL and estradiol from 140 to 60 pg/mL as the corpus luteum regressed; with less steroid (and inhibin) negative feedback, FSH rose from 3 to 6 IU/L, beginning recruitment of follicles for the next cycle. Positive feedback requires sustained high estradiol, not falling estradiol. Implantation would maintain the corpus luteum and keep progesterone high, the opposite of what the table shows. High progesterone suppresses GnRH secretion rather than triggering a surge.',
        skill: '3B luteal–follicular transition',
      },
      {
        question: 'The pill-cycle data indicate that the combined pill prevents pregnancy primarily by:',
        options: [
          'suppressing gonadotropin release so that no follicle matures enough to trigger an LH surge',
          'blocking progesterone receptors in the endometrium so that an embryo cannot implant',
          'causing the dominant follicle to luteinize before its oocyte can be released',
          'triggering repeated small LH surges that deplete the ovary of growing follicles',
        ],
        correctAnswer: 0,
        explanation:
          'During pill use FSH and LH stayed at 2–3 IU/L, endogenous estradiol stayed near 25–30 pg/mL, no follicle exceeded 10 mm, and no LH peak or follicle collapse occurred: the exogenous estrogen and progestin exert continuous negative feedback, so follicles never mature and ovulation does not occur. The pill contains a progestin, an agonist rather than a blocker of progesterone receptors. Luteinization would raise endogenous progesterone, but it stayed at 0.3 ng/mL. LH was flat at 3 IU/L, showing no repeated surges.',
        skill: '3B hormonal contraception',
      },
      {
        question:
          'Suppose the estradiol immunoassay had detected ethinyl estradiol as readily as estradiol. How would this most likely have affected the results?',
        options: [
          'LH values in the pill cycle would have appeared lower, exaggerating the suppression of the pituitary',
          'Progesterone values in the pill cycle would have appeared higher, suggesting that ovulation had occurred',
          'Estradiol values in the natural cycle would have appeared higher, shifting the apparent timing of the surge',
          'Estradiol values in the pill cycle would have appeared higher, masking the fall in ovarian estradiol output',
        ],
        correctAnswer: 3,
        explanation:
          'Only pill-cycle samples contain ethinyl estradiol, so a cross-reacting estradiol assay would add the synthetic hormone to the measured value and hide the suppression of the ovaries’ own estradiol production. An estradiol assay does not measure LH or progesterone, so cross-reactivity in it cannot change those values. Natural-cycle samples contain no ethinyl estradiol, so their estradiol values would be unaffected.',
        skill: '3B research design: assay specificity',
      },
      {
        question:
          'If one of the women had conceived during the natural cycle and the embryo had implanted, her progesterone concentration on day 27 would most likely have been:',
        options: [
          'maintained near the day 21 value, because hCG from the embryo would sustain the corpus luteum',
          'close to the day 3 value, because the corpus luteum regresses on schedule regardless of implantation',
          'far below the day 3 value, because implantation suppresses all ovarian steroid production',
          'close to the day 14 value, because estradiol from the embryo would suppress luteal secretion',
        ],
        correctAnswer: 0,
        explanation:
          'The implanting embryo’s trophoblast secretes human chorionic gonadotropin (hCG), which acts on LH receptors of the corpus luteum and keeps it secreting progesterone until the placenta takes over later in pregnancy; progesterone therefore stays near or above the day 21 level of 13 ng/mL. The passage states that regression happens only when no embryo implants. Implantation depends on continued progesterone, so it does not suppress ovarian steroids. The early embryo does not secrete estradiol that suppresses the corpus luteum.',
        skill: '3B pregnancy and the corpus luteum',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. GENETICS — Molecular evolution: clocks, dN/dS, homology (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl3-bb-b-10',
    section: 'bio-biochem',
    discipline: 'genetics',
    title: 'Reading Evolutionary History in DNA Sequences',
    passageText:
      'When two species descend from a common ancestor, their genomes start out identical and then diverge as each lineage independently accumulates substitutions, which are mutations that have spread through a population until every member carries them. Many mutations that change an amino acid essential to a protein’s function are harmful and are removed by natural selection before they can spread. According to the neutral theory of molecular evolution, however, most of the differences that do accumulate between species are selectively neutral, or nearly so, and reach fixation by genetic drift. A notable prediction of the theory is that the long-term rate at which neutral substitutions accumulate in a lineage equals the neutral mutation rate and does not depend on population size: a large population produces more new mutations each generation, but each new mutation has a proportionally smaller chance of drifting to fixation.\n\nBecause neutral substitutions accumulate at a roughly steady rate, the number of differences between two sequences can serve as a molecular clock. The clock is calibrated with pairs of lineages whose time of separation is known from dated fossils. After a split, substitutions accumulate independently along both descending lineages, so the fraction of sites that differ between two living species grows at twice the per-lineage substitution rate.\n\nDifferent genes tick at different rates. Proteins that tolerate few changes, such as histones, which contact DNA over most of their surface, change very slowly. Sequences under little constraint change much faster; among the fastest are pseudogenes, copies of genes that have lost the ability to produce a functional protein. Within a protein-coding gene, substitutions are classified as synonymous, which leave the encoded amino acid unchanged, or nonsynonymous, which replace it. Comparing the rate of nonsynonymous substitution per nonsynonymous site (dN) with the rate of synonymous substitution per synonymous site (dS) reveals how selection has acted on the protein. A ratio dN/dS well below 1 indicates that most amino acid changes were eliminated by selection, whereas a ratio above 1 indicates that amino acid changes were repeatedly favored, as occurs in some genes encoding proteins that interact with rapidly evolving pathogens.\n\nPhylogenetic trees built from sequence data depend on comparing characters that are homologous, that is, similar because they were inherited from a common ancestor. Similarity can also arise independently in separate lineages through convergent evolution, producing analogous characters. Convergence tends to produce resemblance in the features that serve the shared function, because selection pushes both lineages toward the same solution. The antifreeze glycoproteins of Antarctic notothenioid fishes and of Arctic cods are a well-studied example: both consist largely of repeats of the same three amino acids and both bind small ice crystals in the blood, yet the Antarctic protein evolved from a gene related to a pancreatic protease, whereas the Arctic protein appears to have arisen from noncoding DNA.\n\nTo build a tree, investigators align the sequences, count the differences between each pair of species, and join first the species whose sequences differ least. An outgroup, a species known to have branched off before all of the others, is included to locate the root of the tree, which represents the common ancestor of the group being studied.',
    questions: [
      {
        question:
          'In a group of rodents, fossil calibration gives a synonymous substitution rate of $1 \\times 10^{-9}$ per site per year in each lineage. Two living species in the group differ at 6% of their synonymous sites. Assuming that no site has changed more than once, the two species diverged approximately how long ago?',
        options: ['7.5 million years', '15 million years', '30 million years', '60 million years'],
        correctAnswer: 2,
        explanation:
          'Differences accumulate along both lineages, so the fraction of differing sites grows at $2 \\times 10^{-9}$ per year. Time = 0.06 / ($2 \\times 10^{-9}$ per year) = $3 \\times 10^{7}$ years, or 30 million years. The 60-million-year value ignores the fact that both lineages contribute substitutions. The 15-million-year value applies the factor of 2 twice, and the 7.5-million-year value divides by a rate four times too high.',
        skill: '1C molecular clock calculation',
      },
      {
        question:
          'The dN/dS ratios of four genes were estimated from human–chimpanzee comparisons: gene W, 0.02; gene X, 0.15; gene Y, 2.8; gene Z, 0.98. Which gene is most likely a pseudogene?',
        options: [
          'Gene W, because its very low ratio shows it is changing faster than the other three genes',
          'Gene X, because its low ratio shows that selection has removed most of the amino acid changes',
          'Gene Y, because its high ratio shows that amino acid changes have accumulated very rapidly',
          'Gene Z, because a ratio near 1 is expected when both kinds of substitution are neutral',
        ],
        correctAnswer: 3,
        explanation:
          'A pseudogene no longer encodes a functional protein, so selection no longer distinguishes changes that would alter an amino acid from those that would not; both classes of substitution accumulate at the neutral rate and dN/dS approaches 1. A very low ratio (gene W) indicates strong purifying selection, like that on histones, not rapid change. Gene X is also under purifying selection, which implies a functional product. A ratio well above 1 (gene Y) indicates positive selection on amino acid changes, which requires a functional protein.',
        skill: '1C neutral theory and selection',
      },
      {
        question:
          'Two enzymes from distantly related animal groups have a similar three-dimensional structure and the same catalytic activity. Which additional finding would most strongly indicate that the two enzymes are homologous rather than the products of convergent evolution?',
        options: [
          'Both enzymes use the same catalytic residues, arranged in the same geometry in the active site',
          'Both genes contain introns at the same positions, including within regions encoding surface loops',
          'Both enzymes bind their substrate with similar affinity and are inhibited by the same drug',
          'Both enzymes are made in the same tissue and are secreted into the same body fluid',
        ],
        correctAnswer: 1,
        explanation:
          'Convergence produces resemblance in features that serve the shared function, so similarity in functionally arbitrary features is the best evidence of common ancestry; intron positions, especially within regions encoding surface loops, are not dictated by catalysis and are unlikely to match by chance. An identical catalytic arrangement, similar substrate affinity and drug sensitivity, and a shared site of production and secretion all relate to the common function and could arise through convergent selection.',
        skill: '1C homology vs analogy',
      },
      {
        question:
          'When the fraction of differing synonymous sites is plotted against fossil-dated divergence time for many pairs of mammalian species, the fraction rises in proportion to time for recent splits but levels off for splits older than about 100 million years. Which of the following best explains this pattern?',
        options: [
          'Sites that have already changed can change again, so later substitutions stop adding new differences',
          'Synonymous sites come under strong purifying selection once lineages have been separate long enough',
          'Older lineages had larger populations, so fewer of their neutral mutations were fixed by genetic drift',
          'Recombination between the two species’ genomes erases differences that accumulated long ago',
        ],
        correctAnswer: 0,
        explanation:
          'Counting differing sites misses multiple substitutions at the same site: a second change at a site that already differs, or a reversal to the original base, adds no new difference, so the count saturates for ancient splits. Selection on a site does not change according to how long ago the lineages split. The passage explains that the neutral substitution rate does not depend on population size. Separate species do not exchange DNA by recombination, so it cannot erase differences between them.',
        skill: '1C molecular clock limitations',
      },
    ],
  },
]

export const FL3_BIO_BIOCHEM_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl3-bb-b-d01',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'A patient has yellow skin, dark urine, and pale, clay-colored stools. Blood tests show a high concentration of conjugated bilirubin. Which condition best accounts for these findings?',
    options: [
      'Accelerated destruction of red blood cells in the spleen',
      'Reduced activity of the hepatic enzyme that conjugates bilirubin',
      'Decreased filtration of bilirubin by the renal glomeruli',
      'Obstruction of the common bile duct by a gallstone',
    ],
    correctAnswer: 3,
    explanation:
      'The liver conjugates bilirubin with glucuronic acid and secretes it in bile. When the bile duct is blocked, conjugated bilirubin backs up into the blood; because it is water-soluble, it is filtered into the urine and darkens it, while the absence of bile pigment in the intestine leaves the stools pale. Hemolysis and reduced conjugating activity both raise unconjugated bilirubin, which is albumin-bound and does not enter urine. Reduced glomerular filtration would not keep bile pigments out of the stool.',
    skill: '3B liver function and bilirubin',
  },
  {
    id: 'fl3-bb-b-d02',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'A person sits in still air in a room whose air, walls, and furnishings are all at 40°C, a temperature higher than that of the skin. By which mechanism can the body continue to lose heat to the environment?',
    options: [
      'Radiation of heat from the skin to surrounding objects',
      'Conduction of heat from the skin into the adjacent air',
      'Evaporation of sweat from the surface of the skin',
      'Convection of warmed air away from the body surface',
    ],
    correctAnswer: 2,
    explanation:
      'Radiation, conduction, and convection all move heat down a temperature gradient; when the surroundings are warmer than the skin, they transfer heat into the body. Evaporation of sweat removes heat as the latent heat of vaporization regardless of air temperature, and cutaneous vasodilation delivers core heat to the skin for this purpose, so it is the only route of net heat loss here.',
    skill: '3B thermoregulation by the skin',
  },
  {
    id: 'fl3-bb-b-d03',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'Deflecting the stereocilia of a cochlear hair cell toward the tallest stereocilium opens mechanically gated channels and depolarizes the cell. The ion that carries most of this depolarizing current is:',
    options: [
      '$\\text{Na}^+$, the most abundant cation in the endolymph',
      '$\\text{K}^+$, which is highly concentrated in the endolymph',
      '$\\text{Ca}^{2+}$, entering through channels at the synapse',
      '$\\text{Cl}^-$, entering through channels opened by tip links',
    ],
    correctAnswer: 1,
    explanation:
      'The stereocilia project into endolymph, which has an unusually high $\\text{K}^+$ concentration and a positive potential, so opening the mechanotransduction channels lets $\\text{K}^+$ flow in and depolarize the cell. Endolymph is low in $\\text{Na}^+$, unlike perilymph and other extracellular fluids. $\\text{Ca}^{2+}$ entry through voltage-gated channels at the base of the cell follows depolarization and triggers transmitter release; it does not generate the receptor current. $\\text{Cl}^-$ entry would hyperpolarize, not depolarize, the cell.',
    skill: '3A auditory transduction',
  },
  {
    id: 'fl3-bb-b-d04',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'In a child with a deficiency of a urea-cycle enzyme, plasma ammonia rises sharply after a protein-rich meal. One proposed basis for the neurological toxicity of ammonia is that, in the brain, excess ammonia:',
    options: [
      'drives α-ketoglutarate into glutamate and glutamine, draining a citric acid cycle intermediate',
      'is converted to urea by astrocytes, raising the osmolarity of the cerebrospinal fluid',
      'acidifies the cytosol of neurons, because ammonia acts as a strong acid at physiological pH',
      'inhibits glutamine synthetase, so astrocytes can no longer take up transmitter glutamate',
    ],
    correctAnswer: 0,
    explanation:
      'The brain detoxifies ammonia by adding it to α-ketoglutarate (forming glutamate) and to glutamate (forming glutamine, via glutamine synthetase in astrocytes). A large ammonia load pulls α-ketoglutarate out of the citric acid cycle, reducing ATP production, and glutamine accumulation swells astrocytes. The urea cycle operates in the liver, not in brain cells. Ammonia is a weak base, not an acid. Ammonia is a substrate of glutamine synthetase, so it drives rather than inhibits that enzyme.',
    skill: '1D urea cycle and ammonia toxicity',
  },
  {
    id: 'fl3-bb-b-d05',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'The oxygen-binding curve of myoglobin is hyperbolic, whereas that of hemoglobin is sigmoidal. The main structural basis of this difference is that myoglobin:',
    options: [
      'holds its heme iron in the ferric ($\\text{Fe}^{3+}$) state',
      'binds 2,3-bisphosphoglycerate more tightly than hemoglobin',
      'is a single polypeptide chain with a single heme group',
      'lacks the proximal histidine that coordinates the heme iron',
    ],
    correctAnswer: 2,
    explanation:
      'Sigmoidal binding reflects cooperativity: binding of $\\text{O}_2$ to one subunit of the hemoglobin tetramer shifts the others toward the high-affinity state. Myoglobin has one chain and one heme, so there are no subunit interactions and its curve is hyperbolic. Functional myoglobin, like hemoglobin, binds $\\text{O}_2$ with iron in the ferrous ($\\text{Fe}^{2+}$) state. 2,3-BPG binds deoxyhemoglobin, not myoglobin. Both proteins use a proximal histidine to coordinate the heme iron.',
    skill: '1A hemoglobin vs myoglobin structure–function',
  },
  {
    id: 'fl3-bb-b-d06',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'A dihybrid that received alleles A and B from one parent and a and b from the other is test-crossed to an aabb individual. The offspring are 420 AaBb, 420 aabb, 80 Aabb, and 80 aaBb. The distance between the two genes is closest to:',
    options: ['8 map units', '16 map units', '42 map units', '84 map units'],
    correctAnswer: 1,
    explanation:
      'The dihybrid’s parental chromosomes are AB and ab, so the Aabb and aaBb offspring are recombinants: (80 + 80)/1,000 = 0.16, or 16 map units (16 cM). The 8-unit value counts only one recombinant class. The 84-unit value is the frequency of parental offspring, and 42 counts only one parental class; no pair of genes can show more than 50% recombination.',
    skill: '1C recombination frequency and map units',
  },
  {
    id: 'fl3-bb-b-d07',
    section: 'bio-biochem',
    discipline: 'microbiology',
    question:
      'A broth culture of *Clostridium* is held at 80°C for 20 minutes, a treatment that kills all of its vegetative cells. Samples are then incubated at 37°C either in air or in an oxygen-free chamber, and growth appears only in the oxygen-free chamber. Which conclusion is best supported?',
    options: [
      'Heating turned the vegetative cells into spores, which then needed oxygen before they could germinate',
      'The organism is a facultative anaerobe whose spores germinate only when oxygen is entirely absent',
      'Heating killed every cell, and the growth in the chamber came from contaminants in the chamber air',
      'Heat-resistant endospores survived and germinated, but the resulting cells cannot grow in oxygen',
    ],
    correctAnswer: 3,
    explanation:
      'Endospores are dormant, dehydrated structures that survive heat that kills vegetative cells; after heating, the spores germinated, and growth only in the absence of oxygen shows the organism is an obligate anaerobe. Spore formation is a developmental process triggered by nutrient limitation, not a response to brief heating, and growth required the absence rather than the presence of oxygen. A facultative anaerobe would grow in air as well. The chamber is oxygen-free, and nothing suggests contamination; growth in only one condition fits the organism’s own oxygen requirement.',
    skill: '2B endospores and oxygen requirements',
  },
]
