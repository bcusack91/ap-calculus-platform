import type { MCQItem } from '@/components/FullLengthPracticeExam'

/**
 * AP Computer Science A — 40 Java MCQs in 90 minutes.
 * No calculator. Java subset per the AP CSA Reference Sheet.
 *
 * Distribution mirrors current CED:
 *   U1 Primitives (3) · U2 Objects (3) · U3 Booleans (4) · U4 Iteration (5)
 *   U5 Writing Classes (4) · U6 Arrays (4) · U7 ArrayList (5) · U8 2D Arrays (3)
 *   U9 Inheritance (5) · U10 Recursion (4)
 */

export const MCQS: MCQItem[] = [
  /* ---- Unit 1: Primitive Types ---- */
  {
    type: 'mcq',
    topic: 'primitive-types',
    question: 'What is printed by the following code?\n```java\nint a = 7, b = 2;\nSystem.out.println(a / b + " " + a % b + " " + (double) a / b);\n```',
    options: ['3 1 3.5', '3.5 1 3.5', '3 1.0 3.5', '3 1 3.0'],
    correctAnswer: 0,
    explanation: 'Integer division: 7/2 = 3. Modulus: 7%2 = 1. Cast then divide: (double)7 / 2 = 3.5. The first cast promotes the dividend, so the division is performed in floating point.',
  },
  {
    type: 'mcq',
    topic: 'primitive-types',
    question: 'Which of the following expressions evaluates to true?',
    options: [
      '0.1 + 0.2 == 0.3',
      'Math.abs(0.1 + 0.2 - 0.3) < 1e-9',
      '"abc" + 1 + 2 == "abc12"',
      '5 / 2 == 2.5',
    ],
    correctAnswer: 1,
    explanation: 'Floating-point arithmetic in Java is not exact; 0.1 + 0.2 is 0.30000000000000004. The standard idiom is to test that the absolute difference is below a small tolerance.',
  },
  {
    question: 'What is the value of `result`?\n```java\ndouble result = (double) (7 / 2) + 7 % 2;\n```',
    options: ['4.5', '4.0', '3.5', '5.0'],
    correctAnswer: 1,
    explanation: 'The parentheses force 7 / 2 to be evaluated first as integer division, giving 3; the cast then produces 3.0 — too late to recover the fraction. 7 % 2 = 1, so result = 3.0 + 1 = 4.0. To get 4.5 the cast would need to apply to an operand: (double) 7 / 2.',
    type: 'mcq',
    topic: 'primitive-types',
  },
  {
    type: 'mcq',
    topic: 'objects-and-references',
    question: 'Given `String s = "Hello";`, which expression returns the String "ell"?',
    options: ['s.substring(1, 4)', 's.substring(1, 3)', 's.substring(2, 4)', 's.substring(0, 3)'],
    correctAnswer: 0,
    explanation: 'substring(start, end) returns characters from index start (inclusive) to end (exclusive). For "Hello", indices 1..3 are \'e\',\'l\',\'l\' = "ell".',
  },
  {
    type: 'mcq',
    topic: 'objects-and-references',
    question: 'What is printed?\n```java\nString a = "cat";\nString b = "cat";\nString c = new String("cat");\nSystem.out.println((a == b) + " " + (a == c) + " " + a.equals(c));\n```',
    options: ['true true true', 'true false true', 'false false true', 'false true true'],
    correctAnswer: 1,
    explanation: 'a and b both refer to the interned literal "cat", so a == b is true. c is a new String object, so a == c is false. .equals() compares character contents, so a.equals(c) is true.',
  },
  {
    type: 'mcq',
    topic: 'objects-and-references',
    question: 'Which call computes ⌊$\\sqrt{50}$⌋ as an int?',
    options: ['(int) Math.sqrt(50)', 'Math.sqrt(50).intValue()', 'Math.floor(50)', 'Math.sqrt((int) 50)'],
    correctAnswer: 0,
    explanation: 'Math.sqrt returns a double. Casting to int truncates toward zero, which equals the floor for non-negative values. Math.sqrt is a static double, not a wrapper object, so .intValue() does not apply.',
  },

  /* ---- Unit 3: Booleans ---- */
  {
    type: 'mcq',
    topic: 'boolean-expressions',
    question: 'Which expression is equivalent to `!(a < b && c >= d)` by De Morgan\'s laws?',
    options: ['a > b || c < d', 'a >= b || c < d', 'a >= b && c < d', '!(a < b) && !(c >= d)'],
    correctAnswer: 1,
    explanation: 'Negate the AND ⇒ OR; negate each comparison: !(a < b) is (a >= b); !(c >= d) is (c < d). So result is (a >= b) || (c < d).',
  },
  {
    type: 'mcq',
    topic: 'boolean-expressions',
    question: 'What is printed?\n```java\nint x = 5;\nif (x > 0 || (10 / 0) > 1) System.out.println("A");\nelse System.out.println("B");\n```',
    options: ['A', 'B', 'ArithmeticException is thrown', 'compile-time error'],
    correctAnswer: 0,
    explanation: 'Java uses short-circuit evaluation. Since x > 0 is true, the right side (which would divide by zero) is never evaluated. Output is A.',
  },
  {
    type: 'mcq',
    topic: 'boolean-expressions',
    question: 'A method `boolean inRange(int x)` should return true exactly when 1 ≤ x ≤ 10. Which return statement is correct?',
    options: [
      'return 1 <= x <= 10;',
      'return x >= 1 || x <= 10;',
      'return x >= 1 && x <= 10;',
      'return x > 1 && x < 10;',
    ],
    correctAnswer: 2,
    explanation: 'Java does not allow chained comparisons. Both endpoints must be tested with &&. Using || would always be true. Using > / < excludes the endpoints.',
  },
  {
    question: 'What is printed?\n```java\nboolean p = true, q = false;\nSystem.out.println((p && q) || (!p && !q));\nSystem.out.println(!(p || q));\n```',
    options: ['true then true', 'true then false', 'false then true', 'false then false'],
    correctAnswer: 3,
    explanation: '(p && q) is false; (!p && !q) is false && true = false; false || false prints false. For the second line, p || q is true, so !(p || q) prints false. Note the first expression is true exactly when p and q are equal — here they differ.',
    type: 'mcq',
    topic: 'boolean-expressions',
  },

  /* ---- Unit 4: Iteration ---- */
  {
    type: 'mcq',
    topic: 'iteration',
    question: 'How many times does the body of this loop execute?\n```java\nfor (int i = 0; i < 10; i += 2) {\n  System.out.print(i + " ");\n}\n```',
    options: ['4', '5', '10', '11'],
    correctAnswer: 1,
    explanation: 'i takes values 0, 2, 4, 6, 8 — five iterations. The loop stops when i = 10 fails the condition i < 10.',
  },
  {
    type: 'mcq',
    topic: 'iteration',
    question: 'What is printed?\n```java\nint i = 1, sum = 0;\nwhile (i <= 5) {\n  if (i % 2 == 0) sum += i;\n  i++;\n}\nSystem.out.println(sum);\n```',
    options: ['6', '9', '15', '12'],
    correctAnswer: 0,
    explanation: 'Adds even values from 1 to 5: 2 + 4 = 6.',
  },
  {
    type: 'mcq',
    topic: 'iteration',
    question: 'What is printed?\n```java\nString s = "abcdef";\nString result = "";\nfor (int i = s.length() - 1; i >= 0; i--) {\n  result += s.substring(i, i + 1);\n}\nSystem.out.println(result);\n```',
    options: ['abcdef', 'fedcba', 'ace', 'fdb'],
    correctAnswer: 1,
    explanation: 'The loop iterates from the last index down to 0, appending each character. Result is the reverse of "abcdef".',
  },
  {
    type: 'mcq',
    topic: 'iteration',
    question: 'How many `*` characters are printed?\n```java\nfor (int i = 1; i <= 4; i++) {\n  for (int j = 1; j <= i; j++) {\n    System.out.print("*");\n  }\n}\n```',
    options: ['4', '8', '10', '16'],
    correctAnswer: 2,
    explanation: 'Inner loop runs 1, 2, 3, 4 times for i = 1..4. Total = 1 + 2 + 3 + 4 = 10.',
  },
  {
    type: 'mcq',
    topic: 'iteration',
    question: 'Consider:\n```java\nint n = 12;\nint count = 0;\nwhile (n > 0) {\n  if (n % 2 == 1) count++;\n  n /= 2;\n}\n```\nWhat does `count` equal after the loop?',
    options: ['0', '1', '2', '3'],
    correctAnswer: 2,
    explanation: 'This counts the 1-bits in n. 12 = $1100_{2}$, which has two 1-bits. Trace: n=12 (even, n→6), n=6 (even, n→3), n=3 (odd ⇒count=1, n→1), n=1 (odd ⇒count=2, n→0).',
  },

  /* ---- Unit 5: Writing Classes ---- */
  {
    type: 'mcq',
    topic: 'writing-classes',
    stimulus: '```java\npublic class Point {\n  private int x, y;\n  public Point(int x, int y) { this.x = x; this.y = y; }\n  public int getX() { return x; }\n  public int getY() { return y; }\n  public void shift(int dx, int dy) { x += dx; y += dy; }\n}\n```',
    question: 'After the following code executes, what does `p.getX()` return?\n```java\nPoint p = new Point(3, 4);\np.shift(2, -1);\np.shift(-5, 0);\n```',
    options: ['0', '2', '3', '5'],
    correctAnswer: 0,
    explanation: 'p.x starts at 3. After shift(2,-1): x = 5. After shift(-5,0): x = 0.',
  },
  {
    type: 'mcq',
    topic: 'writing-classes',
    stimulus: '```java\npublic class Counter {\n  private int count;\n  public Counter() { count = 0; }\n  public void inc() { count++; }\n  public int get() { return count; }\n}\n```',
    question: 'Which statement about the constructor is true?',
    options: [
      'The constructor is unnecessary because Java initializes ints to 0 automatically.',
      'The constructor is required to make the class instantiable.',
      'The constructor must be removed because it has no return type.',
      'The constructor can be replaced with `public void Counter()` without changing behavior.',
    ],
    correctAnswer: 0,
    explanation: 'In Java, instance fields of type int default to 0. The explicit assignment in the constructor is documentation but is not required. (B is wrong: a default no-arg constructor is auto-generated. C is wrong: constructors have no return type by definition. D is wrong: adding `void` makes it a method, not a constructor.)',
  },
  {
    type: 'mcq',
    topic: 'writing-classes',
    question: 'A class `BankAccount` has a private field `balance`. Which member declaration best preserves encapsulation?',
    options: [
      'public double balance;',
      'public double getBalance() { return balance; } and a private setter.',
      'public double getBalance() { return balance; } and public void deposit(double amt) and public boolean withdraw(double amt).',
      'No accessors; clients should access `balance` through reflection.',
    ],
    correctAnswer: 2,
    explanation: 'Encapsulation = expose only the operations the client legitimately needs. A getter for read access plus controlled mutators (deposit, withdraw) preserves invariants (e.g., balance ≥ 0) while still allowing necessary client operations.',
  },
  {
    type: 'mcq',
    topic: 'writing-classes',
    question: 'In what scope is the keyword `this` valid?',
    options: [
      'Only in static methods.',
      'Only in instance methods and constructors of a class.',
      'In any method, including static utility methods.',
      'Only in method parameters.',
    ],
    correctAnswer: 1,
    explanation: '`this` refers to the current instance. It is undefined in a static context (where there is no instance).',
  },

  /* ---- Unit 6: Arrays ---- */
  {
    type: 'mcq',
    topic: 'arrays',
    question: 'What is printed?\n```java\nint[] a = {3, 1, 4, 1, 5, 9, 2, 6};\nint sum = 0;\nfor (int i = 0; i < a.length; i += 2) sum += a[i];\nSystem.out.println(sum);\n```',
    options: ['12', '14', '17', '31'],
    correctAnswer: 1,
    explanation: 'Sums elements at even indices: a[0] + a[2] + a[4] + a[6] = 3 + 4 + 5 + 2 = 14.',
  },
  {
    type: 'mcq',
    topic: 'arrays',
    question: 'Which loop correctly prints all elements of `int[] arr` in reverse using an enhanced for-loop, OR explains why it cannot be done?',
    options: [
      '`for (int x : arr) System.out.println(x);` — prints in reverse automatically.',
      '`for (int i = arr.length - 1; i >= 0; i--) System.out.println(arr[i]);` — works because the enhanced for-loop does not provide an index.',
      '`for (int x : arr.reverse()) System.out.println(x);`',
      '`for (int x : arr) { x = arr[arr.length - 1 - x]; System.out.println(x); }`',
    ],
    correctAnswer: 1,
    explanation: 'The enhanced for-loop iterates in array order with no access to the index, so it cannot reverse-iterate. Use a counted for-loop instead. (Note: int arrays do not have a `.reverse()` method.)',
  },
  {
    type: 'mcq',
    topic: 'arrays',
    question: 'What does this method return for `arr = {4, 2, 7, 1, 9, 3}`?\n```java\npublic static int mystery(int[] arr) {\n  int x = arr[0];\n  for (int i = 1; i < arr.length; i++) {\n    if (arr[i] > x) x = arr[i];\n  }\n  return x;\n}\n```',
    options: ['1', '4', '7', '9'],
    correctAnswer: 3,
    explanation: 'Standard maximum-finding loop. The maximum of {4,2,7,1,9,3} is 9.',
  },
  {
    type: 'mcq',
    topic: 'arrays',
    question: 'Given `int[] a = new int[5];`, which is true immediately after this declaration?',
    options: [
      'a is null.',
      'a refers to an array of length 5 whose elements are all 0.',
      'a refers to an array of length 5 whose elements are uninitialized.',
      'a throws a NullPointerException when accessed.',
    ],
    correctAnswer: 1,
    explanation: '`new int[5]` allocates an array of length 5; elements are default-initialized to 0 (the default for int).',
  },

  /* ---- Unit 7: ArrayList ---- */
  {
    type: 'mcq',
    topic: 'arraylist',
    question: 'After this code, what does `list` contain (in order)?\n```java\nArrayList<Integer> list = new ArrayList<>();\nlist.add(1); list.add(2); list.add(3);\nlist.add(1, 5);\nlist.remove(2);\n```',
    options: ['[1, 5, 2, 3]', '[1, 5, 3]', '[5, 1, 2, 3]', '[1, 2, 5]'],
    correctAnswer: 1,
    explanation: 'After three adds: [1,2,3]. add(1,5) inserts 5 at index 1: [1,5,2,3]. remove(2) removes the element at index 2 (which is 2): [1,5,3].',
  },
  {
    type: 'mcq',
    topic: 'arraylist',
    question: 'What does this method return for `list = [3, 1, 4, 1, 5, 9, 2, 6]`?\n```java\npublic static int mystery(ArrayList<Integer> list) {\n  int count = 0;\n  for (int v : list) if (v % 2 == 1) count++;\n  return count;\n}\n```',
    options: ['3', '4', '5', '8'],
    correctAnswer: 2,
    explanation: 'Counts odd values in [3,1,4,1,5,9,2,6]: 3, 1, 1, 5, 9 — five odd values.',
  },
  {
    type: 'mcq',
    topic: 'arraylist',
    question: 'What is the danger in this code?\n```java\nfor (int i = 0; i < list.size(); i++) {\n  if (list.get(i) < 0) list.remove(i);\n}\n```',
    options: [
      'The code throws a ConcurrentModificationException.',
      'The code may skip an element when two negatives are adjacent because the index advances past the shifted element.',
      'The code never compiles because remove takes an Integer, not an int.',
      'The code reverses the list as a side effect.',
    ],
    correctAnswer: 1,
    explanation: 'When list.remove(i) succeeds, all later elements shift left by one, but i still increments. If list[i] and list[i+1] were both negative, the second one shifts into position i and is skipped. The fix is to decrement i after removal, or iterate in reverse, or use an Iterator.',
  },
  {
    question: 'An ArrayList<Integer> list contains [4, 8, 15, 16]. What does the call `list.remove(1)` do, and what does it return?',
    options: ['Removes the first occurrence of the value 1, if present, and returns true', 'Removes the element at index 1 (the value 8), shifts later elements left, and returns 8', 'Removes the element at index 1 and returns nothing (void)', 'Throws an IndexOutOfBoundsException because 1 is not in the list'],
    correctAnswer: 1,
    explanation: 'In the AP subset, remove(int index) removes and returns the element at the given index; elements to its right shift left and size decreases by 1. The list becomes [4, 15, 16] and the removed Integer 8 is returned.',
    type: 'mcq',
    topic: 'arraylist',
  },
  {
    type: 'mcq',
    topic: 'arraylist',
    question: 'Compared to `int[]`, an `ArrayList<Integer>` can do which of the following that the array cannot?',
    options: [
      'Hold elements of mixed types like String and int.',
      'Resize dynamically as elements are added or removed.',
      'Use the [ ] indexing operator.',
      'Be passed to a method as a parameter.',
    ],
    correctAnswer: 1,
    explanation: 'ArrayList grows and shrinks at runtime. Arrays have fixed length once created. (A is false: ArrayList<Integer> only holds Integers; B is true; C — ArrayList uses .get/.set, not []; D — both can be passed.)',
  },

  /* ---- Unit 8: 2D Arrays ---- */
  {
    type: 'mcq',
    topic: 'two-dimensional-arrays',
    question: 'Given `int[][] m = {{1,2,3},{4,5,6},{7,8,9}};`, what is `m[1][2]`?',
    options: ['2', '4', '6', '8'],
    correctAnswer: 2,
    explanation: 'm[1] is the row {4,5,6}; index 2 in that row is 6. AP CSA uses [row][col] convention.',
  },
  {
    type: 'mcq',
    topic: 'two-dimensional-arrays',
    question: 'What does this method return for the 3×3 matrix above?\n```java\npublic static int sumDiagonal(int[][] m) {\n  int s = 0;\n  for (int i = 0; i < m.length; i++) s += m[i][i];\n  return s;\n}\n```',
    options: ['12', '15', '18', '24'],
    correctAnswer: 1,
    explanation: 'Sums the main diagonal: m[0][0] + m[1][1] + m[2][2] = 1 + 5 + 9 = 15.',
  },
  {
    type: 'mcq',
    topic: 'two-dimensional-arrays',
    question: 'Consider:\n```java\nint[][] g = new int[3][4];\n```\nWhich is true?',
    options: [
      'g.length is 4 and g[0].length is 3.',
      'g.length is 3 and g[0].length is 4.',
      'g.length is 12.',
      'g is a 1D array of length 7.',
    ],
    correctAnswer: 1,
    explanation: 'For new int[r][c], g.length is the number of rows (r = 3), and g[0].length is the number of columns (c = 4).',
  },

  /* ---- Unit 9: Inheritance ---- */
  {
    type: 'mcq',
    topic: 'inheritance',
    stimulus: '```java\npublic class Animal {\n  public String speak() { return "generic sound"; }\n}\npublic class Dog extends Animal {\n  public String speak() { return "Woof"; }\n}\npublic class Puppy extends Dog {\n  public String speak() { return "Yip"; }\n}\n```',
    question: 'What is printed?\n```java\nAnimal a = new Puppy();\nSystem.out.println(a.speak());\n```',
    options: ['generic sound', 'Woof', 'Yip', 'compile-time error'],
    correctAnswer: 2,
    explanation: 'Method calls on a reference are resolved by the runtime type of the object (dynamic dispatch). The runtime type is Puppy, so Puppy.speak() is invoked.',
  },
  {
    type: 'mcq',
    topic: 'inheritance',
    question: 'A subclass constructor that does not explicitly call `super(...)` will',
    options: [
      'fail to compile.',
      'implicitly call `super()` (the no-arg superclass constructor) as its first statement.',
      'skip superclass initialization entirely.',
      'call the no-arg constructor of Object directly.',
    ],
    correctAnswer: 1,
    explanation: 'If a subclass constructor lacks an explicit super(...) call, the compiler inserts an implicit `super()`. This will fail to compile only if the superclass has no accessible no-arg constructor.',
  },
  {
    type: 'mcq',
    topic: 'inheritance',
    stimulus: '```java\npublic class A { public int value() { return 1; } }\npublic class B extends A { public int value() { return 2 + super.value(); } }\npublic class C extends B { public int value() { return 4 + super.value(); } }\n```',
    question: 'What does `new C().value()` return?',
    options: ['1', '4', '6', '7'],
    correctAnswer: 3,
    explanation: 'C.value() = 4 + B.value() = 4 + (2 + A.value()) = 4 + 2 + 1 = 7.',
  },
  {
    question: 'Given:\n```java\npublic class Shape {\n  public double area() { return 0.0; }\n}\npublic class Circle extends Shape {\n  private double r;\n  public Circle(double r) { this.r = r; }\n  public double area() { return 3.14159 * r * r; }\n}\n```\nWhich declaration compiles, and when `area()` is called through that variable, executes Circle\'s version?',
    options: ['Shape s = new Shape();', 'Circle c = new Shape();', 'Shape s = new Circle(2.0);', 'None — the declared (reference) type always determines which area() runs'],
    correctAnswer: 2,
    explanation: 'A superclass reference may refer to a subclass object, so Shape s = new Circle(2.0); compiles. At runtime, the object\'s actual type (Circle) determines which overridden method executes — s.area() returns about 12.57. Circle c = new Shape(); does not compile, and option D describes static rather than dynamic dispatch.',
    type: 'mcq',
    topic: 'inheritance',
  },
  {
    type: 'mcq',
    topic: 'inheritance',
    question: 'A method declared in a superclass as `public Object combine(Object o)` is overridden in a subclass as `public String combine(String o)`. Which statement is true?',
    options: [
      'The subclass method overrides the superclass method.',
      'The subclass method overloads, but does not override, the superclass method, because the parameter type differs.',
      'The code does not compile because the return types differ.',
      'The subclass method hides the superclass method statically.',
    ],
    correctAnswer: 1,
    explanation: 'Overriding requires the same parameter signature. Different parameter types ⇒ overloading. (Return type covariance — String is a subtype of Object — would be allowed for true overriding, but the parameter mismatch makes this overloading.)',
  },

  /* ---- Unit 10: Recursion ---- */
  {
    type: 'mcq',
    topic: 'recursion',
    question: 'What does this method return for n = 5?\n```java\npublic static int mystery(int n) {\n  if (n <= 1) return 1;\n  return n * mystery(n - 1);\n}\n```',
    options: ['5', '15', '25', '120'],
    correctAnswer: 3,
    explanation: 'Standard factorial: 5! = 5 × 4 × 3 × 2 × 1 = 120.',
  },
  {
    type: 'mcq',
    topic: 'recursion',
    question: 'What is printed by `f(3)` where:\n```java\npublic static void f(int n) {\n  if (n == 0) return;\n  System.out.print(n);\n  f(n - 1);\n  System.out.print(n);\n}\n```',
    options: ['321', '321123', '123321', '3211123'],
    correctAnswer: 1,
    explanation: 'Trace: f(3) prints 3 → f(2) prints 2 → f(1) prints 1 → f(0) returns → f(1) prints 1 → f(2) prints 2 → f(3) prints 3. Output (left-to-right): 321123.',
  },
  /* fix index drift */
  {
    type: 'mcq',
    topic: 'recursion',
    question: 'What is the base case of this recursive method?\n```java\npublic static int sum(int[] arr, int i) {\n  if (i >= arr.length) return 0;\n  return arr[i] + sum(arr, i + 1);\n}\n```',
    options: [
      'arr.length == 0',
      'i >= arr.length, returning 0',
      'arr[i] == 0',
      'There is no base case; the recursion is infinite.',
    ],
    correctAnswer: 1,
    explanation: 'A base case is the condition under which the method returns without making a recursive call. Here it is `i >= arr.length`, which guarantees termination.',
  },
  {
    type: 'mcq',
    topic: 'recursion',
    question: 'Which of the following is a true statement about recursion in Java?',
    options: [
      'Every recursive method requires a loop somewhere in its body.',
      'A recursive method must reduce its argument toward the base case at every recursive call to guarantee termination.',
      'Recursion in Java is always faster than the equivalent iterative solution.',
      'Recursive methods may not call themselves more than once per invocation.',
    ],
    correctAnswer: 1,
    explanation: 'Termination requires that the recursive call brings the parameters closer to the base case. Without that, the recursion is infinite (and will eventually throw StackOverflowError). The other options are false: A — recursion replaces loops; C — usually slower; D — many recursive algorithms (e.g., Fibonacci, mergesort) make multiple calls.',
  },
]
