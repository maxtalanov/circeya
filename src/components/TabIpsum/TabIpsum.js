import "./TabIpsum.scss";
import Typography from "../ui/Typography/Typography";
import Gallery from "../ui/Gallery/Gallery";
import Modal from "../ui/Modal/Modal";

const mocArr = [
    {img: 'http://localhost:3001/gallery__img/img-1.png', caption:"...."},
    {img: 'http://localhost:3001/gallery__img/img-01.svg', caption:"...."},
    {img: 'http://localhost:3001/gallery__img/img-2.png', caption:"...."},
    {img: 'http://localhost:3001/gallery__img/img-3.png', caption:"...."},
    {img: 'http://localhost:3001/gallery__img/img-4.png', caption:"...."},
    {img: 'http://localhost:3001/gallery__img/img-5.png', caption:"...."},
    {img: 'http://localhost:3001/gallery__img/img-1.png', caption:"...."},
    {img: 'http://localhost:3001/gallery__img/img-2.png', caption:"...."},
    {img: 'http://localhost:3001/gallery__img/img-3.png', caption:"...."},
    {img: 'http://localhost:3001/gallery__img/img-4.png', caption:"...."},
    {img: 'http://localhost:3001/gallery__img/img-5.png', caption:"...."},
]

const TabIpsum = () => {
  return(
      <section className="ipsum">
          <Modal />
          <div className="ipsum__title">
              <Typography variant={"h1"}>
                  Lorem ipsum dolor sit amet
              </Typography>
          </div>

          <Gallery arr={mocArr}/>

      </section>
  )
}

export default TabIpsum;