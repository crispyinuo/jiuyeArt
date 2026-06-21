import { useScrollReveal } from '../../hooks/useScrollReveal'
import './ArtistIntro.scss'

export function ArtistIntro() {
  const textRef = useScrollReveal<HTMLDivElement>(0.1)

  return (
    <section className="artist-intro" id="about">
      <div className="artist-intro__inner">
        <div className="artist-intro__portrait">
          <img
            src="/images/profile/jiuye-portrait.png"
            alt="九野 Jiuye"
            className="artist-intro__portrait-img"
          />
        </div>

        <div className="artist-intro__text reveal" ref={textRef}>
          <span className="section-label">About · 关于</span>

          <h2 className="artist-intro__heading">
            <span className="chinese artist-intro__heading-zh">九野</span>
            <span className="artist-intro__heading-en">Jiuye</span>
          </h2>

          <p className="artist-intro__bio artist-intro__bio--zh chinese">
            九野，取"九野苍茫"之意——画布即旷野，笔触即行旅。他以油彩游走于东西之间：江南水乡的白墙黛瓦，欧陆山村的炊烟晨光，冰川湖畔的静谧无言，皆可入画。笔下不问出处，只问感受。流体画是他的另一种语言——颜料在此不再被驱使，而是被释放，流淌、碰撞、沉积，如熔岩涌动，如星河漫溢，自行寻找归宿。
          </p>

          <p className="artist-intro__bio">
            Nine fields, nine worlds. 九野 paints at the intersection of discipline
            and abandon — conjuring the quiet lanes of a Jiangnan water town and the
            mist-softened hills of a European village with the same devoted hand that
            dissolves into rivers of fluid colour, where pigment moves by gravity and
            feeling alone. A glacial lake, a golden valley at dusk, a knowing frog in
            a red velvet suit — each work an act of honest looking, unbounded by
            geography or genre.
          </p>

          <a className="artist-intro__bio-link" href="#about">
            View Full Bio →
          </a>
        </div>
      </div>
    </section>
  )
}
