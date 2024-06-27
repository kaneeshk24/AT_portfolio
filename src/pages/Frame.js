import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <div className={styles.achievementsParent}>
      <div className={styles.achievements}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <div className={styles.div}>2019</div>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>2021</div>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>2022</div>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>2023</div>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.parent}>
              <div className={styles.div}>2024</div>
              <div className={styles.frameChild} />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.silverWrapper}>
              <img className={styles.silverIcon} alt="" src="/silver@2x.png" />
            </div>
            <div className={styles.bronzeParent}>
              <img className={styles.silverIcon} alt="" src="/bronze@2x.png" />
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-95@2x.png"
              />
              <img className={styles.silverIcon} alt="" src="/gold@2x.png" />
            </div>
            <div className={styles.bronzeParent}>
              <img className={styles.silverIcon} alt="" src="/bronze@2x.png" />
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-96@2x.png"
              />
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-97@2x.png"
              />
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-98@2x.png"
              />
              <img className={styles.silverIcon} alt="" src="/silver@2x.png" />
              <img className={styles.silverIcon} alt="" src="/bronze@2x.png" />
            </div>
            <div className={styles.silverWrapper}>
              <img className={styles.silverIcon} alt="" src="/silver@2x.png" />
            </div>
            <div className={styles.image99Parent}>
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-99@2x.png"
              />
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-96@2x.png"
              />
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-102@2x.png"
              />
              <img
                className={styles.silverIcon}
                alt=""
                src="/image-101@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.myAchievementsParent}>
          <div className={styles.myAchievements}>my Achievements</div>
          <i className={styles.clickToExpand}>Click to expand</i>
        </div>
      </div>
      <div className={styles.aboutMe}>
        <img
          className={styles.a6e65cb81OIcon}
          alt=""
          src="/53760621691-4a6e65cb81-o@2x.png"
        />
        <div className={styles.aboutMeChild} />
        <div className={styles.aboutMeItem} />
        <div className={styles.iHaveBeenContainer}>
          <p className={styles.iHaveBeen}>
            I have been an athlete since I was 8 years old, and I have been
            playing at the highest level since I was 11. I became the Under-15
            Indian National Champion, in May 2022, by winning the National
            Championships, 2021.
          </p>
          <p className={styles.iHaveBeen}>
            Since then, I have never looked back, and I have represented INDIA
            in the Junior Asian Championships, Laos, 2022; and have participated
            in a few WTT Youth Contender Tournaments, maintaining a World Rank
            of 239.
          </p>
        </div>
      </div>
      <div className={styles.heroSection}>
        <img
          className={styles.f0c85fOIcon}
          alt=""
          src="/53773407723-1041f0c85f-o@2x.png"
        />
        <div className={styles.heroSectionChild} />
        <div className={styles.hiIAm}>Hi, I am Avani Tripathi</div>
        <div className={styles.iAmAn}>
          I am an Indian National Table Tennis Player
        </div>
        <img className={styles.heroSectionItem} alt="" src="/arrow-5.svg" />
      </div>
      <div className={styles.frameChild2} />
      <div className={styles.groupDiv}>
        <div className={styles.avaniLogoCondensed1Parent}>
          <img
            className={styles.avaniLogoCondensed1}
            alt=""
            src="/avani--logo-condensed-1@2x.png"
          />
          <div className={styles.aboutParent}>
            <div className={styles.about}>about</div>
            <div className={styles.about}>achievements</div>
          </div>
        </div>
        <div className={styles.groupChild} />
      </div>
      <img
        className={styles.footerAvani1}
        alt=""
        src="/footer-avani-1@2x.png"
      />
      <div className={styles.myCoaches}>my coAches</div>
    </div>
  );
};

export default Frame;
