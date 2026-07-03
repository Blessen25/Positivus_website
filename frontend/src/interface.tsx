export interface HeaderProps {

    scrolled: boolean;
}

export interface ButtonProps {

    text: string;
    onClick: () => void;
    className?: string;
    style?: React.CSSProperties;
}