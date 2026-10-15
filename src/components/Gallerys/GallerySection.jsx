import "./Gallery.css";
import GalleryCard from "./GalleryCard";

function GallerySection() {

  const gallery = [

    {
      id:1,
      title:"Research Laboratory",
      image:"https://images.unsplash.com/photo-1532187643603-ba119ca4109e"
    },

    {
      id:2,
      title:"Drug Discovery",
      image:"https://images.unsplash.com/photo-1579154204601-01588f351e67"
    },

    {
      id:3,
      title:"AI Laboratory",
      image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
    },

    {
      id:4,
      title:"Conference",
      image:"https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
    },

    {
      id:5,
      title:"Workshop",
      image:"https://images.unsplash.com/photo-1511578314322-379afb476865"
    },

    {
      id:6,
      title:"Research Equipment",
      image:"https://images.unsplash.com/photo-1581093458791-9f3c3900df4b"
    },

    {
      id:7,
      title:"Students",
      image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },

    {
      id:8,
      title:"Innovation",
      image:"https://images.unsplash.com/photo-1518770660439-4636190af475"
    }

  ];

  return (

    <section className="gallery">

      <h1>Gallery</h1>

      <p className="gallery-subtitle">
        Explore moments from our research laboratory, workshops,
        conferences and scientific activities.
      </p>

      <div className="gallery-container">

        {gallery.map((item)=>(

          <GalleryCard
            key={item.id}
            gallery={item}
          />

        ))}

      </div>

    </section>

  );

}

export default GallerySection;