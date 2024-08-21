import React from 'react';
import styles from '@/styles/tour.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tour = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992, // Below 992px width
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, // Below 768px width
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576, // Below 576px width
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Շրջագայություններ 2024-2025</h1>
        </div>
        <div>
          <Slider {...settings}>
            <div>
              <div className={styles.aboutItem}>
                <div>
                  <div className={styles.upSide}>
                    <h2>ESTONIA</h2>
                    <h3>2024</h3>
                  </div>
                  <div className={styles.downSide}>
                    <span>October</span>
                    <div className={styles.btn}>
                      <button>Buy Tickets</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.aboutItem}>
                <div>
                  <div className={styles.upSide}>
                    <h2>ESTONIA</h2>
                    <h3>2024</h3>
                  </div>
                  <div className={styles.downSide}>
                    <span>October</span>
                    <div className={styles.btn}>
                      <button>Buy Tickets</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.aboutItem}>
                <div>
                  <div className={styles.upSide}>
                    <h2>ESTONIA</h2>
                    <h3>2024</h3>
                  </div>
                  <div className={styles.downSide}>
                    <span>October</span>
                    <div className={styles.btn}>
                      <button>Buy Tickets</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.aboutItem}>
                <div>
                  <div className={styles.upSide}>
                    <h2>ESTONIA</h2>
                    <h3>2024</h3>
                  </div>
                  <div className={styles.downSide}>
                    <span>October</span>
                    <div className={styles.btn}>
                      <button>Buy Tickets</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.aboutItem}>
                <div>
                  <div className={styles.upSide}>
                    <h2>ESTONIA</h2>
                    <h3>2024</h3>
                  </div>
                  <div className={styles.downSide}>
                    <span>October</span>
                    <div className={styles.btn}>
                      <button>Buy Tickets</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.aboutItem}>
                <div>
                  <div className={styles.upSide}>
                    <h2>ESTONIA</h2>
                    <h3>2024</h3>
                  </div>
                  <div className={styles.downSide}>
                    <span>October</span>
                    <div className={styles.btn}>
                      <button>Buy Tickets</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.aboutItem}>
                <div>
                  <div className={styles.upSide}>
                    <h2>ESTONIA</h2>
                    <h3>2024</h3>
                  </div>
                  <div className={styles.downSide}>
                    <span>October</span>
                    <div className={styles.btn}>
                      <button>Buy Tickets</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Tour;