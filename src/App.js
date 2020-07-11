// this code is for shadow generator.......... 
// import React,{useState} from 'react';
// import './App.css';
// function App() {
//   const [Hori,setHori]=useState(10)
//   const [Veri,setVeri]=useState(10)
//   const [Blur,setBlur]=useState(10)
//   const [color,setColor]=useState("black")
//   const [checkOn,setCheckOn]=useState("false")
  
  

//   return (
//     <div className="App">
//       <div className="controls">

//           <label>Horizontal length</label>
//           <input type="range" min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)} />
         
//           <label>Vertical length</label>
//           <input type="range" min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)} />
        
//           <label>blur</label>
//           <input type="range" min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />

//           <label>Color</label>
//           <input type="color"  value={color} onChange={(e)=>setColor(e.target.value)} />
//           <div class="switch">
//           <label>
//           Outline
//           <input type="checkbox" checked={checkOn} onChange={()=>setCheckOn(!checkOn)}/>
//           <span class="lever"></span>
//           Inset
//          </label> 
//          </div>
//       </div>
//       <div className="output">
//       <div className="box" style={{boxShadow:`${checkOn?"inset":""} ${Hori}px ${Veri}px ${Blur}px ${color}`}}>
//         <p>box-shadow:{Hori}px {Veri}px {Blur}px {color}</p>
//       </div>
//       </div>
//       </div>
//   );
// }

// export default App;



import React,{useState} from 'react';
import './App.css';

function App(){
  const [value,setValue]=useState("")
  const [results,setResults]=useState([])
  // xn6HGhHOqeM7DjPAev5UTlhgESo_1BYCra5WjY_XuC0
  // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
  const fetchImages=()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=xdHN_woPUa-nL2zbNeJeE0IsPLLPrJ6H5zFXxnWMM6k&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      setResults(data.results)
    })
  }
  return (
   <div className="App">
     <div className="mydiv">
       <span>Search</span>
       <input 
       style={{width:"60%"}} 
       type="text" 
       value={value} 
       onChange={(e)=>setValue(e.target.value)}/>
       <button onClick={()=>fetchImages()}>Send</button>

     </div>
     <div className="gallery">
       {
         results.map((items)=>{
           return <img  className="item" key={items.id} src={items.urls.regular}/>

           
         })
       }

     </div>
   </div>
  );
  }
export default App;



