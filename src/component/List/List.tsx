import React from "react";
import s from "./list.module.scss";

interface PropsObj {
  id: number;
  text: string;
}
interface Props {
  data: Array<PropsObj>;
}

const List = ({ data }: Props) => {
  if (!data) {
    return <h1>load</h1>;
  }
  const displayLists = () =>
    data.map((e: PropsObj) => <li key={e.id}>{e.text}</li>);

  return <ul className={s.root}>{displayLists()}</ul>;
};

export default List;
