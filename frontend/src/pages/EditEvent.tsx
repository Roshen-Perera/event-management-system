import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type Events from "../model/Events";
import { getEvent } from "../slices/EventSlice";
import type { AppDispatch } from "../store/Store";
import "./EditEvent.css";

const EditEvent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const events = useSelector((state: { event: Events[] }) => state.event);

  useEffect(() => {
    if (events.length === 0) dispatch(getEvent());
  }, [dispatch, events.length]);

  return (
    <>
      <div className="custom-form">
        <div className=" row">
          <div className="col-2 p-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="textt form-control"
              placeholder="Innovators Conference"
              aria-label="Name"
            />
          </div>
          <div className="col p-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="A conference bringing together tech leaders, innovators, and startups."
              aria-label="Description"
            />
          </div>
          <div className="col-3 p-3">
            <label className="form-label">Date</label>
            <input
              id="staffJoinedDate"
              type="date"
              className="form-control"
              placeholder="Date"
              aria-label="Date"
            />
          </div>
          <div className="col p-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Avissawella"
              aria-label="Location"
            />
          </div>
        </div>
        <div className=" row">
          <div className="col p-3">
            <label className="form-label">Created By</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col p-3">
            <label className="form-label">Capacity</label>
            <input
              type="number"
              className="form-control"
              aria-label="Capacity"
            />
          </div>
          <div className="col p-3">
            <label className="form-label">Remaining Capacity</label>
            <input
              type="number"
              className="form-control"
              aria-label="Remaining Capacity"
            />
          </div>
          <div className="col-5">
            <label className="form-label">Tags</label>
            <input type="text" className="form-control" aria-label="Tags" />
          </div>
        </div>
        <div className="row p-1">
          <label className="form-label">ID</label>
          <div className="col-1">
            <input type="text" className="form-control" aria-label="Tags" />
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
            <tbody id="crop-table">
              {events
                .filter(
                  (event: Events, index, self) =>
                    event &&
                    index === self.findIndex((f: Events) => f?.id === event?.id)
                )
                .map((event: Events) => (
                  <tr key={event.id}>
                    <td>{event.name}</td>
                    <td>{event.description}</td>
                    <td>{event.date}</td>
                    <td>{event.location}</td>
                    <td>{event.createdBy}</td>
                    <td>{event.capacity}</td>
                    <td>{event.remaining_capacity}</td>
                    <td>{event.tags}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EditEvent;
