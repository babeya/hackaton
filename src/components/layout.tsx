import React, { Children } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

type Props  = {
  children: React.ReactNode;
}

const Layout = ({children}: Props) => {
  return <div>
    {children}
  </div>
};

export default Layout;