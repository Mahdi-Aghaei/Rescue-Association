"use client";

import useConversation from "@/app/hooks/useConversation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import axios from "axios";
import { HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { HiPaperAirplane } from "react-icons/hi";
import { CldUploadButton } from "next-cloudinary";

const Form = () => {
  const { conversationId } = useConversation();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", ",{shouldValidate:true");
    axios.post("/api/messages", {
      ...data,
      conversationId,
    });
  };

  const handleUplaod = (result: any) => {
    axios.post("/api/messages", {
      image: result?.info?.secure_url,
      conversationId,
    });
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });
  return (
    <div className="py-4 px-4 bg-white border-t items-center gap-2 lg:gap-4 w-full">
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={() => {}}
        uploadPreset="water-crisis"
      >
        <HiPhoto size={30} className="text-sky-500" />
      </CldUploadButton>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center gap-2 lg:gap-4 w-full"
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeHolder="write a message"
        />
        <button
          type="submit"
          className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition"
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Form;
