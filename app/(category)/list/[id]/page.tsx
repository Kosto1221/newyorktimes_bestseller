import { getBooks } from "../../../api";
import BookContainer from "../../../../components/category/bookContainer";
import GridContainer from "../../../../components/category/gridContainer";
import MainContainer from "../../../../components/common/mainContainer";
import Heading from "../../../../components/common/heading";

export async function generateMetadata({ params: { id } }) {
  const category = await getBooks(id);
  return {
    title: category.results.list_name,
  };
}

export default async function ListByCategory({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const booksData = await getBooks(id);
  const books = booksData.results.books;
  return (
    <MainContainer>
      <Heading type="h1" text={booksData.results.list_name} />
      <GridContainer>
        {books.map((item) => (
          <BookContainer
            key={item.title}
            imagePath={item.book_image}
            title={item.title}
            author={item.author}
            link={item.amazon_product_url}
          ></BookContainer>
        ))}
      </GridContainer>
    </MainContainer>
  );
}
