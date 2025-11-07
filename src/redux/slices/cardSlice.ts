import { createSlice } from '@reduxjs/toolkit';
import { homeCards, type CardData, contactSection2, contactSection3 } from '../../Data/cardData';

export interface SectionState{
  homeCards: CardData[];
  contactSection2:CardData[];
  contactSection3:CardData[];
}
const initialState:SectionState={
  homeCards: homeCards,
  contactSection2: contactSection2,
  contactSection3: contactSection3,

}
const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
});

export default cardSlice.reducer;
