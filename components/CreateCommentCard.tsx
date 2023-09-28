import {
    createStyles,
    Text,
    Avatar,
    Group,
    TypographyStylesProvider,
    Paper,
    rem,
    Textarea,
    ActionIcon,
    useMantineTheme, Space
  } from '@mantine/core';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useState } from 'react';
  
  const useStyles = createStyles((theme) => ({
    comment: {
      padding: `${theme.spacing.lg} ${theme.spacing.xl}`,
    },
  
    body: {
      paddingLeft: rem(54),
      paddingTop: theme.spacing.sm,
      fontSize: theme.fontSizes.sm,
    },
  
    content: {
      '& > p:last-child': {
        marginBottom: 0,
      },
    },
  }));

  
export default function CreateCommentCard() {
    const { user, error, isLoading } = useUser();
    const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
    const toggleColorScheme = (value?: ColorScheme) =>
      setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    const { classes } = useStyles();
    const theme = useMantineTheme();
    return (
        <>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
         <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
            <Space h="md"/>
            <Textarea
                placeholder="Comment"
                autosize
                minRows={1}
                radius="xl"
                style={{overflow: "hidden"}}
                rightSection={
                <ActionIcon size={30} radius="xl" color={theme.primaryColor} variant="default">
                    {theme.dir === 'ltr' ? (
                    <IconArrowRight size="1.1rem" stroke={1.5} />
                    ) : (
                    <IconArrowLeft size="1.1rem" stroke={1.5} />
                    )}
                </ActionIcon>
                }
                icon={
                    <Avatar src={user?.picture}
                    radius="xl" size={30}/>
                }
            />
        <Space h="md"/>
        </MantineProvider>
    </ColorSchemeProvider>
        </>
    );
  }