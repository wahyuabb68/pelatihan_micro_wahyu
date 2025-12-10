import Card from "../components/Card/Card"
import LayoutWrapper from "../layout/LayoutWrapper"
import { useEffect, useState } from "react"
import { ProductService } from "../service/product.service"
import Pagination from "../components/Pagination/Pagination"

const Home = () => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [totalPage, setTotalPage] = useState(1)

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const response = await ProductService.getProductPagination(page, limit)
        setProducts(response.data)
        setPage(response.meta.page)
        setLimit(response.meta.limit)
        setTotalPage(response.meta.totalPage)
      } catch (error) {
        console.log(error)
      }
    }

    getAllProduct()
  }, [page, limit])

  return (
    <>
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
    </>
  )
}

export default Home
