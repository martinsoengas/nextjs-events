import { getAllEvents, getFilteredEvents } from "../../dummy_data";
import EventList from "../../components/events/EventList.js";
import EventsSearch from "../../components/events/EventsSearch";
import { Fragment } from "react";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const router = useRouter();

  const allEvents = getAllEvents();

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={allEvents} />
    </Fragment>
  );
};

export default AllEventsPage;
