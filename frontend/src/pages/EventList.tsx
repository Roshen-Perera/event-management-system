import { useEffect } from "react";
import type Events from "../model/Events";
import { getEvent } from "../slices/EventSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../store/Store";

const EventList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const events = useSelector((state: { event: Events[] }) => state.event);
  
      useEffect(() => {
      if (events.length === 0) dispatch(getEvent());
    }, [dispatch, events.length]);
  
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
        <tbody id="crop-table">
          {events
            .filter(
              (event: Events, index, self) =>
                event &&
                index === self.findIndex((f: Events) => f?.id === event?.id)
            )
            .map((event: Events) => (
              <tr key={event.name}>
                <td className="font-medium">{event.description}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>{event.createdBy}</td>
                <td>{event.remaining_capacity}</td>
                <td>{event.tags}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventList
