import { ReactNode } from "react";

export interface DropdownItemAttributes {
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | undefined;
    disabled?: boolean;
    key?: string | number;
    title?: string | ReactNode;
    textValue?: string;
    description?: string;
    shortcut?: string;
    startContent?: ReactNode;
    endContent?: ReactNode;
    showDivider?: boolean;
    href?: boolean;
    rel?: string;
    download?: boolean | string;
    ping?: string;
    isSelected?: boolean;
    isReadOnly?: boolean;
    hideSelectedIcon?: boolean;
    closeOnSelect?: boolean;
    classNames?: string;
}  