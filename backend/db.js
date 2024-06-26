const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sfaham:dJN4xlNVaULZnTnT@cluster0.cxktszm.mongodb.net/paytm"
);

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  password: String,
  username: String,
});

const User = mongoose.model("User", userSchema);

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

const Account = mongoose.model("Account", accountSchema);

module.exports = { User, Account };
