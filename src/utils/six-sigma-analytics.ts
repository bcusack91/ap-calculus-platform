/**
 * Six Sigma Statistical Process Control for Learning Analytics
 * 
 * This module implements Six Sigma methodologies adapted for educational data:
 * - DMAIC (Define, Measure, Analyze, Improve, Control)
 * - Control Charts (X-bar, R charts for performance tracking)
 * - DPMO (Defects Per Million Opportunities)
 * - Process Capability (Cp, Cpk)
 * - Pareto Analysis (80/20 rule for error types)
 */

export interface PerformanceDataPoint {
  timestamp: Date
  isCorrect: boolean
  problemType: string
  timeToAnswer: number
  attemptNumber: number
  errorType?: string
  errorCategory?: string
  hintsUsed: number
}

export interface SixSigmaAnalytics {
  // Control Chart Data
  controlChart: {
    accuracyMean: number
    accuracyStdDev: number
    upperControlLimit: number  // UCL
    lowerControlLimit: number  // LCL
    dataPoints: Array<{ timestamp: Date; accuracy: number; inControl: boolean }>
    outOfControlPoints: number
  }
  
  // DPMO and Sigma Level
  qualityMetrics: {
    totalAttempts: number
    totalErrors: number
    dpmo: number  // Defects Per Million Opportunities
    sigmaLevel: number  // 1-6 sigma
    qualityGrade: string  // 'World Class' (6σ), 'Excellent' (5σ), etc.
  }
  
  // Process Capability
  processCapability: {
    cp: number   // Process Capability
    cpk: number  // Process Capability Index
    interpretation: string
    isCapable: boolean  // Cpk >= 1.33
  }
  
  // Performance by Problem Type
  typeBreakdown: {
    [key: string]: {
      accuracy: number
      dpmo: number
      avgTime: number
      sampleSize: number
      trend: 'improving' | 'stable' | 'declining'
    }
  }
  
  // Root Cause Analysis
  rootCauses: {
    criticalErrors: Array<{
      type: string
      frequency: number
      percentage: number
      impact: 'critical' | 'high' | 'medium' | 'low'
      recommendation: string
    }>
    paretoChart: {
      // 80/20 analysis
      top20PercentErrors: string[]
      percentageOfTotalImpact: number
    }
  }
  
  // Recommendations
  improvements: {
    priority: 'critical' | 'high' | 'medium' | 'low'
    focusAreas: string[]
    estimatedPracticeTime: number  // minutes
    confidenceLevel: number  // 0-1
    nextSteps: string[]
  }
}

/**
 * Calculate control chart statistics (X-bar and R chart)
 */
export function calculateControlChart(
  data: PerformanceDataPoint[],
  windowSize: number = 20
): SixSigmaAnalytics['controlChart'] {
  if (data.length === 0) {
    return {
      accuracyMean: 0,
      accuracyStdDev: 0,
      upperControlLimit: 1,
      lowerControlLimit: 0,
      dataPoints: [],
      outOfControlPoints: 0
    }
  }
  
  // Calculate rolling accuracy
  const rollingAccuracy = calculateRollingAccuracy(data, windowSize)

  // Guard: with fewer points than windowSize, rollingAccuracy is empty — return defined defaults instead of dividing by zero (NaN mean/stdDev)
  if (rollingAccuracy.length === 0) {
    return {
      accuracyMean: 0,
      accuracyStdDev: 0,
      upperControlLimit: 1,
      lowerControlLimit: 0,
      dataPoints: [],
      outOfControlPoints: 0
    }
  }

  // Calculate mean and standard deviation
  const accuracies = rollingAccuracy.map(d => d.accuracy)
  const mean = accuracies.reduce((sum, val) => sum + val, 0) / accuracies.length
  const variance = accuracies.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / accuracies.length
  const stdDev = Math.sqrt(variance)
  
  // Control limits (3-sigma)
  const ucl = Math.min(1.0, mean + 3 * stdDev)
  const lcl = Math.max(0.0, mean - 3 * stdDev)
  
  // Check for out-of-control points
  const dataPoints = rollingAccuracy.map(point => ({
    ...point,
    inControl: point.accuracy >= lcl && point.accuracy <= ucl
  }))
  
  const outOfControlPoints = dataPoints.filter(p => !p.inControl).length
  
  return {
    accuracyMean: mean,
    accuracyStdDev: stdDev,
    upperControlLimit: ucl,
    lowerControlLimit: lcl,
    dataPoints,
    outOfControlPoints
  }
}

