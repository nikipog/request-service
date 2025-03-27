export interface Tasks {
    id: number,
    name: "string",
    description: "string",
    createdAt: "string",
    updatedAt: "string",
    price: number,
    taskTypeId: number,
    taskTypeName: "string",
    statusId: number,
    statusName: "string",
    statusRgb: "string",
    priorityId: number,
    priorityName: "string",
    serviceId: number,
    serviceName: "string",
    resolutionDatePlan: "string",
    tags: [
        {
            id: number,
            name: "string"
        }
    ],
    initiatorId: number,
    initiatorName: "string",
    executorId: number,
    executorName: "string",
    executorGroupId: number,
    executorGroupName: "string",
    lifetimeItems: [
        {
            id: number,
            userName: "string",
            lifetimeType: number,
            createdAt: "string",
            comment: "string",
            fieldName: "string",
            oldFieldValue: "string",
            newFieldValue: "string"
        }
    ]
}


export type Comment = Tasks["lifetimeItems"][number];