import "./style.css"

const Pagination = ({ page, totalPage, onPageChange }) => {
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1)

  return (
    <div className='pagination'>
      <button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={p === page ? "active" : ""}
        >
          {p}
        </button>
      ))}

      <button
        disabled={page === totalPage}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
