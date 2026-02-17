'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { getInteractiveLessonData, getInteractiveTopicConfig } from '@/data/interactive-lessons/registry'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import { useSearchParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import katex from 'katex'
import { FlashcardNotification } from '@/components/flashcard-notification'
import CorrectAnswerCelebration from '@/components/CorrectAnswerCelebration'
import BookmarkButton from '@/components/BookmarkButton'
import LessonProgressBar from '@/components/LessonProgressBar'
import KeyboardShortcutHint from '@/components/KeyboardShortcutHint'
import { useLessonKeyboard } from '@/hooks/useLessonKeyboard'

// Helper component to render inline LaTeX within text strings
// Parses $...$ and $$...$$ delimiters and renders via KaTeX
function InlineLatex({ text, className }: { text: string; className?: string }) {
  if (!text || !text.includes('$')) {
    return <span className={className}>{text}</span>
  }

  // Split on LaTeX delimiters: $$...$$ (display) and $...$ (inline)
  const parts: { type: 'text' | 'latex'; content: string; display: boolean }[] = []
  let remaining = text
  
  while (remaining.length > 0) {
    // Check for display math $$...$$ first
    const displayMatch = remaining.match(/\$\$([^$]+?)\$\$/)
    // Check for inline math $...$
    const inlineMatch = remaining.match(/\$([^$]+?)\$/)
    
    // Find which comes first
    const displayIndex = displayMatch ? remaining.indexOf(displayMatch[0]) : -1
    const inlineIndex = inlineMatch ? remaining.indexOf(inlineMatch[0]) : -1
    
    let firstMatch: RegExpMatchArray | null = null
    let firstIndex = -1
    let isDisplay = false
    
    if (displayIndex >= 0 && (inlineIndex < 0 || displayIndex <= inlineIndex)) {
      firstMatch = displayMatch
      firstIndex = displayIndex
      isDisplay = true
    } else if (inlineIndex >= 0) {
      firstMatch = inlineMatch
      firstIndex = inlineIndex
      isDisplay = false
    }
    
    if (!firstMatch || firstIndex < 0) {
      // No more LaTeX, push remaining text
      if (remaining) parts.push({ type: 'text', content: remaining, display: false })
      break
    }
    
    // Push text before the match
    if (firstIndex > 0) {
      parts.push({ type: 'text', content: remaining.slice(0, firstIndex), display: false })
    }
    
    // Push the LaTeX part
    parts.push({ type: 'latex', content: firstMatch[1], display: isDisplay })
    
    // Move past the match
    remaining = remaining.slice(firstIndex + firstMatch[0].length)
  }

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.type === 'text') {
          return <span key={i}>{part.content}</span>
        }
        try {
          return (
            <span
              key={i}
              dangerouslySetInnerHTML={{
                __html: katex.renderToString(part.content, {
                  throwOnError: false,
                  displayMode: part.display,
                })
              }}
            />
          )
        } catch {
          return <span key={i}>{part.content}</span>
        }
      })}
    </span>
  )
}

// Smart numeric answer comparison for sig fig tolerance
// Handles trailing zeros, scientific notation, and minor rounding differences
function isAnswerMatch(studentAnswer: string, correctAnswer: string): boolean {
  const sa = studentAnswer.trim().toLowerCase().replace(/\s+/g, '')
  const ca = correctAnswer.trim().toLowerCase().replace(/\s+/g, '')

  // Exact string match
  if (sa === ca) return true
  if (sa === '' || ca === '') return false

  // Try numeric comparison (handles 2.5 vs 2.50, 3.0e-5 vs 0.00003, etc.)
  const sNum = Number(sa)
  const cNum = Number(ca)

  if (!isNaN(sNum) && !isNaN(cNum)) {
    if (cNum === 0) return Math.abs(sNum) < 0.001
    // 0.5% relative tolerance — catches sig fig/rounding differences
    // but NOT wrong calculations (e.g., 2.5 vs 2.6 = 4% → rejected)
    const relativeDiff = Math.abs(sNum - cNum) / Math.abs(cNum)
    return relativeDiff < 0.005
  }

  return false
}

// Compare arrays of answers using smart numeric matching
function areAllAnswersCorrect(studentAnswers: string[], correctAnswers: string[]): boolean {
  if (studentAnswers.length !== correctAnswers.length) return false
  return studentAnswers.every((sa, i) => isAnswerMatch(sa, correctAnswers[i]))
}

interface Section {
  id: string
  type: 'text' | 'input-boxes' | 'dropdown-select' | 'multiple-choice' | 'reference-angle-quiz' | 'factoring-practice' | 'mini-boss'
  content: string
  exercise?: any
  problemType?: 'gcf' | 'gcf-identify' | 'difference-of-squares' | 'simple-trinomials' | 'complex-trinomials' | 'mixed'
  miniBossConfig?: {
    bossName: string
    questionSequence: ('gcf-identify' | 'gcf-factor' | 'simple-diff-squares' | 'complex-diff-squares' | 'simple-trinomials' | 'complex-trinomials' | 'combined')[]
    questionBankModule: 'factoring-part2-boss' | 'factoring-part3-boss' | 'factoring-part4-boss' | 'factoring-part5-boss' | 'factoring-part6-boss' // Which question bank to use
    aiAccuracy: number // 0-1
    aiResponseTime: number // milliseconds
  }
}

interface InteractiveLessonRendererProps {
  topicSlug: string
}

type LessonPart = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

function calculatePartMastery(lessonPart: number, completedSectionsCount: number, totalSections: number, totalParts: number) {
  const safeSections = Math.max(totalSections, 1)
  const progressInPart = completedSectionsCount / safeSections
  const partWeight = 1.0 / Math.max(totalParts, 1)
  const baseLevel = (lessonPart - 1) * partWeight
  return Math.min(1, baseLevel + progressInPart * partWeight)
}

