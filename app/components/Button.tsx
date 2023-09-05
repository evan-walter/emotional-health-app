interface ButtonProps {
  children: JSX.Element | string;
}
export default function Button({ children }: ButtonProps) {
  return (
    <button className='bg-primary text-white font-bold py-2 px-4 rounded-full'>
      {children}
    </button>
  );
}
