const services = [
  {
    title: "AbeBooks",
    subtitle: "Books, art & collectibles",
    href: "#",
  },
  {
    title: "Amazon Web Services",
    subtitle: "Scalable Cloud Computing Services",
    href: "#",
  },
  {
    title: "Audible",
    subtitle: "Download Audio Books",
    href: "#",
  },
  {
    title: "IMDb",
    subtitle: "Movies, TV & Celebrities",
    href: "#",
  },
  {
    title: "Shopbop",
    subtitle: "Designer Fashion Brands",
    href: "#",
  },
  {
    title: "Amazon Business",
    subtitle: "Everything For Your Business",
    href: "#",
  },
  {
    title: "Prime Now",
    subtitle: "2-Hour Delivery on Everyday Items",
    href: "#",
  },
  {
    title: "Amazon Prime Music",
    subtitle: "100 million songs, ad-free Over 15 million podcast episodes",
    href: "#",
  },
];

function FooterServices() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
        {services.map((service) => (
          <a
            key={service.title}
            href={service.href}
            className="text-gray-300 hover:text-white"
          >
            <h4 className="font-bold text-sm">{service.title}</h4>
            <p className="text-xs mt-1">{service.subtitle}</p>
          </a>
        ))}
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">
        <div className="flex justify-center flex-wrap gap-4 mb-2">
          <a href="#" className="hover:text-white">
            Conditions of Use & Sale
          </a>
          <a href="#" className="hover:text-white">
            Privacy Notice
          </a>
          <a href="#" className="hover:text-white">
            Interest-Based Ads
          </a>
        </div>
        <p>
          © 1996-{new Date().getFullYear()}, Amazonia.com, Inc. or its
          affiliates
        </p>
      </div>
    </>
  );
}

export default FooterServices;
