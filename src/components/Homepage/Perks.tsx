import { Truck, CheckCircle, HeartHandshake } from "lucide-react";
import Image from "next/image";

const Perks = async () => {
  const perks = [
    {
      id: 1,
      name: "Instant Delivery",
      icon: Truck,
      description:
        "Get your meal delivered at a blink, our super-powered Riders are always there for you.",
    },
    {
      id: 2,
      name: "Guaranteed Quality",
      icon: CheckCircle,
      description:
        "We regularly verify the food quality with our Quality Assurance Team. We are unique for providing better quality standards.",
    },
    {
      id: 3,
      name: "For the Community",
      icon: HeartHandshake,
      description:
        "We believe that business success comes with happy customers. You are always special to us, and will be treated like one.",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
      {perks.map((item: any) => (
        <div
          key={item.id}
          className="text-center mb-5 md:flex md:items-start md:text-left lg:block lg:text-center "
        >
          <div className="md:flex-shrink-0 flex justify-center">
            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100">
              {<item.icon className="w-1/3 h-1/3" />}
            </div>
          </div>
          <div className="m-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
            <h3 className="text-base font-medium text-gray-800 dark:text-gray-100 ">
              {item.name}
            </h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Perks;
