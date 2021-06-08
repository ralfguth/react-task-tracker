import { useState } from 'react'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Levar o Lixo",
        day: "5 de Fev às 14:15h",
        reminder: true,
      },
      {
        id: 2,
        text: "Estudar React",
        day: "6 de Fev às 08:00h",
        reminder: true,
      },
      {
        id: 3,
        text: "Estudar SQL",
        day: "7 de Fev às 08:00h",
        reminder: false,
      },
    ]
  );

  // Adicionar Tarefa
  const adicionarTarefa = (task) => {
    const id = Math.floor(Math.random()*10000)+ 1;
    const newTask = { id,...task }
    setTasks([...tasks, newTask]);
  };

  // Deletar Tarefa
  const deletarTarefa = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Alternar Lembrete
  const lembrete = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={adicionarTarefa} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deletarTarefa} onToggle={lembrete} />
      ) : 'Sem tarefas cadastradas'}
    </div>
  );
}

export default App;