export default function InteractiveLessonRenderer({ topicSlug }: InteractiveLessonRendererProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const { data: session } = useSession()
  const topicConfig = getInteractiveTopicConfig(topicSlug)
  const totalParts = topicConfig?.parts.length ?? 1
  const entersCompetitiveModeOnComplete = topicConfig?.completionDestination === 'competitive'
  const practiceModeParts = topicConfig?.practiceModeParts ?? []
  
  // Get initial part from URL parameter (e.g., ?part=2)
  const urlPart = searchParams.get('part')
  const requestedPart = urlPart ? parseInt(urlPart, 10) : 1
  const initialPart = Math.min(Math.max(Number.isFinite(requestedPart) ? requestedPart : 1, 1), Math.min(totalParts, 8)) as LessonPart
  
  const [lessonPart, setLessonPart] = useState<LessonPart>(initialPart)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [completedSections, setCompletedSections] = useState<Set<number>>(new Set())
  const [showPracticeMode, setShowPracticeMode] = useState(false)
  const [progressLoaded, setProgressLoaded] = useState(false)
  const [unlockedParts, setUnlockedParts] = useState<Set<LessonPart>>(new Set([1])) // Part 1 always unlocked
  const [cachedTopicId, setCachedTopicId] = useState<string | null>(null)
  const [pendingSaveCount, setPendingSaveCount] = useState(0)
  const queryCountRef = useRef(0) // Track API calls
  
  // Celebration animation state
  const [showCelebration, setShowCelebration] = useState(false)
  const celebrationCounterRef = useRef(0)
  
  // Flashcard notification state
  const [showFlashcardNotification, setShowFlashcardNotification] = useState(false)
  const [flashcardNotificationData, setFlashcardNotificationData] = useState<{
    newCards: number
    totalActive: number
    topicTitle: string
  } | null>(null)

  // Update URL when lesson part changes
  const updateLessonPart = (newPart: LessonPart) => {
    setLessonPart(newPart)
    setCurrentSectionIndex(0)
    setCompletedSections(new Set())
    // Update URL without page reload
    const url = new URL(window.location.href)
    url.searchParams.set('part', newPart.toString())
    window.history.pushState({}, '', url.toString())
  }

  // Save progress to database
  const saveProgress = async (forceTopicId?: string, isPartCompletion: boolean = false) => {
    if (!session?.user) return // Only save if user is logged in
    
    queryCountRef.current++
    const usingCache = !!(forceTopicId || cachedTopicId)
    console.log(`🔍 [Query #${queryCountRef.current}] Saving progress - ${usingCache ? '✅ Using cached ID' : '⚠️ Looking up by slug'}`)
    
    try {
      // Calculate mastery level based on overall progress
      const masteryLevel = calculatePartMastery(lessonPart, completedSections.size, sections.length, totalParts)
      
      const response = await fetch('/api/progress/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId: forceTopicId || cachedTopicId,
          topicSlug: !forceTopicId && !cachedTopicId ? topicSlug : undefined, // Fallback to slug if no ID cached
          lessonPart,
          completedSections: Array.from(completedSections),
          masteryLevel,
          timeSpent: 0, // Could track actual time if needed
          isPartCompletion, // Flag to indicate this is a part completion, not just progress save
        }),
      })
      
      // Check if flashcards were created (only show notification on part completion)
      const result = await response.json()
      if (isPartCompletion && result.flashcards?.created) {
        setFlashcardNotificationData({
          newCards: result.flashcards.newCards || 0,
          totalActive: result.flashcards.totalActive || 0,
          topicTitle: result.flashcards.topicTitle
        })
        setShowFlashcardNotification(true)
      }
    } catch (error) {
      console.error('Failed to save progress:', error)
    }
  }

  // Load progress from database on mount
  useEffect(() => {
    const loadProgress = async () => {
      if (!session?.user || progressLoaded) return
      
      try {
        queryCountRef.current++
        console.log(`🔍 [Query #${queryCountRef.current}] Loading progress`)
        const response = await fetch(`/api/progress/load?topicSlug=${topicSlug}`)
        const data = await response.json()
        
        // Cache topicId to avoid future lookups
        if (data.topicId) {
          setCachedTopicId(data.topicId)
          console.log('✅ Topic ID cached:', data.topicId)
        }
        
        if (data.exists && data.progress) {
          // Determine lesson part from mastery level
          const mastery = Number(data.progress.masteryLevel ?? 0)
          const boundedMastery = Math.min(Math.max(mastery, 0), 0.999999)
          const partWeight = 1.0 / Math.max(totalParts, 1)
          const resolvedPart = Math.min(totalParts, Math.max(1, Math.floor(boundedMastery / partWeight) + 1)) as LessonPart
          const unlocked: Set<LessonPart> = new Set([1]) // Part 1 always unlocked

          for (let i = 1; i <= resolvedPart; i++) {
            unlocked.add(i as LessonPart)
          }
          
          setUnlockedParts(unlocked)
          
          // Only update if not overridden by URL parameter
          if (!urlPart) {
            setLessonPart(resolvedPart)
          }
        }
        
        setProgressLoaded(true)
      } catch (error) {
        console.error('Failed to load progress:', error)
        setProgressLoaded(true)
      }
    }
    
    loadProgress()
  }, [session, topicSlug, progressLoaded, urlPart, totalParts])
  
  // Save progress when user leaves page
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (session?.user && completedSections.size > 0 && cachedTopicId) {
        // Use sendBeacon for reliable save on page unload
        const masteryLevel = calculateMasteryLevel()
        navigator.sendBeacon('/api/progress/save', JSON.stringify({
          topicId: cachedTopicId,
          lessonPart,
          completedSections: Array.from(completedSections),
          masteryLevel,
          timeSpent: 0,
        }))
      }
    }
    
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [session, completedSections, cachedTopicId, lessonPart])

  // Smart batched saves: Save every 3 sections for progress tracking
  useEffect(() => {
    if (progressLoaded && completedSections.size > 0) {
      const shouldSave = completedSections.size % 3 === 0 // Every 3 sections
      if (shouldSave) {
        saveProgress(undefined, false) // Progress checkpoint, not part completion
      }
    }
  }, [completedSections, progressLoaded])

  // Async lesson data loading
  const [lessonData, setLessonData] = useState<any>(null)
  const [lessonLoading, setLessonLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLessonLoading(true)
    getInteractiveLessonData(topicSlug, lessonPart).then(data => {
      if (!cancelled) {
        setLessonData(data)
        setLessonLoading(false)
      }
    })
    return () => { cancelled = true }
  }, [topicSlug, lessonPart])

  if (lessonLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">Loading lesson...</p>
        </div>
      </div>
    )
  }

  if (!lessonData) {
    return <div>No interactive lesson available</div>
  }

  // Show practice mode if requested
  if (showPracticeMode && topicSlug === 'the-unit-circle') {
    // Use different practice mode for Part 2
    if (lessonPart === 2) {
      return (
        <Part2PracticeMode 
          onBack={() => setShowPracticeMode(false)} 
          onComplete={() => {
            setShowPracticeMode(false)
            if (totalParts >= 3) {
              setUnlockedParts(prev => new Set([...prev, 3 as LessonPart])) // Unlock Part 3
              updateLessonPart(3 as LessonPart) // Move to part 3 after completing Part 2 practice
            }
          }}
        />
      )
    }
    
    // Part 1 practice mode (counting method)
    if (lessonPart === 1) {
      return (
        <IndependentPracticeMode 
          onBack={() => setShowPracticeMode(false)} 
          onComplete={() => {
            setShowPracticeMode(false)
            if (totalParts >= 2) {
              setUnlockedParts(prev => new Set([...prev, 2 as LessonPart]))
              updateLessonPart(2 as LessonPart) // Move to part 2 after completing practice
            }
          }}
        />
      )
    }
    
    // Parts 3 and 4 don't have practice modes yet
    setShowPracticeMode(false)
  }

  const { sections } = lessonData
  const currentSection = sections[currentSectionIndex]
  const progress = ((completedSections.size) / sections.length) * 100
  
  // Helper to calculate mastery level (needs sections defined)
  const calculateMasteryLevel = () => {
    return calculatePartMastery(lessonPart, completedSections.size, sections.length, totalParts)
  }

  const handleNext = () => {
    // Mark current section as complete when moving to next
    if (!completedSections.has(currentSectionIndex)) {
      setCompletedSections(prev => new Set([...prev, currentSectionIndex]))
    }
    
    // Special case: Part 2 Section 6 (last section) - enter practice mode instead of advancing
    if (topicSlug === 'the-unit-circle' && lessonPart === 2 && currentSectionIndex === sections.length - 1) {
      setShowPracticeMode(true)
      return
    }
    
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // On final section of a part, save progress and initialize flashcards
      // This triggers flashcard notification BEFORE transitioning to next part
      saveProgress(undefined, true) // Part completion - trigger flashcards
      
      // Multi-part lesson navigation
      if (lessonPart === 2 && topicSlug === 'the-unit-circle') {
        // Unit circle: Part 2 → Practice Mode
        setShowPracticeMode(true)
      } else if (lessonPart < totalParts) {
        // Generic next part flow for multi-part lessons
        const nextPart = (lessonPart + 1) as LessonPart
        setUnlockedParts(prev => new Set([...prev, nextPart]))
        updateLessonPart(nextPart)
        setCurrentSectionIndex(0)
        setCompletedSections(new Set())
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (entersCompetitiveModeOnComplete) {
        // On final section, save full mastery then move to competitive mode
        const finalSave = async () => {
          if (session?.user) {
            try {
              // Mark all sections as complete and save with mastery 1.0
              const allSections = new Set(sections.map((_, i) => i))
              setCompletedSections(allSections)
              
              await fetch('/api/progress/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  topicSlug,
                  lessonPart: totalParts,
                  completedSections: Array.from(allSections),
                  masteryLevel: 1.0, // Full mastery
                  timeSpent: 0,
                }),
              })
            } catch (error) {
              console.error('Failed to save final progress:', error)
            }
          }
          router.push('/competitive')
        }
        finalSave()
      } else {
        // Fallback: mark as complete
        setCompletedSections(new Set(sections.map((_, i) => i)))
      }
    }
  }

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSectionComplete = () => {
    console.log('🎯 Section completed:', currentSectionIndex)
    setCompletedSections(prev => new Set([...prev, currentSectionIndex]))
    
    // Trigger celebration animation for exercise completions
    const isExercise = 
      currentSection.type === 'input-boxes' || 
      currentSection.type === 'dropdown-select' ||
      currentSection.type === 'multiple-choice' ||
      currentSection.type === 'reference-angle-quiz' ||
      currentSection.type === 'factoring-practice'
    if (isExercise) {
      celebrationCounterRef.current += 1
      setShowCelebration(true)
    }
  }

  const isCurrentSectionComplete = completedSections.has(currentSectionIndex)
  
  // Check if current section requires completion before proceeding
  const currentSectionRequiresCompletion = 
    currentSection.type === 'input-boxes' || 
    currentSection.type === 'dropdown-select' ||
    currentSection.type === 'multiple-choice' ||
    currentSection.type === 'reference-angle-quiz' ||
    currentSection.type === 'factoring-practice' ||
    (currentSection.type === 'text' && currentSection.content.includes('[UNIT_CIRCLE_GAME]')) ||
    (currentSection.type === 'text' && currentSection.content.includes('[FULL_UNIT_CIRCLE_GAME]'))
  
  // Disable Next button if it's an exercise that hasn't been completed
  const canProceedToNext = !currentSectionRequiresCompletion || isCurrentSectionComplete
  
  console.log('🔍 Button State Debug:', {
    sectionIndex: currentSectionIndex,
    sectionType: currentSection.type,
    requiresCompletion: currentSectionRequiresCompletion,
    isComplete: isCurrentSectionComplete,
    canProceed: canProceedToNext,
    completedSections: Array.from(completedSections)
  })

  // Keyboard navigation for lessons
  useLessonKeyboard({
    onNext: handleNext,
    onPrevious: handlePrevious,
    canGoNext: canProceedToNext,
    canGoPrevious: currentSectionIndex > 0,
    enabled: !showPracticeMode,
  })

  // Lesson title for progress bar and bookmark
  const lessonTitle = topicConfig?.parts[lessonPart - 1]?.title || topicSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

  return (
    <>
      {/* Sticky lesson progress bar */}
      <LessonProgressBar
        currentStep={currentSectionIndex}
        totalSteps={sections.length}
        completedSteps={completedSections}
        lessonTitle={lessonTitle}
        partNumber={lessonPart}
        totalParts={totalParts > 1 ? totalParts : undefined}
      />
      
      {/* Celebration animation */}
      <CorrectAnswerCelebration
        key={celebrationCounterRef.current}
        show={showCelebration}
        onDone={() => setShowCelebration(false)}
      />

      <div className="space-y-6">
      {/* Part Navigation Menu - Show for multi-part lessons */}
      {topicConfig && totalParts > 1 && (
        <div className="bg-gradient-to-r from-indigo-100/80 via-purple-100/80 to-pink-100/80 dark:from-indigo-900/40 dark:via-purple-900/40 dark:to-pink-900/40 backdrop-blur-sm rounded-2xl p-5 border-2 border-indigo-200/70 dark:border-indigo-700/50 shadow-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Jump to:</span>
              <div className="flex gap-2 flex-wrap">
                {topicConfig.parts.map((partConfig, index) => {
                  const partNumber = (index + 1) as LessonPart
                  const isUnlocked = unlockedParts.has(partNumber)

                  return (
                    <button
                      key={`${topicSlug}-part-${partNumber}`}
                      onClick={() => isUnlocked && updateLessonPart(partNumber)}
                      disabled={!isUnlocked}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        lessonPart === partNumber
                          ? 'bg-purple-600 text-white shadow-lg'
                          : isUnlocked
                          ? 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-50'
                      }`}
                    >
                      {!isUnlocked && '🔒 '}Part {partNumber}: {partConfig.title}
                    </button>
                  )
                })}
            </div>
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Currently viewing: <span className="font-bold text-purple-700 dark:text-purple-400">
              Part {lessonPart}
            </span>
          </div>
        </div>
        </div>
      )}
      
      {/* Progress Bar */}
      <div className="space-y-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-purple-100/50 dark:border-purple-500/20 shadow-md">
        <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-full h-4 overflow-hidden shadow-inner">
          <div 
            className="h-full transition-all duration-500 ease-out shadow-md animate-gradient"
            style={{ 
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #9333ea 0%, #ec4899 25%, #a855f7 50%, #ec4899 75%, #9333ea 100%)',
              backgroundSize: '200% 100%'
            }}
          />
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400 font-medium">
            Section {currentSectionIndex + 1} of {sections.length}
          </span>
          <span className="text-purple-700 dark:text-purple-400 font-bold">
            {Math.round(progress)}% Complete
          </span>
        </div>
      </div>

      {/* Current Section Content */}
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-2xl p-10 border-2 border-purple-100/50 dark:border-purple-500/20 min-h-[500px] transition-all duration-300 hover:shadow-3xl hover:border-purple-200/70 dark:hover:border-purple-400/30">
        <SectionRenderer 
          key={currentSection.id}
          section={currentSection} 
          onComplete={handleSectionComplete}
          isComplete={isCurrentSectionComplete}
          isLastSection={currentSectionIndex === sections.length - 1}
          onStartPractice={practiceModeParts.includes(lessonPart) ? () => setShowPracticeMode(true) : undefined}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-4">
        <button
          onClick={handlePrevious}
          disabled={currentSectionIndex === 0}
          className="group px-8 py-4 rounded-xl font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-lg disabled:hover:shadow-none disabled:hover:bg-white dark:disabled:hover:bg-gray-800"
        >
          <span className="flex items-center gap-2">
            <span className="transform transition-transform group-hover:-translate-x-1">←</span>
            <span>Previous</span>
          </span>
        </button>

        <div className="flex gap-2">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSectionIndex 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 w-10 shadow-md' 
                  : completedSections.has(index)
                  ? 'bg-green-500 w-2.5 shadow-sm'
                  : 'bg-gray-300 dark:bg-gray-600 w-2.5'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={!canProceedToNext}
          className="group px-8 py-4 rounded-xl font-semibold transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl disabled:hover:shadow-lg border-2 border-transparent hover:scale-[1.02] disabled:hover:scale-100"
        >
          {currentSectionIndex !== sections.length - 1
            ? 'Next →'
            : topicSlug === 'the-unit-circle' && lessonPart === 2
            ? '🎯 Practice Independently →'
            : lessonPart < totalParts
            ? lessonPart === 1 && topicSlug === 'the-unit-circle'
              ? 'On to Part 2 →'
              : 'Continue to Next Part →'
            : entersCompetitiveModeOnComplete
            ? '🎮 Enter Competitive Mode →'
            : '✅ Lesson Complete!'}
        </button>
      </div>
      
      {/* Show hint if exercise not completed */}
      {currentSectionRequiresCompletion && !isCurrentSectionComplete && (
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          💡 Complete the exercise above to continue
        </div>
      )}
      
      {/* Bookmark and keyboard shortcuts */}
      <div className="flex items-center justify-between pt-2">
        <BookmarkButton lessonId={`${topicSlug}-part${lessonPart}`} lessonTitle={lessonTitle} />
        <KeyboardShortcutHint />
      </div>
    </div>
    
    {/* Flashcard Notification */}
    {flashcardNotificationData && (
      <FlashcardNotification
        show={showFlashcardNotification}
        newCards={flashcardNotificationData.newCards}
        totalActive={flashcardNotificationData.totalActive}
        topicTitle={flashcardNotificationData.topicTitle}
        onDismiss={() => {
          setShowFlashcardNotification(false)
          setFlashcardNotificationData(null)
        }}
      />
    )}
    </>
  )
}

// Section Renderer Component
function SectionRenderer({ 
  section, 
  onComplete, 
  isComplete,
  isLastSection,
  onStartPractice
}: { 
  section: Section
  onComplete: () => void
  isComplete: boolean
  isLastSection?: boolean
  onStartPractice?: () => void
}) {
  if (section.type === 'text') {
    return (
      <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h1:text-5xl prose-h1:mb-8 prose-h1:mt-0 prose-h1:leading-tight prose-h1:text-gray-900 dark:prose-h1:text-white prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-5 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-lg prose-strong:text-purple-700 dark:prose-strong:text-purple-400 prose-strong:font-semibold prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline prose-code:text-purple-600 dark:prose-code:text-purple-400 prose-code:bg-purple-50 dark:prose-code:bg-purple-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-ul:my-6 prose-ul:space-y-2 prose-li:my-2 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:text-lg">
        <style jsx>{`
          :global(.prose h1) {
            font-size: 3rem !important;
            margin-bottom: 2rem !important;
            line-height: 1.2 !important;
            font-weight: 800 !important;
          }
          :global(.prose ul) {
            margin-top: 1.5rem !important;
            margin-bottom: 2rem !important;
          }
          :global(.prose li) {
            font-size: 1.125rem !important;
            margin-top: 0.5rem !important;
            margin-bottom: 0.5rem !important;
          }
          :global(.prose p) {
            font-size: 1.125rem !important;
            margin-bottom: 1.25rem !important;
          }
        `}</style>
        <FadeInText content={section.content} onComplete={onComplete} />
      </div>
    )
  }

  if (section.type === 'input-boxes') {
    return (
      <InputBoxExercise 
        section={section} 
        onComplete={onComplete}
        isComplete={isComplete}
      />
    )
  }

  if (section.type === 'dropdown-select') {
    return (
      <DropdownExercise 
        section={section} 
        onComplete={onComplete}
        isComplete={isComplete}
      />
    )
  }

  if (section.type === 'reference-angle-quiz') {
    return (
      <ReferenceAngleQuiz 
        section={section} 
        onComplete={onComplete}
        isComplete={isComplete}
      />
    )
  }

  if (section.type === 'factoring-practice') {
    return (
      <FactoringPractice 
        section={section} 
        onComplete={onComplete}
        isComplete={isComplete}
      />
    )
  }

  if (section.type === 'multiple-choice') {
    return (
      <MultipleChoiceQuiz 
        section={section} 
        onComplete={onComplete}
        isComplete={isComplete}
      />
    )
  }

  if (section.type === 'mini-boss') {
    return (
      <MiniBossBattle 
        section={section} 
        onComplete={onComplete}
        isComplete={isComplete}
      />
    )
  }

  return <div>Unknown section type</div>
}

// Reference Angle Quiz Component
function ReferenceAngleQuiz({ section, onComplete, isComplete }: { section: Section, onComplete: () => void, isComplete: boolean }) {
  const [currentAngle, setCurrentAngle] = useState<number>(0)
  const [userAnswer, setUserAnswer] = useState<string>('')
  const [correctStreak, setCorrectStreak] = useState<number>(0)
  const [attemptCount, setAttemptCount] = useState<number>(0)
  const [feedback, setFeedback] = useState<string>('')
  const [feedbackType, setFeedbackType] = useState<'correct' | 'incorrect' | 'hint' | ''>('')
  const [hint1UsedCount, setHint1UsedCount] = useState<number>(0) // Track how many times hint 1 used
  const [hint2Used, setHint2Used] = useState<boolean>(false) // Track if hint 2 was used
  const [showingAnswer, setShowingAnswer] = useState<boolean>(false)

  // Generate random angle on mount and when moving to next question
  useEffect(() => {
    if (currentAngle === 0) {
      generateNewAngle()
    }
  }, [])

  const generateNewAngle = () => {
    const angle = Math.floor(Math.random() * 361) // 0 to 360 inclusive
    setCurrentAngle(angle)
    setUserAnswer('')
    setAttemptCount(0)
    setFeedback('')
    setFeedbackType('')
    setHint1UsedCount(0)
    setHint2Used(false)
    setShowingAnswer(false)
  }

  const getQuadrant = (angle: number): number => {
    if (angle >= 0 && angle <= 90) return 1
    if (angle > 90 && angle <= 180) return 2
    if (angle > 180 && angle <= 270) return 3
    return 4
  }

  const calculateReferenceAngle = (angle: number): number => {
    const quadrant = getQuadrant(angle)
    if (quadrant === 1) return angle
    if (quadrant === 2) return 180 - angle
    if (quadrant === 3) return angle - 180
    return 360 - angle
  }

  const getQuadrantFormula = (angle: number): string => {
    const quadrant = getQuadrant(angle)
    if (quadrant === 1) return 'the angle itself'
    if (quadrant === 2) return '180° - angle'
    if (quadrant === 3) return 'angle - 180°'
    return '360° - angle'
  }

  const handleSubmit = () => {
    const correctAnswer = calculateReferenceAngle(currentAngle)
    const userNum = parseFloat(userAnswer)

    if (isNaN(userNum)) {
      setFeedback('Please enter a valid number')
      setFeedbackType('incorrect')
      return
    }

    if (Math.abs(userNum - correctAnswer) < 0.01) {
      // Correct!
      // Only reset streak if hint 2 was used OR hint 1 was used more than once
      const shouldResetStreak = hint2Used || hint1UsedCount > 1
      
      if (!shouldResetStreak) {
        const newStreak = correctStreak + 1
        setCorrectStreak(newStreak)
        if (hint1UsedCount === 1) {
          setFeedback(`✅ Correct! Streak: ${newStreak}/5 (used hint 1 once - no penalty)`)
        } else {
          setFeedback(`✅ Correct! Streak: ${newStreak}/5`)
        }
        setFeedbackType('correct')
        
        if (newStreak >= 5) {
          setTimeout(() => {
            onComplete()
          }, 1500)
        } else {
          setTimeout(() => {
            generateNewAngle()
          }, 1500)
        }
      } else {
        if (hint2Used) {
          setFeedback('✅ Correct, but you used hint 2. Streak reset to 0.')
        } else {
          setFeedback('✅ Correct, but you used hint 1 multiple times. Streak reset to 0.')
        }
        setFeedbackType('correct')
        setCorrectStreak(0)
        setTimeout(() => {
          generateNewAngle()
        }, 2000)
      }
    } else {
      // Incorrect answer
      const newAttemptCount = attemptCount + 1
      setAttemptCount(newAttemptCount)
      
      if (newAttemptCount === 1) {
        // First incorrect attempt - show Hint 1
        setHint1UsedCount(prev => prev + 1)
        const quadrant = getQuadrant(currentAngle)
        setFeedback(`❌ Incorrect. Hint: ${currentAngle}° is in Quadrant ${quadrant === 1 ? 'I' : quadrant === 2 ? 'II' : quadrant === 3 ? 'III' : 'IV'}. Try again!`)
        setFeedbackType('hint')
        setUserAnswer('')
      } else if (newAttemptCount === 2) {
        // Second incorrect attempt - show Hint 2
        setHint1UsedCount(prev => prev + 1)
        const formula = getQuadrantFormula(currentAngle)
        setFeedback(`❌ Incorrect again. Hint: Use the formula: ${formula}. One more try!`)
        setFeedbackType('hint')
        setUserAnswer('')
      } else {
        // Third incorrect attempt - show answer and move to next
        setHint2Used(true)
        setFeedback(`❌ The correct answer is ${correctAnswer}°. Let's try another one.`)
        setFeedbackType('incorrect')
        setCorrectStreak(0)
        setShowingAnswer(true)
        setTimeout(() => {
          generateNewAngle()
        }, 3000)
      }
    }
  }

  const handleHint1 = () => {
    // Hints are now shown automatically after incorrect attempts
  }

  const handleHint2 = () => {
    // Hints are now shown automatically after incorrect attempts
  }

  if (isComplete || correctStreak >= 5) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border-2 border-green-500">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">
            Perfect! 5 Correct in a Row!
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            You've mastered finding reference angles without hints!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <FadeInText content={section.content} onComplete={() => {}} />
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border-2 border-purple-300 dark:border-purple-700">
        {/* Progress */}
        <div className="mb-6 text-center">
          <div className="inline-block bg-purple-100 dark:bg-purple-900/40 rounded-full px-6 py-3">
            <span className="text-2xl font-bold text-purple-700 dark:text-purple-400">
              Correct Streak: {correctStreak}/5
            </span>
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">
            What is the reference angle for:
          </p>
          <div className="text-6xl font-bold text-purple-700 dark:text-purple-400 mb-6">
            {currentAngle}°
          </div>

          {/* Answer Input */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              className="w-32 h-16 text-center text-2xl font-bold border-2 border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="?"
              disabled={feedbackType === 'correct'}
            />
            <span className="text-2xl font-bold text-gray-600 dark:text-gray-400">°</span>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={feedbackType === 'correct' || showingAnswer}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-bold rounded-lg text-xl transition-all shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
          >
            Check Answer
          </button>
        </div>

        {/* Feedback */}
        {feedback && (
          <div className={`text-center p-4 rounded-lg text-xl font-semibold ${
            feedbackType === 'correct' 
              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-2 border-green-500' 
              : feedbackType === 'hint'
              ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-2 border-yellow-500'
              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-2 border-red-500'
          }`}>
            {feedback}
          </div>
        )}

        {/* Attempt counter */}
        {attemptCount > 0 && !showingAnswer && feedbackType !== 'correct' && (
          <div className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
            Attempt {attemptCount}/3 • {
              hint2Used 
                ? 'Used hint 2 - streak will reset' 
                : hint1UsedCount > 1 
                ? 'Used hint 1 multiple times - streak will reset'
                : hint1UsedCount === 1
                ? 'Used hint 1 once - no penalty!'
                : 'Get it right for your streak!'
            }
          </div>
        )}
      </div>
    </div>
  )
}

// Sine Table Component
function SineTable() {
  const data = [
    { angle: '0°', value: '0' },
    { angle: '30°', value: '\\frac{1}{2}' },
    { angle: '45°', value: '\\frac{\\sqrt{2}}{2}' },
    { angle: '60°', value: '\\frac{\\sqrt{3}}{2}' },
    { angle: '90°', value: '1' },
  ]

  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse rounded-xl overflow-hidden shadow-2xl">
        <thead className="bg-gradient-to-r from-purple-600 to-purple-800">
          <tr>
            <th className="px-6 py-4 text-center text-white text-xl font-bold border-b-4 border-white/30">
              θ (theta)
            </th>
            <th className="px-6 py-4 text-center text-white text-xl font-bold border-b-4 border-white/30">
              sin(θ)
            </th>
          </tr>
        </thead>
        <tbody className="bg-gradient-to-b from-purple-500 to-purple-700">
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white/5' : 'bg-white/10'}>
              <td className="px-6 py-4 text-center text-white text-2xl font-semibold border-b border-white/10">
                {row.angle}
              </td>
              <td className="px-6 py-4 text-center text-white text-2xl font-semibold border-b border-white/10">
                {row.value === '0' || row.value === '1' ? (
                  row.value
                ) : (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString(row.value, { 
                        throwOnError: false,
                        displayMode: false,
                        output: 'html'
                      })
                    }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Cosine Table Component
function CosineTable() {
  const data = [
    { angle: '0°', value: '1' },
    { angle: '30°', value: '\\frac{\\sqrt{3}}{2}' },
    { angle: '45°', value: '\\frac{\\sqrt{2}}{2}' },
    { angle: '60°', value: '\\frac{1}{2}' },
    { angle: '90°', value: '0' },
  ]

  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse rounded-xl overflow-hidden shadow-2xl">
        <thead className="bg-gradient-to-r from-pink-600 to-red-600">
          <tr>
            <th className="px-6 py-4 text-center text-white text-xl font-bold border-b-4 border-white/30">
              θ (theta)
            </th>
            <th className="px-6 py-4 text-center text-white text-xl font-bold border-b-4 border-white/30">
              cos(θ)
            </th>
          </tr>
        </thead>
        <tbody className="bg-gradient-to-b from-pink-500 to-red-600">
          {data.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white/5' : 'bg-white/10'}>
              <td className="px-6 py-4 text-center text-white text-2xl font-semibold border-b border-white/10">
                {row.angle}
              </td>
              <td className="px-6 py-4 text-center text-white text-2xl font-semibold border-b border-white/10">
                {row.value === '0' || row.value === '1' ? (
                  row.value
                ) : (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString(row.value, { 
                        throwOnError: false,
                        displayMode: false,
                        output: 'html'
                      })
                    }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Unit Circle Diagram Component
function UnitCircleDiagram() {
  return (
    <div className="my-8 flex justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 border-2 border-purple-200 dark:border-purple-700">
        <svg width="500" height="500" viewBox="-260 -260 520 520" className="max-w-full h-auto">
          {/* Grid lines */}
          <g stroke="#e5e7eb" strokeWidth="1" opacity="0.3">
            {[-200, -150, -100, -50, 50, 100, 150, 200].map(pos => (
              <g key={pos}>
                <line x1={pos} y1="-250" x2={pos} y2="250" />
                <line x1="-250" y1={pos} x2="250" y2={pos} />
              </g>
            ))}
          </g>
          
          {/* Axes */}
          <line x1="-250" y1="0" x2="250" y2="0" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead-x)" />
          <line x1="0" y1="250" x2="0" y2="-250" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead-y)" />
          
          {/* Arrow markers */}
          <defs>
            <marker id="arrowhead-x" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#6b7280" />
            </marker>
            <marker id="arrowhead-y" markerWidth="10" markerHeight="10" refX="3" refY="1" orient="auto">
              <polygon points="0 0, 6 10, 3 0" fill="#6b7280" />
            </marker>
          </defs>
          
          {/* Axis labels */}
          <text x="230" y="-10" fill="#6b7280" fontSize="18" fontWeight="bold">x</text>
          <text x="10" y="-230" fill="#6b7280" fontSize="18" fontWeight="bold">y</text>
          
          {/* The Unit Circle */}
          <circle cx="0" cy="0" r="200" fill="none" stroke="#8b5cf6" strokeWidth="4" />
          
          {/* Radius = 1 label */}
          <line x1="0" y1="0" x2="141" y2="-141" stroke="#ec4899" strokeWidth="2" strokeDasharray="5,5" />
          <text x="75" y="-80" fill="#ec4899" fontSize="16" fontWeight="bold">r = 1</text>
          
          {/* Origin point */}
          <circle cx="0" cy="0" r="5" fill="#6b7280" />
          <text x="10" y="20" fill="#6b7280" fontSize="14">(0, 0)</text>
          
          {/* Key points on the circle (First Quadrant) */}
          {/* 0° - (1, 0) */}
          <circle cx="200" cy="0" r="6" fill="#10b981" />
          <text x="210" y="5" fill="#10b981" fontSize="14" fontWeight="bold">(1, 0)</text>
          <text x="210" y="20" fill="#10b981" fontSize="12">0°</text>
          
          {/* 30° */}
          <circle cx="173" cy="-100" r="6" fill="#10b981" />
          <text x="180" y="-95" fill="#10b981" fontSize="12" fontWeight="bold">30°</text>
          
          {/* 45° */}
          <circle cx="141" cy="-141" r="6" fill="#10b981" />
          <text x="150" y="-145" fill="#10b981" fontSize="12" fontWeight="bold">45°</text>
          
          {/* 60° */}
          <circle cx="100" cy="-173" r="6" fill="#10b981" />
          <text x="105" y="-175" fill="#10b981" fontSize="12" fontWeight="bold">60°</text>
          
          {/* 90° - (0, 1) */}
          <circle cx="0" cy="-200" r="6" fill="#10b981" />
          <text x="10" y="-195" fill="#10b981" fontSize="14" fontWeight="bold">(0, 1)</text>
          <text x="10" y="-180" fill="#10b981" fontSize="12">90°</text>
          
          {/* Quadrant labels */}
          <text x="120" y="-120" fill="#8b5cf6" fontSize="20" fontWeight="bold" opacity="0.5">Q1</text>
          <text x="-140" y="-120" fill="#8b5cf6" fontSize="20" fontWeight="bold" opacity="0.3">Q2</text>
          <text x="-140" y="140" fill="#8b5cf6" fontSize="20" fontWeight="bold" opacity="0.3">Q3</text>
          <text x="120" y="140" fill="#8b5cf6" fontSize="20" fontWeight="bold" opacity="0.3">Q4</text>
          
          {/* Scale markers */}
          <text x="195" y="20" fill="#6b7280" fontSize="12">1</text>
          <text x="-215" y="20" fill="#6b7280" fontSize="12">-1</text>
          <text x="10" y="-195" fill="#6b7280" fontSize="12">1</text>
          <text x="10" y="210" fill="#6b7280" fontSize="12">-1</text>
        </svg>
        
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="font-semibold">The Unit Circle: A circle with radius = 1 centered at the origin</p>
          <p className="mt-2">First quadrant (Q1) highlighted with key angles: 0°, 30°, 45°, 60°, 90°</p>
        </div>
      </div>
    </div>
  )
}

// Unit Circle Animation Component
function UnitCircleAnimation() {
  return (
    <div className="my-8 flex justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 border-2 border-indigo-200 dark:border-indigo-700">
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Use iframe to embed the HTML animation */}
          <iframe
            src="/animations/unit-circle-animation.html"
            className="w-full h-[800px] rounded-lg border-0"
            title="Animated visualization of the unit circle showing the first quadrant with angles and coordinates"
          />
        </div>
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p className="font-semibold">Interactive Animation: Building the Unit Circle</p>
          <p className="mt-2">Watch how the angles and coordinate values populate in the first quadrant</p>
        </div>
      </div>
    </div>
  )
}

// Interactive Unit Circle Game Component
function UnitCircleGame({ onComplete }: { onComplete?: () => void }) {
  const [answers, setAnswers] = useState<Record<string, string>>({
    angle0: '',
    angle30: '',
    angle45: '',
    angle60: '',
    angle90: '',
    x0: '',
    y0: '',
    x30: '',
    y30: '',
    x45: '',
    y45: '',
    x60: '',
    y60: '',
    x90: '',
    y90: '',
  })

  const [checked, setChecked] = useState<Record<string, boolean | null>>({})
  const [allCorrect, setAllCorrect] = useState(false)

  const correctAnswers: Record<string, string[]> = {
    angle0: ['0'],
    angle30: ['30'],
    angle45: ['45'],
    angle60: ['60'],
    angle90: ['90'],
    x0: ['1'],
    y0: ['0'],
    x30: ['√3/2', 'sqrt3/2', 'sqrt(3)/2'],
    y30: ['1/2'],
    x45: ['√2/2', 'sqrt2/2', 'sqrt(2)/2'],
    y45: ['√2/2', 'sqrt2/2', 'sqrt(2)/2'],
    x60: ['1/2'],
    y60: ['√3/2', 'sqrt3/2', 'sqrt(3)/2'],
    x90: ['0'],
    y90: ['1'],
  }

  const handleInputChange = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value })
    // Reset check status when user changes input
    if (checked[key] !== undefined) {
      setChecked({ ...checked, [key]: null })
    }
  }

  const handleBlur = (key: string) => {
    const userAnswer = answers[key].trim().toLowerCase().replace(/\s+/g, '')
    if (userAnswer === '') {
      setChecked({ ...checked, [key]: null })
      return
    }

    const isCorrect = correctAnswers[key].some(correct => 
      userAnswer === correct.toLowerCase().replace(/\s+/g, '')
    )
    
    setChecked({ ...checked, [key]: isCorrect })

    // Check if all answers are correct
    const allKeys = Object.keys(correctAnswers)
    const allAnswered = allKeys.every(k => answers[k].trim() !== '')
    if (allAnswered) {
      const allRight = allKeys.every(k => {
        const uAnswer = answers[k].trim().toLowerCase().replace(/\s+/g, '')
        return correctAnswers[k].some(correct => 
          uAnswer === correct.toLowerCase().replace(/\s+/g, '')
        )
      })
      if (allRight) {
        setAllCorrect(true)
        // Call onComplete when all answers are correct
        if (onComplete) {
          onComplete()
        }
      } else {
        setAllCorrect(false)
      }
    }
  }

  const getInputClassName = (key: string) => {
    const baseClasses = "w-full px-2 py-1 border-2 rounded text-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-400"
    if (checked[key] === true) {
      return `${baseClasses} border-green-500 bg-green-50 dark:bg-green-900 text-gray-900 dark:text-white`
    } else if (checked[key] === false) {
      return `${baseClasses} border-red-500 bg-red-50 dark:bg-red-900 text-gray-900 dark:text-white`
    }
    return `${baseClasses} border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white`
  }

  // Format display value to show √ instead of sqrt
  const formatDisplayValue = (value: string) => {
    if (!value || value.trim() === '') return value
    
    // Convert common patterns to LaTeX
    let latex = value
      .replace(/sqrt\((\d+)\)\/(\d+)/gi, '\\frac{\\sqrt{$1}}{$2}')
      .replace(/sqrt(\d+)\/(\d+)/gi, '\\frac{\\sqrt{$1}}{$2}')
      .replace(/sqrt\((\d+)\)/gi, '\\sqrt{$1}')
      .replace(/sqrt(\d+)/gi, '\\sqrt{$1}')
    
    // Check if we need to apply fraction formatting (only if not already in a fraction)
    if (!latex.includes('\\frac') && latex.match(/(\d+)\/(\d+)/)) {
      latex = latex.replace(/(\d+)\/(\d+)/g, '\\frac{$1}{$2}')
    }
    
    // If it contains LaTeX commands, render with KaTeX
    if (latex.includes('\\')) {
      try {
        const html = katex.renderToString(latex, {
          throwOnError: false,
          displayMode: false,
          output: 'html',
          strict: false
        })
        return html
      } catch (e) {
        console.error('KaTeX rendering error:', e)
        // Fallback to simple replacement
        return value
          .replace(/sqrt\((\d+)\)/gi, '√$1')
          .replace(/sqrt(\d+)/gi, '√$1')
      }
    }
    
    return value
  }

  // Render input with formatted display
  const renderInput = (key: string, placeholder: string, width: string) => {
    const displayValue = formatDisplayValue(answers[key])
    const hasLatex = displayValue && displayValue.includes('katex')
    
    return (
      <div style={{ width, height: '32px', position: 'relative' }}>
        <input
          type="text"
          value={answers[key]}
          onChange={(e) => handleInputChange(key, e.target.value)}
          onBlur={() => handleBlur(key)}
          placeholder={placeholder}
          className={getInputClassName(key)}
          style={{ 
            fontSize: '14px',
            opacity: answers[key] ? 0 : 1,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          }}
        />
        {answers[key] && (
          <div 
            className={getInputClassName(key)}
            style={{ 
              fontSize: hasLatex ? '16px' : '14px',
              position: 'absolute',
              top: 0,
              left: 0,
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              width: '100%',
              overflow: 'hidden'
            }}
          >
            {hasLatex ? (
              <span dangerouslySetInnerHTML={{ __html: displayValue }} />
            ) : (
              displayValue
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="my-8 flex justify-center">
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-2xl p-8 border-2 border-indigo-300 dark:border-indigo-700 max-w-5xl w-full">
        <h3 className="text-2xl font-bold text-center mb-4 text-indigo-900 dark:text-indigo-200">
          🎮 Fill in the First Quadrant!
        </h3>
        
        {allCorrect && (
          <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 border-2 border-green-500 rounded-lg text-center animate-bounce">
            <p className="text-xl font-bold text-green-800 dark:text-green-200">🎉 Perfect! You've mastered the first quadrant!</p>
          </div>
        )}

        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200 text-center">
            <strong>💡 Instructions:</strong> Fill in the angles and x, y coordinates. Use √ or sqrt for square roots (e.g., √2/2 or sqrt(2)/2).
          </p>
        </div>

        <div className="relative w-full mx-auto" style={{ maxWidth: '900px' }}>
          <svg width="100%" height="700" viewBox="0 0 900 700" className="bg-white rounded-lg shadow-inner">
            {/* Grid */}
            <g stroke="#e2e8f0" strokeWidth="1">
              <line x1="0" y1="350" x2="900" y2="350"/>
              <line x1="450" y1="0" x2="450" y2="700"/>
              <circle cx="450" cy="350" r="280" fill="none" stroke="#cbd5e1" strokeDasharray="5,5"/>
            </g>
            
            {/* Axes */}
            <line x1="50" y1="350" x2="850" y2="350" stroke="#64748b" strokeWidth="3"/>
            <line x1="450" y1="650" x2="450" y2="50" stroke="#64748b" strokeWidth="3"/>
            
            {/* Axis labels */}
            <text x="820" y="340" fontSize="24" fill="#64748b" fontWeight="bold">x</text>
            <text x="460" y="80" fontSize="24" fill="#64748b" fontWeight="bold">y</text>
            
            {/* Unit circle */}
            <circle cx="450" cy="350" r="280" fill="none" stroke="#8b5cf6" strokeWidth="5"/>
            
            {/* Origin */}
            <circle cx="450" cy="350" r="6" fill="#64748b"/>
            <text x="460" y="370" fontSize="16" fill="#64748b">(0, 0)</text>
            
            {/* Angle points - positioned exactly on the circle perimeter */}
            {/* 0° at (450 + 280, 350) = (730, 350) */}
            <circle cx="730" cy="350" r="10" fill="#10b981"/>
            
            {/* 30° at angle 60° from horizontal (cos(60°), sin(60°)) */}
            {/* x = 450 + 280*cos(60°) = 450 + 280*0.5 = 590 */}
            {/* y = 350 - 280*sin(60°) = 350 - 280*0.866 = 107.5 */}
            <circle cx="590" cy="107.5" r="10" fill="#10b981"/>
            
            {/* 45° at (cos(45°), sin(45°)) */}
            {/* x = 450 + 280*cos(45°) = 450 + 280*0.707 = 648 */}
            {/* y = 350 - 280*sin(45°) = 350 - 280*0.707 = 152 */}
            <circle cx="648" cy="152" r="10" fill="#10b981"/>
            
            {/* 60° at angle 30° from horizontal (cos(30°), sin(30°)) */}
            {/* x = 450 + 280*cos(30°) = 450 + 280*0.866 = 692.5 */}
            {/* y = 350 - 280*sin(30°) = 350 - 280*0.5 = 210 */}
            <circle cx="692.5" cy="210" r="10" fill="#10b981"/>
            
            {/* 90° at (450, 350 - 280) = (450, 70) */}
            <circle cx="450" cy="70" r="10" fill="#10b981"/>
            
            {/* 0° - angle and coordinates */}
            <foreignObject x="660" y="380" width="70" height="32">
              {renderInput('angle0', 'angle', '70px')}
            </foreignObject>
            <text x="755" y="340" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="765" y="320" width="50" height="32">
              {renderInput('x0', 'x', '50px')}
            </foreignObject>
            <text x="818" y="340" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="825" y="320" width="50" height="32">
              {renderInput('y0', 'y', '50px')}
            </foreignObject>
            <text x="878" y="340" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* 30° - angle and coordinates */}
            <foreignObject x="610" y="235" width="70" height="32">
              {renderInput('angle30', 'angle', '70px')}
            </foreignObject>
            <text x="715" y="205" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="725" y="185" width="70" height="32">
              {renderInput('x30', 'x', '70px')}
            </foreignObject>
            <text x="798" y="205" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="805" y="185" width="50" height="32">
              {renderInput('y30', 'y', '50px')}
            </foreignObject>
            <text x="858" y="205" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* 45° - angle and coordinates */}
            <foreignObject x="565" y="165" width="70" height="32">
              {renderInput('angle45', 'angle', '70px')}
            </foreignObject>
            <text x="675" y="145" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="685" y="125" width="70" height="32">
              {renderInput('x45', 'x', '70px')}
            </foreignObject>
            <text x="758" y="145" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="765" y="125" width="70" height="32">
              {renderInput('y45', 'y', '70px')}
            </foreignObject>
            <text x="838" y="145" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* 60° - angle and coordinates */}
            <foreignObject x="510" y="118" width="70" height="32">
              {renderInput('angle60', 'angle', '70px')}
            </foreignObject>
            <text x="610" y="88" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="620" y="68" width="50" height="32">
              {renderInput('x60', 'x', '50px')}
            </foreignObject>
            <text x="673" y="88" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="680" y="68" width="70" height="32">
              {renderInput('y60', 'y', '70px')}
            </foreignObject>
            <text x="753" y="88" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* 90° - angle and coordinates */}
            <foreignObject x="365" y="95" width="70" height="32">
              {renderInput('angle90', 'angle', '70px')}
            </foreignObject>
            <text x="310" y="50" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="320" y="30" width="50" height="32">
              {renderInput('x90', 'x', '50px')}
            </foreignObject>
            <text x="373" y="50" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="380" y="30" width="50" height="32">
              {renderInput('y90', 'y', '50px')}
            </foreignObject>
            <text x="433" y="50" fontSize="14" fill="#666" fontWeight="bold">)</text>
          </svg>
        </div>

        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>Boxes turn <span className="text-green-600 font-bold">green ✓</span> when correct, <span className="text-red-600 font-bold">red ✗</span> when incorrect</p>
        </div>
      </div>
    </div>
  )
}

// Full Unit Circle Game Component (All 4 Quadrants)
function FullUnitCircleGame({ onComplete }: { onComplete?: () => void }) {
  // 16 angles total (0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330)
  // 32 coordinates (x and y for each angle)
  // Total: 48 inputs
  const [answers, setAnswers] = useState<Record<string, string>>({
    // Quadrant I
    angle0: '', x0: '', y0: '',
    angle30: '', x30: '', y30: '',
    angle45: '', x45: '', y45: '',
    angle60: '', x60: '', y60: '',
    angle90: '', x90: '', y90: '',
    // Quadrant II
    angle120: '', x120: '', y120: '',
    angle135: '', x135: '', y135: '',
    angle150: '', x150: '', y150: '',
    angle180: '', x180: '', y180: '',
    // Quadrant III
    angle210: '', x210: '', y210: '',
    angle225: '', x225: '', y225: '',
    angle240: '', x240: '', y240: '',
    angle270: '', x270: '', y270: '',
    // Quadrant IV
    angle300: '', x300: '', y300: '',
    angle315: '', x315: '', y315: '',
    angle330: '', x330: '', y330: '',
  })

  const [checked, setChecked] = useState<Record<string, boolean | null>>({})
  const [allCorrect, setAllCorrect] = useState(false)

  const correctAnswers: Record<string, string[]> = {
    // Quadrant I (0° to 90°)
    angle0: ['0'], x0: ['1'], y0: ['0'],
    angle30: ['30'], x30: ['√3/2', 'sqrt3/2', 'sqrt(3)/2'], y30: ['1/2'],
    angle45: ['45'], x45: ['√2/2', 'sqrt2/2', 'sqrt(2)/2'], y45: ['√2/2', 'sqrt2/2', 'sqrt(2)/2'],
    angle60: ['60'], x60: ['1/2'], y60: ['√3/2', 'sqrt3/2', 'sqrt(3)/2'],
    angle90: ['90'], x90: ['0'], y90: ['1'],
    // Quadrant II (90° to 180°)
    angle120: ['120'], x120: ['-1/2'], y120: ['√3/2', 'sqrt3/2', 'sqrt(3)/2'],
    angle135: ['135'], x135: ['-√2/2', '-sqrt2/2', '-sqrt(2)/2'], y135: ['√2/2', 'sqrt2/2', 'sqrt(2)/2'],
    angle150: ['150'], x150: ['-√3/2', '-sqrt3/2', '-sqrt(3)/2'], y150: ['1/2'],
    angle180: ['180'], x180: ['-1'], y180: ['0'],
    // Quadrant III (180° to 270°)
    angle210: ['210'], x210: ['-√3/2', '-sqrt3/2', '-sqrt(3)/2'], y210: ['-1/2'],
    angle225: ['225'], x225: ['-√2/2', '-sqrt2/2', '-sqrt(2)/2'], y225: ['-√2/2', '-sqrt2/2', '-sqrt(2)/2'],
    angle240: ['240'], x240: ['-1/2'], y240: ['-√3/2', '-sqrt3/2', '-sqrt(3)/2'],
    angle270: ['270'], x270: ['0'], y270: ['-1'],
    // Quadrant IV (270° to 360°)
    angle300: ['300'], x300: ['1/2'], y300: ['-√3/2', '-sqrt3/2', '-sqrt(3)/2'],
    angle315: ['315'], x315: ['√2/2', 'sqrt2/2', 'sqrt(2)/2'], y315: ['-√2/2', '-sqrt2/2', '-sqrt(2)/2'],
    angle330: ['330'], x330: ['√3/2', 'sqrt3/2', 'sqrt(3)/2'], y330: ['-1/2'],
  }

  const handleInputChange = (key: string, value: string) => {
    setAnswers({ ...answers, [key]: value })
    if (checked[key] !== undefined) {
      setChecked({ ...checked, [key]: null })
    }
  }

  const handleBlur = (key: string) => {
    const userAnswer = answers[key].trim().toLowerCase().replace(/\s+/g, '')
    if (userAnswer === '') {
      setChecked({ ...checked, [key]: null })
      return
    }

    const isCorrect = correctAnswers[key].some(
      (correct) => userAnswer === correct.toLowerCase().replace(/\s+/g, '')
    )
    setChecked({ ...checked, [key]: isCorrect })

    // Check if all fields are filled and correct
    const allKeys = Object.keys(correctAnswers)
    const allAnswered = allKeys.every((k) => answers[k]?.trim() !== '')
    
    if (allAnswered) {
      const allRight = allKeys.every((k) => {
        const uAnswer = answers[k].trim().toLowerCase().replace(/\s+/g, '')
        return correctAnswers[k].some((correct) => uAnswer === correct.toLowerCase().replace(/\s+/g, ''))
      })
      if (allRight) {
        setAllCorrect(true)
        if (onComplete) {
          onComplete()
        }
      } else {
        setAllCorrect(false)
      }
    }
  }

  const formatDisplayValue = (value: string): string => {
    if (!value) return ''
    
    let formatted = value
    // Handle negative sqrt patterns
    formatted = formatted.replace(/-sqrt\((\d+)\)\/(\d+)/gi, '-\\frac{\\sqrt{$1}}{$2}')
    formatted = formatted.replace(/-sqrt(\d+)\/(\d+)/gi, '-\\frac{\\sqrt{$1}}{$2}')
    // Handle positive sqrt patterns
    formatted = formatted.replace(/sqrt\((\d+)\)\/(\d+)/gi, '\\frac{\\sqrt{$1}}{$2}')
    formatted = formatted.replace(/sqrt(\d+)\/(\d+)/gi, '\\frac{\\sqrt{$1}}{$2}')
    // Handle simple fractions
    formatted = formatted.replace(/^-(\d+)\/(\d+)$/gi, '-\\frac{$1}{$2}')
    formatted = formatted.replace(/^(\d+)\/(\d+)$/gi, '\\frac{$1}{$2}')
    
    try {
      return katex.renderToString(formatted, {
        throwOnError: false,
        displayMode: false,
        output: 'html',
      })
    } catch {
      return value
    }
  }

  const renderInput = (key: string, placeholder: string, width: string) => {
    const borderColor = 
      checked[key] === true ? '#22c55e' : 
      checked[key] === false ? '#ef4444' : 
      '#d1d5db'
    
    return (
      <div style={{ position: 'relative', width, height: '32px' }}>
        <input
          type="text"
          value={answers[key] || ''}
          onChange={(e) => handleInputChange(key, e.target.value)}
          onBlur={() => handleBlur(key)}
          placeholder={placeholder}
          className="dark:bg-gray-800 dark:text-white"
          style={{
            width: '100%',
            height: '100%',
            padding: '4px 6px',
            border: `2px solid ${borderColor}`,
            borderRadius: '4px',
            fontSize: '14px',
            textAlign: 'center',
            backgroundColor: 'white',
            color: 'black',
            opacity: answers[key] ? 0 : 1,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        {answers[key] && (
          <div
            className="dark:bg-gray-800 dark:text-white"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              padding: '4px 6px',
              border: `2px solid ${borderColor}`,
              borderRadius: '4px',
              fontSize: '14px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              color: 'black',
              pointerEvents: 'none',
            }}
            dangerouslySetInnerHTML={{ __html: formatDisplayValue(answers[key]) }}
          />
        )}
      </div>
    )
  }

  return (
    <div className="my-8">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg p-8 border-2 border-purple-300 dark:border-purple-700">
        {allCorrect && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border-2 border-green-500 rounded-lg text-center">
            <p className="text-2xl font-bold text-green-700 dark:text-green-300">🎉 Perfect! You've mastered the complete unit circle! 🎉</p>
          </div>
        )}
        
        <div className="flex justify-center">
          <svg viewBox="-50 0 1100 1000" style={{ width: '100%', maxWidth: '1200px', height: 'auto' }}>
            {/* Axes */}
            <line x1="50" y1="500" x2="950" y2="500" stroke="#666" strokeWidth="2" />
            <line x1="500" y1="50" x2="500" y2="950" stroke="#666" strokeWidth="2" />
            
            {/* Circle */}
            <circle cx="500" cy="500" r="350" fill="none" stroke="#9333ea" strokeWidth="3" />
            
            {/* Center dot */}
            <circle cx="500" cy="500" r="4" fill="#666" />

            {/* Quadrant I: 0° */}
            <circle cx="850" cy="500" r="6" fill="#22c55e" />
            <foreignObject x="740" y="484" width="70" height="32">
              {renderInput('angle0', 'angle', '70px')}
            </foreignObject>
            <text x="870" y="482" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="880" y="462" width="70" height="32">
              {renderInput('x0', 'x', '70px')}
            </foreignObject>
            <text x="953" y="482" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="960" y="462" width="70" height="32">
              {renderInput('y0', 'y', '70px')}
            </foreignObject>
            <text x="1033" y="482" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant I: 30° */}
            <circle cx="803.1" cy="325" r="6" fill="#22c55e" />
            <foreignObject x="710" y="310" width="70" height="32">
              {renderInput('angle30', 'angle', '70px')}
            </foreignObject>
            <text x="820" y="315" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="830" y="295" width="70" height="32">
              {renderInput('x30', 'x', '70px')}
            </foreignObject>
            <text x="903" y="315" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="910" y="295" width="70" height="32">
              {renderInput('y30', 'y', '70px')}
            </foreignObject>
            <text x="983" y="315" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant I: 45° */}
            <circle cx="747.5" cy="252.5" r="6" fill="#22c55e" />
            <foreignObject x="647" y="238" width="70" height="32">
              {renderInput('angle45', 'angle', '70px')}
            </foreignObject>
            <text x="763" y="241" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="773" y="221" width="70" height="32">
              {renderInput('x45', 'x', '70px')}
            </foreignObject>
            <text x="846" y="241" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="853" y="221" width="70" height="32">
              {renderInput('y45', 'y', '70px')}
            </foreignObject>
            <text x="926" y="241" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant I: 60° */}
            <circle cx="675" cy="196.9" r="6" fill="#22c55e" />
            <foreignObject x="570" y="179" width="70" height="32">
              {renderInput('angle60', 'angle', '70px')}
            </foreignObject>
            <text x="685" y="173" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="695" y="153" width="70" height="32">
              {renderInput('x60', 'x', '70px')}
            </foreignObject>
            <text x="768" y="173" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="775" y="153" width="70" height="32">
              {renderInput('y60', 'y', '70px')}
            </foreignObject>
            <text x="848" y="173" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant I: 90° */}
            <circle cx="500" cy="150" r="6" fill="#22c55e" />
            <foreignObject x="465" y="180" width="70" height="32">
              {renderInput('angle90', 'angle', '70px')}
            </foreignObject>
            <text x="410" y="125" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="420" y="105" width="70" height="32">
              {renderInput('x90', 'x', '70px')}
            </foreignObject>
            <text x="493" y="125" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="500" y="105" width="70" height="32">
              {renderInput('y90', 'y', '70px')}
            </foreignObject>
            <text x="573" y="125" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant II: 120° */}
            <circle cx="325" cy="196.9" r="6" fill="#22c55e" />
            <foreignObject x="360" y="179" width="70" height="32">
              {renderInput('angle120', 'angle', '70px')}
            </foreignObject>
            <text x="150" y="173" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="160" y="153" width="70" height="32">
              {renderInput('x120', 'x', '70px')}
            </foreignObject>
            <text x="233" y="173" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="240" y="153" width="70" height="32">
              {renderInput('y120', 'y', '70px')}
            </foreignObject>
            <text x="313" y="173" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant II: 135° */}
            <circle cx="252.5" cy="252.5" r="6" fill="#22c55e" />
            <foreignObject x="283" y="238" width="70" height="32">
              {renderInput('angle135', 'angle', '70px')}
            </foreignObject>
            <text x="75" y="237" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="85" y="217" width="70" height="32">
              {renderInput('x135', 'x', '70px')}
            </foreignObject>
            <text x="158" y="237" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="165" y="217" width="70" height="32">
              {renderInput('y135', 'y', '70px')}
            </foreignObject>
            <text x="238" y="237" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant II: 150° */}
            <circle cx="196.9" cy="325" r="6" fill="#22c55e" />
            <foreignObject x="220" y="310" width="70" height="32">
              {renderInput('angle150', 'angle', '70px')}
            </foreignObject>
            <text x="15" y="310" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="25" y="290" width="70" height="32">
              {renderInput('x150', 'x', '70px')}
            </foreignObject>
            <text x="98" y="310" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="105" y="290" width="70" height="32">
              {renderInput('y150', 'y', '70px')}
            </foreignObject>
            <text x="178" y="310" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant II: 180° */}
            <circle cx="150" cy="500" r="6" fill="#22c55e" />
            <foreignObject x="190" y="484" width="70" height="32">
              {renderInput('angle180', 'angle', '70px')}
            </foreignObject>
            <text x="-27" y="495" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="-17" y="475" width="70" height="32">
              {renderInput('x180', 'x', '70px')}
            </foreignObject>
            <text x="56" y="495" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="63" y="475" width="70" height="32">
              {renderInput('y180', 'y', '70px')}
            </foreignObject>
            <text x="138" y="495" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant III: 210° */}
            <circle cx="196.9" cy="675" r="6" fill="#22c55e" />
            <foreignObject x="220" y="658" width="70" height="32">
              {renderInput('angle210', 'angle', '70px')}
            </foreignObject>
            <text x="15" y="690" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="25" y="670" width="70" height="32">
              {renderInput('x210', 'x', '70px')}
            </foreignObject>
            <text x="98" y="690" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="105" y="670" width="70" height="32">
              {renderInput('y210', 'y', '70px')}
            </foreignObject>
            <text x="178" y="690" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant III: 225° */}
            <circle cx="252.5" cy="747.5" r="6" fill="#22c55e" />
            <foreignObject x="283" y="730" width="70" height="32">
              {renderInput('angle225', 'angle', '70px')}
            </foreignObject>
            <text x="75" y="762" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="85" y="742" width="70" height="32">
              {renderInput('x225', 'x', '70px')}
            </foreignObject>
            <text x="158" y="762" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="165" y="742" width="70" height="32">
              {renderInput('y225', 'y', '70px')}
            </foreignObject>
            <text x="238" y="762" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant III: 240° */}
            <circle cx="325" cy="803.1" r="6" fill="#22c55e" />
            <foreignObject x="360" y="789" width="70" height="32">
              {renderInput('angle240', 'angle', '70px')}
            </foreignObject>
            <text x="150" y="826" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="160" y="806" width="70" height="32">
              {renderInput('x240', 'x', '70px')}
            </foreignObject>
            <text x="233" y="826" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="240" y="806" width="70" height="32">
              {renderInput('y240', 'y', '70px')}
            </foreignObject>
            <text x="313" y="826" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant III: 270° */}
            <circle cx="500" cy="850" r="6" fill="#22c55e" />
            <foreignObject x="465" y="795" width="70" height="32">
              {renderInput('angle270', 'angle', '70px')}
            </foreignObject>
            <text x="410" y="875" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="420" y="855" width="70" height="32">
              {renderInput('x270', 'x', '70px')}
            </foreignObject>
            <text x="493" y="875" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="500" y="855" width="70" height="32">
              {renderInput('y270', 'y', '70px')}
            </foreignObject>
            <text x="573" y="875" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant IV: 300° */}
            <circle cx="675" cy="803.1" r="6" fill="#22c55e" />
            <foreignObject x="570" y="789" width="70" height="32">
              {renderInput('angle300', 'angle', '70px')}
            </foreignObject>
            <text x="685" y="826" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="695" y="806" width="70" height="32">
              {renderInput('x300', 'x', '70px')}
            </foreignObject>
            <text x="768" y="826" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="775" y="806" width="70" height="32">
              {renderInput('y300', 'y', '70px')}
            </foreignObject>
            <text x="848" y="826" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant IV: 315° */}
            <circle cx="747.5" cy="747.5" r="6" fill="#22c55e" />
            <foreignObject x="647" y="730" width="70" height="32">
              {renderInput('angle315', 'angle', '70px')}
            </foreignObject>
            <text x="760" y="762" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="770" y="742" width="70" height="32">
              {renderInput('x315', 'x', '70px')}
            </foreignObject>
            <text x="843" y="762" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="850" y="742" width="70" height="32">
              {renderInput('y315', 'y', '70px')}
            </foreignObject>
            <text x="923" y="762" fontSize="14" fill="#666" fontWeight="bold">)</text>

            {/* Quadrant IV: 330° */}
            <circle cx="803.1" cy="675" r="6" fill="#22c55e" />
            <foreignObject x="710" y="658" width="70" height="32">
              {renderInput('angle330', 'angle', '70px')}
            </foreignObject>
            <text x="820" y="690" fontSize="14" fill="#666" fontWeight="bold">(</text>
            <foreignObject x="830" y="670" width="70" height="32">
              {renderInput('x330', 'x', '70px')}
            </foreignObject>
            <text x="903" y="690" fontSize="14" fill="#666" fontWeight="bold">,</text>
            <foreignObject x="910" y="670" width="50" height="32">
              {renderInput('y330', 'y', '50px')}
            </foreignObject>
            <text x="963" y="690" fontSize="14" fill="#666" fontWeight="bold">)</text>
          </svg>
        </div>

        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>Boxes turn <span className="text-green-600 font-bold">green ✓</span> when correct, <span className="text-red-600 font-bold">red ✗</span> when incorrect</p>
          <p className="mt-2">Total: 16 angles + 32 coordinates = <strong>48 inputs</strong></p>
        </div>
      </div>
    </div>
  )
}

