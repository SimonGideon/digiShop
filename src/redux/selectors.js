import { createSelector } from "@reduxjs/toolkit";

// Assuming your state structure is something like this:
// state = { wishlist: { wishlist: [] }, compare: { compareList: [] } }

export const selectWishlist = (state) => state.wishlist.wishlist;
export const selectCompareList = (state) => state.compare.compareList;

export const selectIsInWishlist = (productId) =>
  createSelector(selectWishlist, (wishlist) =>
    wishlist.some((item) => item.id === productId)
  );

export const selectIsInCompareList = (productId) =>
  createSelector(selectCompareList, (compareList) =>
    compareList.some((item) => item.id === productId)
  );
