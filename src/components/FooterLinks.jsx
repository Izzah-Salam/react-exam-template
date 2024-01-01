function FooterLinks({ links, title }) {
  return (
    <div>
      <h2 className=" uppercase font-medium mb-5">{title}</h2>
      <ul className="mt-2 space-y-2">
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
}
export default FooterLinks;
