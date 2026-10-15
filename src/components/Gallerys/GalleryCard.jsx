function GalleryCard({ gallery }) {

  return (

    <div className="gallery-card">

      <img
        src={gallery.image}
        alt={gallery.title}
      />

      <div className="overlay">

        <h3>{gallery.title}</h3>

      </div>

    </div>

  );

}

export default GalleryCard;