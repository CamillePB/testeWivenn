import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Header from './static/Header';
import FuncionariosForm from './components/funcionarios/FuncionariosForm';
import DepartamentosForm from './components/departamentos/DepartamentosForm';
import TarefasForm from './components/tarefas/TarefasForm';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/funcionariosForm" element={<FuncionariosForm />} />
            <Route path="/departamentosForm" element={<DepartamentosForm />} />
            <Route path="/tarefasForm" element={<TarefasForm />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App;
