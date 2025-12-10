import { useLocation, useNavigate } from "react-router"
import categories from "../../assets/data/category.json"
import { ProductService } from "../../service/product.service"
import Swal from "sweetalert2"

const Form = ({ handleSubmit, handleChange, formData, id }) => {
  const location = useLocation()

  const navigate = useNavigate()

  const deleteProductById = async (id) => {
    try {
      await ProductService.deleteProductById(id)
      Swal.fire({
        title: "Success!",
        text: "Produk berhasil dihapus!",
        icon: "success",
      })

      navigate("/")
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label className='form-label'>Nama Produk</label>
        <input
          type='text'
          name='title'
          className='form-input'
          placeholder='Contoh: Sepatu Nike Air'
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className='form-group'>
        <label className='form-label'>Kategori</label>
        <select
          name='category'
          className='form-select'
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value='' disabled>
            Pilih Kategori
          </option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className='form-group'>
        <label className='form-label'>URL Gambar</label>
        <input
          type='url'
          name='imgUrl'
          className='form-input'
          placeholder='https://...'
          value={formData.imgUrl}
          onChange={handleChange}
        />
      </div>

      <div className='form-row'>
        <div className='form-group' style={{ flex: 1 }}>
          <label className='form-label'>Harga (IDR)</label>
          <input
            type='number'
            name='price'
            className='form-input'
            placeholder='0'
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group' style={{ flex: 1 }}>
          <label className='form-label'>Stok</label>
          <input
            type='number'
            name='stock'
            className='form-input'
            placeholder='0'
            value={formData.stock}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <button
        type='submit'
        className={
          location.pathname === "/add-product" ? "btn-submit" : "btn-warning"
        }
      >
        {location.pathname === "/add-product"
          ? "Simpan Produk"
          : "Perbarui Produk"}
      </button>
      {location.pathname !== "/add-product" ? (
        <button
          onClick={() => deleteProductById(id)}
          type='button'
          className='btn-danger'
        >
          Hapus Produk
        </button>
      ) : null}
    </form>
  )
}

export default Form
