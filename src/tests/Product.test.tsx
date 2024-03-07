import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import mockDatabase from './mocks/mockDatabase';
import { renderWithRouter } from './utils/renderWithRouter';
import Product from '../pages/Product';

describe('Testando Product page...', () => {
  const mockFetch = vi.spyOn(global, 'fetch');

  beforeAll(() => {
    mockFetch.mockResolvedValue(
      {
        json: async () => mockDatabase[0],
      } as Response,
    );
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  test('Deve renderizar a página de produto corretamente', async () => {
    renderWithRouter(<Product />, { route: '/produto/1' });

    const loadingEl = screen.getByText(/carregando\.\.\./i);

    expect(loadingEl).toBeInTheDocument();

    act(() => {
      vi.waitFor(() => {
        expect(loadingEl).not.toBeInTheDocument();
      });
    });

    expect(mockFetch).toHaveBeenCalledWith('http://localhost:3001/produtos/1');

    const titleEl = await screen.findByRole('img', { name: mockDatabase[0].name });

    const descriptionEl = await screen.findByText(mockDatabase[0].description);

    const priceEl = await screen.findByText(`R$: ${mockDatabase[0].price.toFixed(2).replace('.', ',')}`);

    const imgEl = await screen.findByRole('img', { name: mockDatabase[0].name });

    expect(titleEl).toBeInTheDocument();

    expect(descriptionEl).toBeInTheDocument();

    expect(priceEl).toBeInTheDocument();

    expect(imgEl).toBeInTheDocument();

    expect(imgEl).toHaveAttribute('src', mockDatabase[0].image);
  });
});
