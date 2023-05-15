import ProfileForm from '../components/ProfileForm/ProfileForm';
import {
  Title,
  ColumnContainer,
  SuccessMessage,
  StyledLink,
} from '../styled/styled';

const Profile = () => {
  return (
    <div style={{ padding: '20px', height: '100%' }}>
      <ColumnContainer
        style={{
          padding: '10px',
          gap: '10px',
          justifyContent: 'start',
          alignItems: 'stretch',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          borderRadius: '20px',
          height: '100%',
        }}
      >
        <Title>Profile Information</Title>
        <SuccessMessage>
          Success: Your profile has been updated. Go back to your{' '}
          <StyledLink to={'/'}>Dashboard</StyledLink>.
        </SuccessMessage>
        <ProfileForm />
      </ColumnContainer>
    </div>
  );
};

export default Profile;
