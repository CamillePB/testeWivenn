import BarraPesquisa from "../../barraPesquisa/BarraPesquisa"

const posts = [
  {
    id: 1,
    fistName: 'Camille ',
    lastName: 'Bueno',
    email: 'camille@gmail.com',
    phone: '11953236998',
    imageUrl:
    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    department_id: {
      id: 1,
      name: 'T.I',
      },
  },
  {
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
  // More posts...
]

export default function ListarFuncionarios() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pesquisar</h2>
          <BarraPesquisa/>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
               
              </div>
              <div className="group relative">
               
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
              <img src={post.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50 mb-10" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    
                      <span className="absolute inset-0" />
                      {post.fistName}
                      {post.lastName}
                    
                  </p>
                 
                 <p className="line-clamp-3 text-sm leading-6 text-gray-600">{post.department_id.name}</p> 
                 <a href="#">
                    <p  className="font-semibold text-blue-800">ver mais</p>
                    </a>
                 <p className="font-semibold text-gray-900">{post.phone}</p>
                 
                  <p className="text-gray-600">{post.email}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
