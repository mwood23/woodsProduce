import style from './style';
import LazyImage from '../lazyImage';

function SectionPhoto({children, image, rightAlignedPhoto}) {

  if (rightAlignedPhoto) {
    return (<section className={style.sectionPhoto}>
      <div className={style.contentContainer}>
        {children}
      </div>
      <div className={style.photoContainer}>
        <LazyImage image={image} height={300} />
      </div>
    </section>)
  }

  return (<section className={style.sectionPhoto}>
    <div className={style.photoContainer}>
      <LazyImage image={image} height={300} />
    </div>
    <div className={style.contentContainer}>
      {children}
    </div>
  </section>)

}

export default SectionPhoto
