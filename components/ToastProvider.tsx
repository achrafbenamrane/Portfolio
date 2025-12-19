'use client'

import React from 'react';
import Notification, { NotificationPosition, NotificationType } from './toast';
import { AnimatePresence } from 'framer-motion';

// Define the notification item interface
interface NotificationItem {
  id: number;
  type: NotificationType;
  title: string;
  message?: string;
  showIcon?: boolean;
  duration?: number;
}

interface ToastContextType {
  addNotification: (type: NotificationType, title: string, message?: string, showIcon?: boolean, duration?: number) => void;
  addLoadingWithSuccess: (loadingTitle: string, loadingMessage: string, successTitle: string, successMessage: string, loadingDuration?: number) => void;
}

export const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastProviderProps {
  children: React.ReactNode;
  position?: NotificationPosition;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = 'bottom-right'
}) => {
  // We'll keep a state for dynamically added notifications
  const [notifications, setNotifications] = React.useState<NotificationItem[]>([]);
  const nextIdRef = React.useRef(1); // To generate unique IDs for new notifications

  const addNotification = React.useCallback((type: NotificationType, title: string, message?: string, showIcon?: boolean, duration?: number) => {
    const newNotification: NotificationItem = {
      id: nextIdRef.current++,
      type,
      title,
      message,
      showIcon,
      duration,
    };
    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
  }, []);

  // New function for loading with timing system
  const addLoadingWithSuccess = React.useCallback((loadingTitle: string, loadingMessage: string, successTitle: string, successMessage: string, loadingDuration: number = 3000) => {
    const loadingId = nextIdRef.current++;

    // Add loading notification
    const loadingNotification: NotificationItem = {
      id: loadingId,
      type: 'loading',
      title: loadingTitle,
      message: loadingMessage,
      showIcon: true,
    };

    setNotifications((prevNotifications) => [...prevNotifications, loadingNotification]);

    // After loading duration, replace with success notification
    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.map(notification =>
          notification.id === loadingId
            ? {
              ...notification,
              type: 'success',
              title: successTitle,
              message: successMessage,
              duration: 4000, // Success notification duration
            }
            : notification
        )
      );
    }, loadingDuration);
  }, []);

  const handleClose = React.useCallback((id: number) => {
    setNotifications((prevNotifications) => prevNotifications.filter(n => n.id !== id));
  }, []);

  // Function to get Tailwind CSS classes based on position
  const getPositionClasses = React.useCallback((currentPosition: NotificationPosition) => {
    switch (currentPosition) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'top-center':
        return 'top-4 left-1/2 -translate-x-1/2'; // Centered horizontally at the top
      case 'bottom-center':
        return 'bottom-4 left-1/2 -translate-x-1/2'; // Centered horizontally at the bottom
      default:
        return 'top-4 right-4'; // Default to top-right
    }
  }, []);

  const contextValue = React.useMemo(() => ({
    addNotification,
    addLoadingWithSuccess,
  }), [addNotification, addLoadingWithSuccess]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      {/* Notifications container - Fixed positioning */}
      <div className={`fixed p-4 space-y-2 w-full max-w-sm z-50 ${getPositionClasses(position)}`}>
        <AnimatePresence>
          {/* Render dynamically added notifications */}
          {notifications.map((notification) => (
            <Notification
              key={notification.id}
              type={notification.type}
              title={notification.title}
              message={notification.message}
              showIcon={notification.showIcon}
              duration={notification.duration}
              onClose={() => handleClose(notification.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};