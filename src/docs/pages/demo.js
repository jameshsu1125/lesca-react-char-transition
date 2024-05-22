import { Button, ButtonGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import CharTransition from '../../lib';
import { Bezier } from 'lesca-object-tweener';

const Demo = () => {
  useEffect(() => {}, []);
  const [appendString, setAppendString] = useState(true);
  const [appendNumber, setAppendNumber] = useState(true);
  return (
    <div className='Demo'>
      <h2>Demo</h2>

      <div className='c'>
        <CharTransition
          preChar='-'
          onEnd={() => {
            console.log('aaaaa');
          }}
          gap={500}
          pause={appendString}
        >
          psychology
        </CharTransition>
      </div>

      <div className='c'>
        <CharTransition
          duration={5000}
          preChar='?'
          pause={appendNumber}
          easing={Bezier.easeInOutQuart}
        >
          19384021938402193840219384021938402
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
