import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Adding AP Computer Science A flashcards...\n');

  const topicSlugs = [
    'csa-variables-types', 'csa-conditionals', 'csa-arrays', 'csa-inheritance',
  ];

  for (const slug of topicSlugs) {
    const topic = await prisma.topic.findFirst({ where: { slug } });
    if (!topic) { console.log(`⚠ Topic not found: ${slug}`); continue; }
    await prisma.flashcard.deleteMany({ where: { topicId: topic.id } });
  }

  const t1 = await prisma.topic.findFirst({ where: { slug: 'csa-variables-types' } });
  if (t1) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t1.id, front: 'Primitive types in Java?', back: 'AP CSA focuses on **3 primitives**:\n• **int**: whole numbers (-2³¹ to 2³¹-1)\n• **double**: decimal numbers (floating-point)\n• **boolean**: true or false\n\nAlso: byte, short, long, float, char (not tested directly).', hint: 'int, double, boolean for the AP exam.' },
        { topicId: t1.id, front: 'Integer division in Java?', back: 'When both operands are **int**, Java performs **integer division** — the decimal is **truncated** (not rounded).\n\n`7 / 2` → `3` (not 3.5)\n`-7 / 2` → `-3` (truncates toward zero)', hint: 'Truncates, does not round.' },
        { topicId: t1.id, front: 'What is casting?', back: '**Changing** one data type to another:\n\n**Widening** (automatic): int → double\n`double x = 5;` → `5.0`\n\n**Narrowing** (explicit): double → int\n`int x = (int) 5.7;` → `5` (truncates)', hint: 'Widening = automatic; Narrowing = explicit (int).' },
      ],
    });
    console.log('✅ Variables & Types flashcards');
  }

  const t2 = await prisma.topic.findFirst({ where: { slug: 'csa-conditionals' } });
  if (t2) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t2.id, front: 'if vs. if-else vs. if-else-if?', back: '**if**: executes block only if condition is true\n**if-else**: two paths — true or false\n**if-else-if**: multiple conditions checked in order; first true block executes', hint: 'One path, two paths, or many paths.' },
        { topicId: t2.id, front: 'Short-circuit evaluation?', back: '**&&** (AND): if first operand is **false**, second is **not evaluated**\n**||** (OR): if first operand is **true**, second is **not evaluated**\n\nPrevents errors: `if (arr != null && arr.length > 0)`', hint: 'Stop early when result is already determined.' },
        { topicId: t2.id, front: 'Comparing objects vs. primitives?', back: '**Primitives**: use `==` to compare values\n**Objects** (String, etc.): `==` compares **references** (memory addresses)\n\nUse `.equals()` to compare **content**:\n`str1.equals(str2)` → compares the actual string values', hint: '== for primitives, .equals() for objects.' },
      ],
    });
    console.log('✅ Conditionals flashcards');
  }

  const t3 = await prisma.topic.findFirst({ where: { slug: 'csa-arrays' } });
  if (t3) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t3.id, front: 'How to declare and initialize an array?', back: '```java\nint[] arr = new int[5]; // 5 elements, default 0\nint[] arr = {1, 2, 3, 4, 5}; // literal\n```\n\n• Fixed size after creation\n• Zero-indexed: `arr[0]` to `arr[arr.length-1]`\n• `arr.length` (no parentheses) gives size', hint: 'Fixed size, zero-indexed, .length property.' },
        { topicId: t3.id, front: 'ArrayIndexOutOfBoundsException?', back: 'Thrown when accessing an index that is **negative** or **≥ array length**.\n\n`int[] arr = new int[3]; // indices 0, 1, 2`\n`arr[3]; // ERROR!`\n\nCommon in off-by-one bugs in loops.', hint: 'Index < 0 or >= length.' },
        { topicId: t3.id, front: 'For-each loop vs. standard for loop?', back: '**Standard for**: access by index, can modify elements\n`for (int i = 0; i < arr.length; i++)`\n\n**For-each**: read-only traversal, cleaner syntax\n`for (int val : arr)`\n\nUse standard when you need the index or need to modify.', hint: 'For-each = read-only; standard for = full control.' },
      ],
    });
    console.log('✅ Arrays flashcards');
  }

  const t4 = await prisma.topic.findFirst({ where: { slug: 'csa-inheritance' } });
  if (t4) {
    await prisma.flashcard.createMany({
      data: [
        { topicId: t4.id, front: 'What is inheritance in Java?', back: 'A subclass **extends** a superclass, inheriting its **public/protected methods and fields**.\n\n`class Dog extends Animal { }`\n\n• **IS-A** relationship: Dog IS-A Animal\n• Java supports **single inheritance** only\n• All classes extend **Object** implicitly', hint: 'extends keyword, IS-A relationship, single inheritance.' },
        { topicId: t4.id, front: 'What is polymorphism?', back: 'A superclass reference can hold a **subclass object**: `Animal a = new Dog();`\n\nThe **actual method called** depends on the **runtime type** (Dog), not the declared type (Animal).\n\nThis is called **dynamic dispatch** or **late binding**.', hint: 'Runtime type determines which method runs.' },
        { topicId: t4.id, front: 'super keyword?', back: '• `super()` — calls **superclass constructor** (must be first line)\n• `super.method()` — calls **superclass version** of an overridden method\n\nIf no `super()` call, Java automatically inserts `super()` (no-arg constructor).', hint: 'Call parent constructor or parent method.' },
      ],
    });
    console.log('✅ Inheritance flashcards');
  }

  console.log('\n✅ All AP Computer Science A flashcards added!');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