/**
 * Calculate DPMO (Defects Per Million Opportunities) and Sigma Level
 */
export function calculateDPMO(
  totalAttempts: number,
  totalErrors: number
): SixSigmaAnalytics['qualityMetrics'] {
  if (totalAttempts === 0) {
    return {
      totalAttempts: 0,
      totalErrors: 0,
      dpmo: 0,
      sigmaLevel: 0,
      qualityGrade: 'Insufficient Data'
    }
  }
  
  const dpmo = (totalErrors / totalAttempts) * 1_000_000
  const sigmaLevel = calculateSigmaLevel(dpmo)
  const qualityGrade = getSigmaGrade(sigmaLevel)
  
  return {
    totalAttempts,
    totalErrors,
    dpmo,
    sigmaLevel,
    qualityGrade
  }
}

/**
 * Convert DPMO to Sigma Level using standard table
 */
function calculateSigmaLevel(dpmo: number): number {
  // Standard Six Sigma conversion table
  const sigmaTable = [
    { dpmo: 691462, sigma: 1.0 },
    { dpmo: 308538, sigma: 2.0 },
    { dpmo: 66807, sigma: 3.0 },
    { dpmo: 6210, sigma: 4.0 },
    { dpmo: 233, sigma: 5.0 },
    { dpmo: 3.4, sigma: 6.0 }
  ]
  
  for (let i = 0; i < sigmaTable.length; i++) {
    if (dpmo >= sigmaTable[i].dpmo) {
      return sigmaTable[i].sigma
    }
  }
  
  return 6.0 // Beyond 6 sigma
}

/**
 * Get quality grade based on sigma level
 */
function getSigmaGrade(sigma: number): string {
  if (sigma >= 6) return '🌟 World Class (6σ)'
  if (sigma >= 5) return '⭐ Excellent (5σ)'
  if (sigma >= 4) return '✅ Good (4σ)'
  if (sigma >= 3) return '📊 Average (3σ)'
  if (sigma >= 2) return '⚠️ Below Average (2σ)'
  return '🔴 Needs Improvement (1σ)'
}

/**
 * Calculate Process Capability (Cp and Cpk)
 * Measures how well the process meets specification limits
 */
export function calculateProcessCapability(
  data: PerformanceDataPoint[],
  lowerSpec: number = 0.70,
  upperSpec: number = 1.00
): SixSigmaAnalytics['processCapability'] {
  if (data.length < 30) {
    return {
      cp: 0,
      cpk: 0,
      interpretation: 'Insufficient data (need at least 30 attempts)',
      isCapable: false
    }
  }
  
  const accuracies = data.map(d => d.isCorrect ? 1 : 0)
  const mean = accuracies.reduce((sum: number, val) => sum + val, 0) / accuracies.length
  const variance = accuracies.reduce((sum: number, val) => sum + Math.pow(val - mean, 2), 0) / accuracies.length
  const stdDev = Math.sqrt(variance)

  // Guard: zero variation (all attempts identical) makes Cp/Cpk divide by zero (Infinity) — return defined 0 instead
  if (stdDev === 0) {
    return {
      cp: 0,
      cpk: 0,
      interpretation: 'No variation in results — capability undefined',
      isCapable: false
    }
  }

  // Cp: Potential capability (assumes process is centered)
  const cp = (upperSpec - lowerSpec) / (6 * stdDev)

  // Cpk: Actual capability (accounts for process centering)
  const cpupper = (upperSpec - mean) / (3 * stdDev)
  const cplower = (mean - lowerSpec) / (3 * stdDev)
  const cpk = Math.min(cpupper, cplower)
  
  const interpretation = interpretCapability(cpk)
  const isCapable = cpk >= 1.33  // Industry standard for capable process
  
  return {
    cp,
    cpk,
    interpretation,
    isCapable
  }
}

function interpretCapability(cpk: number): string {
  if (cpk >= 2.0) return '🌟 Excellent - Process highly capable'
  if (cpk >= 1.33) return '✅ Good - Process capable'
  if (cpk >= 1.0) return '⚠️ Marginal - Process barely capable'
  return '🔴 Inadequate - Process not capable'
}

/**
 * Perform Pareto Analysis (80/20 rule)
 * Identify which 20% of error types cause 80% of problems
 */
