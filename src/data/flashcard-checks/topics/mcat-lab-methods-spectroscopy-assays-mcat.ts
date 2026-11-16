import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-lab-methods-spectroscopy-assays-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`State Beer's law.`]: {
    question: r`A 40 μM sample of a pigment gives an absorbance of 0.80 when the light path is 1.0 cm. A different dilution of that pigment gives an absorbance of 0.20 when the light path is 0.50 cm. How concentrated is the second sample?`,
    options: [r`10 μM`, r`20 μM`, r`5 μM`, r`80 μM`],
    correctAnswer: 1,
    explanation: r`From A = εlc, the first reading gives ε = 0.80/(1.0 cm × 40 μM) = 0.020 per μM per cm. Then c = 0.20/(0.020 × 0.50) = 20 μM. 10 μM ignores the shorter path length, and 5 μM corrects for the path in the wrong direction. 80 μM divides the absorbances the wrong way round as well.`,
  },
  [r`Distinguish Southern, Northern, and Western blots.`]: {
    question: r`A researcher needs to show that a drug lowers the amount of a kinase polypeptide itself in treated cells. Which blot and which probe are needed?`,
    options: [r`Western blot, probed with a labeled DNA strand`, r`Northern blot, probed with a labeled antibody`, r`Southern blot, probed with a labeled DNA strand`, r`Western blot, probed with a labeled antibody`],
    correctAnswer: 3,
    explanation: r`The target is a protein, so the blot is a Western, and proteins are detected with an antibody because they have no sequence for a nucleic acid probe to pair with. A DNA probe works only on the Southern and Northern blots. Those two report on the gene and on its mRNA, not on how much protein is present.`,
  },
  [r`What key reagent makes PCR possible?`]: {
    question: r`A student sets up PCR with a DNA polymerase purified from E. coli, which loses its activity above about 50 °C. The enzyme is added once at the start. What is found after 30 cycles?`,
    options: [r`Almost no product, because the enzyme is destroyed in the first 95 °C step`, r`A normal yield, because the primers alone copy the template in each cycle`, r`A normal yield, because the enzyme refolds fully at each annealing step`, r`Almost no product, because the template cannot be melted without Taq`],
    correctAnswer: 0,
    explanation: r`Every cycle begins by heating to about 95 °C to separate the strands, and an ordinary polymerase is denatured by that step, so it cannot extend the primers. This is why a heat-stable enzyme such as Taq is used. Primers cannot copy DNA by themselves, heat-denatured enzymes do not reliably refold, and heat melts the template with no enzyme involved.`,
  },
  [r`What three pieces of information does a proton NMR spectrum provide?`]: {
    question: r`A proton NMR spectrum shows only two signals: a triplet at 1.2 ppm that integrates for 3 H and a quartet at 3.5 ppm that integrates for 2 H. Which fragment accounts for them?`,
    options: [r`CH₃OCH₂–`, r`(CH₃)₂CHO–`, r`CH₃CH₂O–`, r`(CH₃)₃CO–`],
    correctAnswer: 2,
    explanation: r`Three protons split into a triplet have 2 neighbors, and two protons split into a quartet have 3 neighbors, which is a CH₃ next to a CH₂. The CH₂ sits downfield at 3.5 ppm because it is bonded to oxygen. With oxygen between the CH₃ and the CH₂, both would be singlets. An isopropyl group gives a 6 H doublet, and a tert-butyl group gives one 9 H singlet.`,
  },
  [r`UV-Vis absorbance is most informative about what structural feature, and what law quantifies it?`]: {
    question: r`Which of these compounds absorbs ultraviolet light at the longest wavelength?`,
    options: [r`1,3-Butadiene`, r`1,5-Hexadiene`, r`1,3,5-Hexatriene`, r`Cyclohexene`],
    correctAnswer: 2,
    explanation: r`The longer the conjugated system, the smaller the HOMO-LUMO gap and the longer the wavelength absorbed. 1,3,5-Hexatriene has three conjugated double bonds, more than 1,3-butadiene's two. The two double bonds of 1,5-hexadiene are separated by CH₂ groups, so they are isolated and absorb like the single double bond of cyclohexene.`,
  },
  [r`In mass spectrometry the molecular ion peak gives the {{c1::molecular weight}}, and an M+2 peak nearly equal in height indicates {{c2::bromine}}.`]: {
    question: r`A mass spectrum shows a molecular ion M and an M+2 peak of almost exactly the same height. Which compound fits?`,
    options: [r`Bromobenzene, C₆H₅Br`, r`Chlorobenzene, C₆H₅Cl`, r`Fluorobenzene, C₆H₅F`, r`Iodobenzene, C₆H₅I`],
    correctAnswer: 0,
    explanation: r`Bromine is about half ⁷⁹Br and half ⁸¹Br, so a compound with one bromine shows M and M+2 peaks of nearly equal height. Chlorine is about 3 parts ³⁵Cl to 1 part ³⁷Cl, so its M+2 peak is only a third as tall as M. Fluorine and iodine each have a single stable isotope and give no significant M+2 peak.`,
  },
  [r`In differential centrifugation, in what order do cellular components pellet as speed is increased?`]: {
    question: r`A cell homogenate is spun at 1,000 g to give pellet P1. The supernatant is spun at 20,000 g to give pellet P2, and that supernatant is spun at 100,000 g to give pellet P3 and a final supernatant S. Where is most of the activity of an enzyme of the citric acid cycle?`,
    options: [r`P1, the 1,000 g pellet`, r`P3, the 100,000 g pellet`, r`S, the final supernatant`, r`P2, the 20,000 g pellet`],
    correctAnswer: 3,
    explanation: r`The citric acid cycle runs in the mitochondrial matrix, and mitochondria pellet at the intermediate speed, after the nuclei and before the small particles. The 1,000 g pellet holds nuclei and unbroken cells, and the 100,000 g pellet holds membrane fragments and ribosomes. The final supernatant holds the soluble cytosolic enzymes, such as those of glycolysis.`,
  },
  [r`Density-gradient (isopycnic) centrifugation separates particles by {{c1::buoyant density}}, each band settling where its density matches the medium.`]: {
    question: r`A sucrose gradient running from 1.10 to 1.30 g/mL is spun until nothing moves any more. Organelle X has a density of 1.18 g/mL and is large; organelle Y has a density of 1.23 g/mL and is much smaller. What is seen?`,
    options: [r`X bands below Y, because the larger particle sediments farther down`, r`X bands above Y, because the final position depends on density alone`, r`X and Y pellet together, because both are denser than plain water`, r`X and Y band together, because the smaller one makes up the distance`],
    correctAnswer: 1,
    explanation: r`At equilibrium each particle sits where the gradient's density equals its own, so X stops at 1.18 g/mL, higher in the tube than Y at 1.23 g/mL. Size affects only how quickly a particle gets to its band, not where the band is. Neither pellets, because the gradient extends to 1.30 g/mL, denser than both.`,
  },
  [r`Why is the sedimentation coefficient in Svedberg units not additive?`]: {
    question: r`The two subunits of a eukaryotic ribosome sediment at 60S and 40S. Which value is most reasonable for the intact ribosome, and why?`,
    options: [r`80S, since S reflects shape as well as mass`, r`100S, since S values add the way masses do`, r`20S, since the smaller value is subtracted`, r`50S, since the two values are averaged out`],
    correctAnswer: 0,
    explanation: r`The sedimentation coefficient depends on mass and on shape through frictional drag, so joining two subunits gives less than the sum of their S values: 80S, not 100S. Adding the values treats S as if it were mass. The assembled particle is heavier than either subunit, so it cannot sediment more slowly than the 60S subunit does.`,
  },
  [r`Southern blotting detects {{c1::DNA}}, Northern blotting detects {{c2::RNA}}, and Western blotting detects protein using antibodies.`]: {
    question: r`Total RNA from a cell line is separated on a gel and moved to a membrane, which is then probed with labeled single-stranded DNA complementary to gene G. A band appears. Which blot is this, and what does the band show?`,
    options: [r`A Southern blot; the band shows that gene G is in the genome`, r`A Western blot; the band shows that gene G is translated`, r`A Southern blot; the band shows that gene G is transcribed`, r`A Northern blot; the band shows that gene G is transcribed`],
    correctAnswer: 3,
    explanation: r`The blot is named for the molecule on the membrane, not for the probe: RNA on the membrane makes it a Northern, and a band means the cells contain the transcript. A Southern has DNA on the membrane and shows that a sequence is present in the genome. A Western detects protein and needs an antibody, not a nucleic acid probe.`,
  },
  [r`How does a sandwich ELISA generate a quantitative signal?`]: {
    question: r`In a sandwich ELISA, a technician forgets the enzyme-linked detection antibody but adds the substrate as usual. What do the wells that hold a lot of antigen show?`,
    options: [r`Strong color, because the antigen itself converts the substrate`, r`Strong color, because the capture antibody carries the enzyme`, r`No color, because no enzyme is present to convert the substrate`, r`No color, because the antigen could not bind the capture antibody`],
    correctAnswer: 2,
    explanation: r`The colored product is made only by the enzyme attached to the second antibody, so without that antibody there is no signal however much antigen was captured. The antigen and the capture antibody have no enzyme activity of their own. The antigen still binds the capture antibody normally: that step does not depend on the detection antibody.`,
  },
  [r`Why must a spectrophotometer be blanked before a sample's absorbance is measured?`]: {
    question: r`An assay reagent absorbs a little light at the wavelength used. With the instrument zeroed on water, a tube of reagent alone reads 0.12 and a tube of reagent plus analyte reads 0.57. What absorbance is due to the analyte?`,
    options: [r`0.57`, r`0.45`, r`0.69`, r`0.12`],
    correctAnswer: 1,
    explanation: r`The reagent-only tube is the blank, and its 0.12 is present in the sample reading too, so the analyte accounts for 0.57 − 0.12 = 0.45. Reporting 0.57 leaves the reagent's absorbance in and overstates the analyte. 0.69 adds the blank instead of subtracting it, and 0.12 is the blank itself.`,
  },
  [r`What does a standard curve accomplish in a quantitative assay, and what is its limitation?`]: {
    question: r`A standard curve is linear up to A = 1.0 and follows A = 0.020 × c, with c in μg/mL. An unknown reads above the linear range, so it is diluted 1:10 and then reads 0.40. What is the concentration of the original sample?`,
    options: [r`200 μg/mL`, r`20 μg/mL`, r`2 μg/mL`, r`2,000 μg/mL`],
    correctAnswer: 0,
    explanation: r`The diluted sample is 0.40/0.020 = 20 μg/mL, and the original was ten times more concentrated: 200 μg/mL. 20 μg/mL forgets to undo the dilution, and 2 μg/mL divides by the dilution factor instead of multiplying. 2,000 μg/mL applies the factor of ten twice.`,
  },
  [r`In IR, a strong sharp band near {{c1::1700}} cm$^{-1}$ signals a C=O, while a broad band across 3200-3600 signals {{c2::O-H}}.`]: {
    question: r`Cyclohexanol is oxidized to cyclohexanone. Which change in the IR spectrum shows that the reaction is complete?`,
    options: [r`The sharp band near 1700 is gone and a broad 3200–3600 band has appeared`, r`The broad 3200–3600 band and a sharp band near 1700 are both present`, r`The broad 3200–3600 band is gone and a sharp band near 1700 has appeared`, r`The broad 3200–3600 band and the sharp band near 1700 are both absent`],
    correctAnswer: 2,
    explanation: r`The alcohol's O-H stretch is the broad band at 3200–3600 cm⁻¹, and the ketone's C=O stretch is the strong sharp band near 1700 cm⁻¹. Complete oxidation removes the first and creates the second. The reverse change would be a reduction, both bands together means alcohol is left over (or a carboxylic acid), and neither band means no alcohol and no ketone.`,
  },
  [r`In an assay, a {{c1::negative}} control contains everything except the variable of interest and should produce no signal.`]: {
    question: r`A PCR test for a pathogen includes one tube that has every reagent but contains water in place of the sample DNA. After the run, that tube shows a strong band. What follows?`,
    options: [r`The run is valid; the band proves that the reagents are working`, r`The run is valid; the band is the signal expected from this tube`, r`The run is invalid; the polymerase must have been inactive`, r`The run is invalid; a reagent is likely contaminated with template`],
    correctAnswer: 3,
    explanation: r`This tube is the negative control: it lacks the one thing being tested for, so it should give no signal. A band there means template got in from somewhere else, so a band in a patient's tube can no longer be trusted. Showing that the reagents work is the job of the positive control, and an inactive polymerase would give no band at all.`,
  },
}
