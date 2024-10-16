import footerData from "../mockData/footerData"; // Импорт данных о футере

// Основной компонент футера
const Footer = () => {
  const {  
    header,
    button,
    img,
    addres,
    title,
    links,
    company,
    contacts,
    end} = footerData;

  return (
      <>
      <footer>
        <div class="footer-header">
          <h1 class="footer-text">{header.num1}<br/>{header.num2}</h1>
          <div class="footer-btn">
            <button class="footer-button">{button}</button>
          </div>
        </div>
        <div class="footer-details">
          <div class="footer_address">
            <img src="${img}"/>
            <p class="address-text">
              ${addres.num1}<br/>{addres.num2}<br/>{addres.num3}
            </p>
          </div>
          <div class="footer-links">
            <div class="links">
              <p class="links-title">{title.num1}</p>
              <div class="links-text">
                <a>{links.num1}</a>
                <a>{links.num2}</a>
                <a>{links.num3}</a>
                <a>{links.num4}</a>
              </div>
            </div>
            <div class="footer_companies">
              <p class="companies-title">{title.num2}</p>
              <div class="companies-text">
                <a>{company.num1}</a>
                <a>{company.num2}</a>
                <a>{company.num3}</a>
              </div>
            </div>
            <div class="footer_contacts">
              <p class="contacts-title">{title.num3}</p>
              <div class="contacts-text">
                <p>{contacts.num1}<br/>{contacts.num12}</p>
                <p>{contacts.num2}</p>
                <p>{contacts.num3}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-end">
          <p class="end-text">
            {end}
            </p>
        </div> 
      </footer>
      </>
  );
};

export default Footer;