'use client'

import { useState } from 'react'

interface MultiplicationAnimationProps {
  multiplicand: string  // e.g., "23"
  multiplier: string    // e.g., "4"
  result: string        // e.g., "92"
}

type SubStep = 'multiply' | 'colorize' | 'slide' | 'complete'

interface Step {
  description: string
  digit: number
  multiplierDigit: number
  product: number
  previousCarry: number  // Carry added from previous step
  carry: number          // New carry generated
  digitToWrite: number
  highlight: number
  subStep: SubStep
}

export default function MultiplicationAnimation({ 
  multiplicand, 
  multiplier, 
  result 
}: MultiplicationAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0)

  // Parse the numbers
  const digits = multiplicand.split('').reverse() // Start from ones place
  const multiplierDigit = parseInt(multiplier)
  
  // Generate all steps with sub-steps
  const steps: Step[] = []
  let carry = 0
  
  for (let i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i])
    const product = digit * multiplierDigit + carry
    const digitToWrite = product % 10
    const newCarry = Math.floor(product / 10)
    const highlight = digits.length - 1 - i
    
    // Sub-step 1: Show the multiplication
    steps.push({
      description: `Multiply ${digit} × ${multiplierDigit}${carry > 0 ? ` + ${carry} (carry from previous)` : ''}`,
      digit,
      multiplierDigit,
      product,
      previousCarry: carry,
      carry: newCarry,
      digitToWrite,
      highlight,
      subStep: 'multiply'
    })
    
    // Sub-step 2: Color code the result digits
    if (newCarry > 0) {
      steps.push({
        description: `The result ${product} splits into carry ${newCarry} and digit ${digitToWrite}`,
        digit,
        multiplierDigit,
        product,
        previousCarry: carry,
        carry: newCarry,
        digitToWrite,
        highlight,
        subStep: 'colorize'
      })
      
      // Sub-step 3: Slide digits to their positions
      steps.push({
        description: `The ${newCarry} carries to the next column, and ${digitToWrite} goes in the answer`,
        digit,
        multiplierDigit,
        product,
        previousCarry: carry,
        carry: newCarry,
        digitToWrite,
        highlight,
        subStep: 'slide'
      })
    } else {
      // No carry, just show the digit placement
      steps.push({
        description: `Write ${digitToWrite} in the answer`,
        digit,
        multiplierDigit,
        product,
        previousCarry: carry,
        carry: 0,
        digitToWrite,
        highlight,
        subStep: 'slide'
      })
    }
    
    carry = newCarry
  }

  const maxSteps = steps.length

  const handleNext = () => {
    if (currentStep < maxSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
  }

  // Track which digits have been written so far
  const digitsWritten = currentStep === 0 ? 0 : steps.slice(0, currentStep).filter(s => s.subStep === 'slide' || s.subStep === 'complete').length
  
  // Track which carries are visible
  const carriesVisible: { position: number; value: number }[] = []
  if (currentStep > 0) {
    for (let i = 0; i < currentStep; i++) {
      const step = steps[i]
      if (step.subStep === 'slide' && step.carry > 0) {
        carriesVisible.push({ position: step.highlight - 1, value: step.carry })
      }
    }
  }

  const currentStepData = currentStep > 0 ? steps[currentStep - 1] : null

  return (
    <div className="my-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
      <h3 className="text-lg font-bold text-blue-900 mb-4">
        Step-by-Step Multiplication with Carrying
      </h3>

      {/* The multiplication problem display */}
      <div className="bg-white rounded-lg p-6 mb-4 font-mono text-2xl relative">
        {/* Carry row - positioned above the multiplicand */}
        <div className="text-right mb-1 h-8">
          <div className="inline-flex justify-end" style={{ width: `${multiplicand.length * 3}rem` }}>
            {multiplicand.split('').map((_, i) => {
              const carryAtPosition = carriesVisible.find(c => c.position === i)
              const isHighlightedCarry = currentStepData && 
                currentStepData.previousCarry > 0 && 
                i === currentStepData.highlight &&
                carryAtPosition
              return (
                <span 
                  key={i} 
                  className={`inline-block w-12 text-right transition-all duration-500 relative ${
                    isHighlightedCarry 
                      ? 'text-purple-600 bg-purple-100 rounded scale-110' 
                      : 'text-blue-600'
                  }`}
                >
                  {carryAtPosition && (
                    <span className="animate-fadeIn">{carryAtPosition.value}</span>
                  )}
                </span>
              )
            })}
          </div>
        </div>

        {/* Multiplicand */}
        <div className="text-right mb-2">
          {multiplicand.split('').map((digit, i) => (
            <span
              key={i}
              className={`inline-block w-12 transition-all duration-300 ${
                currentStepData && i === currentStepData.highlight
                  ? 'bg-yellow-200 text-yellow-900 rounded scale-110'
                  : 'text-gray-900'
              }`}
            >
              {digit}
            </span>
          ))}
        </div>

        {/* Multiplication sign and multiplier */}
        <div className="text-right mb-2 border-b-2 border-gray-800 pb-2">
          <span className="inline-block w-12">×</span>
          <span className={`inline-block w-12 transition-all duration-300 ${
            currentStepData 
              ? 'bg-orange-200 text-orange-900 rounded scale-110' 
              : 'text-gray-900'
          }`}>
            {multiplier}
          </span>
        </div>

        {/* Result (appears as we go) */}
        <div className="text-right">
          {currentStep === 0 ? (
            <span className="text-gray-400 italic">Click &quot;Next Step&quot; to begin</span>
          ) : (
            result.split('').map((digit, i) => (
              <span
                key={i}
                className={`inline-block w-12 transition-all duration-500 ${
                  i < result.length - digitsWritten
                    ? 'opacity-0'
                    : 'opacity-100 animate-fadeIn text-green-600'
                }`}
              >
                {digit}
              </span>
            ))
          )}
        </div>

        {/* Floating calculation display for multiply and colorize steps */}
        {currentStepData && (currentStepData.subStep === 'multiply' || currentStepData.subStep === 'colorize') && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-purple-400 rounded-lg p-6 shadow-2xl z-10 animate-fadeIn">
            <div className="text-center text-3xl font-bold">
              {currentStepData.subStep === 'multiply' ? (
                <span>
                  <span className="text-yellow-900 bg-yellow-200 px-2 rounded">{currentStepData.digit}</span>
                  {' × '}
                  <span className="text-orange-900 bg-orange-200 px-2 rounded">{currentStepData.multiplierDigit}</span>
                  {currentStepData.previousCarry > 0 && (
                    <>
                      {' + '}
                      <span className="text-purple-600 bg-purple-100 px-2 rounded">{currentStepData.previousCarry}</span>
                    </>
                  )}
                  {' = '}
                  {currentStepData.product}
                </span>
              ) : (
                <span>
                  <span className="text-yellow-900 bg-yellow-200 px-2 rounded">{currentStepData.digit}</span>
                  {' × '}
                  <span className="text-orange-900 bg-orange-200 px-2 rounded">{currentStepData.multiplierDigit}</span>
                  {currentStepData.previousCarry > 0 && (
                    <>
                      {' + '}
                      <span className="text-purple-600 bg-purple-100 px-2 rounded">{currentStepData.previousCarry}</span>
                    </>
                  )}
                  {' = '}
                  <span className="ml-2 inline-flex gap-1">
                    <span className="text-blue-600 font-bold animate-pulse">{currentStepData.carry}</span>
                    <span className="text-green-600 font-bold animate-pulse">{currentStepData.digitToWrite}</span>
                  </span>
                </span>
              )}
            </div>
          </div>
        )}

        {/* Sliding animation for the slide substep */}
        {currentStepData && currentStepData.subStep === 'slide' && currentStepData.carry > 0 && (
          <>
            {/* Carry digit sliding up */}
            <div 
              className="absolute text-blue-600 text-2xl font-bold animate-slideUp"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              {currentStepData.carry}
            </div>
            {/* Ones digit sliding down */}
            <div 
              className="absolute text-green-600 text-2xl font-bold animate-slideDown"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              {currentStepData.digitToWrite}
            </div>
          </>
        )}
      </div>

      {/* Step description */}
      <div className="bg-blue-100 rounded p-4 mb-4 min-h-[60px]">
        {currentStep === 0 ? (
          <p className="text-blue-900">
            <strong>Ready to start!</strong> We&apos;ll multiply {multiplicand} × {multiplier} step by step, showing how carrying works.
          </p>
        ) : currentStep <= maxSteps ? (
          <p className="text-blue-900">
            <strong>Step {currentStep}:</strong> {currentStepData!.description}
          </p>
        ) : (
          <p className="text-green-900">
            <strong>✓ Complete!</strong> The answer is {result}
          </p>
        )}
      </div>

      {/* Controls */}
      <div className="flex gap-3 justify-center">
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded font-semibold transition-colors"
        >
          ↺ Reset
        </button>
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep >= maxSteps}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next Step →
        </button>
      </div>

      {/* Progress indicator */}
      <div className="mt-4 text-center text-sm text-blue-700">
        Step {currentStep} of {maxSteps}
      </div>
    </div>
  )
}
