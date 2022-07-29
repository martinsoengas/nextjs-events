import { Fragment } from "react";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList.js";
import EventsSearch from "../../components/events/EventsSearch";
import getAllEvents from "../../helpers/api-util";

const AllEventsPage = (props) => {
  const router = useRouter();

  const { events } = props;

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};

export default AllEventsPage;
