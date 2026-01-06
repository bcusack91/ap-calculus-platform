# Lesson Part-Based Flashcard System

## Overview

Flashcards are now intelligently tagged with **lesson parts** so students only see flashcards relevant to the content they've actually studied. This replaces the previous percentage-based system with a content-aware approach.

## How It Works

### 1. Database Schema
Each flashcard has a `lessonPart` field (optional integer):
```prisma
model Flashcard {
  id         String   @id @default(cuid())
  topicId    String
  front      String
  back       String
  hint       String?
  lessonPart Int?     // NEW: Which lesson part (1, 2, 3, etc.)
  ...
}
```

### 2. Flashcard Initialization Logic

When a student completes a lesson part:
- **Only flashcards tagged with that part or earlier** are initialized
- Example: Completing Part 3 initializes flashcards tagged as Part 1, 2, or 3
- Flashcards with `lessonPart = null` (untagged/legacy) are available to all parts

When a topic is marked COMPLETED or MASTERED:
- **ALL flashcards** are initialized regardless of tags

### 3. Notification System

After completing each lesson part, students see a notification showing:
- Number of NEW flashcards unlocked
- Total active flashcards available
- Direct link to review them

## Tagging Flashcards

### For Reflection & Refraction Example

The topic has 8 parts:
- **Part 1**: Speed of light, basic concepts → Cards about c = 3×10⁸ m/s, white light splitting
- **Part 3**: Cartesian Sign Convention → Cards about concave/convex, sign rules
- **Part 4**: Reflection → Cards about mirror equation, law of reflection
- **Part 5**: Index of Refraction → Cards about n = c/v
- **Part 6**: Snell's Law → Cards about refraction, bending
- **Part 7**: Total Internal Reflection → Cards about TIR, critical angle
- **Part 8**: Dispersion → Cards about prisms, wavelength dependence

### Using the Tagging Scripts

#### Option 1: Use the pre-configured script
```bash
npx tsx tag-reflection-refraction-flashcards.ts
```

#### Option 2: Use the template for other topics
1. Copy `tag-flashcards-template.ts`
2. Set the `TOPIC_SLUG`
3. Define lesson parts and keywords:
```typescript
const LESSON_PART_DEFINITIONS = [
  {
    part: 1,
    title: 'Introduction',
    description: 'Basic concepts',
    keywords: ['speed of light', 'white light', 'c = 3']
  },
  {
    part: 3,
    title: 'Sign Convention',
    description: 'Cartesian sign rules',
    keywords: ['sign convention', 'positive', 'negative', 'concave', 'convex']
  },
  // ... more parts
]
```
4. Run: `npx tsx tag-flashcards-template.ts`
5. Review the output and type "yes" to confirm

### Manual Tagging in Seed Scripts

When creating new flashcards in seed scripts, add the `lessonPart` field:

```typescript
await prisma.flashcard.createMany({
  data: [
    {
      topicId: topic.id,
      front: 'What is the speed of light?',
      back: 'c = 3.00 × 10⁸ m/s in vacuum',
      lessonPart: 1  // ← Tag with lesson part!
    },
    {
      topicId: topic.id,
      front: 'State the mirror equation.',
      back: '1/f = 1/d_o + 1/d_i',
      lessonPart: 4  // ← Part 4: Reflection
    }
  ]
})
```

## Benefits

### ✅ Better Learning Experience
- Students only see flashcards for concepts they've learned
- No "spoilers" from advanced content
- Progressive difficulty matching lesson flow

### ✅ More Accurate Spaced Repetition
- Cards appear when content is fresh in memory
- Better retention through timely review
- Reduces cognitive overload

### ✅ Clear Progress Feedback
- Students see exactly what new material they can review
- Motivating to see flashcard collection grow
- Transparent connection between lessons and review materials

## Implementation Checklist for New Topics

- [ ] Create lesson plan with clear part divisions
- [ ] Write flashcards for each part
- [ ] Tag flashcards with `lessonPart` numbers
- [ ] Test the flow: complete each part and verify correct cards appear
- [ ] Adjust tags if flashcards appear at wrong times

## Migration Notes

### Existing Flashcards
- Flashcards without `lessonPart` tag (null) remain accessible across all parts
- This maintains backward compatibility with existing content
- Gradually tag flashcards as topics are reviewed/updated

### Database Changes
```sql
-- Added column
ALTER TABLE "Flashcard" ADD COLUMN "lessonPart" INTEGER;

-- Added index for performance
CREATE INDEX "Flashcard_topicId_lessonPart_idx" 
  ON "Flashcard"("topicId", "lessonPart");
```

## API Changes

### Request to `/api/progress/save`
```json
{
  "topicSlug": "reflection-refraction",
  "lessonPart": 3,  // ← Used to filter flashcards
  "status": "IN_PROGRESS",
  "masteryLevel": 0.5
}
```

### Response includes flashcard info
```json
{
  "success": true,
  "flashcards": {
    "created": true,
    "newCards": 4,      // New cards unlocked
    "totalActive": 12,  // Total cards now available
    "totalPossible": 20,
    "topicTitle": "Reflection and Refraction"
  }
}
```

## Testing

To test the system:
1. Start a topic from Part 1
2. Complete Part 1 → Should see flashcards tagged with `lessonPart: 1`
3. Complete Part 2 → Should see flashcards tagged with `lessonPart: 2`
4. Complete Part 3 → Should see flashcards tagged with `lessonPart: 3`
5. Etc.

Check the browser console for logs like:
```
📚 Lesson part 3 - considering 12/20 flashcards (tagged for parts 1-3 or untagged)
✅ Initialized 4 new flashcards for "Reflection and Refraction" (12/20 total)
```

## Future Enhancements

- Auto-tagging using AI to analyze flashcard content
- Analytics: which parts have most/least flashcards
- Bulk tagging UI for admins
- Visual indicators showing which parts have flashcards in the lesson UI
