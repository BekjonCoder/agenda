import React, { useState } from "react";
interface Task {
  time: string;
  task: string;
  completed: boolean;
}

interface DaySchedule {
  day: string;
  tasks: Task[];
}
const initialWeekSchedule: DaySchedule[] = [
  {
    day: "Monday",
    tasks: [
      { time: "6:00 AM", task: "🌅 Wake up & morning stretch", completed: false },
      { time: "7:00 AM", task: "🥣 Healthy breakfast", completed: false },
      { time: "8:00 AM", task: "📚 Study / 💻 Work session 1", completed: false },
      { time: "10:00 AM", task: "🚶‍♂️ Short walk & refresh", completed: false },
      { time: "11:00 AM", task: "💡 Deep focus work", completed: false },
      { time: "1:00 PM", task: "🍽️ Lunch & relax", completed: false },
      { time: "2:00 PM", task: "📝 Continue studies / tasks", completed: false },
      { time: "4:00 PM", task: "🏃‍♂️ Exercise or hobby time", completed: false },
      { time: "6:00 PM", task: "🍲 Dinner with family", completed: false },
      { time: "8:00 PM", task: "🗓️ Plan tomorrow & reflect", completed: false },
      { time: "10:00 PM", task: "😴 Sleep & recharge", completed: false },
    ],
  },
  {
    day: "Tuesday",
    tasks: [
      { time: "6:00 AM", task: "🌄 Wake up & meditate", completed: false },
      { time: "7:00 AM", task: "🍳 Breakfast", completed: false },
      { time: "8:00 AM", task: "💻 Work / 📖 Study session 1", completed: false },
      { time: "10:00 AM", task: "☕ Short coffee break", completed: false },
      { time: "11:00 AM", task: "🧠 Focus work", completed: false },
      { time: "1:00 PM", task: "🥗 Lunch & relax", completed: false },
      { time: "2:00 PM", task: "📈 Continue projects", completed: false },
      { time: "4:00 PM", task: "⚽ Sport / walk", completed: false },
      { time: "6:00 PM", task: "🍛 Dinner", completed: false },
      { time: "8:00 PM", task: "✍️ Journal & reflect", completed: false },
      { time: "10:00 PM", task: "🛌 Sleep", completed: false },
    ],
  },
  {
    day: "Wednesday",
    tasks: [
      { time: "6:00 AM", task: "🌅 Wake up & gratitude notes", completed: false },
      { time: "7:00 AM", task: "🥣 Breakfast", completed: false },
      { time: "8:00 AM", task: "💻 Work / study", completed: false },
      { time: "10:00 AM", task: "☕ Tea break", completed: false },
      { time: "11:00 AM", task: "📝 Project work", completed: false },
      { time: "1:00 PM", task: "🍽️ Lunch", completed: false },
      { time: "2:00 PM", task: "📚 Continue learning", completed: false },
      { time: "4:00 PM", task: "🏋️ Exercise", completed: false },
      { time: "6:00 PM", task: "🥘 Dinner", completed: false },
      { time: "8:00 PM", task: "📓 Plan next day", completed: false },
      { time: "10:00 PM", task: "😴 Sleep", completed: false },
    ],
  },
  {
    day: "Thursday",
    tasks: [
      { time: "6:00 AM", task: "🌄 Wake up & stretch", completed: false },
      { time: "7:00 AM", task: "🍞 Breakfast", completed: false },
      { time: "8:00 AM", task: "💻 Work session", completed: false },
      { time: "10:00 AM", task: "☕ Coffee break", completed: false },
      { time: "11:00 AM", task: "🧠 Focus tasks", completed: false },
      { time: "1:00 PM", task: "🥗 Lunch", completed: false },
      { time: "2:00 PM", task: "📈 Continue projects", completed: false },
      { time: "4:00 PM", task: "🏃‍♂️ Activity", completed: false },
      { time: "6:00 PM", task: "🍲 Dinner", completed: false },
      { time: "8:00 PM", task: "✍️ Reflect & plan", completed: false },
      { time: "10:00 PM", task: "🛌 Sleep", completed: false },
    ],
  },
  {
    day: "Friday",
    tasks: [
      { time: "6:00 AM", task: "🌅 Wake up & review goals", completed: false },
      { time: "7:00 AM", task: "🥞 Breakfast", completed: false },
      { time: "8:00 AM", task: "💻 Work / study", completed: false },
      { time: "10:00 AM", task: "☕ Coffee break", completed: false },
      { time: "11:00 AM", task: "📝 Project tasks", completed: false },
      { time: "1:00 PM", task: "🍽️ Lunch", completed: false },
      { time: "2:00 PM", task: "📚 Continue work", completed: false },
      { time: "4:00 PM", task: "🏋️‍♂️ Exercise", completed: false },
      { time: "6:00 PM", task: "🍛 Dinner", completed: false },
      { time: "8:00 PM", task: "🗓️ Weekly review & fun time", completed: false },
      { time: "10:00 PM", task: "😴 Sleep", completed: false },
    ],
  },
  {
    day: "Saturday",
    tasks: [
      { time: "7:00 AM", task: "🌄 Wake up naturally", completed: false },
      { time: "8:00 AM", task: "🥐 Breakfast", completed: false },
      { time: "9:00 AM", task: "🏡 Home chores", completed: false },
      { time: "11:00 AM", task: "📚 Reading / learning", completed: false },
      { time: "1:00 PM", task: "🍽️ Lunch", completed: false },
      { time: "2:00 PM", task: "🎨 Creative hobbies", completed: false },
      { time: "4:00 PM", task: "🚶‍♂️ Walk or social time", completed: false },
      { time: "6:00 PM", task: "🍲 Dinner", completed: false },
      { time: "8:00 PM", task: "🎬 Movie / relax", completed: false },
      { time: "10:00 PM", task: "🛌 Sleep", completed: false },
    ],
  },
  {
    day: "Sunday",
    tasks: [
      { time: "7:00 AM", task: "🌅 Wake up & relax", completed: false },
      { time: "8:00 AM", task: "🥞 Breakfast", completed: false },
      { time: "9:00 AM", task: "🧘‍♂️ Reflect & plan week", completed: false },
      { time: "11:00 AM", task: "📚 Reading", completed: false },
      { time: "1:00 PM", task: "🍽️ Lunch", completed: false },
      { time: "2:00 PM", task: "🏡 Clean / organise", completed: false },
      { time: "4:00 PM", task: "🚶‍♀️ Walk", completed: false },
      { time: "6:00 PM", task: "🍲 Dinner", completed: false },
      { time: "8:00 PM", task: "📝 Prepare for Monday", completed: false },
      { time: "10:00 PM", task: "😴 Early sleep", completed: false },
    ],
  },
];

