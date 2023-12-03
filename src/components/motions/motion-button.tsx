"use client";

import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";

interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: React.HTMLProps<HTMLElement>["className"];
}

export default function BaseButton({
  children,
  className,
  ...btnProps
}: BaseButtonProps) {

  return (
    <motion.div whileHover={{ y: -3 }} whileTap={{ y: 0 }}>
      <Button
        className={`min-w-fit font-semibold data-[hover=true]:!opacity-100 rounded-medium ${className}`}
        {...(btnProps as any)}
      >
        {children}
      </Button>
    </motion.div>
  );
}

interface PrimaryButtonProps extends BaseButtonProps {}
export function PrimaryButton({
  children,
  className,
  ...btnProps
}: PrimaryButtonProps) {
  return (
    <BaseButton
      className={`bg-purple hover:bg-purple-button-hover ${className}`}
      {...btnProps}
    >
      {children}
    </BaseButton>
  );
}

interface SecondaryButtonProps extends BaseButtonProps {}
export function SecondaryButton({
  children,
  className,
  ...btnProps
}: SecondaryButtonProps) {
  return (
    <BaseButton
      className={`bg-blue hover:bg-blue-button-hover ${className}`}
      {...btnProps}
    >
      {children}
    </BaseButton>
  );
}