// Fade-in Text Component with LaTeX support
function FadeInText({ content, onComplete }: { content: string; onComplete?: () => void }) {
  const hasLatex = content.includes('$')
  const hasSineTable = content.includes('[SINE_TABLE]')
  const hasCosineTable = content.includes('[COSINE_TABLE]')
  const hasUnitCircle = content.includes('[UNIT_CIRCLE]')
  const hasUnitCircleAnimation = content.includes('[UNIT_CIRCLE_ANIMATION]')
  const hasUnitCircleGame = content.includes('[UNIT_CIRCLE_GAME]')
  const hasFullUnitCircleGame = content.includes('[FULL_UNIT_CIRCLE_GAME]')
  const hasIframe = content.includes('<iframe')
  
  // If content has tables, unit circle, animation, or game, split and render
  if (hasSineTable || hasCosineTable || hasUnitCircle || hasUnitCircleAnimation || hasUnitCircleGame || hasFullUnitCircleGame) {
    const parts = content.split(/(\[SINE_TABLE\]|\[COSINE_TABLE\]|\[UNIT_CIRCLE\]|\[UNIT_CIRCLE_ANIMATION\]|\[UNIT_CIRCLE_GAME\]|\[FULL_UNIT_CIRCLE_GAME\])/)
    
    return (
      <div className="animate-fade-in prose prose-lg max-w-none">
        {parts.map((part, index) => {
          if (part === '[SINE_TABLE]') {
            return <SineTable key={index} />
          } else if (part === '[COSINE_TABLE]') {
            return <CosineTable key={index} />
          } else if (part === '[UNIT_CIRCLE]') {
            return <UnitCircleDiagram key={index} />
          } else if (part === '[UNIT_CIRCLE_ANIMATION]') {
            return <UnitCircleAnimation key={index} />
          } else if (part === '[UNIT_CIRCLE_GAME]') {
            return <UnitCircleGame key={index} onComplete={onComplete} />
          } else if (part === '[FULL_UNIT_CIRCLE_GAME]') {
            return <FullUnitCircleGame key={index} onComplete={onComplete} />
          } else if (part.trim()) {
            return (
              <ReactMarkdown
                key={index}
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex, rehypeRaw]}
                components={{
                  h1: ({ children }) => <h1 className="text-4xl font-extrabold mb-6 mt-2 text-gray-900 dark:text-white leading-tight">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-3xl font-bold mb-4 mt-8 text-gray-900 dark:text-white leading-snug">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-2xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">{children}</h3>,
                  p: ({ children }) => <p className="text-lg leading-relaxed mb-4">{children}</p>,
                  strong: ({ children }) => <strong className="font-bold text-purple-700 dark:text-purple-400">{children}</strong>,
                  ul: ({ children }) => <ul className="space-y-3 text-lg ml-6">{children}</ul>,
                  li: ({ children }) => <li className="text-lg">{children}</li>,
                  table: ({ children }) => <table className="min-w-full border-collapse border-2 border-purple-300 dark:border-purple-700 my-6">{children}</table>,
                  thead: ({ children }) => <thead className="bg-purple-100 dark:bg-purple-900/40">{children}</thead>,
                  tbody: ({ children }) => <tbody>{children}</tbody>,
                  tr: ({ children }) => <tr className="border-b border-purple-200 dark:border-purple-800">{children}</tr>,
                  th: ({ children }) => <th className="px-6 py-3 text-left text-lg font-bold text-purple-900 dark:text-purple-100 border border-purple-300 dark:border-purple-700">{children}</th>,
                  td: ({ children }) => <td className="px-6 py-4 text-lg border border-purple-200 dark:border-purple-800">{children}</td>,
                  img: ({ src, alt }) => <img src={src} alt={alt || ''} className="max-w-full h-auto my-6 rounded-lg" />,
                  iframe: ({ src, width, height, ...props }) => <iframe src={src} width={width || '100%'} height={height || '600'} className="w-full rounded-lg my-6" {...props} />,
                }}
              >
                {part}
              </ReactMarkdown>
            )
          }
          return null
        })}
      </div>
    )
  }
  
  // If content has iframe or img tags, render with dangerouslySetInnerHTML for HTML while keeping markdown processing
  if (hasIframe || content.includes('<img')) {
    // Process markdown to HTML first, then render
    return (
      <div className="animate-fade-in prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          components={{
            h1: ({ children }) => <h1 className="text-4xl font-extrabold mb-6 mt-2 text-gray-900 dark:text-white leading-tight">{children}</h1>,
            h2: ({ children }) => <h2 className="text-3xl font-bold mb-4 mt-8 text-gray-900 dark:text-white leading-snug">{children}</h2>,
            h3: ({ children }) => <h3 className="text-2xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">{children}</h3>,
            p: ({ children }) => <p className="text-lg leading-relaxed mb-4">{children}</p>,
            strong: ({ children }) => <strong className="font-bold text-purple-700 dark:text-purple-400">{children}</strong>,
            ul: ({ children }) => <ul className="space-y-3 text-lg ml-6">{children}</ul>,
            li: ({ children }) => <li className="text-lg">{children}</li>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-purple-500 pl-6 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg text-lg font-semibold">
                {children}
              </blockquote>
            ),
            table: ({ children }) => <table className="min-w-full border-collapse border-2 border-purple-300 dark:border-purple-700 my-6">{children}</table>,
            thead: ({ children }) => <thead className="bg-purple-100 dark:bg-purple-900/40">{children}</thead>,
            tbody: ({ children }) => <tbody>{children}</tbody>,
            tr: ({ children }) => <tr className="border-b border-purple-200 dark:border-purple-800">{children}</tr>,
            th: ({ children }) => <th className="px-6 py-3 text-left text-lg font-bold text-purple-900 dark:text-purple-100 border border-purple-300 dark:border-purple-700">{children}</th>,
            td: ({ children }) => <td className="px-6 py-4 text-lg border border-purple-200 dark:border-purple-800">{children}</td>,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    )
  }
  
  if (hasLatex) {
    return (
      <div className="animate-fade-in prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          components={{
            h1: ({ children }) => <h1 className="text-4xl font-extrabold mb-6 mt-2 text-gray-900 dark:text-white leading-tight">{children}</h1>,
            h2: ({ children }) => <h2 className="text-3xl font-bold mb-4 mt-8 text-gray-900 dark:text-white leading-snug">{children}</h2>,
            h3: ({ children }) => <h3 className="text-2xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">{children}</h3>,
            p: ({ children }) => <p className="text-lg leading-relaxed mb-4">{children}</p>,
            strong: ({ children }) => <strong className="font-bold text-purple-700 dark:text-purple-400">{children}</strong>,
            ul: ({ children }) => <ul className="space-y-3 text-lg ml-6">{children}</ul>,
            li: ({ children }) => <li className="text-lg">{children}</li>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-purple-500 pl-6 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg text-lg font-semibold">
                {children}
              </blockquote>
            ),
            table: ({ children }) => <table className="min-w-full border-collapse border-2 border-purple-300 dark:border-purple-700 my-6">{children}</table>,
            thead: ({ children }) => <thead className="bg-purple-100 dark:bg-purple-900/40">{children}</thead>,
            tbody: ({ children }) => <tbody>{children}</tbody>,
            tr: ({ children }) => <tr className="border-b border-purple-200 dark:border-purple-800">{children}</tr>,
            th: ({ children }) => <th className="px-6 py-3 text-left text-lg font-bold text-purple-900 dark:text-purple-100 border border-purple-300 dark:border-purple-700">{children}</th>,
            td: ({ children }) => <td className="px-6 py-4 text-lg border border-purple-200 dark:border-purple-800">{children}</td>,
            img: ({ src, alt }) => <img src={src} alt={alt || ''} className="max-w-full h-auto my-6 rounded-lg" />,
            iframe: ({ src, width, height, ...props }) => <iframe src={src} width={width || '100%'} height={height || '600'} className="w-full rounded-lg my-6" {...props} />,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    )
  }
  
  return (
    <div className="animate-fade-in prose prose-lg max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ children }) => <h1 className="text-4xl font-extrabold mb-6 mt-2 text-gray-900 dark:text-white leading-tight">{children}</h1>,
          h2: ({ children }) => <h2 className="text-3xl font-bold mb-4 mt-8 text-gray-900 dark:text-white leading-snug">{children}</h2>,
          h3: ({ children }) => <h3 className="text-2xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">{children}</h3>,
          p: ({ children }) => <p className="text-lg leading-relaxed mb-4">{children}</p>,
          strong: ({ children }) => <strong className="font-bold text-purple-700 dark:text-purple-400">{children}</strong>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

// Multiple Choice Quiz Component
function MultipleChoiceQuiz({ 
  section, 
  onComplete, 
  isComplete 
}: { 
  section: Section
  onComplete: () => void
  isComplete: boolean
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(section.exercise?.questions?.length || 0).fill(null)
  )
  const [showFeedback, setShowFeedback] = useState<boolean[]>(
    Array(section.exercise?.questions?.length || 0).fill(false)
  )
  const [quizComplete, setQuizComplete] = useState<boolean>(false)

  const questions = section.exercise?.questions || []
  const currentQuestion = questions[currentQuestionIndex]

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[questionIndex] = answerIndex
    setSelectedAnswers(newSelectedAnswers)

    const newShowFeedback = [...showFeedback]
    newShowFeedback[questionIndex] = true
    setShowFeedback(newShowFeedback)
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // All questions answered, complete the quiz
      console.log('✅ Quiz completed! Calling onComplete()')
      setQuizComplete(true)
      onComplete()
    }
  }

  const score = selectedAnswers.filter(
    (answer, index) => answer === questions[index]?.correctAnswer
  ).length

  if (!questions || questions.length === 0) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="text-red-800">No questions available for this quiz.</p>
      </div>
    )
  }

  if (quizComplete) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h3>
        <p className="text-lg text-gray-700 mb-4">
          You scored {score} out of {questions.length}
        </p>
        {score === questions.length && (
          <p className="text-green-600 font-semibold">Perfect score! Excellent work!</p>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress indicator */}
      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
        <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
        <span>{score} correct so far</span>
      </div>

      {/* Current Question */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          <InlineLatex text={currentQuestion.question} />
        </h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option: string, optionIndex: number) => {
            const isSelected = selectedAnswers[currentQuestionIndex] === optionIndex
            const isCorrect = optionIndex === currentQuestion.correctAnswer
            const showingFeedback = showFeedback[currentQuestionIndex]

            let buttonStyle = "w-full text-left p-4 rounded-lg border-2 transition-all "
            
            if (!showingFeedback) {
              buttonStyle += isSelected 
                ? "border-blue-500 bg-blue-50" 
                : "border-gray-300 hover:border-blue-300 hover:bg-gray-50"
            } else {
              if (isCorrect) {
                buttonStyle += "border-green-500 bg-green-50"
              } else if (isSelected && !isCorrect) {
                buttonStyle += "border-red-500 bg-red-50"
              } else {
                buttonStyle += "border-gray-300 bg-gray-50"
              }
            }

            return (
              <button
                key={optionIndex}
                onClick={() => !showingFeedback && handleAnswerSelect(currentQuestionIndex, optionIndex)}
                disabled={showingFeedback}
                className={buttonStyle}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-800"><InlineLatex text={option} /></span>
                  {showingFeedback && isCorrect && <span className="text-green-600">✓</span>}
                  {showingFeedback && isSelected && !isCorrect && <span className="text-red-600">✗</span>}
                </div>
              </button>
            )
          })}
        </div>

        {/* Feedback */}
        {showFeedback[currentQuestionIndex] && (
          <div className={`mt-4 p-4 rounded-lg ${
            selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}>
            <p className={`font-semibold mb-2 ${
              selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer
                ? 'text-green-800'
                : 'text-red-800'
            }`}>
              {selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer
                ? '✓ Correct!'
                : '✗ Incorrect'}
            </p>
            <p className="text-gray-700"><InlineLatex text={currentQuestion.explanation} /></p>
          </div>
        )}

        {/* Next button */}
        {showFeedback[currentQuestionIndex] && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// Mini-Boss Battle Component
function MiniBossBattle({ 
  section, 
  onComplete, 
  isComplete 
}: { 
  section: Section
  onComplete: () => void
  isComplete: boolean
}) {
  const [gameState, setGameState] = useState<'entrance' | 'battle' | 'victory' | 'defeat'>('entrance')
  const [playerScore, setPlayerScore] = useState<number>(0)
  const [aiScore, setAiScore] = useState<number>(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [currentQuestion, setCurrentQuestion] = useState<any>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [showFeedback, setShowFeedback] = useState<boolean>(false)
  const [feedbackType, setFeedbackType] = useState<'correct' | 'incorrect'>('correct')
  const [usedQuestionIds, setUsedQuestionIds] = useState<string[]>([])
  const [aiThinking, setAiThinking] = useState<boolean>(false)
  const [entranceAnimComplete, setEntranceAnimComplete] = useState<boolean>(false)
  const [aiTimerActive, setAiTimerActive] = useState<boolean>(false)

  const config = section.miniBossConfig!
  const questionTypes = config.questionSequence
  const WIN_SCORE = 5

  // Get AI response time based on question type
  const getAiResponseTime = (questionType: string): number => {
    switch (questionType) {
      case 'gcf-identify':
      case 'gcf-factor':
        return 10000 // 10 seconds for GCF questions
      case 'simple-diff-squares':
      case 'simple-trinomials':
        return 15000 // 15 seconds for simple questions
      case 'complex-diff-squares':
      case 'complex-trinomials':
      case 'combined':
        return 20000 // 20 seconds for complex questions
      default:
        return 15000
    }
  }

  // AI answers independently on a timer
  useEffect(() => {
    if (gameState === 'battle' && currentQuestion && !aiTimerActive) {
      setAiTimerActive(true)
      setAiThinking(true)
      
      const questionType = questionTypes[currentQuestionIndex % questionTypes.length]
      const aiTime = getAiResponseTime(questionType)
      
      const timer = setTimeout(() => {
        // AI has 80% accuracy
        const aiCorrect = Math.random() < config.aiAccuracy
        
        if (aiCorrect) {
          setAiScore(prev => {
            const newScore = prev + 1
            if (newScore >= WIN_SCORE) {
              setTimeout(() => setGameState('defeat'), 1500)
            }
            return newScore
          })
        }
        
        setAiThinking(false)
        setAiTimerActive(false)
      }, aiTime)
      
      return () => clearTimeout(timer)
    }
  }, [gameState, currentQuestion, aiTimerActive, currentQuestionIndex])

  // Load first question after entrance animation
  useEffect(() => {
    if (gameState === 'battle' && !currentQuestion) {
      loadNextQuestion()
    }
  }, [gameState])

  // Start entrance animation
  useEffect(() => {
    if (gameState === 'entrance') {
      const timer = setTimeout(() => {
        setEntranceAnimComplete(true)
      }, 3000) // 3 second entrance animation
      return () => clearTimeout(timer)
    }
  }, [gameState])

  const loadNextQuestion = () => {
    if (currentQuestionIndex >= questionTypes.length) {
      // Restart question sequence if needed
      setCurrentQuestionIndex(0)
    }
    
    const questionType = questionTypes[currentQuestionIndex]
    
    // Dynamically import questions from the correct module
    import(
      /* webpackInclude: /boss\.ts$/ */
      `@/data/mini-boss-questions/${config.questionBankModule}`
    ).then(module => {
      const question = module.getRandomMiniBossQuestion(questionType, usedQuestionIds)
      
      // Shuffle the options so correct answer isn't always first
      const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5)
      
      setCurrentQuestion({
        ...question,
        options: shuffledOptions
      })
      setUsedQuestionIds(prev => [...prev, question.id])
      setAiTimerActive(false) // Reset AI timer for new question
    })
    
    setSelectedAnswer('')
    setShowFeedback(false)
  }

  const handleAnswerSelect = (optionLabel: string) => {
    if (showFeedback) return
    setSelectedAnswer(optionLabel)
  }

  const handleSubmit = () => {
    if (!selectedAnswer || !currentQuestion || showFeedback) return

    const selectedOption = currentQuestion.options.find((opt: any) => opt.label === selectedAnswer)
    const isCorrect = selectedOption?.isCorrect

    setShowFeedback(true)
    setFeedbackType(isCorrect ? 'correct' : 'incorrect')

    if (isCorrect) {
      setPlayerScore(prev => {
        const newScore = prev + 1
        if (newScore >= WIN_SCORE) {
          setTimeout(() => setGameState('victory'), 1500)
        }
        return newScore
      })
    } else {
      // Wrong answer - lose a point
      setPlayerScore(prev => Math.max(0, prev - 1))
    }

    // Move to next question after brief delay
    setTimeout(() => {
      setCurrentQuestionIndex(prev => prev + 1)
      loadNextQuestion()
    }, 2000)
  }

  const startBattle = () => {
    setGameState('battle')
  }

  // Entrance Animation
  if (gameState === 'entrance') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 via-red-900 to-black">
        <div className="text-center">
          <div className={`text-9xl mb-8 transition-all duration-1000 ${entranceAnimComplete ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            ⚔️
          </div>
          <h1 className={`text-6xl font-bold text-red-500 mb-4 transition-all duration-1000 delay-500 ${entranceAnimComplete ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            MINI-BOSS CHALLENGE
          </h1>
          <h2 className={`text-4xl font-bold text-yellow-400 mb-8 transition-all duration-1000 delay-700 ${entranceAnimComplete ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {config.bossName}
          </h2>
          <div className={`text-2xl text-white mb-8 transition-all duration-1000 delay-1000 ${entranceAnimComplete ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="mb-2">Race to 5 points!</p>
            <p className="text-xl text-gray-300">Wrong answers cost you a point!</p>
          </div>
          {entranceAnimComplete && (
            <button
              onClick={startBattle}
              className="px-12 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-2xl rounded-lg transform hover:scale-105 transition-all shadow-lg animate-pulse"
            >
              BEGIN BATTLE!
            </button>
          )}
        </div>
      </div>
    )
  }

  // Victory Animation
  if (gameState === 'victory') {
    const isUltimateBoss = config.bossName === 'The Factoring Grandmaster'
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-400 via-orange-500 to-red-600">
        <div className="text-center animate-bounce-in">
          <div className="text-9xl mb-8 animate-spin-slow">🏆</div>
          <h1 className="text-7xl font-bold text-white mb-6 drop-shadow-lg">
            VICTORY!
          </h1>
          <p className="text-4xl text-white mb-4">You defeated {config.bossName}!</p>
          {isUltimateBoss ? (
            <>
              <p className="text-2xl text-yellow-200 mb-4">🎉 You've mastered factoring! 🎉</p>
              <p className="text-xl text-yellow-100 mb-8">✨ Competitive Mode Unlocked! ✨</p>
              <div className="text-6xl mb-8">⭐ ⭐ ⭐</div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={onComplete}
                  className="px-12 py-4 bg-white hover:bg-gray-100 text-purple-700 font-bold text-2xl rounded-lg transform hover:scale-105 transition-all shadow-2xl"
                >
                  Continue
                </button>
                <button
                  onClick={() => {
                    // Save completion and redirect to competitive mode
                    onComplete()
                    setTimeout(() => {
                      window.location.href = '/competitive'
                    }, 100)
                  }}
                  className="px-12 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-2xl rounded-lg transform hover:scale-105 transition-all shadow-2xl flex items-center gap-2"
                >
                  🎮 Enter Competitive Mode
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-2xl text-yellow-200 mb-8">Next Part Unlocked!</p>
              <div className="text-6xl mb-8">⭐ ⭐ ⭐</div>
              <button
                onClick={onComplete}
                className="px-12 py-4 bg-white hover:bg-gray-100 text-purple-700 font-bold text-2xl rounded-lg transform hover:scale-105 transition-all shadow-2xl"
              >
                Continue
              </button>
            </>
          )}
        </div>
      </div>
    )
  }

  // Defeat Screen (optional - player can retry)
  if (gameState === 'defeat') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 via-gray-900 to-black">
        <div className="text-center">
          <div className="text-9xl mb-8">💀</div>
          <h1 className="text-6xl font-bold text-red-500 mb-6">
            DEFEATED...
          </h1>
          <p className="text-3xl text-gray-300 mb-8">{config.bossName} wins!</p>
          <button
            onClick={() => {
              setPlayerScore(0)
              setAiScore(0)
              setCurrentQuestionIndex(0)
              setUsedQuestionIds([])
              setGameState('entrance')
              setEntranceAnimComplete(false)
            }}
            className="px-12 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-2xl rounded-lg transform hover:scale-105 transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  // Battle Screen
  if (!currentQuestion) {
    return <div className="text-center py-8">Loading question...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 py-4 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Score Display - More Compact */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* Player Score */}
          <div className="bg-blue-600 rounded-lg p-4 text-center border-2 border-blue-400 shadow-lg">
            <div className="text-lg font-bold text-white mb-1">YOU</div>
            <div className="text-4xl font-bold text-white">{playerScore}</div>
            <div className="text-xs text-blue-200 mt-1">/ {WIN_SCORE} points</div>
          </div>

          {/* AI Score */}
          <div className={`bg-red-600 rounded-lg p-4 text-center border-2 border-red-400 shadow-lg ${aiThinking ? 'animate-pulse' : ''}`}>
            <div className="text-lg font-bold text-white mb-1">{config.bossName}</div>
            <div className="text-4xl font-bold text-white">{aiScore}</div>
            <div className="text-xs text-red-200 mt-1">
              {aiThinking ? '🤔 Thinking...' : `/ ${WIN_SCORE} points`}
            </div>
          </div>
        </div>

        {/* Question - More Compact */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 border-2 border-yellow-500">
          {/* Question Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="inline-block bg-purple-100 dark:bg-purple-900/40 rounded-full px-4 py-1">
              <span className="text-sm font-bold text-purple-700 dark:text-purple-400">
                Question {(currentQuestionIndex % questionTypes.length) + 1}
              </span>
            </div>
            {aiThinking && (
              <span className="text-sm text-yellow-400 animate-pulse">
                {config.bossName} is answering...
              </span>
            )}
          </div>

          {/* Problem */}
          <div className="text-center mb-4">
            <p className="text-lg mb-2 text-gray-700 dark:text-gray-300 font-semibold">
              {currentQuestion.type === 'gcf-identify' && 'Identify the GCF:'}
              {currentQuestion.type === 'gcf-factor' && 'Factor out the GCF:'}
              {currentQuestion.type === 'simple-diff-squares' && 'Factor using difference of squares:'}
              {currentQuestion.type === 'complex-diff-squares' && 'Factor using difference of squares:'}
              {currentQuestion.type === 'combined' && 'Factor COMPLETELY:'}
            </p>
            <div 
              className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4 py-2"
              dangerouslySetInnerHTML={{
                __html: katex.renderToString(currentQuestion.question, {
                  throwOnError: false,
                  displayMode: true
                })
              }}
            />
          </div>

          {/* Multiple Choice Options - More Compact */}
          <div className="grid grid-cols-1 gap-3 mb-4">
            {currentQuestion.options.map((option: any) => (
              <button
                key={option.label}
                onClick={() => handleAnswerSelect(option.label)}
                disabled={showFeedback}
                className={`p-4 rounded-lg border-2 text-left transition-all transform hover:scale-102 ${
                  selectedAnswer === option.label
                    ? showFeedback
                      ? option.isCorrect
                        ? 'border-green-500 bg-green-100 dark:bg-green-900/30'
                        : 'border-red-500 bg-red-100 dark:bg-red-900/30'
                      : 'border-purple-500 bg-purple-100 dark:bg-purple-900/30'
                    : showFeedback && option.isCorrect
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-purple-400'
                } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                    {option.label}
                  </span>
                  <div 
                    className="text-xl flex-1"
                    dangerouslySetInnerHTML={{
                      __html: katex.renderToString(option.value, {
                        throwOnError: false,
                        displayMode: false
                      })
                    }}
                  />
                  {showFeedback && selectedAnswer === option.label && !option.isCorrect && option.explanation && (
                    <span className="text-xs text-red-600 dark:text-red-400 italic">
                      {option.explanation}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Submit Button */}
          {!showFeedback && (
            <div className="text-center">
              <button
                onClick={handleSubmit}
                disabled={!selectedAnswer}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-bold text-lg rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Submit Answer
              </button>
            </div>
          )}

          {/* Feedback */}
          {showFeedback && (
            <div className={`text-center text-xl font-bold p-4 rounded-lg ${
              feedbackType === 'correct' 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
            }`}>
              {feedbackType === 'correct' ? '✅ Correct! +1 Point' : '❌ Incorrect! -1 Point'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Factoring Practice Component
function FactoringPractice({ 
  section, 
  onComplete, 
  isComplete 
}: { 
  section: Section
  onComplete: () => void
  isComplete: boolean
}) {
  const [currentProblem, setCurrentProblem] = useState<any>(null)
  const [userAnswer, setUserAnswer] = useState<string>('')
  const [correctStreak, setCorrectStreak] = useState<number>(0)
  const [attemptCount, setAttemptCount] = useState<number>(0)
  const [feedback, setFeedback] = useState<string>('')
  const [feedbackType, setFeedbackType] = useState<'correct' | 'incorrect' | 'hint' | ''>('')
  const [showHint, setShowHint] = useState<boolean>(false)
  const [showAnswer, setShowAnswer] = useState<boolean>(false)

  const requiredStreak = section.problemType === 'gcf' || section.problemType === 'gcf-identify' || section.problemType === 'difference-of-squares' ? 3 :
                         section.problemType === 'simple-trinomials' || section.problemType === 'complex-trinomials' ? 4 : 5

  // Helper function to convert plain text to LaTeX format
  const convertToLatex = (input: string): string => {
    if (!input.trim()) return ''
    
    // Replace ^ with proper LaTeX exponents
    let latex = input.replace(/\^(\d+)/g, '^{$1}')
    
    // Handle parentheses - they stay as is in LaTeX
    // Handle multiplication sign - space it out
    latex = latex.replace(/\*/g, ' \\cdot ')
    
    return latex
  }

  // Import the problem generators
  const getRandomProblem = () => {
    if (!section.problemType) return null
    
    // Dynamically import and get problem
    import('@/utils/factoring-problems').then(module => {
      const problem = module.getRandomFactoringProblem(section.problemType!)
      setCurrentProblem(problem)
    })
  }

  useEffect(() => {
    if (!currentProblem) {
      getRandomProblem()
    }
  }, [])

  // Reset state when section changes (different problemType means new section)
  useEffect(() => {
    setCorrectStreak(0)
    setUserAnswer('')
    setAttemptCount(0)
    setFeedback('')
    setFeedbackType('')
    setShowHint(false)
    setShowAnswer(false)
    setCurrentProblem(null)
    getRandomProblem()
  }, [section.id, section.problemType])

  const handleSubmit = async () => {
    if (!userAnswer.trim() || !currentProblem) return

    setAttemptCount(prev => prev + 1)
    
    // Check answer
    const { checkFactoringAnswer } = await import('@/utils/factoring-problems')
    const isCorrect = checkFactoringAnswer(userAnswer, currentProblem.answer)

    if (isCorrect) {
      setFeedbackType('correct')
      setFeedback('✅ Correct!')
      const newStreak = correctStreak + 1
      setCorrectStreak(newStreak)
      
      if (newStreak >= requiredStreak) {
        onComplete()
      } else {
        // Move to next problem after brief delay
        setTimeout(() => {
          setUserAnswer('')
          setFeedback('')
          setFeedbackType('')
          setShowHint(false)
          setShowAnswer(false)
          setAttemptCount(0)
          getRandomProblem()
        }, 1500)
      }
    } else {
      setFeedbackType('incorrect')
      setFeedback('❌ Not quite. Try again!')
      
      // Reset streak on incorrect answer
      if (correctStreak > 0) {
        setCorrectStreak(0)
      }
    }
  }

  const handleShowHint = () => {
    setShowHint(true)
    setFeedbackType('hint')
    setFeedback(currentProblem?.hint || 'Try factoring step by step')
  }

  const handleShowAnswer = () => {
    setShowAnswer(true)
    setUserAnswer(currentProblem?.answer || '')
    setFeedbackType('hint')
    setFeedback('Study this answer, then click Next Problem to continue')
    setCorrectStreak(0) // Reset streak when showing answer
  }

  const handleNextProblem = () => {
    setUserAnswer('')
    setFeedback('')
    setFeedbackType('')
    setShowHint(false)
    setShowAnswer(false)
    setAttemptCount(0)
    getRandomProblem()
  }

  if (!currentProblem) {
    return <div className="text-center py-4">Loading problem...</div>
  }

  if (isComplete || correctStreak >= requiredStreak) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border-2 border-green-500">
        <div className="text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">
            Excellent! {requiredStreak} Correct in a Row!
          </h3>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            You've mastered this factoring technique!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <FadeInText content={section.content} onComplete={() => {}} />
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border-2 border-purple-300 dark:border-purple-700">
        {/* Progress */}
        <div className="mb-6 text-center">
          <div className="inline-block bg-purple-100 dark:bg-purple-900/40 rounded-full px-6 py-3">
            <span className="text-2xl font-bold text-purple-700 dark:text-purple-400">
              Correct Streak: {correctStreak}/{requiredStreak}
            </span>
          </div>
        </div>

        {/* Problem */}
        <div className="text-center mb-8">
          <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">
            {section.problemType === 'gcf-identify' ? 'Identify the GCF (Greatest Common Factor):' : 'Factor completely:'}
          </p>
          <div 
            className="text-4xl font-bold text-purple-700 dark:text-purple-400 mb-6"
            dangerouslySetInnerHTML={{
              __html: katex.renderToString(currentProblem.problem, {
                throwOnError: false,
                displayMode: true
              })
            }}
          />

          {/* Answer Input */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              className="w-full max-w-md h-16 text-center text-xl font-mono border-2 border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none px-4"
              placeholder={section.problemType === 'gcf-identify' ? 'Enter GCF (e.g., 3x^2)' : 'Enter factored form'}
              disabled={feedbackType === 'correct'}
            />
            
            {/* Live Preview with KaTeX */}
            {userAnswer.trim() && (
              <div className="w-full max-w-md">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Your answer:</p>
                <div 
                  className="text-2xl p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-300 dark:border-purple-700"
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString(convertToLatex(userAnswer), {
                      throwOnError: false,
                      displayMode: false
                    })
                  }}
                />
              </div>
            )}
            
            <p className="text-sm text-gray-500">
              {section.problemType === 'gcf-identify' 
                ? 'Example format: 3x or 5x^2y' 
                : 'Example format: (x + 2)(x + 3) or 2x(x + 1)'}
            </p>
          </div>

          {/* Submit Button */}
          {!showAnswer && (
            <button
              onClick={handleSubmit}
              disabled={!userAnswer.trim() || feedbackType === 'correct'}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white font-bold rounded-lg transition-colors text-lg"
            >
              Check Answer
            </button>
          )}

          {showAnswer && (
            <button
              onClick={handleNextProblem}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-lg"
            >
              Next Problem
            </button>
          )}
        </div>

        {/* Feedback */}
        {feedback && (
          <div className={`text-center text-xl font-bold p-4 rounded-lg mb-4 ${
            feedbackType === 'correct' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
            feedbackType === 'incorrect' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' :
            'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
          }`}>
            {feedback}
          </div>
        )}

        {/* Hint and Show Answer buttons */}
        {!showAnswer && feedbackType !== 'correct' && (
          <div className="flex justify-center gap-4 mt-6">
            {!showHint && attemptCount >= 1 && (
              <button
                onClick={handleShowHint}
                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors"
              >
                💡 Show Hint
              </button>
            )}
            
            {attemptCount >= 2 && (
              <button
                onClick={handleShowAnswer}
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                👁️ Show Answer
              </button>
            )}
          </div>
        )}

        {/* Display hint if shown */}
        {showHint && currentProblem.hint && !showAnswer && (
          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-2 border-yellow-400">
            <p className="text-lg text-gray-800 dark:text-gray-200">
              <strong>Hint:</strong> {currentProblem.hint}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// Input Box Exercise Component
function InputBoxExercise({ 
  section, 
  onComplete, 
  isComplete 
}: { 
  section: any
  onComplete: () => void
  isComplete: boolean
}) {
  // Normalize between two exercise formats:
  // Format A: { boxes, correctAnswers, hint1, hint2, hint3, explanation }
  // Format B: { inputs: [{ label, correctAnswer, explanation }] }
  const hasInputsFormat = !!section.exercise.inputs
  const numBoxes = hasInputsFormat ? section.exercise.inputs.length : (section.exercise.boxes || 1)
  const correctAnswersList: string[] = hasInputsFormat 
    ? section.exercise.inputs.map((input: any) => input.correctAnswer) 
    : (section.exercise.correctAnswers || [])
  const inputLabels: string[] | null = hasInputsFormat 
    ? section.exercise.inputs.map((input: any) => input.label) 
    : null
  const inputExplanations: string[] | null = hasInputsFormat 
    ? section.exercise.inputs.map((input: any) => input.explanation || '') 
    : null

  const [answers, setAnswers] = useState<string[]>(Array(numBoxes).fill(''))
  const [attempts, setAttempts] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleSubmit = () => {
    setHasSubmitted(true)
    const isCorrect = areAllAnswersCorrect(answers, correctAnswersList)
    
    if (isCorrect && !isComplete) {
      setTimeout(() => {
        onComplete()
      }, 1000)
    } else if (!isCorrect) {
      const newAttempts = attempts + 1
      setAttempts(newAttempts)
      setShowHint(true)
      
      if (newAttempts >= 4) {
        setShowAnswer(true)
        // Mark as complete after showing answer
        setTimeout(() => {
          onComplete()
        }, 500)
      }
    }
  }

  const handleInputChange = (index: number, value: string) => {
    const newAnswers = [...answers]
    newAnswers[index] = value
    setAnswers(newAnswers)
    
    // Auto-advance to next input only if all correct answers are single-digit
    const hasMultiDigitAnswers = correctAnswersList.some((ans: string) => ans.length > 1)
    if (value && index < numBoxes - 1 && !hasMultiDigitAnswers) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const isCorrect = areAllAnswersCorrect(answers, correctAnswersList)

  return (
    <div className="space-y-6">
      <FadeInText content={section.content} />
      
      {/* Inputs format: labeled input fields with descriptions */}
      {hasInputsFormat ? (
        <div className="space-y-4">
          {section.exercise.inputs.map((input: any, index: number) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <label className="flex-1 text-base font-medium text-gray-700 dark:text-gray-300">
                <InlineLatex text={input.label} />
              </label>
              <input
                ref={(el) => { inputRefs.current[index] = el }}
                type="text"
                value={answers[index]}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="w-32 px-3 py-2 text-lg text-center border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                disabled={isComplete || showAnswer}
                placeholder="?"
              />
              {/* Per-input feedback */}
              {hasSubmitted && (
                <span className="text-xl">
                  {isAnswerMatch(answers[index], correctAnswersList[index]) ? '✅' : '❌'}
                </span>
              )}
            </div>
          ))}
        </div>
      ) : (
        /* Original boxes format: simple grid of input squares */
        <div className="flex gap-4 justify-center flex-wrap">
          {Array.from({ length: numBoxes }).map((_, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el }}
              type="text"
              value={answers[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="w-20 h-20 text-3xl text-center border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              disabled={isComplete || showAnswer}
              placeholder="?"
            />
          ))}
        </div>
      )}

      {!isComplete && !showAnswer && (
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-lg transition-colors"
        >
          Check Answer
        </button>
      )}

      {showHint && attempts === 1 && !isCorrect && (
        <div className="bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-blue-900 dark:text-blue-200">
            💡 Hint: <InlineLatex text={section.exercise.hint1 || 'Try again! Check your calculation step by step.'} />
          </p>
        </div>
      )}

      {showHint && attempts === 2 && !isCorrect && (
        <div className="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-yellow-900 dark:text-yellow-200">
            💡 Hint: <InlineLatex text={section.exercise.hint2 || 'One more try!'} />
          </p>
        </div>
      )}

      {showHint && attempts === 3 && !isCorrect && !showAnswer && (
        <div className="bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-orange-900 dark:text-orange-200">
            💡 Hint: <InlineLatex text={section.exercise.hint3 || 'Last hint: write the setup carefully, then compute step by step.'} />
          </p>
        </div>
      )}

      {showAnswer && (
        <div className="bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded-r-lg">
          {/* Inputs format: show each answer with its explanation */}
          {hasInputsFormat && inputExplanations ? (
            <div className="space-y-3">
              <p className="text-lg font-semibold text-green-900 dark:text-green-200 mb-2">✓ Answers:</p>
              {section.exercise.inputs.map((input: any, index: number) => (
                <div key={index} className="pl-4 border-l-2 border-green-400">
                  <p className="font-medium text-green-900 dark:text-green-200">
                    <InlineLatex text={input.label} />: <strong>{input.correctAnswer}</strong>
                  </p>
                  {input.explanation && (
                    <p className="text-sm text-green-800 dark:text-green-300 mt-1">
                      <InlineLatex text={input.explanation} />
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Original format: show combined answer and explanation */
            <>
              <p className="text-lg font-semibold text-green-900 dark:text-green-200 mb-3">
                ✓ Answer: {correctAnswersList.join(', ')}
              </p>
              <p className="text-lg text-green-800 dark:text-green-300">
                <InlineLatex text={section.exercise.explanation || ''} />
              </p>
            </>
          )}
        </div>
      )}

      {isCorrect && hasSubmitted && (
        <div className="text-center text-2xl font-bold text-green-600 dark:text-green-400 animate-bounce">
          ✓ Perfect! 🎉
        </div>
      )}
    </div>
  )
}

// Dropdown Exercise Component
function DropdownExercise({ 
  section, 
  onComplete, 
  isComplete 
}: { 
  section: any
  onComplete: () => void
  isComplete: boolean
}) {
  // Normalize between two data formats:
  // Format A: top-level correctAnswers: ['answer1', 'answer2', ...]
  // Format B: per-dropdown correctIndex: N (index into options array)
  const correctAnswersList: string[] = section.exercise.correctAnswers
    ? section.exercise.correctAnswers
    : section.exercise.dropdowns.map((dd: any) => dd.options[dd.correctIndex])

  const [answers, setAnswers] = useState<string[]>(Array(section.exercise.dropdowns.length).fill(''))
  const [randomizedOptions] = useState(() => 
    section.exercise.dropdowns.map((dropdown: any) => 
      [...dropdown.options].sort(() => Math.random() - 0.5)
    )
  )
  const [attempts, setAttempts] = useState(0)
  const [validated, setValidated] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleSubmit = () => {
    setValidated(true)
    const isCorrect = correctAnswersList.every((correctAnswer: string, index: number) => 
      answers[index] === correctAnswer
    )
    
    if (isCorrect && !isComplete) {
      setTimeout(() => {
        onComplete()
      }, 1000)
    } else if (!isCorrect) {
      const newAttempts = attempts + 1
      setAttempts(newAttempts)
      setShowHint(true)
      
      if (newAttempts >= 4) {
        setShowAnswer(true)
        // Mark as complete after showing answer
        setTimeout(() => {
          onComplete()
        }, 500)
      }
    }
  }

  const isFullyCorrect = validated && correctAnswersList.every((correctAnswer: string, index: number) => 
    answers[index] === correctAnswer
  )

  return (
    <div className="space-y-6">
      <FadeInText content={section.content} />
      
      <div className="space-y-4">
        {section.exercise.dropdowns.map((dropdown: any, index: number) => {
          const isCorrect = answers[index] === correctAnswersList[index]
          const showFeedback = validated && answers[index]
          
          return (
            <div key={index} className="flex items-center gap-4">
              <span className="text-xl font-semibold"><InlineLatex text={dropdown.label + ':'} /></span>
              <select
                value={answers[index]}
                onChange={(e) => {
                  const newAnswers = [...answers]
                  newAnswers[index] = e.target.value
                  setAnswers(newAnswers)
                  setValidated(false)
                }}
                className={`px-4 py-2 text-lg border-2 rounded-lg focus:ring-2 ${
                  showFeedback
                    ? isCorrect
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                    : 'border-gray-300'
                } focus:ring-purple-200`}
                disabled={isComplete || showAnswer}
              >
                <option value="">Select...</option>
                {randomizedOptions[index].map((option: string) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {showFeedback && (
                <span className="text-2xl">
                  {isCorrect ? '✓' : '✗'}
                </span>
              )}
            </div>
          )
        })}
      </div>

      {!isComplete && !showAnswer && (
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-lg transition-colors"
        >
          Check Answers
        </button>
      )}

      {showHint && attempts === 1 && !isFullyCorrect && (
        <div className="bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-blue-900 dark:text-blue-200">
            💡 Hint: <InlineLatex text={section.exercise.hint1 || 'Try matching each statement to its core rule before choosing.'} />
          </p>
        </div>
      )}

      {showHint && attempts === 2 && !isFullyCorrect && (
        <div className="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-yellow-900 dark:text-yellow-200">
            💡 Hint: <InlineLatex text={section.exercise.hint2 || 'Eliminate obviously wrong options first, then compare the remaining two carefully.'} />
          </p>
        </div>
      )}

      {showHint && attempts === 3 && !isFullyCorrect && !showAnswer && (
        <div className="bg-orange-100 dark:bg-orange-900/30 border-l-4 border-orange-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-orange-900 dark:text-orange-200">
            💡 Hint: <InlineLatex text={section.exercise.hint3 || 'Final hint: look for keywords in each prompt (direction, sign, relation) and match exactly.'} />
          </p>
        </div>
      )}

      {showAnswer && (
        <div className="bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 p-6 rounded-r-lg">
          <p className="text-lg font-semibold text-green-900 dark:text-green-200 mb-3">
            ✓ Correct answers:
          </p>
          <ul className="space-y-2 text-lg text-green-800 dark:text-green-300">
            {section.exercise.dropdowns.map((dropdown: any, index: number) => (
              <li key={index}>
                <InlineLatex text={dropdown.label} />: <strong><InlineLatex text={correctAnswersList[index]} /></strong>
                {dropdown.explanation && (
                  <p className="text-sm text-green-700 dark:text-green-400 mt-1 ml-4">
                    <InlineLatex text={dropdown.explanation} />
                  </p>
                )}
              </li>
            ))}
          </ul>
          {section.exercise.explanation && (
            <p className="text-lg text-green-800 dark:text-green-300 mt-4">
              <InlineLatex text={section.exercise.explanation} />
            </p>
          )}
        </div>
      )}

      {isFullyCorrect && (
        <div className="text-center text-2xl font-bold text-green-600 dark:text-green-400 animate-bounce">
          ✓ Excellent work! All correct! 🎉
        </div>
      )}
    </div>
  )
}

// Square Root Input Component - Khan Academy style
function SquareRootInput({ 
  value, 
  onChange, 
  disabled, 
  className,
  inputRef,
  hint
}: { 
  value: string
  onChange: (value: string) => void
  disabled: boolean
  className?: string
  inputRef?: (el: HTMLInputElement | null) => void
  hint?: string
}) {
  // Convert internal format (√n) to display format (sqrt(n))
  const displayValue = value.replace(/√(\d+)/g, 'sqrt($1)')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value
    // Convert sqrt(n) to √n format
    input = input.replace(/sqrt\((\d+)\)/g, '√$1')
    // Also handle just typing sqrt without parentheses
    input = input.replace(/sqrt(\d+)/g, '√$1')
    onChange(input)
  }

  // Generate LaTeX for rendering
  const getLatex = () => {
    if (!value) return ''
    // Convert √n to \sqrt{n}
    return value.replace(/√(\d+)/g, '\\sqrt{$1}')
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {/* KaTeX rendered preview */}
      <div className={`min-w-[5rem] min-h-[5rem] flex items-center justify-center border-2 rounded-lg p-2 ${className}`}>
        {value ? (
          <span 
            className="katex-display text-2xl"
            dangerouslySetInnerHTML={{ 
              __html: typeof window !== 'undefined' && (window as any).katex 
                ? (window as any).katex.renderToString(getLatex(), { throwOnError: false, displayMode: false })
                : value
            }}
          />
        ) : (
          <span className="text-3xl text-gray-400">?</span>
        )}
      </div>
      
      {/* Text input - Khan Academy style */}
      <input
        ref={inputRef}
        type="text"
        value={displayValue}
        onChange={handleChange}
        disabled={disabled}
        className="w-24 h-8 text-sm text-center border-2 rounded focus:ring-2 focus:ring-blue-500 px-2"
        placeholder="e.g. sqrt(2)"
      />
    </div>
  )
}

// Fraction Input Component - Khan Academy style
function FractionInput({
  value,
  onChange,
  disabled,
  className,
  inputRef
}: {
  value: string
  onChange: (value: string) => void
  disabled: boolean
  className?: string
  inputRef?: (el: HTMLInputElement | null) => void
}) {
  // Convert display format: √2/2 -> sqrt(2)/2
  const displayValue = value.replace(/√(\d+)/g, 'sqrt($1)')
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value
    // Convert sqrt(n) to √n format
    input = input.replace(/sqrt\((\d+)\)/g, '√$1')
    // Also handle just typing sqrt without parentheses
    input = input.replace(/sqrt(\d+)/g, '√$1')
    onChange(input)
  }

  // Generate LaTeX for rendering
  const getLatex = () => {
    if (!value) return ''
    
    // Handle fractions
    if (value.includes('/')) {
      const [num, den] = value.split('/')
      // Convert √n to \sqrt{n} in numerator
      const numLatex = num.replace(/√(\d+)/g, '\\sqrt{$1}')
      return `\\frac{${numLatex}}{${den}}`
    }
    
    // Handle just square roots
    return value.replace(/√(\d+)/g, '\\sqrt{$1}')
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {/* KaTeX rendered preview */}
      <div className={`min-w-[6rem] min-h-[5rem] flex items-center justify-center border-2 rounded-lg p-2 ${className}`}>
        {value ? (
          <span 
            className="katex-display text-2xl"
            dangerouslySetInnerHTML={{ 
              __html: typeof window !== 'undefined' && (window as any).katex 
                ? (window as any).katex.renderToString(getLatex(), { throwOnError: false, displayMode: false })
                : value
            }}
          />
        ) : (
          <span className="text-3xl text-gray-400">?</span>
        )}
      </div>
      
      {/* Text input - Khan Academy style */}
      <input
        ref={inputRef}
        type="text"
        value={displayValue}
        onChange={handleChange}
        disabled={disabled}
        className="w-32 h-8 text-sm text-center border-2 rounded focus:ring-2 focus:ring-blue-500 px-2"
        placeholder="e.g. sqrt(2)/2"
      />
      <div className="text-xs text-gray-500">Type: 1/2 or sqrt(2)/2</div>
    </div>
  )
}

// Independent Practice Mode Component
function IndependentPracticeMode({ onBack, onComplete }: { onBack: () => void, onComplete?: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [step0Answers, setStep0Answers] = useState(['', '', '', '', ''])
  const [step1Answers, setStep1Answers] = useState(['', '', '', '', ''])
  const [step2Answers, setStep2Answers] = useState(['', '', '', '', ''])
  const [step3Answers, setStep3Answers] = useState(['', '', '', '', ''])
  const [step4Answers, setStep4Answers] = useState(['', '', '', '', ''])
  const [step0Complete, setStep0Complete] = useState(false)
  const [step1Complete, setStep1Complete] = useState(false)
  const [step2Complete, setStep2Complete] = useState(false)
  const [step3Complete, setStep3Complete] = useState(false)
  const [step4Complete, setStep4Complete] = useState(false)

  const step0Refs = useRef<(HTMLInputElement | null)[]>([])
  const step1Refs = useRef<(HTMLInputElement | null)[]>([])
  const step2Refs = useRef<(HTMLInputElement | null)[]>([])
  const step3Refs = useRef<(HTMLInputElement | null)[]>([])
  const step4Refs = useRef<(HTMLInputElement | null)[]>([])

  const step0Correct = ['0', '1', '2', '3', '4']
  const step1Correct = ['√0', '√1', '√2', '√3', '√4']
  const step2Correct = ['0', '1', '√2', '√3', '2']
  const step3Correct = ['2', '2', '2', '2', '2']
  const step4Correct = ['0', '1/2', '√2/2', '√3/2', '1']

  const handleStep0Change = (index: number, value: string) => {
    const newAnswers = [...step0Answers]
    newAnswers[index] = value
    setStep0Answers(newAnswers)
    if (value && index < 4) {
      step0Refs.current[index + 1]?.focus()
    }
  }

  const handleStep1Change = (index: number, value: string) => {
    const newAnswers = [...step1Answers]
    newAnswers[index] = value
    setStep1Answers(newAnswers)
  }

  const handleStep2Change = (index: number, value: string) => {
    const newAnswers = [...step2Answers]
    newAnswers[index] = value
    setStep2Answers(newAnswers)
  }

  const handleStep3Change = (index: number, value: string) => {
    const newAnswers = [...step3Answers]
    newAnswers[index] = value
    setStep3Answers(newAnswers)
    if (value && index < 4) {
      step3Refs.current[index + 1]?.focus()
    }
  }

  const handleStep4Change = (index: number, value: string) => {
    const newAnswers = [...step4Answers]
    newAnswers[index] = value
    setStep4Answers(newAnswers)
  }

  const validateStep0 = () => {
    const isCorrect = step0Answers.every((ans, i) => ans.trim() === step0Correct[i])
    if (isCorrect) {
      setStep0Complete(true)
      setCurrentStep(1)
      setTimeout(() => step1Refs.current[0]?.focus(), 100)
    }
    return isCorrect
  }

  const validateStep1 = () => {
    const isCorrect = step1Answers.every((ans, i) => ans.trim() === step1Correct[i])
    if (isCorrect) {
      setStep1Complete(true)
      setCurrentStep(2)
      setTimeout(() => step2Refs.current[0]?.focus(), 100)
    }
    return isCorrect
  }

  const validateStep2 = () => {
    const isCorrect = step2Answers.every((ans, i) => ans.trim() === step2Correct[i])
    if (isCorrect) {
      setStep2Complete(true)
      setCurrentStep(3)
      setTimeout(() => step3Refs.current[0]?.focus(), 100)
    }
    return isCorrect
  }

  const validateStep3 = () => {
    const isCorrect = step3Answers.every((ans, i) => ans.trim() === step3Correct[i])
    if (isCorrect) {
      setStep3Complete(true)
      setCurrentStep(4)
      setTimeout(() => step4Refs.current[0]?.focus(), 100)
    }
    return isCorrect
  }

  const validateStep4 = () => {
    const isCorrect = step4Answers.every((ans, i) => ans.trim() === step4Correct[i])
    if (isCorrect) {
      setStep4Complete(true)
    }
    return isCorrect
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-6 px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg text-foreground font-semibold transition-colors"
        >
          ← Back to Lesson
        </button>

        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          🎯 Independent Practice
        </h1>

        <p className="text-xl text-center mb-12 text-foreground">
          Complete all 5 steps to master the counting method!
        </p>

        {/* Step 0: Count */}
        <div className={`mb-8 p-8 rounded-xl border-2 ${step0Complete ? 'bg-green-50 dark:bg-green-900/20 border-green-500' : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Step 1: Count</h2>
            {step0Complete && <span className="text-3xl">✅</span>}
          </div>
          <p className="text-lg mb-6 text-foreground">Count from 0 to 4:</p>
          <div className="flex gap-4 mb-6 justify-center flex-wrap">
            {step0Answers.map((answer, i) => (
              <input
                key={i}
                ref={(el) => { step0Refs.current[i] = el }}
                type="text"
                value={answer}
                onChange={(e) => handleStep0Change(i, e.target.value)}
                disabled={step0Complete}
                className={`w-20 h-20 text-3xl text-center border-2 rounded-lg ${
                  step0Complete
                    ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                    : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-foreground'
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="?"
              />
            ))}
          </div>
          {!step0Complete && (
            <button
              onClick={validateStep0}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors"
            >
              Check Step 1
            </button>
          )}
        </div>

        {/* Step 1: Square Root */}
        <div className={`mb-8 p-8 rounded-xl border-2 ${
          currentStep < 1 ? 'opacity-50 bg-gray-100 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700' :
          step1Complete ? 'bg-green-50 dark:bg-green-900/20 border-green-500' : 
          'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Step 2: Square Root (Don't Simplify Yet!)</h2>
            {step1Complete && <span className="text-3xl">✅</span>}
            {currentStep < 1 && <span className="text-2xl">🔒</span>}
          </div>
          <p className="text-lg mb-6 text-foreground">
            Take the square root of each number. Don't simplify - just put each number under a square root.
          </p>
          <div className="flex gap-4 mb-6 justify-center flex-wrap">
            {step1Answers.map((answer, i) => (
              <SquareRootInput
                key={i}
                value={answer}
                onChange={(value) => handleStep1Change(i, value)}
                disabled={currentStep < 1 || step1Complete}
                className={
                  step1Complete
                    ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                    : currentStep >= 1
                    ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-foreground'
                    : 'bg-gray-200 dark:bg-gray-800 border-gray-400 dark:border-gray-700 text-gray-500'
                }
                inputRef={(el) => { step1Refs.current[i] = el }}
                hint="sqrt(n)"
              />
            ))}
          </div>
          {currentStep >= 1 && !step1Complete && (
            <button
              onClick={validateStep1}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors"
            >
              Check Step 2
            </button>
          )}
        </div>

        {/* Step 2: Simplify - Only show after Step 1 is complete */}
        {step1Complete && (
          <div className={`mb-8 p-8 rounded-xl border-2 ${
            currentStep < 2 ? 'opacity-50 bg-gray-100 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700' :
            step2Complete ? 'bg-green-50 dark:bg-green-900/20 border-green-500' : 
            'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
          }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Step 3: Simplify</h2>
            {step2Complete && <span className="text-3xl">✅</span>}
            {currentStep < 2 && <span className="text-2xl">🔒</span>}
          </div>
          <p className="text-lg mb-6 text-foreground">
            Simplify each square root if possible. Use "Add √" for values that can't be simplified.
          </p>
          <div className="flex gap-4 mb-6 justify-center flex-wrap">
            {step2Answers.map((answer, i) => {
              // Convert √n to LaTeX for rendering
              const getLatex = (value: string) => {
                if (!value) return ''
                return value.replace(/√(\d+)/g, '\\sqrt{$1}')
              }
              
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="text-lg text-gray-600 dark:text-gray-400 mb-2 flex items-center gap-2">
                    <span 
                      dangerouslySetInnerHTML={{ 
                        __html: typeof window !== 'undefined' && (window as any).katex 
                          ? (window as any).katex.renderToString(getLatex(step1Answers[i]), { throwOnError: false, displayMode: false })
                          : step1Answers[i]
                      }}
                    />
                    <span>=</span>
                  </div>
                  <SquareRootInput
                    value={answer}
                    onChange={(value) => handleStep2Change(i, value)}
                    disabled={currentStep < 2 || step2Complete}
                    className={
                      step2Complete
                        ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                        : currentStep >= 2
                        ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-foreground'
                        : 'bg-gray-200 dark:bg-gray-800 border-gray-400 dark:border-gray-700 text-gray-500'
                    }
                    inputRef={(el) => { step2Refs.current[i] = el }}
                  />
                </div>
              )
            })}
          </div>
          {currentStep >= 2 && !step2Complete && (
            <button
              onClick={validateStep2}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors"
            >
              Check Step 3
            </button>
          )}
          </div>
        )}

        {/* Step 3: Divide By - Only show after Step 2 is complete */}
        {step2Complete && (
          <div className={`mb-8 p-8 rounded-xl border-2 ${
            currentStep < 3 ? 'opacity-50 bg-gray-100 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700' :
            step3Complete ? 'bg-green-50 dark:bg-green-900/20 border-green-500' : 
            'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
          }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Step 4: Divide By</h2>
            {step3Complete && <span className="text-3xl">✅</span>}
            {currentStep < 3 && <span className="text-2xl">🔒</span>}
          </div>
          <p className="text-lg mb-6 text-foreground">What should you divide each value by?</p>
          <div className="flex gap-4 mb-6 justify-center flex-wrap">
            {step3Answers.map((answer, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-2xl text-gray-600 dark:text-gray-400 mb-2">
                  {step2Answers[i]}
                </div>
                <div className="w-20 border-t-2 border-gray-800 dark:border-gray-300"></div>
                <input
                  ref={(el) => { step3Refs.current[i] = el }}
                  type="text"
                  value={answer}
                  onChange={(e) => handleStep3Change(i, e.target.value)}
                  disabled={currentStep < 3 || step3Complete}
                  className={`w-20 h-20 text-3xl text-center border-2 rounded-lg ${
                    step3Complete
                      ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                      : currentStep >= 3
                      ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-foreground'
                      : 'bg-gray-200 dark:bg-gray-800 border-gray-400 dark:border-gray-700 text-gray-500'
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="?"
                />
              </div>
            ))}
          </div>
          {currentStep >= 3 && !step3Complete && (
            <button
              onClick={validateStep3}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors"
            >
              Check Step 4
            </button>
          )}
        </div>
        )}

        {/* Step 4: Final Simplify - Only show after Step 3 is complete */}
        {step3Complete && (
          <div className={`mb-8 p-8 rounded-xl border-2 ${
            currentStep < 4 ? 'opacity-50 bg-gray-100 dark:bg-gray-900/50 border-gray-300 dark:border-gray-700' :
            step4Complete ? 'bg-green-50 dark:bg-green-900/20 border-green-500' : 
            'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
          }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Step 5: Simplify</h2>
            {step4Complete && <span className="text-3xl">✅</span>}
            {currentStep < 4 && <span className="text-2xl">🔒</span>}
          </div>
          <p className="text-lg mb-6 text-foreground">
            Write each value in simplified form. Some will be whole numbers, others will be fractions.
          </p>
          <div className="flex gap-4 mb-6 justify-center flex-wrap">
            {step4Answers.map((answer, i) => {
              // For i=0 (0/2=0) and i=4 (2/2=1), use simple input
              // For i=1,2,3, use FractionInput
              const needsFraction = i === 1 || i === 2 || i === 3
              
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="text-lg mb-2 text-gray-600 dark:text-gray-400">
                    {step2Answers[i]}/{step3Answers[i]} =
                  </div>
                  {needsFraction ? (
                    <FractionInput
                      value={answer}
                      onChange={(value) => handleStep4Change(i, value)}
                      disabled={currentStep < 4 || step4Complete}
                      className={
                        step4Complete
                          ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                          : currentStep >= 4
                          ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-foreground'
                          : 'bg-gray-200 dark:bg-gray-800 border-gray-400 dark:border-gray-700 text-gray-500'
                      }
                      inputRef={(el) => { step4Refs.current[i] = el }}
                    />
                  ) : (
                    <input
                      ref={(el) => { step4Refs.current[i] = el }}
                      type="text"
                      value={answer}
                      onChange={(e) => handleStep4Change(i, e.target.value)}
                      disabled={currentStep < 4 || step4Complete}
                      className={`w-20 h-20 text-3xl text-center border-2 rounded-lg ${
                        step4Complete
                          ? 'bg-green-100 dark:bg-green-900/30 border-green-500 text-green-700 dark:text-green-300'
                          : currentStep >= 4
                          ? 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-foreground'
                          : 'bg-gray-200 dark:bg-gray-800 border-gray-400 dark:border-gray-700 text-gray-500'
                      } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="?"
                    />
                  )}
                </div>
              )
            })}
          </div>
          {currentStep >= 4 && !step4Complete && (
            <button
              onClick={validateStep4}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition-colors"
            >
              Check Step 5
            </button>
          )}
          </div>
        )}

        {/* Completion Message */}
        {step4Complete && (
          <div className="text-center p-12 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-xl border-2 border-green-500">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Perfect! You've mastered it!
            </h2>
            <p className="text-xl text-foreground mb-6">
              You've successfully completed all 5 steps of the counting method!
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={onBack}
                className="px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-lg text-xl transition-all shadow-lg hover:shadow-xl"
              >
                Return to Lesson
              </button>
              {onComplete && (
                <button
                  onClick={onComplete}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold rounded-lg text-xl transition-all shadow-lg hover:shadow-xl"
                >
                  Continue to Part 2 →
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Part 2 Independent Practice Mode - Fill in the table row by row
function Part2PracticeMode({ onBack, onComplete }: { onBack: () => void, onComplete?: () => void }) {
  const [currentRow, setCurrentRow] = useState<'theta' | 'sine' | 'cosine' | 'complete'>('theta')
  const [thetaAnswers, setThetaAnswers] = useState(['', '', '', '', ''])
  const [sineAnswers, setSineAnswers] = useState(['', '', '', '', ''])
  const [cosineAnswers, setCosineAnswers] = useState(['', '', '', '', ''])
  const [thetaValidation, setThetaValidation] = useState<(boolean | null)[]>([null, null, null, null, null])
  const [sineValidation, setSineValidation] = useState<(boolean | null)[]>([null, null, null, null, null])
  const [cosineValidation, setCosineValidation] = useState<(boolean | null)[]>([null, null, null, null, null])
  const [errorMade, setErrorMade] = useState(false) // Track if any errors were made during this attempt
  
  const thetaRefs = useRef<(HTMLInputElement | null)[]>([])
  const sineRefs = useRef<(HTMLInputElement | null)[]>([])
  const cosineRefs = useRef<(HTMLInputElement | null)[]>([])

  const thetaCorrect = ['0', '30', '45', '60', '90']
  const sineCorrect = ['0', '1/2', '√2/2', '√3/2', '1']
  const cosineCorrect = ['1', '√3/2', '√2/2', '1/2', '0']

  const normalizeAnswer = (answer: string): string => {
    let normalized = answer.trim().toLowerCase()
    // Convert sqrt(n) to √n
    normalized = normalized.replace(/sqrt\((\d+)\)/g, '√$1')
    normalized = normalized.replace(/sqrt(\d+)/g, '√$1')
    // Remove spaces
    normalized = normalized.replace(/\s/g, '')
    // Handle degree symbol
    normalized = normalized.replace(/°/g, '')
    return normalized
  }

  // Convert input to KaTeX LaTeX format
  const toLatex = (value: string): string => {
    if (!value) return ''
    let latex = value
    // Convert √n to \sqrt{n}
    latex = latex.replace(/√(\d+)/g, '\\sqrt{$1}')
    // Convert sqrt(n) to \sqrt{n}
    latex = latex.replace(/sqrt\((\d+)\)/g, '\\sqrt{$1}')
    // Convert fractions like 1/2 to \frac{1}{2}
    latex = latex.replace(/(\d+)\/(\d+)/g, '\\frac{$1}{$2}')
    // Handle √2/2 format
    latex = latex.replace(/√(\d+)\/(\d+)/g, '\\frac{\\sqrt{$1}}{$2}')
    latex = latex.replace(/\\sqrt\{(\d+)\}\/(\d+)/g, '\\frac{\\sqrt{$1}}{$2}')
    return latex
  }

  const checkRow = (rowType: 'theta' | 'sine' | 'cosine') => {
    let answers: string[]
    let correct: string[]
    let setValidation: (validation: (boolean | null)[]) => void
    
    if (rowType === 'theta') {
      answers = thetaAnswers
      correct = thetaCorrect
      setValidation = setThetaValidation
    } else if (rowType === 'sine') {
      answers = sineAnswers
      correct = sineCorrect
      setValidation = setSineValidation
    } else {
      answers = cosineAnswers
      correct = cosineCorrect
      setValidation = setCosineValidation
    }

    // Check each cell individually
    const validation = answers.map((answer, index) => 
      normalizeAnswer(answer) === normalizeAnswer(correct[index])
    )
    
    setValidation(validation)

    // Track if any errors in this row
    const hasErrors = validation.some(isCorrect => isCorrect === false)
    if (hasErrors) {
      setErrorMade(true) // Mark that an error was made during this attempt
    }

    // Check if all are correct
    const allCorrect = validation.every(isCorrect => isCorrect === true)

    if (allCorrect) {
      // Move to next row after a brief delay to show green feedback
      setTimeout(() => {
        if (rowType === 'theta') {
          setCurrentRow('sine')
          setThetaValidation([null, null, null, null, null])
        } else if (rowType === 'sine') {
          setCurrentRow('cosine')
          setSineValidation([null, null, null, null, null])
        } else {
          setCurrentRow('complete')
          setCosineValidation([null, null, null, null, null])
        }
      }, 1000)
    }
  }

  const handleThetaChange = (index: number, value: string) => {
    const newAnswers = [...thetaAnswers]
    newAnswers[index] = value
    setThetaAnswers(newAnswers)
    
    // Auto-advance for single or double digit numbers
    if (value.length >= 1 && index < 4) {
      // For 0, 30, 45, 60, 90 - advance after 1-2 digits
      if (value.length === 2 || (value === '0' && index === 0)) {
        thetaRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleSineChange = (index: number, value: string) => {
    const newAnswers = [...sineAnswers]
    newAnswers[index] = value
    setSineAnswers(newAnswers)
  }

  const handleCosineChange = (index: number, value: string) => {
    const newAnswers = [...cosineAnswers]
    newAnswers[index] = value
    setCosineAnswers(newAnswers)
  }

  const resetPractice = () => {
    setCurrentRow('theta')
    setThetaAnswers(['', '', '', '', ''])
    setSineAnswers(['', '', '', '', ''])
    setCosineAnswers(['', '', '', '', ''])
    setThetaValidation([null, null, null, null, null])
    setSineValidation([null, null, null, null, null])
    setCosineValidation([null, null, null, null, null])
    setErrorMade(false) // Reset error tracking for new attempt
    // Focus first input after a brief delay
    setTimeout(() => {
      thetaRefs.current[0]?.focus()
    }, 100)
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Complete the Unit Circle Table
          </h1>
          <p className="text-xl text-foreground">
            Fill in each row of the table for the first quadrant angles
          </p>
        </div>

        {/* The Table */}
        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-xl">
            <thead className="bg-gradient-to-r from-indigo-600 to-purple-600">
              <tr>
                <th className="px-4 py-4 text-left text-white text-lg font-bold border-r border-white/30">
                  
                </th>
                <th className="px-4 py-4 text-center text-white text-lg font-bold border-r border-white/20">1st</th>
                <th className="px-4 py-4 text-center text-white text-lg font-bold border-r border-white/20">2nd</th>
                <th className="px-4 py-4 text-center text-white text-lg font-bold border-r border-white/20">3rd</th>
                <th className="px-4 py-4 text-center text-white text-lg font-bold border-r border-white/20">4th</th>
                <th className="px-4 py-4 text-center text-white text-lg font-bold">5th</th>
              </tr>
            </thead>
            <tbody>
              {/* Theta Row */}
              <tr className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-b-2 border-gray-300 dark:border-gray-600">
                <td className="px-4 py-6 font-bold text-lg text-purple-700 dark:text-purple-400 border-r border-gray-300 dark:border-gray-600">
                  θ (theta)
                </td>
                {[0, 1, 2, 3, 4].map((i) => (
                  <td key={i} className="px-4 py-6 text-center border-r border-gray-200 dark:border-gray-700">
                    {currentRow === 'theta' ? (
                      <input
                        ref={(el) => { thetaRefs.current[i] = el }}
                        type="text"
                        value={thetaAnswers[i]}
                        onChange={(e) => handleThetaChange(i, e.target.value)}
                        className={`w-20 h-16 text-center text-xl font-bold border-2 rounded-lg focus:ring-2 focus:ring-purple-500 ${
                          thetaValidation[i] === null 
                            ? 'border-purple-500 focus:border-purple-500' 
                            : thetaValidation[i] 
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                              : 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                        }`}
                        placeholder="?"
                      />
                    ) : (
                      <div className="w-20 h-16 mx-auto flex items-center justify-center text-xl font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-500">
                        {thetaCorrect[i]}°
                      </div>
                    )}
                  </td>
                ))}
              </tr>

              {/* Sine Row */}
              <tr className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-b-2 border-gray-300 dark:border-gray-600">
                <td className="px-4 py-6 font-bold text-lg text-purple-700 dark:text-purple-400 border-r border-gray-300 dark:border-gray-600">
                  sin(θ)
                </td>
                {[0, 1, 2, 3, 4].map((i) => (
                  <td key={i} className="px-4 py-6 text-center border-r border-gray-200 dark:border-gray-700">
                    {currentRow === 'sine' ? (
                      <div className="flex flex-col items-center gap-2">
                        {/* KaTeX Preview */}
                        <div className={`w-24 h-12 flex items-center justify-center border-2 rounded-lg ${
                          sineValidation[i] === null 
                            ? 'border-purple-300 bg-purple-50 dark:bg-purple-900/20' 
                            : sineValidation[i] 
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                              : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        }`}>
                          {sineAnswers[i] ? (
                            <span
                              className={`text-lg ${
                                sineValidation[i] === null 
                                  ? '' 
                                  : sineValidation[i] 
                                    ? 'text-green-700 dark:text-green-400' 
                                    : 'text-red-700 dark:text-red-400'
                              }`}
                              dangerouslySetInnerHTML={{
                                __html: typeof window !== 'undefined' && (window as any).katex
                                  ? (window as any).katex.renderToString(toLatex(sineAnswers[i]), { throwOnError: false })
                                  : sineAnswers[i]
                              }}
                            />
                          ) : (
                            <span className="text-2xl text-gray-400">?</span>
                          )}
                        </div>
                        {/* Input */}
                        <input
                          ref={(el) => { sineRefs.current[i] = el }}
                          type="text"
                          value={sineAnswers[i]}
                          onChange={(e) => handleSineChange(i, e.target.value)}
                          className={`w-24 h-10 text-center text-sm border-2 rounded-lg focus:ring-2 focus:ring-purple-500 ${
                            sineValidation[i] === null 
                              ? 'border-purple-500' 
                              : sineValidation[i] 
                                ? 'border-green-500' 
                                : 'border-red-500'
                          }`}
                          placeholder="e.g. 1/2"
                        />
                      </div>
                    ) : currentRow === 'cosine' || currentRow === 'complete' ? (
                      <div className="w-24 h-16 mx-auto flex items-center justify-center text-lg font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-500">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: typeof window !== 'undefined' && (window as any).katex
                              ? (window as any).katex.renderToString(toLatex(sineCorrect[i]), { throwOnError: false })
                              : sineCorrect[i]
                          }}
                        />
                      </div>
                    ) : (
                      <div className="text-center text-gray-400 text-2xl">🔒</div>
                    )}
                  </td>
                ))}
              </tr>

              {/* Cosine Row */}
              <tr className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20">
                <td className="px-4 py-6 font-bold text-lg text-purple-700 dark:text-purple-400 border-r border-gray-300 dark:border-gray-600">
                  cos(θ)
                </td>
                {[0, 1, 2, 3, 4].map((i) => (
                  <td key={i} className="px-4 py-6 text-center border-r border-gray-200 dark:border-gray-700">
                    {currentRow === 'cosine' ? (
                      <div className="flex flex-col items-center gap-2">
                        {/* KaTeX Preview */}
                        <div className={`w-24 h-12 flex items-center justify-center border-2 rounded-lg ${
                          cosineValidation[i] === null 
                            ? 'border-purple-300 bg-purple-50 dark:bg-purple-900/20' 
                            : cosineValidation[i] 
                              ? 'border-green-500 bg-green-50 dark:bg-green-900/20' 
                              : 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        }`}>
                          {cosineAnswers[i] ? (
                            <span
                              className={`text-lg ${
                                cosineValidation[i] === null 
                                  ? '' 
                                  : cosineValidation[i] 
                                    ? 'text-green-700 dark:text-green-400' 
                                    : 'text-red-700 dark:text-red-400'
                              }`}
                              dangerouslySetInnerHTML={{
                                __html: typeof window !== 'undefined' && (window as any).katex
                                  ? (window as any).katex.renderToString(toLatex(cosineAnswers[i]), { throwOnError: false })
                                  : cosineAnswers[i]
                              }}
                            />
                          ) : (
                            <span className="text-2xl text-gray-400">?</span>
                          )}
                        </div>
                        {/* Input */}
                        <input
                          ref={(el) => { cosineRefs.current[i] = el }}
                          type="text"
                          value={cosineAnswers[i]}
                          onChange={(e) => handleCosineChange(i, e.target.value)}
                          className={`w-24 h-10 text-center text-sm border-2 rounded-lg focus:ring-2 focus:ring-purple-500 ${
                            cosineValidation[i] === null 
                              ? 'border-purple-500' 
                              : cosineValidation[i] 
                                ? 'border-green-500' 
                                : 'border-red-500'
                          }`}
                          placeholder="e.g. 1/2"
                        />
                      </div>
                    ) : currentRow === 'complete' ? (
                      <div className="w-24 h-16 mx-auto flex items-center justify-center text-lg font-bold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-500">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: typeof window !== 'undefined' && (window as any).katex
                              ? (window as any).katex.renderToString(toLatex(cosineCorrect[i]), { throwOnError: false })
                              : cosineCorrect[i]
                          }}
                        />
                      </div>
                    ) : (
                      <div className="text-center text-gray-400 text-2xl">🔒</div>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Check Row Button */}
        {currentRow !== 'complete' && (
          <div className="text-center mt-8">
            <button
              onClick={() => checkRow(currentRow)}
              className="px-12 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-xl transition-all shadow-lg hover:shadow-xl"
            >
              Check {currentRow === 'theta' ? 'θ' : currentRow === 'sine' ? 'sin(θ)' : 'cos(θ)'} Row
            </button>
          </div>
        )}

        {/* Completion Message */}
        {currentRow === 'complete' && (
          <div className={`text-center p-12 rounded-xl border-2 mt-8 ${
            errorMade 
              ? 'bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 border-orange-500'
              : 'bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 border-green-500'
          }`}>
            <div className="text-6xl mb-4">{errorMade ? '📝' : '🎉'}</div>
            <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r ${
              errorMade 
                ? 'from-orange-600 to-red-600'
                : 'from-green-600 to-blue-600'
            } bg-clip-text text-transparent`}>
              {errorMade ? 'Some errors were found!' : 'Perfect! Zero errors!'}
            </h2>
            <p className="text-xl text-foreground mb-6">
              {errorMade 
                ? 'You completed the table, but some answers were incorrect. Please try again to master the unit circle!'
                : "Excellent work! You've completed the table with zero errors. You're ready to continue to Part 3!"
              }
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={resetPractice}
                className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-xl transition-all shadow-lg hover:shadow-xl"
              >
                🔄 Try Again
              </button>
              <button
                onClick={onBack}
                className="px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-lg text-xl transition-all shadow-lg hover:shadow-xl"
              >
                Return to Lesson
              </button>
              {onComplete && !errorMade && (
                <button
                  onClick={onComplete}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold rounded-lg text-xl transition-all shadow-lg hover:shadow-xl"
                >
                  Continue to Part 3 →
                </button>
              )}
            </div>
          </div>
        )}

        {/* Back Button (always visible) */}
        {currentRow !== 'complete' && (
          <div className="text-center mt-6">
            <button
              onClick={onBack}
              className="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 font-medium"
            >
              ← Back to Lesson
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
