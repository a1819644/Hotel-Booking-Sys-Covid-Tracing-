let user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {
  user = {
    _id: 1
  }
}

export const contacts = [
  {
    _id: 1,
    name: "Adelaide Hotel",
  },
  {
    _id: 2,
    name: "Mawson Lakes Hotel",
  },
];

export const messages = [
  {
    from: user._id,
    to: 1,
    content:
      "Hi, I would like to know more about the accessibility features in this room \nRegards,\nKen",
  },
  {
    from: user._id,
    to: 2,
    content:
      "Hi there, would it be possible to get an extra matress if required \nRegards,\nKen",
  },
  {
    from: 1,
    to: user._id,
    content:
      "Hello Ken, We are glad to inform you that this room adheres to the highest accessibility standards in the industry. \nRegards",
  },
  {
    from: 2,
    to: user._id,
    content:
      "Hello there, we are happy to provide you with an additonal matress for a fee. \nRegards,\nLily",
  },
];
