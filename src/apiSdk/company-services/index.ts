import axios from 'axios';
import queryString from 'query-string';
import { CompanyServiceInterface, CompanyServiceGetQueryInterface } from 'interfaces/company-service';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCompanyServices = async (
  query?: CompanyServiceGetQueryInterface,
): Promise<PaginatedInterface<CompanyServiceInterface>> => {
  const response = await axios.get('/api/company-services', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCompanyService = async (companyService: CompanyServiceInterface) => {
  const response = await axios.post('/api/company-services', companyService);
  return response.data;
};

export const updateCompanyServiceById = async (id: string, companyService: CompanyServiceInterface) => {
  const response = await axios.put(`/api/company-services/${id}`, companyService);
  return response.data;
};

export const getCompanyServiceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/company-services/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCompanyServiceById = async (id: string) => {
  const response = await axios.delete(`/api/company-services/${id}`);
  return response.data;
};
