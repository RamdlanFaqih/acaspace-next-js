export interface Product {
  id: number
  discount: string
  name: string
  current_price: number
  image: string
  original_price: number
  savings: number
}

export interface ProductResponse {
  page: number
  pageSize: number
  total: number
  totalPages: number
  results: Product[]
}
