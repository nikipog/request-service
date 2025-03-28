import { useNavigate } from "react-router-dom";
import { useGetAllTasksOdataQuery, useGetPrioritiesQuery } from "../../store/slice/api-slice";
import { Tasks } from "../../types/task";
import './task-list.scss';
import React from "react";
import { Priority } from "../../types/priority";


export default function TasksList() {

    const { data: tasks, isLoading: tasksLoading } = useGetAllTasksOdataQuery('Tasks');
    const { data: priorities, isLoading: prioritiesLoading } = useGetPrioritiesQuery('Priorities');

    const priorityMap = React.useMemo(() => {
        const map: Record<number, string> = {};
        if (!priorities) { return map; }

        priorities.forEach((item: Priority) => {
            map[item.id] = item.rgb;
        });
        return map;
    }, [priorities]);


    const navigate = useNavigate();

    function onListItemClick(id: number) {
        navigate(`/requests/${id}/edit`);
    }


    if (tasksLoading || prioritiesLoading) {
        return <div>Загрузка …</div>;
    }


    return (
        <table className="requests__table">
            <thead className='requests__table-header'>
                <tr>
                    <th>ID</th>
                    <th>Название</th>
                    <th>Статус</th>
                    <th>Исполнитель</th>
                </tr>
            </thead>
            <tbody>
                {tasks.value.map((task: Tasks) => (

                    <tr
                        style={{ '--priority-color': priorityMap[task.priorityId] } as React.CSSProperties}
                        key={task.id}
                        onClick={() => onListItemClick(task.id)}
                    >
                        <td>{task.id}</td>
                        <td>
                            <div className='table__cell-content'>
                                {task.name}
                            </div>
                        </td>
                        <td>
                            <span
                                className="status-badge-list"
                                style={{ backgroundColor: task.statusRgb }}
                            >
                                {task.statusName}
                            </span>
                        </td>
                        <td>{task.executorName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
