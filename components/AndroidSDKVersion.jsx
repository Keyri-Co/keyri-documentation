import { useEffect, useState } from 'react';

export const AndroidSDKVersion = () => {
  const [version, setVersion] = useState('...');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://api.github.com/repos/Keyri-Co/keyri-android-whitelabel-sdk/releases/latest'
      );
      const data = await response.json();
      setVersion(data.tag_name);
    };

    fetchData();
  }, []);

  return version;
};
