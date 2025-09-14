import React from 'react'
import './today.scss'
import { Add, NavigateNext, TodayOutlined } from '@mui/icons-material';



const tasks = [
    { id: 'task1', 
        title: 'Finish you Backend Project', 
        date: '2024-10-10',
        category: 'Personal'},
    { id: 'task2', 
        title: 'Meeting with Team', 
        date: '2024-10-10',
        category: 'Work'
    },
    { id: 'task3', 
        title: 'Grocery Shopping', 
        date: '2024-10-10',
        category: 'Personal'
   },
    { id: 'task4', 
        title: 'Doctor Appointment', 
        date: '2024-10-10',
        category: 'Others'
   }
];
const Today = () => {
  return (
    <div className='today'>
        <p className= 'title'>Today</p>
        <ul>
            <li style={{border:'1px solid #e6e6e6'}}>
                <Add />
                <span style={{marginLeft: '10px'}}> Add New Task</span>
            </li>
            {tasks.map((task) => (
               <li key={task.id}>
                <input type="checkbox" id={task.id} />
                <label>{task.title}
                    <div className="details">
                        <div className="left">
                            <TodayOutlined className="icon"/>
                            <p>{task.date}</p>
                        </div>
                        <div className="center"></div>
                        <span>2</span>
                        <p>Subtags</p>
                        
                        <div className="right">
                            <span className='color' style={{ backgroundColor: 
                                task.category === 'Personal' 
                                ? '#e74c3c' : 
                                task.category === 'Work' 
                                ? '#3498db' 
                                : '#f1c40f' }}></span>
                            <p>{task.category}</p>
                        </div>


                    </div>


                </label>
                <NavigateNext className='icon' />
            </li>
            ))}
         
        </ul>
    </div>
  )
}

export default Today