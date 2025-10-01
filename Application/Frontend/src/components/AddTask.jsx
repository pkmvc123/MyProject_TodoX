import React, { useState } from "react";
import api from "../lib/axios";
import { toast } from "sonner";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const AddTask = ({ addTask }) => {
  const [newTaskTitle, setNewTask] = useState("");

  const handleAdd = async () => {
    if (!newTaskTitle.trim()) return;

    try {
      await api.post("/createTask", {
        title: newTaskTitle,
      });
      addTask(newTaskTitle);
      setNewTask("");
      toast.success("Task created successfully");
    } catch (err) {
      console.error("Create Task Error:", err);
      toast.error("Create Task Error");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="text"
          placeholder="What do you need to do?"
          className="h-12 text-base font-bold text-gray-600 bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/20"
          value={newTaskTitle}
          onChange={(even) => setNewTask(even.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="gradient"
          size="xl"
          className="px-6"
          disabled={!newTaskTitle.trim()}
          onClick={handleAdd}
        >
          <Plus className="size-3" />
          Add Task
        </Button>
      </div>
    </Card>
  );
};

export default AddTask;
