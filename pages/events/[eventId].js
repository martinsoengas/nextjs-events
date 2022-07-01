import { useRouter } from "next/router";
import { getEventById } from "../../dummy_data";

import EventContent from "../../components/event-detail/EventContent";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventSummary from "../../components/event-detail/EventSummary";
import LogisticsItem from "../../components/event-detail/LogisticsItem";
import { Fragment } from "react";

const EventDetailPage = (props) => {
  const router = useRouter();

  const event = getEventById(router.query.eventId);

  if (!event) {
    return <p>ERROR 404, NOT FOUND</p>;
  }

  return (
    <div>
      <Fragment>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </Fragment>
    </div>
  );
};

export default EventDetailPage;
