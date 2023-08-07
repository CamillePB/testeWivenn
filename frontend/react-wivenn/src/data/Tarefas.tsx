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
  due_date: '2023-08-25',
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
  due_date: '2023-08-25',
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
},
{
  id: 3,
  title: "Task 3",
  description: "Description for Task 3",
  due_date: "2023-08-25",
  assignee_id: {
    id: 103,
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    phone: "555-123-4567",
    imageUrl: "https://example.com/michael_johnson.jpg",
    department_id: {
      id: 203,
      name: "Sales",
    }
  }
},
{
  id: 4,
  title: "Task 4",
  description: "Description for Task 4",
  due_date: "2023-08-30",
  assignee_id: {
    id: 104,
    firstName: "Emily",
    lastName: "Brown",
    email: "emily.brown@example.com",
    phone: "222-333-4444",
    imageUrl: "https://example.com/emily_brown.jpg",
    department_id: {
      id: 204,
      name: "Human Resources",
    }
  }
},
{
  id: 5,
  title: "Task 5",
  description: "Description for Task 5",
  due_date: "2023-09-05",
  assignee_id: {
    id: 105,
    firstName: "David",
    lastName: "Miller",
    email: "david.miller@example.com",
    phone: "777-888-9999",
    imageUrl: "https://example.com/david_miller.jpg",
    department_id: {
      id: 205,
      name: "Finance",
    }
  }
},
{
  id: 6,
  title: "Task 6",
  description: "Description for Task 6",
  due_date: "2023-09-10",
  assignee_id: {
    id: 106,
    firstName: "Sophia",
    lastName: "Williams",
    email: "sophia.williams@example.com",
    phone: "444-555-6666",
    imageUrl: "https://example.com/sophia_williams.jpg",
    department_id: {
      id: 206,
      name: "Operations",
    }
  }
},
{
  id: 7,
  title: "Task 7",
  description: "Description for Task 7",
  due_date: "2023-09-15",
  assignee_id: {
    id: 107,
    firstName: "James",
    lastName: "Taylor",
    email: "james.taylor@example.com",
    phone: "999-000-1111",
    imageUrl: "https://example.com/james_taylor.jpg",
    department_id: {
      id: 207,
      name: "Customer Support",
    }
  }
},
{
  id: 8,
  title: "Task 8",
  description: "Description for Task 8",
  due_date: "2023-09-20",
  assignee_id: {
    id: 108,
    firstName: "Olivia",
    lastName: "Anderson",
    email: "olivia.anderson@example.com",
    phone: "666-777-8888",
    imageUrl: "https://example.com/olivia_anderson.jpg",
    department_id: {
      id: 208,
      name: "Product Development",
    }
  }
}

]