import React from 'react';
import { TransferList } from '../TransferList';

const code = `
import React from 'react';
import { TransferList } from '@mantine/core';

function Demo() {
  return (
    <TransferList
      available={[]}
      selected={[]}
      emptyPlaceholder="Custom empty list placeholder..."
      leftEmptyPlaceholder="Custom placeholder overridden."
    />
  );
}
`;

function Demo() {
  return (
    <TransferList
      available={[]}
      selected={[]}
      emptyPlaceholder="Custom empty list placeholder..."
      leftEmptyPlaceholder="Custom placeholder overridden."
    />
  );
}

export const emptyLists: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
