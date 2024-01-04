import "./Member.css";

export const Members = () => {
  return (
    <div className="members">
      {fotoList.map((foto) => (
        <img key={foto.id} src={foto.urlFoto} className="members--fotos" />
      ))}
    </div>
  );
};

const fotoList: any[] = [
  { id: "1", urlFoto: "src/assets/fotka.jpg" },
  { id: "2", urlFoto: "src/assets/foto2.jpg" },
  { id: "3", urlFoto: "src/assets/foto1.jpg" },
  { id: "4", urlFoto: "src/assets/foto3.jpg" },
  { id: "5", urlFoto: "src/assets/foto2.jpg" },
];
