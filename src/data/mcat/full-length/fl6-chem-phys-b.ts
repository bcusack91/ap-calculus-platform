/**
 * MCAT Full-Length Form 6 — Chem/Phys, file B (passages 6–10 + 7 discretes).
 * Authored 2026-10-01 against the AAMC-blueprint rebuild brief: 400–600 word
 * passages, information + experiment mix, keys that never restate a passage
 * sentence, parallel-length options, position-balanced keys. Keys await an
 * independent blind-solve (no needsReview flags set here by design).
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL6_CHEM_PHYS_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. GENERAL CHEMISTRY — Galvanic corrosion of implants (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-cp-b-06',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Galvanic Corrosion at the Junctions of Metal Implants',
    passageText:
      'Orthopedic implants are often assembled from more than one alloy. A modular hip prosthesis may join a titanium-alloy stem to a cobalt–chromium head, and a fracture plate is sometimes fixed with screws whose composition differs from that of the plate. Body fluid is an aerated solution of roughly 0.15 M NaCl at pH 7.4, so wherever two different metals touch while both are wetted, the junction has every component of a galvanic cell: two electrodes, an electrolyte, and a metallic path for electrons.\n\nIn such a couple, the metal whose reduction half-reaction has the lower potential is oxidized and sheds cations into the fluid. The electrons it gives up pass through the metal-to-metal contact to the second metal, on whose surface dissolved oxygen is reduced; the second metal is not consumed. Standard potentials for several relevant half-reactions are listed in Table 1. Engineers exploit the same behavior deliberately. A steel ship hull or buried pipeline is wired to blocks of a metal that corrodes in its place, called a sacrificial anode, and resorbable magnesium bone screws are designed to dissolve completely as a fracture heals.\n\nThe severity of galvanic attack depends on geometry as well as on the potential difference. Because charge cannot accumulate, the total current leaving the anode must equal the total current consumed at the cathode. In aerated fluid the cathodic current is usually limited by the delivery of oxygen to the cathode and therefore grows with cathode area. How quickly the anode is eaten away at any one spot depends on its current density, the current per unit of anode area.\n\nTable 1 alone would suggest that titanium and chromium are poor choices for a wet, oxygenated environment. In practice, both metals react within milliseconds of exposure to air or water to form an adherent oxide layer only a few nanometers thick: $\\text{TiO}_2$ on titanium, and $\\text{Cr}_2\\text{O}_3$ on alloys that contain more than about 12% chromium, which include stainless steel and cobalt–chromium. The layer is nearly impermeable to metal ions, so the metal beneath it dissolves extremely slowly, a condition called passivation, and if it is scratched it re-forms as long as oxygen is available. Gold resists corrosion for a different reason, which is evident from its position in Table 1.\n\nPassive films fail under two circumstances that are common in implants. First, small repeated movements between a screw head and a plate, or within the tapered joint between a modular head and its stem, abrade the film faster than it can be repaired. Second, the fluid trapped in a narrow crevice is stagnant. Oxygen consumed there is not replaced, the film cannot re-form, and the metal inside the crevice begins to dissolve while the freely exposed surface just outside remains passive. Cations accumulating in the crevice attract chloride ions from the surrounding fluid and react with water to release $\\text{H}^+$, so that the pH of crevice fluid can fall below 2, which destabilizes the oxide still further. The products are not harmless: released cobalt, chromium, and nickel ions can provoke inflammation and bone loss around the implant, and corroded tapers are a recognized cause of revision surgery.',
    figure:
      '**Table 1.** Standard reduction potentials at 25 °C\n\n| Half-reaction | $E^\\circ$ (V) |\n|---|---|\n| Au³⁺ + 3 e⁻ → Au | +1.50 |\n| O₂ + 4 H⁺ + 4 e⁻ → 2 H₂O | +1.23 |\n| Cu²⁺ + 2 e⁻ → Cu | +0.34 |\n| Co²⁺ + 2 e⁻ → Co | −0.28 |\n| Fe²⁺ + 2 e⁻ → Fe | −0.44 |\n| Cr³⁺ + 3 e⁻ → Cr | −0.74 |\n| Zn²⁺ + 2 e⁻ → Zn | −0.76 |\n| Ti²⁺ + 2 e⁻ → Ti | −1.63 |\n| Mg²⁺ + 2 e⁻ → Mg | −2.37 |',
    questions: [
      {
        question: 'A fracture plate made of unalloyed iron is to be protected by clamping a small block of a second metal to it. According to Table 1, which metal would cause the iron plate to serve as the cathode of the resulting couple?',
        options: ['Gold', 'Copper', 'Zinc', 'Cobalt'],
        correctAnswer: 2,
        explanation:
          'In a couple, the metal with the lower reduction potential is the one oxidized. Zinc (−0.76 V) lies below iron (−0.44 V), so zinc becomes the anode and dissolves while oxygen is reduced on the iron, which is then the cathode and is protected. Gold (+1.50 V), copper (+0.34 V), and cobalt (−0.28 V) all lie above iron, so in each of those couples iron would be the anode and would corrode faster than it does alone.',
        optionExplanations: [
          'Gold (+1.50 V) lies far above iron (−0.44 V) in Table 1, so iron would have the lower reduction potential, be oxidized, and serve as the anode. Clamping gold to iron accelerates the iron’s corrosion rather than protecting it.',
          'Copper (+0.34 V) is above iron (−0.44 V), so in a copper–iron couple iron is the metal oxidized. The iron plate would become the anode and corrode faster than it does alone, the opposite of protection.',
          'The metal with the lower reduction potential is oxidized. Zinc (−0.76 V) lies below iron (−0.44 V), so zinc becomes the anode and dissolves while oxygen is reduced on the iron, making iron the protected cathode, exactly like a sacrificial anode on a ship hull.',
          'Cobalt (−0.28 V) is above iron (−0.44 V) in Table 1, though only slightly. Iron would still have the lower potential and be oxidized, so iron would be the anode in this couple, not the cathode.',
        ],
        skill: '4C galvanic couples: choosing a sacrificial anode from reduction potentials (Skill 2)',
      },
      {
        question: 'Table 1 shows that titanium has a far more negative reduction potential than iron, yet titanium implants corrode far more slowly than iron ones. This observation illustrates that a standard reduction potential:',
        options: [
          'shows whether a redox process is favorable, not how fast it runs',
          'applies to a pure metal but changes sign once the metal is alloyed',
          'predicts the rate of a redox process only if chloride ion is absent',
          'describes electron transfer to hydrogen ion but not to dissolved oxygen',
        ],
        correctAnswer: 0,
        explanation:
          'A reduction potential is a thermodynamic quantity: it fixes the sign and size of the free-energy change but says nothing about the rate. Oxidation of titanium is strongly favorable, and it happens at once, but the oxide it produces then blocks ion and electron movement, so the continuing reaction is kinetically hindered. Alloying does not reverse the sign of a potential. Chloride matters because it attacks the film, not because potentials stop predicting anything in its presence. Standard potentials can be combined with any partner half-reaction, including the reduction of oxygen listed in the same table.',
        optionExplanations: [
          'A reduction potential is a thermodynamic quantity fixing the sign and size of the free-energy change, not the rate. Titanium oxidizes at once, but the TiO₂ film it forms blocks further ion and electron movement, so continued corrosion is kinetically hindered despite being strongly favorable.',
          'Alloying does not reverse the sign of a potential, and the titanium in implants behaves as the passage describes regardless of alloying. The slow corrosion is due to the passive oxide film, not to a changed thermodynamic tendency.',
          'Chloride matters because it attacks the passive film in crevices, not because potentials stop predicting favorability when it is present. Potentials never predict rates in any case, with or without chloride.',
          'Standard potentials can be combined with any partner half-reaction, including the reduction of oxygen listed in Table 1 itself. The potential still correctly predicts that titanium oxidation by oxygen is favorable; it simply says nothing about speed.',
        ],
        skill: '4C thermodynamic tendency versus rate in redox chemistry (Skill 1)',
      },
      {
        question: 'Two fixation designs use the same pair of unpassivated metals, M and N, where M has the lower reduction potential. In Design 1, small screws of M hold a large plate of N. In Design 2, small screws of N hold a large plate of M. Compared with the metal M in Design 2, the metal M in Design 1 is expected to be penetrated:',
        options: [
          'more slowly, since a small anode can release fewer electrons each second',
          'more slowly, since a large cathode spreads its current over more surface',
          'more rapidly, since a small anode has a lower reduction potential',
          'more rapidly, since a large cathode sends its current through a small anode',
        ],
        correctAnswer: 3,
        explanation:
          'M is the anode in both designs. The total current is set largely by the cathode area, and all of that current must leave through the anode. In Design 1 a large cathode (the plate of N) is paired with a small anode (the screws of M), so the anodic current density, and with it the depth of metal lost per unit time, is high. In Design 2 the cathode is small and the anode large, so a smaller current is spread over more anode surface. Anode size does not cap the current in the way the first option claims, the current density that matters is that of the anode rather than the cathode, and a reduction potential is a property of the metal, not of the size of the piece.',
        optionExplanations: [
          'Anode size does not cap the current in this way. The total current is limited mainly by oxygen delivery to the cathode, and all of it must leave through the anode, so a small anode suffers a high current density and is penetrated faster, not slower.',
          'Spreading current over a large cathode lowers the cathodic current density, but what determines how fast the anode is penetrated is the anodic current density. A large cathode draws a large total current that concentrates on the small anode.',
          'A reduction potential is a property of the metal, not the size of the piece. M has the same potential in both designs; the difference between the designs lies in the geometry and the resulting current density.',
          'M is the anode in both designs. Total current is set largely by cathode area and must all exit through the anode, so a large N plate paired with small M screws gives high anodic current density and rapid penetration; in Design 2 a smaller current spreads over a large M plate.',
        ],
        skill: '4C current balance and anodic current density (Skill 2)',
      },
      {
        question: 'While a crevice in a passivated implant is actively corroding, the electrons released by the metal dissolving inside the crevice are consumed mainly by the:',
        options: [
          'oxidation of water on the passive surface just outside the crevice',
          'reduction of oxygen on the passive surface outside the crevice',
          'reduction of chloride ions in the fluid trapped inside the crevice',
          'oxidation of metal cations in the fluid trapped inside the crevice',
        ],
        correctAnswer: 1,
        explanation:
          'Electrons released in an oxidation must be taken up by a reduction, and the available oxidizing agent is dissolved oxygen. Oxygen has been used up inside the stagnant crevice, so the reduction takes place where oxygen is still supplied, on the exposed surface outside, with the electrons travelling there through the metal. That makes the crevice interior the anode and the outside surface the cathode. Oxidations release electrons rather than consume them, which rules out both oxidation options. Chloride is already in its lowest common oxidation state and cannot accept electrons; it enters the crevice to balance the charge of the metal cations.',
        optionExplanations: [
          'Oxidation releases electrons rather than consuming them, so it cannot be the sink for electrons produced by dissolving metal. Water is not oxidized here; dissolved oxygen is reduced on the passive surface.',
          'Electrons released by oxidation must be taken up by a reduction, and the only oxidant available is dissolved oxygen. Oxygen is depleted inside the stagnant crevice, so reduction occurs where oxygen is still supplied, on the exposed surface outside, with electrons traveling there through the metal.',
          'Chloride is already in its lowest common oxidation state (−1) and cannot accept electrons. It migrates into the crevice to balance the charge of accumulating metal cations, not to be reduced.',
          'Oxidation of cations would release more electrons, not consume them. Metal cations in the crevice react with water to release H⁺ and lower the pH, but this hydrolysis is not a redox process that absorbs electrons.',
        ],
        skill: '4C locating the cathodic half-reaction in a corrosion cell (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. PHYSICS — Light microscope: magnification vs resolution (experiment)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-cp-b-07',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Resolving Power of Two Microscope Objectives',
    passageText:
      'A compound light microscope forms its image in two stages. The objective, a converging lens system of short focal length, is placed slightly more than one focal length from the specimen and produces an enlarged intermediate image inside the microscope tube. The eyepiece, a second converging lens, is positioned so that this intermediate image lies just inside its focal point, and the observer views the result through the eyepiece. The total magnification is the product of the magnifications of the two stages.\n\nMagnification, however, does not determine how much detail an image contains. Because light is a wave, it spreads out, or diffracts, on passing through the finite opening of the objective, so that each point of the specimen is imaged not as a point but as a small blurred disk. Two neighboring points can be told apart only if their disks do not overlap too much. For a specimen illuminated through a properly adjusted condenser, the smallest separation that can be resolved is approximately\n\n$d = \\dfrac{\\lambda}{2\\,\\text{NA}}$\n\nwhere $\\lambda$ is the wavelength of the light in vacuum and NA is the numerical aperture of the objective, $\\text{NA} = n \\sin\\theta$. Here $n$ is the refractive index of the medium between the coverslip over the specimen and the front lens of the objective, and $\\theta$ is the half-angle of the widest cone of light from the specimen that the objective can accept. A dry objective works through air ($n = 1.00$). An oil-immersion objective is used with a drop of oil ($n = 1.50$, nearly the same as glass) filling the gap.\n\nStudents compared two objectives on the same microscope, each used with a 10× eyepiece: Objective X, a 20× dry objective, and Objective Y, a 100× oil-immersion objective used with the oil described above. The specimen was a calibration slide bearing groups of parallel opaque lines. Within each group the lines were evenly spaced, and the spacing decreased from group to group in small steps. Light from the lamp passed through one of six narrow-band filters before reaching the condenser, so that the slide was illuminated at a single known wavelength. For each objective and each filter, three students independently recorded the finest spacing whose lines could still be seen as separate, and the mean of the three values was taken as the measured $d$. The condenser was readjusted for each objective, and the lamp was adjusted so that all images appeared equally bright. The results are shown in Figure 1.\n\nThe students planned to use the microscope to examine cultured cells, in which mitochondria are typically 500 to 1000 nm across and ribosomes about 25 nm across. They also considered whether the performance of the microscope could be improved by adding a camera that enlarges the image a further fivefold, or by switching to an ultraviolet lamp, noting that ordinary glass lenses absorb strongly at wavelengths below about 350 nm.',
    chart: {
      title: 'Figure 1. Smallest resolved line spacing versus illumination wavelength for two objectives',
      kind: 'line',
      xLabel: 'Wavelength',
      xUnit: 'nm',
      yLabel: 'Smallest resolved spacing, d',
      yUnit: 'nm',
      xValues: [400, 450, 500, 550, 600, 650],
      yValues: [160, 180, 200, 220, 240, 260],
      seriesLabel: 'Objective Y (100×, oil immersion)',
      comparisonSeries: [{ label: 'Objective X (20×, dry)', yValues: [400, 450, 500, 550, 600, 650] }],
    },
    questions: [
      {
        question: 'Based on Figure 1, the numerical aperture of Objective Y is closest to:',
        options: ['0.40', '0.80', '1.25', '2.50'],
        correctAnswer: 2,
        explanation:
          'Rearranging $d = \\lambda/(2\\,\\text{NA})$ gives $\\text{NA} = \\lambda/(2d)$. For Objective Y at 500 nm, $d$ = 200 nm, so NA = 500/(2 × 200) = 1.25; any other point on the line gives the same value. The value 0.40 is $d/\\lambda$, the value 0.80 is $2d/\\lambda$ (the ratio inverted), and 2.50 is $\\lambda/d$ with the factor of 2 omitted.',
        optionExplanations: [
          'A value of 0.40 is $d/\\lambda$ (200/500), the reciprocal of the ratio needed. Numerical aperture is $\\lambda/(2d)$, which has wavelength in the numerator.',
          'A value of 0.80 is $2d/\\lambda$ (400/500), the inverse of the correct expression. Inverting $\\text{NA} = \\lambda/(2d)$ gives a number below 1 that happens to look like a plausible dry-objective NA, but it is not.',
          'Rearranging $d = \\lambda/(2\\,\\text{NA})$ gives $\\text{NA} = \\lambda/(2d)$. At 500 nm Objective Y resolves 200 nm, so NA = 500/(2 × 200) = 1.25; every other point on the Y line gives the same value, consistent with an oil-immersion objective.',
          'A value of 2.50 is $\\lambda/d$ with the factor of 2 omitted. An NA of 2.50 would also exceed the maximum possible value $n \\sin\\theta$ with $n = 1.50$ oil, which cannot be greater than 1.50.',
        ],
        skill: '4D numerical aperture from resolution data (Skill 4)',
      },
      {
        question: 'Suppose Objective Y were used with air instead of oil filling the gap, and that the half-angle $\\theta$ of the cone it accepts were unchanged. With the 600-nm filter, the smallest spacing it could resolve would be closest to:',
        options: ['240 nm', '360 nm', '540 nm', '900 nm'],
        correctAnswer: 1,
        explanation:
          'With oil, Figure 1 gives $d$ = 240 nm at 600 nm. Because $\\text{NA} = n\\sin\\theta$, replacing oil ($n$ = 1.50) with air ($n$ = 1.00) at fixed $\\theta$ divides NA by 1.5, and since $d$ is inversely proportional to NA, $d$ is multiplied by 1.5: 240 nm × 1.5 = 360 nm. The value 240 nm assumes the medium has no effect. The value 540 nm applies the factor of 1.5 twice, and 900 nm multiplies the wavelength itself by 1.5.',
        optionExplanations: [
          'A value of 240 nm assumes the medium between coverslip and lens has no effect. Because $\\text{NA} = n\\sin\\theta$, replacing oil with air lowers $n$ from 1.50 to 1.00 and reduces NA, which must worsen resolution.',
          'From Figure 1, $d$ = 240 nm at 600 nm with oil. Replacing oil ($n$ = 1.50) with air ($n$ = 1.00) at fixed $\\theta$ divides NA by 1.5, and since $d \\propto 1/\\text{NA}$, $d$ grows by 1.5: 240 × 1.5 = 360 nm.',
          'A value of 540 nm applies the factor of 1.5 twice (240 × 2.25). The refractive index enters NA only once, linearly, so $d$ scales by a single factor of 1.5.',
          'A value of 900 nm multiplies the wavelength itself by 1.5 (600 × 1.5). The refractive index does not change the vacuum wavelength used in the formula; it changes NA, which scales $d$ from 240 nm, not from 600 nm.',
        ],
        skill: '4D refractive index and numerical aperture (Skill 2)',
      },
      {
        question: 'Using Objective X and the 500-nm filter, a student views a group of lines spaced 300 nm apart and then replaces the 10× eyepiece with a 25× eyepiece. Compared with the first view, the lines in the second view will appear:',
        options: [
          'larger and now separate, since the total magnification has risen to 500×',
          'the same size but now separate, since the eyepiece adds resolving power',
          'larger but still merged, since the eyepiece enlarges a blurred image',
          'the same size and still merged, since the objective sets the magnification',
        ],
        correctAnswer: 2,
        explanation:
          'At 500 nm, Objective X resolves nothing finer than about 500 nm (Figure 1), so lines 300 nm apart are already merged in the intermediate image that the objective forms. The eyepiece magnifies that image, blur included, so a stronger eyepiece makes the pattern larger without recovering detail that diffraction at the objective removed. Total magnification does rise to 20 × 25 = 500×, but resolution depends on wavelength and numerical aperture, not on magnification. The eyepiece contributes to total magnification, so the image does not stay the same size.',
        optionExplanations: [
          'Total magnification does rise to 20 × 25 = 500×, but resolution depends on wavelength and numerical aperture, not magnification. Lines 300 nm apart are already merged in the objective’s intermediate image and stay merged however much the eyepiece enlarges them.',
          'The eyepiece adds no resolving power; the smallest resolvable separation is set by the objective’s NA and the wavelength. Moreover, a stronger eyepiece increases total magnification, so the image does not stay the same size.',
          'At 500 nm Objective X resolves nothing finer than about 500 nm (Figure 1), so 300 nm lines are merged in the intermediate image. The eyepiece magnifies that image, blur included, making the pattern larger without recovering detail diffraction removed at the objective.',
          'The eyepiece contributes to total magnification, which is the product of the two stages, so swapping 10× for 25× enlarges the image 2.5-fold. The lines are indeed still merged, but they do not stay the same size.',
        ],
        skill: '4D magnification versus resolution (Skill 1)',
      },
      {
        question: 'A student argues that Objective Y resolved finer lines than Objective X only because it magnifies more. Which additional procedure would best separate the effect of numerical aperture from that of magnification?',
        options: [
          'Measuring $d$ for Objective Y at several settings of an iris that narrows the cone it accepts',
          'Measuring $d$ for both objectives with two additional filters, at 700 nm and at 750 nm',
          'Replacing the calibration slide with one whose groups of lines are more finely spaced',
          'Having six students rather than three record the finest spacing seen with each filter',
        ],
        correctAnswer: 0,
        explanation:
          'The two objectives differ in both magnification and numerical aperture, so the two variables are confounded. An iris that narrows the accepted cone lowers $\\theta$, and therefore NA, while the magnification of Objective Y stays at 100×; if $d$ grows as the iris closes, NA rather than magnification is responsible. Adding wavelengths extends both lines but leaves the two objectives differing in the same two ways. A finer slide or more observers would improve the precision of each measurement without separating the two variables.',
        optionExplanations: [
          'The objectives differ in both magnification and NA, so the variables are confounded. An iris that narrows the accepted cone lowers $\\theta$ and hence NA while Objective Y’s magnification stays 100×; if $d$ grows as the iris closes, NA, not magnification, is responsible.',
          'Adding 700 and 750 nm filters would extend both lines in Figure 1 but leaves the two objectives differing in both magnification and NA at every wavelength. It provides more data without separating the two variables.',
          'A more finely spaced slide would improve the precision with which $d$ is located but would still compare two objectives that differ in two properties at once. It does nothing to isolate NA from magnification.',
          'More observers reduce random error in each reading of the finest resolved spacing but leave the experimental design unchanged. The confound between magnification and numerical aperture remains.',
        ],
        skill: '4D isolating a confounded variable in an optics experiment (Skill 3)',
      },
      {
        question: 'Relative to the specimen, the intermediate image formed by the objective and the final image seen through the eyepiece are, respectively:',
        options: [
          'real and upright; virtual and upright',
          'virtual and upright; real and inverted',
          'real and inverted; virtual and upright',
          'real and inverted; virtual and inverted',
        ],
        correctAnswer: 3,
        explanation:
          'The specimen lies outside the focal length of the converging objective, so the objective forms a real, inverted image. That image lies inside the focal length of the converging eyepiece, which therefore acts as a magnifier and forms a virtual image that is upright relative to its own object. Because its object is the already inverted intermediate image, the final image remains inverted relative to the specimen. A single converging lens never produces a real image that is upright, and an object beyond the focal point does not give a virtual image.',
        optionExplanations: [
          'A single converging lens never produces a real image that is upright. The specimen lies outside the objective’s focal length, so the intermediate image is real but inverted, not upright.',
          'An object beyond the focal point of a converging lens gives a real image, not a virtual one, so the objective does not form a virtual intermediate image. The eyepiece, acting as a magnifier, forms a virtual image, not a real one.',
          'The intermediate image is correctly real and inverted, but the eyepiece forms a virtual image that is upright relative to its own object, the already inverted intermediate image. Relative to the specimen, the final image therefore remains inverted, not upright.',
          'The specimen lies outside the objective’s focal length, so the objective forms a real, inverted image. That image lies inside the eyepiece’s focal length, so the eyepiece acts as a magnifier and forms a virtual image, upright relative to its object but still inverted relative to the specimen.',
        ],
        skill: '4D image formation by a two-lens system (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. BIOCHEMISTRY — Carbonic anhydrase: kcat, kcat/Km, diffusion limit (experiment)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-cp-b-08',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Carbonic Anhydrase and the Limits of Catalytic Efficiency',
    passageText:
      'The hydration of carbon dioxide, CO₂ + H₂O → HCO₃⁻ + H⁺, proceeds in water without a catalyst, but slowly: at 25 °C the first-order rate constant for the disappearance of dissolved $\\text{CO}_2$ is about 0.04 $\\text{s}^{-1}$, which corresponds to a half-life of roughly 17 s. A red blood cell spends less than one second in a tissue capillary, so the uncatalyzed reaction could convert very little of the $\\text{CO}_2$ that the cell takes up. Human carbonic anhydrase II (CA II), an abundant zinc enzyme of the red cell, removes this limitation.\n\nTwo parameters describe how good an enzyme is. The turnover number, $k_{cat}$, is the maximal rate divided by the total enzyme concentration: the number of substrate molecules converted per active site per second when the enzyme is saturated. The ratio $k_{cat}/K_m$, called the catalytic efficiency, governs the rate when the substrate concentration is far below $K_m$, where $v = (k_{cat}/K_m)[\\text{E}]_t[\\text{S}]$; it has the units of a second-order rate constant. An enzyme cannot act on its substrate faster than the two encounter one another by diffusion, which for a small molecule and a protein in water corresponds to a rate constant of about $10^8$ to $10^9\\ \\text{M}^{-1}\\,\\text{s}^{-1}$.\n\nIn the active site of CA II, a $\\text{Zn}^{2+}$ ion is held by three histidine side chains, and its fourth coordination position is occupied by a water molecule. The proposed mechanism has two stages. In the first, zinc-bound hydroxide attacks $\\text{CO}_2$ to form bicarbonate, which is then displaced by a new water molecule. In the second, the zinc-bound water must lose a proton to regenerate the hydroxide. This proton is thought to be passed to the side chain of His64, about 7 Å from the zinc, and from there to buffer molecules in the surrounding solution.\n\nTo examine this proposal, investigators measured initial rates of $\\text{CO}_2$ hydration by a stopped-flow method, in which enzyme and $\\text{CO}_2$ solutions are mixed within milliseconds and the release of $\\text{H}^+$ is followed with an indicator dye. From rates measured over a range of $\\text{CO}_2$ concentrations at 25 °C, they obtained $k_{cat}$ and $K_m$ in buffers from pH 5 to pH 10, both for wild-type CA II and for a mutant, H64A, in which His64 is replaced by alanine. The buffers used were too bulky to enter the active site. The values of $k_{cat}$ are shown in Figure 1; at every pH tested, $k_{cat}$ of H64A was one-tenth that of the wild type. For both enzymes, $K_m$ for $\\text{CO}_2$ was 10 mM and did not vary with pH. The zinc content and the circular dichroism spectrum of H64A were indistinguishable from those of the wild type.\n\nIn a separate series, the investigators raised the assay temperature from 25 °C to 35 °C at pH 9. The rate constant of the uncatalyzed reaction increased 2.2-fold, whereas $k_{cat}$ of the wild-type enzyme increased 1.3-fold.',
    chart: {
      title: 'Figure 1. Turnover number of wild-type and H64A carbonic anhydrase II versus pH (25 °C)',
      kind: 'line',
      xLabel: 'pH',
      yLabel: 'kcat',
      yUnit: '×10⁴ s⁻¹',
      xValues: [5, 6, 7, 8, 9, 10],
      yValues: [1, 9, 50, 91, 99, 100],
      seriesLabel: 'Wild type',
      comparisonSeries: [{ label: 'H64A', yValues: [0.1, 0.9, 5.0, 9.1, 9.9, 10.0] }],
    },
    questions: [
      {
        question: 'Based on Figure 1 and the passage, the catalytic efficiency of wild-type CA II at pH 9 is closest to:',
        options: [
          '$1 \\times 10^{4}\\ \\text{M}^{-1}\\,\\text{s}^{-1}$',
          '$1 \\times 10^{6}\\ \\text{M}^{-1}\\,\\text{s}^{-1}$',
          '$1 \\times 10^{8}\\ \\text{M}^{-1}\\,\\text{s}^{-1}$',
          '$1 \\times 10^{10}\\ \\text{M}^{-1}\\,\\text{s}^{-1}$',
        ],
        correctAnswer: 2,
        explanation:
          'At pH 9 the wild-type $k_{cat}$ is $99 \\times 10^4 \\approx 1.0 \\times 10^6\\ \\text{s}^{-1}$, and $K_m$ = 10 mM = $1.0 \\times 10^{-2}$ M, so $k_{cat}/K_m \\approx 1 \\times 10^8\\ \\text{M}^{-1}\\,\\text{s}^{-1}$, which falls in the range set by diffusion. The value $10^4$ multiplies $k_{cat}$ by $K_m$ instead of dividing. The value $10^6$ is $k_{cat}$ alone, with $K_m$ left out. The value $10^{10}$ converts 10 mM to $10^{-4}$ M.',
        optionExplanations: [
          'A value of $10^4$ comes from multiplying $k_{cat}$ ($10^6$ s⁻¹) by $K_m$ ($10^{-2}$ M) instead of dividing. Catalytic efficiency is the ratio $k_{cat}/K_m$ and must carry units of M⁻¹ s⁻¹.',
          'A value of $10^6$ is $k_{cat}$ alone, about $99 \\times 10^4$ s⁻¹ at pH 9, with $K_m$ left out. Catalytic efficiency requires dividing by $K_m$ = 0.010 M, which raises the value by two orders of magnitude.',
          'At pH 9 the wild-type $k_{cat}$ is $99 \\times 10^4 \\approx 1 \\times 10^6$ s⁻¹ and $K_m$ = 10 mM = $1 \\times 10^{-2}$ M, so $k_{cat}/K_m \\approx 1 \\times 10^8$ M⁻¹ s⁻¹, within the diffusion-limited range the passage cites.',
          'A value of $10^{10}$ results from converting 10 mM to $10^{-4}$ M instead of $10^{-2}$ M. It would also exceed the diffusion limit of $10^8$–$10^9$ M⁻¹ s⁻¹, which the passage says no enzyme can surpass.',
        ],
        skill: '5E catalytic efficiency from kcat and Km (Skill 2)',
      },
      {
        question: 'The pH dependence of $k_{cat}$ for the wild-type enzyme in Figure 1 is most consistent with a rate that depends on a group that has:',
        options: [
          'a $\\text{p}K_a$ near 7 and is active in its deprotonated form',
          'a $\\text{p}K_a$ near 7 and is active in its protonated form',
          'a $\\text{p}K_a$ near 9 and is active in its deprotonated form',
          'a $\\text{p}K_a$ near 5 and is active in its protonated form',
        ],
        correctAnswer: 0,
        explanation:
          'The curve rises with pH and levels off, so activity follows the fraction of some group that has lost its proton. It reaches half of its plateau (50 of 100) at pH 7, and a group is half deprotonated when pH equals its $\\text{p}K_a$. A group active in its protonated form would give a curve that falls as pH rises. At pH 9 the enzyme is already at 99% of its maximum and at pH 5 at 1%, values that mark the ends of the transition rather than its midpoint.',
        optionExplanations: [
          'The curve rises with pH and plateaus, so activity tracks the fraction of a group that has lost its proton. Activity is half-maximal (50 of 100) at pH 7, and a group is half deprotonated when pH equals its $\\text{p}K_a$, so the $\\text{p}K_a$ is near 7.',
          'A group active in its protonated form would give a curve that falls as pH rises, since raising pH removes protons. Figure 1 shows activity rising with pH, so the active form is the deprotonated one.',
          'At pH 9 the enzyme is already at 99% of its maximum, marking the top of the transition rather than its midpoint. The $\\text{p}K_a$ is read where activity is half-maximal, which Figure 1 places at pH 7.',
          'At pH 5 activity is only 1% of maximum, the bottom of the transition, not its midpoint. In addition, the direction is wrong: activity increases with pH, so the deprotonated form, not the protonated form, is active.',
        ],
        skill: '5E reading an apparent pKa from a pH–rate profile (Skill 2)',
      },
      {
        question: 'The temperature results indicate that, compared with the uncatalyzed reaction, the reaction catalyzed by CA II has:',
        options: [
          'a higher activation energy, because its rate constant is the larger one at 25 °C',
          'a higher activation energy, because its rate constant rose by a smaller factor',
          'a lower activation energy, because its equilibrium constant is larger at 35 °C',
          'a lower activation energy, because its rate constant rose by a smaller factor',
        ],
        correctAnswer: 3,
        explanation:
          'In the Arrhenius relationship, the factor by which a rate constant grows over a given temperature interval increases with the activation energy. The catalyzed rate constant rose only 1.3-fold where the uncatalyzed one rose 2.2-fold, so the catalyzed pathway has the smaller barrier, as expected for a catalyst. A larger rate constant at 25 °C points to a lower barrier, not a higher one, and a smaller temperature response is the mark of a lower barrier. An enzyme does not alter the equilibrium constant of the reaction, so that cannot be the basis of the conclusion.',
        optionExplanations: [
          'A larger rate constant at 25 °C points to a lower activation barrier, not a higher one. The direction of the inference is reversed; catalysts work by lowering the barrier.',
          'The temperature response is correctly identified as smaller, but a smaller fractional increase in rate constant over a given temperature interval indicates a lower activation energy in the Arrhenius relationship, not a higher one.',
          'An enzyme does not alter the equilibrium constant of the reaction it catalyzes; it speeds approach to the same equilibrium. The data concern rate constants, and no equilibrium measurement was made.',
          'In the Arrhenius relationship, the factor by which a rate constant grows over a given temperature interval increases with activation energy. The catalyzed rate rose only 1.3-fold while the uncatalyzed rose 2.2-fold, so the catalyzed pathway has the smaller barrier.',
        ],
        skill: '5E activation energy and temperature sensitivity of rate constants (Skill 2)',
      },
      {
        question: 'Imidazole is the small, basic ring found in the histidine side chain. Which experiment would most directly test whether the low activity of H64A reflects the loss of a proton-transfer route?',
        options: [
          'Measuring $K_m$ of H64A for carbon dioxide at several temperatures from 15 °C to 35 °C',
          'Measuring $k_{cat}$ of H64A with increasing concentrations of free imidazole in the assay',
          'Measuring $k_{cat}$ of the wild type with increasing concentrations of enzyme in the assay',
          'Measuring the zinc content of the wild type after dialysis against a metal chelator',
        ],
        correctAnswer: 1,
        explanation:
          'If H64A is slow because protons can no longer be carried away from the zinc-bound water, then supplying a small base able to enter the active site and do the job of the missing side chain should restore $k_{cat}$ in a concentration-dependent way; no rescue would argue against the proposal. The temperature dependence of $K_m$ concerns substrate binding, which is unchanged in the mutant. Because $k_{cat}$ is a per-site quantity, it does not depend on enzyme concentration, so that measurement is uninformative. Stripping zinc from the wild type would show that zinc is required, which is not in question.',
        optionExplanations: [
          'The temperature dependence of $K_m$ concerns substrate binding, which the passage says is unchanged in the mutant (10 mM for both enzymes). It would reveal nothing about whether a proton-transfer route was lost.',
          'If H64A is slow because protons can no longer be shuttled away from the zinc-bound water, a small base able to enter the active site should substitute for the missing side chain and restore $k_{cat}$ in a concentration-dependent way. This chemical rescue directly tests the proposal.',
          'Because $k_{cat}$ is a per-active-site quantity, it does not depend on enzyme concentration. Measuring it at several enzyme concentrations in the wild type says nothing about the mutant or about proton transfer.',
          'Stripping zinc from the wild type would show that zinc is required for activity, which is not in question. It would not test whether His64 serves as a proton shuttle, and the mutant’s zinc content is already known to be normal.',
        ],
        skill: '5E chemical rescue as a test of a proposed mechanism (Skill 3)',
      },
      {
        question: 'Which conclusion about His64 is best supported by a comparison of the two curves in Figure 1, together with the other measurements on H64A?',
        options: [
          'It speeds a step of the cycle but is not the group whose ionization sets the midpoint',
          'It is the group whose ionization sets the midpoint, since the mutant loses activity',
          'It binds carbon dioxide in the active site, since the mutant turns over more slowly',
          'It anchors the zinc ion in the active site, since the mutant has a lower plateau',
        ],
        correctAnswer: 0,
        explanation:
          'The wild-type curve reaches half of its plateau at pH 7, and because the mutant has one-tenth the wild-type $k_{cat}$ at every pH, its curve has the same shape and also reaches half of its own plateau at pH 7. Removing His64 therefore slows turnover without removing or shifting the ionization that produces the pH dependence, so that ionization belongs to another group. If His64 were the titrating group, the mutant curve would lose its transition or shift it. A role in binding $\\text{CO}_2$ is contradicted by the unchanged $K_m$, and a role in holding zinc is contradicted by the unchanged zinc content.',
        optionExplanations: [
          'The wild-type curve is half-maximal at pH 7, and because H64A has one-tenth the wild-type $k_{cat}$ at every pH, its curve has the same shape and midpoint. Removing His64 slows turnover without shifting the ionization that creates the pH dependence, so that ionization belongs to another group.',
          'If His64 were the titrating group, removing it would abolish or shift the pH transition. Instead, the mutant curve has the same midpoint at pH 7 and is simply scaled down tenfold, so His64 speeds a step without being the group whose ionization sets the midpoint.',
          'A role in binding CO₂ is contradicted by the unchanged $K_m$ of 10 mM in the mutant. Slower turnover reflects a slower catalytic step, not weaker substrate binding.',
          'A role in anchoring zinc is contradicted by the mutant’s zinc content being indistinguishable from the wild type. The passage also assigns zinc coordination to three other histidines, with His64 sitting about 7 Å away.',
        ],
        skill: '5E interpreting mutant versus wild-type pH profiles (Skill 4)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. GENERAL CHEMISTRY — Stable-isotope tracers and mass spectrometry (experiment)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-cp-b-09',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Tracing Carbon and Nitrogen with Stable Isotopes',
    passageText:
      'Most elements occur in nature as mixtures of isotopes. About 98.9% of carbon atoms are ¹²C and 1.1% are ¹³C; about 99.6% of nitrogen atoms are ¹⁴N and 0.4% are ¹⁵N. Neither ¹³C nor ¹⁵N is radioactive. A compound synthesized so that chosen positions are occupied almost entirely by the heavy isotope can therefore be given to cells, animals, or human volunteers as a tracer, and its atoms can be followed into the products of metabolism.\n\nThe usual detector is a mass spectrometer, which converts molecules to gas-phase ions and sorts them by mass-to-charge ratio. Molecules of one compound that differ only in isotopic composition are called isotopologues and are named by the number of mass units above the lightest form: M+0 contains only the lightest isotope of every element, M+1 is one unit heavier, and so on. Even an unlabeled compound gives a small M+1 signal, because each of its atoms has a small chance of being a naturally occurring heavy isotope. For the molecules considered here, the heavy isotopes of hydrogen and oxygen make a negligible contribution to M+1.\n\nInvestigators used this approach to ask where cultured skeletal muscle cells obtain the atoms of two three-carbon products, lactate (C₃H₆O₃) and alanine (C₃H₇NO₂). Both are made from pyruvate, the three-carbon end product of glycolysis: lactate by reduction of pyruvate, and alanine by transfer of an amino group from glutamate to pyruvate. Glycolysis splits each six-carbon glucose molecule into two molecules of pyruvate without exchanging carbon atoms with other compounds.\n\nCells were incubated for 60 min in one of three media. In Condition 1, all nutrients had their natural isotopic composition. In Condition 2, the glucose of the medium was replaced with [U-¹³C₆]glucose, in which all six carbons are ¹³C. In Condition 3, the glucose was unlabeled, but the glutamate of the medium carried ¹⁵N in its amino group. The cells were then extracted, lactate and alanine were separated by chromatography, and each was analyzed by mass spectrometry. Table 1 gives the ion counts. Signals at M+2 were below 3% of the total in every sample and are omitted. The total lactate concentration of each extract, measured separately with an enzymatic assay, was 4.0 mM in all three conditions.\n\nBecause the efficiency with which a molecule is ionized does not depend on which isotopes it contains, the fraction of a metabolite pool present as a given isotopologue equals the share of that isotopologue in the summed ion counts for the metabolite. The investigators used the labeled fractions to estimate how much of each product came from the supplied tracer and how much came from unlabeled sources within the cells, such as stored glycogen and amino acids released by the breakdown of protein.',
    figure:
      '**Table 1.** Ion counts (thousands) for lactate and alanine isotopologues after 60 min\n\n| Condition | Labeled nutrient | Metabolite | M+0 | M+1 | M+3 |\n|---|---|---|---|---|---|\n| 1 | none | Lactate | 577 | 20 | 0 |\n| 1 | none | Alanine | 575 | 22 | 0 |\n| 2 | [U-¹³C₆]glucose | Lactate | 144 | 5 | 450 |\n| 2 | [U-¹³C₆]glucose | Alanine | 288 | 11 | 300 |\n| 3 | [¹⁵N]glutamate | Lactate | 577 | 20 | 0 |\n| 3 | [¹⁵N]glutamate | Alanine | 230 | 354 | 0 |',
    questions: [
      {
        question: 'Based on Table 1, the concentration of lactate molecules containing three ¹³C atoms in the Condition 2 extract was closest to:',
        options: ['1.0 mM', '2.0 mM', '3.0 mM', '4.0 mM'],
        correctAnswer: 2,
        explanation:
          'The M+3 share of the lactate ion counts in Condition 2 is 450/(144 + 5 + 450) = 450/599, or about 75%. Because isotopologues ionize equally well, 75% of the 4.0 mM lactate pool, or 3.0 mM, is the fully labeled form. The value 1.0 mM is the unlabeled remainder. The value 2.0 mM uses the 50% labeled share found for alanine rather than lactate. The value 4.0 mM is the whole lactate pool, which would be correct only if no lactate came from unlabeled sources.',
        optionExplanations: [
          'A value of 1.0 mM is the unlabeled remainder, about 25% of the 4.0 mM pool (144 + 5 of 599 counts). The question asks for the fully labeled M+3 fraction, which is the larger share.',
          'A value of 2.0 mM uses the 50% M+3 share found for alanine in Condition 2 (300/599) rather than lactate. Lactate is more heavily labeled, with about 75% of its counts at M+3.',
          'The M+3 share of lactate counts in Condition 2 is 450/(144 + 5 + 450) = 450/599 ≈ 75%. Isotopologues ionize equally well, so 75% of the 4.0 mM lactate pool, about 3.0 mM, carries three ¹³C atoms.',
          'A value of 4.0 mM is the whole lactate pool. It would be correct only if every lactate molecule came from the labeled glucose, but the M+0 counts show about 25% comes from unlabeled cellular sources.',
        ],
        skill: '4E fractional isotopic enrichment from ion counts (Skill 4)',
      },
      {
        question: 'In Condition 1, the M+1 signal makes up a slightly larger share of the total for alanine than for lactate. The most likely reason is that a molecule of alanine:',
        options: [
          'contains more carbon atoms, each of which may be a heavy isotope',
          'forms ions less readily, which lowers its M+0 count but not its M+1 count',
          'exchanges its amino group with glutamate that carries the tracer',
          'contains a nitrogen atom, which adds a chance of a heavy isotope',
        ],
        correctAnswer: 3,
        explanation:
          'With three carbons each having a 1.1% chance of being ¹³C, both molecules should show an M+1 share near 3.3%, as lactate does (20/597). Alanine also has one nitrogen with a 0.4% chance of being ¹⁵N, which raises its expected share to about 3.7% (22/597). Alanine and lactate both contain three carbons, so carbon count cannot explain the difference. A lower ionization efficiency would reduce every isotopologue of alanine in the same proportion and leave the shares unchanged. No ¹⁵N tracer is present in Condition 1.',
        optionExplanations: [
          'Alanine and lactate both contain three carbons, so carbon count cannot explain the difference. Each has the same chance of carrying a naturally occurring ¹³C, giving the same carbon contribution to M+1.',
          'A lower ionization efficiency would reduce every isotopologue of alanine in the same proportion, leaving the M+1 share unchanged. The passage also states that ionization efficiency does not depend on isotopic composition.',
          'No ¹⁵N tracer is present in Condition 1, where all nutrients have natural isotopic composition. Tracer transfer explains the large alanine M+1 in Condition 3, not the small difference in Condition 1.',
          'With three carbons each having a 1.1% chance of being ¹³C, both molecules show an M+1 share near 3.3%, as lactate does (20/597). Alanine also has one nitrogen with a 0.4% chance of being ¹⁵N, raising its expected share to about 3.7% (22/597).',
        ],
        skill: '4E natural isotopic abundance and the M+1 signal (Skill 2)',
      },
      {
        question: 'Suppose Condition 2 were repeated with a medium in which half of the glucose molecules were [U-¹³C₆]glucose and half were unlabeled, with metabolism otherwise unchanged. The M+3 share of the lactate ion counts would be expected to be closest to:',
        options: ['25%', '38%', '50%', '75%'],
        correctAnswer: 1,
        explanation:
          'Table 1 shows that about 75% of the lactate comes from medium glucose and 25% from unlabeled sources in the cell. Each lactate derives its three carbons intact from a single glucose molecule, so lactate made from the mixed medium glucose would be half M+3 and half M+0, giving an M+3 share of 0.50 × 75% ≈ 38%. The value 50% assumes all lactate comes from medium glucose. The value 75% ignores the dilution of the tracer, and 25% is the share that comes from unlabeled cellular sources.',
        optionExplanations: [
          'A value of 25% is the share of lactate that comes from unlabeled cellular sources. It is not the M+3 share, which depends on how much of the glucose-derived 75% carries the label.',
          'About 75% of the lactate comes from medium glucose and 25% from unlabeled cellular sources. Each lactate takes its three carbons intact from one glucose molecule, so glucose-derived lactate would be half M+3 and half M+0, giving 0.50 × 75% ≈ 38%.',
          'A value of 50% assumes all lactate derives from medium glucose, ignoring the 25% from unlabeled cellular sources shown in Table 1. Only the glucose-derived portion can be labeled, and only half of that would be M+3.',
          'A value of 75% ignores the dilution of the tracer. It is the M+3 share with fully labeled glucose; with half the glucose unlabeled, only half of glucose-derived lactate would be M+3.',
        ],
        skill: '4E label incorporation with a diluted tracer (Skill 2)',
      },
      {
        question: 'Which feature of Table 1 best supports the conclusion that the large alanine M+1 signal in Condition 3 reflects transfer of tracer nitrogen, rather than a change in how the instrument responded to M+1 ions in those samples?',
        options: [
          'The lactate M+1 signal in Condition 3 matches that in Condition 1',
          'The alanine M+3 signal in Condition 2 exceeds that seen in Condition 1',
          'The lactate M+3 signal in Condition 2 exceeds that seen for alanine',
          'The alanine M+0 signal in Condition 1 nearly matches that of lactate',
        ],
        correctAnswer: 0,
        explanation:
          'Lactate contains no nitrogen, so it cannot acquire ¹⁵N; it serves as a built-in negative control measured in the same extracts. Its M+1 signal in Condition 3 is identical to the natural-abundance value in Condition 1, so nothing about the Condition 3 samples or the instrument inflated M+1 signals in general, and the rise for alanine must reflect the label. The M+3 comparisons concern the carbon tracer in a different condition. The similar M+0 counts in Condition 1 show only that the two unlabeled pools gave similar total signals.',
        optionExplanations: [
          'Lactate contains no nitrogen and cannot acquire ¹⁵N, so it serves as a built-in negative control in the same extracts. Its M+1 signal in Condition 3 equals the natural-abundance value in Condition 1, so nothing inflated M+1 signals generally, and the alanine rise must reflect the label.',
          'The alanine M+3 signal in Condition 2 concerns the carbon tracer in a different condition. It says nothing about whether the instrument’s M+1 response changed in the Condition 3 samples.',
          'Comparing lactate and alanine M+3 in Condition 2 addresses how much of each product derives from glucose. It is a different tracer in a different condition and does not control for M+1 detection in Condition 3.',
          'Similar M+0 counts for alanine and lactate in Condition 1 show only that the two unlabeled pools gave similar total signals. They do not address whether M+1 detection was altered in the Condition 3 samples.',
        ],
        skill: '4E negative control in a tracer experiment (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. ORGANIC CHEMISTRY — Phase I and phase II drug metabolism (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl6-cp-b-10',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Organic Reactions That Clear Drugs from the Body',
    passageText:
      'Many drugs are lipophilic enough to cross cell membranes freely. The same property means that, once filtered by the kidney, they diffuse back into the blood instead of being excreted. The liver solves this problem by converting drugs into more polar compounds through two broad groups of reactions.\n\nPhase I reactions introduce or expose a polar functional group. Most are oxidations carried out by the cytochrome P450 enzymes, which contain an iron–heme center. A P450 enzyme uses $\\text{O}_2$ and two electrons supplied by NADPH to insert one oxygen atom into the substrate; the other oxygen atom leaves as water. Insertion into a C–H bond of an alkyl group gives an alcohol, and oxidation of an aromatic ring gives a phenol. If the carbon that is hydroxylated is bonded directly to a nitrogen or an oxygen atom of the drug, the product is unstable, because the new hydroxyl group and the heteroatom now share one carbon. Such a compound breaks down spontaneously: the bond between that carbon and the heteroatom is cleaved, the carbon departs as part of a carbonyl compound, and the heteroatom is left bearing a hydrogen. In this way an N-methyl amine loses its methyl group as formaldehyde (N-dealkylation), and the methyl aryl ether codeine is converted to the phenol morphine (O-dealkylation).\n\nPhase II reactions attach a small, highly polar unit supplied by the cell to a functional group on the drug or on its phase I product. Each requires an activated donor. In glucuronidation the donor is UDP-glucuronic acid, a sugar acid whose C-1 is joined to the diphosphate group of UDP by a bond in the α configuration. A hydroxyl, amino, or carboxylate group of the drug attacks C-1 from the side opposite the UDP, which departs in the same step. In sulfation, a hydroxyl or amino group of the drug attacks the sulfur atom of the donor PAPS and acquires an $\\text{SO}_3^-$ group.\n\nGlutathione conjugation differs in that the drug, not the cellular partner, is the electrophile. Glutathione is a tripeptide whose cysteine thiol is a strong nucleophile, and it intercepts electrophilic metabolites that would otherwise react with proteins and DNA. Its targets include epoxides and compounds in which a C=C bond is conjugated with a carbonyl group, such as acrolein, which is released during the metabolism of the anticancer drug cyclophosphamide.\n\nAcetaminophen illustrates how the pathways compete. Most of a normal dose is glucuronidated or sulfated on its phenol group and excreted. A few percent is oxidized by P450 enzymes to NAPQI, a reactive electrophile that glutathione converts to a harmless conjugate. After an overdose, the glucuronidation and sulfation pathways become saturated, more NAPQI forms than the glutathione of the liver can intercept, and the excess reacts with thiol groups on liver proteins, killing the cells. The antidote, N-acetylcysteine, is itself a thiol and is also a precursor for the synthesis of glutathione.',
    questions: [
      {
        question: 'Lidocaine contains a tertiary amine bearing two ethyl groups, R–N(CH₂CH₃)₂. Removal of one ethyl group by the P450 pathway described in the passage produces R–NH(CH₂CH₃) together with:',
        options: ['ethanol', 'acetaldehyde', 'acetic acid', 'formaldehyde'],
        correctAnswer: 1,
        explanation:
          'Hydroxylation occurs at the ethyl carbon attached to nitrogen, giving R–N(Et)–CH(OH)CH₃. When this intermediate collapses, the C–N bond breaks, nitrogen keeps a hydrogen, and the two-carbon fragment leaves as the carbonyl compound CH₃CHO, acetaldehyde. Ethanol would result from simple hydrolytic loss of the ethyl group, but the carbon has been oxidized and leaves as a carbonyl. Acetic acid would require a further oxidation that is not part of the dealkylation. Formaldehyde is the one-carbon product from loss of a methyl group, not an ethyl group.',
        optionExplanations: [
          'Ethanol would result from simple hydrolytic loss of the ethyl group, but the P450 pathway first oxidizes the carbon attached to nitrogen. That oxidized carbon leaves as a carbonyl compound, not an alcohol.',
          'Hydroxylation at the ethyl carbon attached to nitrogen gives R–N(Et)–CH(OH)CH₃. This unstable carbinolamine collapses: the C–N bond breaks, nitrogen keeps a hydrogen, and the two-carbon fragment departs as the carbonyl compound CH₃CHO, acetaldehyde.',
          'Acetic acid would require a further oxidation of the aldehyde that is not part of the dealkylation step. The passage specifies that the departing carbon leaves as a carbonyl compound, which for a two-carbon fragment is acetaldehyde.',
          'Formaldehyde is the one-carbon product from loss of a methyl group, as the passage describes for N-methyl amines. Lidocaine loses an ethyl group, a two-carbon fragment, which gives acetaldehyde instead.',
        ],
        skill: '5D N-dealkylation through a carbinolamine intermediate (Skill 2)',
      },
      {
        question: 'If glucuronidation occurs as described in the passage, the bond joining the drug to C-1 of the glucuronic acid unit in the product is expected to have:',
        options: [
          'the α configuration, because backside attack retains the stereocenter',
          'the α configuration, because the anomeric carbon is not a stereocenter',
          'a mixture of α and β, because a planar carbocation intermediate forms',
          'the β configuration, because backside attack inverts the stereocenter',
        ],
        correctAnswer: 3,
        explanation:
          'Attack from the side opposite the leaving group with departure of that group in the same step is an $\\text{S}_\\text{N}2$ displacement, which inverts the configuration at the carbon attacked. Because the donor is α-linked at C-1, the conjugate is β-linked. Backside attack never gives retention. C-1 of the sugar bears four different groups and is a stereocenter, which is why α and β forms exist at all. A mixture of the two would be expected from a stepwise mechanism through a planar cation, which the one-step description rules out.',
        optionExplanations: [
          'Backside attack with simultaneous departure of the leaving group is an $\\text{S}_\\text{N}2$ process that inverts, never retains, configuration at the attacked carbon. Retention would require a different mechanism.',
          'C-1 of glucuronic acid bears four different groups and is a stereocenter; that is why distinct α and β anomers exist. The donor is explicitly described as α-linked, so the product’s configuration is a meaningful question.',
          'A mixture of α and β would arise from a stepwise mechanism through a planar oxocarbenium cation. The passage describes attack and departure in the same step, a one-step process that gives a single inverted product.',
          'Attack from the side opposite the leaving group with departure in the same step is an $\\text{S}_\\text{N}2$ displacement, which inverts configuration at the attacked carbon. Since the donor is α-linked at C-1, the conjugate is β-linked.',
        ],
        skill: '5D stereochemical outcome of substitution at an anomeric carbon (Skill 2)',
      },
      {
        question: 'Which of the following compounds would have to undergo a phase I reaction before it could be glucuronidated?',
        options: ['Phenol', 'Aniline', 'Benzoic acid', 'Ethylbenzene'],
        correctAnswer: 3,
        explanation:
          'Glucuronidation needs a nucleophilic group on the drug: a hydroxyl, an amino group, or a carboxylate. Ethylbenzene is a hydrocarbon with no heteroatom, so it must first be hydroxylated, on its side chain or its ring, to give a group that can attack the donor. Phenol already has a hydroxyl group, aniline has an amino group, and benzoic acid has a carboxyl group, so each can be conjugated directly.',
        optionExplanations: [
          'Phenol already has a hydroxyl group, one of the nucleophilic groups the passage lists as able to attack UDP-glucuronic acid. It can be glucuronidated directly without a phase I step.',
          'Aniline has an amino group, which the passage names as a nucleophile capable of attacking C-1 of the donor. It needs no prior oxidation to be conjugated.',
          'Benzoic acid has a carboxyl group, and carboxylate is listed among the groups that can attack the glucuronic acid donor. Direct glucuronidation is possible.',
          'Glucuronidation needs a nucleophilic hydroxyl, amino, or carboxylate group on the drug. Ethylbenzene is a hydrocarbon with no heteroatom, so it must first be hydroxylated by a phase I reaction, on its side chain or ring, before it can be conjugated.',
        ],
        skill: '5D recognizing nucleophilic functional groups (Skill 1)',
      },
      {
        question: 'Glutathione detoxifies acrolein, CH₂=CH–CHO, by forming a new C–S bond without displacing any group. Considering the resonance structures of acrolein, the thiol sulfur is expected to bond to the:',
        options: [
          'carbonyl oxygen, which carries a partial positive charge',
          'α carbon (C-2), which carries a partial positive charge',
          'β carbon (C-3), which carries a partial positive charge',
          'β carbon (C-3), which carries a partial negative charge',
        ],
        correctAnswer: 2,
        explanation:
          'Moving the C=O π electrons onto oxygen and then the C=C π electrons toward the carbonyl carbon gives a resonance structure with a negative charge on oxygen and a positive charge on the terminal (β) carbon. The β carbon is therefore electron-poor, and the nucleophilic thiol adds there in a conjugate addition. The carbonyl oxygen carries partial negative, not positive, charge. No reasonable resonance structure places positive charge on the α carbon, and a carbon with partial negative charge would repel a nucleophile.',
        optionExplanations: [
          'The carbonyl oxygen carries partial negative charge, not positive, because resonance pushes π electron density onto it. A nucleophilic sulfur would not bond to an electron-rich oxygen.',
          'No reasonable resonance structure places positive charge on the α carbon (C-2). Delocalization of the conjugated system puts positive character on the carbonyl carbon and on the β carbon, skipping the α position.',
          'Moving C=O π electrons onto oxygen and then C=C π electrons toward the carbonyl carbon gives a resonance structure with negative charge on oxygen and positive charge on the terminal β carbon. The β carbon is electron-poor, so the thiol adds there in a conjugate addition.',
          'The β carbon is the correct site, but it carries partial positive charge, not negative. A carbon with partial negative charge would repel a nucleophilic thiol rather than attract it.',
        ],
        skill: '5D resonance and electrophilic sites in a conjugated carbonyl (Skill 1)',
      },
    ],
  },
]

export const FL6_CHEM_PHYS_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl6-cp-b-d01',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'During electrosurgery, a current of 0.50 A passes through a small volume of tissue whose resistance is 400 Ω. How much thermal energy is delivered to this tissue in 2.0 s?',
    options: ['100 J', '200 J', '400 J', '800 J'],
    correctAnswer: 1,
    explanation:
      'The rate of resistive heating is $P = I^2R = (0.50\\ \\text{A})^2(400\\ \\Omega) = 100$ W, so in 2.0 s the energy delivered is 100 W × 2.0 s = 200 J. The value 100 J is the power, with the time left out. The value 400 J uses $IR$ (the voltage, 200 V) in place of $I^2R$ before multiplying by the time. The value 800 J multiplies the resistance by the time and ignores the current.',
    optionExplanations: [
      'A value of 100 J is the power, $I^2R$ = 100 W, with the 2.0 s duration left out. Energy is power multiplied by time.',
      'Resistive heating power is $P = I^2R = (0.50)^2(400) = 100$ W. Over 2.0 s the energy delivered is 100 W × 2.0 s = 200 J.',
      'A value of 400 J uses $IR$ (the voltage, 0.50 × 400 = 200 V) in place of $I^2R$ before multiplying by time. Voltage times time is not energy; power requires $I^2R$ or $IV$.',
      'A value of 800 J multiplies the resistance (400 Ω) by the time (2.0 s) and ignores the current. Power dissipated in a resistor depends on the square of the current.',
    ],
    skill: '4C resistive heating, P = I²R (Skill 2)',
  },
  {
    id: 'fl6-cp-b-d02',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'In a hydraulic lift filled with an incompressible fluid, a downward force $F$ on a piston of area $A$ raises a load resting on a second piston of area $20A$ at constant speed. Neglecting friction, compared with the input piston, the output piston:',
    options: [
      'exerts a force of $20F$ and moves one-twentieth as far',
      'exerts a force of $20F$ and moves twenty times as far',
      'exerts a force of $F$ and moves one-twentieth as far',
      'exerts a force of $F/20$ and moves twenty times as far',
    ],
    correctAnswer: 0,
    explanation:
      'By Pascal’s principle, the pressure applied to an enclosed fluid is transmitted undiminished, so $F/A = F_{out}/20A$ and $F_{out} = 20F$. The fluid is incompressible, so the volume pushed out of the small cylinder equals the volume entering the large one, $A d_{in} = 20A\\,d_{out}$, and the output piston moves one-twentieth as far; the work done is the same on both sides. A larger force together with a larger displacement would create energy. An unchanged force would mean unequal pressures at the two pistons, and a force of $F/20$ describes a lift driven from its large piston.',
    optionExplanations: [
      'By Pascal’s principle, pressure is transmitted undiminished, so $F/A = F_{out}/(20A)$ and $F_{out} = 20F$. Incompressibility requires $A\\,d_{in} = 20A\\,d_{out}$, so the output piston moves one-twentieth as far, and work is conserved.',
      'A force of $20F$ together with twenty times the displacement would mean the output does 400 times the input work, creating energy from nothing. Incompressibility forces the large piston to move less, not more.',
      'An unchanged force of $F$ on a piston twenty times larger would mean a pressure twenty times smaller at the output, violating Pascal’s principle that pressure is the same throughout the enclosed fluid.',
      'A force of $F/20$ describes a lift driven from its large piston and read at its small one. Here the input piston is the small one, so the output force is multiplied, not divided, by 20.',
    ],
    skill: '4B Pascal’s principle and conservation of work (Skill 1)',
  },
  {
    id: 'fl6-cp-b-d03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'In a Lewis structure of the nitrate ion, $\\text{NO}_3^-$, in which every atom has a complete octet, the formal charge on the nitrogen atom is:',
    options: ['−1', '0', '+1', '+5'],
    correctAnswer: 2,
    explanation:
      'With complete octets, nitrogen forms one double bond and two single bonds to oxygen and has no lone pairs, so it is assigned half of eight bonding electrons, or four. Nitrogen has five valence electrons, so its formal charge is 5 − 4 = +1; the two singly bonded oxygens are each −1, giving the overall charge of −1. The value −1 is the charge of the whole ion, not of nitrogen. A formal charge of 0 would require nitrogen to own five electrons, as in a structure with only three bonds and a lone pair. The value +5 is the oxidation state of nitrogen, which assigns all bonding electrons to oxygen.',
    optionExplanations: [
      'A value of −1 is the charge on the whole nitrate ion, not on nitrogen. It is also the formal charge on each of the two singly bonded oxygen atoms, not the central atom.',
      'A formal charge of 0 would require nitrogen to own five electrons, as in a structure with only three bonds and a lone pair. In the full-octet nitrate structure nitrogen has four bonds and no lone pair.',
      'With complete octets, nitrogen forms one double and two single bonds to oxygen with no lone pairs, so it is assigned half of eight bonding electrons, four. Nitrogen has five valence electrons, so its formal charge is 5 − 4 = +1.',
      'A value of +5 is the oxidation state of nitrogen in nitrate, which assigns all bonding electrons to the more electronegative oxygen. Formal charge splits bonding electrons equally and gives +1.',
    ],
    skill: '5B Lewis structures and formal charge (Skill 1)',
  },
  {
    id: 'fl6-cp-b-d04',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'Equal volumes of 0.10 M aqueous solutions of two compounds are mixed. Which pair of solutes produces a precipitate?',
    options: ['NaNO₃ and KCl', 'NH₄Cl and KNO₃', 'BaCl₂ and Na₂SO₄', 'Na₂CO₃ and KOH'],
    correctAnswer: 2,
    explanation:
      'Mixing barium chloride with sodium sulfate brings together $\\text{Ba}^{2+}$ and $\\text{SO}_4^{2-}$, and barium sulfate is one of the few insoluble sulfates, so it precipitates. In every other mixture, all possible combinations of cation and anion are soluble: salts of sodium, potassium, and ammonium are soluble, as are all nitrates, and sodium and potassium carbonates and hydroxides remain dissolved.',
    optionExplanations: [
      'Sodium nitrate and potassium chloride exchange to give sodium chloride and potassium nitrate. All salts of sodium and potassium and all nitrates are soluble, so no precipitate forms.',
      'Ammonium chloride and potassium nitrate exchange to give ammonium nitrate and potassium chloride. Ammonium salts, potassium salts, and nitrates are all soluble, so everything stays dissolved.',
      'Mixing barium chloride with sodium sulfate brings together Ba²⁺ and SO₄²⁻. Barium sulfate is one of the few insoluble sulfates, so it precipitates; the sodium chloride formed stays in solution.',
      'Sodium carbonate and potassium hydroxide exchange to give potassium carbonate and sodium hydroxide. Carbonates and hydroxides of sodium and potassium are soluble, so no precipitate forms.',
    ],
    skill: '5A solubility rules and precipitation (Skill 1)',
  },
  {
    id: 'fl6-cp-b-d05',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'When 2-bromobutane is heated with sodium ethoxide in ethanol, the rate of alkene formation doubles if the ethoxide concentration is doubled. The major alkene and the mechanism by which it forms are:',
    options: [
      '1-butene, formed by an E2 mechanism',
      'trans-2-butene, formed by an E2 mechanism',
      '1-butene, formed by an E1 mechanism',
      'trans-2-butene, formed by an E1 mechanism',
    ],
    correctAnswer: 1,
    explanation:
      'A rate that depends on the concentration of the base means the base takes part in the rate-determining step, which is the mark of the one-step, bimolecular E2 mechanism expected for a secondary halide with a strong base. In an E1 reaction the rate depends only on the alkyl halide, because ionization to a carbocation is rate-determining. With a small base such as ethoxide, elimination follows Zaitsev’s rule and gives mainly the more substituted alkene, 2-butene, with the trans isomer favored over cis; 1-butene, the less substituted alkene, is the minor product.',
    optionExplanations: [
      'The E2 mechanism is correct, but with a small base such as ethoxide, elimination follows Zaitsev’s rule and gives mainly the more substituted alkene. 1-Butene, the less substituted product, is minor.',
      'A rate that doubles when base concentration doubles means the base participates in the rate-determining step, the mark of bimolecular E2, as expected for a secondary halide with a strong base. Zaitsev’s rule then favors the more substituted 2-butene, with trans favored over cis.',
      'In an E1 reaction the rate depends only on the alkyl halide, because carbocation formation is rate-determining; doubling base would not change the rate. In addition, 1-butene is the minor, less substituted product.',
      'The Zaitsev product is correctly identified, but the mechanism is not E1. An E1 rate would be independent of ethoxide concentration, whereas the observed rate doubles with base, signaling E2.',
    ],
    skill: '5D E1 versus E2 and Zaitsev’s rule (Skill 2)',
  },
  {
    id: 'fl6-cp-b-d06',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'A lipid abundant in myelin consists of sphingosine, a fatty acid joined to it by an amide bond, and a single galactose attached to the terminal hydroxyl group of sphingosine. Compared with sphingomyelin, this glycolipid:',
    options: [
      'has no phosphate group and carries no charged group in its head',
      'has no amide bond and carries two ester-linked fatty acids',
      'has a glycerol backbone and carries a net negative charge',
      'has a phosphate group and carries a positively charged amine',
    ],
    correctAnswer: 0,
    explanation:
      'Sphingomyelin and this glycolipid share the same core, sphingosine with an amide-linked fatty acid, and differ only in the head group. Sphingomyelin has phosphocholine, with a negatively charged phosphate and a positively charged quaternary amine; the glycolipid has an uncharged sugar joined directly by a glycosidic bond, with no phosphate. Both lipids contain the amide bond and a single fatty acid, neither is built on glycerol, and it is sphingomyelin, not the glycolipid, that has the phosphate and the charged amine.',
    optionExplanations: [
      'Both lipids share a sphingosine core with an amide-linked fatty acid and differ only in the head group. Sphingomyelin carries phosphocholine, with a charged phosphate and quaternary amine; the glycolipid carries an uncharged galactose attached by a glycosidic bond, with no phosphate.',
      'The glycolipid retains the amide bond joining the fatty acid to sphingosine, exactly as sphingomyelin does. Two ester-linked fatty acids describe a glycerophospholipid, not a sphingolipid.',
      'Neither sphingomyelin nor this glycolipid is built on glycerol; both use sphingosine as the backbone. The galactose head group is also uncharged, so the glycolipid carries no net negative charge.',
      'This describes sphingomyelin, not the glycolipid. The glycolipid lacks the phosphate and the positively charged choline amine; its head group is simply a sugar.',
    ],
    skill: '5D sphingolipids and glycolipids (Skill 1)',
  },
  {
    id: 'fl6-cp-b-d07',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'To bring a drug sample within the range of an assay, a technician dilutes 1.0 mL of the sample to a total volume of 50 mL, then dilutes 5.0 mL of that solution to a total volume of 100 mL. The final solution contains 2.0 μM drug. The concentration of the original sample was:',
    options: ['0.040 mM', '0.10 mM', '0.14 mM', '2.0 mM'],
    correctAnswer: 3,
    explanation:
      'From $M_1V_1 = M_2V_2$, the first step dilutes the sample 50-fold (1.0 mL to 50 mL) and the second dilutes it a further 20-fold (5.0 mL to 100 mL), for an overall factor of 50 × 20 = 1000. The original concentration was therefore 2.0 μM × 1000 = 2.0 mM. The value 0.040 mM accounts only for the second dilution, and 0.10 mM only for the first. The value 0.14 mM adds the two dilution factors (70) instead of multiplying them.',
    optionExplanations: [
      'A value of 0.040 mM accounts only for the second dilution (2.0 μM × 20). It ignores the initial 50-fold dilution from 1.0 mL to 50 mL.',
      'A value of 0.10 mM accounts only for the first dilution (2.0 μM × 50). It ignores the second 20-fold dilution from 5.0 mL to 100 mL.',
      'A value of 0.14 mM adds the two dilution factors (50 + 20 = 70) instead of multiplying them. Serial dilutions compound multiplicatively, giving an overall factor of 1000.',
      'From $M_1V_1 = M_2V_2$, the first step dilutes 50-fold (1.0 mL to 50 mL) and the second a further 20-fold (5.0 mL to 100 mL), for an overall factor of 1000. The original concentration was 2.0 μM × 1000 = 2.0 mM.',
    ],
    skill: '5A serial dilution, M₁V₁ = M₂V₂ (Skill 2)',
  },
]
