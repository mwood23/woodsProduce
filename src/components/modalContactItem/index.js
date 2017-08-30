import style from './style';

const ModalContactItem = ({contactTitle, contactDetail, image, copyIcon}) => (
  <div className={style.modalContactItem}>
    <img className={style.contactIcon} onClick={this.handleCloseModal} src={image} />
    <div>
      <p className={style.contactTitle}>{contactTitle}</p>
      <div className={style.contactText}>
        {contactDetail}{copyIcon}
      </div>
    </div>
  </div>
)

export default ModalContactItem
