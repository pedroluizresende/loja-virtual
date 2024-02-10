import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { CustomMain, ProductsList } from "../styles/home";
import IProduct from "../interfaces/iProduct";
import { Pagination, Stack } from "@mui/material";

function Home() {
  const [products, setProducts] = useState([] as IProduct[]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, seError] = useState(null);
  const productsPerPage = 8;

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:3001/produtos");
      const data = await response.json();
      setProducts(data);
    } catch (error: any) {
      seError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setCurrentPage(value);
  };

  if (isLoading) return <p>Carregando...</p>;

  return (
    <>
      <Header />
      <CustomMain>
        {
          error && <p>{error}</p>
        }
        <h1>Produtos</h1>
        <ProductsList>
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </ProductsList>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(products.length / productsPerPage)}
            page={currentPage}
            onChange={(event, value) => handleChange(event, value)}
          />
        </Stack>
      </CustomMain>
    </>
  );
}

export default Home;
