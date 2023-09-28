import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useState } from 'react';
import { useInterval } from '@mantine/hooks';
import { createStyles, Button, Progress } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    button: {
      position: 'relative',
      transition: 'background-color 150ms ease',
    },
  
    progress: {
      ...theme.fn.cover(-1),
      height: 'auto',
      backgroundColor: 'transparent',
      zIndex: 0,
    },
  
    label: {
      position: 'relative',
      zIndex: 1,
    },
  }));


export default function SendGiftComp(){
    const { classes, theme } = useStyles();
    const { width, height } = useWindowSize()
    const [progress, setProgress] = useState(0);
    const [giftSent, setGiftSent] = useState(false);

    const interval = useInterval(
        () =>
        setProgress((current) => {
            if (current < 150) {
            setGiftSent(true);
            return current + 1;
            }

            interval.stop();
            setGiftSent(false);
            return 0;
        }),
        20
    );
    return(
        <>
            {giftSent == true &&
                <Confetti
                width={width}
                height={height}
                /> 
            }
             <Button
                mt="md"
                variant='default'
                className={classes.button}
                onClick={() => (giftSent ? setGiftSent(false) : !interval.active && interval.start())}
                color={giftSent ? 'teal' : theme.primaryColor}
                >
                <div className={classes.label}>
                    {progress !== 0 ? 'Sending Tip' : giftSent ? 'Gift Sent' : 'Send Tip'}
                </div>
                {progress !== 0 && (
                    <Progress
                    value={progress}
                    className={classes.progress}
                    color={theme.fn.rgba(theme.colors[theme.primaryColor][2], 0.35)}
                    radius="sm"
                    />
                )}
                </Button>
        </>
    );
}