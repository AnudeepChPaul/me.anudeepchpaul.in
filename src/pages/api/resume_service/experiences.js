import getClientDB from "@/Helpers/DB";

export default async (req, res) => {
  return new Promise(async (resolve, reject) => {
    const db = await getClientDB();
    const experienceCollection = db.collection("experiences");
    experienceCollection.find().toArray((err, data) => {
      res.json({
        experiences: {
          list: data,
        },
        error: [err],
      });
      res.status(200).end();
      resolve();
    });
  });
};
