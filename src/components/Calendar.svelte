<script>
  // REF: https://github.com/YogliB/svelte-fullcalendar/
  import FullCalendar from "svelte-fullcalendar";
  import daygridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import Map from "./Map.svelte";

  export let calendarData;

  // import event1 from "../../public/content/_calendar/2022-05-13-11-00-test-event.json";
  // import event2 from "../../public/content/_calendar/2022-05-14-11-00-test-event-2.json";
  // import event3 from "../../public/content/_calendar/2022-05-16-11-00-test-event-3.json";
  // import event4 from "../../public/content/_calendar/2022-05-20-11-00-test-event-4.json";

  const calendarEvents = [];

  let calendarRef;
  let addressText;

  // TODO: Calendar styles  -  https://fullcalendar.io/docs/css-customization
  // TODO: clicking date/event opens the relevant map location (if applicable)
  // TODO: determine functionality for when there is no event on a day

  // populate calendar with events in the _calendar folder

  function handleClick(event) {
    const calendarAPI = calendarRef.getAPI();
    const date = event.dateStr;
    calendarAPI.select(date);
    const todaysCalendarEvents = calendarEvents.filter(
      (calendarEvent) => calendarEvent.eventdate === event.dateStr
    );
    if (todaysCalendarEvents.length > 0) {
      addressText = todaysCalendarEvents[0].address;
    }
  }

  const options = {
    dateClick: handleClick,
    events: [
      // { title: event1.name, date: event1.eventdate },
      // { title: event2.name, date: event2.eventdate },
      // { title: event3.name, date: event3.eventdate },
      // { title: event4.name, date: event4.eventdate },
    ],
    initialView: "dayGridMonth",
    plugins: [daygridPlugin, interactionPlugin],
  };

  // debugger;
</script>

<div class="section-wrapper">
  <h3>Calendar</h3>
  <div class="flex-wrapper">
    <div class="calendar-wrapper">
      <FullCalendar bind:this={calendarRef} {options} />
    </div>

    <div class="map-wrapper">
      <Map {addressText} />
    </div>
  </div>
</div>

<style>
  div.section-wrapper {
    background-color: var(--background-light);
    padding-bottom: 5em;
    padding-top: 3em;
  }

  .flex-wrapper {
    margin-top: 3em;
    font-family: var(--sans);
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    gap: 1em;
    flex-wrap: wrap;
  }

  .calendar-wrapper {
    width: 35em;
    height: 35em;
  }

  .map-wrapper {
    width: 35em;
    height: 30em;
    background: lightblue;
  }
</style>
