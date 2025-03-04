import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
 import { adddata, deldata, fetchdata, updatedata } from "../../reduxlists/slice";
 
 import $ from 'jquery'; 

export function Home(){
  let [name,setname]= useState('')
  let [namee,setnamee]= useState('')

   let {lists,loading,error}=useSelector(function(state){return state.notes})
console.log(lists)
    let disbatch=  useDispatch()


    
        useEffect(function(){
                   disbatch(fetchdata())

 






        },[])
 
    return <>
    

                           <h1 className="text-center">TodoList </h1>

           <div className="container py-5 ">
              <br/>
                  <div className="d-flex  ">
                    
       
               <input className="w-25 form-control" onChange={function(e){setname(e.target.value)}}/>
             <button className="btn btn-dark px-4  py-2 add " onClick={function(){disbatch(adddata(
                {name:name}))}}>ADD</button>
                     

                     
                    
                    </div> 

                    <br/>
             <div className="row  "> 
                 <div className="col-md-6">
                    <div className="card  py-3">
                        {lists?lists.map(function(list){return<>
                         <div className="d-flex justify-content-between px-3 align-items-center" >
                         <input id="todo" type="checkbox"/>

                                <label htmlFor="todo" className="w-50 px-5">{list.name}</label>
                                    
                                    <button className="btn  "onClick={function(){disbatch(deldata(list.id))}}><i class="fa-solid fa-trash fa-2x"></i>
                                   </button>
                                   
                                      <button className="btn" onClick={function(){disbatch(updatedata({id:list.id,name:namee}))}}><i class="fa-solid fa-pen fa-2x px-2"></i></button>


                                     <input  className="form-control w-25" onChange={function(e){setnamee(e.target.value)}}/>

                         </div>
                         <br/>
                        
                        
                        
                        </>
                              
                        }):""}
                    </div>
                </div>
             </div>
            </div>    
    
    
    
    
    
    
    
    </>
















}