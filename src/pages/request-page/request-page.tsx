import TasksList from '../../components/tasks-list/tasks-list';
import './requests-page.scss';
import { Outlet, useNavigate } from 'react-router-dom';


export default function RequestsPage() {
    const navigate = useNavigate();

    return (
        <main >
            <div className="requests">

                <div className="requests__toolbar">
                    <button
                        className="requests__create-btn"
                        onClick={() => navigate('/requests/new')}
                    >
                        Создать заявку

                    </button>
                </div>

                <section className="requests__table-container">
                    <TasksList />

                </section>


                <section className="requests__new-request">
                    <Outlet />
                </section>

            </div>
        </main >
    );
}