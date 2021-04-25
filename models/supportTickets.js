const mongoose = require("mongoose");

const SupportTicketSchema = new mongoose.Schema({
  email: String,
  supportTicket: String,
});
const supportTickets = mongoose.model("Support Ticket", SupportTicketSchema);

module.exports = supportTickets;
