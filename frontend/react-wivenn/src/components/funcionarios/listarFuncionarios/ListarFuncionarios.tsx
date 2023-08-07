import { funcionarios } from "../../../data/Funcionarios"
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import BotaoExcluir from "../../botoes/botaoExcluir/BotaoExcluir";
import BotaoEditar from "../../botoes/botaoEditar/BotaoEditar";


export default function ListarFuncionarios() {
  const [search, setSearch] = useState("");
  const funcionario = funcionarios.filter(funcionarios => funcionarios.firstName.toLocaleLowerCase().includes(search));

  return (

    <div className="bg-white py-24 sm:py-15">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">

          {/* <BarraPesquisa/> */}
          <h2 className="tracking-tight text-gray-900 sm:text-3xl mb-3">Pesquisar Funcionarios</h2>
          <div className="mb-3">
            <div className="relative mb-0 flex w-80 flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-1 block w-[1px] min-w-0 flex-auto rounded-md border border-solid border-neutral-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-blue-900 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-400 dark:text-neutral-700 dark:placeholder:text-neutral-500 dark:focus:border-primary"
                aria-label="Search"
                aria-describedby="button-addon3"
                value={search} onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

        </div>

        <div className="mx-auto mt-0 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {funcionario.map((funcionarios) => (
            <article key={funcionarios.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">

              </div>


              <div className="relative mt-0 flex items-center gap-x-6">
                <div className="center mb-0">
                  <div className="group flex ml-3">
                    <BotaoEditar />
                    <BotaoExcluir />
                    <ToastContainer />
                  </div>
                  <div className="center mb-0">

                    <img src="https://th.bing.com/th/id/OIP.1nWRQ7r_1nEVJ6sdz_zwkwHaE8?w=290&h=193&c=7&r=0&o=5&pid=1.7" alt="" className="h-10 rounded-full bg-gray-50 mb-0" />
                  </div>
                  <div className="flex">

                  </div>
                </div>
                <div className="text-sm leading-6">
                  <div className="relative mt-0 flex items-center gap-x-1 font-semibold text-gray-900">

                    <p> {funcionarios.firstName} </p>
                    <p>{funcionarios.lastName}</p>

                  </div>

                  <p className="line-clamp-3 text-sm leading-6 text-gray-600">{funcionarios.department_id.name}</p>
                
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
