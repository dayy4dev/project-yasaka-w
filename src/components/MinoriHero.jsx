import {
  DisplayDiagonalArrow,
  HairlineDiagonalArrow,
  SwissAsterisk,
} from './PosterIcons';
import './MinoriHero.css';

export function MinoriHero() {
  return (
    <main className="poster-hero">
      {/* Shared SVG filter for monochrome die-cut sticker contour and subtle paper texture */}
      <svg className="poster-svg-defs" aria-hidden="true" focusable="false">
        <defs>
          <filter
            id="minori-sticker-outline"
            x="-12%"
            y="-12%"
            width="124%"
            height="124%"
            colorInterpolationFilters="sRGB"
          >
            <feColorMatrix
              in="SourceGraphic"
              type="saturate"
              values="0"
              result="mono"
            />
            <feComponentTransfer in="mono" result="monoCrisp">
              <feFuncR type="linear" slope="1.06" intercept="-0.02" />
              <feFuncG type="linear" slope="1.06" intercept="-0.02" />
              <feFuncB type="linear" slope="1.06" intercept="-0.02" />
            </feComponentTransfer>
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="5"
              result="dilated"
            />
            <feGaussianBlur
              in="dilated"
              stdDeviation="2.2"
              result="smoothed"
            />
            <feComponentTransfer in="smoothed" result="solidMask">
              <feFuncA type="linear" slope="24" intercept="-8" />
            </feComponentTransfer>
            <feFlood floodColor="#FFFFFF" result="stickerFill" />
            <feComposite
              in="stickerFill"
              in2="solidMask"
              operator="in"
              result="whiteSticker"
            />
            <feMerge>
              <feMergeNode in="whiteSticker" />
              <feMergeNode in="monoCrisp" />
            </feMerge>
          </filter>

          <filter id="paper-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.72"
              numOctaves="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              type="saturate"
              values="0"
              in="noise"
              result="monoNoise"
            />
          </filter>
        </defs>
      </svg>

      <section className="poster-top" aria-labelledby="poster-headline">
        <div className="poster-inner poster-top-inner">
          <div className="poster-monogram" aria-label="WZRD mark">
            <span>WZ</span>
            <span>RD</span>
          </div>

          <h1 id="poster-headline" className="poster-headline">
            <span className="headline-line">YOU MUST</span>
            <span className="headline-line headline-line--symbol">
              <span>DO</span>
              <SwissAsterisk className="headline-asterisk" />
              <span>THE</span>
            </span>
            <span className="headline-line">THINGS YOU</span>
            <span className="headline-line headline-line--symbol">
              <span>THINK</span>
              <DisplayDiagonalArrow className="headline-arrow" />
              <span>YOU</span>
            </span>
            <span className="headline-line headline-line--accent">
              CANNOT DO.
            </span>
          </h1>

          <div className="poster-meta-row">
            <p className="poster-quote">
              In essence, it&apos;s a powerful reminder that our perceived
              limitations are often self-imposed,
              <br className="quote-break" /> and that extraordinary things can
              happen when we dare to venture beyond them.
            </p>

            <div className="poster-date-block">
              <HairlineDiagonalArrow className="meta-arrow" />
              <time dateTime="2025-03-17" className="poster-date">
                <span>17/03</span>
                <span>2025</span>
              </time>
            </div>
          </div>
        </div>
      </section>

      <section className="poster-bottom" aria-labelledby="character-name">
        <div className="poster-crimson-backdrop" aria-hidden="true">
          <img
            src="/minori-character.png"
            alt=""
            width="1024"
            height="1024"
            className="backdrop-watermark"
          />
        </div>

        <div className="poster-inner poster-bottom-inner">
          <div className="character-identity">
            <HairlineDiagonalArrow className="identity-arrow" />

            <h2 id="character-name" className="character-title">
              <span className="character-first">MINORI</span>
              <span className="character-last">HANASATO.</span>
            </h2>

            <p className="character-jp" lang="ja">
              花里 みのり
            </p>

            <p className="character-group">
              MEMBER <strong>IDOL</strong> GROUP{' '}
              <strong>MORE MORE JUMP!</strong>
            </p>

            <SwissAsterisk className="identity-asterisk" />

            <p className="character-bio">
              MINORI IS AN OPTIMISTIC, HARD-WORKING GIRL WHO HAS SHOWN HER
              DETERMINATION AND DEDICATION TO BECOMING AN IDOL, SOMETHING OTHERS
              OFTEN COMPLIMENT HER ON
            </p>
          </div>

          <figure className="character-art-stage">
            <img
              src="/minori-character.png"
              alt="Monochrome sticker illustration of Minori Hanasato in a witch hat holding a playful cat and a wand"
              width="1024"
              height="1024"
              fetchPriority="high"
              decoding="sync"
              className="character-sticker"
            />
          </figure>
        </div>
      </section>

      <div className="poster-paper-overlay" aria-hidden="true">
        <svg className="paper-grain-svg" preserveAspectRatio="none">
          <rect width="100%" height="100%" filter="url(#paper-grain)" />
        </svg>
      </div>
    </main>
  );
}
