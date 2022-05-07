<script>
  // REF: https://github.com/YogliB/svelte-fullcalendar/
  import FullCalendar from 'svelte-fullcalendar';
  import daygridPlugin from '@fullcalendar/daygrid';
  import interactionPlugin from '@fullcalendar/interaction';

  
  // TODO: Calendar styles  -  https://fullcalendar.io/docs/css-customization
  // TODO: Add Google Map  -  https://developers.google.com/maps/documentation/embed/get-started?hl=en_US
  // TODO: Add event-clicking functionality  -  https://fullcalendar.io/docs/eventClick
  // TODO: clicking date/event opens the relevant map location (if applicable)
  // TODO: determine functionality for when there is no event on a day

  const options = {
    dateClick: (event) => {
      alert(event.dateStr)
    },
    events: [
      { title: 'event 1', date: '2022-05-01' },
      { title: 'event 2', date: '2022-05-02' },
    ],
    initialView: 'dayGridMonth',
    plugins: [daygridPlugin, interactionPlugin]
  }
</script>

<FullCalendar {options}/>

<style>

</style>