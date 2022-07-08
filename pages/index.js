import { useEffect, useState } from "react";
import {
  Header,
  Box,
  Grid,
  Center,
  Container,
  Card,
  Button,
  Text,
  Input,
  Modal,
} from "@mantine/core";
import TableHistory from "@components/TableHistory";
import Convert from "@components/Convert";
import { Circle, Refresh, Gift, Ticket, History } from "tabler-icons-react";
import Member from "@api/member";
import { QRCodeSVG } from "qrcode.react";

function Home() {
  const [token, setToken] = useState("");
  const [resourceID, setResourceID] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [offers, setOffers] = useState([]);
  const [user, setUser] = useState({});
  const [point, setPoint] = useState(null);
  const [custNumber, setCustNumber] = useState(null);
  const [activeComponent, setActiveComponent] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setResourceID(localStorage.getItem("resourceID"));

    const fetchData = async () => {
      let token = localStorage.getItem("token");
      let resourceID = localStorage.getItem("resourceID");

      const payload = { token: token, resourceID: resourceID };
      const [firstResponse, secondResponse, thirdResponse] = await Promise.all([
        Member.getProfile(payload),
        Member.getTransactions(payload),
        Member.getOffers(payload),
      ]);

      if (firstResponse.ErrorCode === 0) {
        setUser(firstResponse.Data);
        setPoint(firstResponse.Data.ProgramMembership.PointsBalance);
        setCustNumber(firstResponse.Data.ProgramMembership.MembershipNumber);
      }
      if (secondResponse.ErrorCode === 0) {
        setTransactions(secondResponse.Data.Items);
      }
      if (thirdResponse.ErrorCode === 0) {
        setOffers(thirdResponse.Data.Items);
      }
    };

    fetchData().catch(console.error);
  }, []);

  const renderKlaimPoin = () => {
    return (
      <Card mx="xl" mt={100} shadow="sm" p="lg" style={{ width: "30vw" }}>
        <Container>
          <Text>Masukkan kode untuk mengklaim hadiah</Text>

          <Input mt={10} placeholder="Gift Code" />

          <Button mt={10}>Klaim Poin</Button>
        </Container>
      </Card>
    );
  };

  const renderBoxI = () => {
    return (
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          textAlign: "center",
          padding: theme.spacing.sm,
          borderRadius: theme.radius.md,
        })}
      >
        <Grid>
          <Grid.Col span={6}>
            <Text weight="bolder">Bright Points</Text>
            {point && <Text>{point} poin</Text>}
          </Grid.Col>
          <Grid.Col
            onClick={() => setActiveComponent("history")}
            span={6}
            style={{ color: "red", cursor: "pointer" }}
          >
            <Text size="xs" style={{ marginTop: "15px", marginRight: "-50px" }}>
              History Poin >
            </Text>
          </Grid.Col>
        </Grid>
      </Box>
    );
  };
  const renderBoxII = () => {
    return (
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          textAlign: "center",
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          // cursor: "pointer",
        })}
      >
        <Grid justify="space-between">
          <Grid.Col span={6} ml={0}>
            <Grid>
              {custNumber && (
                <QRCodeSVG
                  size={44}
                  value={custNumber}
                  imageSettings={{ height: 9, width: 9 }}
                  style={{ marginLeft: 0 }}
                />
              )}
            </Grid>
          </Grid.Col>
          <Grid.Col span={6}>
            <Grid
              justify="flex-end"
              onClick={() => setModalVisible(true)}
              style={{ cursor: "pointer" }}
            >
              <Text size="xs" color="red">
                ID Saya >
              </Text>
              <Text size="xs">Lihat QR code</Text>
            </Grid>
          </Grid.Col>
        </Grid>
      </Box>
    );
  };
  const renderBoxIII = () => {
    return (
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          textAlign: "center",
          padding: theme.spacing.sm,
          borderRadius: theme.radius.md,
          cursor: "pointer",
        })}
      >
        <Grid justify="space-between">
          <Grid.Col span={2} onClick={() => setActiveComponent("klaim")}>
            <Circle size={25} color={"#bf405b"} />
            <Text size="xs">Klaim Poin</Text>
          </Grid.Col>
          <Grid.Col span={2} onClick={() => setActiveComponent("convert")}>
            <Refresh size={25} color={"#bf405b"} />
            <Text size="xs">Convert</Text>
          </Grid.Col>
          <Grid.Col span={2} onClick={() => setActiveComponent("reward")}>
            <Gift size={25} color={"#bf405b"} />
            <Text size="xs">Rewards</Text>
          </Grid.Col>
          <Grid.Col span={2} onClick={() => setActiveComponent("myreward")}>
            <Ticket size={25} color={"#bf405b"} />
            <Text size="xs">My Rewards</Text>
          </Grid.Col>
          <Grid.Col span={2} onClick={() => setActiveComponent("order")}>
            <History size={25} color={"#bf405b"} />
            <Text size="xs">Order Activity</Text>
          </Grid.Col>
        </Grid>
      </Box>
    );
  };

  const renderSwitch = () => {
    switch (activeComponent) {
      case "history":
        return <TableHistory data={transactions} poin={point} />;
      case "klaim":
        return renderKlaimPoin();
      case "convert":
        return <Convert />;
      case "reward":
        return <TableHistory data={transactions} poin={point} />;
      case "myreward":
        return <TableHistory data={transactions} poin={point} />;
      case "order":
        return <TableHistory data={transactions} poin={point} />;
      default:
        return "foo";
    }
  };

  return (
    <Center>
      <Header mt={55} mb={150} style={{ background: "#C20B27" }}>
        <Grid mx={90} py={10} columns={24}>
          <Grid.Col span={6}>{renderBoxI()} </Grid.Col>
          <Grid.Col span={4}>{renderBoxII()}</Grid.Col>
          <Grid.Col span={14}>{renderBoxIII()}</Grid.Col>
        </Grid>
      </Header>
      <Modal
        withCloseButton={false}
        centered
        opened={modalVisible}
        onClose={() => setModalVisible(false)}
        // title="Tunjukkan kode ini kepada kasir"
      >
        <Box
          sx={(theme) => ({
            textAlign: "center",
          })}
        >
          <Text size="xl" mx={25}>
            Tunjukkan kode ini kepada kasir
          </Text>
          {custNumber && (
            <QRCodeSVG
              size={230}
              value={custNumber}
              // imageSettings={{ height: 25, width: 25 }}
              style={{ marginTop: 25 }}
            />
          )}
          <Text my={15}>ID BRIGHT POINTS</Text>
          <Text mb={15} weight="bold">
            {custNumber}
          </Text>
          <Button my={15} onClick={() => setModalVisible(false)}>
            Tutup
          </Button>
        </Box>
      </Modal>
      <Container mt={70}>{renderSwitch()}</Container>
    </Center>
  );
}

export default Home;
