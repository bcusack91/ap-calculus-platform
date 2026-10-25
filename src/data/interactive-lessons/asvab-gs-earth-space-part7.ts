export const asvabGsEarthSpacePart7Data = {
  topicSlug: 'asvab-gs-earth-space',
  sections: [
    {
      id: 'gse7-intro',
      type: 'text' as const,
      content: `# 🌍 Earth and Space Science

**Part 7 of 7 — Mixed Mastery Set**

### How This Set Works

Twelve questions mixed from every part of the lesson, at the difficulty you will see on the CAT-ASVAB: some quick recall, some one-step reasoning, a few harder ones.

Give yourself about **48 seconds** per question, the real GS pace. Answer in your head first, eliminate, commit.

| Part | Skill |
|:---:|:---|
| 2 | Rocks, minerals and the rock cycle |
| 3 | Earth's layers, plate tectonics and earthquakes |
| 4 | Water, atmosphere and weather |
| 5 | The solar system, stars and seasons |
| 6 | Avoiding the classic traps |`
    },
    {
      id: 'gse7-mc-a',
      type: 'multiple-choice' as const,
      content: '**Mastery set, questions 1 to 5.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which mineral is the softest on the Mohs hardness scale?',
            options: ['Talc', 'Quartz', 'Calcite', 'Gypsum'],
            correctAnswer: 0,
            explanation: 'Talc is 1, the bottom of the scale, soft enough to crumble under a fingernail. Gypsum is 2, calcite is 3 and quartz is 7.'
          },
          {
            question: 'The Mid-Atlantic Ridge runs down the middle of the Atlantic Ocean, where new seafloor forms. What kind of plate boundary is it?',
            options: ['Divergent', 'Convergent', 'Transform', 'Subduction zone'],
            correctAnswer: 0,
            explanation: 'At a mid-ocean ridge the plates move apart and magma rises to fill the gap, making new crust: a divergent boundary. Convergent boundaries (including subduction zones) destroy or crumple crust, and transform boundaries slide sideways.'
          },
          {
            question: 'A seismograph 500 km from an earthquake records several kinds of waves. Which kind arrives first?',
            options: ['P waves', 'S waves', 'Surface waves', 'Tidal waves'],
            correctAnswer: 0,
            explanation: 'P (primary) waves are the fastest seismic waves, so they arrive first. S waves arrive second and surface waves last. "Tidal wave" is an old, inaccurate name for a tsunami, an ocean wave rather than a seismic wave.'
          },
          {
            question: 'High in the sky you see thin, feathery white streaks made of ice crystals. What type of cloud are they?',
            options: ['Cirrus', 'Cumulus', 'Stratus', 'Cumulonimbus'],
            correctAnswer: 0,
            explanation: 'Cirrus clouds are high, thin and wispy, made of ice. Cumulus clouds are puffy, stratus clouds are low gray sheets, and cumulonimbus clouds are tall thunderstorm towers.'
          },
          {
            question: 'Which planet has the highest average surface temperature?',
            options: ['Venus', 'Mercury', 'Mars', 'Jupiter'],
            correctAnswer: 0,
            explanation: 'Venus is the hottest planet because its thick carbon dioxide atmosphere traps heat in a runaway greenhouse effect. Mercury is closer to the Sun but has almost no atmosphere to hold heat, so its night side gets extremely cold.'
          }
        ]
      }
    },
    {
      id: 'gse7-mc-b',
      type: 'multiple-choice' as const,
      content: '**Mastery set, questions 6 to 9.** 🎯',
      exercise: {
        questions: [
          {
            question: 'During which phase of the Moon can a lunar eclipse happen?',
            options: ['Full moon', 'New moon', 'First quarter', 'Waning crescent'],
            correctAnswer: 0,
            explanation: 'A lunar eclipse needs Earth between the Sun and the Moon, which is exactly where the Moon is at full moon. A solar eclipse happens at new moon, and the quarter and crescent phases are not lined up.'
          },
          {
            question: 'The relative humidity of the air reaches 100% just before dawn and fog forms. What is true at that moment?',
            options: ['The air temperature has dropped to the dew point', 'The air pressure has risen above normal levels', 'The air has lost almost all of its water vapor', 'The air temperature is far above the dew point'],
            correctAnswer: 0,
            explanation: 'At 100% relative humidity the air is saturated, which happens when it cools to its dew point, so vapor condenses into fog. Rising pressure does not cause saturation, fog means the air is full of moisture rather than empty of it, and being far above the dew point would mean the air is dry.'
          },
          {
            question: 'On a sunny day, which way does the wind tend to blow?',
            options: ['From high pressure toward low pressure', 'From low pressure toward high pressure', 'Always from the north toward the south', 'Always straight up away from the ground'],
            correctAnswer: 0,
            explanation: 'Air flows from where pressure is high to where it is low, and that flow is wind. It is not fixed to one compass direction, and the rising air in a low is a vertical motion, not the wind you feel.'
          },
          {
            question: 'Soil is formed mainly from:',
            options: ['Weathered rock mixed with decayed living matter', 'Cooled lava mixed with ocean salt and rainwater', 'Pure clay deposited only by large rivers', 'Metamorphic rock crushed by heavy glaciers'],
            correctAnswer: 0,
            explanation: 'Soil starts as rock broken down by weathering, plus humus, the dark decayed remains of living things. It is not cooled lava with salt, it forms on land far from rivers too, and glaciers are only one minor way rock is broken up.'
          }
        ]
      }
    },
    {
      id: 'gse7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Mastery set, questions 10 to 12.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Sandstone heated and squeezed deep underground becomes:',
            options: ['Quartzite', 'Granite', 'Shale', 'Obsidian'],
            correctAnswer: 0
          },
          {
            label: 'The layer of the atmosphere where auroras glow:',
            options: ['Thermosphere', 'Troposphere', 'Stratosphere', 'Mesosphere'],
            correctAnswer: 0
          },
          {
            label: 'What a Sun-like star becomes after its red giant stage:',
            options: ['White dwarf', 'Supernova', 'Black hole', 'Neutron star'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['Quartzite', 'Thermosphere', 'White dwarf'],
        hint1: 'Metamorphism changes a rock without melting it; sandstone is mostly quartz.',
        hint2: 'Auroras glow very high up, in the layer that gets much hotter with height.',
        hint3: 'Supernovas, neutron stars and black holes are for very massive stars.',
        explanation: 'Sandstone becomes quartzite, a metamorphic rock. Auroras glow in the thermosphere. A Sun-like star sheds its outer layers after the red giant stage and leaves a white dwarf; only much more massive stars explode as supernovas and leave neutron stars or black holes.'
      }
    },
    {
      id: 'gse7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Earth and Space Science

- **Rocks:** igneous (cooled melt), sedimentary (layers, fossils), metamorphic (heat and pressure); Mohs 1 talc to 10 diamond
- **Interior:** crust, mantle, liquid outer core, solid inner core; divide / collide / slide; P waves first, S waves need solids
- **Air and water:** 78% nitrogen; weather in the troposphere, ozone in the stratosphere; low pressure = storms; condensation makes clouds
- **Space:** My Very Educated Mother Just Served Us Nachos; Venus hottest, Jupiter largest; light-year = distance
- **Earth and Moon:** seasons from tilt; solar eclipse at new moon, lunar at full; spring tides biggest

Missed one? The exit quiz will send you back to the part that teaches it.`
    }
  ]
};
