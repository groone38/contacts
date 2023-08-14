import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/app/providers/store";
import { getContact } from "src/features/model/reducers/ContactsSlice";
import Contact from "src/entities/Contact/ui/Contact";
import classes from "./Home.module.scss";
import { Loader } from "src/shared/ui/Loader";
import { Search } from "src/features/ui/Search";

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const contact = useAppSelector((state) => state.contacts.contacts);
  const loading = useAppSelector((state) => state.contacts.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getContact());
  }, []);
  const filterContacts = contact.filter((item) => {
    return item.first_name
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
  });
  return (
    <div className={classes.home}>
      {loading && <Loader />}
      <Search search={search} setSearch={setSearch} />
      <div className={classes.contacts}>
        {filterContacts.map((item) => (
          <Contact key={item.id} id={item.id!} name={item.first_name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
