import { Image, Text, Grid, Box } from "@mantine/core";
import { ChevronRight } from "tabler-icons-react";

const Convert = () => {
  return (
    <Grid mt={100}>
      <Grid.Col span={6}>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",
            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
        >
          <Grid>
            <Grid.Col span={2}>
              <Image
                fit="contain"
                radius="md"
                width={50}
                height={50}
                src="https://test-rewards.brightpoints.id/media/1047/garuda-miles.png"
              />
            </Grid.Col>
            <Grid.Col span={9}>
              <Text>Garuda Miles</Text>
              <Text size="xs">Convert dari Garuda Miles ke Bright Points</Text>
            </Grid.Col>
            <Grid.Col span={1}>
              <ChevronRight size={36} strokeWidth={1.5} color={"black"} />
            </Grid.Col>
          </Grid>
        </Box>
      </Grid.Col>
      <Grid.Col span={6}>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
        >
          <Grid>
            <Grid.Col span={2}>
              <Image
                fit="contain"
                radius="md"
                width={50}
                height={50}
                src="https://test-rewards.brightpoints.id/media/1049/telkomsel-poin.png"
              />
            </Grid.Col>
            <Grid.Col span={9}>
              <Text>Telkomsel Poin</Text>
              <Text size="xs">
                Convert dari Telkomsel Poin ke Bright Points
              </Text>
            </Grid.Col>
            <Grid.Col span={1}>
              <ChevronRight size={36} strokeWidth={1.5} color={"black"} />
            </Grid.Col>
          </Grid>
        </Box>
      </Grid.Col>
      <Grid.Col span={6}>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
        >
          <Grid>
            <Grid.Col span={2}>
              <Image
                fit="contain"
                radius="md"
                width={50}
                height={50}
                src="https://test-rewards.brightpoints.id/media/1046/fiesta-poin.png"
              />
            </Grid.Col>
            <Grid.Col span={9}>
              <Text>Mandiri Fiesta Poin</Text>
              <Text size="xs">Convert dari Fiesta Poin ke Bright Points</Text>
            </Grid.Col>
            <Grid.Col span={1}>
              <ChevronRight size={36} strokeWidth={1.5} color={"black"} />
            </Grid.Col>
          </Grid>
        </Box>
      </Grid.Col>
      <Grid.Col span={6}>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
        >
          <Grid>
            <Grid.Col span={2}>
              <Image
                fit="contain"
                radius="md"
                width={50}
                height={50}
                src="https://test-rewards.brightpoints.id/media/1045/bri-poin.png"
              />
            </Grid.Col>
            <Grid.Col span={9}>
              <Text>BRI Poin</Text>
              <Text size="xs">Convert dari BRI Poin ke Bright Points</Text>
            </Grid.Col>
            <Grid.Col span={1}>
              <ChevronRight size={36} strokeWidth={1.5} color={"black"} />
            </Grid.Col>
          </Grid>
        </Box>
      </Grid.Col>
      <Grid.Col span={6}>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
        >
          <Grid>
            <Grid.Col span={2}>
              <Image
                fit="contain"
                radius="md"
                width={50}
                height={50}
                src="https://test-rewards.brightpoints.id/media/1044/bni-poin.png"
              />
            </Grid.Col>
            <Grid.Col span={9}>
              <Text>BNI Poin+</Text>
              <Text size="xs">Convert dari BNI Poin+ ke Bright Points</Text>
            </Grid.Col>
            <Grid.Col span={1}>
              <ChevronRight size={36} strokeWidth={1.5} color={"black"} />
            </Grid.Col>
          </Grid>
        </Box>
      </Grid.Col>
      <Grid.Col span={6}>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",

            "&:hover": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1],
            },
          })}
        >
          <Grid>
            <Grid.Col span={2}>
              <Image
                fit="contain"
                radius="md"
                width={50}
                height={50}
                src="https://test-rewards.brightpoints.id/media/1048/hujan-rezeki.png"
              />
            </Grid.Col>
            <Grid.Col span={9}>
              <Text>Hujan Rezeki BSI Mobile</Text>
              <Text size="xs">Convert dari Hujan Rezeki ke Bright Points</Text>
            </Grid.Col>
            <Grid.Col span={1}>
              <ChevronRight size={36} strokeWidth={1.5} color={"black"} />
            </Grid.Col>
          </Grid>
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default Convert;
