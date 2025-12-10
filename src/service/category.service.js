import { api } from "./api"

export class CategoryService {
  static async getProducts() {
    return api.get("/category")
  }
}
