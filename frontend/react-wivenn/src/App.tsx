import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../src/components/static/Header';
import FuncionariosForm from './pages/funcionarios/cadastrarFuncionario/FuncionariosForm';
import DepartamentosForm from './pages/departamentos/cadastrarDepartamento/DepartamentosForm';
import TarefasForm from './pages/tarefas/cadastrarTarefas/TarefasForm';
import ListarFuncionarios from './pages/funcionarios/listarFuncionarios/ListarFuncionarios';
import ListarTarefas from './pages/tarefas/listarTarefas/ListarTarefas';
import ListarDepartamentos from './pages/departamentos/listarDepartamentos/ListarDepartamentos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<FuncionariosForm />} />
            <Route path="/funcionariosForm" element={<FuncionariosForm />} />
            <Route path="/departamentosForm" element={<DepartamentosForm />} />
            <Route path="/tarefasForm" element={<TarefasForm />} />
            <Route path="/listarFuncionarios" element={<ListarFuncionarios />} />
            <Route path="/listarDepartamentos" element={<ListarDepartamentos />} />
            <Route path="/listarTarefas" element={<ListarTarefas />} />

          </Routes>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App;
