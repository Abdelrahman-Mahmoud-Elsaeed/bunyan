import DataTable from "../../../../component/Dashboard/DataTable/DataTable";
import Form from "../../../../component/Dashboard/Form/Form";
import { FORM_CONFIG } from "../../../../utils/FORM_CONFIG";
import { INITIAL_DEVELOPERS } from "../../../../utils/Initial_States";

export default function Developers() {
  return (
    <>
      <Form
        moduleKey="developers"
        initialState={INITIAL_DEVELOPERS}
        config={FORM_CONFIG.developers}
      />
      <DataTable moduleKey="developers" />
    </>
  );
}
