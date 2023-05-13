exports.getKeys = (req, res, next) => {
  res.status(200).json({
    keys: [
      {
        title: "C",
        notes: ["C", "D", "E", "F", "G", "A", "B"],
      },
    ],
  });
};

exports.addKey = (req, res, next) => {
  const title = req.body.title;
  const notes = req.body.notes;

  // Create key in db
  res.status(201).json({
    message: "Key created successfully!",
    key: { title: title, notes: notes },
  });
};
