const tweets = [
  {
    username: "だいぞう",
    text: "お腹いたい",
    replies: [
      {
        username: "A子",
        text: "だいじょうぶ？"
      },
      {
        username: "B子",
        text: "くすり飲め！"
      }
    ]
  },
  {
    username: "だいこ",
    text: "お腹いっぱい",
    replies: [
      {
        username: "C子",
        text: "何食ったん？"
      },
      {
        username: "D子",
        text: "どこ行ったん？"
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
