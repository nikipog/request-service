import { Link, useNavigate, useParams } from 'react-router-dom';
import './edit-request.scss';
import { useEffect, useState } from 'react';
import { useGetStatusesQuery, useGetTaskByIdQuery, useGetUsersQuery, useUpdateTaskMutation } from '../../store/slice/api-slice';
import { formatDateFull, formatDateShort } from './utils';
import { StatusBadge } from '../status-badge/status-badge';
import { Status } from '../../types/status';
import { Comment } from '../../types/task';
import { Users } from '../../types/users';
import { Tags } from '../../types/tags';


export default function EditRequest() {
    const { id } = useParams();


    const { data: task, isLoading, isError } = useGetTaskByIdQuery(id!, {
        refetchOnMountOrArgChange: true,
    });
    const { data: statuses } = useGetStatusesQuery('Statuses');
    const { data: executors } = useGetUsersQuery('Users');
    const [updateTask] = useUpdateTaskMutation();

    useEffect(() => {
        setComment('');
    }, [id]);

    useEffect(() => {
        if (task) {
            setStatus(String(task.statusId));
            setExecutor(String(task.executorId));
        }
    }, [task]);

    const [comment, setComment] = useState('');
    const [status, setStatus] = useState('');
    const [executor, setExecutor] = useState('');


    const selectedStatusObj = statuses?.find((s: Status) => s.id === Number(status));
    const navigate = useNavigate();



    if (isLoading) {
        return <div>Загрузка ...</div>;
    }

    if (isError) {
        return <div>Ошибка при загрузке заявки</div>;
    }

    if (!task) {
        return <div> Заявка не найдена</div>;
    }

    const onFormSave = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await updateTask({
                id: Number(id),
                comment,
                statusId: Number(status),
                executorId: Number(executor)
            }).unwrap();
            navigate(`/requests`);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="edit-request">
            <header className='edit-request__header'>
                <h2 className='edit-request__id'>
                    {task.id}
                </h2>
                <div className='edit-request__title'>
                    {task.name}
                </div>
                <Link to='/requests'>
                    <button className='edit-request__close-btn' aria-label='Закрыть'>
                        <img src='\src\assets\icons\close-icon.png' alt='Закрыть' />
                    </button>
                </Link>
            </header>
            <form
                onSubmit={onFormSave}
                className='edit-request__form'
            >
                <div className='edit-request__form-left'>
                    <div className='edit-request__field'>
                        <div className='edit-request__label'>
                            Описание
                        </div>
                        <span
                            aria-label="Описание"
                            id="request-description"
                            className='edit-request__description'
                            dangerouslySetInnerHTML={{ __html: task.description }}>
                        </span>


                    </div>
                    <div className='edit-request__field'>
                        <label
                            htmlFor='request-comment'
                            className='edit-request__label'
                        >
                            Добавление комментария
                        </label>
                        <textarea
                            name='requestComment'
                            aria-label='Комментарий'
                            id='request-comment'
                            className='edit-request__textarea'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <button
                        type='submit'
                        className='edit-request__submit-btn'>
                        <span>
                            Сохранить
                        </span>
                    </button>
                    {
                        task.lifetimeItems?.map((item: Comment) => (
                            <div
                                className="request-detail__comment"
                                key={item.id}
                            >
                                <div className="request-detail__icon-container">
                                    <img src="\src\assets\icons\ellipse-icon.png" alt="ellipse icon"></img>
                                </div>
                                <div className='request-detail__comment-container'>
                                    <div className="request-detail__comment-author">{item.id}</div>
                                    <div className="request-detail__comment-date">{`${formatDateFull(item.createdAt)} прокомментировал`}</div>
                                    <div
                                        className="request-detail__comment-text"
                                        dangerouslySetInnerHTML={{ __html: item.comment }}>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className='edit-request__form-right'>
                    <div className="status-dropdown">
                        <StatusBadge color={selectedStatusObj?.rgb} />
                        <select
                            className="edit-request__status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            {statuses.map((s: Status) => (

                                <option
                                    key={s.id}
                                    value={s.id}>
                                    {s.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='edit-request__label'>
                        Заявитель
                    </div>
                    <span
                        aria-label="Заявитель"
                        id="request-initiator"
                        className='edit-request__details'
                    >
                        {task.initiatorName}
                    </span>

                    <div className='edit-request__label'>
                        Создана
                    </div>
                    <span
                        aria-label="Создана"
                        id="request-details"
                        className='edit-request__details'
                    >
                        {task.initiatorName}
                    </span>

                    <div className='edit-request__label'>
                        Исполнитель
                    </div>
                    <select
                        className="edit-request__status edit-request__status--executor"
                        value={executor}
                        onChange={(e) => setExecutor(e.target.value)}
                    >
                        {executors.map((e: Users) => (

                            <option
                                key={e.id}
                                value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>

                    <div className='edit-request__label'>
                        {task.priorityName}
                    </div>
                    <span
                        aria-label="Приоритет"
                        id="request-priority"
                        className='edit-request__details'
                    >
                        {task.priorityName}
                    </span>

                    <div className='edit-request__label'>
                        Срок
                    </div>
                    <div
                        aria-label="Срок"
                        id="request-resolution-date-plan"
                        className='edit-request__date-container'
                    >
                        <div className='edit-request__date-icon'>
                            <img src='\src\assets\icons\calendar-icon.png' alt="calendar icon" />
                        </div>
                        <div className='edit-request__date-time'>
                            {formatDateShort(task.resolutionDatePlan)}
                        </div>
                    </div>
                    <div className='edit-request__label'>
                        Теги
                    </div>
                    <div className="edit-request__tags">
                        {task.tags.map((tag: Tags) => (

                            <div
                                key={tag.id} className="edit-request__tag">{tag.name}</div>
                        ))}
                    </div>
                </div>
            </form>
        </div >
    );
}