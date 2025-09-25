import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Login = {
  userName: string;
  password: string;
};

interface RepoLoginState {
  user: any;
  isLoggedIn: boolean;
  isLoading: boolean;
}

const initialState: RepoLoginState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
};
const loginScreen = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUserSuccess(state, action: PayloadAction<Login>) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    setLogoutUser(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
    bypassLogin(state) {
      state.isLoggedIn = true;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const {setLogoutUser, loginUserSuccess, bypassLogin, setLoading} =
  loginScreen.actions;

export const loginUserApi = (request: Login): any => {
  //   console.log(request);
  return async (dispatch: any) => {
    dispatch(loginUserSuccess(request));
    try {
    } catch (err) {
      console.log(err);
    }
  };
};

export const logOutUser = (): any => async (dispatch: any) => {
  try {
    dispatch(setLogoutUser());
  } catch (err) {
    console.log(err);
  }
};

export default loginScreen.reducer;
