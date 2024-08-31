import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

function AuthCheck() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>User is authenticated</div>
      ) : (
        <div>User is not authenticated</div>
      )}
    </div>
  );
}

export default AuthCheck;