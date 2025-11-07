import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Statistics {
    total: number;
    arrivals: number;
    discount: number;
    satisfaction: number;
    category: string;
}
interface statsState{
    stats:Statistics[];
    currentStatsTab:Statistics;
}
const initialStats: Statistics[] = [
    {
        total: 1500,
        arrivals: 50,
        discount: 30,
        satisfaction: 95,
        category: "All"
    },
    {
        total: 400,
        arrivals: 20,
        discount: 33,
        satisfaction: 97,
        category: "Mens"
    },
    {
        total: 600,
        arrivals: 40,
        discount: 25,
        satisfaction: 93,
        category: "Womens"
    },
    {
        total: 500,
        arrivals: 30,
        discount: 29,
        satisfaction: 96,
        category: "Kids"
    },
]
const getTab=(tabname:string )=>{
    let tab=initialStats.find((item)=>item.category===tabname)
    return tab;
}

const initialState:statsState={
    stats:initialStats,
    currentStatsTab:getTab("All")||initialStats[0]
}
const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        setCurrentStatstab: (state,action:PayloadAction<string>)=>{
            state.currentStatsTab=getTab(action.payload)||initialStats[0];
        }
    }
})
export default statsSlice.reducer;
export const setStatstab = statsSlice.actions.setCurrentStatstab;
