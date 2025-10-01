import React from "react";
import { Badge } from "./ui/badge";
import { FilterType } from "../lib/data";
import { Button } from "./ui/button";
import { Filter } from "lucide-react";

const StatsAndFillters = ({
  filter = "all",
  setFilter,
  statusTaskCount = { pendingCount: 0, completeCount: 0 },
}) => {
  let pendingTaskCount = statusTaskCount.pendingCount;
  let completedTaskCount = statusTaskCount.completeCount;
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div className="flex gap-3">
        <Badge
          variant="secondary"
          className="bg-white text-blue-500 font-bold border-info/20"
        >
          {pendingTaskCount}
          {FilterType.pen}
        </Badge>
        <Badge
          variant="secondary"
          className="bg-white text-success font-bold border-success/20"
        >
          {completedTaskCount}
          {FilterType.com}
        </Badge>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        {Object.keys(FilterType).map((type) => (
          <Button
            key={type}
            variant={filter === type ? "gradient" : "ghost"}
            size="sm"
            className="capitalize"
            onClick={() => setFilter(type)}
          >
            <Filter className="size-4" />
            {FilterType[type]}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StatsAndFillters;
