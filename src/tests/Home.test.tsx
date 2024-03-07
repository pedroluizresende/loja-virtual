import { fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Home from '../pages/Home';
import { renderWithRouter } from './utils/renderWithRouter';
import mockDatabase from './mocks/mockDatabase';

describe.skip('Testando Home page...', () => {
  const mockFetch = vi.spyOn(global, 'fetch');

  beforeAll(() => {
    mockFetch.mockResolvedValue(
      {
        json: async () => mockDatabase,
      } as Response,
    );
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  test('Deve renderizar a home page corretamente', async () => {
    renderWithRouter(<Home />);

    const loadingEl = screen.getByText(/carregando\.\.\./i);

    expect(loadingEl).toBeInTheDocument();

    vi.waitFor(() => {
      expect(loadingEl).not.toBeInTheDocument();
    });

    expect(mockFetch).toHaveBeenCalledWith('http://localhost:3001/produtos');

    const headerTitleEl = await screen.findByRole('heading', { name: /loja virtual/i });

    expect(headerTitleEl).toBeInTheDocument();

    const productsLinkel = await screen.findByRole('heading', { name: /loja virtual/i });
    const shopCartLinkEl = await screen.findByRole('link', { name: /carrinho/i });

    expect(productsLinkel).toBeInTheDocument();
    expect(shopCartLinkEl).toBeInTheDocument();
  });
  test('Deve renderizar os produtos corretamente', async () => {
    renderWithRouter(<Home />);

    const loadingEl = screen.getByText(/carregando\.\.\./i);

    vi.waitFor(() => { expect(loadingEl).not.toBeInTheDocument(); });

    expect(mockFetch).toHaveBeenCalledWith('http://localhost:3001/produtos');

    const titleEl = await screen.findByRole('heading', { name: /produtos/i });
    expect(titleEl).toBeInTheDocument();

    const product1 = await screen.findByRole('img', { name: /playstation 5/i });

    const lastProduct = await screen.findByRole('img', { name: /razer deathadder v2 gaming mouse/i });

    const allProducts = await screen.findAllByRole('img');

    expect(allProducts).toHaveLength(8);

    expect(product1).toBeInTheDocument();

    expect(product1).toBeInTheDocument();
  });

  test('Testa a paginação dos produtos', async () => {
    renderWithRouter(<Home />);
    const loadingEl = screen.getByText(/carregando\.\.\./i);

    vi.waitFor(() => { expect(loadingEl).not.toBeInTheDocument(); });

    const products = await screen.findAllByRole('img');

    expect(products).toHaveLength(8);

    const nextButton = await screen.findByRole('button', { name: /go to next page/i });

    fireEvent.click(nextButton);

    const newProducts = await screen.findAllByRole('img');

    expect(newProducts).toHaveLength(2);

    const previousButton = await screen.findByRole('button', { name: /go to previous page/i });

    fireEvent.click(previousButton);

    const previousProducts = await screen.findAllByRole('img');

    expect(previousProducts).toHaveLength(8);
  });

  test('Deve renderizar a mensagem de erro corretamente', async () => {
    mockFetch.mockRejectedValue({ message: 'Erro ao carregar os produtos.' });

    renderWithRouter(<Home />);

    const loadingEl = screen.getByText(/carregando\.\.\./i);

    vi.waitFor(() => { expect(loadingEl).not.toBeInTheDocument(); });

    expect(mockFetch).toHaveBeenCalledWith('http://localhost:3001/produtos');

    const errorEl = await screen.findByText(/erro ao carregar os produtos\./i);

    expect(errorEl).toBeInTheDocument();
  });
});
