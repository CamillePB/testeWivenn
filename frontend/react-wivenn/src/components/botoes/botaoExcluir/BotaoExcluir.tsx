import { toast } from "react-toastify";
import excluir from "../../../assets/img/delete.png"


export default function BotaoExcluir() {
  const deletarFuncionario = () => {
    toast.error('Excluido', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return(
      <button type="submit" onClick={deletarFuncionario} className="h-4 w-4 mb-3 ml-0">
      <img src={excluir} alt="" ></img>
      </button>
)
}