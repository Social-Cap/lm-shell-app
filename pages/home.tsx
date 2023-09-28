import { VideoCard } from "../components/VideoCard";
// import dynamic from 'next/dynamic'
 
// const NoSSR = dynamic(import('../components/VideoCard'), { ssr: false })
import { ScrollArea, Overlay, Divider, Space, Group, Button, Card, SimpleGrid, Grid } from '@mantine/core';
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { Tabs } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { Text, AspectRatio, Paper } from '@mantine/core';
import CreateCommentCard from "@/components/CreateCommentCard";


const liveVideos = [
  {
    link: 'https://streamable.com/e/35a5sc',
    title: 'Warriors & Lakers Instant Classic - 2021 Play-In Tournament 🔥 NBA Classic Game',

  }
];

const lives = liveVideos.map((live) => {
  return(
    <>
      <Space h="xs" />
        <iframe src={live.link} frameborder="0" width="960" height="569" allowFullScreen>
        </iframe>
      <Space h="xs" />
    </>
  );
});


function LiveArray() {
  const [visible, setVisible] = useState(false);
  
  return (
    <>
    <Grid>
      <Grid.Col span={9}>
        <Group position="left" spacing={30}>
            {/* <video src='https://streamable.com/jrtdd3' width="100%" height="100%" controls/> */}
              {lives}
              {!visible && (
            <Overlay blur={15} center>
              <Button variant="default" onClick={() => setVisible(true)}>
                Click to watch LIVE
              </Button>
            </Overlay>
          )}
        </Group>
      </Grid.Col>
      <Grid.Col span="auto">
        <Group position="right">
          <Card color="red">
            <CreateCommentCard/>
          </Card>
        </Group>
      </Grid.Col>
    </Grid>
    </>
  );
}

function LiveScrollHome() {
  return (
    <Carousel w="100%" h="100%" orientation="vertical" mx="auto">
      <LiveArray/>
    </Carousel>
  );
}

function AlgoHome() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <ScrollArea type="never">
            <VideoCard />
        </ScrollArea>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default function VideoPage() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
    <Tabs variant="outline" radius="xs" defaultValue="For You">
      <Tabs.List>
        <Tabs.Tab value="For You">For You</Tabs.Tab>
        <Tabs.Tab value="Live">Live</Tabs.Tab>
        <Tabs.Tab value="Following">Following</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="For You" pt="xs">
        <AlgoHome/>
      </Tabs.Panel>

      <Tabs.Panel value="Live" pt="xs">
        <LiveScrollHome/>
      </Tabs.Panel>

      <Tabs.Panel value="Following" pt="xs">
        Following tab content
      </Tabs.Panel>
    </Tabs>
    </MantineProvider>
    </ColorSchemeProvider>
  );
}

function VideoSpacer() {
    return (
        <>
        <Space h="lg" />
        <Space h="lg" />
        <Space h="lg" />
        <Divider style={{margin: "auto"}} w="80%" />
        <Space h="lg" /> 
        <Space h="lg" />
        <Space h="lg" />
        </>
    );
}


