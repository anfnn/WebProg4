import footerData from "../mockData/footerData"; // Импорт данных о футере

// Компонент для отображения заголовка футера
export const FooterHeader = ({ text, button_title }) => (
  <div className="footer-header">
    <h1 className="footer-text">{text}</h1>
    <div className="footer-btn">
      <button className="footer-button">{button_title}</button>
    </div>
  </div>
);

// Компонент для отображения адреса футера
export const FooterAddress = ({ src, title }) => (
  <div className="footer-details">
    <div className="footer_address">
      <img src={src} alt="footer address" />
    </div>
    <p className="address-text">{title}</p>
  </div>
);

// Компонент для отображения ссылок футера
export const FooterLinks = ({ title_link, links }) => {
  return (
    <div className="footer-links">
      <div className="links">
        <p className="links-title">{title_link}</p>
        <div className="links-text">
          {Array.isArray(links.title) ? (
            links.title.map((line, index) => (
              <a key={index} href={links.href}>{line}</a>
            ))
          ) : (
            <a href={links.href}>{links.title}</a>
          )}
        </div>
      </div>
    </div>
  );
};

// Компонент для отображения средней информации футера
export const FooterMiddleData = ({ title, lines }) => (
  <div className="middle__data">
    <p className="title">{title}</p>
    <div className="lines">
      {Array.isArray(lines) ? (
        lines.map((line, index) => <p key={index}>{line}</p>)
      ) : (
        <p>{lines}</p>
      )}
    </div>
  </div>
);

// Компонент для отображения конца футера
export const FooterEnd = ({ text }) => (
  <div className="footer-end">
    <p className="end-text">{text}</p>
  </div>
);

// Основной компонент футера
const Footer = () => {
  const { footerHeader, address, linksData, middleData, endData } = footerData;

  return (
    <footer>
      <FooterHeader {...footerHeader} />
      <div className="footer-details">
        <FooterAddress {...address} />
        <div className="footer-links">
          <FooterLinks {...linksData} />
          {middleData.map((item, index) => (
            <FooterMiddleData key={index} {...item} />
          ))}
        </div>
      </div>
      <FooterEnd {...endData} />
    </footer>
  );
};

export default Footer;