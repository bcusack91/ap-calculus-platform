export const chemTypesIntermolecularForcesPart6Data = {
  topicSlug: 'types-intermolecular-forces',
  sections: [
    {
      id: 'if-prop-intro',
      type: 'text',
      title: 'IMFs and Physical Properties',
      content: `Intermolecular forces directly determine a substance\'s **physical properties**. Stronger IMFs mean molecules are held together more tightly, which affects how the substance behaves.\n\nThe key physical properties influenced by IMF strength:\n\n| Property | Stronger IMFs \\(\\rightarrow\\) | Why |\n|----------|--------------------------|-----|\n| Boiling point | Higher | More energy needed to separate molecules into gas phase |\n| Melting point | Higher | More energy needed to disrupt the solid structure |\n| Surface tension | Higher | Stronger cohesive forces at the surface |\n| Viscosity | Higher | Molecules resist flowing past each other |\n| Vapor pressure | **Lower** | Fewer molecules have enough energy to escape to gas phase |\n\nNotice that vapor pressure is the **opposite** — stronger IMFs mean LOWER vapor pressure.`
    },
    {
      id: 'if-prop-bp',
      type: 'text',
      title: 'Boiling Point',
      content: `**Boiling point** is the temperature at which a liquid\'s vapor pressure equals atmospheric pressure. At this point, molecules throughout the liquid have enough kinetic energy to overcome intermolecular forces and enter the gas phase.\n\n**Stronger IMFs \\(\\rightarrow\\) Higher boiling point**\n\nBoiling requires breaking IMFs (not covalent bonds). The stronger the IMFs, the more energy (higher temperature) is needed.\n\n**Examples showing IMF effect on boiling point:**\n\n| Substance | IMFs Present | BP (°C) |\n|-----------|-------------|--------|\n| He | LDF only (very weak) | -269 |\n| N₂ | LDF only | -196 |\n| HCl | Dipole-dipole + LDF | -85 |\n| H₂O | H-bonding + DD + LDF | 100 |\n| NaCl (in water) | Ion-dipole | (ionic compound, MP = 801) |\n\nThe trend clearly shows: as IMF strength increases, boiling point increases.`
    },
    {
      id: 'if-prop-bp-q',
      type: 'multiple-choice',
      title: 'Boiling Point Predictions',
      content: 'Use IMF analysis to predict relative boiling points.',
      exercise: {
        questions: [
          {
            question: 'Which has the higher boiling point: CH₃OH (methanol) or CH₃SH (methanethiol)?',
            options: [
              'CH₃SH — sulfur is larger so LDF are stronger',
              'CH₃OH — it has hydrogen bonding while CH₃SH does not',
              'They are the same because they have similar structures',
              'CH₃SH — S–H bonds are more polar than O–H bonds'
            ],
            correctAnswer: 1,
            explanation: 'CH₃OH has an O–H bond and can form hydrogen bonds. CH₃SH has an S–H bond, but sulfur is NOT N, O, or F, so it cannot form hydrogen bonds (only dipole-dipole + LDF). Hydrogen bonding in methanol gives it a much higher boiling point (65°C vs. 6°C).'
          },
          {
            question: 'Arrange in order of INCREASING boiling point: Ar, HBr, H₂O',
            options: [
              'H₂O < HBr < Ar',
              'Ar < H₂O < HBr',
              'Ar < HBr < H₂O',
              'HBr < Ar < H₂O'
            ],
            correctAnswer: 2,
            explanation: 'Ar (nonpolar, LDF only, BP = -186°C) < HBr (polar, dipole-dipole + LDF, BP = -67°C) < H₂O (hydrogen bonding + DD + LDF, BP = 100°C). The order follows increasing IMF strength.'
          }
        ]
      }
    },
    {
      id: 'if-prop-vapor-pressure',
      type: 'text',
      title: 'Vapor Pressure',
      content: `**Vapor pressure** is the pressure exerted by the vapor above a liquid at a given temperature. It measures how easily molecules escape from the liquid phase into the gas phase.\n\n**Stronger IMFs \\(\\rightarrow\\) LOWER vapor pressure**\n\nThis is the **inverse** relationship! When IMFs are strong, molecules are held tightly in the liquid phase and fewer can escape to become vapor.\n\n**Key concept:** Vapor pressure and boiling point are inversely related:\n- High vapor pressure \\(\\rightarrow\\) low boiling point (volatile substance)\n- Low vapor pressure \\(\\rightarrow\\) high boiling point (less volatile)\n\n**Examples:**\n- Diethyl ether (weak IMFs): high vapor pressure, evaporates quickly, low BP\n- Water (hydrogen bonding): moderate vapor pressure, BP = 100°C\n- Glycerol (extensive H-bonding): very low vapor pressure, very high BP\n\nA substance with high vapor pressure is described as **volatile**.`
    },
    {
      id: 'if-prop-vp-q',
      type: 'multiple-choice',
      title: 'Vapor Pressure Questions',
      content: 'Test your understanding of the relationship between IMFs and vapor pressure.',
      exercise: {
        questions: [
          {
            question: 'Ethanol (CH₃CH₂OH) has a LOWER vapor pressure than diethyl ether (CH₃CH₂OCH₂CH₃) at the same temperature. What explains this?',
            options: [
              'Ethanol has weaker IMFs',
              'Ethanol has hydrogen bonding, creating stronger IMFs that keep more molecules in the liquid phase',
              'Diethyl ether has hydrogen bonding',
              'Diethyl ether has a lower molar mass'
            ],
            correctAnswer: 1,
            explanation: 'Ethanol has an O–H bond allowing hydrogen bonding, which creates stronger IMFs. Diethyl ether has no O–H, N–H, or F–H bond, so it cannot form hydrogen bonds (only dipole-dipole + LDF). Stronger IMFs in ethanol keep more molecules in the liquid phase, resulting in lower vapor pressure.'
          }
        ]
      }
    },
    {
      id: 'if-prop-surface-tension',
      type: 'text',
      title: 'Surface Tension and Viscosity',
      content: `**Surface Tension** is the energy required to increase the surface area of a liquid. It arises because molecules at the surface only experience IMF attractions from the side and below (not above), creating a net inward force.\n\n**Stronger IMFs \\(\\rightarrow\\) Higher surface tension**\n\nWater has exceptionally high surface tension due to its extensive hydrogen bonding network. This allows small insects to walk on water and enables water to form droplets.\n\n---\n\n**Viscosity** is a liquid\'s resistance to flow. More viscous liquids flow slowly (like honey), while less viscous liquids flow freely (like gasoline).\n\n**Stronger IMFs \\(\\rightarrow\\) Higher viscosity**\n\nGlycerol (\\(\\text{C}_3\\text{H}_8\\text{O}_3\\)) is very viscous because it has three O–H groups, allowing extensive hydrogen bonding. Each glycerol molecule can form multiple hydrogen bonds with its neighbors, creating a tangled network that resists flow.\n\n**Temperature effect:** Increasing temperature decreases viscosity because molecules have more kinetic energy to overcome IMFs.`
    },
    {
      id: 'if-prop-dropdown-review',
      type: 'dropdown-select',
      title: 'IMF-Property Relationships',
      content: 'For each property, select how it changes with STRONGER intermolecular forces.',
      exercise: {
        dropdowns: [
          {
            id: 'prop-bp',
            options: ['Increases', 'Decreases', 'No change'],
            correctIndex: 0,
            explanation: 'Stronger IMFs mean more energy is needed to separate molecules into the gas phase, so boiling point increases.'
          },
          {
            id: 'prop-vp',
            options: ['Increases', 'Decreases', 'No change'],
            correctIndex: 1,
            explanation: 'Stronger IMFs hold molecules more tightly in the liquid, so fewer escape to the gas phase. Vapor pressure DECREASES.'
          },
          {
            id: 'prop-st',
            options: ['Increases', 'Decreases', 'No change'],
            correctIndex: 0,
            explanation: 'Stronger IMFs create a stronger inward pull on surface molecules, increasing surface tension.'
          },
          {
            id: 'prop-visc',
            options: ['Increases', 'Decreases', 'No change'],
            correctIndex: 0,
            explanation: 'Stronger IMFs make molecules resist flowing past each other, increasing viscosity.'
          }
        ]
      }
    },
    {
      id: 'if-prop-input-review',
      type: 'input-boxes',
      title: 'Properties Review',
      content: 'Complete the following statements about IMFs and physical properties.',
      exercise: {
        inputs: [
          {
            label: 'Stronger IMFs lead to a _____ boiling point (higher/lower)',
            correctAnswer: 'higher',
            explanation: 'More energy is needed to overcome stronger IMFs, so higher temperatures (higher boiling points) are required to boil the substance.'
          },
          {
            label: 'Stronger IMFs lead to a _____ vapor pressure (higher/lower)',
            correctAnswer: 'lower',
            explanation: 'This is the inverse relationship! Stronger IMFs keep molecules in the liquid phase, reducing the number that escape to the gas phase and lowering vapor pressure.'
          },
          {
            label: 'A substance with high vapor pressure and low boiling point is described as _____ (volatile/non-volatile)',
            correctAnswer: 'volatile',
            explanation: 'Volatile substances have weak IMFs, allowing molecules to easily escape to the gas phase (high vapor pressure, low boiling point). Examples include diethyl ether and acetone.'
          }
        ]
      }
    }
  ]
};
