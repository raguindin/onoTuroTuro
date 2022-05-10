<script>
  // REF: https://github.com/YogliB/svelte-fullcalendar/
  import FullCalendar from 'svelte-fullcalendar';
  import daygridPlugin from '@fullcalendar/daygrid';
  import interactionPlugin from '@fullcalendar/interaction';
  import Map from "./Map.svelte";

  import event1 from "../../public/content/_calendar/2022-05-13-11-00-test-event.json";

  let calendarRef;
  let addressText;
  

  // TODO: Calendar styles  -  https://fullcalendar.io/docs/css-customization
  // TODO: clicking date/event opens the relevant map location (if applicable)
  // TODO: determine functionality for when there is no event on a day

  // populate calendar with events in the _calendar folder

  const options = {
    dateClick: (event) => {
      const calendarAPI = calendarRef.getAPI();
      calendarAPI.select(event.dateStr);
      addressText = "Cincinnati, Ohio";
    },
    events: [
      { title: 'event 1', date: '2022-05-01' },
      { title: 'event 2', date: '2022-05-02' },
    ],
    initialView: 'dayGridMonth',
    plugins: [daygridPlugin, interactionPlugin]
  }
</script>

<section id="calendar">
  <div class="calendar-wrapper">
    <FullCalendar bind:this={calendarRef} {options}/>
  </div>

  <div class="map-wrapper">
      <Map {addressText}></Map>
  </div>
  
</section>

<style>
  #calendar {
    font-family: var(--sans);
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    gap: 1em;
    flex-wrap: wrap;
  }

  .calendar-wrapper {
    width: 35em;
  }

  .map-wrapper {
    width: 35em;
    height: 30em;
    background: lightblue;
  }
</style>