import listslice from'./slice';


import { configureStore } from "@reduxjs/toolkit";


 export let store=configureStore({

    reducer:{

       notes:listslice

    }
})