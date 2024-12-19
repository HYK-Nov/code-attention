import { db } from "@/firebase/firebase";

export const getArticles = async () => {
  try {
    const snapshot = await db.collection("articles").get();
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
};
