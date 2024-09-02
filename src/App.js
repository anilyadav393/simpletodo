import './App.css';
import React, {useState, useEffect} from 'react';


const App = ()  =>  {

  const [todos,setTodos] = useState([]);
  const [newTodo, setNewTodos] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("")
  


console.log(editingIndex)
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])


  useEffect(()=>{
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos)
  }, [])


const addTodo = ()=> {
  if (newTodo.trim() !== ''){
    setTodos([...todos,newTodo])
    console.log(newTodo)
    setNewTodos("")

  }
  
}

const deleteTodo = (index) => {
  
  const updatedTodo = todos.filter((curr,i)=> i !== index)
setTodos(updatedTodo)


}

const startEditingIndex = (index) => {
  console.log("startediting triggered")
  setEditingIndex(index)
  setEditingText(todos[index])


}

const saveEdit = (index)=>{
  const updatedTodos = [...todos]
  updatedTodos[index] = editingText
  setTodos(updatedTodos)
  setEditingIndex(null);
  setEditingText("")
}

const cancelEdit = () => {
  setEditingIndex(null);
  setEditingText(""); 
};



  return (
    <>
   
      <h1 class="text-black-300 font-bold text-2xl mt-5 text-center"> Todo Project</h1>
      <div class="flex justify-center items-center mt-5 flex-col w-full">
        <div class="justify-center">
        <input class = "border rounded text-center" placeholder='Enter your todo'
        type = 'text'
        value={newTodo}
        onChange = {(e)=>setNewTodos(e.target.value)}
        />
       

        <button class="bg-blue-500 text-white border rounded-xl ml-3 px-2 py2" onClick = {addTodo}>Add Todo</button>
        </div>
        <ul>
          {todos.map((each,index)=>(
             <div className="flex flex-row gap-4 justify-start text-right" key={index}>

            { editingIndex === index ? (
            <>
              
              <input
              class="bg-blue-300 text-white p-2 border my-3 rounded-xl"
              type = "text"
              placeholder='Edit todo'
              value = {editingText}
              onChange = {(e)=>setEditingText(e.target.value)}
              />
              

              <button class="bg-green-500 text-white  px-2 py-2 border rounded-xl m-3" onClick={()=>saveEdit(index)}>Save</button>
              <button class="bg-red-500 text-white  px-2 py-2 border rounded-xl m-3" onClick = {cancelEdit}>Cancel</button>
             
             
              </>
            ): (
            
            <>

            <div class="flex flex-row gap-4 justify-start text-right">
            <li key = {index}> 
              <div class="bg-gray-500 h-13 my-3 p-3 border rounded-xl text-white px-5 gap-4 font-medium">
                
              {each}
              
              
            <button class="bg-blue-700 text-white mr-2 p-1 px-2 py-2 ml-10 border rounded-xl" onClick = {()=>deleteTodo(index)}> Delete</button>
            <button class="bg-yellow-500 text-white  px-2 py-2 border rounded-xl m-3" onClick = {()=>startEditingIndex(index)}>Edit</button>
          
            </div>
            </li>
            </div>
            </>
          )}
          </div>


          ))}
         



        </ul>


    </div>

    </>
  );
}

export default App;
