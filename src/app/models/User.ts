
export const users: User[] = [{
  fullName: "ghassen klai",
  email: "ghassen.klai@esprit.tn",
  pwd: "test1234",
  cart: {
    cartItems: []
  }
}]


export default class User {
  fullName?: string;
  email!: string;
  pwd!: string;
  cart?: Cart;
}
class Cart {
  cartItems!: CartItem[]
}
class Product {
  id!: number
  title!: string
  img!: string
  description!: string
}
class CartItem {
  product!: Product;
  nbrProducts!: number;
}
