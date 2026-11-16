import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-lab-methods-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is the principle of size-exclusion chromatography?`]: {
    question: r`A gel-filtration column is packed with beads whose pores admit proteins of 10 to 100 kDa. One protein in a sample comes off in the very first fractions, before everything else. What does this show about it?`,
    options: [r`It is smaller than about 10 kDa and slipped freely through the pores`, r`It carries a strong net charge and was repelled by the bead surface`, r`It is larger than about 100 kDa and was shut out of the bead pores`, r`It bound a ligand on the beads and was then released by the buffer`],
    correctAnswer: 2,
    explanation: r`A molecule too large to enter the pores travels only through the space between the beads, the shortest path, so it elutes first. A protein under 10 kDa explores the whole pore volume and elutes last, not first. Charge repulsion describes ion exchange and ligand binding describes affinity chromatography, neither of which is how this column separates.`,
  },
  [r`How does isoelectric focusing separate proteins?`]: {
    question: r`Two forms of an enzyme have the same mass, but one has a lysine where the other has a glutamate. Which method separates them, and why?`,
    options: [r`Isoelectric focusing, because the swap changes the protein's pI`, r`SDS-PAGE, because the swap changes the protein's net charge`, r`Size exclusion, because the swap changes the protein's mass`, r`Dialysis, because the swap changes the protein's solubility`],
    correctAnswer: 0,
    explanation: r`Replacing an acidic side chain with a basic one raises the pI, so the two forms stop at different places in a pH gradient. SDS-PAGE cannot see the change because SDS swamps the native charge. The masses are stated to be equal, so size exclusion fails, and dialysis only separates large molecules from small ones.`,
  },
  [r`What does gel electrophoresis separate by, and which way does DNA move?`]: {
    question: r`A student loads DNA samples into wells that sit at the end of an agarose gel nearest the positive electrode, then runs the gel for 30 minutes. What is seen when the gel is stained?`,
    options: [r`Normal bands in the gel, because DNA moves toward the negative electrode`, r`Normal bands in the gel, because only the largest fragments are lost`, r`No bands in the gel, because DNA is uncharged and stayed in the wells`, r`No bands in the gel, because the DNA ran out of the wells into the buffer`],
    correctAnswer: 3,
    explanation: r`DNA is negatively charged and moves toward the positive electrode, so wells placed at the positive end send it straight out of the gel. Expecting normal bands assumes DNA moves toward the negative electrode, which is backward. Fragment size sets how fast DNA moves, not its direction, and DNA is far from uncharged.`,
  },
  [r`What does SDS-PAGE separate by?`]: {
    question: r`A compact globular protein and a long fibrous protein are each a single 50 kDa chain. Both are boiled in SDS with a reducing agent and run on the same SDS-PAGE gel. What is expected?`,
    options: [r`The globular one runs farther, since its compact shape sieves more easily`, r`They run to the same position, since SDS unfolds both and only mass matters`, r`The fibrous one runs farther, since it threads end-on through the pores`, r`They run toward opposite poles, since their native charges still differ`],
    correctAnswer: 1,
    explanation: r`SDS denatures both proteins into SDS-coated chains with the same charge per unit mass, so two chains of equal mass migrate together. Answers that let shape decide describe a native gel, where folding is kept. Native charge is masked by the bound SDS, so both move toward the positive electrode.`,
  },
  [r`How does affinity chromatography work?`]: {
    question: r`Beads carrying covalently attached glutathione are used to purify an enzyme that binds glutathione. After the lysate is loaded and the column is washed, the enzyme is still on the beads. What releases it?`,
    options: [r`More of the same wash buffer, which slowly sieves the enzyme out`, r`Free glutathione in the buffer, which competes for the enzyme's site`, r`A set of size standards in the buffer, which displace large proteins`, r`Ampholytes in the buffer, which bring the enzyme to its own pI`],
    correctAnswer: 1,
    explanation: r`The enzyme is held by specific binding to the immobilized ligand, so excess free ligand competes for the binding site and carries the enzyme off the column. More wash buffer leaves a specifically bound protein in place, which is the whole point of the wash. Size standards belong to size exclusion and ampholytes to isoelectric focusing.`,
  },
  [r`How does ion-exchange chromatography separate proteins, and how are bound proteins released?`]: {
    question: r`A protein is bound to a negatively charged ion-exchange resin at pH 6. Which change to the buffer releases it from the resin?`,
    options: [r`Lower the NaCl concentration, so fewer ions shield the resin sites`, r`Lower the pH further, so the protein gains more positive charge`, r`Raise the flow rate, so the protein has less time on the resin`, r`Raise the NaCl concentration, so Na⁺ competes for the resin sites`],
    correctAnswer: 3,
    explanation: r`A negatively charged resin holds a positively charged protein, and a rising salt concentration supplies Na⁺ ions that compete for the same sites and displace it. Lowering the salt or lowering the pH both make the protein bind more tightly, the reverse of what is wanted. Flow rate does not break an electrostatic interaction that has already formed.`,
  },
  [r`When is fractional distillation required rather than simple distillation?`]: {
    question: r`Which pair of miscible liquids can be separated well by simple distillation, with no fractionating column?`,
    options: [r`Diethyl ether (bp 35 °C) and toluene (bp 111 °C)`, r`Hexane (bp 69 °C) and ethyl acetate (bp 77 °C)`, r`Benzene (bp 80 °C) and cyclohexane (bp 81 °C)`, r`Acetone (bp 56 °C) and methanol (bp 65 °C)`],
    correctAnswer: 0,
    explanation: r`Simple distillation is enough only when the boiling points differ by more than about 25 °C, and ether and toluene differ by 76 °C. The other pairs differ by 8 °C, 1 °C and 9 °C, so one vaporization gives a vapor that still contains a lot of both liquids. Those pairs need the repeated vaporization and condensation of a fractionating column.`,
  },
  [r`In DNA gel electrophoresis, why do all fragments migrate toward the anode regardless of sequence?`]: {
    question: r`Two DNA fragments are each 500 bp long. One is 70% G-C and the other is 30% G-C. They are run in neighboring lanes of the same agarose gel. What is expected?`,
    options: [r`The G-C rich one travels farther, since G and C carry extra negative charge`, r`The A-T rich one travels farther, since A and T carry extra negative charge`, r`They travel the same distance, since each nucleotide carries one phosphate charge`, r`They move toward opposite electrodes, since their base charges differ in sign`],
    correctAnswer: 2,
    explanation: r`The charge on DNA comes from the phosphate backbone, one negative charge per nucleotide whatever the base, so charge per unit length is the same for every fragment. Fragments of equal length therefore travel equally far toward the positive electrode. The bases add no net charge, so base composition changes neither the distance nor the direction.`,
  },
  [r`All chromatography relies on differential partitioning between a {{c1::mobile}} phase and a {{c2::stationary}} phase.`]: {
    question: r`In paper chromatography, water held on the cellulose fibers stays put while a butanol mixture climbs the paper. A dye that spends most of its time dissolved in the butanol will:`,
    options: [r`stay near the origin, because it favors the mobile phase`, r`travel far up the paper, because it favors the stationary phase`, r`stay near the origin, because butanol is the stationary phase`, r`travel far up the paper, because it favors the mobile phase`],
    correctAnswer: 3,
    explanation: r`The butanol is the phase that moves, so it is the mobile phase, and the bound water is the stationary phase. A dye that prefers the mobile phase is carried along with it and ends far from the origin. A compound stays near the origin only when it prefers the stationary phase, and the phases cannot be swapped: the stationary phase is the one that does not move.`,
  },
  [r`SDS-PAGE separates proteins by {{c1::molecular mass}} alone, because SDS denatures them and coats them with {{c2::uniform negative}} charge.`]: {
    question: r`A 20 kDa protein and an 80 kDa protein are both fully coated with SDS. Compared with the 20 kDa protein, the 80 kDa protein has about:`,
    options: [r`four times the charge, four times the charge-to-mass ratio, and faster migration`, r`the same charge, one quarter the charge-to-mass ratio, and faster migration`, r`four times the charge, the same charge-to-mass ratio, and slower migration`, r`the same charge, the same charge-to-mass ratio, and the same migration`],
    correctAnswer: 2,
    explanation: r`SDS binds in proportion to chain length, so a protein four times as massive carries about four times the negative charge and the charge-to-mass ratio is the same for both. With the electrical pull per unit mass equal, only sieving differs, and the larger protein moves more slowly through the gel. Faster migration for the bigger protein, or equal charge on both, ignores how SDS binds.`,
  },
  [r`To pull a carboxylic acid out of an ether layer while leaving a phenol behind, wash with {{c1::aqueous NaHCO$_3$}}.`]: {
    question: r`An ether solution of benzoic acid (pKa 4.2) and 2-naphthol (pKa 9.5) is shaken with aqueous NaHCO₃. The conjugate acid of bicarbonate, H₂CO₃, has pKa 6.4. Where do the two compounds end up?`,
    options: [r`Benzoate in the water; 2-naphthol in the ether`, r`2-Naphtholate in the water; benzoic acid in the ether`, r`Benzoate and 2-naphtholate both in the water`, r`Benzoic acid and 2-naphthol both in the ether`],
    correctAnswer: 0,
    explanation: r`A base deprotonates only acids stronger than its own conjugate acid. Benzoic acid (pKa 4.2) is stronger than H₂CO₃ (pKa 6.4), so it becomes water-soluble benzoate, while 2-naphthol (pKa 9.5) is weaker and stays neutral in the ether. Putting both in the water is what NaOH would do, and leaving both in the ether underrates bicarbonate.`,
  },
  [r`Acid-base extraction works because the {{c1::charged}} form of a compound is water soluble while the {{c2::neutral}} form prefers the organic layer.`]: {
    question: r`A drug is a tertiary amine whose conjugate acid has pKa 8. It is shaken between ether and an aqueous buffer. At which aqueous pH is the largest share of the drug found in the ether layer?`,
    options: [r`pH 8`, r`pH 11`, r`pH 5`, r`pH 2`],
    correctAnswer: 1,
    explanation: r`Only the neutral form prefers the organic layer, and an amine is neutral when the pH is well above the pKa of its conjugate acid. At pH 11 nearly all of it is the free base and moves into the ether. At pH 8 half of it is still the charged ammonium ion, and at pH 5 or pH 2 almost all of it is charged and stays in the water.`,
  },
  [r`On a normal-phase silica TLC plate, how does a more polar compound behave?`]: {
    question: r`Benzyl alcohol is oxidized to benzaldehyde, and the reaction is followed on silica TLC plates run in one solvent mixture. Where does the product spot appear?`,
    options: [r`Below the starting material, because the aldehyde is less polar`, r`Above the starting material, because the aldehyde is more polar`, r`Above the starting material, because the aldehyde is less polar`, r`Below the starting material, because the aldehyde is more polar`],
    correctAnswer: 2,
    explanation: r`The alcohol donates hydrogen bonds to the polar silica and is held tightly, so it has the lower R_f. The aldehyde has lost the O-H, is less polar, and travels farther. Placing a less polar compound lower on the plate reverses the normal-phase rule, and calling the aldehyde more polar than the alcohol gets the polarity wrong.`,
  },
  [r`Size-exclusion (gel-filtration) chromatography elutes {{c1::large}} molecules first, because they cannot enter the pores of the beads.`]: {
    question: r`A 15 kDa protein and a 150 kDa protein are analyzed two ways: on a gel-filtration column and by SDS-PAGE. Which statement is correct for the 150 kDa protein?`,
    options: [r`It elutes last from the column and travels the shorter distance in the gel`, r`It elutes first from the column and travels the longer distance in the gel`, r`It elutes last from the column but travels the longer distance in the gel`, r`It elutes first from the column but travels the shorter distance in the gel`],
    correctAnswer: 3,
    explanation: r`On the column the large protein cannot enter the bead pores, takes the short route between the beads, and comes off first. In the gel there is no route around the mesh, so the large protein is slowed most and travels the shorter distance. The wrong choices carry the rule for one method over to the other, when the two run in opposite senses.`,
  },
  [r`An organic layer contains an amine and a neutral compound. How do you separate them?`]: {
    question: r`Toluene dissolved in ether is contaminated with benzylamine. Which wash removes the benzylamine, and in what form does it leave?`,
    options: [r`Dilute HCl; it leaves as the benzylammonium cation in the water`, r`Dilute NaOH; it leaves as a benzylamine anion in the water`, r`Dilute HCl; it leaves along with protonated toluene in the water`, r`Aqueous NaHCO₃; it leaves as the benzylammonium cation in the water`],
    correctAnswer: 0,
    explanation: r`An amine is a base, so dilute acid protonates it to an ammonium salt that dissolves in water while neutral toluene stays in the ether. NaOH and NaHCO₃ are bases and leave the amine neutral and in the ether. Toluene has no basic site, so acid does not protonate it or move it.`,
  },
  [r`$R_f$ equals the distance traveled by the {{c1::spot}} divided by the distance traveled by the {{c2::solvent front}}, always between 0 and 1.`]: {
    question: r`A TLC baseline is drawn 1.0 cm above the bottom edge of the plate. After development the solvent front is 6.0 cm above the bottom edge and the spot is 4.0 cm above the bottom edge. What is the R_f?`,
    options: [r`0.67`, r`0.60`, r`0.50`, r`1.67`],
    correctAnswer: 1,
    explanation: r`Both distances are measured from the baseline, not from the edge of the plate: the spot moved 4.0 − 1.0 = 3.0 cm and the solvent front moved 6.0 − 1.0 = 5.0 cm, so R_f = 3.0/5.0 = 0.60. Using the edge for both gives 4.0/6.0 = 0.67, and correcting only the spot gives 3.0/6.0 = 0.50. A value of 1.67 is the ratio upside down, and R_f can never exceed 1.`,
  },
  [r`In reverse-phase HPLC, which compounds elute first and why?`]: {
    question: r`A drug is metabolized by adding one hydroxyl group, which makes the metabolite more polar than the drug. Both are run on a C18 reverse-phase HPLC column with a water-acetonitrile mobile phase. The metabolite:`,
    options: [r`elutes after the drug, because it is held more by the nonpolar C18`, r`elutes before the drug, because it is smaller than the pores of C18`, r`elutes with the drug, because one hydroxyl group changes no retention`, r`elutes before the drug, because it is held less by the nonpolar C18`],
    correctAnswer: 3,
    explanation: r`In reverse phase the stationary phase is nonpolar and the mobile phase is polar, so the more polar compound spends more time in the mobile phase and elutes first. Saying the polar metabolite is held longer applies the normal-phase silica rule. Pore size is the basis of size exclusion, not of C18, and a hydroxyl group changes polarity enough to shift retention.`,
  },
  [r`Affinity chromatography separates by {{c1::specific binding}} to an immobilized ligand, as when a His-tagged protein binds a {{c2::nickel}} column.`]: {
    question: r`A recombinant protein is made with six histidines in a row at its C-terminus so that it can be purified in one step. Which resin and eluent fit?`,
    options: [r`Nickel resin, eluted with free imidazole`, r`Nickel resin, eluted with free glutathione`, r`Glutathione resin, eluted with free imidazole`, r`Glutathione resin, eluted with free nickel`],
    correctAnswer: 0,
    explanation: r`The histidine side chains coordinate immobilized nickel, so a His tag binds a nickel resin. Imidazole is the histidine side-chain ring, so free imidazole competes for the nickel and releases the protein. Glutathione resin is for a different tag and does not bind a His tag, and glutathione does not displace histidine from nickel.`,
  },
  [r`Vacuum distillation lowers ambient pressure so a compound boils at a {{c1::lower}} temperature, protecting {{c2::heat-sensitive}} compounds from decomposing.`]: {
    question: r`A liquid boils at 180 °C under 760 torr. In an apparatus pumped down to 20 torr, it distills at about 70 °C. Why?`,
    options: [r`Its vapor pressure is raised by the pump at every temperature`, r`Its intermolecular forces are weakened by the lower pressure`, r`Its vapor pressure reaches 20 torr at a much lower temperature`, r`Its molar mass is reduced as the pump removes gas above it`],
    correctAnswer: 2,
    explanation: r`A liquid boils when its vapor pressure equals the surrounding pressure. Vapor pressure rises with temperature, so it reaches 20 torr long before it reaches 760 torr. The pump changes the surrounding pressure, not the liquid: its vapor pressure curve, intermolecular forces and molar mass are all unchanged.`,
  },
  [r`In a separatory funnel, diethyl ether forms the {{c1::upper}} layer over water while dichloromethane forms the {{c2::lower}} layer.`]: {
    question: r`An aqueous solution is extracted with diethyl ether (density 0.71 g/mL), and the product moves into the ether. A student drains the bottom layer into a flask, keeps it, and throws away what is left in the funnel. What happened?`,
    options: [r`The product was kept, because ether is the lower layer`, r`The product was thrown away, because ether is the upper layer`, r`The product was kept, because ether and water mix into one layer`, r`The product was thrown away, because it stayed in the water`],
    correctAnswer: 1,
    explanation: r`Ether is less dense than water, so it floats, and the layer drained from the bottom was the water. The product was in the ether left behind in the funnel, which the student discarded. Thinking the lower layer is ether fits dichloromethane, not ether, and the question states that the product moved into the ether, not that it stayed in the water.`,
  },
  [r`Why are three small extractions more efficient than one large extraction using the same total solvent volume?`]: {
    question: r`Each time an aqueous solution is shaken with a fresh 50 mL portion of ether, 3/4 of the solute then in the water moves into the ether. After three such extractions, what fraction of the original solute is still in the water?`,
    options: [r`1/64`, r`1/12`, r`1/4`, r`1/16`],
    correctAnswer: 0,
    explanation: r`Each extraction leaves 1/4 of what was there, so after three the water holds (1/4)³ = 1/64 of the solute. 1/4 is the result of one extraction only and 1/16 is the result of two. 1/12 comes from dividing 1/4 by 3, which treats the extractions as additive when each one acts on what the previous one left.`,
  },
  [r`Gas chromatography separates volatile compounds primarily by what property?`]: {
    question: r`Pentane (bp 36 °C) and its isomer neopentane (bp 10 °C) are injected together onto a nonpolar gas chromatography column. Which reaches the detector first, and why?`,
    options: [r`Pentane, because the higher-boiling isomer stays in the gas more`, r`Pentane, because a straight chain slips through the column faster`, r`Neither, because isomers of equal molar mass always elute together`, r`Neopentane, because the lower-boiling isomer stays in the gas more`],
    correctAnswer: 3,
    explanation: r`On a nonpolar column, elution follows boiling point: the more volatile compound spends more of its time in the carrier gas and is swept through sooner, so neopentane comes first. A higher boiling point means less time in the gas, not more. Molecular shape matters only through its effect on volatility, and equal molar mass does not mean equal boiling point.`,
  },
  [r`What is an azeotrope and why does it limit distillation?`]: {
    question: r`A 10% ethanol solution is distilled again and again through an efficient fractionating column. The distillate levels off at 95% ethanol and never gets richer. Why?`,
    options: [r`At 95% the ethanol has the same density as the water`, r`At 95% the column runs out of theoretical plates`, r`At 95% the vapor has the same composition as the liquid`, r`At 95% the ethanol starts to decompose on heating`],
    correctAnswer: 2,
    explanation: r`Distillation enriches a component only because the vapor differs in composition from the liquid. At the azeotrope the two are identical, so boiling and condensing again changes nothing, however many plates the column has. Density plays no part in distillation, and ethanol is stable at its boiling point.`,
  },
  [r`Recrystallization exploits the fact that solubility {{c1::increases with temperature}}: dissolve in hot solvent, then cool slowly to grow pure crystals.`]: {
    question: r`A compound's solubility in ethanol is 20 g per 100 mL at 78 °C and 2 g per 100 mL at 0 °C. A 10 g sample is dissolved in 50 mL of ethanol at 78 °C and cooled to 0 °C. What is the largest mass of crystals that can form?`,
    options: [r`8 g`, r`1 g`, r`9 g`, r`10 g`],
    correctAnswer: 2,
    explanation: r`At 0 °C, 50 mL of ethanol can hold only 1 g (half of 2 g per 100 mL), so 10 − 1 = 9 g must come out of solution. 8 g comes from using the 100 mL figure without halving it, and 1 g is the amount that stays dissolved, not the amount that crystallizes. 10 g ignores the fact that some product is always lost to the cold solvent.`,
  },
  [r`How does an impurity affect a solid's melting point, and why is that diagnostic?`]: {
    question: r`A pure compound melts at 135–136 °C. Which melting range is expected for a sample of it that still contains a few percent of an impurity?`,
    options: [r`135–136 °C`, r`129–133 °C`, r`138–142 °C`, r`140–141 °C`],
    correctAnswer: 1,
    explanation: r`An impurity disrupts the crystal lattice, so the solid melts at a lower temperature and over a wider range: 129–133 °C is both lower and broader. A sharp 135–136 °C is the pure compound. The two higher ranges assume an impurity raises the melting point, which is the wrong direction.`,
  },
  [r`In isoelectric focusing a protein migrates through a pH gradient until the pH equals its {{c1::pI}}, where its net charge is {{c2::zero}}.`]: {
    question: r`A protein with pI 6.2 sits at the pH 8.0 position of an isoelectric-focusing gel when the field is switched on. What are its net charge and its motion?`,
    options: [r`Net negative; it moves toward the anode until it reaches pH 6.2`, r`Net positive; it moves toward the cathode until it reaches pH 6.2`, r`Net negative; it moves toward the cathode until it leaves the gel`, r`Net zero; it stays at pH 8.0 because the field cannot move it`],
    correctAnswer: 0,
    explanation: r`Above its pI a protein has lost protons and is net negative, so it moves toward the positive electrode (the anode), which is the acidic end of the gradient. It stops where the pH equals 6.2 and its net charge is zero. A net positive charge would require a pH below the pI, and a net charge of zero occurs only at pH 6.2, not at pH 8.0.`,
  },
  [r`Why does washing with brine (saturated NaCl) help during an aqueous workup?`]: {
    question: r`After an extraction, a cloudy emulsion sits between the organic and aqueous layers and will not settle. Which action helps most, and why?`,
    options: [r`Add ethanol; it mixes with both layers and sharpens the boundary`, r`Add more water; dilution pulls the organic droplets out of the water`, r`Shake harder; vigorous mixing forces the small droplets to merge`, r`Add brine; the ions make the water a poorer solvent for organics`],
    correctAnswer: 3,
    explanation: r`Saturated NaCl makes the aqueous layer more ionic, so organic material is less soluble in it and is pushed into the organic layer, which helps the two layers separate. Ethanol dissolves in both layers and blurs the boundary. Plain water does not reduce the solubility of organics in the aqueous layer, and harder shaking is what creates an emulsion.`,
  },
  [r`Which purification method suits a solid product contaminated with a small amount of a similar impurity?`]: {
    question: r`A synthesis gives 5 g of a solid amide that is about 95% pure. The contaminant is a closely related solid by-product. Which purification suits it best?`,
    options: [r`Simple distillation at 1 atm`, r`Recrystallization from hot solvent`, r`Washing with aqueous NaHCO₃`, r`Gas chromatography of the solid`],
    correctAnswer: 1,
    explanation: r`A solid that is already mostly pure is best cleaned by recrystallization: the product crystallizes on cooling while the small amount of impurity stays below its saturation point and remains dissolved. Distillation and gas chromatography are for volatile liquids. A bicarbonate wash removes only acidic compounds, and neither amide is acidic.`,
  },
  [r`Size-exclusion chromatography also serves to {{c1::desalt}} a protein, since small ions enter the beads and elute {{c2::last}}.`]: {
    question: r`A protein in 2 M NaCl is passed through a small gel-filtration column that was equilibrated with low-salt buffer. The outflow is monitored for protein (absorbance at 280 nm) and for salt (conductivity). What is seen?`,
    options: [r`The salt peak comes off first and the protein peak comes off later`, r`The protein peak and the salt peak come off in the same fractions`, r`The protein peak comes off first and the salt peak comes off later`, r`The protein peak comes off and the salt stays bound to the beads`],
    correctAnswer: 2,
    explanation: r`The protein is too large to enter the bead pores, so it comes straight through, while the small Na⁺ and Cl⁻ ions enter the pores, take the long route, and elute last. That gap is what desalts the protein. Putting salt first reverses the size rule, and the beads do not bind salt: they only delay it.`,
  },
  [r`Ammonium sulfate precipitates proteins by {{c1::salting out}}, competing for the water that hydrates them.`]: {
    question: r`In a lysate, a contaminating protein precipitates at 30% ammonium sulfate saturation and the target protein at 55%. Most other proteins stay dissolved until 80%. Which procedure enriches the target?`,
    options: [r`Bring to 30%, discard the pellet; then bring to 55% and keep the pellet`, r`Bring to 30%, keep the pellet; then bring to 55% and discard the pellet`, r`Bring to 55%, keep the supernatant; then bring to 80% and discard the pellet`, r`Bring to 55%, discard the pellet; then bring to 30% and keep the pellet`],
    correctAnswer: 0,
    explanation: r`Each protein salts out at its own salt concentration. The 30% cut drops the contaminant, which is discarded, and raising the supernatant to 55% then drops the target while most other proteins stay dissolved. Keeping the 30% pellet keeps the contaminant, and going to 55% in one step puts the target in a pellet together with the contaminant.`,
  },
  [r`Why does a protein purification scheme run ion exchange before size exclusion?`]: {
    question: r`A researcher pours 2 L of dilute, clarified lysate straight onto a size-exclusion column instead of an ion-exchange column. What is the main problem?`,
    options: [r`The proteins bind the beads too tightly to be washed off`, r`The salts in the lysate strip the charge from the beads`, r`The proteins are denatured by the pores of the beads`, r`The sample volume is far larger than the column can resolve`],
    correctAnswer: 3,
    explanation: r`Size exclusion separates only when the sample is a narrow band, so it accepts a small volume and has low capacity. A large dilute load needs a step that binds and concentrates the protein first, which is why ion exchange comes earlier and size exclusion is the final polish. Size-exclusion beads do not bind proteins, carry no charge to strip, and are gentle on folded proteins.`,
  },
  [r`After the acid wash, {{c1::NaHCO3}} removes the carboxylic acid and then {{c2::NaOH}} removes the phenol, leaving the hydrocarbon behind.`]: {
    question: r`After an HCl wash, an ether layer still holds 4-nitrobenzoic acid, 1-naphthol and biphenyl. By mistake a student washes with NaOH first and with NaHCO₃ second. What results?`,
    options: [r`The NaOH extract holds only the naphthol, and the bicarbonate then takes the acid`, r`The NaOH extract holds both the acid and the naphthol, so they are not separated`, r`The NaOH extract holds only the acid, and the bicarbonate then takes the naphthol`, r`The NaOH extract holds the biphenyl, and the acid and naphthol stay in the ether`],
    correctAnswer: 1,
    explanation: r`Hydroxide is strong enough to deprotonate both the carboxylic acid and the phenol, so both leave together in the first wash and nothing is left for the bicarbonate to remove. The weak base has to come first so that it takes the acid alone. Biphenyl has no acidic proton and stays in the ether whatever the base.`,
  },
  [r`Raising mobile-phase polarity on a normal-phase TLC plate {{c1::raises}} $R_f$, because the solvent competes for {{c2::the polar silica surface}}.`]: {
    question: r`A compound has R_f 0.30 on a silica plate run in 10% ethyl acetate in hexane. The same compound is run on a fresh plate in 30% ethyl acetate in hexane. What happens to its R_f?`,
    options: [r`It rises, because ethyl acetate competes for the polar silica sites`, r`It falls, because ethyl acetate competes for the polar silica sites`, r`It falls, because a polar solvent holds the compound near the baseline`, r`It stays 0.30, because R_f is a fixed property of the compound`],
    correctAnswer: 0,
    explanation: r`Ethyl acetate is the polar part of the eluent, and more of it displaces the compound from the silica surface and carries it farther, so R_f rises. A fall in R_f gets the direction backward: the solvent moves, so a compound that prefers the solvent moves with it. R_f is constant only for one stationary phase and one solvent system.`,
  },
  [r`An ether solution holds benzoic acid, aniline, phenol, and naphthalene. What is the first wash, and what does it remove?`]: {
    question: r`An ether solution holds 4-chlorobenzoic acid, p-toluidine (an aromatic amine), 2-naphthol and anthracene. It is shaken once with dilute HCl. Which species is found in the aqueous layer?`,
    options: [r`The 4-chlorobenzoate anion only`, r`The 2-naphtholate anion only`, r`The p-toluidinium cation only`, r`The cation and both of the anions`],
    correctAnswer: 2,
    explanation: r`Acid protonates the only base present, the amine, giving a charged ammonium ion that dissolves in the water. The carboxylic acid and the naphthol stay protonated and neutral in acid, so they remain in the ether with the hydrocarbon. Their anions form only when a basic wash is used.`,
  },
  [r`Why choose NaHCO3 over NaOH to extract a carboxylic acid from a mixture that also contains an ester?`]: {
    question: r`An ether solution contains the product ethyl benzoate and some unreacted benzoic acid. A student washes it with warm, concentrated NaOH and recovers very little ester. Why?`,
    options: [r`Hydroxide protonated the ester to a cation that entered the water`, r`Hydroxide reduced the ester to an alcohol that entered the water`, r`Hydroxide oxidized the ester to an acid that stayed in the ether`, r`Hydroxide hydrolyzed the ester to a carboxylate that entered the water`],
    correctAnswer: 3,
    explanation: r`Hydroxide is a strong nucleophile as well as a strong base, so it saponifies the ester to benzoate and ethanol, and the benzoate moves into the water. Bicarbonate would have removed the benzoic acid without attacking the ester. Hydroxide cannot protonate anything, and it is neither a reducing agent nor an oxidizing agent.`,
  },
  [r`To recover an extracted amine as its free base, {{c1::basify}} the aqueous layer and then re-extract into fresh organic solvent.`]: {
    question: r`A student extracts an amine from ether into dilute HCl. To get the amine back, the student adds fresh ether to the acidic aqueous extract and shakes, adding nothing else. Almost no amine enters the ether. Why?`,
    options: [r`The amine is still a neutral base; HCl has to be added first`, r`The amine is still an ammonium ion; NaOH has to be added first`, r`The amine is now a carboxylate anion; HCl has to be added first`, r`The amine was destroyed by the acid; it cannot be recovered`],
    correctAnswer: 1,
    explanation: r`In acid the amine is a charged ammonium salt, which stays in the water. Adding NaOH removes the proton and returns the neutral free base, which then moves into the fresh ether. More HCl would only keep it charged, an amine cannot become a carboxylate, and dilute acid protonates an amine without destroying it.`,
  },
  [r`After extraction the organic layer is dried over {{c1::anhydrous $MgSO_4$ or $Na_2SO_4$}}, then concentrated by {{c2::rotary evaporation}}.`]: {
    question: r`After a workup, an ether layer that holds the product is slightly cloudy with traces of water. Which sequence isolates the dry product?`,
    options: [r`Rotary-evaporate the ether, then add anhydrous MgSO₄ and filter`, r`Add aqueous MgSO₄, separate, then rotary-evaporate the ether`, r`Add anhydrous MgSO₄, filter, then rotary-evaporate the ether`, r`Add anhydrous MgSO₄, then rotary-evaporate without filtering`],
    correctAnswer: 2,
    explanation: r`The anhydrous salt takes up the dissolved water as a hydrate, the solid is filtered off, and the solvent is then removed under reduced pressure. Evaporating first leaves the water in the product with nothing to dry. An aqueous solution of the salt adds water instead of removing it, and skipping the filtration leaves the hydrated salt mixed into the product.`,
  },
  [r`How do you determine experimentally which layer in a separatory funnel is aqueous?`]: {
    question: r`A separatory funnel holds two clear, colorless layers. A student adds a few drops of water; the drops fall through the top layer and merge into the bottom layer. What does this show?`,
    options: [r`The bottom layer is aqueous, so the organic solvent is the less dense one`, r`The top layer is aqueous, so the organic solvent is the more dense one`, r`The bottom layer is organic, so water is denser than both of the layers`, r`Neither layer is aqueous, so the drops simply sank under their own weight`],
    correctAnswer: 0,
    explanation: r`Water mixes with the aqueous layer and with nothing else, so the layer the drops join is the aqueous one: here, the bottom. The organic solvent is therefore on top and less dense than the water layer. Had the top layer been aqueous, the drops would have disappeared into it at once instead of falling through.`,
  },
  [r`A carboxylic acid streaks badly on a silica TLC plate. What causes it and what fixes it?`]: {
    question: r`Hexanoic acid is spotted on a silica TLC plate and gives a long streak instead of a round spot. Which change to the eluent gives a tight spot, and why?`,
    options: [r`Add 1% triethylamine, to keep the analyte fully ionized`, r`Add 1% acetic acid, to keep the analyte fully protonated`, r`Add 1% water, to keep the silica surface fully hydrated`, r`Add 1% hexane, to keep the analyte away from the silica`],
    correctAnswer: 1,
    explanation: r`The streak comes from the acid sitting partly ionized on the silica, so its molecules let go at different points. A trace of a stronger, volatile acid in the eluent keeps all of it in the neutral protonated form, which moves as one spot. A base would ionize it completely and pin it to the baseline, and water or a little hexane does nothing to its charge state.`,
  },
  [r`Why is a co-spot lane run on a TLC plate?`]: {
    question: r`A TLC plate has three lanes: unknown U, authentic compound A, and a lane where U and A are spotted on top of each other. Lanes U and A each show one spot at R_f 0.45. The combined lane shows a figure-eight of two overlapping spots. What follows?`,
    options: [r`U and A are the same compound, since both ran at R_f 0.45`, r`U and A are the same compound spotted at two concentrations`, r`U and A are different compounds with nearly equal R_f values`, r`U and A reacted on the plate and formed a new compound`],
    correctAnswer: 2,
    explanation: r`If U and A were identical, the combined lane would give one round spot. A figure-eight means two compounds that run almost, but not exactly, alike, which separate lanes could not reveal. Matching R_f values in separate lanes can be coincidence, and a concentration difference changes a spot's size, not its position.`,
  },
  [r`A protein with pI 5.0 is loaded in pH 7.0 buffer. Which ion exchanger binds it, and how do you elute it?`]: {
    question: r`An enzyme with pI 8.2 is loaded in buffer at pH 6.0. Which ion exchanger binds it, and how is it eluted?`,
    options: [r`A cation exchanger; elute by lowering the salt or lowering the pH`, r`An anion exchanger; elute by raising the salt or lowering the pH`, r`An anion exchanger; elute by lowering the salt or raising the pH`, r`A cation exchanger; elute by raising the salt or raising the pH`],
    correctAnswer: 3,
    explanation: r`Below its pI the enzyme is net positive, so it binds a negatively charged resin, which is a cation exchanger. Raising the salt supplies ions that compete for the sites, and raising the pH toward 8.2 removes the enzyme's positive charge. An anion exchanger binds net negative proteins, and lowering the salt or the pH only tightens the binding here.`,
  },
  [r`Which technique separates enantiomers, and why do the usual methods fail?`]: {
    question: r`A racemic drug gives a single peak on a C18 HPLC column and a single spot on a silica TLC plate. Which change resolves the two enantiomers?`,
    options: [r`Use a column whose stationary phase is a single enantiomer`, r`Use a longer C18 column with a slower flow of the solvent`, r`Use a fractionating column with more theoretical plates`, r`Use a more polar eluent on the same kind of silica plate`],
    correctAnswer: 0,
    explanation: r`Enantiomers behave identically in any achiral environment, so they can be told apart only by something chiral, such as a stationary phase made of one enantiomer. A longer C18 column and a different eluent are still achiral, so the two forms still partition identically. Their boiling points are equal, so no number of distillation plates separates them.`,
  },
  [r`Two-dimensional gel electrophoresis separates first by {{c1::pI, using isoelectric focusing}} and then by {{c2::mass, using SDS-PAGE}}.`]: {
    question: r`A sample holds three proteins: X (pI 5, 30 kDa), Y (pI 5, 60 kDa) and Z (pI 8, 30 kDa). How many bands appear on SDS-PAGE alone, on isoelectric focusing alone, and how many spots on a two-dimensional gel?`,
    options: [r`3 bands, 3 bands, and 3 spots`, r`2 bands, 2 bands, and 2 spots`, r`2 bands, 2 bands, and 3 spots`, r`2 bands, 2 bands, and 4 spots`],
    correctAnswer: 2,
    explanation: r`SDS-PAGE sees only mass, so X and Z (both 30 kDa) share a band and Y is the second. Isoelectric focusing sees only pI, so X and Y (both pI 5) share a band and Z is the second. The two-dimensional gel uses both properties, and no two of the proteins match in both, so there are 3 spots: one per protein, not one per band or per combination.`,
  },
  [r`Which single property does each exploit: distillation, recrystallization, dialysis, electrophoresis?`]: {
    question: r`A protein solution contaminated with a 0.5 kDa dye is sealed in a bag made of a membrane with a 10 kDa cutoff and left in a large volume of buffer. What happens, and which property is being used?`,
    options: [r`The protein leaves the bag; the separation is by molecular size`, r`The dye stays in the bag; the separation is by net charge`, r`Both leave the bag; the separation is by solubility in water`, r`The dye leaves the bag; the separation is by molecular size`],
    correctAnswer: 3,
    explanation: r`This is dialysis: molecules smaller than the membrane's cutoff diffuse out into the buffer while larger ones are held back, so the dye leaves and the protein stays. The property used is size alone. Net charge is what electrophoresis uses, and solubility as a function of temperature is what recrystallization uses.`,
  },
  [r`Choose GC when the analyte is {{c1::volatile and thermally stable}}; choose HPLC when it is {{c2::nonvolatile or heat sensitive}}.`]: {
    question: r`Which sample is better suited to gas chromatography than to HPLC?`,
    options: [r`A mixture of oligosaccharides from honey`, r`A mixture of C6 to C10 alkanes from gasoline`, r`A mixture of peptides from a protein digest`, r`A mixture of nucleotides from a cell lysate`],
    correctAnswer: 1,
    explanation: r`Gas chromatography needs analytes that vaporize without decomposing, and small alkanes are volatile and stable to heat. Sugars, peptides and nucleotides are polar and nonvolatile and char before they vaporize, so they are run in a liquid mobile phase by HPLC.`,
  },
}
