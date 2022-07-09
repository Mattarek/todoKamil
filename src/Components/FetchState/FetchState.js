export const FetchState = async (link) => {
  const response = await fetch(link);
  const data = await response.json();
  return data.results;
};

export default FetchState;
