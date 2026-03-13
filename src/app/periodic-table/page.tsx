'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

/* ================================================================== */
/*  Element Data                                                       */
/* ================================================================== */

interface Element {
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

type TrendKey = 'default' | 'electronegativity' | 'ionizationEnergy' | 'atomicRadius'

const ELEMENTS: Element[] = [
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

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
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

const CATEGORY_LABELS: Record<string, string> = {
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

function getTrendColor(value: number | undefined, min: number, max: number): string {
  if (value === undefined) return '#9ca3af'
  const ratio = (value - min) / (max - min)
  // Blue (low) → Green (mid) → Red (high)
  const r = Math.round(ratio < 0.5 ? 0 : (ratio - 0.5) * 2 * 255)
  const g = Math.round(ratio < 0.5 ? ratio * 2 * 200 : (1 - ratio) * 2 * 200)
  const b = Math.round(ratio < 0.5 ? (1 - ratio * 2) * 255 : 0)
  return `rgb(${r}, ${g}, ${b})`
}

/* ================================================================== */
/*  Grid Layout                                                        */
/* ================================================================== */

// Map each element to its grid position: (row, col)
function getGridPosition(el: Element): { row: number; col: number } | null {
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

/* ================================================================== */
/*  Page                                                               */
/* ================================================================== */

export default function PeriodicTablePage() {
  const [selected, setSelected] = useState<Element | null>(null)
  const [trend, setTrend] = useState<TrendKey>('default')
  const [filter, setFilter] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  // Trend ranges
  const trendRanges = useMemo(() => {
    const en = ELEMENTS.filter(e => e.electronegativity !== undefined).map(e => e.electronegativity!)
    const ie = ELEMENTS.filter(e => e.ionizationEnergy !== undefined).map(e => e.ionizationEnergy!)
    const ar = ELEMENTS.filter(e => e.atomicRadius !== undefined).map(e => e.atomicRadius!)
    return {
      electronegativity: { min: Math.min(...en), max: Math.max(...en) },
      ionizationEnergy: { min: Math.min(...ie), max: Math.max(...ie) },
      atomicRadius: { min: Math.min(...ar), max: Math.max(...ar) },
    }
  }, [])

  const filteredElements = useMemo(() => {
    let els = ELEMENTS
    if (filter) els = els.filter(e => e.category === filter)
    if (search.trim()) {
      const q = search.trim().toLowerCase()
      els = els.filter(e =>
        e.symbol.toLowerCase().includes(q) ||
        e.name.toLowerCase().includes(q) ||
        String(e.z).includes(q)
      )
    }
    return new Set(els.map(e => e.z))
  }, [filter, search])

  const getCellStyle = (el: Element): React.CSSProperties => {
    if (trend === 'default') return {}
    const val = el[trend]
    const range = trendRanges[trend]
    return { backgroundColor: getTrendColor(val, range.min, range.max), color: 'white' }
  }

  // Build the grid: 10 rows x 18 cols (7 main + 1 gap + 2 Ln/An)
  const grid: (Element | null)[][] = Array.from({ length: 10 }, () => Array(18).fill(null))
  for (const el of ELEMENTS) {
    const pos = getGridPosition(el)
    if (pos && pos.row <= 10) {
      grid[pos.row - 1][pos.col - 1] = el
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/ap-chemistry" className="inline-flex items-center gap-1 text-sm text-teal-600 dark:text-teal-400 hover:underline mb-6">
          ← Back to AP Chemistry
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white mb-2">
            Interactive{' '}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Periodic Table
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Click any element to view details. Use trend visualization to explore periodic patterns.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 mb-6">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search element..."
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm w-40"
            />

            {/* Trend selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-gray-500 font-medium">Trend:</span>
              {([
                { key: 'default' as TrendKey, label: 'Category' },
                { key: 'electronegativity' as TrendKey, label: 'Electronegativity' },
                { key: 'ionizationEnergy' as TrendKey, label: 'Ionization Energy' },
                { key: 'atomicRadius' as TrendKey, label: 'Atomic Radius' },
              ]).map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTrend(t.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${trend === t.key ? 'bg-violet-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200'}`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Category filter */}
            <select
              value={filter || ''}
              onChange={(e) => setFilter(e.target.value || null)}
              className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
            >
              <option value="">All Categories</option>
              {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Trend Legend */}
        {trend !== 'default' && (
          <div className="flex items-center gap-2 mb-4 justify-center">
            <span className="text-xs text-gray-500">Low</span>
            <div className="h-3 w-48 rounded-full" style={{ background: 'linear-gradient(to right, #3b82f6, #22c55e, #ef4444)' }} />
            <span className="text-xs text-gray-500">High</span>
          </div>
        )}

        {/* Periodic Table Grid */}
        <div className="overflow-x-auto mb-6">
          <div className="min-w-[900px]">
            <div className="grid gap-[3px]" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))' }}>
              {grid.flatMap((row, ri) =>
                row.map((el, ci) => {
                  if (!el) {
                    // Lanthanide placeholder in main grid (period 6, group 3)
                    if (ri === 5 && ci === 2) {
                      return <div key={`${ri}-${ci}`} className="aspect-square rounded-md border border-dashed border-pink-300 dark:border-pink-700 flex items-center justify-center bg-pink-50 dark:bg-pink-900/20 cursor-default"><span className="text-[6px] text-pink-500 dark:text-pink-400 font-medium">57-71</span></div>
                    }
                    // Actinide placeholder in main grid (period 7, group 3)
                    if (ri === 6 && ci === 2) {
                      return <div key={`${ri}-${ci}`} className="aspect-square rounded-md border border-dashed border-amber-300 dark:border-amber-700 flex items-center justify-center bg-amber-50 dark:bg-amber-900/20 cursor-default"><span className="text-[6px] text-amber-500 dark:text-amber-400 font-medium">89-103</span></div>
                    }
                    return <div key={`${ri}-${ci}`} className="aspect-square" />
                  }
                  const colors = CATEGORY_COLORS[el.category] || CATEGORY_COLORS['nonmetal']
                  const isFiltered = filteredElements.has(el.z)
                  const isSelected = selected?.z === el.z

                  return (
                    <button
                      key={el.z}
                      onClick={() => setSelected(isSelected ? null : el)}
                      className={`aspect-square rounded-md border flex flex-col items-center justify-center transition-all text-center leading-tight relative
                        ${isSelected ? 'ring-2 ring-violet-500 ring-offset-1 z-10 scale-110' : ''}
                        ${!isFiltered ? 'opacity-20' : 'hover:scale-105 hover:z-10 hover:shadow-lg'}
                        ${trend === 'default' ? `${colors.bg} ${colors.border} ${colors.text}` : `border-gray-300 dark:border-gray-600`}
                      `}
                      style={trend !== 'default' && isFiltered ? getCellStyle(el) : undefined}
                      title={`${el.name} (${el.symbol})`}
                    >
                      <span className="text-[8px] opacity-70 leading-none">{el.z}</span>
                      <span className="text-sm font-bold leading-tight">{el.symbol}</span>
                      <span className="text-[7px] opacity-60 leading-none truncate w-full px-0.5">{el.mass.toFixed(el.mass < 10 ? 3 : el.mass < 100 ? 2 : 1)}</span>
                    </button>
                  )
                })
              )}
            </div>
          </div>
        </div>

        {/* Category Legend (default view) */}
        {trend === 'default' && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
              const c = CATEGORY_COLORS[key]
              return (
                <button
                  key={key}
                  onClick={() => setFilter(filter === key ? null : key)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition ${filter === key ? 'ring-2 ring-violet-500' : ''} ${c.bg} ${c.text} ${c.border}`}
                >
                  <span className={`w-2 h-2 rounded-full ${c.bg} ${c.border} border`} />
                  {label}
                </button>
              )
            })}
          </div>
        )}

        {/* Element Detail Panel */}
        {selected && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <div className="flex items-start gap-6 flex-wrap">
              {/* Symbol card */}
              <div className={`flex-shrink-0 w-28 h-28 rounded-xl border-2 flex flex-col items-center justify-center ${CATEGORY_COLORS[selected.category]?.bg || ''} ${CATEGORY_COLORS[selected.category]?.border || ''}`}>
                <span className="text-xs text-gray-500">{selected.z}</span>
                <span className="text-4xl font-black">{selected.symbol}</span>
                <span className="text-xs text-gray-500">{selected.mass.toFixed(3)}</span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-[200px]">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selected.name}</h2>
                <p className="text-sm text-gray-500 mb-3">{CATEGORY_LABELS[selected.category] || selected.category}</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
                    <div className="text-xs text-gray-500">Atomic Number</div>
                    <div className="font-bold text-gray-900 dark:text-white">{selected.z}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
                    <div className="text-xs text-gray-500">Atomic Mass</div>
                    <div className="font-bold text-gray-900 dark:text-white">{selected.mass.toFixed(3)} u</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
                    <div className="text-xs text-gray-500">Phase (STP)</div>
                    <div className="font-bold text-gray-900 dark:text-white capitalize">{selected.phase}</div>
                  </div>
                  {selected.electronegativity !== undefined && (
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
                      <div className="text-xs text-gray-500">Electronegativity</div>
                      <div className="font-bold text-gray-900 dark:text-white">{selected.electronegativity}</div>
                    </div>
                  )}
                  {selected.ionizationEnergy !== undefined && (
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
                      <div className="text-xs text-gray-500">1st Ionization Energy</div>
                      <div className="font-bold text-gray-900 dark:text-white">{selected.ionizationEnergy} kJ/mol</div>
                    </div>
                  )}
                  {selected.atomicRadius !== undefined && (
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
                      <div className="text-xs text-gray-500">Atomic Radius</div>
                      <div className="font-bold text-gray-900 dark:text-white">{selected.atomicRadius} pm</div>
                    </div>
                  )}
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5 col-span-2 sm:col-span-3">
                    <div className="text-xs text-gray-500">Electron Configuration</div>
                    <div className="font-bold text-gray-900 dark:text-white font-mono text-sm">{selected.electronConfig}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5 col-span-2 sm:col-span-3">
                    <div className="text-xs text-gray-500">Common Oxidation States</div>
                    <div className="font-bold text-gray-900 dark:text-white">{selected.oxidationStates}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* AP Chem relevance */}
            <div className="mt-4 p-4 bg-violet-50 dark:bg-violet-900/20 rounded-xl border border-violet-200 dark:border-violet-700">
              <p className="text-sm font-bold text-violet-800 dark:text-violet-300 mb-1">AP Chemistry Relevance</p>
              <p className="text-xs text-violet-700 dark:text-violet-400">
                {selected.category === 'alkali' && 'Alkali metals have the lowest ionization energies and electronegativities. They form +1 ions readily and react vigorously with water. Key examples: Na⁺ in solution chemistry, Li in batteries.'}
                {selected.category === 'alkaline-earth' && 'Alkaline earth metals form +2 ions. Important in precipitation reactions (Ca²⁺, Ba²⁺) and Ksp calculations. Mg is key in biological molecules like chlorophyll.'}
                {selected.category === 'transition' && 'Transition metals have multiple oxidation states, form colored compounds and complex ions. Important in redox reactions, coordination chemistry, and catalysis. Variable electron configurations due to d-orbital splitting.'}
                {selected.category === 'post-transition' && 'Post-transition metals show both metallic and covalent bonding. Al is an important amphoteric element. Key in Lewis acid-base chemistry.'}
                {selected.category === 'metalloid' && 'Metalloids have intermediate properties between metals and nonmetals. Si is important in network covalent solids. B is a classic Lewis acid.'}
                {selected.category === 'nonmetal' && 'Nonmetals form covalent bonds and molecular compounds. High electronegativities (except H). Key in organic chemistry, acids, and molecular geometry (VSEPR). C, N, O, P, S are essential in biological molecules.'}
                {selected.category === 'halogen' && 'Halogens are highly electronegative and form -1 ions. Important in acid-base chemistry (HCl, HF), precipitation (AgCl), and organic reactions. Electronegativity decreases down the group.'}
                {selected.category === 'noble-gas' && 'Noble gases have complete electron shells (stable octet). Very high ionization energies. Generally unreactive, but Xe can form compounds. Used as reference points for electron configuration.'}
                {selected.category === 'lanthanide' && 'Lanthanides (rare earth elements) have similar chemical properties due to filling of 4f orbitals. They predominantly show the +3 oxidation state. Important for understanding electron configuration exceptions and f-orbital chemistry.'}
                {selected.category === 'actinide' && 'Actinides include radioactive elements filling 5f orbitals. Uranium and thorium are naturally occurring. Important for nuclear chemistry, radioactive decay series, and understanding f-block electron configurations.'}
              </p>
            </div>
          </div>
        )}

        {/* Periodic Trends Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="font-bold text-gray-900 dark:text-white mb-4">📈 Key Periodic Trends (AP Chemistry)</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-700">
              <p className="font-bold text-blue-800 dark:text-blue-300">Electronegativity</p>
              <p className="text-blue-700 dark:text-blue-400 text-xs mt-1">Increases → across a period (more protons pull e⁻ closer)</p>
              <p className="text-blue-700 dark:text-blue-400 text-xs">Decreases ↓ down a group (e⁻ farther from nucleus)</p>
              <p className="text-blue-600 dark:text-blue-500 text-xs mt-1">Highest: F (3.98) · Lowest: Cs (0.79)</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-200 dark:border-red-700">
              <p className="font-bold text-red-800 dark:text-red-300">Ionization Energy</p>
              <p className="text-red-700 dark:text-red-400 text-xs mt-1">Increases → across a period (higher Z_eff)</p>
              <p className="text-red-700 dark:text-red-400 text-xs">Decreases ↓ down a group (e⁻ easier to remove)</p>
              <p className="text-red-600 dark:text-red-500 text-xs mt-1">Highest: He (2372 kJ/mol) · Lowest: Cs (376 kJ/mol)</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-700">
              <p className="font-bold text-green-800 dark:text-green-300">Atomic Radius</p>
              <p className="text-green-700 dark:text-green-400 text-xs mt-1">Decreases → across a period (more protons, same shell)</p>
              <p className="text-green-700 dark:text-green-400 text-xs">Increases ↓ down a group (more electron shells)</p>
              <p className="text-green-600 dark:text-green-500 text-xs mt-1">Largest: Cs (298 pm) · Smallest: He (31 pm)</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 border border-purple-200 dark:border-purple-700">
              <p className="font-bold text-purple-800 dark:text-purple-300">Electron Affinity</p>
              <p className="text-purple-700 dark:text-purple-400 text-xs mt-1">Generally increases → across a period</p>
              <p className="text-purple-700 dark:text-purple-400 text-xs">Generally decreases ↓ down a group</p>
              <p className="text-purple-600 dark:text-purple-500 text-xs mt-1">Most negative: Cl (-349 kJ/mol) · Noble gases ≈ 0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
