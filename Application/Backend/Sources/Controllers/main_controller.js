import { v4 as getUID } from "uuid";
import connection from "../Configs/config_database.js";

export const getTaskPage = async (req, res) => {
  try {
    const [rows] = await connection.query(
      "Select * from task Order By task_createdAt Desc"
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error("Get Task Fail Error :", error);
    res.status(500).json({ message: "System Error" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    const UID = getUID();
    const result = await connection.query(
      "Insert into task (task_id, task_title) value (?, ?)",
      [UID, title]
    );
    res.status(200).json({ message: "Create Task Successfull" });
  } catch (error) {
    console.error("Create Task Fail Error:", error);
    res.status(500).json({ message: "System Error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, status } = req.body;
    const taskID = req.params.id;
    let isComplete = null;
    if (status == 2) {
      isComplete = new Date();
    }
    const result = await connection.query(
      `Update task 
        Set 
            task_title = ?,
            task_status = ?,
            task_completedAt = ?,
            task_updatedAt = Now()
            Where task_id = ?`,
      [title, status, isComplete, taskID]
    );
    res.status(202).json({ message: "Update Task Successfull" });
  } catch (err) {
    console.error("Update Task Fail Error:", err);
    res.status(500).json({ message: "System Error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const taskID = req.params.id;
    const result = await connection.query(
      "Delete from task Where task_id = ?",
      [taskID]
    );
    res.status(203).json({ message: "Delete Task Successfull" });
  } catch (err) {
    console.error("Delete Task Fail Error:", err);
    res.status(500).json({ message: "System Error" });
  }
};
