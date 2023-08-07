import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { departamentos } from '../../../data/Departamentos'
import BotaoExcluir from '../../botoes/botaoExcluir/BotaoExcluir';
import BotaoEditar from '../../botoes/botaoEditar/BotaoEditar';


export default function ListarDepartamentos() {
  const [search, setSearch] = useState("");
  const departamento = departamentos.filter(departamentos => departamentos.name.toLocaleLowerCase().includes(search));

  return (

    <Popover.Group className="hidden lg:flex lg:gap-x-12">
      <Popover className="relative">
        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
          Departamentos
          <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-92 max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">

              {/* <BarraPesquisa/> */}
              <h2 className="tracking-tight text-gray-900 sm:text-xl mb-3 mt-3">Pesquisar Tarefas</h2>
              <div className="mb-3">
                <div className="relative mb-0 flex w-11/12 flex-wrap items-stretch">
                  <input
                    type="search"
                    className="relative m-0 -mr-1 block w-[1px] min-w-0 flex-auto rounded-md border border-solid border-neutral-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-blue-900 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-400 dark:text-neutral-700 dark:placeholder:text-neutral-500 dark:focus:border-primary"
                    aria-label="Search"
                    aria-describedby="button-addon3"
                    value={search} onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              {departamento.map((departamento) => (
                <div
                  key={departamento.id}
                  className="group relative flex items-center gap-x-1 p-4 text-sm"
                >

                  <div className="relative flex gap-3">
                  <BotaoExcluir />
                    <BotaoEditar />
                    <p className="block text-gray-900 mr-48">{departamento.name}</p>

                    
                  </div>
                </div>
              ))}

            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </Popover.Group>
  )
}
