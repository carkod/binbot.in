const ServiceProcessCards = ({ data }) => {
  return (
    <div className="hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-12 flex flex-col items-center rounded-lg border bg-white shadow-md md:flex-row">
      <div className="rounded-t-lg object-cover p-5 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg">
        <i className={data.iconClasses} />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="text-gray-900 mb-2 text-2xl font-bold tracking-tight dark:text-white">
          {data.title}
        </h5>
      </div>
    </div>
  );
};

export default ServiceProcessCards;
