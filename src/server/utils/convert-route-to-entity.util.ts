const mapping: Record<string, string> = {
  companies: 'company',
  'company-services': 'company_service',
  services: 'service',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
