import Form from "../../../../component/Dashboard/Form/Form";
import { INITIAL_USERS } from "../../../../utils/Initial_States";
import { FORM_CONFIG } from "../../../../utils/FORM_CONFIG";
import DataTable from "../../../../component/Dashboard/DataTable/DataTable";



const Users = () => {

  return (
    <>
      <Form
        moduleKey="users"
        initialState={INITIAL_USERS}
        config={FORM_CONFIG.users}
      />

      <DataTable moduleKey="users" />
    </>
  );
};

export default Users;
