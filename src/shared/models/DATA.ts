import {PostCompany} from './post-company';

export const postItemsData = [
  new PostCompany(
    'C0001',
    'Company',
    'Nova Poshta',
    'Stolychne shose str, 103, Kyiv, Ukraine',
    '111-111-11',
    'Mr X.',
  ).createDepartment({
    id: 'CD0001-00',
    type: 'Departmant',
    name: 'Post Department in Khmelnytskyi',
    address: 'Svoboda str, 23, Khmelnytskyi, Ukraine',
    telephone: '111-111-11-11'
  }).createDepartment({
    id: 'CD0001-01',
    type: 'Departmant',
    name: 'Post Department in Lviv',
    address: 'Shevchenka str, 6, Lviv, Ukraine',
    telephone: '111-111-11-22'
  }),
  new PostCompany(
    'C0002',
    'Company',
    'Ukr Poshta',
    'Franka str, 32, Kyiv, Ukraine',
    '222-222-22',
    'Mr Y.',
  ).createDepartment({
    id: 'CD0002-00',
    type: 'Departmant',
    name: 'Ukr Post Department in Khmelnytskyi',
    address: 'Zarichna str, 11/2, Khmelnytskyi, Ukraine',
    telephone: '222-222-22-11'
  }).createDepartment({
    id: 'CD0002-01',
    type: 'Departmant',
    name: 'Ukr Post Department in Poltava',
    address: 'Peremogy str, 16, Poltava, Ukraine',
    telephone: '222-222-22-22'
  })
];

