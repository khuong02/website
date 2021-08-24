import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(2)}%`}
    </text>
  );
};

const DashboardHeader = ({ item, totalQuantity }) => {
  return (
    <div className="__header-item">
      <ResponsiveContainer width="100%" height="95%" className="charts">
        <PieChart width="80%" height="80%">
          <Pie
            data={[
              { name: item.country, value: item.quantity },
              {
                name: "total",
                value: totalQuantity - item.quantity,
              },
            ]}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {[item].map((entry, index) => (
              <Cell key={`cell-${index}`} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="note">
        <div className="__note">
          <div style={{ background: item.color }}></div>:country
        </div>
        <div className="__note">
          <div></div>:total
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
