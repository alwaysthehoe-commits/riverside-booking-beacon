
import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
<header>
  <div class="brand">
    <span class="mark">RB</span>
    <div>
      <b>RIVERSIDE</b>
      <small>BOOKING BEACON</small>
    </div>
  </div>
  <a class="source" href="https://www.riversidesheriff.org/" target="_blank" rel="noreferrer">
    OFFICIAL SHERIFF SITE ↗
  </a>
</header>

<main>
  <section class="hero">
    <p class="eyebrow">RIVERSIDE COUNTY · CALIFORNIA</p>
    <h1>Booking <em>Beacon</em></h1>
    <p class="sub">A public-records lookup interface. Verify every result with the official county source.</p>
  </section>

  <section class="panel">
    <div class="controls">
      <label>RECORD DATE
        <input id="date" type="date">
      </label>
      <label>AREA
        <select id="area">
          <option value="">All areas</option>
          <option>Lake Elsinore</option>
          <option>Wildomar</option>
          <option>Murrieta</option>
          <option>Perris</option>
          <option>Corona</option>
          <option>Temecula</option>
          <option>Menifee</option>
          <option>Rest of County</option>
        </select>
      </label>
    </div>

    <label class="search">SEARCH PUBLIC RECORDS
      <input id="q" type="search" placeholder="Name, charge, or agency">
    </label>

    <button id="searchBtn">SEARCH RECORDS</button>

    <div id="status" role="status">
      This independent version is being connected to the county's current booking-data source. No booking records are displayed until that connection is verified.
    </div>
  </section>

  <section class="notice">
    <b>IMPORTANT</b>
    <p>Booking information can be incomplete, delayed, or changed. An arrest or charge is not proof of guilt. Confirm details with the official Riverside County source.</p>
  </section>
</main>

<footer>
  RIVERSIDE BOOKING BEACON
  <span>PUBLIC INFORMATION · NOT A GOVERNMENT WEBSITE</span>
</footer>
`;

document.querySelector('#date').value =
  new Date().toISOString().slice(0, 10);

document.querySelector('#searchBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent =
    'Live record lookup is not enabled yet. Please use the official Riverside County Sheriff website to verify current booking information.';
});
