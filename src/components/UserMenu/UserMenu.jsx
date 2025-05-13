import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logoutThunk())}>Logout</button>
    </div>
  );
};

export default UserMenu;
