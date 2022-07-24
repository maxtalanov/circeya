import "./TabLorem.scss"
import Typography from "../ui/Typography/Typography";
import imgOne from "../../assets/julia-d-FlNTu2Bj4Dg-unsplash.png";
import imgTwo from "../../assets/taisiia-stupak-viq7xx1boxo-unsplash 1.png";

const TabLorem = () => {


    return (
        <section className="lorem">
            <div className="lorem__title">
                <Typography variant={"h1"}>
                    Lorem ipsum dolor sit amet
                </Typography>
            </div>


            <div className="lorem__list">
                <div className="lorem__container lorem__container_width_text">
                    <div className="box">
                        <Typography variant={"h2"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <p className="box__text">
                            Incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                            <br/>
                            <br/>
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum/
                            Incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                            Excepteur sint occaecat cupidatat.
                        </p>
                    </div>
                </div>

                <div className="lorem__container">
                    <img className="lorem__img" src={imgOne} alt=""/>
                </div>
            </div>

            <div className="lorem__list">
                <div className="lorem__container">
                    <img className="lorem__img" src={imgTwo} alt=""/>
                </div>

                <div className="lorem__container lorem__container_width_text">
                    <div className="box">
                        <Typography variant={"h2"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </Typography>
                        <p className="box__text">
                            Incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                            <br/>
                            <br/>
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum/
                            Incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                            Excepteur sint occaecat cupidatat.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default TabLorem;