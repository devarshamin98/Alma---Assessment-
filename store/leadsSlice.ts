import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Lead {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  visas: string[];
  resume: string;
  message: string;
  state: 'PENDING' | 'REACHED_OUT';
}

interface LeadsState {
  leads: Lead[];
}

const initialState: LeadsState = {
  leads: [],
};

const leadsSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    setLeads(state, action: PayloadAction<Lead[]>) {
      state.leads = action.payload;
    },
    updateLeadState(state, action: PayloadAction<{ id: number; state: 'PENDING' | 'REACHED_OUT' }>) {
      const lead = state.leads.find((l) => l.id === action.payload.id);
      if (lead) lead.state = action.payload.state;
    },
  },
});

export const { setLeads, updateLeadState } = leadsSlice.actions;
export default leadsSlice.reducer;
