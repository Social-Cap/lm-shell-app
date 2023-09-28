import { createStyles, Card, Group, Switch, Text, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  item: {
    '& + &': {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },
  },

  switch: {
    '& *': {
      cursor: 'pointer',
    },
  },

  title: {
    lineHeight: 1,
  },
}));


export function UserSettingsCard() {
  const { classes } = useStyles();

  return (
    <Card w={rem(350)} withBorder radius="md" p="xl" className={classes.card}>
      <Text fz="lg" className={classes.title} fw={500}>
        title
      </Text>
      <Text fz="xs" c="dimmed" mt={3} mb="xl">
        description
      </Text>
      <Group position="apart" className={classes.item} noWrap spacing="xl">
            <div>
                <Text>item.title</Text>
                <Text size="xs" color="dimmed">
                    item.description
                </Text>
            </div>
            <Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" />
        </Group>
        <Group position="apart" className={classes.item} noWrap spacing="xl">
            <div>
                <Text>item.title</Text>
                <Text size="xs" color="dimmed">
                    item.description
                </Text>
            </div>
            <Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" />
        </Group>
        <Group position="apart" className={classes.item} noWrap spacing="xl">
            <div>
                <Text>item.title</Text>
                <Text size="xs" color="dimmed">
                    item.description
                </Text>
            </div>
            <Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" />
        </Group>
        <Group position="apart" className={classes.item} noWrap spacing="xl">
            <div>
                <Text>item.title</Text>
                <Text size="xs" color="dimmed">
                    item.description
                </Text>
            </div>
            <Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" />
        </Group>
        <Group position="apart" className={classes.item} noWrap spacing="xl">
            <div>
                <Text>item.title</Text>
                <Text size="xs" color="dimmed">
                    item.description
                </Text>
            </div>
            <Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" />
        </Group>
        <Group position="apart" className={classes.item} noWrap spacing="xl">
            <div>
                <Text>item.title</Text>
                <Text size="xs" color="dimmed">
                    item.description
                </Text>
            </div>
            <Switch onLabel="ON" offLabel="OFF" className={classes.switch} size="lg" />
        </Group>
    </Card>
  );
}