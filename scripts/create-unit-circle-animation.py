#!/usr/bin/env python3
"""
Unit Circle Animation using Manim-GL
Creates a GIF showing the first quadrant of the unit circle with values populating sequentially
"""

from manimlib import *
import numpy as np

class UnitCircleAnimation(Scene):
    def construct(self):
        # Set up the coordinate system
        plane = NumberPlane(
            x_range=[-1.5, 1.5, 0.5],
            y_range=[-1.5, 1.5, 0.5],
            background_line_style={
                "stroke_color": GREY_B,
                "stroke_width": 1,
                "stroke_opacity": 0.3,
            },
            axis_config={
                "stroke_color": GREY_A,
                "stroke_width": 2,
            },
        )
        
        # Add axis labels
        x_label = Tex("x").next_to(plane.x_axis.get_right(), RIGHT)
        y_label = Tex("y").next_to(plane.y_axis.get_top(), UP)
        
        # Show coordinate system
        self.play(
            Write(plane),
            Write(x_label),
            Write(y_label),
            run_time=1.5
        )
        self.wait(0.5)
        
        # Draw the unit circle
        circle = Circle(
            radius=2,  # Manim units (scaled to represent radius 1)
            color=PURPLE,
            stroke_width=4
        )
        
        self.play(Create(circle), run_time=2)
        self.wait(0.5)
        
        # Add center point
        center_dot = Dot(ORIGIN, color=GREY)
        origin_label = Tex("(0, 0)", font_size=24).next_to(center_dot, DOWN + RIGHT, buff=0.1)
        self.play(
            FadeIn(center_dot),
            Write(origin_label)
        )
        self.wait(0.5)
        
        # Zoom into first quadrant
        self.play(
            plane.animate.scale(2).shift(LEFT * 2 + DOWN * 2),
            circle.animate.scale(2).shift(LEFT * 2 + DOWN * 2),
            center_dot.animate.scale(2).shift(LEFT * 2 + DOWN * 2),
            origin_label.animate.scale(1.5).shift(LEFT * 2 + DOWN * 2),
            x_label.animate.scale(1.5).shift(LEFT * 4 + DOWN * 4),
            y_label.animate.scale(1.5).shift(LEFT * 4 + DOWN * 4),
            run_time=2
        )
        self.wait(0.5)
        
        # Define the angles and their positions
        angles_deg = [0, 30, 45, 60, 90]
        angles_rad = [0, PI/6, PI/4, PI/3, PI/2]
        
        # Calculate positions (scaled to Manim coordinates)
        # For radius = 2 in Manim units (representing radius 1 mathematically)
        radius = 2
        
        positions = []
        for angle in angles_rad:
            x = radius * np.cos(angle)
            y = radius * np.sin(angle)
            # Apply the same transformation as the zoom
            x_transformed = (x * 2) + (-2)
            y_transformed = (y * 2) + (-2)
            positions.append([x_transformed, y_transformed, 0])
        
        # Create angle labels and dots
        angle_labels = []
        angle_dots = []
        
        for i, (deg, pos) in enumerate(zip(angles_deg, positions)):
            # Create dot at the position
            dot = Dot(pos, color=GREEN, radius=0.08)
            
            # Create angle label
            if deg == 0:
                label = Tex(f"{deg}°", font_size=28, color=GREEN)
                label.next_to(dot, RIGHT + DOWN, buff=0.15)
            elif deg == 90:
                label = Tex(f"{deg}°", font_size=28, color=GREEN)
                label.next_to(dot, UP + LEFT, buff=0.15)
            else:
                label = Tex(f"{deg}°", font_size=28, color=GREEN)
                label.next_to(dot, UP + RIGHT, buff=0.15)
            
            angle_dots.append(dot)
            angle_labels.append(label)
        
        # Animate angles appearing sequentially
        for dot, label in zip(angle_dots, angle_labels):
            self.play(
                FadeIn(dot),
                Write(label),
                run_time=0.6
            )
            self.wait(0.3)
        
        self.wait(0.5)
        
        # Create coordinate labels for (1, 0) and (0, 1)
        coord_10 = Tex("(1, 0)", font_size=26, color=YELLOW).next_to(positions[0], RIGHT, buff=0.2)
        coord_01 = Tex("(0, 1)", font_size=26, color=YELLOW).next_to(positions[4], UP, buff=0.2)
        
        # Fade in the endpoint coordinates
        self.play(Write(coord_10), run_time=0.8)
        self.wait(0.3)
        self.play(Write(coord_01), run_time=0.8)
        self.wait(0.5)
        
        # Now show the middle coordinates
        # 30° = (√3/2, 1/2)
        # 45° = (√2/2, √2/2)
        # 60° = (1/2, √3/2)
        
        middle_coords = [
            Tex(r"$\left(\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$", font_size=24, color=BLUE),
            Tex(r"$\left(\frac{\sqrt{2}}{2}, \frac{\sqrt{2}}{2}\right)$", font_size=24, color=BLUE),
            Tex(r"$\left(\frac{1}{2}, \frac{\sqrt{3}}{2}\right)$", font_size=24, color=BLUE),
        ]
        
        # Position the coordinate labels
        middle_coords[0].next_to(positions[1], RIGHT + UP, buff=0.1)  # 30°
        middle_coords[1].next_to(positions[2], UP + LEFT, buff=0.1)   # 45°
        middle_coords[2].next_to(positions[3], LEFT + UP, buff=0.1)   # 60°
        
        # Show x-values first (cos values)
        x_coords = [
            Tex(r"$x = \frac{\sqrt{3}}{2}$", font_size=22, color=ORANGE).move_to(middle_coords[0].get_center() + UP * 0.3),
            Tex(r"$x = \frac{\sqrt{2}}{2}$", font_size=22, color=ORANGE).move_to(middle_coords[1].get_center() + UP * 0.3),
            Tex(r"$x = \frac{1}{2}$", font_size=22, color=ORANGE).move_to(middle_coords[2].get_center() + UP * 0.3),
        ]
        
        for x_coord in x_coords:
            self.play(FadeIn(x_coord), run_time=0.6)
            self.wait(0.3)
        
        self.wait(0.5)
        
        # Show y-values (sin values)
        y_coords = [
            Tex(r"$y = \frac{1}{2}$", font_size=22, color=RED).move_to(middle_coords[0].get_center() + DOWN * 0.3),
            Tex(r"$y = \frac{\sqrt{2}}{2}$", font_size=22, color=RED).move_to(middle_coords[1].get_center() + DOWN * 0.3),
            Tex(r"$y = \frac{\sqrt{3}}{2}$", font_size=22, color=RED).move_to(middle_coords[2].get_center() + DOWN * 0.3),
        ]
        
        for y_coord in y_coords:
            self.play(FadeIn(y_coord), run_time=0.6)
            self.wait(0.3)
        
        self.wait(0.5)
        
        # Replace x and y labels with full coordinates
        self.play(
            *[FadeOut(x) for x in x_coords],
            *[FadeOut(y) for y in y_coords],
            run_time=0.5
        )
        
        for coord in middle_coords:
            self.play(Write(coord), run_time=0.7)
            self.wait(0.3)
        
        # Hold the final frame
        self.wait(2)
        
        # Fade out everything for loop
        self.play(
            *[FadeOut(mob) for mob in self.mobjects],
            run_time=1
        )
        self.wait(0.5)


if __name__ == "__main__":
    # This allows running the script directly
    # Command: manimgl create-unit-circle-animation.py UnitCircleAnimation
    pass
