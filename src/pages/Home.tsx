import { useEffect, useState } from "react"
import Header from "../components/Header"
import ProductCard from "../components/ProductCard"

function Home() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('http://localhost:3001/produtos')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    fetchProducts()
    setIsLoading(false)
  }, [])

  if(isLoading) return <p>Carregando...</p>

  return (
    <main>
      <Header />
      <h1>Produtos</h1>
      <ul>
        {
          products.map((product: any) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))
        }
      </ul>
    </main>
  )
}

export default Home