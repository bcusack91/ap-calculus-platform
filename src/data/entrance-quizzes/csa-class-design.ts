/**
 * Entrance Quiz — Class Design: Static, Scope, and this (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'ccl-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What is printed?\npublic class Bus {\nprivate static int total = 0;\nprivate int riders = 0;\npublic void board(int n) { riders += n; total += n; }\npublic int getRiders() { return riders; }\npublic static int getTotal() { return total; }\n}\nBus a = new Bus();\nBus b = new Bus();\na.board(3);\nb.board(5);\na.board(2);\nSystem.out.println(a.getRiders() + " " + Bus.getTotal());',
    options: ['10 10', '5 10', '5 5', '10 5'],
    correctIndex: 1,
    explanation: 'riders is an instance variable, so a has its own count of 3 + 2 = 5. total is static, one copy shared by both buses, so it collects all three boardings, 10.',
  },
  {
    id: 'ccl-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Which method could be added to the Bus class above and compile?',
    options: ['public static int peek() { return riders; }', 'public static int peek() { return this.total; }', 'public static int peek() { return getRiders(); }', 'public static int peek() { return total; }'],
    correctIndex: 3,
    explanation: 'A static method has no current object, so it may use static variables by name but not an instance variable, an instance method or the keyword this.',
  },
  {
    id: 'ccl-ent-2a', partNumber: 2, partTitle: 'Static Variables and Methods in Depth',
    question: 'What is printed?\npublic class Badge {\nprivate static int next = 10;\nprivate int id;\npublic Badge() { id = next; next += 5; }\npublic int getId() { return id; }\n}\nBadge x = new Badge();\nBadge y = new Badge();\nBadge z = new Badge();\nSystem.out.println(x.getId() + " " + z.getId());',
    options: ['20 20', '10 15', '10 20', '15 25'],
    correctIndex: 2,
    explanation: 'Each constructor copies the shared next into its own id and then advances next by 5, so the ids are 10, 15 and 20. The static initializer runs once, not on every new.',
  },
  {
    id: 'ccl-ent-2b', partNumber: 2, partTitle: 'Static Variables and Methods in Depth',
    question: 'In the Badge class above, suppose next were declared private int next = 10; with static removed. What would z.getId() return?',
    options: ['10', '25', '20', '15'],
    correctIndex: 0,
    explanation: 'Without static, every Badge gets its own next, which starts at 10 when that object is created. Each object copies 10 into id, so all three ids are 10.',
  },
  {
    id: 'ccl-ent-3a', partNumber: 3, partTitle: 'Scope, Shadowing, and Access',
    question: 'What is printed?\npublic class Score {\nprivate int pts;\npublic Score(int p) { pts = p; }\npublic void bonus() { int pts = 10; pts += 5; }\npublic void add(int pts) { this.pts += pts; }\npublic int get() { return pts; }\n}\nScore s = new Score(4);\ns.bonus();\ns.add(3);\nSystem.out.println(s.get());',
    options: ['7', '19', '22', '3'],
    correctIndex: 0,
    explanation: 'bonus declares a local pts, so it changes only that local, which disappears when the method ends. In add, this.pts is the field and the bare pts is the parameter, so the field goes from 4 to 7.',
  },
  {
    id: 'ccl-ent-3b', partNumber: 3, partTitle: 'Scope, Shadowing, and Access',
    question: 'Which statement can be placed at line X so that the method compiles?\npublic int f(int n) {\nint total = 0;\nfor (int i = 0; i < n; i++) {\nint sq = i * i;\ntotal += sq;\n}\n// line X\n}',
    options: ['return sq + total;', 'return i + total;', 'return total;', 'private int c = total;\nreturn c;'],
    correctIndex: 2,
    explanation: 'total is declared in the method body, so it is still in scope after the loop. sq and i ended with the loop, and a local variable cannot have an access modifier such as private.',
  },
  {
    id: 'ccl-ent-4a', partNumber: 4, partTitle: 'The this Keyword',
    question: 'What is printed?\npublic class Node {\nprivate String name;\nprivate Node next;\npublic Node(String n) { name = n; }\npublic void linkTo(Node other) { next = other; other.next = this; }\npublic String nextName() { return next.name; }\n}\nNode a = new Node("A");\nNode b = new Node("B");\nNode c = new Node("C");\na.linkTo(b);\nb.linkTo(c);\nSystem.out.println(a.nextName() + b.nextName() + c.nextName());',
    options: ['BAB', 'BCB', 'BCC', 'ACB'],
    correctIndex: 1,
    explanation: 'In a.linkTo(b), this is a, so a points to b and b points back to a. In b.linkTo(c), this is b, so b now points to c and c points back to b, giving B, C and B.',
  },
  {
    id: 'ccl-ent-4b', partNumber: 4, partTitle: 'The this Keyword',
    question: 'What is printed?\npublic class Box {\nprivate int size;\npublic Box(int s) { size = s; }\npublic Box bigger(Box other) {\nif (size >= other.size) { return this; }\nreturn other;\n}\npublic void grow(int n) { size += n; }\npublic int getSize() { return size; }\n}\nBox p = new Box(4);\nBox q = new Box(7);\nBox r = p.bigger(q);\nr.grow(3);\nSystem.out.println(p.getSize() + " " + q.getSize());',
    options: ['4 10', '7 10', '4 7', '7 7'],
    correctIndex: 0,
    explanation: '4 >= 7 is false, so bigger returns other, a reference to the same object as q, not a copy. Growing r therefore grows q to 10, and p keeps 4.',
  },
  {
    id: 'ccl-ent-5a', partNumber: 5, partTitle: 'Program Design: Abstraction, Decomposition, and Impact',
    question: 'Which pair of method headers can appear together in one class?',
    options: ['int f(int a) and double f(int a)', 'int f(int a) and int f(int b)', 'void f(int a) and int f(int a)', 'int f(int a) and int f(int a, int b)'],
    correctIndex: 3,
    explanation: 'A signature is the name plus the number, types and order of the parameters, and these two differ in the number of parameters. Return types and parameter names are not part of the signature, so the other pairs clash.',
  },
  {
    id: 'ccl-ent-5b', partNumber: 5, partTitle: 'Program Design: Abstraction, Decomposition, and Impact',
    question: 'A student finds open-source code whose license says that anyone who reuses it must name the original programmer. Which use is appropriate?',
    options: ['Use it freely, since it is public', 'Use it after renaming the variables', 'Use it and credit the author as required', 'Avoid it, since reuse is illegal'],
    correctIndex: 2,
    explanation: 'Open-source code may be reused under the terms of its license, and this license asks for credit. Renaming variables does not remove the obligation, and licensed reuse is legal.',
  },
  {
    id: 'ccl-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'A class has private static int made = 0; and private int id;. Each new object should get an id one higher than the last, starting at 1, and made should count the objects. Which constructor body does this?',
    options: ['id = made;\nmade = made + 1;', 'made++;\nid = made;', 'int made = 0;\nmade++;\nid = made;', 'id = id + 1;\nmade = id;'],
    correctIndex: 1,
    explanation: 'Advancing the shared counter first and then copying it gives ids 1, 2, 3 and so on. Copying first starts at 0, and a local made or an instance-level count gives every object the id 1.',
  },
  {
    id: 'ccl-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'What is printed?\npublic class Gate {\nprivate int code;\nprivate int wrong;\npublic Gate(int code) { this.code = code; }\npublic boolean open(int a) {\nif (wrong >= 2) { return false; }\nif (a == code) { wrong = 0; return true; }\nwrong++;\nreturn false;\n}\npublic void reset() { wrong = 0; }\n}\nGate g = new Gate(7);\ng.open(1); g.open(7); g.open(2); g.open(3);\nboolean r1 = g.open(7);\ng.reset();\nboolean r2 = g.open(7);\nSystem.out.println(r1 + " " + r2);',
    options: ['false true', 'true true', 'false false', 'true false'],
    correctIndex: 0,
    explanation: 'The correct code clears the wrong count, but the next two misses raise it to 2, so the gate refuses even the right code and r1 is false. After reset the count is 0, and r2 is true.',
  },
  {
    id: 'ccl-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is printed?\npublic class Team {\nprivate static int count = 0;\nprivate String name;\nprivate int wins;\npublic Team(String name, int wins) { this.name = name; this.wins = wins; count++; }\npublic void record() { int wins = this.wins + 1; }\npublic void absorb(Team other) { wins += other.wins; other.wins = 0; count--; }\npublic String info() { return name + wins; }\npublic static int getCount() { return count; }\n}\nTeam x = new Team("X", 3);\nTeam y = new Team("Y", 4);\nx.record();\nx.absorb(y);\nSystem.out.println(x.info() + y.info() + Team.getCount());',
    options: ['X8Y01', 'X7Y41', 'X7Y02', 'X7Y01'],
    correctIndex: 3,
    explanation: 'record stores its result in a local named wins, so x still has 3. absorb adds y\'s 4 to x, sets y\'s wins to 0 and lowers the shared count from 2 to 1.',
  },
  {
    id: 'ccl-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Inside class Club, public static int getDues() { return dues; } does not compile, where dues is a private instance variable. Which change makes it compile while still returning one club\'s dues?',
    options: ['Keep static and return this.dues instead', 'Declare dues public so any method can read it', 'Rename dues so it differs from the method', 'Remove static so the method runs on one particular club'],
    correctIndex: 3,
    explanation: 'An instance method always runs on some object, so it can read that object\'s dues by name. A static method has no current object and no this, and making the field public does not supply one.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Static Variables and Methods in Depth' },
    { partNumber: 3, partTitle: 'Scope, Shadowing, and Access' },
    { partNumber: 4, partTitle: 'The this Keyword' },
    { partNumber: 5, partTitle: 'Program Design: Abstraction, Decomposition, and Impact' },
    { partNumber: 6, partTitle: 'AP-Style Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
