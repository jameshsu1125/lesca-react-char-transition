import { Button, ButtonGroup } from '@mui/material';
import { useEffect } from 'react';
import AAA from '../../lib';

const Demo = () => {
  useEffect(() => {}, []);
  return (
    <div className='Demo'>
      <h2>Demo</h2>
      <ButtonGroup variant='contained'>
        <Button>click</Button>
      </ButtonGroup>
    </div>
  );
};
export default Demo;
