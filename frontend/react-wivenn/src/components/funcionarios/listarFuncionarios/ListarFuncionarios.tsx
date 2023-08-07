import BarraPesquisa from "../../barraPesquisa/BarraPesquisa"
import editar from "../../../assets/img/pen.png"
import excluir from "../../../assets/img/delete.png"
import { funcionarios } from "../../../data/Funcionarios"
import { useState } from "react";


export default function ListarFuncionarios() {
  const [search, setSearch] = useState("");
  const funcionario = funcionarios.filter(funcionarios => funcionarios.firstName.toLocaleLowerCase().includes(search));

  return (

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pesquisar</h2>

          {/* <BarraPesquisa/> */}
          <div className="mb-3">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
                value={search} onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {funcionario.map((funcionarios) => (
            <article key={funcionarios.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">

              </div>
              <div className="group relative">

              </div>
              <div className="relative mt-0 flex items-center gap-x-6">
                <div className="center mb-5">

                  <img src={funcionarios.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50 mb-5" />

                  <div className="flex">
                    <img src={editar} alt="" className="h-4 w-4 mb-3 ml-0"></img>

                    <img src={excluir} alt="" className="h-4 w-4 mb-10 ml-3"></img>
                  </div>
                </div>
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">

                    <span className="absolute inset-0" />
                    {funcionarios.firstName}
                    {funcionarios.lastName}

                  </p>

                  <p className="line-clamp-3 text-sm leading-6 text-gray-600">{funcionarios.department_id.name}</p>
                  <a href="#">
                    <p className="font-semibold text-blue-800">ver mais</p>
                  </a>
                  <p className="font-semibold text-gray-900">{funcionarios.phone}</p>

                  <p className="text-gray-600">{funcionarios.email}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
