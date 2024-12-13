/* eslint-disable react/prop-types */
function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-bold text-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.text}>
            <a
              href={link.href}
              className="text-gray-300 hover:text-white text-sm"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
