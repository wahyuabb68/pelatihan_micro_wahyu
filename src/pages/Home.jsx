import Card from "../components/Card/Card"
import LayoutWrapper from "../layout/LayoutWrapper"
import products from "../assets/data/products.json"

const Home = () => {
  return (
    <>
      <LayoutWrapper>
        <div className='list-products'>
          {products.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              imgUrl={product.imgUrl}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      </LayoutWrapper>
    </>
  )
}

export default Home
