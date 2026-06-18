import { useState } from "react";
import "./CommunityGallery.scss";

const images = import.meta.glob("../../assets/images/quotes/*.jpg", {
  eager: true,
  import: "default",
});

function CommunityGallery() {
  const quotes = Object.values(images);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="quotes">
      <div className="container">
        <div className="quotes__grid">
          {quotes.map((image, index) => (
            <div className="quotes__card" key={index}>
              <img
                src={image}
                alt={`Цитата ${index + 1}`}
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Цитата" className="image-modal__img" />
        </div>
      )}
    </section>
  );
}

export default CommunityGallery;
