/**
 * MCAT bio-biochem passage bank — expansion wave 3 (cell/molecular/micro
 * topics added so the diagnostic's cell-mol-bio block can run 15 back-to-back
 * attempts without repeating a passage). Gated by the same checks as wave 2:
 * KaTeX compile, chart integrity, key balance, no letter-position references,
 * duplicate id/stem checks against the live banks.
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys are
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage } from '../types'

export const BIO_BIOCHEM_PASSAGES_3: MCATPassage[] = [
  {
    "id": "bb3-01",
    "section": "bio-biochem",
    "discipline": "molecular biology",
    "title": "A microRNA Represses Translation of a Growth-Factor mRNA",
    "passageText": "Gene GFB encodes a secreted growth factor. In cultured epithelial cells, GFB protein is abundant in a poorly differentiated line, EP-1, and scarce in a differentiated line, EP-2, even though the two lines contain similar amounts of GFB mRNA. Small-RNA sequencing showed that EP-2 cells express high levels of a 22-nucleotide microRNA, miR-19x, that EP-1 cells lack. The 1.2-kb GFB 3' untranslated region (3'UTR) contains two conserved 7-nucleotide matches to the miR-19x seed sequence.\n\nInvestigators first built luciferase reporters. In each construct the firefly luciferase coding sequence was followed by the wild-type GFB 3'UTR, by a 3'UTR in which three bases of each seed match were substituted, or by no 3'UTR at all. Constructs were transfected into both lines together with a constitutively expressed second luciferase gene, and the firefly signal was divided by that second signal before being scaled to the no-3'UTR construct in the same line. Parallel wells received either a synthetic miR-19x duplex (a mimic) or an antisense oligonucleotide complementary to miR-19x (an antagomir).\n\nSecond, endogenous GFB was measured in EP-1 cells 24 h after transfection of the mimic. GFB protein in cell lysate fell to 31 percent of control on western blots, with equal loading of a tubulin control, while GFB mRNA measured by reverse-transcription quantitative PCR fell only to 86 percent of control. The transcription rate, assayed by nuclear run-on, was unchanged.\n\nThird, cytoplasmic lysates were separated on sucrose density gradients and each fraction was assayed for GFB mRNA. In control EP-1 cells most GFB mRNA sedimented in the heavy fractions that contain mRNAs loaded with many ribosomes; after mimic transfection most GFB mRNA appeared in the light fractions containing free mRNA and single ribosomes. The $A_{254}$ profile of the 40S, 60S, and 80S peaks and of the polysomes was identical in the two samples, and the distribution of a control mRNA was unaffected.\n\nFinally, immunoprecipitation of Argonaute-2 recovered 14-fold more GFB mRNA from EP-2 lysate than a nonspecific antibody did; in EP-2 cells transfected with the seed-mutant reporter, recovery of that reporter mRNA was not above background.",
    "figure": "**Table 1. Reporter output, normalized to the no-3'UTR construct in the same cell line**\n\n| Reporter 3'UTR and treatment | EP-1 (no miR-19x) | EP-2 (high miR-19x) |\n| --- | --- | --- |\n| No 3'UTR | 1.00 | 1.00 |\n| Wild-type GFB 3'UTR | 0.95 | 0.29 |\n| Seed-mutant GFB 3'UTR | 0.97 | 0.94 |\n| Wild-type 3'UTR + miR-19x mimic | 0.33 | 0.26 |\n| Wild-type 3'UTR + miR-19x antagomir | 0.93 | 0.88 |\n| Seed-mutant 3'UTR + miR-19x mimic | 0.96 | 0.92 |",
    "questions": [
      {
        "question": "Which comparison most directly shows that repression of the reporter requires the two seed matches in the GFB 3'UTR?",
        "options": [
          "Wild-type and seed-mutant reporters in EP-2 cells",
          "Wild-type reporter in EP-2 cells with and without the antagomir",
          "The no-3'UTR reporter in EP-1 cells versus in EP-2 cells",
          "Wild-type reporter in EP-1 cells with and without the mimic"
        ],
        "correctAnswer": 0,
        "explanation": "The two reporters differ only in six bases spread across the two seed matches, and in the cell line that supplies the microRNA one is repressed to 0.29 while the other sits at 0.94, so those specific sequences are what the repression depends on. Relieving repression with the antagomir shows that the microRNA is required but not where it acts, since an antagomir would relieve repression through any site. The no-3'UTR construct is the normalizer and by definition reports 1.00 in both lines, so it can reveal nothing about the seed matches. Adding the mimic to cells that lack the microRNA shows the microRNA is sufficient, again without testing the sites, and that arm keeps the wild-type 3'UTR in both wells being compared.",
        "skill": "Experimental reasoning"
      },
      {
        "question": "After mimic transfection, GFB protein fell to 31 percent while GFB mRNA remained at 86 percent, the transcription rate was unchanged, and GFB mRNA shifted out of the polysome fractions. These results indicate that miR-19x acts mainly by:",
        "options": [
          "increasing proteasomal degradation of the GFB protein",
          "shutting down transcription of the GFB gene in the nucleus",
          "blocking translation of GFB mRNA molecules that are already present",
          "triggering rapid nuclease destruction of the GFB mRNA"
        ],
        "correctAnswer": 2,
        "explanation": "Protein output dropped by about two-thirds while the message was almost fully preserved, so the mRNA is present but is not being read; the sucrose gradient makes the same point by showing the mRNA leaving the ribosome-rich fractions. Destruction of the message is excluded because only 14 percent of it was lost, far too little to account for a 69 percent loss of protein. Transcriptional silencing is excluded directly by the unchanged nuclear run-on rate. Accelerated proteasomal turnover of the finished protein is a post-translational mechanism that a microRNA bound to the 3'UTR does not carry out, and it would not move the mRNA out of the polysome fractions.",
        "skill": "Gene regulation"
      },
      {
        "question": "The shift of GFB mRNA from heavy to light gradient fractions after mimic transfection is best explained by:",
        "options": [
          "degradation of the GFB mRNA into short fragments",
          "retention of the GFB mRNA inside the nucleus",
          "a general loss of ribosomal subunits from these cells",
          "fewer ribosomes loaded onto an intact GFB mRNA"
        ],
        "correctAnswer": 3,
        "explanation": "Position in a sucrose gradient reflects how many ribosomes a message carries, so a message that moves toward the light fractions is still there but is bound by fewer ribosomes, which is what translational repression looks like. Degradation would have removed the signal rather than relocating it, and the quantitative PCR result shows the message is nearly all still present. Nuclear retention cannot be read from this experiment because the gradients were loaded with cytoplasmic lysate, from which nuclear RNA is absent. A cell-wide loss of ribosomes is excluded by the identical absorbance profiles of ribosomal subunits and by the control mRNA, which did not move.",
        "skill": "Data interpretation"
      },
      {
        "question": "What is the purpose of the construct in which luciferase is followed by no 3'UTR at all?",
        "options": [
          "It measures how efficiently each cell line takes up plasmid DNA",
          "It sets a per-line baseline for unregulated reporter output",
          "It confirms that miR-19x is expressed in the EP-2 line",
          "It shows that firefly luciferase protein is stable for 24 hours"
        ],
        "correctAnswer": 1,
        "explanation": "Every reporter value is expressed relative to this construct in the same line, so it establishes what the promoter and coding sequence produce when no 3'UTR is attached; only against that baseline does a value of 0.29 mean that a 3'UTR is imposing repression. Uptake of plasmid DNA is controlled by the second, constitutively expressed luciferase gene co-transfected into every well. Expression of the microRNA itself was established by small-RNA sequencing, which no reporter construct could substitute for. Nothing about deleting a 3'UTR tests how long the luciferase protein survives, and the assay reads steady-state signal rather than protein half-life.",
        "skill": "Experimental controls"
      },
      {
        "question": "A tumor carries point mutations that disrupt both miR-19x seed matches in the GFB 3'UTR while leaving the coding sequence unchanged. Compared with normal tissue expressing miR-19x, the tumor cells would most likely show:",
        "options": [
          "more GFB protein, with GFB mRNA levels little changed",
          "less GFB protein and a proportional drop in GFB mRNA",
          "no change, because the 3'UTR is never translated into protein",
          "loss of GFB protein and buildup of a truncated version"
        ],
        "correctAnswer": 0,
        "explanation": "Those matches are the sequences that recruit the repressive complex, so destroying them frees the message to be translated; protein therefore rises, and the message, which was never being appreciably degraded, changes little. This is the endogenous version of the seed-mutant reporter, which read 0.94 in the microRNA-rich line instead of 0.29. Less protein would require gaining repression rather than losing it. The fact that a 3'UTR is not translated is beside the point, because regulatory elements act as RNA sequence, which is exactly how these sites work. A truncated protein would require a change in the reading frame or the stop codon, and the coding sequence is untouched.",
        "skill": "Mechanism application"
      }
    ],
    "needsReview": false
  },
  {
    "id": "bb3-02",
    "section": "bio-biochem",
    "discipline": "cell biology",
    "title": "Two Arms of the Unfolded Protein Response to ER Stress",
    "passageText": "Secreted and membrane proteins fold in the lumen of the rough endoplasmic reticulum (ER), assisted by chaperones such as BiP and by N-linked glycosylation. When unfolded proteins accumulate, three ER transmembrane sensors, PERK, IRE1, and ATF6, trigger the unfolded protein response (UPR), which both lowers the load of new protein entering the ER and raises the organelle's folding capacity. Investigators tested the hypothesis that the translational arm of the response buys time for the transcriptional arm.\n\nCultured fibroblasts were treated with tunicamycin, which blocks the first step of N-linked glycosylation so that newly made glycoproteins cannot be glycosylated and misfold. At intervals the investigators measured the global rate of protein synthesis with a 15-minute pulse of $^{35}\\text{S}$-methionine, and probed lysates for eIF2-alpha phosphorylated on serine 51, for the spliced form of XBP1 mRNA, and for BiP protein.\n\nExperiment 1 compared wild-type fibroblasts with an isogenic line lacking PERK. In wild-type cells, phosphorylated eIF2-alpha appeared within 30 min and peaked by 1 h, and protein synthesis fell steeply before recovering partway by 8 h. The PERK-null cells showed no increase in phosphorylated eIF2-alpha and no substantial fall in synthesis (Figure 1).\n\nExperiment 2 followed the IRE1 arm. IRE1 is an ER-resident endoribonuclease that cuts XBP1 mRNA outside the nucleus at two sites, after which the ligase RtcB joins the ends, removing a 26-nucleotide intron; the resulting shift in reading frame yields a potent transcription factor. Spliced XBP1 mRNA was undetectable at 0 h and reached 55 percent of total XBP1 mRNA by 2 h in both lines, and BiP protein rose roughly 4-fold by 8 h in both lines. Chaperone genes such as the one encoding BiP are driven by ATF6 and by the spliced XBP1 factor together, so each contributes part of the induction.\n\nExperiment 3 addressed the source of the stress. Cells pretreated for 20 min with cycloheximide, which blocks elongation on ribosomes, before tunicamycin showed little phosphorylated eIF2-alpha and little XBP1 splicing. Thapsigargin, which inhibits the ER $\\text{Ca}^{2+}$-ATPase and empties ER calcium stores, produced the same UPR markers as tunicamycin. Under prolonged tunicamycin, both the PERK-null cells and cells expressing an eIF2-alpha variant with serine 51 replaced by alanine accumulated more detergent-insoluble protein and lost viability faster than wild-type cells.",
    "chart": {
      "title": "Figure 1. Global protein synthesis after addition of tunicamycin",
      "kind": "line",
      "xLabel": "Time after tunicamycin",
      "xUnit": "h",
      "yLabel": "Protein synthesis",
      "yUnit": "% of untreated",
      "seriesLabel": "Wild-type",
      "xValues": [0, 0.5, 1, 2, 4, 8],
      "yValues": [100, 62, 30, 28, 45, 76],
      "comparisonSeries": [
        { "label": "PERK-null", "yValues": [100, 98, 96, 97, 94, 92] }
      ],
      "annotations": [
        { "xIndex": 2, "label": "peak eIF2-alpha phosphorylation in wild-type" }
      ]
    },
    "questions": [
      {
        "question": "Phosphorylation of eIF2-alpha on serine 51 lowers the rate of translation initiation. How does that help a cell whose ER is stressed?",
        "options": [
          "It refolds the proteins that have already misfolded in the lumen",
          "It slows the arrival of new polypeptides that need folding",
          "It exports misfolded proteins from the ER to the cell surface",
          "It restores the calcium that is stored inside the ER lumen"
        ],
        "correctAnswer": 1,
        "explanation": "Phosphorylated eIF2-alpha sequesters the exchange factor eIF2B, so the initiator methionyl-tRNA is delivered to fewer ribosomes and fewer nascent secretory proteins are translocated into the ER; the chaperones already there can then work through the backlog instead of falling further behind. Slowing synthesis cannot itself refold anything, which is the job of the chaperones induced by the transcriptional arm. Misfolded proteins are retained in the ER and retrotranslocated for proteasomal degradation rather than shipped to the surface. Refilling the calcium stores is the job of the ER $\\text{Ca}^{2+}$-ATPase that thapsigargin blocks, and slowing translation does nothing to pump calcium back into the lumen.",
        "skill": "Translational control"
      },
      {
        "question": "In PERK-null cells, protein synthesis did not fall, yet spliced XBP1 mRNA and BiP protein rose on the wild-type schedule. These results indicate that:",
        "options": [
          "PERK must fire first for the other sensors to act",
          "IRE1 acts downstream of PERK in a single linear pathway",
          "translational attenuation is needed for XBP1 to be spliced",
          "the two arms respond separately to the same unfolded protein load"
        ],
        "correctAnswer": 3,
        "explanation": "Cells with no PERK signaling at all still spliced XBP1 to 55 percent and still induced BiP 4-fold on the wild-type schedule, so the IRE1 arm neither waits for PERK nor depends on anything PERK does; both sensors read the same accumulation of unfolded protein independently. Requiring PERK to fire first is excluded by exactly that result. Placing IRE1 downstream of PERK in one linear chain fails for the same reason, because removing an upstream step would have blocked the step below it, and splicing was untouched. Making splicing depend on translational attenuation is contradicted by this line as well, which attenuated nothing, its synthesis staying near 95 percent throughout, yet spliced XBP1 on schedule.",
        "skill": "Data interpretation"
      },
      {
        "question": "Which statement about the processing of XBP1 mRNA is best supported by the passage?",
        "options": [
          "The spliceosome removes the intron during nuclear pre-mRNA processing",
          "IRE1 cuts the mRNA, and the new reading frame alters the protein",
          "A protease clips the XBP1 protein to release an active fragment",
          "Reverse transcription of XBP1 mRNA yields the active regulator"
        ],
        "correctAnswer": 1,
        "explanation": "IRE1 is described as an endoribonuclease, and it cuts the mRNA itself, outside the nucleus; once a ligase rejoins the ends the downstream sequence sits in a different frame, so a different carboxy terminus is translated and the product becomes a potent transcription factor. The spliceosome acts on pre-mRNA in the nucleus at consensus splice sites and is not the enzyme here, which is why this event is often called unconventional splicing. Proteolytic release of an active fragment describes the ATF6 sensor, which is cleaved after transport to the Golgi, not the handling of this mRNA. No cell makes a DNA copy of an mRNA in this pathway, so reverse transcription has no role.",
        "skill": "RNA processing"
      },
      {
        "question": "Pretreating cells with cycloheximide before tunicamycin sharply reduced both eIF2-alpha phosphorylation and XBP1 splicing. This result best supports which conclusion?",
        "options": [
          "Tunicamycin works by inhibiting the ribosome, just as cycloheximide does",
          "Cycloheximide binds and directly inhibits the ER sensor PERK",
          "The stress arises from proteins being made and entering the ER",
          "Blocking elongation prevents transcription of the XBP1 gene"
        ],
        "correctAnswer": 2,
        "explanation": "Tunicamycin is harmless to an ER that receives nothing: the damage comes from ribosomes continuing to deliver nascent glycoproteins that can no longer be glycosylated and therefore misfold. Halting elongation removes that substrate, the lumen never fills with unfolded protein, and neither sensor is engaged. Tunicamycin acts on the first step of N-linked glycosylation rather than on the ribosome, so the two drugs do not share a target. Cycloheximide binds the large ribosomal subunit and blocks elongation; it is not a sensor inhibitor, and a direct block of PERK would not also silence the IRE1 arm. XBP1 mRNA is already present before stress, and its conversion to the spliced form is an RNA cleavage step, so the low spliced signal reflects an unengaged sensor rather than a transcription failure.",
        "skill": "Experimental controls"
      },
      {
        "question": "Suppose cells express an IRE1 variant that senses stress and dimerizes normally but has no endoribonuclease activity. Under prolonged tunicamycin these cells would most likely show:",
        "options": [
          "attenuated translation and a blunted rise in BiP",
          "attenuated translation and a fully normal rise in BiP",
          "no attenuation of translation and no XBP1 splicing",
          "spliced XBP1 mRNA without any induction of BiP protein"
        ],
        "correctAnswer": 0,
        "explanation": "The nuclease activity is what converts XBP1 mRNA into the form encoding the active transcription factor, so the XBP1-driven share of the chaperone program is lost while PERK, untouched, still slows translation. BiP does not disappear, because ATF6 remains intact and is the main driver of BiP induction, but without the XBP1 contribution the rise is blunted. A fully normal rise in BiP is not expected: the passage states that ATF6 and spliced XBP1 each contribute part of BiP induction, so removing the XBP1 share leaves only a partial rise. Predicting no attenuation confuses the arms, since attenuation depends on PERK, which this cell still has. Spliced XBP1 mRNA cannot appear at all if the enzyme that makes the cut is catalytically dead.",
        "skill": "Mechanism application"
      }
    ],
    "needsReview": false
  },
  {
    "id": "bb3-03",
    "section": "bio-biochem",
    "discipline": "cell biology",
    "title": "Caspase Activation in the Intrinsic Apoptotic Pathway",
    "passageText": "Apoptosis is executed by caspases, cysteine proteases synthesized as inactive zymogens that cleave their substrates after aspartate residues. In the intrinsic pathway, an internal insult drives the pro-apoptotic proteins BAX and BAK to permeabilize the mitochondrial outer membrane. Cytochrome c escapes into the cytosol and binds the adaptor APAF-1, forming the apoptosome, which recruits and activates procaspase-9; caspase-9 then cleaves procaspase-3 into active caspase-3. Anti-apoptotic relatives such as Bcl-2 oppose BAX and BAK at the mitochondrial surface.\n\nInvestigators treated a human carcinoma line with staurosporine and sampled the cultures over 12 h. Caspase-3-like activity was assayed by adding lysate to the peptide DEVD coupled to a fluorophore that fluoresces only after cleavage, and is reported relative to untreated lysate. Cytosolic cytochrome c was measured by immunoblotting a digitonin-extracted cytosolic fraction, which was also blotted for cytochrome c oxidase subunit IV, a protein of the mitochondrial inner membrane. Plasma-membrane integrity was scored by dye exclusion.\n\nFour cultures were compared: wild-type cells; cells in which both the BAX and BAK genes had been deleted; cells overexpressing Bcl-2; and wild-type cells treated with zVAD-fmk, a broad-spectrum (pan-caspase) inhibitor that reacts covalently with the active-site cysteine of caspases (Figure 1).\n\nCytosolic cytochrome c was first detected at 2 h in wild-type cells, before DEVD-cleaving activity rose above background at 3 h. Cytochrome c oxidase subunit IV was never detected in any cytosolic fraction. In zVAD-fmk-treated cells, cytosolic cytochrome c appeared on the same schedule as in untreated wild-type cells, yet DEVD cleavage never rose and the cells excluded dye for the full 12 h. Cells lacking BAX and BAK released no cytochrome c and showed no appreciable DEVD cleavage.\n\nIn a final experiment, a dialyzed, nucleotide-depleted cytosolic extract from untreated cells was incubated with no mitochondria present. Adding purified cytochrome c together with dATP generated strong DEVD-cleaving activity within 30 min. Adding cytochrome c alone, or cytochrome c plus dATP to an extract immunodepleted of procaspase-9, generated none.",
    "chart": {
      "title": "Figure 1. Caspase-3-like (DEVD-cleaving) activity after staurosporine treatment",
      "kind": "line",
      "xLabel": "Time after staurosporine",
      "xUnit": "h",
      "yLabel": "DEVD-cleaving activity",
      "yUnit": "relative to untreated",
      "seriesLabel": "Wild-type",
      "xValues": [0, 2, 4, 6, 8, 12],
      "yValues": [1, 1, 9, 22, 28, 30],
      "comparisonSeries": [
        { "label": "BAX and BAK double knockout", "yValues": [1, 1, 1, 1, 1.1, 1.1] },
        { "label": "Bcl-2 overexpressing", "yValues": [1, 1, 1.3, 1.8, 2.2, 2.5] },
        { "label": "Wild-type + zVAD-fmk", "yValues": [1, 1, 1, 1, 1.1, 1.1] }
      ],
      "annotations": [
        { "xIndex": 1, "label": "cytochrome c first detected in wild-type cytosol" }
      ]
    },
    "questions": [
      {
        "question": "In zVAD-fmk-treated cells, cytochrome c reached the cytosol on schedule while DEVD cleavage never rose. This pattern places caspase activity:",
        "options": [
          "upstream of the permeabilization of the mitochondrial outer membrane",
          "downstream of the permeabilization of the mitochondrial outer membrane",
          "in a pathway entirely separate from cytochrome c release",
          "at the same step as the release of cytochrome c itself"
        ],
        "correctAnswer": 1,
        "explanation": "Inactivating every caspase in the cell left release untouched, so release does not require protease activity; the 2 h and 3 h timings point the same way, with the signal arriving before the proteases respond. Placing the caspases upstream predicts that blocking them would have prevented release, which is precisely what did not happen. A separate pathway is ruled out by the cells lacking BAX and BAK, where no release meant no DEVD cleavage either, so the two events are linked. Two events occurring at one step could not be pulled apart by an inhibitor that abolishes one and spares the other.",
        "skill": "Pathway ordering"
      },
      {
        "question": "How does overexpression of Bcl-2 blunt the rise in DEVD-cleaving activity?",
        "options": [
          "By binding the active site of caspase-3 and blocking catalysis",
          "By opposing BAX and BAK so cytochrome c stays in mitochondria",
          "By degrading the DEVD peptide before it can be cleaved",
          "By preventing transcription of the genes encoding procaspase-9 and APAF-1"
        ],
        "correctAnswer": 1,
        "explanation": "Bcl-2 family members meet at the mitochondrial outer membrane, where the anti-apoptotic members restrain BAX and BAK and keep the membrane intact; with little cytochrome c reaching the cytosol, few apoptosomes form and activity rises only about 2.5-fold instead of 30-fold. Bcl-2 is not a protease inhibitor and does not occupy a caspase active site, which is the role zVAD-fmk plays in this study. Nothing consumes the reporter peptide; the assay measures its cleavage, and a lysate that fails to cleave it lacks active protease. Bcl-2 is not a transcription factor, and the cell-free experiment shows activation runs on proteins already present rather than on newly transcribed ones.",
        "skill": "Apoptosis regulation"
      },
      {
        "question": "Why was the cytosolic fraction also blotted for cytochrome c oxidase subunit IV?",
        "options": [
          "To confirm that cytochrome c oxidase activity is required for caspase activation",
          "To measure how much oxygen the mitochondria were consuming",
          "To normalize DEVD cleavage to total mitochondrial protein",
          "To show that mitochondria were not simply ruptured during the prep"
        ],
        "correctAnswer": 3,
        "explanation": "An abundant inner-membrane protein should stay with the organelle during a gentle digitonin extraction, so its absence from every cytosolic fraction rules out gross mitochondrial contamination or wholesale rupture of the organelles, either of which would dump cytochrome c into the fraction for purely technical reasons. It cannot exclude damage confined to the outer membrane, which would free cytochrome c while leaving this protein inside; the control for that artifact is the BAX and BAK double knockout, whose cytosol contained no cytochrome c despite identical handling. The blot reports nothing about respiration, which was never assayed here, and it cannot serve as a loading normalizer for a cytosolic sample precisely because the expected result is no signal. The pathway also uses cytochrome c as a signal in the cytosol rather than the electron-transfer activity of the oxidase complex.",
        "skill": "Experimental controls"
      },
      {
        "question": "In the cell-free extract, cytochrome c plus dATP produced DEVD-cleaving activity, but neither cytochrome c alone nor a procaspase-9-depleted extract did. The best interpretation is that:",
        "options": [
          "cytochrome c cleaves the DEVD substrate directly once it is in the cytosol",
          "dATP supplies the energy that caspase-3 needs for proteolysis",
          "cytochrome c and a bound nucleotide let APAF-1 activate procaspase-9",
          "procaspase-9 must be transcribed anew before any activity appears"
        ],
        "correctAnswer": 2,
        "explanation": "Assembly of the apoptosome requires both cytochrome c and nucleotide binding to APAF-1, and the assembled platform then recruits procaspase-9; active caspase-9 then cleaves procaspase-3, so removing procaspase-9 breaks the chain even though the trigger is present. Because the extract was dialyzed to strip its own nucleotides, the dATP had to be supplied, which is why cytochrome c by itself was not enough. Cytochrome c is an electron carrier with no proteolytic activity, so it cannot cleave the reporter peptide itself. The nucleotide is a cofactor for assembly rather than fuel, since hydrolysis of a peptide bond by a caspase costs no ATP. New transcription is impossible in a cytosolic extract with no nucleus, yet activity appeared within 30 min.",
        "skill": "Apoptosome mechanism"
      },
      {
        "question": "Wild-type cells are engineered so that their only caspase-9 has its active-site cysteine replaced by alanine. After staurosporine treatment these cells would most likely show:",
        "options": [
          "cytochrome c release with little DEVD-cleaving activity",
          "no cytochrome c release and no DEVD-cleaving activity",
          "DEVD cleavage on the normal schedule but no cell death",
          "prompt swelling and rupture of the plasma membrane, spilling contents"
        ],
        "correctAnswer": 0,
        "explanation": "The substitution removes the catalytic nucleophile of caspase-9. Release is governed by BAX and BAK, which this change leaves untouched, so cytochrome c still escapes and the apoptosome still assembles; what fails is the next step, because procaspase-3 is never cleaved and the reporter stays dark. This is the same dissociation seen with zVAD-fmk, which also spared release while abolishing cleavage. Losing release would require a defect at the mitochondrion, one step above caspase-9. Normal DEVD cleavage cannot occur without a caspase-9 able to process procaspase-3. Prompt lysis describes necrosis, whereas apoptotic cells with caspases blocked keep their membranes intact, as the dye-exclusion result shows.",
        "skill": "Mechanism application"
      }
    ],
    "needsReview": false
  },
  {
    "id": "bb3-04",
    "section": "bio-biochem",
    "discipline": "microbiology",
    "title": "Quorum Sensing Controls a Secreted Bacterial Protease",
    "passageText": "Many bacteria tie gene expression to population density by secreting a diffusible signal and responding once it accumulates, a system called quorum sensing. In the marine bacterium studied here, a LuxI-type synthase makes an acyl-homoserine lactone (AHL) that crosses the cell envelope freely. A LuxR-type receptor binds AHL, and the receptor-AHL complex activates transcription of a secreted protease gene and of the synthase gene itself.\n\nInvestigators grew the wild type in batch culture and at intervals measured $\\text{OD}_{600}$ and protease activity in cell-free supernatant, expressing activity per $10^8$ cells so that a rise reflects more enzyme per cell rather than more cells. Every strain also carried a reporter fused to the protease promoter, reading out new transcription rather than accumulated enzyme. Protease activity per cell was negligible below an $\\text{OD}_{600}$ of about 0.2 and then climbed steeply (Figure 1).\n\nExperiment 1 compared three strains across the density range: the wild type; a luxI deletion mutant, which cannot make AHL but can respond to it; and a luxR deletion mutant. The luxI mutant made almost no protease at any density, but produced the amounts made by dense wild-type cultures when 1 micromolar synthetic AHL was added to a dilute culture, and added AHL raised protease output progressively from 1 nanomolar to 1 micromolar. The luxR mutant made no protease at any density and did not respond to added AHL.\n\nExperiment 2 asked whether contact between cells is required. Supernatant from a dense wild-type culture was filtered free of cells and added to a dilute luxI mutant culture, either boiled briefly at neutral pH or left unboiled. Because the filtrate already carries protease from the dense culture, induction was scored as reporter output in the recipient cells, with a cell-free filtrate blank subtracted. Both boiled and unboiled filtrate induced the reporter, and filtrate from a dilute wild-type culture did not.\n\nExperiment 3 addressed alternative explanations for the density dependence. Cells from a dense wild-type culture were pelleted, washed, and resuspended in fresh medium at one-hundredth of their original density; reporter output fell to baseline and rose again only as density rebuilt. In a separate test at constant density, purified lactonase, which hydrolyzes the AHL ring, was added to a dense wild-type culture that was then washed free of secreted protease; within an hour both reporter output and newly secreted protease fell to near baseline, with no change in growth rate or final yield.",
    "chart": {
      "title": "Figure 1. Protease activity per cell as a function of culture density",
      "kind": "line",
      "xLabel": "Culture density $(\\text{OD}_{600})$",
      "yLabel": "Protease activity",
      "yUnit": "units per $10^8$ cells",
      "seriesLabel": "Wild type",
      "xValues": [0.05, 0.1, 0.2, 0.4, 0.8, 1.6],
      "yValues": [2, 3, 9, 48, 120, 140],
      "comparisonSeries": [
        { "label": "luxI deletion mutant", "yValues": [2, 2, 2, 3, 3, 4] },
        { "label": "luxI mutant + 1 micromolar AHL", "yValues": [118, 124, 130, 135, 138, 142] },
        { "label": "luxR deletion mutant", "yValues": [1, 1, 1, 2, 2, 2] }
      ],
      "annotations": [
        { "xIndex": 2, "label": "activating AHL concentration reached" }
      ]
    },
    "questions": [
      {
        "question": "Protease activity per cell rises sharply above an $\\text{OD}_{600}$ of 0.2 in the wild type. Which explanation is best supported by the data?",
        "options": [
          "Nutrient depletion at higher density switches the protease gene on",
          "Protease accumulates in the supernatant simply because cells divide",
          "Cells at high density come into physical contact and signal directly",
          "Secreted AHL accumulates in the medium until it reaches an activating level"
        ],
        "correctAnswer": 3,
        "explanation": "Each cell makes the signal at a low rate and the signal escapes freely, so its concentration in the medium tracks cell number; once enough has accumulated to load the receptor, the protease gene turns on. Two arms separate the signal from the nutrient state: 1 micromolar synthetic AHL fully induced a dilute culture growing in fresh, nutrient-rich medium, which a depletion trigger cannot explain, and lactonase silenced a dense culture whose nutrient supply was untouched. Because activity is normalized per $10^8$ cells, a rise cannot come from having more cells present. Physical contact is excluded because cell-free filtrate from a dense culture induces the reporter in dilute cells.",
        "skill": "Data interpretation"
      },
      {
        "question": "Boiled filtrate from a dense culture induced the protease promoter about as strongly as unboiled filtrate did. This result argues that the inducing signal is:",
        "options": [
          "a small heat-stable molecule rather than a protein",
          "a protein that refolds spontaneously after being boiled",
          "an intact bacteriophage released by the dense culture",
          "the LuxR protein exported from the dense culture cells"
        ],
        "correctAnswer": 0,
        "explanation": "Boiling denatures proteins and inactivates phage particles, so an inducing activity that survives a brief boil at neutral pH is neither; an acyl-homoserine lactone is exactly the kind of small heat-stable molecule that passes through both the filter and that treatment. Scoring induction as promoter output with a cell-free filtrate blank subtracted matters here, because it means the comparison reflects new transcription in the recipient cells rather than protease carried over in the filtrate. Assuming a protein that reliably refolds after boiling is a way of preserving a hypothesis the experiment was designed to test, and the dose response to purified synthetic AHL independently identifies the signal as a small molecule. A phage would also have to infect the recipient cells to change their gene expression, which the synthetic-AHL result shows is unnecessary. The receptor is intracellular rather than the secreted signal, as shown by the luxR mutant's failure to respond to signal supplied from outside.",
        "skill": "Experimental reasoning"
      },
      {
        "question": "The luxR mutant made no protease even when AHL was supplied. This result identifies LuxR as:",
        "options": [
          "the enzyme that synthesizes the AHL signal molecule",
          "a channel that carries AHL across the cell envelope",
          "the receptor through which AHL activates the gene",
          "a protease that destroys the AHL signal in the medium"
        ],
        "correctAnswer": 2,
        "explanation": "A strain that cannot respond to the signal even when the signal is handed to it is missing the machinery that reads the signal; LuxR binds AHL and the complex activates transcription at the protease promoter. Making the signal is the job of LuxI, and its mutant differs precisely in being rescued by added AHL. A transport channel is unnecessary because AHL crosses the envelope freely, and losing a channel would not prevent a response to a 1 micromolar external dose. Destroying the signal is the opposite of what is lost here, and that role is filled experimentally by the added lactonase.",
        "skill": "Genetic logic"
      },
      {
        "question": "What does resuspending a washed, dense wild-type culture at one-hundredth density control for?",
        "options": [
          "Whether LuxR protein remains present in the cells after dilution",
          "Whether the secreted protease is stable in cell-free supernatant",
          "Whether AHL can cross the bacterial cell envelope freely",
          "Whether density, rather than culture age, is the trigger"
        ],
        "correctAnswer": 3,
        "explanation": "A dense culture differs from a dilute one in more than cell number: its cells are older and have divided more times. Washing those same cells and resuspending them at one-hundredth density keeps the cells and their history while dropping the signal concentration, and reporter output falls to baseline, so what the gene tracks is current density rather than how long the culture has been growing. Because the cells also move into fresh medium, this arm shifts density and nutrient state together and cannot by itself separate the two; that job falls to the lactonase arm, which alters neither the medium nor the density. Enzyme half-life is not what this manipulation tests, since the readout is the promoter's output rather than protein that has already accumulated. Whether the receptor is still present is answered by the cells themselves, which regain protease as they regrow.",
        "skill": "Experimental controls"
      },
      {
        "question": "An investigator wants to shut off this organism's secreted protease without killing the bacteria or slowing their growth. Based on the passage, the most promising approach is to:",
        "options": [
          "add an enzyme that destroys the AHL signal in the medium",
          "select for mutants that grow faster at low density",
          "supply synthetic AHL to the infected tissue continuously",
          "block the ribosome so that no new protease is translated"
        ],
        "correctAnswer": 0,
        "explanation": "The lactonase arm did exactly this: hydrolyzing the signal at constant density dropped both promoter output and newly secreted protease to near baseline within an hour while leaving growth rate and final yield untouched, so the secreted factor is silenced and the cell is left alive. Supplying more AHL would activate the circuit rather than disarm it, since the receptor responds to AHL over the whole range tested. Blocking the ribosome halts synthesis of every protein and therefore inhibits growth, which the question rules out. Faster growth at low density leaves the circuit intact and, by reaching the activating concentration sooner, would turn the protease on earlier rather than later.",
        "skill": "Mechanism application"
      }
    ],
    "needsReview": false
  },
  {
    "id": "bb3-05",
    "section": "bio-biochem",
    "discipline": "cell biology",
    "title": "Microtubule Drugs and the Spindle Assembly Checkpoint",
    "passageText": "During mitosis a bipolar spindle of dynamic microtubules captures sister chromatids at their kinetochores and pulls them apart. Individual microtubules grow and shrink continuously, a behavior called dynamic instability, and that turnover is how kinetochores are searched out and attached. Until every kinetochore is attached and under tension, the spindle assembly checkpoint holds the cell in mitosis: proteins including MAD2 are recruited to unattached kinetochores and assemble an inhibitor of CDC20, the activating subunit of the anaphase-promoting complex (APC/C). Because the APC/C is the ubiquitin ligase that marks securin and cyclin B for destruction by the proteasome, checkpoint signaling keeps those substrates intact and CDK1 active, and anaphase does not begin.\n\nInvestigators treated a synchronized human cell line with nocodazole, which promotes microtubule disassembly, or with paclitaxel, which binds along the microtubule wall and stabilizes it. Concentrations were chosen so that each drug produced a comparable mitotic block. After 12 h the cultures were fixed and scored for mitotic index, the percentage of cells with condensed chromosomes and no intact nuclear envelope, and stained for tubulin. Nocodazole-treated cells had no recognizable spindle and scattered chromosomes; paclitaxel-treated cells had dense, short microtubule bundles and extra poles, with chromosomes clustered rather than aligned at a metaphase plate.\n\nThe fraction of total tubulin in polymer form was 8 percent with nocodazole, 91 percent with paclitaxel, and 47 percent in untreated mitotic cells. Immunoblots of cells arrested by either drug showed high cyclin B, and CDK1 activity remained high.\n\nIn a parallel arm, MAD2 was depleted by RNA interference before either drug was added (Figure 1). Depleted cultures did not accumulate in mitosis; time-lapse imaging showed that they entered mitosis and exited within about 30 min despite the drug, and cyclin B fell on schedule. Two days later these cultures contained many cells with micronuclei and with chromosome numbers that differed from the parental karyotype. A control small interfering RNA matching no cellular transcript changed none of these measurements.",
    "chart": {
      "title": "Figure 1. Mitotic index after 12 h of treatment",
      "kind": "bar",
      "xLabel": "Condition",
      "yLabel": "Mitotic index",
      "yUnit": "%",
      "seriesLabel": "Cells in mitosis at 12 h",
      "xValues": [
        "Untreated",
        "Nocodazole",
        "Paclitaxel",
        "MAD2 RNAi alone",
        "MAD2 RNAi + nocodazole",
        "MAD2 RNAi + paclitaxel"
      ],
      "yValues": [4, 62, 58, 3, 7, 8]
    },
    "questions": [
      {
        "question": "How can nocodazole and paclitaxel, which move microtubule polymer mass in opposite directions, both arrest cells in mitosis?",
        "options": [
          "Both drugs increase the fraction of tubulin present as free dimers",
          "Both drugs prevent chromosomes from condensing in the first place",
          "Both drugs inactivate CDK1, so cells cannot exit from mitosis",
          "Both disrupt the dynamic microtubule behavior that attachment requires"
        ],
        "correctAnswer": 3,
        "explanation": "Kinetochore capture depends on microtubules growing and shrinking, and a cell loses that turnover either by having almost no polymer to work with or by having its polymer locked in place; either way kinetochores remain unattached or untensioned, checkpoint signaling persists, and the cell is held in mitosis. A shared rise in free dimer is contradicted by the polymer measurements, which went to 8 percent with one drug and 91 percent with the other. Chromosomes were condensed under both drugs, since condensation is part of how mitotic index was scored. CDK1 activity stayed high in both arrests, which is what keeps the cells mitotic rather than letting them exit.",
        "skill": "Cytoskeleton"
      },
      {
        "question": "MAD2-depleted cultures failed to accumulate in mitosis even with drug present. This result shows that the arrest normally produced by these drugs:",
        "options": [
          "reflects a purely physical inability to separate chromatids",
          "depends on the drugs killing cells before they reach mitosis",
          "requires active checkpoint signaling from kinetochores",
          "is caused by a defect in the proteasome itself"
        ],
        "correctAnswer": 2,
        "explanation": "If the drugs held cells by brute mechanics, removing one signaling protein could not release them, yet depleted cells passed through mitosis in about 30 min with cyclin B falling on schedule; the block is therefore an actively maintained surveillance response. Killing before mitosis is excluded because drug-treated cells with MAD2 intact clearly reach mitosis and pile up there, giving indices near 60 percent. A defect in the proteasome itself is not something a tubulin-binding drug creates, and it would also have stabilized cyclin B in the MAD2-depleted cells, which instead degraded it on schedule; cyclin B persists during arrest because the checkpoint inhibits CDC20 and hence the ubiquitin ligase, which is a consequence of checkpoint signaling rather than its cause.",
        "skill": "Cell cycle control"
      },
      {
        "question": "The persistence of high cyclin B in the arrested cells is best explained by:",
        "options": [
          "checkpoint inhibition of CDC20 and the APC/C",
          "increased transcription of the cyclin B gene in mitosis",
          "direct inhibition of the proteasome by both drugs",
          "loss of the ubiquitin needed to modify mitotic substrates"
        ],
        "correctAnswer": 0,
        "explanation": "Cyclin B is destroyed only after the APC/C ubiquitinates it, and checkpoint signaling works by sequestering that ligase's activating subunit, so an arrested cell retains cyclin B and keeps CDK1 active and itself mitotic. Neither drug inhibits the proteasome; both bind tubulin, and a proteasome block would also have stabilized cyclin B in the MAD2-depleted cells, which instead degraded it on time. What changes here is stability rather than synthesis, so more transcription is not the explanation. A cell-wide shortage of ubiquitin would derail far more than one substrate and is not something a tubulin-binding drug creates.",
        "skill": "Cell cycle control"
      },
      {
        "question": "Cells arrested in mitosis and cells arrested in G2 both contain a fully replicated genome. Which measurement best distinguishes the two populations?",
        "options": [
          "Staining nuclei with a dye that binds DNA stoichiometrically",
          "Scoring condensed chromosomes and nuclear envelope breakdown",
          "Measuring the fraction of total tubulin present as polymer",
          "Immunoblotting whole-culture lysates for total cyclin B protein"
        ],
        "correctAnswer": 1,
        "explanation": "Replication is finished in both states, so the amount of DNA per cell is the same and a stoichiometric DNA stain cannot tell them apart. What changes at the transition into mitosis is visible in the cell: chromatin condenses into discrete chromosomes and the nuclear envelope disassembles, which is precisely what the mitotic index scores. Polymer mass reports the drug's effect on tubulin and would be shifted in cells at any stage, so it cannot assign a cell to a cycle phase. Cyclin B is already high in late G2 and stays high through a mitotic arrest, so a bulk immunoblot of the culture separates neither the phases nor the individual cells.",
        "skill": "Experimental design"
      },
      {
        "question": "Two days after MAD2 depletion in drug, the cultures contained micronuclei and cells with altered chromosome numbers. The most likely reason is that:",
        "options": [
          "checkpoint proteins are themselves required to condense chromatin",
          "loss of MAD2 blocks DNA replication in the following S phase",
          "paclitaxel and nocodazole insert directly into chromosomal DNA",
          "cells exited mitosis before their chromosomes were properly attached"
        ],
        "correctAnswer": 3,
        "explanation": "With no checkpoint to enforce the wait, cells leave mitosis while kinetochores are still unattached or wrongly attached, so chromatin is partitioned unevenly and stragglers end up enclosed in their own small envelopes as micronuclei; the progeny therefore carry chromosome numbers that differ from the parent. Condensation is driven by mitotic kinases and condensin rather than by checkpoint proteins, and the depleted cells plainly entered mitosis with condensed chromosomes. A replication block would have stopped these cells from cycling at all, whereas the problem here is that they pressed on through mitosis. Both drugs bind tubulin rather than DNA, so the scrambled karyotypes cannot come from the drugs acting on chromosomes directly.",
        "skill": "Genome stability"
      }
    ],
    "needsReview": false
  },
]
