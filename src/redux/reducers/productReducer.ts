import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const getCatalog = createAsyncThunk(
  "getCatalog",
  async (__, thunkAPI) => {
    try {
      const response = await api.getCatalog();
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

export const getProductsByCatalog = createAsyncThunk(
  "getProductsByCatalog",
  async (id: any, thunkAPI) => {
    try {
      const response = await api.getProductsByCatalog(id);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

export const getCartridjesByCatalog = createAsyncThunk(
  "getCartridjes",
  async (id: any, thunkAPI) => {
    try {
      const response = await api.getCartridjesByCatalog(id);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const getCatalogCartridjes = createAsyncThunk(
  "getCatalogCartridjes",
  async (__, thunkAPI) => {
    try {
      const response = await api.getCatalogCartridjes();
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const getProductDetail = createAsyncThunk(
  "getProductDetail",
  async (id: any, thunkAPI) => {
    try {
      const response = await api.getProductDetail(id);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const getCartridjesDetail = createAsyncThunk(
  "getCartridjesDetail",
  async (id: any, thunkAPI) => {
    try {
      const response = await api.getCartridjes(id);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const toTelegram = createAsyncThunk(
  "toTelegram",
  async (msg: any, thunkAPI) => {
    try {
      const response = await api.toTelegram(msg);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const searchProduct = createAsyncThunk(
  "searchProduct",
  async (model: any, thunkAPI) => {
    try {
      const response = await api.searchProduct(model);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);
export const searchWithCatalog = createAsyncThunk(
  "searchWithCatalog",
  async ({ id, model }: any, thunkAPI) => {
    try {
      const response = await api.searchWithCatalog(id, model);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response);
    }
  }
);

const initialState: any = {
  products: [],
  catalogs: [],
  productDetail: {},
  cartridjesCatalogs: [],
  cartridjes: [],
  searchProduct: [],
  loading: false,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getCatalog.pending.type]: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    [getCatalog.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.catalogs = action.payload;
      state.loading = false;
    },

    [getCatalogCartridjes.fulfilled.type]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.cartridjesCatalogs = action.payload;
      state.loading = false;
    },
    [getProductDetail.pending.type]: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    [getProductsByCatalog.fulfilled.type]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getCartridjesDetail.pending.type]: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    [getCartridjesDetail.fulfilled.type]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.loading = false;
      state.productDetail = action.payload;
    },
    [getProductsByCatalog.pending.type]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.loading = true;
      state.products = action.payload;
    },

    [getProductDetail.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.productDetail = action.payload;
    },
    [searchProduct.pending.type]: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    [searchWithCatalog.pending.type]: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    [searchProduct.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.searchProduct = action.payload;
    },
    [searchWithCatalog.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getCartridjesByCatalog.pending.type]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.loading = true;
    },
    [getCartridjesByCatalog.fulfilled.type]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.cartridjes = action.payload;
      state.loading = false;
    },
  },
});

export default productSlice.reducer;
