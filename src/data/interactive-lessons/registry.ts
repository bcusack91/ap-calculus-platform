import { unitCircleLessonData, unitCircleAnglesLessonData, unitCircleConceptLessonData } from '@/data/interactive-lessons/unit-circle'
import { fullUnitCircleLessonData } from '@/data/interactive-lessons/full-unit-circle'
import { factoringPart1GCFData } from '@/data/interactive-lessons/factoring-part1-gcf'
import { factoringPart2DifferenceOfSquaresData } from '@/data/interactive-lessons/factoring-part2-difference-of-squares'
import { factoringPart3SimpleTrinomialsData } from '@/data/interactive-lessons/factoring-part3-simple-trinomials'
import { factoringPart4ComplexTrinomialsData } from '@/data/interactive-lessons/factoring-part4-complex-trinomials'
import { factoringPart5SpecialPatternsData } from '@/data/interactive-lessons/factoring-part5-special-patterns'
import { factoringPart6MixedPracticeData } from '@/data/interactive-lessons/factoring-part6-mixed-practice'
import { reflectionRefractionPart1Data } from '@/data/interactive-lessons/reflection-refraction-part1-intro'
import { reflectionRefractionPart2LearningJourneyData } from '@/data/interactive-lessons/reflection-refraction-part2-learning-journey'
import { reflectionRefractionPart2Data as reflectionRefractionPart3Data } from '@/data/interactive-lessons/reflection-refraction-part2-sign-convention'
import { reflectionRefractionPart3Data as reflectionRefractionPart4Data } from '@/data/interactive-lessons/reflection-refraction-part3-reflection'
import { reflectionRefractionPart4Data as reflectionRefractionPart5Data } from '@/data/interactive-lessons/reflection-refraction-part4-index'
import { reflectionRefractionPart5Data as reflectionRefractionPart6Data } from '@/data/interactive-lessons/reflection-refraction-part5-snell-tir'
import { reflectionRefractionPart6Data as reflectionRefractionPart7Data } from '@/data/interactive-lessons/reflection-refraction-part6-tir'
import { reflectionRefractionPart7Data as reflectionRefractionPart8Data } from '@/data/interactive-lessons/reflection-refraction-part7-dispersion'
import { physics2ElectrostaticsPart1Data } from '@/data/interactive-lessons/physics2-electrostatics-part1'
import { physics2ElectrostaticsPart2Data } from '@/data/interactive-lessons/physics2-electrostatics-part2'
import { physics2ElectrostaticsPart3Data } from '@/data/interactive-lessons/physics2-electrostatics-part3'
import { physics2ElectrostaticsPart4Data } from '@/data/interactive-lessons/physics2-electrostatics-part4'
import { physics2ElectrostaticsPart5Data } from '@/data/interactive-lessons/physics2-electrostatics-part5'
import { physics2ElectrostaticsPart6Data } from '@/data/interactive-lessons/physics2-electrostatics-part6'
import { physics2ElectrostaticsPart7Data } from '@/data/interactive-lessons/physics2-electrostatics-part7'
import { physics2ElectricFieldsPart1Data } from '@/data/interactive-lessons/physics2-electric-fields-part1'
import { physics2ElectricFieldsPart2Data } from '@/data/interactive-lessons/physics2-electric-fields-part2'
import { physics2ElectricFieldsPart3Data } from '@/data/interactive-lessons/physics2-electric-fields-part3'
import { physics2ElectricFieldsPart4Data } from '@/data/interactive-lessons/physics2-electric-fields-part4'
import { physics2ElectricFieldsPart5Data } from '@/data/interactive-lessons/physics2-electric-fields-part5'
import { physics2ElectricFieldsPart6Data } from '@/data/interactive-lessons/physics2-electric-fields-part6'
import { physics2ElectricFieldsPart7Data } from '@/data/interactive-lessons/physics2-electric-fields-part7'

type LessonData = {
  topicSlug: string
  sections: any[]
}

