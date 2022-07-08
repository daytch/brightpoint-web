import React, { useState } from "react";
import { Paper, Center,Container, Input, Button, Group, Text } from "@mantine/core";
import { Key, UserCircle } from "tabler-icons-react";
import Member from "@api/member";

export default function Login() {
  const [email, setEmail] = useState("me@nurulhidayat.com");
  const [password, setPassword] = useState("(A19clK#5St");
  const onClickLogin = () => {
    Member.login({ email: email, password: password }).then((e) => {
      if (e?.ErrorCode === 0) {
        let data = e.Data;
        localStorage.setItem("token", data.Token);
        localStorage.setItem("resourceID", data.ResourceID);
        window.location.href = "/";
      } else {
      }
    });
  };

  return (
    <Paper shadow="xl" radius="md" p="xl" mt="xl" style={{ width: "30vw" }}>
     <Center>
      <Container size="xs" px={4}>
        <Group position="center">
          <Text size="xl" weight="bolder" mb="xl">
            Login Form
          </Text>
        </Group>
        <Input
          icon={<UserCircle />}
          type="email"
          mb="sm"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Input
          icon={<Key />}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="Your Password"
        />
        <Group position="center" mt={10} spacing="xl">
          <Button onClick={() => onClickLogin()} position="center">
            login
          </Button>
        </Group>
      </Container>
      </Center>
    </Paper>
  );
}
