import React from 'react';
import { TransferList } from '../TransferList';

const code = `
import React from 'react';
import { TransferList } from '@mantine/core';

function Demo() {
  return <TransferList available={['Mantine']} selected={[]} leftLabel="Good" rightLabel="Bad" />;
}
`;

function Demo() {
  return <TransferList available={['Mantine']} selected={[]} leftLabel="Good" rightLabel="Bad" />;
}

export const labels: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
