import { Input } from "./styles";

interface InputProps {
  name: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  error?: string;

  disabled?: boolean;

  placeholder?: string;
  variant?: "outlined" | "contained";
}

const InputText = ({ name, type, placeholder, variant }: InputProps) => {
  return (
    <Input
      placeholder={placeholder}
      name={name}
      type={type}
      variant="standard"
    />
  );
};

export default InputText;
