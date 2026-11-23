const certificateFiles = [
  "ALURA/Acessibilidade web parte 1_ tornando seu front-end inclusivo.jpg",
  "ALURA/Bootstrap4-Landing-page 8h.png",
  "ALURA/Bootstrap-Single-page 12h.png",
  "ALURA/certificado - Acessibilidade.png",
  "ALURA/certificado_GRID.png",
  "ALURA/certificado_responsive.png",
  "ALURA/CSS_ dispondo elementos com Flexbox e Grid.jpg",
  "ALURA/FIGMA-10h.png",
  "ALURA/HTML5 e CSS3 parte 1_ crie uma página da Web.jpg",
  "ALURA/HTML5 e CSS3 parte 2_ posicionamento, listas e navegação .jpg",
  "ALURA/HTML5 e CSS3 parte 3_ trabalhando com formulários e tabelas.jpg",
  "ALURA/HTML5 e CSS3 parte 4_ avançando no CSS.jpg",
  "ALURA/JavaScript-10h.png",
  "ALURA/JavaScript-20h.png",
  "ALURA/LESS - 6h.png",
  "ALURA/SASS-10h.png",
  "CURSO EM VIDEO/HTML5 - 40h.pdf",
  "CURSO EM VIDEO/Javascript-40-Horas.pdf",
  "Origamid/certificado-css-avancado.pdf",
  "Origamid/certificado-flex-box.pdf",
  "Origamid/certificate-css-advanced.pdf",
  "ROCKETSEAT/Certificado_Board App.pdf",
  "ROCKETSEAT/Certificado_Fundamentos do Next.js.pdf",
  "ROCKETSEAT/Certificado_Masterizando o Tailwind.pdf",
  "ROCKETSEAT/Certificado_Next.js - Pet Shop.pdf",
  "ROCKETSEAT/Certificado_Next.js.pdf",
  "ROCKETSEAT/certificate-reactjs.pdf",
  "ROCKETSEAT/discover-conectar-rocketseat.pdf",
  "ROCKETSEAT/discover-especializar-certificate.pdf",
  "ROCKETSEAT/discover-fundamentar-certificate.pdf",
  "UDEMY/Web Design - Udemy.jpg",
  "WTM/womenTechmakers.pdf",
];

function getCertificateTitle(file: string) {
  const filename = file.slice(file.lastIndexOf("/") + 1);

  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/^(certificado|certificate)[-_ ]*/i, "")
    .replace(/^discover-/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b[a-zá-ú]/g, (letter) => letter.toUpperCase());
}

export const certificates = certificateFiles.map((file) => {
  const provider = file.slice(0, file.indexOf("/"));
  const isImage = /\.(png|jpe?g)$/i.test(file);

  return {
    file: encodeURI(`/certificados/${file}`),
    provider,
    title: getCertificateTitle(file),
    isImage,
  };
});
