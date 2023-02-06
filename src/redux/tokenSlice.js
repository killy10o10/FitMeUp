import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const SpecialityApiUrl = 'https://fitmeup.onrender.com/api/v1/specialities';

export const deleteSpecialityThunk = createAsyncThunk('/delete/speciality', async (obj) => {
  const { token, id } = obj;
  const result = await (await fetch(`${SpecialityApiUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,

    },
  })).json();
  return {
    ...result,
    id,
  };
});

export const getUser = createAsyncThunk('/jcjdc/adahgshs', async (item) => {
  const result = await (await fetch('https://fitmeup.onrender.com/api/v1/secure/auth_login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(item),
  })).json();

  if (result.token !== undefined) {
    const user = (await (await fetch('https://fitmeup.onrender.com/api/v1/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: result.token,
      },
    })).json());
    let obj = {};
    if (user.role === 'admin') {
      const specialities = await (await (fetch(SpecialityApiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: result.token,
        },
      }))).json();
      obj = {
        token: result.token,
        data: user,
        specialities,
      };
    } else {
      obj = {
        token: result.token,
        data: user,
      };
    }
    return obj;
  }
  const { token } = result;
  return {
    token,
  };
});

export const UserUpdateThunk = createAsyncThunk('/get/updated_user', async (token) => {
  const user = (await (await fetch('https://fitmeup.onrender.com/api/v1/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
  })).json());
  return user;
});

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    data: {},
    specialities: [],
  },
  reducers: {
    getdata: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        data: payload,
      };
    },
    signout: () => ({ token: '', data: {}, specialities: [] }),
    updatedata: (state, action) => ({
      ...state,
      specialities: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      const { payload } = action;
      return payload;
    });
    builder.addCase(deleteSpecialityThunk.fulfilled, (state, action) => {
      const specialities = state.specialities.filter((each) => each.id !== action.payload.id);
      return {
        ...state,
        specialities,
      };
    });
    builder.addCase(UserUpdateThunk.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
    }));
  },
});

export const {
  getdata, signout,
} = UserSlice.actions;

export default UserSlice.reducer;
