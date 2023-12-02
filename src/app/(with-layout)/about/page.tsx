import { cn } from "@/lib/utils";

export default function About({ className, ...props }: any) {
  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <h1 className="text-3xl md:text-5xl text-center my-5">
            Hi, this is about page
          </h1>
        </div>
      </div>
    </div>
  );
}
