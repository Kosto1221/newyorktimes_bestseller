import MainContainer from "../../components/common/mainContainer";
import Heading from "../../components/common/heading";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <MainContainer>
      <Heading type="h1" text="About us" />
      <p
        style={{
          fontSize: 40,
          fontWeight: 200,
          lineHeight: 2,
          color: "rgba(0, 0, 0, 0.7)",
        }}
      >
        Welcome to the official explorer for The New York Times Best Seller list
        explorer.
        <br />
        We hope you enjoy your stay!
      </p>
    </MainContainer>
  );
}
