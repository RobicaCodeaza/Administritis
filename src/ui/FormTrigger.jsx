import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./Button.jsx";
import { useForm } from "react-hook-form";
import FormRow from "./FormRow.jsx";
import Form from "./Form.jsx";

function FormTrigger({ children }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;
  console.log(errors);
  function onSubmit(e) {
    e.preventDefault();
    console.log("succesfully submited");
    console.log(formState);
  }
  function onError() {
    console.log("error submitting form ");
  }

  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="bg-primaryLight  mx-auto  flex  items-center justify-items-center px-32 py-20  ">
        <DrawerHeader>
          <DrawerTitle className="text-center text-[32px] sm:text-[4.4rem]">
            Afla mai multe despre oferta noastra
          </DrawerTitle>
          <DrawerDescription className="text-greyLight2 text-center text-[18px] ">
            Fie ca doresti sa vorbim despre serviciile oferite sau pentru alte
            sugestii ,dorim sa-ti auzim opinia.
          </DrawerDescription>
        </DrawerHeader>

        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          {/* <DrawerFooter> */}
          <FormRow label="Nume si prenume" error={errors?.name?.message}>
            <input
              className="accent-colorAccent2 focus:ring-colorAccent2 border-accent2 border-greyLight text-primaryDark text-primrayDark border-2 border-solid bg-white px-4  py-2  text-[18px] focus:outline-none focus:ring focus:ring-offset-1"
              type="text"
              id="name"
              placeholder="ex: Popescu Gabriel"
              {...register("name", { required: "This field is required" })}
            ></input>
          </FormRow>
          <FormRow label="Email" error={errors?.email?.message}>
            <input
              className="accent-colorAccent2 focus:ring-colorAccent2 border-accent2 border-greyLight border-2 border-solid bg-white px-4 py-2 text-[18px] focus:outline-none focus:ring focus:ring-offset-2"
              placeholder="ex: youremail@yahoo.com"
              type="email"
              id="email"
              {...register("email", { required: "This field is required" })}
            ></input>
          </FormRow>

          <FormRow label="Subiect" error={errors?.email?.message}>
            <input
              className="accent-colorAccent2 focus:ring-colorAccent2 border-accent2 border-greyLight border-2 border-solid bg-white px-4 py-2 text-[18px] focus:outline-none focus:ring focus:ring-offset-2 "
              placeholder="ex: Administrare completa"
              type="text"
              id="subiect"
              {...register("subiect", { required: "This field is required" })}
            ></input>
          </FormRow>

          <FormRow label="Mesaj" error={errors?.email?.message}>
            <textarea
              className="accent-colorAccent2 focus:ring-colorAccent2 border-accent2 border-greyLight  border-2 border-solid bg-white px-4 py-2 text-[18px] focus:outline-none focus:ring focus:ring-offset-2"
              id="mesaj"
              placeholder="Mesajul tau"
              {...register("mesaj", { required: "This field is required" })}
            ></textarea>
          </FormRow>
          <div className="flex gap-6">
            <Button type="reset" variation="secondary" size="medium">
              Cancel
            </Button>
            <DrawerClose>Close</DrawerClose>
            <Button type="submit" variation="primary" size="medium">
              Submit
            </Button>
          </div>
          {/* </DrawerFooter> */}
        </Form>
      </DrawerContent>
    </Drawer>
  );
}

export default FormTrigger;
