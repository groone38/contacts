import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "src/app/providers";

export interface Data {
  first_name: string;
  last_name: string;
  email: string;
  tel: null | number;
  company: string;
  about: string;
  id?: string;
}

interface UpdateData {
  id: string | undefined;
  newData: {
    first_name: string;
    last_name: string;
    email: string;
    tel: null | number;
    company: string;
    about: string;
  };
}

interface State {
  contacts: Data[];
  contact: Data | null;
  loading: boolean;
  error: string;
}

const initialState: State = {
  contacts: [],
  contact: null,
  loading: false,
  error: "",
};

export const createContact = createAsyncThunk(
  "contacts/create",
  async (data: Data, thunkAPI) => {
    try {
      await addDoc(collection(db, "contacts"), data);
    } catch (error) {
      return thunkAPI.rejectWithValue("Error create contact!(");
    }
  }
);

export const getContact = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkAPI) => {
    try {
      const contacts = await getDocs(collection(db, "contacts"));
      const data: Data[] = [];
      contacts.forEach((item) => {
        data.push({ id: item.id, ...item.data() } as Data);
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error get contacts!");
    }
  }
);

export const getOneContact = createAsyncThunk(
  "contacts/getOneContact",
  async (id: string | undefined, thunkAPI) => {
    try {
      const docRef = doc(db, "contacts", `${id}`);
      const docSnap = (await getDoc(docRef).then((res) => res.data())) as Data;
      return docSnap;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error get contact!");
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (data: UpdateData, thunkAPI) => {
    try {
      const docRef = doc(db, "contacts", `${data.id}`);
      await updateDoc(docRef, data.newData);
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error update contact!");
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id: string | undefined, thunkAPI) => {
    try {
      const docRef = doc(db, "contacts", `${id}`);
      await deleteDoc(docRef);
    } catch (error) {
      return thunkAPI.rejectWithValue("Error delete contact!");
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
    builder.addCase(getContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getContact.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(getOneContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOneContact.fulfilled, (state, action) => {
      state.contact = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getOneContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(deleteContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      // state.contacts = action.payload;
      state.contact = null;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const contacts = contactsSlice.reducer;
