import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Header from '../src/components/static/Header';
import FuncionariosForm from './components/funcionarios/cadastrarFuncionario/FuncionariosForm';
import DepartamentosForm from './components/departamentos/cadastrarDepartamento/DepartamentosForm';
import TarefasForm from './components/tarefas/cadastrarTarefas/TarefasForm';
import ListarFuncionarios from './components/funcionarios/listarFuncionarios/ListarFuncionarios';
import ListarTarefas from './components/tarefas/listarTarefas/ListarTarefas';
import ListarDepartamentos from './components/departamentos/listarDepartamentos/ListarDepartamentos';

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
