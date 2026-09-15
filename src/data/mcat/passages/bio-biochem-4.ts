/**
 * MCAT bio-biochem passage bank — expansion wave 4 (physiology, genetics, and
 * biochemistry topics added so the diagnostic can serve two Bio/Biochem
 * passage sets per attempt for 15 back-to-back attempts with margin). Gated by
 * the same checks as waves 2 and 3: KaTeX compile, chart/figure integrity, key
 * balance, no letter-position references, duplicate id/stem checks against the
 * live banks.
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys are
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage } from '../types'

export const BIO_BIOCHEM_PASSAGES_4: MCATPassage[] = [
  {
    "id": "bb4-01",
    "section": "bio-biochem",
    "discipline": "physiology",
    "title": "Sorting Out Polyuria with Water Deprivation and Desmopressin",
    "passageText": "Antidiuretic hormone (ADH, vasopressin) is released from the posterior pituitary when plasma osmolality rises. In the collecting duct it binds V2 receptors on principal cells, raising cyclic AMP and moving aquaporin-2 water channels into the apical membrane; water then follows the osmotic gradient into the hypertonic medullary interstitium and urine osmolality rises. Investigators hypothesized that polyuria of unexplained cause could be sorted by asking whether the hormone is missing or whether the kidney cannot answer it.\n\nAdults passing more than 3 L of urine per day, along with healthy controls, underwent a water-deprivation test. Fluid was withheld beginning at 8 a.m., and urine osmolality, plasma osmolality, body weight, and plasma ADH were recorded hourly. Deprivation was stopped when urine osmolality plateaued on three successive samples, when plasma osmolality exceeded 300 mOsm/kg, or when body weight fell by 3 percent. Every subject then received an injection of desmopressin, a synthetic analog of ADH that acts on V2 receptors but not on the V1 receptors of vascular smooth muscle, and urine was collected for one further hour. The patients fell into three response patterns, designated Groups P, Q, and R (Table 1).\n\nIn the hour after the injection, urinary cyclic AMP excretion rose about threefold in the control group, in Group P, and in Group R, but did not change in Group Q. Over the following two weeks, subjects were asked to hold fluid intake near 2 L per day: daily urine output in Group R fell below 2 L, while output in Groups P and Q was unchanged by that instruction. Plasma glucose was normal in every subject, and no subject had glucose or protein in the urine.",
    "figure": "**Table 1. Water-deprivation test followed by desmopressin**\n\n| Group | Urine osmolality at start (mOsm/kg) | Urine osmolality at end of deprivation (mOsm/kg) | Plasma osmolality at end (mOsm/kg) | Plasma ADH at end (pg/mL) | Urine osmolality 1 h after desmopressin (mOsm/kg) |\n| --- | --- | --- | --- | --- | --- |\n| Control | 640 | 920 | 292 | 4.6 | 950 |\n| Group P | 110 | 160 | 306 | 0.4 | 480 |\n| Group Q | 120 | 170 | 305 | 11.2 | 185 |\n| Group R | 140 | 560 | 289 | 3.9 | 590 |",
    "questions": [
      {
        "question": "Which group's results point to inadequate secretion of ADH?",
        "options": [
          "Group Q, whose urine stayed dilute throughout the deprivation phase",
          "Group P, whose urine concentrated only after desmopressin was given",
          "Group R, whose plasma osmolality never rose above the normal range",
          "The control group, whose urine osmolality changed little after the injection"
        ],
        "correctAnswer": 1,
        "explanation": "Plasma ADH in Group P sat at 0.4 pg/mL even though plasma osmolality had climbed to 306, higher than the 292 that drove the control group's ADH to 4.6, so the hormone is not being supplied; the kidney itself is competent, since the injected analog raised urine osmolality from 160 to 480. The urine of Group Q was just as dilute, but its ADH was 11.2, the highest value in the study, and supplying more hormone moved urine osmolality only from 170 to 185, which locates that defect in the kidney rather than the pituitary. Plasma osmolality in Group R stayed within the normal range precisely because these subjects concentrated their urine to 560 on their own. The control group responded little to the injection because its own ADH had already brought urine osmolality close to the maximum.",
        "skill": "Data interpretation"
      },
      {
        "question": "Desmopressin raises urine osmolality in a responsive subject mainly by:",
        "options": [
          "raising aldosterone secretion from the adrenal cortex",
          "moving aquaporin-2 channels into collecting-duct apical membranes",
          "constricting the afferent arteriole to lower filtration",
          "adding aquaporin-1 channels to the proximal tubule"
        ],
        "correctAnswer": 1,
        "explanation": "Binding of the analog to the V2 receptor raises cyclic AMP, and the resulting kinase activity fuses vesicles carrying aquaporin-2 with the apical membrane, so the last part of the nephron becomes permeable to water and water leaves the lumen for the hypertonic medullary interstitium. Aldosterone is released in response to angiotensin II and to plasma potassium, and it moves sodium rather than inserting water channels, so it is not how this drug works. Lowering filtration would shrink urine volume without making urine more concentrated than plasma, and it would require the vascular V1 receptors that this analog deliberately spares. Aquaporin-1 sits permanently in the proximal tubule, where water follows reabsorbed solute isosmotically, so adding more of it cannot concentrate the final urine.",
        "skill": "Renal physiology"
      },
      {
        "question": "The urinary cyclic AMP measurements place the defect in Group Q at which point?",
        "options": [
          "In the neurons of the hypothalamus that synthesize ADH",
          "In the trafficking of aquaporin-2 vesicles to the apical membrane",
          "At the V2 receptor or its coupling to adenylyl cyclase",
          "In the solute gradient of the medullary interstitium"
        ],
        "correctAnswer": 2,
        "explanation": "Cyclic AMP is the second messenger the receptor generates through its G protein, so a dose of analog that tripled cyclic AMP excretion in three other groups and produced nothing here shows that the signal never got past the receptor and its coupling. A defect in delivering the water channel to the surface would leave that signaling intact, so cyclic AMP would still rise while the urine stayed dilute, which is not the pattern seen. The neurons that make the hormone become irrelevant once an analog is injected, and in any case this group's own ADH was the highest measured at 11.2 pg/mL. A washed-out medullary gradient would also spare cyclic AMP production, so it cannot account for a flat second-messenger response.",
        "skill": "Signal transduction"
      },
      {
        "question": "What is the reason for giving desmopressin only after the deprivation phase?",
        "options": [
          "The analog is inactive unless plasma osmolality exceeds 300 mOsm/kg",
          "An earlier injection would have suppressed the thirst response",
          "The posterior pituitary needs time to refill its hormone stores",
          "Deprivation must first show what the subject's own ADH can do"
        ],
        "correctAnswer": 3,
        "explanation": "The deprivation phase is the test of endogenous hormone: it raises plasma osmolality to a stimulus that should concentrate the urine, and only a subject who fails that test is informative when hormone is then supplied from outside, because the response to the injection is what separates a missing hormone from an unresponsive kidney. Injecting the long-acting analog first would supply hormone during the deprivation phase, so the test could no longer show what the subject's own ADH can do. The analog acts on the receptor whatever the plasma osmolality, so it is not inactive below a threshold. Thirst was not a readout in this protocol, since fluid was withheld from every subject. Nothing in the pathway calls for a waiting period to accumulate hormone, and Group P lacked adequate hormone secretion rather than a temporarily emptied store.",
        "skill": "Experimental design"
      },
      {
        "question": "Group R concentrated its urine to 560 mOsm/kg, below the control value, even though its plasma ADH was appropriate for its plasma osmolality. Which explanation fits best?",
        "options": [
          "Its collecting ducts carry no functional V2 receptors",
          "Its posterior pituitary released too little hormone",
          "A long history of high water intake had diluted the medullary gradient",
          "The hormone was broken down in the plasma before it could reach the kidney"
        ],
        "correctAnswer": 2,
        "explanation": "Concentrating urine takes both the hormone and a steep osmotic gradient in the medulla, and drinking far more water than the body needs washes urea and salt out of that interstitium, lowering the highest urine osmolality attainable even when signaling is normal. Everything else about this group says signaling is intact: cyclic AMP rose after the injection, and urine output fell below 2 L per day once fluid intake was held near 2 L. Missing V2 receptors would have blocked concentration both during deprivation and after the injection, yet urine reached 560 and then 590. Too little hormone is excluded by an ADH of 3.9 at a plasma osmolality of 289, close to the control value of 4.6 at a similar osmolality of 292. Breakdown of circulating hormone before it reached the kidney would not fit a measured plasma ADH of 3.9 pg/mL, and it would not explain why the injected analog raised urine osmolality only from 560 to 590 even though cyclic AMP rose threefold.",
        "skill": "Data interpretation"
      },
      {
        "question": "A patient with the defect seen in Group P begins nightly desmopressin but keeps drinking 8 L of water a day out of long habit. Which finding is most likely?",
        "options": [
          "Plasma osmolality climbs above 300 mOsm/kg",
          "Urine osmolality stays below 150 mOsm/kg overnight",
          "Plasma ADH rises well above the control value",
          "Plasma sodium falls below the normal range"
        ],
        "correctAnswer": 3,
        "explanation": "With water channels inserted every night, ingested water is reabsorbed instead of excreted, and the retained excess dilutes the body fluids, so the sodium concentration and the osmolality both drop; this is why patients taking the drug are told to drink to thirst rather than on schedule. Osmolality above 300 is the untreated picture, in which water is lost in dilute urine and the remaining body fluids concentrate. Dilute overnight urine is likewise the untreated pattern, and the whole point of the drug is that the urine now concentrates. Endogenous hormone will not climb either, because its release is driven by osmolality, which is falling, and this defect is a failure to release the hormone in the first place.",
        "skill": "Mechanism application"
      }
    ],
    "needsReview": false
  },
  {
    "id": "bb4-02",
    "section": "bio-biochem",
    "discipline": "genetics",
    "title": "Complementation Groups and Pathway Order in Arginine-Requiring Yeast",
    "passageText": "Cells of the yeast Saccharomyces cerevisiae build arginine from glutamate along a linear pathway in which ornithine is converted to citrulline and citrulline is converted, in further steps, to arginine. Haploid cells of two mating types, MATa and MAT-alpha, fuse to form a diploid, so a recessive mutation carried by one haploid can be tested in the same cell against a recessive mutation carried by another. The investigators set out to count how many genes their mutants represent and to order the steps those mutants block.\n\nHaploid cells were mutagenized with ultraviolet light, and six independent isolates, m1 through m6, were recovered that grew on medium containing arginine but not on minimal medium. Each mutation was moved into both mating types, so every pairwise diploid could be built; each isolate was also mated to a wild-type strain. Diploid formation was confirmed for every cross by selecting on complementary markers unrelated to arginine. Diploids were then plated on minimal medium, and growth was scored after three days (Table 1).\n\nThe isolates were then tested as haploids on minimal medium supplemented with a single compound, either ornithine, citrulline, or arginine, each at 1 mM (Table 2). A supplement enters the cells freely and can be used by the enzymes that act downstream of it.\n\nFinally, haploid cultures were grown with a trace of arginine, too little to support more than a few divisions, and the culture supernatants were analyzed for pathway intermediates. Supernatants of m1 and m4 held ornithine at 20 to 30 times the wild-type level and no detectable citrulline. Supernatants of m2 and m6 held citrulline at a similar excess. Supernatants of m3 held neither intermediate above the wild-type level.",
    "figure": "**Table 1. Growth of pairwise diploids on minimal medium (+ growth, - no growth)**\n\n| Diploid | m1 | m2 | m3 | m4 | m5 | m6 | wild type |\n| --- | --- | --- | --- | --- | --- | --- | --- |\n| m1 | - | + | + | - | - | + | + |\n| m2 | + | - | + | + | - | - | + |\n| m3 | + | + | - | + | - | + | + |\n| m4 | - | + | + | - | - | + | + |\n| m5 | - | - | - | - | - | - | - |\n| m6 | + | - | + | + | - | - | + |\n\n**Table 2. Growth of haploid isolates on minimal medium plus one supplement**\n\n| Isolate | No supplement | + ornithine | + citrulline | + arginine |\n| --- | --- | --- | --- | --- |\n| m1 | - | - | + | + |\n| m2 | - | - | - | + |\n| m3 | - | + | + | + |\n| m4 | - | - | + | + |\n| m5 | - | - | - | + |\n| m6 | - | - | - | + |\n| wild type | + | + | + | + |",
    "questions": [
      {
        "question": "Which pair of isolates carries recessive mutations in the same gene?",
        "options": [
          "m2 and m6",
          "m1 and m2",
          "m2 and m3",
          "m3 and m4"
        ],
        "correctAnswer": 0,
        "explanation": "The diploid built from m2 and m6 does not grow on minimal medium, so neither genome can cover what the other is missing, which is what two mutations in one gene look like; both are recessive, since each of these isolates mated to wild type gives a diploid that grows. Every other pair listed forms a diploid that does grow, so those two mutations lie in different genes and each genome supplies a working copy of the gene the other has lost. The supplement data agree, because m2 and m6 share one requirement pattern, growing only on arginine, while the isolates in each of the other pairs differ from each other in which supplements rescue them.",
        "skill": "Genetic logic"
      },
      {
        "question": "The diploid of m5 with a wild-type strain did not grow. What does this show about m5?",
        "options": [
          "Its mutation is dominant, so it cannot be assigned by complementation",
          "It carries mutations in all three of the arginine genes at the same time",
          "It has lost the ability to mate with the opposite mating type",
          "Its mutation lies in a gene unrelated to arginine synthesis"
        ],
        "correctAnswer": 0,
        "explanation": "A wild-type genome holds a working copy of every gene in the pathway, so a recessive defect is always covered and the diploid grows, as it did for the other five isolates. When adding that wild-type genome still leaves the cell unable to make arginine, the mutant allele is interfering even in the presence of a normal copy, which is what dominance means; a complementation test reads the failure of two genomes to cover each other, so it cannot place such an allele, which is why this isolate fails every pairing including the one with wild type. Mutations in all three genes at once would still be covered by a wild-type genome, and that diploid would grow. A strain unable to mate would form no diploid at all rather than a diploid that fails to grow, and diploid formation was confirmed for every cross. Because the haploid strictly requires arginine, the mutation must impair the cell's arginine supply; failing to grow with wild type speaks to dominance, not to which gene is affected.",
        "skill": "Genetic logic"
      },
      {
        "question": "The supplement results place the three complementation groups in which order along the pathway, from earliest block to latest?",
        "options": [
          "m3, then m1 and m4, then m2 and m6",
          "m1 and m4, then m3, then m2 and m6",
          "m2 and m6, then m1 and m4, then m3",
          "m3, then m2 and m6, then m1 and m4"
        ],
        "correctAnswer": 0,
        "explanation": "A block is bypassed by any compound that lies downstream of it, so the isolate rescued by the most supplements is blocked earliest: m3 grows on ornithine, citrulline, or arginine, which puts its missing step before ornithine. The m1 and m4 isolates cannot use ornithine but do use citrulline, placing their block at the conversion of ornithine to citrulline. The m2 and m6 isolates are rescued only by arginine, so their block lies after citrulline. The accumulation data agree: ornithine piles up in m1 and m4, which stall just past it, citrulline piles up in m2 and m6, and m3 accumulates neither because it never reaches ornithine. Any order beginning with m1 and m4 fails, because those isolates cannot grow on ornithine while m3 can. Any order placing m2 and m6 earlier than m1 and m4 fails, because rescue by the end product alone marks the most downstream block.",
        "skill": "Pathway ordering"
      },
      {
        "question": "Why does the diploid made from m1 and m2 grow on minimal medium?",
        "options": [
          "The two mutant proteins assemble into one enzyme that works",
          "Each genome carries a working copy of the gene the other has lost",
          "Recombination between the mutant sites restores a wild-type allele",
          "The diploid makes twice as much of each mutant enzyme as a haploid"
        ],
        "correctAnswer": 1,
        "explanation": "These two isolates are defective in different genes, so the diploid nucleus holds an intact copy of each: the m1 genome supplies the gene that m2 has lost while the m2 genome supplies the gene that m1 has lost, and both enzymes are made from those good copies. Mutant subunits cooperating to build one functional enzyme is a special case seen within a single gene, and it cannot explain growth here, where the two defects lie in different genes. Recombination between two mutant sites is rare and would rescue only occasional cells rather than produce the uniform growth of a plated diploid, and it is unnecessary when each gene already has a working copy. Doubling the dose of two nonfunctional enzymes cannot accomplish a step that neither enzyme can catalyze.",
        "skill": "Genetic logic"
      },
      {
        "question": "A haploid carrying both the m3 and the m2 mutation is grown with just enough arginine for a few divisions. Which compound is expected to accumulate in its supernatant?",
        "options": [
          "Citrulline, because the later block is still present",
          "Arginine, supplied in the medium and then stored",
          "Neither citrulline nor ornithine in any excess",
          "Ornithine, because the pathway stalls just past it"
        ],
        "correctAnswer": 2,
        "explanation": "The earlier block governs what can pile up. With the m3 step gone, the cell cannot make ornithine at all, so nothing reaches the later step either and the double mutant behaves like m3 alone, whose supernatants held neither intermediate above wild-type levels. Citrulline cannot accumulate because the precursor from which it is made is never produced. Ornithine cannot accumulate for the same reason, since the m3 block lies upstream of it; a strain stalled just past ornithine is one carrying m1 or m4. Arginine taken from the medium is used for protein synthesis or kept inside the cells rather than released into the supernatant, and the trace supplied was deliberately too small to leave a surplus.",
        "skill": "Pathway ordering"
      },
      {
        "question": "Why was every isolate also mated to a wild-type strain?",
        "options": [
          "To measure how often each mutation reverts to wild type",
          "To locate each mutation relative to its centromere",
          "To confirm that the isolates require arginine as haploids",
          "To establish that each mutation is recessive before pairing the isolates"
        ],
        "correctAnswer": 3,
        "explanation": "A complementation test is read as the failure of two genomes to cover each other's defect, and that reading holds only for recessive alleles; pairing each isolate with a wild-type genome is what shows the allele is covered, which five isolates were and one, m5, was not. Reversion frequency is measured by plating large numbers of haploid cells on minimal medium and counting colonies, not by building diploids. Distance from a centromere is obtained by following how markers segregate through meiosis, which these vegetative diploids were never taken through. The arginine requirement of the haploids was already established when the isolates were recovered, since failing to grow without arginine is the phenotype they were selected for.",
        "skill": "Experimental controls"
      }
    ],
    "needsReview": false
  },
  {
    "id": "bb4-03",
    "section": "bio-biochem",
    "discipline": "biochemistry",
    "title": "Two Blocks in Fatty-Acid Oxidation Tested by a Controlled Fast",
    "passageText": "Between meals, adipose triglyceride is hydrolyzed and the released fatty acids travel to the liver, where their oxidation supplies the ATP for gluconeogenesis and the acetyl-CoA from which ketone bodies such as beta-hydroxybutyrate are made. A long-chain fatty acid is first activated to its coenzyme A thioester at the outer mitochondrial membrane; carnitine palmitoyltransferase 1 (CPT-1), on the outer mitochondrial membrane, then transfers the acyl group to carnitine, the acylcarnitine is carried across the inner membrane in exchange for free carnitine, and the acyl group is returned to coenzyme A in the matrix. Medium-chain fatty acids of eight to ten carbons cross both membranes without using this shuttle. Each round of beta-oxidation begins with a dehydrogenation, and which acyl-CoA dehydrogenase catalyzes it depends on the length of the chain.\n\nInvestigators fasted healthy adults and two groups of patients with unexplained hypoglycemia for up to 20 hours, stopping any fast early if plasma glucose fell below 3.0 mmol/L. At the end of the fast, plasma glucose, beta-hydroxybutyrate, free fatty acids, free carnitine, and individual acylcarnitine esters were measured (Table 1). Genetic testing showed that one patient group had medium-chain acyl-CoA dehydrogenase (MCAD) deficiency and the other a deficiency of CPT-1.\n\nSkin fibroblasts from one patient of each group and from a control subject were then incubated with palmitate labeled with carbon-13, a 16-carbon fatty acid, or with octanoate labeled with carbon-13, an 8-carbon fatty acid. The labeled acetyl units released by oxidation were quantified and expressed as a percentage of the control value for that substrate (Table 2). Carnitine was supplied in the medium of every culture.",
    "figure": "**Table 1. Measurements at the end of the fast**\n\n| Group | Glucose (mmol/L) | Beta-hydroxybutyrate (mmol/L) | Free fatty acids (mmol/L) | Free carnitine (micromol/L) | Octanoylcarnitine, C8 (micromol/L) | Palmitoylcarnitine, C16 (micromol/L) |\n| --- | --- | --- | --- | --- | --- | --- |\n| Control | 4.2 | 2.6 | 1.3 | 38 | 0.10 | 0.09 |\n| MCAD deficiency | 2.9 | 0.4 | 1.9 | 14 | 2.80 | 0.11 |\n| CPT-1 deficiency | 2.8 | 0.3 | 2.1 | 62 | 0.08 | 0.04 |\n\n**Table 2. Oxidation of labeled substrates by cultured fibroblasts (% of control)**\n\n| Labeled substrate | Control | MCAD deficiency | CPT-1 deficiency |\n| --- | --- | --- | --- |\n| Palmitate (16 carbons) | 100 | 35 | 8 |\n| Octanoate (8 carbons) | 100 | 12 | 96 |",
    "questions": [
      {
        "question": "Both patient groups ended the fast with glucose near 2.8 mmol/L, beta-hydroxybutyrate below 0.5 mmol/L, and free fatty acids above the control value. Together these findings indicate that:",
        "options": [
          "fatty acids reached the liver but were not oxidized to support ketone synthesis",
          "adipose tissue failed to release fatty acids during the fast",
          "ketone bodies were taken up by tissues faster than usual",
          "the liver could not release glucose from its glycogen stores"
        ],
        "correctAnswer": 0,
        "explanation": "Lipolysis plainly worked, since free fatty acids ran higher than in the control group; what failed was the use of those fatty acids, and because ketone bodies are built from the acetyl-CoA that beta-oxidation yields, a block in that pathway leaves them low. Glucose falls because hepatic gluconeogenesis loses the ATP and acetyl-CoA that fatty-acid oxidation normally supplies, and because tissues burn glucose in place of fatty acids and ketones; low ketones together with high fatty acids is the signature of an oxidation defect rather than a delivery problem. A failure of lipolysis would have shown up as low free fatty acids. Unusually fast ketone uptake would not raise fatty acid levels and would be a strange coincidence in two unrelated disorders. A defect confined to glycogen release would leave fatty-acid oxidation and ketogenesis intact, so ketones would rise appropriately rather than stay low.",
        "skill": "Data interpretation"
      },
      {
        "question": "Which finding distinguishes CPT-1 deficiency from MCAD deficiency in these patients?",
        "options": [
          "Free carnitine above the control value with low acylcarnitine esters",
          "Beta-hydroxybutyrate that stays below 0.5 mmol/L at the end of the fast",
          "Plasma free fatty acids higher than the control value",
          "Plasma glucose low enough to stop the fast early"
        ],
        "correctAnswer": 0,
        "explanation": "When CPT-1 is missing, long-chain acyl groups are not joined to carnitine, so palmitoylcarnitine stays at 0.04; with no medium-chain block downstream, octanoylcarnitine does not build up either, at 0.08; and the unused free carnitine pool climbs to 62 against a control value of 38. Deficiency of the medium-chain dehydrogenase gives the opposite pattern: medium-chain acyl groups accumulate, are esterified onto carnitine, and octanoylcarnitine reaches 2.80 while the free pool falls to 14. Low beta-hydroxybutyrate, high free fatty acids, and hypoglycemia are shared by both groups, since both defects interrupt the same pathway, so none of those three measurements can tell the two disorders apart.",
        "skill": "Data interpretation"
      },
      {
        "question": "Fibroblasts from the patient with CPT-1 deficiency oxidized octanoate almost normally but oxidized palmitate poorly. The best explanation is that:",
        "options": [
          "octanoate is broken down in peroxisomes rather than in the mitochondrial matrix",
          "medium-chain fatty acids enter the matrix without the carnitine shuttle",
          "CPT-1 accepts only fatty acids taken up from the diet",
          "octanoate does not require dehydrogenation to be oxidized"
        ],
        "correctAnswer": 1,
        "explanation": "The shuttle exists because long acyl chains cannot cross the inner membrane on their own, whereas an 8-carbon fatty acid can; a defect at the entrance to the shuttle therefore leaves medium-chain oxidation untouched at 96 percent while 16-carbon substrate is stranded outside the matrix at 8 percent. Peroxisomes shorten very long chains and would not explain normal handling of a medium-chain substrate in a cell whose mitochondrial entry step is broken. The transferase acts on long-chain acyl-CoA regardless of whether the fatty acid came from the diet or from adipose stores, so dietary origin is irrelevant. Every fatty acid is dehydrogenated in each round of beta-oxidation, medium chains included, which is exactly why the other patient's cells oxidized octanoate to only 12 percent of control.",
        "skill": "Mechanism"
      },
      {
        "question": "MCAD-deficient fibroblasts oxidized palmitate to 35 percent of control but octanoate to only 12 percent. Why is palmitate oxidation partly preserved?",
        "options": [
          "Palmitoylcarnitine can enter the TCA cycle without being shortened",
          "The first rounds of oxidation use a dehydrogenase for longer chains",
          "Palmitate can be converted to glucose by gluconeogenesis instead",
          "Long-chain fatty acids are oxidized entirely within the cytosol"
        ],
        "correctAnswer": 1,
        "explanation": "Chain length decides which dehydrogenase acts, so a 16-carbon chain is first handled by the long-chain enzyme and several rounds proceed, releasing acetyl units, until the shortened chain reaches the medium-chain step where this defect lies and oxidation stalls; the yield is therefore partial rather than normal. A substrate that starts at 8 carbons meets the defective step immediately, which is why octanoate oxidation collapses to 12 percent. Acylcarnitine is not a substrate for the citric acid cycle, which takes acetyl-CoA. Even-chain fatty acids such as palmitate yield no net glucose in humans, because acetyl-CoA cannot be converted back to pyruvate and its two carbons are lost as carbon dioxide in the citric acid cycle. Beta-oxidation runs in the mitochondrial matrix rather than the cytosol, which is the whole reason the entry steps matter.",
        "skill": "Mechanism"
      },
      {
        "question": "Free carnitine was 14 micromol/L in the MCAD-deficient patients and 62 micromol/L in the CPT-1-deficient patients. The most likely reason for the low value is that:",
        "options": [
          "carnitine synthesis stops when plasma glucose is low",
          "carnitine is oxidized along with the fatty acyl chain",
          "carnitine is consumed and excreted as acyl esters",
          "dietary carnitine is not absorbed in this disorder"
        ],
        "correctAnswer": 2,
        "explanation": "Medium-chain acyl groups that cannot be oxidized build up as coenzyme A thioesters and are transferred onto carnitine; the resulting esters, such as the octanoylcarnitine measured at 2.80, are cleared in the urine, and each molecule that leaves carries a carnitine with it, so the free pool falls to 14. The other group makes the point by contrast: with the entry enzyme of the shuttle missing, long-chain esters barely form, no medium-chain block traps acyl groups, nothing is lost in the urine, and free carnitine rises to 62. Carnitine is a carrier rather than a fuel, and it is released in the matrix and returned for reuse instead of being oxidized with the chain it delivered. Synthesis of carnitine from lysine and methionine is not switched off by hypoglycemia. Intestinal absorption of carnitine is unaffected by a defect in a mitochondrial dehydrogenase.",
        "skill": "Mechanism"
      },
      {
        "question": "A medium-chain triglyceride supplement is proposed for these patients. Based on the results, it would most likely:",
        "options": [
          "lower plasma free fatty acids to control values in both groups",
          "raise ketone production in the MCAD-deficient patients only",
          "leave both groups unchanged, since each blocks beta-oxidation",
          "raise ketone production in the CPT-1-deficient patients only"
        ],
        "correctAnswer": 3,
        "explanation": "Medium-chain fatty acids skip the step that the CPT-1-deficient patients are missing, entering the matrix without the carnitine shuttle, and their cells oxidized octanoate at 96 percent of control, so such fats restore acetyl-CoA production and with it the synthesis of ketone bodies. The same supplement is the wrong choice in medium-chain dehydrogenase deficiency, where the broken step is the one that handles exactly these chain lengths; oxidation of octanoate there was 12 percent of control, and a medium-chain load would add to the acyl esters already accumulating. Predicting no effect in either group ignores the fibroblast data, which show the two blocks sit at different points in the pathway. Nothing in the results predicts a return of free fatty acids to control values, since those levels reflect the lipolysis that the fast itself drives, and in MCAD deficiency a medium-chain load would not even be oxidized.",
        "skill": "Mechanism application"
      }
    ],
    "needsReview": false
  },
]
