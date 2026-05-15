import { useDraft } from "../../../../context/DraftContext";

const Users = () => {
  const { formData, updateDraft, resetDraft } = useDraft();

  const handleChange = (e) => {
    updateDraft(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted:", formData);
    // Logic to save to DB would go here
    resetDraft(); // Clear form after success
    alert("User added successfully!");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h2 className="h5 mb-0">Add New User</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {["name", "email", "address", "phone"].map((field) => (
              <div className="mb-3" key={field}>
                <label className="form-label text-capitalize">{field}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={`Enter ${field}`}
                  className="form-control"
                  value={formData[field]}
                  onChange={handleChange}
                  required={field === "name" || field === "email"}
                />
              </div>
            ))}
            <hr />
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Users;