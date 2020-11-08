import React from 'react';
import './PageContainer.scss';

const TopPageContent = ({
    children,
}: {
    children: JSX.Element;
}): JSX.Element => {
    return <div className="page-container">{children}</div>;
};

export default TopPageContent;
