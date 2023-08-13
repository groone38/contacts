import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/app/providers/store";
import { getContact } from "src/features/model/reducers/ContactsSlice";
import Contact from "src/entities/Contact/ui/Contact";
import classes from "./Home.module.scss";
import { Loader } from "src/shared/ui/Loader";

const Home = () => {
  const contact = useAppSelector((state) => state.contacts.contacts);
  const loading = useAppSelector((state) => state.contacts.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getContact());
  }, []);

  return (
    <div className={classes.home}>
      {loading && <Loader />}
      <div className={classes.contacts}>
        {contact.map((item) => (
          <Contact key={item.id} id={item.id!} name={item.first_name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
