import { useState } from 'react'



const Tasks = () => {
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
    <>
      {tasks.map((task) => (
        <h3 id={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
