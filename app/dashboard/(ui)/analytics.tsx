"use client";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Tooltip,
  Cell,
} from "recharts";

export const Analytics = ({ data }: any) => {
  return (
    <div className="container">
      <ResponsiveContainer width="90%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => `${value}`}
          />
          <Bar dataKey="total" fill="#65f544" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const pieAnalyticsData = [
  { name: "Barbeiro", value: 400, color: "#6A5ACD" }, // Roxo
  { name: "Psicólogo", value: 300, color: "#1E90FF" }, // Azul
  { name: "Cabeleireira", value: 300, color: "#FF69B4" }, // Rosa
  { name: "Profissionais de Educação", value: 200, color: "#32CD32" }, // Verde
  { name: "Dentista", value: 250, color: "#FFA500" }, // Laranja
  { name: "Médico", value: 350, color: "#FF6347" }, // Vermelho
  { name: "Personal Trainer", value: 280, color: "#FFD700" }, // Amarelo
  { name: "Nutricionista", value: 270, color: "#008080" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabelPieAnalytics = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      className="text-sm"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieAnalytics() {
  return (
    <ResponsiveContainer width="90%" height={350}>
      <PieChart className="text-sm">
        <Tooltip />
        <Pie
          dataKey="value"
          isAnimationActive
          data={pieAnalyticsData}
          label={renderCustomizedLabelPieAnalytics}
        >
          {pieAnalyticsData.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
