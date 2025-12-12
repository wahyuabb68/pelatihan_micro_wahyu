import { useEffect, useState } from "react"
import Card from "../components/Card/Card"
import LayoutWrapper from "../layout/LayoutWrapper"
import { ProductService } from "../service/product.service"
import Pagination from "../components/Pagination/Pagination"
import Swal from "sweetalert2"
import { useLocation } from "react-router"

const Home = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [limit] = useState(10)
  const [totalPage, setTotalPage] = useState(1)

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const searchQuery = queryParams.get("search") || ""

  const fetchData = async () => {
    try {
      let response

      if (searchQuery) {
        response = await ProductService.searchProduct(searchQuery, page, limit)
      } else {
        response = await ProductService.getProductPagination(page, limit)
      }

      setProducts(response.data)
      setTotalPage(response.meta.totalPage)
    } catch (error) {
      Swal.fire("Error!", error.message, "error")
    }
  }

  useEffect(() => {
    fetchData()
  }, [page, searchQuery])

  return (
    <LayoutWrapper>
      <div className='list-products'>
        {products.map((product) => (
          <Card
            key={product._id}
            id={product._id}
            title={product.title}
            imgUrl={product.imgUrl}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>

      <Pagination page={page} totalPage={totalPage} onPageChange={setPage} />
    </LayoutWrapper>
  )
}

export default Home
