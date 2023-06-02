import { Button, Checkbox, Input } from "@material-tailwind/react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-full flex items-center justify-center">
      <div className="bg-gray-900 p-7 flex flex-col gap-4 w-[400px] rounded-md">
        <h1 className="text-center">Авторизация</h1>

        <Input label="Email" />
        <Input
          type={"password"}
          label="Password"
          icon={
            showPassword ? (
              <EyeIcon
                onClick={toggleShowPassword}
                cursor="pointer"
                color="red"
              />
            ) : (
              <EyeSlashIcon
                onClick={toggleShowPassword}
                cursor="pointer"
                color="red"
              />
            )
          }
        />
        <Checkbox color="red" label="Запомнить меня" />
        <Button className="py-4" color="red">
          Войти
        </Button>
      </div>
    </div>
  );
}
