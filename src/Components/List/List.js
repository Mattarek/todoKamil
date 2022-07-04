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
};

const myData = Object.values(data);
const myDataToShow = myData.map((item, id) => {
  return { id, ...item };
});
console.log(myDataToShow);
export const List = () => {
  return myDataToShow.map(({ id, name, surname, age }) => (
    <li key={id}>
      {age >= 18 ? <Item name={name} surname={surname} age={age} /> : null}
    </li>
  ));
};

export default List;
