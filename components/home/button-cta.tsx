export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonCta = ({ ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#18fc36_0%,#fff048_50%,#65f544_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-10 py-1 text-sm font-medium text-slate-950 backdrop-blur-3xl">
        {props.children}
      </span>
    </button>
  );
};

export default ButtonCta;
