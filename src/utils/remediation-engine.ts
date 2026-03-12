/**
 * Remediation Engine - "Rework Station" for Learning
 * 
 * Just like in manufacturing where defective products are sent back for rework/reannealing,
 * this system identifies students who need targeted remediation and routes them through
 * a structured rework process before allowing them to continue.
 */

export type ErrorType = 
  | 'sign-error'
  | 'multiplication-error'
  | 'factoring-incomplete'
  | 'forgot-gcf'
  | 'wrong-pattern'
  | 'arithmetic-error'
  | 'missing-negative'
  | 'conceptual-misunderstanding'

export type RemediationLevel = 'light' | 'medium' | 'intensive' | 'foundational'

export interface RemediationPath {
  level: RemediationLevel
  reason: string
  estimatedTime: number // minutes
  steps: RemediationStep[]
  mustComplete: boolean // If true, can't skip this remediation
  preventAdvancement: boolean // If true, blocks moving to next section
}

export interface RemediationStep {
  type: 'video' | 'interactive-demo' | 'guided-practice' | 'mini-quiz' | 'reflection'
  title: string
  content: string
  duration: number // minutes
  required: boolean
  successCriteria?: {
    type: 'quiz-score' | 'time-spent' | 'comprehension-check'
    threshold: number
  }
}

/**
 * Determines if student needs remediation based on error patterns
 */
export function analyzePerformanceForRemediation(
  recentAttempts: Array<{
    isCorrect: boolean
    errorType?: string
    problemType: string
    attemptNumber: number
  }>
): RemediationPath | null {
  const errors = recentAttempts.filter(a => !a.isCorrect)
  
  if (errors.length === 0) return null
  
  // Calculate error rate
  const errorRate = errors.length / recentAttempts.length
  
  // Categorize errors
  const errorCounts: Record<string, number> = {}
  errors.forEach(e => {
    if (e.errorType) {
      errorCounts[e.errorType] = (errorCounts[e.errorType] || 0) + 1
    }
  })
  
  // Find most common error
  const mostCommonError = Object.entries(errorCounts)
    .sort((a, b) => b[1] - a[1])[0]
  
  // Check for multiple attempts on same problem
  const multipleAttempts = recentAttempts.some(a => a.attemptNumber > 1)
  
  // Determine remediation level based on Six Sigma principles
  if (errorRate >= 0.5) {
    // > 50% error rate = Foundational rework needed
    return createFoundationalRemediation(mostCommonError?.[0] as ErrorType)
  } else if (errorRate >= 0.3 || multipleAttempts) {
    // 30-50% error rate or struggling = Intensive rework
    return createIntensiveRemediation(mostCommonError?.[0] as ErrorType)
  } else if (errorRate >= 0.15) {
    // 15-30% error rate = Medium rework
    return createMediumRemediation(mostCommonError?.[0] as ErrorType)
  } else {
    // < 15% error rate = Light touch-up
    return createLightRemediation(mostCommonError?.[0] as ErrorType)
  }
}

/**
 * FOUNDATIONAL REWORK (>50% defect rate)
 * Like completely reprocessing a wafer - start from basics
 */
