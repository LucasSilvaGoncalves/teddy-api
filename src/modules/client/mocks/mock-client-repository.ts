export const mockClientRepository = {
  update: jest.fn().mockImplementation(),
  save: jest.fn(),
  delete: jest.fn(),
  find: jest.fn().mockReturnValue([{ id: 1, name: 'teste', salary: 20000, clientSalary: 400000 }]),
  findOneBy: jest
    .fn()
    .mockReturnValue({ id: 1, name: 'teste', salary: 20000, clientSalary: 400000 }),
};
