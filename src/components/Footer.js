import React from "react";
import { Footer, Group, Text } from "@mantine/core";
import { Copyright } from "tabler-icons-react";

const FooterComponent = () => {
  return (
    <Footer height={40} p="xs">
      <Group position="center" spacing="xl">
        <Copyright size={22} strokeWidth={1.5} color={"black"} />
        <Text size="sm" style={{ marginLeft: "-9px" }}>
          <span style={{ fontWeight: "bolder" }}> GetPlus</span>, 2022. All
          rights reserved.
        </Text>
      </Group>
    </Footer>
  );
};

export default FooterComponent;
