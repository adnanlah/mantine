import React from 'react';
import { TransferList } from '../TransferList';

const code = `
import React from 'react';
import { TransferList } from '../TransferList';

function Demo() {
  return (
    <>
      <TransferList available={['123', '456', '789']} selected={['abc', 'def', 'ghi']} size="xs" />
      <TransferList available={['123', '456', '789']} selected={['abc', 'def', 'ghi']} size="md" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <TransferList available={['123', '456', '789']} selected={['abc', 'def', 'ghi']} size="xs" />
      <TransferList available={['123', '456', '789']} selected={['abc', 'def', 'ghi']} size="md" />
    </>
  );
}

export const size: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
