// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BoxProps, ResponsiveValue ,ButtonProps as CBProps,} from "@chakra-ui/react";

export interface DefaultbuttonProps {
    width: string [];
    bg: string;
    color: string;
    shadow?: string;
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
}

export interface HeroButtonProps extends CBProps {
    children: string;
    borderWidth?: string | number;
    borderColor?: string;
    mt?: string[];
    boxShadow?: string;
  }
