

const HomeBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/XLYn8Zn/96d7511783a73779a1a40f07c9511d44.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-7xl font-bold">Hello there</h1>
      <p className="mb-5 text-3xl">
A techinfo website offers concise and up-to-date information on all things tech, from gadgets to software, providing tech enthusiasts with the latest news, reviews, and insights in the technology world. </p>
      <button className="btn btn-primary ">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeBanner;