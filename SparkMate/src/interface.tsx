// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BoxProps, ResponsiveValue ,ButtonProps as CBProps,} from "@chakra-ui/react";

export interface DefaultbuttonProps extends CBProps {
    width: string [];
    bg: string;
    color: string;
    shadow?: string;
    children: string;
    onClick: React.MouseEventHandler<HTMLButtonElement> | (() => void) | undefined;
    borderWidth?: string | number;
    borderColor?: string;
    fontSize?: string [];
}


export interface InputProps {
  label: string
    name: string;
    value: string;
    color: string | undefined;
    type?: string;
    error: string | undefined;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.SyntheticEvent) => void;
    isDisabled?: boolean;
    width?: string[];
    fontWeight?: string;
    errorColor?: string;
    fontSize?: string[];
    bgColor?: string;
}

export interface HeroButtonProps extends CBProps {
    children: string;
    borderWidth?: string | number;
    borderColor?: string;
    mt?: string[];
    boxShadow?: string;
  }
