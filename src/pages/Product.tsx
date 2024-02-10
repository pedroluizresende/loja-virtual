import { useEffect, useState } from "react"
import Header from "../components/Header"
import IProduct from "../interfaces/iProduct"
import IProductInCart from "../interfaces/IProductInCart"
import { Button, CustomMain, DetailImage, DetailSection, TextSection } from "./products"



function Product() {
  const [product, setProduct] = useState({} as IProduct)
  const [loading, setLoading] = useState(true)
  const [inCart, setInCart] = useState(false)
  const [addMessage, setAddMessage] = useState('' as string);

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

  const addProductToCart = () => {
    const productsFromLocalStorage = localStorage.getItem('products')
    const products: IProductInCart[] = productsFromLocalStorage ? JSON.parse(productsFromLocalStorage) : []
    const productInCart = products.find((p: IProductInCart) => p.id === product.id)
    if (productInCart) {
      productInCart.quantity++
    } else {
      products.push({ ...product, quantity: 1 })
    }
    localStorage.setItem('products', JSON.stringify(products))
    setAddMessage('Produto adicionado ao carrinho!')

    const interval = setInterval(() => {
      setAddMessage('')
    }
    , 1000)

    setTimeout(() => {
      clearInterval(interval)
    }, 1000)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <>
    <Header />
    <CustomMain>
        {loading ? (
          <p>Carregando...</p>
          ) : (
            <DetailSection>

              <DetailImage src={product.image} alt={product.name} />
              <TextSection>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h2>{`R$: ${product.price.toFixed(3)}`}</h2>
                <Button onClick={addProductToCart}>Adicionar ao carrinho</Button>
                {
                 addMessage.length > 0 && <span>{ addMessage }</span>
                }
              </TextSection>
            </DetailSection>
        )}
     </CustomMain>
      </>
  )
}

export default Product