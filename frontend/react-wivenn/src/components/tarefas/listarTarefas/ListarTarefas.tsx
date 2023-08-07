import { dados } from "../../../data/Tarefas"
import { useState } from "react";
import BotaoExcluir from "../../botoes/botaoExcluir/BotaoExcluir";
import BotaoEditar from "../../botoes/botaoEditar/BotaoEditar";


export default function ListarTarefas() {
  const [search, setSearch] = useState("");
  const tarefa = dados.filter(dados => dados.description.toLocaleLowerCase().includes(search));

  return (
    <div className="bg-white py-24 sm:py-15">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">

          {/* <BarraPesquisa/> */}
          <h2 className="tracking-tight text-gray-900 sm:text-3xl mb-3">Pesquisar Tarefas</h2>
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
        <div className="mx-auto mt-0 grid max-w-1xl grid-cols-1 gap-x-8 gap-y-10 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-0 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tarefa.map((tarefa) => (
            <article key={tarefa.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="relative mt-8 flex items-center gap-x-2">
                <div className="text-sm leading-6">

                  <div className="relative flex gap-0">
                    <p className="font-bold text-yellow-700 text-base mr-5 ">{tarefa.description}</p>
                    <div className="mt-1">
                    <BotaoEditar />
                    <BotaoExcluir />
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 ">{tarefa.due_date}</p>

                  <hr className="my-2 h-0.5 border-t-0 bg-gray-600 opacity-100 dark:opacity-20" />
                  <div className="relative mt-0 flex items-center gap-x-1">
                    <p className="font-semibold">Responsavel:</p>
                    <p className="text-sm text-gray-900">{tarefa.assignee_id.firstName}</p>
                    <p className="text-sm text-gray-900">{tarefa.assignee_id.lastName}</p>
                    <p className="line-clamp-3 text-sm leading-6 text-gray-600">- {tarefa.assignee_id.department_id.name}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
