import { ReactElement, useState } from 'react';
import { Dropdown } from 'shared';
import profile from './assets/profile.svg';
import cl from './ProfileIcon.module.scss';

const ProfileIcon = (): ReactElement => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className={cl.profile}
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <div className={cl.profile__icon}>
        <img src={profile} alt="profile-icon" />
      </div>
      <Dropdown isOpen={dropdownOpen} />
    </div>
  );
};

export default ProfileIcon;
