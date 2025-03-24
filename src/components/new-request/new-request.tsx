import './new-request.scss';


export default function NewRequest() {

    return (
        <div className="new-request">
            <header className='new-request__header'>
                <h2 className='new-request__title'>
                    Новая заявка
                </h2>
                <button className='new-request__close-btn' aria-label='Закрыть'>
                    <img src='src\assets\icons\close-icon.png' alt='Закрыть' />
                </button>
            </header>
            <form className='new-request__form'>
                <div className='new-request__field'>
                    <label htmlFor='request-title' className='new-request__label'>
                        Название
                    </label>
                    <textarea
                        aria-label="Название"
                        name='requestTitle'
                        id="request-title"
                        className='new-request__textarea'
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