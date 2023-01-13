const fetchData = async (userId: string) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  console.log(userId);
  console.log(data);
};

const main = async () => {
  await fetchData("Thong51");
};

main();
