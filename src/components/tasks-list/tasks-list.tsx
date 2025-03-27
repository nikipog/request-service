import { useNavigate } from "react-router-dom";
import { useGetAllTasksOdataQuery } from "../../store/slice/api-slice";
import { Tasks } from "../../types/task";


export default function TasksList() {

    const { data: tasks, isLoading } = useGetAllTasksOdataQuery('Tasks');
    console.log('tasks:', tasks);
    const navigate = useNavigate();

    function onListItemClick(id: number) {
        console.log('clicked on id is:', id);
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
                        <td>{task.statusName}</td>
                        <td>{task.executorName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
