export default function Home() {
  return (
    <div className="hero bg-base-200 sm:mt-24 p-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className="text-5xl font-bold">Game Lists!</h1>
          <p className="py-6">
            Search for superheros and view their details. See pictures of them
            and other things.
          </p>
        </div>
      </div>
    </div>
  );
}
