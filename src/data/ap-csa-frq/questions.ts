/**
 * AP Computer Science A FRQ Practice Questions
 * Based on the College Board AP Computer Science A FRQ format (4 FRQs, 90 minutes):
 *   Q1 Methods and Control Structures (7 pts; Part B uses String methods)
 *   Q2 Class Design (7 pts)
 *   Q3 Data Analysis with ArrayList (5 pts)
 *   Q4 2D Array (6 pts)
 * Every rubric line is worth one point, as on the official scoring guidelines.
 * Units follow the 2025 four-unit CED: 1 Using Objects and Methods, 2 Selection and
 * Iteration, 3 Class Creation, 4 Data Collections.
 * The `type` field ('long' | 'short') is a legacy grouping kept for the content store
 * (long = Q1 and Q2, short = Q3 and Q4).
 */

export interface FRQRubricItem {
  points: number
  description: string
  keywords: string[]
}

export interface FRQPart {
  label: string
  prompt: string
  maxPoints: number
  rubric: FRQRubricItem[]
  sampleAnswer: string
}

export interface CSAFRQ {
  id: string
  type: 'long' | 'short'
  unit: number
  title: string
  prompt: string
  parts: FRQPart[]
  totalPoints: number
  timeRecommendation: string
  calculatorAllowed: boolean
}

/** The four real FRQ question types in exam order, with their official point values. */
export const CSA_FRQ_TYPES: { id: string; label: string; points: number; minutes: number }[] = [
  { id: 'csa-long-1', label: 'Q1 Methods and Control Structures', points: 7, minutes: 22 },
  { id: 'csa-long-2', label: 'Q2 Class Design', points: 7, minutes: 23 },
  { id: 'csa-short-1', label: 'Q3 Data Analysis with ArrayList', points: 5, minutes: 22 },
  { id: 'csa-short-2', label: 'Q4 2D Array', points: 6, minutes: 23 },
]

