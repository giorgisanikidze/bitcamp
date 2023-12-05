import './App.css';
import { useState, useEffect } from 'react';



function App() {

  let [day, setDay] = useState(true);


  let [taskList, setTaskList] = useState([]);
  let [filter, setFilter] = useState('all');
  let [taskText, setTaskText] = useState('');

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  



  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    classFunc()

  };

  useEffect(() => {
    
    window.addEventListener('resize', handleResize);
    return () => {
      
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  function addTodo() {
    if (!taskText) {
      return
    }
    const item = {
      checked: false,
      text: taskText
    }
    setTaskList(oldList => [...oldList, item])
    setTaskText('')
  }



  function checkedTodo(index) {
    const newArr = [...taskList];
    newArr[index].checked = !newArr[index].checked;
    setTaskList(newArr)
  }
  

  function DeleteTodo(index) {
    const newArr = [...taskList];
    newArr.splice(index, 1);
    setTaskList(newArr)
  }

  function classFunc(){
    if (screenWidth < 1440 && day) {
      return 'head mobile-light'
    } else if(screenWidth < 1440 && !day){
      return 'head mobile-dark'
    } else if (screenWidth >= 1440 && day) {
      return 'head desktop-light'
    } else {
      return 'head desktop-dark'
    }
  }


  const filterTasks = () => {
    switch (filter) {
      case 'all':
        return taskList;
      case 'active':
        return taskList.filter(task => !task.checked);
      case 'completed':
        return taskList.filter(task => task.checked);
      default:
        return taskList;
    }
  };












  return (
    <div className='app' style={{
      backgroundColor: day ? '#FAFAFA' :
        '#171823'
      }}
    >
      <div className={classFunc()}
        
        
      >
      </div>

      <div className='container' >
        <div className='header'>
          <h1 className='title'>TODO</h1>
          {day ? <svg onClick={() => { setDay(!day);  }} xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z" />
          </svg> : <svg onClick={() => { setDay(!day) }} xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z" /></svg>
          }
        </div>

        <div className='task-input'
          style={{ backgroundColor: day ? 'white' : '#25273D', color: day ? '#9495A5' : '#767992' }}>
          <div className='check'></div>

          <input style={{ color: day ? '#9495A5' : '#767992' }} value={taskText} className='input' type='text' placeholder='Create a new todo...'
            onChange={(e) => {
              setTaskText(e.target.value)
            }}

            onKeyPress={(event) => {
              if (event.key === "Enter") {
               addTodo()
              }
            }}

          />
        </div>

        <div className='task-show' style={{ backgroundColor: day ? 'white' : '#25273D', color: day ? '#9495A5' : '#767992', boxShadow: day ? '0px 35px 50px -15px rgba(193.64, 195.16, 213.56, 0.50)' : 'none'}}>

          <div className='task-list' style={{ color: day ? '#494C6B' : '#C8CBE7' }}>

            {filterTasks().map((item, index) => {
              return (
                <li key={index} className='item'>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div className='checkbox' checked={item.checked} onClick={() => {checkedTodo(index)}}>
                      {item.checked ? <div className='checkboxChild'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                          <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
                        </svg>
                      </div> : ''}
                    </div>
                    <span onClick={() => {checkedTodo(index)}} style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>{item.text}</span>
                  </div>
                  <svg onClick={() => { DeleteTodo(index) }} xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
                </li>
              )
            })
            }
          </div>

          <div className='footer' style={{ color: day ? '#9495A5' : '#5B5E7E' }}>
            <div className='items-left'>{taskList.filter(task => !task.checked).length} items left</div>
            {screenWidth >= 1440 ? <div className='filter' style={{ backgroundColor: day ? 'white' : '#25273D', color: day ? '#9495A5' : '#5B5E7E' }}>
              <div
                style={{ color: filter === "all" ? "#3A7CFD" : '', cursor: 'pointer'}}
                onClick={() => {
                  setFilter("all")
                }}>All</div>
              <div
                style={{ color: filter === "active" ? "#3A7CFD" : '', cursor: 'pointer' }}
                onClick={() => {
                  setFilter("active")
                }}>active</div>
              <div
                style={{ color: filter === "completed" ? "#3A7CFD" : '', cursor: 'pointer' }}
                onClick={() => {
                  setFilter("completed")
                }}>Completed</div>
            </div> : ''}

            <div className='clear' onClick={() => {
              setTaskList(taskList.filter(task => !task.checked))
            }}>Clear Completed</div>

          </div>
        </div>

        <div className='filter' style={{display: screenWidth < 1440 ? "flex" : 'none', backgroundColor: day ? 'white' : '#25273D',  color: day ? '#9495A5' : '#5B5E7E', boxShadow: day ? '0px 35px 50px -15px rgba(193.64, 195.16, 213.56, 0.50)' : 'none' }}>
          <div
            style={{ color: filter === "all" ? "#3A7CFD" : ''}}
            onClick={() => {
            setFilter("all")
          }}>All</div>
          <div
            style={{ color: filter === "active" ? "#3A7CFD" : '' }}
            onClick={() => {
            setFilter("active")
          }}>active</div>
          <div
            style={{ color: filter === "completed" ? "#3A7CFD" : '' }}
            onClick={() => {
            setFilter("completed")
          }}>Completed</div>

        </div>

        <div style={{ marginTop: '40px', color: day ? '#9495A5' : '#5B5E7E'}}>Drag and drop to reorder list</div>
        
      </div>
    </div>
  );
}

export default App;
