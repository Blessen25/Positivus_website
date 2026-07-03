export interface HeaderProps {

    scrolled: boolean;
}

export interface ButtonProps {

    text: string;
    route?: string;
    onClick ?: () => void;
    className?: string;
    style?: React.CSSProperties;
}