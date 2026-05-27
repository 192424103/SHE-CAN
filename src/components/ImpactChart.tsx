import React from 'react';
import { statisticsHistory } from '../data';
import { TrendingUp, Award, AwardIcon, GraduationCap, Building } from 'lucide-react';

type MetricType = 'scholars' | 'startups' | 'executivePlacements';

export default function ImpactChart() {
  const [selectedMetric, setSelectedMetric] = React.useState<MetricType>('scholars');
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const getMetricData = () => {
    return statisticsHistory.map((d) => d[selectedMetric]);
  };

  const getMetricLabel = () => {
    switch (selectedMetric) {
      case 'scholars':
        return 'Empowered Scholars Trained';
      case 'startups':
        return 'Female-founded Startups Accelerated';
      case 'executivePlacements':
        return 'Corporate Executive Placements';
    }
  };

  const getMetricColor = () => {
    switch (selectedMetric) {
      case 'scholars':
        return { stroke: '#4f46e5', fill: 'rgba(79, 70, 229, 0.15)', indicator: 'bg-indigo-600' };
      case 'startups':
        return { stroke: '#db2777', fill: 'rgba(219, 39, 119, 0.15)', indicator: 'bg-pink-600' };
      case 'executivePlacements':
        return { stroke: '#059669', fill: 'rgba(5, 150, 105, 0.15)', indicator: 'bg-emerald-600' };
    }
  };

  const data = getMetricData();
  const years = statisticsHistory.map((d) => d.year);
  const color = getMetricColor();

  // SVG dimensions
  const width = 600;
  const height = 280;
  const paddingLeft = 50;
  const paddingRight = 20;
  const paddingTop = 30;
  const paddingBottom = 40;

  // Compute graph bounds
  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;
  const maxVal = Math.max(...data) * 1.15; // padding peak

  // Map coordinates
  const points = data.map((val, idx) => {
    const x = paddingLeft + (idx / (data.length - 1)) * chartWidth;
    const y = height - paddingBottom - (val / maxVal) * chartHeight;
    return { x, y, value: val, year: years[idx] };
  });

  // SVG Polyline / Area path descriptor
  const pathData = points.map((p) => `${p.x},${p.y}`).join(' ');
  const areaPathData = `
    M ${points[0].x},${height - paddingBottom} 
    L ${pathData} 
    L ${points[points.length - 1].x},${height - paddingBottom} Z
  `;

  return (
    <div id="impactDashboard" className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 max-w-4xl mx-auto">
      
      {/* Metrics Header Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
        <div>
          <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            Empowerment Over Time
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            Tracking six years of structured community investments and high-velocity career pipelines.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100/70 p-1.5 rounded-xl border border-slate-200/40">
          <button
            onClick={() => setSelectedMetric('scholars')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
              selectedMetric === 'scholars'
                ? 'bg-indigo-600 text-white shadow'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Scholars
          </button>
          
          <button
            onClick={() => setSelectedMetric('startups')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
              selectedMetric === 'startups'
                ? 'bg-pink-600 text-white shadow'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            Startups
          </button>

          <button
            onClick={() => setSelectedMetric('executivePlacements')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
              selectedMetric === 'executivePlacements'
                ? 'bg-emerald-600 text-white shadow'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            Executive Seats
          </button>
        </div>
      </div>

      {/* SVG Canvas & Chart Area */}
      <div className="relative overflow-x-auto">
        <div className="min-w-[580px] h-[280px]">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full text-slate-300">
            {/* Horizontal Grid Ticks */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
              const yVal = height - paddingBottom - ratio * chartHeight;
              const numericalVal = Math.round(ratio * maxVal);
              return (
                <g key={i} className="opacity-60">
                  <line 
                    x1={paddingLeft} 
                    y1={yVal} 
                    x2={width - paddingRight} 
                    y2={yVal} 
                    stroke="#e2e8f0" 
                    strokeWidth="1" 
                    strokeDasharray="4 4" 
                  />
                  <text 
                    x={paddingLeft - 8} 
                    y={yVal + 4} 
                    textAnchor="end" 
                    className="font-mono text-[10px] fill-slate-500 font-medium"
                  >
                    {numericalVal}
                  </text>
                </g>
              );
            })}

            {/* Area fill */}
            <path d={areaPathData} fill={color.fill} />

            {/* Stroke Line */}
            <polyline 
              fill="none" 
              stroke={color.stroke} 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              points={pathData} 
            />

            {/* Interactive Data Nodes */}
            {points.map((p, idx) => {
              const isHovered = hoveredIndex === idx;
              return (
                <g 
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="cursor-pointer"
                >
                  <circle 
                    cx={p.x} 
                    cy={p.y} 
                    r={isHovered ? 6 : 4} 
                    fill="#ffffff" 
                    stroke={color.stroke} 
                    strokeWidth="2.5" 
                    className="transition-all duration-150"
                  />
                  
                  {/* Subtle invisible click pad to widen hover capture range */}
                  <circle cx={p.x} cy={p.y} r={16} fill="transparent" />

                  {/* Year text Label along the X axis */}
                  <text 
                    x={p.x} 
                    y={height - paddingBottom + 18} 
                    textAnchor="middle" 
                    className={`text-[10px] font-mono tracking-tight transition-colors duration-150 ${
                      isHovered ? 'fill-indigo-600 font-semibold' : 'fill-slate-500'
                    }`}
                  >
                    {p.year}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Interactive Tooltip Card Hover State */}
          {hoveredIndex !== null && points[hoveredIndex] && (
            <div 
              className="absolute bg-slate-900 text-white text-xs px-3.5 py-2.5 rounded-lg shadow-xl border border-slate-700 pointer-events-none flex flex-col gap-0.5"
              style={{
                left: `${(points[hoveredIndex].x / width) * 100}%`,
                top: `${(points[hoveredIndex].y / height) * 100 - 15}%`,
                transform: 'translate(-50%, -100%)',
              }}
            >
              <span className="font-mono text-[10px] text-slate-400">{points[hoveredIndex].year} Cohort</span>
              <span className="font-semibold text-sm">
                {points[hoveredIndex].value.toLocaleString()} {selectedMetric === 'scholars' ? 'Scholars' : selectedMetric === 'startups' ? 'Ventures' : 'Leaders'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Dynamic Summary Card describing current metric */}
      <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-150 flex items-start gap-3">
        <div className={`p-2 rounded-lg text-white ${color.indicator}`}>
          {selectedMetric === 'scholars' ? (
            <GraduationCap className="w-5 h-5" />
          ) : selectedMetric === 'startups' ? (
            <Building className="w-5 h-5" />
          ) : (
            <Award className="w-5 h-5" />
          )}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-800">
            Current Focus: {getMetricLabel()}
          </h4>
          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
            {selectedMetric === 'scholars' &&
              'Our Scholar path provides fully covered technical scholarships, housing equipment, and private study resources to qualified female learners, driving local tech talent parity.'}
            {selectedMetric === 'startups' &&
              'We launch early-stage female entrepreneurs into the venture landscape by giving micro-consultancies, business models mentorship, and active connection to global angel capitals.'}
            {selectedMetric === 'executivePlacements' &&
              'Fulfilling high-impact gender-representation on decision making boards. Empowering mid-tier leaders through strategic management, legal frameworks, and corporate voice skills.'}
          </p>
        </div>
      </div>

    </div>
  );
}
