import { AnalyticsData, TasksByDay, TasksByDivision } from "@/types";
import { divisions } from "./divisions";
import { randomBetween } from "@/lib/utils";

export function generateAnalytics(): AnalyticsData {
  // Generate base metrics
  const totalTasks = randomBetween(1200, 1500);
  const tasksThisWeek = Math.round(totalTasks * (randomBetween(15, 25) / 100));
  const timeSavedHours = Math.round(totalTasks * (randomBetween(30, 60) / 100));
  const accuracyRate = randomBetween(94, 98);
  const activeAgents = randomBetween(35, 45);

  // Generate daily data for the last 7 days
  const tasksByDay: TasksByDay[] = [];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    // Weekends have lower activity
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const baseTasks = isWeekend ? randomBetween(80, 150) : randomBetween(180, 280);

    tasksByDay.push({
      date: date.toISOString().split("T")[0],
      tasks: baseTasks,
      label: dayNames[date.getDay()],
    });
  }

  // Generate division breakdown
  // Weight towards Engineering and Marketing
  const divisionWeights: Record<string, number> = {
    engineering: 0.28,
    marketing: 0.32,
    media: 0.08,
    talent: 0.06,
    "project-ops": 0.1,
    research: 0.08,
    infrastructure: 0.05,
    "executive-ops": 0.03,
  };

  const totalDivisionTasks = tasksThisWeek;
  const tasksByDivision: TasksByDivision[] = divisions.map((division) => {
    const weight = divisionWeights[division.id] || 0.1;
    const tasks = Math.round(totalDivisionTasks * weight * (0.9 + Math.random() * 0.2));
    const percentage = Math.round((tasks / totalDivisionTasks) * 100);

    return {
      divisionId: division.id,
      divisionName: division.shortName,
      tasks,
      color: division.color.primary,
      percentage,
    };
  });

  // Calculate week-over-week changes
  const changeFromLastWeek = {
    tasks: randomBetween(5, 18),
    timeSaved: randomBetween(8, 22),
    accuracy: randomBetween(-1, 3),
  };

  return {
    summary: {
      totalTasks,
      tasksThisWeek,
      timeSavedHours,
      accuracyRate,
      activeAgents,
      changeFromLastWeek,
    },
    tasksByDay,
    tasksByDivision,
  };
}

// Generate a single updated metric (for real-time simulation)
export function generateUpdatedMetric(
  current: AnalyticsData
): AnalyticsData {
  return {
    ...current,
    summary: {
      ...current.summary,
      totalTasks: current.summary.totalTasks + randomBetween(0, 2),
      tasksThisWeek: current.summary.tasksThisWeek + randomBetween(0, 1),
      activeAgents: randomBetween(35, 45),
    },
  };
}
