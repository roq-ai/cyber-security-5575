import * as yup from 'yup';

export const companyServiceValidationSchema = yup.object().shape({
  company_id: yup.string().nullable().required(),
  service_id: yup.string().nullable().required(),
});
