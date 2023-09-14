import { Link } from "react-router-dom"

function Cadastro() {
  return (
    <div>
      <h1>Cadastro</h1>
      <Link to={"/Login"}>Cadastro</Link>
    </div>
  )
}

export default Cadastro