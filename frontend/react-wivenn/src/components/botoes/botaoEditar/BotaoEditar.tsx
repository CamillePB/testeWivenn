import editar from "../../../assets/img/pen.png"
import { useNavigate } from "react-router-dom";


export default function BotaoExcluir() {
  const navigate = useNavigate();

  const editarFuncionario = () => {
    navigate('/funcionariosForm');
  }

  return(
    <button type="submit" onClick={editarFuncionario} className="h-4 w-4 mt-0 mr-3">
    <img src={editar} alt="" ></img>
  </button>
)
}