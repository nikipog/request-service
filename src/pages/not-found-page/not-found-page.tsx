import { Link } from "react-router-dom";

export default function NotFoundPage() {


    return (
        <h1>Страница не найдена.&nbsp;
            <Link to='/requests'>
                Кликните здесь
            </Link>, чтобы перейти к заявкам.
        </h1>

    );
}