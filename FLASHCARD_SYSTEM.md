# Anki-Style Flashcard System - Complete Implementation

## Overview

This implementation provides a complete Anki-style spaced repetition flashcard system that automatically generates flashcards when students complete topics or pass checks for understanding. The system uses the SuperMemo 2 (SM-2) algorithm for optimal learning intervals.

## Features

### ✅ Auto-Generation
- **Automatic Creation**: Flashcards are automatically generated when a student completes a topic (status becomes COMPLETED or MASTERED)
- **Smart Extraction**: The system analyzes topic content to extract:
  - 📐 Mathematical equations and formulas (LaTeX)
  - 🔢 Important constants (speed of light, gravitational acceleration, etc.)
  - 📚 Key definitions and concepts
  - 💡 Important notes and key points
- **Quality Scoring**: Uses heuristics to prioritize the most important concepts
- **Limit**: Maximum 10 flashcards per topic to avoid overwhelming students

### ✅ Spaced Repetition (SM-2 Algorithm)
- **Smart Scheduling**: Cards are reviewed at optimal intervals based on recall quality
- **4-Button Rating System**:
  - **Again** (Quality 1): Card reset, review in <1 minute
  - **Hard** (Quality 3): Difficult recall, shorter interval
  - **Good** (Quality 4): Correct with thought, standard interval
  - **Easy** (Quality 5): Perfect recall, longer interval
- **Adaptive Intervals**:
  - New cards: 0 → 1 day → 6 days → calculated intervals
  - Ease factor adjusts based on performance (1.3 to ∞)
  - Failed cards (Again) reset to beginning

### ✅ Progress Tracking
- **Per-Card Statistics**:
  - Review count
  - Ease factor (difficulty multiplier)
  - Current interval (days until next review)
  - Next review date
  - Last reviewed date
- **User Dashboard**:
  - Total cards
  - Cards due now
  - New cards (never reviewed)
  - Review cards (previously seen)

### ✅ User Experience
- **Beautiful UI**: 3D flip animations, color-coded by status
- **Hints**: Optional hints available for difficult cards
- **LaTeX Support**: Full mathematical notation rendering
- **Notifications**: Toast notifications when flashcards are generated
- **Mobile Responsive**: Works on all devices

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── flashcards/
│   │       ├── auto-generate/
│   │       │   └── route.ts          # POST: Auto-generate flashcards for a topic
│   │       └── review/
│   │           └── route.ts          # GET: Fetch due cards, POST: Submit review
│   └── flashcards/
│       ├── page.tsx                  # Browse all flashcards by topic
│       ├── review/
│       │   ├── page.tsx              # Review dashboard with stats
│       │   └── start/
│       │       └── page.tsx          # Active review session
│       └── [slug]/
│           └── page.tsx              # Study specific topic flashcards
├── components/
│   └── flashcard-notification.tsx   # Toast notification component
└── lib/
    ├── spaced-repetition.ts         # SM-2 algorithm implementation
    └── flashcard-generation.ts      # Content parsing and extraction
