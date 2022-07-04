export const fetchMyData = async (link) => {
  const myDataFromFetch = await fetch(link);
  const data = await myDataFromFetch.json();
  return data;
};

export default fetchMyData;
