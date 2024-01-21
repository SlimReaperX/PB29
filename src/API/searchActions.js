// searchActions.js
import { createAction } from "@reduxjs/toolkit";

// Action types
export const setSearchQuery = createAction("search/setQuery");
export const clearSearchQuery = createAction("search/clearQuery");