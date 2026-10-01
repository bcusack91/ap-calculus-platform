/**
 * MCAT full-length FORM 7 — Bio/Biochem section, file B (passages 6–10 +
 * discretes 1–7). Authored 2026-10-01 against the AAMC-representative
 * blueprint (scratchpad/mcat-fl/BLUEPRINT.md + BLUEPRINT-F78.md): 400–600-word
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

export const FL7_BIO_BIOCHEM_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. METABOLISM — Fatty acid synthesis: citrate shuttle, ACC control by citrate, insulin and AMPK (experiment, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-bb-b-06',
    section: 'bio-biochem',
    discipline: 'metabolism',
    title: 'Control of Fatty Acid Synthesis in Isolated Hepatocytes',
    passageText:
      'Fatty acids are built in the cytosol from acetyl-CoA, but in a well-fed hepatocyte most acetyl-CoA is produced in the mitochondrial matrix, by the oxidation of pyruvate, and it cannot cross the inner mitochondrial membrane. Its carbon leaves the matrix as citrate, which is formed from acetyl-CoA and oxaloacetate in the first reaction of the citric acid cycle. A carrier in the inner membrane exports citrate, and in the cytosol ATP-citrate lyase spends one ATP to cleave it back into acetyl-CoA and oxaloacetate. The oxaloacetate is reduced to malate, and malic enzyme then converts malate to pyruvate and $\\text{CO}_2$ while reducing $\\text{NADP}^+$ to NADPH; the pyruvate returns to the matrix. Hepatocytes can also make acetyl-CoA directly in the cytosol from free acetate, in a reaction catalyzed by acetyl-CoA synthetase.\n\nThe committed step of fatty acid synthesis is catalyzed by acetyl-CoA carboxylase (ACC), a biotin-containing enzyme that uses ATP to attach a carboxyl group derived from bicarbonate to acetyl-CoA, forming malonyl-CoA. Fatty acid synthase then lengthens an acetyl primer by seven two-carbon units, each donated by a molecule of malonyl-CoA and each requiring two molecules of NADPH, to give the 16-carbon product palmitate. The NADPH is supplied by malic enzyme and by the pentose phosphate pathway.\n\nACC is controlled in two ways. Citrate is an allosteric activator that promotes the assembly of inactive ACC dimers into active filaments, whereas long-chain acyl-CoA favors their disassembly. ACC is also phosphorylated by AMP-activated protein kinase (AMPK), an enzyme that is switched on when the concentration of AMP in the cell rises. Phosphorylation raises the concentration of citrate needed for activation: dephosphorylated ACC is fully active at the citrate concentration found in the cytosol of a fed cell (about 0.5 mM), whereas phosphorylated ACC is nearly inactive at that concentration and reaches full activity only near 10 mM, a level not attained in living cells. Glucagon, acting through cAMP-dependent protein kinase, also increases the phosphorylation of ACC, and insulin promotes the removal of the phosphate groups by a protein phosphatase.\n\nInvestigators incubated hepatocytes from fed rats for 60 minutes in a medium that contained 10 mM glucose and acetate labelled with $^{14}\\text{C}$, together with the additions listed in Table 1. AICAR is a compound that cells take up and convert to an analog of AMP. After the incubation, the radioactivity of the fatty acids extracted from one portion of the cells was measured. A second portion was broken open, and the ACC activity of the extract was assayed at two concentrations of citrate.\n\nIn a second experiment, hepatocytes were incubated with labelled acetate or with labelled lactate, in the presence or absence of hydroxycitrate, a competitive inhibitor of ATP-citrate lyase. Hydroxycitrate lowered the incorporation of label from lactate into fatty acids by 80% but did not change the incorporation of label from acetate.',
    figure:
      '**Table 1. Label incorporated into fatty acids, and ACC activity of cell extracts, after a 60-minute incubation (means of six preparations)**\n\n| Addition | Label in fatty acids (nmol acetate per mg protein) | ACC activity at 0.5 mM citrate (mU/mg) | ACC activity at 10 mM citrate (mU/mg) |\n|---|---|---|---|\n| None | 20 | 4 | 20 |\n| Insulin | 36 | 10 | 22 |\n| Glucagon | 6 | 1 | 19 |\n| AICAR | 5 | 1 | 19 |\n| Insulin + AICAR | 6 | 1 | 21 |',
    questions: [
      {
        question:
          'Based on the passage and Table 1, approximately what fraction of the ACC was in the dephosphorylated form in cells given no addition and in cells given insulin, respectively?',
        options: ['4% and 10%', '20% and 22%', '20% and 36%', '20% and 45%'],
        correctAnswer: 3,
        explanation:
          'Phosphorylated ACC contributes almost nothing at 0.5 mM citrate but is fully active at 10 mM, so the ratio of the two activities estimates the dephosphorylated fraction: 4/20 = 20% with no addition and 10/22 ≈ 45% with insulin. The pair 4% and 10% treats the low-citrate activities themselves as percentages. The pair 20% and 22% reads the 10 mM column, which reports total enzyme, and the pair 20% and 36% borrows the insulin value from the label-incorporation column.',
        skill: '1D covalent control of acetyl-CoA carboxylase (data interpretation)',
      },
      {
        question:
          'Which conclusion is best supported by the results obtained when insulin and AICAR were added together?',
        options: [
          'Active AMPK keeps ACC phosphorylated even when insulin is present',
          'Insulin prevents AICAR from switching on AMPK in these cells',
          'AICAR lowers fatty acid synthesis by reducing the amount of ACC',
          'Insulin and AICAR act independently, so that their effects cancel out',
        ],
        correctAnswer: 0,
        explanation:
          'With insulin plus AICAR, label incorporation (6) and ACC activity at 0.5 mM citrate (1) matched the values with AICAR alone, while activity at 10 mM citrate was unchanged; ACC was therefore present in normal amount but remained phosphorylated despite insulin. Had insulin prevented the activation of AMPK, the combined treatment would have resembled insulin alone. A loss of ACC protein would have lowered the activity measured at 10 mM citrate, which it did not. Independent, offsetting effects would have produced values near those of untreated cells, not those of AICAR alone.',
        skill: '1D AMPK and insulin in the control of lipogenesis',
      },
      {
        question:
          'Which explanation best accounts for the different effects of hydroxycitrate on the incorporation of label from the two precursors?',
        options: [
          'Acetate carbon enters palmitate only as the primer and never as malonyl-CoA',
          'Hydroxycitrate blocks the carrier that brings pyruvate into the matrix',
          'Lactate carbon reaches the acetyl-CoA pool of the cytosol mainly by way of citrate',
          'Lactate carbon is converted to acetyl-CoA by ATP-citrate lyase in the matrix',
        ],
        correctAnswer: 2,
        explanation:
          'Lactate is oxidized to pyruvate, which enters the matrix and becomes acetyl-CoA there; that carbon can reach the cytosol only as citrate, which ATP-citrate lyase must cleave, so hydroxycitrate blocks its use. Acetate is activated to acetyl-CoA in the cytosol itself and needs neither the citrate carrier nor the lyase. Acetate-derived acetyl-CoA is carboxylated to malonyl-CoA like any other acetyl-CoA and can supply all 16 carbons, not only the primer. Hydroxycitrate inhibits the lyase, not pyruvate transport, and the lyase is a cytosolic enzyme that makes acetyl-CoA from citrate, not from lactate.',
        skill: '1D citrate shuttle',
      },
      {
        question:
          'Hepatocytes that are synthesizing palmitate are supplied with bicarbonate labelled with $^{14}\\text{C}$. How many of the 16 carbons of each newly made palmitate molecule are expected to carry the label?',
        options: [
          'Seven, because each malonyl-CoA retains the carbon that ACC attached',
          'None, because each condensation expels the carbon that ACC attached',
          'One, because only the acetyl primer is carboxylated before it is used',
          'Eight, because every two-carbon unit passes through the ACC reaction',
        ],
        correctAnswer: 1,
        explanation:
          'ACC adds a carboxyl group from bicarbonate to acetyl-CoA, but when fatty acid synthase condenses malonyl-CoA with the growing chain, that same carboxyl group leaves as $\\text{CO}_2$; the decarboxylation drives the condensation, and only the two carbons that came from acetyl-CoA are kept. This is why a three-carbon donor adds a two-carbon unit. Retention of the label in each of seven malonyl units, or in all eight two-carbon units, ignores this loss. The primer is the one unit that is never carboxylated by ACC, so it cannot be a labelled position.',
        skill: '1D fatty acid synthase: fate of the malonyl carboxyl group',
      },
      {
        question:
          'AICAR might lower fatty acid synthesis through some action other than the activation of AMPK. Which additional experiment would best test this possibility?',
        options: [
          'Repeating the AICAR incubation with ten times as much labelled acetate',
          'Assaying ACC from AICAR-treated cells at 20 mM instead of 10 mM citrate',
          'Repeating the AICAR incubation in hepatocytes that lack AMPK',
          'Measuring label incorporation in AICAR-treated cells after 2 hours, not 1',
        ],
        correctAnswer: 2,
        explanation:
          'If AICAR acts only through AMPK, it should have no effect on fatty acid synthesis in cells that lack the kinase; an effect that persisted would reveal another target. Supplying more labelled acetate changes the amount of tracer, not the route by which AICAR acts. Assaying at 20 mM citrate would again report total ACC, which Table 1 already shows to be unchanged. A longer incubation would show whether the effect lasts, not what mediates it.',
        skill: '1D research design: testing the specificity of an activator',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. MOLECULAR BIOLOGY — Attenuation in the trp operon: repressor plus leader peptide, reporter fusions (experiment, table)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-bb-b-07',
    section: 'bio-biochem',
    discipline: 'molecular biology',
    title: 'Two Layers of Control in the Tryptophan Operon',
    passageText:
      'The five structural genes of the *trp* operon of *Escherichia coli* encode the enzymes that synthesize tryptophan. Expression of the operon is matched to the supply of tryptophan by two mechanisms. In the first, the Trp repressor, the product of the separate gene *trpR*, binds the operator and blocks the initiation of transcription, but only when the repressor itself has tryptophan bound to it.\n\nThe second mechanism, attenuation, acts after transcription has begun. Every transcript of the operon starts with a leader of about 160 nucleotides that precedes the first structural gene. The leader contains a short open reading frame encoding a peptide of 14 amino acids, two of which, at adjacent positions, are tryptophan. It also contains four segments, numbered 1 to 4 in the order in which they are transcribed, that can form alternative base-paired hairpins. Segment 1 includes the two tryptophan codons. Segment 3 can pair either with segment 2 or with segment 4. The hairpin formed by segments 3 and 4 is followed by a run of uracil residues, and when this hairpin forms, RNA polymerase releases the transcript before it reaches the structural genes. If segment 3 has already paired with segment 2, the 3–4 hairpin cannot form and transcription continues into the structural genes. In a leader RNA that carries no ribosome, segment 1 pairs with segment 2, and segment 3 pairs with segment 4.\n\nIn a living cell, a ribosome begins to translate the leader peptide while RNA polymerase is still transcribing the leader, and it follows closely behind the polymerase. A ribosome physically covers the stretch of RNA that it is translating, and a covered segment cannot base-pair. The position of the ribosome at the moment segment 3 emerges from the polymerase therefore decides which hairpin forms. Translation of the two tryptophan codons requires tRNA charged with tryptophan, which becomes scarce when the cell is starved of this amino acid. When charged tRNA is plentiful, the ribosome passes through segment 1 without pausing and covers part of segment 2 before segment 3 has been synthesized. When charged tRNA is scarce, the ribosome stalls at the tryptophan codons and covers segment 1 only.\n\nTo separate the contributions of the two mechanisms, investigators fused the *trp* promoter, operator, and leader to the coding sequence of *lacZ*, which encodes the enzyme β-galactosidase. A single copy of the fusion, with either a wild-type or an altered leader, was placed in the chromosome of cells that either had a functional *trpR* gene or had lost it by deletion. The resulting five strains were grown either with excess tryptophan or under tryptophan starvation, and the β-galactosidase activity of each culture was measured (Table 1).',
    figure:
      '**Table 1. β-Galactosidase activity of five reporter strains (relative units)**\n\n| Strain | *trpR* gene | Leader of the fusion | Excess tryptophan | Tryptophan starvation |\n|---|---|---|---|---|\n| 1 | Functional | Wild type | 2 | 1,000 |\n| 2 | Deleted | Wild type | 100 | 1,000 |\n| 3 | Deleted | Segment 4 deleted | 1,000 | 1,000 |\n| 4 | Functional | Segment 4 deleted | 20 | 1,000 |\n| 5 | Deleted | Start codon of the leader peptide changed from AUG to AUA | 100 | 100 |',
    questions: [
      {
        question:
          'Based on Table 1, attenuation acting alone lowers expression of the reporter in cells grown with excess tryptophan by a factor of approximately:',
        options: ['2.', '10.', '50.', '500.'],
        correctAnswer: 1,
        explanation:
          'Strains 2 and 3 both lack the repressor and differ only in whether the leader can form the 3–4 hairpin; in excess tryptophan their activities are 100 and 1,000, so attenuation alone reduces expression 10-fold. A factor of 50 is the effect of the repressor alone (strain 4 versus strain 3, 20 versus 1,000), and a factor of 500 is the combined effect of both mechanisms (strain 1 versus strain 3, 2 versus 1,000). The value 2 is the activity of strain 1 in excess tryptophan, not a ratio.',
        skill: '1B attenuation (data interpretation)',
      },
      {
        question: 'Which explanation best accounts for the results obtained with strain 5?',
        options: [
          'The leader peptide is needed to release the Trp repressor from the operator',
          'RNA polymerase needs the AUG codon in order to begin transcribing the leader',
          'An untranslated leader pairs segment 2 with segment 3 at both tryptophan levels',
          'An untranslated leader forms the 3–4 hairpin at both tryptophan levels',
        ],
        correctAnswer: 3,
        explanation:
          'Without a start codon no ribosome loads onto the leader, so the RNA folds as it does when it carries no ribosome: segment 1 pairs with 2, segment 3 pairs with 4, and most transcripts terminate at both tryptophan levels, giving the same low activity (100) that strain 2 shows in excess tryptophan. Strain 5 has no repressor, so the result cannot involve release of a repressor. AUG is read by ribosomes in mRNA and has no role in the initiation of transcription, and activity was not abolished. Pairing of segment 2 with segment 3 would prevent termination and give high activity (near 1,000), the opposite of what was observed.',
        skill: '1B attenuation: role of leader translation',
      },
      {
        question:
          'Attenuation of the kind described in the passage could not regulate a gene transcribed in the nucleus of a eukaryotic cell, because in eukaryotes:',
        options: [
          'ribosomes do not gain access to a transcript until it has left the nucleus.',
          'ribosomes cannot translate an open reading frame as short as 14 codons.',
          'RNA molecules do not fold into hairpins held together by base pairing.',
          'tRNA molecules are charged with amino acids only inside the nucleus.',
        ],
        correctAnswer: 0,
        explanation:
          'Attenuation depends on a ribosome translating the leader while RNA polymerase is still transcribing it, which is possible only where transcription and translation occur in the same compartment. In eukaryotes the transcript is made and processed in the nucleus and translated later in the cytoplasm, so a ribosome cannot influence how the nascent RNA folds at the polymerase. Eukaryotic ribosomes can translate short reading frames, and eukaryotic RNAs form hairpins readily. Aminoacyl-tRNA synthetases charge tRNA in the cytoplasm, where translation occurs.',
        skill: '1B coupling of transcription and translation in prokaryotes',
      },
      {
        question:
          'In a derivative of strain 2, the two tryptophan codons of the leader are replaced by leucine codons, and the rest of the leader is unchanged. Under which growth condition would β-galactosidase activity be expected to be highest?',
        options: [
          'Tryptophan starvation, because the repressor would leave the operator',
          'Excess leucine, because the ribosome would move quickly through segment 1',
          'Leucine starvation, because the ribosome would stall in segment 1',
          'Excess tryptophan, because the 3–4 hairpin would no longer be able to form',
        ],
        correctAnswer: 2,
        explanation:
          'The leader senses whichever charged tRNA its codons in segment 1 require. With leucine codons there, a shortage of charged leucine tRNA stalls the ribosome in segment 1, leaving segment 2 free to pair with segment 3, so the terminator hairpin does not form and expression is high. Strain 2 has no repressor, so tryptophan starvation cannot act through the operator, and the altered leader no longer responds to tryptophan. Excess leucine lets the ribosome cover segment 2, which favors the 3–4 hairpin and termination. Excess tryptophan does nothing to prevent the 3–4 hairpin, because segments 3 and 4 are intact.',
        skill: '1B attenuation: predicting the effect of a codon change',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. IMMUNOLOGY — Transplantation: HLA haplotypes, three forms of rejection, calcineurin inhibitors, GVHD (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-bb-b-08',
    section: 'bio-biochem',
    discipline: 'immunology',
    title: 'Why Grafts Are Rejected, and How Rejection Is Held Back',
    passageText:
      'A transplanted organ is recognized as foreign chiefly because of its proteins of the major histocompatibility complex (MHC), which in humans are called HLA molecules. Class I HLA molecules are found on nearly all nucleated cells, and class II molecules on dendritic cells, macrophages, and B cells. The HLA genes are the most polymorphic in the human genome, with thousands of alleles in the population. They lie close together on chromosome 6, so the set carried on one chromosome, called a haplotype, is almost always inherited as a unit, and each person expresses both the maternal and the paternal haplotype. An unusually large share of any person’s T cells, perhaps 1–10%, respond to cells bearing HLA molecules that differ from that person’s own. Even a graft whose HLA molecules are identical to those of the recipient can be rejected, though more slowly, because other polymorphic proteins of the donor yield peptides that the recipient’s T cells have never encountered.\n\nRejection takes three forms. Hyperacute rejection begins within minutes to hours of connecting the graft to the recipient’s circulation. It is caused by antibodies that were already present in the recipient’s plasma: antibodies against ABO blood-group antigens, or antibodies against HLA molecules that arose after a blood transfusion, a pregnancy, or an earlier transplant. These antibodies bind the endothelium of the graft, activate complement, and set off clotting that blocks the vessels of the organ. Acute rejection develops over days to months, as recipient T cells that recognize donor antigens multiply; cytotoxic T cells kill graft cells directly, and helper T cells recruit macrophages and support the production of new antibodies. It can usually be reversed by intensifying immunosuppression. Chronic rejection proceeds over months to years: the walls of the graft’s arteries thicken until their channels narrow, and the tissue they supply is gradually replaced by scar. Present drugs do little to stop it.\n\nThe mainstays of immunosuppression are the calcineurin inhibitors cyclosporine and tacrolimus. When a T-cell receptor binds its antigen, the concentration of $\\text{Ca}^{2+}$ in the cytosol rises and activates calcineurin, a protein phosphatase. Calcineurin removes phosphate groups from the transcription factor NFAT, which then enters the nucleus and switches on the gene for interleukin-2 (IL-2), a cytokine that the activated T cell both secretes and responds to. Because these drugs act on T cells whatever their antigen specificity, patients who take them have more infections, and more cancers caused by viruses, than other people do.\n\nTransplantation of hematopoietic stem cells poses the reverse problem. Before the transplant, which is often performed to treat leukemia, the recipient’s own marrow and immune system are destroyed by chemotherapy or irradiation. The donor’s marrow contains mature T cells as well as stem cells. In graft-versus-host disease (GVHD), these donor T cells respond to antigens of the recipient and attack the skin, the intestine, and the liver. The risk of GVHD rises with the degree of HLA disparity between donor and recipient.',
    questions: [
      {
        question:
          'Assume that the two parents of a patient carry four different HLA haplotypes between them and that no recombination occurs within the HLA region. Which relative could be HLA-identical to the patient, and with what probability?',
        options: [
          'A full sibling, with a probability of 1/4',
          'A full sibling, with a probability of 1/2',
          'A parent, with a probability of 1/2',
          'A parent, with a probability of 1/4',
        ],
        correctAnswer: 0,
        explanation:
          'Each child receives one of two haplotypes from the mother and one of two from the father, so there are four equally likely combinations, and a given sibling has a 1/4 chance of having received the same pair as the patient. A sibling has a 1/2 chance of sharing exactly one haplotype with the patient, not both. A parent passed one haplotype to the patient and, when all four parental haplotypes differ, cannot carry the haplotype that came from the other parent, so a parent always matches at exactly one haplotype and never at both.',
        skill: '3B inheritance of MHC haplotypes',
      },
      {
        question:
          'A woman who has had four pregnancies receives a kidney from an unrelated donor of her own ABO blood group. Within an hour the graft is swollen and dark, and its small vessels are filled with clots. Which test, performed before the operation, would most likely have predicted this outcome?',
        options: [
          'Mixing donor T cells with recipient T cells and measuring cell division',
          'Determining the HLA class II alleles of the donor and of the recipient',
          'Mixing recipient serum with donor lymphocytes and looking for cell lysis',
          'Mixing donor serum with recipient lymphocytes and looking for cell lysis',
        ],
        correctAnswer: 2,
        explanation:
          'The timing and the clotting point to hyperacute rejection by antibodies the recipient already had, most plausibly anti-HLA antibodies formed during her pregnancies. Such antibodies are in her serum, so exposing donor cells to recipient serum (with complement) and observing lysis would have revealed them. A culture of donor and recipient T cells measures T-cell reactivity, which underlies acute rejection, not preformed antibody. HLA typing shows which alleles differ but not whether the recipient has already made antibodies against them. Donor serum tested on recipient cells looks for antibodies in the wrong direction; the kidney brings almost no donor plasma with it.',
        skill: '3B hyperacute rejection: choosing a predictive test',
      },
      {
        question:
          'By blocking the pathway described in the passage, cyclosporine most directly prevents which step in the response of a recipient’s T cells to a graft?',
        options: [
          'Binding of the T-cell receptor to HLA molecules of the donor',
          'Rearrangement of the T-cell receptor genes within the thymus',
          'Display of donor peptides on the surface of dendritic cells',
          'Clonal expansion of T cells that have recognized antigen',
        ],
        correctAnswer: 3,
        explanation:
          'IL-2 is the growth factor that drives an antigen-activated T cell to divide; without calcineurin activity NFAT stays out of the nucleus, IL-2 is not made, and the few T cells that recognize the graft fail to multiply into an effective clone. The drug acts downstream of receptor binding, which still occurs and still raises cytosolic $\\text{Ca}^{2+}$. Receptor gene rearrangement took place during T-cell development in the thymus, long before the transplant. Antigen display by dendritic cells does not depend on calcineurin signaling in T cells.',
        skill: '3B T-cell activation and interleukin-2',
      },
      {
        question:
          'Removing mature T cells from donor marrow before transplantation lowers the incidence of GVHD in patients treated for leukemia, but it raises the rate at which the leukemia returns. Which explanation best accounts for the higher rate of relapse?',
        options: [
          'Donor stem cells become leukemic unless donor T cells are present to restrain them',
          'Donor T cells that respond to recipient antigens also kill surviving leukemic cells',
          'Recipient T cells that survive the irradiation are needed to activate the graft',
          'Leukemic cells divide faster when they take up the IL-2 left unused by T cells',
        ],
        correctAnswer: 1,
        explanation:
          'Leukemic cells that survive chemotherapy or irradiation are recipient cells and carry recipient antigens, so the same donor T cells that attack the recipient’s skin, intestine, and liver also destroy residual leukemia; removing them removes this graft-versus-leukemia effect. Relapse is a return of the recipient’s original leukemia, not a transformation of donor stem cells. Surviving recipient T cells would tend to reject the graft, not activate it, and their presence would not explain an effect of depleting donor T cells. Removing T cells lowers, rather than raises, the IL-2 available, and nothing indicates that the leukemic cells depend on it.',
        skill: '3B graft-versus-host and graft-versus-leukemia effects',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. PHYSIOLOGY — Lactase persistence, breath hydrogen after a lactose load, monosaccharide carriers (experiment, chart)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-bb-b-09',
    section: 'bio-biochem',
    discipline: 'physiology',
    title: 'Breath Hydrogen After a Lactose Load in Adults With and Without Lactase Persistence',
    passageText:
      'Dietary carbohydrate is absorbed only in the form of monosaccharides. Pancreatic amylase reduces starch to short oligosaccharides, and enzymes anchored in the brush-border membrane of the enterocytes of the small intestine complete the digestion: one group of enzymes releases glucose from the products of starch, sucrase splits sucrose into glucose and fructose, and lactase splits lactose, the disaccharide of milk, into glucose and galactose. Glucose and galactose enter the enterocyte on SGLT1, a carrier that moves each sugar molecule together with two $\\text{Na}^+$ ions. Fructose enters on a separate carrier, GLUT5, that does not use $\\text{Na}^+$. All three sugars leave the cell across its basolateral membrane by facilitated diffusion.\n\nIn most mammals, and in about two-thirds of adult humans, lactase activity falls during childhood to about one-tenth of its level in infancy, because transcription of the lactase gene declines (lactase non-persistence). In other adults, a variant in a regulatory sequence upstream of the gene keeps transcription high throughout life (lactase persistence). Lactose that escapes digestion cannot be absorbed. It passes into the colon, where bacteria ferment it to short-chain fatty acids, carbon dioxide, and hydrogen gas ($\\text{H}_2$). Human cells produce no $\\text{H}_2$; part of the gas made by bacteria diffuses into the blood and is exhaled. A rise in breath $\\text{H}_2$ of at least 20 parts per million (ppm) above the fasting value after a dose of lactose is the usual criterion for lactose malabsorption.\n\nResearchers genotyped healthy adults and recruited 12 with a persistence genotype and 12 with a non-persistence genotype. After an overnight fast, each subject drank 50 g of lactose dissolved in water, and breath $\\text{H}_2$ was measured every 30 minutes for 3 hours. One week later, the non-persistent subjects repeated the test with a drink that contained 25 g of glucose and 25 g of galactose in place of the lactose (Figure 1). During the lactose test, plasma glucose rose by a mean of 32 mg/dL in the persistent group and by 4 mg/dL in the non-persistent group. Ten of the non-persistent subjects, and none of the persistent subjects, reported abdominal cramps, bloating, or watery stools within 4 hours of the lactose drink.\n\nThe non-persistent subjects then consumed 25 g of lactose every day for 14 days, after which the 50-g lactose test was repeated. Their peak breath $\\text{H}_2$ was less than half of its earlier value, and they reported fewer symptoms. Lactase activity in biopsies of the jejunal mucosa, measured in six of these subjects before and after the 14 days, had not changed, whereas the activity of β-galactosidase in their feces, an enzyme of bacterial origin that hydrolyzes lactose, had tripled.',
    chart: {
      title: 'Figure 1. Mean breath hydrogen after a test drink taken at t = 0 following an overnight fast',
      kind: 'line',
      xLabel: 'Time after the drink',
      xUnit: 'min',
      yLabel: 'Breath hydrogen',
      yUnit: 'ppm',
      xValues: [0, 30, 60, 90, 120, 150, 180],
      yValues: [8, 9, 22, 40, 62, 70, 64],
      seriesLabel: 'Non-persistent, lactose',
      comparisonSeries: [
        { label: 'Persistent, lactose', yValues: [6, 6, 7, 9, 11, 10, 9] },
        { label: 'Non-persistent, glucose + galactose', yValues: [8, 8, 7, 7, 6, 6, 6] },
      ],
    },
    questions: [
      {
        question:
          'According to Figure 1 and the criterion stated in the passage, at which sampling time did the mean breath $\\text{H}_2$ of the non-persistent group first indicate lactose malabsorption?',
        options: ['30 minutes', '60 minutes', '90 minutes', '120 minutes'],
        correctAnswer: 2,
        explanation:
          'The criterion is a rise of at least 20 ppm above the fasting value, which was 8 ppm, so the threshold is 28 ppm. The 60-minute value of 22 ppm is a rise of only 14 ppm; choosing it mistakes the criterion for an absolute value of 20 ppm. The 90-minute value of 40 ppm is a rise of 32 ppm and is the first to qualify. At 30 minutes breath $\\text{H}_2$ had barely changed, and 120 minutes is later than the first qualifying sample.',
        skill: '3B breath hydrogen test (data interpretation)',
      },
      {
        question:
          'Suppose the non-persistent subjects had taken the 50 g of lactose with a large meal of fat and protein, which slows the emptying of the stomach. Compared with the lactose curve of Figure 1, the breath $\\text{H}_2$ curve would most likely show:',
        options: [
          'an earlier rise, because the meal would stimulate the bacteria of the colon.',
          'a later rise, because the lactose would take longer to arrive in the colon.',
          'no rise at all, because the meal would induce lactase in the enterocytes.',
          'no change, because the stomach has no influence on events in the colon.',
        ],
        correctAnswer: 1,
        explanation:
          'In Figure 1 breath $\\text{H}_2$ stays near the fasting value for about an hour, the time needed for unabsorbed lactose to travel from the stomach through the small intestine to the bacteria of the colon. Slower gastric emptying delays this arrival, so the rise would begin later. Fat and protein are digested and absorbed in the small intestine and do not feed colonic bacteria ahead of the lactose. Lactase is not induced by a meal; its activity did not change even after 14 days of daily lactose. Because the timing of the rise depends on transit from the stomach, the stomach does influence the curve.',
        skill: '3B gastric emptying and intestinal transit',
      },
      {
        question:
          'The test with the glucose–galactose drink allowed the researchers to exclude which alternative explanation for the rise in breath $\\text{H}_2$ that followed the lactose drink in the non-persistent subjects?',
        options: [
          'They absorb glucose and galactose poorly, whatever the source of the sugars',
          'They produce a form of lactase that has a reduced affinity for lactose',
          'They carry larger numbers of hydrogen-producing bacteria in the colon',
          'They empty the stomach more rapidly than the persistent subjects do',
        ],
        correctAnswer: 0,
        explanation:
          'If the carrier for glucose and galactose were defective, these sugars would reach the colon and be fermented whether they were swallowed as monosaccharides or released from lactose; the flat curve after the glucose–galactose drink shows that the monosaccharides were absorbed, placing the defect at the hydrolysis of lactose. A lactase with poor affinity for lactose would also give a flat curve after monosaccharides, so that test cannot exclude it. Absorbed sugars never reach the colon, so the test says nothing about the number of colonic bacteria. Gastric emptying was not measured, and a faster emptying would not explain why only lactose raised breath $\\text{H}_2$.',
        skill: '3B research design: purpose of a control condition',
      },
      {
        question: 'Which explanation best accounts for the findings obtained after the 14 days of daily lactose?',
        options: [
          'Transcription of the lactase gene was induced in the jejunal enterocytes',
          'Additional SGLT1 carriers were inserted and absorbed the intact lactose',
          'Hydrogen made in the colon was no longer able to diffuse into the blood',
          'Colonic bacteria that ferment lactose without releasing hydrogen multiplied',
        ],
        correctAnswer: 3,
        explanation:
          'Mucosal lactase was unchanged, but bacterial β-galactosidase in the feces tripled while $\\text{H}_2$ output fell: the colonic population had shifted toward organisms that hydrolyze and ferment lactose to products other than hydrogen gas, which also lessens symptoms. Induction of the lactase gene is ruled out by the unchanged activity in the biopsies. SGLT1 carries monosaccharides, not disaccharides, so no number of carriers would absorb intact lactose. Nothing would be expected to stop a small, uncharged gas from crossing the colonic wall, and such a block would not explain the rise in bacterial enzyme activity.',
        skill: '3B colonic fermentation and adaptation of the microbiota',
      },
      {
        question:
          'An infant who has inherited two loss-of-function alleles of the gene for SGLT1 develops severe watery diarrhea when fed milk. Which carbohydrate could this infant absorb normally?',
        options: ['Maltose', 'Fructose', 'Galactose', 'Starch'],
        correctAnswer: 1,
        explanation:
          'Fructose crosses the apical membrane on GLUT5, a carrier that does not depend on SGLT1 or on $\\text{Na}^+$, so its absorption is unaffected. Maltose and starch are digested to glucose, and galactose is itself a substrate of SGLT1; without the carrier these sugars stay in the lumen, where they hold water osmotically and are fermented in the colon, as the glucose and galactose released from the lactose of milk do in this infant.',
        skill: '3B monosaccharide absorption',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. GENETICS — Natural selection and fitness: modes of selection, heterozygote advantage, frequency dependence, resistance (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl7-bb-b-10',
    section: 'bio-biochem',
    discipline: 'genetics',
    title: 'How Selection Removes Variation, and How It Preserves It',
    passageText:
      'Natural selection occurs whenever heritable differences among individuals cause differences in fitness, the number of offspring that an individual contributes to the next generation relative to the contributions of other members of the population. Selection on a quantitative trait is described by what it does to the distribution of phenotypes. Under directional selection, individuals at one extreme are favored, and the mean shifts from generation to generation. Under stabilizing selection, individuals near the mean are favored, and the variance narrows while the mean stays where it is. Under disruptive selection, both extremes are favored over intermediate individuals, and the distribution can become bimodal.\n\nSelection does not always remove variation. When heterozygotes are fitter than both homozygotes, both alleles are retained indefinitely. The best-studied human example is the S allele of the β-globin gene. Homozygotes (SS) have sickle-cell disease, which is usually fatal in childhood where medical care is unavailable. Heterozygotes (AS) are healthy, and they are much less likely than AA individuals to die of malaria caused by *Plasmodium falciparum*. If the fitnesses of the genotypes AA, AS, and SS are written as $1 - s$, 1, and $1 - t$, the frequency of the S allele settles at $s/(s + t)$, the value at which the alleles removed by the deaths of each kind of homozygote are in balance.\n\nVariation is also preserved when the fitness of a phenotype depends on how common it is. In negative frequency-dependent selection, a phenotype is at an advantage while it is rare and loses that advantage as it spreads. Predators, for example, often learn to search for the commonest color form of their prey and overlook unusual forms; once a formerly rare form has become common, it in turn becomes the target.\n\nThe spread of antibiotic resistance is directional selection that can be watched as it happens. Mutations that confer resistance arise spontaneously, at a low rate, whether or not the drug is present. In a patient or an environment that contains the drug, the rare resistant cells survive, reproduce, and soon predominate. Resistance usually has a price: an altered ribosome or enzyme often works less well than the original, and a plasmid that carries resistance genes must be replicated at every division. In the absence of the drug, resistant strains therefore tend to grow more slowly than sensitive ones, although further mutations can reduce this cost.\n\nFinally, selection acts only weakly on alleles whose harmful effects are seldom exposed. A harmful recessive allele that has become rare is carried almost entirely by heterozygotes, in whom it has no effect, and new copies are created continually by mutation. The frequency of such an allele therefore reflects a balance between the rate at which mutation supplies it and the rate at which selection removes it.',
    questions: [
      {
        question:
          'In a region where malaria is common, the relative fitnesses of the genotypes AA, AS, and SS are estimated to be 0.85, 1.00, and 0.25. According to the passage, the frequency of the S allele in this population is expected to settle near:',
        options: ['0.03.', '0.15.', '0.17.', '0.83.'],
        correctAnswer: 2,
        explanation:
          'Here $s = 1 - 0.85 = 0.15$ and $t = 1 - 0.25 = 0.75$, so the expected frequency is $0.15/(0.15 + 0.75) = 0.15/0.90 \\approx 0.17$. The value 0.15 is $s$ alone, without the denominator. The value 0.83 is the corresponding frequency of the A allele, $t/(s + t)$. The value 0.03 is approximately $q^2$, the proportion of SS newborns expected at that allele frequency, not the allele frequency itself.',
        skill: '1C heterozygote advantage (calculation)',
      },
      {
        question:
          'In a lake, individuals of a scale-eating fish have mouths that open either to the left or to the right, a heritable difference. Left-opening fish attack the right flank of their prey and right-opening fish the left flank, and prey guard the flank that has been attacked more often. In a year in which 65% of the scale-eaters are left-opening, which outcome is expected?',
        options: [
          'Right-opening fish will be the fitter form until the two forms are about equally common',
          'Left-opening fish will be the fitter form until the right-opening form has disappeared',
          'The two forms will be equally fit, because both feed on the same species of prey',
          'Heterozygous fish will be the fittest, because they can attack from either side',
        ],
        correctAnswer: 0,
        explanation:
          'When left-opening fish are in the majority, prey are attacked mostly on the right flank and guard it, so the rarer right-opening fish, which strike the unguarded left flank, feed and reproduce more successfully; their advantage shrinks as their frequency approaches one-half. This is negative frequency-dependent selection, and it holds both forms in the population. The commoner form is the one at a disadvantage, so it cannot drive the other to extinction. Feeding on the same prey species does not make the forms equally fit, because success depends on which flank the prey are guarding. The scenario describes two forms and gives no indication of a heterozygote that attacks from both sides.',
        skill: '1C frequency-dependent selection',
      },
      {
        question:
          'About $10^8$ bacteria that have never been exposed to streptomycin are spread on a drug-free plate. After several hours of growth, a velvet pad is pressed onto the plate and then onto three plates that contain streptomycin, transferring cells to the same relative positions on each. Which result would show that resistant mutants existed before any contact with the drug?',
        options: [
          'Resistant colonies arise at different positions on each of the three plates',
          'Resistant colonies arise only on the first plate that the velvet touched',
          'Resistant colonies become more numerous the longer the plates are incubated',
          'Resistant colonies arise at the same positions on all three of the plates',
        ],
        correctAnswer: 3,
        explanation:
          'If resistant cells were already growing as small clones at fixed spots on the drug-free plate, the velvet would carry cells from each clone to the matching spot on every drug plate, so colonies would appear at the same positions on all three. If the drug instead induced resistance in occasional cells after transfer, resistance would arise independently on each plate and the positions would not coincide. Colonies only on the first plate would reflect how many cells the velvet delivered, not when the mutations occurred. A number of colonies that grows with incubation time would suggest mutations arising during exposure to the drug.',
        skill: '1C research design: mutation before selection',
      },
      {
        question:
          'A dominant allele causes a fatal degenerative disease whose first symptoms typically appear at about 45 years of age. Which explanation best accounts for the failure of natural selection to eliminate this allele?',
        options: [
          'Dominant alleles are hidden from selection in heterozygous carriers',
          'Carriers have usually had children before the allele causes harm',
          'Selection can remove a harmful allele only if that allele is recessive',
          'Heterozygous carriers are protected against a common infectious disease',
        ],
        correctAnswer: 1,
        explanation:
          'Fitness is measured in offspring contributed to the next generation, and an allele whose effects begin after most reproduction is complete barely lowers the number of children its carriers leave, so selection against it is very weak. A dominant allele is expressed in heterozygotes and is therefore not hidden; it is recessive alleles that escape selection in carriers. Selection removes dominant harmful alleles more efficiently than recessive ones when they act before reproduction. Nothing in the description suggests a heterozygote advantage of the kind seen with the S allele.',
        skill: '1C fitness as reproductive success',
      },
    ],
  },
]

export const FL7_BIO_BIOCHEM_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl7-bb-b-d01',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'In Guillain–Barré syndrome, an immune attack strips the myelin from peripheral nerves but leaves the myelin of the brain and spinal cord intact. Which cells produce the myelin that is lost, and how do they form it?',
    options: [
      'Schwann cells, each of which wraps one segment of one axon',
      'Schwann cells, each of which wraps segments of several axons',
      'Oligodendrocytes, each of which wraps one segment of one axon',
      'Astrocytes, each of which wraps the segments of several axons',
    ],
    correctAnswer: 0,
    explanation:
      'Myelin of the peripheral nervous system is made by Schwann cells, and each Schwann cell forms a single internode around one axon. Wrapping segments of several axons is the arrangement of oligodendrocytes, the myelinating cells of the central nervous system, which are spared in this disorder. Oligodendrocytes are not found in peripheral nerves, and they do not form one segment each. Astrocytes are central glia that support neurons and help maintain the blood–brain barrier; they do not form myelin.',
    skill: '3A glial cells',
  },
  {
    id: 'fl7-bb-b-d02',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'After surgical removal of the posterior lobe of the pituitary, with the hypothalamus left undamaged, many patients excrete large volumes of dilute urine for a few weeks and then recover the ability to secrete antidiuretic hormone (ADH). Which statement best explains the recovery?',
    options: [
      'ADH is made by cells of the anterior pituitary, which was left in place',
      'ADH is made by the kidney whenever the plasma osmolarity begins to rise',
      'ADH is stored in the anterior pituitary, which takes over its release',
      'ADH is made in hypothalamic neurons, whose cut axons still release it',
    ],
    correctAnswer: 3,
    explanation:
      'ADH is synthesized in the cell bodies of hypothalamic neurons and transported down their axons; the posterior pituitary is only the site where the axon terminals release it. When the terminals are removed but the cell bodies survive, the hormone is still made and can be released from the shortened axons into nearby capillaries. The anterior pituitary neither makes nor stores ADH; its hormones (such as growth hormone, prolactin, TSH, and ACTH) are made by its own endocrine cells. The kidney is the target of ADH, not a source of it.',
    skill: '3B anterior vs posterior pituitary',
  },
  {
    id: 'fl7-bb-b-d03',
    section: 'bio-biochem',
    discipline: 'physiology',
    question:
      'Two patients each have a core temperature of 39.5 °C. In the first, a bacterial infection has just raised the hypothalamic set point to 40 °C. The second is a runner who has been exercising in hot weather and whose set point remains 37 °C. Which responses are expected at this moment?',
    options: [
      'Shivering and cutaneous vasoconstriction in both of the patients',
      'Sweating and cutaneous vasodilation in both of the patients',
      'Shivering in the infected patient and sweating in the runner',
      'Sweating in the infected patient and shivering in the runner',
    ],
    correctAnswer: 2,
    explanation:
      'The hypothalamus compares core temperature with its set point. In the infected patient core temperature (39.5 °C) is below the new set point (40 °C), so heat-conserving and heat-producing responses, vasoconstriction and shivering, are switched on, and the patient feels cold. In the runner core temperature is above an unchanged set point, so heat-losing responses, vasodilation and sweating, are active. The same response in both patients would require the same relation between temperature and set point, and the reversed pairing assigns each patient the response appropriate to the other.',
    skill: '3B fever vs hyperthermia',
  },
  {
    id: 'fl7-bb-b-d04',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'During a prolonged fast, the carbon skeletons of amino acids released from muscle protein are used by the liver to make glucose. The carbon skeleton of which amino acid CANNOT make a net contribution to glucose?',
    options: ['Alanine', 'Leucine', 'Aspartate', 'Glutamate'],
    correctAnswer: 1,
    explanation:
      'Leucine is degraded entirely to acetyl-CoA and acetoacetate, and animals cannot convert acetyl-CoA into a net gain of oxaloacetate or pyruvate, so leucine is purely ketogenic. Alanine is transaminated to pyruvate, aspartate to oxaloacetate, and glutamate to α-ketoglutarate, a citric acid cycle intermediate that is converted to oxaloacetate; each of these can enter gluconeogenesis.',
    skill: '1D ketogenic vs glucogenic amino acids',
  },
  {
    id: 'fl7-bb-b-d05',
    section: 'bio-biochem',
    discipline: 'biochemistry',
    question:
      'β-Oxidation converts palmitate entirely to acetyl-CoA, which enters the citric acid cycle by condensing with oxaloacetate. Animals nevertheless cannot make net glucose from palmitate, because:',
    options: [
      'β-oxidation takes place in the cytosol, apart from the enzymes of the cycle.',
      'acetyl-CoA inhibits pyruvate carboxylase, which gluconeogenesis requires.',
      'oxaloacetate made in the cycle cannot leave the mitochondrion in any form.',
      'two carbons leave as carbon dioxide for each acetyl group that enters the cycle.',
    ],
    correctAnswer: 3,
    explanation:
      'Each turn of the cycle takes in two carbons as acetyl-CoA and releases two as $\\text{CO}_2$, regenerating exactly the one oxaloacetate that was consumed; no additional oxaloacetate is produced to be drawn off for gluconeogenesis, and animals have no route from acetyl-CoA back to pyruvate. β-Oxidation occurs in the mitochondrial matrix, alongside the cycle. Acetyl-CoA activates pyruvate carboxylase; it does not inhibit it. Oxaloacetate carbon does leave the mitochondrion, as malate or aspartate, during gluconeogenesis from other precursors.',
    skill: '1D fatty acids and gluconeogenesis',
  },
  {
    id: 'fl7-bb-b-d06',
    section: 'bio-biochem',
    discipline: 'genetics',
    question:
      'Hemophilia A is an X-linked recessive disorder. An unaffected woman whose father had hemophilia A has children with a man who does not have the disorder. What is the probability that a son of this couple will have hemophilia A, and what is the probability that a daughter will?',
    options: [
      'Sons 1/2; daughters 0',
      'Sons 1/2; daughters 1/2',
      'Sons 1/4; daughters 0',
      'Sons 1; daughters 1/2',
    ],
    correctAnswer: 0,
    explanation:
      'The woman received her father’s only X chromosome, so she is a carrier. Each son receives his X from her and has a 1/2 chance of receiving the one with the mutant allele, in which case he is affected. Each daughter receives a normal X from her unaffected father, so no daughter is affected, although half are carriers. A daughter’s risk of 1/2 confuses being a carrier with being affected. A son’s risk of 1/4 is the chance that any given child is an affected son, not the risk for a child known to be a son. A risk of 1 for sons would require the mother to be homozygous for the mutant allele.',
    skill: '1C X-linked recessive inheritance',
  },
  {
    id: 'fl7-bb-b-d07',
    section: 'bio-biochem',
    discipline: 'microbiology',
    question:
      'Three bacterial isolates are each mixed into a tube of soft agar in which oxygen is present only in the top few millimeters. Isolate X grows only at the top; isolate Y grows only in the lower part of the tube; isolate Z grows throughout the tube, most densely at the top. How should the isolates be classified?',
    options: [
      'X, obligate anaerobe; Y, obligate aerobe; Z, facultative anaerobe',
      'X, obligate aerobe; Y, facultative anaerobe; Z, obligate anaerobe',
      'X, obligate aerobe; Y, obligate anaerobe; Z, facultative anaerobe',
      'X, facultative anaerobe; Y, obligate anaerobe; Z, obligate aerobe',
    ],
    correctAnswer: 2,
    explanation:
      'An organism that grows only where oxygen is present requires it and is an obligate aerobe (X); one that grows only where oxygen is absent is killed or inhibited by it and is an obligate anaerobe (Y). An organism that grows at every depth can live without oxygen, and its denser growth at the top shows that it uses oxygen when it is available, because aerobic respiration yields more ATP than fermentation; it is a facultative anaerobe (Z). Each of the other assignments gives at least one isolate a requirement that conflicts with where it grew, for example an obligate anaerobe growing at the oxygenated surface.',
    skill: '2B oxygen requirements of bacteria',
  },
]
