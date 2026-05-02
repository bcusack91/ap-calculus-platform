// Dynamic import registry - lesson data is loaded on-demand
// This avoids bundling all 500+ lesson files into one chunk

type LessonSection = {
  id?: string
  content?: string
  [key: string]: unknown
}

export type LessonData = {
  topicSlug: string
  sections: LessonSection[]
}

interface LazyPartConfig {
  title: string
  loader: () => Promise<LessonData>
}

export interface InteractiveTopicConfig {
  parts: LazyPartConfig[]
  /** Variant content: keys are variant numbers (2, 3). Variant 1 = default parts. */
  variants?: Record<number, LazyPartConfig[]>
  completionDestination?: 'competitive' | 'complete'
  practiceModeParts?: number[]
}

const interactiveLessonRegistry: Record<string, InteractiveTopicConfig> = {
  'the-unit-circle': {
    completionDestination: 'competitive',
    practiceModeParts: [1, 2],
    parts: [
      { title: 'Counting Method', loader: () => import('./unit-circle').then(m => m.unitCircleLessonData) },
      { title: 'Angles & Tables', loader: () => import('./unit-circle').then(m => m.unitCircleAnglesLessonData) },
      { title: 'What Is the Unit Circle?', loader: () => import('./unit-circle').then(m => m.unitCircleConceptLessonData) },
      { title: 'Complete Unit Circle', loader: () => import('./full-unit-circle').then(m => m.fullUnitCircleLessonData) },
    ],
  },
  'solving-linear-equations-algebra1': {
    completionDestination: 'complete',
    parts: [
      { title: 'One-Step Equations', loader: () => import('./solving-linear-equations-part1-one-step').then(m => m.solvingLinearEquationsPart1Data) },
      { title: 'Two-Step Equations', loader: () => import('./solving-linear-equations-part2-two-step').then(m => m.solvingLinearEquationsPart2Data) },
      { title: 'Multi-Step Equations', loader: () => import('./solving-linear-equations-part3-multi-step').then(m => m.solvingLinearEquationsPart3Data) },
      { title: 'Special Cases', loader: () => import('./solving-linear-equations-part4-special-cases').then(m => m.solvingLinearEquationsPart4Data) },
      { title: 'Mastery', loader: () => import('./solving-linear-equations-part5-mastery').then(m => m.solvingLinearEquationsPart5Data) },
    ],
  },
  'factoring-algebra1': {
    completionDestination: 'complete',
    parts: [
      { title: 'GCF', loader: () => import('./factoring-part1-gcf').then(m => m.factoringPart1GCFData) },
      { title: 'Difference of Squares', loader: () => import('./factoring-part2-difference-of-squares').then(m => m.factoringPart2DifferenceOfSquaresData) },
      { title: 'Simple Trinomials', loader: () => import('./factoring-part3-simple-trinomials').then(m => m.factoringPart3SimpleTrinomialsData) },
      { title: 'Complex Trinomials', loader: () => import('./factoring-part4-complex-trinomials').then(m => m.factoringPart4ComplexTrinomialsData) },
      { title: 'Special Patterns', loader: () => import('./factoring-part5-special-patterns').then(m => m.factoringPart5SpecialPatternsData) },
      { title: 'Mixed Practice', loader: () => import('./factoring-part6-mixed-practice').then(m => m.factoringPart6MixedPracticeData) },
    ],
  },
  'reflection-refraction': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction', loader: () => import('./reflection-refraction-part1-intro').then(m => m.reflectionRefractionPart1Data) },
      { title: 'Learning Journey', loader: () => import('./reflection-refraction-part2-learning-journey').then(m => m.reflectionRefractionPart2LearningJourneyData) },
      { title: 'Sign Convention', loader: () => import('./reflection-refraction-part2-sign-convention').then(m => m.reflectionRefractionPart2Data) },
      { title: 'Law of Reflection', loader: () => import('./reflection-refraction-part3-reflection').then(m => m.reflectionRefractionPart3Data) },
      { title: 'Index of Refraction', loader: () => import('./reflection-refraction-part4-index').then(m => m.reflectionRefractionPart4Data) },
      { title: 'Snell\'s Law', loader: () => import('./reflection-refraction-part5-snell-tir').then(m => m.reflectionRefractionPart5Data) },
      { title: 'Total Internal Reflection', loader: () => import('./reflection-refraction-part6-tir').then(m => m.reflectionRefractionPart6Data) },
      { title: 'Dispersion', loader: () => import('./reflection-refraction-part7-dispersion').then(m => m.reflectionRefractionPart7Data) },
    ],
  },
  'electric-charge-coulombs-law': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction & Charge', loader: () => import('./physics2-electrostatics-part1').then(m => m.physics2ElectrostaticsPart1Data) },
      { title: 'Coulomb\'s Law', loader: () => import('./physics2-electrostatics-part2').then(m => m.physics2ElectrostaticsPart2Data) },
      { title: 'Problem Solving', loader: () => import('./physics2-electrostatics-part3').then(m => m.physics2ElectrostaticsPart3Data) },
      { title: 'Conductors & Charging', loader: () => import('./physics2-electrostatics-part4').then(m => m.physics2ElectrostaticsPart4Data) },
      { title: 'Conservation & Quantization', loader: () => import('./physics2-electrostatics-part5').then(m => m.physics2ElectrostaticsPart5Data) },
      { title: 'Superposition', loader: () => import('./physics2-electrostatics-part6').then(m => m.physics2ElectrostaticsPart6Data) },
      { title: 'Synthesis & AP Strategies', loader: () => import('./physics2-electrostatics-part7').then(m => m.physics2ElectrostaticsPart7Data) },
    ],
  },
  'electric-fields-potential': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is an Electric Field?', loader: () => import('./physics2-electric-fields-part1').then(m => m.physics2ElectricFieldsPart1Data) },
      { title: 'Field Superposition', loader: () => import('./physics2-electric-fields-part2').then(m => m.physics2ElectricFieldsPart2Data) },
      { title: 'Field Lines & Visualization', loader: () => import('./physics2-electric-fields-part3').then(m => m.physics2ElectricFieldsPart3Data) },
      { title: 'Electric Potential (Voltage)', loader: () => import('./physics2-electric-fields-part4').then(m => m.physics2ElectricFieldsPart4Data) },
      { title: 'Potential Energy & Work', loader: () => import('./physics2-electric-fields-part5').then(m => m.physics2ElectricFieldsPart5Data) },
      { title: 'Equipotentials & E–V Relationship', loader: () => import('./physics2-electric-fields-part6').then(m => m.physics2ElectricFieldsPart6Data) },
      { title: 'Capacitors & Synthesis', loader: () => import('./physics2-electric-fields-part7').then(m => m.physics2ElectricFieldsPart7Data) },
    ],
  },
  'density-and-pressure': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Foundations', loader: () => import('./physics2-density-pressure-part1').then(m => m.physics2DensityPressurePart1Data) },
      { title: 'Depth Pressure & Pascal\'s Law', loader: () => import('./physics2-density-pressure-part2').then(m => m.physics2DensityPressurePart2Data) },
      { title: 'Manometers & Barometers', loader: () => import('./physics2-density-pressure-part3').then(m => m.physics2DensityPressurePart3Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics2-density-pressure-part4').then(m => m.physics2DensityPressurePart4Data) },
      { title: 'Forces on Submerged Surfaces', loader: () => import('./physics2-density-pressure-part5').then(m => m.physics2DensityPressurePart5Data) },
      { title: 'Specific Gravity & Applications', loader: () => import('./physics2-density-pressure-part6').then(m => m.physics2DensityPressurePart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-density-pressure-part7').then(m => m.physics2DensityPressurePart7Data) },
    ],
  },
  'buoyancy-archimedes-principle': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Why Things Float', loader: () => import('./physics2-buoyancy-part1').then(m => m.physics2BuoyancyPart1Data) },
      { title: 'Sink, Float, or Hover', loader: () => import('./physics2-buoyancy-part2').then(m => m.physics2BuoyancyPart2Data) },
      { title: 'Apparent Weight', loader: () => import('./physics2-buoyancy-part3').then(m => m.physics2BuoyancyPart3Data) },
      { title: 'Floating Object Problems', loader: () => import('./physics2-buoyancy-part4').then(m => m.physics2BuoyancyPart4Data) },
      { title: 'Multi-Object & Multi-Fluid', loader: () => import('./physics2-buoyancy-part5').then(m => m.physics2BuoyancyPart5Data) },
      { title: 'Buoyancy in Gases', loader: () => import('./physics2-buoyancy-part6').then(m => m.physics2BuoyancyPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-buoyancy-part7').then(m => m.physics2BuoyancyPart7Data) },
    ],
  },
  'fluid-dynamics-continuity': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Fluids in Motion', loader: () => import('./physics2-fluid-dynamics-part1').then(m => m.physics2FluidDynamicsPart1Data) },
      { title: 'The Continuity Equation', loader: () => import('./physics2-fluid-dynamics-part2').then(m => m.physics2FluidDynamicsPart2Data) },
      { title: 'Mass Flow Rate', loader: () => import('./physics2-fluid-dynamics-part3').then(m => m.physics2FluidDynamicsPart3Data) },
      { title: 'Types of Flow', loader: () => import('./physics2-fluid-dynamics-part4').then(m => m.physics2FluidDynamicsPart4Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics2-fluid-dynamics-part5').then(m => m.physics2FluidDynamicsPart5Data) },
      { title: 'Real-World Applications', loader: () => import('./physics2-fluid-dynamics-part6').then(m => m.physics2FluidDynamicsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-fluid-dynamics-part7').then(m => m.physics2FluidDynamicsPart7Data) },
    ],
  },
  'bernoullis-equation': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Energy Conservation for Fluids', loader: () => import('./physics2-bernoulli-part1').then(m => m.physics2BernoulliPart1Data) },
      { title: 'The Venturi Effect', loader: () => import('./physics2-bernoulli-part2').then(m => m.physics2BernoulliPart2Data) },
      { title: 'Torricelli\'s Theorem', loader: () => import('./physics2-bernoulli-part3').then(m => m.physics2BernoulliPart3Data) },
      { title: 'Lift & Aerodynamics', loader: () => import('./physics2-bernoulli-part4').then(m => m.physics2BernoulliPart4Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics2-bernoulli-part5').then(m => m.physics2BernoulliPart5Data) },
      { title: 'Measurement Devices', loader: () => import('./physics2-bernoulli-part6').then(m => m.physics2BernoulliPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-bernoulli-part7').then(m => m.physics2BernoulliPart7Data) },
    ],
  },
  'temperature-thermal-expansion': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Temperature Scales', loader: () => import('./physics2-temperature-part1').then(m => m.physics2TemperaturePart1Data) },
      { title: 'Thermal Equilibrium & Zeroth Law', loader: () => import('./physics2-temperature-part2').then(m => m.physics2TemperaturePart2Data) },
      { title: 'Linear Thermal Expansion', loader: () => import('./physics2-temperature-part3').then(m => m.physics2TemperaturePart3Data) },
      { title: 'Volume & Area Expansion', loader: () => import('./physics2-temperature-part4').then(m => m.physics2TemperaturePart4Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics2-temperature-part5').then(m => m.physics2TemperaturePart5Data) },
      { title: 'Kinetic Theory Connection', loader: () => import('./physics2-temperature-part6').then(m => m.physics2TemperaturePart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-temperature-part7').then(m => m.physics2TemperaturePart7Data) },
    ],
  },
  'heat-specific-heat': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Heat vs Temperature', loader: () => import('./physics2-heat-part1').then(m => m.physics2HeatPart1Data) },
      { title: 'Specific Heat Capacity', loader: () => import('./physics2-heat-part2').then(m => m.physics2HeatPart2Data) },
      { title: 'Calorimetry', loader: () => import('./physics2-heat-part3').then(m => m.physics2HeatPart3Data) },
      { title: 'Heat Transfer Mechanisms', loader: () => import('./physics2-heat-part4').then(m => m.physics2HeatPart4Data) },
      { title: 'Conduction Problem Solving', loader: () => import('./physics2-heat-part5').then(m => m.physics2HeatPart5Data) },
      { title: 'Applications & Real-World', loader: () => import('./physics2-heat-part6').then(m => m.physics2HeatPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-heat-part7').then(m => m.physics2HeatPart7Data) },
    ],
  },
  'phase-changes-latent-heat': {
    completionDestination: 'competitive',
    parts: [
      { title: 'States of Matter', loader: () => import('./physics2-phase-changes-part1').then(m => m.physics2PhaseChangesPart1Data) },
      { title: 'Latent Heat', loader: () => import('./physics2-phase-changes-part2').then(m => m.physics2PhaseChangesPart2Data) },
      { title: 'Heating Curves', loader: () => import('./physics2-phase-changes-part3').then(m => m.physics2PhaseChangesPart3Data) },
      { title: 'Phase Diagrams', loader: () => import('./physics2-phase-changes-part4').then(m => m.physics2PhaseChangesPart4Data) },
      { title: 'Calorimetry with Phase Changes', loader: () => import('./physics2-phase-changes-part5').then(m => m.physics2PhaseChangesPart5Data) },
      { title: 'Real-World Applications', loader: () => import('./physics2-phase-changes-part6').then(m => m.physics2PhaseChangesPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-phase-changes-part7').then(m => m.physics2PhaseChangesPart7Data) },
    ],
  },
  'laws-of-thermodynamics': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Internal Energy & Work', loader: () => import('./physics2-thermo-laws-part1').then(m => m.physics2ThermoLawsPart1Data) },
      { title: 'First Law of Thermodynamics', loader: () => import('./physics2-thermo-laws-part2').then(m => m.physics2ThermoLawsPart2Data) },
      { title: 'PV Diagrams', loader: () => import('./physics2-thermo-laws-part3').then(m => m.physics2ThermoLawsPart3Data) },
      { title: 'Heat Engines & Efficiency', loader: () => import('./physics2-thermo-laws-part4').then(m => m.physics2ThermoLawsPart4Data) },
      { title: 'Second Law & Entropy', loader: () => import('./physics2-thermo-laws-part5').then(m => m.physics2ThermoLawsPart5Data) },
      { title: 'Refrigerators & Heat Pumps', loader: () => import('./physics2-thermo-laws-part6').then(m => m.physics2ThermoLawsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-thermo-laws-part7').then(m => m.physics2ThermoLawsPart7Data) },
    ],
  },
  'current-resistance-ohms-law': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Electric Current', loader: () => import('./physics2-current-resistance-part1').then(m => m.physics2CurrentResistancePart1Data) },
      { title: 'Resistance & Resistivity', loader: () => import('./physics2-current-resistance-part2').then(m => m.physics2CurrentResistancePart2Data) },
      { title: 'Ohm\'s Law & Power', loader: () => import('./physics2-current-resistance-part3').then(m => m.physics2CurrentResistancePart3Data) },
      { title: 'Temperature Dependence', loader: () => import('./physics2-current-resistance-part4').then(m => m.physics2CurrentResistancePart4Data) },
      { title: 'Electric Power & Energy', loader: () => import('./physics2-current-resistance-part5').then(m => m.physics2CurrentResistancePart5Data) },
      { title: 'EMF & Internal Resistance', loader: () => import('./physics2-current-resistance-part6').then(m => m.physics2CurrentResistancePart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-current-resistance-part7').then(m => m.physics2CurrentResistancePart7Data) },
    ],
  },
  'series-parallel-circuits': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Series Circuits', loader: () => import('./physics2-series-parallel-part1').then(m => m.physics2SeriesParallelPart1Data) },
      { title: 'Parallel Circuits', loader: () => import('./physics2-series-parallel-part2').then(m => m.physics2SeriesParallelPart2Data) },
      { title: 'Combination Circuits', loader: () => import('./physics2-series-parallel-part3').then(m => m.physics2SeriesParallelPart3Data) },
      { title: 'Voltage & Current Dividers', loader: () => import('./physics2-series-parallel-part4').then(m => m.physics2SeriesParallelPart4Data) },
      { title: 'Power in Circuits', loader: () => import('./physics2-series-parallel-part5').then(m => m.physics2SeriesParallelPart5Data) },
      { title: 'Capacitors in Circuits', loader: () => import('./physics2-series-parallel-part6').then(m => m.physics2SeriesParallelPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-series-parallel-part7').then(m => m.physics2SeriesParallelPart7Data) },
    ],
  },
  'kirchhoffs-laws': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Junction Rule (KCL)', loader: () => import('./physics2-kirchhoff-part1').then(m => m.physics2KirchhoffPart1Data) },
      { title: 'Loop Rule (KVL)', loader: () => import('./physics2-kirchhoff-part2').then(m => m.physics2KirchhoffPart2Data) },
      { title: 'Single-Loop Circuits', loader: () => import('./physics2-kirchhoff-part3').then(m => m.physics2KirchhoffPart3Data) },
      { title: 'Multi-Loop Circuits', loader: () => import('./physics2-kirchhoff-part4').then(m => m.physics2KirchhoffPart4Data) },
      { title: 'Complex Circuits', loader: () => import('./physics2-kirchhoff-part5').then(m => m.physics2KirchhoffPart5Data) },
      { title: 'RC Circuits', loader: () => import('./physics2-kirchhoff-part6').then(m => m.physics2KirchhoffPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-kirchhoff-part7').then(m => m.physics2KirchhoffPart7Data) },
    ],
  },
  'magnetic-fields-forces': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Magnetic Fields', loader: () => import('./physics2-magnetic-fields-part1').then(m => m.physics2MagneticFieldsPart1Data) },
      { title: 'Force on Moving Charges', loader: () => import('./physics2-magnetic-fields-part2').then(m => m.physics2MagneticFieldsPart2Data) },
      { title: 'Circular Motion in B Fields', loader: () => import('./physics2-magnetic-fields-part3').then(m => m.physics2MagneticFieldsPart3Data) },
      { title: 'Force on Current-Carrying Wires', loader: () => import('./physics2-magnetic-fields-part4').then(m => m.physics2MagneticFieldsPart4Data) },
      { title: 'Ampère\'s Law & Solenoids', loader: () => import('./physics2-magnetic-fields-part5').then(m => m.physics2MagneticFieldsPart5Data) },
      { title: 'Torque on Current Loops', loader: () => import('./physics2-magnetic-fields-part6').then(m => m.physics2MagneticFieldsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-magnetic-fields-part7').then(m => m.physics2MagneticFieldsPart7Data) },
    ],
  },
  'electromagnetic-induction': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Magnetic Flux', loader: () => import('./physics2-em-induction-part1').then(m => m.physics2EmInductionPart1Data) },
      { title: 'Faraday\'s Law', loader: () => import('./physics2-em-induction-part2').then(m => m.physics2EmInductionPart2Data) },
      { title: 'Lenz\'s Law', loader: () => import('./physics2-em-induction-part3').then(m => m.physics2EmInductionPart3Data) },
      { title: 'Motional EMF', loader: () => import('./physics2-em-induction-part4').then(m => m.physics2EmInductionPart4Data) },
      { title: 'Generators & Transformers', loader: () => import('./physics2-em-induction-part5').then(m => m.physics2EmInductionPart5Data) },
      { title: 'Inductance', loader: () => import('./physics2-em-induction-part6').then(m => m.physics2EmInductionPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-em-induction-part7').then(m => m.physics2EmInductionPart7Data) },
    ],
  },
  'lenses': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Types of Lenses', loader: () => import('./physics2-lenses-part1').then(m => m.physics2LensesPart1Data) },
      { title: 'Thin Lens Equation', loader: () => import('./physics2-lenses-part2').then(m => m.physics2LensesPart2Data) },
      { title: 'Converging Lens Ray Diagrams', loader: () => import('./physics2-lenses-part3').then(m => m.physics2LensesPart3Data) },
      { title: 'Diverging Lens Problems', loader: () => import('./physics2-lenses-part4').then(m => m.physics2LensesPart4Data) },
      { title: 'Multi-Lens Systems', loader: () => import('./physics2-lenses-part5').then(m => m.physics2LensesPart5Data) },
      { title: 'Aberrations & Corrections', loader: () => import('./physics2-lenses-part6').then(m => m.physics2LensesPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-lenses-part7').then(m => m.physics2LensesPart7Data) },
    ],
  },
  'interference-diffraction': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Wave Interference', loader: () => import('./physics2-interference-part1').then(m => m.physics2InterferencePart1Data) },
      { title: 'Young\'s Double-Slit', loader: () => import('./physics2-interference-part2').then(m => m.physics2InterferencePart2Data) },
      { title: 'Single-Slit Diffraction', loader: () => import('./physics2-interference-part3').then(m => m.physics2InterferencePart3Data) },
      { title: 'Diffraction Gratings', loader: () => import('./physics2-interference-part4').then(m => m.physics2InterferencePart4Data) },
      { title: 'Thin-Film Interference', loader: () => import('./physics2-interference-part5').then(m => m.physics2InterferencePart5Data) },
      { title: 'Resolution & Rayleigh Criterion', loader: () => import('./physics2-interference-part6').then(m => m.physics2InterferencePart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-interference-part7').then(m => m.physics2InterferencePart7Data) },
    ],
  },
  'photons-atomic-nuclear': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Photons & Photoelectric Effect', loader: () => import('./physics2-modern-part1').then(m => m.physics2ModernPart1Data) },
      { title: 'Wave-Particle Duality', loader: () => import('./physics2-modern-part2').then(m => m.physics2ModernPart2Data) },
      { title: 'Bohr Model & Energy Levels', loader: () => import('./physics2-modern-part3').then(m => m.physics2ModernPart3Data) },
      { title: 'Atomic Transitions', loader: () => import('./physics2-modern-part4').then(m => m.physics2ModernPart4Data) },
      { title: 'Nuclear Physics', loader: () => import('./physics2-modern-part5').then(m => m.physics2ModernPart5Data) },
      { title: 'Radioactive Decay', loader: () => import('./physics2-modern-part6').then(m => m.physics2ModernPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics2-modern-part7').then(m => m.physics2ModernPart7Data) },
    ],
  },
  'electromagnetic-waves': {
    completionDestination: 'competitive',
    parts: [
      { title: 'EM Wave Fundamentals', loader: () => import('./physics2-em-waves-part1').then(m => m.physics2EmWavesPart1Data) },
      { title: 'The EM Spectrum', loader: () => import('./physics2-em-waves-part2').then(m => m.physics2EmWavesPart2Data) },
      { title: 'Wave Properties', loader: () => import('./physics2-em-waves-part3').then(m => m.physics2EmWavesPart3Data) },
      { title: 'Polarization', loader: () => import('./physics2-em-waves-part4').then(m => m.physics2EmWavesPart4Data) },
      { title: 'EM Wave Intensity', loader: () => import('./physics2-em-waves-part5').then(m => m.physics2EmWavesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics2-em-waves-part6').then(m => m.physics2EmWavesPart6Data) },
      { title: 'Mixed Review', loader: () => import('./physics2-em-waves-part7').then(m => m.physics2EmWavesPart7Data) },
    ],
  },
  'thermodynamic-processes': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Types of Thermodynamic Processes', loader: () => import('./physics2-thermo-processes-part1').then(m => m.physics2ThermoProcPart1Data) },
      { title: 'PV Diagrams', loader: () => import('./physics2-thermo-processes-part2').then(m => m.physics2ThermoProcPart2Data) },
      { title: 'Work in Thermodynamics', loader: () => import('./physics2-thermo-processes-part3').then(m => m.physics2ThermoProcPart3Data) },
      { title: 'Heat Engines', loader: () => import('./physics2-thermo-processes-part4').then(m => m.physics2ThermoProcPart4Data) },
      { title: 'Carnot Cycle', loader: () => import('./physics2-thermo-processes-part5').then(m => m.physics2ThermoProcPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics2-thermo-processes-part6').then(m => m.physics2ThermoProcPart6Data) },
      { title: 'Mixed Review', loader: () => import('./physics2-thermo-processes-part7').then(m => m.physics2ThermoProcPart7Data) },
    ],
  },
  'resistivity-circuits-advanced': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Resistivity', loader: () => import('./physics2-resistivity-circuits-part1').then(m => m.physics2ResCircPart1Data) },
      { title: 'Temperature Dependence', loader: () => import('./physics2-resistivity-circuits-part2').then(m => m.physics2ResCircPart2Data) },
      { title: 'Complex Circuits', loader: () => import('./physics2-resistivity-circuits-part3').then(m => m.physics2ResCircPart3Data) },
      { title: 'RC Circuits', loader: () => import('./physics2-resistivity-circuits-part4').then(m => m.physics2ResCircPart4Data) },
      { title: 'Power in Circuits', loader: () => import('./physics2-resistivity-circuits-part5').then(m => m.physics2ResCircPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics2-resistivity-circuits-part6').then(m => m.physics2ResCircPart6Data) },
      { title: 'Mixed Review', loader: () => import('./physics2-resistivity-circuits-part7').then(m => m.physics2ResCircPart7Data) },
    ],
  },
  'magnetic-induction': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Magnetic Flux', loader: () => import('./physics2-magnetic-induction-part1').then(m => m.physics2MagInductPart1Data) },
      { title: 'Faraday\'s Law', loader: () => import('./physics2-magnetic-induction-part2').then(m => m.physics2MagInductPart2Data) },
      { title: 'Lenz\'s Law', loader: () => import('./physics2-magnetic-induction-part3').then(m => m.physics2MagInductPart3Data) },
      { title: 'Motional EMF', loader: () => import('./physics2-magnetic-induction-part4').then(m => m.physics2MagInductPart4Data) },
      { title: 'Inductors and LR Circuits', loader: () => import('./physics2-magnetic-induction-part5').then(m => m.physics2MagInductPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics2-magnetic-induction-part6').then(m => m.physics2MagInductPart6Data) },
      { title: 'Mixed Review', loader: () => import('./physics2-magnetic-induction-part7').then(m => m.physics2MagInductPart7Data) },
    ],
  },
  'geometric-optics-mirrors': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Plane Mirrors', loader: () => import('./physics2-geometric-optics-part1').then(m => m.physics2GeomOpticsPart1Data) },
      { title: 'Concave Mirrors', loader: () => import('./physics2-geometric-optics-part2').then(m => m.physics2GeomOpticsPart2Data) },
      { title: 'Convex Mirrors', loader: () => import('./physics2-geometric-optics-part3').then(m => m.physics2GeomOpticsPart3Data) },
      { title: 'Mirror Equation', loader: () => import('./physics2-geometric-optics-part4').then(m => m.physics2GeomOpticsPart4Data) },
      { title: 'Ray Diagrams', loader: () => import('./physics2-geometric-optics-part5').then(m => m.physics2GeomOpticsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics2-geometric-optics-part6').then(m => m.physics2GeomOpticsPart6Data) },
      { title: 'Mixed Review', loader: () => import('./physics2-geometric-optics-part7').then(m => m.physics2GeomOpticsPart7Data) },
    ],
  },
  'thin-film-interference': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Thin Film Basics', loader: () => import('./physics2-thin-film-part1').then(m => m.physics2ThinFilmPart1Data) },
      { title: 'Phase Changes on Reflection', loader: () => import('./physics2-thin-film-part2').then(m => m.physics2ThinFilmPart2Data) },
      { title: 'Constructive Interference', loader: () => import('./physics2-thin-film-part3').then(m => m.physics2ThinFilmPart3Data) },
      { title: 'Destructive Interference', loader: () => import('./physics2-thin-film-part4').then(m => m.physics2ThinFilmPart4Data) },
      { title: 'Applications', loader: () => import('./physics2-thin-film-part5').then(m => m.physics2ThinFilmPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics2-thin-film-part6').then(m => m.physics2ThinFilmPart6Data) },
      { title: 'Mixed Review', loader: () => import('./physics2-thin-film-part7').then(m => m.physics2ThinFilmPart7Data) },
    ],
  },
  'nuclear-reactions': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Nuclear Reactions Overview', loader: () => import('./physics2-nuclear-reactions-part1').then(m => m.physics2NuclearPart1Data) },
      { title: 'Fission', loader: () => import('./physics2-nuclear-reactions-part2').then(m => m.physics2NuclearPart2Data) },
      { title: 'Fusion', loader: () => import('./physics2-nuclear-reactions-part3').then(m => m.physics2NuclearPart3Data) },
      { title: 'Mass-Energy Equivalence', loader: () => import('./physics2-nuclear-reactions-part4').then(m => m.physics2NuclearPart4Data) },
      { title: 'Binding Energy', loader: () => import('./physics2-nuclear-reactions-part5').then(m => m.physics2NuclearPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics2-nuclear-reactions-part6').then(m => m.physics2NuclearPart6Data) },
      { title: 'Mixed Review', loader: () => import('./physics2-nuclear-reactions-part7').then(m => m.physics2NuclearPart7Data) },
    ],
  },
  'quantum-phenomena': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Quantum Overview', loader: () => import('./physics2-quantum-part1').then(m => m.physics2QuantumPart1Data) },
      { title: 'De Broglie Wavelength', loader: () => import('./physics2-quantum-part2').then(m => m.physics2QuantumPart2Data) },
      { title: 'Uncertainty Principle', loader: () => import('./physics2-quantum-part3').then(m => m.physics2QuantumPart3Data) },
      { title: 'Probability Waves', loader: () => import('./physics2-quantum-part4').then(m => m.physics2QuantumPart4Data) },
      { title: 'Quantum Applications', loader: () => import('./physics2-quantum-part5').then(m => m.physics2QuantumPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics2-quantum-part6').then(m => m.physics2QuantumPart6Data) },
      { title: 'Mixed Review', loader: () => import('./physics2-quantum-part7').then(m => m.physics2QuantumPart7Data) },
    ],
  },
  'moles-molar-mass': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to the Mole', loader: () => import('./chemistry-moles-molar-mass-part1').then(m => m.chemMolesMolarMassPart1Data) },
      { title: 'Molar Mass', loader: () => import('./chemistry-moles-molar-mass-part2').then(m => m.chemMolesMolarMassPart2Data) },
      { title: 'Mole-Mass Conversions', loader: () => import('./chemistry-moles-molar-mass-part3').then(m => m.chemMolesMolarMassPart3Data) },
      { title: 'Percent Composition', loader: () => import('./chemistry-moles-molar-mass-part4').then(m => m.chemMolesMolarMassPart4Data) },
      { title: 'Empirical & Molecular Formulas', loader: () => import('./chemistry-moles-molar-mass-part5').then(m => m.chemMolesMolarMassPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-moles-molar-mass-part6').then(m => m.chemMolesMolarMassPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-moles-molar-mass-part7').then(m => m.chemMolesMolarMassPart7Data) },
    ],
  },
  'atomic-spectra': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Light, Photons & Energy', loader: () => import('./chemistry-atomic-spectra-part1').then(m => m.chemAtomicSpectraPart1Data) },
      { title: 'Atomic Emission & Absorption Spectra', loader: () => import('./chemistry-atomic-spectra-part2').then(m => m.chemAtomicSpectraPart2Data) },
      { title: 'The Bohr Model & Quantized Levels', loader: () => import('./chemistry-atomic-spectra-part3').then(m => m.chemAtomicSpectraPart3Data) },
      { title: 'The Hydrogen Spectrum & Rydberg Formula', loader: () => import('./chemistry-atomic-spectra-part4').then(m => m.chemAtomicSpectraPart4Data) },
      { title: 'Beyond Hydrogen — Multi-Electron Atoms & PES', loader: () => import('./chemistry-atomic-spectra-part5').then(m => m.chemAtomicSpectraPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-atomic-spectra-part6').then(m => m.chemAtomicSpectraPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-atomic-spectra-part7').then(m => m.chemAtomicSpectraPart7Data) },
    ],
  },
  // Topic alias: reuses the solubility-ksp lesson suite (same equilibrium content; AP CED lists both slugs)
  'solubility-equilibrium': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Solubility Product (Ksp)', loader: () => import('./chemistry-solubility-ksp-part1').then(m => m.chemSolubilityKspPart1Data) },
      { title: 'Molar Solubility from Ksp', loader: () => import('./chemistry-solubility-ksp-part2').then(m => m.chemSolubilityKspPart2Data) },
      { title: 'Common Ion Effect', loader: () => import('./chemistry-solubility-ksp-part3').then(m => m.chemSolubilityKspPart3Data) },
      { title: 'Predicting Precipitation (Q vs Ksp)', loader: () => import('./chemistry-solubility-ksp-part4').then(m => m.chemSolubilityKspPart4Data) },
      { title: 'Selective Precipitation', loader: () => import('./chemistry-solubility-ksp-part5').then(m => m.chemSolubilityKspPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-solubility-ksp-part6').then(m => m.chemSolubilityKspPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-solubility-ksp-part7').then(m => m.chemSolubilityKspPart7Data) },
    ],
  },
  // Topic alias: reuses the galvanic-cells-potentials lesson suite (covers thermo applications in part 5)
  'galvanic-cells-thermo-applications': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Galvanic Cells', loader: () => import('./chemistry-galvanic-cells-potentials-part1').then(m => m.chemGalvanicCellsPotentialsPart1Data) },
      { title: 'Cell Notation & Diagrams', loader: () => import('./chemistry-galvanic-cells-potentials-part2').then(m => m.chemGalvanicCellsPotentialsPart2Data) },
      { title: 'Standard Reduction Potentials', loader: () => import('./chemistry-galvanic-cells-potentials-part3').then(m => m.chemGalvanicCellsPotentialsPart3Data) },
      { title: 'Calculating E°cell', loader: () => import('./chemistry-galvanic-cells-potentials-part4').then(m => m.chemGalvanicCellsPotentialsPart4Data) },
      { title: 'Spontaneity & ΔG°', loader: () => import('./chemistry-galvanic-cells-potentials-part5').then(m => m.chemGalvanicCellsPotentialsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-galvanic-cells-potentials-part6').then(m => m.chemGalvanicCellsPotentialsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-galvanic-cells-potentials-part7').then(m => m.chemGalvanicCellsPotentialsPart7Data) },
    ],
  },
  // Topic alias: reuses the gibbs-free-energy lesson suite
  'spontaneity-free-energy-applications': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Gibbs Free Energy', loader: () => import('./chemistry-gibbs-free-energy-part1').then(m => m.chemGibbsFreeEnergyPart1Data) },
      { title: 'ΔG = ΔH − TΔS', loader: () => import('./chemistry-gibbs-free-energy-part2').then(m => m.chemGibbsFreeEnergyPart2Data) },
      { title: 'Spontaneity & Temperature', loader: () => import('./chemistry-gibbs-free-energy-part3').then(m => m.chemGibbsFreeEnergyPart3Data) },
      { title: 'Standard Free Energy of Formation', loader: () => import('./chemistry-gibbs-free-energy-part4').then(m => m.chemGibbsFreeEnergyPart4Data) },
      { title: 'ΔG and Equilibrium', loader: () => import('./chemistry-gibbs-free-energy-part5').then(m => m.chemGibbsFreeEnergyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-gibbs-free-energy-part6').then(m => m.chemGibbsFreeEnergyPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-gibbs-free-energy-part7').then(m => m.chemGibbsFreeEnergyPart7Data) },
    ],
  },
  // Topic alias: reuses the reaction-quotient-le-chatelier lesson suite
  'le-chatelier-equilibrium-shifts': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Reaction Quotient (Q)', loader: () => import('./chemistry-reaction-quotient-le-chatelier-part1').then(m => m.chemReactionQuotientLeChatPart1Data) },
      { title: 'Comparing Q and K', loader: () => import('./chemistry-reaction-quotient-le-chatelier-part2').then(m => m.chemReactionQuotientLeChatPart2Data) },
      { title: 'Le Chatelier\'s Principle', loader: () => import('./chemistry-reaction-quotient-le-chatelier-part3').then(m => m.chemReactionQuotientLeChatPart3Data) },
      { title: 'Changes in Concentration', loader: () => import('./chemistry-reaction-quotient-le-chatelier-part4').then(m => m.chemReactionQuotientLeChatPart4Data) },
      { title: 'Changes in Temperature & Pressure', loader: () => import('./chemistry-reaction-quotient-le-chatelier-part5').then(m => m.chemReactionQuotientLeChatPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-reaction-quotient-le-chatelier-part6').then(m => m.chemReactionQuotientLeChatPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-reaction-quotient-le-chatelier-part7').then(m => m.chemReactionQuotientLeChatPart7Data) },
    ],
  },
  'electron-configuration': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Quantum Numbers & Orbitals', loader: () => import('./chemistry-electron-configuration-part1').then(m => m.chemElectronConfigPart1Data) },
      { title: 'Orbital Filling Order', loader: () => import('./chemistry-electron-configuration-part2').then(m => m.chemElectronConfigPart2Data) },
      { title: 'Writing Electron Configurations', loader: () => import('./chemistry-electron-configuration-part3').then(m => m.chemElectronConfigPart3Data) },
      { title: 'Noble Gas & Condensed Notation', loader: () => import('./chemistry-electron-configuration-part4').then(m => m.chemElectronConfigPart4Data) },
      { title: 'Exceptions & Ion Configurations', loader: () => import('./chemistry-electron-configuration-part5').then(m => m.chemElectronConfigPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-electron-configuration-part6').then(m => m.chemElectronConfigPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-electron-configuration-part7').then(m => m.chemElectronConfigPart7Data) },
    ],
  },
  'periodic-trends': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Atomic Radius', loader: () => import('./chemistry-periodic-trends-part1').then(m => m.chemPeriodicTrendsPart1Data) },
      { title: 'Ionization Energy', loader: () => import('./chemistry-periodic-trends-part2').then(m => m.chemPeriodicTrendsPart2Data) },
      { title: 'Electron Affinity', loader: () => import('./chemistry-periodic-trends-part3').then(m => m.chemPeriodicTrendsPart3Data) },
      { title: 'Electronegativity', loader: () => import('./chemistry-periodic-trends-part4').then(m => m.chemPeriodicTrendsPart4Data) },
      { title: 'Ionic Radius', loader: () => import('./chemistry-periodic-trends-part5').then(m => m.chemPeriodicTrendsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-periodic-trends-part6').then(m => m.chemPeriodicTrendsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-periodic-trends-part7').then(m => m.chemPeriodicTrendsPart7Data) },
    ],
  },
  'photoelectron-spectroscopy': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to PES', loader: () => import('./chemistry-photoelectron-spectroscopy-part1').then(m => m.chemPhotoelectronSpectroscopyPart1Data) },
      { title: 'Interpreting PES Spectra', loader: () => import('./chemistry-photoelectron-spectroscopy-part2').then(m => m.chemPhotoelectronSpectroscopyPart2Data) },
      { title: 'Binding Energy & Subshells', loader: () => import('./chemistry-photoelectron-spectroscopy-part3').then(m => m.chemPhotoelectronSpectroscopyPart3Data) },
      { title: 'Relative Peak Heights', loader: () => import('./chemistry-photoelectron-spectroscopy-part4').then(m => m.chemPhotoelectronSpectroscopyPart4Data) },
      { title: 'Identifying Elements from PES', loader: () => import('./chemistry-photoelectron-spectroscopy-part5').then(m => m.chemPhotoelectronSpectroscopyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-photoelectron-spectroscopy-part6').then(m => m.chemPhotoelectronSpectroscopyPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-photoelectron-spectroscopy-part7').then(m => m.chemPhotoelectronSpectroscopyPart7Data) },
    ],
  },
  'types-of-chemical-bonds': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Ionic Bonds', loader: () => import('./chemistry-types-of-chemical-bonds-part1').then(m => m.chemTypesOfChemicalBondsPart1Data) },
      { title: 'Covalent Bonds', loader: () => import('./chemistry-types-of-chemical-bonds-part2').then(m => m.chemTypesOfChemicalBondsPart2Data) },
      { title: 'Metallic Bonds', loader: () => import('./chemistry-types-of-chemical-bonds-part3').then(m => m.chemTypesOfChemicalBondsPart3Data) },
      { title: 'Bond Polarity', loader: () => import('./chemistry-types-of-chemical-bonds-part4').then(m => m.chemTypesOfChemicalBondsPart4Data) },
      { title: 'Bond Energy & Length', loader: () => import('./chemistry-types-of-chemical-bonds-part5').then(m => m.chemTypesOfChemicalBondsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-types-of-chemical-bonds-part6').then(m => m.chemTypesOfChemicalBondsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-types-of-chemical-bonds-part7').then(m => m.chemTypesOfChemicalBondsPart7Data) },
    ],
  },
  'lewis-structures-formal-charge': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Drawing Lewis Structures', loader: () => import('./chemistry-lewis-structures-formal-charge-part1').then(m => m.chemLewisStructuresFormalChargePart1Data) },
      { title: 'Octet Rule & Exceptions', loader: () => import('./chemistry-lewis-structures-formal-charge-part2').then(m => m.chemLewisStructuresFormalChargePart2Data) },
      { title: 'Formal Charge', loader: () => import('./chemistry-lewis-structures-formal-charge-part3').then(m => m.chemLewisStructuresFormalChargePart3Data) },
      { title: 'Resonance Structures', loader: () => import('./chemistry-lewis-structures-formal-charge-part4').then(m => m.chemLewisStructuresFormalChargePart4Data) },
      { title: 'Expanded & Incomplete Octets', loader: () => import('./chemistry-lewis-structures-formal-charge-part5').then(m => m.chemLewisStructuresFormalChargePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-lewis-structures-formal-charge-part6').then(m => m.chemLewisStructuresFormalChargePart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-lewis-structures-formal-charge-part7').then(m => m.chemLewisStructuresFormalChargePart7Data) },
    ],
  },
  'vsepr-molecular-geometry': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to VSEPR', loader: () => import('./chemistry-vsepr-molecular-geometry-part1').then(m => m.chemVseprMolecularGeometryPart1Data) },
      { title: 'Electron & Molecular Geometry', loader: () => import('./chemistry-vsepr-molecular-geometry-part2').then(m => m.chemVseprMolecularGeometryPart2Data) },
      { title: 'Effect of Lone Pairs', loader: () => import('./chemistry-vsepr-molecular-geometry-part3').then(m => m.chemVseprMolecularGeometryPart3Data) },
      { title: 'Bond Angles', loader: () => import('./chemistry-vsepr-molecular-geometry-part4').then(m => m.chemVseprMolecularGeometryPart4Data) },
      { title: 'Molecular Polarity', loader: () => import('./chemistry-vsepr-molecular-geometry-part5').then(m => m.chemVseprMolecularGeometryPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-vsepr-molecular-geometry-part6').then(m => m.chemVseprMolecularGeometryPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-vsepr-molecular-geometry-part7').then(m => m.chemVseprMolecularGeometryPart7Data) },
    ],
  },
  'hybridization-sigma-pi-bonds': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Hybridization', loader: () => import('./chemistry-hybridization-sigma-pi-bonds-part1').then(m => m.chemHybridizationSigmaPiBondsPart1Data) },
      { title: 'sp, sp², sp³ Hybridization', loader: () => import('./chemistry-hybridization-sigma-pi-bonds-part2').then(m => m.chemHybridizationSigmaPiBondsPart2Data) },
      { title: 'Sigma Bonds', loader: () => import('./chemistry-hybridization-sigma-pi-bonds-part3').then(m => m.chemHybridizationSigmaPiBondsPart3Data) },
      { title: 'Pi Bonds', loader: () => import('./chemistry-hybridization-sigma-pi-bonds-part4').then(m => m.chemHybridizationSigmaPiBondsPart4Data) },
      { title: 'Counting σ and π Bonds', loader: () => import('./chemistry-hybridization-sigma-pi-bonds-part5').then(m => m.chemHybridizationSigmaPiBondsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-hybridization-sigma-pi-bonds-part6').then(m => m.chemHybridizationSigmaPiBondsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-hybridization-sigma-pi-bonds-part7').then(m => m.chemHybridizationSigmaPiBondsPart7Data) },
    ],
  },
  'types-intermolecular-forces': {
    completionDestination: 'competitive',
    parts: [
      { title: 'London Dispersion Forces', loader: () => import('./chemistry-types-intermolecular-forces-part1').then(m => m.chemTypesIntermolecularForcesPart1Data) },
      { title: 'Dipole-Dipole Forces', loader: () => import('./chemistry-types-intermolecular-forces-part2').then(m => m.chemTypesIntermolecularForcesPart2Data) },
      { title: 'Hydrogen Bonding', loader: () => import('./chemistry-types-intermolecular-forces-part3').then(m => m.chemTypesIntermolecularForcesPart3Data) },
      { title: 'Ion-Dipole Interactions', loader: () => import('./chemistry-types-intermolecular-forces-part4').then(m => m.chemTypesIntermolecularForcesPart4Data) },
      { title: 'Comparing IMF Strengths', loader: () => import('./chemistry-types-intermolecular-forces-part5').then(m => m.chemTypesIntermolecularForcesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-types-intermolecular-forces-part6').then(m => m.chemTypesIntermolecularForcesPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-types-intermolecular-forces-part7').then(m => m.chemTypesIntermolecularForcesPart7Data) },
    ],
  },
  'properties-states-matter': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Solids, Liquids & Gases', loader: () => import('./chemistry-properties-states-matter-part1').then(m => m.chemPropertiesStatesMatterPart1Data) },
      { title: 'Vapor Pressure & Boiling Point', loader: () => import('./chemistry-properties-states-matter-part2').then(m => m.chemPropertiesStatesMatterPart2Data) },
      { title: 'Surface Tension & Viscosity', loader: () => import('./chemistry-properties-states-matter-part3').then(m => m.chemPropertiesStatesMatterPart3Data) },
      { title: 'Phase Diagrams', loader: () => import('./chemistry-properties-states-matter-part4').then(m => m.chemPropertiesStatesMatterPart4Data) },
      { title: 'Heating & Cooling Curves', loader: () => import('./chemistry-properties-states-matter-part5').then(m => m.chemPropertiesStatesMatterPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-properties-states-matter-part6').then(m => m.chemPropertiesStatesMatterPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-properties-states-matter-part7').then(m => m.chemPropertiesStatesMatterPart7Data) },
    ],
  },
  'solutions-solubility': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Types of Solutions', loader: () => import('./chemistry-solutions-solubility-part1').then(m => m.chemSolutionsSolubilityPart1Data) },
      { title: 'Solubility Rules', loader: () => import('./chemistry-solutions-solubility-part2').then(m => m.chemSolutionsSolubilityPart2Data) },
      { title: 'Concentration Units', loader: () => import('./chemistry-solutions-solubility-part3').then(m => m.chemSolutionsSolubilityPart3Data) },
      { title: 'Dilution Calculations', loader: () => import('./chemistry-solutions-solubility-part4').then(m => m.chemSolutionsSolubilityPart4Data) },
      { title: 'Colligative Properties', loader: () => import('./chemistry-solutions-solubility-part5').then(m => m.chemSolutionsSolubilityPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-solutions-solubility-part6').then(m => m.chemSolutionsSolubilityPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-solutions-solubility-part7').then(m => m.chemSolutionsSolubilityPart7Data) },
    ],
  },
  'ideal-gas-law': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Gas Properties & Pressure', loader: () => import('./chemistry-ideal-gas-law-part1').then(m => m.chemIdealGasLawPart1Data) },
      { title: 'Boyle\'s, Charles\'s & Avogadro\'s Laws', loader: () => import('./chemistry-ideal-gas-law-part2').then(m => m.chemIdealGasLawPart2Data) },
      { title: 'The Ideal Gas Law (PV=nRT)', loader: () => import('./chemistry-ideal-gas-law-part3').then(m => m.chemIdealGasLawPart3Data) },
      { title: 'Gas Stoichiometry', loader: () => import('./chemistry-ideal-gas-law-part4').then(m => m.chemIdealGasLawPart4Data) },
      { title: 'Dalton\'s Law of Partial Pressures', loader: () => import('./chemistry-ideal-gas-law-part5').then(m => m.chemIdealGasLawPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-ideal-gas-law-part6').then(m => m.chemIdealGasLawPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-ideal-gas-law-part7').then(m => m.chemIdealGasLawPart7Data) },
    ],
  },
  'mixtures-separations': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Pure Substances vs Mixtures', loader: () => import('./chemistry-mixtures-separations-part1').then(m => m.chemMixturesSeparationsPart1Data) },
      { title: 'Homogeneous & Heterogeneous', loader: () => import('./chemistry-mixtures-separations-part2').then(m => m.chemMixturesSeparationsPart2Data) },
      { title: 'Filtration & Distillation', loader: () => import('./chemistry-mixtures-separations-part3').then(m => m.chemMixturesSeparationsPart3Data) },
      { title: 'Chromatography', loader: () => import('./chemistry-mixtures-separations-part4').then(m => m.chemMixturesSeparationsPart4Data) },
      { title: 'Choosing Separation Methods', loader: () => import('./chemistry-mixtures-separations-part5').then(m => m.chemMixturesSeparationsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-mixtures-separations-part6').then(m => m.chemMixturesSeparationsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-mixtures-separations-part7').then(m => m.chemMixturesSeparationsPart7Data) },
    ],
  },
  'reaction-types': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Synthesis & Decomposition', loader: () => import('./chemistry-reaction-types-part1').then(m => m.chemReactionTypesPart1Data) },
      { title: 'Single & Double Replacement', loader: () => import('./chemistry-reaction-types-part2').then(m => m.chemReactionTypesPart2Data) },
      { title: 'Combustion Reactions', loader: () => import('./chemistry-reaction-types-part3').then(m => m.chemReactionTypesPart3Data) },
      { title: 'Precipitation Reactions', loader: () => import('./chemistry-reaction-types-part4').then(m => m.chemReactionTypesPart4Data) },
      { title: 'Balancing Chemical Equations', loader: () => import('./chemistry-reaction-types-part5').then(m => m.chemReactionTypesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-reaction-types-part6').then(m => m.chemReactionTypesPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-reaction-types-part7').then(m => m.chemReactionTypesPart7Data) },
    ],
  },
  'stoichiometry-limiting-reactants': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Mole Ratios', loader: () => import('./chemistry-stoichiometry-limiting-reactants-part1').then(m => m.chemStoichiometryLimitingReactantsPart1Data) },
      { title: 'Mass-to-Mass Calculations', loader: () => import('./chemistry-stoichiometry-limiting-reactants-part2').then(m => m.chemStoichiometryLimitingReactantsPart2Data) },
      { title: 'Limiting Reactant', loader: () => import('./chemistry-stoichiometry-limiting-reactants-part3').then(m => m.chemStoichiometryLimitingReactantsPart3Data) },
      { title: 'Excess Reactant & Theoretical Yield', loader: () => import('./chemistry-stoichiometry-limiting-reactants-part4').then(m => m.chemStoichiometryLimitingReactantsPart4Data) },
      { title: 'Percent Yield', loader: () => import('./chemistry-stoichiometry-limiting-reactants-part5').then(m => m.chemStoichiometryLimitingReactantsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-stoichiometry-limiting-reactants-part6').then(m => m.chemStoichiometryLimitingReactantsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-stoichiometry-limiting-reactants-part7').then(m => m.chemStoichiometryLimitingReactantsPart7Data) },
    ],
  },
  'net-ionic-equations': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Molecular Equations', loader: () => import('./chemistry-net-ionic-equations-part1').then(m => m.chemNetIonicEquationsPart1Data) },
      { title: 'Complete Ionic Equations', loader: () => import('./chemistry-net-ionic-equations-part2').then(m => m.chemNetIonicEquationsPart2Data) },
      { title: 'Spectator Ions', loader: () => import('./chemistry-net-ionic-equations-part3').then(m => m.chemNetIonicEquationsPart3Data) },
      { title: 'Writing Net Ionic Equations', loader: () => import('./chemistry-net-ionic-equations-part4').then(m => m.chemNetIonicEquationsPart4Data) },
      { title: 'Solubility & Driving Forces', loader: () => import('./chemistry-net-ionic-equations-part5').then(m => m.chemNetIonicEquationsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-net-ionic-equations-part6').then(m => m.chemNetIonicEquationsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-net-ionic-equations-part7').then(m => m.chemNetIonicEquationsPart7Data) },
    ],
  },
  'oxidation-reduction-reactions': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Oxidation States', loader: () => import('./chemistry-oxidation-reduction-reactions-part1').then(m => m.chemOxidationReductionReactionsPart1Data) },
      { title: 'Identifying Redox Reactions', loader: () => import('./chemistry-oxidation-reduction-reactions-part2').then(m => m.chemOxidationReductionReactionsPart2Data) },
      { title: 'Oxidizing & Reducing Agents', loader: () => import('./chemistry-oxidation-reduction-reactions-part3').then(m => m.chemOxidationReductionReactionsPart3Data) },
      { title: 'Balancing Redox (Half-Reaction)', loader: () => import('./chemistry-oxidation-reduction-reactions-part4').then(m => m.chemOxidationReductionReactionsPart4Data) },
      { title: 'Redox in Acidic & Basic Solutions', loader: () => import('./chemistry-oxidation-reduction-reactions-part5').then(m => m.chemOxidationReductionReactionsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-oxidation-reduction-reactions-part6').then(m => m.chemOxidationReductionReactionsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-oxidation-reduction-reactions-part7').then(m => m.chemOxidationReductionReactionsPart7Data) },
    ],
  },
  'reaction-rates-and-rate-laws': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Measuring Reaction Rates', loader: () => import('./chemistry-reaction-rates-and-rate-laws-part1').then(m => m.chemReactionRatesAndRateLawsPart1Data) },
      { title: 'Rate Laws & Orders', loader: () => import('./chemistry-reaction-rates-and-rate-laws-part2').then(m => m.chemReactionRatesAndRateLawsPart2Data) },
      { title: 'Determining Rate Law from Data', loader: () => import('./chemistry-reaction-rates-and-rate-laws-part3').then(m => m.chemReactionRatesAndRateLawsPart3Data) },
      { title: 'Method of Initial Rates', loader: () => import('./chemistry-reaction-rates-and-rate-laws-part4').then(m => m.chemReactionRatesAndRateLawsPart4Data) },
      { title: 'Factors Affecting Rate', loader: () => import('./chemistry-reaction-rates-and-rate-laws-part5').then(m => m.chemReactionRatesAndRateLawsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-reaction-rates-and-rate-laws-part6').then(m => m.chemReactionRatesAndRateLawsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-reaction-rates-and-rate-laws-part7').then(m => m.chemReactionRatesAndRateLawsPart7Data) },
    ],
  },
  'integrated-rate-laws': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Zero-Order Reactions', loader: () => import('./chemistry-integrated-rate-laws-part1').then(m => m.chemIntegratedRateLawsPart1Data) },
      { title: 'First-Order Reactions', loader: () => import('./chemistry-integrated-rate-laws-part2').then(m => m.chemIntegratedRateLawsPart2Data) },
      { title: 'Second-Order Reactions', loader: () => import('./chemistry-integrated-rate-laws-part3').then(m => m.chemIntegratedRateLawsPart3Data) },
      { title: 'Half-Life', loader: () => import('./chemistry-integrated-rate-laws-part4').then(m => m.chemIntegratedRateLawsPart4Data) },
      { title: 'Graphical Analysis of Order', loader: () => import('./chemistry-integrated-rate-laws-part5').then(m => m.chemIntegratedRateLawsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-integrated-rate-laws-part6').then(m => m.chemIntegratedRateLawsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-integrated-rate-laws-part7').then(m => m.chemIntegratedRateLawsPart7Data) },
    ],
  },
  'activation-energy-arrhenius': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Collision Theory', loader: () => import('./chemistry-activation-energy-arrhenius-part1').then(m => m.chemActivationEnergyArrheniusPart1Data) },
      { title: 'Activation Energy', loader: () => import('./chemistry-activation-energy-arrhenius-part2').then(m => m.chemActivationEnergyArrheniusPart2Data) },
      { title: 'Energy Diagrams', loader: () => import('./chemistry-activation-energy-arrhenius-part3').then(m => m.chemActivationEnergyArrheniusPart3Data) },
      { title: 'Arrhenius Equation', loader: () => import('./chemistry-activation-energy-arrhenius-part4').then(m => m.chemActivationEnergyArrheniusPart4Data) },
      { title: 'Catalysts & Catalysis', loader: () => import('./chemistry-activation-energy-arrhenius-part5').then(m => m.chemActivationEnergyArrheniusPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-activation-energy-arrhenius-part6').then(m => m.chemActivationEnergyArrheniusPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-activation-energy-arrhenius-part7').then(m => m.chemActivationEnergyArrheniusPart7Data) },
    ],
  },
  'reaction-mechanisms': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Elementary Steps', loader: () => import('./chemistry-reaction-mechanisms-part1').then(m => m.chemReactionMechanismsPart1Data) },
      { title: 'Molecularity', loader: () => import('./chemistry-reaction-mechanisms-part2').then(m => m.chemReactionMechanismsPart2Data) },
      { title: 'Rate-Determining Step', loader: () => import('./chemistry-reaction-mechanisms-part3').then(m => m.chemReactionMechanismsPart3Data) },
      { title: 'Intermediates vs Catalysts', loader: () => import('./chemistry-reaction-mechanisms-part4').then(m => m.chemReactionMechanismsPart4Data) },
      { title: 'Deriving Rate Laws from Mechanisms', loader: () => import('./chemistry-reaction-mechanisms-part5').then(m => m.chemReactionMechanismsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-reaction-mechanisms-part6').then(m => m.chemReactionMechanismsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-reaction-mechanisms-part7').then(m => m.chemReactionMechanismsPart7Data) },
    ],
  },
  'enthalpy-calorimetry': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Enthalpy & ΔH', loader: () => import('./chemistry-enthalpy-calorimetry-part1').then(m => m.chemEnthalpyCalorimetryPart1Data) },
      { title: 'Exothermic & Endothermic', loader: () => import('./chemistry-enthalpy-calorimetry-part2').then(m => m.chemEnthalpyCalorimetryPart2Data) },
      { title: 'Coffee Cup Calorimetry', loader: () => import('./chemistry-enthalpy-calorimetry-part3').then(m => m.chemEnthalpyCalorimetryPart3Data) },
      { title: 'Bomb Calorimetry', loader: () => import('./chemistry-enthalpy-calorimetry-part4').then(m => m.chemEnthalpyCalorimetryPart4Data) },
      { title: 'Hess\'s Law', loader: () => import('./chemistry-enthalpy-calorimetry-part5').then(m => m.chemEnthalpyCalorimetryPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-enthalpy-calorimetry-part6').then(m => m.chemEnthalpyCalorimetryPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-enthalpy-calorimetry-part7').then(m => m.chemEnthalpyCalorimetryPart7Data) },
    ],
  },
  'entropy-second-law': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Entropy', loader: () => import('./chemistry-entropy-second-law-part1').then(m => m.chemEntropySecondLawPart1Data) },
      { title: 'Microstates & Disorder', loader: () => import('./chemistry-entropy-second-law-part2').then(m => m.chemEntropySecondLawPart2Data) },
      { title: 'Second Law of Thermodynamics', loader: () => import('./chemistry-entropy-second-law-part3').then(m => m.chemEntropySecondLawPart3Data) },
      { title: 'Standard Entropy Changes', loader: () => import('./chemistry-entropy-second-law-part4').then(m => m.chemEntropySecondLawPart4Data) },
      { title: 'Predicting Entropy Changes', loader: () => import('./chemistry-entropy-second-law-part5').then(m => m.chemEntropySecondLawPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-entropy-second-law-part6').then(m => m.chemEntropySecondLawPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-entropy-second-law-part7').then(m => m.chemEntropySecondLawPart7Data) },
    ],
    variants: {
      2: [
        { title: 'Introduction to Entropy', loader: () => import('./chemistry-entropy-second-law-v2-part1').then(m => m.chemEntropySecondLawV2Part1Data) },
        { title: 'Microstates & Disorder', loader: () => import('./chemistry-entropy-second-law-v2-part2').then(m => m.chemEntropySecondLawV2Part2Data) },
        { title: 'Second Law of Thermodynamics', loader: () => import('./chemistry-entropy-second-law-v2-part3').then(m => m.chemEntropySecondLawV2Part3Data) },
        { title: 'Standard Entropy Changes', loader: () => import('./chemistry-entropy-second-law-v2-part4').then(m => m.chemEntropySecondLawV2Part4Data) },
        { title: 'Predicting Entropy Changes', loader: () => import('./chemistry-entropy-second-law-v2-part5').then(m => m.chemEntropySecondLawV2Part5Data) },
        { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-entropy-second-law-v2-part6').then(m => m.chemEntropySecondLawV2Part6Data) },
        { title: 'Synthesis & AP Review', loader: () => import('./chemistry-entropy-second-law-v2-part7').then(m => m.chemEntropySecondLawV2Part7Data) },
      ],
      3: [
        { title: 'Introduction to Entropy', loader: () => import('./chemistry-entropy-second-law-v3-part1').then(m => m.chemEntropySecondLawV3Part1Data) },
        { title: 'Microstates & Disorder', loader: () => import('./chemistry-entropy-second-law-v3-part2').then(m => m.chemEntropySecondLawV3Part2Data) },
        { title: 'Second Law of Thermodynamics', loader: () => import('./chemistry-entropy-second-law-v3-part3').then(m => m.chemEntropySecondLawV3Part3Data) },
        { title: 'Standard Entropy Changes', loader: () => import('./chemistry-entropy-second-law-v3-part4').then(m => m.chemEntropySecondLawV3Part4Data) },
        { title: 'Predicting Entropy Changes', loader: () => import('./chemistry-entropy-second-law-v3-part5').then(m => m.chemEntropySecondLawV3Part5Data) },
        { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-entropy-second-law-v3-part6').then(m => m.chemEntropySecondLawV3Part6Data) },
        { title: 'Synthesis & AP Review', loader: () => import('./chemistry-entropy-second-law-v3-part7').then(m => m.chemEntropySecondLawV3Part7Data) },
      ],
    },
  },
  'gibbs-free-energy': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Gibbs Free Energy', loader: () => import('./chemistry-gibbs-free-energy-part1').then(m => m.chemGibbsFreeEnergyPart1Data) },
      { title: 'ΔG = ΔH − TΔS', loader: () => import('./chemistry-gibbs-free-energy-part2').then(m => m.chemGibbsFreeEnergyPart2Data) },
      { title: 'Spontaneity & Temperature', loader: () => import('./chemistry-gibbs-free-energy-part3').then(m => m.chemGibbsFreeEnergyPart3Data) },
      { title: 'Standard Free Energy of Formation', loader: () => import('./chemistry-gibbs-free-energy-part4').then(m => m.chemGibbsFreeEnergyPart4Data) },
      { title: 'ΔG and Equilibrium', loader: () => import('./chemistry-gibbs-free-energy-part5').then(m => m.chemGibbsFreeEnergyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-gibbs-free-energy-part6').then(m => m.chemGibbsFreeEnergyPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-gibbs-free-energy-part7').then(m => m.chemGibbsFreeEnergyPart7Data) },
    ],
  },
  'intro-equilibrium': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Dynamic Equilibrium', loader: () => import('./chemistry-intro-equilibrium-part1').then(m => m.chemIntroEquilibriumPart1Data) },
      { title: 'Equilibrium Constant (Keq)', loader: () => import('./chemistry-intro-equilibrium-part2').then(m => m.chemIntroEquilibriumPart2Data) },
      { title: 'Writing Equilibrium Expressions', loader: () => import('./chemistry-intro-equilibrium-part3').then(m => m.chemIntroEquilibriumPart3Data) },
      { title: 'Kp vs Kc', loader: () => import('./chemistry-intro-equilibrium-part4').then(m => m.chemIntroEquilibriumPart4Data) },
      { title: 'Heterogeneous Equilibria', loader: () => import('./chemistry-intro-equilibrium-part5').then(m => m.chemIntroEquilibriumPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-intro-equilibrium-part6').then(m => m.chemIntroEquilibriumPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-intro-equilibrium-part7').then(m => m.chemIntroEquilibriumPart7Data) },
    ],
  },
  'equilibrium-constants-expressions': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is Equilibrium?', loader: () => import('./chemistry-equilibrium-constants-part1').then(m => m.chemEquilibriumConstantsPart1Data) },
      { title: 'Writing K Expressions', loader: () => import('./chemistry-equilibrium-constants-part2').then(m => m.chemEquilibriumConstantsPart2Data) },
      { title: 'Kc vs Kp', loader: () => import('./chemistry-equilibrium-constants-part3').then(m => m.chemEquilibriumConstantsPart3Data) },
      { title: 'Magnitude of K', loader: () => import('./chemistry-equilibrium-constants-part4').then(m => m.chemEquilibriumConstantsPart4Data) },
      { title: 'Manipulating K', loader: () => import('./chemistry-equilibrium-constants-part5').then(m => m.chemEquilibriumConstantsPart5Data) },
      { title: 'Reaction Quotient Q', loader: () => import('./chemistry-equilibrium-constants-part6').then(m => m.chemEquilibriumConstantsPart6Data) },
      { title: 'AP Review', loader: () => import('./chemistry-equilibrium-constants-part7').then(m => m.chemEquilibriumConstantsPart7Data) },
    ],
  },
  'reaction-quotient-le-chatelier': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Reaction Quotient (Q)', loader: () => import('./chemistry-reaction-quotient-le-chatelier-part1').then(m => m.chemReactionQuotientLeChatPart1Data) },
      { title: 'Comparing Q and K', loader: () => import('./chemistry-reaction-quotient-le-chatelier-part2').then(m => m.chemReactionQuotientLeChatPart2Data) },
      { title: 'Le Chatelier\'s Principle', loader: () => import('./chemistry-reaction-quotient-le-chatelier-part3').then(m => m.chemReactionQuotientLeChatPart3Data) },
      { title: 'Changes in Concentration', loader: () => import('./chemistry-reaction-quotient-le-chatelier-part4').then(m => m.chemReactionQuotientLeChatPart4Data) },
      { title: 'Changes in Temperature & Pressure', loader: () => import('./chemistry-reaction-quotient-le-chatelier-part5').then(m => m.chemReactionQuotientLeChatPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-reaction-quotient-le-chatelier-part6').then(m => m.chemReactionQuotientLeChatPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-reaction-quotient-le-chatelier-part7').then(m => m.chemReactionQuotientLeChatPart7Data) },
    ],
  },
  'ice-tables-calculations': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Setting Up ICE Tables', loader: () => import('./chemistry-ice-tables-calculations-part1').then(m => m.chemIceTablesCalculationsPart1Data) },
      { title: 'Solving for x', loader: () => import('./chemistry-ice-tables-calculations-part2').then(m => m.chemIceTablesCalculationsPart2Data) },
      { title: 'Small-x Approximation', loader: () => import('./chemistry-ice-tables-calculations-part3').then(m => m.chemIceTablesCalculationsPart3Data) },
      { title: 'Quadratic Solutions', loader: () => import('./chemistry-ice-tables-calculations-part4').then(m => m.chemIceTablesCalculationsPart4Data) },
      { title: 'ICE Tables with Kp', loader: () => import('./chemistry-ice-tables-calculations-part5').then(m => m.chemIceTablesCalculationsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-ice-tables-calculations-part6').then(m => m.chemIceTablesCalculationsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-ice-tables-calculations-part7').then(m => m.chemIceTablesCalculationsPart7Data) },
    ],
  },
  'solubility-ksp': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Solubility Product (Ksp)', loader: () => import('./chemistry-solubility-ksp-part1').then(m => m.chemSolubilityKspPart1Data) },
      { title: 'Molar Solubility from Ksp', loader: () => import('./chemistry-solubility-ksp-part2').then(m => m.chemSolubilityKspPart2Data) },
      { title: 'Common Ion Effect', loader: () => import('./chemistry-solubility-ksp-part3').then(m => m.chemSolubilityKspPart3Data) },
      { title: 'Predicting Precipitation (Q vs Ksp)', loader: () => import('./chemistry-solubility-ksp-part4').then(m => m.chemSolubilityKspPart4Data) },
      { title: 'Selective Precipitation', loader: () => import('./chemistry-solubility-ksp-part5').then(m => m.chemSolubilityKspPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-solubility-ksp-part6').then(m => m.chemSolubilityKspPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-solubility-ksp-part7').then(m => m.chemSolubilityKspPart7Data) },
    ],
  },
  'acid-base-theories-ph': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Arrhenius & Brønsted-Lowry', loader: () => import('./chemistry-acid-base-theories-ph-part1').then(m => m.chemAcidBaseTheoriesPhPart1Data) },
      { title: 'Conjugate Acid-Base Pairs', loader: () => import('./chemistry-acid-base-theories-ph-part2').then(m => m.chemAcidBaseTheoriesPhPart2Data) },
      { title: 'The pH Scale', loader: () => import('./chemistry-acid-base-theories-ph-part3').then(m => m.chemAcidBaseTheoriesPhPart3Data) },
      { title: 'Strong Acids & Bases', loader: () => import('./chemistry-acid-base-theories-ph-part4').then(m => m.chemAcidBaseTheoriesPhPart4Data) },
      { title: 'Calculating pH & pOH', loader: () => import('./chemistry-acid-base-theories-ph-part5').then(m => m.chemAcidBaseTheoriesPhPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-acid-base-theories-ph-part6').then(m => m.chemAcidBaseTheoriesPhPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-acid-base-theories-ph-part7').then(m => m.chemAcidBaseTheoriesPhPart7Data) },
    ],
  },
  'weak-acids-bases-ka-kb': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Weak Acid Equilibria', loader: () => import('./chemistry-weak-acids-bases-ka-kb-part1').then(m => m.chemWeakAcidsBasesKaKbPart1Data) },
      { title: 'Ka & Percent Ionization', loader: () => import('./chemistry-weak-acids-bases-ka-kb-part2').then(m => m.chemWeakAcidsBasesKaKbPart2Data) },
      { title: 'Weak Base Equilibria & Kb', loader: () => import('./chemistry-weak-acids-bases-ka-kb-part3').then(m => m.chemWeakAcidsBasesKaKbPart3Data) },
      { title: 'Relationship Between Ka & Kb', loader: () => import('./chemistry-weak-acids-bases-ka-kb-part4').then(m => m.chemWeakAcidsBasesKaKbPart4Data) },
      { title: 'Polyprotic Acids', loader: () => import('./chemistry-weak-acids-bases-ka-kb-part5').then(m => m.chemWeakAcidsBasesKaKbPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-weak-acids-bases-ka-kb-part6').then(m => m.chemWeakAcidsBasesKaKbPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-weak-acids-bases-ka-kb-part7').then(m => m.chemWeakAcidsBasesKaKbPart7Data) },
    ],
  },
  'buffer-solutions-henderson-hasselbalch': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is a Buffer?', loader: () => import('./chemistry-buffer-solutions-henderson-hasselbalch-part1').then(m => m.chemBufferSolutionsHendersonHasselbalchPart1Data) },
      { title: 'Henderson-Hasselbalch Equation', loader: () => import('./chemistry-buffer-solutions-henderson-hasselbalch-part2').then(m => m.chemBufferSolutionsHendersonHasselbalchPart2Data) },
      { title: 'Preparing Buffers', loader: () => import('./chemistry-buffer-solutions-henderson-hasselbalch-part3').then(m => m.chemBufferSolutionsHendersonHasselbalchPart3Data) },
      { title: 'Buffer Capacity', loader: () => import('./chemistry-buffer-solutions-henderson-hasselbalch-part4').then(m => m.chemBufferSolutionsHendersonHasselbalchPart4Data) },
      { title: 'Adding Acid or Base to Buffers', loader: () => import('./chemistry-buffer-solutions-henderson-hasselbalch-part5').then(m => m.chemBufferSolutionsHendersonHasselbalchPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-buffer-solutions-henderson-hasselbalch-part6').then(m => m.chemBufferSolutionsHendersonHasselbalchPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-buffer-solutions-henderson-hasselbalch-part7').then(m => m.chemBufferSolutionsHendersonHasselbalchPart7Data) },
    ],
  },
  'acid-base-titrations': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Titration Basics', loader: () => import('./chemistry-acid-base-titrations-part1').then(m => m.chemAcidBaseTitrationsPart1Data) },
      { title: 'Strong Acid–Strong Base', loader: () => import('./chemistry-acid-base-titrations-part2').then(m => m.chemAcidBaseTitrationsPart2Data) },
      { title: 'Weak Acid–Strong Base', loader: () => import('./chemistry-acid-base-titrations-part3').then(m => m.chemAcidBaseTitrationsPart3Data) },
      { title: 'Titration Curves', loader: () => import('./chemistry-acid-base-titrations-part4').then(m => m.chemAcidBaseTitrationsPart4Data) },
      { title: 'Indicators & Equivalence Point', loader: () => import('./chemistry-acid-base-titrations-part5').then(m => m.chemAcidBaseTitrationsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-acid-base-titrations-part6').then(m => m.chemAcidBaseTitrationsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-acid-base-titrations-part7').then(m => m.chemAcidBaseTitrationsPart7Data) },
    ],
  },
  'galvanic-cells-potentials': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Galvanic Cells', loader: () => import('./chemistry-galvanic-cells-potentials-part1').then(m => m.chemGalvanicCellsPotentialsPart1Data) },
      { title: 'Cell Notation & Diagrams', loader: () => import('./chemistry-galvanic-cells-potentials-part2').then(m => m.chemGalvanicCellsPotentialsPart2Data) },
      { title: 'Standard Reduction Potentials', loader: () => import('./chemistry-galvanic-cells-potentials-part3').then(m => m.chemGalvanicCellsPotentialsPart3Data) },
      { title: 'Calculating E°cell', loader: () => import('./chemistry-galvanic-cells-potentials-part4').then(m => m.chemGalvanicCellsPotentialsPart4Data) },
      { title: 'Spontaneity & ΔG°', loader: () => import('./chemistry-galvanic-cells-potentials-part5').then(m => m.chemGalvanicCellsPotentialsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-galvanic-cells-potentials-part6').then(m => m.chemGalvanicCellsPotentialsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-galvanic-cells-potentials-part7').then(m => m.chemGalvanicCellsPotentialsPart7Data) },
    ],
  },
  'nernst-equation-concentration': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Non-Standard Conditions', loader: () => import('./chemistry-nernst-equation-concentration-part1').then(m => m.chemNernstEquationConcentrationPart1Data) },
      { title: 'The Nernst Equation', loader: () => import('./chemistry-nernst-equation-concentration-part2').then(m => m.chemNernstEquationConcentrationPart2Data) },
      { title: 'Concentration Cells', loader: () => import('./chemistry-nernst-equation-concentration-part3').then(m => m.chemNernstEquationConcentrationPart3Data) },
      { title: 'Cell Potential & Equilibrium', loader: () => import('./chemistry-nernst-equation-concentration-part4').then(m => m.chemNernstEquationConcentrationPart4Data) },
      { title: 'Batteries & Applications', loader: () => import('./chemistry-nernst-equation-concentration-part5').then(m => m.chemNernstEquationConcentrationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-nernst-equation-concentration-part6').then(m => m.chemNernstEquationConcentrationPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-nernst-equation-concentration-part7').then(m => m.chemNernstEquationConcentrationPart7Data) },
    ],
  },
  'electrolytic-cells-faraday': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Electrolysis Basics', loader: () => import('./chemistry-electrolytic-cells-faraday-part1').then(m => m.chemElectrolyticCellsFaradayPart1Data) },
      { title: 'Electrolytic vs Galvanic Cells', loader: () => import('./chemistry-electrolytic-cells-faraday-part2').then(m => m.chemElectrolyticCellsFaradayPart2Data) },
      { title: 'Electrolysis of Molten Salts', loader: () => import('./chemistry-electrolytic-cells-faraday-part3').then(m => m.chemElectrolyticCellsFaradayPart3Data) },
      { title: 'Electrolysis of Aqueous Solutions', loader: () => import('./chemistry-electrolytic-cells-faraday-part4').then(m => m.chemElectrolyticCellsFaradayPart4Data) },
      { title: 'Faraday\'s Laws of Electrolysis', loader: () => import('./chemistry-electrolytic-cells-faraday-part5').then(m => m.chemElectrolyticCellsFaradayPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./chemistry-electrolytic-cells-faraday-part6').then(m => m.chemElectrolyticCellsFaradayPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./chemistry-electrolytic-cells-faraday-part7').then(m => m.chemElectrolyticCellsFaradayPart7Data) },
    ],
  },
  'one-dimensional-motion': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Position & Displacement', loader: () => import('./physics1-one-dimensional-motion-part1').then(m => m.physics1OneDimensionalMotionPart1Data) },
      { title: 'Speed & Velocity', loader: () => import('./physics1-one-dimensional-motion-part2').then(m => m.physics1OneDimensionalMotionPart2Data) },
      { title: 'Acceleration', loader: () => import('./physics1-one-dimensional-motion-part3').then(m => m.physics1OneDimensionalMotionPart3Data) },
      { title: 'Kinematic Equations', loader: () => import('./physics1-one-dimensional-motion-part4').then(m => m.physics1OneDimensionalMotionPart4Data) },
      { title: 'Free Fall', loader: () => import('./physics1-one-dimensional-motion-part5').then(m => m.physics1OneDimensionalMotionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-one-dimensional-motion-part6').then(m => m.physics1OneDimensionalMotionPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-one-dimensional-motion-part7').then(m => m.physics1OneDimensionalMotionPart7Data) },
    ],
  },
  'motion-graphs': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Position-Time Graphs', loader: () => import('./physics1-motion-graphs-part1').then(m => m.physics1MotionGraphsPart1Data) },
      { title: 'Velocity-Time Graphs', loader: () => import('./physics1-motion-graphs-part2').then(m => m.physics1MotionGraphsPart2Data) },
      { title: 'Acceleration-Time Graphs', loader: () => import('./physics1-motion-graphs-part3').then(m => m.physics1MotionGraphsPart3Data) },
      { title: 'Slopes & Areas Under Curves', loader: () => import('./physics1-motion-graphs-part4').then(m => m.physics1MotionGraphsPart4Data) },
      { title: 'Translating Between Graphs', loader: () => import('./physics1-motion-graphs-part5').then(m => m.physics1MotionGraphsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-motion-graphs-part6').then(m => m.physics1MotionGraphsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-motion-graphs-part7').then(m => m.physics1MotionGraphsPart7Data) },
    ],
  },
  'two-dimensional-motion': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Vectors & Components', loader: () => import('./physics1-two-dimensional-motion-part1').then(m => m.physics1TwoDimensionalMotionPart1Data) },
      { title: 'Vector Addition & Subtraction', loader: () => import('./physics1-two-dimensional-motion-part2').then(m => m.physics1TwoDimensionalMotionPart2Data) },
      { title: 'Relative Motion', loader: () => import('./physics1-two-dimensional-motion-part3').then(m => m.physics1TwoDimensionalMotionPart3Data) },
      { title: '2D Kinematic Equations', loader: () => import('./physics1-two-dimensional-motion-part4').then(m => m.physics1TwoDimensionalMotionPart4Data) },
      { title: 'Independence of Components', loader: () => import('./physics1-two-dimensional-motion-part5').then(m => m.physics1TwoDimensionalMotionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-two-dimensional-motion-part6').then(m => m.physics1TwoDimensionalMotionPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-two-dimensional-motion-part7').then(m => m.physics1TwoDimensionalMotionPart7Data) },
    ],
  },
  'projectile-motion': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Horizontal & Vertical Independence', loader: () => import('./physics1-projectile-motion-part1').then(m => m.physics1ProjectileMotionPart1Data) },
      { title: 'Horizontally Launched Projectiles', loader: () => import('./physics1-projectile-motion-part2').then(m => m.physics1ProjectileMotionPart2Data) },
      { title: 'Angled Launches', loader: () => import('./physics1-projectile-motion-part3').then(m => m.physics1ProjectileMotionPart3Data) },
      { title: 'Range & Maximum Height', loader: () => import('./physics1-projectile-motion-part4').then(m => m.physics1ProjectileMotionPart4Data) },
      { title: 'Symmetry of Trajectory', loader: () => import('./physics1-projectile-motion-part5').then(m => m.physics1ProjectileMotionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-projectile-motion-part6').then(m => m.physics1ProjectileMotionPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-projectile-motion-part7').then(m => m.physics1ProjectileMotionPart7Data) },
    ],
  },
  'newtons-first-second-laws': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Inertia & Newton\'s First Law', loader: () => import('./physics1-newtons-first-second-laws-part1').then(m => m.physics1NewtonsFirstSecondLawsPart1Data) },
      { title: 'Force & Net Force', loader: () => import('./physics1-newtons-first-second-laws-part2').then(m => m.physics1NewtonsFirstSecondLawsPart2Data) },
      { title: 'Newton\'s Second Law (F=ma)', loader: () => import('./physics1-newtons-first-second-laws-part3').then(m => m.physics1NewtonsFirstSecondLawsPart3Data) },
      { title: 'Free-Body Diagrams', loader: () => import('./physics1-newtons-first-second-laws-part4').then(m => m.physics1NewtonsFirstSecondLawsPart4Data) },
      { title: 'Weight & Normal Force', loader: () => import('./physics1-newtons-first-second-laws-part5').then(m => m.physics1NewtonsFirstSecondLawsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-newtons-first-second-laws-part6').then(m => m.physics1NewtonsFirstSecondLawsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-newtons-first-second-laws-part7').then(m => m.physics1NewtonsFirstSecondLawsPart7Data) },
    ],
  },
  'newtons-third-law': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Action-Reaction Pairs', loader: () => import('./physics1-newtons-third-law-part1').then(m => m.physics1NewtonsThirdLawPart1Data) },
      { title: 'Identifying Force Pairs', loader: () => import('./physics1-newtons-third-law-part2').then(m => m.physics1NewtonsThirdLawPart2Data) },
      { title: 'Third Law in Contact Forces', loader: () => import('./physics1-newtons-third-law-part3').then(m => m.physics1NewtonsThirdLawPart3Data) },
      { title: 'Third Law at a Distance', loader: () => import('./physics1-newtons-third-law-part4').then(m => m.physics1NewtonsThirdLawPart4Data) },
      { title: 'Common Misconceptions', loader: () => import('./physics1-newtons-third-law-part5').then(m => m.physics1NewtonsThirdLawPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-newtons-third-law-part6').then(m => m.physics1NewtonsThirdLawPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-newtons-third-law-part7').then(m => m.physics1NewtonsThirdLawPart7Data) },
    ],
  },
  'friction': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Static vs Kinetic Friction', loader: () => import('./physics1-friction-part1').then(m => m.physics1FrictionPart1Data) },
      { title: 'Coefficient of Friction', loader: () => import('./physics1-friction-part2').then(m => m.physics1FrictionPart2Data) },
      { title: 'Friction on Flat Surfaces', loader: () => import('./physics1-friction-part3').then(m => m.physics1FrictionPart3Data) },
      { title: 'Friction & Applied Forces', loader: () => import('./physics1-friction-part4').then(m => m.physics1FrictionPart4Data) },
      { title: 'Air Resistance & Drag', loader: () => import('./physics1-friction-part5').then(m => m.physics1FrictionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-friction-part6').then(m => m.physics1FrictionPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-friction-part7').then(m => m.physics1FrictionPart7Data) },
    ],
  },
  'inclined-planes': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Forces on an Incline', loader: () => import('./physics1-inclined-planes-part1').then(m => m.physics1InclinedPlanesPart1Data) },
      { title: 'Component Decomposition', loader: () => import('./physics1-inclined-planes-part2').then(m => m.physics1InclinedPlanesPart2Data) },
      { title: 'Frictionless Inclines', loader: () => import('./physics1-inclined-planes-part3').then(m => m.physics1InclinedPlanesPart3Data) },
      { title: 'Inclines with Friction', loader: () => import('./physics1-inclined-planes-part4').then(m => m.physics1InclinedPlanesPart4Data) },
      { title: 'Connected Objects on Inclines', loader: () => import('./physics1-inclined-planes-part5').then(m => m.physics1InclinedPlanesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-inclined-planes-part6').then(m => m.physics1InclinedPlanesPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-inclined-planes-part7').then(m => m.physics1InclinedPlanesPart7Data) },
    ],
  },
  'work-and-kinetic-energy': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Definition of Work', loader: () => import('./physics1-work-and-kinetic-energy-part1').then(m => m.physics1WorkAndKineticEnergyPart1Data) },
      { title: 'Work by Angled Forces', loader: () => import('./physics1-work-and-kinetic-energy-part2').then(m => m.physics1WorkAndKineticEnergyPart2Data) },
      { title: 'Kinetic Energy', loader: () => import('./physics1-work-and-kinetic-energy-part3').then(m => m.physics1WorkAndKineticEnergyPart3Data) },
      { title: 'Work-Energy Theorem', loader: () => import('./physics1-work-and-kinetic-energy-part4').then(m => m.physics1WorkAndKineticEnergyPart4Data) },
      { title: 'Power', loader: () => import('./physics1-work-and-kinetic-energy-part5').then(m => m.physics1WorkAndKineticEnergyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-work-and-kinetic-energy-part6').then(m => m.physics1WorkAndKineticEnergyPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-work-and-kinetic-energy-part7').then(m => m.physics1WorkAndKineticEnergyPart7Data) },
    ],
  },
  'gravitational-potential-energy': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Gravitational PE Near Earth', loader: () => import('./physics1-gravitational-potential-energy-part1').then(m => m.physics1GravitationalPotentialEnergyPart1Data) },
      { title: 'Reference Points & Zero Level', loader: () => import('./physics1-gravitational-potential-energy-part2').then(m => m.physics1GravitationalPotentialEnergyPart2Data) },
      { title: 'Work Done by Gravity', loader: () => import('./physics1-gravitational-potential-energy-part3').then(m => m.physics1GravitationalPotentialEnergyPart3Data) },
      { title: 'Conservative Forces', loader: () => import('./physics1-gravitational-potential-energy-part4').then(m => m.physics1GravitationalPotentialEnergyPart4Data) },
      { title: 'PE in Multi-Object Systems', loader: () => import('./physics1-gravitational-potential-energy-part5').then(m => m.physics1GravitationalPotentialEnergyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-gravitational-potential-energy-part6').then(m => m.physics1GravitationalPotentialEnergyPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-gravitational-potential-energy-part7').then(m => m.physics1GravitationalPotentialEnergyPart7Data) },
    ],
  },
  'elastic-potential-energy': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Hooke\'s Law', loader: () => import('./physics1-elastic-potential-energy-part1').then(m => m.physics1ElasticPotentialEnergyPart1Data) },
      { title: 'Spring Constant', loader: () => import('./physics1-elastic-potential-energy-part2').then(m => m.physics1ElasticPotentialEnergyPart2Data) },
      { title: 'Elastic PE Formula', loader: () => import('./physics1-elastic-potential-energy-part3').then(m => m.physics1ElasticPotentialEnergyPart3Data) },
      { title: 'Work Done by Springs', loader: () => import('./physics1-elastic-potential-energy-part4').then(m => m.physics1ElasticPotentialEnergyPart4Data) },
      { title: 'Springs in Series & Parallel', loader: () => import('./physics1-elastic-potential-energy-part5').then(m => m.physics1ElasticPotentialEnergyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-elastic-potential-energy-part6').then(m => m.physics1ElasticPotentialEnergyPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-elastic-potential-energy-part7').then(m => m.physics1ElasticPotentialEnergyPart7Data) },
    ],
  },
  'conservation-of-energy': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Energy Conservation Principle', loader: () => import('./physics1-conservation-of-energy-part1').then(m => m.physics1ConservationOfEnergyPart1Data) },
      { title: 'KE ↔ PE Transformations', loader: () => import('./physics1-conservation-of-energy-part2').then(m => m.physics1ConservationOfEnergyPart2Data) },
      { title: 'Energy Bar Charts', loader: () => import('./physics1-conservation-of-energy-part3').then(m => m.physics1ConservationOfEnergyPart3Data) },
      { title: 'Non-Conservative Forces', loader: () => import('./physics1-conservation-of-energy-part4').then(m => m.physics1ConservationOfEnergyPart4Data) },
      { title: 'Energy in Spring-Mass Systems', loader: () => import('./physics1-conservation-of-energy-part5').then(m => m.physics1ConservationOfEnergyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-conservation-of-energy-part6').then(m => m.physics1ConservationOfEnergyPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-conservation-of-energy-part7').then(m => m.physics1ConservationOfEnergyPart7Data) },
    ],
  },
  'momentum-and-impulse': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Linear Momentum', loader: () => import('./physics1-momentum-and-impulse-part1').then(m => m.physics1MomentumAndImpulsePart1Data) },
      { title: 'Impulse', loader: () => import('./physics1-momentum-and-impulse-part2').then(m => m.physics1MomentumAndImpulsePart2Data) },
      { title: 'Impulse-Momentum Theorem', loader: () => import('./physics1-momentum-and-impulse-part3').then(m => m.physics1MomentumAndImpulsePart3Data) },
      { title: 'Force-Time Graphs', loader: () => import('./physics1-momentum-and-impulse-part4').then(m => m.physics1MomentumAndImpulsePart4Data) },
      { title: 'Applications of Impulse', loader: () => import('./physics1-momentum-and-impulse-part5').then(m => m.physics1MomentumAndImpulsePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-momentum-and-impulse-part6').then(m => m.physics1MomentumAndImpulsePart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-momentum-and-impulse-part7').then(m => m.physics1MomentumAndImpulsePart7Data) },
    ],
  },
  'conservation-of-momentum': {
    completionDestination: 'competitive',
    parts: [
      { title: 'System Momentum', loader: () => import('./physics1-conservation-of-momentum-part1').then(m => m.physics1ConservationOfMomentumPart1Data) },
      { title: 'Internal & External Forces', loader: () => import('./physics1-conservation-of-momentum-part2').then(m => m.physics1ConservationOfMomentumPart2Data) },
      { title: 'Conservation Law', loader: () => import('./physics1-conservation-of-momentum-part3').then(m => m.physics1ConservationOfMomentumPart3Data) },
      { title: 'Explosions & Recoil', loader: () => import('./physics1-conservation-of-momentum-part4').then(m => m.physics1ConservationOfMomentumPart4Data) },
      { title: '2D Momentum Conservation', loader: () => import('./physics1-conservation-of-momentum-part5').then(m => m.physics1ConservationOfMomentumPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-conservation-of-momentum-part6').then(m => m.physics1ConservationOfMomentumPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-conservation-of-momentum-part7').then(m => m.physics1ConservationOfMomentumPart7Data) },
    ],
  },
  'collisions': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Types of Collisions', loader: () => import('./physics1-collisions-part1').then(m => m.physics1CollisionsPart1Data) },
      { title: 'Perfectly Inelastic Collisions', loader: () => import('./physics1-collisions-part2').then(m => m.physics1CollisionsPart2Data) },
      { title: 'Elastic Collisions', loader: () => import('./physics1-collisions-part3').then(m => m.physics1CollisionsPart3Data) },
      { title: 'Energy in Collisions', loader: () => import('./physics1-collisions-part4').then(m => m.physics1CollisionsPart4Data) },
      { title: '2D Collision Problems', loader: () => import('./physics1-collisions-part5').then(m => m.physics1CollisionsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-collisions-part6').then(m => m.physics1CollisionsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-collisions-part7').then(m => m.physics1CollisionsPart7Data) },
    ],
  },
  'uniform-circular-motion': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Circular Motion Basics', loader: () => import('./physics1-uniform-circular-motion-part1').then(m => m.physics1UniformCircularMotionPart1Data) },
      { title: 'Period, Frequency & Speed', loader: () => import('./physics1-uniform-circular-motion-part2').then(m => m.physics1UniformCircularMotionPart2Data) },
      { title: 'Centripetal Acceleration', loader: () => import('./physics1-uniform-circular-motion-part3').then(m => m.physics1UniformCircularMotionPart3Data) },
      { title: 'Direction of Velocity & Acceleration', loader: () => import('./physics1-uniform-circular-motion-part4').then(m => m.physics1UniformCircularMotionPart4Data) },
      { title: 'Vertical & Horizontal Circles', loader: () => import('./physics1-uniform-circular-motion-part5').then(m => m.physics1UniformCircularMotionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-uniform-circular-motion-part6').then(m => m.physics1UniformCircularMotionPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-uniform-circular-motion-part7').then(m => m.physics1UniformCircularMotionPart7Data) },
    ],
  },
  'centripetal-force': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Provides Centripetal Force?', loader: () => import('./physics1-centripetal-force-part1').then(m => m.physics1CentripetalForcePart1Data) },
      { title: 'Centripetal Force Equation', loader: () => import('./physics1-centripetal-force-part2').then(m => m.physics1CentripetalForcePart2Data) },
      { title: 'Banked Curves', loader: () => import('./physics1-centripetal-force-part3').then(m => m.physics1CentripetalForcePart3Data) },
      { title: 'Vertical Circles & Loops', loader: () => import('./physics1-centripetal-force-part4').then(m => m.physics1CentripetalForcePart4Data) },
      { title: 'Conical Pendulums', loader: () => import('./physics1-centripetal-force-part5').then(m => m.physics1CentripetalForcePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-centripetal-force-part6').then(m => m.physics1CentripetalForcePart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-centripetal-force-part7').then(m => m.physics1CentripetalForcePart7Data) },
    ],
  },
  'universal-gravitation': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Newton\'s Law of Gravitation', loader: () => import('./physics1-universal-gravitation-part1').then(m => m.physics1UniversalGravitationPart1Data) },
      { title: 'Gravitational Field Strength', loader: () => import('./physics1-universal-gravitation-part2').then(m => m.physics1UniversalGravitationPart2Data) },
      { title: 'Orbits & Satellite Motion', loader: () => import('./physics1-universal-gravitation-part3').then(m => m.physics1UniversalGravitationPart3Data) },
      { title: 'Kepler\'s Laws', loader: () => import('./physics1-universal-gravitation-part4').then(m => m.physics1UniversalGravitationPart4Data) },
      { title: 'Gravitational PE (Universal)', loader: () => import('./physics1-universal-gravitation-part5').then(m => m.physics1UniversalGravitationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-universal-gravitation-part6').then(m => m.physics1UniversalGravitationPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-universal-gravitation-part7').then(m => m.physics1UniversalGravitationPart7Data) },
    ],
  },
  'torque-and-equilibrium': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is Torque?', loader: () => import('./physics1-torque-and-equilibrium-part1').then(m => m.physics1TorqueAndEquilibriumPart1Data) },
      { title: 'Calculating Torque', loader: () => import('./physics1-torque-and-equilibrium-part2').then(m => m.physics1TorqueAndEquilibriumPart2Data) },
      { title: 'Net Torque', loader: () => import('./physics1-torque-and-equilibrium-part3').then(m => m.physics1TorqueAndEquilibriumPart3Data) },
      { title: 'Rotational Equilibrium', loader: () => import('./physics1-torque-and-equilibrium-part4').then(m => m.physics1TorqueAndEquilibriumPart4Data) },
      { title: 'Center of Mass', loader: () => import('./physics1-torque-and-equilibrium-part5').then(m => m.physics1TorqueAndEquilibriumPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-torque-and-equilibrium-part6').then(m => m.physics1TorqueAndEquilibriumPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-torque-and-equilibrium-part7').then(m => m.physics1TorqueAndEquilibriumPart7Data) },
    ],
  },
  'rotational-kinematics': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Angular Displacement & Velocity', loader: () => import('./physics1-rotational-kinematics-part1').then(m => m.physics1RotationalKinematicsPart1Data) },
      { title: 'Angular Acceleration', loader: () => import('./physics1-rotational-kinematics-part2').then(m => m.physics1RotationalKinematicsPart2Data) },
      { title: 'Rotational Kinematic Equations', loader: () => import('./physics1-rotational-kinematics-part3').then(m => m.physics1RotationalKinematicsPart3Data) },
      { title: 'Tangential & Angular Relationships', loader: () => import('./physics1-rotational-kinematics-part4').then(m => m.physics1RotationalKinematicsPart4Data) },
      { title: 'Rotational Inertia', loader: () => import('./physics1-rotational-kinematics-part5').then(m => m.physics1RotationalKinematicsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-rotational-kinematics-part6').then(m => m.physics1RotationalKinematicsPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-rotational-kinematics-part7').then(m => m.physics1RotationalKinematicsPart7Data) },
    ],
  },
  'angular-momentum': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Angular Momentum (L = Iω)', loader: () => import('./physics1-angular-momentum-part1').then(m => m.physics1AngularMomentumPart1Data) },
      { title: 'Conservation of Angular Momentum', loader: () => import('./physics1-angular-momentum-part2').then(m => m.physics1AngularMomentumPart2Data) },
      { title: 'Ice Skater & Spinning Examples', loader: () => import('./physics1-angular-momentum-part3').then(m => m.physics1AngularMomentumPart3Data) },
      { title: 'Angular Impulse', loader: () => import('./physics1-angular-momentum-part4').then(m => m.physics1AngularMomentumPart4Data) },
      { title: 'Rotational Kinetic Energy', loader: () => import('./physics1-angular-momentum-part5').then(m => m.physics1AngularMomentumPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-angular-momentum-part6').then(m => m.physics1AngularMomentumPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-angular-momentum-part7').then(m => m.physics1AngularMomentumPart7Data) },
    ],
  },
  'introduction-to-shm': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is SHM?', loader: () => import('./physics1-introduction-to-shm-part1').then(m => m.physics1IntroductionToShmPart1Data) },
      { title: 'Restoring Force', loader: () => import('./physics1-introduction-to-shm-part2').then(m => m.physics1IntroductionToShmPart2Data) },
      { title: 'Period & Frequency', loader: () => import('./physics1-introduction-to-shm-part3').then(m => m.physics1IntroductionToShmPart3Data) },
      { title: 'Mass-Spring Systems', loader: () => import('./physics1-introduction-to-shm-part4').then(m => m.physics1IntroductionToShmPart4Data) },
      { title: 'Simple Pendulums', loader: () => import('./physics1-introduction-to-shm-part5').then(m => m.physics1IntroductionToShmPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-introduction-to-shm-part6').then(m => m.physics1IntroductionToShmPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-introduction-to-shm-part7').then(m => m.physics1IntroductionToShmPart7Data) },
    ],
  },
  'energy-in-shm': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Energy in Springs', loader: () => import('./physics1-energy-in-shm-part1').then(m => m.physics1EnergyInShmPart1Data) },
      { title: 'Energy in Pendulums', loader: () => import('./physics1-energy-in-shm-part2').then(m => m.physics1EnergyInShmPart2Data) },
      { title: 'KE & PE Graphs in SHM', loader: () => import('./physics1-energy-in-shm-part3').then(m => m.physics1EnergyInShmPart3Data) },
      { title: 'Amplitude & Total Energy', loader: () => import('./physics1-energy-in-shm-part4').then(m => m.physics1EnergyInShmPart4Data) },
      { title: 'Damped Oscillations', loader: () => import('./physics1-energy-in-shm-part5').then(m => m.physics1EnergyInShmPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physics1-energy-in-shm-part6').then(m => m.physics1EnergyInShmPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./physics1-energy-in-shm-part7').then(m => m.physics1EnergyInShmPart7Data) },
    ],
  },

  // ===== AP Biology (25 topics) =====
  'water-properties-biochemistry': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Water Properties', loader: () => import('./bio-water-properties-biochemistry-part1').then(m => m.bioWaterPropertiesPart1Data) },
      { title: 'Hydrogen Bonding', loader: () => import('./bio-water-properties-biochemistry-part2').then(m => m.bioWaterPropertiesPart2Data) },
      { title: 'Cohesion & Adhesion', loader: () => import('./bio-water-properties-biochemistry-part3').then(m => m.bioWaterPropertiesPart3Data) },
      { title: 'Thermal Properties', loader: () => import('./bio-water-properties-biochemistry-part4').then(m => m.bioWaterPropertiesPart4Data) },
      { title: 'pH & Buffers', loader: () => import('./bio-water-properties-biochemistry-part5').then(m => m.bioWaterPropertiesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-water-properties-biochemistry-part6').then(m => m.bioWaterPropertiesPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-water-properties-biochemistry-part7').then(m => m.bioWaterPropertiesPart7Data) },
    ],
  },
  'biological-macromolecules': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Macromolecules', loader: () => import('./bio-biological-macromolecules-part1').then(m => m.bioMacromoleculesPart1Data) },
      { title: 'Carbohydrates', loader: () => import('./bio-biological-macromolecules-part2').then(m => m.bioMacromoleculesPart2Data) },
      { title: 'Lipids', loader: () => import('./bio-biological-macromolecules-part3').then(m => m.bioMacromoleculesPart3Data) },
      { title: 'Proteins', loader: () => import('./bio-biological-macromolecules-part4').then(m => m.bioMacromoleculesPart4Data) },
      { title: 'Nucleic Acids', loader: () => import('./bio-biological-macromolecules-part5').then(m => m.bioMacromoleculesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-biological-macromolecules-part6').then(m => m.bioMacromoleculesPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-biological-macromolecules-part7').then(m => m.bioMacromoleculesPart7Data) },
    ],
  },
  // Dedicated 4-part lessons for each macromolecule (split out from the
  // shared 7-part biological-macromolecules survey above so each topic can
  // surface its own focused entrance/exit quiz).
  'carbohydrates': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Carbohydrates', loader: () => import('./bio-carbohydrates-part1').then(m => m.bioCarbohydratesPart1Data) },
      { title: 'Structure: Mono → Poly', loader: () => import('./bio-biological-macromolecules-part2').then(m => m.bioMacromoleculesPart2Data) },
      { title: 'Function & Biological Significance', loader: () => import('./bio-carbohydrates-part3').then(m => m.bioCarbohydratesPart3Data) },
      { title: 'AP Review', loader: () => import('./bio-carbohydrates-part4').then(m => m.bioCarbohydratesPart4Data) },
    ],
  },
  'lipids': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Lipids', loader: () => import('./bio-lipids-part1').then(m => m.bioLipidsPart1Data) },
      { title: 'Structure: TGs, Phospholipids, Steroids', loader: () => import('./bio-biological-macromolecules-part3').then(m => m.bioMacromoleculesPart3Data) },
      { title: 'Function & Membranes', loader: () => import('./bio-lipids-part3').then(m => m.bioLipidsPart3Data) },
      { title: 'AP Review', loader: () => import('./bio-lipids-part4').then(m => m.bioLipidsPart4Data) },
    ],
  },
  'proteins': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Proteins', loader: () => import('./bio-proteins-part1').then(m => m.bioProteinsPart1Data) },
      { title: 'Structure: Four Levels', loader: () => import('./bio-biological-macromolecules-part4').then(m => m.bioMacromoleculesPart4Data) },
      { title: 'Function & Enzymes', loader: () => import('./bio-proteins-part3').then(m => m.bioProteinsPart3Data) },
      { title: 'AP Review', loader: () => import('./bio-proteins-part4').then(m => m.bioProteinsPart4Data) },
    ],
  },
  'nucleic-acids': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Nucleic Acids', loader: () => import('./bio-nucleic-acids-part1').then(m => m.bioNucleicAcidsPart1Data) },
      { title: 'Structure: Nucleotides & Helix', loader: () => import('./bio-biological-macromolecules-part5').then(m => m.bioMacromoleculesPart5Data) },
      { title: 'Function & Central Dogma', loader: () => import('./bio-nucleic-acids-part3').then(m => m.bioNucleicAcidsPart3Data) },
      { title: 'AP Review', loader: () => import('./bio-nucleic-acids-part4').then(m => m.bioNucleicAcidsPart4Data) },
    ],
  },
  'enzyme-structure-function': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Enzyme Basics', loader: () => import('./bio-enzyme-structure-function-part1').then(m => m.bioEnzymesPart1Data) },
      { title: 'Active Site & Substrate', loader: () => import('./bio-enzyme-structure-function-part2').then(m => m.bioEnzymesPart2Data) },
      { title: 'Factors Affecting Enzymes', loader: () => import('./bio-enzyme-structure-function-part3').then(m => m.bioEnzymesPart3Data) },
      { title: 'Inhibition', loader: () => import('./bio-enzyme-structure-function-part4').then(m => m.bioEnzymesPart4Data) },
      { title: 'Enzyme Kinetics', loader: () => import('./bio-enzyme-structure-function-part5').then(m => m.bioEnzymesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-enzyme-structure-function-part6').then(m => m.bioEnzymesPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-enzyme-structure-function-part7').then(m => m.bioEnzymesPart7Data) },
    ],
  },
  'cell-structure-organelles': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Cell Theory', loader: () => import('./bio-cell-structure-organelles-part1').then(m => m.bioCellStructurePart1Data) },
      { title: 'Prokaryotes vs Eukaryotes', loader: () => import('./bio-cell-structure-organelles-part2').then(m => m.bioCellStructurePart2Data) },
      { title: 'Membrane-Bound Organelles', loader: () => import('./bio-cell-structure-organelles-part3').then(m => m.bioCellStructurePart3Data) },
      { title: 'Endomembrane System', loader: () => import('./bio-cell-structure-organelles-part4').then(m => m.bioCellStructurePart4Data) },
      { title: 'Energy Organelles', loader: () => import('./bio-cell-structure-organelles-part5').then(m => m.bioCellStructurePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-cell-structure-organelles-part6').then(m => m.bioCellStructurePart6Data) },
      { title: 'AP Review', loader: () => import('./bio-cell-structure-organelles-part7').then(m => m.bioCellStructurePart7Data) },
    ],
  },
  'membrane-transport': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Membrane Structure', loader: () => import('./bio-membrane-transport-part1').then(m => m.bioMembraneTransportPart1Data) },
      { title: 'Passive Transport', loader: () => import('./bio-membrane-transport-part2').then(m => m.bioMembraneTransportPart2Data) },
      { title: 'Osmosis', loader: () => import('./bio-membrane-transport-part3').then(m => m.bioMembraneTransportPart3Data) },
      { title: 'Active Transport', loader: () => import('./bio-membrane-transport-part4').then(m => m.bioMembraneTransportPart4Data) },
      { title: 'Bulk Transport', loader: () => import('./bio-membrane-transport-part5').then(m => m.bioMembraneTransportPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-membrane-transport-part6').then(m => m.bioMembraneTransportPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-membrane-transport-part7').then(m => m.bioMembraneTransportPart7Data) },
    ],
  },
  'cell-compartmentalization': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Compartmentalization Overview', loader: () => import('./bio-cell-compartmentalization-part1').then(m => m.bioCellCompartmentPart1Data) },
      { title: 'Organelle Functions', loader: () => import('./bio-cell-compartmentalization-part2').then(m => m.bioCellCompartmentPart2Data) },
      { title: 'Membrane Surfaces', loader: () => import('./bio-cell-compartmentalization-part3').then(m => m.bioCellCompartmentPart3Data) },
      { title: 'Intracellular Transport', loader: () => import('./bio-cell-compartmentalization-part4').then(m => m.bioCellCompartmentPart4Data) },
      { title: 'Endosymbiotic Theory', loader: () => import('./bio-cell-compartmentalization-part5').then(m => m.bioCellCompartmentPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-cell-compartmentalization-part6').then(m => m.bioCellCompartmentPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-cell-compartmentalization-part7').then(m => m.bioCellCompartmentPart7Data) },
    ],
  },
  'cellular-respiration': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Overview of Cell Respiration', loader: () => import('./bio-cellular-respiration-part1').then(m => m.bioCellRespirationPart1Data) },
      { title: 'Glycolysis', loader: () => import('./bio-cellular-respiration-part2').then(m => m.bioCellRespirationPart2Data) },
      { title: 'Pyruvate Oxidation', loader: () => import('./bio-cellular-respiration-part3').then(m => m.bioCellRespirationPart3Data) },
      { title: 'Citric Acid Cycle', loader: () => import('./bio-cellular-respiration-part4').then(m => m.bioCellRespirationPart4Data) },
      { title: 'Oxidative Phosphorylation', loader: () => import('./bio-cellular-respiration-part5').then(m => m.bioCellRespirationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-cellular-respiration-part6').then(m => m.bioCellRespirationPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-cellular-respiration-part7').then(m => m.bioCellRespirationPart7Data) },
    ],
  },
  'photosynthesis': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Light Reactions', loader: () => import('./bio-photosynthesis-part1').then(m => m.bioPhotosynthesisPart1Data) },
      { title: 'Photosystems', loader: () => import('./bio-photosynthesis-part2').then(m => m.bioPhotosynthesisPart2Data) },
      { title: 'Calvin Cycle', loader: () => import('./bio-photosynthesis-part3').then(m => m.bioPhotosynthesisPart3Data) },
      { title: 'C3 vs C4 vs CAM', loader: () => import('./bio-photosynthesis-part4').then(m => m.bioPhotosynthesisPart4Data) },
      { title: 'Photosynthesis Factors', loader: () => import('./bio-photosynthesis-part5').then(m => m.bioPhotosynthesisPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-photosynthesis-part6').then(m => m.bioPhotosynthesisPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-photosynthesis-part7').then(m => m.bioPhotosynthesisPart7Data) },
    ],
  },
  'fitness-environment': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Natural Selection & Fitness', loader: () => import('./bio-fitness-environment-part1').then(m => m.bioFitnessPart1Data) },
      { title: 'Adaptation', loader: () => import('./bio-fitness-environment-part2').then(m => m.bioFitnessPart2Data) },
      { title: 'Phenotypic Plasticity', loader: () => import('./bio-fitness-environment-part3').then(m => m.bioFitnessPart3Data) },
      { title: 'Trade-offs', loader: () => import('./bio-fitness-environment-part4').then(m => m.bioFitnessPart4Data) },
      { title: 'Environmental Variation', loader: () => import('./bio-fitness-environment-part5').then(m => m.bioFitnessPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-fitness-environment-part6').then(m => m.bioFitnessPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-fitness-environment-part7').then(m => m.bioFitnessPart7Data) },
    ],
  },
  'cell-communication-signaling': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Cell Signaling Overview', loader: () => import('./bio-cell-communication-signaling-part1').then(m => m.bioCellCommPart1Data) },
      { title: 'Signal Transduction', loader: () => import('./bio-cell-communication-signaling-part2').then(m => m.bioCellCommPart2Data) },
      { title: 'Second Messengers', loader: () => import('./bio-cell-communication-signaling-part3').then(m => m.bioCellCommPart3Data) },
      { title: 'Response to Signals', loader: () => import('./bio-cell-communication-signaling-part4').then(m => m.bioCellCommPart4Data) },
      { title: 'Feedback Loops', loader: () => import('./bio-cell-communication-signaling-part5').then(m => m.bioCellCommPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-cell-communication-signaling-part6').then(m => m.bioCellCommPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-cell-communication-signaling-part7').then(m => m.bioCellCommPart7Data) },
    ],
  },
  'cell-cycle-mitosis': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Cell Cycle Phases', loader: () => import('./bio-cell-cycle-mitosis-part1').then(m => m.bioCellCyclePart1Data) },
      { title: 'Interphase', loader: () => import('./bio-cell-cycle-mitosis-part2').then(m => m.bioCellCyclePart2Data) },
      { title: 'Mitosis', loader: () => import('./bio-cell-cycle-mitosis-part3').then(m => m.bioCellCyclePart3Data) },
      { title: 'Cytokinesis', loader: () => import('./bio-cell-cycle-mitosis-part4').then(m => m.bioCellCyclePart4Data) },
      { title: 'Cell Cycle Regulation', loader: () => import('./bio-cell-cycle-mitosis-part5').then(m => m.bioCellCyclePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-cell-cycle-mitosis-part6').then(m => m.bioCellCyclePart6Data) },
      { title: 'AP Review', loader: () => import('./bio-cell-cycle-mitosis-part7').then(m => m.bioCellCyclePart7Data) },
    ],
  },
  'feedback-mechanisms': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Positive Feedback', loader: () => import('./bio-feedback-mechanisms-part1').then(m => m.bioFeedbackPart1Data) },
      { title: 'Negative Feedback', loader: () => import('./bio-feedback-mechanisms-part2').then(m => m.bioFeedbackPart2Data) },
      { title: 'Homeostasis', loader: () => import('./bio-feedback-mechanisms-part3').then(m => m.bioFeedbackPart3Data) },
      { title: 'Hormonal Regulation', loader: () => import('./bio-feedback-mechanisms-part4').then(m => m.bioFeedbackPart4Data) },
      { title: 'Thermoregulation', loader: () => import('./bio-feedback-mechanisms-part5').then(m => m.bioFeedbackPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-feedback-mechanisms-part6').then(m => m.bioFeedbackPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-feedback-mechanisms-part7').then(m => m.bioFeedbackPart7Data) },
    ],
  },
  'meiosis-genetic-diversity': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Meiosis Overview', loader: () => import('./bio-meiosis-genetic-diversity-part1').then(m => m.bioMeiosisPart1Data) },
      { title: 'Meiosis I', loader: () => import('./bio-meiosis-genetic-diversity-part2').then(m => m.bioMeiosisPart2Data) },
      { title: 'Meiosis II', loader: () => import('./bio-meiosis-genetic-diversity-part3').then(m => m.bioMeiosisPart3Data) },
      { title: 'Crossing Over', loader: () => import('./bio-meiosis-genetic-diversity-part4').then(m => m.bioMeiosisPart4Data) },
      { title: 'Independent Assortment', loader: () => import('./bio-meiosis-genetic-diversity-part5').then(m => m.bioMeiosisPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-meiosis-genetic-diversity-part6').then(m => m.bioMeiosisPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-meiosis-genetic-diversity-part7').then(m => m.bioMeiosisPart7Data) },
    ],
  },
  'mendelian-genetics': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Mendel\'s Laws', loader: () => import('./bio-mendelian-genetics-part1').then(m => m.bioMendelianPart1Data) },
      { title: 'Monohybrid Crosses', loader: () => import('./bio-mendelian-genetics-part2').then(m => m.bioMendelianPart2Data) },
      { title: 'Dihybrid Crosses', loader: () => import('./bio-mendelian-genetics-part3').then(m => m.bioMendelianPart3Data) },
      { title: 'Probability in Genetics', loader: () => import('./bio-mendelian-genetics-part4').then(m => m.bioMendelianPart4Data) },
      { title: 'Pedigree Analysis', loader: () => import('./bio-mendelian-genetics-part5').then(m => m.bioMendelianPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-mendelian-genetics-part6').then(m => m.bioMendelianPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-mendelian-genetics-part7').then(m => m.bioMendelianPart7Data) },
    ],
  },
  'non-mendelian-genetics': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Incomplete Dominance', loader: () => import('./bio-non-mendelian-genetics-part1').then(m => m.bioNonMendelianPart1Data) },
      { title: 'Codominance', loader: () => import('./bio-non-mendelian-genetics-part2').then(m => m.bioNonMendelianPart2Data) },
      { title: 'Multiple Alleles', loader: () => import('./bio-non-mendelian-genetics-part3').then(m => m.bioNonMendelianPart3Data) },
      { title: 'Polygenic Traits', loader: () => import('./bio-non-mendelian-genetics-part4').then(m => m.bioNonMendelianPart4Data) },
      { title: 'Epistasis', loader: () => import('./bio-non-mendelian-genetics-part5').then(m => m.bioNonMendelianPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-non-mendelian-genetics-part6').then(m => m.bioNonMendelianPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-non-mendelian-genetics-part7').then(m => m.bioNonMendelianPart7Data) },
    ],
  },
  'dna-replication': {
    completionDestination: 'competitive',
    parts: [
      { title: 'DNA Structure', loader: () => import('./bio-dna-replication-part1').then(m => m.bioDnaReplicationPart1Data) },
      { title: 'Semiconservative Replication', loader: () => import('./bio-dna-replication-part2').then(m => m.bioDnaReplicationPart2Data) },
      { title: 'Enzymes of Replication', loader: () => import('./bio-dna-replication-part3').then(m => m.bioDnaReplicationPart3Data) },
      { title: 'Leading vs Lagging Strand', loader: () => import('./bio-dna-replication-part4').then(m => m.bioDnaReplicationPart4Data) },
      { title: 'Proofreading & Repair', loader: () => import('./bio-dna-replication-part5').then(m => m.bioDnaReplicationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-dna-replication-part6').then(m => m.bioDnaReplicationPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-dna-replication-part7').then(m => m.bioDnaReplicationPart7Data) },
    ],
  },
  'transcription-translation': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Gene Expression Overview', loader: () => import('./bio-transcription-translation-part1').then(m => m.bioTranscriptionPart1Data) },
      { title: 'Transcription', loader: () => import('./bio-transcription-translation-part2').then(m => m.bioTranscriptionPart2Data) },
      { title: 'RNA Processing', loader: () => import('./bio-transcription-translation-part3').then(m => m.bioTranscriptionPart3Data) },
      { title: 'Translation', loader: () => import('./bio-transcription-translation-part4').then(m => m.bioTranscriptionPart4Data) },
      { title: 'Post-Translational Modification', loader: () => import('./bio-transcription-translation-part5').then(m => m.bioTranscriptionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-transcription-translation-part6').then(m => m.bioTranscriptionPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-transcription-translation-part7').then(m => m.bioTranscriptionPart7Data) },
    ],
  },
  'gene-regulation': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Gene Regulation Overview', loader: () => import('./bio-gene-regulation-part1').then(m => m.bioGeneRegPart1Data) },
      { title: 'Prokaryotic Regulation', loader: () => import('./bio-gene-regulation-part2').then(m => m.bioGeneRegPart2Data) },
      { title: 'Eukaryotic Regulation', loader: () => import('./bio-gene-regulation-part3').then(m => m.bioGeneRegPart3Data) },
      { title: 'Epigenetics', loader: () => import('./bio-gene-regulation-part4').then(m => m.bioGeneRegPart4Data) },
      { title: 'RNA Interference', loader: () => import('./bio-gene-regulation-part5').then(m => m.bioGeneRegPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-gene-regulation-part6').then(m => m.bioGeneRegPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-gene-regulation-part7').then(m => m.bioGeneRegPart7Data) },
    ],
  },
  'biotechnology': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Restriction Enzymes', loader: () => import('./bio-biotechnology-part1').then(m => m.bioBiotechPart1Data) },
      { title: 'Gel Electrophoresis', loader: () => import('./bio-biotechnology-part2').then(m => m.bioBiotechPart2Data) },
      { title: 'PCR', loader: () => import('./bio-biotechnology-part3').then(m => m.bioBiotechPart3Data) },
      { title: 'Gene Cloning', loader: () => import('./bio-biotechnology-part4').then(m => m.bioBiotechPart4Data) },
      { title: 'CRISPR & Gene Editing', loader: () => import('./bio-biotechnology-part5').then(m => m.bioBiotechPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-biotechnology-part6').then(m => m.bioBiotechPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-biotechnology-part7').then(m => m.bioBiotechPart7Data) },
    ],
  },
  'evidence-evolution': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Fossil Record', loader: () => import('./bio-evidence-evolution-part1').then(m => m.bioEvidencePart1Data) },
      { title: 'Homologous Structures', loader: () => import('./bio-evidence-evolution-part2').then(m => m.bioEvidencePart2Data) },
      { title: 'Molecular Evidence', loader: () => import('./bio-evidence-evolution-part3').then(m => m.bioEvidencePart3Data) },
      { title: 'Biogeography', loader: () => import('./bio-evidence-evolution-part4').then(m => m.bioEvidencePart4Data) },
      { title: 'Direct Observation', loader: () => import('./bio-evidence-evolution-part5').then(m => m.bioEvidencePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-evidence-evolution-part6').then(m => m.bioEvidencePart6Data) },
      { title: 'AP Review', loader: () => import('./bio-evidence-evolution-part7').then(m => m.bioEvidencePart7Data) },
    ],
  },
  'natural-selection-adaptation': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Darwin\'s Theory', loader: () => import('./bio-natural-selection-adaptation-part1').then(m => m.bioNatSelectionPart1Data) },
      { title: 'Types of Selection', loader: () => import('./bio-natural-selection-adaptation-part2').then(m => m.bioNatSelectionPart2Data) },
      { title: 'Sexual Selection', loader: () => import('./bio-natural-selection-adaptation-part3').then(m => m.bioNatSelectionPart3Data) },
      { title: 'Adaptation Mechanisms', loader: () => import('./bio-natural-selection-adaptation-part4').then(m => m.bioNatSelectionPart4Data) },
      { title: 'Hardy-Weinberg', loader: () => import('./bio-natural-selection-adaptation-part5').then(m => m.bioNatSelectionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-natural-selection-adaptation-part6').then(m => m.bioNatSelectionPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-natural-selection-adaptation-part7').then(m => m.bioNatSelectionPart7Data) },
    ],
  },
  'speciation-macroevolution': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Species Concepts', loader: () => import('./bio-speciation-macroevolution-part1').then(m => m.bioSpeciationPart1Data) },
      { title: 'Allopatric Speciation', loader: () => import('./bio-speciation-macroevolution-part2').then(m => m.bioSpeciationPart2Data) },
      { title: 'Sympatric Speciation', loader: () => import('./bio-speciation-macroevolution-part3').then(m => m.bioSpeciationPart3Data) },
      { title: 'Reproductive Isolation', loader: () => import('./bio-speciation-macroevolution-part4').then(m => m.bioSpeciationPart4Data) },
      { title: 'Macroevolution Patterns', loader: () => import('./bio-speciation-macroevolution-part5').then(m => m.bioSpeciationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-speciation-macroevolution-part6').then(m => m.bioSpeciationPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-speciation-macroevolution-part7').then(m => m.bioSpeciationPart7Data) },
    ],
  },
  'ecology-ecosystems': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Ecosystem Components', loader: () => import('./bio-ecology-ecosystems-part1').then(m => m.bioEcologyPart1Data) },
      { title: 'Energy Flow', loader: () => import('./bio-ecology-ecosystems-part2').then(m => m.bioEcologyPart2Data) },
      { title: 'Biogeochemical Cycles', loader: () => import('./bio-ecology-ecosystems-part3').then(m => m.bioEcologyPart3Data) },
      { title: 'Community Interactions', loader: () => import('./bio-ecology-ecosystems-part4').then(m => m.bioEcologyPart4Data) },
      { title: 'Ecological Succession', loader: () => import('./bio-ecology-ecosystems-part5').then(m => m.bioEcologyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-ecology-ecosystems-part6').then(m => m.bioEcologyPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-ecology-ecosystems-part7').then(m => m.bioEcologyPart7Data) },
    ],
  },
  'energy-flow-nutrient-cycling': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Trophic Levels', loader: () => import('./bio-energy-flow-nutrient-cycling-part1').then(m => m.bioEnergyFlowPart1Data) },
      { title: 'Food Webs', loader: () => import('./bio-energy-flow-nutrient-cycling-part2').then(m => m.bioEnergyFlowPart2Data) },
      { title: 'Ecological Pyramids', loader: () => import('./bio-energy-flow-nutrient-cycling-part3').then(m => m.bioEnergyFlowPart3Data) },
      { title: 'Carbon Cycle', loader: () => import('./bio-energy-flow-nutrient-cycling-part4').then(m => m.bioEnergyFlowPart4Data) },
      { title: 'Nitrogen Cycle', loader: () => import('./bio-energy-flow-nutrient-cycling-part5').then(m => m.bioEnergyFlowPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-energy-flow-nutrient-cycling-part6').then(m => m.bioEnergyFlowPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-energy-flow-nutrient-cycling-part7').then(m => m.bioEnergyFlowPart7Data) },
    ],
  },
  'population-community-ecology': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Population Growth', loader: () => import('./bio-population-community-ecology-part1').then(m => m.bioPopulationPart1Data) },
      { title: 'Carrying Capacity', loader: () => import('./bio-population-community-ecology-part2').then(m => m.bioPopulationPart2Data) },
      { title: 'r vs K Selection', loader: () => import('./bio-population-community-ecology-part3').then(m => m.bioPopulationPart3Data) },
      { title: 'Community Ecology', loader: () => import('./bio-population-community-ecology-part4').then(m => m.bioPopulationPart4Data) },
      { title: 'Biodiversity', loader: () => import('./bio-population-community-ecology-part5').then(m => m.bioPopulationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-population-community-ecology-part6').then(m => m.bioPopulationPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-population-community-ecology-part7').then(m => m.bioPopulationPart7Data) },
    ],
  },

  'hardy-weinberg-equilibrium': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Hardy-Weinberg', loader: () => import('./bio-hardy-weinberg-equilibrium-part1').then(m => m.bioHardyWeinbergEquilibriumPart1Data) },
      { title: 'Allele Frequencies', loader: () => import('./bio-hardy-weinberg-equilibrium-part2').then(m => m.bioHardyWeinbergEquilibriumPart2Data) },
      { title: 'The HW Equation', loader: () => import('./bio-hardy-weinberg-equilibrium-part3').then(m => m.bioHardyWeinbergEquilibriumPart3Data) },
      { title: 'Conditions for Equilibrium', loader: () => import('./bio-hardy-weinberg-equilibrium-part4').then(m => m.bioHardyWeinbergEquilibriumPart4Data) },
      { title: 'Disrupting Forces', loader: () => import('./bio-hardy-weinberg-equilibrium-part5').then(m => m.bioHardyWeinbergEquilibriumPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-hardy-weinberg-equilibrium-part6').then(m => m.bioHardyWeinbergEquilibriumPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-hardy-weinberg-equilibrium-part7').then(m => m.bioHardyWeinbergEquilibriumPart7Data) },
    ],
  },
  'phylogenetics-cladistics': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Phylogenetics', loader: () => import('./bio-phylogenetics-cladistics-part1').then(m => m.bioPhylogeneticsCladisticsPart1Data) },
      { title: 'Cladogram Construction', loader: () => import('./bio-phylogenetics-cladistics-part2').then(m => m.bioPhylogeneticsCladisticsPart2Data) },
      { title: 'Shared Derived Characters', loader: () => import('./bio-phylogenetics-cladistics-part3').then(m => m.bioPhylogeneticsCladisticsPart3Data) },
      { title: 'Molecular Phylogenetics', loader: () => import('./bio-phylogenetics-cladistics-part4').then(m => m.bioPhylogeneticsCladisticsPart4Data) },
      { title: 'Reading Phylogenetic Trees', loader: () => import('./bio-phylogenetics-cladistics-part5').then(m => m.bioPhylogeneticsCladisticsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-phylogenetics-cladistics-part6').then(m => m.bioPhylogeneticsCladisticsPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-phylogenetics-cladistics-part7').then(m => m.bioPhylogeneticsCladisticsPart7Data) },
    ],
  },
  'dna-technology-genomics': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Restriction Enzymes & Gel Electrophoresis', loader: () => import('./bio-dna-technology-genomics-part1').then(m => m.bioDnaTechnologyGenomicsPart1Data) },
      { title: 'PCR & Cloning', loader: () => import('./bio-dna-technology-genomics-part2').then(m => m.bioDnaTechnologyGenomicsPart2Data) },
      { title: 'Gene Expression Analysis', loader: () => import('./bio-dna-technology-genomics-part3').then(m => m.bioDnaTechnologyGenomicsPart3Data) },
      { title: 'CRISPR & Gene Editing', loader: () => import('./bio-dna-technology-genomics-part4').then(m => m.bioDnaTechnologyGenomicsPart4Data) },
      { title: 'Genomics & Bioinformatics', loader: () => import('./bio-dna-technology-genomics-part5').then(m => m.bioDnaTechnologyGenomicsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-dna-technology-genomics-part6').then(m => m.bioDnaTechnologyGenomicsPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-dna-technology-genomics-part7').then(m => m.bioDnaTechnologyGenomicsPart7Data) },
    ],
  },
  'immune-system-response': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Innate Immunity', loader: () => import('./bio-immune-system-response-part1').then(m => m.bioImmuneSystemResponsePart1Data) },
      { title: 'Adaptive Immunity Overview', loader: () => import('./bio-immune-system-response-part2').then(m => m.bioImmuneSystemResponsePart2Data) },
      { title: 'Humoral Immunity', loader: () => import('./bio-immune-system-response-part3').then(m => m.bioImmuneSystemResponsePart3Data) },
      { title: 'Cell-Mediated Immunity', loader: () => import('./bio-immune-system-response-part4').then(m => m.bioImmuneSystemResponsePart4Data) },
      { title: 'Immune Memory & Vaccination', loader: () => import('./bio-immune-system-response-part5').then(m => m.bioImmuneSystemResponsePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-immune-system-response-part6').then(m => m.bioImmuneSystemResponsePart6Data) },
      { title: 'AP Review', loader: () => import('./bio-immune-system-response-part7').then(m => m.bioImmuneSystemResponsePart7Data) },
    ],
  },
  'biogeochemical-cycles': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Carbon Cycle', loader: () => import('./bio-biogeochemical-cycles-part1').then(m => m.bioBiogeochemicalCyclesPart1Data) },
      { title: 'Nitrogen Cycle', loader: () => import('./bio-biogeochemical-cycles-part2').then(m => m.bioBiogeochemicalCyclesPart2Data) },
      { title: 'Phosphorus Cycle', loader: () => import('./bio-biogeochemical-cycles-part3').then(m => m.bioBiogeochemicalCyclesPart3Data) },
      { title: 'Water Cycle', loader: () => import('./bio-biogeochemical-cycles-part4').then(m => m.bioBiogeochemicalCyclesPart4Data) },
      { title: 'Human Impact', loader: () => import('./bio-biogeochemical-cycles-part5').then(m => m.bioBiogeochemicalCyclesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-biogeochemical-cycles-part6').then(m => m.bioBiogeochemicalCyclesPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-biogeochemical-cycles-part7').then(m => m.bioBiogeochemicalCyclesPart7Data) },
    ],
  },
  'plant-structure-function': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Plant Tissues & Organs', loader: () => import('./bio-plant-structure-function-part1').then(m => m.bioPlantStructureFunctionPart1Data) },
      { title: 'Water Transport', loader: () => import('./bio-plant-structure-function-part2').then(m => m.bioPlantStructureFunctionPart2Data) },
      { title: 'Sugar Transport', loader: () => import('./bio-plant-structure-function-part3').then(m => m.bioPlantStructureFunctionPart3Data) },
      { title: 'Gas Exchange & Stomata', loader: () => import('./bio-plant-structure-function-part4').then(m => m.bioPlantStructureFunctionPart4Data) },
      { title: 'Plant Hormones', loader: () => import('./bio-plant-structure-function-part5').then(m => m.bioPlantStructureFunctionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./bio-plant-structure-function-part6').then(m => m.bioPlantStructureFunctionPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-plant-structure-function-part7').then(m => m.bioPlantStructureFunctionPart7Data) },
    ],
  },
  'animal-behavior': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Innate vs Learned Behavior', loader: () => import('./bio-animal-behavior-part1').then(m => m.bioAnimalBehaviorPart1Data) },
      { title: 'Types of Learning', loader: () => import('./bio-animal-behavior-part2').then(m => m.bioAnimalBehaviorPart2Data) },
      { title: 'Foraging Behavior', loader: () => import('./bio-animal-behavior-part3').then(m => m.bioAnimalBehaviorPart3Data) },
      { title: 'Communication & Signals', loader: () => import('./bio-animal-behavior-part4').then(m => m.bioAnimalBehaviorPart4Data) },
      { title: 'Mating & Reproductive Behavior', loader: () => import('./bio-animal-behavior-part5').then(m => m.bioAnimalBehaviorPart5Data) },
      { title: 'Social Behavior & Altruism', loader: () => import('./bio-animal-behavior-part6').then(m => m.bioAnimalBehaviorPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-animal-behavior-part7').then(m => m.bioAnimalBehaviorPart7Data) },
    ],
  },
  'chromosomal-inheritance-patterns': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Chromosome Theory', loader: () => import('./bio-chromosomal-inheritance-patterns-part1').then(m => m.bioChromosomalInheritancePatternsPart1Data) },
      { title: 'Sex-Linked Traits', loader: () => import('./bio-chromosomal-inheritance-patterns-part2').then(m => m.bioChromosomalInheritancePatternsPart2Data) },
      { title: 'Linked Genes & Recombination', loader: () => import('./bio-chromosomal-inheritance-patterns-part3').then(m => m.bioChromosomalInheritancePatternsPart3Data) },
      { title: 'Chromosomal Mutations', loader: () => import('./bio-chromosomal-inheritance-patterns-part4').then(m => m.bioChromosomalInheritancePatternsPart4Data) },
      { title: 'Structural Changes', loader: () => import('./bio-chromosomal-inheritance-patterns-part5').then(m => m.bioChromosomalInheritancePatternsPart5Data) },
      { title: 'Genomic Imprinting', loader: () => import('./bio-chromosomal-inheritance-patterns-part6').then(m => m.bioChromosomalInheritancePatternsPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-chromosomal-inheritance-patterns-part7').then(m => m.bioChromosomalInheritancePatternsPart7Data) },
    ],
  },
  'viral-biology': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Virus Structure', loader: () => import('./bio-viral-biology-part1').then(m => m.bioViralBiologyPart1Data) },
      { title: 'Bacteriophage Life Cycles', loader: () => import('./bio-viral-biology-part2').then(m => m.bioViralBiologyPart2Data) },
      { title: 'Animal Virus Replication', loader: () => import('./bio-viral-biology-part3').then(m => m.bioViralBiologyPart3Data) },
      { title: 'Retroviruses & HIV', loader: () => import('./bio-viral-biology-part4').then(m => m.bioViralBiologyPart4Data) },
      { title: 'Viral Evolution', loader: () => import('./bio-viral-biology-part5').then(m => m.bioViralBiologyPart5Data) },
      { title: 'Viroids & Prions', loader: () => import('./bio-viral-biology-part6').then(m => m.bioViralBiologyPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-viral-biology-part7').then(m => m.bioViralBiologyPart7Data) },
    ],
  },
  'nervous-system-signaling': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Neuron Structure', loader: () => import('./bio-nervous-system-signaling-part1').then(m => m.bioNervousSystemSignalingPart1Data) },
      { title: 'Resting Potential', loader: () => import('./bio-nervous-system-signaling-part2').then(m => m.bioNervousSystemSignalingPart2Data) },
      { title: 'Action Potential', loader: () => import('./bio-nervous-system-signaling-part3').then(m => m.bioNervousSystemSignalingPart3Data) },
      { title: 'Signal Propagation', loader: () => import('./bio-nervous-system-signaling-part4').then(m => m.bioNervousSystemSignalingPart4Data) },
      { title: 'Synaptic Transmission', loader: () => import('./bio-nervous-system-signaling-part5').then(m => m.bioNervousSystemSignalingPart5Data) },
      { title: 'Neurotransmitters', loader: () => import('./bio-nervous-system-signaling-part6').then(m => m.bioNervousSystemSignalingPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-nervous-system-signaling-part7').then(m => m.bioNervousSystemSignalingPart7Data) },
    ],
  },
  'endocrine-system': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Endocrine Overview', loader: () => import('./bio-endocrine-system-part1').then(m => m.bioEndocrineSystemPart1Data) },
      { title: 'Hormone Mechanisms', loader: () => import('./bio-endocrine-system-part2').then(m => m.bioEndocrineSystemPart2Data) },
      { title: 'Hypothalamus-Pituitary Axis', loader: () => import('./bio-endocrine-system-part3').then(m => m.bioEndocrineSystemPart3Data) },
      { title: 'Feedback Loops', loader: () => import('./bio-endocrine-system-part4').then(m => m.bioEndocrineSystemPart4Data) },
      { title: 'Adrenal & Pancreatic Hormones', loader: () => import('./bio-endocrine-system-part5').then(m => m.bioEndocrineSystemPart5Data) },
      { title: 'Reproductive Hormones', loader: () => import('./bio-endocrine-system-part6').then(m => m.bioEndocrineSystemPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-endocrine-system-part7').then(m => m.bioEndocrineSystemPart7Data) },
    ],
  },
  'origins-of-life': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Early Earth Conditions', loader: () => import('./bio-origins-of-life-part1').then(m => m.bioOriginsOfLifePart1Data) },
      { title: 'Abiogenesis', loader: () => import('./bio-origins-of-life-part2').then(m => m.bioOriginsOfLifePart2Data) },
      { title: 'RNA World', loader: () => import('./bio-origins-of-life-part3').then(m => m.bioOriginsOfLifePart3Data) },
      { title: 'Protocells & First Cells', loader: () => import('./bio-origins-of-life-part4').then(m => m.bioOriginsOfLifePart4Data) },
      { title: 'Endosymbiotic Theory', loader: () => import('./bio-origins-of-life-part5').then(m => m.bioOriginsOfLifePart5Data) },
      { title: 'Major Evolutionary Transitions', loader: () => import('./bio-origins-of-life-part6').then(m => m.bioOriginsOfLifePart6Data) },
      { title: 'AP Review', loader: () => import('./bio-origins-of-life-part7').then(m => m.bioOriginsOfLifePart7Data) },
    ],
  },
  'biodiversity-conservation': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Biodiversity Levels', loader: () => import('./bio-biodiversity-conservation-part1').then(m => m.bioBiodiversityConservationPart1Data) },
      { title: 'Measuring Biodiversity', loader: () => import('./bio-biodiversity-conservation-part2').then(m => m.bioBiodiversityConservationPart2Data) },
      { title: 'Threats to Biodiversity', loader: () => import('./bio-biodiversity-conservation-part3').then(m => m.bioBiodiversityConservationPart3Data) },
      { title: 'Population Conservation', loader: () => import('./bio-biodiversity-conservation-part4').then(m => m.bioBiodiversityConservationPart4Data) },
      { title: 'Conservation Strategies', loader: () => import('./bio-biodiversity-conservation-part5').then(m => m.bioBiodiversityConservationPart5Data) },
      { title: 'Ecosystem Services', loader: () => import('./bio-biodiversity-conservation-part6').then(m => m.bioBiodiversityConservationPart6Data) },
      { title: 'AP Review', loader: () => import('./bio-biodiversity-conservation-part7').then(m => m.bioBiodiversityConservationPart7Data) },
    ],
  },

  // ===== AP Psychology (23 topics) =====
  'history-approaches-psychology': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Origins of Psychology', loader: () => import('./psych-history-approaches-psychology-part1').then(m => m.psychHistoryApproachesPart1Data) },
      { title: 'Major Perspectives', loader: () => import('./psych-history-approaches-psychology-part2').then(m => m.psychHistoryApproachesPart2Data) },
      { title: 'Research Methods', loader: () => import('./psych-history-approaches-psychology-part3').then(m => m.psychHistoryApproachesPart3Data) },
      { title: 'Ethics in Research', loader: () => import('./psych-history-approaches-psychology-part4').then(m => m.psychHistoryApproachesPart4Data) },
      { title: 'Statistics in Psychology', loader: () => import('./psych-history-approaches-psychology-part5').then(m => m.psychHistoryApproachesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-history-approaches-psychology-part6').then(m => m.psychHistoryApproachesPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-history-approaches-psychology-part7').then(m => m.psychHistoryApproachesPart7Data) },
    ],
  },
  'biological-bases-brain': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Neural Communication', loader: () => import('./psych-biological-bases-brain-part1').then(m => m.psychBrainPart1Data) },
      { title: 'Brain Structure', loader: () => import('./psych-biological-bases-brain-part2').then(m => m.psychBrainPart2Data) },
      { title: 'Cerebral Cortex', loader: () => import('./psych-biological-bases-brain-part3').then(m => m.psychBrainPart3Data) },
      { title: 'Brain Imaging', loader: () => import('./psych-biological-bases-brain-part4').then(m => m.psychBrainPart4Data) },
      { title: 'Nervous System Divisions', loader: () => import('./psych-biological-bases-brain-part5').then(m => m.psychBrainPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-biological-bases-brain-part6').then(m => m.psychBrainPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-biological-bases-brain-part7').then(m => m.psychBrainPart7Data) },
    ],
  },
  'genetics-behavior': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Behavioral Genetics', loader: () => import('./psych-genetics-behavior-part1').then(m => m.psychGeneticsPart1Data) },
      { title: 'Twin Studies', loader: () => import('./psych-genetics-behavior-part2').then(m => m.psychGeneticsPart2Data) },
      { title: 'Gene-Environment Interaction', loader: () => import('./psych-genetics-behavior-part3').then(m => m.psychGeneticsPart3Data) },
      { title: 'Evolutionary Psychology', loader: () => import('./psych-genetics-behavior-part4').then(m => m.psychGeneticsPart4Data) },
      { title: 'Nature vs Nurture', loader: () => import('./psych-genetics-behavior-part5').then(m => m.psychGeneticsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-genetics-behavior-part6').then(m => m.psychGeneticsPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-genetics-behavior-part7').then(m => m.psychGeneticsPart7Data) },
    ],
  },
  'sensation-sensory-processing': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Sensation Basics', loader: () => import('./psych-sensation-sensory-processing-part1').then(m => m.psychSensationPart1Data) },
      { title: 'Vision', loader: () => import('./psych-sensation-sensory-processing-part2').then(m => m.psychSensationPart2Data) },
      { title: 'Hearing', loader: () => import('./psych-sensation-sensory-processing-part3').then(m => m.psychSensationPart3Data) },
      { title: 'Chemical Senses', loader: () => import('./psych-sensation-sensory-processing-part4').then(m => m.psychSensationPart4Data) },
      { title: 'Somatosensation', loader: () => import('./psych-sensation-sensory-processing-part5').then(m => m.psychSensationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-sensation-sensory-processing-part6').then(m => m.psychSensationPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-sensation-sensory-processing-part7').then(m => m.psychSensationPart7Data) },
    ],
  },
  'perception-attention': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Perceptual Organization', loader: () => import('./psych-perception-attention-part1').then(m => m.psychPerceptionPart1Data) },
      { title: 'Depth Perception', loader: () => import('./psych-perception-attention-part2').then(m => m.psychPerceptionPart2Data) },
      { title: 'Visual Illusions', loader: () => import('./psych-perception-attention-part3').then(m => m.psychPerceptionPart3Data) },
      { title: 'Attention', loader: () => import('./psych-perception-attention-part4').then(m => m.psychPerceptionPart4Data) },
      { title: 'Selective Attention', loader: () => import('./psych-perception-attention-part5').then(m => m.psychPerceptionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-perception-attention-part6').then(m => m.psychPerceptionPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-perception-attention-part7').then(m => m.psychPerceptionPart7Data) },
    ],
  },
  'classical-conditioning': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Pavlov\'s Experiments', loader: () => import('./psych-classical-conditioning-part1').then(m => m.psychClassicalPart1Data) },
      { title: 'Acquisition & Extinction', loader: () => import('./psych-classical-conditioning-part2').then(m => m.psychClassicalPart2Data) },
      { title: 'Generalization & Discrimination', loader: () => import('./psych-classical-conditioning-part3').then(m => m.psychClassicalPart3Data) },
      { title: 'Higher-Order Conditioning', loader: () => import('./psych-classical-conditioning-part4').then(m => m.psychClassicalPart4Data) },
      { title: 'Applications', loader: () => import('./psych-classical-conditioning-part5').then(m => m.psychClassicalPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-classical-conditioning-part6').then(m => m.psychClassicalPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-classical-conditioning-part7').then(m => m.psychClassicalPart7Data) },
    ],
  },
  'operant-conditioning': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Thorndike & Skinner', loader: () => import('./psych-operant-conditioning-part1').then(m => m.psychOperantPart1Data) },
      { title: 'Reinforcement Types', loader: () => import('./psych-operant-conditioning-part2').then(m => m.psychOperantPart2Data) },
      { title: 'Punishment', loader: () => import('./psych-operant-conditioning-part3').then(m => m.psychOperantPart3Data) },
      { title: 'Schedules of Reinforcement', loader: () => import('./psych-operant-conditioning-part4').then(m => m.psychOperantPart4Data) },
      { title: 'Shaping', loader: () => import('./psych-operant-conditioning-part5').then(m => m.psychOperantPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-operant-conditioning-part6').then(m => m.psychOperantPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-operant-conditioning-part7').then(m => m.psychOperantPart7Data) },
    ],
  },
  'observational-learning-cognition': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Bandura\'s Bobo Doll', loader: () => import('./psych-observational-learning-cognition-part1').then(m => m.psychObservationalPart1Data) },
      { title: 'Mirror Neurons', loader: () => import('./psych-observational-learning-cognition-part2').then(m => m.psychObservationalPart2Data) },
      { title: 'Cognitive Maps', loader: () => import('./psych-observational-learning-cognition-part3').then(m => m.psychObservationalPart3Data) },
      { title: 'Latent Learning', loader: () => import('./psych-observational-learning-cognition-part4').then(m => m.psychObservationalPart4Data) },
      { title: 'Insight Learning', loader: () => import('./psych-observational-learning-cognition-part5').then(m => m.psychObservationalPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-observational-learning-cognition-part6').then(m => m.psychObservationalPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-observational-learning-cognition-part7').then(m => m.psychObservationalPart7Data) },
    ],
  },
  'memory-encoding-storage': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Memory Models', loader: () => import('./psych-memory-encoding-storage-part1').then(m => m.psychMemoryEncodePart1Data) },
      { title: 'Sensory Memory', loader: () => import('./psych-memory-encoding-storage-part2').then(m => m.psychMemoryEncodePart2Data) },
      { title: 'Short-Term & Working Memory', loader: () => import('./psych-memory-encoding-storage-part3').then(m => m.psychMemoryEncodePart3Data) },
      { title: 'Long-Term Memory', loader: () => import('./psych-memory-encoding-storage-part4').then(m => m.psychMemoryEncodePart4Data) },
      { title: 'Encoding Strategies', loader: () => import('./psych-memory-encoding-storage-part5').then(m => m.psychMemoryEncodePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-memory-encoding-storage-part6').then(m => m.psychMemoryEncodePart6Data) },
      { title: 'AP Review', loader: () => import('./psych-memory-encoding-storage-part7').then(m => m.psychMemoryEncodePart7Data) },
    ],
  },
  'retrieval-forgetting': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Retrieval Cues', loader: () => import('./psych-retrieval-forgetting-part1').then(m => m.psychRetrievalPart1Data) },
      { title: 'Recall vs Recognition', loader: () => import('./psych-retrieval-forgetting-part2').then(m => m.psychRetrievalPart2Data) },
      { title: 'Forgetting Curve', loader: () => import('./psych-retrieval-forgetting-part3').then(m => m.psychRetrievalPart3Data) },
      { title: 'Interference Theory', loader: () => import('./psych-retrieval-forgetting-part4').then(m => m.psychRetrievalPart4Data) },
      { title: 'Memory Distortion', loader: () => import('./psych-retrieval-forgetting-part5').then(m => m.psychRetrievalPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-retrieval-forgetting-part6').then(m => m.psychRetrievalPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-retrieval-forgetting-part7').then(m => m.psychRetrievalPart7Data) },
    ],
  },
  'thinking-problem-solving': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Concepts & Prototypes', loader: () => import('./psych-thinking-problem-solving-part1').then(m => m.psychThinkingPart1Data) },
      { title: 'Problem-Solving Strategies', loader: () => import('./psych-thinking-problem-solving-part2').then(m => m.psychThinkingPart2Data) },
      { title: 'Heuristics & Biases', loader: () => import('./psych-thinking-problem-solving-part3').then(m => m.psychThinkingPart3Data) },
      { title: 'Decision Making', loader: () => import('./psych-thinking-problem-solving-part4').then(m => m.psychThinkingPart4Data) },
      { title: 'Creativity', loader: () => import('./psych-thinking-problem-solving-part5').then(m => m.psychThinkingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-thinking-problem-solving-part6').then(m => m.psychThinkingPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-thinking-problem-solving-part7').then(m => m.psychThinkingPart7Data) },
    ],
  },
  'language-intelligence': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Language Development', loader: () => import('./psych-language-intelligence-part1').then(m => m.psychLanguagePart1Data) },
      { title: 'Language Theories', loader: () => import('./psych-language-intelligence-part2').then(m => m.psychLanguagePart2Data) },
      { title: 'Intelligence Theories', loader: () => import('./psych-language-intelligence-part3').then(m => m.psychLanguagePart3Data) },
      { title: 'IQ Testing', loader: () => import('./psych-language-intelligence-part4').then(m => m.psychLanguagePart4Data) },
      { title: 'Nature vs Nurture in Intelligence', loader: () => import('./psych-language-intelligence-part5').then(m => m.psychLanguagePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-language-intelligence-part6').then(m => m.psychLanguagePart6Data) },
      { title: 'AP Review', loader: () => import('./psych-language-intelligence-part7').then(m => m.psychLanguagePart7Data) },
    ],
  },
  'prenatal-childhood-development': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Prenatal Development', loader: () => import('./psych-prenatal-childhood-development-part1').then(m => m.psychPrenatalPart1Data) },
      { title: 'Piaget\'s Theory', loader: () => import('./psych-prenatal-childhood-development-part2').then(m => m.psychPrenatalPart2Data) },
      { title: 'Attachment', loader: () => import('./psych-prenatal-childhood-development-part3').then(m => m.psychPrenatalPart3Data) },
      { title: 'Parenting Styles', loader: () => import('./psych-prenatal-childhood-development-part4').then(m => m.psychPrenatalPart4Data) },
      { title: 'Moral Development', loader: () => import('./psych-prenatal-childhood-development-part5').then(m => m.psychPrenatalPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-prenatal-childhood-development-part6').then(m => m.psychPrenatalPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-prenatal-childhood-development-part7').then(m => m.psychPrenatalPart7Data) },
    ],
  },
  'adolescence-adulthood': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Adolescent Development', loader: () => import('./psych-adolescence-adulthood-part1').then(m => m.psychAdolescencePart1Data) },
      { title: 'Identity Formation', loader: () => import('./psych-adolescence-adulthood-part2').then(m => m.psychAdolescencePart2Data) },
      { title: 'Adulthood & Aging', loader: () => import('./psych-adolescence-adulthood-part3').then(m => m.psychAdolescencePart3Data) },
      { title: 'Cognitive Changes', loader: () => import('./psych-adolescence-adulthood-part4').then(m => m.psychAdolescencePart4Data) },
      { title: 'Social Development', loader: () => import('./psych-adolescence-adulthood-part5').then(m => m.psychAdolescencePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-adolescence-adulthood-part6').then(m => m.psychAdolescencePart6Data) },
      { title: 'AP Review', loader: () => import('./psych-adolescence-adulthood-part7').then(m => m.psychAdolescencePart7Data) },
    ],
  },
  'motivation-theories': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Drive Theory', loader: () => import('./psych-motivation-theories-part1').then(m => m.psychMotivationPart1Data) },
      { title: 'Maslow\'s Hierarchy', loader: () => import('./psych-motivation-theories-part2').then(m => m.psychMotivationPart2Data) },
      { title: 'Intrinsic vs Extrinsic', loader: () => import('./psych-motivation-theories-part3').then(m => m.psychMotivationPart3Data) },
      { title: 'Hunger & Eating', loader: () => import('./psych-motivation-theories-part4').then(m => m.psychMotivationPart4Data) },
      { title: 'Achievement Motivation', loader: () => import('./psych-motivation-theories-part5').then(m => m.psychMotivationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-motivation-theories-part6').then(m => m.psychMotivationPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-motivation-theories-part7').then(m => m.psychMotivationPart7Data) },
    ],
  },
  'emotion-stress': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Theories of Emotion', loader: () => import('./psych-emotion-stress-part1').then(m => m.psychEmotionPart1Data) },
      { title: 'Emotional Expression', loader: () => import('./psych-emotion-stress-part2').then(m => m.psychEmotionPart2Data) },
      { title: 'Stress & Health', loader: () => import('./psych-emotion-stress-part3').then(m => m.psychEmotionPart3Data) },
      { title: 'Coping Strategies', loader: () => import('./psych-emotion-stress-part4').then(m => m.psychEmotionPart4Data) },
      { title: 'Positive Psychology', loader: () => import('./psych-emotion-stress-part5').then(m => m.psychEmotionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-emotion-stress-part6').then(m => m.psychEmotionPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-emotion-stress-part7').then(m => m.psychEmotionPart7Data) },
    ],
  },
  'personality-theories': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Psychoanalytic Theory', loader: () => import('./psych-personality-theories-part1').then(m => m.psychPersonalityPart1Data) },
      { title: 'Trait Theories', loader: () => import('./psych-personality-theories-part2').then(m => m.psychPersonalityPart2Data) },
      { title: 'Humanistic Theories', loader: () => import('./psych-personality-theories-part3').then(m => m.psychPersonalityPart3Data) },
      { title: 'Social-Cognitive Theory', loader: () => import('./psych-personality-theories-part4').then(m => m.psychPersonalityPart4Data) },
      { title: 'Personality Assessment', loader: () => import('./psych-personality-theories-part5').then(m => m.psychPersonalityPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-personality-theories-part6').then(m => m.psychPersonalityPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-personality-theories-part7').then(m => m.psychPersonalityPart7Data) },
    ],
  },
  'psychological-disorders-overview': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Defining Abnormality', loader: () => import('./psych-psychological-disorders-overview-part1').then(m => m.psychDisordersPart1Data) },
      { title: 'DSM-5 Classification', loader: () => import('./psych-psychological-disorders-overview-part2').then(m => m.psychDisordersPart2Data) },
      { title: 'Anxiety Disorders', loader: () => import('./psych-psychological-disorders-overview-part3').then(m => m.psychDisordersPart3Data) },
      { title: 'OCD & PTSD', loader: () => import('./psych-psychological-disorders-overview-part4').then(m => m.psychDisordersPart4Data) },
      { title: 'Somatic Disorders', loader: () => import('./psych-psychological-disorders-overview-part5').then(m => m.psychDisordersPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-psychological-disorders-overview-part6').then(m => m.psychDisordersPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-psychological-disorders-overview-part7').then(m => m.psychDisordersPart7Data) },
    ],
  },
  'mood-psychotic-disorders': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Major Depression', loader: () => import('./psych-mood-psychotic-disorders-part1').then(m => m.psychMoodPsychPart1Data) },
      { title: 'Bipolar Disorder', loader: () => import('./psych-mood-psychotic-disorders-part2').then(m => m.psychMoodPsychPart2Data) },
      { title: 'Schizophrenia', loader: () => import('./psych-mood-psychotic-disorders-part3').then(m => m.psychMoodPsychPart3Data) },
      { title: 'Dissociative Disorders', loader: () => import('./psych-mood-psychotic-disorders-part4').then(m => m.psychMoodPsychPart4Data) },
      { title: 'Personality Disorders', loader: () => import('./psych-mood-psychotic-disorders-part5').then(m => m.psychMoodPsychPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-mood-psychotic-disorders-part6').then(m => m.psychMoodPsychPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-mood-psychotic-disorders-part7').then(m => m.psychMoodPsychPart7Data) },
    ],
  },
  'treatment-therapy': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Psychotherapy Approaches', loader: () => import('./psych-treatment-therapy-part1').then(m => m.psychTreatmentPart1Data) },
      { title: 'Cognitive-Behavioral Therapy', loader: () => import('./psych-treatment-therapy-part2').then(m => m.psychTreatmentPart2Data) },
      { title: 'Biomedical Therapies', loader: () => import('./psych-treatment-therapy-part3').then(m => m.psychTreatmentPart3Data) },
      { title: 'Group & Family Therapy', loader: () => import('./psych-treatment-therapy-part4').then(m => m.psychTreatmentPart4Data) },
      { title: 'Evaluating Treatments', loader: () => import('./psych-treatment-therapy-part5').then(m => m.psychTreatmentPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-treatment-therapy-part6').then(m => m.psychTreatmentPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-treatment-therapy-part7').then(m => m.psychTreatmentPart7Data) },
    ],
  },
  'social-influence-conformity': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Conformity & Obedience', loader: () => import('./psych-social-influence-conformity-part1').then(m => m.psychSocialInfluencePart1Data) },
      { title: 'Asch & Milgram', loader: () => import('./psych-social-influence-conformity-part2').then(m => m.psychSocialInfluencePart2Data) },
      { title: 'Group Influence', loader: () => import('./psych-social-influence-conformity-part3').then(m => m.psychSocialInfluencePart3Data) },
      { title: 'Social Facilitation', loader: () => import('./psych-social-influence-conformity-part4').then(m => m.psychSocialInfluencePart4Data) },
      { title: 'Deindividuation', loader: () => import('./psych-social-influence-conformity-part5').then(m => m.psychSocialInfluencePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-social-influence-conformity-part6').then(m => m.psychSocialInfluencePart6Data) },
      { title: 'AP Review', loader: () => import('./psych-social-influence-conformity-part7').then(m => m.psychSocialInfluencePart7Data) },
    ],
  },
  'attitudes-persuasion': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Attitude Formation', loader: () => import('./psych-attitudes-persuasion-part1').then(m => m.psychAttitudesPart1Data) },
      { title: 'Cognitive Dissonance', loader: () => import('./psych-attitudes-persuasion-part2').then(m => m.psychAttitudesPart2Data) },
      { title: 'Persuasion Techniques', loader: () => import('./psych-attitudes-persuasion-part3').then(m => m.psychAttitudesPart3Data) },
      { title: 'Central vs Peripheral', loader: () => import('./psych-attitudes-persuasion-part4').then(m => m.psychAttitudesPart4Data) },
      { title: 'Attitude Change', loader: () => import('./psych-attitudes-persuasion-part5').then(m => m.psychAttitudesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-attitudes-persuasion-part6').then(m => m.psychAttitudesPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-attitudes-persuasion-part7').then(m => m.psychAttitudesPart7Data) },
    ],
  },
  'group-behavior-prejudice': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Prejudice & Discrimination', loader: () => import('./psych-group-behavior-prejudice-part1').then(m => m.psychGroupPart1Data) },
      { title: 'Stereotypes', loader: () => import('./psych-group-behavior-prejudice-part2').then(m => m.psychGroupPart2Data) },
      { title: 'In-Group/Out-Group', loader: () => import('./psych-group-behavior-prejudice-part3').then(m => m.psychGroupPart3Data) },
      { title: 'Aggression', loader: () => import('./psych-group-behavior-prejudice-part4').then(m => m.psychGroupPart4Data) },
      { title: 'Prosocial Behavior', loader: () => import('./psych-group-behavior-prejudice-part5').then(m => m.psychGroupPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./psych-group-behavior-prejudice-part6').then(m => m.psychGroupPart6Data) },
      { title: 'AP Review', loader: () => import('./psych-group-behavior-prejudice-part7').then(m => m.psychGroupPart7Data) },
    ],
  },

  // ===== Organic Chemistry (23 topics) =====
  'atomic-structure-bonding-ochem': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Atomic Orbitals & Electron Configuration', loader: () => import('./ochem-atomic-structure-bonding-ochem-part1').then(m => m.oChemAtomicBondingPart1Data) },
      { title: 'Lewis Structures & Formal Charge', loader: () => import('./ochem-atomic-structure-bonding-ochem-part2').then(m => m.oChemAtomicBondingPart2Data) },
      { title: 'Hybridization', loader: () => import('./ochem-atomic-structure-bonding-ochem-part3').then(m => m.oChemAtomicBondingPart3Data) },
      { title: 'Molecular Orbital Theory', loader: () => import('./ochem-atomic-structure-bonding-ochem-part4').then(m => m.oChemAtomicBondingPart4Data) },
      { title: 'Bond Polarity & Dipole Moments', loader: () => import('./ochem-atomic-structure-bonding-ochem-part5').then(m => m.oChemAtomicBondingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-atomic-structure-bonding-ochem-part6').then(m => m.oChemAtomicBondingPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-atomic-structure-bonding-ochem-part7').then(m => m.oChemAtomicBondingPart7Data) },
    ],
  },
  'molecular-representations': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Condensed & Skeletal Structures', loader: () => import('./ochem-molecular-representations-part1').then(m => m.oChemMolRepPart1Data) },
      { title: 'Functional Groups', loader: () => import('./ochem-molecular-representations-part2').then(m => m.oChemMolRepPart2Data) },
      { title: 'Constitutional Isomers', loader: () => import('./ochem-molecular-representations-part3').then(m => m.oChemMolRepPart3Data) },
      { title: 'Degrees of Unsaturation', loader: () => import('./ochem-molecular-representations-part4').then(m => m.oChemMolRepPart4Data) },
      { title: 'Intermolecular Forces', loader: () => import('./ochem-molecular-representations-part5').then(m => m.oChemMolRepPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-molecular-representations-part6').then(m => m.oChemMolRepPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-molecular-representations-part7').then(m => m.oChemMolRepPart7Data) },
    ],
  },
  'acids-bases-organic': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Brønsted-Lowry Acids & Bases', loader: () => import('./ochem-acids-bases-organic-part1').then(m => m.oChemAcidsBasesPart1Data) },
      { title: 'pKa & Acid Strength', loader: () => import('./ochem-acids-bases-organic-part2').then(m => m.oChemAcidsBasesPart2Data) },
      { title: 'Factors Affecting Acidity', loader: () => import('./ochem-acids-bases-organic-part3').then(m => m.oChemAcidsBasesPart3Data) },
      { title: 'Lewis Acids & Bases', loader: () => import('./ochem-acids-bases-organic-part4').then(m => m.oChemAcidsBasesPart4Data) },
      { title: 'Predicting Acid-Base Reactions', loader: () => import('./ochem-acids-bases-organic-part5').then(m => m.oChemAcidsBasesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-acids-bases-organic-part6').then(m => m.oChemAcidsBasesPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-acids-bases-organic-part7').then(m => m.oChemAcidsBasesPart7Data) },
    ],
  },
  'alkanes-cycloalkanes': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Nomenclature', loader: () => import('./ochem-alkanes-cycloalkanes-part1').then(m => m.oChemAlkanesPart1Data) },
      { title: 'Conformational Analysis', loader: () => import('./ochem-alkanes-cycloalkanes-part2').then(m => m.oChemAlkanesPart2Data) },
      { title: 'Cycloalkane Conformations', loader: () => import('./ochem-alkanes-cycloalkanes-part3').then(m => m.oChemAlkanesPart3Data) },
      { title: 'Ring Strain', loader: () => import('./ochem-alkanes-cycloalkanes-part4').then(m => m.oChemAlkanesPart4Data) },
      { title: 'Physical Properties', loader: () => import('./ochem-alkanes-cycloalkanes-part5').then(m => m.oChemAlkanesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-alkanes-cycloalkanes-part6').then(m => m.oChemAlkanesPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-alkanes-cycloalkanes-part7').then(m => m.oChemAlkanesPart7Data) },
    ],
  },
  'stereochemistry-chirality': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Chirality & Stereocenters', loader: () => import('./ochem-stereochemistry-chirality-part1').then(m => m.oChemStereoPart1Data) },
      { title: 'R/S Configuration', loader: () => import('./ochem-stereochemistry-chirality-part2').then(m => m.oChemStereoPart2Data) },
      { title: 'Optical Activity', loader: () => import('./ochem-stereochemistry-chirality-part3').then(m => m.oChemStereoPart3Data) },
      { title: 'Stereoisomer Types', loader: () => import('./ochem-stereochemistry-chirality-part4').then(m => m.oChemStereoPart4Data) },
      { title: 'Fischer Projections', loader: () => import('./ochem-stereochemistry-chirality-part5').then(m => m.oChemStereoPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-stereochemistry-chirality-part6').then(m => m.oChemStereoPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-stereochemistry-chirality-part7').then(m => m.oChemStereoPart7Data) },
    ],
  },
  'nucleophilic-substitution': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Substitution', loader: () => import('./ochem-nucleophilic-substitution-part1').then(m => m.oChemSNPart1Data) },
      { title: 'SN2 Mechanism', loader: () => import('./ochem-nucleophilic-substitution-part2').then(m => m.oChemSNPart2Data) },
      { title: 'SN1 Mechanism', loader: () => import('./ochem-nucleophilic-substitution-part3').then(m => m.oChemSNPart3Data) },
      { title: 'Substrate & Nucleophile Effects', loader: () => import('./ochem-nucleophilic-substitution-part4').then(m => m.oChemSNPart4Data) },
      { title: 'Solvent & Leaving Group Effects', loader: () => import('./ochem-nucleophilic-substitution-part5').then(m => m.oChemSNPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-nucleophilic-substitution-part6').then(m => m.oChemSNPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-nucleophilic-substitution-part7').then(m => m.oChemSNPart7Data) },
    ],
  },
  'elimination-reactions': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Elimination', loader: () => import('./ochem-elimination-reactions-part1').then(m => m.oChemElimPart1Data) },
      { title: 'E2 Mechanism', loader: () => import('./ochem-elimination-reactions-part2').then(m => m.oChemElimPart2Data) },
      { title: 'E1 Mechanism', loader: () => import('./ochem-elimination-reactions-part3').then(m => m.oChemElimPart3Data) },
      { title: 'Zaitsev vs Hofmann', loader: () => import('./ochem-elimination-reactions-part4').then(m => m.oChemElimPart4Data) },
      { title: 'Substitution vs Elimination', loader: () => import('./ochem-elimination-reactions-part5').then(m => m.oChemElimPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-elimination-reactions-part6').then(m => m.oChemElimPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-elimination-reactions-part7').then(m => m.oChemElimPart7Data) },
    ],
  },
  'alkenes-reactions': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Alkene Structure & Stability', loader: () => import('./ochem-alkenes-reactions-part1').then(m => m.oChemAlkenesPart1Data) },
      { title: 'Electrophilic Addition', loader: () => import('./ochem-alkenes-reactions-part2').then(m => m.oChemAlkenesPart2Data) },
      { title: 'Markovnikov & Anti-Markovnikov', loader: () => import('./ochem-alkenes-reactions-part3').then(m => m.oChemAlkenesPart3Data) },
      { title: 'Hydroboration-Oxidation', loader: () => import('./ochem-alkenes-reactions-part4').then(m => m.oChemAlkenesPart4Data) },
      { title: 'Oxidation & Reduction', loader: () => import('./ochem-alkenes-reactions-part5').then(m => m.oChemAlkenesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-alkenes-reactions-part6').then(m => m.oChemAlkenesPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-alkenes-reactions-part7').then(m => m.oChemAlkenesPart7Data) },
    ],
  },
  'alkynes-synthesis': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Alkyne Structure & Properties', loader: () => import('./ochem-alkynes-synthesis-part1').then(m => m.oChemAlkynesPart1Data) },
      { title: 'Alkyne Acidity', loader: () => import('./ochem-alkynes-synthesis-part2').then(m => m.oChemAlkynesPart2Data) },
      { title: 'Addition to Alkynes', loader: () => import('./ochem-alkynes-synthesis-part3').then(m => m.oChemAlkynesPart3Data) },
      { title: 'Reduction of Alkynes', loader: () => import('./ochem-alkynes-synthesis-part4').then(m => m.oChemAlkynesPart4Data) },
      { title: 'Alkyne Synthesis', loader: () => import('./ochem-alkynes-synthesis-part5').then(m => m.oChemAlkynesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-alkynes-synthesis-part6').then(m => m.oChemAlkynesPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-alkynes-synthesis-part7').then(m => m.oChemAlkynesPart7Data) },
    ],
  },
  'radical-reactions': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Radicals', loader: () => import('./ochem-radical-reactions-part1').then(m => m.oChemRadicalsPart1Data) },
      { title: 'Radical Halogenation', loader: () => import('./ochem-radical-reactions-part2').then(m => m.oChemRadicalsPart2Data) },
      { title: 'Selectivity in Halogenation', loader: () => import('./ochem-radical-reactions-part3').then(m => m.oChemRadicalsPart3Data) },
      { title: 'Radical Addition to Alkenes', loader: () => import('./ochem-radical-reactions-part4').then(m => m.oChemRadicalsPart4Data) },
      { title: 'Radical Stability', loader: () => import('./ochem-radical-reactions-part5').then(m => m.oChemRadicalsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-radical-reactions-part6').then(m => m.oChemRadicalsPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-radical-reactions-part7').then(m => m.oChemRadicalsPart7Data) },
    ],
  },
  'alcohols-ethers': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Alcohol Nomenclature & Properties', loader: () => import('./ochem-alcohols-ethers-part1').then(m => m.oChemAlcoholsPart1Data) },
      { title: 'Alcohol Synthesis', loader: () => import('./ochem-alcohols-ethers-part2').then(m => m.oChemAlcoholsPart2Data) },
      { title: 'Alcohol Reactions', loader: () => import('./ochem-alcohols-ethers-part3').then(m => m.oChemAlcoholsPart3Data) },
      { title: 'Ether Nomenclature & Synthesis', loader: () => import('./ochem-alcohols-ethers-part4').then(m => m.oChemAlcoholsPart4Data) },
      { title: 'Ether Reactions', loader: () => import('./ochem-alcohols-ethers-part5').then(m => m.oChemAlcoholsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-alcohols-ethers-part6').then(m => m.oChemAlcoholsPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-alcohols-ethers-part7').then(m => m.oChemAlcoholsPart7Data) },
    ],
  },
  'infrared-mass-spectrometry': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Spectroscopy', loader: () => import('./ochem-infrared-mass-spectrometry-part1').then(m => m.oChemIRMSPart1Data) },
      { title: 'Infrared (IR) Spectroscopy', loader: () => import('./ochem-infrared-mass-spectrometry-part2').then(m => m.oChemIRMSPart2Data) },
      { title: 'Key IR Absorptions', loader: () => import('./ochem-infrared-mass-spectrometry-part3').then(m => m.oChemIRMSPart3Data) },
      { title: 'Mass Spectrometry', loader: () => import('./ochem-infrared-mass-spectrometry-part4').then(m => m.oChemIRMSPart4Data) },
      { title: 'Fragmentation Patterns', loader: () => import('./ochem-infrared-mass-spectrometry-part5').then(m => m.oChemIRMSPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-infrared-mass-spectrometry-part6').then(m => m.oChemIRMSPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-infrared-mass-spectrometry-part7').then(m => m.oChemIRMSPart7Data) },
    ],
  },
  'nmr-spectroscopy': {
    completionDestination: 'competitive',
    parts: [
      { title: '¹H NMR Basics', loader: () => import('./ochem-nmr-spectroscopy-part1').then(m => m.oChemNMRPart1Data) },
      { title: 'Chemical Shift', loader: () => import('./ochem-nmr-spectroscopy-part2').then(m => m.oChemNMRPart2Data) },
      { title: 'Integration & Splitting', loader: () => import('./ochem-nmr-spectroscopy-part3').then(m => m.oChemNMRPart3Data) },
      { title: '¹³C NMR', loader: () => import('./ochem-nmr-spectroscopy-part4').then(m => m.oChemNMRPart4Data) },
      { title: 'Structure Determination', loader: () => import('./ochem-nmr-spectroscopy-part5').then(m => m.oChemNMRPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-nmr-spectroscopy-part6').then(m => m.oChemNMRPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-nmr-spectroscopy-part7').then(m => m.oChemNMRPart7Data) },
    ],
  },
  'conjugated-systems-dienes': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Conjugation & Stability', loader: () => import('./ochem-conjugated-systems-dienes-part1').then(m => m.oChemConjugatedPart1Data) },
      { title: '1,2- vs 1,4-Addition', loader: () => import('./ochem-conjugated-systems-dienes-part2').then(m => m.oChemConjugatedPart2Data) },
      { title: 'Diels-Alder Reaction', loader: () => import('./ochem-conjugated-systems-dienes-part3').then(m => m.oChemConjugatedPart3Data) },
      { title: 'Molecular Orbital Theory of Dienes', loader: () => import('./ochem-conjugated-systems-dienes-part4').then(m => m.oChemConjugatedPart4Data) },
      { title: 'UV-Vis Spectroscopy', loader: () => import('./ochem-conjugated-systems-dienes-part5').then(m => m.oChemConjugatedPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-conjugated-systems-dienes-part6').then(m => m.oChemConjugatedPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-conjugated-systems-dienes-part7').then(m => m.oChemConjugatedPart7Data) },
    ],
  },
  'aromatic-compounds-benzene': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Aromaticity & Hückel Rule', loader: () => import('./ochem-aromatic-compounds-benzene-part1').then(m => m.oChemAromaticPart1Data) },
      { title: 'Benzene Structure', loader: () => import('./ochem-aromatic-compounds-benzene-part2').then(m => m.oChemAromaticPart2Data) },
      { title: 'Nomenclature of Aromatics', loader: () => import('./ochem-aromatic-compounds-benzene-part3').then(m => m.oChemAromaticPart3Data) },
      { title: 'Properties of Aromatic Compounds', loader: () => import('./ochem-aromatic-compounds-benzene-part4').then(m => m.oChemAromaticPart4Data) },
      { title: 'Aromatic vs Antiaromatic', loader: () => import('./ochem-aromatic-compounds-benzene-part5').then(m => m.oChemAromaticPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-aromatic-compounds-benzene-part6').then(m => m.oChemAromaticPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-aromatic-compounds-benzene-part7').then(m => m.oChemAromaticPart7Data) },
    ],
  },
  'electrophilic-aromatic-substitution': {
    completionDestination: 'competitive',
    parts: [
      { title: 'EAS Mechanism', loader: () => import('./ochem-electrophilic-aromatic-substitution-part1').then(m => m.oChemEASPart1Data) },
      { title: 'Halogenation & Nitration', loader: () => import('./ochem-electrophilic-aromatic-substitution-part2').then(m => m.oChemEASPart2Data) },
      { title: 'Friedel-Crafts Reactions', loader: () => import('./ochem-electrophilic-aromatic-substitution-part3').then(m => m.oChemEASPart3Data) },
      { title: 'Substituent Effects', loader: () => import('./ochem-electrophilic-aromatic-substitution-part4').then(m => m.oChemEASPart4Data) },
      { title: 'Multi-Step EAS', loader: () => import('./ochem-electrophilic-aromatic-substitution-part5').then(m => m.oChemEASPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-electrophilic-aromatic-substitution-part6').then(m => m.oChemEASPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-electrophilic-aromatic-substitution-part7').then(m => m.oChemEASPart7Data) },
    ],
  },
  'aldehydes-ketones-reactions': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Carbonyl Chemistry Introduction', loader: () => import('./ochem-aldehydes-ketones-reactions-part1').then(m => m.oChemAldehydesKetonesPart1Data) },
      { title: 'Nucleophilic Addition', loader: () => import('./ochem-aldehydes-ketones-reactions-part2').then(m => m.oChemAldehydesKetonesPart2Data) },
      { title: 'Grignard & Organolithium Reactions', loader: () => import('./ochem-aldehydes-ketones-reactions-part3').then(m => m.oChemAldehydesKetonesPart3Data) },
      { title: 'Reduction & Oxidation', loader: () => import('./ochem-aldehydes-ketones-reactions-part4').then(m => m.oChemAldehydesKetonesPart4Data) },
      { title: 'Acetals & Hemiacetals', loader: () => import('./ochem-aldehydes-ketones-reactions-part5').then(m => m.oChemAldehydesKetonesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-aldehydes-ketones-reactions-part6').then(m => m.oChemAldehydesKetonesPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-aldehydes-ketones-reactions-part7').then(m => m.oChemAldehydesKetonesPart7Data) },
    ],
  },
  'carboxylic-acids-derivatives': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Carboxylic Acid Properties', loader: () => import('./ochem-carboxylic-acids-derivatives-part1').then(m => m.oChemCarboxylicAcidsPart1Data) },
      { title: 'Nucleophilic Acyl Substitution', loader: () => import('./ochem-carboxylic-acids-derivatives-part2').then(m => m.oChemCarboxylicAcidsPart2Data) },
      { title: 'Acid Chlorides & Anhydrides', loader: () => import('./ochem-carboxylic-acids-derivatives-part3').then(m => m.oChemCarboxylicAcidsPart3Data) },
      { title: 'Esters & Amides', loader: () => import('./ochem-carboxylic-acids-derivatives-part4').then(m => m.oChemCarboxylicAcidsPart4Data) },
      { title: 'Interconversion of Derivatives', loader: () => import('./ochem-carboxylic-acids-derivatives-part5').then(m => m.oChemCarboxylicAcidsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-carboxylic-acids-derivatives-part6').then(m => m.oChemCarboxylicAcidsPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-carboxylic-acids-derivatives-part7').then(m => m.oChemCarboxylicAcidsPart7Data) },
    ],
  },
  'enolate-chemistry': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Keto-Enol Tautomerism', loader: () => import('./ochem-enolate-chemistry-part1').then(m => m.oChemEnolatePart1Data) },
      { title: 'Enolate Formation', loader: () => import('./ochem-enolate-chemistry-part2').then(m => m.oChemEnolatePart2Data) },
      { title: 'Aldol Reaction', loader: () => import('./ochem-enolate-chemistry-part3').then(m => m.oChemEnolatePart3Data) },
      { title: 'Claisen Condensation', loader: () => import('./ochem-enolate-chemistry-part4').then(m => m.oChemEnolatePart4Data) },
      { title: 'Michael & Robinson Reactions', loader: () => import('./ochem-enolate-chemistry-part5').then(m => m.oChemEnolatePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-enolate-chemistry-part6').then(m => m.oChemEnolatePart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-enolate-chemistry-part7').then(m => m.oChemEnolatePart7Data) },
    ],
  },
  'amines-nitrogen-compounds': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Amine Classification & Properties', loader: () => import('./ochem-amines-nitrogen-compounds-part1').then(m => m.oChemAminesPart1Data) },
      { title: 'Amine Basicity', loader: () => import('./ochem-amines-nitrogen-compounds-part2').then(m => m.oChemAminesPart2Data) },
      { title: 'Amine Synthesis', loader: () => import('./ochem-amines-nitrogen-compounds-part3').then(m => m.oChemAminesPart3Data) },
      { title: 'Amine Reactions', loader: () => import('./ochem-amines-nitrogen-compounds-part4').then(m => m.oChemAminesPart4Data) },
      { title: 'Diazonium Chemistry', loader: () => import('./ochem-amines-nitrogen-compounds-part5').then(m => m.oChemAminesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-amines-nitrogen-compounds-part6').then(m => m.oChemAminesPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-amines-nitrogen-compounds-part7').then(m => m.oChemAminesPart7Data) },
    ],
  },
  'carbohydrates-biochemistry': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Monosaccharide Structure', loader: () => import('./ochem-carbohydrates-biochemistry-part1').then(m => m.oChemCarbsPart1Data) },
      { title: 'Fischer & Haworth Projections', loader: () => import('./ochem-carbohydrates-biochemistry-part2').then(m => m.oChemCarbsPart2Data) },
      { title: 'Reactions of Monosaccharides', loader: () => import('./ochem-carbohydrates-biochemistry-part3').then(m => m.oChemCarbsPart3Data) },
      { title: 'Disaccharides & Glycosidic Bonds', loader: () => import('./ochem-carbohydrates-biochemistry-part4').then(m => m.oChemCarbsPart4Data) },
      { title: 'Polysaccharides', loader: () => import('./ochem-carbohydrates-biochemistry-part5').then(m => m.oChemCarbsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-carbohydrates-biochemistry-part6').then(m => m.oChemCarbsPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-carbohydrates-biochemistry-part7').then(m => m.oChemCarbsPart7Data) },
    ],
  },
  'amino-acids-proteins': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Amino Acid Structure', loader: () => import('./ochem-amino-acids-proteins-part1').then(m => m.oChemAminoAcidsPart1Data) },
      { title: 'Acid-Base Properties', loader: () => import('./ochem-amino-acids-proteins-part2').then(m => m.oChemAminoAcidsPart2Data) },
      { title: 'Peptide Bonds', loader: () => import('./ochem-amino-acids-proteins-part3').then(m => m.oChemAminoAcidsPart3Data) },
      { title: 'Protein Structure Levels', loader: () => import('./ochem-amino-acids-proteins-part4').then(m => m.oChemAminoAcidsPart4Data) },
      { title: 'Amino Acid Reactions', loader: () => import('./ochem-amino-acids-proteins-part5').then(m => m.oChemAminoAcidsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-amino-acids-proteins-part6').then(m => m.oChemAminoAcidsPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-amino-acids-proteins-part7').then(m => m.oChemAminoAcidsPart7Data) },
    ],
  },
  'lipids-nucleic-acids': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Fatty Acids & Triglycerides', loader: () => import('./ochem-lipids-nucleic-acids-part1').then(m => m.oChemLipidsPart1Data) },
      { title: 'Phospholipids & Membranes', loader: () => import('./ochem-lipids-nucleic-acids-part2').then(m => m.oChemLipidsPart2Data) },
      { title: 'Terpenes & Steroids', loader: () => import('./ochem-lipids-nucleic-acids-part3').then(m => m.oChemLipidsPart3Data) },
      { title: 'Nucleotide Structure', loader: () => import('./ochem-lipids-nucleic-acids-part4').then(m => m.oChemLipidsPart4Data) },
      { title: 'Nucleic Acid Chemistry', loader: () => import('./ochem-lipids-nucleic-acids-part5').then(m => m.oChemLipidsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./ochem-lipids-nucleic-acids-part6').then(m => m.oChemLipidsPart6Data) },
      { title: 'Synthesis & Review', loader: () => import('./ochem-lipids-nucleic-acids-part7').then(m => m.oChemLipidsPart7Data) },
    ],
  },
  // === AP Precalculus (20 topics) ===
  'polynomial-functions-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Polynomial Basics', loader: () => import('./precalc-polynomial-functions-precalc-part1').then(m => m.precalcPolynomialPart1Data) },
      { title: 'End Behavior', loader: () => import('./precalc-polynomial-functions-precalc-part2').then(m => m.precalcPolynomialPart2Data) },
      { title: 'Zeros & Multiplicity', loader: () => import('./precalc-polynomial-functions-precalc-part3').then(m => m.precalcPolynomialPart3Data) },
      { title: 'Graphing Polynomials', loader: () => import('./precalc-polynomial-functions-precalc-part4').then(m => m.precalcPolynomialPart4Data) },
      { title: 'Polynomial Division', loader: () => import('./precalc-polynomial-functions-precalc-part5').then(m => m.precalcPolynomialPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-polynomial-functions-precalc-part6').then(m => m.precalcPolynomialPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-polynomial-functions-precalc-part7').then(m => m.precalcPolynomialPart7Data) },
    ],
  },
  'rational-functions-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Rational Function Basics', loader: () => import('./precalc-rational-functions-precalc-part1').then(m => m.precalcRationalPart1Data) },
      { title: 'Vertical Asymptotes', loader: () => import('./precalc-rational-functions-precalc-part2').then(m => m.precalcRationalPart2Data) },
      { title: 'Horizontal & Slant Asymptotes', loader: () => import('./precalc-rational-functions-precalc-part3').then(m => m.precalcRationalPart3Data) },
      { title: 'Graphing Rational Functions', loader: () => import('./precalc-rational-functions-precalc-part4').then(m => m.precalcRationalPart4Data) },
      { title: 'Solving Rational Equations', loader: () => import('./precalc-rational-functions-precalc-part5').then(m => m.precalcRationalPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-rational-functions-precalc-part6').then(m => m.precalcRationalPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-rational-functions-precalc-part7').then(m => m.precalcRationalPart7Data) },
    ],
  },
  'exponential-functions-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Exponential Growth & Decay', loader: () => import('./precalc-exponential-functions-precalc-part1').then(m => m.precalcExponentialPart1Data) },
      { title: 'Properties of Exponential Functions', loader: () => import('./precalc-exponential-functions-precalc-part2').then(m => m.precalcExponentialPart2Data) },
      { title: 'Transformations', loader: () => import('./precalc-exponential-functions-precalc-part3').then(m => m.precalcExponentialPart3Data) },
      { title: 'Real-World Models', loader: () => import('./precalc-exponential-functions-precalc-part4').then(m => m.precalcExponentialPart4Data) },
      { title: 'Compound Interest & e', loader: () => import('./precalc-exponential-functions-precalc-part5').then(m => m.precalcExponentialPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-exponential-functions-precalc-part6').then(m => m.precalcExponentialPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-exponential-functions-precalc-part7').then(m => m.precalcExponentialPart7Data) },
    ],
  },
  'logarithmic-functions-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Logarithms', loader: () => import('./precalc-logarithmic-functions-precalc-part1').then(m => m.precalcLogarithmicPart1Data) },
      { title: 'Properties of Logarithms', loader: () => import('./precalc-logarithmic-functions-precalc-part2').then(m => m.precalcLogarithmicPart2Data) },
      { title: 'Solving Logarithmic Equations', loader: () => import('./precalc-logarithmic-functions-precalc-part3').then(m => m.precalcLogarithmicPart3Data) },
      { title: 'Change of Base', loader: () => import('./precalc-logarithmic-functions-precalc-part4').then(m => m.precalcLogarithmicPart4Data) },
      { title: 'Logarithmic Models', loader: () => import('./precalc-logarithmic-functions-precalc-part5').then(m => m.precalcLogarithmicPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-logarithmic-functions-precalc-part6').then(m => m.precalcLogarithmicPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-logarithmic-functions-precalc-part7').then(m => m.precalcLogarithmicPart7Data) },
    ],
  },
  'function-composition-inverses-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Function Composition', loader: () => import('./precalc-function-composition-inverses-precalc-part1').then(m => m.precalcCompositionPart1Data) },
      { title: 'Domain of Compositions', loader: () => import('./precalc-function-composition-inverses-precalc-part2').then(m => m.precalcCompositionPart2Data) },
      { title: 'Inverse Functions', loader: () => import('./precalc-function-composition-inverses-precalc-part3').then(m => m.precalcCompositionPart3Data) },
      { title: 'Finding Inverses', loader: () => import('./precalc-function-composition-inverses-precalc-part4').then(m => m.precalcCompositionPart4Data) },
      { title: 'Verifying Inverses', loader: () => import('./precalc-function-composition-inverses-precalc-part5').then(m => m.precalcCompositionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-function-composition-inverses-precalc-part6').then(m => m.precalcCompositionPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-function-composition-inverses-precalc-part7').then(m => m.precalcCompositionPart7Data) },
    ],
  },
  'transformations-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Translations', loader: () => import('./precalc-transformations-precalc-part1').then(m => m.precalcTransformationsPart1Data) },
      { title: 'Reflections', loader: () => import('./precalc-transformations-precalc-part2').then(m => m.precalcTransformationsPart2Data) },
      { title: 'Stretches & Compressions', loader: () => import('./precalc-transformations-precalc-part3').then(m => m.precalcTransformationsPart3Data) },
      { title: 'Combined Transformations', loader: () => import('./precalc-transformations-precalc-part4').then(m => m.precalcTransformationsPart4Data) },
      { title: 'Piecewise Functions', loader: () => import('./precalc-transformations-precalc-part5').then(m => m.precalcTransformationsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-transformations-precalc-part6').then(m => m.precalcTransformationsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-transformations-precalc-part7').then(m => m.precalcTransformationsPart7Data) },
    ],
  },
  'trigonometric-functions-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Unit Circle Fundamentals', loader: () => import('./precalc-trigonometric-functions-precalc-part1').then(m => m.precalcTrigFunctionsPart1Data) },
      { title: 'Sine & Cosine Graphs', loader: () => import('./precalc-trigonometric-functions-precalc-part2').then(m => m.precalcTrigFunctionsPart2Data) },
      { title: 'Tangent & Reciprocal Functions', loader: () => import('./precalc-trigonometric-functions-precalc-part3').then(m => m.precalcTrigFunctionsPart3Data) },
      { title: 'Amplitude & Period', loader: () => import('./precalc-trigonometric-functions-precalc-part4').then(m => m.precalcTrigFunctionsPart4Data) },
      { title: 'Phase Shifts', loader: () => import('./precalc-trigonometric-functions-precalc-part5').then(m => m.precalcTrigFunctionsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-trigonometric-functions-precalc-part6').then(m => m.precalcTrigFunctionsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-trigonometric-functions-precalc-part7').then(m => m.precalcTrigFunctionsPart7Data) },
    ],
  },
  'trigonometric-identities-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Pythagorean Identities', loader: () => import('./precalc-trigonometric-identities-precalc-part1').then(m => m.precalcTrigIdentitiesPart1Data) },
      { title: 'Sum & Difference Formulas', loader: () => import('./precalc-trigonometric-identities-precalc-part2').then(m => m.precalcTrigIdentitiesPart2Data) },
      { title: 'Double-Angle Formulas', loader: () => import('./precalc-trigonometric-identities-precalc-part3').then(m => m.precalcTrigIdentitiesPart3Data) },
      { title: 'Half-Angle Formulas', loader: () => import('./precalc-trigonometric-identities-precalc-part4').then(m => m.precalcTrigIdentitiesPart4Data) },
      { title: 'Verifying Identities', loader: () => import('./precalc-trigonometric-identities-precalc-part5').then(m => m.precalcTrigIdentitiesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-trigonometric-identities-precalc-part6').then(m => m.precalcTrigIdentitiesPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-trigonometric-identities-precalc-part7').then(m => m.precalcTrigIdentitiesPart7Data) },
    ],
  },
  'inverse-trig-functions-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Inverse Sine', loader: () => import('./precalc-inverse-trig-functions-precalc-part1').then(m => m.precalcInverseTrigPart1Data) },
      { title: 'Inverse Cosine', loader: () => import('./precalc-inverse-trig-functions-precalc-part2').then(m => m.precalcInverseTrigPart2Data) },
      { title: 'Inverse Tangent', loader: () => import('./precalc-inverse-trig-functions-precalc-part3').then(m => m.precalcInverseTrigPart3Data) },
      { title: 'Compositions with Inverses', loader: () => import('./precalc-inverse-trig-functions-precalc-part4').then(m => m.precalcInverseTrigPart4Data) },
      { title: 'Solving Trig Equations', loader: () => import('./precalc-inverse-trig-functions-precalc-part5').then(m => m.precalcInverseTrigPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-inverse-trig-functions-precalc-part6').then(m => m.precalcInverseTrigPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-inverse-trig-functions-precalc-part7').then(m => m.precalcInverseTrigPart7Data) },
    ],
  },
  'law-of-sines-cosines-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Law of Sines', loader: () => import('./precalc-law-of-sines-cosines-precalc-part1').then(m => m.precalcLawSinesCosinesPart1Data) },
      { title: 'Ambiguous Case', loader: () => import('./precalc-law-of-sines-cosines-precalc-part2').then(m => m.precalcLawSinesCosinesPart2Data) },
      { title: 'Law of Cosines', loader: () => import('./precalc-law-of-sines-cosines-precalc-part3').then(m => m.precalcLawSinesCosinesPart3Data) },
      { title: 'Area of Triangles', loader: () => import('./precalc-law-of-sines-cosines-precalc-part4').then(m => m.precalcLawSinesCosinesPart4Data) },
      { title: 'Applications', loader: () => import('./precalc-law-of-sines-cosines-precalc-part5').then(m => m.precalcLawSinesCosinesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-law-of-sines-cosines-precalc-part6').then(m => m.precalcLawSinesCosinesPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-law-of-sines-cosines-precalc-part7').then(m => m.precalcLawSinesCosinesPart7Data) },
    ],
  },
  'polar-coordinates-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Polar Coordinate System', loader: () => import('./precalc-polar-coordinates-precalc-part1').then(m => m.precalcPolarPart1Data) },
      { title: 'Converting Coordinates', loader: () => import('./precalc-polar-coordinates-precalc-part2').then(m => m.precalcPolarPart2Data) },
      { title: 'Polar Graphs', loader: () => import('./precalc-polar-coordinates-precalc-part3').then(m => m.precalcPolarPart3Data) },
      { title: 'Rose Curves & Limacons', loader: () => import('./precalc-polar-coordinates-precalc-part4').then(m => m.precalcPolarPart4Data) },
      { title: 'Polar Equations', loader: () => import('./precalc-polar-coordinates-precalc-part5').then(m => m.precalcPolarPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-polar-coordinates-precalc-part6').then(m => m.precalcPolarPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-polar-coordinates-precalc-part7').then(m => m.precalcPolarPart7Data) },
    ],
  },
  'vectors-two-dimensions-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Vector Basics', loader: () => import('./precalc-vectors-two-dimensions-precalc-part1').then(m => m.precalcVectors2DPart1Data) },
      { title: 'Vector Operations', loader: () => import('./precalc-vectors-two-dimensions-precalc-part2').then(m => m.precalcVectors2DPart2Data) },
      { title: 'Dot Product', loader: () => import('./precalc-vectors-two-dimensions-precalc-part3').then(m => m.precalcVectors2DPart3Data) },
      { title: 'Unit Vectors', loader: () => import('./precalc-vectors-two-dimensions-precalc-part4').then(m => m.precalcVectors2DPart4Data) },
      { title: 'Applications of Vectors', loader: () => import('./precalc-vectors-two-dimensions-precalc-part5').then(m => m.precalcVectors2DPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-vectors-two-dimensions-precalc-part6').then(m => m.precalcVectors2DPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-vectors-two-dimensions-precalc-part7').then(m => m.precalcVectors2DPart7Data) },
    ],
  },
  'matrices-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Matrix Operations', loader: () => import('./precalc-matrices-precalc-part1').then(m => m.precalcMatricesPart1Data) },
      { title: 'Matrix Multiplication', loader: () => import('./precalc-matrices-precalc-part2').then(m => m.precalcMatricesPart2Data) },
      { title: 'Determinants', loader: () => import('./precalc-matrices-precalc-part3').then(m => m.precalcMatricesPart3Data) },
      { title: 'Inverse Matrices', loader: () => import('./precalc-matrices-precalc-part4').then(m => m.precalcMatricesPart4Data) },
      { title: 'Systems with Matrices', loader: () => import('./precalc-matrices-precalc-part5').then(m => m.precalcMatricesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-matrices-precalc-part6').then(m => m.precalcMatricesPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-matrices-precalc-part7').then(m => m.precalcMatricesPart7Data) },
    ],
  },
  'sequences-series-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Arithmetic Sequences', loader: () => import('./precalc-sequences-series-precalc-part1').then(m => m.precalcSequencesPart1Data) },
      { title: 'Geometric Sequences', loader: () => import('./precalc-sequences-series-precalc-part2').then(m => m.precalcSequencesPart2Data) },
      { title: 'Series & Partial Sums', loader: () => import('./precalc-sequences-series-precalc-part3').then(m => m.precalcSequencesPart3Data) },
      { title: 'Sigma Notation', loader: () => import('./precalc-sequences-series-precalc-part4').then(m => m.precalcSequencesPart4Data) },
      { title: 'Infinite Geometric Series', loader: () => import('./precalc-sequences-series-precalc-part5').then(m => m.precalcSequencesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-sequences-series-precalc-part6').then(m => m.precalcSequencesPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-sequences-series-precalc-part7').then(m => m.precalcSequencesPart7Data) },
    ],
  },
  'conic-sections-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Circles', loader: () => import('./precalc-conic-sections-precalc-part1').then(m => m.precalcConicsPart1Data) },
      { title: 'Parabolas', loader: () => import('./precalc-conic-sections-precalc-part2').then(m => m.precalcConicsPart2Data) },
      { title: 'Ellipses', loader: () => import('./precalc-conic-sections-precalc-part3').then(m => m.precalcConicsPart3Data) },
      { title: 'Hyperbolas', loader: () => import('./precalc-conic-sections-precalc-part4').then(m => m.precalcConicsPart4Data) },
      { title: 'Identifying Conics', loader: () => import('./precalc-conic-sections-precalc-part5').then(m => m.precalcConicsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-conic-sections-precalc-part6').then(m => m.precalcConicsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-conic-sections-precalc-part7').then(m => m.precalcConicsPart7Data) },
    ],
  },
  'parametric-equations-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Parametric Basics', loader: () => import('./precalc-parametric-equations-precalc-part1').then(m => m.precalcParametricPart1Data) },
      { title: 'Graphing Parametric Curves', loader: () => import('./precalc-parametric-equations-precalc-part2').then(m => m.precalcParametricPart2Data) },
      { title: 'Eliminating the Parameter', loader: () => import('./precalc-parametric-equations-precalc-part3').then(m => m.precalcParametricPart3Data) },
      { title: 'Parametric Motion', loader: () => import('./precalc-parametric-equations-precalc-part4').then(m => m.precalcParametricPart4Data) },
      { title: 'Applications', loader: () => import('./precalc-parametric-equations-precalc-part5').then(m => m.precalcParametricPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-parametric-equations-precalc-part6').then(m => m.precalcParametricPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-parametric-equations-precalc-part7').then(m => m.precalcParametricPart7Data) },
    ],
  },
  'limits-introduction-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Intuitive Limits', loader: () => import('./precalc-limits-introduction-precalc-part1').then(m => m.precalcLimitsPart1Data) },
      { title: 'Limit Notation', loader: () => import('./precalc-limits-introduction-precalc-part2').then(m => m.precalcLimitsPart2Data) },
      { title: 'One-Sided Limits', loader: () => import('./precalc-limits-introduction-precalc-part3').then(m => m.precalcLimitsPart3Data) },
      { title: 'Limits at Infinity', loader: () => import('./precalc-limits-introduction-precalc-part4').then(m => m.precalcLimitsPart4Data) },
      { title: 'Evaluating Limits', loader: () => import('./precalc-limits-introduction-precalc-part5').then(m => m.precalcLimitsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-limits-introduction-precalc-part6').then(m => m.precalcLimitsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-limits-introduction-precalc-part7').then(m => m.precalcLimitsPart7Data) },
    ],
  },
  'continuity-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Continuity Basics', loader: () => import('./precalc-continuity-precalc-part1').then(m => m.precalcContinuityPart1Data) },
      { title: 'Types of Discontinuity', loader: () => import('./precalc-continuity-precalc-part2').then(m => m.precalcContinuityPart2Data) },
      { title: 'Intermediate Value Theorem', loader: () => import('./precalc-continuity-precalc-part3').then(m => m.precalcContinuityPart3Data) },
      { title: 'Piecewise Continuity', loader: () => import('./precalc-continuity-precalc-part4').then(m => m.precalcContinuityPart4Data) },
      { title: 'Continuity & Limits', loader: () => import('./precalc-continuity-precalc-part5').then(m => m.precalcContinuityPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-continuity-precalc-part6').then(m => m.precalcContinuityPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-continuity-precalc-part7').then(m => m.precalcContinuityPart7Data) },
    ],
  },
  'rates-of-change-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Average Rate of Change', loader: () => import('./precalc-rates-of-change-precalc-part1').then(m => m.precalcRatesOfChangePart1Data) },
      { title: 'Secant Lines', loader: () => import('./precalc-rates-of-change-precalc-part2').then(m => m.precalcRatesOfChangePart2Data) },
      { title: 'Instantaneous Rate of Change', loader: () => import('./precalc-rates-of-change-precalc-part3').then(m => m.precalcRatesOfChangePart3Data) },
      { title: 'Tangent Line Concept', loader: () => import('./precalc-rates-of-change-precalc-part4').then(m => m.precalcRatesOfChangePart4Data) },
      { title: 'Applications', loader: () => import('./precalc-rates-of-change-precalc-part5').then(m => m.precalcRatesOfChangePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-rates-of-change-precalc-part6').then(m => m.precalcRatesOfChangePart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-rates-of-change-precalc-part7').then(m => m.precalcRatesOfChangePart7Data) },
    ],
  },
  'systems-of-equations-precalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Linear Systems', loader: () => import('./precalc-systems-of-equations-precalc-part1').then(m => m.precalcSystemsPart1Data) },
      { title: 'Substitution & Elimination', loader: () => import('./precalc-systems-of-equations-precalc-part2').then(m => m.precalcSystemsPart2Data) },
      { title: 'Nonlinear Systems', loader: () => import('./precalc-systems-of-equations-precalc-part3').then(m => m.precalcSystemsPart3Data) },
      { title: 'Systems of Inequalities', loader: () => import('./precalc-systems-of-equations-precalc-part4').then(m => m.precalcSystemsPart4Data) },
      { title: 'Applications', loader: () => import('./precalc-systems-of-equations-precalc-part5').then(m => m.precalcSystemsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./precalc-systems-of-equations-precalc-part6').then(m => m.precalcSystemsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./precalc-systems-of-equations-precalc-part7').then(m => m.precalcSystemsPart7Data) },
    ],
  },

  // === AP Calculus AB (22 topics) ===
  'limits-continuity-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Foundation of Calculus', loader: () => import('./calcab-limits-continuity-calcab-part1').then(m => m.calcabLimitsPart1Data) },
      { title: 'Mastering Limit Computation', loader: () => import('./calcab-limits-continuity-calcab-part2').then(m => m.calcabLimitsPart2Data) },
      { title: 'Left-Hand and Right-Hand Limits', loader: () => import('./calcab-limits-continuity-calcab-part3').then(m => m.calcabLimitsPart3Data) },
      { title: 'Bounding Limits', loader: () => import('./calcab-limits-continuity-calcab-part4').then(m => m.calcabLimitsPart4Data) },
      { title: 'When Functions Behave Nicely', loader: () => import('./calcab-limits-continuity-calcab-part5').then(m => m.calcabLimitsPart5Data) },
      { title: 'AP-Level Practice', loader: () => import('./calcab-limits-continuity-calcab-part6').then(m => m.calcabLimitsPart6Data) },
      { title: 'Putting It All Together', loader: () => import('./calcab-limits-continuity-calcab-part7').then(m => m.calcabLimitsPart7Data) },
    ],
  },
  'what-is-a-limit': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Intuitive Idea of a Limit', loader: () => import('./calcab-what-is-a-limit-part1').then(m => m.calcabWhatIsALimitPart1Data) },
      { title: 'Limit Notation', loader: () => import('./calcab-what-is-a-limit-part2').then(m => m.calcabWhatIsALimitPart2Data) },
      { title: 'When Does a Limit Exist?', loader: () => import('./calcab-what-is-a-limit-part3').then(m => m.calcabWhatIsALimitPart3Data) },
      { title: 'Limits That Do Not Exist', loader: () => import('./calcab-what-is-a-limit-part4').then(m => m.calcabWhatIsALimitPart4Data) },
    ],
  },
  'estimating-limits-tables': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Why Use a Numerical Table?', loader: () => import('./calcab-estimating-limits-tables-part1').then(m => m.calcabEstimatingLimitsTablesPart1Data) },
      { title: 'Building a Two-Sided Table', loader: () => import('./calcab-estimating-limits-tables-part2').then(m => m.calcabEstimatingLimitsTablesPart2Data) },
      { title: 'Recognizing DNE from a Table', loader: () => import('./calcab-estimating-limits-tables-part3').then(m => m.calcabEstimatingLimitsTablesPart3Data) },
      { title: 'Common Pitfalls', loader: () => import('./calcab-estimating-limits-tables-part4').then(m => m.calcabEstimatingLimitsTablesPart4Data) },
    ],
  },
  'estimating-limits-graphs': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Reading $\\lim$ Off a Graph', loader: () => import('./calcab-estimating-limits-graphs-part1').then(m => m.calcabEstimatingLimitsGraphsPart1Data) },
      { title: 'One-Sided Limits Visually', loader: () => import('./calcab-estimating-limits-graphs-part2').then(m => m.calcabEstimatingLimitsGraphsPart2Data) },
      { title: 'Visual Signatures of DNE', loader: () => import('./calcab-estimating-limits-graphs-part3').then(m => m.calcabEstimatingLimitsGraphsPart3Data) },
      { title: 'Open/Closed Dots vs Limit vs Value', loader: () => import('./calcab-estimating-limits-graphs-part4').then(m => m.calcabEstimatingLimitsGraphsPart4Data) },
    ],
  },
  'one-sided-limits': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Notation and Idea', loader: () => import('./calcab-one-sided-limits-part1').then(m => m.calcabOneSidedLimitsPart1Data) },
      { title: 'Computing One-Sided Limits', loader: () => import('./calcab-one-sided-limits-part2').then(m => m.calcabOneSidedLimitsPart2Data) },
      { title: 'The Existence Theorem', loader: () => import('./calcab-one-sided-limits-part3').then(m => m.calcabOneSidedLimitsPart3Data) },
      { title: 'When Only One Side Exists', loader: () => import('./calcab-one-sided-limits-part4').then(m => m.calcabOneSidedLimitsPart4Data) },
    ],
  },
  'direct-substitution-method': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Idea of Direct Substitution', loader: () => import('./calcab-direct-substitution-method-part1').then(m => m.calcabDirectSubstitutionPart1Data) },
      { title: 'When Direct Substitution Works', loader: () => import('./calcab-direct-substitution-method-part2').then(m => m.calcabDirectSubstitutionPart2Data) },
      { title: 'Limit Laws', loader: () => import('./calcab-direct-substitution-method-part3').then(m => m.calcabDirectSubstitutionPart3Data) },
      { title: 'When Direct Substitution Fails', loader: () => import('./calcab-direct-substitution-method-part4').then(m => m.calcabDirectSubstitutionPart4Data) },
    ],
  },
  'factoring-method-limits': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The 0/0 Trigger', loader: () => import('./calcab-factoring-method-limits-part1').then(m => m.calcabFactoringMethodPart1Data) },
      { title: 'The Factoring Toolbox', loader: () => import('./calcab-factoring-method-limits-part2').then(m => m.calcabFactoringMethodPart2Data) },
      { title: 'Worked Examples — Workflow', loader: () => import('./calcab-factoring-method-limits-part3').then(m => m.calcabFactoringMethodPart3Data) },
      { title: 'Beyond Quadratics', loader: () => import('./calcab-factoring-method-limits-part4').then(m => m.calcabFactoringMethodPart4Data) },
    ],
  },
  'rationalizing-technique-limits': {
    completionDestination: 'competitive',
    parts: [
      { title: 'When to Use the Conjugate', loader: () => import('./calcab-rationalizing-technique-limits-part1').then(m => m.calcabRationalizingPart1Data) },
      { title: 'Multiplying by the Conjugate', loader: () => import('./calcab-rationalizing-technique-limits-part2').then(m => m.calcabRationalizingPart2Data) },
      { title: 'Worked Examples', loader: () => import('./calcab-rationalizing-technique-limits-part3').then(m => m.calcabRationalizingPart3Data) },
      { title: 'Conjugates in the Denominator', loader: () => import('./calcab-rationalizing-technique-limits-part4').then(m => m.calcabRationalizingPart4Data) },
    ],
  },
  'limits-at-infinity': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Limits at Infinity & Horizontal Asymptotes', loader: () => import('./calcab-limits-at-infinity-part1').then(m => m.calcabLimitsAtInfinityPart1Data) },
      { title: 'Rational Functions Compare Degrees', loader: () => import('./calcab-limits-at-infinity-part2').then(m => m.calcabLimitsAtInfinityPart2Data) },
      { title: 'Radicals at Infinity', loader: () => import('./calcab-limits-at-infinity-part3').then(m => m.calcabLimitsAtInfinityPart3Data) },
      { title: 'Exponentials, Logs, and DNE Cases', loader: () => import('./calcab-limits-at-infinity-part4').then(m => m.calcabLimitsAtInfinityPart4Data) },
    ],
  },
  'infinite-limits-vertical-asymptotes': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Notation and Meaning', loader: () => import('./calcab-infinite-limits-vertical-asymptotes-part1').then(m => m.calcabInfiniteLimitsPart1Data) },
      { title: 'Diagnosing Infinite Limits', loader: () => import('./calcab-infinite-limits-vertical-asymptotes-part2').then(m => m.calcabInfiniteLimitsPart2Data) },
      { title: 'Vertical Asymptotes', loader: () => import('./calcab-infinite-limits-vertical-asymptotes-part3').then(m => m.calcabInfiniteLimitsPart3Data) },
      { title: 'Asymptotes Beyond Rationals', loader: () => import('./calcab-infinite-limits-vertical-asymptotes-part4').then(m => m.calcabInfiniteLimitsPart4Data) },
    ],
  },
  'continuity-introduction': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Continuity Definition', loader: () => import('./calcab-continuity-introduction-part1').then(m => m.calcabContinuityIntroPart1Data) },
      { title: 'Continuity Catalog', loader: () => import('./calcab-continuity-introduction-part2').then(m => m.calcabContinuityIntroPart2Data) },
      { title: 'Piecewise Continuity', loader: () => import('./calcab-continuity-introduction-part3').then(m => m.calcabContinuityIntroPart3Data) },
      { title: 'Continuity on Intervals & IVT', loader: () => import('./calcab-continuity-introduction-part4').then(m => m.calcabContinuityIntroPart4Data) },
    ],
  },
  'types-of-discontinuity': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Removable Discontinuities', loader: () => import('./calcab-types-of-discontinuity-part1').then(m => m.calcabTypesDiscontinuityPart1Data) },
      { title: 'Jump Discontinuities', loader: () => import('./calcab-types-of-discontinuity-part2').then(m => m.calcabTypesDiscontinuityPart2Data) },
      { title: 'Infinite Discontinuities', loader: () => import('./calcab-types-of-discontinuity-part3').then(m => m.calcabTypesDiscontinuityPart3Data) },
      { title: 'Mixed Practice', loader: () => import('./calcab-types-of-discontinuity-part4').then(m => m.calcabTypesDiscontinuityPart4Data) },
    ],
  },
  'definition-of-derivative-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'From Average to Instantaneous Rate of Change', loader: () => import('./calcab-definition-of-derivative-calcab-part1').then(m => m.calcabDerivativeDefPart1Data) },
      { title: "When Derivatives Exist (and When They Don't)", loader: () => import('./calcab-definition-of-derivative-calcab-part2').then(m => m.calcabDerivativeDefPart2Data) },
      { title: 'Reading Derivatives from Graphs', loader: () => import('./calcab-definition-of-derivative-calcab-part3').then(m => m.calcabDerivativeDefPart3Data) },
      { title: 'The Language of Derivatives', loader: () => import('./calcab-definition-of-derivative-calcab-part4').then(m => m.calcabDerivativeDefPart4Data) },
      { title: 'The Tangent Line Equation', loader: () => import('./calcab-definition-of-derivative-calcab-part5').then(m => m.calcabDerivativeDefPart5Data) },
      { title: 'Derivative Definition Practice', loader: () => import('./calcab-definition-of-derivative-calcab-part6').then(m => m.calcabDerivativeDefPart6Data) },
      { title: 'Comprehensive Review', loader: () => import('./calcab-definition-of-derivative-calcab-part7').then(m => m.calcabDerivativeDefPart7Data) },
    ],
  },
  'basic-differentiation-rules-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Power Rule', loader: () => import('./calcab-basic-differentiation-rules-calcab-part1').then(m => m.calcabBasicDiffPart1Data) },
      { title: 'Product Rule', loader: () => import('./calcab-basic-differentiation-rules-calcab-part2').then(m => m.calcabBasicDiffPart2Data) },
      { title: 'Quotient Rule', loader: () => import('./calcab-basic-differentiation-rules-calcab-part3').then(m => m.calcabBasicDiffPart3Data) },
      { title: 'Trig Derivatives', loader: () => import('./calcab-basic-differentiation-rules-calcab-part4').then(m => m.calcabBasicDiffPart4Data) },
      { title: 'Higher-Order Derivatives', loader: () => import('./calcab-basic-differentiation-rules-calcab-part5').then(m => m.calcabBasicDiffPart5Data) },
      { title: 'Mixed Differentiation Problems', loader: () => import('./calcab-basic-differentiation-rules-calcab-part6').then(m => m.calcabBasicDiffPart6Data) },
      { title: 'Comprehensive Review', loader: () => import('./calcab-basic-differentiation-rules-calcab-part7').then(m => m.calcabBasicDiffPart7Data) },
    ],
  },
  'chain-rule-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Chain Rule Basics', loader: () => import('./calcab-chain-rule-calcab-part1').then(m => m.calcabChainRulePart1Data) },
      { title: 'Nested Functions & Double Chain Rule', loader: () => import('./calcab-chain-rule-calcab-part2').then(m => m.calcabChainRulePart2Data) },
      { title: 'Implicit Differentiation', loader: () => import('./calcab-chain-rule-calcab-part3').then(m => m.calcabChainRulePart3Data) },
      { title: 'Related Rates Intro', loader: () => import('./calcab-chain-rule-calcab-part4').then(m => m.calcabChainRulePart4Data) },
      { title: 'Advanced Chain Rule Applications', loader: () => import('./calcab-chain-rule-calcab-part5').then(m => m.calcabChainRulePart5Data) },
      { title: 'Mixed Chain Rule Problems', loader: () => import('./calcab-chain-rule-calcab-part6').then(m => m.calcabChainRulePart6Data) },
      { title: 'Chain Rule Review', loader: () => import('./calcab-chain-rule-calcab-part7').then(m => m.calcabChainRulePart7Data) },
    ],
  },
  'applications-of-derivatives-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Critical Points & Increasing/Decreasing', loader: () => import('./calcab-applications-of-derivatives-calcab-part1').then(m => m.calcabAppsDerivativesPart1Data) },
      { title: 'Second Derivative & Concavity', loader: () => import('./calcab-applications-of-derivatives-calcab-part2').then(m => m.calcabAppsDerivativesPart2Data) },
      { title: 'Absolute (Global) Extrema', loader: () => import('./calcab-applications-of-derivatives-calcab-part3').then(m => m.calcabAppsDerivativesPart3Data) },
      { title: 'Curve Sketching', loader: () => import('./calcab-applications-of-derivatives-calcab-part4').then(m => m.calcabAppsDerivativesPart4Data) },
      { title: 'Mean Value Theorem', loader: () => import('./calcab-applications-of-derivatives-calcab-part5').then(m => m.calcabAppsDerivativesPart5Data) },
      { title: 'Related Rates (Mini-Review)', loader: () => import('./calcab-applications-of-derivatives-calcab-part6').then(m => m.calcabAppsDerivativesPart6Data) },
      { title: 'Comprehensive Assessment', loader: () => import('./calcab-applications-of-derivatives-calcab-part7').then(m => m.calcabAppsDerivativesPart7Data) },
    ],
  },
  'optimization-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Setting Up Optimization Problems', loader: () => import('./calcab-optimization-calcab-part1').then(m => m.calcabOptimizationPart1Data) },
      { title: 'Geometric Optimization', loader: () => import('./calcab-optimization-calcab-part2').then(m => m.calcabOptimizationPart2Data) },
      { title: 'Cost & Revenue Optimization', loader: () => import('./calcab-optimization-calcab-part3').then(m => m.calcabOptimizationPart3Data) },
      { title: '3D Optimization (Cylinders & Cones)', loader: () => import('./calcab-optimization-calcab-part4').then(m => m.calcabOptimizationPart4Data) },
      { title: 'Distance & Angle Optimization', loader: () => import('./calcab-optimization-calcab-part5').then(m => m.calcabOptimizationPart5Data) },
      { title: 'AP-Style Workshop', loader: () => import('./calcab-optimization-calcab-part6').then(m => m.calcabOptimizationPart6Data) },
      { title: 'Comprehensive Assessment', loader: () => import('./calcab-optimization-calcab-part7').then(m => m.calcabOptimizationPart7Data) },
    ],
  },
  'linearization-differentials-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Tangent Line Approximation', loader: () => import('./calcab-linearization-differentials-calcab-part1').then(m => m.calcabLinearizationPart1Data) },
      { title: 'Differentials', loader: () => import('./calcab-linearization-differentials-calcab-part2').then(m => m.calcabLinearizationPart2Data) },
      { title: 'Over/Underestimates', loader: () => import('./calcab-linearization-differentials-calcab-part3').then(m => m.calcabLinearizationPart3Data) },
      { title: 'Percentage Error', loader: () => import('./calcab-linearization-differentials-calcab-part4').then(m => m.calcabLinearizationPart4Data) },
      { title: 'Linearization with Tables', loader: () => import('./calcab-linearization-differentials-calcab-part5').then(m => m.calcabLinearizationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./calcab-linearization-differentials-calcab-part6').then(m => m.calcabLinearizationPart6Data) },
      { title: 'Final Assessment', loader: () => import('./calcab-linearization-differentials-calcab-part7').then(m => m.calcabLinearizationPart7Data) },
    ],
  },
  'definite-integrals-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Riemann Sums', loader: () => import('./calcab-definite-integrals-calcab-part1').then(m => m.calcabDefiniteIntegralsPart1Data) },
      { title: 'Definite Integral Definition', loader: () => import('./calcab-definite-integrals-calcab-part2').then(m => m.calcabDefiniteIntegralsPart2Data) },
      { title: 'Properties of Integrals', loader: () => import('./calcab-definite-integrals-calcab-part3').then(m => m.calcabDefiniteIntegralsPart3Data) },
      { title: 'Fundamental Theorem of Calculus — Part 1', loader: () => import('./calcab-definite-integrals-calcab-part4').then(m => m.calcabDefiniteIntegralsPart4Data) },
      { title: 'Fundamental Theorem of Calculus — Part 2', loader: () => import('./calcab-definite-integrals-calcab-part5').then(m => m.calcabDefiniteIntegralsPart5Data) },
      { title: 'Mixed Integration Problems', loader: () => import('./calcab-definite-integrals-calcab-part6').then(m => m.calcabDefiniteIntegralsPart6Data) },
      { title: 'Comprehensive Review', loader: () => import('./calcab-definite-integrals-calcab-part7').then(m => m.calcabDefiniteIntegralsPart7Data) },
    ],
  },
  'antiderivatives-indefinite-integrals-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What is an Antiderivative?', loader: () => import('./calcab-antiderivatives-indefinite-integrals-calcab-part1').then(m => m.calcabAntiderivativesPart1Data) },
      { title: 'Essential Antiderivative Formulas', loader: () => import('./calcab-antiderivatives-indefinite-integrals-calcab-part2').then(m => m.calcabAntiderivativesPart2Data) },
      { title: 'Trig Antiderivatives', loader: () => import('./calcab-antiderivatives-indefinite-integrals-calcab-part3').then(m => m.calcabAntiderivativesPart3Data) },
      { title: 'Rewriting Before Integrating', loader: () => import('./calcab-antiderivatives-indefinite-integrals-calcab-part4').then(m => m.calcabAntiderivativesPart4Data) },
      { title: 'Inverse Trig Antiderivatives', loader: () => import('./calcab-antiderivatives-indefinite-integrals-calcab-part5').then(m => m.calcabAntiderivativesPart5Data) },
      { title: 'Mixed Practice', loader: () => import('./calcab-antiderivatives-indefinite-integrals-calcab-part6').then(m => m.calcabAntiderivativesPart6Data) },
      { title: 'Comprehensive Assessment', loader: () => import('./calcab-antiderivatives-indefinite-integrals-calcab-part7').then(m => m.calcabAntiderivativesPart7Data) },
    ],
  },
  'u-substitution-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Basic u-Substitution', loader: () => import('./calcab-u-substitution-calcab-part1').then(m => m.calcabUSubPart1Data) },
      { title: 'Adjusting for Constants', loader: () => import('./calcab-u-substitution-calcab-part2').then(m => m.calcabUSubPart2Data) },
      { title: 'Definite Integrals with u-Sub', loader: () => import('./calcab-u-substitution-calcab-part3').then(m => m.calcabUSubPart3Data) },
      { title: 'Trickier Substitutions', loader: () => import('./calcab-u-substitution-calcab-part4').then(m => m.calcabUSubPart4Data) },
      { title: 'Long Division and Completing the Square', loader: () => import('./calcab-u-substitution-calcab-part5').then(m => m.calcabUSubPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./calcab-u-substitution-calcab-part6').then(m => m.calcabUSubPart6Data) },
      { title: 'Comprehensive Assessment', loader: () => import('./calcab-u-substitution-calcab-part7').then(m => m.calcabUSubPart7Data) },
    ],
  },
  'area-between-curves-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Area Between Two Curves', loader: () => import('./calcab-area-between-curves-calcab-part1').then(m => m.calcabAreaCurvesPart1Data) },
      { title: 'When Curves Switch Position', loader: () => import('./calcab-area-between-curves-calcab-part2').then(m => m.calcabAreaCurvesPart2Data) },
      { title: 'Integrating with Respect to y', loader: () => import('./calcab-area-between-curves-calcab-part3').then(m => m.calcabAreaCurvesPart3Data) },
      { title: 'Multiple Regions', loader: () => import('./calcab-area-between-curves-calcab-part4').then(m => m.calcabAreaCurvesPart4Data) },
      { title: 'Area with Absolute Value', loader: () => import('./calcab-area-between-curves-calcab-part5').then(m => m.calcabAreaCurvesPart5Data) },
      { title: 'AP-Style Workshop', loader: () => import('./calcab-area-between-curves-calcab-part6').then(m => m.calcabAreaCurvesPart6Data) },
      { title: 'Comprehensive Assessment', loader: () => import('./calcab-area-between-curves-calcab-part7').then(m => m.calcabAreaCurvesPart7Data) },
    ],
  },
  'volumes-of-revolution-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Disk Method', loader: () => import('./calcab-volumes-of-revolution-calcab-part1').then(m => m.calcabVolumesPart1Data) },
      { title: 'Washer Method', loader: () => import('./calcab-volumes-of-revolution-calcab-part2').then(m => m.calcabVolumesPart2Data) },
      { title: 'Rotation About Other Axes', loader: () => import('./calcab-volumes-of-revolution-calcab-part3').then(m => m.calcabVolumesPart3Data) },
      { title: 'Cross-Sectional Volumes', loader: () => import('./calcab-volumes-of-revolution-calcab-part4').then(m => m.calcabVolumesPart4Data) },
      { title: 'Disk/Washer in y', loader: () => import('./calcab-volumes-of-revolution-calcab-part5').then(m => m.calcabVolumesPart5Data) },
      { title: 'AP-Style Workshop', loader: () => import('./calcab-volumes-of-revolution-calcab-part6').then(m => m.calcabVolumesPart6Data) },
      { title: 'Comprehensive Assessment', loader: () => import('./calcab-volumes-of-revolution-calcab-part7').then(m => m.calcabVolumesPart7Data) },
    ],
  },
  'accumulation-functions-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Accumulation Concept', loader: () => import('./calcab-accumulation-functions-calcab-part1').then(m => m.calcabAccumulationPart1Data) },
      { title: 'Reading Graphs of f to Analyze F', loader: () => import('./calcab-accumulation-functions-calcab-part2').then(m => m.calcabAccumulationPart2Data) },
      { title: 'FTC Part 1 with Chain Rule Review', loader: () => import('./calcab-accumulation-functions-calcab-part3').then(m => m.calcabAccumulationPart3Data) },
      { title: 'Net Change Applications', loader: () => import('./calcab-accumulation-functions-calcab-part4').then(m => m.calcabAccumulationPart4Data) },
      { title: 'Average Value of a Function', loader: () => import('./calcab-accumulation-functions-calcab-part5').then(m => m.calcabAccumulationPart5Data) },
      { title: 'Practice Workshop', loader: () => import('./calcab-accumulation-functions-calcab-part6').then(m => m.calcabAccumulationPart6Data) },
      { title: 'Comprehensive Assessment', loader: () => import('./calcab-accumulation-functions-calcab-part7').then(m => m.calcabAccumulationPart7Data) },
    ],
  },
  'differential-equations-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Differential Equations', loader: () => import('./calcab-differential-equations-calcab-part1').then(m => m.calcabDiffEqPart1Data) },
      { title: 'Separation of Variables', loader: () => import('./calcab-differential-equations-calcab-part2').then(m => m.calcabDiffEqPart2Data) },
      { title: 'Slope Fields', loader: () => import('./calcab-differential-equations-calcab-part3').then(m => m.calcabDiffEqPart3Data) },
      { title: 'Exponential Growth and Decay', loader: () => import('./calcab-differential-equations-calcab-part4').then(m => m.calcabDiffEqPart4Data) },
      { title: 'More Separation of Variables Practice', loader: () => import('./calcab-differential-equations-calcab-part5').then(m => m.calcabDiffEqPart5Data) },
      { title: 'AP-Style Workshop', loader: () => import('./calcab-differential-equations-calcab-part6').then(m => m.calcabDiffEqPart6Data) },
      { title: 'Comprehensive Assessment', loader: () => import('./calcab-differential-equations-calcab-part7').then(m => m.calcabDiffEqPart7Data) },
    ],
  },
  'particle-motion-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Position, Velocity, Acceleration', loader: () => import('./calcab-particle-motion-calcab-part1').then(m => m.calcabParticleMotionPart1Data) },
      { title: 'Displacement vs Total Distance', loader: () => import('./calcab-particle-motion-calcab-part2').then(m => m.calcabParticleMotionPart2Data) },
      { title: 'Speed and Speeding Up/Slowing Down', loader: () => import('./calcab-particle-motion-calcab-part3').then(m => m.calcabParticleMotionPart3Data) },
      { title: 'Position from Velocity', loader: () => import('./calcab-particle-motion-calcab-part4').then(m => m.calcabParticleMotionPart4Data) },
      { title: 'Velocity from Acceleration', loader: () => import('./calcab-particle-motion-calcab-part5').then(m => m.calcabParticleMotionPart5Data) },
      { title: 'AP-Style Workshop', loader: () => import('./calcab-particle-motion-calcab-part6').then(m => m.calcabParticleMotionPart6Data) },
      { title: 'Final Assessment', loader: () => import('./calcab-particle-motion-calcab-part7').then(m => m.calcabParticleMotionPart7Data) },
    ],
  },
  'exponential-models-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Exponential Growth & Decay', loader: () => import('./calcab-exponential-models-calcab-part1').then(m => m.calcabExpModelsPart1Data) },
      { title: "Newton's Law of Cooling", loader: () => import('./calcab-exponential-models-calcab-part2').then(m => m.calcabExpModelsPart2Data) },
      { title: 'Compound Interest & Continuous Growth', loader: () => import('./calcab-exponential-models-calcab-part3').then(m => m.calcabExpModelsPart3Data) },
      { title: 'Derivatives & Integrals of Exponentials', loader: () => import('./calcab-exponential-models-calcab-part4').then(m => m.calcabExpModelsPart4Data) },
      { title: 'Logistic Growth', loader: () => import('./calcab-exponential-models-calcab-part5').then(m => m.calcabExpModelsPart5Data) },
      { title: 'Practice Workshop', loader: () => import('./calcab-exponential-models-calcab-part6').then(m => m.calcabExpModelsPart6Data) },
      { title: 'Final Assessment', loader: () => import('./calcab-exponential-models-calcab-part7').then(m => m.calcabExpModelsPart7Data) },
    ],
  },
  'integration-applications-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Area Between Curves (Advanced)', loader: () => import('./calcab-integration-applications-calcab-part1').then(m => m.calcabIntAppsPart1Data) },
      { title: 'Cross-Sectional Volumes', loader: () => import('./calcab-integration-applications-calcab-part2').then(m => m.calcabIntAppsPart2Data) },
      { title: 'Volumes: Disk and Washer Methods', loader: () => import('./calcab-integration-applications-calcab-part3').then(m => m.calcabIntAppsPart3Data) },
      { title: 'Riemann Sums and Trapezoidal Rule', loader: () => import('./calcab-integration-applications-calcab-part4').then(m => m.calcabIntAppsPart4Data) },
      { title: 'Rate Problems & Net Change', loader: () => import('./calcab-integration-applications-calcab-part5').then(m => m.calcabIntAppsPart5Data) },
      { title: 'Practice Workshop', loader: () => import('./calcab-integration-applications-calcab-part6').then(m => m.calcabIntAppsPart6Data) },
      { title: 'Final Assessment', loader: () => import('./calcab-integration-applications-calcab-part7').then(m => m.calcabIntAppsPart7Data) },
    ],
  },
  'free-response-strategies-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcab-free-response-strategies-calcab-part1').then(m => m.calcabFRQPart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcab-free-response-strategies-calcab-part2').then(m => m.calcabFRQPart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcab-free-response-strategies-calcab-part3').then(m => m.calcabFRQPart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcab-free-response-strategies-calcab-part4').then(m => m.calcabFRQPart4Data) },
      { title: 'Applications', loader: () => import('./calcab-free-response-strategies-calcab-part5').then(m => m.calcabFRQPart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcab-free-response-strategies-calcab-part6').then(m => m.calcabFRQPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcab-free-response-strategies-calcab-part7').then(m => m.calcabFRQPart7Data) },
    ],
  },
  'ap-exam-review-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcab-ap-exam-review-calcab-part1').then(m => m.calcabExamReviewPart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcab-ap-exam-review-calcab-part2').then(m => m.calcabExamReviewPart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcab-ap-exam-review-calcab-part3').then(m => m.calcabExamReviewPart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcab-ap-exam-review-calcab-part4').then(m => m.calcabExamReviewPart4Data) },
      { title: 'Applications', loader: () => import('./calcab-ap-exam-review-calcab-part5').then(m => m.calcabExamReviewPart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcab-ap-exam-review-calcab-part6').then(m => m.calcabExamReviewPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcab-ap-exam-review-calcab-part7').then(m => m.calcabExamReviewPart7Data) },
    ],
  },
  'inverse-functions-derivatives-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Derivative of an Inverse Function', loader: () => import('./calcab-inverse-functions-derivatives-calcab-part1').then(m => m.calcabInverseFunctionsPart1Data) },
      { title: 'Inverse Trigonometric Derivatives', loader: () => import('./calcab-inverse-functions-derivatives-calcab-part2').then(m => m.calcabInverseFunctionsPart2Data) },
      { title: 'eˣ and ln x Review', loader: () => import('./calcab-inverse-functions-derivatives-calcab-part3').then(m => m.calcabInverseFunctionsPart3Data) },
      { title: 'Table-Based Inverse Problems', loader: () => import('./calcab-inverse-functions-derivatives-calcab-part4').then(m => m.calcabInverseFunctionsPart4Data) },
      { title: 'Integrals Leading to Inverse Trig', loader: () => import('./calcab-inverse-functions-derivatives-calcab-part5').then(m => m.calcabInverseFunctionsPart5Data) },
      { title: 'Practice Workshop', loader: () => import('./calcab-inverse-functions-derivatives-calcab-part6').then(m => m.calcabInverseFunctionsPart6Data) },
      { title: 'Final Assessment', loader: () => import('./calcab-inverse-functions-derivatives-calcab-part7').then(m => m.calcabInverseFunctionsPart7Data) },
    ],
  },
  'tables-data-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Approximating Derivatives from Tables', loader: () => import('./calcab-tables-data-calcab-part1').then(m => m.calcabTablesDataPart1Data) },
      { title: 'Riemann Sums from Tables', loader: () => import('./calcab-tables-data-calcab-part2').then(m => m.calcabTablesDataPart2Data) },
      { title: 'MVT with Tables', loader: () => import('./calcab-tables-data-calcab-part3').then(m => m.calcabTablesDataPart3Data) },
      { title: 'IVT with Tables', loader: () => import('./calcab-tables-data-calcab-part4').then(m => m.calcabTablesDataPart4Data) },
      { title: 'Interpreting f\' from Tables', loader: () => import('./calcab-tables-data-calcab-part5').then(m => m.calcabTablesDataPart5Data) },
      { title: 'Practice Workshop', loader: () => import('./calcab-tables-data-calcab-part6').then(m => m.calcabTablesDataPart6Data) },
      { title: 'Final Assessment', loader: () => import('./calcab-tables-data-calcab-part7').then(m => m.calcabTablesDataPart7Data) },
    ],
  },
  'theorem-applications-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Intermediate Value Theorem (IVT)', loader: () => import('./calcab-theorem-applications-calcab-part1').then(m => m.calcabTheoremsPart1Data) },
      { title: 'The Mean Value Theorem (MVT)', loader: () => import('./calcab-theorem-applications-calcab-part2').then(m => m.calcabTheoremsPart2Data) },
      { title: 'The Extreme Value Theorem (EVT)', loader: () => import('./calcab-theorem-applications-calcab-part3').then(m => m.calcabTheoremsPart3Data) },
      { title: 'Rolle\'s Theorem & MVT Applications', loader: () => import('./calcab-theorem-applications-calcab-part4').then(m => m.calcabTheoremsPart4Data) },
      { title: 'FTC and When to Use Each Theorem', loader: () => import('./calcab-theorem-applications-calcab-part5').then(m => m.calcabTheoremsPart5Data) },
      { title: 'Practice Workshop', loader: () => import('./calcab-theorem-applications-calcab-part6').then(m => m.calcabTheoremsPart6Data) },
      { title: 'Final Assessment', loader: () => import('./calcab-theorem-applications-calcab-part7').then(m => m.calcabTheoremsPart7Data) },
    ],
  },

  'continuity-ivt-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Does It Mean for a Function to Be Continuous?', loader: () => import('./calcab-continuity-ivt-calcab-part1').then(m => m.calcabContinuityIVTPart1Data) },
      { title: 'Making Piecewise Functions Continuous', loader: () => import('./calcab-continuity-ivt-calcab-part2').then(m => m.calcabContinuityIVTPart2Data) },
      { title: 'The Intermediate Value Theorem', loader: () => import('./calcab-continuity-ivt-calcab-part3').then(m => m.calcabContinuityIVTPart3Data) },
      { title: 'Continuity & Differentiability', loader: () => import('./calcab-continuity-ivt-calcab-part4').then(m => m.calcabContinuityIVTPart4Data) },
      { title: 'The Extreme Value Theorem & Existence Theorems', loader: () => import('./calcab-continuity-ivt-calcab-part5').then(m => m.calcabContinuityIVTPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./calcab-continuity-ivt-calcab-part6').then(m => m.calcabContinuityIVTPart6Data) },
      { title: 'Synthesis & AP Review', loader: () => import('./calcab-continuity-ivt-calcab-part7').then(m => m.calcabContinuityIVTPart7Data) },
    ],
  },

  'concavity-inflection-points-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Understanding Concavity', loader: () => import('./calcab-concavity-inflection-points-calcab-part1').then(m => m.calcabConcavityPart1Data) },
      { title: 'The Second Derivative Test for Extrema', loader: () => import('./calcab-concavity-inflection-points-calcab-part2').then(m => m.calcabConcavityPart2Data) },
      { title: 'Complete Curve Sketching Framework', loader: () => import('./calcab-concavity-inflection-points-calcab-part3').then(m => m.calcabConcavityPart3Data) },
      { title: 'Reading Derivative Graphs', loader: () => import('./calcab-concavity-inflection-points-calcab-part4').then(m => m.calcabConcavityPart4Data) },
      { title: 'Position, Velocity, Acceleration & Concavity', loader: () => import('./calcab-concavity-inflection-points-calcab-part5').then(m => m.calcabConcavityPart5Data) },
      { title: 'Connecting Concavity to Optimization', loader: () => import('./calcab-concavity-inflection-points-calcab-part6').then(m => m.calcabConcavityPart6Data) },
      { title: 'AP Free Response Justifications', loader: () => import('./calcab-concavity-inflection-points-calcab-part7').then(m => m.calcabConcavityPart7Data) },
    ],
  },

  'derivatives-exp-log-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Natural Exponential Function', loader: () => import('./calcab-derivatives-exp-log-calcab-part1').then(m => m.calcabDerivExpLogPart1Data) },
      { title: 'Natural Logarithm Derivatives', loader: () => import('./calcab-derivatives-exp-log-calcab-part2').then(m => m.calcabDerivExpLogPart2Data) },
      { title: 'Combining with Product, Quotient, Chain Rules', loader: () => import('./calcab-derivatives-exp-log-calcab-part3').then(m => m.calcabDerivExpLogPart3Data) },
      { title: 'Growth, Decay & Applications', loader: () => import('./calcab-derivatives-exp-log-calcab-part4').then(m => m.calcabDerivExpLogPart4Data) },
      { title: 'Inverse Function Theorem', loader: () => import('./calcab-derivatives-exp-log-calcab-part5').then(m => m.calcabDerivExpLogPart5Data) },
      { title: 'Graphing & Analysis', loader: () => import('./calcab-derivatives-exp-log-calcab-part6').then(m => m.calcabDerivExpLogPart6Data) },
      { title: 'AP Exam Review & Comprehensive Practice', loader: () => import('./calcab-derivatives-exp-log-calcab-part7').then(m => m.calcabDerivExpLogPart7Data) },
    ],
  },

  'implicit-differentiation-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Differentiating Equations Not Solved for y', loader: () => import('./calcab-implicit-differentiation-calcab-part1').then(m => m.calcabImplicitDiffPart1Data) },
      { title: 'Product & Quotient Rule in Implicit Context', loader: () => import('./calcab-implicit-differentiation-calcab-part2').then(m => m.calcabImplicitDiffPart2Data) },
      { title: 'Trigonometric & Exponential Implicit Equations', loader: () => import('./calcab-implicit-differentiation-calcab-part3').then(m => m.calcabImplicitDiffPart3Data) },
      { title: 'Second Derivatives & Higher-Order', loader: () => import('./calcab-implicit-differentiation-calcab-part4').then(m => m.calcabImplicitDiffPart4Data) },
      { title: 'Horizontal & Vertical Tangents', loader: () => import('./calcab-implicit-differentiation-calcab-part5').then(m => m.calcabImplicitDiffPart5Data) },
      { title: 'Related Connections & Inverse Functions', loader: () => import('./calcab-implicit-differentiation-calcab-part6').then(m => m.calcabImplicitDiffPart6Data) },
      { title: 'AP Exam Review & Mixed Practice', loader: () => import('./calcab-implicit-differentiation-calcab-part7').then(m => m.calcabImplicitDiffPart7Data) },
    ],
  },

  'limits-at-infinity-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'End Behavior of Functions', loader: () => import('./calcab-limits-at-infinity-calcab-part1').then(m => m.calcabLimitsInfinityPart1Data) },
      { title: 'Beyond Rational Functions', loader: () => import('./calcab-limits-at-infinity-calcab-part2').then(m => m.calcabLimitsInfinityPart2Data) },
      { title: 'When Horizontal Asymptotes Don\'t Exist', loader: () => import('./calcab-limits-at-infinity-calcab-part3').then(m => m.calcabLimitsInfinityPart3Data) },
      { title: 'Dominance & Relative Growth', loader: () => import('./calcab-limits-at-infinity-calcab-part4').then(m => m.calcabLimitsInfinityPart4Data) },
      { title: 'Squeeze Theorem, Substitution, and Key Limits', loader: () => import('./calcab-limits-at-infinity-calcab-part5').then(m => m.calcabLimitsInfinityPart5Data) },
      { title: 'AP-Level Practice', loader: () => import('./calcab-limits-at-infinity-calcab-part6').then(m => m.calcabLimitsInfinityPart6Data) },
      { title: 'Comprehensive Assessment', loader: () => import('./calcab-limits-at-infinity-calcab-part7').then(m => m.calcabLimitsInfinityPart7Data) },
    ],
  },

  'related-rates-calcab': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Related Rates', loader: () => import('./calcab-related-rates-calcab-part1').then(m => m.calcabRelatedRatesPart1Data) },
      { title: 'Pythagorean Theorem & Distance Problems', loader: () => import('./calcab-related-rates-calcab-part2').then(m => m.calcabRelatedRatesPart2Data) },
      { title: 'Volume & Surface Area Problems', loader: () => import('./calcab-related-rates-calcab-part3').then(m => m.calcabRelatedRatesPart3Data) },
      { title: 'Trigonometric Related Rates', loader: () => import('./calcab-related-rates-calcab-part4').then(m => m.calcabRelatedRatesPart4Data) },
      { title: 'Area & Perimeter Rate Problems', loader: () => import('./calcab-related-rates-calcab-part5').then(m => m.calcabRelatedRatesPart5Data) },
      { title: 'Multi-Step & Combined Problems', loader: () => import('./calcab-related-rates-calcab-part6').then(m => m.calcabRelatedRatesPart6Data) },
      { title: 'AP Exam Free Response Strategies', loader: () => import('./calcab-related-rates-calcab-part7').then(m => m.calcabRelatedRatesPart7Data) },
    ],
  },

  // === AP Calculus BC (20 topics) ===
  'integration-by-parts-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Formula', loader: () => import('./calcbc-integration-by-parts-calcbc-part1').then(m => m.calcbcIntByPartsPart1Data) },
      { title: 'Tabular Method', loader: () => import('./calcbc-integration-by-parts-calcbc-part2').then(m => m.calcbcIntByPartsPart2Data) },
      { title: 'Cycling (Boomerang) Problems', loader: () => import('./calcbc-integration-by-parts-calcbc-part3').then(m => m.calcbcIntByPartsPart3Data) },
      { title: 'Definite Integrals with IBP', loader: () => import('./calcbc-integration-by-parts-calcbc-part4').then(m => m.calcbcIntByPartsPart4Data) },
      { title: 'Special Cases', loader: () => import('./calcbc-integration-by-parts-calcbc-part5').then(m => m.calcbcIntByPartsPart5Data) },
      { title: 'Practice Workshop', loader: () => import('./calcbc-integration-by-parts-calcbc-part6').then(m => m.calcbcIntByPartsPart6Data) },
      { title: 'Final Assessment', loader: () => import('./calcbc-integration-by-parts-calcbc-part7').then(m => m.calcbcIntByPartsPart7Data) },
    ],
  },
  'partial-fractions-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Concept', loader: () => import('./calcbc-partial-fractions-calcbc-part1').then(m => m.calcbcPartialFracPart1Data) },
      { title: 'Repeated Linear Factors', loader: () => import('./calcbc-partial-fractions-calcbc-part2').then(m => m.calcbcPartialFracPart2Data) },
      { title: 'Integration Practice', loader: () => import('./calcbc-partial-fractions-calcbc-part3').then(m => m.calcbcPartialFracPart3Data) },
      { title: 'Long Division First', loader: () => import('./calcbc-partial-fractions-calcbc-part4').then(m => m.calcbcPartialFracPart4Data) },
      { title: 'Logistic DE Connection', loader: () => import('./calcbc-partial-fractions-calcbc-part5').then(m => m.calcbcPartialFracPart5Data) },
      { title: 'Practice Workshop', loader: () => import('./calcbc-partial-fractions-calcbc-part6').then(m => m.calcbcPartialFracPart6Data) },
      { title: 'Final Assessment', loader: () => import('./calcbc-partial-fractions-calcbc-part7').then(m => m.calcbcPartialFracPart7Data) },
    ],
  },
  'improper-integrals-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Infinite Limits of Integration', loader: () => import('./calcbc-improper-integrals-calcbc-part1').then(m => m.calcbcImproperPart1Data) },
      { title: 'The p-Test', loader: () => import('./calcbc-improper-integrals-calcbc-part2').then(m => m.calcbcImproperPart2Data) },
      { title: 'Discontinuous Integrands (Type 2)', loader: () => import('./calcbc-improper-integrals-calcbc-part3').then(m => m.calcbcImproperPart3Data) },
      { title: 'Comparison Test', loader: () => import('./calcbc-improper-integrals-calcbc-part4').then(m => m.calcbcImproperPart4Data) },
      { title: 'Both-Sided Improper Integrals', loader: () => import('./calcbc-improper-integrals-calcbc-part5').then(m => m.calcbcImproperPart5Data) },
      { title: 'Practice Workshop', loader: () => import('./calcbc-improper-integrals-calcbc-part6').then(m => m.calcbcImproperPart6Data) },
      { title: 'Final Assessment', loader: () => import('./calcbc-improper-integrals-calcbc-part7').then(m => m.calcbcImproperPart7Data) },
    ],
  },
  'parametric-curves-calculus-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Parametric Equations', loader: () => import('./calcbc-parametric-curves-calculus-calcbc-part1').then(m => m.calcbcParametricPart1Data) },
      { title: 'Second Derivative', loader: () => import('./calcbc-parametric-curves-calculus-calcbc-part2').then(m => m.calcbcParametricPart2Data) },
      { title: 'Arc Length (Parametric)', loader: () => import('./calcbc-parametric-curves-calculus-calcbc-part3').then(m => m.calcbcParametricPart3Data) },
      { title: 'Area Under Parametric Curves', loader: () => import('./calcbc-parametric-curves-calculus-calcbc-part4').then(m => m.calcbcParametricPart4Data) },
      { title: 'Eliminating the Parameter', loader: () => import('./calcbc-parametric-curves-calculus-calcbc-part5').then(m => m.calcbcParametricPart5Data) },
      { title: 'Practice Workshop', loader: () => import('./calcbc-parametric-curves-calculus-calcbc-part6').then(m => m.calcbcParametricPart6Data) },
      { title: 'Final Assessment', loader: () => import('./calcbc-parametric-curves-calculus-calcbc-part7').then(m => m.calcbcParametricPart7Data) },
    ],
  },
  'polar-calculus-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcbc-polar-calculus-calcbc-part1').then(m => m.calcbcPolarPart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcbc-polar-calculus-calcbc-part2').then(m => m.calcbcPolarPart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcbc-polar-calculus-calcbc-part3').then(m => m.calcbcPolarPart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcbc-polar-calculus-calcbc-part4').then(m => m.calcbcPolarPart4Data) },
      { title: 'Applications', loader: () => import('./calcbc-polar-calculus-calcbc-part5').then(m => m.calcbcPolarPart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcbc-polar-calculus-calcbc-part6').then(m => m.calcbcPolarPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-polar-calculus-calcbc-part7').then(m => m.calcbcPolarPart7Data) },
    ],
  },
  'vector-valued-functions-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcbc-vector-valued-functions-calcbc-part1').then(m => m.calcbcVectorsPart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcbc-vector-valued-functions-calcbc-part2').then(m => m.calcbcVectorsPart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcbc-vector-valued-functions-calcbc-part3').then(m => m.calcbcVectorsPart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcbc-vector-valued-functions-calcbc-part4').then(m => m.calcbcVectorsPart4Data) },
      { title: 'Applications', loader: () => import('./calcbc-vector-valued-functions-calcbc-part5').then(m => m.calcbcVectorsPart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcbc-vector-valued-functions-calcbc-part6').then(m => m.calcbcVectorsPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-vector-valued-functions-calcbc-part7').then(m => m.calcbcVectorsPart7Data) },
    ],
  },
  'infinite-sequences-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Definition & Convergence', loader: () => import('./calcbc-infinite-sequences-calcbc-part1').then(m => m.calcbcSequencesPart1Data) },
      { title: 'Bounded & Monotonic Sequences', loader: () => import('./calcbc-infinite-sequences-calcbc-part2').then(m => m.calcbcSequencesPart2Data) },
      { title: 'Geometric & Recursive Sequences', loader: () => import('./calcbc-infinite-sequences-calcbc-part3').then(m => m.calcbcSequencesPart3Data) },
      { title: 'Growth Rate Hierarchy', loader: () => import('./calcbc-infinite-sequences-calcbc-part4').then(m => m.calcbcSequencesPart4Data) },
      { title: 'Sequences vs. Series', loader: () => import('./calcbc-infinite-sequences-calcbc-part5').then(m => m.calcbcSequencesPart5Data) },
      { title: 'Practice Workshop', loader: () => import('./calcbc-infinite-sequences-calcbc-part6').then(m => m.calcbcSequencesPart6Data) },
      { title: 'Final Assessment', loader: () => import('./calcbc-infinite-sequences-calcbc-part7').then(m => m.calcbcSequencesPart7Data) },
    ],
  },
  'infinite-series-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Partial Sums & Geometric Series', loader: () => import('./calcbc-infinite-series-calcbc-part1').then(m => m.calcbcSeriesPart1Data) },
      { title: 'Telescoping Series & Divergence Test', loader: () => import('./calcbc-infinite-series-calcbc-part2').then(m => m.calcbcSeriesPart2Data) },
      { title: 'Integral Test & p-Series', loader: () => import('./calcbc-infinite-series-calcbc-part3').then(m => m.calcbcSeriesPart3Data) },
      { title: 'Comparison Tests', loader: () => import('./calcbc-infinite-series-calcbc-part4').then(m => m.calcbcSeriesPart4Data) },
      { title: 'Ratio & Root Tests', loader: () => import('./calcbc-infinite-series-calcbc-part5').then(m => m.calcbcSeriesPart5Data) },
      { title: 'Practice Workshop', loader: () => import('./calcbc-infinite-series-calcbc-part6').then(m => m.calcbcSeriesPart6Data) },
      { title: 'Final Assessment', loader: () => import('./calcbc-infinite-series-calcbc-part7').then(m => m.calcbcSeriesPart7Data) },
    ],
  },
  'alternating-series-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcbc-alternating-series-calcbc-part1').then(m => m.calcbcAlternatingPart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcbc-alternating-series-calcbc-part2').then(m => m.calcbcAlternatingPart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcbc-alternating-series-calcbc-part3').then(m => m.calcbcAlternatingPart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcbc-alternating-series-calcbc-part4').then(m => m.calcbcAlternatingPart4Data) },
      { title: 'Applications', loader: () => import('./calcbc-alternating-series-calcbc-part5').then(m => m.calcbcAlternatingPart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcbc-alternating-series-calcbc-part6').then(m => m.calcbcAlternatingPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-alternating-series-calcbc-part7').then(m => m.calcbcAlternatingPart7Data) },
    ],
  },
  'power-series-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcbc-power-series-calcbc-part1').then(m => m.calcbcPowerSeriesPart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcbc-power-series-calcbc-part2').then(m => m.calcbcPowerSeriesPart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcbc-power-series-calcbc-part3').then(m => m.calcbcPowerSeriesPart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcbc-power-series-calcbc-part4').then(m => m.calcbcPowerSeriesPart4Data) },
      { title: 'Applications', loader: () => import('./calcbc-power-series-calcbc-part5').then(m => m.calcbcPowerSeriesPart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcbc-power-series-calcbc-part6').then(m => m.calcbcPowerSeriesPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-power-series-calcbc-part7').then(m => m.calcbcPowerSeriesPart7Data) },
    ],
  },
  'taylor-maclaurin-series-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcbc-taylor-maclaurin-series-calcbc-part1').then(m => m.calcbcTaylorPart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcbc-taylor-maclaurin-series-calcbc-part2').then(m => m.calcbcTaylorPart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcbc-taylor-maclaurin-series-calcbc-part3').then(m => m.calcbcTaylorPart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcbc-taylor-maclaurin-series-calcbc-part4').then(m => m.calcbcTaylorPart4Data) },
      { title: 'Applications', loader: () => import('./calcbc-taylor-maclaurin-series-calcbc-part5').then(m => m.calcbcTaylorPart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcbc-taylor-maclaurin-series-calcbc-part6').then(m => m.calcbcTaylorPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-taylor-maclaurin-series-calcbc-part7').then(m => m.calcbcTaylorPart7Data) },
    ],
  },
  'lagrange-error-bound-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcbc-lagrange-error-bound-calcbc-part1').then(m => m.calcbcLagrangePart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcbc-lagrange-error-bound-calcbc-part2').then(m => m.calcbcLagrangePart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcbc-lagrange-error-bound-calcbc-part3').then(m => m.calcbcLagrangePart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcbc-lagrange-error-bound-calcbc-part4').then(m => m.calcbcLagrangePart4Data) },
      { title: 'Applications', loader: () => import('./calcbc-lagrange-error-bound-calcbc-part5').then(m => m.calcbcLagrangePart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcbc-lagrange-error-bound-calcbc-part6').then(m => m.calcbcLagrangePart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-lagrange-error-bound-calcbc-part7').then(m => m.calcbcLagrangePart7Data) },
    ],
  },
  'convergence-tests-summary-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcbc-convergence-tests-summary-calcbc-part1').then(m => m.calcbcConvergencePart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcbc-convergence-tests-summary-calcbc-part2').then(m => m.calcbcConvergencePart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcbc-convergence-tests-summary-calcbc-part3').then(m => m.calcbcConvergencePart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcbc-convergence-tests-summary-calcbc-part4').then(m => m.calcbcConvergencePart4Data) },
      { title: 'Applications', loader: () => import('./calcbc-convergence-tests-summary-calcbc-part5').then(m => m.calcbcConvergencePart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcbc-convergence-tests-summary-calcbc-part6').then(m => m.calcbcConvergencePart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-convergence-tests-summary-calcbc-part7').then(m => m.calcbcConvergencePart7Data) },
    ],
  },
  'euler-method-advanced-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcbc-euler-method-advanced-calcbc-part1').then(m => m.calcbcEulerPart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcbc-euler-method-advanced-calcbc-part2').then(m => m.calcbcEulerPart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcbc-euler-method-advanced-calcbc-part3').then(m => m.calcbcEulerPart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcbc-euler-method-advanced-calcbc-part4').then(m => m.calcbcEulerPart4Data) },
      { title: 'Applications', loader: () => import('./calcbc-euler-method-advanced-calcbc-part5').then(m => m.calcbcEulerPart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcbc-euler-method-advanced-calcbc-part6').then(m => m.calcbcEulerPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-euler-method-advanced-calcbc-part7').then(m => m.calcbcEulerPart7Data) },
    ],
  },
  'arc-length-surface-area-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcbc-arc-length-surface-area-calcbc-part1').then(m => m.calcbcArcLengthPart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcbc-arc-length-surface-area-calcbc-part2').then(m => m.calcbcArcLengthPart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcbc-arc-length-surface-area-calcbc-part3').then(m => m.calcbcArcLengthPart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcbc-arc-length-surface-area-calcbc-part4').then(m => m.calcbcArcLengthPart4Data) },
      { title: 'Applications', loader: () => import('./calcbc-arc-length-surface-area-calcbc-part5').then(m => m.calcbcArcLengthPart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcbc-arc-length-surface-area-calcbc-part6').then(m => m.calcbcArcLengthPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-arc-length-surface-area-calcbc-part7').then(m => m.calcbcArcLengthPart7Data) },
    ],
  },
  'series-applications-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcbc-series-applications-calcbc-part1').then(m => m.calcbcSeriesAppsPart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcbc-series-applications-calcbc-part2').then(m => m.calcbcSeriesAppsPart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcbc-series-applications-calcbc-part3').then(m => m.calcbcSeriesAppsPart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcbc-series-applications-calcbc-part4').then(m => m.calcbcSeriesAppsPart4Data) },
      { title: 'Applications', loader: () => import('./calcbc-series-applications-calcbc-part5').then(m => m.calcbcSeriesAppsPart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcbc-series-applications-calcbc-part6').then(m => m.calcbcSeriesAppsPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-series-applications-calcbc-part7').then(m => m.calcbcSeriesAppsPart7Data) },
    ],
  },
  'bc-exam-strategies-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcbc-bc-exam-strategies-calcbc-part1').then(m => m.calcbcExamStrategyPart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcbc-bc-exam-strategies-calcbc-part2').then(m => m.calcbcExamStrategyPart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcbc-bc-exam-strategies-calcbc-part3').then(m => m.calcbcExamStrategyPart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcbc-bc-exam-strategies-calcbc-part4').then(m => m.calcbcExamStrategyPart4Data) },
      { title: 'Applications', loader: () => import('./calcbc-bc-exam-strategies-calcbc-part5').then(m => m.calcbcExamStrategyPart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcbc-bc-exam-strategies-calcbc-part6').then(m => m.calcbcExamStrategyPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-bc-exam-strategies-calcbc-part7').then(m => m.calcbcExamStrategyPart7Data) },
    ],
  },
  'logistic-models-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Logistic Differential Equation', loader: () => import('./calcbc-logistic-models-calcbc-part1').then(m => m.calcbcLogisticPart1Data) },
      { title: 'The Solution', loader: () => import('./calcbc-logistic-models-calcbc-part2').then(m => m.calcbcLogisticPart2Data) },
      { title: 'Inflection Point', loader: () => import('./calcbc-logistic-models-calcbc-part3').then(m => m.calcbcLogisticPart3Data) },
      { title: 'Analyzing Logistic Problems', loader: () => import('./calcbc-logistic-models-calcbc-part4').then(m => m.calcbcLogisticPart4Data) },
      { title: 'Logistic vs Exponential', loader: () => import('./calcbc-logistic-models-calcbc-part5').then(m => m.calcbcLogisticPart5Data) },
      { title: 'Practice Workshop', loader: () => import('./calcbc-logistic-models-calcbc-part6').then(m => m.calcbcLogisticPart6Data) },
      { title: 'Final Assessment', loader: () => import('./calcbc-logistic-models-calcbc-part7').then(m => m.calcbcLogisticPart7Data) },
    ],
  },
  'advanced-integration-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcbc-advanced-integration-calcbc-part1').then(m => m.calcbcAdvIntegrationPart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcbc-advanced-integration-calcbc-part2').then(m => m.calcbcAdvIntegrationPart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcbc-advanced-integration-calcbc-part3').then(m => m.calcbcAdvIntegrationPart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcbc-advanced-integration-calcbc-part4').then(m => m.calcbcAdvIntegrationPart4Data) },
      { title: 'Applications', loader: () => import('./calcbc-advanced-integration-calcbc-part5').then(m => m.calcbcAdvIntegrationPart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcbc-advanced-integration-calcbc-part6').then(m => m.calcbcAdvIntegrationPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-advanced-integration-calcbc-part7').then(m => m.calcbcAdvIntegrationPart7Data) },
    ],
  },
  'review-connections-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Core Concepts', loader: () => import('./calcbc-review-connections-calcbc-part1').then(m => m.calcbcReviewPart1Data) },
      { title: 'Worked Examples', loader: () => import('./calcbc-review-connections-calcbc-part2').then(m => m.calcbcReviewPart2Data) },
      { title: 'Problem-Solving Patterns', loader: () => import('./calcbc-review-connections-calcbc-part3').then(m => m.calcbcReviewPart3Data) },
      { title: 'Graphs and Interpretation', loader: () => import('./calcbc-review-connections-calcbc-part4').then(m => m.calcbcReviewPart4Data) },
      { title: 'Applications', loader: () => import('./calcbc-review-connections-calcbc-part5').then(m => m.calcbcReviewPart5Data) },
      { title: 'Exam Strategy', loader: () => import('./calcbc-review-connections-calcbc-part6').then(m => m.calcbcReviewPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-review-connections-calcbc-part7').then(m => m.calcbcReviewPart7Data) },
    ],
  },
  'ratio-root-tests-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Ratio Test', loader: () => import('./calcbc-ratio-root-tests-calcbc-part1').then(m => m.calcbcRatioRootPart1Data) },
      { title: 'The Root Test', loader: () => import('./calcbc-ratio-root-tests-calcbc-part2').then(m => m.calcbcRatioRootPart2Data) },
      { title: 'Choosing the Right Test', loader: () => import('./calcbc-ratio-root-tests-calcbc-part3').then(m => m.calcbcRatioRootPart3Data) },
      { title: 'Absolute vs Conditional Convergence', loader: () => import('./calcbc-ratio-root-tests-calcbc-part4').then(m => m.calcbcRatioRootPart4Data) },
      { title: 'Comparison with Other Tests', loader: () => import('./calcbc-ratio-root-tests-calcbc-part5').then(m => m.calcbcRatioRootPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./calcbc-ratio-root-tests-calcbc-part6').then(m => m.calcbcRatioRootPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-ratio-root-tests-calcbc-part7').then(m => m.calcbcRatioRootPart7Data) },
    ],
  },
  'radius-convergence-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Radius of Convergence', loader: () => import('./calcbc-radius-convergence-calcbc-part1').then(m => m.calcbcRadConvPart1Data) },
      { title: 'Interval of Convergence', loader: () => import('./calcbc-radius-convergence-calcbc-part2').then(m => m.calcbcRadConvPart2Data) },
      { title: 'Differentiation & Integration of Power Series', loader: () => import('./calcbc-radius-convergence-calcbc-part3').then(m => m.calcbcRadConvPart3Data) },
      { title: 'Common Power Series', loader: () => import('./calcbc-radius-convergence-calcbc-part4').then(m => m.calcbcRadConvPart4Data) },
      { title: 'Applications of Power Series', loader: () => import('./calcbc-radius-convergence-calcbc-part5').then(m => m.calcbcRadConvPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./calcbc-radius-convergence-calcbc-part6').then(m => m.calcbcRadConvPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-radius-convergence-calcbc-part7').then(m => m.calcbcRadConvPart7Data) },
    ],
  },
  'parametric-derivatives-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'First Derivative dy/dx', loader: () => import('./calcbc-parametric-derivatives-calcbc-part1').then(m => m.calcbcParamDerivPart1Data) },
      { title: 'Second Derivative d²y/dx²', loader: () => import('./calcbc-parametric-derivatives-calcbc-part2').then(m => m.calcbcParamDerivPart2Data) },
      { title: 'Tangent Lines to Parametric Curves', loader: () => import('./calcbc-parametric-derivatives-calcbc-part3').then(m => m.calcbcParamDerivPart3Data) },
      { title: 'Arc Length of Parametric Curves', loader: () => import('./calcbc-parametric-derivatives-calcbc-part4').then(m => m.calcbcParamDerivPart4Data) },
      { title: 'Speed and Distance', loader: () => import('./calcbc-parametric-derivatives-calcbc-part5').then(m => m.calcbcParamDerivPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./calcbc-parametric-derivatives-calcbc-part6').then(m => m.calcbcParamDerivPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-parametric-derivatives-calcbc-part7').then(m => m.calcbcParamDerivPart7Data) },
    ],
  },
  'polar-area-derivatives-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Polar Area Formula', loader: () => import('./calcbc-polar-area-derivatives-calcbc-part1').then(m => m.calcbcPolarAreaPart1Data) },
      { title: 'Area Between Polar Curves', loader: () => import('./calcbc-polar-area-derivatives-calcbc-part2').then(m => m.calcbcPolarAreaPart2Data) },
      { title: 'Polar Derivatives dy/dx', loader: () => import('./calcbc-polar-area-derivatives-calcbc-part3').then(m => m.calcbcPolarAreaPart3Data) },
      { title: 'Tangent Lines in Polar', loader: () => import('./calcbc-polar-area-derivatives-calcbc-part4').then(m => m.calcbcPolarAreaPart4Data) },
      { title: 'Arc Length in Polar', loader: () => import('./calcbc-polar-area-derivatives-calcbc-part5').then(m => m.calcbcPolarAreaPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./calcbc-polar-area-derivatives-calcbc-part6').then(m => m.calcbcPolarAreaPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-polar-area-derivatives-calcbc-part7').then(m => m.calcbcPolarAreaPart7Data) },
    ],
  },
  'lhopitals-advanced-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'L\u2019H\u00f4pital\u2019s Rule Review', loader: () => import('./calcbc-lhopitals-advanced-calcbc-part1').then(m => m.calcbcLHopPart1Data) },
      { title: 'Repeated Application', loader: () => import('./calcbc-lhopitals-advanced-calcbc-part2').then(m => m.calcbcLHopPart2Data) },
      { title: 'Indeterminate Products 0\u00b7\u221e', loader: () => import('./calcbc-lhopitals-advanced-calcbc-part3').then(m => m.calcbcLHopPart3Data) },
      { title: 'Indeterminate Differences \u221e - \u221e', loader: () => import('./calcbc-lhopitals-advanced-calcbc-part4').then(m => m.calcbcLHopPart4Data) },
      { title: 'Indeterminate Powers', loader: () => import('./calcbc-lhopitals-advanced-calcbc-part5').then(m => m.calcbcLHopPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./calcbc-lhopitals-advanced-calcbc-part6').then(m => m.calcbcLHopPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-lhopitals-advanced-calcbc-part7').then(m => m.calcbcLHopPart7Data) },
    ],
  },
  'motion-along-curve-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Position, Velocity, Acceleration Vectors', loader: () => import('./calcbc-motion-along-curve-calcbc-part1').then(m => m.calcbcMotionPart1Data) },
      { title: 'Speed and Direction', loader: () => import('./calcbc-motion-along-curve-calcbc-part2').then(m => m.calcbcMotionPart2Data) },
      { title: 'Parametric Motion Problems', loader: () => import('./calcbc-motion-along-curve-calcbc-part3').then(m => m.calcbcMotionPart3Data) },
      { title: 'Projectile Motion with Calculus', loader: () => import('./calcbc-motion-along-curve-calcbc-part4').then(m => m.calcbcMotionPart4Data) },
      { title: 'Total Distance Traveled', loader: () => import('./calcbc-motion-along-curve-calcbc-part5').then(m => m.calcbcMotionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./calcbc-motion-along-curve-calcbc-part6').then(m => m.calcbcMotionPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-motion-along-curve-calcbc-part7').then(m => m.calcbcMotionPart7Data) },
    ],
  },
  'integration-techniques-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Trigonometric Integrals', loader: () => import('./calcbc-integration-techniques-calcbc-part1').then(m => m.calcbcIntTechPart1Data) },
      { title: 'Trigonometric Substitution', loader: () => import('./calcbc-integration-techniques-calcbc-part2').then(m => m.calcbcIntTechPart2Data) },
      { title: 'Long Division for Rational Functions', loader: () => import('./calcbc-integration-techniques-calcbc-part3').then(m => m.calcbcIntTechPart3Data) },
      { title: 'Completing the Square', loader: () => import('./calcbc-integration-techniques-calcbc-part4').then(m => m.calcbcIntTechPart4Data) },
      { title: 'Integration Strategy Review', loader: () => import('./calcbc-integration-techniques-calcbc-part5').then(m => m.calcbcIntTechPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./calcbc-integration-techniques-calcbc-part6').then(m => m.calcbcIntTechPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-integration-techniques-calcbc-part7').then(m => m.calcbcIntTechPart7Data) },
    ],
  },
  'differential-equations-bc-calcbc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Separable Equations Review', loader: () => import('./calcbc-differential-equations-bc-calcbc-part1').then(m => m.calcbcDiffEqPart1Data) },
      { title: 'Euler\u2019s Method Refinement', loader: () => import('./calcbc-differential-equations-bc-calcbc-part2').then(m => m.calcbcDiffEqPart2Data) },
      { title: 'Slope Fields & Solutions', loader: () => import('./calcbc-differential-equations-bc-calcbc-part3').then(m => m.calcbcDiffEqPart3Data) },
      { title: 'Exponential Growth & Decay Models', loader: () => import('./calcbc-differential-equations-bc-calcbc-part4').then(m => m.calcbcDiffEqPart4Data) },
      { title: 'Logistic Differential Equations', loader: () => import('./calcbc-differential-equations-bc-calcbc-part5').then(m => m.calcbcDiffEqPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./calcbc-differential-equations-bc-calcbc-part6').then(m => m.calcbcDiffEqPart6Data) },
      { title: 'Mixed Review', loader: () => import('./calcbc-differential-equations-bc-calcbc-part7').then(m => m.calcbcDiffEqPart7Data) },
    ],
  },
  // ═══════════════════════════════════════════
  // SAT Prep — 20 Topics
  // ═══════════════════════════════════════════
  'sat-linear-equations-sat': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Linear Equations Basics', loader: () => import('./sat-sat-linear-equations-sat-part1').then(m => m.satLinearEquationsPart1Data) },
      { title: 'Multi-Step Equations', loader: () => import('./sat-sat-linear-equations-sat-part2').then(m => m.satLinearEquationsPart2Data) },
      { title: 'Variables on Both Sides', loader: () => import('./sat-sat-linear-equations-sat-part3').then(m => m.satLinearEquationsPart3Data) },
      { title: 'Systems of Equations', loader: () => import('./sat-sat-linear-equations-sat-part4').then(m => m.satLinearEquationsPart4Data) },
      { title: 'Modeling with Equations', loader: () => import('./sat-sat-linear-equations-sat-part5').then(m => m.satLinearEquationsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-linear-equations-sat-part6').then(m => m.satLinearEquationsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-linear-equations-sat-part7').then(m => m.satLinearEquationsPart7Data) },
    ],
  },
  'sat-quadratic-equations-sat': {
    parts: [
      { title: 'Quadratic Fundamentals', loader: () => import('./sat-sat-quadratic-equations-sat-part1').then(m => m.satQuadraticsPart1Data) },
      { title: 'Factoring', loader: () => import('./sat-sat-quadratic-equations-sat-part2').then(m => m.satQuadraticsPart2Data) },
      { title: 'Quadratic Formula', loader: () => import('./sat-sat-quadratic-equations-sat-part3').then(m => m.satQuadraticsPart3Data) },
      { title: 'Vertex Form', loader: () => import('./sat-sat-quadratic-equations-sat-part4').then(m => m.satQuadraticsPart4Data) },
      { title: 'Graphing Parabolas', loader: () => import('./sat-sat-quadratic-equations-sat-part5').then(m => m.satQuadraticsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-quadratic-equations-sat-part6').then(m => m.satQuadraticsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-quadratic-equations-sat-part7').then(m => m.satQuadraticsPart7Data) },
    ],
  },
  'sat-functions-graphs-sat': {
    parts: [
      { title: 'Function Notation', loader: () => import('./sat-sat-functions-graphs-sat-part1').then(m => m.satFunctionsPart1Data) },
      { title: 'Interpreting Graphs', loader: () => import('./sat-sat-functions-graphs-sat-part2').then(m => m.satFunctionsPart2Data) },
      { title: 'Domain & Range', loader: () => import('./sat-sat-functions-graphs-sat-part3').then(m => m.satFunctionsPart3Data) },
      { title: 'Transformations', loader: () => import('./sat-sat-functions-graphs-sat-part4').then(m => m.satFunctionsPart4Data) },
      { title: 'Function Composition', loader: () => import('./sat-sat-functions-graphs-sat-part5').then(m => m.satFunctionsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-functions-graphs-sat-part6').then(m => m.satFunctionsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-functions-graphs-sat-part7').then(m => m.satFunctionsPart7Data) },
    ],
  },
  'sat-exponents-radicals-sat': {
    parts: [
      { title: 'Laws of Exponents', loader: () => import('./sat-sat-exponents-radicals-sat-part1').then(m => m.satExponentsPart1Data) },
      { title: 'Negative & Zero Exponents', loader: () => import('./sat-sat-exponents-radicals-sat-part2').then(m => m.satExponentsPart2Data) },
      { title: 'Radicals & Roots', loader: () => import('./sat-sat-exponents-radicals-sat-part3').then(m => m.satExponentsPart3Data) },
      { title: 'Rational Exponents', loader: () => import('./sat-sat-exponents-radicals-sat-part4').then(m => m.satExponentsPart4Data) },
      { title: 'Simplifying Expressions', loader: () => import('./sat-sat-exponents-radicals-sat-part5').then(m => m.satExponentsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-exponents-radicals-sat-part6').then(m => m.satExponentsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-exponents-radicals-sat-part7').then(m => m.satExponentsPart7Data) },
    ],
  },
  'sat-polynomials-factoring-sat': {
    parts: [
      { title: 'Polynomial Basics', loader: () => import('./sat-sat-polynomials-factoring-sat-part1').then(m => m.satPolynomialsPart1Data) },
      { title: 'Factoring Techniques', loader: () => import('./sat-sat-polynomials-factoring-sat-part2').then(m => m.satPolynomialsPart2Data) },
      { title: 'Special Products', loader: () => import('./sat-sat-polynomials-factoring-sat-part3').then(m => m.satPolynomialsPart3Data) },
      { title: 'Polynomial Division', loader: () => import('./sat-sat-polynomials-factoring-sat-part4').then(m => m.satPolynomialsPart4Data) },
      { title: 'Zeros & Roots', loader: () => import('./sat-sat-polynomials-factoring-sat-part5').then(m => m.satPolynomialsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-polynomials-factoring-sat-part6').then(m => m.satPolynomialsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-polynomials-factoring-sat-part7').then(m => m.satPolynomialsPart7Data) },
    ],
  },
  'sat-ratios-proportions-sat': {
    parts: [
      { title: 'Ratios & Rates', loader: () => import('./sat-sat-ratios-proportions-sat-part1').then(m => m.satRatiosPart1Data) },
      { title: 'Proportional Reasoning', loader: () => import('./sat-sat-ratios-proportions-sat-part2').then(m => m.satRatiosPart2Data) },
      { title: 'Percentages', loader: () => import('./sat-sat-ratios-proportions-sat-part3').then(m => m.satRatiosPart3Data) },
      { title: 'Unit Conversion', loader: () => import('./sat-sat-ratios-proportions-sat-part4').then(m => m.satRatiosPart4Data) },
      { title: 'Scale & Modeling', loader: () => import('./sat-sat-ratios-proportions-sat-part5').then(m => m.satRatiosPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-ratios-proportions-sat-part6').then(m => m.satRatiosPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-ratios-proportions-sat-part7').then(m => m.satRatiosPart7Data) },
    ],
  },
  'sat-geometry-angles-sat': {
    parts: [
      { title: 'Lines & Angles', loader: () => import('./sat-sat-geometry-angles-sat-part1').then(m => m.satGeometryPart1Data) },
      { title: 'Triangle Properties', loader: () => import('./sat-sat-geometry-angles-sat-part2').then(m => m.satGeometryPart2Data) },
      { title: 'Circle Properties', loader: () => import('./sat-sat-geometry-angles-sat-part3').then(m => m.satGeometryPart3Data) },
      { title: 'Area & Volume', loader: () => import('./sat-sat-geometry-angles-sat-part4').then(m => m.satGeometryPart4Data) },
      { title: 'Coordinate Geometry', loader: () => import('./sat-sat-geometry-angles-sat-part5').then(m => m.satGeometryPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-geometry-angles-sat-part6').then(m => m.satGeometryPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-geometry-angles-sat-part7').then(m => m.satGeometryPart7Data) },
    ],
  },
  'sat-data-statistics-sat': {
    parts: [
      { title: 'Mean, Median, Mode', loader: () => import('./sat-sat-data-statistics-sat-part1').then(m => m.satDataStatsPart1Data) },
      { title: 'Data Displays', loader: () => import('./sat-sat-data-statistics-sat-part2').then(m => m.satDataStatsPart2Data) },
      { title: 'Interpreting Tables', loader: () => import('./sat-sat-data-statistics-sat-part3').then(m => m.satDataStatsPart3Data) },
      { title: 'Standard Deviation', loader: () => import('./sat-sat-data-statistics-sat-part4').then(m => m.satDataStatsPart4Data) },
      { title: 'Statistical Inference', loader: () => import('./sat-sat-data-statistics-sat-part5').then(m => m.satDataStatsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-data-statistics-sat-part6').then(m => m.satDataStatsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-data-statistics-sat-part7').then(m => m.satDataStatsPart7Data) },
    ],
  },
  'sat-exponential-functions-sat': {
    parts: [
      { title: 'Exponential Growth', loader: () => import('./sat-sat-exponential-functions-sat-part1').then(m => m.satExponentialFnPart1Data) },
      { title: 'Exponential Decay', loader: () => import('./sat-sat-exponential-functions-sat-part2').then(m => m.satExponentialFnPart2Data) },
      { title: 'Compound Interest', loader: () => import('./sat-sat-exponential-functions-sat-part3').then(m => m.satExponentialFnPart3Data) },
      { title: 'Graphing Exponentials', loader: () => import('./sat-sat-exponential-functions-sat-part4').then(m => m.satExponentialFnPart4Data) },
      { title: 'Exponential Equations', loader: () => import('./sat-sat-exponential-functions-sat-part5').then(m => m.satExponentialFnPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-exponential-functions-sat-part6').then(m => m.satExponentialFnPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-exponential-functions-sat-part7').then(m => m.satExponentialFnPart7Data) },
    ],
  },
  'sat-circles-trig-sat': {
    parts: [
      { title: 'Circle Equations', loader: () => import('./sat-sat-circles-trig-sat-part1').then(m => m.satCirclesTrigPart1Data) },
      { title: 'Arc Length & Sectors', loader: () => import('./sat-sat-circles-trig-sat-part2').then(m => m.satCirclesTrigPart2Data) },
      { title: 'Right Triangle Trig', loader: () => import('./sat-sat-circles-trig-sat-part3').then(m => m.satCirclesTrigPart3Data) },
      { title: 'Unit Circle Basics', loader: () => import('./sat-sat-circles-trig-sat-part4').then(m => m.satCirclesTrigPart4Data) },
      { title: 'Trig Applications', loader: () => import('./sat-sat-circles-trig-sat-part5').then(m => m.satCirclesTrigPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-circles-trig-sat-part6').then(m => m.satCirclesTrigPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-circles-trig-sat-part7').then(m => m.satCirclesTrigPart7Data) },
    ],
  },
  'sat-complex-numbers-sat': {
    parts: [
      { title: 'Imaginary Unit', loader: () => import('./sat-sat-complex-numbers-sat-part1').then(m => m.satComplexPart1Data) },
      { title: 'Complex Arithmetic', loader: () => import('./sat-sat-complex-numbers-sat-part2').then(m => m.satComplexPart2Data) },
      { title: 'Complex Conjugates', loader: () => import('./sat-sat-complex-numbers-sat-part3').then(m => m.satComplexPart3Data) },
      { title: 'Quadratics & Complex Roots', loader: () => import('./sat-sat-complex-numbers-sat-part4').then(m => m.satComplexPart4Data) },
      { title: 'Powers of i', loader: () => import('./sat-sat-complex-numbers-sat-part5').then(m => m.satComplexPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-complex-numbers-sat-part6').then(m => m.satComplexPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-complex-numbers-sat-part7').then(m => m.satComplexPart7Data) },
    ],
  },
  'sat-reading-evidence-sat': {
    parts: [
      { title: 'Evidence-Based Reading', loader: () => import('./sat-sat-reading-evidence-sat-part1').then(m => m.satReadingEvidencePart1Data) },
      { title: 'Main Idea & Purpose', loader: () => import('./sat-sat-reading-evidence-sat-part2').then(m => m.satReadingEvidencePart2Data) },
      { title: 'Inference Questions', loader: () => import('./sat-sat-reading-evidence-sat-part3').then(m => m.satReadingEvidencePart3Data) },
      { title: 'Vocabulary in Context', loader: () => import('./sat-sat-reading-evidence-sat-part4').then(m => m.satReadingEvidencePart4Data) },
      { title: 'Command of Evidence', loader: () => import('./sat-sat-reading-evidence-sat-part5').then(m => m.satReadingEvidencePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-reading-evidence-sat-part6').then(m => m.satReadingEvidencePart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-reading-evidence-sat-part7').then(m => m.satReadingEvidencePart7Data) },
    ],
  },
  'sat-punctuation-sat': {
    completionDestination: 'competitive',
    practiceModeParts: [1, 2, 3, 4, 5],
    parts: [
      { title: 'Overview & Sentence Fundamentals', loader: () => import('./sat-sat-punctuation-sat-part1').then(m => m.satPunctuationPart1Data) },
      { title: 'Commas: The Most-Tested Mark', loader: () => import('./sat-sat-punctuation-sat-part2').then(m => m.satPunctuationPart2Data) },
      { title: 'Semicolons & Colons', loader: () => import('./sat-sat-punctuation-sat-part3').then(m => m.satPunctuationPart3Data) },
      { title: 'Dashes & Apostrophes', loader: () => import('./sat-sat-punctuation-sat-part4').then(m => m.satPunctuationPart4Data) },
      { title: 'Restrictive vs. Nonrestrictive', loader: () => import('./sat-sat-punctuation-sat-part5').then(m => m.satPunctuationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-punctuation-sat-part6').then(m => m.satPunctuationPart6Data) },
      { title: 'Review & Final Challenge', loader: () => import('./sat-sat-punctuation-sat-part7').then(m => m.satPunctuationPart7Data) },
    ],
  },
  'sat-punctuation-commas-semicolons-sat': {
    completionDestination: 'competitive',
    practiceModeParts: [1, 2, 3, 4, 5],
    parts: [
      { title: 'Comma Basics', loader: () => import('./sat-sat-punctuation-commas-semicolons-sat-part1').then(m => m.satPunctuationCommasPart1Data) },
      { title: 'Nonessential vs. Essential Clauses', loader: () => import('./sat-sat-punctuation-commas-semicolons-sat-part2').then(m => m.satPunctuationCommasPart2Data) },
      { title: 'Semicolons', loader: () => import('./sat-sat-punctuation-commas-semicolons-sat-part3').then(m => m.satPunctuationCommasPart3Data) },
      { title: 'Colons', loader: () => import('./sat-sat-punctuation-commas-semicolons-sat-part4').then(m => m.satPunctuationCommasPart4Data) },
      { title: 'Unnecessary Commas & Traps', loader: () => import('./sat-sat-punctuation-commas-semicolons-sat-part5').then(m => m.satPunctuationCommasPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-punctuation-commas-semicolons-sat-part6').then(m => m.satPunctuationCommasPart6Data) },
      { title: 'Review & Final Challenge', loader: () => import('./sat-sat-punctuation-commas-semicolons-sat-part7').then(m => m.satPunctuationCommasPart7Data) },
    ],
  },
  'sat-grammar-conventions-sat': {
    parts: [
      { title: 'Subject-Verb Agreement', loader: () => import('./sat-sat-grammar-conventions-sat-part1').then(m => m.satGrammarPart1Data) },
      { title: 'Pronoun Clarity', loader: () => import('./sat-sat-grammar-conventions-sat-part2').then(m => m.satGrammarPart2Data) },
      { title: 'Punctuation Rules', loader: () => import('./sat-sat-grammar-conventions-sat-part3').then(m => m.satGrammarPart3Data) },
      { title: 'Sentence Structure', loader: () => import('./sat-sat-grammar-conventions-sat-part4').then(m => m.satGrammarPart4Data) },
      { title: 'Modifier Placement', loader: () => import('./sat-sat-grammar-conventions-sat-part5').then(m => m.satGrammarPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-grammar-conventions-sat-part6').then(m => m.satGrammarPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-grammar-conventions-sat-part7').then(m => m.satGrammarPart7Data) },
    ],
  },
  'sat-expression-ideas-sat': {
    parts: [
      { title: 'Effective Language Use', loader: () => import('./sat-sat-expression-ideas-sat-part1').then(m => m.satExpressionPart1Data) },
      { title: 'Conciseness', loader: () => import('./sat-sat-expression-ideas-sat-part2').then(m => m.satExpressionPart2Data) },
      { title: 'Tone & Style', loader: () => import('./sat-sat-expression-ideas-sat-part3').then(m => m.satExpressionPart3Data) },
      { title: 'Transitions', loader: () => import('./sat-sat-expression-ideas-sat-part4').then(m => m.satExpressionPart4Data) },
      { title: 'Sentence Combining', loader: () => import('./sat-sat-expression-ideas-sat-part5').then(m => m.satExpressionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-expression-ideas-sat-part6').then(m => m.satExpressionPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-expression-ideas-sat-part7').then(m => m.satExpressionPart7Data) },
    ],
  },
  'sat-word-problems-sat': {
    parts: [
      { title: 'Translating Words to Math', loader: () => import('./sat-sat-word-problems-sat-part1').then(m => m.satWordProblemsPart1Data) },
      { title: 'Rate Problems', loader: () => import('./sat-sat-word-problems-sat-part2').then(m => m.satWordProblemsPart2Data) },
      { title: 'Mixture Problems', loader: () => import('./sat-sat-word-problems-sat-part3').then(m => m.satWordProblemsPart3Data) },
      { title: 'Age & Number Problems', loader: () => import('./sat-sat-word-problems-sat-part4').then(m => m.satWordProblemsPart4Data) },
      { title: 'Multi-Step Word Problems', loader: () => import('./sat-sat-word-problems-sat-part5').then(m => m.satWordProblemsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-word-problems-sat-part6').then(m => m.satWordProblemsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-word-problems-sat-part7').then(m => m.satWordProblemsPart7Data) },
    ],
  },
  'sat-passport-advanced-math-sat': {
    parts: [
      { title: 'Advanced Equations', loader: () => import('./sat-sat-passport-advanced-math-sat-part1').then(m => m.satPassportAdvPart1Data) },
      { title: 'Function Analysis', loader: () => import('./sat-sat-passport-advanced-math-sat-part2').then(m => m.satPassportAdvPart2Data) },
      { title: 'Nonlinear Systems', loader: () => import('./sat-sat-passport-advanced-math-sat-part3').then(m => m.satPassportAdvPart3Data) },
      { title: 'Polynomial Manipulation', loader: () => import('./sat-sat-passport-advanced-math-sat-part4').then(m => m.satPassportAdvPart4Data) },
      { title: 'Exponential & Radical Equations', loader: () => import('./sat-sat-passport-advanced-math-sat-part5').then(m => m.satPassportAdvPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-passport-advanced-math-sat-part6').then(m => m.satPassportAdvPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-passport-advanced-math-sat-part7').then(m => m.satPassportAdvPart7Data) },
    ],
  },
  'sat-problem-solving-data-sat': {
    parts: [
      { title: 'Data Analysis', loader: () => import('./sat-sat-problem-solving-data-sat-part1').then(m => m.satProbSolvDataPart1Data) },
      { title: 'Scatterplots', loader: () => import('./sat-sat-problem-solving-data-sat-part2').then(m => m.satProbSolvDataPart2Data) },
      { title: 'Probability', loader: () => import('./sat-sat-problem-solving-data-sat-part3').then(m => m.satProbSolvDataPart3Data) },
      { title: 'Two-Way Tables', loader: () => import('./sat-sat-problem-solving-data-sat-part4').then(m => m.satProbSolvDataPart4Data) },
      { title: 'Statistical Modeling', loader: () => import('./sat-sat-problem-solving-data-sat-part5').then(m => m.satProbSolvDataPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-problem-solving-data-sat-part6').then(m => m.satProbSolvDataPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-problem-solving-data-sat-part7').then(m => m.satProbSolvDataPart7Data) },
    ],
  },
  'sat-calculator-strategy-sat': {
    parts: [
      { title: 'Calculator Overview', loader: () => import('./sat-sat-calculator-strategy-sat-part1').then(m => m.satCalcStrategyPart1Data) },
      { title: 'Graphing to Solve', loader: () => import('./sat-sat-calculator-strategy-sat-part2').then(m => m.satCalcStrategyPart2Data) },
      { title: 'Using Tables', loader: () => import('./sat-sat-calculator-strategy-sat-part3').then(m => m.satCalcStrategyPart3Data) },
      { title: 'Storing Values', loader: () => import('./sat-sat-calculator-strategy-sat-part4').then(m => m.satCalcStrategyPart4Data) },
      { title: 'Calculator vs. Mental Math', loader: () => import('./sat-sat-calculator-strategy-sat-part5').then(m => m.satCalcStrategyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-calculator-strategy-sat-part6').then(m => m.satCalcStrategyPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-calculator-strategy-sat-part7').then(m => m.satCalcStrategyPart7Data) },
    ],
  },
  'sat-reading-writing-strategy-sat': {
    parts: [
      { title: 'Section Overview', loader: () => import('./sat-sat-reading-writing-strategy-sat-part1').then(m => m.satRWStrategyPart1Data) },
      { title: 'Time Management', loader: () => import('./sat-sat-reading-writing-strategy-sat-part2').then(m => m.satRWStrategyPart2Data) },
      { title: 'Passage Strategy', loader: () => import('./sat-sat-reading-writing-strategy-sat-part3').then(m => m.satRWStrategyPart3Data) },
      { title: 'Answer Elimination', loader: () => import('./sat-sat-reading-writing-strategy-sat-part4').then(m => m.satRWStrategyPart4Data) },
      { title: 'Evidence Pairing', loader: () => import('./sat-sat-reading-writing-strategy-sat-part5').then(m => m.satRWStrategyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-reading-writing-strategy-sat-part6').then(m => m.satRWStrategyPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-reading-writing-strategy-sat-part7').then(m => m.satRWStrategyPart7Data) },
    ],
  },
  'sat-test-day-strategy-sat': {
    parts: [
      { title: 'Test Format', loader: () => import('./sat-sat-test-day-strategy-sat-part1').then(m => m.satTestDayStrategyPart1Data) },
      { title: 'What to Bring', loader: () => import('./sat-sat-test-day-strategy-sat-part2').then(m => m.satTestDayStrategyPart2Data) },
      { title: 'Section Timing', loader: () => import('./sat-sat-test-day-strategy-sat-part3').then(m => m.satTestDayStrategyPart3Data) },
      { title: 'Guessing Strategy', loader: () => import('./sat-sat-test-day-strategy-sat-part4').then(m => m.satTestDayStrategyPart4Data) },
      { title: 'Mental Preparation', loader: () => import('./sat-sat-test-day-strategy-sat-part5').then(m => m.satTestDayStrategyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./sat-sat-test-day-strategy-sat-part6').then(m => m.satTestDayStrategyPart6Data) },
      { title: 'Review & Applications', loader: () => import('./sat-sat-test-day-strategy-sat-part7').then(m => m.satTestDayStrategyPart7Data) },
    ],
  },
  // ═══════════════════════════════════════════
  // ACT Prep — 20 Topics
  // ═══════════════════════════════════════════
  'act-pre-algebra-basics-act': {
    parts: [
      { title: 'Number Properties', loader: () => import('./act-act-pre-algebra-basics-act-part1').then(m => m.actPreAlgebraPart1Data) },
      { title: 'Fractions & Decimals', loader: () => import('./act-act-pre-algebra-basics-act-part2').then(m => m.actPreAlgebraPart2Data) },
      { title: 'Ratios & Proportions', loader: () => import('./act-act-pre-algebra-basics-act-part3').then(m => m.actPreAlgebraPart3Data) },
      { title: 'Percentages', loader: () => import('./act-act-pre-algebra-basics-act-part4').then(m => m.actPreAlgebraPart4Data) },
      { title: 'Order of Operations', loader: () => import('./act-act-pre-algebra-basics-act-part5').then(m => m.actPreAlgebraPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-pre-algebra-basics-act-part6').then(m => m.actPreAlgebraPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-pre-algebra-basics-act-part7').then(m => m.actPreAlgebraPart7Data) },
    ],
  },
  'act-algebra-equations-act': {
    parts: [
      { title: 'Linear Equations', loader: () => import('./act-act-algebra-equations-act-part1').then(m => m.actAlgebraPart1Data) },
      { title: 'Inequalities', loader: () => import('./act-act-algebra-equations-act-part2').then(m => m.actAlgebraPart2Data) },
      { title: 'Systems of Equations', loader: () => import('./act-act-algebra-equations-act-part3').then(m => m.actAlgebraPart3Data) },
      { title: 'Absolute Value', loader: () => import('./act-act-algebra-equations-act-part4').then(m => m.actAlgebraPart4Data) },
      { title: 'Word Problem Translation', loader: () => import('./act-act-algebra-equations-act-part5').then(m => m.actAlgebraPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-algebra-equations-act-part6').then(m => m.actAlgebraPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-algebra-equations-act-part7').then(m => m.actAlgebraPart7Data) },
    ],
  },
  'act-intermediate-algebra-act': {
    parts: [
      { title: 'Quadratic Equations', loader: () => import('./act-act-intermediate-algebra-act-part1').then(m => m.actIntermAlgPart1Data) },
      { title: 'Polynomial Operations', loader: () => import('./act-act-intermediate-algebra-act-part2').then(m => m.actIntermAlgPart2Data) },
      { title: 'Radical Expressions', loader: () => import('./act-act-intermediate-algebra-act-part3').then(m => m.actIntermAlgPart3Data) },
      { title: 'Complex Numbers', loader: () => import('./act-act-intermediate-algebra-act-part4').then(m => m.actIntermAlgPart4Data) },
      { title: 'Sequences & Patterns', loader: () => import('./act-act-intermediate-algebra-act-part5').then(m => m.actIntermAlgPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-intermediate-algebra-act-part6').then(m => m.actIntermAlgPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-intermediate-algebra-act-part7').then(m => m.actIntermAlgPart7Data) },
    ],
  },
  'act-coordinate-geometry-act': {
    parts: [
      { title: 'Graphing Lines', loader: () => import('./act-act-coordinate-geometry-act-part1').then(m => m.actCoordGeomPart1Data) },
      { title: 'Distance & Midpoint', loader: () => import('./act-act-coordinate-geometry-act-part2').then(m => m.actCoordGeomPart2Data) },
      { title: 'Slope Applications', loader: () => import('./act-act-coordinate-geometry-act-part3').then(m => m.actCoordGeomPart3Data) },
      { title: 'Conic Sections Basics', loader: () => import('./act-act-coordinate-geometry-act-part4').then(m => m.actCoordGeomPart4Data) },
      { title: 'Transformations', loader: () => import('./act-act-coordinate-geometry-act-part5').then(m => m.actCoordGeomPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-coordinate-geometry-act-part6').then(m => m.actCoordGeomPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-coordinate-geometry-act-part7').then(m => m.actCoordGeomPart7Data) },
    ],
  },
  'act-plane-geometry-act': {
    parts: [
      { title: 'Angles and Lines', loader: () => import('./act-act-plane-geometry-act-part1').then(m => m.actPlaneGeomPart1Data) },
      { title: 'Triangle Properties', loader: () => import('./act-act-plane-geometry-act-part2').then(m => m.actPlaneGeomPart2Data) },
      { title: 'Quadrilaterals & Polygons', loader: () => import('./act-act-plane-geometry-act-part3').then(m => m.actPlaneGeomPart3Data) },
      { title: 'Circles', loader: () => import('./act-act-plane-geometry-act-part4').then(m => m.actPlaneGeomPart4Data) },
      { title: 'Area & Perimeter', loader: () => import('./act-act-plane-geometry-act-part5').then(m => m.actPlaneGeomPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-plane-geometry-act-part6').then(m => m.actPlaneGeomPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-plane-geometry-act-part7').then(m => m.actPlaneGeomPart7Data) },
    ],
  },
  'act-trigonometry-act': {
    parts: [
      { title: 'Right Triangle Trig', loader: () => import('./act-act-trigonometry-act-part1').then(m => m.actTrigPart1Data) },
      { title: 'Trig Ratios & Applications', loader: () => import('./act-act-trigonometry-act-part2').then(m => m.actTrigPart2Data) },
      { title: 'Unit Circle', loader: () => import('./act-act-trigonometry-act-part3').then(m => m.actTrigPart3Data) },
      { title: 'Trig Identities', loader: () => import('./act-act-trigonometry-act-part4').then(m => m.actTrigPart4Data) },
      { title: 'Graphing Trig Functions', loader: () => import('./act-act-trigonometry-act-part5').then(m => m.actTrigPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-trigonometry-act-part6').then(m => m.actTrigPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-trigonometry-act-part7').then(m => m.actTrigPart7Data) },
    ],
  },
  'act-statistics-probability-act': {
    parts: [
      { title: 'Mean, Median, Mode', loader: () => import('./act-act-statistics-probability-act-part1').then(m => m.actStatProbPart1Data) },
      { title: 'Data Displays', loader: () => import('./act-act-statistics-probability-act-part2').then(m => m.actStatProbPart2Data) },
      { title: 'Counting Principles', loader: () => import('./act-act-statistics-probability-act-part3').then(m => m.actStatProbPart3Data) },
      { title: 'Basic Probability', loader: () => import('./act-act-statistics-probability-act-part4').then(m => m.actStatProbPart4Data) },
      { title: 'Combinations & Permutations', loader: () => import('./act-act-statistics-probability-act-part5').then(m => m.actStatProbPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-statistics-probability-act-part6').then(m => m.actStatProbPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-statistics-probability-act-part7').then(m => m.actStatProbPart7Data) },
    ],
  },
  'act-english-grammar-act': {
    parts: [
      { title: 'Subject-Verb Agreement', loader: () => import('./act-act-english-grammar-act-part1').then(m => m.actEnglishGrammarPart1Data) },
      { title: 'Pronoun Rules', loader: () => import('./act-act-english-grammar-act-part2').then(m => m.actEnglishGrammarPart2Data) },
      { title: 'Verb Tense', loader: () => import('./act-act-english-grammar-act-part3').then(m => m.actEnglishGrammarPart3Data) },
      { title: 'Sentence Structure', loader: () => import('./act-act-english-grammar-act-part4').then(m => m.actEnglishGrammarPart4Data) },
      { title: 'Modifiers & Parallelism', loader: () => import('./act-act-english-grammar-act-part5').then(m => m.actEnglishGrammarPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-english-grammar-act-part6').then(m => m.actEnglishGrammarPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-english-grammar-act-part7').then(m => m.actEnglishGrammarPart7Data) },
    ],
  },
  'act-english-rhetorical-act': {
    parts: [
      { title: 'Transitions & Organization', loader: () => import('./act-act-english-rhetorical-act-part1').then(m => m.actRhetoricalPart1Data) },
      { title: 'Adding & Deleting Sentences', loader: () => import('./act-act-english-rhetorical-act-part2').then(m => m.actRhetoricalPart2Data) },
      { title: 'Sentence Placement', loader: () => import('./act-act-english-rhetorical-act-part3').then(m => m.actRhetoricalPart3Data) },
      { title: 'Conciseness', loader: () => import('./act-act-english-rhetorical-act-part4').then(m => m.actRhetoricalPart4Data) },
      { title: 'Author Purpose & Style', loader: () => import('./act-act-english-rhetorical-act-part5').then(m => m.actRhetoricalPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-english-rhetorical-act-part6').then(m => m.actRhetoricalPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-english-rhetorical-act-part7').then(m => m.actRhetoricalPart7Data) },
    ],
  },
  'act-english-punctuation-act': {
    parts: [
      { title: 'Commas', loader: () => import('./act-act-english-punctuation-act-part1').then(m => m.actPunctuationPart1Data) },
      { title: 'Semicolons & Colons', loader: () => import('./act-act-english-punctuation-act-part2').then(m => m.actPunctuationPart2Data) },
      { title: 'Apostrophes', loader: () => import('./act-act-english-punctuation-act-part3').then(m => m.actPunctuationPart3Data) },
      { title: 'Dashes & Parentheses', loader: () => import('./act-act-english-punctuation-act-part4').then(m => m.actPunctuationPart4Data) },
      { title: 'Common Punctuation Errors', loader: () => import('./act-act-english-punctuation-act-part5').then(m => m.actPunctuationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-english-punctuation-act-part6').then(m => m.actPunctuationPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-english-punctuation-act-part7').then(m => m.actPunctuationPart7Data) },
    ],
  },
  'act-reading-main-ideas-act': {
    parts: [
      { title: 'Finding the Main Idea', loader: () => import('./act-act-reading-main-ideas-act-part1').then(m => m.actReadingMainPart1Data) },
      { title: 'Supporting Details', loader: () => import('./act-act-reading-main-ideas-act-part2').then(m => m.actReadingMainPart2Data) },
      { title: 'Making Inferences', loader: () => import('./act-act-reading-main-ideas-act-part3').then(m => m.actReadingMainPart3Data) },
      { title: 'Author Purpose', loader: () => import('./act-act-reading-main-ideas-act-part4').then(m => m.actReadingMainPart4Data) },
      { title: 'Vocabulary in Context', loader: () => import('./act-act-reading-main-ideas-act-part5').then(m => m.actReadingMainPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-reading-main-ideas-act-part6').then(m => m.actReadingMainPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-reading-main-ideas-act-part7').then(m => m.actReadingMainPart7Data) },
    ],
  },
  'act-reading-passage-types-act': {
    parts: [
      { title: 'Prose Fiction / Literary Narrative', loader: () => import('./act-act-reading-passage-types-act-part1').then(m => m.actPassageTypesPart1Data) },
      { title: 'Social Science', loader: () => import('./act-act-reading-passage-types-act-part2').then(m => m.actPassageTypesPart2Data) },
      { title: 'Humanities', loader: () => import('./act-act-reading-passage-types-act-part3').then(m => m.actPassageTypesPart3Data) },
      { title: 'Natural Science', loader: () => import('./act-act-reading-passage-types-act-part4').then(m => m.actPassageTypesPart4Data) },
      { title: 'Paired Passages', loader: () => import('./act-act-reading-passage-types-act-part5').then(m => m.actPassageTypesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-reading-passage-types-act-part6').then(m => m.actPassageTypesPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-reading-passage-types-act-part7').then(m => m.actPassageTypesPart7Data) },
    ],
  },
  'act-reading-strategy-act': {
    parts: [
      { title: 'Time Management', loader: () => import('./act-act-reading-strategy-act-part1').then(m => m.actReadingStratPart1Data) },
      { title: 'Passage Order Strategy', loader: () => import('./act-act-reading-strategy-act-part2').then(m => m.actReadingStratPart2Data) },
      { title: 'Active Reading', loader: () => import('./act-act-reading-strategy-act-part3').then(m => m.actReadingStratPart3Data) },
      { title: 'Eliminating Wrong Answers', loader: () => import('./act-act-reading-strategy-act-part4').then(m => m.actReadingStratPart4Data) },
      { title: 'Question Type Recognition', loader: () => import('./act-act-reading-strategy-act-part5').then(m => m.actReadingStratPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-reading-strategy-act-part6').then(m => m.actReadingStratPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-reading-strategy-act-part7').then(m => m.actReadingStratPart7Data) },
    ],
  },
  'act-science-data-act': {
    parts: [
      { title: 'Reading Data Tables', loader: () => import('./act-act-science-data-act-part1').then(m => m.actScienceDataPart1Data) },
      { title: 'Interpreting Graphs', loader: () => import('./act-act-science-data-act-part2').then(m => m.actScienceDataPart2Data) },
      { title: 'Identifying Trends', loader: () => import('./act-act-science-data-act-part3').then(m => m.actScienceDataPart3Data) },
      { title: 'Comparing Data Sets', loader: () => import('./act-act-science-data-act-part4').then(m => m.actScienceDataPart4Data) },
      { title: 'Making Predictions', loader: () => import('./act-act-science-data-act-part5').then(m => m.actScienceDataPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-science-data-act-part6').then(m => m.actScienceDataPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-science-data-act-part7').then(m => m.actScienceDataPart7Data) },
    ],
  },
  'act-science-experiments-act': {
    parts: [
      { title: 'Experimental Design', loader: () => import('./act-act-science-experiments-act-part1').then(m => m.actScienceExpPart1Data) },
      { title: 'Variables & Controls', loader: () => import('./act-act-science-experiments-act-part2').then(m => m.actScienceExpPart2Data) },
      { title: 'Research Summaries', loader: () => import('./act-act-science-experiments-act-part3').then(m => m.actScienceExpPart3Data) },
      { title: 'Conflicting Viewpoints', loader: () => import('./act-act-science-experiments-act-part4').then(m => m.actScienceExpPart4Data) },
      { title: 'Evaluating Conclusions', loader: () => import('./act-act-science-experiments-act-part5').then(m => m.actScienceExpPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-science-experiments-act-part6').then(m => m.actScienceExpPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-science-experiments-act-part7').then(m => m.actScienceExpPart7Data) },
    ],
  },
  'act-science-reasoning-act': {
    parts: [
      { title: 'Scientific Method', loader: () => import('./act-act-science-reasoning-act-part1').then(m => m.actScienceReasonPart1Data) },
      { title: 'Hypothesis Testing', loader: () => import('./act-act-science-reasoning-act-part2').then(m => m.actScienceReasonPart2Data) },
      { title: 'Drawing Conclusions', loader: () => import('./act-act-science-reasoning-act-part3').then(m => m.actScienceReasonPart3Data) },
      { title: 'Applying Concepts', loader: () => import('./act-act-science-reasoning-act-part4').then(m => m.actScienceReasonPart4Data) },
      { title: 'Science Passage Strategy', loader: () => import('./act-act-science-reasoning-act-part5').then(m => m.actScienceReasonPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-science-reasoning-act-part6').then(m => m.actScienceReasonPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-science-reasoning-act-part7').then(m => m.actScienceReasonPart7Data) },
    ],
  },
  'act-math-strategy-act': {
    parts: [
      { title: 'ACT Math Overview', loader: () => import('./act-act-math-strategy-act-part1').then(m => m.actMathStrategyPart1Data) },
      { title: 'Calculator Tips', loader: () => import('./act-act-math-strategy-act-part2').then(m => m.actMathStrategyPart2Data) },
      { title: 'Backsolving', loader: () => import('./act-act-math-strategy-act-part3').then(m => m.actMathStrategyPart3Data) },
      { title: 'Plugging In Numbers', loader: () => import('./act-act-math-strategy-act-part4').then(m => m.actMathStrategyPart4Data) },
      { title: 'Time Management', loader: () => import('./act-act-math-strategy-act-part5').then(m => m.actMathStrategyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-math-strategy-act-part6').then(m => m.actMathStrategyPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-math-strategy-act-part7').then(m => m.actMathStrategyPart7Data) },
    ],
  },
  'act-english-strategy-act': {
    parts: [
      { title: 'ACT English Overview', loader: () => import('./act-act-english-strategy-act-part1').then(m => m.actEnglishStratPart1Data) },
      { title: 'Grammar vs. Rhetoric', loader: () => import('./act-act-english-strategy-act-part2').then(m => m.actEnglishStratPart2Data) },
      { title: 'Reading in Context', loader: () => import('./act-act-english-strategy-act-part3').then(m => m.actEnglishStratPart3Data) },
      { title: 'Answer Elimination', loader: () => import('./act-act-english-strategy-act-part4').then(m => m.actEnglishStratPart4Data) },
      { title: 'Pacing & Timing', loader: () => import('./act-act-english-strategy-act-part5').then(m => m.actEnglishStratPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-english-strategy-act-part6').then(m => m.actEnglishStratPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-english-strategy-act-part7').then(m => m.actEnglishStratPart7Data) },
    ],
  },
  'act-reading-science-tips-act': {
    parts: [
      { title: 'ACT Reading Overview', loader: () => import('./act-act-reading-science-tips-act-part1').then(m => m.actReadSciTipsPart1Data) },
      { title: 'ACT Science Overview', loader: () => import('./act-act-reading-science-tips-act-part2').then(m => m.actReadSciTipsPart2Data) },
      { title: 'Cross-Section Strategies', loader: () => import('./act-act-reading-science-tips-act-part3').then(m => m.actReadSciTipsPart3Data) },
      { title: 'Managing Difficult Passages', loader: () => import('./act-act-reading-science-tips-act-part4').then(m => m.actReadSciTipsPart4Data) },
      { title: 'Score Improvement Plan', loader: () => import('./act-act-reading-science-tips-act-part5').then(m => m.actReadSciTipsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-reading-science-tips-act-part6').then(m => m.actReadSciTipsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-reading-science-tips-act-part7').then(m => m.actReadSciTipsPart7Data) },
    ],
  },
  'act-test-day-strategy-act': {
    parts: [
      { title: 'Test Format & Registration', loader: () => import('./act-act-test-day-strategy-act-part1').then(m => m.actTestDayPart1Data) },
      { title: 'What to Bring', loader: () => import('./act-act-test-day-strategy-act-part2').then(m => m.actTestDayPart2Data) },
      { title: 'Section-by-Section Timing', loader: () => import('./act-act-test-day-strategy-act-part3').then(m => m.actTestDayPart3Data) },
      { title: 'Guessing Strategy', loader: () => import('./act-act-test-day-strategy-act-part4').then(m => m.actTestDayPart4Data) },
      { title: 'Mental Preparation', loader: () => import('./act-act-test-day-strategy-act-part5').then(m => m.actTestDayPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./act-act-test-day-strategy-act-part6').then(m => m.actTestDayPart6Data) },
      { title: 'Review & Applications', loader: () => import('./act-act-test-day-strategy-act-part7').then(m => m.actTestDayPart7Data) },
    ],
  },
  // ═══════════════════════════════════════════
  // MCAT Prep — 18 Topics
  // ═══════════════════════════════════════════
  'mcat-general-chemistry-mcat': {
    parts: [
      { title: 'Atomic Structure & Periodic Trends', loader: () => import('./mcat-mcat-general-chemistry-mcat-part1').then(m => m.mcatGenChemPart1Data) },
      { title: 'Chemical Bonding', loader: () => import('./mcat-mcat-general-chemistry-mcat-part2').then(m => m.mcatGenChemPart2Data) },
      { title: 'Stoichiometry & Solutions', loader: () => import('./mcat-mcat-general-chemistry-mcat-part3').then(m => m.mcatGenChemPart3Data) },
      { title: 'Acids, Bases & Buffers', loader: () => import('./mcat-mcat-general-chemistry-mcat-part4').then(m => m.mcatGenChemPart4Data) },
      { title: 'Thermodynamics & Equilibrium', loader: () => import('./mcat-mcat-general-chemistry-mcat-part5').then(m => m.mcatGenChemPart5Data) },
      { title: 'Chemical Kinetics', loader: () => import('./mcat-mcat-general-chemistry-mcat-part6').then(m => m.mcatGenChemPart6Data) },
      { title: 'Electrochemistry & Redox', loader: () => import('./mcat-mcat-general-chemistry-mcat-part7').then(m => m.mcatGenChemPart7Data) },
    ],
  },
  'mcat-general-chemistry-atomic-structure-mcat': {
    parts: [
      { title: 'Quantum Numbers & Electron Configuration', loader: () => import('./mcat-mcat-general-chemistry-atomic-structure-mcat-part1').then(m => m.mcatAtomicStructurePart1Data) },
      { title: 'Periodic Trends', loader: () => import('./mcat-mcat-general-chemistry-atomic-structure-mcat-part2').then(m => m.mcatAtomicStructurePart2Data) },
      { title: 'Spectra, PES & Bohr Model', loader: () => import('./mcat-mcat-general-chemistry-atomic-structure-mcat-part3').then(m => m.mcatAtomicStructurePart3Data) },
      { title: 'Nuclear Chemistry & Half-Life', loader: () => import('./mcat-mcat-general-chemistry-atomic-structure-mcat-part4').then(m => m.mcatAtomicStructurePart4Data) },
      { title: 'Mixed MCAT Review', loader: () => import('./mcat-mcat-general-chemistry-atomic-structure-mcat-part5').then(m => m.mcatAtomicStructurePart5Data) },
    ],
  },
  'mcat-general-chemistry-stoichiometry-mcat': {
    parts: [
      { title: 'Moles, Molar Mass & Empirical Formulas', loader: () => import('./mcat-mcat-general-chemistry-stoichiometry-mcat-part1').then(m => m.mcatStoichiometryPart1Data) },
      { title: 'Limiting Reagent & Reaction Types', loader: () => import('./mcat-mcat-general-chemistry-stoichiometry-mcat-part2').then(m => m.mcatStoichiometryPart2Data) },
      { title: 'Solutions, Molarity & Colligative Properties', loader: () => import('./mcat-mcat-general-chemistry-stoichiometry-mcat-part3').then(m => m.mcatStoichiometryPart3Data) },
      { title: 'Gas Laws & Electrochemistry', loader: () => import('./mcat-mcat-general-chemistry-stoichiometry-mcat-part4').then(m => m.mcatStoichiometryPart4Data) },
      { title: 'Mixed MCAT Review', loader: () => import('./mcat-mcat-general-chemistry-stoichiometry-mcat-part5').then(m => m.mcatStoichiometryPart5Data) },
    ],
  },
  'mcat-general-chemistry-acid-base-equilibrium-mcat': {
    parts: [
      { title: 'pH, pOH & Strong vs. Weak Acids', loader: () => import('./mcat-mcat-general-chemistry-acid-base-equilibrium-mcat-part1').then(m => m.mcatAcidBaseEqPart1Data) },
      { title: 'Ka, Kb & Henderson-Hasselbalch', loader: () => import('./mcat-mcat-general-chemistry-acid-base-equilibrium-mcat-part2').then(m => m.mcatAcidBaseEqPart2Data) },
      { title: 'Buffers & Physiological Chemistry', loader: () => import('./mcat-mcat-general-chemistry-acid-base-equilibrium-mcat-part3').then(m => m.mcatAcidBaseEqPart3Data) },
      { title: 'Titrations & Indicators', loader: () => import('./mcat-mcat-general-chemistry-acid-base-equilibrium-mcat-part4').then(m => m.mcatAcidBaseEqPart4Data) },
      { title: 'Equilibrium, Ksp & Le Chatelier\'s Principle', loader: () => import('./mcat-mcat-general-chemistry-acid-base-equilibrium-mcat-part5').then(m => m.mcatAcidBaseEqPart5Data) },
    ],
  },
  'mcat-general-chemistry-kinetics-mcat': {
    parts: [
      { title: 'Rate Laws & Reaction Order', loader: () => import('./mcat-mcat-general-chemistry-kinetics-mcat-part1').then(m => m.mcatKineticsPart1Data) },
      { title: 'Integrated Rate Laws & Half-Life', loader: () => import('./mcat-mcat-general-chemistry-kinetics-mcat-part2').then(m => m.mcatKineticsPart2Data) },
      { title: 'Activation Energy & Arrhenius Equation', loader: () => import('./mcat-mcat-general-chemistry-kinetics-mcat-part3').then(m => m.mcatKineticsPart3Data) },
      { title: 'Mechanisms, RDS & Catalysis', loader: () => import('./mcat-mcat-general-chemistry-kinetics-mcat-part4').then(m => m.mcatKineticsPart4Data) },
      { title: 'Mixed MCAT Review', loader: () => import('./mcat-mcat-general-chemistry-kinetics-mcat-part5').then(m => m.mcatKineticsPart5Data) },
    ],
  },
  'mcat-general-chemistry-thermodynamics-mcat': {
    parts: [
      { title: 'Enthalpy & Hess\'s Law', loader: () => import('./mcat-mcat-general-chemistry-thermodynamics-mcat-part1').then(m => m.mcatThermoPart1Data) },
      { title: 'Entropy & Laws of Thermodynamics', loader: () => import('./mcat-mcat-general-chemistry-thermodynamics-mcat-part2').then(m => m.mcatThermoPart2Data) },
      { title: 'Gibbs Free Energy, Keq & Cell Potential', loader: () => import('./mcat-mcat-general-chemistry-thermodynamics-mcat-part3').then(m => m.mcatThermoPart3Data) },
      { title: 'Phase Changes & Heating Curves', loader: () => import('./mcat-mcat-general-chemistry-thermodynamics-mcat-part4').then(m => m.mcatThermoPart4Data) },
      { title: 'Mixed MCAT Review', loader: () => import('./mcat-mcat-general-chemistry-thermodynamics-mcat-part5').then(m => m.mcatThermoPart5Data) },
    ],
  },
  'mcat-organic-chemistry-mcat': {
    parts: [
      { title: 'Functional Groups & Nomenclature', loader: () => import('./mcat-mcat-organic-chemistry-mcat-part1').then(m => m.mcatOrgChemPart1Data) },
      { title: 'Stereochemistry', loader: () => import('./mcat-mcat-organic-chemistry-mcat-part2').then(m => m.mcatOrgChemPart2Data) },
      { title: 'Substitution & Elimination', loader: () => import('./mcat-mcat-organic-chemistry-mcat-part3').then(m => m.mcatOrgChemPart3Data) },
      { title: 'Carbonyl Chemistry', loader: () => import('./mcat-mcat-organic-chemistry-mcat-part4').then(m => m.mcatOrgChemPart4Data) },
      { title: 'Carboxylic Acid Derivatives', loader: () => import('./mcat-mcat-organic-chemistry-mcat-part5').then(m => m.mcatOrgChemPart5Data) },
      { title: 'Spectroscopy & Structure', loader: () => import('./mcat-mcat-organic-chemistry-mcat-part6').then(m => m.mcatOrgChemPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-organic-chemistry-mcat-part7').then(m => m.mcatOrgChemPart7Data) },
    ],
  },
  'mcat-physics-mechanics-mcat': {
    parts: [
      { title: 'Kinematics & Motion', loader: () => import('./mcat-mcat-physics-mechanics-mcat-part1').then(m => m.mcatPhysMechPart1Data) },
      { title: 'Forces & Newtons Laws', loader: () => import('./mcat-mcat-physics-mechanics-mcat-part2').then(m => m.mcatPhysMechPart2Data) },
      { title: 'Work, Energy & Power', loader: () => import('./mcat-mcat-physics-mechanics-mcat-part3').then(m => m.mcatPhysMechPart3Data) },
      { title: 'Momentum & Collisions', loader: () => import('./mcat-mcat-physics-mechanics-mcat-part4').then(m => m.mcatPhysMechPart4Data) },
      { title: 'Fluids & Pressure', loader: () => import('./mcat-mcat-physics-mechanics-mcat-part5').then(m => m.mcatPhysMechPart5Data) },
      { title: 'Waves & Sound', loader: () => import('./mcat-mcat-physics-mechanics-mcat-part6').then(m => m.mcatPhysMechPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-physics-mechanics-mcat-part7').then(m => m.mcatPhysMechPart7Data) },
    ],
  },
  'mcat-physics-electricity-mcat': {
    parts: [
      { title: 'Electrostatics & Coulombs Law', loader: () => import('./mcat-mcat-physics-electricity-mcat-part1').then(m => m.mcatPhysElecPart1Data) },
      { title: 'Electric Circuits', loader: () => import('./mcat-mcat-physics-electricity-mcat-part2').then(m => m.mcatPhysElecPart2Data) },
      { title: 'Magnetism & EM Induction', loader: () => import('./mcat-mcat-physics-electricity-mcat-part3').then(m => m.mcatPhysElecPart3Data) },
      { title: 'Optics & Light', loader: () => import('./mcat-mcat-physics-electricity-mcat-part4').then(m => m.mcatPhysElecPart4Data) },
      { title: 'Nuclear Physics & Radioactivity', loader: () => import('./mcat-mcat-physics-electricity-mcat-part5').then(m => m.mcatPhysElecPart5Data) },
      { title: 'Electrochemistry', loader: () => import('./mcat-mcat-physics-electricity-mcat-part6').then(m => m.mcatPhysElecPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-physics-electricity-mcat-part7').then(m => m.mcatPhysElecPart7Data) },
    ],
  },
  'mcat-biochemistry-foundations-mcat': {
    parts: [
      { title: 'Amino Acids & Protein Structure', loader: () => import('./mcat-mcat-biochemistry-foundations-mcat-part1').then(m => m.mcatBiochemPart1Data) },
      { title: 'Enzyme Kinetics', loader: () => import('./mcat-mcat-biochemistry-foundations-mcat-part2').then(m => m.mcatBiochemPart2Data) },
      { title: 'Carbohydrate Metabolism', loader: () => import('./mcat-mcat-biochemistry-foundations-mcat-part3').then(m => m.mcatBiochemPart3Data) },
      { title: 'Lipids & Membranes', loader: () => import('./mcat-mcat-biochemistry-foundations-mcat-part4').then(m => m.mcatBiochemPart4Data) },
      { title: 'Nucleic Acids & DNA', loader: () => import('./mcat-mcat-biochemistry-foundations-mcat-part5').then(m => m.mcatBiochemPart5Data) },
      { title: 'Bioenergetics & ATP', loader: () => import('./mcat-mcat-biochemistry-foundations-mcat-part6').then(m => m.mcatBiochemPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-biochemistry-foundations-mcat-part7').then(m => m.mcatBiochemPart7Data) },
    ],
  },
  'mcat-cars-strategy-mcat': {
    parts: [
      { title: 'CARS Overview & Approach', loader: () => import('./mcat-mcat-cars-strategy-mcat-part1').then(m => m.mcatCarsStratPart1Data) },
      { title: 'Active Reading Techniques', loader: () => import('./mcat-mcat-cars-strategy-mcat-part2').then(m => m.mcatCarsStratPart2Data) },
      { title: 'Main Idea & Argument', loader: () => import('./mcat-mcat-cars-strategy-mcat-part3').then(m => m.mcatCarsStratPart3Data) },
      { title: 'Inference & Application', loader: () => import('./mcat-mcat-cars-strategy-mcat-part4').then(m => m.mcatCarsStratPart4Data) },
      { title: 'Tone & Author Perspective', loader: () => import('./mcat-mcat-cars-strategy-mcat-part5').then(m => m.mcatCarsStratPart5Data) },
      { title: 'Question Types & Traps', loader: () => import('./mcat-mcat-cars-strategy-mcat-part6').then(m => m.mcatCarsStratPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-cars-strategy-mcat-part7').then(m => m.mcatCarsStratPart7Data) },
    ],
  },
  'mcat-cars-passages-mcat': {
    parts: [
      { title: 'Humanities Passages', loader: () => import('./mcat-mcat-cars-passages-mcat-part1').then(m => m.mcatCarsPsgPart1Data) },
      { title: 'Social Science Passages', loader: () => import('./mcat-mcat-cars-passages-mcat-part2').then(m => m.mcatCarsPsgPart2Data) },
      { title: 'Ethics & Philosophy', loader: () => import('./mcat-mcat-cars-passages-mcat-part3').then(m => m.mcatCarsPsgPart3Data) },
      { title: 'Arts & Culture Passages', loader: () => import('./mcat-mcat-cars-passages-mcat-part4').then(m => m.mcatCarsPsgPart4Data) },
      { title: 'Comparative & Contrasting', loader: () => import('./mcat-mcat-cars-passages-mcat-part5').then(m => m.mcatCarsPsgPart5Data) },
      { title: 'Time Management', loader: () => import('./mcat-mcat-cars-passages-mcat-part6').then(m => m.mcatCarsPsgPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-cars-passages-mcat-part7').then(m => m.mcatCarsPsgPart7Data) },
    ],
  },
  'mcat-cars-reasoning-mcat': {
    parts: [
      { title: 'Logical Reasoning', loader: () => import('./mcat-mcat-cars-reasoning-mcat-part1').then(m => m.mcatCarsReasonPart1Data) },
      { title: 'Strengthening & Weakening Arguments', loader: () => import('./mcat-mcat-cars-reasoning-mcat-part2').then(m => m.mcatCarsReasonPart2Data) },
      { title: 'Assumption Identification', loader: () => import('./mcat-mcat-cars-reasoning-mcat-part3').then(m => m.mcatCarsReasonPart3Data) },
      { title: 'Evaluating Evidence', loader: () => import('./mcat-mcat-cars-reasoning-mcat-part4').then(m => m.mcatCarsReasonPart4Data) },
      { title: 'Analogical Reasoning', loader: () => import('./mcat-mcat-cars-reasoning-mcat-part5').then(m => m.mcatCarsReasonPart5Data) },
      { title: 'Common Logical Fallacies', loader: () => import('./mcat-mcat-cars-reasoning-mcat-part6').then(m => m.mcatCarsReasonPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-cars-reasoning-mcat-part7').then(m => m.mcatCarsReasonPart7Data) },
    ],
  },
  'mcat-cell-biology-mcat': {
    parts: [
      { title: 'Cell Structure & Organelles', loader: () => import('./mcat-mcat-cell-biology-mcat-part1').then(m => m.mcatCellBioPart1Data) },
      { title: 'Membrane Transport', loader: () => import('./mcat-mcat-cell-biology-mcat-part2').then(m => m.mcatCellBioPart2Data) },
      { title: 'Cell Signaling', loader: () => import('./mcat-mcat-cell-biology-mcat-part3').then(m => m.mcatCellBioPart3Data) },
      { title: 'Cell Cycle & Division', loader: () => import('./mcat-mcat-cell-biology-mcat-part4').then(m => m.mcatCellBioPart4Data) },
      { title: 'Apoptosis & Regulation', loader: () => import('./mcat-mcat-cell-biology-mcat-part5').then(m => m.mcatCellBioPart5Data) },
      { title: 'Stem Cells & Differentiation', loader: () => import('./mcat-mcat-cell-biology-mcat-part6').then(m => m.mcatCellBioPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-cell-biology-mcat-part7').then(m => m.mcatCellBioPart7Data) },
    ],
  },
  'mcat-molecular-biology-mcat': {
    parts: [
      { title: 'DNA Replication', loader: () => import('./mcat-mcat-molecular-biology-mcat-part1').then(m => m.mcatMolBioPart1Data) },
      { title: 'Transcription & RNA Processing', loader: () => import('./mcat-mcat-molecular-biology-mcat-part2').then(m => m.mcatMolBioPart2Data) },
      { title: 'Translation & Protein Synthesis', loader: () => import('./mcat-mcat-molecular-biology-mcat-part3').then(m => m.mcatMolBioPart3Data) },
      { title: 'Gene Regulation', loader: () => import('./mcat-mcat-molecular-biology-mcat-part4').then(m => m.mcatMolBioPart4Data) },
      { title: 'Mutations & Repair', loader: () => import('./mcat-mcat-molecular-biology-mcat-part5').then(m => m.mcatMolBioPart5Data) },
      { title: 'Biotechnology & Lab Techniques', loader: () => import('./mcat-mcat-molecular-biology-mcat-part6').then(m => m.mcatMolBioPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-molecular-biology-mcat-part7').then(m => m.mcatMolBioPart7Data) },
    ],
  },
  'mcat-organ-systems-mcat': {
    parts: [
      { title: 'Cardiovascular System', loader: () => import('./mcat-mcat-organ-systems-mcat-part1').then(m => m.mcatOrganSysPart1Data) },
      { title: 'Respiratory System', loader: () => import('./mcat-mcat-organ-systems-mcat-part2').then(m => m.mcatOrganSysPart2Data) },
      { title: 'Renal & Excretory System', loader: () => import('./mcat-mcat-organ-systems-mcat-part4').then(m => m.mcatOrganSysPart4Data) },
      { title: 'Digestive System', loader: () => import('./mcat-mcat-organ-systems-mcat-part3').then(m => m.mcatOrganSysPart3Data) },
      { title: 'Endocrine System', loader: () => import('./mcat-mcat-organ-systems-mcat-part5').then(m => m.mcatOrganSysPart5Data) },
      { title: 'Nervous System', loader: () => import('./mcat-mcat-organ-systems-mcat-part6').then(m => m.mcatOrganSysPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-organ-systems-mcat-part7').then(m => m.mcatOrganSysPart7Data) },
    ],
  },
  'mcat-genetics-evolution-mcat': {
    parts: [
      { title: 'Mendelian Genetics', loader: () => import('./mcat-mcat-genetics-evolution-mcat-part1').then(m => m.mcatGeneticsPart1Data) },
      { title: 'Non-Mendelian Inheritance', loader: () => import('./mcat-mcat-genetics-evolution-mcat-part2').then(m => m.mcatGeneticsPart2Data) },
      { title: 'Population Genetics', loader: () => import('./mcat-mcat-genetics-evolution-mcat-part3').then(m => m.mcatGeneticsPart3Data) },
      { title: 'Natural Selection', loader: () => import('./mcat-mcat-genetics-evolution-mcat-part4').then(m => m.mcatGeneticsPart4Data) },
      { title: 'Speciation & Phylogeny', loader: () => import('./mcat-mcat-genetics-evolution-mcat-part5').then(m => m.mcatGeneticsPart5Data) },
      { title: 'Immune System', loader: () => import('./mcat-mcat-genetics-evolution-mcat-part6').then(m => m.mcatGeneticsPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-genetics-evolution-mcat-part7').then(m => m.mcatGeneticsPart7Data) },
    ],
  },
  'mcat-anatomy-physiology-mcat': {
    parts: [
      { title: 'Musculoskeletal System', loader: () => import('./mcat-mcat-anatomy-physiology-mcat-part1').then(m => m.mcatAnatPhysPart1Data) },
      { title: 'Reproductive System', loader: () => import('./mcat-mcat-anatomy-physiology-mcat-part2').then(m => m.mcatAnatPhysPart2Data) },
      { title: 'Integumentary System', loader: () => import('./mcat-mcat-anatomy-physiology-mcat-part3').then(m => m.mcatAnatPhysPart3Data) },
      { title: 'Lymphatic & Immune', loader: () => import('./mcat-mcat-anatomy-physiology-mcat-part4').then(m => m.mcatAnatPhysPart4Data) },
      { title: 'Sensory Systems', loader: () => import('./mcat-mcat-anatomy-physiology-mcat-part5').then(m => m.mcatAnatPhysPart5Data) },
      { title: 'Embryology & Development', loader: () => import('./mcat-mcat-anatomy-physiology-mcat-part6').then(m => m.mcatAnatPhysPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-anatomy-physiology-mcat-part7').then(m => m.mcatAnatPhysPart7Data) },
    ],
  },
  'mcat-microbiology-mcat': {
    parts: [
      { title: 'Bacteria Structure & Function', loader: () => import('./mcat-mcat-microbiology-mcat-part1').then(m => m.mcatMicroPart1Data) },
      { title: 'Viruses & Prions', loader: () => import('./mcat-mcat-microbiology-mcat-part2').then(m => m.mcatMicroPart2Data) },
      { title: 'Fungi & Parasites', loader: () => import('./mcat-mcat-microbiology-mcat-part3').then(m => m.mcatMicroPart3Data) },
      { title: 'Microbial Genetics', loader: () => import('./mcat-mcat-microbiology-mcat-part4').then(m => m.mcatMicroPart4Data) },
      { title: 'Antimicrobial Agents', loader: () => import('./mcat-mcat-microbiology-mcat-part5').then(m => m.mcatMicroPart5Data) },
      { title: 'Host-Pathogen Interactions', loader: () => import('./mcat-mcat-microbiology-mcat-part6').then(m => m.mcatMicroPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-microbiology-mcat-part7').then(m => m.mcatMicroPart7Data) },
    ],
  },
  'mcat-psychology-behavior-mcat': {
    parts: [
      { title: 'Sensation & Perception', loader: () => import('./mcat-mcat-psychology-behavior-mcat-part1').then(m => m.mcatPsychBehavPart1Data) },
      { title: 'Learning & Memory', loader: () => import('./mcat-mcat-psychology-behavior-mcat-part2').then(m => m.mcatPsychBehavPart2Data) },
      { title: 'Cognition & Language', loader: () => import('./mcat-mcat-psychology-behavior-mcat-part3').then(m => m.mcatPsychBehavPart3Data) },
      { title: 'Motivation & Emotion', loader: () => import('./mcat-mcat-psychology-behavior-mcat-part4').then(m => m.mcatPsychBehavPart4Data) },
      { title: 'Developmental Psychology', loader: () => import('./mcat-mcat-psychology-behavior-mcat-part5').then(m => m.mcatPsychBehavPart5Data) },
      { title: 'Personality & Disorders', loader: () => import('./mcat-mcat-psychology-behavior-mcat-part6').then(m => m.mcatPsychBehavPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-psychology-behavior-mcat-part7').then(m => m.mcatPsychBehavPart7Data) },
    ],
  },
  'mcat-sociology-mcat': {
    parts: [
      { title: 'Social Structure & Stratification', loader: () => import('./mcat-mcat-sociology-mcat-part1').then(m => m.mcatSociologyPart1Data) },
      { title: 'Culture & Socialization', loader: () => import('./mcat-mcat-sociology-mcat-part2').then(m => m.mcatSociologyPart2Data) },
      { title: 'Social Interaction & Self', loader: () => import('./mcat-mcat-sociology-mcat-part3').then(m => m.mcatSociologyPart3Data) },
      { title: 'Group Dynamics & Deviance', loader: () => import('./mcat-mcat-sociology-mcat-part4').then(m => m.mcatSociologyPart4Data) },
      { title: 'Health Disparities', loader: () => import('./mcat-mcat-sociology-mcat-part5').then(m => m.mcatSociologyPart5Data) },
      { title: 'Demographics & Population', loader: () => import('./mcat-mcat-sociology-mcat-part6').then(m => m.mcatSociologyPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-sociology-mcat-part7').then(m => m.mcatSociologyPart7Data) },
    ],
  },
  'mcat-science-passage-strategy-mcat': {
    parts: [
      { title: 'Reading Science Passages', loader: () => import('./mcat-mcat-science-passage-strategy-mcat-part1').then(m => m.mcatSciPassagePart1Data) },
      { title: 'Data Interpretation', loader: () => import('./mcat-mcat-science-passage-strategy-mcat-part2').then(m => m.mcatSciPassagePart2Data) },
      { title: 'Experimental Design', loader: () => import('./mcat-mcat-science-passage-strategy-mcat-part3').then(m => m.mcatSciPassagePart3Data) },
      { title: 'Discrete Questions', loader: () => import('./mcat-mcat-science-passage-strategy-mcat-part4').then(m => m.mcatSciPassagePart4Data) },
      { title: 'Integrating Content Knowledge', loader: () => import('./mcat-mcat-science-passage-strategy-mcat-part5').then(m => m.mcatSciPassagePart5Data) },
      { title: 'Common Traps & Pitfalls', loader: () => import('./mcat-mcat-science-passage-strategy-mcat-part6').then(m => m.mcatSciPassagePart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-science-passage-strategy-mcat-part7').then(m => m.mcatSciPassagePart7Data) },
      { title: 'Feedback Loop Graph Reasoning', loader: () => import('./mcat-mcat-science-passage-strategy-mcat-part8').then(m => m.mcatSciPassagePart8Data) },
    ],
  },
  'mcat-quantitative-skills-mcat': {
    parts: [
      { title: 'Percent Change, Ratios & Fold-Change', loader: () => import('./mcat-mcat-quantitative-skills-mcat-part1').then(m => m.mcatQuantSkillsPart1Data) },
    ],
  },
  'mcat-test-day-strategy-mcat': {
    parts: [
      { title: 'MCAT Format & Scoring', loader: () => import('./mcat-mcat-test-day-strategy-mcat-part1').then(m => m.mcatTestDayPart1Data) },
      { title: 'Study Planning', loader: () => import('./mcat-mcat-test-day-strategy-mcat-part2').then(m => m.mcatTestDayPart2Data) },
      { title: 'Section-by-Section Strategy', loader: () => import('./mcat-mcat-test-day-strategy-mcat-part3').then(m => m.mcatTestDayPart3Data) },
      { title: 'Practice Test Analysis', loader: () => import('./mcat-mcat-test-day-strategy-mcat-part4').then(m => m.mcatTestDayPart4Data) },
      { title: 'Test Day Preparation', loader: () => import('./mcat-mcat-test-day-strategy-mcat-part5').then(m => m.mcatTestDayPart5Data) },
      { title: 'Score Goals & Applications', loader: () => import('./mcat-mcat-test-day-strategy-mcat-part6').then(m => m.mcatTestDayPart6Data) },
      { title: 'Review & MCAT Practice', loader: () => import('./mcat-mcat-test-day-strategy-mcat-part7').then(m => m.mcatTestDayPart7Data) },
    ],
  },
  'mcat-biostatistics-mcat': {
    parts: [
      { title: 'Descriptive Statistics & Data Distributions', loader: () => import('./mcat-mcat-biostatistics-mcat-part1').then(m => m.mcatBiostatisticsPart1Data) },
      { title: 'Hypothesis Testing & p-values', loader: () => import('./mcat-mcat-biostatistics-mcat-part2').then(m => m.mcatBiostatisticsPart2Data) },
      { title: 'Confidence Intervals & Effect Size', loader: () => import('./mcat-mcat-biostatistics-mcat-part3').then(m => m.mcatBiostatisticsPart3Data) },
      { title: 'Correlation, Causation & Study Design', loader: () => import('./mcat-mcat-biostatistics-mcat-part4').then(m => m.mcatBiostatisticsPart4Data) },
    ],
  },
  'mcat-research-methods-mcat': {
    parts: [
      { title: 'Variables, Sampling & Study Types', loader: () => import('./mcat-mcat-research-methods-mcat-part1').then(m => m.mcatResearchMethodsPart1Data) },
      { title: 'Validity & Threats to Validity', loader: () => import('./mcat-mcat-research-methods-mcat-part2').then(m => m.mcatResearchMethodsPart2Data) },
      { title: 'Blinding & Experimental Controls', loader: () => import('./mcat-mcat-research-methods-mcat-part3').then(m => m.mcatResearchMethodsPart3Data) },
      { title: 'Sample Size, Ethics & Meta-Analysis', loader: () => import('./mcat-mcat-research-methods-mcat-part4').then(m => m.mcatResearchMethodsPart4Data) },
    ],
  },
  // ── Grade 6: Negative Numbers ──────────────────────────────────────────
  'negative-numbers-grade6': {
    completionDestination: 'competitive',
    practiceModeParts: [1, 2, 3],
    parts: [
      { title: 'What Are Negative Numbers?', loader: () => import('./negative-numbers-grade6-part1').then(m => m.negativeNumbersPart1Data) },
      { title: 'Adding & Subtracting', loader: () => import('./negative-numbers-grade6-part2').then(m => m.negativeNumbersPart2Data) },
      { title: 'Ordering & Review', loader: () => import('./negative-numbers-grade6-part3').then(m => m.negativeNumbersPart3Data) },
    ],
  },
  'graphing-linear-functions-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Slope & Rate of Change', loader: () => import('./algebra1-graphing-linear-functions-part1').then(m => m.alg1GraphLinearPart1Data) },
      { title: 'Slope-Intercept Form', loader: () => import('./algebra1-graphing-linear-functions-part2').then(m => m.alg1GraphLinearPart2Data) },
      { title: 'Point-Slope Form', loader: () => import('./algebra1-graphing-linear-functions-part3').then(m => m.alg1GraphLinearPart3Data) },
      { title: 'Standard Form', loader: () => import('./algebra1-graphing-linear-functions-part4').then(m => m.alg1GraphLinearPart4Data) },
      { title: 'Parallel & Perpendicular Lines', loader: () => import('./algebra1-graphing-linear-functions-part5').then(m => m.alg1GraphLinearPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./algebra1-graphing-linear-functions-part6').then(m => m.alg1GraphLinearPart6Data) },
      { title: 'Review & Applications', loader: () => import('./algebra1-graphing-linear-functions-part7').then(m => m.alg1GraphLinearPart7Data) },
    ]
  },
  'systems-of-equations-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Graphing Systems', loader: () => import('./algebra1-systems-of-equations-part1').then(m => m.alg1SystemsPart1Data) },
      { title: 'Substitution Method', loader: () => import('./algebra1-systems-of-equations-part2').then(m => m.alg1SystemsPart2Data) },
      { title: 'Elimination Method', loader: () => import('./algebra1-systems-of-equations-part3').then(m => m.alg1SystemsPart3Data) },
      { title: 'Special Cases (No/Infinite Solutions)', loader: () => import('./algebra1-systems-of-equations-part4').then(m => m.alg1SystemsPart4Data) },
      { title: 'Word Problems with Systems', loader: () => import('./algebra1-systems-of-equations-part5').then(m => m.alg1SystemsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./algebra1-systems-of-equations-part6').then(m => m.alg1SystemsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./algebra1-systems-of-equations-part7').then(m => m.alg1SystemsPart7Data) },
    ]
  },
  'inequalities-algebra1': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Graphing on Number Line', loader: () => import('./algebra1-inequalities-part1').then(m => m.alg1InequalitiesPart1Data) },
      { title: 'Solving One-Step Inequalities', loader: () => import('./algebra1-inequalities-part2').then(m => m.alg1InequalitiesPart2Data) },
      { title: 'Multi-Step Inequalities', loader: () => import('./algebra1-inequalities-part3').then(m => m.alg1InequalitiesPart3Data) },
      { title: 'Compound Inequalities', loader: () => import('./algebra1-inequalities-part4').then(m => m.alg1InequalitiesPart4Data) },
      { title: 'Absolute Value Inequalities', loader: () => import('./algebra1-inequalities-part5').then(m => m.alg1InequalitiesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./algebra1-inequalities-part6').then(m => m.alg1InequalitiesPart6Data) },
      { title: 'Review & Applications', loader: () => import('./algebra1-inequalities-part7').then(m => m.alg1InequalitiesPart7Data) },
    ]
  },
  'polynomial-operations-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Adding & Subtracting Polynomials', loader: () => import('./algebra2-polynomial-operations-part1').then(m => m.alg2PolynomialsPart1Data) },
      { title: 'Multiplying Polynomials', loader: () => import('./algebra2-polynomial-operations-part2').then(m => m.alg2PolynomialsPart2Data) },
      { title: 'Factoring Review', loader: () => import('./algebra2-polynomial-operations-part3').then(m => m.alg2PolynomialsPart3Data) },
      { title: 'Polynomial Division', loader: () => import('./algebra2-polynomial-operations-part4').then(m => m.alg2PolynomialsPart4Data) },
      { title: 'Remainder Theorem', loader: () => import('./algebra2-polynomial-operations-part5').then(m => m.alg2PolynomialsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./algebra2-polynomial-operations-part6').then(m => m.alg2PolynomialsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./algebra2-polynomial-operations-part7').then(m => m.alg2PolynomialsPart7Data) },
    ]
  },
  'exponential-functions-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Exponential Growth', loader: () => import('./algebra2-exponential-functions-part1').then(m => m.alg2ExponentialPart1Data) },
      { title: 'Exponential Decay', loader: () => import('./algebra2-exponential-functions-part2').then(m => m.alg2ExponentialPart2Data) },
      { title: 'Compound Interest', loader: () => import('./algebra2-exponential-functions-part3').then(m => m.alg2ExponentialPart3Data) },
      { title: 'Logarithms Introduction', loader: () => import('./algebra2-exponential-functions-part4').then(m => m.alg2ExponentialPart4Data) },
      { title: 'Log Properties', loader: () => import('./algebra2-exponential-functions-part5').then(m => m.alg2ExponentialPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./algebra2-exponential-functions-part6').then(m => m.alg2ExponentialPart6Data) },
      { title: 'Review & Applications', loader: () => import('./algebra2-exponential-functions-part7').then(m => m.alg2ExponentialPart7Data) },
    ]
  },
  'rational-expressions-algebra2': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Simplifying Rational Expressions', loader: () => import('./algebra2-rational-expressions-part1').then(m => m.alg2RationalPart1Data) },
      { title: 'Multiplying & Dividing', loader: () => import('./algebra2-rational-expressions-part2').then(m => m.alg2RationalPart2Data) },
      { title: 'Adding & Subtracting', loader: () => import('./algebra2-rational-expressions-part3').then(m => m.alg2RationalPart3Data) },
      { title: 'Complex Fractions', loader: () => import('./algebra2-rational-expressions-part4').then(m => m.alg2RationalPart4Data) },
      { title: 'Rational Equations', loader: () => import('./algebra2-rational-expressions-part5').then(m => m.alg2RationalPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./algebra2-rational-expressions-part6').then(m => m.alg2RationalPart6Data) },
      { title: 'Review & Applications', loader: () => import('./algebra2-rational-expressions-part7').then(m => m.alg2RationalPart7Data) },
    ]
  },
  'triangle-congruence-geometry': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Classifying Triangles', loader: () => import('./geometry-triangle-congruence-part1').then(m => m.geoTriCongruencePart1Data) },
      { title: 'Triangle Sum Theorem', loader: () => import('./geometry-triangle-congruence-part2').then(m => m.geoTriCongruencePart2Data) },
      { title: 'SSS & SAS Congruence', loader: () => import('./geometry-triangle-congruence-part3').then(m => m.geoTriCongruencePart3Data) },
      { title: 'ASA & AAS Congruence', loader: () => import('./geometry-triangle-congruence-part4').then(m => m.geoTriCongruencePart4Data) },
      { title: 'CPCTC Proofs', loader: () => import('./geometry-triangle-congruence-part5').then(m => m.geoTriCongruencePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./geometry-triangle-congruence-part6').then(m => m.geoTriCongruencePart6Data) },
      { title: 'Review & Applications', loader: () => import('./geometry-triangle-congruence-part7').then(m => m.geoTriCongruencePart7Data) },
    ]
  },
  'circles-geometry': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Parts of a Circle', loader: () => import('./geometry-circles-part1').then(m => m.geoCirclesPart1Data) },
      { title: 'Central & Inscribed Angles', loader: () => import('./geometry-circles-part2').then(m => m.geoCirclesPart2Data) },
      { title: 'Arc Length & Sector Area', loader: () => import('./geometry-circles-part3').then(m => m.geoCirclesPart3Data) },
      { title: 'Tangent Lines', loader: () => import('./geometry-circles-part4').then(m => m.geoCirclesPart4Data) },
      { title: 'Chords & Secants', loader: () => import('./geometry-circles-part5').then(m => m.geoCirclesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./geometry-circles-part6').then(m => m.geoCirclesPart6Data) },
      { title: 'Review & Applications', loader: () => import('./geometry-circles-part7').then(m => m.geoCirclesPart7Data) },
    ]
  },
  'coordinate-proofs-geometry': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Distance & Midpoint', loader: () => import('./geometry-coordinate-proofs-part1').then(m => m.geoCoordProofsPart1Data) },
      { title: 'Slope in Proofs', loader: () => import('./geometry-coordinate-proofs-part2').then(m => m.geoCoordProofsPart2Data) },
      { title: 'Proving Parallel & Perpendicular', loader: () => import('./geometry-coordinate-proofs-part3').then(m => m.geoCoordProofsPart3Data) },
      { title: 'Classifying Quadrilaterals', loader: () => import('./geometry-coordinate-proofs-part4').then(m => m.geoCoordProofsPart4Data) },
      { title: 'Proving Triangle Properties', loader: () => import('./geometry-coordinate-proofs-part5').then(m => m.geoCoordProofsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./geometry-coordinate-proofs-part6').then(m => m.geoCoordProofsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./geometry-coordinate-proofs-part7').then(m => m.geoCoordProofsPart7Data) },
    ]
  },
  'describing-distributions-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Shape, Center, Spread', loader: () => import('./apstats-describing-distributions-part1').then(m => m.apStatsDistributionsPart1Data) },
      { title: 'Histograms & Dotplots', loader: () => import('./apstats-describing-distributions-part2').then(m => m.apStatsDistributionsPart2Data) },
      { title: 'Mean vs Median', loader: () => import('./apstats-describing-distributions-part3').then(m => m.apStatsDistributionsPart3Data) },
      { title: 'Standard Deviation', loader: () => import('./apstats-describing-distributions-part4').then(m => m.apStatsDistributionsPart4Data) },
      { title: 'Normal Distribution', loader: () => import('./apstats-describing-distributions-part5').then(m => m.apStatsDistributionsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-describing-distributions-part6').then(m => m.apStatsDistributionsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./apstats-describing-distributions-part7').then(m => m.apStatsDistributionsPart7Data) },
    ]
  },
  'probability-rules-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Basic Probability', loader: () => import('./apstats-probability-rules-part1').then(m => m.apStatsProbabilityPart1Data) },
      { title: 'Addition Rule', loader: () => import('./apstats-probability-rules-part2').then(m => m.apStatsProbabilityPart2Data) },
      { title: 'Multiplication Rule', loader: () => import('./apstats-probability-rules-part3').then(m => m.apStatsProbabilityPart3Data) },
      { title: 'Conditional Probability', loader: () => import('./apstats-probability-rules-part4').then(m => m.apStatsProbabilityPart4Data) },
      { title: 'Independence', loader: () => import('./apstats-probability-rules-part5').then(m => m.apStatsProbabilityPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-probability-rules-part6').then(m => m.apStatsProbabilityPart6Data) },
      { title: 'Review & Applications', loader: () => import('./apstats-probability-rules-part7').then(m => m.apStatsProbabilityPart7Data) },
    ]
  },
  'hypothesis-testing-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Null & Alternative Hypotheses', loader: () => import('./apstats-hypothesis-testing-part1').then(m => m.apStatsHypothesisPart1Data) },
      { title: 'Test Statistics', loader: () => import('./apstats-hypothesis-testing-part2').then(m => m.apStatsHypothesisPart2Data) },
      { title: 'P-Values', loader: () => import('./apstats-hypothesis-testing-part3').then(m => m.apStatsHypothesisPart3Data) },
      { title: 'Type I & Type II Errors', loader: () => import('./apstats-hypothesis-testing-part4').then(m => m.apStatsHypothesisPart4Data) },
      { title: 'One-Sample t-Test', loader: () => import('./apstats-hypothesis-testing-part5').then(m => m.apStatsHypothesisPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-hypothesis-testing-part6').then(m => m.apStatsHypothesisPart6Data) },
      { title: 'Review & Applications', loader: () => import('./apstats-hypothesis-testing-part7').then(m => m.apStatsHypothesisPart7Data) },
    ]
  },
  'collecting-data-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Types of Studies', loader: () => import('./apstats-collecting-data-part1').then(m => m.apStatsCollectingDataPart1Data) },
      { title: 'Sampling Methods', loader: () => import('./apstats-collecting-data-part2').then(m => m.apStatsCollectingDataPart2Data) },
      { title: 'Bias in Sampling', loader: () => import('./apstats-collecting-data-part3').then(m => m.apStatsCollectingDataPart3Data) },
      { title: 'Experimental Design', loader: () => import('./apstats-collecting-data-part4').then(m => m.apStatsCollectingDataPart4Data) },
      { title: 'Random Variables', loader: () => import('./apstats-collecting-data-part5').then(m => m.apStatsCollectingDataPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-collecting-data-part6').then(m => m.apStatsCollectingDataPart6Data) },
      { title: 'Review & Applications', loader: () => import('./apstats-collecting-data-part7').then(m => m.apStatsCollectingDataPart7Data) },
    ]
  },
  'normal-distribution-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'The Normal Curve', loader: () => import('./apstats-normal-distribution-part1').then(m => m.apStatsNormalDistPart1Data) },
      { title: 'Z-Scores', loader: () => import('./apstats-normal-distribution-part2').then(m => m.apStatsNormalDistPart2Data) },
      { title: 'Normal Calculations', loader: () => import('./apstats-normal-distribution-part3').then(m => m.apStatsNormalDistPart3Data) },
      { title: 'Assessing Normality', loader: () => import('./apstats-normal-distribution-part4').then(m => m.apStatsNormalDistPart4Data) },
      { title: 'Combining Normal RVs', loader: () => import('./apstats-normal-distribution-part5').then(m => m.apStatsNormalDistPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-normal-distribution-part6').then(m => m.apStatsNormalDistPart6Data) },
      { title: 'Review & Applications', loader: () => import('./apstats-normal-distribution-part7').then(m => m.apStatsNormalDistPart7Data) },
    ]
  },
  'sampling-distributions-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Central Limit Theorem', loader: () => import('./apstats-sampling-distributions-part1').then(m => m.apStatsSamplingDistPart1Data) },
      { title: 'Distribution of Sample Means', loader: () => import('./apstats-sampling-distributions-part2').then(m => m.apStatsSamplingDistPart2Data) },
      { title: 'Distribution of Sample Proportions', loader: () => import('./apstats-sampling-distributions-part3').then(m => m.apStatsSamplingDistPart3Data) },
      { title: 'Standard Error', loader: () => import('./apstats-sampling-distributions-part4').then(m => m.apStatsSamplingDistPart4Data) },
      { title: 'Conditions for Inference', loader: () => import('./apstats-sampling-distributions-part5').then(m => m.apStatsSamplingDistPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-sampling-distributions-part6').then(m => m.apStatsSamplingDistPart6Data) },
      { title: 'Review & Applications', loader: () => import('./apstats-sampling-distributions-part7').then(m => m.apStatsSamplingDistPart7Data) },
    ]
  },
  'confidence-intervals-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Confidence Intervals', loader: () => import('./apstats-confidence-intervals-part1').then(m => m.apStatsConfIntPart1Data) },
      { title: 'One-Sample Z-Interval for Proportions', loader: () => import('./apstats-confidence-intervals-part2').then(m => m.apStatsConfIntPart2Data) },
      { title: 'One-Sample T-Interval for Means', loader: () => import('./apstats-confidence-intervals-part3').then(m => m.apStatsConfIntPart3Data) },
      { title: 'Choosing Sample Size', loader: () => import('./apstats-confidence-intervals-part4').then(m => m.apStatsConfIntPart4Data) },
      { title: 'Interpreting Confidence Intervals', loader: () => import('./apstats-confidence-intervals-part5').then(m => m.apStatsConfIntPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-confidence-intervals-part6').then(m => m.apStatsConfIntPart6Data) },
      { title: 'Review & Applications', loader: () => import('./apstats-confidence-intervals-part7').then(m => m.apStatsConfIntPart7Data) },
    ]
  },
  'chi-square-tests-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Chi-Square Goodness-of-Fit', loader: () => import('./apstats-chi-square-tests-part1').then(m => m.apStatsChiSquarePart1Data) },
      { title: 'Chi-Square Test for Independence', loader: () => import('./apstats-chi-square-tests-part2').then(m => m.apStatsChiSquarePart2Data) },
      { title: 'Chi-Square Test for Homogeneity', loader: () => import('./apstats-chi-square-tests-part3').then(m => m.apStatsChiSquarePart3Data) },
      { title: 'Conditions and Degrees of Freedom', loader: () => import('./apstats-chi-square-tests-part4').then(m => m.apStatsChiSquarePart4Data) },
      { title: 'Interpreting Results', loader: () => import('./apstats-chi-square-tests-part5').then(m => m.apStatsChiSquarePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-chi-square-tests-part6').then(m => m.apStatsChiSquarePart6Data) },
      { title: 'Review & Applications', loader: () => import('./apstats-chi-square-tests-part7').then(m => m.apStatsChiSquarePart7Data) },
    ]
  },
  'linear-regression-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Scatterplots and Correlation', loader: () => import('./apstats-linear-regression-part1').then(m => m.apStatsLinRegPart1Data) },
      { title: 'Least-Squares Regression Line', loader: () => import('./apstats-linear-regression-part2').then(m => m.apStatsLinRegPart2Data) },
      { title: 'Residuals and Residual Plots', loader: () => import('./apstats-linear-regression-part3').then(m => m.apStatsLinRegPart3Data) },
      { title: 'Coefficient of Determination', loader: () => import('./apstats-linear-regression-part4').then(m => m.apStatsLinRegPart4Data) },
      { title: 'Influential Points and Outliers', loader: () => import('./apstats-linear-regression-part5').then(m => m.apStatsLinRegPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-linear-regression-part6').then(m => m.apStatsLinRegPart6Data) },
      { title: 'Review & Applications', loader: () => import('./apstats-linear-regression-part7').then(m => m.apStatsLinRegPart7Data) },
    ]
  },
  'inference-regression-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Regression Model Assumptions', loader: () => import('./apstats-inference-regression-part1').then(m => m.apStatsInfRegPart1Data) },
      { title: 'T-Test for Slope', loader: () => import('./apstats-inference-regression-part2').then(m => m.apStatsInfRegPart2Data) },
      { title: 'Confidence Interval for Slope', loader: () => import('./apstats-inference-regression-part3').then(m => m.apStatsInfRegPart3Data) },
      { title: 'Computer Output Interpretation', loader: () => import('./apstats-inference-regression-part4').then(m => m.apStatsInfRegPart4Data) },
      { title: 'Prediction Intervals', loader: () => import('./apstats-inference-regression-part5').then(m => m.apStatsInfRegPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-inference-regression-part6').then(m => m.apStatsInfRegPart6Data) },
      { title: 'Review & Applications', loader: () => import('./apstats-inference-regression-part7').then(m => m.apStatsInfRegPart7Data) },
    ]
  },
  'comparing-populations-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Two-Sample Z-Test for Proportions', loader: () => import('./apstats-comparing-populations-part1').then(m => m.apStatsComparingPart1Data) },
      { title: 'Two-Sample T-Test for Means', loader: () => import('./apstats-comparing-populations-part2').then(m => m.apStatsComparingPart2Data) },
      { title: 'Paired T-Test', loader: () => import('./apstats-comparing-populations-part3').then(m => m.apStatsComparingPart3Data) },
      { title: 'Confidence Intervals for Differences', loader: () => import('./apstats-comparing-populations-part4').then(m => m.apStatsComparingPart4Data) },
      { title: 'Power and Sample Size', loader: () => import('./apstats-comparing-populations-part5').then(m => m.apStatsComparingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-comparing-populations-part6').then(m => m.apStatsComparingPart6Data) },
      { title: 'Review & Applications', loader: () => import('./apstats-comparing-populations-part7').then(m => m.apStatsComparingPart7Data) },
    ]
  },
  'discrete-random-variables-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Random Variables', loader: () => import('./apstats-discrete-random-variables-part1').then(m => m.apStatsDiscreteRVPart1Data) },
      { title: 'Probability Distributions', loader: () => import('./apstats-discrete-random-variables-part2').then(m => m.apStatsDiscreteRVPart2Data) },
      { title: 'Mean of a Discrete RV', loader: () => import('./apstats-discrete-random-variables-part3').then(m => m.apStatsDiscreteRVPart3Data) },
      { title: 'Variance & Standard Deviation', loader: () => import('./apstats-discrete-random-variables-part4').then(m => m.apStatsDiscreteRVPart4Data) },
      { title: 'Combining Random Variables', loader: () => import('./apstats-discrete-random-variables-part5').then(m => m.apStatsDiscreteRVPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-discrete-random-variables-part6').then(m => m.apStatsDiscreteRVPart6Data) },
      { title: 'Mixed Review', loader: () => import('./apstats-discrete-random-variables-part7').then(m => m.apStatsDiscreteRVPart7Data) },
    ],
  },
  'binomial-geometric-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Binomial Setting', loader: () => import('./apstats-binomial-geometric-part1').then(m => m.apStatsBinomGeomPart1Data) },
      { title: 'Binomial Probabilities', loader: () => import('./apstats-binomial-geometric-part2').then(m => m.apStatsBinomGeomPart2Data) },
      { title: 'Binomial Mean & Std Dev', loader: () => import('./apstats-binomial-geometric-part3').then(m => m.apStatsBinomGeomPart3Data) },
      { title: 'Geometric Setting', loader: () => import('./apstats-binomial-geometric-part4').then(m => m.apStatsBinomGeomPart4Data) },
      { title: 'Geometric Probabilities', loader: () => import('./apstats-binomial-geometric-part5').then(m => m.apStatsBinomGeomPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-binomial-geometric-part6').then(m => m.apStatsBinomGeomPart6Data) },
      { title: 'Mixed Review', loader: () => import('./apstats-binomial-geometric-part7').then(m => m.apStatsBinomGeomPart7Data) },
    ],
  },
  'experimental-design-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Principles of Experimental Design', loader: () => import('./apstats-experimental-design-part1').then(m => m.apStatsExpDesignPart1Data) },
      { title: 'Randomization Techniques', loader: () => import('./apstats-experimental-design-part2').then(m => m.apStatsExpDesignPart2Data) },
      { title: 'Blocking', loader: () => import('./apstats-experimental-design-part3').then(m => m.apStatsExpDesignPart3Data) },
      { title: 'Types of Studies', loader: () => import('./apstats-experimental-design-part4').then(m => m.apStatsExpDesignPart4Data) },
      { title: 'Confounding and Bias', loader: () => import('./apstats-experimental-design-part5').then(m => m.apStatsExpDesignPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-experimental-design-part6').then(m => m.apStatsExpDesignPart6Data) },
      { title: 'Mixed Review', loader: () => import('./apstats-experimental-design-part7').then(m => m.apStatsExpDesignPart7Data) },
    ],
  },
  'probability-distributions-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction to Probability Distributions', loader: () => import('./apstats-probability-distributions-part1').then(m => m.apStatsProbDistPart1Data) },
      { title: 'Normal Distribution Properties', loader: () => import('./apstats-probability-distributions-part2').then(m => m.apStatsProbDistPart2Data) },
      { title: 'Standard Normal Distribution', loader: () => import('./apstats-probability-distributions-part3').then(m => m.apStatsProbDistPart3Data) },
      { title: 'Z-Scores and Applications', loader: () => import('./apstats-probability-distributions-part4').then(m => m.apStatsProbDistPart4Data) },
      { title: 'Sampling Distributions', loader: () => import('./apstats-probability-distributions-part5').then(m => m.apStatsProbDistPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-probability-distributions-part6').then(m => m.apStatsProbDistPart6Data) },
      { title: 'Mixed Review', loader: () => import('./apstats-probability-distributions-part7').then(m => m.apStatsProbDistPart7Data) },
    ],
  },
  'proportions-inference-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Inference for Proportions Basics', loader: () => import('./apstats-proportions-inference-part1').then(m => m.apStatsPropInfPart1Data) },
      { title: 'Confidence Intervals for Proportions', loader: () => import('./apstats-proportions-inference-part2').then(m => m.apStatsPropInfPart2Data) },
      { title: 'Hypothesis Tests for Proportions', loader: () => import('./apstats-proportions-inference-part3').then(m => m.apStatsPropInfPart3Data) },
      { title: 'Two-Proportion Inference', loader: () => import('./apstats-proportions-inference-part4').then(m => m.apStatsPropInfPart4Data) },
      { title: 'Sample Size Determination', loader: () => import('./apstats-proportions-inference-part5').then(m => m.apStatsPropInfPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-proportions-inference-part6').then(m => m.apStatsPropInfPart6Data) },
      { title: 'Mixed Review', loader: () => import('./apstats-proportions-inference-part7').then(m => m.apStatsPropInfPart7Data) },
    ],
  },
  'means-inference-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Inference for Means Basics', loader: () => import('./apstats-means-inference-part1').then(m => m.apStatsMeansInfPart1Data) },
      { title: 'T-Distribution', loader: () => import('./apstats-means-inference-part2').then(m => m.apStatsMeansInfPart2Data) },
      { title: 'Confidence Intervals for Means', loader: () => import('./apstats-means-inference-part3').then(m => m.apStatsMeansInfPart3Data) },
      { title: 'Hypothesis Tests for Means', loader: () => import('./apstats-means-inference-part4').then(m => m.apStatsMeansInfPart4Data) },
      { title: 'Matched Pairs', loader: () => import('./apstats-means-inference-part5').then(m => m.apStatsMeansInfPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-means-inference-part6').then(m => m.apStatsMeansInfPart6Data) },
      { title: 'Mixed Review', loader: () => import('./apstats-means-inference-part7').then(m => m.apStatsMeansInfPart7Data) },
    ],
  },
  'type-errors-power-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Type I and Type II Errors', loader: () => import('./apstats-type-errors-power-part1').then(m => m.apStatsErrorsPart1Data) },
      { title: 'Significance Level and Errors', loader: () => import('./apstats-type-errors-power-part2').then(m => m.apStatsErrorsPart2Data) },
      { title: 'Power of a Test', loader: () => import('./apstats-type-errors-power-part3').then(m => m.apStatsErrorsPart3Data) },
      { title: 'Factors Affecting Power', loader: () => import('./apstats-type-errors-power-part4').then(m => m.apStatsErrorsPart4Data) },
      { title: 'Applications', loader: () => import('./apstats-type-errors-power-part5').then(m => m.apStatsErrorsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-type-errors-power-part6').then(m => m.apStatsErrorsPart6Data) },
      { title: 'Mixed Review', loader: () => import('./apstats-type-errors-power-part7').then(m => m.apStatsErrorsPart7Data) },
    ],
  },
  'exploratory-data-apstats': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Exploratory Data Analysis Overview', loader: () => import('./apstats-exploratory-data-part1').then(m => m.apStatsEDAPart1Data) },
      { title: 'Graphical Displays', loader: () => import('./apstats-exploratory-data-part2').then(m => m.apStatsEDAPart2Data) },
      { title: 'Measures of Center', loader: () => import('./apstats-exploratory-data-part3').then(m => m.apStatsEDAPart3Data) },
      { title: 'Measures of Spread', loader: () => import('./apstats-exploratory-data-part4').then(m => m.apStatsEDAPart4Data) },
      { title: 'Outliers and Shape', loader: () => import('./apstats-exploratory-data-part5').then(m => m.apStatsEDAPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apstats-exploratory-data-part6').then(m => m.apStatsEDAPart6Data) },
      { title: 'Mixed Review', loader: () => import('./apstats-exploratory-data-part7').then(m => m.apStatsEDAPart7Data) },
    ],
  },
  'newtons-laws-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: "Newton's First Law", loader: () => import('./physicsc-newtons-laws-part1').then(m => m.physCNewtonPart1Data) },
      { title: "Newton's Second Law with Calculus", loader: () => import('./physicsc-newtons-laws-part2').then(m => m.physCNewtonPart2Data) },
      { title: "Newton's Third Law", loader: () => import('./physicsc-newtons-laws-part3').then(m => m.physCNewtonPart3Data) },
      { title: 'Friction Forces', loader: () => import('./physicsc-newtons-laws-part4').then(m => m.physCNewtonPart4Data) },
      { title: 'Circular Motion', loader: () => import('./physicsc-newtons-laws-part5').then(m => m.physCNewtonPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-newtons-laws-part6').then(m => m.physCNewtonPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-newtons-laws-part7').then(m => m.physCNewtonPart7Data) },
    ]
  },
  'work-energy-theorem-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Work as an Integral', loader: () => import('./physicsc-work-energy-part1').then(m => m.physCWorkEnergyPart1Data) },
      { title: 'Kinetic Energy Theorem', loader: () => import('./physicsc-work-energy-part2').then(m => m.physCWorkEnergyPart2Data) },
      { title: 'Potential Energy Functions', loader: () => import('./physicsc-work-energy-part3').then(m => m.physCWorkEnergyPart3Data) },
      { title: 'Conservation of Energy', loader: () => import('./physicsc-work-energy-part4').then(m => m.physCWorkEnergyPart4Data) },
      { title: 'Power', loader: () => import('./physicsc-work-energy-part5').then(m => m.physCWorkEnergyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-work-energy-part6').then(m => m.physCWorkEnergyPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-work-energy-part7').then(m => m.physCWorkEnergyPart7Data) },
    ]
  },
  'rotational-dynamics-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Angular Kinematics', loader: () => import('./physicsc-rotational-dynamics-part1').then(m => m.physCRotationPart1Data) },
      { title: 'Moment of Inertia', loader: () => import('./physicsc-rotational-dynamics-part2').then(m => m.physCRotationPart2Data) },
      { title: 'Torque', loader: () => import('./physicsc-rotational-dynamics-part3').then(m => m.physCRotationPart3Data) },
      { title: 'Angular Momentum', loader: () => import('./physicsc-rotational-dynamics-part4').then(m => m.physCRotationPart4Data) },
      { title: 'Rolling Motion', loader: () => import('./physicsc-rotational-dynamics-part5').then(m => m.physCRotationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-rotational-dynamics-part6').then(m => m.physCRotationPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-rotational-dynamics-part7').then(m => m.physCRotationPart7Data) },
    ]
  },
  'coulombs-law-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Electric Charge', loader: () => import('./physicsc-em-coulombs-law-part1').then(m => m.physCEMCoulombPart1Data) },
      { title: "Coulomb's Law", loader: () => import('./physicsc-em-coulombs-law-part2').then(m => m.physCEMCoulombPart2Data) },
      { title: 'Superposition Principle', loader: () => import('./physicsc-em-coulombs-law-part3').then(m => m.physCEMCoulombPart3Data) },
      { title: 'Electric Field', loader: () => import('./physicsc-em-coulombs-law-part4').then(m => m.physCEMCoulombPart4Data) },
      { title: 'Field Lines', loader: () => import('./physicsc-em-coulombs-law-part5').then(m => m.physCEMCoulombPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-em-coulombs-law-part6').then(m => m.physCEMCoulombPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-em-coulombs-law-part7').then(m => m.physCEMCoulombPart7Data) },
    ]
  },
  'gauss-law-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Electric Flux', loader: () => import('./physicsc-em-gauss-law-part1').then(m => m.physCEMGaussPart1Data) },
      { title: "Gauss's Law Statement", loader: () => import('./physicsc-em-gauss-law-part2').then(m => m.physCEMGaussPart2Data) },
      { title: 'Spherical Symmetry', loader: () => import('./physicsc-em-gauss-law-part3').then(m => m.physCEMGaussPart3Data) },
      { title: 'Cylindrical Symmetry', loader: () => import('./physicsc-em-gauss-law-part4').then(m => m.physCEMGaussPart4Data) },
      { title: 'Planar Symmetry', loader: () => import('./physicsc-em-gauss-law-part5').then(m => m.physCEMGaussPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-em-gauss-law-part6').then(m => m.physCEMGaussPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-em-gauss-law-part7').then(m => m.physCEMGaussPart7Data) },
    ]
  },
  'capacitors-dielectrics-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Capacitance', loader: () => import('./physicsc-em-capacitors-part1').then(m => m.physCEMCapacitorsPart1Data) },
      { title: 'Parallel-Plate Capacitors', loader: () => import('./physicsc-em-capacitors-part2').then(m => m.physCEMCapacitorsPart2Data) },
      { title: 'Series & Parallel Combinations', loader: () => import('./physicsc-em-capacitors-part3').then(m => m.physCEMCapacitorsPart3Data) },
      { title: 'Energy Stored', loader: () => import('./physicsc-em-capacitors-part4').then(m => m.physCEMCapacitorsPart4Data) },
      { title: 'Dielectrics', loader: () => import('./physicsc-em-capacitors-part5').then(m => m.physCEMCapacitorsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-em-capacitors-part6').then(m => m.physCEMCapacitorsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-em-capacitors-part7').then(m => m.physCEMCapacitorsPart7Data) },
    ]
  },
  'momentum-impulse-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Linear Momentum', loader: () => import('./physicsc-momentum-impulse-part1').then(m => m.physCMomentumPart1Data) },
      { title: 'Impulse', loader: () => import('./physicsc-momentum-impulse-part2').then(m => m.physCMomentumPart2Data) },
      { title: 'Collisions in 1D', loader: () => import('./physicsc-momentum-impulse-part3').then(m => m.physCMomentumPart3Data) },
      { title: 'Collisions in 2D', loader: () => import('./physicsc-momentum-impulse-part4').then(m => m.physCMomentumPart4Data) },
      { title: 'Center of Mass', loader: () => import('./physicsc-momentum-impulse-part5').then(m => m.physCMomentumPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-momentum-impulse-part6').then(m => m.physCMomentumPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-momentum-impulse-part7').then(m => m.physCMomentumPart7Data) },
    ]
  },
  'oscillations-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Simple Harmonic Motion', loader: () => import('./physicsc-oscillations-part1').then(m => m.physCOscillationsPart1Data) },
      { title: 'Kinematics of SHM', loader: () => import('./physicsc-oscillations-part2').then(m => m.physCOscillationsPart2Data) },
      { title: 'Pendulums', loader: () => import('./physicsc-oscillations-part3').then(m => m.physCOscillationsPart3Data) },
      { title: 'Damped Oscillations', loader: () => import('./physicsc-oscillations-part4').then(m => m.physCOscillationsPart4Data) },
      { title: 'Driven Oscillations & Resonance', loader: () => import('./physicsc-oscillations-part5').then(m => m.physCOscillationsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-oscillations-part6').then(m => m.physCOscillationsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-oscillations-part7').then(m => m.physCOscillationsPart7Data) },
    ]
  },
  'gravitation-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Universal Gravitation', loader: () => import('./physicsc-gravitation-part1').then(m => m.physCGravitationPart1Data) },
      { title: 'Gravitational PE & Orbits', loader: () => import('./physicsc-gravitation-part2').then(m => m.physCGravitationPart2Data) },
      { title: "Kepler's Laws", loader: () => import('./physicsc-gravitation-part3').then(m => m.physCGravitationPart3Data) },
      { title: 'Gravitational Potential', loader: () => import('./physicsc-gravitation-part4').then(m => m.physCGravitationPart4Data) },
      { title: 'Satellite Energy', loader: () => import('./physicsc-gravitation-part5').then(m => m.physCGravitationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-gravitation-part6').then(m => m.physCGravitationPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-gravitation-part7').then(m => m.physCGravitationPart7Data) },
    ]
  },
  'electric-potential-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Electric Potential Energy', loader: () => import('./physicsc-electric-potential-em-part1').then(m => m.physCEMPotentialPart1Data) },
      { title: 'Electric Potential (Voltage)', loader: () => import('./physicsc-electric-potential-em-part2').then(m => m.physCEMPotentialPart2Data) },
      { title: 'Potential and Field Relationship', loader: () => import('./physicsc-electric-potential-em-part3').then(m => m.physCEMPotentialPart3Data) },
      { title: 'Potential of Charge Distributions', loader: () => import('./physicsc-electric-potential-em-part4').then(m => m.physCEMPotentialPart4Data) },
      { title: 'Conductors and Potential', loader: () => import('./physicsc-electric-potential-em-part5').then(m => m.physCEMPotentialPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-electric-potential-em-part6').then(m => m.physCEMPotentialPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-electric-potential-em-part7').then(m => m.physCEMPotentialPart7Data) },
    ]
  },
  'dc-circuits-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Current and Resistance', loader: () => import('./physicsc-dc-circuits-em-part1').then(m => m.physCEMCircuitsPart1Data) },
      { title: 'Series and Parallel Circuits', loader: () => import('./physicsc-dc-circuits-em-part2').then(m => m.physCEMCircuitsPart2Data) },
      { title: "Kirchhoff's Rules", loader: () => import('./physicsc-dc-circuits-em-part3').then(m => m.physCEMCircuitsPart3Data) },
      { title: 'RC Circuits', loader: () => import('./physicsc-dc-circuits-em-part4').then(m => m.physCEMCircuitsPart4Data) },
      { title: 'EMF and Internal Resistance', loader: () => import('./physicsc-dc-circuits-em-part5').then(m => m.physCEMCircuitsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-dc-circuits-em-part6').then(m => m.physCEMCircuitsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-dc-circuits-em-part7').then(m => m.physCEMCircuitsPart7Data) },
    ]
  },
  'magnetic-fields-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Magnetic Force on Charges', loader: () => import('./physicsc-magnetic-fields-em-part1').then(m => m.physCEMMagFieldsPart1Data) },
      { title: 'Force on Current-Carrying Wires', loader: () => import('./physicsc-magnetic-fields-em-part2').then(m => m.physCEMMagFieldsPart2Data) },
      { title: 'Biot-Savart Law', loader: () => import('./physicsc-magnetic-fields-em-part3').then(m => m.physCEMMagFieldsPart3Data) },
      { title: "Ampere's Law", loader: () => import('./physicsc-magnetic-fields-em-part4').then(m => m.physCEMMagFieldsPart4Data) },
      { title: 'Magnetic Flux', loader: () => import('./physicsc-magnetic-fields-em-part5').then(m => m.physCEMMagFieldsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-magnetic-fields-em-part6').then(m => m.physCEMMagFieldsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-magnetic-fields-em-part7').then(m => m.physCEMMagFieldsPart7Data) },
    ]
  },
  'em-induction-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: "Faraday's Law", loader: () => import('./physicsc-em-induction-em-part1').then(m => m.physCEMInductionPart1Data) },
      { title: 'Motional EMF', loader: () => import('./physicsc-em-induction-em-part2').then(m => m.physCEMInductionPart2Data) },
      { title: 'Inductance', loader: () => import('./physicsc-em-induction-em-part3').then(m => m.physCEMInductionPart3Data) },
      { title: 'RL Circuits', loader: () => import('./physicsc-em-induction-em-part4').then(m => m.physCEMInductionPart4Data) },
      { title: 'LC Circuits & EM Oscillations', loader: () => import('./physicsc-em-induction-em-part5').then(m => m.physCEMInductionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-em-induction-em-part6').then(m => m.physCEMInductionPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-em-induction-em-part7').then(m => m.physCEMInductionPart7Data) },
    ]
  },
  'maxwell-equations-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: "Maxwell's Equations Overview", loader: () => import('./physicsc-maxwell-equations-em-part1').then(m => m.physCEMMaxwellPart1Data) },
      { title: 'Displacement Current', loader: () => import('./physicsc-maxwell-equations-em-part2').then(m => m.physCEMMaxwellPart2Data) },
      { title: 'Electromagnetic Waves', loader: () => import('./physicsc-maxwell-equations-em-part3').then(m => m.physCEMMaxwellPart3Data) },
      { title: 'EM Spectrum', loader: () => import('./physicsc-maxwell-equations-em-part4').then(m => m.physCEMMaxwellPart4Data) },
      { title: 'Energy & Momentum of EM Waves', loader: () => import('./physicsc-maxwell-equations-em-part5').then(m => m.physCEMMaxwellPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-maxwell-equations-em-part6').then(m => m.physCEMMaxwellPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-maxwell-equations-em-part7').then(m => m.physCEMMaxwellPart7Data) },
    ]
  },
  // ── AP Physics C: Mechanics (new topics) ──
  '1d-kinematics-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Position, Velocity & Acceleration', loader: () => import('./physicsc-1d-kinematics-part1').then(m => m.physC1dKinPart1Data) },
      { title: 'Constant Acceleration Equations', loader: () => import('./physicsc-1d-kinematics-part2').then(m => m.physC1dKinPart2Data) },
      { title: 'Free Fall', loader: () => import('./physicsc-1d-kinematics-part3').then(m => m.physC1dKinPart3Data) },
      { title: 'Integration for Position', loader: () => import('./physicsc-1d-kinematics-part4').then(m => m.physC1dKinPart4Data) },
      { title: 'Differentiation for v & a', loader: () => import('./physicsc-1d-kinematics-part5').then(m => m.physC1dKinPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-1d-kinematics-part6').then(m => m.physC1dKinPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-1d-kinematics-part7').then(m => m.physC1dKinPart7Data) },
    ],
  },
  '2d-kinematics-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Vector Components', loader: () => import('./physicsc-2d-kinematics-part1').then(m => m.physC2dKinPart1Data) },
      { title: 'Projectile Motion', loader: () => import('./physicsc-2d-kinematics-part2').then(m => m.physC2dKinPart2Data) },
      { title: 'Relative Motion', loader: () => import('./physicsc-2d-kinematics-part3').then(m => m.physC2dKinPart3Data) },
      { title: 'Position & Velocity Vectors', loader: () => import('./physicsc-2d-kinematics-part4').then(m => m.physC2dKinPart4Data) },
      { title: 'Parametric Equations of Motion', loader: () => import('./physicsc-2d-kinematics-part5').then(m => m.physC2dKinPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-2d-kinematics-part6').then(m => m.physC2dKinPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-2d-kinematics-part7').then(m => m.physC2dKinPart7Data) },
    ],
  },
  'variable-acceleration-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Acceleration as a Function of Time', loader: () => import('./physicsc-variable-accel-part1').then(m => m.physCVarAccelPart1Data) },
      { title: 'v(t) from Integration', loader: () => import('./physicsc-variable-accel-part2').then(m => m.physCVarAccelPart2Data) },
      { title: 'x(t) from Double Integration', loader: () => import('./physicsc-variable-accel-part3').then(m => m.physCVarAccelPart3Data) },
      { title: 'a(v) & Separation of Variables', loader: () => import('./physicsc-variable-accel-part4').then(m => m.physCVarAccelPart4Data) },
      { title: 'a(x) & Energy Methods', loader: () => import('./physicsc-variable-accel-part5').then(m => m.physCVarAccelPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-variable-accel-part6').then(m => m.physCVarAccelPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-variable-accel-part7').then(m => m.physCVarAccelPart7Data) },
    ],
  },
  'friction-inclines-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Static vs Kinetic Friction', loader: () => import('./physicsc-friction-inclines-part1').then(m => m.physCFrictionPart1Data) },
      { title: 'Frictionless Inclines', loader: () => import('./physicsc-friction-inclines-part2').then(m => m.physCFrictionPart2Data) },
      { title: 'Inclines with Friction', loader: () => import('./physicsc-friction-inclines-part3').then(m => m.physCFrictionPart3Data) },
      { title: 'Velocity-Dependent Friction', loader: () => import('./physicsc-friction-inclines-part4').then(m => m.physCFrictionPart4Data) },
      { title: 'Systems on Inclines', loader: () => import('./physicsc-friction-inclines-part5').then(m => m.physCFrictionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-friction-inclines-part6').then(m => m.physCFrictionPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-friction-inclines-part7').then(m => m.physCFrictionPart7Data) },
    ],
  },
  'circular-motion-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Uniform Circular Motion', loader: () => import('./physicsc-circular-motion-part1').then(m => m.physCCircMotionPart1Data) },
      { title: 'Centripetal Acceleration Derivation', loader: () => import('./physicsc-circular-motion-part2').then(m => m.physCCircMotionPart2Data) },
      { title: 'Banked Curves', loader: () => import('./physicsc-circular-motion-part3').then(m => m.physCCircMotionPart3Data) },
      { title: 'Vertical Circles', loader: () => import('./physicsc-circular-motion-part4').then(m => m.physCCircMotionPart4Data) },
      { title: 'Non-Uniform Circular Motion', loader: () => import('./physicsc-circular-motion-part5').then(m => m.physCCircMotionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-circular-motion-part6').then(m => m.physCCircMotionPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-circular-motion-part7').then(m => m.physCCircMotionPart7Data) },
    ],
  },
  'conservative-forces-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Conservative vs Non-Conservative', loader: () => import('./physicsc-conservative-forces-part1').then(m => m.physCConsForcePart1Data) },
      { title: 'Potential Energy Functions', loader: () => import('./physicsc-conservative-forces-part2').then(m => m.physCConsForcePart2Data) },
      { title: 'F = −dU/dx', loader: () => import('./physicsc-conservative-forces-part3').then(m => m.physCConsForcePart3Data) },
      { title: 'Energy Diagrams & Equilibrium', loader: () => import('./physicsc-conservative-forces-part4').then(m => m.physCConsForcePart4Data) },
      { title: 'Path Independence & Work', loader: () => import('./physicsc-conservative-forces-part5').then(m => m.physCConsForcePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-conservative-forces-part6').then(m => m.physCConsForcePart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-conservative-forces-part7').then(m => m.physCConsForcePart7Data) },
    ],
  },
  'center-of-mass-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: 'COM Definition (Discrete)', loader: () => import('./physicsc-center-of-mass-part1').then(m => m.physCCOMPart1Data) },
      { title: 'COM (Continuous Bodies)', loader: () => import('./physicsc-center-of-mass-part2').then(m => m.physCCOMPart2Data) },
      { title: 'COM Velocity & Momentum', loader: () => import('./physicsc-center-of-mass-part3').then(m => m.physCCOMPart3Data) },
      { title: 'COM Reference Frame', loader: () => import('./physicsc-center-of-mass-part4').then(m => m.physCCOMPart4Data) },
      { title: 'COM Under External Forces', loader: () => import('./physicsc-center-of-mass-part5').then(m => m.physCCOMPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-center-of-mass-part6').then(m => m.physCCOMPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-center-of-mass-part7').then(m => m.physCCOMPart7Data) },
    ],
  },
  'variable-mass-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Rocket Equation Derivation', loader: () => import('./physicsc-variable-mass-part1').then(m => m.physCVarMassPart1Data) },
      { title: 'Tsiolkovsky Equation', loader: () => import('./physicsc-variable-mass-part2').then(m => m.physCVarMassPart2Data) },
      { title: 'Thrust Force', loader: () => import('./physicsc-variable-mass-part3').then(m => m.physCVarMassPart3Data) },
      { title: 'Chains & Ropes', loader: () => import('./physicsc-variable-mass-part4').then(m => m.physCVarMassPart4Data) },
      { title: 'Mass Accretion', loader: () => import('./physicsc-variable-mass-part5').then(m => m.physCVarMassPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-variable-mass-part6').then(m => m.physCVarMassPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-variable-mass-part7').then(m => m.physCVarMassPart7Data) },
    ],
  },
  'angular-momentum-physics-c': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Angular Momentum of a Particle', loader: () => import('./physicsc-angular-momentum-part1').then(m => m.physCAngMomPart1Data) },
      { title: 'Angular Momentum of Rigid Bodies', loader: () => import('./physicsc-angular-momentum-part2').then(m => m.physCAngMomPart2Data) },
      { title: 'Torque & dL/dt', loader: () => import('./physicsc-angular-momentum-part3').then(m => m.physCAngMomPart3Data) },
      { title: 'Conservation of Angular Momentum', loader: () => import('./physicsc-angular-momentum-part4').then(m => m.physCAngMomPart4Data) },
      { title: 'Precession & Gyroscopes', loader: () => import('./physicsc-angular-momentum-part5').then(m => m.physCAngMomPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-angular-momentum-part6').then(m => m.physCAngMomPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-angular-momentum-part7').then(m => m.physCAngMomPart7Data) },
    ],
  },
  // ── AP Physics C: E&M (new topics) ──
  'electric-fields-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Electric Field Definition', loader: () => import('./physicsc-em-electric-fields-part1').then(m => m.physCEMElecFieldPart1Data) },
      { title: 'E from Point Charges', loader: () => import('./physicsc-em-electric-fields-part2').then(m => m.physCEMElecFieldPart2Data) },
      { title: 'E from Continuous Distributions', loader: () => import('./physicsc-em-electric-fields-part3').then(m => m.physCEMElecFieldPart3Data) },
      { title: 'Electric Field Lines', loader: () => import('./physicsc-em-electric-fields-part4').then(m => m.physCEMElecFieldPart4Data) },
      { title: 'Dipole Fields', loader: () => import('./physicsc-em-electric-fields-part5').then(m => m.physCEMElecFieldPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-em-electric-fields-part6').then(m => m.physCEMElecFieldPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-em-electric-fields-part7').then(m => m.physCEMElecFieldPart7Data) },
    ],
  },
  'conductors-equilibrium-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Conductors in Equilibrium', loader: () => import('./physicsc-em-conductors-part1').then(m => m.physCEMCondPart1Data) },
      { title: 'E = 0 Inside a Conductor', loader: () => import('./physicsc-em-conductors-part2').then(m => m.physCEMCondPart2Data) },
      { title: 'Surface Charge Distribution', loader: () => import('./physicsc-em-conductors-part3').then(m => m.physCEMCondPart3Data) },
      { title: 'Faraday Cage', loader: () => import('./physicsc-em-conductors-part4').then(m => m.physCEMCondPart4Data) },
      { title: 'Induced & Image Charges', loader: () => import('./physicsc-em-conductors-part5').then(m => m.physCEMCondPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-em-conductors-part6').then(m => m.physCEMCondPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-em-conductors-part7').then(m => m.physCEMCondPart7Data) },
    ],
  },
  'potential-energy-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'PE of Point Charges', loader: () => import('./physicsc-em-potential-energy-part1').then(m => m.physCEMPotEnergyPart1Data) },
      { title: 'U = qV', loader: () => import('./physicsc-em-potential-energy-part2').then(m => m.physCEMPotEnergyPart2Data) },
      { title: 'PE of Charge Configurations', loader: () => import('./physicsc-em-potential-energy-part3').then(m => m.physCEMPotEnergyPart3Data) },
      { title: 'Energy in the E Field', loader: () => import('./physicsc-em-potential-energy-part4').then(m => m.physCEMPotEnergyPart4Data) },
      { title: 'PE via Integration', loader: () => import('./physicsc-em-potential-energy-part5').then(m => m.physCEMPotEnergyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-em-potential-energy-part6').then(m => m.physCEMPotEnergyPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-em-potential-energy-part7').then(m => m.physCEMPotEnergyPart7Data) },
    ],
  },
  'dielectrics-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Dielectric Constant κ', loader: () => import('./physicsc-em-dielectrics-part1').then(m => m.physCEMDielecPart1Data) },
      { title: 'Effect on Capacitance', loader: () => import('./physicsc-em-dielectrics-part2').then(m => m.physCEMDielecPart2Data) },
      { title: 'Polarization & Bound Charges', loader: () => import('./physicsc-em-dielectrics-part3').then(m => m.physCEMDielecPart3Data) },
      { title: 'E Field in Dielectrics', loader: () => import('./physicsc-em-dielectrics-part4').then(m => m.physCEMDielecPart4Data) },
      { title: 'Dielectric Breakdown', loader: () => import('./physicsc-em-dielectrics-part5').then(m => m.physCEMDielecPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-em-dielectrics-part6').then(m => m.physCEMDielecPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-em-dielectrics-part7').then(m => m.physCEMDielecPart7Data) },
    ],
  },
  'energy-density-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Energy Stored in Capacitors', loader: () => import('./physicsc-em-energy-density-part1').then(m => m.physCEMEnergyDenPart1Data) },
      { title: 'Electric Energy Density', loader: () => import('./physicsc-em-energy-density-part2').then(m => m.physCEMEnergyDenPart2Data) },
      { title: 'Energy of Charge Distributions', loader: () => import('./physicsc-em-energy-density-part3').then(m => m.physCEMEnergyDenPart3Data) },
      { title: 'Magnetic Energy Density', loader: () => import('./physicsc-em-energy-density-part4').then(m => m.physCEMEnergyDenPart4Data) },
      { title: 'Total EM Energy', loader: () => import('./physicsc-em-energy-density-part5').then(m => m.physCEMEnergyDenPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-em-energy-density-part6').then(m => m.physCEMEnergyDenPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-em-energy-density-part7').then(m => m.physCEMEnergyDenPart7Data) },
    ],
  },
  'rc-circuits-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'RC Charging (ODE)', loader: () => import('./physicsc-em-rc-circuits-part1').then(m => m.physCEMRCPart1Data) },
      { title: 'RC Discharging', loader: () => import('./physicsc-em-rc-circuits-part2').then(m => m.physCEMRCPart2Data) },
      { title: 'Time Constant τ = RC', loader: () => import('./physicsc-em-rc-circuits-part3').then(m => m.physCEMRCPart3Data) },
      { title: 'Current & Voltage Graphs', loader: () => import('./physicsc-em-rc-circuits-part4').then(m => m.physCEMRCPart4Data) },
      { title: 'Power & Energy in RC', loader: () => import('./physicsc-em-rc-circuits-part5').then(m => m.physCEMRCPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-em-rc-circuits-part6').then(m => m.physCEMRCPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-em-rc-circuits-part7').then(m => m.physCEMRCPart7Data) },
    ],
  },
  'power-circuits-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Power Dissipation', loader: () => import('./physicsc-em-power-circuits-part1').then(m => m.physCEMPwrCircPart1Data) },
      { title: 'EMF & Internal Resistance', loader: () => import('./physicsc-em-power-circuits-part2').then(m => m.physCEMPwrCircPart2Data) },
      { title: 'Maximum Power Transfer', loader: () => import('./physicsc-em-power-circuits-part3').then(m => m.physCEMPwrCircPart3Data) },
      { title: 'Power in Complex Circuits', loader: () => import('./physicsc-em-power-circuits-part4').then(m => m.physCEMPwrCircPart4Data) },
      { title: 'Energy Conservation in Circuits', loader: () => import('./physicsc-em-power-circuits-part5').then(m => m.physCEMPwrCircPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-em-power-circuits-part6').then(m => m.physCEMPwrCircPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-em-power-circuits-part7').then(m => m.physCEMPwrCircPart7Data) },
    ],
  },
  'magnetic-forces-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Lorentz Force', loader: () => import('./physicsc-em-magnetic-forces-part1').then(m => m.physCEMMagForcePart1Data) },
      { title: 'Circular Motion in B Fields', loader: () => import('./physicsc-em-magnetic-forces-part2').then(m => m.physCEMMagForcePart2Data) },
      { title: 'Mass Spectrometer', loader: () => import('./physicsc-em-magnetic-forces-part3').then(m => m.physCEMMagForcePart3Data) },
      { title: 'Force on Current-Carrying Wire', loader: () => import('./physicsc-em-magnetic-forces-part4').then(m => m.physCEMMagForcePart4Data) },
      { title: 'Torque on Current Loop', loader: () => import('./physicsc-em-magnetic-forces-part5').then(m => m.physCEMMagForcePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-em-magnetic-forces-part6').then(m => m.physCEMMagForcePart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-em-magnetic-forces-part7').then(m => m.physCEMMagForcePart7Data) },
    ],
  },
  'inductance-rl-physics-c-em': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Self-Inductance', loader: () => import('./physicsc-em-inductance-rl-part1').then(m => m.physCEMIndRLPart1Data) },
      { title: 'RL Circuit ODE', loader: () => import('./physicsc-em-inductance-rl-part2').then(m => m.physCEMIndRLPart2Data) },
      { title: 'RL Charging & Discharging', loader: () => import('./physicsc-em-inductance-rl-part3').then(m => m.physCEMIndRLPart3Data) },
      { title: 'Time Constant τ = L/R', loader: () => import('./physicsc-em-inductance-rl-part4').then(m => m.physCEMIndRLPart4Data) },
      { title: 'Energy in Inductors', loader: () => import('./physicsc-em-inductance-rl-part5').then(m => m.physCEMIndRLPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./physicsc-em-inductance-rl-part6').then(m => m.physCEMIndRLPart6Data) },
      { title: 'Review & Applications', loader: () => import('./physicsc-em-inductance-rl-part7').then(m => m.physCEMIndRLPart7Data) },
    ],
  },
  'multi-digit-multiplication-grade4': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Multiplying by 10s and 100s', loader: () => import('./grade4-multi-digit-multiplication-part1').then(m => m.g4MultiDigitMultPart1Data) },
      { title: 'Area Model', loader: () => import('./grade4-multi-digit-multiplication-part2').then(m => m.g4MultiDigitMultPart2Data) },
      { title: 'Partial Products', loader: () => import('./grade4-multi-digit-multiplication-part3').then(m => m.g4MultiDigitMultPart3Data) },
      { title: 'Standard Algorithm', loader: () => import('./grade4-multi-digit-multiplication-part4').then(m => m.g4MultiDigitMultPart4Data) },
      { title: 'Word Problems', loader: () => import('./grade4-multi-digit-multiplication-part5').then(m => m.g4MultiDigitMultPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade4-multi-digit-multiplication-part6').then(m => m.g4MultiDigitMultPart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade4-multi-digit-multiplication-part7').then(m => m.g4MultiDigitMultPart7Data) },
    ]
  },
  'fractions-grade4': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Equivalent Fractions', loader: () => import('./grade4-fractions-part1').then(m => m.g4FractionsPart1Data) },
      { title: 'Comparing Fractions', loader: () => import('./grade4-fractions-part2').then(m => m.g4FractionsPart2Data) },
      { title: 'Adding Like Denominators', loader: () => import('./grade4-fractions-part3').then(m => m.g4FractionsPart3Data) },
      { title: 'Mixed Numbers', loader: () => import('./grade4-fractions-part4').then(m => m.g4FractionsPart4Data) },
      { title: 'Fractions on Number Lines', loader: () => import('./grade4-fractions-part5').then(m => m.g4FractionsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade4-fractions-part6').then(m => m.g4FractionsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade4-fractions-part7').then(m => m.g4FractionsPart7Data) },
    ]
  },
  'geometry-measurement-grade4': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Lines & Angles', loader: () => import('./grade4-geometry-measurement-part1').then(m => m.g4GeoMeasurePart1Data) },
      { title: 'Classifying Shapes', loader: () => import('./grade4-geometry-measurement-part2').then(m => m.g4GeoMeasurePart2Data) },
      { title: 'Perimeter', loader: () => import('./grade4-geometry-measurement-part3').then(m => m.g4GeoMeasurePart3Data) },
      { title: 'Area of Rectangles', loader: () => import('./grade4-geometry-measurement-part4').then(m => m.g4GeoMeasurePart4Data) },
      { title: 'Symmetry', loader: () => import('./grade4-geometry-measurement-part5').then(m => m.g4GeoMeasurePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade4-geometry-measurement-part6').then(m => m.g4GeoMeasurePart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade4-geometry-measurement-part7').then(m => m.g4GeoMeasurePart7Data) },
    ]
  },
  'decimal-operations-grade5': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Place Value to Thousandths', loader: () => import('./grade5-decimal-operations-part1').then(m => m.g5DecimalsPart1Data) },
      { title: 'Comparing Decimals', loader: () => import('./grade5-decimal-operations-part2').then(m => m.g5DecimalsPart2Data) },
      { title: 'Adding & Subtracting Decimals', loader: () => import('./grade5-decimal-operations-part3').then(m => m.g5DecimalsPart3Data) },
      { title: 'Multiplying Decimals', loader: () => import('./grade5-decimal-operations-part4').then(m => m.g5DecimalsPart4Data) },
      { title: 'Dividing Decimals', loader: () => import('./grade5-decimal-operations-part5').then(m => m.g5DecimalsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade5-decimal-operations-part6').then(m => m.g5DecimalsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade5-decimal-operations-part7').then(m => m.g5DecimalsPart7Data) },
    ]
  },
  'fraction-operations-grade5': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Adding Unlike Denominators', loader: () => import('./grade5-fraction-operations-part1').then(m => m.g5FractionOpsPart1Data) },
      { title: 'Subtracting Mixed Numbers', loader: () => import('./grade5-fraction-operations-part2').then(m => m.g5FractionOpsPart2Data) },
      { title: 'Multiplying Fractions', loader: () => import('./grade5-fraction-operations-part3').then(m => m.g5FractionOpsPart3Data) },
      { title: 'Dividing Fractions', loader: () => import('./grade5-fraction-operations-part4').then(m => m.g5FractionOpsPart4Data) },
      { title: 'Word Problems', loader: () => import('./grade5-fraction-operations-part5').then(m => m.g5FractionOpsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade5-fraction-operations-part6').then(m => m.g5FractionOpsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade5-fraction-operations-part7').then(m => m.g5FractionOpsPart7Data) },
    ]
  },
  'volume-grade5': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Understanding Volume', loader: () => import('./grade5-volume-part1').then(m => m.g5VolumePart1Data) },
      { title: 'Counting Unit Cubes', loader: () => import('./grade5-volume-part2').then(m => m.g5VolumePart2Data) },
      { title: 'Volume Formulas', loader: () => import('./grade5-volume-part3').then(m => m.g5VolumePart3Data) },
      { title: 'Irregular Shapes', loader: () => import('./grade5-volume-part4').then(m => m.g5VolumePart4Data) },
      { title: 'Real-World Volume', loader: () => import('./grade5-volume-part5').then(m => m.g5VolumePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade5-volume-part6').then(m => m.g5VolumePart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade5-volume-part7').then(m => m.g5VolumePart7Data) },
    ]
  },
  'ratios-proportions-grade6': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Understanding Ratios', loader: () => import('./grade6-ratios-proportions-part1').then(m => m.g6RatiosPart1Data) },
      { title: 'Equivalent Ratios', loader: () => import('./grade6-ratios-proportions-part2').then(m => m.g6RatiosPart2Data) },
      { title: 'Unit Rates', loader: () => import('./grade6-ratios-proportions-part3').then(m => m.g6RatiosPart3Data) },
      { title: 'Solving Proportions', loader: () => import('./grade6-ratios-proportions-part4').then(m => m.g6RatiosPart4Data) },
      { title: 'Percent Problems', loader: () => import('./grade6-ratios-proportions-part5').then(m => m.g6RatiosPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade6-ratios-proportions-part6').then(m => m.g6RatiosPart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade6-ratios-proportions-part7').then(m => m.g6RatiosPart7Data) },
    ]
  },
  'integers-grade6': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Positive & Negative Numbers', loader: () => import('./grade6-integers-part1').then(m => m.g6IntegersPart1Data) },
      { title: 'Number Line & Absolute Value', loader: () => import('./grade6-integers-part2').then(m => m.g6IntegersPart2Data) },
      { title: 'Adding Integers', loader: () => import('./grade6-integers-part3').then(m => m.g6IntegersPart3Data) },
      { title: 'Subtracting Integers', loader: () => import('./grade6-integers-part4').then(m => m.g6IntegersPart4Data) },
      { title: 'Multiplying & Dividing Integers', loader: () => import('./grade6-integers-part5').then(m => m.g6IntegersPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade6-integers-part6').then(m => m.g6IntegersPart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade6-integers-part7').then(m => m.g6IntegersPart7Data) },
    ]
  },
  'expressions-equations-grade6': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Writing Expressions', loader: () => import('./grade6-expressions-equations-part1').then(m => m.g6ExpressionsPart1Data) },
      { title: 'Evaluating Expressions', loader: () => import('./grade6-expressions-equations-part2').then(m => m.g6ExpressionsPart2Data) },
      { title: 'Properties of Operations', loader: () => import('./grade6-expressions-equations-part3').then(m => m.g6ExpressionsPart3Data) },
      { title: 'Solving One-Step Equations', loader: () => import('./grade6-expressions-equations-part4').then(m => m.g6ExpressionsPart4Data) },
      { title: 'Inequalities Introduction', loader: () => import('./grade6-expressions-equations-part5').then(m => m.g6ExpressionsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade6-expressions-equations-part6').then(m => m.g6ExpressionsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade6-expressions-equations-part7').then(m => m.g6ExpressionsPart7Data) },
    ]
  },
  'proportional-relationships-grade7': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Identifying Proportions', loader: () => import('./grade7-proportional-relationships-part1').then(m => m.g7ProportionalPart1Data) },
      { title: 'Constant of Proportionality', loader: () => import('./grade7-proportional-relationships-part2').then(m => m.g7ProportionalPart2Data) },
      { title: 'Graphing Proportions', loader: () => import('./grade7-proportional-relationships-part3').then(m => m.g7ProportionalPart3Data) },
      { title: 'Scale Drawings', loader: () => import('./grade7-proportional-relationships-part4').then(m => m.g7ProportionalPart4Data) },
      { title: 'Percent Applications', loader: () => import('./grade7-proportional-relationships-part5').then(m => m.g7ProportionalPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade7-proportional-relationships-part6').then(m => m.g7ProportionalPart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade7-proportional-relationships-part7').then(m => m.g7ProportionalPart7Data) },
    ]
  },
  'operations-rational-numbers-grade7': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Adding Rational Numbers', loader: () => import('./grade7-operations-rational-part1').then(m => m.g7RationalOpsPart1Data) },
      { title: 'Subtracting Rational Numbers', loader: () => import('./grade7-operations-rational-part2').then(m => m.g7RationalOpsPart2Data) },
      { title: 'Multiplying Rational Numbers', loader: () => import('./grade7-operations-rational-part3').then(m => m.g7RationalOpsPart3Data) },
      { title: 'Dividing Rational Numbers', loader: () => import('./grade7-operations-rational-part4').then(m => m.g7RationalOpsPart4Data) },
      { title: 'Order of Operations Review', loader: () => import('./grade7-operations-rational-part5').then(m => m.g7RationalOpsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade7-operations-rational-part6').then(m => m.g7RationalOpsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade7-operations-rational-part7').then(m => m.g7RationalOpsPart7Data) },
    ]
  },
  'geometry-grade7': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Angle Relationships', loader: () => import('./grade7-geometry-part1').then(m => m.g7GeometryPart1Data) },
      { title: 'Area of Composite Shapes', loader: () => import('./grade7-geometry-part2').then(m => m.g7GeometryPart2Data) },
      { title: 'Circumference & Area of Circles', loader: () => import('./grade7-geometry-part3').then(m => m.g7GeometryPart3Data) },
      { title: 'Surface Area', loader: () => import('./grade7-geometry-part4').then(m => m.g7GeometryPart4Data) },
      { title: 'Volume of Prisms & Cylinders', loader: () => import('./grade7-geometry-part5').then(m => m.g7GeometryPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade7-geometry-part6').then(m => m.g7GeometryPart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade7-geometry-part7').then(m => m.g7GeometryPart7Data) },
    ]
  },
  'linear-functions-grade8': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Functions & Relations', loader: () => import('./grade8-linear-functions-part1').then(m => m.g8LinearPart1Data) },
      { title: 'Slope from Tables & Graphs', loader: () => import('./grade8-linear-functions-part2').then(m => m.g8LinearPart2Data) },
      { title: 'Writing Linear Equations', loader: () => import('./grade8-linear-functions-part3').then(m => m.g8LinearPart3Data) },
      { title: 'Comparing Functions', loader: () => import('./grade8-linear-functions-part4').then(m => m.g8LinearPart4Data) },
      { title: 'Systems Introduction', loader: () => import('./grade8-linear-functions-part5').then(m => m.g8LinearPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade8-linear-functions-part6').then(m => m.g8LinearPart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade8-linear-functions-part7').then(m => m.g8LinearPart7Data) },
    ]
  },
  'pythagorean-theorem-grade8': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Understanding the Theorem', loader: () => import('./grade8-pythagorean-theorem-part1').then(m => m.g8PythagoreanPart1Data) },
      { title: 'Finding Missing Sides', loader: () => import('./grade8-pythagorean-theorem-part2').then(m => m.g8PythagoreanPart2Data) },
      { title: 'Distance Between Points', loader: () => import('./grade8-pythagorean-theorem-part3').then(m => m.g8PythagoreanPart3Data) },
      { title: 'Converse of Pythagorean Theorem', loader: () => import('./grade8-pythagorean-theorem-part4').then(m => m.g8PythagoreanPart4Data) },
      { title: '3D Applications', loader: () => import('./grade8-pythagorean-theorem-part5').then(m => m.g8PythagoreanPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade8-pythagorean-theorem-part6').then(m => m.g8PythagoreanPart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade8-pythagorean-theorem-part7').then(m => m.g8PythagoreanPart7Data) },
    ]
  },
  'transformations-grade8': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Translations', loader: () => import('./grade8-transformations-part1').then(m => m.g8TransformationsPart1Data) },
      { title: 'Reflections', loader: () => import('./grade8-transformations-part2').then(m => m.g8TransformationsPart2Data) },
      { title: 'Rotations', loader: () => import('./grade8-transformations-part3').then(m => m.g8TransformationsPart3Data) },
      { title: 'Dilations', loader: () => import('./grade8-transformations-part4').then(m => m.g8TransformationsPart4Data) },
      { title: 'Sequences of Transformations', loader: () => import('./grade8-transformations-part5').then(m => m.g8TransformationsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./grade8-transformations-part6').then(m => m.g8TransformationsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./grade8-transformations-part7').then(m => m.g8TransformationsPart7Data) },
    ]
  },
  'order-of-operations-prealgebra': {
    completionDestination: 'competitive',
    parts: [
      { title: 'PEMDAS Basics', loader: () => import('./prealgebra-order-of-operations-part1').then(m => m.preAlgOrderOpsPart1Data) },
      { title: 'Parentheses & Exponents', loader: () => import('./prealgebra-order-of-operations-part2').then(m => m.preAlgOrderOpsPart2Data) },
      { title: 'Multiplication & Division', loader: () => import('./prealgebra-order-of-operations-part3').then(m => m.preAlgOrderOpsPart3Data) },
      { title: 'Addition & Subtraction', loader: () => import('./prealgebra-order-of-operations-part4').then(m => m.preAlgOrderOpsPart4Data) },
      { title: 'Nested Expressions', loader: () => import('./prealgebra-order-of-operations-part5').then(m => m.preAlgOrderOpsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./prealgebra-order-of-operations-part6').then(m => m.preAlgOrderOpsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./prealgebra-order-of-operations-part7').then(m => m.preAlgOrderOpsPart7Data) },
    ]
  },
  'fractions-decimals-percents-prealgebra': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Converting Fractions & Decimals', loader: () => import('./prealgebra-fractions-decimals-part1').then(m => m.preAlgFractionsPart1Data) },
      { title: 'Converting to Percents', loader: () => import('./prealgebra-fractions-decimals-part2').then(m => m.preAlgFractionsPart2Data) },
      { title: 'Comparing Values', loader: () => import('./prealgebra-fractions-decimals-part3').then(m => m.preAlgFractionsPart3Data) },
      { title: 'Operations with Mixed Forms', loader: () => import('./prealgebra-fractions-decimals-part4').then(m => m.preAlgFractionsPart4Data) },
      { title: 'Real-World Applications', loader: () => import('./prealgebra-fractions-decimals-part5').then(m => m.preAlgFractionsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./prealgebra-fractions-decimals-part6').then(m => m.preAlgFractionsPart6Data) },
      { title: 'Review & Applications', loader: () => import('./prealgebra-fractions-decimals-part7').then(m => m.preAlgFractionsPart7Data) },
    ]
  },
  'intro-variables-prealgebra': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What is a Variable?', loader: () => import('./prealgebra-intro-variables-part1').then(m => m.preAlgVariablesPart1Data) },
      { title: 'Writing Expressions', loader: () => import('./prealgebra-intro-variables-part2').then(m => m.preAlgVariablesPart2Data) },
      { title: 'Evaluating Expressions', loader: () => import('./prealgebra-intro-variables-part3').then(m => m.preAlgVariablesPart3Data) },
      { title: 'Combining Like Terms', loader: () => import('./prealgebra-intro-variables-part4').then(m => m.preAlgVariablesPart4Data) },
      { title: 'Solving Simple Equations', loader: () => import('./prealgebra-intro-variables-part5').then(m => m.preAlgVariablesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./prealgebra-intro-variables-part6').then(m => m.preAlgVariablesPart6Data) },
      { title: 'Review & Applications', loader: () => import('./prealgebra-intro-variables-part7').then(m => m.preAlgVariablesPart7Data) },
    ]
  },
  'polynomial-end-behavior-apprecalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Degree & Leading Coefficient', loader: () => import('./apprecalc-polynomial-end-behavior-part1').then(m => m.apPrecalcPolyEndPart1Data) },
      { title: 'End Behavior Rules', loader: () => import('./apprecalc-polynomial-end-behavior-part2').then(m => m.apPrecalcPolyEndPart2Data) },
      { title: 'Zeros & Multiplicity', loader: () => import('./apprecalc-polynomial-end-behavior-part3').then(m => m.apPrecalcPolyEndPart3Data) },
      { title: 'Turning Points', loader: () => import('./apprecalc-polynomial-end-behavior-part4').then(m => m.apPrecalcPolyEndPart4Data) },
      { title: 'Sketching Polynomials', loader: () => import('./apprecalc-polynomial-end-behavior-part5').then(m => m.apPrecalcPolyEndPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apprecalc-polynomial-end-behavior-part6').then(m => m.apPrecalcPolyEndPart6Data) },
      { title: 'Review & Applications', loader: () => import('./apprecalc-polynomial-end-behavior-part7').then(m => m.apPrecalcPolyEndPart7Data) },
    ]
  },
  'rational-functions-apprecalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Domain Restrictions', loader: () => import('./apprecalc-rational-functions-part1').then(m => m.apPrecalcRationalPart1Data) },
      { title: 'Vertical Asymptotes', loader: () => import('./apprecalc-rational-functions-part2').then(m => m.apPrecalcRationalPart2Data) },
      { title: 'Horizontal Asymptotes', loader: () => import('./apprecalc-rational-functions-part3').then(m => m.apPrecalcRationalPart3Data) },
      { title: 'Holes in Graphs', loader: () => import('./apprecalc-rational-functions-part4').then(m => m.apPrecalcRationalPart4Data) },
      { title: 'Graphing Rational Functions', loader: () => import('./apprecalc-rational-functions-part5').then(m => m.apPrecalcRationalPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apprecalc-rational-functions-part6').then(m => m.apPrecalcRationalPart6Data) },
      { title: 'Review & Applications', loader: () => import('./apprecalc-rational-functions-part7').then(m => m.apPrecalcRationalPart7Data) },
    ]
  },
  'trigonometric-modeling-apprecalc': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Sine & Cosine Graphs', loader: () => import('./apprecalc-trig-modeling-part1').then(m => m.apPrecalcTrigModelPart1Data) },
      { title: 'Amplitude & Period', loader: () => import('./apprecalc-trig-modeling-part2').then(m => m.apPrecalcTrigModelPart2Data) },
      { title: 'Phase Shift', loader: () => import('./apprecalc-trig-modeling-part3').then(m => m.apPrecalcTrigModelPart3Data) },
      { title: 'Modeling with Sinusoids', loader: () => import('./apprecalc-trig-modeling-part4').then(m => m.apPrecalcTrigModelPart4Data) },
      { title: 'Inverse Trig Functions', loader: () => import('./apprecalc-trig-modeling-part5').then(m => m.apPrecalcTrigModelPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apprecalc-trig-modeling-part6').then(m => m.apPrecalcTrigModelPart6Data) },
      { title: 'Review & Applications', loader: () => import('./apprecalc-trig-modeling-part7').then(m => m.apPrecalcTrigModelPart7Data) },
    ]
  },
  'hg-intro-geography': {
    completionDestination: 'complete',
    parts: [
      { title: 'Geographic Thinking', loader: () => import('./hg-intro-geography-part1').then(m => m.hgIntroGeographyPart1Data) },
      { title: 'Maps and Spatial Data', loader: () => import('./hg-intro-geography-part2').then(m => m.hgIntroGeographyPart2Data) },
      { title: 'Regions and Regionalization', loader: () => import('./hg-intro-geography-part3').then(m => m.hgIntroGeographyPart3Data) },
      { title: 'Spatial Concepts', loader: () => import('./hg-intro-geography-part4').then(m => m.hgIntroGeographyPart4Data) },
      { title: 'Diffusion Patterns', loader: () => import('./hg-intro-geography-part5').then(m => m.hgIntroGeographyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-intro-geography-part6').then(m => m.hgIntroGeographyPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-intro-geography-part7').then(m => m.hgIntroGeographyPart7Data) }
    ],
  },
  'hg-spatial-concepts': {
    completionDestination: 'complete',
    parts: [
      { title: 'Location & Place', loader: () => import('./hg-spatial-concepts-part1').then(m => m.hgSpatialConceptsPart1Data) },
      { title: 'Spatial Patterns', loader: () => import('./hg-spatial-concepts-part2').then(m => m.hgSpatialConceptsPart2Data) },
      { title: 'Map Types & Projections', loader: () => import('./hg-spatial-concepts-part3').then(m => m.hgSpatialConceptsPart3Data) },
      { title: 'Geographic Data Sources', loader: () => import('./hg-spatial-concepts-part4').then(m => m.hgSpatialConceptsPart4Data) },
      { title: 'Spatial Interaction Models', loader: () => import('./hg-spatial-concepts-part5').then(m => m.hgSpatialConceptsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-spatial-concepts-part6').then(m => m.hgSpatialConceptsPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-spatial-concepts-part7').then(m => m.hgSpatialConceptsPart7Data) }
    ],
  },
  'hg-population-distribution': {
    completionDestination: 'complete',
    parts: [
      { title: 'Population Distribution', loader: () => import('./hg-population-distribution-part1').then(m => m.hgPopulationDistributionPart1Data) },
      { title: 'Population Composition', loader: () => import('./hg-population-distribution-part2').then(m => m.hgPopulationDistributionPart2Data) },
      { title: 'Population Density Measures', loader: () => import('./hg-population-distribution-part3').then(m => m.hgPopulationDistributionPart3Data) },
      { title: 'Factors Influencing Distribution', loader: () => import('./hg-population-distribution-part4').then(m => m.hgPopulationDistributionPart4Data) },
      { title: 'World Population Clusters', loader: () => import('./hg-population-distribution-part5').then(m => m.hgPopulationDistributionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-population-distribution-part6').then(m => m.hgPopulationDistributionPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-population-distribution-part7').then(m => m.hgPopulationDistributionPart7Data) }
    ],
  },
  'hg-population-growth': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./hg-population-growth-part1').then(m => m.hgPopulationGrowthPart1Data) },
      { title: 'Key Processes', loader: () => import('./hg-population-growth-part2').then(m => m.hgPopulationGrowthPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./hg-population-growth-part3').then(m => m.hgPopulationGrowthPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./hg-population-growth-part4').then(m => m.hgPopulationGrowthPart4Data) },
      { title: 'Change Over Time', loader: () => import('./hg-population-growth-part5').then(m => m.hgPopulationGrowthPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-population-growth-part6').then(m => m.hgPopulationGrowthPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-population-growth-part7').then(m => m.hgPopulationGrowthPart7Data) }
    ],
  },
  'hg-migration': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./hg-migration-part1').then(m => m.hgMigrationPart1Data) },
      { title: 'Key Processes', loader: () => import('./hg-migration-part2').then(m => m.hgMigrationPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./hg-migration-part3').then(m => m.hgMigrationPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./hg-migration-part4').then(m => m.hgMigrationPart4Data) },
      { title: 'Change Over Time', loader: () => import('./hg-migration-part5').then(m => m.hgMigrationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-migration-part6').then(m => m.hgMigrationPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-migration-part7').then(m => m.hgMigrationPart7Data) }
    ],
  },
  'hg-culture-diffusion': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./hg-culture-diffusion-part1').then(m => m.hgCultureDiffusionPart1Data) },
      { title: 'Key Processes', loader: () => import('./hg-culture-diffusion-part2').then(m => m.hgCultureDiffusionPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./hg-culture-diffusion-part3').then(m => m.hgCultureDiffusionPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./hg-culture-diffusion-part4').then(m => m.hgCultureDiffusionPart4Data) },
      { title: 'Change Over Time', loader: () => import('./hg-culture-diffusion-part5').then(m => m.hgCultureDiffusionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-culture-diffusion-part6').then(m => m.hgCultureDiffusionPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-culture-diffusion-part7').then(m => m.hgCultureDiffusionPart7Data) }
    ],
  },
  'hg-language-religion': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./hg-language-religion-part1').then(m => m.hgLanguageReligionPart1Data) },
      { title: 'Key Processes', loader: () => import('./hg-language-religion-part2').then(m => m.hgLanguageReligionPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./hg-language-religion-part3').then(m => m.hgLanguageReligionPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./hg-language-religion-part4').then(m => m.hgLanguageReligionPart4Data) },
      { title: 'Change Over Time', loader: () => import('./hg-language-religion-part5').then(m => m.hgLanguageReligionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-language-religion-part6').then(m => m.hgLanguageReligionPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-language-religion-part7').then(m => m.hgLanguageReligionPart7Data) }
    ],
  },
  'hg-ethnicity-identity': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./hg-ethnicity-identity-part1').then(m => m.hgEthnicityIdentityPart1Data) },
      { title: 'Key Processes', loader: () => import('./hg-ethnicity-identity-part2').then(m => m.hgEthnicityIdentityPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./hg-ethnicity-identity-part3').then(m => m.hgEthnicityIdentityPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./hg-ethnicity-identity-part4').then(m => m.hgEthnicityIdentityPart4Data) },
      { title: 'Change Over Time', loader: () => import('./hg-ethnicity-identity-part5').then(m => m.hgEthnicityIdentityPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-ethnicity-identity-part6').then(m => m.hgEthnicityIdentityPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-ethnicity-identity-part7').then(m => m.hgEthnicityIdentityPart7Data) }
    ],
  },
  'hg-political-geography': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./hg-political-geography-part1').then(m => m.hgPoliticalGeographyPart1Data) },
      { title: 'Key Processes', loader: () => import('./hg-political-geography-part2').then(m => m.hgPoliticalGeographyPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./hg-political-geography-part3').then(m => m.hgPoliticalGeographyPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./hg-political-geography-part4').then(m => m.hgPoliticalGeographyPart4Data) },
      { title: 'Change Over Time', loader: () => import('./hg-political-geography-part5').then(m => m.hgPoliticalGeographyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-political-geography-part6').then(m => m.hgPoliticalGeographyPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-political-geography-part7').then(m => m.hgPoliticalGeographyPart7Data) }
    ],
  },
  'hg-political-power': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./hg-political-power-part1').then(m => m.hgPoliticalPowerPart1Data) },
      { title: 'Key Processes', loader: () => import('./hg-political-power-part2').then(m => m.hgPoliticalPowerPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./hg-political-power-part3').then(m => m.hgPoliticalPowerPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./hg-political-power-part4').then(m => m.hgPoliticalPowerPart4Data) },
      { title: 'Change Over Time', loader: () => import('./hg-political-power-part5').then(m => m.hgPoliticalPowerPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-political-power-part6').then(m => m.hgPoliticalPowerPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-political-power-part7').then(m => m.hgPoliticalPowerPart7Data) }
    ],
  },
  'hg-agricultural-origins': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./hg-agricultural-origins-part1').then(m => m.hgAgriculturalOriginsPart1Data) },
      { title: 'Key Processes', loader: () => import('./hg-agricultural-origins-part2').then(m => m.hgAgriculturalOriginsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./hg-agricultural-origins-part3').then(m => m.hgAgriculturalOriginsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./hg-agricultural-origins-part4').then(m => m.hgAgriculturalOriginsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./hg-agricultural-origins-part5').then(m => m.hgAgriculturalOriginsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-agricultural-origins-part6').then(m => m.hgAgriculturalOriginsPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-agricultural-origins-part7').then(m => m.hgAgriculturalOriginsPart7Data) }
    ],
  },
  'hg-agricultural-practices': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./hg-agricultural-practices-part1').then(m => m.hgAgriculturalPracticesPart1Data) },
      { title: 'Key Processes', loader: () => import('./hg-agricultural-practices-part2').then(m => m.hgAgriculturalPracticesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./hg-agricultural-practices-part3').then(m => m.hgAgriculturalPracticesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./hg-agricultural-practices-part4').then(m => m.hgAgriculturalPracticesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./hg-agricultural-practices-part5').then(m => m.hgAgriculturalPracticesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-agricultural-practices-part6').then(m => m.hgAgriculturalPracticesPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-agricultural-practices-part7').then(m => m.hgAgriculturalPracticesPart7Data) }
    ],
  },
  'hg-urbanization': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./hg-urbanization-part1').then(m => m.hgUrbanizationPart1Data) },
      { title: 'Key Processes', loader: () => import('./hg-urbanization-part2').then(m => m.hgUrbanizationPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./hg-urbanization-part3').then(m => m.hgUrbanizationPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./hg-urbanization-part4').then(m => m.hgUrbanizationPart4Data) },
      { title: 'Change Over Time', loader: () => import('./hg-urbanization-part5').then(m => m.hgUrbanizationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-urbanization-part6').then(m => m.hgUrbanizationPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-urbanization-part7').then(m => m.hgUrbanizationPart7Data) }
    ],
  },
  'hg-urban-challenges': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./hg-urban-challenges-part1').then(m => m.hgUrbanChallengesPart1Data) },
      { title: 'Key Processes', loader: () => import('./hg-urban-challenges-part2').then(m => m.hgUrbanChallengesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./hg-urban-challenges-part3').then(m => m.hgUrbanChallengesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./hg-urban-challenges-part4').then(m => m.hgUrbanChallengesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./hg-urban-challenges-part5').then(m => m.hgUrbanChallengesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-urban-challenges-part6').then(m => m.hgUrbanChallengesPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-urban-challenges-part7').then(m => m.hgUrbanChallengesPart7Data) }
    ],
  },
  'hg-industrialization': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./hg-industrialization-part1').then(m => m.hgIndustrializationPart1Data) },
      { title: 'Key Processes', loader: () => import('./hg-industrialization-part2').then(m => m.hgIndustrializationPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./hg-industrialization-part3').then(m => m.hgIndustrializationPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./hg-industrialization-part4').then(m => m.hgIndustrializationPart4Data) },
      { title: 'Change Over Time', loader: () => import('./hg-industrialization-part5').then(m => m.hgIndustrializationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-industrialization-part6').then(m => m.hgIndustrializationPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-industrialization-part7').then(m => m.hgIndustrializationPart7Data) }
    ],
  },
  'hg-industrialization-development': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./hg-industrialization-part1').then(m => m.hgIndustrializationPart1Data) },
      { title: 'Key Processes', loader: () => import('./hg-industrialization-part2').then(m => m.hgIndustrializationPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./hg-industrialization-part3').then(m => m.hgIndustrializationPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./hg-industrialization-part4').then(m => m.hgIndustrializationPart4Data) },
      { title: 'Change Over Time', loader: () => import('./hg-industrialization-part5').then(m => m.hgIndustrializationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-industrialization-part6').then(m => m.hgIndustrializationPart6Data) },
      { title: 'AP Review', loader: () => import('./hg-industrialization-part7').then(m => m.hgIndustrializationPart7Data) }
    ],
  },
  'hg-globalization-trade': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./hg-globalization-trade-part1').then(m => m.hgGlobalizationTradePart1Data) },
      { title: 'Key Processes', loader: () => import('./hg-globalization-trade-part2').then(m => m.hgGlobalizationTradePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./hg-globalization-trade-part3').then(m => m.hgGlobalizationTradePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./hg-globalization-trade-part4').then(m => m.hgGlobalizationTradePart4Data) },
      { title: 'Change Over Time', loader: () => import('./hg-globalization-trade-part5').then(m => m.hgGlobalizationTradePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./hg-globalization-trade-part6').then(m => m.hgGlobalizationTradePart6Data) },
      { title: 'AP Review', loader: () => import('./hg-globalization-trade-part7').then(m => m.hgGlobalizationTradePart7Data) }
    ],
  },
  'gov-constitutional-foundations': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-constitutional-foundations-part1').then(m => m.govConstitutionalFoundationsPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-constitutional-foundations-part2').then(m => m.govConstitutionalFoundationsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-constitutional-foundations-part3').then(m => m.govConstitutionalFoundationsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-constitutional-foundations-part4').then(m => m.govConstitutionalFoundationsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-constitutional-foundations-part5').then(m => m.govConstitutionalFoundationsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-constitutional-foundations-part6').then(m => m.govConstitutionalFoundationsPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-constitutional-foundations-part7').then(m => m.govConstitutionalFoundationsPart7Data) }
    ],
  },
  'gov-federalism': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-federalism-part1').then(m => m.govFederalismPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-federalism-part2').then(m => m.govFederalismPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-federalism-part3').then(m => m.govFederalismPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-federalism-part4').then(m => m.govFederalismPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-federalism-part5').then(m => m.govFederalismPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-federalism-part6').then(m => m.govFederalismPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-federalism-part7').then(m => m.govFederalismPart7Data) }
    ],
  },
  'gov-separation-of-powers': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-separation-of-powers-part1').then(m => m.govSeparationOfPowersPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-separation-of-powers-part2').then(m => m.govSeparationOfPowersPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-separation-of-powers-part3').then(m => m.govSeparationOfPowersPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-separation-of-powers-part4').then(m => m.govSeparationOfPowersPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-separation-of-powers-part5').then(m => m.govSeparationOfPowersPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-separation-of-powers-part6').then(m => m.govSeparationOfPowersPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-separation-of-powers-part7').then(m => m.govSeparationOfPowersPart7Data) }
    ],
  },
  'gov-congress': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-congress-part1').then(m => m.govCongressPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-congress-part2').then(m => m.govCongressPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-congress-part3').then(m => m.govCongressPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-congress-part4').then(m => m.govCongressPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-congress-part5').then(m => m.govCongressPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-congress-part6').then(m => m.govCongressPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-congress-part7').then(m => m.govCongressPart7Data) }
    ],
  },
  'gov-presidency': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-presidency-part1').then(m => m.govPresidencyPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-presidency-part2').then(m => m.govPresidencyPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-presidency-part3').then(m => m.govPresidencyPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-presidency-part4').then(m => m.govPresidencyPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-presidency-part5').then(m => m.govPresidencyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-presidency-part6').then(m => m.govPresidencyPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-presidency-part7').then(m => m.govPresidencyPart7Data) }
    ],
  },
  'gov-judiciary': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-judiciary-part1').then(m => m.govJudiciaryPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-judiciary-part2').then(m => m.govJudiciaryPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-judiciary-part3').then(m => m.govJudiciaryPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-judiciary-part4').then(m => m.govJudiciaryPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-judiciary-part5').then(m => m.govJudiciaryPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-judiciary-part6').then(m => m.govJudiciaryPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-judiciary-part7').then(m => m.govJudiciaryPart7Data) }
    ],
  },
  'gov-bureaucracy': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-bureaucracy-part1').then(m => m.govBureaucracyPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-bureaucracy-part2').then(m => m.govBureaucracyPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-bureaucracy-part3').then(m => m.govBureaucracyPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-bureaucracy-part4').then(m => m.govBureaucracyPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-bureaucracy-part5').then(m => m.govBureaucracyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-bureaucracy-part6').then(m => m.govBureaucracyPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-bureaucracy-part7').then(m => m.govBureaucracyPart7Data) }
    ],
  },
  'gov-civil-liberties': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-civil-liberties-part1').then(m => m.govCivilLibertiesPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-civil-liberties-part2').then(m => m.govCivilLibertiesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-civil-liberties-part3').then(m => m.govCivilLibertiesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-civil-liberties-part4').then(m => m.govCivilLibertiesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-civil-liberties-part5').then(m => m.govCivilLibertiesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-civil-liberties-part6').then(m => m.govCivilLibertiesPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-civil-liberties-part7').then(m => m.govCivilLibertiesPart7Data) }
    ],
  },
  'gov-civil-rights': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-civil-rights-part1').then(m => m.govCivilRightsPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-civil-rights-part2').then(m => m.govCivilRightsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-civil-rights-part3').then(m => m.govCivilRightsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-civil-rights-part4').then(m => m.govCivilRightsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-civil-rights-part5').then(m => m.govCivilRightsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-civil-rights-part6').then(m => m.govCivilRightsPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-civil-rights-part7').then(m => m.govCivilRightsPart7Data) }
    ],
  },
  'gov-ideologies': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-ideologies-part1').then(m => m.govIdeologiesPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-ideologies-part2').then(m => m.govIdeologiesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-ideologies-part3').then(m => m.govIdeologiesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-ideologies-part4').then(m => m.govIdeologiesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-ideologies-part5').then(m => m.govIdeologiesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-ideologies-part6').then(m => m.govIdeologiesPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-ideologies-part7').then(m => m.govIdeologiesPart7Data) }
    ],
  },
  // Alias: DB topic uses slug 'gov-political-ideology' but content is the same as 'gov-ideologies'.
  'gov-political-ideology': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-ideologies-part1').then(m => m.govIdeologiesPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-ideologies-part2').then(m => m.govIdeologiesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-ideologies-part3').then(m => m.govIdeologiesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-ideologies-part4').then(m => m.govIdeologiesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-ideologies-part5').then(m => m.govIdeologiesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-ideologies-part6').then(m => m.govIdeologiesPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-ideologies-part7').then(m => m.govIdeologiesPart7Data) }
    ],
  },
  'gov-public-opinion': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-public-opinion-part1').then(m => m.govPublicOpinionPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-public-opinion-part2').then(m => m.govPublicOpinionPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-public-opinion-part3').then(m => m.govPublicOpinionPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-public-opinion-part4').then(m => m.govPublicOpinionPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-public-opinion-part5').then(m => m.govPublicOpinionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-public-opinion-part6').then(m => m.govPublicOpinionPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-public-opinion-part7').then(m => m.govPublicOpinionPart7Data) }
    ],
  },
  'gov-voting-elections': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-voting-elections-part1').then(m => m.govVotingElectionsPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-voting-elections-part2').then(m => m.govVotingElectionsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-voting-elections-part3').then(m => m.govVotingElectionsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-voting-elections-part4').then(m => m.govVotingElectionsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-voting-elections-part5').then(m => m.govVotingElectionsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-voting-elections-part6').then(m => m.govVotingElectionsPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-voting-elections-part7').then(m => m.govVotingElectionsPart7Data) }
    ],
  },
  'gov-parties-interest-groups': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-parties-interest-groups-part1').then(m => m.govPartiesInterestGroupsPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-parties-interest-groups-part2').then(m => m.govPartiesInterestGroupsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-parties-interest-groups-part3').then(m => m.govPartiesInterestGroupsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-parties-interest-groups-part4').then(m => m.govPartiesInterestGroupsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-parties-interest-groups-part5').then(m => m.govPartiesInterestGroupsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-parties-interest-groups-part6').then(m => m.govPartiesInterestGroupsPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-parties-interest-groups-part7').then(m => m.govPartiesInterestGroupsPart7Data) }
    ],
  },
  'gov-media-technology': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./gov-media-technology-part1').then(m => m.govMediaTechnologyPart1Data) },
      { title: 'Key Processes', loader: () => import('./gov-media-technology-part2').then(m => m.govMediaTechnologyPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./gov-media-technology-part3').then(m => m.govMediaTechnologyPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./gov-media-technology-part4').then(m => m.govMediaTechnologyPart4Data) },
      { title: 'Change Over Time', loader: () => import('./gov-media-technology-part5').then(m => m.govMediaTechnologyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./gov-media-technology-part6').then(m => m.govMediaTechnologyPart6Data) },
      { title: 'AP Review', loader: () => import('./gov-media-technology-part7').then(m => m.govMediaTechnologyPart7Data) }
    ],
  },
  'wh-global-tapestry': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-global-tapestry-part1').then(m => m.whGlobalTapestryPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-global-tapestry-part2').then(m => m.whGlobalTapestryPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-global-tapestry-part3').then(m => m.whGlobalTapestryPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-global-tapestry-part4').then(m => m.whGlobalTapestryPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-global-tapestry-part5').then(m => m.whGlobalTapestryPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-global-tapestry-part6').then(m => m.whGlobalTapestryPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-global-tapestry-part7').then(m => m.whGlobalTapestryPart7Data) }
    ],
  },
  'wh-developments-east-asia': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-developments-east-asia-part1').then(m => m.whDevelopmentsEastAsiaPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-developments-east-asia-part2').then(m => m.whDevelopmentsEastAsiaPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-developments-east-asia-part3').then(m => m.whDevelopmentsEastAsiaPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-developments-east-asia-part4').then(m => m.whDevelopmentsEastAsiaPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-developments-east-asia-part5').then(m => m.whDevelopmentsEastAsiaPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-developments-east-asia-part6').then(m => m.whDevelopmentsEastAsiaPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-developments-east-asia-part7').then(m => m.whDevelopmentsEastAsiaPart7Data) }
    ],
  },
  'wh-dar-al-islam': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-dar-al-islam-part1').then(m => m.whDarAlIslamPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-dar-al-islam-part2').then(m => m.whDarAlIslamPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-dar-al-islam-part3').then(m => m.whDarAlIslamPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-dar-al-islam-part4').then(m => m.whDarAlIslamPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-dar-al-islam-part5').then(m => m.whDarAlIslamPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-dar-al-islam-part6').then(m => m.whDarAlIslamPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-dar-al-islam-part7').then(m => m.whDarAlIslamPart7Data) }
    ],
  },
  'wh-silk-roads-mongols': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-silk-roads-mongols-part1').then(m => m.whSilkRoadsMongolsPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-silk-roads-mongols-part2').then(m => m.whSilkRoadsMongolsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-silk-roads-mongols-part3').then(m => m.whSilkRoadsMongolsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-silk-roads-mongols-part4').then(m => m.whSilkRoadsMongolsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-silk-roads-mongols-part5').then(m => m.whSilkRoadsMongolsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-silk-roads-mongols-part6').then(m => m.whSilkRoadsMongolsPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-silk-roads-mongols-part7').then(m => m.whSilkRoadsMongolsPart7Data) }
    ],
  },
  'wh-indian-ocean-trade': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-indian-ocean-trade-part1').then(m => m.whIndianOceanTradePart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-indian-ocean-trade-part2').then(m => m.whIndianOceanTradePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-indian-ocean-trade-part3').then(m => m.whIndianOceanTradePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-indian-ocean-trade-part4').then(m => m.whIndianOceanTradePart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-indian-ocean-trade-part5').then(m => m.whIndianOceanTradePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-indian-ocean-trade-part6').then(m => m.whIndianOceanTradePart6Data) },
      { title: 'AP Review', loader: () => import('./wh-indian-ocean-trade-part7').then(m => m.whIndianOceanTradePart7Data) }
    ],
  },
  'wh-americas-africa-1200': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-americas-africa-1200-part1').then(m => m.whAmericasAfrica1200Part1Data) },
      { title: 'Key Processes', loader: () => import('./wh-americas-africa-1200-part2').then(m => m.whAmericasAfrica1200Part2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-americas-africa-1200-part3').then(m => m.whAmericasAfrica1200Part3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-americas-africa-1200-part4').then(m => m.whAmericasAfrica1200Part4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-americas-africa-1200-part5').then(m => m.whAmericasAfrica1200Part5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-americas-africa-1200-part6').then(m => m.whAmericasAfrica1200Part6Data) },
      { title: 'AP Review', loader: () => import('./wh-americas-africa-1200-part7').then(m => m.whAmericasAfrica1200Part7Data) }
    ],
  },
  'wh-land-based-empires': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-land-based-empires-part1').then(m => m.whLandBasedEmpiresPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-land-based-empires-part2').then(m => m.whLandBasedEmpiresPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-land-based-empires-part3').then(m => m.whLandBasedEmpiresPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-land-based-empires-part4').then(m => m.whLandBasedEmpiresPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-land-based-empires-part5').then(m => m.whLandBasedEmpiresPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-land-based-empires-part6').then(m => m.whLandBasedEmpiresPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-land-based-empires-part7').then(m => m.whLandBasedEmpiresPart7Data) }
    ],
  },
  'wh-islamic-empires': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-islamic-empires-part1').then(m => m.whIslamicEmpiresPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-islamic-empires-part2').then(m => m.whIslamicEmpiresPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-islamic-empires-part3').then(m => m.whIslamicEmpiresPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-islamic-empires-part4').then(m => m.whIslamicEmpiresPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-islamic-empires-part5').then(m => m.whIslamicEmpiresPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-islamic-empires-part6').then(m => m.whIslamicEmpiresPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-islamic-empires-part7').then(m => m.whIslamicEmpiresPart7Data) }
    ],
  },
  'wh-east-asian-empires': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-east-asian-empires-part1').then(m => m.whEastAsianEmpiresPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-east-asian-empires-part2').then(m => m.whEastAsianEmpiresPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-east-asian-empires-part3').then(m => m.whEastAsianEmpiresPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-east-asian-empires-part4').then(m => m.whEastAsianEmpiresPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-east-asian-empires-part5').then(m => m.whEastAsianEmpiresPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-east-asian-empires-part6').then(m => m.whEastAsianEmpiresPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-east-asian-empires-part7').then(m => m.whEastAsianEmpiresPart7Data) }
    ],
  },
  'wh-exploration-columbian-exchange': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-exploration-columbian-exchange-part1').then(m => m.whExplorationColumbianExchangePart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-exploration-columbian-exchange-part2').then(m => m.whExplorationColumbianExchangePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-exploration-columbian-exchange-part3').then(m => m.whExplorationColumbianExchangePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-exploration-columbian-exchange-part4').then(m => m.whExplorationColumbianExchangePart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-exploration-columbian-exchange-part5').then(m => m.whExplorationColumbianExchangePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-exploration-columbian-exchange-part6').then(m => m.whExplorationColumbianExchangePart6Data) },
      { title: 'AP Review', loader: () => import('./wh-exploration-columbian-exchange-part7').then(m => m.whExplorationColumbianExchangePart7Data) }
    ],
  },
  'wh-maritime-empires-labor': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-maritime-empires-labor-part1').then(m => m.whMaritimeEmpiresLaborPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-maritime-empires-labor-part2').then(m => m.whMaritimeEmpiresLaborPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-maritime-empires-labor-part3').then(m => m.whMaritimeEmpiresLaborPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-maritime-empires-labor-part4').then(m => m.whMaritimeEmpiresLaborPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-maritime-empires-labor-part5').then(m => m.whMaritimeEmpiresLaborPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-maritime-empires-labor-part6').then(m => m.whMaritimeEmpiresLaborPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-maritime-empires-labor-part7').then(m => m.whMaritimeEmpiresLaborPart7Data) }
    ],
  },
  'wh-transoceanic': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-transoceanic-part1').then(m => m.whTransoceanicPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-transoceanic-part2').then(m => m.whTransoceanicPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-transoceanic-part3').then(m => m.whTransoceanicPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-transoceanic-part4').then(m => m.whTransoceanicPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-transoceanic-part5').then(m => m.whTransoceanicPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-transoceanic-part6').then(m => m.whTransoceanicPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-transoceanic-part7').then(m => m.whTransoceanicPart7Data) }
    ],
  },
  'wh-enlightenment-political-revolutions': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-enlightenment-political-revolutions-part1').then(m => m.whEnlightenmentPoliticalRevolutionsPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-enlightenment-political-revolutions-part2').then(m => m.whEnlightenmentPoliticalRevolutionsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-enlightenment-political-revolutions-part3').then(m => m.whEnlightenmentPoliticalRevolutionsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-enlightenment-political-revolutions-part4').then(m => m.whEnlightenmentPoliticalRevolutionsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-enlightenment-political-revolutions-part5').then(m => m.whEnlightenmentPoliticalRevolutionsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-enlightenment-political-revolutions-part6').then(m => m.whEnlightenmentPoliticalRevolutionsPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-enlightenment-political-revolutions-part7').then(m => m.whEnlightenmentPoliticalRevolutionsPart7Data) }
    ],
  },
  'wh-industrial-revolution': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-industrial-revolution-part1').then(m => m.whIndustrialRevolutionPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-industrial-revolution-part2').then(m => m.whIndustrialRevolutionPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-industrial-revolution-part3').then(m => m.whIndustrialRevolutionPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-industrial-revolution-part4').then(m => m.whIndustrialRevolutionPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-industrial-revolution-part5').then(m => m.whIndustrialRevolutionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-industrial-revolution-part6').then(m => m.whIndustrialRevolutionPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-industrial-revolution-part7').then(m => m.whIndustrialRevolutionPart7Data) }
    ],
  },
  'wh-revolutions': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-revolutions-part1').then(m => m.whRevolutionsPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-revolutions-part2').then(m => m.whRevolutionsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-revolutions-part3').then(m => m.whRevolutionsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-revolutions-part4').then(m => m.whRevolutionsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-revolutions-part5').then(m => m.whRevolutionsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-revolutions-part6').then(m => m.whRevolutionsPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-revolutions-part7').then(m => m.whRevolutionsPart7Data) }
    ],
  },
  'wh-consequences-industrialization': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-consequences-industrialization-part1').then(m => m.whConsequencesIndustrializationPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-consequences-industrialization-part2').then(m => m.whConsequencesIndustrializationPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-consequences-industrialization-part3').then(m => m.whConsequencesIndustrializationPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-consequences-industrialization-part4').then(m => m.whConsequencesIndustrializationPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-consequences-industrialization-part5').then(m => m.whConsequencesIndustrializationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-consequences-industrialization-part6').then(m => m.whConsequencesIndustrializationPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-consequences-industrialization-part7').then(m => m.whConsequencesIndustrializationPart7Data) }
    ],
  },
  'wh-imperialism': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-imperialism-part1').then(m => m.whImperialismPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-imperialism-part2').then(m => m.whImperialismPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-imperialism-part3').then(m => m.whImperialismPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-imperialism-part4').then(m => m.whImperialismPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-imperialism-part5').then(m => m.whImperialismPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-imperialism-part6').then(m => m.whImperialismPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-imperialism-part7').then(m => m.whImperialismPart7Data) }
    ],
  },
  'wh-reform-migration': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-reform-migration-part1').then(m => m.whReformMigrationPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-reform-migration-part2').then(m => m.whReformMigrationPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-reform-migration-part3').then(m => m.whReformMigrationPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-reform-migration-part4').then(m => m.whReformMigrationPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-reform-migration-part5').then(m => m.whReformMigrationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-reform-migration-part6').then(m => m.whReformMigrationPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-reform-migration-part7').then(m => m.whReformMigrationPart7Data) }
    ],
  },
  'wh-world-wars': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-world-wars-part1').then(m => m.whWorldWarsPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-world-wars-part2').then(m => m.whWorldWarsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-world-wars-part3').then(m => m.whWorldWarsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-world-wars-part4').then(m => m.whWorldWarsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-world-wars-part5').then(m => m.whWorldWarsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-world-wars-part6').then(m => m.whWorldWarsPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-world-wars-part7').then(m => m.whWorldWarsPart7Data) }
    ],
  },
  'wh-mass-atrocities': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-mass-atrocities-part1').then(m => m.whMassAtrocitiesPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-mass-atrocities-part2').then(m => m.whMassAtrocitiesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-mass-atrocities-part3').then(m => m.whMassAtrocitiesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-mass-atrocities-part4').then(m => m.whMassAtrocitiesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-mass-atrocities-part5').then(m => m.whMassAtrocitiesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-mass-atrocities-part6').then(m => m.whMassAtrocitiesPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-mass-atrocities-part7').then(m => m.whMassAtrocitiesPart7Data) }
    ],
  },
  'wh-cold-war-decolonization': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-cold-war-decolonization-part1').then(m => m.whColdWarDecolonizationPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-cold-war-decolonization-part2').then(m => m.whColdWarDecolonizationPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-cold-war-decolonization-part3').then(m => m.whColdWarDecolonizationPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-cold-war-decolonization-part4').then(m => m.whColdWarDecolonizationPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-cold-war-decolonization-part5').then(m => m.whColdWarDecolonizationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-cold-war-decolonization-part6').then(m => m.whColdWarDecolonizationPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-cold-war-decolonization-part7').then(m => m.whColdWarDecolonizationPart7Data) }
    ],
  },
  'wh-newly-independent-states': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-newly-independent-states-part1').then(m => m.whNewlyIndependentStatesPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-newly-independent-states-part2').then(m => m.whNewlyIndependentStatesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-newly-independent-states-part3').then(m => m.whNewlyIndependentStatesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-newly-independent-states-part4').then(m => m.whNewlyIndependentStatesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-newly-independent-states-part5').then(m => m.whNewlyIndependentStatesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-newly-independent-states-part6').then(m => m.whNewlyIndependentStatesPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-newly-independent-states-part7').then(m => m.whNewlyIndependentStatesPart7Data) }
    ],
  },
  'wh-globalization-tech': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-globalization-tech-part1').then(m => m.whGlobalizationTechPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-globalization-tech-part2').then(m => m.whGlobalizationTechPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-globalization-tech-part3').then(m => m.whGlobalizationTechPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-globalization-tech-part4').then(m => m.whGlobalizationTechPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-globalization-tech-part5').then(m => m.whGlobalizationTechPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-globalization-tech-part6').then(m => m.whGlobalizationTechPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-globalization-tech-part7').then(m => m.whGlobalizationTechPart7Data) }
    ],
  },
  'wh-challenges-21st-century': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./wh-challenges-21st-century-part1').then(m => m.whChallenges21stCenturyPart1Data) },
      { title: 'Key Processes', loader: () => import('./wh-challenges-21st-century-part2').then(m => m.whChallenges21stCenturyPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./wh-challenges-21st-century-part3').then(m => m.whChallenges21stCenturyPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./wh-challenges-21st-century-part4').then(m => m.whChallenges21stCenturyPart4Data) },
      { title: 'Change Over Time', loader: () => import('./wh-challenges-21st-century-part5').then(m => m.whChallenges21stCenturyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./wh-challenges-21st-century-part6').then(m => m.whChallenges21stCenturyPart6Data) },
      { title: 'AP Review', loader: () => import('./wh-challenges-21st-century-part7').then(m => m.whChallenges21stCenturyPart7Data) }
    ],
  },
  'apush-native-societies-exploration': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apush-native-societies-exploration-part1').then(m => m.apushNativeSocietiesExplorationPart1Data) },
      { title: 'Key Processes', loader: () => import('./apush-native-societies-exploration-part2').then(m => m.apushNativeSocietiesExplorationPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apush-native-societies-exploration-part3').then(m => m.apushNativeSocietiesExplorationPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apush-native-societies-exploration-part4').then(m => m.apushNativeSocietiesExplorationPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apush-native-societies-exploration-part5').then(m => m.apushNativeSocietiesExplorationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apush-native-societies-exploration-part6').then(m => m.apushNativeSocietiesExplorationPart6Data) },
      { title: 'AP Review', loader: () => import('./apush-native-societies-exploration-part7').then(m => m.apushNativeSocietiesExplorationPart7Data) }
    ],
  },
  'apush-colonial-america': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apush-colonial-america-part1').then(m => m.apushColonialAmericaPart1Data) },
      { title: 'Key Processes', loader: () => import('./apush-colonial-america-part2').then(m => m.apushColonialAmericaPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apush-colonial-america-part3').then(m => m.apushColonialAmericaPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apush-colonial-america-part4').then(m => m.apushColonialAmericaPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apush-colonial-america-part5').then(m => m.apushColonialAmericaPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apush-colonial-america-part6').then(m => m.apushColonialAmericaPart6Data) },
      { title: 'AP Review', loader: () => import('./apush-colonial-america-part7').then(m => m.apushColonialAmericaPart7Data) }
    ],
  },
  'apush-colonial-society-conflicts': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apush-colonial-society-conflicts-part1').then(m => m.apushColonialSocietyConflictsPart1Data) },
      { title: 'Key Processes', loader: () => import('./apush-colonial-society-conflicts-part2').then(m => m.apushColonialSocietyConflictsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apush-colonial-society-conflicts-part3').then(m => m.apushColonialSocietyConflictsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apush-colonial-society-conflicts-part4').then(m => m.apushColonialSocietyConflictsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apush-colonial-society-conflicts-part5').then(m => m.apushColonialSocietyConflictsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apush-colonial-society-conflicts-part6').then(m => m.apushColonialSocietyConflictsPart6Data) },
      { title: 'AP Review', loader: () => import('./apush-colonial-society-conflicts-part7').then(m => m.apushColonialSocietyConflictsPart7Data) }
    ],
  },
  'apush-revolution-independence': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apush-revolution-independence-part1').then(m => m.apushRevolutionIndependencePart1Data) },
      { title: 'Key Processes', loader: () => import('./apush-revolution-independence-part2').then(m => m.apushRevolutionIndependencePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apush-revolution-independence-part3').then(m => m.apushRevolutionIndependencePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apush-revolution-independence-part4').then(m => m.apushRevolutionIndependencePart4Data) },
      { title: 'Change Over Time', loader: () => import('./apush-revolution-independence-part5').then(m => m.apushRevolutionIndependencePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apush-revolution-independence-part6').then(m => m.apushRevolutionIndependencePart6Data) },
      { title: 'AP Review', loader: () => import('./apush-revolution-independence-part7').then(m => m.apushRevolutionIndependencePart7Data) }
    ],
  },
  'apush-constitution-early-republic': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apush-constitution-early-republic-part1').then(m => m.apushConstitutionEarlyRepublicPart1Data) },
      { title: 'Key Processes', loader: () => import('./apush-constitution-early-republic-part2').then(m => m.apushConstitutionEarlyRepublicPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apush-constitution-early-republic-part3').then(m => m.apushConstitutionEarlyRepublicPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apush-constitution-early-republic-part4').then(m => m.apushConstitutionEarlyRepublicPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apush-constitution-early-republic-part5').then(m => m.apushConstitutionEarlyRepublicPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apush-constitution-early-republic-part6').then(m => m.apushConstitutionEarlyRepublicPart6Data) },
      { title: 'AP Review', loader: () => import('./apush-constitution-early-republic-part7').then(m => m.apushConstitutionEarlyRepublicPart7Data) }
    ],
  },
  'apush-democracy-expansion': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apush-democracy-expansion-part1').then(m => m.apushDemocracyExpansionPart1Data) },
      { title: 'Key Processes', loader: () => import('./apush-democracy-expansion-part2').then(m => m.apushDemocracyExpansionPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apush-democracy-expansion-part3').then(m => m.apushDemocracyExpansionPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apush-democracy-expansion-part4').then(m => m.apushDemocracyExpansionPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apush-democracy-expansion-part5').then(m => m.apushDemocracyExpansionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apush-democracy-expansion-part6').then(m => m.apushDemocracyExpansionPart6Data) },
      { title: 'AP Review', loader: () => import('./apush-democracy-expansion-part7').then(m => m.apushDemocracyExpansionPart7Data) }
    ],
  },
  'apush-reform-movements': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apush-reform-movements-part1').then(m => m.apushReformMovementsPart1Data) },
      { title: 'Key Processes', loader: () => import('./apush-reform-movements-part2').then(m => m.apushReformMovementsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apush-reform-movements-part3').then(m => m.apushReformMovementsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apush-reform-movements-part4').then(m => m.apushReformMovementsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apush-reform-movements-part5').then(m => m.apushReformMovementsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apush-reform-movements-part6').then(m => m.apushReformMovementsPart6Data) },
      { title: 'AP Review', loader: () => import('./apush-reform-movements-part7').then(m => m.apushReformMovementsPart7Data) }
    ],
  },
  'apush-civil-war': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apush-civil-war-part1').then(m => m.apushCivilWarPart1Data) },
      { title: 'Key Processes', loader: () => import('./apush-civil-war-part2').then(m => m.apushCivilWarPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apush-civil-war-part3').then(m => m.apushCivilWarPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apush-civil-war-part4').then(m => m.apushCivilWarPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apush-civil-war-part5').then(m => m.apushCivilWarPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apush-civil-war-part6').then(m => m.apushCivilWarPart6Data) },
      { title: 'AP Review', loader: () => import('./apush-civil-war-part7').then(m => m.apushCivilWarPart7Data) }
    ],
  },
  'apush-reconstruction': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apush-reconstruction-part1').then(m => m.apushReconstructionPart1Data) },
      { title: 'Key Processes', loader: () => import('./apush-reconstruction-part2').then(m => m.apushReconstructionPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apush-reconstruction-part3').then(m => m.apushReconstructionPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apush-reconstruction-part4').then(m => m.apushReconstructionPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apush-reconstruction-part5').then(m => m.apushReconstructionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apush-reconstruction-part6').then(m => m.apushReconstructionPart6Data) },
      { title: 'AP Review', loader: () => import('./apush-reconstruction-part7').then(m => m.apushReconstructionPart7Data) }
    ],
  },
  'apush-gilded-age': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apush-gilded-age-part1').then(m => m.apushGildedAgePart1Data) },
      { title: 'Key Processes', loader: () => import('./apush-gilded-age-part2').then(m => m.apushGildedAgePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apush-gilded-age-part3').then(m => m.apushGildedAgePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apush-gilded-age-part4').then(m => m.apushGildedAgePart4Data) },
      { title: 'Change Over Time', loader: () => import('./apush-gilded-age-part5').then(m => m.apushGildedAgePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apush-gilded-age-part6').then(m => m.apushGildedAgePart6Data) },
      { title: 'AP Review', loader: () => import('./apush-gilded-age-part7').then(m => m.apushGildedAgePart7Data) }
    ],
  },
  'apush-progressivism-wwi': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apush-progressivism-wwi-part1').then(m => m.apushProgressivismWwiPart1Data) },
      { title: 'Key Processes', loader: () => import('./apush-progressivism-wwi-part2').then(m => m.apushProgressivismWwiPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apush-progressivism-wwi-part3').then(m => m.apushProgressivismWwiPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apush-progressivism-wwi-part4').then(m => m.apushProgressivismWwiPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apush-progressivism-wwi-part5').then(m => m.apushProgressivismWwiPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apush-progressivism-wwi-part6').then(m => m.apushProgressivismWwiPart6Data) },
      { title: 'AP Review', loader: () => import('./apush-progressivism-wwi-part7').then(m => m.apushProgressivismWwiPart7Data) }
    ],
  },
  'apush-depression-wwii': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apush-depression-wwii-part1').then(m => m.apushDepressionWwiiPart1Data) },
      { title: 'Key Processes', loader: () => import('./apush-depression-wwii-part2').then(m => m.apushDepressionWwiiPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apush-depression-wwii-part3').then(m => m.apushDepressionWwiiPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apush-depression-wwii-part4').then(m => m.apushDepressionWwiiPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apush-depression-wwii-part5').then(m => m.apushDepressionWwiiPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apush-depression-wwii-part6').then(m => m.apushDepressionWwiiPart6Data) },
      { title: 'AP Review', loader: () => import('./apush-depression-wwii-part7').then(m => m.apushDepressionWwiiPart7Data) }
    ],
  },
  'macro-scarcity-opportunity-cost': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./macro-scarcity-opportunity-cost-part1').then(m => m.macroScarcityOpportunityCostPart1Data) },
      { title: 'Key Processes', loader: () => import('./macro-scarcity-opportunity-cost-part2').then(m => m.macroScarcityOpportunityCostPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./macro-scarcity-opportunity-cost-part3').then(m => m.macroScarcityOpportunityCostPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./macro-scarcity-opportunity-cost-part4').then(m => m.macroScarcityOpportunityCostPart4Data) },
      { title: 'Change Over Time', loader: () => import('./macro-scarcity-opportunity-cost-part5').then(m => m.macroScarcityOpportunityCostPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./macro-scarcity-opportunity-cost-part6').then(m => m.macroScarcityOpportunityCostPart6Data) },
      { title: 'AP Review', loader: () => import('./macro-scarcity-opportunity-cost-part7').then(m => m.macroScarcityOpportunityCostPart7Data) }
    ],
  },
  'macro-comparative-advantage': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./macro-comparative-advantage-part1').then(m => m.macroComparativeAdvantagePart1Data) },
      { title: 'Key Processes', loader: () => import('./macro-comparative-advantage-part2').then(m => m.macroComparativeAdvantagePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./macro-comparative-advantage-part3').then(m => m.macroComparativeAdvantagePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./macro-comparative-advantage-part4').then(m => m.macroComparativeAdvantagePart4Data) },
      { title: 'Change Over Time', loader: () => import('./macro-comparative-advantage-part5').then(m => m.macroComparativeAdvantagePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./macro-comparative-advantage-part6').then(m => m.macroComparativeAdvantagePart6Data) },
      { title: 'AP Review', loader: () => import('./macro-comparative-advantage-part7').then(m => m.macroComparativeAdvantagePart7Data) }
    ],
  },
  'macro-gdp-growth': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./macro-gdp-growth-part1').then(m => m.macroGdpGrowthPart1Data) },
      { title: 'Key Processes', loader: () => import('./macro-gdp-growth-part2').then(m => m.macroGdpGrowthPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./macro-gdp-growth-part3').then(m => m.macroGdpGrowthPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./macro-gdp-growth-part4').then(m => m.macroGdpGrowthPart4Data) },
      { title: 'Change Over Time', loader: () => import('./macro-gdp-growth-part5').then(m => m.macroGdpGrowthPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./macro-gdp-growth-part6').then(m => m.macroGdpGrowthPart6Data) },
      { title: 'AP Review', loader: () => import('./macro-gdp-growth-part7').then(m => m.macroGdpGrowthPart7Data) }
    ],
  },
  'macro-unemployment-inflation': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./macro-unemployment-inflation-part1').then(m => m.macroUnemploymentInflationPart1Data) },
      { title: 'Key Processes', loader: () => import('./macro-unemployment-inflation-part2').then(m => m.macroUnemploymentInflationPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./macro-unemployment-inflation-part3').then(m => m.macroUnemploymentInflationPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./macro-unemployment-inflation-part4').then(m => m.macroUnemploymentInflationPart4Data) },
      { title: 'Change Over Time', loader: () => import('./macro-unemployment-inflation-part5').then(m => m.macroUnemploymentInflationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./macro-unemployment-inflation-part6').then(m => m.macroUnemploymentInflationPart6Data) },
      { title: 'AP Review', loader: () => import('./macro-unemployment-inflation-part7').then(m => m.macroUnemploymentInflationPart7Data) }
    ],
  },
  'macro-ad-as': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./macro-ad-as-part1').then(m => m.macroAdAsPart1Data) },
      { title: 'Key Processes', loader: () => import('./macro-ad-as-part2').then(m => m.macroAdAsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./macro-ad-as-part3').then(m => m.macroAdAsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./macro-ad-as-part4').then(m => m.macroAdAsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./macro-ad-as-part5').then(m => m.macroAdAsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./macro-ad-as-part6').then(m => m.macroAdAsPart6Data) },
      { title: 'AP Review', loader: () => import('./macro-ad-as-part7').then(m => m.macroAdAsPart7Data) }
    ],
  },
  'macro-multiplier-effect': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./macro-multiplier-effect-part1').then(m => m.macroMultiplierEffectPart1Data) },
      { title: 'Key Processes', loader: () => import('./macro-multiplier-effect-part2').then(m => m.macroMultiplierEffectPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./macro-multiplier-effect-part3').then(m => m.macroMultiplierEffectPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./macro-multiplier-effect-part4').then(m => m.macroMultiplierEffectPart4Data) },
      { title: 'Change Over Time', loader: () => import('./macro-multiplier-effect-part5').then(m => m.macroMultiplierEffectPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./macro-multiplier-effect-part6').then(m => m.macroMultiplierEffectPart6Data) },
      { title: 'AP Review', loader: () => import('./macro-multiplier-effect-part7').then(m => m.macroMultiplierEffectPart7Data) }
    ],
  },
  'macro-phillips-curve': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./macro-phillips-curve-part1').then(m => m.macroPhillipsCurvePart1Data) },
      { title: 'Key Processes', loader: () => import('./macro-phillips-curve-part2').then(m => m.macroPhillipsCurvePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./macro-phillips-curve-part3').then(m => m.macroPhillipsCurvePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./macro-phillips-curve-part4').then(m => m.macroPhillipsCurvePart4Data) },
      { title: 'Change Over Time', loader: () => import('./macro-phillips-curve-part5').then(m => m.macroPhillipsCurvePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./macro-phillips-curve-part6').then(m => m.macroPhillipsCurvePart6Data) },
      { title: 'AP Review', loader: () => import('./macro-phillips-curve-part7').then(m => m.macroPhillipsCurvePart7Data) }
    ],
  },
  'macro-money-banking': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./macro-money-banking-part1').then(m => m.macroMoneyBankingPart1Data) },
      { title: 'Key Processes', loader: () => import('./macro-money-banking-part2').then(m => m.macroMoneyBankingPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./macro-money-banking-part3').then(m => m.macroMoneyBankingPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./macro-money-banking-part4').then(m => m.macroMoneyBankingPart4Data) },
      { title: 'Change Over Time', loader: () => import('./macro-money-banking-part5').then(m => m.macroMoneyBankingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./macro-money-banking-part6').then(m => m.macroMoneyBankingPart6Data) },
      { title: 'AP Review', loader: () => import('./macro-money-banking-part7').then(m => m.macroMoneyBankingPart7Data) }
    ],
  },
  'macro-monetary-policy': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./macro-monetary-policy-part1').then(m => m.macroMonetaryPolicyPart1Data) },
      { title: 'Key Processes', loader: () => import('./macro-monetary-policy-part2').then(m => m.macroMonetaryPolicyPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./macro-monetary-policy-part3').then(m => m.macroMonetaryPolicyPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./macro-monetary-policy-part4').then(m => m.macroMonetaryPolicyPart4Data) },
      { title: 'Change Over Time', loader: () => import('./macro-monetary-policy-part5').then(m => m.macroMonetaryPolicyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./macro-monetary-policy-part6').then(m => m.macroMonetaryPolicyPart6Data) },
      { title: 'AP Review', loader: () => import('./macro-monetary-policy-part7').then(m => m.macroMonetaryPolicyPart7Data) }
    ],
  },
  'macro-fiscal-policy': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./macro-fiscal-policy-part1').then(m => m.macroFiscalPolicyPart1Data) },
      { title: 'Key Processes', loader: () => import('./macro-fiscal-policy-part2').then(m => m.macroFiscalPolicyPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./macro-fiscal-policy-part3').then(m => m.macroFiscalPolicyPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./macro-fiscal-policy-part4').then(m => m.macroFiscalPolicyPart4Data) },
      { title: 'Change Over Time', loader: () => import('./macro-fiscal-policy-part5').then(m => m.macroFiscalPolicyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./macro-fiscal-policy-part6').then(m => m.macroFiscalPolicyPart6Data) },
      { title: 'AP Review', loader: () => import('./macro-fiscal-policy-part7').then(m => m.macroFiscalPolicyPart7Data) }
    ],
  },
  'macro-fiscal-policy-tools': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./macro-fiscal-policy-tools-part1').then(m => m.macroFiscalPolicyToolsPart1Data) },
      { title: 'Key Processes', loader: () => import('./macro-fiscal-policy-tools-part2').then(m => m.macroFiscalPolicyToolsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./macro-fiscal-policy-tools-part3').then(m => m.macroFiscalPolicyToolsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./macro-fiscal-policy-tools-part4').then(m => m.macroFiscalPolicyToolsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./macro-fiscal-policy-tools-part5').then(m => m.macroFiscalPolicyToolsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./macro-fiscal-policy-tools-part6').then(m => m.macroFiscalPolicyToolsPart6Data) },
      { title: 'AP Review', loader: () => import('./macro-fiscal-policy-tools-part7').then(m => m.macroFiscalPolicyToolsPart7Data) }
    ],
  },
  'macro-open-economy': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./macro-open-economy-part1').then(m => m.macroOpenEconomyPart1Data) },
      { title: 'Key Processes', loader: () => import('./macro-open-economy-part2').then(m => m.macroOpenEconomyPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./macro-open-economy-part3').then(m => m.macroOpenEconomyPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./macro-open-economy-part4').then(m => m.macroOpenEconomyPart4Data) },
      { title: 'Change Over Time', loader: () => import('./macro-open-economy-part5').then(m => m.macroOpenEconomyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./macro-open-economy-part6').then(m => m.macroOpenEconomyPart6Data) },
      { title: 'AP Review', loader: () => import('./macro-open-economy-part7').then(m => m.macroOpenEconomyPart7Data) }
    ],
  },
  'macro-international-trade-finance': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./macro-international-trade-finance-part1').then(m => m.macroInternationalTradeFinancePart1Data) },
      { title: 'Key Processes', loader: () => import('./macro-international-trade-finance-part2').then(m => m.macroInternationalTradeFinancePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./macro-international-trade-finance-part3').then(m => m.macroInternationalTradeFinancePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./macro-international-trade-finance-part4').then(m => m.macroInternationalTradeFinancePart4Data) },
      { title: 'Change Over Time', loader: () => import('./macro-international-trade-finance-part5').then(m => m.macroInternationalTradeFinancePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./macro-international-trade-finance-part6').then(m => m.macroInternationalTradeFinancePart6Data) },
      { title: 'AP Review', loader: () => import('./macro-international-trade-finance-part7').then(m => m.macroInternationalTradeFinancePart7Data) }
    ],
  },
  'micro-scarcity-marginal-analysis': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./micro-scarcity-marginal-analysis-part1').then(m => m.microScarcityMarginalAnalysisPart1Data) },
      { title: 'Key Processes', loader: () => import('./micro-scarcity-marginal-analysis-part2').then(m => m.microScarcityMarginalAnalysisPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./micro-scarcity-marginal-analysis-part3').then(m => m.microScarcityMarginalAnalysisPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./micro-scarcity-marginal-analysis-part4').then(m => m.microScarcityMarginalAnalysisPart4Data) },
      { title: 'Change Over Time', loader: () => import('./micro-scarcity-marginal-analysis-part5').then(m => m.microScarcityMarginalAnalysisPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./micro-scarcity-marginal-analysis-part6').then(m => m.microScarcityMarginalAnalysisPart6Data) },
      { title: 'AP Review', loader: () => import('./micro-scarcity-marginal-analysis-part7').then(m => m.microScarcityMarginalAnalysisPart7Data) }
    ],
  },
  'micro-supply-demand': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./micro-supply-demand-part1').then(m => m.microSupplyDemandPart1Data) },
      { title: 'Key Processes', loader: () => import('./micro-supply-demand-part2').then(m => m.microSupplyDemandPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./micro-supply-demand-part3').then(m => m.microSupplyDemandPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./micro-supply-demand-part4').then(m => m.microSupplyDemandPart4Data) },
      { title: 'Change Over Time', loader: () => import('./micro-supply-demand-part5').then(m => m.microSupplyDemandPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./micro-supply-demand-part6').then(m => m.microSupplyDemandPart6Data) },
      { title: 'AP Review', loader: () => import('./micro-supply-demand-part7').then(m => m.microSupplyDemandPart7Data) }
    ],
  },
  'micro-demand-supply-equilibrium': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./micro-demand-supply-equilibrium-part1').then(m => m.microDemandSupplyEquilibriumPart1Data) },
      { title: 'Key Processes', loader: () => import('./micro-demand-supply-equilibrium-part2').then(m => m.microDemandSupplyEquilibriumPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./micro-demand-supply-equilibrium-part3').then(m => m.microDemandSupplyEquilibriumPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./micro-demand-supply-equilibrium-part4').then(m => m.microDemandSupplyEquilibriumPart4Data) },
      { title: 'Change Over Time', loader: () => import('./micro-demand-supply-equilibrium-part5').then(m => m.microDemandSupplyEquilibriumPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./micro-demand-supply-equilibrium-part6').then(m => m.microDemandSupplyEquilibriumPart6Data) },
      { title: 'AP Review', loader: () => import('./micro-demand-supply-equilibrium-part7').then(m => m.microDemandSupplyEquilibriumPart7Data) }
    ],
  },
  'micro-elasticity': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./micro-elasticity-part1').then(m => m.microElasticityPart1Data) },
      { title: 'Key Processes', loader: () => import('./micro-elasticity-part2').then(m => m.microElasticityPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./micro-elasticity-part3').then(m => m.microElasticityPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./micro-elasticity-part4').then(m => m.microElasticityPart4Data) },
      { title: 'Change Over Time', loader: () => import('./micro-elasticity-part5').then(m => m.microElasticityPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./micro-elasticity-part6').then(m => m.microElasticityPart6Data) },
      { title: 'AP Review', loader: () => import('./micro-elasticity-part7').then(m => m.microElasticityPart7Data) }
    ],
  },
  'micro-government-intervention': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./micro-government-intervention-part1').then(m => m.microGovernmentInterventionPart1Data) },
      { title: 'Key Processes', loader: () => import('./micro-government-intervention-part2').then(m => m.microGovernmentInterventionPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./micro-government-intervention-part3').then(m => m.microGovernmentInterventionPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./micro-government-intervention-part4').then(m => m.microGovernmentInterventionPart4Data) },
      { title: 'Change Over Time', loader: () => import('./micro-government-intervention-part5').then(m => m.microGovernmentInterventionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./micro-government-intervention-part6').then(m => m.microGovernmentInterventionPart6Data) },
      { title: 'AP Review', loader: () => import('./micro-government-intervention-part7').then(m => m.microGovernmentInterventionPart7Data) }
    ],
  },
  'micro-production-costs': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./micro-production-costs-part1').then(m => m.microProductionCostsPart1Data) },
      { title: 'Key Processes', loader: () => import('./micro-production-costs-part2').then(m => m.microProductionCostsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./micro-production-costs-part3').then(m => m.microProductionCostsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./micro-production-costs-part4').then(m => m.microProductionCostsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./micro-production-costs-part5').then(m => m.microProductionCostsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./micro-production-costs-part6').then(m => m.microProductionCostsPart6Data) },
      { title: 'AP Review', loader: () => import('./micro-production-costs-part7').then(m => m.microProductionCostsPart7Data) }
    ],
  },
  'micro-perfect-competition': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./micro-perfect-competition-part1').then(m => m.microPerfectCompetitionPart1Data) },
      { title: 'Key Processes', loader: () => import('./micro-perfect-competition-part2').then(m => m.microPerfectCompetitionPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./micro-perfect-competition-part3').then(m => m.microPerfectCompetitionPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./micro-perfect-competition-part4').then(m => m.microPerfectCompetitionPart4Data) },
      { title: 'Change Over Time', loader: () => import('./micro-perfect-competition-part5').then(m => m.microPerfectCompetitionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./micro-perfect-competition-part6').then(m => m.microPerfectCompetitionPart6Data) },
      { title: 'AP Review', loader: () => import('./micro-perfect-competition-part7').then(m => m.microPerfectCompetitionPart7Data) }
    ],
  },
  'micro-monopoly': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./micro-monopoly-part1').then(m => m.microMonopolyPart1Data) },
      { title: 'Key Processes', loader: () => import('./micro-monopoly-part2').then(m => m.microMonopolyPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./micro-monopoly-part3').then(m => m.microMonopolyPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./micro-monopoly-part4').then(m => m.microMonopolyPart4Data) },
      { title: 'Change Over Time', loader: () => import('./micro-monopoly-part5').then(m => m.microMonopolyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./micro-monopoly-part6').then(m => m.microMonopolyPart6Data) },
      { title: 'AP Review', loader: () => import('./micro-monopoly-part7').then(m => m.microMonopolyPart7Data) }
    ],
  },
  'micro-monopolistic-oligopoly': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./micro-monopolistic-oligopoly-part1').then(m => m.microMonopolisticOligopolyPart1Data) },
      { title: 'Key Processes', loader: () => import('./micro-monopolistic-oligopoly-part2').then(m => m.microMonopolisticOligopolyPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./micro-monopolistic-oligopoly-part3').then(m => m.microMonopolisticOligopolyPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./micro-monopolistic-oligopoly-part4').then(m => m.microMonopolisticOligopolyPart4Data) },
      { title: 'Change Over Time', loader: () => import('./micro-monopolistic-oligopoly-part5').then(m => m.microMonopolisticOligopolyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./micro-monopolistic-oligopoly-part6').then(m => m.microMonopolisticOligopolyPart6Data) },
      { title: 'AP Review', loader: () => import('./micro-monopolistic-oligopoly-part7').then(m => m.microMonopolisticOligopolyPart7Data) }
    ],
  },
  'micro-labor-markets': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./micro-labor-markets-part1').then(m => m.microLaborMarketsPart1Data) },
      { title: 'Key Processes', loader: () => import('./micro-labor-markets-part2').then(m => m.microLaborMarketsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./micro-labor-markets-part3').then(m => m.microLaborMarketsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./micro-labor-markets-part4').then(m => m.microLaborMarketsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./micro-labor-markets-part5').then(m => m.microLaborMarketsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./micro-labor-markets-part6').then(m => m.microLaborMarketsPart6Data) },
      { title: 'AP Review', loader: () => import('./micro-labor-markets-part7').then(m => m.microLaborMarketsPart7Data) }
    ],
  },
  'micro-factor-markets': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./micro-factor-markets-part1').then(m => m.microFactorMarketsPart1Data) },
      { title: 'Key Processes', loader: () => import('./micro-factor-markets-part2').then(m => m.microFactorMarketsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./micro-factor-markets-part3').then(m => m.microFactorMarketsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./micro-factor-markets-part4').then(m => m.microFactorMarketsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./micro-factor-markets-part5').then(m => m.microFactorMarketsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./micro-factor-markets-part6').then(m => m.microFactorMarketsPart6Data) },
      { title: 'AP Review', loader: () => import('./micro-factor-markets-part7').then(m => m.microFactorMarketsPart7Data) }
    ],
  },
  'micro-externalities-public-goods': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./micro-externalities-public-goods-part1').then(m => m.microExternalitiesPublicGoodsPart1Data) },
      { title: 'Key Processes', loader: () => import('./micro-externalities-public-goods-part2').then(m => m.microExternalitiesPublicGoodsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./micro-externalities-public-goods-part3').then(m => m.microExternalitiesPublicGoodsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./micro-externalities-public-goods-part4').then(m => m.microExternalitiesPublicGoodsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./micro-externalities-public-goods-part5').then(m => m.microExternalitiesPublicGoodsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./micro-externalities-public-goods-part6').then(m => m.microExternalitiesPublicGoodsPart6Data) },
      { title: 'AP Review', loader: () => import('./micro-externalities-public-goods-part7').then(m => m.microExternalitiesPublicGoodsPart7Data) }
    ],
  },
  'micro-market-failure': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./micro-market-failure-part1').then(m => m.microMarketFailurePart1Data) },
      { title: 'Key Processes', loader: () => import('./micro-market-failure-part2').then(m => m.microMarketFailurePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./micro-market-failure-part3').then(m => m.microMarketFailurePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./micro-market-failure-part4').then(m => m.microMarketFailurePart4Data) },
      { title: 'Change Over Time', loader: () => import('./micro-market-failure-part5').then(m => m.microMarketFailurePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./micro-market-failure-part6').then(m => m.microMarketFailurePart6Data) },
      { title: 'AP Review', loader: () => import('./micro-market-failure-part7').then(m => m.microMarketFailurePart7Data) }
    ],
  },
  'aas-african-kingdoms': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./aas-african-kingdoms-part1').then(m => m.aasAfricanKingdomsPart1Data) },
      { title: 'Key Processes', loader: () => import('./aas-african-kingdoms-part2').then(m => m.aasAfricanKingdomsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./aas-african-kingdoms-part3').then(m => m.aasAfricanKingdomsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./aas-african-kingdoms-part4').then(m => m.aasAfricanKingdomsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./aas-african-kingdoms-part5').then(m => m.aasAfricanKingdomsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./aas-african-kingdoms-part6').then(m => m.aasAfricanKingdomsPart6Data) },
      { title: 'AP Review', loader: () => import('./aas-african-kingdoms-part7').then(m => m.aasAfricanKingdomsPart7Data) }
    ],
  },
  'aas-origins-diaspora': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./aas-origins-diaspora-part1').then(m => m.aasOriginsDiasporaPart1Data) },
      { title: 'Key Processes', loader: () => import('./aas-origins-diaspora-part2').then(m => m.aasOriginsDiasporaPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./aas-origins-diaspora-part3').then(m => m.aasOriginsDiasporaPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./aas-origins-diaspora-part4').then(m => m.aasOriginsDiasporaPart4Data) },
      { title: 'Change Over Time', loader: () => import('./aas-origins-diaspora-part5').then(m => m.aasOriginsDiasporaPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./aas-origins-diaspora-part6').then(m => m.aasOriginsDiasporaPart6Data) },
      { title: 'AP Review', loader: () => import('./aas-origins-diaspora-part7').then(m => m.aasOriginsDiasporaPart7Data) }
    ],
  },
  'aas-transatlantic-slave-trade': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./aas-transatlantic-slave-trade-part1').then(m => m.aasTransatlanticSlaveTradePart1Data) },
      { title: 'Key Processes', loader: () => import('./aas-transatlantic-slave-trade-part2').then(m => m.aasTransatlanticSlaveTradePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./aas-transatlantic-slave-trade-part3').then(m => m.aasTransatlanticSlaveTradePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./aas-transatlantic-slave-trade-part4').then(m => m.aasTransatlanticSlaveTradePart4Data) },
      { title: 'Change Over Time', loader: () => import('./aas-transatlantic-slave-trade-part5').then(m => m.aasTransatlanticSlaveTradePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./aas-transatlantic-slave-trade-part6').then(m => m.aasTransatlanticSlaveTradePart6Data) },
      { title: 'AP Review', loader: () => import('./aas-transatlantic-slave-trade-part7').then(m => m.aasTransatlanticSlaveTradePart7Data) }
    ],
  },
  'aas-slavery-in-america': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./aas-slavery-in-america-part1').then(m => m.aasSlaveryInAmericaPart1Data) },
      { title: 'Key Processes', loader: () => import('./aas-slavery-in-america-part2').then(m => m.aasSlaveryInAmericaPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./aas-slavery-in-america-part3').then(m => m.aasSlaveryInAmericaPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./aas-slavery-in-america-part4').then(m => m.aasSlaveryInAmericaPart4Data) },
      { title: 'Change Over Time', loader: () => import('./aas-slavery-in-america-part5').then(m => m.aasSlaveryInAmericaPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./aas-slavery-in-america-part6').then(m => m.aasSlaveryInAmericaPart6Data) },
      { title: 'AP Review', loader: () => import('./aas-slavery-in-america-part7').then(m => m.aasSlaveryInAmericaPart7Data) }
    ],
  },
  'aas-resistance-abolition': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./aas-resistance-abolition-part1').then(m => m.aasResistanceAbolitionPart1Data) },
      { title: 'Key Processes', loader: () => import('./aas-resistance-abolition-part2').then(m => m.aasResistanceAbolitionPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./aas-resistance-abolition-part3').then(m => m.aasResistanceAbolitionPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./aas-resistance-abolition-part4').then(m => m.aasResistanceAbolitionPart4Data) },
      { title: 'Change Over Time', loader: () => import('./aas-resistance-abolition-part5').then(m => m.aasResistanceAbolitionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./aas-resistance-abolition-part6').then(m => m.aasResistanceAbolitionPart6Data) },
      { title: 'AP Review', loader: () => import('./aas-resistance-abolition-part7').then(m => m.aasResistanceAbolitionPart7Data) }
    ],
  },
  'aas-freedom-enslavement': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./aas-freedom-enslavement-part1').then(m => m.aasFreedomEnslavementPart1Data) },
      { title: 'Key Processes', loader: () => import('./aas-freedom-enslavement-part2').then(m => m.aasFreedomEnslavementPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./aas-freedom-enslavement-part3').then(m => m.aasFreedomEnslavementPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./aas-freedom-enslavement-part4').then(m => m.aasFreedomEnslavementPart4Data) },
      { title: 'Change Over Time', loader: () => import('./aas-freedom-enslavement-part5').then(m => m.aasFreedomEnslavementPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./aas-freedom-enslavement-part6').then(m => m.aasFreedomEnslavementPart6Data) },
      { title: 'AP Review', loader: () => import('./aas-freedom-enslavement-part7').then(m => m.aasFreedomEnslavementPart7Data) }
    ],
  },
  'aas-reconstruction-jim-crow': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./aas-reconstruction-jim-crow-part1').then(m => m.aasReconstructionJimCrowPart1Data) },
      { title: 'Key Processes', loader: () => import('./aas-reconstruction-jim-crow-part2').then(m => m.aasReconstructionJimCrowPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./aas-reconstruction-jim-crow-part3').then(m => m.aasReconstructionJimCrowPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./aas-reconstruction-jim-crow-part4').then(m => m.aasReconstructionJimCrowPart4Data) },
      { title: 'Change Over Time', loader: () => import('./aas-reconstruction-jim-crow-part5').then(m => m.aasReconstructionJimCrowPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./aas-reconstruction-jim-crow-part6').then(m => m.aasReconstructionJimCrowPart6Data) },
      { title: 'AP Review', loader: () => import('./aas-reconstruction-jim-crow-part7').then(m => m.aasReconstructionJimCrowPart7Data) }
    ],
  },
  'aas-great-migration-harlem': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./aas-great-migration-harlem-part1').then(m => m.aasGreatMigrationHarlemPart1Data) },
      { title: 'Key Processes', loader: () => import('./aas-great-migration-harlem-part2').then(m => m.aasGreatMigrationHarlemPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./aas-great-migration-harlem-part3').then(m => m.aasGreatMigrationHarlemPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./aas-great-migration-harlem-part4').then(m => m.aasGreatMigrationHarlemPart4Data) },
      { title: 'Change Over Time', loader: () => import('./aas-great-migration-harlem-part5').then(m => m.aasGreatMigrationHarlemPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./aas-great-migration-harlem-part6').then(m => m.aasGreatMigrationHarlemPart6Data) },
      { title: 'AP Review', loader: () => import('./aas-great-migration-harlem-part7').then(m => m.aasGreatMigrationHarlemPart7Data) }
    ],
  },
  'aas-wwi-wwii-era': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./aas-wwi-wwii-era-part1').then(m => m.aasWwiWwiiEraPart1Data) },
      { title: 'Key Processes', loader: () => import('./aas-wwi-wwii-era-part2').then(m => m.aasWwiWwiiEraPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./aas-wwi-wwii-era-part3').then(m => m.aasWwiWwiiEraPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./aas-wwi-wwii-era-part4').then(m => m.aasWwiWwiiEraPart4Data) },
      { title: 'Change Over Time', loader: () => import('./aas-wwi-wwii-era-part5').then(m => m.aasWwiWwiiEraPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./aas-wwi-wwii-era-part6').then(m => m.aasWwiWwiiEraPart6Data) },
      { title: 'AP Review', loader: () => import('./aas-wwi-wwii-era-part7').then(m => m.aasWwiWwiiEraPart7Data) }
    ],
  },
  'aas-practice-freedom': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./aas-practice-freedom-part1').then(m => m.aasPracticeFreedomPart1Data) },
      { title: 'Key Processes', loader: () => import('./aas-practice-freedom-part2').then(m => m.aasPracticeFreedomPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./aas-practice-freedom-part3').then(m => m.aasPracticeFreedomPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./aas-practice-freedom-part4').then(m => m.aasPracticeFreedomPart4Data) },
      { title: 'Change Over Time', loader: () => import('./aas-practice-freedom-part5').then(m => m.aasPracticeFreedomPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./aas-practice-freedom-part6').then(m => m.aasPracticeFreedomPart6Data) },
      { title: 'AP Review', loader: () => import('./aas-practice-freedom-part7').then(m => m.aasPracticeFreedomPart7Data) }
    ],
  },
  'aas-civil-rights-movement': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./aas-civil-rights-movement-part1').then(m => m.aasCivilRightsMovementPart1Data) },
      { title: 'Key Processes', loader: () => import('./aas-civil-rights-movement-part2').then(m => m.aasCivilRightsMovementPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./aas-civil-rights-movement-part3').then(m => m.aasCivilRightsMovementPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./aas-civil-rights-movement-part4').then(m => m.aasCivilRightsMovementPart4Data) },
      { title: 'Change Over Time', loader: () => import('./aas-civil-rights-movement-part5').then(m => m.aasCivilRightsMovementPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./aas-civil-rights-movement-part6').then(m => m.aasCivilRightsMovementPart6Data) },
      { title: 'AP Review', loader: () => import('./aas-civil-rights-movement-part7').then(m => m.aasCivilRightsMovementPart7Data) }
    ],
  },
  'aas-black-power-beyond': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./aas-black-power-beyond-part1').then(m => m.aasBlackPowerBeyondPart1Data) },
      { title: 'Key Processes', loader: () => import('./aas-black-power-beyond-part2').then(m => m.aasBlackPowerBeyondPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./aas-black-power-beyond-part3').then(m => m.aasBlackPowerBeyondPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./aas-black-power-beyond-part4').then(m => m.aasBlackPowerBeyondPart4Data) },
      { title: 'Change Over Time', loader: () => import('./aas-black-power-beyond-part5').then(m => m.aasBlackPowerBeyondPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./aas-black-power-beyond-part6').then(m => m.aasBlackPowerBeyondPart6Data) },
      { title: 'AP Review', loader: () => import('./aas-black-power-beyond-part7').then(m => m.aasBlackPowerBeyondPart7Data) }
    ],
  },
  'aas-contemporary-issues': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./aas-contemporary-issues-part1').then(m => m.aasContemporaryIssuesPart1Data) },
      { title: 'Key Processes', loader: () => import('./aas-contemporary-issues-part2').then(m => m.aasContemporaryIssuesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./aas-contemporary-issues-part3').then(m => m.aasContemporaryIssuesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./aas-contemporary-issues-part4').then(m => m.aasContemporaryIssuesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./aas-contemporary-issues-part5').then(m => m.aasContemporaryIssuesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./aas-contemporary-issues-part6').then(m => m.aasContemporaryIssuesPart6Data) },
      { title: 'AP Review', loader: () => import('./aas-contemporary-issues-part7').then(m => m.aasContemporaryIssuesPart7Data) }
    ],
  },
  'aas-movements-debates': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./aas-movements-debates-part1').then(m => m.aasMovementsDebatesPart1Data) },
      { title: 'Key Processes', loader: () => import('./aas-movements-debates-part2').then(m => m.aasMovementsDebatesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./aas-movements-debates-part3').then(m => m.aasMovementsDebatesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./aas-movements-debates-part4').then(m => m.aasMovementsDebatesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./aas-movements-debates-part5').then(m => m.aasMovementsDebatesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./aas-movements-debates-part6').then(m => m.aasMovementsDebatesPart6Data) },
      { title: 'AP Review', loader: () => import('./aas-movements-debates-part7').then(m => m.aasMovementsDebatesPart7Data) }
    ],
  },
  'englit-short-fiction-1': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-short-fiction-1-part1').then(m => m.englitShortFiction1Part1Data) },
      { title: 'Key Processes', loader: () => import('./englit-short-fiction-1-part2').then(m => m.englitShortFiction1Part2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-short-fiction-1-part3').then(m => m.englitShortFiction1Part3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-short-fiction-1-part4').then(m => m.englitShortFiction1Part4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-short-fiction-1-part5').then(m => m.englitShortFiction1Part5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-short-fiction-1-part6').then(m => m.englitShortFiction1Part6Data) },
      { title: 'AP Review', loader: () => import('./englit-short-fiction-1-part7').then(m => m.englitShortFiction1Part7Data) }
    ],
  },
  'englit-short-fiction-2': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-short-fiction-2-part1').then(m => m.englitShortFiction2Part1Data) },
      { title: 'Key Processes', loader: () => import('./englit-short-fiction-2-part2').then(m => m.englitShortFiction2Part2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-short-fiction-2-part3').then(m => m.englitShortFiction2Part3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-short-fiction-2-part4').then(m => m.englitShortFiction2Part4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-short-fiction-2-part5').then(m => m.englitShortFiction2Part5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-short-fiction-2-part6').then(m => m.englitShortFiction2Part6Data) },
      { title: 'AP Review', loader: () => import('./englit-short-fiction-2-part7').then(m => m.englitShortFiction2Part7Data) }
    ],
  },
  'englit-short-fiction-3': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-short-fiction-3-part1').then(m => m.englitShortFiction3Part1Data) },
      { title: 'Key Processes', loader: () => import('./englit-short-fiction-3-part2').then(m => m.englitShortFiction3Part2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-short-fiction-3-part3').then(m => m.englitShortFiction3Part3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-short-fiction-3-part4').then(m => m.englitShortFiction3Part4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-short-fiction-3-part5').then(m => m.englitShortFiction3Part5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-short-fiction-3-part6').then(m => m.englitShortFiction3Part6Data) },
      { title: 'AP Review', loader: () => import('./englit-short-fiction-3-part7').then(m => m.englitShortFiction3Part7Data) }
    ],
  },
  'englit-poetry-1': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-poetry-1-part1').then(m => m.englitPoetry1Part1Data) },
      { title: 'Key Processes', loader: () => import('./englit-poetry-1-part2').then(m => m.englitPoetry1Part2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-poetry-1-part3').then(m => m.englitPoetry1Part3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-poetry-1-part4').then(m => m.englitPoetry1Part4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-poetry-1-part5').then(m => m.englitPoetry1Part5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-poetry-1-part6').then(m => m.englitPoetry1Part6Data) },
      { title: 'AP Review', loader: () => import('./englit-poetry-1-part7').then(m => m.englitPoetry1Part7Data) }
    ],
  },
  'englit-poetry-2': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-poetry-2-part1').then(m => m.englitPoetry2Part1Data) },
      { title: 'Key Processes', loader: () => import('./englit-poetry-2-part2').then(m => m.englitPoetry2Part2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-poetry-2-part3').then(m => m.englitPoetry2Part3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-poetry-2-part4').then(m => m.englitPoetry2Part4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-poetry-2-part5').then(m => m.englitPoetry2Part5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-poetry-2-part6').then(m => m.englitPoetry2Part6Data) },
      { title: 'AP Review', loader: () => import('./englit-poetry-2-part7').then(m => m.englitPoetry2Part7Data) }
    ],
  },
  'englit-poetic-structure-form': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-poetic-structure-form-part1').then(m => m.englitPoeticStructureFormPart1Data) },
      { title: 'Key Processes', loader: () => import('./englit-poetic-structure-form-part2').then(m => m.englitPoeticStructureFormPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-poetic-structure-form-part3').then(m => m.englitPoeticStructureFormPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-poetic-structure-form-part4').then(m => m.englitPoeticStructureFormPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-poetic-structure-form-part5').then(m => m.englitPoeticStructureFormPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-poetic-structure-form-part6').then(m => m.englitPoeticStructureFormPart6Data) },
      { title: 'AP Review', loader: () => import('./englit-poetic-structure-form-part7').then(m => m.englitPoeticStructureFormPart7Data) }
    ],
  },
  'englit-sound-devices': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-sound-devices-part1').then(m => m.englitSoundDevicesPart1Data) },
      { title: 'Key Processes', loader: () => import('./englit-sound-devices-part2').then(m => m.englitSoundDevicesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-sound-devices-part3').then(m => m.englitSoundDevicesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-sound-devices-part4').then(m => m.englitSoundDevicesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-sound-devices-part5').then(m => m.englitSoundDevicesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-sound-devices-part6').then(m => m.englitSoundDevicesPart6Data) },
      { title: 'AP Review', loader: () => import('./englit-sound-devices-part7').then(m => m.englitSoundDevicesPart7Data) }
    ],
  },
  'englit-longer-fiction': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-longer-fiction-part1').then(m => m.englitLongerFictionPart1Data) },
      { title: 'Key Processes', loader: () => import('./englit-longer-fiction-part2').then(m => m.englitLongerFictionPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-longer-fiction-part3').then(m => m.englitLongerFictionPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-longer-fiction-part4').then(m => m.englitLongerFictionPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-longer-fiction-part5').then(m => m.englitLongerFictionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-longer-fiction-part6').then(m => m.englitLongerFictionPart6Data) },
      { title: 'AP Review', loader: () => import('./englit-longer-fiction-part7').then(m => m.englitLongerFictionPart7Data) }
    ],
  },
  'englit-longer-fiction-2': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-longer-fiction-2-part1').then(m => m.englitLongerFiction2Part1Data) },
      { title: 'Key Processes', loader: () => import('./englit-longer-fiction-2-part2').then(m => m.englitLongerFiction2Part2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-longer-fiction-2-part3').then(m => m.englitLongerFiction2Part3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-longer-fiction-2-part4').then(m => m.englitLongerFiction2Part4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-longer-fiction-2-part5').then(m => m.englitLongerFiction2Part5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-longer-fiction-2-part6').then(m => m.englitLongerFiction2Part6Data) },
      { title: 'AP Review', loader: () => import('./englit-longer-fiction-2-part7').then(m => m.englitLongerFiction2Part7Data) }
    ],
  },
  'englit-dramatic-structure': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-dramatic-structure-part1').then(m => m.englitDramaticStructurePart1Data) },
      { title: 'Key Processes', loader: () => import('./englit-dramatic-structure-part2').then(m => m.englitDramaticStructurePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-dramatic-structure-part3').then(m => m.englitDramaticStructurePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-dramatic-structure-part4').then(m => m.englitDramaticStructurePart4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-dramatic-structure-part5').then(m => m.englitDramaticStructurePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-dramatic-structure-part6').then(m => m.englitDramaticStructurePart6Data) },
      { title: 'AP Review', loader: () => import('./englit-dramatic-structure-part7').then(m => m.englitDramaticStructurePart7Data) }
    ],
  },
  'englit-character-setting': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-character-setting-part1').then(m => m.englitCharacterSettingPart1Data) },
      { title: 'Key Processes', loader: () => import('./englit-character-setting-part2').then(m => m.englitCharacterSettingPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-character-setting-part3').then(m => m.englitCharacterSettingPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-character-setting-part4').then(m => m.englitCharacterSettingPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-character-setting-part5').then(m => m.englitCharacterSettingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-character-setting-part6').then(m => m.englitCharacterSettingPart6Data) },
      { title: 'AP Review', loader: () => import('./englit-character-setting-part7').then(m => m.englitCharacterSettingPart7Data) }
    ],
  },
  'englit-narration-pov': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-narration-pov-part1').then(m => m.englitNarrationPovPart1Data) },
      { title: 'Key Processes', loader: () => import('./englit-narration-pov-part2').then(m => m.englitNarrationPovPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-narration-pov-part3').then(m => m.englitNarrationPovPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-narration-pov-part4').then(m => m.englitNarrationPovPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-narration-pov-part5').then(m => m.englitNarrationPovPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-narration-pov-part6').then(m => m.englitNarrationPovPart6Data) },
      { title: 'AP Review', loader: () => import('./englit-narration-pov-part7').then(m => m.englitNarrationPovPart7Data) }
    ],
  },
  'englit-narrative-complexity': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-narrative-complexity-part1').then(m => m.englitNarrativeComplexityPart1Data) },
      { title: 'Key Processes', loader: () => import('./englit-narrative-complexity-part2').then(m => m.englitNarrativeComplexityPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-narrative-complexity-part3').then(m => m.englitNarrativeComplexityPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-narrative-complexity-part4').then(m => m.englitNarrativeComplexityPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-narrative-complexity-part5').then(m => m.englitNarrativeComplexityPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-narrative-complexity-part6').then(m => m.englitNarrativeComplexityPart6Data) },
      { title: 'AP Review', loader: () => import('./englit-narrative-complexity-part7').then(m => m.englitNarrativeComplexityPart7Data) }
    ],
  },
  'englit-narrative-perspective': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-narrative-perspective-part1').then(m => m.englitNarrativePerspectivePart1Data) },
      { title: 'Key Processes', loader: () => import('./englit-narrative-perspective-part2').then(m => m.englitNarrativePerspectivePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-narrative-perspective-part3').then(m => m.englitNarrativePerspectivePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-narrative-perspective-part4').then(m => m.englitNarrativePerspectivePart4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-narrative-perspective-part5').then(m => m.englitNarrativePerspectivePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-narrative-perspective-part6').then(m => m.englitNarrativePerspectivePart6Data) },
      { title: 'AP Review', loader: () => import('./englit-narrative-perspective-part7').then(m => m.englitNarrativePerspectivePart7Data) }
    ],
  },
  'englit-figurative-language': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-figurative-language-part1').then(m => m.englitFigurativeLanguagePart1Data) },
      { title: 'Key Processes', loader: () => import('./englit-figurative-language-part2').then(m => m.englitFigurativeLanguagePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-figurative-language-part3').then(m => m.englitFigurativeLanguagePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-figurative-language-part4').then(m => m.englitFigurativeLanguagePart4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-figurative-language-part5').then(m => m.englitFigurativeLanguagePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-figurative-language-part6').then(m => m.englitFigurativeLanguagePart6Data) },
      { title: 'AP Review', loader: () => import('./englit-figurative-language-part7').then(m => m.englitFigurativeLanguagePart7Data) }
    ],
  },
  'englit-tone-speaker': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-tone-speaker-part1').then(m => m.englitToneSpeakerPart1Data) },
      { title: 'Key Processes', loader: () => import('./englit-tone-speaker-part2').then(m => m.englitToneSpeakerPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-tone-speaker-part3').then(m => m.englitToneSpeakerPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-tone-speaker-part4').then(m => m.englitToneSpeakerPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-tone-speaker-part5').then(m => m.englitToneSpeakerPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-tone-speaker-part6').then(m => m.englitToneSpeakerPart6Data) },
      { title: 'AP Review', loader: () => import('./englit-tone-speaker-part7').then(m => m.englitToneSpeakerPart7Data) }
    ],
  },
  'englit-symbol-motif-fiction': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-symbol-motif-fiction-part1').then(m => m.englitSymbolMotifFictionPart1Data) },
      { title: 'Key Processes', loader: () => import('./englit-symbol-motif-fiction-part2').then(m => m.englitSymbolMotifFictionPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-symbol-motif-fiction-part3').then(m => m.englitSymbolMotifFictionPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-symbol-motif-fiction-part4').then(m => m.englitSymbolMotifFictionPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-symbol-motif-fiction-part5').then(m => m.englitSymbolMotifFictionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-symbol-motif-fiction-part6').then(m => m.englitSymbolMotifFictionPart6Data) },
      { title: 'AP Review', loader: () => import('./englit-symbol-motif-fiction-part7').then(m => m.englitSymbolMotifFictionPart7Data) }
    ],
  },
  'englit-plot-conflict-theme': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-plot-conflict-theme-part1').then(m => m.englitPlotConflictThemePart1Data) },
      { title: 'Key Processes', loader: () => import('./englit-plot-conflict-theme-part2').then(m => m.englitPlotConflictThemePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-plot-conflict-theme-part3').then(m => m.englitPlotConflictThemePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-plot-conflict-theme-part4').then(m => m.englitPlotConflictThemePart4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-plot-conflict-theme-part5').then(m => m.englitPlotConflictThemePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-plot-conflict-theme-part6').then(m => m.englitPlotConflictThemePart6Data) },
      { title: 'AP Review', loader: () => import('./englit-plot-conflict-theme-part7').then(m => m.englitPlotConflictThemePart7Data) }
    ],
  },
  'englit-social-commentary-drama': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englit-social-commentary-drama-part1').then(m => m.englitSocialCommentaryDramaPart1Data) },
      { title: 'Key Processes', loader: () => import('./englit-social-commentary-drama-part2').then(m => m.englitSocialCommentaryDramaPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englit-social-commentary-drama-part3').then(m => m.englitSocialCommentaryDramaPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englit-social-commentary-drama-part4').then(m => m.englitSocialCommentaryDramaPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englit-social-commentary-drama-part5').then(m => m.englitSocialCommentaryDramaPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englit-social-commentary-drama-part6').then(m => m.englitSocialCommentaryDramaPart6Data) },
      { title: 'AP Review', loader: () => import('./englit-social-commentary-drama-part7').then(m => m.englitSocialCommentaryDramaPart7Data) }
    ],
  },
  'englang-intro-rhetoric': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-intro-rhetoric-part1').then(m => m.englangIntroRhetoricPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-intro-rhetoric-part2').then(m => m.englangIntroRhetoricPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-intro-rhetoric-part3').then(m => m.englangIntroRhetoricPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-intro-rhetoric-part4').then(m => m.englangIntroRhetoricPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-intro-rhetoric-part5').then(m => m.englangIntroRhetoricPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-intro-rhetoric-part6').then(m => m.englangIntroRhetoricPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-intro-rhetoric-part7').then(m => m.englangIntroRhetoricPart7Data) }
    ],
  },
  'englang-rhetorical-situation': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-rhetorical-situation-part1').then(m => m.englangRhetoricalSituationPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-rhetorical-situation-part2').then(m => m.englangRhetoricalSituationPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-rhetorical-situation-part3').then(m => m.englangRhetoricalSituationPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-rhetorical-situation-part4').then(m => m.englangRhetoricalSituationPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-rhetorical-situation-part5').then(m => m.englangRhetoricalSituationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-rhetorical-situation-part6').then(m => m.englangRhetoricalSituationPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-rhetorical-situation-part7').then(m => m.englangRhetoricalSituationPart7Data) }
    ],
  },
  'englang-rhetorical-situation-writing': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-rhetorical-situation-writing-part1').then(m => m.englangRhetoricalSituationWritingPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-rhetorical-situation-writing-part2').then(m => m.englangRhetoricalSituationWritingPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-rhetorical-situation-writing-part3').then(m => m.englangRhetoricalSituationWritingPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-rhetorical-situation-writing-part4').then(m => m.englangRhetoricalSituationWritingPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-rhetorical-situation-writing-part5').then(m => m.englangRhetoricalSituationWritingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-rhetorical-situation-writing-part6').then(m => m.englangRhetoricalSituationWritingPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-rhetorical-situation-writing-part7').then(m => m.englangRhetoricalSituationWritingPart7Data) }
    ],
  },
  'englang-claims-evidence': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-claims-evidence-part1').then(m => m.englangClaimsEvidencePart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-claims-evidence-part2').then(m => m.englangClaimsEvidencePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-claims-evidence-part3').then(m => m.englangClaimsEvidencePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-claims-evidence-part4').then(m => m.englangClaimsEvidencePart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-claims-evidence-part5').then(m => m.englangClaimsEvidencePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-claims-evidence-part6').then(m => m.englangClaimsEvidencePart6Data) },
      { title: 'AP Review', loader: () => import('./englang-claims-evidence-part7').then(m => m.englangClaimsEvidencePart7Data) }
    ],
  },
  'englang-claims-evidence-reading': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-claims-evidence-reading-part1').then(m => m.englangClaimsEvidenceReadingPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-claims-evidence-reading-part2').then(m => m.englangClaimsEvidenceReadingPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-claims-evidence-reading-part3').then(m => m.englangClaimsEvidenceReadingPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-claims-evidence-reading-part4').then(m => m.englangClaimsEvidenceReadingPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-claims-evidence-reading-part5').then(m => m.englangClaimsEvidenceReadingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-claims-evidence-reading-part6').then(m => m.englangClaimsEvidenceReadingPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-claims-evidence-reading-part7').then(m => m.englangClaimsEvidenceReadingPart7Data) }
    ],
  },
  'englang-claims-evidence-writing': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-claims-evidence-writing-part1').then(m => m.englangClaimsEvidenceWritingPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-claims-evidence-writing-part2').then(m => m.englangClaimsEvidenceWritingPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-claims-evidence-writing-part3').then(m => m.englangClaimsEvidenceWritingPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-claims-evidence-writing-part4').then(m => m.englangClaimsEvidenceWritingPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-claims-evidence-writing-part5').then(m => m.englangClaimsEvidenceWritingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-claims-evidence-writing-part6').then(m => m.englangClaimsEvidenceWritingPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-claims-evidence-writing-part7').then(m => m.englangClaimsEvidenceWritingPart7Data) }
    ],
  },
  'englang-reasoning-org-reading': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-reasoning-org-reading-part1').then(m => m.englangReasoningOrgReadingPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-reasoning-org-reading-part2').then(m => m.englangReasoningOrgReadingPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-reasoning-org-reading-part3').then(m => m.englangReasoningOrgReadingPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-reasoning-org-reading-part4').then(m => m.englangReasoningOrgReadingPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-reasoning-org-reading-part5').then(m => m.englangReasoningOrgReadingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-reasoning-org-reading-part6').then(m => m.englangReasoningOrgReadingPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-reasoning-org-reading-part7').then(m => m.englangReasoningOrgReadingPart7Data) }
    ],
  },
  'englang-reasoning-org-writing': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-reasoning-org-writing-part1').then(m => m.englangReasoningOrgWritingPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-reasoning-org-writing-part2').then(m => m.englangReasoningOrgWritingPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-reasoning-org-writing-part3').then(m => m.englangReasoningOrgWritingPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-reasoning-org-writing-part4').then(m => m.englangReasoningOrgWritingPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-reasoning-org-writing-part5').then(m => m.englangReasoningOrgWritingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-reasoning-org-writing-part6').then(m => m.englangReasoningOrgWritingPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-reasoning-org-writing-part7').then(m => m.englangReasoningOrgWritingPart7Data) }
    ],
  },
  'englang-argument-structure': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-argument-structure-part1').then(m => m.englangArgumentStructurePart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-argument-structure-part2').then(m => m.englangArgumentStructurePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-argument-structure-part3').then(m => m.englangArgumentStructurePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-argument-structure-part4').then(m => m.englangArgumentStructurePart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-argument-structure-part5').then(m => m.englangArgumentStructurePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-argument-structure-part6').then(m => m.englangArgumentStructurePart6Data) },
      { title: 'AP Review', loader: () => import('./englang-argument-structure-part7').then(m => m.englangArgumentStructurePart7Data) }
    ],
  },
  'englang-diction-syntax': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-diction-syntax-part1').then(m => m.englangDictionSyntaxPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-diction-syntax-part2').then(m => m.englangDictionSyntaxPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-diction-syntax-part3').then(m => m.englangDictionSyntaxPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-diction-syntax-part4').then(m => m.englangDictionSyntaxPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-diction-syntax-part5').then(m => m.englangDictionSyntaxPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-diction-syntax-part6').then(m => m.englangDictionSyntaxPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-diction-syntax-part7').then(m => m.englangDictionSyntaxPart7Data) }
    ],
  },
  'englang-style-reading': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-style-reading-part1').then(m => m.englangStyleReadingPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-style-reading-part2').then(m => m.englangStyleReadingPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-style-reading-part3').then(m => m.englangStyleReadingPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-style-reading-part4').then(m => m.englangStyleReadingPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-style-reading-part5').then(m => m.englangStyleReadingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-style-reading-part6').then(m => m.englangStyleReadingPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-style-reading-part7').then(m => m.englangStyleReadingPart7Data) }
    ],
  },
  'englang-style-writing': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-style-writing-part1').then(m => m.englangStyleWritingPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-style-writing-part2').then(m => m.englangStyleWritingPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-style-writing-part3').then(m => m.englangStyleWritingPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-style-writing-part4').then(m => m.englangStyleWritingPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-style-writing-part5').then(m => m.englangStyleWritingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-style-writing-part6').then(m => m.englangStyleWritingPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-style-writing-part7').then(m => m.englangStyleWritingPart7Data) }
    ],
  },
  'englang-tone-voice-analysis': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-tone-voice-analysis-part1').then(m => m.englangToneVoiceAnalysisPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-tone-voice-analysis-part2').then(m => m.englangToneVoiceAnalysisPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-tone-voice-analysis-part3').then(m => m.englangToneVoiceAnalysisPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-tone-voice-analysis-part4').then(m => m.englangToneVoiceAnalysisPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-tone-voice-analysis-part5').then(m => m.englangToneVoiceAnalysisPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-tone-voice-analysis-part6').then(m => m.englangToneVoiceAnalysisPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-tone-voice-analysis-part7').then(m => m.englangToneVoiceAnalysisPart7Data) }
    ],
  },
  'englang-ethos-pathos-logos': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-ethos-pathos-logos-part1').then(m => m.englangEthosPathosLogosPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-ethos-pathos-logos-part2').then(m => m.englangEthosPathosLogosPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-ethos-pathos-logos-part3').then(m => m.englangEthosPathosLogosPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-ethos-pathos-logos-part4').then(m => m.englangEthosPathosLogosPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-ethos-pathos-logos-part5').then(m => m.englangEthosPathosLogosPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-ethos-pathos-logos-part6').then(m => m.englangEthosPathosLogosPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-ethos-pathos-logos-part7').then(m => m.englangEthosPathosLogosPart7Data) }
    ],
  },
  'englang-logical-fallacies': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-logical-fallacies-part1').then(m => m.englangLogicalFallaciesPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-logical-fallacies-part2').then(m => m.englangLogicalFallaciesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-logical-fallacies-part3').then(m => m.englangLogicalFallaciesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-logical-fallacies-part4').then(m => m.englangLogicalFallaciesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-logical-fallacies-part5').then(m => m.englangLogicalFallaciesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-logical-fallacies-part6').then(m => m.englangLogicalFallaciesPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-logical-fallacies-part7').then(m => m.englangLogicalFallaciesPart7Data) }
    ],
  },
  'englang-synthesis': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-synthesis-part1').then(m => m.englangSynthesisPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-synthesis-part2').then(m => m.englangSynthesisPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-synthesis-part3').then(m => m.englangSynthesisPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-synthesis-part4').then(m => m.englangSynthesisPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-synthesis-part5').then(m => m.englangSynthesisPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-synthesis-part6').then(m => m.englangSynthesisPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-synthesis-part7').then(m => m.englangSynthesisPart7Data) }
    ],
  },
  'englang-synthesis-essay': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-synthesis-essay-part1').then(m => m.englangSynthesisEssayPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-synthesis-essay-part2').then(m => m.englangSynthesisEssayPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-synthesis-essay-part3').then(m => m.englangSynthesisEssayPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-synthesis-essay-part4').then(m => m.englangSynthesisEssayPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-synthesis-essay-part5').then(m => m.englangSynthesisEssayPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-synthesis-essay-part6').then(m => m.englangSynthesisEssayPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-synthesis-essay-part7').then(m => m.englangSynthesisEssayPart7Data) }
    ],
  },
  'englang-developing-arguments': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-developing-arguments-part1').then(m => m.englangDevelopingArgumentsPart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-developing-arguments-part2').then(m => m.englangDevelopingArgumentsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-developing-arguments-part3').then(m => m.englangDevelopingArgumentsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-developing-arguments-part4').then(m => m.englangDevelopingArgumentsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-developing-arguments-part5').then(m => m.englangDevelopingArgumentsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-developing-arguments-part6').then(m => m.englangDevelopingArgumentsPart6Data) },
      { title: 'AP Review', loader: () => import('./englang-developing-arguments-part7').then(m => m.englangDevelopingArgumentsPart7Data) }
    ],
  },
  'englang-writing-for-audience': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./englang-writing-for-audience-part1').then(m => m.englangWritingForAudiencePart1Data) },
      { title: 'Key Processes', loader: () => import('./englang-writing-for-audience-part2').then(m => m.englangWritingForAudiencePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./englang-writing-for-audience-part3').then(m => m.englangWritingForAudiencePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./englang-writing-for-audience-part4').then(m => m.englangWritingForAudiencePart4Data) },
      { title: 'Change Over Time', loader: () => import('./englang-writing-for-audience-part5').then(m => m.englangWritingForAudiencePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./englang-writing-for-audience-part6').then(m => m.englangWritingForAudiencePart6Data) },
      { title: 'AP Review', loader: () => import('./englang-writing-for-audience-part7').then(m => m.englangWritingForAudiencePart7Data) }
    ],
  },
  'apes-ecosystem-structure': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-ecosystem-structure-part1').then(m => m.apesEcosystemStructurePart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-ecosystem-structure-part2').then(m => m.apesEcosystemStructurePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-ecosystem-structure-part3').then(m => m.apesEcosystemStructurePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-ecosystem-structure-part4').then(m => m.apesEcosystemStructurePart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-ecosystem-structure-part5').then(m => m.apesEcosystemStructurePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-ecosystem-structure-part6').then(m => m.apesEcosystemStructurePart6Data) },
      { title: 'AP Review', loader: () => import('./apes-ecosystem-structure-part7').then(m => m.apesEcosystemStructurePart7Data) }
    ],
  },
  'apes-biogeochemical-cycles': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-biogeochemical-cycles-part1').then(m => m.apesBiogeochemicalCyclesPart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-biogeochemical-cycles-part2').then(m => m.apesBiogeochemicalCyclesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-biogeochemical-cycles-part3').then(m => m.apesBiogeochemicalCyclesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-biogeochemical-cycles-part4').then(m => m.apesBiogeochemicalCyclesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-biogeochemical-cycles-part5').then(m => m.apesBiogeochemicalCyclesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-biogeochemical-cycles-part6').then(m => m.apesBiogeochemicalCyclesPart6Data) },
      { title: 'AP Review', loader: () => import('./apes-biogeochemical-cycles-part7').then(m => m.apesBiogeochemicalCyclesPart7Data) }
    ],
  },
  'apes-earth-systems': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-earth-systems-part1').then(m => m.apesEarthSystemsPart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-earth-systems-part2').then(m => m.apesEarthSystemsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-earth-systems-part3').then(m => m.apesEarthSystemsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-earth-systems-part4').then(m => m.apesEarthSystemsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-earth-systems-part5').then(m => m.apesEarthSystemsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-earth-systems-part6').then(m => m.apesEarthSystemsPart6Data) },
      { title: 'AP Review', loader: () => import('./apes-earth-systems-part7').then(m => m.apesEarthSystemsPart7Data) }
    ],
  },
  'apes-biodiversity': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-biodiversity-part1').then(m => m.apesBiodiversityPart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-biodiversity-part2').then(m => m.apesBiodiversityPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-biodiversity-part3').then(m => m.apesBiodiversityPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-biodiversity-part4').then(m => m.apesBiodiversityPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-biodiversity-part5').then(m => m.apesBiodiversityPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-biodiversity-part6').then(m => m.apesBiodiversityPart6Data) },
      { title: 'AP Review', loader: () => import('./apes-biodiversity-part7').then(m => m.apesBiodiversityPart7Data) }
    ],
  },
  'apes-biodiversity-conservation': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-biodiversity-conservation-part1').then(m => m.apesBiodiversityConservationPart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-biodiversity-conservation-part2').then(m => m.apesBiodiversityConservationPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-biodiversity-conservation-part3').then(m => m.apesBiodiversityConservationPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-biodiversity-conservation-part4').then(m => m.apesBiodiversityConservationPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-biodiversity-conservation-part5').then(m => m.apesBiodiversityConservationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-biodiversity-conservation-part6').then(m => m.apesBiodiversityConservationPart6Data) },
      { title: 'AP Review', loader: () => import('./apes-biodiversity-conservation-part7').then(m => m.apesBiodiversityConservationPart7Data) }
    ],
  },
  'apes-biomes-succession': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-biomes-succession-part1').then(m => m.apesBiomesSuccessionPart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-biomes-succession-part2').then(m => m.apesBiomesSuccessionPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-biomes-succession-part3').then(m => m.apesBiomesSuccessionPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-biomes-succession-part4').then(m => m.apesBiomesSuccessionPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-biomes-succession-part5').then(m => m.apesBiomesSuccessionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-biomes-succession-part6').then(m => m.apesBiomesSuccessionPart6Data) },
      { title: 'AP Review', loader: () => import('./apes-biomes-succession-part7').then(m => m.apesBiomesSuccessionPart7Data) }
    ],
  },
  'apes-population-ecology': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-population-ecology-part1').then(m => m.apesPopulationEcologyPart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-population-ecology-part2').then(m => m.apesPopulationEcologyPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-population-ecology-part3').then(m => m.apesPopulationEcologyPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-population-ecology-part4').then(m => m.apesPopulationEcologyPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-population-ecology-part5').then(m => m.apesPopulationEcologyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-population-ecology-part6').then(m => m.apesPopulationEcologyPart6Data) },
      { title: 'AP Review', loader: () => import('./apes-population-ecology-part7').then(m => m.apesPopulationEcologyPart7Data) }
    ],
  },
  'apes-human-population': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-human-population-part1').then(m => m.apesHumanPopulationPart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-human-population-part2').then(m => m.apesHumanPopulationPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-human-population-part3').then(m => m.apesHumanPopulationPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-human-population-part4').then(m => m.apesHumanPopulationPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-human-population-part5').then(m => m.apesHumanPopulationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-human-population-part6').then(m => m.apesHumanPopulationPart6Data) },
      { title: 'AP Review', loader: () => import('./apes-human-population-part7').then(m => m.apesHumanPopulationPart7Data) }
    ],
  },
  'apes-agriculture-land': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-agriculture-land-part1').then(m => m.apesAgricultureLandPart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-agriculture-land-part2').then(m => m.apesAgricultureLandPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-agriculture-land-part3').then(m => m.apesAgricultureLandPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-agriculture-land-part4').then(m => m.apesAgricultureLandPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-agriculture-land-part5').then(m => m.apesAgricultureLandPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-agriculture-land-part6').then(m => m.apesAgricultureLandPart6Data) },
      { title: 'AP Review', loader: () => import('./apes-agriculture-land-part7').then(m => m.apesAgricultureLandPart7Data) }
    ],
  },
  'apes-water-resources': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-water-resources-part1').then(m => m.apesWaterResourcesPart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-water-resources-part2').then(m => m.apesWaterResourcesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-water-resources-part3').then(m => m.apesWaterResourcesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-water-resources-part4').then(m => m.apesWaterResourcesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-water-resources-part5').then(m => m.apesWaterResourcesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-water-resources-part6').then(m => m.apesWaterResourcesPart6Data) },
      { title: 'AP Review', loader: () => import('./apes-water-resources-part7').then(m => m.apesWaterResourcesPart7Data) }
    ],
  },
  'apes-fossil-fuels-nuclear': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-fossil-fuels-nuclear-part1').then(m => m.apesFossilFuelsNuclearPart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-fossil-fuels-nuclear-part2').then(m => m.apesFossilFuelsNuclearPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-fossil-fuels-nuclear-part3').then(m => m.apesFossilFuelsNuclearPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-fossil-fuels-nuclear-part4').then(m => m.apesFossilFuelsNuclearPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-fossil-fuels-nuclear-part5').then(m => m.apesFossilFuelsNuclearPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-fossil-fuels-nuclear-part6').then(m => m.apesFossilFuelsNuclearPart6Data) },
      { title: 'AP Review', loader: () => import('./apes-fossil-fuels-nuclear-part7').then(m => m.apesFossilFuelsNuclearPart7Data) }
    ],
  },
  'apes-renewable-energy': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-renewable-energy-part1').then(m => m.apesRenewableEnergyPart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-renewable-energy-part2').then(m => m.apesRenewableEnergyPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-renewable-energy-part3').then(m => m.apesRenewableEnergyPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-renewable-energy-part4').then(m => m.apesRenewableEnergyPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-renewable-energy-part5').then(m => m.apesRenewableEnergyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-renewable-energy-part6').then(m => m.apesRenewableEnergyPart6Data) },
      { title: 'AP Review', loader: () => import('./apes-renewable-energy-part7').then(m => m.apesRenewableEnergyPart7Data) }
    ],
  },
  'apes-energy': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-energy-part1').then(m => m.apesEnergyPart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-energy-part2').then(m => m.apesEnergyPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-energy-part3').then(m => m.apesEnergyPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-energy-part4').then(m => m.apesEnergyPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-energy-part5').then(m => m.apesEnergyPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-energy-part6').then(m => m.apesEnergyPart6Data) },
      { title: 'AP Review', loader: () => import('./apes-energy-part7').then(m => m.apesEnergyPart7Data) }
    ],
  },
  'apes-atmospheric-pollution': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-atmospheric-pollution-part1').then(m => m.apesAtmosphericPollutionPart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-atmospheric-pollution-part2').then(m => m.apesAtmosphericPollutionPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-atmospheric-pollution-part3').then(m => m.apesAtmosphericPollutionPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-atmospheric-pollution-part4').then(m => m.apesAtmosphericPollutionPart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-atmospheric-pollution-part5').then(m => m.apesAtmosphericPollutionPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-atmospheric-pollution-part6').then(m => m.apesAtmosphericPollutionPart6Data) },
      { title: 'AP Review', loader: () => import('./apes-atmospheric-pollution-part7').then(m => m.apesAtmosphericPollutionPart7Data) }
    ],
  },
  'apes-atmosphere-climate': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./apes-atmosphere-climate-part1').then(m => m.apesAtmosphereClimatePart1Data) },
      { title: 'Key Processes', loader: () => import('./apes-atmosphere-climate-part2').then(m => m.apesAtmosphereClimatePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./apes-atmosphere-climate-part3').then(m => m.apesAtmosphereClimatePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./apes-atmosphere-climate-part4').then(m => m.apesAtmosphereClimatePart4Data) },
      { title: 'Change Over Time', loader: () => import('./apes-atmosphere-climate-part5').then(m => m.apesAtmosphereClimatePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./apes-atmosphere-climate-part6').then(m => m.apesAtmosphereClimatePart6Data) },
      { title: 'AP Review', loader: () => import('./apes-atmosphere-climate-part7').then(m => m.apesAtmosphereClimatePart7Data) }
    ],
  },
  'csa-variables-types': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-variables-types-part1').then(m => m.csaVariablesTypesPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-variables-types-part2').then(m => m.csaVariablesTypesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-variables-types-part3').then(m => m.csaVariablesTypesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-variables-types-part4').then(m => m.csaVariablesTypesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-variables-types-part5').then(m => m.csaVariablesTypesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-variables-types-part6').then(m => m.csaVariablesTypesPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-variables-types-part7').then(m => m.csaVariablesTypesPart7Data) }
    ],
  },
  'csa-expressions-operators': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-expressions-operators-part1').then(m => m.csaExpressionsOperatorsPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-expressions-operators-part2').then(m => m.csaExpressionsOperatorsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-expressions-operators-part3').then(m => m.csaExpressionsOperatorsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-expressions-operators-part4').then(m => m.csaExpressionsOperatorsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-expressions-operators-part5').then(m => m.csaExpressionsOperatorsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-expressions-operators-part6').then(m => m.csaExpressionsOperatorsPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-expressions-operators-part7').then(m => m.csaExpressionsOperatorsPart7Data) }
    ],
  },
  'csa-strings-objects': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-strings-objects-part1').then(m => m.csaStringsObjectsPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-strings-objects-part2').then(m => m.csaStringsObjectsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-strings-objects-part3').then(m => m.csaStringsObjectsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-strings-objects-part4').then(m => m.csaStringsObjectsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-strings-objects-part5').then(m => m.csaStringsObjectsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-strings-objects-part6').then(m => m.csaStringsObjectsPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-strings-objects-part7').then(m => m.csaStringsObjectsPart7Data) }
    ],
  },
  'csa-using-objects': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-using-objects-part1').then(m => m.csaUsingObjectsPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-using-objects-part2').then(m => m.csaUsingObjectsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-using-objects-part3').then(m => m.csaUsingObjectsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-using-objects-part4').then(m => m.csaUsingObjectsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-using-objects-part5').then(m => m.csaUsingObjectsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-using-objects-part6').then(m => m.csaUsingObjectsPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-using-objects-part7').then(m => m.csaUsingObjectsPart7Data) }
    ],
  },
  'csa-boolean-if': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-boolean-if-part1').then(m => m.csaBooleanIfPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-boolean-if-part2').then(m => m.csaBooleanIfPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-boolean-if-part3').then(m => m.csaBooleanIfPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-boolean-if-part4').then(m => m.csaBooleanIfPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-boolean-if-part5').then(m => m.csaBooleanIfPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-boolean-if-part6').then(m => m.csaBooleanIfPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-boolean-if-part7').then(m => m.csaBooleanIfPart7Data) }
    ],
  },
  'csa-conditionals': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-conditionals-part1').then(m => m.csaConditionalsPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-conditionals-part2').then(m => m.csaConditionalsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-conditionals-part3').then(m => m.csaConditionalsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-conditionals-part4').then(m => m.csaConditionalsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-conditionals-part5').then(m => m.csaConditionalsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-conditionals-part6').then(m => m.csaConditionalsPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-conditionals-part7').then(m => m.csaConditionalsPart7Data) }
    ],
  },
  'csa-iteration': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-iteration-part1').then(m => m.csaIterationPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-iteration-part2').then(m => m.csaIterationPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-iteration-part3').then(m => m.csaIterationPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-iteration-part4').then(m => m.csaIterationPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-iteration-part5').then(m => m.csaIterationPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-iteration-part6').then(m => m.csaIterationPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-iteration-part7').then(m => m.csaIterationPart7Data) }
    ],
  },
  'csa-loops': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-loops-part1').then(m => m.csaLoopsPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-loops-part2').then(m => m.csaLoopsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-loops-part3').then(m => m.csaLoopsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-loops-part4').then(m => m.csaLoopsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-loops-part5').then(m => m.csaLoopsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-loops-part6').then(m => m.csaLoopsPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-loops-part7').then(m => m.csaLoopsPart7Data) }
    ],
  },
  'csa-writing-classes': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-writing-classes-part1').then(m => m.csaWritingClassesPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-writing-classes-part2').then(m => m.csaWritingClassesPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-writing-classes-part3').then(m => m.csaWritingClassesPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-writing-classes-part4').then(m => m.csaWritingClassesPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-writing-classes-part5').then(m => m.csaWritingClassesPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-writing-classes-part6').then(m => m.csaWritingClassesPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-writing-classes-part7').then(m => m.csaWritingClassesPart7Data) }
    ],
  },
  'csa-class-design': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-class-design-part1').then(m => m.csaClassDesignPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-class-design-part2').then(m => m.csaClassDesignPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-class-design-part3').then(m => m.csaClassDesignPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-class-design-part4').then(m => m.csaClassDesignPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-class-design-part5').then(m => m.csaClassDesignPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-class-design-part6').then(m => m.csaClassDesignPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-class-design-part7').then(m => m.csaClassDesignPart7Data) }
    ],
  },
  'csa-array': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-array-part1').then(m => m.csaArrayPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-array-part2').then(m => m.csaArrayPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-array-part3').then(m => m.csaArrayPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-array-part4').then(m => m.csaArrayPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-array-part5').then(m => m.csaArrayPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-array-part6').then(m => m.csaArrayPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-array-part7').then(m => m.csaArrayPart7Data) }
    ],
  },
  'csa-arrays': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-arrays-part1').then(m => m.csaArraysPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-arrays-part2').then(m => m.csaArraysPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-arrays-part3').then(m => m.csaArraysPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-arrays-part4').then(m => m.csaArraysPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-arrays-part5').then(m => m.csaArraysPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-arrays-part6').then(m => m.csaArraysPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-arrays-part7').then(m => m.csaArraysPart7Data) }
    ],
  },
  'csa-arraylist': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-arraylist-part1').then(m => m.csaArraylistPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-arraylist-part2').then(m => m.csaArraylistPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-arraylist-part3').then(m => m.csaArraylistPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-arraylist-part4').then(m => m.csaArraylistPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-arraylist-part5').then(m => m.csaArraylistPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-arraylist-part6').then(m => m.csaArraylistPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-arraylist-part7').then(m => m.csaArraylistPart7Data) }
    ],
  },
  'csa-arraylist-usage': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-arraylist-usage-part1').then(m => m.csaArraylistUsagePart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-arraylist-usage-part2').then(m => m.csaArraylistUsagePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-arraylist-usage-part3').then(m => m.csaArraylistUsagePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-arraylist-usage-part4').then(m => m.csaArraylistUsagePart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-arraylist-usage-part5').then(m => m.csaArraylistUsagePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-arraylist-usage-part6').then(m => m.csaArraylistUsagePart6Data) },
      { title: 'AP Review', loader: () => import('./csa-arraylist-usage-part7').then(m => m.csaArraylistUsagePart7Data) }
    ],
  },
  'csa-2d-array': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-2d-array-part1').then(m => m.csa2dArrayPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-2d-array-part2').then(m => m.csa2dArrayPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-2d-array-part3').then(m => m.csa2dArrayPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-2d-array-part4').then(m => m.csa2dArrayPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-2d-array-part5').then(m => m.csa2dArrayPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-2d-array-part6').then(m => m.csa2dArrayPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-2d-array-part7').then(m => m.csa2dArrayPart7Data) }
    ],
  },
  'csa-2d-arrays': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-2d-arrays-part1').then(m => m.csa2dArraysPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-2d-arrays-part2').then(m => m.csa2dArraysPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-2d-arrays-part3').then(m => m.csa2dArraysPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-2d-arrays-part4').then(m => m.csa2dArraysPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-2d-arrays-part5').then(m => m.csa2dArraysPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-2d-arrays-part6').then(m => m.csa2dArraysPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-2d-arrays-part7').then(m => m.csa2dArraysPart7Data) }
    ],
  },
  'csa-inheritance': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-inheritance-part1').then(m => m.csaInheritancePart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-inheritance-part2').then(m => m.csaInheritancePart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-inheritance-part3').then(m => m.csaInheritancePart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-inheritance-part4').then(m => m.csaInheritancePart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-inheritance-part5').then(m => m.csaInheritancePart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-inheritance-part6').then(m => m.csaInheritancePart6Data) },
      { title: 'AP Review', loader: () => import('./csa-inheritance-part7').then(m => m.csaInheritancePart7Data) }
    ],
  },
  'csa-inheritance-polymorphism': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csa-inheritance-polymorphism-part1').then(m => m.csaInheritancePolymorphismPart1Data) },
      { title: 'Key Processes', loader: () => import('./csa-inheritance-polymorphism-part2').then(m => m.csaInheritancePolymorphismPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csa-inheritance-polymorphism-part3').then(m => m.csaInheritancePolymorphismPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csa-inheritance-polymorphism-part4').then(m => m.csaInheritancePolymorphismPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csa-inheritance-polymorphism-part5').then(m => m.csaInheritancePolymorphismPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csa-inheritance-polymorphism-part6').then(m => m.csaInheritancePolymorphismPart6Data) },
      { title: 'AP Review', loader: () => import('./csa-inheritance-polymorphism-part7').then(m => m.csaInheritancePolymorphismPart7Data) }
    ],
  },
  'csp-creative-development': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-creative-development-part1').then(m => m.cspCreativeDevelopmentPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-creative-development-part2').then(m => m.cspCreativeDevelopmentPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-creative-development-part3').then(m => m.cspCreativeDevelopmentPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-creative-development-part4').then(m => m.cspCreativeDevelopmentPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-creative-development-part5').then(m => m.cspCreativeDevelopmentPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-creative-development-part6').then(m => m.cspCreativeDevelopmentPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-creative-development-part7').then(m => m.cspCreativeDevelopmentPart7Data) }
    ],
  },
  'csp-collaboration-development': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-collaboration-development-part1').then(m => m.cspCollaborationDevelopmentPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-collaboration-development-part2').then(m => m.cspCollaborationDevelopmentPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-collaboration-development-part3').then(m => m.cspCollaborationDevelopmentPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-collaboration-development-part4').then(m => m.cspCollaborationDevelopmentPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-collaboration-development-part5').then(m => m.cspCollaborationDevelopmentPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-collaboration-development-part6').then(m => m.cspCollaborationDevelopmentPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-collaboration-development-part7').then(m => m.cspCollaborationDevelopmentPart7Data) }
    ],
  },
  'csp-binary-data': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-binary-data-part1').then(m => m.cspBinaryDataPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-binary-data-part2').then(m => m.cspBinaryDataPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-binary-data-part3').then(m => m.cspBinaryDataPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-binary-data-part4').then(m => m.cspBinaryDataPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-binary-data-part5').then(m => m.cspBinaryDataPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-binary-data-part6').then(m => m.cspBinaryDataPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-binary-data-part7').then(m => m.cspBinaryDataPart7Data) }
    ],
  },
  'csp-data-compression-analysis': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-data-compression-analysis-part1').then(m => m.cspDataCompressionAnalysisPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-data-compression-analysis-part2').then(m => m.cspDataCompressionAnalysisPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-data-compression-analysis-part3').then(m => m.cspDataCompressionAnalysisPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-data-compression-analysis-part4').then(m => m.cspDataCompressionAnalysisPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-data-compression-analysis-part5').then(m => m.cspDataCompressionAnalysisPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-data-compression-analysis-part6').then(m => m.cspDataCompressionAnalysisPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-data-compression-analysis-part7').then(m => m.cspDataCompressionAnalysisPart7Data) }
    ],
  },
  'csp-data': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-data-part1').then(m => m.cspDataPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-data-part2').then(m => m.cspDataPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-data-part3').then(m => m.cspDataPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-data-part4').then(m => m.cspDataPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-data-part5').then(m => m.cspDataPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-data-part6').then(m => m.cspDataPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-data-part7').then(m => m.cspDataPart7Data) }
    ],
  },
  'csp-algorithms': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-algorithms-part1').then(m => m.cspAlgorithmsPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-algorithms-part2').then(m => m.cspAlgorithmsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-algorithms-part3').then(m => m.cspAlgorithmsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-algorithms-part4').then(m => m.cspAlgorithmsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-algorithms-part5').then(m => m.cspAlgorithmsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-algorithms-part6').then(m => m.cspAlgorithmsPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-algorithms-part7').then(m => m.cspAlgorithmsPart7Data) }
    ],
  },
  'csp-algorithms-programming': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-algorithms-programming-part1').then(m => m.cspAlgorithmsProgrammingPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-algorithms-programming-part2').then(m => m.cspAlgorithmsProgrammingPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-algorithms-programming-part3').then(m => m.cspAlgorithmsProgrammingPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-algorithms-programming-part4').then(m => m.cspAlgorithmsProgrammingPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-algorithms-programming-part5').then(m => m.cspAlgorithmsProgrammingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-algorithms-programming-part6').then(m => m.cspAlgorithmsProgrammingPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-algorithms-programming-part7').then(m => m.cspAlgorithmsProgrammingPart7Data) }
    ],
  },
  'csp-variables-control': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-variables-control-part1').then(m => m.cspVariablesControlPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-variables-control-part2').then(m => m.cspVariablesControlPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-variables-control-part3').then(m => m.cspVariablesControlPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-variables-control-part4').then(m => m.cspVariablesControlPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-variables-control-part5').then(m => m.cspVariablesControlPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-variables-control-part6').then(m => m.cspVariablesControlPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-variables-control-part7').then(m => m.cspVariablesControlPart7Data) }
    ],
  },
  'csp-procedures-lists': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-procedures-lists-part1').then(m => m.cspProceduresListsPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-procedures-lists-part2').then(m => m.cspProceduresListsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-procedures-lists-part3').then(m => m.cspProceduresListsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-procedures-lists-part4').then(m => m.cspProceduresListsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-procedures-lists-part5').then(m => m.cspProceduresListsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-procedures-lists-part6').then(m => m.cspProceduresListsPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-procedures-lists-part7').then(m => m.cspProceduresListsPart7Data) }
    ],
  },
  'csp-computing-systems-networks': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-computing-systems-networks-part1').then(m => m.cspComputingSystemsNetworksPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-computing-systems-networks-part2').then(m => m.cspComputingSystemsNetworksPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-computing-systems-networks-part3').then(m => m.cspComputingSystemsNetworksPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-computing-systems-networks-part4').then(m => m.cspComputingSystemsNetworksPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-computing-systems-networks-part5').then(m => m.cspComputingSystemsNetworksPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-computing-systems-networks-part6').then(m => m.cspComputingSystemsNetworksPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-computing-systems-networks-part7').then(m => m.cspComputingSystemsNetworksPart7Data) }
    ],
  },
  'csp-internet-protocols': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-internet-protocols-part1').then(m => m.cspInternetProtocolsPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-internet-protocols-part2').then(m => m.cspInternetProtocolsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-internet-protocols-part3').then(m => m.cspInternetProtocolsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-internet-protocols-part4').then(m => m.cspInternetProtocolsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-internet-protocols-part5').then(m => m.cspInternetProtocolsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-internet-protocols-part6').then(m => m.cspInternetProtocolsPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-internet-protocols-part7').then(m => m.cspInternetProtocolsPart7Data) }
    ],
  },
  'csp-fault-tolerance-security': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-fault-tolerance-security-part1').then(m => m.cspFaultToleranceSecurityPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-fault-tolerance-security-part2').then(m => m.cspFaultToleranceSecurityPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-fault-tolerance-security-part3').then(m => m.cspFaultToleranceSecurityPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-fault-tolerance-security-part4').then(m => m.cspFaultToleranceSecurityPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-fault-tolerance-security-part5').then(m => m.cspFaultToleranceSecurityPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-fault-tolerance-security-part6').then(m => m.cspFaultToleranceSecurityPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-fault-tolerance-security-part7').then(m => m.cspFaultToleranceSecurityPart7Data) }
    ],
  },
  'csp-impact-of-computing': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-impact-of-computing-part1').then(m => m.cspImpactOfComputingPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-impact-of-computing-part2').then(m => m.cspImpactOfComputingPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-impact-of-computing-part3').then(m => m.cspImpactOfComputingPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-impact-of-computing-part4').then(m => m.cspImpactOfComputingPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-impact-of-computing-part5').then(m => m.cspImpactOfComputingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-impact-of-computing-part6').then(m => m.cspImpactOfComputingPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-impact-of-computing-part7').then(m => m.cspImpactOfComputingPart7Data) }
    ],
  },
  'csp-safe-computing': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-safe-computing-part1').then(m => m.cspSafeComputingPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-safe-computing-part2').then(m => m.cspSafeComputingPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-safe-computing-part3').then(m => m.cspSafeComputingPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-safe-computing-part4').then(m => m.cspSafeComputingPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-safe-computing-part5').then(m => m.cspSafeComputingPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-safe-computing-part6').then(m => m.cspSafeComputingPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-safe-computing-part7').then(m => m.cspSafeComputingPart7Data) }
    ],
  },
  'csp-social-ethical-impacts': {
    completionDestination: 'complete',
    parts: [
      { title: 'Core Concepts', loader: () => import('./csp-social-ethical-impacts-part1').then(m => m.cspSocialEthicalImpactsPart1Data) },
      { title: 'Key Processes', loader: () => import('./csp-social-ethical-impacts-part2').then(m => m.cspSocialEthicalImpactsPart2Data) },
      { title: 'Patterns & Examples', loader: () => import('./csp-social-ethical-impacts-part3').then(m => m.cspSocialEthicalImpactsPart3Data) },
      { title: 'Connections & Interactions', loader: () => import('./csp-social-ethical-impacts-part4').then(m => m.cspSocialEthicalImpactsPart4Data) },
      { title: 'Change Over Time', loader: () => import('./csp-social-ethical-impacts-part5').then(m => m.cspSocialEthicalImpactsPart5Data) },
      { title: 'Problem-Solving Workshop', loader: () => import('./csp-social-ethical-impacts-part6').then(m => m.cspSocialEthicalImpactsPart6Data) },
      { title: 'AP Review', loader: () => import('./csp-social-ethical-impacts-part7').then(m => m.cspSocialEthicalImpactsPart7Data) }
    ],
  },
}

// ---------------------------------------------------------------------------
// Slug alias map: maps correct DB slugs → orphan registry slugs
// This recovers hand-crafted interactive lessons that were registered
// under a slightly different slug naming convention.
// ---------------------------------------------------------------------------
const slugAliases: Record<string, string> = {
  // AP Statistics — wire CED-aligned topic slugs to existing interactive lessons
  // Unit 1: Exploring One-Variable Data
  'types-data-sampling': 'exploratory-data-apstats',
  'displaying-distributions-graphs': 'exploratory-data-apstats',
  'describing-distributions': 'describing-distributions-apstats',
  'measures-of-center': 'exploratory-data-apstats',
  'measures-of-spread': 'exploratory-data-apstats',
  'normal-distributions': 'normal-distribution-apstats',
  // Unit 2: Exploring Two-Variable Data
  'scatterplots-correlation': 'linear-regression-apstats',
  'least-squares-regression': 'linear-regression-apstats',
  'residuals-residual-plots': 'linear-regression-apstats',
  'coefficient-determination': 'linear-regression-apstats',
  'transformations-linearity': 'linear-regression-apstats',
  // Unit 3: Collecting Data
  'sampling-methods': 'collecting-data-apstats',
  'observational-vs-experiments': 'experimental-design-apstats',
  'experimental-design': 'experimental-design-apstats',
  'bias-sampling-surveys': 'collecting-data-apstats',
  // Unit 4: Probability, Random Variables & Distributions
  'basic-probability-rules': 'probability-rules-apstats',
  'conditional-probability': 'probability-rules-apstats',
  'independence': 'probability-rules-apstats',
  'discrete-random-variables': 'discrete-random-variables-apstats',
  'mean-sd-random-variables': 'discrete-random-variables-apstats',
  'combining-random-variables': 'discrete-random-variables-apstats',
  'binomial-distribution': 'binomial-geometric-apstats',
  'geometric-distribution': 'binomial-geometric-apstats',
  'continuous-random-variables': 'probability-distributions-apstats',
  // Unit 5: Sampling Distributions
  'sampling-distributions': 'sampling-distributions-apstats',
  'central-limit-theorem': 'sampling-distributions-apstats',
  'sampling-distribution-sample-mean': 'sampling-distributions-apstats',
  'sampling-distribution-sample-proportion': 'sampling-distributions-apstats',
  // Unit 6: Inference for Categorical Data — Proportions
  'ci-proportions': 'proportions-inference-apstats',
  'tests-proportions': 'proportions-inference-apstats',
  'two-sample-proportions': 'comparing-populations-apstats',
  // Unit 7: Inference for Quantitative Data — Means
  'hypothesis-testing-framework': 'hypothesis-testing-apstats',
  'type-errors': 'type-errors-power-apstats',
  'ci-means': 'means-inference-apstats',
  'interpreting-ci': 'confidence-intervals-apstats',
  'tests-means': 'means-inference-apstats',
  'paired-data': 'comparing-populations-apstats',
  'two-sample-means': 'comparing-populations-apstats',
  // Unit 8: Inference for Categorical Data — Chi-Square
  'chi-square-tests': 'chi-square-tests-apstats',
  'chi-square-independence-homogeneity': 'chi-square-tests-apstats',
  // Unit 9: Inference for Quantitative Data — Slopes
  'inference-regression': 'inference-regression-apstats',
  // AP Biology
  'cell-organelles': 'cell-structure-organelles',
  'cell-membrane-transport': 'membrane-transport',
  'cell-signaling': 'cell-communication-signaling',
  'meiosis': 'meiosis-genetic-diversity',
  'translation': 'transcription-translation',
  'transcription-rna-processing': 'transcription-translation',
  'natural-selection': 'natural-selection-adaptation',
  'community-ecology': 'population-community-ecology',
  'water-properties': 'water-properties-biochemistry',
  // Other AP Bio aliases pointing to existing hand-crafted lessons
  'enzymes-metabolism': 'enzyme-structure-function',
  'enzyme-kinetics': 'enzyme-structure-function',
  'prokaryotic-eukaryotic-cells': 'cell-structure-organelles',
  'population-ecology': 'population-community-ecology',
  'ecosystems-energy': 'population-community-ecology',
  'population-dynamics': 'population-community-ecology',
  'speciation': 'speciation-macroevolution',
  'phylogeny-classification': 'speciation-macroevolution',
  'chromosomal-inheritance': 'chromosomal-inheritance-patterns',
  // SAT Prep
  'sat-quadratic-equations': 'sat-quadratic-equations-sat',
  'sat-exponents-radicals': 'sat-exponents-radicals-sat',
  'sat-complex-numbers': 'sat-complex-numbers-sat',
  'sat-grammar-conventions': 'sat-grammar-conventions-sat',
  'sat-punctuation': 'sat-punctuation-sat',
  'sat-punctuation-commas-semicolons': 'sat-punctuation-commas-semicolons-sat',
  'sat-ratios-proportions-percents': 'sat-ratios-proportions-sat',
  'sat-exponential-functions': 'sat-exponential-functions-sat',
  'sat-circles': 'sat-circles-trig-sat',
  'sat-linear-equations-inequalities': 'sat-linear-equations-sat',
  'sat-statistics-data-interpretation': 'sat-data-statistics-sat',
  'sat-reading-comprehension': 'sat-reading-evidence-sat',
  'sat-functions': 'sat-functions-graphs-sat',
  'sat-geometry-trigonometry': 'sat-geometry-angles-sat',
  'sat-word-problems': 'sat-word-problems-sat',
  'sat-passport-advanced-math': 'sat-passport-advanced-math-sat',
  'sat-problem-solving-data': 'sat-problem-solving-data-sat',
  'sat-calculator-strategy': 'sat-calculator-strategy-sat',
  'sat-reading-writing-strategy': 'sat-reading-writing-strategy-sat',
  'sat-test-day-strategy': 'sat-test-day-strategy-sat',
  'sat-expression-ideas': 'sat-expression-ideas-sat',
  'sat-polynomials-factoring': 'sat-polynomials-factoring-sat',
  // ACT Prep
  'act-statistics-probability': 'act-statistics-probability-act',
  'act-rhetorical-skills': 'act-english-rhetorical-act',
  'act-data-representation': 'act-science-data-act',
  'act-reading-strategies': 'act-reading-strategy-act',
  'act-pre-algebra-elementary': 'act-pre-algebra-basics-act',
  'act-algebra-functions': 'act-algebra-equations-act',
  'act-geometry-trigonometry': 'act-plane-geometry-act',
  // AP Precalculus
  'polynomial-functions-end-behavior-precalc': 'polynomial-functions-precalc',
  'logarithmic-functions-equations-precalc': 'logarithmic-functions-precalc',
  'trigonometric-identities': 'trigonometric-identities-precalc',
}

function resolveSlug(topicSlug: string): string {
  return slugAliases[topicSlug] ?? topicSlug
}

export function getInteractiveTopicConfig(topicSlug: string): InteractiveTopicConfig | null {
  const resolved = resolveSlug(topicSlug)
  return interactiveLessonRegistry[resolved] ?? null
}

/** Get the parts array for a specific variant (falls back to v1 if variant not found) */
export function getVariantParts(topicSlug: string, variant: number = 1): InteractiveTopicConfig['parts'] | null {
  const config = getInteractiveTopicConfig(topicSlug)
  if (!config) return null
  if (variant <= 1) return config.parts
  return config.variants?.[variant] ?? config.parts
}

/** Get the total number of available variants for a topic */
export function getTopicVariantCount(topicSlug: string): number {
  const config = getInteractiveTopicConfig(topicSlug)
  if (!config) return 1
  const variantKeys = config.variants ? Object.keys(config.variants).map(Number) : []
  return 1 + variantKeys.length // variant 1 (default) + explicit variants
}

export function hasInteractiveLesson(topicSlug: string): boolean {
  const resolved = resolveSlug(topicSlug)
  return resolved in interactiveLessonRegistry
}

export function getAllInteractiveSlugs(): string[] {
  return Object.keys(interactiveLessonRegistry)
}

export async function getInteractiveLessonData(topicSlug: string, part: number, variant: number = 1): Promise<LessonData | null> {
  const parts = getVariantParts(topicSlug, variant)
  if (!parts) return null
  const partConfig = parts[part - 1]
  if (!partConfig) return null
  return partConfig.loader()
}
