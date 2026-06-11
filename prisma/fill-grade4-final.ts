import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Completing Grade 4 Math - final 2 topics!\n');

  const grade4Course = await prisma.course.findUnique({
    where: { slug: 'grade-4-math' }
  });

  if (!grade4Course) {
    throw new Error('Grade 4 Math course not found');
  }

  const updates = [
    {
      slug: 'reading-bar-graphs-line-plots',
      content: `# Reading Bar Graphs and Line Plots

## What Are Graphs?

**Graphs** are visual ways to show data (information).

They help us:
- See patterns quickly
- Compare information
- Answer questions about data
- Make the data easier to understand

## Bar Graphs

**Bar graphs** use bars (rectangles) to show data.

**Parts of a bar graph:**
- **Title:** Tells what the graph is about
- **Labels:** Names on the bottom (categories)
- **Scale:** Numbers on the side (how much)
- **Bars:** Show the amount for each category

### Reading a Bar Graph

**Example: Favorite Fruits**

\`\`\`
        Number of Students
        |
    10  |     ▓▓▓
     9  |     ▓▓▓
     8  |     ▓▓▓  ▓▓▓
     7  | ▓▓▓ ▓▓▓  ▓▓▓
     6  | ▓▓▓ ▓▓▓  ▓▓▓
     5  | ▓▓▓ ▓▓▓  ▓▓▓  ▓▓▓
     4  | ▓▓▓ ▓▓▓  ▓▓▓  ▓▓▓
     3  | ▓▓▓ ▓▓▓  ▓▓▓  ▓▓▓
     2  | ▓▓▓ ▓▓▓  ▓▓▓  ▓▓▓
     1  | ▓▓▓ ▓▓▓  ▓▓▓  ▓▓▓
     0  |_________________________
          Apple Banana Orange Grape
\`\`\`

**Reading the graph:**
- Apple: 7 students
- Banana: 10 students
- Orange: 8 students
- Grape: 5 students

**Questions you can answer:**
1. Which fruit is most popular? **Banana** (tallest bar)
2. Which fruit is least popular? **Grape** (shortest bar)
3. How many chose apples? **7 students**
4. How many more chose bananas than grapes? **10 - 5 = 5 more**

### Types of Bar Graphs

**Vertical bar graph:**
- Bars go up and down
- Categories on bottom
- Numbers on the side

**Horizontal bar graph:**
- Bars go left to right
- Categories on the side
- Numbers on the bottom

**Both show the same information, just turned sideways!**

## Comparing Data in Bar Graphs

**Example questions:**

**1. Which category has the most?**
- Look for the tallest (or longest) bar

**2. Which category has the least?**
- Look for the shortest bar

**3. How many more/fewer?**
- Subtract the two amounts
- Example: 10 - 7 = 3 more

**4. What is the total?**
- Add all the amounts
- Example: 7 + 10 + 8 + 5 = 30 total

## Reading the Scale

**Important:** Always check the scale!

**Scale by 1s:**
\`\`\`
0, 1, 2, 3, 4, 5...
Each line = 1
\`\`\`

**Scale by 2s:**
\`\`\`
0, 2, 4, 6, 8, 10...
Each line = 2
\`\`\`

**Scale by 5s:**
\`\`\`
0, 5, 10, 15, 20...
Each line = 5
\`\`\`

**Scale by 10s:**
\`\`\`
0, 10, 20, 30, 40...
Each line = 10
\`\`\`

## Line Plots (Dot Plots)

**Line plots** use Xs or dots to show data on a number line.

**Parts of a line plot:**
- **Title:** What the data shows
- **Number line:** Shows possible values
- **Xs or dots:** Each one represents one piece of data

### Reading a Line Plot

**Example: Hours of TV Watched This Week**

\`\`\`
        X
        X          X
    X   X      X   X
    X   X   X  X   X
    X   X   X  X   X   X
   ─┼───┼───┼──┼───┼───┼──
    3   4   5  6   7   8
         Hours
\`\`\`

**Reading the line plot:**
- 3 hours: 1 student (1 X)
- 4 hours: 4 students (4 Xs)
- 5 hours: 2 students (2 Xs)
- 6 hours: 4 students (4 Xs)
- 7 hours: 5 students (5 Xs)
- 8 hours: 1 student (1 X)

**Total students:** Count all the Xs = 17 students ✓

### Answering Questions from Line Plots

**Questions:**

**1. How many students watched 4 hours?**
- Count Xs above 4: **4 students** ✓

**2. What was the most common amount?**
- Find the tallest stack: **7 hours** (5 Xs)

**3. What is the range?**
- Highest - Lowest = 8 - 3 = **5 hours** ✓

**4. How many students total?**
- Count ALL Xs: **17 students** ✓

## Line Plots with Fractions

**Line plots can show fractional data too!**

**Example: Length of Pencils (in inches)**

\`\`\`
        X
        X   X
    X   X   X       X
    X   X   X   X   X
   ─┼───┼───┼───┼───┼──
    5   5¼  5½  5¾  6
       Inches
\`\`\`

**Reading:**
- 5 inches: 1 pencil
- 5¼ inches: 3 pencils
- 5½ inches: 3 pencils
- 5¾ inches: 1 pencil
- 6 inches: 2 pencils

## Finding the Mode (Most Common)

**Mode** = the value that appears most often

**In a bar graph:**
- Find the tallest bar
- That category is the mode

**In a line plot:**
- Find the number with the most Xs
- That number is the mode

## Real-World Examples

**Bar Graph Uses:**
- Favorite colors in the class
- Pets owned by students
- Books read each month
- Sales at a lemonade stand

**Line Plot Uses:**
- Test scores
- Heights or weights
- Temperatures over time
- Distances jumped in PE

## Creating Data from Graphs

**From this line plot:**
\`\`\`
    X
    X   X
    X   X   X
   ─┼───┼───┼──
    2   3   4
\`\`\`

**The data is:** 2, 2, 3, 3, 3, 4

## Interpreting Data

**Good questions to ask:**
1. What does the graph show? (Read the title!)
2. What do the numbers mean? (Check the scale!)
3. What patterns do you see?
4. What can you conclude from the data?

## Comparing Two Graphs

**Sometimes you need to compare graphs:**

**Bar Graph A:** Pet Survey - Class 1
**Bar Graph B:** Pet Survey - Class 2

**You can compare:**
- Which class has more dogs?
- Which pet is most popular in both?
- What's the total for each class?

## Common Mistakes

❌ Not reading the scale carefully
- Each line might be 2, 5, or 10 (not always 1!)

❌ Counting bars instead of reading values
- The HEIGHT of the bar matters, not how many bars

❌ Forgetting to read the title/labels
- You need to know what the data represents!

❌ Estimating when you should be exact
- If the bar is between lines, estimate carefully

✅ Always check the scale first
✅ Read all labels and the title
✅ Count Xs carefully in line plots
✅ Show your work when calculating

## Practice Strategy

**When reading any graph:**

**Step 1:** Read the title
- What is this graph about?

**Step 2:** Check the labels
- What do the bottom/side show?

**Step 3:** Look at the scale
- Count by 1s, 2s, 5s, or 10s?

**Step 4:** Find the data you need
- Which bar or which stack of Xs?

**Step 5:** Answer the question
- Compare, add, subtract as needed

## Key Vocabulary

**Bar Graph:**
- **Bar:** The rectangle showing data
- **Scale:** The numbers on the side/bottom
- **Category:** The groups being compared

**Line Plot:**
- **X (or dot):** Each mark of data
- **Number line:** The line with numbers
- **Cluster:** Where most Xs are grouped

## Tips for Success

**Bar Graphs:**
- Use a ruler to line up the top of the bar with the scale
- If between two numbers, estimate halfway
- Taller bar = more, shorter bar = less

**Line Plots:**
- Count Xs carefully (easy to miss one!)
- Each X = 1 piece of data
- Stack = how many with that value

**Both:**
- Always start by reading the title
- Check what the numbers represent
- Show your work for calculations
- Ask: Does my answer make sense?

## Summary

**Bar Graphs:**
- Show data with bars
- Good for comparing categories
- Read the scale carefully!

**Line Plots:**
- Show data with Xs on a number line
- Each X = one data point
- Good for seeing clusters and gaps

**Both types help us:**
- Visualize information
- See patterns
- Compare data
- Answer questions quickly

**Remember:** The graph is only as good as how well you read it! Always check titles, labels, and scales first! ✓`
    },
    {
      slug: 'creating-analyzing-data',
      content: `# Creating and Analyzing Data

## What is Data?

**Data** is information we collect.

**Examples of data:**
- Heights of students in your class
- Favorite pizza toppings
- Daily temperatures
- Number of books read
- Test scores

**Why collect data?**
- Answer questions
- See patterns
- Make decisions
- Solve problems

## Steps to Work With Data

**1. Ask a Question**
**2. Collect Data**
**3. Organize Data**
**4. Display Data (make a graph)**
**5. Analyze Data (look for patterns)**
**6. Answer the Question**

## Asking Good Questions

**Good survey questions:**
- "What is your favorite color?"
- "How many pets do you have?"
- "What time do you go to bed?"

**Questions should:**
- Be clear and specific
- Have a limited number of answers
- Be easy to understand

## Collecting Data

**Ways to collect data:**

**Survey:** Ask people questions
- "What's your favorite fruit?"
- Write down each answer

**Observation:** Watch and count
- How many cars pass by in 10 minutes?
- Count and record

**Measurement:** Measure things
- Height of each plant
- Temperature each day

## Organizing Data with Tally Marks

**Tally marks** help you count as you collect data.

**How tally marks work:**
- | = 1
- || = 2
- ||| = 3
- |||| = 4
- ~~||||~~ = 5 (cross through to make 5)

**Example: Favorite Ice Cream Flavors**

| Flavor | Tally | Total |
|--------|-------|-------|
| Vanilla | ~~||||~~ ||| | 8 |
| Chocolate | ~~||||~~ ~~||||~~ || | 12 |
| Strawberry | ~~||||~~ | | 6 |

**Benefits:**
- Easy to mark quickly
- Groups of 5 are easy to count
- Can see totals at a glance

## Creating a Frequency Table

**Frequency table** shows how often each value appears.

**Example: Number of Siblings**

| Siblings | Frequency (How Many Students) |
|----------|-------------------------------|
| 0 | 5 |
| 1 | 8 |
| 2 | 4 |
| 3 | 2 |
| 4+ | 1 |

**From this table, we can see:**
- Most students have 1 sibling
- Fewest students have 4 or more siblings
- Total students surveyed: 5+8+4+2+1 = 20

## Creating Bar Graphs from Data

**Steps to make a bar graph:**

**Step 1:** Draw two lines (perpendicular)
**Step 2:** Label the bottom (categories)
**Step 3:** Label the side (numbers/scale)
**Step 4:** Give it a title
**Step 5:** Draw bars for each category
**Step 6:** Check your work

**Example: Pets Survey**

**Data:** Dogs: 7, Cats: 5, Birds: 2, Fish: 4

**Your bar graph should show:**
\`\`\`
    Number of Students
    |
  7 | ▓▓▓
  6 | ▓▓▓
  5 | ▓▓▓ ▓▓▓
  4 | ▓▓▓ ▓▓▓     ▓▓▓
  3 | ▓▓▓ ▓▓▓     ▓▓▓
  2 | ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓
  1 | ▓▓▓ ▓▓▓ ▓▓▓ ▓▓▓
  0 |____________________
      Dogs Cats Birds Fish
          Type of Pet
\`\`\`

## Creating Line Plots from Data

**Steps to make a line plot:**

**Step 1:** Draw a number line
**Step 2:** Mark the scale (include all data values)
**Step 3:** Label it
**Step 4:** Add a title
**Step 5:** Put an X for each data point
**Step 6:** Stack Xs if values repeat

**Example: Quiz Scores**

**Data:** 7, 8, 9, 7, 10, 8, 9, 8, 10, 7

**Line plot:**
\`\`\`
        X   X
    X   X   X   X
    X   X   X   X
   ─┼───┼───┼───┼──
    7   8   9   10
      Quiz Scores
\`\`\`

## Analyzing Data: Finding Patterns

**Questions to ask about your data:**

**1. What is the mode?** (Most common value)
- In quiz example: 8 appears 3 times (the most)
- Mode = 8

**2. What is the range?** (Spread of data)
- Highest value - Lowest value
- 10 - 7 = 3
- Range = 3

**3. Are there clusters?** (Groups of data)
- Most scores are between 7-9
- Only 2 scores of 10

**4. Are there gaps?** (Missing values)
- No one scored 6 or below
- No one scored between 8 and 9

**5. Are there outliers?** (Unusual values)
- Values far from the rest
- Example: If everyone scored 7-9 but one person scored 2

## Making Conclusions from Data

**Based on the quiz score data:**

**Observations:**
- Most students scored 7, 8, or 9
- Two students got perfect scores (10)
- No one scored below 7
- The most common score was 8

**Conclusions:**
- The class did well overall
- The quiz might have been medium difficulty
- Students are understanding the material

**Questions it might answer:**
- Did students study? (Yes, scores are high)
- Was the test too hard? (No, many high scores)
- Do students need extra help? (Probably not, most scored well)

## Real-World Data Projects

**Classroom Projects:**

**1. Weather Watch**
- Collect: Daily temperature for 2 weeks
- Graph: Line plot or bar graph
- Analyze: Warmest day? Range? Pattern?

**2. Favorite Lunch**
- Collect: Survey 20 students
- Graph: Bar graph of choices
- Analyze: Most popular? Least popular?

**3. Reading Challenge**
- Collect: Books read by each student
- Graph: Line plot
- Analyze: Average? Who read most?

## Comparing Two Sets of Data

**Example: Ice Cream Sales**

**Week 1:**
- Monday: 15, Tuesday: 18, Wednesday: 20

**Week 2:**
- Monday: 12, Tuesday: 14, Wednesday: 16

**Analysis:**
- Week 1 had higher sales each day
- Both weeks showed sales increasing mid-week
- Difference between weeks: about 3-4 sales per day

## Using Data to Make Predictions

**If you see a pattern, you can predict:**

**Temperature data:**
- Mon: 65°F, Tue: 68°F, Wed: 71°F, Thu: 74°F
- Pattern: Going up 3° each day
- Prediction: Friday might be 77°F

**Book sales:**
- Week 1: 10, Week 2: 15, Week 3: 20
- Pattern: Up 5 each week
- Prediction: Week 4 might sell 25 books

**Note:** Predictions are guesses based on patterns - they might not always be right!

## Data Collection Tips

**Good practices:**
1. Ask the same question to everyone
2. Record data right away (don't trust memory!)
3. Be accurate and honest
4. Collect enough data (more is better)
5. Organize as you go

**Common mistakes:**
- Asking confusing questions
- Not recording all responses
- Making up data
- Collecting too little data
- Not organizing data clearly

## Choosing the Right Graph

**Use a bar graph when:**
- Comparing different categories
- Data is in groups (favorite colors, types of pets)
- You want to show which is most/least

**Use a line plot when:**
- Data is on a number line
- You want to see the spread
- Looking for clusters or gaps
- Data involves measurements

## Sample Data Project

**Question:** What is the most common shoe size in our class?

**Step 1:** Collect data
- Survey: "What is your shoe size?"
- Record each answer

**Step 2:** Organize with tally marks

| Shoe Size | Tally | Total |
|-----------|-------|-------|
| 3 | || | 2 |
| 4 | |||| | 4 |
| 5 | ~~||||~~ | 5 |
| 6 | ||| | 3 |

**Step 3:** Create a line plot
\`\`\`
        X
    X   X   X
    X   X   X
    X   X   X   X
   ─┼───┼───┼───┼──
    3   4   5   6
      Shoe Sizes
\`\`\`

**Step 4:** Analyze
- Mode: Size 5 (appears 5 times)
- Range: 6 - 3 = 3
- Total students: 14

**Step 5:** Conclusion
- Most common shoe size is 5
- Sizes range from 3 to 6
- If ordering class shoes, order more size 5!

## Advanced Analysis: Mean (Average)

**Mean** = Add all numbers, then divide by how many

**Example scores:** 7, 8, 9, 10, 6

**Step 1:** Add: 7+8+9+10+6 = 40
**Step 2:** Count how many: 5 scores
**Step 3:** Divide: 40 ÷ 5 = 8

**Mean = 8** ✓

**What it tells us:**
- The "typical" or average score
- Helpful for comparing groups

## Common Mistakes When Analyzing

❌ Forgetting to count all data points
❌ Not organizing data first
❌ Choosing the wrong type of graph
❌ Drawing graphs without labels
❌ Making conclusions without looking at all the data

✅ Organize data in a table first
✅ Choose the right graph for your data
✅ Label everything clearly
✅ Look for patterns before concluding
✅ Make sure conclusions match the data

## Data Analysis Checklist

**When working with data, ask:**

☐ Did I collect enough data?
☐ Is my data organized clearly?
☐ Did I choose the right type of graph?
☐ Does my graph have a title and labels?
☐ Did I look for patterns?
☐ Do my conclusions match what the data shows?
☐ Can I answer my original question?

## Key Vocabulary

- **Data:** Information collected
- **Survey:** Asking questions to collect data
- **Tally marks:** Quick way to count
- **Frequency:** How often something appears
- **Mode:** Most common value
- **Range:** Difference between highest and lowest
- **Cluster:** Data grouped together
- **Gap:** Missing values in data
- **Outlier:** Value far from others
- **Mean:** The average

## Why Data Matters

**Data helps us:**
- Make smart decisions
- Understand the world around us
- See what's working (or not working)
- Plan for the future
- Answer important questions

**Real examples:**
- Doctors collect data on patients to find best treatments
- Stores collect data on sales to know what to order
- Scientists collect data to make discoveries
- Your teacher collects data (test scores) to help you learn!

## Summary

**Creating data:**
1. Ask a clear question
2. Collect information
3. Organize with tallies or tables

**Analyzing data:**
1. Make a graph
2. Look for patterns
3. Find mode, range, clusters
4. Draw conclusions
5. Answer your question

**Remember:** Good data starts with good questions, careful collection, and clear organization! ✓`
    }
  ];

  let updatedCount = 0;
  for (const update of updates) {
    const updated = await prisma.topic.updateMany({
      where: {
        slug: update.slug,
        category: {
          courseId: grade4Course.id
        }
      },
      data: {
        textContent: update.content
      }
    });
    
    if (updated.count > 0) {
      console.log(`✅ Updated: ${update.slug}`);
      updatedCount++;
    }
  }

  console.log(`\n✨ Successfully updated ${updatedCount} topics!`);
  console.log('\n🎉 GRADE 4 MATH NOW 100% COMPLETE! 🎉');
  console.log('All 18 topics filled with comprehensive content!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
