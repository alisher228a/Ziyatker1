import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
    title: string;
    icon?: string;
    variant: string;
    action: string;
}

const Button = ({ title, icon, variant, action }: ButtonProps) => {
  return (
    <Link href={action} className={`flexCenter gap-3 rounded-full border text-center ${variant} p-2`}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap">{title}</span>
    </Link>
  );
}

export default Button;
