import * as TE from "fp-ts/TaskEither";
import { db } from "../infrastructure/db";

export const addToFavorites = (userId: number, productId: number) => {
  const index = db.favorites.findIndex(item => item.userId === userId);
  if (index !== -1) {
    const fav = db.favorites[index];
    if (!fav.productIds.includes(productId)) {
      fav.productIds.push(productId);
    }
  } else {
    db.favorites.push({ userId, productIds: [productId] });
  }
  return TE.right({ success: true, message: "товар добавлен в избранное" });
};

export const removeFromFavorites = (userId: number, productId: number) => {
  const index = db.favorites.findIndex(item => item.userId === userId);
  if (index !== -1) {
    db.favorites[index].productIds = db.favorites[index].productIds.filter(id => id !== productId);
  }
  return TE.right({ success: true, message: "товар удалён из избранного" });
};

export const getFavorites = (userId: number) =>
  TE.right(db.favorites.filter(fav => fav.userId === userId));