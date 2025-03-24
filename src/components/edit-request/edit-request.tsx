import './edit-request.scss';


export default function EditRequest() {

    return (
        <div className="edit-request">
            <header className='edit-request__header'>
                <h2 className='edit-request__id'>
                    123
                </h2>
                <p className='edit-request__title'>
                    Здесь название заявки
                </p>
                <button className='edit-request__close-btn' aria-label='Закрыть'>
                    <img src='src\assets\icons\close-icon.png' alt='Закрыть' />
                </button>
            </header>
            <form className='edit-request__form'>
                <div className='edit-request__form-left'>
                    <div className='edit-request__field'>
                        <div className='edit-request__label'>
                            Описание
                        </div>
                        <span
                            aria-label="Описание"
                            id="request-description"
                            className='edit-request__description'
                        >
                            Здесь описание
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
                        />
                    </div>
                    <button
                        type='submit'
                        className='edit-request__submit-btn'>
                        <span>
                            Сохранить
                        </span>
                    </button>
                    <div className="request-detail__comment">
                        <div className="request-detail__comment-author">Иван Александров</div>
                        <div className="request-detail__comment-date">24.03.2025 12:00</div>
                        <div className="request-detail__comment-text">
                            «Разработать баннер...»
                        </div>
                    </div>
                </div>
                <div className='edit-request__form-right'>
                    <select className="request-detail__status">
                        <option value="in-progress">В работе</option>
                        <option value="done">Выполнена</option>
                        {/* ...получить из API статусы */}
                    </select>
                    <div className='edit-request__label'>
                        Заявитель
                    </div>
                    <span
                        aria-label="Заявитель"
                        id="request-initiator"
                        className='edit-request__details'
                    >
                        Александр Вознесенский
                    </span>

                    <div className='edit-request__label'>
                        Создана
                    </div>
                    <span
                        aria-label="Создана"
                        id="request-details"
                        className='edit-request__details'
                    >
                        Макарова Анна
                    </span>

                    {/* Смена исполнителя */}
                    <select className="request-detail__executor">
                        <option value="0">Менеджер Сергей</option>
                        {/* ...получить из API список пользователей */}
                    </select>

                    <div className='edit-request__label'>
                        Приоритет
                    </div>
                    <span
                        aria-label="Приоритет"
                        id="request-priority"
                        className='edit-request__details'
                    >
                        Высокий
                    </span>

                    <div className='edit-request__label'>
                        Срок
                    </div>
                    <span
                        aria-label="Срок"
                        id="request-resolution-date-plan"
                        className='edit-request__details'
                    >
                        12.11.2018
                    </span>
                    <div className='edit-request__label'>
                        Теги
                    </div>
                    <span
                        aria-label="Теги"
                        id="request-tags"
                        className='edit-request__details'
                    >
                        здесь теги
                    </span>
                </div>
            </form>
        </div >
    );
}