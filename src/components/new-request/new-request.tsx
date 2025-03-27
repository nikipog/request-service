import { Link, useNavigate } from 'react-router-dom';
import './new-request.scss';
import { useCreateTaskMutation } from '../../store/slice/api-slice';
import { FormEvent, useState } from 'react';



export default function NewRequest() {
    const navigate = useNavigate();
    const [createTask] = useCreateTaskMutation();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await createTask({
                name: title,
                description
            }).unwrap();
            navigate(`/${response}/edit`);
        } catch (err) {
            console.error('Ошибка при создании задачи:', err);
        }
    };

    return (
        <div className="new-request">
            <header className='new-request__header'>
                <h2 className='new-request__title'>
                    Новая заявка
                </h2>
                <Link to="/">
                    <button className='new-request__close-btn' aria-label='Закрыть'>
                        <img src='src\assets\icons\close-icon.png' alt='Закрыть' />
                    </button>
                </Link>
            </header>
            <form
                className='new-request__form'
                onSubmit={onFormSubmit}
            >
                <div className='new-request__field'>
                    <label htmlFor='request-title' className='new-request__label'>
                        Название
                    </label>
                    <textarea
                        aria-label="Название"
                        name='requestTitle'
                        id="request-title"
                        className='new-request__textarea'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                </div>
                <div className='new-request__field'>
                    <label
                        htmlFor='request-description'
                        className='new-request__label'
                    >
                        Описание
                    </label>
                    <textarea
                        name='requestDescription'
                        aria-label='Описание'
                        id='request-description'
                        className='new-request__textarea'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button
                    type='submit'
                    className='new-request__submit-btn'>
                    <span>
                        Сохранить
                    </span>
                </button>
            </form>
        </div >
    );
}