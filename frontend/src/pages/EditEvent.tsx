

const EditEvent = () => {
  return (
    <>
      <div className="custom-form">
        <div className=" row">
          <div className="col-2">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="textt form-control"
              placeholder="Ex: C0001"
              aria-label="Code"
            />
          </div>
          <div className="col">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: Corn"
              aria-label="Common name"
            />
          </div>
          <div className="col">
            <label className="form-label">location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: Zea mays"
              aria-label="Scientific name"
            />
          </div>
        </div>
        <div className=" row">
          <div className="col">
            <label className="form-label">Created By</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col">
            <label className="form-label">Capacity</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ex: Cereal"
              aria-label="Category"
            />
          </div>
          <div className="col">
            <label className="form-label">Remaining Capacity</label>
            <input
              type="number"
              className="form-control"
              placeholder="Ex: Spring"
              aria-label="Season"
            />
          </div>
          <div className="col">
            <label className="form-label">Tags</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: Spring"
              aria-label="Season"
            />
          </div>
        </div>
        <div className="custom-button">
          <button
            type="button"
            id="search-crop-btn"
            className="btn btn-primary"
          >
            Search
          </button>
          <button type="button" id="add-crop-btn" className="btn btn-success">
            Add
          </button>
          <button type="button" id="delete-crop-btn" className="btn btn-danger">
            Delete
          </button>
          <button
            type="button"
            id="update-crop-btn"
            className="btn btn-warning"
          >
            Update
          </button>
          <button type="button" id="clear-crop-btn" className="btn btn-info">
            Clear
          </button>
        </div>
        <div className="custom-table table-responsive p-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Common name</th>
                <th scope="col">Scientific name</th>
                <th scope="col">Image</th>
                <th scope="col">Category</th>
                <th scope="col">Season</th>
                <th scope="col">Field</th>
              </tr>
            </thead>
            <tbody id="crop-table"></tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default EditEvent
