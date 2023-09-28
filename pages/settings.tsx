import { UserCardImage } from '@/components/UserHeader';
import { useUser } from '@auth0/nextjs-auth0/client';
import { createStyles, Group, Paper, SimpleGrid, Text, rem, Container, Center, Space } from '@mantine/core';
import {
  IconUserPlus,
  IconDiscount2,
  IconReceipt2,
  IconArrowUpRight,
  IconArrowDownRight,
} from '@tabler/icons-react';
import { IconCreditCard, IconUsers, IconMovie, IconEye, IconMessageCircle, IconBuildingBank, IconRepeat, IconReceiptRefund, IconReceipt, IconReceiptTax, IconReport, IconCashBanknote, IconCoin } from '@tabler/icons-react';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
import { UserSettingsCard } from '@/components/UserSettingsCard';

export function AuthenticationForm(props: PaperProps) {
    const { user, error, isLoading } = useUser();

  return (
    <Paper w={rem(500)} radius="md" p="xl" withBorder {...props}>

      <Divider label="User Information" labelPosition="center" my="lg" />

        <Stack>

         <TextInput
            label="Name"
            placeholder={user?.name}
            radius="md"
            disabled
          />

        <TextInput
            label="Username"
            placeholder={user?.nickname}
            radius="md"
            disabled
          />

          <TextInput
            label="Email"
            placeholder={user?.email}
            radius="md"
            disabled
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            radius="md"
          />

            <Checkbox
              label="I accept terms and conditions"
            />
        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            size="xs"
          >
            Anchor
          </Anchor>
          <Button variant='default' fullWidth radius="xl">
            Submit
          </Button>
        </Group>
    </Paper>
  );
}
const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
  },

  value: {
    fontSize: rem(24),
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
  },

  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

const icons = {
  user: IconUserPlus,
  discount: IconDiscount2,
  receipt: IconReceipt2,
  coin: IconCoin,
};

interface StatsGridProps {
  data: { title: string; icon: keyof typeof icons; value: string; diff: number }[];
}

export function StatsGrid() {
  const { classes } = useStyles();

    const DiffIcon = 35 > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper withBorder p="md" radius="md">
        <Group position="apart">
          <Text size="xs" color="dimmed" className={classes.title}>
            stat.title
          </Text>
          <IconUserPlus size="1.4rem" stroke={1.5} />
        </Group>

        <Group align="flex-end" spacing="xs" mt={25}>
          <Text className={classes.value}>stat.value</Text>
          <Text color={35 > 0 ? 'teal' : 'red'} fz="sm" fw={500} className={classes.diff}>
            <span>35%</span>
            <DiffIcon size="1rem" stroke={1.5} />
          </Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
          Compared to previous month
        </Text>
      </Paper>
    );
}

export default function SettingsPage() {
    const { user, error, isLoading } = useUser();
    const currUser = '@' + user?.nickname
    return (
        <>
            <UserCardImage 
                image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNN1_xb3CU2pg_og8HMz5_OJCa_uNNioD_X36gYwam&s'}
                avatar={user?.picture} 
                name={currUser} 
                job={user?.name} 
                stats={[
                   {label: 'followers', value:'3500'},
                   {label: 'following', value:'544545'},
                   {label: 'posts', value:'0'},
                ]}/>
            <Space h='xl'/>
            <SimpleGrid cols={4}>
                <StatsGrid/>
                <StatsGrid/>
                <StatsGrid/>
                <StatsGrid/>
            </SimpleGrid>
            <Space h="xl"/>
            <Container>
                <Group position='apart'>
                   
                  {/* <SimpleGrid cols={2}> */}
                    <UserSettingsCard />
                    <AuthenticationForm/> 
                {/* </SimpleGrid> */}
                </Group>
            </Container>
            
        </>
    );
}
