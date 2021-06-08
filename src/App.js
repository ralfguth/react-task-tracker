import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks , setTasks] = useState(
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
  return (
    <div className="container-fluid">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
