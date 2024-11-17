import { getCategories } from "../api";
import Category from "../../components/home/category";
import CategoryContainer from "../../components/home/categoryContainer";
import Heading from "../../components/common/heading";
import MainContainer from "../../components/common/mainContainer";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const categoriesData = await getCategories();
  const categories = categoriesData.results;
  return (
    <MainContainer>
      <Heading type="h1" text="The New York Times Best Seller Explorer" />
      <CategoryContainer>
        {categories.map((item, index) => (
          <Category
            key={index}
            id={item.list_name_encoded}
            title={item.display_name}
          ></Category>
        ))}
      </CategoryContainer>
    </MainContainer>
  );
}
