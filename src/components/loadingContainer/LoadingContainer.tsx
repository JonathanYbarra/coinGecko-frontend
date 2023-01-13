import React from 'react'
import { Spinner } from './../spinner/Spinner';
import "./loadingContainer.scss";

type LoadingContainerProps = {
    isLoading: boolean;
    children: React.ReactNode;
}

export const LoadingContainer = ({ isLoading, children }: LoadingContainerProps) => {
    return (
        <div className="loading-container">
            {isLoading ? (
                <Spinner />
            ) : (
                children
            )}
        </div>
    )
}
