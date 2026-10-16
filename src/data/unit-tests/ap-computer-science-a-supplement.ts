import type { UnitPoolQuestion } from '@/lib/unit-tests/engine'

export const AP_CSA_UNIT_SUPPLEMENT: UnitPoolQuestion[] = [
  // ── Unit 3: Class Creation (class-creation) ──
  // 3.1 Abstraction and program design
  {
    domain: 'class-creation',
    topicSlug: 'csa-class-design',
    question: 'A programmer is designing a class to represent a library book that can be checked out and returned. Which set of instance variables best captures the data every book object needs to track?',
    options: [
      'A String for the title, a String for the author, and an int for the number of books in the library',
      'A String for the title, a String for the author, and a boolean for whether it is checked out',
      'A String for the title, a String for the name of the librarian, and a boolean for whether the library is open',
      'A String for the title, an ArrayList of every book in the library, and a boolean for whether it is checked out',
    ],
    correctAnswer: 1,
    explanation: 'Each book object should hold only the attributes that describe that one book and its state, such as title, author, and whether it is currently checked out. The total number of books, the librarian on duty, and whether the library is open describe the library rather than a single book, and a list of every book belongs in a library class, not inside each book.',
  },
  // 3.2 Impact of program design
  {
    domain: 'class-creation',
    topicSlug: 'csa-class-design',
    question: 'A student finds a well-written sorting class posted online under a license that allows reuse with attribution and uses it in a school project. Which action is appropriate?',
    options: [
      'Use the code without credit, since a license that allows reuse waives attribution',
      'Thank the website that hosted the code instead of its author',
      'Avoid using the code, because posting code online places it in the public domain',
      'Name the original author, as the terms require',
    ],
    correctAnswer: 3,
    explanation: 'Code posted under a license is intellectual property, and a license that allows reuse with attribution lets others use the code as long as they credit the author. Permission to reuse does not waive the attribution the license asks for, the credit belongs to the author rather than the hosting site, and posting code online does not place it in the public domain.',
  },
  // 3.3 Anatomy of a class
  {
    domain: 'class-creation',
    topicSlug: 'csa-writing-classes',
    question: 'A class Reading stores a temperature that other classes should be able to read but not change directly. Which design follows the principle of encapsulation?',
    options: [
      'A private double temp with a public method getTemp that returns its value',
      'A public double temp with a public method getTemp that returns it',
      'A private double temp with a private method getTemp that returns it',
      'A public double temp with no method, since any class can read it',
    ],
    correctAnswer: 0,
    explanation: 'Encapsulation keeps the data private and exposes it only through public methods, so a private temp with a public accessor lets other classes read the value without being able to modify it. Making temp public allows any class to change it directly, and a private accessor could not be called from outside the class, so the temperature could not be read at all.',
  },
  // 3.4 Constructors
  {
    domain: 'class-creation',
    topicSlug: 'csa-writing-classes',
    question: 'What is printed by the following code?\npublic class Sensor {\n    private int reading;\n    private String label;\n    public Sensor() {\n        label = "none";\n    }\n    public String info() {\n        return label + " " + reading;\n    }\n}\n// in another class\nSensor s = new Sensor();\nSystem.out.println(s.info());',
    options: [
      'none null',
      'null 0',
      'none 0',
      'It does not compile',
    ],
    correctAnswer: 2,
    explanation: 'The constructor sets label to "none" but never assigns reading, and an int instance variable that is not initialized by the constructor holds the default value 0. The value null is the default for object references such as String, not for int, and leaving an instance variable unassigned in a constructor is legal, so the code compiles.',
  },
  {
    domain: 'class-creation',
    topicSlug: 'csa-writing-classes',
    question: 'The class Bike has two constructors.\npublic Bike(int gears) {\n    numGears = gears;\n    color = "black";\n}\npublic Bike(String c, int gears) {\n    color = c;\n    numGears = gears;\n}\nWhich statement creates a Bike object without a compile error?',
    options: [
      'Bike b = new Bike(21, "red");',
      'Bike b = new Bike("red");',
      'Bike b = new Bike(21, 7);',
      'Bike b = new Bike("red", 21);',
    ],
    correctAnswer: 3,
    explanation: 'A call to new must match one constructor’s parameter list in number, order, and type, and a String followed by an int matches the second constructor. An int followed by a String has the right count but the wrong order, a single String matches neither constructor since the one-parameter version takes an int, and two ints match nothing.',
  },
  // 3.5 Methods: how to write them
  {
    domain: 'class-creation',
    topicSlug: 'csa-writing-classes',
    question: 'What is printed by the following code?\npublic class Tank {\n    private double level;\n    public Tank(double start) { level = start; }\n    public double drain(double amt) {\n        level -= amt;\n        return level;\n    }\n    public double getLevel() { return level; }\n}\n// in another class\nTank t = new Tank(10.0);\ndouble x = t.drain(3.5);\nt.drain(2.0);\nSystem.out.println(x + " " + t.getLevel());',
    options: [
      '6.5 6.5',
      '6.5 4.5',
      '4.5 4.5',
      '10.0 4.5',
    ],
    correctAnswer: 1,
    explanation: 'The first call lowers level to 6.5 and returns that value, which is stored in x. The second call lowers level to 4.5, but x is a copy of the earlier return value and is not affected. Printing 6.5 twice ignores the second drain, 4.5 twice assumes x tracks the object, and 10.0 ignores the first drain entirely.',
  },
  {
    domain: 'class-creation',
    topicSlug: 'csa-writing-classes',
    question: 'The method below is intended to return true when a Locker object’s contents list is empty and false otherwise, where items is a private ArrayList<String>. Which method body compiles and behaves correctly?\npublic boolean isEmpty() {\n    /* body */\n}',
    options: [
      'if (items.size() == 0) { return true; }',
      'return items.size();',
      'return items.size() == 0;',
      'return items.size() = 0;',
    ],
    correctAnswer: 2,
    explanation: 'A non-void method must return a value of its declared type on every path, and the comparison items.size() == 0 is already a boolean, so returning it is correct. An if statement with no else leaves a path that returns nothing, returning the size itself returns an int where a boolean is required, and a single equals sign is an assignment that does not compile here.',
  },
  {
    domain: 'class-creation',
    topicSlug: 'csa-writing-classes',
    question: 'A method in a class is documented as follows.\n/** Returns the name at position index.\n *  Precondition: 0 <= index < names.size()\n */\npublic String nameAt(int index)\nWhat does the precondition mean?',
    options: [
      'The caller must make sure the argument is in range before calling',
      'The method checks index and throws an exception if out of range',
      'The method returns null whenever index is out of range',
      'The compiler verifies that index is in range at compile time',
    ],
    correctAnswer: 0,
    explanation: 'A precondition is a condition that must be true when the method is called, and it is the caller’s job to satisfy it; the method itself is not required to check it. A precondition does not promise that the method throws or returns null for bad input, and the compiler cannot verify run-time values such as the argument passed for index.',
  },
  // 3.6 Methods: passing and returning references
  {
    domain: 'class-creation',
    topicSlug: 'csa-class-design',
    question: 'What is printed by the following code?\npublic class Pen {\n    private int ink;\n    public Pen(int i) { ink = i; }\n    public void use() { ink--; }\n    public int getInk() { return ink; }\n}\n// in another class\npublic static void write(Pen p) {\n    p.use();\n    p = new Pen(100);\n    p.use();\n}\n// in main\nPen mine = new Pen(10);\nwrite(mine);\nSystem.out.println(mine.getInk());',
    options: [
      '99',
      '8',
      '10',
      '9',
    ],
    correctAnswer: 3,
    explanation: 'The parameter p starts as a copy of the reference to the same Pen as mine, so p.use() lowers that object’s ink to 9. Reassigning p to a new Pen changes only the local copy of the reference, so the second use() affects the new object and mine still refers to the original. The value 99 belongs to the new Pen, 8 would require both calls to hit the original, and 10 assumes the method could not change the object at all.',
  },
  {
    domain: 'class-creation',
    topicSlug: 'csa-class-design',
    question: 'What is printed by the following code?\npublic class Bag {\n    private int count;\n    public Bag(int c) { count = c; }\n    public void add() { count++; }\n    public int getCount() { return count; }\n    public Bag copy() {\n        return new Bag(count);\n    }\n}\n// in another class\nBag a = new Bag(2);\nBag b = a.copy();\nBag c = a;\nb.add();\nc.add();\nc.add();\nSystem.out.println(a.getCount() + " " + b.getCount());',
    options: [
      '4 3',
      '5 5',
      '2 3',
      '4 4',
    ],
    correctAnswer: 0,
    explanation: 'The copy method returns a brand-new Bag, so b is a separate object that starts at 2 and becomes 3 after one add. The assignment c = a makes c another reference to the same object as a, so the two calls through c raise that shared count to 4. A result of 5 5 treats all three as one object, 2 3 ignores the adds made through c, and 4 4 treats b as an alias of a.',
  },
  // 3.7 Class variables and methods
  {
    domain: 'class-creation',
    topicSlug: 'csa-class-design',
    question: 'What is printed by the following code?\npublic class Badge {\n    private static int nextId = 100;\n    private int id;\n    public Badge() {\n        id = nextId;\n        nextId += 10;\n    }\n    public int getId() { return id; }\n}\n// in another class\nBadge p = new Badge();\nBadge q = new Badge();\nBadge r = new Badge();\nSystem.out.println(q.getId() + " " + r.getId());',
    options: [
      '100 110',
      '110 120',
      '120 130',
      '100 100',
    ],
    correctAnswer: 1,
    explanation: 'The static variable nextId is shared by every Badge, so each constructor call reads the current value and then advances it: p gets 100, q gets 110, and r gets 120. Printing 100 110 reads the ids of p and q instead of q and r, 120 130 advances nextId before assigning it, and 100 100 treats nextId as if each object had its own copy.',
  },
  {
    domain: 'class-creation',
    topicSlug: 'csa-class-design',
    question: 'Consider the class below. Which statement about the method total is accurate?\npublic class Meter {\n    private int units;\n    private static int grandTotal = 0;\n    public void record(int u) {\n        units += u;\n        grandTotal += u;\n    }\n    public static int total() {\n        return grandTotal + units;\n    }\n}',
    options: [
      'It returns twice the sum of all recorded values, since both variables track the same total',
      'It returns grandTotal plus the units of the most recently constructed Meter object',
      'It does not compile, because static code cannot use a field of an object',
      'It throws an exception at run time, because the field has no value in a static context',
    ],
    correctAnswer: 2,
    explanation: 'A static method belongs to the class, not to any object, so there is no particular object whose units it could read; the compiler rejects the reference. The code never runs, so it cannot return a doubled total or the units of some specific object, and the problem is detected at compile time rather than as a run-time exception.',
  },
  {
    domain: 'class-creation',
    topicSlug: 'csa-class-design',
    question: 'Which statement about calling a static method is accurate?',
    options: [
      'It can be called using the class name, with no object created',
      'It can be called only through a reference to an object of the class',
      'It can read the instance variables of whichever object calls it',
      'It can be called only from a constructor or another static method',
    ],
    correctAnswer: 0,
    explanation: 'A static method belongs to the class rather than to any object, so it is normally called with the class name, as in Math.abs(-3). It does not require an object, it has no calling object whose instance variables it could read, and it can be called from any code that can see it, not only from a constructor.',
  },
  // 3.8 Scope and access
  {
    domain: 'class-creation',
    topicSlug: 'csa-class-design',
    question: 'What is printed by the following code?\npublic class Score {\n    private int points = 20;\n    public int bonus(int points) {\n        points = points * 2;\n        return points;\n    }\n    public int getPoints() { return points; }\n}\n// in another class\nScore s = new Score();\nint b = s.bonus(5);\nSystem.out.println(b + " " + s.getPoints());',
    options: [
      '10 10',
      '40 40',
      '40 20',
      '10 20',
    ],
    correctAnswer: 3,
    explanation: 'Inside bonus, the parameter points shadows the instance variable, so every use of points in the method refers to the parameter: it becomes 10 and is returned, while the instance variable stays 20. Printing 10 10 assumes the assignment reached the instance variable, and 40 would require the method to double the instance variable’s 20 instead of the argument 5.',
  },
  {
    domain: 'class-creation',
    topicSlug: 'csa-class-design',
    question: 'Consider the following method in a class with a private instance variable int total. Why does the method fail to compile?\npublic int sumTo(int n) {\n    for (int k = 1; k <= n; k++) {\n        int partial = total + k;\n    }\n    return partial;\n}',
    options: [
      'The variable k is declared in the loop header and cannot be used inside the loop body',
      'The variable total is an instance variable and cannot be used inside a loop',
      'The variable partial is declared inside the loop body and does not exist after the loop ends',
      'The variable partial is declared more than once, since the loop body runs n times',
    ],
    correctAnswer: 2,
    explanation: 'A local variable is in scope only within the block where it is declared, so partial exists only inside the loop body and the return statement cannot see it. A loop-header variable is usable throughout the loop body, instance variables are accessible anywhere in the class, and re-executing a declaration on each iteration is normal and legal.',
  },
  // 3.9 this keyword
  {
    domain: 'class-creation',
    topicSlug: 'csa-writing-classes',
    question: 'What is printed by the following code?\npublic class Note {\n    private String text;\n    public Note(String text) {\n        this.text = text;\n    }\n    public String getText() { return text; }\n}\n// in another class\nNote n = new Note("hello");\nSystem.out.println(n.getText().length());',
    options: [
      'A NullPointerException is thrown',
      '5',
      '4',
      'It does not compile',
    ],
    correctAnswer: 1,
    explanation: 'When a parameter has the same name as an instance variable, this.text refers to the instance variable and the bare name text refers to the parameter, so the constructor stores "hello" correctly and its length, 5, is printed. A NullPointerException would result only if the constructor had written text = text, which assigns the parameter to itself and leaves the field null; 4 is an off-by-one count; and using this to resolve the name clash is legal, so the code compiles.',
  },
  {
    domain: 'class-creation',
    topicSlug: 'csa-writing-classes',
    question: 'The class Timer below has a method that should return true when this Timer has more seconds remaining than another Timer passed to it. Which expression correctly completes the method?\npublic class Timer {\n    private int secs;\n    public Timer(int s) { secs = s; }\n    public boolean longerThan(Timer other) {\n        return /* expression */;\n    }\n}',
    options: [
      'other.secs > secs',
      'this.secs > other',
      'this.secs > other.secs',
      'this.secs > secs',
    ],
    correctAnswer: 2,
    explanation: 'Inside an instance method, this refers to the object the method was called on, and a Timer passed as a parameter can have its private secs read because the code is inside the Timer class. Reversing the comparison reports whether the other Timer is longer, comparing an int to a Timer object does not compile, and this.secs > secs compares the same variable with itself and is always false.',
  },
  {
    domain: 'class-creation',
    topicSlug: 'csa-writing-classes',
    question: 'What is printed by the following code?\npublic class Dial {\n    private int level;\n    public Dial(int level) {\n        level = this.level;\n    }\n    public int getLevel() { return level; }\n}\n// in another class\nDial d = new Dial(7);\nSystem.out.println(d.getLevel());',
    options: [
      '0',
      '7',
      'null',
      'It does not compile',
    ],
    correctAnswer: 0,
    explanation: 'The assignment is backwards: it copies the instance variable, which still holds its default value 0, into the parameter, and the instance variable is never changed. Storing 7 would require this.level = level, null is the default for object references rather than for int, and the statement is legal Java, so the code compiles and runs.',
  },
]
