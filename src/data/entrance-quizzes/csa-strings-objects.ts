/**
 * Entrance Quiz — Strings & Objects (AP Computer Science A)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cso-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'What is printed?\nString s = "notebook";\ns.substring(2, 5);\ns = s.substring(4);\nSystem.out.println(s + s.length());',
    options: ['book8', 'book4', 'ebook5', 'teb3'],
    correctIndex: 1,
    explanation: 'Strings are immutable, and the result of the first substring call is never stored, so s is still "notebook". s.substring(4) is "book", and its length is 4.',
  },
  {
    id: 'cso-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'With String a = "trail"; and String b = "train";, which expression evaluates to true?',
    options: ['a.indexOf("ai") == 3', 'a.substring(1, 3).equals("rai")', 'b.substring(4).length() == 0', 'a.compareTo(b) < 0'],
    correctIndex: 3,
    explanation: 'The two Strings first differ at index 4, where "l" comes before "n", so a.compareTo(b) is negative. "ai" starts at index 2, substring(1, 3) is "ra", and b.substring(4) is "n", which has length 1.',
  },
  {
    id: 'cso-ent-2a', partNumber: 2, partTitle: 'String Objects, Concatenation, and equals vs ==',
    question: 'What is printed?\nString a = new String("go");\nString b = "go";\nString c = a;\na += "!";\nSystem.out.println((c == a) + " " + c.equals(b));',
    options: ['false true', 'true true', 'false false', 'true false'],
    correctIndex: 0,
    explanation: 'a += "!" builds a new String and points a at it, so c still refers to the original "go" object and c == a is false. c and b hold the same characters, so equals returns true.',
  },
  {
    id: 'cso-ent-2b', partNumber: 2, partTitle: 'String Objects, Concatenation, and equals vs ==',
    question: 'After String s = null; and String t = "";, which statement runs without throwing an exception?',
    options: ['System.out.println(s.length());', 'System.out.println(s.equals(t));', 'System.out.println(t + s);', 'System.out.println(s.substring(0));'],
    correctIndex: 2,
    explanation: 'Concatenation turns a null reference into the text "null", so t + s prints null without calling any method on s. The other three call a method on s, which refers to no object, so each throws a NullPointerException.',
  },
  {
    id: 'cso-ent-3a', partNumber: 3, partTitle: 'Extracting Pieces with substring and indexOf',
    question: 'What is printed?\nString code = "NYC-2049-B";\nint d = code.indexOf("-");\nString rest = code.substring(d + 1);\nSystem.out.println(rest.substring(0, rest.indexOf("-")) + code.substring(0, d).length());',
    options: ['20493', '2049-3', '20494', '204-3'],
    correctIndex: 0,
    explanation: 'The first dash is at index 3, so rest is "2049-B" and its dash is at index 4. rest.substring(0, 4) stops before the dash, giving "2049", and "NYC" has length 3.',
  },
  {
    id: 'cso-ent-3b', partNumber: 3, partTitle: 'Extracting Pieces with substring and indexOf',
    question: 'With String s = "radar";, which call throws a StringIndexOutOfBoundsException?',
    options: ['s.substring(5, 5)', 's.substring(s.indexOf("z") + 1)', 's.substring(0, 5)', 's.substring(6)'],
    correctIndex: 3,
    explanation: 'A start index may be at most the length, 5, so substring(6) throws. substring(5, 5) is the empty String, substring(0, 5) is the whole word, and indexOf returning -1 makes the other call substring(0).',
  },
  {
    id: 'cso-ent-4a', partNumber: 4, partTitle: 'Ordering Strings with compareTo',
    question: 'Which list shows the Strings in the order compareTo puts them, from first to last?',
    options: ['"5", "40", "Ox", "ant"', '"40", "5", "Ox", "ant"', '"ant", "Ox", "40", "5"', '"40", "5", "ant", "Ox"'],
    correctIndex: 1,
    explanation: 'The order is digits, then uppercase, then lowercase, and Strings compare character by character. "40" comes before "5" because "4" comes before "5", even though 40 is the larger number.',
  },
  {
    id: 'cso-ent-4b', partNumber: 4, partTitle: 'Ordering Strings with compareTo',
    question: 'What is printed?\nString a = "Ramp";\nString b = "ram";\nSystem.out.println((a.compareTo(b) > 0) + " " + (b.compareTo("rams") < 0));',
    options: ['true true', 'false false', 'true false', 'false true'],
    correctIndex: 3,
    explanation: 'Uppercase "R" comes before lowercase "r", so "Ramp" comes first and a.compareTo(b) is negative. "ram" is a prefix of "rams", so it comes first and the second comparison is negative too.',
  },
  {
    id: 'cso-ent-5a', partNumber: 5, partTitle: 'String Traversal Algorithms',
    question: 'What is printed?\nString s = "abcbcbc";\nint count = 0;\nfor (int i = 0; i < s.length() - 3; i++) {\nif (s.substring(i, i + 3).equals("cbc")) {\ncount++;\n}\n}\nSystem.out.println(count);',
    options: ['1', '2', '3', '0'],
    correctIndex: 0,
    explanation: 'The condition i < 4 checks windows starting at 0 through 3, and only the window at index 2 is "cbc". The last window, at index 4, is also "cbc" but is skipped because the loop needed i <= s.length() - 3.',
  },
  {
    id: 'cso-ent-5b', partNumber: 5, partTitle: 'String Traversal Algorithms',
    question: 'What is printed?\nString s = "frame";\nString r = "";\nfor (int i = 0; i < s.length(); i += 2) {\nr = s.substring(i, i + 1) + r;\n}\nSystem.out.println(r);',
    options: ['fae', 'eaf', 'rm', 'emarf'],
    correctIndex: 1,
    explanation: 'The loop visits indices 0, 2 and 4, the letters f, a and e. Each one is placed in front of r, so the result is built in reverse as "eaf".',
  },
  {
    id: 'cso-ent-6a', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'What does mystery("committee") return?\npublic static String mystery(String w) {\nString out = "";\nfor (int i = 0; i < w.length() - 1; i++) {\nif (w.substring(i, i + 1).equals(w.substring(i + 1, i + 2))) {\nout += w.substring(i, i + 1);\n}\n}\nreturn out;\n}',
    options: ['mmttee', 'mt', 'mte', 'cmte'],
    correctIndex: 2,
    explanation: 'The loop compares each letter with the next one and appends one copy when they match. "committee" has the adjacent pairs mm, tt and ee, and the bound i < w.length() - 1 still reaches the final pair.',
  },
  {
    id: 'cso-ent-6b', partNumber: 6, partTitle: 'AP-Style Practice',
    question: 'This method is meant to return true when every character of s is a lowercase letter.\npublic static boolean allLower(String s) {\nfor (int i = 0; i < s.length(); i++) {\nString c = s.substring(i, i + 1);\nif ("abcdefghijklmnopqrstuvwxyz".indexOf(c) < 0) {\nreturn false;\n} else {\nreturn true;\n}\n}\nreturn true;\n}\nWhich call returns an incorrect result?',
    options: ['allLower("Bb")', 'allLower("abc")', 'allLower("")', 'allLower("aB")'],
    correctIndex: 3,
    explanation: 'Both branches return during the first pass, so the method checks only the first character. For "aB" it sees "a" and returns true without ever examining "B".',
  },
  {
    id: 'cso-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is printed?\nString s = "keyboard";\nString t = s.substring(3) + s.substring(0, 3);\nSystem.out.println(t.indexOf("dk") + " " + (t.compareTo(s) > 0));',
    options: ['4 true', '5 false', '4 false', '3 true'],
    correctIndex: 2,
    explanation: 't is "board" + "key", which is "boardkey", and "dk" starts at index 4. "boardkey" begins with "b", which comes before the "k" of "keyboard", so t.compareTo(s) is negative.',
  },
  {
    id: 'cso-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'What is the result of running this code segment?\nString s = "lamp";\nString out = "";\nfor (int i = 0; i < s.length(); i++) {\nout += s.substring(i, i + 2);\n}\nSystem.out.println(out);',
    options: ['laammp', 'An exception is thrown', 'laammpp', 'The code does not compile'],
    correctIndex: 1,
    explanation: 'On the pass with i = 3, substring(3, 5) asks for an end index past the length of 4, which throws before anything is printed. A two-character window needs the bound i < s.length() - 1.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'String Objects, Concatenation, and equals vs ==' },
    { partNumber: 3, partTitle: 'Extracting Pieces with substring and indexOf' },
    { partNumber: 4, partTitle: 'Ordering Strings with compareTo' },
    { partNumber: 5, partTitle: 'String Traversal Algorithms' },
    { partNumber: 6, partTitle: 'AP-Style Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
