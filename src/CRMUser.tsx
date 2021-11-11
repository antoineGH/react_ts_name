import { createSlice } from '@reduxjs/toolkit'
import { CRMUsersReducer, CRMUsersState } from './interface'

export const CRMUsersSelector = (state) => state.data?.CRMUser

const CRMUsersSlice = createSlice<CRMUsersState, CRMUsersReducer>({
	name: 'CRMUsers',
	initialState: {
		CRMUser: [],
		isLoading: false,
	},
	reducers: {
		getCRMUserRequest: (state) => {
			state.isLoading = true
		},
		getCRMUserRequestSuccess: (state, action) => {
			state.isLoading = false
			state.CRMUser = [...state.CRMUser, ...action.payload]
		},
		getCRMUserRequestFailure: (state) => {
			state.isLoading = false
		},
		removeCRMUsers: (state) => {
			state.isLoading = true
		},
		removeCRMUsersSuccess: (state, action) => {
			state.isLoading = false
			state.CRMUser = state.CRMUser.filter(({ id }) => !action.payload.includes(id))
		},
		removeCRMUsersFailure: (state) => {
			state.isLoading = false
		},
	},
})

export const {
	getCRMUserRequest,
	getCRMUserRequestSuccess,
	getCRMUserRequestFailure,
	removeCRMUsers,
	removeCRMUsersSuccess,
	removeCRMUsersFailure,
} = CRMUsersSlice.actions

export default CRMUsersSlice.reducer
