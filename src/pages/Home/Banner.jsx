import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Hello I'm Pic Seek</h1>
          <p className="py-6">
            Pic Seek allows you to effortlessly generate high-quality,
            AI-powered images. Whether you're a creator or a business, our tool
            helps you bring your ideas to life in a matter of moments.
          </p>
          <Link to={"/generate"} className="btn btn-primary">
            Generate Image
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
