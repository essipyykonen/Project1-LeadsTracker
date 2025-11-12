// Import built-in Node.js modules
const path = require("path"); // For handling file paths
const fs = require("fs");   // For reading or writing files

// Import third-party module
const express = require("express");
const app = express();

// Set up port using cloud's port (if available)
const PORT = process.env.PORT || 3000;
// Define the absolute path to the JSON data file
const DATA = path.join(__dirname, "leads.json");

// Middleware Configuration
// This middleware parses incoming request bodies with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));
// This middleware parses incoming request bodies with JSON payloads
app.use(express.json());
// This middleware serves static files (HTML, CSS, JS) from the 'public' directory automatically
app.use(express.static(path.join(__dirname, "public")));

// Data Helper Functions
// This function safely reads the leads
function readLeads(){ 
    if(!fs.existsSync(DATA)) return [];
    return JSON.parse(fs.readFileSync(DATA,"utf8")); 
}
// This function safely writes the leads array back
function writeLeads(leads){ 
    fs.writeFileSync(DATA, JSON.stringify(leads,null,2)); 
}

// API Routes (The server's brain)
// Handle GET requests and filter all leads
app.get("/api/leads", (req, res)=>{
  const q = (req.query.q || "").toLowerCase();
  const status = (req.query.status || "").toLowerCase();
  let list = readLeads();
  if (q) list = list.filter(l => (l.name + l.company).toLowerCase().includes(q));
  if (status) list = list.filter(l => l.status.toLowerCase() === status);
  res.json(list);
});

// Handle POST requests to create a new lead
app.post("/api/leads", (req, res)=>{
  const {name, email, company, source, notes} = req.body;
  if (!name || !email) return res.status(400).json({ error: "Name and email are required" });
  const leads = readLeads();
  const lead = {id: Date.now().toString(), name, email, company: company || "", source: source || "", notes: notes || "", status: "New", createdAt: new Date().toISOString()};
  leads.push(lead);
  writeLeads(leads);
  res.status(201).json(lead);
});

// Handle PATCH requests to update a lead
app.patch("/api/leads/:id", (req, res)=>{
  const leads = readLeads();
  const idx = leads.findIndex(l => l.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  const allowed = ["status", "notes"];
  for (const k of allowed) {
    if (req.body[k] !== undefined) {
      leads[idx][k] = req.body[k];
    }
  }
  writeLeads(leads);
  res.json(leads[idx]);
});

// Root Route
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

// Starting the Server
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));