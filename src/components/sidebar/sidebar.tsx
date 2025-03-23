import './sidebar.scss';
import knowledgeIcon from '../../assets/icons/knowledge-base-icon.png';
import requestsIcon from '../../assets/icons/requests-icon.png';
import employeesIcon from '../../assets/icons/employees.png';
import clientsIcon from '../../assets/icons/clients-icon.png';
import assetsIcon from '../../assets/icons/assets-icon.png';
import settingsIcon from '../../assets/icons/settings-icon.png';


const sidebarItems = [
  { label: 'База знаний', icon: knowledgeIcon },
  { label: 'Заявки', icon: requestsIcon },
  { label: 'Сотрудники', icon: employeesIcon },
  { label: 'Клиенты', icon: clientsIcon },
  { label: 'Активы', icon: assetsIcon },
  { label: 'Настройки', icon: settingsIcon },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img src="/src/assets/icons/logo-icon.png" alt='logo-icon' />
      </div>
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          {sidebarItems.map((item) => (

            <li
              className="sidebar__item"
              key={item.label}
            >
              <button className="sidebar__button">
                <img
                  className="sidebar__icon"
                  src={item.icon}
                  alt={item.label}
                  aria-hidden="true"
                />
                <span className="sidebar__label">{item.label}</span>
              </button>
            </li>
          ))}

        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;