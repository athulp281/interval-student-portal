import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiRequest from "../../api/request";
import { formatDataForDataTable } from "@/utils/formatData";

const initialState = {
  loading: false,
  data: [],
  allGrievancedata: [],
  studentCourses: [],
};

export const createNewGrievance = createAsyncThunk(
  "grievance/createNewGrievance",
  async (data) => {
    const res = await apiRequest({
      url: "grievance",
      method: "post",
      data: data,
    });

    return res;
  }
);

export const getAllGrievance = createAsyncThunk(
  "grievance/getAllGrievance",
  async () => {
    const res = await apiRequest({
      url: "grievance",
      method: "get",
    });
    return res;
  }
);
export const getStudentsCourse = createAsyncThunk(
  "grievance/getStudentsCourse",
  async () => {
    const res = await apiRequest({
      url: "grievance/courses",
      method: "get",
    });
    return res;
  }
);

export const deleteRequest = createAsyncThunk(
  "grievance/deleteRequest",
  async (id) => {
    const res = await apiRequest({
      url: `grievance/${id}`,
      method: "delete",
    });
    return res;
  }
);

const grievanceSlice = createSlice({
  name: "grievance",
  initialState: initialState,

  extraReducers: (builder) => {
    builder.addCase(createNewGrievance.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(createNewGrievance.fulfilled, (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
      };
    });
    // -----------------getAllGrievance------------------------------
    builder.addCase(getAllGrievance.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(getAllGrievance.fulfilled, (state, action) => {
      console.log(action.payload);
      const data = formatDataForDataTable(action.payload.data);
      return {
        ...state,
        allGrievancedata: data,
        loading: false,
      };
    });
    // ------------getStudentsCourse--------------------------
    builder.addCase(getStudentsCourse.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(getStudentsCourse.fulfilled, (state, action) => {
      const data = formatDataForDataTable(action.payload.data);
      return {
        ...state,
        studentCourses: data,
        loading: false,
      };
    });
    // -----------------deleteRequest----------------------------

    builder.addCase(deleteRequest.pending, (state, action) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(deleteRequest.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
      };
    });
  },
});

export default grievanceSlice.reducer;
