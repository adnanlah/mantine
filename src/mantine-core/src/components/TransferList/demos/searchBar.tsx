import React from 'react';
import { TransferList, IListItem } from '../TransferList';

const code = `
import React from 'react';
import { TransferList, IListItem } from '@mantine/core';

function Demo() {
  const searchItems = (items: IListItem[], search: string): IListItem[] =>
    items.filter((item) => item.value === search);

  return (
    <TransferList
      available={['Item 1', 'Item 2', 'Item 3']}
      selected={['Item 01', 'Item 02', 'Item 03']}
      showRightSearchBar={false} // Disable search bar for right list
      searchItems={searchItems} // Override default search to only show items that match the search term exactly
      leftEmptyPlaceholder="No items match search exactly."
    />
  );
}
`;

function Demo() {
  const searchItems = (items: IListItem[], search: string): IListItem[] =>
    items.filter((item) => item.value === search);

  return (
    <TransferList
      available={['Item 1', 'Item 2', 'Item 3']}
      selected={['Item 01', 'Item 02', 'Item 03']}
      showRightSearchBar={false} // Disable search bar for right list
      searchItems={searchItems} // Override default search to only show items that match the search term exactly
      leftEmptyPlaceholder="No items match search exactly."
    />
  );
}

export const searchBar: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
