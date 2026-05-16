import { useEffect } from "react";
import { useDraft } from "../../../context/DraftContext";

const Form = ({ moduleKey, initialState, config }) => {
  const { drafts, initDraft, updateDraft, resetDraft,addRecord } = useDraft();

  const formData = drafts[moduleKey] || initialState;

  useEffect(() => {
    initDraft(moduleKey, initialState);
  }, []);

  const handleChange = (e) => {
    updateDraft(moduleKey, e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    resetDraft(moduleKey, initialState);
    addRecord(moduleKey, formData);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h2 className="h5 mb-0">{config.title}</h2>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {config.fields.map((field) => (
              <div className="mb-3" key={field.name}>
                <label className="form-label text-capitalize">
                  {field.name}
                </label>

                <input
                  type={field.type}
                  name={field.name}
                  className="form-control"
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.name}`}
                  required={field.name === "name" || field.name === "title"}
                />
              </div>
            ))}

            <hr />

            <div className="d-grid">
              <button className="btn btn-primary">Create</button>
            </div>
          </form>

          <div className="mt-3 small opacity-75">
            {Object.entries(formData).map(([key, value]) =>
              value ? (
                <div className="text-truncate" key={key}>
                  <strong className="text-capitalize">{key}:</strong>{" "}
                  {value}
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;