/**
 * AP Computer Science A FRQ Practice Questions
 * Based on College Board AP Computer Science A FRQ format
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

const longFRQs: CSAFRQ[] = [
  {
    id: 'csa-long-1',
    type: 'long' as const,
    unit: 1,
    title: 'Methods & Control Structures: Ticket Pricing',
    prompt: `A theater sells tickets with tiered pricing. A full-price ticket costs $12. Patrons age 65 and older, or age 12 and younger, pay a discounted price of $8. On Tuesdays, every ticket (full price or discounted) is an additional $2 off. You will write two methods of the TicketMachine class.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the method basePrice, which returns the price for a patron of the given age before any Tuesday discount: public static int basePrice(int age)',
        maxPoints: 4,
        rubric: [
          { points: 1, description: 'Correct method header/return type used with a return on every path', keywords: ['public static int', 'return'] },
          { points: 2, description: 'Correct boundary logic: age >= 65 or age <= 12 returns 8 (both boundaries inclusive)', keywords: ['age >= 65', 'age <= 12', '||', '8'] },
          { points: 1, description: 'All other ages return 12', keywords: ['else', 'return 12', '12'] }
        ],
        sampleAnswer: 'public static int basePrice(int age)\n{\n    if (age >= 65 || age <= 12)\n    {\n        return 8;\n    }\n    return 12;\n}',
      },
      {
        label: '(b)',
        prompt: 'Write the method finalPrice, which returns the price for a patron of the given age, where isTuesday indicates whether the sale occurs on a Tuesday. The Tuesday discount is applied after the age pricing, and the price is never negative: public static int finalPrice(int age, boolean isTuesday). Assume basePrice works as intended regardless of your answer to part (a).',
        maxPoints: 5,
        rubric: [
          { points: 2, description: 'Calls basePrice(age) rather than re-implementing the age logic', keywords: ['basePrice(age)', 'call'] },
          { points: 2, description: 'Subtracts 2 only when isTuesday is true', keywords: ['isTuesday', 'if', '- 2'] },
          { points: 1, description: 'Guards against a negative result (e.g., Math.max with 0)', keywords: ['Math.max', '0', 'never negative'] }
        ],
        sampleAnswer: 'public static int finalPrice(int age, boolean isTuesday)\n{\n    int price = basePrice(age);\n    if (isTuesday)\n    {\n        price -= 2;\n    }\n    return Math.max(price, 0);\n}',
      },
    ],
    totalPoints: 9,
    timeRecommendation: '~22 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'csa-long-2',
    type: 'long' as const,
    unit: 5,
    title: 'Class Design: GiftCard',
    prompt: `You will design the GiftCard class. A gift card is created with an initial balance in dollars (a non-negative integer). Money can be spent from the card, but a purchase larger than the current balance must be refused. The class must hide its data from client code.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the complete GiftCard class declaration with: a private int instance variable for the balance; a constructor that sets the balance to the given amount, or to 0 if the given amount is negative; and an accessor method getBalance.',
        maxPoints: 5,
        rubric: [
          { points: 1, description: 'Declares the instance variable private', keywords: ['private int', 'private'] },
          { points: 2, description: 'Constructor validates: negative initial amount becomes 0, otherwise stores the amount', keywords: ['constructor', '< 0', '0', 'else'] },
          { points: 2, description: 'getBalance returns the balance with correct signature (public int, no parameters)', keywords: ['public int getBalance', 'return'] }
        ],
        sampleAnswer: 'public class GiftCard\n{\n    private int balance;\n\n    public GiftCard(int startBalance)\n    {\n        if (startBalance < 0)\n        {\n            balance = 0;\n        }\n        else\n        {\n            balance = startBalance;\n        }\n    }\n\n    public int getBalance()\n    {\n        return balance;\n    }\n}',
      },
      {
        label: '(b)',
        prompt: 'Write the method spend, which attempts to spend amount dollars from the card. If amount is greater than the balance (or negative), the purchase is refused: the balance is unchanged and the method returns false. Otherwise the balance is reduced by amount and the method returns true: public boolean spend(int amount)',
        maxPoints: 4,
        rubric: [
          { points: 2, description: 'Refuses invalid purchases (amount > balance or amount < 0) and returns false without changing state', keywords: ['amount > balance', 'return false', '< 0'] },
          { points: 2, description: 'Otherwise subtracts amount from balance and returns true', keywords: ['balance -= amount', 'return true'] }
        ],
        sampleAnswer: 'public boolean spend(int amount)\n{\n    if (amount < 0 || amount > balance)\n    {\n        return false;\n    }\n    balance -= amount;\n    return true;\n}',
      },
    ],
    totalPoints: 9,
    timeRecommendation: '~22 minutes',
    calculatorAllowed: false,
  }
]

const shortFRQs: CSAFRQ[] = [
  {
    id: 'csa-short-1',
    type: 'short' as const,
    unit: 7,
    title: 'ArrayList: Temperature Log',
    prompt: `A weather station stores its readings in an ArrayList<Integer> named temps, holding whole-degree temperatures in the order they were recorded. You may assume temps is not null and contains at least one element.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the method countAboveFreezing, which returns the number of readings in temps that are strictly greater than 32: public static int countAboveFreezing(ArrayList<Integer> temps)',
        maxPoints: 4,
        rubric: [
          { points: 1, description: 'Initializes a counter and returns it', keywords: ['int count = 0', 'return count'] },
          { points: 2, description: 'Traverses every element of the ArrayList (enhanced for or index loop with .get)', keywords: ['for', 'temps.get', 'for (int t : temps)', 'size()'] },
          { points: 1, description: 'Compares with strict inequality > 32', keywords: ['> 32', 'strictly greater'] }
        ],
        sampleAnswer: 'public static int countAboveFreezing(ArrayList<Integer> temps)\n{\n    int count = 0;\n    for (int t : temps)\n    {\n        if (t > 32)\n        {\n            count++;\n        }\n    }\n    return count;\n}',
      },
      {
        label: '(b)',
        prompt: 'Write the method removeBelow, which removes every reading strictly less than the given limit from temps. The remaining readings must keep their original relative order: public static void removeBelow(ArrayList<Integer> temps, int limit)',
        maxPoints: 5,
        rubric: [
          { points: 2, description: 'Uses an index loop (removal during an enhanced for loop is not valid)', keywords: ['for (int i', 'index', 'while'] },
          { points: 2, description: 'Removes matching elements with temps.remove(i)', keywords: ['temps.remove(i)', 'remove'] },
          { points: 1, description: 'Handles the index shift after removal (does not increment i after removing, or traverses backward)', keywords: ['i--', 'does not increment', 'backward', 'i = i - 1'] }
        ],
        sampleAnswer: 'public static void removeBelow(ArrayList<Integer> temps, int limit)\n{\n    for (int i = temps.size() - 1; i >= 0; i--)\n    {\n        if (temps.get(i) < limit)\n        {\n            temps.remove(i);\n        }\n    }\n}\n\n// Traversing backward avoids skipping the element that shifts into a removed slot.',
      },
    ],
    totalPoints: 9,
    timeRecommendation: '~20 minutes',
    calculatorAllowed: false,
  },
  {
    id: 'csa-short-2',
    type: 'short' as const,
    unit: 8,
    title: '2D Array: Seating Chart',
    prompt: `A classroom seating chart is stored in a 2D array of int named seats, where seats[r][c] is 1 if the seat in row r, column c is occupied and 0 if it is empty. The array is rectangular and has at least one row and one column.`,
    parts: [
      {
        label: '(a)',
        prompt: 'Write the method totalOccupied, which returns the number of occupied seats in the entire chart: public static int totalOccupied(int[][] seats)',
        maxPoints: 4,
        rubric: [
          { points: 2, description: 'Nested loops cover every element in row-major fashion (seats.length rows, seats[r].length columns)', keywords: ['seats.length', 'seats[r].length', 'nested', 'for'] },
          { points: 1, description: 'Accumulates the occupied count (sum of entries or count of 1s)', keywords: ['+= seats[r][c]', '== 1', 'count++'] },
          { points: 1, description: 'Returns the total', keywords: ['return'] }
        ],
        sampleAnswer: 'public static int totalOccupied(int[][] seats)\n{\n    int count = 0;\n    for (int r = 0; r < seats.length; r++)\n    {\n        for (int c = 0; c < seats[r].length; c++)\n        {\n            count += seats[r][c];\n        }\n    }\n    return count;\n}',
      },
      {
        label: '(b)',
        prompt: 'Write the method firstEmptyRow, which returns the index of the first row that contains no occupied seats, or -1 if every row has at least one occupied seat: public static int firstEmptyRow(int[][] seats). Assume totalOccupied works as intended regardless of your answer to part (a).',
        maxPoints: 5,
        rubric: [
          { points: 2, description: 'Examines rows in order and inspects every seat in a row (inner loop or row scan)', keywords: ['for', 'row', 'seats[r]'] },
          { points: 2, description: 'Correctly detects an all-empty row (no 1s) and returns its index immediately', keywords: ['return r', 'boolean', 'flag', 'all zero'] },
          { points: 1, description: 'Returns -1 after the loop when no empty row exists', keywords: ['return -1', '-1'] }
        ],
        sampleAnswer: 'public static int firstEmptyRow(int[][] seats)\n{\n    for (int r = 0; r < seats.length; r++)\n    {\n        boolean empty = true;\n        for (int c = 0; c < seats[r].length; c++)\n        {\n            if (seats[r][c] == 1)\n            {\n                empty = false;\n            }\n        }\n        if (empty)\n        {\n            return r;\n        }\n    }\n    return -1;\n}',
      },
    ],
    totalPoints: 9,
    timeRecommendation: '~20 minutes',
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

export function generateFullExamFRQs(pool: CSAFRQ[] = apCSAFRQs): {
  long: CSAFRQ[]
  short: CSAFRQ[]
  totalPoints: number
  totalTime: string
} {
  const shuffle = <T>(arr: T[]): T[] => {
    const copy = [...arr]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy
  }

  const selectedLong = shuffle(pool.filter((f) => f.type === 'long')).slice(0, 2)
  const selectedShort = shuffle(pool.filter((f) => f.type === 'short')).slice(0, 2)
  const totalPoints = [...selectedLong, ...selectedShort].reduce((s, f) => s + f.totalPoints, 0)

  return {
    long: selectedLong,
    short: selectedShort,
    totalPoints,
    totalTime: '90 min',
  }
}