function createFoundationalRemediation(errorType: ErrorType): RemediationPath {
  const remediationMap: Record<ErrorType, RemediationPath> = {
    'sign-error': {
      level: 'foundational',
      reason: 'Multiple sign convention errors detected. Let\'s rebuild your understanding from the ground up.',
      estimatedTime: 20,
      mustComplete: true,
      preventAdvancement: true,
      steps: [
        {
          type: 'video',
          title: 'Understanding Positive and Negative in Algebra',
          content: '/videos/sign-convention-basics',
          duration: 5,
          required: true
        },
        {
          type: 'interactive-demo',
          title: 'Number Line Practice',
          content: 'Interactive number line showing positive/negative',
          duration: 5,
          required: true
        },
        {
          type: 'guided-practice',
          title: 'Guided Sign Convention Practice',
          content: 'Step-by-step problems with instant feedback',
          duration: 8,
          required: true,
          successCriteria: {
            type: 'quiz-score',
            threshold: 0.9 // Must get 90% to pass
          }
        },
        {
          type: 'mini-quiz',
          title: 'Sign Convention Checkpoint',
          content: '5 questions to verify understanding',
          duration: 2,
          required: true,
          successCriteria: {
            type: 'quiz-score',
            threshold: 0.8
          }
        }
      ]
    },
    'forgot-gcf': {
      level: 'foundational',
      reason: 'You\'re consistently missing the GCF step. This is THE foundation - let\'s master it.',
      estimatedTime: 15,
      mustComplete: true,
      preventAdvancement: true,
      steps: [
        {
          type: 'video',
          title: 'Why GCF ALWAYS Comes First',
          content: '/videos/gcf-importance',
          duration: 4,
          required: true
        },
        {
          type: 'interactive-demo',
          title: 'GCF Detective Game',
          content: 'Find the GCF in various polynomials',
          duration: 6,
          required: true
        },
        {
          type: 'guided-practice',
          title: 'GCF First - Every Time',
          content: 'Practice checking for GCF on 10 problems',
          duration: 5,
          required: true,
          successCriteria: {
            type: 'quiz-score',
            threshold: 1.0 // Must get 100% - this is critical
          }
        }
      ]
    },
    'multiplication-error': {
      level: 'foundational',
      reason: 'Basic multiplication issues are preventing factoring success. Let\'s strengthen this foundation.',
      estimatedTime: 12,
      mustComplete: true,
      preventAdvancement: true,
      steps: [
        {
          type: 'interactive-demo',
          title: 'Multiplication Review',
          content: 'Interactive multiplication practice',
          duration: 5,
          required: true
        },
        {
          type: 'guided-practice',
          title: 'FOIL Method Mastery',
          content: 'Practice multiplying binomials',
          duration: 7,
          required: true,
          successCriteria: {
            type: 'quiz-score',
            threshold: 0.9
          }
        }
      ]
    },
    'factoring-incomplete': {
      level: 'foundational',
      reason: 'You\'re stopping too early. Let\'s learn to recognize when factoring is complete.',
      estimatedTime: 18,
      mustComplete: true,
      preventAdvancement: true,
      steps: [
        {
          type: 'video',
          title: 'Complete Factoring Checklist',
          content: '/videos/complete-factoring',
          duration: 5,
          required: true
        },
        {
          type: 'interactive-demo',
          title: 'Is It Fully Factored?',
          content: 'Interactive quiz checking if expressions are fully factored',
          duration: 6,
          required: true
        },
        {
          type: 'guided-practice',
          title: 'Factor Completely Practice',
          content: 'Practice with verification step',
          duration: 7,
          required: true,
          successCriteria: {
            type: 'quiz-score',
            threshold: 0.85
          }
        }
      ]
    },
    'wrong-pattern': {
      level: 'foundational',
      reason: 'Pattern recognition needs work. Let\'s build your factoring decision tree.',
      estimatedTime: 20,
      mustComplete: true,
      preventAdvancement: true,
      steps: [
        {
          type: 'video',
          title: 'Factoring Flowchart',
          content: '/videos/factoring-decision-tree',
          duration: 6,
          required: true
        },
        {
          type: 'interactive-demo',
          title: 'Pattern Recognition Training',
          content: 'Interactive pattern matching game',
          duration: 8,
          required: true
        },
        {
          type: 'guided-practice',
          title: 'Choose the Right Method',
          content: 'Practice identifying which method to use',
          duration: 6,
          required: true,
          successCriteria: {
            type: 'quiz-score',
            threshold: 0.9
          }
        }
      ]
    },
    'arithmetic-error': {
      level: 'foundational',
      reason: 'Calculation errors are holding you back. Let\'s slow down and build accuracy.',
      estimatedTime: 10,
      mustComplete: true,
      preventAdvancement: true,
      steps: [
        {
          type: 'interactive-demo',
          title: 'Careful Calculation Practice',
          content: 'Slow, methodical arithmetic practice',
          duration: 6,
          required: true
        },
        {
          type: 'reflection',
          title: 'Accuracy Strategy',
          content: 'Develop your personal accuracy checklist',
          duration: 4,
          required: true,
          successCriteria: {
            type: 'time-spent',
            threshold: 4 // Must spend at least 4 minutes
          }
        }
      ]
    },
    'missing-negative': {
      level: 'foundational',
      reason: 'Negative signs are getting lost. Let\'s make them impossible to miss.',
      estimatedTime: 12,
      mustComplete: true,
      preventAdvancement: true,
      steps: [
        {
          type: 'video',
          title: 'Tracking Negative Signs',
          content: '/videos/negative-sign-tracking',
          duration: 4,
          required: true
        },
        {
          type: 'guided-practice',
          title: 'Highlight the Negatives',
          content: 'Practice with emphasis on tracking signs',
          duration: 8,
          required: true,
          successCriteria: {
            type: 'quiz-score',
            threshold: 0.9
          }
        }
      ]
    },
    'conceptual-misunderstanding': {
      level: 'foundational',
      reason: 'Core concept confusion detected. Let\'s rebuild your mental model.',
      estimatedTime: 25,
      mustComplete: true,
      preventAdvancement: true,
      steps: [
        {
          type: 'video',
          title: 'What IS Factoring?',
          content: '/videos/factoring-concept',
          duration: 8,
          required: true
        },
        {
          type: 'interactive-demo',
          title: 'Visual Factoring',
          content: 'Area models and visual representations',
          duration: 10,
          required: true
        },
        {
          type: 'guided-practice',
          title: 'Concept Check Practice',
          content: 'Practice with conceptual explanations',
          duration: 7,
          required: true,
          successCriteria: {
            type: 'quiz-score',
            threshold: 0.85
          }
        }
      ]
    }
  }
  
  return remediationMap[errorType] || remediationMap['conceptual-misunderstanding']
}

