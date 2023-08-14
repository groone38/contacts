import React, { useState } from "react";
import classes from "./Search.module.scss";

interface SearchProps {
  search: string;
  setSearch: (e: string) => void;
}

const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <div className={classes.search}>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        placeholder="Кого вы хотите найти?"
        value={search}
      />
    </div>
  );
};

export default Search;
