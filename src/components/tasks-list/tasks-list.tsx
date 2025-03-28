import { useNavigate } from "react-router-dom";
import { useGetAllTasksOdataQuery } from "../../store/slice/api-slice";
import { Tasks } from "../../types/task";
import './task-list.scss';


export default function TasksList() {

    const { data: tasks, isLoading } = useGetAllTasksOdataQuery('Tasks');
    const navigate = useNavigate();

    function onListItemClick(id: number) {
        navigate(`/requests/${id}/edit`);
    }

    if (isLoading) {
        return (
            <div>
                Загрузка ...
            </div>
        );
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
                        style={{ '--priority-color': task.statusRgb } as React.CSSProperties}
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
