// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BoxProps, ResponsiveValue ,ButtonProps as CBProps,} from "@chakra-ui/react";

export interface DefaultbuttonProps extends CBProps {
    width: string [];
    bg: string;
    color: string;
    shadow?: string;
    children: string;
    // onClick: React.MouseEventHandler<HTMLButtonElement> | (() => void) | undefined;
    onClick?: () => void;
    borderWidth?: string | number;
    borderColor?: string;
    fontSize?: string [];
    className?: string;
}


export interface InputProps {
    label: string
    name: string;
    value: string;
    color: string | undefined;
    type?: string;
    error?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.SyntheticEvent) => void;
    onFocus?: () => void;
    isDisabled?: boolean;
    width?: string[];
    fontWeight?: string;
    errorColor?: string;
    fontSize?: string[];
    bgColor?: string;
    borderWidth?: string | number;
    borderColor?: string;
    shadow?: string;
    touched?: boolean;
}

export interface HeroButtonProps extends CBProps {
    children: string;
    borderWidth?: string | number;
    borderColor?: string;
    mt?: string[];
    boxShadow?: string;
  }


  export interface signupValues {
    fullname: string;
    username: string;
    gender: string;
    email: string;
    password: string;
    confirmPassword: string;
    hobbies: string;
    age: string;
    location: string;
  }

  export interface signinValues {
    email: string;
    password: string;
  }

  export interface forgotPasswordValues {
    email: string;
  }
