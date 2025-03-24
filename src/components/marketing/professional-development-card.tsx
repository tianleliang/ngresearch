"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, Line, LineChart, ResponsiveContainer } from "recharts"


import { Card, CardContent } from "@/components/ui/card"

// Generate different data patterns for multiple charts
const generateSmoothData = (count: number, baseValue: number, variance: number) => {
  let lastValue = baseValue + Math.random() * variance
  return Array.from({ length: count }, (_, i) => {
    lastValue = Math.max(
      baseValue - variance,
      Math.min(baseValue + variance, lastValue + (Math.random() * (variance / 2) - variance / 4)),
    )
    return {
      value: lastValue,
      index: i,
    }
  })
}

// Research skills and terms - arranged in a grid
const researchSkills = [
  "Data Analysis",
  "Literature Review",
  "Methodology",
  "Critical Thinking",
  "Statistical Analysis",
  "Academic Writing",
  "Research Design",
  "Hypothesis Testing",
  "Qualitative Methods",
  "Quantitative Methods",
  "Peer Review",
  "Case Study",
  "Ethnography",
  "Meta-Analysis",
  "Sampling",
]

export default function ProfessionalDevelopmentCard() {
  // Multiple data sets for different chart areas
  const [topData, setTopData] = useState(generateSmoothData(30, 70, 20))
  const [middleData, setMiddleData] = useState(generateSmoothData(30, 50, 15))
  const [bottomData, setBottomData] = useState(generateSmoothData(30, 30, 10))

  // Update each data set with different intervals
  useEffect(() => {
    const topInterval = setInterval(() => {
      setTopData((prev) => {
        const lastValue = prev[prev.length - 1].value
        const newValue = Math.max(50, Math.min(90, lastValue + (Math.random() * 8 - 4)))
        return [...prev.slice(1), { value: newValue, index: prev[prev.length - 1].index + 1 }]
      })
    }, 3500)

    const middleInterval = setInterval(() => {
      setMiddleData((prev) => {
        const lastValue = prev[prev.length - 1].value
        const newValue = Math.max(35, Math.min(65, lastValue + (Math.random() * 6 - 3)))
        return [...prev.slice(1), { value: newValue, index: prev[prev.length - 1].index + 1 }]
      })
    }, 2800)

    const bottomInterval = setInterval(() => {
      setBottomData((prev) => {
        const lastValue = prev[prev.length - 1].value
        const newValue = Math.max(20, Math.min(40, lastValue + (Math.random() * 4 - 2)))
        return [...prev.slice(1), { value: newValue, index: prev[prev.length - 1].index + 1 }]
      })
    }, 4200)

    return () => {
      clearInterval(topInterval)
      clearInterval(middleInterval)
      clearInterval(bottomInterval)
    }
  }, [])

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="relative overflow-hidden bg-[#121026] border-0 text-white">
        {/* Multiple background graphs in different areas */}
        <div className="absolute inset-x-0 top-0 h-1/3 opacity-15">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={topData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="topGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9580FF" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#9580FF" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#9580FF"
                strokeWidth={1.5}
                fillOpacity={0.8}
                fill="url(#topGradient)"
                isAnimationActive={true}
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="absolute inset-x-0 top-1/3 h-1/3 opacity-12">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={middleData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#b68bff"
                strokeWidth={1.5}
                dot={false}
                isAnimationActive={true}
                animationDuration={1800}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1/3 opacity-10">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={bottomData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="bottomGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d4a7ff" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#d4a7ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#d4a7ff"
                strokeWidth={1}
                fillOpacity={0.6}
                fill="url(#bottomGradient)"
                isAnimationActive={true}
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Research skills in background - evenly distributed */}
        <div className="absolute inset-0 opacity-8">
          <div className="grid grid-cols-3 gap-x-4 gap-y-8 h-full w-full p-8">
            {researchSkills.map((skill, i) => (
              <div key={i} className="flex items-center justify-center">
                <span className="text-xs font-light tracking-wide opacity-20">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <CardContent className="relative z-10 flex flex-col items-center justify-center p-8 h-40">
          
         
        </CardContent>
      </Card>
    </div>
  )
}

