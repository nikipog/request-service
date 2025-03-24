import { useState } from 'react';
import './requests-page.scss';
import NewRequest from '../components/new-request/new-request';

const priority = {
    rgb: "#ee0909",
    id: 58921,
    name: "Очень низкий"
};

export default function RequestsPage() {
    const [showForm, setShowNewForm] = useState(true);

    return (
        <main >
            <div className="requests">

                <div className="requests__toolbar">
                    <button className="requests__create-btn">
                        <span>
                            Создать заявку
                        </span>
                    </button>
                </div>

                <section className="requests__table-container">
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

                            <tr style={{ '--priority-color': priority.rgb } as React.CSSProperties}>
                                <td>50061</td>
                                <td>
                                    <div className='table__cell-content'>
                                        Проверка как отображается много текста Проверка как отображается много текста Проверка как отображается много текста Проверка как отображается много текста Проверка как отображается много текста Проверка как отображается много текста Проверка как отображается много текста Проверка как отображается много текста Проверка как отображается много текста Проверка как отображается много текста Проверка как отображается много текста Проверка как отображается много текста Проверка как отображается много текста
                                    </div>
                                </td>
                                <td>in progress</td>
                                <td>Менеджер Сергей</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {showForm &&
                    <section className="requests__new-request">
                        <NewRequest />
                    </section>}

            </div>
        </main >
    );
}