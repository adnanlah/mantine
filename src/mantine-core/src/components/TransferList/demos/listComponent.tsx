import React from 'react';
import { TransferList } from '../TransferList';

const code = `
import React from 'react';
import { TransferList } from '../TransferList';

function Demo() {
  return (
    <TransferList
      available={['123', '456', '789']}
      selected={['abc', 'def', 'ghi']}
      listComponent="ul"
    />
  );
}
`;

function Demo() {
  return (
    <TransferList
      available={['123', '456', '789']}
      selected={['abc', 'def', 'ghi']}
      listComponent="ul"
    />
  );
}

export const listComponent: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
