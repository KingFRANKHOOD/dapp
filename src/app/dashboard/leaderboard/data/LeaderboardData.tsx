const LeaderBoardData = Array.from({ length: 100 }, (_, index) => {
  return {
    rank: index + 1,
    user: `0x${Math.random().toString(16).slice(2, 42)}`,
    cleanupsDone: Math.floor(Math.random() * 50) + 1, // Between 1 and 50
    referrals: Math.floor(Math.random() * 100) + 1, // Between 1 and 100
    dcuPoints: parseFloat((Math.random() * 5000 + 500).toFixed(2)), // Between 500 and 5500
  };
});

export default LeaderBoardData;
