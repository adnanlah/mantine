import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsStylesApi,
  itSupportsMargins,
} from '@mantine/tests';
import { TransferList } from './TransferList';

const requiredProps = { available: [], selected: [] };
const Wrapper = () => <TransferList {...requiredProps} />;

describe('@mantine/core/TransferList', () => {
  checkAccessibility([mount(<Wrapper />)]);
  itSupportsOthers(TransferList, requiredProps);
  itSupportsStyle(TransferList, requiredProps);
  itSupportsRef(TransferList, requiredProps, HTMLDivElement, 'leftListRef');
  itSupportsRef(TransferList, requiredProps, HTMLDivElement, 'rightListRef');
  itSupportsClassName(TransferList, requiredProps);
  itSupportsMargins(TransferList, requiredProps);

  itSupportsStylesApi(
    TransferList,
    requiredProps,
    [
      'root',
      'actions',
      'listRoot',
      'listContainer',
      'listTitle',
      'list',
      'actions',
      'item',
      'searchBar',
    ],
    'TransferList'
  );

  it('has correct displayName', () => {
    expect(TransferList.displayName).toEqual('@mantine/core/TransferList');
  });

  it('renders empty placeholder', () => {
    const nonEmpty = shallow(<TransferList available={['abc']} selected={['def']} />).render();
    const empty = shallow(<TransferList available={[]} selected={[]} />).render();
    const emptyAvailable = shallow(<TransferList available={[]} selected={['abc']} />).render();
    const emptySelected = shallow(<TransferList available={['abc']} selected={[]} />).render();
    const withCustomPlaceholder = shallow(
      <TransferList available={['abc']} selected={[]} emptyPlaceholder="Custom empty placeholder" />
    ).render();

    expect(nonEmpty.find('.mantine-TransferList-empty').length).toBe(0);
    expect(empty.find('.mantine-TransferList-empty').length).toBe(2);
    expect(emptyAvailable.find('.mantine-TransferList-empty').length).toBe(1);
    expect(emptySelected.find('.mantine-TransferList-empty').length).toBe(1);
    expect(withCustomPlaceholder.find('.mantine-TransferList-empty').text()).toBe(
      'Custom empty placeholder'
    );
  });

  it('sets custom list labels', () => {
    const withDefaultLabels = shallow(<TransferList available={[]} selected={[]} />).render();
    const withCustomAvailableLabel = shallow(
      <TransferList available={[]} selected={[]} leftLabel="Custom label" />
    ).render();
    const withCustomSelectedLabel = shallow(
      <TransferList available={[]} selected={[]} rightLabel="Custom label" />
    ).render();

    const defaultLabels = withDefaultLabels.find('.mantine-TransferList-listTitle');
    expect(defaultLabels.length).toBe(2);
    expect(defaultLabels.slice(0, 1).text()).toBe('Available');
    expect(defaultLabels.slice(1, 2).text()).toBe('Selected');

    expect(
      withCustomAvailableLabel.find('.mantine-TransferList-listTitle').slice(0, 1).text()
    ).toBe('Custom label');
    expect(withCustomSelectedLabel.find('.mantine-TransferList-listTitle').slice(1, 2).text()).toBe(
      'Custom label'
    );
  });

  it('has polymorphic lists', async () => {
    const TestComponent = (props: any) => <ol {...props} />;

    const withDefaultTag = shallow(<TransferList {...requiredProps} />);
    const withTag = shallow(<TransferList listComponent="ul" {...requiredProps} />);
    const withComponent = shallow(
      <TransferList listComponent={TestComponent} {...requiredProps} />
    );

    expect(withDefaultTag.render().find('.mantine-TransferList-list').is('div')).toBe(true);
    expect(withTag.render().find('.mantine-TransferList-list').is('ul')).toBe(true);
    expect(withComponent.render().find('.mantine-TransferList-list').is('ol')).toBe(true);
  });

  it('calls onChange when action buttons are clicked', () => {
    const handleChange = jest.fn();

    const element = mount(
      <TransferList
        available={['abc', 'def', 'ghi']}
        selected={['123', '456', '789']}
        onChange={handleChange}
      />
    );

    expect(handleChange).not.toBeCalled();

    element.find('.mantine-TransferList-action').first().simulate('click');
    element.find('.mantine-TransferList-action').last().simulate('click');

    expect(handleChange).toBeCalledTimes(2);
  });

  it('can render items with checkboxes', () => {
    const available = ['123', '456', '789'];
    const selected = ['abc', 'def', 'ghi'];

    const withoutCheckboxes = shallow(<TransferList available={available} selected={selected} />);
    const withCheckboxes = shallow(
      <TransferList available={available} selected={selected} checkboxes />
    );

    const totalItems = available.length + selected.length;

    expect(withoutCheckboxes.render().find('.mantine-TransferListItem-item').length).toBe(
      totalItems
    );
    expect(withoutCheckboxes.render().find('.mantine-Checkbox-root').length).toBe(0);

    expect(withCheckboxes.render().find('.mantine-TransferListItem-item').length).toBe(totalItems);
    expect(withCheckboxes.render().find('.mantine-Checkbox-root').length).toBe(totalItems);
  });
});
