import { AtlassianNavigation, PrimaryButton } from '@atlaskit/atlassian-navigation';
import { Link } from "react-router-dom";

const Navigation = () => (
  <AtlassianNavigation
    primaryItems={
      [
      <Link to={`/`}>
        <PrimaryButton>Register user</PrimaryButton>
      </Link>,
      <Link to={`/userinfo`}>
        <PrimaryButton>User info</PrimaryButton>
      </Link>
      ]
    }
  />
)

export default Navigation;