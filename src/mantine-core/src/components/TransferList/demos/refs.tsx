import React, { useRef } from 'react';
import { TransferList } from '../TransferList';

const code = `
import React, { useRef } from 'react';
import { TransferList } from '../TransferList';

function Demo() {
  const leftListRef = useRef<HTMLDivElement>();

  const handleChange = () => {
    // console.log(leftListRef.current.children); // Logs HTML elements of items in left list
  };

  return (
    <TransferList
      available={['123', '456', '789']}
      selected={['abc', 'def', 'ghi']}
      leftListRef={leftListRef}
      onChange={handleChange}
    />
  );
}
`;

function Demo() {
  const leftListRef = useRef<HTMLDivElement>();

  const handleChange = () => {
    // console.log(leftListRef.current.children); // Logs HTML elements of items in left list
  };

  return (
    <TransferList
      available={['123', '456', '789']}
      selected={['abc', 'def', 'ghi']}
      leftListRef={leftListRef}
      onChange={handleChange}
    />
  );
}

export const refs: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
