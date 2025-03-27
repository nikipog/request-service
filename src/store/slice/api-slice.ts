import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tenantGuid = '06605a63-a05f-46a9-85ac-87e421b5f518';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://intravision-task.test01.intravision.ru/api/${tenantGuid}`
    }),
    tagTypes: ['AllTasks', 'Tasks', 'Statuses', 'Users', 'Priorities', 'Tags'],
    endpoints: (builder) => ({
        getAllTasksOdata: builder.query({
            query: () => ({
                url: `http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=${tenantGuid}`,
                method: 'GET',
            }),
            providesTags: ['AllTasks']
        }),
        getTasks: builder.query({
            query: () => 'Tasks',
            providesTags: ['Tasks'],
        }),
        getTaskById: builder.query({
            query: (taskId: number | string) => `Tasks/${taskId}`,
            providesTags: (taskId) => [{ type: 'Tasks', id: taskId }],
        }),
        createTask: builder.mutation({
            query: (newTaskData) => ({
                url: 'Tasks',
                method: 'POST',
                body: newTaskData,
            }),
            invalidatesTags: ['Tasks'],
        }),
        updateTask: builder.mutation({
            query: (updatedTaskdata) => ({
                url: 'Tasks',
                method: 'PUT',
                body: updatedTaskdata,
            }),
            invalidatesTags: (arg) => {

                if (!arg || !arg.id) {
                    return ['AllTasks'];
                }
                return [{ type: 'Tasks', id: arg.id }, 'AllTasks'];
            }
        }),
        getStatuses: builder.query({
            query: () => 'Statuses',
            providesTags: ['Statuses'],
        }),
        getPriorities: builder.query({
            query: () => 'Priorities',
            providesTags: ['Priorities'],
        }),
        getTags: builder.query({
            query: () => 'Tags',
            providesTags: ['Tags']
        }),
        getUsers: builder.query({
            query: () => 'Users',
            providesTags: ['Users']
        })
    })
});

export const {
    useGetTasksQuery,
    useCreateTaskMutation,
    useGetAllTasksOdataQuery,
    useGetTaskByIdQuery,
    useUpdateTaskMutation,
    useGetPrioritiesQuery,
    useGetStatusesQuery,
    useGetTagsQuery,
    useGetUsersQuery } = apiSlice;