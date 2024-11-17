import { getBooks } from "../../../api";
import BookContainer from "../../../../components/category/bookContainer";
import GridContainer from "../../../../components/category/gridContainer";
import MainContainer from "../../../../components/common/mainContainer";
import Heading from "../../../../components/common/heading";

interface IParams {
  id: string;
}

export async function generateMetadata({ params }: { params: IParams }) {
  const { id } = params;
  const category = await getBooks(id);
  return {
    title: category.results.list_name,
  };
}

// Page component
export default async function ListByCategory({ params }: { params: IParams }) {
  const { id } = params;
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
          />
        ))}
      </GridContainer>
    </MainContainer>
  );
}
