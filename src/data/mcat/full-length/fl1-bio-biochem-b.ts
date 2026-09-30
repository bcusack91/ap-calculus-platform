/**
 * MCAT Full-Length Form 1 — Bio/Biochem section, file B (passages 6–10 +
 * 7 discretes). Authored 2026-09-29 against the AAMC-style rebuild brief:
 * 400–600-word passages, ~half information-based, keys that require using the
 * passage rather than matching its wording, answer lengths and key positions
 * balanced. Keys await an independent blind-solve; do not set needsReview.
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL1_BIO_BIOCHEM_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. PHYSIOLOGY (exp, table) — graded hemorrhage: MAP, CO, TPR, inulin
  //    clearance, renin; α1 agonist vs ACE inhibitor rescue
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-bb-b-06',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Hemodynamic and Renal Responses to Graded Hemorrhage',
    passageText:
      'Mean arterial pressure (MAP) is the average pressure that drives blood through the systemic circulation. Because the heart spends roughly two-thirds of each cycle in diastole, MAP can be estimated from the systolic (SBP) and diastolic (DBP) pressures as $\\text{MAP} \\approx \\text{DBP} + (\\text{SBP} - \\text{DBP})/3$. For the circulation as a whole, MAP is the product of cardiac output (CO) and total peripheral resistance (TPR), $\\text{MAP} \\approx \\text{CO} \\times \\text{TPR}$, where CO is heart rate multiplied by stroke volume. A loss of blood volume lowers venous return and therefore stroke volume. Baroreceptors in the carotid sinus and aortic arch detect the resulting fall in arterial pressure, and the brainstem responds within seconds by increasing sympathetic outflow to the heart and blood vessels and by withdrawing parasympathetic tone.\n\nThe kidney responds on two time scales. Renal blood flow and glomerular filtration rate (GFR) are held nearly constant by intrinsic autoregulation as long as MAP remains between roughly 80 and 180 mmHg; below this range, filtration falls with pressure. Over minutes, reduced renal perfusion and sympathetic stimulation of the juxtaglomerular cells release renin, which leads to the formation of angiotensin II. Angiotensin II constricts systemic arterioles, stimulates aldosterone secretion, and constricts the efferent arteriole of the glomerulus more strongly than the afferent arteriole. Angiotensin II also suppresses further renin release. GFR can be measured as the clearance of inulin, a polysaccharide that is freely filtered but neither reabsorbed nor secreted by the tubules: $C_{inulin} = UV/P$, where $U$ and $P$ are the urine and plasma inulin concentrations and $V$ is the urine flow rate.\n\nResearchers examined these responses in anesthetized pigs of about 60 kg that received a continuous intravenous inulin infusion to keep plasma inulin constant. After baseline measurements, 10% of the estimated blood volume was withdrawn through a femoral venous catheter over 5 minutes, and measurements were repeated 15 minutes later. A second withdrawal then brought the cumulative loss to 30% of blood volume, and measurements were repeated after another 15 minutes. The animals were then randomly assigned to receive an intravenous infusion of either an $\\alpha_1$-adrenergic agonist (Group 1) or an inhibitor of angiotensin-converting enzyme (ACE) (Group 2), and final measurements were made 20 minutes after each infusion began. Heart rate and stroke volume were obtained from an ultrasonic flow probe on the ascending aorta, arterial pressure from a catheter in the carotid artery, and urine from a bladder catheter. Plasma renin activity (PRA) was measured in arterial blood samples. Each animal served as its own control for the two hemorrhage steps. The results are shown in Table 1.',
    figure:
      '**Table 1. Hemodynamic and renal measurements (means, n = 6 per group)**\n\n| Condition | HR (beats/min) | SV (mL) | SBP/DBP (mmHg) | Plasma inulin (mg/dL) | Urine inulin (mg/dL) | Urine flow (mL/min) | PRA (ng/mL/h) |\n|---|---|---|---|---|---|---|---|\n| Baseline | 75 | 80 | 120/84 | 2.0 | 120 | 2.0 | 1.0 |\n| 10% hemorrhage | 100 | 55 | 118/88 | 2.0 | 240 | 1.0 | 2.5 |\n| 30% hemorrhage | 140 | 20 | 76/46 | 2.0 | 200 | 0.30 | 8.0 |\n| 30% hemorrhage + α1 agonist (Group 1) | 110 | 25 | 100/64 | 2.0 | 300 | 0.50 | 6.0 |\n| 30% hemorrhage + ACE inhibitor (Group 2) | 150 | 18 | 66/39 | 2.0 | 120 | 0.20 | 20 |',
    questions: [
      {
        question: 'Based on Table 1, the GFR of the animals after 30% hemorrhage (before either drug was given) was closest to:',
        options: ['3.0 mL/min', '30 mL/min', '60 mL/min', '100 mL/min'],
        correctAnswer: 1,
        explanation:
          'Inulin clearance equals GFR: $C = UV/P = (200\\ \\text{mg/dL} \\times 0.30\\ \\text{mL/min})/(2.0\\ \\text{mg/dL}) = 30$ mL/min, one quarter of the baseline value of $(120 \\times 2.0)/2.0 = 120$ mL/min. The 60 mL/min value multiplies urine concentration by flow but omits the division by plasma concentration. The 100 mL/min value divides the urine concentration by the plasma concentration and omits the urine flow rate. The 3.0 mL/min value is a factor-of-ten slip.',
        skill: '3B renal clearance',
      },
      {
        question: 'Compared with baseline, total peripheral resistance after 30% hemorrhage (before either drug was given) was:',
        options: ['roughly 40% lower', 'roughly 20% lower', 'essentially unchanged', 'roughly 25% higher'],
        correctAnswer: 3,
        explanation:
          'At baseline, MAP = 84 + (120 − 84)/3 = 96 mmHg and CO = 75 beats/min × 80 mL = 6.0 L/min, so TPR = MAP/CO = 16 mmHg·min/L. After 30% hemorrhage, MAP = 46 + (76 − 46)/3 = 56 mmHg and CO = 140 × 20 mL = 2.8 L/min, so TPR = 56/2.8 = 20 mmHg·min/L, about 25% higher, as expected from sympathetic vasoconstriction and angiotensin II. The 40% figure is the fall in MAP alone, ignoring the larger fall in cardiac output. The 20% figure comes from inverting the ratio (CO/MAP). Resistance could be unchanged only if MAP and CO had fallen by the same fraction, but CO fell by more than half while MAP fell by about 40%.',
        skill: '3B cardiovascular physiology',
      },
      {
        question: 'After 10% hemorrhage, urine flow fell to half its baseline value. Which of the following best accounts for this result?',
        options: [
          'Autoregulation kept filtration at its baseline rate while hormonal signals increased reabsorption of water from the filtrate',
          'A fall in mean arterial pressure below the autoregulatory range reduced filtration, and the smaller filtrate volume was reabsorbed in the usual proportion',
          'Sympathetic constriction of the afferent arteriole halved the filtration rate, and the tubules reabsorbed the same fraction of a smaller filtrate',
          'A reduced plasma inulin concentration lowered the filtered load of inulin, so less inulin and less water reached the urine',
        ],
        correctAnswer: 0,
        explanation:
          'From Table 1, GFR after 10% hemorrhage is $(240 \\times 1.0)/2.0 = 120$ mL/min, identical to baseline, and MAP is 88 + 30/3 = 98 mmHg, within the autoregulatory range given in the passage. With the same volume filtered but half the urine produced, a larger fraction of the filtrate was reabsorbed, which is what increased aldosterone and antidiuretic hormone release during volume loss would produce. Both the option invoking a fall below the autoregulatory range and the option invoking afferent constriction claim that filtration was halved, which the clearance data contradict. Plasma inulin was held constant at 2.0 mg/dL, so the filtered load did not fall; the doubling of urinary inulin concentration reflects water removal from an unchanged filtered load.',
        skill: '3B renal physiology',
      },
      {
        question: 'The GFR of Group 2 animals was lower than that of the same animals after 30% hemorrhage alone. This result is best explained by the ACE inhibitor having:',
        options: [
          'lowered plasma renin activity, thereby removing the main stimulus for constriction of the renal arterioles',
          'blocked dilation of the afferent arteriole, which normally raises renal plasma flow during hypotension',
          'removed the efferent arteriolar constriction that was sustaining glomerular capillary pressure',
          'prevented aldosterone from stimulating sodium reabsorption in the distal tubule and the collecting duct',
        ],
        correctAnswer: 2,
        explanation:
          'GFR in Group 2 is $(120 \\times 0.20)/2.0 = 12$ mL/min, versus 30 mL/min after hemorrhage alone. The passage states that angiotensin II constricts the efferent arteriole more than the afferent; when renal perfusion is low, that preferential efferent constriction props up the hydrostatic pressure in the glomerular capillaries. Blocking angiotensin II formation removes this support (and lowers MAP further, to 48 mmHg), so filtration falls. Plasma renin activity actually rose to 20 ng/mL/h in Group 2, because angiotensin II normally suppresses renin release, so the first option contradicts the data. Angiotensin II does not dilate the afferent arteriole; afferent dilation is part of intrinsic autoregulation, not of the renin system. Aldosterone acts on tubular sodium reabsorption, which affects urine composition rather than the filtration rate.',
        skill: '3B renal physiology',
      },
      {
        question: 'The investigators concluded that the $\\alpha_1$ agonist partially restored GFR after hemorrhage. Which additional group would most strengthen this conclusion?',
        options: [
          'Animals given the $\\alpha_1$ agonist without any prior hemorrhage',
          'Animals given a vehicle infusion after 30% hemorrhage and measured at the same time as Groups 1 and 2',
          'Animals given the $\\alpha_1$ agonist and the ACE inhibitor together after 30% hemorrhage',
          'Animals whose withdrawn blood was reinfused before the $\\alpha_1$ agonist was given',
        ],
        correctAnswer: 1,
        explanation:
          'The drug measurements were taken 20 minutes after the 30% hemorrhage measurement, so continued reflex compensation and movement of interstitial fluid into the plasma could have raised GFR over that interval even without a drug. A time-matched vehicle group isolates the drug effect from the effect of elapsed time. Giving the agonist without hemorrhage tests a different question (its effect in normovolemia). Combining both drugs confounds two interventions. Reinfusing the blood removes the hypovolemia that the study is about.',
        skill: '3B research design',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. MICROBIOLOGY (info) — lytic dsDNA phage vs retrovirus; transformation,
  //    conjugation, transduction
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-bb-b-07',
    section: 'bio-biochem',
    discipline: 'microbiology',
    title: 'Viral Replication Strategies and Gene Transfer in Bacteria',
    passageText:
      'Viruses are obligate intracellular parasites: outside a host cell they are inert particles of nucleic acid wrapped in a protein capsid and, in some cases, a lipid envelope taken from a host membrane. Two life cycles illustrate the range of strategies. A lytic double-stranded DNA bacteriophage such as T4 adsorbs to specific receptors on the bacterial surface and injects its genome, leaving the capsid outside. The host cell’s own RNA polymerase transcribes the earliest phage genes; their products include enzymes that degrade the host chromosome and a phage-encoded DNA polymerase that copies the viral genome many times over. Later genes encode capsid proteins and a lysozyme-like enzyme, and the assembled virions are released when the cell wall ruptures, typically 20 to 30 minutes after infection. The host cell does not survive. Temperate phages such as lambda can instead integrate their DNA into the host chromosome at a specific attachment site and be replicated passively as a prophage for many generations (lysogeny) until stress triggers excision and a lytic cycle.\n\nA retrovirus such as HIV follows a different path. Its envelope glycoproteins bind receptors on the surface of a host cell, and the envelope fuses with the plasma membrane, delivering two copies of a single-stranded (+)RNA genome together with viral enzymes. Reverse transcriptase, carried inside the virion, synthesizes a double-stranded DNA copy of the genome in the cytoplasm; this DNA is transported into the nucleus, and the viral enzyme integrase inserts it into a host chromosome at an essentially random site. From then on the provirus behaves like a cellular gene: host RNA polymerase II transcribes it, host ribosomes translate the viral mRNAs, and new genomic RNA and viral proteins assemble at the plasma membrane. Virions bud outward, acquiring their envelope from the host, and the cell may survive to produce virus for a long time. Reverse transcriptase lacks proofreading, so each cycle of infection introduces mutations at a high rate.\n\nBacteria have no sexual reproduction, but they exchange genes horizontally by three routes. In transformation, a competent cell takes up naked DNA from its surroundings; the process is abolished if the DNA is first destroyed by DNase. In conjugation, a donor cell carrying a fertility (F) plasmid extends a pilus to a recipient, and a single strand of plasmid DNA is transferred across a cytoplasmic bridge, so donor and recipient must be in direct physical contact. If the F plasmid has integrated into the chromosome (an Hfr strain), chromosomal genes adjacent to the integration site are transferred first, and transfer is usually interrupted before the whole chromosome has been copied. In transduction, a phage carries bacterial DNA from one cell to another. Generalized transduction occurs when a lytic phage mistakenly packages a random fragment of degraded host chromosome into a capsid; the resulting particle can inject that fragment into a new cell, where it may recombine into the chromosome. Specialized transduction arises when a prophage excises imprecisely, leaving some of its own genes behind and taking along a small segment of host DNA that lies next to its attachment site. In all three routes, transferred DNA is inherited stably only if it is a self-replicating plasmid or becomes incorporated into the recipient chromosome by recombination.',
    questions: [
      {
        question: 'A cultured T-cell line carries a single integrated retroviral provirus and continuously releases virions. If the culture is treated with a drug that completely inhibits reverse transcriptase, virion release from these cells would be expected to:',
        options: [
          'stop, because reverse transcriptase is needed to synthesize the RNA genomes packaged into new virions',
          'stop, because reverse transcriptase must excise the provirus from the chromosome before it can be expressed',
          'continue, because expression of the integrated provirus depends on host enzymes rather than on reverse transcriptase',
          'continue, but the released virions would lack envelope glycoproteins and could not infect new cells',
        ],
        correctAnswer: 2,
        explanation:
          'Reverse transcriptase acts only between entry and integration, converting the RNA genome into DNA. Once the provirus is in the chromosome, host RNA polymerase II makes both the viral mRNAs and the new genomic RNAs, and host ribosomes make the viral proteins, so a producer cell keeps releasing virions; the drug would instead block those virions from establishing new proviruses in other cells. Genomic RNA is transcribed from the provirus, not made by reverse transcriptase. The provirus is transcribed in place and is never excised. Envelope glycoproteins are translated from viral mRNA by host ribosomes and are unaffected by the drug.',
        skill: '2B viral life cycles',
      },
      {
        question: 'Strain 1 of *E. coli* requires histidine (his⁻) and is resistant to streptomycin (str^R); strain 2 makes its own histidine (his⁺) and is killed by streptomycin (str^S). The two strains were mixed for one hour and then plated on minimal medium containing streptomycin, and colonies grew. Colonies also grew when DNase was present during the hour of mixing, but none grew when the strains were separated during that hour by a filter that blocks cells while allowing DNA and phage particles to pass, and none grew when either strain was incubated and plated alone. The colonies most likely arose by:',
        options: [
          'transformation of strain 1 by naked DNA released from lysed strain 2 cells',
          'generalized transduction of strain 1 by a phage grown on strain 2',
          'spontaneous reversion of the his⁻ mutation in strain 1 during the incubation',
          'conjugation between strain 2 donors and strain 1 recipients',
        ],
        correctAnswer: 3,
        explanation:
          'Only his⁺ str^R cells grow on minimal medium with streptomycin, so the colonies are strain 1 cells that acquired his⁺ from strain 2. Transfer was insensitive to DNase, which rules out uptake of naked DNA (transformation), and it required that the two populations be able to touch, which rules out phage-mediated transfer (phage particles pass the filter) and points to the cell-to-cell contact that conjugation requires. Spontaneous reversion is excluded by the control in which strain 1 alone produced no colonies.',
        skill: '2B bacterial genetics',
      },
      {
        question: 'A temperate phage integrates its DNA only at a single attachment site that lies between the host genes *gal* and *bio*. Compared with generalized transduction by a lytic phage, transduction by particles derived from this prophage would be expected to:',
        options: [
          'transfer mainly *gal* or *bio*, along with part of the phage genome, into recipient cells',
          'transfer any chromosomal gene, but only into recipient cells that are already lysogenic for the phage',
          'transfer plasmid DNA but not chromosomal genes, because a prophage never excises',
          'transfer random chromosomal fragments at a higher frequency than the lytic phage does',
        ],
        correctAnswer: 0,
        explanation:
          'Specialized transducing particles form when a prophage excises imprecisely, so the only host DNA they can carry is the DNA that flanks the attachment site; with a single site between *gal* and *bio*, those are the genes that can be transduced, and because the excised segment is a hybrid, the particle also carries phage genes. Nothing in the mechanism restricts recipients to lysogens, and only flanking genes, not any gene, are transferred. Prophages do excise when the lytic cycle is induced, and the DNA they carry is chromosomal, not plasmid. Random fragments are the signature of generalized transduction, not of a prophage.',
        skill: '2B transduction',
      },
      {
        question: 'A bacterial culture just infected with a lytic dsDNA phage and a T-cell culture just infected with a retrovirus are each treated with an inhibitor of the host cell’s DNA-dependent RNA polymerase, at a concentration that does not immediately kill the cells. Production of new virions would be expected to be blocked in:',
        options: [
          'the phage-infected culture only, because the retrovirus carries its own polymerase in the virion',
          'the retrovirus-infected culture only, because the phage encodes its own DNA polymerase',
          'both cultures, because each virus relies on the host enzyme to transcribe its genes',
          'neither culture, because both viruses copy their genomes without transcription',
        ],
        correctAnswer: 2,
        explanation:
          'The phage depends on the host RNA polymerase to transcribe its early genes, and the retroviral provirus is transcribed by host RNA polymerase II, so neither virus can make mRNA or, for the retrovirus, new genomic RNA when the host enzyme is blocked. The polymerase the retrovirus carries is reverse transcriptase, an RNA-dependent DNA polymerase that makes DNA from RNA; it does not make mRNA. The phage-encoded DNA polymerase replicates DNA but cannot transcribe it, and it is itself made only after early transcription. Both viruses require transcription to produce the proteins of new virions.',
        skill: '2B viral gene expression',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. BIOCHEMISTRY (exp, chart) — liver pyruvate kinase: sigmoidal kinetics,
  //    F1,6BP activation, ATP/alanine inhibition, PKA phosphorylation
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-bb-b-08',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    title: 'Allosteric and Covalent Regulation of Liver Pyruvate Kinase',
    passageText:
      'Pyruvate kinase catalyzes the final step of glycolysis, transferring a phosphoryl group from phosphoenolpyruvate (PEP) to ADP to form pyruvate and ATP. The reaction is strongly exergonic and effectively irreversible under cellular conditions, which makes the enzyme a natural control point. The liver isoform (L-PK) is a homotetramer whose subunits interconvert between a low-affinity T state and a high-affinity R state. Binding of PEP to one subunit favors the R state in its neighbors, so the velocity of the enzyme rises steeply over a narrow range of substrate concentration rather than following the hyperbola predicted by the Michaelis–Menten equation. Such behavior is described by the Hill equation,\n\n$v = \\dfrac{V_{max}[S]^n}{K_{0.5}^n + [S]^n}$\n\nwhere $K_{0.5}$ is the substrate concentration that gives half-maximal velocity and the Hill coefficient $n$ exceeds 1 when binding is cooperative. When $n = 1$ the equation reduces to the Michaelis–Menten hyperbola and $K_{0.5}$ equals $K_m$.\n\nL-PK integrates several signals. Fructose 1,6-bisphosphate (F1,6BP), the product of the phosphofructokinase-1 reaction several steps upstream, binds at an allosteric site distinct from the active site and increases the activity of the enzyme, a feed-forward arrangement that lets flux entering glycolysis accelerate its exit. ATP and the amino acid alanine bind at separate allosteric sites and decrease activity. In addition, the fasting hormone glucagon raises hepatocyte cAMP and activates protein kinase A (PKA), which phosphorylates a serine residue near the N-terminus of each L-PK subunit. Phosphorylation reduces the activity of the enzyme at physiological PEP concentrations, which helps the liver avoid consuming PEP by glycolysis while gluconeogenesis, a pathway that also passes through PEP, is switched on. A phosphoprotein phosphatase removes the modification when insulin signaling resumes after a meal.\n\nTo characterize these controls, researchers purified L-PK from rat liver and, when required, phosphorylated it to completion with PKA and ATP, removing the ATP by gel filtration before assays. Initial velocities were measured at 37 °C and pH 7.4 with saturating ADP, using a coupled assay in which lactate dehydrogenase converts the pyruvate formed to lactate while oxidizing NADH to NAD⁺; the disappearance of NADH was followed by its absorbance at 340 nm. Each velocity is the mean of triplicate measurements and is reported as a percentage of the maximal velocity of the unphosphorylated enzyme. Figure 1 shows the dependence of velocity on PEP concentration for the unphosphorylated enzyme alone, in the presence of 0.1 mM F1,6BP, and in the presence of 2 mM ATP plus 1 mM alanine. Table 1 lists the kinetic parameters obtained by fitting the Hill equation to the corresponding data for the phosphorylated enzyme.',
    chart: {
      title: 'Figure 1. Initial velocity of unphosphorylated L-PK as a function of PEP concentration (saturating ADP)',
      kind: 'line',
      xLabel: 'PEP concentration',
      xUnit: 'mM',
      yLabel: 'Initial velocity',
      yUnit: '% of Vmax',
      xValues: [0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5],
      yValues: [0, 11.1, 50.0, 77.1, 88.9, 94.0, 96.4, 97.7],
      seriesLabel: 'No effectors',
      comparisonSeries: [
        { label: '+ 0.1 mM F1,6BP', yValues: [0, 71.4, 83.3, 88.2, 90.9, 92.6, 93.8, 94.6] },
        { label: '+ 2 mM ATP and 1 mM alanine', yValues: [0, 1.5, 11.1, 29.7, 50.0, 66.1, 77.1, 84.3] },
      ],
      hidePointLabels: true,
    },
    figure:
      '**Table 1. Hill-equation parameters for the phosphorylated enzyme**\n\n| Additions | $K_{0.5}$ (mM PEP) | Hill coefficient $n$ | $V_{max}$ (% of unphosphorylated enzyme) |\n|---|---|---|---|\n| None | 2.5 | 3.0 | 100 |\n| 0.1 mM F1,6BP | 0.3 | 1.1 | 100 |\n| 2 mM ATP + 1 mM alanine | 5.0 | 3.1 | 98 |',
    questions: [
      {
        question: 'According to Figure 1, the $K_{0.5}$ for PEP of the unphosphorylated enzyme in the absence of effectors is closest to:',
        options: ['0.2 mM', '0.5 mM', '1.0 mM', '2.0 mM'],
        correctAnswer: 2,
        explanation:
          '$K_{0.5}$ is the substrate concentration at which velocity is half of $V_{max}$. The no-effector curve crosses 50% of $V_{max}$ at 1.0 mM PEP. At 0.5 mM the same curve is only about 11% of maximal, so 0.5 mM is far below $K_{0.5}$. The 0.2 mM value is roughly where the F1,6BP curve reaches half-maximal velocity, and 2.0 mM is where the ATP-plus-alanine curve does, so those values describe the effector-bound enzyme rather than the enzyme alone.',
        skill: '1A enzyme kinetics',
      },
      {
        question: 'The change in the shape of the velocity curve produced by F1,6BP in Figure 1 is best explained by the activator:',
        options: [
          'raising the catalytic rate of each active site, so that Vmax increases while the affinity for PEP is unchanged',
          'holding the tetramer in the R state, so that every subunit already has high affinity for PEP and binding is no longer cooperative',
          'occupying the active site as an alternative substrate, so that it competes with PEP at low concentrations',
          'dissociating the tetramer into monomers, which bind PEP with lower affinity but independently of one another',
        ],
        correctAnswer: 1,
        explanation:
          'With F1,6BP the curve becomes hyperbolic and reaches half-maximal velocity at a much lower PEP concentration, but it approaches the same plateau as the enzyme alone. A sigmoidal curve arises because early substrate binding must first convert subunits from the T to the R state; an activator that stabilizes the R state removes that requirement, so affinity is high from the start and the Hill coefficient falls toward 1 (compare the value of 1.1 in Table 1). A change in catalytic rate would raise the plateau, which is not observed. A competitor at the active site would lower velocity at low PEP, the opposite of what is seen. Monomers with lower affinity would shift the curve to the right, not the left.',
        skill: '1A allosteric regulation',
      },
      {
        question: 'Based on Figure 1 and Table 1, in a hepatocyte in which L-PK has been phosphorylated by PKA, a rise in the concentration of F1,6BP would be expected to:',
        options: [
          'have little effect, because the phosphorylated enzyme cannot bind the activator',
          'reduce activity further, because the activator and the phosphate favor the same conformation',
          'raise Vmax well above the value measured for the unphosphorylated enzyme',
          'largely reverse the loss of affinity caused by phosphorylation',
        ],
        correctAnswer: 3,
        explanation:
          'Phosphorylation raises $K_{0.5}$ from about 1.0 mM (Figure 1) to 2.5 mM (Table 1), but adding F1,6BP to the phosphorylated enzyme lowers $K_{0.5}$ to 0.3 mM with a Hill coefficient near 1, almost the same state the activator produces in the unphosphorylated enzyme (about 0.2 mM). Abundant F1,6BP, a signal that glycolysis is running upstream, therefore overrides most of the glucagon-driven inhibition. The phosphorylated enzyme clearly still binds the activator, and activity rises rather than falls. $V_{max}$ stays at 100% in every row of Table 1, so the activator does not raise the maximal velocity.',
        skill: '1A covalent modification',
      },
      {
        question: 'The inhibition of L-PK by alanine is an example of feedback inhibition because alanine:',
        options: [
          'is synthesized from pyruvate, the product of the reaction, so its accumulation signals that output exceeds demand',
          'is a structural analog of PEP that competes with the substrate at the active site',
          'is a cofactor required for the phosphoryl transfer whose depletion slows catalysis',
          'is a precursor of PEP that accumulates when the upstream steps of glycolysis are slow',
        ],
        correctAnswer: 0,
        explanation:
          'Alanine is formed from pyruvate by transamination, so it rises when pyruvate, the product of the pyruvate kinase reaction, is plentiful; an end product that inhibits an earlier enzyme in its own pathway is the definition of feedback inhibition. The passage places alanine at an allosteric site, not the active site, and alanine does not resemble PEP. It is not a cofactor for the reaction, and it is derived from the product, not from a precursor of the substrate.',
        skill: '1A feedback inhibition',
      },
      {
        question: 'For the coupled assay described in the passage to report the rate of the L-PK reaction accurately, which condition is most important?',
        options: [
          'NADH is present at a concentration well below the $K_m$ of lactate dehydrogenase',
          'Pyruvate is added at the start of each assay so that lactate dehydrogenase is already active when PEP is introduced',
          'ADP is omitted so that only the PEP-dependent step of the reaction is measured',
          'Lactate dehydrogenase is present in excess, so that pyruvate is converted as fast as it forms',
        ],
        correctAnswer: 3,
        explanation:
          'The measured quantity is NADH oxidation, which equals the rate of pyruvate formation only if the coupling enzyme never limits the rate; with lactate dehydrogenase and NADH in large excess, every pyruvate molecule is reduced immediately and the absorbance change tracks L-PK. Keeping NADH below the $K_m$ of lactate dehydrogenase would make the coupling step slow and dependent on NADH concentration. Adding pyruvate at the start would consume NADH for reasons unrelated to L-PK activity. ADP is a substrate of pyruvate kinase, so omitting it would abolish the reaction being measured.',
        skill: '1A experimental methods',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. CELL BIOLOGY (exp, table) — β-adrenergic GPCR → Gαs → cAMP → PKA →
  //    lipolysis; Gαs-null, antagonist, forskolin, PKA and PDE inhibitors
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-bb-b-09',
    section: 'bio-biochem',
    discipline: 'cell biology',
    title: 'Dissecting a β-Adrenergic Signaling Pathway in Adipocytes',
    passageText:
      'Adipocytes store triacylglycerol and release fatty acids and glycerol when the body needs fuel. During fasting or exercise, epinephrine and norepinephrine bind β-adrenergic receptors on the adipocyte surface. These receptors belong to the family of G protein–coupled receptors (GPCRs): seven transmembrane helices, an extracellular ligand-binding region, and an intracellular face that interacts with a heterotrimeric G protein composed of α, β, and γ subunits. In the resting state the α subunit, here $\\text{G}\\alpha_s$, binds GDP. Agonist binding changes the conformation of the receptor so that it promotes the exchange of GDP for GTP on $\\text{G}\\alpha_s$, which then separates from the βγ pair and stimulates the membrane enzyme adenylyl cyclase to convert ATP to cyclic AMP (cAMP). $\\text{G}\\alpha_s$ has an intrinsic GTPase activity; hydrolysis of GTP to GDP returns it to the inactive state, and the cycle can repeat as long as agonist remains bound. cAMP is degraded to 5′-AMP by phosphodiesterases (PDEs). The best-characterized target of cAMP is protein kinase A (PKA), a tetramer in which the binding of cAMP to two regulatory subunits releases two active catalytic subunits. In adipocytes, PKA phosphorylates hormone-sensitive lipase and the lipid-droplet coat protein perilipin, and the activated lipase hydrolyzes stored triacylglycerol to fatty acids and glycerol. Because adipocytes lack the kinase needed to reuse glycerol, the rate at which glycerol appears in the culture medium is a convenient measure of lipolysis.\n\nTo test the order of events in this pathway, investigators used a cultured mouse adipocyte line and a derivative of the same line in which both copies of the gene encoding $\\text{G}\\alpha_s$ had been disrupted ($\\text{G}\\alpha_s$-null). Cells were incubated for 30 minutes with the indicated compounds: a β-adrenergic agonist (isoproterenol, 1 μM); a β-adrenergic antagonist (propranolol, 10 μM), which occupies the ligand-binding site of the receptor without activating it; forskolin (10 μM), a plant diterpene that binds adenylyl cyclase directly and activates it independently of any G protein; a cell-permeable inhibitor of the PKA catalytic subunit (10 μM); and a nonselective PDE inhibitor (100 μM). Cells were kept in serum-free medium for two hours before treatment so that basal lipolysis was low, and the solvent used to dissolve the compounds was present in every well. Intracellular cAMP was measured by immunoassay in cell extracts at the end of the incubation, and glycerol released into the medium over the same 30 minutes was measured enzymatically. Each condition was run in six replicate wells; the values in Table 1 are means, and the standard error was below 8% of the mean in every case.',
    figure:
      '**Table 1. Intracellular cAMP and glycerol release after 30 minutes**\n\n| Cells and treatment | cAMP (pmol per 10⁶ cells) | Glycerol release (nmol/h per 10⁶ cells) |\n|---|---|---|\n| Wild type, vehicle | 2 | 10 |\n| Wild type + agonist | 40 | 95 |\n| Wild type + agonist + antagonist | 3 | 12 |\n| Gαs-null + agonist | 2 | 11 |\n| Gαs-null + forskolin | 38 | 92 |\n| Wild type + agonist + PKA inhibitor | 41 | 14 |\n| Wild type + PDE inhibitor | 12 | 45 |\n| Wild type + agonist + PDE inhibitor | 110 | 98 |',
    questions: [
      {
        question: 'Which comparison in Table 1 most directly shows that the failure of $\\text{G}\\alpha_s$-null cells to respond to the agonist is not caused by a defect in adenylyl cyclase?',
        options: [
          'Gαs-null + agonist versus wild type + agonist',
          'Gαs-null + forskolin versus Gαs-null + agonist',
          'Wild type + agonist + antagonist versus wild type + agonist',
          'Wild type + PDE inhibitor versus wild type, vehicle',
        ],
        correctAnswer: 1,
        explanation:
          'Forskolin activates adenylyl cyclase without any G protein. In the null cells, forskolin raised cAMP to 38 pmol and glycerol release to 92 nmol/h, essentially the wild-type response, while agonist did nothing, so the cyclase and everything downstream of it are intact and the block lies at the missing $\\text{G}\\alpha_s$. Comparing null and wild-type cells given agonist shows only that the null cells fail to respond, not why. The antagonist comparison tests the receptor, and the PDE-inhibitor comparison tests cAMP degradation; neither involves the null cells.',
        skill: '2A signal transduction',
      },
      {
        question: 'The results obtained with the PKA inhibitor indicate that:',
        options: [
          'PKA is required for adenylyl cyclase to be activated by Gαs',
          'cAMP activates hormone-sensitive lipase directly when PKA is blocked',
          'PKA is required for the lipolytic response but not for the accumulation of cAMP',
          'the PKA inhibitor prevents the agonist from binding to the β-adrenergic receptor',
        ],
        correctAnswer: 2,
        explanation:
          'With the PKA inhibitor present, agonist still raised cAMP to 41 pmol, the same as without the inhibitor, yet glycerol release stayed near the vehicle level (14 versus 10 nmol/h). cAMP production is therefore upstream of, and independent of, PKA, whereas the lipolytic response requires PKA activity. If PKA were needed to activate the cyclase, cAMP would not have risen. If cAMP could activate the lipase directly, glycerol release would have been high despite the inhibitor. Blocked receptor binding would have prevented the rise in cAMP, which was not observed.',
        skill: '2A signal transduction',
      },
      {
        question: 'Adding the PDE inhibitor to agonist-treated wild-type cells raised cAMP to almost three times the level seen with agonist alone but barely changed glycerol release. Which of the following best explains this observation?',
        options: [
          'Hormone-sensitive lipase is already maximally activated at the cAMP level reached with agonist alone',
          'High cAMP concentrations inhibit PKA by promoting reassociation of its regulatory subunits',
          'The PDE inhibitor directly inhibits hormone-sensitive lipase, offsetting the effect of the extra cAMP',
          'Gαs becomes depleted of GTP when cAMP accumulates, which limits further receptor signaling',
        ],
        correctAnswer: 0,
        explanation:
          'The relationship between cAMP and lipolysis is steep and saturable: the PDE inhibitor alone, which raised cAMP only to 12 pmol, already produced about half of the maximal glycerol release, and agonist alone (40 pmol) produced 95 nmol/h. Once the lipase is fully activated, additional cAMP cannot increase the rate further, so tripling cAMP adds almost nothing. cAMP binding releases PKA catalytic subunits; more cAMP does not drive reassociation. A direct inhibitory effect of the PDE inhibitor on the lipase is contradicted by the increase in lipolysis it produced on its own. cAMP is downstream of $\\text{G}\\alpha_s$, and GTP is not depleted by cAMP accumulation.',
        skill: '2A data interpretation',
      },
      {
        question: 'The investigators want to show that the antagonist acts at the receptor rather than on adenylyl cyclase. Which additional condition would be most informative?',
        options: [
          'Gαs-null + antagonist + agonist',
          'Wild type + antagonist + PDE inhibitor',
          'Wild type + antagonist alone',
          'Wild type + antagonist + forskolin',
        ],
        correctAnswer: 3,
        explanation:
          'Forskolin activates adenylyl cyclase while bypassing the receptor and the G protein. If cAMP and glycerol release rise normally in the presence of the antagonist, the antagonist does not inhibit the cyclase, so its effect must be exerted upstream, at the receptor. Null cells do not respond to agonist even without antagonist, so adding antagonist to them reveals nothing. A PDE inhibitor raises cAMP by blocking degradation rather than by activating the cyclase, so that combination would not test the cyclase directly. Antagonist alone shows only whether the compound has activity of its own.',
        skill: '2A research design',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. GENETICS (info) — selection, heterozygote advantage, drift, founder
  //     effect, inbreeding, reproductive isolation and speciation
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl1-bb-b-10',
    section: 'bio-biochem',
    discipline: 'genetics',
    title: 'Selection, Drift, and Divergence in Island Populations',
    passageText:
      'Evolution, in the population-genetic sense, is a change in allele frequencies across generations. In an idealized population that is very large, mates at random, and experiences no mutation, migration, or selection, allele and genotype frequencies remain constant from one generation to the next, a condition described by the Hardy–Weinberg principle. Real populations depart from these assumptions, and each departure leaves a characteristic signature.\n\nNatural selection acts through differences in fitness, defined as the average number of surviving offspring left by individuals of a given genotype and usually expressed relative to the most successful genotype. Directional selection favors one extreme of a trait and shifts the population mean; stabilizing selection favors intermediate phenotypes and reduces variance; disruptive selection favors both extremes at the expense of intermediates. When selection acts on a single locus, the outcome depends on the fitness of the heterozygote. If the fitness of the heterozygote lies between those of the two homozygotes, the favored allele eventually replaces the other, although an allele that is harmful only when homozygous disappears slowly once it is rare, because most copies are then carried by heterozygotes that selection does not touch. If the heterozygote is fitter than either homozygote, neither allele can be eliminated, because whichever allele becomes rare is found mostly in heterozygotes, where it enjoys the advantage.\n\nGenetic drift is the random change in allele frequency that results from sampling: the alleles carried by the finite number of individuals that happen to reproduce are never an exact replica of the parental gene pool. Drift is negligible in populations of many thousands but potent in small ones, where it can carry an allele to fixation or loss regardless of its effect on fitness, and it acts on every locus in the genome at once. Two demographic events amplify drift. In a bottleneck, a population is reduced to a few individuals for one or more generations; in a founder event, a few colonists establish a new population. Both leave a legacy of reduced allelic diversity that persists long after the population regains its former size, because new alleles arise only through mutation. Gene flow, the movement of alleles between populations by migration, acts in the opposite direction, making populations more similar to one another. Nonrandom mating, including inbreeding, also alters the genetic structure of a population: inbreeding increases the chance that the two alleles an individual carries are identical by descent, so recessive phenotypes appear more often than random mating would predict.\n\nIsland archipelagos illustrate how these forces combine. Colonists arriving on a remote island carry a subset of the alleles of the source population, adapt to a different suite of predators and food sources, and exchange few or no migrants with the mainland. Over many generations, selection and drift together may produce a population that is reproductively isolated from its source, which makes it a separate species under the biological species concept. Isolation may be prezygotic, when differences in courtship, timing, or anatomy prevent fertilization, or postzygotic, when hybrids are formed but are inviable or sterile. Speciation that follows geographic separation is termed allopatric; speciation within a shared range, driven by disruptive selection or by chromosomal changes such as polyploidy, is termed sympatric.',
    questions: [
      {
        question: 'In a mainland population, the genotypes AA, AS, and SS have relative fitnesses of 0.8, 1.0, and 0.2. Descendants of this population colonize an island where the factor that harms AA individuals is absent, so that AA and AS both have a fitness of 1.0 while SS remains at 0.2. On the island, the S allele is expected to:',
        options: [
          'decline over many generations, becoming rare but persisting in heterozygotes',
          'remain at its mainland frequency, because heterozygotes are still fully fit',
          'rise in frequency, because AS individuals are now as fit as AA individuals',
          'be lost within a single generation, because SS individuals are strongly selected against',
        ],
        correctAnswer: 0,
        explanation:
          'On the mainland the heterozygote is the fittest genotype, so both alleles persist. On the island the heterozygote is no longer fitter than AA; the only remaining selection is against SS homozygotes, so S declines each generation. Because a rare allele is carried almost entirely by heterozygotes, which are fully fit here, the decline becomes very slow and S lingers at low frequency rather than vanishing quickly. Its frequency cannot stay constant while SS individuals leave fewer offspring, and it cannot rise, since no genotype carrying S is fitter than AA. Loss in one generation would require every S copy to be in an SS individual and all of those to fail, which is impossible when most copies sit in heterozygotes.',
        skill: '1C natural selection',
      },
      {
        question: 'Investigators find that an island population is fixed for an allele that occurs at a frequency of 0.05 on the mainland. Which additional finding would most strongly support genetic drift, rather than natural selection, as the cause?',
        options: [
          'The island environment differs from the mainland in predators and diet',
          'The allele confers a measurable survival advantage in the island environment',
          'The island population was founded by several hundred colonists',
          'Many other loci with no known effect on fitness show reduced variation in the island population',
        ],
        correctAnswer: 3,
        explanation:
          'Drift acts on all loci at the same time, so a founder event or bottleneck that fixed this allele by chance should also have stripped variation from unrelated, neutral loci; selection on one allele would not. A different environment and a demonstrated survival advantage both point toward selection, not away from it. A founding group of several hundred individuals would make drift weaker, which argues against, not for, drift as the explanation.',
        skill: '1C genetic drift',
      },
      {
        question: 'A previously random-mating island population begins to inbreed heavily. In the absence of selection, mutation, and migration, which of the following describes the expected genetic effect after several generations?',
        options: [
          'Allele frequencies change but genotype frequencies remain the same',
          'Genotype frequencies change but allele frequencies do not',
          'Both the allele frequencies and the genotype frequencies change',
          'Neither the allele frequencies nor the genotype frequencies change',
        ],
        correctAnswer: 1,
        explanation:
          'Inbreeding pairs related individuals, so alleles are combined into homozygotes more often than random mating would produce; the proportion of heterozygotes falls and that of both homozygotes rises. No alleles are added or removed by mating pattern alone, so the frequencies of the alleles themselves are unchanged unless selection then acts on the homozygotes. Allele frequencies changing without genotype frequencies changing is impossible, since genotype frequencies are built from the allele frequencies. Nothing changing would require random mating, the assumption that inbreeding violates.',
        skill: '1C Hardy–Weinberg assumptions',
      },
      {
        question: 'Lizards from two islands that have been separated by open water for an estimated 100,000 years are brought together in the laboratory. They court and mate readily, and the eggs develop and hatch, but the hybrid offspring produce no functional gametes. The two populations are best described as:',
        options: [
          'a single species, because gene flow between them is possible under laboratory conditions',
          'separate species that arose allopatrically and are isolated by a prezygotic barrier',
          'separate species that arose allopatrically and are postzygotically isolated',
          'separate species that arose sympatrically and are isolated by a prezygotic barrier',
        ],
        correctAnswer: 2,
        explanation:
          'Mating and fertilization occur, so no prezygotic barrier exists; the barrier is the sterility of the hybrids, which is a postzygotic form of isolation. Because sterile hybrids cannot pass alleles on, there is no effective gene flow, and the populations qualify as separate species under the biological species concept. Divergence took place while the populations were separated by open water, so the speciation was allopatric, not sympatric.',
        skill: '1C speciation',
      },
    ],
  },
]

export const FL1_BIO_BIOCHEM_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl1-bb-b-d01',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'A teratogen that selectively damages endoderm-derived tissue during organogenesis would most directly impair the development of:',
    options: ['the adrenal medulla', 'the epithelial lining of the lungs', 'the collecting tubules of the kidney', 'the lens of the eye'],
    correctAnswer: 1,
    explanation:
      'The endoderm forms the epithelial lining of the digestive tube and its outgrowths, including the respiratory epithelium, the liver, the pancreas, and the thyroid. The adrenal medulla is derived from neural crest (ectoderm), the kidney tubules from intermediate mesoderm, and the lens from surface ectoderm.',
    skill: '2C embryology',
  },
  {
    id: 'fl1-bb-b-d02',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'A patient has an obstruction that prevents bile from reaching the small intestine while pancreatic secretion remains normal. Which of the following processes would be most impaired?',
    options: [
      'absorption of vitamin K from the small intestine',
      'absorption of glucose across the intestinal epithelium',
      'digestion of dietary protein by pancreatic trypsin',
      'absorption of vitamin C from the lumen of the small intestine',
    ],
    correctAnswer: 0,
    explanation:
      'Bile salts emulsify dietary fat and form mixed micelles that carry the products of lipid digestion, including the fat-soluble vitamins A, D, E, and K, to the brush border. Without bile, vitamin K absorption falls sharply. Glucose is absorbed by sodium-coupled transport that does not involve bile, trypsin is a pancreatic enzyme activated in the duodenum independently of bile, and vitamin C is water-soluble and needs no micelles.',
    skill: '3B digestion and absorption',
  },
  {
    id: 'fl1-bb-b-d03',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'Skeletal muscle that has been completely depleted of ATP becomes stiff and cannot relax. This occurs because:',
    options: [
      'calcium cannot be released from the sarcoplasmic reticulum, so troponin stays in its resting conformation',
      'tropomyosin remains locked over the myosin-binding sites on actin',
      'myosin heads remain attached to actin, because ATP binding is required for their release',
      'acetylcholine accumulates at the neuromuscular junction, causing continuous stimulation',
    ],
    correctAnswer: 2,
    explanation:
      'In the cross-bridge cycle, a myosin head detaches from actin only when a new ATP molecule binds to it; without ATP, heads that have completed their power stroke stay bound, producing the rigid state seen in rigor mortis. Failure of calcium release or tropomyosin remaining in the blocking position would prevent cross-bridge formation and leave the muscle flaccid rather than stiff. Acetylcholine is removed by acetylcholinesterase, which does not require ATP, and stimulation cannot produce force without ATP anyway.',
    skill: '3B muscle contraction',
  },
  {
    id: 'fl1-bb-b-d04',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    question: 'A bacterial strain carries a mutation that eliminates the 3′→5′ exonuclease activity of its replicative DNA polymerase while leaving polymerization intact. Compared with the wild type, this strain would show an increase in:',
    options: [
      'the rate of spontaneous point mutations',
      'the average length of Okazaki fragments on the lagging strand',
      'the number of origins of replication used',
      'the rate at which RNA primers are removed',
    ],
    correctAnswer: 0,
    explanation:
      'The 3′→5′ exonuclease is the proofreading activity that removes a mismatched nucleotide immediately after it is added; without it, misincorporated bases persist and become point mutations after the next round of replication. Okazaki fragment length is set by primer spacing on the lagging strand, not by proofreading. Bacterial chromosomes use a single origin regardless of polymerase fidelity. Primer removal depends on the 5′→3′ exonuclease of a separate repair polymerase, which is unaffected.',
    skill: '1B DNA replication',
  },
  {
    id: 'fl1-bb-b-d05',
    section: 'bio-biochem',
    discipline: 'physiology',
    question: 'In pulmonary edema, fluid accumulates in the alveoli and the interstitial space between alveoli and capillaries. Oxygen uptake falls primarily because the fluid:',
    options: [
      'lowers the partial pressure of oxygen in the inspired air',
      'shifts the hemoglobin–oxygen dissociation curve to the right',
      'raises the partial pressure of carbon dioxide in the alveoli, displacing oxygen',
      'increases the distance over which oxygen must diffuse to reach the capillary blood',
    ],
    correctAnswer: 3,
    explanation:
      'The rate of diffusion across the respiratory membrane is proportional to surface area and partial-pressure gradient and inversely proportional to the thickness of the barrier; a layer of fluid lengthens the diffusion path, and oxygen, which is much less soluble in water than carbon dioxide, is affected most. Inspired air is unchanged by fluid inside the lung. A rightward shift of the dissociation curve describes unloading in tissues, not uptake in the lung. Alveolar carbon dioxide does not rise enough to displace oxygen, and carbon dioxide diffuses readily through fluid.',
    skill: '3B gas exchange',
  },
  {
    id: 'fl1-bb-b-d06',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'When grown at low temperature, many bacteria increase the proportion of unsaturated fatty acids in their membrane phospholipids. This change preserves membrane function because unsaturated acyl chains:',
    options: [
      'form hydrogen bonds with neighboring chains, strengthening the bilayer',
      'pack less tightly because of their cis double bonds, keeping the bilayer fluid',
      'are shorter than saturated chains, so the bilayer becomes thinner and cannot freeze',
      'raise the melting temperature of the bilayer so that it resists the cold',
    ],
    correctAnswer: 1,
    explanation:
      'A cis double bond introduces a kink that prevents acyl chains from packing closely, lowering the temperature at which the bilayer transitions from a fluid to a gel-like state; more unsaturation therefore keeps the membrane fluid, and its embedded proteins functional, when the environment cools. Hydrocarbon chains do not form hydrogen bonds. Unsaturation is a matter of double bonds, not chain length, and it lowers, rather than raises, the transition temperature.',
    skill: '1D membrane lipids',
  },
  {
    id: 'fl1-bb-b-d07',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question: 'The tripeptide Asp-Glu-Gly has the following pKa values: α-carboxyl 2.0, aspartate side chain 4.0, glutamate side chain 4.4, and α-amino 9.4. The isoelectric point of this peptide is closest to:',
    options: ['3.0', '4.2', '5.7', '6.7'],
    correctAnswer: 0,
    explanation:
      'Below pH 2.0 the peptide carries +1 (the α-amino group). Between 2.0 and 4.0 the α-carboxyl is deprotonated and the net charge is 0; above 4.0 the aspartate side chain adds a negative charge. The isoelectric point is the average of the two pKa values that bracket the neutral species: (2.0 + 4.0)/2 = 3.0. Averaging the two side-chain pKa values (4.2) brackets a species with charge −1, averaging all four values (5.7) has no chemical meaning, and averaging 4.0 with 9.4 (6.7) brackets the −2 species.',
    skill: '1A isoelectric point',
  },
]
