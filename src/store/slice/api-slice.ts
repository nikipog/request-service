import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tenatGuid = '06605a63-a05f-46a9-85ac-87e421b5f518';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://intravision-task.test01.intravision.ru/api/${tenatGuid}`
    }),
    tagTypes: ['Tasks', 'Statuses', 'Users'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => 'Tasks',
            providesTags: ['Tasks'],
        }),
        createTask: builder.mutation({
            query: (newTaskData) => ({
                url: 'Tasks',
                method: 'POST',
                body: newTaskData,
            }),
            invalidatesTags: ['Tasks'],
        }),
    })
});

export const { useGetTasksQuery, useCreateTaskMutation } = apiSlice;