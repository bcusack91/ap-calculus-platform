import React from 'react';

interface UnitCirclePosition {
  angle: number;
  x: number;
  y: number;
  label: string;
}

interface CompetitiveUnitCircleProps {
  positions: UnitCirclePosition[];
  onPositionClick: (index: number) => void;
  selectedPosition: number | null;
  correctPosition?: number | null;
  showFeedback?: boolean;
  disabled?: boolean;
}

export default function CompetitiveUnitCircle({
  positions,
  onPositionClick,
  selectedPosition,
  correctPosition,
  showFeedback = false,
  disabled = false,
}: CompetitiveUnitCircleProps) {
  const svgSize = 600;
  const center = svgSize / 2;
  const radius = 220;
  const dotRadius = 18;

  // Convert unit circle coordinates to SVG coordinates
  const toSVG = (x: number, y: number) => ({
    x: center + x * radius,
    y: center - y * radius, // Flip y-axis
  });

  return (
    <svg
      width={svgSize}
      height={svgSize}
      className="mx-auto"
      style={{ maxWidth: '100%', height: 'auto' }}
    >
      {/* Background circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-gray-300 dark:text-gray-600"
      />

      {/* Axes */}
      <line
        x1={center - radius - 20}
        y1={center}
        x2={center + radius + 20}
        y2={center}
        stroke="currentColor"
        strokeWidth="2"
        className="text-gray-400 dark:text-gray-500"
      />
      <line
        x1={center}
        y1={center - radius - 20}
        x2={center}
        y2={center + radius + 20}
        stroke="currentColor"
        strokeWidth="2"
        className="text-gray-400 dark:text-gray-500"
      />

      {/* Axis labels */}
      <text
        x={center + radius + 35}
        y={center + 5}
        className="fill-gray-600 dark:fill-gray-400 text-sm font-semibold"
      >
        x
      </text>
      <text
        x={center - 5}
        y={center - radius - 25}
        className="fill-gray-600 dark:fill-gray-400 text-sm font-semibold"
      >
        y
      </text>

      {/* Clickable positions */}
      {positions.map((pos, index) => {
        const svgPos = toSVG(pos.x, pos.y);
        const isSelected = selectedPosition === index;
        const isCorrect = correctPosition === index;
        const isIncorrect = showFeedback && isSelected && !isCorrect;

        let fillColor = 'rgb(147, 51, 234)'; // purple-600
        let strokeColor = 'rgb(126, 34, 206)'; // purple-700
        let opacity = 0.3;

        if (showFeedback && isCorrect) {
          fillColor = 'rgb(22, 163, 74)'; // green-600
          strokeColor = 'rgb(21, 128, 61)'; // green-700
          opacity = 1;
        } else if (isIncorrect) {
          fillColor = 'rgb(220, 38, 38)'; // red-600
          strokeColor = 'rgb(185, 28, 28)'; // red-700
          opacity = 1;
        } else if (isSelected) {
          opacity = 0.7;
        }

        return (
          <g key={index}>
            {/* Clickable area (larger for easier clicking) */}
            <circle
              cx={svgPos.x}
              cy={svgPos.y}
              r={dotRadius + 10}
              fill="transparent"
              className={disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
              onClick={() => !disabled && onPositionClick(index)}
            />
            
            {/* Visual dot */}
            <circle
              cx={svgPos.x}
              cy={svgPos.y}
              r={dotRadius}
              fill={fillColor}
              stroke={strokeColor}
              strokeWidth="2"
              opacity={opacity}
              className={`transition-all duration-200 ${
                !disabled && !showFeedback ? 'hover:opacity-100 hover:scale-110' : ''
              }`}
              style={{ transformOrigin: `${svgPos.x}px ${svgPos.y}px` }}
            />

            {/* Position number (for debugging, can remove later) */}
            <text
              x={svgPos.x}
              y={svgPos.y + 5}
              textAnchor="middle"
              className="fill-white text-xs font-bold pointer-events-none"
              opacity={opacity}
            >
              {index + 1}
            </text>
          </g>
        );
      })}

      {/* Center dot */}
      <circle
        cx={center}
        cy={center}
        r={4}
        className="fill-gray-800 dark:fill-gray-200"
      />
    </svg>
  );
}
