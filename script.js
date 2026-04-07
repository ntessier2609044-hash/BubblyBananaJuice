const renderCatPackContact = () => {
  // 1. Create Header
  const header = document.createElement('header');
  header.id = 'mainHeader';

  const logoContainer = document.createElement('div');
  logoContainer.className = 'logo-container';

  const logoLink = document.createElement('a');
  logoLink.href = 'secret-discount.html';
  
  const logoImg = document.createElement('img');
  logoImg.id = 'appLogo';
  logoImg.src = 'Images/feline_flight_logo.avif';
  logoImg.alt = 'CatPack Logo';

  const h1 = document.createElement('h1');
  h1.textContent = 'CatPack';

  logoLink.append(logoImg, h1);
  logoContainer.appendChild(logoLink);

  const copyrightHeader = document.createElement('div');
  copyrightHeader.id = 'copyrightHeader';
  copyrightHeader.innerHTML = `<p>&copy; 2026 CatPack Inc.</p>`;

  header.append(logoContainer, copyrightHeader);

  // 2. Create Main Content
  const main = document.createElement('main');
  main.id = 'mainContent';

  const section = document.createElement('section');
  section.id = 'contactSection';

  section.innerHTML = `
    <h2>Contact Us</h2>
    <p>Have questions or need support? Reach out to us!</p>
    <ul>
      <li><strong>Email:</strong> support@catpack.com</li>
      <li><strong>Phone:</strong> 1-800-CAT-PACK</li>
      <li><strong>Corporate Location:</strong> 123 Feline Lane, Cat City, CA 90210</li>
    </ul>
  `;

  main.appendChild(section);

  // 3. Create Footer
  const footer = document.createElement('footer');
  footer.id = 'mainFooter';
  
  const footerNav = document.createElement('nav');
  footerNav.className = 'footer-nav';
  
  const navList = document.createElement('ul');
  const links = [
    { text: 'FAQ', href: 'faq.html' },
    { text: 'Models', href: 'models.html' },
    { text: 'Contact Us', href: 'contact.html' }
  ];

  links.forEach(linkData => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = linkData.href;
    a.textContent = linkData.text;
    li.appendChild(a);
    navList.appendChild(li);
  });

  footerNav.appendChild(navList);
  footer.appendChild(footerNav);

  // 4. Inject into the DOM
  document.body.append(header, main, footer);
};
document.addEventListener("unlockDiscount").click
let discountInput = document.getElementById("discountCodeInput");
  if(discountInput == "MEOW"){
    alert("You've unlocked 15% off!")
    //pop up window goes here
    console.log("worked")
    
    
  }

// Run the function when the window loads
window.onload = renderCatPackContact;