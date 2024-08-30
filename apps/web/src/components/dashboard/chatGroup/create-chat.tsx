"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  createChatSchema,
  createChatSchemaType,
} from "@/validations/chatSchema";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { clearCache } from "@/actions/common";
import { api } from "@/http/api-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateChat() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createChatSchemaType>({
    resolver: zodResolver(createChatSchema),
  });

  const onSubmit = async ({title, passcode}: createChatSchemaType) => {
    setLoading(true);
    try {
      await api.post('chat-group', {
        json: {
          title,
          passcode,
        },
      });
      clearCache("dashboardChatGroups");
      setOpen(false);
      toast.success("Chat group created successfully");
    } catch (error) {
      console.error("Error creating chat group:", error);
      toast.error("Failed to create chat group. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Chat</Button>
      </DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Create your new Chat</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <Input placeholder="Enter chat title" {...register("title")} />
            <span className="text-red-400">{errors.title?.message}</span>
          </div>
          <div className="mt-4">
            <Input placeholder="Enter passcode" {...register("passcode")} />
            <span className="text-red-400">{errors.passcode?.message}</span>
          </div>
          <div className="mt-4">
            <Button className="w-full" disabled={loading}>
              {loading ? "Processing.." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
