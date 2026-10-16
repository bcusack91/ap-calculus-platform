/**
 * Entrance Quiz — Using Objects (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cuo-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A Counter class has a no-argument constructor that starts its count at 0, a void method increment() that adds 1, and a method getCount(). What is printed?\nCounter c1 = new Counter();\nCounter c2 = c1;\nCounter c3 = new Counter();\nc2.increment();\nc3.increment();\nc1.increment();\nSystem.out.println(c1.getCount() + " " + c3.getCount());',
    options: ['1 1', '2 2', '2 1', '3 1'],
    correctIndex: 2,
    explanation: 'c1 and c2 are aliases for one object, so both calls through them raise the same count to 2. c3 refers to a separate object created by its own new, which was incremented once.',
  },
  {
    id: 'cuo-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'The Counter class has an instance method getCount(), and Math.sqrt is a static method. Which statement does not compile?',
    options: ['double root = Math.sqrt(9.0);', 'int k = Counter.getCount();', 'Counter tally = new Counter();', 'int k = new Counter().getCount();'],
    correctIndex: 1,
    explanation: 'An instance method must be called on an object, and Counter.getCount() names only the class, so Java cannot tell whose count is meant. Calling it on the object that new Counter() returns is legal, and static methods such as Math.sqrt are called on the class.',
  },
  {
    id: 'cuo-ent-2a', partNumber: 2, partTitle: 'Classes, APIs, and Documentation',
    question: 'In a Tank class, this method is described as follows:\nRemoves amount liters from the tank.\nPrecondition: 0 <= amount <= getLevel()\npublic void drain(double amount)\nA tank t holds 30.0 liters, and a program calls t.drain(45.0);. What can be concluded?',
    options: ['The call does not compile, because 45.0 breaks the stated rule', 'The call compiles, and the level is set to 0.0 by the method', 'The call compiles, and the documentation promises no particular result', 'The call compiles, and the method must throw an exception'],
    correctIndex: 2,
    explanation: 'The compiler checks only that a double is passed, so the call compiles. Meeting a precondition is the caller\'s job; when it is violated, the documentation makes no promise about what happens.',
  },
  {
    id: 'cuo-ent-2b', partNumber: 2, partTitle: 'Classes, APIs, and Documentation',
    question: 'A Lamp class has a constructor Lamp(int watts), a void method setWatts(int w) and a method getWatts(). What does b.getWatts() return after these statements?\nLamp a = new Lamp(40);\nLamp b = new Lamp(40);\na.setWatts(60);',
    options: ['60', '40', '100', '0'],
    correctIndex: 1,
    explanation: 'Each new creates a separate object with its own copy of the attributes. Changing the watts of the object a refers to has no effect on the object b refers to, which still stores 40.',
  },
  {
    id: 'cuo-ent-3a', partNumber: 3, partTitle: 'Method Signatures, Parameters, and Return Values',
    question: 'A class Pay has exactly these three methods:\npublic static double total(double hours)\npublic static int total(int hours, int rate)\npublic static double total(double hours, int rate)\nWhich call does not compile?',
    options: ['Pay.total(5)', 'Pay.total(5, 10)', 'Pay.total(2.5, 8)', 'Pay.total(5, 10.0)'],
    correctIndex: 3,
    explanation: 'No version takes an int followed by a double, and a double argument cannot go to an int parameter. Pay.total(5) compiles because the int 5 widens to the double parameter of the one-parameter version.',
  },
  {
    id: 'cuo-ent-3b', partNumber: 3, partTitle: 'Method Signatures, Parameters, and Return Values',
    question: 'A class Util has these methods:\npublic static void addTen(int n) { n = n + 10; }\npublic static int plusTen(int n) { return n + 10; }\nWhat is printed?\nint v = 5;\nUtil.addTen(v);\nint w = Util.plusTen(v);\nSystem.out.println(v + " " + w);',
    options: ['5 15', '15 25', '15 15', '5 5'],
    correctIndex: 0,
    explanation: 'Parameters get a copy of the argument, so addTen changes only its own n and v stays 5. plusTen returns 15, and that value is stored in w.',
  },
  {
    id: 'cuo-ent-4a', partNumber: 4, partTitle: 'The Math Class and Random Ranges',
    question: 'Which expression produces a random int from 5 to 12, inclusive, with every value possible?',
    options: ['(int) (Math.random() * 7) + 5', '(int) Math.random() * 8 + 5', '(int) (Math.random() * 8) + 5', '(int) (Math.random() * 12) + 5'],
    correctIndex: 2,
    explanation: 'There are 12 - 5 + 1 = 8 possible values, so the multiplier is 8 and the offset is the smallest value, 5. Casting Math.random() alone gives 0 every time, and a multiplier of 7 never reaches 12.',
  },
  {
    id: 'cuo-ent-4b', partNumber: 4, partTitle: 'The Math Class and Random Ranges',
    question: 'What is printed?\nSystem.out.println(Math.abs(2 - 9) + Math.sqrt(16));',
    options: ['11', '74.0', '-3.0', '11.0'],
    correctIndex: 3,
    explanation: 'Math.abs(-7) returns the int 7, and Math.sqrt always returns a double, here 4.0. The sum of an int and a double is the double 11.0.',
  },
  {
    id: 'cuo-ent-5a', partNumber: 5, partTitle: 'Constructors, Reference Diagrams, and null',
    question: 'A Ticket class has exactly these constructors:\npublic Ticket()\npublic Ticket(String event)\npublic Ticket(String event, double price)\nWhich expression creates a Ticket without a compile-time error?',
    options: ['new Ticket(25, "Gala")', 'new Ticket("Gala", 125)', 'Ticket("Gala")', 'new Ticket(25.0)'],
    correctIndex: 1,
    explanation: 'The int 125 widens to the double price, so the String-then-number call matches the two-parameter constructor. The others have the arguments in the wrong order, leave out new, or match no parameter list.',
  },
  {
    id: 'cuo-ent-5b', partNumber: 5, partTitle: 'Constructors, Reference Diagrams, and null',
    question: 'Using the Counter class (count starts at 0; increment() adds 1), a class Helper has these methods:\npublic static void bump(Counter c) { c.increment(); }\npublic static void reset(Counter c) { c = new Counter(); }\nWhat is printed?\nCounter k = new Counter();\nk.increment();\nHelper.reset(k);\nHelper.bump(k);\nSystem.out.println(k.getCount());',
    options: ['1', '0', '2', '3'],
    correctIndex: 2,
    explanation: 'reset re-points only its own copy of the reference, so k still refers to the original object, whose count is 1. bump mutates that same object through its copy of the reference, raising the count to 2.',
  },
  {
    id: 'cuo-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice with a Provided Class',
    question: 'A Meter class has a constructor Meter(int start), a method add(int n) that raises the reading by n, a method add() that raises it by 1, a method getReading(), and a method gap(Meter other) that returns the nonnegative difference between two readings. What is printed?\nMeter a = new Meter(3);\nMeter b = new Meter(10);\na.add(4);\nb.add();\na.add(-2);\nSystem.out.println(a.gap(b));',
    options: ['6', '4', '8', '16'],
    correctIndex: 0,
    explanation: 'a goes from 3 to 7 to 5, and b goes from 10 to 11 with the no-argument add. The gap between 5 and 11 is 6.',
  },
  {
    id: 'cuo-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice with a Provided Class',
    question: 'Using the Meter class (void add(int n), void add(), int getReading(), int gap(Meter other)), which statement moves meter a forward by twice the gap between meters a and b?',
    options: ['a.add(2 * gap(a, b));', 'a.add(2 * a.gap(b));', 'a.add(2 * a.getGap(b));', 'a.add(2 * a.gap(b, a));'],
    correctIndex: 1,
    explanation: 'gap is an instance method with one Meter parameter, so it is called on a with b as the argument, and its int result can be doubled and passed to add. The class has no getGap method, and gap(a, b) and a.gap(b, a) match no header.',
  },
  {
    id: 'cuo-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Using the Meter class, what is printed?\nMeter p = new Meter(16);\nint r = (int) Math.sqrt(p.getReading());\np.add(r);\nMeter q = p;\nq.add();\nSystem.out.println(p.getReading() + " " + r);',
    options: ['20 4', '21 4.0', '20 4.0', '21 4'],
    correctIndex: 3,
    explanation: 'Math.sqrt(16) is 4.0, and the cast stores the int 4 in r, so p reaches 20. q is an alias for the same Meter, so q.add() raises the reading p sees to 21.',
  },
  {
    id: 'cuo-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'After Meter m = null;, which statement compiles but throws a NullPointerException when it runs?',
    options: ['m.add(5);', 'boolean e = (m == null);', 'Meter n = m;', 'm = new Meter(5);'],
    correctIndex: 0,
    explanation: 'The compiler accepts m.add(5) because Meter has that method, but at run time there is no object to call it on. Comparing m with null, copying the null reference and assigning a new object call no method.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Classes, APIs, and Documentation' },
    { partNumber: 3, partTitle: 'Method Signatures, Parameters, and Return Values' },
    { partNumber: 4, partTitle: 'The Math Class and Random Ranges' },
    { partNumber: 5, partTitle: 'Constructors, Reference Diagrams, and null' },
    { partNumber: 6, partTitle: 'AP-Style Practice with a Provided Class' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
