import BarraPesquisa from "../../barraPesquisa/BarraPesquisa"
import { dados } from "../../../data/Dados"
import { useState } from "react";


export default function ListarTarefas() {
  const [search, setSearch] = useState("");
  const tarefa = dados.filter(dados => dados.title.toLocaleLowerCase().includes(search));

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
           {/* <BarraPesquisa/> */}
           <div className="mb-3">
            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                type="search"
                className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-primary"
                placeholder="Pesquisar Tarefa"
                aria-label="Search"
                aria-describedby="button-addon3"
                value={search} onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tarefa.map((tarefa) => (
            <article key={tarefa.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
               
              </div>
              <div className="group relative">
               
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    
                      <span className="absolute inset-0" />
                      {tarefa.description}
                      {tarefa.due_date}
                    
                  </p>
                 
                 <p className="line-clamp-3 text-sm leading-6 text-gray-600">{tarefa.assignee_id.department_id.name}</p> 
                 <p className="font-semibold text-gray-900">{tarefa.assignee_id.firstName}</p>
                 <p className="font-semibold text-gray-900">{tarefa.assignee_id.lastName}</p>

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
