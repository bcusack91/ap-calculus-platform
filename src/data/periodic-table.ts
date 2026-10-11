/**
 * Periodic table element data — shared by the /periodic-table page and the
 * MCAT exam runner's periodic-table popup.
 */

export interface Element {
  z: number           // atomic number
  symbol: string
  name: string
  mass: number        // atomic mass
  category: string
  group: number       // periodic table column (0 for Ln/An)
  period: number      // periodic table row
  electronegativity?: number
  ionizationEnergy?: number  // kJ/mol
  atomicRadius?: number      // pm
  electronConfig: string
  oxidationStates: string
  phase: 'solid' | 'liquid' | 'gas'
}

export const ELEMENTS: Element[] = [
  // Period 1
  { z:1, symbol:'H', name:'Hydrogen', mass:1.008, category:'nonmetal', group:1, period:1, electronegativity:2.20, ionizationEnergy:1312, atomicRadius:53, electronConfig:'1s¹', oxidationStates:'+1, -1', phase:'gas' },
  { z:2, symbol:'He', name:'Helium', mass:4.003, category:'noble-gas', group:18, period:1, ionizationEnergy:2372, atomicRadius:31, electronConfig:'1s²', oxidationStates:'0', phase:'gas' },
  // Period 2
  { z:3, symbol:'Li', name:'Lithium', mass:6.941, category:'alkali', group:1, period:2, electronegativity:0.98, ionizationEnergy:520, atomicRadius:167, electronConfig:'[He] 2s¹', oxidationStates:'+1', phase:'solid' },
  { z:4, symbol:'Be', name:'Beryllium', mass:9.012, category:'alkaline-earth', group:2, period:2, electronegativity:1.57, ionizationEnergy:900, atomicRadius:112, electronConfig:'[He] 2s²', oxidationStates:'+2', phase:'solid' },
  { z:5, symbol:'B', name:'Boron', mass:10.81, category:'metalloid', group:13, period:2, electronegativity:2.04, ionizationEnergy:801, atomicRadius:87, electronConfig:'[He] 2s² 2p¹', oxidationStates:'+3', phase:'solid' },
  { z:6, symbol:'C', name:'Carbon', mass:12.01, category:'nonmetal', group:14, period:2, electronegativity:2.55, ionizationEnergy:1086, atomicRadius:77, electronConfig:'[He] 2s² 2p²', oxidationStates:'+4, -4', phase:'solid' },
  { z:7, symbol:'N', name:'Nitrogen', mass:14.01, category:'nonmetal', group:15, period:2, electronegativity:3.04, ionizationEnergy:1402, atomicRadius:75, electronConfig:'[He] 2s² 2p³', oxidationStates:'+5, +3, -3', phase:'gas' },
  { z:8, symbol:'O', name:'Oxygen', mass:16.00, category:'nonmetal', group:16, period:2, electronegativity:3.44, ionizationEnergy:1314, atomicRadius:73, electronConfig:'[He] 2s² 2p⁴', oxidationStates:'-2', phase:'gas' },
  { z:9, symbol:'F', name:'Fluorine', mass:19.00, category:'halogen', group:17, period:2, electronegativity:3.98, ionizationEnergy:1681, atomicRadius:71, electronConfig:'[He] 2s² 2p⁵', oxidationStates:'-1', phase:'gas' },
  { z:10, symbol:'Ne', name:'Neon', mass:20.18, category:'noble-gas', group:18, period:2, ionizationEnergy:2081, atomicRadius:38, electronConfig:'[He] 2s² 2p⁶', oxidationStates:'0', phase:'gas' },
  // Period 3
  { z:11, symbol:'Na', name:'Sodium', mass:22.99, category:'alkali', group:1, period:3, electronegativity:0.93, ionizationEnergy:496, atomicRadius:190, electronConfig:'[Ne] 3s¹', oxidationStates:'+1', phase:'solid' },
  { z:12, symbol:'Mg', name:'Magnesium', mass:24.31, category:'alkaline-earth', group:2, period:3, electronegativity:1.31, ionizationEnergy:738, atomicRadius:145, electronConfig:'[Ne] 3s²', oxidationStates:'+2', phase:'solid' },
  { z:13, symbol:'Al', name:'Aluminium', mass:26.98, category:'post-transition', group:13, period:3, electronegativity:1.61, ionizationEnergy:577, atomicRadius:118, electronConfig:'[Ne] 3s² 3p¹', oxidationStates:'+3', phase:'solid' },
  { z:14, symbol:'Si', name:'Silicon', mass:28.09, category:'metalloid', group:14, period:3, electronegativity:1.90, ionizationEnergy:786, atomicRadius:111, electronConfig:'[Ne] 3s² 3p²', oxidationStates:'+4, -4', phase:'solid' },
  { z:15, symbol:'P', name:'Phosphorus', mass:30.97, category:'nonmetal', group:15, period:3, electronegativity:2.19, ionizationEnergy:1012, atomicRadius:106, electronConfig:'[Ne] 3s² 3p³', oxidationStates:'+5, +3, -3', phase:'solid' },
  { z:16, symbol:'S', name:'Sulfur', mass:32.07, category:'nonmetal', group:16, period:3, electronegativity:2.58, ionizationEnergy:1000, atomicRadius:102, electronConfig:'[Ne] 3s² 3p⁴', oxidationStates:'+6, +4, -2', phase:'solid' },
  { z:17, symbol:'Cl', name:'Chlorine', mass:35.45, category:'halogen', group:17, period:3, electronegativity:3.16, ionizationEnergy:1251, atomicRadius:99, electronConfig:'[Ne] 3s² 3p⁵', oxidationStates:'+7, -1', phase:'gas' },
  { z:18, symbol:'Ar', name:'Argon', mass:39.95, category:'noble-gas', group:18, period:3, ionizationEnergy:1521, atomicRadius:71, electronConfig:'[Ne] 3s² 3p⁶', oxidationStates:'0', phase:'gas' },
  // Period 4
  { z:19, symbol:'K', name:'Potassium', mass:39.10, category:'alkali', group:1, period:4, electronegativity:0.82, ionizationEnergy:419, atomicRadius:243, electronConfig:'[Ar] 4s¹', oxidationStates:'+1', phase:'solid' },
  { z:20, symbol:'Ca', name:'Calcium', mass:40.08, category:'alkaline-earth', group:2, period:4, electronegativity:1.00, ionizationEnergy:590, atomicRadius:194, electronConfig:'[Ar] 4s²', oxidationStates:'+2', phase:'solid' },
  { z:21, symbol:'Sc', name:'Scandium', mass:44.96, category:'transition', group:3, period:4, electronegativity:1.36, ionizationEnergy:633, atomicRadius:184, electronConfig:'[Ar] 3d¹ 4s²', oxidationStates:'+3', phase:'solid' },
  { z:22, symbol:'Ti', name:'Titanium', mass:47.87, category:'transition', group:4, period:4, electronegativity:1.54, ionizationEnergy:659, atomicRadius:176, electronConfig:'[Ar] 3d² 4s²', oxidationStates:'+4, +3', phase:'solid' },
  { z:23, symbol:'V', name:'Vanadium', mass:50.94, category:'transition', group:5, period:4, electronegativity:1.63, ionizationEnergy:651, atomicRadius:171, electronConfig:'[Ar] 3d³ 4s²', oxidationStates:'+5, +4, +3', phase:'solid' },
  { z:24, symbol:'Cr', name:'Chromium', mass:52.00, category:'transition', group:6, period:4, electronegativity:1.66, ionizationEnergy:653, atomicRadius:166, electronConfig:'[Ar] 3d⁵ 4s¹', oxidationStates:'+6, +3, +2', phase:'solid' },
  { z:25, symbol:'Mn', name:'Manganese', mass:54.94, category:'transition', group:7, period:4, electronegativity:1.55, ionizationEnergy:717, atomicRadius:161, electronConfig:'[Ar] 3d⁵ 4s²', oxidationStates:'+7, +4, +2', phase:'solid' },
  { z:26, symbol:'Fe', name:'Iron', mass:55.85, category:'transition', group:8, period:4, electronegativity:1.83, ionizationEnergy:762, atomicRadius:156, electronConfig:'[Ar] 3d⁶ 4s²', oxidationStates:'+3, +2', phase:'solid' },
  { z:27, symbol:'Co', name:'Cobalt', mass:58.93, category:'transition', group:9, period:4, electronegativity:1.88, ionizationEnergy:760, atomicRadius:152, electronConfig:'[Ar] 3d⁷ 4s²', oxidationStates:'+3, +2', phase:'solid' },
  { z:28, symbol:'Ni', name:'Nickel', mass:58.69, category:'transition', group:10, period:4, electronegativity:1.91, ionizationEnergy:737, atomicRadius:149, electronConfig:'[Ar] 3d⁸ 4s²', oxidationStates:'+2', phase:'solid' },
  { z:29, symbol:'Cu', name:'Copper', mass:63.55, category:'transition', group:11, period:4, electronegativity:1.90, ionizationEnergy:745, atomicRadius:145, electronConfig:'[Ar] 3d¹⁰ 4s¹', oxidationStates:'+2, +1', phase:'solid' },
  { z:30, symbol:'Zn', name:'Zinc', mass:65.38, category:'transition', group:12, period:4, electronegativity:1.65, ionizationEnergy:906, atomicRadius:142, electronConfig:'[Ar] 3d¹⁰ 4s²', oxidationStates:'+2', phase:'solid' },
  { z:31, symbol:'Ga', name:'Gallium', mass:69.72, category:'post-transition', group:13, period:4, electronegativity:1.81, ionizationEnergy:579, atomicRadius:136, electronConfig:'[Ar] 3d¹⁰ 4s² 4p¹', oxidationStates:'+3', phase:'solid' },
  { z:32, symbol:'Ge', name:'Germanium', mass:72.63, category:'metalloid', group:14, period:4, electronegativity:2.01, ionizationEnergy:762, atomicRadius:125, electronConfig:'[Ar] 3d¹⁰ 4s² 4p²', oxidationStates:'+4, +2', phase:'solid' },
  { z:33, symbol:'As', name:'Arsenic', mass:74.92, category:'metalloid', group:15, period:4, electronegativity:2.18, ionizationEnergy:947, atomicRadius:114, electronConfig:'[Ar] 3d¹⁰ 4s² 4p³', oxidationStates:'+5, +3, -3', phase:'solid' },
  { z:34, symbol:'Se', name:'Selenium', mass:78.97, category:'nonmetal', group:16, period:4, electronegativity:2.55, ionizationEnergy:941, atomicRadius:103, electronConfig:'[Ar] 3d¹⁰ 4s² 4p⁴', oxidationStates:'+6, +4, -2', phase:'solid' },
  { z:35, symbol:'Br', name:'Bromine', mass:79.90, category:'halogen', group:17, period:4, electronegativity:2.96, ionizationEnergy:1140, atomicRadius:94, electronConfig:'[Ar] 3d¹⁰ 4s² 4p⁵', oxidationStates:'+5, -1', phase:'liquid' },
  { z:36, symbol:'Kr', name:'Krypton', mass:83.80, category:'noble-gas', group:18, period:4, ionizationEnergy:1351, atomicRadius:88, electronConfig:'[Ar] 3d¹⁰ 4s² 4p⁶', oxidationStates:'0', phase:'gas' },
  // Period 5
  { z:37, symbol:'Rb', name:'Rubidium', mass:85.47, category:'alkali', group:1, period:5, electronegativity:0.82, ionizationEnergy:403, atomicRadius:265, electronConfig:'[Kr] 5s¹', oxidationStates:'+1', phase:'solid' },
  { z:38, symbol:'Sr', name:'Strontium', mass:87.62, category:'alkaline-earth', group:2, period:5, electronegativity:0.95, ionizationEnergy:550, atomicRadius:219, electronConfig:'[Kr] 5s²', oxidationStates:'+2', phase:'solid' },
  { z:39, symbol:'Y', name:'Yttrium', mass:88.91, category:'transition', group:3, period:5, electronegativity:1.22, ionizationEnergy:600, atomicRadius:212, electronConfig:'[Kr] 4d¹ 5s²', oxidationStates:'+3', phase:'solid' },
  { z:40, symbol:'Zr', name:'Zirconium', mass:91.22, category:'transition', group:4, period:5, electronegativity:1.33, ionizationEnergy:640, atomicRadius:206, electronConfig:'[Kr] 4d² 5s²', oxidationStates:'+4', phase:'solid' },
  { z:41, symbol:'Nb', name:'Niobium', mass:92.91, category:'transition', group:5, period:5, electronegativity:1.60, ionizationEnergy:652, atomicRadius:198, electronConfig:'[Kr] 4d⁴ 5s¹', oxidationStates:'+5, +3', phase:'solid' },
  { z:42, symbol:'Mo', name:'Molybdenum', mass:95.95, category:'transition', group:6, period:5, electronegativity:2.16, ionizationEnergy:684, atomicRadius:190, electronConfig:'[Kr] 4d⁵ 5s¹', oxidationStates:'+6, +4, +2', phase:'solid' },
  { z:43, symbol:'Tc', name:'Technetium', mass:98.00, category:'transition', group:7, period:5, electronegativity:1.90, ionizationEnergy:702, atomicRadius:183, electronConfig:'[Kr] 4d⁵ 5s²', oxidationStates:'+7, +4', phase:'solid' },
  { z:44, symbol:'Ru', name:'Ruthenium', mass:101.1, category:'transition', group:8, period:5, electronegativity:2.20, ionizationEnergy:710, atomicRadius:178, electronConfig:'[Kr] 4d⁷ 5s¹', oxidationStates:'+4, +3, +2', phase:'solid' },
  { z:45, symbol:'Rh', name:'Rhodium', mass:102.9, category:'transition', group:9, period:5, electronegativity:2.28, ionizationEnergy:720, atomicRadius:173, electronConfig:'[Kr] 4d⁸ 5s¹', oxidationStates:'+3', phase:'solid' },
  { z:46, symbol:'Pd', name:'Palladium', mass:106.4, category:'transition', group:10, period:5, electronegativity:2.20, ionizationEnergy:804, atomicRadius:169, electronConfig:'[Kr] 4d¹⁰', oxidationStates:'+2, +4', phase:'solid' },
  { z:47, symbol:'Ag', name:'Silver', mass:107.9, category:'transition', group:11, period:5, electronegativity:1.93, ionizationEnergy:731, atomicRadius:165, electronConfig:'[Kr] 4d¹⁰ 5s¹', oxidationStates:'+1', phase:'solid' },
  { z:48, symbol:'Cd', name:'Cadmium', mass:112.4, category:'transition', group:12, period:5, electronegativity:1.69, ionizationEnergy:868, atomicRadius:161, electronConfig:'[Kr] 4d¹⁰ 5s²', oxidationStates:'+2', phase:'solid' },
  { z:49, symbol:'In', name:'Indium', mass:114.8, category:'post-transition', group:13, period:5, electronegativity:1.78, ionizationEnergy:558, atomicRadius:156, electronConfig:'[Kr] 4d¹⁰ 5s² 5p¹', oxidationStates:'+3', phase:'solid' },
  { z:50, symbol:'Sn', name:'Tin', mass:118.7, category:'post-transition', group:14, period:5, electronegativity:1.96, ionizationEnergy:709, atomicRadius:145, electronConfig:'[Kr] 4d¹⁰ 5s² 5p²', oxidationStates:'+4, +2', phase:'solid' },
  { z:51, symbol:'Sb', name:'Antimony', mass:121.8, category:'metalloid', group:15, period:5, electronegativity:2.05, ionizationEnergy:834, atomicRadius:133, electronConfig:'[Kr] 4d¹⁰ 5s² 5p³', oxidationStates:'+5, +3, -3', phase:'solid' },
  { z:52, symbol:'Te', name:'Tellurium', mass:127.6, category:'metalloid', group:16, period:5, electronegativity:2.10, ionizationEnergy:869, atomicRadius:123, electronConfig:'[Kr] 4d¹⁰ 5s² 5p⁴', oxidationStates:'+6, +4, -2', phase:'solid' },
  { z:53, symbol:'I', name:'Iodine', mass:126.9, category:'halogen', group:17, period:5, electronegativity:2.66, ionizationEnergy:1008, atomicRadius:115, electronConfig:'[Kr] 4d¹⁰ 5s² 5p⁵', oxidationStates:'+7, -1', phase:'solid' },
  { z:54, symbol:'Xe', name:'Xenon', mass:131.3, category:'noble-gas', group:18, period:5, ionizationEnergy:1170, atomicRadius:108, electronConfig:'[Kr] 4d¹⁰ 5s² 5p⁶', oxidationStates:'0, +2', phase:'gas' },
  // Period 6
  { z:55, symbol:'Cs', name:'Cesium', mass:132.9, category:'alkali', group:1, period:6, electronegativity:0.79, ionizationEnergy:376, atomicRadius:298, electronConfig:'[Xe] 6s¹', oxidationStates:'+1', phase:'solid' },
  { z:56, symbol:'Ba', name:'Barium', mass:137.3, category:'alkaline-earth', group:2, period:6, electronegativity:0.89, ionizationEnergy:503, atomicRadius:253, electronConfig:'[Xe] 6s²', oxidationStates:'+2', phase:'solid' },
  // Lanthanides (La–Lu)
  { z:57, symbol:'La', name:'Lanthanum', mass:138.9, category:'lanthanide', group:0, period:6, electronegativity:1.10, ionizationEnergy:538, atomicRadius:207, electronConfig:'[Xe] 5d¹ 6s²', oxidationStates:'+3', phase:'solid' },
  { z:58, symbol:'Ce', name:'Cerium', mass:140.1, category:'lanthanide', group:0, period:6, electronegativity:1.12, ionizationEnergy:534, atomicRadius:204, electronConfig:'[Xe] 4f¹ 5d¹ 6s²', oxidationStates:'+4, +3', phase:'solid' },
  { z:59, symbol:'Pr', name:'Praseodymium', mass:140.9, category:'lanthanide', group:0, period:6, electronegativity:1.13, ionizationEnergy:527, atomicRadius:203, electronConfig:'[Xe] 4f³ 6s²', oxidationStates:'+3', phase:'solid' },
  { z:60, symbol:'Nd', name:'Neodymium', mass:144.2, category:'lanthanide', group:0, period:6, electronegativity:1.14, ionizationEnergy:533, atomicRadius:201, electronConfig:'[Xe] 4f⁴ 6s²', oxidationStates:'+3', phase:'solid' },
  { z:61, symbol:'Pm', name:'Promethium', mass:145.0, category:'lanthanide', group:0, period:6, electronegativity:1.13, ionizationEnergy:540, atomicRadius:199, electronConfig:'[Xe] 4f⁵ 6s²', oxidationStates:'+3', phase:'solid' },
  { z:62, symbol:'Sm', name:'Samarium', mass:150.4, category:'lanthanide', group:0, period:6, electronegativity:1.17, ionizationEnergy:545, atomicRadius:198, electronConfig:'[Xe] 4f⁶ 6s²', oxidationStates:'+3, +2', phase:'solid' },
  { z:63, symbol:'Eu', name:'Europium', mass:152.0, category:'lanthanide', group:0, period:6, electronegativity:1.20, ionizationEnergy:547, atomicRadius:198, electronConfig:'[Xe] 4f⁷ 6s²', oxidationStates:'+3, +2', phase:'solid' },
  { z:64, symbol:'Gd', name:'Gadolinium', mass:157.3, category:'lanthanide', group:0, period:6, electronegativity:1.20, ionizationEnergy:593, atomicRadius:196, electronConfig:'[Xe] 4f⁷ 5d¹ 6s²', oxidationStates:'+3', phase:'solid' },
  { z:65, symbol:'Tb', name:'Terbium', mass:158.9, category:'lanthanide', group:0, period:6, electronegativity:1.10, ionizationEnergy:566, atomicRadius:194, electronConfig:'[Xe] 4f⁹ 6s²', oxidationStates:'+3', phase:'solid' },
  { z:66, symbol:'Dy', name:'Dysprosium', mass:162.5, category:'lanthanide', group:0, period:6, electronegativity:1.22, ionizationEnergy:573, atomicRadius:192, electronConfig:'[Xe] 4f¹⁰ 6s²', oxidationStates:'+3', phase:'solid' },
  { z:67, symbol:'Ho', name:'Holmium', mass:164.9, category:'lanthanide', group:0, period:6, electronegativity:1.23, ionizationEnergy:581, atomicRadius:192, electronConfig:'[Xe] 4f¹¹ 6s²', oxidationStates:'+3', phase:'solid' },
  { z:68, symbol:'Er', name:'Erbium', mass:167.3, category:'lanthanide', group:0, period:6, electronegativity:1.24, ionizationEnergy:589, atomicRadius:189, electronConfig:'[Xe] 4f¹² 6s²', oxidationStates:'+3', phase:'solid' },
  { z:69, symbol:'Tm', name:'Thulium', mass:168.9, category:'lanthanide', group:0, period:6, electronegativity:1.25, ionizationEnergy:597, atomicRadius:190, electronConfig:'[Xe] 4f¹³ 6s²', oxidationStates:'+3', phase:'solid' },
  { z:70, symbol:'Yb', name:'Ytterbium', mass:173.0, category:'lanthanide', group:0, period:6, electronegativity:1.10, ionizationEnergy:603, atomicRadius:187, electronConfig:'[Xe] 4f¹⁴ 6s²', oxidationStates:'+3, +2', phase:'solid' },
  { z:71, symbol:'Lu', name:'Lutetium', mass:175.0, category:'lanthanide', group:0, period:6, electronegativity:1.27, ionizationEnergy:524, atomicRadius:187, electronConfig:'[Xe] 4f¹⁴ 5d¹ 6s²', oxidationStates:'+3', phase:'solid' },
  // Period 6 continued (Hf–Rn)
  { z:72, symbol:'Hf', name:'Hafnium', mass:178.5, category:'transition', group:4, period:6, electronegativity:1.30, ionizationEnergy:659, atomicRadius:208, electronConfig:'[Xe] 4f¹⁴ 5d² 6s²', oxidationStates:'+4', phase:'solid' },
  { z:73, symbol:'Ta', name:'Tantalum', mass:180.9, category:'transition', group:5, period:6, electronegativity:1.50, ionizationEnergy:761, atomicRadius:200, electronConfig:'[Xe] 4f¹⁴ 5d³ 6s²', oxidationStates:'+5', phase:'solid' },
  { z:74, symbol:'W', name:'Tungsten', mass:183.8, category:'transition', group:6, period:6, electronegativity:2.36, ionizationEnergy:770, atomicRadius:193, electronConfig:'[Xe] 4f¹⁴ 5d⁴ 6s²', oxidationStates:'+6, +4', phase:'solid' },
  { z:75, symbol:'Re', name:'Rhenium', mass:186.2, category:'transition', group:7, period:6, electronegativity:1.90, ionizationEnergy:760, atomicRadius:188, electronConfig:'[Xe] 4f¹⁴ 5d⁵ 6s²', oxidationStates:'+7, +4', phase:'solid' },
  { z:76, symbol:'Os', name:'Osmium', mass:190.2, category:'transition', group:8, period:6, electronegativity:2.20, ionizationEnergy:840, atomicRadius:185, electronConfig:'[Xe] 4f¹⁴ 5d⁶ 6s²', oxidationStates:'+4, +3', phase:'solid' },
  { z:77, symbol:'Ir', name:'Iridium', mass:192.2, category:'transition', group:9, period:6, electronegativity:2.20, ionizationEnergy:880, atomicRadius:180, electronConfig:'[Xe] 4f¹⁴ 5d⁷ 6s²', oxidationStates:'+4, +3', phase:'solid' },
  { z:78, symbol:'Pt', name:'Platinum', mass:195.1, category:'transition', group:10, period:6, electronegativity:2.28, ionizationEnergy:870, atomicRadius:177, electronConfig:'[Xe] 4f¹⁴ 5d⁹ 6s¹', oxidationStates:'+4, +2', phase:'solid' },
  { z:79, symbol:'Au', name:'Gold', mass:197.0, category:'transition', group:11, period:6, electronegativity:2.54, ionizationEnergy:890, atomicRadius:174, electronConfig:'[Xe] 4f¹⁴ 5d¹⁰ 6s¹', oxidationStates:'+3, +1', phase:'solid' },
  { z:80, symbol:'Hg', name:'Mercury', mass:200.6, category:'transition', group:12, period:6, electronegativity:2.00, ionizationEnergy:1007, atomicRadius:171, electronConfig:'[Xe] 4f¹⁴ 5d¹⁰ 6s²', oxidationStates:'+2, +1', phase:'liquid' },
  { z:81, symbol:'Tl', name:'Thallium', mass:204.4, category:'post-transition', group:13, period:6, electronegativity:1.62, ionizationEnergy:589, atomicRadius:156, electronConfig:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', oxidationStates:'+3, +1', phase:'solid' },
  { z:82, symbol:'Pb', name:'Lead', mass:207.2, category:'post-transition', group:14, period:6, electronegativity:2.33, ionizationEnergy:716, atomicRadius:154, electronConfig:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', oxidationStates:'+4, +2', phase:'solid' },
  { z:83, symbol:'Bi', name:'Bismuth', mass:209.0, category:'post-transition', group:15, period:6, electronegativity:2.02, ionizationEnergy:703, atomicRadius:143, electronConfig:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', oxidationStates:'+5, +3', phase:'solid' },
  { z:84, symbol:'Po', name:'Polonium', mass:209.0, category:'post-transition', group:16, period:6, electronegativity:2.00, ionizationEnergy:812, atomicRadius:135, electronConfig:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', oxidationStates:'+4, +2', phase:'solid' },
  { z:85, symbol:'At', name:'Astatine', mass:210.0, category:'halogen', group:17, period:6, electronegativity:2.20, ionizationEnergy:920, atomicRadius:127, electronConfig:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', oxidationStates:'+7, -1', phase:'solid' },
  { z:86, symbol:'Rn', name:'Radon', mass:222.0, category:'noble-gas', group:18, period:6, ionizationEnergy:1037, atomicRadius:120, electronConfig:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', oxidationStates:'0', phase:'gas' },
  // Period 7
  { z:87, symbol:'Fr', name:'Francium', mass:223.0, category:'alkali', group:1, period:7, electronegativity:0.70, ionizationEnergy:380, atomicRadius:348, electronConfig:'[Rn] 7s¹', oxidationStates:'+1', phase:'solid' },
  { z:88, symbol:'Ra', name:'Radium', mass:226.0, category:'alkaline-earth', group:2, period:7, electronegativity:0.90, ionizationEnergy:509, atomicRadius:283, electronConfig:'[Rn] 7s²', oxidationStates:'+2', phase:'solid' },
  // Actinides (Ac–Lr)
  { z:89, symbol:'Ac', name:'Actinium', mass:227.0, category:'actinide', group:0, period:7, electronegativity:1.10, ionizationEnergy:499, atomicRadius:215, electronConfig:'[Rn] 6d¹ 7s²', oxidationStates:'+3', phase:'solid' },
  { z:90, symbol:'Th', name:'Thorium', mass:232.0, category:'actinide', group:0, period:7, electronegativity:1.30, ionizationEnergy:587, atomicRadius:206, electronConfig:'[Rn] 6d² 7s²', oxidationStates:'+4', phase:'solid' },
  { z:91, symbol:'Pa', name:'Protactinium', mass:231.0, category:'actinide', group:0, period:7, electronegativity:1.50, ionizationEnergy:568, atomicRadius:200, electronConfig:'[Rn] 5f² 6d¹ 7s²', oxidationStates:'+5, +4', phase:'solid' },
  { z:92, symbol:'U', name:'Uranium', mass:238.0, category:'actinide', group:0, period:7, electronegativity:1.38, ionizationEnergy:598, atomicRadius:196, electronConfig:'[Rn] 5f³ 6d¹ 7s²', oxidationStates:'+6, +4', phase:'solid' },
  { z:93, symbol:'Np', name:'Neptunium', mass:237.0, category:'actinide', group:0, period:7, electronegativity:1.36, ionizationEnergy:605, atomicRadius:190, electronConfig:'[Rn] 5f⁴ 6d¹ 7s²', oxidationStates:'+5, +4, +3', phase:'solid' },
  { z:94, symbol:'Pu', name:'Plutonium', mass:244.0, category:'actinide', group:0, period:7, electronegativity:1.28, ionizationEnergy:585, atomicRadius:187, electronConfig:'[Rn] 5f⁶ 7s²', oxidationStates:'+4, +3', phase:'solid' },
  { z:95, symbol:'Am', name:'Americium', mass:243.0, category:'actinide', group:0, period:7, electronegativity:1.30, ionizationEnergy:578, atomicRadius:180, electronConfig:'[Rn] 5f⁷ 7s²', oxidationStates:'+3', phase:'solid' },
  { z:96, symbol:'Cm', name:'Curium', mass:247.0, category:'actinide', group:0, period:7, electronegativity:1.30, ionizationEnergy:581, atomicRadius:169, electronConfig:'[Rn] 5f⁷ 6d¹ 7s²', oxidationStates:'+3', phase:'solid' },
  { z:97, symbol:'Bk', name:'Berkelium', mass:247.0, category:'actinide', group:0, period:7, electronegativity:1.30, ionizationEnergy:601, atomicRadius:170, electronConfig:'[Rn] 5f⁹ 7s²', oxidationStates:'+3', phase:'solid' },
  { z:98, symbol:'Cf', name:'Californium', mass:251.0, category:'actinide', group:0, period:7, electronegativity:1.30, ionizationEnergy:608, atomicRadius:170, electronConfig:'[Rn] 5f¹⁰ 7s²', oxidationStates:'+3', phase:'solid' },
  { z:99, symbol:'Es', name:'Einsteinium', mass:252.0, category:'actinide', group:0, period:7, electronegativity:1.30, ionizationEnergy:619, atomicRadius:170, electronConfig:'[Rn] 5f¹¹ 7s²', oxidationStates:'+3', phase:'solid' },
  { z:100, symbol:'Fm', name:'Fermium', mass:257.0, category:'actinide', group:0, period:7, electronegativity:1.30, ionizationEnergy:627, atomicRadius:170, electronConfig:'[Rn] 5f¹² 7s²', oxidationStates:'+3', phase:'solid' },
  { z:101, symbol:'Md', name:'Mendelevium', mass:258.0, category:'actinide', group:0, period:7, electronegativity:1.30, ionizationEnergy:635, atomicRadius:170, electronConfig:'[Rn] 5f¹³ 7s²', oxidationStates:'+3, +2', phase:'solid' },
  { z:102, symbol:'No', name:'Nobelium', mass:259.0, category:'actinide', group:0, period:7, electronegativity:1.30, ionizationEnergy:642, atomicRadius:170, electronConfig:'[Rn] 5f¹⁴ 7s²', oxidationStates:'+3, +2', phase:'solid' },
  { z:103, symbol:'Lr', name:'Lawrencium', mass:266.0, category:'actinide', group:0, period:7, electronegativity:1.30, ionizationEnergy:470, atomicRadius:170, electronConfig:'[Rn] 5f¹⁴ 7s² 7p¹', oxidationStates:'+3', phase:'solid' },
  // Period 7 continued (Rf–Og)
  { z:104, symbol:'Rf', name:'Rutherfordium', mass:267.0, category:'transition', group:4, period:7, electronConfig:'[Rn] 5f¹⁴ 6d² 7s²', oxidationStates:'+4', phase:'solid' },
  { z:105, symbol:'Db', name:'Dubnium', mass:268.0, category:'transition', group:5, period:7, electronConfig:'[Rn] 5f¹⁴ 6d³ 7s²', oxidationStates:'+5', phase:'solid' },
  { z:106, symbol:'Sg', name:'Seaborgium', mass:269.0, category:'transition', group:6, period:7, electronConfig:'[Rn] 5f¹⁴ 6d⁴ 7s²', oxidationStates:'+6', phase:'solid' },
  { z:107, symbol:'Bh', name:'Bohrium', mass:270.0, category:'transition', group:7, period:7, electronConfig:'[Rn] 5f¹⁴ 6d⁵ 7s²', oxidationStates:'+7', phase:'solid' },
  { z:108, symbol:'Hs', name:'Hassium', mass:277.0, category:'transition', group:8, period:7, electronConfig:'[Rn] 5f¹⁴ 6d⁶ 7s²', oxidationStates:'+8', phase:'solid' },
  { z:109, symbol:'Mt', name:'Meitnerium', mass:278.0, category:'transition', group:9, period:7, electronConfig:'[Rn] 5f¹⁴ 6d⁷ 7s²', oxidationStates:'+3', phase:'solid' },
  { z:110, symbol:'Ds', name:'Darmstadtium', mass:281.0, category:'transition', group:10, period:7, electronConfig:'[Rn] 5f¹⁴ 6d⁸ 7s²', oxidationStates:'+6', phase:'solid' },
  { z:111, symbol:'Rg', name:'Roentgenium', mass:282.0, category:'transition', group:11, period:7, electronConfig:'[Rn] 5f¹⁴ 6d⁹ 7s²', oxidationStates:'+3', phase:'solid' },
  { z:112, symbol:'Cn', name:'Copernicium', mass:285.0, category:'transition', group:12, period:7, electronConfig:'[Rn] 5f¹⁴ 6d¹⁰ 7s²', oxidationStates:'+2', phase:'solid' },
  { z:113, symbol:'Nh', name:'Nihonium', mass:286.0, category:'post-transition', group:13, period:7, electronConfig:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', oxidationStates:'+1', phase:'solid' },
  { z:114, symbol:'Fl', name:'Flerovium', mass:289.0, category:'post-transition', group:14, period:7, electronConfig:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', oxidationStates:'+2', phase:'solid' },
  { z:115, symbol:'Mc', name:'Moscovium', mass:290.0, category:'post-transition', group:15, period:7, electronConfig:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', oxidationStates:'+1, +3', phase:'solid' },
  { z:116, symbol:'Lv', name:'Livermorium', mass:293.0, category:'post-transition', group:16, period:7, electronConfig:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', oxidationStates:'+2, +4', phase:'solid' },
  { z:117, symbol:'Ts', name:'Tennessine', mass:294.0, category:'halogen', group:17, period:7, electronConfig:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', oxidationStates:'-1', phase:'solid' },
  { z:118, symbol:'Og', name:'Oganesson', mass:294.0, category:'noble-gas', group:18, period:7, electronConfig:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', oxidationStates:'0', phase:'solid' },
]

export const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'alkali': { bg: 'bg-red-100 dark:bg-red-900/40', text: 'text-red-800 dark:text-red-300', border: 'border-red-300 dark:border-red-700' },
  'alkaline-earth': { bg: 'bg-orange-100 dark:bg-orange-900/40', text: 'text-orange-800 dark:text-orange-300', border: 'border-orange-300 dark:border-orange-700' },
  'transition': { bg: 'bg-yellow-100 dark:bg-yellow-900/40', text: 'text-yellow-800 dark:text-yellow-300', border: 'border-yellow-300 dark:border-yellow-700' },
  'post-transition': { bg: 'bg-green-100 dark:bg-green-900/40', text: 'text-green-800 dark:text-green-300', border: 'border-green-300 dark:border-green-700' },
  'metalloid': { bg: 'bg-teal-100 dark:bg-teal-900/40', text: 'text-teal-800 dark:text-teal-300', border: 'border-teal-300 dark:border-teal-700' },
  'nonmetal': { bg: 'bg-blue-100 dark:bg-blue-900/40', text: 'text-blue-800 dark:text-blue-300', border: 'border-blue-300 dark:border-blue-700' },
  'halogen': { bg: 'bg-indigo-100 dark:bg-indigo-900/40', text: 'text-indigo-800 dark:text-indigo-300', border: 'border-indigo-300 dark:border-indigo-700' },
  'noble-gas': { bg: 'bg-purple-100 dark:bg-purple-900/40', text: 'text-purple-800 dark:text-purple-300', border: 'border-purple-300 dark:border-purple-700' },
  'lanthanide': { bg: 'bg-pink-100 dark:bg-pink-900/40', text: 'text-pink-800 dark:text-pink-300', border: 'border-pink-300 dark:border-pink-700' },
  'actinide': { bg: 'bg-amber-100 dark:bg-amber-900/40', text: 'text-amber-800 dark:text-amber-300', border: 'border-amber-300 dark:border-amber-700' },
}

export const CATEGORY_LABELS: Record<string, string> = {
  'alkali': 'Alkali Metal',
  'alkaline-earth': 'Alkaline Earth',
  'transition': 'Transition Metal',
  'post-transition': 'Post-Transition Metal',
  'metalloid': 'Metalloid',
  'nonmetal': 'Nonmetal',
  'halogen': 'Halogen',
  'noble-gas': 'Noble Gas',
  'lanthanide': 'Lanthanide',
  'actinide': 'Actinide',
}

// Map each element to its grid position: (row, col) — rows 1-7 main table,
// row 9 lanthanides, row 10 actinides.
export function getGridPosition(el: Element): { row: number; col: number } | null {
  // Standard position: period → row, group → col
  if (el.group >= 1 && el.group <= 18) {
    return { row: el.period, col: el.group }
  }
  // Lanthanides (La–Lu, z 57–71): row 9, cols 3–17
  if (el.category === 'lanthanide') {
    return { row: 9, col: 3 + (el.z - 57) }
  }
  // Actinides (Ac–Lr, z 89–103): row 10, cols 3–17
  if (el.category === 'actinide') {
    return { row: 10, col: 3 + (el.z - 89) }
  }
  return null
}
