import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Filling Grade 5 Math topics - Batch 3 (3 topics)...\n');

  // Topic 1: Classifying 2D Shapes
  await prisma.topic.updateMany({
    where: {
      slug: 'classifying-2d-shapes'
    },
    data: {
      textContent: `# Classifying 2D Shapes

Welcome to the exciting world of geometry! In this lesson, you'll learn how to identify and classify different two-dimensional shapes based on their properties.

## What Are 2D Shapes?

Two-dimensional (2D) shapes are flat shapes that have only length and width. They exist on a flat surface, like a piece of paper. Every 2D shape is made up of straight lines, curved lines, or both.

## Polygons

A polygon is a closed 2D shape made up of straight line segments. The word "polygon" comes from Greek words meaning "many angles."

### Triangle

A triangle is a polygon with exactly 3 sides and 3 angles. The sum of all angles in any triangle always equals 180 degrees.

**Types of Triangles by Sides:**
- Equilateral Triangle: All 3 sides are equal length, and all 3 angles are 60°
- Isosceles Triangle: Exactly 2 sides are equal length, and 2 angles are equal
- Scalene Triangle: All 3 sides have different lengths, and all 3 angles are different

**Types of Triangles by Angles:**
- Acute Triangle: All 3 angles are less than 90°
- Right Triangle: One angle is exactly 90° (a right angle)
- Obtuse Triangle: One angle is greater than 90°

### Quadrilaterals

A quadrilateral is a polygon with exactly 4 sides and 4 angles. The sum of all angles in any quadrilateral always equals 360 degrees.

**Common Quadrilaterals:**

**Square:**
- All 4 sides are equal length
- All 4 angles are 90° (right angles)
- Opposite sides are parallel
- All sides meet at right angles

**Rectangle:**
- Opposite sides are equal length
- All 4 angles are 90° (right angles)
- Opposite sides are parallel
- Longer sides are called length, shorter sides are called width

**Parallelogram:**
- Opposite sides are equal length and parallel
- Opposite angles are equal
- Adjacent angles add up to 180°

**Rhombus:**
- All 4 sides are equal length
- Opposite sides are parallel
- Opposite angles are equal
- Like a square pushed over to one side

**Trapezoid:**
- Exactly one pair of opposite sides is parallel
- The parallel sides are called bases
- The non-parallel sides are called legs

**Kite:**
- Two pairs of adjacent sides are equal length
- One pair of opposite angles is equal

### Other Polygons

**Pentagon:** A polygon with 5 sides and 5 angles
**Hexagon:** A polygon with 6 sides and 6 angles
**Octagon:** A polygon with 8 sides and 8 angles

**Regular vs. Irregular Polygons:**
- Regular polygon: All sides are equal length and all angles are equal (like a stop sign)
- Irregular polygon: Sides and/or angles are not all equal

## Circles

A circle is a special 2D shape made up of all points that are the same distance from a center point. A circle is NOT a polygon because it has no straight sides.

**Parts of a Circle:**
- Center: The point in the middle
- Radius: The distance from the center to any point on the circle
- Diameter: The distance across the circle through the center (diameter = 2 × radius)
- Circumference: The distance around the circle (the perimeter)

## Properties to Look For

When classifying shapes, ask yourself these questions:

1. **How many sides does it have?** Count the straight edges
2. **Are any sides parallel?** Parallel sides never meet, like railroad tracks
3. **Are any sides equal length?** Look for sides that are the same
4. **What kinds of angles does it have?** Right angles (90°), acute (less than 90°), or obtuse (more than 90°)
5. **Is it a closed shape?** The shape must connect completely with no gaps

## Real-World Examples

- **Triangles:** Yield signs, pizza slices, roof structures, sails on boats
- **Squares:** Window panes, floor tiles, cheese slices, chessboards
- **Rectangles:** Doors, books, phones, computer screens, dollar bills
- **Circles:** Wheels, plates, coins, clocks, pizza
- **Hexagons:** Honeycombs, nuts and bolts, stop signs
- **Octagons:** Stop signs

## Common Mistakes to Avoid

1. **Confusing squares and rectangles:** Remember, all squares are rectangles, but not all rectangles are squares
2. **Counting corners instead of sides:** A shape with 4 corners also has 4 sides
3. **Forgetting that shapes must be closed:** A shape with an open side is not a complete polygon
4. **Thinking all quadrilaterals are the same:** There are many different types of 4-sided shapes
5. **Calling a rhombus a diamond:** In math, we call this shape a rhombus

## Practice Strategy

To master classifying 2D shapes:
- Draw each shape type and label its properties
- Find real-world examples of each shape around your home or classroom
- Practice measuring sides and angles to verify shape properties
- Use a ruler and protractor to create your own shapes
- Sort shape cards into groups by their properties

Understanding how to classify shapes will help you in many areas of math, including area, perimeter, and even advanced geometry!`
    }
  });
  console.log('✅ Updated: classifying-2d-shapes');

  // Topic 2: Coordinate Plane Basics
  await prisma.topic.updateMany({
    where: {
      slug: 'coordinate-plane-basics'
    },
    data: {
      textContent: `# Coordinate Plane Basics

Get ready to explore the coordinate plane! This powerful mathematical tool helps us locate points and graph information using a system of two number lines.

## What Is the Coordinate Plane?

The coordinate plane (also called the Cartesian plane) is formed by two perpendicular number lines that intersect at a point called the origin. It's like a map that helps us find exact locations using numbers.

## Parts of the Coordinate Plane

### The Axes

**X-Axis (Horizontal):**
- The horizontal number line
- Goes left and right
- Positive numbers go to the right of the origin
- Negative numbers go to the left of the origin
- Think of it as the "floor" of the plane

**Y-Axis (Vertical):**
- The vertical number line
- Goes up and down
- Positive numbers go up from the origin
- Negative numbers go down from the origin
- Think of it as the "wall" of the plane

### The Origin

The origin is the point where the x-axis and y-axis meet. It has the coordinates (0, 0). This is our starting point, like "home base" on the coordinate plane.

## Ordered Pairs

We use ordered pairs to describe the location of any point on the coordinate plane. An ordered pair looks like this: (x, y)

**Format:** (x-coordinate, y-coordinate)

The order matters! Always write the x-coordinate first, then the y-coordinate.

**Example:** The point (3, 5) means:
- Move 3 units to the right on the x-axis
- Then move 5 units up on the y-axis

**Remember:** "x comes before y, just like in the alphabet!"

## How to Plot Points

Follow these steps to plot a point on the coordinate plane:

**Step 1:** Start at the origin (0, 0)

**Step 2:** Look at the first number (x-coordinate)
- If positive, move right
- If negative, move left
- If zero, don't move horizontally

**Step 3:** Look at the second number (y-coordinate)
- If positive, move up
- If negative, move down
- If zero, don't move vertically

**Step 4:** Mark the point where you end up

**Example:** Plot the point (4, 2)
- Start at origin (0, 0)
- Move 4 units to the right
- Move 2 units up
- Mark the point

**Example:** Plot the point (-3, 1)
- Start at origin (0, 0)
- Move 3 units to the left (negative x)
- Move 1 unit up
- Mark the point

## The Four Quadrants

The coordinate plane is divided into four sections called quadrants. They are numbered using Roman numerals (I, II, III, IV) and go counterclockwise starting from the top right.

**Quadrant I (top right):**
- Both x and y are positive
- Example: (3, 4)

**Quadrant II (top left):**
- x is negative, y is positive
- Example: (-2, 5)

**Quadrant III (bottom left):**
- Both x and y are negative
- Example: (-4, -3)

**Quadrant IV (bottom right):**
- x is positive, y is negative
- Example: (5, -1)

**Special Note:** Points on the axes are not in any quadrant!
- Points on the x-axis have y = 0, like (3, 0)
- Points on the y-axis have x = 0, like (0, -2)

## Reading Coordinates from a Graph

To find the coordinates of a point already plotted:

**Step 1:** Find where the point is located

**Step 2:** Draw an imaginary line straight down to the x-axis
- The number where this line touches is your x-coordinate

**Step 3:** Draw an imaginary line straight across to the y-axis
- The number where this line touches is your y-coordinate

**Step 4:** Write your answer as an ordered pair (x, y)

## Distance on the Coordinate Plane

You can find distances between points on the coordinate plane:

**Horizontal Distance:**
When two points have the same y-coordinate, they're on the same horizontal line. Subtract the smaller x-coordinate from the larger one.
- Distance between (2, 3) and (7, 3) = 7 - 2 = 5 units

**Vertical Distance:**
When two points have the same x-coordinate, they're on the same vertical line. Subtract the smaller y-coordinate from the larger one.
- Distance between (4, 1) and (4, 6) = 6 - 1 = 5 units

## Real-World Applications

The coordinate plane is used in many real situations:

- **Maps:** GPS coordinates locate any place on Earth
- **Video Games:** Character positions are tracked using coordinates
- **Battleship:** The classic game uses a coordinate system
- **City Planning:** Streets and addresses use coordinate-like systems
- **Graphing Data:** Scientists plot experimental data
- **Architecture:** Blueprints use coordinate systems

## Common Mistakes to Avoid

1. **Switching x and y:** Always put x first! The point (3, 5) is NOT the same as (5, 3)
2. **Forgetting negative signs:** The point (2, -3) is in Quadrant IV, not Quadrant I
3. **Starting from the wrong place:** Always start at the origin (0, 0)
4. **Confusing left/right with up/down:** x goes left and right, y goes up and down
5. **Not labeling points:** Always write the coordinates next to the points you plot

## Memory Tricks

- **"Run before you jump":** Move horizontally (run on x) before moving vertically (jump on y)
- **"x is a cross":** The x-axis goes across (horizontally)
- **Alphabetical order:** x comes before y in the alphabet, just like in coordinates
- **"Along the hall, up the stairs":** Move along the x-axis first, then up the y-axis

## Practice Strategy

To master the coordinate plane:
- Create your own coordinate plane on graph paper
- Plot at least 3 points in each quadrant
- Practice with both positive and negative numbers
- Try plotting shapes (like squares or triangles) using coordinates
- Play coordinate plane games online
- Use coordinates to create pictures by connecting plotted points

The coordinate plane is a fundamental tool in mathematics that you'll use throughout middle school, high school, and beyond. Mastering it now will make algebra and graphing much easier!`
    }
  });
  console.log('✅ Updated: coordinate-plane-basics');

  // Topic 3: Patterns and Relationships
  await prisma.topic.updateMany({
    where: {
      slug: 'patterns-relationships'
    },
    data: {
      textContent: `# Patterns and Relationships

Welcome to the world of patterns! Learning to recognize, describe, and extend patterns is a key skill that helps you think like a mathematician and prepares you for algebra.

## What Is a Pattern?

A pattern is a sequence that follows a rule. Patterns can be found in numbers, shapes, colors, or even sounds. When you can identify the rule, you can predict what comes next.

## Types of Number Patterns

### Repeating Patterns

A repeating pattern is a pattern that repeats the same sequence over and over.

**Example:** 2, 5, 8, 2, 5, 8, 2, 5, 8...
- The pattern 2, 5, 8 repeats
- The next numbers would be 2, 5, 8

### Growing Patterns (Arithmetic Sequences)

A growing pattern increases or decreases by the same amount each time. The amount of change is called the "common difference."

**Example:** 3, 7, 11, 15, 19...
- Each number increases by 4
- The common difference is +4
- The next number would be 19 + 4 = 23

**Example:** 50, 45, 40, 35, 30...
- Each number decreases by 5
- The common difference is -5
- The next number would be 30 - 5 = 25

### Multiplicative Patterns (Geometric Sequences)

A multiplicative pattern changes by multiplying or dividing by the same number each time.

**Example:** 2, 6, 18, 54...
- Each number is multiplied by 3
- The pattern rule is "multiply by 3"
- The next number would be 54 × 3 = 162

**Example:** 80, 40, 20, 10...
- Each number is divided by 2 (or multiplied by 1/2)
- The pattern rule is "divide by 2"
- The next number would be 10 ÷ 2 = 5

## Finding the Pattern Rule

To find the pattern rule, ask yourself these questions:

**Step 1:** How are the numbers changing?
- Are they getting bigger or smaller?
- By how much are they changing?

**Step 2:** Is the change the same each time?
- If yes, it's likely an arithmetic pattern (adding or subtracting)
- If no, check if it's multiplicative (multiplying or dividing)

**Step 3:** Test your rule
- Apply your rule to each number
- If it works for all the numbers, you've found the pattern!

**Example:** Find the rule for 5, 9, 13, 17, 21...
- Each number increases by 4
- Rule: Add 4 to get the next term
- Check: 5 + 4 = 9, 9 + 4 = 13, 13 + 4 = 17 ✓

## Pattern Rules with Variables

We can describe patterns using variables like n to represent the position in the pattern.

**Example:** Pattern is 4, 7, 10, 13, 16...
- Position 1: 4 = 3(1) + 1
- Position 2: 7 = 3(2) + 1
- Position 3: 10 = 3(3) + 1
- Position 4: 13 = 3(4) + 1
- Pattern rule: 3n + 1, where n is the position number

This means for any position n, the value equals 3 times that position plus 1.

To find the 10th term: 3(10) + 1 = 30 + 1 = 31

## Input-Output Tables

Input-output tables (also called function tables) show relationships between two sets of numbers.

Example table showing the relationship "multiply by 4 and add 1":

Input (x) | Output (y)
1         | 5
2         | 9
3         | 13
4         | 17

The rule is: y = 4x + 1
- When x = 1, y = 4(1) + 1 = 5
- When x = 2, y = 4(2) + 1 = 9

## Graphing Patterns

Patterns can be shown on a coordinate plane! Each pair of numbers from an input-output table becomes a point (x, y).

**Example:** For the rule y = 2x + 3
- When x = 0, y = 3 → Plot (0, 3)
- When x = 1, y = 5 → Plot (1, 5)
- When x = 2, y = 7 → Plot (2, 7)
- When x = 3, y = 9 → Plot (3, 9)

When you plot these points and connect them, they form a straight line! This is called a linear relationship.

## Real-World Patterns

Patterns appear everywhere in real life:

**Money:**
- Saving $5 per week: 5, 10, 15, 20, 25...
- Rule: 5n (where n is the number of weeks)

**Age:**
- You are 3 years older than your sister
- If she's 7, you're 10; if she's 8, you're 11
- Rule: Your age = Sister's age + 3

**Distance:**
- A car travels 60 miles per hour
- After 1 hour: 60 miles, after 2 hours: 120 miles, after 3 hours: 180 miles
- Rule: Distance = 60 × hours

**Geometry:**
- Perimeter of squares with different side lengths
- Side 1: Perimeter 4; Side 2: Perimeter 8; Side 3: Perimeter 12
- Rule: Perimeter = 4 × side length

## Extending Patterns

Once you know the rule, you can extend the pattern forward or backward:

**Example:** Pattern is 15, 12, 9, 6...
- Rule: Subtract 3
- Extend forward: 6, 3, 0, -3, -6
- Extend backward: 18, 21, 24

## Common Mistakes to Avoid

1. **Looking at only two terms:** Check the pattern with at least three numbers to be sure of the rule
2. **Assuming all patterns add or subtract:** Some patterns multiply or divide
3. **Forgetting negative numbers:** Patterns can include negatives and zero
4. **Not testing the rule:** Always check that your rule works for ALL numbers in the pattern
5. **Mixing up input and output:** In tables, make sure you know which is x and which is y

## Pattern Recognition Tips

- **Write the differences:** Write the difference between consecutive numbers above them
- **Look for multiplication:** If differences aren't the same, try division or multiplication
- **Use a table:** Organize the information in a table to see relationships
- **Check for special patterns:** Square numbers (1, 4, 9, 16...), powers of 2 (2, 4, 8, 16...)
- **Think about position:** Sometimes the rule relates to the position number

## Advanced Patterns

**Square Numbers:** 1, 4, 9, 16, 25...
- These are 1², 2², 3², 4², 5²
- Rule: n²

**Triangle Numbers:** 1, 3, 6, 10, 15...
- These represent dots in triangular arrangements
- Each term adds the next counting number

**Fibonacci Pattern:** 1, 1, 2, 3, 5, 8, 13...
- Each number is the sum of the two previous numbers
- Found in nature (sunflower seeds, pinecones, shells)

## Practice Strategy

To master patterns and relationships:
- Practice identifying patterns in everyday situations
- Create your own patterns and challenge friends to find the rule
- Use input-output tables to organize pattern information
- Graph patterns on coordinate planes
- Work backward from a rule to create the pattern
- Practice both extending patterns and finding missing terms

Understanding patterns is the foundation for algebra! When you recognize relationships between numbers, you're thinking algebraically and developing problem-solving skills that will help you throughout mathematics.`
    }
  });
  console.log('✅ Updated: patterns-relationships');

  console.log('\n✨ Successfully updated 3 topics!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
