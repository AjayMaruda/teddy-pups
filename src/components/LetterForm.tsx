"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { puppiesData } from "@/data/puppies";
import { PawIcon } from "./Header";

const formSchema = z.object({
  name: z.string().min(2, "Please share your name"),
  phone: z.string().min(7, "Please enter a valid phone or WhatsApp number"),
  email: z.string().email("Please enter a valid email address"),
  area: z.string().min(2, "Please share your city or neighborhood"),
  puppyInterest: z.string().default("any"),
  website: z.string().max(0, "Bot detected").optional(), // Honeypot
});

type FormValues = z.infer<typeof formSchema>;

interface LetterFormProps {
  defaultPuppy?: string;
  preselectedPuppyName?: string;
  className?: string;
}

export default function LetterForm({
  defaultPuppy = "any",
  preselectedPuppyName,
  className = "",
}: LetterFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      puppyInterest: defaultPuppy,
      website: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate server action / email dispatch
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
    reset();
  };

  return (
    <div
      className={`relative rounded-3xl border-2 border-cocoa bg-[#fffdf8] p-6 shadow-[6px_6px_0px_#2a170e] sm:p-10 ${className}`}
    >
      {/* Decorative Vintage Stamp */}
      <div className="absolute right-6 top-6 hidden sm:flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-toffee bg-honey-soft/50 p-2.5 shadow-sm rotate-2">
        <PawIcon className="size-6 text-toffee" />
        <span className="font-scrawl text-[10px] font-bold text-toffee-ink uppercase tracking-wider">
          Dubai Air Mail
        </span>
      </div>

      <div className="border-b border-cocoa/10 pb-4">
        <p className="font-scrawl text-sm text-toffee-ink">handwritten inquiry</p>
        <h3 className="font-plush text-2xl font-bold text-cocoa sm:text-3xl">
          {preselectedPuppyName ? `Ask about ${preselectedPuppyName}` : "Post a letter to Teddy"}
        </h3>
      </div>

      {submitted ? (
        <div className="py-12 text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-honey-soft text-toffee-deep">
            <CheckCircle2 className="size-8" />
          </div>
          <h4 className="font-plush mt-4 text-2xl font-bold text-cocoa">
            Letter received with love!
          </h4>
          <p className="mt-2 text-cocoa-soft max-w-md mx-auto">
            Thank you for writing to us. Our concierge team has received your note and will get back to you promptly on WhatsApp or email.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="btn btn-ghost mt-6 text-sm"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          {/* Honeypot field for bot protection */}
          <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Letter Body in Mad-Libs style */}
          <div className="space-y-4 font-sans text-base leading-loose text-cocoa sm:text-lg">
            <p className="font-scrawl text-lg font-bold text-toffee-ink">Dear TeddyPups,</p>

            <div className="flex flex-wrap items-center gap-2">
              <span>My name is</span>
              <div className="inline-block w-full min-w-0 sm:w-auto sm:flex-1">
                <input
                  type="text"
                  placeholder="your full name"
                  {...register("name")}
                  className={`w-full border-b-2 bg-transparent px-2 py-0.5 font-semibold text-cocoa placeholder:text-cocoa/30 focus:border-toffee focus:outline-none ${
                    errors.name ? "border-red-500" : "border-cocoa/40"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <span>, and you can reach me on</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-block w-full min-w-0 sm:w-auto sm:flex-1">
                <input
                  type="text"
                  placeholder="WhatsApp or phone number"
                  {...register("phone")}
                  className={`w-full border-b-2 bg-transparent px-2 py-0.5 font-semibold text-cocoa placeholder:text-cocoa/30 focus:border-toffee focus:outline-none ${
                    errors.phone ? "border-red-500" : "border-cocoa/40"
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <span>or by email at</span>
              <div className="inline-block w-full min-w-0 sm:w-auto sm:flex-1">
                <input
                  type="email"
                  placeholder="your email address"
                  {...register("email")}
                  className={`w-full border-b-2 bg-transparent px-2 py-0.5 font-semibold text-cocoa placeholder:text-cocoa/30 focus:border-toffee focus:outline-none ${
                    errors.email ? "border-red-500" : "border-cocoa/40"
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
              <span>.</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span>I live in</span>
              <div className="inline-block w-full min-w-0 sm:w-auto sm:flex-1">
                <input
                  type="text"
                  placeholder="city or neighborhood (e.g. Dubai Marina)"
                  {...register("area")}
                  className={`w-full border-b-2 bg-transparent px-2 py-0.5 font-semibold text-cocoa placeholder:text-cocoa/30 focus:border-toffee focus:outline-none ${
                    errors.area ? "border-red-500" : "border-cocoa/40"
                  }`}
                />
                {errors.area && (
                  <p className="text-xs text-red-500">{errors.area.message}</p>
                )}
              </div>
              <span>, and I&apos;m curious about</span>
              <div className="inline-block w-full min-w-0 sm:w-auto sm:flex-1">
                <select
                  {...register("puppyInterest")}
                  className="w-full border-b-2 border-cocoa/40 bg-transparent px-2 py-1 font-semibold text-cocoa focus:border-toffee focus:outline-none"
                >
                  <option value="any">any puppy (not sure yet)</option>
                  {puppiesData.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.displayName} ({p.breed}, {p.genderLabel})
                    </option>
                  ))}
                </select>
              </div>
              <span>.</span>
            </div>

            <p className="font-scrawl text-base text-toffee-ink pt-3">
              With love, a future puppy parent
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-cocoa/10 pt-6">
            <span className="text-xs text-cocoa-soft/70">
              We respond promptly within a few hours 7 days a week.
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full sm:w-auto px-8"
            >
              <Send className="size-4" />
              <span>{isSubmitting ? "Posting letter..." : "Post my letter"}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
