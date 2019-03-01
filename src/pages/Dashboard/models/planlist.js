import { queryPlanList } from '@/services/api';

export default {
  namespace: 'planlist',
  state: {
    data: {
      list: [],
      pagination: {},
    }
  },

  effects: {
    *fetch({ payload, callback }, { call, put }) {
      const response = yield call(queryPlanList, payload);
      if(response===undefined) return;  
      yield put({
        type: 'queryList',
        payload:response,
      })
      if (callback) callback(response)
    },
    
  },

  reducers: {
    queryList(state, action) {
      return {
        ...state,
        data:{
          ...state.data,
          ...action.payload
        }
      }
    }
  },
};
