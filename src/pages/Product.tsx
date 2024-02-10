import { useEffect, useState } from "react"
import Header from "../components/Header"

interface Product {
  id: number
  name: string
  price: number
  description: string
  image: string
}

function Product() {
  const [product, setProduct] = useState({} as Product)
  const [loading, setLoading] = useState(true)

  const fetchProduct = async () => {
    setLoading(true)
    try {
      const id = window.location.pathname.split('/').pop()
      const response = await fetch(`http://localhost:3001/produtos/${id}`)
      const data = await response.json()
      setProduct(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <main>
      <Header />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <section>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
        <button>Adicionar ao carrinho</button>
        </section>
      )}
    </main>
  )
}

export default Product