export function performParetoAnalysis(
  data: PerformanceDataPoint[]
): SixSigmaAnalytics['rootCauses'] {
  const errors = data.filter(d => !d.isCorrect && d.errorType)
  
  if (errors.length === 0) {
    return {
      criticalErrors: [],
      paretoChart: {
        top20PercentErrors: [],
        percentageOfTotalImpact: 0
      }
    }
  }
  
  // Count error frequencies
  const errorCounts: { [key: string]: number } = {}
  errors.forEach(e => {
    if (e.errorType) {
      errorCounts[e.errorType] = (errorCounts[e.errorType] || 0) + 1
    }
  })
  
  // Sort by frequency
  const sortedErrors = Object.entries(errorCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([type, freq]) => ({
      type,
      frequency: freq,
      percentage: (freq / errors.length) * 100
    }))
  
  // Calculate cumulative percentage for Pareto
  const criticalErrors = sortedErrors.map(error => {
    return {
      ...error,
      impact: getErrorImpact(error.percentage),
      recommendation: getErrorRecommendation(error.type)
    }
  })
  
  // Find which errors make up 80% of problems
  let total = 0
  const top20PercentErrors: string[] = []
  for (const error of criticalErrors) {
    total += error.percentage
    top20PercentErrors.push(error.type)
    if (total >= 80) break
  }
  
  return {
    criticalErrors,
    paretoChart: {
      top20PercentErrors,
      percentageOfTotalImpact: total
    }
  }
}

function getErrorImpact(percentage: number): 'critical' | 'high' | 'medium' | 'low' {
  if (percentage >= 30) return 'critical'
  if (percentage >= 20) return 'high'
  if (percentage >= 10) return 'medium'
  return 'low'
}

function getErrorRecommendation(errorType: string): string {
  const recommendations: { [key: string]: string } = {
    'sign-error': 'Review sign convention rules and practice problems with negative coefficients',
    'multiplication-error': 'Practice basic multiplication facts and use the FOIL method systematically',
    'factoring-incomplete': 'Always check if each factor can be factored further. Factor out GCF first!',
    'wrong-pattern': 'Review factoring flowchart. Identify problem type before choosing method.',
    'arithmetic-error': 'Slow down and double-check calculations. Use scratch paper.',
    'forgot-gcf': 'ALWAYS factor out GCF first! Make this your automatic first step.',
    'missing-negative': 'Pay special attention to negative signs. Write them clearly.',
  }
  
  return recommendations[errorType] || 'Review this concept and practice similar problems'
}

/**
 * Analyze performance by problem type
 */
export function analyzeByProblemType(
  data: PerformanceDataPoint[]
): SixSigmaAnalytics['typeBreakdown'] {
  const types: { [key: string]: PerformanceDataPoint[] } = {}
  
  data.forEach(d => {
    if (!types[d.problemType]) {
      types[d.problemType] = []
    }
    types[d.problemType].push(d)
  })
  
  const breakdown: SixSigmaAnalytics['typeBreakdown'] = {}
  
  Object.entries(types).forEach(([type, points]) => {
    const correct = points.filter(p => p.isCorrect).length
    const accuracy = correct / points.length
    const errors = points.length - correct
    const dpmo = (errors / points.length) * 1_000_000
    const avgTime = points.reduce((sum, p) => sum + p.timeToAnswer, 0) / points.length / 1000 // convert to seconds
    
    // Determine trend (compare first half vs second half)
    const midpoint = Math.floor(points.length / 2)
    const secondHalfSize = points.length - midpoint
    // Guard: a single data point gives midpoint === 0, so each half-accuracy would divide by zero (NaN) — default to 0 when a half is empty
    const firstHalfAccuracy = midpoint > 0 ? points.slice(0, midpoint).filter(p => p.isCorrect).length / midpoint : 0
    const secondHalfAccuracy = secondHalfSize > 0 ? points.slice(midpoint).filter(p => p.isCorrect).length / secondHalfSize : 0

    let trend: 'improving' | 'stable' | 'declining' = 'stable'
    if (secondHalfAccuracy - firstHalfAccuracy > 0.1) trend = 'improving'
    else if (firstHalfAccuracy - secondHalfAccuracy > 0.1) trend = 'declining'
    
    breakdown[type] = {
      accuracy,
      dpmo,
      avgTime,
      sampleSize: points.length,
      trend
    }
  })
  
  return breakdown
}

/**
 * Generate improvement recommendations based on analytics
 */