```

## API Endpoints

### POST `/api/flashcards/auto-generate`

Auto-generates flashcards for a topic after completion.

**Request Body:**
```json
{
  "topicId": "cuid-of-topic",
  "triggerType": "practice" | "quiz" | "manual"
}
```

**Response:**
```json
{
  "message": "Successfully created 8 flashcards",
  "flashcards": [...],
  "newlyCreated": true,
  "topicTitle": "The Unit Circle"
}
```

**Behavior:**
- Checks if flashcards already exist for the topic
- If yes: Initializes progress for the user
- If no: Generates up to 10 new flashcards from topic content
- Automatically initializes FlashcardProgress for the user

### GET `/api/flashcards/review`

Fetches flashcards due for review.

**Query Parameters:**
- `topicId` (optional): Filter by specific topic

**Response:**
```json
{
  "cards": [
    {
      "id": "progress-id",
      "easeFactor": 2.5,
      "interval": 6,
      "repetitions": 2,
      "nextReview": "2026-01-10T00:00:00Z",
      "reviewCount": 5,
      "flashcard": {
        "id": "card-id",
        "front": "What is the derivative of x^n?",
        "back": "$\\frac{d}{dx}(x^n) = nx^{n-1}$",
        "hint": "Use the power rule",
        "topic": {
          "title": "Basic Derivatives",
          "slug": "basic-derivatives"
        }
      }
    }
  ],
  "stats": {
    "total": 50,
    "due": 12,
    "new": 5,
    "review": 7
  }
}
```

### POST `/api/flashcards/review`

Submits a review rating and updates the schedule.

**Request Body:**
```json
{
  "flashcardId": "cuid-of-flashcard",
  "rating": "again" | "hard" | "good" | "easy"
}
```

**Response:**
```json
{
  "success": true,
  "progress": {
    "easeFactor": 2.6,
    "interval": 15,
    "repetitions": 3,
    "nextReview": "2026-01-20T00:00:00Z"
  },
  "nextReviewDate": "2026-01-20T00:00:00Z",
  "interval": 15
}
```

## SM-2 Algorithm Details

### Quality Ratings
- **0**: Complete blackout, didn't recall at all
- **1**: Incorrect response, but recognized correct answer (Again button)
- **2**: Incorrect response, but correct seemed familiar
- **3**: Correct response, but required significant effort (Hard button)
- **4**: Correct response, after some hesitation (Good button)
- **5**: Perfect response, immediate recall (Easy button)

### Ease Factor Calculation
```
EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
```
Where:
- `EF'` = New ease factor
- `EF` = Previous ease factor
- `q` = Quality rating (0-5)
- Minimum ease factor: 1.3

### Interval Calculation
- **Quality < 3**: Reset card (interval = 0, repetitions = 0)
- **First review** (repetitions = 0): interval = 1 day
- **Second review** (repetitions = 1): interval = 6 days
- **Subsequent reviews**: interval = previous_interval × ease_factor

## Integration Points

### Automatic Trigger on Topic Completion

In `/api/progress/save/route.ts`:

```typescript
// When topic is completed for the first time
if ((status === 'COMPLETED' || status === 'MASTERED') && !progress.completedAt) {
  try {
    const flashcardResponse = await fetch(
      `${process.env.NEXTAUTH_URL}/api/flashcards/auto-generate`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId: topic.id,
          triggerType: 'practice'
        })
      }
    )
    // Handle response...
  } catch (error) {
    // Non-blocking: don't fail if flashcard generation fails
  }
}
```

## Usage Flow

### For Students

1. **Complete a Topic**
   - Student completes interactive practice or quiz
   - Progress is saved with status "COMPLETED" or "MASTERED"
   - System automatically generates flashcards

2. **Review Notification**
   - Toast notification appears: "8 flashcards created!"
   - Options: "Review Now" or "Later"

3. **Daily Review**
   - Student visits `/flashcards/review`
   - Dashboard shows due cards count
   - Click "Start Review Session"

4. **Study Cards**
   - Cards appear one at a time
   - Read question, think of answer
   - Click to flip and see correct answer
   - Rate recall: Again, Hard, Good, or Easy
   - System schedules next review automatically

5. **Progress Tracking**
   - View statistics: total cards, due count, retention rate
   - Cards automatically become due at optimal intervals
   - Struggling cards appear more frequently

### For Developers

**Adding Manual Flashcard Generation:**
```typescript
const response = await fetch('/api/flashcards/auto-generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    topicId: 'your-topic-id',
    triggerType: 'manual'
  })
})
```

**Fetching Due Cards:**
```typescript
// All due cards
const response = await fetch('/api/flashcards/review')

// Due cards for specific topic
const response = await fetch('/api/flashcards/review?topicId=topic-id')
```

**Submitting a Review:**
```typescript
const response = await fetch('/api/flashcards/review', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    flashcardId: 'card-id',
    rating: 'good' // again, hard, good, or easy
  })
})
```

## Database Schema

The system uses the existing Prisma schema with these models:

### Flashcard
```prisma
model Flashcard {
  id        String              @id @default(cuid())
  topicId   String
  front     String              // Question
  back      String              // Answer
  hint      String?             // Optional hint
  isPremium Boolean             @default(false)
  createdAt DateTime            @default(now())
  updatedAt DateTime            @updatedAt
  topic     Topic               @relation(...)
  progress  FlashcardProgress[]
}
```

