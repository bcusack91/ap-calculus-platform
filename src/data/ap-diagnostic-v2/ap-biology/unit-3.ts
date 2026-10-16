/**
 * AP Biology diagnostic v2 — Unit 3: Cellular Energetics (CED 3.1–3.5).
 * Four data sets (floating leaf-disk graph, isolated-mitochondria oxygen
 * table, enzyme pre-incubation graph, yeast aerobic/anaerobic table) plus
 * standalone items. No ETC carrier names, pathway enzyme names or
 * intermediates (3.4/3.5 exclusions), no Gibbs equation (3.3), no Km/Vmax.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'bio-u3-s1',
    title: 'Floating leaf disks under three light conditions',
    kind: 'graph',
    content:
      'Students cut 30 small disks from spinach leaves and pulled the air out of the disks so that they sank. They placed 10 disks in each of three cups of a dilute sodium bicarbonate solution, which supplies dissolved CO₂. One cup was placed under a bright lamp, one under a dim lamp and one in darkness, all at the same temperature. Every 4 minutes they counted the disks floating in each cup (Figure 1).',
    chart: {
      title: 'Figure 1. Number of leaf disks floating (of 10) over time',
      kind: 'line',
      xLabel: 'Time',
      xUnit: 'min',
      yLabel: 'Disks floating',
      yUnit: 'disks',
      xValues: [0, 4, 8, 12, 16, 20],
      yValues: [0, 1, 4, 8, 10, 10],
      seriesLabel: 'Bright light',
      comparisonSeries: [
        { label: 'Dim light', yValues: [0, 0, 1, 2, 4, 5] },
        { label: 'Darkness', yValues: [0, 0, 0, 0, 0, 0] },
      ],
    },
  },
  {
    id: 'bio-u3-s2',
    title: 'Oxygen use by isolated mitochondria',
    kind: 'table',
    content:
      'Mitochondria were isolated from liver cells and placed in a sealed chamber with buffer, phosphate and pyruvate (a fuel the mitochondria can oxidize). An electrode recorded the rate at which O₂ was used. Substances were added one after another, and after each addition the researchers recorded the rate of O₂ use and whether ATP was being made.\n\n' +
      '| Step | Addition | Rate of O₂ use (nmol O₂/min) | ATP made? |\n' +
      '|---|---|---|---|\n' +
      '| 1 | Mitochondria + pyruvate + phosphate | 8 | No |\n' +
      '| 2 | ADP | 40 | Yes |\n' +
      '| 3 | Drug X, which blocks the H⁺ channel of ATP synthase | 9 | No |\n' +
      '| 4 | Chemical U | 70 | No |',
  },
  {
    id: 'bio-u3-s3',
    title: 'Activity remaining after heating an enzyme',
    kind: 'graph',
    content:
      'Six samples of a purified enzyme were each held for 10 minutes at a different temperature. All six samples were then cooled to 30 °C, and their activity was measured at 30 °C with excess substrate. Figure 2 shows each sample’s activity as a percentage of the activity of an enzyme sample that was never heated.',
    chart: {
      title: 'Figure 2. Enzyme activity at 30 °C after 10 minutes at each holding temperature',
      kind: 'line',
      xLabel: 'Holding temperature',
      xUnit: '°C',
      yLabel: 'Activity remaining',
      yUnit: '% of unheated enzyme',
      xValues: [20, 30, 40, 50, 60, 70],
      yValues: [100, 100, 98, 85, 20, 0],
      seriesLabel: 'Enzyme samples',
    },
  },
  {
    id: 'bio-u3-s4',
    title: 'Yeast grown with and without oxygen',
    kind: 'table',
    content:
      'Two cultures of the same yeast strain, with the same number of cells, were grown in glucose solution: one supplied with O₂ and one with no O₂. Both cultures grew at the same rate, so their cells were making ATP at about the same rate. The researchers measured the rates below.\n\n' +
      '| Culture | Glucose used (mmol/h) | O₂ used (mmol/h) | CO₂ released (mmol/h) | Ethanol made (mmol/h) |\n' +
      '|---|---|---|---|---|\n' +
      '| With O₂ | 1.0 | 6.0 | 6.0 | 0 |\n' +
      '| Without O₂ | 15 | 0 | 30 | 30 |',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  {
    id: 'bio-u3-s1-q1',
    stimulusId: 'bio-u3-s1',
    unit: 'unit-3',
    topicSlug: 'photosynthesis',
    difficulty: 'easy',
    stem: 'Which statement best describes the effect of light shown in Figure 1?',
    options: [
      'Disks in bright light began floating sooner and more of them floated than disks in dim light.',
      'Disks in dim light began floating sooner, but by 20 minutes as many floated as in bright light.',
      'Disks in bright light and dim light floated at the same rate, while disks in darkness did not.',
      'Disks in all three cups floated at about the same rate, so light had little effect on the disks.',
    ],
    correctIndex: 0,
    explanation:
      'In bright light the first disk floated by 4 minutes and all 10 floated by 16 minutes; in dim light the first disk floated at 8 minutes and only 5 had floated by 20 minutes; in darkness none floated. Bright light therefore made disks float sooner and in greater numbers. Dim-light disks lagged at every time point, and the cups clearly differed.',
  },
  {
    id: 'bio-u3-s1-q2',
    stimulusId: 'bio-u3-s1',
    unit: 'unit-3',
    topicSlug: 'photosynthesis',
    difficulty: 'medium',
    stem: 'A student claims that the gas that makes the disks float is CO₂ released by cellular respiration. Which result in Figure 1 best refutes this claim?',
    options: [
      'No disks floated in darkness, where the leaf cells still respire but cannot photosynthesize.',
      'All disks in bright light floated by 16 minutes, while only half of the dim-light disks floated.',
      'No disks floated at time 0, before the cups had been placed under their light conditions.',
      'Some disks in dim light floated, showing that even a little light is enough for the gas to form.',
    ],
    correctIndex: 0,
    explanation:
      'Leaf cells carry out cellular respiration in light and in darkness, but they photosynthesize only in light. If respiratory CO₂ made the disks float, disks in the dark cup would float too; none did. The gas must come from a light-dependent process: O₂ released when water is split in the light reactions. The bright-versus-dim difference fits photosynthesis but does not by itself rule out respiration. The time-0 counts apply to every cup. Floating in dim light shows only that some light is enough, not that the gas is not CO₂.',
  },
  {
    id: 'bio-u3-s1-q3',
    stimulusId: 'bio-u3-s1',
    unit: 'unit-3',
    topicSlug: 'photosynthesis',
    difficulty: 'hard',
    stem: 'A fourth cup of 10 disks is placed under the bright lamp in water with no sodium bicarbonate, so it holds almost no dissolved CO₂. Which result is most likely, and why?',
    options: [
      'All 10 disks float sooner than in bright light with bicarbonate, because O₂ no longer has to compete with CO₂ for space in the disks.',
      'Few or no disks float, because without CO₂ the Calvin cycle stops, NADP⁺ is not regenerated, and the light reactions slow down.',
      'All 10 disks float at the same rate as in bright light with bicarbonate, because the light reactions do not use CO₂ at all.',
      'Few or no disks float, because the CO₂ in bicarbonate is the source of the O₂ atoms in the O₂ released by the leaf disks.',
    ],
    correctIndex: 1,
    explanation:
      'The Calvin cycle uses CO₂ along with ATP and NADPH and returns ADP and NADP⁺ to the light reactions. Without CO₂, the Calvin cycle stops, NADP⁺ runs out, electrons have nowhere to go, and water splitting and O₂ release slow to almost nothing, so few disks float. The light reactions do not use CO₂ directly, but they depend on the Calvin cycle to regenerate their electron acceptor, so the rate would not stay the same. The O₂ released comes from water, not from CO₂. Removing CO₂ does not speed up O₂ production.',
  },
  {
    id: 'bio-u3-s2-q1',
    stimulusId: 'bio-u3-s2',
    unit: 'unit-3',
    topicSlug: 'cellular-respiration',
    difficulty: 'medium',
    stem: 'Which explanation best accounts for the increase in the rate of O₂ use when ADP was added in Step 2?',
    options: [
      'ADP lets H⁺ flow back through ATP synthase, so the H⁺ gradient falls and electron transport speeds up.',
      'ADP takes the place of O₂ as the final electron acceptor, so more electrons pass along the chain.',
      'ADP donates its own electrons to the transport chain, so more O₂ is needed to accept them.',
      'ADP binds O₂ directly as it is converted to ATP, so O₂ is removed from the buffer faster.',
    ],
    correctIndex: 0,
    explanation:
      'Electron transport pumps H⁺ into the intermembrane space. Without ADP, ATP synthase cannot work, H⁺ cannot flow back, and the steep gradient slows further pumping and electron flow to O₂ (Step 1). Adding ADP lets H⁺ flow back through ATP synthase as ATP is made, so the gradient drops and electron transport, and with it O₂ use, speeds up. O₂ is still the final electron acceptor; ADP neither accepts nor donates electrons, and ATP synthesis does not consume O₂ directly.',
  },
  {
    id: 'bio-u3-s2-q2',
    stimulusId: 'bio-u3-s2',
    unit: 'unit-3',
    topicSlug: 'cellular-respiration',
    difficulty: 'hard',
    stem: 'Which explanation best accounts for the results of Step 3?',
    options: [
      'Drug X destroys the electron carriers of the inner membrane, so electrons can no longer reach O₂ at all.',
      'Drug X stops H⁺ from flowing back through ATP synthase, so the gradient builds and slows electron transport.',
      'Drug X acts as the final electron acceptor in place of O₂, so the mitochondria need much less O₂ than before.',
      'Drug X causes a large amount of ATP to build up, and the ATP then shuts down the transport chain directly.',
    ],
    correctIndex: 1,
    explanation:
      'With the ATP synthase channel blocked, H⁺ pumped out by the electron transport chain cannot return, so the gradient grows until it opposes further pumping. Electron transport, which is coupled to pumping, slows, and O₂ use falls back to about the Step 1 rate. The carriers are not destroyed: in Step 4, O₂ use rises to 70 nmol/min with Drug X still present. Drug X does not accept electrons, and no ATP was being made in Step 3, so ATP could not build up.',
  },
  {
    id: 'bio-u3-s2-q3',
    stimulusId: 'bio-u3-s2',
    unit: 'unit-3',
    topicSlug: 'cellular-respiration',
    difficulty: 'hard',
    stem: 'Based on Steps 3 and 4, which conclusion about chemical U is best supported?',
    options: [
      'It reactivates ATP synthase, so the mitochondria can again use the H⁺ gradient to make ATP.',
      'It lets H⁺ leak back across the inner membrane, so electron transport runs fast but makes no ATP.',
      'It replaces O₂ as the final electron acceptor, so electrons move faster along the transport chain.',
      'It blocks electron transport, so the O₂ in the chamber is used up by reactions outside the chain.',
    ],
    correctIndex: 1,
    explanation:
      'After chemical U, O₂ use jumps to 70 nmol/min while no ATP is made. If U makes the inner membrane leaky to H⁺, the gradient collapses no matter what happens at ATP synthase, so the transport chain runs at full speed with nothing to slow it, and the energy is released as heat rather than captured in ATP. ATP is still not made, so ATP synthase has not been reactivated. O₂ use rose, so O₂ is still accepting the electrons. A blocked chain would lower O₂ use, not raise it.',
  },
  {
    id: 'bio-u3-s3-q1',
    stimulusId: 'bio-u3-s3',
    unit: 'unit-3',
    topicSlug: 'enzymes-metabolism',
    difficulty: 'easy',
    stem: 'Based on Figure 2, which holding temperature was the lowest one that left the enzyme with less than half of its original activity?',
    options: ['60 °C', '50 °C', '70 °C', '40 °C'],
    correctIndex: 0,
    explanation:
      'After 10 minutes at 50 °C the enzyme kept 85% of its activity, and after 60 °C it kept only 20%, so 60 °C is the lowest holding temperature that left less than half. 70 °C also left less than half (0%), but it is not the lowest. At 40 °C, 98% remained.',
  },
  {
    id: 'bio-u3-s3-q2',
    stimulusId: 'bio-u3-s3',
    unit: 'unit-3',
    topicSlug: 'enzymes-metabolism',
    difficulty: 'hard',
    stem: 'Which conclusion is best supported by Figure 2?',
    options: [
      'The enzyme works best at 20–30 °C, because samples held at those temperatures show the most activity.',
      'Holding the enzyme at 60 °C or above changed its shape in a way that did not reverse when it was cooled.',
      'Holding the enzyme at 60 °C sped up its reactions for good, because heat gives the enzyme extra energy.',
      'Cooling the samples to 30 °C denatured the enzyme in the samples that had been held at high temperatures.',
    ],
    correctIndex: 1,
    explanation:
      'Every sample was measured at the same temperature, 30 °C. The only difference was the holding temperature, so the low activity after 60–70 °C shows lasting damage: heat disrupted the bonds holding the enzyme’s shape (denaturation), and the shape did not return on cooling. Because all activity was measured at 30 °C, the figure says nothing about the temperature at which the enzyme works fastest; that would need activity measured at each temperature. Heated samples were less active, not more. Cooling does not denature the enzyme; the samples held at 20–30 °C were also at 30 °C during the assay and kept full activity.',
  },
  {
    id: 'bio-u3-s4-q1',
    stimulusId: 'bio-u3-s4',
    unit: 'unit-3',
    topicSlug: 'cellular-respiration',
    difficulty: 'medium',
    stem: 'Based on the data, how many molecules of CO₂ does the culture without O₂ release for each molecule of glucose it uses?',
    options: ['2', '6', '30', '1'],
    correctIndex: 0,
    explanation:
      'Without O₂ the culture uses 15 mmol of glucose and releases 30 mmol of CO₂ per hour: 30 ÷ 15 = 2 CO₂ per glucose (alcohol fermentation also makes 2 ethanol per glucose, matching 30 mmol of ethanol). 6 is the value for the culture with O₂ (6.0 ÷ 1.0). 30 is the total CO₂ per hour, not per glucose. 1 divides the wrong way or counts only half the CO₂.',
  },
  {
    id: 'bio-u3-s4-q2',
    stimulusId: 'bio-u3-s4',
    unit: 'unit-3',
    topicSlug: 'cellular-respiration',
    difficulty: 'hard',
    stem: 'Which explanation best accounts for the difference in glucose use between the two cultures?',
    options: [
      'Without O₂, glucose is only partly broken down, so the cells must use far more glucose to make the same ATP.',
      'Without O₂, the cells store their extra glucose as ethanol, which they will break down when O₂ returns.',
      'Without O₂, the cells’ enzymes work much faster, so each cell breaks down glucose faster than it needs to.',
      'Without O₂, ethanol becomes the final electron acceptor of the transport chain, which wastes the glucose.',
    ],
    correctIndex: 0,
    explanation:
      'Without O₂ the culture uses 15 times as much glucose while making ATP at the same rate. Fermentation makes ATP only by glycolysis, about 2 ATP per glucose, and leaves most of glucose’s energy in ethanol; aerobic respiration also runs the Krebs cycle and oxidative phosphorylation, about 30 ATP per glucose. To match the ATP supply, the cells without O₂ must break down about 30 ÷ 2 = 15 times as much glucose, as the table shows. Ethanol is a waste product; making it regenerates NAD⁺ so glycolysis can continue, and the electron transport chain does not run without O₂. Lack of O₂ does not make enzymes faster.',
  },
  {
    id: 'bio-u3-001',
    unit: 'unit-3',
    topicSlug: 'enzymes-metabolism',
    difficulty: 'easy',
    stem: 'An intestinal enzyme hydrolyzes the bond in maltose, a disaccharide of two glucose units, but it has no effect on sucrose, a disaccharide of glucose and fructose. Which statement best explains this?',
    options: [
      'The enzyme’s active site fits the shape and chemical features of maltose but not those of sucrose.',
      'Sucrose has more energy than maltose, so its bond cannot be hydrolyzed by any enzyme in the body.',
      'The enzyme is used up after it breaks one maltose bond, so none is left over to act on sucrose.',
      'Maltose and sucrose bind the same active site, but the enzyme can only add water to glucose.',
    ],
    correctIndex: 0,
    explanation:
      'Enzymes are specific: the shape and charge of the active site fit only particular substrates. Maltose fits this enzyme’s active site and sucrose does not, so only maltose is hydrolyzed. Sucrose is hydrolyzed by a different enzyme. Enzymes are not used up by the reactions they catalyze. Sucrose contains a glucose unit too, so “acts only on glucose” would not exclude it, and the evidence points to binding, not to which monomer receives water.',
  },
  {
    id: 'bio-u3-002',
    unit: 'unit-3',
    topicSlug: 'enzymes-metabolism',
    difficulty: 'easy',
    stem: 'A student adds the same amount of catalase to hydrogen peroxide solutions buffered at pH 4, 5, 6, 7 and 8 and measures the volume of O₂ gas released in 2 minutes. What is the dependent variable in this experiment?',
    options: [
      'The volume of O₂ released in 2 minutes',
      'The pH of the buffered solution',
      'The amount of catalase added',
      'The concentration of hydrogen peroxide',
    ],
    correctIndex: 0,
    explanation:
      'The dependent variable is what is measured in response to the change the experimenter makes: the volume of O₂ released. pH is the independent variable, deliberately set to five values. The amount of catalase and the peroxide concentration are held constant (controlled variables).',
  },
  {
    id: 'bio-u3-003',
    unit: 'unit-3',
    topicSlug: 'enzymes-metabolism',
    difficulty: 'medium',
    stem: 'A student finds that a potato extract makes hydrogen peroxide release O₂ bubbles, and claims that an enzyme in the extract causes the reaction. Which additional trial would best test whether the bubbles depend on an active enzyme?',
    options: [
      'Adding the same amount of extract that has been boiled first to the same peroxide solution',
      'Adding twice as much fresh potato extract to the same volume of peroxide solution',
      'Adding the same amount of fresh extract to peroxide that has been kept at a lower temperature',
      'Adding the same amount of fresh extract to a larger container of the same peroxide solution',
    ],
    correctIndex: 0,
    explanation:
      'Boiling denatures proteins. If boiled extract releases no bubbles while fresh extract does, and everything else is the same, the bubbles depend on an active protein catalyst. More extract, colder peroxide or a larger container all still use active enzyme, so they change the rate of a reaction already happening rather than testing whether an enzyme is responsible.',
  },
  {
    id: 'bio-u3-004',
    unit: 'unit-3',
    topicSlug: 'enzyme-kinetics',
    difficulty: 'hard',
    stem: 'Two inhibitors, A and B, each cut an enzyme’s activity to about 10%. The enzyme is then placed in a dialysis bag, which lets small molecules such as the inhibitors diffuse out but keeps the enzyme in. After dialysis, the enzyme treated with A has 95% of its activity and the enzyme treated with B still has 10%. Which conclusion is best supported?',
    options: [
      'A binds the enzyme reversibly, while B stays bound, most likely by a covalent bond.',
      'A binds the enzyme permanently, while B is removed by dialysis along with water.',
      'A and B both bind reversibly, but B binds at the active site and A elsewhere.',
      'A and B both denature the enzyme, but the enzyme treated with A refolds faster.',
    ],
    correctIndex: 0,
    explanation:
      'Activity returns after inhibitor A diffuses away, so A was bound loosely (reversibly). Activity does not return for B, so B is still attached even though small molecules can leave the bag; a covalent bond to the enzyme would explain this (irreversible inhibition). A permanent binder would not lose its effect on dialysis. Reversible inhibitors, whether at the active site or elsewhere, would both diffuse out and activity would recover in both. Nothing suggests denaturation, and A’s recovery is explained by its removal.',
  },
  {
    id: 'bio-u3-005',
    unit: 'unit-3',
    topicSlug: 'cellular-respiration',
    difficulty: 'medium',
    stem: 'Living cells build and maintain highly ordered structures, such as membranes and proteins, from simpler molecules. Which statement best explains how they can do this?',
    options: [
      'Cells take in energy, such as from food, and use it to build order while releasing heat to their surroundings.',
      'Cells create new energy from nothing during metabolism, which pays for building their ordered structures.',
      'Cells are closed systems, so they keep their order without any exchange of energy with the environment.',
      'Cells reverse the flow of heat, absorbing heat from cooler surroundings to power the building of order.',
    ],
    correctIndex: 0,
    explanation:
      'Life requires a constant input of energy. Cells use energy captured from food or light to build and maintain order, and in doing so they release heat to their surroundings, so the total disorder of cell plus surroundings still increases. Energy is never created. Cells are open systems that exchange matter and energy with their environment, and heat does not flow spontaneously from cooler to warmer surroundings.',
  },
  {
    id: 'bio-u3-006',
    unit: 'unit-3',
    topicSlug: 'photosynthesis',
    difficulty: 'medium',
    stem: 'In a classic experiment, a filament of green alga was lit with light spread into a spectrum by a prism, so each part of the filament received a different wavelength. Bacteria that move toward O₂ gathered mostly along the parts lit by blue (about 450 nm) and red (about 680 nm) light, and very few gathered in the green-lit part. Which conclusion is best supported?',
    options: [
      'The alga released the most O₂ where blue and red light fell, so those wavelengths drive photosynthesis best.',
      'The bacteria absorbed blue and red light and used it to make O₂, which they then gathered around.',
      'The alga released the most O₂ in green light, which the bacteria avoided because it is too bright.',
      'Green light is absorbed most strongly by the alga, so the bacteria gathered where light was left over.',
    ],
    correctIndex: 0,
    explanation:
      'The bacteria gather where O₂ is most concentrated, and O₂ is released by photosynthesis, so the alga photosynthesized fastest in blue and red light, the wavelengths chlorophyll absorbs best. The bacteria use O₂; they do not photosynthesize. Few bacteria gathered in green light, so little O₂ was made there. Green light is mostly reflected or transmitted by chlorophyll, which is why leaves look green.',
  },
  {
    id: 'bio-u3-007',
    unit: 'unit-3',
    topicSlug: 'photosynthesis',
    difficulty: 'medium',
    stem: 'Two sets of algae are lit and allowed to photosynthesize. Set 1 receives water labelled with the heavy isotope ¹⁸O and ordinary CO₂. Set 2 receives CO₂ labelled with ¹⁸O and ordinary water. In which set will the O₂ gas released contain the ¹⁸O label?',
    options: [
      'Set 1 only, because the O₂ released comes from water split in the light reactions',
      'Set 2 only, because the O₂ released comes from CO₂ split in the Calvin cycle',
      'Both sets equally, because the O₂ released is made from water and CO₂ together',
      'Neither set, because the O₂ released is newly formed rather than taken from either',
    ],
    correctIndex: 0,
    explanation:
      'Photosystem II splits water, releasing its oxygen atoms as O₂, so only the ¹⁸O from labelled water appears in the O₂ (set 1). The oxygen atoms of CO₂ end up in sugar and water made in the Calvin cycle, not in the released O₂. Photosynthesis rearranges atoms; it does not create new oxygen, so “newly formed” O₂ still needs a source.',
  },
  {
    id: 'bio-u3-008',
    unit: 'unit-3',
    topicSlug: 'photosynthesis',
    difficulty: 'hard',
    stem: 'Thylakoids are isolated from chloroplasts and soaked in an acidic solution (pH 4) until the inside of the thylakoids also reaches pH 4. In complete darkness, they are quickly moved into a solution at pH 8 that contains ADP and phosphate. A burst of ATP is made. Which conclusion does this experiment most directly support?',
    options: [
      'Light energy is used directly by ATP synthase to attach phosphate groups to ADP, even in darkness.',
      'An H⁺ gradient across the thylakoid membrane can drive ATP synthesis, even without light.',
      'Splitting water inside the thylakoids releases the energy that ATP synthase uses to make ATP.',
      'The acidic solution damaged ATP synthase so that it began to make ATP without needing any energy.',
    ],
    correctIndex: 1,
    explanation:
      'Moving pH-4 thylakoids into a pH-8 solution creates a large H⁺ gradient: high H⁺ inside and low outside. H⁺ flows out through ATP synthase, which makes ATP. This happened in complete darkness with no water splitting, so it shows that the H⁺ gradient alone, not light acting directly, powers ATP synthesis (chemiosmosis). ATP synthase is not driven directly by light. ATP synthesis always needs an energy source; here it is the gradient.',
  },
  {
    id: 'bio-u3-009',
    unit: 'unit-3',
    topicSlug: 'cellular-respiration',
    difficulty: 'hard',
    stem: 'Cells are given glucose in which every carbon atom is the radioactive isotope ¹⁴C, and the stages of aerobic respiration are followed. During which stage is radioactive CO₂ first released?',
    options: [
      'Glycolysis, as glucose is split into two pyruvate molecules',
      'Pyruvate oxidation, as pyruvate is oxidized in the mitochondrion',
      'Oxidative phosphorylation, as electrons are passed to O₂',
      'Chemiosmosis, as H⁺ flows back through ATP synthase',
    ],
    correctIndex: 1,
    explanation:
      'Glycolysis splits one six-carbon glucose into two three-carbon pyruvates, so no carbon is lost as CO₂. The first CO₂ is removed when each pyruvate enters the mitochondrion and is oxidized to a two-carbon compound; the remaining carbons are released in the Krebs cycle. Oxidative phosphorylation and chemiosmosis transfer electrons and H⁺, and the O₂ they use becomes water, not CO₂.',
  },
  {
    id: 'bio-u3-010',
    unit: 'unit-3',
    topicSlug: 'cellular-respiration',
    difficulty: 'easy',
    stem: 'Bread dough made with yeast is left in a warm, covered bowl and doubles in size. The gas that makes the dough rise is produced mainly by which process?',
    options: [
      'Fermentation by the yeast, which releases CO₂',
      'Aerobic respiration by the yeast, which releases O₂',
      'Evaporation of water from the flour as it warms',
      'Fermentation by the yeast, which releases ethanol gas',
    ],
    correctIndex: 0,
    explanation:
      'Yeast in the thick, oxygen-poor dough break down sugars by alcohol fermentation, which releases CO₂ (and ethanol). The CO₂ forms bubbles that raise the dough. Respiration uses O₂ and releases CO₂; it does not release O₂. Ethanol is also made, but it stays dissolved in the dough rather than forming the bubbles. Evaporation would not fill a covered dough with gas bubbles.',
  },
  {
    id: 'bio-u3-011',
    unit: 'unit-3',
    topicSlug: 'cellular-respiration',
    difficulty: 'easy',
    stem: 'A student claims that plant cells do not carry out cellular respiration because they make their own sugar by photosynthesis. Which observation best refutes this claim?',
    options: [
      'Plant cells in darkness take up O₂ and release CO₂.',
      'Plant cells in bright light release O₂ and take up CO₂.',
      'Plant cells contain chloroplasts in their green tissues.',
      'Plant cells store excess sugar from the light as starch.',
    ],
    correctIndex: 0,
    explanation:
      'In darkness there is no photosynthesis, so O₂ uptake and CO₂ release by plant cells must come from cellular respiration, which plants carry out in their mitochondria at all times. Gas exchange in bright light reflects photosynthesis outpacing respiration and does not show respiration. Having chloroplasts and storing starch are facts about photosynthesis; they say nothing about whether the cells also respire.',
  },
  {
    id: 'bio-u3-012',
    unit: 'unit-3',
    topicSlug: 'enzyme-kinetics',
    difficulty: 'hard',
    stem: 'An enzyme is given so much substrate that adding more substrate no longer increases the reaction rate. The temperature is then raised from 25 °C to 30 °C, still well below the enzyme’s optimum, and the rate increases. Which explanation is best supported?',
    options: [
      'Raising the temperature creates new active sites on each enzyme molecule.',
      'Each active site converts substrate to product faster at the higher temperature.',
      'Enzyme and substrate collide more often, so more of the empty active sites fill up.',
      'Raising the temperature denatures some enzymes, which frees more substrate.',
    ],
    correctIndex: 1,
    explanation:
      'At saturation nearly every active site is occupied, so the rate is set by how fast each active site converts bound substrate to product. A higher temperature (below the optimum) gives molecules more kinetic energy, so each enzyme completes its catalytic cycle faster and the rate rises. More frequent collisions cannot explain the rise, because at saturation there are almost no empty active sites left to fill. Temperature does not add active sites. Denaturation would lower the rate, and the stem says 30 °C is well below the optimum.',
  },
  {
    id: 'bio-u3-013',
    unit: 'unit-3',
    topicSlug: 'photosynthesis',
    difficulty: 'medium',
    stem: 'A mutant plant lacks carotenoids, accessory pigments that absorb mainly blue-green light (about 450–500 nm). Compared with a normal plant, the mutant photosynthesizes at a much lower rate in blue-green light but at the same rate in red light. Which conclusion is best supported?',
    options: [
      'In normal plants, carotenoids capture blue-green light and pass its energy along for photosynthesis.',
      'In normal plants, carotenoids are the only pigments that can drive photosynthesis in any light.',
      'In normal plants, carotenoids block blue-green light so that only red light reaches the chlorophyll.',
      'In normal plants, carotenoids absorb red light, which is why red light rates are the same in the mutant.',
    ],
    correctIndex: 0,
    explanation:
      'Losing carotenoids lowers photosynthesis only in the wavelengths carotenoids absorb, so in normal plants they absorb blue-green light and pass the energy to the photosystems, widening the range of usable light. The mutant still photosynthesizes normally in red light, using chlorophyll, so carotenoids are not the only working pigments. If carotenoids blocked blue-green light, removing them would raise, not lower, the rate in that light. Carotenoids absorb blue-green light, not red light.',
  },
  {
    id: 'bio-u3-014',
    unit: 'unit-3',
    topicSlug: 'cellular-respiration',
    difficulty: 'medium',
    stem: 'Glycolysis takes place in the cytosol of nearly every organism studied, including bacteria and archaea that live without oxygen, and it does not require O₂. Which claim does this pattern best support?',
    options: [
      'Glycolysis evolved early, in a common ancestor of living organisms, before O₂ was plentiful.',
      'Glycolysis evolved separately in each organism after O₂ became plentiful in the atmosphere.',
      'Glycolysis takes place only in organisms that also carry out the Krebs cycle in mitochondria.',
      'Glycolysis is the main source of the O₂ used later by aerobic organisms during respiration.',
    ],
    correctIndex: 0,
    explanation:
      'A pathway shared by nearly all organisms, including anaerobes, and found in the cytosol rather than in organelles, most likely evolved once in an early common ancestor. Because it needs no O₂, it could have run before O₂ accumulated in the atmosphere. Separate origins would not be expected to give the same pathway everywhere. Many organisms with glycolysis have no mitochondria. Glycolysis does not produce O₂.',
  },
  {
    id: 'bio-u3-015',
    unit: 'unit-3',
    topicSlug: 'cellular-respiration',
    difficulty: 'medium',
    stem: 'Burning glucose in a flame releases its chemical energy all at once as heat and light. Cells instead break glucose down through many small, enzyme-catalyzed steps. Which advantage of the cellular approach is best supported?',
    options: [
      'Releasing energy in small steps lets cells capture part of it in ATP and in reduced electron carriers.',
      'Releasing energy in small steps lets cells get more total energy from each glucose than burning does.',
      'Releasing energy in small steps lets cells avoid making CO₂, which only forms when glucose is burned.',
      'Releasing energy in small steps lets cells skip the need for O₂, which only burning in a flame requires.',
    ],
    correctIndex: 0,
    explanation:
      'Sequential reactions release energy in small amounts that can be coupled to making ATP and to reducing NAD⁺, so a useful share of glucose’s energy is captured instead of lost as heat. The total energy released by fully oxidizing glucose is the same either way; cells capture more of it but do not get more out. Aerobic respiration still makes CO₂ and still uses O₂ as the final electron acceptor.',
  },
  {
    id: 'bio-u3-016',
    unit: 'unit-3',
    topicSlug: 'photosynthesis',
    difficulty: 'hard',
    stem: 'The rate of photosynthesis of a plant is measured at two CO₂ concentrations. In dim light, raising the CO₂ concentration has almost no effect on the rate. In bright light, raising the CO₂ concentration greatly increases the rate. Which explanation is best supported?',
    options: [
      'In dim light, CO₂ is used up so fast that extra CO₂ is wasted, while in bright light CO₂ is used slowly.',
      'In dim light, the supply of ATP and NADPH limits the rate; in bright light, the rate of CO₂ fixation does.',
      'In dim light, the Calvin cycle runs without CO₂, so the CO₂ supply matters only in bright light.',
      'In dim light, CO₂ blocks the light reactions, which cancels out any benefit from the extra CO₂.',
    ],
    correctIndex: 1,
    explanation:
      'The Calvin cycle needs both CO₂ and the ATP and NADPH from the light reactions. In dim light the light reactions make little ATP and NADPH, so they limit the rate and extra CO₂ cannot be used. In bright light ATP and NADPH are plentiful, so CO₂ fixation becomes the limit and more CO₂ raises the rate. The Calvin cycle always needs CO₂, CO₂ does not block the light reactions, and in dim light the CO₂ is not being used up rapidly.',
  },
  {
    id: 'bio-u3-017',
    unit: 'unit-3',
    topicSlug: 'photosynthesis',
    difficulty: 'easy',
    stem: 'A student writes that photosynthesis happens only in plants. Which organism is the best counterexample?',
    options: [
      'A cyanobacterium, a prokaryote that releases O₂ in the light',
      'A mushroom, a fungus that absorbs nutrients from dead matter',
      'A yeast cell, a fungus that ferments sugar into ethanol and CO₂',
      'An amoeba, a protist that engulfs other cells as food',
    ],
    correctIndex: 0,
    explanation:
      'Cyanobacteria are photosynthetic prokaryotes; photosynthesis first evolved in prokaryotes like them, and algae (protists) photosynthesize too. Mushrooms and yeast are fungi that get energy by breaking down organic matter, and an amoeba engulfs food; none of these photosynthesize.',
  },
  {
    id: 'bio-u3-018',
    unit: 'unit-3',
    topicSlug: 'cellular-respiration',
    difficulty: 'hard',
    stem: 'Both chloroplasts and mitochondria make ATP by chemiosmosis. Which statement correctly identifies a difference between the two?',
    options: [
      'In chloroplasts, light energy drives the H⁺ pumping, while in mitochondria energy from oxidizing food molecules does.',
      'In chloroplasts, ATP synthase lets H⁺ flow from the stroma into the thylakoid space, the reverse of how it works in mitochondria.',
      'In chloroplasts, the H⁺ gradient forms across the outer membrane, while in mitochondria it forms across the inner membrane.',
      'In chloroplasts, ATP is made without an electron transport chain, while in mitochondria an electron transport chain is needed.',
    ],
    correctIndex: 0,
    explanation:
      'In both organelles an electron transport chain pumps H⁺ across a membrane and H⁺ flows back through ATP synthase. The energy source differs: in chloroplasts, electrons are energized by light at the photosystems; in mitochondria, the electrons come from NADH and FADH₂ made by oxidizing food. In chloroplasts H⁺ builds up in the thylakoid space and flows out into the stroma, which matches mitochondria (from the intermembrane space into the matrix), not the reverse. The chloroplast gradient forms across the thylakoid membrane, not the outer membrane, and both organelles use an electron transport chain.',
  },
]