/**
 * INTENSIVE REWORK (30-50% defect rate)
 * Like thermal annealing - significant rework needed
 */
function createIntensiveRemediation(errorType: ErrorType): RemediationPath {
  const baseSteps = createFoundationalRemediation(errorType).steps
  
  // Intensive is similar to foundational but slightly shorter
  return {
    level: 'intensive',
    reason: 'Significant errors detected. Targeted rework required before continuing.',
    estimatedTime: 12,
    mustComplete: true,
    preventAdvancement: true,
    steps: baseSteps.slice(0, 2).concat([
      {
        type: 'guided-practice',
        title: 'Targeted Practice',
        content: 'Focus on your specific error pattern',
        duration: 6,
        required: true,
        successCriteria: {
          type: 'quiz-score',
          threshold: 0.85
        }
      }
    ])
  }
}

/**
 * MEDIUM REWORK (15-30% defect rate)
 * Like polishing/cleaning - needs attention but not complete rework
 */
function createMediumRemediation(errorType: ErrorType): RemediationPath {
  const errorGuidance: Record<ErrorType, { title: string; content: string }> = {
    'sign-error': {
      title: 'Sign Convention Quick Review',
      content: 'Review sign rules and practice 3 problems'
    },
    'forgot-gcf': {
      title: 'GCF Reminder',
      content: 'Remember: ALWAYS check for GCF first! Practice 3 times.'
    },
    'multiplication-error': {
      title: 'Multiplication Check',
      content: 'Review FOIL and verify by multiplying back'
    },
    'factoring-incomplete': {
      title: 'Complete Factoring Check',
      content: 'Review: Can any factor be factored further?'
    },
    'wrong-pattern': {
      title: 'Pattern Recognition Review',
      content: 'Review factoring flowchart'
    },
    'arithmetic-error': {
      title: 'Slow Down',
      content: 'Take your time and double-check calculations'
    },
    'missing-negative': {
      title: 'Track Those Negatives',
      content: 'Circle or highlight negative signs as you work'
    },
    'conceptual-misunderstanding': {
      title: 'Concept Review',
      content: 'Review the core concept and try again'
    }
  }
  
  const guidance = errorGuidance[errorType] || errorGuidance['conceptual-misunderstanding']
  
  return {
    level: 'medium',
    reason: 'Error pattern detected. Quick review recommended before continuing.',
    estimatedTime: 8,
    mustComplete: true,
    preventAdvancement: false, // Can skip but strongly encouraged
    steps: [
      {
        type: 'interactive-demo',
        title: guidance.title,
        content: guidance.content,
        duration: 4,
        required: true
      },
      {
        type: 'guided-practice',
        title: 'Quick Practice',
        content: '3 targeted problems',
        duration: 4,
        required: true,
        successCriteria: {
          type: 'quiz-score',
          threshold: 0.67 // 2 out of 3
        }
      }
    ]
  }
}

