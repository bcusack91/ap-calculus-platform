import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 5 Math topics - Batch 4 (Final 2 topics)...\n');

  // Topic 1: Line Graphs
  await prisma.topic.updateMany({
    where: {
      slug: 'line-graphs'
    },
    data: {
      textContent: `# Line Graphs

Welcome to line graphs! Line graphs are powerful tools that help us visualize data that changes over time. They make it easy to see trends and patterns at a glance.

## What Is a Line Graph?

A line graph is a type of chart that displays information as a series of data points connected by straight line segments. Line graphs are especially useful for showing how something changes over time.

## Parts of a Line Graph

### Title
The title tells you what the graph is about. It should clearly describe the data being shown.

Example: "Temperature in Boston During One Week"

### Horizontal Axis (X-Axis)
- Usually shows the independent variable
- Often represents time (hours, days, weeks, months, years)
- Labeled at the bottom of the graph
- Has evenly spaced intervals

Example: Days of the week (Monday, Tuesday, Wednesday...)

### Vertical Axis (Y-Axis)
- Usually shows the dependent variable
- Represents the quantity being measured
- Labeled on the left side of the graph
- Has evenly spaced intervals with a scale

Example: Temperature in degrees Fahrenheit

### Scale
The scale shows the units and intervals used on each axis. It's important that the intervals are evenly spaced.

Example: Y-axis might go 0, 10, 20, 30, 40... or 0, 5, 10, 15, 20...

### Data Points
Each point on the graph represents one piece of data. The point shows the value at a specific time or category.

### Line Segments
The lines connect the data points in order. They help you see the pattern or trend in the data.

## How to Read a Line Graph

**Step 1: Read the title**
Understand what information the graph shows

**Step 2: Look at the axes**
- Check the x-axis to see what categories or time periods are shown
- Check the y-axis to see what is being measured and the scale

**Step 3: Find a data point**
- Look at a point on the line
- Trace straight down to the x-axis to find the category or time
- Trace straight across to the y-axis to find the value

**Step 4: Look for trends**
- Is the line going up (increasing)?
- Is the line going down (decreasing)?
- Is the line flat (staying the same)?
- Are there any sudden changes?

## Reading Trends and Patterns

**Increasing Trend:**
When the line goes up from left to right, the values are increasing.
Example: A plant's height over several weeks

**Decreasing Trend:**
When the line goes down from left to right, the values are decreasing.
Example: Water level in a pool as it drains

**Constant (No Change):**
When the line is horizontal (flat), the values are staying the same.
Example: Temperature in a room with thermostat set at 70°

**Steep vs. Gradual Changes:**
- A steep line means rapid change (big change in a short time)
- A gradual line means slow change (small change over longer time)

## Creating a Line Graph

Follow these steps to make your own line graph:

**Step 1: Organize your data**
Make a table with two columns: one for time/category and one for the values

Example:
Day | Books Read
Mon | 2
Tue | 3
Wed | 2
Thu | 5
Fri | 6

**Step 2: Draw and label the axes**
- Draw a horizontal line for the x-axis
- Draw a vertical line for the y-axis
- Label each axis with what it represents

**Step 3: Choose a scale**
- Look at your data values
- Choose intervals that will fit all your data
- Make sure intervals are evenly spaced
- The y-axis should start at 0 (unless you have a good reason not to)

**Step 4: Mark the intervals**
Write numbers along each axis at regular intervals

**Step 5: Plot the points**
- For each piece of data, find the correct spot
- Mark it with a dot or small point

**Step 6: Connect the points**
Draw straight lines to connect the points in order from left to right

**Step 7: Add a title**
Write a clear title that describes your graph

## Interpreting Line Graphs

When analyzing a line graph, ask these questions:

**What is the general trend?**
Is the data generally going up, down, or staying the same?

**When did the biggest change happen?**
Look for the steepest part of the line

**When was there no change?**
Look for flat sections of the line

**What are the highest and lowest points?**
These are called the maximum and minimum values

**Are there any unusual points?**
Points that don't fit the pattern might indicate something special happened

## Real-World Examples

Line graphs are used to show:

**Weather:**
- Temperature throughout a day
- Rainfall amounts over a year
- Hours of sunlight during different months

**Business:**
- Store sales over several months
- Number of customers per day
- Website visitors over time

**Science:**
- Plant growth over weeks
- Population of animals over years
- Speed of a moving object

**Personal:**
- Your height as you grow
- Money in your savings account
- Time spent on homework each day

**Sports:**
- Points scored per game over a season
- Running times improving with practice

## Comparing Multiple Line Graphs

Sometimes you'll see more than one line on a graph. This lets you compare two sets of data.

Example: A graph showing temperature for both Boston and Miami over one week
- One line for Boston (maybe blue)
- One line for Miami (maybe red)
- You can compare which city was warmer on each day

Make sure to include a legend (key) that shows what each line represents!

## Common Mistakes to Avoid

1. **Not using evenly spaced intervals:** The scale must have equal spacing (like 0, 10, 20, 30... not 0, 5, 15, 40)

2. **Forgetting to label axes:** Always label what each axis represents and include units

3. **Plotting points incorrectly:** Make sure you match the x and y values correctly

4. **Connecting points out of order:** Always connect points from left to right in time order

5. **Making the y-axis too short or too tall:** Choose a scale that shows all your data clearly

6. **Forgetting the title:** Every graph needs a descriptive title

7. **Not starting at zero:** Usually the y-axis should start at 0 (though there are exceptions)

## Tips for Success

**When reading a line graph:**
- Always start by reading the title and axis labels
- Use your finger to trace from a point to both axes
- Look at the overall shape of the line to identify trends
- Pay attention to steep sections (rapid change) vs. flat sections (no change)

**When creating a line graph:**
- Use graph paper or a ruler to keep lines straight
- Choose a scale that fits all your data comfortably
- Plot points carefully and double-check before connecting
- Use different colors for multiple lines
- Make your graph neat and easy to read

## Line Graphs vs. Other Graph Types

**Line Graph:** Best for showing change over time
**Bar Graph:** Best for comparing different categories
**Pie Chart:** Best for showing parts of a whole
**Pictograph:** Uses pictures to represent data

Choose a line graph when you want to show trends and how data changes continuously!

## Practice Strategy

To master line graphs:
- Collect your own data over time (temperature each day, pages read, time spent exercising)
- Create a line graph from your data
- Find line graphs in newspapers or online and practice reading them
- Compare two related sets of data on one graph
- Practice identifying increasing, decreasing, and constant sections
- Look for real-world examples of line graphs in weather reports, sports statistics, and news articles

Understanding line graphs helps you make sense of data in the world around you. This skill will be valuable in science, social studies, math, and everyday life!`
    }
  });
  console.log('✅ Updated: line-graphs');

  // Topic 2: Measures of Center
  await prisma.topic.updateMany({
    where: {
      slug: 'measures-of-center'
    },
    data: {
      textContent: `# Measures of Center

Welcome to measures of center! These important statistics help us describe a set of data with a single representative number. They answer the question: "What's typical for this data?"

## What Are Measures of Center?

Measures of center (also called measures of central tendency) are single numbers that represent the "middle" or "typical" value in a data set. The three main measures of center are mean, median, and mode.

## Mean (Average)

The mean is what most people call the "average." It's the sum of all the values divided by how many values there are.

### How to Find the Mean

**Step 1:** Add up all the numbers in the data set

**Step 2:** Count how many numbers there are

**Step 3:** Divide the sum by the count

**Formula:** Mean = Sum of all values ÷ Number of values

### Example 1: Finding the Mean

Test scores: 85, 90, 78, 92, 85

Step 1: Add all the scores
85 + 90 + 78 + 92 + 85 = 430

Step 2: Count the scores
There are 5 scores

Step 3: Divide
430 ÷ 5 = 86

**The mean is 86**

### Example 2: Mean with Different Values

Hours of sleep: 8, 7, 9, 7, 8, 6, 9

Sum: 8 + 7 + 9 + 7 + 8 + 6 + 9 = 54
Count: 7 nights
Mean: 54 ÷ 7 = 7.71 hours (about 7.7 hours)

### When to Use Mean

The mean is useful when:
- You want to know the typical value across all data points
- The data doesn't have extreme outliers
- You need to consider every value in the data set

## Median (Middle Value)

The median is the middle number when the data is arranged in order from least to greatest.

### How to Find the Median

**Step 1:** Arrange all numbers in order from smallest to largest

**Step 2:** Find the middle number
- If there's an odd number of values, the median is the middle one
- If there's an even number of values, the median is the average of the two middle numbers

### Example 1: Odd Number of Values

Ages: 12, 15, 13, 14, 11

Step 1: Put in order
11, 12, 13, 14, 15

Step 2: Find the middle
11, 12, **13**, 14, 15

**The median is 13** (the 3rd value out of 5)

### Example 2: Even Number of Values

Prices: 5, 8, 6, 9, 7, 10

Step 1: Put in order
5, 6, 7, 8, 9, 10

Step 2: Find the two middle numbers
5, 6, **7, 8**, 9, 10

Step 3: Average the two middle numbers
(7 + 8) ÷ 2 = 15 ÷ 2 = 7.5

**The median is 7.5**

### When to Use Median

The median is useful when:
- The data has outliers (extreme values)
- You want a measure that isn't affected by very high or very low values
- You need to find the exact middle of the data

## Mode (Most Frequent)

The mode is the number that appears most often in a data set.

### How to Find the Mode

**Step 1:** Look at all the numbers

**Step 2:** Count how many times each number appears

**Step 3:** The number that appears most frequently is the mode

### Example 1: One Mode

Shoe sizes: 7, 8, 7, 9, 7, 6, 8

Count each size:
- Size 6: appears 1 time
- Size 7: appears 3 times ← Most frequent
- Size 8: appears 2 times
- Size 9: appears 1 time

**The mode is 7**

### Example 2: Multiple Modes (Bimodal)

Test scores: 85, 90, 85, 78, 90, 88

Count each score:
- 78: appears 1 time
- 85: appears 2 times ← Tied for most
- 88: appears 1 time
- 90: appears 2 times ← Tied for most

**The modes are 85 and 90** (this is called bimodal)

### Example 3: No Mode

Numbers: 5, 7, 9, 11, 13

Each number appears only once, so there is **no mode**.

### When to Use Mode

The mode is useful when:
- You want to know what's most common
- You're working with categories (like favorite colors)
- You want a measure that's actually in the data set

## Comparing Mean, Median, and Mode

Let's look at the same data set with all three measures:

**Data:** 5, 7, 8, 8, 10, 12, 35

**Mean:**
Sum = 5 + 7 + 8 + 8 + 10 + 12 + 35 = 85
Count = 7
Mean = 85 ÷ 7 ≈ 12.14

**Median:**
Data is already in order: 5, 7, 8, **8**, 10, 12, 35
Median = 8 (middle value)

**Mode:**
8 appears twice, all others appear once
Mode = 8

**Notice:** The mean (12.14) is much higher than the median (8) because of the outlier 35. The median and mode give a better sense of the "typical" value in this case.

## Outliers and Their Effect

An **outlier** is a value that is much higher or much lower than the other values in the data set.

**Example:** Test scores are 85, 88, 90, 87, 89, 20

The score of 20 is an outlier (much lower than the others).

**Effect on measures:**
- **Mean:** Very affected by outliers (pulls the average down)
- **Median:** Not much affected by outliers
- **Mode:** Not affected by outliers (unless the outlier appears most often)

## Real-World Applications

**Mean:**
- Calculating your grade point average
- Finding average temperature for a month
- Determining average points per game in sports

**Median:**
- Median home prices (because a few very expensive homes can skew the mean)
- Median income (better than mean when there are very wealthy outliers)
- Median age in a population

**Mode:**
- Most popular shoe size to stock in a store
- Most common favorite color in a class
- Most frequent number of siblings

## Choosing the Right Measure

**Use the mean when:**
- Data is fairly evenly distributed
- No extreme outliers exist
- You need to use all the data values

**Use the median when:**
- Data has outliers
- You want the true middle value
- Data is skewed (lopsided)

**Use the mode when:**
- You want to know what's most common
- Working with categories or non-numerical data
- You need a value that actually appears in the data

## Common Mistakes to Avoid

1. **Forgetting to order the data for median:** Always arrange from least to greatest first

2. **Dividing by the wrong number for mean:** Count the values carefully

3. **Not averaging the two middle numbers:** When there's an even number of values, you must average the two middle ones for median

4. **Calling the mode the middle number:** Mode is most frequent, not the middle

5. **Rounding too early:** Keep extra decimal places in your work and round only at the end

6. **Using mean when outliers exist:** Consider median instead when you have extreme values

## Practice Tips

To master measures of center:

**For Mean:**
- Practice with different sized data sets
- Use a calculator for larger numbers
- Check your work by estimating (should be between the smallest and largest values)

**For Median:**
- Always write the numbers in order first
- Use your finger to cross off numbers from both ends until you reach the middle
- Remember to average the two middle numbers for even-sized data sets

**For Mode:**
- Make a tally chart to count frequencies
- Remember a data set can have 0, 1, or more modes
- When graphing, the mode is the tallest bar or highest point

## Advanced Concepts

**Range:** The difference between the highest and lowest values
- Tells you how spread out the data is
- Range = Maximum - Minimum

**Using all three together:**
- If mean, median, and mode are close together, the data is fairly symmetric
- If they're far apart, the data may be skewed or have outliers
- Comparing all three gives the most complete picture

## Data Sets Practice

Try finding mean, median, and mode for these:

**Set 1:** 10, 15, 12, 18, 15, 20, 15
- Mean = (10+15+12+18+15+20+15) ÷ 7 = 105 ÷ 7 = 15
- Median = 10, 12, **15**, 15, 15, 18, 20 → 15
- Mode = 15 (appears 3 times)

**Set 2:** 5, 8, 12, 15, 20, 100
- Mean = (5+8+12+15+20+100) ÷ 6 = 160 ÷ 6 ≈ 26.67
- Median = 5, 8, **12, 15**, 20, 100 → (12+15)÷2 = 13.5
- Mode = No mode (all appear once)

Notice how the outlier (100) affects the mean much more than the median!

Understanding measures of center helps you describe data accurately, make predictions, and understand statistics you encounter in news, sports, and everyday life. These skills form the foundation for more advanced statistics in middle school and beyond!`
    }
  });
  console.log('✅ Updated: measures-of-center');

  console.log('\n✨ Successfully updated final 2 topics!');
  console.log('\n🎉 Grade 5 Math content filling COMPLETE! All 18 topics now have comprehensive content.');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
