import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type Events from "../model/Events";

export const initialState: Events[] = [];

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getEvent = createAsyncThunk("Event/getEvent", async () => {
  try {
    const response = await api.get("/event/get");
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
});

const EventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEvent.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getEvent.rejected, (state, action) => {
        console.log("Failed to get Event", action.payload);
      })
      .addCase(getEvent.pending, (state, action) => {
        console.log("Getting Event", action.payload);
      });
  },
});

export default EventSlice.reducer;
