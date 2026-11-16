import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-general-chemistry-solutions-gases-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`How do you assign oxidation states quickly?`]: {
    question: r`What is the oxidation state of chromium in the dichromate ion, Cr₂O₇²⁻?`,
    options: [r`+7`, r`+6`, r`+8`, r`+12`],
    correctAnswer: 1,
    explanation: r`Seven oxygens at −2 give −14, and the total must equal the ion's charge: 2x − 14 = −2, so x = +6. Getting +7 ignores the 2− charge, +8 puts the charge in with the wrong sign, and +12 forgets to share the total between the two chromium atoms.`,
  },
  [r`Give the ideal gas law and its constant.`]: {
    question: r`A student needs the volume of 1.0 mol of gas at 2.0 atm and 27°C. Which line of working is set up correctly?`,
    options: [r`V = (1.0)(0.0821)(300)/(2.0) ≈ 12 L`, r`V = (1.0)(8.314)(300)/(2.0) ≈ 1250 L`, r`V = (1.0)(0.0821)(27)/(2.0) ≈ 1.1 L`, r`V = (1.0)(0.0821)(300)(2.0) ≈ 49 L`],
    correctAnswer: 0,
    explanation: r`With pressure in atm and volume in liters, R must be 0.0821 L·atm/(mol·K) and T must be 300 K, so V = nRT/P ≈ 12 L. Using 8.314 pairs joules with atmospheres, using 27 leaves the temperature in Celsius, and multiplying by the pressure rearranges PV = nRT incorrectly.`,
  },
  [r`State the dilution equation.`]: {
    question: r`A technician must prepare 300 mL of 0.50 M HCl from a 6.0 M stock. What volume of stock is needed?`,
    options: [r`2.5 mL`, r`275 mL`, r`25 mL`, r`3600 mL`],
    correctAnswer: 2,
    explanation: r`Moles are conserved, so (6.0 M)(V₁) = (0.50 M)(300 mL) and V₁ = 25 mL. The 275 mL value is the water that is added, not the stock. The 3600 mL value comes from inverting the ratio of concentrations, and 2.5 mL is a factor-of-ten slip.`,
  },
  [r`What is the difference between molarity and molality?`]: {
    question: r`A sealed flask of aqueous KNO₃ is warmed from 20°C to 60°C. The liquid expands slightly and nothing escapes. What happens to the solution's molarity and molality?`,
    options: [r`Molarity is unchanged; molality falls`, r`Molarity rises; molality is unchanged`, r`Molarity falls; molality also falls`, r`Molarity falls; molality is unchanged`],
    correctAnswer: 3,
    explanation: r`Molarity divides moles by the solution's volume, which grows on warming, so molarity falls. Molality divides moles by the solvent's mass, which does not change with temperature. The other choices either swap the two definitions or treat mass as if it expanded.`,
  },
  [r`Which gas law combines all four variables?`]: {
    question: r`A leaking balloon loses half of its gas molecules while the sun warms it from 150 K to 300 K. The outside pressure on the balloon stays constant. What happens to its volume?`,
    options: [r`It doubles`, r`It stays the same`, r`It is cut in half`, r`It quadruples`],
    correctAnswer: 1,
    explanation: r`From PV = nRT at constant P, the volume follows the product nT. Halving n while doubling T leaves nT, and so V, unchanged. Doubling looks only at temperature, halving looks only at the amount of gas, and quadrupling treats both changes as increases.`,
  },
  [r`In an electrochemical cell, which process occurs at the cathode?`]: {
    question: r`In a working cell, silver ions gain electrons and plate out as metal on a silver electrode, while a nickel electrode slowly dissolves into solution as Ni²⁺. Which electrode is the cathode, and why?`,
    options: [r`Nickel, because oxidation occurs there`, r`Silver, because oxidation occurs there`, r`Silver, because reduction occurs there`, r`Nickel, because reduction occurs there`],
    correctAnswer: 2,
    explanation: r`Ag⁺ gaining electrons is reduction, and reduction always happens at the cathode, so silver is the cathode. Nickel losing electrons is oxidation, which makes nickel the anode. The remaining choices attach the wrong process to an electrode or pair the cathode with oxidation.`,
  },
  [r`Molality differs from molarity because it uses:`]: {
    question: r`A student dissolves 18 g of glucose (180 g/mol) in 200 g of water. The finished solution has a mass of 218 g and a volume of 210 mL. What is its molality?`,
    options: [r`0.50 m`, r`0.48 m`, r`0.46 m`, r`2.0 m`],
    correctAnswer: 0,
    explanation: r`Molality is moles of solute per kilogram of solvent: 0.10 mol / 0.200 kg = 0.50 m. Dividing by the 0.210 L of solution gives 0.48, which is the molarity. Dividing by the 0.218 kg of whole solution gives 0.46, and 2.0 inverts the ratio.`,
  },
  [r`In a redox reaction, the oxidizing agent:`]: {
    question: r`In the reaction 2Fe³⁺ + Sn²⁺ → 2Fe²⁺ + Sn⁴⁺, which species is the oxidizing agent, and why?`,
    options: [r`Sn²⁺, because it loses electrons`, r`Fe³⁺, because it loses electrons`, r`Sn²⁺, because it gains electrons`, r`Fe³⁺, because it gains electrons`],
    correctAnswer: 3,
    explanation: r`Fe³⁺ goes to Fe²⁺ by accepting an electron, so it is reduced, and the species that is reduced is the oxidizing agent. Sn²⁺ does lose electrons, but that makes it the reducing agent. The other two choices reverse which ion gains and which loses electrons.`,
  },
  [r`Away from STP you must use {{c1::$n = PV/RT$}}; the 22.4 L per mole shortcut is valid only at {{c2::STP}}.`]: {
    question: r`A student needs the moles of CO₂ in a 5.0 L sample collected at 37°C and 1.0 atm, and simply divides 5.0 L by 22.4 L/mol. How does that result compare with the true number of moles?`,
    options: [r`Too low, since a mole fills more than 22.4 L at 37°C`, r`Too high, since a mole fills less than 22.4 L at 37°C`, r`Too high, since a mole fills more than 22.4 L at 37°C`, r`Exactly right, since the pressure is still 1.0 atm`],
    correctAnswer: 2,
    explanation: r`The 22.4 L/mol figure needs both 1 atm and 0°C. At 310 K a mole occupies more volume, about 25.4 L, so 5.0 L holds fewer moles than 5.0/22.4 and the shortcut overestimates. The correct route is n = PV/RT with T in kelvin. Matching the pressure alone is not enough to make the conditions STP.`,
  },
  [r`A 10 mL sample of 1.0 M stock diluted to 100 mL total becomes {{c1::0.10 M}}, a {{c2::10-fold}} dilution.`]: {
    question: r`A protocol calls for a 20-fold dilution of a 4.0 mL serum sample. How much diluent should be added to the sample?`,
    options: [r`80 mL`, r`76 mL`, r`16 mL`, r`84 mL`],
    correctAnswer: 1,
    explanation: r`A 20-fold dilution means the final total volume is 20 × 4.0 = 80 mL, so 80 − 4 = 76 mL of diluent is added. Adding 80 mL treats the final volume as the volume added, giving a 21-fold dilution. The values 16 mL and 84 mL come from adding or subtracting 4 in the wrong place.`,
  },
  [r`How do you find the concentration when two solutions of the same solute are mixed?`]: {
    question: r`100 mL of 0.30 M NaCl is combined with 200 mL of 0.60 M NaCl. Assuming the volumes add, what is the NaCl concentration of the mixture?`,
    options: [r`0.45 M`, r`0.90 M`, r`0.15 M`, r`0.50 M`],
    correctAnswer: 3,
    explanation: r`The moles are 0.030 + 0.120 = 0.150 mol in 0.300 L, giving 0.50 M. Simply averaging the two molarities gives 0.45 M, which ignores that there is twice as much of the stronger solution. Adding the molarities gives 0.90 M, and 0.15 is the mole total without dividing by volume.`,
  },
  [r`What does percent mass per volume mean in a clinical passage?`]: {
    question: r`An IV bag is labeled 1.8% (m/v) glucose. Glucose has a molar mass of 180 g/mol. What is the molarity of glucose in the bag?`,
    options: [r`0.10 M`, r`0.010 M`, r`0.18 M`, r`1.0 M`],
    correctAnswer: 0,
    explanation: r`1.8% (m/v) means 1.8 g per 100 mL, which is 18 g/L, and 18/180 = 0.10 mol/L. The 0.010 M value divides 1.8 g by 180 without scaling 100 mL up to a liter. The 1.0 M value scales by an extra factor of ten, and 0.18 M just moves the decimal of the label.`,
  },
  [r`Define mole fraction and name where it shows up on the MCAT.`]: {
    question: r`A gas mixture containing 8.0 mol of gas in total exerts a pressure of 2.0 atm. The partial pressure of CO₂ in the mixture is 0.50 atm. How many moles of CO₂ are present?`,
    options: [r`4.0 mol`, r`0.25 mol`, r`2.0 mol`, r`1.0 mol`],
    correctAnswer: 2,
    explanation: r`The mole fraction of CO₂ is its share of the pressure, 0.50/2.0 = 0.25, so it makes up 0.25 × 8.0 = 2.0 mol. Multiplying 0.50 by 8.0 gives 4.0 mol and skips dividing by the total pressure. The 0.25 value is the mole fraction itself, not a number of moles.`,
  },
  [r`Distinguish a spectator ion from a participant in a net ionic equation.`]: {
    question: r`Aqueous Ba(OH)₂ is mixed with aqueous H₂SO₄, forming solid BaSO₄ and liquid water. Which ions are spectators in this reaction?`,
    options: [r`None, since all four ions change form`, r`Ba²⁺ and SO₄²⁻, which form the solid`, r`H⁺ and OH⁻, which form the water`, r`Ba²⁺ and OH⁻, which are from the base`],
    correctAnswer: 0,
    explanation: r`A spectator must appear unchanged on both sides. Here Ba²⁺ and SO₄²⁻ leave solution as solid BaSO₄, and H⁺ and OH⁻ combine into water, so nothing is left unchanged and nothing can be deleted. Each other choice names ions that are consumed, which makes them participants.`,
  },
  [r`How do you get an unknown acid's concentration from a titration curve?`]: {
    question: r`25.0 mL of a monoprotic acid is titrated with 0.100 M NaOH. The curve has a flat buffer region centered at 10.0 mL of base and a steep vertical jump centered at 20.0 mL. What is the acid's concentration?`,
    options: [r`0.0400 M`, r`0.125 M`, r`0.160 M`, r`0.0800 M`],
    correctAnswer: 3,
    explanation: r`The steep jump marks equivalence, so moles of acid = (0.100 M)(20.0 mL) = 2.00 mmol, and 2.00 mmol / 25.0 mL = 0.0800 M. Using the 10.0 mL buffer-region midpoint gives 0.0400 M. The 0.125 M value swaps the two volumes, and 0.160 M doubles as if the acid were diprotic.`,
  },
  [r`How does the ideal gas law give an unknown gas's molar mass?`]: {
    question: r`An unknown gas has a density of 1.3 g/L at 0.50 atm and 300 K. Which gas is it? ($R = 0.082$ L·atm/(mol·K))`,
    options: [r`O₂ (32 g/mol)`, r`SO₂ (64 g/mol)`, r`CH₄ (16 g/mol)`, r`CO₂ (44 g/mol)`],
    correctAnswer: 1,
    explanation: r`M = dRT/P = (1.3)(0.082)(300)/(0.50) = 32/0.50 = 64 g/mol, which matches SO₂. Leaving out the pressure gives 32 g/mol, the value for O₂. Multiplying by the pressure instead of dividing gives 16 g/mol, and 44 g/mol does not come from this data at all.`,
  },
  [r`Define normality and say when it differs from molarity.`]: {
    question: r`A reagent bottle is labeled 0.60 N Ba(OH)₂ for use in acid-base titrations. What is the molarity of Ba(OH)₂ in the bottle?`,
    options: [r`1.2 M`, r`0.60 M`, r`0.30 M`, r`0.20 M`],
    correctAnswer: 2,
    explanation: r`Normality is molarity times equivalents per mole, and each Ba(OH)₂ supplies 2 OH⁻, so M = 0.60/2 = 0.30 M. Multiplying by 2 instead gives 1.2 M. Reading 0.60 M treats the base as if it had one hydroxide, and 0.20 M divides by 3.`,
  },
  [r`Molarity is moles of solute per {{c1::liter of solution}}; molality is moles per {{c2::kilogram of solvent}}.`]: {
    question: r`A solution is made from 2.0 mol of solute and 4.0 kg of solvent. Its final volume is 5.0 L. What are its molarity and molality?`,
    options: [r`0.40 M and 0.50 m`, r`0.50 M and 0.40 m`, r`0.40 M and 0.40 m`, r`2.5 M and 2.0 m`],
    correctAnswer: 0,
    explanation: r`Molarity uses liters of solution: 2.0/5.0 = 0.40 M. Molality uses kilograms of solvent: 2.0/4.0 = 0.50 m. The choice with 0.50 M and 0.40 m swaps the two denominators, 0.40 for both uses the solution volume twice, and 2.5 and 2.0 invert both ratios.`,
  },
  [r`Why is the dilution relation $M_1V_1 = M_2V_2$ valid?`]: {
    question: r`Water is added to 50 mL of 0.40 M sucrose until the volume reaches 200 mL. Which quantity is the same before and after the water is added?`,
    options: [r`Molarity of sucrose, 0.40 M both times`, r`Moles of sucrose, 0.080 mol both times`, r`Molarity of sucrose, 0.10 M both times`, r`Moles of sucrose, 0.020 mol both times`],
    correctAnswer: 3,
    explanation: r`Adding solvent changes the volume but not the amount of solute, which is (0.40 M)(0.050 L) = 0.020 mol before and after. The molarity is not constant: it drops from 0.40 M to 0.10 M. The 0.080 mol value multiplies the starting molarity by the final volume.`,
  },
  [r`Oxidation is {{c1::loss of electrons}} and appears as {{c2::an increase in oxidation number}}.`]: {
    question: r`In which of these changes is the starting species oxidized?`,
    options: [r`Cr₂O₇²⁻ → Cr³⁺`, r`SO₃²⁻ → SO₄²⁻`, r`H₂O₂ → H₂O`, r`Cu²⁺ → Cu`],
    correctAnswer: 1,
    explanation: r`Sulfur goes from +4 in sulfite to +6 in sulfate, and a rising oxidation number means electrons were lost. Chromium falls from +6 to +3, oxygen falls from −1 in peroxide to −2 in water, and copper falls from +2 to 0. Those three are all reductions.`,
  },
  [r`In assigning oxidation numbers, O is normally {{c1::$-2$}} but $-1$ in peroxides, and H is {{c2::$+1$}} but $-1$ in metal hydrides.`]: {
    question: r`What are the oxidation numbers of hydrogen in CaH₂ and of oxygen in H₂O₂?`,
    options: [r`H is −1 and O is −1`, r`H is +1 and O is −2`, r`H is +1 and O is −1`, r`H is −1 and O is −2`],
    correctAnswer: 0,
    explanation: r`CaH₂ is a metal hydride, so with Ca at +2 each H is −1. H₂O₂ is a peroxide, so with each H at +1 each O is −1. The other choices apply the usual +1 for hydrogen or −2 for oxygen to one or both of these exceptions.`,
  },
  [r`Half-reactions are scaled so that {{c1::electrons lost equal electrons gained}}.`]: {
    question: r`The half-reactions Al → Al³⁺ + 3e⁻ and Cu²⁺ + 2e⁻ → Cu are combined into one balanced equation. How many Al atoms and Cu²⁺ ions appear, and how many electrons are transferred?`,
    options: [r`3 Al and 2 Cu²⁺, with 6 electrons`, r`1 Al and 1 Cu²⁺, with 5 electrons`, r`2 Al and 3 Cu²⁺, with 6 electrons`, r`2 Al and 3 Cu²⁺, with 5 electrons`],
    correctAnswer: 2,
    explanation: r`The least common multiple of 3 and 2 is 6, so the aluminum half-reaction is doubled and the copper one is tripled, and 6 electrons cancel. Using 3 Al and 2 Cu²⁺ swaps the multipliers, so 9 electrons are lost but only 4 gained. Counting 5 electrons adds the two electron counts instead of matching them.`,
  },
  [r`At the equivalence point of a titration, what quantity is equal on the two sides?`]: {
    question: r`A solution of the weak base NH₃ is titrated with HCl. Which statement describes the equivalence point?`,
    options: [r`Moles of HCl added equal the starting moles of NH₃; pH is exactly 7`, r`Moles of HCl added equal the starting moles of NH₃; pH is below 7`, r`Moles of HCl added equal half the starting moles of NH₃; pH is 7`, r`Moles of HCl added equal the starting moles of NH₃; pH is above 7`],
    correctAnswer: 1,
    explanation: r`Equivalence means the acid added exactly matches the base originally present, mole for mole. The flask then holds NH₄⁺, a weak acid, so the pH is below 7. Equivalence is not defined by pH 7, half the moles is the half-equivalence point, and a pH above 7 belongs to a weak acid titrated with strong base.`,
  },
  [r`How many equivalence points does a diprotic acid titration show, and how do the volumes relate?`]: {
    question: r`On the titration curve of a diprotic amino acid salt, the first steep jump in pH is centered at 12.5 mL of added base. Where is the second steep jump centered?`,
    options: [r`18.75 mL`, r`37.5 mL`, r`50.0 mL`, r`25.0 mL`],
    correctAnswer: 3,
    explanation: r`Each proton uses the same number of moles of base, so the second equivalence point comes at twice the first volume, 25.0 mL in total. The 18.75 mL value is the midpoint of the second buffer region. The 37.5 mL and 50.0 mL values would fit a third or fourth proton.`,
  },
  [r`Outline balancing a redox half-reaction in acidic solution.`]: {
    question: r`The half-reaction NO₃⁻ → NO is balanced in acidic solution. How many H⁺ ions and electrons appear on the left side?`,
    options: [r`4 H⁺ and 3 e⁻`, r`2 H⁺ and 3 e⁻`, r`4 H⁺ and 5 e⁻`, r`2 H⁺ and 1 e⁻`],
    correctAnswer: 0,
    explanation: r`Two H₂O on the right balance the oxygens, which needs 4 H⁺ on the left. The left side then has a charge of −1 + 4 = +3 and the right side is neutral, so 3 electrons are added on the left. Writing 2 H⁺ confuses the number of waters with the number of protons, and 5 or 1 electrons mishandle the charge count.`,
  },
  [r`To convert an acid-balanced equation to basic conditions, add {{c1::hydroxide}} to both sides to neutralize $H^{+}$, forming {{c2::water}}.`]: {
    question: r`The half-reaction MnO₄⁻ + 4H⁺ + 3e⁻ → MnO₂ + 2H₂O is balanced for acidic solution. Which is the correct form for basic solution?`,
    options: [r`MnO₄⁻ + 4H₂O + 3e⁻ → MnO₂ + 4OH⁻`, r`MnO₄⁻ + 4OH⁻ + 3e⁻ → MnO₂ + 2H₂O`, r`MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻`, r`MnO₄⁻ + 2H₂O → MnO₂ + 4OH⁻ + 3e⁻`],
    correctAnswer: 2,
    explanation: r`Adding 4 OH⁻ to each side turns the 4 H⁺ into 4 H₂O on the left, and cancelling the 2 H₂O on the right leaves 2 H₂O on the left and 4 OH⁻ on the right. Keeping 4 H₂O skips the cancelling step and unbalances the atoms. Swapping H⁺ for OH⁻ directly breaks the charge balance, and moving the electrons to the right turns a reduction into an oxidation.`,
  },
  [r`A weak acid titrated with strong base reaches equivalence at pH {{c1::above 7}} because {{c2::the conjugate base hydrolyzes water}}.`]: {
    question: r`Which of these titrations reaches its equivalence point at a pH above 7?`,
    options: [r`Nitric acid titrated with KOH`, r`Formic acid titrated with KOH`, r`Ammonia titrated with HCl`, r`Methylamine titrated with HBr`],
    correctAnswer: 1,
    explanation: r`Formic acid is weak, so at equivalence the flask holds formate, a conjugate base that pulls protons from water and makes OH⁻. Nitric acid with KOH is strong with strong and ends at pH 7. Ammonia and methylamine are weak bases, so their equivalence points hold weak conjugate acids and sit below 7.`,
  },
  [r`What is a back titration and when is it used?`]: {
    question: r`An antacid tablet is treated with 0.0100 mol of HCl, which is more than enough to dissolve all its CaCO₃ (CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂). Titrating the leftover HCl takes 0.0040 mol of NaOH. How many moles of CaCO₃ were in the tablet?`,
    options: [r`0.0060 mol`, r`0.0020 mol`, r`0.0070 mol`, r`0.0030 mol`],
    correctAnswer: 3,
    explanation: r`The HCl that reacted with the tablet is 0.0100 − 0.0040 = 0.0060 mol, and each CaCO₃ uses 2 HCl, so the tablet held 0.0030 mol. Stopping at 0.0060 mol forgets the 2:1 ratio. The 0.0020 mol value halves the leftover acid, and 0.0070 mol adds the two amounts instead of subtracting.`,
  },
  [r`Outline a gravimetric analysis calculation.`]: {
    question: r`A 0.480 g sample of a sulfate salt is dissolved, and all of its sulfate is precipitated as BaSO₄ (233 g/mol). The dried precipitate has a mass of 0.233 g. What is the percent by mass of sulfate (SO₄²⁻, 96 g/mol) in the sample?`,
    options: [r`20.0%`, r`48.5%`, r`41.2%`, r`10.0%`],
    correctAnswer: 0,
    explanation: r`0.233 g of BaSO₄ is 0.00100 mol, which contains 0.00100 mol of sulfate, or 0.096 g. Then 0.096/0.480 = 20.0%. The 48.5% value divides the whole precipitate mass by the sample mass, and 41.2% is the fraction of sulfate in BaSO₄ rather than in the sample.`,
  },
  [r`For gases at the same temperature and pressure, volume ratios equal {{c1::mole ratios}}.`]: {
    question: r`Ammonia burns by 4NH₃(g) + 5O₂(g) → 4NO(g) + 6H₂O(g). With every gas measured at the same temperature and pressure, what volume of O₂ reacts with 8.0 L of NH₃?`,
    options: [r`6.4 L`, r`8.0 L`, r`10 L`, r`40 L`],
    correctAnswer: 2,
    explanation: r`At the same temperature and pressure, gas volumes follow the mole ratio, so 8.0 L × (5/4) = 10 L of O₂. Inverting the ratio gives 6.4 L, and 8.0 L assumes the gases react one to one. The 40 L value multiplies by 5 without dividing by 4.`,
  },
  [r`Why must a titrant be standardized against a primary standard?`]: {
    question: r`A student weighs out NaOH pellets that have absorbed moisture from the air and uses that mass to prepare a solution labeled exactly 0.100 M. How does the true molarity compare with the label?`,
    options: [r`Higher, since absorbed water adds extra hydroxide`, r`Lower, since part of the weighed mass was water`, r`The same, since water does not react with NaOH`, r`Higher, since moist pellets dissolve more fully`],
    correctAnswer: 1,
    explanation: r`Some of the mass on the balance was water, so fewer moles of NaOH went into the flask than the calculation assumed, and the true molarity is below 0.100 M. Absorbed water does not create hydroxide or improve dissolving. This drift is why the solution must be standardized against a primary standard.`,
  },
  [r`Why does making a molar solution require filling to a volumetric mark rather than adding a set solvent volume?`]: {
    question: r`Student A adds 58.5 g of NaCl (58.5 g/mol) to exactly 1.000 L of water. Student B dissolves 58.5 g of NaCl in some water and then fills the flask to the 1.000 L mark. Whose solution is 1.00 M?`,
    options: [r`Only A's, since it used 1.000 L of water`, r`Both, since each holds 1.00 mol of NaCl`, r`Neither, since salt shifts both volumes`, r`Only B's, since its total volume is 1.000 L`],
    correctAnswer: 3,
    explanation: r`Molarity is moles per liter of solution. B's flask holds 1.00 mol in exactly 1.000 L of solution, so it is 1.00 M. A's solution has a total volume slightly different from 1.000 L once the salt dissolves, so equal moles do not give equal molarity.`,
  },
  [r`Dissolving 0.5 mol $CaCl_2$ in 1 L gives {{c1::0.5 M}} formula units but {{c2::1.5 M}} total ions.`]: {
    question: r`0.20 mol of Al₂(SO₄)₃ is dissolved in enough water to make 1.0 L of solution, and it dissociates completely. What is the total concentration of dissolved ions?`,
    options: [r`1.0 M`, r`0.20 M`, r`0.40 M`, r`3.4 M`],
    correctAnswer: 0,
    explanation: r`Each formula unit releases 2 Al³⁺ and 3 SO₄²⁻, which is 5 ions, so the total is 5 × 0.20 = 1.0 M. The 0.20 M value counts formula units, and 0.40 M counts only the aluminum ions. The 3.4 M value counts all 17 atoms as if sulfate broke apart.`,
  },
  [r`Milliequivalents: 1 mmol of $Ca^{2+}$ is {{c1::2 mEq}}, because equivalents count {{c2::charge}} rather than particles.`]: {
    question: r`A lab report lists serum calcium (Ca²⁺) at 2.5 mmol/L and serum sodium (Na⁺) at 140 mmol/L. What are these values in mEq/L?`,
    options: [r`2.5 mEq/L and 140 mEq/L`, r`5.0 mEq/L and 140 mEq/L`, r`5.0 mEq/L and 280 mEq/L`, r`1.25 mEq/L and 140 mEq/L`],
    correctAnswer: 1,
    explanation: r`Milliequivalents are millimoles times the size of the charge: 2.5 × 2 = 5.0 for Ca²⁺ and 140 × 1 = 140 for Na⁺. Leaving calcium at 2.5 counts particles instead of charge. Doubling sodium treats it as divalent, and 1.25 divides by the charge instead of multiplying.`,
  },
  [r`In dilute aqueous solution, 1 ppm equals {{c1::1 mg/L}}.`]: {
    question: r`A 2.0 L sample of drinking water is found to contain 3.0 mg of dissolved lead. What is the lead concentration?`,
    options: [r`6.0 ppm`, r`1.5 ppb`, r`1.5 ppm`, r`0.67 ppm`],
    correctAnswer: 2,
    explanation: r`In dilute water 1 ppm is 1 mg/L, and 3.0 mg / 2.0 L = 1.5 mg/L = 1.5 ppm. Multiplying mass by volume gives 6.0, and dividing volume by mass gives 0.67. A value of 1.5 ppb would be 1.5 micrograms per liter, a thousand times less.`,
  },
  [r`Four successive 1:10 serial dilutions leave the sample at {{c1::$10^{-4}$}} of the original concentration.`]: {
    question: r`A 2.0 M stock solution is carried through three successive 1:10 dilutions. What is the concentration in the last tube?`,
    options: [r`6.7 × 10⁻² M`, r`2.0 × 10⁻² M`, r`2.0 × 10⁻⁴ M`, r`2.0 × 10⁻³ M`],
    correctAnswer: 3,
    explanation: r`Dilution factors multiply, so three tenfold steps give 10 × 10 × 10 = 1000-fold, and 2.0/1000 = 2.0 × 10⁻³ M. Adding the factors to get a 30-fold dilution gives 6.7 × 10⁻² M. The other two values count one step too few or one too many.`,
  },
  [r`The 22.4 L per mole shortcut holds only at {{c1::STP}}; at body temperature one mole of gas occupies about {{c2::25.4 L}}.`]: {
    question: r`A patient exhales 0.10 mol of gas at body temperature (37°C) and 1.0 atm. About what volume does this gas occupy?`,
    options: [r`2.54 L`, r`2.24 L`, r`1.97 L`, r`25.4 L`],
    correctAnswer: 0,
    explanation: r`At 310 K and 1 atm a mole of gas takes up about 22.4 × (310/273) ≈ 25.4 L, so 0.10 mol occupies 2.54 L. The 2.24 L value uses the 22.4 L/mol figure, which holds only at 0°C. The 1.97 L value inverts the temperature ratio, and 25.4 L is the volume of a full mole.`,
  },
  [r`Neutralization stoichiometry is {{c1::$n_aM_aV_a = n_bM_bV_b$}}, where n counts {{c2::protons donated or accepted}}.`]: {
    question: r`25.0 mL of a Ca(OH)₂ solution is exactly neutralized by 20.0 mL of 0.100 M HCl. What is the molarity of the Ca(OH)₂ solution?`,
    options: [r`0.0800 M`, r`0.0400 M`, r`0.160 M`, r`0.0625 M`],
    correctAnswer: 1,
    explanation: r`Using $n_aM_aV_a = n_bM_bV_b$: (1)(0.100)(20.0) = (2)(M)(25.0), so M = 0.0400 M. Leaving out the 2 hydroxides per formula unit gives 0.0800 M, and putting the factor of 2 on the acid side gives 0.160 M. The 0.0625 M value swaps the two volumes.`,
  },
  [r`Water anchors: one liter of water is {{c1::1 kg}} and about {{c2::55.5 mol}}.`]: {
    question: r`A bottle holds 500 mL of pure water at room temperature. What are the mass of the water and the approximate number of moles of H₂O (18 g/mol)?`,
    options: [r`0.50 kg and about 9 mol`, r`5.0 kg and about 28 mol`, r`0.50 kg and about 28 mol`, r`0.50 kg and about 56 mol`],
    correctAnswer: 2,
    explanation: r`One liter of water is 1 kg and about 55.5 mol, so half a liter is 0.50 kg and about 28 mol (500 g / 18 g/mol). About 9 mol comes from multiplying 0.50 by 18 instead of dividing 500 by 18. About 56 mol is the value for a full liter, and 5.0 kg misplaces the decimal.`,
  },
  [r`A serum glucose of 90 mg/dL equals about {{c1::5 mM}}, using a molar mass of {{c2::180 g/mol}}.`]: {
    question: r`A patient's blood glucose is reported as 270 mg/dL. Glucose has a molar mass of 180 g/mol. What is this concentration in millimolar?`,
    options: [r`1.5 mM`, r`150 mM`, r`0.67 mM`, r`15 mM`],
    correctAnswer: 3,
    explanation: r`270 mg/dL is 2700 mg/L, or 2.7 g/L, and 2.7/180 = 0.015 M = 15 mM. Forgetting that a deciliter is a tenth of a liter gives 1.5 mM, and scaling by 100 instead of 10 gives 150 mM. The 0.67 value divides the molar mass by the reading.`,
  },
  [r`A drug is dosed at 5 mg/kg to a 70 kg adult. Set up the calculation and the conversion you will need next.`]: {
    question: r`A drug is ordered at 4 mg/kg for a 60 kg patient. The vial is labeled 20 mg/mL. What volume should be drawn up?`,
    options: [r`3.0 mL`, r`12 mL`, r`240 mL`, r`1.2 mL`],
    correctAnswer: 1,
    explanation: r`The dose is 4 mg/kg × 60 kg = 240 mg, and 240 mg ÷ 20 mg/mL = 12 mL. Stopping after the first step and calling it 240 mL skips the concentration. The 3.0 mL value divides the body mass by the concentration, and 1.2 mL is a factor-of-ten slip.`,
  },
}
