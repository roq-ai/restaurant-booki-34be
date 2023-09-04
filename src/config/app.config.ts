interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Chef', 'Receptionist', 'Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    "View restaurant's menu",
    'Make a table reservation',
    'Manage own table reservations',
    'View own table reservations',
  ],
  ownerAbilities: [
    'Manage restaurant profile',
    'Manage employee roles',
    'View all table reservations',
    'Manage employees',
  ],
};
