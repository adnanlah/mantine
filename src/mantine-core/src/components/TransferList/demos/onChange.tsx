import React from 'react';
import { TransferList, TransferListData } from '../TransferList';

const code = `
import React from 'react';
import { TransferList, TransferListData } from '@mantine/core';

function Demo() {
  const handleChange = (data: TransferListData) => {
    // console.log(data.available);
  };

  return (
    <TransferList
      available={['Item 1', 'Item 2', 'Item 3']}
      selected={['Item 01', 'Item 02', 'Item 03']}
      onChange={handleChange}
    />
  );
}
`;

function Demo() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (data: TransferListData) => {
    // console.log(data.available);
  };

  return (
    <TransferList
      available={['Item 1', 'Item 2', 'Item 3']}
      selected={['Item 01', 'Item 02', 'Item 03']}
      onChange={handleChange}
    />
  );
}

export const onChange: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
