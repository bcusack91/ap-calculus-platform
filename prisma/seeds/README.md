# Organized Flashcard Seed System

## Overview

Flashcard seeds are now organized by course, category, and topic in a clear folder hierarchy. This makes it easy for employees to find and add flashcards to the correct lesson parts.

## Folder Structure

```
prisma/seeds/
├── _TEMPLATE_flashcard_part.ts          # Copy this for new flashcard files
├── physics2/
│   └── optics/
│       └── reflection-and-refraction/
│           ├── index.ts                  # Master seed runner for this topic
│           ├── topic.ts                  # Topic creation + lesson content
│           ├── part-01-introduction.ts   # 4 flashcards (Part 1)
│           ├── part-04-reflection.ts     # 2 flashcards (Part 4)
│           ├── part-06-curved-mirrors.ts # 3 flashcards (Part 6)
│           └── part-07-tir.ts           # 1 flashcard (Part 7)
├── chemistry/
│   └── acids-bases/
│       └── buffers/
│           ├── index.ts
│           ├── topic.ts
│           └── part-XX-name.ts
└── calculus/
    └── derivatives/
        └── power-rule/
            ├── index.ts
            ├── topic.ts
            └── part-XX-name.ts
```

## Benefits

✅ **Clear organization** - Each part has its own file  
✅ **Easy assignment** - "Add flashcards to `part-05-index-refraction.ts`"  
✅ **No tagging script needed** - `lessonPart` is hardcoded in each file  
✅ **Scalable** - Works for all courses  
✅ **Version control friendly** - Smaller, focused files

## How to Add Flashcards

### For Employees

1. **Copy the template:**
   ```bash
   cp prisma/seeds/_TEMPLATE_flashcard_part.ts \
      prisma/seeds/{course}/{category}/{topic}/part-{XX}-{name}.ts
   ```

2. **Edit the configuration:**
   ```typescript
   const TOPIC_SLUG = 'reflection-refraction'  // Match your topic
   const LESSON_PART = 5                       // Which part (1, 2, 3...)
   const PART_NAME = 'Index of Refraction'     // Descriptive name
   ```

3. **Add flashcards:**
   ```typescript
   await prisma.flashcard.createMany({
     data: [
       {
         topicId: topic.id,
         lessonPart: LESSON_PART,
         front: 'What is the formula for index of refraction?',
         back: 'n = c/v, where c is speed of light in vacuum and v is speed in the medium.',
       },
       // Add more...
     ],
   })
   ```

4. **Test it:**
   ```bash
   npx tsx prisma/seeds/{course}/{category}/{topic}/part-{XX}-{name}.ts
   ```

5. **Add to index.ts:**
   ```typescript
   import { seedPart05Flashcards } from './part-05-index-refraction'
   
   async function main() {
     // ...
     await seedPart05Flashcards()
   }
   ```

## Running Seeds

### Run a specific topic:
```bash
cd prisma/seeds/physics2/optics/reflection-and-refraction
npx tsx index.ts
```

### Run all seeds in a course:
```bash
npx tsx prisma/seed-runner.ts physics2
```

### Run all seeds in a category:
```bash
npx tsx prisma/seed-runner.ts physics2/optics
```

### Run ALL seeds:
```bash
npx tsx prisma/seed-runner.ts
```

## File Naming Convention

- **topic.ts** - Creates the topic, lesson content, and example problems
- **part-{XX}-{name}.ts** - Flashcards for a specific part
  - `XX` = Two-digit part number (01, 02, 03, etc.)
  - `name` = Descriptive kebab-case name
  - Examples:
    - `part-01-introduction.ts`
    - `part-05-index-refraction.ts`
    - `part-07-tir.ts`
- **index.ts** - Master runner that calls all seed functions in order

## Example: Reflection and Refraction

```
reflection-and-refraction/
├── index.ts                  # Runs all seeds in order
├── topic.ts                  # Topic + lesson + 3 example problems
├── part-01-introduction.ts   # 4 cards: Snell's Law, n=c/v, dispersion, frequency/wavelength
├── part-04-reflection.ts     # 2 cards: Law of reflection, plane mirrors
├── part-06-curved-mirrors.ts # 3 cards: Mirror equation, concave/convex, f=R/2
└── part-07-tir.ts           # 1 card: Total internal reflection
```

## Migration Notes

- Old seed files (like `seed-physics2-optics-part1.ts`) still exist in `prisma/`
- New organized seeds are in `prisma/seeds/`
- Use the new structure for all new content going forward
- Old seeds can be migrated gradually as needed

## Tips for Employees

1. **One concept per flashcard** - Don't cram multiple unrelated concepts
2. **Include formulas** - Use clear notation (e.g., `n = c/v`)
3. **Provide context** - Explain when/why to use a concept
4. **Add examples** - Help students remember with concrete examples
5. **Keep concise** - Front: question. Back: answer + key details
6. **Test first** - Always run the seed file to check for errors

## Need Help?

- See `_TEMPLATE_flashcard_part.ts` for detailed instructions
- Check existing files in `physics2/optics/reflection-and-refraction/` for examples
- Each flashcard file is standalone and can be run independently for testing
