const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/wpu", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// //menambahkan 1 data
// const contact1 = new Contact({
//   nama: "Michael",
//   nohp: "081315254223",
//   email: "michael@gmail.com",
// });

// //simpan ke collection
// contact1.save().then((contact) => console.log(contact));
