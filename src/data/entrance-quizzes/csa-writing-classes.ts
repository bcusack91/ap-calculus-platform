/**
 * Entrance Quiz — Writing Classes (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cwc-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'The Book class declares exactly one constructor, public Book(String title, int pages). Which statement in a client class compiles?',
    options: ['Book b = new Book();', 'Book b = new Book(474);', 'Book b = new Book("Emma", 474);', 'Book b = Book("Emma", 474);'],
    correctIndex: 2,
    explanation: 'Once a class declares any constructor, Java no longer supplies a no-argument one, so the call must match the String-then-int parameter list. A constructor call also needs new.',
  },
  {
    id: 'cwc-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'In the Book class, pages is a private instance variable. A client class with a Book object b writes b.pages = 500;. What happens?',
    options: ['It sets pages to 500', 'It does not compile', 'It throws an exception at run time', 'It runs but leaves pages unchanged'],
    correctIndex: 1,
    explanation: 'Private members can be named only by code inside their own class, and the compiler enforces that. A client must call a public mutator method to change the value.',
  },
  {
    id: 'cwc-ent-2a', partNumber: 2, partTitle: 'From Specification to Class: Attributes, Behaviors, and Encapsulation',
    question: 'Specification: a Timer starts at 0 seconds, addSeconds(int s) adds s seconds, and isOverMinute() returns true when the total is more than 60. Which instance variable declarations are the best design?',
    options: ['private int seconds;\nprivate boolean overMinute;', 'public int seconds = 0;', 'private int seconds;', 'private int seconds;\nprivate int s;'],
    correctIndex: 2,
    explanation: 'isOverMinute() can always be computed as seconds > 60, so a stored flag would only risk falling out of step. The parameter s does not need a field, and fields should be private.',
  },
  {
    id: 'cwc-ent-2b', partNumber: 2, partTitle: 'From Specification to Class: Attributes, Behaviors, and Encapsulation',
    question: 'Using this class, what does s.getStreak() return after the calls below?\npublic class StepGoal {\nprivate int goal;\nprivate int today;\nprivate int streak;\npublic StepGoal(int g) { goal = g; }\npublic void walk(int n) { if (n > 0) { today += n; } }\npublic void endDay() {\nif (today >= goal) { streak++; } else { streak = 0; }\ntoday = 0;\n}\npublic int getStreak() { return streak; }\n}\nStepGoal s = new StepGoal(5000);\ns.walk(3000); s.walk(2500); s.endDay();\ns.walk(6000); s.endDay();\ns.walk(-200); s.walk(4000); s.endDay();\ns.walk(5000); s.endDay();',
    options: ['3', '2', '0', '1'],
    correctIndex: 3,
    explanation: 'Days 1 and 2 meet the goal (5500 and 6000), raising the streak to 2. Day 3 reaches only 4000 because -200 is ignored, which resets the streak to 0, and day 4 meets the goal exactly, making it 1.',
  },
  {
    id: 'cwc-ent-3a', partNumber: 3, partTitle: 'Constructors in Depth: Initializing Every Field',
    question: 'What is printed?\npublic class Gadget {\nprivate String name;\nprivate int uses;\nprivate boolean on;\nprivate double rate;\npublic Gadget(String n) { name = n; uses = 1; }\npublic String info() { return name + uses + on + rate; }\n}\nSystem.out.println(new Gadget("x").info());',
    options: ['x1false0.0', 'x1null0.0', 'x1false0', 'x1true0.0'],
    correctIndex: 0,
    explanation: 'Fields the constructor never assigns keep their default values: false for a boolean and 0.0 for a double. Concatenation turns them into the text false and 0.0.',
  },
  {
    id: 'cwc-ent-3b', partNumber: 3, partTitle: 'Constructors in Depth: Initializing Every Field',
    question: 'A Pen class has a private Point field home, a constructor public Pen(Point start) { home = start; }, and a method getHomeX() that returns home.getX(). What does q.getHomeX() return, and why?\nPoint p = new Point(1, 2);\nPen q = new Pen(p);\np.moveBy(3, 3);',
    options: ['4, because home and p refer to one Point', '4, because moveBy changes every Point object', '1, because the constructor stored a copy of p', '1, because p and home are separate variables'],
    correctIndex: 0,
    explanation: 'The constructor copies the reference, not the object, so home and p are aliases. Moving the Point through p is visible through home; storing new Point(start.getX(), start.getY()) would prevent that.',
  },
  {
    id: 'cwc-ent-4a', partNumber: 4, partTitle: 'Writing Methods: Return Values, Parameters, and State Changes',
    question: 'Which method compiles?',
    options: ['public int sign(int x) { if (x > 0) { return 1; } }', 'public int sign(int x) { return 1.0; }', 'public void sign(int x) { return x; }', 'public int sign(int x) { if (x > 0) { return 1; } return 0; }'],
    correctIndex: 3,
    explanation: 'A non-void method must return a value of its type on every path, and the final return 0 covers the path where the if is false. A double cannot be returned from an int method, and a void method cannot return a value.',
  },
  {
    id: 'cwc-ent-4b', partNumber: 4, partTitle: 'Writing Methods: Return Values, Parameters, and State Changes',
    question: 'What is printed?\npublic class Jar {\nprivate int coins;\nprivate int fails;\npublic Jar(int c) { coins = c; }\npublic boolean take(int n) {\nif (n > 0 && n <= coins) { coins -= n; return true; }\nfails++;\nreturn false;\n}\npublic void add(int n) { if (n > 0) { coins += n; } }\npublic String report() { return coins + "/" + fails; }\n}\nJar j = new Jar(30);\nj.take(12); j.take(25); j.add(-4); j.add(10); j.take(28);\nSystem.out.println(j.report());',
    options: ['0/2', '18/1', '4/1', '0/1'],
    correctIndex: 3,
    explanation: 'The coins go 30, 18, then stay 18 when take(25) fails and fails becomes 1. add(-4) is ignored, add(10) makes 28, and take(28) succeeds, leaving 0; the early return true skips fails++.',
  },
  {
    id: 'cwc-ent-5a', partNumber: 5, partTitle: 'Passing and Returning Object References',
    question: 'Point has getX(), getY() and moveBy(int dx, int dy). What is printed?\npublic static void tweak(Point a, Point b) {\nb.moveBy(a.getX(), 0);\na = b;\na.moveBy(0, 5);\n}\nPoint s = new Point(2, 1);\nPoint t = new Point(4, 4);\ntweak(s, t);\nSystem.out.println(s.getX() + " " + s.getY() + " " + t.getX() + " " + t.getY());',
    options: ['6 9 6 9', '2 1 6 9', '2 1 6 4', '2 6 6 4'],
    correctIndex: 1,
    explanation: 'b.moveBy(2, 0) moves t to (6, 4). Reassigning a only redirects the method\'s copy of the reference, so the second moveBy also moves t, to (6, 9), and s stays (2, 1).',
  },
  {
    id: 'cwc-ent-5b', partNumber: 5, partTitle: 'Passing and Returning Object References',
    question: 'Account has a private int balance. Inside Account, a method reads public boolean richer(Account other) { return balance > other.balance; }. In a separate client class, code reads if (a.balance > b.balance) for two Account objects. Which of these compiles?',
    options: ['Both of them compile', 'Neither of them compiles', 'richer compiles, but the client code does not', 'The client code compiles, but richer does not'],
    correctIndex: 2,
    explanation: 'Access is checked by class: code inside Account may use the private field of any Account object, including a parameter. The same expression in another class does not compile.',
  },
  {
    id: 'cwc-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'A student writes this redeem method for a card with a private int points field:\npublic boolean redeem(int pts) {\npoints -= pts;\nif (points >= 0) { return true; }\nreturn false;\n}\nA card with 15 points calls redeem(20). What is points afterward, and what does redeem return?',
    options: ['15 and false', '-5 and true', '-5 and false', '15 and true'],
    correctIndex: 2,
    explanation: 'The method subtracts before testing, so points becomes -5 and the test fails, returning false. A failed redeem should leave the points unchanged, which requires testing pts <= points first.',
  },
  {
    id: 'cwc-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'What is the value of r?\npublic class Ticker {\nprivate int value;\nprivate int step;\npublic Ticker(int s) { step = s; }\npublic int next() {\nvalue += step;\nif (value > 10) { value = value - 10; }\nreturn value;\n}\n}\nTicker t = new Ticker(4);\nt.next(); t.next(); t.next();\nint r = t.next();',
    options: ['6', '16', '2', '12'],
    correctIndex: 0,
    explanation: 'value starts at the default 0 and goes 4, 8, then 12, which wraps to 2, and the fourth call gives 6. The returned values of the first three calls are discarded, but the field keeps changing.',
  },
  {
    id: 'cwc-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is printed?\npublic class Cup {\nprivate int amt;\nprivate int cap;\npublic Cup(int c) { cap = c; }\npublic int fill(int n) {\nint room = cap - amt;\nif (n <= room) { amt += n; return 0; }\namt = cap;\nreturn n - room;\n}\npublic void pourInto(Cup other) { amt = other.fill(amt); }\npublic int getAmt() { return amt; }\n}\nCup a = new Cup(8);\nCup b = new Cup(5);\nint over = a.fill(11);\nb.fill(2);\na.pourInto(b);\nSystem.out.println(over + " " + a.getAmt() + " " + b.getAmt());',
    options: ['3 0 5', '3 5 5', '3 8 2', '0 5 5'],
    correctIndex: 1,
    explanation: 'a.fill(11) fills a to 8 and returns 3. When a pours its 8 into b, which holds 2 of 5, b fills to 5 and returns 5, and a keeps those 5.',
  },
  {
    id: 'cwc-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A Card class has private fields owner and points and this constructor:\npublic Card(String owner, int points) {\nowner = owner;\npoints = points;\n}\nAfter Card c = new Card("Al", 5);, what does c.getPoints() return, and why?',
    options: ['5, because the parameters match the field names', '0, because the assignments only change the parameters', '0, because int fields cannot be set in a constructor', '5, because Java copies same-named values automatically'],
    correctIndex: 1,
    explanation: 'Inside the constructor, the parameter names shadow the fields, so each statement assigns a parameter to itself. The field keeps its default 0; writing this.points = points fixes it.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'From Specification to Class: Attributes, Behaviors, and Encapsulation' },
    { partNumber: 3, partTitle: 'Constructors in Depth: Initializing Every Field' },
    { partNumber: 4, partTitle: 'Writing Methods: Return Values, Parameters, and State Changes' },
    { partNumber: 5, partTitle: 'Passing and Returning Object References' },
    { partNumber: 6, partTitle: 'AP-Style Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
