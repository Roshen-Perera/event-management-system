
const EventList = () => {
  return (
    <div className="pt-4 p-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Date</th>
            <th scope="col">Location</th>
            <th scope="col">Created By</th>
            <th scope="col">Capacity</th>
            <th scope="col">Remaining Capacity</th>
            <th scope="col">Tags</th>
          </tr>
        </thead>
        <tbody id="crop-table"></tbody>
      </table>
    </div>
  );
}

export default EventList
