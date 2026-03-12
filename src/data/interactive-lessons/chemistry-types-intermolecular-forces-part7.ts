export const chemTypesIntermolecularForcesPart7Data = {
  topicSlug: 'types-intermolecular-forces',
  sections: [
    {
      id: 'if-ap-overview',
      type: 'text',
      title: 'AP Chemistry IMF Review',
      content: `Let\'s bring everything together for the AP exam. IMF questions are among the most commonly tested topics. Here\'s your complete toolkit:\n\n**The IMF Hierarchy (similar-sized molecules):**\n$$\\text{Ion-Dipole} > \\text{H-bonding} > \\text{Dipole-Dipole} > \\text{LDF}$$\n\n**Quick Identification Guide:**\n1. **Ion + polar molecule?** \\(\\rightarrow\\) Ion-dipole\n2. **H bonded to N, O, or F?** \\(\\rightarrow\\) Hydrogen bonding\n3. **Polar molecule?** \\(\\rightarrow\\) Dipole-dipole (+ LDF)\n4. **Nonpolar molecule?** \\(\\rightarrow\\) LDF only\n\n**Property Trends (stronger IMFs \\(\\rightarrow\\)):**\n- Boiling point: \\(\\uparrow\\)\n- Melting point: \\(\\uparrow\\)\n- Surface tension: \\(\\uparrow\\)\n- Viscosity: \\(\\uparrow\\)\n- Vapor pressure: \\(\\downarrow\\) (inverse!)\n\n**Remember:** ALL molecules have LDF. Polar molecules have DD + LDF. H-bonding molecules have H-bond + DD + LDF.`
    },
    {
      id: 'if-ap-common-mistakes',
      type: 'text',
      title: 'Common AP Mistakes to Avoid',
      content: `**Mistake 1: Saying hydrogen bonds are chemical bonds**\nHydrogen bonds are IMFs (between molecules), NOT chemical bonds (within molecules). Never say a molecule "has hydrogen bonds" — say it "exhibits hydrogen bonding" or "participates in hydrogen bonding."\n\n**Mistake 2: Thinking HCl has hydrogen bonding**\nHCl has an H–Cl bond, but Cl is NOT N, O, or F. HCl only has dipole-dipole forces + LDF. The "hydrogen" in hydrogen bonding doesn\'t mean any bond to hydrogen — it specifically means H bonded to FON.\n\n**Mistake 3: Confusing IMFs with intramolecular bonds**\nIMFs are forces BETWEEN molecules. Covalent, ionic, and metallic bonds are forces WITHIN a compound. Boiling and melting break IMFs, not covalent bonds.\n\n**Mistake 4: Ignoring molar mass when comparing LDF**\nA large nonpolar molecule can have stronger IMFs than a small polar one. Always consider size.\n\n**Mistake 5: Forgetting that LDF are in ALL molecules**\nPolar molecules have dipole-dipole AND LDF. Hydrogen bonding molecules have H-bonding AND DD AND LDF.`
    },
    {
      id: 'if-ap-q1',
      type: 'multiple-choice',
      title: 'AP-Style Question 1',
      content: 'This question tests your ability to identify IMFs and predict properties.',
      exercise: {
        questions: [
          {
            question: 'Which of the following best explains why the boiling point of HF (20°C) is higher than the boiling point of HCl (-85°C)?',
            options: [
              'HF has a higher molar mass than HCl',
              'HF molecules experience hydrogen bonding, while HCl molecules do not',
              'HCl is nonpolar, so it only has London Dispersion Forces',
              'HF has stronger London Dispersion Forces than HCl'
            ],
            correctAnswer: 1,
            explanation: 'HF has hydrogen bonding (H bonded to F), while HCl only has dipole-dipole forces (Cl is not N, O, or F). Hydrogen bonding is stronger than dipole-dipole forces, giving HF a higher boiling point. Note: HF actually has a LOWER molar mass than HCl, making option A incorrect.'
          }
        ]
      }
    },
    {
      id: 'if-ap-q2',
      type: 'multiple-choice',
      title: 'AP-Style Question 2',
      content: 'Analyze intermolecular forces in a set of molecules.',
      exercise: {
        questions: [
          {
            question: 'The boiling points of the hydrogen halides are: HF = 20°C, HCl = -85°C, HBr = -67°C, HI = -35°C. Which statement best explains the trend from HCl to HI?',
            options: [
              'Hydrogen bonding increases from HCl to HI',
              'Dipole-dipole forces increase from HCl to HI',
              'London Dispersion Forces increase from HCl to HI due to increasing molar mass and electron count',
              'Electronegativity increases from Cl to I'
            ],
            correctAnswer: 2,
            explanation: 'From HCl to HI, molar mass increases significantly. The increasing number of electrons leads to stronger LDF. Even though the polarity decreases (Cl is more electronegative than I), the much stronger LDF in HBr and HI dominate, causing the boiling point to increase. HF is an outlier due to hydrogen bonding.'
          },
          {
            question: 'A student claims that CH₃CH₂CH₂CH₃ (butane) should have a higher boiling point than CH₃OH (methanol) because butane has a higher molar mass. Is this correct?',
            options: [
              'Yes — higher molar mass always means higher boiling point',
              'No — methanol has hydrogen bonding, which is stronger than the LDF in butane, giving methanol a higher BP despite its lower molar mass',
              'No — butane has hydrogen bonding too',
              'Yes — butane is polar with stronger dipole-dipole forces'
            ],
            correctAnswer: 1,
            explanation: 'The student is wrong. While butane (MW = 58) has a higher molar mass than methanol (MW = 32), methanol\'s O–H group allows hydrogen bonding. Hydrogen bonding is so much stronger than LDF that methanol (BP = 65°C) boils higher than butane (BP = -1°C) despite its lower molar mass.'
          }
        ]
      }
    },
    {
      id: 'if-ap-q3',
      type: 'multiple-choice',
      title: 'AP-Style Question 3',
      content: 'Dissolution and ion-dipole forces.',
      exercise: {
        questions: [
          {
            question: 'NaCl dissolves readily in water but not in hexane (C₆H₁₄). Which explanation is most accurate?',
            options: [
              'Hexane is too small to dissolve NaCl',
              'Water forms ion-dipole forces with Na⁺ and Cl⁻ that compensate for breaking the ionic lattice; hexane is nonpolar and cannot form these forces',
              'NaCl forms covalent bonds with water',
              'Hexane has stronger IMFs than water'
            ],
            correctAnswer: 1,
            explanation: 'Water is polar and forms strong ion-dipole forces with Na⁺ and Cl⁻ ions. These ion-dipole forces provide enough energy to compensate for breaking the ionic lattice. Hexane is nonpolar and cannot form ion-dipole forces with ions, so it cannot stabilize the separated ions.'
          }
        ]
      }
    },
    {
      id: 'if-ap-dropdown-comprehensive',
      type: 'dropdown-select',
      title: 'Comprehensive IMF Identification',
      content: 'For each substance, select the STRONGEST intermolecular force it experiences.',
      exercise: {
        dropdowns: [
          {
            id: 'ap-ch4',
            options: ['LDF only', 'Dipole-dipole', 'Hydrogen bonding', 'Ion-dipole'],
            correctIndex: 0,
            explanation: 'CH₄ is nonpolar (symmetric tetrahedral). It only experiences London Dispersion Forces.'
          },
          {
            id: 'ap-nh3',
            options: ['LDF only', 'Dipole-dipole', 'Hydrogen bonding', 'Ion-dipole'],
            correctIndex: 2,
            explanation: 'NH₃ has N–H bonds (H bonded to N), so it exhibits hydrogen bonding.'
          },
          {
            id: 'ap-so2',
            options: ['LDF only', 'Dipole-dipole', 'Hydrogen bonding', 'Ion-dipole'],
            correctIndex: 1,
            explanation: 'SO₂ is polar (bent geometry), so it has dipole-dipole forces. It has no H bonded to N, O, or F, so no hydrogen bonding.'
          },
          {
            id: 'ap-kcl-in-water',
            options: ['LDF only', 'Dipole-dipole', 'Hydrogen bonding', 'Ion-dipole'],
            correctIndex: 3,
            explanation: 'KCl dissociates into K⁺ and Cl⁻ ions in water. The interaction between ions and polar water molecules is ion-dipole.'
          },
          {
            id: 'ap-ch3f',
            options: ['LDF only', 'Dipole-dipole', 'Hydrogen bonding', 'Ion-dipole'],
            correctIndex: 1,
            explanation: 'CH₃F is polar (the C–F bond creates a net dipole) but it does NOT have hydrogen bonding because there is no H bonded directly to F (the H atoms are bonded to C). Its strongest IMF is dipole-dipole.'
          }
        ]
      }
    },
    {
      id: 'if-ap-tricky',
      type: 'multiple-choice',
      title: 'Tricky AP Scenario',
      content: 'Watch out for this common AP trap!',
      exercise: {
        questions: [
          {
            question: 'CH₃F (fluoromethane) contains fluorine. Does it exhibit hydrogen bonding?',
            options: [
              'Yes — it contains fluorine, one of the FON atoms',
              'No — the hydrogen atoms are bonded to carbon, not fluorine. H must be bonded DIRECTLY to N, O, or F for hydrogen bonding',
              'Yes — all molecules with F have hydrogen bonding',
              'No — fluorine cannot participate in hydrogen bonding'
            ],
            correctAnswer: 1,
            explanation: 'This is a classic AP trap! CH₃F has fluorine, but the H atoms are bonded to C, not to F. Hydrogen bonding requires H bonded DIRECTLY to N, O, or F. Since CH₃F has C–H bonds (not F–H bonds), it does NOT form hydrogen bonds. It only has dipole-dipole forces + LDF.'
          },
          {
            question: 'When comparing CH₃OCH₃ (dimethyl ether, MW = 46) and CH₃CH₂OH (ethanol, MW = 46), which has the higher boiling point?',
            options: [
              'CH₃OCH₃ — it has more oxygen lone pairs',
              'They have the same boiling point because they have the same molar mass and formula',
              'CH₃CH₂OH — it has an O–H bond allowing hydrogen bonding; dimethyl ether cannot hydrogen bond with itself',
              'CH₃OCH₃ — ethers always boil higher than alcohols'
            ],
            correctAnswer: 2,
            explanation: 'Ethanol has an O–H bond and can form hydrogen bonds with other ethanol molecules (both donor and acceptor). Dimethyl ether has oxygen with lone pairs (acceptor) but no O–H, N–H, or F–H bond (no donor), so it CANNOT hydrogen bond with itself. Ethanol (BP = 78°C) boils much higher than dimethyl ether (BP = -25°C).'
          }
        ]
      }
    },
    {
      id: 'if-ap-input-final',
      type: 'input-boxes',
      title: 'Final Review',
      content: 'Complete these essential AP Chemistry IMF facts.',
      exercise: {
        inputs: [
          {
            label: 'The only IMF present in ALL molecules is _____ Dispersion Forces',
            correctAnswer: 'London',
            explanation: 'London Dispersion Forces are universal — every molecule and atom experiences them because all particles have electrons capable of forming temporary dipoles.'
          },
          {
            label: 'Hydrogen bonding requires H bonded to N, O, or F. A helpful mnemonic is _____',
            correctAnswer: 'FON',
            explanation: 'FON (Fluorine, Oxygen, Nitrogen) is the mnemonic for the three atoms that can participate in hydrogen bonding when bonded to hydrogen.'
          },
          {
            label: 'Stronger IMFs lead to higher boiling points but _____ vapor pressure (higher/lower)',
            correctAnswer: 'lower',
            explanation: 'Vapor pressure is inversely related to IMF strength. Stronger IMFs hold molecules in the liquid phase, reducing vapor pressure. This is the one property that goes in the opposite direction!'
          }
        ]
      }
    }
  ]
};
