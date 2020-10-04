import ICompaniesRepository from '@modules/users/repositories/ICompaniesRepository';

import ICreateCompanyDTO from '@modules/users/dtos/ICreateCompanyDTO';

import Company from '@modules/users/infra/typeorm/entities/Company';

class FakeCompaniesRepository implements ICompaniesRepository {
  private companies: Company[] = [];

  public async create({
    name,
    catchPhrase,
    bs,
  }: ICreateCompanyDTO): Promise<Company> {
    const address = new Company();

    Object.assign(address, {
      id: Math.floor(Math.random() * 100 + 1),
      name,
      catchPhrase,
      bs,
    });

    this.companies.push(address);

    return address;
  }

  public async save(company: Company): Promise<Company> {
    const findIndex = this.companies.findIndex(
      findCompany => findCompany.id === company.id,
    );

    this.companies[findIndex] = company;

    return company;
  }

  public async findCompanyByName(name: string): Promise<Company | undefined> {
    const findIndex = this.companies.findIndex(
      findCompany => findCompany.name === name,
    );

    return this.companies[findIndex];
  }
}

export default FakeCompaniesRepository;