/**
 * LIGHT TOUCH-UP (<15% defect rate)
 * Like final inspection - just a reminder
 */
function createLightRemediation(errorType: ErrorType): RemediationPath {
  const tips: Record<ErrorType, string> = {
    'sign-error': '💡 Tip: Double-check your signs! Draw a number line if needed.',
    'forgot-gcf': '💡 Tip: Always ask "Can I factor out anything?" FIRST.',
    'multiplication-error': '💡 Tip: Verify by multiplying your factors back together.',
    'factoring-incomplete': '💡 Tip: Check each factor - can it be factored more?',
    'wrong-pattern': '💡 Tip: Count the terms first, then choose your method.',
    'arithmetic-error': '💡 Tip: Slow down and show your work step-by-step.',
    'missing-negative': '💡 Tip: Circle negative signs to track them!',
    'conceptual-misunderstanding': '💡 Tip: Remember what factoring means - reverse of multiplying.'
  }
  
  return {
    level: 'light',
    reason: 'Small error detected. Here\'s a quick reminder.',
    estimatedTime: 2,
    mustComplete: false,
    preventAdvancement: false,
    steps: [
      {
        type: 'reflection',
        title: 'Quick Tip',
        content: tips[errorType] || tips['conceptual-misunderstanding'],
        duration: 2,
        required: false
      }
    ]
  }
}

/**
 * Check if student has passed remediation and can proceed
 */
export function hasPassedRemediation(
  remediationPath: RemediationPath,
  completedSteps: Array<{
    stepIndex: number
    score?: number
    timeSpent?: number
  }>
): boolean {
  // Check if all required steps are completed
  const requiredSteps = remediationPath.steps
    .map((step, index) => ({ step, index }))
    .filter(({ step }) => step.required)
  
  for (const { step, index } of requiredSteps) {
    const completion = completedSteps.find(c => c.stepIndex === index)
    
    if (!completion) return false
    
    if (step.successCriteria) {
      switch (step.successCriteria.type) {
        case 'quiz-score':
          if (!completion.score || completion.score < step.successCriteria.threshold) {
            return false
          }
          break
        case 'time-spent':
          if (!completion.timeSpent || completion.timeSpent < step.successCriteria.threshold) {
            return false
          }
          break
      }
    }
  }
  
  return true
}

/**
 * Calculate "Quality Gate" - determines if student can advance to next section
 * Based on Six Sigma principles: must meet specification limits
 */
export function calculateQualityGate(
  recentPerformance: Array<{ isCorrect: boolean }>,
  currentSection: number
): {
  canAdvance: boolean
  reason: string
  requiredAccuracy: number
  currentAccuracy: number
} {
  const accuracy = recentPerformance.filter(p => p.isCorrect).length / recentPerformance.length
  
  // Progressive quality gates - standards increase as you advance
  const qualityGates = [
    { section: 1, requiredAccuracy: 0.60, name: 'Basic' },      // Part 1: 60% (learning)
    { section: 2, requiredAccuracy: 0.70, name: 'Developing' }, // Part 2: 70%
    { section: 3, requiredAccuracy: 0.75, name: 'Competent' },  // Part 3: 75%
    { section: 4, requiredAccuracy: 0.80, name: 'Proficient' }, // Part 4: 80%
    { section: 5, requiredAccuracy: 0.85, name: 'Advanced' },   // Part 5: 85%
    { section: 6, requiredAccuracy: 0.90, name: 'Mastery' }     // Part 6: 90%
  ]
  
  const gate = qualityGates[Math.min(currentSection - 1, qualityGates.length - 1)]
  const canAdvance = accuracy >= gate.requiredAccuracy
  
  return {
    canAdvance,
    reason: canAdvance 
      ? `✅ ${gate.name} level achieved! Ready to advance.`
      : `⚠️ Need ${(gate.requiredAccuracy * 100).toFixed(0)}% accuracy to reach ${gate.name} level. Currently at ${(accuracy * 100).toFixed(0)}%.`,
    requiredAccuracy: gate.requiredAccuracy,
    currentAccuracy: accuracy
  }
}
