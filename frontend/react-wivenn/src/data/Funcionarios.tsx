export interface Funcionarios {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  imageUrl: string,
    department_id: {
    id: number,
    name: string,
    },
}
export const funcionarios: Funcionarios[] = [
  {
    id: 1,
    firstName: 'Camille ',
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
    firstName: 'Ana ',
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
]
