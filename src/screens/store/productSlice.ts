import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ProductState {
  list: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  list: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {fetchProductsStart, fetchProductsSuccess, fetchProductsFailure} =
  productSlice.actions;

export const fetchProducts = () => async (dispatch: any) => {
  try {
    dispatch(fetchProductsStart());
    const response = await fetch('https://fakestoreapi.com/products');
    const data: Product[] = await response.json();
    // console.log('data', data);
    dispatch(fetchProductsSuccess(data));
  } catch (err: any) {
    dispatch(fetchProductsFailure(err.message));
  }
};

export default productSlice.reducer;
