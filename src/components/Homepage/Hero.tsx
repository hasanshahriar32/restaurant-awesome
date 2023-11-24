import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";

const Hero = () => {
  return (
    <>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
          Discover Culinary Excellence at{" "}
          <span className="text-primary">
            Restaurant
            <span className="text-destructive font-extrabold">X</span>
          </span>
        </h1>
        <p className="mt-5 text-xl max-w-prose text-muted-foreground">
          Our Commitment to Freshness and Quality. Find the perfect ingredient
          for your next meal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link className={buttonVariants()} href="/products">
            Browse Trendy
          </Link>
          <Button variant="ghost">Our quality promise &rarr;</Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
