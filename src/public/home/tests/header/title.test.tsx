import { expect, describe, test } from 'vitest';
import { render, screen, within, act } from '@testing-library/preact';
import Title from '../../components/header/title';

describe('home/header/title', () => {
  test('should render title all the time', () => {
    render(<Title title="Hello" />);
    const { getByText } = within(screen.getByTestId(/title/i));
    expect(getByText('Hello')).toBeDefined();
  });
});
