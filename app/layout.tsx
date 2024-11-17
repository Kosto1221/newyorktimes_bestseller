import "../styles/global.css";
import Navigation from "../components/common/navigation";

export const metadata = {
  title: {
    template: "%s | The New York Times Best Seller",
    default: "The New York Times Best Seller",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