interface InteractivePartConfig {
  title: string
  data: LessonData
}

export interface InteractiveTopicConfig {
  parts: InteractivePartConfig[]
  completionDestination?: 'competitive' | 'complete'
  practiceModeParts?: number[]
}

export const interactiveLessonRegistry: Record<string, InteractiveTopicConfig> = {
  'the-unit-circle': {
    completionDestination: 'competitive',
    practiceModeParts: [1, 2],
    parts: [
      { title: 'Counting Method', data: unitCircleLessonData },
      { title: 'Angles & Tables', data: unitCircleAnglesLessonData },
      { title: 'What Is the Unit Circle?', data: unitCircleConceptLessonData },
      { title: 'Complete Unit Circle', data: fullUnitCircleLessonData },
    ],
  },
  'factoring-algebra1': {
    completionDestination: 'complete',
    parts: [
      { title: 'GCF', data: factoringPart1GCFData },
      { title: 'Difference of Squares', data: factoringPart2DifferenceOfSquaresData },
      { title: 'Simple Trinomials', data: factoringPart3SimpleTrinomialsData },
      { title: 'Complex Trinomials', data: factoringPart4ComplexTrinomialsData },
      { title: 'Special Patterns', data: factoringPart5SpecialPatternsData },
      { title: 'Mixed Practice', data: factoringPart6MixedPracticeData },
    ],
  },
  'reflection-refraction': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction', data: reflectionRefractionPart1Data },
      { title: 'Learning Journey', data: reflectionRefractionPart2LearningJourneyData },
      { title: 'Sign Convention', data: reflectionRefractionPart3Data },
      { title: 'Law of Reflection', data: reflectionRefractionPart4Data },
      { title: 'Index of Refraction', data: reflectionRefractionPart5Data },
      { title: "Snell's Law", data: reflectionRefractionPart6Data },
      { title: 'Total Internal Reflection', data: reflectionRefractionPart7Data },
      { title: 'Dispersion', data: reflectionRefractionPart8Data },
    ],
  },
  'electric-charge-coulombs-law': {
    completionDestination: 'competitive',
    parts: [
      { title: 'Introduction & Charge', data: physics2ElectrostaticsPart1Data },
      { title: "Coulomb's Law", data: physics2ElectrostaticsPart2Data },
      { title: 'Problem Solving', data: physics2ElectrostaticsPart3Data },
      { title: 'Conductors & Charging', data: physics2ElectrostaticsPart4Data },
      { title: 'Conservation & Quantization', data: physics2ElectrostaticsPart5Data },
      { title: 'Superposition', data: physics2ElectrostaticsPart6Data },
      { title: 'Synthesis & AP Strategies', data: physics2ElectrostaticsPart7Data },
    ],
  },
  'electric-fields-potential': {
    completionDestination: 'competitive',
    parts: [
      { title: 'What Is an Electric Field?', data: physics2ElectricFieldsPart1Data },
      { title: 'Field Superposition', data: physics2ElectricFieldsPart2Data },
      { title: 'Field Lines & Visualization', data: physics2ElectricFieldsPart3Data },
      { title: 'Electric Potential (Voltage)', data: physics2ElectricFieldsPart4Data },
      { title: 'Potential Energy & Work', data: physics2ElectricFieldsPart5Data },
      { title: 'Equipotentials & E–V Relationship', data: physics2ElectricFieldsPart6Data },
      { title: 'Capacitors & Synthesis', data: physics2ElectricFieldsPart7Data },
    ],
  },
}

export function getInteractiveTopicConfig(topicSlug: string): InteractiveTopicConfig | null {
  return interactiveLessonRegistry[topicSlug] ?? null
}

export function hasInteractiveLesson(topicSlug: string): boolean {
  return topicSlug in interactiveLessonRegistry
}

export function getInteractiveLessonData(topicSlug: string, part: number): LessonData | null {
  const config = interactiveLessonRegistry[topicSlug]
  if (!config) return null
  return config.parts[part - 1]?.data ?? null
}