const App: React.FC = () => {
  const [weekSchedule, setWeekSchedule] = useState<DaySchedule[]>(initialWeekSchedule);
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);
  const [showTrophy, setShowTrophy] = useState<boolean>(false);

  const handleTaskClick = (taskIndex: number) => {
    const updatedWeek = [...weekSchedule];
    const day = updatedWeek[selectedDayIndex];

    // ✅ Avvalgi barcha tasklar completed ekanini tekshir
    const allPreviousCompleted = day.tasks.slice(0, taskIndex).every(t => t.completed);

    if (!allPreviousCompleted) {
      alert("🚨 Oldingi vazifani bajarishingiz kerak!");
      return;
    }

    // 🔥 Toggle current task
    day.tasks[taskIndex].completed = !day.tasks[taskIndex].completed;
    setWeekSchedule(updatedWeek);

    // 🏆 Barcha tasklar bajarilganini tekshir
    const allCompleted = day.tasks.every(t => t.completed);
    if (allCompleted) {
      setShowTrophy(true);

      setTimeout(() => {
        const nextDay = (selectedDayIndex + 1) % weekSchedule.length;
        setSelectedDayIndex(nextDay);
        setShowTrophy(false);

        // 🔄 Keyingi kun tasklarini reset qilish
        const resetWeek = [...updatedWeek];
        resetWeek[nextDay].tasks = resetWeek[nextDay].tasks.map(t => ({
          ...t,
          completed: false,
        }));
        setWeekSchedule(resetWeek);
      }, 3000);
    }
  };

  const currentDay = weekSchedule[selectedDayIndex];

  return (
    <div className="app">
      <h1>📅 Weekly Planner</h1>
      <div className="days">
        {weekSchedule.map((d, idx) => (
          <button
            key={d.day}
            onClick={() => setSelectedDayIndex(idx)}
            className={idx === selectedDayIndex ? "active" : ""}
          >
            {d.day}
          </button>
        ))}
      </div>

      <div className="schedule">
        <h2>{currentDay.day} 🗓️</h2>
        <ul>
          {currentDay.tasks.map((t, i) => {
            const allPrevCompleted = currentDay.tasks.slice(0, i).every(task => task.completed);
            return (
              <li
                key={i}
                className={`${t.completed ? "completed" : ""} ${!allPrevCompleted ? "disabled" : ""}`}
                onClick={() => {
                  if (allPrevCompleted) handleTaskClick(i);
                }}
              >
                ✅ <span>{t.time}</span> - {t.task}
              </li>
            );
          })}
        </ul>

        {showTrophy && (
          <div className="trophy">
            🏆 You completed all tasks today! Great job! 🎉
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
