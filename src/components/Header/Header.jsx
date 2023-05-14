import { ErrorMessage, Text } from '../../styled/styled';
import { UserMenu, StyledHeader, MenuButton, UserIcon } from './styled';
import logo from '../../assets/Cut-Logo-2.png';
import { useEffect, useRef, useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { signout, user } = useAuthContext();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const menuRef = useRef();

  const handleLogOut = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signout();
      navigate('signin');
    } catch (err) {
      console.log(err.message);
      setError('Failed to log out. Please, try again.');
    }
  };

  const handleNavigatekHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <StyledHeader style={{ position: 'relative' }}>
      <img
        src={logo}
        alt="Company Logo"
        style={{ height: '100%', width: 'auto', cursor: 'pointer' }}
        onClick={handleNavigatekHome}
      />
      <div ref={menuRef}>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          <UserIcon color="white" size={30} />
          <Text style={{ padding: '10px 20px 10px 10px' }} color="white">
            {user.displayName || 'New user'}
          </Text>
        </MenuButton>
        {isOpen && (
          <UserMenu>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <MenuButton color="#4dd467">
              <Text style={{ padding: '10px 20px' }}>Profile Settings</Text>
            </MenuButton>
            <hr style={{ width: '90%', margin: '0 auto' }} />
            <MenuButton color="#4dd467" onClick={handleLogOut}>
              <Text style={{ padding: '10px 20px' }}>Logout</Text>
            </MenuButton>
          </UserMenu>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
