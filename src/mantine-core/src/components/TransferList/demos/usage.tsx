import React from 'react';
import { TransferList, TransferListProps } from '../TransferList';

const codeTemplate = (props: string) => `
<TransferList
    available={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']}
    selected={[]}
    size="sm"

   ${props}
/>`;

function Wrapper(props: TransferListProps) {
  return (
    <TransferList
      available={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']}
      selected={[]}
      size="sm"
      {...props}
    />
  );
}

export const usage: MantineDemo = {
  type: 'configurator',
  // @ts-ignore - Suppress `{ children?: ReactNode } missing` warning since TransferList does not support children
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'leftLabel',
      type: 'string',
      initialValue: 'Available',
    },
    { name: 'emptyPlaceholder', type: 'string', initialValue: 'No items found...' },
    { name: 'checkboxes', type: 'boolean', initialValue: false },
    { name: 'showLeftSearchBar', type: 'boolean', initialValue: true },
  ],
};
