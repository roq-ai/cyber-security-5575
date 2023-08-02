interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Administrator'],
  tenantName: 'Company',
  applicationName: 'cyber security ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
