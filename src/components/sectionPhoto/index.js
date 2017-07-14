import style from './style';

function SectionPhoto({children, image, rightAlignedPhoto}) {

  if (rightAlignedPhoto) {
    return (<section className={style.sectionPhoto}>
      <div className={style.contentContainer}>
        {children}
      </div>
      <div className={style.photoContainer}>
        <img src={image} />
      </div>
    </section>)
  }

  return (<section className={style.sectionPhoto}>
    <div className={style.photoContainer}>
      <img src={image} />
    </div>
    <div className={style.contentContainer}>
      {children}
    </div>
  </section>)

}

export default SectionPhoto
