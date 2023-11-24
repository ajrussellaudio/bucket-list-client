import { useForm } from "react-hook-form";

type FormValues = {
  countryName: string;
};

type FormProps = {
  onSubmit: (formValues: FormValues) => void;
};

export function Form({ onSubmit }: FormProps) {
  const { register, handleSubmit } = useForm<FormValues>();

  return (
    <form onSubmit={handleSubmit((values) => onSubmit(values))}>
      <label htmlFor="name">Country name</label>
      <input id="name" {...register("countryName")} />
      <button type="submit">Submit</button>
    </form>
  );
}
