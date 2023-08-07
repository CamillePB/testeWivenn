export interface Dados {
  id: number,
  title: string,
  description: string,
  due_date: string,
  assignee_id: {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  imageUrl: string,
    department_id: {
    id: number,
    name: string,
    }
  }
}

export const dados: Dados[] = [
{
  id: 1,
  title: 'Concluir relatório mensal ',
  description: 'Concluir relatório mensal',
  due_date: 'Ago 30, 2023',
  assignee_id: {
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
    },
},
{
  id: 2,
  title: 'Enviar convites para reunião ',
  description: 'Enviar convites para reunião',
  due_date: 'Ago 25, 2023',
  assignee_id: {
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
}
]