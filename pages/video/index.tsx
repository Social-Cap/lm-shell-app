import useWindowSize from 'react-use/lib/useWindowSize'
import { Paper } from '@mantine/core';

export default function VideoPage() {
    const { width, height } = useWindowSize()
    return (
        <>
        <Paper h={height} w={width} color='dark'>
            <iframe
            width={'100%'}
            height={'100%'}
            title="lm-livestream-service"
            allow="camera *;microphone *;display-capture *"
            src="https://server.limitlesslive.io/meeting/aiy-kqkv-pbe"></iframe>
        </Paper>
        </>
    );
}