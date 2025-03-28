import './sidebar.scss';
import knowledgeIcon from '../../assets/icons/knowledge-base-icon.png';
import requestsIcon from '../../assets/icons/requests-icon.png';
import employeesIcon from '../../assets/icons/employees.png';
import clientsIcon from '../../assets/icons/clients-icon.png';
import assetsIcon from '../../assets/icons/assets-icon.png';
import settingsIcon from '../../assets/icons/settings-icon.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ACTIVE_BY_DEFAULT_BUTTON = 1;


const sidebarItems = [
  { label: 'База знаний', icon: knowledgeIcon, path: '/knowledge-base' },
  { label: 'Заявки', icon: requestsIcon, path: '/requests' },
  { label: 'Сотрудники', icon: employeesIcon, path: '/employees' },
  { label: 'Клиенты', icon: clientsIcon, path: '/clients' },
  { label: 'Активы', icon: assetsIcon, path: '/assets' },
  { label: 'Настройки', icon: settingsIcon, path: '/settings' },
];

function Sidebar() {
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState(sidebarItems[ACTIVE_BY_DEFAULT_BUTTON].label);
  const [title, setActiveTitle] = useState(sidebarItems[ACTIVE_BY_DEFAULT_BUTTON].label);
  function onSidebarItemClick(label: string, path: string) {
    setActiveItem(label);
    setActiveTitle(label);
    navigate(path);
  }
  return (
    <aside className="sidebar">
      <title>{title}</title>
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
              <button
                className={`sidebar__button ` +
                  (activeItem === item.label ? 'sidebar__button--active' : '')
                }
                onClick={() => onSidebarItemClick(item.label, item.path)}
              >
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