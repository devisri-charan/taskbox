// Toast.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Info, WarningCircle, Warning, CheckCircle, X } from "@phosphor-icons/react";
import './toast.css';
import { useState } from 'react';

export const Toast = ({
    type,
    message,
    hasIcon,
    hasDivider,
    hasAction,
    closeAction,
    actionText = "Button",
    backgroundColor = '#333',
    ...props
}) => {
    const iconProps = {
        size: 24,
        weight: "fill"
    };

    const icons = {
        info: <Info {...iconProps} color="#17a2b8" />,
        success: <CheckCircle {...iconProps} color="#28a745" />,
        warning: <Warning {...iconProps} color="#ffc107" />,
        error: <WarningCircle {...iconProps} color="#dc3545" />
    };

    const toastClasses = [
        'toast',
        hasDivider ? 'toast--with-divider' : '',
        hasAction ? '' : 'toast--no-action'
    ].join(' ');

    return (
        <div className={toastClasses} style={{ backgroundColor }} {...props}>
            {hasIcon && <span className="toast-icon">{icons[type]}</span>}
            <span className="toast-message">{message}</span>
            <div className='post-divider'>
                {hasDivider && <div className="toast-divider">|</div>}
                {hasAction && <button className="toast-action">{actionText}</button>}
                <button className="toast-close" onClick={closeAction}><X size={16} /></button>
            </div>
        </div>
    );
};

Toast.propTypes = {
    type: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
    message: PropTypes.string.isRequired,
    hasIcon: PropTypes.bool,
    hasDivider: PropTypes.bool,
    hasAction: PropTypes.bool,
    closeAction: PropTypes.func,
    actionText: PropTypes.string,
    backgroundColor: PropTypes.string
};

Toast.defaultProps = {
    hasIcon: true,
    hasDivider: true,
    hasAction: true,
    closeAction: () => {setIsVisible(false);},
    actionText: 'Action',
};