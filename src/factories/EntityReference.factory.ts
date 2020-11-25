import { EntityReference } from 'collard_admin_models';

const createEntityReference = <T extends { _id: string; Name: string }>(
  data: T
): EntityReference => {
  return {
    Id: data._id,
    Name: data.Name,
  };
};

export default createEntityReference;
