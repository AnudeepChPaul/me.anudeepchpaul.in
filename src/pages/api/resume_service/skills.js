import getClientDB from "@/Helpers/DB";

export default async (req, res) => {
  return new Promise(async (resolve, reject) => {
    const db = await getClientDB();
    const skillsCollection = db.collection("skills");
    skillsCollection.find().toArray((err, data) => {
      res.json({
        skills: {
          list: data,
        },
        error: [err],
      });
      res.status(200).end();
      resolve(res)
    });
  });
};
