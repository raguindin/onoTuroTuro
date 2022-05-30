<script>
  // REF: https://github.com/YogliB/svelte-fullcalendar/
  import FullCalendar from "svelte-fullcalendar";
  import daygridPlugin from "@fullcalendar/daygrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import Map from "./Map.svelte";
  import { DateTime } from "luxon";

  export let calendarData;

  const calendarEvents = calendarData.slice().map((event) => {
    return {
      title: event.name,
      date: event.eventdate,
    };
  });

  let calendarRef;
  let addressText;
  let currentDate = DateTime.now().toISO().slice(0, 10);
  let todaysCalendarEvents;

  const formatDate = (date) => {
    let dateArray = date.split("-");
    return dateArray.concat([dateArray.shift()]).join("/");
  };

  const formatTime = (time) => {
    let [hhbig, mm] = time.split(":");
    let hh = ((parseInt(hhbig) + 11) % 12) + 1;
    let ampm = parseInt(hhbig) < 12 ? "A.M." : "P.M.";
    return `${hh}:${mm} ${ampm}`;
  };

  const refreshDateInfo = (date) => {
    todaysCalendarEvents = calendarData.filter(
      (calendarEvent) => calendarEvent.eventdate === date
    );
    if (todaysCalendarEvents.length > 0) {
      addressText = todaysCalendarEvents[0].address;
    } else {
      addressText = "";
    }
  };

  $: refreshDateInfo(currentDate);

  const handleClick = (event) => {
    const calendarAPI = calendarRef.getAPI();
    currentDate = event.dateStr;
    calendarAPI.select(currentDate);
  };

  const options = {
    dateClick: handleClick,
    events: calendarEvents,
    initialView: "dayGridMonth",
    plugins: [daygridPlugin, interactionPlugin],
  };
</script>

<div class="section-wrapper">
  <h3>Calendar</h3>
  <div class="flex-wrapper">
    <div class="calendar-wrapper">
      <FullCalendar bind:this={calendarRef} {options} />
    </div>

    <div class="event-info-wrapper">
      <h4>Events for {formatDate(currentDate)}</h4>
      {#if todaysCalendarEvents.length > 0}
        {#each todaysCalendarEvents as event}
          <h5>
            {event.name}
          </h5>
          <h6>
            <time>
              {formatTime(event.starttime)} - {formatTime(event.endtime)}
            </time>
            <address>At {event.address}</address>
          </h6>
          <p>{event.body}</p>
        {/each}
      {:else}
        <h5>No events today!</h5>
      {/if}
    </div>
    {#if todaysCalendarEvents.length > 0}
      <div class="map-wrapper">
        <!-- {addressText} -->
        <Map {addressText} />
      </div>
    {/if}
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
    width: 30em;
    height: auto;
  }

  .event-info-wrapper {
    width: 20em;
    text-align: center;
    font-size: 1.8em;
  }

  .event-info-wrapper :is(h5, h6, p) {
    margin: 1em;
  }

  .event-info-wrapper p {
    font-size: 0.6em;
  }

  .map-wrapper {
    width: 30em;
    height: 30em;
    background: lightblue;
  }
</style>
