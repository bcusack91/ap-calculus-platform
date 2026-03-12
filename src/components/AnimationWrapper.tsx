'use client'

import MultiplicationAnimation from './MultiplicationAnimation'
import TwoDigitMultiplicationAnimation from './TwoDigitMultiplicationAnimation'

interface AnimationWrapperProps {
  type: 'single' | 'double'
  multiplicand: string
  multiplier: string
  result: string
}

export default function AnimationWrapper({ type, multiplicand, multiplier, result }: AnimationWrapperProps) {
  if (type === 'single') {
    return <MultiplicationAnimation multiplicand={multiplicand} multiplier={multiplier} result={result} />
  } else {
    return <TwoDigitMultiplicationAnimation multiplicand={multiplicand} multiplier={multiplier} result={result} />
  }
}
