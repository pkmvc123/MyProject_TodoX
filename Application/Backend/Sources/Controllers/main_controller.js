import { v4 as getUID } from "uuid";
import connection from "../Configs/config_database.js";

export const getTaskPage = async (req, res) => {
  const { filter = "today" } = req.query;
  const now = new Date();
  let startDate = null;

  switch (filter) {
    case "today":
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      break;
    case "week":
      const day = now.getDay();
      const mondayDate = now.getDate() - (day === 0 ? 6 : day - 1);
      startDate = new Date(now.getFullYear(), now.getMonth(), mondayDate);
      break;
    case "month":
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      break;
    case "all":
    default:
      startDate = null;
  }

  try {
    let sql = "SELECT * FROM task";
    let countSql = `
      SELECT 
          COUNT(CASE WHEN task_status = 0 THEN 1 END) AS pendingCount,
          COUNT(CASE WHEN task_status = 1 THEN 1 END) AS completeCount
      FROM task
    `;
    const params = [];
    const countParams = [];

    if (startDate) {
      const dateCondition = " WHERE DATE(task_createdAt) >= ?";
      sql += dateCondition;
      countSql += dateCondition;
      params.push(startDate.toISOString().slice(0, 10));
      countParams.push(startDate.toISOString().slice(0, 10));
    }

    sql += " ORDER BY task_createdAt DESC";

    const [rows] = await connection.query(sql, params);
    const [countRows] = await connection.query(countSql, countParams);

    const formattedRows = rows.map((row) => ({
      ...row,
      task_status:
        row.task_status === 0
          ? "pen"
          : row.task_status === 1
          ? "com"
          : row.task_status,
    }));

    res.status(200).json({
      tasks: formattedRows,
      counts: countRows[0],
    });
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

    let numericStatus;
    if (status === "com") numericStatus = 1;
    else numericStatus = 0;

    let isComplete = null;
    if (numericStatus === 1) {
      isComplete = new Date();
    }

    await connection.query(
      `UPDATE task 
       SET 
         task_title = ?,
         task_status = ?,
         task_completedAt = ?,
         task_updatedAt = NOW()
       WHERE task_id = ?`,
      [title, numericStatus, isComplete, taskID]
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
