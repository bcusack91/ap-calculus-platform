export const csaArraylistUsagePart5Data = {
  topicSlug: 'csa-arraylist-usage',
  sections: [
    {
      id: 'csaarray5-intro',
      type: 'text' as const,
      content: `
# 📋 ArrayList Algorithms

**Part 5 of 7 — Data Analysis With ArrayList**

---

The free-response question on **Data Analysis with ArrayList** gives you a class that keeps a private ArrayList of objects, plus the class those objects come from. You write methods that traverse the list with getters to answer questions about the data, and sometimes to change it. This part works through one such class from start to finish and connects it to the data-set ideas in CED Topic 4.2.

| A typical method asks you to... | Algorithm from this lesson |
|---|---|
| total or average a value for some of the objects | accumulate with a condition (Part 2) |
| find the object with the largest or smallest value | maximum or minimum (Parts 1 and 2) |
| remove the objects that meet a condition | backward removal (Part 1) |
| compare each record with the one before it | neighbors (Part 2) |
| return a new list built from the data | build a new list (Part 4) |
      `
    },
    {
      id: 'csaarray5-classes',
      type: 'text' as const,
      content: `
## The Classes

\`\`\`java
public class Reading {
    private String station;
    private int day;
    private int rain;          // millimeters of rain that day

    public Reading(String s, int d, int r) {
        station = s;
        day = d;
        rain = r;
    }

    public String getStation() { return station; }
    public int getDay() { return day; }
    public int getRain() { return rain; }
}
\`\`\`

\`\`\`java
public class RainLog {
    private ArrayList<Reading> readings;

    public RainLog() {
        readings = new ArrayList<Reading>();
    }

    public void addReading(Reading r) {
        readings.add(r);
    }

    // methods written below
}
\`\`\`

The examples in this part use a RainLog holding six readings, added in this order:

| Index | Station | Day | Rain (mm) |
|---|---|---|---|
| 0 | North | 1 | 12 |
| 1 | South | 1 | 0 |
| 2 | North | 2 | 30 |
| 3 | South | 2 | 5 |
| 4 | North | 3 | 0 |
| 5 | South | 3 | 18 |

Code inside RainLog cannot read \`r.rain\` directly, because \`rain\` is private to Reading. Every value comes through a getter, such as \`readings.get(i).getRain()\`.

## Totals and Averages for One Station

\`\`\`java
public int totalFor(String station) {
    int total = 0;
    for (Reading r : readings) {
        if (r.getStation().equals(station)) {
            total += r.getRain();
        }
    }
    return total;
}

public double averageFor(String station) {
    int total = 0;
    int count = 0;
    for (Reading r : readings) {
        if (r.getStation().equals(station)) {
            total += r.getRain();
            count++;
        }
    }
    if (count == 0) {
        return 0.0;
    }
    return (double) total / count;
}
\`\`\`

\`totalFor("North")\` is 12 + 30 + 0 = 42, and \`averageFor("North")\` is 42 / 3 = 14.0. The average counts only the matching readings, not \`readings.size()\`.

## The Wettest Reading

\`\`\`java
public Reading wettest() {
    Reading best = readings.get(0);
    for (Reading r : readings) {
        if (r.getRain() > best.getRain()) {
            best = r;
        }
    }
    return best;
}
\`\`\`

The method keeps a reference to the best **object** so far, not just its rain amount, so the caller can ask the returned Reading for its station and day. For the six readings it returns the North reading for day 2. The method assumes the list is not empty.
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
            question: 'What does totalFor("South") return for the six readings?',
            options: [
              '23',
              '42',
              '65',
              '18'
            ],
            correctAnswer: 0,
            explanation: 'The South readings are 0, 5 and 18, which add to 23. The method skips every North reading because its station does not equal "South".'
          },
          {
            question: 'A seventh reading, East on day 3 with 30 mm, is added at the end. Which reading does wettest return now?',
            options: [
              'North on day 2',
              'East on day 3',
              'South on day 3',
              'North on day 1'
            ],
            correctAnswer: 0,
            explanation: 'The East reading ties the best so far but is not strictly greater, so best stays the North reading from day 2. With >= the later East reading would replace it.'
          },
          {
            question: 'Why does averageFor test count == 0 before it divides?',
            options: [
              'A station with no readings would make the denominator zero',
              'Every station must have at least one dry day',
              'The cast to double fails when the total is 0',
              'An empty list throws when it is traversed'
            ],
            correctAnswer: 0,
            explanation: 'If no reading matches, count stays 0 and the division would have zero as its divisor. A total of 0 with a positive count divides normally, and traversing an empty list simply runs zero times.'
          }
        ]
      }
    },
    {
      id: 'csaarray5-methods2',
      type: 'text' as const,
      content: `
## Removing Records

\`\`\`java
// Removes every reading from station and returns how many were removed
public int removeStation(String station) {
    int removed = 0;
    for (int i = readings.size() - 1; i >= 0; i--) {
        if (readings.get(i).getStation().equals(station)) {
            readings.remove(i);
            removed++;
        }
    }
    return removed;
}
\`\`\`

The prompt says the method **removes** readings, so it must change the field \`readings\` itself. Building a new list of the readings to keep is acceptable only if the method then assigns that list to the field.

## Comparing Each Record With the One Before

\`\`\`java
// Returns the largest increase in rain from one reading to the next,
// or 0 if the rain never increases
public int biggestJump() {
    int best = 0;
    for (int i = 1; i < readings.size(); i++) {
        int jump = readings.get(i).getRain() - readings.get(i - 1).getRain();
        if (jump > best) {
            best = jump;
        }
    }
    return best;
}
\`\`\`

| i | Readings compared | jump | best afterward |
|---|---|---|---|
| 1 | 12 to 0 | -12 | 0 |
| 2 | 0 to 30 | 30 | 30 |
| 3 | 30 to 5 | -25 | 30 |
| 4 | 5 to 0 | -5 | 30 |
| 5 | 0 to 18 | 18 | 30 |

Here starting \`best\` at 0 is correct, because the specification says to return 0 when the rain never increases. Read the prompt: a plain "largest value" search would start from the first element instead.

## Thinking About the Data

| Question | Can these readings answer it? |
|---|---|
| Which station had more total rain over the three days? | yes: compare \`totalFor\` for each station |
| How much rain fell at North at noon on day 2? | no: each reading is a daily total |
| Why was day 2 wetter at North? | no: the data records amounts, not causes |

Real data also needs **cleaning**. If a failed sensor records -1, a total that adds it is wrong; adding \`&& r.getRain() >= 0\` to the condition skips the invalid readings.
      `
    },
    {
      id: 'csaarray5-reasons',
      type: 'dropdown-select' as const,
      content: `
**Why the Code Looks That Way** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'removeStation walks backward because removing at index i shifts ___',
            options: ['only the later elements', 'only the earlier elements', 'every element in the list', 'none of the elements']
          },
          {
            label: 'biggestJump starts at i = 1 so that ___ is always a valid call',
            options: ['readings.get(i - 1)', 'readings.get(i + 1)', 'readings.get(0)', 'readings.remove(i)']
          },
          {
            label: 'To test whether a reading\'s station matches the String parameter, the code uses ___',
            options: ['equals', '==', 'compareTo', 'length']
          }
        ],
        correctAnswers: ['only the later elements', 'readings.get(i - 1)', 'equals'],
        hint1: 'Elements before index i keep their indices.',
        hint2: 'On the first pass, i - 1 must be at least 0.',
        hint3: 'Strings are objects; compare their characters, not their references.',
        explanation: 'A removal shifts only the elements after it, so a backward loop never skips one. Starting at 1 keeps i - 1 in bounds. equals compares String contents, while == compares references.'
      }
    },
    {
      id: 'csaarray5-misconceptions',
      type: 'text' as const,
      content: `
## Mistakes in Data Analysis Answers

| Mistake | What goes wrong |
|---|---|
| \`r.getStation() == station\` | compares references, so readings with matching text can be missed |
| \`r.rain\` inside RainLog | does not compile: rain is private to Reading |
| \`best = 0\` when the values could all be negative | returns 0, a value that is not in the data |
| removing in a forward loop with no index adjustment | skips the reading after each removal |
| removing inside an enhanced for loop | can throw a ConcurrentModificationException |
| \`total / count\` with two ints | drops the fraction of the average |
| building a new list but never storing it in the field | the field \`readings\` is unchanged |

> 📝 **AP Connection:** On this free-response question, use the getters given in the problem, keep to the six ArrayList methods on the Quick Reference, and make sure that a method that is supposed to change the list changes the field.
      `
    },
    {
      id: 'csaarray5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Apply It** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After removeStation("North") runs on the six readings, what does biggestJump return?',
            options: [
              '13',
              '30',
              '18',
              '5'
            ],
            correctAnswer: 0,
            explanation: 'The South readings 0, 5 and 18 remain, in that order. The increases are 5 and 13, so the largest is 13.'
          },
          {
            question: 'A student writes removeStation with a forward loop that calls remove(i) and never adjusts i. The six readings alternate North and South. What does removeStation("South") return?',
            options: [
              '3, and no South reading is skipped',
              '2, and one South reading is skipped',
              '1, and two South readings are skipped',
              'It throws an IndexOutOfBoundsException'
            ],
            correctAnswer: 0,
            explanation: 'After each removal the next South reading slides back one place, and the skipped element is always a North reading. So every South reading is still checked, and the bug stays hidden for this data.'
          }
        ]
      }
    }
  ]
}
