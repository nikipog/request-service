import './empty-page.scss';
import { Outlet } from 'react-router-dom';


export default function EmptyPage() {


    return (
        <main >

            <div className="empty-page">

                <section >
                    <Outlet />
                </section>

            </div>
        </main >
    );
}