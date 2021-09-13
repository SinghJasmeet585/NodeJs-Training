exports.getContacts = (req, res, next) => {
  return res.json({ ok: true, contacts });
};
