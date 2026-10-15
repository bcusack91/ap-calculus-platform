export const csaArrayPart5Data = {
  topicSlug: 'csa-array',
  sections: [
    {
      id: 'csaarray5-intro',
      type: 'text' as const,
      content: `
# 📊 Arrays

**Part 5 of 7 — Data Sets and Text Files**

---

Arrays exist to hold **data**: test scores, sensor readings, survey answers. This part covers three CED topics: the ethical and social issues around collecting data (4.1), how to use a data set to answer a question (4.2), and how to read data from a text file into an array (4.6).

| In this part |
|---|
| Privacy, security and algorithmic bias |
| Questions a data set can and cannot answer |
| Cleaning invalid values before computing |
| File, Scanner and throws IOException |
| Reading a file whose first value is a count |
| nextLine, split, Integer.parseInt and Double.parseDouble |
      `
    },
    {
      id: 'csaarray5-ethics',
      type: 'text' as const,
      content: `
## Data Comes From People (Topic 4.1)

| Issue | What it means | Example |
|---|---|---|
| **Privacy** | personal data can reveal who someone is and what they do; programmers should safeguard it | a step-counting app that also stores GPS points can reveal where a user lives |
| **Security** | stored data can be stolen or misused; collecting less means less to protect | an app that keeps every location forever has more to lose in a breach than one that keeps daily totals |
| **Algorithmic bias** | systematic, repeated errors in a program that create unfair outcomes for a group of users | a sign-up form that rejects names containing a space or hyphen |
| **Collection method** | how data was gathered decides whose data is missing, so check it before drawing conclusions | a survey given only through a smartphone app leaves out people without smartphones |
| **Incomplete or inaccurate data** | missing or wrong values make a program give wrong answers | a sensor that records -1 whenever it fails |

## Using a Data Set (Topic 4.2)

A **data set** is a collection of related values. A program answers a question about it by visiting the values one at a time and processing each one.

| Day | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
|---|---|---|---|---|---|---|---|
| Steps | 8200 | 10400 | -1 | 12000 | 9800 | 15200 | 4400 |

The watch stores -1 on a day it was not worn. Before computing anything, decide what the data can answer:

- **Can answer:** the average of the recorded days, the most steps in a day, how many recorded days were above 10,000.
- **Cannot answer:** how many steps were taken on Wednesday (no data), or *why* Sunday was low (the data has no causes in it).

\`\`\`java
int[] steps = {8200, 10400, -1, 12000, 9800, 15200, 4400};
int total = 0;
int valid = 0;
for (int s : steps) {
    if (s >= 0) {          // clean the data: skip the "not worn" code
        total += s;
        valid++;
    }
}
double avg = (double) total / valid;
System.out.println(avg);   // 10000.0
\`\`\`

Without the \`s >= 0\` check, the -1 is treated as a real day: total becomes 59999 over 7 days, and the average drops to about 8571.3, a wrong answer produced by an unclean data set.
      `
    },
    {
      id: 'csaarray5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A fitness app records each user\'s location every minute and shares the records with advertisers after removing names. Which concern does this raise most directly?',
            options: [
              'Users could be identified from their location trails',
              'The data leaves out people who do not own phones',
              'Some step counts may be recorded as -1 in error',
              'The location records are too large for an array'
            ],
            correctAnswer: 0,
            explanation: 'Location trails reveal homes and routines, so people can be identified even without names, which is a privacy problem. Missing groups and bad readings are real data issues, but the sharing described here is about privacy.'
          },
          {
            question: 'A city plans new bus routes from ride requests sent through a smartphone app. What should the programmers check before drawing conclusions?',
            options: [
              'Whose trips the data leaves out',
              'Whether the requests fit in one array',
              'Whether request times are stored as text',
              'Whether the requests are sorted by time'
            ],
            correctAnswer: 0,
            explanation: 'Riders without the app never appear in the data, so routes planned from it could underserve them. Storage format and ordering are coding details that do not decide whether the conclusions are fair.'
          },
          {
            question: 'Which question can the steps data set above answer?',
            options: [
              'On how many recorded days were steps over 10,000?',
              'How many steps did the user take on Wednesday?',
              'Why were the steps lower on Sunday than on Saturday?',
              'Which route did the user walk on each day?'
            ],
            correctAnswer: 0,
            explanation: 'Counting recorded days above 10,000 needs only the values, and the answer is 3. Wednesday holds the not-worn code, and the data says nothing about causes or routes.'
          }
        ]
      }
    },
    {
      id: 'csaarray5-files',
      type: 'text' as const,
      content: `
## Reading a Text File (Topic 4.6)

A text file is read with a \`Scanner\` built from a \`File\`. Three imports are needed:

\`\`\`java
import java.io.File;
import java.io.IOException;
import java.util.Scanner;
\`\`\`

Suppose the file \`scores.txt\` holds a count followed by that many scores:

\`\`\`
4
88
92
75
100
\`\`\`

\`\`\`java
public static int[] readScores(String fileName) throws IOException {
    Scanner input = new Scanner(new File(fileName));
    int count = input.nextInt();
    int[] scores = new int[count];
    for (int i = 0; i < count; i++) {
        scores[i] = input.nextInt();
    }
    input.close();
    return scores;
}
\`\`\`

\`readScores("scores.txt")\` returns \`{88, 92, 75, 100}\`. Reading the count first is what makes an array work here: its size must be known before any score is stored.

| Call | What it does |
|---|---|
| \`new File(name)\` | represents the file with that name |
| \`new Scanner(file)\` | creates a Scanner that reads from the file |
| \`hasNext()\` | returns true if another token remains |
| \`next()\` | returns the next token as a String |
| \`nextInt()\`, \`nextDouble()\`, \`nextBoolean()\` | read the next token as an int, a double or a boolean |
| \`nextLine()\` | returns the rest of the current line as a String |
| \`close()\` | closes the Scanner when reading is finished |

- A **token** is a run of characters between whitespace (spaces or line breaks). \`nextInt\` does not care whether the numbers are on one line or on many.
- Opening a file can fail, for example when the file does not exist. Java requires the method to acknowledge this, so the header says \`throws IOException\`. Without it the method does not compile, and any method that calls \`readScores\`, such as main, needs \`throws IOException\` too.
- Asking for a token that is missing, or calling \`nextInt\` when the next token is not an int, throws an exception at run time.

## Reading Until the File Runs Out

When the file has no count, \`hasNext\` controls the loop:

\`\`\`java
Scanner input = new Scanner(new File("temps.txt"));
double total = 0.0;
int n = 0;
while (input.hasNext()) {
    total += input.nextDouble();
    n++;
}
input.close();
\`\`\`

For a file holding \`71.5 68.0\` on one line and \`70.5\` on the next, the loop runs 3 times and total is 210.0. This loop can total and count values, but it cannot store them in an array, because the size is not known until the end. That is why data files used with arrays usually begin with a count.
      `
    },
    {
      id: 'csaarray5-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

The file \`data.txt\` holds these two lines after a first line containing \`5\`:

\`\`\`
7 2 9
4 6
\`\`\`

\`\`\`java
Scanner in = new Scanner(new File("data.txt"));
int n = in.nextInt();
int[] vals = new int[n];
for (int i = 0; i < n; i++) {
    vals[i] = in.nextInt();
}
in.close();
\`\`\`

1) What is \`vals[3]\`? _______

2) If the first line held \`3\` instead of \`5\`, what would \`vals[2]\` be? _______

3) A different loop, \`while (in.hasNext()) { in.next(); count++; }\`, runs on the original file with count starting at 0. What is count at the end? _______
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '9', '6'],
        hint1: 'nextInt reads tokens in order, ignoring line breaks: 7, 2, 9, 4, 6.',
        hint2: 'Only three values are read after the count.',
        hint3: 'Every token counts, including the 5 on the first line.',
        explanation: 'The values after the count are read in order, so vals is {7, 2, 9, 4, 6} and vals[3] is 4. With a count of 3, vals is {7, 2, 9}. The file holds six tokens: the count and five values.'
      }
    },
    {
      id: 'csaarray5-split',
      type: 'text' as const,
      content: `
## Lines With Several Fields: nextLine and split

Many data files store one record per line, with fields separated by commas. The file \`roster.csv\` holds:

\`\`\`
Ana,11,3.8
Ben,12,3.5
Cai,10,3.9
\`\`\`

\`\`\`java
Scanner in = new Scanner(new File("roster.csv"));
String[] names = new String[3];
int[] grades = new int[3];
double[] gpas = new double[3];
for (int i = 0; i < 3; i++) {
    String line = in.nextLine();
    String[] parts = line.split(",");
    names[i] = parts[0];
    grades[i] = Integer.parseInt(parts[1]);
    gpas[i] = Double.parseDouble(parts[2]);
}
in.close();
\`\`\`

Trace of the first pass:

| Expression | Value |
|---|---|
| \`line\` | \`"Ana,11,3.8"\` |
| \`parts\` | \`{"Ana", "11", "3.8"}\`, length 3 |
| \`Integer.parseInt(parts[1])\` | the int 11 |
| \`Double.parseDouble(parts[2])\` | the double 3.8 |

- \`split(",")\` returns a new array of String, cutting the line at each comma and dropping the commas.
- Every piece is still a **String**. \`parts[1] + 1\` is \`"111"\`, because + joins Strings; \`Integer.parseInt(parts[1]) + 1\` is 12. Parsing a String that is not a whole number, such as \`Integer.parseInt("3.5")\`, throws a NumberFormatException.
- The result is three **parallel arrays**: index i in names, grades and gpas describes the same student.

### Mixing nextInt and nextLine

\`nextInt\` reads the number but leaves the line break after it. If a file starts with a count line, \`in.nextInt()\` followed by \`in.nextLine()\` returns \`""\`, the empty rest of the count line, not the first record. Either call \`nextLine()\` once more to move past it, or read the count with \`Integer.parseInt(in.nextLine())\`.

> 🎯 **AP Connection:** File, the Scanner methods, split, Integer.parseInt and Double.parseDouble are all on the Java Quick Reference. Questions focus on what each call returns: a token or a line, a String or a number.
      `
    },
    {
      id: 'csaarray5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯

\`\`\`java
String line = "maple,12,3.5";
String[] parts = line.split(",");
int a = Integer.parseInt(parts[1]);
double b = Double.parseDouble(parts[2]);
System.out.println(parts.length + " " + (a + b) + " " + parts[1] + parts[2]);
\`\`\`
      `,
      exercise: {
        questions: [
          {
            question: 'What is printed?',
            options: [
              '3 15.5 123.5',
              '2 15.5 123.5',
              '3 15.5 15.5',
              '3 123.5 123.5'
            ],
            correctAnswer: 0,
            explanation: 'Splitting on two commas gives three pieces. The parentheses make a + b add the numbers 12 and 3.5, while parts[1] + parts[2] joins the Strings "12" and "3.5".'
          },
          {
            question: 'Which statement compiles and stores the number 12 in an int variable?',
            options: [
              'int n = Integer.parseInt(parts[1]);',
              'int n = parts[1];',
              'int n = Integer.parseInt(parts);',
              'int n = (int) parts[1];'
            ],
            correctAnswer: 0,
            explanation: 'parts[1] is the String "12", so it must be converted with Integer.parseInt. A String cannot be assigned or cast to an int, and parseInt takes one String, not an array of String.'
          },
          {
            question: 'A method creates a Scanner from a File, but its header does not include throws IOException. What happens?',
            options: [
              'It does not compile',
              'It compiles but throws an exception on every run',
              'It compiles and reads the file normally',
              'It compiles but skips the file without a message'
            ],
            correctAnswer: 0,
            explanation: 'Creating a Scanner from a File can fail, and Java requires the method to declare that possibility, so leaving out throws IOException is a compile-time error. The problem is found before the program ever runs.'
          }
        ]
      }
    }
  ]
}
