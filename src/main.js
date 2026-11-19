import './style.css';

const OFFICIAL_NAME_SEARCH = 'https://jimspub.riversidesheriff.org/jimsacucgi/InmateInfo.html';
const OFFICIAL_DATE_SEARCH = 'https://jimspub.riversidesheriff.org/jimsacucgi/SearchByDate.html';
const OFFICIAL_INFO = 'https://www.riversidesheriff.org/213/Inmate-Information';

const app = document.querySelector('#app');

app.innerHTML = `
  <header>
    <div class="brand">
      <span class="mark" aria-hidden="true">RB</span>
      <div><b>RIVERSIDE</b><small>BOOKING BEACON</small></div>
    </div>
    <a class="source" href="${OFFICIAL_INFO}" target="_blank" rel="noopener noreferrer">OFFICIAL SHERIFF RESOURCES ↗</a>
  </header>

  <main>
    <section class="hero">
      <p class="eyebrow">RIVERSIDE COUNTY · CALIFORNIA</p>
      <h1>Booking <em>Beacon</em></h1>
      <p class="sub">A simple starting point for finding public inmate and booking information through the Riverside County Sheriff's official search system.</p>
    </section>

    <section class="panel" aria-labelledby="search-heading">
      <h2 id="search-heading">Search official booking records</h2>
      <p class="panel-intro">Choose how you want to search. Each option opens the Sheriff's live public database in a new tab. Search results are provided and maintained by the Sheriff's Office.</p>
      <div class="actions">
        <article class="action-card">
          <h3>Search by name</h3>
          <p>Look up an individual using a required last name. First name, date of birth, and gender can help narrow the official search.</p>
          <a class="button" href="${OFFICIAL_NAME_SEARCH}" target="_blank" rel="noopener noreferrer">OPEN NAME SEARCH ↗</a>
        </article>
        <article class="action-card">
          <h3>Search by booking date</h3>
          <p>Open the Sheriff's booking-date search to choose a facility and date from the official database.</p>
          <a class="button" href="${OFFICIAL_DATE_SEARCH}" target="_blank" rel="noopener noreferrer">OPEN DATE SEARCH ↗</a>
        </article>
      </div>
    </section>

    <section class="notice">
      <b>IMPORTANT RECORDS NOTICE</b>
      <p>This is an independent information portal, not a government website. Booking information may be delayed, incomplete, or changed. A booking or charge is not proof of guilt. The Sheriff's own database warns that its information should not be relied upon for legal action. Always verify details with the official source.</p>
      <a class="button secondary" href="${OFFICIAL_INFO}" target="_blank" rel="noopener noreferrer">RIVERSIDE SHERIFF INMATE INFORMATION ↗</a>
    </section>

    <section class="panel" style="margin-top:22px">
      <h2>County detention facilities</h2>
      <p class="panel-intro">The Sheriff's Corrections Division lists these adult detention facilities.</p>
      <div class="facilities">
        <div class="facility">Blythe Jail<span>Blythe</span></div>
        <div class="facility">Cois M. Byrd Detention Center<span>Murrieta</span></div>
        <div class="facility">John J. Benoit Detention Center<span>Indio</span></div>
        <div class="facility">Larry D. Smith Correctional Facility<span>Banning</span></div>
        <div class="facility">Robert Presley Detention Center<span>Riverside</span></div>
      </div>
    </section>
  </main>

  <footer>
    <span>RIVERSIDE BOOKING BEACON</span>
    <span>PUBLIC INFORMATION · NOT A GOVERNMENT WEBSITE</span>
  </footer>
`;
