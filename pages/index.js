import EventList from "../components/events/eventList";
import { getFeaturedEvents } from "../dummy_data";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList featuredEvents={featuredEvents} />
    </div>
  );
};

export default HomePage;