### FlashcardProgress
```prisma
model FlashcardProgress {
  id           String    @id @default(cuid())
  userId       String
  flashcardId  String
  easeFactor   Float     @default(2.5)    // SM-2 ease factor
  interval     Int       @default(0)      // Days until next review
  repetitions  Int       @default(0)      // Number of successful reviews
  nextReview   DateTime  @default(now())  // When card is due
  lastReviewed DateTime  @default(now())  // Last review timestamp
  reviewCount  Int       @default(0)      // Total review count
  flashcard    Flashcard @relation(...)
  user         User      @relation(...)
  
  @@unique([userId, flashcardId])
}
```

## Configuration

### Environment Variables
```env
NEXTAUTH_URL=http://localhost:3000  # Required for auto-generation API calls
```

### Customization Options

**In `flashcard-generation.ts`:**
- `maxFlashcardsPerTopic`: Default 10, adjust in `generateFlashcardsFromContent()`
- Pattern matching regex for equations, constants, definitions
- Scoring weights in `scoreFlashcard()`

**In `spaced-repetition.ts`:**
- Minimum ease factor: Default 1.3
- Initial intervals: 1 day, 6 days (modify in `calculateNextReview()`)
- Quality rating mappings in `buttonToQuality()`

## Testing

### Manual Testing Checklist

1. **Auto-Generation**
   - [ ] Complete a topic → flashcards generated
   - [ ] Complete same topic again → uses existing flashcards
   - [ ] Check flashcard content quality
   - [ ] Verify LaTeX rendering

2. **Review Flow**
   - [ ] Visit review dashboard → see correct stats
   - [ ] Start review → cards appear in order
   - [ ] Flip card → answer displays correctly
   - [ ] Rate "Again" → card interval resets
   - [ ] Rate "Good" → card scheduled appropriately
   - [ ] Complete session → stats update

3. **Edge Cases**
   - [ ] User with no cards → friendly empty state
   - [ ] All cards reviewed → "All caught up" message
   - [ ] Multiple topics completed → all cards in queue
   - [ ] Offline/API errors → graceful handling

### Automated Testing (Future)

```typescript
// Example test cases
describe('Flashcard Auto-Generation', () => {
  it('should generate flashcards on topic completion')
  it('should extract equations from content')
  it('should not duplicate flashcards')
})

describe('Spaced Repetition', () => {
  it('should calculate correct intervals for SM-2')
  it('should reset cards on "Again" rating')
  it('should maintain minimum ease factor of 1.3')
})
```

## Future Enhancements

### Planned Features
- [ ] **Bulk Review Mode**: Review multiple cards at once
- [ ] **Custom Card Creation**: Let students create their own cards
- [ ] **Shared Decks**: Share flashcard decks between students
- [ ] **Statistics Dashboard**: Detailed analytics on retention
- [ ] **Mobile App**: Native iOS/Android apps
- [ ] **Voice Mode**: Audio flashcards for on-the-go review
- [ ] **Gamification**: Streaks, achievements, leaderboards
- [ ] **AI-Powered Generation**: Use GPT to generate better cards

### Potential Improvements
- Add card tagging/categorization
- Export/import decks (Anki format compatibility)
- Collaborative study sessions
- Multimedia cards (images, videos)
- Advanced scheduling algorithms (SM-15, SM-17)
- Integration with calendar apps for reminders

## Troubleshooting

### Common Issues

**Cards not generating:**
- Check that topic has `textContent` populated
- Verify `topicId` is correct in API call
- Check server logs for parsing errors
- Ensure topic status reaches COMPLETED or MASTERED

**Reviews not saving:**
- Verify user is authenticated
- Check FlashcardProgress record exists
- Ensure `flashcardId` is valid
- Check for database connection issues

**Incorrect intervals:**
- Verify ease factor is within bounds (≥1.3)
- Check quality rating conversion (button → number)
- Review SM-2 calculation logic
- Ensure `interval` and `repetitions` update correctly

## Resources

- [SuperMemo SM-2 Algorithm](https://www.supermemo.com/en/archives1990-2015/english/ol/sm2)
- [Anki Manual](https://docs.ankiweb.net/)
- [Spaced Repetition Research](https://en.wikipedia.org/wiki/Spaced_repetition)

## Support

For questions or issues:
1. Check this README
2. Review code comments in implementation files
3. Test with browser DevTools console
4. Check database records directly via Prisma Studio

---

**Last Updated**: January 5, 2026  
**Version**: 1.0.0  
**Status**: ✅ Production Ready
