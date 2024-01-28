import { ReactNode } from "react";

export interface User {
  name: string;
  email: string;
  avatarurl: string;
  isverified: boolean;
  accessToken: string;
  refreshToken: string;
  googleId: string;
  id: number;
}

export interface VisitedUrl {
  id: number;
  userId: string;
  url: string;
}

export interface GoogleAuthButtonProps {
  statusText: string;
  proxyUrl: string;
}

export interface HeaderProps {
  handleThemeChange: () => void;
}

export interface UserCardProps {
  name: string | undefined;
  email: string | undefined;
  avatarUrl: string | undefined;
  isVerified: boolean | undefined;
}

export interface SearchBarProps {
  visitedUrls: VisitedUrl[] | undefined;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
