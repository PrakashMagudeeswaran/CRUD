import { createSlice } from '@reduxjs/toolkit';

const contentSlice = createSlice({
  name: "content",
  initialState: [],
  reducers: {
    createContent: (state, action) => {
      state.unshift(action.payload);
    },
    editedContent: (state,action)=>{
   const {id,title,passage}=action.payload
   const existingContent=state.find(content=>content.id===id)
   if (existingContent){
     existingContent.title=title;
     existingContent.passage=passage;
   }
    },
    deleteContent:(state,action)=>{
      const id = action.payload
      return state.filter(content => content.id !== id)
    }
  }
});

export const { createContent,editedContent,deleteContent } = contentSlice.actions;
export default contentSlice.reducer;
