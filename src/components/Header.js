import React, { useEffect, useState } from "react";
import { Header, Group, Anchor, Button, Text, Grid } from "@mantine/core";
import Head from "next/head";
import Member from "@api/member";

function HeaderComponent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("You are on the browser");
      setToken(localStorage.getItem("token"));
    } else {
      console.log("You are on the server");
    }
  }, []);

  const renderLoginHeader = () => {
    return (
      <>
        <Anchor style={{ color: "black" }}>Brightku</Anchor>
        <Anchor style={{ color: "black" }}>Cara Penggunaan</Anchor>
        <Anchor style={{ color: "black" }}>Bantuan</Anchor>
        <Anchor style={{ color: "black" }}>Tentang</Anchor>
        <Anchor style={{ color: "black" }}>Pengaturan Akun</Anchor>
        <Button variant="outline" color="red">
          Keluar
        </Button>
      </>
    );
  };

  const renderUnLoginHeader = () => {
    return (
      <>
        <Anchor style={{ color: "black" }}>Brightku</Anchor>
        <Anchor style={{ color: "black" }}>Cara Penggunaan</Anchor>
        <Anchor style={{ color: "black" }}>Bantuan</Anchor>
        <Anchor style={{ color: "black" }}>Tentang</Anchor>
        <Button variant="outline" color="red">
          Masuk
        </Button>
      </>
    );
  };

  return (
    <>
      <Head>
        <title>Bright Points</title>
        <meta name="description" content="Bright Points" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header height={55} p="xs">
        <Grid columns={24} mx={90}>
          <Grid.Col span={8}>
            <Text size="xl" weight="bolder">
              Bright Points
            </Text>
          </Grid.Col>
          <Grid.Col span={16}>
            <Group position="apart">
              {token ? renderLoginHeader() : renderUnLoginHeader()}
            </Group>
          </Grid.Col>
        </Grid>
      </Header>
    </>
  );
}

export async function getStaticProps() {
  try {
    if (typeof window !== "undefined") {
      console.log("You are on the browser");
      let token = localStorage.getItem("token");
      let resourceID = localStorage.getItem("resourceID");

      let a = await Member.getProfile({
        token: token,
        resourceID: resourceID,
      }).then((x) => {
        return {
          props: {
            user: x,
          },
        };
      });
      return a;
    } else {
      console.log("You are on the server");
      return { props: { user: {} } };
    }
  } catch (error) {
    console.log(error);
  }
}

export default HeaderComponent;
