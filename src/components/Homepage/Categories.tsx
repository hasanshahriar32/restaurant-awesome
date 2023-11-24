import Image from "next/image";

const Categories = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/menu`, {
    next: {
      revalidate: 3600,
    },
  });
  // ssg:  for the static pages
  // isr: for the static page but you want to rebuild it periodically
  // ssr: for the dynamic pages
  const data = await res.json();
  //   console.log(data);
  return (
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
      {data.map((item: any) => (
        <div
          key={item.id}
          className="text-center mb-5 md:flex md:items-start md:text-left lg:block lg:text-center "
        >
          <div className="md:flex-shrink-0 flex justify-center">
            <div className="h-36 w-36 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-100">
              <Image
                width={400}
                height={400}
                className="rounded-full"
                quality={100}
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                src={item?.image_url ? `${item?.image_url}` : ""}
                alt=""
              />
            </div>
          </div>
          <div className="m-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
            <h3 className="text-base font-medium text-gray-800 dark:text-gray-100 ">
              {item.category}
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

export default Categories;
