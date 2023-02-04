import { signout } from '../redux/tokenSlice';

const logoutUser = (dispatch) => {
  dispatch(signout());
};

export default logoutUser;
