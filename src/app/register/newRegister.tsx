"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { useMediaQuery } from "react-responsive";

export const NewRegister = () => {
  const submitForm = async (data: any) => {
    const payload = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      picturePath: "",
      friends: "",
      location: "",
      occupation: "",
    };
    console.log(data, "dddddddd");
    await axios
      .post("http://localhost:6001/auth/register", data)
      .then((_res) => {
        console.log(_res.data.message);
      })
      .catch((_err) => {
        console.log(_err.response.data);
      });
  };

  const isBigScreen = useMediaQuery({ query: "(max-width: 800px)" });
  const { handleSubmit, register } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      picturePath: "",
      friends: "",
      location: "",
      occupation: "",
    },
  });
  return (
    <div className=" p-4  ">
      <div className="space-y-4">
        <Input
          placeholder="first Name"
          type="text"
          id="firstName"
          {...register("firstName", { required: true })}
        />
        <Input
          placeholder="lastName"
          type="text"
          id="lastName"
          {...register("lastName", { required: true })}
        />
        <Input
          placeholder="email"
          type="text"
          id="lastName"
          {...register("email", { required: true })}
        />
        <Input
          placeholder="password"
          type="text"
          id="lastName"
          {...register("password", { required: true })}
        />
        {/* <Input */}
        {/*   type="file" */}
        {/*   id="picturePath" */}
        {/*   {...register("picturePath", { required: true })} */}
        {/* /> */}
        {/* <Input */}
        {/*   placeholder="Friends" */}
        {/*   type="text" */}
        {/*   id="friends" */}
        {/*   {...register("friends", { required: true })} */}
        {/* /> */}
        <Input
          placeholder="Location"
          type="text"
          id="location"
          {...register("location", { required: true })}
        />
        <Input
          placeholder="occupation"
          type="text"
          id="occupation"
          {...register("occupation", { required: true })}
        />
        <Button onClick={handleSubmit(submitForm)}>Submit</Button>
      </div>
      <Toaster />
      {/* {isBigScreen ? <h3>Max width 800</h3> : <h4>not max screen</h4>} */}
    </div>
  );
};
