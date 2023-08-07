import FuncionariosForm from '../../components/funcionarios/cadastrarFuncionario/FuncionariosForm';
import DepartamentosForm from '../../components/departamentos/cadastrarDepartamento/DepartamentosForm';
import TarefasForm from '../../components/tarefas/cadastrarTarefas/TarefasForm';
import ListarFuncionarios from '../../components/funcionarios/listarFuncionarios/ListarFuncionarios';

function Home() {
    return (
        <>
                
                    <div>
                    <ListarFuncionarios/>
                    </div>
                
           
        </>
    )
}

export default Home;