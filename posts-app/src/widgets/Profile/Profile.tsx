import { ReactElement, useState } from 'react';
import { Dropdown } from 'shared';
import { profile } from 'assets';
import cl from './Profile.module.scss';

const Profile = (): ReactElement => {
  const [dropdownOpen, setDropdownOpen] = useState(true);

  return (
    <div className={cl.profile} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
      <div className={cl.profile__icon}>
        <img src={profile} alt="profile-icon" />
      </div>
      <Dropdown isOpen={dropdownOpen} />
    </div>
  );
};

export default Profile;
