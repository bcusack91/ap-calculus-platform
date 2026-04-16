import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding AP Computer Science A course, categories, and topics...')

  const course = await prisma.course.upsert({
    where: { slug: 'ap-computer-science-a' },
    update: {},
    create: {
      slug: 'ap-computer-science-a',
      name: 'AP Computer Science A',
      icon: '💻',
      description: 'Learn Java programming, object-oriented design, data structures, algorithms, and recursion.',
      order: 28,
      color: 'gray',
    },
  })
  console.log(`✓ Course: ${course.name}`)

  // ─── Unit 1: Primitive Types ───
  const unit1 = await prisma.category.upsert({
    where: { slug: 'csa-primitive-types' },
    update: {},
    create: {
      slug: 'csa-primitive-types',
      name: 'Primitive Types',
      description: 'Variables, data types, expressions, and assignment statements',
      order: 1,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Primitive Types')

  await prisma.topic.upsert({
    where: { slug: 'csa-variables-types' },
    update: {},
    create: {
      slug: 'csa-variables-types',
      title: 'Variables & Data Types',
      description: 'int, double, boolean, variable declaration, assignment, arithmetic operators, and type casting',
      order: 1,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 💻 Variables & Data Types\n\nStudy Java primitive types (int, double, boolean), variable declaration and initialization, assignment statements, arithmetic operators (+, -, *, /, %), integer division and modulus, compound assignment operators (+=, -=, *=, /=, %=), increment/decrement (++, --), and type casting (narrowing and widening).`,
    },
  })

  await prisma.topic.upsert({
    where: { slug: 'csa-expressions-operators' },
    update: {},
    create: {
      slug: 'csa-expressions-operators',
      title: 'Expressions & Operators',
      description: 'Arithmetic expressions, operator precedence, integer overflow, and the Math class',
      order: 2,
      categoryId: unit1.id,
      isPremium: false,
      textContent: `# 🔢 Expressions & Operators\n\nExplore arithmetic expressions, operator precedence (PEMDAS), integer overflow, the Math class (Math.abs(), Math.pow(), Math.sqrt(), Math.random()), and common pitfalls with integer division and floating-point precision.`,
    },
  })

  // ─── Unit 2: Using Objects ───
  const unit2 = await prisma.category.upsert({
    where: { slug: 'csa-using-objects' },
    update: {},
    create: {
      slug: 'csa-using-objects',
      name: 'Using Objects',
      description: 'Strings, wrapper classes, constructors, and method calls',
      order: 2,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Using Objects')

  await prisma.topic.upsert({
    where: { slug: 'csa-strings-objects' },
    update: {},
    create: {
      slug: 'csa-strings-objects',
      title: 'Strings & Objects',
      description: 'String class methods, object creation, constructors, null references, and wrapper classes',
      order: 1,
      categoryId: unit2.id,
      isPremium: false,
      textContent: `# 📝 Strings & Objects\n\nStudy creating objects with constructors, calling methods (dot notation), String methods (length(), substring(), indexOf(), equals(), compareTo(), charAt()), concatenation, escape sequences, wrapper classes (Integer, Double), autoboxing/unboxing, and null references.`,
    },
  })

  // ─── Unit 3: Boolean Expressions & if Statements ───
  const unit3 = await prisma.category.upsert({
    where: { slug: 'csa-boolean-if' },
    update: {},
    create: {
      slug: 'csa-boolean-if',
      name: 'Boolean Expressions & if Statements',
      description: 'Conditional logic, comparison operators, and control flow',
      order: 3,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Boolean Expressions & if Statements')

  await prisma.topic.upsert({
    where: { slug: 'csa-conditionals' },
    update: {},
    create: {
      slug: 'csa-conditionals',
      title: 'Conditionals & Boolean Logic',
      description: 'if, if-else, else-if, comparison operators, logical operators (&&, ||, !), and De Morgan\'s Laws',
      order: 1,
      categoryId: unit3.id,
      isPremium: false,
      textContent: `# 🔀 Conditionals & Boolean Logic\n\nMaster boolean expressions, comparison operators (==, !=, <, >, <=, >=), logical operators (&& AND, || OR, ! NOT), if/else/else-if statements, nested conditionals, short-circuit evaluation, De Morgan's Laws, and comparing objects (== vs .equals()).`,
    },
  })

  // ─── Unit 4: Iteration ───
  const unit4 = await prisma.category.upsert({
    where: { slug: 'csa-iteration' },
    update: {},
    create: {
      slug: 'csa-iteration',
      name: 'Iteration',
      description: 'while loops, for loops, nested loops, and loop algorithms',
      order: 4,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Iteration')

  await prisma.topic.upsert({
    where: { slug: 'csa-loops' },
    update: {},
    create: {
      slug: 'csa-loops',
      title: 'Loops & Iteration',
      description: 'while loops, for loops, do-while, nested loops, loop algorithms, and String traversal',
      order: 1,
      categoryId: unit4.id,
      isPremium: false,
      textContent: `# 🔄 Loops & Iteration\n\nStudy while loops, for loops, do-while loops (not on exam but useful), nested loops, loop control (break, continue), common algorithms (sum, count, min/max, average, reverse), String traversal with loops, and infinite loop prevention.`,
    },
  })

  // ─── Unit 5: Writing Classes ───
  const unit5 = await prisma.category.upsert({
    where: { slug: 'csa-writing-classes' },
    update: {},
    create: {
      slug: 'csa-writing-classes',
      name: 'Writing Classes',
      description: 'Class design, instance variables, methods, constructors, and encapsulation',
      order: 5,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Writing Classes')

  await prisma.topic.upsert({
    where: { slug: 'csa-class-design' },
    update: {},
    create: {
      slug: 'csa-class-design',
      title: 'Class Design & Encapsulation',
      description: 'Instance variables, constructors, accessor/mutator methods, this keyword, static members, and scope',
      order: 1,
      categoryId: unit5.id,
      isPremium: false,
      textContent: `# 🏗️ Class Design & Encapsulation\n\nMaster writing Java classes: instance variables (private), constructors (default, parameterized), accessor methods (getters), mutator methods (setters), the "this" keyword, method overloading, static variables and methods, access modifiers (public, private), variable scope, and encapsulation principles.`,
    },
  })

  // ─── Unit 6: Array ───
  const unit6 = await prisma.category.upsert({
    where: { slug: 'csa-array' },
    update: {},
    create: {
      slug: 'csa-array',
      name: 'Array',
      description: 'Array creation, traversal, and common algorithms',
      order: 6,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Array')

  await prisma.topic.upsert({
    where: { slug: 'csa-arrays' },
    update: {},
    create: {
      slug: 'csa-arrays',
      title: 'Arrays',
      description: 'Array declaration, initialization, traversal, for-each loops, and array algorithms',
      order: 1,
      categoryId: unit6.id,
      isPremium: false,
      textContent: `# 📊 Arrays\n\nStudy array declaration and initialization, accessing elements by index, array length, traversing with for loops and enhanced for-each loops, ArrayIndexOutOfBoundsException, common algorithms (search, sort, insert, delete, reverse, shift), and arrays of objects.`,
    },
  })

  // ─── Unit 7: ArrayList ───
  const unit7 = await prisma.category.upsert({
    where: { slug: 'csa-arraylist' },
    update: {},
    create: {
      slug: 'csa-arraylist',
      name: 'ArrayList',
      description: 'ArrayList methods, traversal, and wrapper classes',
      order: 7,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: ArrayList')

  await prisma.topic.upsert({
    where: { slug: 'csa-arraylist-usage' },
    update: {},
    create: {
      slug: 'csa-arraylist-usage',
      title: 'ArrayList',
      description: 'ArrayList methods (add, get, set, remove, size), traversal, ConcurrentModificationException, and ArrayList vs Array',
      order: 1,
      categoryId: unit7.id,
      isPremium: false,
      textContent: `# 📋 ArrayList\n\nExplore the ArrayList class: import statement, generics (ArrayList<Type>), methods (add, get, set, remove, size, isEmpty), traversal with for loops and for-each loops, removing elements during traversal (backwards traversal or Iterator), autoboxing with wrapper classes, and ArrayList vs array comparisons.`,
    },
  })

  // ─── Unit 8: 2D Array ───
  const unit8 = await prisma.category.upsert({
    where: { slug: 'csa-2d-array' },
    update: {},
    create: {
      slug: 'csa-2d-array',
      name: '2D Array',
      description: 'Two-dimensional arrays, nested loops, and row/column traversal',
      order: 8,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: 2D Array')

  await prisma.topic.upsert({
    where: { slug: 'csa-2d-arrays' },
    update: {},
    create: {
      slug: 'csa-2d-arrays',
      title: '2D Arrays',
      description: 'Declaration, initialization, nested loop traversal, row-major vs column-major order, and 2D array algorithms',
      order: 1,
      categoryId: unit8.id,
      isPremium: false,
      textContent: `# 🔲 2D Arrays\n\nStudy 2D array declaration and initialization, accessing elements with [row][col], nested loop traversal (row-major and column-major), jagged arrays, 2D array algorithms (search, sum rows/columns, find max/min), and representing grids, matrices, and game boards.`,
    },
  })

  // ─── Unit 9: Inheritance ───
  const unit9 = await prisma.category.upsert({
    where: { slug: 'csa-inheritance' },
    update: {},
    create: {
      slug: 'csa-inheritance',
      name: 'Inheritance',
      description: 'Superclass/subclass, polymorphism, abstract classes, and the Object class',
      order: 9,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Inheritance')

  await prisma.topic.upsert({
    where: { slug: 'csa-inheritance-polymorphism' },
    update: {},
    create: {
      slug: 'csa-inheritance-polymorphism',
      title: 'Inheritance & Polymorphism',
      description: 'extends keyword, super keyword, method overriding, polymorphism, abstract classes, and the Object class',
      order: 1,
      categoryId: unit9.id,
      isPremium: false,
      textContent: `# 🧬 Inheritance & Polymorphism\n\nMaster inheritance (extends keyword), superclass and subclass relationships, the super keyword (constructors and methods), method overriding (@Override), polymorphism (compile-time type vs runtime type), abstract classes and methods, the Object class (toString(), equals()), and IS-A vs HAS-A relationships.`,
    },
  })

  // ─── Unit 10: Recursion ───
  const unit10 = await prisma.category.upsert({
    where: { slug: 'csa-recursion' },
    update: {},
    create: {
      slug: 'csa-recursion',
      name: 'Recursion',
      description: 'Recursive methods, base cases, and recursive algorithms',
      order: 10,
      courseId: course.id,
    },
  })
  console.log('  ✓ Category: Recursion')

  await prisma.topic.upsert({
    where: { slug: 'csa-recursive-methods' },
    update: {},
    create: {
      slug: 'csa-recursive-methods',
      title: 'Recursion',
      description: 'Recursive methods, base cases, recursive vs iterative solutions, binary search, merge sort, and call stack',
      order: 1,
      categoryId: unit10.id,
      isPremium: false,
      textContent: `# 🔁 Recursion\n\nStudy recursive thinking, recursive method structure (base case + recursive case), tracing recursive calls on the call stack, recursive vs iterative solutions, common recursive algorithms (factorial, Fibonacci, power, String reversal), binary search (recursive), merge sort, and stack overflow prevention.`,
    },
  })

  console.log('\n🎉 AP Computer Science A seeding complete!')
  console.log('  📚 10 categories, 12 topics created')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
