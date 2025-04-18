import { cn } from "@/lib/utils";

export default function FortyTwo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 928 578"
      className={cn("fill-current", className)}
    >
      <title>42 Icon</title>
      <polygon points="32,412.6 362.1,412.6 362.1,578 526.8,578 526.8,279.1 197.3,279.1 526.8,-51.1 362.1,-51.1 32,279.1 " />
      <polygon points="597.9,114.2 762.7,-51.1 597.9,-51.1 " />
      <polygon points="762.7,114.2 597.9,279.1 597.9,443.9 762.7,443.9 762.7,279.1 928,114.2 928,-51.1 762.7,-51.1 " />
      <polygon points="928,279.1 762.7,443.9 928,443.9 " />
    </svg>
  );
}
