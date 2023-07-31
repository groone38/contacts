import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { db } from "src/app/providers";

interface Data {
  first_name: string;
  last_name: string;
  email: string;
  tel: null | number;
  company: string;
  about: string;
}

interface State {
  contacts: Data[];
  loading: boolean;
  error: string;
}

const initialState: State = {
  contacts: [],
  loading: false,
  error: "",
};

export const createContact = createAsyncThunk(
  "contacts/create",
  async (data: Data, thunkAPI) => {
    try {
      await addDoc(collection(db, "contacts"), data);
    } catch (error) {
      return thunkAPI.rejectWithValue("Error create contact !(");
    }
  }
);

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createContact.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(createContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const contacts = contactsSlice.reducer;
