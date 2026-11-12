/** The circuit drawings for each Circuits Part 2 checkpoint problem (keyed by video/section). */
import { bothDividers, divider, junctionBetween, network, twoSourceLoop } from './circuit-figures'

export const FIG = {
  // Video 2: Kirchhoff worked examples
  v2_ex1: network(
    { V: '30 V', series: ['3 Ω', '5 Ω', '7 Ω'], ground: true },
    'One loop: a 30 V battery, + terminal at the top, feeds 3 Ω, 5 Ω and 7 Ω resistors in series along the top wire; the − terminal is grounded at 0 V.',
  ),
  v2_ex2: twoSourceLoop(
    'One loop with a 12 V battery on the left (+ on top) and a 4 V battery on the right (+ on the bottom, so it pushes the opposite way), a 2 Ω resistor on the top wire and a 6 Ω resistor on the bottom wire.',
  ),
  // Video 3: networks and dividers (practice)
  v3_nodes_1: network(
    { V: 'V', series: ['R₁'], bank: [{ r: ['R₂'] }, { r: ['R₃'] }], nodes: { a: 'a', b: 'b', c: 'c' } },
    'A battery on the left wire. R₁ runs along the top wire from node a (after the battery) to node b. R₂ and R₃ each run from node b down to the bottom wire, node c, which returns to the battery.',
  ),
  v3_nodes_2: junctionBetween(
    'Two resistors R₁ and R₂ end to end on one horizontal wire; at the point where they meet, a third wire leaves downward to another part of the circuit.',
  ),
  v3_collapse_1: network(
    { V: '24 V', series: ['2 Ω'], bank: [{ r: ['3 Ω'] }, { r: ['6 Ω'] }] },
    'A 24 V battery feeds a 2 Ω resistor on the top wire, then a parallel pair: a 3 Ω branch and a 6 Ω branch between the top and bottom wires.',
  ),
  v3_collapse_2: network(
    { V: '12 V', bank: [{ r: ['6 Ω'] }, { r: ['2 Ω', '4 Ω'] }] },
    'A 12 V battery with two branches directly across it: a single 6 Ω resistor, and a branch holding a 2 Ω and a 4 Ω resistor in series.',
  ),
  v3_dividers_1: network(
    { V: '12 V', series: ['1 kΩ', '5 kΩ'], current: 'current I' },
    'One loop: a 12 V source with a 1 kΩ and a 5 kΩ resistor in series along the top wire; one current I flows around the loop.',
  ),
  v3_dividers_2: divider(
    { I: '9.0 mA', branches: [{ r: '1 kΩ' }, { r: '2 kΩ' }] },
    'A current of 9.0 mA enters a node and splits between two parallel branches, 1 kΩ and 2 kΩ, which rejoin on the right.',
  ),
  v3_body_1: divider(
    { I: '10 mA', branches: [{ r: '500 Ω', note: 'blood + muscle' }, { r: '4.5 kΩ', note: 'fat' }], ends: 'electrode' },
    'Between two electrodes, 10 mA splits between two parallel paths: a 500 Ω blood-and-muscle path and a 4.5 kΩ fat path.',
  ),
  v3_body_2: divider(
    { I: '12 mA', branches: [{ r: '1 kΩ' }, { r: '2 kΩ' }, { r: '2 kΩ' }], ends: 'electrode' },
    'Between two electrodes, 12 mA splits among three parallel tissue paths of 1 kΩ, 2 kΩ and 2 kΩ.',
  ),
  v3_chain_1: network(
    { V: '12 V', series: ['2 Ω'], bank: [{ r: ['6 Ω'] }, { r: ['6 Ω'], added: true }] },
    'A 12 V battery feeds a 2 Ω resistor on the top wire, then a 6 Ω branch; a second 6 Ω branch, drawn dashed and marked "added", is placed in parallel with the first.',
  ),
  v3_chain_2: network(
    { V: '15 V', series: ['1 Ω'], bank: [{ r: ['4 Ω'] }, { r: ['4 Ω'], opens: true }] },
    'A 15 V battery feeds a 1 Ω resistor on the top wire, then two 4 Ω branches in parallel; the second branch has an open switch at its top, marked "opens".',
  ),
  v3_cases_1: network(
    { V: '12 V', bank: [{ r: ['4 Ω'] }, { r: ['6 Ω'] }, { r: ['3 Ω'], added: true }] },
    'A 12 V battery with three branches directly across it and nothing in series: 4 Ω, 6 Ω, and a 3 Ω branch drawn dashed and marked "added".',
  ),
  v3_cases_2: network(
    { V: '12 V', series: ['2 Ω'], bank: [{ r: ['3 Ω'] }, { r: ['6 Ω'], shorted: true }] },
    'A 12 V battery feeds a 2 Ω resistor on the top wire, then a 3 Ω branch and a 6 Ω branch in parallel; a bare wire, drawn in red, joins the top and bottom wires beside the 6 Ω branch.',
  ),
  v3_recap_1: network(
    { V: '16 V', series: ['1 Ω'], bank: [{ r: ['4 Ω'] }, { r: ['12 Ω'], note: 'opens in (d)' }] },
    'A 16 V battery feeds a 1 Ω resistor on the top wire, then a 4 Ω branch and a 12 Ω branch in parallel; the 12 Ω branch is noted as opening in part (d).',
  ),
  v3_recap_2: bothDividers(
    { V: '24 V', series: ['2 kΩ', '6 kΩ'] },
    { I: '24 mA', branches: [{ r: '2 kΩ' }, { r: '6 kΩ' }] },
    'Panel (a): a 24 V source across a 2 kΩ and a 6 kΩ resistor in series. Panel (b): 24 mA entering the same 2 kΩ and 6 kΩ resistors in parallel.',
  ),
  // Video 4: worked examples
  v4_ex1: network(
    { V: '12 V', series: ['2 Ω'], bank: [{ r: ['6 Ω'] }, { r: ['3 Ω'] }] },
    'A 12 V battery feeds a 2 Ω resistor on the top wire, then a parallel pair: a 6 Ω branch and a 3 Ω branch.',
  ),
  v4_ex1c: network(
    { V: '12 V', series: ['2 Ω'], bank: [{ r: ['6 Ω'], opens: true }, { r: ['3 Ω'] }] },
    'The same circuit, 12 V with 2 Ω in series, but the 6 Ω branch now has an open switch at its top, marked "opens"; only the 3 Ω branch still carries current.',
  ),
  v4_ex2: bothDividers(
    { V: '15 V', series: ['2 kΩ', '3 kΩ'] },
    { I: '8.0 mA', branches: [{ r: '2 kΩ' }, { r: '6 kΩ' }] },
    'Panel (a): a 15 V source across a 2 kΩ and a 3 kΩ resistor in series. Panel (b): 8.0 mA entering a parallel pair of 2 kΩ and 6 kΩ.',
  ),
  // Video 8: bulb brightness worked examples
  v8_ex1: network(
    { V: '120 V', series: ['60 W', '100 W'], bulbs: true },
    'A 120 V outlet, drawn as a source, with a 60 W bulb and a 100 W bulb (both rated 120 V) in series along the top wire.',
  ),
  v8_ex2: network(
    { V: '18 V', series: ['A'], bank: [{ r: ['B'] }, { r: ['C'] }], bulbs: true },
    'An 18 V battery feeds bulb A on the top wire, then a parallel pair of bulbs B and C; all three are identical 6 Ω bulbs.',
  ),
  v8_ex2c: network(
    { V: '18 V', series: ['A'], bank: [{ r: ['B'] }, { r: ['C'], opens: true, note: 'burned out' }], bulbs: true },
    'The same circuit: bulb A in series with the pair B and C, but bulb C has burned out, drawn as an open switch at the top of its branch.',
  ),
}
