export interface Funcionarios {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
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
   department_id: {
      id: 1,
      name: 'RH',
      },
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    phone: "555-123-4567",
    department_id: {
      id: 103,
      name: "Sales",
    }
  },
  {
    id: 4,
    firstName: "Emily",
    lastName: "Brown",
    email: "emily.brown@example.com",
    phone: "222-333-4444",
    department_id: {
      id: 104,
      name: "Human Resources",
    }
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Miller",
    email: "david.miller@example.com",
    phone: "777-888-9999",
    department_id: {
      id: 105,
      name: "Finance",
    }
  },
  {
    id: 6,
    firstName: "Sophia",
    lastName: "Williams",
    email: "sophia.williams@example.com",
    phone: "444-555-6666",
    department_id: {
      id: 106,
      name: "Operations",
    }
  },
  {
    id: 7,
    firstName: "James",
    lastName: "Taylor",
    email: "james.taylor@example.com",
    phone: "999-000-1111",
    department_id: {
      id: 107,
      name: "Customer Support",
    }
  },
  {
    id: 8,
    firstName: "Olivia",
    lastName: "Anderson",
    email: "olivia.anderson@example.com",
    phone: "666-777-8888",
    department_id: {
      id: 108,
      name: "Product Development",
    }
  }
            
]
