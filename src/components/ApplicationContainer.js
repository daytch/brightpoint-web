import { AppShell } from "@mantine/core";
import Footer from "@components/Footer";
import Header from "@components/Header";

export const ApplicationContainer = ({ children }) => {
  return (
    <AppShell
      style={{
        main: {
          background: "#FFFF",
          width: "100vw",
          height: "100vh",
          paddingLeft: "0px",
        },
      }}
      fixed
      footer={<Footer />}
      header={<Header />}
    >
      {children}
    </AppShell>
  );
};
