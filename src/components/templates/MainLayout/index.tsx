import React from 'react';

import { Container } from './styles';

const MainLayout: React.FC = ({ children }) => (
    <Container maxWidth="md">
        {children}
    </Container>
);

export default MainLayout;