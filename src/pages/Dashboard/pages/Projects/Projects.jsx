import DataTable from "../../../../component/Dashboard/DataTable/DataTable";
import Form from "../../../../component/Dashboard/Form/Form";
import { FORM_CONFIG } from "../../../../utils/FORM_CONFIG";
import { INITIAL_PROJECTS } from "../../../../utils/Initial_States";

export default function Projects() {
  return (
    <>
      <Form
        moduleKey="projects"
        initialState={INITIAL_PROJECTS}
        config={FORM_CONFIG.projects}
      />
      <DataTable moduleKey="projects" />
    </>
  );
}
