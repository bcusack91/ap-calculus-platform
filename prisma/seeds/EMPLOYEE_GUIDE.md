# Quick Start Guide for Employees

## Adding Flashcards to a Topic

### Step 1: Find or Create the Topic Folder

Navigate to: `prisma/seeds/{course}/{category}/{topic}/`

Examples:
- Physics 2 Optics: `prisma/seeds/physics2/optics/reflection-and-refraction/`
- Chemistry: `prisma/seeds/chemistry/acids-bases/buffers/`
- Calculus: `prisma/seeds/calculus/derivatives/power-rule/`

### Step 2: Copy the Template

```bash
cp prisma/seeds/_TEMPLATE_flashcard_part.ts \
   prisma/seeds/{course}/{category}/{topic}/part-{XX}-{name}.ts
```

**Example:**
```bash
cp prisma/seeds/_TEMPLATE_flashcard_part.ts \
   prisma/seeds/physics2/optics/reflection-and-refraction/part-05-snells-law.ts
```

### Step 3: Edit Your New File

Open the file and change these 3 things at the top:

```typescript
const TOPIC_SLUG = 'reflection-refraction'  // ← Must match the topic slug
const LESSON_PART = 5                       // ← Which part (1, 2, 3...)
const PART_NAME = "Snell's Law"             // ← Descriptive name
```

### Step 4: Add Your Flashcards

Replace the example flashcards with yours:

```typescript
await prisma.flashcard.createMany({
  data: [
    {
      topicId: topic.id,
      lessonPart: LESSON_PART,
      front: 'State Snell\'s Law.',
      back: 'n₁sinθ₁ = n₂sinθ₂. Light bends when crossing boundaries between media.',
    },
    {
      topicId: topic.id,
      lessonPart: LESSON_PART,
      front: 'What happens when light enters a denser medium?',
      back: 'Light slows down and bends toward the normal. Example: air → water.',
    },
  ],
})
```

### Step 5: Test It

Run your file directly to make sure it works:

```bash
npx tsx prisma/seeds/physics2/optics/reflection-and-refraction/part-05-snells-law.ts
```

You should see:
```
✓ Created flashcards for Part 5: Snell's Law
✅ Successfully seeded Snell's Law flashcards!
```

### Step 6: Add to index.ts

Open `index.ts` in the same folder and add your file:

```typescript
import { seedPart05Flashcards } from './part-05-snells-law'  // ← Add this

async function main() {
  // ... existing code
  await seedPart05Flashcards()  // ← Add this
}
```

## Common Questions

### Q: What's the topic slug?
Look at the folder name or check the database. It's usually kebab-case like `reflection-refraction`.

### Q: How many flashcards per part?
Usually 1-5 flashcards per part. Focus on the most important concepts.

### Q: What makes a good flashcard?
- **Front**: One clear question
- **Back**: Concise answer with key details
- Include formulas, examples, and context
- Test ONE concept per card

### Q: Can I test without adding to the database?
No - but you can run the seed file in a test environment first.

### Q: What if I make a mistake?
Flashcards can be deleted from the database and re-seeded. Don't worry!

## File Naming Rules

✅ **Good:**
- `part-01-introduction.ts`
- `part-05-snells-law.ts`
- `part-12-advanced-topics.ts`

❌ **Bad:**
- `part1.ts` (missing zero padding)
- `part-5-snells law.ts` (spaces instead of hyphens)
- `flashcards.ts` (not descriptive)

## Getting Help

1. Check the template: `prisma/seeds/_TEMPLATE_flashcard_part.ts`
2. Look at examples: `prisma/seeds/physics2/optics/reflection-and-refraction/`
3. Read full docs: `prisma/seeds/README.md`
4. Ask your manager!

## Checklist

- [ ] Copied template to correct location
- [ ] Updated TOPIC_SLUG, LESSON_PART, PART_NAME
- [ ] Added flashcards (front and back)
- [ ] Tested by running the file directly
- [ ] Added import and function call to index.ts
- [ ] Committed changes to git
