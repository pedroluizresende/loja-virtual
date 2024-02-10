import { render, screen, waitFor} from '@testing-library/react'
import Home from "../pages/Home"
import { vi } from 'vitest'
import { a } from 'vitest/dist/suite-ghspeorC.js'

describe('Home page', () => {
  test('render loading messsage initially', () => {
    render(<Home />);
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
  })
  test('render products after loading', async () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 100, image: 'image1' },
      { id: 2, name: 'Product 2', price: 200, image: 'image2' },
    ];

    global.fetch = vi.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockProducts)
    } as Response));

    render(<Home />);

    await waitFor(() => {
      expect(screen.queryByText('Carregando...')).not.toBeInTheDocument();
    });

    // const renderedProducts = await screen.findAllByTestId(/product-card-/);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/produtos');
  })

})