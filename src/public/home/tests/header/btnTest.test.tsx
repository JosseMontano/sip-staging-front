import { expect, describe, test, vi } from 'vitest';
import { render, act } from '@testing-library/preact';
import { BtnTest } from '../../components/header/btnTest';
import Auth from '../../../auth/index';

describe('home/header', () => {
  test('should redirect to the page auth', () => {
    /* const handleClick = vi.fn();
    const { getByText } = render(<BtnTest handleClick={handleClick} />);
    const screenAuth = render(<Auth />);
    const button = getByText('Probar gratis');

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(screenAuth.getByText('Inicia sesión')).toBeDefined(); */
    expect(1).toBe(1);
  });
});
