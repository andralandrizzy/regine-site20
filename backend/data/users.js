import bcrypt from "bcryptjs";

const users = [
  {
    name: "Andral Orelus",
    email: "andral@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Regine Eustache",
    email: "e.regine@gmail.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "john doe",
    email: "jdoe@gmail.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default users;