export function generateImprovements(
  analytics: Partial<SixSigmaAnalytics>
): SixSigmaAnalytics['improvements'] {
  const { qualityMetrics, typeBreakdown, rootCauses, processCapability } = analytics
  
  // Determine priority
  let priority: 'critical' | 'high' | 'medium' | 'low' = 'medium'
  if (qualityMetrics && qualityMetrics.sigmaLevel < 3) priority = 'critical'
  else if (qualityMetrics && qualityMetrics.sigmaLevel < 4) priority = 'high'
  else if (processCapability && !processCapability.isCapable) priority = 'high'
  
  // Identify focus areas
  const focusAreas: string[] = []
  if (typeBreakdown) {
    Object.entries(typeBreakdown).forEach(([type, metrics]) => {
      if (metrics.accuracy < 0.7 || metrics.trend === 'declining') {
        focusAreas.push(type)
      }
    })
  }
  
  // Add critical errors
  if (rootCauses) {
    rootCauses.criticalErrors
      .filter(e => e.impact === 'critical' || e.impact === 'high')
      .forEach(e => {
        if (!focusAreas.includes(e.type)) {
          focusAreas.push(e.type)
        }
      })
  }
  
  // Estimate practice time needed
  const estimatedPracticeTime = calculatePracticeTime(qualityMetrics?.sigmaLevel || 3, focusAreas.length)
  
  // Confidence level based on sample size
  const totalSamples = qualityMetrics?.totalAttempts || 0
  const confidenceLevel = Math.min(1.0, totalSamples / 50) // Full confidence at 50+ attempts
  
  // Generate next steps
  const nextSteps = generateNextSteps(focusAreas, priority)
  
  return {
    priority,
    focusAreas,
    estimatedPracticeTime,
    confidenceLevel,
    nextSteps
  }
}

function calculatePracticeTime(sigmaLevel: number, focusAreaCount: number): number {
  const baseTime = 15 // minutes per focus area
  const multiplier = sigmaLevel < 3 ? 2 : sigmaLevel < 4 ? 1.5 : 1
  return Math.ceil(focusAreaCount * baseTime * multiplier)
}

function generateNextSteps(focusAreas: string[], priority: string): string[] {
  const steps: string[] = []
  
  if (priority === 'critical') {
    steps.push('🚨 Focus on mastering fundamentals before advancing')
    steps.push('📚 Review lesson materials for ' + focusAreas.slice(0, 2).join(' and '))
  }
  
  if (focusAreas.includes('gcf') || focusAreas.includes('gcf-identify')) {
    steps.push('🔍 Practice GCF identification daily - this is foundational!')
  }
  
  if (focusAreas.length > 3) {
    steps.push('🎯 Concentrate on one problem type at a time')
  }
  
  if (focusAreas.some(area => area.includes('trinomial'))) {
    steps.push('✖️ Review multiplication and work backwards to understand factoring')
  }
  
  steps.push('✅ Verify answers by multiplying factors back together')
  steps.push('⏱️ Aim for both accuracy AND speed improvement')
  
  return steps
}

/**
 * Calculate rolling accuracy over a window
 */
function calculateRollingAccuracy(
  data: PerformanceDataPoint[],
  windowSize: number
): Array<{ timestamp: Date; accuracy: number }> {
  const result: Array<{ timestamp: Date; accuracy: number }> = []
  
  for (let i = windowSize - 1; i < data.length; i++) {
    const window = data.slice(i - windowSize + 1, i + 1)
    const correct = window.filter(d => d.isCorrect).length
    // Guard: avoid divide-by-zero (NaN) if the window is empty (e.g. windowSize <= 0)
    const accuracy = window.length > 0 ? correct / window.length : 0

    result.push({
      timestamp: data[i].timestamp,
      accuracy
    })
  }
  
  return result
}

/**
 * Main function to generate complete Six Sigma analytics
 */
export function generateSixSigmaAnalytics(
  data: PerformanceDataPoint[]
): SixSigmaAnalytics {
  const controlChart = calculateControlChart(data)
  const qualityMetrics = calculateDPMO(
    data.length,
    data.filter(d => !d.isCorrect).length
  )
  const processCapability = calculateProcessCapability(data)
  const typeBreakdown = analyzeByProblemType(data)
  const rootCauses = performParetoAnalysis(data)
  const improvements = generateImprovements({
    qualityMetrics,
    typeBreakdown,
    rootCauses,
    processCapability
  })
  
  return {
    controlChart,
    qualityMetrics,
    processCapability,
    typeBreakdown,
    rootCauses,
    improvements
  }
}
