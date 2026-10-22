const form = document.querySelector('.search');
const query = document.querySelector('#query');
const kind = document.querySelector('#kind');
const rows = [...document.querySelectorAll('#reference-list tbody tr')];
const normalize = value => value.normalize('NFKD').replace(/\p{Diacritic}/gu, '').toLowerCase();
const records = rows.map(row => ({ row, text: normalize(row.textContent), kind: row.dataset.kind }));
function filter() {
  const words = normalize(query.value.slice(0, 300)).trim().split(/\s+/).filter(Boolean);
  let visible = 0;
  for (const entry of records) {
    const matches = (kind.value === 'all' || entry.kind === kind.value) && words.every(word => entry.text.includes(word));
    entry.row.hidden = !matches;
    if (matches) visible++;
  }
  document.querySelector('#result-count').textContent = `${visible} of ${rows.length} references. Search filters this list locally.`;
  document.querySelector('#no-results').hidden = visible > 0;
}
form?.addEventListener('submit', event => event.preventDefault());
query?.addEventListener('input', filter);
kind?.addEventListener('change', filter);
// Keep the reading column first on a small screen; the disclosure stays available.
if (matchMedia('(max-width: 760px)').matches) document.querySelector('.sidebar details').open = false;
