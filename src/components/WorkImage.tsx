import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {props.video ? (
          <video 
            src={`/images/${props.video}`}
            poster={props.image}
            autoPlay 
            muted 
            playsInline 
            loop
            preload="metadata"
            onError={(e) => console.error('Video error:', e)}
            onEnded={(e) => {
              const video = e.currentTarget;
              video.currentTime = 0;
              video.play().catch(() => {});
            }}
            onPause={(e) => {
              const video = e.currentTarget;
              if (!video.ended) {
                video.play().catch(() => {});
              }
            }}
            onLoadedData={(e) => {
              e.currentTarget.play().catch(() => {});
            }}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              imageRendering: 'high-quality'
            }}
          />
        ) : (
          <img 
            src={props.image} 
            alt={props.alt}
            loading="lazy"
            decoding="async"
            style={{
              imageRendering: '-webkit-optimize-contrast',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }}
          />
        )}
      </a>
    </div>
  );
};

export default WorkImage;
