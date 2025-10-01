import { toast } from "sonner";
import api from "../lib/axios";

import AddTask from "../components/AddTask";
import DateTimeFillter from "../components/DateTimeFillter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StatsAndFillters from "../components/StatsAndFillters";
import TaskList from "../components/TaskList";
import TaskListPagination from "../components/TaskListPagination";
import { useCallback, useEffect, useState } from "react";

import { visibleTaskLimit } from "../lib/data";

const HomePage = () => {
  const [taskBuffer, setTaskBuffer] = useState([]);
  const [statusTaskCount, setStatusTaskCount] = useState([]);
  const [filter, setFilter] = useState("all");
  const [dateQuery, setDateQuery] = useState("today");
  const [pagination, setPagination] = useState(1);

  const fetchTask = useCallback(async () => {
    try {
      const res = await api.get(`/getTask?filter=${dateQuery}`);
      setTaskBuffer(res.data.tasks);
      setStatusTaskCount(res.data.counts);
    } catch (err) {
      console.log("Query Task Error:", err);
      toast.error("Query Task Error");
    }
  }, [dateQuery]);

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  useEffect(() => {
    setPagination(1);
  }, [filter, dateQuery]);

  const filteredTask = taskBuffer.filter((task) => {
    switch (filter) {
      case "pen":
        return task.task_status === "pen";
      case "com":
        return task.task_status === "com";
      default:
        return true;
    }
  });

  const addTask = (title) => {
    const newTaskItem = {
      task_id: crypto.randomUUID(),
      task_title: title,
      task_status: "pen",
      task_createdAt: new Date().toISOString(),
      task_completedAt: null,
    };

    setTaskBuffer([newTaskItem, ...taskBuffer]);
  };

  const handleTaskChange = () => {
    fetchTask();
  };

  const handleNext = () => {
    if (pagination < totalPaginations) {
      setPagination((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (pagination > 1) {
      setPagination((prev) => prev - 1);
    }
  };

  const handlePagiChange = (newPagi) => {
    setPagination(newPagi);
  };

  const visibleTasks = filteredTask.slice(
    (pagination - 1) * visibleTaskLimit,
    pagination * visibleTaskLimit
  );

  if (visibleTasks.length === 0) {
    handlePrev();
  }

  const totalPaginations = Math.ceil(filteredTask.length / visibleTaskLimit);

  return (
    <div className="min-h-screen w-full bg-black relative">
      {/* Vercel Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Your Content/Components */}
      <div>
        <div className="container pt-8 mx-auto relative z-10">
          <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
            {/* Header */}
            <Header />
            {/* Create Task */}
            <AddTask addTask={addTask} />
            {/* Stats and Fillter */}
            <StatsAndFillters
              filter={filter}
              setFilter={setFilter}
              statusTaskCount={statusTaskCount}
            />
            {/* Task List */}
            <TaskList
              filteredTasks={visibleTasks}
              filter={filter}
              handleTaskChange={handleTaskChange}
            />
            {/* Pagination and Filter bt Date */}
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <TaskListPagination
                handleNext={handleNext}
                handlePrev={handlePrev}
                handlePagiChange={handlePagiChange}
                totalPaginations={totalPaginations}
                pagination={pagination}
              />
              <DateTimeFillter
                dateQuery={dateQuery}
                setDateQuery={setDateQuery}
              />
            </div>
            {/* Footer */}
            <Footer statusTaskCount={statusTaskCount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
