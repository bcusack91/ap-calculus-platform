/**
 * MCAT bio-biochem passage bank — expansion wave 2 (agent-authored, every
 * passage carries needsReview: true pending SME review; gated by
 * scripts/import-passage-seeds.ts: KaTeX compile, chart integrity, key
 * balance, no letter-position references, dup checks vs the live banks).
 *
 * KEY INVARIANT: the passage runner does NOT shuffle options — keys were
 * authored position-balanced and explanations reference options by CONTENT,
 * so options can be reordered only via scripts/rebalance-passage-keys.ts.
 */
import type { MCATPassage } from '../types'

export const BIO_BIOCHEM_PASSAGES_2: MCATPassage[] = [
  {
    "id": "bb2-01",
    "section": "bio-biochem",
    "discipline": "molecular biology",
    "title": "A Distal Enhancer Controls Liver-Specific Transcription",
    "passageText": "Gene LPX encodes a lipid-processing enzyme that is abundantly transcribed in hepatocytes and undetectable in skeletal muscle. A 600-bp noncoding element, E1, lies 28 kb upstream of the LPX transcription start site and contains three copies of a consensus binding motif for the transcription factor TFA. Investigators asked whether E1 is a liver-specific enhancer and whether TFA is required for its activity.\n\nFirst, chromatin from HepG2 cells (hepatocyte-derived) and C2C12 cells (myoblast-derived) was subjected to chromatin immunoprecipitation (ChIP) with an anti-TFA antibody, followed by qPCR at E1, at the LPX promoter, and at a gene-desert region on another chromosome. TFA ChIP gave 33-fold enrichment at E1 in HepG2 chromatin but only 1.2-fold in C2C12 chromatin; the gene-desert region gave approximately 1-fold enrichment in both. ChIP for histone H3 acetylated at lysine 27, a mark of active regulatory elements, was likewise enriched at E1 only in HepG2 cells. Western blotting detected abundant TFA protein in HepG2 lysate and none in C2C12 lysate, with equal actin loading controls.\n\nSecond, luciferase reporter plasmids were transfected into both cell lines. Every construct carried the LPX promoter driving luciferase; constructs differed in whether E1 was absent, placed upstream in its native orientation, placed upstream in the reverse orientation, moved 1.5 kb downstream of the luciferase cassette, or placed upstream with all three TFA motifs scrambled. A constitutively expressed second reporter was co-transfected into every well, and luciferase values were divided by that second reporter signal before being expressed relative to the promoter-only construct in HepG2 cells. In one additional condition, C2C12 cells received the native-orientation E1 construct together with a TFA expression vector.",
    "figure": "| Reporter construct | Relative activity in HepG2 | Relative activity in C2C12 |\n| --- | --- | --- |\n| LPX promoter only | 1.0 | 0.9 |\n| E1 upstream, native orientation | 24.0 | 1.1 |\n| E1 upstream, reverse orientation | 22.0 | 1.0 |\n| E1 moved downstream of luciferase | 19.0 | 1.0 |\n| E1 upstream, TFA motifs scrambled | 1.4 | 0.9 |\n| E1 upstream + TFA expression vector | not tested | 12.0 |",
    "questions": [
      {
        "question": "Which result most strongly supports the conclusion that E1 functions as an enhancer rather than as a second promoter?",
        "options": [
          "E1 is conserved across mammalian genomes",
          "Acetylated H3K27 is enriched at E1 in HepG2 cells",
          "E1 raises promoter-driven luciferase activity in either orientation and even when moved downstream of the reporter",
          "TFA protein is undetectable in C2C12 lysate"
        ],
        "correctAnswer": 2,
        "explanation": "Enhancers are defined operationally by their ability to stimulate a promoter independently of orientation and position, which is exactly the pattern seen: activity is roughly 19- to 24-fold whether E1 is upstream, inverted, or downstream. A promoter would have to sit immediately upstream in a fixed orientation to initiate transcription. Sequence conservation suggests functional importance but says nothing about enhancer versus promoter behavior. The active chromatin mark shows E1 is a regulatory element in liver cells but does not distinguish which kind. The absence of TFA in myoblasts addresses cell-type specificity, not the enhancer/promoter question.",
        "skill": "Data interpretation"
      },
      {
        "question": "Scrambling the three TFA motifs reduced activity in HepG2 cells from 24.0 to 1.4. This result indicates that:",
        "options": [
          "TFA binding at those motifs is required for E1 to stimulate the LPX promoter",
          "TFA represses LPX transcription in hepatocytes",
          "the scrambled construct was not delivered into the cells",
          "E1 stimulates transcription by a mechanism that does not involve sequence-specific factor binding"
        ],
        "correctAnswer": 0,
        "explanation": "Destroying the binding sites collapses enhancer output to near the promoter-only baseline, so those motifs, and by extension the factor that binds them, are necessary for E1 activity. TFA cannot be a repressor here because losing its sites lowers rather than raises reporter output. Failed delivery is excluded because the co-transfected constitutive reporter normalizes each well for transfection efficiency and would have flagged a delivery failure. A binding-independent mechanism is contradicted by the fact that changing only the motif sequences abolishes the effect.",
        "skill": "Enhancer function"
      },
      {
        "question": "C2C12 cells given the E1 construct plus a TFA expression vector showed 12-fold activity, compared with 1.1-fold without the vector. This is best interpreted as evidence that:",
        "options": [
          "E1 is irreversibly silenced in myoblasts and cannot respond to any factor",
          "the lack of TFA protein is sufficient to explain why E1 is inactive in myoblasts",
          "myoblasts fail to load RNA polymerase II at the LPX promoter",
          "TFA acts only at promoters and not at distal elements"
        ],
        "correctAnswer": 1,
        "explanation": "Supplying the missing factor restores most enhancer activity in a cell type where E1 was inert, so absence of TFA accounts for the cell-type restriction. Irreversible silencing is refuted by that same restoration. Polymerase loading cannot be the limiting problem because the promoter-only construct is expressed comparably in both cell lines (0.9 versus 1.0). The claim that TFA works only at promoters is contradicted by the ChIP enrichment at E1 and by the enhancer-dependent response to the vector.",
        "skill": "Cell-type specificity"
      },
      {
        "question": "In the ChIP experiment, what does the approximately 1-fold enrichment at the gene-desert region establish?",
        "options": [
          "That the anti-TFA antibody recognizes TFA and no other protein",
          "That TFA is expressed at equal levels in both cell types",
          "That E1 physically contacts the LPX promoter",
          "That enrichment measured at E1 exceeds the nonspecific background recovery of chromatin"
        ],
        "correctAnswer": 3,
        "explanation": "A region with no expected binding serves as a negative locus control: recovering it at background levels shows that the 33-fold signal at E1 reflects specific occupancy rather than generic carryover of chromatin during immunoprecipitation. Antibody specificity for the protein itself is addressed by the Western blot, not by a control locus. Equal expression between cell types is refuted by the Western blot, which shows TFA only in hepatocyte-derived cells. Physical contact between distant elements is not measured by ChIP-qPCR at all.",
        "skill": "Experimental design"
      },
      {
        "question": "Why was a constitutively expressed second reporter co-transfected into every well?",
        "options": [
          "To supply the TFA protein needed for enhancer activity",
          "To correct for well-to-well differences in transfection efficiency and cell number",
          "To measure the abundance of endogenous LPX mRNA",
          "To suppress background luciferase expression from the promoter"
        ],
        "correctAnswer": 1,
        "explanation": "Dividing the experimental signal by an internal reporter that is unaffected by the tested element normalizes each well for how many cells took up plasmid and how many cells are present, which is the dominant source of scatter in transfection assays. The second reporter is a normalization standard, not a source of TFA, which was supplied separately by an expression vector in one condition. It does not report on the endogenous gene, since it measures plasmid-derived signal. It cannot suppress background, because normalization changes the denominator rather than the promoter's intrinsic activity.",
        "skill": "Experimental design"
      },
      {
        "question": "Which approach would best test whether E1 comes into physical proximity with the LPX promoter 28 kb away in hepatocytes?",
        "options": [
          "Chromosome conformation capture (3C)",
          "Northern blotting for LPX mRNA",
          "Bisulfite sequencing of the LPX promoter",
          "Two-dimensional gel electrophoresis of nuclear protein extracts"
        ],
        "correctAnswer": 0,
        "explanation": "Conformation capture cross-links chromatin, digests it, and ligates fragments that were spatially close, then detects the resulting enhancer-promoter junction, so it directly reports looping between distant sites. Blotting for the mRNA quantifies output but cannot localize the DNA contacts producing it. Bisulfite sequencing reports cytosine methylation, a separate regulatory feature. Separating nuclear proteins by charge and mass characterizes the proteome and says nothing about DNA geometry.",
        "skill": "Chromatin looping"
      }
    ],
    "needsReview": true
  },
  {
    "id": "bb2-02",
    "section": "bio-biochem",
    "discipline": "molecular biology",
    "title": "A CRISPR-Cas9 Screen for Oxidative-Stress Survival Genes",
    "passageText": "To identify genes required for survival under oxidative stress, investigators used a pooled CRISPR-Cas9 loss-of-function screen. A human cell line stably expressing Cas9 was infected with a lentiviral library of about 76,000 single guide RNAs (sgRNAs): four independent guides targeting each of roughly 19,000 protein-coding genes, plus 1,000 non-targeting sgRNAs with no match in the genome. Infection was performed at low multiplicity so that most cells received a single guide, and the library was maintained at 500 cells per sgRNA throughout.\n\nAfter selection for infected cells, the pool was split. One arm received vehicle and the other received repeated sublethal pulses of hydrogen peroxide for 14 days, with both arms passaged identically. Genomic DNA was harvested at day 0 and day 14, the sgRNA cassettes were amplified and deep-sequenced, and a $\\log_{2}$ fold change in read abundance (day 14 relative to day 0) was computed for each guide. A gene score was defined as the median $\\log_{2}$ fold change of its four guides. Guides whose loss impairs survival become depleted (negative scores); guides whose loss confers a growth advantage become enriched (positive scores).\n\nA gene was called a hit only if at least three of its four independent guides moved in the same direction by more than one doubling. Selected hits were then rebuilt individually as clonal knockouts and retested. For each validated hit, the investigators also introduced a rescue cDNA in which the codons overlapping the sgRNA target had been changed to synonymous alternatives, leaving the encoded protein sequence unaltered.",
    "figure": "| Gene targeted | Median $\\log_{2}$ FC, vehicle arm | Median $\\log_{2}$ FC, peroxide arm | Guides concordant |\n| --- | --- | --- | --- |\n| G6PD (NADPH production) | -0.2 | -3.4 | 4 of 4 |\n| GCLC (glutathione synthesis) | -0.3 | -3.1 | 4 of 4 |\n| KEAP1 (inhibitor of an antioxidant transcription factor) | +0.1 | +2.6 | 4 of 4 |\n| TXNRD1 (thioredoxin reductase) | -0.1 | -1.8 | 2 of 4 |\n| Non-targeting sgRNAs (mean) | 0.0 | -0.1 | not applicable |",
    "questions": [
      {
        "question": "G6PD-targeting guides were strongly depleted in the peroxide arm but essentially unchanged in the vehicle arm. This pattern indicates that G6PD is:",
        "options": [
          "essential for proliferation under every condition tested",
          "represented by guides that were poorly cloned into the library",
          "a gene whose loss confers resistance to oxidative stress",
          "required for survival under oxidative stress but largely dispensable in unstressed cells"
        ],
        "correctAnswer": 3,
        "explanation": "A gene that is depleted only when the selective pressure is applied is conditionally required: knockout cells grow normally in vehicle but are outcompeted once peroxide is present, consistent with the NADPH this enzyme supplies being needed to regenerate antioxidant systems. A gene essential in all conditions would be depleted in the vehicle arm as well, which it is not. Poor cloning would lower read counts identically at day 0 in both arms, and would not produce an arm-specific difference. Resistance would appear as enrichment, the opposite of the observed negative score.",
        "skill": "Screen interpretation"
      },
      {
        "question": "The enrichment of KEAP1-targeting guides in the peroxide arm is best explained by which mechanism?",
        "options": [
          "Loss of KEAP1 increases the amount of hydrogen peroxide the cells generate",
          "KEAP1 normally restrains an antioxidant transcription program, so removing it raises stress tolerance",
          "KEAP1 guides have unusually high off-target cutting activity",
          "KEAP1 is required for Cas9 to enter the nucleus"
        ],
        "correctAnswer": 1,
        "explanation": "Enrichment means knockout cells outgrew the pool under stress, so the gene's normal product must be limiting protection; an inhibitor of an antioxidant transcription factor fits, because deleting the inhibitor derepresses the protective program. Raising peroxide production would sensitize rather than protect and predicts depletion. High off-target activity would be expected to reduce fitness nonspecifically and would also tend to make the four guides discordant, whereas all four agree. If the gene were needed for Cas9 import, its own knockout could not have been generated in the first place.",
        "skill": "Pathway logic"
      },
      {
        "question": "What is the primary purpose of including 1,000 non-targeting sgRNAs in the library?",
        "options": [
          "They reveal which genes are essential in all growth conditions",
          "They raise the cutting efficiency of Cas9 at targeted loci",
          "They define the distribution of fold changes expected when no gene is disrupted",
          "They guarantee that every gene is covered by four independent guides"
        ],
        "correctAnswer": 2,
        "explanation": "Guides with no genomic match still undergo infection, selection, passaging, amplification, and sequencing, so their spread of fold changes measures the technical and stochastic noise of the screen; their near-zero mean is the baseline against which real scores are judged. Core essential genes are identified by depletion in the vehicle arm, not by non-targeting controls. Non-targeting guides do not participate in cutting, so they cannot improve efficiency. Per-gene guide coverage is set by library design, independent of the control guides.",
        "skill": "Experimental design"
      },
      {
        "question": "TXNRD1 had a peroxide-arm score of -1.8 but only 2 of 4 concordant guides, and it was not called a hit. Which interpretation of that decision is most defensible?",
        "options": [
          "Discordance among independent guides leaves open that the depletion reflects off-target cutting or differing guide efficiency rather than loss of the gene",
          "The gene must not be expressed in these cells",
          "Two guides are more reliable than four because fewer double-strand breaks are made",
          "The gene score should be taken as the largest, not the median, of the four guide values"
        ],
        "correctAnswer": 0,
        "explanation": "Independent guides targeting different sites in one gene share only the intended target, so concordance is the screen's built-in control for off-target effects and for guides that simply cut inefficiently; when half the guides disagree, the phenotype is not yet attributable to the gene. Lack of expression is a possible biological explanation for a null result but cannot explain why two guides did show depletion. Fewer breaks does not make a smaller set of guides more reliable, since the risk being controlled is that any single guide has idiosyncratic targets. Using the extreme value instead of the median would amplify exactly the outlier-driven artifacts the criterion is meant to exclude.",
        "skill": "Off-target controls"
      },
      {
        "question": "Why were the codons overlapping the sgRNA target changed to synonymous alternatives in the rescue construct?",
        "options": [
          "To increase the catalytic rate of the encoded enzyme",
          "To allow the introduced cDNA to be spliced correctly",
          "To keep the introduced DNA from becoming methylated",
          "So the still-active sgRNA cannot cut the rescue construct, while the encoded protein remains identical"
        ],
        "correctAnswer": 3,
        "explanation": "The cells continue to express Cas9 and the integrated guide, so an unaltered cDNA would be cleaved as soon as it was introduced and no rescue could be observed; synonymous changes destroy guide recognition without changing the amino acid sequence, so restored survival can be attributed to the protein. Faster catalysis is not the goal and synonymous changes do not alter the protein anyway. Splicing is irrelevant because a cDNA contains no introns. Methylation of the plasmid is not what silences it in this experiment; targeted cutting is.",
        "skill": "Rescue experiment"
      }
    ],
    "needsReview": true
  },
  {
    "id": "bb2-03",
    "section": "bio-biochem",
    "discipline": "molecular biology",
    "title": "A Splice-Site Variant Tested in a Minigene Assay",
    "passageText": "A child with a recessive metabolic disorder was found to be homozygous for the variant c.812+1G>A in gene MTX. The variant changes the first base of intron 7, disrupting the invariant GU dinucleotide of the 5' splice site. Because the change lies outside the coding sequence, investigators tested its effect on splicing directly.\n\nThey built a minigene: a genomic fragment containing exon 7 (150 bp), intron 7, exon 8 (130 bp), intron 8, and exon 9 (170 bp) was cloned downstream of a strong promoter in an expression plasmid. Wild-type and variant minigenes were transfected separately into HEK293 cells. RNA was harvested, reverse transcribed, and amplified with a forward primer in exon 7 and a reverse primer in exon 9. Products were sized on an agarose gel and confirmed by sequencing. Every transfection was also processed through a parallel reaction in which reverse transcriptase was omitted.\n\nThe wild-type minigene yielded a single 450-bp product containing all three exons. The variant minigene yielded a single 320-bp product in which exon 8 was absent and exon 7 was joined directly to exon 9. The patient's own fibroblasts produced only the 320-bp product, while each parent's fibroblasts produced both products. Quantitative PCR showed the exon-8-skipped transcript at roughly 30 percent of wild-type transcript abundance in the parents' cells; that ratio rose substantially when the cells were treated for four hours with cycloheximide before harvest.\n\nA second, unrelated patient with a much milder presentation carried c.812+3A>G. Her minigene produced both the 450-bp and 320-bp products in approximately equal amounts.",
    "figure": "| RNA source | 450-bp band (exons 7-8-9) | 320-bp band (exon 8 skipped) |\n| --- | --- | --- |\n| Wild-type minigene | strong | absent |\n| c.812+1G>A minigene | absent | strong |\n| c.812+3A>G minigene | moderate | moderate |\n| Patient fibroblasts (homozygous c.812+1G>A) | absent | strong |\n| Parent fibroblasts (heterozygous) | strong | weak |\n| Reverse-transcriptase-omitted control | absent | absent |",
    "questions": [
      {
        "question": "Which spliceosomal snRNP normally base-pairs with the 5' splice site that this variant disrupts?",
        "options": [
          "U1",
          "U2",
          "U5",
          "U6"
        ],
        "correctAnswer": 0,
        "explanation": "Recognition of the 5' splice site begins when U1 snRNA base-pairs with the GU-containing consensus at the exon-intron junction, so a change in that invariant G impairs the earliest commitment step of splicing. U2 pairs with the branch-point sequence near the 3' end of the intron. U5 contacts sequences in the flanking exons and helps align them for ligation. U6 does engage the 5' splice site, but only later, after it replaces U1 during spliceosome rearrangement.",
        "skill": "Spliceosome"
      },
      {
        "question": "Skipping of the 130-nucleotide exon 8 is expected to have which consequence for the MTX open reading frame?",
        "options": [
          "An in-frame internal deletion of about 43 amino acids",
          "No change, because introns and exons are both removed from mature mRNA",
          "A downstream frameshift that generates a premature termination codon",
          "Loss of the polyadenylation signal"
        ],
        "correctAnswer": 2,
        "explanation": "Because 130 is not a multiple of three, removing exon 8 shifts the reading frame for all downstream codons, and a shifted frame typically encounters a stop codon well before the normal one. A clean internal deletion of amino acids would require the skipped exon to be a multiple of three in length. Exons are retained in mature mRNA, so losing one is not equivalent to intron removal. The polyadenylation signal lies at the 3' end of the transcript and is unaffected by an internal splicing change.",
        "skill": "Reading frame"
      },
      {
        "question": "Cycloheximide treatment substantially raised the abundance of the exon-8-skipped transcript. The most likely explanation is that:",
        "options": [
          "cycloheximide stabilizes the spliceosome so more skipping occurs",
          "cycloheximide increases transcription from the variant allele",
          "cycloheximide restores correct recognition of the intron 7 splice site",
          "the skipped transcript was being degraded by translation-dependent nonsense-mediated decay"
        ],
        "correctAnswer": 3,
        "explanation": "Nonsense-mediated decay requires a round of translation to detect the premature stop codon created by the frameshift; blocking elongation with cycloheximide prevents that surveillance step, so the unstable transcript accumulates. Stabilizing the spliceosome would predict more skipped product made rather than less destroyed, and cycloheximide acts on the ribosome, not the spliceosome. Increased transcription is not expected from a translation inhibitor and would raise both transcripts. Restored splicing would increase the full-length product, not the skipped one.",
        "skill": "mRNA surveillance"
      },
      {
        "question": "Which feature of the c.812+3A>G result best accounts for that patient's milder phenotype?",
        "options": [
          "The variant lies in an exon rather than in an intron",
          "A substantial fraction of transcripts are still spliced into full-length, in-frame mRNA",
          "Exon skipping in her cells restores the reading frame",
          "The variant creates an alternative translation start codon"
        ],
        "correctAnswer": 1,
        "explanation": "A position three bases into the intron is part of the splice-site consensus but not invariant, so it weakens rather than abolishes 5' splice-site use; producing roughly half normal full-length mRNA leaves partial enzyme activity, which maps onto milder disease. The variant is intronic, as the plus-numbering indicates. Skipping the same 130-bp exon shifts the frame in her cells exactly as in the severe case, so it cannot be restorative. Nothing in the data implicates a new initiation codon, and an intronic change three bases from the junction would not create a usable one.",
        "skill": "Genotype-phenotype"
      },
      {
        "question": "The reverse-transcriptase-omitted reactions were included primarily to:",
        "options": [
          "confirm that the PCR primers do not form primer dimers",
          "measure how efficiently the plasmid entered the cells",
          "show that the observed products arise from mRNA rather than from residual transfected plasmid DNA",
          "verify the sequence of the minigene before transfection"
        ],
        "correctAnswer": 2,
        "explanation": "Cells transfected with a genomic minigene contain large amounts of plasmid DNA that the same exon primers could amplify; omitting reverse transcriptase leaves no cDNA, so any band appearing in that reaction would signal DNA carryover. The absence of bands in those lanes therefore validates that the 450-bp and 320-bp products came from spliced RNA. Primer dimers are addressed by a no-template control, which contains neither RNA nor DNA. Transfection efficiency is not measured by the presence or absence of an enzyme in a downstream reaction, and construct sequence is verified by sequencing the plasmid itself.",
        "skill": "Experimental design"
      }
    ],
    "needsReview": true
  },
  {
    "id": "bb2-04",
    "section": "bio-biochem",
    "discipline": "genetics",
    "title": "Bisulfite Sequencing of an Imprinting Control Region",
    "passageText": "The mouse Igf2 and H19 genes sit about 90 kb apart and share a set of downstream enhancers. Between them lies an imprinting control region (ICR) containing binding sites for the insulator protein CTCF, which binds only unmethylated DNA. Investigators set out to characterize the methylation and expression of this locus by parent of origin.\n\nThey performed reciprocal crosses between two inbred strains, B and C, whose ICR sequences differ at several single-nucleotide polymorphisms. Liver DNA from the offspring was treated with sodium bisulfite, which deaminates unmethylated cytosine to uracil so that it is read as thymine after PCR, while 5-methylcytosine is chemically protected and continues to read as cytosine. Amplicons spanning 21 CpG sites in the ICR were sequenced, and each read was assigned to the maternal or paternal allele using the strain polymorphisms. As a technical measure, the investigators also tabulated conversion at the 48 cytosines in the amplicon that were not part of a CpG dinucleotide; more than 99 percent of these read as thymine in every sample.\n\nIn both crosses, the paternally inherited ICR was 94 percent methylated across the 21 CpG sites and the maternally inherited ICR was 4 percent methylated, irrespective of which strain contributed which gamete. Reverse-transcription sequencing of the same livers showed that Igf2 transcripts carried only the paternal polymorphism, while H19 transcripts carried only the maternal polymorphism.\n\nIn a separate line, a 2.4-kb deletion removed the CTCF sites from the ICR. The investigators then compared offspring that inherited the deletion from the mother with offspring that inherited it from the father.",
    "figure": "| Sample | ICR methylation, maternal allele | ICR methylation, paternal allele | Non-CpG cytosine conversion |\n| --- | --- | --- | --- |\n| B mother x C father | 4% | 94% | 99.4% |\n| C mother x B father | 4% | 93% | 99.3% |\n| Unmethylated control DNA | 1% | 1% | 99.6% |\n| In vitro fully methylated control DNA | 97% | 97% | 99.5% |",
    "questions": [
      {
        "question": "After bisulfite treatment, PCR, and sequencing, a cytosine that had been unmethylated in the original DNA is read as:",
        "options": [
          "C",
          "T",
          "A",
          "G"
        ],
        "correctAnswer": 1,
        "explanation": "Bisulfite deaminates unmethylated cytosine to uracil, and the polymerase reads uracil as thymine, so unmethylated positions appear as T while methylated positions are protected and remain C. Reading as C is what a 5-methylcytosine does, which is why residual C at a CpG is scored as methylation. Neither adenine nor guanine is a product of cytosine deamination; deamination of adenine would give hypoxanthine and guanine is not a target of the chemistry at all.",
        "skill": "Bisulfite chemistry"
      },
      {
        "question": "That the same 94-percent-methylated state tracks with paternal transmission in both reciprocal crosses, regardless of strain, indicates that:",
        "options": [
          "a strain-specific sequence polymorphism determines which allele is methylated",
          "one of the two alleles is chosen for methylation at random in each cell",
          "the ICR is methylated on both alleles in the zygote and later demethylated somatically",
          "the methylation mark is established in the germline according to parent of origin"
        ],
        "correctAnswer": 3,
        "explanation": "Reciprocal crosses swap which strain supplies the sperm and which supplies the egg; when the mark follows the parent rather than the strain, the instruction must be laid down during gametogenesis and then maintained in the offspring, which is the definition of an imprint. A strain-determined mark would move with the strain across the reciprocal crosses, and it does not. Random monoallelic choice would produce a mixture of maternal and paternal methylation across animals rather than a consistent 4-versus-94 split. Methylation of both alleles in the zygote is excluded by the maternal allele reading only 4 percent methylated.",
        "skill": "Imprinting"
      },
      {
        "question": "What is the most likely consequence of inheriting the 2.4-kb CTCF-site deletion from the mother?",
        "options": [
          "The maternal allele loses insulator function, so the shared enhancers activate Igf2 from both alleles",
          "Igf2 becomes silenced on both alleles",
          "The maternal allele becomes hypermethylated across the rest of the locus",
          "Nothing changes, because the maternal ICR is already unmethylated"
        ],
        "correctAnswer": 0,
        "explanation": "CTCF bound to the unmethylated maternal ICR blocks the downstream enhancers from reaching Igf2 and redirects them to H19; deleting its sites removes that boundary, so the maternal allele now behaves like the paternal one and Igf2 is expressed from both chromosomes. Silencing of both alleles would require also disabling the paternal allele, which is unaffected by a maternally transmitted deletion. Hypermethylation is not the expected result of deleting a protein-binding site. The claim that nothing changes confuses the mark with its readout: the maternal allele is unmethylated precisely so that CTCF can bind, so removing the sites is consequential.",
        "skill": "Insulator function"
      },
      {
        "question": "Why did the investigators tabulate conversion at the 48 non-CpG cytosines?",
        "options": [
          "To identify the polymorphisms that distinguish strain B from strain C",
          "To quantify the level of Igf2 transcription",
          "To confirm that conversion of unmethylated cytosine was nearly complete, so residual C at CpG sites reflects methylation",
          "To normalize for preferential PCR amplification of one allele over the other"
        ],
        "correctAnswer": 2,
        "explanation": "Cytosines outside CpG context are essentially unmethylated in mammalian somatic DNA, so they should all convert; observing over 99 percent conversion shows the chemistry ran to completion and that C read at a CpG is a real methyl mark rather than an unconverted artifact. Strain polymorphisms are identified by comparing genome sequences and are used for allele assignment, a separate purpose. Transcription is measured in the RNA experiment, not in bisulfite reads. Allele-amplification bias would be assessed by mixing known amounts of the two alleles, which is what the fully methylated and unmethylated control DNAs partly address.",
        "skill": "Experimental design"
      },
      {
        "question": "Why are strain-specific polymorphisms in the ICR essential to this experimental design?",
        "options": [
          "They improve the efficiency of bisulfite conversion",
          "They prevent PCR primers from annealing to methylated DNA",
          "They cause the imprint to be reset between generations",
          "They allow each sequencing read to be assigned to the maternal or the paternal allele"
        ],
        "correctAnswer": 3,
        "explanation": "Bulk methylation measurements average the two chromosomes and would report about 49 percent methylation, hiding the imprint entirely; sequence differences let each read be sorted by parental origin, which is what reveals the 4-versus-94 asymmetry. Conversion efficiency depends on the chemistry, not the sequence variants. Primer annealing is designed to be indifferent to methylation status, since converted and unconverted templates must both amplify. Imprint resetting occurs in the germline through erasure and re-establishment and is not caused by polymorphisms.",
        "skill": "Allele-specific analysis"
      },
      {
        "question": "The finding that Igf2 transcripts carried only the paternal polymorphism while H19 transcripts carried only the maternal polymorphism is best described as:",
        "options": [
          "monoallelic expression of each gene determined by parent of origin",
          "equal biallelic expression of both genes",
          "transcription of Igf2 and H19 as a single shared mRNA",
          "complete transcriptional silence of the entire maternal chromosome"
        ],
        "correctAnswer": 0,
        "explanation": "Each gene's transcripts carry only one parental sequence variant, and which parent that is differs between the two genes, so both are expressed from a single allele in a parent-of-origin-specific way. Biallelic expression would show both polymorphisms in the transcripts of each gene. A single shared mRNA is excluded because the two transcripts carry opposite parental markers. Global silencing of the maternal chromosome is refuted by the maternal-only expression of H19 from that same chromosome.",
        "skill": "Data interpretation"
      }
    ],
    "needsReview": true
  },
  {
    "id": "bb2-05",
    "section": "bio-biochem",
    "discipline": "cell biology",
    "title": "Telomere Attrition and Replicative Senescence in Cultured Cells",
    "passageText": "Investigators serially passaged a primary human fibroblast strain, HF-1, and tracked two variables as a function of cumulative population doublings (PD): mean telomere length, measured as the mean terminal restriction fragment (TRF) length on Southern blots of digested genomic DNA, and telomerase activity, measured with a telomere repeat amplification protocol (TRAP) in which extract-generated telomeric extension products are amplified by PCR.\n\nHF-1 cells began at PD 5 with a mean TRF of 10.2 kb and lost roughly 60 bp per doubling. At about PD 62 the cultures stopped dividing. The arrested cells enlarged and flattened, stained for senescence-associated beta-galactosidase, and did not resume division when given fresh serum, yet they remained viable and metabolically active for months, with no caspase activation or DNA laddering. TRAP activity in HF-1 extracts was undetectable at every passage.\n\nFor comparison, the investigators cultured an immortalized tumor-derived line, IMM, which had strong TRAP activity and maintained a short but stable mean TRF near 4.1 kb over more than 100 doublings. They also transduced HF-1 fibroblasts with a vector expressing hTERT, the catalytic protein subunit of telomerase. These cells acquired TRAP activity, maintained or slightly increased their TRF length, and continued dividing past PD 100 without senescing.\n\nIn every TRAP assay the investigators ran two additional reactions: one in which the extract was heated to 85 degrees Celsius for 10 minutes before the assay, which abolished the telomeric product ladder, and one containing a short synthetic template that generates an internal amplification control band, which appeared in all reactions including the heated ones.",
    "chart": {
      "title": "Figure 1. Mean terminal restriction fragment length versus cumulative population doublings",
      "kind": "line",
      "xLabel": "Cumulative population doublings",
      "yLabel": "Mean TRF length",
      "yUnit": "kb",
      "seriesLabel": "HF-1 primary fibroblasts (no telomerase activity)",
      "xValues": [
        5,
        15,
        25,
        35,
        45,
        55,
        65,
        75,
        85,
        100
      ],
      "yValues": [
        10.2,
        9.5,
        8.9,
        8.2,
        7.6,
        6.9,
        6.4,
        6.4,
        6.4,
        6.4
      ],
      "comparisonSeries": [
        {
          "label": "IMM immortalized line (telomerase positive)",
          "yValues": [
            4.1,
            4,
            4.2,
            4.1,
            4.1,
            4,
            4.2,
            4.1,
            4.1,
            4.2
          ]
        },
        {
          "label": "HF-1 + hTERT (telomerase restored)",
          "yValues": [
            10.2,
            10.6,
            11,
            11.2,
            11.3,
            11.4,
            11.4,
            11.5,
            11.5,
            11.6
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 6,
          "label": "HF-1 arrest at PD ~62; no further doublings"
        },
        {
          "xIndex": 9,
          "label": "hTERT cells still dividing at PD 100"
        }
      ]
    },
    "questions": [
      {
        "question": "Which mechanism best accounts for the progressive loss of telomeric DNA in HF-1 cells?",
        "options": [
          "Telomerase progressively digests the chromosome ends in primary cells",
          "Nucleotide excision repair removes telomeric repeats during each cell cycle",
          "After the terminal RNA primer is removed, the lagging strand cannot be completed to the very end of the template",
          "Topoisomerase II cleaves telomeres during chromosome condensation"
        ],
        "correctAnswer": 2,
        "explanation": "Discontinuous lagging-strand synthesis requires an RNA primer for each Okazaki fragment; when the most distal primer is excised there is no upstream 3' end for polymerase to extend, so a short stretch at the end of each linear template cannot be copied and the daughter telomere is shorter. Telomerase adds repeats rather than removing them, and these cells have none detectable anyway. Excision repair removes damaged bases and refills the gap, so it does not cause net shortening each division. Topoisomerase relieves torsional strain and religates the DNA it nicks, leaving no net loss.",
        "skill": "End-replication problem"
      },
      {
        "question": "The behavior of hTERT-transduced HF-1 cells most directly supports which conclusion?",
        "options": [
          "Restoring telomerase activity is sufficient to prevent telomere attrition and replicative senescence in these fibroblasts",
          "Telomere shortening is a consequence of senescence rather than a cause of it",
          "Expressing hTERT is by itself sufficient to make fibroblasts tumorigenic",
          "Replicative senescence requires the loss of p53 function"
        ],
        "correctAnswer": 0,
        "explanation": "Adding back a single missing component both stops the length decline and abolishes the proliferative limit, which establishes sufficiency: the telomere maintenance deficit was what capped the lifespan of these cells. If shortening were merely a downstream consequence, blocking it would not have extended the lifespan. Nothing in the data addresses transformation, and immortalization is not the same as tumorigenicity. Loss of p53 is not tested here, and the hTERT cells bypassed arrest without any such manipulation.",
        "skill": "Data interpretation"
      },
      {
        "question": "Heating the extract before the TRAP assay abolished the telomeric product ladder while the internal amplification control band still appeared. Together these results show that:",
        "options": [
          "the PCR amplification step of the assay is itself heat sensitive",
          "the ladder depends on a heat-labile enzymatic activity in the extract rather than on a PCR artifact",
          "telomerase is a DNA-dependent DNA polymerase",
          "the internal control band is generated by telomerase"
        ],
        "correctAnswer": 1,
        "explanation": "The control band shows that amplification still works in a heated sample, so the disappearance of the ladder must reflect destruction of something in the extract that generates the extension products, namely a heat-labile enzyme. If the amplification step were heat sensitive, the internal control band would also have vanished. The assay says nothing about which nucleic acid serves as template, and telomerase in fact copies its own RNA template. The internal control band appears in heated extracts where no telomerase activity remains, so telomerase cannot be generating it.",
        "skill": "Experimental design"
      },
      {
        "question": "Which observation most strongly argues that arrested HF-1 cells are senescent rather than simply quiescent from inadequate growth factors?",
        "options": [
          "Their mean TRF length has fallen to 6.4 kb",
          "Telomerase activity is undetectable in their extracts",
          "They remain metabolically active for months",
          "They do not resume dividing when fresh serum is supplied"
        ],
        "correctAnswer": 3,
        "explanation": "Quiescence is reversible by definition: restoring growth factors returns the cells to cycling, so failure to re-enter the cycle after fresh serum is the observation that specifically excludes it. A shortened TRF is consistent with the senescence model but does not by itself distinguish a reversible from an irreversible arrest. Absent telomerase is a property of these fibroblasts at every passage, including when they were proliferating happily, so it cannot mark the arrest. Continued metabolic activity distinguishes the state from cell death, not from quiescence, since quiescent cells are also viable.",
        "skill": "Senescence versus quiescence"
      },
      {
        "question": "The short but stable 4.1-kb mean TRF in IMM cells across more than 100 doublings is best explained by which of the following?",
        "options": [
          "IMM cells divide more slowly than HF-1 cells, so less shortening accumulates",
          "IMM cells have deleted their telomeric repeats entirely",
          "Telomerase in IMM cells adds repeats at a rate that offsets the loss occurring at each replication",
          "IMM cells copy their chromosome ends with a polymerase that requires no primer"
        ],
        "correctAnswer": 2,
        "explanation": "Length is a steady-state balance between end-replication loss and enzymatic addition; strong TRAP activity plus an unchanging TRF over many doublings indicates that addition matches loss, which is why an immortalized line can hold a set point well below the primary cells' starting length. Slower division would not produce stability, because the x-axis counts doublings rather than time, so loss per doubling would still accumulate. Complete loss of telomeres is excluded by a measurable 4.1-kb terminal fragment and by continued viability. No primer-independent replicative polymerase exists in these cells; telomerase instead extends the 3' overhang using its own RNA template.",
        "skill": "Telomere maintenance"
      }
    ],
    "needsReview": true
  },
  {
    "id": "bb2-06",
    "section": "bio-biochem",
    "discipline": "physiology",
    "title": "Baroreflex Responses to Head-Up Tilt and Exercise",
    "passageText": "Mean arterial pressure (MAP) is the product of cardiac output (CO) and total peripheral resistance (TPR), $\\text{MAP} = \\text{CO} \\times \\text{TPR}$, and CO is itself the product of heart rate and stroke volume. Beat-to-beat defense of MAP depends on the arterial baroreflex. Stretch-sensitive endings in the carotid sinus and aortic arch fire in proportion to arterial wall stretch; their afferent traffic reaches the nucleus tractus solitarius in the medulla, where it tonically restrains sympathetic outflow and supports vagal tone to the sinoatrial node.\n\nInvestigators studied 12 healthy adults instrumented with a radial arterial catheter and with impedance cardiography for beat-by-beat stroke volume. Each subject was recorded supine at rest, then during 5 min of passive 70-degree head-up tilt on a motorized table, and on a separate day during 10 min of cycling at roughly 60% of peak aerobic capacity. Passive tilt translocates about 500 mL of blood into the dependent veins without any voluntary muscle contraction, isolating the reflex response to reduced venous return. Cycling instead raises metabolic demand in the working muscle. Steady-state group means appear in Table 1; TPR was computed as MAP divided by CO.\n\nIn a follow-up protocol, six of the subjects repeated the 70-degree tilt after intravenous infusion of a ganglionic blocking agent. The tachycardia seen in the first protocol was abolished, and MAP fell by 34 mmHg within 90 s, forcing the investigators to return the table to horizontal. Plasma norepinephrine, which had nearly doubled during unblocked tilt, did not rise.",
    "figure": "| Condition | Heart rate (beats/min) | Stroke volume (mL) | Cardiac output (L/min) | MAP (mmHg) | TPR (mmHg·min/L) |\n| --- | --- | --- | --- | --- | --- |\n| Supine baseline | 62 | 81 | 5.0 | 90 | 18 |\n| 70-degree head-up tilt | 88 | 45 | 4.0 | 88 | 22 |\n| Cycling at 60% of peak | 140 | 107 | 15.0 | 105 | 7 |",
    "questions": [
      {
        "question": "Immediately after the table is tilted to 70 degrees, what happens to action potential frequency in the carotid sinus afferents, and why?",
        "options": [
          "It increases, because pooling of blood in the legs raises pressure in the carotid sinus",
          "It decreases, because reduced venous return lowers arterial pressure and therefore carotid sinus wall stretch",
          "It is unchanged, because the carotid sinus responds only to arterial oxygen content",
          "It decreases, because the receptors are chemoreceptors that sense falling arterial pH"
        ],
        "correctAnswer": 1,
        "explanation": "Tilting moves blood to the dependent veins, so venous return, stroke volume, and arterial pressure all fall transiently. Carotid sinus endings are mechanoreceptors that fire in proportion to wall stretch, so less distending pressure means fewer action potentials, which disinhibits sympathetic outflow and produces the tachycardia in Table 1. Firing cannot increase, because leg venous pooling lowers rather than raises central arterial pressure. Saying firing is unchanged and oxygen-driven confuses baroreceptors with the peripheral chemoreceptors of the carotid body, and the pH-sensing explanation makes the same error even though it names the correct direction.",
        "skill": "Baroreceptor function"
      },
      {
        "question": "During cycling, CO rose to 15.0 L/min while TPR fell to 7 mmHg·min/L. If TPR had instead remained at its supine value while CO rose to 15.0 L/min, MAP would have been approximately:",
        "options": [
          "105 mmHg",
          "135 mmHg",
          "180 mmHg",
          "270 mmHg"
        ],
        "correctAnswer": 3,
        "explanation": "Using $\\text{MAP} = \\text{CO} \\times \\text{TPR}$ with the supine TPR of 18 mmHg·min/L and the exercise CO of 15.0 L/min gives 15.0 × 18 = 270 mmHg. The measured value of 105 mmHg is what actually occurred once resistance fell, not what the fixed-TPR calculation predicts. The value 135 mmHg would follow from a TPR of 9, and 180 mmHg from a TPR of 12; neither is the supine resistance the question specifies. The size of the gap between 270 and the observed 105 mmHg is the point: vasodilation, not pump output alone, sets exercise pressure.",
        "skill": "Hemodynamic calculation"
      },
      {
        "question": "The efferent limb of the reflex that produced the heart rate change during tilt is best described as:",
        "options": [
          "Increased sympathetic outflow to the heart together with withdrawal of vagal tone",
          "Increased vagal outflow to the heart together with withdrawal of sympathetic tone",
          "Increased sympathetic outflow to the heart with a simultaneous increase in vagal tone",
          "Purely humoral, mediated by circulating angiotensin II within the first seconds"
        ],
        "correctAnswer": 0,
        "explanation": "Reduced baroreceptor firing removes the brainstem restraint on sympathetic neurons and removes the drive to cardiac vagal neurons, so sympathetic activity to the sinoatrial node and vasculature rises while parasympathetic activity falls; the two changes act in the same direction and together raise heart rate from 62 to 88 beats/min. Increasing vagal outflow and withdrawing sympathetic tone is the response to a pressure rise, not a fall. Raising both limbs at once would produce opposing chronotropic effects rather than the observed tachycardia. Angiotensin II is a slower hormonal mechanism operating over minutes to hours and cannot account for a response complete within seconds, which is also why ganglionic blockade abolished it.",
        "skill": "Autonomic control"
      },
      {
        "question": "MAP rose only from 90 to 105 mmHg during cycling even though CO tripled. Which factor best accounts for this?",
        "options": [
          "Stroke volume fell during exercise, offsetting the rise in heart rate",
          "Baroreceptor afferents stopped firing altogether once exercise began",
          "TPR fell by roughly 60% as metabolites dilated arterioles in the active skeletal muscle",
          "Venous return decreased, limiting the pressure the ventricle could generate"
        ],
        "correctAnswer": 2,
        "explanation": "TPR dropped from 18 to 7 mmHg·min/L, a fall of about 60%, because local metabolic vasodilation in exercising muscle opens a large, low-resistance parallel vascular bed; this offsets nearly all of the pressure effect of tripling CO. Table 1 shows stroke volume rising from 81 to 107 mL, not falling. Baroreceptors continue firing during exercise, with their operating point reset upward rather than silenced. Venous return must equal CO in the steady state, so it rose threefold as well, aided by the skeletal muscle pump.",
        "skill": "Exercise physiology"
      },
      {
        "question": "The follow-up protocol with a ganglionic blocking agent was included primarily to:",
        "options": [
          "Raise the resting heart rate so that tilt-induced changes would be easier to detect",
          "Test whether the heart rate and pressure responses to tilt require intact autonomic neural transmission",
          "Confirm that impedance cardiography measures stroke volume accurately",
          "Determine the maximum tilt angle the subjects could tolerate"
        ],
        "correctAnswer": 1,
        "explanation": "Blocking transmission at autonomic ganglia interrupts the efferent limb common to both sympathetic and parasympathetic pathways; the loss of tachycardia, the failure of norepinephrine to rise, and the 34 mmHg fall in MAP together show that the intact tilt response was neurally mediated rather than a passive mechanical consequence of gravity on the heart. Ganglionic blockade removes tonic vagal restraint but does not create a cleaner detection window, and the design point is causal, not cosmetic. Nothing in the manipulation validates the impedance measurement, which would require comparison with an independent stroke volume method. Tilt angle was fixed at 70 degrees in both protocols, so tolerance was not the variable under study.",
        "skill": "Experimental design"
      },
      {
        "question": "Afferent information from the carotid sinus reaches the central nervous system by which route?",
        "options": [
          "The vagus nerve, projecting to the hypothalamus",
          "The phrenic nerve, projecting to cervical spinal cord segments",
          "The glossopharyngeal nerve, projecting to the nucleus tractus solitarius of the medulla",
          "Postganglionic sympathetic fibers, projecting to the pons"
        ],
        "correctAnswer": 2,
        "explanation": "Carotid sinus baroreceptor afferents travel in the sinus nerve of Hering, a branch of the glossopharyngeal nerve, and synapse in the nucleus tractus solitarius, the medullary integrating center named in the passage. The vagus does carry baroreceptor afferents, but from the aortic arch, and its cardiovascular afferents also terminate in the medulla rather than the hypothalamus. The phrenic nerve is a motor nerve to the diaphragm and carries no baroreceptor signal. Sympathetic postganglionic fibers are efferent, so they cannot serve as the afferent limb.",
        "skill": "Neural pathways"
      }
    ],
    "needsReview": true
  },
  {
    "id": "bb2-07",
    "section": "bio-biochem",
    "discipline": "physiology",
    "title": "Oxygen Binding Curves Under Bohr-Shift Conditions",
    "passageText": "Hemoglobin (Hb) is an $\\alpha_2\\beta_2$ tetramer that binds up to four O2 molecules. Binding is cooperative: occupancy of one heme favors the transition of the tetramer from the low-affinity T state to the high-affinity R state, producing a sigmoidal saturation curve. Several ligands stabilize the T state and thereby shift the curve to the right, raising $P_{50}$, the pO2 at which Hb is half saturated. These include protons, CO2 (which forms carbamate adducts on N-terminal amino groups), and 2,3-bisphosphoglycerate (2,3-BPG), which binds in the central cavity between the beta subunits.\n\nInvestigators equilibrated aliquots of washed red cells with humidified gas mixtures of graded pO2 in a tonometer and measured fractional saturation spectrophotometrically once each aliquot reached equilibrium. Three preparations were compared. Preparation 1 was adult red cells at pH 7.40, 37 degrees Celsius, pCO2 40 mmHg, with normal intracellular 2,3-BPG. Preparation 2 was adult red cells from the same donors under simulated exercising-muscle conditions: pH 7.20, pCO2 60 mmHg, 39 degrees Celsius, and 2,3-BPG raised 40% above baseline. Preparation 3 was cord blood red cells, more than 70% of whose hemoglobin was HbF ($\\alpha_2\\gamma_2$), studied at pH 7.40 and 37 degrees Celsius.\n\nThe resulting curves are shown in Figure 1. Measured $P_{50}$ values were 26 mmHg for Preparation 1, 35 mmHg for Preparation 2, and 19 mmHg for Preparation 3. The investigators noted that in Preparation 2 four variables were changed at once, and that a separate series varying pH alone would be required to apportion the shift among them.",
    "chart": {
      "title": "Figure 1. Oxyhemoglobin saturation versus pO2 for three red cell preparations",
      "kind": "line",
      "xLabel": "Partial pressure of oxygen $(pO_2)$",
      "xUnit": "mmHg",
      "yLabel": "Hemoglobin saturation",
      "yUnit": "%",
      "seriesLabel": "Prep 1: adult, pH 7.40, 37 °C (P50 = 26)",
      "xValues": [
        0,
        10,
        20,
        30,
        40,
        50,
        60,
        70,
        80,
        100
      ],
      "yValues": [
        0,
        13,
        35,
        57,
        75,
        84,
        90,
        94,
        96,
        98
      ],
      "comparisonSeries": [
        {
          "label": "Prep 2: adult, pH 7.20, pCO2 60, 39 °C, high 2,3-BPG (P50 = 35)",
          "yValues": [
            0,
            8,
            22,
            40,
            60,
            72,
            81,
            87,
            91,
            95
          ]
        },
        {
          "label": "Prep 3: cord blood, >70% HbF, pH 7.40, 37 °C (P50 = 19)",
          "yValues": [
            0,
            20,
            52,
            74,
            87,
            92,
            95,
            97,
            98,
            99
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 4,
          "label": "mixed venous pO2 ≈ 40 mmHg"
        },
        {
          "xIndex": 9,
          "label": "pulmonary capillary pO2 ≈ 100 mmHg"
        }
      ]
    },
    "questions": [
      {
        "question": "Blood perfusing a vigorously contracting skeletal muscle would be best described by which curve in Figure 1, and what is the functional consequence?",
        "options": [
          "The curve with $P_{50}$ of 19 mmHg, which increases the fraction of O2 released to the tissue",
          "The curve with $P_{50}$ of 26 mmHg, because affinity is fixed for a given hemoglobin",
          "The curve with $P_{50}$ of 35 mmHg, which increases the fraction of O2 released at a given tissue pO2",
          "None of the curves, because O2 delivery to muscle depends only on blood flow, not on affinity"
        ],
        "correctAnswer": 2,
        "explanation": "Contracting muscle is acidic, hypercapnic, and warm, exactly the conditions of Preparation 2, whose curve lies lowest and has the highest $P_{50}$; at a tissue pO2 of 40 mmHg it is only about 60% saturated versus 75% for the resting adult curve, so more O2 is unloaded per unit of blood. The $P_{50}$ of 19 mmHg belongs to the left-shifted fetal preparation, which holds O2 more tightly and unloads less. Claiming affinity is fixed contradicts the whole Bohr phenomenon the study demonstrates. Flow certainly matters, but the curves show that affinity changes independently alter extraction at a fixed flow.",
        "skill": "Data interpretation"
      },
      {
        "question": "Based on Figure 1, the pO2 at which the cord blood preparation is half saturated is closest to:",
        "options": [
          "19 mmHg",
          "26 mmHg",
          "35 mmHg",
          "50 mmHg"
        ],
        "correctAnswer": 0,
        "explanation": "The cord blood curve passes 52% saturation at 20 mmHg, so half saturation occurs just below that, near 19 mmHg, matching the value given in the passage. A value of 26 mmHg is the $P_{50}$ of the adult control curve and 35 mmHg belongs to the simulated exercise preparation, both of which lie to the right of the fetal curve. At 50 mmHg the cord blood is already about 92% saturated, far above half.",
        "skill": "Reading a curve"
      },
      {
        "question": "The higher O2 affinity of HbF compared with adult HbA is best explained by which structural difference?",
        "options": [
          "HbF is a monomer and therefore binds O2 without cooperativity",
          "HbF contains gamma subunits in place of beta subunits, and gamma chains bind 2,3-BPG poorly",
          "HbF contains an additional heme group per tetramer, increasing total O2 capacity",
          "HbF uses Fe(III) rather than Fe(II) at the heme iron, which binds O2 more tightly"
        ],
        "correctAnswer": 1,
        "explanation": "In HbF, gamma chains replace beta chains, and a serine substitution in the central cavity weakens the electrostatic contacts that anchor 2,3-BPG. With less T-state stabilizer bound, the equilibrium favors the R state, so the curve shifts left, which is what lets fetal blood extract O2 from maternal blood across the placenta. HbF remains a cooperative tetramer, and its curve in Figure 1 is clearly sigmoidal rather than hyperbolic. All hemoglobin tetramers carry four hemes, fetal included. Oxidation of heme iron to Fe(III) produces methemoglobin, which cannot bind O2 at all.",
        "skill": "Hemoglobin structure"
      },
      {
        "question": "At the molecular level, how does a fall in pH shift the curve in the direction seen for Preparation 2?",
        "options": [
          "Protons oxidize heme iron, which lowers the number of functional binding sites",
          "Protons compete directly with O2 for the heme iron binding site",
          "Protons cleave the tetramer into dimers that bind O2 non-cooperatively",
          "Protonation of specific residues stabilizes salt bridges characteristic of the T state, lowering O2 affinity"
        ],
        "correctAnswer": 3,
        "explanation": "The Bohr effect works allosterically: at low pH, residues such as the beta-chain C-terminal histidine become protonated and form salt bridges that hold the tetramer in the low-affinity T conformation, so a higher pO2 is needed for half saturation. Protons do not oxidize the iron; that is the separate chemistry of methemoglobin formation. They also do not occupy the O2 site, since the shift is a change in affinity rather than competitive site blockade, and the curve remains sigmoidal and eventually reaches near-full saturation. Dissociation into non-cooperative dimers would flatten the sigmoid shape, which Figure 1 does not show.",
        "skill": "Bohr effect"
      },
      {
        "question": "The sigmoidal shape of all three curves, in contrast to the hyperbolic O2 binding curve of myoglobin, reflects that:",
        "options": [
          "Hemoglobin subunits bind O2 cooperatively, whereas myoglobin is a single-subunit protein with one binding site",
          "Myoglobin has a much lower affinity for O2 than hemoglobin at every pO2",
          "Hemoglobin binds O2 irreversibly once all four sites are filled",
          "Myoglobin requires 2,3-BPG for O2 binding, whereas hemoglobin does not"
        ],
        "correctAnswer": 0,
        "explanation": "Sigmoidicity arises from cooperative interaction among four subunits: early binding events shift the tetramer toward the R state and make later binding easier, producing the steep midportion of each curve. Myoglobin has one heme and no partner subunits, so its binding follows a simple hyperbolic isotherm. Myoglobin actually has a higher affinity than hemoglobin across the physiologic range, which is what lets it accept O2 from blood in muscle. Hemoglobin binding is reversible by design, since unloading in tissue is its function. 2,3-BPG binds hemoglobin, not myoglobin, and it lowers affinity rather than being required for binding.",
        "skill": "Cooperativity"
      },
      {
        "question": "The investigators note that Preparation 2 differed from Preparation 1 in four variables at once. Which modification would best isolate the contribution of pH to the observed rightward shift?",
        "options": [
          "Repeat Preparation 2 at pH 7.20 in a second cohort of donors to confirm reproducibility",
          "Repeat the tonometry at several pH values while holding temperature, pCO2, and 2,3-BPG at their Preparation 1 values",
          "Compare Preparation 2 with the cord blood preparation, since both differ from Preparation 1",
          "Measure total O2 content rather than fractional saturation at each pO2"
        ],
        "correctAnswer": 1,
        "explanation": "Apportioning a multivariable effect requires varying one factor at a time against a fixed background, so a pH series run at 37 degrees Celsius, pCO2 40 mmHg, and baseline 2,3-BPG isolates the proton contribution to the change in $P_{50}$. Repeating the same four-variable condition in new donors tests reproducibility but leaves the variables just as confounded. Comparing Preparation 2 with cord blood introduces a different hemoglobin isoform, adding a variable rather than removing three. Switching the readout to total O2 content changes the units on the y-axis but does not disentangle which condition caused the shift.",
        "skill": "Experimental design"
      }
    ],
    "needsReview": true
  },
  {
    "id": "bb2-08",
    "section": "bio-biochem",
    "discipline": "physiology",
    "title": "Measuring Insulin Sensitivity with a Euglycemic Clamp",
    "passageText": "The hyperinsulinemic-euglycemic clamp is the reference method for quantifying whole-body insulin sensitivity. A primed continuous intravenous insulin infusion raises and then holds plasma insulin near 100 microunits/mL, a concentration that in healthy people nearly abolishes hepatic glucose output and maximally stimulates skeletal muscle glucose uptake. A concurrent 20% dextrose infusion is adjusted every 5 min, guided by arterialized blood sampling, to hold plasma glucose at 90 mg/dL. Because plasma glucose is held constant, the glucose infusion rate (GIR) required at steady state equals the rate of whole-body glucose disposal, and a lower GIR at the same plasma insulin indicates greater insulin resistance.\n\nInvestigators clamped four groups of adults for 120 min: 10 lean normoglycemic controls, 10 obese normoglycemic subjects, 10 subjects with type 2 diabetes, and 8 subjects with type 1 diabetes of at least 5 years' duration who withheld their basal insulin overnight and were brought to 90 mg/dL before the clamp began. Group mean GIR over the clamp is plotted in Figure 1; steady state was defined as the final 30 min, over which the coefficient of variation of plasma glucose was under 5% in every subject. The type 1 diabetes group reached a steady-state GIR of 7.6 mg/kg/min, close to the lean control value.\n\nPlasma C-peptide, which is released in equimolar amounts with endogenous insulin but is absent from the pharmaceutical infusate, was measured at baseline and at 120 min. In the lean, obese, and type 2 diabetes groups C-peptide fell by 55% to 70% during the clamp; in the type 1 diabetes group it was undetectable at both time points.",
    "chart": {
      "title": "Figure 1. Glucose infusion rate required to maintain euglycemia during a 120-min clamp",
      "kind": "line",
      "xLabel": "Time from start of insulin infusion",
      "xUnit": "min",
      "yLabel": "Glucose infusion rate",
      "yUnit": "mg/kg/min",
      "seriesLabel": "Lean normoglycemic controls",
      "xValues": [
        0,
        15,
        30,
        45,
        60,
        75,
        90,
        105,
        120
      ],
      "yValues": [
        0,
        3,
        5.5,
        7,
        7.8,
        8,
        8,
        8,
        8
      ],
      "comparisonSeries": [
        {
          "label": "Obese normoglycemic",
          "yValues": [
            0,
            1.8,
            3,
            3.8,
            4.1,
            4.2,
            4.2,
            4.2,
            4.2
          ]
        },
        {
          "label": "Type 2 diabetes",
          "yValues": [
            0,
            1,
            1.8,
            2.2,
            2.4,
            2.4,
            2.4,
            2.4,
            2.4
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 6,
          "label": "steady state: final 30 min averaged"
        }
      ]
    },
    "questions": [
      {
        "question": "The obese normoglycemic group required a steady-state GIR of 4.2 mg/kg/min versus 8.0 mg/kg/min in lean controls. This difference is best interpreted as showing that the obese group:",
        "options": [
          "Secreted less insulin from pancreatic beta cells during the clamp",
          "Had a higher rate of hepatic glucose production before the clamp began",
          "Disposed of less glucose per unit time at the same plasma insulin concentration, indicating insulin resistance",
          "Cleared infused insulin from the plasma more slowly, prolonging its action"
        ],
        "correctAnswer": 2,
        "explanation": "Because the exogenous insulin infusion sets plasma insulin at the same level in every group and glucose is clamped at 90 mg/dL, the only variable left is how much glucose the tissues take up, which the GIR measures directly; roughly half the lean disposal rate means roughly half the insulin sensitivity. Endogenous secretion is deliberately made irrelevant here, since the infusion dominates and in fact suppresses it, as the C-peptide data show. Pre-clamp hepatic glucose production is not what the steady-state GIR reports, and at this insulin dose hepatic output is largely switched off in all groups. Slower insulin clearance would raise, not lower, the achieved insulin level and would if anything increase the required GIR.",
        "skill": "Data interpretation"
      },
      {
        "question": "Why is glucose infused at a variable rate to hold plasma glucose at 90 mg/dL rather than simply allowing it to fall during the insulin infusion?",
        "options": [
          "To keep the subjects comfortable, since the infusion itself has no effect on the measurement",
          "To raise plasma glucose above the renal threshold so that urinary losses can be quantified",
          "To ensure that hepatic glucose production continues at its fasting rate throughout the study",
          "To hold glucose constant so that the GIR reflects insulin action alone, uncontaminated by mass-action uptake and by counterregulatory hormone release during hypoglycemia"
        ],
        "correctAnswer": 3,
        "explanation": "Clamping the glucose concentration removes it as a variable in two ways: glucose uptake depends on its own concentration as well as on insulin, and falling glucose would trigger glucagon, epinephrine, and cortisol release that opposes insulin and would confound the result. Comfort is a real consideration but not the methodologic rationale, and the infusion clearly does affect the measurement, since the infusion rate is the measurement. Exceeding the renal threshold near 180 mg/dL would create urinary glucose losses that invalidate the disposal calculation, the opposite of the design goal. Hepatic glucose output is suppressed rather than preserved at these insulin levels, which is precisely what allows the GIR to be read as peripheral disposal.",
        "skill": "Experimental design"
      },
      {
        "question": "Insulin binding to its receptor on skeletal muscle initiates which sequence?",
        "options": [
          "Receptor tyrosine kinase autophosphorylation, then IRS and PI3K signaling and Akt activation, then GLUT4 translocation to the plasma membrane",
          "G protein activation, then adenylate cyclase stimulation and a rise in cAMP, then protein kinase A activation",
          "Diffusion of insulin across the membrane to a cytoplasmic receptor that then binds hormone response elements in DNA",
          "Ligand-gated ion channel opening, then Ca2+ influx and direct activation of glycogen synthase"
        ],
        "correctAnswer": 0,
        "explanation": "The insulin receptor is a preassembled tyrosine kinase; ligand binding drives transphosphorylation of the beta subunits, recruitment and phosphorylation of insulin receptor substrate proteins, and PI3K-Akt signaling that moves GLUT4-containing vesicles to the surface, which is the step that raises muscle glucose uptake during the clamp. The cAMP and protein kinase A cascade is the glucagon and epinephrine pathway, which opposes insulin. Insulin is a peptide and cannot cross the plasma membrane to reach an intracellular receptor, a mechanism reserved for steroid and thyroid hormones. No ligand-gated channel mediates insulin action, and glycogen synthase is activated downstream through dephosphorylation rather than by Ca2+ binding.",
        "skill": "Receptor signaling"
      },
      {
        "question": "The type 1 diabetes group achieved a steady-state GIR of 7.6 mg/kg/min. What does this result indicate about the pathophysiologic difference between type 1 and type 2 diabetes?",
        "options": [
          "Type 1 diabetes involves more severe peripheral insulin resistance than type 2 diabetes",
          "Type 1 diabetes reflects loss of insulin secretion with largely preserved insulin sensitivity, whereas type 2 diabetes reflects resistance to insulin that is still being secreted",
          "Both conditions are caused by the same defect, and the GIR difference reflects the shorter disease duration in the type 1 group",
          "Type 1 diabetes results from a defect in GLUT4 that is bypassed by intravenous glucose"
        ],
        "correctAnswer": 1,
        "explanation": "When insulin is supplied exogenously at a fixed rate, the type 1 group disposes of glucose nearly as fast as lean controls, showing that their tissues respond normally and that their hyperglycemia stems from autoimmune destruction of beta cells; the type 2 group, whose beta cells still secrete insulin, disposes of only 2.4 mg/kg/min, the signature of resistance. Their GIR of 7.6 is the highest of the three diabetes-related comparisons, so it cannot indicate more severe resistance. Duration was at least 5 years in the type 1 group, and in any case a shared defect would predict similar GIRs rather than a threefold difference. A primary GLUT4 defect would lower disposal regardless of the route by which glucose is delivered.",
        "skill": "Diabetes pathophysiology"
      },
      {
        "question": "C-peptide fell by 55% to 70% during the clamp in the lean, obese, and type 2 diabetes groups. This observation is best explained by:",
        "options": [
          "Degradation of C-peptide by the infused insulin preparation",
          "Dilution of plasma C-peptide by the volume of dextrose and insulin infused",
          "Negative feedback in which the infused insulin and clamped glucose reduce endogenous beta cell secretion, of which C-peptide is a marker",
          "Increased renal clearance of C-peptide caused by the elevated glucose infusion rate"
        ],
        "correctAnswer": 2,
        "explanation": "C-peptide is cosecreted with endogenous insulin but is not present in the pharmaceutical infusate, so it isolates the pancreatic contribution; its fall shows that high circulating insulin and a glucose level held at a non-stimulatory 90 mg/dL suppress beta cell output, the expected negative feedback. Insulin preparations do not carry proteolytic activity against C-peptide. Infused volumes over 120 min are far too small to dilute plasma by more than half, and dilution would lower every plasma solute equally, including glucose, which was held constant. Nothing in the protocol raises glucose above the renal threshold, so there is no mechanism for the infusion to accelerate C-peptide clearance.",
        "skill": "Negative feedback"
      },
      {
        "question": "A subject in the type 2 diabetes group weighs 80 kg and reaches the group mean steady-state GIR. What total mass of glucose is being infused per minute at steady state?",
        "options": [
          "30 mg/min",
          "192 mg/min",
          "640 mg/min",
          "1920 mg/min"
        ],
        "correctAnswer": 1,
        "explanation": "The steady-state GIR for the type 2 diabetes group in Figure 1 is 2.4 mg/kg/min, so an 80 kg subject receives 2.4 × 80 = 192 mg/min. A value of 30 mg/min would come from dividing rather than multiplying by body weight. The 640 mg/min figure corresponds to the lean control rate of 8.0 mg/kg/min applied to the same 80 kg subject, not to this group. The 1920 mg/min value is off by a factor of ten, the kind of error that a quick sanity check against the roughly 5 to 10 g of glucose in the entire plasma volume would catch.",
        "skill": "Quantitative reasoning"
      }
    ],
    "needsReview": true
  },
  {
    "id": "bb2-09",
    "section": "bio-biochem",
    "discipline": "physiology",
    "title": "Patch-Clamp Analysis of a Skeletal Muscle Sodium Channelopathy",
    "passageText": "Members of a family with paramyotonia carry a missense mutation in SCN4A, the gene encoding the voltage-gated sodium channel NaV1.4 of skeletal muscle. Affected individuals report muscle stiffness that worsens with repeated contraction and with cold exposure, and after prolonged exertion some episodes end in transient flaccid weakness during which the fibers become electrically silent.\n\nTo characterize the defect, investigators transfected HEK293 cells, which express no endogenous voltage-gated sodium current, with cDNA encoding either wild-type (WT) or mutant NaV1.4 alongside the accessory beta1 subunit. Whole-cell voltage-clamp recordings were made at 22 degrees Celsius with 140 mM extracellular Na+ and 10 mM intracellular Na+. Cells were held at -120 mV for 100 ms before each test pulse, and currents were elicited by 20-ms depolarizing steps to potentials between -60 and +40 mV. Peak current was normalized to cell capacitance to correct for differences in membrane area between cells. Recovery from inactivation was assessed with paired pulses separated by variable intervals at -80 mV.\n\nThe results appear in Table 1. Peak current density and the voltage dependence of activation were essentially identical between constructs, but the mutant showed markedly slowed fast inactivation, a persistent inward current that failed to decay by the end of the test pulse, and faster recovery from inactivation. In current-clamp mode, mutant-expressing cells fired bursts of repetitive action potentials in response to a single brief stimulus, and their resting membrane potential was depolarized by 8 mV relative to WT cells.",
    "figure": "| Parameter | Wild-type NaV1.4 | Mutant NaV1.4 |\n| --- | --- | --- |\n| Peak Na+ current density (pA/pF) | -310 | -295 |\n| Voltage of half-maximal activation (mV) | -24 | -25 |\n| Time constant of fast inactivation at 0 mV (ms) | 0.6 | 2.4 |\n| Persistent current at 20 ms (% of peak) | 0.3 | 4.1 |\n| Recovery from inactivation at -80 mV, tau (ms) | 5.0 | 1.8 |\n| Resting membrane potential in current clamp (mV) | -88 | -80 |",
    "questions": [
      {
        "question": "Which feature of the action potential in mutant-expressing cells would be most directly altered by the persistent inward current listed in Table 1?",
        "options": [
          "The resting potential would be driven further from threshold before any stimulus arrives",
          "The rate of rise of the upstroke would be markedly slowed",
          "The threshold voltage for channel opening would shift to a much more positive value",
          "Repolarization would be delayed, because inward Na+ current continues to oppose the outward K+ current"
        ],
        "correctAnswer": 3,
        "explanation": "Repolarization normally depends on sodium channels inactivating while delayed-rectifier K+ channels carry outward current; a sustained 4.1% inward current opposes that outward current and prolongs the falling phase. The resting potential in the mutant is depolarized by 8 mV, which moves it closer to threshold rather than further away. The upstroke rate depends on peak current density and activation voltage, both of which Table 1 shows to be unchanged, so the depolarizing phase itself is preserved. The half-maximal activation voltages of -24 and -25 mV are essentially identical, so the threshold for opening is not meaningfully shifted.",
        "skill": "Action potential phases"
      },
      {
        "question": "The absolute refractory period of a normal skeletal muscle fiber exists primarily because:",
        "options": [
          "Voltage-gated Na+ channels occupy the inactivated state and cannot reopen until the membrane repolarizes",
          "Voltage-gated K+ channels remain closed until the membrane returns to rest",
          "The Na+/K+ ATPase has not yet restored the ion gradients dissipated by the preceding action potential",
          "The membrane is hyperpolarized, so a larger than normal stimulus is required to reach threshold"
        ],
        "correctAnswer": 0,
        "explanation": "During the absolute refractory period, sodium channels are in the inactivated conformation with the inactivation gate closed, and no stimulus of any strength can reopen them until repolarization resets the gate; the mutant's faster recovery from inactivation, tau of 1.8 versus 5.0 ms, therefore shortens this period and permits the bursts of repetitive firing observed in current clamp. Potassium channels are open, not closed, during repolarization. Only a tiny fraction of the ion gradients is dissipated by a single action potential, so the pump is not rate limiting for excitability on this timescale. Requiring a larger stimulus during hyperpolarization describes the relative refractory period, in which firing is possible rather than impossible.",
        "skill": "Refractory periods"
      },
      {
        "question": "Holding the cells at -120 mV for 100 ms before each test pulse serves what experimental purpose?",
        "options": [
          "It activates the accessory beta1 subunit, which is otherwise silent",
          "It loads the cell with Na+ so that a measurable inward current can be recorded",
          "It prevents contamination of the recording by endogenous HEK293 sodium current",
          "It ensures that essentially all channels start each trial in the closed, non-inactivated state, so peak current reflects the full complement of available channels"
        ],
        "correctAnswer": 3,
        "explanation": "A strongly hyperpolarized conditioning potential removes steady-state inactivation, standardizing the starting condition so that differences in peak current between constructs reflect channel properties rather than differing fractions already inactivated, which matters greatly here because the mutant recovers from inactivation faster. The beta1 subunit modulates gating constitutively and is not switched on by voltage. Intracellular Na+ is set by the pipette solution at 10 mM, not by the holding potential. Contamination by endogenous current is not the issue, since the passage states that HEK293 cells express no voltage-gated sodium current, which is why they were chosen.",
        "skill": "Experimental design"
      },
      {
        "question": "If the extracellular Na+ concentration were lowered from 140 mM to 70 mM with all else unchanged, the peak inward current during a step to 0 mV would be expected to:",
        "options": [
          "Increase, because the reduced gradient slows inactivation",
          "Remain unchanged, because current depends only on the number of open channels",
          "Reverse in direction, because Na+ would flow outward at every test potential",
          "Decrease, because the reduced electrochemical driving force on Na+ at 0 mV lowers the flux through each open channel"
        ],
        "correctAnswer": 3,
        "explanation": "Current through open channels equals conductance times the difference between membrane potential and the Na+ equilibrium potential; halving external Na+ lowers that equilibrium potential by roughly 18 mV, shrinking the driving force at 0 mV and reducing peak inward current even though channel gating is untouched. A weaker gradient does not increase current, and inactivation kinetics are voltage dependent rather than set by the concentration gradient. Current cannot depend on open channel number alone, since flux through each pore scales with driving force. Reversal would require the test potential to exceed the new equilibrium potential, which at 70 mM external Na+ remains well positive of 0 mV.",
        "skill": "Ion gradients"
      },
      {
        "question": "Affected family members experience episodes of flaccid weakness with electrically silent fibers after prolonged exertion. Which explanation best reconciles this with a mutation that increases Na+ current?",
        "options": [
          "Sustained depolarization from the persistent current keeps most Na+ channels in the inactivated state, so fibers can no longer generate action potentials",
          "The persistent current depletes intracellular ATP, preventing myosin from detaching from actin",
          "The mutation reduces acetylcholine release at the neuromuscular junction during repetitive activity",
          "Prolonged activity converts the channel to a K+-selective pore, hyperpolarizing the fiber below threshold"
        ],
        "correctAnswer": 0,
        "explanation": "The mutant resting potential is already 8 mV depolarized, and repeated activity with a leaky persistent current depolarizes the fiber further; because the fraction of sodium channels available falls steeply with maintained depolarization, the membrane can reach a state in which too few channels are closed and resting to mount an upstroke, producing weakness rather than stiffness. ATP depletion would cause rigidity from persistent cross-bridge attachment, the opposite of flaccid weakness. The mutation is in a muscle sodium channel expressed in the sarcolemma, not in the presynaptic terminal, and the recordings characterize the channel itself. Selectivity filters are not remodeled by activity, and hyperpolarization would contradict the measured depolarized resting potential.",
        "skill": "Data interpretation"
      }
    ],
    "needsReview": true
  },
  {
    "id": "bb2-10",
    "section": "bio-biochem",
    "discipline": "physiology",
    "title": "Bile Acid Sequestration and Intestinal Lipid Absorption",
    "passageText": "Bile acids are amphipathic cholesterol derivatives synthesized in hepatocytes, conjugated to glycine or taurine, and stored in the gallbladder. After a fatty meal, cholecystokinin triggers gallbladder contraction and bile acids enter the duodenum, where they emulsify dietary triacylglycerol and, together with the products of pancreatic lipase action, form mixed micelles. Roughly 95% of secreted bile acids are reclaimed by an apical sodium-dependent transporter in the terminal ileum and returned to the liver in the portal blood, a loop known as the enterohepatic circulation. Hepatic synthesis of new bile acids from cholesterol is catalyzed by CYP7A1 and is normally held in check by returning bile acids.\n\nA bile acid sequestrant is a non-absorbable resin that binds bile acids in the intestinal lumen so that they are excreted in stool. Investigators conducted a 4-week randomized crossover trial in 18 adults with elevated LDL cholesterol, comparing the resin with placebo, with a 4-week washout between periods. Fecal bile acids were quantified from 72-h stool collections, serum lipids were measured after an overnight fast, and the coefficient of fat absorption was calculated from paired dietary fat intake and fecal fat output. Prothrombin time and serum 25-hydroxyvitamin D were followed as safety measures. Because hepatic tissue could not be sampled in humans, a parallel arm treated rats with the same resin and measured hepatic CYP7A1 mRNA and LDL receptor protein.\n\nResults are shown in Table 1. Fecal bile acid excretion rose almost fivefold on the resin, serum LDL cholesterol fell by 27%, and the rodent arm showed marked induction of both CYP7A1 and the hepatic LDL receptor. Fat absorption declined slightly, and two of the safety measures moved in the direction of fat-soluble vitamin insufficiency.",
    "figure": "| Measurement | Placebo | Bile acid sequestrant |\n| --- | --- | --- |\n| Fecal bile acid excretion (mmol/day) | 0.4 | 1.9 |\n| Serum LDL cholesterol (mg/dL) | 158 | 116 |\n| Serum triacylglycerol (mg/dL) | 145 | 168 |\n| Coefficient of fat absorption (%) | 96 | 91 |\n| Prothrombin time (s) | 12.1 | 14.6 |\n| Serum 25-hydroxyvitamin D (ng/mL) | 32 | 24 |\n| Hepatic CYP7A1 mRNA, rat arm (relative) | 1.0 | 3.4 |\n| Hepatic LDL receptor protein, rat arm (relative) | 1.0 | 2.2 |",
    "questions": [
      {
        "question": "Which sequence best explains how the resin lowers serum LDL cholesterol?",
        "options": [
          "The resin binds LDL particles in the intestinal lumen and carries them into the stool",
          "The resin inhibits HMG-CoA reductase in hepatocytes, reducing cholesterol synthesis directly",
          "The resin blocks pancreatic lipase, so less dietary cholesterol is esterified and absorbed",
          "Loss of returning bile acids relieves feedback inhibition of CYP7A1, so hepatocytes consume cholesterol to make new bile acids and upregulate LDL receptors to replenish it"
        ],
        "correctAnswer": 3,
        "explanation": "Interrupting the enterohepatic loop removes the signal that normally suppresses CYP7A1, and the rat data confirm a 3.4-fold rise in that transcript; cholesterol is the substrate for the new bile acids, so hepatic cholesterol falls and the cell compensates by doubling surface LDL receptors, which clears LDL from plasma. LDL particles circulate in blood and never enter the intestinal lumen, so the resin cannot bind them there. Statins, not resins, inhibit HMG-CoA reductase, and a non-absorbable resin never reaches the hepatocyte. Pancreatic lipase hydrolyzes triacylglycerol rather than handling cholesterol esters, and blocking it would not induce CYP7A1.",
        "skill": "Cholesterol homeostasis"
      },
      {
        "question": "Mixed micelles are required for efficient absorption of fatty acids and monoacylglycerol primarily because they:",
        "options": [
          "Transport lipids directly across the enterocyte membrane by an ATP-dependent pump",
          "Solubilize lipolysis products and ferry them across the unstirred water layer to the brush border, where the lipids are released and diffuse into the enterocyte",
          "Hydrolyze triacylglycerol into fatty acids and glycerol within the intestinal lumen",
          "Package absorbed lipid with apolipoproteins so that it can enter the bloodstream"
        ],
        "correctAnswer": 1,
        "explanation": "Lipolysis products are poorly soluble in the aqueous layer adjacent to the mucosa, and micelles keep them dispersed and deliver them to the brush border, where they dissociate and cross the membrane; the micelle itself is not absorbed, which is why sequestering bile acids lowered the coefficient of fat absorption from 96% to 91%. No ATP-dependent pump carries micelles across the membrane, and uptake of the released lipids is largely passive and carrier-facilitated. Hydrolysis is the job of pancreatic lipase with colipase, a step that occurs before micelle incorporation. Packaging with apolipoproteins happens inside the enterocyte during chylomicron assembly, not in the lumen.",
        "skill": "Lipid absorption"
      },
      {
        "question": "The prothrombin time rose from 12.1 s to 14.6 s on the resin. Deficiency of which vitamin best explains this finding?",
        "options": [
          "Vitamin K, a cofactor for the gamma-carboxylation of several clotting factors",
          "Vitamin C, a cofactor for the hydroxylation of proline in collagen",
          "Vitamin B12, a cofactor for methylmalonyl-CoA mutase",
          "Niacin, the precursor of NAD+ and NADP+"
        ],
        "correctAnswer": 0,
        "explanation": "Vitamin K is fat soluble and its absorption depends on micelle formation, so binding bile acids reduces its uptake; without it, the gamma-carboxylation of factors II, VII, IX, and X is impaired, and factor VII's short half-life makes the extrinsic-pathway prothrombin time the first test to lengthen. Vitamin C is water soluble and its deficiency causes defective collagen and fragile vessels rather than a prolonged prothrombin time. Vitamin B12 is water soluble, absorbed in the terminal ileum with intrinsic factor, and its deficiency produces megaloblastic anemia and neurologic disease. Niacin is likewise water soluble, and its deficiency causes pellagra, with no direct effect on clotting factor carboxylation.",
        "skill": "Fat-soluble vitamins"
      },
      {
        "question": "After lipids are re-esterified inside the enterocyte, the resulting chylomicrons reach the systemic circulation by which route?",
        "options": [
          "Diffusion directly across the basolateral membrane into intestinal capillaries and then the hepatic portal vein",
          "Secretion into the intestinal lumen for reabsorption further downstream in the ileum",
          "Assembly with apolipoprotein B-48 and exocytosis into lymphatic lacteals, reaching the blood at the thoracic duct and bypassing the portal vein",
          "Binding to serum albumin in the portal blood for direct delivery to hepatocytes"
        ],
        "correctAnswer": 2,
        "explanation": "Chylomicrons are too large to cross capillary endothelium, so the enterocyte builds them around apoB-48 and exocytoses them into lacteals; lymph carries them up the thoracic duct into the left subclavian vein, which is why dietary fat reaches peripheral tissues before the liver sees it. Direct diffusion into portal capillaries is the route for monosaccharides, amino acids, and short- and medium-chain fatty acids, not for chylomicrons. Secretion back into the lumen would undo absorption entirely. Albumin-bound transport describes free fatty acids released from adipose tissue, a separate transport pool from newly absorbed dietary triacylglycerol.",
        "skill": "Chylomicron transport"
      },
      {
        "question": "Which single result in Table 1 most directly confirms that the resin acted by interrupting the enterohepatic circulation, and what additional finding would most strengthen that conclusion?",
        "options": [
          "The fall in serum LDL cholesterol, strengthened by showing that dietary cholesterol intake was unchanged between periods",
          "The rise in serum triacylglycerol, strengthened by measuring hepatic VLDL secretion in the rat arm",
          "The nearly fivefold rise in fecal bile acid excretion, strengthened by showing reduced bile acid concentration in portal blood in the rat arm",
          "The drop in the coefficient of fat absorption, strengthened by repeating the stool collection on a higher fat diet"
        ],
        "correctAnswer": 2,
        "explanation": "Bile acids appearing in stool rather than being reclaimed in the ileum is the direct signature of a broken enterohepatic loop, and demonstrating that less bile acid returns in the portal blood closes the mechanistic link between luminal binding and the hepatic CYP7A1 response. The LDL fall is a downstream consequence shared with several other drug classes and does not by itself localize the action to the intestinal loop, though controlling diet is good practice. The triacylglycerol rise is a known but indirect effect on hepatic VLDL output and says nothing about bile acid recycling. The 5-point fall in fat absorption is a modest secondary effect of reduced micelle formation, and a higher fat challenge would test absorptive capacity rather than the recycling mechanism.",
        "skill": "Data interpretation"
      }
    ],
    "needsReview": true
  },
  {
    "id": "bb2-11",
    "section": "bio-biochem",
    "discipline": "microbiology",
    "title": "Blocking Three Steps of the Retroviral Life Cycle",
    "passageText": "HIV-1 is a retrovirus. Its genome is positive-sense single-stranded RNA, but that RNA is not translated directly on entry. Instead, reverse transcriptase (RT), an RNA-dependent DNA polymerase packaged inside the virion, copies the genome into double-stranded DNA. Viral integrase then inserts that DNA into a host chromosome, where it persists as a provirus and is transcribed by host RNA polymerase II. Late in the cycle, viral protease cleaves the Gag and Gag-Pol polyproteins into the individual capsid and enzyme subunits, a maturation step that converts a newly budded particle into an infectious virion.\n\nInvestigators infected cultured CD4+ T cells synchronously at a high multiplicity of infection and washed away unbound virus. To each culture they added a single drug: a nucleoside RT inhibitor, an integrase strand-transfer inhibitor, or a protease inhibitor. Each drug was added at one of several times after infection, always at a concentration that suppressed replication completely when present from the moment of infection. Forty-eight hours after infection the investigators collected the medium and measured (i) infectious virus released, by titering on indicator cells, and (ii) total particle output, by p24 capsid ELISA. Results are shown in Figure 1 as infectious virus released relative to an untreated infected control.\n\nThe RT inhibitor had largely lost its effect when added 6 h or later after infection. The integrase inhibitor remained effective somewhat longer but was ineffective by 12 h. The protease inhibitor suppressed infectious titer more than 100-fold even when added at 24 h; notably, p24 in the medium of those cultures was close to the untreated value, so particles were still being released.\n\nIn a separate arm, the team passaged infected cultures for 12 weeks in a sub-inhibitory concentration of the RT inhibitor. A variant carrying a single amino acid substitution in RT came to dominate the culture and was 40-fold less sensitive to that drug, yet remained fully sensitive to the integrase and protease inhibitors. Cells that already carried an integrated provirus resumed producing viral RNA after all drugs were withdrawn.",
    "chart": {
      "title": "Figure 1. Infectious virus released as a function of the time each drug was added after infection",
      "kind": "line",
      "xLabel": "Time of drug addition after infection",
      "xUnit": "h",
      "yLabel": "Infectious virus released",
      "yUnit": "% of untreated control",
      "seriesLabel": "Reverse transcriptase inhibitor",
      "xValues": [
        0,
        2,
        4,
        6,
        12,
        24
      ],
      "yValues": [
        2,
        8,
        45,
        80,
        96,
        99
      ],
      "comparisonSeries": [
        {
          "label": "Integrase strand-transfer inhibitor",
          "yValues": [
            3,
            4,
            9,
            38,
            92,
            98
          ]
        },
        {
          "label": "Protease inhibitor",
          "yValues": [
            1,
            1,
            2,
            3,
            5,
            9
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 2,
          "label": "reverse transcription largely complete"
        },
        {
          "xIndex": 4,
          "label": "integration largely complete"
        }
      ]
    },
    "questions": [
      {
        "question": "The RT-inhibitor curve in Figure 1 rises toward the untreated value earlier than the integrase-inhibitor curve. This difference is best explained by which statement?",
        "options": [
          "The integrase inhibitor is intrinsically more potent than the RT inhibitor at every concentration tested",
          "Reverse transcription is completed earlier in the replication cycle than integration, so its inhibitor has a shorter useful window",
          "The RT inhibitor is degraded by host cells within about 4 h of addition",
          "Integrase acts on viral RNA, whereas reverse transcriptase acts on viral DNA"
        ],
        "correctAnswer": 1,
        "explanation": "A drug that blocks a step can only help if it is present before that step happens. Reverse transcription precedes integration, so by 6 h the DNA copy already exists and adding an RT inhibitor accomplishes nothing, while integration is still partly ahead and its inhibitor still works. Relative potency is not being compared here, because the passage says every drug was used at a concentration that gave complete suppression when present from time zero. Nothing in the design speaks to drug degradation, and each drug was added fresh at its stated time. The claim about substrates is simply backwards: reverse transcriptase copies the RNA genome into DNA, and integrase acts on that DNA product.",
        "skill": "Viral life cycle"
      },
      {
        "question": "The protease inhibitor added at 24 h reduced infectious titer more than 100-fold while p24 in the medium stayed near the untreated value. Which explanation best accounts for both observations?",
        "options": [
          "It prevents viral genomic RNA from being packaged into budding particles",
          "It blocks fusion of the virion envelope with the host plasma membrane",
          "Polyprotein cleavage occurs during and after budding, so particles are still released but fail to mature into infectious virions",
          "It inhibits host ribosomes, so no viral polyprotein is synthesized"
        ],
        "correctAnswer": 2,
        "explanation": "p24 measures capsid protein released, and titer measures infectivity; the two diverge exactly when particles are made but are defective. Protease acts last, cleaving Gag and Gag-Pol as the particle buds and matures, so blocking it yields immature, noninfectious particles that still carry p24 into the medium. Blocking RNA packaging or blocking translation of the polyprotein would reduce particle output and therefore lower p24 along with titer, which is not what was seen. Blocking entry would prevent infection of new cells but would not describe a drug added to already-infected cultures and would not leave p24 output intact while destroying infectivity of the particles produced.",
        "skill": "Viral maturation"
      },
      {
        "question": "HIV must carry reverse transcriptase inside the virion rather than rely on a host enzyme because:",
        "options": [
          "host cells have no RNA-dependent DNA polymerase able to copy the viral RNA genome into DNA",
          "the viral genome is double-stranded DNA that must be unwound before integration",
          "host RNA polymerase II cannot transcribe integrated proviral DNA",
          "reverse transcription takes place in the nucleolus, which excludes host polymerases"
        ],
        "correctAnswer": 0,
        "explanation": "Host cells make DNA from DNA templates and RNA from DNA templates; they have no general enzyme that makes DNA from an RNA template, which is precisely the reaction the retrovirus needs, so the virus supplies that activity itself. The genome as delivered is single-stranded RNA, not double-stranded DNA, so the description of unwinding does not apply. Host RNA polymerase II does transcribe the provirus, and the passage says so, which is why the virus does not need to bring its own RNA polymerase. Reverse transcription occurs in the cytoplasm in the incoming reverse-transcription complex, not in the nucleolus, and nucleolar exclusion is not a reason a virion packages an enzyme.",
        "skill": "Reverse transcription"
      },
      {
        "question": "Which statement best describes how the RT-inhibitor-resistant variant most likely arose during 12 weeks of passage in sub-inhibitory drug?",
        "options": [
          "The drug chemically modified the RT gene, directing the particular substitution that appeared",
          "The virus detected the drug and raised its mutation rate in response to the stress",
          "Host enzymes edited the proviral DNA in order to protect the virus from the drug",
          "Reverse transcriptase lacks proofreading, so variants pre-existed in the population and the drug selected those that replicated best in its presence"
        ],
        "correctAnswer": 3,
        "explanation": "RT is error-prone and has no proofreading exonuclease, so a large infected culture already contains an enormous swarm of sequence variants before any drug is added; sub-inhibitory drug does not create the useful mutation, it merely lets the rare variant that tolerates the drug outgrow the rest. Mutations are not directed to a specific codon by the selecting agent, so the idea that the drug chemically writes the substitution misstates how selection works. A virus has no sensory apparatus for tuning its own mutation rate to a drug. Host DNA-editing enzymes such as APOBEC family members act to damage retroviral genomes, not to engineer helpful resistance substitutions on the virus's behalf.",
        "skill": "Mutation and selection"
      },
      {
        "question": "Which additional experiment would best establish that the fall in released virus reflects inhibition of viral replication rather than drug toxicity to the host cells?",
        "options": [
          "Repeat the assay using a 10-fold higher concentration of each drug",
          "Treat uninfected CD4+ T cells with each drug and measure viability and proliferation",
          "Measure p24 in culture medium that was never exposed to cells",
          "Add all three drugs simultaneously and measure released virus"
        ],
        "correctAnswer": 1,
        "explanation": "Toxicity is an alternative explanation for less virus in the medium, because dying cells make less of everything; the control that separates the two is to expose uninfected cells to the same drug concentrations and show that viability and division are unaffected. Raising the concentration tenfold pushes toward toxicity rather than excluding it. Medium never exposed to cells is a blank for the ELISA and tests assay background, not cell health. Combining all three drugs asks a different question about additive suppression and would, if anything, make a toxicity artifact harder to detect.",
        "skill": "Experimental design"
      },
      {
        "question": "None of the three drugs cleared virus from cells that already carried an integrated provirus, and those cells resumed producing viral RNA when drug was withdrawn. The best explanation is that:",
        "options": [
          "the provirus is degraded by host nucleases faster than any drug can reach it",
          "none of the three drugs can cross the nuclear envelope",
          "the provirus is a stable part of host chromosomal DNA, and its transcription and translation are carried out by host enzymes that these drugs do not target",
          "integrase must act continuously to keep the provirus in the host genome"
        ],
        "correctAnswer": 2,
        "explanation": "Each drug targets a virus-encoded enzyme acting at a specific step: making the DNA copy, inserting it, or maturing new particles. Once the DNA is inserted, it is ordinary chromosomal DNA read out by host RNA polymerase II and host ribosomes, so nothing the three drugs inhibit is required to maintain it, which is exactly why virus reappears when drug is removed. Rapid nuclease degradation would predict loss of the provirus and no rebound, the opposite of the observation. Nuclear access is not the barrier, since the integrase inhibitor works on nuclear events when given early. Integrase catalyzes a one-time insertion and is not needed thereafter to retain the provirus.",
        "skill": "Proviral latency"
      }
    ],
    "needsReview": true
  },
  {
    "id": "bb2-12",
    "section": "bio-biochem",
    "discipline": "microbiology",
    "title": "Transfer of Plasmid-Borne Resistance by Conjugation",
    "passageText": "Antibiotic resistance genes often reside on conjugative plasmids that move horizontally between bacterial cells. Investigators studied plasmid pR1, which carries a beta-lactamase gene conferring ampicillin resistance, using two Escherichia coli strains: a donor harboring pR1 that is ampicillin-resistant and streptomycin-sensitive, and a recipient with a chromosomal streptomycin-resistance mutation that is ampicillin-sensitive. Because each strain carries one marker the other lacks, cells that grow on medium containing both antibiotics must be recipients that have acquired the plasmid.\n\nIn Experiment 1, donor and recipient cultures were mixed at equal density and incubated 2 h without shaking, then plated on medium containing ampicillin alone, streptomycin alone, or both. Parallel mixtures were treated with DNase I throughout the mating period, or were placed in a chamber in which the two cultures were separated by a 0.45-micrometer membrane that passes macromolecules and viruses but not intact bacteria. Donor-only and recipient-only cultures were plated as controls. Colonies that arose on the double-antibiotic plates were purified and re-mated with a fresh, differently marked recipient.\n\nIn Experiment 2, the team used an Hfr donor in which the transfer factor is integrated into the chromosome. Donor and recipient were mixed, and samples were removed at intervals and blended violently to shear mating pairs apart, ending transfer at a defined time. Each sample was then scored for recipients that had acquired three chromosomal markers, azi, lac, and gal. The earliest time at which each marker appeared in recipients was 8 min for azi, 18 min for lac, and 25 min for gal, and the fraction of recipients receiving each marker plateaued at a lower value the later that marker entered.",
    "figure": "**Table 1. Experiment 1: colonies recovered after 2 h of mating**\n\n| Culture | Ampicillin only | Streptomycin only | Ampicillin + streptomycin |\n| --- | --- | --- | --- |\n| Donor alone | growth | none | none |\n| Recipient alone | none | growth | none |\n| Donor + recipient, mixed freely | growth | growth | 420,000 CFU/mL |\n| Donor + recipient + DNase I | growth | growth | 400,000 CFU/mL |\n| Donor and recipient separated by membrane | growth | growth | none |\n\n**Table 2. Experiment 2: markers detected in recipients after interrupted mating**\n\n| Mating time before blending (min) | azi | lac | gal |\n| --- | --- | --- | --- |\n| 5 | absent | absent | absent |\n| 10 | present | absent | absent |\n| 20 | present | present | absent |\n| 30 | present | present | present |",
    "questions": [
      {
        "question": "Why were the mating mixtures plated on medium containing both ampicillin and streptomycin?",
        "options": [
          "Only recipients that acquired the plasmid can grow, because donors are streptomycin-sensitive and unmated recipients are ampicillin-sensitive",
          "The two antibiotics act synergistically to kill any bacteriophage carried over from the donor culture",
          "Streptomycin induces plasmid transfer while ampicillin selects for the donor strain",
          "Double selection raises the frequency with which the plasmid is transferred"
        ],
        "correctAnswer": 0,
        "explanation": "The double-antibiotic plate is a counterselection: the donor is killed by streptomycin, the recipient that never received pR1 is killed by ampicillin, and only a recipient that has both its own chromosomal streptomycin resistance and the newly acquired plasmid gene survives, so every colony is a transconjugant. Antibiotics are irrelevant to phage viability, and phage carryover is addressed by the membrane and filtrate controls instead. The plate does not select for the donor, which cannot grow there at all, and streptomycin is not an inducer of transfer. Selection acts after mating is over, so it can reveal but cannot increase the transfer frequency.",
        "skill": "Selection strategy"
      },
      {
        "question": "DNase I did not reduce the number of transconjugants, yet separating the two strains by a 0.45-micrometer membrane abolished them. Together these results indicate that transfer:",
        "options": [
          "occurs by uptake of free plasmid DNA released from lysed donor cells",
          "requires direct physical contact between donor and recipient cells",
          "is mediated by a filterable bacteriophage produced by the donor",
          "depends on extracellular nuclease activity to nick the plasmid"
        ],
        "correctAnswer": 1,
        "explanation": "Insensitivity to DNase means the transferred DNA is never exposed as free molecules in the medium, and the loss of transfer across a membrane that stops only whole cells means the two cell types must touch, which together define conjugation. Uptake of free DNA is transformation, and it would have been abolished by DNase, not unaffected by it. A phage would pass through a 0.45-micrometer membrane and still deliver DNA to the far chamber, so transduction cannot explain a complete block by that membrane. Nothing suggests nuclease is needed for transfer; the DNase arm was included as a test and had no effect.",
        "skill": "Data interpretation"
      },
      {
        "question": "Neither the donor-only nor the recipient-only culture produced colonies on ampicillin plus streptomycin. This control is important because it rules out:",
        "options": [
          "transfer of the plasmid through a conjugative pilus",
          "the requirement for direct cell-to-cell contact",
          "degradation of the transferred plasmid by DNase I",
          "spontaneous mutation to double resistance within either parent strain as the source of the colonies"
        ],
        "correctAnswer": 3,
        "explanation": "Each parent culture contains a huge number of cells, so a rare spontaneous mutation to resistance against the second antibiotic could generate colonies on the selective plate that look exactly like transconjugants; showing that neither parent alone yields any such colonies establishes that the colonies from the mixture required both strains. The control cannot rule out the very mechanism it is being used to demonstrate, so conjugation through a pilus is not what is being excluded. The contact requirement is tested by the membrane chamber, not by single-strain plating. Sensitivity to DNase is tested in the DNase arm, and that arm showed no effect.",
        "skill": "Experimental controls"
      },
      {
        "question": "In Experiment 2, azi entered recipients at 8 min, lac at 18 min, and gal at 25 min. If 1 min of transfer corresponds to roughly 20 kb of DNA, the lac-to-gal interval is closest to:",
        "options": [
          "100 kb",
          "140 kb",
          "200 kb",
          "340 kb"
        ],
        "correctAnswer": 1,
        "explanation": "Interrupted mating converts time of entry into map position, because the chromosome enters the recipient linearly from a fixed origin at a roughly constant rate. The lac-to-gal interval is 25 min minus 18 min, or 7 min, and 7 min times 20 kb per min is about 140 kb. The 100 kb value corresponds to a 5-min interval and does not match either difference in the data. The 200 kb value corresponds to 10 min, which is the azi-to-lac interval rather than the interval asked about. The 340 kb value corresponds to 17 min, the total span from azi at 8 min to gal at 25 min, not the distance between the two genes named.",
        "skill": "Gene mapping"
      },
      {
        "question": "Transconjugants from Experiment 1 efficiently transferred resistance to a fresh recipient, whereas recipients that acquired chromosomal markers in Experiment 2 almost never became donors. The best explanation is that:",
        "options": [
          "the Hfr donor has lost the genes needed to build a conjugative pilus",
          "chromosomal genes are transferred as RNA rather than as DNA",
          "in an Hfr strain the transfer factor is integrated in the chromosome and enters the recipient last, so mating is nearly always interrupted before it is transferred",
          "recipients rapidly degrade all incoming chromosomal DNA"
        ],
        "correctAnswer": 2,
        "explanation": "A cell becomes a donor only if it receives the complete transfer factor. In Experiment 1 the whole plasmid moves as a unit, so transconjugants inherit the transfer machinery and can mate again. In an Hfr strain the transfer factor sits in the chromosome and most of it is transferred at the very end of the linear sequence, so ordinary mating breaks off first and recipients get chromosomal markers without donor capability. An Hfr strain that could not build a pilus would transfer nothing, yet markers clearly entered recipients. DNA, not RNA, is transferred during conjugation. Wholesale degradation of incoming DNA would prevent the recombinant markers that were in fact recovered.",
        "skill": "Conjugation mechanism"
      }
    ],
    "needsReview": true
  },
  {
    "id": "bb2-13",
    "section": "bio-biochem",
    "discipline": "cell biology",
    "title": "The DNA-Damage Checkpoint Measured by Flow Cytometry",
    "passageText": "Proliferating cells monitor genome integrity at checkpoints before committing to DNA replication or mitosis. To study the G1 checkpoint, investigators used two lines of human diploid fibroblasts: a wild-type line and an otherwise isogenic line in which both alleles of the gene encoding p53 had been deleted. Cultures were grown to identical subconfluent density, irradiated with 5 Gy of gamma rays at time zero, and sampled at intervals.\n\nAt each time point, cells were fixed, stained with propidium iodide, and analyzed by flow cytometry. Because the dye binds DNA stoichiometrically, the histogram of per-cell fluorescence separates cells with an unreplicated genome (2n, G1) from cells that have finished replication (4n, G2 and M), with cells actively replicating distributed between the two peaks. The percentage of cells in the 2n compartment is plotted in Figure 1. Unirradiated companion cultures of both lines were sampled in parallel and showed no change in distribution over 24 h.\n\nImmunoblots of the same samples showed that in wild-type cells p53 protein accumulated within 2 h of irradiation, without any increase in p53 mRNA, and that the CDK inhibitor p21 rose several hours later. In the p53-null line, p21 protein did not increase at any time point. A third arm treated wild-type cells with a selective inhibitor of the ATM kinase 30 min before irradiation; these cells accumulated little p53 protein and behaved like the p53-null line in the flow-cytometry assay, as shown in Figure 1.\n\nBy 48 h, irradiated wild-type cultures also contained a small population whose fluorescence fell below the 2n peak, a signal not present in unirradiated controls.",
    "chart": {
      "title": "Figure 1. Percentage of cells with 2n DNA content after 5 Gy of gamma irradiation",
      "kind": "line",
      "xLabel": "Time after irradiation",
      "xUnit": "h",
      "yLabel": "Cells with 2n DNA content",
      "yUnit": "%",
      "seriesLabel": "Wild-type",
      "xValues": [
        0,
        4,
        8,
        12,
        24
      ],
      "yValues": [
        60,
        68,
        80,
        86,
        88
      ],
      "comparisonSeries": [
        {
          "label": "p53-null",
          "yValues": [
            58,
            57,
            59,
            56,
            55
          ]
        },
        {
          "label": "Wild-type + ATM kinase inhibitor",
          "yValues": [
            59,
            60,
            58,
            57,
            56
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 0,
          "label": "5 Gy delivered at t = 0"
        }
      ]
    },
    "questions": [
      {
        "question": "The accumulation of cells in the 2n compartment of wild-type cultures after irradiation is most directly produced by:",
        "options": [
          "degradation of cyclin B, which prevents entry into mitosis",
          "activation of the anaphase-promoting complex, which triggers sister-chromatid separation",
          "p53-driven transcription of p21, which inhibits cyclin-dependent kinases and leaves Rb hypophosphorylated",
          "inhibition of ribosome biogenesis, which starves the cell of new protein"
        ],
        "correctAnswer": 2,
        "explanation": "The data localize the block before DNA synthesis: cells pile up at 2n, and the molecular arm shows p53 accumulating first and p21 rising after it, with no p21 induction when p53 is absent. p21 inhibits the G1 cyclin-dependent kinases, so Rb stays hypophosphorylated, E2F-dependent genes are not turned on, and cells do not enter S phase. Cyclin B destruction and anaphase-promoting-complex activity govern mitotic entry and exit and would trap cells at 4n, not 2n. A general shutdown of ribosome biogenesis would slow both lines indiscriminately, yet the p53-null cells cycled normally under identical irradiation.",
        "skill": "Checkpoint control"
      },
      {
        "question": "Because p53-null cells continued to enter and traverse S phase after irradiation, they would be expected to show:",
        "options": [
          "fewer mutations, because damaged template regions are skipped during replication",
          "a complete block of DNA replication until repair is finished",
          "loss of all cyclin-dependent kinase activity",
          "a higher frequency of fixed mutations and chromosomal aberrations in their daughter cells"
        ],
        "correctAnswer": 3,
        "explanation": "The point of pausing in G1 is to repair lesions before they are copied. Replicating a damaged template converts a repairable lesion into a permanent sequence change or a broken, rearranged chromosome, so cells that skip the pause pass more mutations and aberrations to their progeny. Replication machinery does not selectively skip damaged regions to protect the genome, so predicting fewer mutations inverts the logic. A complete replication block describes the checkpoint that these cells specifically lack. Loss of all cyclin-dependent kinase activity would arrest the cells, which is the opposite of the observed continued cycling.",
        "skill": "Genome stability"
      },
      {
        "question": "In these propidium iodide histograms, cells held at the G1 restriction point appear at which DNA content?",
        "options": [
          "2n, in the G1 peak itself",
          "between 2n and 4n",
          "4n",
          "8n"
        ],
        "correctAnswer": 0,
        "explanation": "The restriction point lies in late G1, before any DNA has been replicated, so an arrested cell still carries exactly one unreplicated diploid genome and stains at 2n, which is why the 2n percentage climbs in wild-type cells. Fluorescence between the two peaks marks cells in the middle of replication, which is the compartment the arrested cells never reach. A 4n signal marks cells that have completed replication and are in G2 or M. An 8n signal would require two rounds of replication without an intervening division, which is not what a G1 arrest produces.",
        "skill": "Flow cytometry"
      },
      {
        "question": "Wild-type cells treated with the ATM kinase inhibitor still contained the p53 gene, yet failed to accumulate at 2n. This result indicates that:",
        "options": [
          "p53 phosphorylates and activates ATM in response to DNA damage",
          "ATM acts upstream of p53, phosphorylating it so that it escapes degradation and accumulates",
          "ATM and p53 act in independent, parallel pathways to the same endpoint",
          "ATM activity is required for propidium iodide to enter and stain cells"
        ],
        "correctAnswer": 1,
        "explanation": "Blocking ATM prevented p53 protein from accumulating and abolished the arrest, placing ATM above p53 in the same pathway; this fits the immunoblot detail that p53 rises without any increase in its mRNA, meaning the regulation is post-translational stabilization rather than new transcription. Reversing the order, with p53 activating ATM, cannot explain why inhibiting ATM removes the p53 protein response. Strictly parallel pathways would predict that losing one still leaves partial arrest through the other, whereas either lesion alone abolished it completely. Staining was performed on fixed cells, and identical histograms were obtained from all lines, so dye entry is not at issue.",
        "skill": "Signal transduction"
      },
      {
        "question": "Which additional measurement would best distinguish a genuine G1 arrest in wild-type cells from selective killing of the cells that happened to be in S phase at the time of irradiation?",
        "options": [
          "Repeat the flow cytometry using a higher radiation dose",
          "Immunoblot for p53 protein at each time point",
          "Measure the total DNA content of the whole culture",
          "Pulse-label with a nucleoside analog such as BrdU and count how many cells enter S phase during each interval"
        ],
        "correctAnswer": 3,
        "explanation": "Both arrest and selective loss of S-phase cells raise the fraction of surviving cells that sit at 2n, so a percentage alone cannot separate them; what distinguishes them is entry rate, and pulse-labeling counts the cells that newly begin replicating in a defined window, which falls only under a real arrest. A higher dose amplifies both processes together and resolves nothing. Immunoblotting p53 confirms that the signaling pathway is engaged but says nothing about whether cells died or paused. Total DNA content of the culture is a bulk number that conflates cell number with per-cell content and cannot report either quantity.",
        "skill": "Experimental design"
      },
      {
        "question": "The population with fluorescence below the 2n peak, seen only in irradiated wild-type cultures at 48 h, most likely consists of:",
        "options": [
          "apoptotic cells whose DNA has been fragmented and partly lost from the cell",
          "quiescent cells that have withdrawn into G0",
          "tetraploid cells that failed to complete cytokinesis",
          "cells in early S phase that have just begun replicating"
        ],
        "correctAnswer": 0,
        "explanation": "Sub-2n staining means less DNA per particle than an unreplicated diploid genome, which happens when caspase-activated endonucleases cut chromatin into fragments that leak out during processing, the classic sub-G1 apoptotic signal; that it appears late, only after damage, and only in the p53-competent line fits p53-dependent apoptosis in cells that cannot repair. Quiescent cells have retained a full unreplicated genome and stain squarely at 2n. Tetraploid cells that failed cytokinesis carry more DNA, not less, appearing at or above 4n. Cells in early S phase have already added DNA and therefore lie just above the 2n peak.",
        "skill": "Apoptosis"
      }
    ],
    "needsReview": true
  },
  {
    "id": "bb2-14",
    "section": "bio-biochem",
    "discipline": "genetics",
    "title": "Mapping Two Autosomal Genes by Testcross",
    "passageText": "Two autosomal genes were studied in Drosophila. The b gene affects body color, with the wild-type allele giving a gray body and the recessive allele a black body. The vg gene affects the wing, with the wild-type allele giving a normal wing and the recessive allele a vestigial wing. Both recessive phenotypes are fully penetrant and easy to score in adults.\n\nInvestigators crossed a true-breeding gray, normal-winged stock to a true-breeding black, vestigial-winged stock. All F1 offspring were gray with normal wings, confirming that both wild-type alleles are dominant and that the F1 flies are heterozygous at both loci, with one homolog carrying both wild-type alleles and the other carrying both recessive alleles. F1 females were then crossed to males that were homozygous recessive at both loci, and 1000 progeny were scored for both traits. The results appear in Table 1, alongside the numbers expected if the two genes assorted independently.\n\nIn a second set of crosses, the same testcross scheme was applied to pairs involving a third gene, c. Those crosses gave 8 recombinant progeny per 100 for the vg-to-c interval and 20 recombinant progeny per 100 for the b-to-c interval. A fourth gene, d, was scored against b in an identical testcross and yielded the four phenotypic classes in a 1:1:1:1 ratio. Because recombination frequencies are additive over short intervals, the three-gene data can be used to place the loci in a linear order.",
    "figure": "**Table 1. Progeny of the F1 gray, normal-winged female crossed to a black, vestigial-winged male**\n\n| Phenotypic class | Observed | Expected if the genes were unlinked |\n| --- | --- | --- |\n| Gray body, normal wing | 445 | 250 |\n| Black body, vestigial wing | 435 | 250 |\n| Gray body, vestigial wing | 60 | 250 |\n| Black body, normal wing | 60 | 250 |\n| Total | 1000 | 1000 |",
    "questions": [
      {
        "question": "Based on Table 1, the recombination frequency between b and vg is:",
        "options": [
          "6%",
          "12%",
          "24%",
          "50%"
        ],
        "correctAnswer": 1,
        "explanation": "Recombination frequency is the number of recombinant progeny divided by the total, and the recombinants are the two rare classes: 60 gray vestigial plus 60 black normal equals 120 out of 1000, which is 12%. The 6% value comes from counting only one of the two recombinant classes and so discards half the recombinants. The 24% value comes from doubling the correct frequency, an error that would follow from dividing the recombinants by only the 500 progeny expected in one direction. The 50% value is what unlinked genes would give and matches the expected column in the table, not the observed data.",
        "skill": "Recombination frequency"
      },
      {
        "question": "The gray-body, vestigial-wing and black-body, normal-wing progeny are classified as recombinant because:",
        "options": [
          "they are the two most numerous classes recovered in the testcross",
          "each of them carries two dominant alleles on the same chromosome",
          "their allele combinations differ from the arrangements carried on the two homologs of the F1 parent, which were set by the original parental cross",
          "they arose from gametes contributed by the homozygous recessive tester parent"
        ],
        "correctAnswer": 2,
        "explanation": "Whether a class is parental or recombinant depends on the arrangement in the heterozygous parent, and here the parental cross established that one F1 homolog carries both wild-type alleles while the other carries both recessive alleles; a gamete pairing one wild-type with one recessive allele therefore required a crossover between the loci. The rare classes, not the numerous ones, are the recombinants, so counting the largest classes as recombinant inverts the reasoning. Neither rare class carries two dominant alleles together, since that is precisely the parental gray, normal-winged combination. The tester parent contributes only recessive alleles to every progeny fly, so it cannot generate any of the phenotypic differences being scored.",
        "skill": "Data interpretation"
      },
      {
        "question": "Given map distances of 12 cM between b and vg, 8 cM between vg and c, and 20 cM between b and c, the gene order is:",
        "options": [
          "b-c-vg",
          "b-vg-c",
          "c-b-vg",
          "the data are inconsistent with any linear order"
        ],
        "correctAnswer": 1,
        "explanation": "In a linear map the largest of the three pairwise distances spans the outermost pair, and the middle gene is the one whose two distances sum to it: 12 plus 8 equals 20, so vg lies between b and c. Placing c in the middle would require the b-to-vg distance to be the sum of the other two, meaning 20 plus 8 equals 12, which is false. Placing b in the middle would require the vg-to-c distance to be the largest, but 8 cM is the smallest of the three. The three values are perfectly additive, so there is no inconsistency to invoke.",
        "skill": "Gene mapping"
      },
      {
        "question": "Why did the investigators cross F1 heterozygotes to a homozygous recessive tester rather than to each other?",
        "options": [
          "The tester contributes only recessive alleles, so each progeny phenotype directly reports the gamete contributed by the heterozygous parent",
          "F1 by F1 crosses cannot generate recombinant chromosomes",
          "The presence of the tester parent increases the rate of crossing over in the F1",
          "Only a testcross allows dominant alleles to be phenotypically expressed"
        ],
        "correctAnswer": 0,
        "explanation": "A testcross makes gametes visible: because every gamete from the tester carries recessive alleles at both loci, the progeny phenotype is a direct readout of which alleles the heterozygous parent's gamete carried, so counting flies is equivalent to counting gametes. Crossing two heterozygotes still produces crossovers, but dominance masks the contributing gametes and several genotypes collapse into one phenotype, which is the practical problem being avoided. A mating partner cannot influence recombination occurring in the other parent's meiosis. Dominant alleles are expressed in any cross, including the F1 generation described in the passage.",
        "skill": "Experimental design"
      },
      {
        "question": "A fourth gene, d, scored against b in an identical testcross, gave the four phenotypic classes in a 1:1:1:1 ratio. The most defensible conclusion is that:",
        "options": [
          "b and d lie about 1 cM apart",
          "b and d lie on the same chromosome about 25 cM apart",
          "d must lie on the same chromosome as vg",
          "b and d assort independently, either because they are on different chromosomes or because they are far enough apart on one chromosome that crossing over separates them half the time"
        ],
        "correctAnswer": 3,
        "explanation": "A 1:1:1:1 ratio means recombinants equal parentals, a 50% recombination frequency, which is the maximum any pair of loci can show; that outcome is produced both by genes on different chromosomes and by genes so far apart on one chromosome that multiple crossovers randomize them, so the data cannot distinguish the two possibilities. A 1 cM separation would give a strong excess of parental classes, roughly 99 to 1, not equal classes. A 25 cM separation would still give a clear parental excess, about 3 to 1, which the observed ratio does not show. Nothing in this cross involves vg, so no placement relative to vg can be inferred.",
        "skill": "Independent assortment"
      }
    ],
    "needsReview": true
  },
  {
    "id": "bb2-15",
    "section": "bio-biochem",
    "discipline": "immunology",
    "title": "Adjuvants, T-Cell Help, and Immune Memory",
    "passageText": "A protein antigen that has never been encountered elicits a slow, modest antibody response, whereas a second exposure produces a rapid and much larger one. To dissect the requirements for that difference, investigators immunized groups of genetically identical mice on day 0 and boosted them with the same antigen on day 28.\n\nGroup 1 received soluble antigen alone. Group 2 received the same dose of antigen emulsified with an adjuvant containing a bacterial cell-wall preparation. Group 3 received antigen plus adjuvant but was depleted of CD4+ T cells with a monoclonal antibody beginning one week before immunization and continuing throughout. Serum was collected at intervals and antigen-specific antibody was measured separately for each isotype; Figure 1 reports the antigen-specific IgG titer as the log of the highest serum dilution still giving a signal.\n\nIn all three groups, antigen-specific IgM appeared first and peaked near day 7, and in Group 3 the small IgM response was the only antibody detected at any time. In Groups 1 and 2, IgG rose after IgM and, when measured by the antigen concentration required for half-maximal binding, the IgG collected after the boost bound antigen roughly 100-fold more tightly than the IgG collected on day 14. Lymph nodes from Group 2 mice contained large germinal centers on day 14, Group 1 mice had few and small ones, and Group 3 mice had none. Antigen-specific B cells with a memory surface phenotype were abundant in Group 2 on day 28, before the boost was given, and were essentially absent in Group 3.",
    "chart": {
      "title": "Figure 1. Antigen-specific serum IgG titer before and after a day-28 boost",
      "kind": "line",
      "xLabel": "Day after primary immunization",
      "xUnit": "days",
      "yLabel": "Antigen-specific IgG titer",
      "yUnit": "log of endpoint dilution",
      "seriesLabel": "Group 2: antigen + adjuvant",
      "xValues": [
        0,
        7,
        14,
        21,
        28,
        31,
        35,
        42
      ],
      "yValues": [
        0,
        1.8,
        2.6,
        2.8,
        2.7,
        3.8,
        4.6,
        4.5
      ],
      "comparisonSeries": [
        {
          "label": "Group 1: antigen alone",
          "yValues": [
            0,
            0.8,
            1.2,
            1.3,
            1.2,
            1.8,
            2.2,
            2.1
          ]
        },
        {
          "label": "Group 3: antigen + adjuvant, CD4-depleted",
          "yValues": [
            0,
            0.3,
            0.4,
            0.3,
            0.3,
            0.4,
            0.5,
            0.4
          ]
        }
      ],
      "annotations": [
        {
          "xIndex": 4,
          "label": "booster dose given on day 28"
        }
      ]
    },
    "questions": [
      {
        "question": "In Group 2, the response after the day-28 boost is faster, larger, and composed of higher-affinity IgG than the primary response. The best explanation is that:",
        "options": [
          "the booster injection delivered a larger dose of antigen than the primary immunization",
          "naive B cells respond more rapidly the second time an antigen is encountered",
          "the primary response generated memory B cells that had already undergone class-switch recombination and affinity maturation",
          "IgM-secreting plasma cells convert into IgG-secreting plasma cells when antigen returns"
        ],
        "correctAnswer": 2,
        "explanation": "The passage supplies the mechanism directly: germinal centers formed during the primary response, affinity for antigen improved about 100-fold, and switched memory B cells were already abundant on day 28 before the boost, so re-exposure recruits a large pool of pre-selected, already-switched cells that need no further differentiation from scratch. The passage states the boost used the same antigen dose, so dose cannot account for the difference. Naive B cells have no record of a prior encounter, and it is the memory compartment, not the naive one, that responds faster. Terminally differentiated plasma cells are end-stage secretory cells and do not switch their isotype after the fact; class switching happens in activated B cells before plasma-cell differentiation.",
        "skill": "Immune memory"
      },
      {
        "question": "CD4-depleted mice made a small early IgM response but essentially no IgG, even with adjuvant. This pattern is best explained by a requirement for:",
        "options": [
          "CD40 ligand and cytokines supplied by helper T cells to drive class-switch recombination and affinity maturation",
          "helper T cells to secrete the antibody molecules themselves",
          "CD4+ T cells to present antigen to naive B cells using MHC class I",
          "helper T cells to carry antigen into the B-cell cytoplasm"
        ],
        "correctAnswer": 0,
        "explanation": "The split result is informative: IgM can be produced with little or no T-cell input, but switching to IgG and improving affinity require a B cell to present antigen on MHC class II to a helper T cell and receive CD40 ligand engagement plus cytokines, which is what licenses the switching and hypermutation machinery, and it is exactly why Group 3 formed no germinal centers. Antibody is secreted by plasma cells derived from B cells, not by T cells. The direction of presentation is reversed in the MHC class I option: the B cell presents to the T cell on class II, and class I is not the relevant restriction element for helper T cells. Antigen does not need to be delivered into the B-cell cytoplasm, because the B-cell receptor binds intact antigen at the surface.",
        "skill": "T-cell help"
      },
      {
        "question": "The adjuvant most plausibly enhanced the response in Group 2 by:",
        "options": [
          "serving as the antigen that the B-cell receptor recognizes",
          "directly cross-linking membrane IgM on naive B cells regardless of specificity",
          "supplying preformed antibody that opsonizes the injected antigen",
          "stimulating innate pattern-recognition receptors and prolonging antigen availability, thereby increasing dendritic-cell activation and costimulation of T cells"
        ],
        "correctAnswer": 3,
        "explanation": "The adjuvant here is a bacterial cell-wall preparation in an emulsion, a combination that both delivers ligands for innate pattern-recognition receptors and keeps antigen at the site longer; the resulting dendritic-cell maturation and upregulated costimulation give T cells the second signal they need, which is why germinal centers were large in Group 2 and small in Group 1. The adjuvant is not the antigen being measured, since the assay scores antibody specific for the protein antigen. Nonspecific cross-linking of surface immunoglobulin would activate B cells irrespective of specificity and would not yield the antigen-specific, high-affinity response observed. No antibody is administered in this design, and Group 3 shows that the adjuvant cannot substitute for the animal's own T-dependent response.",
        "skill": "Innate immunity"
      },
      {
        "question": "Which comparison in this study most directly isolates the contribution of helper T cells to the IgG response?",
        "options": [
          "Group 1 versus Group 2",
          "Group 2 versus Group 3",
          "IgM titer versus IgG titer within Group 1",
          "Pre-boost versus post-boost titers within Group 1"
        ],
        "correctAnswer": 1,
        "explanation": "Isolating one variable requires two groups that differ in that variable alone; Group 2 and Group 3 both received antigen with adjuvant and differ only in whether CD4+ T cells were present, so the difference between them is attributable to T-cell help. Comparing the group given antigen alone with the group given antigen plus adjuvant varies the adjuvant, which measures adjuvant effect rather than T-cell help. Comparing isotypes within a single group describes the kinetics of switching but holds T-cell status constant, so it cannot attribute anything to T cells. Comparing time points before and after the boost within one group measures the memory response, again without varying T-cell availability.",
        "skill": "Experimental design"
      },
      {
        "question": "Class switching from IgM to IgG in these mice changes:",
        "options": [
          "the heavy-chain constant region, and therefore effector function, while antigen-binding specificity is retained",
          "the antigen-binding site, so that a new specificity is generated",
          "the light-chain variable region only, leaving the heavy chain unaltered",
          "the number of antigen-binding sites per molecule from two to ten"
        ],
        "correctAnswer": 0,
        "explanation": "Class-switch recombination deletes the DNA between the assembled heavy-chain variable region and a downstream constant-region gene segment, so the same variable domains are joined to a new constant region; the antibody keeps recognizing the same epitope but gains new effector properties such as different complement activation, receptor binding, and placental transfer. Changing the binding site would create a different specificity, which is not what switching does; affinity improvements come separately from somatic hypermutation of the variable region followed by selection. The light chain is not the target of switching, and its variable region is unchanged by the switch itself. Ten binding sites describes the pentameric secreted IgM, so switching to IgG moves toward fewer binding sites, not more.",
        "skill": "Antibody structure"
      }
    ],
    "needsReview": true
  }
]
