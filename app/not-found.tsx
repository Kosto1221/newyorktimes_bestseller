import { Metadata } from "next";
import MainContainer from "../components/common/mainContainer";
import Heading from "../components/common/heading";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <MainContainer>
      <Heading type="h1" text="Not Found" />
    </MainContainer>
  );
}
