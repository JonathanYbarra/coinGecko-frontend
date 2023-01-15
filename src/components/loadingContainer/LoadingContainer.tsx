import React from 'react'
import { Spinner } from './../spinner/Spinner';
import "./loadingContainer.scss";

type LoadingContainerProps = {
    isLoading: boolean;
    children: React.ReactNode;
}

export const LoadingContainer = ({ isLoading, children }: LoadingContainerProps) => {
    return (
        <div>
            {isLoading ? (
                <div className="loading-container">
                    <Spinner />
                </div>
            ) : (
                children
            )}
        </div>
    )
}
