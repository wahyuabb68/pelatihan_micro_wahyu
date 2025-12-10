import React, { useState } from "react"
import LayoutWrapper from "../layout/LayoutWrapper"
import CardPreview from "../components/Card/CardPreview"
import Form from "../components/form/Form"
import { useNavigate } from "react-router"
import { ProductService } from "../service/product.service"

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    imgUrl: "",
    price: 0,
    stock: 0,
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await ProductService.createProduct({
        title: formData.title,
        category: formData.category,
        imgUrl: formData.imgUrl,
        price: parseInt(formData.price),
        stock: parseInt(formData.stock),
      })
      alert("Produk berhasil disimpan! (Cek console)")
      navigate("/")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <LayoutWrapper>
      <div className='main-wrapper'>
        <div className='form-card'>
          <div className='form-header'>
            <h2>Tambah Produk Baru</h2>
          </div>

          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={formData}
          />
        </div>

        <div className='preview-section'>
          <span className='preview-label'>Live Preview</span>

          <CardPreview
            title={formData.title}
            category={formData.category}
            imageUrl={formData.imgUrl}
            price={formData.price}
            stock={formData.stock}
          />
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default AddProduct
