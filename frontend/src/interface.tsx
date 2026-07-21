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

export interface Services_Comp_Props {

    image ?: string;
    title ?: string;
    title_background_clr ?: string;
    background_clr ?: string;
    btn_clr ?: string;
}
