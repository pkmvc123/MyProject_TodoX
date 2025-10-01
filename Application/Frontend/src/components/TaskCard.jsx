import React, { useState, useRef, useEffect } from "react";
import api from "../lib/axios";

import { toast } from "sonner";
import { Card } from "./ui/card";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
  Calendar,
  CheckCircle2,
  Circle,
  SquarePen,
  Trash2,
} from "lucide-react";
import { Input } from "./ui/input";

const TaskCard = ({ task, index, handleTaskChange }) => {
  const [isEditting, setIsEditting] = useState(false);
  const [updateTaskTitle, setUpdateTaskTitle] = useState(task.task_title || "");

  const editInputRef = useRef(null);
  const editButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isEditting &&
        editInputRef.current &&
        !editInputRef.current.contains(event.target) &&
        editButtonRef.current &&
        !editButtonRef.current.contains(event.target)
      ) {
        setIsEditting(false);
        setUpdateTaskTitle(task.task_title);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditting, task.task_title]);

  const deleteTask = async () => {
    try {
      await api.delete(`/deleteTask/${task.task_id}`);
      toast.success("Delete Task Successfully");
      handleTaskChange();
    } catch (err) {
      console.error("Create Task Error:", err);
      toast.error("Delete Task Error");
    }
  };

  const upTaskTitle = async () => {
    try {
      setIsEditting(false);
      await api.put(`/updateTask/${task.task_id}`, {
        title: updateTaskTitle,
      });
      toast.success("Update Title Task Successfully");
      handleTaskChange();
    } catch (err) {
      console.error("Update Title Task Error:", err);
      toast.error("Update Title Task Error");
    }
  };

  const upTaskStatus = async () => {
    try {
      const newStatus = task.task_status === "com" ? "pen" : "com";
      setIsEditting(false);
      await api.put(`/updateTask/${task.task_id}`, {
        title: updateTaskTitle,
        status: newStatus,
      });
      toast.success("Update Status Task Successfully");
      handleTaskChange();
    } catch (err) {
      console.error("Update Status Task Error:", err);
      toast.error("Update Status Task Error");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      upTaskTitle();
    }
  };

  return (
    <Card
      className={cn(
        "p-4 bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-200 animate-fade-in group",
        task.task_status === "com" && "opacity-75"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "flex-shrink-0 size-8 rounded-full transition-all duration-200",
            task.task_status === "com"
              ? "text-success hover:text-success/80"
              : "text-muted-foreground"
          )}
          onClick={upTaskStatus}
        >
          {task.task_status === "com" ? (
            <CheckCircle2 className="size-5" />
          ) : (
            <Circle className="size-5" />
          )}
        </Button>

        <div className="flex-1 min-w-0">
          {isEditting ? (
            <Input
              ref={editInputRef}
              placeholder="Input My Task"
              type="text"
              className="flex-1 h-12 text-base border-border/50 focus:border-primary/50 focus:ring-primary/20"
              value={updateTaskTitle}
              onChange={(event) => setUpdateTaskTitle(event.target.value)}
              onKeyPress={handleKeyPress}
              autoFocus
            />
          ) : (
            <p
              className={cn(
                "text-base transition-all duration-200",
                task.task_status === "com"
                  ? "line-through text-muted-foreground"
                  : "text-foreground"
              )}
            >
              {task.task_title}
            </p>
          )}
          <div className="flex items-center gap-2 mt-1">
            <Calendar className="size-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {new Date(task.task_createdAt).toLocaleString()}
            </span>
            {task.task_completedAt && (
              <>
                <span className="text-xs text-muted-foreground"> - </span>
                <Calendar className="size-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {new Date(task.task_completedAt).toLocaleString()}
                </span>
              </>
            )}
          </div>
        </div>

        <div className="hidden gap-2 group-hover:inline-flex animate-slide-up">
          <Button
            ref={editButtonRef}
            variant="ghost"
            size="icon"
            className="flex-shrink-0 transition-colors size-8 text-muted-foreground hover:text-info"
            onClick={() => {
              setIsEditting(true);
              setUpdateTaskTitle(task.task_title || "");
            }}
          >
            <SquarePen className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="flex-shrink-0 transition-colors size-8 text-muted-foreground hover:text-info"
            onClick={() => deleteTask()}
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
