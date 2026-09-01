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
    title_one ?: string;
    title_two ?: string;
    title_background_clr ?: string;
    background_clr ?: string;
    btn_clr ?: string;
    btn_title_clr ?: string;
    service_background_clr ?: string;
    learn_more_clr ?: string;
}

export interface Working_Progress_Comp_Props {

    Number ?: string;
    Title ?: string;
    Description ?: string;
}

export interface Team_Comp_Props {

    image ?: string;
    name ?: string;
    position ?: string;
}