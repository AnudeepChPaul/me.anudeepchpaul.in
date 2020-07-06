import getClientDB from "@/Helpers/Db";

export default async (req, res) => {
  return new Promise(async (resolve, reject) => {
    const db = await getClientDB();
    const appCollection = db.collection("application");
    const linkCollection = db.collection("links");
    appCollection.find().toArray((appErr, app) => {
      linkCollection.find().toArray((linkErr, links) => {
        res.json({
          title: app[0],
          header: {
            list: links,
          },
          error: [appErr, linkErr],
        });
        res.status(200);
        resolve();
      });
    });
  });
};
