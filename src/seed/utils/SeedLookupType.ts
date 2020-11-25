import { LookupType } from 'collard_admin_models';
export type SeedLookupType = Omit<LookupType, '_id'> & {
  _id?: string;
};
