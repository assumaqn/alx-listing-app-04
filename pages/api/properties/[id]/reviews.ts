export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === "GET") {
    return res.status(200).json([
      {
        id: 1,
        user: "Alice",
        rating: 5,
        comment: "Amazing stay!",
        date: "2024-08-20",
      },
      {
        id: 2,
        user: "Bob",
        rating: 4,
        comment: "Very comfortable.",
        date: "2024-08-21",
      },
    ]);
  }

  res.status(405).end();
}
