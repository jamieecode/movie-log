import Cards from "../components/Cards";
import { categories } from "../api/api";

const Home = () => {
  return (
    <>
      {categories.map((category) => (
        <Cards key={category} category={category} />
      ))}
    </>
  );
};

export default Home;