const longFRQs: CSAFRQ[] = [
  {
    id: 'csa-long-1',
    type: 'long' as const,
    unit: 2,
    title: 'Methods & Control Structures: Ticket Pricing',
    prompt: `A theater sells tickets with tiered pricing. A full-price ticket costs \\$12. Patrons age 65 and older, or age 12 and younger, pay a discounted price of \\$8. On Tuesdays, every ticket (full price or discounted) is an additional \\$2 off. Each show is identified by a label such as "Tue 7:30 PM" or "Sat 2:00 PM", in which the first three characters are the abbreviated day of the week. You will write two methods of the TicketMachine class.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the method basePrice, which returns the price for a patron of the given age before any Tuesday discount: public static int basePrice(int age)',
        maxPoints: 4,
        rubric: [
          { points: 1, description: 'Correct method header and return type, with a return on every path', keywords: ['public static int basepric', 'return'] },
          { points: 1, description: 'Checks the senior boundary with an inclusive comparison (age >= 65)', keywords: ['age >= 65', 'age>=65', '64 < age', '64 <'] },
          { points: 1, description: 'Checks the child boundary with an inclusive comparison (age <= 12), combined with the senior check using ||', keywords: ['age <= 12', 'age<=12', 'age < 13', 'age<13'] },
          { points: 1, description: 'Returns 8 for discounted ages and 12 for all other ages (algorithm)', keywords: ['return 12', 'return 8'] }
        ],
        sampleAnswer: 'public static int basePrice(int age)\n{\n    if (age >= 65 || age <= 12)\n    {\n        return 8;\n    }\n    return 12;\n}',
      },
      {
        label: '(b)',
        prompt: 'Write the method finalPrice, which returns the price of a ticket for a patron of the given age at the show with the given label. If the first three characters of showLabel are "Tue", the \\$2 Tuesday discount is subtracted from the base price; otherwise the base price is returned: public static int finalPrice(int age, String showLabel). Use only String methods from the Java Quick Reference. Assume basePrice works as intended regardless of your answer to part (a).',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Calls basePrice(age) rather than re-implementing the age logic', keywords: ['baseprice(age)'] },
          { points: 1, description: 'Extracts the day with a valid String method call (showLabel.substring(0, 3)) and compares it to "Tue" with equals', keywords: ['substring(0, 3)', 'substring(0,3)', '.equals("tue")', 'indexof("tue")'] },
          { points: 1, description: 'Returns the base price minus 2 for a Tuesday show and the base price otherwise (algorithm)', keywords: ['- 2', '-2', '-= 2'] }
        ],
        sampleAnswer: 'public static int finalPrice(int age, String showLabel)\n{\n    int price = basePrice(age);\n    if (showLabel.substring(0, 3).equals("Tue"))\n    {\n        price -= 2;\n    }\n    return price;\n}',
      },
    ],
    totalPoints: 7,
    timeRecommendation: '~22 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'csa-long-2',
    type: 'long' as const,
    unit: 3,
    title: 'Class Design: GiftCard',
    prompt: `You will design the GiftCard class. A gift card is created with an initial balance in dollars (a non-negative integer). Money can be spent from the card, but a purchase larger than the current balance must be refused. The class must hide its data from client code.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the complete GiftCard class declaration with: a private int instance variable for the balance; a constructor that sets the balance to the given amount, or to 0 if the given amount is negative; and an accessor method getBalance.',
        maxPoints: 4,
        rubric: [
          { points: 1, description: 'Declares a private int instance variable for the balance', keywords: ['private int'] },
          { points: 1, description: 'Constructor header with one int parameter sets the balance to 0 when the given amount is negative', keywords: ['< 0', '<0'] },
          { points: 1, description: 'Constructor otherwise stores the given amount in the instance variable', keywords: ['balance = startbalance', 'balance = amount', 'balance = initial', 'else'] },
          { points: 1, description: 'getBalance has the correct signature (public int, no parameters) and returns the balance', keywords: ['public int getbalance()', 'public int getbalance ()'] }
        ],
        sampleAnswer: 'public class GiftCard\n{\n    private int balance;\n\n    public GiftCard(int startBalance)\n    {\n        if (startBalance < 0)\n        {\n            balance = 0;\n        }\n        else\n        {\n            balance = startBalance;\n        }\n    }\n\n    public int getBalance()\n    {\n        return balance;\n    }\n}',
      },
      {
        label: '(b)',
        prompt: 'Write the method spend, which attempts to spend amount dollars from the card. If amount is greater than the balance (or negative), the purchase is refused: the balance is unchanged and the method returns false. Otherwise the balance is reduced by amount and the method returns true: public boolean spend(int amount)',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Checks both invalid cases: amount greater than the balance and amount less than 0', keywords: ['amount > balance', 'amount>balance', 'balance < amount'] },
          { points: 1, description: 'Returns false for an invalid purchase without changing the balance', keywords: ['return false'] },
          { points: 1, description: 'For a valid purchase, subtracts amount from the balance and returns true (algorithm)', keywords: ['balance -= amount', 'balance = balance - amount'] }
        ],
        sampleAnswer: 'public boolean spend(int amount)\n{\n    if (amount < 0 || amount > balance)\n    {\n        return false;\n    }\n    balance -= amount;\n    return true;\n}',
      },
    ],
    totalPoints: 7,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: false,
  }
]

