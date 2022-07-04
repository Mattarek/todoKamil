import Item from "../Item/";
import fetchMyData from "../FetchData/";

// with async
//const data = fetchMyData("https://squarit.cfolks.pl/dane.json");
//const { results } = data;

const data = {
  1: {
    name: "john",
    surname: "Smith",
    age: 16,
  },
  2: {
    name: "Will",
    surname: "Johanson",
    age: 35,
  },
  3: {
    name: "Albert",
    surname: "Johanson",
    age: 15,
  },
  4: {
    name: "Kamil",
    surname: "Johanson",
    age: 85,
  },
  5: {
    name: "Marcin",
    surname: "Johanson",
    age: 65,
  },
  6: {
    name: "Dawid",
    surname: "Johanson",
    age: 25,
  },
};

const myData = Object.values(data);
const myDataToShow = myData.map((item, id) => {
  return { id, ...item };
});

const myState = { ...myDataToShow };
const state = Object.values(myState);

export const List = () => {
  return state.map(({ id, name, surname, age }) => (
    <li key={id}>
      {age >= 18 ? <Item name={name} surname={surname} age={age} /> : null}
    </li>
  ));
};

export default List;
