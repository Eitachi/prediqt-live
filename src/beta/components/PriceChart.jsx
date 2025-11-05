import { LineChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import './PriceChart.css'

const PriceChart = ({ data, timeRange }) => {
  // Format data for the chart
  const chartData = data.map((item, index) => ({
    date: item.date,
    yes: item.yes,
    no: item.no,
    label: item.label
  }))

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="chart-tooltip">
          <p className="tooltip-date">{payload[0].payload.label}</p>
          <div className="tooltip-values">
            <div className="tooltip-item yes">
              <span className="tooltip-label">YES</span>
              <span className="tooltip-value">{payload[0].value.toFixed(1)}%</span>
            </div>
            <div className="tooltip-item no">
              <span className="tooltip-label">NO</span>
              <span className="tooltip-value">{payload[1].value.toFixed(1)}%</span>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="price-chart-wrapper">
      <ResponsiveContainer width="100%" height={320}>
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 10, left: 0, bottom: 30 }}
        >
          <defs>
            <linearGradient id="yesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="noGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ef4444" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#ef4444" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="var(--border-color, #e5e7eb)"
            vertical={false}
          />
          <XAxis 
            dataKey="date"
            tick={{ fontSize: 11, fill: 'var(--text-secondary, #6b7280)' }}
            tickLine={false}
            axisLine={false}
            interval="preserveStartEnd"
            minTickGap={30}
          />
          <YAxis 
            domain={[0, 100]}
            tick={{ fontSize: 12, fill: 'var(--text-secondary, #6b7280)' }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <ReferenceLine y={50} stroke="var(--border-color, #e5e7eb)" strokeDasharray="2 2" opacity={0.5} />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="basis"
            dataKey="yes"
            fill="url(#yesGradient)"
            stroke="none"
          />
          <Area
            type="basis"
            dataKey="no"
            fill="url(#noGradient)"
            stroke="none"
          />
          <Line
            type="basis"
            dataKey="yes"
            stroke="#22c55e"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, fill: '#22c55e', strokeWidth: 2, stroke: '#ffffff' }}
          />
          <Line
            type="basis"
            dataKey="no"
            stroke="#ef4444"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, fill: '#ef4444', strokeWidth: 2, stroke: '#ffffff' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PriceChart

