import { Button, ButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import CharTransition from '../../lib';

const Demo = () => {
  useEffect(() => {}, []);
  const [appendString, setAppendString] = useState(true);
  const [appendNumber, setAppendNumber] = useState(true);
  return (
    <div className='Demo'>
      <h2>Demo</h2>

      <div className='c'>
        <CharTransition preChar='-' gap={500} pause={appendString} list={['A', 'B']}>
          psychology
        </CharTransition>
      </div>

      <div className='c'>
        <CharTransition gap={500} preChar='?' pause={appendNumber}>
          1938402
        </CharTransition>
      </div>

      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            setAppendString((d) => !d);
          }}
        >
          String
        </Button>
        <Button
          onClick={() => {
            setAppendNumber((d) => !d);
          }}
        >
          Number
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
