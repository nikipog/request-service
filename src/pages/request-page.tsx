import './requests-page.scss';

const priority = {
    rgb: "#ee0909",
    id: 58921,
    name: "Очень низкий"
};

export default function RequestsPage() {
    return (
        <main className="requests">
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

            {/* Правая колонка: здесь появляется RequestDetails
            <section style={{ flex: 1, overflowY: 'auto' }}>
                <Outlet />
            </section>*/}

        </main >
    );
}