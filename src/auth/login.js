import { getdata, settoken } from '../redux/tokenSlice';

const logoutUser = (dispatch) => {
  dispatch(settoken(null));
  dispatch(getdata(null));
};

export default logoutUser;
