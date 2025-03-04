import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 import { db } from "../firebase/firelist";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
  


 export let fetchdata= createAsyncThunk("lists/fetchlists",async function () {
    
    let data=  await getDocs(collection(db,'lists'))
   let fetcheddata= data.docs.map(doc=> ({
        id:doc.id,
        ...doc.data()
 }))
return fetcheddata;
    
 });


 export let updatedata= createAsyncThunk("listupdatetd/updatelists",async function ({id,name}) {
    
     let data=doc(db,"lists",id) 

     await updateDoc(data,{name})     
      return { id,...name}
 });

 export let deldata= createAsyncThunk("listdeet/deletelists",async function (id) {
    
    let data=doc(db,"lists",id) 

    await deleteDoc(data)    
    return {id} 
 });




 export let adddata= createAsyncThunk("list/adddata",async function (newdata) {
    
     let docref=addDoc(collection(db,'lists'),newdata)
     return {id:docref.id,...newdata}
   });

 
let listslice= createSlice({
   name:"todolists",
    initialState:{
        lists:[],
        loading:false,
        error:"",
    },
    extraReducers:(function(builder){
        builder.addCase(fetchdata.pending,(state,action)=>{
            state.loading=true;
            
        });
        builder.addCase(fetchdata.fulfilled,(state,action)=>{
            state.lists=action.payload;
            state.loading=false;
        });
        builder.addCase(fetchdata.rejected,(state,action)=>{
             state.loading=false;
             state.error=action.error.message
        });
        builder.addCase(adddata.pending,(state,action)=>{
            state.loading=true;
            
        });
        builder.addCase(adddata.fulfilled,(state,action)=>{
            state.lists.push(action.payload);
            state.loading=false;
        });
        builder.addCase(adddata.rejected,(state,action)=>{
             state.loading=false;
             state.error=action.error.message
        });
        builder.addCase(deldata.pending,(state,action)=>{
            state.loading=true;
            
        });
        builder.addCase(deldata.fulfilled,(state,action)=>{
            state.lists= state.lists.filter(function(doc){return doc.id!=action.payload.id});
         });
        builder.addCase(deldata.rejected,(state,action)=>{
             state.loading=false;
             state.error=action.error.message
        });       
        builder.addCase(updatedata.pending,(state,action)=>{
            state.loading=true;
            
        });
        builder.addCase(updatedata.fulfilled,(state,action)=>{
           for(var i=0; i<state.lists.length;i++){
            if(state.lists[i].id==action.payload.id){
                return state.lists[i].name=action.payload.name
            }
           }
            state.loading=false;
        });
        builder.addCase(updatedata.rejected,(state,action)=>{
             state.loading=false;
             state.error=action.error.message
        });

    }),
   
 })

export default listslice.reducer

