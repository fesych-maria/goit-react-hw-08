import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        value={value}
      />
    </div>
  );
};

export default SearchBox;
