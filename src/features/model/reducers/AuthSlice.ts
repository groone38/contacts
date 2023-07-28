import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface Data {
  email: string;
  password: string;
}

interface Response {
  email: string | null;
  id: string;
  token?: string;
}

interface State extends Response {
  loading: boolean;
  error: string;
}

const initialState: State = {
  email: "",
  id: "",
  loading: false,
  error: "",
};

export const signInUser = createAsyncThunk(
  "auth/signIn",
  async (data: Data, thunkAPI) => {
    try {
      const auth = getAuth();
      const response: User = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      ).then((userCredential) => userCredential.user);
      const token = await response.getIdToken().then((res) => res);
      localStorage.setItem("token", token);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to sign in!(");
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: Data, thunkAPI) => {
    try {
      const auth = getAuth();
      const response: User = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      ).then((userCredential) => userCredential.user);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to register!(");
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      registerUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
      }
    );
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(signInUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      signInUser.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.email = action.payload.email;
        state.id = action.payload.uid;
        state.error = "";
      }
    );
    builder.addCase(signInUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const auth = authSlice.reducer;
