import IProduct from "./iProduct"

export default interface IProductInCart extends IProduct {
  quantity: number
}