'use client'

import { useState } from 'react'

interface TwoDigitMultiplicationAnimationProps {
  multiplicand: string  // e.g., "34"
  multiplier: string    // e.g., "26"
  result: string        // e.g., "884"
}

type SubStep = 'multiply' | 'colorize' | 'slide' | 'complete'

interface Step {
  description: string
  digit: number
  multiplierDigit: number
  product: number
  previousCarry: number
  carry: number
  digitToWrite: number
  highlight: number
  multiplierRow: number  // Which row of the multiplier (0 = ones, 1 = tens)
  subStep: SubStep
}

export default function TwoDigitMultiplicationAnimation({ 
  multiplicand, 
  multiplier, 
  result 
}: TwoDigitMultiplicationAnimationProps) {
  const [currentStep, setCurrentStep] = useState(0)

  // Parse the numbers
  const multiplicandDigits = multiplicand.split('').reverse()
  const multiplierDigits = multiplier.split('').reverse()
  
  // Generate all steps
  const steps: Step[] = []
  const partialProducts: string[] = []
  
  // For each digit in the multiplier (starting from ones place)
  for (let mRow = 0; mRow < multiplierDigits.length; mRow++) {
    const multiplierDigit = parseInt(multiplierDigits[mRow])
    let carry = 0
    let partialProduct = ''
    
    // Add placeholder zeros for position
    for (let z = 0; z < mRow; z++) {
      partialProduct = '0' + partialProduct
    }
    
    // Multiply each digit of multiplicand by this multiplier digit
    for (let i = 0; i < multiplicandDigits.length; i++) {
      const digit = parseInt(multiplicandDigits[i])
      const product = digit * multiplierDigit + carry
      const digitToWrite = product % 10
      const newCarry = Math.floor(product / 10)
      const highlight = multiplicandDigits.length - 1 - i
      
      // Sub-step 1: Show the multiplication
      steps.push({
        description: `Multiply ${digit} × ${multiplierDigit}${carry > 0 ? ` + ${carry} (carry)` : ''}`,
        digit,
        multiplierDigit,
        product,
        previousCarry: carry,
        carry: newCarry,
        digitToWrite,
        highlight,
        multiplierRow: mRow,
        subStep: 'multiply'
      })
      
      // Sub-step 2: Color code if there's a carry
      if (newCarry > 0) {
        steps.push({
          description: `The result ${product} splits: ${newCarry} carries to the next column, ${digitToWrite} goes in this position`,
          digit,
          multiplierDigit,
          product,
          previousCarry: carry,
          carry: newCarry,
          digitToWrite,
          highlight,
          multiplierRow: mRow,
          subStep: 'colorize'
        })
        
        // Sub-step 3: Slide digits to positions - BOTH the carry and the digit to write
        steps.push({
          description: `Write ${digitToWrite} in row ${mRow + 1}, and place carry ${newCarry} above the next column`,
          digit,
          multiplierDigit,
          product,
          previousCarry: carry,
          carry: newCarry,
          digitToWrite,
          highlight,
          multiplierRow: mRow,
          subStep: 'slide'
        })
      } else {
        steps.push({
          description: `Write ${digitToWrite} in row ${mRow + 1}`,
          digit,
          multiplierDigit,
          product,
          previousCarry: carry,
          carry: 0,
          digitToWrite,
          highlight,
          multiplierRow: mRow,
          subStep: 'slide'
        })
      }
      
      partialProduct = digitToWrite + partialProduct
      carry = newCarry
    }
    
    // Add final carry if exists
    if (carry > 0) {
      partialProduct = carry + partialProduct
    }
    
    partialProducts.push(partialProduct)
  }
  
  // Add step for final addition
  steps.push({
    description: `Add the partial products together to get the final answer: ${result}`,
    digit: 0,
    multiplierDigit: 0,
    product: parseInt(result),
    previousCarry: 0,
    carry: 0,
    digitToWrite: 0,
    highlight: -1,
    multiplierRow: -1,
    subStep: 'complete'
  })

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

  // Track which carries are visible for each row
  const carriesVisible: { row: number; position: number; value: number }[] = []
  if (currentStep > 0) {
    for (let i = 0; i < currentStep; i++) {
      const step = steps[i]
      if (step.subStep === 'slide' && step.carry > 0 && step.multiplierRow >= 0) {
        // Carry goes to the LEFT of the current position (one position higher in place value)
        // If highlight is 0 (ones place), carry goes to position 1 (tens place)
        const carryPosition = step.highlight + 1
        
        // Check if this carry has been used in a subsequent step
        let carryUsed = false
        for (let j = i + 1; j < currentStep; j++) {
          const laterStep = steps[j]
          if (laterStep.multiplierRow === step.multiplierRow && 
              laterStep.highlight === carryPosition && 
              laterStep.previousCarry > 0 &&
              laterStep.subStep === 'slide') {
            carryUsed = true
            break
          }
        }
        
        // Only show the carry if it hasn't been used yet
        if (!carryUsed) {
          carriesVisible.push({ 
            row: step.multiplierRow,
            position: carryPosition,
            value: step.carry 
          })
        }
      }
    }
  }

  // Track which partial product digits are visible
  const getPartialProductDigits = (rowIndex: number): string => {
    if (currentStep === 0) return ''
    
    // Check if we've started working on this row
    const hasStartedRow = steps.slice(0, currentStep).some(s => s.multiplierRow === rowIndex)
    if (!hasStartedRow) return ''
    
    // Add placeholder zeros for position (e.g., for row 1, start with "0")
    let product = ''
    for (let z = 0; z < rowIndex; z++) {
      product = '0' + product
    }
    
    let currentCarry = 0
    
    // Build the partial product up to the current step
    for (let i = 0; i < currentStep; i++) {
      const step = steps[i]
      if (step.multiplierRow === rowIndex && step.subStep === 'slide') {
        // Add the digit to write (to the left of placeholder zeros)
        product = step.digitToWrite + product
        currentCarry = step.carry
      }
    }
    
    // If we've completed all digits for this row and there's a final carry, add it
    const rowSteps = steps.filter(s => s.multiplierRow === rowIndex && s.subStep === 'slide')
    const completedDigits = rowSteps.length
    
    if (completedDigits > 0 && currentCarry > 0 && completedDigits >= multiplicandDigits.length) {
      product = currentCarry + product
    }
    
    return product
  }

  const currentStepData = currentStep > 0 ? steps[currentStep - 1] : null
  const showFinalAnswer = currentStepData?.subStep === 'complete'

  return (
    <div className="my-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
      <h3 className="text-lg font-bold text-blue-900 mb-4">
        Step-by-Step Two-Digit Multiplication
      </h3>

      {/* The multiplication problem display */}
      <div className="bg-white rounded-lg p-6 mb-4 font-mono text-2xl relative">
        {/* Carry rows - one for each multiplier digit */}
        {multiplierDigits.map((_, mRow) => (
          <div key={`carry-row-${mRow}`} className="text-right mb-0.5 h-6">
            <div className="inline-flex justify-end" style={{ width: `${(multiplicandDigits.length + multiplierDigits.length) * 3}rem` }}>
              {/* Add padding for position */}
              {Array(mRow).fill(0).map((_, idx) => (
                <span key={`pad-${idx}`} className="inline-block w-12"></span>
              ))}
              {/* Need to add extra position for potential leftmost carry */}
              {[...multiplicandDigits, 'extra'].map((_, i) => {
                const carryAtPosition = carriesVisible.find(c => c.row === mRow && c.position === i)
                const isHighlightedCarry = currentStepData && 
                  currentStepData.multiplierRow === mRow &&
                  currentStepData.previousCarry > 0 && 
                  i === currentStepData.highlight + 1 &&
                  carryAtPosition
                return (
                  <span 
                    key={i} 
                    className={`inline-block w-12 text-right text-sm transition-all duration-500 relative ${
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
              }).reverse()}
            </div>
          </div>
        ))}

        {/* Multiplicand */}
        <div className="text-right mb-2">
          {multiplicand.split('').map((digit, i) => (
            <span
              key={i}
              className={`inline-block w-12 transition-all duration-300 ${
                currentStepData && currentStepData.multiplierRow >= 0 && i === currentStepData.highlight
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
          {multiplier.split('').map((digit, i) => {
            const digitIndex = multiplierDigits.length - 1 - i
            return (
              <span 
                key={i}
                className={`inline-block w-12 transition-all duration-300 ${
                  currentStepData && currentStepData.multiplierRow === digitIndex
                    ? 'bg-orange-200 text-orange-900 rounded scale-110' 
                    : 'text-gray-900'
                }`}
              >
                {digit}
              </span>
            )
          })}
        </div>

        {/* Partial products */}
        {partialProducts.map((product, rowIndex) => {
          const visibleDigits = getPartialProductDigits(rowIndex)
          if (!visibleDigits && !showFinalAnswer) return null
          
          return (
            <div key={`partial-${rowIndex}`} className="text-right mb-1">
              {(showFinalAnswer ? product : visibleDigits).split('').map((digit, i) => (
                <span
                  key={i}
                  className="inline-block w-12 text-green-600 animate-fadeIn"
                >
                  {digit}
                </span>
              ))}
            </div>
          )
        })}

        {/* Final addition line and result */}
        {showFinalAnswer && (
          <>
            <div className="text-right border-t-2 border-gray-800 pt-2 mt-2">
              {result.split('').map((digit, i) => (
                <span
                  key={i}
                  className="inline-block w-12 text-blue-900 font-bold animate-fadeIn"
                >
                  {digit}
                </span>
              ))}
            </div>
          </>
        )}

        {/* Floating calculation display */}
        {currentStepData && currentStepData.multiplierRow >= 0 && (currentStepData.subStep === 'multiply' || currentStepData.subStep === 'colorize') && (
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

        {/* Sliding animation */}
        {currentStepData && currentStepData.subStep === 'slide' && currentStepData.carry > 0 && currentStepData.multiplierRow >= 0 && (
          <>
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
            <strong>Ready to start!</strong> We&apos;ll multiply {multiplicand} × {multiplier} step by step.
            <br />
            <span className="text-sm mt-2 block">First, we&apos;ll multiply {multiplicand} by {multiplierDigits[0]} (ones place), then by {multiplierDigits[1]} (tens place), and finally add them together.</span>
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
