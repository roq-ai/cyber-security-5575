import { CompanyInterface } from 'interfaces/company';
import { ServiceInterface } from 'interfaces/service';
import { GetQueryInterface } from 'interfaces';

export interface CompanyServiceInterface {
  id?: string;
  company_id: string;
  service_id: string;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  service?: ServiceInterface;
  _count?: {};
}

export interface CompanyServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  service_id?: string;
}
