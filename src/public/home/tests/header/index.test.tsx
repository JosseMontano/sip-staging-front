import { expect, describe, test, beforeEach } from 'vitest';
import { render, act, screen } from '@testing-library/preact';
import Index from '../../components/header';

describe('home/header', () => {
  beforeEach(() => {
    render(<Index />);
  });

  test('should change the text every 2 seconds', async () => {
    expect(screen.getByText('Gestiona tus clientes')).toBeDefined();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    });

    expect(screen.getByText('Gestiona tus comidas')).toBeDefined();

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    });

    expect(screen.getByText('Gestiona tus clientes')).toBeDefined();
  });

});
