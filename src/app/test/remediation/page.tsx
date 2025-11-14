'use client'

import { useState } from 'react'
import RemediationStation from '@/components/RemediationStation'
import QualityGate from '@/components/QualityGate'
import { 
  analyzePerformanceForRemediation,
  calculateQualityGate,
  RemediationPath
} from '@/utils/remediation-engine'

export default function RemediationTestPage() {
  const [showRemediation, setShowRemediation] = useState(false)
  const [showQualityGate, setShowQualityGate] = useState(false)
  const [remediationPath, setRemediationPath] = useState<RemediationPath | null>(null)
  const [currentSection, setCurrentSection] = useState(1)
  const [selectedErrorRate, setSelectedErrorRate] = useState(60)
  const [selectedErrorType, setSelectedErrorType] = useState<string>('sign-error')

  // Simulate different error scenarios
  const testScenarios = [
    {
      name: '🔧 Foundational Rework (60% errors)',
      errorRate: 60,
      errorType: 'sign-error',
      description: 'Student struggling with sign conventions'
    },
    {
      name: '⚙️ Intensive Rework (40% errors)',
      errorRate: 40,
      errorType: 'forgot-gcf',
      description: 'Consistently forgetting GCF'
    },
    {
      name: '🔨 Medium Rework (25% errors)',
      errorRate: 25,
      errorType: 'multiplication-error',
      description: 'Some arithmetic mistakes'
    },
    {
      name: '✨ Light Touch-Up (10% errors)',
      errorRate: 10,
      errorType: 'missing-negative',
      description: 'Occasional sign tracking issue'
    }
  ]

  const errorTypes = [
    { value: 'sign-error', label: 'Sign Convention Errors' },
    { value: 'forgot-gcf', label: 'Forgot to Check GCF' },
    { value: 'multiplication-error', label: 'Basic Multiplication Errors' },
    { value: 'factoring-incomplete', label: 'Stopped Before Complete' },
    { value: 'wrong-pattern', label: 'Wrong Factoring Method' },
    { value: 'arithmetic-error', label: 'Calculation Mistakes' },
    { value: 'missing-negative', label: 'Lost Negative Signs' },
    { value: 'conceptual-misunderstanding', label: 'Conceptual Confusion' }
  ]

  const generateMockAttempts = (errorRate: number, errorType: string) => {
    const totalAttempts = 10
    const numErrors = Math.floor(totalAttempts * (errorRate / 100))
    
    const attempts = []
    for (let i = 0; i < totalAttempts; i++) {
      const isCorrect = i >= numErrors
      attempts.push({
        isCorrect,
        errorType: isCorrect ? undefined : errorType,
        problemType: 'simple-trinomials',
        attemptNumber: 1
      })
    }
    
    return attempts
  }

  const handleTestRemediation = () => {
    const mockAttempts = generateMockAttempts(selectedErrorRate, selectedErrorType)
    const path = analyzePerformanceForRemediation(mockAttempts)
    
    if (path) {
      setRemediationPath(path)
      setShowRemediation(true)
    } else {
      alert('No remediation needed - performance is excellent!')
    }
  }

  const handleTestQualityGate = (accuracy: number) => {
    const mockPerformance = Array.from({ length: 10 }, (_, i) => ({
      isCorrect: i < accuracy * 10
    }))
    
    const gate = calculateQualityGate(mockPerformance, currentSection, 6)
    setShowQualityGate(true)
  }

  const handleRemediationComplete = () => {
    setShowRemediation(false)
    alert('✅ Remediation completed successfully!')
  }

  const handleQualityGateAdvance = () => {
    setShowQualityGate(false)
    setCurrentSection(prev => prev + 1)
    alert(`🚀 Advanced to Part ${currentSection + 1}!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            🏭 Remediation System Test Lab
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Test the manufacturing-inspired rework station and quality gate systems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Remediation Station Testing */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              🔧 Test Remediation Station
            </h2>
            
            {/* Quick Scenario Buttons */}
            <div className="space-y-3 mb-8">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                Quick Test Scenarios:
              </p>
              {testScenarios.map((scenario) => (
                <button
                  key={scenario.name}
                  onClick={() => {
                    setSelectedErrorRate(scenario.errorRate)
                    setSelectedErrorType(scenario.errorType)
                    const mockAttempts = generateMockAttempts(scenario.errorRate, scenario.errorType)
                    const path = analyzePerformanceForRemediation(mockAttempts)
                    if (path) {
                      setRemediationPath(path)
                      setShowRemediation(true)
                    }
                  }}
                  className="w-full text-left p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
                >
                  <div className="font-semibold text-gray-800 dark:text-gray-200">
                    {scenario.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {scenario.description}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Configuration */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">
                Custom Configuration:
              </p>
              
              <div className="space-y-4">
                {/* Error Rate Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Error Rate: {selectedErrorRate}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={selectedErrorRate}
                    onChange={(e) => setSelectedErrorRate(parseInt(e.target.value))}
                    className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>Perfect</span>
                    <span>Light</span>
                    <span>Medium</span>
                    <span>Intensive</span>
                    <span>Foundational</span>
                  </div>
                </div>

                {/* Error Type Select */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Error Type:
                  </label>
                  <select
                    value={selectedErrorType}
                    onChange={(e) => setSelectedErrorType(e.target.value)}
                    className="w-full p-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                  >
                    {errorTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Test Button */}
                <button
                  onClick={handleTestRemediation}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-lg transition-all shadow-lg"
                >
                  🚀 Launch Remediation Station
                </button>
              </div>
            </div>
          </div>

          {/* Quality Gate Testing */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              📊 Test Quality Gate
            </h2>

            {/* Current Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Current Section: Part {currentSection} of 6
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5, 6].map((section) => (
                  <button
                    key={section}
                    onClick={() => setCurrentSection(section)}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                      currentSection === section
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            {/* Required Accuracy for Current Section */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
              <div className="text-sm text-blue-700 dark:text-blue-300 font-semibold mb-1">
                Required Accuracy for Part {currentSection}:
              </div>
              <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">
                {[60, 70, 75, 80, 85, 90][currentSection - 1]}%
              </div>
            </div>

            {/* Test Scenarios */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                Test Different Accuracy Levels:
              </p>

              <button
                onClick={() => handleTestQualityGate(0.95)}
                className="w-full p-4 rounded-lg border-2 border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-green-900 dark:text-green-200">
                    ✅ Excellent (95%)
                  </span>
                  <span className="text-sm text-green-700 dark:text-green-300">
                    Should pass
                  </span>
                </div>
              </button>

              <button
                onClick={() => handleTestQualityGate(0.75)}
                className="w-full p-4 rounded-lg border-2 border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-yellow-900 dark:text-yellow-200">
                    ⚠️ Borderline (75%)
                  </span>
                  <span className="text-sm text-yellow-700 dark:text-yellow-300">
                    Depends on section
                  </span>
                </div>
              </button>

              <button
                onClick={() => handleTestQualityGate(0.50)}
                className="w-full p-4 rounded-lg border-2 border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-red-900 dark:text-red-200">
                    ❌ Struggling (50%)
                  </span>
                  <span className="text-sm text-red-700 dark:text-red-300">
                    Should fail
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 mt-8 text-white">
          <h3 className="text-2xl font-bold mb-4">📚 How It Works</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">🔧 Remediation Station</h4>
              <ul className="space-y-1 text-sm opacity-90">
                <li>• Analyzes error patterns in real-time</li>
                <li>• Routes to appropriate rework level</li>
                <li>• Provides targeted learning activities</li>
                <li>• Enforces success criteria before continuing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">📊 Quality Gate</h4>
              <ul className="space-y-1 text-sm opacity-90">
                <li>• Progressive standards (60% → 90%)</li>
                <li>• Blocks advancement if not ready</li>
                <li>• Shows exact gap to target</li>
                <li>• Encourages mastery before moving on</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showRemediation && remediationPath && (
        <RemediationStation
          remediationPath={remediationPath}
          onComplete={handleRemediationComplete}
          onSkip={remediationPath.mustComplete ? undefined : () => setShowRemediation(false)}
        />
      )}

      {showQualityGate && (
        <QualityGate
          currentAccuracy={0.75}
          requiredAccuracy={[0.60, 0.70, 0.75, 0.80, 0.85, 0.90][currentSection - 1]}
          canAdvance={0.75 >= [0.60, 0.70, 0.75, 0.80, 0.85, 0.90][currentSection - 1]}
          reason={
            0.75 >= [0.60, 0.70, 0.75, 0.80, 0.85, 0.90][currentSection - 1]
              ? `✅ Competent level achieved! Ready to advance.`
              : `⚠️ Need ${([0.60, 0.70, 0.75, 0.80, 0.85, 0.90][currentSection - 1] * 100).toFixed(0)}% accuracy. Currently at 75%.`
          }
          onRetry={() => setShowQualityGate(false)}
          onAdvance={handleQualityGateAdvance}
          sectionName={`Part ${currentSection}: ${['GCF', 'Difference of Squares', 'Simple Trinomials', 'Complex Trinomials', 'Special Patterns', 'Mixed Practice'][currentSection - 1]}`}
        />
      )}
    </div>
  )
}
