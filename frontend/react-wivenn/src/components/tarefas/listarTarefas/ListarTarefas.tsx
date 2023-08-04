import BarraPesquisa from "../../barraPesquisa/BarraPesquisa"

const tarefa = [
  {
    id: 1,
    title: 'Concluir relatório mensal ',
    description: 'Concluir relatório mensal',
    due_date: 'Ago 30, 2023',
    assignee_id: {
      id: 2,
      fistName: 'Ana ',
      lastName: 'Ferreira',
      email: 'ana@gmail.com',
      phone: '11365987452',
      imageUrl:
      'https://th.bing.com/th/id/R.7772b7d05d24c939fcd40a05dd6091cf?rik=mxUQO6lMpUeFlw&riu=http%3a%2f%2ftusimagenesde.com%2fwp-content%2fuploads%2f2017%2f09%2ffoto-de-perfil-3.jpg&ehk=XqjYR4K5ptxQJoaPQ%2fpS2fa8JgnIkUME94hZTdsQyE0%3d&risl=&pid=ImgRaw&r=0',
      department_id: {
        id: 1,
        name: 'RH',
        },
      },
  },
  {
    id: 2,
    title: 'Enviar convites para reunião ',
    description: 'Enviar convites para reunião',
    due_date: 'Ago 25, 2023',
    assignee_id: {
    id: 2,
    fistName: 'Ana ',
    lastName: 'Ferreira',
    email: 'ana@gmail.com',
    phone: '11365987452',
    imageUrl:
    'https://th.bing.com/th/id/R.7772b7d05d24c939fcd40a05dd6091cf?rik=mxUQO6lMpUeFlw&riu=http%3a%2f%2ftusimagenesde.com%2fwp-content%2fuploads%2f2017%2f09%2ffoto-de-perfil-3.jpg&ehk=XqjYR4K5ptxQJoaPQ%2fpS2fa8JgnIkUME94hZTdsQyE0%3d&risl=&pid=ImgRaw&r=0',
    department_id: {
      id: 1,
      name: 'RH',
      },
    }
  },
  // More posts...
]

export default function ListarTarefas() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Procurar Tarefa</h2>
          <BarraPesquisa/>
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
                 <p className="font-semibold text-gray-900">{tarefa.assignee_id.fistName}</p>
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
