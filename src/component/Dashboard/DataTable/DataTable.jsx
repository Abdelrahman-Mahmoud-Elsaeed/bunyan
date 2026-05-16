import { useDraft } from "../../../context/DraftContext";

const DataTable = ({ moduleKey }) => {
  const { records } = useDraft();

  const data = records[moduleKey] || [];

  if (!data || data.length === 0) {
    return <p className="text-muted">No data available</p>;
  }

  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="card mt-4">
      <div className="card-header bg-white">
        <h5 className="mb-0 text-capitalize">{moduleKey} List</h5>
      </div>

      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col} className="text-capitalize">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.map((item, idx) => (
                <tr key={idx}>
                  {columns.map((col) => (
                    <td key={col}>{item[col]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;