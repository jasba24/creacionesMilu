function importAll(r) {
  let images = []
  Object.values(r).forEach(({ default: path }) => {
    const url = new URL(path, import.meta.url)
    const data = {
      path: url.pathname
    }
    images.push(data)
  })

  return images
}
const images160000 = importAll(
  import.meta.glob(['../../assets/bolicheros/160000/*.jpg'], { eager: true })
)

const images190000 = importAll(
  import.meta.glob(['../../assets/bolicheros/190000/*.jpg'], { eager: true })
)

function Bolicheros() {
  return (
    <div className="product-container">
      <h1>
        Bolicheros artesanal en cuero y fique. <br /> Valor: 160.000
      </h1>
      <div className="section-container">
        {images160000.map((v, i) => {
          return <img key={i} src={v.path} alt="" />
        })}
      </div>
      <h1>Valor: 190.000</h1>
      <div className="section-container">
        {images190000.map((v, i) => {
          return <img key={i} src={v.path} alt="" />
        })}
      </div>
    </div>
  )
}

export default Bolicheros
