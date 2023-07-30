import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`border-none outline-0 rounded-[99px] ease-in-out duration-200 px-[30px] py-[15px] text-[16px] font-medium leading-4 hover:opacity-80 hover:shadow-xl ${props.className}`}
    >
      {props.children}
    </button>
  );
});
Button.displayName = "Button";
export default Button;
