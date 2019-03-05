const tweets = [
  {
    username: 'だいぞう',
    text: 'ポートフォリオ作らないと',
    replies: [
      {
        username: 'A子',
        text: '何作るん？',
      },
      {
        username: 'B子',
        text: '大事らしいね',
      },
    ],
  },
  {
    username: 'だいこ',
    text: 'ねむい',
    replies: [
      {
        username: 'A子',
        text: '寝ろ',
      },
      {
        username: 'B子',
        text: '仮眠や',
      },
    ],
  },
];

tweets.forEach((tweet, index) => {
  console.log(tweet.username);
  console.log(tweet.text);
  tweet.replies.forEach((reply, index) => {
    console.log(reply.username);
    console.log(reply.text);
  });
});
