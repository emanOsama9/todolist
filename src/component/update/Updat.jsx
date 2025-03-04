
import { useDispatch } from "react-redux"
import { updatedata } from "../../reduxlists/slice"
import { useState } from "react"
  
export function Update (){

     let disbatch=  useDispatch()
  let [namee,setnamee]= useState('')


    return <>

    <input onChange={function(e){setnamee(e.target.value)}}/>



    </>
}