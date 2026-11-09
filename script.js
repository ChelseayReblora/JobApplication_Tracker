const STATUSES = ["Applied", "Interview", "Offer", "Rejected"];
let applications = JSON.parse(localStorage.getItem("applications")) || [];

const form = document.getElementById("appForm");
const list = document.getElementById("list");
const stats = document.getElementById("stats");
const search = document.getElementById("search");
const filter = document.getElementById("filter");

function save() {
  localStorage.setItem("applications", JSON.stringify(applications));
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderStats() {
  stats.innerHTML = STATUSES.map(s => {
    const count = applications.filter(a => a.status === s).length;
    return `<div class="stat"><strong>${count}</strong>${s}</div>`;
  }).join("");
}

function render() {
  renderStats();

  const term = search.value.toLowerCase();
  const visible = applications.filter(a => {
    const matchesStatus = filter.value === "All" || a.status === filter.value;
    const matchesSearch =
      a.company.toLowerCase().includes(term) ||
      a.role.toLowerCase().includes(term);
    return matchesStatus && matchesSearch;
  });

  if (visible.length === 0) {
    list.innerHTML = `<p class="empty">No applications found.</p>`;
    return;
  }

  list.innerHTML = visible.map(a => `
    <div class="app ${a.status}">
      <h3>${escapeHTML(a.role)} @ ${escapeHTML(a.company)}</h3>
      <small>Applied on ${a.date}</small>
      ${a.notes ? `<p>${escapeHTML(a.notes)}</p>` : ""}
      ${a.link ? `<a href="${escapeHTML(a.link)}" target="_blank" rel="noopener">View posting</a>` : ""}
      <div class="app-actions">
        <select onchange="updateStatus(${a.id}, this.value)">
          ${STATUSES.map(s =>
            `<option ${s === a.status ? "selected" : ""}>${s}</option>`
          ).join("")}
        </select>
        <button class="delete" onclick="deleteApp(${a.id})">Delete</button>
      </div>
    </div>
  `).join("");
}

form.addEventListener("submit", e => {
  e.preventDefault();
  applications.unshift({
    id: Date.now(),
    company: document.getElementById("company").value.trim(),
    role: document.getElementById("role").value.trim(),
    date: document.getElementById("date").value,
    status: document.getElementById("status").value,
    link: document.getElementById("link").value.trim(),
    notes: document.getElementById("notes").value.trim()
  });
  save();
  render();
  form.reset();
});

function updateStatus(id, status) {
  const app = applications.find(a => a.id === id);
  app.status = status;
  save();
  render();
}

function deleteApp(id) {
  if (!confirm("Delete this application?")) return;
  applications = applications.filter(a => a.id !== id);
  save();
  render();
}

search.addEventListener("input", render);
filter.addEventListener("change", render);

render();