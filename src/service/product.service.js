import { api } from "./api"

export class ProductService {
  static async createProduct(data) {
    return api.post("/product", data)
  }

  static async getProducts() {
    return api.get("/product")
  }

  static async getProductPagination(page, limit) {
    return api.get("/product/paginate", {
      params: {
        page,
        limit,
      },
    })
  }

  static async getProductById(id) {
    return api.get(`/product/${id}`)
  }

  static async updateProductById(id, data) {
    return api.put(`/product/${id}`, data)
  }

  static async deleteProductById(id) {
    return api.delete(`/product/${id}`)
  }
}
