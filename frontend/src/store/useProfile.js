import{create }from "zustand";


const useProfile = create((set)=>({
    selectedprofile: null,
    setSelectedprofile:(selectedprofile)=> set({selectedprofile}),
    messages:[],
    setMessages: (messages) => set({messages}),
}))
export default useProfile;