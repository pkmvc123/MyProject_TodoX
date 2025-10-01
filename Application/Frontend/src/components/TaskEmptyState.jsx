import React from "react";
import { Card } from "./ui/card";
import { Circle } from "lucide-react";

const TaskEmptyState = ({ filter }) => {
  return (
    <Card className="p-8 text-center border-0 bg-gradient-card shadow-custom-md">
      <div className="space-y-3">
        <Circle className="mx-auto size-12 text-muted-foreground" />
        <div className="">
          <h3 className="font-medium text-foreground">
            {filter === "pen"
              ? "There are currently no tasks in progress!"
              : filter === "com"
              ? "There are currently no completed tasks!"
              : "No tasks yet!"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {filter === "all"
              ? "Add a task to get started!"
              : `Switch to 'All' to view ${
                  filter === "pen" ? "Pending" : "Completed"
                } Tasks`}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TaskEmptyState;
