const tweets = [
  {
    username: "だいぞう",
    text: "今日も勉強",
    replies: [
      {
        username: "A子",
        text: "おつかれ"
      },
      {
        username: "B子",
        text: "すごーい"
      }
    ]
  },
  {
    username: "だい子",
    text: "お尻痛い",
    replies: [
      {
        username: "C子",
        text: "どうした？"
      },
      {
        username: "D子",
        text: "病院いけ"
      }
    ]
  }
];

tweets.forEach((tweet, index) => {
  console.log(tweet.username);
  console.log(tweet.text);
  tweet.replies.forEach((reply, index) => {
    console.log(reply.username);
    console.log(reply.text);
  });
});
