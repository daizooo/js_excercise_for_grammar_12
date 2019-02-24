const tweets = [
  {
    username: "だいぞう",
    text: "今日勉強がんばった",
    replies: [
      {
        username: "A子",
        text: "おつかれ"
      },
      {
        username: "B子",
        text: "なに勉強したん？"
      }
    ]
  },
  {
    username: "もえ",
    text: "熊本マラソンおわった",
    replies: [
      {
        username: "C子",
        text: "すげーな"
      },
      {
        username: "D子",
        text: "フルマラソン？"
      }
    ]
  }
];

tweets.forEach((tweet, index) => {
  console.log(index);
  console.log(tweet.username);;
  console.log(tweet.text);
  tweet.replies.forEach((reply, index) => {
    console.log(index);
    console.log(reply.username);
    console.log(reply.text);
  })
});
