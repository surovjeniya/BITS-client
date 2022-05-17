import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/actions/logOut";

export const AppHeader = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispach = useDispatch();
  return (
    <header className="app-header">
      {isAuth && <button onClick={() => dispach(logOut())}>Logout</button>}
    </header>
  );
};