const shortFRQs: CSAFRQ[] = [
  {
    id: 'csa-short-1',
    type: 'short' as const,
    unit: 4,
    title: 'ArrayList: Temperature Log',
    prompt: `A weather station stores its readings in an ArrayList<Integer> named temps, holding whole-degree temperatures in the order they were recorded. You may assume temps is not null and contains at least one element.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the method countAboveFreezing, which returns the number of readings in temps that are strictly greater than 32: public static int countAboveFreezing(ArrayList<Integer> temps)',
        maxPoints: 2,
        rubric: [
          { points: 1, description: 'Traverses every element of the ArrayList (enhanced for, or an index loop with .get and .size())', keywords: [': temps)', 'temps.get(', 'temps.size()'] },
          { points: 1, description: 'Counts only readings strictly greater than 32, initializing the counter and returning it (algorithm)', keywords: ['> 32', '>32'] }
        ],
        sampleAnswer: 'public static int countAboveFreezing(ArrayList<Integer> temps)\n{\n    int count = 0;\n    for (int t : temps)\n    {\n        if (t > 32)\n        {\n            count++;\n        }\n    }\n    return count;\n}',
      },
      {
        label: '(b)',
        prompt: 'Write the method removeBelow, which removes every reading strictly less than the given limit from temps. The remaining readings must keep their original relative order: public static void removeBelow(ArrayList<Integer> temps, int limit)',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Uses an index loop over temps (removal during an enhanced for loop is not valid)', keywords: ['for (int i', 'for(int i', 'while ('] },
          { points: 1, description: 'Removes each reading less than limit with temps.remove(i)', keywords: ['temps.remove(i)', '.remove(i)'] },
          { points: 1, description: 'Handles the index shift after a removal so no element is skipped (traverses backward, or does not increment i after removing) (algorithm)', keywords: ['i--', 'i >= 0', 'i>=0', 'i = i - 1', 'size() - 1'] }
        ],
        sampleAnswer: 'public static void removeBelow(ArrayList<Integer> temps, int limit)\n{\n    for (int i = temps.size() - 1; i >= 0; i--)\n    {\n        if (temps.get(i) < limit)\n        {\n            temps.remove(i);\n        }\n    }\n}\n\n// Traversing backward avoids skipping the element that shifts into a removed slot.',
      },
    ],
    totalPoints: 5,
    timeRecommendation: '~22 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'csa-short-2',
    type: 'short' as const,
    unit: 4,
    title: '2D Array: Seating Chart',
    prompt: `A classroom seating chart is stored in a 2D array of int named seats, where seats[r][c] is 1 if the seat in row r, column c is occupied and 0 if it is empty. The array is rectangular and has at least one row and one column.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the method totalOccupied, which returns the number of occupied seats in the entire chart: public static int totalOccupied(int[][] seats)',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Nested loops access every element without a bounds error (seats.length rows, seats[r].length columns)', keywords: ['seats.length', 'seats[r].length', 'seats[0].length', 'seats[row].length'] },
          { points: 1, description: 'Accumulates the number of occupied seats (sum of entries or count of 1s) in the context of the loops', keywords: ['+= seats[', '== 1', 'count++'] },
          { points: 1, description: 'Initializes the total to 0 and returns it after the loops (algorithm)', keywords: ['= 0;', 'return count', 'return total'] }
        ],
        sampleAnswer: 'public static int totalOccupied(int[][] seats)\n{\n    int count = 0;\n    for (int r = 0; r < seats.length; r++)\n    {\n        for (int c = 0; c < seats[r].length; c++)\n        {\n            count += seats[r][c];\n        }\n    }\n    return count;\n}',
      },
      {
        label: '(b)',
        prompt: 'Write the method firstEmptyRow, which returns the index of the first row that contains no occupied seats, or -1 if every row has at least one occupied seat: public static int firstEmptyRow(int[][] seats). Assume totalOccupied works as intended regardless of your answer to part (a).',
        maxPoints: 3,
        rubric: [
          { points: 1, description: 'Examines rows in order and inspects every seat in each row', keywords: ['seats[r][c]', 'seats[row][col]', 'seats[r]'] },
          { points: 1, description: 'Determines whether a row has no occupied seats (for example, with a boolean flag or a row count of 0)', keywords: ['boolean', '== 0', 'empty = false'] },
          { points: 1, description: 'Returns the index of the first empty row, or -1 after the loop when no row is empty (algorithm)', keywords: ['return -1'] }
        ],
        sampleAnswer: 'public static int firstEmptyRow(int[][] seats)\n{\n    for (int r = 0; r < seats.length; r++)\n    {\n        boolean empty = true;\n        for (int c = 0; c < seats[r].length; c++)\n        {\n            if (seats[r][c] == 1)\n            {\n                empty = false;\n            }\n        }\n        if (empty)\n        {\n            return r;\n        }\n    }\n    return -1;\n}',
      },
    ],
    totalPoints: 6,
    timeRecommendation: '~23 minutes',
    calculatorAllowed: false,
  }
]

export const apCSAFRQs: CSAFRQ[] = [...longFRQs, ...shortFRQs]

export function getApCSAFRQs(): CSAFRQ[] {
  return apCSAFRQs
}

export function getLongFRQs(): CSAFRQ[] {
  return longFRQs
}

export function getShortFRQs(): CSAFRQ[] {
  return shortFRQs
}

/**
 * One FRQ of each real type in exam order (Q1 Methods and Control Structures, Q2 Class
 * Design, Q3 ArrayList, Q4 2D Array): 25 points in 90 minutes. Falls back to the static
 * question for any type the pool does not contain.
 */
export function generateFullExamFRQs(pool: CSAFRQ[] = apCSAFRQs): {
  questions: CSAFRQ[]
  totalPoints: number
  totalMinutes: number
} {
  const questions = CSA_FRQ_TYPES.map(
    ({ id }) => pool.find((q) => q.id === id) ?? apCSAFRQs.find((q) => q.id === id)!,
  )
  return {
    questions,
    totalPoints: questions.reduce((s, f) => s + f.totalPoints, 0),
    totalMinutes: 90,
  }
}
